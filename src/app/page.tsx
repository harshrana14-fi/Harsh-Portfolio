"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, ArrowUpRight } from "lucide-react";
import {
  SiJavascript, SiTypescript, SiPython, SiCplusplus,
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress,
  SiMongodb, SiPostgresql, SiFirebase,
  SiNumpy, SiTensorflow, SiGit, SiDocker, SiPostman,
  SiHtml5, SiTailwindcss, SiFastapi, SiExpo, SiCloudinary, SiGooglecloud,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import { TbApi, TbSql } from "react-icons/tb";
import Masthead from "@/components/navbar";
import ProjectCard from "@/components/ProjectCard";
import PageWrapper from "@/components/PageWrapper";
import GitHubSection from "@/components/GitHubSection";
import Footer from "@/components/Footer";
import { experience, skills, projects } from "@/lib/data";

/* ── Icon map ── */
const SKILL_ICONS: Record<string, React.ComponentType<{ className?: string; size?: number; style?: React.CSSProperties }>> = {
  SiJavascript, SiTypescript, SiPython, SiCplusplus,
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress,
  SiMongodb, SiPostgresql, SiFirebase, SiAmazonwebservices: FaAws,
  SiNumpy, SiTensorflow, SiGit, SiDocker, SiPostman,
  SiHtml5, SiTailwindcss, SiFastapi, SiExpo, SiCloudinary, SiGooglecloud,
  FaJava, TbApi, TbSql,
};

/* ── helpers ── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const fadeUpView = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
};

function Divider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`w-full border-t border-neutral-800/80 ${className}`}
    />
  );
}


/* ── Experience accordion ── */
function ExperienceItem({
  exp,
  index,
}: {
  exp: (typeof experience)[number];
  index: number;
}) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="border-b border-dashed border-neutral-200 dark:border-neutral-800 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="group flex w-full cursor-pointer items-start gap-3 py-4 md:items-center md:gap-4 text-left"
      >
        <div className="h-12 w-12 shrink-0 rounded-lg border border-neutral-200/80 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 flex items-center justify-center font-bold text-lg text-neutral-500 dark:text-neutral-400 select-none">
          {exp.company.charAt(0)}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-base leading-tight font-semibold text-neutral-950 md:text-lg dark:text-neutral-50">
              {exp.company}
            </span>
            <span className="rounded border border-neutral-700 bg-neutral-800 px-2.5 py-0.5 text-xs font-medium text-neutral-200 shadow-xs">
              {exp.title}
            </span>
          </div>
          <div className="mt-0.5 md:hidden text-[11px] font-semibold text-neutral-900 dark:text-neutral-100">
            {exp.period}
          </div>
        </div>
        <div className="hidden text-right md:block shrink-0">
          <div className="text-xs font-semibold text-neutral-950 md:text-sm dark:text-neutral-50">
            {exp.period}
          </div>
          <div className="text-xs text-neutral-600 dark:text-neutral-400">
            {exp.location}
          </div>
        </div>
        <div className="ml-1 flex h-7 w-7 shrink-0 items-center justify-center md:ml-2">
          <ChevronDown
            size={18}
            className={`transition-transform duration-300 text-neutral-500 group-hover:text-neutral-950 dark:group-hover:text-neutral-50 ${open ? "rotate-180" : ""
              }`}
          />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-5 pl-[60px] md:pl-[64px] flex flex-col gap-3">
              <p className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400 md:hidden">
                {exp.location}
              </p>
              <ul className="w-full space-y-1.5 text-[13px] leading-relaxed">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="flex w-full items-start gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-500" />
                    <span className="wrap-break-word text-neutral-800 dark:text-neutral-200 font-medium">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-1">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-neutral-200 bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-950 shadow-sm dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ── Page ── */
export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 2);

  return (
    <PageWrapper>
      <Masthead />
      <main className="relative flex min-h-screen justify-center font-sans">
        <div className="relative max-w-4xl w-full sm:px-10 mx-auto px-6 pt-28 pb-10">

          {/* ── HERO ── */}
          <div className="flex w-full flex-wrap items-start justify-between gap-4 mb-1">
            <div>
              <motion.h1
                {...fadeUp(0)}
                className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50"
              >
                <span className="link--elara bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(255,255,255,0.12)]">
                  Harsh Jatoliya
                </span>
              </motion.h1>
              <motion.div {...fadeUp(0.08)} className="flex items-center gap-2.5 mt-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-[statusDotPulse_2.6s_ease-in-out_infinite] absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                </span>
                <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
                  Available for full-stack & AI roles
                </span>
              </motion.div>
            </div>

            {/* Social links + Resume CTA */}
            <motion.div {...fadeUp(0.05)} className="flex items-center gap-3">
              {[
                { href: "https://github.com/harshrana14-fi", label: "GitHub", icon: <Github size={19} /> },
                { href: "https://www.linkedin.com/in/harsh-rana-13-fi/", label: "LinkedIn", icon: <Linkedin size={19} /> },
                {
                  href: "https://x.com/rana972799",
                  label: "X",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
                { href: "mailto:jatoliyaharsh8@gmail.com", label: "Email", icon: <Mail size={19} /> },
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-neutral-700 opacity-75 transition hover:opacity-100 dark:text-neutral-300 dark:hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                >
                  {icon}
                </a>
              ))}

              {/* Resume Button in Hero Header */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 inline-flex items-center gap-1.5 rounded-full border border-neutral-300 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 px-3 py-1 text-xs font-semibold text-neutral-900 dark:text-neutral-100 transition-all duration-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:scale-105 active:scale-95 shadow-xs"
              >
                <span>Resume</span>
                <ArrowUpRight size={12} className="opacity-60" />
              </a>
            </motion.div>
          </div>

          {/* Refreshed Bio Copy */}
          <motion.div {...fadeUp(0.1)} className="mt-3 max-w-2xl space-y-1.5 leading-relaxed">
            <p className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              Full-Stack Engineer, AI builder &amp; mobile developer
            </p>
            <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
              Started with curiosity, stayed for the craft. I build web products that are fast, functional, and thoughtfully designed — with AI baked in where it counts. 3nd year B.Tech IT at MAIT, Delhi.
            </p>
          </motion.div>



          <motion.div {...fadeUp(0.15)}>
            <Divider className="my-6" />
          </motion.div>

          {/* ── FEATURED PROJECTS ── */}
          <div className="pt-1 pb-3">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
                <span className="link--elara">Featured Projects</span>
              </h2>
              <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest hidden sm:inline-block">
                Full-Stack &amp; AI
              </span>
            </div>
            <Divider className="mb-4" />
          </div>
          <div className="grid grid-cols-1 gap-6 pb-6 md:grid-cols-2">
            {featured.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard p={p} />
              </motion.div>
            ))}
          </div>

          <div className="mt-2 flex justify-center">
            <motion.div {...fadeUpView}>
              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-6 py-2.5 text-sm font-semibold text-neutral-800 shadow-sm transition-all duration-300 hover:bg-neutral-50 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
              >
                <span>View all projects</span>
                <ArrowUpRight size={14} />
              </Link>
            </motion.div>
          </div>

          <Divider className="my-10" />

          {/* ── EXPERIENCES ── */}
          <motion.div {...fadeUpView}>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 mb-3">
              <span className="link--elara">Work Experience</span>
            </h2>
            <Divider className="mb-4" />
          </motion.div>
          <div className="flex flex-col">
            {experience.map((exp, i) => (
              <ExperienceItem key={i} exp={exp} index={i} />
            ))}
          </div>

          <Divider className="my-10" />

          {/* ── GITHUB SECTION ── */}
          <motion.div {...fadeUpView}>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 mb-3">
              <span className="link--elara">Proof Of Work</span>
            </h2>
            <Divider className="mb-4" />
          </motion.div>
          <GitHubSection />

          <Divider className="my-10" />

          {/* ── SKILLS ── */}
          <motion.div {...fadeUpView}>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 mb-3">
              <span className="link--elara">Skills &amp; Tech Stack</span>
            </h2>
            <Divider className="mb-4" />
            <p className="mb-6 inline-block border border-dashed border-neutral-300 bg-neutral-100 px-4 py-[7px] text-sm font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300">
              Technologies and frameworks I work with to build robust web, mobile, and AI solutions.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-2.5"
          >
            {skills.map((s, i) => {
              const IconComponent = SKILL_ICONS[s.icon];
              const isDarkNeutral = s.color === "#000000" || s.color === "#010101" || s.color === "#686868";
              return (
                <motion.span
                  key={s.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.025 }}
                  className="group flex items-center gap-1.5 rounded-md border border-neutral-200 bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-950 shadow-sm transition-all hover:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {IconComponent && (
                    <IconComponent
                      className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:scale-110"
                      style={{ color: isDarkNeutral ? undefined : s.color }}
                    />
                  )}
                  {s.name}
                </motion.span>
              );
            })}
          </motion.div>

          <Divider className="my-10" />

          {/* ── GET IN TOUCH ── */}
          <motion.div {...fadeUpView} className="mb-10">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 mb-3">
              <span className="link--elara">Get in touch</span>
            </h2>
            <Divider className="mb-4" />
            <p className="mb-6 inline-block border border-dashed border-neutral-300 bg-neutral-100 px-4 py-[7px] text-sm font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300">
              I&apos;m currently open to full-time roles, freelance projects, and collaborations.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:jatoliyaharsh8@gmail.com"
                className="inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-5 py-2.5 text-sm font-medium text-neutral-100 transition-all hover:bg-neutral-800 dark:border-neutral-200 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-white"
              >
                <Mail size={15} /> Shoot a DM
              </a>
              <a
                href="https://calendar.app.google/NErPCTm4f2kFo1uv7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 bg-transparent px-5 py-2.5 text-sm font-medium text-neutral-800 transition-all hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800/60"
              >
                Book a call
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      {/* ── FOOTER ── */}
      <Footer />
    </PageWrapper>
  );
}
