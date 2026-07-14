import type { Product } from "./types";

const baseProducts: Omit<Product, "id" | "slug">[] = [
  {
    name: { hy: "COGELSA HYDRAULIC HLP 46", ru: "COGELSA HYDRAULIC HLP 46", en: "COGELSA HYDRAULIC HLP 46" },
    category: "industrial-oils",
    subcategory: "hydraulic-oils",
    description: {
      hy: "Բարձրորակ гидравлическое масло ISO VG 46 для промышленных гидравлических систем",
      ru: "Высококачественное гидравлическое масло ISO VG 46 для промышленных гидравлических систем",
      en: "High-quality hydraulic oil ISO VG 46 for industrial hydraulic systems",
    },
    shortDescription: {
      hy: "Премиум гидравлическое масло для тяжёлых условий эксплуатации",
      ru: "Премиум гидравлическое масло для тяжёлых условий эксплуатации",
      en: "Premium hydraulic oil for heavy-duty operating conditions",
    },
    image: "/images/products/hydraulic-hlp-46.jpg",
    gallery: [],
    applications: [
      { hy: "Гидравлические системы", ru: "Гидравлические системы", en: "Hydraulic systems" },
      { hy: "Станки с ЧПУ", ru: "Станки с ЧПУ", en: "CNC machines" },
      { hy: "Прессы", ru: "Прессы", en: "Presses" },
    ],
    advantages: [
      { hy: "Отличная защита от износа", ru: "Отличная защита от износа", en: "Excellent wear protection" },
      { hy: "Высокая термостабильность", ru: "Высокая термостабильность", en: "High thermal stability" },
      { hy: "Длительный срок службы", ru: "Длительный срок службы", en: "Extended service life" },
    ],
    industries: ["mining", "steel", "construction", "automotive"],
    equipment: ["hydraulic-systems", "presses"],
    specifications: {
      isoVg: "46",
      baseOil: { hy: "Минeральное", ru: "Минеральное", en: "Mineral" },
      temperature: "-20°C to +80°C",
      viscosity: "46 cSt @ 40°C",
    },
    certificates: ["iso-9001", "iso-14001"],
    foodGrade: false,
    nsfH1: false,
    synthetic: false,
    mineral: true,
    tags: ["hydraulic", "hlp", "iso-vg-46"],
  },
  {
    name: { hy: "COGELSA GEAR OIL EP 220", ru: "COGELSA GEAR OIL EP 220", en: "COGELSA GEAR OIL EP 220" },
    category: "industrial-oils",
    subcategory: "gear-oils",
    description: {
      hy: "Редукторное масло с противозадирными присадками для тяжёлых нагрузок",
      ru: "Редукторное масло с противозадирными присадками для тяжёлых нагрузок",
      en: "Gear oil with EP additives for heavy loads",
    },
    shortDescription: {
      hy: "Промышленное редукторное масло ISO VG 220",
      ru: "Промышленное редукторное масло ISO VG 220",
      en: "Industrial gear oil ISO VG 220",
    },
    image: "/images/products/gear-oil.jpg",
    gallery: [],
    applications: [
      { hy: "Редукторы", ru: "Редукторы", en: "Gearboxes" },
      { hy: "Открытые зубчатые передачи", ru: "Открытые зубчатые передачи", en: "Open gears" },
    ],
    advantages: [
      { hy: "EP защита", ru: "EP защита", en: "EP protection" },
      { hy: "Снижение шума", ru: "Снижение шума", en: "Noise reduction" },
    ],
    industries: ["mining", "cement", "steel", "energy"],
    equipment: ["gearboxes", "open-gears"],
    specifications: {
      isoVg: "220",
      baseOil: { hy: "Минeральное", ru: "Минеральное", en: "Mineral" },
      temperature: "-10°C to +100°C",
    },
    certificates: ["iso-9001"],
    foodGrade: false,
    nsfH1: false,
    synthetic: false,
    mineral: true,
    tags: ["gear", "ep", "iso-vg-220"],
  },
  {
    name: { hy: "COGELSA FOODLUBE H1 32", ru: "COGELSA FOODLUBE H1 32", en: "COGELSA FOODLUBE H1 32" },
    category: "industrial-oils",
    subcategory: "food-grade-oils",
    description: {
      hy: "Food Grade масло NSF H1 для пищевой промышленности",
      ru: "Food Grade масло NSF H1 для пищевой промышленности",
      en: "Food Grade NSF H1 oil for food industry",
    },
    shortDescription: {
      hy: "Безопасное масло для контакта с пищевыми продуктами",
      ru: "Безопасное масло для контакта с пищевыми продуктами",
      en: "Safe oil for incidental food contact",
    },
    image: "/images/products/food-grade.jpg",
    gallery: [],
    applications: [
      { hy: "Пищевое производство", ru: "Пищевое производство", en: "Food production" },
      { hy: "Напитки", ru: "Напитки", en: "Beverages" },
      { hy: "Упаковка", ru: "Упаковка", en: "Packaging" },
    ],
    advantages: [
      { hy: "NSF H1 сертификат", ru: "NSF H1 сертификат", en: "NSF H1 certified" },
      { hy: "Halal/Kosher", ru: "Halal/Kosher", en: "Halal/Kosher" },
      { hy: "Без запаха и вкуса", ru: "Без запаха и вкуса", en: "Odorless and tasteless" },
    ],
    industries: ["food", "packaging", "beverage"],
    equipment: ["food-machines", "mixers", "conveyors"],
    specifications: {
      isoVg: "32",
      baseOil: { hy: "Синтетическое", ru: "Синтетическое", en: "Synthetic" },
      temperature: "-30°C to +150°C",
    },
    certificates: ["iso-9001", "nsf-h1", "halal", "kosher"],
    foodGrade: true,
    nsfH1: true,
    synthetic: true,
    mineral: false,
    tags: ["food-grade", "nsf-h1", "h1"],
  },
  {
    name: { hy: "COGELSA BEARING GREASE Lithium EP 2", ru: "COGELSA BEARING GREASE Lithium EP 2", en: "COGELSA BEARING GREASE Lithium EP 2" },
    category: "industrial-greases",
    subcategory: "lithium-greases",
    description: {
      hy: "Литиевая смазка NLGI 2 для подшипников общего назначения",
      ru: "Литиевая смазка NLGI 2 для подшипников общего назначения",
      en: "Lithium grease NLGI 2 for general purpose bearings",
    },
    shortDescription: {
      hy: "Универсальная смазка для подшипников качения",
      ru: "Универсальная смазка для подшипников качения",
      en: "Universal grease for rolling bearings",
    },
    image: "/images/products/bearing-grease.jpg",
    gallery: [],
    applications: [
      { hy: "Подшипники", ru: "Подшипники", en: "Bearings" },
      { hy: "Электродвигатели", ru: "Электродвигатели", en: "Electric motors" },
    ],
    advantages: [
      { hy: "Водостойкость", ru: "Водостойкость", en: "Water resistance" },
      { hy: "EP свойства", ru: "EP свойства", en: "EP properties" },
    ],
    industries: ["mining", "steel", "automotive", "energy"],
    equipment: ["bearings", "electric-motors"],
    specifications: {
      nlgi: "2",
      baseOil: { hy: "Минeральное", ru: "Минеральное", en: "Mineral" },
      temperature: "-25°C to +130°C",
    },
    certificates: ["iso-9001"],
    foodGrade: false,
    nsfH1: false,
    synthetic: false,
    mineral: true,
    tags: ["grease", "lithium", "nlgi-2", "bearing"],
  },
  {
    name: { hy: "COGELSA COMPRESSOR OIL PAO 68", ru: "COGELSA COMPRESSOR OIL PAO 68", en: "COGELSA COMPRESSOR OIL PAO 68" },
    category: "industrial-oils",
    subcategory: "compressor-oils",
    description: {
      hy: "Синтетическое компрессорное масло на основе PAO",
      ru: "Синтетическое компрессорное масло на основе PAO",
      en: "Synthetic PAO-based compressor oil",
    },
    shortDescription: {
      hy: "Длительный срок службы для винтовых компрессоров",
      ru: "Длительный срок службы для винтовых компрессоров",
      en: "Extended life for screw compressors",
    },
    image: "/images/products/compressor-oil.jpg",
    gallery: [],
    applications: [
      { hy: "Винтовые компрессоры", ru: "Винтовые компрессоры", en: "Screw compressors" },
      { hy: "Поршневые компрессоры", ru: "Поршневые компрессоры", en: "Reciprocating compressors" },
    ],
    advantages: [
      { hy: "8000+ часов работы", ru: "8000+ часов работы", en: "8000+ operating hours" },
      { hy: "Низкое образование отложений", ru: "Низкое образование отложений", en: "Low deposit formation" },
    ],
    industries: ["energy", "automotive", "packaging"],
    equipment: ["compressors"],
    specifications: {
      isoVg: "68",
      baseOil: { hy: "PAO синтетика", ru: "PAO синтетика", en: "PAO synthetic" },
      temperature: "-40°C to +120°C",
    },
    certificates: ["iso-9001", "iso-14001"],
    foodGrade: false,
    nsfH1: false,
    synthetic: true,
    mineral: false,
    tags: ["compressor", "pao", "synthetic"],
  },
];

const isoVgVariants = ["10", "15", "22", "32", "46", "68", "100", "150", "220", "320", "460", "680"];
const nlgiVariants = ["00", "0", "1", "2", "3"];
const productTypes = [
  { prefix: "HYDRAULIC HLP", sub: "hydraulic-oils", cat: "industrial-oils", type: "oil" },
  { prefix: "HYDRAULIC HVLP", sub: "hydraulic-oils", cat: "industrial-oils", type: "oil" },
  { prefix: "GEAR OIL EP", sub: "gear-oils", cat: "industrial-oils", type: "oil" },
  { prefix: "GEAR OIL SYN", sub: "gear-oils", cat: "industrial-oils", type: "oil" },
  { prefix: "COMPRESSOR OIL", sub: "compressor-oils", cat: "industrial-oils", type: "oil" },
  { prefix: "VACUUM OIL", sub: "vacuum-oils", cat: "industrial-oils", type: "oil" },
  { prefix: "CHAIN OIL", sub: "chain-oils", cat: "industrial-oils", type: "oil" },
  { prefix: "HEAT TRANSFER", sub: "heat-transfer-fluids", cat: "industrial-oils", type: "oil" },
  { prefix: "BEARING GREASE Lithium", sub: "lithium-greases", cat: "industrial-greases", type: "grease" },
  { prefix: "BEARING GREASE Calcium", sub: "calcium-greases", cat: "industrial-greases", type: "grease" },
  { prefix: "BEARING GREASE Aluminium", sub: "aluminium-complex-greases", cat: "industrial-greases", type: "grease" },
  { prefix: "SILICONE GREASE", sub: "silicone-greases", cat: "industrial-greases", type: "grease" },
  { prefix: "PTFE GREASE", sub: "ptfe-greases", cat: "industrial-greases", type: "grease" },
  { prefix: "COPPER PASTE", sub: "copper-pastes", cat: "industrial-greases", type: "grease" },
  { prefix: "FOODLUBE H1", sub: "food-grade-oils", cat: "industrial-oils", type: "oil", food: true },
  { prefix: "FOODLUBE GREASE H1", sub: "lithium-greases", cat: "industrial-greases", type: "grease", food: true },
  { prefix: "BIO HYDRAULIC", sub: "biodegradable-oils", cat: "industrial-oils", type: "oil", bio: true },
];

function generateProducts(): Product[] {
  const products: Product[] = [];
  let id = 1;
  let catalogNum = 1;

  for (const base of baseProducts) {
    const slug = base.name.en.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "");
    products.push({ ...base, id: `prod-${id++}`, slug });
  }

  for (const pt of productTypes) {
    const variants = pt.type === "oil" ? isoVgVariants : nlgiVariants;
    for (const v of variants) {
      const name = `COGELSA ${pt.prefix} ${v}`;
      const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "");
      if (products.some((p) => p.slug === slug)) continue;

      const image = `/images/products/catalog/${String(catalogNum++).padStart(3, "0")}.jpg`;

      products.push({
        id: `prod-${id++}`,
        slug,
        name: { hy: name, ru: name, en: name },
        category: pt.cat,
        subcategory: pt.sub,
        description: {
          hy: `${name} — COGELSA промышленный продукт европейского качества`,
          ru: `${name} — промышленный продукт COGELSA европейского качества`,
          en: `${name} — COGELSA industrial product of European quality`,
        },
        shortDescription: {
          hy: `Профессиональный продукт COGELSA ${pt.type === "oil" ? "ISO VG " + v : "NLGI " + v}`,
          ru: `Профессиональный продукт COGELSA ${pt.type === "oil" ? "ISO VG " + v : "NLGI " + v}`,
          en: `Professional COGELSA product ${pt.type === "oil" ? "ISO VG " + v : "NLGI " + v}`,
        },
        image,
        gallery: [],
        applications: [
          { hy: "Промышленное оборудование", ru: "Промышленное оборудование", en: "Industrial equipment" },
        ],
        advantages: [
          { hy: "Европейское качество", ru: "Европейское качество", en: "European quality" },
          { hy: "Длительный срок службы", ru: "Длительный срок службы", en: "Extended service life" },
        ],
        industries: ["mining", "steel", "cement", "food", "automotive", "energy"],
        equipment: ["bearings", "gearboxes", "hydraulic-systems"],
        specifications: {
          ...(pt.type === "oil" ? { isoVg: v } : { nlgi: v }),
          baseOil: {
            hy: pt.food ? "Синтетическое" : "Минeральное",
            ru: pt.food ? "Синтетическое" : "Минеральное",
            en: pt.food ? "Synthetic" : "Mineral",
          },
          temperature: pt.food ? "-30°C to +150°C" : "-20°C to +120°C",
        },
        certificates: pt.food ? ["iso-9001", "nsf-h1", "halal"] : ["iso-9001"],
        foodGrade: !!pt.food,
        nsfH1: !!pt.food,
        synthetic: !!(pt.food || pt.prefix.includes("SYN") || pt.prefix.includes("PAO")),
        mineral: !pt.food && !pt.prefix.includes("SYN"),
        tags: [pt.sub, pt.type === "oil" ? `iso-vg-${v}` : `nlgi-${v}`],
      });
    }
  }

  return products;
}

export const products: Product[] = generateProducts();

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductsBySubcategory(subcategory: string): Product[] {
  return products.filter((p) => p.subcategory === subcategory);
}

export function getProductsByIndustry(industry: string): Product[] {
  return products.filter((p) => p.industries.includes(industry));
}

export function getProductsByEquipment(equipment: string): Product[] {
  return products.filter((p) => p.equipment.includes(equipment));
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.id !== product.id && p.subcategory === product.subcategory)
    .slice(0, limit);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.en.toLowerCase().includes(q) ||
      p.name.ru.toLowerCase().includes(q) ||
      p.slug.includes(q) ||
      p.tags.some((t) => t.includes(q))
  );
}

export function filterProducts(filters: {
  industry?: string;
  equipment?: string;
  category?: string;
  subcategory?: string;
  foodGrade?: boolean;
  synthetic?: boolean;
  isoVg?: string;
  nlgi?: string;
}): Product[] {
  return products.filter((p) => {
    if (filters.industry && !p.industries.includes(filters.industry)) return false;
    if (filters.equipment && !p.equipment.includes(filters.equipment)) return false;
    if (filters.category && p.category !== filters.category) return false;
    if (filters.subcategory && p.subcategory !== filters.subcategory) return false;
    if (filters.foodGrade !== undefined && p.foodGrade !== filters.foodGrade) return false;
    if (filters.synthetic !== undefined && p.synthetic !== filters.synthetic) return false;
    if (filters.isoVg && p.specifications.isoVg !== filters.isoVg) return false;
    if (filters.nlgi && p.specifications.nlgi !== filters.nlgi) return false;
    return true;
  });
}

export function recommendProducts(criteria: {
  industry?: string;
  equipment?: string;
  foodContact?: boolean;
  temperature?: string;
  load?: string;
}): Product[] {
  let results = [...products];

  if (criteria.foodContact) {
    results = results.filter((p) => p.foodGrade);
  }
  if (criteria.industry) {
    results = results.filter((p) => p.industries.includes(criteria.industry!));
  }
  if (criteria.equipment) {
    results = results.filter((p) => p.equipment.includes(criteria.equipment!));
  }

  return results.slice(0, 6);
}
