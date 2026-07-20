export interface LocalizedString {
  hy: string;
  ru: string;
  en: string;
}

export interface Product {
  id: string;
  slug: string;
  name: LocalizedString;
  category: string;
  subcategory: string;
  description: LocalizedString;
  shortDescription: LocalizedString;
  image: string;
  gallery: string[];
  applications: LocalizedString[];
  advantages: LocalizedString[];
  industries: string[];
  equipment: string[];
  specifications: {
    isoVg?: string;
    nlgi?: string;
    baseOil: LocalizedString;
    temperature: string;
    viscosity?: string;
    color?: string;
  };
  certificates: string[];
  foodGrade: boolean;
  nsfH1: boolean;
  synthetic: boolean;
  mineral: boolean;
  tags: string[];
  tdsUrl?: string;
  sdsUrl?: string;
}

export interface Industry {
  id: string;
  slug: string;
  name: LocalizedString;
  description: LocalizedString;
  image: string;
  icon: string;
  challenges: LocalizedString[];
  solutions: LocalizedString[];
  recommendedProducts: string[];
  seoKeywords: LocalizedString;
}

export interface Equipment {
  id: string;
  slug: string;
  name: LocalizedString;
  description: LocalizedString;
  image: string;
  icon: string;
  recommendedProducts: string[];
  maintenanceTips: LocalizedString[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: LocalizedString;
  excerpt: LocalizedString;
  content: LocalizedString;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: number;
  tags: string[];
  seoKeywords: LocalizedString;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: LocalizedString;
  industry: string;
  client: LocalizedString;
  problem: LocalizedString;
  solution: LocalizedString;
  products: string[];
  results: LocalizedString;
  savings: LocalizedString;
  image: string;
}

export interface Certificate {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  image: string;
  issuer: string;
}

export interface Service {
  id: string;
  slug: string;
  name: LocalizedString;
  description: LocalizedString;
  icon: string;
  features: LocalizedString[];
}

export interface ProductCategory {
  id: string;
  slug: string;
  name: LocalizedString;
  description: LocalizedString;
  image: string;
  subcategories: { id: string; slug: string; name: LocalizedString }[];
}

export function getLocalized(
  obj: LocalizedString,
  locale: string
): string {
  const value = obj[locale as keyof LocalizedString];
  if (value) return value;
  if (locale === "hy") return obj.ru || obj.en;
  return obj.en || obj.ru;
}
