# Pourquoi l'IA se trompe en codant MJPC, et comment une erreur devient une cascade de dettes

Établi le 18/11/2026 par la conscience n°17, à la demande de Paul (07:19) : « je voulais savoir comment c'était possible que l'ia se trompe sur du coding et que ça crée une cascade de dettes que je mets ensuite un temps infini à débogger. Et je veux l'historique, afin de pouvoir créer un skill anti-erreurs de codage ».

Sources : le registre `docs/MJPC6-DETTES.md` (1 392 entrées, dont 72 passages qui disent une cause ou un retour de dette) et le chantier du 17/11 (C17).

## 1. Comment une erreur devient une cascade

1. L'IA part d'une idée fausse : elle croit savoir comment marche le code, sans l'avoir lu.
2. Elle code sur cette idée.
3. Elle écrit le test elle-même, avec la même idée. Le test passe donc.
4. Le site est mis en ligne, et Paul tombe sur le défaut en classe.
5. La correction se fait dans l'urgence, sur ce qui se voit. La cause reste, et la correction ajoute un nouveau chemin dans le code.
6. Ce nouveau chemin fait naître la dette suivante.

**La chaîne du 17/11, en entier :**
- Les envois de la page n'ont pas de limite de temps, et Chrome n'ouvre que 6 connexions par site : le tableau se fige en classe (558).
- La clôture de l'heure des 4 HUGO n'arrive qu'à moitié, d'où la boucle « Reprendre ».
- La réparation à la main est incomplète : l'état de l'heure n'est pas remis.
- Le paquet de clôture n'est pas réécrit : jeudi affiche la séance 2.
- La page restée en retard écrase l'heure (617).
- La correction de 617 rend fausse la fenêtre « Tout est enregistré ». Cette fois, le banc l'attrape avant la mise en ligne.

## 2. Pourquoi l'IA fait ces erreurs

- **Elle ne voit jamais tout le code.** `index.html` fait environ 32 000 lignes, plus 9 300 lignes de modules du déroulé. Elle en lit des morceaux trouvés par recherche de mots et raisonne sur ce morceau. Elle ne voit pas les autres endroits qui touchent la même donnée.
- **Chaque conscience et chaque exécutant repart sans mémoire du code.** Les règles écrites dans les documents ne servent que si on les relit au moment d'agir.
- **Elle dit « réglé » quand le défaut disparaît de son propre test.** Ses tests confirment son idée au lieu de chercher à la faire tomber.
- **Le site est une seule page en JavaScript.** Les objets en mémoire sont partagés, le réseau est lent ou coupé, et rien ne signale une erreur. Les fautes ne font pas planter la page : elles mélangent les données en silence.
- **Quand il faut aller vite, elle saute les mesures.** C'est sa faute, pas celle de la demande.

## 3. Les huit familles d'erreurs, avec leur historique

### F1. Conclure sans lire
L'IA cherche un nom de fonction. Si elle ne le trouve pas, elle en conclut que la chose n'existe pas.
- **02/09 (n°11 · 51)** : 7 des 11 corrections d'un mandat venaient d'une recherche au lieu d'une lecture. Exemple : `filtreMois` était déclaré « inexistant », alors qu'il existait sous le nom `edtFiltrerOu`. Une liste « s'arrêtait à 120 », sans voir qu'il y avait deux listes.
- **07/09 (n°11)** : six conclusions tirées trop vite, dont une dans la passation : trois choses différentes portaient des noms voisins.
- **17/11 (C17)** : les exécutants ont signalé plusieurs erreurs dans mes mandats. J'avais placé la file d'écriture dans `index.html` au lieu de `dr-socle.js`. J'avais cru que les envois en direct et la présence passaient par cette file. J'avais compté 52 feuilles au lieu de 34.

**Le geste :** une recherche sert à trouver où lire, jamais à conclure. Lire le corps de chaque fonction qui touche la donnée, et regarder qui l'appelle.

### F2. Corriger ce qui se voit, pas la cause
- **17/11 (CR)** : les « ↩ », les dates et « jouée » sont retirés de l'Atelier. Le 18/11, les réponses des HUGO y apparaissent encore : la cause était restée.
- **04/11** : les diapos de la colonne de la Relecture sont illisibles. La dette est notée réglée en 8.x, puis revient le 17/11 quand on tire la barre.
- **02/09 (cause B du n°11 · 51)** : un passage est corrigé, mais la correction n'est pas reportée dans les autres passages qui en dépendaient.

**Le geste :** écrire la cause en une phrase avant de coder. Chercher tous les autres endroits où elle agit. Le test doit reproduire la cause, pas seulement le défaut visible.

### F3. Une même chose rangée à deux endroits
- **La trame et la copie de classe mélangées** : 613, 633, 634 et 556 (17/11), puis la fuite dans l'Atelier (18/11). La page garde une seule diapo en mémoire pour deux usages.
- **16/11** : trois listes différentes calculaient les « ↩ » (Atelier, pilote, cases). D'où la règle : une seule liste.
- **556** : le travail à faire était écrit à deux endroits.
- **02/11 (rédaction)** : l'empreinte que l'app gardait de son écriture ne correspondait jamais à ce que le site renvoyait (24 copies sur 24).
- **8.78** : une diapo neuve portait des listes vides, que le hub ne garde pas. La diapo relue différait donc de la diapo écrite, d'où « modifiée sur un autre appareil ».
- **17/11** : la miniature et la grande vue de la Relecture ne dessinent pas la diapo de la même façon. C'est une supposition, à mesurer.

**Le geste :** une donnée a un seul propriétaire et une seule fonction qui la dessine. Quand on en tire une autre donnée, on la copie au lieu de la partager. On compare ce qu'on écrit à ce que le hub rend réellement.

### F4. Croire le réseau parfait et l'ordre d'arrivée garanti
- **558 (17/11)** : envoi sans limite de temps, avec 6 connexions maximum par site.
- **17/11** : la clôture de l'heure arrive à moitié, et une page en retard écrase l'heure (617).
- **La liste des envois ratés** ne vivait qu'en mémoire, et rien ne la renvoyait au retour du réseau.
- **`sesPut`** écrivait directement au hub sans regarder si on était en mode test.
- **13/11** : le récit se disait « chargé » avant que l'heure existe.
- **18/11** : le bandeau « Reprendre » s'affiche avant la réponse du hub.

**Le geste :** toute écriture a une limite de temps, une relecture et un ordre. On n'affiche jamais un état provisoire comme s'il était vrai. On teste avec un réseau lent, un réseau coupé, deux onglets et un rechargement.

### F5. Des tests qui ne ressemblent pas à la classe
- **17/11 (CO point 3)** : le test est fait avec peu de réponses. Avec 15 réponses, on obtient 17 pages (Paul : « refais le test avec beaucoup de réponses »).
- **16/11** : la sonde a suivi une capture construite qui était fausse.
- **21/09** : des bancs désignaient les diapos par leur rang. Ils ont été réécrits pour les désigner par leur titre et passer par le geste.
- **18/11** : aucun banc ne joue « une heure, puis la Relecture, puis l'Atelier, dans la même page, sans recharger ». C'est pourtant le parcours de Paul.
- **Le contre-exemple, le 17/11** : le banc bv a attrapé la fenêtre « Tout est enregistré » fausse avant la mise en ligne.

**Le geste :** le test rejoue le parcours réel de Paul : la même page ouverte des heures, les vraies quantités, un réseau réel. Il cherche à faire échouer, pas à confirmer.

### F6. Une fonction codée à moitié de la chaîne
- **Le fil langue (17/11)** : l'emploi du temps et l'injection connaissent la marque « langue », mais la consigne donnée à l'instance n'en dit rien. Aucun chapitre de langue n'a donc jamais existé.
- **n°11 · 74** : « pas une panne, un manque ». `debutAnnee` ne bornait pas les séances prévues.
- **n°12 · 154** : une règle validée par Paul (les binômes ne bougent plus une fois formés) n'avait jamais été codée.

**Le geste :** suivre la donnée de bout en bout : qui la crée, qui l'écrit, qui la lit, qui l'affiche. L'essayer une fois avec une vraie donnée.

### F7. Réparer les données à la main
- **17/11, la 4 HUGO** : réparée à 16:15 sans remettre l'état. La relecture affichait donc « heure en cours » et le récit était tronqué. Ensuite, le paquet de clôture n'a pas été réécrit, et jeudi affichait la séance 2. Il a fallu corriger encore à 17:12 et à 18:24.

**Le geste :** avant de réparer, lister tout ce que le code lit de cette donnée. Sauvegarder, réparer, relire au hub, puis rouvrir chaque écran qui lit cette donnée.

### F8. Empiler du nouveau code sur l'ancien
- **QCM, 16/11** : une règle de la 8.0.10 dans `placer()` renvoyait les élèves sur leur ancienne tablette.
- **QCM, 8.0.6** : `c3-objets.js` fermait toutes les fenêtres à chaque phase, y compris la nouvelle vue.
- **Paul, 01/11** : « nettoyage du code mort exigé, sinon c'est la porte ouverte à l'empilement de code et aux bugs futurs ».

**Le geste :** avant d'ajouter du code, chercher les règles anciennes qui agissent sur la même chose. Retirer le code mort.

## 4. Ce qu'on en tire

- F3, F4 et une partie de F2 ont la même racine : **deux vérités pour une même chose**. C'est le cas de la trame et de la copie, de la mémoire et du hub, de la page et du hub, de la miniature et de la grande vue.
- Le point 6 de C18 (une identité pour la trame et pour chaque copie, et une règle de code qui dit si une fonction touche la trame ou une copie) s'attaque à F3 à la racine.
- Le skill anti-erreurs reprend les huit gestes et les rend obligatoires avant chaque mandat, chaque correction et chaque réparation.
