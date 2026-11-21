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
| 1 | 18/11/2026 | 19:48 « Lance une session sur les dettes que j'ai levées moi même » / 21:36 (arrêtée par erreur de lecture de C17 : « termine » voulait dire « finis ») | [session-01-2026-11-18.md](session-01-2026-11-18.md) | 10 | 4 + 2 nouvelles ; 2 réglées (9.10) | oui (0 différence, hors présence) |
| 2 | 18/11/2026 | 22:48 « Non termine ça voulait dire finis ! » / arrêtée le 19/11 à 09:04 (Paul : « 878. ok ») | [session-02-2026-11-18.md](session-02-2026-11-18.md) | 23 constats (1 retiré) + 6 dettes rejouées au clavier par l'exécutant CT | 9.11.0-㊽ (10 dettes réglées) ; ouvertes : SF2-16, SF2-19 (bloquant, contourné), SF2-20, SF2-21, SF2-22 | à jour le 19/11 à 08:43 (0 différence) |
| 3 | 19/11/2026 | 19:54 « Ok lance » / fermée le 21/11 à 20:21 (Paul : « Ok » à 296) | [session-03-2026-11-19.md](session-03-2026-11-19.md) | 10 constats (SF3-01 à SF3-10) | 9.12.0-㊾ en ligne ; ouvertes : SF3-01, SF3-02 (bloquant, contourné), SF3-03, SF3-04 (mesuré), SF3-05, SF3-06 (bloquant), SF3-07 à SF3-09, SF3-10 (bloquant) | fermeture : aucune trace de la session au hub (21/11 20:21) |
| Q1 (QCM) | 20/11/2026 | 14:03 « Va faire du fuzzing sur la vraie app. Test tout comme si on était en vraie classe. » / ouverte | [session-Q1-2026-11-20.md](session-Q1-2026-11-20.md) | 8 constats (SFQ1-01 à SFQ1-08, 03 retiré) | 1 dette rejouée (Mode test) ; 6 nouvelles | oui (0 différence, 14:36) |
