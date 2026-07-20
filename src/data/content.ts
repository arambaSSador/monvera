import type { BlogPost, CaseStudy, Certificate, Service } from "./types";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "how-to-choose-industrial-lubricant",
    title: {
      hy: "Как выбрать промышленную смaзку",
      ru: "Как выбрать промышленную смазку",
      en: "How to Choose Industrial Lubricant",
    },
    excerpt: {
      hy: "Полное руководство по выбору правильной смaзки для вашего оборудования",
      ru: "Полное руководство по выбору правильной смазки для вашего оборудования",
      en: "Complete guide to selecting the right lubricant for your equipment",
    },
    content: {
      hy: "Выбор промышленной смaзки — критически важное решение...",
      ru: "Выбор промышленной смазки — критически важное решение для надёжности оборудования. Учитывайте нагрузку, температуру, скорость и условия эксплуатации.",
      en: "Selecting an industrial lubricant is a critical decision for equipment reliability. Consider load, temperature, speed, and operating conditions.",
    },
    image: "/images/blog/lubricants.jpg",
    category: "guides",
    author: "MONVERA Technical Team",
    date: "2026-03-15",
    readTime: 8,
    tags: ["selection", "guide", "maintenance"],
    seoKeywords: {
      hy: "выбор смазки, промышленная смазка",
      ru: "выбор смазки, промышленная смазка",
      en: "lubricant selection, industrial lubricant",
    },
  },
  {
    id: "2",
    slug: "mineral-vs-synthetic-oils",
    title: {
      hy: "Минeralные vs синтетические масла",
      ru: "Минеральные vs синтетические масла",
      en: "Mineral vs Synthetic Oils",
    },
    excerpt: {
      hy: "Различия между минeralными и синтетическими маслами",
      ru: "Различия между минеральными и синтетическими маслами",
      en: "Differences between mineral and synthetic oils",
    },
    content: {
      hy: "Синтетические масла обеспечивают более длительный срок службы...",
      ru: "Синтетические масла обеспечивают более длительный срок службы и лучшую защиту при экстремальных температурах.",
      en: "Synthetic oils provide longer service life and better protection at extreme temperatures.",
    },
    image: "/images/blog/synthetic-oils.jpg",
    category: "guides",
    author: "MONVERA Technical Team",
    date: "2026-03-10",
    readTime: 6,
    tags: ["synthetic", "mineral", "comparison"],
    seoKeywords: { hy: "синтетика минерал", ru: "синтетика минерал", en: "synthetic mineral oil" },
  },
  {
    id: "3",
    slug: "increase-bearing-life",
    title: {
      hy: "Как увеличить срок службы подшипников",
      ru: "Как увеличить срок службы подшипников",
      en: "How to Increase Bearing Life",
    },
    excerpt: {
      hy: "Практические советы по продлению жизни подшипников",
      ru: "Практические советы по продлению жизни подшипников",
      en: "Practical tips to extend bearing life",
    },
    content: {
      hy: "Правильная смaзка может увеличить срок службы подшипников на 300%...",
      ru: "Правильная смазка может увеличить срок службы подшипников на 300%. Используйте NLGI 2 смазки с EP присадками.",
      en: "Proper lubrication can extend bearing life by 300%. Use NLGI 2 greases with EP additives.",
    },
    image: "/images/blog/bearings.jpg",
    category: "maintenance",
    author: "MONVERA Technical Team",
    date: "2026-03-05",
    readTime: 7,
    tags: ["bearings", "maintenance", "grease"],
    seoKeywords: { hy: "подшипники смазка", ru: "подшипники смазка", en: "bearing lubrication" },
  },
  {
    id: "4",
    slug: "food-grade-lubricants-explained",
    title: {
      hy: "Food Grade смaзки: полное руководство",
      ru: "Food Grade смазки: полное руководство",
      en: "Food Grade Lubricants Explained",
    },
    excerpt: {
      hy: "Всё о NSF H1 смазках для пищевой промышленности",
      ru: "Всё о NSF H1 смазках для пищевой промышленности",
      en: "Everything about NSF H1 lubricants for food industry",
    },
    content: {
      hy: "NSF H1 сертификация гарантирует безопасность при случайном контакте с пищей...",
      ru: "NSF H1 сертификация гарантирует безопасность при случайном контакте с пищей.",
      en: "NSF H1 certification ensures safety for incidental food contact.",
    },
    image: "/images/blog/food-grade.jpg",
    category: "food",
    author: "MONVERA Technical Team",
    date: "2026-02-28",
    readTime: 10,
    tags: ["food-grade", "nsf-h1", "food"],
    seoKeywords: { hy: "food grade nsf h1", ru: "food grade nsf h1", en: "food grade nsf h1" },
  },
  {
    id: "5",
    slug: "hydraulic-oil-selection",
    title: {
      hy: "Выбор гидравлического масла",
      ru: "Выбор гидравлического масла",
      en: "Hydraulic Oil Selection Guide",
    },
    excerpt: {
      hy: "Как выбрать ISO VG для вашей гидравлической системы",
      ru: "Как выбрать ISO VG для вашей гидравлической системы",
      en: "How to select ISO VG for your hydraulic system",
    },
    content: {
      hy: "ISO VG 46 — наиболее распространённая вязкость для промышленных систем...",
      ru: "ISO VG 46 — наиболее распространённая вязкость для промышленных гидравлических систем.",
      en: "ISO VG 46 is the most common viscosity for industrial hydraulic systems.",
    },
    image: "/images/blog/hydraulic.jpg",
    category: "guides",
    author: "MONVERA Technical Team",
    date: "2026-02-20",
    readTime: 9,
    tags: ["hydraulic", "iso-vg", "selection"],
    seoKeywords: { hy: "гидравлическое масло", ru: "гидравлическое масло", en: "hydraulic oil selection" },
  },
  {
    id: "6",
    slug: "gear-oil-guide",
    title: {
      hy: "Руководство по редукторным маслам",
      ru: "Руководство по редукторным маслам",
      en: "Gear Oil Guide",
    },
    excerpt: {
      hy: "EP, синтетика, вязкость — всё о редукторных маслах",
      ru: "EP, синтетика, вязкость — всё о редукторных маслах",
      en: "EP, synthetic, viscosity — everything about gear oils",
    },
    content: {
      hy: "Редукторные масла с EP присадками защищают зубья от задиров...",
      ru: "Редукторные масла с EP присадками защищают зубья от задиров при высоких нагрузках.",
      en: "EP gear oils protect teeth from scoring under high loads.",
    },
    image: "/images/blog/gears.jpg",
    category: "guides",
    author: "MONVERA Technical Team",
    date: "2026-02-15",
    readTime: 8,
    tags: ["gear", "ep", "guide"],
    seoKeywords: { hy: "редукторное масло", ru: "редукторное масло", en: "gear oil guide" },
  },
  {
    id: "7",
    slug: "lubrication-mistakes",
    title: {
      hy: "5 ошибок при смазке оборудования",
      ru: "5 ошибок при смазке оборудования",
      en: "5 Lubrication Mistakes to Avoid",
    },
    excerpt: {
      hy: "Распространённые ошибки, которые сокращают срок службы оборудования",
      ru: "Распространённые ошибки, которые сокращают срок службы оборудования",
      en: "Common mistakes that shorten equipment life",
    },
    content: {
      hy: "Пересмазка, смешивание продуктов, неправильная вязкость — главные ошибки...",
      ru: "Пересмазка, смешивание продуктов, неправильная вязкость — главные ошибки.",
      en: "Over-greasing, mixing products, wrong viscosity — the main mistakes.",
    },
    image: "/images/blog/maintenance.jpg",
    category: "maintenance",
    author: "MONVERA Technical Team",
    date: "2026-02-10",
    readTime: 5,
    tags: ["mistakes", "maintenance"],
    seoKeywords: { hy: "ошибки смазка", ru: "ошибки смазка", en: "lubrication mistakes" },
  },
  {
    id: "8",
    slug: "energy-saving-through-lubrication",
    title: {
      hy: "Экономия энергии через правильную смазку",
      ru: "Экономия энергии через правильную смазку",
      en: "Energy Saving Through Lubrication",
    },
    excerpt: {
      hy: "Как правильная смазка снижает энергопотребление на 3-5%",
      ru: "Как правильная смазка снижает энергопотребление на 3-5%",
      en: "How proper lubrication reduces energy consumption by 3-5%",
    },
    content: {
      hy: "Синтетические смазки снижают трение и экономят электроэнергию...",
      ru: "Синтетические смазки снижают трение и экономят электроэнергию.",
      en: "Synthetic lubricants reduce friction and save electricity.",
    },
    image: "/images/blog/energy.jpg",
    category: "case-studies",
    author: "MONVERA Technical Team",
    date: "2026-02-05",
    readTime: 6,
    tags: ["energy", "savings", "synthetic"],
    seoKeywords: { hy: "экономия энергии смазка", ru: "экономия энергии смазка", en: "energy saving lubrication" },
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    slug: "mining-company-armenia",
    title: {
      hy: "Горнодобывающая компания — снижение простоев на 40%",
      ru: "Горнодобывающая компания — снижение простоев на 40%",
      en: "Mining Company — 40% Downtime Reduction",
    },
    industry: "mining",
    client: { hy: "Крупная горнодобывающая компания, Армения", ru: "Крупная горнодобывающая компания, Армения", en: "Major mining company, Armenia" },
    problem: {
      hy: "Частые поломки подшипников на конвейерах из-за неправильной смaзки",
      ru: "Частые поломки подшипников на конвейерах из-за неправильной смазки",
      en: "Frequent bearing failures on conveyors due to improper lubrication",
    },
    solution: {
      hy: "Внедрение COGELSA BEARING GREASE Lithium EP 2 и программы смазки",
      ru: "Внедрение COGELSA BEARING GREASE Lithium EP 2 и программы смазки",
      en: "Implementation of COGELSA BEARING GREASE Lithium EP 2 and lubrication program",
    },
    products: ["cogelsa-bearing-grease-lithium-ep-2"],
    results: {
      hy: "Снижение простоев на 40%, увеличение срока службы подшипников в 3 раза",
      ru: "Снижение простоев на 40%, увеличение срока службы подшипников в 3 раза",
      en: "40% downtime reduction, 3x bearing life extension",
    },
    savings: {
      hy: "Экономия €120,000 в год",
      ru: "Экономия €120,000 в год",
      en: "€120,000 savings per year",
    },
    image: "/images/cases/mining.jpg",
  },
  {
    id: "2",
    slug: "food-factory-yerevan",
    title: {
      hy: "Пищевой завод — переход на Food Grade",
      ru: "Пищевой завод — переход на Food Grade",
      en: "Food Factory — Transition to Food Grade",
    },
    industry: "food",
    client: { hy: "Пищевой завод, Ереван", ru: "Пищевой завод, Ереван", en: "Food factory, Yerevan" },
    problem: {
      hy: "Несоответствие HACCP требованиям по смазке",
      ru: "Несоответствие HACCP требованиям по смазке",
      en: "Non-compliance with HACCP lubrication requirements",
    },
    solution: {
      hy: "Полный переход на COGELSA FOODLUBE H1 продукты",
      ru: "Полный переход на COGELSA FOODLUBE H1 продукты",
      en: "Complete transition to COGELSA FOODLUBE H1 products",
    },
    products: ["cogelsa-foodlube-h1-32"],
    results: {
      hy: "Сертификация HACCP, нулевые инциденты",
      ru: "Сертификация HACCP, нулевые инциденты",
      en: "HACCP certification, zero incidents",
    },
    savings: { hy: "Избежание штрафов €50,000+", ru: "Избежание штрафов €50,000+", en: "Avoided fines €50,000+" },
    image: "/images/cases/food.jpg",
  },
  {
    id: "3",
    slug: "steel-plant-georgia",
    title: {
      hy: "Металлургический комбинат — оптимизация гидравлики",
      ru: "Металлургический комбинат — оптимизация гидравлики",
      en: "Steel Plant — Hydraulic Optimization",
    },
    industry: "steel",
    client: { hy: "Металлургический комбинат, регион", ru: "Металлургический комбинат, регион", en: "Steel plant, region" },
    problem: {
      hy: "Частая замена гидравлического масла каждые 3 месяца",
      ru: "Частая замена гидравлического масла каждые 3 месяца",
      en: "Frequent hydraulic oil changes every 3 months",
    },
    solution: {
      hy: "COGELSA HYDRAULIC HLP 46 + программа анализа масла",
      ru: "COGELSA HYDRAULIC HLP 46 + программа анализа масла",
      en: "COGELSA HYDRAULIC HLP 46 + oil analysis program",
    },
    products: ["cogelsa-hydraulic-hlp-46"],
    results: {
      hy: "Интервал замены увеличен до 12 месяцев",
      ru: "Интервал замены увеличен до 12 месяцев",
      en: "Change interval extended to 12 months",
    },
    savings: { hy: "Экономия €85,000 в год", ru: "Экономия €85,000 в год", en: "€85,000 savings per year" },
    image: "/images/cases/steel.jpg",
  },
];

export const certificates: Certificate[] = [
  {
    id: "iso-9001",
    name: { hy: "ISO 9001", ru: "ISO 9001", en: "ISO 9001" },
    description: {
      hy: "Система менеджмента качества",
      ru: "Система менеджмента качества",
      en: "Quality Management System",
    },
    image: "/certificates/iso-9001.svg",
    issuer: "COGELSA",
  },
  {
    id: "iso-14001",
    name: { hy: "ISO 14001", ru: "ISO 14001", en: "ISO 14001" },
    description: {
      hy: "Экологический менеджмент",
      ru: "Экологический менеджмент",
      en: "Environmental Management",
    },
    image: "/certificates/iso-14001.svg",
    issuer: "COGELSA",
  },
  {
    id: "nsf-h1",
    name: { hy: "NSF H1", ru: "NSF H1", en: "NSF H1" },
    description: {
      hy: "Food Grade сертификация",
      ru: "Food Grade сертификация",
      en: "Food Grade Certification",
    },
    image: "/certificates/nsf-h1.svg",
    issuer: "NSF International",
  },
  {
    id: "halal",
    name: { hy: "Halal", ru: "Halal", en: "Halal" },
    description: {
      hy: "Халяль сертификация",
      ru: "Халяль сертификация",
      en: "Halal Certification",
    },
    image: "/certificates/halal.svg",
    issuer: "Halal Authority",
  },
  {
    id: "kosher",
    name: { hy: "Kosher", ru: "Kosher", en: "Kosher" },
    description: {
      hy: "Кошерная сертификация",
      ru: "Кошерная сертификация",
      en: "Kosher Certification",
    },
    image: "/certificates/kosher.svg",
    issuer: "Kosher Authority",
  },
];

export const services: Service[] = [
  {
    id: "consulting",
    slug: "technical-consulting",
    name: { hy: "Տեխնիկական խորհրդատվություն", ru: "Техническое консультирование", en: "Technical Consulting" },
    description: {
      hy: "Օպտիմալ քսանյութերի ընտրության մասին փորձագիտական օգնություն",
      ru: "Экспертная помощь в выборе оптимальных смазочных материалов",
      en: "Expert assistance in selecting optimal lubricants",
    },
    icon: "MessageSquare",
    features: [
      { hy: "Սարքավորումների վերլուծություն", ru: "Анализ оборудования", en: "Equipment analysis" },
      { hy: "Ապրանքների խորհուրդներ", ru: "Рекомендации продуктов", en: "Product recommendations" },
    ],
  },
  {
    id: "audit",
    slug: "lubrication-audit",
    name: { hy: "Քսման աուդիտ", ru: "Аудит смазки", en: "Lubrication Audit" },
    description: {
      hy: "Ձեր ձեռնարկության քսման համակարգերի համակիրման աուդիտ",
      ru: "Комплексный аудит систем смазки на вашем предприятии",
      en: "Comprehensive lubrication system audit at your facility",
    },
    icon: "ClipboardCheck",
    features: [
      { hy: "Սարքավորումների շրջագայություն", ru: "Обход оборудования", en: "Equipment walkthrough" },
      { hy: "Հաշվետվություն խորհուրդներով", ru: "Отчёт с рекомендациями", en: "Report with recommendations" },
    ],
  },
  {
    id: "analysis",
    slug: "oil-analysis",
    name: { hy: "Յուղի վերլուծություն", ru: "Анализ масла", en: "Oil Analysis" },
    description: {
      hy: "Քսանյութերի վիճակի լաբորատոր վերլուծություն",
      ru: "Лабораторный анализ состояния смазочных материалов",
      en: "Laboratory analysis of lubricant condition",
    },
    icon: "FlaskConical",
    features: [
      { hy: "Սպեկտրային վերլուծություն", ru: "Спектральный анализ", en: "Spectral analysis" },
      { hy: "Խաւտրանցումների կանխատեսում", ru: "Прогнозирование отказов", en: "Failure prediction" },
    ],
  },
  {
    id: "mapping",
    slug: "lubrication-mapping",
    name: { hy: "Քսման քարտեզագրում", ru: "Картирование смазки", en: "Lubrication Mapping" },
    description: {
      hy: "Բոլոր սարքավորումների քսման քարտեզի ստեղծում",
      ru: "Создание карты смазки всего оборудования",
      en: "Creating lubrication map for all equipment",
    },
    icon: "Map",
    features: [
      { hy: "QR կոդեր սարքավորումների վրա", ru: "QR-коды на оборудовании", en: "QR codes on equipment" },
    ],
  },
  {
    id: "inspection",
    slug: "equipment-inspection",
    name: { hy: "Սարքավորումների ստուգում", ru: "Инспекция оборудования", en: "Equipment Inspection" },
    description: {
      hy: "Արդյունաբերական սարքավորումների մասնագիտական ստուգում",
      ru: "Профессиональная инспекция промышленного оборудования",
      en: "Professional industrial equipment inspection",
    },
    icon: "Search",
    features: [],
  },
  {
    id: "training",
    slug: "training",
    name: { hy: "Ուսուցում", ru: "Обучение", en: "Training" },
    description: {
      hy: "Անձնակազմի ուսուցում քսման և սպասարկման կանոնների մասին",
      ru: "Обучение персонала правилам смазки и обслуживания",
      en: "Staff training on lubrication and maintenance",
    },
    icon: "GraduationCap",
    features: [],
  },
  {
    id: "maintenance",
    slug: "industrial-maintenance",
    name: { hy: "Արդյունաբերական սպասարկում", ru: "Промышленное обслуживание", en: "Industrial Maintenance" },
    description: {
      hy: "Արդյունաբերական սարքավորումների համակիրման սպասարկում",
      ru: "Комплексное обслуживание промышленного оборудования",
      en: "Comprehensive industrial equipment maintenance",
    },
    icon: "Wrench",
    features: [],
  },
  {
    id: "custom",
    slug: "custom-solutions",
    name: { hy: "Անհատական լուծումներ", ru: "Индивидуальные решения", en: "Custom Lubrication Solutions" },
    description: {
      hy: "Անհատական քսման լուծումների մշակում",
      ru: "Разработка индивидуальных смазочных решений",
      en: "Development of custom lubrication solutions",
    },
    icon: "Lightbulb",
    features: [],
  },
];

export function getBlogBySlug(slug: string) {
  return blogPosts.find((b) => b.slug === slug);
}

export function getAllBlogSlugs() {
  return blogPosts.map((b) => b.slug);
}

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

export function getAllCaseStudySlugs() {
  return caseStudies.map((c) => c.slug);
}

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
