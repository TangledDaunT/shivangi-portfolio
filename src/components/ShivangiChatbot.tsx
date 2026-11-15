import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  links?: { label: string; url: string }[];
  time: string;
}

const KNOWLEDGE_BASE: { keywords: string[]; answer: string; links?: { label: string; url: string }[] }[] = [
  {
    keywords: ['kahaniverse', '100k', 'instagram', 'video', 'views', 'story', 'automated', 'reels'],
    answer:
      "✨ **KahaniVerse (@kahaniverse329)** is Shivangi's flagship AI automation project with **100K+ views** on Instagram! Shivangi writes the original story narratives, while an automated AI pipeline generates the visuals, voices the scripts, compiles the videos, publishes directly to Instagram, and analyzes viewer retention to refine future hooks.",
    links: [{ label: 'View Instagram (@kahaniverse329)', url: 'https://www.instagram.com/kahaniverse329/' }],
  },
  {
    keywords: ['cupid', 'dating', 'match', 'galgotia', 'campus', 'love'],
    answer:
      "💘 **Cupid** is a campus dating web platform Shivangi created specifically for Galgotias University students. It features interactive matchmaking cards, secure profile verification, and fluid mobile-first transitions.",
  },
  {
    keywords: ['education', 'college', 'degree', 'cgpa', 'university', 'btech', 'cac', 'study', 'galgotias'],
    answer:
      "🎓 Shivangi is currently in her 3rd year pursuing **B.Tech in Computer Applications & Computing (CAC)** at **Galgotias University**, Greater Noida. She maintains a strong **7.8 CGPA** alongside building production web applications and AI pipelines.",
  },
  {
    keywords: ['savvy', 'intern', 'experience', 'work', 'job', 'frontend', 'designer', 'technologies'],
    answer:
      "💼 Shivangi was a **Frontend Developer & Website Designer Intern at Savvy Technologies**, where she designed modern website layouts, built responsive user interfaces with React and Tailwind CSS, and optimized web performance.",
  },
  {
    keywords: ['skincare', 'ai app', 'skin', 'recommendation'],
    answer:
      "✨ **Skincare AI App** is an intelligent web application built with React, Tailwind CSS, and Python that analyzes skin profiles and generates tailored skincare regimens and ingredient suggestions.",
  },
  {
    keywords: ['expense', 'tracker', 'budget', 'finance'],
    answer:
      "📊 **Expense Tracker** is a deployed web budgeting application with real-time spend analytics, transaction categories, and responsive charts.",
    links: [{ label: 'Open Expense Tracker App', url: 'https://expense-tracker-nine-ebon-61.vercel.app' }],
  },
  {
    keywords: ['skills', 'stack', 'tech', 'technologies', 'code', 'react', 'python'],
    answer:
      "⚡ **Core Tech Stack:**\n• **Frontend:** React, TypeScript, Next.js, Vite, Tailwind CSS, Framer Motion\n• **AI & Automation:** Python, Instagram Graph API, LLM story orchestration, video synthesis\n• **UI/UX:** Figma, responsive systems, micro-interactions, motion design",
  },
  {
    keywords: ['contact', 'email', 'hire', 'reach', 'message', 'collab', 'social'],
    answer:
      "📬 You can connect with Shivangi directly via email or check out her automated video storytelling channel on Instagram!",
    links: [
      { label: '📧 Send Email', url: 'mailto:shivangitripathi1392@gmail.com' },
      { label: '📸 Instagram Profile', url: 'https://www.instagram.com/kahaniverse329/' },
    ],
  },
];

const QUICK_CHIPS = [
  '🚀 KahaniVerse (100K+ Views)',
  '🎓 Galgotias & Education',
  '💘 Cupid Dating App',
  '💼 Savvy Technologies',
  '✨ Skincare AI & Tech',
  '📬 How to Contact',
];

export const ShivangiChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: "Hi there! 👋 I'm **Shivangi AI**. Ask me anything about Shivangi's projects, 100K+ views KahaniVerse, university dating app Cupid, or how to get in touch!",
      time: 'Just now',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (text: string) => {
    const query = text.trim();
    if (!query) return;

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Find match in knowledge base
    const lower = query.toLowerCase();
    let bestMatch = KNOWLEDGE_BASE.find((item) =>
      item.keywords.some((kw) => lower.includes(kw))
    );

    setTimeout(() => {
      let replyText = '';
      let replyLinks = bestMatch?.links;

      if (bestMatch) {
        replyText = bestMatch.answer;
      } else if (lower.includes('hi') || lower.includes('hello') || lower.includes('hey')) {
        replyText =
          "Hey there! 😊 Great to meet you. Feel free to explore Shivangi's projects, her background at Galgotias University, or ask about her 100K+ views automation pipeline!";
      } else {
        replyText =
          "Shivangi is a 3rd-year B.Tech CAC student at Galgotias University (7.8 CGPA), a former Frontend Intern at Savvy Technologies, and the creator of KahaniVerse (100K+ views on Instagram) and Cupid dating app! Tap any of the quick topics below to learn more.";
      }

      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: replyText,
        links: replyLinks,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setIsTyping(false);
      setMessages((prev) => [...prev, aiMsg]);
    }, 450);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex items-center gap-3 px-5 py-3.5 rounded-full bg-white/95 text-[#1E1B4B] shadow-[0_8px_30px_rgba(187,152,229,0.35)] border-2 border-[#BB98E5] hover:border-[#FFA07A] transition-all backdrop-blur-md"
          aria-label="Open AI Assistant"
        >
          {/* Luminous Pulsing Dot */}
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFA07A] opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#BB98E5]" />
          </span>

          <span className="font-semibold text-sm tracking-tight flex items-center gap-1.5">
            <span className="text-[#BB98E5] font-black">✦</span>
            <span>Ask Shivangi AI</span>
          </span>

          <span className="text-xs bg-gradient-to-r from-[#BB98E5] to-[#FFA07A] text-white font-bold px-2 py-0.5 rounded-full">
            100K+
          </span>
        </motion.button>
      </div>

      {/* Chat Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-20 right-4 sm:bottom-24 sm:right-8 z-50 w-[92vw] max-w-[390px] h-[520px] max-h-[82vh] flex flex-col rounded-3xl bg-white/95 border-2 border-[#BB98E5]/40 shadow-[0_20px_50px_rgba(187,152,229,0.3)] backdrop-blur-xl overflow-hidden text-[#1E1B4B]"
          >
            {/* Header */}
            <div className="px-5 py-4 bg-gradient-to-r from-[#FAF5FF] via-[#FFF1EB] to-[#F0FDF4] border-b border-[#BB98E5]/25 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#BB98E5] to-[#FFA07A] p-0.5 shadow-sm">
                  <div className="w-full h-full rounded-[14px] bg-white flex items-center justify-center text-lg">
                    👩‍💻
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#1E1B4B] flex items-center gap-1.5">
                    Shivangi AI
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </h3>
                  <p className="text-xs text-[#64748B]">B.Tech CAC @ Galgotias · Frontend &amp; AI</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center text-sm font-bold transition-colors"
                aria-label="Close chat"
              >
                ✕
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3.5 text-xs sm:text-sm bg-[#FCFCFD]">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 shadow-sm ${
                      m.sender === 'user'
                        ? 'bg-gradient-to-r from-[#BB98E5] to-[#FFA07A] text-white font-medium rounded-br-none'
                        : 'bg-white border border-[#BB98E5]/25 text-[#1E293B] rounded-bl-none'
                    }`}
                  >
                    <p className="leading-relaxed whitespace-pre-line">{m.text}</p>
                    {m.links && (
                      <div className="mt-2.5 pt-2 border-t border-[#BB98E5]/20 flex flex-wrap gap-2">
                        {m.links.map((link) => (
                          <a
                            key={link.url}
                            href={link.url}
                            target={link.url.startsWith('mailto:') ? '_self' : '_blank'}
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-[#BB98E5]/15 text-[#7C3AED] hover:bg-[#FFA07A]/20 hover:text-[#C2410C] transition-colors"
                          >
                            <span>{link.label}</span>
                            <span>↗</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 px-1">{m.time}</span>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-1.5 px-3 py-2 bg-white rounded-2xl border border-slate-200 w-16">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BB98E5] animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFA07A] animate-bounce [animation-delay:0.15s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6EE7B7] animate-bounce [animation-delay:0.3s]" />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompt Chips */}
            <div className="px-3 py-2 bg-[#F8FAFC] border-t border-slate-100 flex gap-1.5 overflow-x-auto no-scrollbar">
              {QUICK_CHIPS.map((chip) => (
                <button
                  key={chip}
                  onClick={() => handleSend(chip)}
                  className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white border border-[#BB98E5]/30 text-[11px] font-medium text-slate-700 hover:border-[#FFA07A] hover:bg-[#FFF7ED] hover:text-[#C2410C] transition-all flex-shrink-0"
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(inputValue);
              }}
              className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about Shivangi's projects & skills..."
                className="flex-1 px-3.5 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-full focus:outline-none focus:border-[#BB98E5] focus:bg-white text-slate-800 transition-colors"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="w-8 h-8 rounded-full bg-gradient-to-r from-[#BB98E5] to-[#FFA07A] text-white flex items-center justify-center font-bold disabled:opacity-40 hover:shadow-md transition-all flex-shrink-0"
                aria-label="Send query"
              >
                ↑
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ShivangiChatbot;
