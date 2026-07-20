import type { ProductCategory } from "./types";

export const productCategories: ProductCategory[] = [
  {
    id: "industrial-oils",
    slug: "industrial-oils",
    name: {
      hy: "Արդյունաբերական յուղեր",
      ru: "Промышленные масла",
      en: "Industrial Oils",
    },
    description: {
      hy: "Բարձրորակ արդյունաբերական յուղեր\nբոլոր տեսակի սարքավորումների համար",
      ru: "Высококачественные промышленные масла для всех типов оборудования",
      en: "High-quality industrial oils for all equipment types",
    },
    image: "/images/categories/oils.jpg",
    subcategories: [
      {
        id: "hydraulic",
        slug: "hydraulic-oils",
        name: {
          hy: "Հիդրավլիկ յուղեր",
          ru: "Гидравлические масла",
          en: "Hydraulic Oils",
        },
      },
      {
        id: "gear",
        slug: "gear-oils",
        name: { hy: "Ռեդուկտորային յուղեր", ru: "Редукторные масла", en: "Gear Oils" },
      },
      {
        id: "compressor",
        slug: "compressor-oils",
        name: {
          hy: "Կոմպրեսորային յուղեր",
          ru: "Компрессорные масла",
          en: "Compressor Oils",
        },
      },
      {
        id: "vacuum",
        slug: "vacuum-oils",
        name: { hy: "Վակուումային յուղեր", ru: "Вакуумные масла", en: "Vacuum Oils" },
      },
      {
        id: "food-grade",
        slug: "food-grade-oils",
        name: {
          hy: "Սննդային յուղեր (Food Grade)",
          ru: "Food Grade масла",
          en: "Food Grade Oils",
        },
      },
      {
        id: "heat-transfer",
        slug: "heat-transfer-fluids",
        name: {
          hy: "Ջերմատար հեղուկներ",
          ru: "Теплоносители",
          en: "Heat Transfer Fluids",
        },
      },
      {
        id: "chain",
        slug: "chain-oils",
        name: { hy: "Շղթայական յուղեր", ru: "Цепные масла", en: "Chain Oils" },
      },
      {
        id: "biodegradable",
        slug: "biodegradable-oils",
        name: {
          hy: "Կենսաքայքայվող յուղեր",
          ru: "Биоразлагаемые масла",
          en: "Biodegradable Oils",
        },
      },
      {
        id: "universal",
        slug: "universal-oils",
        name: {
          hy: "Ունիվերսալ յուղեր",
          ru: "Универсальные масла",
          en: "Universal Oils",
        },
      },
      {
        id: "spindle",
        slug: "spindle-oils",
        name: {
          hy: "Իլային յուղեր",
          ru: "Шпиндельные масла",
          en: "Spindle Oils",
        },
      },
      {
        id: "slideway",
        slug: "slideway-oils",
        name: {
          hy: "Ուղեցույցների յուղեր",
          ru: "Масла для направляющих",
          en: "Slideway Oils",
        },
      },
      {
        id: "turbine",
        slug: "turbine-oils",
        name: {
          hy: "Տուրբինային յուղեր",
          ru: "Турбинные масла",
          en: "Turbine Oils",
        },
      },
      {
        id: "pneumatic",
        slug: "pneumatic-oils",
        name: {
          hy: "Պնևմատիկ համակարգերի յուղեր",
          ru: "Масла для пневмосистем",
          en: "Pneumatic Oils",
        },
      },
      {
        id: "special",
        slug: "special-oils",
        name: {
          hy: "Հատուկ նշանակության յուղեր",
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
      hy: "Արդյունաբերական քսուքներ",
      ru: "Промышленные смазки",
      en: "Industrial Greases",
    },
    description: {
      hy: "Պրոֆեսիոնալ քսուքներ առանցքակալների, ռեդուկտորների և ծանր սարքավորումների համար",
      ru: "Профессиональные смазки для подшипников, редукторов и тяжёлого оборудования",
      en: "Professional greases for bearings, gearboxes and heavy equipment",
    },
    image: "/images/categories/promsmazki.jpg",
    subcategories: [
      {
        id: "lithium",
        slug: "lithium-greases",
        name: {
          hy: "Լիթիումային քսուքներ",
          ru: "Литиевые смазки",
          en: "Lithium Greases",
        },
      },
      {
        id: "lithium-complex",
        slug: "lithium-complex-greases",
        name: {
          hy: "Լիթիումային կոմպլեքսային քսուքներ",
          ru: "Литиевые комплексные",
          en: "Lithium Complex Greases",
        },
      },
      {
        id: "calcium",
        slug: "calcium-greases",
        name: {
          hy: "Կալցիումային քսուքներ",
          ru: "Кальциевые смазки",
          en: "Calcium Greases",
        },
      },
      {
        id: "calcium-sulfonate",
        slug: "calcium-sulfonate-greases",
        name: {
          hy: "Կալցիում-սուլֆոնատային քսուքներ",
          ru: "Сульфонат-кальциевые",
          en: "Calcium Sulfonate Greases",
        },
      },
      {
        id: "aluminium",
        slug: "aluminium-complex-greases",
        name: {
          hy: "Ալյումինային կոմպլեքսային քսուքներ",
          ru: "Алюминиевые комплексные",
          en: "Aluminium Complex Greases",
        },
      },
      {
        id: "barium",
        slug: "barium-complex-greases",
        name: {
          hy: "Բարիումային կոմպլեքսային քսուքներ",
          ru: "Бариевые комплексные",
          en: "Barium Complex Greases",
        },
      },
      {
        id: "silicone",
        slug: "silicone-greases",
        name: {
          hy: "Սիլիկոնային քսուքներ",
          ru: "Силиконовые смазки",
          en: "Silicone Greases",
        },
      },
      {
        id: "ptfe",
        slug: "ptfe-greases",
        name: { hy: "PTFE քսուքներ", ru: "PTFE смазки", en: "PTFE Greases" },
      },
      {
        id: "inorganic",
        slug: "inorganic-greases",
        name: {
          hy: "Անօրգանական քսուքներ",
          ru: "Неорганические смазки",
          en: "Inorganic Greases",
        },
      },
      {
        id: "copper",
        slug: "copper-pastes",
        name: { hy: "Պղնձի մածուկներ", ru: "Медные пасты", en: "Copper Pastes" },
      },
      {
        id: "pastes-waxes",
        slug: "pastes-waxes",
        name: {
          hy: "Մածուկներ և մոմեր",
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
      hy: "Արդյունաբերական սփրեյներ",
      ru: "Промышленные спреи",
      en: "Industrial Sprays",
    },
    description: {
      hy: "Մասնագիտացված աերոզոլային քսանյութեր և պաշտպանիչ միջոցներ",
      ru: "Специализированные аэрозольные смазки и защитные составы",
      en: "Specialized aerosol lubricants and protective compounds",
    },
    image: "/images/categories/shieldspray.jpg",
    subcategories: [
      {
        id: "lubricant-sprays",
        slug: "lubricant-sprays",
        name: {
          hy: "Քսող սփրեյներ",
          ru: "Смазочные спреи",
          en: "Lubricant Sprays",
        },
      },
      {
        id: "food-sprays",
        slug: "food-grade-sprays",
        name: {
          hy: "Սննդային սփրեյներ (Food Grade)",
          ru: "Пищевые спреи",
          en: "Food Grade Sprays",
        },
      },
      {
        id: "specialty-sprays",
        slug: "specialty-sprays",
        name: {
          hy: "Հատուկ նշանակության սփրեյներ",
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
      hy: "Արդյունաբերական մաքրող միջոցներ",
      ru: "Промышленные очистители",
      en: "Industrial Cleaners",
    },
    description: {
      hy: "Պրոֆեսիոնալ մաքրող միջոցներ արդյունաբերական սարքավորումների համար",
      ru: "Профессиональные очистители для промышленного оборудования",
      en: "Professional cleaners for industrial equipment",
    },
    image: "/images/categories/promspray.jpg",
    subcategories: [
      {
        id: "water-soluble",
        slug: "water-soluble-cleaners",
        name: {
          hy: "Ջրալույծ մաքրող միջոցներ",
          ru: "Водорастворимые очистители",
          en: "Water-soluble Cleaners",
        },
      },
      {
        id: "solvent",
        slug: "solvent-cleaners",
        name: {
          hy: "Լուծիչահիմք մաքրող միջոցներ",
          ru: "Очистители на растворителях",
          en: "Solvent Cleaners",
        },
      },
      {
        id: "plant-based",
        slug: "plant-based-cleaners",
        name: {
          hy: "Բուսական հիմքով մաքրող միջոցներ",
          ru: "Растительные очистители",
          en: "Plant-based Cleaners",
        },
      },
      {
        id: "circuit",
        slug: "circuit-cleaners",
        name: {
          hy: "Կոնտուրների և համակարգերի մաքրում",
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
      hy: "Տեքստիլային քսանյութեր",
      ru: "Текстильные смазки",
      en: "Textile Lubricants",
    },
    description: {
      hy: "Մասնագիտացված քսանյութեր և օժանդակ միջոցներ տեքստիլ արտադրության համար",
      ru: "Специализированные смазки и вспомогательные средства для текстильного производства",
      en: "Specialized lubricants and auxiliaries for textile production",
    },
    image: "/images/categories/textilespraynew.jpg",
    subcategories: [
      {
        id: "knitting",
        slug: "knitting-oils",
        name: {
          hy: "Հյուսագործական յուղեր",
          ru: "Масла для вязального оборудования",
          en: "Knitting Oils",
        },
      },
      {
        id: "spinning",
        slug: "spinning-oils",
        name: {
          hy: "Մանման յուղեր",
          ru: "Масла для прядения",
          en: "Spinning Oils",
        },
      },
      {
        id: "spinning-aux",
        slug: "spinning-auxiliaries",
        name: {
          hy: "Մանման օժանդակ միջոցներ",
          ru: "Вспомогательные средства для прядения",
          en: "Spinning Auxiliaries",
        },
      },
      {
        id: "textile-other",
        slug: "textile-specialty",
        name: {
          hy: "Հատուկ տեքստիլային քսանյութեր",
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
      hy: "Մետաղամշակման հեղուկներ",
      ru: "Масла для металлообработки",
      en: "Metalworking Fluids",
    },
    description: {
      hy: "Ձևավորման, ձգման, դրոշմման, ձուլման և կտրման հեղուկներ",
      ru: "Масла и составы для штамповки, вытяжки, волочения, литья и резки",
      en: "Forming, drawing, stamping, casting and cutting fluids",
    },
    image: "/images/categories/shtampovka.jpg",
    subcategories: [
      {
        id: "forming-neat",
        slug: "forming-neat-oils",
        name: {
          hy: "Մաքուր յուղեր դրոշմման և ձգման համար",
          ru: "Чистые масла для штамповки и вытяжки",
          en: "Neat Forming Oils",
        },
      },
      {
        id: "forming-soluble",
        slug: "forming-soluble-oils",
        name: {
          hy: "Լուծվող յուղեր ձևավորման համար",
          ru: "Растворимые масла для формовки",
          en: "Soluble Forming Oils",
        },
      },
      {
        id: "vanishing",
        slug: "vanishing-oils",
        name: {
          hy: "Գոլորշիացող յուղեր",
          ru: "Испаряющиеся масла",
          en: "Vanishing Oils",
        },
      },
      {
        id: "wire-drawing",
        slug: "wire-drawing-oils",
        name: {
          hy: "Մետաղալարի ձգման յուղեր",
          ru: "Масла для волочения проволоки",
          en: "Wire Drawing Oils",
        },
      },
      {
        id: "die-casting",
        slug: "die-casting-fluids",
        name: {
          hy: "Ձուլման հեղուկներ ճնշման տակ",
          ru: "Составы для литья под давлением",
          en: "Die Casting Fluids",
        },
      },
      {
        id: "forging",
        slug: "forging-fluids",
        name: {
          hy: "Դարբնոցային և ձուլարանային հեղուկներ",
          ru: "Жидкости для ковки и литейного производства",
          en: "Forging & Foundry Fluids",
        },
      },
      {
        id: "aluminum-cutting",
        slug: "aluminum-cutting",
        name: {
          hy: "Ալյումինի կտրման հեղուկներ",
          ru: "Жидкости для резки алюминия",
          en: "Aluminum Cutting Fluids",
        },
      },
      {
        id: "cold-drawing",
        slug: "cold-drawing-oils",
        name: {
          hy: "Սառը կալիբրման յուղեր",
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
