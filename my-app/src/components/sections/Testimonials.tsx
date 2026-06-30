"use client";

import { useState } from "react";
import { P, serif, sans } from "@/lib/theme";
import { TESTIMONIALS } from "@/lib/constants";

const COUNT = TESTIMONIALS.length;

export function Testimonials() {
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((i) => (i - 1 + COUNT) % COUNT);
  const next = () => setIdx((i) => (i + 1) % COUNT);

  const t = TESTIMONIALS[idx];

  const arrowBtn = (label: string, onClick: () => void, char: string): React.ReactNode => (
    <button
      onClick={onClick}
      aria-label={label}
      style={{
        ...sans,
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: "1.1rem",
        color: "rgba(0,0,0,0.22)",
        transition: "color 0.3s",
        padding: "0.5rem 0.75rem",
        flexShrink: 0,
        alignSelf: "center",
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = P.gold)}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(0,0,0,0.22)")}
    >
      {char}
    </button>
  );

  return (
    <section style={{ background: P.cream, padding: "8rem 2.5rem" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        {/* Row: arrow · content · arrow */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
          {arrowBtn("Previous testimonial", prev, "←")}

          {/* Centre content */}
          <div style={{ flex: 1, textAlign: "center" }}>
            {/* Large quote mark */}
            <div
              aria-hidden="true"
              style={{
                ...serif,
                fontSize: "8rem",
                lineHeight: 0.8,
                color: "transparent",
                WebkitTextStroke: `1.5px ${P.gold}`,
                marginBottom: "2rem",
                userSelect: "none",
              }}
            >
              &rdquo;
            </div>

            <blockquote style={{ margin: 0 }}>
              <p
                key={idx}
                style={{
                  ...serif,
                  fontSize: "clamp(1.1rem, 2.2vw, 1.55rem)",
                  fontWeight: 600,
                  color: P.dark,
                  textTransform: "uppercase",
                  letterSpacing: "0.07em",
                  lineHeight: 1.6,
                  marginBottom: "2.5rem",
                  animation: "fadeIn 0.6s ease",
                }}
              >
                {t.quote}
              </p>
              <footer>
                <p style={{ ...sans, color: P.gold, fontSize: "0.75rem", letterSpacing: "0.3em", fontWeight: 700, textTransform: "uppercase", marginBottom: "0.4rem" }}>
                  {t.author}
                </p>
                <p style={{ ...sans, color: "#a09070", fontSize: "0.82rem" }}>{t.role}</p>
              </footer>
            </blockquote>

            {/* Dot indicators */}
            <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "2.5rem" }}>
              {Array.from({ length: COUNT }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  style={{
                    width: i === idx ? 24 : 7,
                    height: 2,
                    background: i === idx ? P.gold : "rgba(0,0,0,0.18)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.35s",
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </div>

          {arrowBtn("Next testimonial", next, "→")}
        </div>
      </div>
    </section>
  );
}
