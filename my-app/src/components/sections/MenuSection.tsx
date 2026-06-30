import Image from "next/image";
import { P, serif, sans } from "@/lib/theme";
import { GoldLabel } from "@/components/ui/GoldLabel";
import { MenuRow } from "@/components/ui/MenuRow";
import { MENU_LEFT, MENU_RIGHT } from "@/lib/constants";

export function MenuSection() {
  return (
    <section id="menu" style={{ background: P.cream, padding: "5rem 2.5rem 8rem" }}>
      <div style={{ maxWidth: 1340, margin: "0 auto" }}>
        <div className="menu-grid">
          {/* Arch image */}
          <div className="menu-arch" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  width: 260,
                  height: 380,
                  borderRadius: "130px 130px 0 0",
                  overflow: "hidden",
                  border: `2px solid ${P.gold}`,
                  position: "relative",
                  flexShrink: 0,
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&q=80"
                  alt="Chef cooking"
                  fill
                  sizes="260px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              {/* Badge — absolutely anchored to the bottom of the arch */}
              <div
                style={{
                  position: "absolute",
                  bottom: -32,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  border: `2px solid ${P.gold}`,
                  background: P.cream,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 2,
                }}
              >
                <span style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "0.55rem", color: P.gold, fontStyle: "italic", textAlign: "center", lineHeight: 1.3 }}>
                  Kava<br />Cafe
                </span>
              </div>
            </div>
          </div>

          {/* Entrées column */}
          <div>
            <GoldLabel text="Special Taste" />
            <h2
              style={{
                ...serif,
                fontSize: "clamp(1.7rem, 2.5vw, 2.6rem)",
                fontWeight: 400,
                color: P.dark,
                marginBottom: "2.25rem",
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                lineHeight: 1.1,
              }}
            >
              Selected Menu
            </h2>
            {MENU_LEFT.map((item) => (
              <MenuRow key={item.name} {...item} />
            ))}
          </div>

          {/* Desserts column */}
          <div>
            <GoldLabel text="Extraordinary" />
            <h2
              style={{
                ...serif,
                fontSize: "clamp(1.7rem, 2.5vw, 2.6rem)",
                fontWeight: 400,
                color: P.dark,
                marginBottom: "2.25rem",
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                lineHeight: 1.1,
              }}
            >
              Sweet Pleasure
            </h2>
            {MENU_RIGHT.map((item) => (
              <MenuRow key={item.name} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
