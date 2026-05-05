# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static teacher-built site for a French middle-school French class (Mr. Meney). Five self-contained HTML files, no build step, no package manager. Each `.html` ships its own inline CSS and `<script>` blocks and pulls React 18 (UMD) and Firebase 8.10.1 from CDNs. The repo is the deployment artifact — pushing to `main` on `siteflow-io/monsieurjaipascompris` updates the live site (in-app messages reference a "~30s" propagation delay, consistent with GitHub Pages or similar).

## Files and their roles

| File | Role |
| --- | --- |
| `index.html` | Student portal. Login (Nom/Prénom), level picker (6e/5e/4e/3e), per-level chapter list, tabs for "Dictée / Réécriture / Image / Étude / Rédaction" that embed the other apps in an iframe modal. Also hosts the hidden admin/upload UI. |
| `dictee_universelle.html` | Co-evaluated dictation (peer-dictates-peer) app. Reads/writes Firebase `/dictees`. Has student and prof modes. |
| `correction_dictee.html` | Student reviews their paper-graded dictation: types each correction, earns bonus points via G/L/M/I/X typed errors plus mini grammar/lexique quizzes. Reads/writes `/correction_dictee`. |
| `reecriture.html` | Generic rewriting-exercise app. Reads/writes `/reecritures`. Includes the reusable `snapshotExport`/`snapshotImport`/`renderSnapshotPanel` helpers (a generic Firebase-ref export/import you can reuse from other prof tools). |
| `reecriture_bb4e.html` | Specialized variant of `reecriture.html` for the 4e mock-brevet ("Brevet Blanc 4e"), with hard-coded `BB4E_MODIFS` exercise data. |

These files share no JS modules — they are independent SPAs that happen to talk to the same backends. Editing helper logic in one does not propagate to the others; if you change something like score weighting, find every copy.

## Backends

Two services, both inlined in every file that needs them. Neither lives in this repo — code changes there happen elsewhere.

1. **Firebase Realtime Database** — project `dictee-5e-ch4`, region `europe-west1`. URL: `https://dictee-5e-ch4-default-rtdb.europe-west1.firebasedatabase.app`. Top-level paths in active use:
   - `/classes` — class rosters (loaded into the `CLASSES` global)
   - `/dictees/{id}/config` — co-evaluated dictation configs
   - `/correction_dictee/{id}/config` — manuscript-dictation corrections
   - `/reecritures/{id}/config` — rewriting exercises
   - `/site/{level}/published` — array of chapter numbers visible to students for that level (used by `index.html` to lock/unlock chapter cards)
   - Each `{id}` typically has sibling subtrees for student submissions alongside `config`.
   - Two slightly different API keys appear across files (`AIzaSyBWKMG…` vs `AIzaSyDROt…`) but they point at the same project — both are kept working.

2. **Google Apps Script web app** — `APPS_SCRIPT_URL` in `index.html` (line 419). Used only by the portal for: `login` (validates Nom+Prénom against the class roster), `upload` / `associate` / `get_folder_url` / `remove_doc` (manage Drive-hosted teaching docs), `getdocs` (registry of uploaded docs that populates `DOCS_CACHE`), and `open` / `close` session-tracking events. Many calls use `mode:'no-cors'` and ignore the response.

## Cross-cutting conventions to know before editing

- **Levels are `'6e' | '5e' | '4e' | '3e'`** (French middle-school grades; 3e is the oldest/final year). The `?n=<level>` query param selects level. `levelAccess` in `index.html` (line 424) gives cumulative downward access — a 3e student sees all levels, a 6e student sees only 6e.
- **Prof gate.** All four sub-apps share the pattern `var PROF_CODES=[3141,1312];` plus a `?mode=prof` / `?mode=eleve` query param. `dictee_universelle.html` additionally tries to load codes from a config object (line 552). Treat these as obfuscation, not security — anyone with the file can read the codes.
- **Test bypass.** `index.html` accepts the literal credentials `MENEY` / `MONSIEUR` (line 497) without contacting the Apps Script and grants test access to all four levels.
- **Admin mode in the portal.** `Ctrl+Space` toggles admin (`activateAdmin`, line 531). Five taps on the "Prototype" badge or logo do the same (`handleBadgeTap`). Admin mode enables drag-and-drop uploads onto `.doc-item[data-docid]` slots and `.fiche-drop-zone[data-section]` containers, plus per-chapter "publier pour les élèves" toggles that write to `/site/{level}/published`. Files >30 MB trigger a Drive-paste fallback (`showBigFileGuide_`).
- **React is UMD via CDN.** No JSX, no bundler — these files use the `var h=React.createElement` pattern. Match that style; don't introduce JSX or imports.
- **Snapshot tool** (`snapshotExport` / `snapshotImport` / `renderSnapshotPanel` in `reecriture.html` ~line 88) is intentionally generic — it takes any Firebase ref path. When adding a new prof tool, prefer copying this pattern over inventing a new one.
- **Doc embedding.** The student portal opens iframes via `openViewer(title, url)` (line 545); Drive `/view` URLs are auto-rewritten to `/preview`. New embeddable apps should accept query-string config and render fine inside an iframe.
- **Tracking.** Once a student logs in, `TRACK` in `index.html` records `open` / `close` sessions with active-time, scroll-max, and interaction counts. `trackClose` uses `navigator.sendBeacon` on unload. If you add a new tab/app inside the portal, call `trackOpen(chapitre, doc, type)` when it opens or telemetry will be missing.

## Running and testing

- **No build, no tests, no lint.** Open the HTML files directly in a browser, or serve the directory (e.g. `python -m http.server`) — the only reason to use a server is so that relative paths in iframes (`reecriture.html`, `dictee_universelle.html`, etc. invoked from `index.html`) resolve.
- **Deploying** is `git push origin main`. There is no staging environment.
- **The four levels** can be exercised locally without logging in by visiting `index.html?n=6e`, `?n=5e`, `?n=4e`, or `?n=3e` and using the `MENEY` / `MONSIEUR` test profile, or by hitting `Ctrl+Space` to enter admin/dev mode.
