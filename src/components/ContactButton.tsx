import React from 'react';

interface ContactButtonProps {
  className?: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ className = '' }) => {
  return (
    <a
      href="mailto:shivangitripathi1392@gmail.com"
      className={`inline-flex items-center justify-center rounded-full px-8 py-3.5 sm:px-10 sm:py-4 text-xs sm:text-sm font-semibold uppercase tracking-widest text-white cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,160,122,0.45)] ${className}`}
      style={{
        background:
          'linear-gradient(135deg, #1E162D 0%, #BB98E5 50%, #FFA07A 100%)',
        border: '1px solid rgba(255, 160, 122, 0.55)',
        boxShadow:
          '0 4px 20px rgba(187, 152, 229, 0.3), 0 2px 10px rgba(255, 160, 122, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.35)',
      }}
    >
      Contact Me
    </a>
  );
};

export default ContactButton;
