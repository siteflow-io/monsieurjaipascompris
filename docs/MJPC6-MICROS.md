# JOURNAL DES MICROS — les mises en ligne faites par dérogation à la règle

> **À quoi il sert.** Paul, 02/11/2026 08:21 : « il faut mettre un marqueur sur cette version afin qu'on sache plus tard que tu avais fait cette modif en micro (ou ouvrir un journal des micros, sur github, afin de savoir plus tard si un bug n'a pas été introduit par la dérogation à la règle). »
>
> **La règle à laquelle on déroge.** Le flux principal est le mandat d'un exécutant, son audit, puis le banc complet de la conscience, puis le « promeus » de Paul. La filière micro n'est jamais le défaut. Un micro est donc une exception : la conscience écrit elle-même le changement et le met en ligne, sur la décision explicite de Paul, avec ou sans banc.
>
> **Comment s'en servir.** Si un bug paraît, regarde d'abord ici : une version marquée « -micro » (dans `APP_VERSION`, visible sur le badge de l'accueil) est passée hors du flux. Chaque entrée dit ce qui a changé (le diff entier), ce qui a été mesuré, ce qui ne l'a pas été, et comment revenir.
>
> **Le marqueur.** La version porte « -micro » dans son nom (ex. `8.78.1-⑪-micro`). Le message du commit de production commence par « MICRO ». Une étiquette git (`micro-<date>-<version>`) était prévue, mais le dépôt refuse les étiquettes poussées depuis la session (02/11/2026 : « the remote end hung up ») : le nom de la version et ce journal font foi.

---

## 1 · 02/11/2026 08:21 — `8.78.1-⑪-micro` (conscience n°16) — SANS BANC

| | |
|---|---|
| **Décidé par** | Paul, 08:13 : « Non 9h en fait. on se passe du banc pour cette fois, tant pis. Tu peux le faire en micro maintenant ? Ou c'est trop complexe? » ; « promeus » à 08:21 |
| **Pourquoi** | sa classe à 9:00 ; la dette ⑱ ne pouvait pas attendre le mandat en cours et son banc (fin vers 09:30) |
| **La dette** | ⑱ — Paul, 07:48 : « en répétition, si je scrolle dans les diapos du milieu, elles passent ET AUSSI au tableau! ça va totalement contre le gel. […] Dès qu'un diapo est lancé, la façon d'avancer c'est soit dévoiler, soit gel. pas de scroll ou autre, qui sert en préparation, jamais en jeu en classe, ni en répétition. » |
| **Avant** | `8.78.0-⑪`, commit prod `e493d05`, blob `01797d0074f0`, md5 `2e8ec58d59000c2d08b01bb1bbb8e78a` |
| **Après** | `8.78.1-⑪-micro`, commit prod `a9f6208`, blob `f6ad6e3c7c30`, md5 `37479546381c1a97ff7e05f72a1d2a6c` (2 837 158 o) |
| **Source au sas** | `siteflow-io/mjpc-chantier`, branche `micro/molette`, commit `044331a` (parti de `1cc67a1`, la 8.78.0-⑪) ; l'assemblé md5 `ecc075a85d01995a84b5424a28f082c6` + la ligne `APP_VERSION` |
| **Revenir** | `docs/MJPC6-restauration.md`, « AVANT promotion 8.78.1-⑪-micro » : le blob `01797d0074f0` |

**Ce qui change (le diff entier, 4 fichiers du sas, 8 lignes de l'assemblé hors `APP_VERSION`)** :
1. `LIVRAISONS/INTEGRATION/dr/dr-fil.js` — une fonction neuve `dr_filEnJeu()` : vrai quand l'heure est lancée ou la répétition jouée, hors de l'Atelier (`!S.atelier && (S.lancee || S.repetition)`).
2. `dr-fil.js`, `dr_filColonneTouche` — en jeu, la flèche n'est plus pour la colonne : elle retourne à l'écoute ordinaire (→ dévoile, ← revoile ; ↑ ↓ ne font rien).
3. `dr-fil.js`, `dr_filMolette` — en jeu, la molette sur la vue centrale ne fait rien (ni diapo, ni page). Ctrl + molette (le zoom), le cahier de textes, la loupe : inchangés (ils passent avant, dans l'écoute de `#murcadre`).
4. `dr-fil.js`, `DR_FIL_BULLE` (l'infobulle de la colonne) — dit la règle : flèches et molette dans l'Atelier et avant le lancement ; en jeu, ▶ avance, un clic sur une vignette va ailleurs (la garde en classe).
5. `dr-socle.js` l. 1433 — l'infobulle des flèches de page « ‹ › » : « Maj+← ; la molette, dans l'Atelier seulement ».
6. `MANDATS/CINQ-DETTES/AIDE-PAR-ECRAN.md` (rejoué dans `index.html` par `LIVRAISONS/INTEGRATION/E1/outils/aide-ecrans.mjs`) — l'aide « ? » de la répétition et de la classe : « ni la molette ni les flèches de la colonne ne changent de diapo » ; pour aller ailleurs, un clic sur la vignette (en classe, la garde, « ❄ Geler, puis y aller »). L'aide de l'Atelier est inchangée.

**Ce qui a été mesuré (par le geste)** — partie N de la sonde de la conscience (`mesure-c16-reprise.mjs`, session, non poussée ; captures non poussées) : en classe (l'heure lancée par la case de l'emploi du temps, la fenêtre du tableau ouverte), trois crans de molette puis ↓ ↓ après un clic dans la colonne : la même diapo, le même compteur, au pilote et au tableau, aucune garde ; → dévoile ; en répétition, trois crans : la même diapo ; dans l'Atelier, un cran passe une diapo (inchangé) ; aucune erreur JS — **6 vérifications, 0 échec**. Témoin, la 8.78.0-⑪, mêmes gestes : **3 échecs** (la garde s'ouvre en classe ; en répétition, de la diapo 2 à la 5).

**Ce qui n'a PAS été mesuré (la dérogation)** : le banc complet (les 12 étapes : parcours, contrôles K1-K13, sondes de l'Atelier, du tableau distant, de la ⑩, du bloc question, des diapos d'ouverture, du fil, du retour sûr) ; le contrôle K7, cas « page 2 », attend encore la molette dans le banc du sas (adapté sur la branche du déroulé, `8776a13`, pas sur `micro/molette`) — il échouerait sur ce micro ; le tableau distant (seule la fenêtre du tableau a été lue) ; les tailles 1366 et 1920 (seulement 1536 × 864) ; la vraie classe sur le vrai hub.

**Ce qui le remplace ensuite** : le cinquième exécutant fait la même dette (⑱) dans son mandat (`MANDATS/DEROULE-01-11/MANDAT-DERNIERES-DETTES.md`, point 7), avec ses sondes et le banc complet de la conscience ; sa version remplacera ce micro à la mise en ligne suivante. Ce journal dira alors : « remplacé par … ».

**Remplacé par `8.79.0-⑫`** (02/11/2026 14:29, commit prod `4f9984a`, md5 `126b2a6a0183b025c108d80ef5722d99`) : la même règle (⑱, `dr_filEnJeu`) dans le code du cinquième exécutant (`5770054`), passée au banc complet de la conscience (13:19-13:51 ; l'étape 11, la molette et les flèches, VERT) ; ce qui n'avait pas été mesuré pour ce micro l'est désormais, sauf l'étape 8 (2 / 3, le délai du tableau distant).

---

## 2 · 02/11/2026 08:32 — `8.78.2-⑪-micro` (conscience n°16) — SANS BANC

| | |
|---|---|
| **Décidé par** | Paul, 08:25 : « deux dettes à ajouter: les diapos de présentation. La problématique doit toujours suivre la diapo de présentation de chapitre. De plus, notre question est en dur dans la diapo (ou en tout cas non modifiable). Il doit s'appeler notre problématique. fais ça en micro maintenant. » ; « Promeus » à 08:32 |
| **Pourquoi** | sa classe à 9:00 |
| **Avant** | `8.78.1-⑪-micro`, commit prod `a9f6208`, blob `f6ad6e3c7c30`, md5 `37479546381c1a97ff7e05f72a1d2a6c` |
| **Après** | `8.78.2-⑪-micro`, commit prod `b0bdd73`, blob `e497ef8d5a45`, md5 `50bb9e7534d820cac9387a8eab99790b` (2 838 983 o) |
| **Source au sas** | branche `micro/molette`, commit `da11a4c` (par-dessus `044331a`, le micro n°1) ; l'assemblé md5 `4f08e6a16442b19ac60110ac25f4840b` + la ligne `APP_VERSION` |
| **Revenir** | `docs/MJPC6-restauration.md`, « AVANT promotion 8.78.2-⑪-micro » : le blob `f6ad6e3c7c30` |

**Ce qui change (le diff entier, 4 fichiers du sas)** :
1. `dr-socle.js` — `DR_INV_ORDRE_PREMIERE` : l'ordre des diapos d'ouverture de la première séance devient la présentation du chapitre, la problématique, les compétences du chapitre, le parcours, le début de séance (lisait : la problématique en dernier). Les autres séances (sans présentation du chapitre) ne changent pas.
2. `dr-socle.js`, `dr_invPoser` — à la première séance, les diapos d'ouverture déjà écrites au hub dans l'ancien ordre reprennent l'ordre voulu, à leurs places (les autres diapos ne bougent pas), sauf dans une heure de classe dont la classe a déjà vu une diapo ; le nom d'avant « Notre question » (le nom par défaut, jamais écrit par Paul) devient « Notre problématique ».
3. `dr-ouverture.js` — la diapo s'appelle « Notre problématique », son titre au mur « NOTRE PROBLÉMATIQUE » ; la carte de l'Atelier « LA PROBLÉMATIQUE DU CHAPITRE ».
4. `dr-recit.js` — le récit : « on a lu notre problématique ».
5. `index.html` (sas) — la feuille sommaire : « Notre problématique : ».

**Ce qui a été mesuré (par le geste)** — parties O et O2 de la sonde de la conscience : l'Atelier, séance 1 : l'ordre voulu, « Notre problématique », « NOTRE PROBLÉMATIQUE » ; en classe (l'heure lancée, la fenêtre du tableau) : diapo 1 la présentation du chapitre, ▶ → diapo 2 la problématique, au tableau « NOTRE PROBLÉMATIQUE » ; des diapos renommées et écrites au hub par la version d'avant (« S1 : le Romantisme en question », « Notre problématique ») reprennent l'ordre voulu avec les noms de Paul ; aucune erreur JS — **7 vérifications, 0 échec**.

**Ce qui n'a PAS été mesuré (la dérogation)** : le banc complet — la sonde de l'Atelier (`sonde-1262`) et la sonde des diapos d'ouverture attendent l'ancien ordre et « Notre question » : elles échoueraient sur ce micro (à adapter, mandat du cinquième exécutant) ; la 8.77.1-⑩ (le point de retour) relisant une séance réécrite dans le nouvel ordre ; le micro n°1 (la molette) rejoué sur ce fichier ; le tableau distant ; les tailles 1366 et 1920 ; le vrai hub.

**Ce qui le remplace ensuite** : le cinquième exécutant reprend ce commit dans sa branche (`deroule/diapos-ouverture`) et adapte les sondes ; sa mise en ligne, avec le banc, remplacera les micros n°1 et n°2.

**Remplacé par `8.79.0-⑫`** (02/11/2026 14:29, commit prod `4f9984a`) : ce commit repris (`a1e291b`), les sondes adaptées (`d8235c1`, `90a7da0`), la coexistence avec la 8.77.1-⑩ corrigée (`ddd8a94`) ; le banc complet de la conscience : l'étape 6 (l'Atelier) 53 / 53, l'étape 10 (les diapos d'ouverture) 126 / 0, l'étape 12 (le retour sûr) 61 / 0.

## 3 · 03/11/2026 09:46 — `8.81.1-⑭-micro` (conscience n°16) — SANS BANC COMPLET

**Pourquoi un micro** : Paul, 07:57 : « ça prend trop de temps, beaucoup trop de temps!! » ; 08:49 : « J'ai cours à 10 heures pour 35 et 16 il faut que ça soit bon pour 9h45 dernier délai » ; « promeus » à 09:45 sur la demande C16 323-325 (le banc complet d'une heure non joué, dit).

**Ce qu'il contient** (sas `deroule/frappe-zoom` `9c13d037c`, sur `fcb5004fd` = la 8.81.0-⑭) : le zoom de la télécommande (A+ / A− actionnent le curseur « texte au tableau » du pilote, d'un cran ; le téléphone montre le cran du pilote ; les bornes écrites à l'écran) ; le QR qui tient (sa validité ne dépend plus d'aucune montre ; une lecture ratée réessayée ; un réseau muet dit en clair ; le code gardé quand la fenêtre se ferme) ; ㉟ la frappe (les correctifs 7 et 9 de `deroule/correctifs`, jamais mis en ligne, repris à la main : le `morph` et l'empreinte des vignettes, la colonne sans retard, `dr_frappeReponse` ; l'état vivant envoyé à chaque touche).

**Prouvé** : chez l'exécutant, le zoom 108 / 110 (les 2 : ⑯), le QR 200 scans sur 200, la frappe K 18 / 18 (3 passages ; la base 13 / 18) ; chez la conscience (09:08-09:23, sur l'assemblé `bc7cc9cd`) : le parcours P0-P12 vert en vraie heure et en mode test (K15, K15-test), l'appel Q QT P2H P2T 42 / 0, la session T H QH QT A 89 / 0, la fin d'heure 56 / 0. **Pas joué** : le banc complet (les étapes 1-12 et 13 en entier, la répétition R). **Pas dedans** : ⑯ (le retard du tableau, cause pas trouvée).

**md5** `fb2ba5bb…` → `c21ddbb656b9028cf11b0d70f7b18318` (3 016 971 o), commit prod `cf122ac`, blob `3b69aab74938`, servi bit à bit à 09:47:28. **Retour** : `docs/MJPC6-restauration.md` (blob `25383d503ecb`).

**Ce qui le remplacera** : la prochaine version avec le banc complet (⑯ et la numérotation par séance).

