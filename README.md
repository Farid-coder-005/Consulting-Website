# Gurcan Partners — Frontend Clone (Faaliyet Alanlarımız)

A clean, fully responsive rebuild of the Gurcan Partners practice-areas page.
Built with **semantic HTML5 + Tailwind CSS (CDN) + vanilla JS** — no build step,
no tracking scripts, no third-party bloat.

## File structure

```
.
├── index.html      # Semantic page markup (Header, Hero, Services, Offices,
│                   #   Memberships, FAQ, Contact, Footer)
├── styles.css      # Minimal custom CSS (sticky shadow, accordion anim, a11y)
├── app.js          # Vanilla JS: mobile drawer, search, lang menu,
│                   #   accordion, back-to-top, sticky header
└── README.md       # This file
```

## What was cleaned up

The original WordPress/Flatsome export contained large amounts of third-party
noise that were **removed**:

- Meta Pixel, Google Analytics / gtag, Google Tag Manager
- Zoho SalesIQ chat widget
- Microsoft Clarity / Pagesense
- Google reCAPTCHA + Contact Form 7 scripts
- PopupBuilder / Flatsome theme inline JS & huge inline `<style>` blocks

Brand assets (logo, office images, flags, membership logos) are preserved and
loaded directly from `gurcanpartners.com` exactly as provided.

## Brand tokens (Tailwind config)

| Token        | Value    | Usage                       |
|--------------|----------|-----------------------------|
| `brand`      | `#122352`| Primary color, header/footer|
| `accent`     | `#2079be`| Secondary color, buttons    |
| `success`    | `#58a81e`| Success states              |
| `alert`      | `#dd3333`| Error states                |
| `font-heading` | Raleway| Headings                    |
| `font-body`  | Open Sans| Body copy                   |
| `font-display`| Cantata One | Display accents         |

## Interactivity (vanilla JS)

- **Mobile drawer** — slide-in menu with overlay + ESC to close
- **Search panel** — collapsible header search
- **Language switcher** — accessible dropdown (13 languages)
- **FAQ accordion** — single-open, animated, keyboard friendly
- **Back-to-top** — appears after 400px scroll
- **Sticky header** — subtle shadow on scroll
- Dropdowns also work on hover (desktop) via pure CSS

## Framework integration

The page is already component-oriented. To port into a modern framework:

- **React / Next.js** — split each `<section>` into a component
  (`<Header/>`, `<Hero/>`, `<ServicesGrid/>`, `<GlobalLocations/>`,
  `<Memberships/>`, `<Faq/>`, `<ContactForm/>`, `<Footer/>`). Move `tailwind.config`
  into `tailwind.config.js` and drop the CDN `<script>`. The `app.js` logic maps
  to `useEffect` hooks / component state.
- **Vue / Nuxt** — same sections become Single File Components (`.vue`).
- Replace the Tailwind CDN with a proper PostCSS/Tailwind build for production.

## Deployment

Open `index.html` directly, or serve statically:

```bash
npx serve .
# or
python -m http.server 8000
```
