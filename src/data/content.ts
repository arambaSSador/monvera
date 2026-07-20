import type { CaseStudy, Certificate, Service } from "./types";

export { blogPosts, getBlogBySlug, getAllBlogSlugs } from "./blogPosts";

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

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

export function getAllCaseStudySlugs() {
  return caseStudies.map((c) => c.slug);
}

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
