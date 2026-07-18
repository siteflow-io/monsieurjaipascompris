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

## 9. LEÇONS TECHNIQUES TRANSVERSALES (à appliquer dans tout correctif)
1. **Ne JAMAIS faire de `content.replace` sur des patterns contenant des apostrophes françaises** — utiliser des échappements unicode ou remplacer par position.
2. **Les tests qui vérifient que les fonctions EXISTENT ne suffisent pas** — il faut simuler les actions et vérifier les effets.
3. **Les librairies minifiées (xlsx, jsPDF) contiennent des milliers de chaînes** qui matchent des patterns courants → toujours cibler les remplacements.
4. **`update()` plutôt que `set()`** pour toute écriture Firebase devant préserver les champs frères.
5. **`visualViewport.addEventListener('resize'/'scroll')`** est l'API manquante pour le pinch-zoom et le clavier mobile (fragilité du spotlight).
6. **Lister les cas limites AVANT de coder, les tester APRÈS** — pas de version dégradée.
7. **Le double parseur valide la syntaxe, jamais la sémantique** : seul un banc d'exécution sur données réelles attrape l'amputation, la fonction manquante, le format inattendu.
8. **Tout chemin d'activation doit être inventorié** avant de placer un appel (code tapé, `?mode=`, reprise localStorage, raccourci clavier, badge-tap) — deux incidents avant que la leçon devienne règle.
