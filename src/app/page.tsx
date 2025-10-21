"use client";

import Image from "next/image";
import TopFloatNav from "@/components/TopFloatNav";
import CustomCursor from "@/components/CustomCursor";
import Typewriter from "@/components/Typewriter";
import ContactFormClient from "@/components/ContactForm";
import BookCallButton from "@/components/BookCallButton";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui";
import {SiHtml5,SiJavascript,SiTypescript,SiPython,SiReact,SiNextdotjs,SiMongodb,SiAndroid,SiDart,SiFigma,SiFirebase,SiGit,SiCplusplus,SiExpress,SiRuby,SiRubyonrails,SiSocketdotio,SiNumpy,SiDatabricks,SiPostman,SiAbbott} from "react-icons/si";
import { FaAws, FaJava} from "react-icons/fa";
// ProfileCard inlined to avoid module resolution issues during build
function IconBtn({ href, label, icon }: { href: string; label: string; icon: string }) {
  return (
    <a
      href={href}
      title={label}
      target={href.startsWith("http") ? "_blank" : undefined}
      className="grid h-6 w-6 sm:h-7 sm:w-7 md:h-9 md:w-9 place-items-center rounded-full border-2 border-slate-300 dark:border-slate-600 bg-white/90 dark:bg-slate-800/90 hover:bg-blue-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
      aria-label={label}
    >
      <svg viewBox="0 0 24 24" width="12" height="12" className="sm:w-[14px] sm:h-[14px] md:w-[18px] md:h-[18px]" fill="currentColor" dangerouslySetInnerHTML={{ __html: icon }} />
    </a>
  );
}

function ProfileCard() {
  return (
    <aside className="relative mx-2 sm:mx-4 mt-4 sm:mt-6 mb-6 sm:mb-8 z-10 md:z-40 w-full max-w-[520px] md:max-w-none md:mt-0 md:mb-0 md:mx-0 md:fixed md:left-8 md:top-32 md:bottom-6 md:w-80">
      <div className="relative group">
        <span aria-hidden className="pointer-events-none absolute left-0 top-0 h-full w-[8px] rounded-l-3xl bg-gradient-to-r from-white/60 to-transparent opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-70" />
        <span aria-hidden className="pointer-events-none absolute right-0 top-0 h-full w-[8px] rounded-r-3xl bg-gradient-to-l from-white/60 to-transparent opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-70" />
        <div className="relative rounded-2xl border-2 border-theme bg-white/95 dark:bg-black/40 backdrop-blur-md p-2 sm:p-3 md:p-4 transition-transform duration-300 group-hover:-translate-y-0.5 shadow-xl dark:shadow-2xl">
          <div className="overflow-hidden rounded-xl aspect-[16/10] bg-gradient-to-br from-emerald-500 to-purple-600 relative">
            <Image 
              src="/images/pic.jpg" 
              alt="Profile" 
              fill 
              className="object-cover group-hover:scale-110 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
          <h1 className="mt-2 sm:mt-3 md:mt-4 text-lg sm:text-xl md:text-2xl font-bold text-slate-800 dark:text-white">Harsh Jatoliya</h1>
          <p className="text-xs sm:text-[13px] font-medium text-blue-600 dark:text-blue-300">Full Stack Developer | Tech Enthusiast</p>
          <p className="mt-1 sm:mt-2 md:mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">Crafting intuitive, scalable, and immersive products that bridge tech and imagination.</p>
          <div className="my-2 sm:my-3 md:my-4 h-px bg-slate-200 dark:bg-slate-700" />
          <a href="/resume" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-lg hover:opacity-95 transition-opacity">
            <span>Download Resume</span>
          </a>
          <div className="mt-2 sm:mt-3 md:mt-4 flex items-center gap-1.5 sm:gap-2 md:gap-3">
            <IconBtn label="GitHub" href="https://github.com/harshrana14-fi" icon="<path d='M12 .5A11.5 11.5 0 0 0 .5 12c0 5.07 3.29 9.37 7.86 10.88.58.1.8-.26.8-.57v-2.1c-3.2.7-3.87-1.37-3.87-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.39.98.1-.76.4-1.27.73-1.56-2.55-.29-5.23-1.28-5.23-5.72 0-1.26.45-2.3 1.2-3.11-.12-.3-.52-1.51.12-3.15 0 0 .98-.31 3.2 1.19a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.2-1.19 3.2-1.19.64 1.64.24 2.85.12 3.15.75.81 1.2 1.85 1.2 3.1 0 4.45-2.68 5.44-5.24 5.73.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.57A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z'/>" />
            <IconBtn label="Email" href="mailto:ranajiharsxx14@gmail.com" icon="<path d='M2 5h20v14H2V5zm10 7 10-7H2l10 7Z'/>" />
            <IconBtn label="LinkedIn" href="https://www.linkedin.com/in/harsh-rana-13-fi/" icon="<path d='M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 5 2.12 4.98 3.5zM0 8h5v15H0V8zm7.5 0H12v2.2h.06c.63-1.2 2.17-2.46 4.47-2.46 4.78 0 5.67 3.15 5.67 7.25V23H17v-6.8c0-1.62-.03-3.7-2.26-3.7-2.26 0-2.61 1.77-2.61 3.6V23H7.5V8z'/>" />
          </div>
        </div>
      </div>
      <div className="my-6 h-px bg-theme-border" />
    </aside>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen md:pl-80 overflow-x-hidden w-full max-w-full">
      <TopFloatNav />
      {/* Desktop sidebar card */}
      <div className="hidden md:block">
        <ProfileCard />
      </div>
      <CustomCursor />

      {/* Hero without name card */}
      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 max-w-6xl w-full overflow-x-hidden">
        <section className="relative py-8 sm:py-12 md:py-20" id="home">
          {/* Mobile/Tablet inline card (appears after navbar, before hero text) */}
          <div className="md:hidden mb-6">
            <ProfileCard />
          </div>
          <motion.p 
            className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-theme-secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            I Design • Code • Deploy.
          </motion.p>
          <motion.h1 
            className="mt-3 sm:mt-4 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-theme-primary">I am</span>
            <br />
            <Typewriter
              items={["Software Engineer", "Web Developer", "B.Tech Student"]}
              className="text-theme-primary"
              typingSpeedMs={70}
              pauseMs={900}
              deletingSpeedMs={35}
            />
          </motion.h1>
          <motion.p 
            className="mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg text-theme-secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Passionate about crafting intuitive, engaging, and scalable user experiences. I build high‑quality digital products that solve real problems.
          </motion.p>
          <motion.div 
            className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <a 
              href="#projects" 
              className="rounded-md border border-theme px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium hover:bg-theme-subtle hover:scale-105 hover:shadow-lg hover:shadow-theme/20 hover:border-theme/60 transition-all duration-200 ease-out"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="rounded-md border border-theme px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium hover:bg-theme-subtle hover:scale-105 hover:shadow-lg hover:shadow-theme/20 hover:border-theme/60 transition-all duration-200 ease-out"
            >
              Contact
            </a>
            <a 
              href="#skills" 
              className="rounded-md border border-theme px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium hover:bg-theme-subtle hover:scale-105 hover:shadow-lg hover:shadow-theme/20 hover:border-theme/60 transition-all duration-200 ease-out"
            >
              Skills
            </a>
          </motion.div>
          <motion.div 
            className="mt-8 sm:mt-10 grid grid-cols-2 gap-6 sm:gap-10 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <div className="hover:scale-105 transition-transform duration-200">
              <div className="text-2xl sm:text-4xl font-extrabold text-theme-primary">+25</div>
              <div className="text-xs sm:text-sm text-theme-secondary">Projects Completed</div>
            </div>
            <div className="hover:scale-105 transition-transform duration-200">
              <div className="text-2xl sm:text-4xl font-extrabold text-theme-primary">+10</div>
              <div className="text-xs sm:text-sm text-theme-secondary">Open Source Contributions</div>
            </div>
          </motion.div>
          <motion.div 
            className="mt-6 flex items-center gap-4 text-sm text-theme-secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <a 
              href="https://github.com/harshrana14-fi" 
              target="_blank" 
              className="underline decoration-dotted underline-offset-4 hover:text-theme-primary transition-colors hover:scale-105"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/harsh-rana-13-fi/" 
              target="_blank" 
              className="underline decoration-dotted underline-offset-4 hover:text-theme-primary transition-colors hover:scale-105"
            >
              LinkedIn
            </a>
            <a 
              href="#contact" 
              className="underline decoration-dotted underline-offset-4 hover:text-theme-primary transition-colors hover:scale-105"
            >
              Connect
            </a>
          </motion.div>
        </section>

        <section id="about" className="py-12 sm:py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-8 sm:mb-12 md:mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-theme-primary mb-4 sm:mb-6">About Me</h2>
              <div className="w-16 sm:w-24 h-0.5 bg-theme mx-auto rounded-full"></div>
            </motion.div>
            
            <motion.div 
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 sm:p-8 md:p-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                {/* Profile Card */}
                <motion.div 
                  className="flex justify-center lg:justify-start"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="relative group hover:scale-105 transition-transform duration-300">
                    {/* Card Container */}
                    <div className="w-72 sm:w-80 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl overflow-hidden group-hover:shadow-theme/20 transition-all duration-300">
                      {/* Image Section */}
                      <div className="relative h-64 sm:h-72 overflow-hidden rounded-2xl border-2 border-emerald-500/20 shadow-2xl shadow-emerald-500/10">
            <Image 
              src="/hero1.jpg" 
              alt="Profile" 
              fill 
              className="object-cover group-hover:scale-105 transition-all duration-500"
              style={{ objectPosition: 'center top' }}
                        />
                        <div className="absolute inset-0 ring-1 ring-white/20 rounded-2xl"></div>
                      </div>
                      
                      {/* Name Section */}
                      <div className="p-4 sm:p-6 text-center">
                        <h3 className="text-xl sm:text-2xl font-bold text-theme-primary mb-1">Harsh Jatoliya</h3>
                        <p className="text-theme-secondary text-xs sm:text-sm">Full Stack Developer</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div 
                  className="space-y-4 sm:space-y-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                    <h3 className="text-2xl sm:text-3xl font-bold text-theme-primary mb-4 sm:mb-6">Full Stack Developer</h3>
                  
                  <div className="space-y-4 sm:space-y-6">
                    <p className="text-sm sm:text-base md:text-lg text-theme-secondary leading-relaxed">
                      I am a Full Stack Developer and AI specialist with a proven track record in delivering innovative, high-performance solutions for freelance clients, startups, and enterprises. With expertise in both frontend and backend development, I focus on building scalable web applications and seamless AI-driven experiences.
                    </p>
                    
                    <p className="text-sm sm:text-base md:text-lg text-theme-secondary leading-relaxed">
                      Currently in my 2nd year of B.Tech in Information Technology at Maharaja Agrasen Institute of Technology (MAIT), GGSIPU, I leverage both my academic and real-world experience to solve complex challenges.
                    </p>
                    
                    <p className="text-sm sm:text-base md:text-lg text-theme-secondary leading-relaxed">
                      I am passionate about creating products that not only meet but exceed expectations, ensuring optimal performance, scalability, and a great user experience.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="skills" className="py-12 sm:py-16 md:py-20">
          <motion.div 
            className="text-center mb-8 sm:mb-10 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
    <SectionHeading>Skills & Expertise</SectionHeading>
            <motion.p 
              className="mt-2 sm:mt-3 text-sm sm:text-base text-theme-secondary max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
      A comprehensive toolkit of technologies I use to build innovative solutions
            </motion.p>
          </motion.div>
  
  {/* Compact Skills Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
    {/* Programming Languages */}
            <motion.div 
              className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl rounded-xl border border-slate-700/50 p-4 sm:p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -3, scale: 1.01 }}
            >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-blue-500/30">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white">Languages</h3>
        </div>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {[
            { name: "Java", icon: <FaJava className="w-4 h-4" /> },
            { name: "Python", icon: <SiPython className="w-4 h-4" /> },
            { name: "C/C++", icon: <SiCplusplus className="w-4 h-4" /> },
            { name: "JavaScript", icon: <SiJavascript className="w-4 h-4" /> },
            { name: "TypeScript", icon: <SiTypescript className="w-4 h-4" /> },
            { name: "SQL", icon: <SiDatabricks className="w-4 h-4" /> },
            { name: "HTML/CSS", icon: <><SiHtml5 className="w-4 h-4" /> </> }
          ].map((skill) => (
            <div key={skill.name} className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/50 hover:bg-slate-700/60 hover:border-blue-500/30 transition-all duration-200">
              <div className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 flex-shrink-0">{skill.icon}</div>
              <span className="text-white text-xs sm:text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>

    {/* Frameworks & Libraries */}
            <motion.div 
              className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -3, scale: 1.01 }}
            >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-purple-500/30">
            <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-white">Frameworks</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            { name: "React", icon: <SiReact className="w-4 h-4" /> },
            { name: "Next.js", icon: <SiNextdotjs className="w-4 h-4" /> },
            { name: "Node.js", icon: <SiExpress className="w-4 h-4" /> },
            { name: "Express.js", icon: <SiExpress className="w-4 h-4" /> },
            { name: "Ruby on Rails", icon: <SiRubyonrails className="w-4 h-4" /> },
            { name: "Ruby", icon: <SiRuby className="w-4 h-4" /> },
            { name: "Socket.io", icon: <SiSocketdotio className="w-4 h-4" /> }
          ].map((skill) => (
            <div key={skill.name} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/50 hover:bg-slate-700/60 hover:border-purple-500/30 transition-all duration-200">
              <div className="w-4 h-4 text-purple-400 flex-shrink-0">{skill.icon}</div>
              <span className="text-white text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>

    {/* Developer Tools */}
            <motion.div 
              className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -3, scale: 1.01 }}
            >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center border border-emerald-500/30">
            <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-white">Dev Tools</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            { name: "Git", icon: <SiGit className="w-4 h-4" /> },
            { name: "GitHub", icon: <SiGit className="w-4 h-4" /> },
            { name: "Firebase", icon: <SiFirebase className="w-4 h-4" /> },
            { name: "Figma", icon: <SiFigma className="w-4 h-4" /> },
            { name: "Android", icon: <SiAndroid className="w-4 h-4" /> },
            { name: "Dart", icon: <SiDart className="w-4 h-4" /> },
            { name: "Postman", icon: <SiPostman className="w-4 h-4" /> }
          ].map((skill) => (
            <div key={skill.name} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/50 hover:bg-slate-700/60 hover:border-emerald-500/30 transition-all duration-200">
              <div className="w-4 h-4 text-emerald-400 flex-shrink-0">{skill.icon}</div>
              <span className="text-white text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>

    {/* Data & Libraries */}
            <motion.div 
              className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              viewport={{ once: true }}
              whileHover={{ y: -3, scale: 1.01 }}
            >
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center border border-orange-500/30">
            <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-white">Data & DBs</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            { name: "MongoDB", icon: <SiMongodb className="w-4 h-4" /> },
            { name: "Python", icon: <SiPython className="w-4 h-4" /> },
            { name: "Firebase", icon: <SiFirebase className="w-4 h-4" /> },
            { name: "NumPy", icon: <SiNumpy className="w-4 h-4" /> },
             { name: "Matplotlib", icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></svg> }
          ].map((skill) => (
            <div key={skill.name} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/50 hover:bg-slate-700/60 hover:border-orange-500/30 transition-all duration-200">
              <div className="w-4 h-4 text-orange-400 flex-shrink-0">{skill.icon}</div>
              <span className="text-white text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>

    {/* API & Cloud */}
            <motion.div 
              className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -3, scale: 1.01 }}
            >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30">
            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-white">Cloud & APIs</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            { name: "AWS", icon: <FaAws className="w-4 h-4" /> },
            { name: "REST APIs", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg> },
            { name: "Cloud Computing", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg> },
            { name: "DevOps", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg> },
            { name: "System Design", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg> }
          ].map((skill) => (
            <div key={skill.name} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/50 hover:bg-slate-700/60 hover:border-cyan-500/30 transition-all duration-200">
              <div className="w-4 h-4 text-cyan-400 flex-shrink-0">{skill.icon}</div>
              <span className="text-white text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>

    {/* Core Competencies */}
            <motion.div 
              className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 hover:border-pink-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              viewport={{ once: true }}
              whileHover={{ y: -3, scale: 1.01 }}
            >
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center border border-pink-500/30">
            <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-white">Specializations</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            { name: "Data Analysis", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg> },
            { name: "Full Stack", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg> },
            { name: "Problem Solving", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg> },
            { name: "AI/ML", icon: <SiAbbott className="w-4 h-4" /> }
          ].map((skill) => (
            <div key={skill.name} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/50 hover:bg-slate-700/60 hover:border-pink-500/30 transition-all duration-200">
              <div className="w-4 h-4 text-pink-400 flex-shrink-0">{skill.icon}</div>
              <span className="text-white text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
          </motion.div>
</section>

        <section id="projects" className="py-12 sm:py-16 md:py-24">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <SectionHeading>Featured Projects</SectionHeading>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-theme-secondary max-w-3xl mx-auto">
              A comprehensive showcase of my recent work spanning full-stack development, AI/ML applications, and innovative web solutions. Each project demonstrates technical expertise and creative problem-solving.
            </p>
          </div>

          {/* Professional Timeline Layout */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Timeline Line - Hidden on mobile */}
            <motion.div 
              className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-emerald-500 via-purple-500 to-green-500 opacity-30"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            ></motion.div>
            
            <div className="space-y-6 sm:space-y-8">
              {[
                {
                  title: "Nyagrik",
                  description: "Legal consultation platform providing information and services for citizens with document templates.",
                  tech: ["React", "Next.js", "MongoDB", "TailwindCSS", "API Integration", "TypeScript"],
                  icon: "⚖️",
                  link: "https://nyay-2-0.vercel.app/",
                  category: "Frontend",
                  year: "2023",
                  status: "Completed",
                  impact: "Legal Technology"
                },
                {
                  title: "JALGENE",
                  description: "AI-powered marine biodiversity research platform that processes environmental DNA data to identify and classify marine species.",
                  tech: ["Next.js", "TypeScript", "React", "TailwindCSS", "Firebase", "API Integration", "AI-ML", "python", "AWS"],
                  icon: "🌊",
                  link: "https://deapsea-edna.vercel.app/",
                  category: "Full Stack",
                  year: "2024",
                  status: "Active",
                  impact: "Research Platform"
                },
                {
                  title: "WasteFlow",
                  description: "AI-powered waste management platform connecting waste producers with recyclers using smart matching algorithms.",
                  tech: ["Next.js", "MongoDB", "OpenAI API", "TailwindCSS", "Firebase", "python", "Yolo V8", "Google Colab"],
                  icon: "♻️",
                  link: "https://waste-market-place.vercel.app/",
                  category: "AI-ML",
                  year: "2024",
                  status: "Active",
                  impact: "Environmental Impact"
                },
                {
                  title: "LEXHAVEN",
                  description: "Law internship portal for students to find internships and for companies to find interns.",
                  tech: ["React", "Next.js", "MongoDB", "TailwindCSS", "TypeScript"],
                  icon: "👨‍🎓",
                  link: "https://law-interns-portal.vercel.app/",
                  category: "Full Stack",
                  year: "2024",
                  status: "Active",
                  impact: "Law Internship Portal"
                },
                {
                  title: "StocKentra",
                  description: "Smart stock market analysis platform with real-time trends and AI-powered insights for investors and traders.",
                  tech: ["React", "Next.js", "MongoDB", "TailwindCSS", "API Integration"],
                  icon: "📊",
                  link: "https://stoc-kentra.vercel.app/",
                  category: "Full Stack",
                  year: "2024",
                  status: "Active",
                  impact: "Financial Technology"
                },
                {
                  title: "TrendWise",
                  description: "SEO-optimized blog platform with AI article generation and trending topic fetching capabilities.",
                  tech: ["Next.js", "MongoDB", "OpenAI API", "TailwindCSS", "Firebase"],
                  icon: "📈",
                  link: "https://trendwise-three.vercel.app/",
                  category: "Full Stack",
                  year: "2024",
                  status: "Active",
                  impact: "Content Platform"
                },
                {
                  title: "AI Tuition",
                  description: "AI-powered personalized learning platform with ML-driven study path recommendations and progress tracking.",
                  tech: ["Python", "Next.js", "Firebase", "TailwindCSS", "API Integration"],
                  icon: "🤖",
                  link: "https://ai-tuition.vercel.app/",
                  category: "AI/ML",
                  year: "2023",
                  status: "Completed",
                  impact: "Educational Technology"
                },
                {
                  title: "3D Solar System",
                  description: "Interactive 3D solar system simulation with realistic planetary motion and educational content.",
                  tech: ["Three.js", "JavaScript", "HTML/CSS", "Texture Mapping"],
                  icon: "🪐",
                  link: "https://3-d-solar-system-simulation-chi.vercel.app/",
                  category: "Frontend",
                  year: "2023",
                  status: "Completed",
                  impact: "Educational Tool"
                }
              ].map((project, index) => (
                <motion.div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {/* Timeline Node - Hidden on mobile */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-emerald-500 to-purple-500 rounded-full border-4 border-slate-900 z-10 shadow-lg shadow-emerald-500/25"></div>
                  
                  {/* Project Card */}
                  <motion.div 
                    className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                    whileHover={{ 
                      y: -5,
                      scale: 1.01,
                      transition: { duration: 0.2, ease: "easeOut" }
                    }}
                  >
                    <div className="group relative bg-slate-800/90 backdrop-blur-xl rounded-2xl border border-slate-700/60 p-4 sm:p-6 hover:border-emerald-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/20">
                      
                      <div className="relative overflow-x-hidden">
                        {/* Project Header */}
                        <div className="flex items-start justify-between mb-3 sm:mb-4">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <div className="text-2xl sm:text-3xl p-1.5 sm:p-2 bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-xl border border-slate-600/50 group-hover:scale-110 transition-transform duration-200">
                              {project.icon}
                            </div>
                            <div>
                              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-1 sm:mb-2">
                                {project.title}
                              </h3>
                              <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                                <span className={`inline-block px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-semibold rounded-full ${
                                  project.category === 'Full Stack' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' :
                                  project.category === 'AI/ML' || project.category === 'AI-ML' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40' :
                                  'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                                }`}>
                                  {project.category}
                                </span>
                                <span className="text-xs text-gray-300 bg-slate-700/60 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md border border-slate-600/50 font-medium">
                                  {project.year}
                                </span>
                                <span className={`text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md font-semibold ${
                                  project.status === 'Active' ? 'bg-green-500/20 text-green-300 border border-green-500/40' : 'bg-gray-500/20 text-gray-300 border border-gray-500/40'
                                }`}>
                                  {project.status}
                                </span>
                              </div>
                            </div>
                          </div>
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="opacity-70 hover:opacity-100 transition-all duration-200 p-2 hover:bg-slate-700/60 rounded-lg hover:scale-110"
                          >
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>

                        {/* Impact Badge */}
                        <div className="mb-3 sm:mb-4">
                          <span className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-semibold bg-emerald-500/20 text-emerald-300 rounded-lg border border-emerald-500/40">
                            💡 {project.impact}
                          </span>
                        </div>

                        {/* Project Description */}
                        <p className="text-xs sm:text-sm text-gray-200 leading-relaxed mb-3 sm:mb-4 font-medium">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                          {project.tech.map((tech, techIndex) => (
                            <span 
                              key={techIndex} 
                              className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs bg-slate-700/60 text-gray-200 rounded-lg border border-slate-600/60 hover:bg-slate-600/60 hover:border-slate-500/60 transition-all duration-200 font-medium hover:scale-105"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Project Actions */}
                        <div className="flex items-center justify-between">
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-emerald-600/30 border border-emerald-500/40 rounded-lg hover:bg-emerald-600/40 hover:border-emerald-500/60 transition-all duration-200 hover:scale-105"
                          >
                            <span>View Project</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                          <div className="text-xs text-gray-400 font-medium bg-slate-800/50 px-3 py-1 rounded-lg border border-slate-700/50">
                            {project.tech.length} technologies
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* View More Projects */}
          <motion.div 
            className="text-center mt-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center border border-emerald-500/30 hover:scale-110 transition-transform duration-200">
                <svg className="w-8 h-8 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </div>
              <a 
                href="https://github.com/harshrana14-fi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white bg-emerald-600/20 border border-emerald-500/30 rounded-xl hover:bg-emerald-600/30 hover:border-emerald-500/50 transition-all duration-200 hover:scale-105"
              >
                <span>Explore More Projects on GitHub</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </section>

        <section id="certs" className="py-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <SectionHeading>Experience & Certifications</SectionHeading>
          </motion.div>
          
          <motion.div 
            className="mt-12 grid lg:grid-cols-2 gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {/* Experience Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-theme-primary mb-8 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                Professional Experience
              </h3>
              
              <div className="space-y-6">
                <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">Developer</h4>
                      <a href="https://www.campusmart.store/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                        <span className="text-emerald-400 font-semibold">CampusMart</span>
                        <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <p className="text-sm text-gray-400">August 2025 – Present</p>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center border border-emerald-500/30">
                      <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 font-medium">MAIT&apos;s Student Marketplace</p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm leading-relaxed">
                        Developed and optimized the assignment feature on CampusMart, ensuring efficient academic support for MAIT students.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm leading-relaxed">
                        Played an active role in expanding the platform&apos;s reach to other GGSIPU colleges, broadening its user base and impact.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm leading-relaxed">
                        Improved user experience and backend reliability.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Certifications Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-theme-primary mb-8 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                Certifications
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "/images/cert1.jpg",
                  "/images/cert2.jpg", 
                  "/images/cert3.jpg",
                  "/images/cert5.jpg"
                ].map((imagePath, index) => (
                  <motion.div
                    key={imagePath}
                    className="group bg-slate-800/60 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-4 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="aspect-[4/3] bg-slate-700/30 rounded-xl overflow-hidden border border-slate-600/50">
                      <Image
                        src={imagePath}
                        alt="Certificate"
                        width={300}
                        height={200}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </motion.div>
            ))}
          </div>
            </motion.div>
          </motion.div>
        </section>

        <section id="contact" className="py-12 sm:py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-sky-400 to-purple-400">Let&apos;s Connect</span>
          </h2>
            <p className="mt-2 text-sm sm:text-base text-theme-secondary max-w-3xl">
              Ready to bring your ideas to life? Let&apos;s discuss your next project and create something amazing together.
            </p>
          </motion.div>

          <motion.div 
            className="mt-6 sm:mt-8 md:mt-10 grid gap-4 sm:gap-6 lg:grid-cols-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {/* Left: Form */}
            <div className="rounded-2xl border border-white/10 bg-white/5 dark:bg-white/5 backdrop-blur-md p-4 sm:p-6 md:p-8 hover:scale-[1.01] transition-transform duration-200">
              <h3 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
                <span className="inline-grid place-items-center h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-sky-500/20 text-sky-300">✈</span>
                Send Message
              </h3>
              <ContactFormClient />
            </div>

            {/* Right: Contact info */}
            <div className="grid gap-4 sm:gap-6">
              <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4 sm:p-5 flex items-center gap-3 sm:gap-4 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:shadow-[0_0_0_3px_rgba(255,255,255,0.06),0_12px_28px_rgba(255,255,255,0.08)]">
                <div className="grid place-items-center h-9 w-9 sm:h-11 sm:w-11 rounded-xl bg-pink-500/20 text-pink-300">✉</div>
                <div>
                  <div className="text-xs sm:text-sm text-white/70">Email</div>
                  <div className="text-sm sm:text-base font-medium">ranajiharsxx14@gmail.com</div>
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4 sm:p-5 flex items-center gap-3 sm:gap-4 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:shadow-[0_0_0_3px_rgba(255,255,255,0.06),0_12px_28px_rgba(255,255,255,0.08)]">
                <div className="grid place-items-center h-9 w-9 sm:h-11 sm:w-11 rounded-xl bg-sky-500/20 text-sky-300">📍</div>
                <div>
                  <div className="text-xs sm:text-sm text-white/70">Location</div>
                  <div className="text-sm sm:text-base font-medium">Delhi, New Delhi, India</div>
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4 sm:p-5 flex items-center gap-3 sm:gap-4 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:shadow-[0_0_0_3px_rgba(255,255,255,0.06),0_12px_28px_rgba(255,255,255,0.08)]">
                <div className="grid place-items-center h-9 w-9 sm:h-11 sm:w-11 rounded-xl bg-purple-500/20 text-purple-300">📅</div>
                <div>
                  <div className="text-xs sm:text-sm text-white/70">Availability</div>
                  <div className="text-sm sm:text-base font-medium">Open to opportunities</div>
                </div>
              </div>

              {/* Socials */}
              <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4 sm:p-5 hover:scale-[1.01] transition-transform duration-200">
                <div className="text-sm sm:text-base font-semibold">Follow Me</div>
                <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-2 sm:gap-3">
                  <a 
                    href="https://github.com/" 
                    target="_blank" 
                    className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 py-2 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_0_3px_rgba(255,255,255,0.06),0_12px_28px_rgba(255,255,255,0.08)]"
                  >
                    GitHub
                  </a>
                  <a 
                    href="https://www.linkedin.com/" 
                    target="_blank" 
                    className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 py-2 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_0_3px_rgba(255,255,255,0.06),0_12px_28px_rgba(255,255,255,0.08)]"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              {/* Metrics */}
              <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-5 hover:scale-[1.01] transition-transform duration-200">
                <div className="font-semibold">Let&apos;s Work Together</div>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="text-white/70">Response Time</div>
                  <div className="text-right text-cyan-300">24 hours</div>
                  <div className="text-white/70">Project Timeline</div>
                  <div className="text-right text-purple-300">2-4 weeks</div>
                  <div className="text-white/70">Availability</div>
                  <div className="text-right text-emerald-300">Open</div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Floating Book a Call Button */}
      <BookCallButton />
    </div>
  );
}


