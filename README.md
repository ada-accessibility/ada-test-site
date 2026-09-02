# ADA Test Site

A tiny React storefront seeded with intentional accessibility violations, used as a scan/fix target for the ADA Accessibility Intelligence tool.

## Known violations (by design)

Auto-Fix tier below reflects `RULES_WITH_FALLBACK` in `backend/services/auto_fix_service.py`:
Tier 1 = deterministic fallback, auto-merges free. Tier 2 = Gemini drafts a patch, opens a PR
for review. Tier 3 = `locate_source()` can't safely pin the violation to one place in the repo,
so no patch is even attempted.

| File | Violation (axe rule) | Tier |
|---|---|---|
| `index.html` | `<html>` has no `lang` attribute (`html-has-lang`) | 1 |
| `src/Header.jsx` | Icon-only button, no accessible name (`button-name`) | 1 |
| `src/ProductCard.jsx` | Image with no `alt` text (`image-alt`) | 1 |
| `src/ProductCard.jsx` | Icon-only link, no accessible name (`link-name`) | 1 |
| `src/ContactForm.jsx` | Input with no associated label (`label`) | 1 |
| `src/style.css` | Low-contrast text, `.fine-print` (`color-contrast`) | 1 |
| `src/App.jsx` | Skipped heading level, h1 → h3 (`heading-order`) | 1 |
| `src/App.jsx` | Page content not contained by a landmark (`region`, `landmark-one-main`) | 2 |
| `src/ContactForm.jsx` | Select with no accessible name (`select-name`) | 2 |
| `src/ContactForm.jsx` | Invalid ARIA attribute value, `aria-invalid="yes"` (`aria-valid-attr-value`) | 2 |
| `src/NewsletterSignup.jsx` | Custom checkbox missing `aria-checked` (`aria-required-attr`) | 2 |
| `src/NewsletterSignup.jsx` | Iframe with no title (`frame-title`) | 2 |
| `index.html` | No `<title>` (`document-title`) | 3 |
| `index.html` | Zoom disabled via viewport meta (`meta-viewport`) | 3 |
| `src/NewsletterSignup.jsx` | `aria-describedby` points to a duplicated `id` (`duplicate-id-aria`) | 3 |

Notes:
- `autocomplete-valid` is deliberately **not** included — it's tagged `wcag21aa`, and the scan
  in `scripts/run_ada_check_python.py` only runs `wcag2a`/`wcag2aa`/`best-practice`, so that rule
  can never surface here regardless of the Best Practice toggle. Widening that tag list is a
  separate change (it affects every scan, not just this site).
- Plain `duplicate-id` and `duplicate-id-active` are tagged `deprecated`/`wcag2a-obsolete` in the
  current axe-core version (WCAG 4.1.1 was dropped from WCAG 2.2) and never run either — only
  `duplicate-id-aria` is still active.

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
