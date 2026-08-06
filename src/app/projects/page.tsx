"use client";

import { motion } from "framer-motion";
import Masthead from "@/components/navbar";
import ProjectCard from "@/components/ProjectCard";
import PageWrapper from "@/components/PageWrapper";
import Footer from "@/components/Footer";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <Masthead />
      <main className="relative flex min-h-screen justify-center font-sans">
        <motion.div
          className="relative max-w-4xl w-full sm:px-10 mx-auto px-6 pt-28 pb-10"
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >

          <div className="mb-6">
            <h1 className="font-serif text-3xl font-bold tracking-tight text-neutral-50 mb-3">
              <span className="link--elara">Projects</span>
            </h1>
            <div className="w-full mb-5 border-t border-neutral-800/80" />
            <p className="inline-block border border-dashed border-neutral-700 bg-neutral-900 px-4 py-[7px] text-sm font-medium text-neutral-300">
              A collection of projects I&apos;ve built — spanning full-stack apps and AI models.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 py-6 md:grid-cols-2">
            {projects.map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </PageWrapper>
  );
}
