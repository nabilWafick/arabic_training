"use client";

import { useState, useEffect } from "react";
import {
  Trophy,
  Star,
  Flame,
  BookOpen,
  Target,
  Zap,
  Crown,
  Medal,
  Award,
  Lock,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navbar, Sidebar, Footer } from "@/components/layout";
import { useGamificationStore } from "@/stores/useGamificationStore";

// Achievement categories
const ACHIEVEMENT_CATEGORIES = [
  { id: "learning", label: "Learning", icon: BookOpen },
  { id: "streaks", label: "Streaks", icon: Flame },
  { id: "mastery", label: "Mastery", icon: Crown },
  { id: "social", label: "Social", icon: Trophy },
];

// All achievements data
const ALL_ACHIEVEMENTS = [
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
    rarity: "epic",
  },
  {
    id: "polyglot",
    category: "learning",
    icon: "🌍",
    title: "Polyglot",
    titleAr: "متعدد اللغات",
    description: "Complete all 5 learning phases",
    xpReward: 2000,
    rarity: "legendary",
  },
  // Streak achievements
  {
    id: "streak-3",
    category: "streaks",
    icon: "🔥",
    title: "Getting Warm",
    titleAr: "بداية الحماس",
    description: "Maintain a 3-day learning streak",
    xpReward: 30,
    rarity: "common",
  },
  {
    id: "streak-7",
    category: "streaks",
    icon: "🔥",
    title: "Week Warrior",
    titleAr: "محارب الأسبوع",
    description: "Maintain a 7-day learning streak",
    xpReward: 100,
    rarity: "uncommon",
  },
  {
    id: "streak-30",
    category: "streaks",
    icon: "🔥",
    title: "Month Master",
    titleAr: "سيد الشهر",
    description: "Maintain a 30-day learning streak",
    xpReward: 500,
    rarity: "rare",
  },
  {
    id: "streak-100",
    category: "streaks",
    icon: "💎",
    title: "Century Legend",
    titleAr: "أسطورة المئة",
    description: "Maintain a 100-day learning streak",
    xpReward: 1500,
    rarity: "legendary",
  },
  // Mastery achievements
  {
    id: "perfect-lesson",
    category: "mastery",
    icon: "⭐",
    title: "Perfect Score",
    titleAr: "درجة كاملة",
    description: "Get 100% on any lesson quiz",
    xpReward: 100,
    rarity: "uncommon",
  },
  {
    id: "speed-learner",
    category: "mastery",
    icon: "⚡",
    title: "Speed Learner",
    titleAr: "متعلم سريع",
    description: "Complete 5 lessons in one day",
    xpReward: 200,
    rarity: "rare",
  },
  {
    id: "no-mistakes",
    category: "mastery",
    icon: "💯",
    title: "Flawless",
    titleAr: "بلا أخطاء",
    description: "Complete 10 exercises without any mistakes",
    xpReward: 300,
    rarity: "epic",
  },
  {
    id: "master-calligrapher",
    category: "mastery",
    icon: "🖌️",
    title: "Master Calligrapher",
    titleAr: "خطاط ماهر",
    description: "Practice writing for 10 hours total",
    xpReward: 500,
    rarity: "legendary",
  },
  // Social achievements
  {
    id: "first-friend",
    category: "social",
    icon: "🤝",
    title: "Making Friends",
    titleAr: "صداقة جديدة",
    description: "Add your first study buddy",
    xpReward: 50,
    rarity: "common",
  },
  {
    id: "leaderboard-top10",
    category: "social",
    icon: "🏆",
    title: "Rising Star",
    titleAr: "نجم صاعد",
    description: "Reach top 10 on the weekly leaderboard",
    xpReward: 300,
    rarity: "rare",
  },
  {
    id: "leaderboard-1",
    category: "social",
    icon: "👑",
    title: "Champion",
    titleAr: "البطل",
    description: "Reach #1 on the weekly leaderboard",
    xpReward: 1000,
    rarity: "legendary",
  },
];

// Rarity colors
const RARITY_COLORS = {
  common: "from-gray-400 to-gray-500",
  uncommon: "from-green-400 to-green-600",
  rare: "from-blue-400 to-blue-600",
  epic: "from-purple-400 to-purple-600",
  legendary: "from-gold to-gold-dark",
};

const RARITY_LABELS = {
  common: "Common",
  uncommon: "Uncommon",
  rare: "Rare",
  epic: "Epic",
  legendary: "Legendary",
};

/**
 * Achievements page - Display all achievements and progress
 */
export default function AchievementsPage() {
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { unlockedAchievements, stats } = useGamificationStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gold border-t-transparent" />
      </div>
    );
  }

  // Get unlocked achievement IDs from store
  const unlockedIds = new Set(unlockedAchievements || []);

  // Filter achievements by category
  const filteredAchievements =
    selectedCategory === "all"
      ? ALL_ACHIEVEMENTS
      : ALL_ACHIEVEMENTS.filter((a) => a.category === selectedCategory);

  // Stats - Calculate based on unlocked achievements
  const totalAchievements = ALL_ACHIEVEMENTS.length;
  const unlockedCount = unlockedIds.size;
  const totalXPFromAchievements = ALL_ACHIEVEMENTS
    .filter((a) => unlockedIds.has(a.id))
    .reduce((sum, a) => sum + (a.xpReward || 0), 0);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 overflow-auto p-6 lg:p-8">
          <div className="mx-auto max-w-6xl space-y-8">
            {/* Header */}
            <div>
              <h1 className="font-heading text-3xl font-bold text-foreground">
                Achievements
              </h1>
              <p className="text-muted-foreground">
                Track your accomplishments and earn rewards
              </p>
            </div>

            {/* Stats */}
            <div className="grid gap-4 sm:grid-cols-3">
              <Card className="border-border/50">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                    <Trophy className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">
                      {unlockedCount} / {totalAchievements}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Achievements Unlocked
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10">
                    <Zap className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">
                      {totalXPFromAchievements.toLocaleString()}
                    </p>
                    <p className="text-sm text-muted-foreground">XP from Achievements</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">Completion</p>
                    <p className="font-bold text-foreground">
                      {Math.round((unlockedCount / totalAchievements) * 100)}%
                    </p>
                  </div>
                  <Progress
                    value={(unlockedCount / totalAchievements) * 100}
                    className="mt-3 h-3"
                  />
                </CardContent>
              </Card>
            </div>

            {/* Category Tabs */}
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                {ACHIEVEMENT_CATEGORIES.map((cat) => (
                  <TabsTrigger key={cat.id} value={cat.id} className="gap-2">
                    <cat.icon className="h-4 w-4" />
                    {cat.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value={selectedCategory} className="mt-6">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredAchievements.map((achievement) => {
                    const isUnlocked = unlockedIds.has(achievement.id);
                    const rarityColor =
                      RARITY_COLORS[
                        achievement.rarity as keyof typeof RARITY_COLORS
                      ];

                    return (
                      <Card
                        key={achievement.id}
                        className={`relative overflow-hidden border-border/50 transition-all ${
                          isUnlocked
                            ? "bg-card"
                            : "bg-muted/30 opacity-70 grayscale"
                        }`}
                      >
                        {/* Rarity indicator */}
                        <div
                          className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${rarityColor}`}
                        />

                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            {/* Icon */}
                            <div
                              className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-2xl ${
                                isUnlocked
                                  ? `bg-gradient-to-br ${rarityColor} text-white`
                                  : "bg-muted"
                              }`}
                            >
                              {isUnlocked ? achievement.icon : <Lock className="h-6 w-6" />}
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                              <div className="flex items-start justify-between">
                                <div>
                                  <h3 className="font-semibold text-foreground">
                                    {achievement.title}
                                  </h3>
                                  <p className="font-arabic text-sm text-gold">
                                    {achievement.titleAr}
                                  </p>
                                </div>
                                {isUnlocked && (
                                  <Badge className="bg-green-500 text-white">
                                    ✓
                                  </Badge>
                                )}
                              </div>

                              <p className="mt-2 text-sm text-muted-foreground">
                                {achievement.description}
                              </p>

                              <div className="mt-3 flex items-center justify-between">
                                <Badge
                                  variant="secondary"
                                  className="text-xs capitalize"
                                >
                                  {
                                    RARITY_LABELS[
                                      achievement.rarity as keyof typeof RARITY_LABELS
                                    ]
                                  }
                                </Badge>
                                <span className="flex items-center gap-1 text-sm text-gold">
                                  <Star className="h-4 w-4 fill-gold" />
                                  +{achievement.xpReward} XP
                                </span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
