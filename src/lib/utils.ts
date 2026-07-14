import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { companyInfo } from "@/data/company";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhone(phone: string): string {
  return phone.replace(/(\+374)(\d{2})(\d{3})(\d{3})/, "$1 $2 $3 $4");
}

export function generateWhatsAppLink(message: string): string {
  const phone = companyInfo.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
