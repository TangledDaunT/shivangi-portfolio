import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export const CurvedThread: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 24,
    restDelta: 0.001,
  });

  // Calculate bead Y position from 0 to 98% of viewport
  const beadY = useTransform(smoothProgress, [0, 1], ['2%', '96%']);

  // Calculate gentle sine wave X oscillation: moves smoothly left and right along the thread
  const beadX = useTransform(smoothProgress, (val) => {
    // 4 undulating wave cycles down the screen
    return `${24 + Math.sin(val * Math.PI * 8) * 16}px`;
  });

  const beadRotate = useTransform(smoothProgress, [0, 1], [0, 720]);

  return (
    <div
      className="fixed right-2 sm:right-6 md:right-8 top-0 bottom-0 w-12 sm:w-16 pointer-events-none z-30 select-none hidden sm:block"
      aria-hidden="true"
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 60 1000"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          {/* Thread Gradient */}
          <linearGradient id="threadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#BB98E5" stopOpacity="0.8" />
            <stop offset="35%" stopColor="#FFA07A" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#6EE7B7" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#BB98E5" stopOpacity="0.9" />
          </linearGradient>

          {/* Faint Guide Gradient */}
          <linearGradient id="guideGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#BB98E5" stopOpacity="0.18" />
            <stop offset="50%" stopColor="#FFA07A" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#6EE7B7" stopOpacity="0.18" />
          </linearGradient>

          <filter id="threadGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 1. Underlying dashed guide track */}
        <path
          d="M 30,0 C 52,125 8,125 30,250 C 52,375 8,375 30,500 C 52,625 8,625 30,750 C 52,875 8,875 30,1000"
          stroke="url(#guideGradient)"
          strokeWidth="1.75"
          strokeDasharray="4 6"
        />

        {/* 2. Active illuminated scroll thread that draws dynamically with scroll */}
        <motion.path
          d="M 30,0 C 52,125 8,125 30,250 C 52,375 8,375 30,500 C 52,625 8,625 30,750 C 52,875 8,875 30,1000"
          stroke="url(#threadGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#threadGlow)"
          style={{
            pathLength: smoothProgress,
          }}
        />
      </svg>

      {/* 3. Glowing Tracer Bead / Star following the curve */}
      <motion.div
        className="absolute top-0 pointer-events-none"
        style={{
          top: beadY,
          left: beadX,
          transform: 'translate(-50%, -50%)',
          rotate: beadRotate,
        }}
      >
        <div className="relative flex items-center justify-center">
          {/* Outer luminous glow aura */}
          <div className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-[#BB98E5] to-[#FFA07A] opacity-60 blur-md animate-pulse" />

          {/* Tracer Core Orb with Sparkle */}
          <div className="relative w-4 h-4 rounded-full bg-white shadow-[0_0_12px_rgba(255,160,122,0.9)] border-2 border-[#BB98E5] flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-[#FFA07A]" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CurvedThread;
