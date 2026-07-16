# MJPC 6 — Document de cadrage

> **Date** : 14 juillet 2026, fin de la conversation MJPC 5.
> Compagnons : `MJPC5-cadrage_07_2026.md` (état au 13/07) · `mjpc-doctrine.md` · `mjpc-session-recap.md`.
> **Ce document fait foi en cas de contradiction avec les précédents.**
>
> **Règle de méthode, qui prime** : ne jamais affirmer un comportement sans l'avoir lu dans le code
> ou vu dans les données. Respectée pendant MJPC 5 — elle a attrapé 3 sites dangereux que le
> repérage initial avait manqués.

---

## 1. Pourquoi MJPC 5 s'est arrêtée ici

Paul a demandé que **Claude vérifie lui-même GitHub ET Firebase** après chaque livraison (fini les
allers-retours manuels). GitHub : opérationnel immédiatement (vérification par
`raw.githubusercontent.com`, faite pour les 2 apps livrées). Firebase : nécessite d'ajouter le domaine
`mjpc-hub-default-rtdb.europe-west1.firebasedatabase.app` aux « Additional allowed domains »
(Settings → Capabilities → Code execution and file creation → Allow network egress).
**Ce réglage ne s'applique qu'aux NOUVELLES conversations** → arrêt propre de MJPC 5,
reprise en MJPC 6 avec l'accès Firebase.

**Premier geste de MJPC 6 : tester l'accès** —
`curl -s "https://mjpc-hub-default-rtdb.europe-west1.firebasedatabase.app/manifestes.json"`
Attendu : le JSON des manifestes publiés par les 2 apps traitées (si Paul a ouvert leurs panneaux prof
depuis le déploiement), ou `null` sinon. Si « Host not in allowlist » : le réglage n'est pas pris,
le refaire avant tout.

---

## 2. Ce qui a été fait pendant MJPC 5

### 2.1 MJPC-CORE v1.0.0 — le socle commun (créé, testé, en production)

Fichier maître : **`mjpc-core.js`** (racine du dépôt — copie de référence versionnée, jamais chargée
en prod : le bloc est **recopié en entier dans chaque app**, autonomie oblige). Contenu :

| Fonction | Rôle | Traduction pédagogique |
|---|---|---|
| `sanMJPC(s)` | clé élève canonique (`clement_noe`) | le fil unique du profil longitudinal |
| `cleClasse(nom)` | identité : la clé de `/classes` telle quelle, **personne ne re-slugifie** | tout le travail d'une classe dans le même tiroir |
| `classeTestId()` / `estClasseTest()` | classe-brouillon `_test_<app>`, héritage « CLASSE TEST » toléré en lecture | le brouillon ne pollue jamais les vrais dossiers |
| `extractEleves(fb,cfg)` | lecture de roster tolérante aux 3 formats réels du hub | plus d'élève fantôme ni de `[object Object]` |
| `ecrireClasse(db,nom,eleves,meta?,cb?)` | **transaction non destructive** : remplace la liste seule, préserve `archivee`/`niveau`/…, normalise les élèves-objets en chaînes, purge les résidus indexés `{0:…}` | une app ne peut plus effacer ce qu'une autre sait |
| `renvoyerVersMJPC(motif)` | remplace les boutons de suppression des apps | une seule porte pour détruire ; derrière, on archive toujours avant |
| `resolveEleves(roster,saisies)` | identification nominative → N ≥ 1 élèves singuliers `{nom, cle}` | l'élève reste nominal même en binôme/groupe/classe entière |
| `publierManifeste(db)` | publie `manifestes/<app>` : `MJPC_APP` + `MJPC_MANIFESTE` + `MJPC_PURGE` (vue projetée, ADDITIVE — les constantes en dur restent source de vérité) | la console de rentrée lira des contrats, pas nos souvenirs |

Chaque app remplit un bloc **DÉCLARATION** : `MJPC_APP {id, nom, contenant}` (contenant ∈ aucun /
binome / groupe / classe — le groupe est un CONTENANT, jamais une identité), `MJPC_MANIFESTE {noeuds,
notions}`, `MJPC_PURGE {preserver, purger}` (wildcards `*` sur un niveau, interprétés par la console
en Phase 2).

**Validation** : 33/33 tests sur l'export réel du hub (`sanMJPC` sur cas accentués/tirets,
`extractEleves` sur les 3 formats dont les classes tordues `CLASSE TEST` et `_TEST`, merge de
transaction préservant `archivee`, `resolveEleves` solo/binôme/doublons/inconnus).

### 2.2 Apps traitées : 2 sur 10 — déployées et vérifiées

**`evaluation-qcm.html` v2** (13 gestes) — poussée, **vérifiée bit à bit en ligne** :
- socle + déclaration (`id:"evaluation-qcm"`, contenant `aucun`) ;
- **8 écritures `/classes` converties** à `ecrireClasse` (création, édition, ajout d'élève,
  migration au boot, classe test, import de snapshot) ;
- **le `.set()` sur la RACINE `/classes` est mort** (import de snapshot → restauration classe par
  classe, non destructive, sans suppression silencieuse) ;
- **3 boutons désarmés → renvoi MJPC** : suppression d'élève, suppression de classe, « purger toutes
  les classes » (qui rasait le nœud partagé pour toutes les apps) ;
- `slugClasse` → **identité** (décision §12 appliquée) ; `TEST_CLASSE_SLUG = TEST_CLASSE_NOM
  = "_test_evaluation-qcm"` ;
- sexes de la classe test écrits dans `qcm/eleveSexes` (leur vrai nœud), plus jamais dans `/classes` ;
- exclusion d'archivage des profils généralisée à toute classe test/interne ;
- manifeste + contrat de purge : **preserver** `qcm/evaluations`, `qcm/settings` (corpus) ;
  **purger** `qcm/sessions|sessionActive|presence|qrScans|eleveSexes|classes` (données élèves).
- Effet de bord heureux : la vieille dette « niveau écrasé par correction_dictee » se referme
  (les métadonnées survivent désormais à toutes les écritures).

**`correction_dictee.html` v2** (7 gestes) — poussée, **vérifiée bit à bit en ligne** :
- socle + déclaration (`id:"correction_dictee"`, contenant `aucun`) ; `san()` aliasée sur `sanMJPC` ;
- **le `.set()` destructif de création de classe est mort** (→ `ecrireClasse`) ;
- suppression de classe (remove sec sur nœud partagé) → renvoi MJPC ;
- classe test « CLASSE TEST » → **`_test_correction_dictee`** (config de la dictée fictive incluse) ;
- manifeste + purge : **preserver** `correction_dictee/*/config` et `*/dictee` (textes = conception) ;
  **purger** `*/results|autocorrection|absents|amenages|exercices|exercices_results|copyOptions|copyPublishedAt`
  + `classes_amenages` ;
- **non touchés, à dessein** : suppression de dictée (elle exporte déjà un JSON avant d'effacer —
  exemplaire), panneau élève (c'est LE MODÈLE de la passe panneaux), onglet Exercices (isolé, prêt
  pour extraction en « Banque d'exercices »).
- Validation : 8/8 au banc d'exécution sur données réelles + `node --check` + acorn.

### 2.3 Découvertes de session (vérifiées dans le code/les données)

1. **`CLAUDE.md` du dépôt : très périmé** (décrit 5 fichiers et la base `dictee-5e-ch4`) — dette ⑭.
2. **Nœud `/codes` mixte** : les codes de session du débat (`ORCA-8683` → `"planete-des-singes-3e"`)
   cohabitent avec les codes élèves MJPC (`{code,name}`) — dette ⑮, disparaît avec l'alignement
   du panneau débat (plus de code du tout).
3. `/classes` réel : 4 vraies classes (objet indexé + `archivee`), `CLASSE TEST` (incohérente :
   5 élèves indexés vs 4 dans `.eleves`), `_TEST` (`{nom, eleves:[{nomComplet}]}`, noms en formats
   mélangés). C'est le banc d'essai du socle — **ne pas nettoyer avant la fin de la Phase 1**.
4. `/codes` : 4 clés non canoniques identifiées = `CL_MENT_Lylou` + `PINEAU_Cl_mence` (orphelins §B.6,
   les `name` portent l'accent), `MONSIEUR_Meney` (test), `ORCA-8683` (débat, légitime).
5. `/results` : 29 corrections réelles, **toutes** en ancienne san → à récupérer (dette ④).
6. `mjpcProfils` : élèves déjà en clé canonique ✔, mais classes en slug-tirets (`4e-banksy`) —
   restructuration = **Phase 4**, ne pas y toucher avant.
7. `extractEleves` : deux variantes coexistaient (récente dans correction_dictee/index, ancienne dans
   pilotage_debat/worktrack) — le canon du socle est la récente.

---

## 3. Décisions figées pendant MJPC 5

| Décision | Statut |
|---|---|
| **Panneaux de contrôle unifiés** : `correction_dictee` est LE modèle ; `pilotage_debat_s3` perd son login par code (élève : classe → identification nominative ; prof : `PROF_CODES`, plus de `profPassword` Firebase). | **validée (Paul)** |
| **L'élève est toujours singulier** : toute identification produit des clés canoniques individuelles ; le groupe (binôme débat, écran partagé worktrack, classe entière des futures apps) est un CONTENANT déclaré (`MJPC_APP.contenant`), jamais une identité. Le profil longitudinal recoupe travaux perso + groupe + classe entière. | **validée (Paul) — loi du socle** |
| **Mode test unique** : `_test_<app>`, invisible élèves, jamais archivé, héritage toléré en lecture. | **validée (Paul)** |
| **Slug de classe** : la clé de `/classes` est l'unique étiquette (option a — zéro migration ; la normalisation des noms se fera à la création des classes 2026-2027). | **validée (Paul)** |
| **Traduction pédagogique systématique** : Paul pilote le pédagogique, Claude le technique, mais chaque choix technique proposé est accompagné de sa traduction pédagogique. Pas de jargon non explicité (« convention », « slug »… → reformuler en réalités concrètes). | **exigence permanente (Paul)** |
| **Vérifications par Claude** : après chaque push, Claude vérifie le déployé (GitHub, bit à bit) ET l'état Firebase (dès MJPC 6). Paul ne va plus voir lui-même. | **exigence permanente (Paul)** |
| **Écart assumé** : les panneaux élève ne sont PAS alignés dans la passe socle (le squelette commun doit d'abord être EXTRAIT du modèle). Chaque app sera donc touchée une 2e fois (passe panneaux, toutes ensemble). Entorse contrôlée au « toucher une fois », au profit du « pas d'à-peu-près ». | acté |

---

## 4. Plan MJPC 6 — où reprendre, exactement

**Étape 0 — Accès Firebase** : tester la lecture REST (cf. §1). Puis vérifier les manifestes :
`manifestes/evaluation-qcm` et `manifestes/correction_dictee` doivent exister si Paul a ouvert les
panneaux prof depuis les déploiements. Sinon, lui demander d'ouvrir chaque app côté prof une fois.

**Étape 1 — Reprendre la passe socle, app par app** (ordre par danger décroissant) :
1. **`applause_meter`** ← ON EN ÉTAIT LÀ (set destructif + suppression d'élève : 2 dettes) ;
2. `reecriture` puis `reecriture_bb4e` (set destructif à la création de classe, L1324/L330 —
   quasi identiques, traiter en miroir) ;
3. `dictee_universelle` (suppression d'élève à désarmer ; lecture seule sur `/classes`) ;
4. `worktrack`, `pilotage_debat_s3`, `analyse_logique`, `index` (lecture seule : socle + manifeste +
   contrat de purge ; pour index/MJPC, le manifeste décrit la console elle-même).
   ⚠ `worktrack` : règle du seed embarqué (toute modif de contenu livrée en JSON doit être reflétée
   dans le seed `let CHAPTER` de la même livraison). ⚠ `pilotage_debat_s3` : dire « chantier à
   reprendre » ; il est en JS vanilla (pas React) — couture spécifique.
   Méthode par app : sauvegarde → lecture des sites (`grep ref("classes` + suppression + test) →
   audit COMPLET après édition (le grep final a attrapé 3 sites manqués sur le QCM) →
   `node --check` + acorn → banc d'exécution du segment livré sur `hub.json` → livraison →
   push Paul → vérification GitHub bit à bit + Firebase par Claude.

**Étape 2 — Passe panneaux** (toutes apps ensemble) : extraire le squelette commun de
`correction_dictee` (écran d'entrée Mode élève / code prof `PROF_CODES` ; identification classe →
nominative via `resolveEleves` ; profil test MENEY/Monsieur ; auto-login par params URL), puis
l'appliquer partout — débat inclus (chips 1-3 élèves = cas général N≥1 ; le code ORCA disparaît,
la question suspendue « code commun vs code par classe » tombe).

**Étape 3 — Dette B (nettoyage du hub)** — exécutable PAR CLAUDE via REST dès l'accès ouvert,
sous contrôle de Paul, archive avant tout : ④ récupérer `/results` (29, appariement type Unifier) ·
⑤ `CLASSE TEST`, `_TEST`, `dictee_fictive_test`, `qcm/sessionActive/_test`, `debat_singes`,
`students_sim`, `MONSIEUR_Meney` · ⑥ Lylou/Clémence (corriger l'accent dans `/classes` puis Unifier) ·
⑦ fermer `plickers-mjpc`, archiver `defi-phrases5e`, `dictee-3e-labas` · élucider `eval-3e-paroles`
(30 résultats de 3e : archiver ou récupérer ?). **Seulement après la fin de l'étape 1** (les classes
tordues servent de banc d'essai).

**Ensuite** : Phase 2 (console Brique 2 : cascade de suppression — les renvois des apps pointent
dessus —, exécuteur du contrat de purge, file de report pour les 414 écritures sans filet, pastilles,
ré-import profond, garde-fou homonymes) → Phase 3 Concordance → Phase 4 Profils → Phase 5 Reset.

---

## 5. Prompt d'amorçage (à coller en tête de MJPC 6)

> **Reprise du chantier MJPC — conversation MJPC 6.**
>
> Lis `MJPC6-cadrage.md` (ce document — il fait foi), clone le dépôt
> `siteflow-io/monsieurjaipascompris`, et teste ton accès Firebase
> (`curl .../manifestes.json` — le domaine a été ajouté à tes réglages réseau).
>
> **État** : socle MJPC-CORE v1.0.0 en production dans `evaluation-qcm` et `correction_dictee`
> (vérifiées en ligne). Reste 8 apps.
>
> **Objectif** : continuer la Phase 1 — Normalisation, en commençant par **`applause_meter`**.
> Même méthode : sauvegarde, lecture des sites, socle + manifeste + contrat de purge en un passage,
> audit complet, double parseur, banc d'exécution sur le hub, vérifications GitHub + Firebase par toi.
>
> **Règles** : croiser le code avant d'affirmer · traduction pédagogique de chaque choix technique ·
> pas de jargon non explicité · ne pas bifurquer · dettes en fin de chaque message.
>
> Je joins : le dernier export du hub (`mjpc-hub-default-rtdb-export.json`).

### Fichiers à joindre à MJPC 6
`MJPC6-cadrage.md` · le dernier export du hub. *(Le dépôt se clone ; `mjpc-core.js` y est si Paul
l'a poussé — sinon le bloc de référence est inliné dans les 2 apps traitées, ligne ~1017 du QCM.)*

---

## 6. Prompt rétro-ingénié de MJPC 5 (capitalisation de méthode)

> Tu es l'architecte technique de l'écosystème MJPC (~14 apps HTML monofichier, React UMD +
> Firebase RTDB `mjpc-hub` + GitHub Pages). Paul pilote le pédagogique ; toi le technique, avec
> traduction pédagogique systématique de chaque choix, sans jargon non explicité. Principe
> d'architecture : l'élève est toujours singulier (clé canonique `sanMJPC` → `clement_noe`) ; le
> groupe est un contenant déclaré, jamais une identité ; le profil longitudinal recoupe travaux
> perso/groupe/classe entière. Écris un bloc socle versionné MJPC-CORE (identité élève/classe,
> classe-brouillon `_test_<app>`, `extractEleves` tolérant, `ecrireClasse` par transaction non
> destructive, suppression renvoyée vers la console, `resolveEleves` N≥1, manifeste + contrat de
> purge déclaratifs), éprouve-le sur l'export réel du hub AVANT de toucher une app, puis intègre-le
> app par app dans l'ordre du danger (écritures destructives d'abord), chaque app en un passage :
> sauvegarde → repérage → édition → audit complet (le grep final attrape ce que le repérage a
> manqué) → double parseur → banc d'exécution du segment livré → vérification du déployé bit à bit.
> Jamais de suppression sèche : archive avant, ou renvoi console. Dettes restituées en fin de
> chaque message.

---

## 7. Dettes complètes, par ordre de danger (état fin MJPC 5)

### A. Peut encore corrompre des données
1. Écriture destructive de `/classes` — **QCM ✔ · correction_dictee ✔** · reste `applause_meter`
   (L1645/L2444), `reecriture` (L1324), `reecriture_bb4e` (L330).
2. Suppression d'élève dans les apps — **QCM ✔ (élève + classe + purge globale)** · reste
   `applause_meter`, `dictee_universelle`.
3. 414 écritures sans filet + 70 catch vides → file de report persistante (Phase 2).

### B. Nettoyage du hub (par Claude via REST dès MJPC 6, APRÈS la fin de la passe socle)
4. `/results` : 29 corrections réelles (ancienne san) → récupérer, pas purger.
5. Restes de test : `CLASSE TEST`, `_TEST`, `dictee_fictive_test`, `qcm/sessionActive/_test`,
   `debat_singes`, `students_sim`, `MONSIEUR_Meney`.
6. Lylou / Clémence : accents manquants dans `/classes` (codes orphelins `CL_MENT_Lylou`,
   `PINEAU_Cl_mence` — leurs `name` portent l'accent) → corriger puis relancer l'Unifier.
7. Fermer `plickers-mjpc` · archiver `defi-phrases5e`, `dictee-3e-labas` · élucider `eval-3e-paroles`.
15. Nœud `/codes` mixte (codes élèves vs codes de session débat) → disparaît avec la passe panneaux.

### C. Cohérence d'usage
8. Classe-brouillon unique : convention posée, **2 apps ✔**, généralisation avec la passe socle.
9. Sexe élève : consolidé côté QCM (`qcm/eleveSexes`), mutualisation inter-apps à concevoir.
10-11. **Passe panneaux** (étape 2 du plan) : squelette à extraire de `correction_dictee` ;
   débat s'aligne (chips N≥1, fin du code ORCA, fin du `profPassword`).
12. Slug de classe : **QCM ✔** (identité) ; appliquer au fil de la passe socle.

### D. Brique 2 (console — Phase 2)
13. Cascade de suppression (les renvois des apps pointent dessus) · exécuteur du contrat de purge ·
    archive-avant-suppression · file de report · pastilles permanentes · ré-import profond ·
    garde-fou homonymes.

### Divers
14. `CLAUDE.md` du dépôt périmé → réécrire (architecture post-convergence).
16. **Export des copies Dugain (URGENT — hors Firebase)** : `etude_dugain` (29 copies de 3e) et
    `redaction_dugain_v3` ne vivent que dans le localStorage d'un navigateur.
17. Chantier débat multi-classe : à reprendre (absorbé dans la passe panneaux ; la question « code »
    est résolue — plus de code).
18. Mémoire de Claude pleine (30/30) : consolidation à proposer à Paul.
19. `mjpc-core.js` : à pousser à la racine du dépôt (copie maîtresse, jamais chargée en prod).

---

## 8. Règles de travail (inchangées + nouvelles)

- Croiser le code avant d'affirmer. Ne rien tenir pour acquis.
- Le destructeur archive toujours avant. Jamais de suppression sèche.
- Sauvegarde avant toute modification. `node --check` + acorn sur chaque livraison.
- Audit complet APRÈS édition (grep des écritures) — il attrape ce que le repérage manque.
- Déployer sur GitHub Pages avant de tester (CORS).
- Pas de patches : root cause. Pas de bifurcation : finir avant d'ouvrir.
- Dettes rappelées en fin de chaque message.
- Noms de fichiers en anglais technique (Chrome auto-traduit).
- **Traduction pédagogique systématique, zéro jargon non explicité.**
- **Vérifications GitHub + Firebase par Claude après chaque push.**
