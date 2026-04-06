import FadeIn from "@/components/FadeIn";

const SERVICES = [
  {
    title: "Single Description",
    sub: "For one product that deserves the full treatment.",
    includes:
      "Discovery call · Research · One complete description using all 7 moves · One revision round",
    price: "Starts at $200",
    featured: false,
  },
  {
    title: "Product Suite",
    sub: "For a collection that needs a consistent voice and story system.",
    includes:
      "Brand story audit · Narrative framework · Up to 6 descriptions · Two revision rounds",
    price: "Starts at $900",
    featured: true,
  },
  {
    title: "Retainer",
    sub: "For brands that are always launching, always need to sound this good.",
    includes:
      "Monthly partnership · Priority turnaround · Ongoing refinement · Direct line",
    price: "Let's talk",
    featured: false,
  },
];

export default function ServicesSection() {
  return (
    <section className="section" style={{ background: "var(--parchment)" }}>
      <FadeIn>
        <span className="eyebrow">What I offer</span>
        <h2
          className="serif"
          style={{
            fontSize: "clamp(32px, 3.5vw, 48px)",
            fontWeight: 400,
            marginBottom: 64,
            maxWidth: 480,
            lineHeight: 1.1,
          }}
        >
          Three ways to work together.
        </h2>
      </FadeIn>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 32,
        }}
      >
        {SERVICES.map(({ title, sub, includes, price, featured }, i) => (
          <FadeIn key={title} delay={i * 0.1}>
            <div
              style={{
                padding: "48px 40px",
                border: featured
                  ? "2px solid var(--gold)"
                  : "1px solid var(--border-faint)",
                background: featured ? "var(--ink)" : "transparent",
                position: "relative",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {featured && (
                <span
                  className="mono"
                  style={{
                    fontSize: 9,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    display: "block",
                    marginBottom: 20,
                  }}
                >
                  Most popular
                </span>
              )}

              <h3
                className="serif"
                style={{
                  fontSize: 28,
                  color: featured ? "var(--parchment)" : "var(--ink)",
                  marginBottom: 8,
                  fontWeight: 400,
                }}
              >
                {title}
              </h3>

              <p
                style={{
                  fontSize: 14,
                  color: featured ? "var(--text-muted)" : "var(--text-dim)",
                  marginBottom: 32,
                  fontStyle: "italic",
                }}
              >
                {sub}
              </p>

              <div
                style={{
                  height: 1,
                  background: featured ? "#3a2a18" : "var(--border-faint)",
                  marginBottom: 32,
                }}
              />

              <p
                style={{
                  fontSize: 13,
                  color: featured ? "#6a5040" : "#9a8070",
                  lineHeight: 1.85,
                  marginBottom: 40,
                  flex: 1,
                }}
              >
                {includes}
              </p>

              <p
                className="serif"
                style={{
                  fontSize: 24,
                  color: featured ? "var(--gold)" : "var(--ink)",
                }}
              >
                {price}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
