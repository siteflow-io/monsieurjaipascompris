# OÙ TROUVER QUOI — table d'entrée de l'index des fonctions

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

**Ce qui n'existe toujours pas (mis à jour)** : le VIF au téléphone · le T-5 au téléphone · la version visible sur tableau et téléphone · la vue emploi du temps · le profil de classe (et le récit rangé dans la trace de l'heure) · le profil élève · le bloc bilan · l'absence saisie en classe · le temps réel (sondage 900 ms). Registre : `MJPC6-DETTES.md`.
