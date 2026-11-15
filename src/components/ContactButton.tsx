import React from 'react';

interface ContactButtonProps {
  className?: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ className = '' }) => {
  return (
    <a
      href="mailto:shivangitripathi1392@gmail.com"
      className={`inline-flex items-center justify-center rounded-full px-8 py-3.5 sm:px-10 sm:py-4 text-xs sm:text-sm font-semibold uppercase tracking-widest text-white cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] ${className}`}
      style={{
        background:
          'linear-gradient(135deg, #180D2C 0%, #7C3AED 50%, #A855F7 100%)',
        border: '1px solid rgba(192, 132, 252, 0.5)',
        boxShadow:
          '0 4px 20px rgba(168, 85, 247, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
      }}
    >
      Contact Me
    </a>
  );
};

export default ContactButton;
