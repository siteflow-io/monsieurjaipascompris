# PROMPT RÉTRO-INGÉNIÉ — APP DE RÉVISION ADAPTATIVE MJPC

## CONTEXTE

Je suis Paul, professeur de français en collège (4e Banksy 29 élèves, 4e Pythagore 28 élèves). Je développe progressivement le site `monsieurjaipascompris.com` (alias MJPC), qui regroupe mes cours, fiches, exercices interactifs et outils profs pour les niveaux 6e à 3e. Le site fonctionne avec Firebase + Google Apps Script, héberge des chapitres débloqués progressivement, des fiches transversales, des outils dédiés (dictée coévaluée, correction de dictée manuscrite, réécriture, analyse logique), un panneau admin protégé, et un mode adapté pour élèves à besoins éducatifs particuliers.

Je viens de cadrer en parallèle une **app d'évaluation sommative** (projet 1) qui remplace Plickers : papier-roi, rédaction manuscrite obligatoire, choix masqués pendant la réflexion, chrono court à l'apparition des choix, scoring strict, niveaux de difficulté avec pastilles colorées (Facile jaune 5s / Standard orange 10s / Approfondi rouge 15s / Expert bordeaux 20s), correction stylo vert/rouge en fin de séance, scan + saisie élève à domicile + correction app, infrastructure Firebase pour banque de questions atomiques + sessions + élèves indexés.

Ce projet-ci est l'**app de révision adaptative**, app sœur du projet 1, qui rentabilise massivement le corpus de questions construit pour l'éval, enrichit le profil élève longitudinal avec des données comportementales hors enjeu, et fait travailler les élèves en autonomie sur leurs vraies lacunes.

## DISPOSITIF PÉDAGOGIQUE

### Public et usages
- 4e Banksy + 4e Pythagore (extensible aux autres niveaux à terme)
- **Scénario dominant** : révision espacée longitudinale (l'élève ouvre l'app, l'algo lui propose des questions issues des chapitres déjà débloqués)
- **Scénario secondaire** : entraînement libre par chapitre (l'élève entre par un chapitre précis depuis MJPC)
- **Bachotage** : autorisé uniquement sur les contenus de mémorisation obligatoire (mots invariables, conjugaison, listes de conjonctions, pronoms relatifs, prépositions, terminaisons)
- **Usage hybride** : créneaux orchestrés en classe pour amorcer l'habitude + usage domicile libre pour entretenir
- L'app doit fonctionner aussi bien en session courte supervisée (5-10 min) qu'en session solo à domicile (durée variable)

### Deux modes de questions
- **Mode "drill"** (mémorisation) : système de boîtes Leitner simplifié à 4 boîtes
  - Boîte 1 = revue chaque session
  - Boîte 2 = tous les 3 jours
  - Boîte 3 = chaque semaine
  - Boîte 4 = chaque mois
  - Réponse juste → boîte suivante. Réponse fausse → retour boîte 1.
- **Mode "révision"** (compréhension, grammaire appliquée, analyse) : tirage au sort intelligent avec pondération
  - Questions échouées en éval sommative → ×3
  - Questions jamais vues → ×2
  - Questions déjà réussies → ×1

Pas d'algo SM-2 (Anki) : l'usage hybride classe+domicile rend la fréquence trop irrégulière pour que SM-2 soit pertinent (effet "tas qui grossit" qui démoralise).

### Interface élève
- Charte graphique soignée, cohérente avec MJPC (Cosmic Glow Sunset ou variante)
- Animations fluides, micro-interactions plaisantes, typographie travaillée (EB Garamond)
- Indicateurs de progression sobres mais beaux
- Feedback visuel net sur juste/faux
- **Aucune mécanique de jeu** : pas de streak, pas de badges, pas de points, pas de niveaux, pas de classement, pas de mascotte, pas de notifications "tu vas perdre…"
- Principe : l'esthétique sert l'apprentissage, elle ne le remplace pas

### Gestion du temps (chrono)
- **Off par défaut** : pas de chrono, réflexion sereine
- **Mode défi optionnel** activé par l'élève : chronos identiques à l'éval (5/10/15/20s selon difficulté), pastille colorée affichée
- **Suggestion ponctuelle** : quand l'élève maîtrise un chapitre en mode normal, l'app suggère le mode défi
- "i" cliquable expliquant le bénéfice du mode défi (préparer aux conditions réelles d'éval, où la note mesure compréhension ET capacité à mobiliser vite ce qu'on sait)

### Mode adapté (élèves à besoins particuliers)
- **Pas un mode cosmétique** (police, taille) mais une **adaptation pédagogique de la tâche** :
  - Reformulation des consignes (phrases plus courtes, structure simplifiée, vocabulaire plus accessible)
  - Distracteurs pré-éliminés
  - Cases pré-cochées sur questions à étapes
  - Boutons plus gros, validation directe
- **Choix élève à chaque session** : "Mode standard / Mode adapté". Pas de profil pré-activé par le prof. L'élève à besoins particuliers se confronte au standard quand il veut, choisit l'adapté quand il fatigue. Tracé dans les données.

### Feedback et résultats
- **Feedback immédiat** juste/faux à chaque question (vert/rouge net + bonne réponse affichée si fausse)
- **Pas de score cumulé visible pendant la session** (évite le mode performance)
- **Récap complet à la fin** de la session

### Miroir élève (transversal)
- Onglet de premier niveau du site MJPC (à côté de "Chapitres", "Outils")
- **Toujours visible**, agrège les données de **tous** les outils MJPC (révision, dictée, réécriture, analyse logique, etc.) et de l'éval sommative
- L'app de révision est le **pilier en volume de données** (seul outil utilisable à tout moment)
- **Métaphore directrice : montre connectée**. Plus tu utilises l'app, plus le profil est précis et personnalisé. Affiché franchement à l'élève sans culpabilisation.
- Jauge de complétude visible : *"Ton profil est précis à 38%."*
- Affichage exhaustif des données comportementales : heures de connexion, durée des sessions, hésitations, abandons, comparaison à la moyenne classe (anonymisée, jamais de classement)
- Pas d'accès parents

### Posture éthique et wording
- **Confiance dans la robustesse des élèves** : ne pas surdimensionner la prudence au point de brider l'outil. Les collégiens supportent une donnée brute si elle est accompagnée.
- **Exigence et encouragement indissociables** : tout retour combine donnée vraie + lecture juste + horizon concret de progression
- **Jugement sur le travail, jamais sur la personne** : pas de termes moraux (défaut, qualité, sérieux, paresse). Vocabulaire technique sur le travail uniquement (consolidé / fragile, fluide / hésitant)
- **Pas de jargon des sciences cognitives** côté élève (pas de "automatisation", "métacognition", "calibration"). Utiliser des images concrètes (réflexe, refaire le raisonnement, vient tout seul).
- **Français impeccable**, syntaxe soignée, registre courant. Pas de simplification fautive.
- **Test du collégien** : tout mot doit être compris par un 4e moyen sans explication.
- **Aucun anglicisme**, même côté prof. *Banque de questions* (pas pool), *évaluation* (pas test).

## DONNÉES COLLECTÉES (4 COUCHES)

1. **Réponse** : question, choix sélectionnés, juste/faux, date, mode (drill/révision, avec/sans chrono, standard/adapté)
2. **Comportement de réponse** : temps de réflexion avant 1ère sélection, nombre de changements d'avis, hésitations, abandon en cours
3. **Comportement de session** : durée, nombre de questions, heure de connexion, intervalle entre sessions, abandon de session
4. **Profil de maîtrise par notion** : taux de réussite par chapitre/thème/niveau, évolution dans le temps, comparaison anonymisée aux pairs

Aucune donnée de révision ne nourrit la note officielle. Jamais.

## ARTICULATION AVEC LE PROJET 1 (APP D'ÉVALUATION)

- **Banque de questions partagée** entre les deux apps. Une seule saisie pour deux usages.
- Format JSON étendu (voir schéma plus bas) avec champ `usage` : `eval_only` / `eval_et_revision` / `revision_only`
- **Échec en éval = signal fort en révision** :
  - Question drill ratée en éval → entrée en boîte 1 du Leitner
  - Question révision ratée en éval → pondération haute dans le tirage intelligent
  - Un seul échec suffit
  - Réussite en éval = pool standard sans priorité particulière
- **Toute la banque du chapitre disponible en révision** dès qu'il est débloqué (pas seulement les questions de l'éval)
- **Mode défi de la révision = répétition générale de l'éval** (chronos identiques)

## ARTICULATION AVEC L'ÉCOSYSTÈME MJPC

L'app de révision **n'est pas le seul outil** de l'écosystème. Coexistent : dictée coévaluée, correction de dictée manuscrite, réécriture, étude de texte, rédaction, analyse logique. Chacun a son format de données et sa logique propre.

L'app de révision est **circonscrite au format question atomique à choix multiples**. Elle révise :
- Les notions de langue testables par QCM (grammaire, orthographe, conjugaison, lexique)
- La compréhension de texte ponctuelle testable par QCM (sens d'un mot en contexte, identification d'un procédé)
- Les contenus de mémorisation (mode drill)

Le miroir élève agrège les données de tous ces outils — l'app de révision est le pilier en volume mais pas l'unique source.

## ACCÈS DANS LE SITE

- **Onglet de premier niveau** dans le menu MJPC (à côté de "Chapitres", "Outils", "Miroir") → ouvre l'app, l'algo propose des questions de tous les chapitres débloqués
- **Bouton "Réviser ce chapitre"** dans chaque page de chapitre → entre dans l'app pré-filtrée sur ce chapitre
- **Intégration native** dans la base de code MJPC, même Firebase, même auth. Pas d'iframe, pas de sous-domaine.

## LEVIERS PROF (ADMIN)

- **A. Débloquer/verrouiller un chapitre pour la révision** indépendamment du déblocage MJPC
- **B. Mettre une question en pause** (état `pause`) sans la supprimer
- **C. Sur-pondérer un thème pour toute la classe** pendant N jours (à dose mesurée)
- **D. Suggestions automatiques de priorisation individuelle** : l'app détecte les difficultés récurrentes par élève et me propose un récap consultable. Action en un clic : Confirmer / Modifier / Ignorer.
- **E. Tableau de bord classe** : taux de fréquentation par élève, réussite agrégée, questions les plus ratées

## CYCLE DE VIE DES QUESTIONS

- **Correction mineure** (typo, ponctuation) → modification directe, statistiques conservées
- **Modification de fond** (changement de bonne réponse, du sens, des distracteurs) → nouvelle version, ancienne archivée et liée par `version_anterieure_id`. Statistiques de l'ancienne restent attachées à elle. Nouvelle repart à zéro.
- **Conservation pluriannuelle** : statistiques annotées par cohorte (`4e_banksy_2026`, `4e_pythagore_2026`, etc.)
- **Soft delete uniquement** : état `archive`, jamais de hard delete

## INFRASTRUCTURE TECHNIQUE

### Auth élève
- **Système de code élève** identique à `dictee_universelle.html` (référence : ne pas réinventer)
- V2 future : auth MJPC partagée

### Mode dégradé / hors ligne
- Service Worker + IndexedDB
- Pré-téléchargement des questions des chapitres débloqués pour l'élève à la connexion
- Sessions complètes possibles hors ligne, sync silencieuse au retour réseau
- Indicateur réseau discret (point vert/orange/gris en haut)
- Last-write-wins sur les sessions (jamais sur les questions)

### Format JSON de question (extension du format projet 1)

```json
{
  "id": "ch04_q012",
  "chapitre": 4,
  "theme": "pronoms_relatifs",
  "niveau": "standard",
  "enonce": "...",
  "choix": [
    {"lettre": "A", "texte": "...", "correct": true},
    {"lettre": "B", "texte": "...", "correct": false}
  ],
  "reponse_unique": false,

  "usage": "eval_et_revision",
  "type_revision": "revision",

  "version_adaptee": {
    "enonce": "...",
    "choix": [
      {"lettre": "A", "texte": "...", "correct": true, "preselectionne": false, "elimine": false},
      {"lettre": "B", "texte": "...", "correct": false, "preselectionne": false, "elimine": true}
    ]
  },

  "statistiques": {
    "vue_count": 47,
    "reussite_count": 31,
    "taux_erreur_global": 0.34,
    "par_cohorte": {
      "4e_banksy_2026": {"vue": 28, "reussite": 17}
    }
  },

  "etat": "actif",
  "version": 1,
  "version_anterieure_id": null,
  "date_creation": "...",
  "date_modification": "..."
}
```

### Collections Firebase

- `questions` : la banque (cf. format ci-dessus)
- `student_responses` : append-only, un document par réponse, contient `student_id`, `question_id`, `session_id`, `correct`, `temps_reflexion`, `nb_changements_avis`, `mode_adapte`, `mode_defi`, `timestamp`
- `student_drill_state` : état Leitner par élève × question (champ `boite` 1-4, `prochaine_revue`)
- `student_sessions` : métadonnées de session (durée, nombre de questions, mode, abandon)
- `student_profile` : agrégats pour le miroir
- `class_settings` : leviers prof (chapitres débloqués pour révision, pondérations actives, suggestions en attente)

## RÈGLES DE WORDING TRANSVERSALES

1. Exigence + encouragement indissociables dans tout retour
2. Jugement sur le travail, jamais sur la personne
3. Pas de jargon des sciences cognitives côté élève
4. Français impeccable, syntaxe soignée, registre courant
5. Test du collégien (mots compris par un 4e moyen sans explication)
6. Tout "i" élève doublé d'un "i" prof, mêmes principes de langue
7. Vocabulaire technique en français standard côté prof aussi (banque, pas pool)

Tout dispositif pédagogique a une traduction visible côté élève via "i" cliquables expliquant le **bénéfice pédagogique** (jamais le bénéfice prof). Doublage par "i" prof dans l'admin.

## PHILOSOPHIE PÉDAGOGIQUE GLOBALE

- Le papier reste roi pour l'évaluation. La révision est numérique parce qu'elle bénéficie de l'adaptativité, de la disponibilité permanente, et de la collecte de données comportementales.
- Pas de gamification : les élèves de collège sont un public captif, pas un grand public à séduire. Ils ont besoin d'apprendre, pas d'être accrochés.
- Métaphore directrice : la montre connectée. Données = ressource personnelle de l'élève, pas surveillance. Affichées franchement.
- Le miroir élève vise la **calibration** (rapprocher la perception de soi de la performance réelle). Effet pédagogique le plus puissant documenté (auto-évaluation précise, Hattie d=1.33).
- L'exigence n'est pas la dureté ; l'encouragement n'est pas la complaisance. Les deux ensemble.

## CONTRAINTES DE WORKFLOW

- Pas de précipitation vers le code. Cadrage d'abord, code ensuite.
- Quand j'écris **R/A** à la fin d'un message : réponse concise et précise, puis attente.
- Réflexion en français, jamais en anglais.
- Méthode de travail : terse directive, fix racine jamais patch, vérification systématique de l'équilibrage des accolades après chaque modification, Python `data.replace()` avec byte strings pour les substitutions sûres dans des fonctions longues.
- **Toujours déployer sur GitHub Pages** pour tester (Firebase bloqué sur `file://`).
- Si je signale une contradiction avec le projet 1 ou avec un autre outil MJPC, l'expliciter plutôt que la masquer.
