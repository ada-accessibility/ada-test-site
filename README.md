# ADA Test Site

A tiny React storefront seeded with intentional accessibility violations, used as a scan/fix target for the ADA Accessibility Intelligence tool.

## Known violations (by design)

| File | Violation | WCAG |
|---|---|---|
| `src/Header.jsx` | Icon-only button, no accessible name | 4.1.2 |
| `src/ProductCard.jsx` | Image with no `alt` text | 1.1.1 |
| `src/ProductCard.jsx` | Link with no discernible purpose ("Click here") | 2.4.4 |
| `src/ContactForm.jsx` | Input with no associated label | 1.3.1 / 4.1.2 |
| `src/ContactForm.jsx` | Low-contrast text (`.fine-print`) | 1.4.3 |
| `src/App.jsx` | Skipped heading level (h1 → h3) | 1.3.1 |

## Local dev

```
npm install
npm run dev
```

## Deploy (GitHub Pages)

Automatic via GitHub Actions (`.github/workflows/deploy.yml`) — no manual step needed:

- Push to `main` → deploys to the site root: https://ada-accessibility.github.io/ada-test-site/
- Push to any `ada/fix/**` branch → deploys a preview at `/preview/<branch>/`, e.g. https://ada-accessibility.github.io/ada-test-site/preview/ada/fix/button-name-abc123/

Preview deployments aren't auto-removed when a branch is deleted — clean up `preview/<branch>/` on the `gh-pages` branch manually if it accumulates.
