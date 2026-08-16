# كنان لأسطوانات الغاز (Kenan for Gas Bottles) — Gas Cylinder Supply Website

A fully static, bilingual (Arabic/English) marketing website for a
gas cylinder supply company (medical & industrial oxygen cylinders,
industrial gas cylinders, special gas cylinders). Built with plain
HTML5 / CSS3 / vanilla JavaScript only — no build step, no framework,
no backend, no database. Works by opening `index.html` directly via
`file://` and also when hosted on GitHub Pages.

## Project purpose

This is a template/demo company website intended to be customized and
deployed as a real small-business site. All company details (name, phone,
email, address, social links, map) are placeholders and centralized in one
place for easy editing — see [Where to edit placeholder info](#where-to-edit-placeholder-company-infoimages).

## File structure

```
/
├── index.html          Home page
├── services.html        Services page (service cards + gallery + lightbox)
├── news.html             News page (news cards + article modal)
├── about.html            About Us page (story, vision, mission, values, stats)
├── contact.html           Contact page (contact cards, map, contact form)
├── README.md
├── .nojekyll              Empty file — tells GitHub Pages to skip Jekyll processing
└── assets/
    ├── css/
    │   └── style.css      Shared design system + layout for all pages
    ├── js/
    │   └── main.js        COMPANY config, translations, data, all interactivity
    ├── images/
    │   ├── logo/           Logo SVGs (dark + light variants)
    │   ├── hero/            Home page hero illustration
    │   ├── products/        4 product category illustrations
    │   ├── services/        6 service illustrations
    │   ├── news/             3 news thumbnail illustrations
    │   └── about/            About page illustration
    └── icons/                Small inline-style UI icons (phone, whatsapp,
                               email, location, menu, close, check, arrow,
                               social icons, feature icons)
```

All images are original hand-authored SVG graphics (no photography), styled
to the site's navy / steel-gray / safety-red industrial color palette.

## How to preview locally

**Option A — just open the file.** Because the site uses no `fetch()` calls
and no server-side code, you can simply double-click `index.html` (or open
it via `File > Open` in your browser). All translations, language
switching, product/news rendering, forms, lightbox and modals work fully
offline.

**Option B — simple static server** (recommended, avoids some browsers'
stricter `file://` security defaults):

```bash
cd /path/to/this/project
python3 -m http.server 8000
# then visit http://localhost:8000
```

Any other static file server (e.g. `npx serve`, VS Code "Live Server")
works equally well — there is nothing to build or compile.

## How to deploy to GitHub Pages

1. Push this project to a GitHub repository (the site can live at the
   repository root, as this file structure assumes).
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the branch (e.g. `main`) and the `/ (root)` folder, then Save.
5. GitHub will publish the site at
   `https://<username>.github.io/<repository-name>/`.
6. The included `.nojekyll` file is required so GitHub Pages serves the
   `assets/` folder and files as-is, without Jekyll trying to process them.

All internal links and asset references use **relative paths**
(`assets/css/style.css`, `services.html`, etc.), so the site works
correctly whether it's deployed at the domain root or in a repository
subpath.

## Where to edit placeholder company info/images

### Company details (single source of truth)

Open **`assets/js/main.js`** and edit the `COMPANY` object at the very top
of the file:

```js
const COMPANY = {
  nameAr: "كنان لأسطوانات الغاز",
  nameEn: "Kenan for Gas Bottles",
  phone: "+962776104645",
  whatsapp: "962776104645",      // digits only, no + or leading 00
  email: "baniataabdallah0@gmail.com",
  addressAr: "عمّان، الأردن",
  addressEn: "Amman, Jordan",
  mapUrl: "https://www.google.com/maps?q=Amman,Jordan&output=embed",
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    whatsapp: "https://wa.me/962776104645"
  }
};
```

Changing these values automatically updates every `tel:`, `mailto:`,
`wa.me`, address, and map embed reference across all 5 pages (they're
wired up via `data-company-*` attributes in the HTML and populated by
`initCompanyLinks()` in `main.js`).

For the embedded map on `contact.html`, generate your own embed URL from
Google Maps ("Share" → "Embed a map") and paste it into `mapUrl`. The
placeholder currently points to a generic country/city-level Amman, Jordan
query — it is **not** a real business location and must be replaced before
production use.

### Site text / translations

All Arabic and English copy lives in the `translations` object in
`assets/js/main.js` (`translations.ar` / `translations.en`). Page markup
uses `data-i18n="some.key"` attributes that are filled in from this object,
so you generally only need to edit the JS file, not the HTML, to change
wording.

### Images

Replace any SVG file under `assets/images/<logo|hero|products|services|news|about>/`
with your own artwork (SVG, or swap in raster images and update the
`<img>` `src` in the HTML / `main.js` product & news data arrays
accordingly). Filenames are lowercase-hyphenated and referenced with
relative paths, so you can drop in replacements with the same filenames
without touching any other file.

### Products / services / news content

- `productsData` in `main.js` drives the Home product cards and showcase
  gallery, and the Services gallery.
- `servicesData` in `main.js` drives the 6 service cards on `services.html`.
- `newsData` in `main.js` drives the News cards and the "read more" modal
  content on `news.html`.

Edit these arrays (and the matching translation keys) to add, remove, or
change entries — the HTML re-renders them automatically on page load and
on language switch.

## Notes

- Default language is Arabic (`dir="rtl"`); a language switcher in the
  header toggles to English and remembers the choice in `localStorage`
  across pages and visits.
- The contact form has no backend: submitting it validates the fields
  client-side, then opens WhatsApp with a pre-filled message (`wa.me` link)
  and offers a `mailto:` link as a fallback. No data is transmitted to any
  server.
- Respects `prefers-reduced-motion` for scroll animations and smooth
  scrolling.
