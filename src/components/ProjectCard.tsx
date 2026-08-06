"use client";

import { Star, Globe, Github } from "lucide-react";
import { projects } from "@/lib/data";
import { 
  SiNextdotjs, SiTypescript, SiPython, SiCloudinary, SiReact, SiMongodb, 
  SiTailwindcss, SiTensorflow, SiJavascript, SiHtml5, SiCss
} from "react-icons/si";
import { TbTerminal, TbDatabase, TbBrain, TbSettings, TbBolt } from "react-icons/tb";

const techIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "next.js": SiNextdotjs,
  "typescript": SiTypescript,
  "python": SiPython,
  "cloudinary": SiCloudinary,
  "react": SiReact,
  "mongodb": SiMongodb,
  "tailwindcss": SiTailwindcss,
  "tensorflow": SiTensorflow,
  "openai": TbBrain,
  "javascript": SiJavascript,
  "html5": SiHtml5,
  "css": SiCss,
  "ai-ml": TbBrain,
  "rag": TbBrain,
  "chromadb": TbDatabase,
  "devtool": TbSettings,
  "cli": TbTerminal,
  "groq": TbBolt,
};

export default function ProjectCard({ p }: { p: (typeof projects)[number] }) {
  return (
    <div className="group relative z-10 rounded-2xl border border-neutral-800/80 bg-neutral-900/75 p-4 transition-all duration-300 hover:border-neutral-700/80 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] backdrop-blur-sm">
      <div className="flex w-full cursor-pointer flex-col gap-4">
        {/* Project Image Frame */}
        <a 
          href={p.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="rounded-xl border border-neutral-800 bg-neutral-950/60 p-1 block"
        >
          <div className="relative h-[220px] w-full overflow-hidden rounded-lg border border-neutral-800/50 bg-neutral-900/60 select-none">
            {/* Grid Pattern overlay inside card image */}
            <div 
              className="absolute inset-0 z-0" 
              style={{ 
                backgroundImage: "linear-gradient(to right, var(--pattern-fg) 1px, transparent 1px), linear-gradient(to bottom, var(--pattern-fg) 1px, transparent 1px)", 
                backgroundSize: "16px 16px", 
                opacity: 0.12 
              }}
            />
            
            <h1 className="font-serif absolute top-3.5 left-3.5 z-30 text-[10px] font-bold tracking-widest text-neutral-400 uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
              View Project ↗
            </h1>
            
            {/* Cover image background on hover */}
            {p.cover && (
              <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <img
                  alt={`${p.title} cover`}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                  src={p.cover}
                />
                {/* Dark gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
            )}

            {/* Hover Arrow Link Button */}
            <div className="pointer-events-none absolute inset-0 z-40 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/15 shadow-lg backdrop-blur-sm transition-transform duration-200 hover:scale-110 active:scale-95"
              >
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
            </div>

            {/* Embedded mockup page styling */}
            <div 
              className="absolute bottom-0 left-1/2 z-20 w-[90%] rounded-t-[8px] border-x border-t border-neutral-800/80 bg-neutral-950 p-1 pb-0 shadow-2xl transition-all duration-500 group-hover:translate-y-1" 
              style={{ height: "82%", transform: "translateX(-50%)" }}
            >
              <div className="size-full overflow-hidden rounded-t-[4px] border border-neutral-900 bg-neutral-900">
                <img 
                  alt={p.title} 
                  loading="lazy" 
                  decoding="async" 
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" 
                  src={p.image} 
                />
              </div>
            </div>
          </div>
        </a>

        {/* Project Info */}
        <div className="flex flex-col gap-2 px-1">
          <div className="flex items-center justify-between">
            <div className="flex min-w-0 items-center gap-2">
              <h3 className="font-serif truncate text-lg font-bold tracking-wide text-neutral-100 transition-colors duration-300">
                {p.title}
              </h3>
              {p.status.toLowerCase().includes("startup") ? (
                <span className="font-sans inline-flex shrink-0 items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-amber-400 backdrop-blur">
                  <Star size={10} className="fill-amber-500/90 text-amber-500/95" />
                  <span>Startup</span>
                </span>
              ) : p.status.toLowerCase().includes("live") ? (
                <span className="font-sans inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-400">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 animate-[statusDotPulse_2s_ease-in-out_infinite]"></span>
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  </span>
                  Live
                </span>
              ) : (
                <span className="font-sans inline-flex shrink-0 items-center gap-1.5 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-yellow-400">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-yellow-500 animate-[statusDotPulse_2s_ease-in-out_infinite]"></span>
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-yellow-500"></span>
                  </span>
                  Building
                </span>
              )}
            </div>
            
            <div className="flex items-center gap-3">
              {p.link && (
                <a 
                  href={p.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`Visit ${p.title} website`}
                >
                  <Globe size={16} className="cursor-pointer text-neutral-400 opacity-70 transition hover:opacity-100 hover:text-neutral-50" />
                </a>
              )}
              {p.github && (
                <a 
                  href={p.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`View ${p.title} repository`}
                >
                  <Github size={16} className="cursor-pointer text-neutral-400 opacity-70 transition hover:opacity-100 hover:text-neutral-50" />
                </a>
              )}
            </div>
          </div>
          
          <p className="font-sans line-clamp-2 h-10 text-sm text-neutral-400 transition-colors duration-300 group-hover:text-neutral-300">
            {p.description}
          </p>
          
          <div className="flex items-center justify-between gap-3 pt-2">
            <div className="flex flex-wrap gap-2 items-center">
              {p.tech.map((t, idx) => {
                const key = t.toLowerCase();
                const IconComponent = techIcons[key];

                if (IconComponent) {
                  return (
                    <div 
                      key={idx} 
                      title={t}
                    >
                      <IconComponent size={14} />
                    </div>
                  );
                }

                return (
                  <span 
                    key={idx} 
                    className="text-[10px] text-neutral-400 font-medium border border-neutral-800/80 rounded-md px-2 py-0.5 bg-neutral-950/60"
                  >
                    {t}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
