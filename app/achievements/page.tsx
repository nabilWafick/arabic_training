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
import { useTranslations } from "next-intl";

// Rarity colors
const RARITY_COLORS = {
  common: "from-gray-400 to-gray-500",
  uncommon: "from-green-400 to-green-600",
  rare: "from-blue-400 to-blue-600",
  epic: "from-purple-400 to-purple-600",
  legendary: "from-gold to-gold-dark",
};

/**
 * Achievements page - Display all achievements and progress
 */
export default function AchievementsPage() {
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { unlockedAchievements, stats } = useGamificationStore();
  const t = useTranslations();

  // Achievement categories
  const ACHIEVEMENT_CATEGORIES = [
    { id: "learning", label: t("achievements.categories.learning"), icon: BookOpen },
    { id: "streaks", label: t("achievements.categories.streaks"), icon: Flame },
    { id: "mastery", label: t("achievements.categories.mastery"), icon: Crown },
    { id: "social", label: t("achievements.categories.social"), icon: Trophy },
  ];

  // All achievements data
  const ALL_ACHIEVEMENTS = [
    // Learning achievements
    {
      id: "first-letter",
      category: "learning",
      icon: "✨",
      title: t("achievements.list.firstLetter"),
      titleAr: t("achievements.list.firstLetterAr"),
      description: t("achievements.list.firstLetterDesc"),
      xpReward: 50,
      rarity: "common",
    },
    {
      id: "alphabet-master",
      category: "learning",
      icon: "🔤",
      title: t("achievements.list.alphabetMaster"),
      titleAr: t("achievements.list.alphabetMasterAr"),
      description: t("achievements.list.alphabetMasterDesc"),
      xpReward: 200,
      rarity: "rare",
    },
    {
      id: "harakat-hero",
      category: "learning",
      icon: "📝",
      title: t("achievements.list.harakatHero"),
      titleAr: t("achievements.list.harakatHeroAr"),
      description: t("achievements.list.harakatHeroDesc"),
      xpReward: 150,
      rarity: "uncommon",
    },
    {
      id: "phase-1-complete",
      category: "learning",
      icon: "🎯",
      title: t("achievements.list.foundationBuilder"),
      titleAr: t("achievements.list.foundationBuilderAr"),
      description: t("achievements.list.foundationBuilderDesc"),
      xpReward: 500,
      rarity: "rare",
    },
    {
      id: "phase-2-complete",
      category: "learning",
      icon: "📚",
      title: t("achievements.list.vocabularyVirtuoso"),
      titleAr: t("achievements.list.vocabularyVirtuosoAr"),
      description: t("achievements.list.vocabularyVirtuosoDesc"),
      xpReward: 750,
      rarity: "epic",
    },
    {
      id: "polyglot",
      category: "learning",
      icon: "🌍",
      title: t("achievements.list.polyglot"),
      titleAr: t("achievements.list.polyglotAr"),
      description: t("achievements.list.polyglotDesc"),
      xpReward: 2000,
      rarity: "legendary",
    },
    // Streak achievements
    {
      id: "streak-3",
      category: "streaks",
      icon: "🔥",
      title: t("achievements.list.gettingWarm"),
      titleAr: t("achievements.list.gettingWarmAr"),
      description: t("achievements.list.gettingWarmDesc"),
      xpReward: 30,
      rarity: "common",
    },
    {
      id: "streak-7",
      category: "streaks",
      icon: "🔥",
      title: t("achievements.list.weekWarrior"),
      titleAr: t("achievements.list.weekWarriorAr"),
      description: t("achievements.list.weekWarriorDesc"),
      xpReward: 100,
      rarity: "uncommon",
    },
    {
      id: "streak-30",
      category: "streaks",
      icon: "🔥",
      title: t("achievements.list.monthMaster"),
      titleAr: t("achievements.list.monthMasterAr"),
      description: t("achievements.list.monthMasterDesc"),
      xpReward: 500,
      rarity: "rare",
    },
    {
      id: "streak-100",
      category: "streaks",
      icon: "💎",
      title: t("achievements.list.centuryLegend"),
      titleAr: t("achievements.list.centuryLegendAr"),
      description: t("achievements.list.centuryLegendDesc"),
      xpReward: 1500,
      rarity: "legendary",
    },
    // Mastery achievements
    {
      id: "perfect-lesson",
      category: "mastery",
      icon: "⭐",
      title: t("achievements.list.perfectScore"),
      titleAr: t("achievements.list.perfectScoreAr"),
      description: t("achievements.list.perfectScoreDesc"),
      xpReward: 100,
      rarity: "uncommon",
    },
    {
      id: "speed-learner",
      category: "mastery",
      icon: "⚡",
      title: t("achievements.list.speedLearner"),
      titleAr: t("achievements.list.speedLearnerAr"),
      description: t("achievements.list.speedLearnerDesc"),
      xpReward: 200,
      rarity: "rare",
    },
    {
      id: "no-mistakes",
      category: "mastery",
      icon: "💯",
      title: t("achievements.list.flawless"),
      titleAr: t("achievements.list.flawlessAr"),
      description: t("achievements.list.flawlessDesc"),
      xpReward: 300,
      rarity: "epic",
    },
    {
      id: "master-calligrapher",
      category: "mastery",
      icon: "🖌️",
      title: t("achievements.list.masterCalligrapher"),
      titleAr: t("achievements.list.masterCalligrapherAr"),
      description: t("achievements.list.masterCalligrapherDesc"),
      xpReward: 500,
      rarity: "legendary",
    },
    // Social achievements
    {
      id: "first-friend",
      category: "social",
      icon: "🤝",
      title: t("achievements.list.makingFriends"),
      titleAr: t("achievements.list.makingFriendsAr"),
      description: t("achievements.list.makingFriendsDesc"),
      xpReward: 50,
      rarity: "common",
    },
    {
      id: "leaderboard-top10",
      category: "social",
      icon: "🏆",
      title: t("achievements.list.risingStar"),
      titleAr: t("achievements.list.risingStarAr"),
      description: t("achievements.list.risingStarDesc"),
      xpReward: 300,
      rarity: "rare",
    },
    {
      id: "leaderboard-1",
      category: "social",
      icon: "👑",
      title: t("achievements.list.champion"),
      titleAr: t("achievements.list.championAr"),
      description: t("achievements.list.championDesc"),
      xpReward: 1000,
      rarity: "legendary",
    },
  ];

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
                {t("achievements.title")}
              </h1>
              <p className="text-muted-foreground">
                {t("achievements.description")}
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
                      {t("achievements.unlocked")}
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
                    <p className="text-sm text-muted-foreground">{t("achievements.xpFromAchievements")}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">{t("achievements.completion")}</p>
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
                <TabsTrigger value="all">{t("achievements.categories.all")}</TabsTrigger>
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
                                  {t(`achievements.rarity.${achievement.rarity}`)}
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
