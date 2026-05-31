# Meridian — Software Studio Website

A single-page marketing site for an independent software studio, built in the **"Architectural Night Sky"** design system: a dark, atmospheric hero contrasted with a clean, minimalist light UI, a single cool-blue accent, elegant serif headlines, and soft layered shadows.

## Run it

No build step required. Just open the file:

- Double-click `index.html`, **or**
- Serve it locally (recommended, so fonts/assets load cleanly):

```bash
# Python 3
python -m http.server 8000
# then visit http://localhost:8000
```

## Structure

```
project new/
├── index.html   # All markup (nav, hero, services, projects, process, about, contact, footer)
├── styles.css   # Full design-token system + components + responsive rules
├── script.js    # Mobile nav, scroll-reveal, contact-form validation
└── README.md
```

## Sections

- **Hero** — dark Night Sky background with an SVG city skyline, headline, two CTAs, stat cards
- **Services** — 7 capability cards + a "talk it through" note card
- **Featured Projects** — tasteful "Coming soon" empty state
- **Process** — Discovery → Design → Development → Deployment → Support
- **About** — short studio story with accent panel
- **Contact** — brand-blue featured card with a working (front-end only) contact form

## Customizing

- **Rename the studio:** replace `Meridian` and `hello@meridian.studio` throughout `index.html`.
- **Add real projects:** swap the `.empty-state` block in the `#projects` section for project cards.
- **Colors / spacing / type:** every value lives as a CSS custom property in `:root` at the top of `styles.css`, taken directly from the provided design tokens.
- **Fonts:** headlines use `PPMondwest` first if available, falling back to `Instrument Serif`. To use the real PPMondwest, add an `@font-face` for it and it will apply automatically. Body text uses `Inter` for the `af` role.

## Notes

- The contact form is front-end only. Wire it to a backend or a form service (Formspree, Basin, etc.) to actually deliver messages.
