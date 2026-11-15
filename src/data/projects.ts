export interface Project {
  name: string;
  description: string;
  tech: string[];
  stars: number;
  url?: string;
  liveUrl?: string;
  category: 'featured' | 'production' | 'automation' | 'iot' | 'experiment';
  isNew?: boolean;
  highlights?: string[];
  longDescription?: string;
}

export const projects: Project[] = [
  {
    name: 'KahaniVerse (@kahaniverse329)',
    description: 'Autonomous AI storytelling platform & automated video pipeline with 100K+ views on Instagram. Shivangi authors the story narratives, while an automated pipeline synthesizes visuals and voiceover, publishes directly to Instagram, and analyzes viewer retention loops.',
    tech: ['Python', 'AI Video Synthesis', 'Instagram Graph API', 'LLM Story Engine', 'Analytics Feedback Loop'],
    stars: 100,
    url: 'https://www.instagram.com/kahaniverse329/',
    liveUrl: 'https://www.instagram.com/kahaniverse329/',
    category: 'featured',
    isNew: true,
    highlights: ['100K+ Total Views', 'Autonomous Publishing', 'AI Video Pipeline', 'Feedback Loop'],
    longDescription: 'An automated AI-driven storytelling engine and video ecosystem built around @kahaniverse329. Shivangi writes the original story narratives; the custom automated pipeline orchestrates AI scene generation, voice synthesis, video compilation, and autonomous scheduled publishing to Instagram. The system continuously queries post performance metrics via API, providing automated insights and recommendations on hooks and pacing.',
  },
  {
    name: 'Cupid — University Matchmaker',
    description: 'Campus dating web platform built exclusively for Galgotias University students featuring interactive matchmaking, profile verification, and fluid mobile-first transitions.',
    tech: ['React', 'Tailwind CSS', 'TypeScript', 'Node.js'],
    stars: 18,
    category: 'featured',
    highlights: ['Galgotias Campus', 'Interactive Matching', 'Responsive Flow'],
    longDescription: 'A university dating web platform tailored for Galgotias University students with interactive matchmaking and fluid animations.',
  },
  {
    name: 'Skincare AI App',
    description: 'AI-powered skincare analyzer and personalized regimen recommendation platform evaluating skin types and ingredient compatibility.',
    tech: ['React', 'Tailwind CSS', 'AI / ML', 'Python'],
    stars: 12,
    category: 'featured',
    highlights: ['AI Diagnosis', 'Ingredient Insights', 'Mobile-First'],
    longDescription: 'An intelligent skincare recommendation app using AI to analyze skin types and offer tailored regimens.',
  },
  {
    name: 'Expense Tracker',
    description: 'Web budgeting application deployed on Vercel with transaction logging, spending breakdown charts, and budget limits.',
    tech: ['React', 'Tailwind CSS', 'Vercel', 'JavaScript'],
    stars: 8,
    liveUrl: 'https://expense-tracker-nine-ebon-61.vercel.app',
    category: 'production',
    highlights: ['Live Deployment', 'Budget Analytics', 'Fast UX'],
    longDescription: 'Expense tracking application deployed on Vercel with transaction logging and spend breakdowns.',
  },
  {
    name: 'Mrityunjaya Yoga',
    description: 'Yoga and wellness web experience deployed on Vercel with class schedules, guided wellness flows, and peaceful UI.',
    tech: ['React', 'Tailwind CSS', 'Vercel'],
    stars: 6,
    liveUrl: 'https://mrityunjaya-yoga-shreyanshs-projects-9ce85c91.vercel.app',
    category: 'production',
    highlights: ['Live Deployment', 'Wellness Hub', 'Fluid UI'],
    longDescription: 'Yoga and wellness website deployed on Vercel featuring interactive class schedules.',
  },
  {
    name: 'Voice Journal',
    description: 'Local, always-on voice journal that logs daily reflections directly to Obsidian with offline speech recognition.',
    tech: ['Python', 'Speech Recognition', 'Obsidian API'],
    stars: 5,
    category: 'automation',
    isNew: true,
    highlights: ['Offline AI', 'Obsidian Sync', 'Voice Notes'],
  },
  {
    name: 'MindBridge',
    description: 'Mental-health SaaS web app tracking emotional patterns, journal prompts, and preparing session summaries.',
    tech: ['SaaS', 'AI Analytics', 'Mental Health'],
    stars: 7,
    category: 'automation',
    isNew: true,
    highlights: ['Sentiment Tracking', 'Session Briefs', 'Privacy-First'],
  },
  {
    name: 'CosmicRGB Controller',
    description: 'Native menu bar app and driver suite for Cosmic Byte mechanical keyboard RGB lighting profiles.',
    tech: ['Python', 'Hardware Driver', 'macOS App'],
    stars: 4,
    category: 'iot',
    isNew: true,
    highlights: ['Hardware Control', 'RGB Profiles', 'Low Latency'],
  },
  {
    name: 'ESP32 Room Automation',
    description: 'Microcontroller IoT system for smart ambient lighting control, sensors, and room environmental telemetry.',
    tech: ['ESP32', 'C++', 'IoT Sensors', 'Home Automation'],
    stars: 4,
    category: 'iot',
    highlights: ['Hardware Automation', 'Realtime Sensors'],
  },
  {
    name: 'GestureLight',
    description: 'Contactless gesture-controlled light interface powered by optical sensors and responsive PWM dimming.',
    tech: ['Sensors', 'Gesture Control', 'Embedded C'],
    stars: 3,
    category: 'iot',
    highlights: ['Contactless', 'Gesture Sensing'],
  },
];

export const categoryLabels: Record<Project['category'], string> = {
  featured: 'Featured Highlights',
  production: 'Live Deployments',
  automation: 'AI & Automation',
  iot: 'IoT & Hardware',
  experiment: 'Creative Lab',
};

export const categoryColors: Record<Project['category'], string> = {
  featured: '#FFA07A',
  production: '#BB98E5',
  automation: '#6EE7B7',
  iot: '#93C5FD',
  experiment: '#F472B6',
};
