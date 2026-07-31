# « BUG » — LA RESTAURATION D'URGENCE
*Convention instituée par Paul le 18/07/2026. Mécanisme TESTÉ à blanc le jour même.*

### POINT DE RETOUR — `dictee_universelle.html` AVANT promotion M9 (22/07/2026)
- **Commit de référence** : `5076cfd6be` (2026-07-14T12:25:33Z)
- **Fichier** : 1 928 589 o · md5 `ab51c348324b309b8947e200c55e2956` · APP_VERSION 1.x, socle MJPC-CORE 1.0.0
- **Restauration** : `contents/dictee_universelle.html?ref=5076cfd6beeeef608cfd66e1edb5de19ec6eaeff` (API authentifiée) → PUT du contenu récupéré.
- **Motif** : promotion M9 (passe complète : socle 1.1.0 + shunt §8, portail identité unique `/codes`, « Mes dictées », garde-corbeille P1 sur les 4 gestes destructeurs, dictionnaire de textes, présence, navigation prof à 2 niveaux, pastille 2.0.0, D16, tactile ≤480px, extrait de texte réservé au professeur).

### POINT DE RETOUR — jumelles réécriture AVANT lot micro « métas anti-cache » (22/07/2026)
- `reecriture.html` : commit `8cc669b46b` · md5 `c2e41fccc1983b758902fa265d671315`
- `reecriture_bb4e.html` : commit `094b0c8d1e` · md5 `5798f2527221b80679873dd50b5aa546`
- **Motif** : dette M10 soldée — insertion des 3 métas anti-cache (Cache-Control / Pragma / Expires) après le viewport. Aucun code touché.

### POINT DE RETOUR — `dictee_universelle.html` AVANT lot micro « bilan à la 1re personne » (22/07)
- commit `6783936dcd` · md5 `afdf2820f1955f288f32d4ad97ca9682`
- **Motif** : dette M9 soldée — 6 mentions « par le professeur » du bilan exporté passées à la 1re personne (apostrophe typographique, chaînes JS intactes).

### POINT DE RETOUR — AVANT promotion M11 (22/07/2026)
- `analyse_logique.html` : commit `8c0daa21ba` · 138414 o · md5 `35313d011c6f3522bc4ade6b03d75c6d`
- `index.html` : commit `3f443fb191` · 363446 o · md5 `c9c3d326d85081a9fce45bfe68158d09`
- **Motif** : M11 — passe complète `analyse_logique` v2.0.0 (vendorisation, socle 1.1.0 + shunt élève ET prof, identité unique `/codes`, Q4 motifs cumulables, mode test point 16, corbeille, présence, nav 2 niveaux, pastille, ≤480px) + extraction de l'onglet Analyse logique côté site (27 lignes).

### POINT DE RETOUR — `index.html` AVANT promotion M12 (22/07/2026)
- commit `f82be1360d` · 365 082 o · md5 `f2bfefb648fcd42f3e3b3bddee119824` · v8.4.3
- **Motif** : M12 — écran corbeille (consulter/exporter/restaurer avec confirmation chiffrée), modales admin (7 prompt + 14 confirm), genres analyse_logique/applaudimetre/worktrack + réparation tache, marqueur et zone autonomie, séances publiées TOUJOURS visibles, texte de séance sans document ÉDITABLE, bloc diagnostic, pastille 8.5.0.

### POINT DE RETOUR — `worktrack.html` AVANT promotion M13 (23/07/2026)
- commit `167ad67e2e` · 790 029 o · md5 `05b38757b8bd33ff4acba5c2963d47d2` · socle 1.0.0
- **Motif** : M13 — vendorisation, socle 1.1.0 + shunt élève ET prof, portail par lane sur `/codes`, **verrou de classe du poste LEVÉ** (décision Paul : postes mixtes en étude), chapitre par lane, seed régénéré mécaniquement (S0-⑥), mode test 16bis (portail réel éprouvé, purge vérifiée), corbeille sur delChapter, présence hub, nav 2 niveaux, dictionnaire de textes, diagnostic, tactile 390.

### POINT DE RETOUR — `analyse_logique.html` AVANT LOT-COUTURES (27/07/2026)
- commit `e0a3392fb1` · 522047 o · md5 `93fb6e32fa4243afd2fc344fc9bca510` · v2.0.0
- **Motif** : LOT-COUTURES — gestes de base (Modifier/Supprimer/Dupliquer, verrou texte, archive avant destruction), sous-onglet 🧪 Outils, deep-link ?travail=, corbeille vers racine canonique.

### POINT DE RETOUR — `dictee_universelle.html` AVANT LOT-COUTURES (27/07/2026)
- commit `833bdda5a1` · 1956829 o · md5 `f8362a876ceefe1dc1e6d7f668f00848` · v2.0.0→2.0.1
- **Motif** : LOT-COUTURES — corbeille _meta.chemin+data si paths.length===1.

### POINT DE RETOUR — `worktrack.html` AVANT LOT-COUTURES (27/07/2026)
- commit `c6e17d54a8` · 1017258 o · md5 `9bd370fb43940b9cba9ba495d5cf2eb1` · 2026-07-23a→27a
- **Motif** : LOT-COUTURES — corbeille contenu:→data: (bug M13, bouton Restaurer).

### POINT DE RETOUR — `index.html` AVANT correctif v8.5.1 (27/07/2026)
- commit `f3e2e9c6df` · 393 791 o · md5 `c09a8bff758ed368b22c4e24c245be46` · v8.5.0
- **Motif** : filière micro — ① `switchTab` passe par `hideAllTabs` (accumulation de `tab-analyse` sous les autres onglets, constat Paul) ; ② cantonnement par niveau des `.doc-item[data-niveau]` + compteur recalculé (fiche « Analyse logique 3e » en dur visible en 6e).

### POINT DE RETOUR — `index.html` AVANT correctif v8.5.2 (27/07/2026)
- commit `fd4b44d0de` · 394 508 o · md5 `2af3b0428890f865ec1d4967153b6af8` · v8.5.1
- **Motif** : micro — rendu initial vide à l'endroit prof/fantôme (personne ne chargeait `/classes` à l'endroit ; `_isPubAny` → `_lvlClasses` → liste vide → aucun chapitre publié par classe visible ; l'aller-retour Ctrl+Espace les chargeait via `_renderLensBar`). `loadPublished` attend désormais `loadClasses` avant le premier `applyPublished`.

### POINT DE RETOUR — `applause_meter.html` AVANT M14 (27/07/2026)
- commit `650aa0ec7b` · 565 216 o · md5 `11a8971573b6e27bdde8722fc726f5ec` · socle 1.0.0, sans version d'app
- **Motif** : M14 « passe + code » — socle 1.1.0+shunt, portail à code par zone, mode test patron QCM (6 fictifs, purge vérifiée), corbeille format A, présence, dictionnaire, diagnostic, mouchard côté prof, pastille 2.0.0, critères en amont, Mes lectures, tactile 480.

## La convention
**Paul écrit `BUG` (seul, en majuscules) → la conscience restaure IMMÉDIATEMENT l'app concernée dans son état d'avant la dernière promotion, sans poser de question, sans diagnostic préalable.**
- Le diagnostic vient APRÈS, une fois l'usage rendu.
- Aucune justification n'est demandée à Paul : il peut être en classe, devant ses élèves.
- Si plusieurs apps ont été promues récemment, la conscience demande UNIQUEMENT « laquelle ? » — rien d'autre.
- Variante : `BUG <app>` si Paul veut préciser d'emblée (ex. `BUG dictée`).

## Le mécanisme (prouvé, ne dépend d'aucun fichier local)
L'historique Git EST le point de restauration. La conscience :
1. `GET /repos/siteflow-io/monsieurjaipascompris/commits?path=<app>` → liste des commits du fichier ;
2. identifie le commit **précédant** la promotion (le dernier commit dont le message ne commence pas par `[conscience] PROMOTION`) ;
3. `GET /contents/<app>?ref=<sha_precedent>` → récupère le contenu exact ;
4. `PUT /contents/<app>` avec ce contenu, message `[conscience] RESTAURATION D'URGENCE (BUG) — retour à <sha>` ;
5. vérifie le md5 en ligne et confirme à Paul en une ligne.
**Durée : quelques secondes.** Aucune dépendance au conteneur, au disque local ou à la mémoire de la conversation — une conscience neuve peut le faire.

## Registre des points de restauration
*Tenu à jour à CHAQUE promotion : app · md5 promu · md5 antérieur (le point de retour) · date.*

| App | Promotion (md5) | POINT DE RETOUR (md5 antérieur) | Date |
|---|---|---|---|
| `pilotage_debat_s3.html` | `a0c5c93d14b5573d07345df92e4d8057` (retouche M5ter) | commit `9d1307d3` | 17/07 |
| `pilotage_debat_s3.html` | `3973f8f88e5c95270c56acb28f53c882` (responsive + version) | commit `4eb68160` (= a0c5c93d) | 17/07 |
| `correction_dictee.html` | `61b3747f96eec43d073c49384fdb31c9` (M6 v6.0.0) | **`e6f44978c9eaccc7...`** — commit `3202d88030` | 18/07 |
| `correction_dictee.html` | `7e7241fc49a925c4a355f1e0b81586c9` (M6bis+M6ter) | **`61b3747f96eec43d...`** — commit `bbb94b1d6c` | 18/07 |
| `correction_dictee.html` | `2f7f88ba863ebfe77ec900daaeedd867` (M6quater→sexies) | **`7e7241fc49a925c4...`** — commit `bed2bf1741` | 18/07 |
| `correction_dictee.html` | `7b5b5fae760ffda22dde4f5b4d3df21e` (**M6-solde, souche close**) | **`2f7f88ba863ebfe7...`** — commit `7a60e02753` | 18/07 |

## Règle liée : la promotion note toujours son point de retour
Avant toute promotion, la conscience relève le md5 et le sha du fichier en place, et les inscrit dans ce registre. **Une promotion sans point de retour inscrit est interdite.**

## Ce que la restauration NE fait PAS
- Elle ne touche **pas** aux données Firebase (le hub garde son état). Si un bug a écrit des données fautives, c'est un travail distinct, à faire après.
- Elle ne supprime pas le travail : la version bugguée reste dans l'historique Git, disponible pour le diagnostic.
- Elle ne remplace pas le test : elle limite les dégâts quand le test a laissé passer quelque chose.
| `evaluation-qcm.html` | `8637a41b34a1c39639090c9e4c18cdba` (**M7**) | **`712059bdb427b7b0...`** — commit `87f022a3e4` | 18/07 |
| `correction_dictee.html` | `2d0d39417bcb5f7126bb24e0ba0425aa` (M-TEST) | **`9145d8b88629617a...`** — commit `8f45fb2337` | 18/07 |
| `evaluation-qcm.html` | `f35653745b3bf2627bab29db00fcb457` (M-TEST) | **`8637a41b34a1c396...`** — commit `2c28dc7fd5` | 18/07 |
| `pilotage_debat_s3.html` | `405d11bb461d804a93ba383262fab659` (M-TEST) | **`3973f8f88e5c9527...`** — commit `02291d2f50` | 18/07 |

## Point de retour — PROMOTION M8 (index.html), 19/07/2026
- **Fichier** : `index.html` (production)
- **État AVANT promotion** : md5 `5ef03759ef0600907f6e15c90b0e0bb8`, 300 071 o, version sans pastille
- **État APRÈS promotion** : md5 `93db733dc3fb7fde4da027dd8fcf1193`, 327 344 o, `APP_VERSION="8.0.0"`
- **Restauration en cas de BUG** : commits du fichier → contenu au sha du commit PRÉCÉDANT la promotion → PUT (mécanisme standard du registre)
- **Contenu promu** : M8 lot 1 — ① toutes classes du niveau · ② annonces `site/annonces` · ③ alerte règles J+29 · ⑤ brevet éditable `site/config/brevetDates` · ⑥ contrat annonces prouvé · manifeste explicite (`preserver: site, site/annonces, site/config`)

## Point de retour — PROMOTION M8bis (index.html), 19/07/2026
- **Fichier** : `index.html` (production)
- **État AVANT** : md5 `93db733dc3fb7fde4da027dd8fcf1193`, 327 344 o, v8.0.0 (M8 lot 1)
- **État APRÈS** : md5 `f939e60d0d23fbb4b291f460b3277709`, 352 684 o, v8.1.0
- **Restauration si BUG** : commits du fichier → contenu au sha précédant la promotion → PUT
- **Contenu promu** : ④ éditeur de taxonomie (arborescence 5 domaines / 40 familles / 154 notions, création, renommage prof+élève+niveaux+exemple, désactivation réversible ; aucune suppression, aucun id éditable ; bandeau mode test ; `meta/version` incrémentée à chaque écriture)
- **Audit** : parseurs rejoués, diff = 2 lignes remplacées + 460 ajoutées, MJPC_PURGE intact au caractère près, interdits vérifiés au navigateur, trafic réseau surveillé (GET seuls en mode test), captures desktop + 390 px

## Point de retour — PROMOTION M8-MOBILE (index.html), 20/07/2026
- **Fichier** : `index.html` (production)
- **État AVANT** : md5 `f939e60d0d23fbb4b291f460b3277709`, 352 684 o, v8.1.0
- **État APRÈS** : md5 `5b6eb7e1aee516da6e04aeb08745d19e`, 356 815 o, v8.2.0
- **Restauration si BUG** : commits du fichier → contenu au sha précédant la promotion → PUT
- **Contenu promu** : passe tactile de la console — accordéon exclusif (un seul bloc ouvert), cibles ≥ 44 px, pleine largeur sous 480 px, zéro débordement horizontal
- **Audit** : parseurs rejoués · diff 3 retirées/51 ajoutées/5 hunks conforme · **les 5 fonctions `_bloc*` identiques md5 avant/après** · `_sitePut`/`_siteDelete`/`fetch`/`PUT` en nombres identiques · mesures au harnais tactile refaites par la conscience (sommaire 3 195 px → 289 px, 24 cibles sous-norme → 0) · desktop non dégradé (boutons internes inchangés) · zéro écriture hub

## Point de retour — PROMOTION M8-FUSION (index.html), 20/07/2026
- **État AVANT** : md5 `5b6eb7e1aee516da6e04aeb08745d19e`, 356 815 o, v8.2.0
- **État APRÈS** : md5 `bf6ba1e165640f8ae3f51fb13720f0f3`, 358 720 o, v8.3.0
- **Restauration si BUG** : commits du fichier → contenu au sha précédant la promotion → PUT
- **Contenu promu** : UNE SEULE ADMINISTRATION — la console quitte `page-level` et ses 5 blocs deviennent des sections du Panneau prof (Annonces, Brevet, Taxonomie sous Contenu ; Règles en tête de « Configuration & Firebase », zone dangereuse en bas) ; mode test en bascule d'en-tête + point orange sur le bouton flottant, visible panneau fermé ; « Outils prof » → « 📚 Mes applications » sans ses 3 entrées grisées ; Panneau prof en premier bouton ; première media query `tprof` du fichier (768 px)
- **Audit conscience** : parseurs rejoués · **5 fonctions `_bloc*` identiques md5** (déplacées, non réécrites) · seules `_m8Accordeon` et `m8ToggleBloc` disparues (périmètre Q1) · 4 orphelines à zéro · diff 50/85/23 avec les 50 lignes retirées classées une par une · mobile : contenu 98 → 364 px, 0 cible sous-norme, 0 débordement · desktop : sidebar 230 px verticale, boutons 229×41 INCHANGÉS · garde admin vérifiée · point orange vérifié (none → inline-block, ambre) · zéro écriture hub

## Point de retour — PROMOTION M8-IDENTITÉ (index.html), 21/07/2026
- **État AVANT** : md5 `bf6ba1e165640f8ae3f51fb13720f0f3`, 358 720 o, v8.3.0
- **État APRÈS** : md5 `02d84dcbf46bdc352cfe31a239e1fae1`, 363 353 o, v8.4.1
- **Restauration si BUG** : commits du fichier → contenu au sha précédant la promotion → PUT
- **Contenu promu** : le site applique sa propre doctrine — I1 un seul chemin de lecture de la publication (`_visiblePourSession`) · I5 clé unique en slug avec TOLÉRANCE DE LECTURE aux deux sens (aucune migration : les publications existantes restent lisibles) · I2 le site ne liste plus d'objet nominatif (carte unique vers l'app) · I3 portail à trois champs code+nom+prénom, avec bouton « Afficher » du code (demande de Paul, 8.4.1) · I4 `DEV_MODE` SUPPRIMÉ, une seule identité prof, `basculerVue()` et les trois axes · I6 le prof atterrit sur « choisir son niveau », jamais sur le refus élève · liseré ambre à la place du bandeau admin
- **Audit conscience** : parseurs rejoués · **`isPubFor` extraite et exécutée sur 8 cas, 8 OK** (dont les données actuelles de Paul, le sens inverse, la forme `true`, le mixte, une classe accentuée) · **porte prof prouvée au navigateur** (code 1312 + nom et prénom VIDES → session prof) · `DEV_MODE`/`activateAdmin`/classe `'DEV'` à 0 occurrence de code · diff conforme (49/106/36 puis 4/20/5) · élève + Ctrl+Espace = rien · trois cas d'un jour de classe refusés · portail 390 px sans cible sous-norme · bouton code 71×44, champ `password` au chargement · zéro écriture hub

## Point de retour — PROMOTION 8.4.2 (index.html), 21/07/2026
- **État AVANT** : md5 `02d84dcbf46bdc352cfe31a239e1fae1`, 363 353 o, v8.4.1
- **État APRÈS** : md5 `b1deabcc72ca47efee6eec25eaab7586`, 363 510 o, v8.4.2
- **Restauration si BUG** : commits du fichier → contenu au sha précédant la promotion → PUT
- **Contenu promu** : correctif de la vue ENDROIT du professeur — les cinq rendus (`renderChapitres` L2144, `renderChapterCard` L2191/L2193, `renderSeance` L2224, `renderItem` L2242) passent de `isPubFor(x,_eleveClasse())` à `_visiblePourSession(x,level)` ; pour un prof, `_eleveClasse()` vaut « PROF » et filtrait tout (écran vide constaté par Paul en production). Diff total : 6 lignes (5 coutures + pastille).
- **Audit conscience n°3** : diff intégral conforme · double parseur OK · complétude (2 occurrences restantes de `_eleveClasse` : définition + branche élève de `_visiblePourSession`) · **preuve hors navigateur sur données réelles, fonctions extraites verbatim : 5 contextes à 3/3, ancien chemin 0/3 (bug reproduit)** · parcours au navigateur en lecture seule stricte, desktop + 390 px : envers 3 → endroit 3 → envers 3, captures livrées · 4 écritures avortées (manifeste, présence, Apps Script) · pastille 8.4.1→8.4.2.

## Point de retour — PROMOTION 8.4.3 (index.html), 21/07/2026
- **État AVANT** : md5 `b1deabcc72ca47efee6eec25eaab7586`, 363 510 o, v8.4.2
- **État APRÈS** : md5 `c9c3d326d85081a9fce45bfe68158d09`, 363 446 o, v8.4.3
- **Contenu promu** : M8-BADGE (exécutant) + complément (conscience, décision Paul) — bandeau dev retiré, badge = pastille de version permanente `'v'+APP_VERSION` (plus de témoin « ⚡ ADMIN », y compris via `restoreSession` ; « 👁 TEST » conservé, restauré par la couture `loginAsProf`), zone tactile ≥ 44 px.
- **Audits** : exécutant (note à preuves) + conscience n°3 (diff re-mesuré, parseurs, harnais deux tailles, cinq tapes deux sens, bottom-nav en vif, session prof + reload). Écritures : zéro (avortées).

## Point de retour — PROMOTION 8.4.3 (index.html), 21/07/2026
- **État AVANT** : md5 `b1deabcc72ca47efee6eec25eaab7586`, 363 510 o, v8.4.2
- **État APRÈS** : md5 `c9c3d326d85081a9fce45bfe68158d09`, 363 446 o, v8.4.3
- **Contenu promu** : M8-BADGE (exécutant : retrait du bandeau dev, badge = pastille de version dynamique, zone tactile ≥44 px) + complément conscience (décision de Paul : plus de témoin « ⚡ ADMIN », le badge reste « v+APP_VERSION » en session prof ; la couture `loginAsProf` restaure aussi la version après le mode test — témoin « 👁 TEST » intact).
- **Audit** : diff 7 changements (exécutant) + 2 lignes (conscience), double parseur, harnais lecture seule aux deux tailles, cinq tapes deux sens, restoreSession rejouée, zéro écriture partie, captures livrées.

## Points de retour — PROMOTION M10, les jumelles réécriture (21/07/2026)
### reecriture.html
- **AVANT** : md5 `a4a731298a28…` (239 262 o, socle 1.0.0) — **APRÈS** : md5 `c2e41fccc1983b758902fa265d671315` (251 985 o, v2.0.0, socle 1.1.0)
### reecriture_bb4e.html
- **AVANT** : md5 `5798f2527221…` (108 540 o, socle 1.0.0) — **APRÈS** : md5 `ea93996a3c3b824f191e2909cf4bb8aa` (121 250 o, v2.0.0, socle 1.1.0)
- **Restauration si BUG** : commits du fichier → contenu au sha précédant la promotion → PUT (jumelles : restaurer LES DEUX ensemble).
- **Contenu promu** : portail code+nom+prénom (MENEY retiré, faille `?mode=prof` fermée), socle 1.1.0 + shunt MJPC (§8), « Mes réécritures » multi-lots, pastille 2.0.0 + panneau « ? » (annonces lecture seule), passe tactile ≤480 px, bloc diagnostic, textes élève (5 coutures conscience sur signalement Paul : clôture sur l'effort, attente sans acteur, « ton prof » éradiqué casse-insensible, 1re personne). Moteur de pièges 6/6 md5-intact.

## Point de retour — PROMOTION RÉPARATION bb4e (reecriture_bb4e.html), 29/07/2026
- **Fichier** : `reecriture_bb4e.html` (production)
- **État AVANT** : md5 `4001e58d0f2f86bd0b3da228fb594a8c`, **108 706 o**, blob sha `bea2a85755591c846e56da1f22f2f1a38d794950`, socle 1.0.0, aucune pastille — **c'est l'état FAUTIF** : la version du 15/07 augmentée des trois métas du 22/07, la promotion M10 ayant été écrasée par le micro `028bac17ff`. Re-téléchargé et vérifié à l'instant du PUT.
- **État APRÈS** : md5 `fe2492c69e5f1c5051fb03bf4f44db86`, **121 416 o**, v2.0.1, socle 1.1.0
- **⚠ PARTICULARITÉ — LIRE AVANT DE RESTAURER** : cette promotion est une **RESTAURATION**, pas une évolution. Le « commit précédent » du mécanisme standard ramènerait donc **à l'état fautif**, pas à un état sain. En cas de `BUG` sur cette livraison, la cible de restauration n'est PAS le commit précédent mais **le commit `094b0c8d1e` (M10 promue, md5 `ea93996a3c3b824f191e2909cf4bb8aa`, 121 250 o)** — la seule version antérieure qui porte le portail à code. Restaurer l'état fautif rouvrirait l'accès des copies d'un élève à un autre.
- **Base dont part la livraison (déclaration exigée par la règle gravée le 29/07)** : commit `094b0c8d1e`, md5 `ea93996a3c3b824f191e2909cf4bb8aa`, vérifié avant édition. **Exception assumée et motivée à la règle « la base doit égaler l'état de production »** : la base est délibérément différente de la production, puisque la production est précisément ce que l'on répare. C'est le seul cas où l'écart est voulu, et il se déclare.
- **Contenu promu** : restauration intégrale de la livraison M10 (portail code + nom + prénom sur `/codes`, socle MJPC-CORE 1.1.0 + shunt §8, pastille de version, bloc diagnostic, passe tactile ≤480 px, textes élève corrigés, faille `?mode=prof` fermée) **plus** les trois métas anti-cache du 22/07, **plus** la pastille portée de 2.0.0 à 2.0.1.
- **Audit** : diff contre M10 promue = **4 lignes exactement** (3 métas + pastille) · ancres uniques vérifiées avant substitution, exemple commenté du socle écarté · double parseur `node --check` 1/1 et `acorn` ES2020 1/1 · relevé de conformité avant/après (portail 0→3, `lireSessionMJPC` 0→1, `MJPC_CORE_VERSION` 1.0.0→1.1.0, pastille 0→1, diagnostic 0→3) · trois faux positifs levés par lecture des lignes et non par supposition · production re-téléchargée à l'instant du PUT et trouvée inchangée depuis l'audit.

## Point de retour — PROMOTION SITE-COURS-1 (index.html), 29/07/2026
- **Fichier** : `index.html` (production)
- **État AVANT** : md5 `dcbc4afe4d31a0b56bbd11c80cb045fb`, **395 148 o**, blob sha `31769c4fb76a49c102ac8384ce3208ad197baffe`, version **8.5.2**. Re-téléchargé et vérifié inchangé à l'instant du PUT.
- **État APRÈS** : md5 `317f0a1205267b07951f7c02ed81c299`, **490 755 o**, version **8.6.0** (date 2026-07-29).
- **Base dont part la livraison (déclaration exigée par la règle du 29/07)** : `dcbc4afe4d31a0b56bbd11c80cb045fb` — **identique à l'état de production**, comme la règle l'exige. L'exécutant a re-téléchargé sa base juste avant d'éditer et l'a déclarée au rapport.
- **Contenu promu** : l'ATELIER DE COMPOSITION (SITE-COURS-1) — schéma déclaratif de **121 composantes** (114 codées, 7 places réservées), cases en langage clair groupées en trois, champs édités en direct, aperçu navigable qui EST le document imprimé (`srcdoc` → `contentWindow.print()`), charte sobre du document en dur, impression A4 et demi-A4, produit « Fiche de séance », rattachement niveau/classe/élève/lot, grisage qui conseille sans verrouiller, persistance à `site/atelier/documents/<id>`, brouillon local et reprise, quatre gestes de base avec corbeille, mode test par routage `_site*`.
- **Restauration en cas de `BUG`** : mécanisme standard — le commit précédent ramène à l'état 8.5.2 ci-dessus, qui est un état sain (contrairement au cas bb4e). Aucune particularité.
- **Audit de la conscience (tout recalculé, rien repris de la parole de l'exécutant)** : diff 7 hunks / 1 355 ajoutées / 4 retirées, les 4 retirées étant exactement les 4 remplacements déclarés · **406 fonctions communes, 0 modifiée, 0 supprimée**, 71 ajoutées · double parseur 1/1 et 1/1 · `<script>` 1/1 inchangé, `<style>` 4→5 ouvrantes et fermantes · schéma **121 entrées uniques, 0 doublon**, familles A→K, natures `donnee`/`rendu`/`structure` · table de couverture **121 testées ↔ 121 déclarées**, 0 déclarée non testée, 0 testée non déclarée, 114 OK / 0 échec · script de couverture contrôlé NON complaisant (exige apparition ET disparition ET HTML différents, s'arrête si la tranche extraite ne correspond pas aux sources) · journal réseau : **11 écritures, toutes dans `site/atelier/documents/*` ou `corbeille/*`**, ordre PUT corbeille AVANT DELETE prouvé, **page élève = 4 requêtes, aucune vers `site/atelier`** · 35/35 verdicts verts · 6 captures présentes au sas.
- **Non testé, déclaré par l'exécutant** : dialogue d'impression réel (non éprouvable en headless), clic de restauration depuis l'écran Corbeille (format d'archive prouvé conforme, geste non joué), rendu visuel des 114 composantes une à une, polices Google en ligne.

## Point de retour — MICRO d'après SITE-COURS-1 (index.html), 29/07/2026
- **État AVANT** : md5 `317f0a1205267b07951f7c02ed81c299`, **490 755 o**, blob sha `b337a2ce605d0d7d1adfea25fe2d87980e2da108`, version **8.6.0**. Re-téléchargé depuis la production juste avant édition (règle du 29/07) et déclaré ici comme base.
- **État APRÈS** : md5 `ba698e667635164fb855282e844eb2fc`, **492213 o**, version **8.6.1**.
- **Contenu** : ① les 4 reformulations de textes élève validées par Paul (« Temps majoré » → « Tu as plus de temps », « Ce qu'on te demande vraiment » → « Autrement dit », « Pour t'alléger » → « Tu peux faire seulement », « Sous tes yeux » → « Pour t'aider ») ; ② l'**accord singulier/pluriel** des libellés selon le nombre réel (Paul : « au pluriel quand il y en a plusieurs, au singulier quand il n'y en a qu'un ») sur 6 libellés, par une table unique `AT_ACCORDS` + `atAccord()` + `atCompterLignes()` — pour accorder un libellé de plus, on ajoute une ligne et rien d'autre ; « Prérequis » reste invariable, « Domaine du socle » et « Attendus de fin de cycle » gardent leur vocabulaire institutionnel exact sur décision de Paul ; ③ **`textes/seanceSansDoc` → `/site/textes/seanceSansDoc`** (2 occurrences) : le chemin sans slash initial construisait une URL à hôte invalide, le `catch` renvoyait null en silence, et **le champ éditable demandé par Paul en M12 n'a jamais fonctionné depuis le 22/07**.
- **Audit** : diff 12 hunks / 29 ajoutées / **9 retirées, chacune justifiée une par une** (2 chemins, 1 pastille, 4 intitulés, 2 rendus de mots-clés) · ancres assertées uniques avant chaque substitution · double parseur `node --check` 1/1 et `acorn` 1/1 · invariants : **477 fonctions communes, 3 modifiées et ce sont exactement les 3 attendues** (`_chargerTextesSite`, `_editerTexteSeanceSansDoc` pour le chemin, `atelierDocumentHTML` pour les mots-clés), 0 supprimée, 2 ajoutées (`atAccord`, `atCompterLignes`) — *les deux formes `ATELIER_FORMES.ancrage_ligne/liste` sont anonymes assignées, donc hors du détecteur `function NOM(` : elles sont modifiées et c'était l'objet du lot* · **banc d'exécution réel : 15/15** (accords testés sur champ libre avec lignes vides, sur listes, et invariabilité de « Prérequis » vérifiée).
- **Restauration en cas de `BUG`** : mécanisme standard, le commit précédent ramène à la 8.6.0 saine.

## Point de retour — PROMOTION M-ÉCHECS-1 (index.html + mjpc-core.js), 30/07/2026
- **`index.html` AVANT** : md5 `ba698e667635164fb855282e844eb2fc`, **492 213 o**, blob sha `dc280b26154ca9ea0bb1b257f11e67d67fb925e5`, v**8.6.1**. Re-téléchargé et vérifié inchangé à l'instant du PUT.
- **`index.html` APRÈS** : md5 `8122689e00c615728ab77a71b045d387`, **508 257 o**, v**8.7.1**, socle MJPC-CORE **1.2.0**.
- **`mjpc-core.js` APRÈS** : md5 `04b3d303fe613434ce2c3e0c71657c32`, 13 496 o, 1.2.0 — **verbatim identique à l'embarqué** (16 fonctions comparées une à une, aucun écart d'octet).
- **Base dont part la livraison** : `ba698e667635164fb855282e844eb2fc` — identique à l'état de production, comme la règle du 29/07 l'exige.
- **Contenu promu** : le mécanisme des TROIS ISSUES d'une écriture (acceptée / refusée / panne) au socle, et son application à 52 écritures du site. `_sitePut`/`_siteDelete` ne répondent plus « c'est fait » sur un refus HTTP. `_applyPubCascade` n'affiche plus la publication avant d'avoir tous les verdicts et nomme les échecs chemin par chemin. `applyLinkChanges` ne met plus l'état local à jour sur refus. Bandeau unique anti-rafale avec « Tout réessayer ». `_corbeillePuis` distingue enfin refus et panne. Mode test inchangé, aucune fausse alerte.
- **⚠ POURQUOI 8.7.1 ET NON 8.7.0** : la livraison auditée au sas portait 8.7.0 ; la conscience y a ajouté une correction avant promotion (voir ci-dessous). **Deux fichiers différents ne doivent jamais porter le même numéro** — c'est la leçon directe de l'écrasement `reecriture_bb4e`. Le 8.7.0 n'est jamais allé en production et n'y ira jamais.
- **CORRECTION DE LA CONSCIENCE, sur ordre de Paul (« tu la fais mais tu fais attention »)** : `mjpcEcrireRest` était écrit `fetch().then(A).catch(B)` avec le callback appelé DANS A. **Défaut prouvé par exécution** : serveur répondant **200**, un bug quelconque en aval du callback était attrapé par le `.catch` destiné aux pannes réseau, qui rappelait le callback avec un verdict **PANNE** — callback joué **deux fois** et verdict **faux**, le bug lui-même avalé en silence. Même famille que le défaut réparé par ce morceau : une erreur qui se déguise en une autre. **Corrigé** en `.then(onOk, onErr).then(cb)` : le second argument de `.then` ne capture que le rejet du fetch, jamais le premier handler. **Preuve avant/après** : AVANT 2 appels (« acceptee » puis « panne »), verdict falsifié, bug invisible ; APRÈS **1 appel** (« acceptee »), verdict juste, bug visible en console. Appliquée aux DEUX fichiers pour que le canon reste identique à l'embarqué.
- **Audit du morceau par la conscience (tout recalculé)** : diff exécutant 49 hunks / 107− / **323+** *(son rapport annonçait 340+ — écart de comptage relevé, confirmé par `diff`, `diff -u` et `git diff --numstat`)* · invariants **479 communes, 43 modifiées et ce sont exactement les 43 du périmètre**, 0 supprimée · double parseur 1/1 et 1/1 sur les deux fichiers · `<style>` 6/6 · canon verbatim ✓ · **banc en mémoire de la conscience : 22/22** (trois issues exécutées, rétrocompatibilité des 12 appelants, mode test sans réseau ni fausse alerte, cascade qui attend ses verdicts et nomme ses échecs, corbeille refus ≠ panne avec option sûre, LIER qui ne modifie plus l'état local sur refus, zéro jargon, principe cardinal respecté) · diff de la correction de conscience : 3 hunks, **une seule fonction modifiée**, 0 supprimée, 0 ajoutée.
- **Vérification décisive du circuit de l'exécutant** : son journal montrait 8 écritures « ok » sur des chemins d'apparence réelle. **Contrôlé aux données du hub : RIEN n'est parti** — `site/3e/chapitres/1/title` toujours « Poésie et peinture au XIXe », `eleves_index/martin_lucas` `null`, `/eleves` 1 entrée, `/presence` 2, `/site/annonces` 1, `classes/3e_temoin` inexistant. Le « ok » était le verdict de son interception, pas une émission.
- **NON COUVERT, déclaré sans fard** : les clics réels sur la barre admin (le navigateur headless ne tient pas ce fichier de 507 Ko dans les conteneurs — frame détachée, trois configurations essayées, page triviale OK ; **trou laissé au test de Paul**) · un succès réel contre le hub (mandats de l'exécutant ET de la conscience en lecture seule : c'est structurellement le test de Paul) · le rendu visuel et le mobile 390 px (mesurés et capturés par l'exécutant, non rejoués par la conscience).
- **Restauration en cas de `BUG`** : mécanisme standard, le commit précédent ramène à la 8.6.1 saine. `mjpc-core.js` existait déjà en production : son commit précédent le ramène à 1.1.0.

## Point de retour — PROMOTION M-SÉCU-1 (index.html + mjpc-core.js), 31/07/2026
- **`index.html` AVANT** : md5 `8122689e00c615728ab77a71b045d387`, **508 257 o**, blob sha `02aa6acdb0ab1bf09ca056cac1bdd1e8bf107aa7`, v**8.7.1**. Re-téléchargé et vérifié inchangé à l'instant du PUT.
- **`index.html` APRÈS** : md5 `ecb3b356b793b3d9ab7490b1a86ff967`, **531 732 o**, v**8.8.0**, socle **1.3.0**.
- **`mjpc-core.js` AVANT** : md5 `04b3d303fe613434ce2c3e0c71657c32`, 13 496 o, blob sha `289e6628c289bdff803ff6de88491381818c43c2`, 1.2.0. **APRÈS** : md5 `f5e81602f8aee1ca17a9721546066efa`, 17 620 o, **1.3.0** — verbatim identique à l'embarqué (26 fonctions comparées, aucun écart d'octet).
- **Base dont part la livraison** : `8122689e00c615728ab77a71b045d387` — identique à l'état de production.
- **Contenu promu** : le COFFRE. §11 du socle (dérivation PBKDF2 310 000, AES-GCM, empreinte PBKDF2 100 000 à sel par entrée). Clé prof saisie **une fois par appareil**, mémorisée en `localStorage`, **jamais envoyée**, validée par **canari** AES-GCM en `/site/config/coffreCanari`. Migration non destructive par PATCH par élève : `chiffre` + `sel` + `empreinte` ajoutés, **le clair est conservé**. Affichage déchiffré prioritaire, repli clair. Sans clé : `✻✻✻✻` et gestes de génération, régénération et impression bloqués avec explication. Fiches d'appareils avec avertissement « poste partagé ». Porte prof : `PROF_CODES` continue **et** la clé ouvre. Empreintes des codes prof posées en `/site/config/profEmpreintes` pour M-SÉCU-2. Bloc DIAGNOSTIC enrichi.
- **⚠ CE MORCEAU NE PROTÈGE ENCORE RIEN** : le clair reste, côté élèves et côté professeur. **La protection ne prend effet qu'à M-SÉCU-3**, au retrait du clair. Ce qui est installé ici, c'est le coffre et sa clé.
- **Audit de la conscience — tout recalculé** : diff **13 hunks, 12− / 371+** au chiffre près · invariants **493 communes, 7 modifiées et ce sont exactement les 7 du périmètre** (`_putCode`, `_genererCodesClasse`, `_regenCodeEleve`, `_resetAllCodesClasse`, `_printCodesClasse`, `_profSectionEleves`, `doLogin`), 0 supprimée, 32 ajoutées · canon ↔ embarqué **26 fonctions, aucun écart** · double parseur sur les DEUX fichiers · **29/29 verdicts au banc en mémoire**, aucun non-vert.
- **PREUVE DÉCISIVE, REFAITE PAR LA CONSCIENCE** : le secret de test du banc (`ma phrase de coffre 2026`) cherché dans les **134 requêtes** du journal sous quatre formes — clair, base64, encodé URL, échappé JSON : **absent partout**. Tout est parti vers `hub.example`, jamais le vrai hub, avec des élèves fictifs dérivés des six canoniques (`bernard_emma_t_001`…).
- **Captures vérifiées visuellement** : écran verrouillé (`✻✻✻✻`, encart de saisie, trois boutons grisés, avertissement « poste partagé » en clair) · après rechargement, codes revenus **sans ressaisie**.
- **Écart relevé** : le rapport annonce 522 914 o pour un fichier qui en fait **531 732** — chiffre mesuré avant le dernier correctif de l'exécutant (l'encart déplacé en tête, qui était après le `return` « aucune classe active » et donc invisible sans classe). Le md5 fait foi ; un rapport à preuves ne doit pas porter un chiffre périmé.
- **Honnêteté de l'exécutant à consigner** : validation à 13,2 s au rechargement, **instruite au lieu d'être écartée**, prouvée artefact de la latence d'interception puppeteer (1,9 s hors navigation, < 0,6 s au banc) — et c'est cette instruction qui a fait trouver le défaut de l'encart.
- **NON COUVERT, déclaré** : hub réel (aucune écriture de production) · clics humains réels (gestes joués par `evaluate`) · impression papier · **Chrome Windows réel — recette de Paul nécessaire**.
- **Restauration en cas de `BUG`** : mécanisme standard sur les DEUX fichiers ; le commit précédent ramène `index.html` à 8.7.1 et `mjpc-core.js` à 1.2.0, deux états sains.

## Point de retour — MICRO ÉTANCHÉITÉ + PORTE DE RÉÉCRITURE (index.html), 31/07/2026
- **AVANT** : md5 `ecb3b356b793b3d9ab7490b1a86ff967`, **531 732 o**, blob sha `6ea7d58c22fc9121364a6bdf331f715f8da94930`, v**8.8.0**. Re-téléchargé depuis la production juste avant édition.
- **APRÈS** : md5 `faa6e9500d8a5fcafb301d9f498ebb78`, **534107 o**, v**8.8.1**.
- **DÉCLENCHEUR — recette réelle de Paul** : connecté en navigation privée comme une élève de 3e (AUDEBERT Élise), il visite le niveau 4e et **les outils qu'il avait dépubliés en 3e réapparaissent**. Sa décision de professeur se contournait en un clic.
- **CONTENU** : ① `_niveauOutils(level)` — pour un élève, le niveau de SES outils est le sien, jamais le niveau consulté ; pour le professeur, rien ne change. ② les onglets d'outils et ③ le bloc « Brevet blanc 4e » y passent. ④ **la porte « Mes réécritures »** vers `reecriture.html?mode=eleve`. ⑤ le texte de l'outil non branché devient élève-compatible.
- **CE QUI ÉTAIT DÉJÀ ÉTANCHE, vérifié avant de coder** : les CHAPITRES et SÉANCES ne fuyaient pas — `_visiblePourSession` filtre un élève sur SA CLASSE, pas sur le niveau affiché. *La conscience avait d'abord affirmé le contraire ; lecture faite, c'était faux.* Seuls les onglets et les extras, publiés PAR NIVEAU, fuyaient.
- **CE QUE LA DÉCISION DE PAUL PRÉSERVE** : l'élève navigue partout — le spiralaire l'exige — mais il retombe sur ses propres outils. Son argument : *« au lieu de croire qu'il pourra accéder à un outil de 4e, il se retrouvera juste dans le même outil »*.
- **`bb4e` se résorbe sans ligne supplémentaire** : le bloc était déjà conditionné par `if(level==='4e')` ; `level` devenant le niveau de l'élève, la condition tombe en 3e.
- **LA PORTE DE RÉÉCRITURE — cause de l'oubli, trouvée à l'historique** : la dictée, le QCM et l'analyse logique ont chacune leur porte (`openMesDictees`, `openEvalConn`, `openAnalyse`) ; la réécriture n'avait que celle de la variante 4e (`openBB4E`). **M8-IDENTITÉ (21/07, v8.4.0) formulait son point I2 comme un RETRAIT** — « le site ne liste plus d'objet nominatif » — et les portes en furent la CONSÉQUENCE, jamais l'objet. **La réécriture n'ayant aucune liste nominative à retirer, elle est passée à travers.** L'audit de l'époque a vérifié ce que I2 annonçait, il n'a pas demandé si l'essentiel manquait.
- **RÈGLE POSÉE PAR PAUL LE 31/07** : *« il ne faut pas qu'il y ait une méthode pour un outil, une autre pour un autre, sinon je ne saurai jamais comment afficher un travail d'élève. »* **UN SEUL MODÈLE : ① le travail rangé, listé par chapitre depuis les items liés · ② la porte de l'outil, bloc fixe ouvrant l'app en mode élève.**
- **Audit** : diff **6 hunks, 18 ajoutées, 4 retirées**, chacune justifiée · ancres assertées uniques · double parseur 1/1 et 1/1 · invariants **525 communes, 3 modifiées et ce sont les 3 attendues** (`applyPublished`, `showReecritureList`, `showEmptyTab`), 0 supprimée, 2 ajoutées (`_niveauOutils`, `openMesReecritures`) · **banc d'exécution 7/7** : élève de 3e consultant la 4e, la 3e, la 6e ; niveau avec majuscule et espace ; professeur qui voit le niveau consulté ; élève sans niveau et visiteur non identifié qui se replient sans casser.
- **TEXTES ÉLÈVE SOUMIS À PAUL, non validés** : « Mes réécritures — Identifie-toi et retrouve ton travail » · « Cet outil ouvrira plus tard. » (élève) et « Cet outil n'est pas encore branché. Il faut le brancher avant de le publier. » (professeur). *L'ancien texte disait à l'élève « Tu dois d'abord le créer avec Claude » — message destiné au professeur, affiché à des collégiens, et mettant le professeur en position d'inaccompli devant eux (principe cardinal).*
- **Restauration en cas de `BUG`** : mécanisme standard, le commit précédent ramène à la 8.8.0 saine.
