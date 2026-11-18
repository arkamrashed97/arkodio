import React from 'react';

interface BrandLogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showSubBadge?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  size = 'md',
  showSubBadge = false,
}) => {
  const isLight = variant === 'light';
  const wordSize =
    size === 'lg'
      ? 'text-3xl sm:text-4xl'
      : size === 'sm'
        ? 'text-lg'
        : 'text-xl sm:text-2xl';

  return (
    <span
      dir="ltr"
      className="group inline-flex items-center gap-2.5 select-none"
    >
      {/* Geometric Emblem: Frosted Amber/Navy Squircle with </> + Soundwave */}
      <span
        aria-hidden="true"
        className={`relative inline-flex items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105 ${
          size === 'lg' ? 'h-11 w-11' : size === 'sm' ? 'h-8 w-8' : 'h-9 w-9'
        } ${
          isLight
            ? 'bg-white/10 border border-white/20 shadow-lg'
            : 'bg-navy text-white border border-navy/10 shadow-md'
        }`}
      >
        {/* Warm Amber Corner Glow */}
        <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-amber-bright opacity-90 transition-transform duration-300 group-hover:scale-125" />
        <span className="font-display text-[11px] font-bold tracking-tighter text-amber-bright">
          &lt;/&gt;
        </span>
      </span>

      {/* Geometric Wordmark + Minimal Soundwave Motif */}
      <span className="inline-flex flex-col">
        <span className="inline-flex items-center gap-2">
          <span
            className={`font-display font-bold tracking-tight leading-none ${wordSize} ${
              isLight ? 'text-white' : 'text-navy'
            }`}
          >
            Arkodio
          </span>

          {/* Minimal 4-Bar Soundwave Motif */}
          <span
            aria-hidden="true"
            className="inline-flex items-end gap-[2.5px] h-4 px-1.5 py-0.5 rounded-full bg-amber-brand/15 border border-amber-brand/30"
          >
            <span className="soundwave-bar-1 w-[2.5px] h-2 rounded-full bg-amber-brand origin-bottom transition-transform" />
            <span className="soundwave-bar-2 w-[2.5px] h-3 rounded-full bg-navy dark:bg-white origin-bottom transition-transform" />
            <span className="soundwave-bar-3 w-[2.5px] h-2.5 rounded-full bg-amber-brand origin-bottom transition-transform" />
            <span className="soundwave-bar-4 w-[2.5px] h-1.5 rounded-full bg-slate-frost origin-bottom transition-transform" />
          </span>
        </span>

        {showSubBadge && (
          <span
            className={`text-[10px] font-semibold tracking-wider uppercase mt-0.5 ${
              isLight ? 'text-slate-300' : 'text-slate-frost'
            }`}
          >
            Creative &amp; Tech Studio
          </span>
        )}
      </span>
    </span>
  );
};
