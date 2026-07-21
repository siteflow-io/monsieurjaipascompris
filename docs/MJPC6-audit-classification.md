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

## VI · CE QUE CE CHANTIER SUPPOSE
1. **Porter `inferCategory` dans `correction_dictee`** — sans quoi le cycle décrit par Paul reste théorique pour la correction manuscrite.
2. **Faire remonter le taux de détection de 50 % vers un chiffre acceptable** — et décider quel chiffre est acceptable.
3. **Ne plus classer à tort quand aucune couche savante ne répond** : préférer « non détecté » à un contresens.
4. **Sortir les conseils (`L1`, `G5`…) du champ de classification** et leur donner leur propre champ.
5. **Ouvrir une table de concordance par app**, en distinguant les tables « erreurs → notions » des tables « critères → compétences ».
6. **Instruire `analyse_logique`**, seule app à mentionner la taxonomie.
