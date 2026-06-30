"use client";

import { P } from "@/lib/theme";
import { PARTNERS } from "@/lib/constants";

export function Partners() {
  return (
    <section style={{ background: P.cream, padding: "3rem 2.5rem 5rem", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="partners-row">
          {PARTNERS.map((name) => (
            <div
              key={name}
              style={{
                width: 110,
                height: 110,
                borderRadius: "50%",
                border: `1.5px solid rgba(184,150,90,0.35)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0.75rem",
                opacity: 0.5,
                transition: "all 0.35s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "1";
                (e.currentTarget as HTMLElement).style.borderColor = P.gold;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "0.5";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(184,150,90,0.35)";
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "0.7rem",
                  color: P.gold,
                  textAlign: "center",
                  lineHeight: 1.45,
                  fontStyle: "italic",
                }}
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
