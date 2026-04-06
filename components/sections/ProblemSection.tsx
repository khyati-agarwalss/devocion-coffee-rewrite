import FadeIn from "@/components/FadeIn";

export default function ProblemSection() {
  return (
    <section
      className="section"
      style={{
        background: "var(--parchment)",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "80px",
        alignItems: "center",
      }}
    >
      {/* Left: copy */}
      <FadeIn>
        <span className="eyebrow">The problem</span>
        <h2
          className="serif"
          style={{
            fontSize: "clamp(36px, 3.5vw, 52px)",
            fontWeight: 400,
            lineHeight: 1.1,
            marginBottom: 32,
          }}
        >
          Bullet points don&apos;t sell.
          <br />
          Feelings do.
        </h2>
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.85,
            color: "var(--text-ghost)",
            marginBottom: 24,
          }}
        >
          Most product pages look the same. Feature lists. Spec tables. &ldquo;Premium
          quality.&rdquo; &ldquo;Ethically sourced.&rdquo; Sentences that describe the
          product without ever making you <em>want</em> it.
        </p>
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.85,
            color: "var(--text-ghost)",
          }}
        >
          Visitors don&apos;t leave because they don&apos;t want your product. They leave
          because they never felt anything. And feelings are what trigger the buy.
        </p>
      </FadeIn>

      {/* Right: before/after */}
      <FadeIn delay={0.2}>
        <div
          style={{
            background: "var(--ink)",
            padding: 40,
            position: "relative",
          }}
        >
          {/* Gold dot accent */}
          <div
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "var(--gold)",
            }}
          />

          <span
            className="mono"
            style={{
              fontSize: 9,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#5a4028",
              display: "block",
              marginBottom: 24,
            }}
          >
            What most pages look like
          </span>
          <p
            style={{
              fontSize: 14,
              color: "#5a4028",
              lineHeight: 1.8,
              fontStyle: "italic",
            }}
          >
            &ldquo;Premium quality blend. Sourced from ethical farms. Notes of honey and
            caramel. 12oz bag. Light roast.&rdquo;
          </p>

          <div
            style={{
              height: 1,
              background: "#3a2a18",
              margin: "28px 0",
            }}
          />

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
            What it could say
          </span>
          <p
            style={{
              fontSize: 14,
              color: "var(--gold-light)",
              lineHeight: 1.8,
              fontStyle: "italic",
            }}
          >
            &ldquo;Most coffee you buy was harvested months ago. Warehoused. Passed
            through an importer. By the time it hits your grinder, the flavors are already
            ghosts. You&apos;ve been drinking the <em>memory</em> of great coffee.
            Not the real thing.&rdquo;
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
