"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Masthead from "@/components/navbar";
import BookCallButton from "@/components/BookCallButton";
import Footer from "@/components/Footer";

const experiences = [
  {
    title: "App Developer Intern",
    company: "CollegePaglu",
    period: "May 2026 – Present",
    tag: "Internship",
    points: [
      "Improved app UI/UX and added new features.",
      "Developed and integrated new app features and worked in a stipend-based internship environment.",
    ],
  },
  {
    title: "Tech Lead",
    company: "StylCop",
    period: "Feb 2026 – Present",
    tag: "Startup",
    points: [
      "Built StylCop, an AI-powered fashion platform for personalized outfit suggestions.",
      "Developed the landing page and currently working on the mobile app and social fashion features.",
    ],
  },
  {
    title: "Contributor",
    company: "Open Source Connect Global 2026",
    period: "Feb 2026",
    tag: "Open Source Contribution",
    points: [
    "Participated as an open-source contributor in a global collaborative development program.",
    "Contributed to project improvements, issue resolution, and feature development.",
    ],
  },
  {
    title: "Contributor",
    company: "Elite Coders - Winter of Code 2026 (ECWoC 2026)",
    period: "Jan 2026 – Feb 2026",
    tag: "Open Source Contribution",
    points: [
    "Contributed to open-source projects during ECWOC and secured 33rd rank nationally among participants.",
    "Collaborated on real-world development tasks, issue resolution, and feature improvements in a competitive environment.",
    ],
  },
  {
    title: "Developer",
    company: "CampusMart",
    period: "Aug 2025 – Oct 2025",
    tag: "Startup",
    points: [
      "Developed assignment-related features on CampusMart to support students more efficiently.",
      "Contributed to expanding the platform's reach and improving backend reliability.",
    ],
  },
];

const certifications = [
  { path: "/images/cert7.jpeg", title: "Certificate 1" },
  { path: "/images/cert1.jpg", title: "Certificate 2" },
  { path: "/images/cert3.jpg", title: "Certificate 3" },
  { path: "/images/cert2.jpg", title: "Certificate 4" },
  { path: "/images/cert4.jpg", title: "Certificate 5" },
];

export default function ExperiencePage() {
  return (
    <main
      className="exp-main"
      style={{
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        background: "var(--paper)",
      }}
    >
      <Masthead />

      {/* ── TICKER ── */}
      <div
        className="anim-fadeDown-1 ticker-bar"
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
          My Journey
        </div>
        <div style={{ overflow: "hidden", flex: 1 }}>
          <div
            className="ticker-track"
            style={{ display: "flex", gap: 32, whiteSpace: "nowrap" }}
          >
            {[
              "App Developer Intern @ CollegePaglu", "•",
              "Tech Lead @ StylCop - AI Fashion Platform", "•",
              "Developer @ CampusMart", "•",
              "+5 Certifications", "•",
              "MAIT Delhi · B.Tech IT · 2nd Year", "•",
              "App Developer Intern @ CollegePaglu", "•",
              "Tech Lead @ StylCop - AI Fashion Platform", "•",
              "Developer @ CampusMart", "•",
              "+5 Certifications", "•",
              "MAIT Delhi · B.Tech IT · 2nd Year", "•",
            ].map((item, i) => (
              <span
                key={i}
                className="font-mono"
                style={{
                  fontSize: 9,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  flexShrink: 0,
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div
        className="anim-fadeUp-2 exp-content"
        style={{
          flex: 1,
          minHeight: 0,
          padding: "0 40px",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            borderBottom: "2px solid var(--ink)",
            padding: "1.5rem 0",
            flexShrink: 0,
          }}
        >
          <div
            className="font-mono"
              style={{
                fontSize: 10,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: "var(--muted)",
                marginBottom: 6,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span
                style={{
                  display: "block",
                  width: 24,
                  height: 1,
                  background: "var(--muted)",
                }}
              />
              Building, learning, growing
          </div>
          <h1
            className="font-serif"
            style={{
              fontSize: "clamp(2.5rem, 4vw, 4rem)",
              fontWeight: 900,
              letterSpacing: -3,
              lineHeight: 0.92,
            }}
          >
            Experience &amp;{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400 }}>
              Certifications
            </em>
          </h1>
        </div>

        {/* Two-column content */}
        <div
          className="exp-grid"
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "1fr 1px 1fr",
            minHeight: 0,
            overflow: "hidden",
          }}
        >
          {/* LEFT — Experience */}
          <div
            className="exp-left"
            style={{
              padding: "1.5rem 1.5rem 1.5rem 0",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              overflowY: "auto",
              WebkitOverflowScrolling: "touch",
              scrollBehavior: "smooth",
            }}
          >
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div
                  style={{
                    paddingBottom: i < experiences.length - 1 ? "1rem" : 0,
                    borderBottom:
                      i < experiences.length - 1
                        ? "1px solid var(--light)"
                        : "none",
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
                      {exp.title}
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
                      {exp.tag}
                    </div>
                  </div>

                  <div
                    className="font-mono"
                    style={{
                      fontSize: 12,
                      color: "var(--muted)",
                      letterSpacing: 1,
                      marginBottom: 10,
                    }}
                  >
                    {exp.company} &nbsp;·&nbsp; {exp.period}
                  </div>

                  <ul
                    style={{
                      listStyle: "none",
                      fontSize: 13,
                      color: "var(--hero-bio)",
                      lineHeight: 1.8,
                    }}
                  >
                    {exp.points.map((b, j) => (
                      <li
                        key={j}
                        style={{ display: "flex", gap: 8, marginBottom: 4 }}
                      >
                        <span
                          style={{ color: "var(--muted)", flexShrink: 0 }}
                        >
                          —
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div className="exp-divider" style={{ background: "var(--light)", margin: "1.5rem 0" }} />

          {/* RIGHT — Certifications */}
          <div
            className="exp-right"
            style={{
              padding: "1.5rem 0 1.5rem 1.5rem",
              display: "flex",
              flexDirection: "column",
              minHeight: 0,
              overflow: "hidden",
            }}
          >
            {/* Section label — fixed, never scrolls */}
            <div
              className="font-mono"
              style={{
                fontSize: 10,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: "var(--muted)",
                borderBottom: "1px solid var(--light)",
                paddingBottom: 8,
                marginBottom: "1rem",
                flexShrink: 0,
              }}
            >
              Certifications
            </div>

            {/* Scrollable grid — smooth native scroll */}
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                overflowX: "hidden",
                /* smooth momentum scroll on mobile/Mac */
                WebkitOverflowScrolling: "touch",
                scrollBehavior: "smooth",
                /* hide scrollbar visually but keep it functional */
                scrollbarWidth: "none",          /* Firefox */
                msOverflowStyle: "none",         /* IE/Edge */
                paddingRight: 4,
              }}
              /* hide scrollbar in Chrome/Safari */
              className="hide-scrollbar"
            >
              <div
                className="cert-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                  paddingBottom: "1rem",
                }}
              >
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                    style={{
                      aspectRatio: "4 / 3",
                      borderRadius: 12,
                      overflow: "hidden",
                      position: "relative",
                      border: "1px solid var(--light)",
                      backgroundColor:
                        "color-mix(in srgb, var(--paper) 40%, transparent)",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                      /* smooth scale on hover without layout shift */
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      willChange: "transform",
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Image
                      src={cert.path}
                      alt={cert.title}
                      fill
                      style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </motion.div>
                ))}

                {/* ── "& more" card ── */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 + certifications.length * 0.08,
                  }}
                  style={{
                    aspectRatio: "4 / 3",
                    borderRadius: 12,
                    border: "1px dashed var(--light)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                    padding: "1rem",
                    textAlign: "center",
                    cursor: "default",
                    background:
                      "repeating-linear-gradient(45deg, transparent, transparent 6px, color-mix(in srgb, var(--light) 30%, transparent) 6px, color-mix(in srgb, var(--light) 30%, transparent) 7px)",
                  }}
                >
                  <div
                    className="font-serif"
                    style={{
                      fontSize: 26,
                      fontWeight: 900,
                      letterSpacing: -1,
                      lineHeight: 1,
                      color: "var(--ink)",
                    }}
                  >
                    &amp; more
                  </div>
                  <div
                    className="font-mono"
                    style={{
                      fontSize: 10,
                      letterSpacing: 3,
                      textTransform: "uppercase",
                      color: "var(--muted)",
                    }}
                  >
                    in the vault —
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <BookCallButton />

      {/* ── GLOBAL STYLE PATCH ── */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        @media (max-width: 768px) {
          .exp-main { height: auto !important; min-height: 100dvh !important; overflow-y: auto !important; overflow-x: hidden !important; }
          .exp-content { padding: 0 16px !important; }
          .exp-grid { grid-template-columns: 1fr !important; overflow: visible !important; }
          .exp-divider { display: none !important; }
          .exp-left { padding: 1rem 0 !important; overflow-y: visible !important; }
          .exp-right { padding: 1rem 0 !important; overflow: visible !important; }
          .cert-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}