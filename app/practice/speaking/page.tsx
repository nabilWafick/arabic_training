"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  Trophy,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Navbar, Sidebar, Footer } from "@/components/layout";
import { useGamificationStore } from "@/stores/useGamificationStore";
import { useTranslations } from "next-intl";
import { ARABIC_ALPHABET } from "@/data/curriculum";
import EnhancedSpeechRecorder, { RecordingResult } from "@/components/practice/EnhancedSpeechRecorder";

/**
 * Speaking Practice Page - Enhanced with real speech recording
 */
export default function SpeakingPracticePage() {
  const [mounted, setMounted] = useState(false);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { addXP } = useGamificationStore();
  const t = useTranslations();

  const currentLetter = ARABIC_ALPHABET[currentLetterIndex];

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleRecordingComplete = async (result: RecordingResult) => {
    setIsSubmitting(true);
    
    try {
      // Award XP based on score
      if (result.similarityScore >= 80) {
        addXP(15, "Great pronunciation!");
      } else if (result.similarityScore >= 70) {
        addXP(10, "Good pronunciation practice!");
      } else {
        addXP(5, "Speaking practice");
      }

      // Move to next letter after a brief delay
      setTimeout(() => {
        if (currentLetterIndex < ARABIC_ALPHABET.length - 1) {
          setCurrentLetterIndex((prev) => prev + 1);
          setCompletedCount((prev) => prev + 1);
        } else {
          // Completed all letters
          setCompletedCount((prev) => prev + 1);
        }
        setIsSubmitting(false);
      }, 1500);
    } catch (error) {
      console.error('Error processing recording:', error);
      setIsSubmitting(false);
    }
  };

  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gold border-t-transparent" />
      </div>
    );
  }

  const progress = ((completedCount) / ARABIC_ALPHABET.length) * 100;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 overflow-auto p-6 lg:p-8">
          <div className="mx-auto max-w-4xl space-y-8">
            {/* Header */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Link href="/practice" className="text-muted-foreground hover:text-gold">
                    <ChevronLeft className="h-5 w-5" />
                  </Link>
                  <h1 className="font-heading text-3xl font-bold text-foreground">
                    {t("arabic.speaking")} {t("navigation.practice")}
                  </h1>
                </div>
                <p className="mt-1 text-muted-foreground">
                  Master Arabic pronunciation with real-time feedback
                </p>
              </div>
              <Badge variant="secondary" className="text-lg">
                {completedCount + 1} / {ARABIC_ALPHABET.length}
              </Badge>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <Progress
                value={progress}
                className="h-3"
              />
              <p className="text-xs text-muted-foreground text-right">
                {Math.round(progress)}% Complete
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              <Card className="border-border/50">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-gold" />
                    <div>
                      <p className="text-xs text-muted-foreground">Letters Completed</p>
                      <p className="text-2xl font-bold">{completedCount}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-amber-500" />
                    <div>
                      <p className="text-xs text-muted-foreground">XP Earned</p>
                      <p className="text-2xl font-bold">{completedCount * 10}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {currentLetterIndex < ARABIC_ALPHABET.length && (
                <Card className="border-border/50 md:col-span-1">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground">Current Letter</p>
                      <p className="font-arabic text-4xl font-bold text-gold">
                        {currentLetter.letter}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Recording Component */}
            {currentLetterIndex < ARABIC_ALPHABET.length ? (
              <EnhancedSpeechRecorder
                targetText={currentLetter.transliteration}
                targetTextAr={currentLetter.letter}
                onRecordingComplete={handleRecordingComplete}
                isSubmitting={isSubmitting}
                language="ar"
                difficulty="easy"
              />
            ) : (
              /* Completion State */
              <Card className="border-border/50 overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 p-12 text-center">
                  <Trophy className="h-16 w-16 mx-auto mb-4 text-amber-500" />
                  <h2 className="text-3xl font-bold mb-2">Congratulations!</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    You've completed all {ARABIC_ALPHABET.length} letters
                  </p>
                  <p className="text-2xl font-bold text-gold mb-8">
                    +{completedCount * 10} XP Earned
                  </p>
                  <Link href="/practice">
                    <Button className="bg-gradient-to-r from-gold to-gold/80">
                      Back to Practice
                    </Button>
                  </Link>
                </div>
              </Card>
            )}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
