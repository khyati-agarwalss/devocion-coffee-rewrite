"use client";
import { useState, useEffect, useRef } from "react";

const HONEY_AMBER = "#C8873A";
const CREAM = "#F5EFE0";
const ESPRESSO = "#1A0F08";
const WARM_WHITE = "#FAF7F2";

const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
};

const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(32px)",
      transition: `opacity 0.85s ease ${delay}s, transform 0.85s ease ${delay}s`
    }}>
      {children}
    </div>
  );
};

const Divider = () => (
  <div style={{ display: "flex", alignItems: "center", gap: "16px", margin: "40px 0" }}>
    <div style={{ flex: 1, height: "1px", background: `linear-gradient(to right, transparent, ${HONEY_AMBER}40)` }} />
    <div style={{ width: 6, height: 6, borderRadius: "50%", background: HONEY_AMBER }} />
    <div style={{ flex: 1, height: "1px", background: `linear-gradient(to left, transparent, ${HONEY_AMBER}40)` }} />
  </div>
);

const GrainOverlay = () => (
  <svg style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", opacity: 0.03, zIndex: 999 }}>
    <filter id="grain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
    <rect width="100%" height="100%" filter="url(#grain)" />
  </svg>
);

export default function HoneyProductPage() {
  const [grind, setGrind] = useState("Whole Bean");
  const [qty, setQty] = useState(1);
  const [subActive, setSubActive] = useState(true);
  const [freq, setFreq] = useState("2 weeks");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const grindOptions = ["Whole Bean", "Espresso", "Pour Over", "French Press", "Chemex", "Aeropress", "Auto Drip", "Cold Brew", "Moka Pot"];
  const freqOptions = ["1 week", "2 weeks", "3 weeks", "4 weeks", "6 weeks", "8 weeks"];

  const styles = {
    page: { fontFamily: "'Georgia', 'Times New Roman', serif", background: WARM_WHITE, color: ESPRESSO, overflowX: "hidden" },

    // HERO
    hero: { position: "relative", height: "100vh", minHeight: 700, display: "flex", overflow: "hidden", background: ESPRESSO },
    heroLeft: { flex: 1, position: "relative", overflow: "hidden" },
    heroImg: {
      width: "100%", height: "100%", objectFit: "cover", objectPosition: "center",
      transform: `scale(1.08) translateY(${scrollY * 0.12}px)`,
      transition: "transform 0.1s linear",
      filter: "brightness(0.75) saturate(1.2)"
    },
    heroOverlay: {
      position: "absolute", inset: 0,
      background: `linear-gradient(to right, ${ESPRESSO}60 0%, transparent 60%), linear-gradient(to top, ${ESPRESSO}80 0%, transparent 50%)`
    },
    heroRight: {
      width: "46%", display: "flex", flexDirection: "column", justifyContent: "center",
      padding: "80px 64px", background: ESPRESSO, position: "relative", zIndex: 2
    },
    heroEyebrow: { fontFamily: "'Courier New', monospace", fontSize: 11, letterSpacing: "0.25em", color: HONEY_AMBER, textTransform: "uppercase", marginBottom: 24 },
    heroTitle: { fontSize: "clamp(52px, 5vw, 80px)", fontWeight: 400, color: CREAM, lineHeight: 0.95, margin: "0 0 28px" },
    heroTagline: { fontSize: 17, lineHeight: 1.65, color: "#A89880", margin: "0 0 40px", fontStyle: "italic" },
    heroBadge: {
      display: "inline-flex", alignItems: "center", gap: 10,
      border: `1px solid ${HONEY_AMBER}50`, borderRadius: 2,
      padding: "10px 18px", color: CREAM, fontSize: 13, letterSpacing: "0.08em"
    },
    heroBadgeDot: { width: 6, height: 6, borderRadius: "50%", background: HONEY_AMBER, animation: "pulse 2s infinite" },

    // PROBLEM SECTION
    problem: { background: CREAM, padding: "120px 8vw", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" },
    sectionLabel: { fontFamily: "'Courier New', monospace", fontSize: 10, letterSpacing: "0.3em", color: HONEY_AMBER, textTransform: "uppercase", marginBottom: 20 },
    problemHeadline: { fontSize: "clamp(36px, 3.5vw, 56px)", fontWeight: 400, lineHeight: 1.1, margin: "0 0 32px" },
    problemBody: { fontSize: 17, lineHeight: 1.85, color: "#4A3828", maxWidth: 480 },
    statBlock: { padding: "48px", background: ESPRESSO, borderRadius: 2, position: "relative", overflow: "hidden" },
    statNumber: { fontSize: 88, fontWeight: 400, color: HONEY_AMBER, lineHeight: 1, margin: "0 0 8px" },
    statLabel: { fontSize: 14, color: "#A89880", letterSpacing: "0.15em", textTransform: "uppercase" },
    statSub: { fontSize: 15, color: "#7A6050", marginTop: 24, lineHeight: 1.7 },

    // VISION SECTION
    vision: { background: ESPRESSO, padding: "140px 8vw", textAlign: "center", position: "relative", overflow: "hidden" },
    visionCircle: {
      position: "absolute", width: 600, height: 600, borderRadius: "50%",
      background: `radial-gradient(circle, ${HONEY_AMBER}15 0%, transparent 70%)`,
      top: "50%", left: "50%", transform: "translate(-50%, -50%)", pointerEvents: "none"
    },
    visionQ: { fontSize: "clamp(36px, 5vw, 68px)", fontWeight: 400, color: CREAM, lineHeight: 1.2, margin: "0 auto 40px", maxWidth: 700, fontStyle: "italic" },
    visionSub: { fontSize: 18, color: "#A89880", maxWidth: 520, margin: "0 auto", lineHeight: 1.8 },

    // PROOF SECTION
    proof: { background: WARM_WHITE, padding: "120px 8vw" },
    proofGrid: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2, marginTop: 64 },
    proofCard: { background: CREAM, padding: "40px 32px", borderTop: `3px solid ${HONEY_AMBER}` },
    proofCardLabel: { fontFamily: "'Courier New', monospace", fontSize: 10, letterSpacing: "0.25em", color: HONEY_AMBER, textTransform: "uppercase", marginBottom: 16 },
    proofCardValue: { fontSize: 28, fontWeight: 400, color: ESPRESSO, marginBottom: 10, lineHeight: 1.2 },
    proofCardSub: { fontSize: 13, color: "#7A6050", lineHeight: 1.6 },

    // PRODUCT SECTION  
    product: { background: CREAM, padding: "120px 8vw", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "100px", alignItems: "start" },
    productImg: { width: "100%", borderRadius: 2, aspectRatio: "4/5", objectFit: "cover", position: "sticky", top: 80 },
    productEyebrow: { fontFamily: "'Courier New', monospace", fontSize: 10, letterSpacing: "0.3em", color: HONEY_AMBER, textTransform: "uppercase", marginBottom: 16 },
    productTitle: { fontSize: 52, fontWeight: 400, color: ESPRESSO, margin: "0 0 8px", lineHeight: 1 },
    productNotes: { fontSize: 16, color: "#7A6050", marginBottom: 40, fontStyle: "italic" },
    productPrice: { fontSize: 32, color: ESPRESSO, marginBottom: 40, fontWeight: 400 },
    label: { fontFamily: "'Courier New', monospace", fontSize: 10, letterSpacing: "0.25em", color: "#9A7A60", textTransform: "uppercase", marginBottom: 12, display: "block" },

    // Grind selector
    grindGrid: { display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 },
    grindBtn: (active) => ({
      padding: "8px 16px", border: `1px solid ${active ? ESPRESSO : "#C8B89880"}`,
      background: active ? ESPRESSO : "transparent", color: active ? CREAM : ESPRESSO,
      fontSize: 12, letterSpacing: "0.1em", cursor: "pointer", transition: "all 0.2s",
      fontFamily: "inherit"
    }),

    // Qty
    qtyRow: { display: "flex", alignItems: "center", gap: 0, marginBottom: 32, width: 120 },
    qtyBtn: { width: 40, height: 40, background: "transparent", border: `1px solid ${ESPRESSO}50`, color: ESPRESSO, fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" },
    qtyNum: { width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${ESPRESSO}50`, borderLeft: "none", borderRight: "none", fontSize: 15 },

    // CTA
    ctaBtn: { width: "100%", padding: "18px", background: ESPRESSO, color: CREAM, border: "none", fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", cursor: "pointer", marginBottom: 12, fontFamily: "inherit", transition: "background 0.2s" },
    subToggle: { display: "flex", gap: 0, marginBottom: 24, border: `1px solid ${ESPRESSO}30` },
    subBtn: (active) => ({ flex: 1, padding: "12px", background: active ? ESPRESSO : "transparent", color: active ? CREAM : ESPRESSO, border: "none", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", cursor: "pointer", fontFamily: "inherit", transition: "all 0.2s" }),

    // Flavor notes
    notes: { display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 },
    noteRow: { display: "flex", alignItems: "center", gap: 16 },
    noteLabel: { fontSize: 12, color: "#7A6050", width: 100, letterSpacing: "0.08em" },
    noteBar: { flex: 1, height: 2, background: "#C8B89840", position: "relative" },
    noteFill: (pct) => ({ position: "absolute", left: 0, top: 0, height: "100%", width: `${pct}%`, background: HONEY_AMBER }),

    // HONEST SECTION
    honest: { background: ESPRESSO, padding: "120px 8vw", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 },
    honestTitle: { fontSize: "clamp(32px, 3.5vw, 52px)", fontWeight: 400, color: CREAM, lineHeight: 1.15, marginBottom: 32 },
    honestBody: { fontSize: 16, color: "#A89880", lineHeight: 1.85 },
    notForBox: { padding: 40, border: `1px solid #A8988040`, marginTop: 0 },
    notForLabel: { fontFamily: "'Courier New', monospace", fontSize: 10, letterSpacing: "0.3em", color: "#A89880", textTransform: "uppercase", marginBottom: 24 },
    notForItem: { display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 20, color: "#7A6050", fontSize: 15, lineHeight: 1.6 },
    yesItem: { display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 20, color: CREAM, fontSize: 15, lineHeight: 1.6 },

    // CLOSING SECTION
    closing: { background: CREAM, padding: "160px 8vw", textAlign: "center", position: "relative", overflow: "hidden" },
    closingTitle: { fontSize: "clamp(42px, 5vw, 72px)", fontWeight: 400, color: ESPRESSO, lineHeight: 1.1, margin: "0 auto 32px", maxWidth: 640 },
    closingSub: { fontSize: 18, color: "#7A6050", maxWidth: 480, margin: "0 auto 56px", lineHeight: 1.8, fontStyle: "italic" },
    closingCta: { display: "inline-flex", alignItems: "center", gap: 16, background: ESPRESSO, color: CREAM, padding: "20px 48px", fontSize: 12, letterSpacing: "0.25em", textTransform: "uppercase", cursor: "pointer", border: "none", fontFamily: "inherit" },
  };

  return (
    <div style={styles.page}>
      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: ${HONEY_AMBER}80; }
      `}</style>
      <GrainOverlay />

      {/* ── SECTION 1: HERO / HOOK ── */}
      <section style={styles.hero}>
        <div style={styles.heroLeft}>
          <img
            src="https://www.devocion.com/cdn/shop/files/Honey-12oz-Devocion-45102948.png?v=1746657596"
            alt="Honey Coffee"
            style={styles.heroImg}
          />
          <div style={styles.heroOverlay} />
          <div style={{ position: "absolute", bottom: 48, left: 48, right: 48 }}>
            <div style={{ fontFamily: "'Courier New', monospace", fontSize: 11, letterSpacing: "0.25em", color: HONEY_AMBER, textTransform: "uppercase", marginBottom: 16 }}>
              Colombia · Light Roast · 12oz
            </div>
            <div style={{ height: 1, background: `${HONEY_AMBER}40`, maxWidth: 240 }} />
          </div>
        </div>

        <div style={styles.heroRight}>
          <div style={{ animation: "fadeSlideIn 1s ease forwards" }}>
            <div style={styles.heroEyebrow}>House Blend · Signature</div>
            <h1 style={styles.heroTitle}>Honey.</h1>
            <p style={styles.heroTagline}>
              Colombia's most balanced cup — honey-sweet, syrupy, and roasted to order the week you drink it.
            </p>
            <div style={{ marginBottom: 48 }}>
              {["Honey", "Orange Blossom", "Caramel", "Eucalyptus"].map((note, i) => (
                <span key={note} style={{
                  display: "inline-block", marginRight: 12, marginBottom: 10,
                  padding: "6px 14px", border: `1px solid ${HONEY_AMBER}40`,
                  color: "#C8B890", fontSize: 12, letterSpacing: "0.12em",
                  fontFamily: "'Courier New', monospace"
                }}>{note}</span>
              ))}
            </div>
            <div style={styles.heroBadge}>
              <div style={styles.heroBadgeDot} />
              <span style={{ fontFamily: "'Courier New', monospace", fontSize: 11, letterSpacing: "0.2em" }}>
                Farm to cup in 10 days
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: PROBLEM STORY ── */}
      <section style={styles.problem}>
        <FadeIn>
          <div style={styles.sectionLabel}>The Problem</div>
          <h2 style={styles.problemHeadline}>Most coffee arrives already dead.</h2>
          <p style={styles.problemBody}>
            Harvested months ago. Warehoused somewhere in a port. Passed through an importer.
            Sitting on a shelf. By the time it hits your grinder, the flavors that made it special
            are already ghosts.
          </p>
          <br />
          <p style={styles.problemBody}>
            You've been drinking the <em>memory</em> of great coffee. Not the real thing.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div style={styles.statBlock}>
            <div style={{ position: "absolute", top: 0, right: 0, width: 200, height: 200, borderRadius: "50%", background: `radial-gradient(circle, ${HONEY_AMBER}20 0%, transparent 70%)`, transform: "translate(30%, -30%)" }} />
            <div style={styles.statNumber}>10</div>
            <div style={styles.statLabel}>Days, farm to cup</div>
            <div style={{ height: 1, background: `${HONEY_AMBER}30`, margin: "32px 0" }} />
            <div style={styles.statSub}>
              Only from farms in active harvest regions. Never warehoused beans.
              Never third-party importers. Fresh coffee — 365 days a year.
            </div>
            <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              {[["1,750m", "Altitude"], ["Washed", "Process"], ["Colombia", "Origin"], ["Light", "Roast"]].map(([v, l]) => (
                <div key={l}>
                  <div style={{ color: HONEY_AMBER, fontSize: 20, marginBottom: 4 }}>{v}</div>
                  <div style={{ color: "#5A4030", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "'Courier New', monospace" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── SECTION 3: VISION REFRAME ── */}
      <section style={styles.vision}>
        <div style={styles.visionCircle} />
        <FadeIn>
          <div style={{ fontFamily: "'Courier New', monospace", fontSize: 10, letterSpacing: "0.3em", color: HONEY_AMBER, textTransform: "uppercase", marginBottom: 32 }}>The Difference</div>
          <h2 style={styles.visionQ}>"What if your coffee arrived still alive?"</h2>
          <p style={styles.visionSub}>
            Not "fresh-ish." Not "roasted recently." But genuinely alive — picked at peak harvest,
            roasted the week you ordered, in your cup within 10 days of leaving Colombia.
          </p>
          <p style={{ ...styles.visionSub, marginTop: 24, color: HONEY_AMBER, fontSize: 20, fontStyle: "italic" }}>
            That changes what coffee can taste like.
          </p>
        </FadeIn>
      </section>

      {/* ── SECTION 4: PROOF LAYER ── */}
      <section style={styles.proof}>
        <FadeIn>
          <div style={styles.sectionLabel}>Devoción's Standard</div>
          <h2 style={{ fontSize: "clamp(32px, 3vw, 48px)", fontWeight: 400, margin: "0 0 0", maxWidth: 500, lineHeight: 1.2 }}>
            The infrastructure behind the cup.
          </h2>
        </FadeIn>
        <div style={styles.proofGrid}>
          {[
            { label: "Direct Sourcing", value: "Zero middlemen", sub: "Bought directly from producers across active harvest regions in Colombia." },
            { label: "Altitude", value: "1,750–1,850m", sub: "Grown at elevation for slower development, denser beans, and concentrated flavor." },
            { label: "Harvest Method", value: "Active Harvest", sub: "We only buy from regions currently harvesting. Never warehoused. Never stale." },
            { label: "Roasted", value: "Brooklyn, NY", sub: "Small-batch roasted to order. Your bag ships within days of roasting." },
          ].map(({ label, value, sub }, i) => (
            <FadeIn key={label} delay={i * 0.1}>
              <div style={styles.proofCard}>
                <div style={styles.proofCardLabel}>{label}</div>
                <div style={styles.proofCardValue}>{value}</div>
                <div style={styles.proofCardSub}>{sub}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── SECTION 5: PRODUCT DETAIL + PURCHASE ── */}
      <section style={styles.product}>
        <div>
          <img
            src="https://www.devocion.com/cdn/shop/files/Honey-12oz-Devocion-45102948.png?v=1746657596"
            alt="Honey bag"
            style={styles.productImg}
          />
        </div>
        <div>
          <FadeIn>
            <div style={styles.productEyebrow}>Devoción · House Blend</div>
            <h2 style={styles.productTitle}>Honey</h2>
            <p style={styles.productNotes}>Honey · Orange Blossom · Caramel · Eucalyptus</p>

            {/* Flavor Note Bars */}
            <div style={styles.notes}>
              {[["Sweetness", 85], ["Acidity", 45], ["Body", 75], ["Complexity", 70]].map(([name, pct]) => (
                <div key={name} style={styles.noteRow}>
                  <div style={styles.noteLabel}>{name}</div>
                  <div style={styles.noteBar}>
                    <div style={styles.noteFill(pct)} />
                  </div>
                  <div style={{ fontSize: 11, color: "#9A7A60", width: 28, textAlign: "right" }}>{pct}</div>
                </div>
              ))}
            </div>

            <Divider />

            <p style={styles.productPrice}>$24.20 <span style={{ fontSize: 14, color: "#9A7A60", fontFamily: "'Courier New', monospace" }}>/ 12oz (~15 cups)</span></p>

            {/* Subscribe Toggle */}
            <div style={styles.subToggle}>
              <button style={styles.subBtn(subActive)} onClick={() => setSubActive(true)}>Subscribe & Save</button>
              <button style={styles.subBtn(!subActive)} onClick={() => setSubActive(false)}>One-Time</button>
            </div>

            {subActive && (
              <div style={{ marginBottom: 24 }}>
                <span style={styles.label}>Delivery Frequency</span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {freqOptions.map(f => (
                    <button key={f} style={styles.grindBtn(freq === f)} onClick={() => setFreq(f)}>
                      Every {f}
                    </button>
                  ))}
                </div>
                <div style={{ marginTop: 16, fontSize: 12, color: "#9A7A60", fontFamily: "'Courier New', monospace", letterSpacing: "0.1em" }}>
                  ✦ Free shipping · Earn rewards · Never run out
                </div>
              </div>
            )}

            {/* Grind */}
            <span style={styles.label}>Grind Type</span>
            <div style={styles.grindGrid}>
              {grindOptions.map(g => (
                <button key={g} style={styles.grindBtn(grind === g)} onClick={() => setGrind(g)}>{g}</button>
              ))}
            </div>

            {/* Qty */}
            <span style={styles.label}>Quantity</span>
            <div style={styles.qtyRow}>
              <button style={styles.qtyBtn} onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
              <div style={styles.qtyNum}>{qty}</div>
              <button style={styles.qtyBtn} onClick={() => setQty(qty + 1)}>+</button>
            </div>

            <button style={styles.ctaBtn}
              onMouseEnter={e => e.target.style.background = HONEY_AMBER}
              onMouseLeave={e => e.target.style.background = ESPRESSO}>
              {subActive ? `Subscribe · Every ${freq}` : "Add to Cart"}
            </button>

            <Divider />

            {/* Coffee Specs */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px 40px" }}>
              {[
                ["Process", "Washed"], ["Variety", "Various"],
                ["Region", "Active Harvest Regions"], ["Altitude", "1,750–1,850 m"],
                ["Roast", "Light"], ["Origin", "Colombia"],
              ].map(([k, v]) => (
                <div key={k}>
                  <div style={{ fontFamily: "'Courier New', monospace", fontSize: 9, letterSpacing: "0.25em", color: HONEY_AMBER, textTransform: "uppercase", marginBottom: 6 }}>{k}</div>
                  <div style={{ fontSize: 14, color: ESPRESSO }}>{v}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 6: HONEST TRADE ── */}
      <section style={styles.honest}>
        <FadeIn>
          <div style={{ fontFamily: "'Courier New', monospace", fontSize: 10, letterSpacing: "0.3em", color: HONEY_AMBER, textTransform: "uppercase", marginBottom: 24 }}>
            Honest About What This Is
          </div>
          <h2 style={styles.honestTitle}>This isn't the coffee for everyone.</h2>
          <p style={styles.honestBody}>
            No chocolatey bitterness. No aggressive kick. No dark roast comfort. If bold and roasty
            is what you need in the morning, this bag will genuinely confuse you.
          </p>
          <p style={{ ...styles.honestBody, marginTop: 24, color: CREAM }}>
            But if you've ever wondered why café coffee hits differently than what you make at home
            — this is probably why.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <div style={{ ...styles.notForBox, borderBottom: "none" }}>
              <div style={styles.notForLabel}>Not For You If...</div>
              {[
                "You want dark, roasty, and familiar",
                "Predictable bitterness is your comfort",
                "You brew on autopilot and don't really taste it"
              ].map(t => (
                <div key={t} style={styles.notForItem}>
                  <span style={{ color: "#5A4030", marginTop: 2 }}>×</span>
                  <span>{t}</span>
                </div>
              ))}
            </div>
            <div style={{ ...styles.notForBox, borderTop: "none", background: `${HONEY_AMBER}15` }}>
              <div style={{ ...styles.notForLabel, color: HONEY_AMBER }}>Built For You If...</div>
              {[
                "You want to actually taste what you're drinking",
                "You're curious why specialty coffee costs more",
                "You want milk-friendly espresso that also shines black"
              ].map(t => (
                <div key={t} style={styles.yesItem}>
                  <span style={{ color: HONEY_AMBER, marginTop: 2 }}>✦</span>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── SECTION 7: CLOSING INVITATION ── */}
      <section style={styles.closing}>
        <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(circle, ${HONEY_AMBER}10 0%, transparent 70%)`, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
        <FadeIn>
          <div style={{ fontFamily: "'Courier New', monospace", fontSize: 10, letterSpacing: "0.3em", color: HONEY_AMBER, textTransform: "uppercase", marginBottom: 40 }}>
            Welcome Home
          </div>
          <h2 style={styles.closingTitle}>
            Some people drink coffee. Some people actually taste it.
          </h2>
          <p style={styles.closingSub}>
            Honey is for the second kind.
          </p>
          <button style={styles.closingCta}
            onMouseEnter={e => e.target.style.background = HONEY_AMBER}
            onMouseLeave={e => e.target.style.background = ESPRESSO}>
            Order Honey — $24.20
          </button>
          <div style={{ marginTop: 32, fontSize: 12, color: "#A89880", fontFamily: "'Courier New', monospace", letterSpacing: "0.15em" }}>
            Free shipping on subscriptions · Roasted to order · Ships within days
          </div>
        </FadeIn>
      </section>
    </div>
  );
}