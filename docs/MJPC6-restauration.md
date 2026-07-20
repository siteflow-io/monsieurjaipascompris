# « BUG » — LA RESTAURATION D'URGENCE
*Convention instituée par Paul le 18/07/2026. Mécanisme TESTÉ à blanc le jour même.*

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
