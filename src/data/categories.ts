import type { ProductCategory } from "./types";

export const productCategories: ProductCategory[] = [
  {
    id: "industrial-oils",
    slug: "industrial-oils",
    name: {
      hy: "Industrial Oils",
      ru: "Промышленные масла",
      en: "Industrial Oils",
    },
    description: {
      hy: "High-quality industrial oils for all equipment types",
      ru: "Высококачественные промышленные масла для всех типов оборудования",
      en: "High-quality industrial oils for all equipment types",
    },
    image: "/images/categories/oils.jpg",
    subcategories: [
      {
        id: "hydraulic",
        slug: "hydraulic-oils",
        name: {
          hy: "Hydraulic Oils",
          ru: "Гидравлические масла",
          en: "Hydraulic Oils",
        },
      },
      {
        id: "gear",
        slug: "gear-oils",
        name: { hy: "Gear Oils", ru: "Редукторные масла", en: "Gear Oils" },
      },
      {
        id: "compressor",
        slug: "compressor-oils",
        name: {
          hy: "Compressor Oils",
          ru: "Компрессорные масла",
          en: "Compressor Oils",
        },
      },
      {
        id: "vacuum",
        slug: "vacuum-oils",
        name: { hy: "Vacuum Oils", ru: "Вакуумные масла", en: "Vacuum Oils" },
      },
      {
        id: "food-grade",
        slug: "food-grade-oils",
        name: {
          hy: "Food Grade Oils",
          ru: "Food Grade масла",
          en: "Food Grade Oils",
        },
      },
      {
        id: "heat-transfer",
        slug: "heat-transfer-fluids",
        name: {
          hy: "Heat Transfer Fluids",
          ru: "Теплоносители",
          en: "Heat Transfer Fluids",
        },
      },
      {
        id: "chain",
        slug: "chain-oils",
        name: { hy: "Chain Oils", ru: "Цепные масла", en: "Chain Oils" },
      },
      {
        id: "biodegradable",
        slug: "biodegradable-oils",
        name: {
          hy: "Biodegradable Oils",
          ru: "Биоразлагаемые масла",
          en: "Biodegradable Oils",
        },
      },
      {
        id: "universal",
        slug: "universal-oils",
        name: {
          hy: "Universal Oils",
          ru: "Универсальные масла",
          en: "Universal Oils",
        },
      },
      {
        id: "spindle",
        slug: "spindle-oils",
        name: {
          hy: "Spindle Oils",
          ru: "Шпиндельные масла",
          en: "Spindle Oils",
        },
      },
      {
        id: "slideway",
        slug: "slideway-oils",
        name: {
          hy: "Slideway Oils",
          ru: "Масла для направляющих",
          en: "Slideway Oils",
        },
      },
      {
        id: "turbine",
        slug: "turbine-oils",
        name: {
          hy: "Turbine Oils",
          ru: "Турбинные масла",
          en: "Turbine Oils",
        },
      },
      {
        id: "pneumatic",
        slug: "pneumatic-oils",
        name: {
          hy: "Pneumatic Oils",
          ru: "Масла для пневмосистем",
          en: "Pneumatic Oils",
        },
      },
      {
        id: "special",
        slug: "special-oils",
        name: {
          hy: "Special Oils",
          ru: "Специальные масла",
          en: "Special Oils",
        },
      },
    ],
  },
  {
    id: "industrial-greases",
    slug: "industrial-greases",
    name: {
      hy: "Industrial Greases",
      ru: "Промышленные смазки",
      en: "Industrial Greases",
    },
    description: {
      hy: "Professional greases for bearings, gearboxes and heavy equipment",
      ru: "Профессиональные смазки для подшипников, редукторов и тяжёлого оборудования",
      en: "Professional greases for bearings, gearboxes and heavy equipment",
    },
    image: "/images/categories/promsmazki.jpg",
    subcategories: [
      {
        id: "lithium",
        slug: "lithium-greases",
        name: {
          hy: "Lithium Greases",
          ru: "Литиевые смазки",
          en: "Lithium Greases",
        },
      },
      {
        id: "lithium-complex",
        slug: "lithium-complex-greases",
        name: {
          hy: "Lithium Complex Greases",
          ru: "Литиевые комплексные",
          en: "Lithium Complex Greases",
        },
      },
      {
        id: "calcium",
        slug: "calcium-greases",
        name: {
          hy: "Calcium Greases",
          ru: "Кальциевые смазки",
          en: "Calcium Greases",
        },
      },
      {
        id: "calcium-sulfonate",
        slug: "calcium-sulfonate-greases",
        name: {
          hy: "Calcium Sulfonate Greases",
          ru: "Сульфонат-кальциевые",
          en: "Calcium Sulfonate Greases",
        },
      },
      {
        id: "aluminium",
        slug: "aluminium-complex-greases",
        name: {
          hy: "Aluminium Complex Greases",
          ru: "Алюминиевые комплексные",
          en: "Aluminium Complex Greases",
        },
      },
      {
        id: "barium",
        slug: "barium-complex-greases",
        name: {
          hy: "Barium Complex Greases",
          ru: "Бариевые комплексные",
          en: "Barium Complex Greases",
        },
      },
      {
        id: "silicone",
        slug: "silicone-greases",
        name: {
          hy: "Silicone Greases",
          ru: "Силиконовые смазки",
          en: "Silicone Greases",
        },
      },
      {
        id: "ptfe",
        slug: "ptfe-greases",
        name: { hy: "PTFE Greases", ru: "PTFE смазки", en: "PTFE Greases" },
      },
      {
        id: "inorganic",
        slug: "inorganic-greases",
        name: {
          hy: "Inorganic Greases",
          ru: "Неорганические смазки",
          en: "Inorganic Greases",
        },
      },
      {
        id: "copper",
        slug: "copper-pastes",
        name: { hy: "Copper Pastes", ru: "Медные пасты", en: "Copper Pastes" },
      },
      {
        id: "pastes-waxes",
        slug: "pastes-waxes",
        name: {
          hy: "Pastes & Waxes",
          ru: "Пасты и воски",
          en: "Pastes & Waxes",
        },
      },
    ],
  },
  {
    id: "industrial-sprays",
    slug: "industrial-sprays",
    name: {
      hy: "Industrial Sprays",
      ru: "Промышленные спреи",
      en: "Industrial Sprays",
    },
    description: {
      hy: "Specialized aerosol lubricants and protective compounds",
      ru: "Специализированные аэрозольные смазки и защитные составы",
      en: "Specialized aerosol lubricants and protective compounds",
    },
    image: "/images/categories/shieldspray.jpg",
    subcategories: [
      {
        id: "lubricant-sprays",
        slug: "lubricant-sprays",
        name: {
          hy: "Lubricant Sprays",
          ru: "Смазочные спреи",
          en: "Lubricant Sprays",
        },
      },
      {
        id: "food-sprays",
        slug: "food-grade-sprays",
        name: {
          hy: "Food Grade Sprays",
          ru: "Пищевые спреи",
          en: "Food Grade Sprays",
        },
      },
      {
        id: "specialty-sprays",
        slug: "specialty-sprays",
        name: {
          hy: "Specialty Sprays",
          ru: "Специальные спреи",
          en: "Specialty Sprays",
        },
      },
    ],
  },
  {
    id: "industrial-cleaners",
    slug: "industrial-cleaners",
    name: {
      hy: "Industrial Cleaners",
      ru: "Промышленные очистители",
      en: "Industrial Cleaners",
    },
    description: {
      hy: "Professional cleaners for industrial equipment",
      ru: "Профессиональные очистители для промышленного оборудования",
      en: "Professional cleaners for industrial equipment",
    },
    image: "/images/categories/promspray.jpg",
    subcategories: [
      {
        id: "water-soluble",
        slug: "water-soluble-cleaners",
        name: {
          hy: "Water-soluble Cleaners",
          ru: "Водорастворимые очистители",
          en: "Water-soluble Cleaners",
        },
      },
      {
        id: "solvent",
        slug: "solvent-cleaners",
        name: {
          hy: "Solvent Cleaners",
          ru: "Очистители на растворителях",
          en: "Solvent Cleaners",
        },
      },
      {
        id: "plant-based",
        slug: "plant-based-cleaners",
        name: {
          hy: "Plant-based Cleaners",
          ru: "Растительные очистители",
          en: "Plant-based Cleaners",
        },
      },
      {
        id: "circuit",
        slug: "circuit-cleaners",
        name: {
          hy: "Circuit / System Cleaners",
          ru: "Очистка контуров и систем",
          en: "Circuit / System Cleaners",
        },
      },
    ],
  },
  {
    id: "textile-lubricants",
    slug: "textile-lubricants",
    name: {
      hy: "Textile Lubricants",
      ru: "Текстильные смазки",
      en: "Textile Lubricants",
    },
    description: {
      hy: "Specialized lubricants and auxiliaries for textile production",
      ru: "Специализированные смазки и вспомогательные средства для текстильного производства",
      en: "Specialized lubricants and auxiliaries for textile production",
    },
    image: "/images/categories/textilespraynew.jpg",
    subcategories: [
      {
        id: "knitting",
        slug: "knitting-oils",
        name: {
          hy: "Knitting Oils",
          ru: "Масла для вязального оборудования",
          en: "Knitting Oils",
        },
      },
      {
        id: "spinning",
        slug: "spinning-oils",
        name: {
          hy: "Spinning Oils",
          ru: "Масла для прядения",
          en: "Spinning Oils",
        },
      },
      {
        id: "spinning-aux",
        slug: "spinning-auxiliaries",
        name: {
          hy: "Spinning Auxiliaries",
          ru: "Вспомогательные средства для прядения",
          en: "Spinning Auxiliaries",
        },
      },
      {
        id: "textile-other",
        slug: "textile-specialty",
        name: {
          hy: "Specialty Textile Lubricants",
          ru: "Специальные текстильные материалы",
          en: "Specialty Textile Lubricants",
        },
      },
    ],
  },
  {
    id: "metalworking-fluids",
    slug: "metalworking-fluids",
    name: {
      hy: "Metalworking Fluids",
      ru: "Масла для металлообработки",
      en: "Metalworking Fluids",
    },
    description: {
      hy: "Forming, drawing, stamping, casting and cutting fluids",
      ru: "Масла и составы для штамповки, вытяжки, волочения, литья и резки",
      en: "Forming, drawing, stamping, casting and cutting fluids",
    },
    image: "/images/categories/shtampovka.jpg",
    subcategories: [
      {
        id: "forming-neat",
        slug: "forming-neat-oils",
        name: {
          hy: "Neat Forming Oils",
          ru: "Чистые масла для штамповки и вытяжки",
          en: "Neat Forming Oils",
        },
      },
      {
        id: "forming-soluble",
        slug: "forming-soluble-oils",
        name: {
          hy: "Soluble Forming Oils",
          ru: "Растворимые масла для формовки",
          en: "Soluble Forming Oils",
        },
      },
      {
        id: "vanishing",
        slug: "vanishing-oils",
        name: {
          hy: "Vanishing Oils",
          ru: "Испаряющиеся масла",
          en: "Vanishing Oils",
        },
      },
      {
        id: "wire-drawing",
        slug: "wire-drawing-oils",
        name: {
          hy: "Wire Drawing Oils",
          ru: "Масла для волочения проволоки",
          en: "Wire Drawing Oils",
        },
      },
      {
        id: "die-casting",
        slug: "die-casting-fluids",
        name: {
          hy: "Die Casting Fluids",
          ru: "Составы для литья под давлением",
          en: "Die Casting Fluids",
        },
      },
      {
        id: "forging",
        slug: "forging-fluids",
        name: {
          hy: "Forging & Foundry Fluids",
          ru: "Жидкости для ковки и литейного производства",
          en: "Forging & Foundry Fluids",
        },
      },
      {
        id: "aluminum-cutting",
        slug: "aluminum-cutting",
        name: {
          hy: "Aluminum Cutting Fluids",
          ru: "Жидкости для резки алюминия",
          en: "Aluminum Cutting Fluids",
        },
      },
      {
        id: "cold-drawing",
        slug: "cold-drawing-oils",
        name: {
          hy: "Cold Drawing / Calibration Oils",
          ru: "Масла для холодной калибровки",
          en: "Cold Drawing / Calibration Oils",
        },
      },
    ],
  },
];

export function getCategoryBySlug(slug: string) {
  return productCategories.find((c) => c.slug === slug);
}

export function getAllCategorySlugs() {
  return productCategories.map((c) => c.slug);
}
