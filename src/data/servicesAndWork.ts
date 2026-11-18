import {
  EstimatorServiceChip,
  PortfolioCategoryKey,
  ProjectCaseStudy,
  ServiceItem,
  ServicePillarKey,
  Localized,
} from '../types/studio';

export const SERVICE_PILLARS: Array<{ key: ServicePillarKey; label: Localized; subtitle: Localized }> = [
  {
    key: 'all',
    label: { en: 'All Capabilities', ar: 'جميع التخصصات' },
    subtitle: { en: '10 end-to-end studio disciplines', ar: '١٠ تخصصات رقمية متكاملة تحت سقف واحد' },
  },
  {
    key: 'tech',
    label: { en: 'Tech & Code', ar: 'البرمجة والتقنية' },
    subtitle: { en: 'Custom platforms & web architecture', ar: 'تطوير الويب والمنصات المخصصة' },
  },
  {
    key: 'visual',
    label: { en: 'Visual & Motion', ar: 'المرئيات والموشن' },
    subtitle: { en: 'Video, photo, design & kinetic craft', ar: 'المونتاج، التصميم، الصور والموشن جرافيك' },
  },
  {
    key: 'growth',
    label: { en: 'Growth & Brand', ar: 'النمو والعلامة' },
    subtitle: { en: 'Social, media buying & B2B expansion', ar: 'إدارة الحسابات، الإعلانات الممولة وتطوير الأعمال' },
  },
  {
    key: 'data',
    label: { en: 'Data & Operations', ar: 'البيانات والعمليات' },
    subtitle: { en: 'Analytics dashboards & precision ops', ar: 'تحليل البيانات، إدخال البيانات والمساعدة الافتراضية' },
  },
];

export const STUDIO_SERVICES: ServiceItem[] = [
  {
    id: 'web-platforms',
    pillar: 'tech',
    title: {
      en: 'Web Development & Custom Platforms',
      ar: 'تطوير الويب والمنصات الرقمية المخصصة',
    },
    tagline: {
      en: 'Full-stack React/Next.js products, SaaS portals, and high-converting bilingual web apps.',
      ar: 'منصات ويب متكاملة، لوحات تحكم سحابية، ومتاجر عالية التحويل ثنائية اللغة بسرعة فائقة.',
    },
    description: {
      en: 'Engineered from clean TypeScript architecture with sub-second page loads, custom API integrations, payment gateways, and pixel-accurate RTL/LTR interfaces.',
      ar: 'نبني منصات رقمية بهندسة برمجية نظيفة، ربط متكامل مع بوابات الدفع وواجهات برمجة التطبيقات، وتجربة مستخدم متقنة بالعربية والإنجليزية.',
    },
    deliverables: {
      en: ['Custom Web Apps & SaaS Portals', 'High-Speed Landing Systems', 'E-Commerce & Payment Flows', 'CMS & API Integrations'],
      ar: ['تطبيقات ويب ولوحات SaaS مخصصة', 'صفحات هبوط فائقة السرعة', 'متاجر إلكترونية وربط الدفع', 'ربط الأنظمة وواجهات API'],
    },
    turnaround: { en: '2 to 5 weeks', ar: '٢ إلى ٥ أسابيع' },
    featured: 'navy',
    spanClass: 'md:col-span-2 lg:col-span-7',
    iconName: 'Code2',
    estimatorChipId: 'chip-web',
  },
  {
    id: 'motion-graphics',
    pillar: 'visual',
    title: {
      en: 'Motion Graphics & Kinetic Systems',
      ar: 'الموشن جرافيك والتحريك البصري',
    },
    tagline: {
      en: '2D/3D product explainers, UI choreography, and sonic logo animations.',
      ar: 'فيديوهات تعريفية متحركة، تحريك واجهات المنتجات، وهويات بصرية وصوتية نابضة.',
    },
    description: {
      en: 'Frame-crafted motion pieces designed to turn complex SaaS and brand stories into unforgettable 30-to-90-second visual hooks.',
      ar: 'نحول الأفكار والمنتجات التقنية المعقدة إلى عروض حركية جذابة ترفع معدل المشاهدة والاستيعاب منذ الثانية الأولى.',
    },
    deliverables: {
      en: ['Product Launch Films', 'UI & SaaS Explainers', 'Logo & Sonic Idents'],
      ar: ['عروض إطلاق المنتجات', 'شرح المنصات الرقمية', 'تحريك الشعارات والهوية الصوتية'],
    },
    turnaround: { en: '5 to 12 days', ar: '٥ إلى ١٢ يوماً' },
    featured: 'amber-glass',
    spanClass: 'md:col-span-2 lg:col-span-5',
    iconName: 'Sparkles',
    estimatorChipId: 'chip-motion',
  },
  {
    id: 'video-editing',
    pillar: { en: 'visual', ar: 'visual' }.en as 'visual',
    title: {
      en: 'Video Editing & Retention Reels',
      ar: 'مونتاج الفيديو وصناعة الريلز الاحترافية',
    },
    tagline: {
      en: 'Rhythm-driven commercial cuts, podcast/YouTube mastery, and short-form hooks.',
      ar: 'مونتاج إعلاني متناغم مع الصوت، حلقات يوتيوب وبودكاست، ومقاطع قصيرة عالية الاحتفاظ.',
    },
    description: {
      en: 'Precision pacing, custom sound design, dynamic bilingual captions, and color grading built to hold viewer attention past the 3-second scroll barrier.',
      ar: 'إيقاع بصري مدروس، هندسة صوتية مؤثرة، نصوص تفاعلية وتلوين سينمائي يضاعف مدة بقاء المشاهد.',
    },
    deliverables: {
      en: ['Reels, TikTok & Shorts Packs', 'Commercial Brand Edits', 'Sound Design & Color Grade'],
      ar: ['باقات ريلز وتيك توك وشورتس', 'إعلانات تجارية مصورة', 'هندسة صوتية وتلوين سينمائي'],
    },
    turnaround: { en: '48 to 96 hours', ar: '٤٨ إلى ٩٦ ساعة' },
    featured: 'glass',
    spanClass: 'md:col-span-1 lg:col-span-4',
    iconName: 'Clapperboard',
    estimatorChipId: 'chip-video',
  },
  {
    id: 'graphic-design',
    pillar: 'visual',
    title: {
      en: 'Graphic Design & Brand Systems',
      ar: 'التصميم الجرافيكي والهويات البصرية',
    },
    tagline: {
      en: 'Distinctive visual identities, campaign key visuals, and investor pitch decks.',
      ar: 'هويات بصرية متفردة، تصاميم حملات إعلانية، وعروض استثمارية مقنعة.',
    },
    description: {
      en: 'Cohesive typography, bilingual brand guidelines, packaging systems, and social templates crafted so your brand stands apart immediately.',
      ar: 'نبني أنظمة بصرية متكاملة تشمل الشعار، الخطوط العربية واللاتينية، القوالب الإعلانية وعروض الشركات.',
    },
    deliverables: {
      en: ['Visual Identity & Guidelines', 'Investor & Sales Decks', 'Campaign Key Visuals'],
      ar: ['الهوية البصرية ودليل الاستخدام', 'عروض المستثمرين والمبيعات', 'تصاميم الحملات الإعلانية'],
    },
    turnaround: { en: '1 to 3 weeks', ar: '١ إلى ٣ أسابيع' },
    featured: 'glass',
    spanClass: 'md:col-span-1 lg:col-span-4',
    iconName: 'Palette',
    estimatorChipId: 'chip-branding',
  },
  {
    id: 'photo-editing',
    pillar: 'visual',
    title: {
      en: 'Photo Editing & Studio Retouching',
      ar: 'معالجة الصور والريتاتش التجاري',
    },
    tagline: {
      en: 'Editorial color grading, product compositing, and e-commerce catalog perfection.',
      ar: 'دمج إعلاني احترافي، معالجة صور المنتجات، وتوحيد الإضاءة والألوان للمتاجر.',
    },
    description: {
      en: 'High-detail frequency separation, realistic shadow/reflection reconstruction, and batch catalog consistency for fashion, F&B, and electronics.',
      ar: 'معالجة دقيقة للتفاصيل والإضاءة والانعكاسات تمنح صور منتجاتك مظهراً استوديوياً فاخراً يرفع قرار الشراء.',
    },
    deliverables: {
      en: ['E-Commerce Catalog Polish', 'Composite Ad Scenes', 'Editorial Color Grading'],
      ar: ['تجهيز كتالوجات المتاجر', 'الدمج الإعلاني المتقدم', 'تصحيح وتوحيد الألوان'],
    },
    turnaround: { en: '24 to 72 hours', ar: '٢٤ إلى ٧٢ ساعة' },
    featured: 'glass',
    spanClass: 'md:col-span-2 lg:col-span-4',
    iconName: 'Wand2',
    estimatorChipId: 'chip-photo',
  },
  {
    id: 'paid-ads',
    pillar: 'growth',
    title: {
      en: 'Paid Ads & Performance Media Buying',
      ar: 'الإعلانات الممولة وشراء المساحات الإعلانية',
    },
    tagline: {
      en: 'ROI-engineered campaigns across Meta, TikTok, Snapchat, and Google Search.',
      ar: 'حملات أداء مدروسة على ميتا، تيك توك، سناب شات وجوجل لتحقيق أعلى عائد إعلاني.',
    },
    description: {
      en: 'Paired directly with our video and design talents so creative testing, pixel tracking, and bid scaling operate in one tight feedback loop.',
      ar: 'ندمج خبراء الإعلانات مع فريق التصميم والمونتاج لاختبار الكرييتف باستمرار وتقليل تكلفة الاستحواذ على العميل.',
    },
    deliverables: {
      en: ['Multi-Channel Ad Funnels', 'Creative A/B Testing Matrix', 'Server-Side Pixel & CAPI'],
      ar: ['مسارات إعلانية متعددة المنصات', 'اختبارات مستمرة للإعلانات', 'ربط البيكسل وتتبع التحويلات'],
    },
    turnaround: { en: 'Launch in 5 days', ar: 'إطلاق خلال ٥ أيام' },
    featured: 'amber-glass',
    spanClass: 'md:col-span-1 lg:col-span-4',
    iconName: 'TrendingUp',
    estimatorChipId: 'chip-ads',
  },
  {
    id: 'social-media',
    pillar: 'growth',
    title: {
      en: 'Social Media Management',
      ar: 'إدارة حسابات التواصل الاجتماعي',
    },
    tagline: {
      en: 'End-to-end content strategy, bilingual copywriting, publishing, and community care.',
      ar: 'تخطيط المحتوى الشهري، كتابة إبداعية، نشر منتظم وتفاعل يبني ولاء الجمهور.',
    },
    description: {
      en: 'Consistent brand voice across Instagram, TikTok, LinkedIn, and X backed by monthly growth analytics and agile trend execution.',
      ar: 'نحول حسابات علامتك إلى قنوات حيوية بمحتوى أصيل وتصميم متسق وتقارير نمو شهرية واضحة.',
    },
    deliverables: {
      en: ['Monthly Content Architecture', 'Bilingual Copy & Publishing', 'Community & Inbox Ops'],
      ar: ['خطة محتوى شهرية شاملة', 'كتابة ونشر ثنائي اللغة', 'إدارة التفاعل والرسائل'],
    },
    turnaround: { en: 'Monthly retainer', ar: 'اشتراك شهري مستمر' },
    featured: 'glass',
    spanClass: 'md:col-span-1 lg:col-span-4',
    iconName: 'Megaphone',
    estimatorChipId: 'chip-social',
  },
  {
    id: 'business-dev',
    pillar: 'growth',
    title: {
      en: 'Business Development & GTM Strategy',
      ar: 'تطوير الأعمال واستراتيجيات النمو',
    },
    tagline: {
      en: 'B2B lead pipelines, strategic partnerships, pricing architecture, and outbound playbooks.',
      ar: 'بناء قنوات مبيعات الشركات، عقد الشراكات، تسعير الخدمات وهيكلة التوسع السوقي.',
    },
    description: {
      en: 'Structured market research, qualified prospect mapping, outreach sequences, and deal-room collateral to unlock predictable B2B revenue.',
      ar: 'نساعد الشركات الناشئة والوكالات على فتح أسواق جديدة وبناء منظومة مبيعات وشراكات قابلة للقياس.',
    },
    deliverables: {
      en: ['B2B Prospecting & Outreach', 'Offer & Pricing Positioning', 'Partnership Playbooks'],
      ar: ['استقطاب عملاء الشركات B2B', 'هيكلة العروض والتسعير', 'ملفات الشراكات والتوسع'],
    },
    turnaround: { en: '2 to 4 weeks', ar: '٢ إلى ٤ أسابيع' },
    featured: 'glass',
    spanClass: 'md:col-span-2 lg:col-span-4',
    iconName: 'Briefcase',
    estimatorChipId: 'chip-bizdev',
  },
  {
    id: 'data-analysis',
    pillar: 'data',
    title: {
      en: 'Data Analysis & Interactive Visualization',
      ar: 'تحليل البيانات ولوحات المؤشرات التفاعلية',
    },
    tagline: {
      en: 'Live executive dashboards, cohort analytics, and actionable revenue intelligence.',
      ar: 'لوحات قياس تفاعلية، تنظيف البيانات، واستخراج رؤى عملية تدعم قرارات الإدارة.',
    },
    description: {
      en: 'Turn fragmented spreadsheets, ad accounts, and SQL exports into clean Power BI, Looker Studio, or bespoke web KPI cockpits.',
      ar: 'نحول الجداول المتفرقة وبيانات المبيعات والتسويق إلى لوحات تحكم لحظية تكشف فرص الربح بدقة.',
    },
    deliverables: {
      en: ['Power BI & Looker Dashboards', 'Sales & Funnel Attribution', 'Automated Weekly Reports'],
      ar: ['لوحات Power BI و Looker', 'تحليل المبيعات وسلوك العملاء', 'تقارير تنفيذية مؤتمتة'],
    },
    turnaround: { en: '4 to 10 days', ar: '٤ إلى ١٠ أيام' },
    featured: 'navy',
    spanClass: 'md:col-span-1 lg:col-span-6',
    iconName: 'BarChart3',
    estimatorChipId: 'chip-data',
  },
  {
    id: 'data-entry-va',
    pillar: 'data',
    title: {
      en: 'Precision Data Entry & Virtual Assistance',
      ar: 'إدخال البيانات الدقيق والمساعدة الافتراضية',
    },
    tagline: {
      en: '99.9% verified catalog ops, CRM enrichment, research, and dedicated bilingual admin pods.',
      ar: 'تنظيم قواعد البيانات، رفع المنتجات، تحديث أنظمة العملاء ودعم إداري ثنائي اللغة.',
    },
    description: {
      en: 'Double-checked operational execution for e-commerce SKU uploads, document digitization, lead verification, and founder calendar/inbox workflows.',
      ar: 'فريق عمليات شاب ومنظم يتولى المهام الدقيقة من فهرسة آلاف المنتجات إلى تنسيق المواعيد والبحوث الميدانية.',
    },
    deliverables: {
      en: ['SKU & Store Migration', 'CRM Cleaning & Lead QA', 'Dedicated Bilingual VA Pod'],
      ar: ['رفع ومراجعة منتجات المتاجر', 'تنقية وتحديث بيانات CRM', 'مساعد تنفيذي عن بعد ثنائي اللغة'],
    },
    turnaround: { en: '24h onboarding', ar: 'انطلاق خلال ٢٤ ساعة' },
    featured: 'glass',
    spanClass: 'md:col-span-1 lg:col-span-6',
    iconName: 'Database',
    estimatorChipId: 'chip-va',
  },
];

export const PORTFOLIO_CATEGORIES: Array<{ key: PortfolioCategoryKey; label: Localized }> = [
  { key: 'all', label: { en: 'All Work', ar: 'كل الأعمال' } },
  { key: 'web', label: { en: 'Web Dev', ar: 'تطوير الويب' } },
  { key: 'video', label: { en: 'Video & Motion', ar: 'فيديو وموشن' } },
  { key: 'graphic', label: { en: 'Graphic & Photo', ar: 'جرافيك وصور' } },
  { key: 'social', label: { en: 'Social & Ads', ar: 'سوشيال وإعلانات' } },
  { key: 'data', label: { en: 'Data & Business', ar: 'بيانات وأعمال' } },
];

export const PORTFOLIO_PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'madar-pay-os',
    category: 'web',
    categoryLabel: { en: 'Web Dev & Custom Platform', ar: 'تطوير منصة ويب مخصصة' },
    title: { en: 'MadarPay Treasury & Merchant Portal', ar: 'منصة مدار باي لإدارة المدفوعات والتجار' },
    client: { en: 'Madar Financial Tech (Riyadh / Cairo)', ar: 'مدار للتقنية المالية (الرياض / القاهرة)' },
    year: '2026',
    duration: { en: '4 Weeks Sprint', ar: '٤ أسابيع تنفيذ' },
    headlineMetric: { en: '+63% Faster Merchant Onboarding', ar: '+٦٣٪ تسريع تسجيل التجار' },
    shortSummary: {
      en: 'Bilingual React + TypeScript merchant portal, interactive settlement analytics, and marketing launch hub.',
      ar: 'بوابة تجار ثنائية اللغة مع لوحة تسويات مالية لحظية وموقع إطلاق تفاعلي فائق السرعة.',
    },
    challenge: {
      en: 'MadarPay needed to replace a legacy 9-step onboarding form and static marketing site before their regional seed expansion, requiring strict RTL/LTR parity and instant KYC feedback.',
      ar: 'احتاجت مدار باي إلى استبدال نظام تسجيل تقليدي بطيء من ٩ خطوات بواجهة حديثة تدعم العربية والإنجليزية بكفاءة تامة قبل جولة التوسع الإقليمي.',
    },
    solution: {
      en: 'Our web engineering and motion talents co-designed a glassmorphic React platform with real-time IBAN/CR validation, interactive fee calculators, and a custom settlement dashboard.',
      ar: 'تعاون فريق هندسة الويب والموشن لبناء منصة تفاعلية بواجهة زجاجية عصرية، تحقق لحظي من البيانات المالية، وحاسبة رسوم تفاعلية رفعت إتمام التسجيل.',
    },
    tools: ['React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node REST SDK', 'Figma'],
    deliverables: [
      {
        label: { en: 'Merchant KYC Flow', ar: 'مسار توثيق التجار الذكي' },
        summary: {
          en: 'Reduced merchant verification from 9 fragmented screens down to a 3-step guided flow with live document checks.',
          ar: 'اختصار رحلة توثيق المتاجر من ٩ شاشات معقدة إلى ٣ خطوات واضحة مع معاينة فورية للمستندات.',
        },
        metricBadge: { en: '3m 40s avg completion', ar: '٣ دقائق و٤٠ ثانية للتسجيل' },
      },
      {
        label: { en: 'Live Settlement Cockpit', ar: 'لوحة التسويات اللحظية' },
        summary: {
          en: 'Real-time payout ledger, multi-currency filters, and automated PDF/CSV reconciliation exports.',
          ar: 'عرض مباشر للتحويلات اليومية وفلاتر متعددة العملات مع تصدير فوري للتقارير المحاسبية.',
        },
        metricBadge: { en: '99.98% UI uptime', ar: 'استقرار تشغيلي ٩٩.٩٨٪' },
      },
      {
        label: { en: 'Bilingual Product Site', ar: 'موقع الإطلاق ثنائي اللغة' },
        summary: {
          en: 'Interactive API sandbox preview and conversion-focused pricing calculator in Arabic and English.',
          ar: 'صفحات تعريفية تفاعلية مع معاينة حية للكود وحاسبة باقات شفافة بالعربية والإنجليزية.',
        },
        metricBadge: { en: '4.7% demo conversion', ar: 'معدل طلب عرض ٤.٧٪' },
      },
    ],
    impactStats: [
      { value: '+63%', label: { en: 'Onboarding Velocity', ar: 'سرعة إتمام التسجيل' } },
      { value: '4.7%', label: { en: 'Visitor-to-Demo Rate', ar: 'معدل التحويل للعروض' } },
      { value: '0.8s', label: { en: 'First Contentful Paint', ar: 'سرعة استجابة الواجهة' } },
    ],
    teamIds: ['ziad-mansour', 'lina-khoury', 'tarek-nabil'],
    relatedEstimatorIds: ['chip-web', 'chip-motion', 'chip-data'],
    artwork: 'fintech-platform',
    accentTone: 'navy',
  },
  {
    id: 'kayan-sonic-launch',
    category: 'video',
    categoryLabel: { en: 'Video Editing & Motion Graphics', ar: 'مونتاج فيديو وموشن جرافيك' },
    title: { en: 'Kayan Audio — Kinetic Launch Film & 18-Reel Engine', ar: 'كيان أوديو: فيلم الإطلاق الحركي و١٨ ريلز تفاعلي' },
    client: { en: 'Kayan Smart Wearables', ar: 'كيان للأجهزة الصوتية الذكية' },
    year: '2026',
    duration: { en: '14 Days Production', ar: '١٤ يوماً إنتاج متكامل' },
    headlineMetric: { en: '68% 3-Second Hook Retention', ar: '٦٨٪ معدل استبقاء المشاهدين' },
    shortSummary: {
      en: 'High-energy 60s 3D/2D kinetic product film paired with 18 platform-native vertical edits and custom sound design.',
      ar: 'فيلم إطلاق حركي مدته ٦٠ ثانية مع ١٨ مقطع ريلز وتيك توك بهندسة صوتية إيقاعية مصممة خصيصاً.',
    },
    challenge: {
      en: 'Kayan was launching wireless studio earbuds in a crowded consumer electronics market where generic product renders were getting skipped within 1.5 seconds.',
      ar: 'أرادت كيان إطلاق سماعاتها اللاسلكية وسط منافسة شرسة حيث يتجاوز الجمهور الإعلانات التقليدية خلال ثانية ونصف.',
    },
    solution: {
      en: 'We built an audio-reactive visual grammar: tactile macro product cuts synced frame-by-frame to bass transients, kinetic Arabic/English typography, and modular vertical hooks.',
      ar: 'صممنا لغة بصرية تتفاعل مع الموجات الصوتية، مع تقطيع إيقاعي سريع ونصوص حركية مزدوجة اللغة تشد الانتباه فوراً.',
    },
    tools: ['After Effects', 'Premiere Pro', 'DaVinci Resolve', 'Blender 3D', 'Audition'],
    deliverables: [
      {
        label: { en: '60s Hero Kinetic Film', ar: 'فيلم الإطلاق الرئيسي ٦٠ ثانية' },
        summary: {
          en: 'Master 4K widescreen launch film blending 3D acoustic wave simulations with crisp feature callouts.',
          ar: 'نسخة رئيسية بدقة 4K تمزج محاكاة الموجات الصوتية ثلاثية الأبعاد مع إبراز مزايا المنتج.',
        },
        metricBadge: { en: '1.4M organic views', ar: '١.٤ مليون مشاهدة طبيعية' },
      },
      {
        label: { en: '18 Vertical Hook Variations', ar: '١٨ نسخة ريلز وتيك توك' },
        summary: {
          en: 'A/B tested opening 3-second visual hooks tailored for Reels, TikTok, and YouTube Shorts.',
          ar: 'مقدمات بصرية متنوعة لاختبار أعلى معدل مشاهدة وتفاعل عبر انستغرام وتيك توك.',
        },
        metricBadge: { en: '68% hook hold rate', ar: '٦٨٪ بقاء بعد ٣ ثوانٍ' },
      },
      {
        label: { en: 'Sonic Logo Ident', ar: 'البصمة الصوتية واللوغو المتحرك' },
        summary: {
          en: '2.5-second signature soundwave stinger closing every brand asset.',
          ar: 'خاتمة صوتية وبصرية مميزة مدتها ٢.٥ ثانية توحد جميع محتويات العلامة.',
        },
        metricBadge: { en: 'Used across 40+ ads', ar: 'مستخدمة في +٤٠ إعلاناً' },
      },
    ],
    impactStats: [
      { value: '68%', label: { en: '3s Scroll-Stop Rate', ar: 'معدل إيقاف التمرير' } },
      { value: '1.4M', label: { en: 'Cross-Platform Views', ar: 'مشاهدات عبر المنصات' } },
      { value: '3.9x', label: { en: 'Pre-Order Click Lift', ar: 'مضاعفة نقرات الطلب المسبق' } },
    ],
    teamIds: ['youssef-hamed', 'lina-khoury', 'salma-farouk'],
    relatedEstimatorIds: ['chip-video', 'chip-motion', 'chip-ads'],
    artwork: 'motion-reel',
    accentTone: 'amber',
  },
  {
    id: 'solis-roastery-brand',
    category: 'graphic',
    categoryLabel: { en: 'Graphic Design & Photo Retouching', ar: 'هوية بصرية ومعالجة صور تجارية' },
    title: { en: 'Solis Specialty Coffee — Identity, Packaging & 90-SKU Lookbook', ar: 'سوليس للقهوة المختصة: الهوية والتغليف و٩٠ صورة منتج' },
    client: { en: 'Solis Roasters Collective', ar: 'محمصة سوليس المختصة' },
    year: '2025',
    duration: { en: '3 Weeks', ar: '٣ أسابيع' },
    headlineMetric: { en: '+44% Direct Store Add-to-Cart', ar: '+٤٤٪ زيادة الإضافة للسلة' },
    shortSummary: {
      en: 'Tactile geometric brand identity, foil-stamped bag packaging, and studio-grade photo compositing for 90 SKU variants.',
      ar: 'نظام هوية بصرية هندسية، تصميم عبوات المحاصيل، ومعالجة لونية وإضاءة احترافية لـ ٩٠ منتجاً في المتجر.',
    },
    challenge: {
      en: 'Solis had inconsistent product photography shot across three lighting setups and needed a cohesive premium shelf & online presence before entering gourmet retail.',
      ar: 'عانت سوليس من تفاوت إضاءة صور منتجاتها وحاجتها لهوية تغليف فاخرة تلائم المتاجر الكبرى والبيع الإلكتروني معاً.',
    },
    solution: {
      en: 'Our graphic and photo retouching specialists unified every bag, drip box, and lifestyle composite under warm amber-crema color profiles and bilingual origin cards.',
      ar: 'ابتكرنا نظام تغليف ثنائي اللغة مع معالجة احترافية للظلال والألوان وحدت مظهر الكتالوج بالكامل ومنحته طابعاً عالمياً.',
    },
    tools: ['Adobe Illustrator', 'Photoshop', 'Capture One', 'InDesign', 'Dimension'],
    deliverables: [
      {
        label: { en: 'Bilingual Brand Book', ar: 'دليل الهوية البصرية الشامل' },
        summary: {
          en: '48-page specification covering Arabic/Latin logotype lockups, roast color coding, and typography.',
          ar: 'دليل من ٤٨ صفحة يضبط استخدام الشعار، نظام ألوان المحاصيل، والخطوط العربية والإنجليزية.',
        },
        metricBadge: { en: '12 packaging dielines', ar: '١٢ قالب تغليف جاهز للطباعة' },
      },
      {
        label: { en: '90-SKU Retouched Catalog', ar: 'معالجة ٩٠ صورة منتج للمتجر' },
        summary: {
          en: 'Consistent specular highlights, natural contact shadows, and WebP optimization for instant store loading.',
          ar: 'توحيد الإضاءة والظلال الطبيعية وضغط ذكي للصور يحفظ أدق التفاصيل مع سرعة التحميل.',
        },
        metricBadge: { en: '100% color-calibrated', ar: 'معايرة لونية ١٠٠٪' },
      },
      {
        label: { en: 'Composite Launch Visuals', ar: 'ملصقات إعلانية مدمجة' },
        summary: {
          en: '6 hero campaign key visuals for outdoor lightboxes and Instagram carousel drops.',
          ar: '٦ لوحات إعلانية رئيسية للوحات الطرق وحملات الإطلاق الرقمية.',
        },
        metricBadge: { en: '+44% cart additions', ar: '+٤٤٪ تفاعل شرائي' },
      },
    ],
    impactStats: [
      { value: '+44%', label: { en: 'Store Add-to-Cart', ar: 'معدل الإضافة للسلة' } },
      { value: '90', label: { en: 'Retouched SKUs', ar: 'منتج بمعالجة استوديو' } },
      { value: '18 Stores', label: { en: 'Retail Rollout', ar: 'نقطة بيع معتمدة' } },
    ],
    teamIds: ['nour-elshamy', 'huda-mansi'],
    relatedEstimatorIds: ['chip-branding', 'chip-photo'],
    artwork: 'brand-editorial',
    accentTone: 'amber',
  },
  {
    id: 'aurum-fitness-growth',
    category: 'social',
    categoryLabel: { en: 'Social Media & Paid Ads', ar: 'إدارة سوشيال وإعلانات ممولة' },
    title: { en: 'Aurum Club — Full-Funnel Paid Social & Community Surge', ar: 'نادي أوروم: منظومة الإعلانات الممولة ونمو المجتمع الرقمي' },
    client: { en: 'Aurum Wellness & Performance', ar: 'أوروم للياقة والأداء الرياضي' },
    year: '2026',
    duration: { en: '90-Day Growth Sprint', ar: '٩٠ يوماً من النمو المتصاعد' },
    headlineMetric: { en: '5.4x Blended Ad ROAS', ar: '٥.٤ ضعف عائد الإنفاق الإعلاني' },
    shortSummary: {
      en: 'Synchronized TikTok/Meta creative testing, daily social storytelling, and WhatsApp lead-closing automation.',
      ar: 'إدارة محتوى يومية متكاملة مع حملات ميتا وتيك توك ومسار تحويل مباشر عبر واتساب رفع الاشتراكات السنوية.',
    },
    challenge: {
      en: 'Aurum faced rising cost-per-lead from fatigued static gym flyers and an inactive Instagram community ahead of opening two new branches.',
      ar: 'واجه النادي ارتفاعاً في تكلفة استقطاب المشتركين بسبب الإعلانات التقليدية المكررة وضعف التفاعل قبل افتتاح فرعين جديدين.',
    },
    solution: {
      en: 'We paired our media buyer, social strategist, and reel editor to ship 12 fresh member-story creatives every two weeks while restructuring Meta CAPI + TikTok retargeting.',
      ar: 'شكلنا خلية عمل من خبير الإعلانات ومديرة المحتوى والمونتير لإنتاج ١٢ إعلاناً قصصياً كل أسبوعين مع إعادة هيكلة الاستهداف.',
    },
    tools: ['Meta Ads Manager', 'TikTok Ads', 'Google Tag Manager', 'CapCut Pro', 'Notion Content OS'],
    deliverables: [
      {
        label: { en: 'Paid Acquisition Funnel', ar: 'مسار الاستحواذ الإعلاني الممول' },
        summary: {
          en: '3-tier prospecting, social-proof retargeting, and branch-specific trial pass campaigns.',
          ar: 'حملات استهداف متدرجة حسب الموقع الجغرافي لكل فرع مع إعادة استهداف الزوار المترددين.',
        },
        metricBadge: { en: '-41% Cost Per Lead', ar: '-٤١٪ خفض تكلفة العميل' },
      },
      {
        label: { en: '90-Day Social Calendar', ar: 'إدارة المحتوى والمجتمع لـ ٩٠ يوماً' },
        summary: {
          en: '48 Reels, 24 educational carousels, and under-10-minute bilingual DM response playbooks.',
          ar: '٤٨ ريلز، ٢٤ منشور تفاعلي، ونظام رد سريع على الاستفسارات يحول المتابعين إلى مشتركين.',
        },
        metricBadge: { en: '+38K local followers', ar: '+٣٨ ألف متابع محلي' },
      },
      {
        label: { en: 'Live ROAS Tracker', ar: 'لوحة متابعة العائد اللحظية' },
        summary: {
          en: 'Transparent daily spend vs. membership revenue dashboard shared directly with club founders.',
          ar: 'لوحة شفافة تربط الإنفاق الإعلاني اليومي بعدد العقود الفعلية المسجلة في كل فرع.',
        },
        metricBadge: { en: '5.4x verified ROAS', ar: 'عائد إعلاني موثق ٥.٤x' },
      },
    ],
    impactStats: [
      { value: '5.4x', label: { en: 'Blended ROAS', ar: 'العائد على الإعلانات' } },
      { value: '-41%', label: { en: 'Cost Per Lead', ar: 'انخفاض تكلفة العميل' } },
      { value: '610+', label: { en: 'New Annual Members', ar: 'اشتراك سنوي جديد' } },
    ],
    teamIds: ['salma-farouk', 'kareem-adel', 'youssef-hamed'],
    relatedEstimatorIds: ['chip-ads', 'chip-social', 'chip-video'],
    artwork: 'roas-growth',
    accentTone: 'amber',
  },
  {
    id: 'nawafeth-bi-ops',
    category: 'data',
    categoryLabel: { en: 'Data Analytics & Operations Pod', ar: 'تحليل البيانات وتشغيل العمليات' },
    title: { en: 'Nawafeth Logistics — Executive BI Cockpit & 45K Catalog Ops', ar: 'نوافذ اللوجستية: لوحة ذكاء الأعمال وتدقيق ٤٥ ألف سجل' },
    client: { en: 'Nawafeth Supply & Distribution', ar: 'نوافذ للإمداد والتوزيع' },
    year: '2026',
    duration: { en: '3 Weeks + Retainer', ar: '٣ أسابيع تأسيس + تشغيل شهري' },
    headlineMetric: { en: '14 hrs/wk Saved in Executive Reporting', ar: 'توفير ١٤ ساعة تقارير أسبوعياً' },
    shortSummary: {
      en: 'Unified multi-warehouse KPI cockpit plus precision cleaning and SKU standardization across 45,000 inventory records.',
      ar: 'لوحة مؤشرات تنفيذية تربط المستودعات والمبيعات، مع تنقية وتوحيد ٤٥ ألف سجل منتجات بدقة ٩٩.٩٤٪.',
    },
    challenge: {
      en: 'Leadership waited until Thursday afternoon for manually merged Excel sheets across 5 warehouses, suffering from duplicate Arabic/English item names.',
      ar: 'كانت الإدارة تنتظر نهاية كل أسبوع لدمج ملفات إكسل يدوياً من ٥ مستودعات، مع وجود آلاف الأسماء المكررة وغير الموحدة.',
    },
    solution: {
      en: 'Our data analyst and precision VA pod standardized all 45,000 SKUs with bilingual taxonomy rules and deployed an automated daily KPI dashboard.',
      ar: 'قام فريق البيانات والمساعدة الرقمية بتوحيد وتصنيف ٤٥ ألف صنف باللغتين وبناء لوحة تحكم تتحدث تلقائياً كل صباح.',
    },
    tools: ['Power BI', 'Python Pandas', 'PostgreSQL', 'Airtable', 'Google Sheets Apps Script'],
    deliverables: [
      {
        label: { en: 'Executive Margin Cockpit', ar: 'لوحة الهوامش والمخزون التنفيذية' },
        summary: {
          en: 'Interactive drill-down by region, SKU velocity, stockout risk alerts, and representative quota attainment.',
          ar: 'تصفية فورية حسب المنطقة وسرعة دوران الأصناف وتنبيهات نفاد المخزون قبل وقوعها.',
        },
        metricBadge: { en: 'Auto-refreshed every 1h', ar: 'تحديث آلي كل ساعة' },
      },
      {
        label: { en: '45,000-SKU Data Hygiene', ar: 'تنقية وتوحيد ٤٥ ألف صنف' },
        summary: {
          en: 'De-duplicated barcodes, bilingual product titles, and verified supplier lead-time fields.',
          ar: 'إزالة التكرارات ومطابقة الباركود وتوحيد المسميات العربية والإنجليزية بدقة مراجعة مزدوجة.',
        },
        metricBadge: { en: '99.94% QA accuracy', ar: 'دقة تدقيق ٩٩.٩٤٪' },
      },
      {
        label: { en: 'B2B Pipeline Tracker', ar: 'نظام متابعة عقود الموردين' },
        summary: {
          en: 'Dedicated virtual operations workflow tracking wholesale RFQs and contract renewals.',
          ar: 'مسار عمل منظم لمتابعة عروض الأسعار وتجديد عقود التوريد دون ضياع أي فرصة.',
        },
        metricBadge: { en: '+29% RFQ response speed', ar: '+٢٩٪ سرعة الرد على العروض' },
      },
    ],
    impactStats: [
      { value: '14h -> 20m', label: { en: 'Weekly Reporting Time', ar: 'زمن إعداد التقارير' } },
      { value: '45,000', label: { en: 'Verified SKU Records', ar: 'سجل بيانات مدقق' } },
      { value: '99.94%', label: { en: 'Audit Accuracy', ar: 'نسبة الدقة التشغيلية' } },
    ],
    teamIds: ['tarek-nabil', 'mariam-sami', 'kareem-adel'],
    relatedEstimatorIds: ['chip-data', 'chip-va', 'chip-bizdev'],
    artwork: 'bi-cockpit',
    accentTone: 'navy',
  },
  {
    id: 'velora-commerce-rebuild',
    category: 'web',
    categoryLabel: { en: 'Web Dev & E-Commerce UX', ar: 'تطوير متجر إلكتروني وتجربة شراء' },
    title: { en: 'Velora Maison — Headless RTL/LTR Luxury Storefront', ar: 'فيلورا ميزون: واجهة متجر فاخر فائق السرعة' },
    client: { en: 'Velora Home & Fragrance', ar: 'فيلورا للعطور والديكور' },
    year: '2025',
    duration: { en: '5 Weeks', ar: '٥ أسابيع' },
    headlineMetric: { en: '+52% Mobile Checkout Completion', ar: '+٥٢٪ إتمام الدفع عبر الجوال' },
    shortSummary: {
      en: 'Custom interactive fragrance quiz, instant drawer cart, and studio-retouched product galleries.',
      ar: 'متجر مخصص يضم مستشار عطور تفاعلي، سلة شراء منزلقة لحظية، وصور منتجات بمعالجة فندقية.',
    },
    challenge: {
      en: 'Mobile shoppers from social ads bounced on slow 6-second product pages and struggled to choose scents online without physical sampling.',
      ar: 'كان زوار الجوال يغادرون المتجر القديم بسبب بطء التحميل وصعوبة اختيار العطر المناسب عبر الإنترنت.',
    },
    solution: {
      en: 'We engineered an ultra-light storefront with an interactive 4-question scent matcher and crisp visual note pyramids in Arabic and English.',
      ar: 'طورنا واجهة سريعة للغاية مع اختبار تفاعلي ذكي يرشح العطر المثالي ويعرض هرم النوتات العطرية بأسلوب بصري أنيق.',
    },
    tools: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shopify Storefront API', 'Photoshop'],
    deliverables: [
      {
        label: { en: 'Interactive Scent Finder', ar: 'مستشار العطور التفاعلي' },
        summary: {
          en: 'Guided sensory quiz matching mood and notes to curated discovery sets.',
          ar: 'تجربة تفاعلية من ٤ أسئلة ترشح المجموعة الأنسب لذائقة العميل وترفع قيمة السلة.',
        },
        metricBadge: { en: '+31% Average Order Value', ar: '+٣١٪ متوسط قيمة الطلب' },
      },
      {
        label: { en: 'One-Thumb Mobile Cart', ar: 'سلة دفع سريعة للجوال' },
        summary: {
          en: 'Apple Pay / Mada / Tabby ready checkout drawer engineered for thumb-zone ergonomics.',
          ar: 'تصميم مريح للاستخدام بيد واحدة مع دعم الدفع السريع وتقسيط المشتريات.',
        },
        metricBadge: { en: '+52% mobile checkout', ar: '+٥٢٪ إتمام الشراء بالجوال' },
      },
    ],
    impactStats: [
      { value: '+52%', label: { en: 'Mobile Conversion', ar: 'تحويل الجوال' } },
      { value: '+31%', label: { en: 'Average Order Value', ar: 'متوسط السلة' } },
      { value: '1.1s', label: { en: 'Mobile Load Speed', ar: 'سرعة فتح الصفحات' } },
    ],
    teamIds: ['ziad-mansour', 'huda-mansi', 'nour-elshamy'],
    relatedEstimatorIds: ['chip-web', 'chip-photo', 'chip-branding'],
    artwork: 'commerce-web',
    accentTone: 'slate',
  },
  {
    id: 'qimma-edtech-series',
    category: 'social',
    categoryLabel: { en: 'Social Growth & Business Dev', ar: 'نمو المحتوى وتطوير شراكات B2B' },
    title: { en: 'Qimma Academy — B2B Campus Partnerships & Creator Series', ar: 'أكاديمية قمة: شراكات الجامعات وسلسلة المحتوى التعليمي' },
    client: { en: 'Qimma EdTech Platform', ar: 'منصة قمة التعليمية' },
    year: '2026',
    duration: { en: '8 Weeks', ar: '٨ أسابيع' },
    headlineMetric: { en: '19 Corporate & University Deals Signed', ar: 'توقيع ١٩ شراكة جامعية ومؤسسية' },
    shortSummary: {
      en: 'Combined B2B outbound partnership engine with a viral LinkedIn & Reels micro-documentary series.',
      ar: 'دمجنا تطوير الأعمال الموجه للجامعات والشركات مع سلسلة محتوى مرئي قصيرة عززت ثقة صناع القرار.',
    },
    challenge: {
      en: 'Qimma wanted to pivot from low-ticket individual courses to institutional cohort contracts across MENA universities and tech employers.',
      ar: 'سعت قمة للانتقال من بيع الدورات الفردية إلى توقيع عقود تدريبية كبرى مع الجامعات والشركات التقنية.',
    },
    solution: {
      en: 'Our business development lead built a 240-account decision-maker pipeline while our social & video team produced authority case reels on LinkedIn.',
      ar: 'بنى فريق تطوير الأعمال قائمة مستهدفة من ٢٤٠ صانع قرار بالتوازي مع نشر قصص نجاح مرئية على لينكدإن سرّعت إغلاق العقود.',
    },
    tools: ['LinkedIn Sales Navigator', 'HubSpot CRM', 'Premiere Pro', 'Figma Pitch Deck'],
    deliverables: [
      {
        label: { en: 'Institutional Deal Deck & Outreach', ar: 'ملف الشراكات ومنظومة التواصل B2B' },
        summary: {
          en: 'Custom ROI calculator deck and personalized bilingual outreach sequences for L&D directors.',
          ar: 'عرض تقديمي مخصص لمديري التدريب يوضح العائد المؤسسي مع رسائل تواصل احترافية.',
        },
        metricBadge: { en: '34% meeting book rate', ar: '٣٤٪ نسبة حجز الاجتماعات' },
      },
      {
        label: { en: 'LinkedIn Authority Series', ar: 'سلسلة الفيديوهات القصيرة على لينكدإن' },
        summary: {
          en: '16 student-outcome mini documentaries establishing founder credibility before sales calls.',
          ar: '١٦ مقطعاً قصيراً يوثق توظيف الخريجين ويعزز الموثوقية قبل اجتماعات التعاقد.',
        },
        metricBadge: { en: '19 B2B contracts closed', ar: 'إغلاق ١٩ عقداً مؤسسياً' },
      },
    ],
    impactStats: [
      { value: '19', label: { en: 'Signed B2B Cohorts', ar: 'عقد شراكة مؤسسي' } },
      { value: '34%', label: { en: 'Outreach Reply Rate', ar: 'نسبة استجابة صناع القرار' } },
      { value: '420K', label: { en: 'LinkedIn Impressions', ar: 'ظهور مهني مستهدف' } },
    ],
    teamIds: ['kareem-adel', 'salma-farouk', 'youssef-hamed'],
    relatedEstimatorIds: ['chip-bizdev', 'chip-social', 'chip-video'],
    artwork: 'sound-campaign',
    accentTone: 'navy',
  },
  {
    id: 'tawazon-clinic-ops',
    category: 'data',
    categoryLabel: { en: 'Data Ops, Web Portal & VA', ar: 'أتمتة العمليات وبوابة الحجوزات' },
    title: { en: 'Tawazon Clinics — Patient Retention Analytics & Smart Ops Pod', ar: 'عيادات توازن: تحليلات ولاء المراجعين وتشغيل المواعيد' },
    client: { en: 'Tawazon Medical Group', ar: 'مجموعة عيادات توازن' },
    year: '2025',
    duration: { en: '4 Weeks', ar: '٤ أسابيع' },
    headlineMetric: { en: '-37% Missed Appointment Rate', ar: '-٣٧٪ تقليل التغيب عن المواعيد' },
    shortSummary: {
      en: 'Cohort retention analytics, automated WhatsApp confirmation workflows, and bilingual patient intake coordination.',
      ar: 'لوحة تحليل عودة المراجعين مع نظام تأكيد مواعيد ذكي وفريق مساعدة افتراضية ينسق الحجوزات اليومية.',
    },
    challenge: {
      en: 'High no-show rates and fragmented patient records across three clinic branches were costing doctors 18+ idle hours weekly.',
      ar: 'أدى تشتت سجلات المراجعين وارتفاع نسبة عدم حضور المواعيد إلى هدر أكثر من ١٨ ساعة عمل أسبوعياً للأطباء.',
    },
    solution: {
      en: 'We unified branch data into a live utilization dashboard and staffed a bilingual virtual coordination workflow for proactive slot backfilling.',
      ar: 'ربطنا بيانات الفروع الثلاثة في لوحة إشغال لحظية مع منظومة متابعة استباقية تعيد ملء المواعيد المعتذر عنها فوراً.',
    },
    tools: ['Looker Studio', 'Make Automation', 'Airtable', 'React Intake Form'],
    deliverables: [
      {
        label: { en: 'Doctor Utilization Dashboard', ar: 'لوحة إشغال العيادات والأطباء' },
        summary: {
          en: 'Tracks hourly chair occupancy, repeat visit cohorts, and campaign source profitability.',
          ar: 'قياس دقيق لنسبة إشغال كل عيادة ومصادر الحجوزات الأكثر ربحية.',
        },
        metricBadge: { en: '-37% no-show rate', ar: '-٣٧٪ انخفاض التغيب' },
      },
      {
        label: { en: 'Digital Intake & VA Desk', ar: 'استمارة استقبال رقمية وفريق متابعة' },
        summary: {
          en: 'Pre-visit mobile form + bilingual VA follow-up cutting lobby wait times in half.',
          ar: 'تعبئة البيانات عبر الجوال قبل الوصول مع تنسيق فوري يقلل انتظار المراجعين إلى النصف.',
        },
        metricBadge: { en: '4.9/5 patient CSAT', ar: '٤.٩/٥ رضا المراجعين' },
      },
    ],
    impactStats: [
      { value: '-37%', label: { en: 'Missed Appointments', ar: 'انخفاض التغيب' } },
      { value: '+28%', label: { en: 'Repeat Bookings', ar: 'عودة المراجعين' } },
      { value: '18h/wk', label: { en: 'Recovered Doctor Time', ar: 'ساعات طبية مستردة' } },
    ],
    teamIds: ['mariam-sami', 'tarek-nabil', 'ziad-mansour'],
    relatedEstimatorIds: ['chip-data', 'chip-va', 'chip-web'],
    artwork: 'ops-automation',
    accentTone: 'amber',
  },
];

export const ESTIMATOR_CHIPS: EstimatorServiceChip[] = [
  {
    id: 'chip-web',
    pillar: 'tech',
    label: { en: 'Website / Custom Platform', ar: 'موقع ويب / منصة مخصصة' },
    basePoints: 1400,
    baseDays: 18,
    squadRole: { en: 'Full-Stack Web Architect', ar: 'مهندس تطوير ويب متكامل' },
  },
  {
    id: 'chip-branding',
    pillar: 'visual',
    label: { en: 'Brand Identity & Graphic Design', ar: 'هوية بصرية وتصميم جرافيك' },
    basePoints: 750,
    baseDays: 10,
    squadRole: { en: 'Brand & Visual Designer', ar: 'مصمم هوية وجرافيك' },
  },
  {
    id: 'chip-video',
    pillar: 'visual',
    label: { en: 'Video Editing & Reels Pack', ar: 'مونتاج فيديو وباقة ريلز' },
    basePoints: 650,
    baseDays: 7,
    squadRole: { en: 'Senior Video Editor', ar: 'مونتير فيديو إبداعي' },
  },
  {
    id: 'chip-motion',
    pillar: 'visual',
    label: { en: 'Motion Graphics & 2D/3D', ar: 'موشن جرافيك وتحريك بصري' },
    basePoints: 850,
    baseDays: 10,
    squadRole: { en: 'Motion Designer', ar: 'فنان موشن جرافيك' },
  },
  {
    id: 'chip-photo',
    pillar: 'visual',
    label: { en: 'Commercial Photo Retouching', ar: 'معالجة صور وريتاتش المنتجات' },
    basePoints: 450,
    baseDays: 5,
    squadRole: { en: 'Retouching Specialist', ar: 'مختص معالجة صور تجارية' },
  },
  {
    id: 'chip-social',
    pillar: 'growth',
    label: { en: 'Social Media Management', ar: 'إدارة حسابات التواصل الاجتماعي' },
    basePoints: 700,
    baseDays: 14,
    squadRole: { en: 'Social Content Strategist', ar: 'مدير محتوى ومنصات رقمية' },
  },
  {
    id: 'chip-ads',
    pillar: 'growth',
    label: { en: 'Paid Ads & Media Buying', ar: 'إعلانات ممولة وإدارة حملات' },
    basePoints: 800,
    baseDays: 7,
    squadRole: { en: 'Performance Media Buyer', ar: 'خبير إعلانات ممولة وأداء' },
  },
  {
    id: 'chip-bizdev',
    pillar: 'growth',
    label: { en: 'Business Development & B2B', ar: 'تطوير أعمال وشراكات B2B' },
    basePoints: 900,
    baseDays: 14,
    squadRole: { en: 'B2B Growth Lead', ar: 'مختص تطوير أعمال وشراكات' },
  },
  {
    id: 'chip-data',
    pillar: 'data',
    label: { en: 'Data Analysis & BI Dashboards', ar: 'تحليل بيانات ولوحات مؤشرات' },
    basePoints: 780,
    baseDays: 8,
    squadRole: { en: 'Data & BI Analyst', ar: 'محلل بيانات وذكاء أعمال' },
  },
  {
    id: 'chip-va',
    pillar: 'data',
    label: { en: 'Precision Data Entry & VA', ar: 'إدخال بيانات ومساعدة افتراضية' },
    basePoints: 420,
    baseDays: 4,
    squadRole: { en: 'Operations & VA Specialist', ar: 'مختص عمليات ومساعدة رقمية' },
  },
];
