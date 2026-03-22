"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  BarChart3,
  TrendingUp,
  Clock,
  Target,
  Trophy,
  Flame,
  BookOpen,
  ChevronRight,
  Calendar,
  Star,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navbar, Sidebar, Footer } from "@/components/layout";
import { useGamificationStore } from "@/stores/useGamificationStore";
import { useProgressStore } from "@/stores/useProgressStore";
import { useTranslations } from "next-intl";
import { CURRICULUM } from "@/data/curriculum";

/**
 * Progress page - Comprehensive view of user's learning journey
 * Shows statistics, achievements, and detailed progress per phase
 */
export default function ProgressPage() {
  const [mounted, setMounted] = useState(false);
  const { stats, unlockedAchievements, getLevelInfo } = useGamificationStore();
  const { phases, getPhaseProgress } = useProgressStore();
  const t = useTranslations();

  // Extract stats with safe defaults
  const xp = stats?.xp ?? 0;
  const level = stats?.level ?? 1;
  const streak = stats?.streak ?? 0;
  const longestStreak = stats?.longestStreak ?? 0;
  const lessonsCompleted = stats?.lessonsCompleted ?? 0;

  useEffect(() => {
    setMounted(true);
  }, []);

  // Calculate overall progress
  const overallProgress = useMemo(() => {
    const totalLessons = CURRICULUM.reduce((acc, phase) => acc + phase.totalLessons, 0);
    return totalLessons > 0 ? Math.round((lessonsCompleted / totalLessons) * 100) : 0;
  }, [lessonsCompleted]);

  // Weekly activity data (mock for now)
  const weeklyActivity = [
    { day: "Mon", minutes: 25, lessons: 2 },
    { day: "Tue", minutes: 45, lessons: 3 },
    { day: "Wed", minutes: 30, lessons: 2 },
    { day: "Thu", minutes: 0, lessons: 0 },
    { day: "Fri", minutes: 60, lessons: 4 },
    { day: "Sat", minutes: 40, lessons: 3 },
    { day: "Sun", minutes: 35, lessons: 2 },
  ];

  const totalWeeklyMinutes = weeklyActivity.reduce((acc, day) => acc + day.minutes, 0);
  const maxMinutes = Math.max(...weeklyActivity.map((d) => d.minutes), 1);

  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gold border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 overflow-auto p-6 lg:p-8">
          <div className="mx-auto max-w-6xl space-y-8">
            {/* Header */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="font-heading text-3xl font-bold text-foreground">
                  {t("navigation.progress")}
                </h1>
                <p className="text-muted-foreground">
                  {t("messages.trackYourJourney")}
                </p>
              </div>
              <Button className="gap-2 bg-gold text-background hover:bg-gold-dark" asChild>
                <Link href="/learn">
                  <BookOpen className="h-4 w-4" />
                  {t("learning.continueLearning")}
                </Link>
              </Button>
            </div>

            {/* Overview Stats */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="border-border/50">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                    <Zap className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{xp.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">{t("dashboard.totalXP")}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10">
                    <Star className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{level}</p>
                    <p className="text-sm text-muted-foreground">{t("learning.level")}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10">
                    <Flame className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{streak}</p>
                    <p className="text-sm text-muted-foreground">{t("dashboard.dayStreak")}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{lessonsCompleted}</p>
                    <p className="text-sm text-muted-foreground">{t("dashboard.lessonsDone")}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Left Column - Progress by Phase */}
              <div className="space-y-6 lg:col-span-2">
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-gold" />
                      {t("dashboard.learningProgress")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/* Overall Progress */}
                    <div className="mb-6 rounded-lg bg-gold/5 p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{t("learning.overallProgress")}</span>
                        <span className="text-gold font-bold">{overallProgress}%</span>
                      </div>
                      <Progress value={overallProgress} className="h-3" />
                    </div>

                    {/* Phase Progress */}
                    <div className="space-y-4">
                      {CURRICULUM.map((phase) => {
                        const phaseProgress = getPhaseProgress(phase.id);
                        const progressPercent = phaseProgress?.overallProgress ?? 0;
                        const completedLessons = phaseProgress?.completedLessons ?? 0;

                        return (
                          <Link
                            key={phase.id}
                            href={`/learn/phase/${phase.id}`}
                            className="block"
                          >
                            <div className="group rounded-lg border border-border/50 p-4 transition-all hover:border-gold/50 hover:bg-gold/5">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-3">
                                  <div
                                    className="flex h-10 w-10 items-center justify-center rounded-lg text-xl"
                                    style={{ backgroundColor: `${phase.color}20` }}
                                  >
                                    {phase.icon}
                                  </div>
                                  <div>
                                    <p className="font-medium text-foreground group-hover:text-gold">
                                      {t("learning.phase")} {phase.id}: {phase.title}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                      {completedLessons}/{phase.totalLessons} {t("common.lessons")}
                                    </p>
                                  </div>
                                </div>
                                <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                              </div>
                              <Progress value={progressPercent} className="h-2" />
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Weekly Activity */}
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-gold" />
                      {t("dashboard.thisWeek")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-end justify-between gap-2 h-40">
                      {weeklyActivity.map((day) => (
                        <div key={day.day} className="flex flex-col items-center flex-1">
                          <div
                            className="w-full rounded-t-lg bg-gold/20 transition-all hover:bg-gold/30"
                            style={{
                              height: `${(day.minutes / maxMinutes) * 100}%`,
                              minHeight: day.minutes > 0 ? "8px" : "4px",
                              backgroundColor: day.minutes > 0 ? undefined : "var(--muted)",
                            }}
                          />
                          <span className="mt-2 text-xs text-muted-foreground">{day.day}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {totalWeeklyMinutes} {t("common.minutes")} {t("dashboard.thisWeek").toLowerCase()}
                        </span>
                      </div>
                      <Badge variant="secondary">
                        {weeklyActivity.filter((d) => d.minutes > 0).length} {t("dashboard.daysActiveThisWeek")}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Achievements & Streak */}
              <div className="space-y-6">
                {/* Streak Card */}
                <Card className="border-border/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Flame className="h-5 w-5 text-orange-500" />
                      {t("dashboard.dailyStreak")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <p className="text-5xl font-bold text-orange-500">{streak}</p>
                      <p className="text-sm text-muted-foreground">{t("common.days")}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{t("dashboard.longestStreak")}</span>
                      <span className="font-semibold">{longestStreak} {t("common.days")}</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Achievements Card */}
                <Card className="border-border/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center justify-between text-lg">
                      <div className="flex items-center gap-2">
                        <Trophy className="h-5 w-5 text-gold" />
                        {t("gamification.achievements")}
                      </div>
                      <Link href="/achievements">
                        <Button variant="ghost" size="sm">
                          {t("common.viewAll")}
                        </Button>
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {unlockedAchievements.length > 0 ? (
                      <div className="space-y-3">
                        {unlockedAchievements.slice(0, 5).map((achievement) => (
                          <div
                            key={achievement.id}
                            className="flex items-center gap-3 rounded-lg bg-gold/5 p-3"
                          >
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-lg">
                              {achievement.icon}
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium">{achievement.title}</p>
                              <p className="text-xs text-muted-foreground">
                                +{achievement.xpReward} XP
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-6">
                        <Trophy className="h-12 w-12 mx-auto text-muted-foreground/50" />
                        <p className="mt-2 text-sm text-muted-foreground">
                          {t("gamification.completeToEarn")}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="border-border/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Target className="h-5 w-5 text-gold" />
                      {t("dashboard.quickPractice")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button variant="outline" className="w-full justify-start gap-2" asChild>
                      <Link href="/practice/alphabet">
                        <span className="font-arabic">أ</span>
                        {t("arabic.alphabet")}
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-2" asChild>
                      <Link href="/practice/vocabulary">
                        <BookOpen className="h-4 w-4" />
                        {t("arabic.vocabulary")}
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-2" asChild>
                      <Link href="/practice/daily-challenge">
                        <Zap className="h-4 w-4" />
                        {t("learning.dailyChallenge")}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
