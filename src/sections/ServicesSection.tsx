import FadeIn from '../components/FadeIn';

const services = [
  {
    number: '01',
    name: 'Autonomous AI Pipelines',
    description:
      'Designing script-to-video automation engines, generative media workflows, and API-driven distribution pipelines with real-time analytics feedback loops (e.g. @kahaniverse329).',
  },
  {
    number: '02',
    name: 'Frontend Engineering',
    description:
      'Crafting high-performance, responsive web interfaces with React, Vite, Next.js, and TypeScript, featuring smooth motion graphics and fluid micro-interactions.',
  },
  {
    number: '03',
    name: 'UI/UX Design Systems',
    description:
      'Building aesthetic, modern, and accessible design systems in Figma and Tailwind CSS with crisp typography, thoughtful spacing, and cyber-minimalist layouts.',
  },
  {
    number: '04',
    name: 'Interactive Web Apps',
    description:
      'Developing full-featured client applications—from campus matchmaking (Cupid) to intelligent personal budgeting and real-time expense analytics.',
  },
  {
    number: '05',
    name: 'AI Diagnostics & Computer Vision',
    description:
      'Integrating machine learning models and computer vision pipelines into browser-based user experiences for instant recommendations and real-time inference.',
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-[#0C0C0C] border-t border-[#BB98E5]/18 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <h2
        id="services-heading"
        className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Services
      </h2>

      <div className="max-w-5xl mx-auto">
        {services.map((s, i) => (
          <FadeIn key={s.number} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-6 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12"
              style={{
                borderBottom:
                  i < services.length - 1
                    ? '1px solid rgba(187, 152, 229, 0.14)'
                    : 'none',
              }}
            >
              <span
                className="font-black leading-none flex-shrink-0 bg-gradient-to-br from-[#FFFFFF] via-[#BB98E5] to-[#FFA07A] bg-clip-text text-transparent"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {s.number}
              </span>
              <div className="flex flex-col justify-center gap-2 pt-2 sm:pt-4">
                <h3
                  className="font-semibold uppercase text-white tracking-wide"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {s.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl text-[#94A3B8]"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {s.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
