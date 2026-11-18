import React, { useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  surface?: 'glass' | 'glass-strong' | 'navy' | 'amber-glass';
  enableTilt?: boolean;
  as?: 'div' | 'article' | 'section';
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  surface = 'glass',
  enableTilt = true,
  as = 'div',
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const smoothX = useSpring(mouseX, { stiffness: 220, damping: 24 });
  const smoothY = useSpring(mouseY, { stiffness: 220, damping: 24 });

  const rotateX = useTransform(smoothY, [0, 1], [3.2, -3.2]);
  const rotateY = useTransform(smoothX, [0, 1], [-3.2, 3.2]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableTilt || prefersReducedMotion || !ref.current) return;
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return;
    const rect = ref.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width;
    const ny = (e.clientY - rect.top) / rect.height;
    mouseX.set(nx);
    mouseY.set(ny);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const surfaceClasses =
    surface === 'navy'
      ? 'navy-bento navy-surface text-white'
      : surface === 'glass-strong'
        ? 'glass-surface-strong text-navy'
        : surface === 'amber-glass'
          ? 'glass-surface text-navy relative overflow-hidden'
          : 'glass-surface text-navy';

  const MotionTag = motion[as];

  return (
    <MotionTag
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        enableTilt && !prefersReducedMotion
          ? {
              rotateX,
              rotateY,
              transformPerspective: 1100,
            }
          : undefined
      }
      className={`transition-shadow duration-300 hover:shadow-glass-hover ${surfaceClasses} ${className}`}
    >
      {surface === 'amber-glass' && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full opacity-35 blur-2xl"
          style={{
            background: 'radial-gradient(circle, #FFB020 0%, #F5A623 65%, transparent 100%)',
          }}
        />
      )}
      {children}
    </MotionTag>
  );
};
