import { Translations } from "./types";
import {
  SUPPORT_EMAIL,
  WEBSITE_URL,
  PRIVACY_POLICY_LAST_UPDATED,
} from "../constants";

const en: Translations = {
  common: {
    selectLanguage: "Select Language",
  },
  hero: {
    title: "Sudoku Ultimato - Endless Sudoku Puzzles",
    subtitle:
      "Sudoku without limits. Play Classic Sudoku, Killer Sudoku, and giant grids with a clean interface and endless puzzles. Designed for both casual players and experts.",
    ctaApple: "Download on iOS",
    ctaGoogle: "Download on Android",
    availableSoon: "Available soon",
    imageAlt: "Sudoku Ultimato App Showcase",
    imageTitle: "Sudoku Ultimato App Showcase",
    classicImageAlt: "Classic Sudoku mode",
    classicImageTitle: "Classic Sudoku mode",
    killerImageAlt: "Killer Sudoku mode",
    killerImageTitle: "Killer Sudoku mode",
    largeImageAlt: "16x16 Sudoku mode",
    largeImageTitle: "16x16 Sudoku mode",
  },
  intro: {
    title: "What is Sudoku Ultimato",
    description:
      "Sudoku Ultimato is a modern Sudoku app that generates every puzzle instantly. Instead of a fixed library of premade boards, the app creates puzzles from seeds, which means the supply never runs out and difficulty stays consistent.\n\nPlayers can choose between different modes and board sizes, including Classic Sudoku and Killer Sudoku cages. For fast sessions there are small 4x4 boards. For long deep solving sessions there are giant 16x16 grids. Daily puzzles are available for streaks and personal progress.",
  },
  modes: {
    title: "Multiple Sudoku Modes",
    items: {
      classic: {
        title: "Classic Sudoku",
        description: "The standard 9x9 Sudoku that most players know.",
      },
      killer: {
        title: "Killer Sudoku",
        description:
          "A variant where cages and sum totals create extra constraints. This mode rewards deeper logic and pattern recognition.",
      },
      sizes: {
        title: "Small and Large Grids",
        description:
          "Play small 4x4 puzzles for quick breaks or giant 16x16 puzzles for longer sessions and advanced strategies.",
      },
    },
  },
  endless: {
    title: "Endless Puzzles",
    description:
      "Every Sudoku puzzle is generated from a deterministic seed. Levels are never repeated and the difficulty remains consistent. There is no waiting for new packs or level unlocks. You can play as much as you want.",
  },
  themes: {
    title: "Themes and Visual Customization",
    description:
      "Sudoku Ultimato includes a theme system for comfortable long play sessions. Players can choose Light Mode, Dark Mode or follow System Mode. High contrast colors and clean fonts make patterns easy to spot.",
  },
  progress: {
    title: "Track Your Progress and Statistics",
    description:
      "Monitor your Sudoku journey with comprehensive progress tracking and detailed statistics. View completion rates, best times, and streaks across all difficulty levels and game modes. The progress screen shows your current puzzle, completed puzzles with performance metrics, and win rates. Statistics provide insights into your play time, favorite difficulty, longest streaks, and overall improvement over time.",
  },
  accessibility: {
    title: "Accessibility and Player Comfort",
    description:
      "Accessibility is treated as a core feature. The app supports:",
    items: [
      "Zoom controls and pinch gestures",
      "Landscape mode",
      "Clear number visuals",
      "Quick input",
      "Haptic feedback",
      "Left Number count",
      "Auto clear notes",
    ],
    note: "These features help both new and experienced players solve faster without strain.",
  },
  daily: {
    title: "Daily Puzzles",
    description:
      "A daily puzzle is available for streaks and personal improvement. Daily puzzles are stored so players can compare times and track progress over weeks and months.",
  },
  noAds: {
    title: "No Intrusive Ads",
    description:
      "Sudoku Ultimato does not interrupt play with full screen ads. This keeps the solving rhythm calm and focused.",
  },
  whyKiller: {
    title: "Why Killer Sudoku and 16x16 Matter",
    description:
      "Killer Sudoku adds additional logic layers through sum cages and duplicate rules. Large 16x16 Sudoku grids demand more planning and reward advanced techniques such as scanning, candidate elimination and pattern play.\n\nThese modes are rarely available together in a single app, especially with endless generation and accessibility features.",
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        q: "Does Sudoku Ultimato have endless Sudoku levels?",
        a: "Yes. Every level is generated from a seed and puzzles never run out.",
      },
      {
        q: "Does the app include Killer Sudoku?",
        a: "Yes. Killer cages and cage sums are included with clean visuals and dashed outlines.",
      },
      { q: "What grid sizes are supported?", a: "4x4, 9x9 and 16x16." },
      {
        q: "Is Sudoku Ultimato beginner friendly?",
        a: "Yes. Small grids and assist features help new players learn Sudoku patterns.",
      },
      {
        q: "Is the app good for experts?",
        a: "Yes. Killer Sudoku and 16x16 grids provide deep logical challenges.",
      },
      {
        q: "Are there intrusive ads or pop ups?",
        a: "No. The app avoids full screen interruptions.",
      },
      {
        q: "Is there Dark Mode support?",
        a: "Yes. Light Mode, Dark Mode and System Mode are available.",
      },
    ],
  },
  footer: {
    support: "Support",
    privacy: "Privacy Policy",
    contact: "Contact",
    rights: "© 2026 Sudoku Ultimato. All rights reserved.",
    availableIn: "Available in English, Nederlands, and ไทย",
  },
  supportPage: {
    title: "Support",
    body: `Need help? Contact us at ${SUPPORT_EMAIL}`,
  },
  privacyPage: {
    title: "Privacy Policy",
    lastUpdated: `Last updated: ${PRIVACY_POLICY_LAST_UPDATED}`,
    sections: [
      {
        title: "1. Information We Collect",
        content:
          "We aim to collect as little personal information as possible. The App may collect the following types of data:",
      },
      {
        title: "1.1 Usage & Gameplay Data",
        content: [
          "Puzzle completion times",
          "Mistakes and hints used",
          "Daily puzzle participation",
          "Difficulty selections",
        ],
      },
      {
        title: "",
        content:
          "This data may be stored locally on your device or on Firebase Firestore if cloud sync or leaderboards are enabled.",
      },
      {
        title: "1.2 Device & Technical Data",
        content:
          "We may collect non-identifying technical data automatically, such as device model, OS version, app version, crash logs, and performance metrics. This helps improve stability and debugging.",
      },
      {
        title: "1.3 Optional Account Information",
        content:
          "The App may offer optional authentication (e.g., Firebase Auth). This is used for syncing statistics across devices and participating in cloud features. If you sign in, we may store user identifiers, display names, and email addresses (if provided). We do not require an account to play.",
      },
      {
        title: "1.4 Advertising Data",
        content:
          "The App uses Google AdMob to serve non-intrusive ads. AdMob may collect advertising identifiers (e.g., AAID/IDFA), approximate location (based on IP), and interest-based ad signals (if permitted by your device settings). You can opt out of interest-based ads via device settings.",
      },
      {
        title: "2. Local Storage",
        content:
          "The App stores certain data on your device to function offline, such as game progress, settings, preferences, daily puzzle status, and statistics (stored using local databases like Hive/Isar).",
      },
      {
        title: "3. Children’s Privacy",
        content:
          "This App is not designed for children under 13. We do not knowingly collect personal information from children. If you believe this has occurred, please contact us and we will delete such data.",
      },
      {
        title: "4. How We Use Data",
        content: [
          "Generate puzzles",
          "Save progress",
          "Improve puzzle difficulty",
          "Provide statistics and leaderboards",
          "Fix bugs and crashes",
          "Show non-intrusive ads (AdMob)",
          "Sync data across devices (if logged in)",
        ],
      },
      {
        title: "",
        content: "We do not sell data to third parties.",
      },
      {
        title: "5. Third-Party Services",
        content:
          "The App uses Google Firebase (Auth, Firestore, Analytics, Crashlytics), Google AdMob (advertising), and Flutter framework (UI). Their policies apply when interacting with those services.",
      },
      {
        title: "6. Data Retention",
        content:
          "We retain gameplay and statistical data as long as the App remains operational or until you request deletion (if linked to an account). Offline data is stored only on your device and is deleted when you uninstall the App.",
      },
      {
        title: "7. Data Removal / Opt-Out",
        content: `Users may request account deletion, cloud data deletion, and ad tracking opt-out (via device settings). To request deletion, contact support at: ${SUPPORT_EMAIL}. Cloud data will be deleted within a reasonable time.`,
      },
      {
        title: "8. Security",
        content:
          "We take reasonable measures to protect data, including Firebase security rules, access control for Firestore, minimal data collection, and no unnecessary personal identifiers. However, no digital service can guarantee absolute security.",
      },
      {
        title: "9. International Data Transfers",
        content:
          "Firebase and related services may process data in multiple regions, including outside the EU, under GDPR-compliant frameworks.",
      },
      {
        title: "10. Changes to This Policy",
        content:
          "We may update this Privacy Policy as needed. Updates will be posted within the App or on our website.",
      },
      {
        title: "11. Contact",
        content: `For questions or privacy concerns: Sudoku Ultimato Support. Email: ${SUPPORT_EMAIL}. Website: ${WEBSITE_URL}`,
      },
    ],
  },
  metadata: {
    title: "Sudoku Ultimato - Endless Classic & Killer Sudoku for iOS",
    description:
      "Play endless Sudoku puzzles. Classic, Killer & 16x16 grids. Daily challenges, clean interface, dark mode. Free iOS app.",
  },
};

export default en;
