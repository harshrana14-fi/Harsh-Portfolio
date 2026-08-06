"use client";

import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200/80 dark:border-neutral-800/80 py-5 px-6 sm:px-10">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-neutral-600 dark:text-neutral-400">
          @harshjatoliya
        </span>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/harshrana14-fi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50"
          >
            <Github size={17} />
          </a>
          <a
            href="https://x.com/rana972799"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/harsh-rana-13-fi/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50"
          >
            <Linkedin size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
