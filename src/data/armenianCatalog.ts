import type { CatalogEntry } from "./cogelsaCatalog";

const DEFAULT_BASE_HY = "Հանքային";

export function catalogDescHy(entry: CatalogEntry, productName: string): string {
  const industrial = "արդյունաբերական";
  const quality = "եվրոպական որակի";
  if (entry.category === "industrial-oils") {
    return `${productName} — COGELSA ${industrial} յղ ${quality}`;
  }
  if (entry.category === "industrial-greases") {
    return `${productName} — COGELSA ${industrial} ցսայղ ${quality}`;
  }
  if (entry.category === "industrial-cleaners") {
    return `${productName} — COGELSA ${industrial} մաքրող միջոց`;
  }
  if (entry.category === "industrial-sprays") {
    return `${productName} — COGELSA արեոզոլային ցսանյութ`;
  }
  if (entry.category === "textile-lubricants") {
    return `${productName} — COGELSA տեկստիլային ցսանյութ`;
  }
  if (entry.category === "metalworking-fluids") {
    return `${productName} — COGELSA մետալամշակման հեղուկ`;
  }
  return `${productName} — COGELSA ապրանք ${quality}`;
}

export function catalogShortHy(entry: CatalogEntry, productName: string): string {
  if (entry.shortRu) return productName;
  return catalogDescHy(entry, productName).split("—")[0].trim();
}

export function catalogBaseOilHy(entry: CatalogEntry): string {
  if (entry.synthetic) return "Սինթետիկ";
  if (entry.baseOilRu?.includes("Синт")) return "Սինթետիկ";
  if (entry.baseOilEn?.toLowerCase().includes("syn")) return "Սինթետիկ";
  return DEFAULT_BASE_HY;
}

export const catalogAdvantagesHy = {
  quality: "COGELSA-ի եվրոպական որակ",
  life: "Երկար աշխատանքի ժամքետ",
} as const;

export const catalogApplicationHy = "Արդյունաբերական սարքավորում";
