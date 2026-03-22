// Achievements data for the Arabic Learning Platform

export interface AchievementData {
  id: string;
  category: 'learning' | 'streaks' | 'mastery' | 'social';
  icon: string;
  title: string;
  titleAr: string;
  description: string;
  xpReward: number;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
}

export const ALL_ACHIEVEMENTS: AchievementData[] = [
  // Learning achievements
  {
    id: "first-letter",
    category: "learning",
    icon: "✨",
    title: "First Letter",
    titleAr: "الحرف الأول",
    description: "Learn your first Arabic letter",
    xpReward: 50,
    rarity: "common",
  },
  {
    id: "alphabet-master",
    category: "learning",
    icon: "🔤",
    title: "Alphabet Master",
    titleAr: "سيد الأبجدية",
    description: "Learn all 28 Arabic letters",
    xpReward: 200,
    rarity: "rare",
  },
  {
    id: "harakat-hero",
    category: "learning",
    icon: "📝",
    title: "Harakat Hero",
    titleAr: "بطل الحركات",
    description: "Master all vowel marks (harakat)",
    xpReward: 150,
    rarity: "uncommon",
  },
  {
    id: "phase-1-complete",
    category: "learning",
    icon: "🎯",
    title: "Foundation Builder",
    titleAr: "باني الأساس",
    description: "Complete Phase 1: Foundations",
    xpReward: 500,
    rarity: "rare",
  },
  {
    id: "phase-2-complete",
    category: "learning",
    icon: "📚",
    title: "Vocabulary Virtuoso",
    titleAr: "بارع المفردات",
    description: "Complete Phase 2: Beginner Vocabulary",
    xpReward: 750,
    rarity: "rare",
  },
  {
    id: "phase-3-complete",
    category: "learning",
    icon: "🏛️",
    title: "Grammar Guardian",
    titleAr: "حارس القواعد",
    description: "Complete Phase 3: Intermediate Grammar",
    xpReward: 1000,
    rarity: "epic",
  },
  {
    id: "phase-4-complete",
    category: "learning",
    icon: "🎨",
    title: "Expression Expert",
    titleAr: "خبير التعبير",
    description: "Complete Phase 4: Advanced Expression",
    xpReward: 1500,
    rarity: "epic",
  },
  {
    id: "phase-5-complete",
    category: "learning",
    icon: "👑",
    title: "Arabic Master",
    titleAr: "سيد العربية",
    description: "Complete Phase 5: Expert Mastery",
    xpReward: 2000,
    rarity: "legendary",
  },
  // Streak achievements
  {
    id: "streak-3",
    category: "streaks",
    icon: "🔥",
    title: "Getting Started",
    titleAr: "البداية",
    description: "Maintain a 3-day streak",
    xpReward: 50,
    rarity: "common",
  },
  {
    id: "streak-7",
    category: "streaks",
    icon: "🔥",
    title: "Streak Week",
    titleAr: "أسبوع متواصل",
    description: "Maintain a 7-day streak",
    xpReward: 150,
    rarity: "uncommon",
  },
  {
    id: "streak-30",
    category: "streaks",
    icon: "💪",
    title: "Dedicated Learner",
    titleAr: "متعلم متفاني",
    description: "Maintain a 30-day streak",
    xpReward: 500,
    rarity: "rare",
  },
  {
    id: "streak-100",
    category: "streaks",
    icon: "🏆",
    title: "Streak Legend",
    titleAr: "أسطورة الاستمرارية",
    description: "Maintain a 100-day streak",
    xpReward: 1500,
    rarity: "legendary",
  },
  // Mastery achievements
  {
    id: "perfect-lesson",
    category: "mastery",
    icon: "💯",
    title: "Perfect Score",
    titleAr: "درجة كاملة",
    description: "Get 100% on any lesson",
    xpReward: 100,
    rarity: "uncommon",
  },
  {
    id: "speed-learner",
    category: "mastery",
    icon: "⚡",
    title: "Speed Learner",
    titleAr: "متعلم سريع",
    description: "Complete a lesson in under 5 minutes",
    xpReward: 75,
    rarity: "uncommon",
  },
  {
    id: "vocabulary-100",
    category: "mastery",
    icon: "📖",
    title: "Word Collector",
    titleAr: "جامع الكلمات",
    description: "Learn 100 vocabulary words",
    xpReward: 200,
    rarity: "rare",
  },
  {
    id: "vocabulary-500",
    category: "mastery",
    icon: "📚",
    title: "Lexicon Legend",
    titleAr: "أسطورة المفردات",
    description: "Learn 500 vocabulary words",
    xpReward: 750,
    rarity: "epic",
  },
  // Social achievements (placeholder)
  {
    id: "first-share",
    category: "social",
    icon: "🤝",
    title: "Sharing is Caring",
    titleAr: "المشاركة تعني الاهتمام",
    description: "Share your progress for the first time",
    xpReward: 25,
    rarity: "common",
  },
];

// Helper to get achievement by ID
export function getAchievementById(id: string): AchievementData | undefined {
  return ALL_ACHIEVEMENTS.find(a => a.id === id);
}

// Helper to get achievements by category
export function getAchievementsByCategory(category: AchievementData['category']): AchievementData[] {
  return ALL_ACHIEVEMENTS.filter(a => a.category === category);
}

// Categories metadata
export const ACHIEVEMENT_CATEGORIES = [
  { id: "learning" as const, label: "Learning", icon: "📚" },
  { id: "streaks" as const, label: "Streaks", icon: "🔥" },
  { id: "mastery" as const, label: "Mastery", icon: "👑" },
  { id: "social" as const, label: "Social", icon: "🤝" },
];
