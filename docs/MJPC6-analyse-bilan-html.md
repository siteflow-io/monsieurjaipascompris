# LE BILAN HTML AUTONOME — ANALYSE DE LA PIÈCE FONDATRICE
> **VERSION À COMPLÉTER** — analyse du 18/07/2026. Pièce étudiée : `ROTUREAU_BREL_Diane.html` (17 152 o), généré par `dictee_universelle.html` → `buildDicteeResultHtml(data, code, contests)` (21 759 caractères de code). **C'est le modèle retenu pour la FORME DE L'ARCHIVE de fin d'année (décision C1 du plan).**

## 1. CE QUE C'EST
Un fichier HTML **totalement autonome** (17 Ko) que l'élève télécharge à la fin du parcours de dictée coévaluée. Il contient son bilan complet : note, compétences, erreurs, contestations, retours reçus. **Zéro dépendance externe** (vérifié : aucune URL, aucun CDN, aucune police web — `Segoe UI, system-ui`), tout le CSS (3 577 caractères) est embarqué. Il fonctionne **hors ligne, sur n'importe quelle machine, pour toujours** — même si MJPC, Firebase et le site disparaissent.

## 2. LA PHILOSOPHIE — LA NOTE SE MÉRITE
C'est le point le plus remarquable, et c'est la doctrine de Paul (« la note est temporellement découplée du commentaire », E1-7) **implémentée dans le document lui-même** :
- à l'ouverture, la note n'est **pas visible** : à sa place, « *Consulte tes compétences pour voir ta note* » (`#noteHidden`) ;
- les trois compétences portent une pastille **clignotante** (`comp-info blink`) qui invite à cliquer ; une fois consultée, elle **passe au vert** (`#48BB78`) ;
- **les trois autres onglets sont VERROUILLÉS** (`locked-tab`) : `switchTab(n)` refuse tout `n > 0` tant que `allSeen` est faux ;
- quand les trois compétences ont été ouvertes (`compSeen.length >= COMP_TOTAL`), **la note apparaît, le bonus s'affiche, les onglets se déverrouillent**.
→ L'élève **ne peut physiquement pas voir sa note avant d'avoir lu ses commentaires**. C'est Butler (1988) en actes, appliqué non par consigne mais par construction. *Aucune app de l'écosystème ne va aussi loin dans l'incarnation de la doctrine.*

## 3. LE MOTEUR DE RÉDACTION (la vraie richesse — c'est la « Banque pédagogique » avant l'heure)
Le commentaire de chaque compétence n'est pas un texte figé : il est **assemblé à la volée** à partir de quatre gisements embarqués dans le fichier :
- **`DICTEE_FEEDBACKS`** — 16 catégories fines d'erreur (`G1`–`G8`, `L1`–`L5`, `P1`–`P2`, `O1`) × **2 formulations** (`ok` / `ko`). Remarquable : le `ko` n'est jamais un constat, il porte **l'action** — « *les accords sujet-verbe posent encore problème — cherche toujours le sujet avant d'écrire le verbe* », « *les confusions entre terminaisons persistent — remplace par vendre/vendu/vendait* ». C'est la 3e question de Hattie-Timperley (*comment y aller*) intégrée à la phrase.
- **`DICTEE_COMP_INTROS`** et **`DICTEE_COMP_CONSEILS`** — une intro et un conseil par compétence × **3 paliers** (`high` ≥ 75 %, `mid` ≥ 50 %, `low`).
- **`DICTEE_COMP_ENCOURAGE`** (si ≥ 75 %) et **`DICTEE_COMP_VIGILANCE`** (si < 50 %) — un message conditionnel de clôture.
- **Des CONNECTEURS variés avec rotation anti-monotonie** : `starters` (« Tout d'abord », « Pour commencer »), `middles` (« Ensuite », « On remarque aussi que », « Notons également que », « De plus »), `closers` (« Enfin », « Pour conclure »), et leurs équivalents pour la partie mineure (« En revanche », « On constate par ailleurs que », « En définitive »). La sélection se fait **par index de compétence** (`pickByIdx(pool, compIdx)`) : deux compétences du même bilan n'ouvrent jamais par la même formule.
**L'ordre du discours est piloté par la performance** : si le pourcentage ≥ 50 %, le texte commence par ce qui est acquis (`dominant = okParts`) puis pivote sur « En revanche » ; sinon il commence par les difficultés. Les items sont groupés **par blocs de deux**, avec majuscule automatique après le point.
→ C'est exactement le 4e référentiel doctrinal (« Banque pédagogique : Concept → Expressions, rotation anti-monotonie »), **déjà implémenté et éprouvé** — il n'est pas à inventer, il est à généraliser.

## 4. LE CALCUL DES COMPÉTENCES (dans le générateur)
Trois compétences, calculées depuis les catégories fines d'erreurs :
| Compétence | Composition | Formule |
|---|---|---|
| **C15 · Maîtriser la grammaire** | `G1`–`G8` | `max(0, 1 − nb/8) × 100` → 0 err = 100 %, 4 = 50 %, 8 = 0 % |
| **C13 · Maîtriser l'orthographe** | `L1`–`L5`, `P1`–`P2`, `O1` | idem |
| **M7 · Rigueur et soin (correction)** | bonus de correction du binôme | `min(1, bonus/2) × 100` |
Chaque compétence porte sa **barre de progression** (`comp-bar`/`comp-fill`) et son libellé de maîtrise (« Maîtrise satisfaisante »).

## 5. LA STRUCTURE DU DOCUMENT
`#login` (dégradé violet, saisie du code) → `#results` (caché) contenant : en-tête avec la note (masquée), ligne de bonus, trois compteurs par famille d'erreurs, **4 onglets** — `Compétences` (ouvert) · `Erreurs (n)` · `Contestations` · `Retours correcteur` (verrouillés) — et une **popup** (`#compPopup`) pour le commentaire détaillé de chaque compétence.
Chaque erreur est listée avec **le mot fautif entre guillemets, sa catégorie nommée (`G-CONJ — Conjugaison`) et une consigne** (« Vérifie ce mot »).

## 6. LE MÉCANISME D'ACCÈS (la pièce cherchée)
```js
var CODE = "<code de l'élève>";
function checkCode(){
  var v = document.getElementById("codeInput").value.trim();
  if (v === CODE || v === "1312") { /* déverrouille #results */ }
  else { errMsg.textContent = "Code incorrect."; }
}
```
Le **code personnel de l'élève**, ou **`1312`** (code prof) qui passe outre. Usage : tester sans chercher le code de l'élève, et **dépanner en classe** un élève qui a oublié le sien.

## 7. CE QUI EST À PERFECTIONNER POUR EN FAIRE L'ARCHIVE
1. **`1312` est en dur** — devrait accepter tous les `PROF_CODES` (`3141` ne marche pas), idéalement injectés à la génération.
2. **Aucune trace de consultation** : rien ne distingue l'ouverture par l'élève de celle du professeur. Pour l'archive, un marqueur discret serait utile (mais attention : le fichier est hors ligne, il ne peut rien remonter — ce serait purement visuel).
3. **Le barème est codé en dur** (`/8` pour chaque famille) et commenté « max plausible ~10 » : arbitraire, indépendant de la longueur du texte. À rendre proportionnel au nombre de mots ou au barème de la dictée.
4. **Les catégories sont locales** (`G1`–`G8`, `L1`–`L5`…) : à rattacher à la Concordance (M2) pour que ce bilan devienne comparable d'une année sur l'autre.
5. **Pas de `@media print`** (vérifié) : le document est fait pour l'écran ; l'archive de fin d'année devra s'imprimer proprement.
6. **Pas de date visible en clair** dans l'en-tête : indispensable pour une archive.
7. **Un seul devoir par fichier** : l'archive de fin d'année devra **agréger l'année entière** (plusieurs dictées, plusieurs apps) tout en gardant ce principe de progression verrouillée.
8. **Les gisements de texte sont embarqués en dur dans le générateur** : à terme, ils doivent venir de la Banque pédagogique (nœud Firebase éditable), pas du code.

## 8. POURQUOI C'EST LE BON MODÈLE POUR L'ARCHIVE
- **Il survit à tout** : hors ligne, sans dépendance, lisible dans dix ans.
- **Il appartient à l'élève** : sur son disque, sans compte, sans connexion — cohérent avec « les données sont effacées chaque été, ce qui reste est à lui ».
- **Il enseigne encore** : ce n'est pas un relevé de notes, c'est un document qui impose un parcours de lecture et qui donne des conseils d'action.
- **Il est déjà éprouvé en classe** sur des promotions entières.
