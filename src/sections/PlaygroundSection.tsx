import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import PacmanGame from '../components/PacmanGame';

// Dice Roller Component
const DiceRoller = () => {
  const [dice, setDice] = useState([1, 1]);
  const [rolling, setRolling] = useState(false);

  const rollDice = () => {
    setRolling(true);
    setTimeout(() => {
      setDice([
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1,
      ]);
      setRolling(false);
    }, 500);
  };

  const diceFaces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

  return (
    <div className="bg-[#121118]/80 rounded-3xl p-8 border border-[#BB98E5]/20 backdrop-blur-md shadow-[0_0_30px_rgba(187,152,229,0.12)]">
      <div className="flex flex-col items-center gap-6">
        <div className="flex gap-8">
          {dice.map((d, i) => (
            <motion.div
              key={i}
              animate={{ rotate: rolling ? 360 : 0 }}
              transition={{ duration: 0.5 }}
              className="text-[120px] text-[#EBDCF9] drop-shadow-[0_0_20px_rgba(187,152,229,0.4)]"
            >
              {diceFaces[d - 1]}
            </motion.div>
          ))}
        </div>
        <div className="text-white text-2xl font-bold tracking-wide">
          Total: <span className="text-[#FFA07A]">{dice[0] + dice[1]}</span>
        </div>
        <button
          onClick={rollDice}
          disabled={rolling}
          className="px-8 py-3 bg-gradient-to-r from-[#BB98E5] to-[#FFA07A] text-[#0C0C0C] font-bold rounded-full hover:shadow-[0_0_20px_rgba(255,160,122,0.45)] transition-all disabled:opacity-50"
        >
          {rolling ? 'Rolling...' : 'Roll Dice'}
        </button>
      </div>
    </div>
  );
};

// Color Generator Component
const ColorGenerator = () => {
  const [palette, setPalette] = useState([
    '#0C0C0C', '#241D30', '#BB98E5', '#E2BEF7', '#FFA07A'
  ]);

  const generatePalette = () => {
    const cyberColors = [
      '#0C0C0C', '#181224', '#241D30', '#3A2C50',
      '#BB98E5', '#C9A9EF', '#D7BAF5', '#EBDCF9', '#F5EDFC',
      '#FFA07A', '#FFB08E', '#FF8F6B', '#94A3B8', '#CBD5E1', '#FFFFFF'
    ];
    const shuffled = [...cyberColors].sort(() => 0.5 - Math.random());
    setPalette(shuffled.slice(0, 5));
  };

  const copyColor = (color: string) => {
    navigator.clipboard.writeText(color);
  };

  return (
    <div className="bg-[#121118]/80 rounded-3xl p-8 border border-[#BB98E5]/20 backdrop-blur-md shadow-[0_0_30px_rgba(187,152,229,0.12)]">
      <div className="flex flex-col items-center gap-6">
        <div className="flex gap-4 w-full max-w-xl">
          {palette.map((color, i) => (
            <motion.button
              key={i}
              className="flex-1 h-24 rounded-lg cursor-pointer hover:scale-105 transition-transform border border-white/10"
              style={{ backgroundColor: color }}
              onClick={() => copyColor(color)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Click to copy hex"
            >
              <div className="h-full flex items-end justify-center pb-2">
                <span className="text-xs font-mono bg-black/60 px-2 py-0.5 rounded text-white border border-white/10">
                  {color}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
        <button
          onClick={generatePalette}
          className="px-8 py-3 bg-gradient-to-r from-[#BB98E5] to-[#FFA07A] text-[#0C0C0C] font-bold rounded-full hover:shadow-[0_0_20px_rgba(255,160,122,0.45)] transition-all"
        >
          Generate Luminous Palette
        </button>
      </div>
    </div>
  );
};

const PlaygroundSection = () => {
  const [activeGame, setActiveGame] = useState<string | null>('pacman');

  const games = [
    {
      id: 'pacman',
      name: 'Pacman Mini-Game',
      description: 'Classic arcade fun built with React & Canvas',
      icon: '👾',
      gradient: 'from-[#181224] to-[#302046]',
    },
    {
      id: 'dice',
      name: 'Dice Roller',
      description: 'Simple physics simulation with random outcomes',
      icon: '🎲',
      gradient: 'from-[#181320] to-[#2E1E38]',
    },
    {
      id: 'colors',
      name: 'Palette Generator',
      description: 'Generate soft lavender & warm sunset palettes',
      icon: '🎨',
      gradient: 'from-[#18141F] to-[#2F2133]',
    },
  ];

  return (
    <section
      id="playground"
      aria-labelledby="playground-heading"
      className="bg-[#0C0C0C] border-t border-[#BB98E5]/18 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            id="playground-heading"
            className="hero-heading font-black uppercase text-center mb-6 sm:mb-8"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Playground
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} y={30}>
          <p className="text-center text-[#94A3B8] font-light text-lg mb-12 max-w-2xl mx-auto">
            Take a break and test some interactive experiments. Built with React and Canvas API.
          </p>
        </FadeIn>

        {/* Game Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {games.map((game) => (
            <motion.button
              key={game.id}
              onClick={() => setActiveGame(activeGame === game.id ? null : game.id)}
              className={`relative p-6 rounded-3xl bg-gradient-to-br ${game.gradient} border text-white text-left transition-all ${
                activeGame === game.id
                  ? 'border-[#FFA07A] shadow-[0_0_25px_rgba(187,152,229,0.25)] scale-105'
                  : 'border-[#BB98E5]/25 hover:border-[#FFA07A]/50 hover:scale-105'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-4xl mb-4">{game.icon}</div>
              <h3 className="font-bold text-xl mb-2 text-white">{game.name}</h3>
              <p className="text-sm text-[#CBD5E1]/80">{game.description}</p>
              {activeGame === game.id && (
                <div className="absolute top-4 right-4 text-[#FFA07A]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </motion.button>
          ))}
        </div>

        {/* Active Game Display */}
        <AnimatePresence>
          {activeGame === 'pacman' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="flex justify-center"
            >
              <PacmanGame />
            </motion.div>
          )}
          {activeGame === 'dice' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="flex justify-center"
            >
              <DiceRoller />
            </motion.div>
          )}
          {activeGame === 'colors' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="flex justify-center"
            >
              <ColorGenerator />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PlaygroundSection;
