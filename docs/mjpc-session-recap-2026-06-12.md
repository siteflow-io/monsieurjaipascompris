# MJPC — Compte rendu raisonné (12 juin 2026)

> **But de ce document** : qu'une conversation neuve comprenne **pourquoi** chaque décision a été prise,
> pas seulement laquelle. Chaque section donne : le **problème**, la **décision**, **pourquoi**,
> **ce qui a été écarté**, et la **preuve** quand il y en a une.
>
> Compagnon : `mjpc-doctrine.md` (architecture cible figée).
> Règle méthodologique qui prime : **croiser le code avant d'affirmer**. Ne rien tenir pour acquis.

---

## 0. La règle de méthode (à respecter dans toute session future)

Plusieurs fois dans cette session, **le code a contredit ce qu'on croyait tous les deux**. Trois exemples,
et ils justifient la règle :

| Ce qu'on croyait | Ce que le code disait | Conséquence si on ne vérifiait pas |
|---|---|---|
| Le QCM alimente déjà `mjpcProfils` | Le nœud **n'existe pas** en base (le code l'écrit, il n'a jamais tourné) | On aurait bâti le profil sur une fondation vide |
| Les apps « reportent » les écritures si Firebase est absent | **Aucun mécanisme de report.** 8 `catch` vides → **perte silencieuse** | On aurait conçu la console en s'appuyant sur un filet inexistant |
| Le compte perso est propre, le compte collège est pollué | **L'inverse** : le hub vivant était sur le perso | On aurait migré dans le mauvais sens |

→ **Règle : ne jamais affirmer un comportement sans l'avoir lu dans le code ou vu dans les données.**
C'est la seule protection contre la dérive.

---

## 1. Pourquoi une unification, et pas dix apps qui vont bien

**Problème.** Les moteurs de notation de chaque app sont **sains** (déterministes, source unique, sans IA).
Le risque n'est pas là. Il est ailleurs, à deux endroits :

1. **Aux coutures papier↔numérique** : transcription vocale prise pour la copie (incident Vargas),
   triche par double passage, désalignement de tokenisation. Ce sont des erreurs qui **ne plantent pas** :
   elles produisent un résultat faux d'apparence valide.
2. **Dans l'hétérogénéité** : le même problème de conception (frontière porte/note, tout-ou-rien par item)
   est résolu **différemment dans chaque app**.

**Pourquoi ça compte.** Un profil élève qui agrégerait ces dix logiques différentes empilerait du **bruit
hétérogène** — des scores non comparables présentés comme comparables. Le profil serait pire que rien :
faussement précis.

**Décision.** L'unification commence par une **doctrine de notation commune** (qu'est-ce qu'une notion,
qu'est-ce qu'un acquis, comment on compte), **avant** toute agrégation de données.

---

## 2. Pourquoi Concordance (le dictionnaire) est la première brique

**Problème.** Chaque app a son propre vocabulaire en dur (`GRAMM`, `DICT_CATEGORIES`, étiquettes
VC/PR/CDS…, critères d'échelle). Rien ne relie « accord du participe passé » de l'app A à « accord » de
l'app B, ni au socle C4 d'École Directe.

**Décision.** Une app admin `concordance.html` qui tient le **canon** (Guide de terminologie grammaticale,
niveau II = cycle 4 + socle C4) et une **table d'alias** reliant chaque terme d'app à un canonique.

**Pourquoi ces choix précis :**

- **Trois relations, pas une** (`égal` / `inclus` / `voisin`). Parce qu'une équivalence brute serait fausse :
  « accord du participe passé » n'est pas *égal* à « accord », il est *inclus* dedans. Et « voisin » sert au
  **halo** (suggestions) — il **ne doit jamais entrer dans le décompte dur**, sinon on note un élève sur des
  notions qu'il n'a pas travaillées.
- **Statut proposé (IA) / validé (prof)**, et **le décompte ne tourne que sur le validé**. Parce que l'IA
  se trompe et qu'une erreur de mapping fausse silencieusement toutes les notes en aval.
  → C'est la règle générale du système : **l'IA propose en amont, le prof tranche, le moteur exécute du figé.**
- **Id stable / libellé séparé.** Parce que les programmes changent et que les libellés bougent.
  Si les liens s'accrochent au **texte**, une réforme casse tout l'historique. S'ils s'accrochent à un **id
  opaque immuable**, on peut renommer, traduire, reformuler — **l'historique des élèves survit à la réforme**.
- **Versionning de programme** (chaque acquis porte un tag de version) pour la même raison, à l'échelle des
  réformes : mode « comparaison contre » lors du réalignement.

---

## 3. Pourquoi les manifestes (et pas un parseur)

**Problème.** Concordance a besoin du vocabulaire de chaque app. Comment le récupérer ?

**Écarté : parser le HTML des apps.** Fragile (une app change, le parseur casse), et surtout ça
créerait un **couplage** : l'app ne pourrait plus évoluer librement.

**Décision.** Chaque app **expose** son vocabulaire dans un nœud `taxonomie/manifests/<app>`.

**Le point crucial — pourquoi c'est une *vue* et pas une *copie* :** la constante en dur **reste la source
de vérité** (l'app doit fonctionner hors-ligne, seule, même si MJPC est mort). Le manifeste est **projeté
mécaniquement depuis la constante au chargement** — donc il est **incapable de diverger**. Une copie
manuelle, elle, aurait divergé le jour où on modifie la constante sans penser au manifeste.

**Principe général qui en découle :** *MJPC est une surcouche qui **lit**. Chaque app reste autonome.
Aucun couplage dur.* Si MJPC plante, toutes les apps continuent de tourner.

---

## 4. Pourquoi le « contrat de purge », et pourquoi c'est dangereux

**Problème.** Le reset est **annuel** (le profil vit un an). Chaque juin il faut effacer les données
d'élèves **sans toucher au contenu pédagogique** (textes de dictées, barèmes, chapitres — c'est du travail
de conception, réutilisable).

**Écarté : faire le ménage à la main dans la console Firebase.** Refus explicite de Paul, et il a raison :
c'est une corvée annuelle, non mécanisée, et surtout **la console n'est pas son métier**. L'app doit être
le **portail unique de contrôle du background**.

**Écarté : un script de tri externe.** Ce serait un one-shot. Or l'opération se refait **tous les ans**.

**Décision.** Chaque app **déclare** deux listes (chemins pédagogiques à **préserver** / chemins de
résultats-élèves à **purger**). Une **fonction commune** lit la déclaration et procède en trois temps :
**archive → confirmation → effacement**.

**Pourquoi une déclaration plutôt qu'une logique codée à la main dans chaque app :** si la frontière est
écrite en dur, il faut la maintenir dans 10 apps, et le jour où on ajoute un nœud on **oublie** de le mettre
dans la purge → **orphelin silencieux**. La déclaration est lisible d'un coup d'œil et centralise la
maintenance. *(C'est le pendant destructeur du manifeste : l'app se décrit, un mécanisme commun agit.)*

**Les deux garde-fous, et pourquoi ils sont non négociables :**

1. **Balayage par identité, pas par classe.** Preuve dans les données : les copies sont rangées sous
   `results/<san(nom)>`, **pas** sous la classe. Effacer `/classes/<classe>` laisserait donc **toutes les
   copies orphelines**. (C'est exactement ce que fait `_deleteEleveCls` aujourd'hui — voir §8.)
2. **Préservation par défaut.** Un nœud non déclaré « résultat-élève » n'est **pas** touché.
   Raison : mieux vaut un **résidu qu'on nettoiera** (erreur réversible) qu'un **contenu pédagogique
   détruit** par excès de zèle (erreur irréversible).

**Règle générale qui en découle : le destructeur archive TOUJOURS avant.** Jamais de suppression sèche,
même demandée. C'est ce qui rend le reset annuel *sûr*.

---

## 5. Pourquoi la console d'administration vit dans le PORTAIL, pas dans les apps

**Problème.** Paul voulait pouvoir tout exporter / importer / nettoyer depuis n'importe quelle app.

**Pourquoi c'est refusé tel quel.** Donner à `correction_dictee` le pouvoir d'effacer **toute** la base,
c'est répliquer **l'opération la plus dangereuse du système** dans dix apps : dix fois à maintenir,
dix occasions de bug, dix versions qui divergent.

**Décision.** La console vit dans **`index.html`** (le portail est déjà le gardien du commun).
Les apps en sont des **portes d'entrée** : supprimer un élève depuis une app **renvoie vers MJPC**,
qui fait le travail. *Une seule logique de suppression, à un seul endroit.*
→ C'est la **transversalité** : l'app est un chemin, MJPC est la destination.

**Distinction à ne JAMAIS fusionner** (elle structure l'interface de la console) :

| Étage | Nature | Régime |
|---|---|---|
| **Sauvegarde** (exporter tout / importer tout) | **copie**, réversible | libre, à volonté, sans friction |
| **Nettoyage** (supprimer élève, purger classe) | **destructif, irréversible** | **toujours** archive → confirmation → effacement |

**Le repli hors-ligne (à construire, n'existe pas).** Si MJPC est injoignable, l'app ne doit **pas**
supprimer sèchement : elle **met l'intention en attente** (file persistante en `localStorage`), rejouée à
la reconnexion. **Ancrée sur `san(nom)`**, jamais sur un état — parce qu'une suppression différée doit
pointer une **identité stable**, pas une ligne qui aura bougé.

---

## 6. Pourquoi un hub unique, et pourquoi sur `monsieurmeney`

**Le diagnostic (vérifié sur exports).** 6 projets Firebase sur 2 comptes. **La pollution était inversée :**
le hub **vivant** (`dictee-5e-ch4`, 6,1 Mo, toutes les apps, les 5 classes) était sur le compte **perso** —
créé là par inattention. Le compte **collège** `monsieurmeney` ne portait que **3 bases mortes**.

**Pourquoi ça devait changer.** Règle de Paul : `monsieurmeney` = tout ce qui touche au collège ;
le perso = réservé à Claude. Un hub d'élèves sur un compte perso, c'est une anomalie de fond.

**Écarté : garder le multi-bases et agréger à la lecture.** Tenable à 2 bases, intenable à 6 dont la moitié
sont mortes : on lirait du bruit, et chaque nouvelle app ajouterait une base à l'essaim.
**Écarté : transférer le projet entre comptes Google** (manip délicate, et garde un nom historique
qui ne veut plus rien dire).

**Décision.** Un **hub neuf**, `mjpc-hub`, créé sur `monsieurmeney` (Realtime Database, `europe-west1`).
Puisque le reset efface les données de toute façon, **on ne perd rien à repartir sur une base propre**.

**Le point de vigilance** (l'erreur d'origine, à ne pas rejouer) : **vérifier explicitement le compte actif**
dans la console Firebase avant de créer quoi que ce soit.

---

## 7. Pourquoi la migration passe par les apps, et ce qu'elle emporte

**Décision.** Migration **en bloc par app** : export global depuis l'ancienne base → rebranchement →
import global dans le hub. **Pas de tri manuel.**

**Pourquoi en bloc plutôt que sélectif.** Un tri sélectif suppose que Claude sache exactement où finit la
config et où commencent les copies, **dans chaque app**. C'est précisément là qu'il pouvait se tromper.
En bloc : **zéro risque de perdre du contenu**. Le tri est ensuite délégué à la purge, qui est **déclarée
par l'app** — donc juste par construction.

**Ce qui migre / ce qui ne migre pas, et pourquoi :**

| | Sort | Raison |
|---|---|---|
| Contenu pédagogique (textes, barèmes, chapitres) | **migre** | fruit du travail de conception, réutilisable chaque année |
| Copies d'élèves | migrent puis **seront purgées** | valables jusqu'au 26 juin, puis archivées et effacées |
| **Classes** | **ne migrent pas** | recréées neuves à la rentrée (nouveaux élèves) |
| Profils | s'effacent | annuels par nature |
| Taxonomie | portée par Concordance | pas dans le périmètre des apps |

**Vérifié :** le snapshot de `correction_dictee` ne prend **que** `correction_dictee`, **pas `/classes`**
(nœud mutualisé). Ce n'est **pas un manque** : c'est cohérent avec « les classes ne migrent pas ».
**Mais** : aucun mécanisme n'exporte aujourd'hui le **commun** (`/classes`, taxonomie) — c'est une pièce à
prévoir **au niveau du portail**, gardien du commun. Sans conséquence tant qu'on reste sur « reset annuel ».

---

## 8. Ce que les données ont appris (et qui contraint toute la suite)

**L'identité réelle de l'élève est `san(nom)`.** Vérifié : les copies sont rangées sous
`correction_dictee/<dictée>/results/<san(nom)>` (ex. `audebert_elise`), et l'entrée ne contient **que la
performance** (`counts`, `errors`, `note`, `timestamp`) — **pas le nom complet**. Le nom complet vit dans
`/classes`. Par ailleurs `/eleves` (uuid) ne contient que **2 entrées** : le système d'uuid **n'a jamais servi**.
→ **Conséquence pour le profil : il s'indexe sur `classe + san(nom)`, pas sur un uuid.** Confirmé sur pièce.

**`san()` est stable dans le temps.** Contrôle fait : `san()` appliqué aux noms de `config.eleves` retombe
exactement sur les clés de `results` → **28/28 pour 4e Banksy, 28/28 pour 4e Pythagore, 0 orpheline**.
→ Recréer les classes depuis les listes École Directe **rattachera chaque copie**. Preuve, pas conjecture.

**Les dictées ont des strates d'âge** (trace de l'évolution de l'app) :
- Créées **fin avril** (4e Banksy, Pythagore) : élèves **figés dans `config.eleves`** → s'affichent même sans `/classes`.
- Créées **mai-juin** (3e De Gaulle, 5e Hergé) : plus de `config.eleves`, **délèguent à `/classes`**
  (+ champs `peerHelp`, `showNote`) → affichent **0 élève** dans le hub, où `/classes` est vide.
- **Aucune copie perdue dans les deux cas** : elles vivent dans `results`, indépendantes de `/classes`.
- **`extractEleves` donne la priorité à `/classes`** ; `config.eleves` n'est qu'un **fallback**.
  → Recréer une classe fait basculer l'affichage sur elle (sans effacer `config.eleves` en base).
→ **C'est exactement l'hétérogénéité que l'unification doit résorber**, constatée sur pièce.

**La suppression d'élève du portail est cassée.** `_deleteEleveCls` supprime `classes/<slug>/eleves` +
`codes/<san>` — **et rien d'autre**. Les copies dans les apps restent **orphelines**. Et l'écriture est un
`fetch` REST avec **`catch` vide** : en cas d'échec réseau, **l'opération est perdue en silence** et
l'utilisateur croit qu'elle a réussi. → C'est la brique n°2 de la console à construire.

---

## 9. Travaux effectués dans cette session

- ✅ **`mjpc-hub` créé** sur `monsieurmeney` (Realtime Database, `europe-west1`, règles ouvertes
  permanentes — le « mode test » expire à 30 jours et aurait coupé l'app).
- ✅ **`correction_dictee` branchée sur le hub** (une seule ligne : `firebase.initializeApp`).
  **Test validé** : l'app écrit bien dans le hub neuf. *L'écran vide au premier lancement était la **preuve**
  du succès — si les anciennes dictées étaient apparues, le branchement n'aurait pas pris.*
- ✅ **Trois boutons ajoutés** (syntaxe validée par `node --check`, accolades équilibrées) :
  - **📥 Importer global** — l'import global **n'existait pas** (seul un « Restaurer » par dictée, inutilisable
    sur un hub vide). La fonction `snapshotImport` existait mais n'était pas branchée en global.
  - **⧉ Dupliquer** (panneau de contrôle, à côté du ✏️) — copie texte + barème, **sans les copies élèves**.
  - **🗑️ Supprimer** (panneau de contrôle) — **télécharge un export JSON complet AVANT** d'effacer.
    *Application directe de « le destructeur archive toujours avant ».*
- ✅ **Migration réelle** : export depuis `dictee-5e-ch4` (6 dictées, 1,3 Mo) → rebranchement → import.
  **Vérifié sain** (les deux dictées fictives, celle de ch4 du 5 mai et celle du hub du 10 juin, ont été
  **distinguées par leurs timestamps** — aucune confusion entre bases).
- ✅ **Suppression testée en vrai** : dictée fictive supprimée, **zéro résidu** confirmé sur snapshot ;
  les élèves test **survivent** (ils vivent dans `/classes`, hors du périmètre d'une dictée) — comportement
  **correct** : supprimer une dictée ≠ supprimer un élève.
- ⛔ **`index.html` : AUCUNE modification.** Uniquement lu (diagnostic).

---

## 10. Ce qui reste, dans l'ordre, et pourquoi cet ordre

**Prochaine session : la console d'administration (`index.html`).**
Fondation existante : panneau prof à 7 sections (classes, élèves, présence, profil-test, dashboard, archi,
config), gestion des codes, publication par classe, présence temps réel. **On bâtit dessus, pas de zéro.**

Quatre briques :
1. **Export / import global** (absent du portail — alors que c'est sa place naturelle).
2. **Cascade de suppression** vers les apps (aujourd'hui : classe + code → orphelins garantis).
3. **Archive-avant-suppression**.
4. **File de report persistante** + solder la dette des **8 `catch` vides**.

**Puis l'épine dorsale** — l'ordre n'est pas arbitraire, chaque brique **dépend** de la précédente :
**Concordance** (il faut le dictionnaire avant de pouvoir mapper) → **manifestes + contrat de purge par app**
(les apps ne peuvent exposer leur vocabulaire que si le canon existe) → **profil élève** (il ne peut ranger
par notion que si le mapping est fait) → **cockpit** (il lit le profil) → **strate/bilan** (lectures du profil)
→ **parcours chaîné** (suppose la Banque d'exercices extraite) → **clés d'accès**.

**Chantiers en attente** : rapatrier le QCM (`plickers-mjpc` — 46 Ko, format de classe **divergent** :
`3e-charles-de-gaulle` vs `3E Charles de Gaulle` du hub ; **il faudra un format canonique unique**) ;
recréer les classes 2026-2027 ; brancher les autres apps sur `mjpc-hub` (même geste qu'aujourd'hui —
et **le fusionner** avec l'exposition du manifeste, pour ne toucher chaque app qu'**une seule fois**).

**Ce qu'il ne faut PAS poursuivre séparément** — et c'est important, parce que ce sont de bonnes idées qui
donnent envie de bifurquer : profil métacognitif, cartographie de la difficulté, différenciation par groupes
de besoin, cahier qui atteste, aide fine fondée sur preuves. **Ce sont des lectures du même réservoir** :
elles **tombent d'elles-mêmes** quand l'épine dorsale tient. Les traiter à part, c'est construire dix fois
la même chose. **Finir avant d'ouvrir. Ne pas bifurquer.**

---

## 11. La finalité (ce qui justifie tout le reste)

Le but n'est pas la technique : c'est le **ratio investissement / rendement**. Tendre vers 18 h devant élèves
et le reste réellement libre.

Le moyen, c'est **la mécanique** : un moteur déterministe, à source unique, sans IA, une fois juste,
**ne se dégrade pas**. On le paie une fois, il rend indéfiniment. C'est un **invariant** — et c'est
précisément pour ça que l'IA reste **en amont** (elle propose, le prof valide) et **jamais dans le moteur** :
une mécanique se prouve et se fige, une IA se re-vérifie sans cesse.

La fin, c'est **libérer l'humain**. La donnée **prépare** la rencontre avec l'élève, elle ne la remplace pas.
Le système donne une certitude sur le **mesurable** — pour que toute l'attention aille à ce qui ne se mesure
pas. *L'élève déborde toujours ses données.*

La seule dette qui demeure n'est pas une dette de code (la mécanique la ferme) mais une **dette de décision** :
l'arbitrage humain aux coutures. C'est l'expertise du prof, non mécanisable — et c'est très bien ainsi.

---

## Amorce pour la prochaine session

> Reprise du chantier MJPC — **console d'administration dans `index.html`**.
> Lire `mjpc-doctrine.md` (architecture) et `mjpc-session-recap.md` (raisons des décisions).
> État : hub `mjpc-hub` créé sur `monsieurmeney` ; `correction_dictee` branchée, migrée, testée
> (3 boutons ajoutés : import global, dupliquer, supprimer-avec-export-auto). `index.html` non modifié.
> Objectif : les 4 briques de la console — export/import global, cascade de suppression,
> archive-avant-suppression, file de report persistante (+ dette des 8 `catch` vides).
> **Méthode impérative : croiser le code avant d'affirmer.** Ne pas bifurquer. Je livre `index.html` à jour.
