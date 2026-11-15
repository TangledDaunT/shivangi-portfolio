import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import PacmanGame from '../components/PacmanGame';
import { PixelStar, PixelHeart, PixelComputer } from '../components/PixelArt';

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
    <div className="bg-white/90 rounded-3xl p-8 border-2 border-[#BB98E5]/30 backdrop-blur-md shadow-[0_10px_35px_rgba(187,152,229,0.15)]">
      <div className="flex flex-col items-center gap-6">
        <div className="flex gap-8">
          {dice.map((d, i) => (
            <motion.div
              key={i}
              animate={{ rotate: rolling ? 360 : 0 }}
              transition={{ duration: 0.5 }}
              className="text-[100px] sm:text-[120px] text-[#7C3AED] drop-shadow-md select-none"
            >
              {diceFaces[d - 1]}
            </motion.div>
          ))}
        </div>
        <div className="text-[#1E1B4B] text-2xl font-black tracking-wide">
          Total: <span className="text-[#EA580C]">{dice[0] + dice[1]}</span>
        </div>
        <button
          onClick={rollDice}
          disabled={rolling}
          className="px-8 py-3 bg-gradient-to-r from-[#BB98E5] to-[#FFA07A] text-white font-bold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all disabled:opacity-50"
        >
          {rolling ? 'Rolling...' : 'Roll Dice 🎲'}
        </button>
      </div>
    </div>
  );
};

// Color Generator Component
const ColorGenerator = () => {
  const [palette, setPalette] = useState([
    '#BB98E5', '#FFA07A', '#6EE7B7', '#93C5FD', '#FEF08A'
  ]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const generatePalette = () => {
    const funkyColors = [
      '#BB98E5', '#C9A9EF', '#D7BAF5', '#EBDCF9',
      '#FFA07A', '#FFB08E', '#FF8F6B', '#F97316',
      '#6EE7B7', '#34D399', '#A7F3D0',
      '#93C5FD', '#60A5FA', '#BAE6FD',
      '#FDE047', '#FEF08A', '#FBCFE8', '#F472B6'
    ];
    const shuffled = [...funkyColors].sort(() => 0.5 - Math.random());
    setPalette(shuffled.slice(0, 5));
  };

  const copyColor = (color: string, i: number) => {
    navigator.clipboard.writeText(color);
    setCopiedIndex(i);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  return (
    <div className="bg-white/90 rounded-3xl p-8 border-2 border-[#BB98E5]/30 backdrop-blur-md shadow-[0_10px_35px_rgba(187,152,229,0.15)]">
      <div className="flex flex-col items-center gap-6">
        <div className="flex gap-3 sm:gap-4 w-full max-w-xl">
          {palette.map((color, i) => (
            <motion.button
              key={i}
              className="flex-1 h-24 sm:h-28 rounded-2xl cursor-pointer shadow-sm hover:scale-105 transition-transform border border-black/5 overflow-hidden"
              style={{ backgroundColor: color }}
              onClick={() => copyColor(color, i)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Click to copy hex code"
            >
              <div className="h-full flex items-end justify-center pb-2 px-1">
                <span className="text-[11px] font-mono font-bold bg-white/90 px-2 py-0.5 rounded-full text-slate-800 shadow-xs">
                  {copiedIndex === i ? 'Copied!' : color}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
        <button
          onClick={generatePalette}
          className="px-8 py-3 bg-gradient-to-r from-[#BB98E5] to-[#FFA07A] text-white font-bold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all"
        >
          Generate New Palette 🎨
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
      description: 'Classic arcade game rendered on HTML5 Canvas',
      icon: '👾',
    },
    {
      id: 'dice',
      name: 'Dice Roller',
      description: 'Random physics dice simulation with sound & spin',
      icon: '🎲',
    },
    {
      id: 'colors',
      name: 'Palette Generator',
      description: 'Funky pastel & sunset palette generator with clipboard copy',
      icon: '🎨',
    },
  ];

  return (
    <section
      id="playground"
      aria-labelledby="playground-heading"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-28 md:py-36 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={35}>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF5FF] border border-[#BB98E5]/40 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-3">
              <PixelComputer size={16} />
              <span>Interactive Experiments</span>
            </div>
            <h2
              id="playground-heading"
              className="text-[#0F172A] font-black uppercase text-center leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 9vw, 130px)' }}
            >
              Playground
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} y={30}>
          <p className="text-center text-slate-600 font-normal text-sm sm:text-base mb-12 max-w-xl mx-auto">
            Take a breather and test these interactive browser experiments built with React and Canvas.
          </p>
        </FadeIn>

        {/* Game Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
          {games.map((game) => (
            <motion.button
              key={game.id}
              onClick={() => setActiveGame(game.id)}
              className={`p-5 rounded-2xl border-2 text-left transition-all ${
                activeGame === game.id
                  ? 'bg-white border-[#BB98E5] shadow-[0_8px_30px_rgba(187,152,229,0.2)]'
                  : 'bg-white/60 border-slate-200 hover:border-[#FFA07A]/50 hover:bg-white'
              }`}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-2xl mb-2">{game.icon}</div>
              <h3 className="text-[#1E1B4B] font-bold text-base mb-1">{game.name}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{game.description}</p>
            </motion.button>
          ))}
        </div>

        {/* Active Demo Container */}
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {activeGame === 'pacman' && (
              <motion.div
                key="pacman"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <PacmanGame />
              </motion.div>
            )}

            {activeGame === 'dice' && (
              <motion.div
                key="dice"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <DiceRoller />
              </motion.div>
            )}

            {activeGame === 'colors' && (
              <motion.div
                key="colors"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <ColorGenerator />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PlaygroundSection;
