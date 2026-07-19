# LE TEST DE PAUL — ce que le harnais ne peut pas voir
> **VERSION À COMPLÉTER** — refondue le 18/07 après le premier essai réel : blocs séparés par RÔLE (on ne saute plus du prof à l'élève), et **chaque étape dit CE QU'ON DEVRAIT VOIR**.

## QUAND CE TEST A LIEU — toujours APRÈS la promotion
Le sas n'est pas servi comme page web : **Paul ne peut tester que ce qui est en production.** L'ordre est donc : audit de la conscience → « promeus » → promotion → **ce test** → `BUG` si quelque chose cloche. Le test n'est jamais un prérequis à la promotion ; il est le contrôle qui suit, et la convention `BUG` en est le filet.

## Les trois règles du protocole
1. **Un bloc = un rôle = un appareil.** On ne mélange jamais prof et élève dans le même bloc : deux connexions, deux appareils, des allers-retours intenables.
2. **Chaque étape énonce l'ATTENDU VISUEL** — ce qui doit apparaître à l'écran. Sans attendu écrit, un test ne prouve rien : on ne sait pas si l'absence de réaction est un bug ou le comportement normal.
3. **Retour minimal** : `✔` ou `✘ + trois mots`. Exemple : `A3✘ audio muet`.

## Avant tout — le contrôle de version (30 s)
Ouvrir l'app avec `?v=N` (N incrémenté à chaque essai).
**ON DEVRAIT VOIR** : la pastille de version en haut ou en bas de l'écran prof, affichant le numéro attendu (ex. `v6.0.0`).
**SI ON NE LE VOIT PAS** : c'est le cache — incrémenter `?v=`. Si le numéro reste l'ancien après trois essais : ARRÊT, on teste l'ancienne version, prévenir Claude.

---

# PROTOCOLE M6 — LA SOUCHE (correction_dictee v6.0.0)

## BLOC A — CÔTÉ PROF, sur ordinateur (5 min)
*Un seul appareil, une seule session, du début à la fin du bloc.*

**A1 · Entrer dans une dictée.** Accès professeur → code → choisir une dictée existante → « Ouvrir → ».
**ON DEVRAIT VOIR** : sous le titre de la dictée, une barre de navigation à **trois groupes** — `Pilotage · Données · Réglages` + un bouton `?` — et l'écran s'ouvre **directement sur Correction** (pas sur un menu). Sous Pilotage, trois sous-onglets : `Préparation · Correction · ⚡ Rapide(⇧R)`.
**SI DIFFÉRENT** : noter quel groupe manque ou sur quel écran ça s'ouvre.

**A2 · Préparation.** Cliquer sur `Préparation`.
**ON DEVRAIT VOIR** : le formulaire d'édition de la dictée (titre, niveau, classe, texte, note sur), **pré-rempli avec les valeurs actuelles** — le même formulaire que le ✏️ de l'accueil, au même endroit dans la page.

**A3 · Mode Rapide et audio.** Revenir sur Correction, presser `⇧R` (Maj+R).
**ON DEVRAIT VOIR** : bascule immédiate sur l'écran Rapide (mot à corriger en grand). **ON DEVRAIT ENTENDRE** : le mot prononcé à voix haute. Corriger deux mots.
**ON DEVRAIT VOIR ENSUITE** : les deux corrections apparaissent dans la copie de l'élève (retour sur Correction pour vérifier).

**A4 · Réglages.** Onglet `Réglages`.
**ON DEVRAIT VOIR** : au moins la section « Lecture audio » avec son interrupteur et son explication (« Utilisée par le mode Rapide pour dire le mot à corriger »). Couper l'audio → repasser en Rapide → **ON NE DEVRAIT PLUS RIEN ENTENDRE**. Recharger la page (F5) → retourner aux Réglages → **l'interrupteur doit être resté sur OFF**.

**A5 · Données.** Onglet `Données`.
**ON DEVRAIT VOIR** : cinq sous-onglets — `Bilan · 📄 Copies · Fiches élèves · Suivi 🟢 · 🎯 Exercices`. Ouvrir `Suivi 🟢`.
**ON DEVRAIT VOIR** : l'AVANCEMENT des élèves (qui a fait quoi, où il en est). ⚠️ **On ne verra PAS qui est connecté en ce moment** : la souche n'a pas de présence temps réel (dette ouverte, point 22 de la grille). C'est normal, ce n'est pas un bug.

**A6 · L'aide.** Bouton `?`.
**ON DEVRAIT VOIR** : un panneau « Aide » expliquant les trois temps du travail (Pilotage / Données / Réglages), avec une croix pour fermer. S'il y a une zone d'annonces, elle est vide pour l'instant (le canal naît en M8) — **elle ne doit PAS afficher d'erreur**.

**A7 · Le lien nominatif — récupération.** Données → `📄 Copies` → repérer le lien de copie d'un élève (forme `...correction_dictee.html?dictee=<id>&eleveKey=<clé>`). Le copier.
**SI AUCUN LIEN N'EST VISIBLE** : le noter — cela signifierait que la génération du lien famille a disparu, et c'est à instruire.

## BLOC B — CÔTÉ ÉLÈVE, sur téléphone (4 min)
*Autre appareil, ou même appareil en navigation privée. Ne pas revenir au prof pendant ce bloc.*

**B1 · Connexion.** Ouvrir l'app → `🎓 Mode élève`.
**ON DEVRAIT VOIR** : trois champs — `Mon code (4 chiffres)`, `Nom`, `Prénom` — et la phrase « Ton code est le même que sur le site MJPC ». **Il ne doit PAS y avoir de liste de noms où se choisir.**
Saisir le code, le nom et le prénom d'un vrai élève → `Entrer`.
**ON DEVRAIT VOIR** : l'entrée est acceptée, on arrive sur l'espace de l'élève.

**B2 · Le refus.** Se déconnecter, recommencer avec un **code faux** (ex. 0000) et le même nom.
**ON DEVRAIT VOIR** : un refus **avec un message clair et compréhensible par un élève** — pas un message technique, pas un écran figé.

**B3 · « Mes dictées ».** Une fois connecté.
**ON DEVRAIT VOIR** : la liste de ses dictées (titre, classe), **même s'il n'y en a qu'une** — jamais une ouverture directe sans liste. S'il n'a aucune copie publiée : un message d'attente clair, **pas une page vide ni une erreur**.
Ouvrir une dictée → **ON DEVRAIT VOIR** sa copie avec ses erreurs et les commentaires.

**B4 · Le lien nominatif — le test qui compte.** Coller le lien récupéré en A7, en navigation privée.
**ON DEVRAIT VOIR** : **le code est demandé** (c'est la décision du 18/07 : le lien est une adresse, pas une preuve d'identité). Après saisie du bon code → la bonne copie s'ouvre directement.
**SI LA COPIE S'OUVRE SANS CODE** : ✘ — c'est le point le plus important du bloc, le signaler tout de suite.

**B5 · Clavier mobile.** Sur un écran où l'élève saisit du texte, ouvrir le clavier.
**ON DEVRAIT VOIR** : le champ de saisie reste visible au-dessus du clavier, rien ne se superpose, rien ne saute.

**B6 · Mobile — la navigation.** (Si tu passes en prof sur le téléphone.)
**ON DEVRAIT VOIR** : la barre `Pilotage · Données · Réglages` lisible et cliquable, l'écran de Correction utilisable. ⚠️ **Le Bilan et le Suivi déborderont sur le côté** (tableaux à 9 et 12 colonnes) : c'est la dette D6, connue et attendue. Vérifier seulement que **le reste** est utilisable.

## BLOC C — LES DEUX À LA FOIS (sans objet pour M6)
La souche n'a pas de temps réel : rien à tester à deux appareils simultanément. *(Ce bloc reprendra tout son sens pour le QCM, le débat et l'applaudimètre.)*

---

# PATRON POUR LES PASSES SUIVANTES
Composer le protocole en **trois blocs par rôle**, jamais plus de 8 étapes au total, chacune avec son ATTENDU VISUEL écrit :
- **BLOC A — prof** : entrée dans l'instance · navigation · le geste métier principal · les réglages (et leur persistance après rechargement) · les données.
- **BLOC B — élève** : connexion réelle + refus d'un mauvais code · ses travaux antérieurs · le point de conception tranché dans la passe · le clavier mobile.
- **BLOC C — les deux** : présence, synchronisation, chrono — tout ce qui met deux appareils en relation (l'angle mort n°1 du harnais).

---

# PROTOCOLES M-TEST — les trois modes test rénovés (promus le 19/07)
*v2 du 19/07 — RECOMPOSÉS PAR RÔLE après rappel de Paul : la v1 mélangeait prof et élève dans les mêmes blocs, en violation de la règle n°1 du présent document. Un bloc = un rôle ; l'incarnation élève est regroupée en UNE seule passe par app. Libellés vérifiés en production.*

**⚠ Contrôle de version** : pastilles non incrémentées en M-TEST (`v6.0.0` dictée · `v7.0.0` QCM · `2026-07-17-1` débat) — le marqueur de la bonne version, ce sont les boutons ⚡ eux-mêmes ; s'ils manquent : cache, recharger avec `?v=N` croissant.

**Déclaration de couverture** : séquences construites sur lecture du code + harnais ; rien du temps réel n'est prouvé — le bloc C du QCM (deux appareils) reste le seul juge.

## ① CORRECTION DE DICTÉE (~4 min)
**Préparer** : accès prof → accueil → **🧪 Créer le bac à sable** (ou **🔄 Regénérer**).

**BLOC A — TOUT LE PROF D'ABORD** (6 clics, sans quitter le rôle)
1. Panneau « 🧪 Mode test » → **✓ Vérifier les 4 états** → ON DEVRAIT VOIR : `Alice → Terminée` · `Lucas → À faire` · `Sacha → Tu étais absent(e)` · `Chloé (dictée B) → Pas encore corrigée`.
2. **✏️ Tester l'éditeur de textes** → ON DEVRAIT VOIR : message avec le nouveau texte. *(On le laisse basculé : l'élève le vérifiera.)*
3. **🧹 Tester la corbeille** → confirmer → ON DEVRAIT VOIR : chemin `corbeille/<jour>/suppression-dictee_<HHMMSS>` affiché ET export JSON téléchargé.
4. **🔄 Regénérer** → ON DEVRAIT VOIR : la dictée B de retour.

**BLOC B — L'ÉLÈVE EN UNE SEULE PASSE** (« Se mettre à la place d'un élève »)
1. **Alice** → « Mes dictées » : Terminée, copie ouvrable avec note.
2. **Sacha** → « Tu étais absent(e) » — jamais de note ni d'« Ouvrir », jamais de mise en cause du professeur.
3. **Chloé** → SA LISTE PORTE le texte modifié : « [test] Ce texte a été modifié depuis le bac à sable. » *(La preuve de l'éditeur, vue du bon côté.)*

**BLOC A' — RETOUR PROF, clôture** (2 clics)
1. **✏️ Tester l'éditeur de textes** (rebascule vers l'origine). *(Facultatif : ré-incarner Chloé → texte d'origine revenu.)*
2. **Purger le bac à sable** → ON DEVRAIT VOIR : plus aucune donnée `_test_`.

## ② DÉBAT (~4 min)
**Préparer** : accès prof → **Mode test** (classe `_test_pilotage_debat_s3`).

**BLOC A — TOUT LE PROF D'ABORD** (6 clics)
1. **▶ Démarrer (2 h)** puis **⚡ T-5 maintenant** → ON DEVRAIT VOIR : le toast d'alerte prof tombe immédiatement.
2. **⚡ Fin atteinte maintenant** → ON DEVRAIT VOIR : modale « clôturer ou prolonger » → **Prolonger** (le cours repart).
3. **⚡ Fin atteinte maintenant** → **Clôturer**. *(Le cours est clos : l'élève testera le refus.)*
4. Préparation → « Les 10 documents du parcours » → **Documents de test** (le JSON se colle) → **Injecter les documents** → ON DEVRAIT VOIR : « Documents injectés ✔ ».

**BLOC B — L'ÉLÈVE EN UNE SEULE PASSE** (Incarner)
1. Incarner → ON DEVRAIT VOIR : refus « hors cours » (message DISTINCT de « groupes verrouillés »), « Mes débats » consultable.
2. *(Toujours incarné, après le redémarrage du bloc A' ci-dessous si tu préfères l'ordre strict — sinon :)* les documents « [TEST] Document N » visibles dans son parcours.

**BLOC A' — RETOUR PROF, le second refus + clôture** (4 clics)
1. **▶ Redémarrer un cours** → **verrouiller les groupes** (geste normal du pilotage).
2. Incarner une dernière fois → ON DEVRAIT VOIR : le refus « groupes verrouillés », message propre. *(Seule ré-incarnation du protocole — les deux refus ne peuvent pas se produire dans le même état du cours.)*
3. **↩ Revenir au jeu d'exemple** puis **Purger et sortir** → traces `_test_` effacées, cours de test compris.

## ③ QCM (~6 min)
**Préparer** : accès prof → **🧪 Mode test**.

**BLOC A — TOUT LE PROF D'ABORD : P2 puis chrono** (10 clics)
1. Lancer une question → **Tous les élèves répondent**.
2. **⚖️ Vérifier que les notes n'ont pas bougé** → « Cette session n'est pas encore clôturée ».
3. **🔒 Clôturer (chemin réel)** → « énoncé **conservé ✔** ».
4. **⚖️ Vérifier…** → deux totaux IDENTIQUES (« Le jour de l'évaluation : X · avec l'énoncé actuel : X »).
5. **✏️ Modifier l'éval après coup** → « version 2 ».
6. **⚖️ Vérifier…** → totaux DIFFÉRENTS, message : l'app affiche LA NOTE DU JOUR. *La preuve visible que P2 protège.*
7. **🔄 Relire l'état** → éval en v2, énoncé lu par l'app resté en v1.
8. Lancer une question AVEC CHRONO → **⏱️ Faire expirer le chrono** → cliquer une réponse dans la zone simulée → ON DEVRAIT VOIR : clic REFUSÉ avec explication — jamais accepté visuellement sans être enregistré.

**BLOC B — L'ÉLÈVE EN UNE SEULE PASSE** (5 clics)
1. **👋 Ouvrir le portail élève** (codes du bac à sable affichés au-dessus).
2. Classe `_test_evaluation-qcm` → **code FAUX** d'abord → refus clair.
3. Code + prénom + nom corrects → entrée acceptée.
4. **📊 Mes évaluations** → la session close, marquée « v2 ».
5. **✕ Fermer la vue élève**.

**BLOC A' — RETOUR PROF, clôture** (1 clic)
**🗑️ Sortir et purger** → classe, éval, sessions, présence ET codes fictifs purgés.

**BLOC C — DEUX APPAREILS (recommandé, temps réel)** : refaire le bloc B sur un vrai téléphone pendant que l'ordinateur pilote — seul test du temps réel, angle mort structurel du harnais.
