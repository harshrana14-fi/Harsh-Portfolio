import Link from "next/link";

export const metadata = {
  title: "Resume | Harsh",
  description: "Resume preview and download",
};

export default function ResumePage() {
  // Put your actual PDF at public/resume.pdf
  const pdfPath = "/Harsh'sResume.pdf";

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--paper)", color: "var(--ink)" }}>
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 py-4 sm:py-6">
        <div className="mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <h1 className="text-2xl font-semibold">Resume</h1>
          <div className="flex items-center gap-2">
            <a
              href={pdfPath}
              download
              className="rounded-md bg-white/90 px-4 py-2 text-sm font-medium text-black hover:bg-white"
            >
              Download PDF
            </a>
            <Link href="/" className="rounded-md border border-white/15 px-4 py-2 text-sm hover:bg-white/10">
              Back Home
            </Link>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden">
          <iframe
            title="Resume PDF"
            src={`${pdfPath}#view=FitH`}
            className="w-full h-[calc(100vh-160px)]"
          />
        </div>

        <p className="mt-3 text-sm text-white/60">
          If the preview doesn’t load, use the Download button above or
          <a href={pdfPath} className="underline ml-1">open the PDF directly</a>.
        </p>
      </div>
    </div>
  );
}


