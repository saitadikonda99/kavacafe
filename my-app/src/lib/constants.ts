import type { Slide, MenuItem, TimelineItem, Testimonial, SocialLink } from "@/types";

export const NAV = ["Home", "Menu", "About", "Gallery", "Blog", "Contact"] as const;

export const SLIDES: Slide[] = [
  {
    label: "WELCOME TO KAVA CAFE",
    title: "FINE\nDINING",
    sub: "Vijayawada's most beloved premium cafe — where European craft meets South Indian warmth. Every visit is an experience.",
    img: "/cafe.png",
    local: true,
  },
  {
    label: "FRESHLY BAKED DAILY",
    title: "ARTISAN\nBAKERY",
    sub: "From our signature chocolate cube croissants to Biscoff pastries — baked fresh every morning with the finest ingredients.",
    img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=1400&q=80",
  },
  {
    label: "EUROPEAN & INDIAN FUSION",
    title: "EXOTIC\nFLAVOURS",
    sub: "Crafted by passionate chefs blending European techniques with South Indian soul — an unforgettable culinary journey.",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=80",
  },
];

export const MENU_LEFT: MenuItem[] = [
  { name: "SEAFOOD PIZZA",           price: "₹ 320", desc: "Fresh fish & tiger prawns on hand-tossed dough, house tomato sauce",  star: true },
  { name: "RED SAUCE SPAGHETTI",     price: "₹ 220", desc: "Classic marinara with fresh basil and aged parmesan",                  star: false },
  { name: "WHITE SAUCE PASTA",       price: "₹ 200", desc: "Creamy béchamel tossed with seasonal vegetables",                      star: false },
  { name: "THREADED PANEER",         price: "₹ 180", desc: "Paneer wrapped in ultra-thin dough threads, crispy fried",             star: true },
  { name: "PALAK PANEER QUESADILLA", price: "₹ 160", desc: "Crispy rotis filled with creamy palak paneer and spices",              star: false },
];

export const MENU_RIGHT: MenuItem[] = [
  { name: "CHOCOLATE CUBE CROISSANT", price: "₹ 120", desc: "Our house specialty — dark chocolate layered inside a flaky croissant", star: true },
  { name: "BISCOFF CROISSANT",        price: "₹ 110", desc: "Fresh croissant with lotus Biscoff spread and crunchy crumble",        star: false },
  { name: "DEVIL'S BROWNIE",          price: "₹ 110", desc: "Fudgy dark chocolate brownie served warm with vanilla cream",           star: false },
  { name: "CRÈME BRÛLÉE",             price: "₹ 140", desc: "Classic vanilla custard with a perfectly caramelised sugar crust",     star: true },
  { name: "RUSSIAN MEDOWICH",         price: "₹ 160", desc: "Delicate layered honey cake with fresh whipped cream",                 star: false },
];

export const TIMELINE: TimelineItem[] = [
  { year: "2019", title: "THE BEGINNING",   desc: "Kava Cafe opens its doors in Labbipet, Vijayawada, with a bold vision for premium coffee and artisan food.",    pos: "below" },
  { year: "2020", title: "EARNED TRUST",    desc: "Through the toughest year, Kava Cafe won the loyalty of Vijayawada's food lovers with consistent quality.",     pos: "above" },
  { year: "2021", title: "CITY FAVOURITE",  desc: "Recognised as the best coffee shop in Vijayawada by local food communities and lifestyle publications.",         pos: "below" },
  { year: "2022", title: "FUSION MENU",     desc: "Launched our signature European–Indian fusion dishes including the iconic Seafood Pizza and pastry line.",       pos: "above" },
  { year: "2024", title: "4.2★ ON GOOGLE",  desc: "Over 945 five-star reviews and counting — a landmark destination in Andhra Pradesh's dining scene.",            pos: "below" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "THE CHOCOLATE CUBE CROISSANT IS UNLIKE ANYTHING I HAVE TASTED IN VIJAYAWADA. KAVA CAFE SETS A NEW STANDARD FOR PREMIUM CAFES IN THE CITY.",
    author: "ANANYA REDDY",
    role: "Food Blogger, Vijayawada",
  },
  {
    quote: "FROM THE SWING SEATS TO THE LAST BITE OF CRÈME BRÛLÉE — EVERY DETAIL FELT THOUGHTFULLY CURATED. AN ABSOLUTE MUST-VISIT CAFE IN ANDHRA PRADESH.",
    author: "KIRAN KUMAR",
    role: "Gourmet Traveller",
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
  "Manor Food Plaza",
  "Andhra Spice Co.",
  "Fresh Bake Supply",
  "Vijayawada Dairy",
  "Coastal Harvest",
  "Krishna Organics",
] as const;

export const FOOTER_LINKS = [
  "Our Story", "The Menu", "Reservations", "Our Bakery", "Events", "Gallery", "Contact",
] as const;

export const SOCIALS: SocialLink[] = [
  { label: "Facebook",  d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
  { label: "Twitter",   d: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
  { label: "Instagram", d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
  { label: "Pinterest", d: "M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" },
];
