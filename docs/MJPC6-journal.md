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
