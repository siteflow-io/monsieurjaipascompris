# MJPC 6 — JOURNAL DE LA TRIANGULATION
> **Ce document est le MIROIR de ce que Paul fait avec ses deux conversations** (conscience ↔ Paul ↔ exécutant). Il n'externalise pas le dialogue — il en garde la trace. Ouvert le 20/07/2026 sur demande de Paul.
>
> **POURQUOI** : le plan porte les RÈGLES, la conversation portait les CAS — et les cas mouraient avec elle. Une règle sans ses cas se réinterprète toujours dans le sens de ce qu'on est en train de faire. Ce journal garde les cas : datés, contradictoires, vérifiables.
>
> **QUI ÉCRIT** : la conscience, en fin de tour, uniquement pour les événements qui comptent — arbitrages de Paul, contestations sourcées, reproches, décisions renversées, promotions, et surtout BIFURCATIONS. Jamais la routine.
>
> **QUI LIT** : toute conscience entrante (lecture OBLIGATOIRE, avec le plan) ; tout exécutant qui veut se resynchroniser sans que Paul lui recolle l'historique.

## FORMAT D'UN CAS — trois niveaux, et le troisième n'est pas garanti
```
AAAA-MM-JJ HH:MM [ÉMETTEUR→DESTINATAIRE] TYPE — titre court
  fait : ce qui s'est passé, avec ses éléments vérifiables (lignes, md5, chiffres)
  résolution : ce qui a été décidé, et ce qui a changé dans le dispositif
  → conv « titre » https://claude.ai/chat/<id>
  → mots-clés : termes DISTINCTIFS permettant de retrouver le passage
```
**Niveau 1, la ligne** : dit QUOI et QUI. **Niveau 2, fait + résolution** : rend le cas compréhensible **même si la conversation a disparu** — c'est l'exigence centrale, le journal doit être AUTOSUFFISANT sur la résolution. **Niveau 3, ancre + mots-clés** : permet d'aller chercher le récit **quand il existe encore**. *Limite à connaître : l'outil de recherche des conversations passées rend des EXTRAITS et parfois un résumé, jamais le fil intégral ; une conversation supprimée laisse une ancre morte. D'où l'exigence sur le niveau 2. Les mots-clés doivent être DISTINCTIFS (« m8-btn-min », « purger doublons ») et non génériques (« erreur CSS ») : la recherche fonctionne par mots du contenu.*

## ⚠ LES BIFURCATIONS — règle de vigilance renforcée (Paul, 20/07)
**Principe** : **le plan s'applique par défaut.** Quand Paul introduit une nouvelle idée ou une nouvelle demande en cours de route (les M8bis, M8ter, M8-MOBILE, M8-FUSION…), c'est une **BIFURCATION** — et elle relève le niveau de vigilance ET de détail dans l'externalisation.
**Raison, dans les mots de Paul** : ce qui ressemble à une dérive n'en est pas — c'est *« de la dérive justifiée par du développement à l'instantané »*. Mais l'IA en fait un **effet de bord** : une conscience NOUVELLE, qui lit le plan et découvre un chantier différent de la réalité, a le plus grand mal à rattraper. **Exemple vécu** : la conscience n°2 (19-20/07) a commis douze erreurs en une journée, dont plusieurs directement imputables à ce décalage — elle jugeait l'état du chantier sur un plan que cinq unités non prévues avaient déjà dépassé.
**Ce qu'une bifurcation exige, EN PLUS du format standard** :
```
  déclencheur : la phrase ou le constat de Paul qui l'a provoquée (citée)
  ce qu'elle remplace ou décale : le morceau prévu qui attend maintenant
  raison de fond : pourquoi elle est justifiée (jamais « Paul l'a demandé » seul)
  effet sur le plan : ce qui a été écrit au plan, avec le commit
```
**Et une obligation de tenue** : toute bifurcation est reportée AU PLAN dans le même tour, pas seulement au journal — le plan doit rester le reflet du chantier réel, sans quoi il devient un piège pour la conscience suivante.

---

# LES CAS

## 2026-07-19 — 2026-07-20 · BIFURCATIONS

**2026-07-19 ~17:00 [PAUL→CONSCIENCE] BIFURCATION B1 — adossement Éduscol de la taxonomie**
  déclencheur : *« un truc qui me chiffonne c'est "des pages non extraites". Tu dois tout extraire c'est non négociable. Et créer du coup les items manquants si besoin. »*
  fait : audit des 148 libellés contre le guide officiel 2020 (213 pages extraites après téléversement du PDF par Paul, l'extraction web tronquant à la p. 70). 142 conformes · 2 écarts francs · 4 ajustements · 3 points confirmés.
  raison de fond : la taxonomie devait être défendable face à l'institution AVANT d'être éditable (l'éditeur M8bis arrivait).
  résolution : taxonomie **v1.1.0**, 154 notions — 6 créations, 2 renommages, table d'alias. Deux exceptions ASSUMÉES par Paul, documentées et défendables par le guide lui-même : « mode conditionnel » accepté (présent ET passé) ; « adjectif qualificatif » maintenu avec « adjectif » en alias. Alignement sur les 3 types de phrase, l'exclamative passant aux FORMES.
  ce qu'elle décale : rien de la chronologie ; consommé sur la journée du 19.
  effet sur le plan : `docs/MJPC6-audit-eduscol.md` v4 (commit 76484bbaf9) · taxonomie poussée au dépôt (b4c4253dcd) ET au nœud `/taxonomie`.
  → mots-clés : éduscol · conditionnel passé · gram-042 · forme exclamative · données martyres non

**2026-07-20 ~10:30 [PAUL→CONSCIENCE] BIFURCATION B2 — le mobile devient un usage de plein droit**
  déclencheur : *« Sur téléphone c'est très difficile de manipuler le mode test et le site en général »*, puis *« dans la mesure où je code aussi sur mon téléphone il faut que ce soit accessible aussi sur mobile […] si plus tard je me rends compte que j'utilise plus souvent le site sur mon tél que sur ordi, au moins ça sera codé »*.
  fait : mesure au harnais tactile — 24 cibles sur 31 sous la norme des 44 px, console à 3 195 px (3,8 écrans).
  raison de fond : usage réel de Paul, et une interface non tactile ne se rattrape pas après coup.
  résolution : morceau **M8-MOBILE** créé hors plan, livré et promu (v8.2.0, commit f3fca16f4a) — accordéon exclusif, 0 cible sous-norme, desktop intact. **Deux règles gravées** : « le mobile est un usage de plein droit, côté prof aussi » (4 critères opposables) puis, sur reprise de Paul (*« on ne bascule pas l'UI sur de l'usage mobile uniquement »*), sa symétrique « le desktop reste un usage de plein droit ».
  ce qu'elle décale : M9→M13, qui n'ont pas commencé.
  effet sur le plan : chronologie mise à jour (4edba6a76a) · deux règles en A0 (fe3be8e501, c0c0090747).
  → mots-clés : 44 px · accordéon exclusif · m8-btn-min · is_mobile has_touch

**2026-07-20 ~13:00 [PAUL→CONSCIENCE] BIFURCATION B3 — les doublons d'interface**
  déclencheur : après la promotion de M8-MOBILE, Paul montre une capture illisible et demande *« en fait la question c'est où j'accède à la console »*, puis *« Il faut surtout se poser la question de ce qui peut faire doublon ! »*, puis *« Lis le site entier sous cet angle là. Je veux vraiment qu'on soit sur du fluide, de l'ergonomique et du lisible. »*
  fait : le site porte **quatre** interfaces professeur qui ne se connaissent pas (Outils prof · Panneau prof · Console du site · zone de publication) et six recouvrements, dont deux dangereux : « Mode test » contre « Profil test » (noms jumeaux, fonctions différentes) et « Règles Firebase » contre « Configuration ». La Console est à 3 gestes + un défilement, et n'existe que dans une page de niveau — Paul, qui l'a fait développer, a dû demander où elle se trouvait.
  raison de fond : ce n'est pas un problème de taille de boutons mais de PLACE — aucune passe tactile ne l'aurait réparé.
  résolution : `docs/MJPC6-audit-ergonomie.md` (55aa2ea570) · morceau **M8-FUSION** ouvert, maquette A validée sur images (mode test en bascule permanente d'en-tête, pour raison de SÉCURITÉ : l'état « mes gestes sont-ils réels ? » doit être visible depuis toutes les sections).
  ce qu'elle décale : M9→M13, encore.
  → mots-clés : tprof-sidebar · 98 px de contenu · Mode test Profil test · maquette A

**2026-07-19 ~22:00 [PAUL→CONSCIENCE] BIFURCATION B4 — M8ter, injection JSON de la taxonomie**
  déclencheur : *« il faut aussi un prompt ia x prof json pour la taxo […] pour les notions hors grammaire éduscol il faudra que je puisse les intégrer, les créer ainsi que leurs sections »*.
  fait : M8bis n'ouvrait que les NOTIONS (arbitrage Q4) ; « leurs sections » exige familles et probablement domaines.
  résolution : morceau **M8ter** consigné au plan, à coder en fin de chantier taxonomie. Deux questions de conception ouvertes, dont **une tranchée par Paul** : l'ancrage Éduscol existe aussi hors grammaire (programme, compétences, attendus de fin de cycle) — ma proposition supposait le contraire, à tort. La seconde (référentiel unique ou double) est INSTRUITE mais NON TRANCHÉE : trois voies décrites, la structure portant déjà deux étages (154 notions de langue / 28 items de compétences).
  ce qu'elle décale : rien encore, morceau non lancé. **ARBITRAGE EN ATTENTE.**
  → mots-clés : prompt ia json taxonomie · voies 1/2/3 · competences francaisC4

## 2026-07-19 — 2026-07-20 · CONTESTATIONS SOURCÉES JUGÉES FONDÉES CONTRE LA CONSCIENCE

**2026-07-19 ~19:00 [EXÉCUTANT→CONSCIENCE] CONTESTATION FONDÉE — « constantes de manifeste vides »**
  fait : la conscience avait déclaré BLOQUANTE une livraison au motif que `MJPC_MANIFESTE` et `MJPC_PURGE` étaient vides. Elles ne l'étaient pas : son regex était tombé sur l'**exemple commenté** du socle (L1215-1216) au lieu des déclarations réelles (L1373/1377).
  résolution : verdict annulé, erreur ⑤ gravée. **Règle née de ce cas** : toute lecture d'une constante du socle par regex écarte d'abord les lignes commençant par `//`. Troisième épisode du même piège (M7 `idDeLApp`, M8 exécutant, M8 conscience).
  → mots-clés : exemple commenté · MJPC_PURGE preserver · idDeLApp

**2026-07-20 ~11:00 [EXÉCUTANT→CONSCIENCE] CONTESTATION FONDÉE — classes CSS du périmètre**
  fait : le prompt M8-MOBILE attribuait les boutons de 25 px à `.ch-publish-btn` avec `padding:2px 8px`. En réalité `.m8-btn-min` (L353, `4px 9px`) ; le `2px 8px` cité était `.seance-header .ch-publish-btn` (L438), **hors console**. Le grep avait pris la sous-règle pour la règle de base.
  résolution : erreur ⑩ — **annoncée à l'exécutant puis NON GRAVÉE**, omission relevée par l'exécutant suivant et réparée (fc8eb739f1). Leçon inscrite : *une erreur annoncée qui ne rejoint pas le registre n'existe pas.*
  → mots-clés : m8-btn-min · seance-header · 25 px

**2026-07-20 ~14:00 [EXÉCUTANT→CONSCIENCE] CONTESTATION FONDÉE — nombre d'appelants**
  fait : le prompt M8-FUSION annonçait 8 appelants de `renderConsoleM8` ; il y en a **9** en v8.2.0 (10 occurrences dont une en commentaire). La conscience reprenait un chiffre du rapport de la veille sans l'actualiser après la livraison qui en ajoutait un.
  résolution : chiffre corrigé. **Règle née de ce cas** : la conscience ne fournit plus de chiffres de périmètre aux exécutants — elle décrit le problème et l'objectif, l'exécutant établit les mesures.
  → mots-clés : renderConsoleM8 · neuf appelants · m8ToggleBloc

## 2026-07-19 — 2026-07-20 · REPROCHES DE PAUL

**2026-07-20 ~12:00 [PAUL→CONSCIENCE] REPROCHE — clic non voulu en production**
  fait : le harnais de la conscience a cliqué « 🧹 Purger doublons (toutes dictées) » — fonction de maintenance GLOBALE sur les 6 dictées réelles (147 entrées d'autocorrection) — bouton repéré par mot-clé approximatif, avec `dialog.accept()` global. Dégâts nuls à faibles (réécriture à l'identique sans doublon), mais action réelle non demandée.
  résolution : **autodéclaré par la conscience**, erreur ⑦, règle « harnais en lecture seule stricte » gravée (libellé exact vérifié dans le code · jamais de `dialog.accept()` global · effets confinés aux `_test_` · en cas de doute on lit le code, on ne clique pas pour voir). Arbitrage de Paul : les tests continuent, en lecture seule stricte.
  → mots-clés : purger doublons · dialog.accept · lecture seule stricte

**2026-07-20 15:0x [PAUL→CONSCIENCE] REPROCHE — « encore des affirmations infondées, en plus en introduisant de l'inquiétude »**
  fait : le rapport de dérive annonçait « 2 promotions en 2 jours » et en tirait que le rythme n'était pas tenu. Compte réel après vérification : **SEPT promotions** depuis le 19/07 au matin, 65 commits. Le chiffre n'avait jamais été établi. Le même rapport présentait M-SÉCU comme « le point le plus grave » alors que le plan documente le choix assumé (données martyres en développement), et M7 comme « à l'arrêt » alors qu'il était promu depuis la veille (vérifiable sur le fichier : zéro `.set("terminee")` direct, « Mes évaluations » livré, portail branché).
  résolution : erreurs ⑪ et ⑫. **Trois correctifs mécaniques** : aucun chiffre sans la commande qui l'a produit dans le tour même · aucun chiffre de périmètre dans les prompts d'exécutants · aucun jugement d'état sans source affichée.
  → mots-clés : sept promotions · données martyres · rapport de dérive

**2026-07-20 ~15:30 [PAUL→CONSCIENCE] REPROCHE STRUCTUREL — « ça fait quasi une erreur par tour »**
  fait : douze erreurs en une journée pour une conversation censée superviser. Motif établi : **six des douze sont la même faute** (④⑤⑨⑩⑪⑫) — écrire un fait avant de l'avoir établi, alors que la source était à portée de commande ; quatre autres (①②③⑥) sont l'application de travers d'une règle pourtant écrite au plan.
  résolution : les trois correctifs ci-dessus, plus la décision de fond de Paul sur les ponts (ci-dessous).
  → mots-clés : une erreur par tour · faute générique · vérifier avant d'écrire

## 2026-07-20 · DÉCISIONS DE DISPOSITIF

**2026-07-20 ~15:45 [PAUL→CONSCIENCE] DÉCISION — les consciences vivent longtemps**
  fait : Paul énonce *« je préfère des conv longues sur les consciences car malgré l'amnésie, la connaissance du contexte est supérieure que lors d'un changement de conv, et apparemment l'externalisation des documents (plan, cadrage etc) ne pallie pas. Ou alors l'IA prend des libertés justement parce que c'est externalisé. »*
  analyse retenue : dans un fil long, les actes de la conscience sont dans son contexte — ils CONTRAIGNENT. Un document, lui, s'INTERPRÈTE : la même règle lue le matin comme information devient contraignante après avoir été vécue. Et le plan porte les règles quand la conversation porte la casuistique.
  résolution : on ne change de conscience que sur **amnésie avérée**, jamais par précaution — le coût d'un pont est supérieur au coût d'un fil saturé. Et création du présent journal, pour que la casuistique survive aux ponts.
  → mots-clés : conv longues · externalisation ne pallie pas · casuistique

## 2026-07-20 · SUITE DE B3 — M8-FUSION livré et promu

**2026-07-20 ~16:30 [EXÉCUTANT→CONSCIENCE] LIVRAISON — M8-FUSION, une seule administration**
  fait : la console quitte `page-level` (« Console du site » : 0 occurrence) ; ses 5 blocs deviennent des sections du Panneau prof. Vérifié par la conscience : **les 5 fonctions `_bloc*` sont identiques md5 avant/après** (déplacées, non réécrites) ; seules `_m8Accordeon` et `m8ToggleBloc` ont disparu, exactement le périmètre autorisé ; diff 50/85/23, les 50 lignes retirées classées une par une. Mobile : contenu 98 → 364 px, 0 cible sous-norme. Desktop : sidebar 230 px verticale, boutons 229×41 INCHANGÉS — règle du desktop de plein droit tenue.
  résolution : promu v8.3.0 (commit 2ef74c102b), point de retour 62f32f7e89. **Une reprise de l'exécutant contre la conscience, fondée** : la conscience avait exigé « au repos, rien du tout » pour la pastille de mode test ; l'exécutant a montré que la pastille est AUSSI le bouton d'activation — sans contrôle au repos, le mode test devient inactivable. Son « 🧪 Mode test » discret et sans état affiché est retenu : seul l'état d'exception s'orne.
  → mots-clés : une seule administration · _bloc identiques md5 · point orange tprof-testdot · pastille au repos

**2026-07-20 ~16:00 [CONSCIENCE→EXÉCUTANT] SUGGESTION ACCEPTÉE — point orange sur le bouton flottant**
  fait : l'exécutant a proposé, EN PLUS de la pastille d'en-tête, un point orange sur le bouton flottant lui-même, pour que le mode test reste visible **panneau fermé**.
  résolution : accepté par la conscience comme meilleur que sa propre spécification — application directe du corollaire de sécurité du plan (une décision de sûreté ne se tranche pas sur un argument d'encombrement). Vérifié au harnais : `display:none` au repos → `inline-block` ambre en mode test.
  → mots-clés : corollaire de sécurité · panneau fermé · m8RendreIndicateursTest

**2026-07-20 ~17:00 [PAUL→CONSCIENCE] BIFURCATION B5 — le Panneau prof absorbe le lanceur, l'accueil devient une grille d'applications**
  déclencheur : après essai sur son vrai téléphone, Paul montre un écran qui déborde et écrit : *« les 4 overlays en haut ne sont pas pratiques. plutôt que d'avoir un bandeau en mode admin, il faudrait quelque chose de plus léger mais aussi visible. Et panneau prof et mes applications, tu les mettrais où ? »* puis *« pourquoi ne pas mettre les outils profs dans le panneau prof ? […] dans tableau de bord je verrais bien mes applications disposées avec leur bouton, un peu comme un tableau de plateformes style netflix […] et chaque app porterait une icône (celle qui existera plus tard, quand j'aurai terminé ce chantier et que j'aurai publié les apps en web app) »*.
  fait mesuré par la conscience sur la v8.3.0 promue : section Classes en **débordement de 64 px**, lignes individuelles de 27 à 77 px, **15 cibles sur 16 sous la norme** (dette D-M8F-3 confirmée avec les données réelles) ; quatre surfaces `position:fixed` sur les cent premiers pixels de l'écran, le bouton « Panneau prof » (top 36) chevauchant le bandeau admin (hauteur 50) de 14 px — d'où le texte tronqué de la capture.
  raison de fond : ce n'est pas de l'esthétique — quatre surfaces superposées masquent le contenu sur un vrai téléphone, et le Tableau de bord occupe la place d'accueil avec des informations que Paul ne lit pas (« chapitres en cache » est une donnée de débogage). La proposition de Paul supprime le second bouton flottant : le problème d'empilement disparaît par la structure, pas par un rustine de positionnement.
  ce qu'elle décale : M9→M13, toujours pas commencés (troisième report).
  résolution : morceau **M8-MOBILE-2** ouvert — ① liseré ambre en `position:fixed` à la place du bandeau (coût zéro pixel de contenu) ② bouton unique, en barre basse sous le seuil mobile, inchangé au-dessus (règle desktop) ③ « Tableau de bord » → « 🏠 Accueil » : une ligne d'état (niveaux ouverts/bloqués seuls conservés) + grille des 7 applications en cartes ④ le lanceur `admin-tools-menu` DISPARAÎT ⑤ passe tactile des sections historiques (Classes, Élèves & codes, Archives, Architecture, Présence live). **Champ `icone` prévu** sur chaque application : emoji aujourd'hui, fichier plus tard, sans qu'une ligne de mise en page change. Prompt de génération des 7 icônes remis à Paul pour ChatGPT (palette du site relevée dans le fichier : #1a1030, #ffb86c, #ffd9a8, #8b5cf6).
  effet sur le plan : à reporter à la chronologie.
  → mots-clés : quatre overlays · liseré · grille netflix · champ icone · débordement 64 px

**2026-07-20 ~17:30 [PAUL→CONSCIENCE] CONSTAT (SANS bifurcation — « reprendre comme on avait commencé »)**
  fait, vérifié par la conscience sur les fichiers de production : **portail à code présent** dans `correction_dictee`, `evaluation-qcm`, `pilotage_debat_s3`, `dictee_universelle` ; **ABSENT** dans `reecriture_bb4e` (entrée « Entre ton nom et prénom », zéro code — n'importe quel élève peut ouvrir la copie d'un camarade), `reecriture`, `applause_meter`, et `worktrack` (choix de classe seul). Ce ne sont pas des régressions : ce sont exactement les apps que M9→M13 doivent traiter, reportées trois fois par les bifurcations B2/B3/B5.
  fait n°2, relevé par Paul sur le QCM : l'écran « 🎓 Choisis ta classe » (L1997) précède le portail à code. **Paul :** *« l'élève n'a pas à "choisir sa classe", il doit avoir la même connexion que partout : code + nom prénom, et ENSUITE il va dans sa classe vu qu'il y est relié par MJPC »*. La conscience confirme le fondement : le nœud `/codes` porte `{code, name, classe}` — la classe est DÉDUCTIBLE du code, l'étape est donc redondante ; et elle expose la liste des classes à qui ouvre l'app.
  résolution : **consigné en dette, PAS traité maintenant** — décision de Paul : pas de bifurcation, on reprend M8-MOBILE-2 là où on l'avait laissé. La dette se soldera dans la passe QCM ou dans M9→M13.
  → mots-clés : choisis ta classe · portail à code · reecriture_bb4e · codes classe déductible

**2026-07-20 ~18:00 [PAUL→CONSCIENCE] BIFURCATION B6 — ARRÊT DU DÉVELOPPEMENT, doctrine du site**
  déclencheur : *« Donc ça veut dire qu'il faut repenser les choses. On arrête tout développement actuel, et on complète le plan pour que le site soit vraiment cohérent avec ce développement. Ensuite, on codera le site, et après seulement on reprendra le plan. Donc pour l'instant, discussion pédagogique / technique uniquement. »*
  fait : quatre bugs remontés par Paul en usage réel (portail sans code, `activateAdmin` neutralisé, dictée nommée listée hors classe, clé de publication non trouvée) se sont révélés être les symptômes d'une cause unique, formulée par Paul lui-même et confirmée par la conscience sur le code : **« Chaque app a été durcie une par une ; le hub qui les rassemble est resté celui d'avant. »**
  raison de fond : le plan documentait ce qu'on CONSTRUIT, jamais l'EXISTANT à réinterroger. Paul : *« il manque toute cette partie de l'existant à réinterroger, les cas que je sors depuis 2 ou 3 tours en sont le symptôme »*.
  ce qu'elle décale : M8-MOBILE-2 (arrêté en cours de codage), M8ter, M9→M13.
  résolution : trois documents produits — `MJPC6-audit-ergonomie.md` (doublons d'interface), `MJPC6-audit-existant.md` (8 illogismes, cause racine I1), et **`MJPC6-doctrine-du-site.md`** (commit eefcbd6981, 186 lignes) qui fixe : les 3 axes (identité / vue / mode test), le modèle ressource-acte, la forme unique de publication, le profil à deux vues dont l'une différée, le bypass souverain en lecture, les sorties, la frontière Firebase / dur, l'éditabilité par poignée, le Drive, l'Apps Script.
  **Deux corrections de la conscience sur ses propres propositions, après vérification exigée par Paul** : ① le bypass prof N'ÉTAIT PAS à inventer — `lireSessionMJPC` le prévoit déjà (`if(s.is_prof===true)`), TTL 12 h, validation contre `/classes` ; seul manque « ce que la session autorise » ; ② l'Apps Script NE PEUT PAS être retiré — il fait le tracking ET l'upload des fichiers.
  → mots-clés : doctrine du site · ressource acte · fantôme tout le monde · lecture seule rendez-vous parents · lireSessionMJPC is_prof

**2026-07-20 ~19:30 [PAUL↔CONSCIENCE] CONCEPTION — l'atelier de composition, et la clé de voûte**
  fait : discussion suivie, développement toujours arrêté. Paul renverse le problème des documents : *« j'ai découvert qu'on pouvait faire un document stylisé en html […] des champs où je balance le texte d'un bilan, qui est démoulé toujours avec la même charte »* — le site n'a pas besoin d'une visionneuse mais d'un ATELIER DE COMPOSITION. La conscience vérifie : le motif existe **quatre fois** (`bilansPrintHTML`+`syntheseEleveSeance` au débat, `bilanTisseHTML`+`fiche4d` à worktrack, `generateDictFiches` à la dictée universelle, `generateBilan`+`ficheJsonHtmlPourEleve` à la correction) — rien à inventer, un motif à EXTRAIRE.
  décisions prises : **images → Drive avec partage par lien** (chiffre décisif : `/site/3e` pèse 10,4 Ko et le RTDB télécharge le nœud entier — une image en base64 le ferait passer à 200 Ko, vingt à 4 Mo par élève et par ouverture ; Firebase Storage écarté pour la rentrée car son quota porte sur le téléchargement) + redimensionnement à l'envoi + taille servie par suffixe `lh3` · **diapositives → JSON produit par IA, jamais HTML** (le JSON décrit le contenu, le gabarit applique la forme : sinon chaque diapositive arrive avec son style et l'on retombe dans le patchwork) · **un seul gabarit exhaustif à composantes cochables**, avec boutons de produit qui préréglent les cases — *« un peu comme les combinaisons de jeux à l'orgue »*, les boutons étant les pistons de combinaison · **fenêtre glissante PAR TYPE** (les types existent déjà : `etude_texte` ×16, `intro_image`, `notions`, `dictee_reecriture`, `atelier_ecriture`, `remediation`, `tache_finale`) · **signature parent retirée** (Paul).
  **LA CLÉ DE VOÛTE, formulée par Paul** : *« ce qui unifie une activité d'entraînement sur le participe passé à la dictée, à une dictée évaluée, à une dictée coévaluée, à un exercice, à une séance sur la même notion, c'est la compétence. Et donc taxonomie revient ici afin de faire le lien, la couture, la continuité. »* La conscience vérifie l'état réel : **les 5 dictées portent des compétences mais dans un AUTRE vocabulaire** (`D1.1 Orthographe grammaticale`… contre `gram-003`/`conj-017` de la taxonomie) et **les 4 évaluations QCM n'en portent AUCUNE**. **Concordance validée par Paul** comme mécanisme de couture (elle existe déjà : `alias.tables` du fichier de taxonomie). Le taggage par notion devient un **prérequis**, pas une amélioration.
  **Trouvaille de Paul en cours de route** : *« tout document de séance peut potentiellement devenir le profil longitudinal imprimé au fur et à mesure dans le cahier »* — le cahier redevient le profil ; d'où deux règles nées de là : la date d'édition visible sur tout document, et **l'agrégation À LA DATE et non à aujourd'hui**.
  résolution : `docs/MJPC6-doctrine-du-site.md` section XIII (commit 00c3276343, doctrine portée à 295 lignes), tout consigné sans retrait ni synthèse, sur consigne explicite de Paul.
  → mots-clés : atelier de composition · jeux d'orgue pistons · diapositive JSON pas HTML · lh3 s400 s1600 · classes_amenages · D1.1 concordance · cahier redevient profil · fenêtre par type

**2026-07-21 [PAUL↔CONSCIENCE] CONCEPTION — la classification, la capitalisation et le cercle vertueux**
  fait : la Concordance passe 1 terminée (20 alias `egal` validés en 5 lots), création de `D1.7 Accords du participe passé` par Paul, et **règle de PARTITION** gravée en point 13bis (une notion, exactement un propriétaire fin) née d'un exemple chiffré : une erreur de participe passé comptée par D1.4, D1.7 ET D1.1 s'afficherait **trois fois** — vingt et une erreurs pour sept commises en rendez-vous parents. Puis Paul renvoie la conscience au mécanisme de correction : **après `G` ou `L`, l'app demande « Qu'a écrit l'élève ? »** et enregistre le couple attendu/fautif — la conscience avait affirmé à tort que le geste manuscrit ne pouvait pas être affiné.
  audit produit (`MJPC6-audit-classification.md`) : `inferCategory` n'existe **que** dans `dictee_universelle` · taux de détection déclaré **0,50 en moyenne** (min 0, max 1) · **2 contresens sur 131 paires** seulement, tous deux dus au fallback heuristique (`l'idée→l'idé` classé participe passé) · `fineCat` mélange **trois vocabulaires** dont des CONSEILS (`L1` « Vérifie l'orthographe » : 63 erreurs rangées là) · le mot fautif n'est renseigné que dans **2 dictées sur 5** (1 009 erreurs sans transcription) · **chaque app a son propre référentiel**, aucune ne pointe la taxonomie.
  **Reprise de Paul, importante** : *« elles n'ont rien inventé, c'est simplement que je les ai utilisées et codées sans avoir la vue d'ensemble au départ. D'où la nécessité de concordance, et qui fait d'ailleurs de ce que tu penses être un manque, une richesse. On ne linéarise pas, mais on fait traduire les régionalismes dans une langue commune. »*
  **Distinction structurante établie** : les apps qui classent des ERREURS se cousent aux NOTIONS (dictée, correction, réécriture) ; celles qui évaluent des CRITÈRES se cousent aux COMPÉTENCES (rédaction, étude de texte, débat, applaudimètre). La taxonomie a exactement ces deux étages.
  **Rectification exigée par Paul** : le taux de détection ne s'affiche **JAMAIS** côté élève (violation directe du principe cardinal) — il appartient au professeur, comme tableau de bord de renforcement.
  **Philosophie de fond posée par Paul** : *« capitalisation ET cercle vertueux »*. Le précédent existe : `reecriture.html` porte **15 pièges capitalisés** `{attendu, fautif, tokenIdx}`, dont trois façons de rater le même mot. Horizon visé : *« l'app, affinée au bout de cinq dictées, serait tellement sûre que le moteur servirait pour la correction des travaux d'entraînement, hors de mon contrôle de correcteur »*.
  **Nuance apportée par la conscience et retenue** : la mécanique est invariable, mais l'invariabilité n'est pas la vérité — une règle mal posée serait constamment fausse, invisiblement. D'où **certifié** (arbitré par Paul une fois, sa signature garantit) contre **déduit** (probable). **En entraînement autonome, seul le certifié parle.**
  → mots-clés : partition D1.7 · inferCategory pctDetection · fineCat L1 conseils · pièges capitalisés réécriture · certifié déduit · régionalismes langue commune

**2026-07-21 [CONSCIENCE] ARCHIVAGE — le cadrage de M8-MOBILE-2, morceau suspendu**
  fait : M8-MOBILE-2 (liseré, bouton unique en barre basse, accueil en grille d'applications, passe tactile des sections historiques) a été SUSPENDU par la bifurcation B6 alors que son cadrage était livré et audité. Le fichier `M8-MOBILE-2-cadrage.md` a été retiré du sas le 21/07 (nettoyage) — **son contenu est archivé ici**, car il porte des mesures qui ne seront pas refaites.
  **Mesures établies par l'exécutant, à réutiliser à la reprise** : section « Élèves & codes » à **2,9 écrans** de haut ; **63 cibles sous-norme** dont des chips de classe à 30 px et des boutons d'icône de 26 à 32 px de LARGE — la règle générique posée par M8-FUSION ne couvrait que la HAUTEUR des `button/input/select`, ni la largeur ni les `[onclick]` sur div/span ; contenu du panneau à 98 px sur 390 ; section `presence` non mesurable (vide).
  **Constat hors périmètre qu'il a levé** : deux `POST` vers `script.google.com` au chargement → dette D-APPSCRIPT-RESIDUEL, avec la correction apportée depuis : le même Apps Script porte AUSSI l'upload des fichiers, il ne peut donc pas être simplement retiré.
  **Ce qui lui est retiré** : le liseré ambre passe à M8-IDENTITÉ (c'est un témoin des trois axes de la doctrine §I, il appartient à ce morceau) — décision du 21/07, Q5 de son cadrage.
  **Ce qui reste à sa reprise** : bouton flottant unique en barre basse sous le seuil mobile · « Tableau de bord » → « 🏠 Accueil » avec ligne d'état et grille des applications (champ `icone` prévu) · disparition du lanceur `admin-tools-menu` · passe tactile des cinq sections historiques du Panneau prof.
  → mots-clés : M8-MOBILE-2 suspendu · 2,9 écrans Élèves et codes · trou de couverture largeur onclick · liseré transféré

## 2026-07-21 · LE SITE APPLIQUE SA DOCTRINE — M8-IDENTITÉ, et le bug qui a suivi

**2026-07-21 ~12:20 [EXÉCUTANT→CONSCIENCE] LIVRAISON — M8-IDENTITÉ, promue v8.4.0 puis v8.4.1**
  fait : le site cesse de distribuer une doctrine qu'il ne s'applique pas. **I1** un seul chemin de lecture de la publication (`_visiblePourSession`) — auparavant `collectChapterItems` testait `published` en booléen, or un objet par classe est toujours vrai en JavaScript : le contenu passait pour tous dans SIX onglets. **I5** clé unique en slug avec TOLÉRANCE DE LECTURE aux deux sens, sans migration. **I2** le site ne liste plus d'objet nominatif. **I3** portail à trois champs code+nom+prénom. **I4** `DEV_MODE` SUPPRIMÉ — une seule identité prof, `basculerVue()`, les trois axes. **I6** le prof atterrit sur « choisir son niveau ». Liseré ambre à la place du bandeau (transféré depuis M8-MOBILE-2).
  audit conscience : `isPubFor` extraite du staging et **exécutée sur 8 cas, 8 OK** (dont les données réelles de Paul, le sens inverse, la forme `true`, le mixte, une classe accentuée) · **porte prof prouvée au navigateur** : code 1312 avec nom et prénom VIDES → session prof (vérification faite parce qu'un enfermement aurait été catastrophique) · `DEV_MODE`/`activateAdmin`/classe `'DEV'` à 0 occurrence de code · élève + Ctrl+Espace = rien · les trois cas d'un jour de classe refusés avec leurs messages.
  **8.4.1, demande de Paul en cours d'audit** : *« il faut un bouton "afficher" pour le code, sinon un élève ne pourra pas savoir s'il a fait une erreur ou non »* — champ `type="password"` AU CHARGEMENT (l'autocomplétion en dépend), bascule au clic, cible 71×44, le MOT plutôt que l'icône pour des collégiens.
  résolution : promu (commits 3472bdf21b, point de retour d632dba8ca).
  → mots-clés : _visiblePourSession · tolérance slug deux sens · porte prof 1312 champs vides · bouton Afficher

**2026-07-21 ~13:00 [PAUL→CONSCIENCE] BUG TROUVÉ EN PRODUCTION APRÈS UN AUDIT VERT**
  fait : *« non, les chapitres de 4e n'apparaissent pas »*. Reproduit au harnais sur la production 8.4.1 et les données réelles : `chapitresData['4e']` = 3 chapitres chargés · VUE ENVERS = les trois s'affichent · **VUE ENDROIT = écran vide**.
  **cause isolée** : `renderChapitres` filtre par `if(!isAdmin && !isPubFor(ch,_eleveClasse())) return;` et `_eleveClasse()` vaut `'PROF'` pour un professeur — aucun chapitre n'étant publié pour une classe nommée « PROF », tout est filtré.
  **ce qui allait bien, et qu'il fallait établir avant d'alarmer** : `isPubFor` exécutée sur les données réelles montre qu'un élève de 4E BANKSY comme de 4E PYTHAGORE voit bien les trois chapitres. **Les élèves n'étaient pas touchés** ; seul l'aperçu du professeur était aveugle. Ce constat a changé la priorité : le correctif pouvait attendre la fin du cadrage M10.
  **pourquoi personne ne l'a vu** : l'exécutant a corrigé `collectChapterItems` (le chemin fautif) et laissé `renderChapitres` intact parce qu'il était « conforme ». **Il l'était pour un ÉLÈVE.** Or la vue endroit d'un professeur était une NOUVEAUTÉ du morceau, et ce chemin ne la gérait pas. L'audit de la conscience ne l'a pas attrapé non plus : tolérance de clé, porte prof, bascule, cas d'élève — mais pas le rendu des chapitres en vue endroit.
  **LEÇON, générale** : *un chemin « déjà conforme » ne l'est que pour le cas qu'on avait en tête.* Quand un morceau crée un ÉTAT NOUVEAU (ici : prof en vue endroit), tout chemin existant doit être re-testé DANS cet état — même celui qu'on n'a pas touché.
  résolution : correctif 8.4.2 commandé (remplacement par `_visiblePourSession` + recherche de toutes les occurrences filtrant par `_eleveClasse()`), livré au sas, **à auditer par la conscience n°3**.
  → mots-clés : renderChapitres PROF · vue endroit non testée · chemin déjà conforme · 8.4.2

**2026-07-21 ~13:30 [PAUL→CONSCIENCE] TRANSFERT DE CONSCIENCE n°2 → n°3**
  fait : Paul ordonne la relève. La conscience n°2 aura vécu deux jours et commis **quinze erreurs consignées**, dont six de la même faute générique — écrire un fait avant de l'avoir établi — et quatorze signalées par Paul ou par un exécutant, une seule autodétectée.
  ce qu'elle laisse : le site conforme à sa doctrine (v8.4.1) · la **Concordance TERMINÉE** (31 alias validés, taxonomie v1.3.0) · la **doctrine du site** écrite (317 l.) et trois audits (existant, ergonomie, classification) · le **plan découpé en cinq documents** par extraction pure, zéro ligne perdue · le **journal** ouvert · et dix règles de dispositif dont « la conscience lit, elle ne sonde pas ».
  **constat relevé par la conscience n°3 à sa relève, et réparé ici** : le journal ne portait AUCUN cas du 21/07 après-midi — ni les promotions 8.4.0/8.4.1, ni le bug post-promotion, ni la relève elle-même. La tenue du journal se fait EN FIN DE TOUR, pas « plus tard » : plus tard n'arrive pas.
  → mots-clés : relève n°2 n°3 · quinze erreurs · journal tenu en fin de tour

**2026-07-21 ap-midi [CONSCIENCE n°3→PRODUCTION] PROMOTION — correctif 8.4.2, vue endroit du professeur**
  fait : premier acte de la conscience n°3 après sa relève. Audit du sas : diff intégral de 6 lignes (5 coutures `isPubFor(_eleveClasse())` → `_visiblePourSession(x,level)` + pastille), double parseur, complétude (2 occurrences restantes de `_eleveClasse`, toutes deux légitimes), **preuve hors navigateur sur les données réelles avec les fonctions extraites verbatim du staging : élèves 4E BANKSY et 4E PYTHAGORE 3/3, prof fantôme et deux loupes 3/3, ancien chemin 0/3 (le bug de Paul reproduit puis éteint)**, parcours au navigateur en lecture seule stricte aux deux tailles (envers 3 → endroit 3 → envers 3, captures livrées d'office, 4 écritures avortées).
  résolution : promu sur l'ordre « promeus » de Paul — commit `16ebf53dd5`, production md5 `b1deabcc72ca47efee6eec25eaab7586` (363 510 o, v8.4.2), vérifiée identique octet pour octet, point de retour inscrit AVANT au registre (retour = 8.4.1 `02d84dcb…`). Sas nettoyé des seuls fichiers 8.4.2 ; la livraison M10 y attend son audit.
  → mots-clés : promotion 8.4.2 · preuve hors navigateur · cinq coutures · conscience n°3 premier acte

