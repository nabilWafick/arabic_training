"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  BookOpen,
  Headphones,
  PenTool,
  Mic,
  Sparkles,
  Target,
  Clock,
  ChevronRight,
  Play,
  Lock,
  CheckCircle2,
  Zap,
  Trophy,
  Flame,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Navbar, Sidebar, Footer } from "@/components/layout";
import { useProgressStore } from "@/stores/useProgressStore";
import { useGamificationStore } from "@/stores/useGamificationStore";
import { cn } from "@/lib/utils";

// Phase configurations with colors and icons
const PHASES = [
  {
    id: 1,
    name: "Foundations",
    nameAr: "الأساسيات",
    nameFr: "Les Fondations",
    icon: "أ",
    color: "#c9a85c",
    bgGradient: "from-[#c9a85c]/20 to-[#c9a85c]/5",
    description: "Master the Arabic alphabet, vowel marks, and basic reading",
    descriptionAr: "إتقان الأبجدية العربية والحركات والقراءة الأساسية",
    descriptionFr: "Maîtrisez l'alphabet arabe, les voyelles et la lecture de base",
  },
  {
    id: 2,
    name: "Building Blocks",
    nameAr: "اللبنات الأساسية",
    nameFr: "Les Blocs de Construction",
    icon: "📚",
    color: "#4a9c6d",
    bgGradient: "from-[#4a9c6d]/20 to-[#4a9c6d]/5",
    description: "Learn essential vocabulary: family, food, colors, animals",
    descriptionAr: "تعلم المفردات الأساسية: العائلة، الطعام، الألوان، الحيوانات",
    descriptionFr: "Apprenez le vocabulaire essentiel : famille, nourriture, couleurs, animaux",
  },
  {
    id: 3,
    name: "Grammar Foundations",
    nameAr: "أساسيات القواعد",
    nameFr: "Les Bases de la Grammaire",
    icon: "📝",
    color: "#5a7fb8",
    bgGradient: "from-[#5a7fb8]/20 to-[#5a7fb8]/5",
    description: "Understand verbs, adjectives, and sentence structure",
    descriptionAr: "فهم الأفعال والصفات وبنية الجملة",
    descriptionFr: "Comprendre les verbes, adjectifs et la structure des phrases",
  },
  {
    id: 4,
    name: "Intermediate Skills",
    nameAr: "المهارات المتوسطة",
    nameFr: "Compétences Intermédiaires",
    icon: "📖",
    color: "#9b59b6",
    bgGradient: "from-[#9b59b6]/20 to-[#9b59b6]/5",
    description: "Practice conversations, paragraphs, and storytelling",
    descriptionAr: "تدرب على المحادثات والفقرات والسرد",
    descriptionFr: "Pratiquez les conversations, paragraphes et la narration",
  },
  {
    id: 5,
    name: "Advanced Fluency",
    nameAr: "الطلاقة المتقدمة",
    nameFr: "Maîtrise Avancée",
    icon: "🏆",
    color: "#e74c3c",
    bgGradient: "from-[#e74c3c]/20 to-[#e74c3c]/5",
    description: "Essays, native content, professional Arabic",
    descriptionAr: "المقالات، المحتوى الأصلي، العربية المهنية",
    descriptionFr: "Essais, contenu natif, arabe professionnel",
  },
];

// Practice types with icons and routes
const PRACTICE_TYPES = [
  {
    id: "writing",
    icon: PenTool,
    name: "Writing",
    nameAr: "الكتابة",
    nameFr: "Écriture",
    description: "Practice Arabic handwriting and composition",
    descriptionAr: "تدرب على الكتابة العربية والتأليف",
    descriptionFr: "Pratiquez l'écriture arabe et la composition",
    color: "#c9a85c",
  },
  {
    id: "listening",
    icon: Headphones,
    name: "Listening",
    nameAr: "الاستماع",
    nameFr: "Écoute",
    description: "Train your ear with audio exercises",
    descriptionAr: "درب أذنك مع تمارين الصوت",
    descriptionFr: "Entraînez votre oreille avec des exercices audio",
    color: "#5a7fb8",
  },
  {
    id: "speaking",
    icon: Mic,
    name: "Speaking",
    nameAr: "المحادثة",
    nameFr: "Parler",
    description: "Improve pronunciation and fluency",
    descriptionAr: "حسن النطق والطلاقة",
    descriptionFr: "Améliorez la prononciation et la fluidité",
    color: "#4a9c6d",
  },
  {
    id: "vocabulary",
    icon: BookOpen,
    name: "Vocabulary",
    nameAr: "المفردات",
    nameFr: "Vocabulaire",
    description: "Build your Arabic word bank",
    descriptionAr: "بناء مخزون الكلمات العربية",
    descriptionFr: "Construisez votre vocabulaire arabe",
    color: "#9b59b6",
  },
];

/**
 * Practice Hub Page - Phase-based practice system
 * Users can select their current phase or revisit previous phases
 */
export default function PracticePage() {
  const t = useTranslations();
  const [mounted, setMounted] = useState(false);
  const { currentPhaseId, phases } = useProgressStore();
  const { stats } = useGamificationStore();
  const [selectedPhase, setSelectedPhase] = useState(currentPhaseId || 1);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine which phases are unlocked
  const isPhaseUnlocked = (phaseId: number) => {
    if (phaseId === 1) return true;
    const prevPhase = phases[phaseId - 1];
    return prevPhase?.completed || prevPhase?.overallProgress >= 70;
  };

  // Get phase progress
  const getPhaseProgress = (phaseId: number) => {
    return phases[phaseId]?.overallProgress || 0;
  };

  // Mock practice stats (replace with real data from store)
  const practiceStats = {
    totalTime: "2h 45m",
    exercisesCompleted: 156,
    accuracy: 85,
    currentStreak: 7,
    bestStreak: 14,
  };

  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gold border-t-transparent" />
      </div>
    );
  }

  const activePhase = PHASES.find((p) => p.id === selectedPhase) || PHASES[0];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 overflow-auto p-6 lg:p-8">
          <div className="mx-auto max-w-7xl space-y-8">
            {/* Header with Stats */}
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <h1 className="font-heading text-3xl font-bold text-foreground">
                  {t("practice.title")}
                </h1>
                <p className="mt-1 text-muted-foreground">
                  {t("practice.description")}
                </p>
              </div>

              {/* Quick Stats Bar */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 rounded-lg bg-gold/10 px-4 py-2">
                  <Flame className="h-5 w-5 text-orange-500" />
                  <div>
                    <p className="text-sm font-bold text-foreground">{practiceStats.currentStreak}</p>
                    <p className="text-xs text-muted-foreground">{t("practice.stats.streak")}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-gold/10 px-4 py-2">
                  <Target className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="text-sm font-bold text-foreground">{practiceStats.accuracy}%</p>
                    <p className="text-xs text-muted-foreground">{t("practice.stats.accuracy")}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-gold/10 px-4 py-2">
                  <Zap className="h-5 w-5 text-yellow-500" />
                  <div>
                    <p className="text-sm font-bold text-foreground">{stats?.xp || 0}</p>
                    <p className="text-xs text-muted-foreground">XP</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase Selector */}
            <Card className="border-border/50 overflow-hidden">
              <CardHeader className="border-b border-border/50 bg-muted/30">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-gold" />
                    {t("practice.selectPhase")}
                  </CardTitle>
                  <Badge variant="outline" className="bg-gold/10 text-gold border-gold/30">
                    {t("practice.currentPhase")}: {t(`phases.phase${currentPhaseId}.name`)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
                  {PHASES.map((phase, index) => {
                    const unlocked = isPhaseUnlocked(phase.id);
                    const progress = getPhaseProgress(phase.id);
                    const isSelected = selectedPhase === phase.id;
                    const isCurrent = currentPhaseId === phase.id;

                    return (
                      <button
                        key={phase.id}
                        onClick={() => unlocked && setSelectedPhase(phase.id)}
                        disabled={!unlocked}
                        className={cn(
                          "relative flex flex-col items-center p-6 text-center transition-all border-r border-b border-border/50 last:border-r-0",
                          unlocked
                            ? "cursor-pointer hover:bg-muted/50"
                            : "cursor-not-allowed opacity-50",
                          isSelected && `bg-gradient-to-b ${phase.bgGradient}`,
                          isCurrent && "ring-2 ring-inset ring-gold/50"
                        )}
                      >
                        {/* Phase icon */}
                        <div
                          className={cn(
                            "flex h-16 w-16 items-center justify-center rounded-2xl text-3xl mb-3 transition-transform",
                            isSelected ? "scale-110" : "scale-100",
                            unlocked ? "bg-white shadow-lg" : "bg-muted"
                          )}
                          style={{
                            boxShadow: unlocked
                              ? `0 4px 14px ${phase.color}40`
                              : "none",
                          }}
                        >
                          {unlocked ? (
                            phase.icon
                          ) : (
                            <Lock className="h-6 w-6 text-muted-foreground" />
                          )}
                        </div>

                        {/* Phase info */}
                        <h3
                          className={cn(
                            "font-semibold text-sm",
                            isSelected ? "text-foreground" : "text-muted-foreground"
                          )}
                        >
                          {phase.name}
                        </h3>
                        <p className="font-arabic text-xs mt-0.5" style={{ color: phase.color }}>
                          {phase.nameAr}
                        </p>

                        {/* Progress bar */}
                        {unlocked && (
                          <div className="w-full mt-3">
                            <Progress
                              value={progress}
                              className="h-1.5"
                              style={{
                                // @ts-ignore - CSS variable for progress bar color
                                "--progress-indicator": phase.color,
                              }}
                            />
                            <p className="text-xs text-muted-foreground mt-1">
                              {progress}%
                            </p>
                          </div>
                        )}

                        {/* Current phase indicator */}
                        {isCurrent && (
                          <Badge
                            className="absolute top-2 right-2 text-[10px] px-1.5 py-0"
                            style={{
                              backgroundColor: phase.color,
                              color: "white",
                            }}
                          >
                            {t("practice.current")}
                          </Badge>
                        )}

                        {/* Completed indicator */}
                        {progress === 100 && (
                          <CheckCircle2
                            className="absolute top-2 left-2 h-5 w-5"
                            style={{ color: phase.color }}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Selected Phase Header */}
            <div
              className="rounded-2xl p-6 lg:p-8"
              style={{
                background: `linear-gradient(135deg, ${activePhase.color}15 0%, ${activePhase.color}05 100%)`,
                borderLeft: `4px solid ${activePhase.color}`,
              }}
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-4xl shadow-lg"
                    style={{ boxShadow: `0 4px 14px ${activePhase.color}40` }}
                  >
                    {activePhase.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">
                      {t(`phases.phase${activePhase.id}.name`)}
                    </h2>
                    <p className="font-arabic text-lg" style={{ color: activePhase.color }}>
                      {activePhase.nameAr}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {activePhase.description}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" className="gap-2" asChild>
                    <Link href={`/learn/phase/${activePhase.id}`}>
                      <BookOpen className="h-4 w-4" />
                      {t("practice.viewLessons")}
                    </Link>
                  </Button>
                  <Button
                    className="gap-2"
                    style={{
                      backgroundColor: activePhase.color,
                      color: "white",
                    }}
                    asChild
                  >
                    <Link href={`/practice/${activePhase.id}`}>
                      <Sparkles className="h-4 w-4" />
                      {t("practice.startSession")}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Practice Types Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {PRACTICE_TYPES.map((type) => {
                const Icon = type.icon;
                // Mock progress per type (replace with real data)
                const typeProgress = Math.floor(Math.random() * 100);

                return (
                  <Link
                    key={type.id}
                    href={`/practice/${selectedPhase}/${type.id}`}
                    className="group"
                  >
                    <Card
                      className={cn(
                        "relative h-full overflow-hidden border-border/50 transition-all duration-300",
                        "hover:border-transparent hover:shadow-xl hover:-translate-y-1"
                      )}
                      style={{
                        // @ts-ignore - CSS variable for hover effect
                        "--hover-color": type.color,
                      }}
                    >
                      {/* Gradient overlay on hover */}
                      <div
                        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        style={{
                          background: `linear-gradient(135deg, ${type.color}10 0%, ${type.color}05 100%)`,
                        }}
                      />

                      <CardContent className="relative p-6">
                        {/* Icon */}
                        <div
                          className="flex h-14 w-14 items-center justify-center rounded-xl mb-4 transition-transform duration-300 group-hover:scale-110"
                          style={{
                            backgroundColor: `${type.color}15`,
                          }}
                        >
                          <Icon
                            className="h-7 w-7 transition-colors"
                            style={{ color: type.color }}
                          />
                        </div>

                        {/* Content */}
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-foreground">
                          {type.name}
                        </h3>
                        <p
                          className="font-arabic text-sm mt-0.5"
                          style={{ color: type.color }}
                        >
                          {type.nameAr}
                        </p>
                        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                          {type.description}
                        </p>

                        {/* Progress */}
                        <div className="mt-4">
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span className="text-muted-foreground">
                              {t("practice.progress")}
                            </span>
                            <span style={{ color: type.color }} className="font-medium">
                              {typeProgress}%
                            </span>
                          </div>
                          <Progress
                            value={typeProgress}
                            className="h-1.5"
                          />
                        </div>

                        {/* Arrow indicator */}
                        <div
                          className="absolute bottom-6 right-6 flex h-8 w-8 items-center justify-center rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100"
                          style={{ backgroundColor: type.color }}
                        >
                          <ChevronRight className="h-4 w-4 text-white" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>

            {/* Daily Challenge Card */}
            <Card className="border-gold/30 bg-gradient-to-r from-gold/10 via-gold/5 to-transparent overflow-hidden">
              <CardContent className="p-6 lg:p-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/20">
                      <Star className="h-8 w-8 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {t("practice.dailyChallenge")}
                      </h3>
                      <p className="text-muted-foreground">
                        {t("practice.dailyChallengeDesc")}
                      </p>
                      <div className="flex items-center gap-4 mt-2">
                        <Badge className="bg-gold/20 text-gold border-0">
                          <Zap className="h-3 w-3 mr-1" />
                          +100 XP
                        </Badge>
                        <Badge variant="outline" className="border-gold/30 text-gold">
                          <Clock className="h-3 w-3 mr-1" />
                          5-10 min
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <Button
                    size="lg"
                    className="gap-2 bg-gradient-to-r from-gold to-gold-dark text-background hover:from-gold-dark hover:to-gold"
                    asChild
                  >
                    <Link href={`/practice/${selectedPhase}/daily`}>
                      <Play className="h-5 w-5" />
                      {t("practice.startChallenge")}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Extended Stats */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="border-border/50">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                    <Clock className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">
                      {practiceStats.totalTime}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t("practice.stats.totalTime")}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
                    <Target className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">
                      {practiceStats.exercisesCompleted}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t("practice.stats.completed")}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10">
                    <Flame className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">
                      {practiceStats.bestStreak}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t("practice.stats.bestStreak")}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10">
                    <Trophy className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">
                      {phases[selectedPhase]?.lessonsProgress
                        ? Object.keys(phases[selectedPhase].lessonsProgress).length
                        : 0}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t("practice.stats.lessonsCompleted")}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
