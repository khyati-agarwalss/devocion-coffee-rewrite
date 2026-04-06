"use client";

import FadeIn from "@/components/FadeIn";

// Replace with your actual email address
const EMAIL = "hello@theoriginbrief.com";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="section"
      style={{
        background: "var(--ink)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background watermark */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          opacity: 0.03,
        }}
      >
        <span
          className="serif"
          style={{
            fontSize: "60vw",
            color: "var(--parchment)",
            lineHeight: 0.8,
            userSelect: "none",
          }}
        >
          ob
        </span>
      </div>

      <FadeIn
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 640,
          margin: "0 auto",
        }}
      >
        <span className="eyebrow" style={{ color: "var(--gold)" }}>
          Let&apos;s begin
        </span>

        <h2
          className="serif"
          style={{
            fontSize: "clamp(42px, 5.5vw, 72px)",
            color: "var(--parchment)",
            fontWeight: 400,
            lineHeight: 1.05,
            marginBottom: 32,
          }}
        >
          Your product deserves a story it can be proud of.
        </h2>

        <p
          style={{
            fontSize: 17,
            color: "var(--text-muted)",
            lineHeight: 1.8,
            marginBottom: 56,
            fontStyle: "italic",
          }}
        >
          The Origin Brief is currently accepting a small number of new projects.
          If your product has a story that hasn&apos;t been told yet — let&apos;s find it.
        </p>

        <a href={`mailto:${EMAIL}`}>
          <button
            style={{
              background: "transparent",
              border: "1px solid var(--gold)",
              color: "var(--gold)",
              padding: "20px 56px",
              fontSize: 12,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              cursor: "pointer",
              fontFamily: "var(--font-dm-sans), sans-serif",
              transition: "all 0.25s",
            }}
            onMouseEnter={(e) => {
              const btn = e.currentTarget;
              btn.style.background = "var(--gold)";
              btn.style.color = "var(--ink)";
            }}
            onMouseLeave={(e) => {
              const btn = e.currentTarget;
              btn.style.background = "transparent";
              btn.style.color = "var(--gold)";
            }}
          >
            Start the conversation
          </button>
        </a>

        <div style={{ marginTop: 24 }}>
          <a
            href={`mailto:${EMAIL}`}
            className="mono"
            style={{
              fontSize: 12,
              color: "#4a3828",
              letterSpacing: "0.1em",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "#4a3828")
            }
          >
            {EMAIL}
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
