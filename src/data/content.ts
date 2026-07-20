import type { BlogPost, CaseStudy, Certificate, Service } from "./types";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "how-to-choose-industrial-lubricant",
    title: {
      hy: "Ինչպես ընտրել արդյունաբերական քսանյութ",
      ru: "Как выбрать промышленную смазку",
      en: "How to Choose Industrial Lubricant",
    },
    excerpt: {
      hy: "Ամբողջական ուղեցույց՝ ձեր սարքավորման համար ճիշտ քսանյութ ընտրելու համար",
      ru: "Полное руководство по выбору правильной смазки для вашего оборудования",
      en: "Complete guide to selecting the right lubricant for your equipment",
    },
    content: {
      hy: "Արդյունաբերական քսանյութի ընտրությունը կրիտիկական որոշում է սարքավորումների հուսալիության համար։ Հաշվի առնեք բեռնվածությունը, ջերմաստիճանը, արագությունը և շահագործման պայմանները։",
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
      hy: "քսանյութի ընտրություն, արդյունաբերական քսանյութ",
      ru: "выбор смазки, промышленная смазка",
      en: "lubricant selection, industrial lubricant",
    },
  },
  {
    id: "2",
    slug: "mineral-vs-synthetic-oils",
    title: {
      hy: "Միներալային ընդդեմ սինթետիկ յուղերի",
      ru: "Минеральные vs синтетические масла",
      en: "Mineral vs Synthetic Oils",
    },
    excerpt: {
      hy: "Միներալային և սինթետիկ յուղերի տարբերությունները",
      ru: "Различия между минеральными и синтетическими маслами",
      en: "Differences between mineral and synthetic oils",
    },
    content: {
      hy: "Սինթետիկ յուղերը ապահովում են ավելի երկար ծառայության ժամկետ և լավ պաշտպանություն ծայրահեղ ջերմաստիճաններում։",
      ru: "Синтетические масла обеспечивают более длительный срок службы и лучшую защиту при экстремальных температурах.",
      en: "Synthetic oils provide longer service life and better protection at extreme temperatures.",
    },
    image: "/images/blog/synthetic-oils.jpg",
    category: "guides",
    author: "MONVERA Technical Team",
    date: "2026-03-10",
    readTime: 6,
    tags: ["synthetic", "mineral", "comparison"],
    seoKeywords: {
      hy: "սինթետիկ յուղ, միներալային յուղ",
      ru: "синтетика минерал",
      en: "synthetic mineral oil",
    },
  },
  {
    id: "3",
    slug: "increase-bearing-life",
    title: {
      hy: "Ինչպես երկարացնել առանցքակալների ծառայության ժամկետը",
      ru: "Как увеличить срок службы подшипников",
      en: "How to Increase Bearing Life",
    },
    excerpt: {
      hy: "Գործնական խորհուրդներ առանցքակալների կյանքը երկարացնելու համար",
      ru: "Практические советы по продлению жизни подшипников",
      en: "Practical tips to extend bearing life",
    },
    content: {
      hy: "Ճիշտ քսումը կարող է առանցքակալների ծառայության ժամկետը մեծացնել 300%-ով։ Օգտագործեք NLGI 2 քսուք EP հավելումներով։",
      ru: "Правильная смазка может увеличить срок службы подшипников на 300%. Используйте NLGI 2 смазки с EP присадками.",
      en: "Proper lubrication can extend bearing life by 300%. Use NLGI 2 greases with EP additives.",
    },
    image: "/images/blog/bearings.jpg",
    category: "maintenance",
    author: "MONVERA Technical Team",
    date: "2026-03-05",
    readTime: 7,
    tags: ["bearings", "maintenance", "grease"],
    seoKeywords: {
      hy: "առանցքակալներ, քսում",
      ru: "подшипники смазка",
      en: "bearing lubrication",
    },
  },
  {
    id: "4",
    slug: "food-grade-lubricants-explained",
    title: {
      hy: "Food Grade քսանյութեր. ամբողջական ուղեցույց",
      ru: "Food Grade смазки: полное руководство",
      en: "Food Grade Lubricants Explained",
    },
    excerpt: {
      hy: "Ամեն ինչ NSF H1 քսանյութերի մասին սննդի արդյունաբերության համար",
      ru: "Всё о NSF H1 смазках для пищевой промышленности",
      en: "Everything about NSF H1 lubricants for food industry",
    },
    content: {
      hy: "NSF H1 սերտիֆիկացումը երաշխավորում է անվտանգությունը սննդամթերքի հետ պատահական կապի դեպքում։",
      ru: "NSF H1 сертификация гарантирует безопасность при случайном контакте с пищей.",
      en: "NSF H1 certification ensures safety for incidental food contact.",
    },
    image: "/images/blog/food-grade.jpg",
    category: "food",
    author: "MONVERA Technical Team",
    date: "2026-02-28",
    readTime: 10,
    tags: ["food-grade", "nsf-h1", "food"],
    seoKeywords: {
      hy: "food grade, nsf h1",
      ru: "food grade nsf h1",
      en: "food grade nsf h1",
    },
  },
  {
    id: "5",
    slug: "hydraulic-oil-selection",
    title: {
      hy: "Հիդրավլիկ յուղի ընտրություն",
      ru: "Выбор гидравлического масла",
      en: "Hydraulic Oil Selection Guide",
    },
    excerpt: {
      hy: "Ինչպես ընտրել ISO VG ձեր հիդրավլիկ համակարգի համար",
      ru: "Как выбрать ISO VG для вашей гидравлической системы",
      en: "How to select ISO VG for your hydraulic system",
    },
    content: {
      hy: "ISO VG 46-ը ամենատարածված հավակն է արդյունաբերական հիդրավլիկ համակարգերի համար։",
      ru: "ISO VG 46 — наиболее распространённая вязкость для промышленных гидравлических систем.",
      en: "ISO VG 46 is the most common viscosity for industrial hydraulic systems.",
    },
    image: "/images/blog/hydraulic.jpg",
    category: "guides",
    author: "MONVERA Technical Team",
    date: "2026-02-20",
    readTime: 9,
    tags: ["hydraulic", "iso-vg", "selection"],
    seoKeywords: {
      hy: "հիդրավլիկ յուղ",
      ru: "гидравлическое масло",
      en: "hydraulic oil selection",
    },
  },
  {
    id: "6",
    slug: "gear-oil-guide",
    title: {
      hy: "Ռեդուկտորային յուղերի ուղեցույց",
      ru: "Руководство по редукторным маслам",
      en: "Gear Oil Guide",
    },
    excerpt: {
      hy: "EP, սինթետիկա, մածուցիկություն — ամեն ինչ ռեդուկտորային յուղերի մասին",
      ru: "EP, синтетика, вязкость — всё о редукторных маслах",
      en: "EP, synthetic, viscosity — everything about gear oils",
    },
    content: {
      hy: "EP հավելումներով ռեդուկտորային յուղերը պաշտպանում են ատամները բարձր բեռնվածությունների ժամանակ։",
      ru: "Редукторные масла с EP присадками защищают зубья от задиров при высоких нагрузках.",
      en: "EP gear oils protect teeth from scoring under high loads.",
    },
    image: "/images/blog/gears.jpg",
    category: "guides",
    author: "MONVERA Technical Team",
    date: "2026-02-15",
    readTime: 8,
    tags: ["gear", "ep", "guide"],
    seoKeywords: {
      hy: "ռեդուկտորային յուղ",
      ru: "редукторное масло",
      en: "gear oil guide",
    },
  },
  {
    id: "7",
    slug: "lubrication-mistakes",
    title: {
      hy: "5 սխալ սարքավորումների քսման ժամանակ",
      ru: "5 ошибок при смазке оборудования",
      en: "5 Lubrication Mistakes to Avoid",
    },
    excerpt: {
      hy: "Ընդհանուր սխալներ, որոնք կրճատում են սարքավորումների ծառայության ժամկետը",
      ru: "Распространённые ошибки, которые сокращают срок службы оборудования",
      en: "Common mistakes that shorten equipment life",
    },
    content: {
      hy: "Ավելցուկային քսում, արտադրանքների խառնում, սխալ մածուցիկություն — հիմնական սխալներն են։",
      ru: "Пересмазка, смешивание продуктов, неправильная вязкость — главные ошибки.",
      en: "Over-greasing, mixing products, wrong viscosity — the main mistakes.",
    },
    image: "/images/blog/maintenance.jpg",
    category: "maintenance",
    author: "MONVERA Technical Team",
    date: "2026-02-10",
    readTime: 5,
    tags: ["mistakes", "maintenance"],
    seoKeywords: {
      hy: "քսման սխալներ",
      ru: "ошибки смазка",
      en: "lubrication mistakes",
    },
  },
  {
    id: "8",
    slug: "energy-saving-through-lubrication",
    title: {
      hy: "Էներգիայի խնայողություն ճիշտ քսման միջոցով",
      ru: "Экономия энергии через правильную смазку",
      en: "Energy Saving Through Lubrication",
    },
    excerpt: {
      hy: "Ինչպես ճիշտ քսումը նվազեցնում է էներգիայի սպառումը 3-5%-ով",
      ru: "Как правильная смазка снижает энергопотребление на 3-5%",
      en: "How proper lubrication reduces energy consumption by 3-5%",
    },
    content: {
      hy: "Սինթետիկ քսանյութերը նվազեցնում են շփումը և խնայում էլեկտրաէներգիա։",
      ru: "Синтетические смазки снижают трение и экономят электроэнергию.",
      en: "Synthetic lubricants reduce friction and save electricity.",
    },
    image: "/images/blog/energy.jpg",
    category: "case-studies",
    author: "MONVERA Technical Team",
    date: "2026-02-05",
    readTime: 6,
    tags: ["energy", "savings", "synthetic"],
    seoKeywords: {
      hy: "էներգիայի խնայողություն, քսում",
      ru: "экономия энергии смазка",
      en: "energy saving lubrication",
    },
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    slug: "mining-company-armenia",
    title: {
      hy: "Հանքարդյունաբերական ընկերություն — պարապուրդների 40%-ով կրճատում",
      ru: "Горнодобывающая компания — снижение простоев на 40%",
      en: "Mining Company — 40% Downtime Reduction",
    },
    industry: "mining",
    client: {
      hy: "Հայաստանի խոշոր հանքարդյունաբերական ընկերություն",
      ru: "Крупная горнодобывающая компания, Армения",
      en: "Major mining company, Armenia",
    },
    problem: {
      hy: "Կոնվեյերների վրա առանցքակալների հաճախակի խափանումներ՝ ոչ պատշաճ քսման պատճառով",
      ru: "Частые поломки подшипников на конвейерах из-за неправильной смазки",
      en: "Frequent bearing failures on conveyors due to improper lubrication",
    },
    solution: {
      hy: "COGELSA BEARING GREASE Lithium EP 2-ի և քսման ծրագրի ներդրում",
      ru: "Внедрение COGELSA BEARING GREASE Lithium EP 2 и программы смазки",
      en: "Implementation of COGELSA BEARING GREASE Lithium EP 2 and lubrication program",
    },
    products: ["cogelsa-bearing-grease-lithium-ep-2"],
    results: {
      hy: "Պարապուրդների 40%-ով կրճատում և առանցքակալների ծառայության ժամկետի 3 անգամ ավելացում",
      ru: "Снижение простоев на 40%, увеличение срока службы подшипников в 3 раза",
      en: "40% downtime reduction, 3x bearing life extension",
    },
    savings: {
      hy: "Տարեկան €120,000 խնայողություն",
      ru: "Экономия €120,000 в год",
      en: "€120,000 savings per year",
    },
    image: "/images/cases/mining.jpg",
  },
  {
    id: "2",
    slug: "food-factory-yerevan",
    title: {
      hy: "Սննդի գործարան — անցում Food Grade-ին",
      ru: "Пищевой завод — переход на Food Grade",
      en: "Food Factory — Transition to Food Grade",
    },
    industry: "food",
    client: {
      hy: "Երևանի սննդի գործարան",
      ru: "Пищевой завод, Ереван",
      en: "Food factory, Yerevan",
    },
    problem: {
      hy: "Քսման մասով HACCP պահանջներին չհամապատասխանելը",
      ru: "Несоответствие HACCP требованиям по смазке",
      en: "Non-compliance with HACCP lubrication requirements",
    },
    solution: {
      hy: "Լիարժեք անցում COGELSA FOODLUBE H1 արտադրանքներին",
      ru: "Полный переход на COGELSA FOODLUBE H1 продукты",
      en: "Complete transition to COGELSA FOODLUBE H1 products",
    },
    products: ["cogelsa-foodlube-h1-32"],
    results: {
      hy: "HACCP սերտիֆիկացում և զրոյական միջադեպեր",
      ru: "Сертификация HACCP, нулевые инциденты",
      en: "HACCP certification, zero incidents",
    },
    savings: {
      hy: "Տուգանքներից խուսափած՝ €50,000+",
      ru: "Избежание штрафов €50,000+",
      en: "Avoided fines €50,000+",
    },
    image: "/images/cases/food.jpg",
  },
  {
    id: "3",
    slug: "steel-plant-georgia",
    title: {
      hy: "Մետալուրգիական կոմբինատ — հիդրավլիկայի օպտիմիզացում",
      ru: "Металлургический комбинат — оптимизация гидравлики",
      en: "Steel Plant — Hydraulic Optimization",
    },
    industry: "steel",
    client: {
      hy: "Մետալուրգիական կոմբինատ՝ տարածաշրջան",
      ru: "Металлургический комбинат, регион",
      en: "Steel plant, region",
    },
    problem: {
      hy: "Հիդրավլիկ յուղի հաճախակի փոխարինում՝ յուրաքանչյուր 3 ամիսը մեկ",
      ru: "Частая замена гидравлического масла каждые 3 месяца",
      en: "Frequent hydraulic oil changes every 3 months",
    },
    solution: {
      hy: "COGELSA HYDRAULIC HLP 46 + յուղի վերլուծության ծրագիր",
      ru: "COGELSA HYDRAULIC HLP 46 + программа анализа масла",
      en: "COGELSA HYDRAULIC HLP 46 + oil analysis program",
    },
    products: ["cogelsa-hydraulic-hlp-46"],
    results: {
      hy: "Փոխարինման ընդմիջումը մեծացվել է մինչև 12 ամիս",
      ru: "Интервал замены увеличен до 12 месяцев",
      en: "Change interval extended to 12 months",
    },
    savings: {
      hy: "Տարեկան €85,000 խնայողություն",
      ru: "Экономия €85,000 в год",
      en: "€85,000 savings per year",
    },
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
