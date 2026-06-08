# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Versioning & Changelog (always do this automatically)

**Every time a feature is added or changed**, update these three things in the same commit — never wait to be asked:

1. Version string in `index.html` (search for `header-version`) — follow semver: patch for fixes, minor for new features.
2. Version table in `README.md` (first heading + historial table).
3. `CHANGELOG.md` — add a new `## [x.y.z] — YYYY-MM-DD` section at the top with ### Agregado / ### Cambiado / ### Corregido entries.

## Deployment

The only way to publish changes is:

```bash
git add <files>
git commit -m "descripción"
git push
```

GitHub Pages picks up the push automatically (~1 min). There is no build step, no package manager, and no dependencies.

Live URL: `https://lucasvicente-com-ar.github.io/campers-app/`

## Architecture

This is a self-contained PWA with no framework, no bundler, and no external libraries.

| File | Role |
|---|---|
| `index.html` | The entire app — CSS, HTML, and JS in one file |
| `manifiesto.html` | Standalone page with the family manifesto |
| `sw.js` | Service worker — caches files for offline use |
| `manifest.json` | PWA metadata (icons, start URL, theme) |
| `google_apps_script.js` | Server-side script deployed in Google Sheets to receive form submissions |

### Key constants in `index.html`

- **`SHEETS_URL`** (line 742): the Google Apps Script Web App endpoint. Must be updated manually if the Apps Script is redeployed.
- **`TEMAS`**: color theme per child (Salvador → blue, Eva → pink).
- **`NIVELES`**: point thresholds for the gamification levels (Camper → Explorador → Aventurero → Leyenda → Dios del Rock).
- **`RECOMPENSAS`**: reward catalog that kids can redeem with points.

### State (localStorage)

All client-side state is persisted in `localStorage` with per-user keys:

| Key pattern | Content |
|---|---|
| `puntos_<nombre>` | Accumulated points (integer) |
| `streak_<nombre>` | JSON with `{ count, lastDate, record }` |
| `canjes_<nombre>` | JSON array of redeemed reward IDs |

### Service worker cache

The cache version is the string `'campers-v2'` in `sw.js`. Increment it whenever you want users to receive updated files (the browser won't evict the old cache otherwise).

### Google Apps Script

`google_apps_script.js` is **not** executed locally — it runs inside Google Sheets (Extensiones → Apps Script). After any change to that file, it must be redeployed as a Web App there and the new URL pasted into `SHEETS_URL` in `index.html`.
