"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { P, serif, sans } from "@/lib/theme";
import { Diamond } from "@/components/ui/Diamond";
import { SLIDES } from "@/lib/constants";

const COUNT = SLIDES.length;
const INTERVAL_MS = 3000;

const DATES = ["06.30.2026", "07.01.2026", "07.02.2026", "07.03.2026", "07.04.2026"];
const TIMES = ["11:00 am", "11:30 am", "12:00 pm", "12:30 pm", "1:00 pm", "7:00 pm", "7:30 pm", "8:00 pm", "8:30 pm", "9:00 pm"];
const GUESTS = Array.from({ length: 10 }, (_, i) => `${i + 1} ${i === 0 ? "Person" : "Persons"}`);

export function HeroSection() {
  const [slide, setSlide] = useState(0);
  const pausedRef = useRef(false);

  // Single interval — always running, skips when hovered
  useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) {
        setSlide((s) => (s + 1) % COUNT);
      }
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const goTo = (i: number) => setSlide(i);

  const arrowStyle: React.CSSProperties = {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "0.5rem",
    color: "rgba(255,255,255,0.45)",
    fontSize: "1.25rem",
    lineHeight: 1,
    transition: "color 0.3s",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 2,
  };

  return (
    <div style={{ background: P.green, paddingTop: 72 }}>
      {/* ── Hero split — pauses auto-slide on hover ── */}
      <div
        className="hero-split"
        style={{ minHeight: "calc(100vh - 72px - 90px)" }}
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
      >
        {/* Left: text panel */}
        <div
          style={{
            padding: "4rem 3rem 3rem 4rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <button
            onClick={() => goTo((slide - 1 + COUNT) % COUNT)}
            aria-label="Previous slide"
            style={{ ...arrowStyle, left: "1rem" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = P.gold)}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)")}
          >
            ←
          </button>

          <p
            style={{
              ...sans,
              color: "rgba(255,255,255,0.4)",
              fontSize: "0.68rem",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
              animation: "fadeIn 0.8s ease",
            }}
          >
            {SLIDES[slide].label}
          </p>

          <h1
            key={`title-${slide}`}
            style={{
              ...serif,
              color: P.white,
              fontSize: "clamp(4.5rem, 8vw, 9rem)",
              fontWeight: 300,
              lineHeight: 0.92,
              whiteSpace: "pre-line",
              textTransform: "uppercase",
              marginBottom: "2rem",
              animation: "fadeUp 0.8s ease both",
            }}
          >
            {SLIDES[slide].title}
          </h1>

          <p
            style={{
              ...sans,
              color: "rgba(255,255,255,0.5)",
              fontSize: "0.88rem",
              lineHeight: 1.85,
              maxWidth: 380,
              marginBottom: "2.5rem",
              animation: "fadeUp 1s ease both",
            }}
          >
            {SLIDES[slide].sub}
          </p>

          {/* Slide indicators */}
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            {Array.from({ length: COUNT }, (_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                style={{
                  width: i === slide ? 28 : 8,
                  height: 2,
                  background: i === slide ? P.gold : "rgba(255,255,255,0.2)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.4s",
                  padding: 0,
                  flexShrink: 0,
                }}
              />
            ))}
          </div>

          <button
            onClick={() => goTo((slide + 1) % COUNT)}
            aria-label="Next slide"
            style={{ ...arrowStyle, right: "1rem" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = P.gold)}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)")}
          >
            →
          </button>
        </div>

        {/* Right: crossfade images */}
        <div className="hero-img-panel" style={{ position: "relative", overflow: "hidden" }}>
          {SLIDES.map((s, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                inset: 0,
                opacity: slide === i ? 1 : 0,
                transition: "opacity 1.4s ease-in-out",
              }}
            >
              <Image
                src={s.img}
                alt={s.label}
                fill
                sizes="62vw"
                style={{ objectFit: "cover" }}
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── Booking strip ── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="booking-inner" style={{ padding: "1.6rem 3.5rem" }}>
          {/* Label */}
          <div style={{ flexShrink: 0 }}>
            <h3 style={{ ...serif, color: P.white, fontSize: "1.55rem", fontWeight: 400, margin: 0, lineHeight: 1.1 }}>
              BOOK A TABLE
            </h3>
            <p style={{ ...sans, color: "rgba(255,255,255,0.3)", fontSize: "0.68rem", letterSpacing: "0.05em", marginTop: "0.3rem" }}>
              *powered by OpenTable
            </p>
          </div>

          {/* Fields */}
          <div className="booking-fields">
            <select className="b-select" defaultValue="" style={{ flex: "1 1 130px" }} aria-label="Number of guests">
              <option value="" disabled>Guests</option>
              {GUESTS.map((g) => <option key={g}>{g}</option>)}
            </select>
            <select className="b-select" defaultValue="" style={{ flex: "1 1 150px" }} aria-label="Date">
              <option value="" disabled>Date</option>
              {DATES.map((d) => <option key={d}>{d}</option>)}
            </select>
            <select className="b-select" defaultValue="" style={{ flex: "1 1 130px" }} aria-label="Time">
              <option value="" disabled>Time</option>
              {TIMES.map((t) => <option key={t}>{t}</option>)}
            </select>
            <button
              style={{
                ...sans,
                background: P.gold,
                color: P.white,
                border: "none",
                padding: "0.85rem 2rem",
                fontSize: "0.72rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                transition: "opacity 0.3s",
                flexShrink: 0,
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.82")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            >
              <Diamond size={7} color={P.white} />
              SUBMIT
              <Diamond size={7} color={P.white} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
