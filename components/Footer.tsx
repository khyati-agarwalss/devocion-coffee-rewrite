export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--ink-deep)",
        padding: "32px 8vw",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 16,
      }}
    >
      <span
        className="serif"
        style={{ fontSize: 16, color: "#3a2a18" }}
      >
        The Origin Brief
      </span>
      <span
        className="mono"
        style={{
          fontSize: 10,
          color: "#2a1a10",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
        }}
      >
        Story-driven product copy
      </span>
    </footer>
  );
}
