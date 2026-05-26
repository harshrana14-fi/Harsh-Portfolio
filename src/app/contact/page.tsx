"use client";

import { motion } from "framer-motion";
import ContactFormClient from "@/components/ContactForm";
import PageLayout from "@/components/PageLayout";

export default function ContactPage() {
  return (
    <PageLayout>
      <section id="contact" className="py-12 md:py-20">
        <motion.div
          className="border-3 border-white p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <p className="brutal-kicker">Communication Channel</p>
          <h1 className="brutal-title text-4xl sm:text-5xl md:text-6xl mt-2">Signal Room</h1>
          <p className="mt-3 text-neutral-500 max-w-3xl uppercase tracking-[0.05em] text-sm">
            Got a bold idea, a product to rebuild, or a prototype to launch? Drop a
            signal and let&apos;s shape it into something sharp.
          </p>
        </motion.div>

        <motion.div
          className="mt-8 grid gap-6 lg:grid-cols-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="border-3 border-white p-6">
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] mb-4">Transmit Brief</h3>
            <ContactFormClient />
          </div>

          <div className="grid gap-4">
            <div className="border-3 border-white p-5">
              <p className="text-xs uppercase tracking-[0.15em] text-neutral-500">Email</p>
              <p className="text-sm font-bold mt-1">ranajiharsxx14@gmail.com</p>
            </div>
            <div className="border-3 border-white p-5">
              <p className="text-xs uppercase tracking-[0.15em] text-neutral-500">Location</p>
              <p className="text-sm font-bold mt-1">Delhi, New Delhi, India</p>
            </div>
            <div className="border-3 border-white p-5">
              <p className="text-xs uppercase tracking-[0.15em] text-neutral-500">Availability</p>
              <p className="text-sm font-bold mt-1 uppercase">Open to opportunities</p>
            </div>
          </div>
        </motion.div>
      </section>
    </PageLayout>
  );
}
