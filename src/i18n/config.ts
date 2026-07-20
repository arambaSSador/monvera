export const locales = ["hy", "ru", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ru";

export const localeNames: Record<Locale, string> = {
  hy: "Հայերեն",
  ru: "Русский",
  en: "English",
};

export const localeFlags: Record<Locale, string> = {
  hy: "🇦🇲",
  ru: "🇷🇺",
  en: "🇬🇧",
};
