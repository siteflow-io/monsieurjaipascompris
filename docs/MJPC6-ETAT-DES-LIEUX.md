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

### Le socle MJPC-CORE
`index.html` en **1.2.0** (trois issues d'écriture, promu le 30/07) ; les 9 apps en **1.1.0**. Le canon `mjpc-core.js` est en production, **verbatim identique à l'embarqué** (16 fonctions comparées à l'octet le 30/07).

### Les écritures du site ne mentent plus
52 écritures sous verdict, cascade de publication qui attend ses verdicts, corbeille qui distingue refus et panne. Testé par Paul le 30/07 : renommage, publication vue côté élève, atelier, mode test — **aucun faux positif**.

## 🔴 OUVERT ET MESURÉ — CE QUI RESTE VRAIMENT À FAIRE

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
