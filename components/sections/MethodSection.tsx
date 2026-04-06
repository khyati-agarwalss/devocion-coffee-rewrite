import FadeIn from "@/components/FadeIn";

const MOVES = [
  {
    num: "01",
    title: "The Hook",
    desc: "One punchy line. Tells you what it is and why it matters — before you can scroll away.",
  },
  {
    num: "02",
    title: "The Problem Story",
    desc: "Make the reader feel the pain before you offer the cure. Specificity earns trust.",
  },
  {
    num: "03",
    title: "The Vision Reframe",
    desc: "Zoom out. Make the stakes enormous. Shift from feature to meaning.",
  },
  {
    num: "04",
    title: "The Proof Layer",
    desc: "Drop names, numbers, process. Brief and credible.",
  },
  {
    num: "05",
    title: "What You're Getting",
    desc: "Real details, written like a human — not a spec sheet.",
  },
  {
    num: "06",
    title: "The Honest Trade",
    desc: "Who this isn't for. The most underused move in copywriting.",
  },
  {
    num: "07",
    title: "The Invitation",
    desc: "End on identity, not benefits. Make the reader feel like they've arrived.",
  },
];

export default function MethodSection() {
  return (
    <section
      className="section"
      style={{ background: "var(--parchment-warm)" }}
    >
      <FadeIn>
        <span className="eyebrow">The method</span>
        <h2
          className="serif"
          style={{
            fontSize: "clamp(32px, 3.5vw, 48px)",
            fontWeight: 400,
            marginBottom: 16,
          }}
        >
          Seven moves. Every description.
        </h2>
        <p
          style={{
            fontSize: 16,
            color: "var(--text-dim)",
            maxWidth: 480,
            marginBottom: 64,
            lineHeight: 1.75,
          }}
        >
          Every piece I write follows a battle-tested narrative structure — the same one
          that makes great job postings, brand manifestos, and product launches
          impossible to scroll past.
        </p>
      </FadeIn>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 2,
        }}
      >
        {MOVES.map(({ num, title, desc }, i) => (
          <FadeIn key={num} delay={i * 0.07}>
            <div
              style={{
                background: "var(--ink)",
                padding: "36px 32px",
                borderTop: "3px solid var(--gold)",
                height: "100%",
              }}
            >
              <span
                className="mono"
                style={{
                  fontSize: 10,
                  color: "#4a3828",
                  letterSpacing: "0.2em",
                  display: "block",
                  marginBottom: 16,
                }}
              >
                {num}
              </span>
              <h3
                className="serif"
                style={{
                  fontSize: 20,
                  color: "var(--parchment)",
                  marginBottom: 12,
                  fontWeight: 400,
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontSize: 13,
                  color: "#6a5040",
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
