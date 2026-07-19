# EN CLASSE, ÇA NE MARCHE PLUS — LA MARCHE À SUIVRE
*Créé le 18/07/2026 à la demande de Paul : « canaliser la panique ». Tu connais tout ça par cœur quand tu codes. En cours, devant 30 élèves, la mémoire lâche. Ce document se lit en 10 secondes.*

---

# ⓪ LES TROIS PREMIERS GESTES, TOUJOURS, QUELLE QUE SOIT L'APP

**1. ARRÊTE-TOI. Ne clique plus.** Le plus grand risque n'est pas le bug : c'est le geste de panique qui écrase les données (relancer une simulation, réimporter, régénérer, purger). **Un bug qui bloque n'efface rien. Un mauvais clic, si.**

**2. Écris `BUG` à Claude.** L'app revient à sa version d'avant en quelques secondes. Tu n'as rien à expliquer.

**3. Sauve la séance, pas l'app.** Ton heure de cours ne dépend d'aucune application : le plan B est TOUJOURS le cahier. Dis simplement à la classe : « on continue au cahier, je récupère vos travaux ». **Tu n'as jamais perdu une heure de cours à cause d'une app : tu as perdu des minutes à essayer de la réparer devant eux.**

> Le diagnostic, la réparation et la récupération des données se font APRÈS le cours, avec Claude, sans témoins.

---

> ⚠️ **Les « pièges » signalés ci-dessous sont TEMPORAIRES.** Ils sont inscrits au plan comme tâches de neutralisation (principe 19 : « aucun piège assumé » — registre P1-P5). Chacun doit disparaître de ce document au fil des passes : la protection appartient au code, pas à cette notice. Si un piège est encore listé ici dans six mois, c'est un échec du chantier.

# ① SI DES DONNÉES SONT EN JEU — le geste conservatoire par app

**Règle unique** : *avant toute tentative de réparation, EXPORTER.* Un export coûte 5 secondes, une donnée perdue coûte une séance de travail d'élèves.

### `correction_dictee` — correction de dictée
1. **📸 Snapshot** (barre du haut) → l'état complet est figé côté Firebase.
2. Si l'app répond encore : Données → export des copies.
3. Restauration : **📤 Restaurer** reprend le dernier snapshot.
*Ce qui est en jeu : les corrections de la séance, les autocorrections des élèves, les exercices.*

### `dictee_universelle` — dictée autonome
1. Panneau prof → **export du snapshot** (JSON).
2. Ne JAMAIS relancer une simulation après une séance réelle : **elle efface tout** (bug connu, registre §9bis).
3. Les carnets d'erreurs vivent sur `students/` — ils survivent à la dictée.
*Ce qui est en jeu : les copies transcrites, les contestations, les notes.*

### `evaluation-qcm` — évaluation en direct
1. Onglet **Snapshot** → export.
2. Si le chrono ou l'affichage déraille : les réponses déjà données sont écrites côté Firebase, elles ne sont pas perdues.
3. Ne pas modifier l'évaluation après la session : **les scores se recalculent rétroactivement** (bug connu, registre §3).
*Ce qui est en jeu : les réponses de la session en cours.*

### `pilotage_debat_s3` — débat
1. Données → **Archives & exports** → export complet (ré-importable).
2. « Clôturer la séance » n'efface RIEN (verrouille + déconnecte). C'est le geste sûr en cas de doute.
3. Ne PAS utiliser « Nouvelle séance » ni « Dissoudre les groupes » sous stress : la première archive puis vide, la seconde efface la composition.
*Ce qui est en jeu : composition des groupes, parcours, jetons, manches, grilles d'écoute.*

### `worktrack` — plan de travail
1. Les progressions s'écrivent en continu côté Firebase (rien n'est local).
2. Le journal et les archives conservent la séance.
*Ce qui est en jeu : peu — c'est l'app la plus résiliente.*

### `applause_meter` — applaudimètre
1. **Récap PDF** (outils de pilotage) AVANT toute déconnexion globale.
2. « Déconnexion globale » nettoie la file et les compteurs : à ne faire qu'après l'export.
3. ⚠️ **Si un bandeau rouge « 🐞 ERREUR JS » apparaît en plein écran** : c'est un mouchard de débogage laissé en place, pas un crash de l'app. Recharge la page, la séance reprend (bug connu, registre §9quinquies).
*Ce qui est en jeu : la courbe et les votes du passage en cours.*

### `reecriture` / `reecriture_bb4e`
1. Instantané (snapshot) si l'écran le propose.
2. Les corrections sont écrites au fil de l'eau.

### `index.html` — le site
1. **Ne jamais supprimer une classe ou un élève sous stress** : c'est la seule porte de destruction réelle de l'écosystème.
2. Tout ce qui est détruit passe par la **corbeille** (`corbeille/<date>/`) : rien n'est perdu sans archive, Claude peut restaurer.

---

# ② APRÈS LE COURS — ce que tu dis à Claude
Une ligne suffit : **« <app> a bugué à <moment>, voici ce que j'ai vu : <trois mots>. J'ai exporté / je n'ai pas exporté. »**
Claude fait le reste : diagnostic sur le code, vérification des données au hub, restauration si nécessaire, correctif au sas.

---

# ③ CE QUI NE PEUT PAS ARRIVER (pour dormir tranquille)
- **Perdre définitivement les données d'une séance** : elles sont sur Firebase, pas sur l'appareil. Un écran vide ne veut pas dire des données effacées — le plus souvent, c'est un chargement qui n'a pas abouti.
- **Perdre une app** : chaque version vit dans l'historique Git, restaurable en quelques secondes.
- **Casser le hub par un clic d'élève** : les élèves n'ont accès à aucune fonction destructrice.
- **Être bloqué dehors** : le mot de passe prof vit dans Firebase (nœud préservé par les contrats de purge).

## ÉCRAN BLANC APRÈS UNE MISE À JOUR — le réflexe (constaté le 19/07)
**Symptôme** : le site ou une app s'ouvre sur une page blanche, juste après une promotion. Le `?v=N` ne suffit pas toujours.
**Cause** : les onglets DÉJÀ OUVERTS gardent l'ancienne version en mémoire vive ; tant qu'il en reste un, le navigateur peut resservir l'ancien état.
**Le geste qui marche, dans cet ordre** : ① **fermer TOUS les onglets** du site (pas seulement recharger) ② rouvrir avec l'adresse complète et un `v=` neuf ③ si ça résiste : navigation privée (aucun cache) ④ si ça résiste encore : ce n'est plus le cache — dire `BUG`, la conscience restaure.
**Vérifié le 19/07** : après promotion M8bis, écran blanc chez Paul ; fichier sain (chargement propre, zéro erreur JS), déploiement Pages `built` et à jour, aucun service worker. **La fermeture de tous les onglets a résolu.**
**Adresses de référence** : `https://siteflow-io.github.io/monsieurjaipascompris/index.html?n=3e&v=N` (le `?n=` est obligatoire) · `correction_dictee.html?v=N` · `evaluation-qcm.html?v=N` · `pilotage_debat_s3.html?v=N`.
