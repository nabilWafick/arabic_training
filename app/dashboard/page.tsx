"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  BookOpen,
  Trophy,
  Flame,
  Target,
  TrendingUp,
  Clock,
  Star,
  ChevronRight,
  Play,
  Zap,
  Calendar,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navbar, Sidebar, Footer } from "@/components/layout";
import { XPBar, StreakTracker, AchievementBadge } from "@/components/gamification";
import { useGamificationStore } from "@/stores/useGamificationStore";
import { useProgressStore } from "@/stores/useProgressStore";
import { CURRICULUM } from "@/data/curriculum";

/**
 * Dashboard page - User's main learning hub
 * Shows progress overview, stats, recent activity, and quick actions
 */
export default function DashboardPage() {
  const [mounted, setMounted] = useState(false);
  const { xp, level, streak, achievements, getXPForNextLevel, getXPProgress } =
    useGamificationStore();
  const { progress, getPhaseProgress, getLessonProgress } = useProgressStore();

  // Handle hydration
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

  // Calculate overall progress
  const totalLessons = CURRICULUM.reduce((acc, phase) => acc + phase.totalLessons, 0);
  const completedLessons = Object.values(progress).filter(
    (p) => p.completed
  ).length;
  const overallProgress = totalLessons > 0 
    ? Math.round((completedLessons / totalLessons) * 100) 
    : 0;

  // Get current phase (first incomplete)
  const currentPhase = CURRICULUM.find((phase) => {
    const phaseProgress = getPhaseProgress(phase.id);
    return phaseProgress < 100;
  }) || CURRICULUM[0];

  // Get current lesson (first incomplete in current phase)
  const currentLesson = currentPhase.lessons.find((lesson) => {
    const lessonProgress = getLessonProgress(currentPhase.id, lesson.id);
    return !lessonProgress?.completed;
  }) || currentPhase.lessons[0];

  // Recent achievements (last 4)
  const recentAchievements = achievements
    .filter((a) => a.unlockedAt)
    .sort((a, b) => {
      if (!a.unlockedAt || !b.unlockedAt) return 0;
      return new Date(b.unlockedAt).getTime() - new Date(a.unlockedAt).getTime();
    })
    .slice(0, 4);

  // Stats cards data
  const statsCards = [
    {
      icon: Star,
      label: "Total XP",
      value: xp.toLocaleString(),
      color: "text-gold",
      bgColor: "bg-gold/10",
    },
    {
      icon: TrendingUp,
      label: "Level",
      value: level.toString(),
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: Flame,
      label: "Day Streak",
      value: streak.toString(),
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      icon: BookOpen,
      label: "Lessons Done",
      value: completedLessons.toString(),
      color: "text-teal",
      bgColor: "bg-teal/10",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 overflow-auto p-6 lg:p-8">
          <div className="mx-auto max-w-7xl space-y-8">
            {/* Header */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="font-heading text-3xl font-bold text-foreground">
                  Dashboard
                </h1>
                <p className="text-muted-foreground">
                  Welcome back! Continue your Arabic learning journey.
                </p>
              </div>
              <Button
                className="gap-2 bg-gold text-background hover:bg-gold-dark"
                asChild
              >
                <Link href={`/learn/phase/${currentPhase.id}/lesson/${currentLesson.id}`}>
                  <Play className="h-4 w-4" />
                  Continue Learning
                </Link>
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {statsCards.map((stat) => {
                const Icon = stat.icon;
                return (
                  <Card key={stat.label} className="border-border/50">
                    <CardContent className="flex items-center gap-4 p-6">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-lg ${stat.bgColor}`}
                      >
                        <Icon className={`h-6 w-6 ${stat.color}`} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                        <p className="text-2xl font-bold text-foreground">
                          {stat.value}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Main Content Grid */}
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Left Column - Progress & Current Lesson */}
              <div className="space-y-6 lg:col-span-2">
                {/* XP Progress */}
                <Card className="border-border/50">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Level Progress</CardTitle>
                      <Badge variant="secondary" className="gap-1">
                        <Zap className="h-3 w-3" />
                        Level {level}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <XPBar />
                  </CardContent>
                </Card>

                {/* Current Lesson Card */}
                <Card className="border-border/50 overflow-hidden">
                  <div
                    className="h-2"
                    style={{ backgroundColor: currentPhase.color }}
                  />
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <Badge
                          className="mb-2"
                          style={{
                            backgroundColor: `${currentPhase.color}20`,
                            color: currentPhase.color,
                          }}
                        >
                          Phase {currentPhase.id}: {currentPhase.title}
                        </Badge>
                        <CardTitle>{currentLesson.title}</CardTitle>
                        <p className="mt-1 font-arabic text-lg text-gold">
                          {currentLesson.titleAr}
                        </p>
                      </div>
                      <span className="text-4xl">{currentPhase.icon}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {currentLesson.description}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {currentLesson.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Target className="h-4 w-4" />
                        {currentLesson.exercises?.length || 0} exercises
                      </span>
                      <Badge variant="outline">{currentLesson.difficulty}</Badge>
                    </div>
                    <Button
                      className="mt-6 w-full gap-2 bg-gold text-background hover:bg-gold-dark"
                      asChild
                    >
                      <Link
                        href={`/learn/phase/${currentPhase.id}/lesson/${currentLesson.id}`}
                      >
                        Start Lesson
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Learning Phases Progress */}
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-gold" />
                      Learning Progress
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {CURRICULUM.map((phase) => {
                        const phaseProgress = getPhaseProgress(phase.id);
                        return (
                          <Link
                            key={phase.id}
                            href={`/learn/phase/${phase.id}`}
                            className="block"
                          >
                            <div className="group flex items-center justify-between rounded-lg p-3 transition-colors hover:bg-muted/50">
                              <div className="flex items-center gap-3">
                                <div
                                  className="flex h-10 w-10 items-center justify-center rounded-lg text-xl"
                                  style={{ backgroundColor: `${phase.color}20` }}
                                >
                                  {phase.icon}
                                </div>
                                <div>
                                  <p className="font-medium text-foreground group-hover:text-gold">
                                    Phase {phase.id}: {phase.title}
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    {phase.totalLessons} lessons
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <div className="w-24">
                                  <Progress
                                    value={phaseProgress}
                                    className="h-2"
                                  />
                                </div>
                                <span className="w-12 text-right text-sm text-muted-foreground">
                                  {phaseProgress}%
                                </span>
                                <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Streak & Achievements */}
              <div className="space-y-6">
                {/* Streak Tracker */}
                <Card className="border-border/50">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Flame className="h-5 w-5 text-orange-500" />
                      Daily Streak
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <StreakTracker />
                  </CardContent>
                </Card>

                {/* Quick Practice */}
                <Card className="border-border/50">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Zap className="h-5 w-5 text-gold" />
                      Quick Practice
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-3"
                      asChild
                    >
                      <Link href="/practice/alphabet">
                        <span className="text-xl">أ</span>
                        Arabic Alphabet
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-3"
                      asChild
                    >
                      <Link href="/practice/vocabulary">
                        <BookOpen className="h-5 w-5" />
                        Vocabulary
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-3"
                      asChild
                    >
                      <Link href="/practice/listening">
                        <Target className="h-5 w-5" />
                        Listening
                      </Link>
                    </Button>
                    <Button
                      className="w-full gap-2 bg-gradient-to-r from-gold to-gold-dark text-background"
                      asChild
                    >
                      <Link href="/practice/daily-challenge">
                        <Star className="h-4 w-4" />
                        Daily Challenge
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Recent Achievements */}
                <Card className="border-border/50">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Trophy className="h-5 w-5 text-gold" />
                        Achievements
                      </CardTitle>
                      <Link
                        href="/achievements"
                        className="text-sm text-gold hover:underline"
                      >
                        View All
                      </Link>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {recentAchievements.length > 0 ? (
                      <div className="grid grid-cols-2 gap-3">
                        {recentAchievements.map((achievement) => (
                          <AchievementBadge
                            key={achievement.id}
                            achievement={achievement}
                            size="sm"
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="rounded-lg border border-dashed border-border p-6 text-center">
                        <Trophy className="mx-auto h-8 w-8 text-muted-foreground/50" />
                        <p className="mt-2 text-sm text-muted-foreground">
                          Complete lessons to earn achievements!
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Weekly Activity */}
                <Card className="border-border/50">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Calendar className="h-5 w-5 text-gold" />
                      This Week
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between gap-1">
                      {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => {
                        // Simulated activity (in real app, from user data)
                        const hasActivity = i < 5;
                        return (
                          <div key={i} className="flex flex-col items-center gap-1">
                            <div
                              className={`h-8 w-8 rounded ${
                                hasActivity
                                  ? "bg-gold/80"
                                  : "bg-muted"
                              }`}
                            />
                            <span className="text-xs text-muted-foreground">
                              {day}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                    <p className="mt-4 text-center text-sm text-muted-foreground">
                      5 days active this week
                    </p>
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
