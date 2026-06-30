import Image from "next/image";
import { P } from "@/lib/theme";
import { IG_IMAGES } from "@/lib/constants";

export function InstagramGrid() {
  return (
    <section aria-label="Instagram gallery">
      <div className="instagram-grid">
        {IG_IMAGES.map((src, i) => (
          <div
            key={i}
            className="ig-item"
            style={{ position: "relative", aspectRatio: "1", overflow: "hidden" }}
          >
            <Image
              src={src}
              alt={`Gallery image ${i + 1}`}
              fill
              sizes="(max-width: 640px) 33vw, 16vw"
              className="ig-img"
              style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
            />
            <div
              className="ig-overlay"
              style={{
                position: "absolute",
                inset: 0,
                background: `rgba(38,56,48,0.65)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: 0,
                transition: "opacity 0.35s",
              }}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill={P.gold} aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
