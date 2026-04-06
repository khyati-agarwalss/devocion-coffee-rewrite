"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "24px 8vw",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "var(--parchment)",
        borderBottom: "1px solid var(--border-faint)",
      }}
    >
      <span
        className="serif"
        style={{ fontSize: 20, letterSpacing: "-0.02em", color: "var(--ink)" }}
      >
        The Origin Brief
      </span>

      <Link href="#contact">
        <button
          style={{
            background: "var(--ink)",
            color: "var(--parchment)",
            border: "none",
            padding: "10px 24px",
            fontSize: 12,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            cursor: "pointer",
            fontFamily: "var(--font-dm-sans), sans-serif",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLButtonElement).style.background = "var(--gold)")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLButtonElement).style.background = "var(--ink)")
          }
        >
          Get in touch
        </button>
      </Link>
    </nav>
  );
}
