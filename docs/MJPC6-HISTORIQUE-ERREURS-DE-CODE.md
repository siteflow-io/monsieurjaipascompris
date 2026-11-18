# Pourquoi l'IA se trompe en codant MJPC : le relevé vérifié dans le code

Demande de Paul, le 18/11/2026 : « je voulais savoir comment c'était possible que l'ia se trompe sur du coding et que ça crée une cascade de dettes […] Et je veux l'historique, afin de pouvoir créer un skill anti-erreurs de codage ». Il a ajouté une condition : « ce relevé […] doit être vérifié dans le code aussi pour être sûr que le debug fait correspondait bien à un bug réel causé par une mauvaise pratique de l'IA ».

**Périmètre : tout l'historique, du 19/03/2026 au 17/11/2026.** Cela représente les 709 versions du code mises en ligne : le site, la correction de dictée, la rédaction, le QCM, le worktrack, le débat, l'applaudimètre et les petites applis.

Méthode, d'après les deux mandats du sas (`MANDATS/HISTORIQUE-ERREURS/`) : 19 lots, un exécutant par lot. Pour chaque correction, l'exécutant a :
- cherché le défaut dans le code d'avant et sa correction dans le code d'après ;
- retrouvé la version qui avait écrit les lignes fautives ;
- nommé la pratique de l'IA en cause.

Sans preuve dans le code, la correction est notée « non vérifié » et ne compte pas. Avant juillet, les versions s'appellent seulement « Update X.html » : un défaut n'y est compté que s'il se lit dans le code d'avant. Les relevés ligne par ligne sont au sas, dans `MANDATS/HISTORIQUE-ERREURS/out/`. Le relevé complet a coûté environ 5 millions de jetons.

## 1. Les chiffres

- **709 versions** : 683 défauts corrigés, 365 nouveautés, 32 changements de règle décidés par Paul et 69 « autre » (dépôts de documents, rangements). Un changement de règle n'est pas un défaut.
- **645 défauts réels, prouvés dans le code** : 309 en octobre-novembre et 336 de mars à septembre. 31 restent « non vérifiés » et 7 se sont révélés faux.
- **640 de ces 645 défauts viennent d'une pratique de l'IA.** Les 5 autres sont des fichiers déposés ou modifiés à la main dans GitHub.
- **Qui les a trouvés.** La source est connue pour 476 défauts. Paul en a trouvé 284, soit 60 %, dont 44 en classe. L'audit de la conscience en a trouvé 114, les exécutants 48, les bancs 30. En octobre-novembre, où presque tout est documenté, Paul en a trouvé 196 sur 309. **C'est Paul qui sert de banc.**
- **Les grosses versions écrites d'un coup.** En octobre-novembre, trois versions donnent un tiers des défauts : le déroulé intégré (8.75.0, 23/10), la réécriture du QCM (8.0.0, 12/10) et la dictée 6.5.0 (29/09). On retrouve la même chose avant : dans le QCM de mai à août, trois versions donnent 20 défauts sur 26 ; dans le débat, trois versions de plus de 900 lignes en donnent 10 sur 17.
- **Les mises en ligne qui cassent tout.** De mars à septembre, plusieurs versions ont mis en ligne une page qui ne marchait plus du tout : une accolade en trop, une variable ou une fonction qui n'existait pas (6 fois dans la correction de dictée, de 9 minutes à 13 heures de panne), un fichier coupé (3 016 lignes en moins pendant deux heures le 06/06), le fichier d'une autre appli déposé à la mauvaise adresse.
- **Les cascades les plus longues :**
  - la progression de l'élève quand Paul retouche une copie : 8 versions en deux jours (mai) ;
  - l'enchaînement de deux séances dans une heure : 7 versions ;
  - la lecture des classes dans les petites applis : 7 versions ;
  - les binômes de la correction de dictée : 6 versions, avec un retour en arrière en pleine séance des Turing ;
  - les envois bloqués qui ont figé le tableau le 17/11 : 6 versions ;
  - le zoom qui coupait les écrans : 5 versions en 17 heures, chaque correctif créant le défaut suivant.

## 2. Comment une erreur devient une cascade

1. L'IA part d'une idée fausse, ou écrit beaucoup de code d'un coup.
2. Elle teste avec ses propres idées, sur peu de données, en rechargeant la page entre deux gestes : le test passe.
3. C'est Paul qui tombe sur le défaut, en préparation ou en classe.
4. La correction se fait vite, sur ce qui se voit, parfois en plusieurs suppositions de suite. Douze défauts de novembre ont été corrigés moins de 24 h après avoir été écrits.
5. La correction ouvre un nouveau chemin dans le code, sans reprendre les protections de l'ancien. C'est ce chemin qui fait naître la dette suivante.

## 3. Les familles d'erreurs, comptées (sur 645 défauts réels)

| Famille | Défauts |
|---|---|
| **F6. Une fonction codée à moitié de la chaîne** : une règle de Paul jamais codée, un point d'entrée oublié | 124 |
| **F3. Une même chose rangée à deux endroits** : deux listes, deux rendus, un objet partagé en mémoire | 112 |
| **F1. Conclure sans lire** | 49 |
| **F8. Du nouveau code posé sur l'ancien** | 48 |
| **F4. Le réseau ou l'ordre cru parfait** | 46 |
| **F11. Les cas limites réels oubliés** | 46 |
| **F2. Corriger ce qui se voit, pas la cause** | 44 |
| **F5. Des tests qui ne ressemblent pas à la classe** | 42 |
| **F12. Recalculer ce qui devrait rester figé** | 12 |
| **F13. Une erreur laissée silencieuse** | 12 |
| **F14. Ne pas écrire dans la forme du hub** | 11 |
| **F17. Aller trop vite** | 8 |
| **F16. Fabriquer sans contrôle** | 7 |
| **F9. Réécrire d'un coup sans inventaire** (comme pratique nommée ; son poids réel est dans « les grosses versions », au point 1) | 6 |
| **F10. Inventer ce que Paul n'a pas donné** | 5 |
| **F18. Une consigne fausse de la conscience** | 4 |
| **F7. Une réparation à la main incomplète** | 2 |
| **F15. Une ouverture prise pour un geste** | 1 |
| Autres, hors familles (mauvais fichier déposé, rang pris pour une identité, sortie anticipée…) | 61 |
| Pas l'IA | 5 |

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

## 5. Les défauts encore en ligne trouvés en route (à vérifier, pour C18)

- Débat : le bouton de test « jeu de documents » colle un texte que la vérification refuse toujours (depuis le 19/07).
- Dictée universelle : « Accès professeur » ouvre la configuration sans code (revenu le 08/05).
- Réécriture du brevet blanc 4e : le suivi du professeur plante dans un cas rare (`verifyingRef`).
- Réécriture : l'outil de sauvegarde n'a plus de bouton.
- L'appli Plickers a été écrasée le 06/05 puis supprimée le 13/07 ; la vraie version est dans l'historique (`a6348e0`).

## 6. Le relevé précédent (fait à partir du registre, 18/11 07:30)

La première version de ce document reposait sur le seul registre des dettes, sur parole. Elle est remplacée par ce relevé vérifié dans le code. Ses huit familles sont conservées : ce sont F1 à F8.
