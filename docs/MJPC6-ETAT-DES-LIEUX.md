# MJPC 6 — ÉTAT DES LIEUX MESURÉ

> **CE DOCUMENT NE SE RECOPIE PAS : IL SE REMESURE.** Il est né le 30/07/2026 d'une remarque de Paul :
> *« j'ai l'impression de revenir en arrière à chaque nouvelle conscience ouverte, et de défaire du travail
> déjà fait. »* La vérification lui a donné en partie raison sur la cause, et tort sur le fait : rien n'était
> défait, mais **rien ne disait qu'il était fait**. Les autres documents disent ce qui est DÉCIDÉ ; celui-ci
> dit ce qui est **ACQUIS, mesuré, et donc clos**. Une conscience qui rouvre une ligne verte de ce document
> fait perdre du temps à Paul.
> **Outil** : `etat.py` à la racine du dépôt de travail des consciences (non versionné, se réécrit) —
> il lit la production en AUTHENTIFIÉ et sonde le hub. Ne jamais recopier ses résultats d'une conscience
> à l'autre : les remesurer.

## ✅ ACQUIS — NE PAS ROUVRIR SANS PREUVE CONTRAIRE

### La connexion et l'identité des élèves — CLOS
Mesuré le 30/07 sur les 10 fichiers de production, lus authentifiés :
- **portail à code : 10/10.** Un élève ne peut plus entrer chez un autre en tapant seulement son nom. `reecriture_bb4e` a été la dernière à le recevoir (réparation du 29/07, v2.0.1, md5 `fe2492c69e5f1c5051fb03bf4f44db86`).
- **clé canonique `sanMJPC` : 10/10.** Une seule identité d'élève dans tout l'écosystème.
- **shunt de session §8 : 9/9** des consommateurs. `index.html` ne l'a pas et ne doit pas l'avoir : **c'est lui qui ÉMET la session**. Une conscience a déjà pris cette absence pour un défaut : ce n'en est pas un.
- **MJPC bypasse les portails, il ne les remplace jamais** ; chaque app reste autonome.
**Ce qui reste ouvert n'est PAS la connexion, c'est le COFFRE** : voir M-SÉCU ci-dessous. Distinguer les deux est essentiel — la serrure est posée, la porte du coffre n'a jamais existé.

### La taxonomie — 7 DOMAINES, 210 NOTIONS, dont un pan littéraire sourcé (02/08)
**v1.4.0** : 5 domaines de langue (154 notions, audit Éduscol du 20/07) **+ `dom-litterature` et `dom-versification`** (56 notions). **Chaque notion littéraire porte un champ `source`** : soit la citation verbatim d'un attendu de fin d'année (28), soit `CHOIX DE PROGRESSION DE PAUL` (28). **Les deux supports — `taxonomie_atelier.json` au dépôt et `/taxonomie` au hub — sont identiques, garantis par construction** (une seule chaîne sérialisée, écrite deux fois). **ACQUIS — ne pas redécouvrir.**
**Ce qui reste vrai et important** : **aucune app ne remonte encore de notion** (les neuf portent `notions: []`). Le chapitre tague, rien ne lit — **c'est la Concordance qui fermera la chaîne.**

### La zone prompt — CANONIQUE dans 7 fichiers sur 10 (01/08)
`index.html`, `correction_dictee`, `worktrack`, `dictee_universelle`, `pilotage_debat_s3`, `evaluation-qcm`, `analyse_logique`, `applause_meter` portent le canon **§12** : prompt composé de pièces (directives éditables + cadrage imposé + format + vocabulaire **généré** + jetons de données), **persisté avec défaut en dur en repli**, validation **accumulatrice qui cite l'élément fautif**, injection avec **archive avant et abandon si elle échoue**. **ACQUIS — ne pas redécouvrir.**
**RESTENT HORS CANON** : `reecriture` et `reecriture_bb4e` (chantier réécriture). **Les chemins de prompts ne sont PAS uniformes** et c'est assumé : le mécanisme est canonique, l'adresse reste locale — uniformiser coûterait une migration pour rien.

### Le socle MJPC-CORE
**Au 04/08 : `index.html` (8.27.1) ET les sept apps au canon sont en 1.6.0.** Le canon `mjpc-core.js` est en production, 33 062 o, md5 `27506f53051aedc9cbbad8a89ae3927c` (mesuré le 04/08 après-midi). `reecriture` (2.4.0) et `reecriture_bb4e` (2.4.0) restent en **1.3.0, hors canon §12** — c'est le chantier réécriture, pas un oubli. `index.html` : 729 520 o, md5 `1d7732e09561ba828dc15897ae6e6601`.

### La vérification des codes par empreinte — POSÉE PARTOUT, PAS ENCORE PROTECTRICE
Les dix fichiers savent vérifier un code par son empreinte, avec repli sur le clair. **Mais le clair est encore là** : tant que M-SÉCU-3 n'a pas eu lieu, `/codes` reste lisible et `PROF_CODES` reste en clair dans huit fichiers. **Ne pas confondre « le mécanisme est en place » et « les élèves sont protégés ».**

### ANCIEN — les socles précédents
Au 31/07 : les dix fichiers en **1.3.0**, canon md5 `f5e81602f8aee1ca17a9721546066efa`, verbatim identique à l'embarqué (26 fonctions à l'octet). Avant : `index.html` en **1.2.0** (trois issues d'écriture, 30/07), les 9 apps en **1.1.0**.

### Les écritures du site ne mentent plus
52 écritures sous verdict, cascade de publication qui attend ses verdicts, corbeille qui distingue refus et panne. Testé par Paul le 30/07 : renommage, publication vue côté élève, atelier, mode test — **aucun faux positif**.

## 🔴 OUVERT ET MESURÉ — CE QUI RESTE VRAIMENT À FAIRE

### M16-0a — LES CONTRATS DE NEUF MANIFESTES SONT DÉTRUITS AU HUB (mesuré et prouvé le 04/08 après-midi)
Neuf fiches de `/manifestes` sur onze (toutes les apps, réécrites le 04/08 à 08:04 et 10:13 UTC par le bouton « Mettre les fiches à jour ») ne portent plus que `{app, publie_le, version}` — **ni `manifeste`, ni `purge`**. Seules `index` et `taxonomie`, non touchées par le bouton, ont gardé leurs contrats. **Cause prouvée par exécution verbatim** : `fichesExtraireObjet` rend `null` sur `MJPC_MANIFESTE` et `MJPC_PURGE` (le slice conserve les commentaires internes de l'objet → `JSON.parse` échoue → le repli ne connaît que les champs d'`MJPC_APP`) ; `fichesMajUne` écrit alors la fiche entière avec des vides que Firebase supprime. **Conséquences si rien n'est fait** : `_purgePlan` (M17a) ne verrait que 2 contrats sur 11 — purge quasi vide affichant un succès ; `_orphelins` (M16-0) déclarerait orphelins la quasi-totalité des nœuds légitimes du hub. **Contrepoids vérifié** : chaque app répare sa fiche complète à sa prochaine ouverture prof (l'écart est détecté, `manifeste` entre dans la comparaison), mais le bouton la ré-ampute au clic suivant. **NE PLUS CLIQUER CE BOUTON avant M16-0a.** Le morceau : extraction réparée + **garde de non-dégradation universelle** (un extracteur qui rend null n'écrase jamais une valeur existante, quel que soit le champ) + restauration des neuf contrats par le bouton corrigé lui-même. Dette liée, pour la prochaine passe canon : `mjpcManifesteAJour` ne compare pas `purge`.

### Les jetons — RÉGÉNÉRÉS LE 04/08, ÉTANCHÉITÉ PROUVÉE
Deux jetons fine-grained neufs (MJPC-PROD → `monsieurjaipascompris` seul ; MJPC-SAS → `mjpc-chantier` seul), testés par quatre écritures-sondes croisées le 04/08 : SAS→sas ✓, **SAS→production REFUSÉ** (l'étanchéité du 17/07 est rétablie), PROD→sas refusé, PROD→production ✓ (sonde supprimée, production vérifiée bit à bit intacte). **Reste à faire par Paul : supprimer les anciens jetons** (l'ancien sas portait admin+push sur la production). Rappel de méthode : la transcription des jetons entre fils s'est corrompue deux fois le 04/08 — transmettre en bloc de code, jamais en texte nu (Chrome auto-traduit).

### M-SÉCU — le hub n'a AUCUNE règle
**Sondé le 30/07** : une écriture anonyme depuis n'importe où **réussit** (`PUT` puis `DELETE` sur un nœud neutre, nettoyé). La table `/codes` est **énumérable par une URL** — 122 entrées, avec les noms complets.
**Contrainte découverte le 30/07, qui interdit la solution évidente** : les 10 fichiers lisent `/codes` **en bloc**, et `_allCodesTaken()` du site en a besoin pour garantir l'unicité d'un nouveau code. Fermer `/codes` casserait donc *à la fois* le login des 9 apps *et* la régénération des codes. Aucune règle ne peut distinguer le site d'une app : **il n'y a pas d'authentification Firebase dans l'écosystème.**
**Voie proposée par la conscience n°4, à valider** : un index inversé `/codes_pris/<code> = true` supprime le besoin de lire la table — l'unicité se vérifie sur une clé, le login lit `/codes/<clé>`, la liste du professeur se construit depuis `/classes` élève par élève. La règle peut alors fermer `/codes` en bloc en laissant `/codes/$cle` lisible.
**Ce qu'aucune règle ne fera** : distinguer un élève d'un inconnu. `/classes` restera lisible, donc **les noms des élèves resteront exposés**. Seule l'authentification y remédierait — objet à l'inventaire.

### Trou de mode test à instruire
`dictee_universelle.html` ne porte **aucune** occurrence de « mode test » ni de « Mode test » (mesuré le 30/07) — seulement « bac à sable » ×1 et `_test_` ×5. Les 9 autres apps en portent. Le point 16bis le rend obligatoire. **À instruire avant M-MODETEST : trou réel, ou vocabulaire différent ?**

## ⚠ AVERTISSEMENT DE MÉTHODE, PAYÉ CHER LE 30/07
La première version de ce tableau, produite avec des détecteurs approximatifs, a affiché **trois faux trous** : la pastille de `pilotage_debat_s3` (déclarée en `const` et non en `var`), celle de `worktrack` (nommée `VERSION` et non `APP_VERSION`), et un anti-cache présent lu comme absent. **Un état des lieux faux est plus nuisible que pas d'état des lieux** : il fait rouvrir ce qui est fait, c'est-à-dire exactement le mal qu'il prétend guérir. Toute case rouge se vérifie sur pièces AVANT d'être écrite ici.
*Dette de nommage relevée au passage : `worktrack` appelle sa pastille `VERSION` là où les autres disent `APP_VERSION`.*
