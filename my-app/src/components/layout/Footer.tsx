"use client";

import Image from "next/image";
import { P, sans } from "@/lib/theme";
import { FOOTER_LINKS, SOCIALS } from "@/lib/constants";

export function Footer() {
  return (
    <footer style={{ background: P.green }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "5.5rem 2.5rem 0" }}>
        <div className="footer-grid">
          {/* Brand column */}
          <div>
            <a href="/" style={{ textDecoration: "none", display: "inline-block", lineHeight: 0, marginBottom: "1.25rem" }}>
              <Image src="/Kava.jpg" alt="Kava Cafe" width={90} height={90} style={{ display: "block" }} />
            </a>
            <p style={{ ...sans, color: "rgba(255,255,255,0.4)", fontSize: "0.84rem", lineHeight: 1.9, maxWidth: 260 }}>
              A sanctuary for the discerning palate. Fine dining inspired by the ocean&apos;s finest offerings.
            </p>
            <div style={{ display: "flex", gap: "0.6rem", marginTop: "1.75rem", flexWrap: "wrap" }}>
              {SOCIALS.map(({ label, d }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  style={{
                    width: 34,
                    height: 34,
                    border: "1px solid rgba(255,255,255,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.3)",
                    transition: "all 0.3s",
                    textDecoration: "none",
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = P.gold;
                    (e.currentTarget as HTMLElement).style.color = P.gold;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.3)";
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links column */}
          <div>
            <h4
              style={{
                ...sans,
                color: P.white,
                fontSize: "0.65rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontWeight: 700,
                marginBottom: "1.5rem",
              }}
            >
              Quick Links
            </h4>
            <nav aria-label="Footer navigation" style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    ...sans,
                    color: "rgba(255,255,255,0.4)",
                    textDecoration: "none",
                    fontSize: "0.84rem",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = P.gold)}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)")}
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact column */}
          <div>
            <h4
              style={{
                ...sans,
                color: P.white,
                fontSize: "0.65rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontWeight: 700,
                marginBottom: "1.5rem",
              }}
            >
              Find Us
            </h4>
            <address style={{ fontStyle: "normal", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <p style={{ ...sans, color: "rgba(255,255,255,0.4)", fontSize: "0.84rem", lineHeight: 1.85, margin: 0 }}>
                Jasti Venkata Ratnam St<br />Opposite Manor Food Plaza<br />Labbipet, Vijayawada<br />Andhra Pradesh 520010
              </p>
              <a
                href="tel:+18916688999"
                style={{ ...sans, color: "rgba(255,255,255,0.4)", fontSize: "0.84rem", textDecoration: "none", transition: "color 0.3s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = P.gold)}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)")}
              >
                891 668 8999
              </a>
              <div>
                <p
                  style={{
                    ...sans,
                    color: "rgba(255,255,255,0.28)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    marginBottom: "0.4rem",
                  }}
                >
                  Hours
                </p>
                <p style={{ ...sans, color: "rgba(255,255,255,0.4)", fontSize: "0.84rem", lineHeight: 1.85, margin: 0 }}>
                  Mon & Sat: 7am – 11pm<br />Tue – Fri & Sun: 10am – 11pm
                </p>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: `1px solid rgba(184,150,90,0.2)`,
          marginTop: 0,
          padding: "1.75rem 2.5rem",
          textAlign: "center",
        }}
      >
        <p style={{ ...sans, color: "rgba(255,255,255,0.22)", fontSize: "0.76rem", letterSpacing: "0.06em", margin: 0 }}>
          © {new Date().getFullYear()} Kava Cafe. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
