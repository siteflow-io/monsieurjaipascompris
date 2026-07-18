# LE BLOC DIAGNOSTIC — à insérer en tête du script de CHAQUE app et du site
> **VERSION À COMPLÉTER** — créé le 18/07/2026 sur demande de Paul : « tout ça est à inscrire quelque part, et pas seulement dans le plan : aussi dans les apps, dans le site lui-même, et je parle du code. Ainsi, une instance à qui on upload index peut tout de suite vérifier cette piste-là. »
> **Principe** : le code doit porter son propre mode d'emploi de diagnostic. Une conversation neuve qui reçoit un seul fichier doit pouvoir, sans plan et sans historique, savoir où regarder en premier quand « ça ne marche plus ».

## Le bloc, à recopier VERBATIM en tête du `<script>` (après le socle MJPC-CORE)

```js
/* ═══════════════════════════════════════════════════════════════════════════
   DIAGNOSTIC — À LIRE EN PREMIER SI « ÇA NE MARCHE PLUS »
   Écosystème MJPC — monsieurjaipascompris.com — Paul Meney
   Avant de suspecter le code de cette app, vérifier CES CAUSES EXTERNES,
   dans cet ordre. Elles expliquent la quasi-totalité des pannes soudaines
   d'une app qui fonctionnait la veille.

   1. LES RÈGLES FIREBASE ONT-ELLES EXPIRÉ ?  ← CAUSE N°1, DÉJÀ VÉCUE
      Symptôme : "permission_denied", données qui ne chargent plus, écrans
      vides sur TOUTES les apps en même temps.
      Les règles créées en "mode test" contiennent une DATE D'EXPIRATION en dur.
      Le jour venu, tout s'arrête d'un coup, sans que rien n'ait changé au code.
      → console.firebase.google.com > projet mjpc-hub > Realtime Database >
        onglet "Règles" > chercher une ligne du type
        `".read": "now < 1234567890000"` ou `request.time < timestamp.date(...)`.
      → Précédent : diagnostic initial FAUX (on a accusé le protocole file://
        puis le code) alors que c'étaient les règles expirées. NE PAS REFAIRE.

   2. LE CACHE DU NAVIGATEUR SERT-IL L'ANCIENNE VERSION ?
      Symptôme : "j'ai poussé mais rien n'a changé".
      → Comparer la PASTILLE DE VERSION affichée à l'écran avec APP_VERSION
        ci-dessous. Si elles diffèrent : rouvrir avec ?v=N (N incrémenté).

   3. UNE DÉPENDANCE EXTERNE EST-ELLE INJOIGNABLE ?
      Cette app charge depuis Internet (hors Firebase) :
        - React + ReactDOM (unpkg.com)        [si React]
        - SDK Firebase compat (gstatic.com)
        - Polices Google (fonts.googleapis.com) — cosmétique seulement
      Symptôme : page blanche, "React is not defined", app qui ne boote pas.
      → Vérifier la console réseau. Ces CDN ne tombent quasi jamais, mais un
        réseau d'établissement filtrant peut les bloquer.

   4. UNE API NAVIGATEUR MANQUE-T-ELLE ?
      Web Speech API (lecture audio), visualViewport (zoom/clavier mobile),
      File System Access. Symptôme : une fonction précise muette, le reste OK.

   5. SEULEMENT ALORS : suspecter le code de cette app.
      Le socle MJPC-CORE est identique partout : s'il "marche ailleurs",
      le problème est local. Registre des bugs connus, cause par cause :
      docs/MJPC6-registre-bugs.md (13 sections, ~150 bugs documentés).

   EN CAS D'URGENCE PENDANT UN COURS : docs/MJPC6-urgence-en-classe.md
   (les 3 gestes, le geste conservatoire par app, ce qui ne peut pas arriver).
   RESTAURER LA VERSION PRÉCÉDENTE : docs/MJPC6-restauration.md (convention BUG).
   ═══════════════════════════════════════════════════════════════════════════ */
var APP_VERSION = "…";   // ← la pastille affichée à l'écran doit dire ceci
```

## Où l'insérer
- **Toutes les apps** (`correction_dictee`, `dictee_universelle`, `evaluation-qcm`, `pilotage_debat_s3`, `worktrack`, `applause_meter`, `reecriture`, `reecriture_bb4e`, `analyse_logique`) : en tête du script, juste après le bloc socle.
- **`index.html`** : idem, avec en plus la mention que le site porte l'ALERTE RÈGLES FIREBASE (voir ci-dessous).
- **À chaque passe de la grille** : vérifier que le bloc est présent et à jour (point de grille).
