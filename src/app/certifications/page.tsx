"use client";

import { motion } from "framer-motion";
import Masthead from "@/components/navbar";
import PageWrapper from "@/components/PageWrapper";
import Footer from "@/components/Footer";
import { certifications } from "@/lib/data";

export default function CertificationsPage() {
  const safeCertifications = Array.isArray(certifications)
    ? certifications.filter(
        (c) => c && typeof c === "object" && c.id != null && c.path && c.title
      )
    : [];

  return (
    <PageWrapper>
      <Masthead />
      <main className="relative flex min-h-screen justify-center font-sans">
        <motion.div
          className="relative max-w-4xl w-full sm:px-10 mx-auto px-6 pt-28 pb-10"
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6">
            <h1 className="font-serif text-3xl font-bold tracking-tight text-neutral-50 mb-3">
              <span className="link--elara">Certifications</span>
            </h1>
            <div className="w-full mb-5 border-t border-neutral-800/80" />
            <p className="inline-block border border-dashed border-neutral-700 bg-neutral-900 px-4 py-[7px] text-sm font-medium text-neutral-300">
              My credentials and open source achievements.
            </p>
          </div>

          {safeCertifications.length === 0 ? (
            <p className="text-sm text-neutral-500 py-10 text-center">
              No certifications to show right now.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-6 py-6 md:grid-cols-2">
              {safeCertifications.map((cert, i) => (
                <div
                  key={cert.id ?? `${cert.title}-${i}`}
                  className="group relative z-10 rounded-2xl border border-neutral-800/80 bg-neutral-900/75 p-3.5 transition-all duration-200 hover:border-neutral-700/80 hover:shadow-lg"
                >
                  {/* Image area */}
                  <div className="rounded-[12px] border border-neutral-800 bg-neutral-900/50 p-[4px]">
                          <div className="relative h-[220px] w-full overflow-hidden rounded-[8px] border border-neutral-800 bg-neutral-900 select-none">
                      {/* grid background */}
                      <div
                        className="absolute inset-0"
                        style={{
                              backgroundImage:
                                "linear-gradient(to right, var(--pattern-fg) 1px, transparent 1px), linear-gradient(to bottom, var(--pattern-fg) 1px, transparent 1px)",
                              /* larger grid and much lower opacity to reduce paint cost */
                              backgroundSize: "20px 20px",
                              opacity: 0.06,
                        }}
                      />
                          <img
                            alt={cert.title}
                            decoding="async"
                            loading="lazy"
                            fetchPriority="low"
                            className="relative z-10 block w-full h-full object-cover"
                            src={cert.path}
                            style={{ transform: "translateZ(0)" }}
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display = "none";
                          const sibling = e.currentTarget
                            .nextElementSibling as HTMLElement | null;
                          if (sibling) sibling.classList.remove("hidden");
                        }}
                      />
                      <div className="hidden absolute inset-0 z-20 flex items-center justify-center p-6 text-center">
                        <span className="text-xs text-neutral-500">
                          Image not found
                          <br />
                          <code className="text-[10px] opacity-60">{cert.path}</code>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Info area */}
                  <div className="flex flex-col gap-1.5 px-1 pt-3 pb-1">
                    <h3 className="font-serif text-lg font-bold tracking-wide text-neutral-100">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Issued by{" "}
                      <span className="font-medium text-neutral-300">
                        {cert.issuer ?? "Unknown"}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </main>
      <Footer />
    </PageWrapper>
  );
}