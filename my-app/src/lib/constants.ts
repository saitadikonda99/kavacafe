import type { Slide, MenuItem, TimelineItem, Testimonial, SocialLink } from "@/types";

export const NAV = ["Home", "Menu", "About", "Gallery", "Blog", "Contact"] as const;

export const SLIDES: Slide[] = [
  {
    label: "WELCOME TO KAVA CAFE",
    title: "FINE\nDINING",
    sub: "Step into a world of exceptional flavours, crafted with passion and served with warmth. Your perfect dining experience awaits.",
    img: "/cafe.png",
    local: true,
  },
  {
    label: "RARE & DELICIOUS",
    title: "SEA\nFOOD",
    sub: "Sourced fresh from coastal waters each morning, our seafood dishes celebrate the purest flavours of the ocean — simply prepared, memorably served.",
    img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=1400&q=80",
  },
  {
    label: "OUR EXPERTISE",
    title: "EXOTIC\nDISHES",
    sub: "Crafted by world-renowned chefs for an unforgettable culinary experience that awakens every sense.",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=80",
  },
];

export const MENU_LEFT: MenuItem[] = [
  { name: "PRAWN MASALA",         price: "$ 120", desc: "Tiger prawns in a rich coastal spice blend", star: true },
  { name: "GRILLED FISH CURRY",   price: "$ 95",  desc: "Fresh catch in a tangy coconut gravy",       star: false },
  { name: "SQUID PEPPER FRY",     price: "$ 85",  desc: "Crispy squid tossed with black pepper",      star: false },
  { name: "LOBSTER THERMIDOR",    price: "$ 170", desc: "Whole lobster with herb-cream sauce",        star: true },
  { name: "CRAB BUTTER GARLIC",   price: "$ 140", desc: "Mud crab sautéed in garlic butter",          star: false },
];

export const MENU_RIGHT: MenuItem[] = [
  { name: "COCONUT PANNA COTTA",  price: "$ 80",  desc: "Silky coconut cream with mango coulis",     star: false },
  { name: "DARK CHOCOLATE TART",  price: "$ 90",  desc: "Bitter chocolate ganache, sea salt crust",  star: true },
  { name: "CARDAMOM KHEER",       price: "$ 75",  desc: "Slow-cooked rice pudding, saffron milk",    star: false },
  { name: "GULAB JAMUN",          price: "$ 70",  desc: "Rose syrup dumplings, pistachio cream",     star: false },
  { name: "CHEF'S DESSERT",       price: "$ 110", desc: "Seasonal creation from our pastry team",    star: true },
];

export const TIMELINE: TimelineItem[] = [
  { year: "1989", title: "THE BEGINNINGS", desc: "A small outdoor cafe opens in Hyderabad, built on a love for fresh coastal food.",         pos: "below" },
  { year: "1995", title: "FIRST AWARD",    desc: "Kava Cafe wins Best New Restaurant at the South India Food Awards.",                        pos: "above" },
  { year: "2001", title: "NEW LOCATION",   desc: "We move to our current home — a lush garden space with open-air dining.",                  pos: "below" },
  { year: "2010", title: "CHEF'S VISION",  desc: "Our head chef joins and introduces the signature coastal tasting menu.",                    pos: "above" },
  { year: "2024", title: "MODERN KAVA",    desc: "A full renovation brings the iconic red gate and geometric brand to life.",                 pos: "below" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "THE LOBSTER THERMIDOR WAS UNLIKE ANYTHING I HAVE TASTED. KAVA CAFE SETS A NEW STANDARD FOR COASTAL FINE DINING IN THE CITY.",
    author: "PAULINE PARKS",
    role: "Food Critic",
  },
  {
    quote: "EVERY DETAIL — FROM THE GARDEN SETTING TO THE LAST DESSERT — FELT CONSIDERED AND MEMORABLE. A TRULY SPECIAL DINING EXPERIENCE.",
    author: "KIEREN BURNETT",
    role: "Gourmet Magazine",
  },
];

export const IG_IMAGES = [
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
  "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80",
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80",
  "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&q=80",
  "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&q=80",
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80",
] as const;

export const PARTNERS = [
  "Natural Hand Made",
  "Classical Signature",
  "Sauvignon Blanc",
  "Olive & Co.",
  "Olives Ltd.",
  "Premium M",
] as const;

export const FOOTER_LINKS = [
  "Our Story", "The Menu", "Reservations", "Private Dining", "Gift Cards", "Gallery", "Press",
] as const;

export const SOCIALS: SocialLink[] = [
  { label: "Facebook",  d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
  { label: "Twitter",   d: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
  { label: "Instagram", d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
  { label: "Pinterest", d: "M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" },
];
