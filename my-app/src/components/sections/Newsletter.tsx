"use client";

import { P, serif, sans } from "@/lib/theme";
import { GoldLabel } from "@/components/ui/GoldLabel";

export function Newsletter() {
  return (
    <section style={{ background: P.white, padding: "7rem 2.5rem" }}>
      <div style={{ maxWidth: 540, margin: "0 auto", textAlign: "center" }}>
        <GoldLabel text="Stay In Touch" center />
        <h2
          style={{
            ...serif,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 400,
            color: P.dark,
            marginBottom: "1rem",
            lineHeight: 1.1,
          }}
        >
          Stay Updated
        </h2>
        <p
          style={{
            ...sans,
            fontSize: "0.88rem",
            color: "#a09070",
            lineHeight: 1.85,
            marginBottom: "2.5rem",
          }}
        >
          Subscribe for seasonal menus and exclusive events
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          style={{
            display: "flex",
            border: `1px solid rgba(0,0,0,0.12)`,
            overflow: "hidden",
          }}
        >
          <input
            type="email"
            placeholder="Your email address"
            required
            style={{
              ...sans,
              flex: 1,
              border: "none",
              padding: "14px 18px",
              fontSize: "0.84rem",
              outline: "none",
              color: P.dark,
              background: "transparent",
              minWidth: 0,
            }}
          />
          <button
            type="submit"
            style={{
              ...sans,
              background: P.gold,
              color: P.white,
              border: "none",
              padding: "14px 24px",
              fontSize: "0.68rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 600,
              cursor: "pointer",
              transition: "opacity 0.3s",
              flexShrink: 0,
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.82")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
