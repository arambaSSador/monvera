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
    image:
      "/images/categories/oils.jpg",
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
    image:
      "/images/categories/greases.jpg",
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
        id: "calcium",
        slug: "calcium-greases",
        name: {
          hy: "Calcium Greases",
          ru: "Кальциевые смазки",
          en: "Calcium Greases",
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
        id: "copper",
        slug: "copper-pastes",
        name: { hy: "Copper Pastes", ru: "Медные пасты", en: "Copper Pastes" },
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
    image:
      "/images/categories/sprays.jpg",
    subcategories: [],
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
    image:
      "/images/categories/cleaners.jpg",
    subcategories: [],
  },
];

export function getCategoryBySlug(slug: string) {
  return productCategories.find((c) => c.slug === slug);
}

export function getAllCategorySlugs() {
  return productCategories.map((c) => c.slug);
}
