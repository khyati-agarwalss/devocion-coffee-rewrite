import FadeIn from "@/components/FadeIn";

const NOT_FOR = [
  "You need it in 48 hours",
  "You want keyword density over story",
  "You already have a voice and just need filling in",
  "Budget is the first question you ask",
];

const BUILT_FOR = [
  "You have a product worth believing in",
  "You're tired of descriptions that sound like everyone else's",
  "You understand that great copy is an asset, not a cost",
  "You want buyers to feel something",
];

export default function HonestSection() {
  return (
    <section
      className="section"
      style={{
        background: "var(--ink)",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: 80,
        alignItems: "start",
      }}
    >
      {/* Left: copy */}
      <FadeIn>
        <span className="eyebrow">Honest about this</span>
        <h2
          className="serif"
          style={{
            fontSize: "clamp(32px, 3.5vw, 52px)",
            fontWeight: 400,
            color: "var(--parchment)",
            lineHeight: 1.15,
            marginBottom: 32,
          }}
        >
          This isn&apos;t for every brand.
        </h2>
        <p
          style={{
            fontSize: 16,
            color: "var(--text-muted)",
            lineHeight: 1.85,
            marginBottom: 24,
          }}
        >
          If you want five descriptions by Friday, this isn&apos;t it. If you want
          keyword-stuffed SEO copy that ranks but reads like a robot, this isn&apos;t it
          either.
        </p>
        <p
          style={{
            fontSize: 16,
            color: "var(--gold-light)",
            lineHeight: 1.85,
          }}
        >
          Story-driven copy takes research. It takes understanding why your product
          exists, who it&apos;s for, and what changes when someone uses it. That takes
          time. And it&apos;s worth it.
        </p>
      </FadeIn>

      {/* Right: two panels */}
      <FadeIn delay={0.2}>
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {/* Not for */}
          <div
            style={{
              padding: 36,
              border: "1px solid #3a2a18",
            }}
          >
            <span
              className="mono"
              style={{
                fontSize: 9,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#4a3828",
                display: "block",
                marginBottom: 24,
              }}
            >
              Not for you if...
            </span>
            {NOT_FOR.map((text) => (
              <div
                key={text}
                style={{
                  display: "flex",
                  gap: 16,
                  marginBottom: 16,
                  color: "#4a3828",
                  fontSize: 14,
                  lineHeight: 1.6,
                  alignItems: "flex-start",
                }}
              >
                <span style={{ color: "#3a2a18", marginTop: 3, flexShrink: 0 }}>×</span>
                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* Built for */}
          <div
            style={{
              padding: 36,
              border: "1px solid #3a2a18",
              background: "var(--ink-faint)",
            }}
          >
            <span
              className="mono"
              style={{
                fontSize: 9,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--gold)",
                display: "block",
                marginBottom: 24,
              }}
            >
              Built for you if...
            </span>
            {BUILT_FOR.map((text) => (
              <div
                key={text}
                style={{
                  display: "flex",
                  gap: 16,
                  marginBottom: 16,
                  color: "var(--gold-light)",
                  fontSize: 14,
                  lineHeight: 1.6,
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    color: "var(--gold)",
                    marginTop: 3,
                    flexShrink: 0,
                  }}
                >
                  ✦
                </span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
