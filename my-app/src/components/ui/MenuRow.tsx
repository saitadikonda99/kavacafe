import { P, sans } from "@/lib/theme";
import type { MenuItem } from "@/types";

export function MenuRow({ name, price, desc, star }: MenuItem) {
  return (
    <div style={{ marginBottom: "1.6rem" }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: "0.25rem" }}>
        {star && (
          <span aria-hidden="true" style={{ color: P.gold, fontSize: "0.7rem", marginRight: "0.3rem", flexShrink: 0, lineHeight: 1 }}>
            ★
          </span>
        )}
        <span style={{ ...sans, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.1em", color: P.dark, flex: "0 1 auto", minWidth: 0 }}>
          {name}
        </span>
        <span
          aria-hidden="true"
          style={{ borderBottom: "1px dotted rgba(0,0,0,0.22)", flex: "1 1 auto", margin: "0 0.5rem 4px", minWidth: 16 }}
        />
        <span style={{ ...sans, fontSize: "0.78rem", fontWeight: 600, color: P.dark, flexShrink: 0, whiteSpace: "nowrap" }}>
          {price}
        </span>
      </div>
      <p style={{ ...sans, fontSize: "0.76rem", color: "#a09070", marginTop: "0.25rem", lineHeight: 1.6, paddingLeft: star ? "1.1rem" : 0 }}>
        {desc}
      </p>
    </div>
  );
}
