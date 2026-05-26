"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Github, Linkedin } from "lucide-react";

export default function Masthead() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header
      style={{
        borderBottom: "3px solid var(--ink)",
        padding: "13px 40px 11px",
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        gap: 20,
        flexShrink: 0,
      }}
    >
      {/* left */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
          <div
            className="font-serif"
            style={{ fontSize: 21, fontWeight: 900, letterSpacing: -1, lineHeight: 1, cursor: "pointer" }}
          >
            .harsh <em style={{ fontStyle: "italic", fontWeight: 400 }}>codes</em>
          </div>
        </Link>
        <div style={{ width: 1, height: 26, background: "var(--light)" }} />
        <div
          className="font-mono"
          style={{ fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: "var(--muted)" }}
        >
          Full Stack + AI Developer
        </div>
      </div>

      {/* center — social icons */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
        <a
          href="https://github.com/harshrana14-fi"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--muted)", display: "flex", transition: "color 0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          aria-label="GitHub"
        >
          <Github size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/harsh-rana-13-fi/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--muted)", display: "flex", transition: "color 0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
        <a
          href="https://x.com/rana972799"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--muted)", display: "flex", transition: "color 0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          aria-label="X"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      </div>

      {/* right */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 12 }}>
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            style={{
              width: 30, height: 30, borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              background: "var(--ink)", color: "var(--paper)",
              border: "none", cursor: "pointer",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        )}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=jatoliyaharsh8@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            background: "var(--ink)",
            color: "var(--paper)",
            fontFamily: "'DM Mono', monospace",
            fontSize: 9,
            letterSpacing: 2,
            textTransform: "uppercase",
            padding: "6px 14px",
            border: "1px solid var(--ink)",
            cursor: "pointer",
            transition: "all 0.18s ease",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "transparent";
            (e.currentTarget as HTMLElement).style.color = "var(--ink)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "var(--ink)";
            (e.currentTarget as HTMLElement).style.color = "var(--paper)";
          }}
        >
          Shoot a DM ↗
        </a>
      </div>
    </header>
  );
}
