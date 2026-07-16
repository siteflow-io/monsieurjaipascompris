# MJPC — Doctrine d'unification (v2)

> Document de référence. Il **fixe les décisions**, il ne les rejustifie pas.
> Règle qui prime sur tout le reste : **pas de surcomplexité. Souplesse + épuré.**
> À coller en tête d'une conversation de dev pour cadrer le travail.
>
> **v2 — 13 juillet 2026.** Révisée après la journée de convergence des bases et l'audit des 14 apps.
> Les changements par rapport à la v1 sont signalés `⟳ MAJ` ; les points enfin tranchés `✔ TRANCHÉ` ;
> les surpassements repérés (propositions de Claude durcies en décisions) `⚠ À RE-ARBITRER`.

---

## Finalité (le pourquoi — court)

But unique : le **ratio investissement / rendement**. Tendre vers 18 h devant élèves
et le reste réellement libre. Le travail d'aujourd'hui achète la liberté de demain.

Le moyen, c'est **la mécanique**. Un moteur déterministe, à source unique, sans IA,
une fois juste, **ne se dégrade pas** : on le paie une fois, il rend indéfiniment.
D'où la règle gravée : **l'IA en amont (propose), jamais dans le moteur** ; le prof tranche ;
le moteur exécute du figé.

La fin, c'est **libérer l'humain**. La donnée **prépare** la rencontre avec l'élève,
elle ne la remplace pas. Certitude sur le mesurable → disponibilité entière pour le non-mesurable.
L'élève déborde toujours ses données.

Condition de tout : **la discipline**. Finir avant d'ouvrir, ne pas bifurquer.
La seule dette qui demeure est une **dette de décision** — l'arbitrage humain aux coutures,
qui est l'expertise du prof, non mécanisable.

> **⟳ Règle de méthode ajoutée (v2), qui prime au même titre :**
> **Ne jamais affirmer un comportement sans l'avoir lu dans le code ou vu dans les données.**
> Le 13 juillet, trois incidents ont eu la même cause : une confiance dans une *représentation* du système
> (un export, le dépôt GitHub, un résumé) plutôt que dans le système lui-même. Croiser avant d'affirmer.

---

## A. Bases : le hub unique `mjpc-hub` ✔ + reset annuel **terminal** ⟳

### ✔ TRANCHÉ — l'état est désormais réel (au 13 juillet)

Le hub neuf a été créé et **toutes les données y ont convergé**. La bascule est faite.

| Base | Compte | Verdict **v2** |
|---|---|---|
| **`mjpc-hub`** | `monsieurmeney` | **HUB UNIQUE ET VIVANT — 10 apps branchées, 16 nœuds** ✔ |
| `dictee-5e-ch4` | perso | **dormante** — filet de sécurité, NE PLUS Y ÉCRIRE |
| `plickers-mjpc` | perso | **dormante** — QCM rapatrié ; à fermer |
| `rucher-paul` | perso | hors périmètre |
| `eval-3e-paroles` | `monsieurmeney` | morte (30 résultats 3e réels — arbitrage encore ouvert) |
| `defi-phrases5e` | `monsieurmeney` | morte (ancêtre `analyse_logique`) — à archiver |
| `dictee-3e-labas` | `monsieurmeney` | morte (prototype) — à archiver |

### ⟳ MAJ — le reset est **terminal**, non préalable

La v1 (§11) plaçait « Reset & hub neuf » en **étape 0, préalable**. **Décision du 13 juillet : l'inverse.**

Les données 2025-2026 sont **conservées comme banc d'essai**. Raison : sans données réelles, les bugs de
disparition, de format et de noms abîmés seraient restés invisibles — c'est précisément ce qui les a
révélés le 13 juillet. L'année scolaire étant close, rien n'est impacté, et cela **reste conforme à la
doctrine du reset annuel** (archivage de fin d'année) : on ne fait que le décaler au plus tard, après
normalisation.

**Ordre qui fait foi (remplace le §11 v1) :**
1. **Convergence des bases** — ✔ *faite le 13/07*
2. **Normalisation** de MJPC et des apps, éprouvée sur les données réelles
3. **Contrat de purge** (§4 bis) construit et **testé sur ces données**
4. **Reset** : archive USB → hub conservé → purge des données-élèves par les apps → classes 2026-2027

Le reset devient l'**aboutissement** de la normalisation. Il ne peut pas avoir lieu avant que le contrat
de purge existe — sinon le ménage se ferait à la main dans Firebase, ce que la doctrine refuse.

Le mécanisme de la migration en bloc (import JSON) et de la purge par app reste celui du §4 bis.

---

## 1. L'identité — **résolue, par la classe**

- La clé d'identité réelle est **`san(nom)` dans `/classes`** (sur le hub). `extractEleves` commun.
  ⟳ La fonction canonique s'appelle désormais **`sanMJPC`** ; clé de forme `clement_noe`
  (minuscules, sans accents, `nom_prenom`). **Déployée dans les 10 apps du hub** le 13/07.
- **L'uuid est abandonné** : `/eleves` et `/eleves_index` quasi vides (2 entrées), jamais servi.
- **Un seul format canonique de clé de classe** : celui du hub (« 3E Charles de Gaulle »).
  Toute app répliquant les classes dans un autre format (slug à tirets, sous-groupes) s'aligne sur le hub.
  ⚠ **Règle tranchée mais NON APPLIQUÉE** : `evaluation-qcm` et `applause_meter` gardent `4e-banksy`,
  `worktrack` `4e_banksy`. Alignement à faire en phase Normalisation.

Le reste-à-faire n'est pas l'identité : c'est **l'indexation par notion** (§5).

> **⟳ Dette de décision assumée, rappelée** : la clé dérive du **texte** (le nom). C'est ce qui casse au
> changement d'orthographe (cas Lylou/Clémence : nom sans accent dans `/classes`, avec accent dans les codes
> → codes orphelins) et ce qui a permis à un script de conversion d'abîmer des noms le 13/07. Coût connu,
> accepté ; à ne pas oublier.

---

## 2. L'invariant fondamental — **id stable / libellé**

- Toute entité (domaine, famille, notion, critère, cran d'échelle, compétence, alias, zone de cahier)
  porte un **id opaque immuable**.
- Tout le reste est **attribut** : libellés prof/élève, définition, couleur, position, niveau,
  tag de programme, coordonnées sur une image.
- **Tous les liens s'accrochent à l'id**, jamais au texte.
- Reformuler / traduire / renommer → libre. **Fusionner ou supprimer** = opération **explicite**
  avec réaffectation visible. **Jamais en silence.**

> ⚠ **À RE-ARBITRER (surpassement probable)** : cet invariant est un principe technique juste, mais
> **posé par Claude**, non explicitement décidé par Paul. Il n'a pas été contesté — ce qui n'est pas la
> même chose qu'avoir été tranché. À valider tel quel, ou à assouplir, en connaissance de cause.
> *NB : nos clés actuelles dérivent du texte (§1) — l'invariant est donc un objectif, pas l'état présent.*

---

## 3. Concordance — le dictionnaire commun

App admin autonome (`concordance.html`). **Jamais vue par l'élève.**

### Deux étages canoniques
- **Notions de langue** → *Guide de terminologie grammaticale* (Éduscol), **niveau II** (cycle 4).
  Acquis **nommés en objectifs** (« identifier un participe passé »). Pas d'ontologie.
- **Compétences d'évaluation** → socle **C4** (École Directe).
  ⟳ Rappel : `correction_dictee` porte **déjà** 9 compétences D1.1–D1.6, D2.1–D2.3 + toggle `showNote`.
- **Autres domaines** (oral, écrit, lecture, culture) → autres docs Éduscol.

### Extraction
- On extrait **l'arbre** (structure) comme squelette canonique : IA en amont, validé.
- On **n'avale pas** les définitions en masse — attachées acquis par acquis, au fil du mapping.
- On **conserve la famille de rattachement** (nourrit le halo, §7).

### Trois relations : **égal / inclus / voisin**
*inclus* : « accord du participe passé » ⊂ « accord ». *voisin* nourrit le **halo**, jamais le décompte.

> ⚠ **À RE-ARBITRER (surpassement probable)** : l'architecture *3 relations + statut proposé/validé*
> porte la marque de Claude. La **taxonomie** (5 domaines / 40 familles / 142 notions, double libellé
> prof+élève) est, elle, **validée par Paul** (mai 2026). Distinguer les deux.

### Table d'alias
Terme d'app → canonique via une relation. Statut **proposé** (IA) / **validé** (prof).
**Le décompte ne tourne que sur le validé.** L'IA propose, le prof tranche.

### Versionning de programme
Acquis = **id stable** + libellé + **tag de version**. À chaque réforme : mode **comparaison « contre »**.
L'id conservé fait **survivre l'historique** à la réforme.

### Contrôle d'intégrité
Pas de doublon, pas d'orphelin, pas d'alias vers deux canoniques. **Orphelins en rouge.**

> **Concordance est le GOULOT.** Six chantiers en dépendent : manifestes exploitables, profil élève par
> notion, cockpit prof, Atelier, banque pédagogique, interactivité par notion du cahier. Selon la règle §6
> (« la dette vieillit »), chaque app codée avant elle ajoute du vocabulaire à réaligner plus tard.

---

## 4. Les manifestes — exposition du vocabulaire

Comment Concordance récupère le vocabulaire des apps **sans parser de HTML**.

- Chaque app **expose** son vocabulaire en dur dans `taxonomie/manifests/<app>` sur le hub.
- **Additif** : la constante en dur **reste la source de vérité** (hors-ligne). Le manifeste en est une
  **vue** projetée mécaniquement au chargement — pas une copie, incapable de diverger.
- L'app **n'invente aucune équivalence** : expose brut.
- Format : `{ id, libelle_app, type: notion|critere|competence, famille_canon: "" }`.
- **Isolement = nommage seul** ; aucune règle de sécurité sur les manifestes. Sécurité réelle = profils (§10).

Apps à exposer : `dictee_universelle`, `correction_dictee`, `analyse_logique`, `etude_dugain`,
`redaction`, `pilotage_debat`, `applause_meter`, `conjugaison ch16/17/36`, `evaluation-qcm`.
⚠ **À RE-ARBITRER** : l'exclusion *« Pas : `reecriture`, `worktrack` »* est posée sans justification.

> ⟳ **MANIFESTE ABSENT DES 14 APPS** (audit 13/07). Aucune ne l'expose encore.
> **Occasion à ne pas manquer** : la v1 (§10 recap) recommandait de fusionner le rebranchement des apps
> avec l'exposition du manifeste, *pour ne toucher chaque app qu'une seule fois*. Le rebranchement a été
> fait le 13/07 **sans** les manifestes. La **phase Normalisation est la dernière occasion de grouper**
> manifeste + contrat de purge + écriture non destructive dans un seul passage par app.

---

## 4 bis. Le contrat de purge — pendant du manifeste

Le **pendant destructeur** du manifeste : l'app se décrit pour qu'un mécanisme commun agisse
sans connaître ses entrailles. Déclenché par **« supprimer une classe »** dans n'importe quelle app.

- Chaque app **déclare**, à un seul endroit clair de son code, **deux listes** :
  les chemins **pédagogiques à préserver** et les chemins **résultats-élèves à purger**.
- La fonction de purge est **identique partout**, en trois temps :
  **1) archive** complète → **2) confirmation** explicite → **3) effacement** de ces chemins, et eux seuls.
- **Garde-fou 1 — balayage par identité** : efface par `san(nom)` à travers **tous** les chemins déclarés.
- **Garde-fou 2 — préservation par défaut** : un nœud non déclaré n'est **pas** touché.
- C'est le **mécanisme du reset annuel** (§A), réutilisable chaque juin.

> **Règle générale dont il découle** : **le destructeur archive toujours avant. Jamais de suppression sèche,
> même demandée.** ⟳ **CONTRAT ABSENT DES 14 APPS** (audit 13/07).

---

## 5. Le profil élève — longitudinal, annuel, **sur le hub**

- ⟳ **N'est plus à construire de zéro.** Le nœud **`mjpcProfils` EXISTE** depuis le 13/07 :
  **57 profils** migrés (29 en 4e Banksy, 28 en 4e Pythagore), avec leurs sessions.
  *(La v1 disait « n'existe pas en données » — corrigé.)*
- Schéma : **`mjpcProfils/{classe}/{eleve}`**, indexé sur **`san(nom)` + classe**.
  ⟳ Depuis le changement de `slugify` le 13/07, la clé élève est **canonique** (`bazantay_mae`).
- **Patron déjà éprouvé** : `archiverDansProfilsMJPC` du QCM (2 passes : médiane de classe, puis payload
  par élève `{date, sessId, evalId, titre, score, totalQ, …, bilanHTML}`, avec **`bilanHTML` injectable**).
  Le vrai chantier = **généraliser ce patron aux autres apps** + indexation par notion (§3/§4).
- Inclut le **signal métacognitif** quand l'app le produit (auto-éval QCM).
- **Vit un an**, vidé au reset, exporté en archive. **Lecture seule** pour l'élève.
- Données sensibles → **règle d'accès Firebase réelle** (§10).

> ⟳ **Décision 13/07 (spec révision)** : ce qui survit d'une année sur l'autre, ce sont les
> **statistiques des questions** (annotées par **cohorte**, ex. `4e_banksy_2026`) — le corpus est du
> travail de conception. **L'élève, lui, ne survit pas** : archivé puis effacé. La cohorte annote le
> corpus, pas l'élève.

### ⟳ Miroir élève / « zone autonomie » (spec révision)
Pendant **élève** du profil, que la v1 ne décrivait que côté prof. Métaphore de la **montre connectée** :
jauge de complétude, données brutes assumées, **pas d'accès parents**, aucune gamification (ni badge, ni
point, ni mascotte). *Soft delete uniquement* — cohérent avec §2 et « le destructeur archive avant ».

---

## 6. Le profil prof — cockpit

Pas un miroir du profil élève : la **couverture**, l'écart entre mesuré et dû.

- **Cœur : couverture classes × compétences C4.** Trous en rouge (« 5e Hergé, oral : aucune donnée »).
- **Échéances institutionnelles** datées (bulletins, conseils, École Directe, brevet).
- **Charge prévisionnelle** (copies en attente, fenêtres d'éval, pics à déplacer).
- **Santé de l'outil** (orphelins, dette de nommage).

### Règles des alertes
- Toujours **assorties de leur conséquence chiffrée** (« 3 termes non mappés → 14 élèves ne remontent pas »).
- La dette **vieillit** : gravité = **âge × volume bloqué**.
- **Ton professionnel, pas scolaire.** Ferme, daté ; actionnable.
- Deux familles : **obligations institutionnelles** + **santé de l'outil**.

> ⚠ **À RE-ARBITRER (surpassement probable)** : l'idée du cockpit (couverture × C4) est de Paul ; les
> **formules** « la dette vieillit : gravité = âge × volume bloqué » et « ton professionnel, pas scolaire »
> sont de Claude. À valider ou reformuler.

---

## 7. La strate élève / le bilan de séance

Profil (par élève) et bilan de séance (par classe) = **deux lectures du même réservoir**.

> ⚠ **SURPASSEMENT AVÉRÉ — à trancher.** La v1 écrit « demi-A4 à trame fixe, **écrite par l'élève** ».
> Or la conversation source proposait **deux pistes non arbitrées** : la « sobre » (semi-vierge, remplie
> par l'élève) et l'« industrialisée » (**MJPC génère en lot le PDF des 30 strates**, demi-A4, 2 par page).
> Paul penchait pour la seconde. **La v1 a retenu la première comme un fait.**
>
> ⟳ **Piste retenue en v2 (à confirmer)** — par le milieu, ni l'un ni l'autre extrême :
> **trame générée par l'app, remplie par l'élève.** Le précédent existe et est éprouvé sur le brevet :
> `Console_ateliers_revisions` produit déjà des fiches avec la trame
> *« Je me corrige → Mes critères de réussite → Je compare avec des réponses-repères → Je me situe →
> Avant le brevet, je revois »*. **C'est la strate.**

**Acquis (bien de Paul, conservés) :**
- La strate **s'empile dans le cahier** — le cahier *est* le profil longitudinal, version vécue par l'élève.
- **Rythme par jalons** (après une évaluation, à un tournant de chapitre — pas chaque séance).
- **Zéro impression en séance courante** : l'élève relit sa dernière strate.
- Le bilan affiche **l'état consolidé**, pas l'évaluation du jour en temps réel.

> ⚠ **À RE-ARBITRER** : le **halo** (« toggle éteint par défaut ; allumé si données voisines sourcées
> **et** rituel installé ») est une formulation de Claude, jamais arbitrée.

---

## 8. Le cahier auto — cahier de référence de classe

**Distinct du cahier longitudinal des strates** (§7). Commun à la classe — un modèle, pas une trace individuelle.

- **Vue de la publication de chapitres existante**, dans l'ordre du cahier. Un **reflet**, se remplit seul.
- **Consigne : « ton cahier doit ressembler à ça »** → **étalon**, jamais substitut.
- **Photos de vraies pages** comme modèles : **anonymisées**, exemplaires.
  ⚠ *« avec accord »* et *« ~5 min après séance »* sont des ajouts de Claude — à confirmer.
- **Annotation type Paint** : photo en fond, zones template. **Couche séparée de l'image** (coordonnées)
  → déplaçable, corrigeable, **rattachable à une notion plus tard**.
- **Interactivité par notion** = **fruit de Concordance** ; zonage manuel sur quelques pages-clés.

---

## 9. Le parcours élève chaîné

Apps individuelles = **chemins transverses vers MJPC** :
**autocorrection → exos ciblés → bilan/strate** (« remédiation post-dictée »).

- **Session locale portée de maillon en maillon** ; passage invisible, pas de jeton par lien.
- **Point à blinder — tablette partagée** : l'entrée **réécrit** la session ; le parcours se **clôt en
  vidant la session**. Sinon strate fausse (incident « Vargas » dans le flux : un élève hérite de
  l'identité du précédent).
- **Ne vaut pas** pour les activités collectives temps réel (débat, applaudimètre).
- **Dépendance** : suppose la **Banque d'exercices** extraite en app autonome (code déjà isolé dans
  l'onglet Exercices de `correction_dictee`).

---

## 10. Les clés d'accès

- **Côté prof** : fiche plastifiée de QR codes (clé = `san(nom)`/classe). Scan → vue prof.
- **Côté élève** : ⚠ **SURPASSEMENT AVÉRÉ.** La v1 écrit *« plutôt mot-clé de chapitre qu'un QR »*.
  Or Paul disait : *« je lui donne son qr code qui est une clef d'accès à mjpc pour son profil unique et
  les cours, et c'est tout »*. **À rétablir : le QR élève est la clé d'accès.** Les objections techniques
  ci-dessous restent valables comme **contraintes de mise en œuvre**, pas comme renversement de la décision.
- **Si QR élève** : **jeton révocable**, pas la clé nue ; **deux QR distincts** (prof identifie / élève
  authentifie). *(Contraintes de Claude, non rejetées par Paul — à acter.)*
- **Profils sous règle d'accès Firebase réelle** — seule sécurité réelle du système.

---

## 11. Ordre de construction — **révisé (le reset est terminal)** ⟳

> Remplace l'ordre v1 qui plaçait le reset en préalable.

1. **Convergence des bases** — ✔ *faite le 13/07* (10 apps sur `mjpc-hub`, identifiants unifiés).
2. **Normalisation (socle commun MJPC-CORE)** — un **seul passage par app**, groupant :
   `sanMJPC` · `slugClasse` unifié · `extractEleves` robuste · **écriture non destructive de `/classes`**
   · **suppression d'élève → renvoie vers MJPC** · **mode test unifié** · **manifeste (§4)** ·
   **contrat de purge (§4 bis)** · sexe élève commun · lissage UI · portail élève homogène.
3. **Concordance** (le goulot : canon + alias + 3 relations + statut + intégrité + versionning).
4. **Profil élève** — généraliser le patron `archiverDansProfilsMJPC` ; indexation par notion.
5. **Profil prof / cockpit** (couverture × C4 + échéances + alertes).
6. **Strate élève + bilan de séance** (piste : trame générée, remplie par l'élève).
7. **Parcours chaîné** (après extraction de la Banque d'exercices).
8. **Clés d'accès + règles Firebase.**
9. **Reset annuel** : archive → purge (contrat testé) → classes 2026-2027.

**Indépendant / parallèle** : le **cahier auto** de base ne dépend pas de Concordance.

**Ce qui n'est pas un chantier** (lectures du même réservoir, tombent quand l'épine dorsale tient) :
profil métacognitif, cartographie de la difficulté, différenciation, cahier qui atteste, aide fine.
**Finir avant d'ouvrir. Ne pas bifurquer.**

---

## Les quatre référentiels — à ne pas confondre

| | Quoi | Où |
|---|---|---|
| **Concordance** | dictionnaire des **notions** (canon + alias) | `concordance.html` (à créer) |
| **Banque d'exercices** | exercices | extraction onglet Exercices de `correction_dictee` (code isolé) |
| **Banque pédagogique** | **Concept** (id stable) → **Expressions** (variantes visibles) — registres, profondeur d'occurrence, rotation anti-monotonie sans casser le longitudinal | à créer |
| **Banque de questions** | QCM + Atelier — schéma `4e_ch04_q012` | à créer ; ⚠ format actuel du QCM ≠ schéma spec révision → **converger avant de coder** |

---

## État réel des apps (audit 13/07) — 14 au total

**Sur le hub (10)** : `index` · `correction_dictee` · `reecriture` · `reecriture_bb4e` · `applause_meter`
· `dictee_universelle` · `evaluation-qcm` · `pilotage_debat_s3` · `worktrack` · `analyse_logique`.

**Hors hub, `localStorage` seul (3 + 1)** : `etude_dugain` (matrice **étude de texte universelle** —
29 copies 3e à exporter) · `redaction_dugain_v3` (matrice **rédaction universelle**, échelle à crans) ·
`Console_ateliers_revisions` (fiches brevet imprimables ; **contient la trame-strate**) ·
`deploy-monitor` (hors périmètre).

**Supprimée le 13/07** : `plickers-attente` (périmée).

**Dettes de normalisation prioritaires** (peuvent corrompre) : écriture destructive de `/classes`
(5 apps, dont `evaluation-qcm` sur la **racine**) · suppression d'élève dans 3 apps → renvoyer vers MJPC
(`_deleteEleveCls` ne nettoie que classe + code) · 414 écritures sans filet · 70 `catch` vides.

**Nettoyage du hub** : ⚠ **`results` = 29 corrections de dictée RÉELLES** (clés non unifiées : à
**récupérer**, PAS purger) · `debat_singes` (doublon) · `students_sim` · compte `MONSIEUR Meney` ·
Lylou/Clémence (codes orphelins) · fermer `plickers-mjpc` · archiver les bases mortes.

---

## Points ouverts à trancher (v2)

**Surpassements à ré-arbitrer** : strate (§7) · QR élève (§10) · halo (§7) · règles des alertes (§6) ·
invariant id/libellé (§2) · exclusions manifeste (§4) · annotations cahier « avec accord / 5 min » (§8).

**Décisions neuves** : nommage des nœuds (français du hub vs anglais de la spec révision) ·
convergence du format de la banque de questions (`evaluation-qcm` ↔ spec) **avant** de coder la révision ·
arbitrage `eval-3e-paroles` (30 résultats 3e réels : archiver ou récupérer ?).

**Réglés** ✔ : nom du hub (`mjpc-hub`) · sous-groupes `5e-herge-groupe-1/2` (abandonnés) ·
mort/vivant de `results` (vivant : à récupérer).

---

## Règles de travail

- **Croiser le code avant d'affirmer.** Ne rien tenir pour acquis (le dépôt ni un export ne font foi).
- **Le destructeur archive toujours avant.** Jamais de suppression sèche.
- **Convertir les clés, pas les valeurs** — sauf aux emplacements où vit une étiquette, établis un par un.
- **Vérifier sur quelle base chaque app écrit** avant de toucher aux données.
- Sauvegarde avant modification · `node --check` + parseur sur chaque livraison.
- Déployer sur GitHub Pages avant de tester (CORS) · publication ~2 à 20 min.
- **Pas de patches : root cause. Pas de bifurcation : finir avant d'ouvrir.**
- Dettes rappelées en fin de chaque message · noms de fichiers en anglais technique.
