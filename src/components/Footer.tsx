"use client";

import Link from "next/link";
import { House, FolderKanban, BookOpen } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home", icon: House },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/experience", label: "Experience", icon: BookOpen },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "2px solid var(--ink)",
        padding: "10px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
        flexShrink: 0,
      }}
    >
      <div
        className="font-mono"
        style={{ fontSize: 9, letterSpacing: 3, textTransform: "uppercase", color: "var(--muted)" }}
      >
        © 2026 Harsh Jatoliya · Delhi, India · MAIT B.Tech IT
      </div>
      <div style={{ display: "flex", gap: 16, alignItems: "center", position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
        {navLinks.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--muted)",
              textDecoration: "none",
              cursor: "pointer",
              transition: "color 0.18s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--ink)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "var(--muted)"; }}
          >
            <Icon size={16} />
            <span
              style={{
                position: "absolute",
                bottom: "calc(100% + 6px)",
                left: "50%",
                transform: "translateX(-50%)",
                fontSize: 8,
                letterSpacing: 2,
                textTransform: "uppercase",
                fontFamily: "'DM Mono', monospace",
                whiteSpace: "nowrap",
                color: "var(--paper)",
                background: "var(--ink)",
                padding: "2px 8px",
                borderRadius: 2,
                opacity: 0,
                pointerEvents: "none",
                transition: "opacity 0.15s ease",
              }}
              className="tooltip-label"
            >
              {label}
            </span>
          </Link>
        ))}
      </div>
      <div className="font-serif" style={{ fontStyle: "italic", fontSize: 13, color: "var(--muted)" }}>
        I design · code · deploy.
      </div>
      <style>{`
        a:hover .tooltip-label {
          opacity: 1 !important;
        }
      `}</style>
    </footer>
  );
}
