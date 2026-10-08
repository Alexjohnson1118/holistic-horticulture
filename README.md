# Holistic Horticulture — website

A 5-page static site: `index.html`, `services.html`, `workshops.html`, `about.html`, `contact.html`, styled by `styles.css`, with a small nav/form script in `script.js`. No build step — open `index.html` directly, or serve the folder (`python3 -m http.server`) for the nicest experience.

## Brand at a glance
- **Logo**: a sun made entirely of leaf-shaped petals, with a tiny sprout at its centre — reads as both "sun" and "growth" at once. Thin, hand-drawn-style line art, echoing tarot-card emblem design. Sits in the header/footer of every page as inline SVG (search `viewBox="0 0 100 100"` to find it).
- **Secondary mark**: a crescent moon with a small vine tucked into it — used as the "moon" half of the sun/moon pairing (see `celestial-divider` below).
- **Tarot-card framing**: key photos (hero images, Emelye's portrait) sit inside a `.tarot-frame` — a thin double border in `--line-gold` with a small ✦ star at each corner, directly echoing tarot-card borders. Used selectively (not on every placeholder) so it stays a signature touch rather than clutter.
- **Celestial divider**: a tiny "sun & moon" line-icon pairing (`.celestial-divider`) marks a couple of key section breaks (homepage "What we offer", About "How I work") — a subtle nod to the sun/moon duality without overusing it.
- **Card icons**: service-card icons sit inside a thin gold ring (`.icon-badge`) rather than a filled circle, echoing tarot medallion styling.
- **Fonts**: [Fraunces](https://fonts.google.com/specimen/Fraunces) for headings (whimsical-elegant serif), [Work Sans](https://fonts.google.com/specimen/Work+Sans) for body text. Loaded from Google Fonts in each page's `<head>`.
- **Colour palette** (all defined as CSS variables at the top of `styles.css`):
  | Variable | Hex | Use |
  |---|---|---|
  | `--cream` | `#F7F3EA` | page background (linen/oat — no synthetic brights) |
  | `--sage` | `#7E9075` | primary green |
  | `--sage-dark` | `#4B5A42` | headings, nav, footer |
  | `--sage-pale` | `#E4E9DD` | soft wash backgrounds, badges |
  | `--clay` | `#C98858` | accent — buttons, highlights (like an unglazed terracotta pot) |
  | `--line-gold` | `#AD8355` | thin ornamental linework — tarot frames, corner stars, icon rings |
  | `--charcoal` | `#3A3A32` | body copy |

## Where to drop in real content
- **Photos**: every dashed box with a label (e.g. "Hero photo — Emelye tending a border") is a placeholder. Search each HTML file for `img-placeholder` and swap the `<div class="img-placeholder">...</div>` block for a simple `<img src="assets/your-photo.jpg" alt="...">`. Keep the same aspect ratio noted inline (e.g. `aspect-ratio:4/3.2`) for the layout to hold.
- **Emelye's portrait**: `about.html`, near the top (`about-hero` section).
- **Gallery**: `about.html`, the 6-image grid near the bottom — swap for real plant/garden/environment photography.
- Put real image files in the empty `assets/` folder and update the `src` paths.

## Content you'll likely want to edit
- **Pricing** (`services.html`, `workshops.html`) — currently placeholder "from £" figures, easy to find and adjust.
- **Contact details** — email/location placeholders live in the footer (every page) and `contact.html`.
- **Contact form** — currently front-end only (shows a "Message sent" confirmation via `script.js`). Wire it to a real inbox by pointing the `<form>` at a service like Formspree, or swap in your own backend.

## Structure/tone decisions worth knowing
- "The Potting Shed Sessions" is the workshop brand name — hands-on, in-the-client's-own-garden lessons, positioned as the business's signature offering (pushed hardest on the homepage and given its own page).
- Industry language used for "no chemicals": **organic**, **chemical-free**, **no-dig**, **peat-free** — the common UK horticulture terms for this approach, used instead of generic "eco-friendly" to sound credible to an informed audience.
- RHS Level 2 is surfaced in the hero trust-strip, the about page badge, and the footer — it's the key credibility signal.
