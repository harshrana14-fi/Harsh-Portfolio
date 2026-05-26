"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import {
  SiReact, SiNextdotjs, SiMongodb, SiTailwindcss, SiTypescript,
  SiPython, SiTensorflow, SiFirebase, SiAmazonwebservices, SiOpenai,
  SiExpo,
} from "react-icons/si";
import Masthead from "@/components/navbar";
import BookCallButton from "@/components/BookCallButton";
import Footer from "@/components/Footer";

const techIconMap: Record<string, React.ElementType> = {
  "React": SiReact,
  "Next.js": SiNextdotjs,
  "MongoDB": SiMongodb,
  "TailwindCSS": SiTailwindcss,
  "TypeScript": SiTypescript,
  "AI-ML": SiTensorflow,
  "Python": SiPython,
  "TensorFlow": SiTensorflow,
  "React-Native": SiReact,
  "EXPO": SiExpo,
  "Firebase": SiFirebase,
  "AWS": SiAmazonwebservices,
  "OpenAI": SiOpenai,
};

const projects = [
    {
      title: "Nyagrik",
      description:
        "Legal consultation platform providing information and services for citizens with document templates.",
      tech: ["React", "Next.js", "MongoDB", "TailwindCSS", "TypeScript"],
      link: "https://www.nyagrik.com/",
      github: "https://github.com/harshrana14-fi/nyagrik",
      category: "Full Stack",
      featured: true,
      image: "/images/nyagrik.png",
      badge: "Startup Project",
      status: "Startup Project",
      statusColor: "bg-emerald-500",
    },
    {
      title: "StudHub",
      description:
        "An AI-powered academic toolkit for college students to simplify academic journey",
      tech: ["Next.js", "TypeScript", "MongoDB", "AI-ML", "Python"],
      link: "https://studtoolhub.vercel.app/",
      github: "https://github.com/harshrana14-fi/StudentHub",
      category: "Full Stack, AI-ML",
      image: "/images/studhub.png",
      badge: "Startup",
      status: "Building",
      statusColor: "bg-amber-500",
    },
    {
      title: "MedRag",
      description:
        "A RAG-based AI system that delivers accurate, natural language answers from complex health insurance policies with source citations.",
      tech: ["React-Native", "EXPO", "Firebase", "Python"],
      link: "https://medrag-six.vercel.app/",
      github: "https://github.com/harshrana14-fi/MEDRAG",
      category: "Full Stack, Rag Model",
      featured: true,
      image: "/images/medrag.png",
      badge: "Utility",
      status: "Building",
      statusColor: "bg-amber-500",
    },
    {
      title: "JARVIS",
      description:
        "Advanced AI Assistant using NLP and custom ML models to automate tasks and resolve prompts.",
      tech: ["Next.js", "TypeScript", "MongoDB", "Python", "TensorFlow"],
      link: "https://jarvis-silk-six.vercel.app/",
      github: "https://github.com/harshrana14-fi/JARVIS",
      category: "Full Stack, AI-ML",
      image: "/images/jarvis.png",
      badge: "AI Agent",
      status: "Completed",
      statusColor: "bg-emerald-500",
    },
    
    {
      title: "JALGENE",
      description:
        "AI-powered marine biodiversity platform processing environmental DNA to identify marine species.",
      tech: ["Next.js", "TypeScript", "Firebase", "AI-ML", "Python", "AWS"],
      link: "https://deapsea-edna.vercel.app/",
      github: "https://github.com/harshrana14-fi/jalgene",
      category: "Full Stack",
      image:
        "https://images-ctf.baslerweb.com/dg51pdwahxgw/l2E65iVFyhk3Uz00XptIy/b7107fb832030ab009b82fcc8646aa9d/sea-ai-from-camera-input-to-alerts-on-screen.webp?w=1200&fit=pad&bg=rgb:ffffff&q=80&fm=jpg",
      badge: "Research",
      status: "Completed",
      statusColor: "bg-emerald-500",
    },
    {
      title: "WasteFlow",
      description:
        "AI-powered waste management platform connecting producers with recyclers using smart matching.",
      tech: ["Next.js", "MongoDB", "OpenAI", "Python"],
      link: "https://waste-market-place.vercel.app/",
      github: "https://github.com/harshrana14-fi/WasteFlow",
      category: "AI/ML",
      image: "/images/waste99.jpg",
      badge: "SaaS",
      status: "C",
      statusColor: "bg-amber-500",
    },
    {
      title: "LEXHAVEN",
      description:
        "Law internship portal connecting law students with opportunities and law firms with talent.",
      tech: ["React", "Next.js", "MongoDB", "TailwindCSS", "TypeScript"],
      link: "https://law-interns-portal.vercel.app/",
      github: "https://github.com/harshrana14-fi/LexHaven",
      category: "Full Stack",
      image: "/images/law.jpeg",
      badge: "Portal",
      status: "All Systems Operational",
      statusColor: "bg-emerald-500",
    },
    {
      title: "StocKentra",
      description:
        "Stock market analysis platform displaying real-time trends and AI-driven market insights.",
      tech: ["React", "Next.js", "MongoDB", "TailwindCSS"],
      link: "https://stoc-kentra.vercel.app/",
      github: "https://github.com/harshrana14-fi/StocKentra",
      category: "Full Stack",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop",
      badge: "Finance",
      status: "All Systems Operational",
      statusColor: "bg-emerald-500",
    },
    {
      title: "EDUFOX",
      description:
        "AI personalized learning platform with ML recommendations for personalized study paths.",
      tech: ["Python", "Next.js", "Firebase", "TailwindCSS"],
      link: "https://ai-tuition.vercel.app/",
      github: "https://github.com/harshrana14-fi/Edufox",
      category: "AI/ML",
      image: "/images/aitut.jpeg",
      badge: "EdTech",
      status: "Building",
      statusColor: "bg-amber-500",
    },
  ];

const coverImages = [
  "/cover1.jpg",
  "/cover2.jpg",
  "/cover3.jpg",
  "/cover4.jpg",
  "/cover5.jpg",
  "/cover6.jpg",
  "/cover7.jpg",
];

export default function ProjectsPage() {
  return (
    <main
      style={{
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        background: "var(--paper)",
      }}
    >
      <style>{`
        .project-card {
          position: relative;
        }

        .cover-overlay {
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .project-card:hover .cover-overlay {
          opacity: 1;
        }

        .play-btn {
          opacity: 0;
          transform: scale(0.5);
          transition: opacity 0.35s ease, transform 0.35s ease;
        }

        .project-card:hover .play-btn {
          opacity: 1;
          transform: scale(1);
        }

        .project-label {
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-label {
          opacity: 1;
        }

        .pattern-grid {
          background-image:
            linear-gradient(to right, var(--light) 1px, transparent 1px),
            linear-gradient(to bottom, var(--light) 1px, transparent 1px);
          background-size: 14px 14px;
        }

        @media (max-width: 640px) {
          .projects-content { padding: 0 16px !important; }
          .projects-header-text { font-size: clamp(1.8rem, 8vw, 2.5rem) !important; }
        }
      `}</style>

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
          Project Archive
        </div>
        <div style={{ overflow: "hidden", flex: 1 }}>
          <div className="ticker-track" style={{ display: "flex", gap: 32, whiteSpace: "nowrap" }}>
            {[
              "Nyagrik", "•", "StylCop", "•", "JARVIS", "•", "WorkConnect", "•",
              "JALGENE", "•", "WasteFlow", "•", "LEXHAVEN", "•", "StocKentra", "•", "EDUFOX", "•",
              "Nyagrik", "•", "StylCop", "•", "JARVIS", "•", "WorkConnect", "•",
              "JALGENE", "•", "WasteFlow", "•", "LEXHAVEN", "•", "StocKentra", "•", "EDUFOX", "•",
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

      {/* ── CONTENT ── */}
      <div
        className="anim-fadeUp-2 projects-content"
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
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div
              className="font-mono"
              style={{
                fontSize: 9,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: "var(--muted)",
                marginBottom: 6,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span style={{ display: "block", width: 24, height: 1, background: "var(--muted)" }} />
              A dossier of production-grade builds
            </div>
            <h1
              className="font-serif projects-header-text"
              style={{
                fontSize: "clamp(2.5rem, 4vw, 4rem)",
                fontWeight: 900,
                letterSpacing: -3,
                lineHeight: 0.92,
              }}
            >
              Selected <em style={{ fontStyle: "italic", fontWeight: 400 }}>Works</em>
            </h1>
          </div>
          <div
            className="font-mono"
            style={{
              fontSize: 9,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "var(--muted)",
              whiteSpace: "nowrap",
              paddingBottom: 4,
            }}
          >
            {projects.length} Projects
          </div>
        </div>

        {/* Project Grid */}
        <div style={{ overflowY: "auto", flex: 1, padding: "1.5rem 0" }}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const coverImg = coverImages[index % coverImages.length];

              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="project-card group relative z-10 rounded-xl p-3 transition-all duration-300"
                  style={{
                    border: "1px solid var(--light)",
                    background: "var(--paper-dark)",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--muted)"}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = "var(--light)"}
                >
                  <div className="flex w-full cursor-pointer flex-col gap-4">
                    {/* ── IMAGE AREA ── */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        borderRadius: 12,
                        border: "1px solid var(--light)",
                        background: "color-mix(in srgb, var(--paper) 95%, var(--ink))",
                        padding: 4,
                        display: "block",
                      }}
                      aria-label={`View ${project.title}`}
                    >
                      <div
                        className="relative select-none"
                        style={{
                          height: 220,
                          width: "100%",
                          overflow: "hidden",
                          borderRadius: 8,
                          border: "1px solid var(--light)",
                          background: "var(--paper-dark)",
                        }}
                      >
                        {/* Grid pattern */}
                        <div className="pattern-grid absolute inset-0" />

                        {/* Cover background (on hover) */}
                        <div
                          className="cover-overlay absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${coverImg})` }}
                        >
                          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.5)" }} />
                        </div>

                        {/* "View Project" label (on hover) */}
                        <h1 className="project-label absolute top-3 left-3 z-30 text-[11px] font-bold tracking-widest uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
                          style={{ color: "var(--paper)" }}>
                          View Project
                        </h1>

                        {/* Play button (on hover) */}
                        <div className="play-btn pointer-events-none absolute inset-0 z-40 flex items-center justify-center">
                          <div
                            className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full shadow-lg backdrop-blur-sm transition-transform duration-200 hover:scale-110 active:scale-95"
                            style={{
                              border: "1px solid rgba(255,255,255,0.5)",
                              background: "rgba(255,255,255,0.9)",
                            }}
                          >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"
                              style={{ color: "var(--ink)" }}>
                              <path d="M7 17L17 7" />
                              <path d="M7 7h10v10" />
                            </svg>
                          </div>
                        </div>

                        {/* Preview image at bottom (like laptop mockup) */}
                        <div
                          className="absolute bottom-0 left-1/2 z-20 rounded-t-[6px] p-[2px] pb-0 shadow-2xl"
                          style={{
                            width: "92%",
                            height: "80%",
                            transform: "translateX(-50%)",
                            borderLeft: "1px solid var(--light)",
                            borderRight: "1px solid var(--light)",
                            borderTop: "1px solid var(--light)",
                            background: "var(--paper)",
                          }}
                        >
                          <div className="size-full overflow-hidden" style={{ borderRadius: "4px 4px 0 0" }}>
                            <img
                              src={project.image}
                              alt={project.title}
                              className="size-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    </a>

                    {/* ── TEXT CONTENT ── */}
                    <div className="flex flex-col gap-2 px-1">
                      {/* Title row */}
                      <div className="flex items-center justify-between">
                        <h3 className="truncate text-lg font-bold tracking-wide"
                          style={{ color: "var(--ink)" }}>
                          {project.title}
                        </h3>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} live link`}
                          >
                            <ExternalLink className="w-4 h-4 transition"
                              style={{ color: "var(--muted)", opacity: 0.5 }}
                              onMouseEnter={(e) => e.currentTarget.style.opacity = "1"}
                              onMouseLeave={(e) => e.currentTarget.style.opacity = "0.5"}
                            />
                          </a>
                        )}
                      </div>

                      {/* Description */}
                      <p
                        className="line-clamp-2 h-10 text-sm transition-colors duration-300"
                        style={{ color: "var(--muted)" }}
                        onMouseEnter={(e) => { if (e.currentTarget.closest('.group')?.matches(':hover')) e.currentTarget.style.color = 'var(--ink)' }}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted)'}
                      >
                        {project.description}
                      </p>

                      {/* Tech icons + Status */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-2.5">
                          {project.tech.map((tech) => {
                            const Icon = techIconMap[tech];
                            return Icon ? (
                              <span key={tech} title={tech}>
                                <Icon className="w-4 h-4" style={{ color: "var(--muted)" }} />
                              </span>
                            ) : (
                              <span key={tech}
                                className="text-[10px] font-medium px-2 py-0.5 rounded"
                                style={{
                                  color: "var(--muted)",
                                  background: "var(--paper-dark)",
                                  border: "1px solid var(--light)",
                                }}>
                                {tech}
                              </span>
                            );
                          })}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className={`relative flex h-2 w-2 ${project.statusColor}`}>
                            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${project.statusColor} opacity-75`} />
                            <span className={`relative inline-flex rounded-full h-2 w-2 ${project.statusColor}`} />
                          </span>
                          <span className="text-[10px] font-mono tracking-wider uppercase"
                            style={{ color: "var(--muted)" }}>
                            {project.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />

      <BookCallButton />
    </main>
  );
}
