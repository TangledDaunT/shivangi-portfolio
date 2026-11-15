import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';

interface StatsCardProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description: string;
  delay?: number;
}

const StatsCard: React.FC<StatsCardProps> = ({
  value,
  prefix = '',
  suffix = '',
  label,
  description,
  delay = 0,
}) => {
  return (
    <motion.div
      className="bg-[#121118]/80 border border-[#BB98E5]/20 rounded-3xl p-6 sm:p-8 md:p-10 hover:border-[#FFA07A]/50 hover:shadow-[0_0_30px_rgba(187,152,229,0.15),0_0_15px_rgba(255,160,122,0.1)] transition-all duration-300 backdrop-blur-sm"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-baseline gap-1">
          <span className="hero-heading font-black" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
            <AnimatedCounter value={value} prefix={prefix} suffix={suffix} duration={2} delay={delay} />
          </span>
        </div>
        <h3 className="text-white font-semibold uppercase tracking-wide text-sm sm:text-base">
          {label}
        </h3>
        <p className="text-[#94A3B8] font-light text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default StatsCard;
