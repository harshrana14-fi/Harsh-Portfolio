"use client";

import { motion } from "framer-motion";
import ProfileCard from "@/components/ProfileCard";
import PageLayout from "@/components/PageLayout";
import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiCplusplus,
  SiExpress,
  SiNumpy,
  SiPostman,
  SiRuby,
  SiRubyonrails,
  SiSocketdotio,
  SiDart,
  SiAndroid,
  SiFigma,
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";

const skillCategories = [
  {
    name: "Programming Languages",
    skills: [
      { name: "Java", icon: FaJava },
      { name: "Python", icon: SiPython },
      { name: "C/C++", icon: SiCplusplus },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    name: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Node.js", icon: SiExpress },
      { name: "Express.js", icon: SiExpress },
      { name: "Ruby on Rails", icon: SiRubyonrails },
      { name: "Ruby", icon: SiRuby },
      { name: "Socket.io", icon: SiSocketdotio },
    ],
  },
  {
    name: "Developer Tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "Firebase", icon: SiFirebase },
      { name: "Figma", icon: SiFigma },
      { name: "Android", icon: SiAndroid },
      { name: "Dart", icon: SiDart },
      { name: "Postman", icon: SiPostman },
    ],
  },
  {
    name: "Databases & Libraries",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Python", icon: SiPython },
      { name: "Firebase", icon: SiFirebase },
      { name: "NumPy", icon: SiNumpy },
    ],
  },
  {
    name: "Cloud & Integrations",
    skills: [
      { name: "AWS", icon: FaAws },
      { name: "REST APIs", icon: SiPostman },
      { name: "HTML/CSS", icon: SiHtml5 },
    ],
  },
];

export default function AboutPage() {
  return (
    <PageLayout>
      {/* About Section */}
      <section className="py-10 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-2 block">
            ● Identity Log
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-1">
            Who Am I?
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 mt-10">
          <motion.div
            className="lg:col-span-3 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Designing with intent. Shipping with discipline.
            </h3>

            <div className="rounded-xl p-6 space-y-4" style={{ backgroundColor: "var(--paper-dark)", border: "1px solid var(--light)" }}>
              <p className="text-sm sm:text-base text-neutral-500 leading-relaxed">
                I work at the intersection of product thinking and engineering
                execution, shaping interfaces and backend systems into one coherent
                experience.
              </p>
              <p className="text-sm sm:text-base text-neutral-500 leading-relaxed">
                My process is simple: frame the problem clearly, cut the noise, build
                fast, and iterate with real user feedback until it feels inevitable.
              </p>
              <p className="text-sm sm:text-base text-neutral-500 leading-relaxed">
                From early experiments to deployed platforms, I focus on reliability,
                clarity, and momentum.
              </p>
            </div>

            <div className="rounded-xl p-6" style={{ backgroundColor: "var(--paper-dark)", border: "1px solid var(--light)" }}>
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-4 block">
                Quick Facts
              </span>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-neutral-500 text-[10px] uppercase tracking-[0.1em]">Location</p>
                  <p className="font-semibold text-neutral-200 mt-0.5">Delhi, India</p>
                </div>
                <div>
                  <p className="text-neutral-500 text-[10px] uppercase tracking-[0.1em]">Experience</p>
                  <p className="font-semibold text-neutral-200 mt-0.5">1+ Year</p>
                </div>
                <div>
                  <p className="text-neutral-500 text-[10px] uppercase tracking-[0.1em]">Focus</p>
                  <p className="font-semibold text-neutral-200 mt-0.5">Web + AI</p>
                </div>
                <div>
                  <p className="text-neutral-500 text-[10px] uppercase tracking-[0.1em]">Status</p>
                  <p className="font-semibold text-neutral-200 mt-0.5">Available</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-2 flex justify-center lg:justify-end lg:sticky lg:top-28 lg:self-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            <div style={{ perspective: "1200px" }}>
              <ProfileCard flipped />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 border-t border-neutral-900/60">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-2 block">
            ● My Toolkit
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white">
            Skills & Expertise
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="rounded-xl p-6 transition-colors duration-200" style={{ backgroundColor: "var(--paper-dark)", border: "1px solid var(--light)" }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <h3 className="font-serif text-lg font-bold text-white mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={sIdx}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors duration-150" style={{ backgroundColor: "var(--paper-dark)", border: "1px solid var(--light)" }}
                    >
                      <div className="flex-shrink-0 text-neutral-500">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs text-neutral-300 font-medium">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
