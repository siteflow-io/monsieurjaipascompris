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

## Règle liée : la promotion note toujours son point de retour
Avant toute promotion, la conscience relève le md5 et le sha du fichier en place, et les inscrit dans ce registre. **Une promotion sans point de retour inscrit est interdite.**

## Ce que la restauration NE fait PAS
- Elle ne touche **pas** aux données Firebase (le hub garde son état). Si un bug a écrit des données fautives, c'est un travail distinct, à faire après.
- Elle ne supprime pas le travail : la version bugguée reste dans l'historique Git, disponible pour le diagnostic.
- Elle ne remplace pas le test : elle limite les dégâts quand le test a laissé passer quelque chose.
