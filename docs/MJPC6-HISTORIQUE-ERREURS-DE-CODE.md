# Pourquoi l'IA se trompe en codant MJPC : le relevé vérifié dans le code

Demande de Paul, le 18/11/2026 : « je voulais savoir comment c'était possible que l'ia se trompe sur du coding et que ça crée une cascade de dettes […] Et je veux l'historique, afin de pouvoir créer un skill anti-erreurs de codage ». Il a ajouté une condition : « ce relevé […] doit être vérifié dans le code aussi pour être sûr que le debug fait correspondait bien à un bug réel causé par une mauvaise pratique de l'IA ».

**Périmètre actuel : octobre et novembre 2026.** Cela représente les 175 versions du code mises en ligne entre le 01/10 et le 17/11 : le site, la correction de dictée, la rédaction, le QCM et les autres applis. Paul décidera ensuite s'il faut étendre le relevé à mars-septembre (environ 540 versions de plus).

Méthode, d'après le mandat `MANDATS/HISTORIQUE-ERREURS/MANDAT-RELEVE-OCT-NOV.md` du sas : cinq exécutants ont lu chaque version. Pour chaque correction, ils ont :
- cherché le défaut dans le code d'avant et sa correction dans le code d'après ;
- retrouvé la version qui avait écrit les lignes fautives ;
- nommé la pratique de l'IA en cause.

Sans preuve dans le code, la correction est notée « non vérifié » et ne compte pas. Les relevés ligne par ligne sont au sas, dans `MANDATS/HISTORIQUE-ERREURS/out/`. Le relevé d'octobre-novembre a coûté environ 1,56 million de jetons.

## 1. Les chiffres

- **175 versions** : 318 défauts corrigés, 62 nouveautés et 14 changements de règle décidés par Paul. Un changement de règle n'est pas un défaut.
- **267 défauts réels, prouvés dans le code.** 50 sont « non vérifiés » : ils se trouvent surtout dans les grosses versions de novembre (8.79, 8.90, 9.4, 9.8, 9.9) et dans la maquette du déroulé. 1 défaut s'est révélé faux.
- **266 de ces 267 défauts viennent d'une pratique de l'IA.** Un seul ne vient pas de l'IA.
- **Paul en a trouvé 173 sur 267, soit 65 %** : 132 en préparant ses cours, 27 en classe, 14 autrement. L'audit de la conscience en a trouvé 47, les bancs 19, les exécutants 19, et 9 restent sans source connue. **C'est Paul qui sert de banc.**
- **Une grosse version écrite d'un coup en produit un tiers.** Le déroulé intégré (8.75.0, 23/10) a introduit 48 défauts. La réécriture du QCM (8.0.0, écrite en une après-midi le 12/10) en a introduit 34, dont 14 par une seule version du sas. La correction de dictée 6.5.0 (29/09) en a introduit 10. Ces trois versions totalisent 92 défauts sur 267.
- **Les cascades les plus longues :**
  - l'enchaînement de deux séances dans une heure : 7 versions ;
  - les binômes de la correction de dictée : 6 versions, avec un retour en arrière en pleine séance des Turing ;
  - les envois bloqués qui ont figé le tableau le 17/11 : 6 versions ;
  - la photo et sa feuille dans la rédaction : 5 versions, dont deux micros qui corrigeaient une supposition sans lire le cas réel ;
  - la copie de la classe contre la trame : 5 versions.

## 2. Comment une erreur devient une cascade

1. L'IA part d'une idée fausse, ou écrit beaucoup de code d'un coup.
2. Elle teste avec ses propres idées, sur peu de données, en rechargeant la page entre deux gestes : le test passe.
3. C'est Paul qui tombe sur le défaut, en préparation ou en classe.
4. La correction se fait vite, sur ce qui se voit, parfois en plusieurs suppositions de suite. Douze défauts de novembre ont été corrigés moins de 24 h après avoir été écrits.
5. La correction ouvre un nouveau chemin dans le code, sans reprendre les protections de l'ancien. C'est ce chemin qui fait naître la dette suivante.

## 3. Les familles d'erreurs, comptées (sur 267 défauts réels)

| Famille | Défauts | Exemples vérifiés |
|---|---|---|
| **F6. Une fonction codée à moitié de la chaîne** : une règle de Paul jamais codée, un point d'entrée oublié | 61 | le fil langue sans consigne pour l'instance ; les binômes figés, une règle validée mais pas codée |
| **F3. Une même chose rangée à deux endroits** : deux listes, deux rendus, un objet partagé en mémoire, une empreinte qui ne correspond pas au hub | 47 | la trame et la copie de classe ; trois listes pour les « ↩ » ; le travail à faire écrit deux fois |
| **F8. Du nouveau code posé sur l'ancien** : une vieille règle qui agit sur la nouveauté, du code mort | 31 | QCM : `placer()` de la 8.0.10 ; toutes les fenêtres fermées à chaque phase |
| **F5. Des tests qui ne ressemblent pas à la classe** | 27 | l'image et ses réponses testées avec peu de réponses ; aucun test « heure, puis Relecture, puis Atelier, sans recharger » |
| **F4. Le réseau ou l'ordre cru parfait** | 23 | 558 ; une page en retard qui écrase l'heure (617) ; « Tout est enregistré » affiché avant le hub, revenu trois fois |
| **F1. Conclure sans lire** | 19 | une fonction déclarée « inexistante » qui existait sous un autre nom |
| **F2. Corriger ce qui se voit, pas la cause** | 11 | les marques de classe retirées de l'Atelier, mais pas les réponses |
| **F7. Une réparation des données à la main incomplète** | 0 dans le relevé (le cas de la 4 HUGO du 17/11 a été réparé au hub, pas dans le code) | |
| **Nouvelles familles** (47 défauts au total, détaillées ci-dessous) | 47 | |

**Les nouvelles familles trouvées par le relevé :**
- **F9. Réécrire ou écrire une première version d'un coup, sans inventaire** de ce que faisait l'ancien code, puis la mettre en ligne sous une heure limite. La 8.0.0 du QCM a perdu la carte de l'app, le profil de l'élève et la correction du nom des classes.
- **F10. Inventer** des mots, des suffixes, un ordre ou des choix visuels que Paul n'a pas donnés : « appoint », « (proposition) », « Notre question », une œuvre recadrée, un ordre de blocs sans geste de classe.
- **F11. Oublier les cas limites réels** : 0 erreur, le même mot deux fois, une majuscule seule, un titre long, des homonymes, une date comparée à minuit au lieu de l'heure du créneau.
- **F12. Recalculer ce qui devrait rester figé** : l'élève choisi et les binômes recalculés à chaque dessin ; tout l'écran redessiné à chaque touche ou par une minuterie.
- **F13. Laisser une erreur silencieuse** : un `catch(e){}` vide qui a caché un défaut pendant deux mois ; un bouchon `return []` resté 17 jours en ligne ; du code écrit après un `//` qui ne s'exécutait jamais.
- **F14. Ne pas écrire dans la forme du hub** : des clés avec `. # $ [ ] /` ; des clés numériques qui reviennent sous forme de tableau ; des listes vides et des null que le hub efface ; un nœud entier réécrit au lieu d'ajouter une entrée.
- **F15. Prendre une ouverture automatique pour un geste de Paul** : elle compte du temps ou écrit des données sans qu'il ait rien fait.
- **F16. Fabriquer sans contrôle** : une proposition, une syllabe ou une phrase montrée à l'élève, ou un texte rendu par l'IA, affichés sans être vérifiés contre l'erreur réelle.
- **F17. Aller trop vite** : 43 versions de la rédaction en 14 jours, dont 30 correctives, avec la règle « pas de mise en ligne sur une dette » levée ; un micro mis en ligne juste avant une séance (la classe des Turing bloquée) ; un fichier périmé mis en ligne au lieu du fichier assemblé.
- **F18. Des consignes de la conscience fausses** : un mandat qui donne une mauvaise origine au défaut (le complément 8.0.16), ou qui perd une demande de Paul en route.

## 4. Ce qu'on en tire

1. **Paul ne doit plus servir de banc.** 65 % des défauts sont trouvés par lui. Chaque correction doit d'abord passer par un test qui rejoue son parcours réel.
2. **Plus de grosse version écrite d'un coup.** Un tiers des défauts vient de trois versions. On avance par petits morceaux, chacun avec l'inventaire de ce qu'il remplace.
3. **Une donnée a un seul propriétaire et une seule forme**, celle du hub. Cette règle s'attaque à F3, F4 et F14, et donc au point 6 de C18 (la trame et les copies, chacune avec son identité).
4. **Pas de supposition corrigée par une autre supposition.** Quand un défaut revient, on mesure le cas réel de Paul avant de toucher au code.
5. Le skill `mjpc-anti-erreurs-code` reprend ces gestes.

## 5. Le relevé précédent (fait à partir du registre, 18/11 07:30)

La première version de ce document reposait sur le seul registre des dettes, sur parole. Elle est remplacée par ce relevé vérifié dans le code. Ses huit familles sont conservées : ce sont F1 à F8.
