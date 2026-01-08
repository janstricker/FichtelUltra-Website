# FichtelUltra — Website

Dieses Repository enthält die statische Website der FichtelUltra-Community, erzeugt mit Hugo. Die Seite veröffentlicht Berichte, Event-Informationen, GPX-Tracks und Fotogalerien rund um Läufe und Projekte der Community.

## Kurzbeschreibung

Die Seite ist als Hugo-Website aufgebaut und nutzt ein lokales Theme unter `themes/themefu`. Die Inhalte (Blog, Events, Info-Seiten) liegen in `content/`, statische Assets wie CSS, JS, Fonts und fertige Bilder in `static/`. Die generierte Website landet nach einem Build in `public/`.

## Was du hier findest

- Blog-Artikel und Erlebnisberichte
- Event-Seiten mit GPX-Tracks und Bildergalerien
- Informationsseiten (Impressum, Datenschutz, Kontakt)

## Schnellstart — lokale Entwicklung

Voraussetzungen:

- Hugo (Extended empfohlen)
- Optional: Node.js / npm wenn du zusätzliche Asset-Workflows nutzen möchtest

Lokaler Entwicklungsserver:

```bash
# im Projektstamm
hugo server -D
# Seite dann unter http://localhost:1313
```

Produktions-Build:

```bash
hugo -D -v
# Fertige Website in ./public
```

Hinweis: Einige Theme-spezifische Assets liegen in `themes/themefu/` und `assets/` — passe ggf. Build-Schritte an, falls du ein Asset-Buildsystem (z. B. npm/webpack, gulp) ergänzen willst.

## Projektstruktur (Kurzüberblick)

- `archetypes/` — Standard-Frontmatter für neue Inhalte
- `content/` — Hauptinhalte (Blog, Events, Info)
- `layouts/` / `themes/themefu/layouts/` — Templates und Partials
- `static/` — Öffentliche Assets (CSS, JS, Bilder, Fonts)
- `public/` — Generierter Output (nach `hugo`-Build)
- `hugo.toml` — Hugo-Konfiguration

## Inhalte erstellen

Neue Beiträge anlegen:

- Lege Markdown-Dateien in `content/blog/` oder `content/events/` an.
- Verwende aussagekräftige Dateinamen mit Datum: `YYYY-MM-DD-titel/index.md`.
- Nutze das vorhandene Frontmatter als Vorlage (siehe `archetypes/default.md` oder bestehende Posts).

Bilder und Medien:

- Lade Bilder in die passenden `images/`-Ordner unter dem jeweiligen Inhalt oder nutze `static/` für globale Assets.
- Komprimiere Bilder vor Upload, nutze responsive Formate (WebP) wenn möglich.

## Deployment — kurze Empfehlungen

- GitHub Pages / GitHub Actions: Baue mit `hugo` in CI und deploye `public/` in den Pages-Branch.
- Netlify / Cloudflare Pages / Vercel: Automatisches Deploy aus dem Repo; konfiguriere Build-Befehl `hugo`.

Beispiel GitHub Actions (Kurz): baue mit `peaceiris/actions-hugo` und deploye `public/`.

## Mitwirken

- Vorschläge, Fehler oder Inhalte: öffne ein Issue.
- Beiträge: öffne einen Pull Request mit Markdown-Inhalten oder Theme-Anpassungen.
- Bitte halte dich an bestehende Frontmatter-Felder und Dateinamenskonventionen.

## Tests & Qualität

Dieses Projekt enthält keine automatisierten Tests. Empfohlene Smoke-Checks:

- Lokaler Hugo-Server starten und Seiten visuell prüfen
- `hugo`-Build lokal ausführen und Ausgabe in `public/` kontrollieren

## Kontakt

Repository-Eigentümer: janstricker

Bei Fragen oder Beiträgen: Issue/PR im Repository.
