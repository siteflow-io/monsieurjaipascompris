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

## XIII. LES DOCUMENTS — l'atelier de composition (discussion du 20/07, à l'arrêt du développement)

### XIII.1 · Le renversement : on ne visionne plus, on compose
**Constat de départ, énoncé par Paul** : la visionneuse de documents actuelle (iframe vers l'aperçu Drive, sept formats : `pdf`, `pptx`, `ppt`, `docx`, `doc`, `html`, `htm`) souffre de trois maux — elle dépend du profil Google connecté au navigateur, elle **ne rend pas fidèlement les animations et objets d'un PowerPoint**, et elle est lourde (elle charge toute une interface Google à chaque ouverture). Paul avait contourné une partie du problème *« par la possibilité de coller des screenshots »*, solution qu'il juge lui-même *« pas très propre »*.
**Le renversement** : *« j'ai découvert qu'on pouvait faire un document stylisé en html, d'où aussi mes mini visionneuses préimpression de worktrack etc. Il faudrait ça : des champs où je balance le texte d'un bilan par exemple, qui est démoulé toujours avec la même charte, disposition, références de séance, compétences etc. Et pour les captures d'écran des ppt, pareil, je les upload, l'app les convertit ou les intègre dans ces fameux html, et voilà ma séance imprimable avec un coût léger en manip d'upload et de construction surtout. »*
**Le site n'a pas besoin d'une visionneuse : il a besoin d'un ATELIER DE COMPOSITION.** Le document natif cesse d'être un fichier importé pour devenir du HTML fabriqué.

**LE MOTIF EXISTE DÉJÀ QUATRE FOIS — vérifié dans les fichiers de production** : `bilansPrintHTML` et `syntheseEleveSeance` (débat, avec demi-A4, pointillés de découpe et sauts de page en millimètres) · `bilanTisseHTML` et `fiche4d` (worktrack) · `generateDictFiches` (dictée universelle) · `generateBilan` et `ficheJsonHtmlPourEleve` (correction de dictée). Toutes prennent des données, les coulent dans une charte, produisent un HTML imprimable. **Ce n'est donc pas une idée à inventer : c'est un motif à EXTRAIRE.** Quatre implémentations parallèles = quatre chartes qui divergeront, quatre CSS d'impression à corriger séparément.
**Ce que l'atelier résout que le fichier importé ne résout pas** : plus de dépendance Google ni Microsoft · plus de problème de profil connecté · fidélité par construction (c'est la charte de Paul) · léger (texte + images au lieu d'un PPTX de 20 Mo) · **responsive par nature**, donc lisible sur le téléphone d'un élève — ce qu'une diapositive 16/9 n'est jamais · imprimable proprement · **et corrigeable** : aujourd'hui, corriger une coquille impose de rouvrir PowerPoint, réexporter, réuploader, revérifier le lien ; là, on corrige un champ.
**Décision sur les gabarits** : **gabarits en dur, contenus en base.** La charte est une décision de conception, pas un réglage.

### XIII.1bis · L'APERÇU EST INDISPENSABLE — rectification du 21/07
**Reprise de Paul** : *« j'ai bien sûr besoin de la visionneuse, dans corr dictée c'est exactement ça que j'ai : des cases cochées qui affichent ou non des choses sur le doc. Et je dois VOIR le doc avant de l'imprimer / mettre sur le site. »*
**La formulation « tu n'as pas besoin d'une visionneuse mais d'un moule » était FAUSSE** : elle opposait deux choses complémentaires. Ce qui disparaît, c'est la visionneuse de **FICHIERS EXTERNES** (l'iframe vers l'aperçu Drive d'un PPTX). Ce qui reste absolument nécessaire, c'est **l'APERÇU DE CE QUE L'ON COMPOSE**, avant impression ou publication. Le gabarit produit ; l'aperçu montre. Sans lui, on imprime à l'aveugle.
**LE PROTOTYPE EXISTE DÉJÀ, ENTIER, dans `correction_dictee.html`** (vérifié) — c'est le gabarit en modèle réduit, sur une seule app :
- **les cases** : `showBadge`, `showOverlay`, `showPoints`, `linkExercices`, `dueDate`, `bilanOverride`, position `left`/`right`/`below`, `mode` — des options qui affichent ou non des éléments sur le document ;
- **l'aperçu navigable** : `previewOpen` / `previewIdx`, qui fait défiler **les élèves un par un** avant de sortir.
**Ce que cela apporte à la conception du gabarit** : ① l'aperçu n'est pas un confort mais une **composante de premier rang**, à concevoir dès le départ ; ② il doit être **navigable dans le lot** (élève par élève, classe entière) et non montrer un seul exemplaire — c'est déjà ce que fait `previewIdx` ; ③ il doit rendre **exactement** ce qui sortira, impression comprise : un aperçu qui diffère du résultat imprimé est pire que pas d'aperçu du tout ; ④ les cases agissent SUR l'aperçu **en direct**, sinon on ne voit pas ce qu'on règle.
**Conséquence de méthode** : le motif à extraire n'est donc pas seulement « quatre générateurs HTML » mais **« cases + aperçu navigable + sortie »**, dont `correction_dictee` est la seule implémentation complète. Les trois autres générateurs produisent sans montrer.

### XIII.1ter · LE GABARIT SE CLONE, IL NE SE CENTRALISE PAS — directive de Paul (21/07)
**Formulation de Paul** : *« ça fait penser qu'on est encore une fois dans l'uniformisation : une visionneuse sélectionneuse dans MJPC, MAIS aussi dans correction dictée, MAIS aussi dans worktrack, etc. Chaque app peut fonctionner indépendamment. »*
**LE COMPOSANT « CASES + APERÇU NAVIGABLE + SORTIE » DE `correction_dictee` EST LE MODÈLE À CLONER**, tel quel, dans toutes les apps et dans le site. Ce n'est pas un service central qu'on appelle : c'est un composant qu'on recopie. **Raison, qui est la doctrine même du chantier** : chaque app doit rester entière si MJPC tombe. Un gabarit centralisé ferait de la panne du hub une panne de tous les documents.
**Ce que l'uniformisation apporte** : ① pour l'ÉLÈVE — un bilan de dictée et un bilan de débat se ressemblent, donc il sait les lire sans réapprendre ; ② pour PAUL — le même geste partout : mêmes cases, même aperçu, même bouton de sortie, quelle que soit l'app ouverte ; ③ pour le CHANTIER — une seule charte à corriger, un seul CSS d'impression à régler.

**LE POINT DUR DU CLONAGE — la propagation, et elle DÉRIVE DÉJÀ (vérifié le 21/07)** :
- socle **1.1.0** : `correction_dictee`, `evaluation-qcm`, `pilotage_debat_s3` (les trois repassés récemment)
- socle **1.0.0** : `index`, `worktrack`, `dictee_universelle`, `applause_meter`, `reecriture`, `reecriture_bb4e`, `analyse_logique`, `taxonomie`
**La dérive du clone n'est pas un risque théorique : elle est en cours.** Ce qui arrivera au gabarit si rien n'est prévu.
**MAIS le mécanisme de surveillance EXISTE DÉJÀ** : chaque app publie sa version de socle au nœud `/manifestes/<app>` à chaque passage en admin (`publierManifesteREST`). Le hub sait donc, à tout instant, quelle app porte quelle version. **Il suffit de l'exploiter** — et le Panneau prof est l'endroit naturel : une ligne par app, sa version de socle et sa version de gabarit, et l'écart saute aux yeux.
**RÈGLES DE CLONAGE À TENIR** : ① le composant porte **son propre numéro de version**, publié au manifeste comme celui du socle ; ② toute évolution du composant énumère **les apps à repropager**, et la dette reste ouverte tant qu'une app est en retard ; ③ le composant ne dépend **d'aucune donnée du hub pour fonctionner** — il reçoit ses données de l'app hôte, qui seule sait où les prendre ; ④ **le gabarit n'écrit jamais** : il compose, il montre, il sort. L'écriture appartient à l'app.

### XIII.2 · Les images — décision tranchée
**Chiffre décisif** : `/site/3e` pèse **10,4 Ko** (il ne contient que des références, jamais des contenus), et Firebase Realtime Database télécharge **le nœud entier** — un élève qui ouvre la 3e récupère tout `/site/3e`, même pour lire un seul chapitre.
- **Image encodée dans la base : ÉCARTÉE.** Une seule capture ferait passer le nœud de 10 Ko à ~200 Ko (base64 gonfle de 33 %) ; vingt captures = 4 Mo téléchargés par chaque élève à chaque ouverture, sur téléphone, en 4G. Ce n'est pas une question de goût : cela casserait le chargement du site.
- **Firebase Storage : ÉCARTÉ POUR LA RENTRÉE.** Choix élégant (même écosystème, règles communes) mais son quota gratuit porte sur le TÉLÉCHARGEMENT : 150 élèves consultant des images quotidiennement l'atteindraient, et le jour où il est atteint les images disparaissent en pleine séance. Redeviendra pertinent le jour d'un plan payant.
- **RETENU : DRIVE, avec partage « toute personne disposant du lien ».** Trois raisons, par poids décroissant : ① **cela fonctionne déjà** — l'upload passe par l'Apps Script et les images sont servies par `lh3.googleusercontent.com`, CDN de Google, gratuit, rapide, **sans authentification** dès lors que le fichier est partagé par lien (c'est précisément ce qui rend les vignettes indépendantes du profil, là où l'aperçu `drive.google.com/file/d/` en dépend) ; ② **aucun quota à surveiller**, pas de panne possible un jour de cours ; ③ **rien à recoder** — seul le partage change.
**Deux améliorations qui comptent autant que le choix** : **redimensionner à l'envoi** (une capture de diapositive fait 1 à 2 Mo ; redimensionnée à 1 600 px et convertie en JPEG dans le navigateur avant envoi, elle tombe à ~150 Ko pour un rendu identique à l'écran comme à l'impression — traitement local, sans service tiers) ; **servir la bonne taille** (le code demande déjà `=s2000` à `lh3` ; ce suffixe accepte n'importe quelle valeur : `=s400` pour une vignette, `=s1600` pour un plein écran — sur le téléphone d'un élève, c'est la différence entre une séance qui s'ouvre et une séance qui rame).
**Réserve, inchangée** : ce chemin vaut pour les RESSOURCES. **Jamais pour un document nominatif** — une copie d'élève sur un Drive partagé par lien serait accessible à qui devine l'identifiant.

### XIII.3 · Les diapositives — le prompt IA × prof, et le tri image/texte
**Idée de Paul** : *« un prompt IA x prof que je colle avec la série de captures du ppt et l'IA produit un json ou un html qui reproduit exactement la capture ppt. Quand c'est une image, une vraie illustration, ça passe par le drive. »*
**Ce que cela vaut, au-delà du poids** : **une diapositive n'est pas une image, c'est du texte mis en page.** La photographier, c'est transformer du texte en pixels et perdre tout ce que le texte permet — quelques Ko au lieu de 150 ; **reflow sur téléphone** au lieu de zoom-et-balayage ; texte **sélectionnable, copiable, lu par un lecteur d'écran** ; **trouvable par la recherche du site**, qui aujourd'hui ne voit rien dans une image ; coquille corrigible sans rouvrir PowerPoint. **Et le bénéfice non mentionné** : les diapositives viennent de PowerPoint différents, d'années différentes, avec des polices et couleurs différentes — en passant par le gabarit, elles ressortent TOUTES dans la charte de Paul. Le site cesse d'être un patchwork de captures.
**TRANCHÉ : JSON, pas HTML.** Si l'IA produit du HTML, chaque diapositive arrive avec son propre style et l'on retombe dans le patchwork — l'IA aurait fait de la mise en forme, ce qui n'est pas son travail ici. **Le JSON décrit le CONTENU** (un titre, trois points, un exemple encadré, une note) ; **le gabarit applique la FORME**. C'est la logique même des jeux d'orgue : l'IA fournit la matière, Paul tire les registres.
**Limite à poser franchement** : l'IA peut mal transcrire. Sur du contenu pédagogique, une règle de grammaire recopiée de travers est plus grave qu'une image floue, parce qu'elle se propage aux élèves avec l'autorité du site. **Relecture obligatoire avant injection**, et **validation structurelle du JSON avec messages d'erreur nommés**, comme les injections déjà éprouvées (les 10 documents du débat, worktrack, la grammaire — patron connu : validation nommée, prévisualisation avant écriture, corbeille avant remplacement).
**RÈGLE DE PARTAGE** : passe par l'IA ce qui est **du texte mis en page** (titres, listes, définitions, exemples, tableaux simples — l'immense majorité d'un cours de français) ; **reste une image sur Drive** ce qui est réellement graphique (œuvre, photographie, frise, schéma fléché, carte heuristique) — là, la reproduction en JSON serait une trahison et prendrait dix fois plus de temps qu'un dépôt.
**Critère pour trier au moment du dépôt** : *si je pouvais le dicter à quelqu'un qui le retaperait, c'est du texte ; si je devais le lui décrire, c'est une image.*

### XIII.4 · UN SEUL GABARIT, exhaustif, à composantes cochables — la métaphore de l'orgue
**Formulation de Paul** : *« la question n'est pas qu'ils soient éditables, mais suffisamment exhaustifs pour que leurs composantes soient cochables ou non. Ainsi un gabarit est par définition un gabarit ultra ultra fin, mais partiellement ou totalement activé. Un peu comme les combinaisons de jeux à l'orgue. »* Puis : *« il faudrait faire un seul et même gabarit (avec cases à cocher) et en haut, des boutons que je clique en fonction de ce que je veux comme produit (par exemple un bilan) et les cases s'autocochent en fonction du produit choisi. »*
**L'analogie tient jusqu'au bout** : les boutons de produit sont **les pistons de combinaison**. Les tirants restent accessibles un par un, mais un piston les prépare d'un coup, et l'on peut toujours en ajouter ou en retirer après l'avoir enfoncé. **Le préréglage fait gagner du temps sans jamais enlever la main.**
**Conséquence de méthode** : le travail de conception se fait EN AMONT et doit être exhaustif — une composante oubliée ne se rattrape pas par un réglage, elle exige une livraison. Plus exigeant à écrire, mais c'est ce qui garantit qu'une combinaison reste toujours cohérente, comme un jeu accordé avec les autres.

### XIII.5 · LA LISTE EXHAUSTIVE DES COMPOSANTES
*(un astérisque marque ce qui existe déjà dans les quatre générateurs ou dans les données du hub — donc éprouvé, non supposé)*

**A · Identification** — Titre · Sous-titre · Élève* · Classe* · Niveau · Groupe ou binôme* · Chapitre · Numéro et titre de séance* · Date de la séance · **Date d'édition** · Année scolaire · Période (trimestre, séquence) · Marque MJPC · Code personnel · Version du document

**B · Ancrage pédagogique** — Objectif de séance (« à la fin de cette séance, tu sauras… ») · Compétences travaillées* · Notions visées (les 154) · Domaine du socle · Attendu de fin de cycle · Prérequis · Ce qui sera évalué · Critères de réussite · Durée prévue · Place dans la progression annuelle · Parcours concerné (citoyen, artistique, avenir, santé)

**C · Contexte culturel** — Œuvre étudiée · Auteur · Siècle et courant · Corpus (liste de textes) · Genre · Histoire des arts · Prolongements (lecture, film, musée) · Lexique de la séance · Étymologie · Repère chronologique

**D · Contenu** — Texte libre · Liste à puces · Liste numérotée · **Définition** · **À retenir** · **Attention / piège fréquent** · **Méthode (les étapes)** · Exemple · Contre-exemple · Citation avec référence · Extrait long avec numérotation des lignes · Tableau · Colonnes comparatives · Frise · Schéma · Image (Drive) · **Diapositive convertie (JSON)** · Consigne · Question · Note de bas de page

**E · Travail de l'élève** — Zone lignée · Zone quadrillée · Zone vierge · Cases à cocher · Texte à trous · Appariement · Tableau à compléter · Brouillon · Consigne de transformation (réécriture) · Sujet de rédaction · Nombre de mots attendu · Matériel nécessaire · Modalité (seul, binôme, groupe, oral) · Barème* · Note* · Points bonus (autocorrection)* · Temps passé* · Trace du travail dans l'app*

**F · Résultats et retour** — Erreurs relevées par catégorie* · Corrigé attendu* · Réussites · Taux de réussite par question (QCM) · Rôle et tours de parole (débat) · Arguments produits (débat) · Critères de lecture (applaudimètre) · **Ce que tu réussis · Ce sur quoi tu butes · Ton objectif** *(trame strate / Hattie-Timperley, déjà au plan)* · Comparaison avec la fois précédente · Progression dans le temps · Commentaire du professeur · Auto-évaluation de l'élève · **Ce que l'élève voit / ce qui n'est pas encore publié** *(composante née de l'usage en rendez-vous parents)*

**G · Absence et rattrapage** — Statut d'absence* · Date d'absence · Modalité de rattrapage · Ce qui a été mesuré autrement · Travail à récupérer *(rejoint le chantier X du plan)*

**H · DIFFÉRENCIATION ET ACCESSIBILITÉ** *(`classes_amenages` existe déjà au hub et porte les élèves à aménagement par classe — vérifié : « 5e HERGÉ » en compte trois)*
- **Sur la consigne** : Reformulation en langage simple · Explicitation du but réel (« ce qu'on te demande vraiment, c'est… ») · Une seule consigne par ligne · Verbe d'action isolé et surligné · Mots-clés de la consigne mis en évidence · Lexique difficile explicité en marge · **Suppression de la double tâche** (ne pas copier ET analyser)
- **Sur la tâche** : Séquençage en étapes numérotées · Point de vérification intermédiaire (« quand tu as fini l'étape 2, montre-moi ») · **Exemple traité en entier avant l'exercice (modelage)** · Amorce de réponse (début de phrase donné) · **Réduction du nombre d'items SANS réduction de l'exigence** · Support de rappel sous les yeux (la règle, la table de conjugaison) · Aide graduée en trois coups de pouce · Temps majoré signalé
- **Sur l'auto-évaluation** : Critères de réussite reformulés à la première personne (« j'ai réussi si… ») · Case « j'ai compris la consigne » avant de commencer · Ce que je fais si je bloque
- **Sur la forme** : Police adaptée (dyslexie) · Interligne augmenté · Colonne étroite · Contraste renforcé · Sans italique · Syllabation colorée · Numérotation des lignes du texte
**Implication non anodine** : la reformulation d'une consigne n'est pas un réglage typographique — **c'est un second texte à écrire.** Le gabarit doit donc prévoir, pour les composantes concernées, **un champ de reformulation à côté du champ principal** : on écrit la consigne une fois, sa version explicitée une fois, et la case décide laquelle sort. Travail en amont, fait une fois pour toutes.
**Valeur propre de cette famille** : elle n'existe nulle part ailleurs. Avec un gabarit, la MÊME fiche sort en deux versions — normale et adaptée — d'un seul geste, à partir du même contenu. Impossible avec un PDF, coûteux avec PowerPoint, immédiat ici. **Et le préréglage peut se déclencher tout seul** quand la fiche est nominative et que l'élève figure dans `classes_amenages`.

**I · Liens et suites** — Renvoi vers l'application · Renvoi vers la remédiation par notion (L'Atelier) · Séance suivante · Travail à faire pour la prochaine fois · Échéance · QR code · Lien de consultation en ligne

**J · Mise en page** — A4 · demi-A4* · deux par page* · Marges · Pointillés de découpe* · Saut de page* · Numérotation · Pied de page · Orientation · Mention « à conserver » · Écran seul / impression seule
*(La signature parent a été explicitement retirée par Paul.)*

**K · COMPOSANTES AGRÉGATIVES** — *« lier tout l'existant à une ou des cases cochées »* (Paul). **Ces cases ne remplissent pas une zone : elles interrogent l'historique de l'élève.**
- **Par type d'activité** : toutes les études de texte passées · toutes les dictées · tous les débats · tous les QCM · toutes les rédactions — chacune avec date, objet, résultat
- **Par compétence et par notion** : notions déjà travaillées · notions restant à travailler · notions en cours d'acquisition · erreurs récurrentes sur les N dernières séances · progression sur une notion donnée · ce qui est réussi / ce qui résiste, par domaine
- **Par temps** : depuis le début de l'année · sur la séquence · depuis la dernière évaluation · comparaison avec la période précédente
- **PARCOURS SOCRATIQUE** *(quand l'élève fait un parcours autoréflexif)* — il ne produit pas un résultat mais un chemin, d'où ses composantes propres : les questions posées · les réponses successives · les reformulations · **le point de bascule** (là où il a changé d'avis) · ce qu'il a formulé lui-même, dans ses mots · ce qu'il a écarté et pourquoi · sa conclusion · **la trace du cheminement plutôt que la note**
**Trois conséquences** : ① ces composantes font du gabarit **un client de M15** (profil longitudinal), non plus un simple metteur en page — on peut livrer le gabarit sans elles et les activer ensuite, on ne peut pas les inventer avant que les données existent ; ② **le document devient personnel par nature dès qu'une case agrégative est tirée** (impossible de produire « ce qu'il reste à travailler » sans savoir de qui l'on parle) — la distinction générique / nominatif devient MÉCANIQUE ; ③ **question pédagogique ouverte** : la trace d'un cheminement socratique est-elle montrable à l'élève ? Lui rendre ses hésitations et son point de bascule peut être formateur (voir qu'on a changé d'avis, et pourquoi) ou humiliant, selon la manière. Décision de Paul, non technique.

**Remarques transversales sur la liste**
- **Les composantes ne sont pas indépendantes** : « Note obtenue » n'a de sens que si « Barème » est tiré ; « Comparaison avec la fois précédente » suppose une fois précédente ; « Mention à conserver » n'a de sens qu'en impression. Il faudra donc, en plus des cases, **des dépendances déclarées** — sans quoi des documents incohérents sortiront sans qu'on s'en aperçoive.
- **Certaines portent des données, d'autres de la structure** : « Nom de l'élève » va chercher une donnée réelle ; « À retenir » n'est qu'un encadré à remplir. La première ne peut être cochée que si le document est **rattaché à un élève**.
- **Certaines ne sont pas des cases mais des variantes de rendu** : « Police adaptée », « écran seul », « version courte » **transforment** le document au lieu de lui ajouter une zone. À distinguer dans l'interface, sinon quarante cases feront quarante choses différentes sans le dire.
- **La famille F justifie tout le reste** : le débat produit déjà des demi-A4, la correction des bilans, worktrack des fiches. **Ce qui manque, c'est le même document, avec la même charte, quelle que soit l'application d'origine.** L'élève reçoit alors un bilan de dictée et un bilan de débat qui se ressemblent, donc qu'il sait lire sans réapprendre.

### XIII.6 · LE CAHIER REDEVIENT LE PROFIL
**Constat de Paul** : *« ça fait que tout document de séance peut potentiellement devenir le "profil longitudinal" imprimé au fur et à mesure dans le cahier. C'est très fort. »*
**Ce que cela produit** : la progression devient **matérielle** — un élève qui feuillette son cahier en juin voit l'épaisseur de son année, ce qu'aucun tableau de bord ne produit ; et il voit que la fiche de septembre et celle de mai portent la même charte, donc que c'est **un même parcours** et non une série d'exercices sans lien. Le document devient **daté par nature** : ce qu'il porte est vrai au moment où il sort de l'imprimante et n'est pas censé se mettre à jour — le papier est un **instantané assumé**, et c'est ce qui lui donne sa valeur de trace, là où l'écran est toujours l'état actuel. **Et le rendez-vous parents n'a plus besoin d'écran du tout** : le cahier raconte l'année.
**Deux conséquences de conception** : ① **chaque document imprimé porte sa date d'édition, visiblement** — sans elle, un élève qui relit son cahier en mai ne sait pas si la fiche de novembre disait vrai À CE MOMENT-LÀ ou si elle est périmée ; la date transforme un document dépassé en témoin, son absence en fait une erreur. ② **l'agrégation est À LA DATE, pas à aujourd'hui** : une impression de janvier lit l'historique **jusqu'à la date d'édition**, pas la totalité — sinon deux documents se contrediraient sans qu'on comprenne pourquoi, alors que tous deux disent vrai à leur date.

### XIII.7 · LA FENÊTRE GLISSANTE, ET ELLE EST PAR TYPE
**Décision de Paul** : *« il existe un état intermédiaire où les docs de séance portent les 5 dernières traces par exemple, mais encore une fois, à mon choix sur le nombre de traces à afficher sur le doc »*, puis : *« ce serait par type : type d'activité, type de séance, etc. »*
**Pourquoi par type, au-delà de l'équilibre du document** : **on ne compare que ce qui est comparable.** Une note de dictée et une note de QCM côte à côte ne disent rien ; trois dictées à la suite montrent un motif. La fenêtre par type **transforme une liste en observation**.
**LES TYPES EXISTENT DÉJÀ dans les données** (relevés au hub) — **types de séance** : `etude_texte` (×16), `intro_image` (×8), `notions` (×8), `dictee_reecriture` (×8), `atelier_ecriture` (×8), `remediation` (×8), `tache_finale` (×8), `autre` (×1) ; **types d'item** : `doc`, `dictee`, `analyse_logique`, `tache`. **C'est la progression type de Paul, répétée à l'identique dans chaque chapitre** — et cette régularité est précisément ce qui rend la comparaison possible : l'étude de texte du chapitre 7 se compare à celle du chapitre 1 parce qu'elles occupent la même place.
**Règles** : chaque type porte **sa fenêtre et son nombre**, réglables séparément (un type fréquent et un type rare n'appellent pas la même profondeur) · le type **se déduit du contexte** plutôt que de se choisir (éditer une fiche pour une séance `etude_texte` tire par défaut la fenêtre des études de texte ; on ajoute un second type si l'on veut) · **le nombre est un réglage du DOCUMENT, pas du gabarit** — fixé à l'édition, avec un défaut par produit (trois pour une fiche de séance, dix pour un point d'étape, tout pour un bilan de fin d'année).
**Croisement ouvert par la typologie** : `remediation` est un type de séance, `notions` en est un autre — une fiche de remédiation pourrait porter non pas les dernières remédiations mais **les notions travaillées lors des dernières études de texte**, c'est-à-dire ce qui a MOTIVÉ la remédiation. Le type sert alors de filtre sur une autre dimension.
**Cas à traiter dès la conception — le début d'année et l'élève arrivé en cours d'année** : en septembre il n'y a pas cinq traces. Le document ne doit afficher ni vide ni lignes fantômes, mais le dire simplement : « deux séances depuis le début de l'année ». **C'est le principe cardinal appliqué à l'agrégat : le document ne met jamais l'élève en cause pour ce qui ne dépend pas de lui.**
**Variante à examiner** : la fenêtre pourrait se compter **en temps** plutôt qu'en nombre (« depuis trois semaines », « depuis la rentrée des vacances ») — cinq dictées peuvent couvrir quatre mois si elles sont espacées, et l'élève n'y reconnaîtra pas son présent ; le temps colle mieux à sa mémoire, le nombre colle mieux à la comparaison. Sans doute les deux selon le produit.
**Ce que la fenêtre ouvre** : chaque fiche porte **la comparaison immédiate** — non pas « ta moyenne annuelle » mais « voilà tes trois dernières dictées, et voilà ce qui revient ». **L'élève voit un motif, pas un score.** C'est exactement ce que la trame *ce que tu réussis / ce sur quoi tu butes / ton objectif* cherche à produire, et la fenêtre lui donne enfin sa matière.

### XIII.8 · LA CLÉ DE VOÛTE — la compétence, et donc la taxonomie comme couture
**Formulation de Paul** : *« ce qui unifie une activité d'entraînement sur le participe passé à la dictée, à une dictée évaluée sur la même notion, à une dictée coévaluée sur la même notion, à un exercice sur la même notion, à une séance sur la même notion, c'est la compétence. Et donc taxonomie revient ici afin de faire le lien, la couture, la continuité. »*
**Ce que cela explique rétrospectivement** : pourquoi la taxonomie devait être adossée à Éduscol AVANT d'être éditable ; pourquoi L'Atelier navigue par notion ; pourquoi le profil longitudinal n'est pas une liste d'activités mais **une carte de notions** ; pourquoi les fenêtres par type ne sont finalement qu'une vue, **et la vue par notion la vue principale**.

**ÉTAT RÉEL DE LA COUTURE, vérifié dans les données du hub le 20/07** :
- **Les cinq dictées portent des compétences — mais dans un AUTRE VOCABULAIRE** : `"D1.1 Orthographe grammaticale"`, `"D1.2 Orthographe lexicale"`, `"D1.3 Conjugaison"`, `"D1.4 Accords (sujet-verbe, …)"`, `"D1.5 Homophones grammaticaux"`, `"D1.6 P…"` — référentiel de type socle à six entrées. **La taxonomie, elle, parle en `gram-003`, `conj-017`, `ortho-lex-012`** (5 domaines, 40 familles, 154 notions). **Deux vocabulaires de compétences coexistent et ne se connaissent pas** — le motif de doublon traqué toute la journée, appliqué cette fois au cœur pédagogique.
- **Les quatre évaluations QCM ne portent RIEN** : une question a `enonce`, `choix`, `bonnes`, `niveau` — **aucune notion, aucune compétence**. Une réponse fausse ne dit donc rien de ce qui a échoué. C'est le cas de la plupart des activités.
**Conclusion sans dramatiser** : **la couture est une décision d'aujourd'hui, pas un acquis.** Le lien décrit par Paul exige que CHAQUE activité déclare ses notions ; aujourd'hui la moitié ne déclare rien et l'autre déclare dans une langue étrangère à la taxonomie.

**LA CONCORDANCE — validée par Paul le 20/07 (« et oui pour concordance évidemment »)** : le mécanisme de traduction **existe déjà** dans `taxonomie_atelier.json`, champ `alias` et ses tables (la table `terminologie` y a été créée le 19/07 pour les deux exceptions Éduscol de Paul). Elle est faite exactement pour cela : déclarer que `"D1.1 Orthographe grammaticale"` recouvre telles familles de la taxonomie. **Une entrée de concordance par compétence du socle, et les cinq dictées se raccrochent sans qu'aucune soit retouchée.**
**Pour ce qui n'est pas taggé** : la voie ouverte par Paul lui-même s'applique — **un prompt IA qui PROPOSE les notions** à partir de l'énoncé d'une question ou du texte d'une dictée, avec validation de Paul. On ne saisit pas 154 notions à la main : **on corrige des propositions.** Même patron que pour les diapositives, même règle de relecture obligatoire.
**CONSÉQUENCE DE CHANTIER** : **le taggage des activités par notion devient un PRÉREQUIS, pas une amélioration.** Sans lui, les composantes agrégatives du gabarit (famille K) n'ont rien à agréger.

## XII. CE QUI RESTE À TRANCHER
- La **nature par défaut** des items existants (proposition : `"acte"`).
- Le **nom du champ** de nature (ni `type` ni `kind` : collision).
- Les **trois voies de M8ter** (référentiel unique ou double) — la voie 3 (arbre unique + champ de nature par domaine) est recommandée, cohérente avec le II.
- Les **trois chapitres de 4e sans aucune séance** — état normal de la préparation, ou perte ?
- Ce que l'Apps Script a le droit d'envoyer.
- **Les préréglages de produits** : quels boutons (bilan, fiche de séance, point d'étape, support de cours…) et quelles cases chacun tire.
- **Le schéma JSON d'une diapositive convertie** (dépend des composantes retenues).
- **Les dépendances entre composantes** (quelle case en exige une autre).
- **La fenêtre glissante** : nombre par défaut par produit, et comptage en nombre ou en temps.
- **Le parcours socratique** : sa trace est-elle montrable à l'élève ?
- **La table de concordance** socle ↔ taxonomie : à écrire (une entrée par compétence D1.x).
