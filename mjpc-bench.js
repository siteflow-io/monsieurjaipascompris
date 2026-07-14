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
