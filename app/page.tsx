"use client";

import Link from "next/link";
import {
  BookOpen,
  GraduationCap,
  Trophy,
  Sparkles,
  ChevronRight,
  Star,
  Flame,
  Target,
  Globe,
  Headphones,
  PenTool,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar, Footer } from "@/components/layout";
import { CURRICULUM } from "@/data/curriculum";

/**
 * Home page - Landing page for ArabicMaster Pro
 */
export default function Home() {
  const t = useTranslations();
  
  /**
   * Features list for the landing page
   */
  const features = [
    {
      icon: BookOpen,
      title: t("home.features.progressivePhases.title"),
      description: t("home.features.progressivePhases.description"),
    },
    {
      icon: Sparkles,
      title: t("home.features.aiPowered.title"),
      description: t("home.features.aiPowered.description"),
    },
    {
      icon: Trophy,
      title: t("home.features.gamification.title"),
      description: t("home.features.gamification.description"),
    },
    {
      icon: Headphones,
      title: t("home.features.audio.title"),
      description: t("home.features.audio.description"),
    },
    {
      icon: PenTool,
      title: t("home.features.writing.title"),
      description: t("home.features.writing.description"),
    },
    {
      icon: Globe,
      title: t("home.features.multilingual.title"),
      description: t("home.features.multilingual.description"),
    },
  ];

  /**
   * Statistics for social proof
   */
  const stats = [
    { value: "28", label: t("home.stats.letters") },
    { value: "500+", label: t("home.stats.exercises") },
    { value: "5", label: t("home.stats.phases") },
    { value: "∞", label: t("home.stats.aiExercises") },
  ];
  
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-cream via-cream to-gold/10 py-20 lg:py-32">
          {/* Background pattern */}
          <div className="absolute inset-0 islamic-pattern opacity-30" />
          
          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              {/* Arabic greeting */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-2 text-gold">
                <span className="font-arabic text-lg">مرحباً بك</span>
                <span className="text-sm">{t("home.greeting")}</span>
              </div>
              
              {/* Main heading */}
              <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {t("home.heroTitle")}{" "}
                <span className="text-gold-gradient">{t("home.heroTitleHighlight")}</span>
                <br />
                {t("home.heroSubtitle")}
              </h1>
              
              {/* Subheading */}
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                {t("home.heroDescription")}
              </p>
              
              {/* CTA buttons */}
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="h-14 gap-2 bg-gold px-8 text-lg text-background hover:bg-gold-dark"
                  asChild
                >
                  <Link href="/dashboard">
                    <GraduationCap className="h-5 w-5" />
                    {t("home.startLearningFree")}
                    <ChevronRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 gap-2 px-8 text-lg"
                  asChild
                >
                  <Link href="/learn">
                    <BookOpen className="h-5 w-5" />
                    {t("home.browseCurriculum")}
                  </Link>
                </Button>
              </div>
              
              {/* Stats */}
              <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-heading text-3xl font-bold text-gold">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <Badge variant="secondary" className="mb-4">
                {t("home.features.badge")}
              </Badge>
              <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
                {t("home.features.title")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {t("home.features.description")}
              </p>
            </div>
            
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <Card key={feature.title} className="card-hover border-border/50">
                    <CardContent className="p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10">
                        <Icon className="h-6 w-6 text-gold" />
                      </div>
                      <h3 className="mt-4 font-heading text-xl font-semibold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
        
        {/* Learning Phases Section */}
        <section className="bg-navy py-20 text-cream lg:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <Badge className="mb-4 bg-gold text-navy">
                {t("home.curriculum.badge")}
              </Badge>
              <h2 className="font-heading text-3xl font-bold sm:text-4xl">
                {t("home.curriculum.title")}
              </h2>
              <p className="mt-4 text-lg text-cream/70">
                {t("home.curriculum.description")}
              </p>
            </div>
            
            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              {CURRICULUM.map((phase) => (
                <Link
                  key={phase.id}
                  href={`/learn/phase/${phase.id}`}
                  className="group"
                >
                  <Card className="h-full border-cream/20 bg-navy-light/50 transition-all hover:border-gold/50 hover:bg-navy-light">
                    <CardContent className="p-6">
                      <div
                        className="mb-4 flex h-12 w-12 items-center justify-center rounded-full text-2xl"
                        style={{ backgroundColor: `${phase.color}20` }}
                      >
                        {phase.icon}
                      </div>
                      <h3 className="font-heading text-lg font-semibold text-cream">
                        {t("home.curriculum.phase")} {phase.id}
                      </h3>
                      <p className="mt-1 font-arabic text-gold">{phase.titleAr}</p>
                      <p className="mt-2 text-sm text-cream/60">{phase.title}</p>
                      <div className="mt-4 flex items-center justify-between text-xs">
                        <span className="text-cream/50">
                          {phase.totalLessons} {t("home.curriculum.lessons")}
                        </span>
                        <span className="text-cream/50">{phase.duration}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Gamification Section */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <Badge variant="secondary" className="mb-4">
                  {t("home.gamificationSection.badge")}
                </Badge>
                <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
                  {t("home.gamificationSection.title")}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  {t("home.gamificationSection.description")}
                </p>
                
                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10">
                      <Star className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{t("home.gamificationSection.xpLevels.title")}</h3>
                      <p className="text-sm text-muted-foreground">
                        {t("home.gamificationSection.xpLevels.description")}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500/10">
                      <Flame className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {t("home.gamificationSection.streaks.title")}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t("home.gamificationSection.streaks.description")}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-500/10">
                      <Trophy className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {t("home.gamificationSection.achievements.title")}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t("home.gamificationSection.achievements.description")}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal/10">
                      <Target className="h-5 w-5 text-teal" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {t("home.gamificationSection.challenges.title")}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t("home.gamificationSection.challenges.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Visual representation of gamification */}
              <div className="relative">
                <div className="overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-xl">
                  <div className="space-y-6">
                    {/* Level indicator */}
                    <div className="flex items-center gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-dark text-2xl font-bold text-background">
                        7
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">{t("home.gamificationSection.level")} 7</p>
                        <div className="mt-1 h-2 overflow-hidden rounded-full bg-muted">
                          <div className="h-full w-3/4 bg-gold" />
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">
                          2,450 / 3,200 XP
                        </p>
                      </div>
                    </div>
                    
                    {/* Streak */}
                    <div className="flex items-center justify-between rounded-lg bg-orange-500/10 p-4">
                      <div className="flex items-center gap-3">
                        <Flame className="h-8 w-8 text-orange-500" />
                        <div>
                          <p className="font-semibold">14 {t("home.gamificationSection.dayStreak")}</p>
                          <p className="text-xs text-muted-foreground">
                            {t("home.gamificationSection.xpBonus")}
                          </p>
                        </div>
                      </div>
                      <Badge className="bg-orange-500">+50%</Badge>
                    </div>
                    
                    {/* Recent achievements */}
                    <div>
                      <p className="mb-3 text-sm font-medium text-muted-foreground">
                        {t("home.gamificationSection.recentAchievements")}
                      </p>
                      <div className="flex gap-3">
                        {["🎯", "📚", "🌟", "🔥"].map((emoji, i) => (
                          <div
                            key={i}
                            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold/30 bg-gold/10 text-xl"
                          >
                            {emoji}
                          </div>
                        ))}
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-dashed border-muted text-muted-foreground">
                          +12
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gold/20 blur-2xl" />
                <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-teal/20 blur-2xl" />
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-gradient-to-br from-gold/10 via-cream to-gold/5 py-20 lg:py-28">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              {t("home.cta.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              {t("home.cta.description")}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="h-14 gap-2 bg-gold px-8 text-lg text-background hover:bg-gold-dark"
                asChild
              >
                <Link href="/dashboard">
                  {t("home.cta.startNow")}
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            {/* Arabic calligraphy decoration */}
            <p className="mt-12 font-arabic text-4xl text-gold/30">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
