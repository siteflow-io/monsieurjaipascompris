# MJPC 6 — ④ LES ARCHIVES · ce qui est fait, et pourquoi
> **JAMAIS LU INTÉGRALEMENT — consulté à la demande.** Rien n'y est perdu : c'est ici que vivent les raisons des décisions closes, les rapports de séance, les exhumations, l'inventaire des panneaux.
> *Extrait sans reformulation de `MJPC6-plan-de-travail.md` le 21/07/2026.*

## F. REGISTRE D'EXHUMATION — documents à retrouver, et OÙ (pour la prochaine conversation)
*✔ EXHUMATIONS FAITES le 16/07 — Paul a fourni : `SPEC_ATELIER.md` (1 352 l., la Zone 2 contient bien la taxonomie intégrale : 233 lignes de tableaux), `PROMPT_MJPC_v3.md` (1 015 l., le master prompt : principes, vocabulaire, décisions immuables, PASSES DE CODAGE §6 dont 6a/6b/6c, doctrine de maîtrise v0), `MJPC6-cadrage.md` (261 l., HISTORIQUE : ses dettes A sont closes par la Phase 1), `mjpc-session-recap` du 12 juin (313 l., LES RAISONS de l'architecture, dont la Concordance-dictionnaire), et `MJPC-presentation.md` (le texte de vision publique). **À VERSER AU DÉPÔT dans un dossier `docs/`** (avec le présent plan). ✔ `mjpc-doctrine-v2.md` (391 l.) exhumée aussi le 16/07 — LA référence architecturale, à verser au dépôt en premier. **plickers-attente : projet DÉFINITIVEMENT ABANDONNÉ ET EFFACÉ (décision Paul, 16/07)** — l'exhumation est CLOSE. Conséquences : retirer l'entrée morte « Salle d'attente Plickers » du menu admin d'index (ajouté au lot site M8) ; la base Firebase `plickers-mjpc` est abandonnée avec lui (sa seule utilité — restaurer qcm/classes — a été consommée en MJPC 4).*
1. **SPEC_ATELIER.md** (1 352 lignes, zones 1-5 de l'Atelier dont la taxonomie intégrale en Zone 2) — livré le 5 mai 2026 dans la conv **« Intégration des outils sur monsieurjaipascompris »** — https://claude.ai/chat/8eb16cfa-61bd-470d-a180-f2c0f7018b6e. Si Paul ne l'a pas conservé : reconstituer zone par zone depuis cette conversation. Bloque : matérialisation de la taxonomie (Concordance).
2. **Le master prompt MJPC** — but explicite de la conv **« MJPC prompt »** du 8 mai — https://claude.ai/chat/e3e4b968-615f-4171-94d8-fd84b4939f66 : philosophie complète + organisation en passes de code non chevauchantes (dont les passes 6a/6b/6c du pipeline copies). Vérifier en fin de cette conversation s'il a été livré, et l'exhumer. Bloque : le chantier fantôme (pipeline copies) et complète la section E.
3. **mjpc-doctrine.md** — ABSENT du dépôt (vérifié 404 le 15/07) et absent du conteneur : conçue dans la conv **« Réduire la dépendance aux notes et au numérique »** (14/07) — https://claude.ai/chat/c2266739-d2ff-43c8-b819-c45adbcdfef3 — et auditée (« surpassements ») dans **« MJPC 4 »** — https://claude.ai/chat/4636c095-b72c-4989-9e49-1017e22bfd05. À exhumer et VERSER AU DÉPÔT. Bloque : rien d'immédiat, mais c'est la doctrine de référence.
4. **MJPC6-cadrage.md** (passation MJPC5→6 : registre des 19 dettes, décisions gelées, point de reprise) — produit le 14 juillet dans la conv **« MJPC5 »** — https://claude.ai/chat/912639f8-42b1-4e31-b9e3-60041a5d7c4b. Paul l'a (il a servi à ouvrir MJPC 6). À verser au dépôt.
5. **plickers-attente.html** — le fichier est ABSENT du dépôt (404 vérifié) alors que le menu admin d'index pointe dessus : LIEN MORT. L'app (salle d'attente entre sessions QCM, complémentaire d'evaluation-qcm) : conversation d'origine NON RETROUVÉE par la recherche — PISTE CONCRÈTE : l'historique Git du dépôt (`git log --all -- plickers-attente.html` sur GitHub) retrouvera le fichier s'il a un jour été poussé puis supprimé ; sinon disque local de Paul ; sa base Firebase séparée `plickers-mjpc` (décision du 8 mai : lue en parallèle, sans migration immédiate) est HORS hub. À exhumer puis décider : intégrer au dépôt + hub, ou retirer l'entrée du menu.
6. **La ROADMAP du profil** — pas une conversation : commentaire en tête du script d'`index.html` (L796, « ROADMAP — fonctionnalités à développer », modèle de données du profil prévu). À relire au chantier « Mon année ». La télémétrie TRACK existe déjà dans index (37 occurrences) — décision du 8 mai : l'ÉTENDRE vers les événements de profil, pas la remplacer.
7. **Décision RÉVOQUÉE à connaître en exhumant** : le 8 mai actait un `eleve_uuid` immuable + tableau `inscriptions[]` — REMPLACÉ depuis (MJPC5) par la clé canonique `sanMJPC` ; toute exhumation doit lire les documents de mai avec ce correctif.


## H. RELIQUAT DE LA DERNIÈRE PASSE TRANSVERSALE (15/07, nuit) — les orphelins
*Vérifié dans le dépôt et le hub : quatre fichiers présents au dépôt, absents de tout inventaire, tous sans Firebase, sans manifeste, non référencés par index.*
1. **etude_dugain.html** (316 Ko, « Étude de texte — Dugain — 3e De Gaulle ») et **redaction_dugain_v3.html** (348 Ko, « Brevet blanc 3e — Rédaction ») : apps ponctuelles liées à une classe qui part (3e De Gaulle) et au brevet blanc passé — MAIS ce sont les PRÉFIGURATIONS des familles « Étude de texte » et « Rédaction » (les placeholders du site, le pipeline fantôme G2). Statut à trancher (S0-⑦) : archiver comme matériau de conception du pipeline, ne pas supprimer.
2. **Console_ateliers_revisions.html** (434 Ko, « Ateliers Révisions Brevet — Console ») : prépa DNB 2026, probablement obsolète depuis juin. Statut à trancher : archive.
3. **deploy-monitor.html** (29 Ko, « MJPC · Deploy Monitor ») : outillage technique de déploiement. À documenter dans le CLAUDE.md du dépôt (clôtures), pas un chantier.
4. **Nœud hub `debat_singes` (45 Ko)** : l'ancien débat vit dans un nœud SÉPARÉ de `debats/` — migration ou archivage à intégrer au jalon multi-classe de S1 (le débat historique doit rejoindre l'architecture unifiée ou partir en corbeille datée).
5. **Labels de nœuds fantômes dans la console d'index** : `students`, `students_sim`, `eleves_index` sont libellés dans le code de la console mais N'EXISTENT PAS au hub — vestiges à nettoyer ou documenter (petit item S5).

### Verdict de complétude (15/07, fin de session)
Le plan couvre désormais : le modèle complet du panneau (grammaire, charte, exceptions, décisions Q1-Q7 sourcées) · le séquençage S0→S5 avec grille de passe figée (13 points) et matrice vérifiée · les fiches détaillées des 10 apps + les 4 orphelins · le site (mécanismes vérifiés, dormant complet, Zone autonomie tranchée) · la Concordance redéfinie (référentiel central, taxonomie 40 familles, héritage de mai respecté) · la vision fondatrice exhumée (principes, vocabulaire, profil 3 vues, pipeline copies) · le registre d'exhumation nominatif · le rendez-vous daté de fin août. **Limite honnête** : la fouille des conversations est thématique (recherches ciblées), pas une relecture intégrale — des détails peuvent encore dormir dans des conversations anciennes, mais tous les fils tirés ce soir ont abouti ; les découvertes marginales restantes se rattacheront aux chantiers existants.

## J. LES RÉPONSES FINALES DE PAUL (16/07 — le questionnaire de clôture)
- **A1 ✔** La grammaire structurelle s'applique à QCM et applaudimètre (sous leur charte propre).
- **A2 ✔ raison sourcée** : identités visuelles abouties, usages événementiels de classe, ET côté ludifié assumé — « pour vivre ça comme une pause aussi dans le travail ».
- **B1 ✔** Variante classe à la publication : ACTÉE (progression par niveau + interrupteur par classe).
- **B3 ✔** `evalconn` = « évaluation des connaissances » = l'onglet QCM de niveau — à rattacher à evaluation-qcm (cartographié).
- **B4 ✔** EDT vivant : chantier ULTÉRIEUR, pas nécessaire dans un premier temps (retiré du champ pré-rentrée).
- **B5 (NOUVEAU, 16/07)** : la DATE DU BREVET du chrono d'accueil doit devenir ÉDITABLE (relancer le compte à rebours pour 2027) — petit item ajouté au lot site M8.
- **B6 (NOUVEAU, 16/07)** : LA CHARTE VISUELLE DU SITE EST À REVOIR COMPLÈTEMENT, avec un RAPPORT DE LISIBILITÉ préalable — s'ajoute au chantier « sortie du mode dev » de l'étape site (après-rentrée sauf arbitrage contraire), le rapport de lisibilité en livrable d'analyse d'abord.
- **C1 ✔** La forme de l'archive : EXPORTS HTML par élève — modèle : le document de correction de dictée tel qu'il se présente une fois le parcours d'autocorrection accompli.
- **C2 ✔ + DOCTRINE NOUVELLE « DONNÉES MARTYRES »** : eval-3e-paroles À SUPPRIMER — et généralisation : TOUTES les données réelles actuelles des élèves ne sont gardées QUE pour tester les apps et le site ; elles serviront de données martyres et seront EFFACÉES À LA FINALISATION du site. (Éclaire M16-M17 : rien de l'existant n'a vocation à survivre au-delà des tests.)
- **D1 ✔** Concordance : APP DÉDIÉE (`concordance.html`), mais VISIBLE dans le site côté prof (entrée outils prof).
- **D3 ✔** Nommage des nœuds : FRANÇAIS.
- **E1 ✔** La strate : LES DEUX — l'élève écrit d'abord puis compare (sobre) ; bascule vers l'impression directe (industrialisée) si trop lourd en temps → la génération en lot se prévoit EN OPTION dès la conception.
- **E3 ✔** Les créneaux « X Français » : coanimation « écriture de la lettre » avec une collègue, PONCTUELS cette année — HORS progression générale et HORS MJPC (ne pas modéliser).
- **F2 ✔** Session de nommage des concepts du débat : en ouverture de M4.
- **F3 ✔ RÉVISION MAJEURE DES ORPHELINS** : `etude_dugain` et `redaction_dugain` ne sont PAS des archives — ce sont les SOUCHES à universaliser : ils doivent devenir **« Étude de texte universelle »** et **« Rédaction universelle »** (comme la dictée universelle), en puisant largement dans la taxonomie des compétences et des notions (la Concordance est leur prérequis). Chantiers d'apps du pipeline, année 2, avec bases de départ existantes. `Console_ateliers_revisions` : laissée de côté (essai non concluant) MAIS son MÉCANISME — révisions brevet en plan de travail, avec sélection par l'élève lui-même — est LE BON : à garder sous le coude pour l'app de révisions. `deploy-monitor` : documenté au CLAUDE.md.
- **L'APP DE RÉVISIONS (rappel de Paul : PAS ENCORE CODÉE)** : ajoutée EXPLICITEMENT à la chronologie — M20 reprécisé : « L'app de révisions » = réconciliation SPEC_ATELIER × prompt révision adaptative + convergence du format de la banque de questions avec le QCM + code ; le mécanisme retenu de la Console révisions (sélection par l'élève) s'y verse.
### Compléments du 16/07 (2e tour de réponses) :
- **B2 ✔ RÉSOLU + INFO MAJEURE** : c'est Paul qui gère la publication des onglets. Et « Étude de texte universelle » + « Rédaction universelle » sont **EN COURS DE FABRICATION par Paul** (pas année 2 : maintenant) — seule « Analyse d'image » n'existe que dans sa tête. Les fiches Dugan/pipeline sont recalées : les universalisations sont VIVANTES, la Concordance (leur nourriture en compétences/notions) devient d'autant plus urgente pour elles.
- **E2 ✔** : OUI, le site affiche le rappel rituel en fin de séance/au jalon. **ET RÈGLE TRANSVERSALE MAJEURE (16/07, à la faveur de cette question) : RIEN, côté élève, ne doit être du jargon** — « strate », « jalon », etc. sont du vocabulaire interne prof/développement, JAMAIS affiché à l'élève (côté élève : « ta fiche », « ton bilan », « colle ta fiche dans ton cahier »). C'est la généralisation du « test du collégien » du prompt révision à TOUT l'écosystème — ajoutée à la grille de passe (point 14 : wording élève sans jargon, test du collégien).
- **F1 ✔ avec explicitation** : la règle concrète — quand un morceau de la chronologie touche un mécanisme doctrinal non validé, ce mécanisme est présenté AVANT tout code en trois lignes (ce que ça fait / pourquoi, pédagogiquement / un exemple concret avec les classes de Paul), et Paul répond ok/non/modifie ; rien ne se code sans ce passage. Affectations : M2 présentera l'invariant id/libellé et les exclusions de manifeste ; M15 présentera les alertes et le QR élève ; M4-M5 la strate §7 et les annotations cahier s'ils sont touchés.
- **D2 ✔ VALIDÉE (16/07, après double explication)** : la table à trois relations (égal / inclus / voisin — le voisin JAMAIS compté, suggestions seulement) et le circuit proposé (IA) / validé (prof) — seul le validé entre dans les calculs — sont la CONCEPTION OFFICIELLE de la Concordance (plus des surpassements). *Raisons consignées : ① la granularité du geste n'est pas celle de l'analyse — les codes de correction rapide (« G ») sont des langues de geste à préserver, que la relation « inclus » traduit sans les détruire ; ② unification DIRECTE là où le geste n'impose rien : les apps nouvelles ou posées (QCM, révisions, étude/rédaction universelles) taguent directement en notions canoniques (le champ `notions:[]` qui attend) — la table ne sert que les langues de geste et le passé ; ③ le circuit proposé/validé rend exécutable « l'IA pré-trie, le prof décide » à l'échelle de centaines de liens, sans pollution silencieuse possible.*
  **Amélioration simplifiante retenue (16/07, proposition Claude acceptée par principe)** : la relation « voisin » est DIFFÉRÉE — elle ne sert qu'aux suggestions de l'app de révisions (M20), pas au profil ni aux bilans ; la Concordance se lance donc en M2 avec égal + inclus seuls (100 % du décompte couvert), les liens voisin s'ajoutent quand naîtra leur consommateur — **l'app d'ENTRAÎNEMENT (précision Paul, 16/07) : c'est elle, l'app non codée de M20, qui consommera les voisins** (suggestions « tu as travaillé X, essaie Y qui y ressemble »). DIFFÉRÉ VALIDÉ. Au passage, « entraînement » est le mot de Paul pour cette app — candidat naturel de libellé élève pour M20 (mieux que « révision adaptative » : test du collégien).
**→ LE QUESTIONNAIRE EST CLOS : TOUTES LES QUESTIONS DU DOCUMENT SONT RÉSOLUES (16/07).**

### Restées ouvertes après le questionnaire (pour mémoire, état au 2e tour) :
- **B2 (reformulée)** : dans les données du site, les onglets image/étude/rédaction de 3e sont marqués « publiés ». Question concrète : les élèves les VOIENT-ils (onglets affichés, vides ou presque) — et faut-il les dépublier jusqu'à ce que leurs apps existent ?
- **D2 (en attente de validation après explication)** : les 2 mécanismes de la Concordance expliqués pédagogiquement en conversation le 16/07 (voir ci-dessous) — validation de Paul attendue.
- **E2 (reformulée)** : le site doit-il AFFICHER le rappel rituel (« colle ta strate », « relis ta fiche ») en fin de séance/au jalon — ou ce geste reste-t-il purement oral en classe, sans trace à l'écran ?
- **F1 (règle proposée)** : les 7 surpassements doctrinaux fins seront chacun présentés À VALIDATION AVEC LEUR EXPLICATION PÉDAGOGIQUE SIMPLE au moment où leur chantier s'ouvre — aucun mécanisme ne sera soumis sans elle (la règle qui a manqué à D2/F1 aujourd'hui). Accord de principe attendu.



## 0bis.
 LE MODÈLE DE PANNEAU — état des lieux de la souche et orientations

### Ce que la souche (correction de dictée) fait bien, à généraliser
La lecture approfondie révèle une architecture en trois étages qui fonctionne :
1. **Un accueil d'instances** : on choisit ou on crée « une dictée pour une classe » ; tout le panneau travaille ensuite dans ce contexte. Équivalents : une évaluation (QCM), un travail (analyse logique), un débat. **C'est le concept unificateur n°1** — chaque app manipule des *instances* (préparation × classe).
2. **Une barre d'onglets par fonction** : Correction · Rapide · Bilan · Copies · Exercices · Fiches · Suivi — avec info-bulles pédagogiques systématiques, raccourcis clavier, présence élèves en temps réel.
3. **Une barre d'actions transverses** (sauvegarde-instantané, import, retour) toujours visible.
Le clonage vers le QCM (evals · pilot · results · classes · snapshot) a confirmé la transposabilité — et montré le résidu à retirer partout : l'onglet « classes » (gestion d'identité), qui appartient au site.

### Le modèle proposé (les 7 onglets de la souche rangés dans la cible)
- **Pilotage** = le travail du prof : sous-onglets *Préparation* (créer ET modifier l'instance — le manque pointé sur le débat, présent dans la souche via l'écran « config »), puis les modes de travail propres à l'app (*Correction* et *Rapide* pour la dictée ; *Groupes* et *Séance* pour le débat ; *Direct* pour le QCM).
- **Données** = ce qui sort : *Bilan*, *Copies/Productions*, *Fiches imprimables*, *Suivi en direct*, *Exports/Instantanés*.
- **Réglages** = ce qui persiste entre les séances (barèmes par défaut, options d'affichage) — seulement si l'app en a.
- **« ? »** = aide d'usage + annonces de nouveautés pédagogiques.
- La gestion des classes disparaît de toutes les apps (renvois vers le site, déjà câblés).

### Les 3 questions à trancher (étape 1) — avec mon conseil
**Q1 — TRANCHÉE (15/07, sur mockup cliquable) : DEUX NIVEAUX, avec atterrissage sur le travail principal.** *Raison sourcée : c'est la définition même du panneau universel donnée par Paul — « identique, en tout cas pour les onglets ; les sous-onglets seront les spécificités de chaque app ». Trois onglets (Pilotage · Données · Réglages) toujours identiques = les repères du professeur se transfèrent d'une app à l'autre ; la barre plate ne pouvait pas tenir cette promesse (longueurs différentes par app). Sert aussi le principe « doter, pas s'aligner » : un onglet standard peu garni est un emplacement qui appelle son contenu. L'atterrissage à l'ouverture se fait sur le travail principal de l'app (Correction pour la dictée, Séance pour le débat) : le coût du second niveau ne se paie jamais sur le geste quotidien. Les raccourcis clavier existants restent inchangés.*
**RÈGLE DE CHANTIER (15/07, à la suite du mockup)** : la refonte des panneaux change le CADRE (navigation), jamais les ÉCRANS DE TRAVAIL existants — ils sont re-rangés, pas rouverts. Si un écran existant doit un jour être modifié : lecture profonde préalable obligatoire (affichage réel, commandes clavier, gestes d'usage) avant toute proposition.
**Q1-bis (ancienne formulation) —** La souche vit très bien en barre plate de 7 onglets ; la cible à 3 onglets impose un second niveau (sous-onglets), qui organise mais ajoute un clic. *Conseil : deux niveaux, avec « atterrissage intelligent » — le panneau s'ouvre directement sur Pilotage → le mode de travail principal de l'app (la Correction pour la dictée, la Séance pour le débat), si bien que le clic supplémentaire ne se paie qu'en changeant de fonction.* Alternative défendable : barre plate aux libellés et à l'ordre standardisés (Préparation toujours 1re, Données toujours groupées à droite) — moins de refonte, moins d'unité visuelle.
**Q2 — TRANCHÉE (15/07) : annonces centralisées sur le site.** *Raison pédagogique sourcée (Paul) : un événement pédagogique est naturellement transversal — le brevet blanc s'éclate entre dictée, réécriture, étude de texte et rédaction ; une annonce unique cochant plusieurs apps épouse cette réalité.* (Archive de l'option écartée : annonces écrites app par app.)
**Q2-bis (ancienne formulation) —** Option A (conseillée) : *centralisées sur le site* — tu écris une annonce une fois, tu coches les apps concernées, chaque « ? » la lit ; un seul geste, cohérent avec « le site orchestre », et l'annonce peut pointer plusieurs apps (« nouveau brevet blanc disponible dans Réécriture et Dictée »). Option B : écrites dans chaque app (plus proche du geste actuel du QCM, mais dix endroits où écrire). Techniquement, A = un nœud d'annonces sur le hub, lu par toutes les apps ; B = un nœud par app.
**Q3 — TRANCHÉE (15/07) : l'onglet Réglages est PARTOUT.** *Raison (Paul, principe général réaffirmé) : les apps ont été faites dans l'année sur le besoin du moment, par priorisation — elles sont TOUTES en mode développement, aucune n'est finalisée ni intouchable (même si certaines sont bien plus abouties : correction de dictée, QCM, applaudimètre). L'uniformisation ne s'aligne donc pas sur l'existant minimal : elle DOTE chaque app des fonctionnalités des autres. Un onglet Réglages vide aujourd'hui est un emplacement qui appelle son contenu demain.* (Mon conseil initial — onglet seulement où il se justifie — était l'inverse : écarté pour cette raison.)
**Q3-bis (ancienne formulation) —** Peu d'apps en ont beaucoup. *Conseil : onglet présent seulement là où il se justifie (applaudimètre, dictée universelle), pour ne pas afficher un onglet vide ailleurs.* L'uniformité porte sur « s'il existe, il est là et s'appelle ainsi », pas sur sa présence partout.

### Cohérence apps ↔ site (le fil rouge)
Le site est la **porte** (identité, session partagée, codes) et la **mémoire** (classes, profils, console, corbeille) ; les apps sont les **salles de travail** (instances, séances, données pédagogiques). Tout ce qui relève de *qui est l'élève* remonte au site ; tout ce qui relève de *ce qu'il fait* reste dans l'app et se déclare par contrat (manifestes — fait en Phase 1). Le panneau universel est la traduction visible de cette répartition : plus aucune app ne gère l'identité, toutes offrent les mêmes tiroirs au même endroit.

### LA GRAMMAIRE DU PANNEAU (validée le 15/07 sur comparaison d'écrans — « c'est ce que je demande depuis le début »)
Le modèle n'est pas qu'une navigation et une charte : c'est la grammaire complète de correction de dictée.
1. **Accueil d'instances** : liste des instances existantes + création — on choisit son contexte AVANT d'entrer dans le panneau (le débat te jette aujourd'hui dans une séance : à corriger).
2. **Panneau clair et sobre** : charte de correction de dictée (fond crème #fafaf8, cartes blanches, ombres discrètes, bleu d'action #2563eb, radius 14px) ; navigation deux niveaux EN TÊTE ; une chose à la fois, de l'air.
3. **L'habillage appartient aux écrans élèves** : le grand décor (titre théâtral, objectif, affirmation, camps) n'a rien à faire en permanence sur l'écran de travail du prof — il se réduit à une ligne de contexte (« Débat teste · 4E »). L'ambiance de séance (sombre, projetée) reste côté élève.
4. **Largeur d'écran (contrainte notée le 15/07)** : le débat est en écran LARGE (usage tablette/projection en classe), la dictée en colonne centrée. À unifier par TYPE d'écran, pas par app — orientation : colonne centrée lisible pour accueils et formulaires ; pleine largeur pour les écrans de travail denses (tableaux de suivi, correction, séance de débat). La souche fait déjà cette distinction (accueil étroit, correction élargie).

### Règles d'interface actées le 15/07 (sur captures du panneau débat)
- **Des ⓘ partout** : toute mention, badge ou bouton dont le sens n'est pas évident porte son info-bulle (le système de la souche : le petit ⓘ cliquable). Exemple fondateur : les badges « verrouillé » et « 3 archives » du panneau de contrôle, illisibles sans explication. Un attribut au survol ne suffit pas (lent, invisible sur tablette).
- **Un seul thème côté professeur** : le passage du panneau clair (blanc/bleu) au cockpit sombre est « terrible » — l'ensemble du côté prof passe à la charte claire de la souche. **EXCEPTIONS ACTÉES (15/07 soir, Paul) : le QCM garde sa charte propre (gradient), l'applaudimètre aussi.** Raison non explicitée à consigner en S0 (probable : identités visuelles abouties et assumées — ces deux apps sont citées par Paul parmi les plus abouties). Question ouverte associée (S0-④) : la GRAMMAIRE (accueil d'instances, deux niveaux, ⓘ, Préparation) s'applique-t-elle à ces deux apps dans leur habillage propre ? (recommandation : oui — la grammaire est structurelle, la charte est cosmétique). Re-thémage en passes vérifiées sur capture : ① variables + fonds + en-tête/navigation ; ② bandeau de séance + légende + tableau des binômes ; ③ mode tournoi + fenêtres superposées. L'ambiance sombre reste aux écrans ÉLÈVES (séance projetée).
- Le panneau de contrôle (écran de départ) cloné de la souche est validé (« on commence à arriver à la vérité »).

### L'intégration au site (mécanisme vérifié dans le code le 15/07)
**Le mécanisme confirmé** : chaque niveau a ses **onglets publiés** (`published_tabs`, basculés depuis le mode admin) et ses **chapitres** publiables à trois étages (chapitre → séance → item : chacun a son interrupteur `published`). Les **items de séances** portent les liens vers les apps, avec un « genre » par app ; côté élève, tout s'ouvre **en modale** (visionneuse intégrée) ; le lien direct vers le fichier de l'app reste l'ouverture classique.

**Règle actée (15/07)** : *toute app s'ouvre en modale quand on passe par MJPC ; ouverture classique par lien direct sinon.* C'est du clonage : le mécanisme existe (visionneuse + genres d'items), il suffit de brancher les apps manquantes. Deux points techniques à valider au passage : le plein écran dans la visionneuse (autorisation d'iframe à vérifier pour les apps qui le demandent) ; et côté professeur, le menu d'outils admin ouvre aujourd'hui les apps en **nouvel onglet** — à convertir en modale pour respecter la règle (en gardant le lien direct pour les longues sessions de correction si le confort l'exige).

**État des branchements côté élève (items de séances) :**
| App | Branchée ? | Genre d'item |
|---|---|---|
| Évaluation QCM | ✔ | `qcm` |
| Dictée universelle | ✔ | `dictee` |
| Correction de dictée | ✔ | `dictee` (copie corrigée) |
| Réécriture | ✔ | `reecriture` |
| Réécriture BB 4e | ✔ (vérifié : ouverte en modale depuis l'onglet réécriture du niveau) | via onglet |
| **Débat** | **✘ absente** | à créer |
| **Analyse logique** | **✘ absente** | à créer |
| **Plan de travail** | **✘ absente** | à créer (ou statut particulier) |
| **Applaudimètre** | **✘ absente** | à créer (ou statut particulier) |

**Questions ouvertes (Q4-Q7) — comment chaque app absente doit-elle apparaître aux élèves sur MJPC ?**
- **Q4 — TRANCHÉE (15/07) : item de séance « débat »** (l'élève clique dans la séance, la modale s'ouvre, il se connecte). **Applaudimètre : idem, item de séance** (séances de lecture orale). **Plan de travail : un CHAPITRE entier** dans la liste des chapitres — l'élève clique le chapitre et arrive sur la page d'accueil de worktrack (sa carte).
- **Q5 — TRANCHÉE (15/07) : l'analyse logique devient un ONGLET de niveau** (comme Réécriture), en EXTRAYANT le contenu « analyse logique » actuellement logé dans l'onglet Fiches transversales (vérifié : onglet de niveau existant). L'onglet portera l'app.
- **Q6 Plan de travail** : outil de salle (2 élèves par poste, en classe) — doit-il apparaître aux élèves sur le site, ou rester un outil que TU ouvres en classe ?
- **Q7 Applaudimètre** : app de vidéoprojection + vote sur tablette — les élèves n'ouvrent que l'écran de vote : faut-il un accès élève depuis le site, ou l'accès reste-t-il piloté en séance ?

---


## 1. Cadre et objectif

MJPC 6 exécute la **Phase 1 du plan de fiabilisation du hub Firebase** (`mjpc-hub`, europe-west1) défini par le cadrage (`MJPC6-cadrage.md`) : déployer le **socle MJPC-CORE v1.0.0** (`mjpc-core.js`, recopié verbatim, jamais modifié localement) dans les **10 apps** de l'écosystème, avec pour chacune :

- un bloc **DÉCLARATION** (`MJPC_APP` : id = nom de fichier sans extension, nom lisible, contenant ∈ {aucun, binome, groupe, classe}) ;
- un **MANIFESTE** (`MJPC_MANIFESTE` : nœuds Firebase possédés, notions Phase 3 vides pour l'instant) ;
- un **CONTRAT DE PURGE** (`MJPC_PURGE` : preserver = conception, purger = données élèves) publié sous `manifestes/<id>` à l'ouverture du panneau prof (`publierManifeste`) ;
- la **conversion des écritures dangereuses** sur `/classes` racine (partagé) : sets destructifs → `ecrireClasse` (transaction non destructive, préserve `archivee`/`niveau`, normalise au format canonique `{eleves, métas}`, purge les résidus indexés) ; suppressions → `renvoyerVersMJPC` (une seule porte de destruction : MJPC) ;
- l'**identité des clés** : clé de classe = nom tel quel (`cleClasse`, décision §12 — mort du slugify) ; clé élève = `sanMJPC` (canon `clement_noe`) ;
- le **masquage des classes internes** (`_test_*`, `_TEST`, `CLASSE TEST` selon contexte) des sélecteurs, surtout côté élève.

**Méthode par app** : sauvegarde → repérage (grep exhaustif) → lecture des sites → édition → audit complet post-édition → double parseur (node --check + acorn) → **banc d'exécution du segment livré sur l'export réel du hub** (`hub.json`) → livraison → push par Paul → vérification GitHub **bit à bit** + manifeste Firebase.

Contexte amont : le QCM et correction_dictee avaient été traités en MJPC 5 (manifestes publiés dès 9h23/9h40, avant cette session). L'incident fondateur (juin) : un set racine de `/classes` avait rasé le hub.

---

## 2. Amorçage (étape 0)

- **Accès REST Firebase opérationnel** depuis l'environnement Claude (domaine autorisé) : lecture directe du hub, plus d'allers-retours manuels. **L'export du hub est désormais auto-servi** : chaque session commence par un snapshot frais (`hub.json`, 5,7 Mo ce matin-là) — c'est à la fois l'archive-avant-tout et le banc d'exécution.
- Dépôt cloné : `siteflow-io/monsieurjaipascompris` (GitHub Pages). **`mjpc-core.js` présent à la racine (8 986 octets) → dette ⑲ fermée.**
- Hub au matin : 17 nœuds racine ; `/classes` = 6 classes (3E Charles de Gaulle, 4E BANKSY, 4E PYTHAGORE, 5e HERGÉ, CLASSE TEST, _TEST — les 2 dernières = banc d'essai volontaire, formats tordus).

---

## 3. Déroulé — les 8 apps traitées en séance

### 3.1 `applause_meter.html` (v2 — 10 gestes)
- Sites convertis : set destructif création (L2444) → `ecrireClasse` + `cleClasse` (mort du slugify, fonction supprimée) ; remove classe (L2448) → renvoi MJPC ; classe test → `TEST_SLug = classeTestId()` = `_test_applause_meter` (ex `_test_applause`), écrite via `ecrireClasse`, remove de fin de test conservé (brouillon nettoyable).
- `san` aliasé sur `sanMJPC` ; `extractEleves` local supprimé (la redéfinition locale aurait écrasé le canon — les function declarations postérieures gagnent).
- Manifeste : nœud `applaudimetre` ; purge : preserver `session/reglages` (avec la règle **« preserver prime sur purger »** posée en commentaire — à implémenter dans la console) ; purger seances, historiqueLectures, qrScans, live, liveSnapshot, file, compteurLectures, votes, tablettes, compliments, session, **`applaudimetre/classes`** (résidu d'avant mutualisation découvert dans le hub → dette B).
- Filtres classes internes : sélecteur pilotage (classe courante visible même interne) + onglet Classes (strict).
- Constat : la « suppression d'élève » (dette A②) n'existait que via la suppression de classe → couverte.
- Banc 21/21 · GitHub bit à bit ✔ · manifeste ✔ (10:45).

### 3.2 + 3.3 `reecriture.html` / `reecriture_bb4e.html` (v2 — 8 gestes chacune, miroir)
- Sites convertis : set destructif `set(el)` (liste brute ! perte des métas ET dégradation de format) → `ecrireClasse` ; remove sec → renvoi MJPC. `cn` était déjà le nom trim (pas de slugify à tuer).
- **Prise du banc AVANT édition** : les sélecteurs affichaient `CLASSES[c].length` — juste sur l'ancien format tableau, **« undefined » sur le format canonique** déjà présent dans le hub → convertis vers `extractEleves(...).length`.
- `publierManifeste` aux **deux** portes prof (code + `?mode=prof`).
- Système snapshot examiné : **mort dans reecriture** (défini, jamais monté — dette B), **sûr dans bb4e** (scopé `reecriture_bb4e/<id>`) ; la restauration crée un snapshot avant de restaurer (exemplaire).
- Contrats : reecriture — preserver `reecritures/*/config` ; purger corrections, snapshots, paquetOrder, presence, absents. bb4e — preserver `*/config` ; purger absents, autocorrection, notesFictives.
- **INCIDENT №1 (majeur, attrapé)** : le regex de suppression de l'`extractEleves` local a mangé la moitié du socle inséré (extractEleves→publierManifeste + déclaration), en laissant un fichier **syntaxiquement parfait**. Le double parseur n'a rien vu ; **le banc d'exécution l'a attrapé** (« extractEleves is not defined »). Restauration depuis backups, réédition dans le bon ordre (**suppression du local AVANT insertion du socle**), garde-fou de complétude ajouté (les 7 fonctions du socle vérifiées présentes après écriture). Zéro dégât.
- Banc 14/14 · GitHub bit à bit ✔ · manifestes ✔ (11:00/11:01).

### 3.4 `dictee_universelle.html` (v2 — 3 gestes)
- **Correction de carte №1 : la dette A② n'existait pas.** L'app ne touche jamais `/classes` (élèves saisis par dictée dans `config`, champ `classe` = étiquette) ; le seul bloc de purge d'élève est réservé à `TEST_ELEVE` (réinitialisation du brouillon de test, confirm, scopé). Suppression de dictée entière et effacement de simulation : souverains sur nœud propre, confirm. Rien à désarmer.
- Gestes : socle + déclaration (manifeste `dictees` + `students` + `students_sim`, nœuds racine des carnets d'erreurs) ; `san` aliasé ; `publierManifeste` aux 2 portes (Entrée + bouton).
- Contrat : preserver `dictees/*/config` ; purger results, drafts, locks, contestations, codes, contestLock, distribution, autocorrect, correction, students, students_sim. Test de couverture contre les sous-nœuds réels du hub ✔.
- Découverte : clé `MONSIEUR_Meney` hors format (compte de démo, majuscules) dans results/codes de 2 dictées → dette B.
- Banc 6/6 · GitHub ✔ · manifeste ✔ (12:40).

### 3.5 `worktrack.html` (v2 puis v3 — 7 gestes + fix)
- **Correction de carte №2 et plus grosse prise de la session : PAS en lecture seule.** `classesStore.save = ref("classes").set(m)` — **set de la racine `/classes` entière** (le pattern de l'incident de juin), déclenché par « Enregistrer la classe » (avec dégradation au format tableau) et « Supprimer la classe » du panneau prof.
- Gestes : set racine **neutralisé** (le `save` Firebase du store renvoie vers MJPC — défense en profondeur ; le store local mémoire conservé) ; `addClass` → `ecrireClasse` ciblée ; `delClass` → renvoi MJPC (mode local inchangé) ; socle + déclaration ; `extractEleves` local supprimé ; **`sanId` non touché** (≡ canon + garde `||"x"` — comportement historique des clés existantes) ; login élève : classes préfixées `_` masquées des tablettes, « CLASSE TEST » héritage conservée (workflow de test worktrack), tri interne du panneau prof non touché (il a sa logique `/test/i`).
- **Règle du seed respectée** : `let CHAPTER` intact (garde-fou), aucun contenu chapitre modifié.
- Contrat : preserver `plan_de_travail/chapitres` (bibliothèque = conception) ; purger `actifs` + `default` (progress, sessions, archives, journal, connexions, control, signaux ; appVersion se réécrit au boot).
- **INCIDENT №2 (leçon d'auth №1)** : manifeste non publié après ouverture — le poste de Paul reprend l'auth via `wt_prof_poste` (localStorage) **sans repasser par `checkCode`**, seul point où j'avais mis la publication. **v3** : publication aux 3 chemins (checkCode + reprise à l'ouverture + `bootResume`). Vérifié ✔ (12:51, via bootResume après F5).
- Banc 5/5 · GitHub ✔ (790 029 octets).

### 3.6 `pilotage_debat_s3.html` (v2 — 5 gestes)
- « **Chantier à reprendre** » dit à l'ouverture (règle) ; le multi-classe (⑰) est resté **suspendu et non touché** (TODO en tête de `_build_part2.js`, question code élève commun non tranchée).
- Lecture seule `/classes` confirmée (2 lectures). Nœuds propres : `debats`, `debat_singes` (legacy), **`codes` racine — la dette ⑮ en direct** : clés dégradées (`CL_MENT_Lylou`, `PINEAU_Cl_mence`) mêlées aux canoniques. Vérifié : `/codes` racine appartient à pilotage seul (dictee_universelle scope sous `dictees/`) mais index le co-écrit (voir 3.8).
- Gestes : socle + déclaration — **première app `contenant: "binome"`** (le binôme est un contenant, pas une identité) ; manifeste `debats`+`debat_singes`+`codes` ; **prise importante : `debats/*/meta` en preserver — il contient le mot de passe prof** (une purge naïve aurait enfermé Paul dehors) ; purger active, archives, debat_singes, codes ; publication aux **2 chemins d'auth** (mot de passe + reprise `role=prof` localStorage — leçon worktrack appliquée d'office) ; sélecteur de rattachement filtré (classe déjà rattachée reste visible même interne — rien ne bloque jamais le prof, principe directeur de l'app).
- Vérifié sans y toucher : `restoreFullBackup` vise `ROOT` = **le débat courant, pas la racine** (libellé « TOUTE la base » trompeur mais code sûr → micro-dette de libellé).
- Banc 6/6 · GitHub ✔ (333 511 octets — le 1er push servait encore l'ancienne version 324 277, re-téléchargement + re-push) · manifeste ✔ (13:54, via connexion auto = chemin de reprise validé).

### 3.7 `analyse_logique.html` (v2 — 5 gestes)
- L'app la plus saine : lecture seule `/classes`, écritures toutes sous `analyse_logique/`.
- Gestes : socle + déclaration ; contrat très favorable à la conception — preserver referentiel, baremeDefauts, todo, `travaux/*/config|bareme|corrige` (le corrigé collé via prompt IA×prof = conception, marques comprises) ; purger `travaux/*/results` seul ; `publierManifeste` au montage d'`AppProf` (bouton et `?role=prof` convergent — un seul point suffit, pas d'auth persistante) ; filtres sur 3 listings dont le **login élève** ; `extractEleves` local supprimé (pas de `san` local).
- Découverte : **nœud racine `results` orphelin** (clés ancien format `BARILLET_BIEMON_Axel`, aucune app ne l'écrit) → dette B, volontairement hors manifeste.
- **INCIDENT №3 (protocole)** : le fichier embarque un template `noyau-tpl` avec `</script>` encodé `@@ENDSCRIPT@@` — pas du JS de page, mon extraction l'a donné au parseur. **Protocole enrichi : blocs modifiés → double parseur ; blocs non modifiés → identité bit à bit au backup.** Template vérifié intact.
- Banc 6/6 · GitHub ✔ (138 414 octets) · manifeste ✔ (13:29, après Ctrl+F5 — premier essai mangé par le cache Pages).

### 3.8 `index.html` (v2 puis v3 — 5 gestes + fix)
- Le hub lui-même. **Parle à Firebase en REST pur** (pas de SDK) → les helpers SDK du socle restent en réserve ; **`publierManifesteREST()`** (format identique au socle) le remplace.
- **Prise finale : l'origine des clés dégradées identifiée.** Le slug élève d'`eleves_index` (L1807) utilisait une normalisation locale **sans décomposition des accents** (`CLÉMENT` → `cl_ment`) — la source du format `CL_MENT_Lylou`. **Corrigé vers `sanMJPC` — gratuitement** : `eleves_index` n'existe pas encore dans le hub, zéro migration. Bug éteint à la source.
- Écritures examinées : PUT ciblés `/site/...` (publication chapitres) et `/classes/<slug>/eleves` (ajout/retrait d'élève — ciblé, ne touche pas les métas) — sains. **MAIS la suppression d'élève (L2120) retire de la classe + DELETE le code SANS ARCHIVER** — c'est la porte centrale où aboutissent tous les renvois posés dans la passe. Non touché (c'est le cœur de Brique 2), **inscrit en première ligne de la spec Phase 2**.
- Contrat : preserver `site` (chapitres publiés 3e/5e) ; purger `eleves_index`. `/classes` et `/codes` co-écrits mais possédés par leurs apps.
- **INCIDENT №4 (leçon d'auth №2)** : manifeste non publié après ouverture — Paul entre par **Ctrl+Espace** → `activateAdmin()`, qui ne passe pas par `loginAsProf` (où était l'appel). **v3** : publication dans `activateAdmin()` même (couvre Ctrl+Espace + badge-tap ×5) + `loginAsProf` conservé.
- Banc 6/6 · GitHub ✔ (282 205 octets) · manifeste ✔ (13:59, via Ctrl+Espace).

---

## 4. Incidents et leçons (pour le rétro-prompt)

1. **Suppression avant insertion.** Tout helper local homonyme d'une fonction du socle se supprime AVANT d'insérer le socle (occurrence unique → ancres non ambiguës). Un regex non-greedy sur un doublon peut manger le socle en laissant un fichier syntaxiquement parfait.
2. **Le banc d'exécution attrape ce que les parseurs ne voient pas.** Le double parseur valide la syntaxe ; seul le banc (fonctions du segment livré, exécutées sur `hub.json` réel) valide la sémantique. Ne jamais livrer sans banc.
3. **Inventorier TOUS les chemins d'activation du mode prof/admin** avant de placer une publication : saisie de code, paramètre URL, reprise localStorage/sessionStorage, raccourcis clavier (Ctrl+Espace), gestes cachés (badge-tap). Deux occurrences (worktrack, index) avant que la leçon devienne règle.
4. **Blocs template ≠ JS de page.** Critère : blocs modifiés → parseur ; blocs non modifiés → identité bit à bit au backup.
5. **Grep avant de classer.** Le cadrage s'est trompé deux fois (dictee_universelle : dette fantôme ; worktrack : bombe classée inoffensive). Classer les apps APRÈS lecture du code, jamais sur souvenir.
6. **Croiser code et données paie systématiquement** : résidu `applaudimetre/classes`, `results` orphelin, `MONSIEUR_Meney`, mot de passe prof dans `meta`, origine des clés dégradées — toutes découvertes par le va-et-vient hub ↔ code.
7. **Garde-fous de complétude** : après toute écriture de fichier, vérifier la présence des 7 fonctions du socle + `var MJPC_APP` + marqueur de fin.
8. **Cache GitHub Pages** : après push, 1-2 min + Ctrl+F5 avant de conclure à un échec. Contrôle par taille de fichier (bit à bit via raw.githubusercontent.com).

---

## 5. Décisions prises en séance

- **Panneau de contrôle de pilotage : reporté à la passe panneaux** (Phase suivante), décision explicite de Paul sur ma recommandation. Motifs : finir la passe socle d'abord ; le panneau pilotage absorbe ⑰ (multi-classe, décision code élève pendante) et ⑮ (`/codes`) ; concevoir la passe panneaux d'un bloc.
- **« Preserver prime sur purger »** : sémantique posée dans les contrats (cas `session/reglages` ⊂ `session` d'applause_meter), à implémenter dans la console.
- **`id` de la déclaration = nom de fichier sans extension** (y compris `index`).
- **Un nœud = une app propriétaire** dans les manifestes ; les co-écrivains le mentionnent en commentaire (`/codes` → pilotage ; `/classes` → aucun manifeste).

---

## 6. État de clôture (14/07/2026 ~14h00)

**Phase 1 close : 10/10 apps livrées, poussées, vérifiées bit à bit sur GitHub ; 10/10 manifestes publiés et vérifiés sur Firebase ; hub intact** (6 classes inchangées, 17 nœuds racine, rien d'apparu ni disparu vs snapshot du matin).

| App | Manifeste | Contenant | Preserver / Purger |
|---|---|---|---|
| evaluation-qcm (MJPC 5) | 09:23 | aucun | 2 / 6 |
| correction_dictee (MJPC 5) | 09:40 | aucun | 2 / 9 |
| applause_meter | 10:45 | aucun | 1 / 12 |
| reecriture | 11:00 | aucun | 1 / 5 |
| reecriture_bb4e | 11:01 | aucun | 1 / 3 |
| dictee_universelle | 12:40 | aucun | 1 / 11 |
| worktrack | 12:51 | aucun | 1 / 2 |
| analyse_logique | 13:29 | aucun | 6 / 1 |
| pilotage_debat_s3 | 13:54 | **binome** | 2 / 4 |
| index | 13:59 | aucun | 1 / 1 |

Tailles déployées (contrôle) : applause_meter 565 216 · reecriture 239 267 · reecriture_bb4e 108 545 · dictee_universelle 1 928 589 · worktrack 790 029 · pilotage_debat_s3 333 511 · analyse_logique 138 414 · index 282 205 octets.

**Dettes fermées en séance** : ⑲ (mjpc-core.js poussé) · **A① — sets destructifs `/classes` (5/5 apps + set racine worktrack)** · **A② — suppressions d'élèves** (QCM/applause_meter par conversion, dictee_universelle par constat d'inexistence) · bug de normalisation des slugs élèves d'index (à la source, zéro migration).

---

## 7. Phase 2 — Console (14/07 après-midi, CLOSE et baptisée)

**Organisation décidée pour accélérer sans bâcler** : lots fonctionnels, banc de test versionné (`mjpc-bench.js`, enrichi à chaque lot, jamais élagué), rapports aux jalons seulement, décisions structurantes tranchées en rafale. Décisions actées : archive = corbeille hub **ET** fichier local ; console dans le panneau prof d'`index.html` ; purge de rentrée lit les manifestes, dry-run obligatoire ; rétention corbeille 1 an glissant, purge manuelle.

**Découverte d'ouverture (4e correction de carte)** : Brique 2 existait déjà, largement construite dans index (moteur `_eleveFootprint` + `_idMatch` tolérant, écran de sélection en lot, exécution avec sauvegarde-fichier obligatoire et frappe de confirmation, bloc UNIFIER). Les lots ont **complété l'existant**.

- **Lot 1 — Corbeille** : `corbeille/<AAAA-MM-JJ>/<motif>_<HHMMSS>` ({_meta, data}), branchée sur les 3 portes de destruction (exécution en lot `_b2Exec`, retrait d'élève unitaire `_deleteEleveCls` — archive ciblée nom+code car retirer ≠ détruire les traces —, suppression de classe `deleteClass` — classe entière + codes). Échec corbeille = choix explicite de l'utilisateur (le fichier local existe déjà). Fix : année scolaire dynamique (`an='2025-2026'` était en dur).
- **Lot 2 — Empreinte exhaustive** : nouvelle capacité `_fpScanChamp` (l'élève en valeur, pas en clé) + 9 couvertures (mjpcProfils, qcm/eleveSexes, students, students_sim, eleves_index, applaudimetre/historiqueLectures via champ `lecteur`, compteurLectures, pdt/{signaux,connexions}, journal via champ `nom`) ; dictées 1→6 sous-nœuds. `_idMatch` existant absorbe tout (clés composées, dégradées). **Exclusion à dessein : binômes de débat** (prénoms seuls → matching destructif trop ambigu ; couverts par la purge annuelle).
- **Lot 3 — Purge de rentrée** : lit les 10 manifestes, résout les wildcards contre un hub frais, **« preserver prime sur purger » implémenté** (cas fondateur session/reglages validé), **dry-run chiffré obligatoire** avec rapport JSON exportable, chaîne réelle fichier → corbeille → frappe `PURGER` → effacement séquentiel → bilan à échecs relançables. Bouton en zone dangereuse.
- **Lot 4 — Orphelins** : écran de diagnostic permanent — nœuds racine hors manifestes (couverture par préfixe) et hors liste blanche {classes, manifestes, corbeille} → archive fichier + corbeille + frappe du nom → suppression. Détecte les zombies futurs.
- **Correction de contrat (sur intervention de Paul)** : `mjpcProfils` ajouté au purger du QCM — **les profils longitudinaux ne survivent QU'UN AN** (décision antérieure : export imprimable local en fin d'année, puis purge). Mon erreur : avoir rationalisé le trou du contrat (« longitudinal donc voulu ») au lieu de le questionner → **règle : ne jamais rationaliser un trou de contrat**. Manifeste republié et vérifié (15:04).
- **Banc `mjpc-bench.js`** : 5 suites (socle, empreinte, purge, corbeille, orphelins), 37/37 sur le hub réel, dont garde-fous permanents : *aucune empreinte ni plan de purge ne pointe jamais la conception*. Le banc a attrapé l'incident n°5 (un `*/` dans un commentaire de chemin `debats/*/…` fermait le commentaire).
- **Baptême réel (Paul, ~17h-19h30)** : orphelin `results` archivé (fichier + `corbeille/2026-07-14/orphelin-results_170709`) puis supprimé — hub vérifié intact (17 nœuds : results parti, corbeille apparue). Dry-run réel exporté : **54 emplacements / 10 contrats / ~5,4 Mo de données élèves**, preserver prime visible en production, conception intacte. Rapport conservé par Paul = état de référence pré-purge.

**Leçon n°9** (s'ajoute aux 8 du §4) : un chemin de données élèves absent de tout `purger` est une anomalie à questionner, jamais à rationaliser.

**Incidents cumulés de la journée : 5, tous attrapés (parseurs, bancs, vérifs), zéro dégât en prod.**

## 8. Spec vivante (report intégral, état v2 — 14/07 soir)

### Prochaine étape immédiate (décidée)
- **⑯ URGENT : export des copies Dugain** (localStorage volatil — risque de perte réelle). À traiter en tout début de prochaine séquence.

### Prérequis daté
- **Export imprimable des profils `mjpcProfils` AVANT la première vraie purge (fin août).** La purge détruit les profils ; sans export préalable, perte sèche. À construire (petite feature console ou vue QCM).

### Documents à produire
- **Rétro-prompt MJPC 6** (en attente de go) — intégrer les 9 leçons du §4 + §7.
- **⑱ Consolidation mémoire Claude** (30/30 edits pleins) — plan de fusion à proposer.
- **⑭ `CLAUDE.md` du dépôt périmé** — réécrire : socle, conventions, manifestes, console, banc.

### DETTE — Panneau de contrôle universel (conception, avant ou pendant la passe)
**Inventaire de l'existant des 10 apps** : recenser les fonctionnalités des panneaux prof actuels (certaines apps ont ce que d'autres n'ont pas), puis **réagencer/étoffer/unifier — pas recréer**. Structure actée (14/07 soir) : onglets **Pilotage · Données · Réglages** (Réglages si l'app en a) — identiques partout ; les sous-onglets portent les spécificités de chaque app. Pas d'onglet Nouveautés : un bouton **« ? »** regroupe l'aide ET les notifications de nouveautés pédagogiques (nouvel exercice, nouveau brevet blanc…) — **reprendre le système de notifications d'évaluation-QCM**.

### Passe panneaux (chantier en cours — ouvert par le débat) — DÉTAIL
**Fait au 15/07** : socle v1.1.0 (lecture de la session du site : `lireSessionMJPC` + `validerEleveMJPC`, validité 12 h) · portail élève du débat refondu (code personnel + nom + prénom, vérification des trois ; reconnexion automatique dans son groupe ; plus de listes où se choisir ; plus de champs libres) · shunt prof et élève depuis le site · mot de passe prof UNIQUE (`debat_config/profPassword`, migration douce — un mot de passe par débat était le bug du 15/07) · code de séance supprimé partout (génération, écritures, affichage) · décorum neutralisé (app universelle) · nœud `codes` rendu au site (contrats des deux apps corrigés) · sélecteur de classe prof : CLASSE TEST visible (banc d'essai).
**Décisions actées** : rattachement de classe obligatoire pour tout nouveau débat · plus de code de séance · groupes : taille 1-3 existante, modes imposé/choisi à construire (jalon 3).
- **RÈGLE N°1 (décidée 14/07)** : identification résolue obligatoire partout — aucune saisie d'identité élève en texte libre ; tout passe par `resolveEleves` contre le roster `/classes` (clé canonique), refus bloquant. **Pilotage en premier** (binômes = 2 élèves résolus → lève à terme l'exclusion d'empreinte).
- Trancher ⑰ : code élève commun (option 1, recommandée) vs un code par classe ; puis multi-classe pilotage (TODO en tête de `_build_part2.js`).
- Restructuration `/codes` (⑮ — possédé par pilotage, co-écrit par index).
- Modèle de panneau unifié sur les 10 apps. Snapshot mort de `reecriture` : nettoyer ou monter. Libellé « Sauvegarde totale » (pilotage) à corriger.

### Phase 3 — Concordance (après panneaux)
- Migration `mjpcProfils` slugs-tirets (`4e-banksy`) → clés canoniques ; `qcm/classes` slugs-tirets ; `eleveSexes` indexé par noms de classe non canoniques. Concordance 122 élèves (`mjpc-concordance_2026-06-30.json`).

### Dettes B restantes (tombent avec la purge de rentrée — vérifier au dry-run d'août)
- `applaudimetre/classes`, `MONSIEUR_Meney` (2 dictées), passages test `historiqueLectures`, `debat_singes`, codes dégradés : tous couverts par les contrats → la purge d'août les emporte. Plus rien à scripter.

### Rappels de règles actives
- Seed worktrack (`let CHAPTER`) : toute modif de contenu chapitre → répercuter dans le seed, même livraison.
- Dire « chantier à reprendre » à chaque réouverture de pilotage_debat_s3 ; le prof n'y est jamais bloqué.
- Toute app partagée est en développement actif. Snapshot hub en début de session. Vérif bit à bit post-push + manifeste après ouverture panneau (cache : Ctrl+F5, 1-2 min).
- Nouvelle méthode de travail : lots fonctionnels, banc versionné, rapports aux jalons, décisions en rafale.

---

## 9. Inventaire des panneaux et entrées des 10 apps (15/07/2026)
*Base de travail du panneau universel — réagencer/étoffer/unifier, pas recréer.*


## 1. Comment le professeur entre aujourd'hui (7 mécanismes différents !)

| App | Entrée professeur |
|---|---|
| Évaluation QCM | Code tapé (3141/1312) dans un champ |
| Correction de dictée | Code tapé, même paire |
| Applaudimètre | Code tapé, même paire (stocké en chaînes, pas en nombres) |
| Réécriture / Réécriture BB 4e | Code tapé + republication du contrat |
| Dictée universelle | Code tapé — **mais les codes peuvent venir de la base** (configurable), champ « mot de passe » |
| Plan de travail | Code tapé **une fois**, puis le poste reste professeur (mémorisé sur la machine) |
| Analyse logique | **Aucun code** : un bouton « Espace professeur » ouvre tout |
| Débat | **Mot de passe** stocké dans la base (depuis le 15/07 : unique pour toute l'app) |
| Site MJPC | Code dans le champ de connexion, **ou** Ctrl+Espace, **ou** 5 appuis sur le logo |

**Constat** : neuf portes différentes pour la même personne. C'est là que les défauts se nichent (le mot de passe par débat en était un). **Cible** : partout pareil — session du site MJPC reconnue (déjà câblée dans le débat), avec le code local en secours.

## 2. Comment l'élève entre aujourd'hui

| App | Entrée élève | Risque d'usurpation |
|---|---|---|
| Évaluation QCM | QR code de séance + choix du nom | Choix dans une liste |
| Correction de dictée | Choix classe → nom dans une liste | Choix dans une liste |
| Applaudimètre | Pas de connexion individuelle (vidéoprojection + tablettes de vote) | — |
| Réécriture (×2) | Choix classe → nom | Choix dans une liste |
| Dictée universelle | Choix du prénom dans une liste (× 2 écrans) | Choix dans une liste |
| Plan de travail | Choix classe → nom, par demi-écran (2 élèves par poste) | Choix dans une liste |
| Analyse logique | Choix classe → nom | Choix dans une liste |
| **Débat (depuis le 15/07)** | **Code MJPC personnel + nom + prénom, ou session du site** | **Aucun** |
| Site MJPC | Nom+prénom **ou code personnel**, vérifiés | Faible (code) |

**Constat** : partout ailleurs que dans le débat refondu, un élève peut se faire passer pour un autre en deux clics. **Cible (ta règle)** : le modèle du débat partout — code personnel + nom + prénom, ou session du site ; plus aucune liste où se choisir.

## 3. Ce que contient chaque panneau professeur (fonctionnalités à réagencer)

| App | Le cœur (futur **Pilotage**) | Données | Réglages | Divers |
|---|---|---|---|---|
| Évaluation QCM | Lancer/piloter l'éval en direct (chrono, +5/10/30 s, aperçu question suivante, niveaux) | Bilans, **bilan longitudinal**, impression (5 écrans) | Barème (2 modes de notation) | **Canal de notifications élèves en temps réel** ← la brique à généraliser |
| Correction de dictée | Correction rapide en direct, remappage, publication de la copie | Résultats, exercices, productions, **impression riche** (12 écrans), instantanés | Options de copie | Présence élèves en direct |
| Applaudimètre | Séance de lecture (file, passage, votes, compliments) | Historique des lectures, compteurs | **Réglages persistants** (protégés de la purge) | Cartes de comportement |
| Réécriture | Correction par paquets, navigation | Corrections, instantanés (système à moitié monté) | — | Présence élèves |
| Réécriture BB 4e | Idem, adapté brevet blanc | Autocorrection, notes fictives | — | — |
| Dictée universelle | Dictée en direct (audio, pièges, barème) | Résultats, contestations, brouillons | Codes prof configurables | Carnets d'erreurs |
| Plan de travail | Suivi de séance en direct (signaux, connexions) | Bilans, archives, journal, impression (12 écrans) | Options de cours | **Sentinelle** (surveillance de séance) |
| Analyse logique | Créer/corriger des travaux (corrigé IA×prof) | Résultats par travail | Barèmes par défaut | Référentiel grammatical |
| Débat | Groupes, tournois, manches, scores | Archives, export/import complet | Mot de passe | Verrouillage, fin de séance |
| Site MJPC | — (c'est le hub) | **Console complète** : archives, corbeille, purge, orphelins, suppression en masse | — | Gestion classes/élèves/codes — **la seule légitime** |

## 4. Ce qui existe ici et manque là (matière pour « étoffer/unifier »)

- **Notifications élèves** : seul le QCM a le canal temps réel. À généraliser, et à étendre en « annonces de nouveautés » persistantes dans le bouton « ? » (l'onglet Nouveautés est abandonné).
- **Aide intégrée** : inexistante partout (des info-bulles seulement). À créer dans le « ? ».
- **Présence élèves en direct** : correction de dictée et réécriture l'ont ; les autres non.
- **Impression** : très riche dans correction de dictée et plan de travail ; absente ailleurs où elle servirait (débat : fiches de synthèse ?).
- **Gestion des classes** : encore présente dans plusieurs panneaux (plan de travail, QCM...) → à retirer partout, elle appartient au site (les renvois sont déjà câblés).
- **Réglages persistants** : l'applaudimètre montre le modèle (protégés de la purge) ; les autres apps mélangent réglages et pilotage.
- **Export/sauvegarde** : le débat a le plus complet (export/import ré-importable) ; à standardiser dans l'onglet Données.

## 5. Proposition d'ordre pour la passe (à valider)
1. **Débat** (en cours — jalons 3-6) : essuie les plâtres du modèle.
2. **Dictée universelle, correction de dictée, réécriture ×2, analyse logique, QCM** : le modèle s'applique naturellement (connexion + 3 onglets).
3. **Plan de travail** (2 élèves par poste : adaptation de la connexion) et **applaudimètre** (pas de connexion élève : panneau seul).
4. **Site MJPC** : dernier, il orchestre.


---

