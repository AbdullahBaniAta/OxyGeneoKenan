أكيد. هذا `README.md` مناسب للمشروع، ومجهز ليكون واضحًا على GitHub مع تعليمات التشغيل والنشر على GitHub Pages.

# Gas Cylinder Company Website

A modern, responsive, bilingual corporate website for a gas cylinder company specializing in the **sale and supply of oxygen cylinders, medical gas cylinders, and industrial gas cylinders**.

The website is built as a lightweight static website and is fully compatible with **GitHub Pages**.

Arabic is the primary language, with English as a secondary language.

---

## 🌐 Website

The website contains five main pages:

* 🏠 Home
* 🛠️ Services
* 📰 News
* 🏢 About Us
* 📞 Contact Us

---

## 🎯 Project Goals

The website is designed to present the company as:

* Professional
* Reliable
* Safe
* Modern
* Customer-focused
* Experienced in gas cylinder products

The main goal is to make it easy for customers to:

* Understand the company's services
* Browse products
* Learn about the company
* Contact the sales team
* Call the company directly
* Contact the company through WhatsApp
* Send an email
* Find the company's location through Google Maps

---

## 🌍 Languages

The website supports:

### Arabic

Arabic is the default language.

```text
العربية
```

The Arabic interface uses:

```html
<html lang="ar" dir="rtl">
```

### English

English is available through the language switcher.

```html
<html lang="en" dir="ltr">
```

The selected language is stored in `localStorage`.

---

# 📁 Project Structure

```text
gas-cylinder-company/
│
├── index.html
├── services.html
├── news.html
├── about.html
├── contact.html
├── README.md
├── .nojekyll
│
└── assets/
    │
    ├── css/
    │   └── style.css
    │
    ├── js/
    │   └── main.js
    │
    ├── images/
    │   │
    │   ├── logo/
    │   │
    │   ├── hero/
    │   │
    │   ├── products/
    │   │
    │   ├── services/
    │   │
    │   ├── news/
    │   │
    │   └── about/
    │
    └── icons/
```

---

# 🛠️ Technology

The website intentionally uses a simple static technology stack.

### Frontend

* HTML5
* CSS3
* JavaScript
* SVG

### Hosting

* GitHub Pages

### No Backend Required

The website does not require:

* PHP
* MySQL
* Node.js
* Laravel
* Yii
* WordPress
* Apache configuration
* Nginx configuration

This makes it easy to deploy directly to GitHub Pages.

---

# 🏠 Home Page

The Home page is the main marketing page.

It contains:

* Hero section
* Company introduction
* Product categories
* Services overview
* Why choose us
* Product showcase
* Call-to-action
* Phone contact
* WhatsApp contact

Example Arabic hero:

> حلول موثوقة لأسطوانات الغاز

Example description:

> نوفر أسطوانات غاز عالية الجودة للاستخدامات الطبية والصناعية، مع حلول موثوقة تلبي احتياجات عملائنا بأعلى معايير السلامة والجودة.

---

# 🛠️ Services

The Services page presents the company's main services.

Example services:

* بيع أسطوانات الأكسجين
* توريد أسطوانات الغاز
* أسطوانات الغاز الطبية
* أسطوانات الغاز الصناعية
* تجهيز الطلبات والكميات
* الاستشارات المتعلقة باختيار الأسطوانة المناسبة

Each service can contain:

* Image
* Arabic name
* English name
* Description
* Call-to-action

---

# 📰 News

The News page displays:

* Company news
* Product announcements
* Industry updates
* Safety information
* Company activities

Each news item contains:

* Image
* Date
* Category
* Title
* Description
* Read More

The first version can manage news using JavaScript/static HTML.

No database is required.

---

# 🏢 About Us

The About page contains:

* Company introduction
* Company story
* Vision
* Mission
* Values
* Company statistics
* Professional company images

Example values:

```text
Quality
Safety
Reliability
Transparency
Customer Service
Continuous Improvement
```

---

# 📞 Contact Us

The Contact page provides all important contact information.

## Phone

Phone numbers must be clickable:

```html
<a href="tel:+962XXXXXXXXX">
    +962 XX XXX XXXX
</a>
```

On mobile devices, clicking the number opens the phone application.

---

## 📱 WhatsApp

WhatsApp contact:

```html
<a href="https://wa.me/962XXXXXXXXX">
    تواصل معنا عبر واتساب
</a>
```

Replace the placeholder number with the company's real WhatsApp number.

---

## 📧 Email

Email must use:

```html
<a href="mailto:info@example.com">
    info@example.com
</a>
```

Replace the email with the company's real email address.

---

## 📍 Location

The Contact page includes a Google Maps section.

Example:

```html
<iframe
    src="YOUR_GOOGLE_MAP_EMBED_URL"
    loading="lazy"
    allowfullscreen>
</iframe>
```

Replace:

```text
YOUR_GOOGLE_MAP_EMBED_URL
```

with the actual company location.

---

# ⚙️ Company Configuration

Company information should be centralized in:

```text
assets/js/main.js
```

Example:

```javascript
const COMPANY = {
    nameAr: "اسم الشركة",
    nameEn: "Company Name",

    phone: "+962XXXXXXXXX",

    email: "info@example.com",

    whatsapp: "962XXXXXXXXX",

    addressAr: "عمّان، الأردن",

    addressEn: "Amman, Jordan",

    mapUrl: "YOUR_GOOGLE_MAP_EMBED_URL"
};
```

Update this configuration with the real company information.

---

# 🖼️ Adding Product Images

Product images should be placed inside:

```text
assets/images/products/
```

Example:

```text
assets/images/products/
├── oxygen-cylinder-01.jpg
├── oxygen-cylinder-02.jpg
├── medical-cylinder-01.jpg
├── industrial-cylinder-01.jpg
└── cylinder-group.jpg
```

Use descriptive filenames.

Recommended formats:

* WebP
* JPG
* PNG

WebP is preferred for large photographs.

---

# 📦 Product Data

Products can be managed through JavaScript.

Example:

```javascript
const products = [
    {
        image: "assets/images/products/oxygen-cylinder-01.jpg",

        titleAr: "أسطوانة أكسجين طبية",

        titleEn: "Medical Oxygen Cylinder",

        descriptionAr:
            "أسطوانة مخصصة للاستخدامات الطبية.",

        descriptionEn:
            "Cylinder designed for medical applications."
    }
];
```

This allows new products to be added without changing the overall page structure.

---

# 🎨 Design

The design follows a professional industrial style.

The visual direction focuses on:

* Industrial products
* Safety
* Quality
* Trust
* Professional photography
* Strong typography
* Clean layouts
* Clear CTAs

The design is inspired by the professional presentation of industrial gas cylinder companies such as Luxfer Gas Cylinders, while maintaining an original design and branding.

Reference:

[https://www.luxfercylinders.com/](https://www.luxfercylinders.com/)

---

# 📱 Responsive Design

The website is designed for:

* 📱 Mobile
* 📱 Tablet
* 💻 Laptop
* 🖥️ Desktop

Recommended breakpoints:

```css
/* Mobile */
@media (max-width: 767px)

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px)

/* Desktop */
@media (min-width: 1024px)
```

Mobile features include:

* Hamburger menu
* Touch-friendly buttons
* Responsive images
* Responsive product cards
* Stacked sections
* Responsive Google Maps
* Clickable phone number
* WhatsApp CTA

---

# 🔍 SEO

Each page should have:

* Unique page title
* Meta description
* Open Graph metadata
* Semantic HTML
* Proper heading hierarchy
* Descriptive image `alt` attributes

Example:

```html
<title>
شركة [اسم الشركة] | أسطوانات الأكسجين والغاز
</title>
```

Example description:

```html
<meta
    name="description"
    content="شركة متخصصة في بيع وتوريد أسطوانات الأكسجين وأسـطوانات الغاز الطبية والصناعية."
>
```

---

# ♿ Accessibility

The website follows basic accessibility principles.

Use semantic elements:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

Images should always have `alt` attributes.

Example:

```html
<img
    src="assets/images/products/oxygen-cylinder.jpg"
    alt="أسطوانة أكسجين طبية">
```

Buttons and links should be keyboard accessible.

---

# 🚀 Run Locally

Because this is a static website, no backend installation is required.

You can simply open:

```text
index.html
```

in a browser.

For a better development experience, use VS Code with the **Live Server** extension.

Then open:

```text
http://127.0.0.1:5500/
```

---

# 🐙 GitHub Setup

Create a new repository:

```text
gas-cylinder-company
```

Clone it:

```bash
git clone https://github.com/YOUR_USERNAME/gas-cylinder-company.git
```

Enter the project:

```bash
cd gas-cylinder-company
```

Copy the website files into the repository.

Then:

```bash
git add .
```

Commit:

```bash
git commit -m "Initial website"
```

Push:

```bash
git push origin main
```

---

# 🌐 GitHub Pages Deployment

Open the GitHub repository.

Go to:

```text
Settings
→ Pages
```

Under:

```text
Build and deployment
```

Select:

```text
Source: Deploy from a branch
```

Select:

```text
Branch: main
Folder: / (root)
```

Click:

```text
Save
```

GitHub will automatically deploy the website.

The website will normally be available at:

```text
https://YOUR_USERNAME.github.io/gas-cylinder-company/
```

---

# ⚠️ GitHub Pages Important Notes

Always use relative paths.

Correct:

```html
<link rel="stylesheet" href="assets/css/style.css">
```

Correct:

```html
<script src="assets/js/main.js"></script>
```

Correct:

```html
<img src="assets/images/products/product.jpg">
```

Avoid server-specific paths:

```text
/var/www/html/
```

---

# 📈 Future Improvements

The project can later be extended with:

* Products page
* Product details
* Product specifications
* Product comparison
* Request a Quote
* Downloadable product catalog
* Safety information
* Certifications
* FAQ
* Customer reviews
* Industries served
* Brands
* Dealer/distributor locations
* Advanced product gallery
* Individual news pages
* Contact form service
* Analytics
* Google Search Console

---

# 🧪 Pre-Deployment Checklist

Before publishing:

* [ ] Replace company logo
* [ ] Replace company name
* [ ] Replace phone number
* [ ] Replace WhatsApp number
* [ ] Replace email
* [ ] Replace address
* [ ] Add Google Maps location
* [ ] Add real product images
* [ ] Add real company images
* [ ] Add real services
* [ ] Add real news
* [ ] Update company description
* [ ] Update About Us content
* [ ] Test Arabic RTL
* [ ] Test English LTR
* [ ] Test mobile navigation
* [ ] Test phone links
* [ ] Test WhatsApp
* [ ] Test email
* [ ] Test Google Maps
* [ ] Test all navigation links
* [ ] Test all images
* [ ] Check mobile responsiveness
* [ ] Check tablet responsiveness
* [ ] Check desktop responsiveness
* [ ] Check SEO metadata
* [ ] Optimize large images
* [ ] Check for horizontal scrolling
* [ ] Deploy to GitHub Pages

---

# 📌 Project Status

Current version:

```text
Version 1.0
```

Initial release includes:

```text
Home
Services
News
About Us
Contact Us
```

Languages:

```text
Arabic
English
```

Platform:

```text
GitHub Pages
```

Architecture:

```text
Static Website
```

---

# 📄 License

All company content, images, logos, product information, and branding belong to the company.

Do not reuse company assets without permission.
