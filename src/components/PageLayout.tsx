"use client";

import { ReactNode } from "react";
import BookCallButton from "@/components/BookCallButton";
import Masthead from "./navbar";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--paper)", color: "var(--ink)" }}>
      <Masthead />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        {children}
      </main>
      <BookCallButton />
    </div>
  );
}
