# RAPPORT DE TESTS AUTOMATISÉS — M-TEST (conscience n°2, 19/07/2026)
> Tests joués au navigateur (Playwright, Chromium) sur les **fichiers de production** (md5 vérifiés) et le **hub réel**. Harnais durci après incident (voir §4). Ce rapport dit ce qui est prouvé, ce qui ne l'est pas, et ce qui reste à Paul.

## 0. Conditions de test — à connaître pour lire ce qui suit
Les CDN (unpkg, gstatic, cdnjs, Google Fonts) sont **bloqués** dans mon conteneur : les apps chargées telles quelles rendent une page BLANCHE. J'ai donc vendorisé React 17/18, Firebase 8.10.1 et JSZip depuis npm et créé des copies `*.test.html` où **seuls les `src` externes sont réécrits en chemins locaux** — le code applicatif est intact (md5 des originaux vérifiés avant : `2d0d3941…` dictée · `f3565374…` QCM · `405d11bb…` débat).
**Conséquence à retenir** : les **vraies polices** ne sont pas chargées (repli). Tout jugement typographique m'est interdit.

## 1. ① CORRECTION DE DICTÉE — 9 étapes jouées, 9 ✔
**BLOC A (prof)**
- A0 entrée prof (code 3141) **✔**
- A1 bac à sable — bouton `🔄 Regénérer` **✔** (il existait déjà)
- A2 `✓ Vérifier les 4 états` **✔** — les quatre libellés attendus affichés : `Terminée` · `À faire` · `Tu étais absent(e)` · `Pas encore corrigée`
- A3 `✏️ Tester l'éditeur de textes` **✔** — bascule effectuée, message rendu
- A4 `🧹 Tester la corbeille` **✔** — **export JSON réellement téléchargé** : `dictee_dictee_test_en_attente_2026-07-19.json`
- A5 `🔄 Regénérer` **✔** — bac à sable reconstruit
- A' `🧹 Tout effacer` **✔** — vérifié AU HUB : classe `_test_correction_dictee` effacée, **0 code fictif restant** (les 6 codes ont bien été nettoyés)

**BLOC B (élève, par le VRAI portail, viewport 390 px)** — j'ai lu les codes du bac à sable au hub et je suis passé par l'écran de connexion réel, pas par un raccourci :
- Alice (2581) → **✔ `Terminée`**
- Sacha (8137) → **✔ `Tu étais absent(e)`**
- Chloé (7204) → **✔ `Pas encore corrigée`**
- **Refus code faux (0000 / DURAND Alice)** → **✔ refusé**, message élève clair
- **Principe cardinal : ✔ AUCUNE mise en cause du professeur** dans les trois vues (recherche automatique de « professeur n… » : zéro occurrence)
- *Constat annexe* : l'ordre nom/prénom **inversé** est refusé (« Aucun élève à ce nom »), la **casse** est tolérée (minuscules acceptées). À confirmer comme voulu.

## 2. ③ QCM — la preuve P2 : 6 étapes ✔, 1 ÉCART TROUVÉ
- A0 entrée prof **✔** · A1 `🧪 Mode test` **✔**
- A2 `⚖️ Vérifier que les notes n'ont pas bougé` avant clôture → **✔** « Session : en_cours · énoncé **non conservé** »
- A3 `🔒 Clôturer (chemin réel)` → **✔** « Session clôturée » et bascule en **énoncé conservé**
- A5 `✏️ Modifier l'éval après coup` → **✔** « Évaluation de test modifiée », **version 2**
- **PREUVE P2 ÉTABLIE AU HUB (le juge de paix)** : session `_sess_test_…` état `terminee`, `evalSnapshot` **version 1** figé à 4 questions, tandis que l'évaluation vivante `_eval_test` est passée en **version 2**. **Le snapshot diverge de l'éval modifiée : les notes du jour sont protégées.** C'est la démonstration que P2 tient, faite sur les données et non sur un message d'écran.
- A' `🗑️ Sortir et purger` **✔** — vérifié au hub : session, évaluation ET classe `_test_evaluation-qcm` effacées.

### ✘ ÉCART À INSTRUIRE (défaut du BANC DE TEST, pas de P2)
Après `🔒 Clôturer (chemin réel)`, le bouton `⚖️ Vérifier que les notes n'ont pas bougé` répond **« Aucune session de test en cours »** au lieu d'afficher la comparaison chiffrée attendue par le protocole (« Le jour de l'évaluation : X · avec l'énoncé actuel : Y »). Les étapes 4 et 6 du protocole — *les deux étapes qui montrent la preuve à l'écran* — ne restituent donc rien.
**Diagnostic** : la clôture semble libérer la référence de session côté mode test, si bien que le comparateur ne retrouve plus la session à comparer. **P2 fonctionne** (prouvé au hub ci-dessus) ; **c'est sa DÉMONSTRATION qui est muette**. À corriger dans une passe M-TEST-bis : le comparateur doit garder l'id de la dernière session close.

## 3. ② DÉBAT — NON TESTÉ
Non joué faute de temps après l'incident du §4. **Reste entièrement à faire** (T-5, fin de cours, les deux refus, injection de documents).

## 4. INCIDENT — clic non voulu en production (autodéclaré)
En cherchant le bouton de purge du bac à sable **par mot-clé** (« purg »), mon harnais a cliqué **`🧹 Purger doublons (toutes dictées)`** — fonction de maintenance GLOBALE parcourant les 6 dictées réelles (147 entrées d'autocorrection) — avec un `dialog.accept()` **global** qui a confirmé seul.
**Dégâts** : nuls à faibles. La fonction dédoublonne les essais et recalcule le score ; sans doublon elle réécrit à l'identique. **Aucune copie, aucune correction perdue.**
**Faute** : action réelle non demandée sur la production. Signalée immédiatement à Paul, erreur ⑦ du registre, **règle « harnais en lecture seule stricte » gravée au plan** (libellé exact vérifié dans le code · jamais de `dialog.accept()` global · effets confinés aux nœuds `_test_` · en cas de doute on lit le code, on ne clique pas pour voir). Arbitrage de Paul : les tests continuent en lecture seule stricte — appliqué dès le QCM (dialogues journalisés et refusés par défaut, acceptation nominative pour les seules purges de test).

## 5. DÉCLARATION DE COUVERTURE — ce que je NE PEUX PAS tester
- **Le temps réel** : un seul navigateur, pas de second appareil — présence, propagation, votes simultanés : **invisibles**.
- **Les vraies polices, le vrai Chrome Android, le clavier mobile physique, le pincement-zoom** : hors de portée (CDN bloqués, pas d'appareil).
- **L'audio** (mode Rapide de la dictée) : aucun rendu sonore vérifiable.
- **Le jugement pédagogique** : qu'un message soit *compréhensible par un élève de 5e* ne se teste pas mécaniquement.
- **Le débat** entier (§3).

## 6. CE QUI RESTE À PAUL — dans l'ordre d'importance
1. **Le protocole ② DÉBAT en entier** (~4 min) — rien n'en est prouvé.
2. **Le bloc C du QCM à deux appareils** (téléphone au portail pendant que l'ordinateur pilote) — le seul juge du temps réel.
3. **L'audio du mode Rapide** de la dictée (A3 du protocole M6) et le **clavier mobile**.
4. **Le jugement des messages** côté élève : sont-ils clairs pour un 5e ? (les captures sont jointes, mais l'œil du professeur tranche).
5. **M8 promu** : annonce inaugurale + date du brevet 3e, sur le site en production.
