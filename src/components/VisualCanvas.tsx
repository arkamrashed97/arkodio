import React from 'react';

export const VisualCanvas: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-canvas"
    >
      {/* Top-Right Warm Golden Amber Architectural Diffusion */}
      <div
        className="absolute -top-24 right-[4%] h-[360px] w-[420px] rounded-[48px] opacity-30 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #FFB020 0%, #F5A623 48%, transparent 75%)',
        }}
      />

      {/* Left-Mid Soft Alabaster & Warm Amber Geometric Plate */}
      <div
        className="absolute top-[28%] -left-24 h-[340px] w-[340px] rounded-[44px] rotate-6 border border-white/80 bg-white/55 shadow-sm"
      />
      <div
        className="absolute top-[34%] left-[6%] h-[220px] w-[260px] rounded-[38px] opacity-20 blur-2xl"
        style={{
          background: 'linear-gradient(135deg, #F5A623 0%, #FFB020 100%)',
        }}
      />

      {/* Right-Lower Deep Midnight Navy Subtle Architectural Anchor */}
      <div
        className="absolute bottom-[12%] -right-16 h-[300px] w-[320px] rounded-[44px] -rotate-6 bg-navy/[0.045] border border-navy/[0.07]"
      />

      {/* Subtle Crisp Architectural Framing Lines (Minimal, Non-Grid) */}
      <div className="mx-auto h-full max-w-7xl px-6">
        <div className="h-full w-full border-x border-navy/[0.035]" />
      </div>
    </div>
  );
};
