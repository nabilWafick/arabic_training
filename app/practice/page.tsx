"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  BookOpen,
  Headphones,
  PenTool,
  Sparkles,
  Target,
  Clock,
  ChevronRight,
  Play,
  RefreshCw,
  Zap,
  Volume2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navbar, Sidebar, Footer } from "@/components/layout";
import { LetterDisplay } from "@/components/arabic";
import { useGamificationStore } from "@/stores/useGamificationStore";
import { ARABIC_ALPHABET, ARABIC_HARAKAT, ARABIC_NUMBERS } from "@/data/curriculum";

// Practice modes
const PRACTICE_MODES = [
  {
    id: "alphabet",
    icon: "أ",
    title: "Alphabet Practice",
    titleAr: "تدريب الأبجدية",
    description: "Review and practice all 28 Arabic letters",
    exercises: 28,
    difficulty: "Beginner",
  },
  {
    id: "vowels",
    icon: "◌َ",
    title: "Vowel Marks",
    titleAr: "الحركات",
    description: "Practice diacritical marks (harakat)",
    exercises: 8,
    difficulty: "Beginner",
  },
  {
    id: "numbers",
    icon: "٣",
    title: "Numbers",
    titleAr: "الأرقام",
    description: "Learn Arabic numerals 0-100",
    exercises: 11,
    difficulty: "Beginner",
  },
  {
    id: "vocabulary",
    icon: "📚",
    title: "Vocabulary",
    titleAr: "المفردات",
    description: "Build your Arabic word bank",
    exercises: 100,
    difficulty: "All Levels",
  },
  {
    id: "listening",
    icon: "🎧",
    title: "Listening",
    titleAr: "الاستماع",
    description: "Train your Arabic ear",
    exercises: 50,
    difficulty: "All Levels",
  },
  {
    id: "writing",
    icon: "✏️",
    title: "Writing",
    titleAr: "الكتابة",
    description: "Practice Arabic handwriting",
    exercises: "∞",
    difficulty: "All Levels",
  },
];

/**
 * Practice page - Free practice mode for drilling skills
 */
export default function PracticePage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("alphabet");
  const [selectedLetter, setSelectedLetter] = useState<
    (typeof ARABIC_ALPHABET)[0] | null
  >(null);

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
                  Practice Mode
                </h1>
                <p className="text-muted-foreground">
                  Drill your skills and reinforce what you&apos;ve learned
                </p>
              </div>
              <Button
                className="gap-2 bg-gradient-to-r from-gold to-gold-dark text-background"
                asChild
              >
                <Link href="/practice/daily-challenge">
                  <Sparkles className="h-4 w-4" />
                  Daily Challenge
                </Link>
              </Button>
            </div>

            {/* Practice Modes Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {PRACTICE_MODES.map((mode) => (
                <Card
                  key={mode.id}
                  className={`cursor-pointer border-border/50 transition-all hover:border-gold/50 hover:bg-gold/5 ${
                    activeTab === mode.id ? "border-gold bg-gold/10" : ""
                  }`}
                  onClick={() => setActiveTab(mode.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold/20 text-2xl">
                        {mode.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">
                          {mode.title}
                        </h3>
                        <p className="font-arabic text-sm text-gold">
                          {mode.titleAr}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {mode.description}
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <Badge variant="secondary" className="text-xs">
                            {mode.exercises} exercises
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {mode.difficulty}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Practice Content */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-gold" />
                    {PRACTICE_MODES.find((m) => m.id === activeTab)?.title}
                  </span>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <RefreshCw className="h-4 w-4" />
                    Shuffle
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {activeTab === "alphabet" && (
                  <div className="space-y-6">
                    {/* Letter grid */}
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-7">
                      {ARABIC_ALPHABET.map((letter) => (
                        <div
                          key={letter.letter}
                          className={cn(
                            "cursor-pointer rounded-lg border p-4 text-center transition-all hover:border-gold",
                            selectedLetter?.letter === letter.letter && "border-gold bg-gold/10"
                          )}
                          onClick={() => setSelectedLetter(letter)}
                        >
                          <span className="font-arabic text-3xl">{letter.letter}</span>
                          <p className="mt-1 text-xs text-muted-foreground">{letter.name}</p>
                        </div>
                      ))}
                    </div>

                    {/* Selected letter details */}
                    {selectedLetter && (
                      <div className="rounded-lg border border-gold/30 bg-gold/5 p-6">
                        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
                          <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-gold/20 font-arabic text-6xl text-gold">
                            {selectedLetter.letter}
                          </div>
                          <div className="flex-1 text-center sm:text-left">
                            <h3 className="text-xl font-semibold text-foreground">
                              {selectedLetter.name}
                            </h3>
                            <p className="text-muted-foreground">
                              Transliteration: {selectedLetter.transliteration}
                            </p>

                            <div className="mt-4">
                              <p className="mb-2 text-sm font-medium text-muted-foreground">
                                Letter Forms:
                              </p>
                              <div className="flex flex-wrap justify-center gap-4 sm:justify-start">
                                {[
                                  { label: "Isolated", value: selectedLetter.isolated },
                                  { label: "Initial", value: selectedLetter.initial },
                                  { label: "Medial", value: selectedLetter.medial },
                                  { label: "Final", value: selectedLetter.final },
                                ].map((form) => (
                                  <div
                                    key={form.label}
                                    className="rounded-lg border border-border/50 bg-background p-3 text-center"
                                  >
                                    <span className="font-arabic text-3xl text-foreground">
                                      {form.value}
                                    </span>
                                    <p className="mt-1 text-xs text-muted-foreground">
                                      {form.label}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <Button className="mt-4 gap-2 bg-gold text-background hover:bg-gold-dark">
                              <Volume2 className="h-4 w-4" />
                              Play Pronunciation
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === "vowels" && (
                  <div className="space-y-6">
                    <p className="text-muted-foreground">
                      Arabic uses diacritical marks (harakat) above and below letters
                      to indicate short vowels.
                    </p>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      {ARABIC_HARAKAT.map((mark) => (
                        <div
                          key={mark.name}
                          className="rounded-lg border border-border/50 p-4 text-center transition-colors hover:border-gold/50"
                        >
                          <div className="font-arabic text-4xl text-gold">
                            ب{mark.mark}
                          </div>
                          <p className="mt-2 font-semibold text-foreground">
                            {mark.name}
                          </p>
                          <p className="font-arabic text-sm text-gold/80">
                            {mark.nameAr}
                          </p>
                          <p className="mt-1 text-xs text-muted-foreground">
                            {mark.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "numbers" && (
                  <div className="space-y-6">
                    <p className="text-muted-foreground">
                      Practice Eastern Arabic numerals (٠-٩) and their names.
                    </p>
                    <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
                      {ARABIC_NUMBERS.map((num) => (
                        <div
                          key={num.value}
                          className="rounded-lg border border-border/50 p-4 text-center transition-colors hover:border-gold/50"
                        >
                          <span className="font-arabic text-4xl text-gold">
                            {num.arabic}
                          </span>
                          <p className="mt-2 text-xl text-foreground">{num.value}</p>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {num.name}
                          </p>
                          <p className="font-arabic text-sm text-gold/80">
                            {num.nameAr}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {(activeTab === "vocabulary" ||
                  activeTab === "listening" ||
                  activeTab === "writing") && (
                  <div className="py-12 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
                      {activeTab === "vocabulary" ? (
                        <BookOpen className="h-8 w-8 text-gold" />
                      ) : activeTab === "listening" ? (
                        <Headphones className="h-8 w-8 text-gold" />
                      ) : (
                        <PenTool className="h-8 w-8 text-gold" />
                      )}
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-foreground">
                      {PRACTICE_MODES.find((m) => m.id === activeTab)?.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      This practice mode will be available soon.
                    </p>
                    <Button className="mt-6 gap-2 bg-gold text-background hover:bg-gold-dark">
                      <Play className="h-4 w-4" />
                      Start Practice
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid gap-4 sm:grid-cols-3">
              <Card className="border-border/50">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                    <Clock className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">2h 45m</p>
                    <p className="text-sm text-muted-foreground">
                      Total Practice Time
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
                    <p className="text-2xl font-bold text-foreground">156</p>
                    <p className="text-sm text-muted-foreground">
                      Exercises Completed
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
                    <p className="text-2xl font-bold text-foreground">85%</p>
                    <p className="text-sm text-muted-foreground">
                      Average Accuracy
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
