# Mero Works — Software Studio Website

The marketing site for **Mero Works**, an independent (Nepali-themed) software studio. Built in the **"Architectural Night Sky"** design system: atmospheric pixel-art imagery, a clean minimalist light UI on warm paper, a single cool-blue accent, an elegant editorial serif for headlines, and soft layered shadows.

## Run it

No build step required.

- Double-click `index.html`, **or**
- Serve it locally (recommended, so the `/projects` page and assets resolve cleanly):

```bash
# Python 3
python -m http.server 8000
# then visit http://localhost:8000
```

## Structure

```
project new/
├── index.html            # Home (nav, hero, vision, services, projects intro, process, about, contact, footer)
├── projects/
│   └── index.html        # Dedicated portfolio page (project cards)
├── styles.css            # Design-token system + components + responsive rules (shared)
├── script.js             # Mobile nav, scroll-reveal, contact-form validation (shared)
├── assets/
│   ├── hero.png          # Hero background artwork (Kathmandu Valley, sunset pixel art)
│   ├── footer.png        # Footer panoramic artwork (future-Nepal lakeside)
│   ├── about.png         # About-section pixel-art studio scene
│   ├── favicon.svg       # Mountain logo mark
│   └── browseros.png     # (optional) BrowserOS project cover — add to enable
└── README.md
```

## Sections

- **Hero** — full-screen artwork background, headline, two CTAs, stat cards
- **Vision** — editorial statement
- **Services** — architectural numbered list (01–07)
- **Projects (home)** — short intro + "View Projects" → `projects/index.html`
- **Process** — Discovery → Design → Development → Deployment → Support
- **About** — studio story + pixel-art panel
- **Contact** — brand-blue featured card with a working (front-end only) contact form
- **Footer** — panoramic artwork band fading into the Night Sky

## Adding / editing projects

All projects live in one file: **`projects-data.js`**. Append an object to the `window.PROJECTS` array and everything updates automatically — the `/projects` cards render from it, and the homepage hero stat counts it.

To add a cover image, set `cover: "assets/browseros.png"` on the project (paths are resolved correctly on the `/projects` page) and drop the file in `assets/`. With no cover, a styled placeholder with the project's monogram is shown.

## Customizing

- **Name / email:** the studio name is `Mero Works` and the email is `merowworks@gmail.com` — search & replace to change.
- **Logo:** an inline SVG mark (blue tile + white mountain "M"), also at `assets/favicon.svg`. Edit the SVG paths to refine it.
- **Colors / spacing / type:** every value is a CSS custom property in `:root` at the top of `styles.css` (original design tokens are intact; warm-theme tokens are additive).
- **Fonts:** body uses `Inter`; display headings use the elegant serif `Instrument Serif`; the wordmark uses bold `Space Grotesk`.

## Notes

- The contact form is front-end only. Wire it to a backend or a form service (Formspree, Basin, etc.) to actually deliver messages.
