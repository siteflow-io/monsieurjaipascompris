# MJPC — REGISTRE TECHNIQUE DES BUGS RÉELS DE L'ÉCOSYSTÈME
*Exhumé le 17/07/2026 des conversations de débogage (mars → juillet 2026). Chaque entrée : symptôme → cause technique exacte → correctif. Ce document est le CAHIER DES CHARGES DES TESTS du chantier Y : un test qui ne détecterait pas ces bugs-là ne vaut rien.*

**Règle fondatrice (Paul, 20/05/2026)** : « corrige les bugs que tu dis cosmétiques. Ce n'est pas à toi d'en juger. Je veux une app SANS bug, même "mineurs" selon toi. »

---

## 1. `grammaire_ch10` (5e Hergé + extension 4e) — 65 FIX, ~15 275 lignes
*Sources : conv. « Audit complet d'une application » (19/05, b174d111) et « Correction de bugs applicatifs urgente » (20-22/05, badbd224).*

### Bugs de visibilité et d'enchaînement d'écrans
- **Shunt 4e visible derrière le bilan** : `_guidedCallback` masque `#al3e-root` après chaque phrase ; à la dernière, `gfRunNext` appelle `showPhase1Results` SANS restaurer `display:block` → le quiz shunt reste affiché derrière l'écran de résultats. *Diagnostic forensique ; correctif dans `gfRunNext`.* **Suite de tests créée : `flow_end_visibility`, qui vérifie la VISIBILITÉ RÉELLE (`offsetHeight > 0`), pas la présence de la classe `.active`.**
- **`#al3e-root` recouvrant le bilan 5e/4e** (fixé v70) · **modale « Reviens » couvrant le bilan 4e** (fixé v71-A6) · **spotlight tuto restant visible** sur la phrase 1 du moteur 4e (fixé v70).
- **CSS** : chevauchement visuel `#al3e-root` / `#S12inner`. · **`sentence-card`** : `overflow:hidden` → `auto` (contenu coupé).

### Bugs de séquencement et de garde
- **`_alDrawBezierArrow`** : `position:relative` posé APRÈS le calcul d'`offsetParent` → flèche mal placée. *Ordre inversé.*
- **Guards null manquants** sur `alDoRappel`, `alCheckRappelNew`, `checkQP` : `document.getElementById('al-rq2').value` plantait si l'élève naviguait pendant la saisie.
- **Nettoyage de timer non null-safe** : `relectureIv`.
- **`tpJumpLecon`** : `_alBuildAllStates()` n'était pas appelé avant un saut admin vers `S12-lecon-*` → **INCIDENT RÉEL EN CLASSE : des élèves bloqués sur l'écran d'échec du shunt.**
- **Cold-start non détecté** avant `gfJumpTo('G1')` → le tuto spotlight ne se déclenchait pas.
- **Reset d'état incomplet** dans `gfJumpToP2C` et `gfJumpToBonus`.
- **Double-clic** non prévenu dans `gfShowTransition`.

### Bugs de validation (les plus graves pédagogiquement)
- **VALIDATION À VIDE SILENCIEUSE sur les 4 étapes d'analyse** : un élève validait sans rien avoir marqué, sans message → parcours entiers à 0. *Guard critique ajouté.*
- **Validation partielle** (Ex.1 bonus) : le test ne portait que sur `ralentit`, jamais sur `galopait` → bonus accordé à tort.
- **Score non capé** dans `showExChoice` : affichage de `pts > max`.
- **Total Phase 1 faux** : figé à 8 au lieu de `GF_SEQUENCE.length` (« x/8 » alors que 7 phrases faites).
- **Seuil visuel incohérent** : aligné à 15,5/20 sur **9 sites de comparaison** différents.

### Bugs du harnais de test lui-même (les plus insidieux)
- **`tpWaitForText` : sélecteur CSS invalide** → l'élément retourné était `body` ; `tpClickEl(el)` cliquait donc sur `body` = **no-op silencieux**. Conséquence : **des suites de tests qui faisaient l'inverse de ce qu'elles prétendaient tester.** *Correctif : parcours réel des enfants directs (algorithme « élément le plus profond contenant le texte »).*
- **`clickNext` déclarée deux fois** mot pour mot dans `tpAutoFillMotorStep` (copy-paste de refactor) : la seconde écrasait silencieusement la première.
- **`tpRunFullTest` (≈1021 assertions) ratait les bugs de transition** parce qu'il utilisait `tpGoTo` phrase par phrase au lieu de dérouler les flux EN CONTINU.
- **Le test panel existant de Paul n'avait JAMAIS été utilisé par Claude** (30+ raccourcis de navigation, `tpProfile` avec 3 parcours élèves automatisés complets, mode Turbo, snapshot) : Claude avait bâti un cadre parallèle à côté.
- **Doublons** dans `tpRunFullTest` · **`_tpProfJump`** ajouté pour supprimer la modale « Reviens » pendant la navigation prof.

### Bugs de code mort / parasites
- **Fonction ENTIÈREMENT MANQUANTE `updateEDCheckbox`** (appelée, jamais définie) → le warning « École Directe » ne disparaissait JAMAIS après confirmation. *Invisible en classe car le warning n'apparaissait que 2 s après l'envoi du PDF (`setTimeout 2000`), et les élèves fermaient avant.*
- Variable orpheline `CODE_LOCK` · entrées d'utilisateurs de test dupliquées · fonction morte `countVerbesConjugues` · **17 entrées répétées dans une regex de 812 alternatives** (dédupliquée par script) · `<option>` dupliqués refactorés en `<optgroup>`.
- **Parsing permissif** : `indexOf` remplacé par un parsing strict de `data-change`.
- Réponses placeholder visibles → remplacées par `…` et déplacées en `data-debug`.
- Fenêtre horaire d'école trop étroite (élargie 7h–18h) · espacement `\u00a0` dans l'affichage du score live.
- **Tooltips manquants** sur TOUS les boutons de palette (PSR, PSCc, PSCci, DPSCc, FPSCc, VC, PR, CDS, CDC, Ant., VCP) — les élèves ne comprenaient pas les abréviations.

### RÉGRESSION INTRODUITE PAR CLAUDE (à méditer)
- **FIX 64 corrige le FIX 42** : Claude avait inventé des variables d'état inexistantes (`bracketAssignments`, `paintAssignments`) — bug créé par le correcteur lui-même, découvert en séance réelle.

---

## 2. `ch16` — conjugaison 5e (Apps Script + Sheets)
*Source : conv. « Application pédagogique » (19/03, 095f9ddb).*
- **FILTRE ANTI-GROS MOTS — faux positifs massifs (CRITIQUE)** : `detectProfanity()` (L2204) sur la liste `GROS_MOTS` contenant « con » (L2178) ; `watchProfanity()` (L2215-2238) se déclenche sur l'événement `input` après 800 ms — donc **pendant** que l'élève tape « **con**ditionnel », « **con**jugaison », « **con**vaincre ». La protection existante échouait : `if(mot.length<=3){ if(lastWord.length>mot.length) return; }` → pour « con », `3 > 3` est **false**. **Des élèves bloqués en pleine séance** (S1, S3, S10 ; au moins 5 élèves Pythagore impactés).
- **Triple soumission Ex.6** : `vp()` (L1405) diffère la finalisation de 2 500 ms ; un reclic pendant ce délai déclenche `sendNotif` plusieurs fois.
- **Score du quiz absent** (« /26 » sans numérateur) : la notification n'envoie pas le score → impossible d'évaluer les 5e.
- **`score` undefined** pour un élève (race condition à la première utilisation du script).
- **« Recommencer » ne nettoie rien** : `goTo('S0')` laisse `scores`, `user`, `adapted` et `localStorage(SAVE_KEY)` → la progression précédente interfère.
- **Timer « maison » contournable** par simple refresh.
- **Double listener `visibilitychange`** (L2406 et L2411).
- **Format de date incohérent** dans le Sheet (français vs ISO selon saisie manuelle ou script).
- **Validations à vide acceptées** : un élève a produit 3 parcours entiers à 0.

---

## 3. `evaluation-qcm` — 17 bugs (12 critiques, 4 moyens, 3 mineurs)
*Source : conv. « QCM evaluation suite » (19/06, 05574666).*
- **`classe.slug` undefined dans `EleveBilan`** → **l'historique longitudinal MJPC était TOUJOURS vide** (le bilan promis n'existait pas).
- **Classe de test non filtrée en 5 endroits** distincts.
- **`ajouterClasse` réintroduisait les sexes M/F** dans `/classes` (données parasites après mutualisation).
- **Lectures de `classesData` au mauvais format** dans AppProf.
- **Export/import de snapshots ne couvrant plus `/classes`** après la mutualisation.
- **CHRONO — CLICS FANTÔMES (critique)** : les boutons de réponse n'étaient pas verrouillés côté tablette quand le temps expirait avant la propagation Firebase. **Cas réel : Maëva voyait ses clics acceptés visuellement, sa réponse n'était jamais enregistrée.** *Fix : `chronoRestant` intégré au calcul de `peutRepondre`, attribut `disabled`, et 4 messages de feedback distincts selon l'état.*
- **`width:100vw` au lieu de `100%`** dans VueBoard : la liste des élèves cachait la question.
- **Blocage en phase de correction** : usage de `qIdx` au lieu de `correctionIdx` (VueBoard ET VuePhone).
- **Champ `explication` silencieusement abandonné** par `parseEvaluation`.
- **Recalcul RÉTROACTIF des scores** quand une éval est modifiée après la session : les résultats de la veille devenaient faux (incident réel).

---

## 4. `correction_dictee` (la souche)
*Sources : conv. « Analyse d'un fichier HTML React » (14/04), « Suite de l'analyse HTML React » (15/04), « Application de correction de dictée manuscrite » (03/06).*
- **XSS théorique** (Bug #8, L5395) : `item.phrase` injecté dans le HTML sans escape avant le `replace(/___/g, …)`.
- **Couleur de validation prof** : un mot ajouté manuellement s'affiche en rouge au lieu de violet — la condition de style ne distingue pas `isAdded` de `hasErr`.
- **Fausses erreurs en production (incident réel de dictée)** : la ponctuation dans l'alignement et `ADAPTED_WORDS` généraient des « erreurs fantômes » sur les copies ; absents non gérés en Firebase. *Conséquence : correction faussée le matin même, et un travail de nettoyage par injection JSON.*
- **Les tests vérifiaient la logique métier mais pas le rendu visuel** (styles, couleurs, classes CSS) — constat explicite de la roadmap d'avril.

---

## 5. `analyse_logique` / outil de flèches
*Source : conv. « Reprise de l'outil d'analyse logique » (09/03).*
- **Flèches aplaties** : SVG de 40 px de haut pour des arcs nécessitant 80-100 px. **« Comment les autotests laissent passer ça ? »** → parce qu'ils vérifiaient le scoring (`sourceWord`/`targetWord`) et **jamais le rendu visuel**.
- **Étape validée avec une double flèche bleue** (validation acceptant un état incohérent).
- **Flèches dorées sorties du conteneur scrollable** (corrigé par `#correction-card-wrapper` en `position:relative`).
- **Gap de 5 mm** : `baseAY` ancré à `boxY + arH - 1` au lieu de `wordTop - 4`.

---

## 6. `worktrack` (plan de travail)
*Source : conv. « CORRECTIF DES APPS » (06/06, ed10f6d9).*
- **QCM sans mélange des choix : la bonne réponse est TOUJOURS en position `[0]`** → la seule note de l'app était triviale à obtenir. *Défaut confirmé par lecture de code sur 3 231 lignes.*
- **Absence totale de corrigé question par question** pour le travail rédigé.

---

## 7. `reecriture` / `reecriture_bb4e`
*Sources : conv. « appli réécriture » (22/05) et Phase 1 MJPC 6 (15/07).*
- **`ifo()` défini avec son CSS mais JAMAIS APPELÉ** : les cercles ⓘ n'existaient nulle part ; seuls restaient des `title:` HTML invisibles sur mobile.
- **Élèves invisibles après mutualisation** : `fbE.length` juste sur l'ancien format tableau, `undefined` sur le format canonique → listes vides (bug ZNIDI Iyad, 29+28 élèves).
- **Système de snapshot mort** : défini, jamais monté (reecriture) — sûr dans bb4e.

---

## 8. Bugs d'infrastructure et de données (transversaux)
*Sources : MJPC 4 (13/07), Phase 1 et 2 de MJPC 6 (14/07).*
- **Set destructif sur `/classes` racine** : `classesStore.save = ref("classes").set(m)` dans worktrack — **le pattern même de l'incident de juin qui a rasé le hub**. Déclenché par « Enregistrer la classe ».
- **Clés élèves dégradées** : normalisation sans décomposition des accents (`CLÉMENT` → `cl_ment`, d'où `CL_MENT_Lylou`) — origine identifiée dans `eleves_index` d'index.html.
- **Mot de passe prof dans `debats/*/meta`** : une purge naïve aurait enfermé Paul dehors.
- **Nœuds orphelins** : `results` (clés d'un format ancien, aucune app ne l'écrit), `applaudimetre/classes` (résidu d'avant mutualisation), `MONSIEUR_Meney` (compte de démo hors format), `dictee_settings` (hors manifeste, découvert en M6).
- **Régression par regex trop large** : un remplacement destiné à 6 champs inline en a touché 12, dont une règle CSS **élève** (`.reform-card textarea`) — attrapée à la vérification (M5ter, 17/07).
- **Fichier syntaxiquement parfait mais amputé** : un regex non-greedy a mangé la moitié du socle inséré ; le double parseur n'a rien vu, **seul le banc d'exécution l'a attrapé** (Phase 1, incident n°1).

---

## 9bis. `dictee_5e_herge_ch4` puis `dictee_universelle` — LA PLUS RICHE (~9 200 lignes)
*Sources : « Adaptation de dictée pour classe de 5e » (10/04, 25b5469d), « Analyse d'un fichier HTML React » (12-14/04, ae922645), « Dictée universelle à intégrer à MJPC » (08/05, 7c23c455), « Débogage de dictée universelle » (10/05, 1d3621ce).*

### Alignement et tokenisation (source de FAUSSES ERREURS sur copies réelles)
- **`normalizeQuotes` transformait `«` `»` en `"` AVANT l'alignement Levenshtein** → cascade de décalages → des mots correctement écrits (« Les ») signalés comme erreurs.
- **Ponctuation collée** : un correcteur tapant `danger.Quand` produit UN token, alors que la référence a `danger.` + `Quand` → décalage de tout l'alignement.
- **Copies adaptées alignées par Levenshtein** au lieu d'un zip positionnel (même longueur) : Levenshtein optimise la distance globale et **décale les positions**.
- **Accents rejetés** : « bonté » refusé en autocorrection parce que l'erreur simulée stockait `correct: a.refWord` **avec la ponctuation attachée** (« bonté. ») au lieu de nettoyée.
- **Apostrophes** : comparaison `typed.toLowerCase()===refW.toLowerCase()` sans normalisation des apostrophes typographiques.
- **`countWords` compte les tokens de ponctuation** : 82 mots affichés pour un texte de ~79.
- **Conséquence réelle** : *une correction de classe faussée le matin même* — « l'appli a produit des fausses erreurs à cause de bugs techniques (ponctuation, ref adaptée) », nettoyage a posteriori par injection JSON.

### Écritures Firebase destructives ou incomplètes
- **`set()` au lieu d'`update()`** dans `DictSubmit` → **les bonus étaient écrasés**.
- **`ProfConfig` en `set()`** → écrasait `config/live`.
- **Contestations acceptées ne mettant à jour NI `errors[]`, NI `noteAvecBonus`, NI `errG/L/P/O`** : la décision du prof n'avait aucun effet sur la note.
- **`nErrors` stocké de façon incohérente** selon les chemins.
- **`ProfStats` et le dashboard lisaient `note` brut au lieu de `noteAvecBonus`** → notes affichées fausses.
- **`ProfSim.runSim` efface TOUT avant de simuler** (`resultsRef.remove()` + toutes les autres refs) **sans confirmation spécifique** : lancer la simulation après une séance réelle DÉTRUIT les données réelles.
- **Données Firebase résiduelles** (`autocorrect/`, `correction/`) persistant entre deux simulations → **les élèves voyaient des mots déjà corrigés**.
- **Import d'un snapshot par le mauvais bouton** → structure Firebase corrompue (tout imbriqué sous `/results/`).
- **TTL de verrou absent** · **unicité des codes élèves non garantie**.

### Concurrence et état
- **Race condition dans `decide()`** (décisions de contestation) → corrigée par sérialisation des promesses par élève.
- **Perte d'état React au changement d'onglet** (interne ou navigateur) : `journal`, `summary`, `running`, `simDecisions` étaient locaux à `ProfSim` et perdus à l'unmount → **tous remontés dans le parent `ProfPanel`**.
- **Absences non propagées en temps réel** : `absents` en `useState` local dans `App` → le prof marque un absent, les autres tablettes ne le voient pas ; l'absent reste dans le `<select>`.
- **Verrou d'un correcteur absent non nettoyé** → **correcteur bloqué indéfiniment** (cas RAGUENEAU Jules, vu en base).

### Données de test et codage en dur
- **`SIM_ERROR_BANK` contenait les indices d'une ANCIENNE dictée** (`idx:1`, `idx:57`, mots « parent, », « année », « boche ») sans rapport avec le texte courant → **les erreurs injectées ne correspondaient pas au texte**.
- **`29` codé en dur** dans le compteur du dashboard au lieu de `ELEVES.length`, numérateur non filtré **incluant la paire de test**.
- **Mapping de codes incohérent** : `catCode` utilisateur (`G-ACC`, `L-ORT`) vs codes fins (`G1`, `L1`) → **popups affichant « aucune erreur » alors que le compteur en annonçait 2**.
- **Simulation divergeant du flux réel** : `computeDicteeScore` et `computeBonus` n'étaient PAS utilisés par la simulation → elle ne testait pas ce qui tourne en classe.
- **Wording élève** : « faux positif » dans la légende — incompréhensible pour des 5e.
- **Code mort volumineux** : composants QCM entiers (`Correction`, `QInput`, `Results`) inutilisés.

---

## 9ter. `index.html` — LE SITE MJPC
*Source : « MJPC code 1 » (01/06, f0c1392c) et Phases 1-2 de MJPC 6.*
- **CRASH SILENCIEUX du rendu des chapitres** : des entrées `null` dans les données Firebase faisaient échouer `data[a].ordre` dans un `Array.sort` → `renderChapitres` mourait **avant** d'atteindre le bouton « + Nouveau chapitre » (donc bouton invisible, sans erreur visible). *Correctif : `sanitizeChapitres` récursif au chargement + null-safety sur les **neuf** `Object.keys(...).sort()` lisant `.ordre`.*
- **État d'accordéon perdu à chaque re-render** → objet persistant `UI_OPEN` clé `level::chnum`.
- **Numérotation trompeuse** : chapitres/séances numérotés selon les éléments VISIBLES (publiés) et non leur position absolue → publier le chapitre 4 sur 8 affichait « 1 ».
- **Suppression d'élève sans archivage** (L2120) : retire de la classe + DELETE le code, sans corbeille — porte centrale où aboutissent tous les renvois.
- **Slug élève sans décomposition des accents** (L1807) → source de TOUTES les clés dégradées de l'écosystème (`CL_MENT_Lylou`).

---

## 9quinquies. `applause_meter` — L'APPLAUDIMÈTRE (~3 474 lignes)
*Sources : « applaudilec 1 » (04/06, c0fb9340) et « Applaudilec 2 » (19/06, c628249d). Bugs découverts par CLAUDE en analysant les ARCHIVES JSON d'une séance réelle (4e PYTHAGORE) — Paul ne les avait pas signalés.*
- **4 PASSAGES FANTÔMES** créés au démarrage de la séance **sans lecteur désigné** — dont un portant des données de courbe live.
- **Barres résiduelles (« trailing bar »)** : après un passage, les barres continuaient de monter jusqu'à 38 **sans aucun lecteur assigné**.
- **`critereIdx: 0` systématique dans TOUS les checkpoints** : seul le critère c0 était jamais enregistré, alors que les autres franchissaient le seuil. *Bug silencieux : les données existent, mais elles sont toutes fausses.*
- **Champs `startsAt` et `nbLignes` manquants** dans les passages archivés.
- **File d'attente persistant entre les CLASSES** : `/file` et `/compteurLectures` n'étaient nettoyés dans aucune des trois fonctions concernées (`setClasse`, `demarrerSeance`, `deconnexionGlobale`) → une classe héritait de la file de la précédente.
- **« Tu es le prochain » persistant** après désistement solo.
- **Overlay de pause en position absolue cassé** → remplacé par une branche `paused` dédiée dans le rendu.
- **`modeSpontane` défaultant potentiellement à `true`**.
- **Champ de saisie bloqué, spécifiquement sur écran téléphone**.
- **Le tableau n'atteint jamais 100 %** (problème d'agrégation) — *différé, non résolu*.
- **BUG NON RÉSOLU `Cannot read 'slice'`** : deux blocs de débogage laissés EN PRODUCTION pour le traquer — un `window.onerror` peignant **une bannière rouge plein écran** (L706-752) et un `ErrorBoundary` React (L3433-3469).
- **RÉGRESSION STRUCTURELLE MAJEURE (19/06)** : le refactor du 4 juin **n'était pas dans le fichier de production** — `PROF_CODES` absent (codes en dur dans `CodeGate` L3376), CSS mort `.board-pause-overlay`, `renderPhase()` présent dans `EleveVote` mais pas dans `VueBoard`. *Soit la version refactorée n'a jamais été déployée, soit le travail a continué sur la branche d'avant — dans les deux cas, un travail entier perdu ou dupliqué.* **→ D'où la règle actuelle de vérification bit à bit après chaque push.**

---

## 9sexies. `etude_dugain` / `redaction_dugain` (les futures universelles)
*Source : « appli étude de texte » (03/06, ad98f27e).*
- **Navigation Backspace** ramenant trop loin (ne repassait pas par le sous-focus « langue »).
- **5 bugs dans le basculement « Réponse non rédigée »**, dont `interroAnswer('transition-next')` **ignorant complètement l'état `nonRedigee`**.
- **Scoping DOM dangereux** : `document.querySelector` pouvait patcher **le mauvais conteneur** quand `#main` et `#diapo-body` coexistaient.
- **Bascule diapos → interrogatif** repartant toujours à Q1 au lieu de respecter la question courante.
- **INCIDENT PÉDAGOGIQUE RÉEL** : les fiches de diagnostic HTML distribuées aux élèves **affichaient la note pour les élèves ayant beaucoup d'erreurs de langue** (via la simulation DNB) **et pas pour les autres** → confusion en classe, correctif d'urgence (bascule « 🔒 Cacher notes » persistante). *Leçon : tout affichage conditionnel doit être testé sur les DEUX branches, avec de vraies copies.*

---

## 9quater. LES FAUSSES PISTES DE DIAGNOSTIC (erreurs de Claude, à ne pas répéter)
*Ces épisodes ont coûté des sessions entières.*
1. **`permission_denied at /dictees`** : Claude a diagnostiqué « c'est le protocole `file://` » ; Paul a recadré (« ça marche toujours en file:// pour cette app, cherche le bug dans le code ») ; Claude est reparti sur une **seconde** fausse piste (lecture racine). **Cause réelle : l'expiration des règles Firebase** — rien à voir avec le code ni le protocole. *Leçon : ne jamais attribuer une erreur à l'environnement sans preuve ; vérifier d'abord l'infrastructure (règles, quotas, dates d'expiration).*
2. **« Les données sont perdues ! »** (app rucher) : la panique était injustifiée — les données étaient sur Firebase, seule la synchro était lente. *Leçon : distinguer « absent » de « pas encore chargé ».*
3. **Classement « cosmétique vs bloquant »** : Claude avait laissé 7 points « cosmétiques » non corrigés ; Paul a exigé leur correction — l'un d'eux cachait un **vrai** bug (`updateEDCheckbox` manquante).
4. **Confiance en une représentation** (13/07, trois incidents le même jour) : croire un export, le dépôt GitHub ou un résumé plutôt que le système lui-même. → Règle : **« Ne jamais affirmer un comportement sans l'avoir lu dans le code ou vu dans les données. »**

---

## 9. LEÇONS TECHNIQUES TRANSVERSALES (à appliquer dans tout correctif)
1. **Ne JAMAIS faire de `content.replace` sur des patterns contenant des apostrophes françaises** — utiliser des échappements unicode ou remplacer par position.
2. **Les tests qui vérifient que les fonctions EXISTENT ne suffisent pas** — il faut simuler les actions et vérifier les effets.
3. **Les librairies minifiées (xlsx, jsPDF) contiennent des milliers de chaînes** qui matchent des patterns courants → toujours cibler les remplacements.
4. **`update()` plutôt que `set()`** pour toute écriture Firebase devant préserver les champs frères.
5. **`visualViewport.addEventListener('resize'/'scroll')`** est l'API manquante pour le pinch-zoom et le clavier mobile (fragilité du spotlight).
6. **Lister les cas limites AVANT de coder, les tester APRÈS** — pas de version dégradée.
7. **Le double parseur valide la syntaxe, jamais la sémantique** : seul un banc d'exécution sur données réelles attrape l'amputation, la fonction manquante, le format inattendu.
8. **Tout chemin d'activation doit être inventorié** avant de placer un appel (code tapé, `?mode=`, reprise localStorage, raccourci clavier, badge-tap) — deux incidents avant que la leçon devienne règle.
