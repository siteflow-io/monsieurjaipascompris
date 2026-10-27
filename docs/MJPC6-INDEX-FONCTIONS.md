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


**1928 fonctions** — site : 1928 · moteur : 0


## SOMMAIRE DES FAMILLES

- **ATELIER — feuilles, documents, impression** — 181 fonctions
- **ATELIER — prompts et écrans IA** — 19 fonctions
- **CHAPITRE — injection JSON, inventaire, les quatre voies** — 33 fonctions
- **DIVERS — socle du site** — 503 fonctions
- **DIVERS — utilitaires internes** — 249 fonctions
- **DÉROULÉ INTÉGRÉ (8.75.0) — p8 : notes, mesure lisible, pages, schémas** — 93 fonctions
- **DÉROULÉ INTÉGRÉ (8.75.0) — socle, classe, atelier, tableau, récit, recyclage (dr-*.js inlinés, sas LIVRAISONS/INTEGRATION/dr/)** — 412 fonctions
- **EMPLOI DU TEMPS — grille, calendrier, créneaux, cases, lancement (8.73.0 → 8.75.0)** — 236 fonctions
- **PONT DÉROULÉ — cadre, adaptateur, trame, identités, trace** — 22 fonctions
- **PONT DÉROULÉ — pilotage, lancement, clôture, reprise** — 3 fonctions
- **SESSION — les trois appareils (pilote, tableau, téléphone)** — 17 fonctions
- **SOCLE — hub, écriture, lecture** — 31 fonctions
- **SÉCURITÉ — coffre, clé, empreintes (M-SÉCU) — corps à ne jamais modifier** — 29 fonctions
- **ÉDITEUR — arborescence, publication, liaisons** — 84 fonctions
- **ÉDITEUR — les quatre onglets (Structure, Déroulé, Relecture, Papier)** — 7 fonctions
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
| `atArbrePremiereSeance` | — | 356 o | [E2] par dr_lire / dr_ecrire (13 · 25) | atVuesMonter, atVuesPoser |
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
| `atChargerChapitres` | niveau,cb | 1244 o | (sans commentaire) affiche/emploie : « écrit jamais dans l » | addChapter, atChapitresAssurer, atEditerChapitre, atHtmlRattachement (+10) |
| `atChargerListe` | — | 237 o | LA LISTE DES FEUILLES — créer · ouvrir · dupliquer · supprimer | atDupliquerDoc, atRetourListe, atSupprimerDoc, atelierOuvrir |
| `atChargerOutils` | — | 50 o | M-PROMPT-4 : la liste des outils vient du hub, où les apps l'ont publiée. | — |
| `atClasseEnCours` | — | 68 o | E1 (§12.28-3a/3b, dette 13 · 41) — L'ÉCRAN « LA CLASSE EN COURS » (P1, validé par Paul le 26/10 11:29) Paul, 26/10 11:20 : « je ne dois pas pouvoir quitter le pilotage. | aideCle, atClasseMarquer, atClasseTient, atRepetitionSiPilotage (+3) |
| `atClasseFermer` | — | 715 o | (sans commentaire) affiche/emploie : « L’heure est en cours : elle se ferme par « Clore l’heure ». · ;   /* la prochaine ouverture de l » — touche #at-zone, #atelier-ecran | atVuesBarreHtml |
| `atClasseMarquer` | — | 266 o | (sans commentaire) affiche/emploie : « état de l » | atClasseFermer, dr_ouvrirClasse, dr_tout |
| `atClasseSiteAilleurs` | — | 210 o | (sans commentaire ni indice) | atVuesBarreHtml |
| `atClasseTient` | — | 122 o | (sans commentaire ni indice) | atClasseFermer, atClasseMarquer, atelierFermer |
| `atCodeDe` | nom | 219 o | (sans commentaire ni indice) | atLotContextes |
| `atCompterLignes` | t | 91 o | (sans commentaire) affiche/emploie : « ).filter(function(l){ return l.trim()!== » | — |
| `atConfirmerEnr` | — | 1087 o | (sans commentaire) affiche/emploie : « Archivage puis enregistrement\u2026 · ;     }else{       if(f)f.textContent= » — touche #at-ia-copie, #at-ia-tpl-vue | atEnregistrerAvecDiff |
| `atCorbeilleCle` | motif | 232 o | Suppression : dénombrement affiché → archive corbeille (via _sitePut : | atIARemplacerConfirme, atSupprimerChapitre, atSupprimerDoc, chInjecterConfirme (+3) |
| `atCtxAffichage` | ctxVue,quoi | 458 o | (sans commentaire) affiche/emploie : « ;   if(quoi=== · ){     if(!ctxVue.chapitre)return  » | atelierDocumentHTML |
| `atCtxDeChapitre` | ref | 496 o | [PONT-D] L'ANCRAGE CONTEXTUEL — quand une feuille est rendue DEPUIS un contexte (niveau/chapitre/séance de la navigation), l'en-tête se résout DU CONTEXTE ; | ed2FeuilleHtml, ed2Imprimer, ed2OuvrirOnglet |
| `atDateFr` | v | 133 o | NB : formatage date robuste | atelierDocumentHTML |
| `atDeposerFeuille` | docId,doc,cb | 1733 o | LE DÉPÔT — l'item par l'écrivain unique ; l'ENVOI n'est plus écrit ici : il est encha\u00een\u00e9 par l'appelant, toujours via atEnvoyerVersion (LOT11-\u2461). | atDeposerToutes, atProposerDepot |
| `atDeposerToutes` | niveau,chnum,snum | 757 o | [Les déposer] du rappel — enchaîne les dépôts, garde nominative de 2b réutilisée. | renderSeance |
| `atDiffHtml` | av,ap | 1364 o | (sans commentaire) affiche/emploie : « <div class= · ;   if(z.length){     h+= » | atArchivesComparer, atEnregistrerAvecDiff |
| `atDiffLignes` | av,ap | 639 o | ④ LE DIFFÉRENTIEL — par lignes, sans dépendance | atDiffHtml |
| `atDocNeuf` | — | 434 o | modèle d'un document neuf | atIAInjecterAvecDestination, atIAInjecterNeuve, atNouvelleFeuille, edCreerFeuilleIci (+1) |
| `atDocsAssurer` | cb | 309 o | (sans commentaire ni indice) | renderSeance |
| `atDupliquerChapitre` | level,chnum | 960 o | (sans commentaire) affiche/emploie : « original */   copie.title=(copie.title··( · );return;}     chapitresData[level][nk]=copie;     atInfo( » | atRendreChapitres, ctxEntreesChapitre |
| `atDupliquerDoc` | id | 534 o | (sans commentaire) affiche/emploie : «  (copie) · +nid,copie,function(ok){     if(!ok){atInfo( » | atRendreListe |
| `atEcartDetail` | vivant,envoye | 1306 o | SITE-COURS-2d · le cœur de la mesure d'écart, désormais DÉTAILLÉ : il compte ET nomme les zones touchées, au niveau de la SECTION (libellés que la feuille connaît d'elle-même). | atEnvoiEcart, atOuvrirDoc |
| `atEditerChapitre` | level,chnum | 933 o | L'ÉDITEUR DE CHAPITRE, EN PLACE — chaque champ écrit SON chemin précis, jamais un nœud entier, jamais `published`. Le chapitre du site reste l'unique objet : pas de copie parallèle. | atRendreChapitres, ctxEntreesChapitre, dr_edtRelire, dr_ouvrirClasse (+3) |
| `atEditerChapitreRendre` | — | 14023 o | (sans commentaire) affiche/emploie : « <div class= · >Ce chapitre n\u2019est plus l\u00e0.</div> » — touche #at-zone, #ed2-charte | _applyLinkEcrire, _edLierEcrire, atEditerChapitre, atRendreListe (+22) |
| `atEditerChapitreSortie` | — | 193 o | (sans commentaire ni indice) | atEditerChapitreRendre |
| `atEnregistrerAvecDiff` | — | 402 o | ③ + ④ : le différentiel s'affiche, l'archive part AVANT, Paul décide. | atBlocEdition |
| `atEnregistrerMaintenant` | suite | 3337 o | l'aperçu suit en direct | atClasseFermer, atEtat, atIAInjecterAvecDestination, atIAInjecterNeuve (+5) |
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
| `atHhmm` | m | 109 o | (sans commentaire ni indice) | — |
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
| `atInfo` | msg | 69 o | petites modales de l'atelier (pas de prompt/confirm natifs) | _edLierEcrire, addChapter, atChExporter, atChampChapitre (+85) |
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
| `atMn` | s | 58 o | (sans commentaire ni indice) | — |
| `atModaleChoix` | msg,boutons | 1176 o | (sans commentaire) affiche/emploie : « ;   var bts=boutons.map(function(b,i){return  ·  at-btn-prim » — touche #at-modale | atEnregistrerMaintenant, atIAInfo, atIAInjecterAvecDestination, atIARemplacer (+32) |
| `atMultiligne` | s | 45 o | (sans commentaire ni indice) | — |
| `atNouvelleFeuille` | — | 128 o | (sans commentaire ni indice) | atRendreListe |
| `atNouvelleFeuilleIA` | — | 782 o | (sans commentaire) affiche/emploie : « atelier, pas du chapitre */   /* [8.59.2] LA PORTE IA N · aucun JSON n » | atRendreListe |
| `atOnglet` | o | 143 o | (sans commentaire ni indice) | atRendreListe |
| `atOrdreSeme` | n,seed | 245 o | Mélange déterministe (appariement statique) — pas de hasard : deux impressions identiques | — |
| `atOuvrirDoc` | id | 2107 o | (sans commentaire) affiche/emploie : « ouverture (mesure d · ,function(v){AT.envoiDoc=v··null;});}   /* [PONT-C] l » | atRendreListe, edCreerFeuilleIci, edEditerFeuille, edOuvrirItem |
| `atOuvrirOnglet` | — | 296 o | (sans commentaire) affiche/emploie : « Ouverture impossible :  » | atRendreEditeur |
| `atP2Complete` | ref | 64 o | (sans commentaire ni indice) | atP2ValiderDeroule |
| `atP2DerouleNormalise` | se,avant | 2295 o | La trame normalisée d'une séance du JSON, telle qu'elle s'écrit au hub (/seances/<j>/deroule) : {ecrans, activites:[{id,num,titre,diapos:[eid]}], travail:{heure:phrase}, maj}. | atP2NormaliserSeances, chCalculerEcritures |
| `atP2EstBilan` | e | 80 o | le bilan tel que le site le lit (dr-socle.js, ordreHeureCalc0 : le rôle, ou le mot « bilan » dans le titre) | atP2ValiderDeroule |
| `atP2Heure` | e | 50 o | (sans commentaire ni indice) | atP2ValiderDeroule |
| `atP2NormaliserBloc` | b | 1820 o | le test de l'éditeur (dr-atelier.js, « Image… ») | — |
| `atP2NormaliserSeances` | chap | 194 o | le chapitre JSON dont chaque séance porte sa trame normalisée (Remplacer, Jumeau, séance nouvelle de Compléter) | chCalculerEcritures, chInjecterConfirme |
| `atP2Uid` | — | 51 o | = DR_MEDIAS (dr-socle.js) : le site garde l'adresse complète | atP2DerouleNormalise, atP2NormaliserBloc |
| `atP2ValiderDeroule` | o,V,taxo | 9152 o | (sans commentaire) affiche/emploie : « le chapitre · : « fil » ne vaut que « langue », ou s’omet. » | — |
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
| `atRendreChapitres` | — | 2562 o | [LOT11-\u2462] LA ZONE \u00ab \u00c0 CLASSER \u00bb A V\u00c9CU (LOT\u2467\u2192\u2468\u21928.55.1) : | atRendreListe |
| `atRendreEditeur` | — | 3351 o | (sans commentaire) affiche/emploie : « iframe d · <div class= » — touche #at-apercu, #at-zone | atAjouterBloc, atAllerComposante, atAppliquerProduit, atBougerBloc (+14) |
| `atRendreListe` | — | 6018 o | (sans commentaire) affiche/emploie : « \u00e9diteur de chapitre reste ma\u00eetre jusqu · arriv\u00e9e. */   [ » — touche #at-zone | addChapter, atChapitresAssurer, atChapitresRecharger, atChargerListe (+11) |
| `atRepetitionSiPilotage` | v | 199 o | E1 (§12.28-3a) : L'ATELIER NE LANCE PLUS. Son onglet « Pilotage » joue la répétition (la trame, rien d'écrit) ; une heure avec une classe se lance depuis l'emploi du temps, dans « la classe en cours ». | atVuesAller |
| `atRetirerBloc` | i | 131 o | (sans commentaire ni indice) | atHtmlBlocs |
| `atRetourListe` | — | 83 o | (sans commentaire ni indice) | atRendreEditeur |
| `atRoster` | slug | 154 o | fin [C5-3a-c] | atHtmlRattachement, atLotContextes |
| `atSeances` | ch | 349 o | [C5-3a] la réalité Firebase : `seances` arrive en TABLEAU quand les index sont denses, en OBJET quand l'index 0 manque (le trou du chapitre 1 réel). Une seule lecture pour tout le morceau : | atChapitreLiaisons, atEditerChapitreRendre, atIAInjecterAvecDestination, atP2NormaliserSeances (+21) |
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
| `atSiteGetDocs` | cb | 196 o | Le magasin du mode test est PLAT par chemin exact : écrire des documents aux chemins enfants puis lire le parent donnerait null. | atChargerListe, atDocsAssurer, atEditerChapitre, atImprimerSelection (+5) |
| `atSitePut` | chemin,valeur,cb | 31 o | Durcissement local (complément ② du feu vert) : _sitePut/_siteDelete du socle répondent true dès que fetch se résout — un refus HTTP (500, règles de sécurité) y passe pour un succès. | atArchiverPuisEcrire, atDupliquerDoc, atEnregistrerMaintenant, atEnvoyer (+5) |
| `atStatutFeuille` | d,ref | 2123 o | Le STATUT d'une feuille (③) — croisé avec la vérité terrain (chapitresData). | atRendreListe |
| `atSupprimerChapitre` | level,chnum | 1827 o | SUPPRESSION D'UN CHAPITRE — patron feuille : corbeille D'ABORD (l'échec abandonne tout), ou sans copie ; garde « prévenu, pas bloqué » si publié. | atRendreChapitres, ctxEntreesChapitre, deleteChapter |
| `atSupprimerDoc` | id | 2616 o | (sans commentaire) affiche/emploie : « +id,function(){           atSiteDelete(AT_NOEUD+ · +id,function(ok2){             if(!ok2){atInfo( » — hub site/atelier/documents/ | atRendreListe |
| `atTaxoLibelle` | code | 1036 o | [11e adaptation · 支] le libellé d'une notion depuis la même source que la datalist | — |
| `atTbNiveau` | — | 41 o | le niveau des tableaux ②③ — celui de la page, changeable en tête d'onglet | atChapitresAssurer, atChapitresRecharger, atOnglet, atRendreChapitres (+1) |
| `atTbNiveauChange` | v | 32 o | (sans commentaire ni indice) | atTbSelecteur |
| `atTbSelecteur` | — | 258 o | (sans commentaire) affiche/emploie : « <select class= ·  onchange= » | atRendreChapitres |
| `atTexteOuReforme` | vals,refs,cle,reformOn | 108 o | Le texte d'une composante 'reforme' : principal ou reformulation selon la bascule H | — |
| `atToggleCase` | id,val | 843 o | (sans commentaire) affiche/emploie : « ABORD */   if(val&&gris){     var msg=(gris=== » | atHtmlCase |
| `atTrouverChapitre` | chs,t | 462 o | (sans commentaire ni indice) | atIAValiderAdresse |
| `atTrouverSeance` | ss,t | 422 o | (sans commentaire ni indice) | atIAValiderAdresse |
| `atValeurTypee` | composanteId,k,v | 233 o | Q6 (décision de la conscience) : un champ de type liste stocke un TABLEAU de valeurs, jamais un texte à lignes — la Concordance n'aura rien à reparser. | atIAAppliquer, atSetBlocValeur, atSetValeur, ed2SetBlocFeuille (+1) |
| `atVoirPanneau` | level,chnum | 1713 o | passerelle atelier → arborescence : fermer l'atelier (enregistré), ouvrir la page du niveau si on n'y est pas, déplier le chapitre, en haut de l'écran. | atRendreChapitres, chInjecterConfirme, ctxEntreesChapitre |
| `atZoneLignes` | cls,n | 106 o | Zones de travail | — |
| `atZonesCritiques` | av,ap | 1112 o | ④ LES ZONES CRITIQUES — on NOMME ce qui manque. Jamais un refus. | atDiffHtml |
| `atelierCharteCSS` | — | 7679 o | LA CHARTE SOBRE — EN DUR (décision : la charte est une décision de conception). Noir sur blanc, serif pour le texte long, hiérarchie explicite. Patrons : | atImprimerSelection2, atelierPageHTML, ed2CharteScopee, ed2ImprimerChapitre |
| `atelierDocumentHTML` | doc,ctxEleve,options | 6868 o | (sans commentaire) affiche/emploie : « ,     eleveCode:(ctxEleve&&ctxEleve.code)·· · ,     anneeScolaire:(typeof _anneeScolaire=== » | atImprimerSelection2, atelierPageHTML, ed2FeuilleHtml, ed2ImprimerChapitre |
| `atelierFermer` | sansPanneau,puis | 763 o | (sans commentaire) affiche/emploie : « on vient */     if(typeof puis=== » — touche #atelier-ecran | atRendreListe, atVoirPanneau, atVuesBarreHtml |
| `atelierIntitule` | doc,id | 186 o | LA FEUILLE ENTIÈRE — atelierDocumentHTML(doc, ctxEleve) → HTML autonome. Fonction PURE : aucune écriture, aucune lecture réseau (§XIII.1ter). | atelierRenduComposante |
| `atelierOuvrir` | — | 659 o | ouverture / fermeture de l'écran | dr_edtRelire, dr_ouvrirLaClasse, edtLancer, edtRienDePret (+1) |
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
| `chApresEcriture` | — | 1078 o | [LOT B \u2463d] APR\u00c8S L'\u00c9CRITURE : la liste dit vrai, sans rechargement de page. Le LOT A avait trait\u00e9 `addChapter` (le bouton du panneau prof) ; | chInjecterConfirme |
| `chCalculerEcritures` | voie,chaps | 4329 o | LA GARDE D'ATTERRISSAGE — le calcul des écritures, extrait de chInjecterConfirme, MONTRÉ avant le clic. L'appariement par titre (celui qui a mélangé le chapitre 1 le 05/08) devient VISIBLE. | chInjecter, chInjecterConfirme |
| `chChargerEtatAnnee` | cb | 162 o | SITE-COURS-2e : l'état de l'année, lu pour le niveau visé. | chOuvrir, chRendre |
| `chChargerTaxo` | cb | 112 o | (sans commentaire ni indice) | atRegenererSommaire, chOuvrir, dr_lancerNeuf, dr_taxo (+2) |
| `chCompetencesC4` | taxo | 224 o | Les compétences du cycle 4, LUES dans la taxonomie (jamais recopiées). | chEtatAnnee, chSommaire, chValiderDeclaration, chVocabulaireCompetences |
| `chEntreesDuNiveau` | niv | 39 o | (sans commentaire ni indice) | atPromptTexte, chEtatAnnee, chSommaire, chValiderDeclaration (+1) |
| `chEtatAnnee` | chaps,niv,taxo | 1533 o | L'ÉTAT DE L'ANNÉE — GÉNÉRÉ depuis la liste des chapitres du niveau. chInventaire regarde UN chapitre ; ici on lit la LISTE, parce que l'alternance ne se décide qu'en voyant l'année. | chChargerEtatAnnee |
| `chIdsTaxo` | taxo | 436 o | Les identifiants valides, à plat — pour refuser une notion inventée EN LA NOMMANT. | atP2ValiderDeroule, atTaxoLibelle, chInventaire, chValiderChapitre (+1) |
| `chInfo` | — | 774 o | (sans commentaire ni indice) | chRendre |
| `chInjecter` | voie | 3106 o | LES TROIS VOIES. Écriture PAR INDEX, jamais la liste entière, jamais push. | chAfficherInventaire |
| `chInjecterConfirme` | voie | 6875 o | (sans commentaire) affiche/emploie : « \u00c9criture en cours\u2026 ·  (proposition) » — touche #ch-msg, #ch-som-oui | chInjecter |
| `chInventaire` | existant,propose,taxo | 2429 o | L'INVENTAIRE FACE À FACE — l'existant PRÉCIS, pas un compte. | chAfficherInventaire |
| `chNettoyerPublished` | o,garderRacine | 357 o | `published` n'est JAMAIS écrit par l'injection — nettoyage récursif. | atDupliquerChapitre, chCalculerEcritures, chInjecterConfirme |
| `chOuvrir` | — | 341 o | L'ÉCRAN — accès depuis la zone « Écrire avec une IA » | atRendreListe |
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
| `chapitreHtml` | — | 8365 o | (sans commentaire) affiche/emploie : « heure jouée (rechargée, l · <h3>1 · Le tracé des travaux à faire</h3> » | relecture |
| `chargerAnnonces` | cb | 90 o | (sans commentaire) hub /site/annonces | _editerAnnonce, ecrireAnnonce, renderConsoleM8, supprimerAnnonce |
| `chargerBrevetDates` | cb | 458 o | (sans commentaire) hub /site/config/brevetDates | ecrireBrevetDate, m8BasculerModeTest, reinitialiserBrevetDates, restoreSession |
| `choixNotion` | cb | 1589 o | (sans commentaire) affiche/emploie : « ); z.className =  · abord, puis tout le programme par famille</span><span class= » | brancherDeclare |
| `choixObjet` | type | 1312 o | (sans commentaire) affiche/emploie : « ) return; const z = document.createElement( · ); z.className =  » | dr_tout, menuAtelierMur |


## DIVERS — socle du site

| fonction | args | taille | ce qu'elle fait | appelée par |
|---|---|---|---|---|
| `AC` | fam,nature,zone,lib,extra | 210 o | Constructeur compact d'une composante. fam: A..K · nature: 'donnee'·'structure'·'rendu' · zone: place dans la feuille extra: | — |
| `CH` | k,l,kind | 37 o | Raccourcis de champs | — |
| `activitesDeLHeure` | — | 444 o | (sans commentaire ni indice) | dr_avanceActivites, ouOnEnEst |
| `addChapter` | level | 1569 o | =========== CRUD chapitres / séances / items =========== | renderChapitres |
| `addImageToGallery` | file,level,chnum,snum,itemId | 877 o | (sans commentaire) affiche/emploie : « \u23f3 Ajout image\u2026 · Image  » — ECRIT au hub | convertItemToGalleryAndAdd, uploadFileForChapterItem |
| `addItem` | level,chnum,snum | 199 o | (sans commentaire) affiche/emploie : « Nouvel item · Titre du nouvel item : » | renderSeance |
| `addSeance` | level,chnum | 819 o | (sans commentaire) affiche/emploie : « Nouvelle s\u00e9ance · Titre de la nouvelle s\u00e9ance : » — ECRIT au hub | ctxEntreesChapitre, edAjouterSeance, renderChapterCard |
| `adverbeEtape` | k, graine, n | 228 o | (sans commentaire) affiche/emploie : « abord  · et enfin  » | recitHtml0 |
| `aideBasculer` | — | 51 o | contrôle n°63 (a) : le volet prend sa colonne — la page et les écrans pleins se rétrécissent ; le déroulé se redimensionne | aidePoser |
| `aideCle` | — | 1632 o | (sans commentaire) affiche/emploie : « ){     if(document.getElementById( · ))return  » — touche #atelier-ecran, #edt-ecran, #edt-modale | aideRendre, aideSuivre |
| `aideFermer` | — | 161 o | (sans commentaire) touche #aide-volet | aideBasculer, aideRendre, aideSuivre |
| `aideOuvrir` | — | 185 o | (sans commentaire) touche #aide-volet | aideBasculer |
| `aidePoser` | — | 496 o | (sans commentaire) affiche/emploie : « ; b.hidden=true;   b.title= · ; v.className= » — touche #aide-q | aideOuvrir, aideSuivre |
| `aideProf` | — | 359 o | (sans commentaire ni indice) | aideCle |
| `aideRelayer` | — | 63 o | (sans commentaire ni indice) | aideFermer, aideOuvrir |
| `aideRendre` | — | 756 o | (sans commentaire) affiche/emploie : « );   v.innerHTML= · </span><button type= » — touche #aide-volet | aideOuvrir, aideSuivre |
| `aideSuivre` | — | 274 o | (sans commentaire) affiche/emploie : « écran */   aidePoser(); var b=document.getElementById( » — touche #aide-q | — |
| `ajouterBloc` | b, focusT | 431 o | (sans commentaire) affiche/emploie : «  + (e.blocs.length - 1) +  » | formulaireObjet, p8PoserSchema |
| `alerteFermer` | — | 161 o | (sans commentaire) affiche/emploie : « ; dr_alerteScene(false); if (l) l.style.display =  » | dr_tout, lancerHeure, palier0, preparerCahier (+1) |
| `alerteOuvrir` | — | 3 o | §12.29 (1) S1 : `alerteOuvrir` / `alerteReplier` (la barre du bas, « Préparer », « Aller au cahier », « Plus tard ») tombent ; `alerteFermer` reste (le socle l'appelle). | — |
| `alerteVideo` | — | 1872 o | (sans commentaire) affiche/emploie : « ; a.innerHTML =  · ;   const estV = x => x && x.blocs[0] && x.blocs[0].t ===  » | dr_tout |
| `alertesChapitre` | — | 253 o | E1 (L187, E4 ; cadrage 4 · 6.1 « la liste complète de ce qui peut casser, chapitre par chapitre ») : | droiteAtelier0, ouvrirARegler |
| `alertesForme` | autre | 8273 o | (sans commentaire) affiche/emploie : « , copier: `Dans le chapitre « ${seance().titre} », ${ou} : l · est pas dans le contrat de l » | alertesChapitre, droiteAtelier0 |
| `aller` | i, parLeFil | 718 o | E1 (relecture continue E4, ligne 156) : le rang dans l'heure, comme « Diapo 7 sur 8 » | allerAuCahier, dr_aller, dr_montrerCahier, menuDiapo (+2) |
| `allerAuCahier` | onglet | 455 o | (sans commentaire) affiche/emploie : « #mur #ed-edit · #mur .ed-recit » | ouvrirFin |
| `allerSuivante` | — | 569 o | (sans commentaire ni indice) | alerteVideo, devoiler, menuDiapo |
| `allumer` | k | 368 o | (sans commentaire ni indice) | brancherMenus |
| `annulerDerniere` | — | 452 o | Ctrl+Z hors champ : la dernière saisie (prise de parole, note, appel) | — |
| `apercuAnnoncesPourApp` | o, appId | 276 o | Aperçu : reproduit EXACTEMENT le filtre et le tri du lecteur de M6, pour montrer ce que lira une app donnée. | _blocAnnonces |
| `apercuFermer` | — | 60 o | (sans commentaire ni indice) | — |
| `apercuOuvrir` | diapos, k | 1099 o | (sans commentaire) affiche/emploie : « )} — ${e.act} (${k + 1}/${diapos.length}${numDe(e) ?  ·  + numDe(e) :  » | — |
| `appliquerPages` | mur, et | 858 o | (sans commentaire) affiche/emploie : « ); if (!corps ·· !et.pages) { if (page) page.textContent =  · ; return; }   const els = Array.from(corps.querySelectorAll( » | paginer, rendre |
| `applyLevelTheme` | code | 838 o | (sans commentaire) affiche/emploie : « ;var bgLv=document.getElementById( · );var sunLv=document.getElementById( » — touche #bg-accueil, #bg-level, #horizon-accueil | openLevel |
| `applyLinkChanges` | newSource,newRef,newKind | 1268 o | (sans commentaire) affiche/emploie : « UNE RESSOURCE, ET IL LE DIT : si l · Remplacer la ressource » | linkModalApplyApp, linkModalApplyAtelier, linkModalApplyUrl, linkModalUnlink |
| `applyPublished` | level | 2504 o | (sans commentaire) affiche/emploie : « ;   });   var zA=document.querySelector( · );   var cA=document.getElementById( » — touche #admin-tabs-publish, #count-analyse-logique, #tab-btn- | basculerVue, loadPublished, togglePublishExtra, togglePublishTab |
| `apresTrame` | quoi | 191 o | (sans commentaire ni indice) | couperDiapoIci, deplacerDiapo, dr_blocColler, dupliquerDiapo (+8) |
| `archiveClass` | slug | 486 o | (sans commentaire) affiche/emploie : « Archiver la classe · Archiver \u00ab <b> » — ECRIT au hub | _profSectionClasses |
| `arreterRepetition` | — | 1305 o | (sans commentaire ni indice) | dr_onglet, dr_ouvrirClasse |
| `basculerAffichageCode` | — | 534 o | M8-IDENTITÉ — LES TROIS AXES (doctrine §I) ① QUI JE SUIS : TRACK.eleve (is_prof) — posé à la connexion, jamais par un raccourci. ② CE QUE JE VOIS : | — |
| `basculerNotes` | on | 197 o | (sans commentaire) affiche/emploie : « ) : on; f.classList.toggle( · , ouvrir); if (ouvrir) { peindreNotes(); $( » | — |
| `basculerQui` | par | 205 o | (sans commentaire ni indice) | — |
| `basculerRecit` | h, vers | 478 o | (sans commentaire) affiche/emploie : « ) && document.getElementById( · )) relecture(); }; if (vers ===  » — touche #ecran-relecture | brancherFin, recitHtml0 |
| `basculerVue` | — | 416 o | [LOT7-①] l'ancien circuit de dépôt (initAdminDragDrop_) et le registre getdocs (loadDocsList_) sont retirés — le dépôt vit dans initChapterDragDrop et la modale Lier. | handleBadgeTap |
| `blocDe` | el | 154 o | (sans commentaire) affiche/emploie : « ); return { bi: +bi, ei: ei ===  » | brancherAtelier, dr_tout, ecrireDansDiapo, p85fSuivreFrappe (+1) |
| `brancherAjout` | — | 2594 o | (sans commentaire) affiche/emploie : « ), dit = rep.querySelector( · , !r.i); S.blocActif = bi; S._garderFocus = { bi, ri, quoi:  » | dr_tout |
| `brancherAtelier` | — | 4886 o | (sans commentaire) affiche/emploie : « ); x.title = p8ReactAvantLancement(e) ?  · est elle qui s\ » | focaliser |
| `brancherChapitre` | — | 639 o | (sans commentaire) affiche/emploie : « ); { const tt = txt ··  ·  + dr_esc(tt).replace(/\n/g,  » | relecture |
| `brancherDeclare` | da | 4277 o | (sans commentaire) affiche/emploie : « ) { dr_saisir( · Créer l\ » | rendreDroiteAtelier |
| `brancherDocs` | — | 842 o | (sans commentaire) affiche/emploie : « ].includes(d.type)) { dr_dire( ·  + d.type +  » | — |
| `brancherFaisceau` | h | 1604 o | (sans commentaire) affiche/emploie : « ); if (!z) return; z.querySelectorAll( · ; f.reps.push(oui); if (f.q === 1) { if (!oui) f.concl =  » | ouvrirOuverture |
| `brancherFin` | — | 2825 o | (sans commentaire ni indice) | rendre |
| `brancherMenus` | — | 3267 o | (sans commentaire) affiche/emploie : « ), ev.clientX, ev.clientY, [{ a:  · , l: `Aller à ${r.eleve ? prenomUnique(r.eleve) : r.i}`, t:  » | dr_tout |
| `brancherPapier` | — | 373 o | (sans commentaire) affiche/emploie : « ); let imp = document.getElementById( · ); if (pap) { if (!imp) { imp = document.createElement( » — touche #dr-impression | relecture |
| `brancherSelecteur` | — | 176 o | (sans commentaire) touche #dr-rel-classe | relecture |
| `candidats` | ...a | 30 o | (sans commentaire ni indice) | — |
| `classeTestId` | — | 32 o | 3. Classes de test (bac à sable) : convention unique "_test_<app>" Préfixe "_" = classe interne : jamais montrée aux élèves, jamais archivée dans les profils, nettoyable sans risque. | — |
| `cleClasse` | nom | 34 o | 2. Identité classe : la clé du hub EST l'identifiant Décision du 14/07/2026 : aucune app ne transforme le nom de classe. La clé de /classes (ex. "4E BANKSY") est l'unique étiquette de rangement. | ecrireClasse |
| `cloneBloc` | b | 76 o | (sans commentaire ni indice) | dr_blocColler, menuAtelierMur |
| `closeCreateClassModal` | — | 278 o | (sans commentaire) affiche/emploie : « + Nouvelle classe » — touche #class-modal, #class-modal-nom, #class-modal-title | submitCreateClass |
| `closeGalleryViewer` | — | 116 o | (sans commentaire) touche #gallery-viewer-overlay | openGalleryViewer |
| `closeIntentSurvey` | skipped | 626 o | (sans commentaire) affiche/emploie : « ;     fetch(FIREBASE_BASE+ · ,{       method: » — touche #intent-overlay — ECRIT au hub | — |
| `closeLinkModal` | — | 99 o | (sans commentaire) touche #link-modal | _applyLinkEcrire |
| `closeProfPanel` | — | 110 o | M-MANIFESTE-2 : l'alerte bloquante | _activerProfilTest, _profSectionArchi, atelierFermer, atelierOuvrir (+1) |
| `closeViewer` | — | 294 o | (sans commentaire) touche #doc-viewer, #doc-viewer-frame, #doc-viewer-newtab | — |
| `clotureHtml` | — | 2234 o | (sans commentaire) affiche/emploie : « > A${a.num} · ${dr_esc(a.titre ··  · )} : ${S.durees[id]} min</label>` :  » | ouvrirFin |
| `collectAutonomieItems` | level | 1135 o | (sans commentaire ni indice) | renderZoneAutonomie |
| `collectChapterItems` | level,kind,avecInvisibles | 2384 o | (sans commentaire ni indice) | _apercuOngletVide, collectRayons, gotoAnalyse, gotoDictee (+2) |
| `collectRayons` | level | 3031 o | [C5-AR] — LES RAYONS : ce qui vit éclaté dans les chapitres se retrouve PAR TYPE. Aucun second moteur : | renderRayons |
| `computeDiff` | target | 498 o | (sans commentaire ni indice) | _renderIntentTimer, updateTimers |
| `connecteur` | type,graine | 66 o | (sans commentaire ni indice) | recitHtml0 |
| `contenuEntier` | e | 463 o | (sans commentaire) affiche/emploie : «  + x).join( · ) return b.txt; if (b.t ===  » | objetDec |
| `controleCahier` | restantes | 2264 o | (sans commentaire) affiche/emploie : «  (proposée :  · a pas été fait » | manquesAvantDeClore, sequenceHtml |
| `convertItemToGalleryAndAdd` | file,level,chnum,snum,itemId | 799 o | (sans commentaire) affiche/emploie : « \u23f3 Cr\u00e9ation galerie\u2026 » — ECRIT au hub | uploadFileForChapterItem |
| `copierTexte` | txt, ok | 294 o | (sans commentaire) affiche/emploie : « copie impossible ici · copie impossible ici » | brancherChapitre, ouvrirFin |
| `corrigePart` | ini, id | 872 o | (sans commentaire) affiche/emploie : « ); let h = `<h4>${ini} — corriger</h4><div class= · )}</div>`;   MOTIFS_PART.forEach(m => { h += `<button class= » | ouvrirPart |
| `couperDiapoIci` | i, bi | 669 o | E1 : la modale du site, plus confirm() | menuAtelierMur |
| `creneauDe` | di | 401 o | (sans commentaire) affiche/emploie : « heure prévue d » | dr_tout, droiteAtelier0 |
| `ctxEntreesChapitre` | level,chnum | 1537 o | [LOT9-\u2464] LE MENU DU CHAPITRE \u2014 m\u00eame moteur (table + ctxOuvrir), AUCUN geste invent\u00e9 : chaque entr\u00e9e appelle une fonction existante (r\u00e8gle du miroir). | ctxSommaireOuvrir |
| `ctxEntreesItem` | d | 928 o | la TABLE — items : d = la ligne d'ed2Documents (objet réel, jamais un attendu) | ctxSommaireOuvrir |
| `ctxEntreesSeance` | j | 1214 o | (sans commentaire) affiche/emploie : « \u00c9diter dans l\u2019atelier · Ouvrir dans la Structure » | ctxSommaireOuvrir |
| `ctxFermer` | — | 81 o | (sans commentaire ni indice) | ctxOuvrir |
| `ctxOuvrir` | x,y,titre,entrees | 848 o | (sans commentaire) affiche/emploie : « ;   d.innerHTML= » | ctxSommaireOuvrir |
| `ctxSommaireCible` | t | 668 o | le BRANCHEMENT de ce lot : le sommaire de l'éditeur. Délégation (le sommaire se re-rend) ; l'objet se retrouve dans les DONNÉES, jamais déduit du DOM. | — |
| `ctxSommaireOuvrir` | x,y,cible | 633 o | (sans commentaire) affiche/emploie : « Chapitre  · S\u00e9ance  » | — |
| `currentSchoolYear` | — | 144 o | (sans commentaire) affiche/emploie : « +year;   return year+ » | openCreateClassModal |
| `degeler` | — | 122 o | (sans commentaire) affiche/emploie : « ); journal( » | gel, lancerHeure, ouvrirFin, revenirAuCours |
| `dejaVuAvant` | di | 160 o | (sans commentaire ni indice) | — |
| `dejaVue` | id | 169 o | (sans commentaire ni indice) | ouvrirFin, taxoHtml |
| `deleteChapter` | level,chnum | 202 o | (sans commentaire) affiche/emploie : « atelier partagent le MÊME geste :      corbeille d » | renderChapterCard |
| `deleteClass` | slug | 915 o | (sans commentaire) affiche/emploie : « Supprimer la classe \u00ab  · },function(){     mjpcDeleteJson(FIREBASE_BASE+ » | _profSectionClasses |
| `deleteImageInGallery` | level,chnum,snum,itemId,imgId | 557 o | (sans commentaire) affiche/emploie : « Supprimer cette image · ,function(){   mjpcDeleteJson(FIREBASE_BASE+ » | renderItem |
| `deleteItem` | level,chnum,snum,itemId | 1166 o | (sans commentaire) affiche/emploie : « Supprimer l\u2019item · Supprimer l\u2019item \u00ab <b> » | edSupprimerItem, renderItem |
| `deleteSeance` | level,chnum,snum | 1506 o | (sans commentaire) affiche/emploie : « Supprimer la s\u00e9ance · Supprimer la s\u00e9ance \u00ab <b> » | edSupprimerSeance, renderSeance |
| `demander` | titre, cb | 391 o | (sans commentaire) affiche/emploie : « ; f.classList.add( · ); f.style.left =  » | menuDiapo |
| `deplacerBloc` | bi, sens | 372 o | (sans commentaire ni indice) | brancherAtelier, menuAtelierMur, poserBarreBloc |
| `deplacerDiapo` | i, sens | 1220 o | (sans commentaire) affiche/emploie : «  ne se déplace pas : elle reste à sa place dans son heure. ·  && sens > 0) return dr_dire( » | menuAtelierDiapo |
| `devoiler` | — | 1487 o | (sans commentaire) affiche/emploie : « ) { const d0 = etatDiapo(); if (d0.nDev === 2) S.finVue =  · ); return; } /* E1 (relance du 21/10, relecteur d\ » | — |
| `dimensionner` | — | 932 o | (sans commentaire) affiche/emploie : « ; cadre.style.height = Math.floor(h) +  » | dr_reactApercuRendre, dr_tirer, dr_tout, revenirAuCours |
| `doLogin` | — | 3415 o | (sans commentaire) affiche/emploie : « ;   var err=document.getElementById( · );var status=document.getElementById( » — touche #val-btn, #val-code, #val-error | — |
| `docHtml` | d | 817 o | maquette p8-5g, lignes 888-891 | rendre |
| `driveExtraireId` | texte | 248 o | [C5-3ac2] l'extraction d'id Drive, UNE fois pour toute l'application — le cœur de linkModalApplyUrl, partagé avec le dépôt d'image du diaporama. | linkModalApplyUrl |
| `droiteAtelier` | — | 572 o | (sans commentaire) affiche/emploie : « <div class= ·  title= » | rendreDroiteAtelier |
| `droiteAtelier0` | e, E | 11439 o | (sans commentaire) affiche/emploie : «  data-retire= ·  data-id= » | droiteAtelier |
| `dupliquerDiapo` | i | 369 o | (sans commentaire) affiche/emploie : «  ne se duplique pas. ·  (copie) » | menuAtelierDiapo |
| `ecartDate` | ts | 290 o | (sans commentaire) affiche/emploie : « jamais publi\u00e9 · date illisible » | ecartLigne |
| `ecartInfo` | — | 744 o | (sans commentaire ni indice) | ecartRendre |
| `ecartLigne` | id,entree,socleCourant | 442 o | (sans commentaire) affiche/emploie : « jamais publi\u00e9e · \u00e0 jour » | ecartRendre |
| `ecartOuvrir` | — | 281 o | (sans commentaire) affiche/emploie : « <div class= · >Lecture des fiches\u2026</div> » — touche #at-zone | — |
| `ecartRendre` | entrees,socleCourant | 1666 o | (sans commentaire) affiche/emploie : « <div class= ·  onclick= » | ecartOuvrir |
| `ecrireAnnonce` | id, texte, app | 799 o | (sans commentaire) affiche/emploie : « ).trim();   if(!texte){ alert( ·  + Date.now() +  » — hub /site/annonces | _blocAnnonces |
| `ecrireBrevetDate` | niveau, valeurISO | 590 o | (sans commentaire) affiche/emploie : « Date incompréhensible :  · La date n » — hub /site/config/brevetDates | _blocBrevet |
| `ecrireClasse` | db, nomClasse, eleves, meta, cb | 1213 o | 5. Écriture NON destructive d'une classe : ecrireClasse Remplace UNIQUEMENT la liste d'élèves ; préserve toute métadonnée existante (archivee, niveau, couleur, …) ; | — |
| `ecrireDansDiapo` | el | 1651 o | la frappe faite juste avant de quitter part quand même | brancherAtelier |
| `elements` | e | 919 o | (sans commentaire) affiche/emploie : «  && typeof dr_marquesElements ===  · le travail à faire » | apercuOuvrir, devoiler, dr_avanceActivites, dr_devoilerQuestionsRepondues (+19) |
| `elementsDeLaDiapo` | — | 66 o | (sans commentaire) affiche/emploie : « #mur [data-p] » | brancherAtelier |
| `elementsEditables` | — | 83 o | (p8-4) le tableau suit la frappe ; le texte qui a le focus n'est jamais touché par le redessin | brancherAtelier |
| `eleveDitJe` | t | 641 o | (sans commentaire) affiche/emploie : «  : (AVEC_ETRE.has(pp) ?  · ).replace(dr_rx(/\bmon\b/g),  » | recitEtape |
| `elfAujourdhui` | — | 93 o | (sans commentaire ni indice) | elfEnregistrer, elfRappel |
| `elfCase` | id,v | 149 o | (sans commentaire) affiche/emploie : « .elf-apps b » | elfFicheHtml |
| `elfChargerFleches` | suite | 948 o | qui est fléché (avec la clé) : pour le ◆ de la liste et le rappel nominatif | elfMarquerListe, elfPreparerRappels |
| `elfDateCourte` | iso | 72 o | (sans commentaire) affiche/emploie : « );return p.length===3?p[2]+ » | elfRappelCaseHtml, elfRappelClasseHtml |
| `elfDateLongue` | iso | 81 o | (sans commentaire) affiche/emploie : « );return p.length===3?p[2]+ » | elfEnregistrer, elfFicheHtml, elfMarquerListe |
| `elfDispositif` | v | 317 o | (sans commentaire) affiche/emploie : « ].forEach(function(o){var b=document.getElementById( · )===!!v);});var t=document.querySelector( » — touche #elf-disp- | elfFicheHtml |
| `elfEnregistrer` | — | 2484 o | (sans commentaire) affiche/emploie : « Ta clé est nécessaire · <div class= » | elfFicheHtml |
| `elfEssDuNiveau` | niv | 431 o | (sans commentaire ni indice) | elfRappel |
| `elfFermer` | — | 48 o | (sans commentaire ni indice) | elfFicheHtml |
| `elfFicheHtml` | — | 4291 o | (sans commentaire) affiche/emploie : « <div class= ·  onclick= » | _profSectionEleves |
| `elfJour` | iso | 138 o | (sans commentaire) affiche/emploie : « });}catch(e){return  » | elfRappelClasseHtml |
| `elfLire` | — | 826 o | (sans commentaire ni indice) | — |
| `elfMarquerListe` | slug | 378 o | (sans commentaire) touche #elf-flag- | _profSectionEleves |
| `elfNiveau` | c | 193 o | le rappel des équipes éducatives | elfRappel, elfRappelClasseHtml |
| `elfOuvrir` | slug,i | 202 o | la fiche | _profSectionEleves |
| `elfOuvrirClasse` | slug | 68 o | (sans commentaire ni indice) | elfRappelClasseHtml |
| `elfPlusJours` | iso,n | 139 o | (sans commentaire) affiche/emploie : « ),d=new Date(+p[0],+p[1]-1,+p[2]+n);return d.getFullYear()+ » | elfRappel |
| `elfPremieresCases` | cel,creneaux | 644 o | (sans commentaire) touche #edt-ecran | edtPeindreSemaine |
| `elfPreparerRappels` | — | 480 o | (sans commentaire ni indice) | _profSectionClasses |
| `elfProfil` | — | 79 o | (sans commentaire ni indice) | elfLire, elfSexe |
| `elfRappel` | slug | 769 o | (sans commentaire) affiche/emploie : « ;     else if(auj>ess.date){       r.etat= · ;   } else if(sept)r.etat= » | elfRappelCaseHtml, elfRappelClasseHtml |
| `elfRappelCaseHtml` | slug | 362 o | (sans commentaire) affiche/emploie : « ;   var n=r.fleches?r.fleches.length:r.nb;   return  ·  fléché » | edtPeindreSemaine |
| `elfRappelClasseHtml` | slug | 1905 o | (sans commentaire) affiche/emploie : « );   var marge=r.ess? · ;   if(r.rien)return  » | _profSectionClasses |
| `elfRedessiner` | — | 106 o | (sans commentaire ni indice) | elfEnregistrer, elfLire |
| `elfRemarque` | id,v | 49 o | (sans commentaire ni indice) | elfFicheHtml |
| `elfSexe` | v | 597 o | (sans commentaire) affiche/emploie : « ;   var ops=[_eliPut(racine+ · sexe (pour les apps) » — touche #elf-sexe- | elfFicheHtml |
| `elfSlugCellule` | x | 315 o | la case de la première heure de chaque classe, dans la semaine affichée : un nombre, jamais un nom | elfPremieresCases |
| `elfSynthese` | v | 44 o | (sans commentaire ni indice) | elfFicheHtml |
| `eliAnalyser` | lignes,source | 2458 o | (sans commentaire ni indice) | eliLireFichier, eliSurCollage |
| `eliAnnuler` | — | 28 o | (sans commentaire ni indice) | eliApercuHtml |
| `eliApercuHtml` | E | 7339 o | (sans commentaire) affiche/emploie : « <div class= · ><div class= » | eliRendre, eliSectionHtml |
| `eliApparier` | nomLu | 322 o | (sans commentaire ni indice) | eliAnalyser |
| `eliAttenteHtml` | — | 785 o | (sans commentaire) affiche/emploie : « ;   if(parPage)h+= ·  attend » | eliSectionHtml |
| `eliChargerSheetJS` | — | 495 o | (sans commentaire) affiche/emploie : « lecteur absent · lecteur non chargé » | eliLireFichier |
| `eliChargerSources` | — | 518 o | la suite de l'import après la fenêtre de la classe (création, année) | eliAnalyser |
| `eliChiffrerEnAttente` | — | 1048 o | La clé vient d'être saisie : ce qui attendait en mémoire se chiffre et s'écrit ; les comptes se vérifient. | secuPoserCle |
| `eliChipsEcriture` | E,s,ch | 1336 o | (sans commentaire) affiche/emploie : « ;if(E.modeNoms··!s)return h;   if(!E.sourcesLues)return ch( · );   if(E.sourcesKo)return ch( » | eliApercuHtml |
| `eliChoisirClasse` | v | 78 o | (sans commentaire ni indice) | eliApercuHtml |
| `eliChoisirFichier` | — | 62 o | (sans commentaire) touche #eli-fichier | eliSectionHtml |
| `eliDate` | brut | 591 o | Une date de naissance → « AAAA-MM-JJ », ou '' si elle ne se lit pas. | eliAnalyser |
| `eliDateAff` | iso | 81 o | (sans commentaire) affiche/emploie : « );return p.length===3?p[2]+ » | eliApercuHtml |
| `eliDepot` | ev | 136 o | (sans commentaire ni indice) | eliSectionHtml |
| `eliEcrire` | slug | 3348 o | (sans commentaire) affiche/emploie : « ;   var ops=[_eliPut(racine+ · nombre de dispositifs » | eliModaleClasse, eliValider |
| `eliFichierChoisi` | inp | 68 o | (sans commentaire ni indice) | eliSectionHtml |
| `eliFini` | E,slug,C,rep,nR,nb | 924 o | (sans commentaire) affiche/emploie : « ✔ Écrit dans «  ·  » : la liste ( » | eliEcrire |
| `eliLireFichier` | f | 1007 o | (sans commentaire) affiche/emploie : « Lecture de «  · les eleves » | eliDepot, eliFichierChoisi |
| `eliMemeClasse` | a,b | 46 o | (sans commentaire ni indice) | elfSlugCellule, eliApercuHtml, eliApparier, eliReprise (+1) |
| `eliMessage` | t | 124 o | (sans commentaire) affiche/emploie : « <div class= » — touche #eli-apercu | eliLireFichier |
| `eliModaleClasse` | mode,slug | 753 o | (sans commentaire) affiche/emploie : « ).filter(function(w){return /^[3-6]e$/.test(w);})[0])·· · ;   if(mode=== » — touche #class-modal-niveau, #class-modal-nom, #class-modal-title | eliValider |
| `eliMots` | t | 172 o | La classe : mêmes mots, dans n'importe quel ordre ; « 3 » vaut « 3e » (de même 4, 5, 6). | elfNiveau, eliMemeClasse, eliModaleClasse |
| `eliNom` | t | 50 o | (sans commentaire ni indice) | eliAnalyser |
| `eliNomCible` | E,slug | 98 o | (sans commentaire ni indice) | eliEcrire, eliFini, eliModaleClasse, eliReprise (+1) |
| `eliOpsRetrait` | slug,k | 725 o | Le retrait d'un élève emporte aussi sa fiche et son aménagement ; avec la clé, le compte suit. | _deleteEleveCls |
| `eliPremier` | slug | 78 o | (sans commentaire ni indice) | eliChipsEcriture, eliEcrire, eliReprise |
| `eliRecompterDispositifs` | — | 625 o | Avec la clé, le nombre en clair de chaque classe se recompte sur les fiches (après un retrait fait sans la clé). | eliChiffrerEnAttente |
| `eliRendre` | — | 99 o | (sans commentaire) touche #eli-apercu | eliAnalyser, eliAnnuler, eliChargerSources, eliChoisirClasse (+1) |
| `eliReprise` | E,slug | 773 o | (sans commentaire ni indice) | eliChipsEcriture, eliEcrire |
| `eliRestes` | E,slug | 796 o | Les restes de l'an dernier : les classes du QCM et de la dictée qui ne sont plus aucune de tes classes. | eliChipsEcriture, eliEcrire |
| `eliRestesEnCorbeille` | res,suite | 823 o | (sans commentaire ni indice) | eliEcrire |
| `eliSectionHtml` | — | 1137 o | (sans commentaire) affiche/emploie : « <div class= ·  title= » | _profSectionEleves |
| `eliSurCollage` | ev | 473 o | Le collé : n'importe où sur la page « Élèves & codes », sauf dans un champ (le cadre de secours garde son collage). | — |
| `eliSurvol` | ev,oui | 104 o | (sans commentaire) touche #eli-zone | eliDepot, eliSectionHtml |
| `eliValider` | — | 341 o | (sans commentaire ni indice) | eliApercuHtml |
| `empreinte` | s | 79 o | (sans commentaire ni indice) | adverbeEtape, connecteur, dr_temoinIntegre |
| `ensureEleveUuid` | eleve | 1661 o | [EDT] porte n°1 — l'arrivée du professeur, par-dessus l'accueil | _loginEleveFound |
| `envoyerVersSeance` | i | 2950 o | (sans commentaire) affiche/emploie : « Une seule séance dans le chapitre : rien où envoyer. · ); z.className =  » | menuAtelierDiapo |
| `esc` | s | 21 o | les huit noms de la maquette sont préfixés dr_ (contrat §7). Ils n'étaient pas en collision avec le site (audit E1, F2) ; des modules écrits sur la maquette les appellent encore (E4 : | elfFicheHtml, elfRappelClasseHtml, eliApercuHtml |
| `escapeHtml` | s | 122 o | (sans commentaire) affiche/emploie : « ;return String(s).replace(/&/g, » | _b2Check, _b2Confirm, _b2ExecReel, _b2RenderPick (+94) |
| `estClasseInterne` | nom | 48 o | (sans commentaire ni indice) | estClasseTest |
| `estClasseTest` | nom | 88 o | (sans commentaire) affiche/emploie : « CLASSE TEST » | — |
| `etatActivite` | — | 396 o | (sans commentaire) affiche/emploie : « dans les temps » | dr_phraseActivite |
| `etatActiviteAncien` | — | 683 o | (sans commentaire) affiche/emploie : « il te reste peu de temps · dans les temps » | — |
| `etatWorktrack` | a | 1050 o | (sans commentaire) affiche/emploie : «  && x.di === i)); if (toutes && !enCours) return { k:  · , prevu, min }; if (minF > prevu) return { k:  » | etatActivite, ouOnEnEst |
| `extractEleves` | fbClasse, cfgEleves | 993 o | 4. Lecture robuste d'un roster : extractEleves Tolère les 3 formats rencontrés dans les données réelles : | _b2Eleves, _deleteEleveCls, _drPrenomsDeLaClasse, _findEleveByName (+14) |
| `faisceauHtml` | h | 3395 o | (sans commentaire) affiche/emploie : «  + r.di]); if (!liste.length) { S.faisceau = null; return  ·  + dr_esc(src.titre) +  » | ouvrirOuverture |
| `familleDe` | id | 44 o | (sans commentaire ni indice) | proposerRemob |
| `fermerChoix` | — | 70 o | (sans commentaire ni indice) | ajouterBloc, choixNotion, choixObjet, envoyerVersSeance (+3) |
| `fermerFiche` | — | 405 o | (sans commentaire) affiche/emploie : « en va (la maquette n » | — |
| `fermerOral` | — | 158 o | (sans commentaire ni indice) | ouvrirOral, validerOral |
| `fermerPalette` | — | 26 o | (sans commentaire ni indice) | — |
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
| `focaliser` | el, fin | 586 o | (sans commentaire) affiche/emploie : « abord */ if (!el.getAttribute( » | ajouterBloc, brancherAtelier, deplacerBloc, dr_tout (+2) |
| `formulaireObjet` | t | 16789 o | (relecture continue d'E4, 14:05) le texte d'attente (« Nouvelle consigne ») est sélectionné : la frappe le remplace ; et le curseur y est dans la même tâche | choixObjet |
| `gardeCopie` | h, faire | 725 o | (sans commentaire) affiche/emploie : « )} — poursuivre quand même ?`; $( · ).onkeydown = ev => { if (ev.key ===  » | basculerRecit, recitHtml0 |
| `gel` | — | 793 o | (sans commentaire) affiche/emploie : « Jouer en avance — répétition : aucun gel, rien n\ · ); return; } if (S.preparation) { $( » | — |
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
| `heureDiapo` | di | 95 o | (sans commentaire ni indice) | histoire |
| `heuresJouees` | — | 475 o | (sans commentaire ni indice) | dr_papierPreparer, recitSeanceHtml, relecture |
| `hideAllTabs` | — | 334 o | (sans commentaire ni indice) | gotoAnalyse, gotoEvalConn, showDicteeList, showEmptyTab (+2) |
| `histoire` | ini | 742 o | (sans commentaire) affiche/emploie : « historique COMPLET d · ).toUpperCase() !== ini)) return; out.push({ genre:  » | ouvrirPart, participation |
| `imparfait` | s | 97 o | (sans commentaire ni indice) | recit |
| `initChapterDragDrop` | — | 2261 o | (sans commentaire) affiche/emploie : « ;     var target=e.target.closest( · )){           target.classList.add( » — touche #chapters-dynamic | renderChapitres |
| `initHome` | — | 1792 o | (sans commentaire) affiche/emploie : « ··TRACK.eleve.is_prof);   var accessible=isAllAccess?[ · ]:(levelAccess[currentLevel]··[currentLevel]);   [ » — touche #user-badge | _activerProfilTest, _atterrirProf, _loginEleveFound, loginAsProf |
| `insererDiapoApres` | i | 543 o | (sans commentaire) affiche/emploie : « ) return dr_dire( · insère après le bilan : il reste le dernier de la séance. » | menuAtelierDiapo |
| `isPubFor` | node,cls | 327 o | M8-IDENTITÉ (I1+I5) — publication : UN SEUL lecteur, tolérant. Clés historiques = noms bruts ("4E BANKSY") ; clé canonique = slug ("4e_banksy"). Les deux formes sont lues ; | _dimNode, _isPubAny, _pubCtrl, _pubEtatNiveau (+7) |
| `itemCreer` | level,chnum,snum,title,props,cb | 1211 o | SITE-COURS-2c · le cœur d'addItem devient itemCreer, l'ÉCRIVAIN UNIQUE des items (slug, ordre, écriture, mise à jour locale) — le dépôt d'une feuille de l'atelier passe par LUI, jamais par un second é | addItem, atDeposerFeuille, atIAInjecterAvecDestination, edAjouterItem (+5) |
| `itemProduitMenu` | level,chnum,snum,itemId,prodCourant | 160 o | (sans commentaire ni indice) | atEditerChapitreRendre |
| `itemProduitPoser` | level,chnum,snum,itemId,prod | 695 o | [LOT8c-\u2468] L'\u00c9CRIVAIN UNIQUE du produit d'un ITEM (drive/external) : le champ vit SUR L'ITEM \u2014 jamais de n\u0153ud parall\u00e8le. L'identit\u00e9 du rangement est l'uid de l'item ; | itemProduitMenu |
| `jeInterieur` | t | 626 o | (sans commentaire) affiche/emploie : « ) : null); if (!imp) return _; return  ·  + (pron ?  » | eleveDitJe |
| `lancerHeure` | h | 1729 o | (sans commentaire) affiche/emploie : « heure n repart de l · heure 2 s » | dr_lancerNeuf |
| `lancerRepetition` | — | 1264 o | (p6) la répétition | atRepetitionSiPilotage, dr_tout |
| `leverAlerteRegles` | — | 356 o | (sans commentaire) affiche/emploie : « ); return; }     var o = document.getElementById( » — touche #m8-regles-overlay — hub /site/config/dernierControleRegles | ouvrirOverlayRegles |
| `libDecision` | d | 316 o | (sans commentaire) affiche/emploie : « heure suivante · en réserve » | menuDiapo, ouvrirFin, passeHtml, volet |
| `libNotion` | id | 155 o | (sans commentaire ni indice) | choixNotion, droiteAtelier0, ouvrirFin, ouvrirOral (+3) |
| `libNotionEleve` | id | 166 o | (sans commentaire ni indice) | — |
| `ligneSuite` | — | 1284 o | (sans commentaire) affiche/emploie : « ; return; } z.style.display =  · ; if (su.genre ===  » | dr_tout |
| `linkItem` | level,chnum,snum,itemId | 45 o | QCM migre sur le hub | renderItem |
| `linkModalApplyApp` | kind | 230 o | (sans commentaire) affiche/emploie : « Choisis un \u00e9l\u00e9ment dans la liste. » — touche #link-modal- | — |
| `linkModalApplyAtelier` | — | 694 o | (sans commentaire) affiche/emploie : « ;   if(!ref){alert( · ){     /* Prévenu, pas bloqué : un objet nominatif ne s » — touche #link-modal-atelier | — |
| `linkModalApplyUrl` | — | 478 o | (sans commentaire) affiche/emploie : « Colle un lien Drive ou une URL. · ;   var idD=driveExtraireId(input);   if(idD){newSource= » — touche #link-modal-url | — |
| `linkModalUnlink` | — | 213 o | (sans commentaire) affiche/emploie : « ,function(){   applyLinkChanges( » | — |
| `lireSessionMJPC` | ttlMs | 618 o | (sans commentaire ni indice) | — |
| `loadAppList` | kind | 1637 o | (sans commentaire) affiche/emploie : « <option value= · ;   if(kind=== » — touche #link-modal- | openLinkModal |
| `loadAtelierDocList` | — | 1725 o | (sans commentaire) affiche/emploie : « <option value= · <option value= » — touche #link-modal-atelier, #link-modal-current | openLinkModal |
| `loadClasses` | callback | 294 o | (sans commentaire ni indice) | _b2ExecReel, _doImport, _profSectionClasses, _profSectionEleves (+11) |
| `loadCodes` | cb | 225 o | (sans commentaire ni indice) | _b2ExecReel, _doImport, _profSectionEleves, _uniExec (+3) |
| `loadPublished` | level | 1479 o | (sans commentaire) affiche/emploie : « arbre recomposé (« Je publie pour » s · écran élève n » | openLevel |
| `loginAsProf` | — | 1568 o | (sans commentaire) affiche/emploie : « ].forEach(function(lvl){var card=document.querySelector( · arrivée du professeur, par-dessus l » — touche #page-home, #page-validation, #proto-badge | _quitterProfilTest, doLogin |
| `loupeSur` | mur, et | 377 o | maquette p8-5g, lignes 916-917 | rendre |
| `m8BasculerModeTest` | — | 232 o | (sans commentaire ni indice) | _blocModeTest |
| `m8LireOuHub` | chemin | 222 o | la lecture d'un chemin du hub pour les lecteurs qui faisaient leur fetch eux-mêmes : en mode test, l'arbre recomposé ; sinon le hub, inchangé | loadPublished, tabLibellesCharger |
| `m8RendreIndicateursTest` | — | 474 o | (sans commentaire) affiche/emploie : « );     pill.innerHTML = on       ?  · ;   }   var dot = document.getElementById( » — touche #tprof-testdot, #tprof-testpill | renderConsoleM8, showProfSection |
| `m8TestOn` | — | 28 o | (sans commentaire ni indice) | _blocModeTest, _corbRestaurerExec, _corbeilleRestaure, _m8Superposer (+21) |
| `majPastilleVue` | — | 374 o | [C5-3ac2b] ④ la pastille de bascule : visible si l'IDENTITÉ est prof (pas la vue — elle doit rester là en vue élève pour le retour) ; son icône dit la vue. | basculerVue, loginAsProf, restoreSession |
| `manquesAvantDeClore` | restantes | 74 o | (sans commentaire ni indice) | ouvrirFin |
| `marquerModif` | quoi | 285 o | (sans commentaire) affiche/emploie : « at-save dirty · ● modification en cours — pas encore au hub » | ajouterBloc, apresTrame, brancherAtelier, brancherDeclare (+22) |
| `menuA` | m, x, y, items | 502 o | (sans commentaire) affiche/emploie : «  : `<button class= ·  data-a= » | brancherMenus, menuAtelierDiapo, menuAtelierMur, menuDiapo (+3) |
| `menuAtelierDiapo` | i, x, y | 3410 o | (sans commentaire) affiche/emploie : « Cahier de textes (fin d\ · } · H${h}`;   let noteDesc =  » | brancherMenus |
| `menuAtelierMur` | ev | 7788 o | (sans commentaire) affiche/emploie : « #mur .p8-dessin g.p8-n, #mur .p8-dessin .p8-grille tr ·  ? +li.dataset.p.split( » | brancherMenus |
| `menuDiapo` | i, x, y | 2239 o | (sans commentaire) affiche/emploie : «  diapos · 1 diapo » | brancherMenus |
| `miniatures` | v | 1733 o | (sans commentaire) affiche/emploie : « ;     const pgI = m.dataset.pg != null && m.dataset.pg !==  · :scope > .mur » | volet |
| `miseEnFormeLegere` | t | 430 o | (sans commentaire) affiche/emploie : «  + p : p)).replace(/([«])\s*/g,  · ).replace(/\s{2,}/g,  » | validerOral |
| `montrerSuite` | — | 802 o | (sans commentaire) affiche/emploie : «  ·· su.genre ===  · ) return; const E = seance().ecrans; if (su.genre ===  » | — |
| `morph` | a, b | 1353 o | (sans commentaire) affiche/emploie : «  && a.classList.contains( · )) a.setAttribute( » — ECRIT au hub | poserHtml |
| `moveChapter` | level,chnum,dir | 598 o | (sans commentaire ni indice) | renderChapterCard |
| `moveImageInGallery` | level,chnum,snum,itemId,imgId,dir | 744 o | (sans commentaire ni indice) | renderItem |
| `moveItem` | level,chnum,snum,itemId,dir | 719 o | (sans commentaire ni indice) | renderItem |
| `moveSeance` | level,chnum,snum,dir | 699 o | (sans commentaire ni indice) | renderSeance |
| `narrativiser` | t | 961 o | (E4 · relecteur 1) « et enfin » seulement à la dernière étape (n donné) | recitEtape |
| `nettoyer` | t | 192 o | (sans commentaire) affiche/emploie : « ).replace(/([.!?])\s*\./g,  · ).replace(/\s+([,.])/g,  » | recitHtml0 |
| `notifyConnection` | eleve | 337 o | (sans commentaire) affiche/emploie : « Connexion prof (M. Meney) · Connexion :  » | _loginEleveFound, loginAsProf |
| `notionsTravaillees` | — | 751 o | les diapos d'une activité, par identifiant (a0) | chapitreHtml, ouvrirOral, remobNonTravaillees |
| `nouvelleActivite` | titre | 550 o | (p5) la carte « Ce que la diapo déclare » qui s'écrit | brancherDeclare |
| `now` | — | 22 o | (sans commentaire ni indice) | _applyLinkEcrire, _b2DoSave, _blocBrevet, _corbeillePut (+167) |
| `objetDec` | cle | 627 o | (sans commentaire) affiche/emploie : « Activité  ·  + contenuEntier(E[i])).join( » | dr_travailHeure, ouvrirFin, ouvrirReserve, recitHtml0 (+2) |
| `onInteraction_` | e | 282 o | (sans commentaire) ECRIT au hub | — |
| `onScroll_` | — | 316 o | (sans commentaire ni indice) | startTracking_ |
| `onVisibilityChange_` | — | 192 o | (sans commentaire ni indice) | — |
| `openAdminTool` | tool | 695 o | (sans commentaire) touche #admin-tools-menu | — |
| `openAnalyse` | — | 55 o | (sans commentaire) affiche/emploie : « Analyse logique » | gotoAnalyse |
| `openAtelierItem` | ref,titre,ctxVue | 3890 o | L'OUVERTURE d'un item lié à un document de l'atelier (patron du diaporama). Le rendu est CELUI de l'atelier (atelierPageHTML) : | _openAtelierFromList, openItem |
| `openBB4E` | — | 94 o | (sans commentaire) affiche/emploie : « Brevet Blanc 4e \u2014 R\u00e9\u00e9criture » | showReecritureList |
| `openCreateClassModal` | — | 398 o | (sans commentaire) affiche/emploie : « ;   document.getElementById( · ;   document.getElementById( » — touche #class-modal, #class-modal-annee, #class-modal-niveau | _profSectionClasses, eliModaleClasse |
| `openDicteeById` | id | 90 o | (sans commentaire) affiche/emploie : « Dictée coévaluée » | _openDicteeFromList, openItem |
| `openDoc` | chapitre,docName,typeDoc,url | 435 o | M8-IDENTITÉ (I2) | — |
| `openEvalConn` | — | 83 o | (sans commentaire) affiche/emploie : « \u00c9valuation des connaissances » | gotoEvalConn |
| `openGalleryViewer` | item | 1531 o | (sans commentaire) affiche/emploie : « Galerie vide. · );   overlay.id= » — touche #gallery-viewer-overlay | openItem |
| `openItem` | level,chnum,snum,itemId | 2888 o | (sans commentaire) affiche/emploie : « );return;}   if(item.kind=== · analyse logique n » | dr_recitOuvrirItem, renderItem, renderZoneAutonomie |
| `openLevel` | code,label,color | 1359 o | (sans commentaire) touche #bnav-level, #dictee-link, #hero-timer | _profSectionArchi, atVoirPanneau |
| `openLinkModal` | level,chnum,snum,itemId | 2625 o | (sans commentaire) affiche/emploie : « Lier :  · );   document.getElementById( » — touche #link-modal, #link-modal-, #link-modal-current | atEditerChapitreRendre, ed2Papier, linkItem |
| `openMesDictees` | — | 84 o | porte de l'outil, patron openMesDictees | showDicteeList |
| `openMesReecritures` | — | 61 o | (sans commentaire) affiche/emploie : « Mes réécritures » | showReecritureList |
| `openProfPanel` | — | 244 o | (sans commentaire) touche #tprof-overlay | atelierFermer |
| `openReecriture` | id,title | 98 o | M8-IDENTITÉ (I2) : le site navigue dans le CONTENU — les corrections nominatives s'atteignent par l'identité, dans l'app | _openReecritureFromList, openItem |
| `openViewer` | title,url | 1672 o | [LOT7-①] associateBigFile retirée (code mort, ancien script) — voir rapport. | _openAnalyseFromList, _openAtelierFromList, _openQcmFromList, dr_recitOuvrirItem (+10) |
| `ordDe` | o,repli | 124 o | (sans commentaire ni indice) | _cheminDriveLisible, atAdresseLisible, atEditerChapitreRendre, atIAInjecterAvecDestination (+8) |
| `ordNormaliserNiveau` | level,cb | 619 o | ④ la normalisation SILENCIEUSE d'un niveau : chapitres, puis séances de chaque chapitre, puis items de chaque séance. Aucun bouton (décision de Paul), aucun message : | loadPublished |
| `ordPaires` | coll | 400 o | les paires {k:clé RÉELLE, o:objet} triées par ORDRE ; à égalité (données abîmées), la clé départage — l'affichage reste stable, jamais aléatoire. | atSeances, ctxEntreesSeance, ed2Documents, edDeplacerItem (+9) |
| `ordResserrer` | coll,basePath,cb | 373 o | ③ le resserrement : 1, 2, 3… sans trou, dans l'ordre OÙ LES CHOSES SONT DÉJÀ. Écritures FINES (un chemin par `ordre`), jamais de nœud entier ; idempotent : | deleteItem, deleteSeance, edDeplacerVersSeanceFaire, edInsererSeanceAvant (+1) |
| `ordSuivant` | coll | 100 o | (sans commentaire ni indice) | addChapter, addSeance, chCalculerEcritures, chInjecterConfirme (+2) |
| `ordreHeure` | h | 195 o | (sans commentaire) affiche/emploie : « ordre d » | activitesDeLHeure, aller, allerAuCahier, allerSuivante (+26) |
| `ordreHeureCalc` | h | 168 o | (sans commentaire) affiche/emploie : « ); return o0.filter(i => E[i].role !==  » | dr_lancerClic, dr_ordreOuverture, ordreHeure |
| `ordreHeureCalc0` | h | 1062 o | (a) le rôle fin est toujours en dernier | ordreHeureCalc |
| `ouOnEnEst` | — | 3041 o | (sans commentaire) affiche/emploie : « heure dépasse de ${debord} min` :  ·  faite » | dr_tout, tick |
| `ouTexte` | di | 269 o | (sans commentaire) affiche/emploie : « ; const q = e.blocs.find(b => b.t ===  · ).trim(); return e.act +  » | histoire, partAjoute |
| `ouvrirARegler` | — | 2018 o | (sans commentaire) affiche/emploie : « ); z.className =  ·  chose » | — |
| `ouvrirComm` | eid | 270 o | commentaires (par classe, sur la diapo) | menuDiapo |
| `ouvrirConsoleM8` | — | 197 o | (sans commentaire) affiche/emploie : « ;   if(el.style.display ===  » — touche #m8-console | — |
| `ouvrirDocs` | — | 917 o | maquette p8-5g, lignes 1435-1448 | dr_docsPanneau |
| `ouvrirFiche` | bi | 323 o | (sans commentaire ni indice) | — |
| `ouvrirFin` | cloture | 21635 o | (sans commentaire) affiche/emploie : « ).parentElement === document.getElementById( · ) && document.getElementById( » — touche #ecran-fin, #fin | brancherFin, dr_clorePoser, dr_montrerCahier, dr_reprendre (+6) |
| `ouvrirNotion` | eid | 311 o | (sans commentaire) affiche/emploie : « ); f.style.left =  · ; f.style.top =  » | menuDiapo |
| `ouvrirOral` | prerempli | 6784 o | (sans commentaire) affiche/emploie : « Cet oral : ·  name= » | ouOnEnEst |
| `ouvrirOuverture` | — | 5654 o | (sans commentaire) affiche/emploie : « ).parentElement !== $( · ouverture annonce l » | brancherFaisceau, dr_lancerNeuf, dr_reactRetour |
| `ouvrirOverlayRegles` | ts | 1974 o | (sans commentaire) affiche/emploie : « appel. */   if(!document.body.classList.contains( · )) return;   if(document.getElementById( » — touche #m8-regles-overlay | _blocRegles, verifierAlerteRegles |
| `ouvrirPalette` | — | 4386 o | (sans commentaire) affiche/emploie : « <div class= · ><input id= » | — |
| `ouvrirPart` | ini | 3067 o | (sans commentaire) affiche/emploie : « élève de l · )) DR_CL.vifMotif = null; partEleve = ini; const p = $( » | corrigePart, participation |
| `ouvrirReserve` | — | 1287 o | (sans commentaire) affiche/emploie : « ); f.style.left =  · ; f.style.top =  » | — |
| `pad` | n | 30 o | (sans commentaire ni indice) | _renderIntentTimer, updateTimers |
| `pageDeSuivi` | et, els, pages | 1233 o | (sans commentaire ni indice) | paginer |
| `pageMain` | d | 179 o | (p8-5h, 2) la vignette d'une page va à cette page | — |
| `pagePrecedente` | — | 315 o | (sans commentaire ni indice) | revoiler |
| `paginer` | mur, et | 2766 o | (sans commentaire) affiche/emploie : « ); if (!corps) { if (page) page.textContent =  · ).forEach(l => l.classList.remove( » | rendre |
| `palier0` | k | 653 o | (sans commentaire) affiche/emploie : « ouvre par l · écrit en tête de la séquence ; la barre du bas ne s » — touche #f-clore | dr_palier |
| `papierHtml` | h | 2232 o | (sans commentaire) affiche/emploie : « h2, p.sous, .ed-suite-t, button, .rv, .dr-pour-paul · .dr-recit-tete p.cadre » | dr_papierPreparer, relecture |
| `parseEleves` | txt | 112 o | clé-élève canonique : fournie par le socle MJPC-CORE | _importEleves |
| `partAjoute` | ini, type, note | 423 o | (sans commentaire ni indice) | ouvrirPalette, posePart |
| `partRetire` | ini, id | 209 o | (sans commentaire ni indice) | corrigePart, ouvrirPalette, ouvrirPart, vifDernier |
| `participation` | — | 1877 o | (sans commentaire) affiche/emploie : «  + (o.genre ===  ·  + o.texte.slice(0, 50) +  » | annulerDerniere, brancherMenus, corrigePart, dr_tout (+2) |
| `participeDe` | v | 192 o | (sans commentaire ni indice) | eleveDitJe, recit, recitEtape |
| `passeHtml` | fin, h | 7604 o | (sans commentaire) affiche/emploie : «  && !(x.type ===  ·  && /^rep/.test(String(x.m)) && JH.some(y => y.type ===  » | relecture |
| `passerEnHeure` | h | 918 o | (sans commentaire) affiche/emploie : «  ne change pas d\ · Diapo passée en H » | brancherDeclare |
| `pasteIntoItem` | level,chnum,snum,itemId | 88 o | Paste depuis presse-papier (image capturée) | renderItem |
| `pasteIntoSeance` | level,chnum,snum | 77 o | (sans commentaire ni indice) | renderSeance |
| `peindreComm` | — | 335 o | (sans commentaire) affiche/emploie : « ><div class= · >${new Date(c.t).toLocaleDateString( » | ouvrirComm |
| `peindreNotes` | — | 869 o | (sans commentaire) affiche/emploie : « ligne ${n.versee ?  · ><span class= » | annulerDerniere, basculerNotes |
| `peindreNotion` | q | 1455 o | (sans commentaire) affiche/emploie : « ).toLowerCase().includes(q) ·· (n.eleve ··  · ).toLowerCase().includes(q) ·· (f.prof ··  » | ouvrirNotion |
| `personne` | t | 88 o | (E4 · relecteur neuf du site) « devant vous » → « devant on » : après une préposition, « vous » est la classe, « nous » | dr_seCite, eleveDitJe, eliApercuHtml, recit (+1) |
| `posePart` | type | 139 o | (sans commentaire ni indice) | ouvrirPart |
| `poserBarreBloc` | conteneur, b | 1844 o | (sans commentaire) affiche/emploie : « ); mur.querySelectorAll( · ); barre.className =  » | brancherAtelier, p85fSuivreFrappe |
| `poserColonnes` | — | 253 o | (sans commentaire) affiche/emploie : « ); c.style.setProperty( · , (S.sansGauche ? 0 : S.lg) +  » | dr_tirer, ouvrirFin, revenirAuCours |
| `poserHtml` | el, h | 380 o | (sans commentaire ni indice) | dr_ouvertureLegere, ouOnEnEst, ouvrirFin, ouvrirOuverture (+8) |
| `poserVersion` | h, html | 240 o | (sans commentaire ni indice) | basculerRecit, brancherFin, recitHtml0, reprendreSuite |
| `pousser` | et | 3623 o | (sans commentaire) affiche/emploie : « atelier ne pousse rien au tableau, n · écran en clair pour l » | brancherFin, dr_heuresDeLaClasse, dr_minuteurPousser, dr_tout (+3) |
| `prenom` | ...a | 27 o | (sans commentaire ni indice) | — |
| `preparerCahier` | — | 860 o | (sans commentaire) affiche/emploie : « ); if (i == null) return; /* E1 (§12.29-3, S3) : l · ); S.gel = etatComplet(); document.body.classList.add( » | — |
| `presents` | ...a | 29 o | (sans commentaire ni indice) | — |
| `previewImage` | driveId | 821 o | ============ Pilotage des images d'une galerie (mode admin) ============ | renderItem |
| `proposerRemob` | — | 608 o | (sans commentaire) affiche/emploie : « Remobilise, proposition par défaut :  » | — |
| `publierManifeste` | db | 295 o | 8. Manifeste (vue projetée, ADDITIVE) Les constantes en dur dans l'app restent la source de vérité ; le manifeste n'est qu'une photographie publiée pour MJPC. Incapable de diverger : | — |
| `publierManifesteREST` | — | 420 o | (sans commentaire) ECRIT au hub | loginAsProf |
| `publishBB4E` | — | 34 o | (sans commentaire ni indice) | showReecritureList |
| `quiAParticipe` | — | 406 o | (sans commentaire ni indice) | basculerQui, dr_tabVeiller, dr_versMur |
| `recit` | t | 1853 o | (sans commentaire) affiche/emploie : « ); d.innerHTML=String(t·· · );   var s=d.textContent.trim(); if(!s)return  » | dr_corrigerReponse, recitEtape, recitHtml0 |
| `recitEtape` | t | 745 o | (sans commentaire) affiche/emploie : « ).replace(/\s+\./g,  » | recitHtml0 |
| `recitHtml` | fin, h, bornes | 1128 o | (sans commentaire) affiche/emploie : « .recit >  · entête, le cadre de l » | ouvrirFin, papierHtml, recitHtml0, recitPourED (+2) |
| `recitHtml0` | fin, h, bornes | 25257 o | (sans commentaire) affiche/emploie : « on a fait aujourd · >${[dr_recitClasseNom(), dr_recitChapitre() +  » | papierHtml, recitHtml, recitPourED0, suiteDepuis |
| `recitPourED` | h | 449 o | (sans commentaire) affiche/emploie : « :scope > p · ) && !x.classList.contains( » | ouvrirFin |
| `recitPourED0` | h | 471 o | (sans commentaire) affiche/emploie : « :scope > p · ) && !x.classList.contains( » | basculerRecit |
| `recitSeanceHtml` | — | 4596 o | (sans commentaire) affiche/emploie : « ); d.innerHTML = brut; const rec = d.querySelector( · ); const moi = rec && rec.classList.contains( » | relecture |
| `reindexer` | — | 863 o | (sans commentaire ni indice) | apresTrame, brancherDeclare, dr_annuler, dr_appliquerHeures (+11) |
| `reinitialiserBrevetDates` | — | 316 o | Réversible par nature : on efface la surcharge, le défaut du code revient. | _blocBrevet |
| `relecture` | — | 4586 o | (sans commentaire) affiche/emploie : « ; hs.forEach(h => { f += `<button class= ·  && S.faceH === h ?  » | basculerRecit, brancherSelecteur, dr_corrigerReponse, dr_edtRelire (+5) |
| `remobNonTravaillees` | h | 823 o | (sans commentaire) affiche/emploie : « en réserve · non faite » | brancherFaisceau, chapitreHtml, faisceauHtml, ouvrirOral |
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
| `rendre` | mur, et | 20474 o | (sans commentaire) affiche/emploie : « ) fsB[bi] = (fsB[bi] ·· 1) * 0.85; if (b.taille ===  · Activité  » | apercuOuvrir, atDrJouer, dr_reactApercuRendre, dr_reactivationPreparer (+7) |
| `rendreDroiteAtelier` | — | 556 o | (sans commentaire) affiche/emploie : « #at-aide .x » | dr_tout |
| `renumeroter` | — | 352 o | (sans commentaire ni indice) | — |
| `renvoyerVersMJPC` | motif | 270 o | (sans commentaire) affiche/emploie : «          +(motif? · );   if(typeof window!== » | — |
| `reprendreSuite` | h | 291 o | (sans commentaire) touche #ecran-relecture | brancherFin, recitHtml0 |
| `reprisesPrevuesHtml` | — | 464 o | (sans commentaire) affiche/emploie : « Reprise à l · ouverture de l » | ouOnEnEst |
| `repsJ` | h, di, bi | 177 o | (sans commentaire ni indice) | recitHtml0, recitSeanceHtml |
| `resetChapitres` | level | 487 o | (sans commentaire) affiche/emploie : « Effacer TOUS les chapitres  · ,     function(){   mjpcDeleteJson(FIREBASE_BASE+ » | renderChapitres |
| `resolveEleves` | roster, saisies | 1138 o | 7. Identification nominative : le portail commun (logique) Toute identification produit des élèves SINGULIERS (clé canonique), que le travail soit individuel ou en groupe. | — |
| `restoreSession` | — | 589 o | (sans commentaire) touche #proto-badge | — |
| `revenirAuCours` | — | 551 o | (sans commentaire) affiche/emploie : « ).style.display =  » | dr_montrerCahier |
| `revoiler` | — | 665 o | (sans commentaire) affiche/emploie : « revenir à la  » | — |
| `sanMJPC` | s | 144 o | l'app reconnaît l'élève ou le prof déjà connecté au site MJPC et saute son écran de connexion. Sans session : portail natif inchangé. Bloc versionné, IDENTIQUE dans chaque app. | _eleveFootprint, atCodeDe, edtSlugEleve, elfChargerFleches (+7) |
| `sanitizeChapitres` | chapitres | 982 o | (sans commentaire ni indice) | atChargerChapitres, loadPublished |
| `saveIntent` | id,label,levelClicked | 520 o | (sans commentaire) affiche/emploie : « ,{       method: » — ECRIT au hub | showIntentSurvey |
| `sceDupliquer` | j | 1266 o | [LOT6-②] CRÉÉ — le fondamental « Dupliquer » généralisé aux séances (il existait pour les feuilles et les chapitres). | ctxEntreesSeance |
| `sendToBackend` | data | 452 o | (sans commentaire ni indice) | trackClose, trackOpen |
| `sequenceHtml` | h, cloture, restantes | 8767 o | (sans commentaire) affiche/emploie : « );   const echLabel = tmp.querySelector( · ) ? tmp.querySelector( » | ouvrirFin |
| `setAdminLens` | sg | 60 o | (sans commentaire ni indice) | _renderLensBar |
| `showAccueilBg` | — | 350 o | (sans commentaire) touche #bg-accueil, #bg-level, #horizon-accueil | goHome, initHome |
| `showDicteeList` | dictees,level | 1513 o | (sans commentaire) affiche/emploie : « ;var btn=document.getElementById( · );var html= » — touche #tab-btn-dictee, #tab-dictee | gotoDictee |
| `showEmptyTab` | tabId,label | 551 o | (sans commentaire) affiche/emploie : « ;var btn=document.getElementById( · padding:40px 20px;text-align:center » — touche #tab-, #tab-btn- | gotoEtude, gotoImage, gotoRedaction |
| `showIntentSurvey` | levelCode,levelLabel | 1303 o | (sans commentaire) affiche/emploie : « ;   var overlay=document.getElementById( · );   overlay.setAttribute( » — touche #intent-buttons, #intent-overlay, #intent-timer-name | openLevel |
| `showLevelBlockedDialog` | code | 1640 o | (sans commentaire) affiche/emploie : « );   overlay.id= · ;   overlay.style.cssText= » — touche #lbd-close, #level-blocked-overlay | openLevel |
| `showProfSection` | id | 629 o | (sans commentaire) touche #tprof-content | _deleteEleveCls, _doImport, _editerTexteSeanceSansDoc, _exportHub (+29) |
| `showReecritureList` | ree,level | 3436 o | (sans commentaire) affiche/emploie : « ;var btn=document.getElementById( · );var html= » — touche #tab-btn-reecriture, #tab-reecriture | gotoReecriture |
| `showUploadToast` | msg,kind | 303 o | (sans commentaire) affiche/emploie : « ;   if(kind=== » — touche #mjpc-upload-toast | _createGalleryItemWithFirstImage, _pasteCommon, _routeFileToTarget, addImageToGallery (+3) |
| `simulerJ29` | — | 142 o | Accélérateur de test : pose une date ancienne et déclenche l'overlay tout de suite. Réversible d'un clic (le bouton de levée réarme le compteur). | _blocRegles |
| `sortieEcran` | mur | 288 o | (sans commentaire) affiche/emploie : « .corpsd, .img, .video, .doc » | — |
| `startHeartbeat` | — | 498 o | (sans commentaire ni indice) | _loginEleveFound, loginAsProf, restoreSession |
| `startTracking_` | — | 422 o | (sans commentaire ni indice) | trackOpen |
| `stopTracking_` | — | 322 o | (sans commentaire ni indice) | trackClose |
| `submitCreateClass` | — | 1724 o | (sans commentaire) affiche/emploie : « ){   /* [ELEVE-1 ②] la classe existe : on n · L\u2019ann\u00e9e est obligatoire. » — touche #class-modal-annee, #class-modal-niveau, #class-modal-nom — ECRIT au hub | — |
| `suiteDepuis` | h | 744 o | (sans commentaire) affiche/emploie : « ); d.innerHTML = html; const r = d.querySelector( · ); const ps = r ? Array.from(r.querySelectorAll( » | recitHtml0, reprendreSuite, suiteHtml |
| `suiteHtml` | h | 253 o | (sans commentaire) affiche/emploie : « )} (tu la reprendras dans ta version) :</div>${su}</div>` :  » | recitHtml, recitPourED |
| `suitePourLaClasse` | — | 691 o | (sans commentaire) affiche/emploie : « la suite sur leur diapo ·  }; if (E[suiv].role ===  » | ligneSuite, montrerSuite |
| `supprimerAnnonce` | id | 447 o | Geste destructeur → neutralisé : confirmation qui CITE le texte supprimé. | _blocAnnonces |
| `supprimerBloc` | bi | 569 o | (sans commentaire) affiche/emploie : « Une diapo garde au moins un bloc. · Des réponses d\ » | menuAtelierMur, poserBarreBloc |
| `supprimerDiapo` | i | 492 o | (sans commentaire) affiche/emploie : «  ne se supprime pas. ·  && x.eid === e.eid); dr_confirmer( » | menuAtelierDiapo |
| `surligne` | htmlTexte, p, et | 1217 o | (sans commentaire) affiche/emploie : « background:${COULEURS[x.couleur] ··  ·  data-coul= » | rendre |
| `surligner` | couleur | 1126 o | repris de l'ancien, moteur L412 | p8Former |
| `switchTab` | btn,tab | 581 o | (sans commentaire) affiche/emploie : « );hideAllTabs();   if(tab=== · &&typeof gotoFiches=== » — touche #tab- | applyPublished |
| `t5` | — | 20 o | (sans commentaire ni indice) | — |
| `tabLibelle` | tabId | 164 o | (sans commentaire ni indice) | — |
| `tabLibellePoser` | tabId,valeur | 357 o | (sans commentaire) affiche/emploie : « ).trim();   _sitePut( · +tabId,v··null,function(ok){     if(!ok){alert( » — hub /site/libelles/onglets/ | _profSectionArchi |
| `tabLibellesAppliquer` | — | 274 o | les boutons d'onglets portent le libellé courant (le texte seul — l'icône reste) | tabLibellePoser |
| `tabLibellesCharger` | cb | 277 o | (sans commentaire) hub /site/libelles/onglets | — |
| `taxoBasculer` | idNotion | 856 o | (sans commentaire) affiche/emploie : « D\u00e9sactiver la notion · D\u00e9sactiver \u00ab <b> » | _taxoLigneNotion |
| `taxoCharger` | cb | 149 o | Lecture : toujours l'état FRAIS. En mode test, le magasin s'amorce une fois par une lecture PURE du hub (GET, aucune écriture) : on édite alors une COPIE réelle qui s'évapore en sortant du mode test. | _taxoGesteBasculer, _taxoGesteCreer, _taxoGesteEditer, taxoBasculer (+1) |
| `taxoCreerAnnuler` | — | 42 o | (sans commentaire ni indice) | _taxoFormCreation |
| `taxoCreerEnregistrer` | idFam | 260 o | (sans commentaire ni indice) | _taxoFormCreation |
| `taxoCreerOuvrir` | idFam | 101 o | (sans commentaire ni indice) | _taxoLigneFamille |
| `taxoEditerAnnuler` | — | 38 o | (sans commentaire ni indice) | _taxoFormEdition |
| `taxoEditerEnregistrer` | idNotion | 260 o | (sans commentaire ni indice) | _taxoFormEdition |
| `taxoEditerOuvrir` | idNotion | 115 o | (sans commentaire ni indice) | _taxoLigneNotion |
| `taxoHtml` | set | 1136 o | (sans commentaire) affiche/emploie : « ><label><input type= ·  data-grp= » | ouvrirFin |
| `taxoOuvrirEditeur` | — | 131 o | (sans commentaire ni indice) | _blocTaxonomie |
| `taxoRafraichir` | force | 371 o | (sans commentaire) affiche/emploie : « <p class= · >Chargement du référentiel\u2026</p> » — touche #m8tx-editeur | _blocTaxonomie, taxoBasculer, taxoCreerEnregistrer, taxoEditerEnregistrer (+1) |
| `taxoRender` | — | 135 o | (sans commentaire) touche #m8tx-editeur | taxoCreerAnnuler, taxoCreerOuvrir, taxoEditerAnnuler, taxoRafraichir (+2) |
| `taxoToggleDom` | idDom | 98 o | (sans commentaire ni indice) | _taxoLigneDomaine |
| `taxoToggleFam` | idFam | 98 o | (sans commentaire ni indice) | _taxoLigneFamille |
| `temoin` | — | 65 o | (sans commentaire) affiche/emploie : « ❄ tableau gelé » | dr_tout |
| `tempsActivite` | a | 447 o | (c) la durée d'une activité pour cette heure : la trame, ou ce que Paul a changé (la copie de classe) | etatWorktrack, ouvrirOral, troisTemps |
| `tempsActiviteH` | a, h | 398 o | (E4 · relecteur continu B3) x.mur seulement pour un journal sans aucun lancement : une diapo montrée avant de lancer faisait une « heure 1 » fantôme | chapitreHtml |
| `tempsActiviteSec` | a | 354 o | (sans commentaire ni indice) | dr_avanceActivites, etatWorktrack |
| `tempsDe` | ms, h | 136 o | (sans commentaire ni indice) | troisTemps |
| `texteTravail` | — | 1525 o | (sans commentaire) affiche/emploie : « Apprendre :  · Pour la prochaine séance » | controleCahier, ouvrirFin, recitHtml0, sequenceHtml (+1) |
| `texteTravailED` | — | 106 o | (sans commentaire ni indice) | brancherChapitre, chapitreHtml, dr_paquetHeure, edTexte (+1) |
| `tick` | — | 2327 o | 6.3 : le repère de la fin d'heure = la fin moins les cinq minutes réservées au cahier de textes | ouvrirOral |
| `toast` | msg | 501 o | (p3) l'atelier : les gestes sur la trame, tous par identité | brancherAtelier, couperDiapoIci, deplacerDiapo, devoiler (+17) |
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
| `tout` | — | 21 o | (sans commentaire ni indice) | _profSectionEleves, deleteSeance, dr_reprendre, dr_selMenu |
| `trackClose` | — | 368 o | (sans commentaire ni indice) | closeViewer, goHome, trackOpen |
| `trackLogin` | nom,prenom,niveau | 471 o | (sans commentaire) affiche/emploie : « Erreur réseau. Réessaie. » | — |
| `trackOpen` | chapitre,doc,type_doc | 440 o | (sans commentaire ni indice) | openDoc |
| `trackScore` | s | 24 o | (sans commentaire ni indice) | — |
| `triggerHeartbeat` | el | 147 o | (sans commentaire ni indice) | updateTimers |
| `troisTemps` | html, h, fin, depuis | 6920 o | (sans commentaire) affiche/emploie : « y rattachent */   const d = document.createElement( · ); d.innerHTML = html; const rec = d.querySelector( » | papierHtml, recitHtml, recitPourED0, suiteDepuis |
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
| `validerOral` | — | 2092 o | (sans commentaire) affiche/emploie : « #oral input[name= · #oral input[data-n]:checked » | — |
| `verifierAlerteRegles` | — | 382 o | (sans commentaire) hub /site/config/dernierControleRegles | _atterrirProf, loginAsProf, ouvrirOverlayRegles, simulerJ29 |
| `versionsDe` | h | 132 o | (sans commentaire ni indice) | brancherFin, poserVersion, recitHtml0 |
| `videoAtteignable` | — | 103 o | (sans commentaire ni indice) | alerteVideo, ouvrirOuverture, videoSuivant |
| `videoHtml` | b, et | 587 o | (sans commentaire) affiche/emploie : « ><div class= · }${et.videoLecture ?  » | rendre |
| `videoPrecedent` | — | 222 o | (sans commentaire ni indice) | revoiler |
| `videoSuivant` | — | 357 o | (sans commentaire ni indice) | devoiler |
| `vifDernier` | ini, id | 554 o | (sans commentaire) affiche/emploie : « posé : <b> · </b> <span id= » | partAjoute |
| `voir` | v | 1550 o | relecture : le récit, et ce qui s'est passé | arreterRepetition, dr_imageAdresse, dr_lancerClic, dr_lancerNeuf (+8) |
| `volet` | — | 2601 o | (sans commentaire) affiche/emploie : « vig ${cour ?  · } ${vuMax[k] ?  » | dr_tout |
| `voletAtelier` | — | 1915 o | (sans commentaire) affiche/emploie : « ; }; let h = `<div class= · ><div class= » | dr_tout |
| `vuJ` | h, di | 216 o | (sans commentaire ni indice) | dejaVuAvant, ouvrirOral, passeHtml, recitHtml0 (+2) |
| `vueDroite` | et | 2324 o | (sans commentaire) affiche/emploie : « ; let inner = boite.querySelector( · ); if (!inner) { inner = document.createElement( » | brancherFin, dr_tout |


## DIVERS — utilitaires internes

| fonction | args | taille | ce qu'elle fait | appelée par |
|---|---|---|---|---|
| `_activerProfilTest` | slug | 1196 o | (sans commentaire) affiche/emploie : « \u00c9l\u00e8ve test · \ud83d\udc41 TEST » — touche #page-home, #page-validation, #proto-badge | _profSectionProfilTest |
| `_allCodesTaken` | — | 614 o | M-SÉCU-3 : les codes pris se lisent en DÉCHIFFRANT (la clé est déjà exigée pour générer). | _resetAllCodesClasse |
| `_analyzeNode` | key,v | 1374 o | (sans commentaire) affiche/emploie : « formes multiples ( · +arr.map(function(f){return f.form+ » | _buildDiagnostic |
| `_anneeScolaire` | — | 89 o | ===== CORBEILLE — 2e ceinture d'archive, dans le hub (Phase 2, lot 1) ===== Doctrine : AUCUNE destruction sans archive. 1re ceinture = fichier local (flux _b2Save, déjà obligatoire) ; | _b2DoSave, _corbeillePut, _purgeDryRun, atSupprimerDoc (+2) |
| `_annoncesTriees` | o | 153 o | (sans commentaire ni indice) | _blocAnnonces |
| `_apercuOngletVide` | level,tabId | 1610 o | PUBLIER UN ONGLET VIDE : PRÉVENU, PAS BLOQUÉ (Paul, 31/07) Constat de Paul à sa recette : un onglet publié sans travaux envoie l'élève sur un écran vide, et rien ne l'en avertit au moment où il publie. | togglePublishTab |
| `_applyLinkEcrire` | ctx,item,newSource,newRef,newKind,tracer | 1482 o | (sans commentaire) affiche/emploie : « });   }   var anc=tracer?{source:item.source·· · trace du remplac\u00e9 » — ECRIT au hub | applyLinkChanges |
| `_applyPubCascade` | level,chnum,snum,itemId,slug,nv | 3119 o | (sans commentaire) affiche/emploie : « +p});});  mjpcLot(lot,(nv? » — ECRIT au hub | _togglePubNiveau, togglePublishChapterCls, togglePublishItemCls, togglePublishSeanceCls |
| `_atterrirProf` | — | 569 o | (sans commentaire) affiche/emploie : « ].forEach(function(lvl){var card=document.querySelector( » — touche #page-home, #page-validation | — |
| `_b2BuildExtract` | list,sansPrive | 742 o | (sans commentaire ni indice) | _b2DoSave, _b2Exec |
| `_b2Check` | — | 1512 o | (sans commentaire) affiche/emploie : « ;}),hasTr=fp.some(function(x){return x.fam=== · ;});     var tags=(hasNc? » | _b2RenderPick, _b2Save |
| `_b2ClassRebuild` | node,removeSet | 429 o | (sans commentaire ni indice) | _b2ExecReel |
| `_b2Confirm` | savedName | 1214 o | (sans commentaire) affiche/emploie : « <div class= · >✓ Enregistré :  » — touche #b2cf, #b2cferr | _b2DoSave |
| `_b2DoSave` | — | 996 o | (sans commentaire) affiche/emploie : « );   }else{obj=_b2.hub;name=_tsName( · Enregistrement annulé » | _b2Save |
| `_b2Eleves` | slug | 67 o | (sans commentaire ni indice) | _b2RenderPick |
| `_b2Exec` | — | 197 o | (sans commentaire ni indice) | _b2Confirm |
| `_b2ExecReel` | list,_cheminCorbeille | 2364 o | (sans commentaire) affiche/emploie : « <div class= · >Effacement en cours sur  » | _b2Exec |
| `_b2GetPath` | root,path | 113 o | (sans commentaire ni indice) | _b2BuildExtract, _b2ExecReel, _purgeExpand, _purgePlan (+2) |
| `_b2Label` | node | 568 o | (sans commentaire) affiche/emploie : « Codes élèves · Corrections de dictées » | _b2Check |
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
| `_blocBrevet` | — | 1164 o | (sans commentaire) affiche/emploie : « <div class= · ><div class= » | renderConsoleM8 |
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
| `_corbeillePuis` | motif,extract,meta,suite | 682 o | Corbeille puis destruction : si la corbeille échoue, l'utilisateur tranche explicitement (le fichier local, lui, est déjà enregistré quand ce chemin est atteint). | _b2Exec, _deleteEleveCls, _orphDelete, _purgeSauvegarde (+2) |
| `_corbeillePut` | motif,extract,meta | 504 o | (sans commentaire) affiche/emploie : « },meta··{}),data:extract··{}};   return _fbPutPath( · +cle,payload).then(function(){return  » | _corbeillePuis |
| `_corbeilleRestaure` | chemin,valeur,cb | 178 o | M12 · CORBEILLE — canal de restauration UNIQUE, respecte le mode test M8 | _corbRestaurerExec |
| `_cpArchive` | fiches | 132 o | (sans commentaire ni indice) | secuCpAjouter, secuCpRemplacer, secuCpRetirer |
| `_cpConcordance` | code | 352 o | relit le nœud et confirme qu'une fiche relue concorde avec le code saisi | secuCpAjouter, secuCpRemplacer |
| `_cpDate` | ts | 162 o | (sans commentaire) affiche/emploie : « pos\u00e9 avant ce jour · );}catch(e){return  » | secuCpRafraichir |
| `_cpDouble` | — | 326 o | (sans commentaire) affiche/emploie : « ;   var b=(document.getElementById( · ;   if(!a){_cpMsg( » — touche #cp-c1, #cp-c2 | secuCpAjouter, secuCpRemplacer |
| `_cpFiche` | code | 142 o | (sans commentaire ni indice) | secuCpAjouter, secuCpRemplacer |
| `_cpLireFiches` | — | 81 o | (sans commentaire ni indice) | _cpConcordance, secuCpAjouter, secuCpRafraichir, secuCpRemplacer (+1) |
| `_cpMsg` | t,ok | 106 o | (sans commentaire) touche #cp-msg | _cpDouble, secuCpAjouter, secuCpRemplacer, secuCpRetirer |
| `_createGalleryItemWithFirstImage` | file,level,chnum,snum | 1255 o | (sans commentaire) affiche/emploie : « \u23f3 Cr\u00e9ation galerie\u2026 · );   var itemId= » — ECRIT au hub | uploadFileForNewItem |
| `_deleteEleveCls` | slug,i | 1683 o | (sans commentaire) affiche/emploie : « Retirer un \u00e9l\u00e8ve · Retirer <b> » — ECRIT au hub | _profSectionEleves |
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
| `_eleveFootprint` | hub,nom,slug | 4240 o | (sans commentaire) affiche/emploie : « aménagement : supprimés avec l » | _b2BuildExtract, _b2Check, _b2Confirm, _b2ExecReel |
| `_elfChif` | v | 50 o | (sans commentaire ni indice) | elfEnregistrer |
| `_elfDech` | p | 179 o | (sans commentaire ni indice) | elfChargerFleches, elfLire |
| `_elfP2` | n | 25 o | (sans commentaire ni indice) | elfAujourdhui, elfPlusJours, elfPremieresCases |
| `_eliPut` | chemin,v,quoi | 148 o | (sans commentaire) ECRIT au hub | elfEnregistrer, elfSexe, eliChiffrerEnAttente, eliEcrire (+3) |
| `_entryEffectif` | val | 448 o | (sans commentaire) affiche/emploie : «  \u00e9l\u00e9ments » | _pvRow |
| `_entryLabel` | key,val | 377 o | (sans commentaire ni indice) | _pvRow |
| `_estClasseInterne` | slug | 42 o | Classe interne (test d'une app) : slug prefixe par "_" -> jamais comptee comme classe reelle | _profSectionClasses, _profSectionEleves, _profSectionProfilTest, _uniNoms (+6) |
| `_estCodeProf` | c | 455 o | (sans commentaire ni indice) | _genCode4 |
| `_estPublieItem` | it | 137 o | (sans commentaire ni indice) | atEditerChapitreRendre |
| `_exportDiagnostic` | data, diff, mode, current | 358 o | (sans commentaire ni indice) | _importPreview |
| `_exportHub` | — | 875 o | --- EXPORT : aperçu -> Enregistrer sous -> journal --- | _profSectionArchives |
| `_fbDeletePath` | path | 110 o | Suppression Firebase ciblée d'un chemin (REST). Inerte tant que l'écran ne l'appelle pas. | _b2ExecReel, _orphDelete, _purgeExec, eliRestesEnCorbeille |
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
| `_lvlClasses` | level | 269 o | (sans commentaire ni indice) | _isPubAny, _pubCtrl, _pubCtrlToutes, _pubEtatNiveau (+5) |
| `_m8Superposer` | racine,val | 978 o | [ELEVE-1 ① — complément : dette préexistante rencontrée au banc] EN MODE TEST, CE QUI A ÉTÉ ÉCRIT AU MAGASIN SE SUPERPOSE À LA LECTURE DU VRAI HUB. Mesuré le 01/10 : | eliChargerSources, loadClasses, loadCodes |
| `_markPub` | node,cls,nv | 288 o | (sans commentaire ni indice) | _applyPubCascade, uploadFileForChapterItem |
| `_memoriserBrevetDefaut` | — | 159 o | (sans commentaire ni indice) | chargerBrevetDates |
| `_memoriserVueEnvers` | — | 78 o | (sans commentaire ni indice) | basculerVue |
| `_mjpcB64` | buf | 104 o | (sans commentaire ni indice) | mjpcChiffrer |
| `_mjpcDeB64` | s | 100 o | (sans commentaire ni indice) | mjpcDechiffrer |
| `_mjpcHex` | buf | 106 o | (sans commentaire) affiche/emploie : « ;for(var i=0;i<a.length;i++)h+=( » | mjpcEmpreinte, mjpcSelAleatoire |
| `_mjpcTxt` | s | 45 o | (sans commentaire ni indice) | mjpcChiffrer, mjpcDeriverCle, mjpcEmpreinte |
| `_modaleConfirme` | titre,corpsHtml,cbOui,motConfirmation | 1012 o | (sans commentaire) affiche/emploie : « <div class= · ;   if(motConfirmation){     body+= » — touche #cm-confirm-input | _corbRestaurerConfirme, _deleteEleveCls, _resetAllCodesClasse, applyLinkChanges (+16) |
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
| `_profSectionBrevet` | — | 81 o | (sans commentaire) affiche/emploie : « <h2>\ud83c\udf93 Dates de l’année</h2><div id= » | _renderProfSection |
| `_profSectionClasses` | — | 3666 o | (sans commentaire) affiche/emploie : « <h2>Classes</h2><div class= · );});    var html= » | _renderProfSection |
| `_profSectionCodeProf` | — | 1467 o | (sans commentaire) affiche/emploie : « <h2>\ud83d\udd11 Code professeur</h2> · <div class= » | _renderProfSection |
| `_profSectionConfig` | — | 2628 o | (sans commentaire) affiche/emploie : « \u2705 actif (<code> · \u26a0 placeholder (notifs d\u00e9sactiv\u00e9es) » | _renderProfSection |
| `_profSectionCorbeille` | — | 369 o | (sans commentaire) affiche/emploie : « <div class= · >\ud83d\uddd1 Corbeille <span class= » | _renderProfSection |
| `_profSectionDashboard` | — | 1268 o | (sans commentaire) affiche/emploie : « <div class= · ><span class= » | _renderProfSection |
| `_profSectionEleves` | — | 4332 o | (sans commentaire) affiche/emploie : « <h2>\u00c9l\u00e8ves &amp; codes</h2><div class= · >\u23f3 Chargement\u2026</div> » | _renderProfSection |
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
| `_renderProfSection` | id | 903 o | M8-FUSION | showProfSection |
| `_resLibelle` | source,ref,kind | 405 o | [LOT8-\u2466] LE LIBELL\u00c9 LISIBLE D'UNE RESSOURCE \u2014 pour nommer l'ancienne et la nouvelle dans l'avertissement, et l'historique au panneau. | applyLinkChanges, atEditerChapitreRendre, edLierConfirme, openLinkModal |
| `_resetAllCodesClasse` | slug | 489 o | (sans commentaire) affiche/emploie : « R\u00e9g\u00e9n\u00e9rer tous les codes » | _profSectionEleves |
| `_routeFileToTarget` | target,file | 996 o | (sans commentaire) affiche/emploie : « \u26a0 Niveau introuvable · );return;}   var itemEl=target.closest( » | initChapterDragDrop |
| `_saveJSON` | obj,filename | 572 o | (sans commentaire) affiche/emploie : « Sauvegarde MJPC (JSON) » | _b2DoSave, _corbExport, _doImport, _exportDiagnostic (+7) |
| `_secuPurgerClair` | cles,nbVestiges,dejaFaits | 2377 o | (sans commentaire) affiche/emploie : « Retrait en cours · <div class= » | secuRetirerClair |
| `_secuVerifCodeEleveSite` | found,saisie | 678 o | M-SÉCU-5 : la vérification du code élève au portail du site — empreinte prioritaire (aucune clé requise), clair résiduel puis cache en replis. | doLogin |
| `_selectProfElClasse` | slug | 48 o | (sans commentaire ni indice) | _profSectionEleves |
| `_selectTestClasse` | k | 52 o | (sans commentaire ni indice) | _profSectionProfilTest |
| `_showConsoleModal` | title,bodyHtml,actions | 900 o | ===== fin UNIFIER ===== | _b2Check, _b2Confirm, _b2DoSave, _b2ExecReel (+32) |
| `_showTestBanner` | nomAff | 321 o | (sans commentaire) touche #test-banner | _activerProfilTest |
| `_siteDelete` | chemin, cb | 368 o | (sans commentaire) affiche/emploie : « , {method: » | atSiteDelete, reinitialiserBrevetDates |
| `_siteGet` | chemin, cb | 1435 o | (sans commentaire) affiche/emploie : « évapore      à l · arbre recomposé */   fetch(FIREBASE_BASE + chemin +  » | _chargerTextesSite, _corbCharger, _corbRestaurer, atArchivesLire (+19) |
| `_sitePut` | chemin, valeur, cb | 590 o | (sans commentaire) affiche/emploie : « , {method: · , headers:{ » — ECRIT au hub | _editerTexteSeanceSansDoc, _taxoEcrire, atSitePut, ecrireAnnonce (+9) |
| `_slugifyClass` | nom | 127 o | (sans commentaire ni indice) | _applyPubCascade, _markPub, dr_tabCle, edtCleClasse (+2) |
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


## DÉROULÉ INTÉGRÉ (8.75.0) — p8 : notes, mesure lisible, pages, schémas

| fonction | args | taille | ce qu'elle fait | appelée par |
|---|---|---|---|---|
| `p85fCle` | l | 95 o | (sans commentaire) affiche/emploie : «  + l.dataset.bi +  ·  + l.dataset.r +  » | paginer |
| `p85fHaut` | l, corps | 304 o | (p8-5f) l'identité d'une ligne de page, la même au pilote et au tableau | paginer |
| `p85fSuivreFrappe` | el | 681 o | (p8-5f) la hauteur d'une ligne dans le corps de la diapo, où qu'elle soit | ecrireDansDiapo |
| `p85hAllerPage` | i, pg | 578 o | (p8-5h, 2) un clic sur une vignette de page y va : la diapo et la page, avec la garde « La classe te suivrait » quand elle s'applique ; le fil note la page montrée | — |
| `p85hPages` | i | 1495 o | (p8-5h, points 1-5) les pages d'une diapo, telles que le tableau les montrera : la diapo courante en classe → ses pages réelles ; | alertesForme, miniatures, volet, voletAtelier |
| `p85hTenirCurseur` | x | 1253 o | (p8-5h, 13) dans l'atelier, Paul voit toujours où il écrit : une ligne plus haute que la place qui lui reste dans la diapo défile en elle-même (le curseur reste dans le cadre ; | brancherAtelier |
| `p8Ancres` | e | 221 o | les ancres possibles : chaque élément de la diapo qui porte un texte (data-p), dans l'ordre de dévoilement, son rang = k + 1 | p8RangDe, p8Reaccrocher |
| `p8Arbre` | L,c | 1800 o | ARBRE : profondeur déduite de l'indentation | p8SchemaHTML |
| `p8Assainir` | html | 553 o | l'assainissement à l'enregistrement : seuls <mark data-coul> et <span data-coul> passent (le nom de la couleur), tout le reste devient du texte | p8EcrireNote, p8FormerNote, p8NouvelleNote |
| `p8AvecTexte` | e | 258 o | un schéma noyé dans du texte, ou deux schémas : la trame d'avant la règle | alertesForme |
| `p8BrancherPanneau` | da | 1104 o | (sans commentaire) affiche/emploie : « Réordonné : chaque bulle a repris sa place calculée. » | rendreDroiteAtelier |
| `p8Carte` | L,c | 1709 o | (sans commentaire) affiche/emploie : « );     return {nom:(p[0]·· · ).trim(), membres:(p[1]·· » | p8SchemaHTML |
| `p8ChangerType` | bi, t | 1760 o | (sans commentaire) affiche/emploie : « , bid: k ? nouveauBid() : b.bid, txt: x, el: [ · , src: L.join( » | p8MenuType |
| `p8Cible` | — | 497 o | (sans commentaire) affiche/emploie : « #notesd .p8-mt · #mur [data-p] » | p8Former |
| `p8Cle` | txt | 70 o | (sans commentaire ni indice) | p8Arbre, p8Carte, p8CouperSchema, p8Cycle (+4) |
| `p8Cls` | c,k | 89 o | T2 : la place est calculée sur le schéma entier ; ce qui n'est pas encore dévoilé porte « p8-pas » (pâle au pilote, absent au tableau) | p8Arbre, p8Cycle, p8Dessine, p8Frise (+2) |
| `p8ConsigneUneLigne` | b | 58 o | (sans commentaire ni indice) | p8AvecTexte, p8ChangerType, p8DiapoLibre, p8GardeColler (+1) |
| `p8Contexte` | b,W,H,hDiapo,cran,vu,flash,atelier,titre | 238 o | T1 : les tailles viennent de la loi de la maquette (policePx) — 32 pt les titres, 26 pt les éléments, jamais moins à aucun cran | p8Dessin |
| `p8CopieDiapo` | h, eid | 99 o | (sans commentaire ni indice) | p8EcrireCopie |
| `p8CopieDiffere` | — | 102 o | « Fin de l'heure » : la liste des diapos modifiées, chacune avec « verser dans la trame » oui / non, en clair ; sans réponse, la trame ne change pas | — |
| `p8CouleurTexte` | couleur | 1044 o | (sans commentaire) affiche/emploie : « sélectionne d\ · #mur [data-p] » | p8Former |
| `p8CouperSchema` | i, bi, li | 1547 o | (sans commentaire) affiche/emploie : « ) { toast( · insère après le bilan. » | p8MenuBulle |
| `p8Cycle` | L,c | 2328 o | CYCLE : étapes réparties sur un cercle | p8SchemaHTML |
| `p8Dessin` | b,W,H,hDiapo,cran,vu,flash,atelier,titre | 341 o | (sans commentaire) affiche/emploie : « ;   var cle0=JSON.stringify([b.forme·· » | p8Poser, p8Redessiner, rendre |
| `p8Dessine` | n,c | 1293 o | (sans commentaire) affiche/emploie : « ;   var txt=n.parts ? n.parts.map(function(p){ return  · ; }).join( » | p8Arbre, p8Carte, p8Cycle, p8Frise |
| `p8DiapoASchema` | e | 62 o | (sans commentaire ni indice) | brancherAtelier, menuAtelierMur, p8GardeColler, p8GardeObjet (+5) |
| `p8DiapoApres` | i, blocs | 298 o | (sans commentaire ni indice) | dr_blocColler, menuAtelierMur, p8ChangerType, p8CouperSchema (+1) |
| `p8DiapoLibre` | e | 103 o | la diapo n'a que son titre, et au plus une consigne d'une ligne : un schéma s'y pose | dr_blocColler, menuAtelierMur, p8PoserSchema |
| `p8DiffCopie` | h, e | 478 o | ce que la copie change dans une diapo, par identité de bloc : seulement ce qui diffère de la trame | p8CopieDiffere, p8ListeVersement, p8Verser |
| `p8Dire` | msg | 64 o | C. la mise en forme : la cible suit la sélection (la diapo → au tableau, l'état de l'heure, le journal ; les notes → la trame, ni journal ni tableau) | dr_grasSoul, p8CouleurTexte, p8Former, surligner |
| `p8Ech` | pt | 60 o | l'ancien schEch : la même réglette, lue sur le cran de « Texte au tableau » ; elle ne donne plus que la géométrie (rayons, écarts), jamais la police (T1) | p8Contexte |
| `p8EcrireCopie` | el | 959 o | la frappe en classe va dans la copie, jamais dans la trame ; le pilote et le tableau la montrent (le texte qui a le focus n'est jamais touché par le redessin) | ecrireDansDiapo |
| `p8EcrireNote` | mt | 475 o | (sans commentaire ni indice) | — |
| `p8EcrireSous` | z | 804 o | décision 2 et 5 : la première lettre tapée sous le dernier bloc crée un bloc « texte » (son identité tout de suite), dont chaque ligne est un élément | — |
| `p8EcritureOuverte` | — | 41 o | (p8-4) ÉCRIRE DIRECTEMENT DANS LA DIAPO — complément p8-4 (version 2) : dans l'atelier, et en répétition (l'instantané de la séance l'oublie à l'arrêt). | dr_tout, p8EcrireSous |
| `p8Elements` | b | 361 o | ce qui se dévoile, bulle par bulle, dans l'ordre de la source (l'ancien elems) : réglé « Un à un » seulement ; « Tout ensemble » (et sans réglage) : rien, il paraît d'un coup | elements, rendre |
| `p8EnClasse` | — | 67 o | (p8-5) ÉCRIRE EN CLASSE, DANS LA COPIE DE LA CLASSE — complément p8-5 ; cadrage 1 §8.4 : ce que Paul modifie en séance vit dans la copie de la classe ; | brancherAtelier, dr_tout, ecrireDansDiapo, p8ModeNotes |
| `p8FermerPalettes` | — | 87 o | (sans commentaire ni indice) | — |
| `p8Former` | genre, coul | 834 o | (sans commentaire) affiche/emploie : « sélectionne d\ ·  + (genre ===  » | dr_basculerSurl |
| `p8FormerNote` | mt, r, genre, coul | 659 o | (sans commentaire) affiche/emploie : « ; if (!coul) { Array.from(mt.querySelectorAll(tag +  » | p8Former |
| `p8Frise` | L,c | 2128 o | (sans commentaire) affiche/emploie : « ); if(p.length<2)p=s.split( · ;        /* rien à montrer : jamais de consigne d » | p8SchemaHTML |
| `p8GardeColler` | b, e | 254 o | coller sur une diapo à schéma : seule une consigne d'une ligne, s'il n'y en a pas déjà une (un schéma collé, lui, part dans une diapo nouvelle) | dr_blocColler, menuAtelierMur |
| `p8GardeObjet` | t, e | 427 o | les gardes de « + bloc » : ce qu'on n'ajoute pas à une diapo à schéma, et pourquoi | choixObjet, p8GardeColler, p8GardesBarre |
| `p8GardeType` | b, e | 358 o | (sans commentaire) affiche/emploie : « Ce bloc n\ · ; if (p8DiapoASchema(e) && b.t !==  » | menuAtelierMur, p8GardeVers |
| `p8GardeVers` | b, t, e | 380 o | (sans commentaire) affiche/emploie : « est déjà son type · ) return  » | p8ChangerType, p8MenuType |
| `p8GardesBarre` | — | 1262 o | (sans commentaire) affiche/emploie : « sur une diapo à schéma, seule une consigne d\ · ; const SUITE =  » | dr_tout |
| `p8Grille` | L,c | 461 o | TABLEAU | p8SchemaHTML |
| `p8Lignes` | b | 126 o | (sans commentaire) affiche/emploie : « ).map(function(s){return s.replace(/\s+$/, » | p8BrancherPanneau, p8CouperSchema, p8Elements, p8LignesDe (+2) |
| `p8LignesConsigne` | b | 81 o | (sans commentaire ni indice) | p8ConsigneUneLigne |
| `p8LignesDe` | b | 139 o | (sans commentaire ni indice) | p8ChangerType |
| `p8ListeVersement` | — | 1454 o | E1 (§12.26 (2)) : la réactivation construite ne passe jamais dans la trame | clotureHtml |
| `p8MarquePris` | — | 121 o | (sans commentaire ni indice) | p8Redessiner |
| `p8MenuBulle` | g, ev | 1314 o | (sans commentaire) affiche/emploie : « , l: `« ${t.nom} » · ${t.quoi}`, off: true },  · Couper le schéma ici » | menuAtelierMur |
| `p8MenuType` | bi, x, y | 641 o | (sans commentaire) affiche/emploie : « , l: `Changer de type — bloc ${bi + 1} · ${(b.t ··  · ).toUpperCase()}`, off: true },  » | menuAtelierMur |
| `p8Mesure` | txt,fs,poids,u,parts | 994 o | T4 : la boîte réelle du texte rendu (mesurée dans un SVG caché, même police), plus les marges de l'ancien mesure() | p8Arbre, p8Carte, p8Cycle, p8Frise |
| `p8MesureDiapo` | i | 1156 o | (sans commentaire) affiche/emploie : « ; z.setAttribute( · mur tableau » | alertesForme |
| `p8MesureLisible` | mur | 5424 o | LA MESURE — une seule, pour les bancs et pour l'atelier (C13, tour 2 : les boîtes réelles, contre le cadre réellement visible) : | p8MesureDiapo |
| `p8MigrerNotes` | — | 535 o | (sans commentaire ni indice) | p8RendreNotes |
| `p8ModeNotes` | — | 76 o | (sans commentaire ni indice) | p8EcrireNote, p8Former, p8RendreNotes |
| `p8NoteCle` | mt | 82 o | le texte tapé dans un paragraphe : la trame (dans l'atelier et en classe ; jamais en répétition) | p8EcrireNote, p8FormerNote, p8NouvelleNote |
| `p8NoteEcran` | key | 76 o | (sans commentaire ni indice) | p8EcrireNote, p8NouvelleNote |
| `p8NoteEnregistree` | i | 56 o | (sans commentaire ni indice) | p8EcrireNote, p8FormerNote, p8NouvelleNote, p8Reaccrocher |
| `p8NoteRang` | mt | 68 o | (sans commentaire ni indice) | p8EcrireNote, p8FormerNote, p8NouvelleNote |
| `p8NotesBloc` | di, bi, act, n | 119 o | (sans commentaire ni indice) | deplacerBloc, dr_blocColler, dr_blocCouper, dr_selSup (+3) |
| `p8NotesBlocF` | bi, act, n, b, x | 339 o | (sans commentaire ni indice) | p8NotesBloc |
| `p8NotesCouper` | i, bi, eidSuite | 472 o | « Couper la diapo ici » : chaque paragraphe suit son élément ; ceux des blocs qui partent vont dans la diapo « (suite) » | couperDiapoIci |
| `p8NotesDe` | key | 172 o | (sans commentaire) affiche/emploie : « ) return []; if (typeof v ===  » | atP2DerouleNormalise, p8EcrireNote, p8FormerNote, p8NotesCouper (+4) |
| `p8NotesElement` | di, bi, ei, act | 127 o | (sans commentaire ni indice) | brancherAtelier, menuAtelierMur |
| `p8NotesElementF` | bi, ei, act, b, x | 406 o | (sans commentaire) affiche/emploie : « ) return; if (act ===  · ) return x === ei ? null : x > ei ? b +  » | p8NotesElement |
| `p8NotesMap` | di, f | 420 o | (sans commentaire) affiche/emploie : « ); const r = f(+b, x ===  » | p8NotesBloc, p8NotesElement |
| `p8NouvelleNote` | mt | 730 o | Entrée : un nouveau paragraphe, accroché à l'élément où était le curseur juste avant de descendre dans les notes (⌂ sinon) | — |
| `p8Panneau` | e | 1475 o | le panneau du schéma, repris de l'existant (décision 6 bis) : la forme, « Un à un / Tout ensemble », le contenu et sa règle d'écriture, « ⌖ Réordonner » | droiteAtelier0 |
| `p8PeutEcrireSous` | e | 57 o | sous le dernier bloc : pas sur la diapo de fin d'heure (le cahier de textes), pas sur une diapo à schéma (son titre, le schéma, au plus une consigne d'une ligne) | p8EcrireSous, rendre |
| `p8Place` | n,axe,sens,W,H,u | 158 o | T5 : la place qu'une bulle a encore dans le cadre, dans une direction (une bulle placée à la main ne bouge pas) | p8Separe |
| `p8Poser` | mur,et | 597 o | le dessin se pose dans la place « plein » réellement disponible (T6 : le repère 1000 × 560 y est étiré) ; mesurée après le rendu, reposée par le morph — rien n'est reconstruit si rien n'a changé | rendre |
| `p8PoserSchema` | b | 648 o | « Schéma… » : sur une diapo qui a déjà du contenu, le schéma part dans une diapo nouvelle, juste après (décision 1) | formulaireObjet |
| `p8RangDe` | e, p | 92 o | (sans commentaire ni indice) | p8EcrireNote, p8NouvelleNote, p8RendreNotes, p8TrierNotes |
| `p8Reaccrocher` | i, x, y | 999 o | (p8-5d) dans le même geste : la touche suivante arrive dans le paragraphe neuf | — |
| `p8ReactAvantLancement` | e | 814 o | E1 (§12.26 (4)) : | brancherAtelier, dr_tout, ecrireDansDiapo |
| `p8Redessiner` | bi | 294 o | (sans commentaire) affiche/emploie : « #mur .p8-dessin[data-p8= » | — |
| `p8RendreNotes` | — | 2810 o | (sans commentaire) affiche/emploie : « #notesd .p8-mt · ).replace(/<[^>]*>/g,  » | dr_tout, p8EcrireNote, p8NouvelleNote, p8Reaccrocher |
| `p8SchemaHTML` | b,c | 250 o | T3 : la source n'est jamais coupée au dévoilé (b.vues n'est pas repris) ; le dévoilement passe par le compteur de la maquette (c.vu) | p8Dessin |
| `p8SepCoupe` | p,q,n | 345 o | T11 : le segment p → q passe-t-il derrière la boîte de la bulle n ? (découpage du segment par la boîte, Liang-Barsky) | p8Separe |
| `p8Separe` | N,W,H,marge,u,liens | 3465 o | (sans commentaire) affiche/emploie : « autre axe, s · ,sx,W,H,u), placeY=p8Place(A, » | p8Arbre, p8Carte, p8Cycle, p8Frise |
| `p8Suite` | t | 56 o | « même titre suivi de (suite) » : un titre qui finit déjà par « (suite) » le garde tel quel (pas de « (suite) (suite) ») | p8CouperSchema, p8DiapoApres |
| `p8Svg` | c,s | 136 o | (sans commentaire) affiche/emploie : « <svg class= ·  data-w= » | p8Arbre, p8Carte, p8Cycle, p8Frise |
| `p8TeteDe` | b, g | 1533 o | « Couper le schéma ici » : la bulle de tête de chaque forme (famille, repère, nœud de premier niveau, étape, rangée) | p8MenuBulle |
| `p8TextesCopie` | e, textes | 323 o | au rendu (pilote et tableau) : la copie de la classe, posée par identité sur les textes de la diapo | dr_tout, p85hPages |
| `p8Trait` | x1,y1,x2,y2,coul,larg,opac,k,a,b,c | 274 o | (sans commentaire) affiche/emploie : « <line class= ·  data-a= » | p8Carte, p8Frise |
| `p8TraitCouleur` | — | 180 o | (sans commentaire) affiche/emploie : « ]; if (t) t.style.background = P8_TXT_NOTES[S.p8CoulTxt ··  » | — |
| `p8TrierNotes` | e, L | 113 o | (sans commentaire ni indice) | p8NotesMap, p8NouvelleNote, p8Reaccrocher |
| `p8Verser` | h, eid | 352 o | « oui » : la trame prend ce que la classe a vu, bloc par bloc, par identité | — |
| `p8ZoneEcrire` | — | 309 o | (sans commentaire) affiche/emploie : « <div class= ·  contenteditable= » | rendre |


## DÉROULÉ INTÉGRÉ (8.75.0) — socle, classe, atelier, tableau, récit, recyclage (dr-*.js inlinés, sas LIVRAISONS/INTEGRATION/dr/)

| fonction | args | taille | ce qu'elle fait | appelée par |
|---|---|---|---|---|
| `dr_absentsDeLaCase` | — | 591 o | dette 12 · 17 (sur mon territoire) : « les absents saisis dans la case EDT ne sont relus par rien ». L'appel se saisit dans le Pilotage OU dans la case de l'EDT — c'est la même liste (C1 11b.1) : | dr_lancerNeuf, dr_reprendre |
| `dr_acces` | b, nom, get, set | 87 o | (sans commentaire ni indice) | dr_blocLu |
| `dr_actif` | — | 93 o | (sans commentaire ni indice) | atSomSuivreCourant, atVuesAller, dr_ecouteDoc, dr_ecouteWin (+5) |
| `dr_activites` | — | 43 o | (sans commentaire ni indice) | clotureHtml, dr_activitesOuDiapos, dr_decisionsSuivre, dr_donneesVues (+8) |
| `dr_activitesOuDiapos` | — | 156 o | (sans commentaire ni indice) | dr_resteHeure, ouvrirFin |
| `dr_adopterIdentites` | copie | 322 o | (sans commentaire ni indice) | dr_lancerNeuf, dr_reprendre |
| `dr_alerteScene` | on | 137 o | E2 (réveil n°4, point 5 ; C1 6.3) : la boîte au-dessus des notes, entière dans l'écran à 1280 × 768 — la colonne du centre (#scene) est de hauteur fixe ; | alerteFermer |
| `dr_aller` | i | 124 o | (sans commentaire ni indice) | atSomAllerEcran |
| `dr_annuler` | — | 1019 o | (sans commentaire) affiche/emploie : « avant s · empiler */   if (typeof journal ===  » | dr_annulerBouton |
| `dr_annulerBouton` | — | 640 o | le bouton ↶ dans la barre de l'atelier, grisé avec sa raison quand il n'y a rien à annuler | dr_annuler, dr_annulerSuivre |
| `dr_annulerCle` | — | 89 o | (sans commentaire ni indice) | dr_annulerSuivre, dr_rappelSuivre |
| `dr_annulerCoupure` | — | 200 o | (sans commentaire ni indice) | dr_mkChanger, dr_selEcrire, dr_selSup |
| `dr_annulerSuivre` | — | 323 o | (sans commentaire ni indice) | — |
| `dr_appliquerHeures` | m, parDurees, reac | 657 o | reposer des frontières gardées (la reprise, l'heure suivante) : chaque diapo à son heure, chaque « Cahier de textes » derrière la dernière diapo de la sienne | dr_lancerNeuf, dr_reprendre |
| `dr_armeMk` | o | 126 o | (sans commentaire ni indice) | dr_mkPanneau |
| `dr_atelierEnClasse` | — | 134 o | (sans commentaire ni indice) | dr_etatAtelierMaintenant, dr_tout, ecrireDansDiapo |
| `dr_auMur` | et, msg | 261 o | E1 (réveil n°2, pour E3) : `fenetreMur` passe chez E3 (dr-tableau.js) ; le socle ne la déclare plus, il la lit (typeof). Tout envoi au tableau passe par le crochet d'E3 `dr_versMur` ; | arreterRepetition, fermerFiche, pousser |
| `dr_avanceActivites` | — | 1628 o | R7 « Où on en est » (l'ancien `atVecuAfficher`) : sur chaque ligne d'activité de la colonne de droite, « dévoilés / total » et le réel contre le prévu, depuis le journal. | — |
| `dr_basculerSurl` | — | 212 o | (sans commentaire) affiche/emploie : « , null); else p8Former( » | — |
| `dr_blocClavier` | ev, champ | 514 o | (sans commentaire) affiche/emploie : «  ? champ : !vide) return false; if (k ===  · ) dr_blocCopier(bi); else if (k ===  » | — |
| `dr_blocColler` | bi | 855 o | (sans commentaire) affiche/emploie : « Rien dans le presse-papiers : Ctrl+C sur un bloc d\ · ) { toast( » | dr_blocClavier, menuAtelierMur |
| `dr_blocCopier` | bi | 119 o | E1 (R17, R20) Ctrl/Cmd + C, X, V sur les blocs : le menu les affichait (« Ctrl + C », « Ctrl + X ») sans gestionnaire clavier ; l'ancien moteur les avait. Le bloc visé : | dr_blocClavier, menuAtelierMur |
| `dr_blocCouper` | bi | 402 o | (sans commentaire) affiche/emploie : « Une diapo garde au moins un bloc. · Bloc coupé : Ctrl+V le colle après le bloc touché. » | dr_blocClavier, menuAtelierMur |
| `dr_blocLu` | b, eid, k | 3865 o | (sans commentaire) affiche/emploie : « )) { b.q = b.txt; delete b.txt; } if (own( · , r: String(r == null ?  » | dr_preparer |
| `dr_blocVu` | b | 142 o | ce qu'un autre document reçoit (la fenêtre du tableau, par postMessage ou JSON) : l'écran tel que la maquette le lisait, accesseurs résolus en clair. Un transport, pas une donnée : | dr_recitBloc |
| `dr_calibreMarques` | racine | 254 o | calibreMarques : les marques se mesurent sur la LARGEUR DE L'IMAGE (au pilote, au tableau, dans les vignettes) | — |
| `dr_candidats` | t | 747 o | (sans commentaire ni indice) | brancherAjout, candidats, ouvrirPalette |
| `dr_chapitre` | — | 190 o | (sans commentaire ni indice) | dr_chapitreTitre, dr_cles, dr_recitSeanceN, dr_sauveMaintenant (+2) |
| `dr_chapitreTitre` | — | 70 o | (sans commentaire ni indice) | dr_donneesVues, rendre, texteTravail, voletAtelier |
| `dr_cheminB` | — | 39 o | (sans commentaire ni indice) | dr_cheminC, dr_heuresDeLaClasse, dr_lancerNeuf, dr_recitChargerClasse (+2) |
| `dr_cheminBDe` | sk | 95 o | (sans commentaire ni indice) | dr_cheminB, dr_reactivationCheminAvant, dr_sauveMaintenant |
| `dr_cheminC` | — | 78 o | (sans commentaire ni indice) | dr_cheminH, dr_clPeutEcrire, dr_cloreFin, dr_copieAuto (+15) |
| `dr_cheminH` | — | 187 o | (sans commentaire ni indice) | dr_absentsDeLaCase, dr_cloreFin, dr_lancerNeuf, dr_reactivationPreparer (+3) |
| `dr_choixDe` | c | 108 o | E1 (relecture continue E4, 12:38 → passe complète) : dans « + bloc » et « Envoyer vers… », Entrée choisit — le choix qui a le focus, sinon le premier ; les flèches passent d'un choix à l'autre | — |
| `dr_choixMarquer` | c, x | 151 o | (sans commentaire ni indice) | — |
| `dr_clPeutEcrire` | copie | 734 o | peut-on écrire ? (contrat §5 : ni atelier, ni répétition, ni hors d'une heure lancée, ni en vue tableau) | dr_copieAuto, dr_etatAuto, dr_journalAuto, dr_traceAuto |
| `dr_classe` | — | 1099 o | (sans commentaire) affiche/emploie : « , nom: cl.nom ·· slug ··  · , prochaines: (typeof edtProchainesDe ===  » | controleCahier, dr_classeProposee, dr_ctx, dr_demarrer (+9) |
| `dr_classeDuNiveau` | — | 264 o | la classe : ses élèves (« NOM Prénom »), son École Directe, ses prochaines heures | dr_classe |
| `dr_classeProposee` | — | 377 o | la classe proposée : celle de l'heure en cours, sinon celle que l'Atelier a choisie, sinon la première du niveau | dr_heureAVenir, dr_heuresDeLaClasse, dr_lancer, dr_lancerSuite (+1) |
| `dr_cleSeance` | si | 61 o | (sans commentaire ni indice) | dr_reglageReactBrancher, dr_reglageReactHtml, dr_suivreSeance, dr_trame (+1) |
| `dr_cles` | — | 146 o | (sans commentaire ni indice) | dr_cleSeance, dr_dejaPosee, dr_rangSeance, dr_reactivationCheminAvant (+4) |
| `dr_cloreFin` | — | 1846 o | clore : l'étape 7 fait les écritures d'`atDrCloreFin` (H clos, finReel, cours_actif nul), plus le journal et l'état | ouvrirFin |
| `dr_cloreHeureRestee` | slugNeuf, nomNeuf, c | 1024 o | la clôture CERTAINE de l'heure précédente (`_drCloreHeureRestee`, par `dr_lire` : le mode test lit sa copie) | _drCloreHeureRestee, dr_lancerNeuf |
| `dr_clorePoser` | — | 700 o | « ■ Clore l'heure » à côté de « Fin de l'heure » (le « ■ Clore la séance » d'aujourd'hui) : | — |
| `dr_confirmer` | msg, oui, libOui | 230 o | (sans commentaire) affiche/emploie : « ), prim: true, danger: /suppr/i.test(libOui ··  » | supprimerBloc, supprimerDiapo |
| `dr_copieAuto` | vite | 617 o | la copie jouée (`C/ecrans`), appelée par `dr_sauve` du socle en régime classe (audit E1, C3) | _drCopieAuto, dr_copieReporter, dr_lancerNeuf, dr_reprendre (+1) |
| `dr_copieDepuisAtelier` | — | 755 o | (sans commentaire) affiche/emploie : « Séance en classe — retouche dans l’atelier » | dr_sauveMaintenant |
| `dr_copieMemoire` | classeSlug | 288 o | (sans commentaire ni indice) | dr_envelopperJouer |
| `dr_copieReporter` | h | 218 o | (sans commentaire ni indice) | — |
| `dr_copieTouchee` | quoi | 821 o | (sans commentaire) affiche/emploie : « une diapo que si le journal dit qu · autre de l » | ecrireDansDiapo, marquerModif |
| `dr_corrigerReponse` | j | 1826 o | (sans commentaire) affiche/emploie : « ).slice(0, 80))} » ?</h4><div class= · >Saisi en classe : « ${dr_esc(x.ini ··  » — touche #dr-corr-ok, #dr-corr-pop, #dr-corr-sel | — |
| `dr_cotesTableau` | — | 465 o | les interfaces du socle, telles que l'autre document (la fenêtre du tableau) les lit : sur sa projection DATA | — |
| `dr_coursActif` | — | 219 o | le pointeur du cours (`sesCoursEcrire`/`sesCoursFermer`, même forme qu'aujourd'hui) et la clôture certaine | dr_coursEcrire, dr_coursIci, dr_reprendreQuandPret |
| `dr_coursActifEffacerSi` | sig | 189 o | efface le pointeur SEULEMENT s'il désigne encore l'heure close (`_drCoursActifEffacerSi`, par `dr_lire`) | _drCoursActifEffacerSi, dr_cloreHeureRestee |
| `dr_coursEcrire` | — | 496 o | (sans commentaire) affiche/emploie : « Le cours annoncé aux autres appareils » — hub /site/cours_actif | dr_lancerNeuf, dr_reprendre, sesCoursEcrire |
| `dr_coursFermer` | — | 112 o | (sans commentaire) affiche/emploie : « Le cours est clos » — hub /site/cours_actif | dr_cloreFin, sesCoursFermer |
| `dr_coursIci` | — | 116 o | (sans commentaire ni indice) | dr_ongletClos, dr_ongletEntendre |
| `dr_creneauPropose` | — | 273 o | le créneau proposé quand on n'est pas passé par l'EDT : celui où l'on est, sinon le prochain du jour, sinon le 3e (la tête d'aujourd'hui) | dr_lancer, dr_lancerSuite, dr_proposer |
| `dr_cssTableau` | — | 315 o | le CSS du déroulé, en texte, pour l'autre document (la fenêtre du tableau) | — |
| `dr_ctx` | — | 1099 o | le contexte : le chapitre ouvert, la séance de la colonne, l'heure de cours | dr_annulerCle, dr_appliquerHeures, dr_cheminB, dr_cheminBDe (+9) |
| `dr_cuireCopie` | ecrans, copie, avant | 625 o | (sans commentaire ni indice) | dr_copieReporter, dr_jouerCopie |
| `dr_dansHeureJouee` | i, h | 331 o | (sans commentaire) affiche/emploie : « heure h telle qu » | chapitreHtml |
| `dr_dansLH` | x, h | 317 o | (sans commentaire) affiche/emploie : « heure h si elle porte h et vient après son lancement : ce qu · atelier ou avant de lancer n » | chapitreHtml, dr_papierFiches, dr_recitCitations, dr_recitHeure (+10) |
| `dr_debutPropose` | creneau | 154 o | le début proposé : maintenant s'il est dans le créneau, sinon son début (`atDebutPropose`) | dr_lancer, dr_lancerSuite, dr_proposer, edtLancer |
| `dr_decisionsSuivre` | — | 554 o | réveil n°5, A4-2 (C1 7.0 ter) : | tick |
| `dr_dejaPosee` | b | 240 o | (sans commentaire ni indice) | dr_rappelDetecter |
| `dr_demarrer` | — | 227 o | (sans commentaire) affiche/emploie : « ); if (ho && !S.lancee) ho.textContent =  » — touche #hou | atVuesPoser |
| `dr_derouleDe` | sk, brut | 1622 o | (sans commentaire) affiche/emploie : « heure posée à la lecture ne s ·  ·· d.reactivation ===  » — ECRIT au hub | dr_lireSousObjets, dr_sauveMaintenant |
| `dr_devoilerQuestionsRepondues` | — | 401 o | E1 (réveil n°3, 5) : une question qui reçoit une réponse (la case de participation, ou la ligne de réponse) se dévoile — la réponse part au tableau au fil de la frappe (C1 4.2) ; | dr_tout |
| `dr_dimensionnerZone` | — | 289 o | (sans commentaire) affiche/emploie : « ; document.documentElement.style.setProperty( » | dr_monter |
| `dr_dire` | msg | 158 o | (sans commentaire ni indice) | brancherDeclare, brancherDocs, couperDiapoIci, deplacerDiapo (+9) |
| `dr_docEtat` | id | 207 o | l'état d'un document montré (S.doc → et.doc) : | dr_docsPanneau |
| `dr_docHtmlRef` | doc | 905 o | le cadre du document dans l'écran (au pilote et au tableau, le même) : | docHtml |
| `dr_docsPanneau` | l | 1497 o | (sans commentaire) affiche/emploie : «  style= · ><b>${dr_esc(d.titre)}</b> <span style= » | ouvrirDocs |
| `dr_documents` | — | 253 o | (sans commentaire ni indice) | alertesForme, arreterRepetition, brancherDocs, devoiler (+5) |
| `dr_donneesVues` | — | 296 o | (sans commentaire ni indice) | — |
| `dr_duHub` | x | 564 o | (sans commentaire) affiche/emploie : «  in o) { const i = (o.eid != null && typeof indexDe ===  » | dr_jouerCopie, dr_lireJoue, dr_reprendre |
| `dr_ecouteDoc` | type, fn, opt | 109 o | les écoutes globales de la maquette (clavier, souris, fenêtre) ne valent que quand le déroulé est à l'écran : ailleurs dans le site, ← → espace G N T L R n'appartiennent pas au déroulé | dr_tirer |
| `dr_ecouteWin` | type, fn, opt | 129 o | (sans commentaire ni indice) | — |
| `dr_ecrDeLaTrame` | e | 475 o | pour etatDiapo() (crochet du socle) : « à écrire » préparé dans la trame, en éléments de la diapo ('b'+bi pour un bloc, k pour une étape) | dr_annuler, dr_ecrResynchro, dr_selEcrire |
| `dr_ecrResynchro` | avant | 253 o | (E4 · relecteur continu B2) ↶ après « Marquer à écrire » : l'écran suit la trame — les ✍ venus de la trame sont recalculés (lisait : la donnée annulée, les ✍ restés) | dr_annuler |
| `dr_ecranVu` | e | 158 o | (sans commentaire ni indice) | arreterRepetition, dr_versMur, pousser |
| `dr_ecrire` | chemin, valeur, libelle, cb | 222 o | (sans commentaire) affiche/emploie : « , valeur, libelle ··  » — ECRIT au hub | dr_cloreFin, dr_cloreHeureRestee, dr_copieAuto, dr_copieDepuisAtelier (+13) |
| `dr_ecritsSeulement` | E | 453 o | E1 (relecteur neuf n°2) : un champ posé par défaut à la lecture (etapes, el, marques, txt) reste caché tant qu'il est vide — une frappe dans la diapo 1 écrivait « etapes: | dr_derouleDe |
| `dr_editeMarque` | mk, posee | 984 o | l'ancien gardait l'outil armé : le panneau le réarme d'un clic | dr_poseMk |
| `dr_edtAssurer` | — | 495 o | l'EDT chargé au lancement (même sans passer par lui) : les prochaines heures de la classe deviennent lisibles (échéance, « À relire — ») | dr_frontiereHorsClasse, dr_lancerNeuf, dr_proposer |
| `dr_edtPret` | — | 209 o | réveil n°13 : aussi les chapitres du niveau (`EDT_CHAP`) — sans eux, la projection de l'EDT dit « aucune séance prête » partout | dr_proposer |
| `dr_edtRelire` | cle | 1020 o | réveil n°5, A4-4 (C1 6.5, 8.6) : la case close ouvre la Relecture de CETTE heure — la séance, la classe et l'heure de sa trace ; | edtPeindreModale |
| `dr_edtReprendre` | cle | 700 o | (sans commentaire) affiche/emploie : « La trace de cette heure est introuvable. · Cette heure a été close : elle ne se reprend pas. » | edtPeindreModale |
| `dr_eidReactivation` | h, sk | 127 o | E1 (§12.25 (3)) : l'eid de la diapo de réactivation construite en classe (E4), posé par le socle, stable comme celui de la fin d'heure — une par heure et par séance, jamais un rang | dr_poserEidReactivation |
| `dr_empreinte` | x | 168 o | le témoin « déroulé intègre » (R9) : l'empreinte de ce qui a été écrit, comparée à ce que le hub rend | dr_copieAuto, dr_copieDepuisAtelier, dr_fusionCopie, dr_reactEcrireCopie (+1) |
| `dr_entete` | h | 254 o | l'entête de l'heure : la classe, le créneau, l'heure n/N, la séance | dr_cloreFin, dr_reprendre, lancerHeure |
| `dr_enteteLong` | h | 229 o | relecteur neuf n°1 : l'entête longue était coupée à 119 px | dr_entete |
| `dr_envelopperJouer` | — | 226 o | (sans commentaire ni indice) | dr_demarrer |
| `dr_etatAtelierMaintenant` | force | 446 o | (sans commentaire) affiche/emploie : « , dr_etatHeure(),  · , () => { if (typeof dr_temoinEnregistre ===  » | dr_etatDepuisAtelier, voir |
| `dr_etatAuto` | vite | 291 o | (sans commentaire) affiche/emploie : « , dr_etatHeure(),  ·  + AT_DR_COURS.classeNom +  » | dr_copieAuto, p8EcrireCopie, tick |
| `dr_etatDepuisAtelier` | — | 500 o | (sans commentaire) affiche/emploie : « atelier est ouvert — l · E2 (dr_etatHeure) se tait tant que l » | ecrireDansDiapo |
| `dr_etatHeure` | — | 629 o | (sans commentaire) affiche/emploie : « heure de chaque diapo (les frontières) et l · heure telle qu » | dr_cloreFin, dr_etatAtelierMaintenant, dr_etatAuto, dr_heureLocaleObjet |
| `dr_fenetre` | — | 236 o | E1 : la fenêtre du tableau, où qu'elle ait été ouverte — celle de la maquette (fenetreMur) ou celle d'E3 (DR_TAB.fen, ?vue=tableau&local=1) : pousser, la fiche, l'arrêt de la répétition y envoient | dr_auMur |
| `dr_feuilles` | — | 14 o | E4 : les items de type doc de la séance (sce.items) — remplacée dans dr-recit.js | dr_donneesVues, formulaireObjet |
| `dr_ficheDevoiler` | sens | 351 o | (sans commentaire ni indice) | devoiler, revoiler |
| `dr_ficheEcrire` | k | 224 o | (sans commentaire ni indice) | — |
| `dr_ficheEnLigne` | b | 132 o | une fiche du site porte son propre texte (titre, définition, corps) : la trame réelle n'a aucune fiche liée à une feuille (le lien de la maquette était simulé) | rendre |
| `dr_ficheOuverte` | — | 135 o | E1 (R14, la couche commune) la fiche ouverte se pilote comme une diapo — l'ancien moteur (elems d'une fiche ouverte, marqueFiche) : | dr_ficheDevoiler, dr_ficheEcrire |
| `dr_finAvecCahier` | — | 233 o | réveil n°12 (E4 ligne 162) : la diapo « fin » de chaque heure porte le cahier de textes (le bloc « cahier », ses quatre éléments) — comme la maquette (`normaliserTrame` : blocs: [{ t: 'cahier' }]) ; | dr_reprendre, lancerHeure |
| `dr_finCompte` | restantes | 382 o | §12.28-2 (13 · 40) : le compte de l'étape 2 — les activités pas faites dont le choix n'est pas encore fait (sans décision, ou le défaut « à l'heure suivante ») | controleCahier |
| `dr_finiPhrase` | x | 182 o | (sans commentaire) affiche/emploie : « ).replace(/[\s\u00a0]+$/,  » | recitHtml0 |
| `dr_formeCible` | — | 153 o | E1 (R6, R13, R18, R20 — le recyclage de l'ancien déroulé, table B) : gras et souligné (G, S dans la palette « A », Ctrl/Cmd+B et +U), Ctrl+H qui bascule ; | dr_basculerSurl, dr_grasSoul, p8CouleurTexte, surligner |
| `dr_frontiereHorsClasse` | — | 941 o | (sans commentaire ni indice) | dr_suivreSeance |
| `dr_fusionCopie` | trame, copie, journalJ | 1181 o | la fusion de la copie et de la trame (contrat §12.8, relance C6), pour une nouvelle heure de la même séance avec la même classe : par `eid` — un écran nouveau dans la trame s'ajoute ; | dr_jouerCopie, dr_lancerNeuf |
| `dr_garde` | faire, quoi | 437 o | E1 (§12.29-2, S2) : la garde « Aller au cahier » (gardeCahier, #garde-cahier) est tombée — un seul chemin vers le cahier, la séquence « Fin de l'heure » ; | aller, p85hAllerPage, revoiler |
| `dr_grasSoul` | genre | 824 o | (sans commentaire) affiche/emploie : « sélectionne d\ ·  + (genre ===  » | — |
| `dr_hclasseMaj` | leger | 168 o | (sans commentaire) touche #hclasse | dr_demarrer, dr_tout |
| `dr_hclasseNom` | leger | 367 o | E1 (§12.27-8, dette 13 · 38) : | dr_hclasseMaj |
| `dr_heureAVenir` | h | 1679 o | E1 (E4, 03:30) : une heure close dans la page est « jouée » dès la clôture — la copie de la séance en page n'a pas encore son paquet (le hub l'a) | dr_heureDe |
| `dr_heureContinue` | h | 1878 o | la séance continue (CADRAGE-TEMPS §1) : la trame réelle met tous ses écrans à l'heure 1 (contrat §12.5) ; | dr_lancerNeuf |
| `dr_heureDe` | h | 831 o | (sans commentaire) affiche/emploie : « ) + n;   const debut = (c && c.debut) ·· (p(d.getHours()) +  ·  + p(x.getMinutes()); })();   const [hh, mm] = debut.split( » | creneauDe, dr_cotesTableau, dr_heureEstJouee, dr_lancerClic (+7) |
| `dr_heureEstJouee` | h | 108 o | l'heure : la maquette lisait HEURES_SIM[h] = {jour, debut, fin, base} ; ici l'heure de cours réelle (AT_DR_COURS, E2) ou, en préparation, l'heure qu'il est. | dr_tout, voletAtelier |
| `dr_heureJouee` | h | 44 o | (sans commentaire ni indice) | clotureHtml, dr_entete, dr_enteteLong, dr_paquetHeure (+5) |
| `dr_heureLocaleEcrire` | — | 157 o | (sans commentaire ni indice) | dr_etatAuto |
| `dr_heureLocaleLire` | C | 406 o | (e) l'état de l'heure tel que ce navigateur le connaît : | dr_reprendre |
| `dr_heureLocaleObjet` | — | 117 o | (sans commentaire ni indice) | dr_heureLocaleEcrire, dr_ongletEntendre |
| `dr_heureParDefaut` | e | 303 o | l'heure prévue : absente du site, elle vaut 1 ; dès que Paul la change, elle devient une donnée de la trame (enregistrée) | dr_normaliserTrame, dr_preparer |
| `dr_heurePartie` | — | 403 o | ce que ce navigateur sait d'une heure partie (un onglet de l'heure fermé ou rechargé) : le message, ou la marque laissée au départ | sesReprendre, sesReprisePoser |
| `dr_heurePoser` | h, cours, ts | 991 o | (sans commentaire) affiche/emploie : «  + d.getDate() +  ·  + DR_MOIS[d.getMonth()] +  » | dr_lancerNeuf, dr_reprendre |
| `dr_heureProposee` | slug, creneau | 860 o | l'heure proposée pour un lancement sans l'EDT : les heures déjà jouées par cette classe dans cette séance, plus une (l'heure du jour sur ce créneau ne compte pas : c'est elle) | dr_lancer, dr_proposer |
| `dr_heureTenue` | — | 251 o | §12.28-3 (c)(d)(e) — une heure lancée ne se quitte pas ; elle se reprend à l'endroit exact (E2 : la vie de l'heure) (c) la garde du navigateur tant que l'heure est lancée et pas close ; | dr_heureLocaleEcrire, dr_ongletEntendre, sesReprisePoser |
| `dr_heureTenueAilleurs` | sig | 77 o | l'heure est-elle tenue par un autre onglet de ce navigateur ? (un signe de vie de moins de 5 s) | dr_heurePartie, sesReprendre, sesReprisePoser |
| `dr_heuresDeLaClasse` | slug | 2384 o | (sans commentaire) affiche/emploie : «  + String(auj.getMonth() + 1).padStart(2,  ·  + String(auj.getDate()).padStart(2,  » | dr_heureAVenir, dr_proposer |
| `dr_heuresDesEcrans` | — | 139 o | les frontières d'heure de la trame en mémoire : {eid: heure}, sans les « Cahier de textes » (le socle les place) | dr_etatHeure |
| `dr_heuresParDurees` | ecrans | 707 o | (sans commentaire) affiche/emploie : « heure de chaque écran d » | envoyerVersSeance |
| `dr_hhmmEnr` | — | 142 o | (sans commentaire) affiche/emploie : «  + String(d.getMinutes()).padStart(2,  » | dr_temoinEnregistre |
| `dr_horsHeureGarder` | — | 382 o | (sans commentaire) affiche/emploie : « état des diapos d · est « terminé » que la classe n » | devoiler, revoiler |
| `dr_horsHeureRendre` | — | 214 o | (sans commentaire ni indice) | — |
| `dr_idBloc` | b, eid, k | 204 o | (sans commentaire ni indice) | dr_blocLu |
| `dr_imageAbsente` | img | 412 o | (sans commentaire) affiche/emploie : « icône cassée — même quand le redessin recrée l · #mur, #vue-mini » | dr_imagesAbsentes |
| `dr_imageAdresse` | bi | 1213 o | E1 (R21) changer l'adresse d'une image posée — l'ancien moteur (reglages, setRef) : l'aperçu suit la frappe, « image absente de mjpc-medias · ref » ; mêmes refus qu'à la pose (3.2) | menuAtelierMur |
| `dr_imagesAbsentes` | — | 173 o | (sans commentaire) affiche/emploie : « #mur .img-sup img, #vue-mini .img-sup img » | — |
| `dr_iniVu` | ini | 742 o | (sans commentaire) affiche/emploie : « ).replace(/\d+$/,  · <small class= » | ouvrirPalette, ouvrirPart, participation, vifDernier |
| `dr_joueeIci` | H, clos | 1049 o | comme `edtProchainesDe` | dr_cloreFin, dr_lancerNeuf, dr_reprendre |
| `dr_jouerCopie` | copie | 1681 o | (sans commentaire) affiche/emploie : « heure 1 (§12.5), le nombre d » | dr_lancerNeuf |
| `dr_jourCreneauEnClair` | iso, creneau | 180 o | contrat §12.18 (réveil n°13, E4 ligne 172, avec E1) : | dr_ouvertureLegere, dr_proposer |
| `dr_journalAuto` | vite | 235 o | (sans commentaire) affiche/emploie : « Le journal de l’heure ( » | dr_copieAuto |
| `dr_lanceT` | h | 448 o | maquette p8-5g, lignes 1644-1803 | dr_dansLH |
| `dr_lancer` | classeSlug, creneau, debut, heure, sur | 2040 o | lancer : `atDrJouerClic`, ses gestes dans l'ordre, puis le lancement de la maquette | dr_lancerClic, edtLancer |
| `dr_lancerClic` | — | 468 o | « ▶ Lancer l'heure » ([data-lancer="1"], contrat §7) : E2 le rebranche sur dr_lancer (la classe, le créneau, la copie jouée, cours_actif). En attendant E2 : | — |
| `dr_lancerNeuf` | classeSlug, nom, creneau, debut, heure,  | 7418 o | (sans commentaire) affiche/emploie : « )[1]; const ch0 = (typeof dr_cheminB ===  ·  ? dr_cheminB() :  » | dr_lancer, dr_lancerSuite |
| `dr_lancerSuite` | h | 257 o | « Lancer l'heure n » de l'écran d'ouverture : la classe, le créneau et le début posés par `dr_lancer` | dr_ouvertureLegere, ouvrirOuverture |
| `dr_libGlissee` | e, h | 195 o | le libellé d'une diapo reportée (réveil n°9, E4 ligne 144, avec E1) : | vueDroite |
| `dr_lire` | chemin, cb | 108 o | le transport : lecture par secuLire, écriture par mjpcPutJson (chemin sans FIREBASE_BASE, sans .json) | _drHeureCloseAu, dr_absentsDeLaCase, dr_cloreFin, dr_cloreHeureRestee (+16) |
| `dr_lireJoue` | cb, chemin | 655 o | pour les autres territoires : relire une heure jouée telle que je l'ai écrite (E4, la Relecture d'une heure close ; E1, `dr_heureDe` pour une heure passée). `chemin` = `C` de la classe (défaut : | dr_lancerNeuf, dr_recitChargerClasse |
| `dr_lireSousObjets` | sk | 884 o | les sous-objets de la trame : B/deroule/{activites, notes, travail}. | dr_trameDe |
| `dr_lireTous` | chemins, cb | 148 o | reprendre en pleine heure : `C/etat` + `C/journal` + `H` (la règle de `_drTraceReprendre`) | dr_reprendre |
| `dr_manques` | — | 245 o | E1 (relecteur neuf n°2) : les objets manquants déclarés vivent dans leur diapo (e.manques), donc au hub avec la trame | alertesForme, droiteAtelier0, formulaireObjet |
| `dr_marqueSel` | — | 368 o | (sans commentaire) affiche/emploie : « #mur [data-p] » | dr_basculerSurl, dr_grasSoul |
| `dr_marquerJoues` | dj, slug, nom, cheminCourant | 1356 o | ce que les heures d'avant ont joué (réveil n°4, point 2) : un paquet écrit par ce module porte l'`eid` de chaque diapo jouée ; | dr_lancerNeuf |
| `dr_marquesElements` | b | 133 o | « à écrire » : l'attente des marques posées avant 14:20, jamais un texte | dr_marquesNb, elements |
| `dr_marquesHtml` | b, bi, k0, et | 2218 o | le rendu des marques dans .img-sup (crochet du socle, dans rendre) : k0 = le rang du premier élément de ce bloc dans la diapo | rendre |
| `dr_marquesNb` | b | 40 o | (sans commentaire ni indice) | rendre |
| `dr_memeFeuille` | a, b | 376 o | (sans commentaire ni indice) | dr_dejaPosee |
| `dr_minuteurFin` | — | 216 o | (sans commentaire) affiche/emploie : « ; a.className =  · ; } if (S.bandeau && /^⏱/.test(S.bandeau)) { S.bandeau =  » — touche #dr-minut-aff | dr_minuteurPoser |
| `dr_minuteurPoser` | — | 2262 o | (sans commentaire) affiche/emploie : « )) return;   const b = document.createElement( · ; b.className =  » — touche #chr, #dr-minut | — |
| `dr_minuteurPousser` | — | 198 o | (sans commentaire ni indice) | dr_minuteurFin, dr_minuteurTic |
| `dr_minuteurTic` | — | 774 o | (sans commentaire) affiche/emploie : « ; a.className =  ·  + (reste <= 60000 ?  » — touche #dr-minut-aff | dr_minuteurPoser |
| `dr_mkBloc` | bi | 230 o | le bloc image de la diapo de l'atelier, rangé : `marques` devient une propriété enregistrée (le socle la pose cachée tant qu'elle est vide) | dr_mkChanger, dr_mkPanneau, dr_poseMk |
| `dr_mkChanger` | f, bi, suite | 485 o | (sans commentaire ni indice) | dr_editeMarque, dr_poseMk, dr_setDev, dr_setSupport (+1) |
| `dr_mkDe` | b | 58 o | (sans commentaire ni indice) | dr_marquesElements, dr_marquesHtml, dr_mkPanneau |
| `dr_mkPanneau` | — | 3254 o | le panneau des marques (l'ancien « réglages » du bloc image), dans l'atelier, sur une diapo qui a une image | dr_armeMk, dr_mkChanger, dr_poseMk |
| `dr_mkRendreEnregistrable` | b | 238 o | (sans commentaire ni indice) | dr_mkChanger |
| `dr_mkTxt` | m | 59 o | pour elements() du socle : une marque dévoilable = un élément, son libellé (le récit dit « où on a repéré « … » ») | dr_marquesElements, dr_marquesHtml |
| `dr_mkUneAUne` | b | 58 o | (sans commentaire ni indice) | dr_marquesElements, dr_marquesHtml |
| `dr_monter` | hote | 171 o | (sans commentaire ni indice) | atVuesPoser |
| `dr_montrerCahier` | — | 406 o | §12.29 (2) S2 : « Montrer le cahier à la classe » — le geste d'« Aller au cahier » puis « Y aller », depuis la préparation : | — |
| `dr_nbHeures` | creneau | 189 o | le nombre d'heures de la séance : la MÊME fonction que la case de l'EDT (`edtHeuresPour`), jamais un calcul à part | dr_heurePoser |
| `dr_normaliserTrame` | E, sk | 1132 o | cadrage 4 · 2.6 (repris de la maquette, normaliserTrame) : chaque heure se termine par une diapo de rôle « fin » ; écrans sans heure = heure 1 (le site n'a pas encore d'heure prévue) | dr_reactNormaliserCopie, dr_trameDe, passerEnHeure |
| `dr_notes` | — | 39 o | (sans commentaire ni indice) | dr_donneesVues, p8EcrireNote, p8FormerNote, p8MigrerNotes (+5) |
| `dr_occurrence` | li, r, txt | 482 o | (p8-5f) les pages de l'atelier reviennent au pilote | dr_marqueSel, p8CouleurTexte, surligner |
| `dr_onglet` | v | 135 o | les onglets et la navigation du socle | atVuesAller, atVuesPoser |
| `dr_ongletClos` | — | 363 o | (sans commentaire ni indice) | dr_cloreFin |
| `dr_ongletDire` | m | 219 o | (sans commentaire ni indice) | dr_ongletClos, dr_ongletEntendre |
| `dr_ongletEntendre` | m | 995 o | le bandeau n'est que pour la session prof (jamais côté élève) | — |
| `dr_ongletProf` | — | 152 o | (sans commentaire ni indice) | dr_ongletEntendre |
| `dr_ordreOuverture` | h | 970 o | (sans commentaire) affiche/emploie : « entre pas dans l » | lancerHeure, ouvrirOuverture |
| `dr_ouPreparation` | — | 309 o | réveil n°11 (E4 ligne 152 ; C1 7.0 ter) : pendant « Préparer le cahier de textes », « Où on en est » dit la diapo où la classe est gelée (pas « Fin d'heure — en cours ») ; | — |
| `dr_ouvertureLegere` | h | 2209 o | l'écran d'ouverture léger (§12.25-2) : l'heure 1 d'une séance, ou une heure n dont l'état n'est pas au hub — la classe, le créneau, la réactivation proposée, le même bouton, la puce qui montre | dr_lancerNeuf, dr_reactRetour |
| `dr_ouvertureSur` | o, h | 330 o | ce sur quoi l'heure s'ouvre, dit tel quel (réveil n°8, E4 ligne 137 : « sur la réactivation » était un texte fixe) | ouvrirOuverture |
| `dr_ouvrirClasse` | niveau,chcle,snum,apres | 1602 o | (sans commentaire) affiche/emploie : « onglet Pilotage de l · ); }catch(e){}   /* une entrée d » — touche #atelier-ecran | dr_ouvrirLaClasse |
| `dr_ouvrirLaClasse` | niv, chcle, snum, apres | 717 o | §12.28-3 (a)(e) : l'heure d'une classe s'ouvre dans « la classe en cours » (E1, `dr_ouvrirClasse(niveau, chcle, snum, apres)`) ; | dr_reprendreCours, edtLancer |
| `dr_ouvrirTableau` | — | 575 o | « ⧉ Ouvrir le tableau » (#bvideoproj) et l'ancien « Ouvrir la vue tableau » (`sesOuvrirTableau`) : une seule fenêtre, la page elle-même. Déjà ouverte : elle passe devant. | sesOuvrirTableau |
| `dr_pageTableau` | — | 56 o | la page tableau (?vue=tableau, E3) n'a pas de chapitre ouvert : elle rend les écrans qu'elle reçoit (DR_TAB.ecrans, posés par dr_tabPoserEcran d'E3) | dr_seances, dr_trame |
| `dr_palier` | ...a | 87 o | (sans commentaire ni indice) | t5, tick |
| `dr_palierTete` | — | 193 o | §12.29 S1 : la barre ne s'ouvre plus — gardée vide parce que `dr_tout` (dr-atelier.js, E1) l'appelle encore après chaque rendu ; E1 peut retirer cet appel | sequenceHtml |
| `dr_papierFiches` | h | 1320 o | le repli : le prochain jour ouvré (comme l'ancienne fonction de la maquette, retirée avec la dette 13 · 32) | papierHtml |
| `dr_papierPreparer` | h | 552 o | imprimer n'entre pas au journal de l'heure | brancherPapier, recitHtml0, relecture |
| `dr_papierRelire` | h | 462 o | (E4 · mandat §3) LA FACE PAPIER — composée depuis le récit relu (cadrage 2 §1.9 : le papier découle du récit) Deux parties, comme l'ancien papier (moteur L1387-1404) : | papierHtml |
| `dr_papierRetirer` | — | 74 o | (E4 · relecteur neuf du site) le papier imprimé est celui de cet instant, ma version comprise ; hors de la Relecture rien n'est retenu | dr_papierPreparer, relecture |
| `dr_paquetHeure` | clos | 3607 o | (sans commentaire) affiche/emploie : « écran  » | _drPaquetHeure, dr_cloreFin, dr_traceAuto |
| `dr_parquer` | — | 154 o | (sans commentaire ni indice) | atClasseFermer, atVuesAller, atVuesPoser |
| `dr_partagerHeures` | utile | 806 o | trame en mémoire → minutes utiles de la frontière que j'y ai posée | dr_frontiereHorsClasse, dr_lancerNeuf, dr_reprendre |
| `dr_partsHeure` | h, parEid | 451 o | les prises de parole de l'heure pour son paquet : celles du VIF et de la palette (`S.parts`), et chaque réponse écrite avec son élève dans une diapo jouée cette heure — C1 4b.5 : | dr_paquetHeure |
| `dr_passePlace` | x, diapos, fin | 470 o | (sans commentaire ni indice) | passeHtml |
| `dr_photoTrame` | — | 150 o | (sans commentaire ni indice) | dr_annuler, dr_annulerCoupure, dr_annulerSuivre |
| `dr_phraseActivite` | — | 446 o | §12.30 (Paul, 27/10 08:05 : « remets la, c'était une fonctionnalité ») : la phrase de l'activité en cours, mot pour mot comme dans la barre de la ③ (l'ex-`alerteTexte`, tombée ici : | dr_phraseLigne |
| `dr_phraseLigne` | — | 189 o | (sans commentaire) affiche/emploie : «  hidden » | sequenceHtml |
| `dr_placerFins` | E, h | 344 o | tous les « Cahier de textes », pour que la reprise retrouve le même ordre | dr_appliquerHeures, dr_refaireHeures |
| `dr_placerVolet` | — | 477 o | (13, contrat §8.3) la colonne unique : le #volet du déroulé vit sous la séance dépliée de la colonne du site (.at-som-volet, posé par atSomInjecterEcrans) ; | dr_monter, dr_parquer |
| `dr_poseMk` | ev, sup | 1505 o | (sans commentaire) affiche/emploie : «  ? String(n) :  · , w, h: hh }); /* (E4 · B3) lisait  » | — |
| `dr_poserEidReactivation` | e, h, sk | 106 o | (sans commentaire ni indice) | dr_reactivationConstruire |
| `dr_ppopEcarter` | p | 1368 o | (sans commentaire) affiche/emploie : « élève ne couvre pas les boutons de la fin de l · ; }   /* toujours entière dans l » — touche #droite-fin, #fin | ouvrirPart |
| `dr_prepCahierRendre` | — | 196 o | (sans commentaire ni indice) | — |
| `dr_prepCahierVoir` | — | 240 o | (sans commentaire ni indice) | — |
| `dr_preparer` | E | 224 o | (sans commentaire ni indice) | dr_derouleDe, dr_reactModifiee, dr_reactPoser, dr_reactRetourCalculee (+6) |
| `dr_proposer` | — | 3593 o | `dr_proposer()` (contrat §12.6, relance du 21/10) : | dr_frontiereHorsClasse, dr_hclasseNom, dr_heuresParDurees, dr_lancer |
| `dr_pseudoAct` | e, i, rituel | 677 o | les activités de la fin de l'heure, et chaque diapo sans activité comme la sienne (réveil n°3, points 3 et 5 ; C1 7.0-7.1) : la trame réelle n'a pas encore d'activités ; | activitesDeLHeure, dr_activitesOuDiapos, dr_recitAct, etatActivite |
| `dr_rangSeance` | sk | 66 o | (sans commentaire ni indice) | dr_derouleDe, dr_lireSousObjets, dr_suivreSeance |
| `dr_rappelDetecter` | — | 492 o | après chaque modification de l'atelier : une fiche qui vient d'apparaître et qui est déjà dans le chapitre devient un rappel | — |
| `dr_rappelHtml` | b, bi, et | 601 o | « ↻ Rappel — … » sur la fiche (crochet du rendu, dr-socle.js) ; au pilote et au tableau ; dans l'atelier, un clic ouvre la question | rendre |
| `dr_rappelOuvrir` | bi | 2080 o | (sans commentaire) affiche/emploie : « btn${b.rappel.motif === m.c ?  ·  data-motif= » — touche #dr-rap-libre, #dr-rap-ok, #dr-rap-x | dr_rappelDetecter |
| `dr_rappelSuivre` | — | 285 o | (sans commentaire ni indice) | dr_rappelDetecter |
| `dr_reactAnnoncee` | h | 67 o | (sans commentaire ni indice) | dr_ouvertureLegere, dr_ouvertureSur, dr_reactHorsCopie |
| `dr_reactApercuRendre` | — | 2058 o | (sans commentaire) affiche/emploie : « un rendu à l · heure d » | dr_reactModifiee, dr_reactRetourCalculee, dr_reactVoir |
| `dr_reactApresCloture` | C, h, local, cb | 976 o | (1) à la clôture de l'heure h : la diapo de l'heure h+1, depuis le paquet qui vient d'être clos, dans la copie | dr_cloreFin |
| `dr_reactAvantLancement` | — | 61 o | (3) voir sans lancer : l'aperçu dans le pilote | p8ReactAvantLancement |
| `dr_reactBoutonHtml` | h | 1920 o | (sans commentaire) affiche/emploie : « rien à réactiver ·  (depuis  » | dr_ouvertureLegere, ouvrirOuverture |
| `dr_reactBrancher` | h, redessiner, retour | 551 o | (sans commentaire) touche #o-react-reg, #o-react-voir | dr_ouvertureLegere, ouvrirOuverture |
| `dr_reactCheminC` | — | 243 o | (sans commentaire ni indice) | dr_reactEcrireCopie, dr_reactVoir |
| `dr_reactChoix` | h | 103 o | (sans commentaire ni indice) | dr_ordreOuverture, dr_reactAnnoncee, dr_reactBoutonHtml, dr_reactInserer |
| `dr_reactDecal` | h | 40 o | annoncée mais pas encore dans la copie (l'heure 1) : la puce est à part | ouvrirOuverture |
| `dr_reactDejaLa` | h | 124 o | (sans commentaire ni indice) | dr_lancerNeuf, dr_ouvertureLegere, dr_reactApresCloture, dr_reactBoutonHtml (+4) |
| `dr_reactEcran` | h | 131 o | le chemin `C` de la classe connu avant le lancement (l'ouverture depuis la case) | dr_reactEcranOuPrete, dr_reactOuvertureAssurer, dr_reactPoser, dr_reactVoir |
| `dr_reactEcranDe` | eid | 100 o | (sans commentaire ni indice) | dr_reactModifiee, dr_reactRetourCalculee |
| `dr_reactEcranOuPrete` | h | 113 o | l'écran de l'heure h : celui de la copie, sinon celui tenu en mémoire (l'heure 1 : la copie n'existe pas avant le lancement) | dr_ouvertureLegere, dr_reactAnnoncee, dr_reactBoutonHtml |
| `dr_reactEcrireCopie` | C, motif, cb | 356 o | la copie de la classe réécrite (C/ecrans) — par le chemin connu, pas par `dr_copieAuto` (hors heure lancée, `dr_clPeutEcrire` refuse) | dr_reactApresCloture, dr_reactModifiee, dr_reactOuvertureAssurer, dr_reactRetourCalculee |
| `dr_reactEnteteRendre` | e | 1386 o | l'entête du pilote (`.scene > .titre`, jamais au tableau) : le retour à l'écran d'ouverture ; « ta version » + ↩ quand les blocs diffèrent de la version calculée (§12.26-5) | dr_reactApercuRendre, dr_reactModifiee |
| `dr_reactEstModifiee` | e | 257 o | (sans commentaire ni indice) | dr_reactBoutonHtml, dr_reactEnteteRendre, dr_reactModifiee, lancerHeure |
| `dr_reactHorsCopie` | h | 53 o | (sans commentaire ni indice) | dr_reactDecal, dr_reactPuceHtml |
| `dr_reactInserer` | h | 698 o | (sans commentaire ni indice) | dr_lancerNeuf |
| `dr_reactModifiee` | — | 629 o | (4) après la frappe de Paul dans la diapo (E1 l'appelle, ou `dr_sauve` enveloppé) : la copie écrite, la mention à jour | ecrireDansDiapo |
| `dr_reactNormaliser` | h, p | 456 o | l'écran rendu par E4, normalisé pour la copie : rôle, heure, eid du socle, dur, la version calculée gardée (§12.26-5) — l'objet lui-même (l'heure 1 le tient en mémoire jusqu'au lancement) | dr_reactPoser |
| `dr_reactNormaliserCopie` | E, sk | 434 o | `dr_normaliserTrame` du socle retire les écrans `reactivation` (E1, §12.26-2 : | dr_appliquerHeures, dr_heureContinue, dr_partagerHeures |
| `dr_reactOuvertureAssurer` | h, C, cb | 309 o | (7) à l'ouverture de l'heure h (état relu, l'heure d'avant close sans construite — clôture manquée) : construite maintenant, écrite dans la copie | dr_lancerNeuf |
| `dr_reactPoser` | h, p | 624 o | poser l'écran dans `seance().ecrans`, devant la première diapo de l'heure h (le socle la met en tête) ; une fois | dr_reactApresCloture, dr_reactInserer, dr_reactOuvertureAssurer, dr_reactVoir |
| `dr_reactPreparer` | h | 596 o | (sans commentaire) affiche/emploie : « la réactivation n’a pas pu être construite ( · rien de joué avant : rien à réactiver » | dr_reactEcranOuPrete, dr_reactPreparerAsync |
| `dr_reactPreparerAsync` | h, cb | 481 o | (sans commentaire) affiche/emploie : « rien de joué avant : rien à réactiver » | dr_lancerNeuf, dr_reactOuvertureAssurer |
| `dr_reactPuce` | h, n, act | 384 o | la puce « n. Où en sommes-nous ? » de l'écran d'ouverture : cliquable, elle ouvre la diapo dans le pilote sans lancer (§12.26-3) | dr_ouvertureLegere, dr_reactPuceHtml, ouvrirOuverture |
| `dr_reactPuceHtml` | h | 74 o | (sans commentaire ni indice) | dr_ouvertureLegere, ouvrirOuverture |
| `dr_reactRetour` | — | 874 o | retour à l'écran d'ouverture | dr_reactApercuRendre, dr_reactEnteteRendre |
| `dr_reactRetourCalculee` | — | 625 o | (5) ↩ : la version calculée revient (sans recalcul : `construite.calculee`), la copie est réécrite, la mention tombe | dr_reactEnteteRendre |
| `dr_reactSignature` | blocs | 157 o | les blocs `texte` comparés sans les `id` (E4, RC20 : `dr_reactivationModifiee` fait de même) | dr_reactEstModifiee |
| `dr_reactValide` | e | 86 o | (sans commentaire ni indice) | dr_reactApresCloture, dr_reactInserer, dr_reactPoser, dr_reactPreparer (+2) |
| `dr_reactVoir` | h, retour | 850 o | pour E1 : le geste d'écriture s'arme là-dessus (à l'écran d'ouverture, S est l'état relu de l'heure d'avant : S.lancee et S.close sont vrais) | dr_reactBrancher |
| `dr_reactivationCheminAvant` | — | 222 o | le chemin de la classe dans la séance d'avant (l'heure 1 d'une séance réactive la fin de la séance précédente, §12.22 b) | dr_reactivationPreparer, dr_reactivationSource |
| `dr_reactivationConstruire` | n | 3494 o | l'écran « Où en sommes-nous ? » de l'heure n, ou null (DR_REACT_RAISON dit pourquoi) | dr_reactPreparer, dr_reactivationPreparer |
| `dr_reactivationCopieBlocs` | blocs | 136 o | (§12.26-5) la version calculée, gardée dans l'écran : `construite.calculee` = les blocs à la construction (copie profonde, sans les `id` que dr_preparer pose). `dr_reactivationModifiee(e)` : | dr_reactivationConstruire, dr_reactivationRetour |
| `dr_reactivationEmpreinte` | blocs | 210 o | (sans commentaire) affiche/emploie : «  : b.txt), (b.el ·· []).map(x => (x && typeof x ===  » | dr_reactivationModifiee |
| `dr_reactivationModifiee` | e | 177 o | (sans commentaire ni indice) | dr_reactEstModifiee |
| `dr_reactivationPreparer` | h, cb, local | 1112 o | lit les paquets d'heures de la classe (cette séance, la séance d'avant), puis rend l'écran de l'heure h à cb (E2, `dr_reactPreparerAsync(h, cb)`) : | dr_reactApresCloture, dr_reactPreparerAsync |
| `dr_reactivationRetour` | e | 321 o | (sans commentaire ni indice) | dr_reactRetourCalculee |
| `dr_reactivationSource` | n | 782 o | l'heure d'avant jouée : l'heure n − 1 de cette séance, ou (n = 1) la dernière heure jouée de la séance d'avant | dr_reactivationConstruire |
| `dr_reactivationTravail` | t, dejaDites | 1349 o | le travail donné : le texte du cahier de textes de l'heure d'avant (`travailTexte` du paquet = `texteTravailED()` d'E2 : | dr_reactivationConstruire |
| `dr_reactivationsDesEcrans` | — | 157 o | (sans commentaire ni indice) | dr_etatHeure |
| `dr_recitA` | nom | 101 o | les accès (E4) : une lecture, jamais une seconde copie | dr_recitActivites, dr_recitChapitre, dr_recitClasseNom, dr_recitHeure (+2) |
| `dr_recitAHeure` | t, hm | 352 o | (sans commentaire) affiche/emploie : « , { timeZone:  · , year:  » | dr_recitHeure |
| `dr_recitAct` | e, di, h | 401 o | (sans commentaire ni indice) | dr_reactivationConstruire, recitHtml0, troisTemps |
| `dr_recitActivites` | — | 315 o | (sans commentaire ni indice) | chapitreHtml, dr_reactivationConstruire, recitHtml0, troisTemps |
| `dr_recitAuTableau` | — | 87 o | (sans commentaire ni indice) | — |
| `dr_recitAuto` | — | 694 o | (sans commentaire) affiche/emploie : « avoir lu ce qui est au hub : on n · heure, rien ne s » | — |
| `dr_recitBloc` | b | 141 o | (E4 · dette 13 · 8) ce que la classe a vu : | dr_recitEcranVu |
| `dr_recitChamps` | — | 123 o | (sans commentaire ni indice) | dr_recitChargerClasse, dr_recitHeuresTouchees |
| `dr_recitChampsEtat` | — | 400 o | (sans commentaire ni indice) | dr_recitChargerClasse |
| `dr_recitChapitre` | — | 298 o | (sans commentaire) affiche/emploie : « )[0]) */ const D = dr_recitSim(); return D ? (D.chapitre ··  » | papierHtml, recitHtml0, recitSeanceHtml |
| `dr_recitCharger` | cb | 879 o | (sans commentaire ni indice) | dr_recitAuto, relecture |
| `dr_recitChargerClasse` | slug, cb | 1325 o | (E4 · B4) + ordres, ordresEid : sans eux, relue après la clôture, l'heure perdait ses rangs (« la diapo — X », « Diapo par diapo » faux) | brancherSelecteur, dr_edtRelire, relecture |
| `dr_recitChemin` | — | 242 o | (sans commentaire) affiche/emploie : « ; } catch (e) { return  » | dr_recitAuto, dr_recitCharger, dr_recitChargerClasse, relecture |
| `dr_recitCitations` | h, di, bi, e | 800 o | (sans commentaire) affiche/emploie : « )[0] === String(bi)).forEach(x => { if (x.type ===  » | dr_papierFiches, recitHtml0 |
| `dr_recitClasseNom` | — | 462 o | (sans commentaire ni indice) | papierHtml, recitHtml0, recitSeanceHtml, relecture |
| `dr_recitClasseParDefaut` | — | 207 o | (sans commentaire ni indice) | dr_recitSelecteurHtml, relecture |
| `dr_recitClassesJouees` | — | 632 o | (sans commentaire ni indice) | dr_recitClasseParDefaut, dr_recitSelecteurHtml |
| `dr_recitCle` | h | 270 o | (relance E4, I4 tranché) C/recit est indexé par la CLÉ DE L'HEURE (_drCleHeureDe : <iso>_<créneau>_<classe>), pas par son numéro : | dr_recitAuto, dr_recitFinReel |
| `dr_recitContenuED` | rec | 124 o | le contenu de séance : le récit affiché sans le travail à faire (ni ce qui le suit, comme la maquette le coupait) | ouvrirFin, recitHtml0 |
| `dr_recitCopierED` | html, texte, ok, dire | 902 o | (sans commentaire) affiche/emploie : «  (texte simple) · )); else dire( » | brancherChapitre, ouvrirFin, recitHtml0, recitSeanceHtml |
| `dr_recitCorrections` | — | 599 o | (sans commentaire) affiche/emploie : «  ·· !c.eleve) return; const x = J.find(y => y.type ===  » | relecture |
| `dr_recitDecalage` | d | 398 o | (sans commentaire) affiche/emploie : « , { timeZone:  · , hourCycle:  » | dr_recitAHeure |
| `dr_recitDiapoDe` | o, h | 531 o | (sans commentaire) affiche/emploie : « diapo «  ·  : l; } } catch (e) {} return  » | passeHtml |
| `dr_recitDiaposParActId` | l | 249 o | (prompt d'injection §1.6) un chapitre importé déclare l'activité de chaque diapo par son `actId` ; ses `activites` n'ont pas de liste `diapos` (un JSON n'a pas d'eid) : | dr_recitActivites |
| `dr_recitDocuments` | — | 888 o | (sans commentaire) affiche/emploie : « ) : (x.o.kind ··  · ), genre: x.o.kind ··  » | docHtml, dr_docEtat, dr_documents, dr_recitOuvrirItem (+2) |
| `dr_recitEcheanceDe` | iso | 265 o | (E4 · A4) un rang tiré du journal décalait la numérotation (deux « diapo 1 ») : la diapo jouée sans rang se dit « la diapo — <son nom> » | recitHtml0 |
| `dr_recitEcranVu` | h, e | 459 o | (E4 · passe complète, 17:00) la copie au hub est au modèle du site (q, reps, etapes, legende) : dr_preparer lui rend txt / el, sinon le récit perdait légendes, questions et étapes | dr_papierFiches, dr_suiteDevoiles, recitHtml0 |
| `dr_recitEnCours` | — | 100 o | (sans commentaire ni indice) | dr_recitChargerClasse, dr_recitChemin, dr_recitJournal, dr_recitPresents (+2) |
| `dr_recitEtatDe` | h | 415 o | (sans commentaire) affiche/emploie : « ) == null ? null : g( » | dr_recitAuto, dr_recitCharger |
| `dr_recitFinReel` | h | 536 o | contrat §12.20 : la fin réelle de l'heure h — `S.finReel` (l'heure de la page, écrite par E2 au « Clore »), `S.heuresCours[h].finReel`, sinon l'horodatage de la clôture (`S.closes[h]`) ; | recitHtml0 |
| `dr_recitHDeCle` | cle | 327 o | (sans commentaire ni indice) | dr_recitCharger |
| `dr_recitHeure` | h | 1433 o | h → {jour, debut, fin, base} lus dans les paquets H de la classe (dr_recitChargerHeures) | chapitreHtml, dr_papierRelire, papierHtml, recitHtml0 (+4) |
| `dr_recitHeureBilan` | — | 229 o | (prompt d'injection §1.3) le bilan est unique et dernier : son heure est celle de la diapo `role: "bilan"`, à défaut la dernière heure de la séance — l'heure 2 était écrite en dur | recitHtml0, recitSeanceHtml |
| `dr_recitHeuresTouchees` | — | 141 o | (sans commentaire ni indice) | dr_recitAuto, dr_recitCharger |
| `dr_recitHm` | t | 150 o | (sans commentaire) affiche/emploie : « , { timeZone:  · , hour:  » | dr_recitHeure |
| `dr_recitHtmlPropre` | html | 901 o | (E4 · R22) LA COPIE POUR ÉCOLE DIRECTE EN HTML PROPRE — reprise de l'ancien copierED (moteur L1115-1141) « École Directe accepte le HTML collé : | dr_recitCopierED |
| `dr_recitJourDe` | t | 322 o | (sans commentaire) affiche/emploie : « , { timeZone:  · , weekday:  » | dr_papierRelire, dr_recitHeure |
| `dr_recitJournal` | type, x | 252 o | (E4 · relecteur 03:10) le numéro se compte dans l'ordre de la trame, continu sur la séance (cadrage 2 · 1.1 bis) : | basculerRecit, brancherChapitre, dr_corrigerReponse, gardeCopie (+2) |
| `dr_recitLibDiapo` | di, h | 404 o | (sans commentaire) affiche/emploie : « ordre de l · est pas relu : le rang se lit alors dans le journal de l » | dr_recitDiapoDe, passeHtml |
| `dr_recitLienED` | — | 251 o | (E4 · relecteur neuf du site) la classe relue, pas celle du socle | — |
| `dr_recitNature` | e, h | 429 o | (sans commentaire) affiche/emploie : « heure (suivante si le rang monte de un, retour s » | passeHtml |
| `dr_recitNumAct` | di | 391 o | (sans commentaire ni indice) | dr_recitAct |
| `dr_recitOrdres` | — | 564 o | (E4 · relecteur continu B3, cadrage 2 §2.3, cadrage 1 §4.7) « ⚠ à corriger » : dire qui a répondu ; l'entrée du journal reçoit l'élève, une entrée « reponse-corrigee » garde la trace | relecture |
| `dr_recitOuvrirItem` | id | 331 o | (sans commentaire ni indice) | dr_docHtmlRef, dr_docsPanneau |
| `dr_recitPoser` | h, o | 662 o | (sans commentaire) affiche/emploie : «  ? o.version : null); pose( · , o.moi != null ? o.moi : o.texte); pose( » | dr_recitCharger |
| `dr_recitPoserEcrans` | l | 285 o | (E4 · relecteur continu B4) les écrans de la classe relus au hub (C/ecrans) avec une heure close : un bloc écrit pendant l'heure n'est que là | dr_recitChargerClasse |
| `dr_recitPresents` | h | 399 o | (sans commentaire ni indice) | recitHtml0 |
| `dr_recitProchaines` | — | 343 o | (sans commentaire ni indice) | chapitreHtml, dr_papierRelire, recitHtml0 |
| `dr_recitRappel` | b | 232 o | (sans commentaire ni indice) | dr_papierFiches, recitHtml0 |
| `dr_recitSansRepetes` | l | 371 o | (sans commentaire) affiche/emploie : « entrée « diapo » d » | passeHtml, troisTemps |
| `dr_recitSeanceN` | sk | 328 o | (sans commentaire ni indice) | dr_recitDocuments |
| `dr_recitSeanceTitre` | — | 102 o | /classes/<classe>/ed.lien (dr_classe d'E1) ; sans valeur, rien | recitHtml0, recitSeanceHtml, relecture |
| `dr_recitSelecteurHtml` | — | 688 o | (sans commentaire) affiche/emploie : « } title= ·  style= » | relecture |
| `dr_recitSim` | — | 88 o | (sans commentaire ni indice) | dr_recitActivites, dr_recitChapitre, dr_recitClasseNom, dr_recitDocuments (+4) |
| `dr_recitSnum` | — | 265 o | (E4 · mandat §5) LES DOCUMENTS PAR RÉFÉRENCE (cadrage n°7) Les documents d'une séance sont les items de sce.items (ce que Structure connaît : ed2Documents) ; une seule copie, celle de Structure. | dr_recitClassesJouees, dr_recitDocuments |
| `dr_recitTaxo` | — | 228 o | (sans commentaire ni indice) | chapitreHtml, dr_reactivationConstruire |
| `dr_recitTexteDe` | html | 260 o | sans le travail à faire (cadrage 2 · 1.9) ni le repère de la suite (pour Paul) ; le bilan reste, comme l'ancien copierED | dr_recitCopierED |
| `dr_recitUrlDe` | it | 482 o | (sans commentaire) affiche/emploie : « ).trim(), src = it.source ··  · ; if (!ref) return  » | dr_recitDocuments |
| `dr_refRelative` | ref | 52 o | (sans commentaire) affiche/emploie : « ).replace(DR_MEDIAS,  » | dr_imageAdresse, menuAtelierMur, rendre |
| `dr_refaireHeures` | E, h, utile | 564 o | `dr_estRituel` (le rituel reconnu à son titre) est tombée le 23/10 (§12.22 a, §12.25-6) : la réactivation n'est jamais dans la trame, le site la construit | dr_heureContinue |
| `dr_reglageReactBrancher` | z | 297 o | (sans commentaire ni indice) | dr_tout |
| `dr_reglageReactHtml` | — | 701 o | E1 (§12.25 (5)) : l'entête de l'Atelier dit le réglage de la séance — ouvrir chaque heure par la réactivation, oui (le défaut) ou non — par les deux fonctions d'E2 ; un clic le change | voletAtelier |
| `dr_reglageReactivation` | sk, v, cb | 545 o | (sans commentaire) affiche/emploie : « Réglage de la réactivation de la séance » — ECRIT au hub | dr_reactBrancher, dr_reglageReactBrancher |
| `dr_reglageReactivationLu` | sk | 187 o | (sans commentaire) affiche/emploie : « ; } catch (e) { return  » | dr_reactBoutonHtml, dr_reactChoix, dr_reglageReactHtml |
| `dr_relectureVisible` | — | 101 o | (sans commentaire) touche #ecran-relecture | — |
| `dr_remplacerNieme` | h, e2, n, f | 157 o | (sans commentaire ni indice) | surligne |
| `dr_rendreMur` | et, ecran, cible | 567 o | le rendu, unique pour la fenêtre locale, l'appareil distant et la vue « ⧉ Tableau » : `rendre` du socle | dr_tabMontrer, dr_tabPoser, dr_tabRecevoir |
| `dr_reprendre` | cb | 4043 o | (sans commentaire) affiche/emploie : « une après l · onglet fermé n » | dr_lancer, dr_reprendreQuandPret |
| `dr_reprendreCours` | c | 453 o | (sans commentaire ni indice) | dr_edtReprendre, sesReprendre |
| `dr_reprendreQuandPret` | cb, essai | 362 o | contrôle n°68 (E3 retour 60 : « Reprendre » sans l'heure à 1536 / 1920) : | dr_reprendreCours |
| `dr_restaurer` | j | 592 o | remettre dans la page l'état d'une heure jouée, décodé (`dr_lireJoue`) : S, les dévoilements, le journal ; les rangs refaits | dr_lancerNeuf, dr_reprendre |
| `dr_resteHeure` | acts, derniere | 830 o | §12.28 (8), 13 · 46 — LE compte de « ce qui reste » pour l'heure en cours, un seul : celui de l'étape 2 de « Fin de l'heure ». | ouvrirFin |
| `dr_rx` | re | 184 o | (E4 · relecteur neuf 1) en JavaScript, \b ne connaît pas les lettres accentuées : « poètes » contenait le mot « tes » (→ « poèses »), « cinéma » le mot « ma ». | eleveDitJe |
| `dr_saisir` | question, defaut, cb, libOk | 933 o | (sans commentaire) affiche/emploie : « ); if (v) cb(v); return; }   atModaleChoix( ·  + dr_esc(question) +  » — touche #dr-saisie | brancherDeclare, dr_imageAdresse |
| `dr_sauve` | — | 143 o | l'écriture : dr_sauve (débounce 900 ms, comme atDrEnrAuto), témoin « Enregistré à … » (atDrEnrConfirme) | dr_annuler, dr_mkChanger, dr_rappelOuvrir, ecrireDansDiapo (+1) |
| `dr_sauveAvantDepart` | — | 81 o | E1 (relecteur neuf n°2) : | — |
| `dr_sauveMaintenant` | — | 1479 o | (sans commentaire) affiche/emploie : « atelier ouvert pendant l · écrit lui-même (dr_copieAuto se tait tant que l » | dr_sauveAvantDepart, voir |
| `dr_scene` | et | 694 o | (sans commentaire ni indice) | dr_sceneAuto |
| `dr_sceneAuto` | vite | 513 o | (sans commentaire) affiche/emploie : « La scène du tableau (ce que voit la classe) » | dr_coursEcrire, dr_minuteurPousser, dr_tabVeiller, dr_versMur |
| `dr_seCite` | suite | 352 o | (sans commentaire ni indice) | narrativiser, recit |
| `dr_seance` | sk | 78 o | (sans commentaire ni indice) | dr_derouleDe, dr_lireSousObjets, dr_recitClassesJouees, dr_recitDocuments (+6) |
| `dr_seances` | — | 203 o | la vue d'une séance telle que la maquette la lisait (DATA.seances[si] = {titre, ecrans}) : un regard, pas une copie | alertesChapitre, arreterRepetition, dejaVue, dr_donneesVues (+9) |
| `dr_selEcrire` | — | 571 o | (sans commentaire ni indice) | dr_selMenu |
| `dr_selMenu` | — | 1311 o | (sans commentaire) affiche/emploie : « btn rouge ·  title= » — touche #dr-sel-menu | — |
| `dr_selPeindre` | — | 296 o | (sans commentaire ni indice) | — |
| `dr_selSup` | — | 810 o | (sans commentaire ni indice) | dr_selMenu |
| `dr_selVide` | — | 171 o | [{bi, ei}] — ei null : le bloc entier | dr_selEcrire, dr_selMenu, dr_selSup |
| `dr_sessionEtat` | ok | 768 o | le témoin « ● session » (relance F8 : `sesBandeau`/`sesBandeauEtat` tombent ; E1 pose `#dr-session` dans `.haut`, je le remplis) | dr_sceneAuto |
| `dr_setDev` | v | 47 o | (sans commentaire ni indice) | dr_mkPanneau |
| `dr_setSupport` | v | 66 o | (sans commentaire ni indice) | dr_mkPanneau |
| `dr_suiteDe` | l | 260 o | (sans commentaire) affiche/emploie : « ); if (l.length === 2) return l[0] +  ·  + l[1]; return l[0] +  » | troisTemps |
| `dr_suiteDevoiles` | h, t | 1072 o | (sans commentaire) affiche/emploie : « la réponse attendue vue en classe était : «  · on a dévoilé «  » | suiteDepuis |
| `dr_suivreBarre` | v | 295 o | la barre du site suit la vue de la maquette (voir() est appelée aussi par la répétition, la clôture…) | voir |
| `dr_suivreHauteurs` | — | 607 o | E1 (relecture continue d'E4) : | dr_tout |
| `dr_suivreP` | di, f | 453 o | E1 (R13) la mise en forme (e.forme) vise un élément par « bloc.élément » : elle suit le geste comme les notes | p8NotesBloc, p8NotesElement |
| `dr_suivreSeance` | — | 271 o | la séance de la colonne devient celle du déroulé (ATVUES.snum ↔ S.si) | atVuesPoser, dr_demarrer |
| `dr_supMk` | k, bi | 73 o | (sans commentaire ni indice) | dr_mkPanneau |
| `dr_tabAdresse` | — | 855 o | (sans commentaire) affiche/emploie : « ); d.className =  · ;   d.innerHTML =  » — touche #dr-tab-adr-boite | — |
| `dr_tabAnnee` | d | 96 o | (sans commentaire ni indice) | dr_tabAttendre |
| `dr_tabAttendre` | — | 799 o | (sans commentaire) affiche/emploie : «  && (p.classeNom ·· p.classe);     dr_tabDireClasse(c ?  ·  + String(p.creneau ··  » — hub /site/edt/calendrier/ | dr_tabDemarrer |
| `dr_tabCaseDuMoment` | grille, cal, classes, d, niveau | 1255 o | (sans commentaire ni indice) | dr_tabAttendre |
| `dr_tabCheminC` | c | 119 o | le distant : le cours trouvé, on lit la copie jouée, puis la scène toutes les 900 ms et le pointeur toutes les 3 s | dr_tabMonter, dr_tabSonder |
| `dr_tabCle` | classes, nom | 818 o | §12.31 (13 · 51) : une classe se trouve par son nom comme par sa clé. Une seule règle, celle d'`edtCleClasse` (E1) : le nom s'il est une clé ; sinon la clé dont `nom` est égal ; | dr_tabCaseDuMoment |
| `dr_tabDemarrer` | — | 475 o | l'entrée de la page tableau — appelée par `sesBootTableau` | sesBootTableau |
| `dr_tabDireClasse` | t | 126 o | la ligne du bas de l'attente : la classe attendue, ou celle du cours trouvé ; vide, elle disparaît (appelée par `sesTabChercherCours`, `sesTabVeillePointeur`) | dr_tabAttendre, sesTabChercherCours, sesTabVeillePointeur |
| `dr_tabIso` | d | 122 o | (sans commentaire) affiche/emploie : «  + String(d.getMonth() + 1).padStart(2,  ·  + String(d.getDate()).padStart(2,  » | dr_tabCaseDuMoment |
| `dr_tabLire` | chemin, cb | 145 o | la lecture : `dr_lire` du socle (secuLire, mode test) — `sesGet` tombe (relance C5) | dr_tabAttendre, dr_tabLireSeance, dr_tabMonter, dr_tabPointeur (+3) |
| `dr_tabLireSeance` | c | 529 o | la séance du chapitre (relance M2), lue par `dr_lire(B)` : ses `items` (les documents par référence d'E4) ; | dr_tabMonter |
| `dr_tabMonter` | — | 495 o | (sans commentaire ni indice) | sesTabChercherCours, sesTabVeillePointeur |
| `dr_tabMontrer` | o | 407 o | l'identité fait foi : si le rang reçu ne désigne pas la même diapo dans MA copie, on la retrouve par son eid | dr_tabSonder |
| `dr_tabMur` | — | 43 o | CÔTÉ TABLEAU (`?vue=tableau`, `&local=1`) | dr_rendreMur |
| `dr_tabPeutEcrire` | — | 587 o | la scène au hub : `C/scene` = `et` + {eid, origine, ts, trameMaj} (mandat point 3) | dr_sceneAuto, dr_tabVeiller |
| `dr_tabPointeur` | — | 192 o | la règle (relance F2/I1) : une scène n'est acceptée que si la clé de cours de `cours_actif` est celle de ce cours ; le « pilote présent » n'existe pas — sans scène neuve, l'image reste | dr_tabMonter |
| `dr_tabPoser` | — | 2216 o | la page tableau : on cache le site, on pose l'attente, le mur et le témoin « interrompu » | dr_tabDemarrer |
| `dr_tabPoserBoutons` | — | 510 o | (sans commentaire) affiche/emploie : « ; q.type =  · ; q.textContent =  » — touche #bvideoproj, #dr-tab-adr | dr_tabVeiller |
| `dr_tabPoserEcran` | et, ecran | 354 o | l'écran reçu (avec l'état, ou relu dans `C/ecrans`) devient celui que le rendu du socle lit (dans la maquette : `DATA.seances[si].ecrans[di]`, que la fenêtre écrivait elle-même, l. 1810) | dr_rendreMur |
| `dr_tabRecevoir` | ev | 521 o | la fenêtre locale : elle reçoit l'état du pilote par `postMessage` et ne lit jamais le hub | — |
| `dr_tabSansEcranDuProf` | — | 296 o | (sans commentaire ni indice) | — |
| `dr_tabSonder` | — | 1786 o | (sans commentaire) affiche/emploie : « Pilotage interrompu à  · , { hour:  » — touche #ses-tab-perdu | dr_tabMonter, sesTabPoll |
| `dr_tabTemoin` | — | 248 o | le témoin de la vue « ⧉ Tableau » (réveil n°3 (b) ; cadrage 1 §1.8 : le libellé seulement si un support est connecté) : « tableau en Win K » n'existe que si la fenêtre du tableau est ouverte ; | dr_tabVeiller |
| `dr_tabTrame` | — | 96 o | (sans commentaire ni indice) | dr_seances, dr_trame |
| `dr_tabVeiller` | — | 1294 o | (sans commentaire) affiche/emploie : « appelle pas `pousser` — « qui a participé », s · ; try { const t = (typeof dr_trame ===  » — touche #vue-temoin | — |
| `dr_tableauLie` | lire, ecrire, longueur, couper | 1120 o | dr_blocLu : le bloc du site lu TEL QUEL par le rendu de la maquette (qui lisait {t, bid, txt, el}). Un seul sens, à la lecture : des accesseurs non énumérables posés sur l'objet du site lui-même ; | dr_blocLu |
| `dr_taxo` | — | 781 o | la taxonomie du site (CH.taxo, chargée par chChargerTaxo), lue sous la forme de la maquette {id, prof, eleve, familles[{…, notions[]}]} | choixNotion, dr_demarrer, dr_donneesVues, libNotion (+4) |
| `dr_temoinEnregistre` | — | 224 o | E1 (relecteur neuf 1) : le témoin dit ce que le hub a reçu — « ✔ enregistré » quand dr_sauve a été accepté (son rappel), jamais à une minuterie | dr_copieDepuisAtelier, dr_etatAtelierMaintenant, dr_sauveMaintenant |
| `dr_temoinHub` | — | 489 o | E1 (réveil n°3, 3) : le déroulé écrit souvent (la classe toutes les 900 ms) — le bandeau « Enregistré à … » du site, posé à chaque écriture acceptée, couvrait les pastilles et ne disparaissait plus. | dr_ecrire, dr_etatAtelierMaintenant |
| `dr_temoinIntegre` | em | 633 o | (sans commentaire) affiche/emploie : « ; const t = document.getElementById( · ● déroulé intègre » — touche #dr-integre | dr_copieAuto, dr_temoinPoser |
| `dr_temoinPoser` | — | 416 o | (sans commentaire) affiche/emploie : « ); if (!h ·· document.getElementById( · )) return; const t = document.createElement( » — touche #dr-integre, #hou | — |
| `dr_temoinTest` | — | 583 o | (sans commentaire) affiche/emploie : « « Enregistré à … » */ const t = document.getElementById( · ); const test = typeof m8TestOn ===  » — touche #dr-enr | dr_temoinHub |
| `dr_tempsUtile` | creneau, debut | 119 o | le temps utile : la fin, moins le début, moins les cinq minutes d'agenda (CADRAGE-TEMPS §4) | dr_lancer, dr_paquetHeure, ouvrirOuverture |
| `dr_tirer` | poignee, cote | 1165 o | (sans commentaire) affiche/emploie : « ); document.body.style.cursor =  · ; });   dr_ecouteDoc( » | — |
| `dr_tout` | — | 7229 o | (sans commentaire) affiche/emploie : « état de l · heure dans l » | ajouterBloc, aller, allerAuCahier, allerSuivante (+87) |
| `dr_toutLire` | — | 242 o | (sans commentaire ni indice) | dr_activites, dr_demarrer, dr_notes, dr_trameDe (+1) |
| `dr_traceAuto` | vite | 494 o | (sans commentaire) affiche/emploie : « écrase (audit C5) */     dr_lire(ch +  · Heure de cours —  » | _drTraceAuto, dr_copieAuto |
| `dr_traceReprendre` | cb | 749 o | la relance dans le même créneau reprend la trace (`_drTraceReprendre`) : le début réel revient ; une trace d'une autre classe ou d'un autre créneau n'est pas reprise (elle se dit, l'heure part à neuf) | _drTraceReprendre, dr_lancerNeuf |
| `dr_trame` | — | 465 o | (sans commentaire ni indice) | _drEidDuRang, _drRangDeLEid, _drRangPere, dr_tabVeiller |
| `dr_trameDe` | sk | 589 o | la trame d'une séance : B/deroule.ecrans, identifiée (eid) et lue par le rendu (dr_preparer) — jamais copiée | atSomEcransDe, dr_dejaPosee, dr_toutLire, dr_trame (+1) |
| `dr_trameJouee` | — | 23 o | (sans commentaire ni indice) | dr_trame |
| `dr_travail` | — | 41 o | (sans commentaire ni indice) | brancherDeclare, dr_donneesVues, dr_travailHeure, droiteAtelier0 (+2) |
| `dr_travailHeure` | h | 644 o | `H.travail` (contrat §12.9) depuis les décisions de l'heure — relecteur neuf n°3 (1) : | dr_paquetHeure |
| `dr_typo` | html | 269 o | (sans commentaire) affiche/emploie : «  + t.replace(/[ \u00a0]+([?!:;»])/g,  · ).replace(/«[ \u00a0]+/g,  » | papierHtml, relecture |
| `dr_versHub` | x | 1187 o | (sans commentaire) affiche/emploie : «  && (x.type != null ·· x.eid != null) && typeof S ===  ·  && typeof v ===  » | dr_etatHeure, dr_paquetHeure |
| `dr_versMur` | et, x | 1359 o | le crochet du socle (relance F7 / C1) : `pousser` (après le journal), `fermerFiche`, la sortie de l'atelier et la répétition appellent `dr_versMur(et)` — ou `dr_versMur(null, {sortie:true})`. | dr_auMur, pousser |
| `dr_versReponse` | bi | 684 o | (sans commentaire ni indice) | — |
| `dr_versementDansLOrdre` | — | 439 o | réveil n°13 (E4 ligne 165) : l'étape 5 liste les diapos modifiées dans l'ordre de l'heure (la liste d'E1 suit l'ordre du tableau des écrans : la diapo 5 avant la diapo 1) | — |
| `dr_vifAbsent` | v | 453 o | le VIF (le pont L16417-16498) : les pastilles candidates s'allument ; un seul élève ouvre sa fiche et le curseur va dans la note ; Entrée ouvre la fiche du premier ; Échap vide ; « posé : | — |
| `dr_vifChoisir` | m | 239 o | (sans commentaire) affiche/emploie : « ); pop.querySelectorAll( · ).forEach(b => b.classList.toggle( » | — |
| `dr_vifDire` | — | 429 o | (sans commentaire) affiche/emploie : « ;   d.innerHTML = m ?  · 1, 2, 3… choisit le motif · Entrée pose <b>«  » | dr_vifChoisir, ouvrirPart |
| `dr_vifMontrer` | — | 702 o | (sans commentaire) touche #droite, #part, #vif | — |
| `dr_vueSeance` | k | 499 o | (sans commentaire) affiche/emploie : « , { get: () => sce.title ·· sce.titre ··  · , enumerable: true }); Object.defineProperty(v,  » | dr_seances |
| `dr_zone` | — | 61 o | la zone : #dr-zone, créée une fois (dr-gabarit.js), garée dans <body> tant que le déroulé n'est pas montré. Le site peut effacer sa zone (`at-zone`) quand il veut : | dr_actif, dr_dimensionnerZone, dr_monter, dr_parquer (+4) |


## EMPLOI DU TEMPS — grille, calendrier, créneaux, cases, lancement (8.73.0 → 8.75.0)

| fonction | args | taille | ce qu'elle fait | appelée par |
|---|---|---|---|---|
| `edtAbsence` | cle,nomEleve | 581 o | le geste du QCM, repris tel quel : un clic marque, un clic défait | edtAbsencesHtml |
| `edtAbsencesHtml` | cle,c | 805 o | (sans commentaire) affiche/emploie : « <div class= · >Aucun élève dans cette classe.</div> » | edtPeindreModale |
| `edtAjouterHeure` | cle,cible | 283 o | (sans commentaire) affiche/emploie : « heure ajoutée sur un créneau libre \u2014  » | edtChoisirOu |
| `edtAlerteInjection` | — | 368 o | (sans commentaire ni indice) | edtPeindrePanneau |
| `edtAller` | n | 169 o | (sans commentaire ni indice) | edtTeteHtml |
| `edtAmorce` | famille,el,classe | 293 o | L'AMORCE — préfixe + condensé du contenu au moment de la pose, suffixé par la classe quand l'élément en dépend. | edtPoserIds |
| `edtAnneeColonnes` | — | 251 o | (sans commentaire ni indice) | edtPeindreAnnee |
| `edtAnneeDetail` | b | 275 o | (sans commentaire) affiche/emploie : «      +escapeHtml(edtJourEnClair(b.getAttribute( » | edtPeindreAnnee |
| `edtAnneeEvenements` | — | 556 o | (sans commentaire ni indice) | edtPeindreAnnee, elfEssDuNiveau |
| `edtAnneeFerie` | iso | 120 o | (sans commentaire ni indice) | edtPeindreAnnee |
| `edtAnneeHauteurs` | — | 613 o | la hauteur d'un bandeau se calcule APRÈS la peinture : elle dépend des lignes qu'il couvre, et les jours aplatis n'ont pas la même hauteur que les autres. | edtAnneeZoom, edtPeindreAnnee |
| `edtAnneeVacance` | iso | 134 o | (sans commentaire ni indice) | edtPeindreAnnee |
| `edtAnneeZoom` | on | 162 o | (sans commentaire) touche #edt-ecran | — |
| `edtAnnulerDecision` | cle | 1209 o | (sans commentaire) affiche/emploie : « état d · retour arrière —  » | edtPeindreModale |
| `edtApercu` | voie,o | 479 o | (sans commentaire) affiche/emploie : «  semaines,  ·  périodes sans cours,  » | edtPeindrePanneau |
| `edtApparier` | entrants,existants,famille,classe | 1823 o | APPARIEMENT — quatre temps, dans cet ordre, et biunivoque. Rend {fort:[…], faible:[…], arrivent:[…], disparaissent:[…], ambigus:[…]} Le FAIBLE n'est jamais appliqué : il est PROPOSÉ. | edtReconduire |
| `edtApparierNom` | nomGrille,nomHub | 498 o | apparier toutes les cases qui portent le même nom de grille, d'un seul geste | edtPeindrePanneau |
| `edtAppliquerCreneaux` | — | 414 o | ② LES CRÉNEAUX — l'EDT devient la source, le dur devient le repli | edtCharger, edtCreneauPoser, edtInjInjecter, edtInjecterAvecLaGrille |
| `edtArchiver` | motif,chemin,data | 161 o | ARCHIVAGE — le modèle du site (chInjecterConfirme) : on archive AVANT, et on ABANDONNE si l'archivage échoue. Il n'y a pas d'exception « ajout pur ». | edtEcrireArchive, edtMettreANiveau |
| `edtArriveeProf` | — | 408 o | LA PORTE ① : L'ARRIVÉE DU PROFESSEUR « j'arrive en classe, je me connecte sur le site, et là, je dois aller vite. » L'EDT s'ouvre PAR-DESSUS l'accueil, jamais à la place : | loginAsProf |
| `edtAujourdhui` | — | 95 o | (sans commentaire ni indice) | edtAlerteInjection, edtAller, edtCasesCourantes, edtDecisionsOrphelines (+16) |
| `edtAujourdhuiAller` | — | 37 o | (sans commentaire ni indice) | edtTeteHtml |
| `edtAvancement` | nomClasse | 198 o | (sans commentaire ni indice) | edtDivergence |
| `edtBandeauHtml` | lundi,lettre | 1365 o | (sans commentaire) affiche/emploie : « <span class= · >calendrier non injecté</span> » | edtPeindreSemaine |
| `edtBasculable` | v | 66 o | (sans commentaire ni indice) | edtBasculerClassement, edtBasculerStatut |
| `edtBasculerClassement` | cle | 428 o | [⑤c] LES DEUX BASCULES. Le choix de Paul est ÉCRIT : il survit à tout, et il ne se rediscute pas au chargement suivant. | edtPeindreModale |
| `edtBasculerStatut` | cle | 422 o | (sans commentaire) affiche/emploie : « déclarée justifiée · déclarée non justifiée » | edtPeindreModale |
| `edtBlocBanaliser` | cle | 580 o | [⑨a] LE BLOC « BANALISER », SORTI DE LA MODALE POUR SERVIR DEUX FOIS : sur une case vierge, et sur une case qui porte déjà une décision. | edtPeindreModale |
| `edtBlocDatesAnnee` | — | 1827 o | (sans commentaire) affiche/emploie : « ;   return  ·  class= » — touche #edt-date-debut | edtSectionPanneau |
| `edtCarteClic` | nom | 107 o | (sans commentaire) affiche/emploie : « Profil de la classe  ·  \u2014 il arrive au lot suivant. » | edtCartesHtml |
| `edtCartesHtml` | lundi | 1442 o | (sans commentaire) affiche/emploie : « <div class= ·  onclick= » | edtPeindreMois, edtPeindreSemaine |
| `edtCaseClic` | cle | 40 o | (sans commentaire ni indice) | edtPeindreMois, edtPeindreSemaine |
| `edtCasesA` | iso | 569 o | (sans commentaire) affiche/emploie : « ESSAI n » | edtCasesCourantes, edtCasesDuJour, edtDecisionsOrphelines |
| `edtCasesCourantes` | — | 38 o | (sans commentaire ni indice) | edtCartesHtml, edtDivergence, edtNiveauxConnus, edtPeindreAnnee |
| `edtCasesDuJour` | iso | 1139 o | (sans commentaire) affiche/emploie : « );     if(lettre&&s!== » | edtCreneauxLibresLe, edtCreneauxOu, edtHeuresDeLEvenement, edtOccupantDe (+6) |
| `edtCellule` | cle | 45 o | (sans commentaire ni indice) | dr_edtRelire, dr_edtReprendre, edtAbsence, edtAjouterHeure (+15) |
| `edtCelluleCorps` | c | 2966 o | (sans commentaire) affiche/emploie : « <div class= ·  title= » | edtCelluleHtml |
| `edtCelluleHtml` | c | 448 o | (sans commentaire) affiche/emploie : « elle soit en couleur ». Une couleur, rien d · est pas réécrit — on      ajoute une classe au bloc qu » | edtPeindreSemaine |
| `edtChangementsDe` | existant,entrant,famille | 477 o | [③b] CE QUI CHANGE ENTRE DEUX OBJETS APPARIÉS, nommément. La comparaison se fait sur la valeur normalisée, mais Paul lit SON texte, pas le normalisé. | edtDifferentielHtml, edtPhraseFaible |
| `edtChangerEmploiDuTemps` | cleSource,iso,creneau,effet | 1463 o | ① le geste durable : une version datée, et RIEN d'autre | edtValiderDepot |
| `edtChapitreEnCours` | nomClasse,fil | 545 o | le chapitre en cours d'une classe, pour un fil donné | edtFileDAttente |
| `edtChargeInscrire` | nom,fn | 38 o | (sans commentaire ni indice) | — |
| `edtCharger` | apres | 1261 o | (sans commentaire) affiche/emploie : « affiche sans identité), puis n · attend pas le réseau : l » | dr_edtAssurer, edtArriveeProf, edtOuvrir, edtSectionPanneau |
| `edtChargerChapitres` | niveaux,apres | 919 o | (sans commentaire ni indice) | dr_edtAssurer, edtOuvrir |
| `edtChargerClasses` | apres | 79 o | /classes, lu par l'EDT lui-même : il ne dépend d'aucun chargement fait ailleurs dans le site (mesuré au banc : `classesData` peut être vide quand l'EDT s'ouvre). | dr_edtAssurer, edtOuvrir, edtSectionPanneau |
| `edtChargerDatesAnnee` | apres | 592 o | (sans commentaire) affiche/emploie : « exception ① du contrat,      et la garde n · être élargie d » — hub /site/config/brevetDates/debutAnnee | edtBlocDatesAnnee, edtCharger |
| `edtChemin` | objet,annee | 51 o | (sans commentaire) hub /site/edt/ | edtApparierNom, edtBlocDatesAnnee, edtCharger, edtCreneauPoser (+10) |
| `edtCheminTrace` | nomClasse,iso,creneau | 788 o | LA TRACE D'UNE HEURE, ET SON CHEMIN (pour y écrire les absents) | dr_edtRelire, dr_edtReprendre, edtAbsence, edtAbsencesHtml |
| `edtChercherTrace` | nomClasse,iso,creneau | 274 o | (sans commentaire ni indice) | edtPeindreAnnee, edtProjeter, edtTraceExiste |
| `edtChoisirOu` | cle,valeur | 279 o | (sans commentaire) affiche/emploie : « )return edtAjouterHeure(cle,p[0]+ » | edtPeindreModale |
| `edtCibleSous` | x,y | 237 o | (sans commentaire ni indice) | edtGlisserDebut |
| `edtClassementDe` | categorie | 264 o | (sans commentaire ni indice) | edtSansSeance |
| `edtClassesDuHub` | — | 202 o | L'APPARIEMENT — la grille nomme « 3 FRANKLIN Aretha », le hub ne la connaît pas encore (les classes n'arrivent qu'en tout dernier). Tant que le champ est vide, la case s'affiche mais ne projette rien : | edtPeindrePanneau |
| `edtCleClasse` | nom | 559 o | E1 (§12.31-1, dette 13 · 51) : | dr_classe, dr_tabCle, edtClesHeureTrace, edtDecisionsOrphelines (+3) |
| `edtCleHeure` | iso,creneau,nomClasse | 96 o | (sans commentaire ni indice) | edtAjouterHeure, edtAnnulerDecision, edtBasculerClassement, edtBasculerStatut (+10) |
| `edtClesHeureTrace` | iso,creneau,nomClasse | 226 o | E1 (§12.31-1 ter) : LA CLÉ D'UNE HEURE JOUÉE — le déroulé l'écrit sous la CLÉ de la classe (`_drCleHeureDe` : `classeSlug`, [.#$[]/ et blancs] → « _ ») ; | edtCheminTrace, edtSeanceDeTrace, edtTraceDe |
| `edtCochesDeLEvenement` | id | 289 o | [②] TOUTES LES COCHES POSÉES PAR UN ÉVÉNEMENT, où qu'elles soient, même si l'événement ne recouvre plus ces heures-là. Rien n'est jamais supprimé en silence : ce qui n'est plus à sa place est NOMMÉ. | edtCochesDeplacees, edtDifferentielHtml, edtInjInjecter, edtReconduire |
| `edtCochesDeplacees` | ev | 248 o | [②] LES COCHES QUI NE SONT PLUS SOUS L'ÉVÉNEMENT : il a bougé, ou la grille a changé sous lui. Elles restent au magasin, et le site les compte à voix haute. | edtPeindreCalendrier |
| `edtCondense` | txt | 137 o | condensé déterministe (FNV-1a 32 bits, base 36) — identique sur tous les appareils de Paul. Il ne sert QU'À LA POSE. | edtAmorce |
| `edtCopierPrompt` | voie | 977 o | [④a] UN SEUL BOUTON, UN SEUL COLLAGE. Si le presse-papier refuse, le site le DIT et ouvre le texte à sélectionner — jamais un bouton qui ne fait rien. | edtPeindrePanneau |
| `edtCoutParNiveau` | ev | 233 o | (sans commentaire ni indice) | edtPhraseCout |
| `edtCreneauMaintenant` | — | 177 o | (sans commentaire ni indice) | edtPeindreSemaine, edtTeteHtml |
| `edtCreneauPoser` | id,champ,valeur | 475 o | (sans commentaire) affiche/emploie : « état d · );   edtEcrireArchive( » | edtPeindrePanneau |
| `edtCreneauxLibresLe` | iso,c | 330 o | (sans commentaire ni indice) | edtDepot |
| `edtCreneauxOu` | c,jours | 1483 o | (sans commentaire) affiche/emploie : « arrête à la fin d · +k});       else if(!pris[k])out.push({v:iso+ » | edtDestinationsPour, edtPeindreModale |
| `edtDateCourte` | iso | 182 o | (sans commentaire) affiche/emploie : « ];   var d=new Date(iso+ · ); if(isNaN(d))return iso;   return J[(d.getDay()+6)%7]+ » | edtCreneauxOu, edtPeindreSemaine, edtPoserQuestionDepot |
| `edtDateLisible` | iso | 325 o | (sans commentaire ni indice) | edtPeindreModale, edtPeindreSemaine, edtTeteHtml |
| `edtDatePose` | v | 112 o | (sans commentaire) affiche/emploie : « ;   var d=new Date(v.pose);   return d.getDate()+ » | edtPeindreCalendrier |
| `edtDatesEnClair` | debut,fin | 268 o | (sans commentaire) affiche/emploie : « );   if(a[1]===b[1])return Number(a[2])+ · );   return edtJourEnClair(debut)+ » | edtPeindreCalendrier |
| `edtDebutAnnee` | — | 78 o | (sans commentaire ni indice) | edtEcheancesPhoto, edtNormaliserGrille, edtVersions |
| `edtDecisionPour` | nomClasse,iso,creneau | 125 o | (sans commentaire ni indice) | edtBasculerClassement, edtBasculerStatut, edtEvenementJustifie, edtHeurePerdue (+7) |
| `edtDecisions` | — | 77 o | les décisions au hub | edtAnnulerDecision, edtCochesDeLEvenement, edtDecisionsOrphelines, edtEcrireDecision (+16) |
| `edtDecisionsOrphelines` | — | 622 o | [③b] LA CLASSE RENOMMÉE. Mesuré en ② : la clé d'une décision porte le nom de la classe ; si Paul renomme, ses décisions restent lisibles sous l'ancien nom et la nouvelle en compte zéro. | edtPeindrePanneau |
| `edtDeplacerVers` | cle,cible | 552 o | (sans commentaire) affiche/emploie : « Reprise ou rattrapage · heure déplacée vers le  » | edtChoisirOu, edtValiderDepot |
| `edtDepot` | cleSource,dst | 497 o | (sans commentaire) affiche/emploie : « Dépôt refusé :  · Aucun créneau libre le  » | edtGlisserDebut |
| `edtDestinationsPour` | nomClasse,iso,creneau | 394 o | [⑥c] REPLACER POUR DE BON. L'heure à replacer est POSÉE sur une destination : elle est ajoutée là-bas, et elle cesse de compter comme heure perdue ici — pas seulement de figurer au rappel. | edtRappelAReplacerHtml |
| `edtDiffPeriodes` | neuves | 505 o | Ce que la réinjection ferait aux périodes — DIT AVANT le geste, jamais après. Le site ne perd rien en silence : « tu vois exactement ce qui sera écrit ». | edtPhraseDiffPeriodes |
| `edtDifferentielHtml` | diff | 3055 o | [③b] LE DIFFÉRENTIEL NOMINATIF — Paul voit AVANT d'appuyer : ce qui arrive, ce qui a seulement bougé, ce qui disparaît (et ce que ça emporte de coches), et ce qui garde ses décisions. | edtPeindrePanneau |
| `edtDireJalon` | texte | 48 o | (sans commentaire ni indice) | — |
| `edtDivergence` | nomClasse | 1185 o | (sans commentaire) affiche/emploie : « est ce que CETTE classe a perdu et pas l · dans les temps » | edtCartesHtml |
| `edtEchangerHeures` | cleSource,dst | 1048 o | [⑥a] L'ÉCHANGE — quatre décisions, UNE seule écriture, archive avant. Les deux départs portent `deplaceeVers` : ni l'une ni l'autre classe ne perd d'heure. | edtTroisIssues |
| `edtEcheanceDue` | — | 147 o | LA SEULE ÉCHÉANCE QUI COMPTE : la dernière échue. On ne rattrape pas le passé — ouvrir le site en janvier ne fabrique pas après coup la photo de la rentrée. | edtPhotoAuto |
| `edtEcheancesPhoto` | — | 474 o | [⑧a] LES ÉCHÉANCES — la rentrée, puis chaque début de période. Elles sont DÉCLARÉES, jamais déduites : la date de l'année d'un côté, le magasin des périodes de l'autre. Aucune période saisie : | edtEcheanceDue |
| `edtEcraserHeure` | cleSource,dst | 992 o | [⑥a] L'ÉCRASEMENT — Paul prend le créneau, et l'heure évincée devient une heure À REPLACER : motif déclaré en ⑤b, statut non justifié, basculable. Elle n'est pas perdue : le rappel arrive en ⑥b. | edtTroisIssues |
| `edtEcrireArchive` | motif,chemin,avant,valeur,libelle,apres | 738 o | [③] ARCHIVER AVANT D'ÉCRASER — pour TOUTE écriture qui remplace un état existant. Le modèle est celui de la mise à niveau : on archive, et si l'archivage échoue on n'écrit RIEN et on le dit. | edtAbsence, edtApparierNom, edtCreneauPoser, edtEcrireDecision (+7) |
| `edtEcrireBrevet` | cal | 812 o | (sans commentaire) affiche/emploie : « ,edtV.slice(0,10),        · )return;     var d=String(b[niv]·· » — hub /site/config/brevetDates/ — ECRIT au hub | edtInjInjecter |
| `edtEcrireDecision` | nomClasse,cleHeure,valeur,quoi | 2229 o | (sans commentaire) affiche/emploie : « archive et le journal sont le filet de Paul : c · ARCHIVE PORTE L » | edtAjouterHeure, edtAnnulerDecision, edtBasculerClassement, edtBasculerStatut (+5) |
| `edtEcrireDecisionsGroupe` | entrees,quoi,libelle | 829 o | [②a] PLUSIEURS HEURES, UNE SEULE ÉCRITURE. Un événement couvre souvent plusieurs heures : les poser une par une ferait autant d'écritures du même nœud. | edtEchangerHeures, edtEcraserHeure, edtHeurePerdue, edtJustifier (+2) |
| `edtEcrireGrille` | o,quoi,apres,avant | 399 o | [⑤c-bis] `edtNormaliserGrille` rend la référence VIVANTE, déjà mutée : la photo ne peut pas se prendre ici, elle vient de l'appelant, avant qu'il ne touche à quoi que ce soit. | edtChangerEmploiDuTemps, edtVersionAjouter, edtVersionPoser, edtVersionSupprimer |
| `edtEcrireObjet` | nom,valeur,libelle,apres | 73 o | un archivage qui LÈVE est un archivage échoué | edtInjInjecter, edtInjecterAvecLaGrille |
| `edtElevesDe` | nomClasse | 206 o | (sans commentaire ni indice) | edtAbsencesHtml |
| `edtEnEssai` | — | 95 o | [③bis-a] LE MODE TEST, VU DU BLOC EDT — une lecture, jamais une écriture. | edtCasesA, edtCharger, edtOuvrir, edtPhotoAuto (+1) |
| `edtEntre` | iso,a,b | 24 o | (sans commentaire ni indice) | edtJourSansCours |
| `edtEstExperimentale` | nomClasse | 111 o | (sans commentaire ni indice) | edtCartesHtml |
| `edtEtatLigne` | nom,objet,compte | 171 o | (sans commentaire) affiche/emploie : « <div class= ·      +(ok?escapeHtml(compte): » | edtPeindrePanneau |
| `edtEtiquette` | el | 137 o | (sans commentaire) affiche/emploie : « ;   var t=String(el.libelle··el.nom··el.titre·· · );   var d=el.debut··el.date·· » | edtDifferentielHtml, edtPhraseFaible, edtReconduire |
| `edtEtiquettesOrphelines` | — | 339 o | les étiquettes que la grille cite, et que les périodes ne déclarent pas | edtPeindrePanneau |
| `edtEvenementJustifie` | ev | 239 o | [②a] L'ÉVÉNEMENT EST-IL MARQUÉ ? La réponse ne vient plus de l'objet injecté — où elle disparaissait à chaque réinjection — mais du magasin des décisions. | edtPeindreAnnee |
| `edtFermer` | — | 200 o | (sans commentaire) affiche/emploie : « ;   document.documentElement.classList.remove( · ); document.body.classList.remove( » — touche #edt-ecran | dr_edtRelire, dr_edtReprendre, dr_ouvrirClasse, edtLancer (+4) |
| `edtFermerQuestion` | — | 67 o | (sans commentaire) touche #edt-question | edtPoserQuestionDepot, edtToucheEchap, edtValiderDepot |
| `edtFileDAttente` | nomClasse,fil | 422 o | la file des séances qui attendent, pour une classe et un fil | edtAvancement, edtCartesHtml, edtProjeter |
| `edtFiltrerOu` | txt | 837 o | (sans commentaire) affiche/emploie : « )        o.hidden=(o.getAttribute( · )!==edtQ.v);     else if(edtQ.quoi=== » — touche #edt-ou | edtPeindreModale |
| `edtFinAnnee` | — | 76 o | (sans commentaire ni indice) | edtCreneauxOu, edtDestinationsPour, edtHeuresJamaisReplacees |
| `edtFusionnerPeriodes` | neuves | 916 o | Réinjecter la grille ne perd JAMAIS les dates déjà saisies : une période dont le nom existe déjà garde les siennes. | edtInjecterAvecLaGrille |
| `edtGlisserDebut` | ev,cle | 2445 o | {cle, x0, y0, actif} | edtPeindreMois, edtPeindreSemaine |
| `edtGlisserMarquer` | cle | 376 o | (sans commentaire) affiche/emploie : « #edt-ecran [data-iso] » | edtGlisserDebut |
| `edtGlisserNettoyer` | — | 203 o | (sans commentaire) affiche/emploie : « )     .forEach(function(n){ n.classList.remove( » | edtGlisserDebut, edtToucheEchap |
| `edtGrilleA` | iso | 158 o | la version en vigueur à cette date : la dernière dont `debut <= iso` | edtBandeauHtml, edtCasesA, edtChangerEmploiDuTemps, edtPeindrePanneau (+1) |
| `edtHeureCourante` | — | 97 o | (sans commentaire ni indice) | edtCreneauMaintenant, edtPeindreSemaine, edtProjeter |
| `edtHeurePerdue` | rang,coche | 1489 o | [⑤a] UNE HEURE, UNE CASE. Cochée : cette heure a bien été perdue — et une heure perdue à cause du calendrier est justifiée, sans bascule, c'est la règle de Paul. | edtPeindreCalendrier |
| `edtHeureReplacee` | nomClasse,cle | 266 o | [⑥b] Paul l'a reposée : elle sort du rappel et des heures perdues. | edtRappelAReplacerHtml |
| `edtHeureTrouvee` | h,ks | 93 o | (sans commentaire ni indice) | edtCheminTrace, edtSeanceDeTrace, edtTraceDe |
| `edtHeuresAReplacer` | nomClasse | 575 o | [⑥b] LES HEURES À REPLACER — celles qu'une autre classe a prises. Tant que Paul ne les a pas reposées, ou déclarées perdues, le site les lui rappelle : dans la vue de la classe, et au bandeau. | edtRappelAReplacerHtml, edtTeteHtml |
| `edtHeuresAjoutees` | iso | 434 o | Une HEURE AJOUTÉE n'est pas un déplacement : c'est une heure de plus, posée sur un trou de l'emploi du temps. | edtProjeter |
| `edtHeuresApres` | fin | 458 o | [⑥] LES HEURES POSÉES AU-DELÀ DE LA NOUVELLE FIN : elles ne disparaissent pas, elles redeviennent des heures à replacer, et elles sont NOMMÉES. | edtPoserDateAnnee |
| `edtHeuresDeLEvenement` | ev | 952 o | [②a] LES HEURES QU'UN ÉVÉNEMENT RECOUVRE. Une décision est une décision D'HEURE, pas d'événement : l'événement dit seulement QUI l'a causée. | edtCochesDeplacees, edtCoutParNiveau, edtEvenementJustifie, edtJustifier (+1) |
| `edtHeuresJamaisReplacees` | — | 444 o | [⑨] LA BASCULE DE FIN D'ANNÉE. Passé la fin de l'année déclarée, une heure restée « à replacer » ne le sera plus jamais : | — |
| `edtHeuresJouees` | seance,nomClasse | 290 o | (sans commentaire ni indice) | dr_heureProposee, edtFileDAttente |
| `edtHeuresJustifiees` | nomClasse | 604 o | LA DIVERGENCE — alerte progressive, jamais un blocage | edtDivergence |
| `edtHeuresPour` | seance,creneau | 1102 o | (sans commentaire) affiche/emploie : « injection §1.2, ou le geste de Paul dans l » | dr_heuresDeLaClasse, dr_proposer, edtProjeter, edtSeanceJouee |
| `edtHorodatage` | el | 193 o | photo : horodatage complet à la seconde, jamais la seule date | edtAmorce |
| `edtHorsAnnee` | iso | 331 o | [2ter 14a] LA BORNE DE L'ANNEE - UN SEUL ENDROIT DECIDE. « je dois pouvoir déclarer mon début d’année tel jour et puis le reste se cale ». | edtHeuresDeLEvenement, edtPeindreAnnee, edtProjeter, edtRefusDepot |
| `edtIdMenteur` | el,famille | 128 o | [③bis-b] UN IDENTIFIANT DIT SA FAMILLE. La règle de ① ne change pas : un identifiant en service n'est JAMAIS recalculé. | edtReconduire |
| `edtInjInjecter` | voie | 2800 o | (sans commentaire) affiche/emploie : « Rien à injecter : vérifie d\u2019abord le texte collé. · écrit tant que Paul n » | edtPeindrePanneau |
| `edtInjOuvrir` | voie | 68 o | L'INJECTION — même flow que partout : coller, vérifier, voir, injecter ─ | edtPeindrePanneau |
| `edtInjVerifier` | voie | 879 o | (sans commentaire) affiche/emploie : « )); }   catch(err){ EDT_INJ={voie:voie,objet:null,messages:[ » — touche #edt-inj-coller | edtPeindrePanneau |
| `edtInjecterAvecLaGrille` | o | 930 o | les deux autres nœuds que la grille apporte, écrits dans la foulée | edtInjInjecter |
| `edtJourEnClair` | iso | 192 o | (sans commentaire) affiche/emploie : « ); if(edtP.length!==3)return String(iso·· · );   var edtJ=edtNomDuJour(iso)·· » | dr_heuresDeLaClasse, edtAnneeDetail, edtCelluleCorps, edtDatesEnClair (+11) |
| `edtJourSansCours` | iso | 371 o | (sans commentaire ni indice) | edtCreneauxOu, edtPeindreMois, edtProchainesDe, edtProjeter (+2) |
| `edtJournalEdtHtml` | — | 582 o | (sans commentaire) affiche/emploie : « <div class= · >Aucun changement d\u2019emploi du temps cette année.</div> » | edtPeindrePanneau |
| `edtJournalHtml` | nomClasse | 699 o | (sans commentaire) affiche/emploie : « <div class= · >Aucune modification horaire pour cette classe.</div> » | edtPeindreModale |
| `edtJoursDepuis` | iso | 198 o | [⑤] L'ALERTE MENSUELLE — AVEUGLE, SANS RÉSEAU. Le site ne va rien lire dehors : il compte les jours depuis la dernière injection. Un mois, et il le dit une fois, sans bloquer. | edtAlerteInjection |
| `edtJustifier` | id,valeur | 2281 o | (sans commentaire) affiche/emploie : « Aucune heure de cours sur ces dates : rien à marquer. · écart justifié retiré —  » | — |
| `edtLancer` | cle,preparer | 2167 o | [E2] les ids du bloc du déroulé (contrat §7) — avant : at-dr-classe, at-dr-creneau, at-dr-debut, at-dr-tete, at-zone | edtPeindreModale |
| `edtListe` | x | 176 o | (sans commentaire ni indice) | dr_joueeIci, edtAvancement, edtCartesHtml, edtChapitreEnCours (+4) |
| `edtListesFamilles` | nom,o | 691 o | [③a] LES LISTES D'UNE FAMILLE DANS UN OBJET. L'entrant vient toujours en forme simple ; | edtReconduire |
| `edtLundiCourant` | — | 54 o | (sans commentaire ni indice) | edtPeindreSemaine, edtPhotoPrendre |
| `edtLundiDe` | iso | 153 o | LE CALENDRIER, EN LECTURE — la lettre de semaine, les jours sans cours ─ | edtCreneauxOu, edtLundiCourant, edtPeindreMois, edtPoserQuestionDepot (+3) |
| `edtMettreANiveau` | apres | 2834 o | L'ÉCRITURE UNIQUE DE MISE À NIVEAU — une seule, quelles que soient les charges. Elle ARCHIVE avant d'écrire. Si l'archivage OU l'écriture échoue, RIEN n'est écrit : | edtCharger |
| `edtMinutes` | hhmm | 86 o | le temps utile d'une heure : fin − début − 5 minutes (la trace du hub le confirme) | edtTempsUtile, edtValiderCreneaux |
| `edtModaleFermer` | — | 87 o | (sans commentaire) touche #edt-modale | dr_edtRelire, dr_edtReprendre, edtFermer, edtLancer (+4) |
| `edtModaleSaisir` | ev | 767 o | déplaçable : poignée, pointer events, contenue dans la zone | edtPeindreModale |
| `edtMotifDe` | v | 218 o | (sans commentaire ni indice) | edtBasculable, edtHeurePerdue, edtMotifEnClair, edtPeindreCalendrier (+1) |
| `edtMotifEnClair` | v | 597 o | (sans commentaire) affiche/emploie : « ;   var t=EDT_MOTIFS[m].libelle;   if(m=== · +v.libelle;   if(m=== » | edtAnnulerDecision, edtHeurePerdue, edtPeindreCalendrier, edtSansSeance |
| `edtNiveauDe` | nomClasse | 167 o | (sans commentaire ni indice) | dr_proposer, edtChapitreEnCours, edtCheminTrace, edtChercherTrace (+6) |
| `edtNiveauxConnus` | — | 197 o | le coût d'un événement, NIVEAU par NIVEAU. Les événements portent un niveau et `classes: []` : nommer une classe ici serait inventer une donnée. | edtCoutParNiveau |
| `edtNomCritere` | c | 53 o | (sans commentaire ni indice) | edtChangementsDe |
| `edtNomDuJour` | iso | 86 o | (sans commentaire ni indice) | edtCasesDuJour, edtChangerEmploiDuTemps, edtCreneauxOu, edtJourEnClair (+2) |
| `edtNomsDeGrille` | — | 164 o | (sans commentaire ni indice) | edtPeindrePanneau |
| `edtNormaliser` | t | 161 o | libellé normalisé : minuscules, accents retirés, espaces réduits, ponctuation ôtée | edtAmorce, edtEcheancesPhoto, edtValeurCritere, elfEssDuNiveau (+3) |
| `edtNormaliserGrille` | — | 244 o | passer à la forme datée sans rien demander à Paul : la grille actuelle devient la première version, à la date du 1er août. | edtChangerEmploiDuTemps, edtVersionAjouter, edtVersionPoser, edtVersionSupprimer |
| `edtOccupantDe` | c,dst | 364 o | [⑥a] QUI OCCUPE LA CASE VISÉE ? Une classe appariée, et une autre que la sienne : c'est le cas où le site proposait un refus sec, et où il propose maintenant trois sorties. | edtDepot, edtEchangerHeures, edtEcraserHeure, edtRefusDepot (+1) |
| `edtOptionsOu` | l | 585 o | (sans commentaire) affiche/emploie : « <optgroup label= · ; sem=x.sem; }     var edtIso=String(x.v).split( » | edtPeindreModale, edtRappelAReplacerHtml |
| `edtOuvrir` | — | 1664 o | L'ÉCRAN DE LA SEMAINE | atClasseFermer, edtArriveeProf, edtPeindrePanneau |
| `edtPeindre` | — | 203 o | (sans commentaire) affiche/emploie : « )return edtPeindreMois();   if(EDT_VUE.mode=== · )return edtPeindreAnnee();   if(EDT_VUE.mode=== » | edtAller, edtAujourdhuiAller, edtChangerEmploiDuTemps, edtEcrireDecision (+4) |
| `edtPeindreAnnee` | — | 4748 o | (sans commentaire) affiche/emploie : « mon année  · <div class= » — touche #edt-ecran | edtPeindre |
| `edtPeindreCalendrier` | — | 3326 o | (sans commentaire) affiche/emploie : « heures perdues · <div class= » — touche #edt-ecran | edtEcrireDecisionsGroupe, edtHeurePerdue, edtJustifier, edtPeindre |
| `edtPeindreModale` | — | 8183 o | (sans commentaire) affiche/emploie : « ; m.className= · ;     (document.getElementById( » — touche #edt-ecran, #edt-modale | edtAbsence, edtCaseClic, edtEcrireDecision, edtEcrireDecisionsGroupe |
| `edtPeindreMois` | — | 2321 o | LE MOIS | edtPeindre |
| `edtPeindrePanneau` | — | 13487 o | (sans commentaire) affiche/emploie : « <p class= · >Année <b> » — touche #edt-panneau | edtApparierNom, edtCopierPrompt, edtCreneauPoser, edtEcrireGrille (+9) |
| `edtPeindreSemaine` | — | 2282 o | (sans commentaire) affiche/emploie : « en-tête : où je suis, et ce qui m · année */   h+= » — touche #edt-ecran | edtPeindre, elfPremieresCases |
| `edtPeriodeA` | iso | 370 o | (sans commentaire ni indice) | edtBandeauHtml, edtCasesDuJour |
| `edtPeriodeAjouter` | nom | 360 o | (sans commentaire) affiche/emploie : « ).trim();   if(!n){ var i=l.length+1; n= · +i; while(l.some(function(p){return p.nom===n;})){ i++; n= » | edtPeindrePanneau |
| `edtPeriodeDeplacer` | id,sens | 333 o | (sans commentaire) affiche/emploie : « Périodes — ordre » | edtPeindrePanneau |
| `edtPeriodePoser` | id,champ,valeur | 275 o | (sans commentaire) affiche/emploie : « );   edtPeriodesEcrire(l, » | edtPeindrePanneau |
| `edtPeriodeSupprimer` | id | 103 o | (sans commentaire) affiche/emploie : « Périodes — retrait » | edtPeindrePanneau |
| `edtPeriodes` | — | 127 o | LES PÉRIODES — un objet, comme les créneaux AUCUN NOM DE PÉRIODE N'EST ÉCRIT ICI. Le découpage d'une année est déclaré, pas déduit : | edtCasesDuJour, edtDiffPeriodes, edtEcheancesPhoto, edtEtiquettesOrphelines (+9) |
| `edtPeriodesEcrire` | liste,libelle,apres,avant | 754 o | [⑤c-ter] même raison que pour la grille : `edtPeriodes()` rend la liste VIVANTE, et trois gestes la mutent avant d'appeler ici. La photo vient de l'appelant. | edtPeriodeAjouter, edtPeriodeDeplacer, edtPeriodePoser, edtPeriodeSupprimer |
| `edtPeriodesSaisies` | — | 74 o | (sans commentaire ni indice) | — |
| `edtPerteSeche` | nomClasse,cle | 349 o | [⑥b] PERTE SÈCHE : Paul déclare que l'heure ne sera pas rendue. | edtRappelAReplacerHtml |
| `edtPhoto` | — | 209 o | la photo à la main : elle porte sa date, et le bouton ne bouge pas | edtTeteHtml |
| `edtPhotoAuto` | — | 757 o | [⑧a] LA PHOTO SE PREND TOUTE SEULE — au passage d'une échéance, UNE fois. Deux chargements le même jour ne font pas deux photos. Le mode test n'écrit jamais au hub : | edtOuvrir |
| `edtPhotoDe` | nom | 146 o | [⑤c-bis] LA PHOTO D'UN OBJET AVANT QU'UN GESTE LE MUTE. `EDT[nom]` est la référence vivante : muter d'abord et archiver ensuite, c'est archiver l'état d'après. Objet absent au hub : | edtApparierNom, edtChangerEmploiDuTemps, edtCreneauPoser, edtPeriodeAjouter (+8) |
| `edtPhotoDecisions` | — | 35 o | (sans commentaire ni indice) | edtEcrireDecision, edtEcrireDecisionsGroupe, edtRattacherDecisions |
| `edtPhotoFaite` | edtCle | 148 o | le site sait laquelle il a déjà prise : la photo porte son échéance | edtPhotoAuto |
| `edtPhotoPrendre` | edtNom,edtEcheance,edtApres | 764 o | [⑧a] LE GESTE COMMUN — à la main ou toute seule, c'est la même photo : l'état du prévu de la semaine en cours, nommé, identifié, archivé avant d'écrire. Plusieurs photos le même jour sont normales : | edtPhoto, edtPhotoAuto |
| `edtPhraseCout` | ev | 233 o | (sans commentaire ni indice) | edtPeindreCalendrier |
| `edtPhraseDiffPeriodes` | neuves | 851 o | (sans commentaire) affiche/emploie : «  Périodes :  ·  déclarée » | edtApercu |
| `edtPhraseFaible` | q | 240 o | (sans commentaire) affiche/emploie : «  semble être devenu «  » | edtQuestionsFaibles |
| `edtPlusJour` | iso,n | 102 o | (sans commentaire ni indice) | edtAller, edtBandeauHtml, edtCreneauxOu, edtHeuresDeLEvenement (+6) |
| `edtPoserCss` | — | 15772 o | (sans commentaire) affiche/emploie : « ;   s.textContent= · .edt-refus ul{margin:6px 0 0 16px;padding:0} » — touche #edt-css | edtOuvrir, edtPeindrePanneau |
| `edtPoserDateAnnee` | champ,valeur | 1340 o | (sans commentaire) affiche/emploie : « Date refusée —  · );     return edtRefus;   }   var edtAu=(champ=== » — hub /site/config/brevetDates/ — ECRIT au hub | edtSaisirDateAnnee |
| `edtPoserIds` | liste,famille,classe,dejaPris | 434 o | POSE — un élément sans id en reçoit un à sa PREMIÈRE RENCONTRE. Un id existant n'est JAMAIS recalculé. Collision → #2, à la pose seulement. Rend {poses:n, collisions:[…]} ; ne touche à rien d'autre. | edtPoserIdsObjet |
| `edtPoserIdsObjet` | nom,o | 2769 o | POSE SUR UN OBJET ENTIER — le chemin réel de la rentrée est la PREMIÈRE INJECTION (le hub est vide) : les id naissent là, avant la première écriture. | edtChangerEmploiDuTemps, edtInjInjecter, edtInjecterAvecLaGrille, edtPeriodesEcrire (+1) |
| `edtPoserQuestionDepot` | cleSource,iso,creneaux | 1916 o | (sans commentaire) affiche/emploie : « ; q.className= · ;   (document.getElementById( » — touche #edt-ecran | edtDepot |
| `edtProchainesDe` | slug, n | 885 o | `edtProchainesDe(slug, n)` (plan §3, « une fonction du module EDT ajoutée en une » ; le socle la lit pour `dr_classe().prochaines`) : | dr_classe |
| `edtProjeter` | isoDebut,nbJours | 5383 o | (sans commentaire) affiche/emploie : « ,                salle:c.salle·· · ,                /* [2ter ⑪b] la case retient qu » | dr_heuresDeLaClasse, dr_proposer, edtPeindreMois, edtPeindreSemaine (+1) |
| `edtProjeterJour` | iso | 798 o | (sans commentaire ni indice) | edtVerifierCoherence |
| `edtPromptComplet` | voie | 548 o | [④a] LE PROMPT COMPLET : la consigne, puis l'existant tel qu'il est au hub. Le hub vide est le cas COURANT (rien n'y a encore été écrit) : | edtCopierPrompt |
| `edtQuandPilotagePret` | apres,essai | 503 o | sonde bornée : le bandeau du déroulé, ses trois champs, et le moteur monté | dr_edtRelire, dr_ouvrirClasse, dr_ouvrirLaClasse |
| `edtQuestionsFaibles` | liste,apres | 442 o | [③a] LES FAIBLES SE POSENT EN QUESTION, UNE PAR UNE. Rien ne s'écrit tant que Paul n'a pas répondu ; « non » laisse l'entrant arriver comme un objet neuf. | edtInjInjecter |
| `edtQuiEstEn` | iso,creneau,c | 225 o | [⑥c] qui occupe ce créneau, si c'est une classe appariée autre que la sienne | edtCreneauxOu, edtReplacerHeure |
| `edtQuoiChercher` | t | 374 o | [⑨b] UN SEUL CHAMP, QUATRE RECHERCHES. Le mandat ⑥ §③.1 demandait le mois, le numéro de semaine et le type A/B ; le filtre par date existait déjà. Quatre champs auraient encombré la modale : | edtFiltrerOu |
| `edtRappelAReplacerHtml` | nomClasse | 1363 o | (sans commentaire) affiche/emploie : « ;   return  · edt-rappel edt-mo-bloc » | edtPeindreModale |
| `edtRappelPlusTard` | — | 76 o | (sans commentaire ni indice) | edtPeindrePanneau |
| `edtRattacherDecisions` | ancien,nouveau | 1350 o | (sans commentaire) affiche/emploie : « état d · rattachée depuis «  » | edtRattacherGeste |
| `edtRattacherGeste` | ancien,nouveau | 719 o | (sans commentaire) affiche/emploie : « Rattacher à «  ·  heure » | edtPeindrePanneau |
| `edtRecalerAnnee` | — | 227 o | [⑥] EDT_ANNEE cesse d'être deviné : quand la date de début est connue, il en découle. Tant qu'elle ne l'est pas, la déduction d'avant reste. | edtChargerDatesAnnee, edtEcrireBrevet, edtPoserDateAnnee |
| `edtReconduire` | nom,entrant | 1298 o | [③a] LA RECONDUCTION DES IDENTITÉS À LA RÉINJECTION — avant toute écriture. Les FORTS sont appliqués sans un mot : même objet, même identité. Les FAIBLES ne sont JAMAIS appliqués ici : | edtInjInjecter, edtInjVerifier, edtInjecterAvecLaGrille |
| `edtRefusDepot` | c,dst | 1705 o | ce qu'un dépôt ne peut jamais faire — dit avec des mots | edtCreneauxLibresLe, edtCreneauxOu, edtDepot, edtGlisserMarquer |
| `edtReglagePoser` | nom,valeur | 359 o | (sans commentaire) affiche/emploie : « état d · Réglages de l\u2019emploi du temps » | edtPeindrePanneau, edtRappelPlusTard |
| `edtReplacerHeure` | nomClasse,cle,cible | 1524 o | (sans commentaire) affiche/emploie : « +escapeHtml(edtP[1])       + ·        +escapeHtml(nomClasse)+ » | edtRappelAReplacerHtml |
| `edtRienDePret` | c | 435 o | (sans commentaire) affiche/emploie : « Aucune séance prête pour la  · ); return; }   atModaleChoix( » | edtLancer, edtPeindreModale |
| `edtSaisirDateAnnee` | edtChamp,edtValeur,edtInput | 795 o | (sans commentaire ni indice) | edtBlocDatesAnnee |
| `edtSansSeance` | cle | 1210 o | (sans commentaire) affiche/emploie : « ,pose:Date.now()},        · il soit — symétrique de l » — touche #edt-cat, #edt-prec | edtBlocBanaliser |
| `edtSeanceDeTrace` | nomClasse,iso,creneau | 627 o | (sans commentaire ni indice) | edtProjeter |
| `edtSeanceJouee` | seance,nomClasse | 525 o | (sans commentaire) affiche/emploie : « heure 2/3 n » | edtChapitreEnCours, edtFileDAttente, edtLancer |
| `edtSectionPanneau` | edtQuoi | 596 o | LA PORTE ② : LE PANNEAU PROF | _blocBrevet, _renderProfSection |
| `edtSemaineDe` | iso | 181 o | [⑨b] CE QUE CHAQUE DESTINATION PORTE POUR ÊTRE CHERCHÉE : son mois, son numéro de semaine et sa lettre A/B. | edtOptionsOu |
| `edtSemaineLettre` | iso | 194 o | La lettre NE SE DÉDUIT JAMAIS d'une parité : le numéro de semaine repart à 1 au 1er janvier et 2026 compte 53 semaines ISO — la parité s'y retourne. On lit la table du calendrier, ligne à ligne. | edtCasesDuJour, edtPeindreSemaine |
| `edtSlugEleve` | nom | 131 o | (sans commentaire ni indice) | dr_absentsDeLaCase, edtAbsence, edtAbsencesHtml |
| `edtSortirJson` | objet | 1617 o | sortir l'état réel d'un objet, pour relire, archiver, ou le donner à une IA | edtPeindrePanneau |
| `edtTempsUtile` | creneau | 168 o | (sans commentaire ni indice) | edtHeuresPour, edtPeindrePanneau |
| `edtTeteHtml` | mode,titre | 1332 o | (sans commentaire) affiche/emploie : « <div class= ·     +(mode=== » | edtPeindreAnnee, edtPeindreCalendrier, edtPeindreMois, edtPeindreSemaine |
| `edtTotauxPerdues` | — | 522 o | le total, par classe : ce que l'année a coûté jusqu'ici | edtPeindreCalendrier |
| `edtToucheEchap` | ev | 355 o | (sans commentaire) touche #edt-ecran, #edt-question | — |
| `edtToutesLesCases` | — | 102 o | (sans commentaire ni indice) | edtApparierNom, edtEtiquettesOrphelines, edtNomsDeGrille, edtOuvrir |
| `edtTraceDe` | seance,nomClasse,iso,creneau | 313 o | (sans commentaire ni indice) | edtChercherTrace |
| `edtTraceExiste` | nomClasse,iso,creneau | 55 o | [⑨b] LA TRACE D'UNE HEURE — le seul critère qui interdit de la déplacer. Relue à chaque appel : une trace supprimée rend l'heure déplaçable aussitôt. | edtGlisserDebut |
| `edtTroisIssues` | cleSource,dst | 862 o | [⑥a] LES TROIS ISSUES. Paul ne reçoit plus un refus : il reçoit le prix, puis il choisit. Échanger ne coûte rien à personne ; | edtChoisirOu, edtDepot |
| `edtValeurCritere` | el,champ | 188 o | (sans commentaire ni indice) | edtAmorce, edtApparier, edtChangementsDe |
| `edtValiderCalendrier` | o | 1103 o | (sans commentaire) affiche/emploie : « Le texte collé n\u2019est pas un objet. · );     else if(s.lettre!== » | — |
| `edtValiderCreneaux` | o | 649 o | LES VALIDATEURS — un refus est toujours NOMMÉ, jamais silencieux | edtValiderGrilleComplete |
| `edtValiderDatesAnnee` | debut,fin | 1258 o | [⑥] LES TROIS REFUS, nommés et chiffrés. | edtPoserDateAnnee |
| `edtValiderDepot` | quoi,cleSource,iso | 576 o | (sans commentaire) affiche/emploie : « ;   var effet=(document.getElementById( · )··{}).value··iso;   edtFermerQuestion();   if(quoi=== » — touche #edt-q-creneau, #edt-q-effet | edtPoserQuestionDepot |
| `edtValiderGrille` | o | 1864 o | (sans commentaire) affiche/emploie : « Le texte collé n\u2019est pas un objet. · Il manque « creneaux » : la liste des cases de la grille. » | edtValiderGrilleComplete |
| `edtValiderGrilleComplete` | o | 232 o | la grille apporte TROIS objets : les cases, les horaires, les périodes | — |
| `edtValiderPeriodes` | l,ou | 1132 o | (sans commentaire) affiche/emploie : « ];   var noms={};   l.forEach(function(p,i){     var d= · ;     if(!p··!String(p.nom·· » | edtPeriodesEcrire, edtValiderGrilleComplete |
| `edtValiderVersions` | l | 920 o | LES VERSIONS : écrire, valider, journaliser | edtEcrireGrille |
| `edtVerifierCoherence` | depuis,jours | 1069 o | [⑥④] AUCUN TÉLESCOPAGE — vérifié, jamais supposé. Rend la LISTE des télescopages trouvés sur une période : | — |
| `edtVersionAjouter` | debut,libelle | 511 o | (sans commentaire) affiche/emploie : « nouvelle version · version créée \u2014  » | edtVersionAjouterGeste |
| `edtVersionAjouterGeste` | — | 447 o | (sans commentaire) affiche/emploie : « ,fn:function(){}},        {lib: · ,prim:true,fn:function(){ edtVersionAjouter(d, » | edtPeindrePanneau |
| `edtVersionPoser` | debut,champ,valeur | 406 o | (sans commentaire ni indice) | edtPeindrePanneau |
| `edtVersionSupprimer` | debut | 443 o | (sans commentaire) affiche/emploie : « version retirée » | edtPeindrePanneau |
| `edtVersions` | — | 482 o | [⑧a] la déclaration de `edtDebutAnnee` qui se trouvait ici était MORTE : une seconde, en L18734, l'écrasait au chargement. | edtBandeauHtml, edtGrilleA, edtPeindrePanneau, edtToutesLesCases |
| `edtVue` | mode | 36 o | (sans commentaire ni indice) | edtTeteHtml |


## PONT DÉROULÉ — cadre, adaptateur, trame, identités, trace

| fonction | args | taille | ce qu'elle fait | appelée par |
|---|---|---|---|---|
| `_drBaseHeure` | — | 266 o | (sans commentaire ni indice) | — |
| `_drBaseHeureDe` | c,ts | 264 o | (sans commentaire ni indice) | _drHeureCloseAu, dr_cloreHeureRestee |
| `_drCleHeure` | — | 480 o | (sans commentaire) affiche/emploie : « exige : \u00ab le d\u00e9roul\u00e9 de      l » | _drBaseHeure |
| `_drCleHeureDe` | c,ts | 348 o | hors emploi du temps : le cr\u00e9neau reste ce qu'il est | _drBaseHeureDe, _drCleHeure, dr_cheminH, dr_heurePoser (+4) |
| `_drCloreHeureRestee` | slugNeuf,nomNeuf | 42 o | (sans commentaire ni indice) | — |
| `_drCopieAuto` | — | 19 o | [classe · copie au fil de l'eau] atDrEnrAuto protège la préparation (« en classe, rien ne remonte ») — mais LA COPIE de la classe doit, elle, suivre chaque geste : | — |
| `_drCoursActifEffacerSi` | sig | 32 o | `cours_actif` CESSE D'\u00caTRE UNE SECONDE SOURCE : il ne peut \u00eatre que le REFLET de la trace ouverte. Toute cl\u00f4ture le retire \u2014 mais SEULEMENT s'il d\u00e9signe encore l'heure close : | — |
| `_drCreneauDe` | c | 246 o | [LOT C3a \u2460] LE CR\u00c9NEAU ET LA CL\u00c9 D'UNE HEURE \u2014 UNE SEULE FABRIQUE, pour `AT_DR_COURS` comme pour le pointeur `cours_actif` lu au hub. | _drCleHeureDe, _drCreneauHeure |
| `_drCreneauHeure` | — | 37 o | [E2] par dr_lire : le mode test lit sa copie | — |
| `_drEidDuRang` | n,ecrans | 391 o | l'identité D'USAGE d'un rang : celle du PÈRE si le rang désigne un fils du zoom. | — |
| `_drEidNeuf` | — | 77 o | [LOT C2 ①] L'IDENTITÉ DES ÉCRANS — le principe du 08/08 enfin étendu « chaque bloc porte un identifiant propre ; | _drIdentifierEcrans |
| `_drEmpreinteTrame` | ecrans | 325 o | [LOT A ③] L'EMPREINTE DE TRAME — le jeton disait le LIEU, jamais le CONTENU (level·chnum·snum·classe·joué) : | — |
| `_drHeureCloseAu` | c,cb | 149 o | LA TRACE FAIT FOI : une heure close ne se reprend plus, par aucun chemin. | sesReprendre, sesReprisePoser |
| `_drIdentifierEcrans` | ecrans | 275 o | (sans commentaire) affiche/emploie : « a JAMAIS d » | atDrJouer, atP2DerouleNormalise, dr_trameDe |
| `_drInitialesDe` | nom | 255 o | [reléve-en-dur · les trois branchements] la maquette n'a plus le dernier mot : | — |
| `_drPaquetHeure` | clos | 32 o | le paquet de l'heure — EXACTEMENT celui que composait atVecuEcrire, extrait pour être poussé au fil de l'eau comme à la clôture. Rien n'y est inventé. | — |
| `_drPrenomsDeLaClasse` | slug | 700 o | NOM Prénom → P+N ? non : prénom d'abord au moteur | — |
| `_drRangDeLEid` | eid,ecrans | 241 o | le rang LOCAL d'une identité — chaque appareil a le sien, et c'est tout l'objet du lot. | dr_tabMontrer |
| `_drRangPere` | n,ecrans | 253 o | le rang du PÈRE : le vécu, la participation et les décisions s'y ancrent toujours. | — |
| `_drSignatureCours` | c | 100 o | la SIGNATURE d'une heure : ce qui la distingue de toute autre. Elle sert au compare-et-efface du pointeur (\u2460) et \u00e0 la banni\u00e8re (\u2461). | dr_cloreHeureRestee, dr_coursActifEffacerSi, dr_heurePartie, dr_ongletClos (+4) |
| `_drTraceAuto` | — | 19 o | [LOT C1 \u2461] LA TRACE S'\u00c9CRIT AU FIL — sur le m\u00e9canisme de `_drCopieAuto` : m\u00eame d\u00e9bounce de 900 ms, m\u00eame fonction d'\u00e9criture, m\u00eame chemin de base. | — |
| `_drTraceReprendre` | — | 24 o | la RELANCE dans le m\u00eame cr\u00e9neau REPREND la trace en cours (patron du chrono accumul\u00e9 de worktrack, CADRAGE-TEMPS \u00a72) : | — |


## PONT DÉROULÉ — pilotage, lancement, clôture, reprise

| fonction | args | taille | ce qu'elle fait | appelée par |
|---|---|---|---|---|
| `atDrEnrConfirme` | ok | 407 o | [E2] | dr_sauveMaintenant |
| `atDrJouer` | classeSlug, classeNom | 3040 o | (sans commentaire) affiche/emploie : « heure de d\u00e9part, et      RIEN d · ici les `eid` ne      naissaient qu » — ECRIT au hub | dr_lancerNeuf |
| `atDrTrame` | snum | 266 o | (sans commentaire ni indice) | atDrJouer |


## SESSION — les trois appareils (pilote, tableau, téléphone)

| fonction | args | taille | ce qu'elle fait | appelée par |
|---|---|---|---|---|
| `sesArreter` | — | 62 o | [E2] par dr_ecrire (13 · 25) | sesCoursFermer |
| `sesBootTableau` | — | 386 o | LA VUE TABLEAU (?vue=tableau) — un terminal muet : elle PEINT, elle n'écrit JAMAIS | — |
| `sesChemins` | c | 294 o | (sans commentaire) hub /site/cours_actif | — |
| `sesCoursEcrire` | — | 21 o | CÔTÉ PILOTE — le cours annoncé, la scène émise, les gestes des autres appliqués | — |
| `sesCoursFermer` | — | 35 o | [E2] par dr_ecrire (13 · 25) ; la scène neuve est celle d'E3 | — |
| `sesIncident` | ou,err | 669 o | [LOT A ②] LA CEINTURE — un échec se DIT, il ne s'avale pas Le 24/08, un défaut de données a rendu le pilotage muet en pleine classe : l'exception était absorbée par les try/catch, zéro erreur remontée. | — |
| `sesOuvrirTableau` | — | 30 o | [LOT B \u2461] LE CHEMIN D'ACC\u00c8S AU TABLEAU \u2014 au patron d'evaluation-qcm La page autonome `?vue=tableau` ne change pas : | — |
| `sesReprendre` | — | 1265 o | (sans commentaire) affiche/emploie : « HEURE ENTIÈRE à l · ); return; }   dr_lire( » — hub /site/cours_actif | sesReprisePeindre |
| `sesRepriseDecaler` | — | 1552 o | [E2] §12.28-3 (d), garde L d'E3 : le bandeau ne recouvre rien — tout ce qui est fixe ou collant en haut de l'écran (le bouton du panneau prof, l'en-tête du niveau, les écrans pleins : | sesReprisePeindre |
| `sesReprisePeindre` | c | 1278 o | (sans commentaire) affiche/emploie : « Heure en cours avec les <b> · ); b.className= » — touche #ses-reprise, #ses-reprise-txt | dr_ongletEntendre, sesReprisePoser |
| `sesReprisePoser` | — | 1802 o | (sans commentaire) affiche/emploie : « AUCUN onglet de ce navigateur ne tient l · onglet de l » — hub /site/cours_actif | — |
| `sesRepriseRemettre` | — | 257 o | (sans commentaire ni indice) | sesRepriseRetirer |
| `sesRepriseRetirer` | — | 191 o | [LOT C3a \u2461] LA BANNI\u00c8RE V\u00c9RIFIE \u00c0 CHAQUE PASSAGE, et DISPARA\u00ceT D'ELLE-M\u00caME d\u00e8s que l'heure qu'elle propose n'est plus ouverte. | dr_ongletEntendre, sesReprendre, sesReprisePoser |
| `sesTabChercherCours` | — | 512 o | (sans commentaire) hub /site/cours_actif | dr_tabDemarrer |
| `sesTabCle` | c | 70 o | [LOT B \u2462] LE TABLEAU SURVIT \u2014 il TIENT, puis il REPREND La demande de Paul (v\u00e9rifi\u00e9e, et longtemps prise \u00e0 l'envers) : | dr_tabPointeur, sesTabChercherCours, sesTabVeillePointeur |
| `sesTabPoll` | — | 19 o | la composition du mur : on repart TOUJOURS du père recollé, on pose le dévoilement, on laisse le moteur scinder à sa boîte, puis on va au bon morceau. | — |
| `sesTabVeillePointeur` | — | 559 o | (sans commentaire) hub /site/cours_actif | dr_tabMonter |


## SOCLE — hub, écriture, lecture

| fonction | args | taille | ce qu'elle fait | appelée par |
|---|---|---|---|---|
| `mjpcBandeauEl` | — | 183 o | (sans commentaire) touche #mjpc-echecs-bandeau | mjpcRendreBandeau, mjpcSucces |
| `mjpcBasculerDetail` | — | 124 o | (sans commentaire) touche #mjpc-echecs-detail | mjpcRendreBandeau |
| `mjpcChargerOutils` | base,cb | 565 o | La source : ce que les apps DÉCLARENT, publié au hub par publierManifeste. Rien n'est inventé : une app absente du hub n'apparaît pas, une app sans usage apparaît en le disant. | atChargerOutils |
| `mjpcChiffrer` | cle,texte | 201 o | Chiffre un texte. → Promise<"v1."+b64(iv)+"."+b64(chiffré)> — IV aléatoire par appel. | _elfChif, _putCode, eliChiffrerEnAttente, eliEcrire (+2) |
| `mjpcCryptoDispo` | — | 84 o | (sans commentaire ni indice) | _secuVerifCodeEleveSite, doLogin, secuBoot, secuEncartHtml (+1) |
| `mjpcDechiffrer` | cle,paquet | 280 o | Déchiffre un paquet "v1.iv.ct". → Promise<texte> — REJETTE si la clé est fausse (AES-GCM est authentifié : c'est ce qui rend le canari fiable) ou le paquet corrompu. | _allCodesTaken, _elfDech, _printCodesClasse, eliOpsRetrait (+4) |
| `mjpcDeleteJson` | url,ou,onAccepte | 259 o | (sans commentaire ni indice) | atSupprimerChapitre, deleteClass, deleteImageInGallery, deleteItem (+2) |
| `mjpcDeriverCle` | secret | 346 o | Dérive la clé AES-GCM 256 du secret saisi. → Promise<CryptoKey> | secuValiderSecret |
| `mjpcEcrireRest` | url,options,cb | 2269 o | Le classeur d'issues pour le transport REST (fetch) — la SEULE source de vérité : | _siteDelete, _sitePut, mjpcDeleteJson, mjpcInjecterAvecArchive (+5) |
| `mjpcEmpreinte` | texte,selHex | 352 o | Empreinte d'un texte : PBKDF2-SHA-256, sel PAR ENTRÉE, 32 octets hex. → Promise<hex> Vérifiable par toute app (le sel est lisible) SANS la clé du coffre. | _cpConcordance, _cpFiche, _estCodeProf, _putCode (+4) |
| `mjpcFetchOk` | url,options | 1872 o | Le fetch à verdict pour les chaînes de promesses existantes : REJETTE sur refus (fetch ne le fait pas) et convertit la panne en message français. | _createGalleryItemWithFirstImage, _fbDeletePath, _fbPutPath, _uploadBlobToDrive (+5) |
| `mjpcHeure` | ts | 106 o | consultable console — le bloc DIAGNOSTIC (commentaire) reste intact | mjpcRendreBandeau, mjpcSucces |
| `mjpcInjecterAvecArchive` | opts,cb | 842 o | L'INJECTION : archive AVANT s'il y a quelque chose à remplacer, ABANDON si l'archive échoue, écriture ensuite, verdict rendu. Rien n'écrit sans que l'appelant ait confirmé. opts : | — |
| `mjpcLot` | ecritures,ou,onTousAcceptes,onEchecs | 809 o | LE LOT À VERDICTS — pour les gestes en plusieurs écritures (cascade de publication, LIER, upload multi-champs) : on attend TOUS les verdicts, l'écran ne parle qu'ensuite ; | _applyLinkEcrire, _applyPubCascade, _deleteEleveCls, _swapOrdre (+7) |
| `mjpcManifesteAJour` | publie,versionSocle,app,manifeste,purge | 676 o | [C5-M16a] ④ `purge` entre dans la comparaison (4e argument, optionnel : aucun appelant existant n'est cassé). | fichesMajUne |
| `mjpcPromptAvecPresentation` | texte,options | 216 o | Le texte d'un prompt, précédé de la présentation. Un seul point d'entrée pour les neuf apps et le site : la pièce ne se recopie nulle part. | atPromptTexte |
| `mjpcPromptCharger` | base,app,produit,defauts,cb | 513 o | (sans commentaire) affiche/emploie : « ;     var fini=function(v){       res[piece]=(typeof v=== » | — |
| `mjpcPromptChemin` | app,produit,piece | 75 o | La persistance : chemin par app ET par produit, défaut en dur qui fait foi si la base est muette. Lecture REST (le mode test de l'app la court-circuite si elle en a un). | mjpcPromptCharger, mjpcPromptEnregistrer |
| `mjpcPromptComposer` | pieces | 631 o | L'assemblage à la volée. pieces : {directives, vocabulaire, format, donnees:{JETON:valeur}} Les jetons {{NOM}} sont remplacés en dernier, dans le texte entier. | — |
| `mjpcPromptEnregistrer` | base,app,produit,piece,texte,cb | 398 o | L'écriture passe par les verdicts du socle (§9) : trois issues, jamais un succès supposé. | — |
| `mjpcPromptOutils` | entrees | 1260 o | (sans commentaire) affiche/emploie : « );       return;     }     var l= · +e.usage;     if(e.quandPas)l+= » | mjpcPromptPresentation |
| `mjpcPromptPresentation` | options | 169 o | La pièce assemblée. NE MODIFIE JAMAIS le texte persisté d'un prompt : elle se place devant, à la composition. | mjpcPromptAvecPresentation, mjpcPromptComposer |
| `mjpcPromptVocabulaire` | source, options | 1152 o | Le vocabulaire, GÉNÉRÉ depuis une source fournie par l'app (jamais écrit à la main). source : { id: { libelle, champs:[{k,l,kind}], reserve, groupe, note } } options : | chVocabulaireCompetences, chVocabulaireEntrees, chVocabulaireTaxo, chVocabulaireTypes |
| `mjpcPutJson` | url,valeur,ou,onAccepte | 332 o | L'ÉCRITURE NOMMÉE — le geste commun de toutes les écritures REST du site. ou : libellé français du geste (pour le bandeau) onAccepte : | _importEleves, _putCode, addChapter, addSeance (+17) |
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
| `secuEcrire` | chemin,valeur | 108 o | (sans commentaire ni indice) | _cpArchive, _edLierEcrire, _secuPurgerClair, atChampChapitre (+23) |
| `secuEcrireCanari` | cle | 284 o | (sans commentaire) affiche/emploie : « Pose du t\u00e9moin de cl\u00e9 » | secuBoot, secuPoserCle |
| `secuEncartHtml` | — | 2019 o | l'encart de l'écran Élèves & codes | _profSectionEleves, secuMajEncart |
| `secuEnregistrerAppareil` | — | 238 o | fiches d'appareils : que Paul sache ce qu'il a laissé derrière lui | doLogin, secuPoserCle |
| `secuExigeCle` | — | 504 o | la garde des gestes qui écrivent un code : cohérence chiffre/clair (Q5) | _printCodesClasse, _putCode, _resetAllCodesClasse, secuCodeProfOuvrir (+4) |
| `secuFinMigration` | verdicts,dejaFaits,vestiges | 846 o | (sans commentaire) affiche/emploie : «  ancienne ·  ignor\u00e9e » | secuMigrerCodes |
| `secuIdAppareil` | — | 169 o | (sans commentaire ni indice) | secuEnregistrerAppareil, secuOublier, secuVoirAppareils |
| `secuInfo` | — | 610 o | (sans commentaire) affiche/emploie : « La cl\u00e9 de chiffrement · <div class= » | secuEncartHtml |
| `secuLS` | k,v | 156 o | consultable en console — le bloc DIAGNOSTIC commenté renvoie ici | doLogin, secuBoot, secuIdAppareil, secuOublier (+1) |
| `secuLire` | chemin | 76 o | _siteGet promisifié localement (signature cb conservée au socle du site) | _cpLireFiches, _estCodeProf, chAfficherInventaire, chAlerteGraphies (+14) |
| `secuMajEncart` | — | 154 o | (sans commentaire) touche #secu-encart | secuFinMigration, secuMigrerCodes |
| `secuMigrerCodes` | manuel | 1616 o | la migration : 120 codes préparés, dénombrés avant, verdicts TOUS collectés | secuEncartHtml, secuPoserCle |
| `secuNomAppareil` | — | 351 o | (sans commentaire) affiche/emploie : « ;var os=/Windows/.test(ua)? » | secuEnregistrerAppareil |
| `secuOublier` | — | 662 o | oubli local : les codes redeviennent illisibles ICI | secuEncartHtml |
| `secuPatchCode` | k,objet,cb | 452 o | PATCH fusionnant sur /codes/<k> — routé magasin en mode test (le PATCH y fusionne) | _secuPurgerClair, secuMigrerCodes |
| `secuPoserCle` | — | 2134 o | pose de la clé depuis l'encart (première fois ou nouvel appareil) | secuEncartHtml |
| `secuPoserEmpreintesProf` | — | 235 o | M-SÉCU-3 : plus de source claire pour les poser — CONSTAT seulement. Si les empreintes manquent au hub, la porte ne s'ouvre plus que par la clé, et le professeur doit le savoir. | secuPoserCle |
| `secuRetirerClair` | — | 3084 o | M-SÉCU-3 — LE RETRAIT DU CLAIR. Un seul geste, explicite, jamais automatique. Séquence de Paul : promotion → déploiement → vérification → CE bouton. | secuEncartHtml |
| `secuValiderSecret` | secret | 534 o | validation d'un secret contre le canari — la SEULE voie vers l'affichage | doLogin, secuBoot, secuPoserCle |
| `secuVoirAppareils` | — | 1053 o | (sans commentaire) affiche/emploie : « ;var ids=Object.keys(v··{});     if(!ids.length)lignes= ·  <b>(cet appareil)</b> » | secuEncartHtml |


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
| `ed2SelectionnerSeance` | j,depuis | 1262 o | le point d'édition : la ligne du panneau qui porte ce champ, mise en valeur, curseur dedans — et la zone du document allumée. La sélection RESTE. | atSomInjecterEcrans, ed2ClicChamp, ed2ClicTrou, ed2Papier (+2) |
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
| `edTexte` | — | 542 o | (sans commentaire) affiche/emploie : « ; const rs = $( » | ouvrirFin |
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
| `atVuesAller` | v,depuisOnglet | 682 o | (sans commentaire) affiche/emploie : « avant la 96 */   if(atClasseEnCours()&&v!== · )return;   /* E1 (§12.28-3a) : l » | atVuesBarreHtml, dr_edtRelire, dr_ouvrirClasse, dr_ouvrirLaClasse (+1) |
| `atVuesBarreHtml` | — | 3430 o | (sans commentaire) affiche/emploie : « ]];   var ids={atelier: · autre */     defs=[[ » | atVuesMonter, atVuesPoser |
| `atVuesMarquer` | v | 243 o | E1 (§12.27-4) : « Fermer l’atelier » sur la rangée des onglets, à droite — la bande de 60 px au-dessus tombe quand la rangée existe | atVuesAller, dr_suivreBarre |
| `atVuesMonter` | — | 810 o | (sans commentaire) affiche/emploie : « \u00e9diteur vient d · ); cadre.className= » — touche #at-zone | atEditerChapitreRendre |
| `atVuesPoser` | v | 1078 o | (sans commentaire) affiche/emploie : « ;   if(typeof dr_parquer=== · <div class= » — touche #at-vues-zone, #at-zone | atSomAllerEcran, atVuesAller, atVuesMonter, ctxEntreesSeance (+1) |
| `atVuesRappeler` | — | 124 o | (sans commentaire ni indice) | — |
| `atVuesRetenir` | — | 66 o | fonctions | atVuesAller, dr_suivreBarre |


## ÉDITEUR — sommaire natif

| fonction | args | taille | ce qu'elle fait | appelée par |
|---|---|---|---|---|
| `atSomAllerEcran` | n,seance | 998 o | (sans commentaire) affiche/emploie : « #at-arbre .ed2-som · #at-arbre .ed2-som » — touche #at-arbre | atSomEcransHtml, atSomPlier, ouvrirARegler |
| `atSomEcransDe` | seance | 380 o | (sans commentaire ni indice) | atSomEcransHtml |
| `atSomEcransHtml` | seance | 999 o | (sans commentaire) affiche/emploie : « <div class= · Diapo  » | — |
| `atSomInjecterEcrans` | html | 1706 o | (sans commentaire) affiche/emploie : « <div class= · <div class= » | atSommaireNatifHtml |
| `atSomOuverte` | seance | 455 o | (sans commentaire ni indice) | atSomInjecterEcrans, atSomPlier |
| `atSomPlier` | seance | 250 o | (sans commentaire ni indice) | atSomInjecterEcrans |
| `atSomRafraichir` | — | 465 o | (sans commentaire) touche #at-arbre | atSomPlier |
| `atSomSuivreCourant` | — | 1209 o | (sans commentaire) affiche/emploie : « );   for(var k=0;k<lst.length;k++){ lst[k].classList.toggle( · est pas repris) */   var cle=String(ATVUES.snum)+ » — touche #at-arbre | — |
| `atSommaireNatifHtml` | — | 467 o | (sans commentaire) affiche/emploie : « <div class= · <div class= » | atSomRafraichir, atVuesPoser |