"use client";

import Image from "next/image";
import { P, serif, sans } from "@/lib/theme";
import { GoldLabel } from "@/components/ui/GoldLabel";

export function ChefStory() {
  return (
    <section id="about" style={{ background: P.cream, padding: "8rem 2.5rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="chef-grid">
          {/* Text side */}
          <div style={{ maxWidth: 540 }}>
            <GoldLabel text="Our Story" />
            <h2
              style={{
                ...serif,
                fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                fontWeight: 400,
                color: P.dark,
                lineHeight: 1.12,
                marginBottom: "1.5rem",
              }}
            >
              The Chef&apos;s<br />Secrets
            </h2>
            <p
              style={{
                ...sans,
                fontSize: "0.9rem",
                color: "#8c7a5e",
                lineHeight: 1.95,
                marginBottom: "1.25rem",
              }}
            >
              Each dish at Kava Cafe begins with a simple obsession: the finest ingredients, treated with the deepest respect. Our head chef brings decades of experience to every plate, transforming fresh coastal seafood into extraordinary experiences.
            </p>
            <p
              style={{
                ...sans,
                fontSize: "0.9rem",
                color: "#8c7a5e",
                lineHeight: 1.95,
                marginBottom: "2.5rem",
              }}
            >
              From the morning catch to the evening service, we partner with local fishermen and artisan producers to ensure every ingredient tells a story of provenance and passion.
            </p>
            <a
              href="#menu"
              style={{
                ...sans,
                color: P.dark,
                textDecoration: "none",
                fontSize: "0.72rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontWeight: 700,
                borderBottom: `1px solid ${P.gold}`,
                paddingBottom: "4px",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = P.gold)}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = P.dark)}
            >
              Read More →
            </a>
          </div>

          {/* Image side */}
          <div
            style={{
              position: "relative",
              aspectRatio: "4/5",
              overflow: "hidden",
              minHeight: 320,
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80"
              alt="Chef preparing food"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
