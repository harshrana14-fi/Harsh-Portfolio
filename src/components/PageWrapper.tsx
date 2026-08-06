"use client";

// Shared page wrapper: provides the center elevated content area with glowing light border framing
export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Center elevated content with glowing border framing */}
      <div className="relative z-10 flex justify-center min-h-screen">
        <div className="center-content-card center-content-bg relative w-full max-w-4xl min-h-full">
          {children}
        </div>
      </div>
    </>
  );
}
