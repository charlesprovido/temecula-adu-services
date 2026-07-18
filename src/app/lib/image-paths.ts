/**
 * Central image path registry.
 *
 * Every hero and before/after slot on the site is listed here.
 * To swap a photo: drop the file into /public/images/<page>/ and update
 * the path string on the matching line below — one edit, done.
 */
export const IMAGES = {
  home: {
    hero: "/images/home/hero.png",
  },
  aduConstruction: {
    hero: "/images/adu-construction/hero.png",
  },
  garageConversion: {
    before: "/images/garage-conversion/before.png",
    after:  "/images/garage-conversion/after.png",
  },
  designPermitting: {
    // Real photo not yet available — placeholder stays until image is dropped in
    hero: "/images/design-permitting/hero-placeholder.svg",
    // → swap to: "/images/design-permitting/hero.jpg"
  },
  legalization: {
    hero: "/images/legalization/hero.png",
  },
  temecula: {
    hero: "/images/temecula/hero.png",
  },
  murrieta: {
    hero: "/images/murrieta/hero.png",
  },
} as const;
