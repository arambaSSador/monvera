/**
 * Local image catalog — files live in public/images/
 */

export const images = {
  logo: "/logo.svg",
  ogImage: "/og-image.jpg",
  aboutFactory: "/images/about/factory.jpg",
} as const;

/** Hero slideshow — industry photos from public/images/industries/ */
export const heroImageList = [
  "/images/industries/gorno.jpg",
  "/images/industries/metall.jpg",
  "/images/industries/cementind.jpg",
  "/images/industries/foodind.jpg",
  "/images/industries/automobile.jpg",
  "/images/industries/energetica.jpg",
  "/images/industries/chemistry.jpg",
  "/images/industries/stroyka.jpg",
  "/images/industries/morskaya.jpg",
  "/images/industries/selskoe.jpg",
] as const;
