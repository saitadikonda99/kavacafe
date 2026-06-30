import { P, sans } from "@/lib/theme";

function GeoAccent({ color }: { color: string }) {
  return (
    <div style={{ display: "inline-flex", gap: "4px", alignItems: "center" }}>
      {([false, true] as const).map((flip, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
          <rect x="0.8" y="0.8" width="12.4" height="12.4" fill="none" stroke={color} strokeWidth="1.5" />
          {flip
            ? <polyline points="4,3 9,7 4,11" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="square" strokeLinejoin="miter" />
            : <polyline points="10,3 5,7 10,11" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="square" strokeLinejoin="miter" />
          }
        </svg>
      ))}
    </div>
  );
}

interface GoldLabelProps {
  text: string;
  light?: boolean;
  center?: boolean;
}

export function GoldLabel({ text, light = false, center = false }: GoldLabelProps) {
  const color = light ? "rgba(228,220,210,0.7)" : P.gold;
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: center ? "center" : "flex-start", gap: "0.65rem", marginBottom: "0.85rem" }}>
      <GeoAccent color={color} />
      <p style={{ ...sans, color, fontSize: "0.68rem", letterSpacing: "0.38em", textTransform: "uppercase", fontWeight: 600, margin: 0 }}>
        {text}
      </p>
    </div>
  );
}
