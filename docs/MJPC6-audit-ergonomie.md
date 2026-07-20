# AUDIT ERGONOMIQUE DU SITE — `index.html` v8.2.0 (conscience n°2, 20/07/2026)
> Lecture du site entier sous l'angle demandé par Paul : **fluidité, ergonomie, lisibilité**. Fondé sur la lecture du fichier de production (`5b6eb7e1…`, 356 815 o) et sur des mesures au harnais tactile (390 px, `is_mobile` + `has_touch`). Aucun jugement à l'œil : chaque chiffre est reproductible.

## A. CE QUE LE SITE CONTIENT — inventaire
**3 pages** : `page-validation` (entrée par lien) · `page-home` (accueil) · `page-level` (un niveau).
**14 surfaces superposées** (overlays et modales) dont 8 pour la seule modale « Lier un document ».
**100 boutons, 73 libellés distincts.**
**4 interfaces professeur**, sans lien entre elles :
| Interface | Accès | Contenu |
|---|---|---|
| ⚙️ Outils prof | bouton flottant (36 px du haut) | **liens vers les autres apps** (dictée, correction, réécriture, QCM, applaudimètre, débat) + 3 entrées grisées « à venir » |
| 🛠 Panneau prof | bouton flottant (76 px du haut) | Tableau de bord · Classes · Élèves & codes · Profil test · Architecture · Archives · Configuration · Présence live |
| ⚙ Console du site | **dans** `page-level`, sous les onglets, après défilement | Mode test · Annonces · Dates du brevet · Règles Firebase · Taxonomie |
| Publication | pastilles sur les cartes | chapitres / séances / items, par classe et par niveau |

## B. LES DOUBLONS ET RECOUVREMENTS — le cœur de la demande
1. **DEUX ADMINISTRATIONS.** Le Panneau prof et la Console du site sont deux moitiés d'une même fonction (administrer le site), présentées comme deux objets sans rapport. C'est le doublon structurant : tous les autres en découlent. **Décision de Paul (20/07) : la console rejoint le Panneau prof.**
2. **« Archives » ×2** : section fonctionnelle du Panneau prof (sauvegardes, export) **et** entrée grisée « Archives — archivage par année scolaire (à venir) » dans Outils prof. Même mot, deux endroits, deux sens.
3. **« Mode test » (console) vs « Profil test » (panneau)** : noms jumeaux, fonctions différentes — le premier neutralise les écritures, le second incarne un faux élève. **Risque réel** : croire qu'on est protégé alors qu'on écrit pour de vrai.
4. **« Règles Firebase » (console) vs « Configuration » (panneau)** : deux endroits pour « la base est-elle en ordre ? ». La section Configuration affiche déjà l'état Firebase et porte la zone dangereuse d'import.
5. **Tableau de bord (panneau) vs zone de publication (page)** : le tableau annonce l'état ouvert/bloqué et le nombre de chapitres par niveau ; la page montre la même réalité autrement.
6. **Deux boutons flottants** empilés à 36 px et 76 px, de couleurs différentes (ambre / violet), sans hiérarchie : rien ne dit lequel ouvre quoi.

## C. FLUIDITÉ — le coût en gestes
| Outil | Gestes depuis l'entrée en admin |
|---|---|
| Outils prof | **1** (bouton flottant) |
| Panneau prof → une de ses 8 sections | **2** |
| **Console du site** | **3+** : aller sur une page NIVEAU (elle n'existe pas ailleurs) → **défiler sous les onglets** → « Ouvrir / fermer la console » |
| → un de ses 5 blocs | **4+** |
**Constat** : l'outil le plus profond du site est celui qui porte les annonces aux élèves, les dates du brevet et le référentiel des notions. **Il est aussi le seul introuvable sans le savoir** — Paul lui-même a demandé où il se trouvait (20/07), après l'avoir fait développer.
**Aggravant** : la Console n'existe QUE dans `page-level`. Depuis l'accueil, elle est inatteignable — il faut d'abord entrer dans un niveau, geste sans rapport avec l'intention « publier une annonce ».

## D. ERGONOMIE TACTILE — mesures à 390 px
| Écran | Cibles | Sous 44 px | Débordement |
|---|---|---|---|
| Élève — écran d'entrée | 5 | 2 | 0 |
| **Prof — page niveau (admin)** | 15 | **13** | 0 |
| **Prof — Panneau prof ouvert** | 24 | **22** | 0 |
| **Prof — menu Outils prof** | 25 | **23** | 0 |
| Prof — Console du site (après M8-MOBILE) | 5 à 31 | **0** | 0 |
**Le Panneau prof est structurellement cassé sur téléphone** : `.tprof-body` est un `flex` avec `.tprof-sidebar { width: 230px; flex-shrink: 0 }` ; l'overlay a `padding: 30px`. À 390 px il reste 330 px, moins 230 pour le menu = **98 px pour tout le contenu** — d'où le texte en colonne d'une lettre. **Aucune media query du fichier ne mentionne `tprof`** : ce panneau n'a jamais été pensé pour un téléphone.
La barre d'onglets de `page-level` (Chapitres, Fiches transversales, Zone autonomie, Dictée, Réécriture, Évaluation, Analyse d'image, Étude de texte, Rédaction — **9 onglets**) tient ses cibles à 34 px et se replie sur plusieurs lignes.
« ← Accueil » mesure **90 × 17 px** : la cible de retour, la plus utilisée, est la plus petite du site.

## E. LISIBILITÉ — le vocabulaire
- **Termes techniques dans du texte affiché** : `slug` ×14, `hub` ×26, `Firebase` ×7, `purge` ×4, `nœud` ×3, `manifeste` ×2. **Tous côté professeur** — le principe cardinal (aucun vocabulaire interne côté élève) est **respecté** ; côté prof, c'est une charge inutile : « slug » et « nœud » ne disent rien d'un site, ils disent une base de données.
- **Nommage mixte** : 41 fonctions d'interface en anglais (`openProfPanel`, `showProfSection`, `toggleAdminTools`) contre 2 en français (`ouvrirConsoleM8`, `ouvrirOverlayRegles`). Invisible à l'usage, mais c'est le signe de deux couches d'écriture qui ne se sont jamais relues.
- **Libellés dupliqués** : 5 boutons « Annuler », 5 « Lier », 8 croix de fermeture, 4 flèches ↑ et 4 ↓ — normal pour des modales, mais les flèches et les crayons ne portent aucun texte : au doigt et sans infobulle, leur fonction se devine.
- **« Console du site »** : le mot « console » est un mot d'informaticien. Ce que Paul y fait — annoncer aux élèves, régler les dates du brevet, tenir le référentiel — n'a rien d'une console.

## F. CE QUE JE RECOMMANDE, dans l'ordre
1. **Fusionner les deux administrations** (décidé) : la Console devient une partie du Panneau prof. Rangement proposé : *Contenu* reçoit Annonces, Dates du brevet, Taxonomie ; *Système* absorbe Règles Firebase dans Configuration ; **Mode test devient une bascule permanente dans l'en-tête**, pas une section — il doit être visible depuis toutes les sections, et cesser d'être le jumeau de « Profil test ».
2. **Rendre le Panneau prof utilisable au téléphone** : sous 768 px, `.tprof-body` en colonne, menu en barre horizontale défilante ou repliable, `padding` de l'overlay à 12 px, cibles à 44 px.
3. **Un seul bouton flottant d'administration.** Le lanceur d'apps (Outils prof) reste distinct — c'est un autre usage — mais il doit être nommé pour ce qu'il est (« Mes applications ») et cesser de porter des entrées grisées qui font doublon avec le Panneau.
4. **Renommer « Console du site »** dans le futur menu : « Site » ou « Réglages du site ».
5. **Passe tactile de `page-level`** : « ← Accueil » à 44 px, onglets à 44 px (13 cibles sous-norme).
6. **Nettoyer le vocabulaire prof** : `slug` → « identifiant de classe », `nœud` → « emplacement », `hub` → « base ».

## G. CE QUE JE N'AI PAS PU JUGER
Le confort réel au pouce sur le téléphone de Paul ; la lisibilité des polices réelles (le harnais charge des polices de repli) ; l'usage en situation de classe, sous contrainte de temps. Ces trois-là n'appartiennent qu'à lui.
