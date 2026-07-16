# PROMPT DE RÉFÉRENCE — Site monsieurjaipascompris (MJPC) — v3

Ce document est le prompt à donner à n'importe quelle conversation Claude qui travaillera sur le site MJPC. Il pose le contexte, les principes, l'architecture, et organise le travail en passes de codage qui ne se télescopent pas. Une passe = un objectif clair, des fichiers identifiés, des entrées/sorties cadrées.

---

## 0. CONTEXTE

Tu travailles avec Paul (Monsieur Meney), prof de français en collège. Il développe un écosystème pédagogique numérique autour du site `monsieurjaipascompris` (`siteflow-io.github.io/monsieurjaipascompris/`), thème Cosmic Glow Sunset, déployé sur GitHub Pages, backend Firebase. Le site sert toutes ses classes de 6e, 5e, 4e, 3e.

Repo GitHub : `https://github.com/siteflow-io/monsieurjaipascompris`. **Un fichier `CLAUDE.md` à la racine du repo documente l'architecture technique fine et doit être lu en début de chaque passe.**

L'écosystème actuel comprend :
- **Site MJPC** (`index.html`) : portail élève + panneau prof admin (Ctrl+Espace ou 5 taps logo)
- **dictee_universelle.html** : peer-correction multi-dictées, Firebase
- **correction_dictee.html** : correction manuscrite mode prof + élève
- **reecriture.html** + **reecriture_bb4e.html** : apps réécriture
- **plickers-attente.html** : salle d'attente entre sessions Plickers/QCM
- **evaluation-qcm.html** : QCM live façon Plickers, Firebase `plickers-mjpc` — **existe en autonome, à intégrer au repo MJPC**
- Apps grammaire d'entraînement (ex-Apps Script type `eval_chXX`, à terme migrées Firebase)
- Sites web spécifiques (Jérôme Swift 2027, Mustapha Monde 2027)

L'objectif de l'évolution : connecter ces apps au site, en faire un dispositif cohérent, et ajouter ce qui manque (workspace de correction, profil longitudinal, conseiller de planification).

**Règle d'or** : ne pas refaire le site de la NASA. Faire simple, robuste, exécutable. Pas de phase MVP/v2/v3 indéfinie : chaque passe est complète et finie quand on la pose.

---

## 1. PRINCIPES DIRECTEURS (à respecter dans toute décision)

1. **Le papier est roi pour la production.** L'élève écrit à la main, en classe ou maison.
2. **Le numérique est roi pour le retour.** Correction tapée, persistante, agrégée, consultable en ligne.
3. **La copie revient propre à l'élève.** Le prof n'écrit pas dessus. L'élève l'annote lui-même après consultation des commentaires en ligne (objet de retravail actif).
4. **L'IA pré-trie, le prof tranche, manuellement piloté.** Pas d'appel API automatique côté élève. Le prof exporte JSON, copie dans Claude, récupère, valide, injecte. Comme la dictée coévaluée actuelle.
5. **L'IA est un multiplicateur d'exhaustivité, jamais un substitut de jugement.**
6. **La pair-correction est réservée aux savoirs codifiés** (dictée, exercices fermés). Pas en rédaction ni étude de texte (compétence du prof).
7. **L'audio est un canal de saisie pour le prof, jamais un canal de transmission à l'élève.** Tout commentaire vocal est transcrit avant validation.
8. **Pas de moyenne unique, profil multi-dimensionnel.** Métaphore montre connectée : indicateurs descriptifs, jamais de classement entre élèves, jamais de "score MJPC".
9. **Décorréler temporellement la note du commentaire.** L'élève lit les commentaires et fait son autocorrection avant que la note se débloque.
10. **Le profil sert à préparer la lecture, pas à la remplacer.**
11. **L'app conseille, ne prescrit pas.** Le prof peut toujours décider hors recommandation.
12. **Le système de rappels est ferme mais respectueux.** Pas de notif week-ends/vacances, possibilité de pauser ou reporter.
13. **La relecture autocorrection se fait en 30 secondes max par copie.** Si la chaîne technique fait dépasser, c'est qu'elle est cassée. Critère architectural intangible.
14. **Réutiliser l'existant avant d'inventer.** Le site a déjà des composants robustes (viewer iframe, drag-and-drop admin, snapshot Firebase). Toute passe étend l'existant, ne le réinvente pas.

---

## 2. ARCHITECTURE PÉDAGOGIQUE — TROIS PILIERS

L'écosystème s'organise autour de trois piliers vus côté élève :

- **P1 — Méthode** : cours, fiches méthodologiques, documents passifs.
- **P2 — Entraînement libre** : apps avec autocorrection mécanique (Levenshtein calibré, motifs requis/interdits), à grand volume, en autonomie. Réponses fermées ou semi-fermées.
- **P3 — Session guidée + évaluation** : apps en mode prof ouvert (fenêtre temporelle ouverte par le prof), production fragmentaire, retour différé après pré-commentaire IA + validation prof. Inclut aussi les évaluations sommatives (QCM live, dictées notées, rédactions, études de texte).

Trois statuts d'événement dans le profil longitudinal (à NE JAMAIS confondre) :
- `entrainement_libre` : autocorrection App, formative, à volume
- `session_guidee` : prof a ouvert une fenêtre, validation prof
- `evaluation_sommative` : note officielle, École Directe

---

## 3. VOCABULAIRE FIXÉ

À utiliser systématiquement, sans synonymes ni dérivations :

- **Correction** : geste du prof sur la copie originale scannée par lui-même, dans le workspace de correction.
- **Autocorrection** : retravail de l'élève sur sa propre copie après lecture des commentaires du prof. Photo OCR-compatible OU saisie clavier.
- **Relecture autocorrection** : geste du prof de revue rapide (30s max) de l'autocorrection de l'élève. OCR pré-trie, prof tranche, débloque ou approfondit.
- **Rituel court** : applicable à toutes productions sauf rédaction et étude de texte. Reformulations par commentaire principal, puis déblocage.
- **Rituel long** : applicable à rédaction et étude de texte. Reformulations + autocorrection + relecture autocorrection prof, puis déblocage.

---

## 4. DÉCISIONS ARCHITECTURALES IMMUABLES (tranchées avant codage)

Ces décisions sont **gravées**. Toute remise en question doit être documentée et impacter explicitement les passes concernées.

### 4.1 Format `eleve_uuid`

Identité élève = UUID stable côté Firebase, **immuable** sur toute la scolarité.

```json
/eleves/{uuid}: {
  "uuid": "abc-123-def",
  "nom": "Martin",
  "prenom": "Léa",
  "nom_complet_origine": "Léa Martin",
  "inscriptions": [
    {"annee": "2025-2026", "niveau": "4e", "classe_slug": "4e_banksy"},
    {"annee": "2026-2027", "niveau": "3e", "classe_slug": "3e_de_gaulle"}
  ],
  "codes_acces": [...],
  "cree_le": ts
}
```

Tous les événements du profil portent `eleve_uuid`, jamais le nom slugifié. Un changement de classe ou un redoublement = ajout d'une inscription, l'UUID ne change pas.

Le champ `nom_complet_origine` est conservé pour traçabilité avec les anciennes données pré-migration.

### 4.2 Base Firebase de référence

Création d'une nouvelle base **`mjpc-core`** (nom neutre, pas dépendant d'un usage historique), qui devient le hub central pour :
- `/eleves/` (référentiel élèves)
- `/profil_events/` (événements format standard)
- `/dossiers_correction/`
- `/calendrier/`
- `/site/` (documents, séances, publications)
- `/calibrages/` (moteur de correction automatique)
- `/sessions_actives/`

Bases existantes (`dictee-5e-ch4`, `plickers-mjpc`) **conservées** et lues en parallèle. Pas de migration immédiate. Les apps existantes émettent leurs événements vers `mjpc-core/profil_events/` en plus de leur écriture historique.

### 4.3 Stockage PDF et photos

- **PDF copies originales** (workspace correction) : Firebase Storage, organisation `/scans/{annee}/{dossier_id}/{eleve_uuid}.pdf`
- **Photos autocorrection élève** : Firebase Storage, compression côté client à 1.5 Mo max, `/autocorrections/{annee}/{dossier_id}/{eleve_uuid}.jpg`
- **Pas de base64 inline** sauf dans les bibliothèques de commentaires types (texte uniquement).

### 4.4 OCR

OCR **interdit** pour la lecture des copies originales (testé, pas fiable sur écriture cursive).

OCR **autorisé uniquement** pour la relecture autocorrection (passe 6c), avec consignes OCR-compatibles données à l'élève. L'OCR pré-trie, ne décide pas. Module factorisé `ocr_engine.js` basé sur Tesseract.js, fonction de détection de présence/absence dans zones définies, pas transcription intégrale.

### 4.5 Doctrine de maîtrise (v0)

```
maitrise(eleve, notion) = 
  moyenne_pondérée_par_récence(taux_réussite_des_N_dernières_tentatives)
  où N >= 3 (sinon : "données insuffisantes")
  pondération récence : exponentielle, demi-vie 30 jours
  pondération source : 
    entraînement_libre × 1
    session_guidée × 2
    évaluation_sommative × 3
  
seuil de confiance : si moins de 3 événements récents (< 90 jours), 
                     afficher "données insuffisantes"
                     pas de score affiché
```

Affinage possible plus tard, mais c'est la base.

---

## 5. ÉTAT ACTUEL (existant à respecter et à étendre)

### 5.1 Bases Firebase actuelles

- `dictee-5e-ch4` (region europe-west1) : dictée universelle, correction_dictee, réécriture, classes, site
- `plickers-mjpc` : evaluation-qcm (app autonome non encore au repo MJPC, à intégrer)
- **À créer** : `mjpc-core` (cf. 4.2)

PROF_CODES communs : 3141, 1312. Dans `dictee_universelle.html` ligne 552, codes chargés en plus depuis un objet config.

### 5.2 Site MJPC actuel

- 4 niveaux (6e, 5e, 4e, 3e)
- Sélection niveau via `?n=<level>` (ex: `?n=3e`)
- Onglets de niveau visibles : Chapitres, Fiches transversales, Zone autonomie, Dictée, Réécriture, + placeholders Analyse d'image / Étude de texte / Rédaction
- Login élève par nom/prénom via Apps Script
- Admin par Ctrl+Espace ou 5 taps logo
- 8 entrées Outils prof actuelles : Dictées coévaluées, Correction dictée manuscrite, Réécriture, Réécriture BB4E, Salle d'attente Plickers, Grammaire (à venir), Profil élève (à venir), Archives (à venir)

### 5.3 Existant pédagogique

- Taxonomie grammaticale : 142 notions sur 5 domaines, 3 niveaux Domaine > Famille > Notion (cf. SPEC_ATELIER.md)
- Format événement standard : à finaliser en passe 0
- Calibrage Levenshtein : précédent travail solide sur app discours rapportés 4e (à recycler en passe 5)

### 5.4 État existant détaillé du code (à respecter et étendre, pas réinventer)

Cette section documente les composants techniques déjà en place dans le repo. Toute passe doit s'appuyer dessus.

#### Backends actifs

**Firebase Realtime Database** — projet `dictee-5e-ch4`, region `europe-west1`. URL : `https://dictee-5e-ch4-default-rtdb.europe-west1.firebasedatabase.app`. Chemins en usage actif :
- `/classes` — class rosters (loaded into the `CLASSES` global)
- `/dictees/{id}/config` — co-evaluated dictation configs
- `/correction_dictee/{id}/config` — manuscript-dictation corrections
- `/reecritures/{id}/config` — rewriting exercises
- `/site/{level}/published` — array of chapter numbers visibles aux élèves pour ce niveau (lock/unlock chapter cards)
- Chaque `{id}` typically a sibling subtrees pour student submissions alongside `config`.

**Note importante** : deux clés API Firebase coexistent (`AIzaSyBWKMG…` et `AIzaSyDROt…`) pointant vers le même projet. **Les deux sont kept working. Ne pas en supprimer une "par souci de propreté" sans vérifier l'usage.**

**Google Apps Script web app** — `APPS_SCRIPT_URL` dans `index.html` ligne 419. Endpoints utilisés :
- `login` — valide Nom+Prénom contre le class roster
- `upload` / `associate` / `get_folder_url` / `remove_doc` — gère les docs hébergés sur Drive
- `getdocs` — registre des docs uploadés (alimente `DOCS_CACHE`)
- `open` / `close` — événements de session-tracking
- Beaucoup d'appels en `mode:'no-cors'` ignorent la réponse.

#### Conventions transversales du code

- **Levels** : `'6e' | '5e' | '4e' | '3e'`. `?n=<level>` query param sélectionne le niveau.
- **`levelAccess`** dans `index.html` ligne 424 : accès cumulatif descendant. Un 3e voit tous niveaux, un 6e ne voit que 6e. **Règle pédagogique à conserver.**
- **Prof gate** : `var PROF_CODES=[3141,1312];` + `?mode=prof` / `?mode=eleve`. Obfuscation, pas sécurité.
- **Test bypass** : `index.html` ligne 497 accepte `MENEY` / `MONSIEUR` comme credentials test, sans contacter Apps Script, donne accès aux 4 niveaux. **Porte dérobée à conserver.**
- **Admin mode** : `Ctrl+Space` toggle (`activateAdmin` ligne 531). 5 taps sur badge "Prototype" ou logo (`handleBadgeTap`) font la même chose. Active drag-and-drop uploads sur `.doc-item[data-docid]` et `.fiche-drop-zone[data-section]`, plus toggles "publier pour les élèves" qui écrivent dans `/site/{level}/published`. Files >30 MB déclenchent un fallback Drive-paste (`showBigFileGuide_`).
- **React via UMD CDN** : pas de JSX, pas de bundler. Pattern systématique `var h = React.createElement`. **Ne JAMAIS introduire JSX ou imports ES6.**
- **Snapshot tool** (`snapshotExport` / `snapshotImport` / `renderSnapshotPanel` dans `reecriture.html` ~ligne 88) : volontairement générique, prend any Firebase ref path. **Toute nouvelle interaction Firebase prof doit privilégier ce pattern existant plutôt que d'inventer.**
- **Doc embedding** : `openViewer(title, url)` ligne 545 dans `index.html`. Drive `/view` URLs auto-réécrites en `/preview`. **Toute nouvelle app embarquable doit accepter query-string config et fonctionner en iframe.**
- **Tracking existant** : `TRACK` dans `index.html` enregistre `open` / `close` sessions avec `active-time`, `scroll-max`, `interaction counts`. `trackClose` utilise `navigator.sendBeacon` on unload. **Si une nouvelle app/onglet est ajouté dans le portail, il DOIT appeler `trackOpen(chapitre, doc, type)` à l'ouverture, sinon télémétrie manquante.** Ce tracking est le précurseur du format événement standard de la passe 0 et doit y être branché, pas remplacé.

#### Convention de structure d'une séance (chapter body)

Chaque doc-item dans le body d'un chapter-card a :
- `data-docid="{level}-{chapitre}-{seance}-{doc}"` (ex: `3e-ch3-s1-diapo`)
- `data-chapitre="ch3"`
- `data-seance="s1"`
- `onclick="openDoc(...)"` qui ouvre le viewer iframe

**La passe 3 (branchement séances) doit étendre `openDoc` pour gérer les nouveaux types d'activité, pas créer un mécanisme parallèle.** Le registre déclaratif `apps_registry.js` est consommé par `openDoc` étendu.

#### Déploiement

- Pas de build, pas de tests, pas de lint
- `git push origin main` déploie via GitHub Pages
- Pas d'environnement de staging
- Délai de propagation ~30s
- Test local : ouvrir les HTML directement (ou serveur local pour résoudre les iframes), `?n=6e/5e/4e/3e` + `MENEY`/`MONSIEUR`, ou `Ctrl+Space` pour admin

---

## 6. PASSES DE CODAGE

Les passes sont conçues pour ne PAS se télescoper. Chaque passe a des entrées (existant requis), un objectif unique, une sortie (artefacts produits), et termine par un point de stabilité d'où la passe suivante peut partir sans rien casser. **Ne PAS sauter de passes.**

**Avant chaque passe** : lire le `CLAUDE.md` du repo pour récupérer les détails techniques fins de l'existant.

---

### PASSE 0 — Audit et fondations Firebase

**Objectif** : poser une base Firebase unifiée (`mjpc-core`), un format d'événement standard, et les modules transversaux (transcription, OCR). Pas de feature visible côté élève.

**Entrées requises (à fournir au début de la conversation Passe 0)** :
- `CLAUDE.md` du repo (lecture obligatoire)
- Code actuel `index.html` du site MJPC
- Capture/export arborescence Firebase actuelle des bases existantes
- Code `dictee_universelle.html` (version multi-dictées avec champ `published`)
- Code `evaluation-qcm.html` (app autonome à intégrer)
- SPEC_ATELIER.md
- Taxonomie 142 notions au format JSON/CSV

**Travail** :
1. **Intégrer `evaluation-qcm.html` au repo MJPC** (geste préalable). L'app reste fonctionnelle telle quelle, on la copie simplement dans le repo, on conserve sa base Firebase `plickers-mjpc`.
2. Cartographier précisément les bases Firebase existantes (chemins, structures, volumes).
3. Créer `mjpc-core` avec arborescence cible :
```
/eleves/{uuid}
/profil_events/{eleve_uuid}/{ts}
/dossiers_correction/{dossier_id}
/calendrier/{annee}/{event_id}
/site/{niveau}/{chapitre}/{seance}
/calibrages/{notion_id}
/sessions_actives/{classe_slug}/{seance_id}
/ia_traces/{dossier_id}/{eleve_uuid}
```
4. Définir le **format événement standard** :
```json
{
  "ts": 1234567890,
  "eleve_uuid": "abc-123-def",
  "app": "qcm | dictee_coev | correction_dictee | reecriture | entrainement | redaction | etude_texte | site_specifique | site_navigation",
  "session_id": "optionnel",
  "type_event": "entrainement_libre | session_guidee | evaluation_sommative | commentaire_correction | autocorrection_depot | autocorrection_relue | site_open | site_close | autre",
  "chapitre": "3e_ch3",
  "niveau_difficulte": "facile|standard|approfondi|expert",
  "notion_ids": ["gram-024", "geste-redac-007"],
  "payload": { "type": "...", "data": { ... } },
  "contexte": "classe | domicile | remediation"
}
```
Préciser tous les payloads typés (un par app/usage).

5. **Brancher le `TRACK` existant sur le format événement standard.** Le tracking actuel d'`index.html` (open/close/active-time/scroll-max/interaction counts) doit émettre des événements `app: "site_navigation"` dans `mjpc-core/profil_events/`. **L'écriture Apps Script existante est CONSERVÉE en parallèle pendant la phase de transition.**

6. Module transcription factorisé `transcription_engine.js` :
   - Backend : Web Speech API native
   - Dictionnaire personnel de termes problématiques (anaphore, prosopopée, etc.) : auto-correction post-transcription
   - API : `dicter({langue, dictionnairePerso}) → Promise<texte>`
   - Édition post-transcription dans l'UI appelante
   - Fichier autonome, importable par toute app

7. Module OCR factorisé `ocr_engine.js` :
   - Backend : Tesseract.js (browser, gratuit)
   - **Usage strict** : détection de présence/absence d'écriture dans zones définies, pas transcription intégrale
   - API : `detecterEcriture(image, zones[]) → Promise<{zone_id, présence: "oui"|"non"|"douteux", texte_partiel?}>`
   - Documenté comme réservé à la passe 6c

**Sortie** :
- `evaluation-qcm.html` intégré au repo
- Document `ARCHITECTURE_FIREBASE.md` (chemins, schémas, règles)
- Document `FORMAT_EVENEMENT.md` (schéma JSON détaillé avec payloads typés)
- Fichier `transcription_engine.js` testable
- Fichier `ocr_engine.js` testable
- Base `mjpc-core` créée et documentée
- TRACK existant émet en parallèle vers `mjpc-core/profil_events/`

**Critère de fini** : on peut déposer un événement test dans `mjpc-core/profil_events/` depuis n'importe quelle app et le relire. Le TRACK actuel émet bien les événements de navigation. Le module transcription dicte et restitue du texte propre. Le module OCR détecte la présence d'écriture dans une zone test.

---

### PASSE 1 — Login unique et identité élève

**Objectif** : un seul login sur le site MJPC, propagation sécurisée vers les apps via paramètre URL, fallback login direct conservé pour usage hors-site.

**Entrées requises** :
- Sortie de Passe 0 (`mjpc-core` + format événement)
- Code `index.html` actuel (notamment login élève existant)
- Roster `/classes/{slug}/eleves[]` actuel (format `{nomComplet, lien?}`)

**Travail** :

**1. Migration `/classes` → `/eleves/{uuid}`** (workflow explicite) :
- Pour chaque classe existante dans `dictee-5e-ch4/classes/{slug}`, parcourir `eleves[]`
- Pour chaque élève, générer un UUID stable (UUID v4)
- Créer `/eleves/{uuid}` dans `mjpc-core` avec :
  - `nom`, `prenom` (extraits de `nomComplet`)
  - `nom_complet_origine` (tel qu'enregistré, pour traçabilité)
  - `inscriptions: [{annee: "2026-2027", niveau, classe_slug}]`
  - `codes_acces: []` (peuplé en étape 3)
  - `cree_le: ts`
- **Conserver `/classes/{slug}/eleves[]` en lecture** (compatibilité ascendante avec apps non patchées)
- **Ajouter `/classes/{slug}/eleves_uuid[]`** dans `mjpc-core/site/...` pour mapping inverse rapide nomComplet → uuid

**2. Référentiel `/eleves/{uuid}` peuplé** pour toutes les classes 2026-2027.

**3. Génération de codes élèves** façon dictée universelle dans le panneau prof MJPC :
- Génération en lot
- Export PDF imprimable (1 fiche par classe avec nom + code par élève)
- Recherche par nom (élève qui oublie son code)
- Codes stockés dans `/eleves/{uuid}/codes_acces[]`

**4. Login site MJPC** : nom/prénom OU code → `eleve_uuid` stocké dans `sessionStorage` MJPC. La résolution interroge en priorité `mjpc-core/eleves` (index sur nom_complet_origine slugifié) ; fallback sur Apps Script si pas trouvé (transition douce).

**5. Token de propagation** site → apps :
- URL d'ouverture d'app contient `?eleve=UUID&token=signature`
- `signature = SHA256(eleve_uuid + secret_partagé + jour_du_jour)`
- Secret dans le code des apps (obfuscation, pas sécurité forte — cohérent avec PROF_CODES)
- Toutes les apps doivent utiliser le même `secret_partagé`

**6. Apps existantes patcheées** (5 apps) :
- `dictee_universelle.html`, `correction_dictee.html`, `reecriture.html`, `reecriture_bb4e.html`, `evaluation-qcm.html`
- Détection `?eleve=...&token=...` au chargement
- Court-circuit du login interne
- Écriture Firebase avec cet `eleve_uuid` (en plus de l'écriture historique avec nomComplet, pour compat)

**7. Fallback** : si pas de paramètre URL, l'app garde son login interne (pour usage prof hors-site, dépannage). **La porte dérobée `MENEY`/`MONSIEUR` est conservée dans `index.html`.**

**Sortie** :
- Référentiel `/eleves/` peuplé pour toutes les classes
- Codes générés, imprimables
- 5 apps existantes patchées avec détection token URL
- Document `LOGIN_UNIQUE.md` décrivant le mécanisme de token et la migration

**Critère de fini** : un élève se connecte au site, ouvre la dictée universelle, ne re-saisit aucune identité, et l'événement est correctement attribué à son `eleve_uuid` dans `mjpc-core/profil_events/`.

---

### PASSE 2 — Calendrier annuel et invariants temporels

**Objectif** : calendrier annuel parsé par IA (manuel piloté), édité par le prof, consommable par tous les modules futurs.

**Entrées requises** :
- Sortie de Passe 0 (Firebase prêt)
- Calendrier annuel brut de l'établissement (PDF, mail, document)

**Travail** :
1. Format JSON de l'événement calendrier :
```json
{
  "id": "...",
  "type": "vacances | ferie | sortie | conseil_classe | brevet_blanc | examen | reunion | absence_prof | evenement_classe | autre",
  "scope": "global | etablissement | niveau:3e | classe:3e_de_gaulle",
  "date_debut": "2026-10-19",
  "date_fin": "2026-11-02",
  "titre": "Vacances de Toussaint",
  "description": "?",
  "impact": {
    "cours_supprimes": ["3e_de_gaulle:lundi"],
    "revision_necessaire": true,
    "charge_prof": "leger | moyen | lourd",
    "correction_impossible": false
  },
  "source": "import_ia | manuel",
  "valide_par_prof": true,
  "ts_ajout": 1234567890
}
```
Stockage : `/calendrier/{annee}/{event_id}`

2. **Module d'import IA** dans le panneau prof :
   - Zone de collage du calendrier brut
   - Bouton "Préparer le prompt IA" → génère un prompt + le calendrier brut, à coller dans Claude
   - Zone de collage du JSON renvoyé
   - Affichage parsé pour validation : N événements détectés, classés par type
   - Bouton "Valider tous" / édition fine événement par événement

3. **Éditeur de calendrier** : ajout/modification/suppression manuelle d'un événement à tout moment (un changement de date en cours d'année doit pouvoir être propagé en un clic).

4. Vue calendrier annuel : timeline visuelle, filtrage par niveau/classe, identification visuelle des semaines chargées.

5. API interne `calendrier.js` : `evenementsEntre(date1, date2, scope)`, `estEnPause(date, scope)`, `chargeProf(date)` → consommable par les passes futures.

**Sortie** :
- Module calendrier fonctionnel
- Calendrier 2026-2027 importé et validé
- Document `CALENDRIER.md` décrivant format, prompt IA, API interne

**Critère de fini** : on peut interroger "y a-t-il un impondérable la semaine du 18 nov pour 3e De Gaulle ?" et obtenir une réponse correcte.

---

### PASSE 3 — Branchement des séances aux apps

**Objectif** : registre déclaratif des apps, panneau admin permettant d'associer une activité (avec son type et ses paramètres) à chaque séance d'un chapitre, affichage explicite côté élève. **Étend `openDoc(...)` existant, ne réinvente pas le viewer.**

**Entrées requises** :
- Sortie de Passe 1 (login unique fonctionnel)
- Liste des apps disponibles avec leurs paramètres
- Code `index.html` (notamment `openDoc`, `openViewer`, `data-docid` conventions)

**Travail** :
1. Registre déclaratif `apps_registry.js` :
```javascript
APPS = {
  "dictee_coevaluee": {
    label: "Dictée coévaluée",
    icone: "📝",
    famille: "production_ecrite",
    coevaluation: true,
    rituel: "court",
    url: "dictee_universelle.html",
    params: ["dicteeId"],
    selector: function() { /* charge la liste des dictées publiées */ }
  },
  "dictee_manuscrite": { rituel: "court", ... },
  "redaction": { rituel: "long", ... },
  "etude_texte": { rituel: "long", ... },
  "qcm_live": { rituel: "court", ... },
  "entrainement_grammaire": { rituel: null, ... },
  "site_specifique": { ... },
  "cours": { ... }
};
```

2. Champ `type_activite` au document de séance dans `mjpc-core/site/{niveau}/{chapitre}/{seance}` avec :
   - `type_activite` : clé du registre
   - `params` : selon l'app (ex: `dicteeId: "ch3_satire_dict_01"`)
   - `mode` : "ouverte" | "fermée" (pour sessions guidées prof)

3. **Étendre `openDoc(...)` dans `index.html`** :
   - Détecter `type_activite` du doc-item cliqué
   - Si type connu du registre : construire l'URL avec params + token login (Passe 1) → `openViewer(titre, url_complete)`
   - Sinon : comportement actuel (Drive PDF preview)

4. Panneau admin séance : menu déroulant "Type d'activité" qui liste les apps du registre, puis sélecteur contextuel des paramètres (ex : si dictée coévaluée → liste des dictées publiées). **S'intègre au mode admin existant (drag-and-drop sur doc-items).**

5. Affichage élève : la card de séance affiche **clairement** le type d'activité avant le clic ("Dictée coévaluée — tu vas dicter à ton voisin et corriger la sienne", "Correction de ta dictée manuscrite — récupère tes erreurs sur ta copie papier", etc.). Couleur/icône typée par famille.

6. Bouton ouvrir/fermer la session pour les apps de session guidée : `mjpc-core/sessions_actives/{classe_slug}/{seance_id}`, comme `sessionActive` du QCM.

**Sortie** :
- Registre apps fonctionnel et extensible
- `openDoc` étendu pour gérer les nouveaux types
- Panneau admin d'association
- Affichage élève adapté
- Document `BRANCHEMENT_SEANCES.md`

**Critère de fini** : Paul peut créer une séance "Dictée du chapitre 3" en 3 clics dans le panneau admin, l'élève voit la card avec le bon libellé, clique, atterrit dans la dictée universelle pré-loguée sur la bonne dictée.

---

### PASSE 4a — Workspace de correction (squelette)

**Objectif** : workspace de correction PDF utilisable. Affichage PDF, marqueurs numérotés, panneau commentaires clavier+vocal, grille basique, sortie événements. Squelette complet et fonctionnel sans IA-assistance ni bibliothèques avancées.

**Le workspace est nativement intégré à MJPC** — accessible depuis le panneau admin (entrée "Outils prof" : "📋 Workspace correction"), branché sur :
- Le login prof MJPC (PROF_CODES)
- Le format événement standard (`mjpc-core/profil_events/`)
- Le référentiel `/eleves/{uuid}` (Passe 1)
- Les dossiers de correction (`mjpc-core/dossiers_correction/`)

**Entrées requises** :
- Sortie de Passe 0 (transcription, format événement, OCR module)
- Sortie de Passe 1 (eleve_uuid stable)
- Bibliothèque de critères basique par type de production (à fournir par Paul)
- Code couleur des marqueurs (à fournir par Paul)

**Travail** :
1. Page `correction_workspace.html` au repo MJPC (panneau prof, accès admin via PROF_CODES).
2. Création d'un **dossier de correction** : type production, classe, date éval, date butoir EE, effectif, paliers personnalisables. Stockage `mjpc-core/dossiers_correction/{dossier_id}`.
3. **Import des copies** : upload PDF (1 PDF par élève ou 1 PDF compilé à découper auto par nombre de pages connu).
4. **Stockage** : Firebase Storage `/scans/{annee}/{dossier_id}/{eleve_uuid}.pdf`.
5. **Affichage PDF** : viewer 60-70% écran, zoom/pan/page navigation. Bibliothèque PDF.js.
6. **Marqueurs numérotés** : clic sur PDF → marqueur visuel numéroté + entrée dans le panneau commentaires. Couleurs typées (à finaliser : faute / remarque / question / éloge — tranché en début de passe). PAS de texte écrit sur le PDF.
7. **Marqueurs avec gravité** : chaque marqueur a une gravité (info / mineur / majeur / critique). Les marqueurs majeurs et critiques sont **obligatoirement à retravailler** côté élève (déclencheront la reformulation en passe 6a).
8. **Panneau commentaires** (30-40% écran) :
   - Pour chaque marqueur : critère (de la grille), geste/notion (taxonomie), gravité, commentaire texte, suggestion de reformulation
   - Saisie : clavier ET dictée vocale (Web Speech via module transcription) avec édition post-transcription
9. **Grille de critères globale** visible en permanence : notes/indicateurs par compétence, appréciation générale (clavier + vocal).
10. **Workflow session correction** :
    - Démarrage session ("Correction étude de texte 3e De Gaulle")
    - Chargement de toutes les copies du dossier
    - Navigation entre copies (vignettes ou compteur)
    - Possibilité de mettre une copie de côté ("à reprendre", "litigieux")
    - Sauvegarde auto à chaque action
    - Indicateurs : copies faites/restantes, temps moyen, temps total
11. **Sortie événementielle** : pour chaque copie corrigée, événements format standard émis dans `mjpc-core/profil_events/`. Le retour structuré (PDF + marqueurs + commentaires + grille + suggestion reformulation) est stocké et consommable par la passe 6.

**Sortie** :
- Page `correction_workspace.html` fonctionnelle (squelette complet)
- Entrée "Outils prof" du site MJPC pointant vers le workspace
- Document `WORKSPACE_CORRECTION.md`

**Critère de fini** : Paul accède au workspace depuis le panneau admin MJPC, corrige un paquet de copies, marque/commente avec dictée, et le retour apparaît dans les profils élèves.

---

### PASSE 4b — Workspace de correction (ergonomie et bibliothèques)

**Objectif** : enrichir le workspace de la passe 4a avec ce qui le rend rapide et personnalisable au fil du temps.

**Entrées requises** :
- Sortie de Passe 4a
- Premier paquet corrigé (pour amorcer la bibliothèque)

**Travail** :
1. **Bibliothèque commentaires types** :
   - Sauvegarde d'un commentaire dans la bibliothèque en un clic
   - Recherche rapide (raccourci clavier, autocomplétion)
   - Catégorisation auto par geste/notion
   - Lien automatique vers fiche méthode / entraînement libre du geste
   - Modification d'un commentaire type modifie pour les usages futurs (pas rétroactivement)
2. **Dictionnaire personnel transcription** :
   - Dans le panneau prof, gestion d'une liste `terme_mal_entendu → terme_correct`
   - Le module transcription (passe 0) consomme ce dico pour auto-correction
   - Enrichissable au fil des corrections (bouton "ajouter au dico" depuis une transcription erronée)
3. **Multi-copies et navigation rapide** :
   - Vignettes côté gauche, navigation au clavier (flèches, J/K)
   - Statut visuel par copie : non corrigée / en cours / terminée / mise de côté
   - Possibilité d'ouvrir 2 copies côte à côte
4. **Pomodoro intégré** :
   - Bouton "Session 30min"
   - Timer visible
   - Stats fin de session : N copies en X min, Y min/copie moyenne
   - Stockées dans le profil prof (pour calibrage vitesse de correction passe 7)
5. **Stats par classe** (page de bilan en fin de correction d'un dossier) :
   - Heatmap notions × élèves
   - Commentaires fréquents (utiles pour retour collectif)
   - Productions exemplaires repérables

**Sortie** :
- Workspace enrichi
- Document `WORKSPACE_CORRECTION_ERGO.md`

**Critère de fini** : Paul corrige son deuxième paquet 30% plus vite que le premier grâce à la bibliothèque qui se constitue.

---

### PASSE 4c — Workspace de correction (IA-assistance)

**Objectif** : intégration du flux IA-assistance manuel piloté pour pré-commentaires sur productions longues (rédaction, étude de texte). Pas d'OCR sur la copie originale ; l'IA prend en entrée la grille + la consigne + une saisie prof minimale du contenu de la copie (ou rien si le prof veut juste un commentaire-cadre générique).

**Entrées requises** :
- Sortie de Passe 4b
- Bibliothèque de prompts IA par type de production (à fournir par Paul)

**Travail** :
1. **Bouton "Préparer prompt IA"** dans le workspace, par copie ou par lot :
   - Construit un JSON `{consigne, grille, saisie_prof_libre, marqueurs_actuels}` 
   - Affiche un prompt préintégré avec ce JSON
   - Paul copie, ouvre une conversation Claude, colle, récupère le retour
2. **Bouton "Importer pré-commentaire IA"** :
   - Zone de collage du JSON retour
   - Parsing
   - Injection dans les commentaires du workspace, **marqués comme suggestion IA non validée** (bandeau "💡 Suggestion IA — à valider")
3. **Validation prof** :
   - Bouton "J'ai relu et je valide" (formulation explicite, pas de "Valider" tout court)
   - Possibilité de reformuler avant validation
   - Trace : versions IA + version prof gardées dans `mjpc-core/ia_traces/{dossier_id}/{eleve_uuid}`
4. **Audit** : page d'audit dans le panneau prof affichant :
   - Taux de validation des suggestions IA par type de production
   - Reformulations majeures (utiles pour calibrer les prompts)
   - Sélection aléatoire mensuelle d'un commentaire validé pour auto-évaluation ("ce commentaire reflète-t-il bien votre jugement ?")

**Sortie** :
- Module IA-assistance dans le workspace
- Document `WORKSPACE_CORRECTION_IA.md`

**Critère de fini** : Paul peut sur une rédaction obtenir un pré-commentaire IA structuré, le valider ou reformuler, et l'élève reçoit un commentaire de qualité.

---

### PASSE 5 — Moteur de correction automatique factorisé

**Objectif** : module unique de correction mécanique pour toutes les apps d'entraînement libre, basé sur le calibrage Levenshtein de l'app discours rapportés 4e + extensions (motifs, longueur, ponctuation, normalisation typographique).

**Entrées requises** :
- Sortie de Passe 0 (format événement)
- Code de l'app discours rapportés 4e (calibrage Levenshtein)
- Liste de notions à couvrir initialement (1-2 chapitres pilotes)

**Travail** :
1. Module `correction_engine.js` :
```javascript
function evaluerReponse(reponseEleve, attendu, parametres) {
  // attendu: { type: "exact" | "levenshtein" | "motifs" | "composite", ... }
  // parametres: { seuil, motifs_requis, motifs_interdits, 
  //               longueur_min, longueur_max, normaliser_typo, ... }
  return {
    juste: bool,
    score_partiel: 0..1,
    feedback: { ... },
    types_erreur: [ ... ]
  };
}
```
2. Normalisation typographique : apostrophes droites/typographiques, espaces, majuscules, accents — réutiliser le travail de `dictee_universelle.html`.
3. Détection de motifs : présence/absence de mots-clés, ponctuation requise (virgule, point), majuscule en début, longueur, etc.
4. **Panneau de calibrage prof** dans le site MJPC :
   - Sélection d'une notion
   - Saisie de 5-10 réponses élèves possibles (justes, presque justes, fautes courantes, n'importe quoi)
   - Affichage du verdict du moteur pour chacune
   - Ajustement des paramètres en direct
   - Sauvegarde du calibrage dans `mjpc-core/calibrages/{notion_id}`
5. Versioning des calibrages : si un calibrage change en cours d'année, les anciens événements gardent leur calibrage d'origine.

**Sortie** :
- `correction_engine.js` factorisé
- Panneau de calibrage prof
- Calibrages initiaux pour 1-2 chapitres pilotes
- Document `MOTEUR_CORRECTION.md`

**Critère de fini** : on peut tester un calibrage sur 10 réponses, ajuster, sauvegarder, et l'app d'entraînement libre l'utilise.

---

### PASSE 6a — Vue retour élève (affichage et reformulations)

**Objectif** : interface élève consultable en ligne pour chaque production corrigée. Affichage de la copie, des commentaires, des suggestions, et des reformulations obligatoires (rituel court).

**Entrées requises** :
- Sortie de Passe 4a (workspace correction émet les retours)
- Sortie de Passe 5 (moteur correction pour les liens entraînement libre)

**Travail** :
1. Onglet "Mes productions" dans l'interface élève du site MJPC.
2. Pour chaque production corrigée :
   - PDF de la copie scannée (par le prof) affiché
   - Marqueurs numérotés cliquables → commentaires textuels associés (jamais d'audio brut)
   - Suggestions de reformulation visibles
   - Grille de critères remplie
   - Appréciation générale
3. **Affichage progressif** des commentaires : le commentaire suivant ne s'affiche qu'après lecture du précédent (clic explicite "j'ai lu ce point").
4. **Reformulations obligatoires** sur chaque commentaire majeur ou critique :
   - Champ texte court (15-50 mots)
   - Question type fournie : "Avec tes mots, qu'as-tu à retravailler ici ?" + "Donne aussi un exemple de comment tu le ferais autrement."
   - Validation minimale : longueur min, présence d'éléments structurels (deux phrases, présence de marqueurs comme "par exemple")
   - Saisie enregistrée comme événement `autocorrection_reformulation`
5. **Mise en série** : pour le même type de production, vue chronologique inverse avec rappel des commentaires précédents sur le même geste ("Tu as déjà eu 4 commentaires sur les transitions, voici les 3 derniers").
6. **Agrégation par geste** : vue "Mes points à travailler" qui regroupe les commentaires par geste/notion sur l'ensemble des productions.
7. **Liens vers entraînement libre** : à côté de chaque commentaire critique, lien "S'entraîner sur ce geste" qui renvoie aux exercices du moteur de correction sur la notion concernée.
8. **Bouton "signaler un blocage"** disponible à toutes les étapes : envoi notif au prof, déblocage manuel possible.
9. **Pour rituel court** (toutes productions sauf rédaction et étude de texte) : après reformulations, déblocage de la note. Fin du rituel.
10. **Pour rituel long** (rédaction et étude de texte) : après reformulations, passage à la passe 6b (autocorrection).

**Sortie** :
- Onglet élève fonctionnel
- Rituel court complet
- Document `VUE_RETOUR_ELEVE.md`

**Critère de fini** : un élève reçoit son retour de QCM ou dictée, lit, reformule, débloque sa note. Pour rédaction/étude de texte, il arrive sur l'écran d'autocorrection (passe 6b).

---

### PASSE 6b — Autocorrection élève (rituel long)

**Objectif** : interface guidée pour que l'élève dépose une autocorrection OCR-compatible (photo de copie retravaillée) ou saisie clavier, en alternative.

**Entrées requises** :
- Sortie de Passe 6a (rituel court fonctionnel, reformulations faites)
- Banque de consignes OCR-compatibles et de qualité photo (à fournir par Paul ou rédiger ensemble)

**Travail** :
1. Page d'introduction à l'autocorrection accessible avant le travail papier :
   - Affichage des consignes OCR-compatibles :
     - "Écris ton autocorrection au stylo bleu ou noir foncé"
     - "Écris en lettres bâton ou en script lisible"
     - "Espace bien tes mots et tes lignes"
     - "Écris uniquement dans la marge ou entre les lignes, pas par-dessus le texte original"
     - "Si tu réécris une phrase entière, fais-le en bas de la copie sur une zone propre, en numérotant ce qui correspond à quelle correction"
   - Carte synthèse imprimable A6 (pour collage cahier méthodologie)
2. Page de dépôt :
   - Bouton "Prendre une photo" (utilise input file capture=camera sur mobile)
   - Avant prise : 3 consignes randomisées parmi banque de 30-50 + 1 consigne fixe ("vérifie que la photo est lisible avant d'envoyer")
   - Banque consignes qualité photo : "pose la copie sur une surface plate", "lumière du jour", "pas de doigt dans le cadre", "cadre toute la copie", "pas de reflet", "photo nette", etc.
   - Compression côté client à 1.5 Mo max
   - Upload vers Firebase Storage `/autocorrections/{annee}/{dossier_id}/{eleve_uuid}.jpg`
3. **Option saisie clavier** alternative :
   - "Préfères-tu taper ton autocorrection ?" → bouton
   - Pour chaque commentaire majeur/critique, champ texte avec contexte du commentaire
   - L'élève tape directement sa correction
   - Sauvegardé comme événement `autocorrection_saisie_clavier`
4. **État après dépôt** :
   - Note toujours verrouillée
   - Affichage : "Ton autocorrection a été reçue. M. Meney la relira. Tu seras notifié quand ce sera fait."
   - Événement `autocorrection_depot` émis
   - Notification au prof (consolidée dans son tableau de bord)
5. **Bouton "signaler un blocage"** : si problème technique avéré, contact prof, déblocage manuel possible.

**Sortie** :
- Pages autocorrection fonctionnelles
- Banque de consignes constituée
- Document `AUTOCORRECTION.md`

**Critère de fini** : un élève peut, après reformulations, déposer une photo de sa copie retravaillée OU saisir au clavier, et le prof en est notifié.

---

### PASSE 6c — Relecture autocorrection prof (30 secondes)

**Objectif** : interface ultra-rapide pour que le prof valide l'autocorrection en 30s max. OCR pré-trie, prof tranche, débloque ou approfondit. Critère architectural intangible : 30s par copie.

**Entrées requises** :
- Sortie de Passe 0 (module OCR)
- Sortie de Passe 6b (dépôts élèves)

**Travail** :
1. **Notification consolidée** dans le tableau de bord prof : "3 autocorrections en attente (3e De Gaulle)". Clic = liste, traitement en série.
2. **Interface relecture** ultra-dépouillée :
   - Gauche : ta correction d'origine, **réduite aux marqueurs majeurs et critiques uniquement**, numérotés
   - Droite : photo de l'autocorrection de l'élève (ou texte si saisie clavier)
   - Pour chaque marqueur, statut auto-déterminé par OCR + comparaison :
     - 🟢 **Détecté** : écriture présente à l'endroit attendu
     - 🟡 **Détecté partiel** : présence mais OCR douteux ou comparaison floue
     - 🔴 **Non détecté** : aucune écriture trouvée
   - Si saisie clavier : OCR remplacé par détection textuelle simple (présence de réponse pour chaque commentaire)
3. **Trois boutons gros, accessibles clavier** :
   - `D` — **Débloquer** : autocorrection suffisante, note se révèle, lien entraînements actif
   - `A` — **Approfondir** : insuffisant, écran de saisie raison
   - `M` — **Marquer manuellement** : ajuster les statuts auto avant décision (clic sur marqueurs pour passer 🟢↔🟡↔🔴)
4. **Écran "Approfondir"** :
   - Champ texte court "Pourquoi ?"
   - Boutons rapides de raisons fréquentes (à constituer au fil de l'usage) :
     - "Tu n'as pas repris la transition demandée"
     - "Ton autocorrection n'est pas lisible, refais une photo plus nette"
     - "Tu as recopié sans corriger l'erreur signalée"
     - "Tu n'as traité qu'une partie des points"
   - Clic, envoi à l'élève, notification, événement `autocorrection_relue` avec statut "approfondissement_demande"
5. **Cycle d'approfondissement** : 1 cycle max. Au second dépôt insuffisant, soit déblocage manuel forcé soit prise de contact direct prof-élève en classe (hors app).
6. **Indicateur de temps** : timer discret affiché dans l'interface. Si moyenne de classe dépasse 30s, alerte rouge dans le profil prof : "le système est cassé, on revoit la conception".
7. **Stats** : taux d'autocorrections jugées suffisantes du premier coup, taux d'approfondissements honorés, temps moyen de relecture.

**Sortie** :
- Interface relecture fonctionnelle
- Document `RELECTURE_AUTOCORRECTION.md`

**Critère de fini** : Paul relit 28 autocorrections en moins de 15 minutes, avec décisions claires pour chacune.

---

### PASSE 7 — Système de rappels et discipline de correction

**Objectif** : tableau de bord d'accueil panneau prof affichant tous les dossiers de correction en cours avec paliers OK/Moyen/Grave/Critique, notifications, bandeau pression dans le workspace.

**Entrées requises** :
- Sortie de Passe 2 (calendrier — pour exclusion week-ends/vacances et calcul charge)
- Sortie de Passe 4a (workspace correction émet les dossiers)
- Sortie de Passe 6c (relectures autocorrection à faire aussi à intégrer)

**Travail** :
1. Modèle Firebase `/dossiers_correction/{dossier_id}` :
```json
{
  "type": "redaction | etude_texte | dictee | qcm | autre",
  "classe_slug": "...",
  "date_eval": "...",
  "date_butoir_ee": "...",
  "effectif": 28,
  "etat_global": "cree | scanne | en_cours | corrige | publie",
  "paliers": { "ok": 7, "moyen": 14, "grave": 21, "critique": 30 },
  "copies": {
    "{eleve_uuid}": { "etat_correction": "...", "etat_autocorrection": "...", "ts_corrige": "..." }
  },
  "palier_actuel": "ok | moyen | grave | critique",
  "reports": [{ "ts": "...", "motif": "..." }],
  "pause": false
}
```
2. Calcul du palier (option C combinée) :
   - Délai depuis date éval × proximité butoir EE
   - Palier réel = le plus alarmant des deux
   - Recalcul à chaque chargement et toutes les heures
3. **Tableau de bord d'accueil** panneau prof :
   - Liste triée par gravité décroissante
   - Pour chaque dossier : type, classe, palier, copies faites/restantes, butoir
   - Click = ouvre le workspace sur ce dossier
   - Section dédiée pour les dossiers terminés des dernières 48h (clôture symbolique : "✅ X corrigées en Yh")
   - Section autocorrections en attente de relecture (issue passe 6c)
4. **Notifications** :
   - Notif navigateur uniquement au passage de palier (Service Worker)
   - Email récap quotidien (paramétrable, paramètre dans panneau prof)
   - Bandeau permanent sur le site MJPC mode admin si au moins 1 dossier en grave/critique
5. **Bandeau pression dans le workspace** :
   - Si dossier critique : bandeau permanent + barre de progression rouge
   - Indicateur "au rythme actuel, fin dans Xj. Butoir dans Yj."
6. **Échappatoires** :
   - Bouton "Reporter butoir" (1 fois par dossier, avec note interne du motif)
   - Bouton "Mettre en pause" (vacances, maladie : compteurs gelés)
   - Pas de notifs week-ends, jours fériés, vacances scolaires (lu depuis le calendrier de Passe 2)
7. **Vitesse de correction calibrée** : à partir de l'historique des dossiers terminés et du Pomodoro de Passe 4b, calcul du temps moyen par copie par type de production. Sert au calcul de la projection "fin dans Xj".

**Sortie** :
- Tableau de bord
- Système de notifications
- Bandeau pression workspace
- Document `RAPPELS_CORRECTION.md`

**Critère de fini** : Paul ouvre le panneau prof, voit immédiatement l'état de tous ses paquets, est notifié uniquement aux moments utiles, peut reporter ou pauser sans culpabilité.

---

### PASSE 8 — Apps d'entraînement libre (rétrofit + nouvelles)

**Objectif** : apps grammaire actuelles migrées d'Apps Script vers Firebase + format événement standard. Création des premières apps d'entraînement libre rédactionnelles et analytiques.

**Entrées requises** :
- Sortie de Passes 0, 1, 5
- Taxonomies des gestes rédactionnels et analytiques (livrable pédagogique préalable, à produire par Paul)
- Code des apps Apps Script à migrer

**Travail** :
1. Migration des apps grammaire chapitre par chapitre :
   - Suppression de l'envoi Apps Script
   - Ajout écriture Firebase format événement standard
   - Conservation de la logique pédagogique exacte
2. Mapping `exoToNotions` ajouté à chaque app (chaque exercice tagué notion(s)).
3. Apps d'entraînement libre rédactionnel :
   - Pour chaque geste rédactionnel de la taxonomie : 5-10 exercices d'entraînement
   - Consignes courtes (50-150 mots de production attendue)
   - Autocorrection via moteur Passe 5 (motifs, longueur, ponctuation)
   - Feedback immédiat
4. Apps d'entraînement libre analytique :
   - Idem pour les gestes analytiques
5. Zone autonomie élève : accès libre à toutes les apps d'entraînement, filtrage par notion/geste, indication des notions à travailler (issue du profil longitudinal Passe 9).

**Sortie** :
- Apps grammaire migrées (au moins 2-3 chapitres pilotes)
- Apps d'entraînement libre rédac/analytique (au moins 1 geste de chaque type pour pilote)
- Document `ENTRAINEMENT_LIBRE.md`

**Critère de fini** : un élève peut faire 20 exercices d'entraînement libre sur "ouvrir un paragraphe argumentatif" avec feedback immédiat, et le profil longitudinal voit chaque tentative.

---

### PASSE 9 — Profil longitudinal

**Objectif** : agrégation de tous les événements émis par les apps en vues exploitables : élève, prof×élève, prof×classe.

**Entrées requises** :
- Sortie de toutes les passes précédentes (le profil n'a de sens qu'avec des données)
- Doctrine de mesure de maîtrise v0 (cf. section 4.5, déjà tranchée)

**Travail** :
1. **Vue élève par lui-même** :
   - Métaphore montre connectée
   - Indicateurs descriptifs par dimension (ortho, gram, lex, conjug, gestes rédac, gestes analytiques)
   - JAMAIS de moyenne unique
   - Évolution sur l'année (chronologique)
   - Mes points à travailler (lien entraînement libre)
2. **Vue prof × élève** : diagnostique, riche
   - Toutes les productions de l'élève sur l'année
   - Tous les commentaires reçus, par geste
   - Trajectoire de maîtrise par notion
   - Comparaison à la classe (anonymisée pour le prof)
   - **Indicateurs de discipline de retravail** (distincts de la maîtrise) :
     - Taux d'autocorrection honorée
     - Taux d'autocorrection jugée suffisante du premier coup
     - Délai moyen de retravail
     - Qualité visuelle des dépôts
3. **Vue prof × classe** :
   - Heatmap notions × élèves (qui a échoué sur quoi)
   - Distribution de maîtrise par notion (médiane, écart-type, queue basse)
   - Élèves à risque sur les chapitres en cours
   - Commentaires fréquents de la classe (utile pour retour collectif)
4. **Statuts d'événement** distingués visuellement :
   - Entraînement libre (gris/vert mécanique)
   - Session guidée (bleu/violet jugement prof)
   - Évaluation sommative (rouge/officiel)
   - Autocorrection (orange/discipline)
   - Site navigation (gris pâle, contextuel)
5. **Aucune analyse IA non validée** affichée. Trace personnelle des reformulations IA → prof, accessible mais non visible élève.
6. **Archivage annuel** : champ `archived_year` sur chaque événement. Bouton "archiver l'année 2026-2027" en fin juin → événements gelés mais consultables.

**Sortie** :
- Vues complètes (élève, prof×élève, prof×classe)
- Document `PROFIL_LONGITUDINAL.md`

**Critère de fini** : Paul ouvre le profil de Léa et voit immédiatement où elle progresse, où elle stagne, et quoi lui prescrire.

---

### PASSE 10 — Conseiller de planification

**Objectif** : module qui suggère **quand** et **combien** évaluer en croisant calendrier, état de préparation des classes, charge de correction prévisionnelle.

**Entrées requises** :
- Sortie de toutes les passes précédentes
- Politique d'évaluation par niveau (combien d'évaluations par trimestre/an — à fournir par Paul)

**Travail** :
1. **Module "Préparation classe"** par chapitre :
   - Décomposition par notion visée (jamais score global agrégé)
   - Identification élèves à risque (queue basse)
   - Suggestion séances rattrapage avant éval
2. **Module "Capacité correction"** prévisionnelle :
   - Lecture des dossiers en cours (Passe 7) et de leurs paliers
   - Vitesse personnelle calibrée (Passe 7)
   - Calendrier (Passe 2) pour exclure les jours indisponibles
   - Projection sur 2-3 semaines
3. **Module "Suggestion fenêtres d'évaluation"** :
   - Croisement préparation × charge × calendrier
   - Étoilage ★/★★/★★★ avec justification
   - Création directe du dossier de correction prévisionnel
4. **Module "Nombre d'évaluations recommandé"** :
   - Politique d'éval × calendrier annuel × historique vitesse
   - Suggestion : "ce trimestre tu peux faire 3-4 évals, voici les fenêtres possibles"
5. **Tableau de bord planification** dans le panneau prof :
   - Vue annuelle : chapitres × classes × évaluations prévues
   - Identification visuelle des conflits (semaines surchargées)
   - Édition manuelle toujours possible (l'app conseille, ne prescrit pas)

**Sortie** :
- Module conseiller complet
- Document `CONSEILLER_PLANIFICATION.md`

**Critère de fini** : Paul ouvre le tableau de bord en début de trimestre, voit ses fenêtres recommandées par classe, valide ou modifie, et l'année est planifiée.

---

## 7. LIVRABLES PÉDAGOGIQUES SÉPARÉS (à produire par Paul, pas par Claude)

Ces livrables ne sont pas du code — ils sont la matière pédagogique qui alimente le code. À produire en parallèle, indépendamment des passes :

- **Taxonomie gestes rédactionnels** (~25-40 par niveau, avec ID stables, libellés, descriptions) — bloque passe 8
- **Taxonomie gestes analytiques** (idem) — bloque passe 8
- **Bibliothèque exercices entraînement libre** par geste (5-10 par geste minimum) — bloque passe 8
- **Bibliothèque prompts session guidée** par geste — bloque passe 4c
- **Bibliothèque commentaires types** initiale pour le workspace de correction — alimente passe 4b
- **Grilles de critères** par type de production (rédaction, étude de texte, etc.) — bloque passe 4a
- **Calibrages moteur de correction** par notion/geste (à faire au panneau de calibrage Passe 5)
- **Banque consignes OCR-compatibles** + **banque consignes qualité photo** — bloque passe 6b
- **Banque raisons rapides "Approfondir"** — alimente passe 6c
- **Code couleur marqueurs workspace** (faute / remarque / question / éloge) — bloque passe 4a
- **Politique d'évaluation par niveau** (combien d'évaluations par trimestre) — bloque passe 10

---

## 8. RÈGLES DE CODAGE PERMANENTES

À respecter à chaque passe, sans exception :

- **Lire `CLAUDE.md` du repo en début de chaque passe.** Source de vérité technique fine.
- **R/A pattern** : Paul écrit "R/A" → réponse concise et précise, puis attendre.
- **Root-cause** : pas de patches. Une erreur = on remonte à la cause.
- **Brace-balance** : après toute édition de fichier JS/HTML, compter `{` == `}`.
- **Python `data.replace()` byte strings** pour substitutions sûres dans des fonctions monolignes.
- **GitHub Pages obligatoire** pour les apps Firebase (CORS bloque sur `file://`).
- **Noms de fichiers en anglais** (Paul utilise GitHub avec traduction Chrome auto).
- **Apostrophes typographiques** : casser silencieusement les `content.replace()` — utiliser unicode escapes.
- **Ponctuation = token** dans cleanTokens.
- **Pas de chemins durs** : références dynamiques aux classes/élèves.
- **Acronymes** : Paul est seul à les définir. Demander confirmation au moindre doute.
- **Raisonnement français dans les blocs de réflexion**, pas anglais.
- **React via UMD CDN** : pattern `var h = React.createElement`. **JAMAIS de JSX, jamais d'imports ES6.**
- **Privilégier `snapshotExport`/`snapshotImport`** (pattern de `reecriture.html`) pour toute nouvelle interaction Firebase prof.
- **Toute nouvelle app embarquable accepte `?param=value` en query-string et fonctionne en iframe.**
- **Conserver les portes dérobées de test** (`MENEY`/`MONSIEUR`, doubles clés API Firebase) — ne pas supprimer "par souci de propreté".
- **Le tracking `TRACK` existant doit être étendu, pas remplacé.** Toute nouvelle navigation appelle `trackOpen(chapitre, doc, type)`.
- **Tests de non-régression manuels** : avant toute modification d'app existante, enregistrer un cas de test "ce flux marche" dans un fichier `tests_manuels.md` par app. Après modification, rejouer ces cas, cocher. En cas de régression : retour en arrière immédiat, on cherche pourquoi avant de patcher.

---

## 9. COMMENT UTILISER CE PROMPT

Quand une nouvelle conversation Claude est ouverte pour travailler sur le site MJPC :

1. Coller ce document entier en début de conversation.
2. Annoncer la passe à traiter ("On travaille sur la PASSE X").
3. Fournir les entrées requises listées dans la passe.
4. Claude lit, comprend, lit le `CLAUDE.md` du repo, et exécute UNIQUEMENT cette passe.
5. À la fin de la passe, Claude produit les sorties listées et confirme le critère de fini.
6. Conversation suivante = passe suivante (ou itération sur une passe pas encore finie).

**Ne jamais** sauter de passes, anticiper sur les passes futures, ou refondre les passes antérieures sans raison documentée.

---

## 10. POINTS LAISSÉS OUVERTS (à trancher au début de chaque passe concernée)

- Code couleur des marqueurs workspace (passe 4a, dépend de Paul)
- Politique d'évaluation par niveau (passe 10, dépend de Paul)
- Format précis du PDF compilé multi-élèves et règle de découpage auto (passe 4a)

Ces points sont **explicitement ouverts** — pas oubliés. À trancher au moment opportun, pas avant.

---

FIN DU PROMPT v3.
