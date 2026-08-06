"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const navLinks: { href: string; label: string; external?: boolean }[] = [
  { href: "/projects", label: "Projects" },
  { href: "/certifications", label: "Certifications" },
];

const DM_LINK = "https://mail.google.com/mail/u/0/?fs=1&to=jatoliyaharsh8@gmail.com&tf=cm";

// Smooth, slightly springy easing — no CSS class-swap layout thrash.
const SPRING = { type: "spring", stiffness: 300, damping: 32, mass: 0.6 } as const;

export default function Masthead() {
  const [scrolled, setScrolled] = useState(false);
  const tickingRef = useRef(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 40);
        tickingRef.current = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed top-0 left-0 right-0 z-60 flex justify-center w-full pointer-events-none">
      <motion.div
        initial={false}
        animate={
          scrolled
            ? {
                maxWidth: "48rem",
                marginTop: 16,
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 10,
                paddingBottom: 10,
                borderRadius: 999,
                boxShadow: "0 8px 30px rgb(0,0,0,0.08)",
              }
            : {
                maxWidth: "56rem",
                marginTop: 0,
                paddingLeft: 40,
                paddingRight: 40,
                paddingTop: 24,
                paddingBottom: 24,
                borderRadius: 0,
                boxShadow: "0 0 0 rgba(0,0,0,0)",
              }
        }
        transition={SPRING}
        className={`w-full mx-4 sm:mx-auto pointer-events-auto flex items-center justify-between border
          ${scrolled
            ? "border-neutral-200/80 bg-white/80 dark:border-neutral-800/80 dark:bg-neutral-900/80 backdrop-blur-sm"
            : "border-transparent bg-transparent"
          }`}
        style={{ willChange: "max-width, padding, margin, border-radius" }}
      >
        {/* Logo / Avatar - Flex Centered */}
        <Link
          href="/"
          className="flex items-center gap-2 group shrink-0 transition-opacity hover:opacity-75"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800">
            <img
              src="/logo.jpg"
              alt="Harsh Jatoliya"
              className="h-full w-full object-cover"
              onError={(e) => {
                const el = e.currentTarget as HTMLImageElement;
                el.style.display = "none";
                const parent = el.parentElement;
                if (parent) {
                  parent.textContent = "H";
                  parent.className = "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-900 dark:bg-neutral-100 text-neutral-50 dark:text-neutral-950 font-serif text-sm font-bold";
                }
              }}
            />
          </div>
          <span className="font-serif text-xl sm:text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 hidden sm:inline-block leading-none">
            .harsh<em className="italic font-normal">codes</em>
          </span>
        </Link>

        {/* Right side navigation & actions - Flex Centered in one row */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            {navLinks.map(({ href, label, external }) => {
              if (external) {
                return (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors duration-200"
                  >
                    {label} ↗
                  </a>
                );
              }

              const active = isActive(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative inline-flex items-center px-2.5 py-1.5 text-sm font-medium transition-colors duration-200 ${active
                      ? "text-neutral-950 dark:text-neutral-50"
                      : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200"
                    }`}
                >
                  <span className="relative">
                    {label}
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] bg-current rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Vertical Separator Line */}
          <div className="h-4 w-px bg-neutral-300 dark:bg-neutral-700 self-center" />

          {/* Shoot a DM Button */}
          <a
            href={DM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-neutral-800 bg-neutral-900 px-4 py-1.5 text-xs font-semibold text-neutral-50 transition-all duration-200 hover:bg-neutral-800 hover:scale-105 active:scale-95 dark:border-neutral-200 dark:bg-neutral-100 dark:text-neutral-950 dark:hover:bg-neutral-200"
          >
            <Mail size={12} className="align-middle" />
            <span className="hidden sm:inline">Shoot a DM</span>
            <span className="sm:hidden">DM</span>
          </a>
        </div>
      </motion.div>
    </header>
  );
}