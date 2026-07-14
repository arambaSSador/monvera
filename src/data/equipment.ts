import type { Equipment } from "./types";

export const equipmentList: Equipment[] = [
  {
    id: "bearings",
    slug: "bearings",
    name: { hy: "Подшипники", ru: "Подшипники", en: "Bearings" },
    description: {
      hy: "Смазочные материалы для подшипников качения и скольжения",
      ru: "Смазочные материалы для подшипников качения и скольжения",
      en: "Lubricants for rolling and sliding bearings",
    },
    image: "/images/equipment/bearings.jpg",
    icon: "CircleDot",
    recommendedProducts: ["cogelsa-bearing-grease-lithium-ep-2"],
    maintenanceTips: [
      { hy: "Регулярная проверка уровня смазки", ru: "Регулярная проверка уровня смазки", en: "Regular grease level check" },
      { hy: "Избегайте пересмазки", ru: "Избегайте пересмазки", en: "Avoid over-greasing" },
    ],
  },
  {
    id: "gearboxes",
    slug: "gearboxes",
    name: { hy: "Редукторы", ru: "Редукторы", en: "Gearboxes" },
    description: {
      hy: "Редукторные масла для промышленных передач",
      ru: "Редукторные масла для промышленных передач",
      en: "Gear oils for industrial transmissions",
    },
    image: "/images/equipment/gearboxes.jpg",
    icon: "Cog",
    recommendedProducts: ["cogelsa-gear-oil-ep-220"],
    maintenanceTips: [
      { hy: "Контроль вязкости масла", ru: "Контроль вязкости масла", en: "Monitor oil viscosity" },
    ],
  },
  {
    id: "chains",
    slug: "chains",
    name: { hy: "Цепи", ru: "Цепи", en: "Chains" },
    description: {
      hy: "Цепные масла и смазки для конвейерных цепей",
      ru: "Цепные масла и смазки для конвейерных цепей",
      en: "Chain oils and greases for conveyor chains",
    },
    image: "/images/equipment/chains.jpg",
    icon: "Link",
    recommendedProducts: [],
    maintenanceTips: [
      { hy: "Регулярная смазка цепей", ru: "Регулярная смазка цепей", en: "Regular chain lubrication" },
    ],
  },
  {
    id: "compressors",
    slug: "compressors",
    name: { hy: "Компрессоры", ru: "Компрессоры", en: "Compressors" },
    description: {
      hy: "Компрессорные масла для всех типов компрессоров",
      ru: "Компрессорные масла для всех типов компрессоров",
      en: "Compressor oils for all compressor types",
    },
    image: "/images/equipment/compressors.jpg",
    icon: "Wind",
    recommendedProducts: ["cogelsa-compressor-oil-pao-68"],
    maintenanceTips: [
      { hy: "Своевременная замена масла", ru: "Своевременная замена масла", en: "Timely oil change" },
    ],
  },
  {
    id: "hydraulic-systems",
    slug: "hydraulic-systems",
    name: { hy: "Гидравлические системы", ru: "Гидравлические системы", en: "Hydraulic Systems" },
    description: {
      hy: "Гидравлические масла для промышленных систем",
      ru: "Гидравлические масла для промышленных систем",
      en: "Hydraulic oils for industrial systems",
    },
    image: "/images/equipment/hydraulics.jpg",
    icon: "Droplets",
    recommendedProducts: ["cogelsa-hydraulic-hlp-46"],
    maintenanceTips: [
      { hy: "Анализ масла каждые 6 месяцев", ru: "Анализ масла каждые 6 месяцев", en: "Oil analysis every 6 months" },
    ],
  },
  {
    id: "vacuum-pumps",
    slug: "vacuum-pumps",
    name: { hy: "Вакуумные насосы", ru: "Вакуумные насосы", en: "Vacuum Pumps" },
    description: {
      hy: "Вакуумные масла специального назначения",
      ru: "Вакуумные масла специального назначения",
      en: "Specialty vacuum pump oils",
    },
    image: "/images/equipment/vacuum.jpg",
    icon: "Gauge",
    recommendedProducts: [],
    maintenanceTips: [],
  },
  {
    id: "open-gears",
    slug: "open-gears",
    name: { hy: "Открытые зубчатые передачи", ru: "Открытые зубчатые передачи", en: "Open Gears" },
    description: {
      hy: "Смазки для открытых зубчатых передач",
      ru: "Смазки для открытых зубчатых передач",
      en: "Lubricants for open gear drives",
    },
    image: "/images/equipment/open-gears.jpg",
    icon: "Settings",
    recommendedProducts: ["cogelsa-gear-oil-ep-220"],
    maintenanceTips: [],
  },
  {
    id: "conveyors",
    slug: "conveyors",
    name: { hy: "Конвейеры", ru: "Конвейеры", en: "Conveyors" },
    description: {
      hy: "Смазки для конвейерных систем",
      ru: "Смазки для конвейерных систем",
      en: "Lubricants for conveyor systems",
    },
    image: "/images/equipment/conveyors.jpg",
    icon: "MoveHorizontal",
    recommendedProducts: [],
    maintenanceTips: [],
  },
  {
    id: "electric-motors",
    slug: "electric-motors",
    name: { hy: "Электродвигатели", ru: "Электродвигатели", en: "Electric Motors" },
    description: {
      hy: "Смазки для подшипников электродвигателей",
      ru: "Смазки для подшипников электродвигателей",
      en: "Greases for electric motor bearings",
    },
    image: "/images/equipment/motors.jpg",
    icon: "Zap",
    recommendedProducts: ["cogelsa-bearing-grease-lithium-ep-2"],
    maintenanceTips: [],
  },
  {
    id: "mixers",
    slug: "mixers",
    name: { hy: "Смесители", ru: "Смесители", en: "Mixers" },
    description: {
      hy: "Food Grade смазки для смесительного оборудования",
      ru: "Food Grade смазки для смесительного оборудования",
      en: "Food Grade greases for mixing equipment",
    },
    image: "/images/equipment/mixers.jpg",
    icon: "Blend",
    recommendedProducts: ["cogelsa-foodlube-h1-32"],
    maintenanceTips: [],
  },
  {
    id: "food-machines",
    slug: "food-machines",
    name: { hy: "Пищевое оборудование", ru: "Пищевое оборудование", en: "Food Machines" },
    description: {
      hy: "NSF H1 смазки для пищевого оборудования",
      ru: "NSF H1 смазки для пищевого оборудования",
      en: "NSF H1 lubricants for food machinery",
    },
    image: "/images/equipment/food-machines.jpg",
    icon: "UtensilsCrossed",
    recommendedProducts: ["cogelsa-foodlube-h1-32"],
    maintenanceTips: [],
  },
  {
    id: "packaging-machines",
    slug: "packaging-machines",
    name: { hy: "Упаковочные машины", ru: "Упаковочные машины", en: "Packaging Machines" },
    description: {
      hy: "Смазки для упаковочного оборудования",
      ru: "Смазки для упаковочного оборудования",
      en: "Lubricants for packaging machinery",
    },
    image: "/images/equipment/packaging-machines.jpg",
    icon: "Package",
    recommendedProducts: [],
    maintenanceTips: [],
  },
];

export function getEquipmentBySlug(slug: string) {
  return equipmentList.find((e) => e.slug === slug);
}

export function getAllEquipmentSlugs() {
  return equipmentList.map((e) => e.slug);
}
