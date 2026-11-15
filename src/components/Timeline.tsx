import { motion } from 'framer-motion';
import { timelineEvents } from '../data/stats';

const iconMap: Record<string, JSX.Element> = {
  rocket: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.863-12.08" />
    </svg>
  ),
  cpu: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
  ),
  brain: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  database: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  ),
  network: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  code: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
};

const Timeline = () => {
  return (
    <div className="relative max-w-4xl mx-auto px-4">
      {/* Vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-[#BB98E5]/35 to-transparent" />

      {timelineEvents.map((event, index) => (
        <motion.div
          key={event.year}
          className={`relative flex items-center gap-8 mb-12 ${
            index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
          }`}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Content Card */}
          <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
            <div className="bg-white/90 border border-[#BB98E5]/30 rounded-2xl p-6 hover:border-[#FFA07A]/60 hover:shadow-[0_8px_25px_rgba(187,152,229,0.15)] transition-all duration-300 backdrop-blur-sm">
              <span className="text-[#EA580C] font-black text-lg">{event.year}</span>
              <h3 className="text-[#1E1B4B] font-bold text-lg mt-1 mb-2">{event.title}</h3>
              <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">{event.description}</p>
            </div>
          </div>

          {/* Icon Circle */}
          <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#BB98E5] to-[#FFA07A] shadow-[0_4px_15px_rgba(187,152,229,0.3)] flex items-center justify-center text-white">
              {iconMap[event.icon]}
            </div>
          </div>

          {/* Spacer for opposite side */}
          <div className="flex-1" />
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
