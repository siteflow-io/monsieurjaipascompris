# MJPC 6 — DOCTRINE DU SITE
> Écrit le 20/07/2026 à la demande de Paul, à l'issue d'une discussion de conception menée après l'ARRÊT DE TOUT DÉVELOPPEMENT. **Ce document est la partie qui manquait au plan** : l'existant du site réinterrogé, et ce qu'il doit devenir. Il se lit avec `MJPC6-audit-ergonomie.md` (les doublons d'interface) et `MJPC6-audit-existant.md` (les huit illogismes).
>
> **Le constat qui fonde tout, dans les mots de Paul** : *« Chaque app a été durcie une par une ; le hub qui les rassemble est resté celui d'avant. »* Le site a distribué une doctrine aux applications sans se l'appliquer à lui-même. Ce chantier n'est donc pas une refonte : c'est un **rattrapage**. Le site doit se conformer à ce qu'il a lui-même écrit.

---

## I. LES TROIS AXES — sortir de la confusion des « modes »

Quatre « modes » coexistaient (élève, prof, dev, profil-test) en mélangeant trois choses indépendantes. Séparées, elles se tiennent :

**① QUI JE SUIS — l'identité.** Prof ou élève. Posée une fois à la connexion, elle ne change plus. Elle donne les droits, et c'est elle que les applications lisent pour le bypass.

**② CE QUE JE VOIS — la vue.** L'**envers** (administration : publier, régler, éditer) ou l'**endroit** (le site tel que l'élève le reçoit). **C'est la bascule `Ctrl+Espace`**, et elle n'appartient qu'au prof : un élève est toujours à l'endroit, il n'a pas de bascule.

**③ CE QUI S'ENREGISTRE — le mode test.** Orthogonal aux deux autres. On peut être prof à l'envers en mode test, ou prof à l'endroit en mode test. Rien ne part au hub.

**Ce que cela supprime** : `DEV_MODE` et ses deux entrées parallèles, la classe fictive `'DEV'`, le mode profil-test comme état séparé, et le bug `if(!DEV_MODE)` qui neutralisait `activateAdmin`.
**Ce que cela préserve** : `loginAsProf()` et `is_prof` — déjà présents, déjà exploités à douze endroits (accès à tous les niveaux via `isAllAccess`, exemption de `BLOCKED_LEVELS`, présence, notification, pas de sondage d'intention).

### L'identification prof
Formulaire à **deux champs** : nom et prénom (« Monsieur MENEY ») + code (« 1312 »), dans un `<form>` avec `autocomplete="username"` sur le premier et `type="password" autocomplete="current-password"` sur le second — **c'est cette structure, et elle seule, qui déclenche l'enregistrement par le navigateur**. Le code prof joue le rôle du mot de passe, ce qu'il est déjà en pratique. Paul ne doit plus le retaper.

### La bascule et le point de vue
**`Ctrl+Espace` ne pose JAMAIS de question.** Usage réel énoncé par Paul : *« ce Ctrl+Espace me sert surtout quand je publie un chapitre et que je veux voir à quoi ça ressemble côté élève, sans me fatiguer à passer par un flux complexe. »* Un sélecteur qui s'interposerait trahirait cet usage.

Le **point de vue** est donc un RÉGLAGE, pas une étape — mémorisé d'une bascule à l'autre, modifiable quand on veut. Trois valeurs :
- **Fantôme (défaut)** — voit tout ce qui est publié pour au moins une classe. Répond à « est-ce que ça s'affiche ». N'éprouve pas le filtre par classe, par construction.
- **Une classe** — voit exactement ce que voit cette classe. Répond à « ai-je publié pour les bons ». *C'est le seul point de vue qui aurait attrapé le bug de la clé `4E BANKSY` / `4e_banksy`.*
- **Un élève nommé** — ajoute le personnel : « Mes dictées », « Mes évaluations » avec de vraies données.

**Le point de vue est PARTAGÉ entre les deux vues** : la vue envers l'utilise comme loupe de publication (`ADMIN_LENS` et `_isPubAny` existent déjà et font exactement cela), la vue endroit comme incarnation. **Un seul concept, pas deux.**

### Le fantôme n'est pas « personne », il est « tout le monde »
Précision de Paul, essentielle : en fantôme, les **zones personnelles ne disparaissent pas** — elles affichent **l'annuaire des élèves rangés par classe**, et chaque nom est une porte. C'est la section « Élèves & codes » du panneau, vue de l'endroit : **une seule liste, un seul composant, deux côtés**.

### Le bypass souverain
La session prof autorise à ouvrir n'importe quelle identité sans son code — même mécanisme que le bypass élève, mais de portée supérieure : l'élève n'atteste que de lui-même, le prof atteste de qui il veut.

**Il est EN LECTURE par défaut.** Tout ce qui écrirait est visible mais inerte, avec un témoin explicite : « tu regardes le profil de DUVACHER Lou · **lecture seule** ». Agir exige un **second geste nommé** : « Agir en tant que cet élève ».

**Deux raisons, et la seconde n'est pas technique.** ① Le principe cardinal et P2 s'y opposeraient : un professeur explorant un profil ne doit jamais y laisser de trace involontaire. ② **Usage en rendez-vous parents, énoncé par Paul** : le témoin « lecture seule » montre à la famille que le professeur n'a pas la main sur les données pendant l'entretien. **Conséquences de cet usage** : le témoin doit être lisible par quelqu'un qui ne connaît rien au système (« Lecture seule » en toutes lettres, pas un liseré coloré) ; le bouton d'action doit être hors de portée d'un clic accidentel, avec confirmation ; et **le profil élève devient un document qu'on montre**, ce qui change ce qu'on y met.

### Les témoins visuels — trois signaux, trois sens
**Liseré ambre** = tu es à l'envers · **bandeau discret** = tu vois le site comme *3E Charles de Gaulle* · **point orange** = mode test. Jamais confondus.

---

## II. LE MODÈLE — ce qu'est un objet

Les items portent aujourd'hui `kind` (type technique : `dictee`, `qcm`) et `source` (`firebase_app`, `drive`). **Aucun ne dit la nature pédagogique.** C'est le manque le plus structurant : sans lui, aucun filtre ne peut distinguer une dictée coévaluée d'une dictée d'entraînement.

**`nature: "ressource"`** — n'appartient à personne (fiche, cours, exercice ou dictée d'ENTRAÎNEMENT). Se navigue librement, **descente comprise**, se refait autant qu'on veut.
**`nature: "acte"`** — s'est produit une fois, avec une classe, à une date (dictée COÉVALUÉE, évaluation, débat). **Précision de Paul** : *« une dictée coévaluée ne peut pas être refaite au sens où tu l'entends. Une dictée d'entraînement oui. C'est pour ça qu'on a mis en place le libellé qui distingue bien ce qui est de l'entraînement de ce qui fait partie de la progression d'une classe. »* Le libellé porte déjà la distinction ; le modèle de données doit la porter aussi.

**La conséquence se déduit, elle ne se déclare pas** : un acte engendre des **traces nominatives** (copie, note, erreurs). Elles ne sont jamais navigables — elles s'atteignent par l'identité, dans l'app, via « Mes… ».

**Valeur par défaut pour l'existant : `"acte"`** — un acte pris pour une ressource s'exposerait ; une ressource prise pour un acte se cache seulement.

### Les niveaux inférieurs — ne pas cantonner l'accès, cantonner le nominatif
`levelAccess = {'3e':['3e','4e','5e','6e'], '4e':['4e','5e','6e'], '5e':['5e','6e'], '6e':['6e']}` : la descente est **voulue et codée**. Elle ne doit pas être supprimée — c'est le principe de la remédiation et le socle de L'Atelier.
**Règle** : *le personnel se filtre toujours sur l'IDENTITÉ, jamais sur le LIEU.* Un élève de 4e qui descend en 5e reste un élève de 4e : il voit les ressources de 5e et **aucun objet nominatif**, ni de 5e ni de 4e.
**Corollaire** : le niveau est un LIEU, pas une identité. `TRACK.eleve.niveau` et `clickedLevel` peuvent diverger aujourd'hui sans garde-fou — c'est ce qui a produit « QCM ouvert en 3e affichant 4E BANKSY ».

### Les niveaux en série
**Directive de Paul** : *« les niveaux doivent hériter des mêmes fonctionnalités tous en même temps. Si je peux publier un chapitre en 3e, je dois aussi pouvoir publier un chapitre en 4e 5e 6e. On ne code pas niveau par niveau, mais en série. »*
État constaté : **six listes `['3e','4e','5e','6e']` écrites en dur** et trois comparaisons de niveau. Traduction : **une seule source des niveaux**, aucune capacité codée pour un niveau particulier.
**Et** : 5e et 6e bloqués pour les élèves ne signifie pas bloqués pour le professeur — `openLevel` exempte déjà `is_prof`, `initHome` donne déjà `isAllAccess`. Acquis, à préserver.

---

## III. LA PUBLICATION — une seule forme

Trois formes coexistent aujourd'hui, **dans les données réelles de Paul** (`published: true` et `published: {"3E Charles de Gaulle": false}` sur des séances voisines du même niveau).

**Forme canonique : l'objet par classe.** `published: { "<slug>": true }`. C'est la seule qui exprime le geste réel.
**`published: true` conservé EN LECTURE** = publié pour toutes les classes du niveau. Le supprimer casserait les publications existantes.
**La clé est le SLUG** — un nom de classe se renomme, un slug est stable, et le reste du chantier l'emploie. Avec **tolérance de lecture des deux formes pendant la transition**, sans quoi les publications actuelles disparaîtraient d'un coup.
**Une seule fonction écrit (`_markPub`), une seule lit (`isPubFor`).** **INTERDICTION** : plus aucun code ne teste `.published` directement — c'est ce test brut, dans `collectChapterItems`, qui a produit l'illogisme I1 (un objet est toujours vrai en JavaScript, donc le filtre laissait tout passer dans les six onglets).
**`published_tabs` est autre chose** (tableau d'onglets en `/site/<niveau>/published_tabs`) : traité séparément, jamais mélangé.

---

## IV. LE PROFIL ÉLÈVE — un objet, deux vues, dont l'une différée

**Même source** : les deux vues lisent les mêmes nœuds. Pas de nœud « profil » d'un côté et « suivi prof » de l'autre — ils divergeraient en semaines.
**Même arborescence** : rubriques identiques, mêmes noms, même ordre. Quand Paul dit « regarde dans tes dictées, la troisième », l'élève voit ce que Paul voit. **Les libellés élève restent les libellés élève.**
**La vue prof AJOUTE** — sur-ensemble strict : des zones absentes côté élève (annotations, observations internes, historique de correction) et des détails supplémentaires dans les zones communes (« Terminée » côté élève ; « Terminée · rendue le 12/06 · corrigée le 15/06 · 3 tentatives » côté prof).
**INTERDIT** : contredire ce que voit l'élève, réordonner, renommer. Sinon le rendez-vous parents devient impossible.
**Vérifiable mécaniquement** : chaque rubrique visible côté élève doit exister côté prof, au même rang, avec le même libellé. Un écart est un défaut, pas une variante.

### L'état réel ET l'état perçu
Quand ce que voit l'élève est *vrai mais incomplet* — « pas encore corrigée » alors que Paul a corrigé sans publier — la vue prof montre **les deux** : « Corrigée le 15/06 · **l'élève voit encore : pas encore corrigée** ».
**Usage énoncé par Paul** : *« ça permet de montrer au parent et à l'élève que ce qu'il prend pour du "non travail de prof" est en fait fait et à jour, mais qu'il ne le voit tout simplement pas encore. »*

### Correction apportée après relecture du plan
Le plan prévoit que **le profil ne s'ouvre PAS d'emblée aux élèves** : *« le miroir arrive quand la matière existe »*, avec **un interrupteur de visibilité par niveau ou par classe — « exactement le même principe que la publication des chapitres »**. Donc : un objet, **deux vues dont l'une est différée et publiable**. L'arborescence commune se conçoit dès maintenant, même invisible, sinon la vue prof prendra des libertés qu'il faudra défaire.
M15 est plus vaste qu'un profil : c'est **« Mon année »**, avec le **calendrier de l'élève** (idée de Paul du 18/07).

### Montrable / interne
Le profil devenant un document qu'on montre, distinguer ce qui est **montrable** (progrès, notions, copies de l'élève) de ce qui est **interne** (annotations, observations du professeur). Le second existera ; mieux vaut prévoir sa place que le laisser se mélanger.

---

## V. OÙ VIVENT « MES DICTÉES », « MES ÉVALUATIONS »

**Le profil affiche l'ÉTAT, l'app affiche le CONTENU.**
Le profil répond à « où en est-il ? » — vue longitudinale transversale qu'aucune app ne peut donner. L'app répond à « que fait-il maintenant ? » — le lieu du travail.
Exemple : « Dictée du 12 juin · corrigée · 14/20 · 3 erreurs restantes » dans le profil ; le texte, les erreurs et le clavier dans l'app.
**Pourquoi pas autrement** : un profil qui ne ferait que renvoyer obligerait à ouvrir cinq applications en rendez-vous parents ; un profil qui afficherait tout dupliquerait « Mes dictées » et l'un des deux filtres divergerait.
**Bénéfice non prévu** : le profil reste consultable même si une app est en panne, puisqu'il lit des états agrégés. Sert la règle « app par app si MJPC plante », dans l'autre sens.

---

## VI. LE BYPASS — ce qui existe déjà, et ce qui manque

**Vérifié dans les trois apps** : `lireSessionMJPC(ttlMs)` lit `mjpc_eleve` (sessionStorage + localStorage), TTL **12 h**, l'app **LIT et n'écrit jamais**, session invalide ou périmée → **portail natif** (autonomie préservée), et `validerEleveMJPC` **revérifie l'identité contre le registre `/classes`** — la session est attestation, pas preuve.
**`if(s.is_prof===true)` est DÉJÀ dans le contrat** : le bypass prof est prévu. Le site écrit la session par `_writeSharedSession`, `is_prof` compris.
**Ce qui manque, et c'est le seul ajout nécessaire** : la session ne dit pas **ce qu'elle autorise**. La distinction lecture / action doit voyager avec elle, sinon l'app ne peut pas la respecter.
**Jamais dans l'URL** : `?mode=prof` est déclaratif, donc falsifiable par un élève qui tape l'adresse.

---

## VII. LES SORTIES — toute sortie ramène à un état nommé

**Quitter le mode test** : ne touche ni l'identité ni la vue.
**Quitter la vue endroit** : ne touche ni l'identité ni le point de vue — c'est ce qui rend la bascule utilisable en boucle.
**Quitter l'incarnation d'un élève** : ramène au point de vue précédent (la classe), pas à l'accueil.
**Se déconnecter** : efface tout. Seule sortie qui remet à zéro, et elle est explicite.
**Corollaire** : aucun chemin ne doit laisser deux identités coexister. Avec une identité unique et des modificateurs séparés, l'état « Lou DUVACHER *et* administrateur » devient impossible **par construction, pas par vigilance**.

---

## VIII. CE QUI DOIT VIVRE DANS FIREBASE

**Le critère** : *ce qui change au rythme de la vie de professeur vit en base ; ce qui change au rythme du code reste en dur.*

**À migrer, par ordre d'urgence** :
- **`PROF_CODES = ['1312','3141']`** — écrit en clair dans une page publique, donc lisible par tout élève qui affiche le source ; et le changer exige aujourd'hui une livraison. La migration ne le rend pas secret (M-SÉCU s'en chargera) mais rend le contrôle.
- **`BLOCKED_LEVELS`** — quels niveaux sont ouverts aux élèves : change au rythme de la préparation. Paradoxe actuel : le Tableau de bord l'AFFICHE comme un état vivant mais on ne peut pas le modifier.
- **`PUBLISHABLE_TABS` + `TAB_LABELS`** — les six onglets et leurs libellés. **Ces mots sont lus par les élèves** : le point 26 du plan exige que tout texte élève soit éditable ; ceux-là y échappent alors qu'ils sont les plus visibles du site.
- **La liste des applications** — sinon ajouter L'Atelier ou le profil exigera une livraison rien que pour l'inscrire ; d'autant que les vraies icônes arrivent.
- **`REGLES_JOURS`, `CLASS_PALETTE`** — petits réglages du même ordre.

**À garder en dur** : `FIREBASE_BASE` (ne peut pas être dans ce qu'elle sert à lire) · `APP_VERSION` (identifie le fichier) · le socle MJPC (manifeste, purge : solidaire du code) · **`levelAccess`** — non par principe technique mais parce que c'est une **décision pédagogique structurante**, qui mérite d'être discutée et livrée, pas modifiée d'un clic un soir de fatigue.

**La règle qui va avec** : **tout ce qui migre garde un défaut en dur.** Si Firebase ne répond pas, le site démarre quand même. C'est le motif déjà éprouvé pour les dates de brevet (valeur en dur + surcharge en base) : il suffit de l'étendre.

---

## IX. L'ÉDITABILITÉ — l'interface dit la vérité sur l'architecture

**Sept `prompt()` du navigateur** subsistent (nouveau chapitre, nouvelle séance, nouvel item, renommage de titre, d'image, de classe). Boîte grise hors charte, impossible à styler, et sur téléphone elle prend tout l'écran.

**Directive de Paul** : le titre reste affiché, avec un **« 🖊️ modifier » discret, en italique, à côté**. Et **cela vaut pour tout ce qui vit dans Firebase, donc éditable par nature** — côté prof uniquement.

**Conséquence remarquable** : ce qui n'a pas de poignée est en dur, donc exige une livraison. **L'interface devient lisible comme une carte de l'architecture.**

---

## X. LE DRIVE — pourquoi le profil Google change tout

**Problème énoncé par Paul** : *« selon le profil gmail sur lequel je suis dans mon navigateur, ça sélectionne le drive du moment, et non pas un drive défini. »*

**Cause établie, et elle n'est pas dans le code** : aucune URL du site ne porte d'index de compte (`/u/0/`, `/u/1/` : zéro occurrence). Les adresses sont neutres (`drive.google.com/file/d/<id>/preview`). **C'est Google qui les résout avec le profil actif du navigateur** : un fichier partagé au seul compte propriétaire est invisible depuis un autre profil.
**Le dépôt, lui, est stable** : il passe par l'Apps Script, donc toujours le même Drive.

**Issue retenue** : partager les documents en **« toute personne disposant du lien »** — ils deviennent indépendants du compte. C'est déjà ce que fait la vignette `lh3.googleusercontent.com`, qui fonctionne sans authentification. (Firebase Storage serait plus cohérent mais c'est un chantier entier ; forcer un compte dans l'URL ne marche pas de façon fiable.)
**Réserve, qui rejoint la doctrine du II** : le partage par lien convient aux **ressources** ; **jamais** à un document nominatif — une copie d'élève sur un Drive public serait accessible à qui devine l'identifiant.

---

## XI. L'APPS SCRIPT — correction d'une proposition antérieure

Ce que `sendToBackend` envoie à chaque ouverture et fermeture de document : `{action, session_id, eleve: display, classe, niveau, chapitre, document, type_doc}`, plus les durées et le défilement — donc **le nom de l'élève, sa classe, ce qu'il ouvre et combien de temps il y reste**, vers un Google Apps Script, en `mode:'no-cors'` (aucun retour lisible, aucune erreur visible), et par `sendBeacon` à la fermeture (part même si la page se ferme).
**CORRECTION** : la conscience avait proposé de le retirer s'il ne servait plus. **C'est faux — le même Apps Script fait le tracking ET l'upload des fichiers.** On ne peut pas le retirer : seulement décider ce qu'il a le droit d'envoyer.
**À instruire avant la rentrée** : qui lit encore l'autre bout, et quelles données sont légitimes.

---

## XII. CE QUI RESTE À TRANCHER
- La **nature par défaut** des items existants (proposition : `"acte"`).
- Le **nom du champ** de nature (ni `type` ni `kind` : collision).
- Les **trois voies de M8ter** (référentiel unique ou double) — la voie 3 (arbre unique + champ de nature par domaine) est recommandée, cohérente avec le II.
- Les **trois chapitres de 4e sans aucune séance** — état normal de la préparation, ou perte ?
- Ce que l'Apps Script a le droit d'envoyer.
