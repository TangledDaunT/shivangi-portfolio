import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';
import Timeline from '../components/Timeline';
import StatsCard from '../components/StatsCard';
import { portfolioStats } from '../data/stats';

const AboutSection = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 sm:py-32 md:py-40"
      style={{ background: '#0C0C0C' }}
    >
      {/* Decorative corner images */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="Decorative moon icon"
          className="w-[120px] sm:w-[160px] md:w-[210px] opacity-30"
        />
      </FadeIn>

      {/* Center content */}
      <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24 z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            id="about-heading"
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Bio */}
        <div className="max-w-3xl text-center">
          <FadeIn delay={0.1} y={30}>
            <div style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}>
              <p className="text-[#D7E2EA] font-medium text-center leading-relaxed">
                I&apos;m Shivangi Tripathi, a frontend engineer and software developer. Currently pursuing my 3rd year B.Tech in Computer Applications & Computing (CAC) at Galgotias University, I focus on crafting interactive, modern web interfaces and practical AI tools.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Stats Grid */}
        <div className="w-full max-w-5xl">
          <FadeIn delay={0.15} y={40}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {portfolioStats.slice(0, 6).map((stat, index) => (
                <StatsCard
                  key={stat.label}
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  label={stat.label}
                  description={stat.description}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Philosophy Section */}
        <FadeIn delay={0.2} y={40}>
          <div className="bg-[#121118]/80 border border-[#BB98E5]/20 rounded-3xl p-8 sm:p-10 md:p-12 max-w-3xl backdrop-blur-sm shadow-[0_0_30px_rgba(187,152,229,0.1)]">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-[#BB98E5] to-[#FFA07A] rounded-2xl shadow-[0_0_20px_rgba(187,152,229,0.35)]">
                <svg className="w-6 h-6 text-[#0C0C0C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold text-xl mb-2">Development Philosophy</h3>
                <p className="text-[#FFA07A] font-light text-sm italic">"Clean logic, expressive UI, automated execution"</p>
              </div>
            </div>

            <div className="space-y-3 text-[#CBD5E1]/80 font-light leading-relaxed">
              <p>
                <strong className="text-white font-semibold">User-first interfaces:</strong> Every web experience is built with responsive fluid interactions, intuitive information hierarchy, and performance that feels immediate on every screen.
              </p>
              <p>
                <strong className="text-white font-semibold">Autonomous AI workflows:</strong> From scripting narrative stories to self-optimizing video pipelines (surpassing 100K+ views on Instagram), I leverage AI automation where it unlocks scale, consistency, and real audience engagement.
              </p>
              <p>
                <strong className="text-white font-semibold">Reliability and detail:</strong> Whether designing frontend design systems or architecting server integrations, I focus on solid code structure, clean state management, and polished aesthetics.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Timeline */}
        <div className="w-full">
          <FadeIn delay={0.25} y={40}>
            <div className="text-center mb-8">
              <h3 className="text-white font-semibold text-2xl mb-2">My Journey</h3>
              <p className="text-[#94A3B8] font-light">Key milestones in my path as a Software Developer &amp; Creator</p>
            </div>
          </FadeIn>
          <Timeline />
        </div>

        {/* Contact Button */}
        <FadeIn delay={0.3} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;
