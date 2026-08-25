# INDEX DES FONCTIONS — MJPC 6

> **À quoi il sert.** Répondre en UNE commande à : *« est-ce que ça existe déjà, et où ? »*
> C'est la réponse à la cause des bugs successifs, identifiée par Paul le 25/08 :
> *« vu que la connaissance du site est partielle, l'IA code par-dessus l'existant sans le connaître. »*
>
> **Comment s'en servir.** Ne le lis pas en entier : **cherche dedans.** Avant d'écrire une fonction,
> avant de proposer une fonctionnalité, cherche le mot-clé ici. Si tu trouves, va lire le code.
> Si tu ne trouves pas, cherche un synonyme, puis seulement alors conclus que ça n'existe pas.
>
> **Ce qu'il contient.** Toutes les fonctions du site ET du moteur : nom, arguments, taille,
> ligne, ce qu'elle fait (tiré de son commentaire), qui l'appelle, ce qu'elle appelle.
>
> **Régénérable** : `python3 index_fonctions.py` sur la production courante.


**1149 fonctions** — site : 1000 · moteur : 149


## SOMMAIRE DES FAMILLES

- **ATELIER — feuilles, documents, impression** — 177 fonctions
- **ATELIER — prompts et écrans IA** — 19 fonctions
- **CHAPITRE — injection JSON, inventaire, les quatre voies** — 30 fonctions
- **DIVERS — socle du site** — 233 fonctions
- **DIVERS — utilitaires internes** — 247 fonctions
- **MOTEUR — le déroulé (fichier autonome encodé, JAMAIS modifié)** — 149 fonctions
- **PONT DÉROULÉ — cadre, adaptateur, trame, identités, trace** — 55 fonctions
- **PONT DÉROULÉ — pilotage, lancement, clôture, reprise** — 20 fonctions
- **SESSION — les trois appareils (pilote, tableau, téléphone)** — 46 fonctions
- **SOCLE — hub, écriture, lecture** — 31 fonctions
- **SÉCURITÉ — coffre, clé, empreintes (M-SÉCU) — corps à ne jamais modifier** — 29 fonctions
- **TEMPS — le T-5, fin d’heure et ses quatre choix** — 9 fonctions
- **TEMPS — le vécu, mesure réelle par activité** — 6 fonctions
- **ÉDITEUR — arborescence, publication, liaisons** — 83 fonctions
- **ÉDITEUR — les quatre onglets (Structure, Déroulé, Relecture, Papier)** — 6 fonctions
- **ÉDITEUR — sommaire natif** — 9 fonctions


## ATELIER — feuilles, documents, impression

| fonction | args | taille | ce qu'elle fait | appelée par |
|---|---|---|---|---|
| `atAccord` | id,n,defaut | 66 o | (sans commentaire ni indice) | atelierDocumentHTML |
| `atAdresseAffichage` | doc,quoi | 583 o | Le libellé à l'écran se recalcule depuis le hub quand il est chargé (l'écran est à jour) ; sinon le libellé stocké à la sélection fait secours ; | atAdresseVersValeurs, atHtmlChampsUnique, atelierDocumentHTML, ed2PanneauFeuille |
| `atAdresseCles` | r | 340 o | [C5-UID] \u2464 la CL\u00c9 courante d'une adresse : par identit\u00e9 d'abord, par rang ensuite. | — |
| `atAdresseLisible` | r | 1037 o | L'adresse en toutes lettres — « 3e › Chapitre 1 › Séance 8 » (ordres du hub si chargés) | atProposerDepot |
| `atAdresseVersValeurs` | r | 469 o | Les champs d'affichage `chapitre`/`seance` suivent l'adresse (flux Windows). | atRattPoserChapitre, atRattPoserSeance |
| `atAjouterBloc` | id,silencieux | 179 o | (sans commentaire ni indice) | atAppliquerProduit, atHtmlBlocs, atToggleCase |
| `atAllerComposante` | comp | 558 o | Le clic dans l'aperçu mène à la section d'éditeur correspondante. | atMessageApercu |
| `atAnnulerEnr` | — | 69 o | (sans commentaire) touche #at-ia-diff | atConfirmerEnr, atEnregistrerAvecDiff |
| `atApPrec` | — | 61 o | (sans commentaire ni indice) | atRendreApercu |
| `atApSuiv` | — | 49 o | (sans commentaire ni indice) | atRendreApercu |
| `atAppliquerProduit` | pid | 391 o | le piston : pré-coche le lot — la main reste entière (on peut tout décocher après) | atRendreEditeur |
| `atArbrePremiereSeance` | — | 356 o | (sans commentaire ni indice) | atVuesMonter |
| `atArchiveDate` | ts | 190 o | (sans commentaire) affiche/emploie : « date inconnue » | atArchiveRelire, atArchiveRestaurer, atArchivesComparer, atArchivesRendre |
| `atArchiveRelire` | i | 294 o | (sans commentaire) affiche/emploie : « <div class= · ><b>Version du  » — touche #at-arch-vue | atArchivesRendre |
| `atArchiveRestaurer` | i | 986 o | ⑤ RESTAURER : archive l'état actuel AVANT de le remplacer — on ne perd jamais l'état d'avant, exactement comme à l'enregistrement. | atArchivesRendre |
| `atArchiverPuisEcrire` | produit,ancien,nouveau,cb | 434 o | ③ ARCHIVE AVANT, ABANDON SI ELLE ÉCHOUE | atArchiveRestaurer, atConfirmerEnr |
| `atArchivesCocher` | i,on | 302 o | (sans commentaire) touche #ar-cmp | atArchivesRendre |
| `atArchivesComparer` | — | 444 o | ⑤ COMPARER deux archives — le MÊME atDiffHtml qu'à l'enregistrement. | atArchivesRendre |
| `atArchivesLire` | produit,cb | 261 o | ⑤ LA LISTE DES ARCHIVES | atArchivesOuvrir |
| `atArchivesOuvrir` | — | 262 o | (sans commentaire) affiche/emploie : « <p class= · >Lecture des archives\u2026</p> » — touche #at-arch-zone | atArchiveRestaurer, atIAModifier |
| `atArchivesRendre` | — | 1458 o | (sans commentaire) affiche/emploie : « <p class= · ;     return;   }   var h= » — touche #at-arch-zone | atArchivesOuvrir |
| `atBlocEdition` | — | 1254 o | ① Le bloc d'édition, UN SEUL, appelé par les TROIS écrans. Trois copies auraient divergé — c'est précisément ce qui a produit « deux versions empilées ». | atIARendre, chRendre |
| `atBlocsDe` | id | 109 o | blocs multiples : la case a activé la ZONE ; « + » ajoute un second bloc, ↑ ↓ réordonnent, ✕ retire (décision de la conscience, Q1) | atHtmlBlocs |
| `atBougerBloc` | i,delta | 155 o | (sans commentaire ni indice) | atHtmlBlocs |
| `atBrouillonCle` | id | 83 o | clés du brouillon local : préfixe distinct en mode test (confinement nommé) | atBrouillonEcrire, atBrouillonEffacer, atBrouillonLire |
| `atBrouillonEcrire` | — | 123 o | (sans commentaire ni indice) | atEnregistrerMaintenant, atMarquerModifie |
| `atBrouillonEffacer` | id | 61 o | (sans commentaire ni indice) | atEnregistrerMaintenant, atOuvrirDoc, atSupprimerDoc |
| `atBrouillonLire` | id | 108 o | (sans commentaire ni indice) | atOuvrirDoc |
| `atBrouillonsTestPurger` | — | 542 o | (sans commentaire ni indice) | atelierOuvrir |
| `atCaseGrisee` | id | 410 o | une case du gabarit — grisage qui CONSEILLE (dépendances, rattachement), jamais un verrou : le clic active quand même, avec l'avertissement | atHtmlCase, atToggleCase |
| `atChExporter` | — | 455 o | (sans commentaire) affiche/emploie : « Ce chapitre n\u2019est plus l\u00e0. · Chapitre export\u00e9 :  » | ed2Papier |
| `atChSlug` | t | 176 o | [PONT-A] P3ter — EXPORT CHAPITRE POUR L'IA DE RELECTURE Le chapitre TEL QU'IL EST (titre, entrée, compétences, séances complètes : | atChExporter, atExporterDoc |
| `atChampChapitre` | champ,val | 566 o | (sans commentaire) affiche/emploie : « le champ \u00ab  ·  \u00bb du chapitre » | atEditerChapitreRendre |
| `atChampItem` | j,k,champ,val | 682 o | (sans commentaire) affiche/emploie : « le champ \u00ab  » | atEditerChapitreRendre |
| `atChampSeance` | j,champ,val | 1399 o | (sans commentaire) affiche/emploie : « \u00e9crivain d · \u00e9craser (atProposerSommaire), et l » | atEditerChapitreRendre |
| `atChapitreLiaisons` | ch | 300 o | le compteur qui s'apaise : les items sans liaison d'un chapitre | atRendreChapitres |
| `atChapitresAssurer` | — | 334 o | (sans commentaire ni indice) | atChapitresRecharger, atRendreListe |
| `atChapitresDe` | niveau | 343 o | Les chapitres d'un niveau, triés par ordre — [{num,titre,ordre}] | atAdresseAffichage, atCtxAffichage, atHtmlRattachement, atIAValiderAdresse (+1) |
| `atChapitresRecharger` | — | 79 o | (sans commentaire ni indice) | atRendreChapitres |
| `atChargerChapitres` | niveau,cb | 1067 o | (sans commentaire) affiche/emploie : « écrit jamais dans l » | addChapter, atChapitresAssurer, atEditerChapitre, atHtmlRattachement (+7) |
| `atChargerListe` | — | 237 o | LA LISTE DES FEUILLES — créer · ouvrir · dupliquer · supprimer | atDupliquerDoc, atRetourListe, atSupprimerDoc, atelierOuvrir |
| `atChargerOutils` | — | 50 o | M-PROMPT-4 : la liste des outils vient du hub, où les apps l'ont publiée. | — |
| `atCodeDe` | nom | 219 o | (sans commentaire ni indice) | atLotContextes |
| `atCompterLignes` | t | 91 o | (sans commentaire) affiche/emploie : « ).filter(function(l){ return l.trim()!== » | — |
| `atConfirmerEnr` | — | 1087 o | (sans commentaire) affiche/emploie : « Archivage puis enregistrement\u2026 · ;     }else{       if(f)f.textContent= » — touche #at-ia-copie, #at-ia-tpl-vue | atEnregistrerAvecDiff |
| `atCorbeilleCle` | motif | 232 o | Suppression : dénombrement affiché → archive corbeille (via _sitePut : | atIARemplacerConfirme, atSupprimerChapitre, atSupprimerDoc, chInjecterConfirme (+2) |
| `atCreneauSel` | — | 83 o | (sans commentaire) touche #at-dr-creneau | atDebutPropose, atDrJouerClic, atDrMajUtile |
| `atCtxAffichage` | ctxVue,quoi | 458 o | (sans commentaire) affiche/emploie : « ;   if(quoi=== · ){     if(!ctxVue.chapitre)return  » | atelierDocumentHTML |
| `atCtxDeChapitre` | ref | 496 o | [PONT-D] L'ANCRAGE CONTEXTUEL — quand une feuille est rendue DEPUIS un contexte (niveau/chapitre/séance de la navigation), l'en-tête se résout DU CONTEXTE ; | ed2FeuilleHtml, ed2Imprimer, ed2OuvrirOnglet |
| `atDateFr` | v | 133 o | NB : formatage date robuste | atelierDocumentHTML |
| `atDebutPropose` | — | 161 o | (sans commentaire) affiche/emploie : « )[0]), f=atMn(c.split( » | atDrMonter, atDrSynchroDebut |
| `atDeposerFeuille` | docId,doc,cb | 1733 o | LE DÉPÔT — l'item par l'écrivain unique ; l'ENVOI n'est plus écrit ici : il est encha\u00een\u00e9 par l'appelant, toujours via atEnvoyerVersion (LOT11-\u2461). | atDeposerToutes, atProposerDepot |
| `atDeposerToutes` | niveau,chnum,snum | 757 o | [Les déposer] du rappel — enchaîne les dépôts, garde nominative de 2b réutilisée. | renderSeance |
| `atDiffHtml` | av,ap | 1364 o | (sans commentaire) affiche/emploie : « <div class= · ;   if(z.length){     h+= » | atArchivesComparer, atEnregistrerAvecDiff |
| `atDiffLignes` | av,ap | 639 o | ④ LE DIFFÉRENTIEL — par lignes, sans dépendance | atDiffHtml |
| `atDocNeuf` | — | 434 o | modèle d'un document neuf | atIAInjecterAvecDestination, atIAInjecterNeuve, atNouvelleFeuille, edCreerFeuilleIci (+1) |
| `atDocsAssurer` | cb | 309 o | (sans commentaire ni indice) | renderSeance |
| `atDupliquerChapitre` | level,chnum | 960 o | (sans commentaire) affiche/emploie : « original */   copie.title=(copie.title··( · );return;}     chapitresData[level][nk]=copie;     atInfo( » | atRendreChapitres, ctxEntreesChapitre |
| `atDupliquerDoc` | id | 534 o | (sans commentaire) affiche/emploie : «  (copie) · +nid,copie,function(ok){     if(!ok){atInfo( » | atRendreListe |
| `atEcartDetail` | vivant,envoye | 1306 o | SITE-COURS-2d · le cœur de la mesure d'écart, désormais DÉTAILLÉ : il compte ET nomme les zones touchées, au niveau de la SECTION (libellés que la feuille connaît d'elle-même). | atEnvoiEcart, atOuvrirDoc |
| `atEcranDupliquer` | sk,n | 469 o | (sans commentaire) affiche/emploie : « Écran dupliqué — séance  » | _drEntreesEcran |
| `atEcranEnvoyer` | skSrc,n,skDst,posDst | 693 o | (sans commentaire) affiche/emploie : « Écran envoyé (départ) — séance  · Écran reçu — séance  » | _drEntreesEcran |
| `atEcranSupprimer` | sk,n | 188 o | (sans commentaire) affiche/emploie : « Écran supprimé — séance  » | _drEntreesEcran |
| `atEditerChapitre` | level,chnum | 933 o | L'ÉDITEUR DE CHAPITRE, EN PLACE — chaque champ écrit SON chemin précis, jamais un nœud entier, jamais `published`. Le chapitre du site reste l'unique objet : pas de copie parallèle. | atRendreChapitres, ctxEntreesChapitre, renderChapterCard, sesReprendre |
| `atEditerChapitreRendre` | — | 14023 o | (sans commentaire) affiche/emploie : « <div class= · >Ce chapitre n\u2019est plus l\u00e0.</div> » — touche #at-zone, #ed2-charte | _applyLinkEcrire, _edLierEcrire, atEditerChapitre, atRendreListe (+22) |
| `atEditerChapitreSortie` | — | 193 o | (sans commentaire ni indice) | atEditerChapitreRendre |
| `atEnregistrerAvecDiff` | — | 402 o | ③ + ④ : le différentiel s'affiche, l'archive part AVANT, Paul décide. | atBlocEdition |
| `atEnregistrerMaintenant` | suite | 3337 o | l'aperçu suit en direct | atEtat, atIAInjecterAvecDestination, atIAInjecterNeuve, atIARemplacerConfirme (+4) |
| `atEnvoiDefautLire` | cb | 138 o | Le message par défaut vit en /site/atelier/config/messageEnvoiDefaut ; défaut codé sinon. | atEnvoyer, atEnvoyerParDefaut, edEnvoyerManquantes, edPublierItem (+1) |
| `atEnvoiEcart` | vivant,envoye | 45 o | (sans commentaire ni indice) | atEnregistrerMaintenant |
| `atEnvoyer` | — | 2060 o | (sans commentaire) affiche/emploie : « );     var prerempli=defaut.split( · ).join(dateFr);     var old=document.getElementById( » — touche #at-envoi-defaut, #at-envoi-msg, #at-envoi-non — hub /site/atelier/config/messageEnvoiDefa | atEnregistrerMaintenant, atEnvoyerClic |
| `atEnvoyerClic` | — | 913 o | L'ENVOI — modale au message éditable (le défaut se conserve, ne s'écrase que sur demande explicite par la case). La date du jour remplace <date>. | atRendreEditeur |
| `atEnvoyerParDefaut` | docId,doc,cb | 216 o | [LOT11-\u2461] L'ENVOI PAR D\u00c9FAUT \u2014 le d\u00e9p\u00f4t envoie sans c\u00e9r\u00e9monie (message par d\u00e9faut), TOUJOURS par l'\u00e9crivain unique atEnvoyerVersion. | atDeposerToutes, atProposerDepot |
| `atEnvoyerVersion` | docId,doc,msg,premier,cb | 854 o | [LOT7b-②④] L'ÉCRIVAIN UNIQUE DE L'ENVOI, extrait d'atEnvoyer : | atEnvoyer, atEnvoyerParDefaut, edEnvoyerManquantes, edPublierItem (+1) |
| `atEsc` | s | 163 o | M-MANIFESTE (02/08) — BUG DE PRODUCTION CORRIGÉ. La classe capturait l'apostrophe DROITE (U+0027) mais la table définissait la TYPOGRAPHIQUE (U+2019) : toute apostrophe droite rendait `undefined`. | _produitSelectHTML, _profSectionArchi, atArchiveRelire, atArchiveRestaurer (+62) |
| `atEtat` | mode | 774 o | (sans commentaire) affiche/emploie : « ;}   else if(mode=== · ;}   else if(mode=== » — touche #at-etat | atEnregistrerMaintenant, atEnvoyer, atMarquerModifie, atRendreEditeur |
| `atExporterDoc` | id | 2217 o | [PONT-B] EXPORT DE FEUILLE POUR L'IA DE RECR\u00c9ATION Le JSON AU FORMAT D'INJECTION (round-trip) : | atRendreListe |
| `atFeuilleDeposee` | docId,doc | 531 o | [LOT11-\u2460\u24d0] LA SEULE V\u00c9RIT\u00c9 du \u00ab d\u00e9pos\u00e9e \u00bb : un DOCUMENT de la s\u00e9ance pointe la feuille \u2014 c'est lui qui fait foi. | atEnvoyer, atEnvoyerClic |
| `atFeuilleDepotPoser` | docId,level,chnum,snum,itemId,cb | 1616 o | [LOT8-\u2469] L'\u00c9CRIVAIN UNIQUE du champ depot pos\u00e9 par une LIAISON : | _edLierEcrire, atDeposerFeuille, atEnvoyerClic, edIAdepuisTrou (+1) |
| `atFeuilleProduitPoser` | id,prod | 1278 o | [C5-AR] requalifier une feuille existante : les six feuilles de Paul portent toutes `fiche_seance`. UNE écriture fine, le seul champ produit. | atProduitMenu |
| `atFeuillesAdresseesA` | niveau,chnum,snum | 322 o | Les feuilles adressées à une séance et non déposées (②). | atDeposerToutes, renderSeance |
| `atHhmm` | m | 109 o | (sans commentaire ni indice) | atDebutPropose, atDrMaintenant |
| `atHtmlBlocs` | id,c | 1746 o | (sans commentaire) affiche/emploie : « <div class= · <div class= » | atHtmlCase |
| `atHtmlCase` | id | 924 o | (sans commentaire) affiche/emploie : « <div class= ·  data-case-id= » | — |
| `atHtmlChamp` | id,ch,vals,fn,idx | 753 o | (sans commentaire) affiche/emploie : « ){     var txt=Array.isArray(v)?v.join( · );     return  » | atHtmlBlocs, atHtmlChampsUnique |
| `atHtmlChampsUnique` | id,c | 1271 o | champs d'une composante unique (structure non multiple) | atHtmlCase |
| `atHtmlRattachement` | — | 3758 o | (sans commentaire) affiche/emploie : « état claire      (« Où va cette feuille ? » tant que rien n · <div class= » | atRendreEditeur |
| `atHtmlSection` | cle,titre,corps,extra | 330 o | Une section d'éditeur en accordéon — l'état tient la session d'édition (AT.sectionsOuvertes), remis à zéro par atOuvrirDoc. | atRendreEditeur |
| `atIdsStructurels` | t | 533 o | Les identifiants structurels : ce qui, disparu, casse l'aval. | atZonesCritiques |
| `atImpBarreMaj` | — | 354 o | (sans commentaire) affiche/emploie : « \ud83d\udda8 Imprimer la s\u00e9lection ( · ;b.disabled=!n;}   var t=document.getElementById( » — touche #at-imp-btn, #at-imp-tout | atImpCocher |
| `atImpCocher` | id,val | 39 o | (sans commentaire ni indice) | atRendreListe |
| `atImpToutCocher` | val | 92 o | (sans commentaire ni indice) | atRendreListe |
| `atImprimer` | — | 868 o | Impression : le LOT ENTIER si la feuille est pour toute la classe ; sinon la feuille courante. Même document que l'aperçu (aucune divergence possible). | atRendreEditeur |
| `atImprimerSelection` | — | 782 o | (sans commentaire) affiche/emploie : « ÉTAT DU HUB, PAS CELUI D · ;       else alert( » — touche #at-imp-note | atRendreListe |
| `atImprimerSelection2` | — | 1828 o | (sans commentaire) affiche/emploie : « Fiches MJPC \u2014  · ));   var corps= » — touche #at-imp-note | atImprimerSelection |
| `atInfo` | msg | 69 o | petites modales de l'atelier (pas de prompt/confirm natifs) | _drCloreHeureRestee, _drTraceReprendre, _edLierEcrire, addChapter (+58) |
| `atInfoComposante` | id | 67 o | bulles d'info : le texte vient du schéma, jamais d'un attribut onclick | atHtmlCase |
| `atInfoGroupe` | i | 49 o | (sans commentaire ni indice) | atRendreEditeur |
| `atInfoInjection` | voie | 942 o | ⓘ des voies d'injection — la substance que les modales de chInjecter disent déjà, mais AVANT le clic. | chAfficherInventaire |
| `atInfoProduits` | — | 190 o | (sans commentaire ni indice) | atRendreEditeur |
| `atInfoRatt` | — | 235 o | (sans commentaire ni indice) | atHtmlRattachement |
| `atItemPointant` | ref,niveau,chnum,snum | 378 o | L'item de la séance qui pointe cette feuille, s'il existe — {itemId,item}·null | atDeposerFeuille, atEnregistrerMaintenant, atFeuilleDeposee, atFeuillesAdresseesA |
| `atLignes` | s | 42 o | (sans commentaire ni indice) | atListe, atMultiligne |
| `atListe` | v | 210 o | (sans commentaire ni indice) | atelierDocumentHTML |
| `atLotContextes` | — | 330 o | L'APERÇU NAVIGABLE — clone du patron previewIdx de correction_dictee : élève par élève quand la feuille est nominative ; l'iframe srcdoc porte LE document même qui s'imprimera. | atImprimer, atOuvrirOnglet, atRendreApercu |
| `atMarquerModifie` | — | 397 o | PERSISTANCE — patron setMeta : l'écran suit immédiatement, la base suit avec un débounce ; le brouillon local part À CHAQUE frappe. | atAjouterBloc, atAppliquerProduit, atBougerBloc, atOuvrirDoc (+7) |
| `atMessageApercu` | e | 242 o | L'écouteur du message d'aperçu — STRICT : seul le type 'at-va' venant de l'iframe d'aperçu est entendu, tout le reste est ignoré ; | — |
| `atMn` | s | 58 o | (sans commentaire ni indice) | atDebutPropose, atDrJouerClic, atDrMajUtile, atT5Reste (+1) |
| `atModaleChoix` | msg,boutons | 1176 o | (sans commentaire) affiche/emploie : « ;   var bts=boutons.map(function(b,i){return  ·  at-btn-prim » — touche #at-modale | atEnregistrerMaintenant, atIAInfo, atIAInjecterAvecDestination, atIARemplacer (+18) |
| `atMultiligne` | s | 45 o | (sans commentaire ni indice) | — |
| `atNouvelleFeuille` | — | 128 o | (sans commentaire ni indice) | atRendreListe |
| `atNouvelleFeuilleIA` | — | 782 o | (sans commentaire) affiche/emploie : « atelier, pas du chapitre */   /* [8.59.2] LA PORTE IA N · aucun JSON n » | atRendreListe |
| `atOnglet` | o | 143 o | (sans commentaire ni indice) | atRendreListe |
| `atOrdreSeme` | n,seed | 245 o | Mélange déterministe (appariement statique) — pas de hasard : deux impressions identiques | — |
| `atOuvrirDoc` | id | 2107 o | (sans commentaire) affiche/emploie : « ouverture (mesure d · ,function(v){AT.envoiDoc=v··null;});}   /* [PONT-C] l » | atRendreListe, edCreerFeuilleIci, edEditerFeuille, edOuvrirItem |
| `atOuvrirOnglet` | — | 296 o | (sans commentaire) affiche/emploie : « Ouverture impossible :  » | atRendreEditeur |
| `atP2AppliquerDeroules` | level,chnum,json,politique | 1742 o | L'application : rapprocher les séances (par clé d'abord, par titre sinon) et écrire les trames normalisées. politique='completer' (défaut) ajoute à la suite ; 'remplacer' substitue. | — |
| `atP2NormaliserBloc` | b | 899 o | (sans commentaire) affiche/emploie : « )return {id:atP2Uid(),t: · ),vues:0};   if(t=== » | — |
| `atP2Uid` | — | 51 o | (sans commentaire ni indice) | atP2AppliquerDeroules, atP2NormaliserBloc |
| `atP2ValiderDeroule` | o,V | 1932 o | (sans commentaire) affiche/emploie : « séance n°  · a une clé invalide («  » | — |
| `atProduitMenu` | id,prodCourant | 92 o | (sans commentaire ni indice) | atRendreListe |
| `atProduitRayon` | prod | 73 o | (sans commentaire) affiche/emploie : « ];   return (p&&p.rayon)?p.rayon: » | collectRayons |
| `atPromptComplet` | — | 124 o | Le texte tel qu'il PARTIRA : repères remplis. C'est ce que le champ montre. | atArchiveRestaurer, atBlocEdition, atConfirmerEnr, atEnregistrerAvecDiff (+2) |
| `atPromptComposantes` | — | 1503 o | La liste des composantes, GÉNÉRÉE. Une composante ajoutée au schéma y paraît sans qu'aucune liste soit retouchée (Q1 : toutes les non réservées). | atPromptTexte |
| `atPromptDirectives` | — | 161 o | MICRO 04/08 — les trois pièces du champ visible. | atIATplTouche |
| `atPromptPieceAdresse` | — | 784 o | (sans commentaire) affiche/emploie : « ;   var l=[AT_ADRESSE_DEBUT, · ];   l.push( » | atPromptTexte |
| `atPromptSansAdresse` | t | 212 o | (sans commentaire ni indice) | atConfirmerEnr |
| `atPromptTexte` | — | 1181 o | (sans commentaire) affiche/emploie : « état de l · +CH_ENTREES_OUVERTES));   if(t.indexOf( » | atIACopier, atPromptComplet |
| `atProposerDepot` | suite | 1284 o | La proposition de dépôt (①) — jamais automatique, jamais insistante. | atEnregistrerMaintenant, atEnvoyerClic |
| `atProposerSommaire` | level,chnum,apres | 1241 o | le sommaire PROPOSÉ — jamais automatique | atEditerChapitreSortie, chInjecterConfirme, ctxEntreesChapitre |
| `atRattPoserChapitre` | r,num | 224 o | Poser ou effacer l'adresse : les libellés viennent du HUB, jamais retapés. | atSetRatt |
| `atRattPoserSeance` | r,num | 196 o | (sans commentaire ni indice) | atSetRatt |
| `atRattRecharger` | niveau | 84 o | (sans commentaire ni indice) | atHtmlRattachement |
| `atRegenererSommaire` | level,chnum,apres | 628 o | (sans commentaire) affiche/emploie : « Feuille sommaire r\u00e9g\u00e9n\u00e9r\u00e9e. » | atProposerSommaire |
| `atRendreApercu` | — | 1993 o | (sans commentaire) affiche/emploie : « ,function _rsc(){     fr.removeEventListener( · <button class= » — touche #at-ap-nav, #at-apercu | atApPrec, atApSuiv, atRendreEditeur |
| `atRendreChapitres` | — | 2186 o | [LOT11-\u2462] LA ZONE \u00ab \u00c0 CLASSER \u00bb A V\u00c9CU (LOT\u2467\u2192\u2468\u21928.55.1) : | atRendreListe |
| `atRendreEditeur` | — | 3351 o | (sans commentaire) affiche/emploie : « iframe d · <div class= » — touche #at-apercu, #at-zone | atAjouterBloc, atAllerComposante, atAppliquerProduit, atBougerBloc (+14) |
| `atRendreListe` | — | 5688 o | (sans commentaire) affiche/emploie : « \u00e9diteur de chapitre reste ma\u00eetre jusqu · arriv\u00e9e. */   [ » — touche #at-zone | addChapter, atChapitresAssurer, atChapitresRecharger, atChargerListe (+11) |
| `atRetirerBloc` | i | 131 o | (sans commentaire ni indice) | atHtmlBlocs |
| `atRetourListe` | — | 83 o | (sans commentaire ni indice) | atRendreEditeur |
| `atRoster` | slug | 154 o | fin [C5-3a-c] | atHtmlRattachement, atLotContextes |
| `atSeances` | ch | 349 o | [C5-3a] la réalité Firebase : `seances` arrive en TABLEAU quand les index sont denses, en OBJET quand l'index 0 manque (le trou du chapitre 1 réel). Une seule lecture pour tout le morceau : | atChapitreLiaisons, atEditerChapitreRendre, atIAInjecterAvecDestination, atProposerSommaire (+18) |
| `atSeancesDe` | niveau,chnum | 402 o | Les séances d'un chapitre, triées par ordre — [{num,titre,ordre}] | atAdresseAffichage, atCtxAffichage, atHtmlRattachement, atIAValiderAdresse (+1) |
| `atSeancesRangSuivant` | ch | 257 o | (sans commentaire ni indice) | chCalculerEcritures, chInjecterConfirme |
| `atSectionToggle` | cle | 128 o | (sans commentaire ni indice) | atHtmlSection |
| `atSetBlocReforme` | i,k,v | 144 o | (sans commentaire ni indice) | atHtmlBlocs |
| `atSetBlocValeur` | i,k,v | 145 o | (sans commentaire ni indice) | — |
| `atSetRatt` | k,v | 809 o | (sans commentaire) affiche/emploie : « ){     r.classe= · ;     /* SITE-COURS-2b : l » | atHtmlRattachement |
| `atSetTitre` | v | 75 o | (sans commentaire ni indice) | atRendreEditeur |
| `atSetValeur` | id,k,v | 258 o | (sans commentaire ni indice) | atHtmlChampsUnique |
| `atSignalerModif` | — | 156 o | Le bouton reste gris tant que rien n'a changé : un bouton actif sans rien à enregistrer apprend à cliquer sans regarder. | atBlocEdition, atConfirmerEnr |
| `atSiteDelete` | chemin,cb | 27 o | M-ÉCHECS-1 : le socle vérifie désormais — délégation pure, cb(ok, issue) | atSupprimerDoc |
| `atSiteGetDocs` | cb | 292 o | Le magasin du mode test est PLAT par chemin exact : écrire des documents aux chemins enfants puis lire le parent donnerait null. | atChargerListe, atDocsAssurer, atEditerChapitre, atImprimerSelection (+5) |
| `atSitePut` | chemin,valeur,cb | 31 o | Durcissement local (complément ② du feu vert) : _sitePut/_siteDelete du socle répondent true dès que fetch se résout — un refus HTTP (500, règles de sécurité) y passe pour un succès. | atArchiverPuisEcrire, atDupliquerDoc, atEnregistrerMaintenant, atEnvoyer (+5) |
| `atStatutFeuille` | d,ref | 2123 o | Le STATUT d'une feuille (③) — croisé avec la vérité terrain (chapitresData). | atRendreListe |
| `atSupprimerChapitre` | level,chnum | 1827 o | SUPPRESSION D'UN CHAPITRE — patron feuille : corbeille D'ABORD (l'échec abandonne tout), ou sans copie ; garde « prévenu, pas bloqué » si publié. | atRendreChapitres, ctxEntreesChapitre, deleteChapter |
| `atSupprimerDoc` | id | 2616 o | (sans commentaire) affiche/emploie : « +id,function(){           atSiteDelete(AT_NOEUD+ · +id,function(ok2){             if(!ok2){atInfo( » — hub site/atelier/documents/ | atRendreListe |
| `atTaxoLibelle` | code | 1036 o | [11e adaptation · 支] le libellé d'une notion depuis la même source que la datalist | — |
| `atTbNiveau` | — | 41 o | le niveau des tableaux ②③ — celui de la page, changeable en tête d'onglet | atChapitresAssurer, atChapitresRecharger, atOnglet, atRendreChapitres (+1) |
| `atTbNiveauChange` | v | 32 o | (sans commentaire ni indice) | atTbSelecteur |
| `atTbSelecteur` | — | 258 o | (sans commentaire) affiche/emploie : « <select class= ·  onchange= » | atRendreChapitres |
| `atTempsUtile` | — | 86 o | (sans commentaire ni indice) | _drPaquetHeure, atDrMonter, atT5Etat, atVecuEcrire |
| `atTexteOuReforme` | vals,refs,cle,reformOn | 108 o | Le texte d'une composante 'reforme' : principal ou reformulation selon la bascule H | — |
| `atToggleCase` | id,val | 843 o | (sans commentaire) affiche/emploie : « ABORD */   if(val&&gris){     var msg=(gris=== » | atHtmlCase |
| `atTrouverChapitre` | chs,t | 462 o | (sans commentaire ni indice) | atIAValiderAdresse |
| `atTrouverSeance` | ss,t | 422 o | (sans commentaire ni indice) | atIAValiderAdresse |
| `atValeurTypee` | composanteId,k,v | 233 o | Q6 (décision de la conscience) : un champ de type liste stocke un TABLEAU de valeurs, jamais un texte à lignes — la Concordance n'aura rien à reparser. | atIAAppliquer, atSetBlocValeur, atSetValeur, ed2SetBlocFeuille (+1) |
| `atVoirPanneau` | level,chnum | 332 o | passerelle atelier → panneau : fermer l'atelier, déplier le chapitre, y aller | atRendreChapitres, chInjecterConfirme, ctxEntreesChapitre |
| `atZoneLignes` | cls,n | 106 o | Zones de travail | — |
| `atZonesCritiques` | av,ap | 1112 o | ④ LES ZONES CRITIQUES — on NOMME ce qui manque. Jamais un refus. | atDiffHtml |
| `atelierCharteCSS` | — | 7679 o | LA CHARTE SOBRE — EN DUR (décision : la charte est une décision de conception). Noir sur blanc, serif pour le texte long, hiérarchie explicite. Patrons : | atImprimerSelection2, atelierPageHTML, ed2CharteScopee, ed2ImprimerChapitre |
| `atelierDocumentHTML` | doc,ctxEleve,options | 6868 o | (sans commentaire) affiche/emploie : « ,     eleveCode:(ctxEleve&&ctxEleve.code)·· · ,     anneeScolaire:(typeof _anneeScolaire=== » | atImprimerSelection2, atelierPageHTML, ed2FeuilleHtml, ed2ImprimerChapitre |
| `atelierFermer` | — | 279 o | (sans commentaire) touche #atelier-ecran | atVoirPanneau |
| `atelierIntitule` | doc,id | 186 o | LA FEUILLE ENTIÈRE — atelierDocumentHTML(doc, ctxEleve) → HTML autonome. Fonction PURE : aucune écriture, aucune lecture réseau (§XIII.1ter). | atelierRenduComposante |
| `atelierOuvrir` | — | 659 o | ouverture / fermeture de l'écran | renderChapterCard, sesReprendre |
| `atelierPageHTML` | doc,listeCtx,options | 1975 o | Le DOCUMENT COMPLET autonome (page HTML avec sa charte sobre et son @media print) — c'est LUI que l'aperçu affiche (srcdoc) et que l'impression imprime. | atImprimer, atOuvrirOnglet, atRendreApercu, ed2Imprimer (+2) |
| `atelierRenduComposante` | doc,id,vals,refs,ctx | 176 o | (sans commentaire) affiche/emploie : « ;   var f=ATELIER_FORMES[c.forme];if(!f)return  » | atelierDocumentHTML |


## ATELIER — prompts et écrans IA

| fonction | args | taille | ce qu'elle fait | appelée par |
|---|---|---|---|---|
| `atIAApercu` | — | 2654 o | L'APERÇU, puis LE CHOIX (deux boutons de même poids, aucun pré-choisi) | atIAVerifier |
| `atIAAppliquer` | doc,o | 2834 o | la recopie contrôlée — le JSON épouse atDocNeuf, aucun traducteur | atIAInjecterAvecDestination, atIAInjecterNeuve, atIARemplacerConfirme |
| `atIAChargerPrompt` | suite | 232 o | (sans commentaire) affiche/emploie : « +AT_IA.produit,function(v){     AT_IA.tpl=(typeof v=== » | atIAOuvrir, atNouvelleFeuilleIA, chOuvrir, edIAdepuisTrou |
| `atIACopier` | — | 1183 o | (sans commentaire) affiche/emploie : « IL VOIT.      Copier autre chose que ce qui est à l · Prompt copi\u00e9. » — touche #at-ia-copie, #at-ia-tpl-vue | atBlocEdition |
| `atIAEnregistrerTpl` | — | 571 o | APRÈS l'écriture du HTML, jamais avant | atIAEnregistrerTplVue, atIAModifier |
| `atIAEnregistrerTplVue` | — | 741 o | (sans commentaire) affiche/emploie : « ;       var b=document.getElementById( · );if(b)b.disabled=true;     }else if(d)d.textContent= » — touche #at-ia-copie, #at-ia-enr, #at-ia-tpl-vue | — |
| `atIAInfo` | — | 454 o | (sans commentaire ni indice) | atIARendre |
| `atIAInjecterAvecDestination` | o | 2594 o | (sans commentaire) affiche/emploie : « <option value= · >S\u00e9ance  » | atIAInjecterNeuve |
| `atIAInjecterNeuve` | — | 1024 o | (sans commentaire) affiche/emploie : « Feuille cr\u00e9\u00e9e — te revoil\u00e0 dans ton chapitre. » | atIAApercu |
| `atIAModifier` | — | 1623 o | (sans commentaire) affiche/emploie : « ;   z.innerHTML= · at-ia-zone at-ia-zone-haute » — touche #at-zone | atBlocEdition, atIACopier |
| `atIAOuvrir` | — | 174 o | L'écran | atRendreEditeur |
| `atIARemplacer` | — | 597 o | (sans commentaire) affiche/emploie : « Remplacer \u00ab  · Sans titre » | atIAApercu |
| `atIARemplacerConfirme` | — | 1413 o | (sans commentaire) affiche/emploie : « +AT.docId;   var payload={_meta:{motif: · ARCHIVE PART AVANT. Si elle échoue : ABANDON, rien n » — touche #at-ia-msg | atIARemplacer |
| `atIARendre` | — | 1793 o | (sans commentaire) affiche/emploie : « <div class= · Retour au chapitre » — touche #at-zone | atIAModifier, atIAOuvrir, atNouvelleFeuilleIA, edIAdepuisTrou |
| `atIARestaurerTpl` | — | 104 o | (sans commentaire) touche #at-ia-tpl | atIAModifier |
| `atIATplTouche` | — | 319 o | (sans commentaire) affiche/emploie : « enregistrement ne s » — touche #at-ia-enr, #at-ia-tpl-vue | — |
| `atIAValider` | o | 4143 o | LA VÉRIFICATION — refus NOMMÉS, et ils s'ACCUMULENT (jamais le premier seul) | atIAVerifier |
| `atIAValiderAdresse` | o,niveau | 1969 o | L'ADRESSE VENUE D'UNE IA SE VALIDE — refus NOMMÉS, libellés du hub Comparaisons STRICTES en codepoints (une apostrophe courbe n'est pas une droite, « XIXème » n'est pas « XIXe ») : | atIAVerifier |
| `atIAVerifier` | — | 1896 o | (sans commentaire) affiche/emploie : « ;   var msg=document.getElementById( · );   if(ap)ap.innerHTML= » — touche #at-ia-apercu, #at-ia-coller, #at-ia-msg | atIARendre |


## CHAPITRE — injection JSON, inventaire, les quatre voies

| fonction | args | taille | ce qu'elle fait | appelée par |
|---|---|---|---|---|
| `chAfficherInventaire` | — | 7580 o | (sans commentaire) affiche/emploie : « intitulant \u00ab \u2026 (proposition) \u00bb, l · est PAS retir\u00e9 (c » — touche #ch-inv | chApresEcriture, chVerifier |
| `chAlerteGraphies` | — | 919 o | Signalement discret des deux graphies de classes (dette, SANS bouton de correction) | chRendre |
| `chApresEcriture` | — | 521 o | [LOT B \u2463d] APR\u00c8S L'\u00c9CRITURE : la liste dit vrai, sans rechargement de page. Le LOT A avait trait\u00e9 `addChapter` (le bouton du panneau prof) ; | chInjecterConfirme |
| `chCalculerEcritures` | voie,chaps | 3331 o | LA GARDE D'ATTERRISSAGE — le calcul des écritures, extrait de chInjecterConfirme, MONTRÉ avant le clic. L'appariement par titre (celui qui a mélangé le chapitre 1 le 05/08) devient VISIBLE. | chInjecter, chInjecterConfirme |
| `chChargerEtatAnnee` | cb | 162 o | SITE-COURS-2e : l'état de l'année, lu pour le niveau visé. | chOuvrir, chRendre |
| `chChargerTaxo` | cb | 112 o | (sans commentaire ni indice) | atDrJouerClic, atRegenererSommaire, chOuvrir, edCreerFeuilleIci (+1) |
| `chCompetencesC4` | taxo | 224 o | Les compétences du cycle 4, LUES dans la taxonomie (jamais recopiées). | chEtatAnnee, chSommaire, chValiderDeclaration, chVocabulaireCompetences |
| `chEntreesDuNiveau` | niv | 39 o | (sans commentaire ni indice) | atPromptTexte, chEtatAnnee, chSommaire, chValiderDeclaration (+1) |
| `chEtatAnnee` | chaps,niv,taxo | 1533 o | L'ÉTAT DE L'ANNÉE — GÉNÉRÉ depuis la liste des chapitres du niveau. chInventaire regarde UN chapitre ; ici on lit la LISTE, parce que l'alternance ne se décide qu'en voyant l'année. | chChargerEtatAnnee |
| `chIdsTaxo` | taxo | 436 o | Les identifiants valides, à plat — pour refuser une notion inventée EN LA NOMMANT. | atTaxoLibelle, chInventaire, chValiderChapitre, edLibellesTaxo |
| `chInfo` | — | 774 o | (sans commentaire ni indice) | chRendre |
| `chInjecter` | voie | 3106 o | LES TROIS VOIES. Écriture PAR INDEX, jamais la liste entière, jamais push. | chAfficherInventaire |
| `chInjecterConfirme` | voie | 6223 o | (sans commentaire) affiche/emploie : « \u00c9criture en cours\u2026 ·  (proposition) » — touche #ch-msg, #ch-som-oui | chInjecter |
| `chInventaire` | existant,propose,taxo | 2429 o | L'INVENTAIRE FACE À FACE — l'existant PRÉCIS, pas un compte. | chAfficherInventaire |
| `chNettoyerPublished` | o,garderRacine | 357 o | `published` n'est JAMAIS écrit par l'injection — nettoyage récursif. | atDupliquerChapitre, chCalculerEcritures, chInjecterConfirme |
| `chOuvrir` | — | 207 o | L'ÉCRAN — accès depuis la zone « Écrire avec une IA » | atRendreListe |
| `chRendre` | — | 1519 o | (sans commentaire) affiche/emploie : « ].map(function(n){     return  · );   z.innerHTML= » — touche #at-zone | chOuvrir |
| `chSommaire` | chapitre,niv,taxo,ecrit | 1170 o | LE SOMMAIRE — CALCULÉ. Séance de rang 0, avec ses items, publiable à part. Il doit SE SUFFIRE À LUI-MÊME : | atRegenererSommaire, chAfficherInventaire, chInjecterConfirme |
| `chSommaireObjet` | som | 126 o | (sans commentaire) affiche/emploie : « Sommaire du chapitre » | atRegenererSommaire, chInjecterConfirme |
| `chSommaireSeance` | som | 1121 o | La séance de rang 0 : une séance ORDINAIRE (elle porte des items comme les autres), publiable séparément. `published` n'est JAMAIS écrit ici. | chAfficherInventaire, chSommaireObjet |
| `chSommaireSuffisant` | som | 314 o | Le sommaire se suffit-il à lui-même pour l'IA du chapitre suivant ? Critère : pouvoir dire ce que le chapitre a travaillé SANS relire les séances. | chAfficherInventaire |
| `chValiderChapitre` | o,taxo | 2425 o | LA VALIDATION — motifs ACCUMULÉS, élément CITÉ, message qui dit quoi corriger. | chVerifier |
| `chValiderDeclaration` | o,taxo | 1283 o | LA VALIDATION de la déclaration : motifs ACCUMULÉS, élément CITÉ | chVerifier |
| `chVerifier` | — | 1605 o | (sans commentaire) affiche/emploie : « ;   var msg=document.getElementById( · );   CH.json=null;if(inv)inv.innerHTML= » — touche #ch-coller, #ch-inv, #ch-msg | chRendre |
| `chVocabulaireCompetences` | taxo | 171 o | (sans commentaire ni indice) | atPromptTexte |
| `chVocabulaireEntrees` | niv | 263 o | (sans commentaire ni indice) | atPromptTexte |
| `chVocabulaireTaxo` | taxo | 977 o | Le vocabulaire de la taxonomie, GÉNÉRÉ (mjpcPromptVocabulaire du canon §12). Chaque notion porte ses niveaux entre crochets : l'IA peut signaler elle-même un débordement d'attendus. | atPromptTexte |
| `chVocabulaireTypes` | — | 126 o | (sans commentaire ni indice) | atPromptTexte |
| `chargerAnnonces` | cb | 90 o | (sans commentaire) hub /site/annonces | _editerAnnonce, ecrireAnnonce, renderConsoleM8, supprimerAnnonce |
| `chargerBrevetDates` | cb | 458 o | (sans commentaire) hub /site/config/brevetDates | ecrireBrevetDate, m8BasculerModeTest, reinitialiserBrevetDates, restoreSession |


## DIVERS — socle du site

| fonction | args | taille | ce qu'elle fait | appelée par |
|---|---|---|---|---|
| `AC` | fam,nature,zone,lib,extra | 210 o | Constructeur compact d'une composante. fam: A..K · nature: 'donnee'·'structure'·'rendu' · zone: place dans la feuille extra: | — |
| `CH` | k,l,kind | 37 o | Raccourcis de champs | — |
| `addChapter` | level | 1569 o | =========== CRUD chapitres / séances / items =========== | renderChapitres |
| `addImageToGallery` | file,level,chnum,snum,itemId | 877 o | (sans commentaire) affiche/emploie : « \u23f3 Ajout image\u2026 · Image  » — ECRIT au hub | convertItemToGalleryAndAdd, uploadFileForChapterItem |
| `addItem` | level,chnum,snum | 199 o | (sans commentaire) affiche/emploie : « Nouvel item · Titre du nouvel item : » | renderSeance |
| `addSeance` | level,chnum | 819 o | (sans commentaire) affiche/emploie : « Nouvelle s\u00e9ance · Titre de la nouvelle s\u00e9ance : » — ECRIT au hub | ctxEntreesChapitre, edAjouterSeance, renderChapterCard |
| `apercuAnnoncesPourApp` | o, appId | 276 o | Aperçu : reproduit EXACTEMENT le filtre et le tri du lecteur de M6, pour montrer ce que lira une app donnée. | _blocAnnonces |
| `applyLevelTheme` | code | 838 o | (sans commentaire) affiche/emploie : « ;var bgLv=document.getElementById( · );var sunLv=document.getElementById( » — touche #bg-accueil, #bg-level, #horizon-accueil | openLevel |
| `applyLinkChanges` | newSource,newRef,newKind | 1268 o | (sans commentaire) affiche/emploie : « UNE RESSOURCE, ET IL LE DIT : si l · Remplacer la ressource » | linkModalApplyApp, linkModalApplyAtelier, linkModalApplyUrl, linkModalUnlink |
| `applyPublished` | level | 2504 o | (sans commentaire) affiche/emploie : « ;   });   var zA=document.querySelector( · );   var cA=document.getElementById( » — touche #admin-tabs-publish, #count-analyse-logique, #tab-btn- | basculerVue, loadPublished, togglePublishExtra, togglePublishTab |
| `archiveClass` | slug | 486 o | (sans commentaire) affiche/emploie : « Archiver la classe · Archiver \u00ab <b> » — ECRIT au hub | _profSectionClasses |
| `basculerAffichageCode` | — | 534 o | M8-IDENTITÉ — LES TROIS AXES (doctrine §I) ① QUI JE SUIS : TRACK.eleve (is_prof) — posé à la connexion, jamais par un raccourci. ② CE QUE JE VOIS : | — |
| `basculerVue` | — | 416 o | [LOT7-①] l'ancien circuit de dépôt (initAdminDragDrop_) et le registre getdocs (loadDocsList_) sont retirés — le dépôt vit dans initChapterDragDrop et la modale Lier. | handleBadgeTap |
| `classeTestId` | — | 32 o | 3. Classes de test (bac à sable) : convention unique "_test_<app>" Préfixe "_" = classe interne : jamais montrée aux élèves, jamais archivée dans les profils, nettoyable sans risque. | — |
| `cleClasse` | nom | 34 o | 2. Identité classe : la clé du hub EST l'identifiant Décision du 14/07/2026 : aucune app ne transforme le nom de classe. La clé de /classes (ex. "4E BANKSY") est l'unique étiquette de rangement. | ecrireClasse |
| `closeCreateClassModal` | — | 73 o | (sans commentaire) touche #class-modal | submitCreateClass |
| `closeGalleryViewer` | — | 116 o | (sans commentaire) touche #gallery-viewer-overlay | openGalleryViewer |
| `closeIntentSurvey` | skipped | 626 o | (sans commentaire) affiche/emploie : « ;     fetch(FIREBASE_BASE+ · ,{       method: » — touche #intent-overlay — ECRIT au hub | — |
| `closeLinkModal` | — | 99 o | (sans commentaire) touche #link-modal | _applyLinkEcrire |
| `closeProfPanel` | — | 110 o | M-MANIFESTE-2 : l'alerte bloquante | _activerProfilTest, _profSectionArchi, atelierOuvrir |
| `closeViewer` | — | 294 o | (sans commentaire) touche #doc-viewer, #doc-viewer-frame, #doc-viewer-newtab | — |
| `collectAutonomieItems` | level | 1135 o | (sans commentaire ni indice) | renderZoneAutonomie |
| `collectChapterItems` | level,kind,avecInvisibles | 2384 o | (sans commentaire ni indice) | _apercuOngletVide, collectRayons, gotoAnalyse, gotoDictee (+2) |
| `collectRayons` | level | 3031 o | [C5-AR] — LES RAYONS : ce qui vit éclaté dans les chapitres se retrouve PAR TYPE. Aucun second moteur : | renderRayons |
| `computeDiff` | target | 498 o | (sans commentaire ni indice) | _renderIntentTimer, updateTimers |
| `convertItemToGalleryAndAdd` | file,level,chnum,snum,itemId | 799 o | (sans commentaire) affiche/emploie : « \u23f3 Cr\u00e9ation galerie\u2026 » — ECRIT au hub | uploadFileForChapterItem |
| `ctxEntreesChapitre` | level,chnum | 1260 o | [LOT9-\u2464] LE MENU DU CHAPITRE \u2014 m\u00eame moteur (table + ctxOuvrir), AUCUN geste invent\u00e9 : chaque entr\u00e9e appelle une fonction existante (r\u00e8gle du miroir). | ctxSommaireOuvrir |
| `ctxEntreesItem` | d | 928 o | la TABLE — items : d = la ligne d'ed2Documents (objet réel, jamais un attendu) | ctxSommaireOuvrir |
| `ctxEntreesSeance` | j | 997 o | (sans commentaire) affiche/emploie : « Ouvrir / Modifier · #ed2-pan [data-sce= » | ctxSommaireOuvrir |
| `ctxFermer` | — | 81 o | (sans commentaire ni indice) | ctxOuvrir |
| `ctxOuvrir` | x,y,titre,entrees | 759 o | (sans commentaire) affiche/emploie : « ;   d.innerHTML= » | ctxSommaireOuvrir |
| `ctxSommaireCible` | t | 668 o | le BRANCHEMENT de ce lot : le sommaire de l'éditeur. Délégation (le sommaire se re-rend) ; l'objet se retrouve dans les DONNÉES, jamais déduit du DOM. | — |
| `ctxSommaireOuvrir` | x,y,cible | 633 o | (sans commentaire) affiche/emploie : « Chapitre  · S\u00e9ance  » | — |
| `currentSchoolYear` | — | 144 o | (sans commentaire) affiche/emploie : « +year;   return year+ » | openCreateClassModal |
| `deleteChapter` | level,chnum | 202 o | (sans commentaire) affiche/emploie : « atelier partagent le MÊME geste :      corbeille d » | renderChapterCard |
| `deleteClass` | slug | 915 o | (sans commentaire) affiche/emploie : « Supprimer la classe \u00ab  · },function(){     mjpcDeleteJson(FIREBASE_BASE+ » | _profSectionClasses |
| `deleteImageInGallery` | level,chnum,snum,itemId,imgId | 557 o | (sans commentaire) affiche/emploie : « Supprimer cette image · ,function(){   mjpcDeleteJson(FIREBASE_BASE+ » | renderItem |
| `deleteItem` | level,chnum,snum,itemId | 1166 o | (sans commentaire) affiche/emploie : « Supprimer l\u2019item · Supprimer l\u2019item \u00ab <b> » | edSupprimerItem, renderItem |
| `deleteSeance` | level,chnum,snum | 1506 o | (sans commentaire) affiche/emploie : « Supprimer la s\u00e9ance · Supprimer la s\u00e9ance \u00ab <b> » | edSupprimerSeance, renderSeance |
| `doLogin` | — | 3415 o | (sans commentaire) affiche/emploie : « ;   var err=document.getElementById( · );var status=document.getElementById( » — touche #val-btn, #val-code, #val-error | — |
| `drDoc` | — | 71 o | (sans commentaire ni indice) | _drHabiller, _drTitrerColonne, atDrSuiviAppliquer, atVecuAfficher |
| `drWin` | — | 77 o | la fenêtre du jeu — seul point d'accès | _drEidDuRang, _drEnvelopper, _drLibelles, _drPaletteOuvrir (+26) |
| `driveExtraireId` | texte | 248 o | [C5-3ac2] l'extraction d'id Drive, UNE fois pour toute l'application — le cœur de linkModalApplyUrl, partagé avec le dépôt d'image du diaporama. | linkModalApplyUrl |
| `ecartDate` | ts | 290 o | (sans commentaire) affiche/emploie : « jamais publi\u00e9 · date illisible » | ecartLigne |
| `ecartInfo` | — | 744 o | (sans commentaire ni indice) | ecartRendre |
| `ecartLigne` | id,entree,socleCourant | 442 o | (sans commentaire) affiche/emploie : « jamais publi\u00e9e · \u00e0 jour » | ecartRendre |
| `ecartOuvrir` | — | 281 o | (sans commentaire) affiche/emploie : « <div class= · >Lecture des fiches\u2026</div> » — touche #at-zone | — |
| `ecartRendre` | entrees,socleCourant | 1666 o | (sans commentaire) affiche/emploie : « <div class= ·  onclick= » | ecartOuvrir |
| `ecrireAnnonce` | id, texte, app | 799 o | (sans commentaire) affiche/emploie : « ).trim();   if(!texte){ alert( ·  + Date.now() +  » — hub /site/annonces | _blocAnnonces |
| `ecrireBrevetDate` | niveau, valeurISO | 590 o | (sans commentaire) affiche/emploie : « Date incompréhensible :  · La date n » — hub /site/config/brevetDates | _blocBrevet |
| `ecrireClasse` | db, nomClasse, eleves, meta, cb | 1213 o | 5. Écriture NON destructive d'une classe : ecrireClasse Remplace UNIQUEMENT la liste d'élèves ; préserve toute métadonnée existante (archivee, niveau, couleur, …) ; | — |
| `ensureEleveUuid` | eleve | 1656 o | (sans commentaire) affiche/emploie : « +eleve.prenom);   /* canon (accents décomposés) — l · ).then(function(r){if(!r.ok)throw new Error( » — ECRIT au hub | _loginEleveFound |
| `escapeHtml` | s | 122 o | (sans commentaire) affiche/emploie : « ;return String(s).replace(/&/g, » | _b2Check, _b2Confirm, _b2ExecReel, _b2RenderPick (+69) |
| `estClasseInterne` | nom | 48 o | (sans commentaire ni indice) | estClasseTest |
| `estClasseTest` | nom | 88 o | (sans commentaire) affiche/emploie : « CLASSE TEST » | — |
| `extractEleves` | fbClasse, cfgEleves | 993 o | 4. Lecture robuste d'un roster : extractEleves Tolère les 3 formats rencontrés dans les données réelles : | _b2Eleves, _deleteEleveCls, _drPrenomsDeLaClasse, _findEleveByName (+8) |
| `fichesAvancement` | n,total,id | 372 o | (sans commentaire) affiche/emploie : « en trouver qu · Lecture des fiches\u2026  » | fichesCliqueMaj, fichesMettreAJour |
| `fichesCharger` | — | 367 o | (sans commentaire) affiche/emploie : « ;   secuLire( · ).then(function(m){     var z=document.getElementById( » — touche #fiches-zone | fichesCliqueMaj, showProfSection |
| `fichesCliqueMaj` | — | 1214 o | (sans commentaire) affiche/emploie : « ;});   fichesAvancement(0,FICHES_APPS.length, · );     var pub=res.filter(function(r){return r.etat=== » — touche #fi-overlay | fichesOverlayMaj, fichesRendre |
| `fichesCompleterNoms` | lignes,cb | 247 o | (sans commentaire ni indice) | fichesCharger, fichesVerifierAlerte |
| `fichesDateFr` | ts | 160 o | (sans commentaire) affiche/emploie : « date illisible · mise \u00e0 jour le  » | fichesLignes |
| `fichesEtat` | entree,socle | 1093 o | ④ le calcul, corrigé : une fiche ABSENTE n'est jamais « à jour » | fichesLignes |
| `fichesExtraireObjet` | src,nom | 400 o | (sans commentaire ni indice) | fichesLireNom, fichesMajUne |
| `fichesInfo` | — | 767 o | (sans commentaire ni indice) | fichesRendre |
| `fichesLignes` | entrees,socle | 330 o | (sans commentaire) affiche/emploie : « jamais publi\u00e9e » | fichesCharger, fichesVerifierAlerte |
| `fichesLireNom` | id,cb | 318 o | (sans commentaire) affiche/emploie : « }).then(function(r){return r.ok?r.text(): » | fichesCompleterNoms |
| `fichesMajUne` | id,socle,cb | 2254 o | (sans commentaire) affiche/emploie : « }).then(function(r){     if(!r.ok)throw new Error( · d\u00e9claration illisible » | fichesMettreAJour |
| `fichesMettreAJour` | cb | 356 o | Un échec sur une app n'arrête pas les autres : chacune est indépendante. | fichesCliqueMaj |
| `fichesMomentFr` | — | 181 o | (sans commentaire ni indice) | fichesRendre |
| `fichesNormaliserJS` | txt | 1029 o | [C5-M16a] — LE NORMALISEUR CONSCIENT DES CHAÎNES. Cause racine du bouton qui amputait les fiches (mesurée sur les fichiers réels des apps, 06/08) : | — |
| `fichesOverlayFermer` | — | 66 o | (sans commentaire) touche #fi-overlay | fichesOverlayMaj |
| `fichesOverlayMaj` | — | 475 o | (sans commentaire) affiche/emploie : « est pas enfermé. */   var h=document.getElementById( · );   if(h&&!document.getElementById( » — touche #fi-ov-fermer, #fi-ov-fermer-hote, #fi-ov-maj | fichesVerifierAlerte |
| `fichesRendre` | lignes,socle | 1634 o | (sans commentaire) affiche/emploie : « <div class= · ><h4>\ud83d\udce1 Fiches des applications</h4> » | fichesCharger |
| `fichesVerifierAlerte` | — | 2231 o | ② L'OVERLAY BLOQUANT, à l'ouverture du panneau prof | openProfPanel |
| `generateSessionId` | — | 83 o | (sans commentaire ni indice) | trackOpen |
| `goHome` | — | 459 o | (sans commentaire) touche #hero-timer, #level-timer, #page-home | — |
| `gotoAnalyse` | — | 1568 o | (sans commentaire) affiche/emploie : « ;var el=document.getElementById( · ;var btn=document.getElementById( » — touche #analyse-dyn, #tab-analyse, #tab-btn-analyse | — |
| `gotoDictee` | — | 121 o | (sans commentaire) affiche/emploie : « ;var dictees=collectChapterItems(level, » | — |
| `gotoEtude` | — | 43 o | [C5-AR] À BRANCHER — ÉTUDE DE TEXTE. Même patron (showDicteeList), collectChapterItems(level,'etude'), ouvreur _openEtudeFromList, porte en dernier. | — |
| `gotoEvalConn` | — | 1386 o | (sans commentaire) affiche/emploie : « ;var qcms=collectChapterItems(level, · );var el=document.getElementById( » — touche #tab-btn-evalconn, #tab-evalconn | — |
| `gotoFiches` | level | 308 o | (sans commentaire) affiche/emploie : « ;   if(typeof atSiteGetDocs=== · &&(typeof LINK_ATELIER_DOCS=== » | switchTab |
| `gotoImage` | — | 46 o | [C5-AR] À BRANCHER — ANALYSE D'IMAGE. Quand l'app existera, remplacer le corps par le patron EXACT de showDicteeList (l. « showDicteeList ») : var level=clickedLevel··currentLevel··''; | — |
| `gotoRedaction` | — | 43 o | [C5-AR] À BRANCHER — RÉDACTION. Même patron (showDicteeList), collectChapterItems(level,'redaction'), ouvreur _openRedactionFromList, porte en dernier. | — |
| `gotoReecriture` | — | 121 o | (sans commentaire) affiche/emploie : « ;var ree=collectChapterItems(level, » | applyPublished |
| `handleBadgeTap` | — | 203 o | (sans commentaire ni indice) | — |
| `hideAllTabs` | — | 334 o | (sans commentaire ni indice) | gotoAnalyse, gotoEvalConn, showDicteeList, showEmptyTab (+2) |
| `initChapterDragDrop` | — | 2261 o | (sans commentaire) affiche/emploie : « ;     var target=e.target.closest( · )){           target.classList.add( » — touche #chapters-dynamic | renderChapitres |
| `initHome` | — | 1792 o | (sans commentaire) affiche/emploie : « ··TRACK.eleve.is_prof);   var accessible=isAllAccess?[ · ]:(levelAccess[currentLevel]··[currentLevel]);   [ » — touche #user-badge | _activerProfilTest, _atterrirProf, _loginEleveFound, loginAsProf |
| `isPubFor` | node,cls | 327 o | M8-IDENTITÉ (I1+I5) — publication : UN SEUL lecteur, tolérant. Clés historiques = noms bruts ("4E BANKSY") ; clé canonique = slug ("4e_banksy"). Les deux formes sont lues ; | _dimNode, _isPubAny, _pubCtrl, _pubEtatNiveau (+5) |
| `itemCreer` | level,chnum,snum,title,props,cb | 1211 o | SITE-COURS-2c · le cœur d'addItem devient itemCreer, l'ÉCRIVAIN UNIQUE des items (slug, ordre, écriture, mise à jour locale) — le dépôt d'une feuille de l'atelier passe par LUI, jamais par un second é | addItem, atDeposerFeuille, atIAInjecterAvecDestination, edAjouterItem (+5) |
| `itemProduitMenu` | level,chnum,snum,itemId,prodCourant | 160 o | (sans commentaire ni indice) | atEditerChapitreRendre |
| `itemProduitPoser` | level,chnum,snum,itemId,prod | 695 o | [LOT8c-\u2468] L'\u00c9CRIVAIN UNIQUE du produit d'un ITEM (drive/external) : le champ vit SUR L'ITEM \u2014 jamais de n\u0153ud parall\u00e8le. L'identit\u00e9 du rangement est l'uid de l'item ; | itemProduitMenu |
| `leverAlerteRegles` | — | 356 o | (sans commentaire) affiche/emploie : « ); return; }     var o = document.getElementById( » — touche #m8-regles-overlay — hub /site/config/dernierControleRegles | ouvrirOverlayRegles |
| `linkItem` | level,chnum,snum,itemId | 45 o | QCM migre sur le hub | renderItem |
| `linkModalApplyApp` | kind | 230 o | (sans commentaire) affiche/emploie : « Choisis un \u00e9l\u00e9ment dans la liste. » — touche #link-modal- | — |
| `linkModalApplyAtelier` | — | 694 o | (sans commentaire) affiche/emploie : « ;   if(!ref){alert( · ){     /* Prévenu, pas bloqué : un objet nominatif ne s » — touche #link-modal-atelier | — |
| `linkModalApplyUrl` | — | 478 o | (sans commentaire) affiche/emploie : « Colle un lien Drive ou une URL. · ;   var idD=driveExtraireId(input);   if(idD){newSource= » — touche #link-modal-url | — |
| `linkModalUnlink` | — | 213 o | (sans commentaire) affiche/emploie : « ,function(){   applyLinkChanges( » | — |
| `lireSessionMJPC` | ttlMs | 618 o | (sans commentaire ni indice) | — |
| `loadAppList` | kind | 1637 o | (sans commentaire) affiche/emploie : « <option value= · ;   if(kind=== » — touche #link-modal- | openLinkModal |
| `loadAtelierDocList` | — | 1725 o | (sans commentaire) affiche/emploie : « <option value= · <option value= » — touche #link-modal-atelier, #link-modal-current | openLinkModal |
| `loadClasses` | callback | 235 o | (sans commentaire ni indice) | _b2ExecReel, _doImport, _profSectionClasses, _profSectionEleves (+7) |
| `loadCodes` | cb | 168 o | (sans commentaire ni indice) | _b2ExecReel, _doImport, _profSectionEleves, _uniExec (+2) |
| `loadPublished` | level | 1458 o | (sans commentaire) affiche/emploie : « écran élève n » | openLevel |
| `loginAsProf` | — | 1459 o | (sans commentaire) affiche/emploie : « ].forEach(function(lvl){var card=document.querySelector( » — touche #page-home, #page-validation, #proto-badge | _quitterProfilTest, doLogin |
| `m8BasculerModeTest` | — | 239 o | (sans commentaire ni indice) | _blocModeTest |
| `m8RendreIndicateursTest` | — | 474 o | (sans commentaire) affiche/emploie : « );     pill.innerHTML = on       ?  · ;   }   var dot = document.getElementById( » — touche #tprof-testdot, #tprof-testpill | renderConsoleM8, showProfSection |
| `m8TestOn` | — | 28 o | (sans commentaire ni indice) | _blocModeTest, _corbRestaurerExec, _corbeilleRestaure, _siteDelete (+13) |
| `majPastilleVue` | — | 374 o | [C5-3ac2b] ④ la pastille de bascule : visible si l'IDENTITÉ est prof (pas la vue — elle doit rester là en vue élève pour le retour) ; son icône dit la vue. | basculerVue, loginAsProf, restoreSession |
| `moveChapter` | level,chnum,dir | 598 o | (sans commentaire ni indice) | renderChapterCard |
| `moveImageInGallery` | level,chnum,snum,itemId,imgId,dir | 744 o | (sans commentaire ni indice) | renderItem |
| `moveItem` | level,chnum,snum,itemId,dir | 719 o | (sans commentaire ni indice) | renderItem |
| `moveSeance` | level,chnum,snum,dir | 699 o | (sans commentaire ni indice) | renderSeance |
| `notifyConnection` | eleve | 337 o | (sans commentaire) affiche/emploie : « Connexion prof (M. Meney) · Connexion :  » | _loginEleveFound, loginAsProf |
| `onInteraction_` | e | 282 o | (sans commentaire) ECRIT au hub | — |
| `onScroll_` | — | 316 o | (sans commentaire ni indice) | startTracking_ |
| `onVisibilityChange_` | — | 192 o | (sans commentaire ni indice) | — |
| `openAdminTool` | tool | 695 o | (sans commentaire) touche #admin-tools-menu | — |
| `openAnalyse` | — | 55 o | (sans commentaire) affiche/emploie : « Analyse logique » | gotoAnalyse |
| `openAtelierItem` | ref,titre,ctxVue | 3890 o | L'OUVERTURE d'un item lié à un document de l'atelier (patron du diaporama). Le rendu est CELUI de l'atelier (atelierPageHTML) : | _openAtelierFromList, openItem |
| `openBB4E` | — | 94 o | (sans commentaire) affiche/emploie : « Brevet Blanc 4e \u2014 R\u00e9\u00e9criture » | showReecritureList |
| `openCreateClassModal` | — | 398 o | (sans commentaire) affiche/emploie : « ;   document.getElementById( · ;   document.getElementById( » — touche #class-modal, #class-modal-annee, #class-modal-niveau | _profSectionClasses |
| `openDicteeById` | id | 90 o | (sans commentaire) affiche/emploie : « Dictée coévaluée » | _openDicteeFromList, openItem |
| `openDoc` | chapitre,docName,typeDoc,url | 435 o | M8-IDENTITÉ (I2) | — |
| `openEvalConn` | — | 83 o | (sans commentaire) affiche/emploie : « \u00c9valuation des connaissances » | gotoEvalConn |
| `openGalleryViewer` | item | 1531 o | (sans commentaire) affiche/emploie : « Galerie vide. · );   overlay.id= » — touche #gallery-viewer-overlay | openItem |
| `openItem` | level,chnum,snum,itemId | 2888 o | (sans commentaire) affiche/emploie : « );return;}   if(item.kind=== · analyse logique n » | renderItem, renderZoneAutonomie |
| `openLevel` | code,label,color | 1359 o | (sans commentaire) touche #bnav-level, #dictee-link, #hero-timer | _profSectionArchi |
| `openLinkModal` | level,chnum,snum,itemId | 2625 o | (sans commentaire) affiche/emploie : « Lier :  · );   document.getElementById( » — touche #link-modal, #link-modal-, #link-modal-current | atEditerChapitreRendre, ed2Papier, linkItem |
| `openMesDictees` | — | 84 o | porte de l'outil, patron openMesDictees | showDicteeList |
| `openMesReecritures` | — | 61 o | (sans commentaire) affiche/emploie : « Mes réécritures » | showReecritureList |
| `openProfPanel` | — | 244 o | (sans commentaire) touche #tprof-overlay | atelierFermer |
| `openReecriture` | id,title | 98 o | M8-IDENTITÉ (I2) : le site navigue dans le CONTENU — les corrections nominatives s'atteignent par l'identité, dans l'app | _openReecritureFromList, openItem |
| `openViewer` | title,url | 1672 o | [LOT7-①] associateBigFile retirée (code mort, ancien script) — voir rapport. | _openAnalyseFromList, _openAtelierFromList, _openQcmFromList, ed2Papier (+9) |
| `ordDe` | o,repli | 124 o | (sans commentaire ni indice) | _cheminDriveLisible, atAdresseLisible, atEditerChapitreRendre, atIAInjecterAvecDestination (+8) |
| `ordNormaliserNiveau` | level,cb | 619 o | ④ la normalisation SILENCIEUSE d'un niveau : chapitres, puis séances de chaque chapitre, puis items de chaque séance. Aucun bouton (décision de Paul), aucun message : | loadPublished |
| `ordPaires` | coll | 400 o | les paires {k:clé RÉELLE, o:objet} triées par ORDRE ; à égalité (données abîmées), la clé départage — l'affichage reste stable, jamais aléatoire. | atSeances, ctxEntreesSeance, ed2Documents, edDeplacerItem (+9) |
| `ordResserrer` | coll,basePath,cb | 373 o | ③ le resserrement : 1, 2, 3… sans trou, dans l'ordre OÙ LES CHOSES SONT DÉJÀ. Écritures FINES (un chemin par `ordre`), jamais de nœud entier ; idempotent : | deleteItem, deleteSeance, edDeplacerVersSeanceFaire, edInsererSeanceAvant (+1) |
| `ordSuivant` | coll | 100 o | (sans commentaire ni indice) | addChapter, addSeance, chCalculerEcritures, chInjecterConfirme (+2) |
| `ouvrirConsoleM8` | — | 197 o | (sans commentaire) affiche/emploie : « ;   if(el.style.display ===  » — touche #m8-console | — |
| `ouvrirOverlayRegles` | ts | 1974 o | (sans commentaire) affiche/emploie : « appel. */   if(!document.body.classList.contains( · )) return;   if(document.getElementById( » — touche #m8-regles-overlay | _blocRegles, verifierAlerteRegles |
| `pad` | n | 30 o | (sans commentaire ni indice) | _renderIntentTimer, updateTimers |
| `parseEleves` | txt | 112 o | clé-élève canonique : fournie par le socle MJPC-CORE | _importEleves |
| `pasteIntoItem` | level,chnum,snum,itemId | 88 o | Paste depuis presse-papier (image capturée) | renderItem |
| `pasteIntoSeance` | level,chnum,snum | 77 o | (sans commentaire ni indice) | renderSeance |
| `previewImage` | driveId | 821 o | ============ Pilotage des images d'une galerie (mode admin) ============ | renderItem |
| `publierManifeste` | db | 295 o | 8. Manifeste (vue projetée, ADDITIVE) Les constantes en dur dans l'app restent la source de vérité ; le manifeste n'est qu'une photographie publiée pour MJPC. Incapable de diverger : | — |
| `publierManifesteREST` | — | 420 o | (sans commentaire) ECRIT au hub | loginAsProf |
| `publishBB4E` | — | 34 o | (sans commentaire ni indice) | showReecritureList |
| `reinitialiserBrevetDates` | — | 316 o | Réversible par nature : on efface la surcharge, le défaut du code revient. | _blocBrevet |
| `renameClass` | slug | 397 o | (sans commentaire) affiche/emploie : « Renommer la classe · Nouveau nom complet de la classe : » — ECRIT au hub | _profSectionClasses |
| `renameImageInGallery` | level,chnum,snum,itemId,imgId | 553 o | (sans commentaire) affiche/emploie : « Renommer l\u2019image · Nouveau titre de l\u2019image : » — ECRIT au hub | renderItem |
| `renderChapitres` | level | 2725 o | M8-IDENTITÉ (I5) : brute — isPubFor normalise, une seule fois | _applyLinkEcrire, _applyPubCascade, _createGalleryItemWithFirstImage, _editerTexteSeanceSansDoc (+26) |
| `renderChapterCard` | level,num,ch,dispNum,isAdmin | 2613 o | (sans commentaire) affiche/emploie : « ;   var acts= · ;   if(isAdmin){     acts+= » | renderChapitres |
| `renderConsoleM8` | — | 505 o | M8 — ÉCRAN DE CONSOLE PROF (annonces · brevet · règles · mode test) Fonctions de rendu nommées et linéaires, une par bloc (point 20). Écran PROF : le vocabulaire technique y est celui de Paul. | ecrireAnnonce, ecrireBrevetDate, leverAlerteRegles, m8BasculerModeTest (+5) |
| `renderItem` | level,chnum,snum,itemId,it,subNum,isAdmi | 5854 o | (sans commentaire) affiche/emploie : « ;   if(it.kind=== · ;   var icon=it.icon··(isGallery? » | renderSeance |
| `renderItemListByChapter` | items,onclickFn,bgColor,icon | 1040 o | (sans commentaire) affiche/emploie : « <div class= ·  style= » | gotoAnalyse, gotoEvalConn, renderRayons, showDicteeList (+1) |
| `renderRayons` | level | 1587 o | (sans commentaire) affiche/emploie : « );   _rayonPoser( · );   _rayonPoser( » | atFeuilleProduitPoser, gotoFiches, itemProduitPoser |
| `renderSeance` | level,chnum,snum,sce,dispNum,isAdmin | 4001 o | (sans commentaire) affiche/emploie : « ;   var acts= · ;   if(isAdmin){     acts+= » | renderChapterCard |
| `renderZoneAutonomie` | — | 2112 o | (sans commentaire) affiche/emploie : « <div class= ·  style= » — touche #autonomie-dyn | switchTab |
| `renvoyerVersMJPC` | motif | 270 o | (sans commentaire) affiche/emploie : «          +(motif? · );   if(typeof window!== » | — |
| `resetChapitres` | level | 487 o | (sans commentaire) affiche/emploie : « Effacer TOUS les chapitres  · ,     function(){   mjpcDeleteJson(FIREBASE_BASE+ » | renderChapitres |
| `resolveEleves` | roster, saisies | 1138 o | 7. Identification nominative : le portail commun (logique) Toute identification produit des élèves SINGULIERS (clé canonique), que le travail soit individuel ou en groupe. | — |
| `restoreSession` | — | 589 o | (sans commentaire) touche #proto-badge | — |
| `sanMJPC` | s | 144 o | l'app reconnaît l'élève ou le prof déjà connecté au site MJPC et saute son écran de connexion. Sans session : portail natif inchangé. Bloc versionné, IDENTIQUE dans chaque app. | atCodeDe, ensureEleveUuid, resolveEleves, validerEleveMJPC |
| `sanitizeChapitres` | chapitres | 982 o | (sans commentaire ni indice) | atChargerChapitres, loadPublished |
| `saveIntent` | id,label,levelClicked | 520 o | (sans commentaire) affiche/emploie : « ,{       method: » — ECRIT au hub | showIntentSurvey |
| `sceDupliquer` | j | 1266 o | [LOT6-②] CRÉÉ — le fondamental « Dupliquer » généralisé aux séances (il existait pour les feuilles et les chapitres). | ctxEntreesSeance |
| `sendToBackend` | data | 452 o | (sans commentaire ni indice) | trackClose, trackOpen |
| `setAdminLens` | sg | 60 o | (sans commentaire ni indice) | _renderLensBar |
| `showAccueilBg` | — | 350 o | (sans commentaire) touche #bg-accueil, #bg-level, #horizon-accueil | goHome, initHome |
| `showDicteeList` | dictees,level | 1513 o | (sans commentaire) affiche/emploie : « ;var btn=document.getElementById( · );var html= » — touche #tab-btn-dictee, #tab-dictee | gotoDictee |
| `showEmptyTab` | tabId,label | 551 o | (sans commentaire) affiche/emploie : « ;var btn=document.getElementById( · padding:40px 20px;text-align:center » — touche #tab-, #tab-btn- | gotoEtude, gotoImage, gotoRedaction |
| `showIntentSurvey` | levelCode,levelLabel | 1303 o | (sans commentaire) affiche/emploie : « ;   var overlay=document.getElementById( · );   overlay.setAttribute( » — touche #intent-buttons, #intent-overlay, #intent-timer-name | openLevel |
| `showLevelBlockedDialog` | code | 1640 o | (sans commentaire) affiche/emploie : « );   overlay.id= · ;   overlay.style.cssText= » — touche #lbd-close, #level-blocked-overlay | openLevel |
| `showProfSection` | id | 629 o | (sans commentaire) touche #tprof-content | _deleteEleveCls, _doImport, _editerTexteSeanceSansDoc, _exportHub (+21) |
| `showReecritureList` | ree,level | 3436 o | (sans commentaire) affiche/emploie : « ;var btn=document.getElementById( · );var html= » — touche #tab-btn-reecriture, #tab-reecriture | gotoReecriture |
| `showUploadToast` | msg,kind | 303 o | (sans commentaire) affiche/emploie : « ;   if(kind=== » — touche #mjpc-upload-toast | _createGalleryItemWithFirstImage, _pasteCommon, _routeFileToTarget, addImageToGallery (+3) |
| `simulerJ29` | — | 142 o | Accélérateur de test : pose une date ancienne et déclenche l'overlay tout de suite. Réversible d'un clic (le bouton de levée réarme le compteur). | _blocRegles |
| `startHeartbeat` | — | 498 o | (sans commentaire ni indice) | _loginEleveFound, loginAsProf, restoreSession |
| `startTracking_` | — | 422 o | (sans commentaire ni indice) | trackOpen |
| `stopTracking_` | — | 322 o | (sans commentaire ni indice) | trackClose |
| `submitCreateClass` | — | 887 o | (sans commentaire) affiche/emploie : « Le nom est obligatoire. · L\u2019ann\u00e9e est obligatoire. » — touche #class-modal-annee, #class-modal-niveau, #class-modal-nom — ECRIT au hub | — |
| `supprimerAnnonce` | id | 447 o | Geste destructeur → neutralisé : confirmation qui CITE le texte supprimé. | _blocAnnonces |
| `switchTab` | btn,tab | 581 o | (sans commentaire) affiche/emploie : « );hideAllTabs();   if(tab=== · &&typeof gotoFiches=== » — touche #tab- | applyPublished |
| `tabLibelle` | tabId | 164 o | (sans commentaire ni indice) | — |
| `tabLibellePoser` | tabId,valeur | 357 o | (sans commentaire) affiche/emploie : « ).trim();   _sitePut( · +tabId,v··null,function(ok){     if(!ok){alert( » — hub /site/libelles/onglets/ | _profSectionArchi |
| `tabLibellesAppliquer` | — | 274 o | les boutons d'onglets portent le libellé courant (le texte seul — l'icône reste) | tabLibellePoser |
| `tabLibellesCharger` | cb | 210 o | (sans commentaire) hub /site/libelles/onglets | — |
| `taxoBasculer` | idNotion | 856 o | (sans commentaire) affiche/emploie : « D\u00e9sactiver la notion · D\u00e9sactiver \u00ab <b> » | _taxoLigneNotion |
| `taxoCharger` | cb | 358 o | Lecture : toujours l'état FRAIS. En mode test, le magasin s'amorce une fois par une lecture PURE du hub (GET, aucune écriture) : on édite alors une COPIE réelle qui s'évapore en sortant du mode test. | _taxoGesteBasculer, _taxoGesteCreer, _taxoGesteEditer, taxoBasculer (+1) |
| `taxoCreerAnnuler` | — | 42 o | (sans commentaire ni indice) | _taxoFormCreation |
| `taxoCreerEnregistrer` | idFam | 260 o | (sans commentaire ni indice) | _taxoFormCreation |
| `taxoCreerOuvrir` | idFam | 101 o | (sans commentaire ni indice) | _taxoLigneFamille |
| `taxoEditerAnnuler` | — | 38 o | (sans commentaire ni indice) | _taxoFormEdition |
| `taxoEditerEnregistrer` | idNotion | 260 o | (sans commentaire ni indice) | _taxoFormEdition |
| `taxoEditerOuvrir` | idNotion | 115 o | (sans commentaire ni indice) | _taxoLigneNotion |
| `taxoOuvrirEditeur` | — | 131 o | (sans commentaire ni indice) | _blocTaxonomie |
| `taxoRafraichir` | force | 371 o | (sans commentaire) affiche/emploie : « <p class= · >Chargement du référentiel\u2026</p> » — touche #m8tx-editeur | _blocTaxonomie, taxoBasculer, taxoCreerEnregistrer, taxoEditerEnregistrer (+1) |
| `taxoRender` | — | 135 o | (sans commentaire) touche #m8tx-editeur | taxoCreerAnnuler, taxoCreerOuvrir, taxoEditerAnnuler, taxoRafraichir (+2) |
| `taxoToggleDom` | idDom | 98 o | (sans commentaire ni indice) | _taxoLigneDomaine |
| `taxoToggleFam` | idFam | 98 o | (sans commentaire ni indice) | _taxoLigneFamille |
| `toggleAdminTools` | — | 74 o | (sans commentaire) touche #admin-tools-menu | — |
| `toggleAutonomie` | level,chnum,snum,itemId | 372 o | M12 · ZONE AUTONOMIE (S5, périmètre D) — le marqueur se pose côté prof, la vue se lit côté élève. Un item marqué `autonomie:true` est RASSEMBLÉ dans la zone, quel que soit son chapitre d'origine. | renderItem |
| `toggleChapter` | header | 362 o | (sans commentaire) affiche/emploie : « );var card=header.closest( · );if(card){var chId=card.getAttribute( » | renderChapterCard, renderZoneAutonomie |
| `togglePublishChapterAll` | level, num | 109 o | (sans commentaire ni indice) | _pubCtrlToutes |
| `togglePublishChapterCls` | level,num,slug | 113 o | (sans commentaire ni indice) | _pubCtrl |
| `togglePublishExtra` | level,extraId | 335 o | (sans commentaire) affiche/emploie : « Publication des rubriques  » — ECRIT au hub | publishBB4E |
| `togglePublishItemAll` | level, chnum, snum, itemId | 219 o | (sans commentaire ni indice) | _pubCtrlToutes, edPublierItem |
| `togglePublishItemCls` | level,chnum,snum,itemId,slug | 217 o | (sans commentaire ni indice) | _pubCtrl, edPublierClasse |
| `togglePublishSeanceAll` | level, chnum, snum | 158 o | (sans commentaire ni indice) | _pubCtrlToutes |
| `togglePublishSeanceCls` | level,chnum,snum,slug | 160 o | (sans commentaire ni indice) | _pubCtrl |
| `togglePublishTab` | level,tabId | 512 o | (sans commentaire) affiche/emploie : « Publication des onglets  » — ECRIT au hub | applyPublished |
| `toggleSeanceOpen` | h,key | 166 o | (sans commentaire ni indice) | renderSeance |
| `trackClose` | — | 368 o | (sans commentaire ni indice) | closeViewer, goHome, trackOpen |
| `trackLogin` | nom,prenom,niveau | 471 o | (sans commentaire) affiche/emploie : « Erreur réseau. Réessaie. » | — |
| `trackOpen` | chapitre,doc,type_doc | 440 o | (sans commentaire ni indice) | openDoc |
| `trackScore` | s | 24 o | (sans commentaire ni indice) | — |
| `triggerHeartbeat` | el | 147 o | (sans commentaire ni indice) | updateTimers |
| `uidMigrerNiveau` | level | 643 o | [C5-UID] ② LA MIGRATION, silencieuse et une seule fois : tout objet sans `uid` en reçoit un. | ordNormaliserNiveau |
| `uidNeuf` | prefixe | 122 o | [C5-UID] — TOUT OBJET RÉFÉRENÇABLE PORTE UNE IDENTITÉ QUI NE CHANGE JAMAIS. Sa place, son nom, son rang et sa date ne sont que des ATTRIBUTS. Défaut mesuré le 08/08 : | addChapter, addSeance, edInsererSeanceAvant, itemCreer (+3) |
| `uidPhraseReferents` | refs,quoi | 438 o | (sans commentaire) affiche/emploie : « ;   var n=refs.length;   return  ·  feuille » | atSupprimerChapitre, deleteSeance |
| `uidReferents` | level,chnum,snum | 853 o | [C5-UID] \u2463 QUI POINTE VERS CET OBJET ? On regarde les feuilles de l'atelier (adresse ET d\u00e9p\u00f4t), par identit\u00e9 d'abord, par rang ensuite. Pr\u00e9venu, pas bloqu\u00e9. | atSupprimerChapitre, deleteSeance |
| `uidRenouveler` | ch | 369 o | [C5-UID] ① une COPIE n'est pas l'original : elle reçoit des identités NEUVES à tous les étages. Recopier l'uid ferait pointer les références de l'un sur l'autre. | atDupliquerChapitre |
| `uidResoudre` | coll,uid,rang | 525 o | le couple (uid, rang) résolu en UNE lecture : l'uid gagne, le rang est le repli. | atAdresseCles, atAdresseLisible |
| `uidTrouver` | coll,uid | 250 o | la lecture : par IDENTITÉ d'abord, par rang seulement si l'uid manque — les objets anciens (et les feuilles adressées au rang) continuent de fonctionner. | uidResoudre |
| `unarchiveClass` | slug | 240 o | (sans commentaire) affiche/emploie : « D\u00e9sarchivage de la classe \u00ab  » — ECRIT au hub | _profSectionClasses |
| `updatePresence` | — | 719 o | (sans commentaire) affiche/emploie : « ,     classe:TRACK.eleve.classe·· · ,     niveau:TRACK.eleve.niveau·· » — ECRIT au hub | openItem, startHeartbeat |
| `updateTimers` | — | 488 o | (sans commentaire) affiche/emploie : « ].forEach(function(k){var el=document.getElementById( » — touche #cd-, #cd-s, #lc- | ecrireBrevetDate, openLevel, reinitialiserBrevetDates |
| `uploadFileForChapterItem` | file,level,chnum,snum,itemId | 2105 o | (sans commentaire) affiche/emploie : « \u26a0 Item introuvable · );     return;   }   if(isGallery){showUploadToast( » — ECRIT au hub | _routeFileToTarget, pasteIntoItem |
| `uploadFileForNewItem` | file,level,chnum,snum | 1763 o | (sans commentaire) affiche/emploie : « \u23f3 Upload en cours\u2026 · ).toLowerCase();     var iconByExt={pdf: » — ECRIT au hub | _routeFileToTarget, pasteIntoSeance |
| `validerEleveMJPC` | session, classesData | 362 o | (sans commentaire ni indice) | — |
| `verifierAlerteRegles` | — | 382 o | (sans commentaire) hub /site/config/dernierControleRegles | _atterrirProf, loginAsProf, ouvrirOverlayRegles, simulerJ29 |


## DIVERS — utilitaires internes

| fonction | args | taille | ce qu'elle fait | appelée par |
|---|---|---|---|---|
| `_activerProfilTest` | slug | 1196 o | (sans commentaire) affiche/emploie : « \u00c9l\u00e8ve test · \ud83d\udc41 TEST » — touche #page-home, #page-validation, #proto-badge | _profSectionProfilTest |
| `_allCodesTaken` | — | 614 o | M-SÉCU-3 : les codes pris se lisent en DÉCHIFFRANT (la clé est déjà exigée pour générer). | _resetAllCodesClasse |
| `_analyzeNode` | key,v | 1374 o | (sans commentaire) affiche/emploie : « formes multiples ( · +arr.map(function(f){return f.form+ » | _buildDiagnostic |
| `_anneeScolaire` | — | 89 o | ===== CORBEILLE — 2e ceinture d'archive, dans le hub (Phase 2, lot 1) ===== Doctrine : AUCUNE destruction sans archive. 1re ceinture = fichier local (flux _b2Save, déjà obligatoire) ; | _b2DoSave, _corbeillePut, _purgeDryRun, atSupprimerDoc (+1) |
| `_annoncesTriees` | o | 153 o | (sans commentaire ni indice) | _blocAnnonces |
| `_apercuOngletVide` | level,tabId | 1610 o | PUBLIER UN ONGLET VIDE : PRÉVENU, PAS BLOQUÉ (Paul, 31/07) Constat de Paul à sa recette : un onglet publié sans travaux envoie l'élève sur un écran vide, et rien ne l'en avertit au moment où il publie. | togglePublishTab |
| `_applyLinkEcrire` | ctx,item,newSource,newRef,newKind,tracer | 1482 o | (sans commentaire) affiche/emploie : « });   }   var anc=tracer?{source:item.source·· · trace du remplac\u00e9 » — ECRIT au hub | applyLinkChanges |
| `_applyPubCascade` | level,chnum,snum,itemId,slug,nv | 3119 o | (sans commentaire) affiche/emploie : « +p});});  mjpcLot(lot,(nv? » — ECRIT au hub | _togglePubNiveau, togglePublishChapterCls, togglePublishItemCls, togglePublishSeanceCls |
| `_atterrirProf` | — | 569 o | (sans commentaire) affiche/emploie : « ].forEach(function(lvl){var card=document.querySelector( » — touche #page-home, #page-validation | — |
| `_b2BuildExtract` | list | 693 o | (sans commentaire ni indice) | _b2DoSave, _b2Exec |
| `_b2Check` | — | 1512 o | (sans commentaire) affiche/emploie : « ;}),hasTr=fp.some(function(x){return x.fam=== · ;});     var tags=(hasNc? » | _b2RenderPick, _b2Save |
| `_b2ClassRebuild` | node,removeSet | 429 o | (sans commentaire ni indice) | _b2ExecReel |
| `_b2Confirm` | savedName | 1214 o | (sans commentaire) affiche/emploie : « <div class= · >✓ Enregistré :  » — touche #b2cf, #b2cferr | _b2DoSave |
| `_b2DoSave` | — | 916 o | (sans commentaire) affiche/emploie : « );   }else{obj=_b2.hub;name=_tsName( · Enregistrement annulé » | _b2Save |
| `_b2Eleves` | slug | 67 o | (sans commentaire ni indice) | _b2RenderPick |
| `_b2Exec` | — | 197 o | (sans commentaire ni indice) | _b2Confirm |
| `_b2ExecReel` | list,_cheminCorbeille | 2364 o | (sans commentaire) affiche/emploie : « <div class= · >Effacement en cours sur  » | _b2Exec |
| `_b2GetPath` | root,path | 113 o | (sans commentaire ni indice) | _b2BuildExtract, _b2ExecReel, _purgeExpand, _purgePlan (+2) |
| `_b2Label` | node | 495 o | (sans commentaire) affiche/emploie : « Codes élèves · Corrections de dictées » | _b2Check |
| `_b2Legend` | — | 272 o | (sans commentaire) affiche/emploie : « <div class= · ><span class= » | _b2Check, _b2RenderPick |
| `_b2Open` | — | 380 o | (sans commentaire) affiche/emploie : « <div class= · >Lecture du hub en cours…</div> » | _profSectionConfig |
| `_b2Refresh` | — | 138 o | (sans commentaire) affiche/emploie : «  élève ·  sélectionné » — touche #b2selc | _b2ToggleClass, _b2ToggleIdx |
| `_b2RenderPick` | — | 1308 o | (sans commentaire) affiche/emploie : « <div class= · <div class= » | _b2Check, _b2Open |
| `_b2Save` | — | 755 o | (sans commentaire) affiche/emploie : « <div class= · +(arch     ? » | _b2Check, _b2Confirm, _b2DoSave |
| `_b2SelList` | — | 84 o | (sans commentaire ni indice) | _b2Check, _b2Confirm, _b2DoSave, _b2Exec (+2) |
| `_b2SetPath` | root,path,val | 119 o | (sans commentaire ni indice) | _b2BuildExtract, _purgeSauvegarde |
| `_b2ToggleClass` | cb,ci | 189 o | (sans commentaire) touche #b2e_ | _b2RenderPick |
| `_b2ToggleIdx` | cb,i | 68 o | (sans commentaire ni indice) | _b2RenderPick |
| `_b2Url` | path | 67 o | (sans commentaire ni indice) | _fbDeletePath, _fbPutPath |
| `_blocAnnonces` | o | 2320 o | (sans commentaire) affiche/emploie : « <div class= · ><div class= » | renderConsoleM8 |
| `_blocBrevet` | — | 931 o | (sans commentaire) affiche/emploie : « <div class= · ><div class= » | renderConsoleM8 |
| `_blocModeTest` | — | 608 o | (sans commentaire) affiche/emploie : « <div class= · Passer en mode test » | — |
| `_blocRegles` | ctrl | 687 o | (sans commentaire) affiche/emploie : « dernier contr\u00f4le le  ·  jours » | renderConsoleM8 |
| `_blocTaxonomie` | — | 604 o | (sans commentaire) affiche/emploie : « <div class= · ><div class= » | renderConsoleM8 |
| `_buildDiagnostic` | data, diff, mode, current | 465 o | (sans commentaire ni indice) | _exportDiagnostic |
| `_chSouche` | t | 154 o | [LOT B \u2463a] LA SOUCHE D'UN TITRE \u2014 le titre normalis\u00e9, priv\u00e9 de ses suffixes de jumeau successifs (\u00ab (proposition) \u00bb, \u00ab (proposition 2) \u00bb\u2026). | chAfficherInventaire |
| `_chargerTextesSite` | cb | 142 o | (sans commentaire) hub /site/textes/seanceSansDoc | — |
| `_cheminDriveLisible` | level,chnum,snum | 428 o | [LOT7-①] LE CHEMIN LISIBLE : niveau · titre du chapitre · « Séance N — titre ». Le nom du dossier sert à Paul quand il ouvre son Drive ; | _uploadBlobToDrive |
| `_classTag` | nom | 72 o | (sans commentaire ni indice) | _pubCtrl |
| `_closeConsoleModal` | — | 80 o | (sans commentaire) touche #console-modal | _exportHub, _importPreview, _modalePrompt, _showConsoleModal |
| `_collapseDescendants` | d | 95 o | (sans commentaire ni indice) | _showConsoleModal |
| `_corbCharger` | — | 87 o | (sans commentaire ni indice) | _corbRestaurerExec |
| `_corbExport` | id | 132 o | (sans commentaire ni indice) | _corbRender |
| `_corbItem` | id | 326 o | (sans commentaire ni indice) | _corbExport, _corbRestaurer, _corbVoir |
| `_corbMotifLisible` | m | 576 o | (sans commentaire) affiche/emploie : « Retrait d\u2019un \u00e9l\u00e8ve · Archivage d\u2019\u00e9l\u00e8ves » | _corbRender, _corbVoir |
| `_corbPlanRestauration` | item | 1206 o | Plan de restauration : liste de {chemin, valeur, libelle} — nœuds ENTIERS seulement, sinon null. | _corbRender, _corbRestaurer, _corbVoir |
| `_corbPourquoiPasAuto` | motif | 834 o | retrait-eleve (fragment partiel), archive/suppression-eleves, purge-rentree, legacy : consultation seule | _corbVoir |
| `_corbRender` | — | 2942 o | (sans commentaire) affiche/emploie : « <div class= · >La corbeille est vide.</div> » — touche #corb-zone | _corbCharger |
| `_corbRestaurer` | id | 532 o | (sans commentaire ni indice) | _corbRender |
| `_corbRestaurerConfirme` | id,plan,occupees | 738 o | (sans commentaire) affiche/emploie : « La restauration va \u00e9crire :<br> · \u2022 <code> » | _corbRestaurer |
| `_corbRestaurerExec` | id,plan | 905 o | (sans commentaire) affiche/emploie : « <div class= · >\u00c9chec sur :  » | _corbRestaurerConfirme |
| `_corbVoir` | id | 855 o | (sans commentaire) affiche/emploie : « ;   if(item.__brut)body+= · ;   body+= » | _corbRender, _corbRestaurer |
| `_corbeillePuis` | motif,extract,meta,suite | 682 o | Corbeille puis destruction : si la corbeille échoue, l'utilisateur tranche explicitement (le fichier local, lui, est déjà enregistré quand ce chemin est atteint). | _b2Exec, _deleteEleveCls, _orphDelete, _purgeSauvegarde (+1) |
| `_corbeillePut` | motif,extract,meta | 504 o | (sans commentaire) affiche/emploie : « },meta··{}),data:extract··{}};   return _fbPutPath( · +cle,payload).then(function(){return  » | _corbeillePuis |
| `_corbeilleRestaure` | chemin,valeur,cb | 180 o | M12 · CORBEILLE — canal de restauration UNIQUE, respecte le mode test M8 | _corbRestaurerExec |
| `_cpArchive` | fiches | 132 o | (sans commentaire ni indice) | secuCpAjouter, secuCpRemplacer, secuCpRetirer |
| `_cpConcordance` | code | 352 o | relit le nœud et confirme qu'une fiche relue concorde avec le code saisi | secuCpAjouter, secuCpRemplacer |
| `_cpDate` | ts | 162 o | (sans commentaire) affiche/emploie : « pos\u00e9 avant ce jour · );}catch(e){return  » | secuCpRafraichir |
| `_cpDouble` | — | 326 o | (sans commentaire) affiche/emploie : « ;   var b=(document.getElementById( · ;   if(!a){_cpMsg( » — touche #cp-c1, #cp-c2 | secuCpAjouter, secuCpRemplacer |
| `_cpFiche` | code | 142 o | (sans commentaire ni indice) | secuCpAjouter, secuCpRemplacer |
| `_cpLireFiches` | — | 81 o | (sans commentaire ni indice) | _cpConcordance, secuCpAjouter, secuCpRafraichir, secuCpRemplacer (+1) |
| `_cpMsg` | t,ok | 106 o | (sans commentaire) touche #cp-msg | _cpDouble, secuCpAjouter, secuCpRemplacer, secuCpRetirer |
| `_createGalleryItemWithFirstImage` | file,level,chnum,snum | 1255 o | (sans commentaire) affiche/emploie : « \u23f3 Cr\u00e9ation galerie\u2026 · );   var itemId= » — ECRIT au hub | uploadFileForNewItem |
| `_deleteEleveCls` | slug,i | 1127 o | (sans commentaire) affiche/emploie : « Retirer un \u00e9l\u00e8ve · Retirer <b> » — ECRIT au hub | _profSectionEleves |
| `_describeHub` | data | 124 o | (sans commentaire ni indice) | _exportHub, _hubDetailHtml, _importPreview |
| `_diffHub` | fileData,current | 275 o | (sans commentaire ni indice) | _importPreview |
| `_dimNode` | node,level | 88 o | (sans commentaire ni indice) | renderChapterCard, renderItem, renderSeance |
| `_doImport` | fileData,current,mode,fname | 985 o | (sans commentaire) affiche/emploie : « Import terminé ( · remplacement total » — ECRIT au hub | _importPreview |
| `_downloadBlob` | text,filename | 263 o | --- Téléchargement : "Enregistrer sous" si dispo (mémorise le dossier), sinon repli --- | _saveJSON |
| `_edCh` | — | 124 o | (sans commentaire ni indice) | ctxEntreesItem, ctxEntreesSeance, ctxSommaireOuvrir, edAjouterItem (+18) |
| `_edLierEcrire` | level,chnum,lignes,apres | 1813 o | (sans commentaire) affiche/emploie : « ,l.doc),                 secuEcrire(chemin+ ·  liaison » | edLierConfirme |
| `_editerAnnonce` | id | 353 o | (sans commentaire) affiche/emploie : « ;     var s = document.getElementById( · ); if(s) s.value = a.app ··  » — touche #m8-annonce-app, #m8-annonce-id, #m8-annonce-texte | _blocAnnonces |
| `_editerTexteSeanceSansDoc` | — | 699 o | (sans commentaire) affiche/emploie : « Texte des s\u00e9ances sans document » — hub /site/textes/seanceSansDoc | _profSectionAnnonces |
| `_eleveAUnCode` | nom | 70 o | M-SÉCU-5 : après le retrait du clair, deux questions distinctes. _eleveAUnCode : « cet élève a-t-il un code ? » — clair OU chiffré (répare le compteur, la colonne et le bouton « Générer N manquants »). | _profSectionEleves |
| `_eleveClasse` | — | 65 o | (sans commentaire ni indice) | _visiblePourSession, openItem |
| `_eleveCode` | nom | 205 o | (sans commentaire) affiche/emploie : « ;   if(e.code!==undefined&&e.code!==null&&e.code!== » | _findEleveByName, _printCodesClasse |
| `_eleveFootprint` | hub,nom,slug | 3787 o | (sans commentaire ni indice) | _b2BuildExtract, _b2Check, _b2Confirm, _b2ExecReel |
| `_entryEffectif` | val | 448 o | (sans commentaire) affiche/emploie : «  \u00e9l\u00e9ments » | _pvRow |
| `_entryLabel` | key,val | 377 o | (sans commentaire ni indice) | _pvRow |
| `_estClasseInterne` | slug | 42 o | Classe interne (test d'une app) : slug prefixe par "_" -> jamais comptee comme classe reelle | _profSectionClasses, _profSectionEleves, _profSectionProfilTest, _uniNoms (+1) |
| `_estCodeProf` | c | 455 o | (sans commentaire ni indice) | _genCode4 |
| `_estPublieItem` | it | 137 o | (sans commentaire ni indice) | atEditerChapitreRendre |
| `_exportDiagnostic` | data, diff, mode, current | 358 o | (sans commentaire ni indice) | _importPreview |
| `_exportHub` | — | 875 o | --- EXPORT : aperçu -> Enregistrer sous -> journal --- | _profSectionArchives |
| `_fbDeletePath` | path | 110 o | Suppression Firebase ciblée d'un chemin (REST). Inerte tant que l'écran ne l'appelle pas. | _b2ExecReel, _orphDelete, _purgeExec |
| `_fbPutPath` | path,data | 177 o | (sans commentaire) ECRIT au hub | _b2ExecReel, _corbeillePut, _corbeilleRestaure |
| `_fbReadAll` | — | 108 o | --- Lecture intégrale du hub (REST) --- | _b2Open, _exportHub, _importHubStart, _orphOpen (+2) |
| `_fbWriteRoot` | data,method | 200 o | (sans commentaire ni indice) | _doImport, _uniExec |
| `_findEleveByName` | full | 375 o | (sans commentaire ni indice) | doLogin |
| `_formSig` | v | 203 o | (sans commentaire) affiche/emploie : « ;   if(Array.isArray(v))return  · +(v.length?typeof v[0]: » | _analyzeNode |
| `_fpScan` | hub,node,subs,nom,fp | 310 o | (sans commentaire ni indice) | _eleveFootprint |
| `_fpScanChamp` | bag,champ,nom,basePath,node,fp | 266 o | Scan par CHAMP : l'élève est porté par une valeur (ex : historiqueLectures/<p_id>.lecteur, journal/<entry>.nom) — la clé, elle, est un identifiant technique. | _eleveFootprint |
| `_genCode4` | taken | 321 o | (sans commentaire ni indice) | _resetAllCodesClasse |
| `_hideTestBanner` | — | 75 o | (sans commentaire) touche #test-banner | _quitterProfilTest |
| `_hubDetailHtml` | data | 507 o | (sans commentaire) affiche/emploie : « <div class= · >Hub vide.</div> » | _corbVoir, _exportHub, _importPreview |
| `_hubNodeInfo` | key,v | 555 o | --- Aperçu détaillé d'un hub (par nœud) --- | _describeHub |
| `_humanSize` | b | 124 o | (sans commentaire) affiche/emploie : « ;if(b<1048576)return Math.round(b/1024)+ · ;return (b/1048576).toFixed(1).replace( » | _b2DoSave, _corbRender, _doImport, _exportDiagnostic (+5) |
| `_idBlocks` | x | 121 o | ===== BRIQUE 2 — détection d'identité élève (matching tolérant multi-formes) ===== Le même élève est écrit différemment selon les nœuds (NOM Prénom / nom_prenom / NOM_Prénom / Prénom_NOM / {classe}__s | _idSkeleton |
| `_idIsTimestampKey` | k | 41 o | (sans commentaire ni indice) | _idMatch |
| `_idMatch` | key,nom | 218 o | (sans commentaire ni indice) | _eleveFootprint, _fpScan, _fpScanChamp |
| `_idSkeleton` | x | 46 o | (sans commentaire ni indice) | _idMatch |
| `_idStripClassPrefix` | k | 76 o | clé horodatée (snapshot) -> pas un élève | _idMatch |
| `_idVariants` | nom | 500 o | "4e_banksy__NOM_Prénom" -> "NOM_Prénom" | _idMatch |
| `_importEleves` | slug | 745 o | (sans commentaire) affiche/emploie : « Colle au moins un nom. · Ces \u00e9l\u00e8ves sont d\u00e9j\u00e0 pr\u00e9sents. » — touche #el-import-ta — ECRIT au hub | _profSectionEleves |
| `_importHubStart` | — | 680 o | --- IMPORT : choix fichier -> aperçu/diff -> archive auto -> écriture --- | _profSectionConfig |
| `_importPreview` | fileData,current,fname | 1918 o | (sans commentaire) affiche/emploie : « <div class= · <div class= » | _importHubStart |
| `_initOutilsProf` | — | 221 o | (sans commentaire ni indice) | _atterrirProf, basculerVue, loginAsProf |
| `_intentClearAnim` | — | 116 o | (sans commentaire ni indice) | _intentTeardown, showIntentSurvey |
| `_intentTeardown` | — | 195 o | (sans commentaire) affiche/emploie : « );var v=document.getElementById( » — touche #intent-overlay, #intent-timer-val | closeIntentSurvey, saveIntent |
| `_isImage` | file | 189 o | (sans commentaire ni indice) | uploadFileForChapterItem, uploadFileForNewItem |
| `_isPubAny` | node,level | 158 o | (sans commentaire ni indice) | _dimNode, _visiblePourSession |
| `_isoJour` | d | 120 o | (sans commentaire) affiche/emploie : « )+n; };   return d.getFullYear()+ » | _blocBrevet |
| `_joursDepuis` | ts | 52 o | (sans commentaire ni indice) | _blocRegles, ouvrirOverlayRegles, verifierAlerteRegles |
| `_kindLabel` | k | 115 o | (sans commentaire) affiche/emploie : « Archive (avant import) » | _profSectionArchives |
| `_leafStr` | v | 53 o | (sans commentaire ni indice) | _pvChildrenHtml, _pvRow |
| `_lireVueEnvers` | — | 106 o | (sans commentaire ni indice) | loginAsProf, restoreSession |
| `_logBackup` | entry | 156 o | (sans commentaire ni indice) | _b2DoSave, _doImport, _exportDiagnostic, _exportHub (+1) |
| `_loginEleveFound` | found,status | 1116 o | (sans commentaire) affiche/emploie : « Bienvenue,  · );if(typeof initHome=== » — touche #page-home, #page-validation | doLogin |
| `_lvlClasses` | level | 269 o | (sans commentaire ni indice) | _isPubAny, _pubCtrl, _pubCtrlToutes, _pubEtatNiveau (+4) |
| `_markPub` | node,cls,nv | 288 o | (sans commentaire ni indice) | _applyPubCascade, uploadFileForChapterItem |
| `_memoriserBrevetDefaut` | — | 159 o | (sans commentaire ni indice) | chargerBrevetDates |
| `_memoriserVueEnvers` | — | 78 o | (sans commentaire ni indice) | basculerVue |
| `_mjpcB64` | buf | 104 o | (sans commentaire ni indice) | mjpcChiffrer |
| `_mjpcDeB64` | s | 100 o | (sans commentaire ni indice) | mjpcDechiffrer |
| `_mjpcHex` | buf | 106 o | (sans commentaire) affiche/emploie : « ;for(var i=0;i<a.length;i++)h+=( » | mjpcEmpreinte, mjpcSelAleatoire |
| `_mjpcTxt` | s | 45 o | (sans commentaire ni indice) | mjpcChiffrer, mjpcDeriverCle, mjpcEmpreinte |
| `_modaleConfirme` | titre,corpsHtml,cbOui,motConfirmation | 1012 o | (sans commentaire) affiche/emploie : « <div class= · ;   if(motConfirmation){     body+= » — touche #cm-confirm-input | _corbRestaurerConfirme, _deleteEleveCls, _drEntreesEcran, _resetAllCodesClasse (+19) |
| `_modalePrompt` | titre,label,valeur,cb | 814 o | M12 · MODALES DE SAISIE ET DE CONFIRMATION (charte cm-box, remplaçants des boîtes natives) | _editerTexteSeanceSansDoc, addChapter, addItem, addSeance (+7) |
| `_nextImageId` | images | 374 o | (sans commentaire) affiche/emploie : « +newOrdre;   while(images&&images[imgId])imgId= » | addImageToGallery |
| `_niveauOutils` | level | 168 o | ÉTANCHÉITÉ DES OUTILS ENTRE NIVEAUX (constat Paul 31/07, recette élève réelle). Les CHAPITRES et SÉANCES étaient déjà étanches : `_visiblePourSession` filtre un élève sur SA CLASSE. | applyPublished, showReecritureList |
| `_nodeLabel` | k | 31 o | (sans commentaire ni indice) | _hubNodeInfo, _uniConfirm, _uniRender |
| `_normName` | s | 110 o | (sans commentaire ni indice) | _findEleveByName, _importEleves |
| `_nowStr` | — | 141 o | (sans commentaire ni indice) | _b2DoSave, _corbeillePut, _doImport, _exportDiagnostic (+4) |
| `_openAnalyseFromList` | ref | 167 o | (sans commentaire) affiche/emploie : « Analyse logique » | — |
| `_openAtelierFromList` | ref | 1027 o | (sans commentaire) affiche/emploie : « est pas une feuille :      elle s · issue \u00ab Ouvrir dans un onglet \u00bb      s » | — |
| `_openDicteeFromList` | ref | 60 o | (sans commentaire ni indice) | — |
| `_openQcmFromList` | ref | 99 o | [C5-AR] | — |
| `_openReecritureFromList` | ref | 63 o | (sans commentaire ni indice) | — |
| `_orphDelete` | noeud | 1435 o | (sans commentaire) affiche/emploie : « },function(chemin){       var body= · >✓ Archivé » — touche #orcf, #orcferr | _orphRender |
| `_orphOpen` | — | 318 o | (sans commentaire) affiche/emploie : « <div class= · >Lecture du hub…</div> » | _profSectionConfig |
| `_orphRender` | hub | 995 o | (sans commentaire) affiche/emploie : « <div class= · <div class= » | _orphDelete, _orphOpen |
| `_orphelins` | hub | 306 o | partagé volontaire / infrastructure | _orphRender |
| `_pad2` | n | 25 o | (sans commentaire ni indice) | _nowStr, _tsName |
| `_pasteCommon` | then | 838 o | (sans commentaire) affiche/emploie : « \u26a0 Navigateur sans presse-papier · );             var fileName= » | pasteIntoItem, pasteIntoSeance |
| `_pickClassColor` | col | 43 o | (sans commentaire ni indice) | _renderClassPalette |
| `_printCodesClasse` | slug | 1623 o | (sans commentaire) affiche/emploie : « impression suit l · abord, la page s » | _profSectionEleves |
| `_produitSelectHTML` | onchange,prodCourant | 986 o | [LOT8c-\u2468] UNE SEULE SOURCE D'OPTIONS pour la requalification : | atProduitMenu, itemProduitMenu |
| `_profPlaceholder` | title,desc,note | 162 o | (sans commentaire ni indice) | — |
| `_profSectionAnnonces` | — | 621 o | (sans commentaire) affiche/emploie : « <h2>\ud83d\udce2 Annonces aux \u00e9l\u00e8ves</h2><div id= · <div class= » | _renderProfSection |
| `_profSectionArchi` | — | 2123 o | (sans commentaire) affiche/emploie : « <div class= ·  onclick= » | _renderProfSection |
| `_profSectionArchives` | — | 1293 o | (sans commentaire) affiche/emploie : « </td><td class= · </td><td class= » | _renderProfSection |
| `_profSectionBrevet` | — | 80 o | (sans commentaire) affiche/emploie : « <h2>\ud83c\udf93 Dates du brevet</h2><div id= » | _renderProfSection |
| `_profSectionClasses` | — | 3477 o | (sans commentaire) affiche/emploie : « <h2>Classes</h2><div class= · );});    var html= » | _renderProfSection |
| `_profSectionCodeProf` | — | 1467 o | (sans commentaire) affiche/emploie : « <h2>\ud83d\udd11 Code professeur</h2> · <div class= » | _renderProfSection |
| `_profSectionConfig` | — | 2628 o | (sans commentaire) affiche/emploie : « \u2705 actif (<code> · \u26a0 placeholder (notifs d\u00e9sactiv\u00e9es) » | _renderProfSection |
| `_profSectionCorbeille` | — | 369 o | (sans commentaire) affiche/emploie : « <div class= · >\ud83d\uddd1 Corbeille <span class= » | _renderProfSection |
| `_profSectionDashboard` | — | 1268 o | (sans commentaire) affiche/emploie : « <div class= · ><span class= » | _renderProfSection |
| `_profSectionEleves` | — | 3677 o | (sans commentaire) affiche/emploie : « <h2>\u00c9l\u00e8ves &amp; codes</h2><div class= · >\u23f3 Chargement\u2026</div> » | _renderProfSection |
| `_profSectionFiches` | — | 101 o | l'écran, dans le TABLEAU DE BORD | _renderProfSection |
| `_profSectionPresence` | — | 548 o | (sans commentaire) affiche/emploie : « <h2>Pr\u00e9sence live</h2> · <div class= » | _renderProfSection |
| `_profSectionProfilTest` | — | 2242 o | (sans commentaire) affiche/emploie : « <h2>Profil test</h2><div class= · >\u23f3 Chargement\u2026</div> » | _renderProfSection |
| `_profSectionTaxo` | — | 118 o | (sans commentaire ni indice) | _renderProfSection |
| `_pubCtrl` | node,kind,level,chnum,snum,itemId | 1171 o | (sans commentaire) affiche/emploie : « <span class= · >+ classe ?</span> » | renderChapterCard, renderItem, renderSeance |
| `_pubCtrlToutes` | node, level, kind, chnum, snum, itemId | 1051 o | Emplacement : à côté des points de classe, en Vue d'ensemble. Le geste appartient à la même famille (publier un élément), pas à la loupe (qui choisit un point de vue). | _pubCtrl |
| `_pubEtatNiveau` | node, level | 251 o | M8 ① — PUBLIER POUR TOUTES LES CLASSES DU NIVEAU (arbitrage Paul, 19/07) Construit SUR le mécanisme par classe existant : aucune donnée nouvelle, aucun chemin d'écriture parallèle. | _pubCtrlToutes, _togglePubNiveau |
| `_purgeConfirm` | cheminCorbeille | 1064 o | (sans commentaire) affiche/emploie : « <div class= · >✓ Sauvegardes faites » — touche #prcf, #prcferr | _purgeSauvegarde |
| `_purgeDryRun` | — | 1442 o | (sans commentaire) affiche/emploie : « <div class= ·  emplacement » | _purgeOpen, _purgeSauvegarde |
| `_purgeExec` | — | 989 o | (sans commentaire) affiche/emploie : « Purge en cours… · <div class= » | _purgeConfirm |
| `_purgeExpand` | hub,path,preservers | 495 o | Expansion d'un chemin purgé face aux branches préservées : rend la liste des DELETE concrets. | _purgePlan |
| `_purgeOpen` | — | 375 o | (sans commentaire) affiche/emploie : « Purge de rentrée · <div class= » | _profSectionConfig |
| `_purgePlan` | hub | 1109 o | (sans commentaire ni indice) | _purgeOpen |
| `_purgeResoudreMotif` | hub,motif | 452 o | ===== PURGE DE RENTRÉE — exécuteur des contrats de purge (Phase 2, lot 3) ===== Lit les manifestes publiés par les apps (manifestes/<id>.purge), résout les motifs (wildcard * = tous les enfants exista | _purgePlan |
| `_purgeSauvegarde` | — | 866 o | (sans commentaire) affiche/emploie : « <div class= · ;   _showConsoleModal( » | _purgeDryRun |
| `_putCode` | nom,slug,code | 863 o | (sans commentaire) affiche/emploie : « Enregistrement du code de  » — ECRIT au hub | _resetAllCodesClasse |
| `_pvBindLazy` | root | 460 o | (sans commentaire) affiche/emploie : « );     d.addEventListener( · ,function(){       if(d.open&&!d.getAttribute( » | _showConsoleModal |
| `_pvChildrenHtml` | v | 426 o | (sans commentaire) affiche/emploie : « <div class= · );   if(more>0)html+= » | _pvBindLazy |
| `_pvInit` | d | 36 o | (sans commentaire ni indice) | _hubDetailHtml |
| `_pvRegister` | v | 45 o | (sans commentaire ni indice) | _pvRow |
| `_pvRow` | k,val | 528 o | (sans commentaire) affiche/emploie : « <details class= ·  data-id= » | _pvChildrenHtml, _renderNodeBody |
| `_quitterProfilTest` | — | 34 o | (sans commentaire ni indice) | _showTestBanner |
| `_rayonPoser` | idCompteur,n,mot | 96 o | le rendu d'un rayon : les cartes PAR CHAPITRE (patron renderItemListByChapter), précédées du compteur réel — les compteurs du HTML existent déjà, on les remplit. | renderRayons |
| `_readBackupJournal` | — | 96 o | --- Journal des sauvegardes (stockage local du navigateur) --- | _logBackup, _profSectionArchives |
| `_renderClassPalette` | — | 266 o | (sans commentaire) affiche/emploie : « <span class= ·  style= » — touche #class-modal-palette | _pickClassColor, openCreateClassModal |
| `_renderIntentTimer` | levelCode | 590 o | (sans commentaire) affiche/emploie : « );var lead=lp.join( · );var el=document.getElementById( » — touche #intent-secs, #intent-timer-val | showIntentSurvey |
| `_renderLensBar` | level | 952 o | (sans commentaire) affiche/emploie : « <div class= · ><span class= » | renderChapitres |
| `_renderNodeBody` | node,v | 1667 o | (sans commentaire) affiche/emploie : « <div class= · ;   if(Array.isArray(v)){     if(v.length&&typeof v[0]=== » | _hubDetailHtml |
| `_renderProfSection` | id | 817 o | M8-FUSION | showProfSection |
| `_resLibelle` | source,ref,kind | 405 o | [LOT8-\u2466] LE LIBELL\u00c9 LISIBLE D'UNE RESSOURCE \u2014 pour nommer l'ancienne et la nouvelle dans l'avertissement, et l'historique au panneau. | applyLinkChanges, atEditerChapitreRendre, edLierConfirme, openLinkModal |
| `_resetAllCodesClasse` | slug | 489 o | (sans commentaire) affiche/emploie : « R\u00e9g\u00e9n\u00e9rer tous les codes » | _profSectionEleves |
| `_routeFileToTarget` | target,file | 996 o | (sans commentaire) affiche/emploie : « \u26a0 Niveau introuvable · );return;}   var itemEl=target.closest( » | initChapterDragDrop |
| `_saveJSON` | obj,filename | 572 o | (sans commentaire) affiche/emploie : « Sauvegarde MJPC (JSON) » | _b2DoSave, _corbExport, _doImport, _exportDiagnostic (+7) |
| `_secuPurgerClair` | cles,nbVestiges,dejaFaits | 2377 o | (sans commentaire) affiche/emploie : « Retrait en cours · <div class= » | secuRetirerClair |
| `_secuVerifCodeEleveSite` | found,saisie | 678 o | M-SÉCU-5 : la vérification du code élève au portail du site — empreinte prioritaire (aucune clé requise), clair résiduel puis cache en replis. | doLogin |
| `_selectProfElClasse` | slug | 48 o | (sans commentaire ni indice) | _profSectionEleves |
| `_selectTestClasse` | k | 52 o | (sans commentaire ni indice) | _profSectionProfilTest |
| `_sesRangLocal` | o,W | 118 o | [LOT C2 \u2462.5] la r\u00e9solution locale : chaque appareil traduit l'identit\u00e9 re\u00e7ue en SON propre rang. | _sesTabComposer, sesAppliquer |
| `_sesTabBoite` | r | 1386 o | [LOT E] LE MUR SE DÉCOUPE LUI-MÊME À QUOI ÇA SERT EN CLASSE : | sesTabMonter, sesTabPoll |
| `_sesTabComposer` | W,o,essai | 2562 o | la composition du mur : on repart TOUJOURS du père recollé, on pose le dévoilement, on laisse le moteur scinder à sa boîte, puis on va au bon morceau. | sesTabPoll |
| `_showConsoleModal` | title,bodyHtml,actions | 900 o | ===== fin UNIFIER ===== | _b2Check, _b2Confirm, _b2DoSave, _b2ExecReel (+31) |
| `_showTestBanner` | nomAff | 321 o | (sans commentaire) touche #test-banner | _activerProfilTest |
| `_siteDelete` | chemin, cb | 289 o | (sans commentaire) affiche/emploie : « , {method: » | atSiteDelete, reinitialiserBrevetDates |
| `_siteGet` | chemin, cb | 585 o | (sans commentaire ni indice) | _chargerTextesSite, _corbCharger, _corbRestaurer, atArchivesLire (+12) |
| `_sitePut` | chemin, valeur, cb | 590 o | (sans commentaire) affiche/emploie : « , {method: · , headers:{ » — ECRIT au hub | _editerTexteSeanceSansDoc, _taxoEcrire, atSitePut, ecrireAnnonce (+9) |
| `_slugifyClass` | nom | 127 o | (sans commentaire ni indice) | _applyPubCascade, _markPub, isPubFor, submitCreateClass |
| `_swapOrdre` | pathA,pathB,oldA,oldB,onDone | 531 o | (sans commentaire) affiche/emploie : « ordre du premier · ordre du second » — ECRIT au hub | edDeplacerItem, edDeplacerSeance, moveChapter, moveImageInGallery (+2) |
| `_tally` | a | 62 o | (sans commentaire ni indice) | _analyzeNode |
| `_taxoChampForm` | prefixeDom, suffixe, etiquette, valeur,  | 262 o | Rendu : HTML pur depuis un document donné (testable au banc), ids validés avant toute injection en attribut, libellés échappés. | _taxoFormCreation, _taxoFormEdition |
| `_taxoCollision` | t, id | 48 o | null si le domaine n'a aucun id lisible : refus explicite en amont | _taxoIdNeuf |
| `_taxoEcrire` | sousChemin, valeur, cb | 670 o | Écriture CIBLÉE sous /taxonomie. Jamais le document entier : un PUT ciblé ne peut abîmer que le champ visé. | _taxoGesteBasculer, _taxoGesteCreer, _taxoGesteEditer |
| `_taxoFormCreation` | idFam | 860 o | (sans commentaire) affiche/emploie : « <div class= ·      + _taxoChampForm( » | _taxoLigneFamille |
| `_taxoFormEdition` | n | 784 o | (sans commentaire) affiche/emploie : « <div class= ·      + _taxoChampForm( » | _taxoLigneNotion |
| `_taxoGesteBasculer` | idNotion, cb | 831 o | (sans commentaire) affiche/emploie : « Le changement n\u2019a pas pu être enregistré. Réessaie. » | taxoBasculer |
| `_taxoGesteCreer` | idFam, valeurs, cb | 1055 o | (sans commentaire) affiche/emploie : « La notion n\u2019a pas pu être créée. Réessaie. » | taxoCreerEnregistrer |
| `_taxoGesteEditer` | idNotion, valeurs, cb | 968 o | LES TROIS GESTES — logique pure (testable au banc), relecture fraîche systématique, écriture de la NOTION ENTIÈRE (objet frais fusionné : tout champ inconnu est préservé) puis du META. | taxoEditerEnregistrer |
| `_taxoHtml` | t | 1330 o | (sans commentaire) affiche/emploie : « <p class= · ;   if(m8TestOn()){     h +=  » | taxoRender |
| `_taxoIdNeuf` | t, di | 708 o | (sans commentaire ni indice) | _taxoGesteCreer |
| `_taxoIdSur` | id | 53 o | Couche DOM des gestes | _taxoLigneFamille, _taxoLigneNotion, taxoBasculer, taxoCreerOuvrir (+3) |
| `_taxoJourISO` | d | 138 o | (sans commentaire) affiche/emploie : « ) + n; };   return d.getFullYear() +  ·  + p(d.getMonth() + 1) +  » | _taxoMetaSuivant |
| `_taxoLigneDomaine` | d | 733 o | (sans commentaire) affiche/emploie : « <div class= ·  + (deplie ?  » | _taxoHtml |
| `_taxoLigneFamille` | f | 978 o | (sans commentaire) affiche/emploie : « <div class= ·  + (deplie ?  » | _taxoLigneDomaine |
| `_taxoLigneNotion` | n | 1023 o | (sans commentaire) affiche/emploie : « <div class= ·  + (inactif ?  » | _taxoLigneFamille |
| `_taxoLireChamps` | prefixeDom | 250 o | (sans commentaire) affiche/emploie : « ; };   return { libelleProf: lire( · ), libelleEleve: lire( » | taxoCreerEnregistrer, taxoEditerEnregistrer |
| `_taxoMetaSuivant` | t | 221 o | (sans commentaire ni indice) | _taxoGesteBasculer, _taxoGesteCreer, _taxoGesteEditer |
| `_taxoPad3` | n | 68 o | Id neuf : préfixe DÉRIVÉ des ids existants du domaine (jamais une table en dur — le fichier fait foi), numéro = max GLOBAL du préfixe + 1. Les trous historiques (ortho-lex-009, ortho-gram-033 : | _taxoIdNeuf |
| `_taxoPrefixeDomaine` | t, di | 564 o | (sans commentaire ni indice) | _taxoIdNeuf |
| `_taxoTrouverFamille` | t, idFam | 292 o | (sans commentaire ni indice) | _taxoGesteCreer |
| `_taxoTrouverNotion` | t, idNotion | 399 o | Résolution PAR ID sur l'état frais : les indices ne sont jamais mémorisés entre deux gestes, ils se recalculent à chaque écriture. | _taxoCollision, _taxoGesteBasculer, _taxoGesteEditer, taxoBasculer |
| `_taxoValiderChamps` | v | 311 o | (sans commentaire) affiche/emploie : « Écris d\u2019abord le libellé professeur. · Écris aussi le libellé élève (ce que lisent les élèves). » | taxoCreerEnregistrer, taxoEditerEnregistrer |
| `_taxoVersionSuivante` | v | 166 o | Version : CHAQUE écriture incrémente meta/version (patch) et met meta/date au jour — UN SEUL PUT sur /meta (objet frais entier, version et date modifiées ensemble : | _taxoMetaSuivant |
| `_togglePubNiveau` | node, level, chnum, snum, itemId | 245 o | nv est calculé UNE fois avant la boucle : sinon la bascule se contredirait d'une classe à l'autre au fil des écritures. | togglePublishChapterAll, togglePublishItemAll, togglePublishSeanceAll |
| `_tsName` | kind | 166 o | (sans commentaire ni indice) | _b2DoSave, _corbExport, _doImport, _exportDiagnostic (+5) |
| `_uniApply` | hub,nodes | 664 o | Applique les renommages sur une copie du hub | _uniConfirm, _uniExec |
| `_uniCanon` | s | 135 o | Etiquette canonique d'un eleve : minuscules, sans accents, nom_prenom | _uniVarMap, _uniVariants |
| `_uniConfirm` | savedName | 1089 o | (sans commentaire) affiche/emploie : « <div class= · >Sauvegarde enregistr\u00e9e\u00a0: <code> » — touche #uniWord | _uniSave |
| `_uniExec` | savedName | 1167 o | (sans commentaire) affiche/emploie : « Unification en cours\u2026 · <div class= » — ECRIT au hub | _uniConfirm |
| `_uniInfo` | — | 1724 o | (sans commentaire) affiche/emploie : « <div class= · ;   _showConsoleModal( » | _uniRender |
| `_uniNoms` | hub | 291 o | Referentiel : tous les eleves reels, depuis /classes | _uniVarMap |
| `_uniOpen` | — | 395 o | (sans commentaire) affiche/emploie : « <div class= · >Lecture du hub en cours\u2026</div> » | _profSectionConfig |
| `_uniPlan` | hub | 478 o | Plan complet, rubrique par rubrique | _uniOpen |
| `_uniRender` | — | 2428 o | (sans commentaire) affiche/emploie : « Unifier les identifiants d\u2019\u00e9l\u00e8ves · <div class= » | _uniInfo, _uniOpen, _uniSave |
| `_uniSave` | — | 588 o | Sauvegarde D'ABORD : si l'enregistrement est annule, on n'ecrit rien. | _uniRender |
| `_uniScanNode` | root,node,VAR | 768 o | Parcours d'une rubrique : repere toute cle correspondant a un eleve connu | _uniApply, _uniPlan |
| `_uniVarMap` | hub | 426 o | Table variante -> etiquette canonique. Les variantes ambigues (2 eleves) sont ecartees. | _uniApply, _uniPlan |
| `_uniVariants` | n | 746 o | Toutes les formes qu'un nom a pu prendre selon les anciennes fonctions. Indispensable : | _uniVarMap |
| `_uploadBlobToDrive` | blob,fileName,level,chnum,snum | 3333 o | (sans commentaire) affiche/emploie : « MJPC d\u00e9p\u00f4t \u2014 fichier trop lourd : · )[1];       mjpcFetchOk(APPS_SCRIPT_DEPOT_URL,{method: » | _createGalleryItemWithFirstImage, addImageToGallery, uploadFileForChapterItem, uploadFileForNewItem |
| `_visiblePourSession` | node,level | 214 o | (sans commentaire ni indice) | collectAutonomieItems, collectChapterItems, renderChapitres, renderChapterCard (+2) |
| `_writeSharedSession` | ev | 179 o | (sans commentaire ni indice) | _activerProfilTest, _loginEleveFound, loginAsProf, trackLogin |


## MOTEUR — le déroulé (fichier autonome encodé, JAMAIS modifié)

| fonction | args | taille | ce qu'elle fait | appelée par |
|---|---|---|---|---|
| `affiche` | — | 146 o | (sans commentaire) affiche/emploie : « +Math.floor(t/60)).slice(-2);   document.getElementById( » — touche #cmin, #csec | chrono, regleChrono |
| `ajoute` | t | 891 o | (sans commentaire) affiche/emploie : « ,etapes:[],vues:0,neuf:true});   if(t=== · Fiche · à choisir » | — |
| `allerRep` | n,k | 181 o | (sans commentaire) affiche/emploie : « #contenu [data-p$= » — touche #ppop | ouvrirPart |
| `allume` | el | 146 o | (sans commentaire ni indice) | allumeTableau |
| `allumeTableau` | cle | 195 o | (sans commentaire ni indice) | — |
| `animeArrivees` | av | 1256 o | (sans commentaire) affiche/emploie : « );       if(el)el.classList.add( · );       if(revNow===1){ var a=r.querySelector( » — touche #contenu, #t | rendre |
| `annuler` | — | 112 o | (sans commentaire ni indice) | — |
| `arbre` | L | 1753 o | ARBRE : profondeur déduite de l'indentation | schemaHTML |
| `armeMk` | o | 101 o | (sans commentaire ni indice) | outilsDuRegime, reglages |
| `bascule` | j,k | 91 o | (sans commentaire ni indice) | html |
| `blocImg` | — | 89 o | (sans commentaire ni indice) | editeMarque |
| `borneRev` | — | 396 o | (sans commentaire ni indice) | rendre |
| `bornes` | n | 181 o | (sans commentaire ni indice) | ctxDup, ctxMonte, ctxSup, ctxVide |
| `cale` | t | 182 o | (sans commentaire ni indice) | dessineEcran, envoie |
| `calePilote` | — | 342 o | conservé pour les vignettes | rendre |
| `calibreMarques` | racine | 464 o | (sans commentaire) affiche/emploie : « IMAGE : elles occupent la même part      de l · ; });   var lg=racine.querySelector( » | dessineEcran, envoie, rendre |
| `carte` | L | 2412 o | (sans commentaire) affiche/emploie : « );     return {nom:(p[0]·· · ).trim(), membres:(p[1]·· » | schemaHTML |
| `cbColle` | — | 200 o | (sans commentaire ni indice) | — |
| `cbCopie` | — | 62 o | (sans commentaire ni indice) | — |
| `cbCoupe` | — | 156 o | (sans commentaire ni indice) | — |
| `cbDup` | — | 108 o | (sans commentaire ni indice) | — |
| `cbMove` | d | 148 o | (sans commentaire ni indice) | — |
| `cbSup` | — | 126 o | (sans commentaire ni indice) | — |
| `chrono` | — | 252 o | (sans commentaire) affiche/emploie : « );   if(run){clearInterval(run);run=null;b.textContent= · ;return;}   b.textContent= » — touche #bchr | — |
| `citations` | b,j,e | 1337 o | (sans commentaire) affiche/emploie : « ;   if(corps){ var d=document.createElement( · encadré seuls : ils ne disent rien à l » | majVues |
| `cle` | txt | 70 o | (sans commentaire ni indice) | arbre, carte, cycle, dessine (+1) |
| `cleObjet` | el | 155 o | (sans commentaire ni indice) | — |
| `connecteur` | type,graine | 66 o | (sans commentaire ni indice) | majVues |
| `copierED` | quoi | 1731 o | (sans commentaire) affiche/emploie : « écran. */   var src=document.getElementById( · ), out=document.createElement( » — touche #recit | majVues |
| `corps` | n | 25 o | (sans commentaire ni indice) | majVignette, rendre |
| `corpsFiche` | b,j | 195 o | (sans commentaire) affiche/emploie : « ;        /* la feuille d · annotation */   var cle=b.ref··( » | citations, envoie, ficheHTML, majVues (+3) |
| `corrigePart` | ini,id | 773 o | (sans commentaire) affiche/emploie : «  — corriger</h4> · <div class= » — touche #ppop | ouvrirPart |
| `coupeTexte` | html | 524 o | Un bloc unique trop long n'est JAMAIS refusé : il se coupe et coule sur l'écran suivant. | scinde |
| `csDup` | — | 107 o | (sans commentaire ni indice) | — |
| `csMove` | d | 145 o | (sans commentaire ni indice) | — |
| `csSup` | — | 114 o | (sans commentaire ni indice) | — |
| `ctxAller` | — | 26 o | (sans commentaire ni indice) | menuEcran |
| `ctxDup` | — | 367 o | (sans commentaire ni indice) | menuEcran |
| `ctxMonte` | d | 432 o | (sans commentaire ni indice) | menuEcran |
| `ctxReabs` | — | 52 o | (sans commentaire ni indice) | menuEcran |
| `ctxSup` | — | 215 o | (sans commentaire) affiche/emploie : « Nouvelle activité » | menuEcran |
| `ctxSupSuite` | — | 37 o | (sans commentaire ni indice) | menuEcran |
| `ctxVide` | — | 154 o | (sans commentaire) affiche/emploie : « Nouvelle activité » | menuEcran |
| `cycle` | L | 2187 o | CYCLE : étapes réparties sur un cercle | schemaHTML |
| `dansSurligne` | — | 437 o | (sans commentaire) affiche/emploie : « )return true;     var f=(n.style&&n.style.backgroundColor)·· » | forme |
| `deborde` | — | 504 o | et le débordement se traite pendant la frappe | rendre, verifDeborde |
| `degorge` | auto | 1449 o | (sans commentaire) affiche/emploie : « écran neuf montre d » — touche #contenu | rendre, verifDeborde |
| `dejaPosee` | b | 292 o | (sans commentaire) affiche/emploie : « original compte,      puisqu » | neuf_ |
| `dessine` | n | 530 o | (sans commentaire) affiche/emploie : « <g class= ·  data-k= » | arbre, carte, cycle, frise |
| `dessineEcran` | — | 320 o | (sans commentaire) touche #contenu | majB, repeintSch |
| `devoile` | — | 647 o | (sans commentaire) affiche/emploie : « abord le nom de l · )cour.vuesFiche=true;      /* on se souvient de ce qu » | — |
| `ecranDuMoment` | — | 177 o | (sans commentaire ni indice) | rendre |
| `editeMarque` | mk | 913 o | (sans commentaire) affiche/emploie : « ,fin); sp.removeEventListener( · ){ e.preventDefault(); sp.blur(); }     if(e.key=== » | — |
| `elems` | b | 1400 o | (sans commentaire) affiche/emploie : « intérieur d · ).filter(function(s){return s.trim();});     if((b.forme·· » | borneRev, devoile, rendre, replie |
| `empreinte` | s | 79 o | (sans commentaire ni indice) | connecteur |
| `envoie` | — | 2344 o | (sans commentaire) affiche/emploie : « ); if(!t)return;   var att=win.document.getElementById( · ); if(att)att.style.display= » — touche #att, #bmon, #c | affiche, dessineEcran, forme, gel (+2) |
| `esc` | s | 64 o | (sans commentaire ni indice) | dessine, grille |
| `estVisuel` | — | 31 o | (sans commentaire ni indice) | outilsDuRegime |
| `ferme` | — | 56 o | (sans commentaire) touche #ctx | cbColle, cbCopie, cbCoupe, cbDup (+17) |
| `fermeLoupe` | — | 59 o | (sans commentaire ni indice) | rendre |
| `ficheHTML` | b,pourClasse | 221 o | (sans commentaire) affiche/emploie : « elle est imprimée : A4 portrait, charte de l · <div class= » | rendre |
| `figeRecit` | — | 68 o | (sans commentaire) touche #recit | majVues |
| `forme` | q,couleur | 387 o | (sans commentaire ni indice) | — |
| `frise` | L | 2065 o | (sans commentaire) affiche/emploie : « );     return {d:parseInt((p[0]·· · ;        /* rien à montrer : jamais de consigne d » | schemaHTML |
| `gel` | — | 185 o | (sans commentaire) touche #bgel | — |
| `grille` | L | 297 o | TABLEAU | schemaHTML |
| `histoire` | ini | 657 o | l'historique COMPLET d'un élève : ses réponses retenues ET ses prises sans réponse | ouvrirPart, peintQui, rendre |
| `hm` | m | 119 o | heure de début de la séance | horaires, majVues |
| `horaires` | — | 65 o | (sans commentaire ni indice) | ctxDup, ctxMonte, ctxSup, ctxVide (+5) |
| `html` | n,pourClasse | 7238 o | (sans commentaire) affiche/emploie : « écran d · affiche d » | dessineEcran, envoie, majVignette, rendre |
| `idBloc` | b | 37 o | (sans commentaire ni indice) | citations, cleObjet, lire, marque (+4) |
| `imagePleine` | n | 130 o | (sans commentaire ni indice) | dessineEcran, envoie, rendre |
| `imparfait` | s | 97 o | (sans commentaire ni indice) | recit |
| `ligne` | ev,j,k | 355 o | (sans commentaire) affiche/emploie : « on vient d · #contenu [data-p= » | html |
| `lire` | — | 2453 o | (sans commentaire) affiche/emploie : « #contenu [data-p] · ){ECRANS[i].act=el.textContent;return;}     p=p.split( » | ajoute, bascule, cbColle, cbCopie (+28) |
| `lisible` | s | 251 o | une citation ne se transpose pas | citations |
| `loupe` | n,j | 635 o | (sans commentaire) affiche/emploie : « );       if(e){ e.classList.add( · );         setTimeout(function(){ e.classList.remove( » — touche #t | fermeLoupe, html, majVues |
| `maintenant` | — | 57 o | (sans commentaire ni indice) | ecranDuMoment |
| `majB` | f,leger | 293 o | (sans commentaire ni indice) | prendreImage, setDev, setForme, setLeg (+5) |
| `majPart` | ini,id,type | 216 o | (sans commentaire) touche #pnote2 | corrigePart |
| `majVignette` | n | 365 o | (sans commentaire) affiche/emploie : « )     .replace(/onclick= · );   el.style.fontSize=corps(PT[iz]);   el.style.transform= » — touche #mini | — |
| `majVues` | — | 11115 o | (sans commentaire) affiche/emploie : « );     return (!(e.grp&&e.suite)? ·  data-sins= » — touche #bandeauRecit, #docs, #pap | dessineEcran, figeRecit, ong, rendRecit (+1) |
| `marque` | n,j,sous | 123 o | (sans commentaire ni indice) | html |
| `marqueFiche` | n,j,k | 100 o | (sans commentaire ni indice) | envoie, rendre |
| `marquePris` | — | 126 o | (sans commentaire) affiche/emploie : « #contenu .sch g.n » | repeintSch |
| `memeFeuille` | a,b | 211 o | (sans commentaire) affiche/emploie : « ) && (a.titre·· » | dejaPosee |
| `menuEcran` | ev,n | 1038 o | (sans commentaire) affiche/emploie : « ;   if(e.suite){     h= · écran d\ » — touche #ctx | majVues, rendre |
| `mesure` | txt,fs | 68 o | (sans commentaire ni indice) | arbre, carte, cycle, frise |
| `neuf_` | b | 507 o | (sans commentaire ni indice) | cbColle, cbCopie, cbCoupe, cbDup (+3) |
| `nouvelEcran` | — | 98 o | (sans commentaire) affiche/emploie : « Nouvelle activité » | — |
| `ong` | v | 274 o | (sans commentaire) affiche/emploie : « );});   document.getElementById( · );   document.querySelectorAll( » — touche #v- | majVues |
| `ouTexte` | n | 414 o | (sans commentaire) affiche/emploie : « à la question, pas seulement l · ;   var q=e.blocs.filter(function(b){return b.t=== » | histoire, partAjoute |
| `outilsDuRegime` | — | 1297 o | (sans commentaire) affiche/emploie : « on peut faire selon le type d · ;       e.disabled=true; e.classList.add( » — touche #bajimg, #bajsch | rendre |
| `ouvrirPart` | ini | 1902 o | (sans commentaire) affiche/emploie : « ), hist=histoire(ini), h= ·  de parole</h4> » — touche #ppop | majPart, rendre, supPart |
| `ouvrirRappel` | j | 862 o | (sans commentaire) affiche/emploie : « <h4>Pourquoi ce rappel ?</h4> · <button class= » — touche #ppop | html |
| `partAjoute` | ini,type,note | 358 o | (sans commentaire ni indice) | posePart |
| `partRetire` | ini,id | 171 o | la modale « qui a participé » suit, si elle est ouverte | supPart |
| `pas` | d | 231 o | (sans commentaire ni indice) | devoile |
| `peintQui` | — | 880 o | (sans commentaire) affiche/emploie : « );   if(!d){ d=win.document.createElement( · ; d.className= » — touche #qui | envoie, partAjoute, partRetire, quiParle (+1) |
| `personne` | t | 88 o | (sans commentaire ni indice) | majVues, recit |
| `photoVu` | — | 214 o | (sans commentaire ni indice) | devoile |
| `posePart` | type | 165 o | (sans commentaire) affiche/emploie : « );   partAjoute(partEleve,type,n?n.value.trim(): · );   document.getElementById( » — touche #pnote, #ppop | ouvrirPart |
| `poseRappel` | j,motif,libreSeul | 276 o | (sans commentaire) touche #ppop, #rlibre | ouvrirRappel |
| `prendreImage` | f | 169 o | (sans commentaire ni indice) | reglages |
| `prenom` | i | 55 o | (sans commentaire ni indice) | peintQui |
| `purgeMarques` | e,b | 171 o | (sans commentaire ni indice) | cbCoupe, cbSup, selCopie2, selSup |
| `quiParle` | — | 97 o | (sans commentaire) touche #bqui | — |
| `reabsorbe` | — | 2117 o | (sans commentaire) affiche/emploie : « ); }         else if(b.t=== · écran ne suffit pas, c » | ctxReabs, zoom |
| `recit` | t | 1217 o | (sans commentaire) affiche/emploie : « ); d.innerHTML=String(t·· · );   var s=d.textContent.trim(); if(!s)return  » | majVues |
| `regime` | n | 179 o | RÉGIME DE L'ÉCRAN Un écran de schéma ou d'image obéit aux gestes des MAQUETTES (glisser, poignées, marques). | estVisuel |
| `reglages` | — | 2997 o | (sans commentaire) affiche/emploie : « ;return;}   var b=e.blocs.filter(function(x){return x.t=== · ;})[0];   blocRegle=b··null;   if(!b){ z.innerHTML= » — touche #regl | armeMk, rendre |
| `regleChrono` | — | 105 o | (sans commentaire) touche #cmin, #csec | — |
| `rendRecit` | — | 128 o | (sans commentaire ni indice) | majVues |
| `rendre` | — | 8323 o | (sans commentaire) affiche/emploie : « #contenu .f-cadre · <div class= » — touche #contenu, #durees, #etat | ajoute, annuler, bascule, cbColle (+33) |
| `repeintSch` | — | 33 o | PRÉHENSION — déplacer, redimensionner, sélectionner (repris des maquettes A et B) | — |
| `replie` | — | 663 o | (sans commentaire) affiche/emploie : « écran d » | — |
| `sauve` | — | 78 o | (sans commentaire ni indice) | ajoute, bascule, cbColle, cbCoupe (+20) |
| `schEch` | — | 64 o | une seule réglette pour tout l'écran : le schéma en dérive, comme la fiche et l'image | arbre, carte, cycle, frise |
| `schLignes` | b | 126 o | (sans commentaire) affiche/emploie : « ).map(function(s){return s.replace(/\s+$/, » | schemaHTML |
| `schemaHTML` | b,pourClasse | 803 o | (sans commentaire) affiche/emploie : « )return carte(L);   if(t=== · )return frise(L);   if(t=== » | html |
| `scinde` | e | 3153 o | (sans commentaire) affiche/emploie : « une réponse trop longue, le texte du bloc, les blocs d · +(++FRAG);   var reste=null;   if(b.t=== » | degorge |
| `scrollFiche` | el | 158 o | (sans commentaire ni indice) | rendre |
| `selCopie` | — | 144 o | (sans commentaire ni indice) | — |
| `selCopie2` | — | 342 o | (sans commentaire ni indice) | selCoupe |
| `selCoupe` | — | 16 o | (sans commentaire ni indice) | — |
| `selEcrire` | — | 232 o | (sans commentaire ni indice) | — |
| `selSup` | — | 876 o | (sans commentaire) affiche/emploie : « )[1];}).forEach(function(s){     var q=s.sous.split( · ), b=e.blocs[s.bloc]; if(!b)return;     var arr=(q[0]=== » | — |
| `selVide` | — | 104 o | (sans commentaire) affiche/emploie : « #contenu .sel » | selCopie, selCopie2, selEcrire, selSup |
| `separe` | N,W,H,marge | 1612 o | (sans commentaire ni indice) | arbre, carte, cycle, frise |
| `setDev` | v | 67 o | (sans commentaire ni indice) | reglages |
| `setForme` | v | 46 o | (sans commentaire ni indice) | reglages |
| `setLeg` | v | 44 o | (sans commentaire ni indice) | reglages |
| `setPos` | v | 34 o | (sans commentaire ni indice) | reglages |
| `setRef` | v | 219 o | (sans commentaire) affiche/emploie : « );   /* [n°91] le lien d · <a href= » — touche #rgl-a | reglages |
| `setSrc` | v | 40 o | (sans commentaire ni indice) | reglages |
| `setSupport` | v | 58 o | (sans commentaire ni indice) | reglages |
| `sousTab` | — | 112 o | (sans commentaire) affiche/emploie : « ),b=ECRANS[i].blocs[ctxBloc];   return {a:(q[0]=== » | csDup, csMove, csSup |
| `spot` | — | 129 o | (sans commentaire) affiche/emploie : « ,spotOn);   document.getElementById( » — touche #bspot | outilsDuRegime, stylo |
| `stylo` | — | 164 o | (sans commentaire) affiche/emploie : « ,styloOn);   document.getElementById( » — touche #bstylo | outilsDuRegime |
| `supMk` | k | 54 o | (sans commentaire ni indice) | reglages |
| `supPart` | ini,id | 50 o | (sans commentaire ni indice) | corrigePart, ouvrirPart |
| `supprimeSuite` | n | 398 o | (sans commentaire ni indice) | ctxSupSuite, rendre |
| `surface` | N,W,H,marge | 370 o | (sans commentaire ni indice) | arbre, carte |
| `tableau` | — | 9059 o | (sans commentaire) affiche/emploie : « Fenêtre bloquée — autorise les fenêtres pour ce site. · <!DOCTYPE html><html lang= » — touche #ad, #ah, #charte-fiche | — |
| `uid` | — | 61 o | MATRICE ACTIONS × ÉTAT — ce que chaque geste fait de l'état d'un bloc. Toute fonction nouvelle DOIT s'y conformer, sinon elle télescopera les autres. | ajoute, idBloc, neuf_, partAjoute (+1) |
| `urlMedia` | ref | 91 o | (sans commentaire ni indice) | html, reglages, setRef |
| `va` | n | 134 o | (sans commentaire ni indice) | allerRep, ctxAller, majVues, rendre |
| `verifDeborde` | — | 761 o | (sans commentaire) affiche/emploie : « #contenu [data-p= » — touche #contenu | — |
| `zoom` | — | 163 o | au dégel, rendre() → envoie() repeint le tableau | — |


## PONT DÉROULÉ — cadre, adaptateur, trame, identités, trace

| fonction | args | taille | ce qu'elle fait | appelée par |
|---|---|---|---|---|
| `_drAfficher` | on | 1117 o | le suiveur : l'iframe (fixe, dans body) épouse la zone at-dr-hote-zone | — |
| `_drAssurerCadre` | — | 731 o | (sans commentaire) affiche/emploie : « lecture impossible —  » — touche #at-dr-iframe | sesTabMonter, sesTelChercherCours |
| `_drBaseHeure` | — | 266 o | (sans commentaire ni indice) | _drTraceAuto, _drTraceReprendre, atDrJouerClic, atVecuEcrire |
| `_drBaseHeureDe` | c,ts | 264 o | (sans commentaire ni indice) | _drCloreHeureRestee, _drHeureCloseAu |
| `_drCalerStructure` | — | 1760 o | battement propre : Structure se cale même sans cadre | _drAfficher |
| `_drCleHeure` | — | 480 o | (sans commentaire) affiche/emploie : « exige : \u00ab le d\u00e9roul\u00e9 de      l » | _drBaseHeure |
| `_drCleHeureDe` | c,ts | 348 o | hors emploi du temps : le cr\u00e9neau reste ce qu'il est | _drBaseHeureDe, _drCleHeure |
| `_drCloreHeureRestee` | slugNeuf,nomNeuf | 1672 o | (sans commentaire) affiche/emploie : « est jamais bloqu\u00e9 \u2014 on      avertit d · Cl\u00f4ture certaine de l\u2019heure pr\u00e9c\u00e9dente » — hub /site/cours_actif — ECRIT au hub | atDrJouerClic |
| `_drCopieAuto` | — | 684 o | [classe · copie au fil de l'eau] atDrEnrAuto protège la préparation (« en classe, rien ne remonte ») — mais LA COPIE de la classe doit, elle, suivre chaque geste : | _drEnvelopper |
| `_drCoupe` | t,n | 66 o | (sans commentaire) affiche/emploie : « ); return t.length>n? t.slice(0,n)+ » | atDrModifsDeLaSeance, atT5Modale |
| `_drCoursActifEffacerSi` | sig | 318 o | `cours_actif` CESSE D'\u00caTRE UNE SECONDE SOURCE : il ne peut \u00eatre que le REFLET de la trace ouverte. Toute cl\u00f4ture le retire \u2014 mais SEULEMENT s'il d\u00e9signe encore l'heure close : | _drCloreHeureRestee |
| `_drCreneauDe` | c | 246 o | [LOT C3a \u2460] LE CR\u00c9NEAU ET LA CL\u00c9 D'UNE HEURE \u2014 UNE SEULE FABRIQUE, pour `AT_DR_COURS` comme pour le pointeur `cours_actif` lu au hub. | _drCleHeureDe, _drCloreHeureRestee, _drCreneauHeure |
| `_drCreneauHeure` | — | 37 o | (sans commentaire ni indice) | _drPaquetHeure, _drTraceReprendre, atDrJouerClic |
| `_drEcrireTrame` | sk,motif | 205 o | (sans commentaire) ECRIT au hub | atEcranDupliquer, atEcranEnvoyer, atEcranSupprimer |
| `_drEidDuRang` | n,ecrans | 315 o | l'identité D'USAGE d'un rang : celle du PÈRE si le rang désigne un fils du zoom. | _drPaquetHeure, sesPartEmettre, sesPhoto |
| `_drEidNeuf` | — | 77 o | [LOT C2 ①] L'IDENTITÉ DES ÉCRANS — le principe du 08/08 enfin étendu « chaque bloc porte un identifiant propre ; | _drEnvelopper, _drIdentifierEcrans |
| `_drEmpreinte` | ecran | 171 o | (sans commentaire) affiche/emploie : « +_drTexteBloc(bl); });   return (ecran.act·· » | atDrModifsDeLaSeance |
| `_drEmpreinteTrame` | ecrans | 325 o | [LOT A ③] L'EMPREINTE DE TRAME — le jeton disait le LIEU, jamais le CONTENU (level·chnum·snum·classe·joué) : | — |
| `_drEntreesEcran` | sk,n | 1130 o | (sans commentaire) affiche/emploie : « Dupliquer ici · Envoyer vers «  » | — |
| `_drEnvelopper` | — | 18638 o | les enveloppes runtime (le fichier du jeu n'est jamais modifié) : · rendre() → suivi de l'écran courant (colonne, vécu) — couvre va, pas, annuler, vignettes ; | _drVerifier |
| `_drFlushTrame` | ancienJeton | 749 o | [flush de bascule] un enregistrement automatique en attente (debounce 900 ms) au moment de changer de séance serait détourné vers la NOUVELLE (perte silencieuse de la dernière édition — prouvé au banc | — |
| `_drHabiller` | — | 538 o | [É3] dans le CADRE, la barre du haut et la colonne vignettes du moteur font DOUBLON avec la barre MJPC et le sommaire natif : | atDrVueInterne |
| `_drHeureCloseAu` | c,cb | 209 o | LA TRACE FAIT FOI : une heure close ne se reprend plus, par aucun chemin. | sesReprendre, sesReprisePoser |
| `_drIdentifierEcrans` | ecrans | 275 o | (sans commentaire) affiche/emploie : « a JAMAIS d » | _drNormaliserTrame, atDrJouer, sesBrancherPilote, sesBrancherPiloteTel |
| `_drInitialesDe` | nom | 255 o | [reléve-en-dur · les trois branchements] la maquette n'a plus le dernier mot : | — |
| `_drLibelles` | — | 442 o | [LOT A \u2466] LES DEUX LIBELL\u00c9S DE LA MAQUETTE \u2014 pourquoi ils ne prenaient pas Le moteur porte en dur « \u00c9crans \u00b7 s\u00e9ance 3 » (.vgt) et « Participation \u00b7 3e Franklin Areth | — |
| `_drMorceauDuDevoilement` | W,n | 946 o | LE SENS QUI MANQUAIT : du dévoilement cumulé VERS le morceau. `_drVuePere` sait aller du morceau au père ; ici on fait le chemin inverse. | _sesTabComposer |
| `_drNormaliserTrame` | ecrans | 878 o | (sans commentaire) affiche/emploie : « ; if(typeof r.r!== · ){         if(typeof b.src!== » | _drVerifier, sesPollPilote, sesTabMonter, sesTabPoll (+1) |
| `_drPaletteBrancher` | d | 269 o | (sans commentaire ni indice) | — |
| `_drPaletteOuvrir` | d | 6888 o | [palette Maj+Espace — la touche de Paul] d'où que vienne le geste (champ de consigne, réponse au tableau, nulle part), Maj+Espace fait surgir la palette en surimpression : | _drPaletteBrancher |
| `_drPaquetHeure` | clos | 2162 o | le paquet de l'heure — EXACTEMENT celui que composait atVecuEcrire, extrait pour être poussé au fil de l'eau comme à la clôture. Rien n'y est inventé. | _drTraceAuto, atDrJouerClic, atVecuEcrire |
| `_drPontEtat` | — | 380 o | (sans commentaire) affiche/emploie : « <span class= ·      +(AT_PONT.ecart?( » — touche #at-dr-tete | _drVerifier |
| `_drPoserContexteMoteur` | — | 1124 o | (sans commentaire) touche #at-dr-classe, #at-dr-debut | sesTelChercherCours |
| `_drPrenomsDeLaClasse` | slug | 700 o | NOM Prénom → P+N ? non : prénom d'abord au moteur | _drPoserContexteMoteur |
| `_drProchainCreneau` | — | 545 o | (sans commentaire) affiche/emploie : « EDT hebdo */     return jours[d.getDay()]+ · +mois[d.getMonth()];   }catch(e){return  » — touche #at-dr-creneau | _drPoserContexteMoteur |
| `_drQuandPret` | fn | 55 o | (sans commentaire ni indice) | atDrVueInterne, sesBrancherPilote, sesTabMonter, sesTelChercherCours |
| `_drRangDeLEid` | eid,ecrans | 165 o | le rang LOCAL d'une identité — chaque appareil a le sien, et c'est tout l'objet du lot. | _sesRangLocal |
| `_drRangPere` | n,ecrans | 177 o | le rang du PÈRE : le vécu, la participation et les décisions s'y ancrent toujours. | atVecuEntrer |
| `_drRatioEcran` | W | 173 o | (sans commentaire) touche #ecran | sesPhoto |
| `_drRechargerSi` | sk | 172 o | (sans commentaire ni indice) | atEcranDupliquer, atEcranEnvoyer, atEcranSupprimer |
| `_drRecollerEtapes` | t | 1753 o | [LOT E · COMPLÉMENT 2] recolle les fragments d'étape (`suiteEt`) dans la trame, du dernier vers le premier — une étape coupée en trois se recolle de proche en proche. | _drEnvelopper, _drRefusionner |
| `_drReconstruire` | — | 165 o | (sans commentaire) touche #at-dr-iframe | _drAfficher |
| `_drRefusionner` | t | 2504 o | [refusion à l'export] scinde() coupe pour la PROJECTION (« rien n'est jamais refusé ») : écran-fragment grp+suite, dur:0, blocs frag. L'artifice ne doit pas fuir dans la donnée : | _drVuePere |
| `_drSain` | — | 234 o | [garde] la santé du cadre : le jeu répond et la scène existe. | _drAfficher |
| `_drSignatureCours` | c | 100 o | la SIGNATURE d'une heure : ce qui la distingue de toute autre. Elle sert au compare-et-efface du pointeur (\u2460) et \u00e0 la banni\u00e8re (\u2461). | _drCloreHeureRestee, _drCoursActifEffacerSi, sesReprendre, sesReprisePoser (+1) |
| `_drTailleCadre` | — | 207 o | la bo\u00eete du cadre, mesur\u00e9e : c'est elle qui grandit ou r\u00e9tr\u00e9cit quand Paul partage son \u00e9cran en deux, et c'est d'elle que d\u00e9pend le d\u00e9bordement. | _drEnvelopper |
| `_drTexteBloc` | bl | 226 o | (sans commentaire) affiche/emploie : « ;   var t=bl.txt··bl.texte··bl.q··bl.titre·· · );   return String(t).replace(/<[^>]*>/g, » | _drEmpreinte, atDrModifsDeLaSeance |
| `_drTitrerColonne` | ctx | 377 o | (sans commentaire) affiche/emploie : « ;     v.textContent= » | _drLibelles |
| `_drTraceAuto` | — | 404 o | [LOT C1 \u2461] LA TRACE S'\u00c9CRIT AU FIL — sur le m\u00e9canisme de `_drCopieAuto` : m\u00eame d\u00e9bounce de 900 ms, m\u00eame fonction d'\u00e9criture, m\u00eame chemin de base. | _drTraceReprendre, atT5Choix, atVecuDemarrer, atVecuEntrer (+1) |
| `_drTraceReprendre` | — | 1699 o | la RELANCE dans le m\u00eame cr\u00e9neau REPREND la trace en cours (patron du chrono accumul\u00e9 de worktrack, CADRAGE-TEMPS \u00a72) : | atVecuDemarrer |
| `_drTrameDe` | sk | 296 o | [OBJETS-DIAPO, ordre de Paul 21/08] les diapos se manipulent comme les documents : | _drEcrireTrame, _drEntreesEcran, atEcranDupliquer, atEcranEnvoyer (+1) |
| `_drVerifier` | texte | 1141 o | intégrité au boot : le texte chargé EST deroule86.html, prouvé par empreinte | _drAssurerCadre |
| `_drVifAller` | ev | 223 o | [vif · accès d'un seul appui] ² ou F2, DEPUIS N'IMPORTE OÙ (page ou cadre), amène le curseur dans le champ des initiales — zéro clic, zéro visée. | — |
| `_drVifInstaller` | — | 6960 o | [participation au vif] la décharge cognitive du direct : un champ de frappe en tête du panneau — taper les initiales (ou le début du prénom) ouvre la fiche de l'élève ; | — |
| `_drVuePere` | W,n | 781 o | (sans commentaire ni indice) | sesPhoto |


## PONT DÉROULÉ — pilotage, lancement, clôture, reprise

| fonction | args | taille | ce qu'elle fait | appelée par |
|---|---|---|---|---|
| `atDrBrancherSuivi` | — | 351 o | (sans commentaire ni indice) | atDrMonter |
| `atDrClore` | — | 95 o | (sans commentaire ni indice) | atDrMonter |
| `atDrCloreFin` | — | 425 o | (sans commentaire) affiche/emploie : « efface : plus rien à rejoindre */   AT_DR_REGIME= » | atDrClore, atDrClotureModale |
| `atDrClotureModale` | — | 1762 o | (sans commentaire) affiche/emploie : « );   if(!mods.length){     _modaleConfirme( · ,       atDrCloreFin);     return;   }   var h= » | atDrClore |
| `atDrCompChange` | v | 238 o | (sans commentaire ni indice) | atDrMonter |
| `atDrEnrAuto` | — | 203 o | (sans commentaire ni indice) | _drEnvelopper |
| `atDrEnrConfirme` | ok | 407 o | (sans commentaire) affiche/emploie : « at-dr-etat at-dr-enr-ok · Enregistr\u00e9 \u00e0  » — touche #at-dr-etat | _drFlushTrame, atDrReprendre |
| `atDrJouer` | classeSlug, classeNom | 3040 o | (sans commentaire) affiche/emploie : « heure de d\u00e9part, et      RIEN d · ici les `eid` ne      naissaient qu » — ECRIT au hub | atDrJouerClic |
| `atDrJouerClic` | — | 2995 o | (sans commentaire) affiche/emploie : « )[0], _fin=_c.split( · Attention : ce d\u00e9but ne laisse aucun temps utile avant  » — touche #at-dr-classe, #at-dr-debut, #at-dr-etat — ECRIT au hub | atDrMonter |
| `atDrMaintenant` | — | 151 o | (sans commentaire) touche #at-dr-debut | atDrMonter |
| `atDrMajUtile` | — | 400 o | (sans commentaire) affiche/emploie : « )-5;   u.innerHTML=(t>0)? ·  min utiles</b> <span class= » — touche #at-dr-debut, #at-dr-utile | atDrMaintenant, atDrMonter, atDrSynchroDebut |
| `atDrModifsDeLaSeance` | — | 2858 o | (sans commentaire) affiche/emploie : « avait pas faite. C · \u00e9cran remplac\u00e9 par celui      d » | atDrClotureModale |
| `atDrMonter` | — | 4774 o | (sans commentaire) affiche/emploie : « <label class= · at-edch-in at-dr-comp » — touche #at-dr-classe, #at-dr-debut, #at-dr-hote-zone | atDrCloreFin, atDrJouerClic, atVuesPoser |
| `atDrReprendre` | indices | 610 o | (sans commentaire) affiche/emploie : « Reprise dans la pr\u00e9paration \u2014 s\u00e9ance  ·  \u00e9l\u00e9ment » — ECRIT au hub | atDrClotureModale |
| `atDrSuiviAppliquer` | — | 1317 o | (sans commentaire) affiche/emploie : « );   /* les commandes de SUIVI n · );   if(bq){ bq.disabled=enPrep; bq.classList.toggle( » — touche #bqui | atDrJouerClic, atDrMonter |
| `atDrSynchroDebut` | — | 103 o | (sans commentaire) touche #at-dr-debut | atDrMonter |
| `atDrTaxoOptions` | — | 502 o | (sans commentaire) affiche/emploie : « <option value= · );         });       });       return out.join( » | atDrMonter |
| `atDrTrame` | snum | 266 o | (sans commentaire ni indice) | atDrJouer, atDrMonter, atDrReprendre, atDrTrameEnregistrer |
| `atDrTrameEnregistrer` | — | 462 o | (sans commentaire) affiche/emploie : « Trame du d\u00e9roul\u00e9 \u2014 s\u00e9ance  · Trame enregistr\u00e9e. » — touche #at-dr-etat — ECRIT au hub | atDrEnrAuto, atEcranEnvoyer |
| `atDrVueInterne` | v | 78 o | [A7] Relecture et Papier : les vues DÉJÀ CONSTRUITES du moteur (récit, pages A4), rendues par le pont — plus d'écriteaux « à venir ». | atVuesPoser |


## SESSION — les trois appareils (pilote, tableau, téléphone)

| fonction | args | taille | ce qu'elle fait | appelée par |
|---|---|---|---|---|
| `sesAppliquer` | o | 2282 o | (sans commentaire) affiche/emploie : « avait poussée) : c · est pas un tableau. Pas d » — touche #bgel, #bqui, #rz | sesPollPilote, sesTelChercherCours |
| `sesArreter` | — | 62 o | (sans commentaire ni indice) | sesCoursFermer |
| `sesBandeau` | — | 792 o | le bandeau du pilote : l'état de la session, sobre, dans la tête du déroulé | sesBrancherPilote |
| `sesBandeauEtat` | ok,muet | 392 o | (sans commentaire) affiche/emploie : « \u25cf session · ses-etat ses-etat-ko » — touche #ses-etat | sesEmettre, sesPollPilote |
| `sesBootTableau` | — | 1325 o | LA VUE TABLEAU (?vue=tableau) — un terminal muet : elle PEINT, elle n'écrit JAMAIS | — |
| `sesBootTel` | — | 4761 o | LE TÉLÉPHONE (?vue=tel) — le pilote de poche : prompteur + palette (maquettes 23/08) | — |
| `sesBrancherPilote` | reprise | 1983 o | (sans commentaire) affiche/emploie : « affichage de l\u2019\u00e9cran · envoi au tableau » | atDrMonter, sesCoursEcrire, sesReprendre |
| `sesBrancherPiloteTel` | W | 1408 o | (sans commentaire) affiche/emploie : « affichage de l\u2019\u00e9cran · envoi au tableau » | sesTelChercherCours |
| `sesChemins` | c | 294 o | (sans commentaire) hub /site/cours_actif | sesCoursEcrire, sesEmettre, sesPartEmettre, sesPollPilote (+3) |
| `sesCoursEcrire` | — | 778 o | CÔTÉ PILOTE — le cours annoncé, la scène émise, les gestes des autres appliqués | atDrJouerClic |
| `sesCoursFermer` | — | 74 o | (sans commentaire) hub /site/cours_actif | atDrCloreFin |
| `sesCurseurFin` | el | 355 o | (sans commentaire) affiche/emploie : « on touche : la frappe s » | sesTelPeindre |
| `sesEmettre` | vite | 277 o | (sans commentaire ni indice) | sesBrancherPilote, sesBrancherPiloteTel, sesPartEmettre, sesTelCran |
| `sesGet` | url,cb | 114 o | (sans commentaire ni indice) | sesPollPilote, sesQROuvrir, sesReprendre, sesReprisePoser (+5) |
| `sesIncident` | ou,err | 669 o | [LOT A ②] LA CEINTURE — un échec se DIT, il ne s'avale pas Le 24/08, un défaut de données a rendu le pilotage muet en pleine classe : l'exception était absorbée par les try/catch, zéro erreur remontée. | sesBrancherPilote, sesBrancherPiloteTel, sesPartMotif, sesPartRetirer (+2) |
| `sesOuvrirTableau` | — | 516 o | [LOT B \u2461] LE CHEMIN D'ACC\u00c8S AU TABLEAU \u2014 au patron d'evaluation-qcm La page autonome `?vue=tableau` ne change pas : | sesBandeau |
| `sesPartEmettre` | — | 953 o | (sans commentaire) affiche/emploie : « est      pas touch\u00e9. L » | sesBrancherPilote, sesBrancherPiloteTel |
| `sesPartMotif` | ini,type | 262 o | (sans commentaire) affiche/emploie : « ); }catch(e){ sesIncident( · ,e); }   var m=document.getElementById( » — touche #ses-pmot, #ses-pmot-note | sesPartMotifs |
| `sesPartMotifs` | ini | 1302 o | (sans commentaire) affiche/emploie : « ; m.className= · +escapeHtml((W.PRENOMS&&W.PRENOMS[ini])··ini)     + » — touche #ses-pmot | sesPartPeindre, sesPartRetirer |
| `sesPartPeindre` | — | 1344 o | (sans commentaire) affiche/emploie : « <button class= ·  data-ini= » — touche #ses-part-liste | sesPartMotif, sesPartRetirer, sesTelPart, sesTelPlus1 |
| `sesPartRetirer` | ini,id | 159 o | (sans commentaire) affiche/emploie : « retrait de participation » | sesPartMotifs |
| `sesPhoto` | — | 2486 o | la PHOTO DE SCÈNE : l'équivalent exact d'envoie() côté données — c'est ELLE qui décide ce que voit le tableau. Gel : | sesEmettre |
| `sesPollPilote` | — | 1026 o | l'agrégat « qui » suit, si la modale est ouverte | sesBrancherPilote |
| `sesPut` | url,val | 309 o | (sans commentaire) affiche/emploie : « indicateur d · échecs */   return fetch(url,{method: » — ECRIT au hub | _drCoursActifEffacerSi, sesBootTel, sesCoursEcrire, sesCoursFermer (+2) |
| `sesQRFermer` | — | 86 o | (sans commentaire) touche #ses-qr | sesQROuvrir |
| `sesQROuvrir` | — | 1092 o | (sans commentaire) affiche/emploie : « +encodeURIComponent(url);   var d=document.createElement( · ); d.className= » | sesBandeau |
| `sesReprendre` | — | 1291 o | (sans commentaire) affiche/emploie : « est pas bloqu\u00e9 \u2014 on lui dit ce qui s · une ligne. */   sesGet(FIREBASE_BASE+ » — hub /site/cours_actif | sesReprisePeindre |
| `sesReprisePeindre` | c | 611 o | (sans commentaire) affiche/emploie : « Un cours est en cours avec <b> · ;   var b=document.getElementById( » — touche #ses-reprise, #ses-reprise-txt | sesReprisePoser |
| `sesReprisePoser` | — | 768 o | (sans commentaire) affiche/emploie : « est d\u00e9j\u00e0 nous */     sesGet(FIREBASE_BASE+ » — hub /site/cours_actif | — |
| `sesRepriseRetirer` | — | 87 o | [LOT C3a \u2461] LA BANNI\u00c8RE V\u00c9RIFIE \u00c0 CHAQUE PASSAGE, et DISPARA\u00ceT D'ELLE-M\u00caME d\u00e8s que l'heure qu'elle propose n'est plus ouverte. | sesReprendre, sesReprisePoser, sesRepriseSilence |
| `sesRepriseSilence` | — | 73 o | (sans commentaire ni indice) | sesReprisePeindre |
| `sesTabChercherCours` | — | 513 o | (sans commentaire) affiche/emploie : « Aucun cours en cours » — touche #ses-tab-c — hub /site/cours_actif | sesBootTableau |
| `sesTabChrono` | chr | 237 o | (sans commentaire) affiche/emploie : « ); if(!c)return;     c.style.display=(chr&&chr.visible)? » — touche #c, #ses-tab-toile | sesTabPoll |
| `sesTabCle` | c | 70 o | [LOT B \u2462] LE TABLEAU SURVIT \u2014 il TIENT, puis il REPREND La demande de Paul (v\u00e9rifi\u00e9e, et longtemps prise \u00e0 l'envers) : | sesTabChercherCours, sesTabVeillePointeur |
| `sesTabMonter` | — | 1263 o | (sans commentaire) touche #ses-tab-att, #ses-tab-toile | sesTabChercherCours |
| `sesTabPoll` | — | 1810 o | (sans commentaire) affiche/emploie : « Pilotage interrompu \u00e0  ·  \u2014 le tableau tient, il reprendra tout seul. » — touche #ses-tab-perdu | sesTabVeillePointeur |
| `sesTabQui` | o | 840 o | (sans commentaire) affiche/emploie : « );     if(!d){ d=D.createElement( · ; d.className= » — touche #qui, #ses-tab-toile | sesTabPoll |
| `sesTabVeillePointeur` | — | 648 o | (sans commentaire) touche #ses-tab-c — hub /site/cours_actif | — |
| `sesTelChercherCours` | — | 1699 o | (sans commentaire) affiche/emploie : « Aucun cours en cours · Nouvelle activit\u00e9 » — touche #ses-tel-titre — hub /site/cours_actif | sesBootTel |
| `sesTelChrono` | — | 1056 o | (sans commentaire) affiche/emploie : « en montrait RIEN. Il dit maintenant le temps d\u00e8s qu · );     var enMarche=!!W.run;     var txt=D.getElementById( » — touche #bmon, #cmin, #csec | sesTelPeindre |
| `sesTelCran` | v | 139 o | [LOT E] le geste de la télécommande : il pose le cran DANS LA SCÈNE, rien d'autre. Aucun appel à `W.zoom()`, aucun `rendre()` local : | sesBootTel |
| `sesTelGeste` | g | 2018 o | (sans commentaire) affiche/emploie : « )W.pas(-1);     else if(g=== · )W.pas(1);     else if(g=== » — touche #bmon, #ses-pb-gel, #ses-pb-qui | sesBootTel |
| `sesTelMajCran` | — | 321 o | l'étiquette et le point suivent le cran de session, d'où qu'il vienne | sesAppliquer, sesTelCran |
| `sesTelPart` | — | 1274 o | (sans commentaire) affiche/emploie : « ; d.className= · ;   d.innerHTML= » — touche #ses-part | sesBootTel |
| `sesTelPeindre` | — | 4441 o | (sans commentaire) affiche/emploie : « <div class= · >\u00c9CRAN  » — touche #ses-pb-gel, #ses-pb-qui, #ses-tel-pr | sesAppliquer, sesBrancherPiloteTel, sesPollPilote, sesTelChercherCours (+1) |
| `sesTelPlus1` | ini | 224 o | (sans commentaire) affiche/emploie : « ); }catch(e){ sesIncident( · ,e); }   /* [LOT B \u2460 A-6] motif par d\u00e9faut ; l » | sesPartPeindre |


## SOCLE — hub, écriture, lecture

| fonction | args | taille | ce qu'elle fait | appelée par |
|---|---|---|---|---|
| `mjpcBandeauEl` | — | 183 o | (sans commentaire) touche #mjpc-echecs-bandeau | mjpcRendreBandeau, mjpcSucces |
| `mjpcBasculerDetail` | — | 124 o | (sans commentaire) touche #mjpc-echecs-detail | mjpcRendreBandeau |
| `mjpcChargerOutils` | base,cb | 565 o | La source : ce que les apps DÉCLARENT, publié au hub par publierManifeste. Rien n'est inventé : une app absente du hub n'apparaît pas, une app sans usage apparaît en le disant. | atChargerOutils |
| `mjpcChiffrer` | cle,texte | 201 o | Chiffre un texte. → Promise<"v1."+b64(iv)+"."+b64(chiffré)> — IV aléatoire par appel. | _putCode, secuEcrireCanari, secuMigrerCodes |
| `mjpcCryptoDispo` | — | 84 o | (sans commentaire ni indice) | _secuVerifCodeEleveSite, doLogin, secuBoot, secuEncartHtml (+1) |
| `mjpcDechiffrer` | cle,paquet | 280 o | Déchiffre un paquet "v1.iv.ct". → Promise<texte> — REJETTE si la clé est fausse (AES-GCM est authentifié : c'est ce qui rend le canari fiable) ou le paquet corrompu. | _allCodesTaken, _printCodesClasse, secuCodeAffiche, secuDechiffrerCache (+1) |
| `mjpcDeleteJson` | url,ou,onAccepte | 259 o | (sans commentaire ni indice) | atSupprimerChapitre, deleteClass, deleteImageInGallery, deleteItem (+2) |
| `mjpcDeriverCle` | secret | 346 o | Dérive la clé AES-GCM 256 du secret saisi. → Promise<CryptoKey> | secuValiderSecret |
| `mjpcEcrireRest` | url,options,cb | 1131 o | Le classeur d'issues pour le transport REST (fetch) — la SEULE source de vérité : | _siteDelete, _sitePut, mjpcDeleteJson, mjpcInjecterAvecArchive (+5) |
| `mjpcEmpreinte` | texte,selHex | 352 o | Empreinte d'un texte : PBKDF2-SHA-256, sel PAR ENTRÉE, 32 octets hex. → Promise<hex> Vérifiable par toute app (le sel est lisible) SANS la clé du coffre. | _cpConcordance, _cpFiche, _estCodeProf, _putCode (+4) |
| `mjpcFetchOk` | url,options | 451 o | Le fetch à verdict pour les chaînes de promesses existantes : REJETTE sur refus (fetch ne le fait pas) et convertit la panne en message français. | _createGalleryItemWithFirstImage, _fbDeletePath, _fbPutPath, _uploadBlobToDrive (+5) |
| `mjpcHeure` | ts | 106 o | consultable console — le bloc DIAGNOSTIC (commentaire) reste intact | mjpcRendreBandeau, mjpcSucces |
| `mjpcInjecterAvecArchive` | opts,cb | 842 o | L'INJECTION : archive AVANT s'il y a quelque chose à remplacer, ABANDON si l'archive échoue, écriture ensuite, verdict rendu. Rien n'écrit sans que l'appelant ait confirmé. opts : | — |
| `mjpcLot` | ecritures,ou,onTousAcceptes,onEchecs | 809 o | LE LOT À VERDICTS — pour les gestes en plusieurs écritures (cascade de publication, LIER, upload multi-champs) : on attend TOUS les verdicts, l'écran ne parle qu'ensuite ; | _applyLinkEcrire, _applyPubCascade, _deleteEleveCls, _swapOrdre (+1) |
| `mjpcManifesteAJour` | publie,versionSocle,app,manifeste,purge | 676 o | [C5-M16a] ④ `purge` entre dans la comparaison (4e argument, optionnel : aucun appelant existant n'est cassé). | fichesMajUne |
| `mjpcPromptAvecPresentation` | texte,options | 216 o | Le texte d'un prompt, précédé de la présentation. Un seul point d'entrée pour les neuf apps et le site : la pièce ne se recopie nulle part. | atPromptTexte |
| `mjpcPromptCharger` | base,app,produit,defauts,cb | 513 o | (sans commentaire) affiche/emploie : « ;     var fini=function(v){       res[piece]=(typeof v=== » | — |
| `mjpcPromptChemin` | app,produit,piece | 75 o | La persistance : chemin par app ET par produit, défaut en dur qui fait foi si la base est muette. Lecture REST (le mode test de l'app la court-circuite si elle en a un). | mjpcPromptCharger, mjpcPromptEnregistrer |
| `mjpcPromptComposer` | pieces | 631 o | L'assemblage à la volée. pieces : {directives, vocabulaire, format, donnees:{JETON:valeur}} Les jetons {{NOM}} sont remplacés en dernier, dans le texte entier. | — |
| `mjpcPromptEnregistrer` | base,app,produit,piece,texte,cb | 398 o | L'écriture passe par les verdicts du socle (§9) : trois issues, jamais un succès supposé. | — |
| `mjpcPromptOutils` | entrees | 1260 o | (sans commentaire) affiche/emploie : « );       return;     }     var l= · +e.usage;     if(e.quandPas)l+= » | mjpcPromptPresentation |
| `mjpcPromptPresentation` | options | 169 o | La pièce assemblée. NE MODIFIE JAMAIS le texte persisté d'un prompt : elle se place devant, à la composition. | mjpcPromptAvecPresentation, mjpcPromptComposer |
| `mjpcPromptVocabulaire` | source, options | 1152 o | Le vocabulaire, GÉNÉRÉ depuis une source fournie par l'app (jamais écrit à la main). source : { id: { libelle, champs:[{k,l,kind}], reserve, groupe, note } } options : | chVocabulaireCompetences, chVocabulaireEntrees, chVocabulaireTaxo, chVocabulaireTypes |
| `mjpcPutJson` | url,valeur,ou,onAccepte | 332 o | L'ÉCRITURE NOMMÉE — le geste commun de toutes les écritures REST du site. ou : libellé français du geste (pour le bandeau) onAccepte : | _drCloreHeureRestee, _drCopieAuto, _drEcrireTrame, _drFlushTrame (+22) |
| `mjpcRendreBandeau` | — | 1748 o | (sans commentaire) affiche/emploie : « ;return;}   b.style.display= · ;     }else{       h= » | mjpcSignalerIssue, mjpcToutRetenter |
| `mjpcSelAleatoire` | — | 66 o | Sel aléatoire d'empreinte (16 octets, hex) — un par entrée, stocké à côté d'elle. | _cpFiche, _putCode, secuMigrerCodes |
| `mjpcSignalerIssue` | issue,contexte | 288 o | Signaler une issue non acceptée. contexte = { ou: libellé français du geste, retenter: function·null } | _secuPurgerClair, mjpcDeleteJson, mjpcLot, mjpcPutJson (+3) |
| `mjpcSucces` | — | 469 o | (sans commentaire) affiche/emploie : « ;   b.innerHTML= » | mjpcDeleteJson, mjpcLot, mjpcPutJson |
| `mjpcToutRetenter` | — | 133 o | Ré-émission PONCTUELLE : chaque écriture rejouée avec sa valeur courante. | mjpcRendreBandeau |
| `mjpcValidation` | max | 697 o | LA VALIDATION — un accumulateur. Les refus s'ADDITIONNENT, chacun CITE l'élément fautif et dit QUOI CORRIGER. (validateChapter et validateItems s'arrêtent au premier ; | chValiderChapitre, chValiderDeclaration |
| `mjpcVerdictOk` | issue | 57 o | Le verdict, lu d'UNE façon partout : accepté, ou pas. | mjpcInjecterAvecArchive, mjpcPromptEnregistrer |


## SÉCURITÉ — coffre, clé, empreintes (M-SÉCU) — corps à ne jamais modifier

| fonction | args | taille | ce qu'elle fait | appelée par |
|---|---|---|---|---|
| `secuBoot` | — | 564 o | restauration au chargement : la clé mémorisée revient SANS ressaisie | — |
| `secuCodeAffiche` | nom | 1245 o | le code affiché : déchiffré prioritaire, repli clair (pré-migration), masqué sans clé | _profSectionEleves |
| `secuCodeProfOuvrir` | — | 56 o | M-SÉCU-4 — CHANGER LE CODE PROFESSEUR. L'écran qui rend la rotation possible. Derrière la clé (secuExigeCle). Trois gestes nommés : ajouter, retirer, remplacer. GARANTIE : | secuEncartHtml |
| `secuCpAjouter` | — | 1357 o | (sans commentaire) affiche/emploie : « ,false);return;}             _cpMsg( · +new Date().toLocaleDateString( » — touche #cp-c1, #cp-c2 | _profSectionCodeProf |
| `secuCpInfo` | — | 744 o | (sans commentaire) affiche/emploie : « Code professeur · <div class= » | _profSectionCodeProf |
| `secuCpRafraichir` | — | 656 o | (sans commentaire) affiche/emploie : « ;return;}     var h= ·  actif » — touche #cp-etat | secuCpAjouter, secuCpRemplacer, secuCpRetirer |
| `secuCpRemplacer` | — | 2780 o | (sans commentaire) affiche/emploie : « Remplacer tout par ce code · <div class= » — touche #cp-c1, #cp-c2 | _profSectionCodeProf |
| `secuCpRetirer` | sel | 1703 o | (sans commentaire) affiche/emploie : « ,false);secuCpRafraichir();return;}     _showConsoleModal( · ,       [{label: » | secuCpRafraichir |
| `secuDechiffrerCache` | cb | 501 o | le cache des déchiffrés : rendu synchrone, chaîne prouvée à chaque affichage | _profSectionEleves |
| `secuEcrire` | chemin,valeur | 108 o | (sans commentaire ni indice) | _cpArchive, _edLierEcrire, _secuPurgerClair, atChampChapitre (+22) |
| `secuEcrireCanari` | cle | 284 o | (sans commentaire) affiche/emploie : « Pose du t\u00e9moin de cl\u00e9 » | secuBoot, secuPoserCle |
| `secuEncartHtml` | — | 2019 o | l'encart de l'écran Élèves & codes | _profSectionEleves, secuMajEncart |
| `secuEnregistrerAppareil` | — | 238 o | fiches d'appareils : que Paul sache ce qu'il a laissé derrière lui | doLogin, secuPoserCle |
| `secuExigeCle` | — | 504 o | la garde des gestes qui écrivent un code : cohérence chiffre/clair (Q5) | _printCodesClasse, _putCode, _resetAllCodesClasse, chOuvrir (+5) |
| `secuFinMigration` | verdicts,dejaFaits,vestiges | 846 o | (sans commentaire) affiche/emploie : «  ancienne ·  ignor\u00e9e » | secuMigrerCodes |
| `secuIdAppareil` | — | 169 o | (sans commentaire ni indice) | secuEnregistrerAppareil, secuOublier, secuVoirAppareils |
| `secuInfo` | — | 610 o | (sans commentaire) affiche/emploie : « La cl\u00e9 de chiffrement · <div class= » | secuEncartHtml |
| `secuLS` | k,v | 156 o | consultable en console — le bloc DIAGNOSTIC commenté renvoie ici | doLogin, secuBoot, secuIdAppareil, secuOublier (+1) |
| `secuLire` | chemin | 76 o | _siteGet promisifié localement (signature cb conservée au socle du site) | _cpLireFiches, _estCodeProf, chAfficherInventaire, chAlerteGraphies (+13) |
| `secuMajEncart` | — | 154 o | (sans commentaire) touche #secu-encart | secuFinMigration, secuMigrerCodes |
| `secuMigrerCodes` | manuel | 1616 o | la migration : 120 codes préparés, dénombrés avant, verdicts TOUS collectés | secuEncartHtml, secuPoserCle |
| `secuNomAppareil` | — | 351 o | (sans commentaire) affiche/emploie : « ;var os=/Windows/.test(ua)? » | secuEnregistrerAppareil |
| `secuOublier` | — | 662 o | oubli local : les codes redeviennent illisibles ICI | secuEncartHtml |
| `secuPatchCode` | k,objet,cb | 454 o | PATCH fusionnant sur /codes/<k> — routé magasin en mode test (le PATCH y fusionne) | _secuPurgerClair, secuMigrerCodes |
| `secuPoserCle` | — | 2023 o | pose de la clé depuis l'encart (première fois ou nouvel appareil) | secuEncartHtml |
| `secuPoserEmpreintesProf` | — | 235 o | M-SÉCU-3 : plus de source claire pour les poser — CONSTAT seulement. Si les empreintes manquent au hub, la porte ne s'ouvre plus que par la clé, et le professeur doit le savoir. | secuPoserCle |
| `secuRetirerClair` | — | 3084 o | M-SÉCU-3 — LE RETRAIT DU CLAIR. Un seul geste, explicite, jamais automatique. Séquence de Paul : promotion → déploiement → vérification → CE bouton. | secuEncartHtml |
| `secuValiderSecret` | secret | 534 o | validation d'un secret contre le canari — la SEULE voie vers l'affichage | doLogin, secuBoot, secuPoserCle |
| `secuVoirAppareils` | — | 1053 o | (sans commentaire) affiche/emploie : « ;var ids=Object.keys(v··{});     if(!ids.length)lignes= ·  <b>(cet appareil)</b> » | secuEncartHtml |


## TEMPS — le T-5, fin d’heure et ses quatre choix

| fonction | args | taille | ce qu'elle fait | appelée par |
|---|---|---|---|---|
| `atT5Appel` | e | 658 o | elle s'ouvre UNE fois, jamais en boucle | atT5Appliquer, atT5Choix |
| `atT5Appliquer` | — | 481 o | (sans commentaire) affiche/emploie : « occupe plus la scène (il l · un appel discret, et le détail s » — touche #at-dr-t5-appel | atT5Veille |
| `atT5Choix` | n,quoi | 297 o | (sans commentaire) affiche/emploie : « heure ne se perd plus */   var f=document.querySelector( » | atT5Modale |
| `atT5Etat` | — | 353 o | minutes avant le début de l'agenda | atT5Appliquer, atT5Choix, atT5Modale |
| `atT5Modale` | — | 2632 o | (sans commentaire) affiche/emploie : «  minute · </b> de classe. » | atT5Appel, atT5Appliquer |
| `atT5Restantes` | — | 284 o | (sans commentaire ni indice) | atT5Appel, atT5Modale |
| `atT5Reste` | — | 202 o | (sans commentaire ni indice) | atT5Etat |
| `atT5Veille` | on | 238 o | (sans commentaire) touche #at-dr-t5 | atDrCloreFin, atDrMonter |
| `atT5Zone` | — | 217 o | (sans commentaire) touche #at-dr-t5 | atT5Appliquer |


## TEMPS — le vécu, mesure réelle par activité

| fonction | args | taille | ce qu'elle fait | appelée par |
|---|---|---|---|---|
| `atVecuAfficher` | — | 610 o | (sans commentaire) affiche/emploie : « ); m.className= · )··{}).value··0;     m.textContent= » — touche #durees | _drTraceReprendre, atT5Veille |
| `atVecuDemarrer` | — | 337 o | (sans commentaire ni indice) | atDrJouerClic |
| `atVecuEcrire` | — | 1886 o | (sans commentaire) affiche/emploie : « \u00e9cran  · exister      \u00e0 l » — ECRIT au hub | atDrCloreFin |
| `atVecuEntrer` | n | 495 o | [LOT C1 \u2461] la trace na\u00eet tout de suite | _drEnvelopper, atDrBrancherSuivi, atVecuDemarrer |
| `atVecuMinutes` | n | 203 o | [LOT C1 \u2461] | atVecuAfficher |
| `atVecuSortir` | — | 297 o | [LOT C1 \u2461] | atDrJouerClic, atVecuEcrire, atVecuEntrer |


## ÉDITEUR — arborescence, publication, liaisons

| fonction | args | taille | ce qu'elle fait | appelée par |
|---|---|---|---|---|
| `ed2Aller` | item | 1267 o | (sans commentaire) affiche/emploie : « );   if(el)ed2Poser(item);   else el=document.querySelector( · );   var pile=document.querySelector( » | ctxEntreesItem, ctxEntreesSeance, ed2Sommaire |
| `ed2ChampFHtml` | ref,id,ch,vals,idx | 800 o | [LOT3] LES CHAMPS DE LA FEUILLE DANS LE PANNEAU Pour chaque item-feuille : une ligne par CASE COCHÉE qui porte des champs (data-champ="c-<id>" — la cible du clic de zone). | ed2PanneauFeuille |
| `ed2CharteScopee` | — | 400 o | (sans commentaire) affiche/emploie : « @media print{ · );if(p<0)return  » | atEditerChapitreRendre |
| `ed2Cle` | item,comp,rang | 42 o | [LOT4-①] LA CLÉ DU POINTAGE — unique, calculée par UNE fonction, portée par l'item ET le rang d'occurrence : | ed2ClicPapier, ed2PanneauFeuille |
| `ed2CleLire` | champ | 898 o | [LOT4d] LA LECTURE D'UNE CLÉ — l'unique lectrice (règle du mandat : une seule fonction sait lire une clé). Deux motifs : · 'c-<item>-<comp>-<rang>' → {item,comp,rang} : | ed2ClicChamp, ed2Selectionner, ed2ZoneDe |
| `ed2CleSe` | j | 17 o | (sans commentaire ni indice) | atEditerChapitreRendre, ed2SelectionnerSeance |
| `ed2ClicChamp` | champ | 878 o | (sans commentaire) affiche/emploie : « est le cas même de la dette (« le bloc d » | atEditerChapitreRendre, ed2PanneauFeuille |
| `ed2ClicDocument` | item,champ | 133 o | ③b clic dans le document → le point d'édition ; ③c clic sur un champ → la zone | ed2ClicPapier, ed2ClicTrou |
| `ed2ClicPapier` | ev,item | 629 o | (sans commentaire) affiche/emploie : « .f-contenu [data-c= » | ed2Papier |
| `ed2ClicTrou` | ev,item,j | 166 o | [LOT9-\u2460] le clic d'un TROU du papier : les boutons du cadre gardent leurs gestes (on les laisse passer) ; | ed2Papier |
| `ed2CoupeBasculer` | a,b | 207 o | (sans commentaire ni indice) | ed2Papier |
| `ed2CoupeCle` | a,b | 29 o | (sans commentaire ni indice) | ed2CoupeBasculer, ed2CoupeRetirer, ed2Papier |
| `ed2CoupeRetirer` | a,b,ev | 215 o | (sans commentaire ni indice) | ed2Papier |
| `ed2CoutFeuilles` | docs,mode | 36 o | (sans commentaire ni indice) | ed2Papier |
| `ed2Documents` | level,chnum | 1381 o | le fil des documents du chapitre, dans l'ordre : ce qui EXISTE et ce qui est ATTENDU | atEditerChapitreRendre, atSommaireNatifHtml, ctxSommaireOuvrir, ed2ImprimerChapitre (+2) |
| `ed2FeuilleHtml` | doc,ref | 277 o | [LOT3] le contenu d'une feuille — le document tel qu'il sortira, RENDU RÉUTILISÉ | ed2MajZone, ed2Papier |
| `ed2HauteurDoc` | d | 632 o | estimation de hauteur : PREMIER JET avant mesure (patron maquette) | ed2Pages |
| `ed2Imprimer` | — | 506 o | (sans commentaire) affiche/emploie : « Ouvre une feuille du chapitre pour l’imprimer. · Imprimer <b> » | ed2Papier |
| `ed2ImprimerChapitre` | — | 1383 o | (sans commentaire) affiche/emploie : « <div class= · }});}catch(e){}   /* [PONT-D] */   });   ed2ImprimerHTML( » | ed2Imprimer |
| `ed2ImprimerHTML` | html | 221 o | (sans commentaire) affiche/emploie : « Autorise les fenêtres pop-up pour imprimer. » | ed2Imprimer, ed2ImprimerChapitre |
| `ed2MajZone` | ref,comp | 569 o | la MAJ CIBLÉE : seul le cadre de CETTE feuille est re-rendu (une même feuille déposée deux fois se met à jour partout), la zone touchée pulse. | ed2SetBlocFeuille, ed2SetValeurFeuille |
| `ed2Mesurer` | — | 156 o | (sans commentaire ni indice) | ed2Repaginer |
| `ed2OuvrirOnglet` | — | 400 o | (sans commentaire) affiche/emploie : « Ouvre une feuille du chapitre. · Autorise les fenêtres pop-up. » | ed2Papier |
| `ed2PagModeLu` | — | 170 o | (sans commentaire ni indice) | ed2Pages, ed2Papier, ed2Repaginer |
| `ed2PagPoser` | mode | 119 o | (sans commentaire ni indice) | ed2Papier |
| `ed2PagSignature` | docs,mode | 114 o | (sans commentaire ni indice) | ed2Repaginer |
| `ed2Pages` | docs,mode | 1192 o | [LOT9-\u2461] la hauteur du titre de s\u00e9ance dans la page (border 2 + marges 18 + ligne ~18) | ed2CoutFeuilles, ed2PagSignature, ed2Papier |
| `ed2PanVers` | el | 219 o | [C5-ED2] ③b/③c LES DEUX SYNCHRONISATIONS. Paul : « chaque endroit où je clique doit me montrer EXACTEMENT le point d'édition », et « ça ne devrait s'éteindre que lorsque je quitte cette ligne » : | ctxEntreesSeance, ed2Selectionner, ed2SelectionnerChap, ed2SelectionnerSeance |
| `ed2PanneauFeuille` | k,ref | 2770 o | (sans commentaire) affiche/emploie : « ;   var cases=doc.cases··{},vals=doc.valeurs··{};   var h= · <div class= » | atEditerChapitreRendre |
| `ed2Papier` | level,chnum,docs | 10286 o | l'atelier papier rendu : des feuilles A4, le folio, les en-têtes de séance, les lignes de partage et les emplacements toujours proposables. | atEditerChapitreRendre |
| `ed2PapierVers` | el | 222 o | (sans commentaire ni indice) | ed2Selectionner, ed2SelectionnerChap, ed2SelectionnerSeance |
| `ed2Poser` | item | 676 o | [LOT9-\u2466] ed2Pile RETIR\u00c9E \u2014 colonne remplac\u00e9e par le papier ; preuve d'inatteignabilit\u00e9 au rapport (0 appel direct, 0 appel par cha\u00eene). | ed2Aller, ed2ClicChamp, ed2ClicDocument, ed2Suivre |
| `ed2Repaginer` | — | 333 o | la repagination MESURÉE : si la découpe réelle diffère de celle à l'écran, UN rendu (changement de données de mise en page) — garde anti-boucle par signature cible. | atEditerChapitreRendre, ed2SauverFeuille |
| `ed2SauverFeuille` | ref | 725 o | (sans commentaire) affiche/emploie : « +ref,doc).then(function(r){       if(!r.ok){atInfo( · );return;}       if(typeof AT_DOCS!== » | ed2SetBlocFeuille, ed2SetValeurFeuille |
| `ed2Selectionner` | item,champ,depuis | 1299 o | (sans commentaire) affiche/emploie : « #ed2-pan [data-champ= · );   if(ligne){     ligne.classList.add( » | ed2Aller, ed2ClicChamp, ed2ClicDocument |
| `ed2SelectionnerChap` | champ,depuis | 732 o | [LOT9-\u2462] LES CHAMPS DU CHAPITRE SE S\u00c9LECTIONNENT AUSSI : la ligne du panneau s'allume et re\u00e7oit le focus ; au papier, la page de garde s'allume (elle est leur correspondance visible). | ed2ClicChamp, ed2Papier, ed2Selectionner |
| `ed2SelectionnerSeance` | j,depuis | 1262 o | le point d'édition : la ligne du panneau qui porte ce champ, mise en valeur, curseur dedans — et la zone du document allumée. La sélection RESTE. | ed2ClicChamp, ed2ClicTrou, ed2Papier, ed2Selectionner (+1) |
| `ed2SetBlocFeuille` | ref,i,k,v | 300 o | (sans commentaire ni indice) | — |
| `ed2SetValeurFeuille` | ref,id,k,v | 287 o | (sans commentaire ni indice) | — |
| `ed2Sommaire` | level,chnum,docs | 1988 o | le sommaire : pastille teint\u00e9e par s\u00e9ance, point plein (existant) ou creux (attendu, gris\u00e9 italique), et l'avancement en t\u00eate. | atEditerChapitreRendre, atSommaireNatifHtml |
| `ed2Suivre` | — | 711 o | (sans commentaire) ECRIT au hub | — |
| `ed2Teinte` | rang | 64 o | (sans commentaire ni indice) | ed2Documents |
| `ed2ZoneDe` | item,champ | 369 o | [LOT4c-⑦] LA ZONE VISÉE PAR UNE CLÉ — depuis la clé lue par ed2CleLire, l'élément [data-c] DANS LE BON document. | ed2MajZone, ed2Selectionner |
| `edAjouterItem` | j | 231 o | (sans commentaire) affiche/emploie : « Nouvel item · Titre de l\u2019item : » | atEditerChapitreRendre, ed2Papier |
| `edAjouterSeance` | — | 111 o | (sans commentaire ni indice) | atEditerChapitreRendre, ed2Papier, ed2Sommaire |
| `edAppariements` | level,chnum | 1214 o | les correspondances : égales après normalisation (cœur ou titre entier). Rien d'approximatif : dans le doute on ne lie pas, on le MONTRE. | edProposerLiaisonsPrete |
| `edCreerFeuilleIci` | j | 1969 o | (sans commentaire) affiche/emploie : « Nouvelle feuille · Titre de la feuille : » | atEditerChapitreRendre, ed2Papier |
| `edDeplacerItem` | j,k,sens | 525 o | (sans commentaire ni indice) | atEditerChapitreRendre |
| `edDeplacerSeance` | j,sens | 468 o | (sans commentaire ni indice) | atEditerChapitreRendre |
| `edDeplacerVersSeance` | j,k | 860 o | (sans commentaire) affiche/emploie : « Le chapitre n’a pas d’autre séance. · <option value= » | atEditerChapitreRendre |
| `edDeplacerVersSeanceFaire` | j,k,jc | 1208 o | (sans commentaire) affiche/emploie : « +i;i++;}   var base= · ;   mjpcLot([     {url:FIREBASE_BASE+base+jc+ » — ECRIT au hub | edDeplacerVersSeance |
| `edDupliquerVers` | j,k | 1824 o | (sans commentaire) affiche/emploie : « <option value= · ;   }).join( » | atEditerChapitreRendre, ctxEntreesItem |
| `edEditerFeuille` | j,k | 863 o | [LOT9-\u2466] edBarreFil RETIR\u00c9E \u2014 barre retir\u00e9e sur d\u00e9cision de Paul (LOT4-\u2461) ; preuve d'inatteignabilit\u00e9 au rapport. | atEditerChapitreRendre, ctxEntreesItem |
| `edEnvoiInfo` | cas | 973 o | [LOT7b-③] le « i » des états : une phrase par cas, là où ça se règle. | atEditerChapitreRendre |
| `edEnvoyerManquantes` | — | 1383 o | (sans commentaire) affiche/emploie : « </b> de ce chapitre  · sont en place mais n\u2019ont » | atEditerChapitreRendre |
| `edFeuilleDepots` | level,ref | 295 o | [LOT2-⑫] PRENDRE UNE FEUILLE EXISTANTE — le geste inverse de l'adressage depuis la feuille. Le cache LINK_ATELIER_DOCS est chargé à l'ENTRÉE de l'écran (LOT ①) : | atStatutFeuille, atSupprimerDoc, ctxEntreesItem, edPrendreFeuille |
| `edFeuillesDuChapitre` | level,chnum | 768 o | les feuilles du chapitre, dans l'ordre des séances puis des items (`ordre` fait foi) | — |
| `edFeuillesJamaisEnvoyees` | — | 405 o | [LOT7b-③] les feuilles du chapitre EN PLACE mais jamais envoyées. | atEditerChapitreRendre, edEnvoyerManquantes |
| `edHeriterSeance` | doc,se | 452 o | (sans commentaire ni indice) | atIAInjecterAvecDestination, edCreerFeuilleIci, edIAdepuisTrou |
| `edIARetourChapitre` | — | 418 o | [LOT4-⑤] la sortie du mode chapitre : même place (position de pile reprise) | atIAInjecterNeuve, atIARemplacerConfirme, atIARendre |
| `edIAdepuisTrou` | j,k | 2544 o | (sans commentaire) affiche/emploie : « Séance  · ,                       chapitreUid:c.ch.uid·· » | ed2Papier |
| `edInsererSeanceAvant` | j | 1511 o | [LOT2-⑥] INSÉRER UNE SÉANCE ICI — à une place choisie, AVANT la séance j. Distinct de « + Séance » (fin de liste) et de « + Feuille ici » (séance existante). Le SOCLE ordre fait tout : | ed2Papier, ed2Sommaire |
| `edLibellesTaxo` | ids | 178 o | [LOT2-⑨] L'HÉRITAGE — une feuille créée DANS une séance reçoit ses notions et compétences, PRÉ-REMPLIES et modifiables, jamais imposées : | edHeriterSeance |
| `edLierConfirme` | level,chnum,lignes,apres | 1360 o | (sans commentaire) affiche/emploie : « \u00e9crire, et le      remplac\u00e9 est TRAC\u00c9 sur l · ;     }).join( » | edIAdepuisTrou, edPrendreFeuille, edProposerLiaisonsPrete |
| `edOuvrirItem` | j,k | 376 o | (sans commentaire ni indice) | atEditerChapitreRendre |
| `edPrendreFeuille` | j,k | 2172 o | (sans commentaire) affiche/emploie : « Je relis les feuilles de l’atelier… · L’atelier ne contient encore aucune feuille. » | atEditerChapitreRendre, ed2Papier |
| `edProduitDeclare` | se | 69 o | [LOT2-⑧] ÉCRIRE AVEC UNE IA DEPUIS UN TROU — la feuille se crée ADRESSÉE (rattachement complet), hérite de la séance (⑨), se LIE à l'item attendu par les MÊMES écritures que « Lier par les titres » (e | edIAdepuisTrou |
| `edProposerLiaisons` | level,chnum | 942 o | la MODALE : ce qui va être lié, nommé un par un, AVANT toute écriture. | atEditerChapitreRendre |
| `edProposerLiaisonsPrete` | level,chnum | 1001 o | (sans commentaire) affiche/emploie : « );return;}   var h= · ;   if(a.proposes.length){     h+= » | edProposerLiaisons |
| `edPublierClasse` | j,k,slug,btn | 230 o | (sans commentaire ni indice) | edPublierItem |
| `edPublierItem` | j,k | 2797 o | (sans commentaire) affiche/emploie : « écran seulement, jamais écrite */     atModaleChoix( · ).join(new Date().toLocaleDateString( » | atEditerChapitreRendre |
| `edRetourChapitre` | — | 177 o | (sans commentaire ni indice) | atRendreEditeur |
| `edSupprimerItem` | j,k | 151 o | (sans commentaire ni indice) | atEditerChapitreRendre, ctxEntreesItem |
| `edSupprimerSeance` | j | 249 o | (sans commentaire ni indice) | atEditerChapitreRendre, ctxEntreesSeance |
| `edTitreCoeur` | t | 466 o | le préfixe de produit (« Fiche notion — », « Prépa brevet : »…) est ignoré | edAppariements |
| `edTitreNorm` | t | 449 o | (sans commentaire) affiche/emploie : « :t);   s=s.normalize?s.normalize( · );   s=s.replace(/[.,;:!?\u2026]/g, » | _chSouche, chAfficherInventaire, edAppariements, edTitreCoeur |
| `edUndoCourt` | v | 130 o | (sans commentaire) affiche/emploie : « :v);   return t.length>40?(t.slice(0,40)+ » | edUndoJouer |
| `edUndoJouer` | — | 206 o | (sans commentaire) affiche/emploie : « R\u00e9tabli :  » | atEditerChapitreRendre |
| `edUndoMaj` | — | 176 o | (sans commentaire) affiche/emploie : « R\u00e9tablir  · Rien \u00e0 annuler pour l\u2019instant » — touche #ed-undo | edUndoJouer, edUndoPoser, edUndoVider |
| `edUndoPoser` | desc,anc,rejouer | 65 o | (sans commentaire ni indice) | atChampChapitre, atChampItem, atChampSeance |
| `edUndoVider` | — | 27 o | (sans commentaire ni indice) | edDeplacerVersSeanceFaire, edIAdepuisTrou, edInsererSeanceAvant, edPrendreFeuille (+3) |
| `editNoteSeance` | level,chnum,snum | 579 o | M12-② · Texte libre de s\u00e9ance (c\u00f4t\u00e9 prof), lu par l'\u00e9l\u00e8ve \u00e0 la place des documents. Formulation par d\u00e9faut SOUMISE au rapport, jamais d\u00e9cid\u00e9e. | renderSeance |
| `editTitle` | level,chnum,snum,itemId | 983 o | (sans commentaire) affiche/emploie : « ;}   else{currentTitle=d[chnum].title·· · ;}   _modalePrompt( » — ECRIT au hub | ctxEntreesItem, ctxEntreesSeance, renderChapterCard, renderItem (+1) |


## ÉDITEUR — les quatre onglets (Structure, Déroulé, Relecture, Papier)

| fonction | args | taille | ce qu'elle fait | appelée par |
|---|---|---|---|---|
| `atVuesAller` | v | 142 o | (sans commentaire ni indice) | atVuesBarreHtml, sesReprendre |
| `atVuesBarreHtml` | — | 369 o | (sans commentaire) affiche/emploie : « <div class= · +defs.map(function(d){     return  » | atVuesMonter, atVuesPoser |
| `atVuesMonter` | — | 810 o | (sans commentaire) affiche/emploie : « \u00e9diteur vient d · ); cadre.className= » — touche #at-zone | atEditerChapitreRendre |
| `atVuesPoser` | v | 702 o | (sans commentaire) affiche/emploie : « <div class= · +atSommaireNatifHtml()     + » — touche #at-zone | _drAfficher, _drRechargerSi, atSomAllerEcran, atVuesAller (+1) |
| `atVuesRappeler` | — | 79 o | (sans commentaire ni indice) | — |
| `atVuesRetenir` | — | 66 o | fonctions | atVuesAller |


## ÉDITEUR — sommaire natif

| fonction | args | taille | ce qu'elle fait | appelée par |
|---|---|---|---|---|
| `atSomAllerEcran` | n,seance | 896 o | (sans commentaire) affiche/emploie : « #at-arbre .ed2-som · #at-arbre .ed2-som » — touche #at-arbre | _drEntreesEcran, atSomEcransHtml |
| `atSomEcransDe` | seance | 361 o | (sans commentaire ni indice) | atSomEcransHtml |
| `atSomEcransHtml` | seance | 958 o | (sans commentaire) affiche/emploie : « <div class= · Écran  » | atSomInjecterEcrans |
| `atSomInjecterEcrans` | html | 816 o | (sans commentaire) affiche/emploie : « <div class= · <div class= » | atSommaireNatifHtml |
| `atSomOuverte` | seance | 214 o | (sans commentaire ni indice) | atSomInjecterEcrans, atSomPlier |
| `atSomPlier` | seance | 83 o | (sans commentaire ni indice) | atSomInjecterEcrans |
| `atSomRafraichir` | — | 465 o | (sans commentaire) touche #at-arbre | _drEnvelopper, _drRechargerSi, atDrJouerClic, atDrMonter (+2) |
| `atSomSuivreCourant` | — | 289 o | (sans commentaire) touche #at-arbre | _drEnvelopper, atDrBrancherSuivi |
| `atSommaireNatifHtml` | — | 394 o | (sans commentaire) affiche/emploie : « <div class= · <div class= » | atSomRafraichir, atVuesPoser |