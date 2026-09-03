# INDEX DES FONCTIONS — `index.html` en production

*Régénéré le 03/09/2026, après la promotion **8.73.0** (commit `c5e893bbc208`).*
*Fichier mesuré : **1 769 457 octets**, md5 **`8837063de4466afb71622e89181ae44a`**.*

| | |
|---|---|
| **déclarations `function`** | **1269** |
| **noms distincts** | **1268** |
| **noms déclarés deux fois** | **1** — `nomDe` |

**Un nom déclaré deux fois est un piège** : c'est la seconde déclaration qui vaut, la première est du code mort. Le lot 2ter en a trouvé un (`edtDebutAnnee`, retiré en ⑧-a) parce qu'un compteur d'occurrences le cachait. **Compter des déclarations n'est pas compter des noms.**

## Par famille

| préfixe | fonctions | ce que c'est |
|---|---|---|
| `autres*` | **653** | le reste du site |
| `at*` | **246** | l'atelier et le déroulé |
| `edt*` | **229** | l'emploi du temps (lot 2ter) |
| `_dr*` | **58** | le moteur, interne |
| `mjpc*` | **31** | le socle d'écriture au hub |
| `secu*` | **29** | le magasin sécurisé et la corbeille |
| `taxo*` | **13** | la taxonomie |
| `_site*` | **3** | le transport brut vers le hub |
| `m8*` | **3** | le mode test |
| `dr*` | **3** | le moteur de dictée |

## Les trois portes de l'emploi du temps

Le bloc EDT ne peut être appelé de l'extérieur que par **trois** fonctions — c'est ce que la garde `verif_edt.py` vérifie :

- `edtArriveeProf` · `edtSectionPanneau` · `edtOuvrir`

Et il n'écrit que sous `/site/edt/`, par **une porte unique** — `edtEcrireArchive`, qui archive l'état d'avant et abandonne si l'archivage échoue.

