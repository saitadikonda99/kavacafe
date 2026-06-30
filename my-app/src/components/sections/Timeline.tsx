import { P, serif, sans } from "@/lib/theme";
import { GoldLabel } from "@/components/ui/GoldLabel";
import { TIMELINE } from "@/lib/constants";

export function Timeline() {
  return (
    <section style={{ background: "#f5f0e8", padding: "7rem 2.5rem" }}>
      <div style={{ maxWidth: 1340, margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <GoldLabel text="Our History" center />
          <h2
            style={{
              ...serif,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: P.dark,
              lineHeight: 1.1,
            }}
          >
            Decades of Passion
          </h2>
        </div>

        {/* Desktop timeline */}
        <div className="tl-grid" style={{ display: "flex", position: "relative" }}>
          {/* Horizontal gold line */}
          <div
            className="tl-line"
            aria-hidden="true"
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: "50%",
              height: 1,
              background: P.gold,
              zIndex: 0,
            }}
          />

          {TIMELINE.map((item, i) => {
            const above = item.pos === "above";
            return (
              <div
                key={i}
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                  zIndex: 1,
                  minWidth: 0,
                }}
              >
                {/* Content above line */}
                <div
                  style={{
                    height: 200,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: "0 0.75rem 1.5rem",
                    textAlign: "center",
                    visibility: above ? "visible" : "hidden",
                  }}
                >
                  <p style={{ ...sans, color: P.gold, fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", marginBottom: "0.35rem" }}>
                    {item.year}
                  </p>
                  <h3 style={{ ...serif, fontSize: "1rem", fontWeight: 600, color: P.dark, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "0.5rem", lineHeight: 1.2 }}>
                    {item.title}
                  </h3>
                  <p style={{ ...sans, fontSize: "0.74rem", color: "#a09070", lineHeight: 1.7 }}>
                    {item.desc}
                  </p>
                </div>

                {/* Diamond marker on the line */}
                <div
                  aria-hidden="true"
                  style={{
                    width: 14,
                    height: 14,
                    background: P.gold,
                    transform: "rotate(45deg)",
                    flexShrink: 0,
                    zIndex: 2,
                  }}
                />

                {/* Content below line */}
                <div
                  style={{
                    flex: 1,
                    padding: "1.5rem 0.75rem 0",
                    textAlign: "center",
                    visibility: above ? "hidden" : "visible",
                  }}
                >
                  <p style={{ ...sans, color: P.gold, fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", marginBottom: "0.35rem" }}>
                    {item.year}
                  </p>
                  <h3 style={{ ...serif, fontSize: "1rem", fontWeight: 600, color: P.dark, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "0.5rem", lineHeight: 1.2 }}>
                    {item.title}
                  </h3>
                  <p style={{ ...sans, fontSize: "0.74rem", color: "#a09070", lineHeight: 1.7 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
