# SPEC — Atelier d'entraînement ciblé

**Projet** : nouvel outil pédagogique du site `monsieurjaipascompris`
**Auteur** : Paul Meney (Monsieur Meney) — Collège Saint-Joseph, Doué-en-Anjou
**État** : spec en cours — zones 1 à 5 finalisées, zones 6 à 9 à traiter
**Dépôt cible** : `siteflow-io/monsieurjaipascompris`
**Date** : 5 mai 2026

---

## Sommaire

1. [Vision générale](#vision-générale)
2. [Plan de spec — 9 zones](#plan-de-spec--9-zones)
3. [Principes directeurs (10 principes)](#principes-directeurs)
4. [Zone 1 — Périmètre](#zone-1--périmètre)
5. [Zone 2 — Taxonomie complète](#zone-2--taxonomie-complète)
6. [Zone 3 — Banque de questions](#zone-3--banque-de-questions)
7. [Zone 4 — Moteur de pioche](#zone-4--moteur-de-pioche)
8. [Zone 5 — Expérience élève](#zone-5--expérience-élève)
9. [Zones 6-9 — À traiter](#zones-6-9--à-traiter)
10. [Annexes techniques](#annexes-techniques)

---

## Vision générale

L'**Atelier** est un nouvel outil de l'écosystème `monsieurjaipascompris` qui transforme chaque erreur de l'élève (dictée, réécriture, évaluation) en parcours de remédiation ciblé et personnalisé.

**Idée fondatrice** : tagger chaque erreur avec une nomenclature commune (la taxonomie), puis piocher dans une banque de questions taggées avec la même nomenclature. Le moteur fait le matching erreur ↔ question.

**Ambition à terme** : alimenter un **profil élève unifié** (Principe 10) qui agrège les données de toutes les apps de l'écosystème — vue 360° de l'élève en français.

**Public** : 6e, 5e, 4e, 3e (tous niveaux du collège).

**Périmètre disciplinaire** : orthographe lexicale, orthographe grammaticale, grammaire, conjugaison, lexique. Hors périmètre : littérature, expression écrite, oral, méthode.

---

## Plan de spec — 9 zones

| Zone | Titre | État |
|---|---|---|
| 1 | Périmètre | ✅ Validée |
| 2 | Taxonomie | ✅ Validée (142 notions) |
| 3 | Banque de questions | ✅ Validée |
| 4 | Moteur de pioche | ✅ Validée |
| 5 | Expérience élève | ✅ Validée |
| 6 | Expérience prof (panneau de gestion) | ⏳ À traiter |
| 7 | Suivi longitudinal et exports | ⏳ À traiter |
| 8 | Intégration site et écosystème | ⏳ À traiter |
| 9 | Profil élève unifié + points de branchement | ⏳ À traiter (ajoutée en cours de route) |

---

## Principes directeurs

Ces 10 principes guident toutes les décisions du projet. Tout doit être cohérent avec eux.

### Principe 1 — La taxonomie sert l'écriture correcte
La taxonomie sert à aider l'élève à mieux écrire, pas à devenir grammairien. Si une distinction n'aide pas à écrire mieux, elle ne mérite pas d'être une notion distincte.

### Principe 2 — Seuil minimum de questions
Une notion n'existe que si on peut formuler 5+ questions distinctes dessus. Sinon elle est trop pointue et on la fusionne.

### Principe 3 — Plus large par défaut
En cas de doute entre deux notions, prendre la plus large. Éclater seulement si l'usage révèle qu'il faut le faire.

### Principe 4 — Libellés clairs pour l'élève
Pas de jargon métalinguistique. Chaque notion a un libellé prof (légèrement technique) et un libellé élève (sans jargon, lisible par un 6e).

### Principe 5 — Tout passe par le cahier
L'élève dispose dans son cahier d'une zone "Exos personnalisés" où il écrit tout à la main. Le PDF imprimable existe mais reste un backup pour cas particuliers (élève plâtré, PAP, parents demandeurs).

### Principe 6 — Formulation des règles non-négociable
Chaque règle doit être lisible par un élève de 6e sans dictionnaire. Vocabulaire courant, phrases courtes, structure claire. Le test : si tu n'oserais pas le dire à voix haute en classe, c'est mal écrit.

### Principe 7 — Guide en flux continu
L'app guide l'élève en flux continu. Elle parle à la 2e personne, donne des consignes claires étape par étape. Pas d'écrans neutres : chaque écran a une voix qui dit *« voici ce que tu fais maintenant »*.

### Principe 8 — Charte de ton
Direct, exigeant, sans flatterie. Phrases courtes. Verbes à l'impératif. Tutoiement avec prénom. Reconnaissance brève quand mérité ("bien", "bon score"). Réconfort minimal quand l'élève rate ("pas grave, c'est piégeux"), pas de coaching maternant. Pas d'émojis-doudous (✨, 🎉, 🌟). Émojis uniquement fonctionnels et rares (séparation visuelle d'un encart, jamais en fin de phrase). Pas de bravo, pas de "tu peux le faire", pas de "ne te décourage pas".

### Principe 8 bis — Visuel kinésique vs textuel
Le ton **textuel** reste sec et exigeant à tous les niveaux. Le **visuel kinésique** (animations, halos, scores qui pulsent) est autorisé et encouragé — il fonctionne sur l'œil, pas sur le langage. Les deux ne se contredisent pas.

Atténuation progressive selon les niveaux :
- **6e/5e** : animations pleines, pièces volantes possibles, halos, barre de progression
- **4e** : animations atténuées (durées −30%, halos diminués)
- **3e** : animations minimales (pas de pièces volantes, juste pulsations chiffres et halo discret)

### Principe 9 — Traçabilité des erreurs
Chaque erreur garde la mémoire de son origine. Date + source (dictée n°X / réécriture Y / éval Z) + notion. Cette traçabilité est visible à l'élève et au prof.

### Principe 10 — Profil élève unifié
Toutes les apps (dictée, réécriture, atelier, évaluations, rédaction, étude de texte, futurs outils) alimentent un profil élève unique dans Firebase. L'Atelier n'est qu'un consommateur de ce profil parmi d'autres. À terme, ce profil offre une vue 360° de l'élève en français.

---

## Zone 1 — Périmètre

### 1.1 Vocation

- **Remediation + entretien** : remediation prioritaire (questions sur les notions ratées) + composante d'entretien (les notions consolidées reviennent périodiquement pour vérifier qu'elles tiennent).
- **Mémorisation espacée style Anki** : J+7, J+30, J+90, J+180, J+365.

### 1.2 Sources d'erreurs (input)

- Dictées (`correction_dictee.html`, `dictee_universelle.html`, futures)
- Réécritures (`reecriture.html`, `reecriture_bb4e.html`)
- Évaluations diverses (`grammaire_ch10_*.html`, conjugaison ch.16/17, discours rapportés, analyse logique, etc.)
- Apps futures : rédaction, étude de texte

### 1.3 Format des questions

- QCM (choix unique ou multiple)
- Saisie (courte ou longue)
- Appariement (2 colonnes à relier)
- Glisser-déposer (3 sous-types : catégorie / ordre / comblement)

Règle affichée après chaque réponse (pas de leçons autonomes — gabarit complet : énoncé + astuce + 2-3 exemples).

### 1.4 Déclenchement élève

- **Automatique post-dictée** : obligatoire. L'élève ne peut pas zapper.
- **Bloqué** tant que la dictée n'est pas corrigée par le prof.
- **Accès libre possible** mais **uniquement sur les notions déjà vues en classe** (champ `vue_en_classe` par notion et par classe).
- **Versus** : mode compétitif entre élèves.

### 1.5 Cas particuliers

- **Mode allégé** pour DYS/PAP/PPRE : moins de questions par session (3-5), pas de saisie complexe, difficulté plafonnée à 2.
- **Élève absent** : Atelier accessible quand même.
- **Notion bloquante (5 échecs consécutifs)** : alerte prof, le prof décide (dispenser, alléger, reprendre, laisser).
- **Le prof peut dispenser** un élève d'une notion (toggle dans le panneau).

### 1.6 Hors périmètre

- Pas de leçons autonomes (que des questions)
- Pas de mode chronométré simple (pas de "défi 5 min" — uniquement le versus)
- Pas de partage parents (sauf récap exportable)

### 1.7 Profil

- Récap partageable aux parents (PDF imprimable, optionnel).

---

## Zone 2 — Taxonomie complète

### 2.1 Structure

- **3 niveaux fixes** : Domaine > Famille > Notion
- **5 domaines** : Orthographe lexicale, Orthographe grammaticale, Grammaire, Conjugaison, Lexique
- **37 familles**
- **142 notions** au total (granularité moyenne, conformément aux principes 1, 2, 3)

### 2.2 Identifiants

- Chaque notion a un **ID interne stable et immuable** (jamais modifié)
- Le **libellé** peut être modifié librement (prof + élève)
- **Pas de versionnage** complexe (la grammaire ne change pas)
- **Avertissement** seulement si suppression d'une notion utilisée

### 2.3 Gouvernance

- Toi seul, depuis le panneau prof, n'importe quand
- Modifications rares en pratique

### 2.4 Domaine 1 — Orthographe lexicale (26 notions, 6 familles)

#### Famille 1 — Doubles consonnes

| ID | Libellé prof | Libellé élève | Niveaux | Exemple |
|---|---|---|---|---|
| `ortho-lex-001` | Doubles consonnes courantes (mm, nn, ll, tt, rr, ss, ff, pp) | Mots avec deux consonnes (femme, donner, aller...) | 6e-3e | "comme" / "homme" / "femme" |
| `ortho-lex-002` | Verbes en -eler / -eter (alternance ll/l et tt/t) | Verbes comme "appeler", "jeter" (j'appelle / nous appelons) | 5e-3e | "j'appelle" vs "nous appelons" |
| `ortho-lex-003` | Préfixes en double consonne (in-, im-, ir-, il-) | Mots qui commencent par "in-", "im-", "ir-" | 4e-3e | "innombrable", "immobile", "irrégulier" |
| `ortho-lex-004` | Mots fréquemment surdoublés ou sous-doublés | Mots où on hésite à doubler la consonne | 6e-3e | "apercevoir" (un seul p) / "appartement" (deux p) |

#### Famille 2 — Accents

| ID | Libellé prof | Libellé élève | Niveaux | Exemple |
|---|---|---|---|---|
| `ortho-lex-005` | Accent aigu / accent grave sur le e | Choisir entre é et è | 6e-3e | "élève" / "régulier" / "frère" |
| `ortho-lex-006` | Accent circonflexe (lettre disparue, distinction de sens) | L'accent circonflexe (le "chapeau") | 6e-3e | "âge", "forêt", "dû" / "du" |
| `ortho-lex-007` | Tréma | Le tréma (les deux points sur la voyelle) | 5e-3e | "Noël", "naïf", "aiguë" |
| `ortho-lex-008` | Cédille | La cédille (sous le c) | 6e-3e | "ça", "leçon", "français" |

> Note : la notion "accent grave sur à/où/déjà" a été déplacée en orthographe grammaticale (homophones).

#### Famille 3 — Lettres muettes

| ID | Libellé prof | Libellé élève | Niveaux | Exemple |
|---|---|---|---|---|
| `ortho-lex-010` | Consonnes finales muettes (s, t, d, p, x...) | La consonne qu'on n'entend pas à la fin du mot | 6e-3e | "tabac", "sport", "blanc", "longtemps" |
| `ortho-lex-011` | H initial (muet ou aspiré) | Le "h" en début de mot | 6e-3e | "l'homme" / "le hibou" |
| `ortho-lex-012` | E muet à l'intérieur ou à la fin du mot | Le "e" qu'on n'entend pas | 6e-4e | "samedi", "envelopper", "dévouement" |

#### Famille 4 — Confusions phonétiques

| ID | Libellé prof | Libellé élève | Niveaux | Exemple |
|---|---|---|---|---|
| `ortho-lex-013` | Le son [s] : s, ss, c, ç, sc, t (devant i + voyelle) | Comment écrire le son "ss" | 6e-3e | "passion", "leçon", "patience", "scène" |
| `ortho-lex-014` | Le son [z] : s entre voyelles, z, x | Comment écrire le son "z" | 6e-3e | "désert", "zoo", "deuxième" |
| `ortho-lex-015` | Le son [ʒ] : g (devant e/i), j, ge (devant a/o/u) | Comment écrire le son "j" | 6e-3e | "gens", "jamais", "nous mangeons", "village" |
| `ortho-lex-016` | Le son [k] : c, qu, k, ch, q | Comment écrire le son "k" | 6e-3e | "caméra", "qui", "kilo", "chœur", "coq" |
| `ortho-lex-017` | Le son [f] : f, ff, ph | Comment écrire le son "f" | 6e-3e | "film", "effort", "philosophie" |
| `ortho-lex-018` | Le son [ɛ̃] : in, im, ain, ein, en (rare) | Comment écrire le son "in" | 6e-3e | "cousin", "important", "pain", "plein" |
| `ortho-lex-019` | Le son [ɑ̃] : an, am, en, em | Comment écrire le son "an" | 6e-3e | "chant", "lampe", "enfant", "emmener" |
| `ortho-lex-020` | Le son [ɔ̃] : on, om | Comment écrire le son "on" | 6e-3e | "monde", "ombre" |
| `ortho-lex-021` | Le son [o] : o, au, eau, ô | Comment écrire le son "o" fermé | 6e-3e | "rose", "auto", "bateau", "hôtel" |
| `ortho-lex-022` | Le son [j] : i, y, ill, il (final) | Comment écrire le son "y" / "ille" | 6e-3e | "yeux", "fille", "travail", "iode" |

#### Famille 5 — Mots composés et trait d'union

| ID | Libellé prof | Libellé élève | Niveaux | Exemple |
|---|---|---|---|---|
| `ortho-lex-023` | Présence ou absence du trait d'union | Quand mettre un trait d'union dans un mot composé | 5e-3e | "porte-monnaie", "pomme de terre", "arc-en-ciel" |
| `ortho-lex-024` | Pluriel des mots composés | Comment mettre au pluriel les mots composés | 4e-3e | "des porte-monnaie" / "des arcs-en-ciel" / "des belles-mères" |

#### Famille 6 — Apostrophes et élisions

| ID | Libellé prof | Libellé élève | Niveaux | Exemple |
|---|---|---|---|---|
| `ortho-lex-025` | Élision devant voyelle ou h muet (le, la, je, me, te, se, ce, ne, de, que, si) | L'apostrophe quand le mot suivant commence par une voyelle ou un h | 6e-3e | "l'arbre", "j'arrive", "qu'il" |
| `ortho-lex-026` | Apostrophe interdite (h aspiré, mots commençant par "y", numériques) | Quand on ne fait PAS d'apostrophe | 6e-4e | "le hibou", "la onzième", "le yacht" |

### 2.5 Domaine 2 — Orthographe grammaticale (42 notions, 6 familles)

#### Famille 7 — Accords dans le groupe nominal

| ID | Libellé prof | Libellé élève | Niveaux | Exemple |
|---|---|---|---|---|
| `ortho-gram-001` | Accord déterminant-nom (genre et nombre) | Accord du déterminant avec le nom | 6e-3e | "ce livre" / "ces livres" |
| `ortho-gram-002` | Accord adjectif-nom (genre et nombre) | Accord de l'adjectif avec le nom | 6e-3e | "une grande maison" / "de grands jardins" |
| `ortho-gram-003` | Adjectifs de couleur (règles particulières) | Accord des adjectifs de couleur | 5e-3e | "des yeux bleus" / "des yeux marron" |
| `ortho-gram-004` | Adjectif après plusieurs noms (accord avec le plus proche / au masculin pluriel) | Accord d'un adjectif qui suit plusieurs noms | 4e-3e | "un garçon et une fille charmants" |
| `ortho-gram-005` | "Tout" / "tous" / "toute" / "toutes" | Accord de "tout" | 5e-3e | "tout le monde", "tous les jours" |
| `ortho-gram-006` | "Demi", "nu", "ci-joint" devant ou après le nom | Accord de "demi", "nu", "ci-joint" | 4e-3e | "une demi-heure" / "deux heures et demie" |

#### Famille 8 — Accords sujet-verbe

| ID | Libellé prof | Libellé élève | Niveaux | Exemple |
|---|---|---|---|---|
| `ortho-gram-007` | Accord sujet-verbe simple | Accord du verbe avec son sujet | 6e-3e | "les enfants jouent" |
| `ortho-gram-008` | Sujet inversé ou éloigné du verbe | Accord quand le sujet est loin du verbe ou après lui | 5e-3e | "Que faisaient les enfants ?" |
| `ortho-gram-009` | Plusieurs sujets coordonnés | Accord du verbe avec plusieurs sujets | 5e-3e | "Paul et Marie partent" |
| `ortho-gram-010` | Sujets reliés par "ou", "ni", "comme", "ainsi que" | Accord du verbe quand les sujets sont reliés par "ou", "ni" | 4e-3e | "Pierre ou Paul viendra" |
| `ortho-gram-011` | Sujet collectif ("la plupart", "une foule de", "beaucoup de") | Accord avec un sujet collectif | 4e-3e | "La plupart des élèves sont absents" |
| `ortho-gram-012` | Pronom relatif "qui" sujet | Accord du verbe après "qui" | 4e-3e | "C'est moi qui suis venu" |

#### Famille 9 — Accords du participe passé

| ID | Libellé prof | Libellé élève | Niveaux | Exemple |
|---|---|---|---|---|
| `ortho-gram-013` | Participe passé sans auxiliaire | Participe passé sans auxiliaire | 5e-3e | "les enfants partis", "une lettre écrite" |
| `ortho-gram-014` | Participe passé avec être | Participe passé avec "être" | 5e-3e | "elle est partie" / "ils sont arrivés" |
| `ortho-gram-015` | Participe passé avec avoir (sans COD ou COD après) | Participe passé avec "avoir" sans COD avant | 4e-3e | "elle a mangé une pomme" |
| `ortho-gram-016` | Participe passé avec avoir et COD antéposé | Participe passé avec "avoir" et COD avant | 4e-3e | "la pomme qu'elle a mangée" |
| `ortho-gram-017` | Participe passé des verbes pronominaux | Participe passé des verbes pronominaux | 3e | "elle s'est lavée" / "elle s'est lavé les mains" |

#### Famille 10 — Pluriels irréguliers

| ID | Libellé prof | Libellé élève | Niveaux | Exemple |
|---|---|---|---|---|
| `ortho-gram-018` | Pluriels en -aux / -als (mots en -al) | Pluriel des mots en "-al" | 6e-3e | "cheval/chevaux", "festival/festivals" |
| `ortho-gram-019` | Pluriels en -oux / -ous (mots en -ou) | Pluriel des mots en "-ou" (les 7 exceptions en -oux) | 6e-3e | "bijoux", "cailloux"... vs "trous", "fous" |
| `ortho-gram-020` | Pluriels en -aux / -ails (mots en -ail) | Pluriel des mots en "-ail" | 6e-3e | "travail/travaux", "détail/détails" |
| `ortho-gram-021` | Mots invariables en nombre (mots en -s, -x, -z) | Mots qui ne changent pas au pluriel | 6e-4e | "le bras / les bras" |

#### Famille 11 — Féminins irréguliers

| ID | Libellé prof | Libellé élève | Niveaux | Exemple |
|---|---|---|---|---|
| `ortho-gram-022` | Féminins en -elle, -enne, -onne, -esse (doublement de la consonne) | Féminins avec consonne doublée | 6e-4e | "chat/chatte", "bon/bonne" |
| `ortho-gram-023` | Féminins en -euse, -trice, -ière | Féminins en "-euse", "-trice", "-ière" | 6e-4e | "danseur/danseuse", "acteur/actrice" |
| `ortho-gram-024` | Féminins irréguliers totaux | Féminins complètement différents | 6e-4e | "homme/femme", "frère/sœur" |

#### Famille 12 — Homophones grammaticaux (notion stratégique)

| ID | Libellé prof | Libellé élève | Niveaux | Exemple |
|---|---|---|---|---|
| `ortho-gram-025` | a / à | Choisir entre "a" et "à" | 6e-3e | "il a faim" / "il va à la maison" |
| `ortho-gram-026` | et / est | Choisir entre "et" et "est" | 6e-3e | "Paul et Marie" / "il est grand" |
| `ortho-gram-027` | son / sont | Choisir entre "son" et "sont" | 6e-3e | "son livre" / "ils sont là" |
| `ortho-gram-028` | on / ont | Choisir entre "on" et "ont" | 6e-3e | "on mange" / "ils ont faim" |
| `ortho-gram-029` | ou / où | Choisir entre "ou" et "où" | 6e-3e | "thé ou café ?" / "où vas-tu ?" |
| `ortho-gram-030` | ce / se | Choisir entre "ce" et "se" | 6e-3e | "ce livre" / "il se lave" |
| `ortho-gram-031` | ses / ces | Choisir entre "ses" et "ces" | 6e-3e | "ses parents" / "ces gens-là" |
| `ortho-gram-032` | c'est / s'est / sais / sait | Choisir entre "c'est", "s'est", "sais", "sait" | 5e-3e | "c'est vrai" / "il s'est blessé" |
| `ortho-gram-034` | mais / mes / met / mets | Choisir entre "mais", "mes", "met", "mets" | 5e-3e | "mais oui" / "mes parents" |
| `ortho-gram-035` | leur / leurs (déterminant vs pronom) | Choisir entre "leur" et "leurs" | 5e-3e | "leur maison" / "leurs amis" / "je leur parle" |
| `ortho-gram-036` | quel(s) / quelle(s) / qu'elle(s) | Choisir entre "quel" et "qu'elle" | 4e-3e | "quel livre" / "qu'elle parte" |
| `ortho-gram-037` | la / là / l'a | Choisir entre "la", "là", "l'a" | 5e-3e | "la maison" / "viens là" / "il l'a vue" |
| `ortho-gram-038` | si / s'y / ci | Choisir entre "si" et "s'y" | 4e-3e | "si tu veux" / "il s'y rend" |
| `ortho-gram-039` | sans / s'en / sent / sens | Choisir entre "sans", "s'en", "sent", "sens" | 4e-3e | "sans toi" / "il s'en va" |
| `ortho-gram-040` | dans / d'en | Choisir entre "dans" et "d'en" | 4e-3e | "dans la maison" / "venir d'en sortir" |
| `ortho-gram-041` | peu / peut / peux | Choisir entre "peu", "peut", "peux" | 6e-4e | "un peu de pain" / "il peut venir" |
| `ortho-gram-042` | près / prêt | Choisir entre "près" et "prêt" | 5e-4e | "près de toi" / "il est prêt" |
| `ortho-gram-043` | plus tôt / plutôt | Choisir entre "plus tôt" et "plutôt" | 4e-3e | "viens plus tôt" / "plutôt joli" |

> Note : `ortho-gram-033` n'existe pas (doublon supprimé avec `ortho-gram-029`).

### 2.6 Domaine 3 — Grammaire (38 notions, 6 familles)

#### Famille 13 — Nature des mots (classes grammaticales)

| ID | Libellé prof | Libellé élève | Niveaux |
|---|---|---|---|
| `gram-001` | Nom (commun, propre) | Reconnaître un nom | 6e-3e |
| `gram-002` | Déterminants (articles, possessifs, démonstratifs, indéfinis, numéraux) | Reconnaître un déterminant | 6e-3e |
| `gram-003` | Adjectif qualificatif | Reconnaître un adjectif | 6e-3e |
| `gram-004` | Pronoms (personnels, possessifs, démonstratifs, relatifs, indéfinis) | Reconnaître un pronom | 6e-3e |
| `gram-005` | Verbe | Reconnaître un verbe | 6e-3e |
| `gram-006` | Adverbe | Reconnaître un adverbe | 6e-3e |
| `gram-007` | Préposition | Reconnaître une préposition | 6e-3e |
| `gram-008` | Conjonction (de coordination, de subordination) | Reconnaître une conjonction | 5e-3e |
| `gram-009` | Interjection | Reconnaître une interjection | 6e-4e |

#### Famille 14 — Fonctions dans la phrase

| ID | Libellé prof | Libellé élève | Niveaux |
|---|---|---|---|
| `gram-010` | Sujet | Trouver le sujet du verbe | 6e-3e |
| `gram-011` | COD (complément d'objet direct) | Trouver le COD | 6e-3e |
| `gram-012` | COI (complément d'objet indirect) | Trouver le COI | 5e-3e |
| `gram-013` | Compléments circonstanciels (lieu, temps, manière, cause, but...) | Trouver le complément circonstanciel | 5e-3e |
| `gram-014` | Attribut du sujet | Trouver l'attribut du sujet | 5e-3e |
| `gram-015` | Épithète (du nom) | Trouver l'épithète | 5e-3e |
| `gram-016` | Apposition | Trouver l'apposition | 4e-3e |
| `gram-017` | Complément du nom | Trouver le complément du nom | 5e-3e |

#### Famille 15 — Types et formes de phrase

| ID | Libellé prof | Libellé élève | Niveaux |
|---|---|---|---|
| `gram-018` | Phrase déclarative, interrogative, exclamative, injonctive | Le type de phrase | 6e-3e |
| `gram-019` | Forme affirmative / négative | Phrase affirmative ou négative | 6e-3e |
| `gram-020` | Forme active / passive | Phrase active ou passive | 4e-3e |
| `gram-021` | Forme personnelle / impersonnelle | Forme impersonnelle ("il pleut", "il faut") | 4e-3e |
| `gram-022` | Forme emphatique (mise en relief) | Mise en relief ("c'est... que/qui") | 3e |

#### Famille 16 — Phrase simple et complexe (propositions)

| ID | Libellé prof | Libellé élève | Niveaux |
|---|---|---|---|
| `gram-023` | Phrase simple / phrase complexe | Phrase simple ou phrase complexe | 5e-3e |
| `gram-024` | Juxtaposition / coordination | Propositions juxtaposées ou coordonnées | 5e-3e |
| `gram-025` | Subordination — proposition subordonnée relative | La proposition subordonnée relative (qui, que, dont...) | 4e-3e |
| `gram-026` | Subordination — proposition subordonnée conjonctive (complétive) | La complétive (proposition introduite par "que") | 4e-3e |
| `gram-027` | Subordination — proposition subordonnée circonstancielle | La circonstancielle (cause, temps, but...) | 4e-3e |
| `gram-028` | Subordination — proposition subordonnée interrogative indirecte | L'interrogation indirecte | 3e |

#### Famille 17 — Discours rapporté

| ID | Libellé prof | Libellé élève | Niveaux |
|---|---|---|---|
| `gram-029` | Discours direct | Le discours direct (avec guillemets) | 5e-3e |
| `gram-030` | Discours indirect | Le discours indirect | 4e-3e |
| `gram-031` | Discours indirect libre | Le discours indirect libre | 3e |
| `gram-032` | Transposition discours direct → indirect | Passer du discours direct au discours indirect | 4e-3e |

#### Famille 18 — Connecteurs logiques

| ID | Libellé prof | Libellé élève | Niveaux |
|---|---|---|---|
| `gram-033` | Connecteurs de cause | Connecteurs qui expriment la cause | 5e-3e |
| `gram-034` | Connecteurs de conséquence | Connecteurs qui expriment la conséquence | 5e-3e |
| `gram-035` | Connecteurs de but | Connecteurs qui expriment le but | 4e-3e |
| `gram-036` | Connecteurs d'opposition / concession | Connecteurs d'opposition (mais, cependant...) | 4e-3e |
| `gram-037` | Connecteurs de temps | Connecteurs qui expriment le temps | 5e-3e |
| `gram-038` | Connecteurs de condition | Connecteurs qui expriment la condition | 4e-3e |

### 2.7 Domaine 4 — Conjugaison (26 notions, 11 familles)

#### Famille 19 — Présent

| ID | Libellé prof | Libellé élève | Niveaux |
|---|---|---|---|
| `conj-001` | Présent — verbes du 1er groupe (-er) | Présent des verbes en "-er" | 6e-3e |
| `conj-002` | Présent — verbes du 2e groupe (-ir, -issons) | Présent des verbes du 2e groupe (finir, choisir) | 6e-3e |
| `conj-003` | Présent — verbes du 3e groupe (irréguliers) | Présent des verbes irréguliers (3e groupe) | 6e-3e |
| `conj-004` | Présent — auxiliaires être et avoir | Présent de "être" et "avoir" | 6e-3e |
| `conj-005` | Présent — particularités orthographiques (cer/ger, eler/eter, yer) | Particularités du présent (manger → nous mangeons) | 5e-3e |

#### Famille 20 — Imparfait

| ID | Libellé prof | Libellé élève | Niveaux |
|---|---|---|---|
| `conj-006` | Imparfait — terminaisons régulières | Terminaisons de l'imparfait (-ais, -ait, -ions, -iez, -aient) | 6e-3e |
| `conj-007` | Imparfait — particularités (verbes en -ier, -yer, -cer, -ger) | Particularités de l'imparfait | 5e-3e |

#### Famille 21 — Passé simple

| ID | Libellé prof | Libellé élève | Niveaux |
|---|---|---|---|
| `conj-008` | Passé simple — 1er groupe (-ai, -as, -a, -âmes, -âtes, -èrent) | Passé simple des verbes en "-er" | 5e-3e |
| `conj-009` | Passé simple — 2e groupe et certains 3e (-is, -it, -îmes, -îtes, -irent) | Passé simple en "-is" | 5e-3e |
| `conj-010` | Passé simple — autres 3e groupe (-us, -ut, -ûmes, -ûtes, -urent) | Passé simple en "-us" (vouloir, courir, lire...) | 5e-3e |
| `conj-011` | Passé simple — verbes très irréguliers (être, avoir, venir, tenir, faire) | Passé simple des verbes très irréguliers | 5e-3e |

#### Famille 22 — Passé composé

| ID | Libellé prof | Libellé élève | Niveaux |
|---|---|---|---|
| `conj-012` | Passé composé — formation (auxiliaire + participe passé) | Former le passé composé | 6e-3e |
| `conj-013` | Passé composé — choix de l'auxiliaire (être ou avoir) | Choisir entre "être" et "avoir" au passé composé | 6e-3e |

#### Famille 23 — Plus-que-parfait

| ID | Libellé prof | Libellé élève | Niveaux |
|---|---|---|---|
| `conj-014` | Plus-que-parfait — formation | Former le plus-que-parfait | 5e-3e |

#### Famille 24 — Futur simple

| ID | Libellé prof | Libellé élève | Niveaux |
|---|---|---|---|
| `conj-015` | Futur simple — terminaisons régulières | Terminaisons du futur (-rai, -ras, -ra, -rons, -rez, -ront) | 6e-3e |
| `conj-016` | Futur simple — radicaux irréguliers | Radicaux irréguliers du futur | 6e-3e |

#### Famille 25 — Conditionnel

| ID | Libellé prof | Libellé élève | Niveaux |
|---|---|---|---|
| `conj-017` | Conditionnel présent — formation | Conditionnel présent (-rais, -rait, -rions...) | 5e-3e |
| `conj-018` | Confusion futur / conditionnel à la 1re personne (je -rai vs -rais) | Ne pas confondre "je chanterai" et "je chanterais" | 4e-3e |

#### Famille 26 — Subjonctif

| ID | Libellé prof | Libellé élève | Niveaux |
|---|---|---|---|
| `conj-019` | Subjonctif présent — formation | Former le subjonctif présent | 4e-3e |
| `conj-020` | Emploi du subjonctif (après il faut que, je veux que, bien que...) | Quand utiliser le subjonctif | 4e-3e |

#### Famille 27 — Impératif

| ID | Libellé prof | Libellé élève | Niveaux |
|---|---|---|---|
| `conj-021` | Impératif — formation (3 personnes : tu, nous, vous) | Former l'impératif (viens, venons, venez) | 6e-3e |
| `conj-022` | Impératif — particularité du 1er groupe (-e sans s sauf devant en/y) | Pas de "s" à l'impératif des verbes en "-er" | 5e-3e |

#### Famille 28 — Modes non personnels (infinitif, participe)

| ID | Libellé prof | Libellé élève | Niveaux |
|---|---|---|---|
| `conj-023` | Confusion infinitif / participe passé du 1er groupe (-er vs -é) | Ne pas confondre "manger" et "mangé" | 6e-3e |
| `conj-024` | Participe présent / adjectif verbal (-ant) | Participe présent ou adjectif | 4e-3e |

#### Famille 29 — Concordance des temps

| ID | Libellé prof | Libellé élève | Niveaux |
|---|---|---|---|
| `conj-025` | Concordance dans la subordonnée | Choisir le bon temps dans une subordonnée | 4e-3e |
| `conj-026` | Concordance dans le système hypothétique (si + imparfait → conditionnel) | "Si" + imparfait → conditionnel | 4e-3e |

### 2.8 Domaine 5 — Lexique (10 notions, 8 familles)

| ID | Libellé prof | Libellé élève | Niveaux |
|---|---|---|---|
| `lex-001` | Synonymes | Trouver un synonyme | 6e-3e |
| `lex-002` | Antonymes | Trouver un antonyme | 6e-3e |
| `lex-003` | Famille de mots (radical commun) | Trouver les mots d'une même famille | 6e-3e |
| `lex-004` | Préfixes (sens et formation) | Reconnaître les préfixes | 6e-3e |
| `lex-005` | Suffixes (sens et formation) | Reconnaître les suffixes | 6e-3e |
| `lex-006` | Sens propre / sens figuré | Reconnaître le sens propre et le sens figuré | 5e-3e |
| `lex-007` | Niveaux de langue (familier, courant, soutenu) | Reconnaître le niveau de langue | 5e-3e |
| `lex-008` | Champ lexical | Reconnaître un champ lexical | 5e-3e |
| `lex-009` | Racines latines et grecques courantes | Racines latines et grecques (chrono-, bio-, -logie...) | 4e-3e |
| `lex-010` | Polysémie | Mots qui ont plusieurs sens | 5e-3e |

### 2.9 Bilan global

| Domaine | Familles | Notions |
|---|---|---|
| Orthographe lexicale | 6 | 26 |
| Orthographe grammaticale | 6 | 42 |
| Grammaire | 6 | 38 |
| Conjugaison | 11 | 26 |
| Lexique | 8 | 10 |
| **TOTAL** | **37** | **142** |

---

## Zone 3 — Banque de questions

### 3.1 Modèle de données d'une question

```javascript
question = {
  // Identité
  id: "q_a1b2c3d4",                  // ID unique stable
  type: "qcm" | "saisie" | "appariement" | "glisser",

  // Métadonnées de matching
  notions: ["ortho-gram-031"],        // 1 à 3 notions
  niveaux: ["6e", "5e"],              // niveaux ciblés
  difficulte: 1 | 2 | 3,              // 1 facile, 2 moyen, 3 difficile

  // Contenu pédagogique
  enonce: "Choisis la bonne orthographe :",
  consigne_complementaire: "...",     // optionnel

  // Réponse (structure dépend du type — voir 3.2)
  reponse: { ... },

  // Règle (gabarit A — toujours complète)
  regle: {
    enonce: "Texte de la règle court",
    astuce: "Astuce mnémotechnique",
    exemples: [
      { type: "positif", texte: "..." },
      { type: "positif", texte: "..." },
      { type: "negatif", texte: "..." }
    ]
  },

  // Optionnels
  exemple_complementaire: "...",
  media: null,                        // URL image (pour glisser-déposer)
  tags_libres: [],                    // tags prof persos

  // Publication
  published: false,                   // par défaut FALSE
  archived: false,                    // archivage seulement, pas de suppression dure

  // Auto-générés
  created_at: timestamp,
  updated_at: timestamp,
  created_by: "meney",
  usage_count: 0,
  success_rate: null,
  success_rate_by_niveau: { "5e": null, "4e": null },
  version: 1
}
```

### 3.2 Structure spécifique par type

#### Type 1 — QCM

```javascript
reponse: {
  mode: "unique" | "multiple",
  choix: ["ses", "ces", "s'est", "c'est"],
  bonnes_reponses: [1]                // indices des bonnes réponses
}
```

#### Type 2 — Saisie

```javascript
reponse: {
  phrase_a_completer: "Quand le héros ___ dans la pièce, tout le monde se retourna.",
  bonnes_reponses: ["entra"],         // chaînes acceptées
  tolerance: "stricte" | "accents-libres" | "casse-libre" | "permissive"
                                      // PAR DÉFAUT : permissive (accents + casse)
}
```

#### Type 3 — Appariement

```javascript
reponse: {
  mode: "bijection" | "multiple",
  colonne_gauche: ["ce", "mon", "trois", "quelques"],
  colonne_droite: ["démonstratif", "possessif", "numéral", "indéfini"],
  paires: [[0,0], [1,1], [2,2], [3,3]]    // gauche[i] ↔ droite[j]
}
```

#### Type 4 — Glisser-déposer

```javascript
reponse: {
  sous_type: "categorie" | "ordre" | "comblement",
  etiquettes: ["leur", "leurs", "leur", "leurs"],
  cibles: ["Déterminant", "Pronom"],
  bonnes_associations: [
    { etiquette_id: 0, cible_id: 0 },
    { etiquette_id: 1, cible_id: 0 }
    // ...
  ]
}
```

### 3.3 Charte rédactionnelle des règles (8 règles)

1. **Phrases ≤ 15 mots**. Si plus, on coupe.
2. **Vocabulaire usuel**. Pas de "désinence", "syntagme", "morphème". Préférer "terminaison", "groupe de mots", "partie du mot".
3. **Pas de doubles négations**.
4. **Pas d'abstraction sans exemple immédiat**.
5. **Structure répétée** : même architecture pour toutes les règles.
6. **Astuce concrète et vérifiable** : geste mental simple ("remplace par X, si ça marche, c'est Y").
7. **Exemples binaires** : un positif + un négatif.
8. **Tutoiement direct** : "tu écris", "tu remplaces". Pas de "on", pas de "il faut", pas de passif.

### 3.4 Volumétrie cible

Variable selon palier de la notion :

| Palier | Critère | Min. de questions |
|---|---|---|
| **Critique** | Erreurs très fréquentes en dictée | 15-20 |
| **Standard** | Erreurs régulières | 8-12 |
| **Léger** | Erreurs rares mais à couvrir | 4-6 |

Le palier est posé par le prof à la création de la notion. Réajustable au fil du temps.

### 3.5 Répartition par type

**Au moins 1 question par type** (QCM, Saisie, Appariement, Glisser) pour qu'une notion soit "publiable et utilisable par le moteur".

Le panneau prof affiche un indicateur visuel par notion : `QCM ✓ / Saisie ✓ / Appariement ✗ / Glisser ✓`. Notions incomplètes en jaune.

### 3.6 Stratégie de création (seed massif + enrichissement)

**Phase seed** :
- Génération JSON par lots (Claude) → import dans le panneau prof → revue rapide → publication famille par famille.
- Total estimé : ~1430 questions.
- Charge revue : ~30h étalées sur quelques semaines.
- **Timing** : seed après spec complète (zones 1-9 terminées), avant le code.

**Phase enrichissement** :
- ~1h/semaine en cours d'année.
- Création à la main au fil des copies réelles ("cette dictée a généré beaucoup d'erreurs sur X, je crée 5 nouvelles questions").

### 3.7 Maintenance

- **Alertes auto** sur taux de réussite extrêmes (>80% trop facile, <20% trop dure) et temps anormaux.
- **Archivage uniquement** pour les questions publiées (pas de suppression dure, sauf si jamais posée).
- **Banque prof-curated** : pas de participation élève (pas de notation, pas de signalement).

---

## Zone 4 — Moteur de pioche

### 4.1 Les 5 contextes

- **Contexte A — Post-dictée** (obligatoire)
- **Contexte B — Post-réécriture / post-évaluation**
- **Contexte C — Accès libre** (notions vues en classe seulement)
- **Contexte D — Anki** (entretien automatique J+7, J+30, J+90, J+180, J+365)
- **Contexte E — Versus** (compétitif entre élèves)

### 4.2 Profil élève longitudinal — modèle

```javascript
profil_eleve = {
  eleve_id: "leam.4e_banksy",
  classe: "4e Banksy",
  niveau: "4e",
  mode_allege: false,                 // DYS/PAP/PPRE

  notions: {
    "ortho-gram-031": {
      etat: "fragile",                // inconnue | fragile | en_cours | consolidée
      nb_erreurs_dictees: 2,
      nb_erreurs_reecritures: 0,
      nb_erreurs_evals: 1,
      nb_questions_posees: 5,
      nb_questions_reussies: 3,
      streak: 0,                      // réussites consécutives actuelles
      derniere_erreur: timestamp,
      derniere_question: timestamp,
      derniere_reussite: timestamp,
      historique: [                   // détail erreur par erreur
        {
          date: timestamp,
          source: { type: "dictee", id: "dictee_4e_ch5", nom: "Dictée n°5 — Maupassant" },
          mot_correct: "ces",
          mot_fautif: "ses"
        }
      ],
      // Anki (si état = consolidée)
      prochaine_revision: timestamp,
      intervalle_actuel: "J7",        // J7, J30, J90, J180, J365
      // Champs prof
      dispense: false,
      vue_en_classe: { vue: true, date: timestamp }
    }
  }
}
```

### 4.3 Machine d'états

| Transition | Déclencheur |
|---|---|
| `inconnue` → `fragile` | Première erreur OU première question ratée |
| `fragile` → `en_cours` | 1ère réussite après une erreur |
| `en_cours` → `consolidée` | N réussites consécutives (selon palier — voir 4.4) |
| `consolidée` → `fragile` | 1 erreur en dictée OU 1 question Anki ratée |
| `consolidée` → `en_cours` | 1 question Anki ratée mais pas d'erreur dictée |
| n'importe quoi → `dispense` | Toggle prof |

### 4.4 Seuils de consolidation par palier

| Palier de la notion | Seuil de consolidation |
|---|---|
| Critique | 5 réussites consécutives |
| Standard | 3 réussites consécutives |
| Léger | 2 réussites consécutives |

### 4.5 Les 6 ingrédients du moteur

1. **Filtres de base** : `published: true && !archived`, niveau de l'élève dans `niveaux`, anti-répétition 7 jours.
2. **Pertinence par notion** (score pondéré) :
   - +10 par erreur dictée non encore travaillée
   - +5 par erreur dictée déjà partiellement travaillée
   - +3 par notion `fragile`
   - +1 par notion `en_cours`
   - +0.5 par notion `consolidée` avec `prochaine_revision` échue
   - 0 (exclue) pour `inconnue` (sauf accès libre) et `dispense`
3. **Diversité des types** : ≥1 QCM + ≥1 saisie sur la session, jamais 3 du même type d'affilée.
4. **Difficulté progressive** : tier 1 → tier 2 → tier 3 selon score en cours.
5. **Anti-monotonie** : pas 2 questions consécutives sur la même notion ni du même type.
6. **Quotas** : 4-6 notions distinctes par session.

### 4.6 Composition par contexte

#### Contexte A — Post-dictée

- 5-10 questions selon nb d'erreurs (1 erreur → 5 questions, 5+ erreurs → 10 questions)
- 80% sur notions de cette dictée
- 20% sur notions fragiles antérieures
- Pas d'Anki, pas de notion inconnue

**Mode allégé (DYS/PAP/PPRE)** :
- 3-5 questions max
- Privilégier QCM et appariement (peu de saisie)
- Difficulté plafonnée à 2

#### Contexte B — Post-réécriture / post-évaluation

- Même logique que A
- Si évaluation thématique (ex: ch.16 conjugaison) : priorité absolue à la famille concernée

#### Contexte C — Accès libre

- 8 questions (longueur fixe)
- 50% notions `fragile`
- 30% notions `en_cours`
- 20% notions `consolidée` (entretien)
- Filtre dur : `vue_en_classe = true`
- Pas de notion `inconnue`

#### Contexte D — Anki

- Nombre = nb de notions échues, plafonné à 10
- 100% notions `consolidée` avec `prochaine_revision` échue
- Réussite → intervalle augmente (J+7 → J+30 → J+90 → J+180 → J+365)
- Échec → notion repasse en `fragile`, retour à 0
- Si retour après >14j sans connexion : plafond 10/jour, étalement

#### Contexte E — Versus

- 10 questions par manche
- Pioche dans intersection des profils des 2 élèves
- Niveau commun (4e vs 5e → niveau 5e max)
- Format : QCM + glisser uniquement (pas de saisie)
- Difficulté : médiane des deux profils
- Pas de cahier (exception au principe 5)

### 4.7 6 cas particuliers (garde-fous)

1. **Pas assez de questions** → élargissement progressif des critères (notions adjacentes, anti-rép 7→3j, niveau ±1). En dernier recours : message *"reviens demain"*.
2. **Échec en cascade début de session** → régression auto difficulté, réduction nb questions, alerte prof. Pas d'abandon de session.
3. **Réussite trop rapide** → augmentation auto difficulté, niveau de départ remonté à la session suivante.
4. **Fraude** → indicateurs (timing anormal, streak suspect, heure bizarre) + alerte prof discrète. Pas de blocage automatique.
5. **Notion bloquante (5 échecs consécutifs)** → pause notion + alerte prof.
6. **Conflit dictée vs Atelier** : la dictée prime. Erreur en dictée → notion repasse en `fragile` même si réussites Atelier récentes.

---

## Zone 5 — Expérience élève

### 5.1 Parcours type post-dictée

#### Étape 1 — Transition fin de dictée

Sur l'app de dictée :

> **Léa.**
>
> Tu as fini ta correction, bien. Maintenant on travaille tes erreurs — c'est là qu'on progresse vraiment.
>
> 8 exercices, 10 minutes. Cahier ouvert à la zone *Exos personnalisés*. Stylo, pas crayon.
>
> Quand tu es prête.
>
> [Bouton] **Commencer**

#### Étape 2 — Sas d'entrée

> **Programme du jour :**
>
> — Participe passé avec être
> — ses / ces
> — Passé simple en -er
> — Doubles consonnes
>
> 2 questions par notion.
>
> **Méthode** : tu écris l'exercice dans ton cahier, tu réponds dans l'app, tu recopies la règle. Dans cet ordre. Sans raccourci.
>
> [Bouton] **Question 1**

#### Étape 3 — Une question

> **1 / 8** — ses / ces
>
> Avant de cliquer : recopie la consigne, réfléchis, écris ta réponse dans le cahier.
>
> ---
>
> *« Regarde ___ chevaux qui galopent dans le champ. »*
>
> ☐ ses
> ☐ ces

(Bouton "Valider" grisé pendant 10s.)

#### Étape 4 — Feedback

**Si juste :**

> **Juste.** *ces chevaux* = ceux-là.
>
> ---
>
> **Règle — ses / ces**
>
> *ses* = à quelqu'un (les siens).
> *ces* = qu'on montre (ceux-là).
>
> Astuce : remplace par *ceux-là* → c'est **ces**. Remplace par *les siens* → c'est **ses**.
>
> Exemples :
> — Il a perdu **ses** clés. (les siennes)
> — Regarde **ces** nuages. (ceux-là)
>
> Recopie dans le cahier avant de continuer.
>
> [Bouton] **Suivante**

**Si faux :**

> **Non, c'était *ces*.**
>
> Pas grave, c'est piégeux. L'important c'est de comprendre pourquoi.
>
> *(même règle)*
>
> Recopie-la deux fois — c'est en l'écrivant qu'on retient.
>
> [Bouton] **Suivante**

(Bouton "Suivante" grisé pendant 15s.)

#### Étape 5 — Bilan

> **Session terminée. 6 / 8 — bon score.**
>
> Acquis aujourd'hui :
> — Doubles consonnes
>
> Encore fragile, à retravailler :
> — ses / ces
> — Participe passé avec être
>
> Tu apportes ton cahier au prochain cours. Monsieur Meney vérifie.
>
> [Bouton] **Terminer**

#### Étape 6 — Sortie

> Session enregistrée.
>
> [Bouton] **Retour**

### 5.2 Adaptations par contexte

#### Contexte C — Accès libre

> **Léa.**
>
> Tu viens t'entraîner. Bien.
>
> Tu vas faire 8 exercices sur les notions vues en classe. Le système choisit pour toi : il pioche d'abord là où tu es fragile.
>
> Cahier ouvert, stylo. Méthode habituelle.
>
> [Bouton] **Commencer**

Bilan spécifique :

> **Session terminée. 7 / 8.**
>
> Tu as travaillé sans qu'on te le demande — c'est exactement ce qu'il faut. Continue.

#### Contexte D — Anki

Déclenchement : tableau de bord élève affiche *« 5 notions à réviser aujourd'hui »*.

> **Léa.**
>
> Tu as 5 notions à réviser. Le système te les ressort pour vérifier que tu n'as pas oublié.
>
> 5 questions, une par notion. C'est court.
>
> Cahier, stylo.
>
> [Bouton] **Commencer**

Bilan succès :

> **5 / 5.**
>
> Tu as tout retenu. Ces notions sont maintenant programmées pour revenir dans 30 jours.

Bilan échec partiel :

> **3 / 5.**
>
> Tu as oublié 2 notions : *ses / ces*, *passé simple en -er*. Elles repassent en travail. Tu les reverras au prochain Atelier.

#### Contexte E — Versus

> **Léa contre Hugo.**
>
> 10 questions. Chronomètre par question : 30 secondes. Le plus rapide marque double.
>
> Pas de cahier en versus — c'est pour s'amuser.
>
> [Bouton] **Prête**

Pas de règle entre questions (rythme préservé). Score juste/faux uniquement.

Fin :

> **Léa : 7 points. Hugo : 9 points.**
>
> Hugo gagne cette manche.
>
> Notions encore fragiles pour toi : *participe passé avec être*. À retravailler hors versus.
>
> [Bouton] **Revanche]   [Bouton] **Quitter**

### 5.3 Interface visuelle

#### 5.3.1 — Style général

- **Inspiré du site mais plus sobre**
- Typographie : EB Garamond (cohérence écosystème)
- Couleur dominante : **bleu nuit / ardoise** (identité Atelier autonome, indépendante du niveau)
- Pas de particules animées, pas d'étoiles, pas de dégradés tape-à-l'œil

#### 5.3.2 — Mise en page d'une question

**3 zones distinctes :**

```
┌──────────────────────────────────────────┐
│ HEADER (10%) — barre de contexte         │
│ [Question 3/8]  [ses/ces]      [Sortir]  │
│ ▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░ (progression)│
├──────────────────────────────────────────┤
│                                          │
│ ZONE DE TRAVAIL (70%)                    │
│                                          │
│   [consigne + rappel cahier]             │
│   [énoncé / phrase à compléter]          │
│   [zone de réponse]                      │
│   [bouton Valider — grisé 10s]           │
│                                          │
├──────────────────────────────────────────┤
│ ZONE DE FEEDBACK (20%) — cachée jusqu'à  │
│ validation. Apparaît : juste/faux + règle│
│ [bouton Suivante — grisé 15s]            │
└──────────────────────────────────────────┘
```

L'élève **ne voit jamais** à l'écran à la fois la question et la règle (anti-triche).

#### 5.3.3 — Saisie

- **Tolérance par défaut** : accents + casse libres (mode "permissive")
- **Validation** : bouton ET touche Entrée (les deux marchent)
- Mode strict paramétrable par question (utile pour notions accents é/è où l'accent EST l'objet du test)

### 5.4 Tableau de bord élève

```
═══════════════════════════════════════════
LÉA — 4e BANKSY
═══════════════════════════════════════════

🎯 À FAIRE AUJOURD'HUI

— 5 notions à réviser (Anki) → [Démarrer]
— Atelier post-dictée n°5 → ✅ Terminé hier

───────────────────────────────────────────

📊 TON AVANCEMENT

Notions vues en classe : 47
Consolidées : 23 (49%)
En cours : 18
Fragiles : 6

───────────────────────────────────────────

🔍 CE QUI TE RÉSISTE ENCORE

| Notion                       | Erreurs | Dernière | Sources                       |
|------------------------------|---------|----------|-------------------------------|
| Participe passé avec être    | 3       | 28 avril | Dictée n°5, Réécriture, Éval n°2 |
| ses / ces                    | 2       | 22 avril | Dictée n°4, Dictée n°5         |
| Passé simple en -us          | 2       | 15 avril | Dictée n°3, Éval n°2          |

(Clic sur une notion → vue détaillée — cf. 5.4.1)

───────────────────────────────────────────

✅ NOTIONS CONSOLIDÉES RÉCEMMENT

— Doubles consonnes (consolidée le 28 avril)
— Accord adjectif-nom (consolidée le 22 avril)

───────────────────────────────────────────

🎓 ENTRAÎNEMENT LIBRE → [Lancer]
⚔️ VERSUS → [Défier un camarade]
```

#### 5.4.1 — Vue détaillée d'une notion

```
═══════════════════════════════════════════
PARTICIPE PASSÉ AVEC ÊTRE — Niveau 5e
═══════════════════════════════════════════

TON HISTORIQUE SUR CETTE NOTION

| Date    | Source           | Mot écrit       | Bon mot          | Type            |
|---------|------------------|-----------------|------------------|-----------------|
| 28 avr  | Dictée n°5       | "elle est parti"| "elle est partie"| Erreur          |
| 22 avr  | Atelier (libre)  | —               | —                | Question ratée  |
| 15 avr  | Réécriture BB    | "ils sont arrivé"|"ils sont arrivés"| Erreur          |
| 10 avr  | Éval n°2         | "tombé"         | "tombée"         | Erreur          |

───────────────────────────────────────────

RÈGLE À RETENIR (rappel)

(la règle complète, copiable)

───────────────────────────────────────────

[Travailler cette notion maintenant]
→ Lance une mini-session de 4-5 questions ciblées
```

### 5.5 Système d'animations / gamification

#### Invariants (toujours présents, signature Atelier)

- Header bleu nuit avec score
- Score qui pulse à chaque point
- Barre de progression qui se remplit
- Bandeau juste/faux (vert/rouge, 1 seconde)

#### 6 variations aléatoires (effet récompense, simple à coder)

| Variation | Description |
|---|---|
| **A — Étincelle simple** | Étincelle (✦) jaillit du bouton, arc vers le score, fond dedans |
| **B — Chiffre flottant** | "+1" jaillit de la zone de réponse, monte, fade out |
| **C — Onde lumineuse** | Halo bleu/or part du bouton, se diffuse, disparaît |
| **D — Pulse + couleur** | Score tremble + prend teinte chaude (or → orange) une demi-seconde |
| **E — Bouton check** | Bouton de réponse devient vert vif avec ✓, puis revient |
| **F — Fond flash** | Écran prend teinte vert pâle 200ms |

À chaque point, le moteur pioche une variation au hasard. Pas de répétition immédiate (mémoire 3 dernières).

#### Variation G — Flying-coin (rare, événements spéciaux)

Animation pièce volante (réutilisée de `eval_ch10.html`) — réservée aux **milestones** : tous les 25 points, ou question critique réussie. Sa rareté lui donne du poids.

#### Effets paliers

- **Tous les 5 points** : effet plus marqué (pulse plus long)
- **Tous les 10 points** : message bref *"10 points — bien"*
- **Fin de session** : effet de clôture (score final qui s'inscrit en grand, brève pause, transition vers bilan)

#### Adaptation par niveau

| Niveau | Pool d'animations | Intensité moyenne |
|---|---|---|
| 6e / 5e | A à G (toutes) + paliers complets | Pleine |
| 4e | A à F + paliers réduits, G aux gros milestones | 70% |
| 3e | A, B, C, D uniquement + paliers minimaux | 50% |

#### Mécaniques globales

1. **Pièces/score** (animations ci-dessus)
2. **Streaks de consolidation** : "5 notions consolidées d'affilée" affiché discrètement dans le tableau de bord
3. **Versus**
4. **Anki visible** : "5 notions à réviser aujourd'hui"
5. **Détection comportements suspects** (hérité de `eval_ch10.html`) :
   - `tabSwitches` (changements d'onglet)
   - `hesitations` (combien de fois changé d'avis)
   - `itemTimestamps` (timing par item)
   - `isCharabia()` avec whitelist anti-faux-positif

#### Hors gamification (interdits)

- Pas de leaderboard public
- Pas de trophées cumulatifs ("Maître des accords")
- Pas de notifications push
- Pas d'avatars / personnalisation décorative
- Pas de "sons de victoire" agressifs

---

## Zones 6-9 — À traiter

Ces zones n'ont pas encore été travaillées avec le prof. Liste des sujets à couvrir.

### Zone 6 — Expérience prof (panneau de gestion)

- Vue de la taxonomie (parcours, édition libellés, ajout notions)
- Vue de la banque de questions (filtres par notion/niveau/type/difficulté/publié)
- Création/édition d'une question (4 formulaires selon type)
- Import en masse (JSON depuis Claude)
- Mode revue rapide (parcours validation Publier/Modifier/Rejeter)
- Vue par classe : grille élèves × notions (heatmap fragilités)
- Vue par élève : profil détaillé (consolidées, fragiles, historique)
- Alertes : notions bloquantes, questions trop dures/faciles, comportements suspects
- Toggle dispense par élève × notion
- Toggle "vue en classe" par notion × classe
- Édition palier d'une notion (Critique/Standard/Léger)

### Zone 7 — Suivi longitudinal et exports

- Génération PDF "récap parents" par élève
- Export CSV des données par classe
- Vue temporelle : progression élève au fil des semaines
- Comparaison classe (sans nommer les élèves) pour repérer fragilités collectives
- Statistiques globales prof : taux d'usage, notions piochées, etc.
- Archives (par année scolaire)

### Zone 8 — Intégration site et écosystème

- Onglet Atelier sur `index.html` par niveau
- Lien depuis le menu ⚙️ Outils prof (admin)
- Système de publication par classe (qui voit quoi)
- URL préparamétrées (ex: `?mode=eleve&dictee_origin=ID&niveau=4e`)
- Branchement post-dictée : redirection auto depuis `correction_dictee.html`
- Branchement post-réécriture : redirection auto depuis `reecriture.html`
- Branchement post-évaluation : redirection auto depuis chaque app d'évaluation
- Cohérence visuelle (header, footer, navigation)

### Zone 9 — Profil élève unifié + points de branchement

**Sujet le plus structurant — à traiter en premier des zones restantes.**

#### Format événement standard

```javascript
evenement = {
  eleve_id: "leam.4e_banksy",
  date: timestamp,
  source: {
    app: "correction_dictee" | "dictee_universelle" | "reecriture" |
         "reecriture_bb4e" | "atelier" | "eval_ch10" | "eval_ch16" |
         "eval_ch17" | "eval_discours" | "rédaction" | "etude_texte" | "...",
    instance_id: "dictee_4e_banksy_ch4",
    nom_lisible: "Dictée n°5 — Maupassant"
  },
  type: "erreur" | "reussite" | "consolidation" | "regression",
  notion: "ortho-gram-031",
  contexte: "regarde ___ chevaux",      // optionnel
  detail: {
    mot_fautif: "ses",
    mot_correct: "ces"
  }
}
```

Stockage Firebase : `/eleves/{id}/evenements/{auto-id}`.

Le profil élève est **calculé à la volée** à partir de l'historique des événements (état actuel de chaque notion, etc.).

#### Apps à équiper (rétrofit)

| App | Statut | Travail à faire |
|---|---|---|
| `correction_dictee.html` | Existe | Étendre GRAMM pour produire des tags de notions. Émettre événements vers Firebase. |
| `dictee_universelle.html` | Existe | Idem |
| `reecriture.html` | Existe | Tagger erreurs avec notions. Émettre événements. |
| `reecriture_bb4e.html` | Existe | Idem |
| `eval_ch10.html` | Existe | Mapper chaque exercice avec notions (ex: ex.5 → [gram-025, gram-027]). Émettre événements. **Migration Apps Script → Firebase** ou **double-envoi**. |
| Autres évaluations existantes | Existent | Idem |
| `atelier.html` | À coder | Native — émet directement |
| Rédaction | À coder | Native |
| Étude de texte | À coder | Native |

#### Mapping exercice → notions

Chaque app d'évaluation doit déclarer un dictionnaire `exoToNotions` :

```javascript
// Exemple eval_ch10.html
var exoToNotions = {
  ex1: ["gram-005"],                              // Verbes
  ex2: ["gram-023"],                              // Phrase simple/complexe
  ex3: ["gram-024"],                              // Juxta/coord
  ex4: ["gram-025"],                              // Subordonnée relative
  ex5: ["gram-025", "gram-026", "gram-027"],     // Diverses subordonnées
  // ...
};
```

#### Tableau de bord global élève

Vue d'ensemble accessible depuis le site `index.html` qui agrège **toutes** les apps. C'est le "vrai" tableau de bord (l'Atelier en est une composante).

Sections envisagées :
- Profil élève (notions consolidées / fragiles tous domaines)
- Historique chronologique multi-sources
- Fragilités récurrentes
- Progression par compétence (en lien avec les compétences C4 du programme)
- Récap pour les parents (PDF)

---

## Annexes techniques

### A1 — Stack technique

- **Frontend** : HTML/CSS/JS vanille single-file pattern (cohérent avec l'écosystème existant)
- **React** : importé via CDN (pattern `correction_dictee.html`, `reecriture.html`)
- **Backend données** : Firebase Realtime Database (`https://dictee-5e-ch4-default-rtdb.europe-west1.firebasedatabase.app`)
- **Hébergement** : GitHub Pages (`siteflow-io/monsieurjaipascompris`)
- **Pas de clé API** : tout gratuit (Firebase free tier)
- **Pas de build** : `file://` doit fonctionner pour le développement local

### A2 — Structure Firebase proposée

```
/taxonomie/
  /domaines/
    {domaine_id}/
      libelle: "Orthographe lexicale"
      ordre: 1
  /familles/
    {famille_id}/
      domaine: "ortho-lex"
      libelle: "Doubles consonnes"
      ordre: 1
  /notions/
    {notion_id}/                       // ex: "ortho-gram-031"
      famille: "homophones-grammaticaux"
      libelle_prof: "..."
      libelle_eleve: "..."
      niveaux: ["6e", "5e", "4e", "3e"]
      palier: "critique" | "standard" | "leger"
      seuil_consolidation: 5            // dérivé du palier
      ordre: 31

/atelier/
  /questions/
    {question_id}/
      type: "qcm" | ...
      notions: [...]
      niveaux: [...]
      difficulte: 1-3
      enonce, reponse, regle, ...
      published, archived
      created_at, ...

/eleves/
  /{eleve_id}/
    profil:
      classe, niveau, mode_allege, ...
    notions:
      {notion_id}:
        etat, compteurs, dates, ...
    evenements:
      {auto_id}:
        date, source, type, notion, contexte, detail
    sessions:
      {session_id}:
        type_contexte, date_debut, date_fin
        questions_posees: [...]
        score_final, ...

/site/
  /{niveau}/
    published: { ch1: true, ch2: false, ... }
  /classes/
    {classe_id}: [eleves...]

/atelier_global/
  vue_en_classe:
    {classe_id}:
      {notion_id}: { vue: true, date: timestamp }
```

### A3 — Décisions techniques importantes

- **Identifiants notions immuables** : `ortho-gram-031` ne change jamais, peu importe le libellé
- **Pas de versionnage** taxonomie (la grammaire ne change pas)
- **Archivage** des questions publiées (jamais de suppression dure)
- **Anti-répétition** 7 jours par défaut, élargissable à 3j en cas de pénurie
- **Tolérance saisie** : permissive (accents + casse) par défaut, paramétrable par question

### A4 — Conventions de code (héritées du projet)

- R/A : réponse concise + attente
- Zéro nom en dur dans le code (tout dans Firebase `/classes`)
- `testKeys` array pour les comptes TEST
- Noms de fichiers techniques en anglais (Chrome auto-translate)
- `file://` doit fonctionner (Firebase via CDN)
- Raisonner en français dans les blocs thinking

### A5 — Prochaines étapes (avant code)

1. **Compléter spec — Zone 9** (profil unifié) en priorité, puis 6, 7, 8
2. **Génération du seed** de questions (Claude génère JSON, Paul valide)
3. **Implémentation par phases** :
   - Phase A : Taxonomie + panneau prof minimal de gestion taxonomie
   - Phase B : Banque de questions + panneau prof CRUD questions
   - Phase C : Format événement standard + rétrofit `correction_dictee` et `reecriture`
   - Phase D : Atelier élève (1 contexte = post-dictée d'abord)
   - Phase E : Tableau de bord élève
   - Phase F : Anki + accès libre
   - Phase G : Versus
   - Phase H : Rétrofit autres évaluations + tableau de bord global

---

## Index des décisions par horodatage de session

Ce document consolide les décisions prises lors des sessions de spec du projet Atelier (avril-mai 2026). Chaque section représente une décision actée et ne peut être remise en cause sans revalidation explicite.

**Dernière mise à jour** : 5 mai 2026
**État** : zones 1-5 finalisées, zone 9 ajoutée au plan, zones 6/7/8/9 à traiter dans des sessions ultérieures.
