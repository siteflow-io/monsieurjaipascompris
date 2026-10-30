# OÙ TROUVER QUOI — table d'entrée de l'index des fonctions


## L'EMPLOI DU TEMPS — en ligne depuis le 03/09/2026 (8.73.0)

**Où c'est dans le fichier** : entre les bornes `EDT — début` et `EDT — fin` de `index.html`. **229 fonctions `edt*`**. On y entre par **trois portes seulement** : `edtArriveeProf`, `edtSectionPanneau`, `edtOuvrir`.

**Où c'est au hub** : tout sous **`/site/edt/`** — `calendrier`, `grille`, `creneaux`, `periodes`, `photos`, `reglages`, `decisions`. Deux exceptions nommées, et deux seulement : les **dates de l'année** vivent avec les dates du brevet sous `/site/config/brevetDates`, et les **absents** sous le chemin de la trace de l'heure.

**Ce qu'on cherche le plus souvent :**

| je cherche… | c'est là |
|---|---|
| ce que l'année m'a coûté | `edtTotauxPerdues`, `edtHeurePerdue` — écran « Heures perdues… » |
| pourquoi une heure est comptée perdue | `EDT_MOTIFS` (4 motifs), `edtMotifDe`, `edtMotifEnClair` |
| banaliser une heure | `edtSansSeance`, `edtBlocBanaliser`, `EDT_CATEGORIES` (10 catégories) |
| déplacer, échanger, prendre un créneau | `edtDeplacerVers`, `edtTroisIssues`, `edtEchangerHeures`, `edtEcraserHeure` |
| une heure à replacer | `edtHeuresAReplacer`, `edtReplacerHeure`, `edtPerteSeche` |
| la liste des destinations et ses filtres | `edtCreneauxOu`, `edtDestinationsPour`, `edtQuoiChercher` |
| la vue Année | `edtPeindreAnnee`, `edtAnnee*` — **aucune écriture, elle affiche seulement** |
| les dates de l'année | `edtPoserDateAnnee`, `edtValiderDatesAnnee`, `edtSaisirDateAnnee` |
| la photo du prévu | `edtPhoto`, `edtPhotoAuto`, `edtEcheancesPhoto` |
| l'identité d'un objet | `EDT_FAMILLES` (9 préfixes), `edtPoserIdsObjet`, `edtApparier`, `edtIdMenteur` |
| **toute écriture** | **`edtEcrireArchive`** — la porte unique : elle archive l'état d'avant et **abandonne si l'archivage échoue** |
| la photo d'avant une écriture | `edtPhotoDe` — **prise AVANT toute mutation** |
| la classe d'essai | `edtEnEssai`, `creneauxFictifs` dans le JSON de la grille — **visible au seul mode test, en violet** |

**Les outils, au sas** (`siteflow-io/mjpc-chantier`) : la garde `PONT/EDT/outils/verif_edt.py` — **cinq questions**, dont « l'écriture centrale n'écrit que là où le site l'envoie » et « les consignes du site et les fichiers `prompts/` disent la même chose ». Les bancs : `PONT/EDT/tests/`, **tous rejoués par `banc-tout.mjs`** (32 bancs, 93 repères).

**Ce qu'il faut savoir avant d'y toucher** — les deux trous du lot 2ter : **la banalisation par-dessus une coche** et **les dates de l'année** existaient dans le code, prouvées par des bancs qui **appelaient la fonction**, et **n'étaient atteignables par aucun clic**. **Une fonction sans chemin n'existe pas pour Paul.**

> **Lis ceci AVANT `INDEX-FONCTIONS.md`.** L'index répond aux noms techniques ; cette table répond aux mots
> qu'emploie Paul. Elle existe parce que la conscience n°9 a proposé **trois fois** de créer ce qui existait déjà.
>
> **Règle d'usage** : avant d'écrire une fonction ou de proposer une fonctionnalité, cherche ici. Si tu trouves,
> va lire le code. Si tu ne trouves pas, cherche dans `INDEX-FONCTIONS.md`, puis un synonyme — et seulement
> alors conclus que ça n'existe pas.
>
> Chaque ligne a été **mesurée sur la production** par la conscience n°9 les 24-25/08/2026.
>
> **Un avertissement de méthode, payé cher.** La n°9 a écrit ici que le type `oral` « n'existait pas », sur la foi
> d'une phrase de Paul commençant par « je pense que… ». Vérification faite : **il existe**, c'est un type de
> séance né du chantier 3e. *Une hypothèse de Paul reste une hypothèse tant qu'elle n'est pas mesurée* — et une
> hypothèse écrite dans un index se propage de conscience en conscience.

| Paul dit… | ÇA EXISTE, c'est… | où |
|---|---|---|
| « la fin d'heure », « le T-5 », « décider du sort des activités » | **complet** : appel discret dans le bandeau + modale ; quatre choix (**reporter · donner à la maison · annuler · ne rien donner**), extrait de l'activité, **notions nommées** qui ne seront pas travaillées ; s'ouvre une seule fois | `atT5Appliquer` `atT5Appel` `atT5Modale` `atT5Choix` `atT5Etat` `atT5Reste` `atT5Veille` — site |
| « copier pour École Directe », « mon cahier de textes » | **deux boutons** : « contenu de séance » et « travail à faire », HTML nettoyé | `copierED` — **moteur** |
| « le récit », « ce qu'on a fait aujourd'hui » | **écrit tout seul** : un paragraphe par activité, **seulement ce qui a été montré**, consignes à l'imparfait, citations du surligné, élèves nommés, bilan et travail à faire | `recit` `majVues` `impafait` `connecteur` `citations` — **moteur** |
| « la liasse », « le papier », « à coller dans le cahier » | récit en A4 + chaque fiche **annotée par la classe** | `pap` / rendu papier — **moteur** ; impression : `atImprimer*` — site |
| « le tableau », « la vue projetée » | **page autonome** `?vue=tableau` + **bouton** « Ouvrir la vue tableau » (patron du QCM) ; **elle survit à la déconnexion du pilote** | `sesBootTableau` `sesTabMonter` `sesTabPoll` `sesOuvrirTableau` — site |
| « le téléphone » | QR + pilotage mobile ; **le VIF n'y est PAS encore porté** (dette) | `sesBootTel` `sesTelPeindre` `sesTelGeste` — site |
| « taper les initiales », « la liste qui se réduit », « le VIF » | **existe au pilotage ordi** : champ d'initiales, réduction à chaque lettre, ouverture automatique dès qu'un seul candidat reste, motifs 1/2/3, note, Ctrl+Z, résolution canonique (« TM » trouve « MT ») | `_drVifInstaller` — site |
| « qui a participé », « la participation » | liste cliquable, **trois motifs**, historique par élève, compteurs vert/bleu, correction et suppression | `partAjoute` `ouvrirPart` `histoire` `quiParle` `peintQui` — **moteur** |
| « ce que la classe a vu est enregistré » | **copie au fil de l'eau** vers `deroule_joue/<classe>/ecrans`, débounce 900 ms, à chaque geste en classe | `_drCopieAuto` — site |
| « le temps réel par activité », « le vécu » | mesuré et écrit : début/fin réels, minutes par activité, passages, compétences, décisions du T-5 | `atVecuDemarrer` `atVecuEntrer` `atVecuSortir` `atVecuEcrire` `atVecuAfficher` — site |
| « la trace de l'heure », « heure de tant à tant » | **une trace par heure**, clé `jour_créneau_classe`, écrite **au fil**, reprise si relance dans le même créneau | `_drTraceAuto` `_drCleHeure` `_drCreneauHeure` `_drPaquetHeure` `_drTraceReprendre` — site |
| « reprendre une correction faite en classe dans ma préparation » | **existe** : à la clôture, cases à cocher, **rien n'est repris par défaut**, les modifications restent attachées à la classe | `atDrClotureModale` `atDrModifsDeLaSeance` `atDrReprendre` — site |
| « le texte déborde », « ça part sur l'écran suivant » | **coupure automatique** par moitiés, en cascade : étapes, réponses multiples, **texte d'une réponse unique** (garde l'initiale + marque de suite), texte du bloc, blocs de fiche. **Schéma et image ne se coupent jamais** | `scinde` `degorge` `coupeTexte` `verifDeborde` — **moteur** |
| « le dézoom recolle » | **réabsorption** : étapes concaténées, réponse recollée, `vues` additionnées ; à l'export, refusion pour que l'artifice ne fuie pas dans la donnée | `reabsorbe` `ctxReabs` — moteur ; `_drRefusionner` — site |
| « les diapos fils », « suite 1, suite 2 » | écrans de suite `grp`/`suite`/`frag` ; **jamais d'identité propre** : ils portent celle du père et meurent au dézoom | `scinde` `supprimeSuite` `bornes` — moteur ; `_drVuePere` `_drRangPere` — site |
| « l'identité des écrans » | posée **en un seul point de passage** (patron `idBloc`), jamais dans les 13 fonctions qui créent des écrans | `_drIdentifierEcrans` `_drEidNeuf` `_drEidDuRang` `_drRangDeLEid` — site |
| « le zoom » | cinq crans **en points** : 24 · 32 · 38 · 44 · 52. Il agit sur la **taille de police**, donc le texte se recompose | `zoom` `cale` `calePilote` `PT[]` — moteur |
| « dévoiler », « bit pour bit » | dévoilement bloc à bloc, `rev` et `vues` par bloc ; animation d'arrivée | `devoile` `replie` `pas` `va` `borneRev` `animeArrivees` — moteur |
| « à écrire », « ce que les élèves copient » | encadré pointillé bleu + main qui écrit ; marques posables | `armeMk` `marque` `editeMarque` — moteur |
| « mettre en lumière », « surligner » | mise en lumière d'un bloc + surligneur quatre couleurs | `spot` `stylo` — moteur |
| « le gel » | fige la projection sans figer le pilotage | `gel` — moteur |
| « le chrono » | chronomètre + envoi au tableau | `chrono` `regleChrono` — moteur ; `sesTelChrono` — site |
| « les schémas », « carte mentale, frise, arbre, cycle, tableau » | **cinq formes dessinées en SVG**, avec placement anti-chevauchement — **dans le moteur uniquement** : l'atelier des feuilles ne les a PAS (dette) | `schemaHTML` `carte` `frise` `arbre` `cycle` `grille` `separe` `surface` `dessine` — moteur |
| « injecter un chapitre », « coller le JSON » | inventaire « Ce que tu as déjà / Ce que l'IA apporte » + **quatre voies** : créer · compléter · remplacer · **créer un double** (titre suffixé, décision du 09/08) | `chOuvrir` `chVerifier` `chRendre` `chInjecter` `chInjecterConfirme` `_chSouche` — site |
| « publier », « envoyer » | **deux choses distinctes** : publication de l'onglet dans l'arborescence ≠ envoi depuis l'éditeur. Quatre états à afficher aux deux endroits (doctrine C5, **à vérifier si c'est en place**) | `edPublier*` — site |
| « la clé », « le code prof », « le coffre » | 29 fonctions de sécurité — **corps à ne jamais modifier**, comparés à chaque audit | `secu*` — site |
| « les classes », « la classe test » | gestion, codes élèves, classe test interne | `loadClasses` `cleClasse` `classeTestId` `estClasseTest` `_genererCodesClasse` — site |
| « l'emploi du temps » | huit créneaux 2026-27 : 08:00-08:55 · 08:57-09:52 · 10:07-11:02 · 11:04-11:59 · 13:00-13:55 · 13:57-14:52 · 15:07-16:02 · 16:04-16:59 | `AT_EDT` — site |

| « oral », « récitation » | **EXISTE** : `{id:'oral', libelle:'Oral et récitation'}` — **type de SÉANCE**, né du chantier chapitre 3e (récitation coévaluée), tranché par Paul, ajouté en 8.59.5. Les huit types : intro_image · etude_texte · notions · dictee_reecriture · atelier_ecriture · remediation · **oral** · tache_finale | `CH_TYPES_SEANCE` `chVocabulaireTypes` — site |
| « les kinds », « les outils d'un item » | `doc` · `dictee` · `reecriture` · `analyse_logique` · `qcm` · `tache` · `diaporama` | `CH_KINDS` — site |

## CE QUI N'EXISTE PAS — vérifié, ne cherche pas
| Paul en parle | état réel |
|---|---|
| **le bloc bilan** (l'acte de clôture de la séance, avec sa coche) | **n'existe ni au prompt ni au moteur.** Le prompt ne connaît que cinq types de blocs : consigne, question, fiche, schéma, image. Le cadrage du 19/08 le décide pourtant. **À créer.** |
| **les schémas, frises, cartes mentales dans les FEUILLES** | l'atelier n'a qu'une composante `schema` = **rectangle vide à hauteur réglable**. Le vrai rendu à cinq formes est dans le moteur du déroulé, jamais porté aux feuilles |
| **le VIF au téléphone** | existe au pilotage ordi, pas au mobile |
| **le T-5 au téléphone** | zéro mention dans tout le rendu mobile |
| **le profil de classe** | la matière est au hub (`deroule_joue/<classe>` : copies, `part`, `scene`, `vecu`), **rien ne la lit** |
| **le profil élève** | le nœud `mjpcProfils` existe et est alimenté ; **jamais lu** |
| **le temps réel** | interrogation toutes les 900 ms, pas d'écoute — décision de Paul du 23/08, jamais faite |
| **la version visible sur le tableau et le téléphone** | la pastille est un enfant du corps de page, **masqué par ces vues** |

## AJOUTS DU 25/08/2026 (conscience n°10, après les promotions 8.67.1 · 8.68.0 · 8.69.0) — mesurés sur la production
| les mots de Paul | ce qui existe, où | pour la classe (mots de Paul) |
|---|---|---|
| « le T-5 nomme les notions » | `atTaxoLibelle` résout par `chIdsTaxo` (notions + compétences + transversales) ; `chChargerTaxo` au passage en régime classe (8.67.1) | la modale de fin d'heure dit « Décrire une image fixe ou mobile », plus `litt-036` |
| « le tableau distant saute d'une diapo » | la copie jouée naît identifiée : `_drIdentifierEcrans(_ecrans)` dans `atDrJouer` (8.68.0) ; le mur résout `eid` | « les élèves voient une autre activité que celle dont je leur parle » — plus jamais |
| « le zoom doit se transmettre » | la scène porte `iz` + ratio du pilote ; le mur se découpe dans une boîte à ce ratio (`_sesTabBoite`, `_sesTabComposer`, `_drMorceauDuDevoilement`) (8.69.0) | « le zoom sert pour la classe, pas pour moi… sinon il ne sert à rien » |
| « le téléphone est une télécommande de zoom » | la réglette du moteur reprise au téléphone (`sesTelCran`, `sesTelMajCran`), branchée sur la scène, jamais sur `W.zoom()` | « je suis au fond de la classe… je vois le tableau comme les élèves » |
| « deux réglettes » | le dernier geste gagne, sans oscillation (`sesAppliquer`) | — |
| « rien ne déborde » (Win+K, étape unique longue) | filet « ce qui est projeté tient » sur la fenêtre locale ; enveloppe de `scinde` : une étape ou un énoncé long se coupe en fragment `suiteEt`/`suiteQ`, recollé au dézoom et à l'export (`_drRecollerEtapes`) — moteur intact | « je ne promeus pas sur dette » |
| « le mur montre un autre morceau que moi » · « les étapes dévoilées se revoilent » | la scène porte le dévoilement du GROUPE entier (`_drVueGroupe`), la position déclarée (`pos`), la boîte de l'émetteur (`bw`) ; le mur suit la position quand la source en a une (8.70.0) | « exactement le morceau que j'ai sous les yeux » ; rien de dévoilé ne se revoile |
| « la réglette est très difficile à piloter au doigt » | au téléphone : deux boutons − / + (`sesTelCranPas`), cran affiché, butées 1 et 5 (8.70.0) | « remplace la réglette par - et + » |
| **dette connue du moteur (8.70.0)** | au cran 5, en montant cran par cran, la découpe du mur peut différer d'un morceau du pilote (`zoom()` ne recolle qu'au dézoom) — aller directement au cran voulu l'évite ; LOT G | « s'il faut refaire le moteur, il faut » |

**Ce qui n'existe toujours pas (mis à jour)** : le VIF au téléphone · le T-5 au téléphone · la version visible sur tableau et téléphone · la vue emploi du temps · le profil de classe (et le récit rangé dans la trace de l'heure) · le profil élève · le bloc bilan · l'absence saisie en classe · le temps réel (sondage 900 ms). Registre : `MJPC6-DETTES.md`.

## AJOUTS DU 08/09/2026 (conscience n°12) — REFONTE DU DÉROULÉ : où sont les choses, rien n'est promu

**Le chantier** : cadrage en cours, dans la conversation, tour par tour ; le transcript mot pour mot est au sas `TRANSCRIPTS/C12/TRANSCRIPT-C12.md`, ses pièces dans `TRANSCRIPTS/C12/pieces/` (préfixe `Tn-` = tour n).

| je cherche… | c'est là |
|---|---|
| la passation C11 → C12 dans la version que Paul a lue | sas `TRANSCRIPTS/C12/pieces/T1-PASSATION-C11-C12-version-lue-par-Paul.md` (celle de `TRANSCRIPTS/C11/` est la version fausse, `n°11 · 93`) |
| le bug de l'éditeur, vu par le geste | pièces `T3-edit.mjs`, `T3-edit-journal.txt`, captures `T3-e01-*`, `T3-e04-*` ; registre n°12 · 03 |
| le lancement depuis l'emploi du temps qui ne montre pas le pilotage | pièces `T5-*` ; registre n°12 · 05 |
| les maquettes | figées : `T7-*` (v1), `T8-*` (v2), `T9b-*` (v3) ; manipulables : `T10-*` (v4), `T14-*` (v5, garde), `T16-*` (v6, relecture), `T17-*` (v7, relecture en onglet), `T18-*` (v8, tient dans la fenêtre) — chaque manipulable a son gabarit (`*-template.html`), son générateur (`gen-*.py`, données du hub simulé `PONT/EDT/tests/hub/`) et son banc (`*.mjs`) |
| l'inventaire complet du moteur et du pont (ce qui existe aujourd'hui) | pièces `T31-inventaire-moteur.txt` (157 fonctions, interface, raccourcis) et `T31-inventaire-pont.txt` (130 fonctions) |
| les cadrages du 25/08 toujours valables (temps, intégration) | sas `DEROULE/CADRAGE-TEMPS.md`, `DEROULE/CADRAGE-INTEGRATION.md` |
| les décisions de Paul et les dettes de ce chantier | registre `docs/MJPC6-DETTES.md`, section G (n°12 · 01 à 13) |
| comment charger la page dans un navigateur sans rien écrire | les bancs `Tn-*.mjs` : Chromium du conteneur + Playwright, faux hub par `addInitScript`, `route` qui coupe tout ce qui n'est pas `file:` |

**Ce qui n'existe pas — vérifié le 07-08/09** : aucune branche ni dossier du LOT G (le moteur `AT_DR_B64` est identique au 25/08, md5 `2ba70f9ef8aacb6f81962ea4e1b62944`) ; aucune heure jouée dans le hub réel (`deroule_joue` vide partout) ; aucune app d'entraînement perso des élèves ; aucun cockpit prof ; aucun document de cadrage de la base saine déposé (il s'écrit dans la conversation d'abord).

## AJOUTS DU 12/09/2026 (conscience n°12) — les cadrages de la base saine sont au sas

| je cherche… | c'est là |
|---|---|
| **le cadrage de la classe** (tableau, gel, gardes, journal, mise en commun, pages, heures et bilan, travail à faire et décisions, immuabilité, clic droit, notes, commentaires, appel) | sas `DEROULE/CADRAGE-1-LA-CLASSE.md` — règles numérotées, à citer dans le mandat et les bancs |
| **le cadrage de la relecture** (le récit, « ce qui s'est passé », les notes versées, le travail à faire en entier, les prénoms, l'échéance) | sas `DEROULE/CADRAGE-2-LA-RELECTURE.md` |
| **le cadrage des notions** (apprendre, coût et alertes, notion imprévue, créer une notion, garde Éduscol, compléter / réécrire) | sas `DEROULE/CADRAGE-3-LES-NOTIONS.md` |
| les versions de ces cadrages telles que Paul les a lues avant dépôt | pièces `T43-`, `T48-`, `T76-` du transcript C12 |
| la maquette v9a.1 (l'heure), manipulable | pièces `T45-maquette-pilotage-ordi-v9a1-manipulable.html`, gabarit `T45-v9a-template.html`, générateur `T45-gen-v9a1.py`, bancs `T44-test-v9a.mjs`, `T44-bancs2-v9a.mjs` |
| ce que Paul a dit fin août sur le report (fin de séance, pas fin d'heure) | transcript C10, L4406 et L4854 |
| ce que le site sait de la taxonomie et de sa création de notions | `index.html` L2160-2556 (éditeur M8bis) ; l'audit Éduscol `docs/MJPC6-audit-eduscol.md` ; le journal du 02/08 (M-TAXO-LIT) |
| les préalables à mandater à part | registre n°12 · 18 (les attendus au hub ; le volet littérature) |

## AJOUTS DU 15/09/2026 (conscience n°12) — le cadrage est complet

| je cherche… | c'est là |
|---|---|
| **le cadrage de la préparation** (l'écran, les objets et leurs gardes, texte, page, vidéo, documents, le prompt d'injection, le mode d'emploi) | sas `DEROULE/CADRAGE-4-LA-PREPARATION.md` |
| le cadrage vérifié contre l'existant, joué, section par section (✔ / ✘ / ∅) | pièce `T81-RAPPORT-cadrage-contre-existant-corrige.md` ; bancs `T80-existant*.mjs`, `T81-existant3.mjs`, `T83-blocs.mjs`, `T79-vif.mjs` ; captures `T79-`, `T80-ex-`, `T81-ex-`, `T83-bl-` |
| les manques de l'éditeur décrits par le consultant du chapitre « Poésie et peinture » | sas `CONSULTANT/CHAPITRE-1/LISEZ-MOI.md` (« les gestes empêchés »), `registre-chapitre-3e.md` (dettes 25, 29, 30, amendement du 26/08), `retro-ingenierie-prompt-chapitre.md` |
| le prompt du déroulé tel qu'il est au hub | `site/atelier/prompts/deroule` (chargé par `mjpcPromptCharger`) ; copie lue en pièce du tour 91 |
| l'éditeur de taxonomie et la création de notions | `index.html` L2160-2556 (M8bis) ; cadrage 3 §5-6 |
| les espaces de travail École Directe de Paul (pour les vidéos à la maison) | pièce `T101-espaces-de-travail-ED.png` ; cadrage 4, 4b.6 |
| ce qui reste avant le mandat | v9b, v9c, la maquette de la préparation, la séquence de test ; à part : les attendus au hub (cadrage 3 §6) |
| **le protocole à suivre dès qu'on travaille sur une maquette** (ce qu'elle est, les règles apprises, les preuves, la livraison, quand s'arrêter, le passage au mandat) | **`PROTOCOLE-MAQUETTE.md`, à la racine du dépôt de production** (Paul, 15/09) |

## AJOUTS DU 01/10/2026 (conscience n°12) — PROMOTION 8.74.0-⓪ : le mode test est étanche

| Quoi | Où |
|---|---|
| le transport routé par le mode test | `mjpcFetchOk(url, options)` : en `m8TestOn()`, toute écriture non-GET vers `FIREBASE_BASE` va au magasin `M8_TEST_STORE` (clé `/chemin`, un DELETE pose `null`, un PATCH éclate ses clés) ; hors hub (Drive) : inchangé |
| ce qui passe par ce transport | `_fbPutPath` / `_fbDeletePath` → `_corbeillePut` (la corbeille), `_purgeExec` (la purge), `ensureEleveUuid` (`/eleves`, `/eleves_index`), les dépôts d'atelier |
| la purge de rentrée du site | `MJPC_PURGE.purger` de `index` = `["eleves_index","codes","eleves"]` ; le contrat publié au hub (`/manifestes/index`) se republie à la connexion prof (`publierManifesteREST`) |
| l'année de l'inscription d'un élève | `ensureEleveUuid` → `_anneeScolaire()` (bascule en août), plus d'année en dur |
| le chantier « l'élève » | cadrage `DEROULE/CADRAGE-6-L-ELEVE.md` (sas) ; mandats `MANDATS/MANDAT-ELEVE-1.md` (livraisons ⓪ → ④, ⓪ promue) et `MANDATS/MANDAT-ELEVE-2.md` (attend la refonte du déroulé) ; livraisons `LIVRAISONS/ELEVE-1/<n>/` |
| ce qui n'existe pas encore (vérifié) | le profil élève (`/classes/<slug>/profils`), l'aménagement (`amenagements`), `nbDispositifs`, la fiche élève, l'import du fichier .xlsx, le rappel des équipes éducatives — livraisons ① → ③ à venir |

## AJOUTS DU 01/10/2026 — PROMOTION 8.74.0-① : l'import du fichier de classe (l'aperçu)

| Quoi | Où |
|---|---|
| le bloc « Importer la liste d'une classe » | en tête d'« Élèves & codes » (`_profSectionEleves` → `eliSectionHtml`) ; ids `eli-zone`, `eli-fichier`, `eli-apercu`, `eli-valider`, `eli-annuler` |
| la lecture du .xlsx | `eliLireFichier` (SheetJS 0.18.5, `ELI_SHEETJS_URL`, chargé à la demande par `eliChargerSheetJS`) ; le collé tabulé : `eliSurCollage` ; feuille « Les élèves », en-têtes du logiciel sautées (`ELI_ENTETES_LOGICIEL`), ligne des colonnes par ses mots |
| l'analyse et l'aperçu | `eliAnalyser` (clé `sanMJPC`, doublons, anomalies, déjà présents / nouveaux / absents), `eliApercuHtml`, `eliRendre` ; l'état dans `ELI_ETAT` |
| l'appariement de classe | `eliMots` (mots nettoyés par `edtNormaliser`, « 3 » = « 3e »), `eliMemeClasse`, `eliApparier`, `eliChoisirClasse` (la liste « classe visée », Paul confirme) |
| « Valider » | `eliValider` — à ① ne fait que le dire ; l'écriture arrive à ② |
| le mode test et la lecture des classes | `_m8Superposer(racine, val)` : en mode test, le magasin se superpose à `loadClasses` / `loadCodes` (dette n°12 · 82 ✔) |

## AJOUTS DU 01/10/2026 — PROMOTION 8.74.0-② + QCM 7.7.0 : l'import écrit, le profil existe

| Quoi | Où |
|---|---|
| le profil d'un élève | `/classes/<slug>/profils/<sanMJPC(nom)>` = { sexe (clair), naissance / dispositif / pap (paquets `mjpcChiffrer`), remarques, synthese (③), majLe, attente } — écrit par `eliEcrire` / `_eliPut` via `mjpcLot` |
| ce que les apps lisent | `/classes/<slug>/amenagements/<clé>` = { sexe, dicteeAmenagee } ; `/classes/<slug>/nbDispositifs` (entier, aucun nom) ; jamais `profils` |
| l'attente de la clé | `ELI_ATTENTE` (dans la page, jamais au hub) ; `eliChiffrerEnAttente` à la saisie de la clé (`secuPoserCle`) ; `eliAttenteHtml` la ligne « n fiches attendent ta clé » |
| la reprise au premier import | `eliPremier`, `eliReprise` (sexes du QCM là où le fichier n'en donne pas ; `classes_amenages` → pap-15 + dicteeAmenagee), `eliRestes` / `eliRestesEnCorbeille` (restes des classes supprimées → corbeille `restes-eleve-1`, puis effacés) |
| la classe absente ou sans année | `eliModaleClasse` → la fenêtre « Nouvelle classe » existante pré-remplie (`submitCreateClass`, `closeCreateClassModal`), puis l'import continue (`ELI_SUITE`) |
| le retrait et l'archivage | `_deleteEleveCls` + `eliOpsRetrait` (profil + aménagement en corbeille, `eliRecompterDispositifs`) ; `_b2BuildExtract` : l'archive transmissible ne porte jamais la fiche ; `_eleveFootprint` |
| le sexe dans le QCM | `evaluation-qcm.html` 7.7.0 : `surveillerClassesAvecSexes` lit `amenagements` par la clé de classe ; n'écrit plus `qcm/eleveSexes` (le contrat de purge le garde tant qu'il n'est pas vide) |

## AJOUTS DU 01/10/2026 — PROMOTION 8.74.0-③ : la fiche élève et le rappel des équipes éducatives

| Quoi | Où |
|---|---|
| la fiche élève (fiche d'identité, première page du profil) | « Élèves & codes » → clic sur un nom → `elfOuvrir` / `elfFicheHtml` ; état `ELF` ; les quinze libellés `ELF_PAP` (pap-01 … pap-15, mot pour mot) ; `elfCase`, `elfRemarque`, `elfSynthese`, `elfDispositif`, `elfSexe` ; styles `elf-*` |
| l'enregistrement chiffré | `elfEnregistrer` (clé exigée, fenêtre propre) → `_elfChif` (= `mjpcChiffrer(SECU.cle, JSON)`) pour `dispositif`, `pap`, `remarques`, `synthese` ; `majLe` ; `amenagements/<clé>/dicteeAmenagee` ; `nbDispositifs` ; via `mjpcLot` |
| la lecture d'une fiche | `elfProfil`, `elfLire` (déchiffrement avec la clé ; sans clé : sexe seul) ; `elfRedessiner` ne touche pas la saisie en cours |
| le ◆ dans la liste | `elfChargerFleches` / `elfMarquerListe` (avec la clé seulement) |
| le rappel des équipes éducatives | page des classes : `elfRappel`, `elfEssDuNiveau` (motif `/[ée]quipes?\s+[ée]duc/` + niveau dans `edtAnneeEvenements`, première date), `elfRappelClasseHtml`, `elfOuvrirClasse` ; la case de l'heure : `elfPremieresCases`, `elfRappelCaseHtml` dans `edtPeindreSemaine` (un nombre, jamais un nom) |
| la place réservée du longitudinal | le commentaire « PROFIL ÉLÈVE — suivi longitudinal » (feuille de route) pointe vers la fiche ; la composante `place_agregats` « Historique et progression de l'élève » reste réservée (dans l'année seulement, cadrage 6 · 1.7) |

## AJOUTS DU 01/10/2026 — PROMOTION correction_dictee 6.6.0 : la dictée lit la fiche (le mandat « L'ÉLÈVE — 1 » est complet)

| Quoi | Où (`correction_dictee.html`) |
|---|---|
| d'où vient l'aménagement d'un élève | `isEleveAmenage(clé, override, registre)` — l'override par dictée (`/correction_dictee/<id>/amenages/<clé>`) prime, sinon la fiche : `registreDepuisAmenagements(/classes/<clé de classe>/amenagements)` (`dicteeAmenagee === true`), la classe par `cleDuRegistre` ; `classes_amenages` n'est plus lu que pour tracer une fois les copies d'avant |
| la ligne PAP et le bloc | `lignePapDictee` dans `CorrScreen` (« Tout passer en non aménagé pour cette dictée » / « Tout repasser en aménagé (leur fiche) ») ; clic droit `toggleAmenageDictee` (aller / retour) |
| la trace d'une copie | `traceCopie`, `traceDe`, `modesAmenagee` → `results/<clé> = { …, amenagee, mode, base }` ; `baseDeCopie(r, baseDictee)` lit la base ; `traceAncienne` / `traceSiAbsente` pour les copies d'avant |
| les cinq écritures qui posent une copie | `save` (normal et rapide), la restauration depuis la corbeille, l'échange / le transfert, le reclassement M → P, le recalcul (`EditionDictee`, épargne `amenagee === true`) |
| la moyenne | encart Moyenne de `CorrScreen` (copies sur la base de la dictée + « n copies aménagées — moyenne m/base ») ; `buildDicteeJSON` (bilan exporté, chaque note avec `note_sur`) |
| ce que voit l'élève | sa note sur la base de sa copie, aucun mot ; la feuille papier `buildAmenageePapierHtml` sans « aménagée » |
| le bac à sable | `genererDonneesTest` (élèves `ZZTEST …`, aménagement du 2e), `purgerDonneesTest` |

## AJOUTS DU 01/10/2026 — PROMOTION ② bis : les nouvelles classes dans les apps, le QCM ne ressuscite plus les classes

| Quoi | Où |
|---|---|
| la liste « Classe » d'un niveau dans la dictée et la réécriture | `classeDuNiveau(c, niveau)` (le champ `niveau` du nœud `/classes/<clé>`, repli sur le début de la clé sans niveau), `nomDeClasse(c)` — `correction_dictee.html` (création et édition), `reecriture.html` (création) |
| le QCM et l'ancien carnet `qcm/classes` | `migrerClassesUneFois` ne fait plus rien (rend 0, 0) ; `rangerAncienCarnet` (bouton « Ranger l'ancien carnet de classes », Données → Sauvegarde → Maintenance, professeur) : corbeille `qcm-classes-legacy-<ts>` compté, puis effacement ; `qcm/classes` hors de `MJPC_PURGE` du QCM |
| le nom des classes dans le QCM | `libClasseQCM` / `libelle` — listes, tableau projeté, badge de l'élève (la clé reste ce que le QCM lit et écrit) |
| ce qui reste à faire par Paul | ranger l'ancien carnet ; supprimer « 4E Banksy », « 4e Pythagore », « 5E Hergé » ; « compléter » une classe (les restes `qcm/eleveSexes` / `classes_amenages` partent en corbeille) ; la purge de rentrée ; l'appariement de l'emploi du temps |

## AJOUT DU 01/10/2026 — micro correction_dictee 6.6.2 : la duplication est totale

| Quoi | Où |
|---|---|
| dupliquer une dictée | le bouton ⧉ de la liste → `dupliquerDicteeEntiere(d, cb)` : copie `DUP_REGLAGES` (`config` → « Copie de … », non publiée ; `dictee` ; `copyOptions` ; `exercices` ; `exercices_html` ; `binomes` ; `heure`), jamais `DUP_ETAT_ELEVES` (`results`, `absents`, `amenages`, `autocorrection`, `effacees`, `exercices_results`, `exercices_consultes`, `exercices_imprimes`, `copyPublishedAt`) |

## AJOUT DU 01/10/2026 — correction_dictee 6.7.0-L1 : jamais de perte en mode texte

| Quoi | Où (`correction_dictee.html`) |
|---|---|
| l'enregistrement à chaque geste du mode texte | `autoTexte(ne, nx, pos)` dans `CorrEleve`, appelée par `clickWord`, `selectType`, `confirmFautifTexte`, `confirmInsert`, `removeExtra` → `p.onAutoSave` (dans `CorrScreen`, les deux `onAutoSave` : trace + position) → `save` |
| la position reprise | `results/<clé>/texteIdx` (le dernier mot touché) ; `lastTouched` initialisé depuis `texteIdx`, un effet de défilement à l'ouverture ; `fastIdx` reste celle du mode rapide |
| ce qui reste du bouton | « Enregistrer (…) → suivant » : contrôle « mots recopiés » puis l'élève suivant ; tout est déjà au hub |

## AJOUT DU 01/10/2026 — correction_dictee 6.7.0-L2 : ⇧R bascule

| Quoi | Où (`correction_dictee.html`) |
|---|---|
| ⇧R dans les deux sens | l'écoute du clavier de `CorrScreen` (`onKey` : ignore INPUT / TEXTAREA / SELECT ; `tab==="correct"&&cur` → `setTab("rapide")` ; `tab==="rapide"` → `setCur(cur||eleveRapideParDefaut())`, `setTab("correct")`) ; `eleveRapideParDefaut` = la règle de l'onglet Rapide ; `onExitFast` revient à la même copie |

## AJOUT DU 01/10/2026 — correction_dictee 6.7.0-L3 : M adaptée, garde du mot juste

| Quoi | Où (`correction_dictee.html`) |
|---|---|
| la touche M qui s'adapte | `typeAdapteM(wt)` (E sur apostrophe, P sur signe, sinon M) dans l'écoute du clavier de `CorrEleve` ; alias « / » |
| le bouton mis en avant + Entrée | `preselectionRapide(wt)` → `.fast-preselect` sur « Ponct. manqu. ↵ » / « Élision ↵ » ; Entrée le valide (sur un mot ordinaire, Entrée passe au suivant) |
| la garde du mot juste | `motJuste(saisie, attendu)` dans `confirmFautifI` (rapide) et `confirmFautifTexte` (texte) ; état `gardeMot`, message `.garde-mot` « C'est le mot juste : recopie ce que l'élève a écrit. » |
| le clavier du mode rapide | G, L, M (/), I (?), A, Espace, Retour, Entrée, ⇧R — P et E retirées (boutons gardés) |
| code mort | `RapideGlobal` (ancien écran) : jamais appelé — dette n°12 · 97 |

## AJOUT DU 02/10/2026 — correction_dictee 6.7.0-L5 : le reclassement ponctuation

| Quoi | Où (`correction_dictee.html`) |
|---|---|
| la règle | `estSigne(w)` (ponctuation hors apostrophe) ; `reclassementPonctuation(copie, tokens, baseDictee, bareme)` → `{champs, n, mVersP}` ou `null` |
| l'application une fois à l'ouverture | l'effet d'ouverture de `CorrScreen` (après la trace de ④) : corbeille `corbeille/<jour>/reclassement-ponctuation_<hhmmss>_<clé>` (`_meta.chemin` = `correction_dictee/<id>/results/<clé>`, `data` = copie d'avant) puis `results.update` ; la ligne « ✓ n copies reclassées (ponctuation) » |
| un signe posé en plus | `confirmInsert` : `extras[] = {afterIdx, word, type:"P"}` ; affichage « +, P » (`.extra-p`) ; `computeNote` compte un extra `P` au forfait ponctuation (brevet) ou au coût P (préparée), `counts.P` l'inclut |
| ce qui a disparu | le bouton « M→P » et `hasConv` (patch d'il y a un an) |

## AJOUT DU 02/10/2026 — correction_dictee 6.7.0-L6 : la copie suivante par initiales

| Quoi | Où (`correction_dictee.html`) |
|---|---|
| le champ en fin de copie rapide | `CorrEleve` : état `rechFin` + référence, effet de focus quand `fastDone` ; la liste (6 au plus) avec « absent » / « ✔ corrigée » ; Entrée / clic → `p.onOuvrirRapide(clé)` |
| l'ouverture en mode rapide | `CorrScreen` : `onOuvrirRapide` (l'élève choisi devient celui de l'onglet Rapide) |
| le clavier qui se tait dans un champ | la garde au début de l'écoute du clavier de `CorrEleve` (INPUT / TEXTAREA / SELECT / contentEditable) |

## AJOUT DU 02/10/2026 — correction_dictee 6.7.0-L7b : la largeur du professeur

| Quoi | Où (`correction_dictee.html`) |
|---|---|
| la largeur des écrans de correction du professeur | `.container.corr-prof{max-width:1100px}` sur les deux racines de `CorrEleve` (mode texte, mode rapide) ; `.container` (760 px, partagé par les écrans élèves) inchangé |
| la phrase en mode rapide | `.ctx-phrase` : bornée par les ponctuations fortes, le mot courant en gras, coupée « … » aux bords |

## AJOUT DU 02/10/2026 — correction_dictee 6.7.0-L8 : le clavier du mode texte

| Quoi | Où (`correction_dictee.html`, `CorrEleve`) |
|---|---|
| la recherche permanente | états `rechTexte`, `candIdx` ; `motsTexteL8`, `candidatsL8`, `premierDepuis` ; classes `cand-blink`, `cand-courant` ; la bande `.bande-recherche` ; Échap efface, Retour efface une lettre |
| le curseur | état `curseur` (suit le dernier mot corrigé) ; `boiteMot`, `deplacerL8` (← → sautent la ponctuation, ↑ ↓ par la géométrie) ; classe `curseur-blink` ; la page suit le mot ; Entrée ouvre |
| menu ouvert au clavier | l'écoute du clavier du mode texte : G, L, M (`typeAdapteM`), I, A → `selectType` (le type remplace l'ancien) ; G/L → champ avec `motJuste` ; Entrée valide, Échap annule |
| Ctrl+Z | `annulerDerniereL8` (la pile des erreurs posées dans cette ouverture) → `autoTexte` |
| ce qui ne bouge pas | le mode rapide (`fastMark`, `fastSkip`, `confirmFautifI` identiques à l'octet), ⇧R, les champs, les écrans élèves |

## AJOUT DU 02/10/2026 — correction_dictee 6.7.0-L10b : la capitalisation des formes fautives

| Quoi | Où (`correction_dictee.html`) |
|---|---|
| les objets « forme » | `correction_dictee_erreurs/<id>` = { id, creeLe, mot, forme, type, dicteeId, texteKey, niveau } ; `idForme`, `motCleForme` (majuscule de début de phrase ignorée), `empreinteTexte` ; dans `MJPC_PURGE.preserver` et `MJPC_MANIFESTE.noeuds` |
| l'écriture / la reconstruction | `formesSynchroniser` (à chaque `save` : écrit, met à jour, retire tant que la copie existe) ; `formesOuverture` + `finOuvertureL10` (une fois : « ✓ n formes retenues », `formeId` dans les erreurs relues) |
| la liste et le pavé | `FORMES` (en mémoire), `formesPour(mot)` ; dans `CorrEleve` : `listeFormesHtml`, `numeroHtml`, `numFormes`, `toucheFormes` (Numpad par `e.code`, composition, préfixe, Entrée, Échap) ; `listeFormesTexte` pour le mode texte ; styles `.liste-formes`, `.num-formes`, `.forme-cand`, `.forme-exact` |
| ce qui a été retiré en L10b | « Ctrl + chiffre » (code et textes) — le pavé seul choisit ; sans pavé : le clic |

## AJOUT DU 02/10/2026 — correction_dictee 6.7.0-L9 : l'identité des copies, la date de correction

| Quoi | Où (`correction_dictee.html`) |
|---|---|
| l'identité d'une copie | `results/<clé>/{id, creeLe, modifieLe}` ; `idCopie()` ; posée dans `save`, le reclassement, le recalcul, la restauration ; les copies d'avant : l'effet d'ouverture de `CorrScreen` (une fois, `creeLeInconnu`) |
| la date vue par l'élève | `config.dateCorrection` (Réglages, `dateCorrectionTs`) → `dateVueCopie(d, corr)` : la liste de l'élève (`etatDicteeEleve`) et la feuille (`buildCopieHtml`) |
| le bandeau | `derniereEffacee` (exclut `geste === "echanger"`, saute `ignoree`) ; « Non, laisser dans la corbeille » → `effacees/<clé>/<date>/ignoree = true` |

## AJOUT DU 02/10/2026 — correction_dictee 6.7.0-L11 : les formes acceptées

| Quoi | Où (`correction_dictee.html`) |
|---|---|
| la règle du texte | `correction_dictee_textes/<texteKey>/formesAcceptees/<motClé>/<formeClé>` = { mot, forme, creeLe, origine, dicteeId } ; `ACCEPT` (en mémoire), `cleFb`, `accepteesDe`, `estAcceptee`, `accepteesAilleurs`, `autresDicteesDuTexte`, `accepteesCharger`, `cheminRegle`, `poserRegle`, `retirerRegle` |
| l'effet et le rétroactif | `marquerSansCout` (erreur `sansCout: true`), `computeNote` (saute, `counts.sansCout`), `recalculerTexte` + `phraseRecalc` (« n copies recalculées (ici et dans « … ») »), l'ouverture de `CorrScreen` (ligne « ✓ Formes acceptées : … ») |
| en correction | `CorrEleve` : `boutonAccepterL11` (« ✓ forme acceptée (ce texte) » / « ✕ ne plus accepter », inactif case vide), `formeEnCoursL11`, `accepterCourantL11` ; aucun raccourci ; `listeFormesHtml` : « acceptée » / « acceptée dans « titre » » + « accepter ici » |
| Préparation / Réglages | `FormesAccepteesPrep` (bouton « ✓ Formes acceptées », texte cliquable, pastilles, garde) ; `Reglages` (section « partagées avec », retirer) |
| l'élève | `buildCopieHtml` (« forme acceptée » à la place du coût, répétitions sans les acceptées), les deux cartes d'erreur de l'autocorrection, le tableau de points ; le bilan exporté (`sans_cout`) |

## AJOUT DU 02/10/2026 — correction_dictee 6.7.0-L12 : l'aide « ? » qui suit l'écran

| Quoi | Où (`correction_dictee.html`) |
|---|---|
| l'aide | `AIDE` (état global), `aidePoser`, `aideContexte`, `useAide` (dans `CorrScreen`, `CorrEleve`, `EditionDictee`), `AIDES` (les neuf contextes : les lignes), `lignesAide`, `AideContextuelle` (fenêtre, onglets « Ici » / « Nouveautés ») ; rendue par `AppProf`, `CorrScreen`, `CorrEleve` — jamais côté élève |
| les touches | « ? » hors champ, F1 (interceptée) partout, Échap ferme l'aide seule ; « i » seul = Illisible (l'alias « ? » retiré) |
| la règle | toute livraison qui ajoute ou change un geste ajoute ou corrige sa ligne dans `AIDES` |

## AJOUT DU 03/10/2026 — correction_dictee 6.7.0-L13 : l'attente de la première séance, 45 min hors classe

| Quoi | Où (`correction_dictee.html`, `EleveCorrection`) |
|---|---|
| le verrou | `heureLue` / `heureRef` (écoute de `correction_dictee/<id>/heure`) ; sans heure jamais lancée → l'écran d'attente (deux phrases + « ← Mes dictées ») ; la session posée seulement quand une séance existe |
| hors classe | `horsClasseL13` (séance close ou passée, aucune en cours), `ouvHC` (le moment de l'ouverture), `finEffL13` (45 min) à la place de `finDeFenetre` ; le bandeau ; à zéro → « Mes dictées » |
| la fenêtre | `finDeFenetre` : 55 → 45 min hors heure |

## AJOUT DU 03/10/2026 — correction_dictee 6.7.0-L14 : la note des élèves aménagés

| Quoi | Où (`correction_dictee.html`) |
|---|---|
| la règle | `computeNote` : pour une copie `amenagee:true`, les erreurs hors `lacunes[].tokenIdx` sont `sansCout` (motif `amenage`) ; `counts.sansCout` |
| le rétroactif | l'effet d'ouverture de `CorrScreen` (corbeille `recalcul-amenage` puis `results.update`) ; recalcul quand `dictee/amenagee.lacunes` change |
| l'élève | `EleveCorrection` : l'encart avec la phrase de Paul ; l'écran de fin « (sur les k mots à compléter) » ; `buildCopieHtml` : la phrase, la note aménagée, coût sous les mots des trous seulement |

## AJOUT DU 03/10/2026 — correction_dictee 6.7.0-L15-0b

| Quoi | Où (`correction_dictee.html`) |
|---|---|
| la règle par place | `cheminRegle(tk, idx, forme)` = `correction_dictee_textes/<tk>/formesAcceptees/<place>/<forme>` ; `regleEnMemoire`, `ACCEPT.parTexte[tk][place]` ; la conversion une fois à l'ouverture (corbeille) |
| la majuscule | `motJuste` : identique casse comprise seulement ; les objets de L10 gardent la casse |
| l'élève marqué aménagé après coup | `CorrScreen` : `amenLus` (les trois sources), l'effet « la trace suit le marquage » → `recalcul-amenage_…` en corbeille, message « copie recalculée : n erreurs comptées sur k mots à compléter » |
| ⇧R depuis le mot courant | `CorrEleve` : `__posL15` (position publiée), reprise à l'ouverture de l'autre mode ; « ← Texte », Pause |

## AJOUT DU 03/10/2026 — correction_dictee 6.7.0-L15a : le paramétrage de la version aménagée

| Quoi | Où (`correction_dictee.html`) |
|---|---|
| les propositions crédibles | `propositionsPourL15a` (les formes de L10 d'abord, puis `reglesCibleesL15a`, `HOMOPHONES_L15A` ; jamais vide ni le mot) ; `indiceEcartL15a` (mode C) ; `suggestDistracteurs` ne reste que dans `addLacune` (morte — code mort, dette 97) |
| le paramétrage | `ConfigAmenagee` : écoute en direct du hub, `setDefaultMode` + `completerPourMode` (suivi d'effets, message compté), la fenêtre d'un mot (`ouvrirFenL15a`, `enregistrerFenL15a`, `retirerFenL15a`, `autresFormesL15a`, Entrée / Échap) ; `EditionDictee` (`resteIci`) |

## AJOUT DU 04/10/2026 — correction_dictee 6.7.0-L13b : l'heure close à fin + 10

| Quoi | Où (`correction_dictee.html`) |
|---|---|
| la règle de l'heure | `GRACE_HEURE`, `heureActive`, `heureClose`, `heureFinEffective`, `heureFermeeSeule`, `dansHeureLancee` (T3), `finDeFenetre` |
| côté élève | `EleveCorrection` : `horsClasseL13` (après la clôture), `finEffL13` |
| côté professeur | le Suivi (colonne « Pas fini », la carte de l'heure), l'accueil (la ligne « heure fermée seule à … (non clôturée) »), l'aide (Données) |

## AJOUT DU 04/10/2026 — correction_dictee 6.7.0-L15b : l'adresse tient la dictée, l'onglet et la copie

| Quoi | Où (`correction_dictee.html`) |
|---|---|
| l'adresse | `ONGLETS_DONNEES_L15B`, `ongletVersUrlL15b`, `urlVersOngletL15b`, `adresseProfL15b` (replaceState), `lireAdresseProfL15b` (jamais quand `eleveKey` est présent) |
| la réouverture | `App` (au rechargement), `AppProf` (rouvrir l'endroit une fois les classes lues ; la garde dictée inexistante ; « ← Retour » nettoie), `CorrScreen` (l'onglet et la copie de départ) |

## AJOUT DU 04/10/2026 — correction_dictee 6.7.0-L15c : l'accueil rangé

| Quoi | Où (`correction_dictee.html`) |
|---|---|
| l'accueil | `NIVEAUX_L15C`, `nomClasseLisibleL15c` (libellé MJPC → « 3e Dylan Bob »), `dateCourteL15c` ; `chargerDictees` (niveau, classe lisible, `config.creeLe` posé une fois, copies corrigées / attendues, rendues) ; la liste par niveaux, la ligne C1 (taux, statut, coche « publiée » → `config.published`), le pied (« ＋ Nouvelle dictée » replié), le mode test replié |
| l'atelier | `OutilsTestSouche` (« Éprouver » retiré, boutons renommés) |
| « rendre les copies ▸ » | ouvre `CorrScreen` sur Données → Copies avec le bouton « Rendre les copies » prêt (focus, pulse) |

## AJOUT DU 04/10/2026 — correction_dictee 6.7.0-L15d-b

| Quoi | Où (`correction_dictee.html`) |
|---|---|
| les codes du bac à sable | `ModeTest` (création : `{classe, createdAt, empreinte, name, sel}` via `mjpcSelAleatoire` / `mjpcEmpreinte`) ; `purgerDonneesTest` (les clés de la classe de test de MJPC épargnées) |
| les modes des copies | `copieRecopiee` (G et L), `recopiesManquantes`, les deux listes de modes (infobulle et compte) |
| l'onglet Rapide | `CorrScreen` : l'effet « [micro L15c-d] » pose l'élève une fois |

## AJOUT DU 04/10/2026 — correction_dictee 6.7.0-L15e : l'import depuis un PDF

| Quoi | Où (`correction_dictee.html`) |
|---|---|
| pdf.js | `PDFJS_L15E`, `PDFJS_WORKER_L15E`, `chargerPdfjsL15e` (le module de travail copié en blob), `lirePdfL15e` |
| la reconnaissance | `groupesL15e` (crochets, parenthèses, barres), `analyserPdfL15e` (texte, groupes, « sur n points », consigne / formulaire / notes écartés, titre), `assemblerL15e` (bonnes formes du classique, notes → indices, crochet multi-mots), `normMotL15e` |
| l'écran | `ImportPdfL15e` (deux zones, états, le texte lu, la fenêtre de L15a, les champs, « Enregistrer la dictée » → la dictée et sa version aménagée, ouverture sur Préparation) ; le pied de l'accueil (`AppProf`) ; l'aide « ? » |
| les propositions | `reglesCibleesL15a` : + pluriel en -aux, + -e final |

## AJOUT DU 05/10/2026 — correction_dictee 6.7.0-L16a : le mode rapide par type

| Quoi | Où (`correction_dictee.html`) |
|---|---|
| les formes par type | `formesPour(mot, attendu, type)` ; `listeFormesTexte` (le type du menu) ; la liste du mode rapide (`askFautifI`) ; le pavé (`prendreFormeI` / texte) ; `formeEnCoursL11` |
| la bascule | `confirmFautifI(valeur, sansBascule, typeImpose)` ; l'état de bascule et son encart (« Passer en L » / « Garder G ») sous le champ |
| « Changer → » et Suppr | l'écran « déjà marqué » (`existingErr.type`) ; le clavier du mode rapide (`e.key==="Delete"` → `fastClear`, hors champ) ; l'infobulle du bouton « ✕ Annuler l'erreur » |
| la ligne centrée | le calcul `a16 / b16` (budget 52 par côté) et la grille `gridTemplateColumns:"1fr auto 1fr"` au-dessus du gros mot |

## AJOUT DU 05/10/2026 — correction_dictee 6.7.0-L15f-b : côté élève et déconnexion

| Quoi | Où (`correction_dictee.html`) |
|---|---|
| le chrono sans note | `EleveCorrection` : la fenêtre du stylo vert (« Ta note de dictée s'affichera à la fin du chrono. »), l'écran de fin masqué pendant le chrono |
| le regain | l'encart « Regagner des points » (la consigne en clair, « Je garde ma note (n/5) » → `autocorrection/<élève>/garderNote`), le détail (« + x regagné », le tableau), la phrase à recopier, le Suivi (« dont +x regagné »), l'export (`autocorrection: {note, sans_regain, regain}`) |
| l'actualisation | `AppEleveCoeurL15f` : écoute de `copyPublishedAt` et `config.published` par dictée ; `EleveCorrection` revient à « Mes dictées » au masquage |
| la déconnexion | `oublierSessionEleveL15f` ; `AppEleve` (l'enveloppe : « Se déconnecter » fixe, par moitié) ; `deconnexion` ; l'écoute de `correction_dictee/<id>/deconnexion/{clé,tous}` et de `heure` (clôture, fin + 10, 45 min → déconnexion) ; le Suivi (« Déconnecté », « Déconnecter », « Déconnecter tous ») |

## AJOUT DU 05/10/2026 — correction_dictee 6.7.0-L15g : les profils de barème

| Quoi | Où (`correction_dictee.html`) |
|---|---|
| les profils | `PROFILS_BASE` (Brevet, Préparée), `PROFILS`, `profilDe`, `profilsListeL15g`, `ecouterProfilsL15g` (`site/baremes/`), `ProfilEditeurL15g` (Voir / Modifier / Dupliquer / Enregistrer le profil), `familleDe` |
| la note | `computeNote(errors, extras, base, bareme)` — l'ordre : sans-coût → un type par mot → répétitions (mot / famille) → forfait plafonné → l'unité ; `coutType` |
| les recalculs | `recalculerDicteeL15g` (profil ou base d'une dictée), `recalculerProfilL15g` (toutes les dictées du profil), la version aménagée (`setBase`), `toastRecalculL15g` ; corbeille `recalcul-preparation_…` / `recalcul-profil_…` |
| le bilan, l'accueil | le Bilan (deux moyennes nommées), la ligne de l'accueil (« barème … ») |
| le branchement MJPC | `heureDeLaDictee(heure)` (seul point d'entrée), « Lancer » (`source`, `seanceId`), le marqueur `[BRANCHEMENT MJPC — déroulé]`, l'aide du Suivi |

## AJOUT DU 05/10/2026 — correction_dictee 6.7.0-L15h : le type C

| Quoi | Où (`correction_dictee.html`) |
|---|---|
| le type C | `TYPE_STYLE.C`, `TYPE_ORDRE`, `TYPE_COST`, `TYPE_COST_BREVET` (forfait) ; `reclassableEnC`, `signesCL15h`, `sousTypeCL15h`, `HOMOPHONES_GRAMMATICAUX_L15H` ; la touche C (`fastMark`, `selectType`), le bouton « C Accent / maj. », l'entrée du menu texte ; `copieRecopiee` / `recopiesManquantes` (C recopié) ; la fiche de l'élève (« Accent », « Majuscule », « Trait d'union ») ; l'aide |
| le reclassement à blanc | `bancs/rapport_L15h1.py` (lecture seule) → `RAPPORT-A-BLANC-L15h1.md` ; L15h-2 à venir : `reclassement-accents_<hhmmss>_<clé>` en corbeille |

## AJOUT DU 05/10/2026 — correction_dictee 6.7.0-L15.1b-1 : l'analyse par l'écart

| Quoi | Où (`correction_dictee.html`) |
|---|---|
| le moteur | `syllabes`, `cesureL151`, `motLongL151`, `motifL151` (l'interpréteur de motifs : casse, tiret, collage, apostrophe, chiffre, cedille, homophone, accent, double, suffixe, terminaisons, lettre, inversion, omise, ajoutee, changee, regex, ajout ; `sauf`, `siVerbe`, `siNom`, `siMot`), `analyserEcartL151`, `motAvantL151`, `analyseErreurL151`, `erreursAnalyseesL151` |
| les objets | `CATEGORIES_L151` (le seed, 41), `ANALYSES_L151`, `categoriesL151`, `homophonesL151`, `ecouterAnalysesL151` (`site/analyses/categories/`, `site/analyses/homophones/`) ; `categorie` dans chaque erreur et dans l'objet forme (`formesSynchroniser`) |
| les lecteurs | `gramComment(err, tokens)` (le premier chemin ; le mot long) et ses appels : la copie (`buildCopieHtml`), l'analyse de l'élève (`AppEleveCoeurL15f`) |
| l'écran | `CommentairesAnalyseL151` (Réglages), `NonReconnusL151` (Bilan), l'aide « ? » |

## AJOUT DU 06/10/2026 — correction_dictee 6.7.0-L15.1b-1d

| Quoi | Où (`correction_dictee.html`) |
|---|---|
| le reclassement réel en C | `RECLASSEMENT_C_L15H2` (la liste validée), `reclasserCL15h2` (à l'ouverture, une fois : `migrations/reclassementC_v1`), corbeille `reclassement-accents_…` |
| la phrase à recopier | `phraseARecopier(…, texte)` (l'écart d'abord), `engagementPourCategorieL151`, `categoriePourEngagementL151` |
| le Prompt IA | `promptIaL151` (via `mjpcPromptComposer`), `TAXO_L151` / `chargerTaxoL151` / `idsTaxoL151` / `codesCompetencesL151`, `erreursToutesDicteesL151`, `TYPES_MOTIF_L151` |
| Vérifier / Injecter | `verifierIaL151`, `injecterIaL151` (`mjpcInjecterAvecArchive`), les rattachements → `/taxonomie/alias/tables/correction_dictee` (statut `propose`), `notionsDeCategorieL151` |
| le profil | `emettreEvenementsProfilL151` (dans `save`) → `/profil/<clé>/events/<horodatage>` ; `MJPC_MANIFESTE.noeuds / notions`, `MJPC_PURGE.preserver` |
| l'écran | `CommentairesAnalyseL151` (la maquette T474 : liste, aperçu, Enregistrer, Texte d'origine, Prompt IA, ↗ Correspondances), `NonReconnusL151` (cumul « toutes dictées ») |

## AJOUTS DU 05/10/2026 — CONSCIENCE n°13 : le déroulé, la maquette p8 (les schémas)

| Quoi | Où |
|---|---|
| le mandat de la maquette p8 (un schéma par diapo, parfaitement lisible ; le moteur des schémas de l'existant repris, avec ses télescopages) | `MANDATS/MANDAT-DEROULE-MAQUETTE-P8.md` (sas), version 3, déposé le 05/10 |
| le complément p8-3b (l'écartement évite aussi les traits qui passent derrière une autre bulle, T11) et l'audit de p8-1 à p8-3 | `MANDATS/COMPLEMENT-DEROULE-P8-3.md` (sas), déposé le 06/10 ; audit : `TRANSCRIPTS/C13/pieces/T17-AUDIT-p8-1-a-p8-3.md` (sas) ; livraisons sur les branches `deroule/p8-1`, `deroule/p8-2`, `deroule/p8-3` du sas |
| les compléments p8-3c (le cahier, la diapo 6 de l'heure 2 et un schéma plausible, les infobulles, le bloc question au tableau) et p8-4 (écrire directement dans la diapo, « Changer de type ») | `MANDATS/COMPLEMENT-DEROULE-P8-3c.md` et `MANDATS/COMPLEMENT-DEROULE-P8-4.md` (sas), déposés le 07/10 ; dettes n°13 · 1 à 7 au registre |
| les compléments p8-3d (la carte de démonstration qui tient, mesurée), p8-4 version 2 (écrire dans la diapo : atelier, répétition) et p8-5 (écrire en classe, copie de la classe, versement à la fin de l'heure) ; la règle de l'audit de faisabilité | `MANDATS/COMPLEMENT-DEROULE-P8-3d.md`, `-P8-4.md`, `-P8-5.md` (sas), déposés le 07/10 ; `docs/MJPC6-1-DISPOSITIF.md`, addendum du 07/10 |
| la décision du 05/10 sur les schémas | `DEROULE/CADRAGE-4-LA-PREPARATION.md` §3.2, sous la ligne « schéma » (sas) |
| la carte de l'existant du déroulé, de l'éditeur, de l'emploi du temps, du tableau distant et du téléphone | `TRANSCRIPTS/C13/pieces/CARTE-EXISTANT-DEROULE.md` et son index `CARTE-EXISTANT-INDEX-FONCTIONS.md` (sas) |
| le moteur des schémas de l'existant | `AT_DR_B64` d'`index.html` (base64 du moteur) : `schemaHTML`, `carte`, `frise`, `arbre`, `cycle`, `grille`, `separe`, `surface`, `mesure`, `cle`, `SCH_COUL`, `tirSch`, `jalSch`, `repeintSch`, le panneau `reglages` (« Un à un / Tout ensemble », « ⌖ Réordonner ») |
| le téléphone (télécommande, par le QR) | `sesBootTel`, `sesTelPeindre` ; le QR : `sesQROuvrir`, `qrScans` |

## AJOUTS DU 11/10/2026 — LA MAQUETTE COMPLÈTE DU QCM, VALIDÉE (conscience n°12)

| Quoi | Où |
| --- | --- |
| la maquette validée du QCM, qui fait foi pour le code | `MANDATS/MAQUETTE-QCM-COMPLETE/maquette-qcm-v7.html` (sas, `main`), md5 `6be84ea1fb636017ce7225bfa3556082` ; la note de validation : `MANDATS/MAQUETTE-QCM-COMPLETE/VALIDEE.md` |
| son livret (une capture et une phrase par scène) | `MANDATS/MAQUETTE-QCM-COMPLETE/livret-maquette-qcm-v7.pdf` (sas) |
| ce que la maquette change dans MJPC, écart par écart | `MANDATS/MAQUETTE-QCM-COMPLETE/README.md`, section « Complément 2 », et `banc/existant/ecarts-mjpc.json` (sas) |
| son banc unique, et les inventaires de l'existant | `MANDATS/MAQUETTE-QCM-COMPLETE/banc/` (sas) : `node banc/banc.js maquette-qcm-v7.html 5 sortie.txt`, avec `PROD=` le clone de la production |
| le cadrage du QCM | `MANDATS/CADRAGE-QCM.md` (sas) ; le prompt de création d'éval : `MANDATS/PROMPT-QCM-CREATION/README.md` ; les libellés élève : `MANDATS/LIBELLES-ELEVE-COMPETENCES/` |
| les audits de la maquette | `AUDITS/MAQUETTE-QCM-COMPLETE-10-10/`, `AUDITS/MAQUETTE-QCM-COMPLEMENT-1-10-10/`, `AUDITS/MAQUETTE-QCM-COMPLEMENT-2-11-10/` (sas) |
| les objets de l'emploi du temps relus au hub le 11/10 | `MANDATS/COMPLEMENT-MAQUETTE-QCM-COMPLETE-2-EDT/` (sas) |

## AJOUTS DU 12/10/2026 — PROMOTION `evaluation-qcm.html` 7.7.2 (la version de secours)

| Quoi | Où |
|---|---|
| la correction sur la tablette de l'élève | `evaluation-qcm.html` 7.7.2, `EleveCorrection` : la bonne réponse marquée d'après `question.bonnes` (l. 4365) |
| le téléphone qui pilote | `evaluation-qcm.html` 7.7.2, `VuePhone` : `mode` déclaré au niveau du composant (l. 5437), pour la liste des élèves et la bande des questions |
| le banc de la 7.7.2 | `AUDITS/QCM-REPARATION-7.7.2-12-10/banc.js` (sas) : `APP_FILE=… BANC=AUDITS/QCM-MODE-TEST-09-10/banc node banc.js sortie.txt` |
| l'évaluation de 4e en ligne, et le prompt de création rempli pour son chapitre | `MANDATS/EVAL-4E-PARIS/` (sas) |

## AJOUTS DU 13/10/2026 — PROMOTION `evaluation-qcm.html` 8.0.0 (le code de la maquette v9)

| Quoi | Où |
|---|---|
| le code source de la 8.0.0, et son assemblage | branche `code-qcm` du sas, `LIVRAISONS/CODE-QCM/src/` ; `python3 LIVRAISONS/CODE-QCM/build.py` donne `evaluation-qcm.staging.html` (md5 `9a5f581453edbf5f7778d4fffb2f8fdd` à `42e2d974`) |
| les bancs de la 8.0.0 | `LIVRAISONS/CODE-QCM/banc/` (sas, `code-qcm`) : `bash banc/assembler.sh` (`COURT=1` pour l'assemblage court) |
| les contrôles de la conscience | `AUDITS/CONTROLES-QCM-APP/controles-app.js` (sas, `main`), md5 dans `EMPREINTES.md5` |
| les défauts et les reprises du 13/10 | `LIVRAISONS/CODE-QCM/DEFAUTS-OUVERTS.md` et `VERDICT.md` (sas, `code-qcm`) |
| revenir à la 7.7.2 | `docs/MJPC6-restauration.md`, point de retour du 13/10 (blob `07f11ffcc65e`) |

## AJOUTS DU 15/10/2026 — PROMOTION `evaluation-qcm.html` 8.0.1 (la reprise 7)

| Quoi | Où |
|---|---|
| le code source de la 8.0.1 | branche `code-qcm` du sas, `LIVRAISONS/CODE-QCM/src/` (md5 `054fcca31c7d1028eb0f7487ec4e9c4e` à `a89453c0`) |
| la reprise 7 et ses contrôles | `LIVRAISONS/CODE-QCM/DEFAUTS-OUVERTS.md` et `VERDICT.md` (sas, `code-qcm`) ; `AUDITS/CODE-QCM-AUDIT-1101-15-10/`, `-1141-`, et `AUDITS/CODE-QCM-AUDIT-1221-15-10` (sas, `main`) |
| la maquette « 📄 Lire les copies » (v4, et v1 à v3) | `MANDATS/MAQUETTE-QCM-LIRE-COPIES-13-10/` (sas, `main`) |
| les contrôles de la conscience, refaits pour l'entrée des élèves | `AUDITS/CONTROLES-QCM-APP/controles-app.js` (md5 `b7d6b6ef…`, `EMPREINTES.md5`) |
| revenir à la 8.0.0 | `docs/MJPC6-restauration.md`, point de retour du 15/10 (blob `1d88a05aa268`) |

## AJOUTS DU 16/10/2026 — PROMOTION `evaluation-qcm.html` 8.0.2 (micro, le nom des classes)

| Quoi | Où |
|---|---|
| le nom d'une classe à l'écran | `nomClasseV`, en tête de `LIVRAISONS/CODE-QCM/src/c3-base.js` (branche `code-qcm` du sas, `99a7de1d`) ; la règle vient de `nomClasseLisibleL15c` (`correction_dictee.html`) |
| le contrôle du micro | `AUDITS/CODE-QCM-MICRO-NOM-CLASSES-16-10` (sas, `main`) : la sonde du nom des classes, avant et après |
| revenir à la 8.0.1 | `docs/MJPC6-restauration.md`, point de retour du 16/10 (blob `552b5a07ba1f`) |

## AJOUTS DU 16/10/2026 — PROMOTION `evaluation-qcm.html` 8.0.3 (micro : la feuille du voisin, les notes, le chrono de la lecture)

| Quoi | Où |
|---|---|
| les phrases de la correction avec un voisin | `src/etape3.js` : `LignesAttest2`, `EcrLecture`, `EcrRevele` (l'option `voisin`, passée par `MoitieH`, `src/c3-tablettes.js`), `Coeval` (branche `code-qcm` du sas, `9faf1e63`) |
| les questions pas encore lues d'une note | `nonLuesV`, `NonLuesV`, en tête de `src/c3-base.js` ; le tableau de la séance (`ResultatsV`, `src/c4-seances.js`), le bilan de classe (`BilanClasseH`, `src/c3-corr.js`), « Lire les copies » (`NoteDirecteL`, `src/lire-copies.js`) |
| le chrono de la lecture, à la main | `PilotCorrectionH`, `src/c3-corr.js` (le geste de `TempsCarteH`, `ACT.ajouterTemps`) |
| le contrôle du micro | `AUDITS/CODE-QCM-MICRO-0803-16-10` (sas, `main`) |
| revenir à la 8.0.2 | `docs/MJPC6-restauration.md`, point de retour du 16/10 (blob `94e7818b6572`) |

## AJOUTS DU 16/10/2026 — PROMOTION `evaluation-qcm.html` 8.0.4 (le contrôle à froid des micros)

| Quoi | Où |
|---|---|
| le contrôle à froid : l'ordre, les relectures des quatre, leurs trouvailles | `LIVRAISONS/CODE-QCM/DEFAUTS-OUVERTS.md`, section « Contrôle à froid des micros de la conscience — 16/10/2026 » (sas, `code-qcm`) |
| le verdict de QCM-4 et son banc des micros | `LIVRAISONS/CODE-QCM/VERDICT.md`, `banc/banc-micros-16-10.js` (et `-d`, la mesure du temps tapé pendant un tour), `sorties/2026-10-16_1448/` (sas, `code-qcm`) |
| revenir à la 8.0.3 | `docs/MJPC6-restauration.md`, point de retour du 16/10 (blob `5f216f5aaf61`) |


## AJOUTS DU 30/10/2026 — MISE EN LIGNE DE `redaction.html` 1.2.0-RU : CORRIGER SUR LES SCANS

| ce que tu cherches | où c'est |
|---|---|
| l'app | `https://siteflow-io.github.io/monsieurjaipascompris/redaction.html?mode=prof&v=1.2.1-RU` → la rédaction → la classe → « 📄 Corriger sur les scans » |
| la grille à cases | au site : `redactions/<id>/config/grille2` (posée le 30/10 sur `sujet_mvqx0bld_6pj89w` et `sujet_mvtd85g7_ycxjq3`) ; source au sas `MANDATS/REDACTION-UNIVERSELLE/maquette/grille2.json` (`grille2.py`) |
| le paquet (photos, PDF) | jamais au site : le navigateur du professeur (IndexedDB `mjpc_scans`, avec la photo entière de chaque page pour la retouche) |
| les pages, les marques, les réponses | au site : `redactions/<id>/scan/<classe>/pages/<page>` ; `redactions/<id>/copies/<classe>/<élève>.scan` ; l'endroit exact : `suivi/<classe>.scanCurseur` |
| le fichier de l'élève | « 📨 Fichiers École Directe » : un fichier par élève, en lecture seule, sans aucun appel au site (`scEleveLecture`) |
| la correction par l'élève (à coder) | drapeau `SC_CORRECTION_ELEVE_CODEE` ; dettes : `docs/MJPC6-DETTES.md`, sas `MANDATS/REDACTION-UNIVERSELLE/A-CODER-CORRECTION-ELEVE.md` |
| le générateur | sas `MANDATS/REDACTION-UNIVERSELLE/maquette/gen-maquette.py` : maquette (faux hub fidèle à Firebase) ; `PROD=1` : le fichier à mettre en ligne, même code, sans faux hub |
| revenir en arrière | `docs/MJPC6-restauration.md`, point de retour du 30/10 (1.1.0-RU, commit `dc045e5`) |

## AJOUTS DU 27/10/2026 — PROMOTION `index.html` 8.75.0-⑥ (L'ATELIER, LES RÉDACTIONS DEPUIS LE SITE) ET `redaction.html` 1.1.0-RU (LE PANNEAU COMMUN)

| Quoi | Où |
|---|---|
| l'Atelier sans Pilotage ni Relecture (gardés présents et cachés pour les scripts) | `#ong-pilotage`, `#ong-relecture`, `atVuesAller` ; `atClasseFermer` remet la vue sur l'Atelier (E1, A61) |
| la poignée dans l'écran ; la taille de diapo de la classe gardée | `dimensionner` (E1, A60, A69) |
| surligner, couleur, « À écrire » préparés dans l'Atelier | `#at-surl`, `#at-txt`, `#at-ecr` (E1, A62) |
| les notes du présentateur à l'import, sur toute diapo | l'import du chapitre (E1, A64) ; le prompt 1.0 les fait écrire |
| « Diapo trop pleine » = plus d'une page au tableau | `dr_paginerReference`, `S._tailleClasse` (E1, A71) |
| la question du bilan sans ligne vide | `dr_qSansReponse` (E1, A70) |
| « ✏️ Rédactions » au menu des outils ; le kind `redaction` dans « Lier » ; l'onglet « Rédaction » | `openAdminTool('redaction')`, `loadAppList('redaction')`, `gotoRedaction`, `redactionAdresse`, `redactionClasseDuCours` (E1, A65-A68) |
| le prompt d'injection 1.0 | `MANDATS/PROMPT-INJECTION/PROMPT-INJECTION.md` (sas ; la 0.9 gardée à côté) |
| la Rédaction 1.1 : l'accueil, la rédaction ouverte, Snapshot / Restaurer | `redaction.html` : « Mes rédactions », Pilotage / Données / Réglages (E4, RU16-RU17) |
| revenir à la ⑤ ou à la 1.0.0-RU | `docs/MJPC6-restauration.md`, points de retour du 27/10 (blobs `15fbcd436709`, `9387e271e13b`) |

## AJOUTS DU 28/10/2026 — PROMOTION `index.html` 8.75.0-⑦ : LA COLONNE, LES FEUILLES, LA RÉPÉTITION, LES SÉANCES RÉSERVÉES, IDENTITÉ ET RANG (§12.34-§12.39 — E1, E3, E4)

| Quoi | Où |
|---|---|
| la colonne de gauche de l'Atelier : trois niveaux, l'heure de chaque diapo, la poignée | `atSomInjecterEcrans`, `voletAtelier` (`dr-socle.js`), `#at-arbre-poignee`, clé `mjpc_atelier_colonne_gauche` (E4, A84-A85) |
| la colonne de droite garde sa largeur | `dr-socle.js` (`S.ld`, clé retenue par le navigateur ; E4, A85) |
| la mise en forme des feuilles (G, S, ab, A, la légende), gardée à l'impression | l'éditeur de feuille (`ed2PanneauFeuille`), boutons `#atf-surl`, `#atf-legende`… (E4, A86) |
| la classe, l'heure n/N et la date de l'Atelier et de la répétition : une seule source | `dr_proposer`, `dr_heuresDeLaClasse` (`dr-classe.js`, E1, A87) ; le choix de la classe `#dr-classes-choix` |
| en répétition, les élèves de « CLASSE TEST » | `dr-socle.js`, `dr-atelier.js` (E4, A88) |
| le cahier de textes hors de la classe (échéance, travail prévu, contenu prévu de l'heure) | `dr_cahierHorsClasse` (E1, données), le rendu du bloc `cahier` (E4, A91) |
| une séance réservée à une ou plusieurs classes | le champ `classes` de la séance ; « Pour : … » dans Structure (E1, A79-A82) |
| le lancement ouvre la séance que la case nomme ; identité = clé, ordre = rang | `edtProjeter` (`cel.chCle`, `cel.snum`), `edtLancer`, `dr_estCetteSeance`, `seRangDe`, `rangVu` (E1, A83, A89, A90) |
| les captures avant / après de la ⑦ | sas : `TRANSCRIPTS/C13/pieces/T268-01` à `T268-09` |
| revenir à la ⑥ | `docs/MJPC6-restauration.md`, point de retour du 28/10 (blob `40eedf2fd815`) |

## AJOUTS DU 27/10/2026 — PROMOTION `correction_dictee.html` 6.7.0-L18 : TOUTE LA LARGEUR (13 · 61, E4)

| Quoi | Où |
|---|---|
| les écrans du professeur sur toute la largeur | `correction_dictee.html` : `.container-wide`, `.container.corr-prof` (CSS, « [L18 · 13 · 61] ») |
| une ponctuation ne commence jamais une ligne (grille du prof et de l'élève) | `collesL18`, `collesL18Cache`, `grouperL18`, `.mot-colle-l18` |
| ↑ / ↓ en mode texte | `deplacerL8` (le sens exigé au second tri) |
| la livraison, la note, les bancs | sas, branche `l18-largeur` : `LIVRAISONS/DICTEE-CORRECTION/L18-largeur/` (`NOTE.md`, `bancs/cap_l18.py`, `captures/`) |
| les sept bancs à données réelles (codes seulement) | sas : `TRANSCRIPTS/C13/pieces/T263-l18-sept-bancs-sur-les-donnees-reelles.txt` |
| revenir à 6.7.0-L17-1q3 | `docs/MJPC6-restauration.md`, point de retour du 27/10 (blob `c46a514e5a16`) |

## AJOUTS DU 27/10/2026 — MISE EN LIGNE DE LA RÉDACTION UNIVERSELLE 1.0.0-RU (`redaction.html`, E4)

| Quoi | Où |
|---|---|
| l'app (le professeur) | `redaction.html?mode=prof` — sans `id` : la liste des sujets ; `&id=<id interne ou nom court>` ; `&classe=<clé ou nom>` ; `&vue=preparer` ; `&test=1` |
| un sujet au hub | `/redactions/<id interne « sujet_… »>/config` (format `mjpc-redaction-sujet/1`), `copies/<clé classe>/<clé élève>`, `suivi/<clé classe>`, `validations/<clé>` ; les phrases communes lues : `/redactions_communes/validations` |
| « ➕ Nouveau sujet » (« Vérifier », « Créer ») | `ruVerifierNouveau`, `ruValiderSujet`, `ruCreerNouveau` |
| « Préparer le sujet » (aucune fiche avec une phrase non lue) | `ruPreparer`, `ruPrepRendre`, `ruPrepValider`, `ruPrepCase` ; `ruPhrasesNonLues`, `ruFicheBloquee` |
| l'identité d'une copie (id, clés, dates) et « Rattacher » | `idCopie`, `synchroniser` ; la zone « copie sans élève » du tableau de bord |
| le JSON de la lettre de la Grande Guerre (à coller dans « Nouveau sujet ») | `LIVRAISONS/REDACTION/sujets/lettre-grande-guerre.json` (sas, main) ; celui de Dugain : `sujets/dugain.json` (sas, branche `redaction-universelle`) |
| le prompt qui fait écrire un sujet à une IA | `MANDATS/REDACTION-UNIVERSELLE/PROMPT-REDACTION.md` (sas) |
| le banc | `LIVRAISONS/REDACTION/banc/banc-ru.mjs` (sas, branche `redaction-universelle`), RU0-RU15 |
| ce qui reste | `LIVRAISONS/REDACTION/NOTE.md` « Ce qui reste » ; 538 et 553 chez Paul ; l'accès depuis le portail (§12.32, E1) |
| revenir en arrière | `docs/MJPC6-restauration.md`, point de retour du 27/10 : retirer `redaction.html` |

## AJOUTS DU 27/10/2026 — PROMOTION `index.html` 8.75.0-⑤ : LES CLASSES PAR LEUR CLÉ, « NOUVEAU CHAPITRE », LA PHRASE DE L'ACTIVITÉ EN COURS (§12.30, §12.31 — E1, E2, E3)

| Quoi | Où |
|---|---|
| trouver une classe par sa clé, son nom ou son nom simplifié (les classes créées dans le panneau ont une clé simplifiée : `3_franklin_aretha`…) | `edtCleClasse` (E1, 13 · 51) ; toutes les lectures de l'emploi du temps passent par elle, l'heure jouée comprise (`_drCleHeureDe` / `edtCleHeure`, A59) ; côté déroulé `dr_slugDe` (E2) |
| « (proposition) » seulement pour un double | `chInjecterConfirme` (E1, 13 · 49) |
| « 📚 Nouveau chapitre » sans la clé | `chOuvrir` (E1, 13 · 50) |
| la phrase « L'activité en cours : … » sous la tête de la séquence | `dr_phraseActivite` (E2, §12.30) |
| les mesures par le geste | `LIVRAISONS/INTEGRATION/E3/bancs/banc-1228.mjs` (`MJPC_CAS=30,51,49,50,39`, 168/168) ; paires `TRANSCRIPTS/C13/pieces/T231-01…05` (sas) |
| le contrat | `MANDATS/INTEGRATION-DEROULE/CONTRAT.md` §12.30, §12.31 (sas) |
| revenir à la 8.75.0-④ | `docs/MJPC6-restauration.md`, point de retour du 27/10 (blob `a8251813942b`) |


## AJOUTS DU 27/10/2026 — PROMOTION `index.html` 8.75.0-④ : TOUT L'ÉCRAN, LES CINQ DETTES, LA SIMPLIFICATION (§12.27, §12.28, §12.29 — E1-E4)

| Quoi | Où |
|---|---|
| l'écran « la classe en cours » : l'heure lancée depuis la case de l'emploi du temps se joue là (ni Structure, ni Atelier, ni Mes chapitres) ; « ↗ Le site dans un nouvel onglet » | `atClasseEnCours`, `atClasseTient`, `atClasseMarquer` (E1, §12.28-3a, 13 · 41) |
| la garde du navigateur pendant l'heure ; le bandeau « Heure en cours avec les … — Reprendre l'heure » dans un autre onglet ; la reprise à l'endroit exact | E2, `dr-classe.js` (§12.28-3c/d/e, 13 · 41) ; pointeur `/site/cours_actif` ; la case : `dr_edtReprendre` |
| le « ? » de chaque écran du prof (bord droit, mi-hauteur ; touche « ? », Échap) | `aideCle`, `aideRendre`, `aideSuivre`, `AIDE_ECRANS` / `AIDE_FIL` (produits depuis `MANDATS/CINQ-DETTES/AIDE-PAR-ECRAN.md` par `LIVRAISONS/INTEGRATION/E1/outils/aide-ecrans.mjs` — ne pas éditer à la main), style `.aide-q` (E1, 13 · 43 ; 13 · 47 ouverte : il ne se voit pas) |
| mode test : ce qu'on publie se voit dans l'emploi du temps | `_siteGet` en mode test : l'arbre lu recompose les feuilles écrites au magasin de test (E1, 13 · 39 ; mesuré pour Dylan seulement) |
| « Fin de l'heure », l'étape 2 dit ce qu'elle attend | `dr_finCompte` (E2, 13 · 40) |
| le récit d'une seule activité : « Cette heure, on a fait » | `dr-recit.js` (E4, 13 · 42, garde RC22) |
| à T-5, une seule chose s'ouvre : la séquence « Fin de l'heure », à droite ; la barre du bas n'existe plus | `palier0` (E2) ; `alerteFermer` tolère une barre absente (§12.29 S1) |
| préparer le cahier : « ❄ Préparer le cahier », « Plus tard », « Montrer le cahier à la classe », « Retour au cours » ; l'écran garde sa forme | `dr_montrerCahier` (E2), la séquence dans la colonne de droite (E1) — §12.29 S2-S3 |
| les noms : « ⧉ Ce que voit la classe », « 🖥 Ouvrir le tableau », « Reprendre l'heure » | §12.29 S4 |
| la répétition dans l'Atelier, sans gestes de classe ; l'Atelier ne lance plus d'heure | §12.29 S5 ; `AUDITS/INTEGRATION-DEROULE/parcours.mjs` P5 |
| tout l'écran, tout le temps | §12.27 : panneau prof bord à bord (12 · 87), ↻ ✕ dans la carte (12 · 88), la rangée de l'emploi du temps (12 · 212), la page du niveau, `#hclasse` (13 · 38), la fenêtre du tableau sans écran du prof (13 · 44), « Voir dans l'arborescence » (13 · 45) |
| les mesures par le geste | `LIVRAISONS/INTEGRATION/E3/bancs/banc-1228.mjs` (316/316), `banc-1227.mjs` (801/801), aux quatre tailles |
| le contrat | `MANDATS/INTEGRATION-DEROULE/CONTRAT.md` §12.27, §12.28, §12.29 ; `MANDATS/SIMPLIFIER/CADRAGE-26-10.md` (S1-S5 et le mot de Paul) |
| revenir à la 8.75.0-③ | `docs/MJPC6-restauration.md`, point de retour du 27/10 (blob `f0cbc31fe81f`) |


## AJOUTS DU 25/10/2026 — PROMOTION `index.html` 8.75.0-② : LA RÉACTIVATION CONSTRUITE (§12.22, §12.25, §12.26 — E1-E4)

| Quoi | Où |
|---|---|
| la diapo « Où en sommes-nous ? » : son contenu (quatre blocs « La dernière fois », « À reprendre », « Les notions », « Le travail » — constante `DR_REACT_TITRES`), construite depuis l'heure jouée d'avant | `dr-recit.js` (inliné dans `index.html`) : `dr_reactivationConstruire(h)`, `dr_reactivationPreparer(h, cb, { cle, paquet })` (le paquet local de la clôture prime sur le hub), `dr_reactivationModifiee(e)` / `dr_reactivationRetour(e)` (« ta version » / la version calculée `construite.calculee`) — E4 ; gardes RC10-RC21 (`LIVRAISONS/INTEGRATION/E4/bancs/`) |
| quand elle naît et où elle vit | à la **clôture** de l'heure h, pour l'heure h+1 : `dr_cloreFin` → `dr_reactApresCloture` → `dr_reactPoser` + `dr_reactEcrireCopie` (`dr-classe.js`, E2) ; **dans la copie de classe seulement** : `C/ecrans` (`deroule_joue/<classe>`), eid `react-h<n>-s<clé>`, `role: 'reactivation'` ; jamais dans le déroulé du chapitre (`dr_normaliserTrame`, `dr_derouleDe`, le versement la sautent — `dr-socle.js` / `dr-atelier.js`, E1, garde A36) ; clôture manquée → construite à l'ouverture (`dr_reactOuvertureAssurer`) |
| la voir avant de lancer, l'écrire, « ta version », ↩ | l'écran « Où en est la classe » (case de l'EDT de l'heure h+1, sans lancer) : la puce « 1. Où en sommes-nous ? » (`#o-react-voir`) → `dr_reactVoir` / `dr_reactApercuRendre` (rendu par `rendre`, jamais `pousser` : rien au tableau, rien au journal) ; l'écriture = le geste du pilote armé avant le lancement (`p8ReactAvantLancement`, `brancherAtelier`, `ecrireDansDiapo` — `dr-atelier.js`, E1) → `dr_reactModifiee` réécrit `C/ecrans` ; l'entête du pilote `#react-entete` : « ↶ Où en est la classe » (`dr_reactRetour`), « ta version » + ↩ `#react-calculee` (`dr_reactRetourCalculee`) — jamais au tableau |
| « Ouvrir par la réactivation » oui / non, le réglage par séance | le bouton de l'écran d'ouverture (`dr_reactBoutonHtml`, `dr_reactBrancher`, E2) ; le réglage `B/deroule/reactivation` = `'oui'` / `'non'` (`dr_reglageReactivation`, porté par `dr_derouleDe`, écrit par `dr_ecrire`), défaut oui ; au lancement `dr_reactInserer` lit la copie (« non » : retirée de la copie) ; le récit : « On a ouvert l'heure par la réactivation : on a rappelé … » (E4) |
| les mesures par le geste | `LIVRAISONS/INTEGRATION/E3/bancs/banc-1226.mjs` (U1-U6 : clôture → copie ; voir sans lancer ; modifier → « ta version » ; ↩ ; l'Atelier sans elle ; l'élève rien avant), `mesure-react-piece.mjs` (hub brut), `mesure-react-charge.mjs` (hub chargé, 13 · 34) ; chez la conscience `TRANSCRIPTS/C13/pieces/T148-react-charge.mjs`, `T157-banc-1226-probe.mjs` |
| le contrat | `MANDATS/INTEGRATION-DEROULE/CONTRAT.md` §12.22 (le cadrage), §12.25 (les tranchages), §12.26 (vue et modifiée avant le lancement — les mots de Paul du 25/10) |
| les dettes promues avec | 13 · 32 (`_drProchainCreneau` retirée), 13 · 33 (rien de coupé), 13 · 34 (titre de bloc avec sa première ligne), 13 · 35 (pas de doublon « Apprendre » / « Les notions ») ; reste ouverte : 13 · 12 (E3, décidée par Paul le 25/10) |
| revenir à la 8.75.0-① | `docs/MJPC6-restauration.md`, point de retour du 25/10 (blob `705c07c06508`) |
| **8.75.0-③ (26/10)** — l'aperçu de la réactivation avant le lancement paginé comme le pilote (« page i / n », ‹ ›, Maj+←/→, la première page d'abord ; sans la zone « ✎ ») | `dr-classe.js` : `dr_reactApercuRendre` (`et.ecrire = false`, `et.pages` recalculées, `S.page` / `S.pagesCourantes`), `dr_reactVoir`, `dr_reactRetour` — dette 13 · 36 (E2 poussée 37) ; mesure E3 `banc-1226.mjs` U2 ; revenir à la ② : point de retour du 26/10 (blob `ffbdab35fa43`) |

## AJOUTS DU 23/10/2026 — PROMOTION `index.html` 8.75.0-① : LE DÉROULÉ INTÉGRÉ (E1-E4)

| Quoi | Où |
|---|---|
| le déroulé dans le site : socle, Atelier, Pilotage, tableau, récit, recyclage | `index.html`, les huit modules inlinés par `AUDITS/INTEGRATION-DEROULE/assembler.mjs` depuis `LIVRAISONS/INTEGRATION/dr/` (sas, branche `integration`) : `dr-socle.js` (`dr_*`, `aller`, `devoiler`, `ordreHeure`), `dr-atelier.js` (`p8*`, notes présentateur, « À régler »), `dr-classe.js` (`dr_lancer`, `lancerHeure`, `ouvrirFin`, la clôture), `dr-tableau.js` (`?vue=tableau`), `dr-recit.js` (le récit, RC1-RC9), `dr-recyclage.js`, `dr-gabarit.js`, `dr.css` |
| lancer l'heure depuis l'emploi du temps | la case → « Préparer » / « Lancer » → `edtLancer` → `dr_lancer` (contrat §12.7, E2) ; le Pilotage s'ouvre (12 · 05 réglée) |
| la fin de l'heure, le cahier de textes, le travail à faire | `ouvrirFin` (`dr-classe.js`), sept étapes ; `deroule.travail["N"]` proposé au T-5 |
| la Relecture (le récit, ce qui s'est passé, le papier, le chapitre) | `dr-recit.js` ; elle lit la copie de classe `C/ecrans`, jamais la trame (13 · 8) |
| l'import d'un chapitre au contrat du prompt | `chValiderChapitre`, `atP2ValiderDeroule`, `chCalculerEcritures` (`index.html`, E1) : les refus mot pour mot du prompt, `fil` « langue », le bilan sans réponse attendue, la diapo du bilan à trois blocs et ses `notes` |
| le prompt d'injection (la pièce que Paul donne à une conversation pour créer un chapitre) | `MANDATS/PROMPT-INJECTION/PROMPT-INJECTION.md` (sas, v0.9) ; la preuve sur pièce : `LIVRAISONS/INTEGRATION/E4/prompt/` (`chapitre-3e-au-contrat.json`, `au-contrat.mjs`, captures) |
| le contrat de l'intégration, ses décisions §12.1-12.24 | `MANDATS/INTEGRATION-DEROULE/CONTRAT.md` (sas) |
| le banc unique et les contrôles | `AUDITS/INTEGRATION-DEROULE/banc.sh` (assemblage, collisions, parcours P0-P12, mode test, K1-K13 par `AUDITS/CONTROLES-DEROULE/controles.mjs`) ; les épreuves `epreuves/banc-sur-integration-<commit>.txt` |
| l'audit final de la conscience | `AUDITS/INTEGRATION-DEROULE/AUDIT-FINAL.md` (sas) ; transcript `TRANSCRIPTS/C13/TRANSCRIPT-C13.md` tours 97-138 |
| ce qui n'existe pas encore | les feuilles du chapitre (`dr_feuilles()` vide : une fiche se lie par clic droit) ; le contrat de pilotage des pages HTML (`mjpc-page` / `mjpc-etape`, L5) ; la réactivation construite (§12.22, après ce promeus, E2/E4) ; l'animation en accéléré du mode test (144) |
| revenir à la 8.74.0-④ | `docs/MJPC6-restauration.md`, point de retour du 23/10 (blob `551ee1cc2aec`) |

## AJOUTS DU 28/10/2026 — PROMOTION `index.html` 8.75.0-⑧ (§12.41-§12.61, 13 · 89)

| Quoi | Où |
|---|---|
| la répétition envoyée au tableau distant | `DR_REP`, `/site/repetition/…` (`dr-atelier.js`) ; `dr_tabLirePointeur` (`dr-tableau.js`) (E1, A92) |
| la vidéo, les images et les PDF de la clé ; la garde vraie ; plusieurs clés | `DR_CLE`, `showDirectoryPicker` gardé en IndexedDB, `dr_videoBrancher`, `dr_cleEtatFichier`, `/site/cle_vue` (E1, A95) |
| « Déposer en ligne » (le relais) | `mjpcDeposerEnLigne`, `mjpcRelais`, `MJPC_RELAIS_URL` (à poser) ; le relais `LIVRAISONS/INTEGRATION/E4/relais/depot.gs` au sas ; préfixe `m2:` (`dr_mediasAdresse`) |
| les trois anciennes lignes Drive, en lecture | `openItem`, `_openAtelierFromList` (`_ligneDriveExiste`), `ed2Papier`, `dr_recitUrlDe` (13 · 88) |
| ⏱ et 👥 sous la diapo ; la répétition avec 3E Charles de Gaulle | `dr-gabarit.js`, `dr_classeTest` (`dr-socle.js`) (E1, A102) |
| l'horloge de la case et « aller à 5 minutes de la fin » (De Gaulle) | `dr_horlogeCase`, `now()` (`dr-socle.js`) (E4, A104) |
| la règle du redessin : poser seulement ce qui change | `dr_poseSi`, `dr_classeSi` (`dr-socle.js`) ; `tick`, `#rep-ou`, `dr_tabVeiller` (1 s), `aideSuivre` au geste (contrat §12.56) |
| rien d'incorrigeable au tableau ; « retirer du tableau » ; le journal avant / après | contrat §12.59 (E4, A105) |
| l'Atelier abonné au chapitre, écrit diapo par diapo | contrat §12.60 (E1, A106) |
| le numéro de chapitre : le rang, pas la clé | `ordDe` dans `ed2Papier` et neuf autres libellés (13 · 89) |
| revenir à la ⑦ | `docs/MJPC6-restauration.md`, point de retour du 28/10 (blob `c18274d14127`) |


## AJOUTS DU 29/10/2026 — PROMOTION `index.html` 8.76.0-⑨ (§12.62, §12.65, §12.66)

| Quoi | Où |
|---|---|
| « Ce que la diapo déclare » ouverte ; « hors activité » ; la réactivation grisée dans les rôles | `droiteAtelier`, `rendreDroiteAtelier` (`dr-socle.js`, `dr-atelier.js`) |
| la diapo vierge (insérer avant / après) | `insererDiapoApres` et son pendant « avant », `menuAtelierDiapo` (`dr-atelier.js`) |
| les quatre diapos d'ouverture, posées par le site, retirables | `DR_INV`, `dr_invPoser`, `dr_estInvariable`, `deroule/retraits` (`dr-socle.js`) |
| la colonne de l'Atelier : renommer, masquer, glisser, sélection, copier-coller | `voletAtelier`, `brancherMenus`, `menuAtelierDiapo` (`dr-socle.js`, `dr-atelier.js`) |
| le tableau distant en mode test | `/site/tableau_test` ; `DR_REP`, `dr_repTest` (`dr-atelier.js`) ; `dr_tabPointeur` (`dr-tableau.js`) |
| la clôture vers l'emploi du temps, « Relire l'heure » | `dr-classe.js` (la bande de confirmation, `DR_CL.closConf`) |
| la clé USB en bas à droite de l'écran d'attente | `dr_tabPoser`, `#ses-tab-cle` (`dr-tableau.js`) |
| les sondes de la ⑨ | sas `LIVRAISONS/INTEGRATION/EX/bancs/sonde-1262.mjs`, `sonde-1266.mjs` ; banc étapes 6 et 7 |
| revenir à la ⑧ | `docs/MJPC6-restauration.md`, point de retour du 29/10 (blob `9c7935a03892`) |

| le tableau distant en plein écran au premier geste (8.76.1-⑨) | `dr_tabPleinEcran`, `dr_tabPoser` (`dr-tableau.js`) ; revenir à la 8.76.0 : `docs/MJPC6-restauration.md` (blob `41ecb48a02b2`) |

## AJOUTS DU 29/10/2026 — PROMOTION `index.html` 8.77.0-⑩

| Quoi | Où |
|---|---|
| projeter une feuille du site au tableau | `dr_docsPanneau`, `dr_recitDocuments`, `dr_docHtmlRef` (`dr-*.js`, ex-dix point 1) |
| l'étiquette d'activité envoyée entière, lisible, corrigeable en répétition | `actHtml`, `.mur .act` (ex-dix point 2) |
| le minuteur unique sous la diapo, couleurs, pause, son ; le flux du tableau distant | `#bchrono`, `dr_minuteur…` ; EventSource du hub dans `dr-tableau.js` (ex-dix point 3) |
| la participation à 0 au tableau distant | `et.qui` (ex-dix point 4) |
| « Annuler cette heure » | ex-dix point 5 (`dr-classe.js`) |
| la sonde de la ⑩ | sas `LIVRAISONS/INTEGRATION/EX/bancs/sonde-10.mjs` ; banc étape 8 |
| revenir à la 8.76.1 | `docs/MJPC6-restauration.md` (blob `5a46178a0fa5`) |
| la correction sur les scans (maquette, C13 tour 399) | sas `MANDATS/REDACTION-UNIVERSELLE/maquette/` : `T399-maquette-redaction-scans-v13.html` (md5 260472fad5dd, tour 416 ; les stickers en maquette seule : `T417-maquette-stickers.html` (la grille remplie par les stickers, couleurs et liens, tour 417 ; T416, étiquettes, md5 7e620651828e), code `stickers.js` (inclus avec `STICKERS=1`, jamais en `PROD=1`), captures `banc/capture-stickers.mjs` → `banc/captures/21-st-*.png` (T417 ; `20-st-*` : T416) ; v12 30de9f48a75d, tour 413 ; v11 16c94831f92a, faux hub fidèle à Firebase ; v10 ce6f2a6bd513, v9 dfa3c3599bf1, v8 1b6f66eb7dba, v7 eb17b05ddaed, v6 886e465b0041, v5 09b730c238bb, v4 9e8daa11591c, v3 8a25514aac73, v2 04afe6b10dc0, v1 adf1e959507d), générateur `gen-maquette.py`, code `scan.js` · `eleve.js` · `scan.css`, grille `grille2.json`, banc `banc/banc.mjs` (48 / 0), infobulles `banc/infobulles.mjs` (355 éléments, 0 sans), la 1.2.1-RU (en ligne depuis le 30/10 12:34, commit `fd6fbc4`) `LIVRAISONS/REDACTION/redaction-1.2.1-RU-candidat.html`, la 1.2.2-RU candidate `LIVRAISONS/REDACTION/redaction-1.2.2-RU-candidat.html` (md5 d46ecf46557d) (md5 b0d4584e512a, refaite à l'identique par `PROD=1 VERSION=1.2.1-RU python3 gen-maquette.py <base 1.1.0> …`), captures construites `banc/capture-1409.mjs` (la copie à la largeur), `banc/capture-questions.mjs` (la question et sa case), `banc/capture-alerte.mjs` (l'alerte des lignes), la passation de la n°13 à la n°14 `MANDATS/PASSATION-C13-C14.md` (30/10), les outils `MANDATS/REDACTION-UNIVERSELLE/outils/` (`sas.sh`, `fumee.mjs`), la correction par l'élève à coder `MANDATS/REDACTION-UNIVERSELLE/A-CODER-CORRECTION-ELEVE.md` (drapeau `SC_CORRECTION_ELEVE_CODEE`, lecture seule `scEleveLecture`), paquets inventés `paquet-essai.pdf` · `paquet-reperes.pdf` |
| le fichier d'essai École Directe | sas `MANDATS/REDACTION-UNIVERSELLE/ecoledirecte/essai-ecoledirecte.html` |
