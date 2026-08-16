/* =========================================================================
   Kenan for Gas Bottles / كنان لأسطوانات الغاز — Shared JS
   Sections:
     1. COMPANY config (edit this for real deployment)
     2. Translations (ar/en)
     3. Products data
     4. News data
     5. Services data
     6. Language switching + i18n rendering
     7. Header: mobile menu
     8. Home/Services: render products, gallery
     9. Services: lightbox
     10. News: render cards + modal
     11. Contact: form validation + WhatsApp/mailto submission
     12. Scroll fade-in (IntersectionObserver)
     13. Footer year + init
   ========================================================================= */

/* 1. COMPANY CONFIG — single place to edit for real deployment ---------- */
const COMPANY = {
  nameAr: "كنان لأسطوانات الغاز",
  nameEn: "Kenan for Gas Bottles",
  phone: "+962776104645",
  whatsapp: "962776104645",
  email: "baniataabdallah0@gmail.com",
  addressAr: "عمّان، الأردن",
  addressEn: "Amman, Jordan",
  // Placeholder embeddable map. Replace with your real Google Maps "Embed a map" src.
  mapUrl: "https://www.google.com/maps?q=Amman,Jordan&output=embed",
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    whatsapp: "https://wa.me/962776104645"
  }
};

/* 2. TRANSLATIONS ---------------------------------------------------------*/
const translations = {
  ar: {
    "meta.sitename": "كنان لأسطوانات الغاز",
    "nav.home": "الرئيسية",
    "nav.services": "خدماتنا",
    "nav.news": "الأخبار",
    "nav.about": "من نحن",
    "nav.contact": "تواصل معنا",
    "nav.cta": "اتصل بنا",
    "lang.ar": "العربية",
    "lang.en": "English",

    "hero.eyebrow": "متخصصون في أسطوانات الغاز",
    "hero.title": "حلول موثوقة لأسطوانات الغاز",
    "hero.desc": "نوفر أسطوانات الأكسجين الطبية والصناعية وأسطوانات الغازات الخاصة بأعلى معايير الجودة والسلامة، مع خدمة توريد سريعة وموثوقة لعملائنا في مختلف القطاعات.",
    "hero.cta.primary": "اكتشف منتجاتنا",
    "hero.cta.secondary": "تواصل معنا",
    "hero.phone": "اتصل الآن:",

    "teaser.eyebrow": "من نحن",
    "teaser.title": "شريكك الموثوق في حلول أسطوانات الغاز",
    "teaser.desc": "نحن شركة متخصصة في بيع وتوريد أسطوانات الغاز الطبية والصناعية، نجمع بين الخبرة الطويلة والالتزام الصارم بمعايير السلامة والجودة العالمية. نخدم المستشفيات والمصانع والمنشآت الصناعية والتجارية بحلول موثوقة تلبي احتياجاتهم المتنوعة، مع فريق فني متمرس وخدمة عملاء سريعة الاستجابة.",
    "teaser.cta": "اعرف المزيد عنا",

    "products.eyebrow": "منتجاتنا",
    "products.title": "فئات أسطوانات الغاز",
    "products.subtitle": "مجموعة متكاملة من أسطوانات الغاز تغطي الاحتياجات الطبية والصناعية والخاصة.",
    "products.cta": "عرض التفاصيل",

    "product.medical.titleAr": "أسطوانات الأكسجين الطبية",
    "product.medical.titleEn": "Medical Oxygen Cylinders",
    "product.medical.desc": "أسطوانات أكسجين طبي عالية النقاء مطابقة للمعايير الصحية، مخصصة للمستشفيات والعيادات ومراكز الرعاية الصحية.",

    "product.industrialOxygen.titleAr": "أسطوانات الأكسجين الصناعية",
    "product.industrialOxygen.titleEn": "Industrial Oxygen Cylinders",
    "product.industrialOxygen.desc": "أسطوانات أكسجين صناعي متينة تناسب عمليات اللحام والقطع والتطبيقات الصناعية الثقيلة.",

    "product.industrialGas.titleAr": "أسطوانات الغازات الصناعية",
    "product.industrialGas.titleEn": "Industrial Gas Cylinders",
    "product.industrialGas.desc": "تشكيلة واسعة من أسطوانات الغازات الصناعية مثل الأرجون والنيتروجين وثاني أكسيد الكربون.",

    "product.special.titleAr": "أسطوانات الغازات الخاصة",
    "product.special.titleEn": "Special Gas Cylinders",
    "product.special.desc": "أسطوانات غازات خاصة ومعايرة بدقة عالية للتطبيقات المخبرية والبحثية والتقنية الدقيقة.",

    "features.eyebrow": "لماذا نحن",
    "features.title": "لماذا تختار شركتنا؟",
    "features.subtitle": "نلتزم بأعلى معايير الجودة والسلامة في كل أسطوانة نوردها.",
    "feature.quality.title": "الجودة",
    "feature.quality.desc": "أسطوانات مصنّعة وفق أعلى معايير الجودة العالمية المعتمدة.",
    "feature.safety.title": "السلامة",
    "feature.safety.desc": "فحص واختبار دوري صارم لضمان سلامة الاستخدام الكاملة.",
    "feature.reliability.title": "الموثوقية",
    "feature.reliability.desc": "التزام تام بالمواعيد وجودة الخدمة في كل عملية توريد.",
    "feature.experience.title": "الخبرة",
    "feature.experience.desc": "سنوات طويلة من الخبرة في مجال أسطوانات الغاز وتوريدها.",
    "feature.customerService.title": "خدمة العملاء",
    "feature.customerService.desc": "فريق دعم متخصص جاهز للإجابة على استفساراتكم دائمًا.",
    "feature.fastResponse.title": "سرعة الاستجابة",
    "feature.fastResponse.desc": "توريد سريع وحلول فورية لتلبية احتياجاتكم دون تأخير.",

    "showcase.eyebrow": "معرض المنتجات",
    "showcase.title": "تشكيلة من أسطواناتنا",
    "showcase.subtitle": "نماذج من الأسطوانات التي نوفرها لمختلف الاستخدامات.",

    "ctaBanner.title": "هل تبحث عن أسطوانات غاز موثوقة؟",
    "ctaBanner.desc": "تواصل مع فريقنا الآن للحصول على استشارة سريعة وعرض أسعار مخصص لاحتياجاتك.",
    "ctaBanner.call": "اتصل بنا",
    "ctaBanner.whatsapp": "راسلنا عبر واتساب",

    "footer.about": "شركة متخصصة في بيع وتوريد أسطوانات الغاز الطبية والصناعية بأعلى معايير الجودة والسلامة، نخدم عملاءنا بموثوقية وسرعة استجابة.",
    "footer.linksTitle": "روابط سريعة",
    "footer.contactTitle": "تواصل معنا",
    "footer.socialTitle": "تابعنا",
    "footer.rights": "جميع الحقوق محفوظة",

    "page.services.eyebrow": "خدماتنا",
    "page.services.title": "خدماتنا",
    "page.services.subtitle": "نقدم مجموعة متكاملة من الخدمات المتعلقة بأسطوانات الغاز، من البيع والتأجير إلى الاستشارة الفنية.",

    "service.sellOxygen.titleAr": "بيع أسطوانات الأكسجين",
    "service.sellOxygen.titleEn": "Oxygen Cylinder Sales",
    "service.sellOxygen.desc": "بيع أسطوانات أكسجين طبية وصناعية بمختلف الأحجام والمواصفات وفق حاجتك.",

    "service.rental.titleAr": "تأجير أسطوانات الغاز",
    "service.rental.titleEn": "Gas Cylinder Rental",
    "service.rental.desc": "خدمة تأجير مرنة لأسطوانات الغاز للمشاريع المؤقتة والاحتياجات الموسمية.",

    "service.medical.titleAr": "أسطوانات الغاز الطبية",
    "service.medical.titleEn": "Medical Gas Cylinders",
    "service.medical.desc": "توريد أسطوانات غازات طبية معتمدة للمستشفيات والمراكز الصحية بمعايير سلامة صارمة.",

    "service.industrial.titleAr": "أسطوانات الغاز الصناعية",
    "service.industrial.titleEn": "Industrial Gas Cylinders",
    "service.industrial.desc": "حلول أسطوانات غاز صناعية للمصانع وورش اللحام والقطاعات الثقيلة.",

    "service.bulkOrders.titleAr": "تجهيز الطلبات والكميات",
    "service.bulkOrders.titleEn": "Bulk Order Fulfillment",
    "service.bulkOrders.desc": "تجهيز الطلبات الكبيرة والكميات الخاصة بسرعة ودقة لضمان استمرارية عملك.",

    "service.consulting.titleAr": "استشارات اختيار الأسطوانة المناسبة",
    "service.consulting.titleEn": "Cylinder Selection Consulting",
    "service.consulting.desc": "استشارات فنية متخصصة لمساعدتك على اختيار الأسطوانة الأنسب لاستخدامك.",

    "services.galleryTitle": "معرض المنتجات",
    "services.gallerySubtitle": "انقر على أي صورة لعرضها بحجم أكبر.",

    "page.news.eyebrow": "الأخبار",
    "page.news.title": "الأخبار",
    "page.news.subtitle": "آخر الأخبار والتحديثات المتعلقة بمنتجاتنا وخدماتنا ونصائح السلامة.",
    "news.readMore": "اقرأ المزيد",
    "news.category.newProducts": "إطلاق منتجات جديدة",
    "news.category.safetyTips": "نصائح السلامة",
    "news.category.companyNews": "أخبار الشركة",

    "page.about.eyebrow": "من نحن",
    "page.about.title": "من نحن",
    "page.about.lead": "نحن شركة رائدة في بيع وتوريد أسطوانات الغاز الطبية والصناعية، نعمل على تقديم حلول موثوقة وآمنة لعملائنا في مختلف القطاعات منذ سنوات طويلة، مستندين إلى الخبرة والالتزام بأعلى معايير الجودة العالمية.",
    "about.story.title": "قصتنا",
    "about.story.desc": "بدأت شركتنا برؤية واضحة: توفير أسطوانات غاز موثوقة وآمنة للسوق المحلي. ومع مرور السنوات، تطورنا لنصبح أحد الأسماء الموثوقة في مجال توريد أسطوانات الغاز الطبية والصناعية، بفضل التزامنا المستمر بالجودة وثقة عملائنا المتجددة.",
    "about.vision.title": "رؤيتنا",
    "about.vision.desc": "أن نكون الخيار الأول والأكثر ثقة في مجال توريد أسطوانات الغاز على مستوى المنطقة، من خلال الابتكار المستمر والالتزام الكامل بمعايير السلامة والجودة.",
    "about.mission.title": "رسالتنا",
    "about.mission.desc": "تزويد عملائنا بأسطوانات غاز عالية الجودة وخدمات توريد سريعة وموثوقة، مع الحرص الدائم على سلامة المستخدمين ورضا العملاء التام.",
    "about.values.title": "قيمنا",
    "about.values.quality": "الجودة",
    "about.values.safety": "السلامة",
    "about.values.reliability": "الموثوقية",
    "about.values.transparency": "الشفافية",
    "about.values.customerService": "خدمة العملاء",
    "about.values.continuousImprovement": "التطور المستمر",

    "about.stats.title": "أرقام تتحدث عنا",
    "about.stats.experience": "سنوات خبرة",
    "about.stats.clients": "عميل",
    "about.stats.cylinders": "أسطوانة تم توريدها",
    "about.stats.support": "دعم العملاء",

    "page.contact.eyebrow": "تواصل معنا",
    "page.contact.title": "تواصل معنا",
    "page.contact.subtitle": "نحن هنا للإجابة على استفساراتك ومساعدتك في اختيار الأسطوانة المناسبة. تواصل معنا بالطريقة الأنسب لك.",
    "contact.phone.title": "الهاتف",
    "contact.whatsapp.title": "واتساب",
    "contact.email.title": "البريد الإلكتروني",
    "contact.address.title": "العنوان",
    "contact.mapTitle": "موقعنا على الخريطة",
    "contact.infoTitle": "معلومات التواصل",
    "contact.follow": "تابعنا على مواقع التواصل الاجتماعي",

    "form.title": "أرسل لنا رسالة",
    "form.subtitle": "املأ النموذج وسنقوم بالتواصل معك في أقرب وقت ممكن عبر واتساب.",
    "form.name": "الاسم الكامل",
    "form.phone": "رقم الهاتف",
    "form.email": "البريد الإلكتروني",
    "form.message": "الرسالة",
    "form.submitWhatsapp": "إرسال عبر واتساب",
    "form.submitEmail": "إرسال عبر البريد الإلكتروني",
    "form.note": "عند الضغط على \"إرسال عبر واتساب\" سيتم فتح تطبيق واتساب مع رسالة معبأة مسبقًا بمعلوماتك؛ هذا الموقع لا يقوم بإرسال البيانات إلى أي خادم.",
    "form.error.required": "هذا الحقل مطلوب.",
    "form.error.email": "يرجى إدخال بريد إلكتروني صحيح.",
    "form.error.phone": "يرجى إدخال رقم هاتف صحيح.",
    "form.status.readyWhatsapp": "تم تجهيز رسالتك. سيتم فتح واتساب الآن...",
    "form.status.fixErrors": "يرجى تصحيح الأخطاء الموضحة أدناه قبل الإرسال.",

    "footer.companyPlaceholder": "كنان لأسطوانات الغاز"
  },

  en: {
    "meta.sitename": "Kenan for Gas Bottles",
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.news": "News",
    "nav.about": "About Us",
    "nav.contact": "Contact Us",
    "nav.cta": "Contact Us",
    "lang.ar": "العربية",
    "lang.en": "English",

    "hero.eyebrow": "Gas Cylinder Specialists",
    "hero.title": "Reliable Gas Cylinder Solutions",
    "hero.desc": "We supply medical and industrial oxygen cylinders and special gas cylinders to the highest quality and safety standards, with fast and dependable delivery for clients across every sector.",
    "hero.cta.primary": "Explore Products",
    "hero.cta.secondary": "Contact Us",
    "hero.phone": "Call now:",

    "teaser.eyebrow": "Who We Are",
    "teaser.title": "Your Trusted Partner in Gas Cylinder Solutions",
    "teaser.desc": "We are a specialized company in the sale and supply of medical and industrial gas cylinders, combining years of experience with a strict commitment to international safety and quality standards. We serve hospitals, factories, and industrial and commercial facilities with reliable solutions, backed by a skilled technical team and responsive customer service.",
    "teaser.cta": "Learn More About Us",

    "products.eyebrow": "Our Products",
    "products.title": "Gas Cylinder Categories",
    "products.subtitle": "A complete range of gas cylinders covering medical, industrial and specialty needs.",
    "products.cta": "View Details",

    "product.medical.titleAr": "أسطوانات الأكسجين الطبية",
    "product.medical.titleEn": "Medical Oxygen Cylinders",
    "product.medical.desc": "High-purity medical oxygen cylinders that meet healthcare standards, designed for hospitals, clinics and healthcare centers.",

    "product.industrialOxygen.titleAr": "أسطوانات الأكسجين الصناعية",
    "product.industrialOxygen.titleEn": "Industrial Oxygen Cylinders",
    "product.industrialOxygen.desc": "Durable industrial oxygen cylinders suited for welding, cutting, and heavy industrial applications.",

    "product.industrialGas.titleAr": "أسطوانات الغازات الصناعية",
    "product.industrialGas.titleEn": "Industrial Gas Cylinders",
    "product.industrialGas.desc": "A wide range of industrial gas cylinders including argon, nitrogen and carbon dioxide.",

    "product.special.titleAr": "أسطوانات الغازات الخاصة",
    "product.special.titleEn": "Special Gas Cylinders",
    "product.special.desc": "Precision-calibrated specialty gas cylinders for laboratory, research and precise technical applications.",

    "features.eyebrow": "Why Us",
    "features.title": "Why Choose Our Company?",
    "features.subtitle": "We uphold the highest quality and safety standards in every cylinder we supply.",
    "feature.quality.title": "Quality",
    "feature.quality.desc": "Cylinders manufactured to the highest certified international quality standards.",
    "feature.safety.title": "Safety",
    "feature.safety.desc": "Rigorous, regular inspection and testing to guarantee complete safety of use.",
    "feature.reliability.title": "Reliability",
    "feature.reliability.desc": "Full commitment to deadlines and service quality on every delivery.",
    "feature.experience.title": "Experience",
    "feature.experience.desc": "Many years of experience in the gas cylinder supply industry.",
    "feature.customerService.title": "Customer Service",
    "feature.customerService.desc": "A dedicated support team always ready to answer your questions.",
    "feature.fastResponse.title": "Fast Response",
    "feature.fastResponse.desc": "Rapid supply and immediate solutions to meet your needs without delay.",

    "showcase.eyebrow": "Product Showcase",
    "showcase.title": "A Range of Our Cylinders",
    "showcase.subtitle": "Examples of the cylinders we provide for various uses.",

    "ctaBanner.title": "Looking for Reliable Gas Cylinders?",
    "ctaBanner.desc": "Reach out to our team now for a quick consultation and a custom quote tailored to your needs.",
    "ctaBanner.call": "Call Us",
    "ctaBanner.whatsapp": "Message Us on WhatsApp",

    "footer.about": "A specialized company in the sale and supply of medical and industrial gas cylinders to the highest quality and safety standards, serving our clients with reliability and fast response.",
    "footer.linksTitle": "Quick Links",
    "footer.contactTitle": "Contact Us",
    "footer.socialTitle": "Follow Us",
    "footer.rights": "All rights reserved",

    "page.services.eyebrow": "Our Services",
    "page.services.title": "Services",
    "page.services.subtitle": "We provide a complete range of services related to gas cylinders, from sales and rental to technical consulting.",

    "service.sellOxygen.titleAr": "بيع أسطوانات الأكسجين",
    "service.sellOxygen.titleEn": "Oxygen Cylinder Sales",
    "service.sellOxygen.desc": "Sale of medical and industrial oxygen cylinders in various sizes and specifications to fit your needs.",

    "service.rental.titleAr": "تأجير أسطوانات الغاز",
    "service.rental.titleEn": "Gas Cylinder Rental",
    "service.rental.desc": "Flexible gas cylinder rental service for temporary projects and seasonal needs.",

    "service.medical.titleAr": "أسطوانات الغاز الطبية",
    "service.medical.titleEn": "Medical Gas Cylinders",
    "service.medical.desc": "Supply of certified medical gas cylinders for hospitals and healthcare centers under strict safety standards.",

    "service.industrial.titleAr": "أسطوانات الغاز الصناعية",
    "service.industrial.titleEn": "Industrial Gas Cylinders",
    "service.industrial.desc": "Industrial gas cylinder solutions for factories, welding workshops and heavy industry sectors.",

    "service.bulkOrders.titleAr": "تجهيز الطلبات والكميات",
    "service.bulkOrders.titleEn": "Bulk Order Fulfillment",
    "service.bulkOrders.desc": "Fast, accurate fulfillment of large orders and special quantities to keep your operations running.",

    "service.consulting.titleAr": "استشارات اختيار الأسطوانة المناسبة",
    "service.consulting.titleEn": "Cylinder Selection Consulting",
    "service.consulting.desc": "Specialized technical consulting to help you choose the most suitable cylinder for your use case.",

    "services.galleryTitle": "Product Gallery",
    "services.gallerySubtitle": "Click any image to view it larger.",

    "page.news.eyebrow": "News",
    "page.news.title": "News",
    "page.news.subtitle": "The latest news and updates on our products, services and safety tips.",
    "news.readMore": "Read More",
    "news.category.newProducts": "New Products",
    "news.category.safetyTips": "Safety Tips",
    "news.category.companyNews": "Company News",

    "page.about.eyebrow": "About Us",
    "page.about.title": "About Us",
    "page.about.lead": "We are a leading company in the sale and supply of medical and industrial gas cylinders, delivering reliable and safe solutions to clients across many sectors for years, built on experience and a commitment to the highest international quality standards.",
    "about.story.title": "Our Story",
    "about.story.desc": "Our company began with a clear vision: to provide reliable, safe gas cylinders to the local market. Over the years, we have grown into one of the trusted names in medical and industrial gas cylinder supply, thanks to our continuous commitment to quality and the renewed trust of our clients.",
    "about.vision.title": "Our Vision",
    "about.vision.desc": "To be the first and most trusted choice for gas cylinder supply across the region, through continuous innovation and full commitment to safety and quality standards.",
    "about.mission.title": "Our Mission",
    "about.mission.desc": "To provide our clients with high-quality gas cylinders and fast, reliable delivery services, while constantly prioritizing user safety and complete customer satisfaction.",
    "about.values.title": "Our Values",
    "about.values.quality": "Quality",
    "about.values.safety": "Safety",
    "about.values.reliability": "Reliability",
    "about.values.transparency": "Transparency",
    "about.values.customerService": "Customer Service",
    "about.values.continuousImprovement": "Continuous Improvement",

    "about.stats.title": "Numbers That Speak For Us",
    "about.stats.experience": "Years Experience",
    "about.stats.clients": "Clients",
    "about.stats.cylinders": "Cylinders Supplied",
    "about.stats.support": "Customer Support",

    "page.contact.eyebrow": "Contact Us",
    "page.contact.title": "Contact Us",
    "page.contact.subtitle": "We're here to answer your questions and help you choose the right cylinder. Reach us however is most convenient for you.",
    "contact.phone.title": "Phone",
    "contact.whatsapp.title": "WhatsApp",
    "contact.email.title": "Email",
    "contact.address.title": "Address",
    "contact.mapTitle": "Our Location",
    "contact.infoTitle": "Contact Information",
    "contact.follow": "Follow us on social media",

    "form.title": "Send Us a Message",
    "form.subtitle": "Fill out the form and we'll get back to you as soon as possible via WhatsApp.",
    "form.name": "Full Name",
    "form.phone": "Phone Number",
    "form.email": "Email",
    "form.message": "Message",
    "form.submitWhatsapp": "Send via WhatsApp",
    "form.submitEmail": "Send via Email",
    "form.note": "Clicking \"Send via WhatsApp\" opens WhatsApp with a pre-filled message containing your details; this website does not send your data to any server.",
    "form.error.required": "This field is required.",
    "form.error.email": "Please enter a valid email address.",
    "form.error.phone": "Please enter a valid phone number.",
    "form.status.readyWhatsapp": "Your message is ready. Opening WhatsApp now...",
    "form.status.fixErrors": "Please fix the errors below before submitting.",

    "footer.companyPlaceholder": "Kenan for Gas Bottles"
  }
};

/* 3. PRODUCTS DATA (used on Home showcase + Services gallery) -----------*/
const productsData = [
  {
    id: "medical",
    image: "assets/images/products/product-medical-oxygen.svg",
    titleKey: "product.medical",
    category: "medical"
  },
  {
    id: "industrialOxygen",
    image: "assets/images/products/product-industrial-oxygen.svg",
    titleKey: "product.industrialOxygen",
    category: "industrial"
  },
  {
    id: "industrialGas",
    image: "assets/images/products/product-industrial-gas.svg",
    titleKey: "product.industrialGas",
    category: "industrial"
  },
  {
    id: "special",
    image: "assets/images/products/product-special-gas.svg",
    titleKey: "product.special",
    category: "special"
  }
];

/* 4. NEWS DATA -------------------------------------------------------------*/
const newsData = [
  {
    id: "new-cylinder-line",
    image: "assets/images/news/news-new-products.svg",
    date: "2026-06-15",
    categoryKey: "news.category.newProducts",
    titleAr: "إطلاق خط جديد من أسطوانات الأكسجين الطبية",
    titleEn: "Launch of a New Medical Oxygen Cylinder Line",
    excerptAr: "أطلقنا مؤخرًا تشكيلة جديدة من أسطوانات الأكسجين الطبية المصممة لتلبية احتياجات المستشفيات ومراكز الرعاية الصحية بكفاءة أعلى.",
    excerptEn: "We recently launched a new range of medical oxygen cylinders designed to meet the needs of hospitals and healthcare centers with greater efficiency.",
    bodyAr: "يسرّنا الإعلان عن إطلاق خط جديد من أسطوانات الأكسجين الطبية، صُمم خصيصًا لتلبية المتطلبات المتزايدة للمستشفيات ومراكز الرعاية الصحية. تتميز هذه الأسطوانات بمعايير نقاء عالية، وصمامات أمان محسّنة، وأوزان مدروسة تسهّل عملية النقل والتداول داخل المرافق الطبية. تخضع جميع الأسطوانات الجديدة لفحوصات جودة صارمة قبل تسليمها للعملاء، بما يضمن الالتزام الكامل بمعايير السلامة الدولية. نحن ملتزمون بمواصلة الاستثمار في تطوير منتجاتنا لخدمة القطاع الصحي بشكل أفضل.",
    bodyEn: "We are pleased to announce the launch of a new line of medical oxygen cylinders, specifically designed to meet the growing requirements of hospitals and healthcare centers. These cylinders feature high purity standards, enhanced safety valves, and carefully considered weights that ease handling and transport within medical facilities. All new cylinders undergo rigorous quality checks before delivery to clients, ensuring full compliance with international safety standards. We remain committed to continued investment in product development to better serve the healthcare sector."
  },
  {
    id: "safety-tips-handling",
    image: "assets/images/news/news-safety-tips.svg",
    date: "2026-05-02",
    categoryKey: "news.category.safetyTips",
    titleAr: "نصائح مهمة للتعامل الآمن مع أسطوانات الغاز",
    titleEn: "Important Tips for Safe Gas Cylinder Handling",
    excerptAr: "السلامة أولوية قصوى عند التعامل مع أسطوانات الغاز. إليكم أهم النصائح لضمان الاستخدام الآمن سواء في المنشآت الطبية أو الصناعية.",
    excerptEn: "Safety is a top priority when handling gas cylinders. Here are the most important tips for safe use in both medical and industrial facilities.",
    bodyAr: "التعامل الآمن مع أسطوانات الغاز يتطلب اتباع مجموعة من الإرشادات الأساسية: أولًا، يجب تخزين الأسطوانات في وضعية عمودية وربطها جيدًا لمنع سقوطها. ثانيًا، ينبغي إبعادها عن مصادر الحرارة المباشرة وأشعة الشمس القوية. ثالثًا، يجب فحص الصمامات والوصلات بشكل دوري للتأكد من عدم وجود تسرب. رابعًا، يُنصح دائمًا باستخدام عربات نقل مخصصة بدلًا من السحب أو الدحرجة اليدوية. وأخيرًا، يجب تدريب جميع العاملين الذين يتعاملون مع الأسطوانات على إجراءات السلامة الأساسية والطوارئ. الالتزام بهذه الإرشادات يقلل بشكل كبير من المخاطر ويضمن بيئة عمل آمنة.",
    bodyEn: "Safe handling of gas cylinders requires following a set of essential guidelines: first, cylinders should be stored upright and properly secured to prevent tipping. Second, they should be kept away from direct heat sources and strong sunlight. Third, valves and connections should be inspected regularly to check for leaks. Fourth, it is always recommended to use dedicated transport trolleys rather than dragging or rolling cylinders by hand. Finally, all personnel who handle cylinders should be trained in basic safety and emergency procedures. Following these guidelines significantly reduces risk and ensures a safe working environment."
  },
  {
    id: "company-expansion",
    image: "assets/images/news/news-company-news.svg",
    date: "2026-03-20",
    categoryKey: "news.category.companyNews",
    titleAr: "توسيع نطاق خدماتنا لتغطية المزيد من المناطق",
    titleEn: "Expanding Our Services to Cover More Areas",
    excerptAr: "في إطار خطتنا للنمو، نعلن عن توسيع نطاق خدمات التوريد لتغطية مناطق جديدة وضمان استجابة أسرع لطلبات عملائنا.",
    excerptEn: "As part of our growth plan, we are pleased to announce the expansion of our supply services to cover new areas and ensure faster response to client requests.",
    bodyAr: "يسعدنا أن نعلن عن توسيع نطاق خدماتنا اللوجستية ليشمل مناطق إضافية، وذلك استجابة للطلب المتزايد على منتجاتنا من مختلف القطاعات. يأتي هذا التوسع ضمن خطتنا الاستراتيجية لتعزيز حضورنا وتحسين زمن الاستجابة لطلبات التوريد. كما نعمل على تعزيز أسطول النقل وفريق الدعم الفني لضمان استمرار تقديم خدمة عالية الجودة مع نمو قاعدة عملائنا. نشكر عملاءنا على ثقتهم المستمرة ونتطلع لخدمتهم بشكل أوسع.",
    bodyEn: "We are pleased to announce the expansion of our logistics services to cover additional areas, in response to growing demand for our products across various sectors. This expansion is part of our strategic plan to strengthen our presence and improve response times for supply requests. We are also strengthening our delivery fleet and technical support team to ensure we continue delivering high-quality service as our client base grows. We thank our clients for their continued trust and look forward to serving them even more broadly."
  }
];

/* 5. SERVICES DATA ---------------------------------------------------------*/
const servicesData = [
  { key: "service.sellOxygen", image: "assets/images/services/service-sell-oxygen.svg", icon: "cylinder" },
  { key: "service.rental", image: "assets/images/services/service-rental.svg", icon: "refresh" },
  { key: "service.medical", image: "assets/images/services/service-medical.svg", icon: "cross" },
  { key: "service.industrial", image: "assets/images/services/service-industrial.svg", icon: "factory" },
  { key: "service.bulkOrders", image: "assets/images/services/service-bulk-orders.svg", icon: "box" },
  { key: "service.consulting", image: "assets/images/services/service-consulting.svg", icon: "chat" }
];

/* 6. LANGUAGE SWITCHING ----------------------------------------------------*/
const LANG_STORAGE_KEY = "kenan_lang";

function getStoredLang() {
  try {
    return localStorage.getItem(LANG_STORAGE_KEY);
  } catch (e) {
    return null;
  }
}

function setStoredLang(lang) {
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch (e) { /* ignore (private browsing, etc.) */ }
}

function applyTranslations(lang) {
  const dict = translations[lang] || translations.ar;

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.body.classList.remove("lang-ar", "lang-en");
  document.body.classList.add(lang === "ar" ? "lang-ar" : "lang-en");

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    // format: data-i18n-attr="placeholder:form.name|aria-label:form.name"
    const pairs = el.getAttribute("data-i18n-attr").split("|");
    pairs.forEach((pair) => {
      const [attr, key] = pair.split(":");
      if (attr && key && dict[key] !== undefined) {
        el.setAttribute(attr, dict[key]);
      }
    });
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // update lang switch buttons state
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    const btnLang = btn.getAttribute("data-lang");
    btn.setAttribute("aria-pressed", btnLang === lang ? "true" : "false");
  });

  // re-render dynamic content that depends on language (products/news/services)
  if (typeof window.renderDynamicContent === "function") {
    window.renderDynamicContent(lang);
  }

  document.title = getPageTitle(lang);
}

function getPageTitle(lang) {
  const pageKey = document.body.getAttribute("data-page") || "home";
  const titles = {
    ar: {
      home: "كنان لأسطوانات الغاز | حلول موثوقة لأسطوانات الغاز",
      services: "خدماتنا | كنان لأسطوانات الغاز",
      news: "الأخبار | كنان لأسطوانات الغاز",
      about: "من نحن | كنان لأسطوانات الغاز",
      contact: "تواصل معنا | كنان لأسطوانات الغاز"
    },
    en: {
      home: "Kenan for Gas Bottles | Reliable Gas Cylinder Solutions",
      services: "Services | Kenan for Gas Bottles",
      news: "News | Kenan for Gas Bottles",
      about: "About Us | Kenan for Gas Bottles",
      contact: "Contact Us | Kenan for Gas Bottles"
    }
  };
  return (titles[lang] && titles[lang][pageKey]) || document.title;
}

function initLanguage() {
  const stored = getStoredLang();
  const lang = stored === "en" || stored === "ar" ? stored : "ar";
  applyTranslations(lang);

  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const newLang = btn.getAttribute("data-lang");
      setStoredLang(newLang);
      applyTranslations(newLang);
    });
  });
}

/* 7. MOBILE MENU -------------------------------------------------------- */
function initMobileMenu() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".hamburger");
  if (!header || !toggle) return;

  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  document.querySelectorAll(".main-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      header.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

/* 8. RENDER PRODUCTS (home showcase / services gallery) ------------------*/
function renderProductCards(lang) {
  const grid = document.querySelector("[data-products-grid]");
  if (!grid) return;
  const dict = translations[lang];

  grid.innerHTML = productsData.map((p) => {
    const titleAr = dict[`${p.titleKey}.titleAr`];
    const titleEn = dict[`${p.titleKey}.titleEn`];
    const desc = dict[`${p.titleKey}.desc`];
    const displayTitle = lang === "ar" ? titleAr : titleEn;
    const altText = lang === "ar" ? titleAr : titleEn;
    return `
      <article class="card fade-in-up">
        <div class="card-media">
          <img src="${p.image}" alt="${altText}" loading="lazy" width="400" height="300">
        </div>
        <div class="card-body">
          <span class="card-title-en">${lang === "ar" ? titleEn : titleAr}</span>
          <h3>${displayTitle}</h3>
          <p class="card-desc">${desc}</p>
          <a class="btn btn-outline btn-sm" href="services.html">${dict["products.cta"]}</a>
        </div>
      </article>
    `;
  }).join("");
}

function renderShowcaseGallery(lang) {
  const grid = document.querySelector("[data-showcase-grid]");
  if (!grid) return;
  const dict = translations[lang];

  grid.innerHTML = productsData.map((p) => {
    const titleAr = dict[`${p.titleKey}.titleAr`];
    const titleEn = dict[`${p.titleKey}.titleEn`];
    const displayTitle = lang === "ar" ? titleAr : titleEn;
    return `
      <div class="gallery-item">
        <img src="${p.image}" alt="${displayTitle}" loading="lazy" width="300" height="300">
      </div>
    `;
  }).join("");
}

function renderServicesGallery(lang) {
  const grid = document.querySelector("[data-services-gallery]");
  if (!grid) return;
  const dict = translations[lang];

  grid.innerHTML = productsData.concat(
    servicesData.map((s) => ({ image: s.image, titleKey: s.key }))
  ).map((p, idx) => {
    const titleAr = dict[`${p.titleKey}.titleAr`] || dict[`${p.titleKey}.title`] || "";
    const titleEn = dict[`${p.titleKey}.titleEn`] || dict[`${p.titleKey}.title`] || "";
    const displayTitle = lang === "ar" ? titleAr : titleEn;
    return `
      <button type="button" class="gallery-item is-button" data-lightbox-trigger data-img="${p.image}" data-caption="${displayTitle}">
        <img src="${p.image}" alt="${displayTitle}" loading="lazy" width="300" height="300">
        <span class="gallery-caption">${displayTitle}</span>
      </button>
    `;
  }).join("");

  initLightbox();
}

function renderServiceCards(lang) {
  const grid = document.querySelector("[data-services-grid]");
  if (!grid) return;
  const dict = translations[lang];

  grid.innerHTML = servicesData.map((s) => {
    const titleAr = dict[`${s.key}.titleAr`];
    const titleEn = dict[`${s.key}.titleEn`];
    const desc = dict[`${s.key}.desc`];
    const displayTitle = lang === "ar" ? titleAr : titleEn;
    return `
      <article class="card service-card fade-in-up">
        <div class="card-media">
          <img src="${s.image}" alt="${displayTitle}" loading="lazy" width="400" height="250">
        </div>
        <div class="card-body">
          <span class="card-title-en">${lang === "ar" ? titleEn : titleAr}</span>
          <h3>${displayTitle}</h3>
          <p class="card-desc">${desc}</p>
        </div>
      </article>
    `;
  }).join("");
}

/* 9. LIGHTBOX (services gallery) -------------------------------------------*/
function initLightbox() {
  const overlay = document.querySelector("[data-lightbox-overlay]");
  if (!overlay) return;
  const imgEl = overlay.querySelector("[data-lightbox-image]");
  const captionEl = overlay.querySelector("[data-lightbox-caption]");
  const closeBtn = overlay.querySelector(".lightbox-close");
  let lastFocused = null;

  function openLightbox(src, caption) {
    imgEl.src = src;
    imgEl.alt = caption;
    captionEl.textContent = caption;
    overlay.classList.add("is-open");
    document.body.classList.add("modal-open");
    lastFocused = document.activeElement;
    closeBtn.focus();
  }

  function closeLightbox() {
    overlay.classList.remove("is-open");
    document.body.classList.remove("modal-open");
    if (lastFocused) lastFocused.focus();
  }

  document.querySelectorAll("[data-lightbox-trigger]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      openLightbox(trigger.getAttribute("data-img"), trigger.getAttribute("data-caption"));
    });
  });

  closeBtn.addEventListener("click", closeLightbox);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("is-open")) closeLightbox();
  });
}

/* 10. NEWS: render cards + modal -------------------------------------------*/
function renderNewsCards(lang) {
  const grid = document.querySelector("[data-news-grid]");
  if (!grid) return;
  const dict = translations[lang];

  grid.innerHTML = newsData.map((n) => {
    const title = lang === "ar" ? n.titleAr : n.titleEn;
    const excerpt = lang === "ar" ? n.excerptAr : n.excerptEn;
    const dateFormatted = formatDate(n.date, lang);
    return `
      <article class="card news-card fade-in-up">
        <div class="card-media">
          <img src="${n.image}" alt="${title}" loading="lazy" width="400" height="225">
        </div>
        <div class="card-body">
          <div class="news-meta">
            <span class="badge badge-accent">${dict[n.categoryKey]}</span>
            <time datetime="${n.date}">${dateFormatted}</time>
          </div>
          <h3>${title}</h3>
          <p class="card-desc">${excerpt}</p>
          <button type="button" class="btn btn-outline btn-sm" data-news-trigger="${n.id}">${dict["news.readMore"]}</button>
        </div>
      </article>
    `;
  }).join("");

  grid.querySelectorAll("[data-news-trigger]").forEach((btn) => {
    btn.addEventListener("click", () => openNewsModal(btn.getAttribute("data-news-trigger")));
  });
}

function formatDate(isoDate, lang) {
  const d = new Date(isoDate + "T00:00:00");
  try {
    return new Intl.DateTimeFormat(lang === "ar" ? "ar-JO" : "en-GB", {
      year: "numeric", month: "long", day: "numeric"
    }).format(d);
  } catch (e) {
    return isoDate;
  }
}

function openNewsModal(id) {
  const overlay = document.querySelector("[data-news-modal-overlay]");
  if (!overlay) return;
  const item = newsData.find((n) => n.id === id);
  if (!item) return;
  const lang = document.documentElement.lang === "en" ? "en" : "ar";
  const dict = translations[lang];

  overlay.querySelector("[data-news-modal-image]").src = item.image;
  overlay.querySelector("[data-news-modal-image]").alt = lang === "ar" ? item.titleAr : item.titleEn;
  overlay.querySelector("[data-news-modal-category]").textContent = dict[item.categoryKey];
  overlay.querySelector("[data-news-modal-date]").textContent = formatDate(item.date, lang);
  overlay.querySelector("[data-news-modal-title]").textContent = lang === "ar" ? item.titleAr : item.titleEn;
  overlay.querySelector("[data-news-modal-body]").textContent = lang === "ar" ? item.bodyAr : item.bodyEn;

  overlay.classList.add("is-open");
  document.body.classList.add("modal-open");
  overlay.querySelector(".modal-close").focus();
}

function initNewsModal() {
  const overlay = document.querySelector("[data-news-modal-overlay]");
  if (!overlay) return;
  const closeBtn = overlay.querySelector(".modal-close");

  function close() {
    overlay.classList.remove("is-open");
    document.body.classList.remove("modal-open");
  }

  closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("is-open")) close();
  });
}

/* 11. CONTACT FORM: validation + WhatsApp/mailto submission ---------------*/
function initContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  const fields = {
    name: form.querySelector("#contact-name"),
    phone: form.querySelector("#contact-phone"),
    email: form.querySelector("#contact-email"),
    message: form.querySelector("#contact-message")
  };
  const statusEl = form.querySelector("[data-form-status]");
  const emailFallback = form.querySelector("[data-email-fallback]");

  function lang() {
    return document.documentElement.lang === "en" ? "en" : "ar";
  }

  function showError(field, key) {
    const errorEl = form.querySelector(`[data-error-for="${field}"]`);
    const dict = translations[lang()];
    if (errorEl) errorEl.textContent = key ? dict[key] : "";
    if (fields[field]) fields[field].setAttribute("aria-invalid", key ? "true" : "false");
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function isValidPhone(value) {
    return /^[0-9+\-\s()]{7,20}$/.test(value);
  }

  function validate() {
    let valid = true;

    if (!fields.name.value.trim()) {
      showError("name", "form.error.required");
      valid = false;
    } else {
      showError("name", null);
    }

    if (!fields.phone.value.trim()) {
      showError("phone", "form.error.required");
      valid = false;
    } else if (!isValidPhone(fields.phone.value.trim())) {
      showError("phone", "form.error.phone");
      valid = false;
    } else {
      showError("phone", null);
    }

    if (fields.email.value.trim() && !isValidEmail(fields.email.value.trim())) {
      showError("email", "form.error.email");
      valid = false;
    } else {
      showError("email", null);
    }

    if (!fields.message.value.trim()) {
      showError("message", "form.error.required");
      valid = false;
    } else {
      showError("message", null);
    }

    return valid;
  }

  function buildMessage() {
    const dict = translations[lang()];
    const lines = [
      `${dict["form.name"]}: ${fields.name.value.trim()}`,
      `${dict["form.phone"]}: ${fields.phone.value.trim()}`
    ];
    if (fields.email.value.trim()) {
      lines.push(`${dict["form.email"]}: ${fields.email.value.trim()}`);
    }
    lines.push(`${dict["form.message"]}: ${fields.message.value.trim()}`);
    return lines.join("\n");
  }

  function updateEmailFallback() {
    if (!emailFallback) return;
    const subject = encodeURIComponent(lang() === "ar" ? "استفسار من الموقع الإلكتروني" : "Website Inquiry");
    const body = encodeURIComponent(buildMessage());
    emailFallback.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
  }

  fields.name.addEventListener("input", updateEmailFallback);
  fields.phone.addEventListener("input", updateEmailFallback);
  fields.email.addEventListener("input", updateEmailFallback);
  fields.message.addEventListener("input", updateEmailFallback);
  updateEmailFallback();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const dict = translations[lang()];

    if (!validate()) {
      statusEl.textContent = dict["form.status.fixErrors"];
      statusEl.className = "form-status is-visible status-error";
      return;
    }

    updateEmailFallback();
    const message = encodeURIComponent(buildMessage());
    const waUrl = `https://wa.me/${COMPANY.whatsapp}?text=${message}`;

    statusEl.textContent = dict["form.status.readyWhatsapp"];
    statusEl.className = "form-status is-visible status-info";

    window.open(waUrl, "_blank", "noopener");
  });
}

/* 12. SCROLL FADE-IN (IntersectionObserver) --------------------------------*/
function initScrollFade() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targets = document.querySelectorAll(".fade-in-up");
  if (!targets.length) return;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    targets.forEach((t) => t.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

  targets.forEach((t) => observer.observe(t));
}

function refreshScrollFadeObservers() {
  // called after dynamic render to (re)observe newly injected .fade-in-up items
  initScrollFade();
}

/* 13. DYNAMIC CONTENT DISPATCH + INIT --------------------------------------*/
window.renderDynamicContent = function (lang) {
  renderProductCards(lang);
  renderShowcaseGallery(lang);
  renderServiceCards(lang);
  renderServicesGallery(lang);
  renderNewsCards(lang);
  refreshScrollFadeObservers();
};

function initFooterYear() {
  const el = document.querySelector("[data-current-year]");
  if (el) el.textContent = new Date().getFullYear();
}

function initCompanyLinks() {
  // Wire up tel:/mailto:/wa.me links and address text from COMPANY config
  document.querySelectorAll("[data-company-phone-link]").forEach((el) => {
    el.setAttribute("href", `tel:${COMPANY.phone}`);
  });
  document.querySelectorAll("[data-company-phone-text]").forEach((el) => {
    el.textContent = COMPANY.phone;
  });
  document.querySelectorAll("[data-company-whatsapp-link]").forEach((el) => {
    const presetText = el.getAttribute("data-wa-text");
    const url = presetText
      ? `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(presetText)}`
      : `https://wa.me/${COMPANY.whatsapp}`;
    el.setAttribute("href", url);
  });
  document.querySelectorAll("[data-company-email-link]").forEach((el) => {
    el.setAttribute("href", `mailto:${COMPANY.email}`);
  });
  document.querySelectorAll("[data-company-email-text]").forEach((el) => {
    el.textContent = COMPANY.email;
  });
  document.querySelectorAll("[data-company-address-ar]").forEach((el) => {
    el.textContent = COMPANY.addressAr;
  });
  document.querySelectorAll("[data-company-address-en]").forEach((el) => {
    el.textContent = COMPANY.addressEn;
  });
  document.querySelectorAll("[data-company-map]").forEach((el) => {
    el.setAttribute("src", COMPANY.mapUrl);
  });
  document.querySelectorAll("[data-social-facebook]").forEach((el) => el.setAttribute("href", COMPANY.social.facebook));
  document.querySelectorAll("[data-social-instagram]").forEach((el) => el.setAttribute("href", COMPANY.social.instagram));
  document.querySelectorAll("[data-social-linkedin]").forEach((el) => el.setAttribute("href", COMPANY.social.linkedin));
  document.querySelectorAll("[data-social-whatsapp]").forEach((el) => el.setAttribute("href", COMPANY.social.whatsapp));
}

document.addEventListener("DOMContentLoaded", () => {
  initCompanyLinks();
  initLanguage();
  initMobileMenu();
  initNewsModal();
  initContactForm();
  initFooterYear();
  initScrollFade();
});
