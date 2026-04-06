import FadeIn from "@/components/FadeIn";

export default function VisionSection() {
  return (
    <section
      className="section"
      style={{
        background: "var(--ink)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorative character */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          opacity: 0.04,
        }}
      >
        <span
          className="serif"
          style={{ fontSize: "40vw", color: "var(--parchment)", lineHeight: 1 }}
        >
          ∞
        </span>
      </div>

      <FadeIn style={{ position: "relative", zIndex: 2 }}>
        <span className="eyebrow" style={{ color: "var(--gold)" }}>
          The shift
        </span>
        <h2
          className="serif"
          style={{
            fontSize: "clamp(36px, 5vw, 64px)",
            color: "var(--parchment)",
            fontWeight: 400,
            lineHeight: 1.15,
            maxWidth: 720,
            margin: "0 auto 40px",
            fontStyle: "italic",
          }}
        >
          &ldquo;A great product description doesn&apos;t describe.
          <br />
          It transfers desire.&rdquo;
        </h2>
        <p
          style={{
            fontSize: 17,
            color: "var(--text-muted)",
            maxWidth: 520,
            margin: "0 auto",
            lineHeight: 1.85,
          }}
        >
          When you give a product its story — its origin, its problem, its stakes — you
          stop competing on price. You start competing on meaning.
        </p>
        <p
          className="serif"
          style={{
            fontSize: 22,
            color: "var(--gold)",
            marginTop: 40,
            fontStyle: "italic",
          }}
        >
          That changes everything.
        </p>
      </FadeIn>
    </section>
  );
}
