"use client";

import { useState } from "react";
import Image from "next/image";

// ── Palette & font helpers ─────────────────────────────────────────────────────
const G = {
  green:  "#263830",
  green2: "#1c2e24",
  cream:  "#e4dcd2",
  gold:   "#b8965a",
  white:  "#ffffff",
  dark:   "#1a1a1a",
};
const serif: React.CSSProperties = { fontFamily: "var(--font-cormorant), Georgia, serif" };
const sans:  React.CSSProperties = { fontFamily: "var(--font-raleway), Helvetica, sans-serif" };

// ── Data ──────────────────────────────────────────────────────────────────────
const NAV = ["Home", "Menu", "About", "Gallery", "Blog", "Contact"];

const SLIDES = [
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
    local: false,
  },
  {
    label: "OUR EXPERTISE",
    title: "EXOTIC\nDISHES",
    sub: "Crafted by world-renowned chefs for an unforgettable culinary experience that awakens every sense.",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=80",
    local: false,
  },
];

const MENU_LEFT = [
  { name: "PRAWN MASALA",         price: "$ 120", desc: "Tiger prawns in a rich coastal spice blend", star: true },
  { name: "GRILLED FISH CURRY",   price: "$ 95",  desc: "Fresh catch in a tangy coconut gravy",       star: false },
  { name: "SQUID PEPPER FRY",     price: "$ 85",  desc: "Crispy squid tossed with black pepper",      star: false },
  { name: "LOBSTER THERMIDOR",    price: "$ 170", desc: "Whole lobster with herb-cream sauce",        star: true },
  { name: "CRAB BUTTER GARLIC",   price: "$ 140", desc: "Mud crab sautéed in garlic butter",          star: false },
];

const MENU_RIGHT = [
  { name: "COCONUT PANNA COTTA",  price: "$ 80",  desc: "Silky coconut cream with mango coulis",     star: false },
  { name: "DARK CHOCOLATE TART",  price: "$ 90",  desc: "Bitter chocolate ganache, sea salt crust",  star: true },
  { name: "CARDAMOM KHEER",       price: "$ 75",  desc: "Slow-cooked rice pudding, saffron milk",    star: false },
  { name: "GULAB JAMUN",          price: "$ 70",  desc: "Rose syrup dumplings, pistachio cream",     star: false },
  { name: "CHEF'S DESSERT",       price: "$ 110", desc: "Seasonal creation from our pastry team",    star: true },
];

const TIMELINE = [
  { year: "1989", title: "THE BEGINNINGS",  desc: "A small outdoor cafe opens in Hyderabad, built on a love for fresh coastal food.", pos: "below" },
  { year: "1995", title: "FIRST AWARD",     desc: "Kava Cafe wins Best New Restaurant at the South India Food Awards.", pos: "above" },
  { year: "2001", title: "NEW LOCATION",    desc: "We move to our current home — a lush garden space with open-air dining.", pos: "below" },
  { year: "2010", title: "CHEF'S VISION",   desc: "Our head chef joins and introduces the signature coastal tasting menu.", pos: "above" },
  { year: "2024", title: "MODERN KAVA",     desc: "A full renovation brings the iconic red gate and geometric brand to life.", pos: "below" },
];

const TESTIMONIALS = [
  { quote: "THE LOBSTER THERMIDOR WAS UNLIKE ANYTHING I HAVE TASTED. KAVA CAFE SETS A NEW STANDARD FOR COASTAL FINE DINING IN THE CITY.", author: "PAULINE PARKS", role: "Food Critic" },
  { quote: "EVERY DETAIL — FROM THE GARDEN SETTING TO THE LAST DESSERT — FELT CONSIDERED AND MEMORABLE. A TRULY SPECIAL DINING EXPERIENCE.", author: "KIEREN BURNETT", role: "Gourmet Magazine" },
];

const IG = [
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
  "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80",
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80",
  "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&q=80",
  "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&q=80",
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80",
];

const PARTNERS = [
  "Natural Hand Made", "Classical Signature", "Sauvignon Blanc",
  "Olive & Co.", "Olives Ltd.", "Premium M",
];

const FOOTER_LINKS = ["Our Story", "The Menu", "Reservations", "Private Dining", "Gift Cards", "Gallery", "Press"];

const SOCIALS = [
  { label: "Facebook",  d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
  { label: "Twitter",   d: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
  { label: "Instagram", d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
  { label: "Pinterest", d: "M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" },
];

// ── Sub-components ─────────────────────────────────────────────────────────────


// Geometric square pair accent — echoes logo icon boxes
function GeoAccent({ color = G.gold }: { color?: string }) {
  return (
    <div style={{ display: "inline-flex", gap: "4px", alignItems: "center", marginBottom: "0.9rem" }}>
      {[0, 1].map((i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14">
          <rect x="0.8" y="0.8" width="12.4" height="12.4" fill="none" stroke={color} strokeWidth="1.5"/>
          {i === 0
            ? <polyline points="10,3 5,7 10,11" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="square" strokeLinejoin="miter"/>
            : <polyline points="4,3 9,7 4,11" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="square" strokeLinejoin="miter"/>
          }
        </svg>
      ))}
    </div>
  );
}

function GoldLabel({ text, light = false }: { text: string; light?: boolean }) {
  const c = light ? "rgba(228,220,210,0.7)" : G.gold;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginBottom: "0.85rem" }}>
      <GeoAccent color={c} />
      <p style={{ ...sans, color: c, fontSize: "0.68rem", letterSpacing: "0.38em", textTransform: "uppercase", fontWeight: 600, margin: 0 }}>{text}</p>
    </div>
  );
}

function Diamond({ size = 10, color = G.gold }: { size?: number; color?: string }) {
  return <span style={{ display: "inline-block", width: size, height: size, background: color, transform: "rotate(45deg)", flexShrink: 0 }} />;
}

function MenuRow({ name, price, desc, star }: { name: string; price: string; desc: string; star: boolean }) {
  return (
    <div style={{ marginBottom: "1.4rem" }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: "0.25rem" }}>
        {star && <span style={{ color: G.gold, fontSize: "0.7rem", marginRight: "0.25rem", flexShrink: 0 }}>★</span>}
        <span style={{ ...sans, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.1em", color: G.dark, flex: 1 }}>{name}</span>
        <span style={{ borderBottom: `1px dotted rgba(0,0,0,0.2)`, flex: "1 1 20px", margin: "0 0.5rem 3px", minWidth: 10 }} />
        <span style={{ ...sans, fontSize: "0.78rem", fontWeight: 600, color: G.dark, flexShrink: 0 }}>{price}</span>
      </div>
      <p style={{ ...sans, fontSize: "0.78rem", color: "#a09070", marginTop: "0.2rem", paddingLeft: star ? "1rem" : 0 }}>{desc}</p>
    </div>
  );
}

// ── Main page ──────────────────────────────────────────────────────────────────

export default function Home() {
  const [slide, setSlide]   = useState(0);
  const [tIdx, setTIdx]     = useState(0);
  const [mOpen, setMOpen]   = useState(false);

  const prev = () => setSlide((s) => (s - 1 + 3) % 3);
  const next = () => setSlide((s) => (s + 1) % 3);

  const arrowBtn: React.CSSProperties = {
    background: "none", border: "none", cursor: "pointer", padding: "0.5rem",
    color: "rgba(255,255,255,0.5)", fontSize: "1.3rem", transition: "color 0.3s",
  };

  return (
    <>
      {/* ════ HEADER ════════════════════════════════════════════════════════════ */}
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, background: G.green, borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "1.1rem 2.5rem", display: "flex", alignItems: "center", gap: "3rem" }}>

          {/* Logo */}
          <a href="#" style={{ textDecoration: "none", flexShrink: 0, lineHeight: 0 }}>
            <Image src="/Kava.jpg" alt="Kava Cafe" width={68} height={68} style={{ display: "block" }} priority />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex" style={{ gap: "2.5rem", alignItems: "center", flex: 1 }}>
            {NAV.map((l, i) => (
              <div key={l} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <a href={`#${l.toLowerCase()}`}
                  style={{ ...sans, fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600, color: "rgba(255,255,255,0.85)", textDecoration: "none", transition: "color 0.3s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = G.gold)}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.85)")}
                >{l}</a>
                {i === 0 && <Diamond size={6} />}
              </div>
            ))}
          </nav>

          {/* Phone */}
          <a href="tel:+4466789011" className="hidden md:block"
            style={{ ...sans, fontSize: "0.78rem", letterSpacing: "0.12em", color: "rgba(255,255,255,0.7)", textDecoration: "none", flexShrink: 0 }}
          >+44 66 789 011</a>

          {/* Hamburger */}
          <button onClick={() => setMOpen((o) => !o)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", display: "flex", flexDirection: "column", gap: "5px" }}
            aria-label="Menu"
          >
            <span style={{ display: "block", width: "22px", height: "1.5px", background: "rgba(255,255,255,0.7)", transition: "all 0.3s", transform: mOpen ? "rotate(45deg) translateY(6.5px)" : "none" }} />
            <span style={{ display: "block", width: "22px", height: "1.5px", background: "rgba(255,255,255,0.7)", transition: "all 0.3s", opacity: mOpen ? 0 : 1 }} />
            <span style={{ display: "block", width: "22px", height: "1.5px", background: "rgba(255,255,255,0.7)", transition: "all 0.3s", transform: mOpen ? "rotate(-45deg) translateY(-6.5px)" : "none" }} />
          </button>
        </div>

        {/* Mobile drawer */}
        <div style={{ overflow: "hidden", maxHeight: mOpen ? "400px" : "0", transition: "max-height 0.4s ease", borderTop: mOpen ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
          <nav style={{ padding: "1.5rem 2.5rem 2rem", display: "flex", flexDirection: "column", gap: "1.25rem", background: G.green2 }}>
            {NAV.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMOpen(false)}
                style={{ ...sans, color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.78rem", letterSpacing: "0.16em", textTransform: "uppercase" }}
              >{l}</a>
            ))}
          </nav>
        </div>
      </header>

      {/* ════ HERO + BOOKING (all dark green) ══════════════════════════════════ */}
      <div style={{ background: G.green, paddingTop: "72px" }}>
        {/* Split hero */}
        <div style={{ display: "grid", gridTemplateColumns: "38% 62%", minHeight: "calc(100vh - 72px - 100px)" }}>

          {/* Left: text */}
          <div style={{ padding: "4rem 3.5rem 3rem 3.5rem", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative" }}>
            {/* Prev arrow */}
            <button onClick={prev} style={{ ...arrowBtn, position: "absolute", left: "1.5rem", top: "50%", transform: "translateY(-50%)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = G.gold)}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)")}
            >←</button>

            <p style={{ ...sans, color: "rgba(255,255,255,0.45)", fontSize: "0.68rem", letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: "1.5rem", animation: "fadeIn 0.8s ease" }}>
              {SLIDES[slide].label}
            </p>
            <h1 key={slide} style={{ ...serif, color: G.white, fontSize: "clamp(5rem, 9vw, 9rem)", fontWeight: 300, lineHeight: 0.92, whiteSpace: "pre-line", textTransform: "uppercase", marginBottom: "2rem", animation: "fadeUp 0.8s ease both" }}>
              {SLIDES[slide].title}
            </h1>
            <p style={{ ...sans, color: "rgba(255,255,255,0.55)", fontSize: "0.88rem", lineHeight: 1.85, maxWidth: "380px", marginBottom: "2.5rem", animation: "fadeUp 1s ease both" }}>
              {SLIDES[slide].sub}
            </p>

            {/* Slide indicators */}
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              {[0, 1, 2].map((i) => (
                <button key={i} onClick={() => setSlide(i)} style={{ width: i === slide ? "28px" : "8px", height: "2px", background: i === slide ? G.gold : "rgba(255,255,255,0.22)", border: "none", cursor: "pointer", transition: "all 0.4s", padding: 0 }} />
              ))}
            </div>

            {/* Next arrow */}
            <button onClick={next} style={{ ...arrowBtn, position: "absolute", right: "1.5rem", top: "50%", transform: "translateY(-50%)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = G.gold)}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)")}
            >→</button>
          </div>

          {/* Right: image */}
          <div style={{ position: "relative", overflow: "hidden" }}>
            {SLIDES.map((s, i) => (
              <div key={i} style={{ position: "absolute", inset: 0, opacity: slide === i ? 1 : 0, transition: "opacity 1.4s ease-in-out" }}>
                <Image src={s.img} alt="" fill sizes="62vw" style={{ objectFit: "cover" }} priority={i === 0} />
              </div>
            ))}
          </div>
        </div>

        {/* ── Booking strip ── */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", padding: "1.75rem 3.5rem" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "2rem" }}>
            <div style={{ flexShrink: 0, minWidth: 180 }}>
              <h3 style={{ ...serif, color: G.white, fontSize: "1.6rem", fontWeight: 400, marginBottom: "0.25rem" }}>BOOK A TABLE</h3>
              <p style={{ ...sans, color: "rgba(255,255,255,0.35)", fontSize: "0.72rem", letterSpacing: "0.05em" }}>*powered by OpenTable</p>
            </div>
            <div style={{ flex: 1, display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
              <select className="b-select" style={{ flex: "1 1 140px" }}>
                {[1,2,3,4,5,6,7,8,9,10].map((n) => <option key={n}>{n} {n === 1 ? "Person" : "Persons"}</option>)}
              </select>
              <select className="b-select" style={{ flex: "1 1 160px" }}>
                {["06.30.2026","07.01.2026","07.02.2026","07.03.2026","07.04.2026"].map((d) => <option key={d}>{d}</option>)}
              </select>
              <select className="b-select" style={{ flex: "1 1 140px" }}>
                {["11:00 am","11:30 am","12:00 pm","12:30 pm","1:00 pm","7:00 pm","7:30 pm","8:00 pm","8:30 pm","9:00 pm"].map((t) => <option key={t}>{t}</option>)}
              </select>
              <button
                style={{ ...sans, background: G.gold, color: G.white, border: "none", padding: "0.85rem 2rem", fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: "0.6rem", transition: "opacity 0.3s", flexShrink: 0 }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.82")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
              >
                <Diamond size={8} color={G.white} /> SUBMIT <Diamond size={8} color={G.white} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ════ CHEF'S STORY ══════════════════════════════════════════════════════ */}
      <section style={{ background: G.cream, padding: "7rem 2.5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "5rem", alignItems: "center" }}>
          <div>
            <GoldLabel text="Our Story" />
            <h2 style={{ ...serif, fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 400, color: G.dark, lineHeight: 1.15, marginBottom: "1.5rem" }}>
              The Chef&apos;s<br />Secrets
            </h2>
            <p style={{ ...sans, fontSize: "0.9rem", color: "#8c7a5e", lineHeight: 1.95, marginBottom: "1.25rem" }}>
              Each dish at KavaCafe begins with a simple obsession: the finest ingredients, treated with the deepest respect. Our head chef brings decades of Michelin-starred experience to every plate, transforming humble seafood into extraordinary experiences.
            </p>
            <p style={{ ...sans, fontSize: "0.9rem", color: "#8c7a5e", lineHeight: 1.95, marginBottom: "2.5rem" }}>
              From the morning catch to the evening service, we partner with local fishermen and artisan producers to ensure every ingredient tells a story of provenance and passion.
            </p>
            <a href="#menu"
              style={{ ...sans, color: G.dark, textDecoration: "none", fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, borderBottom: `1px solid ${G.gold}`, paddingBottom: "4px", display: "inline-flex", alignItems: "center", gap: "0.5rem", transition: "color 0.3s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = G.gold)}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = G.dark)}
            >Read More →</a>
          </div>
          <div style={{ position: "relative", aspectRatio: "4/5", overflow: "hidden" }}>
            <Image src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80" alt="Chef" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* ════ MENU ══════════════════════════════════════════════════════════════ */}
      <section id="menu" style={{ background: G.cream, padding: "5rem 2.5rem 7rem" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", display: "grid", gridTemplateColumns: "auto 1fr 1fr", gap: "4rem", alignItems: "start" }}>

          {/* Arch image */}
          <div style={{ flexShrink: 0, position: "relative", width: 260, margin: "0 auto" }}>
            <div style={{
              width: 260, height: 380,
              borderRadius: "130px 130px 0 0",
              overflow: "hidden",
              border: `2px solid ${G.gold}`,
              position: "relative",
            }}>
              <Image src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&q=80" alt="Chef cooking" fill sizes="260px" style={{ objectFit: "cover" }} />
            </div>
            {/* Badge seal */}
            <div style={{
              position: "absolute", bottom: -28, left: "50%", transform: "translateX(-50%)",
              width: 64, height: 64, borderRadius: "50%",
              border: `2px solid ${G.gold}`,
              background: G.cream,
              display: "flex", alignItems: "center", justifyContent: "center",
              zIndex: 2,
            }}>
              <span style={{ ...serif, fontSize: "0.55rem", color: G.gold, fontStyle: "italic", textAlign: "center", lineHeight: 1.2 }}>Kava<br />Cafe</span>
            </div>
          </div>

          {/* Entrées column */}
          <div>
            <GoldLabel text="Special Taste" />
            <h2 style={{ ...serif, fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 400, color: G.dark, marginBottom: "2rem", textTransform: "uppercase", letterSpacing: "0.03em" }}>
              Selected Menu
            </h2>
            {MENU_LEFT.map((item) => <MenuRow key={item.name} {...item} />)}
          </div>

          {/* Desserts column */}
          <div>
            <GoldLabel text="Extraordinary" />
            <h2 style={{ ...serif, fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 400, color: G.dark, marginBottom: "2rem", textTransform: "uppercase", letterSpacing: "0.03em" }}>
              Sweet Pleasure
            </h2>
            {MENU_RIGHT.map((item) => <MenuRow key={item.name} {...item} />)}
          </div>
        </div>
      </section>

      {/* ════ TIMELINE ══════════════════════════════════════════════════════════ */}
      <section style={{ background: "#faf6ee", padding: "6rem 2.5rem" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <GoldLabel text="Our History" />
            <h2 style={{ ...serif, fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: G.dark }}>Decades of Passion</h2>
          </div>

          {/* Timeline */}
          <div className="tl-grid" style={{ display: "flex", position: "relative" }}>
            {/* Gold horizontal line */}
            <div className="tl-line" style={{ position: "absolute", left: 0, right: 0, top: "50%", height: "1px", background: G.gold, zIndex: 0 }} />

            {TIMELINE.map((item, i) => {
              const above = item.pos === "above";
              return (
                <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 1 }}>
                  {/* Top content */}
                  <div style={{ height: 180, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 0.75rem 1.25rem", textAlign: "center", visibility: above ? "visible" : "hidden" }}>
                    <p style={{ ...sans, color: G.gold, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", marginBottom: "0.35rem" }}>{item.year}</p>
                    <h3 style={{ ...serif, fontSize: "1.05rem", fontWeight: 600, color: G.dark, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>{item.title}</h3>
                    <p style={{ ...sans, fontSize: "0.76rem", color: "#a09070", lineHeight: 1.65 }}>{item.desc}</p>
                  </div>
                  {/* Diamond on line */}
                  <div style={{ width: 14, height: 14, background: G.gold, transform: "rotate(45deg)", flexShrink: 0, zIndex: 2 }} />
                  {/* Bottom content */}
                  <div style={{ flex: 1, padding: "1.25rem 0.75rem 0", textAlign: "center", visibility: above ? "hidden" : "visible" }}>
                    <p style={{ ...sans, color: G.gold, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", marginBottom: "0.35rem" }}>{item.year}</p>
                    <h3 style={{ ...serif, fontSize: "1.05rem", fontWeight: 600, color: G.dark, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>{item.title}</h3>
                    <p style={{ ...sans, fontSize: "0.76rem", color: "#a09070", lineHeight: 1.65 }}>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════ TESTIMONIALS ══════════════════════════════════════════════════════ */}
      <section style={{ background: G.cream, padding: "7rem 2.5rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center", position: "relative" }}>
          {/* Quote mark outlines */}
          <div style={{ ...serif, fontSize: "7rem", lineHeight: 1, color: "transparent", WebkitTextStroke: `1.5px ${G.gold}`, letterSpacing: "-0.05em", marginBottom: "1.5rem", userSelect: "none" }}>
            &rdquo;
          </div>

          <p key={tIdx} style={{ ...serif, fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)", fontWeight: 700, color: G.dark, textTransform: "uppercase", letterSpacing: "0.08em", lineHeight: 1.55, marginBottom: "2.5rem", animation: "fadeIn 0.6s ease" }}>
            {TESTIMONIALS[tIdx].quote}
          </p>
          <p style={{ ...sans, color: G.gold, fontSize: "0.75rem", letterSpacing: "0.3em", fontWeight: 700, textTransform: "uppercase", marginBottom: "0.4rem" }}>
            {TESTIMONIALS[tIdx].author}
          </p>
          <p style={{ ...sans, color: "#a09070", fontSize: "0.82rem" }}>{TESTIMONIALS[tIdx].role}</p>

          {/* Arrows */}
          <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "55%", left: "-3rem", right: "-3rem", transform: "translateY(-50%)", pointerEvents: "none" }}>
            {[{ fn: () => setTIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length), dir: "←" },
              { fn: () => setTIdx((i) => (i + 1) % TESTIMONIALS.length), dir: "→" }].map(({ fn, dir }) => (
              <button key={dir} onClick={fn}
                style={{ ...sans, background: "none", border: "none", cursor: "pointer", fontSize: "1.1rem", color: "rgba(0,0,0,0.25)", transition: "color 0.3s", padding: "0.5rem", pointerEvents: "all" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = G.gold)}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(0,0,0,0.25)")}
              >{dir}</button>
            ))}
          </div>
        </div>
      </section>

      {/* ════ PARTNER LOGOS ═════════════════════════════════════════════════════ */}
      <section style={{ background: G.cream, padding: "3.5rem 2.5rem 5rem", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "3rem" }}>
            {PARTNERS.map((name) => (
              <div key={name}
                style={{ width: 110, height: 110, borderRadius: "50%", border: `1.5px solid rgba(184,150,90,0.4)`, display: "flex", alignItems: "center", justifyContent: "center", padding: "0.75rem", opacity: 0.55, transition: "all 0.35s", cursor: "default" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.borderColor = G.gold; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.55"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(184,150,90,0.4)"; }}
              >
                <span style={{ ...serif, fontSize: "0.72rem", color: G.gold, textAlign: "center", lineHeight: 1.4, fontStyle: "italic" }}>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ NEWSLETTER ════════════════════════════════════════════════════════ */}
      <section style={{ background: G.white, padding: "6rem 2.5rem" }}>
        <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
          <GoldLabel text="Stay In Touch" />
          <h2 style={{ ...serif, fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: G.dark, marginBottom: "1rem" }}>Stay Updated</h2>
          <p style={{ ...sans, fontSize: "0.88rem", color: "#a09070", lineHeight: 1.8, marginBottom: "2.5rem" }}>
            Subscribe for seasonal menus and exclusive events
          </p>
          <div style={{ display: "flex", border: "1px solid rgba(0,0,0,0.12)" }}>
            <input type="email" placeholder="Your email address"
              style={{ ...sans, flex: 1, border: "none", padding: "14px 18px", fontSize: "0.84rem", outline: "none", color: G.dark, background: "transparent", minWidth: 0 }}
            />
            <button style={{ ...sans, background: G.gold, color: G.white, border: "none", padding: "14px 24px", fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600, cursor: "pointer", transition: "opacity 0.3s", flexShrink: 0 }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.82")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            >Subscribe</button>
          </div>
        </div>
      </section>

      {/* ════ INSTAGRAM GRID ════════════════════════════════════════════════════ */}
      <section>
        <div className="instagram-grid">
          {IG.map((src, i) => (
            <div key={i} className="ig-item" style={{ position: "relative", aspectRatio: "1", overflow: "hidden" }}>
              <Image src={src} alt={`Food ${i + 1}`} fill sizes="(max-width:640px) 33vw, 16vw" className="ig-img" style={{ objectFit: "cover", transition: "transform 0.5s ease" }} />
              <div className="ig-overlay" style={{ position: "absolute", inset: 0, background: `rgba(30,58,47,0.65)`, display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "opacity 0.35s" }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill={G.gold}>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════ FOOTER ════════════════════════════════════════════════════════════ */}
      <footer style={{ background: G.green, padding: "5.5rem 2.5rem 0" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "4rem", paddingBottom: "4rem" }}>

          {/* Brand */}
          <div>
            <a href="#" style={{ textDecoration: "none", display: "inline-block", lineHeight: 0 }}>
              <Image src="/Kava.jpg" alt="Kava Cafe" width={90} height={90} style={{ display: "block" }} />
            </a>
            <p style={{ ...sans, color: "rgba(255,255,255,0.35)", fontSize: "0.84rem", lineHeight: 1.9, marginTop: "1rem", maxWidth: 250 }}>
              A sanctuary for the discerning palate. Fine dining inspired by the ocean&apos;s finest offerings.
            </p>
            <div style={{ display: "flex", gap: "0.7rem", marginTop: "1.5rem" }}>
              {SOCIALS.map(({ label, d }) => (
                <a key={label} href="#" aria-label={label}
                  style={{ width: 32, height: 32, border: "1px solid rgba(255,255,255,0.12)", borderRadius: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.3)", transition: "all 0.3s", textDecoration: "none" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = G.gold; (e.currentTarget as HTMLElement).style.color = G.gold; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.3)"; }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d={d} /></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ ...sans, color: G.white, fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700, marginBottom: "1.5rem" }}>Quick Links</h4>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {FOOTER_LINKS.map((l) => (
                <a key={l} href="#"
                  style={{ ...sans, color: "rgba(255,255,255,0.35)", textDecoration: "none", fontSize: "0.84rem", transition: "color 0.3s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = G.gold)}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.35)")}
                >{l}</a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ ...sans, color: G.white, fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700, marginBottom: "1.5rem" }}>Find Us</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <p style={{ ...sans, color: "rgba(255,255,255,0.35)", fontSize: "0.84rem", lineHeight: 1.8 }}>116 Irvington Ave<br />NJ 07079, USA</p>
              <p style={{ ...sans, color: "rgba(255,255,255,0.35)", fontSize: "0.84rem" }}>+44 66 789 011</p>
              <div>
                <p style={{ ...sans, color: "rgba(255,255,255,0.28)", fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.4rem" }}>Hours</p>
                <p style={{ ...sans, color: "rgba(255,255,255,0.35)", fontSize: "0.84rem", lineHeight: 1.8 }}>Mon – Fri: 12pm – 11pm<br />Sat – Sun: 11am – 12am</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: `1px solid rgba(184,150,90,0.22)`, padding: "1.75rem 0", textAlign: "center" }}>
          <p style={{ ...sans, color: "rgba(255,255,255,0.2)", fontSize: "0.76rem", letterSpacing: "0.05em" }}>
            © {new Date().getFullYear()} KavaCafe. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
