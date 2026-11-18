# Sessions fuzzing de MJPC — règles et suivi

Décidé par Paul le 18/11/2026 (19:31 et 19:45) : « je veux que tu joues toutes les dettes déjà levées par moi, et surtout que tu ailles jouer sur le site toutes les configs possibles (du fuzzing en live) et tu tiens un registre horadaté de tout ce que tu fais pendant ces sessions de fuzzing live, et tu notes quand ça écrit au hub et après tu effaces tes traces au hub et tu remets l'état initial, ce qui suppose une sauvegarde avant de faire cette session. » — « Ces sessions c'est moi qui les lance et qui les arrêtes. on les appelle sessions fuzzing et elles doivent avoir leur propre suivi sur github et être liées aux dettes qu'elles permettent de résoudre. »

## Les règles
1. **Paul lance, Paul arrête.** Une session fuzzing commence sur son mot et s'arrête sur son mot. Claude n'en ouvre jamais seul.
2. **Où.** Le vrai site en ligne, dans le Chrome de Paul (Claude in Chrome), Paul connecté. Claude ne tape jamais ses identifiants.
3. **Avant.** Une photo du hub (`outils/hub.sh photo <nom>`, par lecture seule), gardée hors de tout dépôt.
4. **Pendant.** Chaque geste est noté dans le fichier de la session, avec son heure. La console de la page est écoutée : erreurs, messages affichés, messages recouverts.
5. **Les écritures au hub.** Après chaque scénario qui peut écrire : nouvelle photo, comparaison (`outils/diff.py`), et chaque chemin changé est noté dans le fichier de la session.
6. **À l'arrêt.** Chaque chemin changé par les gestes de la session est remis à sa valeur de la photo de départ, chemin par chemin (jamais le hub entier : un élève peut écrire ailleurs au même moment). Puis photo finale : 0 différence sur ces chemins. Ce qui a changé sans venir de la session n'est pas touché et est signalé à Paul.
7. **Interdits.** Tout ce qui sort du hub (École Directe, courriels, Drive, Apps Script) ; toute suppression de chapitre, de fiche ou de classe ; « Ranger », « Remplir » ; la sécurité et les mots de passe ; un vrai compte d'élève.
8. **Aucun nom d'élève** dans ces fichiers (initiales).

## Le lien avec les dettes
- Chaque constat d'une session porte un numéro : `SF<n° de session>-<n° du constat>` (exemple : `SF1-03`).
- Un constat qui rejoue une dette déjà levée cite son titre au registre `docs/MJPC6-DETTES.md` et dit : reproduite / pas reproduite / cause lue.
- Un constat nouveau est inscrit au registre des dettes avec son numéro `SF…` dans le titre.
- Quand une dette est réglée, le fichier de la session le note en face du constat (version, date).

## Les sessions
| N° | Date | Lancée / arrêtée par Paul | Fichier | Constats | Dettes liées | Hub remis |
|---|---|---|---|---|---|---|
| 0 (avant les règles) | 18/11/2026 | 19:11 « oui fais » / — | [session-00-2026-11-18.md](session-00-2026-11-18.md) | 6 | 5 | oui (0 différence) |
| 1 | 18/11/2026 | 19:48 « Lance une session sur les dettes que j'ai levées moi même » / ouverte | [session-01-2026-11-18.md](session-01-2026-11-18.md) | 8 | 4 + 2 nouvelles | à faire à l'arrêt |
