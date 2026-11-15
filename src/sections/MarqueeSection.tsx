import React, { useEffect, useRef, useState } from 'react';
import { PixelStar, PixelHeart, PixelSparkle } from '../components/PixelArt';

const MarqueeSection = () => {
  const row1Items = [
    '✦ 100K+ INSTAGRAM VIEWS',
    '⚡ KAHANIVERSE AI',
    '🎓 GALGOTIAS UNIVERSITY',
    '💻 FRONTEND ENGINEER',
    '💘 CUPID DATING APP',
    '🤖 AI VIDEO PIPELINES',
    '🎨 SAVVY TECHNOLOGIES',
    '✨ B.TECH CAC 2026',
    '🌸 REACT & TYPESCRIPT',
    '🔥 GEN-Z CREATIVE',
  ];

  const row2Items = [
    '👾 PACMAN & CANVAS',
    '⭐ 7.8 CGPA',
    '📊 EXPENSE TRACKER',
    '💫 MOTION GRAPHICS',
    '🚀 AUTONOMOUS SCRIPTS',
    '🎯 TAILWIND CSS',
    '✨ SHIVANGI TRIPATHI',
    '💡 SKINCARE AI',
    '⚡ PYTHON PIPELINES',
    '✦ DREAM · CODE · CREATE',
  ];

  const tripled1 = [...row1Items, ...row1Items, ...row1Items];
  const tripled2 = [...row2Items, ...row2Items, ...row2Items];

  return (
    <section className="relative overflow-hidden py-10 sm:py-14 select-none">
      {/* Track 1: Leftward Marquee */}
      <div className="flex overflow-hidden py-2">
        <div className="flex gap-4 animate-marquee whitespace-nowrap">
          {tripled1.map((item, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/90 border border-[#BB98E5]/30 shadow-xs text-xs sm:text-sm font-black tracking-widest text-[#1E1B4B] hover:border-[#FFA07A] transition-colors"
            >
              <PixelStar size={14} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Track 2: Rightward Marquee */}
      <div className="flex overflow-hidden py-2 mt-2">
        <div className="flex gap-4 animate-marquee-reverse whitespace-nowrap">
          {tripled2.map((item, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#FAF5FF] border border-[#BB98E5]/40 shadow-xs text-xs sm:text-sm font-black tracking-widest text-[#7C3AED] hover:border-[#FFA07A] transition-colors"
            >
              <PixelHeart size={14} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
