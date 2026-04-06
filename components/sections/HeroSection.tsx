import FadeIn from "@/components/FadeIn";

export default function HeroSection() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        background: "var(--ink)",
        padding: "120px 8vw 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative large quote mark */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "55%",
          height: "100%",
          opacity: 0.06,
          pointerEvents: "none",
          userSelect: "none",
          overflow: "hidden",
        }}
      >
        <span
          className="serif"
          style={{
            fontSize: "28vw",
            lineHeight: 0.85,
            color: "var(--parchment)",
            display: "block",
            textAlign: "right",
            paddingTop: 40,
          }}
        >
          &ldquo;
        </span>
      </div>

      {/* Main copy */}
      <FadeIn style={{ position: "relative", zIndex: 2, maxWidth: 900 }}>
        <span className="eyebrow" style={{ color: "var(--gold)", marginBottom: 32 }}>
          Story-driven product copy
        </span>
        <h1
          className="serif"
          style={{
            fontSize: "clamp(48px, 7vw, 96px)",
            color: "var(--parchment)",
            lineHeight: 0.95,
            fontWeight: 400,
            marginBottom: 40,
          }}
        >
          Your product
          <br />
          has a story.
          <br />
          <em>Most descriptions
          <br />
          bury it.</em>
        </h1>
        <p
          style={{
            fontSize: 18,
            color: "var(--text-muted)",
            maxWidth: 480,
            lineHeight: 1.8,
          }}
        >
          I write product descriptions that don&apos;t just inform. They make the reader
          feel like they&apos;ve already missed out by not having it.
        </p>
      </FadeIn>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          right: "8vw",
          textAlign: "right",
        }}
      >
        <div
          className="mono"
          style={{
            fontSize: 10,
            letterSpacing: "0.2em",
            color: "#4a3828",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </div>
        <div
          style={{
            width: 1,
            height: 40,
            background: "#4a3828",
            margin: "8px auto 0",
          }}
        />
      </div>
    </section>
  );
}
