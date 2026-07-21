# AUDIT — LA CLASSIFICATION DES ERREURS ET DES CRITÈRES, APP PAR APP
> Demande de Paul (21/07) : *« le moteur embarque normalement une auto-détection qui se fait contre une identification des erreurs intégrée. Cependant, si tu regardes bien dans les codes des apps, ce système n'est pas toujours abouti (dû au manque de temps au moment de l'utilisation des apps cette année). C'est un chantier à approfondir : faire en sorte que la détection auto soit la plus fidèle possible sans produire de contresens. »*
> Établi sur les fichiers de production et sur les données réelles du hub, le 21/07/2026.

## LE CYCLE VISÉ, formulé par Paul
*« Grâce à la taxo, quand je classe `G` et qu'ensuite j'écris le mot tel qu'il a été écrit par l'élève, l'app compare et classe automatiquement sous le bon libellé interne qui ensuite abonde le profil longitudinal et la typologie d'erreurs d'un élève. C'est moins de charge mentale pour moi, et je garde quand même ma distinction de gestes rapides. »*
**Le geste reste à deux touches ; la machine fait le classement fin.** C'est ce cycle que le présent audit mesure.

## I · CE QUI EXISTE — `dictee_universelle`, la seule app dotée d'un moteur
`inferCategory(typed, correct)` fonctionne **par couches successives** : ① analyse grammaticale injectée par mot (`window._ANALYSE_GRAMM`) avec ses « pièges » connus ; ② base grammaticale `GRAMM.classify` ; ③ règles par mot (`CUSTOM_WORD_RULES`) ; ④ **fallback heuristique générique** (identité hors casse → majuscule ; liste d'homophones en dur).
Les données produites portent **deux niveaux** : `catCode` (catégorie large) et `fineCat` (précision), plus le couple `correct`/`word`.
**`correction_dictee` n'a AUCUN moteur** : `inferCategory` n'y existe pas. Le cycle décrit par Paul suppose donc de l'y porter.

## II · LES TROIS PROBLÈMES MESURÉS (2 dictées coévaluées, 60 copies, 291 erreurs, 131 paires distinctes)

### II.1 — Le problème n'est PAS la justesse, c'est la COUVERTURE
L'app déclare elle-même son taux : **`pctDetection` = 0,50 en moyenne** sur les 60 copies · **min 0,00 · max 1,00**. **La moitié des erreurs ne sont pas classées du tout** — elles existent, elles comptent dans la note, mais n'abondent aucune typologie. C'est là que le profil se troue.

### II.2 — Les contresens existent, mais sont RARES : 2 sur 131 paires (≈ 1,5 %)
- **`l'idée → l'idé`** classé **G-PP** (accord du participe passé) alors qu'« idée » est un NOM : le moteur a vu une finale en `-ée` et conclu.
- **`qu'un → quu'n`** classé **L-ACC** (accent) alors qu'il s'agit d'une inversion de lettres.
**Cause commune** : c'est le **fallback heuristique** (couche ④) qui parle quand les couches savantes n'ont rien. Il devine sur la forme, et parfois il devine mal. *Piste : quand aucune couche savante ne répond, mieux vaudrait ne rien classer (et le compter comme non détecté) que classer à tort — un contresens pollue le profil, une non-détection le laisse honnête.*

### II.3 — `fineCat` mélange TROIS vocabulaires
Les codes (`L-ACC`, `G-HOM`, `G-PP`, `L-ORT`), et une **troisième nomenclature** qui n'est ni les codes ni la taxonomie : `L1` = « Vérifie l'orthographe » · `L2` = « Vérifie les accents » · `L5` = « Majuscule nécessaire » · `G5` = « Test de substitution » · `G6` = « Remplace par vendre/vendu/vendait » · `G7` = « Vérifie temps et personne ». **Ce ne sont pas des catégories : ce sont des CONSEILS À L'ÉLÈVE.** Ils occupent le champ de la catégorie fine — **63 erreurs sur 291 sont donc rangées sous « Vérifie l'orthographe »**, ce qui ne dit rien de ce qui a échoué. *Le conseil est une bonne chose ; sa place n'est pas dans le champ de classification.*

## III · LE MOT FAUTIF — condition du cycle, renseigné à 31 %
Sur les 5 dictées manuscrites (`correction_dictee`), 1 754 erreurs enregistrées :
| dictée | copies | erreurs | avec mot fautif |
|---|---|---|---|
| utopie 5e Hergé | 31 | 571 | **517** |
| grandes découvertes 5e | 30 | 174 | **21** |
| brevet blanc 3e Charles de Gaulle | 28 | 289 | **0** |
| brevet blanc 4e Banksy | 28 | 363 | **0** |
| brevet blanc 4e Pythagore | 28 | 357 | **0** |
**Le cycle « je pose `G`, j'écris le mot, la machine classe » ne pourra donc PAS fonctionner rétroactivement sur 1 009 erreurs.** Il vaudra pour l'avenir. (Le champ est facultatif pour certains types ; l'app demande « Qu'a écrit l'élève ? » après `G` et `L` seulement.)

## IV · LES AUTRES APPS — chacune a inventé son référentiel, aucune ne pointe la taxonomie
| App | Mécanisme | Nature des critères | Taxonomie ? |
|---|---|---|---|
| `dictee_universelle` | `inferCategory` + `catCode`/`fineCat` (221 occurrences) | **catégories d'ERREUR** | non |
| `correction_dictee` | aucun moteur ; `GRAMM` présent (31), `competences` (62) | catégories d'erreur posées à la main | non |
| `etude_dugain` | 262 occurrences de « critère » | **critères de CONTENU liés à UN texte** : `q1_c1` « Adrien Fournier (narrateur) identifié », `q1_c2` « Penanster identifié », `q2_c2` « Tous blessés au visage » — **non réutilisables d'un texte à l'autre** | mot présent, 0 notion |
| `redaction_dugain_v3` | 136 occurrences | **critères d'ÉCRITURE génériques et réutilisables** : `invention`, `remobilisation`, `cadre`, `peripeties`, `sensations`, `organisation` | non |
| `applause_meter` | 127 occurrences, critères créés à la volée (« Nouveau critère »), échelle *Pas vraiment / Un peu / Plutôt / Tout à fait* | **critères de LECTURE à l'oral** | non |
| `pilotage_debat_s3` | rubriques *Argument, Écoute, Introduction…* | **critères d'ORAL** | non |
| `worktrack` | 92 « critère », 17 « competences », 18 « notion » | plan de travail | non |
| `reecriture` / `reecriture_bb4e` | 30 « consigne/transformation » | consignes de transformation | non |
| `evaluation-qcm` | aucun | — | non |
| `analyse_logique` | 12 « notion », 3 « taxonomie » | **la seule à mentionner la taxonomie** | à instruire |

## V · LA DISTINCTION QUI COMMANDE TOUTE LA SUITE
**Ce ne sont pas les mêmes objets, et ils n'appellent pas la même couture :**
- **Les apps qui classent des ERREURS** (dictée coévaluée, correction manuscrite, réécriture) → concordance vers les **NOTIONS** (les 154). Une erreur pointe ce qui n'est pas maîtrisé.
- **Les apps qui évaluent des CRITÈRES** (étude de texte, rédaction, applaudimètre, débat) → concordance vers les **COMPÉTENCES** (les 28 items `francaisC4` + transversales). Un critère pointe une capacité mise en œuvre, pas une lacune.
**La taxonomie a précisément deux étages, et les deux servent** — les notions pour les erreurs, les compétences pour les critères. Ce n'est pas un hasard : c'est la structure qui attendait cet usage.
**Cas particulier de `etude_dugain`** : ses critères sont liés à UN texte précis (Dugain). Ils ne sont pas généralisables tels quels — il faudra distinguer, dans une étude de texte, **ce qui relève du texte** (« Penanster identifié ») de **ce qui relève de la compétence** (« repérer les personnages et leurs relations »). Seul le second se coud.

## VI-bis · LA PHILOSOPHIE DE FOND — capitalisation ET cercle vertueux (Paul, 21/07)

### La ligne de crête, formulée par Paul
*« La mécanique ne doit pas mentir ET doit être si fine qu'elle doit en fait… dire la vérité, sans que j'aie à faire moi-même toute la classification qui permet cette finesse. »*
Deux exigences qui semblent opposées et ne le sont pas : ① **avouer ce qu'elle ignore** — un profil qui range tout, dont 5 % à tort, est faux de façon INVISIBLE, ce qui fait prendre des décisions pédagogiques sur du sable ; ② **devenir assez fine pour que cet aveu se réduise sans que Paul classe lui-même**, sans quoi l'honnêteté devient une excuse à l'imprécision.

### RECTIFICATION MAJEURE (Paul, 21/07) — le taux de détection ne s'affiche JAMAIS côté élève
La conscience avait proposé d'afficher « 47 erreurs, dont 31 classées » sur les bilans. **Paul l'écarte** : *« un élève ne peut pas avoir de phrase dans l'app ou sur le site qui introduise l'idée que le prof ou l'app ou le site "n'est pas assez performant pour être suffisamment vrai". Sinon on viole directement ce qu'on a mis en principe : rien ne doit donner le flanc à une remise en cause, en tout cas extérieurement. »*
**Donc** : la mesure EXISTE et est PRÉCIEUSE, mais elle appartient au PROFESSEUR. Elle vit dans le panneau prof, comme **tableau de bord de renforcement** — elle dit où l'app a besoin de Paul, sur quelle dictée, sur quelles notions ; elle pilote son travail d'arbitrage au lieu d'inquiéter l'élève.
**Côté élève, le silence est la bonne réponse** : une erreur non classée est signalée comme erreur, corrigée, comptée — simplement, elle n'alimente pas la typologie. L'élève ne voit pas une absence, il voit une erreur.

### LA CAPITALISATION EXISTE DÉJÀ — `reecriture.html` en est le précédent
Paul : *« j'ajoute au fur et à mesure de la correction des erreurs récurrentes, des pièges dans lesquels tous les élèves tombent, et au lieu de retaper à chaque fois, je clique. »*
**Vérifié dans les données** : la réécriture de brevet blanc 3e porte **15 pièges capitalisés**, de la forme `{attendu, fautif, tokenIdx}` — `père/pères`, `était/étaient`, `Leur/Leurs`, et TROIS façons de rater le même mot : `éprendre/éprendrent`, `éprendre/épendre`, `éprendre/épendrent`. **Le mécanisme est construit, il n'a pas encore de nom.** 161 occurrences de `piege` dans le fichier, avec popup de saisie et toast d'auto-détection.

### LE CERCLE VERTUEUX — pourquoi la charge décroît
**La matière existe déjà** : le couple *attendu / écrit* CONTIENT la notion — `poissons/poisons` EST une double consonne, `rêvait/révait` EST un accent. Personne n'a besoin de le dire : il faut le lire.
**L'IA propose, Paul tranche PAR LOT** (patron éprouvé : Concordance validée quatre par quatre le 21/07). Vingt minutes donnent plusieurs centaines de classements.
**Et chaque arbitrage enrichit la machine DÉFINITIVEMENT** : une paire tranchée une fois est reconnue pour toujours, dans toutes les copies, toutes les classes, toutes les années. `dormait/dormer` classé une fois, et les trente élèves qui font la même faute sont classés sans Paul. **Son travail ne se répète pas : il s'accumule.** La première dictée demande de l'arbitrage, la dixième presque plus.

### L'HORIZON — l'entraînement s'autocorrige, hors du professeur
Paul : *« le bout de cette logique serait que l'app, affinée au bout de cinq dictées, réécritures, etc., soit tellement sûre que tout ce moteur de détection serve pour la correction des travaux d'entraînement : une dictée d'entraînement, hors de mon contrôle de correcteur, bénéficierait instantanément de l'autocorrection, sans que j'aie besoin d'y mettre mon nez. »*
**Cela rejoint exactement la distinction ressource/acte** (doctrine du site, §II) : l'entraînement est une RESSOURCE, il peut être automatique ; l'acte de classe reste au professeur. Le temps de Paul se concentre sur ce qui exige un professeur, pendant que l'entraînement tourne seul.

### LA NUANCE QUI TIENT LA LIGNE DE CRÊTE — certifié vs déduit
Paul écrit : *« vu que c'est mécanique, ce serait invariablement juste »*. **La mécanique est invariable, mais l'invariabilité n'est pas la vérité** : une règle mal posée sera appliquée constamment, donc constamment fausse, sur toutes les copies, sans que personne le voie. **C'est la seule façon dont ce système pourrait mentir à grande échelle.**
**D'où la distinction, qui découle de la logique de capitalisation elle-même** :
- **CERTIFIÉ** = paire arbitrée par Paul au moins une fois. Sa signature garantit le classement.
- **DÉDUIT** = classement obtenu par règle générale. Probable, pas certain.
**En entraînement autonome, SEUL LE CERTIFIÉ PARLE.** Le reste est corrigé — l'erreur est signalée, l'orthographe donnée — mais n'est pas classé. Ainsi l'entraînement automatique **ne peut jamais dire une fausseté à un élève seul devant son écran**, sans professeur pour rattraper.
**Et le cercle vertueux joue là aussi** : plus Paul arbitre, plus la part certifiée grandit, plus l'entraînement autonome devient riche. **La signature de Paul est ce qui fait passer une paire du probable au certain — et elle ne se donne qu'une fois.**

### CE QU'IL NE FAUT PAS CHERCHER
**Les 100 %.** Une part d'erreurs restera inclassable : fautes multiples, mots méconnaissables, accidents. **Une mécanique qui prétend tout classer est une mécanique qui ment ; celle qui laisse une part en « non classé » est celle en qui l'on peut avoir confiance.**

## VI · CE QUE CE CHANTIER SUPPOSE
1. **Porter `inferCategory` dans `correction_dictee`** — sans quoi le cycle décrit par Paul reste théorique pour la correction manuscrite.
2. **Faire remonter le taux de détection de 50 % vers un chiffre acceptable** — et décider quel chiffre est acceptable.
3. **Ne plus classer à tort quand aucune couche savante ne répond** : préférer « non détecté » à un contresens.
4. **Sortir les conseils (`L1`, `G5`…) du champ de classification** et leur donner leur propre champ.
5. **Ouvrir une table de concordance par app**, en distinguant les tables « erreurs → notions » des tables « critères → compétences ».
6. **Instruire `analyse_logique`**, seule app à mentionner la taxonomie.
