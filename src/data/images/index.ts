/**
 * Local image catalog — files live in public/images/
 * Every on-site photo path must be unique (no reuse across entities).
 */

export const images = {
  heroSteel: "/images/hero/hero-steel.jpg",
  heroMining: "/images/hero/hero-mining.jpg",
  heroFood: "/images/hero/hero-food.jpg",
  heroBearings: "/images/hero/hero-bearings.jpg",
  heroHydraulics: "/images/hero/hero-hydraulics.jpg",
  heroMachinery: "/images/hero/hero-machinery.jpg",

  logo: "/logo.svg",
  ogImage: "/og-image.jpg",

  aboutFactory: "/images/about/factory.jpg",
} as const;

export const heroImageList = [
  images.heroSteel,
  images.heroMining,
  images.heroFood,
  images.heroBearings,
  images.heroHydraulics,
  images.heroMachinery,
] as const;
