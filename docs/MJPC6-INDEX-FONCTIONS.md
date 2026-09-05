# INDEX DES FONCTIONS — `index.html` en production

*Régénéré le 05/09/2026, après la promotion **8.73.0-⑭** (commit `8a95be5ffbe7`).*
*Fichier mesuré : **1 774 212 octets**, md5 **`a841534fce9661bad089af862900b9a9`**.*

| | |
|---|---|
| **déclarations `function`** | **1270** |
| **noms distincts** | **1269** |
| **noms déclarés deux fois** | **1** — `nomDe` |

**Un nom déclaré deux fois est un piège** : c'est la seconde déclaration qui vaut, la première est du code mort. Le lot 2ter en a trouvé un (`edtDebutAnnee`, retiré en ⑧-a) parce qu'un compteur d'occurrences le cachait. **Compter des déclarations n'est pas compter des noms.**

## Par famille

| préfixe | fonctions | ce que c'est |
|---|---|---|
| `autres*` | **653** | le reste du site |
| `at*` | **246** | l'atelier et le déroulé |
| `edt*` | **230** | l'emploi du temps (lot 2ter) |
| `_dr*` | **58** | le moteur, interne |
| `mjpc*` | **31** | le socle d'écriture au hub |
| `secu*` | **29** | le magasin sécurisé et la corbeille |
| `taxo*` | **13** | la taxonomie |
| `dr*` | **3** | le moteur de dictée |
| `_site*` | **3** | le transport brut vers le hub |
| `m8*` | **3** | le mode test |

## Les trois portes de l'emploi du temps

Le bloc EDT ne peut être appelé de l'extérieur que par **trois** fonctions — c'est ce que la garde `verif_edt.py` vérifie :

- `edtArriveeProf` · `edtSectionPanneau` · `edtOuvrir`

Et il n'écrit que sous `/site/edt/`, par **une porte unique** — `edtEcrireArchive`, qui archive l'état d'avant et abandonne si l'archivage échoue.

## La borne des dates de l'année (⑭)

**`edtHorsAnnee`** décide si une date est hors de l'année scolaire déclarée. Elle lit **`EDT_DATES.debutAnnee` et `finAnnee` brutes** — elle ne borne que du côté où Paul a posé une date. Quatre appelants : `edtProjeter`, `edtPeindreAnnee`, `edtHeuresDeLEvenement`, `edtRefusDepot`.

**Elle se pose APRÈS la recherche de trace.** Le réel et les décisions ne sont **jamais** bornés : le passé ne se réécrit pas.

