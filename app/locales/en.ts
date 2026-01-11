import { Translations } from './types';

const en: Translations = {
  hero: {
    title: 'Sudoku Ultimato',
    subtitle: 'Sudoku without limits. Play Classic Sudoku, Killer Sudoku, and giant grids with a clean interface and endless puzzles. Designed for both casual players and experts.',
    cta: 'Download on iOS'
  },
  intro: {
    title: 'What is Sudoku Ultimato',
    description: 'Sudoku Ultimato is a modern Sudoku app that generates every puzzle instantly. Instead of a fixed library of premade boards, the app creates puzzles from seeds, which means the supply never runs out and difficulty stays consistent.\n\nPlayers can choose between different modes and board sizes, including Classic Sudoku and Killer Sudoku cages. For fast sessions there are small 4x4 boards. For long deep solving sessions there are giant 16x16 grids. Daily puzzles are available for streaks and personal progress.'
  },
  modes: {
    title: 'Multiple Sudoku Modes',
    items: {
      classic: {
        title: 'Classic Sudoku',
        description: 'The standard 9x9 Sudoku that most players know.'
      },
      killer: {
        title: 'Killer Sudoku',
        description: 'A variant where cages and sum totals create extra constraints. This mode rewards deeper logic and pattern recognition.'
      },
      sizes: {
        title: 'Small and Large Grids',
        description: 'Play small 4x4 puzzles for quick breaks or giant 16x16 puzzles for longer sessions and advanced strategies.'
      }
    }
  },
  endless: {
    title: 'Endless Puzzles',
    description: 'Every Sudoku puzzle is generated from a deterministic seed. Levels are never repeated and the difficulty remains consistent. There is no waiting for new packs or level unlocks. You can play as much as you want.'
  },
  themes: {
    title: 'Themes and Visual Customization',
    description: 'Sudoku Ultimato includes a theme system for comfortable long play sessions. Players can choose Light Mode, Dark Mode or follow System Mode. High contrast colors and clean fonts make patterns easy to spot.'
  },
  accessibility: {
    title: 'Accessibility and Player Comfort',
    description: 'Accessibility is treated as a core feature. The app supports:',
    items: [
      'Zoom controls and pinch gestures',
      'Landscape mode',
      'Clear number visuals',
      'Number first or cell first input modes',
      'Haptic feedback',
      'Number counts',
      'Auto clean notes'
    ],
    note: 'These features help both new and experienced players solve faster without strain.'
  },
  daily: {
    title: 'Daily Puzzles',
    description: 'A daily puzzle is available for streaks and personal improvement. Daily puzzles are stored so players can compare times and track progress over weeks and months.'
  },
  noAds: {
    title: 'No Intrusive Ads',
    description: 'Sudoku Ultimato does not interrupt play with full screen ads. This keeps the solving rhythm calm and focused.'
  },
  whyKiller: {
    title: 'Why Killer Sudoku and 16x16 Matter',
    description: 'Killer Sudoku adds additional logic layers through sum cages and duplicate rules. Large 16x16 Sudoku grids demand more planning and reward advanced techniques such as scanning, candidate elimination and pattern play.\n\nThese modes are rarely available together in a single app, especially with endless generation and accessibility features.'
  },
  faq: {
    title: 'Frequently Asked Questions',
    items: [
      { q: 'Does Sudoku Ultimato have endless Sudoku levels?', a: 'Yes. Every level is generated from a seed and puzzles never run out.' },
      { q: 'Does the app include Killer Sudoku?', a: 'Yes. Killer cages and cage sums are included with clean visuals and dashed outlines.' },
      { q: 'What grid sizes are supported?', a: '4x4, 9x9 and 16x16.' },
      { q: 'Is Sudoku Ultimato beginner friendly?', a: 'Yes. Small grids and assist features help new players learn Sudoku patterns.' },
      { q: 'Is the app good for experts?', a: 'Yes. Killer Sudoku and 16x16 grids provide deep logical challenges.' },
      { q: 'Are there intrusive ads or pop ups?', a: 'No. The app avoids full screen interruptions.' },
      { q: 'Is there Dark Mode support?', a: 'Yes. Light Mode, Dark Mode and System Mode are available.' }
    ]
  },
  footer: {
    support: 'Support',
    privacy: 'Privacy Policy',
    contact: 'Contact'
  },
  supportPage: {
    title: 'Support',
    body: 'Need help? Contact us at support@ultimatosudoku.com'
  }
};

export default en;
