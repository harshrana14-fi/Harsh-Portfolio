"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";

type Props = {
  flipped?: boolean;
};

export default function ProfileCard({ flipped = false }: Props) {
  return (
    <motion.div
      initial={flipped ? { rotateY: 180, opacity: 0 } : { opacity: 0, y: 30 }}
      animate={flipped ? { rotateY: 0, opacity: 1 } : { opacity: 1, y: 0 }}
      transition={flipped ? { duration: 0.7, ease: [0.76, 0, 0.24, 1] } : { duration: 0.5 }}
      style={{ perspective: "1200px" }}
    >
      <div className="rounded-xl border border-neutral-800 bg-black p-3 transition-all duration-300 hover:border-neutral-700 hover:shadow-2xl hover:shadow-neutral-500/5 w-full max-w-xs sm:max-w-sm">
        <div className="flex flex-col gap-4">
          {/* Photo area */}
          <div className="rounded-[12px] border border-neutral-800 bg-neutral-900/50 p-[4px]">
            <div className="relative h-[200px] w-full overflow-hidden rounded-[8px] border border-neutral-800 bg-neutral-900">
              <Image
                src="/images/pic.jpg"
                alt="Harsh Jatoliya"
                fill
                className="object-cover"
                style={{ objectPosition: "center 30%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* "Open to work" badge */}
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-black/80 backdrop-blur-sm px-3 py-1 text-[10px] font-medium text-neutral-200">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 animate-ping" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  Open to work
                </span>
              </div>

              {/* Name overlay at bottom */}
              <div className="absolute bottom-3 left-3 right-3">
                <h2 className="text-lg font-bold tracking-wide text-white">
                  Harsh Jatoliya
                </h2>
                <p className="text-[11px] text-neutral-300 mt-0.5">
                  Full Stack Developer
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-3 px-1 pb-1">
            <p className="text-sm text-neutral-400 leading-relaxed">
              Building Web + AI Systems. Passionate about crafting scalable digital
              experiences.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/harshrana14-fi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-neutral-800 bg-neutral-900/50 flex items-center justify-center text-neutral-400 hover:text-neutral-100 hover:border-neutral-700 hover:bg-neutral-800/50 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/harsh-rana-13-fi/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-neutral-800 bg-neutral-900/50 flex items-center justify-center text-neutral-400 hover:text-neutral-100 hover:border-neutral-700 hover:bg-neutral-800/50 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:ranajiharsxx14@gmail.com"
                className="w-9 h-9 rounded-lg border border-neutral-800 bg-neutral-900/50 flex items-center justify-center text-neutral-400 hover:text-neutral-100 hover:border-neutral-700 hover:bg-neutral-800/50 transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Resume button */}
            <Link
              href="/resume"
              className="flex items-center justify-center gap-2 rounded-lg border border-neutral-700 bg-neutral-800/50 px-4 py-2.5 text-xs font-medium text-neutral-200 hover:bg-neutral-700/50 hover:border-neutral-600 transition-all duration-200"
            >
              <Download className="w-3.5 h-3.5" />
              Download Resume
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
