import { heroImageList } from "./images";

export const companyInfo = {
  name: "MONVERA LLC",
  tagline: {
    hy: "COGELSA-ի պաշտոնական ներկրողը Հայաստանում",
    ru: "Официальный дистрибьютор COGELSA в Армении",
    en: "Official COGELSA Distributor in Armenia",
  },
  phone: "+374 91 192 111",
  phoneSecondary: "+374 41 192 112",
  email: "monverarmenia@gmail.com",
  emailSales: "monverarmenia@gmail.com",
  emailTechnical: "monverarmenia@gmail.com",
  whatsapp: "+37491192111",
  telegram: "@monverallc",
  office: {
    hy: "Երևան, Հայաստան",
    ru: "Ереван, Армения",
    en: "Yerevan, Armenia",
  },
  warehouse: {
    hy: "Երևան, Հայաստան — պահեստ",
    ru: "Ереван, Армения — склад",
    en: "Yerevan, Armenia — warehouse",
  },
  hours: {
    hy: "Երկ–Ուրբ 09:00–18:00, Շաբ 10:00–14:00",
    ru: "Пн–Пт 09:00–18:00, Сб 10:00–14:00",
    en: "Mon–Fri 09:00–18:00, Sat 10:00–14:00",
  },
  social: {
    facebook: "https://facebook.com/monvera.am",
    linkedin: "https://linkedin.com/company/monvera",
    instagram: "https://instagram.com/monvera.am",
    youtube: "https://youtube.com/@monvera",
  },
  mapCoords: { lat: 40.1872, lng: 44.5152 },
};

export const heroImages = [...heroImageList];

export const stats = [
  { value: 100, suffix: "+", labelKey: "years" },
  { value: 55, suffix: "+", labelKey: "countries" },
  { value: 500, suffix: "+", labelKey: "products" },
];

export const whyUsItems = [
  { key: "official", icon: "Award" },
  { key: "european", icon: "Globe" },
  { key: "expertise", icon: "Brain" },
  { key: "delivery", icon: "Truck" },
  { key: "stock", icon: "Warehouse" },
  { key: "consultation", icon: "Users" },
  { key: "experience", icon: "Factory" },
  { key: "partnership", icon: "Handshake" },
  { key: "quality", icon: "Shield" },
  { key: "pricing", icon: "BadgeDollarSign" },
];

export const downloads = [
  {
    id: "catalogue-2026",
    name: { hy: "Կատալոգ 2026", ru: "Каталог 2026", en: "Catalogue 2026" },
    type: "catalogue",
    size: "PDF",
    // Put file in public/downloads/ and set path below to enable direct download
    file: "" as string,
  },
  {
    id: "company-profile",
    name: {
      hy: "Ընկերության պրոֆիլ",
      ru: "Профиль компании",
      en: "Company Profile",
    },
    type: "profile",
    size: "PDF",
    file: "" as string,
  },
  {
    id: "food-grade-guide",
    name: {
      hy: "Food Grade ուղեցույց",
      ru: "Food Grade руководство",
      en: "Food Grade Guide",
    },
    type: "guide",
    size: "PDF",
    file: "" as string,
  },
  {
    id: "hydraulic-guide",
    name: {
      hy: "Հիդրավլիկայի ուղեցույց",
      ru: "Гидравлика",
      en: "Hydraulic Guide",
    },
    type: "guide",
    size: "PDF",
    file: "" as string,
  },
  {
    id: "iso-vg-table",
    name: {
      hy: "ISO VG աղյուսակ",
      ru: "Таблица ISO VG",
      en: "ISO VG Table",
    },
    type: "technical",
    size: "PDF",
    file: "" as string,
  },
  {
    id: "nlgi-guide",
    name: {
      hy: "NLGI ուղեցույց",
      ru: "NLGI руководство",
      en: "NLGI Guide",
    },
    type: "technical",
    size: "PDF",
    file: "" as string,
  },
];

export const technicalGuides = [
  {
    slug: "lubrication-basics",
    name: {
      hy: "Քսման հիմունքներ",
      ru: "Основы смазки",
      en: "Lubrication Basics",
    },
  },
  {
    slug: "iso-vg-selection",
    name: {
      hy: "ISO VG ընտրություն",
      ru: "Выбор ISO VG",
      en: "ISO VG Selection",
    },
  },
  {
    slug: "nlgi-guide",
    name: { hy: "NLGI ուղեցույց", ru: "NLGI Guide", en: "NLGI Guide" },
  },
  {
    slug: "food-grade-standards",
    name: {
      hy: "Food Grade ստանդարտներ",
      ru: "Food Grade Standards",
      en: "Food Grade Standards",
    },
  },
  {
    slug: "lubrication-intervals",
    name: {
      hy: "Քսման միջակայքեր",
      ru: "Интервалы смазки",
      en: "Lubrication Intervals",
    },
  },
  {
    slug: "failure-analysis",
    name: {
      hy: "Խափանումների վերլուծություն",
      ru: "Анализ отказов",
      en: "Failure Analysis",
    },
  },
  {
    slug: "maintenance-best-practices",
    name: {
      hy: "Սպասարկման լավագույն պրակտիկա",
      ru: "Обслуживание",
      en: "Maintenance Best Practices",
    },
  },
  {
    slug: "industrial-standards",
    name: {
      hy: "Արդյունաբերական ստանդարտներ",
      ru: "Стандарты",
      en: "Industrial Standards",
    },
  },
];

export function getAllTechnicalGuideSlugs() {
  return technicalGuides.map((g) => g.slug);
}

export function getAllDownloadIds() {
  return downloads.map((d) => d.id);
}
