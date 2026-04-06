import FadeIn from "@/components/FadeIn";

const STEPS = [
  {
    num: "01",
    title: "You reach out",
    desc: "Tell me your product, your brand, and what you're trying to fix.",
  },
  {
    num: "02",
    title: "I dig in",
    desc: "I research your product, your customer, your category — before writing a word.",
  },
  {
    num: "03",
    title: "You receive a story",
    desc: "A complete description following the 7-move framework, ready to publish.",
  },
  {
    num: "04",
    title: "We refine",
    desc: "One or two revision rounds until it's exactly right.",
  },
];

export default function ProcessSection() {
  return (
    <section className="section" style={{ background: "var(--parchment-warm)" }}>
      <FadeIn>
        <div
          style={{
            textAlign: "center",
            maxWidth: 600,
            margin: "0 auto 80px",
          }}
        >
          <span className="eyebrow">How it works</span>
          <h2
            className="serif"
            style={{
              fontSize: "clamp(32px, 3.5vw, 48px)",
              fontWeight: 400,
              lineHeight: 1.1,
            }}
          >
            Simple. Fast. No confusion.
          </h2>
        </div>
      </FadeIn>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 2,
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        {STEPS.map(({ num, title, desc }, i) => (
          <FadeIn key={num} delay={i * 0.1}>
            <div style={{ textAlign: "center", padding: "40px 24px" }}>
              <div
                className="mono"
                style={{
                  fontSize: 28,
                  color: "var(--border-faint)",
                  marginBottom: 20,
                }}
              >
                {num}
              </div>
              <h3
                className="serif"
                style={{
                  fontSize: 18,
                  color: "var(--ink)",
                  marginBottom: 12,
                  fontWeight: 400,
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontSize: 13,
                  color: "var(--text-dim)",
                  lineHeight: 1.7,
                }}
              >
                {desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
