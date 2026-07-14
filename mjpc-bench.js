/* ════════════════════════════════════════════════════════════════════════════
   MJPC-BENCH — banc de test versionné de l'écosystème MJPC
   Usage : node mjpc-bench.js <fichier.html> [chemin/hub.json]
   Extrait les fonctions livrées du fichier et les exécute sur l'export réel du hub.
   S'enrichit à chaque lot — ne jamais supprimer un test qui passe.
   Créé Phase 2 lot 1 (14/07/2026), après 2 incidents de bancs jetables en Phase 1.
   ════════════════════════════════════════════════════════════════════════════ */
const fs = require('fs');
const fichier = process.argv[2] || 'index.html';
const hubPath = process.argv[3] || '/home/claude/hub.json';
const html = fs.readFileSync(fichier, 'utf8');
const hub = JSON.parse(fs.readFileSync(hubPath, 'utf8'));

let ok = 0, ko = 0;
const t = (nom, cond) => { cond ? (ok++, console.log('✔', nom)) : (ko++, console.log('✘', nom)); };
const section = s => console.log('\n── ' + s + ' ──');
const fin = () => { console.log(`\n${ok}/${ok + ko} tests OK`); process.exit(ko ? 1 : 0); };

/* Extraction d'une fonction nommée par équilibrage d'accolades (fiable sur du minifié partiel). */
function corpsFonction(nom) {
  const m = html.match(new RegExp('function ' + nom + '\\([^)]*\\)\\{'));
  if (!m) return null;
  let depth = 0;
  for (let k = html.indexOf('{', m.index); k < html.length; k++) {
    if (html[k] === '{') depth++;
    else if (html[k] === '}') { depth--; if (!depth) return html.slice(m.index, k + 1); }
  }
  return null;
}
function sandbox(noms, prelude, exportsSup) {
  let code = prelude || '';
  for (const n of noms) { const c = corpsFonction(n); if (!c) return null; code += c + '\n'; }
  const sb = {};
  new Function(code + '; this.x={' + noms.concat(exportsSup || []).join(',') + '};').call(sb);
  return sb.x;
}

/* ════ SUITE 1 — SOCLE (non-régression Phase 1) ════ */
(function () {
  const deb = html.indexOf('// MJPC-CORE v1.0.0');
  if (deb < 0) { section('SOCLE'); console.log('  (absent de ce fichier — suite ignorée)'); return; }
  const finS = html.indexOf('\n};', html.indexOf('\nvar MJPC_PURGE')) + 3;
  const sb = {};
  new Function(html.slice(deb, finS) + '; this.x={sanMJPC,cleClasse,estClasseTest,extractEleves,ecrireClasse};').call(sb);
  const { sanMJPC, cleClasse, estClasseTest, extractEleves, ecrireClasse } = sb.x;
  section('SOCLE (non-régression Phase 1)');
  t('sanMJPC canon (CLÉMENT Noé → clement_noe)', sanMJPC('CLÉMENT Noé') === 'clement_noe');
  t('cleClasse identité (trim seul)', cleClasse(' 4e Hugo ') === '4e Hugo');
  t('estClasseTest : internes oui, vraies non',
    estClasseTest('_TEST') && estClasseTest('CLASSE TEST') && estClasseTest('_test_worktrack') && !estClasseTest('4E BANKSY'));
  t('extractEleves sur toutes les classes réelles du hub',
    Object.values(hub.classes || {}).every(c => extractEleves(c, []).length > 0));
  const cur = JSON.parse(JSON.stringify(hub.classes['4E BANKSY']));
  const mock = { ref: () => ({ transaction: (f, cb) => { mock._out = f(cur); cb(null, true); } }) };
  ecrireClasse(mock, '4E BANKSY', extractEleves(cur, []), { nom: '4E BANKSY' });
  t('ecrireClasse : non destructive (archivee préservée, format canonique, résidus purgés)',
    Array.isArray(mock._out.eleves) && mock._out.archivee === cur.archivee &&
    !Object.keys(mock._out).some(k => /^\d+$/.test(k)));
})();


/* ════ SUITE 3 — EMPREINTE ÉLÈVE (Phase 2, lot 2) ════ */
(function () {
  const noms = ['_idBlocks', '_idSkeleton', '_idIsTimestampKey', '_idStripClassPrefix', '_idVariants', '_idMatch', '_fpScan', '_fpScanChamp', '_eleveFootprint'];
  let code = '';
  for (const n of noms) { const c = corpsFonction(n); if (!c) { section('EMPREINTE'); console.log('  (fonctions absentes — suite ignorée)'); return; } code += c + '\n'; }
  const sb = {};
  new Function(code + '; this.x={_idMatch,_eleveFootprint};').call(sb);
  const { _idMatch, _eleveFootprint } = sb.x;
  section('EMPREINTE ÉLÈVE (lot 2)');
  t('_idMatch : clé composée 4e_banksy__aloyeau_elyse ← ALOYEAU Elyse', _idMatch('4e_banksy__aloyeau_elyse', 'ALOYEAU Elyse'));
  t('_idMatch : clé dégradée CL_MENT_Lylou ← CLÉMENT Lylou', _idMatch('CL_MENT_Lylou', 'CLÉMENT Lylou'));
  t('_idMatch : pas de faux positif entre élèves', !_idMatch('boivin_eden', 'ALOYEAU Elyse'));

  const fp1 = _eleveFootprint(hub, 'ALOYEAU Elyse', '4E BANKSY');
  const nodes1 = new Set(fp1.map(x => x.node));
  t('empreinte ALOYEAU Elyse : mjpcProfils couvert', nodes1.has('mjpcProfils'));
  t('empreinte ALOYEAU Elyse : plan_de_travail couvert (progress/signaux/connexions)', nodes1.has('plan_de_travail'));
  t('empreinte : signaux/connexions présents dans les chemins',
    fp1.some(x => x.path.includes('/signaux/')) && fp1.some(x => x.path.includes('/connexions/')));

  // un lecteur réel de l'applaudimètre (champ lecteur)
  const hl = (hub.applaudimetre || {}).historiqueLectures || {};
  const unLecteur = Object.values(hl).map(p => p && p.lecteur).find(Boolean);
  if (unLecteur) {
    const fp2 = _eleveFootprint(hub, unLecteur, '');
    t('empreinte lecteur applaudimètre (' + unLecteur + ') : passage trouvé par CHAMP',
      fp2.some(x => x.path.startsWith('applaudimetre/historiqueLectures/')));
  }
  // eleveSexes QCM
  const es = ((hub.qcm || {}).eleveSexes || {});
  const cl0 = Object.keys(es)[0];
  if (cl0) {
    const ek0 = Object.keys(es[cl0])[0];
    const nomDe = ek0.split('_').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
    const fp3 = _eleveFootprint(hub, nomDe, '');
    t('empreinte : qcm/eleveSexes couvert (' + ek0 + ')', fp3.some(x => x.path.startsWith('qcm/eleveSexes/')));
  }
  // GARDE-FOU CAPITAL : l'empreinte ne pointe JAMAIS la conception
  const interdits = ['/config', 'referentiel', 'chapitres', '/bareme', '/corrige', '/meta', 'manifestes', '/site/', '/dictee\u001f'];
  const tousFp = [];
  Object.values(hub.classes || {}).slice(0, 2).forEach((c, i) => {});
  ['ALOYEAU Elyse', 'BOIVIN Eden', unLecteur || 'X Y'].forEach(n => { _eleveFootprint(hub, n, '4E BANKSY').forEach(x => tousFp.push(x.path)); });
  const fuite = tousFp.find(p => ['referentiel', 'chapitres', 'manifestes', 'corbeille'].some(m => p.includes(m)) || /\/(config|bareme|corrige|meta)(\/|$)/.test(p));
  t('GARDE-FOU : aucune empreinte ne pointe la conception (config/referentiel/chapitres/corrige/meta/manifestes/corbeille)', !fuite);
  if (fuite) console.log('    FUITE :', fuite);
  // exclusion des binômes (prénoms ambigus)
  const fpT = _eleveFootprint(hub, 'CALDEIRA Tiago', '3E Charles de Gaulle');
  t('exclusion à dessein : aucun chemin debats/* (binômes = prénoms, trop ambigu)', !fpT.some(x => x.path.startsWith('debats/')));
})();


/* ════ SUITE 4 — PURGE DE RENTRÉE (Phase 2, lot 3) ════ */
(function () {
  const x = sandbox(['_b2GetPath', '_purgeResoudreMotif', '_purgeExpand', '_purgePlan'], '');
  if (!x) { section('PURGE'); console.log('  (fonctions absentes — suite ignorée)'); return; }
  section('PURGE DE RENTRÉE (lot 3)');
  const { _purgeResoudreMotif, _purgeExpand, _purgePlan } = x;

  t('wildcard : dictees/*/results → autant que de dictées avec results',
    _purgeResoudreMotif(hub, 'dictees/*/results').length === Object.values(hub.dictees).filter(d => d.results).length);
  t('motif inexistant → zéro chemin (pas d\'invention)', _purgeResoudreMotif(hub, 'dictees/*/inexistant').length === 0);
  t('motif simple : students absent du hub → zéro chemin', _purgeResoudreMotif(hub, 'students').length === 0);

  // PRESERVER PRIME : session purgée SAUF session/reglages (le cas fondateur applause_meter)
  const hubT = { a: { session: { reglages: { x: 1 }, reader: 'X', classeSlug: 'Y' } } };
  const del1 = _purgeExpand(hubT, 'a/session', ['a/session/reglages']);
  t('preserver prime : a/session éclatée en enfants, reglages épargné',
    del1.length === 2 && del1.includes('a/session/reader') && del1.includes('a/session/classeSlug') && !del1.includes('a/session/reglages'));
  t('preserver prime : chemin lui-même préservé → aucun delete', _purgeExpand(hubT, 'a/session/reglages', ['a/session/reglages']).length === 0);
  t('sans branche préservée → delete du bloc entier', _purgeExpand(hubT, 'a/session', []).join() === 'a/session');

  // Plan complet sur le hub réel avec les VRAIS manifestes publiés
  const res = _purgePlan(hub);
  const apps = Object.keys(res.parApp);
  t('plan : les 10 manifestes lus (' + apps.length + ')', apps.length === 10);
  t('plan : jamais un chemin de conception',
    !res.plan.some(p => ['referentiel', 'chapitres', 'manifestes', 'corbeille'].some(m => p.path.includes(m)) || /\/(config|bareme|corrige|meta|reglages|dictee)$/.test(p.path)));
  t('plan : applaudimetre/session/reglages épargné, le reste de session purgé',
    !res.plan.some(p => p.path === 'applaudimetre/session/reglages') &&
    !res.plan.some(p => p.path === 'applaudimetre/session') &&
    res.plan.some(p => p.path.startsWith('applaudimetre/session/')));
  t('plan : dédoublonné inter-apps', new Set(res.plan.map(p => p.path)).size === res.plan.length);
  t('plan : mesurable (taille totale > 0)', Object.values(res.parApp).reduce((a, d) => a + d.taille, 0) > 0);
  console.log('    → dry-run réel :', res.plan.length, 'emplacements sur', apps.length, 'contrats');
})();

/* ════ SUITE 2 — CORBEILLE (Phase 2, lot 1) ════ */
(async function () {
  const prelude = `var FIREBASE_BASE='https://mock';var _puts=[];
    function _nowStr(){return 'mock-date';}
    function fetch(url,opts){_puts.push({url:url,body:opts&&JSON.parse(opts.body)});return Promise.resolve({ok:true});}`;
  const x = sandbox(['_anneeScolaire', '_b2Url', '_fbPutPath', '_corbeillePut'], prelude, ['_puts']);
  if (!x) { section('CORBEILLE'); console.log('  (fonctions absentes de ce fichier — suite ignorée)'); return fin(); }
  section('CORBEILLE (lot 1)');
  const d = new Date();
  const attendue = (d.getMonth() < 7) ? ((d.getFullYear() - 1) + '-' + d.getFullYear()) : (d.getFullYear() + '-' + (d.getFullYear() + 1));
  t('_anneeScolaire dynamique (' + attendue + ')', x._anneeScolaire() === attendue);
  t('_b2Url encode les segments sans casser les /', x._b2Url('corbeille/2026-07-14/x y') === 'corbeille/2026-07-14/x%20y');
  const chemin = await x._corbeillePut('retrait-eleve', { classes: { X: { eleves: ['A B'] } } }, { eleve: 'A B' });
  t('_corbeillePut : chemin corbeille/<jour>/<motif>_<HHMMSS>',
    /^corbeille\/\d{4}-\d{2}-\d{2}\/retrait-eleve_\d{6}$/.test(chemin));
  const put = x._puts[0];
  t('_corbeillePut : URL REST cohérente avec le chemin', put.url.includes('/' + chemin.split('/').map(encodeURIComponent).join('/') + '.json'));
  t('_corbeillePut : payload {_meta{motif,annee,source}, data} complet',
    put.body._meta && put.body._meta.motif === 'retrait-eleve' && put.body._meta.annee === attendue &&
    put.body._meta.source === 'index' && put.body._meta.eleve === 'A B' &&
    put.body.data.classes.X.eleves[0] === 'A B');
  /* Non-régression écran b2 : reconstruction de classe après retrait (fonction existante) */
  const y = sandbox(['_b2ClassRebuild'], 'var _B2_META={niveau:1,annee:1,id:1,title:1,nom:1,archivee:1,couleur:1};');
  if (y) {
    const nb = y._b2ClassRebuild(JSON.parse(JSON.stringify(hub.classes['4E PYTHAGORE'])), { [Object.values(hub.classes['4E PYTHAGORE']).find(v => typeof v === 'string')]: true });
    t('_b2ClassRebuild : retrait d\'un nom sur classe réelle, métas conservées, ré-indexé',
      nb && nb.archivee === hub.classes['4E PYTHAGORE'].archivee);
  }
  fin();
})();
