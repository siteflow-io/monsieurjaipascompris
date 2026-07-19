# AUDIT ÉDUSCOL — les 148 libellés prof contre « La grammaire du français. Terminologie grammaticale » (2020)
> **VERSION À COMPLÉTER** — audit du 19/07/2026 par la conscience n°2 (tâche reprise de M8). Source auditée : `taxonomie_atelier.json` (58 155 o, meta v1.0.0). Référence : le guide Éduscol lui-même, texte extrait du PDF officiel (`guide-la-grammaire-du-francais-terminologie-grammaticale-67998.pdf`).
> **Application** : par Paul, via l'éditeur de taxonomie (livrable ④ de M8) — RENOMMAGES DE LIBELLÉS UNIQUEMENT, jamais d'id modifié. L'écart E2 demande un ARBITRAGE avant application (il touche le contenu d'une notion, pas seulement son nom).

## DÉCLARATION DE COUVERTURE
**Lu dans le texte même du guide** : l'avant-propos, le niveau I INTÉGRAL (fonctions, phrase/proposition, types et formes de phrases, les 8 natures, conjugaison, lexique) et le niveau II sections 1.1 à 1.7 (les quatre types de subordonnées, coordination/juxtaposition, types de phrases). **Non extrait** : niveau II sections 1.8 à 4 (p. 72-178 : formes de phrases détaillées, fonctions fines, natures fines, modes personnels/non personnels détaillés, lexique II). Les écarts identifiés ne dépendent pas des sections non lues, SAUF les trois points marqués [À CONFIRMER] ci-dessous. Les domaines Orthographe lexicale et Orthographe grammaticale portent des libellés DESCRIPTIFS (règles d'écriture), pas des termes de terminologie : conformes par nature, seuls leurs mots grammaticaux ont été contrôlés (tous justes : « déterminant », « participe passé », « pronom relatif »…).

## VERDICT D'ENSEMBLE
**142 libellés conformes** au vocabulaire 2020 · **2 écarts francs** (E1, E2) · **4 ajustements doux** (A1-A4) · **3 points non vérifiables dans l'extrait lu** (C1-C3, vraisemblablement conformes).
La taxonomie est globalement très bien indexée : toutes les fonctions (sujet, COD, COI, complément circonstanciel, attribut du sujet, épithète, apposition, complément du nom), toutes les natures (les 8 classes, avec « déterminant possessif/démonstratif » et jamais « adjectif possessif »), tous les temps et modes (dont « modes non personnels », terme EXACT du guide, I.3.2.2.1), et le conditionnel traité en temps sans jamais le déclarer mode — sont les termes mêmes du guide.

## E — LES DEUX ÉCARTS FRANCS

### E1 · `gram-003` — « adjectif qualificatif » → « adjectif »
**Guide** (I.3.3, II.3.2) : la classe se nomme « L'adjectif », sans qualificatif, partout. Le mot « qualificatif » a disparu de la terminologie 2020.
**Correction proposée (renommage simple)** : « Identifier un adjectif ». Libellé élève déjà conforme (« Reconnaître un adjectif »).

### E2 · `gram-018` — les types de phrase : la liste est FAUSSE au regard du guide ⚠ ARBITRAGE DE PAUL REQUIS
**Libellé actuel** : « Identifier le type de phrase (déclarative, interrogative, exclamative, injonctive) ».
**Guide** (I.2.4 et II.1.7, texte explicite) : il y a TROIS types — **déclaratif, interrogatif, impératif** (« le type impératif correspondant à l'injonction ») — et « **l'exclamation n'est pas un type** d'acte spécifique mais une nuance […] classée parmi les **formes** de phrases » (forme exclamative, II.1.8.3, aux côtés de négative, passive, emphatique, impersonnelle).
Deux écarts donc : ① « injonctive » se dit « impérative » dans le guide ; ② « exclamative » n'est pas un type mais une forme.
**Deux options, au choix de Paul** :
- **(a) Alignement strict** : gram-018 → « Identifier le type de phrase (déclarative, interrogative, impérative) », et l'exclamative REJOINT les formes (la famille 15 en compte déjà quatre : gram-019 à 022 — soit un renommage de l'une, soit une notion « forme exclamative » à créer via l'éditeur). C'est un déplacement de CONTENU, pas un simple renommage — d'où l'arbitrage.
- **(b) Renommage minimal** : « (déclarative, interrogative, impérative, exclamative) » — on corrige le seul vocabulaire (injonctive → impérative) et on garde l'exclamative dans la liste par commodité scolaire. Défendable : le guide lui-même documente les tolérances de l'usage scolaire (il le fait pour le conditionnel).
*Avis de la conscience : (a) — le principe d'ancrage du plan est « défendable face à l'institution », et la distinction type/forme est précisément le genre de point qu'un inspecteur regarde.*

## A — LES QUATRE AJUSTEMENTS DOUX (conformité renforcée, non obligatoires)

### A1 · `gram-019` — « forme affirmative et forme négative »
**Guide** (I.2.5) : seule la « forme négative » est nommée ; la phrase positive est « la phrase de base » — « on ne parlera pas de "forme positive" ». Ajustement possible : « Identifier la forme négative (et la phrase de base) ». *Le libellé actuel reste pédagogiquement clair ; écart de lettre, pas d'esprit.*

### A2 · `gram-020` — « forme active et forme passive »
**Guide** (même passage) : seule la « forme passive » est une forme ; « on ne parlera pas de "forme active" ». Ajustement symétrique possible. *Même remarque.*

### A3 · `gram-028` — « proposition subordonnée interrogative indirecte »
**Guide** (II.1.2.2 et II.1.5.3) : les propositions se nomment « interrogative TOTALE » (complétive, introduite par si) et « interrogative PARTIELLE » (sans mot subordonnant) ; « interrogation indirecte » désigne le PHÉNOMÈNE (toute interrogative en subordonnée), pas le nom de la proposition. Ajustement possible : « Identifier une proposition subordonnée interrogative (totale ou partielle) ». Le libellé élève (« L'interrogation indirecte ») peut rester : c'est le phénomène, et il est exact.

### A4 · `lex-007` — « niveaux de langue »
**Guide** (I.4.2.3) : le terme premier est « REGISTRE de langue » (familier, courant, soutenu — les trois mêmes) ; « niveau de langue » est explicitement noté comme équivalent « dans l'usage scolaire ». Ajustement possible : « Reconnaître les registres de langue (familier, courant, soutenu) ». *Toléré tel quel par le guide lui-même.*

## C — À CONFIRMER (sections du guide non extraites)
- **C1 · `conj-024`** « adjectif verbal » — niveau II, modes non personnels détaillés (p. 150-158) non lus. Terme traditionnel très vraisemblablement présent ; à confirmer avant tout renommage (aucun proposé).
- **C2 · `gram-029` à `032`** discours direct / indirect / indirect libre — relèvent des « fonctions énonciatives et textuelles » (II.2.7) non lues ; vocabulaire des programmes, aucun conflit connu.
- **C3 · `gram-033` à `038`** connecteurs — le guide (II.1.6) nomme « connecteurs argumentatifs » et « connecteurs textuels » ; les libellés par sens (cause, conséquence…) sont descriptifs et compatibles. Aucun renommage proposé.

## NOTE ANNEXE (hors renommage, pour mémoire)
Le guide range « donc » parmi les ADVERBES, pas les conjonctions de coordination (I.3.7.1, remarque explicite) — sans impact sur les libellés, mais utile aux contenus d'exercices sur gram-008 et gram-034.

## RÉCAPITULATIF POUR L'APPLICATION (via l'éditeur ④ de M8, par Paul)
| Id | Actuel | Proposé | Statut |
|---|---|---|---|
| gram-003 | Identifier un adjectif qualificatif | Identifier un adjectif | **À APPLIQUER** (E1) |
| gram-018 | …(déclarative, interrogative, exclamative, injonctive) | option (a) ou (b) ci-dessus | **ARBITRAGE PAUL** (E2) |
| gram-019 | Distinguer forme affirmative et forme négative | Identifier la forme négative (et la phrase de base) | optionnel (A1) |
| gram-020 | Distinguer forme active et forme passive | Identifier la forme passive (et la phrase de base) | optionnel (A2) |
| gram-028 | …interrogative indirecte | …interrogative (totale ou partielle) | optionnel (A3) |
| lex-007 | Reconnaître les niveaux de langue… | Reconnaître les registres de langue… | optionnel (A4) |

Rappel de l'invariant : **ids intouchés, libellés seuls** — l'historique des élèves est étiqueté par les ids.
