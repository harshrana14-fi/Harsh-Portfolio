import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans, DM_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Harsh Jatoliya | Portfolio",
  description:
    "Portfolio of Harsh Jatoliya — Full-stack developer and AI builder from Delhi, India. Building production-grade web apps, AI models, and open-source tools.",
  keywords: ["Harsh Jatoliya", "Full Stack Developer", "AI Developer", "Next.js", "React", "Portfolio", "Delhi", "MAIT"],
  openGraph: {
    title: "Harsh Jatoliya | Portfolio",
    description:
      "Portfolio of Harsh Rana — Full-stack developer and AI builder from Delhi, India.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Jatoliya | Portfolio",
    description:
      "Portfolio of Harsh Jatoliya — Full-stack developer and AI builder from Delhi, India.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }} suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${dmMono.variable} ${instrumentSerif.variable} antialiased bg-[#050507] text-neutral-50 dark`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
