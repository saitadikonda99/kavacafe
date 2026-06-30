import { P } from "@/lib/theme";

interface DiamondProps {
  size?: number;
  color?: string;
}

export function Diamond({ size = 10, color = P.gold }: DiamondProps) {
  return (
    <span
      aria-hidden="true"
      style={{
        display: "inline-block",
        width: size,
        height: size,
        background: color,
        transform: "rotate(45deg)",
        flexShrink: 0,
      }}
    />
  );
}
