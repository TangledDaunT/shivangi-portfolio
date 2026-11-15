import FadeIn from '../components/FadeIn';
import { PixelStar, PixelSparkle } from '../components/PixelArt';

const services = [
  {
    number: '01',
    name: 'Autonomous AI Storytelling Pipelines',
    description:
      'Designing script-to-video automation engines, generative media workflows, and API-driven distribution pipelines with real-time analytics feedback loops (e.g. @kahaniverse329).',
    tag: '100K+ Views Proven',
  },
  {
    number: '02',
    name: 'Frontend Engineering & React UIs',
    description:
      'Crafting high-performance, responsive web interfaces with React, Vite, Next.js, and TypeScript, featuring smooth motion graphics and fluid micro-interactions.',
    tag: 'Clean & Performant',
  },
  {
    number: '03',
    name: 'UI/UX Design Systems & Micro-Interactions',
    description:
      'Building aesthetic, modern, and accessible design systems in Figma and Tailwind CSS with crisp typography, thoughtful spacing, and cyber-minimalist layouts.',
    tag: 'Modern & Modest',
  },
  {
    number: '04',
    name: 'Interactive Full-Stack Web Applications',
    description:
      'Developing full-featured client applications—from campus matchmaking (Cupid) to intelligent personal budgeting and real-time expense analytics.',
    tag: 'Product Ready',
  },
  {
    number: '05',
    name: 'AI Diagnostics & Intelligent Integrations',
    description:
      'Integrating machine learning models and computer vision pipelines into browser-based user experiences for instant recommendations and real-time inference.',
    tag: 'Practical ML',
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={35}>
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF5FF] border border-[#BB98E5]/40 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-3">
              <PixelSparkle size={14} />
              <span>Core Capabilities</span>
            </div>
            <h2
              id="services-heading"
              className="text-[#0F172A] font-black uppercase text-center leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 9vw, 130px)' }}
            >
              Services
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-4">
          {services.map((s, i) => (
            <FadeIn key={s.number} delay={i * 0.08} y={25}>
              <div className="bg-white/85 border border-[#BB98E5]/25 rounded-3xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(187,152,229,0.08)] hover:border-[#FFA07A]/50 hover:shadow-[0_8px_30px_rgba(255,160,122,0.15)] transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-5">
                  <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-[#BB98E5] to-[#FFA07A] bg-clip-text text-transparent w-10 flex-shrink-0">
                    {s.number}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <h3 className="text-[#1E1B4B] font-bold text-lg sm:text-xl">
                        {s.name}
                      </h3>
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#FAF5FF] text-[#7C3AED] border border-[#BB98E5]/30 hidden sm:inline-block">
                        {s.tag}
                      </span>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl">
                      {s.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
