# LE TEST DE PAUL — 10 minutes, ce que le harnais ne peut pas voir
*Créé le 18/07/2026 sur demande de Paul. Patron réutilisable à CHAQUE passe d'app. Il ne teste PAS ce que la conscience a déjà vérifié (structure, rendu statique, banc) : il vise exclusivement les zones structurellement hors de portée du harnais.*

## Pourquoi ces zones précisément
Le harnais (navigateur simulé + adaptateur REST) ne peut voir NI le temps réel (polling, pas websocket), NI les vraies polices/Chrome Android/clavier mobile, NI la charge, NI la validation Firebase authentique. Ce sont les familles de bugs D (timing/courses) et G (rendu mobile) du registre — les plus vicieuses. D'où ce protocole.

## Règles du test
- **Chronomètre 10 minutes.** Si ça déborde, on s'arrête : c'est que le protocole est mal calibré, pas que Paul doit y passer plus de temps.
- **Retour minimal** : pour chaque étape, `✔` ou `✘ + trois mots`. Rien de plus. Exemple : « 4✘ audio muet ».
- **Sur le téléphone** (c'est l'outil réel de Paul) sauf mention « ordinateur ».
- **Toujours ouvrir avec `?v=N`** (N incrémenté) pour contourner le cache.
- Vérifier d'abord **la pastille de version** : si elle n'affiche pas la version attendue, ARRÊT — on teste l'ancienne version.

---

## PROTOCOLE M6 — la souche (correction_dictee)

**Préalable (30 s)** — ouvrir `monsieurjaipascompris.com/correction_dictee.html?v=1`, vérifier la pastille **v6.0.0**. Si absente : arrêt.

**1. (1 min) — Connexion élève réelle.** Mode élève → saisir le code d'un vrai élève + son nom + son prénom → « Entrer ».
*Attendu : entrée acceptée. Puis retenter avec un code FAUX : refus avec message clair.*

**2. (1 min) — « Mes dictées ».** Une fois entré : la liste s'affiche-t-elle ? Ouvrir une dictée.
*Attendu : les dictées où l'élève a une copie, avec titre et classe. Sans copie : message d'attente, pas d'erreur.*

**3. (1 min) — Le lien nominatif (le point tranché).** Ouvrir un lien de copie envoyé aux familles (`?dictee=…&eleveKey=…`) dans un onglet privé.
*Attendu : le code est demandé, puis la bonne copie s'ouvre directement.*

**4. (2 min) — Le mode Rapide avec audio (ordinateur).** Accès prof → ouvrir une dictée → ⇧R → corriger deux mots.
*Attendu : le raccourci bascule bien sur Pilotage, l'audio prononce le mot, la correction s'enregistre.*

**5. (1 min) — Réglages.** Onglet Réglages → couper la lecture audio, changer la vitesse, revenir en Rapide.
*Attendu : le réglage est pris en compte immédiatement et survit à un rechargement.*

**6. (2 min) — Temps réel (le plus important, à deux appareils).** Téléphone en élève + ordinateur en prof sur l'onglet Suivi 🟢.
*Attendu : la présence de l'élève apparaît côté prof ; son avancement se met à jour sans rechargement.*

**7. (1 min) — Mobile réel.** Sur le téléphone, en prof : ouvrir une dictée, passer sur Données → Bilan.
*Attendu connu : le tableau déborde (dette D6). Vérifier seulement que le RESTE (nav, Correction) est utilisable.*

**8. (30 s) — Clavier mobile.** Sur un écran de saisie, ouvrir le clavier.
*Attendu : rien ne se casse, le champ reste visible.*

**Total : 10 minutes.** Retour attendu : une ligne du type `1✔ 2✔ 3✘ code non demandé 4✔ 5✔ 6✔ 7✔ 8✔`

---

## PATRON POUR LES PASSES SUIVANTES
À chaque app, la conscience compose le même protocole en 8 étapes maximum, en piochant dans ces catégories :
1. **Authentification réelle** (Firebase, codes, sessions)
2. **Les données de l'élève** (ses travaux, son historique)
3. **Le point de conception tranché dans la passe** (ce que Paul a décidé, vérifié en vrai)
4. **Le geste métier principal** (corriger, piloter, voter — l'usage quotidien)
5. **Les réglages** (persistance après rechargement)
6. **Le temps réel à deux appareils** (toujours, c'est l'angle mort n°1)
7. **Le mobile réel** (Chrome Android, ce que le harnais approxime)
8. **Le clavier mobile / le zoom** (famille G du registre)
