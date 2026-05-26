"use client";

import Link from "next/link";
import BookCallButton from "@/components/BookCallButton";
import Masthead from "@/components/navbar";
import Footer from "@/components/Footer";
import { experience } from "@/lib/data";

export default function Home() {
  return (
    <main
      style={{
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        background: "var(--paper)",
        // REMOVED: maxWidth, margin auto, padding
      }}
    >
      <Masthead />

      {/* ── TICKER ── */}
      <div
        className="anim-fadeDown-1"
        style={{
          borderBottom: "1px solid var(--light)",
          padding: "8px 40px",
          display: "flex",
          alignItems: "center",
          gap: 24,
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <div
          className="font-mono"
          style={{
            fontSize: 9,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "var(--muted)",
            whiteSpace: "nowrap",
            flexShrink: 0,
            paddingRight: 16,
            borderRight: "1px solid var(--light)",
          }}
        >
          Open to Work
        </div>
        <div style={{ overflow: "hidden", flex: 1 }}>
          <div className="ticker-track" style={{ display: "flex", gap: 32, whiteSpace: "nowrap" }}>
            {[
              "App Developer Intern @ CollegePaglu",
              "•",
              "Tech Lead @ StylCop — AI Fashion Platform",
              "•",
              "+25 Projects Completed",
              "•",
              "+10 Open Source Contributions",
              "•",
              "MAIT Delhi · B.Tech IT · 2nd Year",
              "•",
              "Building Web + AI Systems",
              "•",
              "App Developer Intern @ CollegePaglu",
              "•",
              "Tech Lead @ StylCop — AI Fashion Platform",
              "•",
              "+25 Projects Completed",
              "•",
              "+10 Open Source Contributions",
              "•",
              "MAIT Delhi · B.Tech IT · 2nd Year",
              "•",
              "Building Web + AI Systems",
              "•",
            ].map((item, i) => (
              <span
                key={i}
                className="font-mono"
                style={{ fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: "var(--muted)", flexShrink: 0 }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN GRID ── */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
          padding: "0 40px",   // full-bleed sides, padding here
        }}
      >
        {/* hero row — two columns, fills remaining height */}
        <div
          className="anim-fadeUp-2"
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "1fr 1px 1fr",
            borderBottom: "2px solid var(--ink)",
            minHeight: 0,
          }}
        >
          {/* LEFT — name + bio + stats */}
          <div
            style={{
              padding: "2.4rem 2.4rem 2rem 0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                className="font-mono"
                style={{
                  fontSize: 9, letterSpacing: 4, textTransform: "uppercase",
                  color: "var(--muted)", marginBottom: 14,
                  display: "flex", alignItems: "center", gap: 8,
                }}
              >
                <span style={{ display: "block", width: 24, height: 1, background: "var(--muted)" }} />
                I Design · Code · Deploy
              </div>

              <h1
                className="font-serif"
                style={{
                  fontSize: "clamp(3.5rem, 6vw, 6rem)",
                  fontWeight: 900,
                  letterSpacing: -4,
                  lineHeight: 0.88,
                  marginBottom: 18,
                }}
              >
                Harsh<br />
                <em style={{ fontStyle: "italic", fontWeight: 400 }}>Jatoliya.</em>
              </h1>

              <p
                className="font-serif"
                style={{ fontStyle: "italic", fontSize: 18, color: "var(--muted)", marginBottom: 16 }}
              >
                Full Stack Developer + AI Builder
              </p>

              <p style={{ fontSize: 14, color: "var(--hero-bio)", lineHeight: 1.7, maxWidth: 480 }}>
                Passionate about crafting intuitive, scalable user experiences — building
                high-quality digital products from sleek frontends to backends and LLM
                integrations. 2nd year B.Tech IT at MAIT, Delhi.
              </p>

              <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
                <Link
                  href="/resume"
                  className="font-mono"
                  style={{
                    fontSize: 9, letterSpacing: 2, textTransform: "uppercase",
                    padding: "8px 18px", border: "1px solid var(--ink)",
                    color: "var(--paper)", background: "var(--ink)",
                    textDecoration: "none", cursor: "pointer",
                    transition: "all 0.18s ease",
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
                  Resume ↗
                </Link>
                <Link
                  href="/projects"
                  className="font-mono"
                  style={{
                    fontSize: 9, letterSpacing: 2, textTransform: "uppercase",
                    padding: "8px 18px", border: "1px solid var(--ink)",
                    color: "var(--ink)", background: "transparent",
                    textDecoration: "none", cursor: "pointer",
                    transition: "all 0.18s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "var(--ink)";
                    (e.currentTarget as HTMLElement).style.color = "var(--paper)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                    (e.currentTarget as HTMLElement).style.color = "var(--ink)";
                  }}
                >
                  Projects ↗
                </Link>
              </div>
            </div>

            {/* skills */}
            <div
              style={{
                borderTop: "1px solid var(--light)",
                paddingTop: "1.2rem",
              }}
            >
              <div
                className="font-mono"
                style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "var(--ink)", marginBottom: 12 }}
              >
                My Expertise
              </div>
              <div style={{ fontSize: 12, color: "var(--hero-bio)", lineHeight: 1.9 }}>
                {[
                  ["Languages", "Java, Python, C/C++, SQL (Postgres), JavaScript, TypeScript, HTML/CSS"],
                  ["Frameworks", "React, Next.js, Node.js, FastAPI, React Native, Expo"],
                  ["Tools", "Git, GitHub, Google Cloud Platform, Firebase, Postman"],
                  ["Libraries", "pandas, NumPy, Matplotlib"],
                  ["Databases", "MongoDB, Firestore, Supabase"],
                ].map(([cat, items], i) => (
                  <span key={i}>
                    {i > 0 && <span style={{ margin: "0 4px" }}>{" · "}</span>}
                    <span
                      className="font-mono"
                      style={{ fontSize: 10, letterSpacing: 1, color: "var(--muted)" }}
                    >
                      {cat}:
                    </span>{" "}
                    <span>{items}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* col divider */}
          <div style={{ background: "var(--light)", margin: "1.5rem 0" }} />

          {/* RIGHT — experience & credentials only (matches image 2) */}
          <div
            style={{
              padding: "2.4rem 0 2rem 2.4rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.4rem",
              overflowY: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid var(--light)",
                paddingBottom: 8,
              }}
            >
              <div
                className="font-mono"
                style={{
                  fontSize: 9, letterSpacing: 4, textTransform: "uppercase",
                  color: "var(--muted)",
                }}
              >
                Experience &amp; Certifications
              </div>
              <Link
                href="/experience"
                className="font-mono"
                style={{
                  fontSize: 9, letterSpacing: 2, textTransform: "uppercase",
                  color: "var(--muted)", textDecoration: "none",
                  display: "flex", alignItems: "center", gap: 6,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
              >
                View More →
              </Link>
            </div>

            {experience.map((e, i) => (
              <div
                key={i}
                style={{
                  paddingBottom: i < experience.length - 1 ? "1.4rem" : 0,
                  borderBottom: i < experience.length - 1 ? "1px solid var(--light)" : "none",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: 8,
                    marginBottom: 4,
                  }}
                >
                  <div
                    className="font-serif"
                    style={{ fontSize: 17, fontWeight: 700, letterSpacing: -0.3 }}
                  >
                    {e.title}
                  </div>
                  <div
                    style={{
                      background: "var(--ink)",
                      color: "var(--paper)",
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 8,
                      letterSpacing: 1.5,
                      textTransform: "uppercase",
                      padding: "3px 10px",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                      marginTop: 3,
                    }}
                  >
                    {e.badge}
                  </div>
                </div>

                <div
                  className="font-mono"
                  style={{ fontSize: 11, color: "var(--muted)", letterSpacing: 1, marginBottom: 10 }}
                >
                  {e.company} &nbsp;·&nbsp; {e.period}
                </div>

                <ul style={{ listStyle: "none", fontSize: 13, color: "var(--hero-bio)", lineHeight: 1.8 }}>
                  {e.bullets.map((b, j) => (
                    <li key={j} style={{ display: "flex", gap: 8, marginBottom: 4 }}>
                      <span style={{ color: "var(--muted)", flexShrink: 0 }}>—</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />

      <BookCallButton />
    </main>
  );
}