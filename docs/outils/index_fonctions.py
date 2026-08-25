#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
INDEX EXHAUSTIF DES FONCTIONS — MJPC 6
Répond en une commande à la seule question qui compte : « est-ce que ça existe déjà, et où ? »

Il ne remplace pas la lecture des documents : il empêche de RECODER ce qui existe.
Régénérable : relancer ce script sur la production courante.
"""
import re, json, base64, sys, os

def corps(t, deb):
    """Retourne le corps { … } appairé à partir de l'accolade ouvrante à deb."""
    d = 0
    for k in range(deb, len(t)):
        if t[k] == '{':
            d += 1
        elif t[k] == '}':
            d -= 1
            if d == 0:
                return t[deb:k+1]
    return t[deb:deb+400]

def commentaire_avant(t, i, maxlen=1400):
    """Le bloc de commentaire qui précède immédiatement la fonction, s'il y en a un."""
    amont = t[max(0, i-maxlen):i]
    j = amont.rfind('*/')
    if j < 0:
        # commentaires en ligne consécutifs
        lignes = [l.strip() for l in amont.split('\n') if l.strip()]
        pris = []
        for l in reversed(lignes):
            if l.startswith('//') or l.startswith('/*'):
                pris.insert(0, l.lstrip('/*').strip())
            else:
                break
        return ' '.join(pris)
    k = amont.rfind('/*', 0, j)
    if k < 0:
        return ''
    entre = amont[j+2:]
    if len(entre.strip()) > 3:      # le commentaire ne touche pas la fonction
        return ''
    return amont[k+2:j]

def nettoie(c):
    c = re.sub(r'[═─━\*]{2,}', ' ', c)
    c = re.sub(r'\s+', ' ', c).strip()
    return c

def resume(c, n=200):
    c = nettoie(c)
    if not c:
        return ''
    # on garde la première phrase utile
    p = re.split(r'(?<=[.:;])\s', c)
    out = ''
    for bout in p:
        if len(out) + len(bout) > n:
            break
        out += (' ' if out else '') + bout
    return (out or c[:n]).strip()

def analyse(txt, origine):
    fns = {}
    for m in re.finditer(r'\nfunction\s+(\w+)\s*\(([^)]*)\)\s*\{', txt):
        nom, args = m.group(1), m.group(2).strip()
        b = corps(txt, m.end()-1)
        fns[nom] = {
            'nom': nom, 'origine': origine, 'args': args, 'taille': len(b),
            'ligne': txt.count('\n', 0, m.start()) + 1,
            'resume': resume(commentaire_avant(txt, m.start())),
            'corps': b,
        }
    # appels sortants et appelants
    noms = set(fns)
    for nom, f in fns.items():
        sortants = set(re.findall(r'\b(\w+)\s*\(', f['corps'])) & noms
        sortants.discard(nom)
        f['appelle'] = sorted(sortants)
    for nom in fns:
        appelants = []
        for autre, f in fns.items():
            if autre != nom and re.search(r'\b' + re.escape(nom) + r'\s*\(', f['corps']):
                appelants.append(autre)
        fns[nom]['appele_par'] = sorted(appelants)
    # indices tires du CORPS quand aucun commentaire ne precede : ce qui rend l index
    # utile pour repondre a "est-ce que ca existe deja"
    for f in fns.values():
        b=f['corps']
        libelles=[x for x in re.findall(r"['\"]([^'\"]{6,60})['\"]", b)
                  if re.search(r'[a-zA-Zéèêàçûô]{4}', x) and ' ' in x][:4]
        ids=sorted(set(re.findall(r"getElementById\(['\"]([\w-]+)", b)))[:5]
        hub=sorted(set(re.findall(r"['\"](site/[\w/<>-]+|/site/[\w/<>-]+)", b)))[:3]
        f['libelles']=libelles; f['ids']=ids; f['hub']=hub
        f['ecrit']= bool(re.search(r"mjpcPutJson|PUT|method:['\"]PUT", b))
        f['lit']=  bool(re.search(r"mjpcGetJson|fetch\(", b))
        if not f['resume']:
            bouts=[]
            if libelles: bouts.append('affiche/emploie : « '+' · '.join(libelles[:2])+' »')
            if ids: bouts.append('touche #'+', #'.join(ids[:3]))
            if hub: bouts.append('hub '+hub[0])
            if f['ecrit']: bouts.append('ECRIT au hub')
            f['resume']='(sans commentaire) '+' — '.join(bouts) if bouts else '(sans commentaire ni indice)'
        del f['corps']
    return fns

def famille(nom, origine):
    if origine == 'moteur':
        return 'MOTEUR — le déroulé (fichier autonome encodé, JAMAIS modifié)'
    p = [
        ('secu',   'SÉCURITÉ — coffre, clé, empreintes (M-SÉCU) — corps à ne jamais modifier'),
        ('_dr',    'PONT DÉROULÉ — cadre, adaptateur, trame, identités, trace'),
        ('atDr',   'PONT DÉROULÉ — pilotage, lancement, clôture, reprise'),
        ('atVues', 'ÉDITEUR — les quatre onglets (Structure, Déroulé, Relecture, Papier)'),
        ('atSom',  'ÉDITEUR — sommaire natif'),
        ('atVecu', 'TEMPS — le vécu, mesure réelle par activité'),
        ('atT5',   'TEMPS — le T-5, fin d’heure et ses quatre choix'),
        ('ses',    'SESSION — les trois appareils (pilote, tableau, téléphone)'),
        ('atIA',   'ATELIER — prompts et écrans IA'),
        ('ch',     'CHAPITRE — injection JSON, inventaire, les quatre voies'),
        ('ed',     'ÉDITEUR — arborescence, publication, liaisons'),
        ('at',     'ATELIER — feuilles, documents, impression'),
        ('mjpc',   'SOCLE — hub, écriture, lecture'),
        ('_',      'DIVERS — utilitaires internes'),
    ]
    for pre, lab in p:
        if nom.startswith(pre):
            return lab
    return 'DIVERS — socle du site'

def main():
    site = open('prod.html', encoding='utf-8').read()
    m = re.search(r'var AT_DR_B64="([^"]+)"', site)
    moteur = base64.b64decode(m.group(1)).decode('utf-8')

    F = analyse(site, 'site')
    F.update(analyse(moteur, 'moteur'))

    # regroupement par famille
    par_fam = {}
    for nom, f in F.items():
        par_fam.setdefault(famille(nom, f['origine']), []).append(f)

    out = []
    out.append("# INDEX DES FONCTIONS — MJPC 6\n")
    out.append("> **À quoi il sert.** Répondre en UNE commande à : *« est-ce que ça existe déjà, et où ? »*\n"
               "> C'est la réponse à la cause des bugs successifs, identifiée par Paul le 25/08 :\n"
               "> *« vu que la connaissance du site est partielle, l'IA code par-dessus l'existant sans le connaître. »*\n>\n"
               "> **Comment s'en servir.** Ne le lis pas en entier : **cherche dedans.** Avant d'écrire une fonction,\n"
               "> avant de proposer une fonctionnalité, cherche le mot-clé ici. Si tu trouves, va lire le code.\n"
               "> Si tu ne trouves pas, cherche un synonyme, puis seulement alors conclus que ça n'existe pas.\n>\n"
               "> **Ce qu'il contient.** Toutes les fonctions du site ET du moteur : nom, arguments, taille,\n"
               "> ligne, ce qu'elle fait (tiré de son commentaire), qui l'appelle, ce qu'elle appelle.\n>\n"
               "> **Régénérable** : `python3 index_fonctions.py` sur la production courante.\n")
    out.append(f"\n**{len(F)} fonctions** — site : {sum(1 for f in F.values() if f['origine']=='site')} · "
               f"moteur : {sum(1 for f in F.values() if f['origine']=='moteur')}\n")

    out.append("\n## SOMMAIRE DES FAMILLES\n")
    for fam in sorted(par_fam):
        out.append(f"- **{fam}** — {len(par_fam[fam])} fonctions")

    for fam in sorted(par_fam):
        out.append(f"\n\n## {fam}\n")
        out.append("| fonction | args | taille | ce qu'elle fait | appelée par |")
        out.append("|---|---|---|---|---|")
        for f in sorted(par_fam[fam], key=lambda x: x['nom']):
            r = f['resume'].replace('|', '·').replace('\n',' ')[:230] or '—'
            ap = ', '.join(f['appele_par'][:4]) or '—'
            if len(f['appele_par']) > 4:
                ap += f" (+{len(f['appele_par'])-4})"
            out.append(f"| `{f['nom']}` | {f['args'][:40] or '—'} | {f['taille']} o | {r} | {ap} |")

    open('INDEX-FONCTIONS.md', 'w', encoding='utf-8').write('\n'.join(out))
    json.dump({k: v for k, v in F.items()}, open('index-fonctions.json', 'w', encoding='utf-8'),
              ensure_ascii=False, indent=0)
    print("INDEX-FONCTIONS.md :", os.path.getsize('INDEX-FONCTIONS.md'), "octets")
    print("index-fonctions.json :", os.path.getsize('index-fonctions.json'), "octets")
    print("fonctions indexées :", len(F))
    sansres = sum(1 for f in F.values() if not f['resume'])
    print("sans résumé (aucun commentaire en amont) :", sansres)

main()
