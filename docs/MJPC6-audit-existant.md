# AUDIT DE L'EXISTANT — le site `index.html` réinterrogé (conscience n°2, 20/07/2026)
> **Demande de Paul** : *« dans le plan, il manque toute cette partie de l'existant à réinterroger, les cas que je sors depuis 2 ou 3 tours en sont le symptôme. Il faut donc que tu balayes le site en entier et que tu voies ce qui pourrait remonter d'illogique. »*
> Fondé sur la lecture de `index.html` v8.3.0 (md5 `bf6ba1e1…`) et sur les données réelles du hub, en lecture seule.

## LE DIAGNOSTIC DE PAUL, VÉRIFIÉ ET GÉNÉRALISÉ
*« Chaque app a été durcie une par une ; le hub qui les rassemble est resté celui d'avant. »*
Les apps ont reçu la doctrine MJPC (identité par code, « Mes… », principe cardinal, P2). Le site, lui, n'a jamais été réinterrogé : il navigue avec les règles d'avant, et **ce qu'il expose court-circuite les protections que les apps ont reçues**.

## LE PRINCIPE DIRECTEUR PROPOSÉ (validé par Paul dans son esprit, à graver)
**Le site navigue dans le CONTENU ; l'identité ouvre le PERSONNEL. Ce qui porte un nom ne se navigue pas.**
- **Objet personnel** = il porte un nom d'élève ou une classe (dictée de classe, évaluation, copie, note, débat). Il ne figure JAMAIS dans une liste de navigation : l'élève y accède par son identité, dans l'app, via « Mes dictées » / « Mes évaluations » / « Mes débats ».
- **Ressource** = elle n'appartient à personne (chapitre, fiche, cours, exercice d'entraînement). Elle se navigue librement, y compris en DESCENTE vers les niveaux inférieurs.
**Précision de Paul (20/07)** : une **dictée coévaluée** est un ACTE DE CLASSE (« ton voisin dicte, tu écris »), pas une ressource — elle ne se refait pas. Une **dictée d'entraînement** est une ressource. Le libellé distingue déjà les deux ; le code ne le sait pas.
**Sur les niveaux inférieurs** : `levelAccess = {'3e':['3e','4e','5e','6e'], '4e':['4e','5e','6e'], '5e':['5e','6e'], '6e':['6e']}` — la descente est VOULUE et codée. Elle ne doit pas être supprimée : c'est le principe même de la remédiation, et le socle de L'Atelier. Ce qui doit être borné, ce n'est pas l'accès au niveau, c'est **ce qui, dans ce niveau, est personnel**.

## LES ILLOGISMES RELEVÉS

### I1 · DEUX CHEMINS DE LECTURE QUI NE SUIVENT PAS LES MÊMES RÈGLES — la cause racine
- **Onglet Chapitres** → `renderChapitres` filtre par `isPubFor(ch, _eleveClasse())` (L2109) : publication PAR CLASSE respectée.
- **Tous les autres onglets** → `collectChapterItems` teste `if(!ch.published) return` (publication GLOBALE) et **ne connaît ni la classe ni l'élève** (vérifié : ni `_eleveClasse`, ni `isPubFor` dans son corps).
**Conséquence démontrable** : un chapitre publié pour une seule classe porte `published = {"3E Charles de Gaulle": true}` — un OBJET, donc *vrai* en JavaScript. `!ch.published` est donc faux, et **le chapitre passe pour tout le monde** dans les six onglets qui utilisent ce chemin.
**Six onglets concernés** : Dictée · Réécriture · Analyse d'image · Étude de texte · Rédaction · Évaluation des connaissances.

### I2 · LE SITE LISTE DES OBJETS PERSONNELS
`gotoDictee()` lit `FIREBASE_BASE + '/correction_dictee.json'` et filtre sur `d.published && d.niveau === level` — **ni classe, ni élève**. Résultat constaté par Paul : « Dictée brevet blanc 3E — 3E Charles de Gaulle » proposée à qui n'est pas de cette classe. C'est un objet personnel dans une liste de navigation : il n'aurait jamais dû y figurer. **Et c'est un doublon fonctionnel** : « Mes dictées » existe déjà dans l'app, avec le bon filtre.

### I3 · LE PORTAIL DU SITE N'EXIGE PAS DE CODE
`doLogin()` accepte `nom + prénom` sans code (`_findEleveByName`). Le code n'est qu'une alternative. Or les trois apps durcies l'exigent. **Le site est la porte ouverte qui contourne toutes les autres** : celui qui entre sous le nom d'un camarade hérite de son identité dans toutes les apps par le bypass MJPC.

### I4 · `activateAdmin` NE FAIT RIEN SI `DEV_MODE` EST DÉJÀ ACTIF
`function activateAdmin(){ publierManifesteREST(); if(!DEV_MODE){ … } }` — tout est enfermé dans la garde : remplacement de `TRACK.eleve` par « Dev Mode », bascule `page-validation → page-home` (les niveaux). Entré par le panneau dev, Paul est déjà en `DEV_MODE` : `Ctrl+Espace` ne fait plus rien. **Deux symptômes d'une seule cause** : les niveaux qui n'apparaissent plus sur ordinateur, et l'identité élève conservée en mode admin (d'où le QCM affichant « 4E BANKSY — Salut DUVACHER Lou » depuis le niveau 3e).

### I5 · DEUX ÉCRITURES DE LA CLASSE QUI NE SE RECONNAISSENT PAS
`_markPub` écrit la clé de publication sous le **nom de classe brut** (`"4E BANKSY"`), `_eleveClasse()` la lit via `_slugifyClass` qui produit **`"4e_banksy"`**. La clé n'est jamais trouvée : **rien n'apparaît côté élève**, quoi que le professeur publie. Constaté par Paul sur ses trois chapitres de 4e.

### I6 · L'ÉCRAN D'ENTRÉE PARLE À L'ÉLÈVE QUAND C'EST LE PROFESSEUR QUI ARRIVE
Au rechargement en mode admin, le routage ramène sur `page-validation` — « LIEN INVALIDE · Utilise le lien fourni par M. Meney ». Vérifié identique avant M8 : ce n'est pas une régression, c'est un impensé.

### I7 · UN APPEL APPS SCRIPT RÉSIDUEL
Deux `POST` vers `script.google.com` au chargement (relevés au harnais par l'exécutant M8-MOBILE-2). Vestige de l'architecture d'avant la migration Firebase. À instruire : encore utile ? que transporte-t-il ?

### I8 · TROIS CHAPITRES DE 4e SANS AUCUNE SÉANCE
`/site/4e/chapitres/1,2,3` : `published` renseigné pour les deux classes, **zéro séance**. Même une fois I5 corrigé, l'élève verra des chapitres vides. À confirmer par Paul : état normal de sa préparation, ou perte de données ?

## CE QUI N'A PAS ÉTÉ RÉINTERROGÉ ET DEVRAIT L'ÊTRE (angles morts déclarés)
- Le **contrat de publication** lui-même : trois formes coexistent (`published: true`, `published: {classe: bool}`, `published_tabs`) sans que le code les traite uniformément — I1 en est la conséquence directe.
- La **distinction entraînement / progression** : le libellé la porte, le modèle de données non. Rien dans un item ne dit s'il est ressource ou acte de classe.
- Le **rôle du niveau dans l'identité** : `TRACK.eleve.niveau` et `clickedLevel` peuvent diverger (Paul en 3e avec une identité de 4e) — aucun garde-fou.
- La **sortie du mode admin** : `Ctrl+Espace pour quitter` — que devient l'identité élève antérieure ?

## RECOMMANDATION
Un morceau **M8-IDENTITÉ** traitant I1 à I6 ensemble, car ils partagent une seule cause : le site ignore l'identité. Les corriger séparément ferait rouvrir le même fichier six fois. I7 et I8 sont des instructions à mener, pas du code. **Avant M9→M13** : ce que les élèves voient en dépend.
