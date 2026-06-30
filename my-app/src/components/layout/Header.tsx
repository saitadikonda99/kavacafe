"use client";

import { useState } from "react";
import Image from "next/image";
import { P, sans } from "@/lib/theme";
import { NAV } from "@/lib/constants";

export function Header() {
  const [mOpen, setMOpen] = useState(false);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: P.green,
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "0 2.5rem",
          height: 72,
          display: "flex",
          alignItems: "center",
          gap: "2.5rem",
        }}
      >
        {/* Logo */}
        <a href="/" style={{ textDecoration: "none", flexShrink: 0, lineHeight: 0, display: "block" }}>
          <Image src="/Kava.jpg" alt="Kava Cafe" width={60} height={60} style={{ display: "block" }} priority />
        </a>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex"
          style={{ gap: "2rem", alignItems: "center", flex: 1 }}
          aria-label="Main navigation"
        >
          {NAV.map((label, i) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "5px" }}>
              <a
                href={`#${label.toLowerCase()}`}
                style={{
                  ...sans,
                  fontSize: "0.7rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.85)",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = P.gold)}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.85)")}
              >
                {label}
              </a>
              {i === 0 && (
                <span
                  aria-hidden="true"
                  style={{
                    display: "block",
                    width: 5,
                    height: 5,
                    background: P.gold,
                    transform: "rotate(45deg)",
                  }}
                />
              )}
            </div>
          ))}
        </nav>

        {/* Phone – pushed to the right */}
        <a
          href="tel:+4466789011"
          className="hidden md:block"
          style={{
            ...sans,
            fontSize: "0.78rem",
            letterSpacing: "0.12em",
            color: "rgba(255,255,255,0.65)",
            textDecoration: "none",
            flexShrink: 0,
            marginLeft: "auto",
          }}
        >
          +44 66 789 011
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setMOpen((o) => !o)}
          aria-label={mOpen ? "Close menu" : "Open menu"}
          aria-expanded={mOpen}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "6px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "5px",
            marginLeft: "1rem",
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: 22,
                height: 1.5,
                background: "rgba(255,255,255,0.75)",
                transition: "all 0.3s ease",
                transform:
                  i === 0 && mOpen
                    ? "rotate(45deg) translate(4.5px, 4.5px)"
                    : i === 2 && mOpen
                    ? "rotate(-45deg) translate(4.5px, -4.5px)"
                    : "none",
                opacity: i === 1 && mOpen ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        style={{
          overflow: "hidden",
          maxHeight: mOpen ? "400px" : "0",
          transition: "max-height 0.4s ease",
        }}
      >
        <nav
          aria-label="Mobile navigation"
          style={{
            padding: "1.5rem 2.5rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            background: P.green2,
            borderTop: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {NAV.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              onClick={() => setMOpen(false)}
              style={{
                ...sans,
                color: "rgba(255,255,255,0.65)",
                textDecoration: "none",
                fontSize: "0.78rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
