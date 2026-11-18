import React from 'react';
import { Play, Sparkles, TrendingUp, Code2, CheckCircle2, Layers } from 'lucide-react';
import { ArtworkVariant } from '../types/studio';

interface ProjectArtworkProps {
  variant: ArtworkVariant;
  isActive?: boolean;
  compact?: boolean;
}

export const ProjectArtwork: React.FC<ProjectArtworkProps> = ({
  variant,
  isActive = false,
  compact = false,
}) => {
  const heightClass = compact ? 'h-48' : 'h-56 sm:h-60';

  if (variant === 'fintech-platform') {
    return (
      <div
        dir="ltr"
        className={`relative ${heightClass} w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#162036] to-[#1E293B] p-4 text-white select-none`}
      >
        <div
          className={`absolute -top-10 -right-10 h-36 w-36 rounded-full bg-amber-bright/30 blur-2xl transition-transform duration-500 ${
            isActive ? 'scale-125' : 'scale-100'
          }`}
        />
        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-amber-bright border border-white/15">
              <Code2 className="h-3.5 w-3.5" aria-hidden="true" />
              MadarPay OS · v2.4
            </span>
            <span className="rounded-full bg-emerald-400/20 px-2.5 py-0.5 text-[10px] font-bold text-emerald-300 border border-emerald-400/30">
              LIVE SETTLEMENT
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2.5 my-2">
            <div className="col-span-2 rounded-xl bg-white/[0.08] border border-white/15 p-3 backdrop-blur-md">
              <div className="text-[10px] text-slate-300">Daily Treasury Volume</div>
              <div className="mt-0.5 font-display text-lg font-bold text-white">SAR 1,482,900</div>
              <div className="mt-2 flex items-end gap-1.5 h-10">
                {[38, 52, 46, 70, 64, 88, 100].map((h, i) => (
                  <span
                    key={i}
                    style={{ height: `${isActive ? Math.min(100, h + 10) : h}%` }}
                    className={`flex-1 rounded-t transition-all duration-500 ${
                      i === 6 ? 'bg-amber-bright' : 'bg-white/25'
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="rounded-xl bg-amber-brand/20 border border-amber-bright/40 p-3 flex flex-col justify-between">
              <span className="text-[10px] font-semibold text-amber-200">KYC Speed</span>
              <span className="font-display text-xl font-extrabold text-amber-bright">+63%</span>
              <span className="text-[10px] text-slate-200">3-Step Flow</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-300">
            <span>RTL / LTR Parity</span>
            <span className="font-mono text-amber-bright">&lt;0.8s FCP /&gt;</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'motion-reel' || variant === 'sound-campaign') {
    return (
      <div
        dir="ltr"
        className={`relative ${heightClass} w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#121826] via-[#1E293B] to-[#0F172A] p-4 text-white select-none`}
      >
        <div className="absolute -bottom-8 left-8 h-32 w-44 rounded-full bg-amber-brand/35 blur-2xl" />
        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-amber-brand text-navy px-2.5 py-1 text-[11px] font-extrabold">
              <Play className="h-3 w-3 fill-current" aria-hidden="true" />
              {variant === 'motion-reel' ? '4K KINETIC REEL' : 'B2B DOCU SERIES'}
            </span>
            <span className="font-mono text-[11px] text-slate-300">
              {isActive ? '00:18 / 01:00 · PLAYING' : '00:00 / 01:00 · 60FPS'}
            </span>
          </div>

          {/* Interactive Soundwave & Keyframe Timeline */}
          <div className="my-auto rounded-xl bg-white/[0.07] border border-white/15 p-3.5 backdrop-blur-md">
            <div className="flex items-center justify-center gap-1.5 h-14">
              {[35, 65, 92, 50, 82, 100, 68, 45, 90, 74, 58, 95, 62, 40, 78, 86].map((bar, idx) => (
                <span
                  key={idx}
                  style={{
                    height: `${isActive ? ((bar * 7 + idx * 13) % 70) + 30 : bar}%`,
                  }}
                  className={`w-2 rounded-full transition-all duration-300 ${
                    idx % 3 === 0 ? 'bg-amber-bright' : 'bg-white/60'
                  }`}
                />
              ))}
            </div>
            <div className="mt-2.5 h-1.5 w-full rounded-full bg-white/15 overflow-hidden">
              <div
                className={`h-full rounded-full bg-amber-bright transition-all duration-700 ${
                  isActive ? 'w-3/4' : 'w-1/3'
                }`}
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-300">
            <span>Audio-Transient Frame Sync</span>
            <span className="font-semibold text-amber-bright">
              {variant === 'motion-reel' ? '68% Hook Hold' : '19 Signed Cohorts'}
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'brand-editorial' || variant === 'commerce-web') {
    return (
      <div
        dir="ltr"
        className={`relative ${heightClass} w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#F7F3EB] via-[#EFE7D6] to-[#E6DEC8] p-4 text-navy border border-navy/10 select-none`}
      >
        <div className="absolute -top-6 right-6 h-28 w-28 rounded-3xl rotate-12 bg-amber-brand/35 blur-xl" />
        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-navy text-white px-2.5 py-1 text-[11px] font-bold">
              <Sparkles className="h-3 w-3 text-amber-bright" aria-hidden="true" />
              {variant === 'brand-editorial' ? 'BRAND & 90-SKU RETOUCH' : 'HEADLESS LUXURY STORE'}
            </span>
            <span className="rounded-full bg-white/80 px-2.5 py-0.5 text-[10px] font-bold text-navy border border-navy/10">
              AR / EN SYSTEM
            </span>
          </div>

          <div className="grid grid-cols-5 gap-2.5 items-center my-2">
            <div className="col-span-3 rounded-xl bg-white/80 border border-white p-3 shadow-sm">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-frost">
                {variant === 'brand-editorial' ? 'Solis Specialty Origin' : 'Velora Maison N°04'}
              </div>
              <div className="mt-1 font-display text-lg font-extrabold text-navy">
                {variant === 'brand-editorial' ? 'AMBER ROAST 02' : 'OUD & BERGAMOT'}
              </div>
              <div className="mt-2 flex items-center gap-1.5">
                <span className="h-4 w-4 rounded-full bg-[#0F172A]" />
                <span className="h-4 w-4 rounded-full bg-[#F5A623]" />
                <span className="h-4 w-4 rounded-full bg-[#78350F]" />
                <span className="ml-auto text-[10px] font-bold text-navy">+44% Cart Lift</span>
              </div>
            </div>
            <div
              className={`col-span-2 h-24 rounded-xl bg-navy text-white p-3 flex flex-col justify-between transition-transform duration-300 ${
                isActive ? '-rotate-2 scale-105' : ''
              }`}
            >
              <Layers className="h-4 w-4 text-amber-bright" aria-hidden="true" />
              <div>
                <div className="font-display text-base font-bold text-amber-bright">
                  {variant === 'brand-editorial' ? '90 SKUs' : '1.1s'}
                </div>
                <div className="text-[10px] text-slate-300">
                  {variant === 'brand-editorial' ? 'Color Calibrated' : 'Instant Load'}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-frost">
            <span>Studio Lighting &amp; Typography</span>
            <span className="text-navy">100% Print &amp; Web Ready</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'roas-growth') {
    return (
      <div
        dir="ltr"
        className={`relative ${heightClass} w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#172033] to-[#1E293B] p-4 text-white select-none`}
      >
        <div className="absolute top-2 right-4 h-32 w-32 rounded-full bg-amber-bright/25 blur-2xl" />
        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-amber-bright text-navy px-2.5 py-1 text-[11px] font-extrabold">
              <TrendingUp className="h-3.5 w-3.5" aria-hidden="true" />
              PAID SOCIAL FUNNEL
            </span>
            <span className="text-[11px] font-bold text-emerald-300">-41% CPL</span>
          </div>

          <div className="rounded-xl bg-white/[0.08] border border-white/15 p-3 backdrop-blur-md">
            <div className="flex items-baseline justify-between">
              <div>
                <div className="text-[10px] text-slate-300">Verified Campaign Return</div>
                <div className="font-display text-2xl font-extrabold text-amber-bright">5.4x ROAS</div>
              </div>
              <div className="text-right">
                <div className="text-[10px] text-slate-300">New Members</div>
                <div className="font-display text-lg font-bold text-white">610+</div>
              </div>
            </div>
            <div className="mt-3 space-y-1.5">
              <div className="flex items-center gap-2 text-[10px]">
                <span className="w-14 text-slate-300">Meta CAPI</span>
                <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                  <div className={`h-full rounded-full bg-amber-bright transition-all duration-500 ${isActive ? 'w-[92%]' : 'w-[84%]'}`} />
                </div>
              </div>
              <div className="flex items-center gap-2 text-[10px]">
                <span className="w-14 text-slate-300">TikTok</span>
                <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                  <div className={`h-full rounded-full bg-emerald-400 transition-all duration-500 ${isActive ? 'w-[86%]' : 'w-[76%]'}`} />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-300">
            <span>12 Ad Hooks / Bi-Weekly</span>
            <span className="text-amber-bright font-semibold">Live Attribution</span>
          </div>
        </div>
      </div>
    );
  }

  // Default: bi-cockpit or ops-automation
  return (
    <div
      dir="ltr"
      className={`relative ${heightClass} w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#EAEFF6] via-[#F4F6F9] to-[#E2E8F0] p-4 text-navy border border-navy/10 select-none`}
    >
      <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-3xl bg-amber-brand/30 blur-2xl" />
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-navy text-white px-2.5 py-1 text-[11px] font-bold">
            <CheckCircle2 className="h-3.5 w-3.5 text-amber-bright" aria-hidden="true" />
            {variant === 'bi-cockpit' ? 'BI & 45K SKU HYGIENE' : 'SMART CLINIC OPS POD'}
          </span>
          <span className="rounded-full bg-amber-soft px-2.5 py-0.5 text-[10px] font-extrabold text-amber-deep border border-amber-brand/30">
            {variant === 'bi-cockpit' ? '99.94% QA' : '-37% NO-SHOWS'}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2.5 my-2">
          <div className="rounded-xl bg-white/85 border border-white p-3 shadow-sm">
            <div className="text-[10px] font-semibold text-slate-frost">
              {variant === 'bi-cockpit' ? 'Reporting Cycle' : 'Slot Utilization'}
            </div>
            <div className="mt-1 font-display text-lg font-extrabold text-navy">
              {variant === 'bi-cockpit' ? '14h -> 20m' : '91.4% Active'}
            </div>
            <div className="mt-1 text-[10px] font-semibold text-emerald-700">
              Automated Sync
            </div>
          </div>
          <div className="rounded-xl bg-navy text-white p-3 shadow-sm">
            <div className="text-[10px] text-slate-300">
              {variant === 'bi-cockpit' ? 'Cleaned Records' : 'Recovered Time'}
            </div>
            <div className="mt-1 font-display text-lg font-extrabold text-amber-bright">
              {variant === 'bi-cockpit' ? '45,000' : '18 hrs/wk'}
            </div>
            <div className="mt-1 text-[10px] text-slate-300">Bilingual Verified</div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] font-semibold text-slate-frost">
          <span>Power BI + Precision VA Pod</span>
          <span className="text-navy">Live Operations</span>
        </div>
      </div>
    </div>
  );
};
