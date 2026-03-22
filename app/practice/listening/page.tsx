"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Headphones,
  Volume2,
  Play,
  Pause,
  CheckCircle2,
  XCircle,
  ChevronLeft,
  ChevronRight,
  RefreshCw,
  VolumeX,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Navbar, Sidebar, Footer } from "@/components/layout";
import { useGamificationStore } from "@/stores/useGamificationStore";
import { useAudioStore } from "@/stores/useAudioStore";
import { useTranslations } from "next-intl";
import { ARABIC_ALPHABET } from "@/data/curriculum";

/**
 * Listening Practice Page - Audio recognition exercises
 * Users listen to Arabic sounds and identify the correct letter/word
 */
export default function ListeningPracticePage() {
  const [mounted, setMounted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const { addXP } = useGamificationStore();
  const { speak, isPlaying, loadVoices } = useAudioStore();
  const t = useTranslations();

  // Generate questions from alphabet
  const questions = ARABIC_ALPHABET.slice(0, 10).map((letter, index) => {
    // Get 3 random wrong answers
    const wrongAnswers = ARABIC_ALPHABET.filter((l) => l.letter !== letter.letter)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    const options = [letter, ...wrongAnswers].sort(() => Math.random() - 0.5);

    return {
      id: index,
      correctLetter: letter,
      options,
    };
  });

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    setMounted(true);
    // Initialize speech synthesis voices
    loadVoices();
  }, [loadVoices]);

  const playSound = () => {
    // Use Web Speech API to pronounce the Arabic letter
    speak(currentQuestion.correctLetter.letter, 'ar-SA');
  };

  const handleAnswer = (letter: string) => {
    if (showResult) return;

    setSelectedAnswer(letter);
    setShowResult(true);

    if (letter === currentQuestion.correctLetter.letter) {
      setScore((prev) => prev + 1);
      addXP(10, "Listening exercise completed");
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const resetPractice = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
  };

  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gold border-t-transparent" />
      </div>
    );
  }

  const isComplete = currentQuestionIndex === questions.length - 1 && showResult;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 overflow-auto p-6 lg:p-8">
          <div className="mx-auto max-w-3xl space-y-8">
            {/* Header */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Link href="/practice" className="text-muted-foreground hover:text-gold">
                    <ChevronLeft className="h-5 w-5" />
                  </Link>
                  <h1 className="font-heading text-3xl font-bold text-foreground">
                    {t("arabic.listening")} {t("navigation.practice")}
                  </h1>
                </div>
                <p className="mt-1 text-muted-foreground">
                  {t("learning.listenAndIdentify")}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="text-lg">
                  {t("learning.score")}: {score}/{questions.length}
                </Badge>
              </div>
            </div>

            {/* Progress */}
            <Progress
              value={((currentQuestionIndex + (showResult ? 1 : 0)) / questions.length) * 100}
              className="h-2"
            />

            {/* Main Content */}
            {!isComplete ? (
              <Card className="border-border/50">
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center gap-2">
                    <Headphones className="h-6 w-6 text-gold" />
                    {t("learning.question")} {currentQuestionIndex + 1} / {questions.length}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Play Sound Button */}
                  <div className="flex flex-col items-center gap-4">
                    <p className="text-lg text-muted-foreground">
                      {t("learning.listenAndSelectLetter")}
                    </p>
                    <Button
                      size="lg"
                      className="h-24 w-24 rounded-full bg-gold text-background hover:bg-gold-dark"
                      onClick={playSound}
                    >
                      {isPlaying ? (
                        <Volume2 className="h-12 w-12 animate-pulse" />
                      ) : (
                        <Play className="h-12 w-12" />
                      )}
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      {t("learning.clickToPlaySound")}
                    </p>
                  </div>

                  {/* Answer Options */}
                  <div className="grid grid-cols-2 gap-4">
                    {currentQuestion.options.map((option) => {
                      const isCorrect = option.letter === currentQuestion.correctLetter.letter;
                      const isSelected = selectedAnswer === option.letter;

                      return (
                        <button
                          key={option.letter}
                          onClick={() => handleAnswer(option.letter)}
                          disabled={showResult}
                          className={`flex flex-col items-center gap-2 rounded-xl border-2 p-6 transition-all ${
                            showResult
                              ? isCorrect
                                ? "border-green-500 bg-green-500/10"
                                : isSelected
                                ? "border-red-500 bg-red-500/10"
                                : "border-border/50 opacity-50"
                              : "border-border/50 hover:border-gold/50 hover:bg-gold/5"
                          }`}
                        >
                          <span className="font-arabic text-5xl">
                            {option.letter}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {option.name}
                          </span>
                          {showResult && isCorrect && (
                            <CheckCircle2 className="h-6 w-6 text-green-500" />
                          )}
                          {showResult && isSelected && !isCorrect && (
                            <XCircle className="h-6 w-6 text-red-500" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Result Feedback */}
                  {showResult && (
                    <div
                      className={`rounded-lg p-4 text-center ${
                        selectedAnswer === currentQuestion.correctLetter.letter
                          ? "bg-green-500/10 text-green-600 dark:text-green-400"
                          : "bg-red-500/10 text-red-600 dark:text-red-400"
                      }`}
                    >
                      {selectedAnswer === currentQuestion.correctLetter.letter ? (
                        <p className="font-semibold">{t("gamification.brilliantWork")}</p>
                      ) : (
                        <p>
                          {t("learning.correctAnswerIs")}{" "}
                          <span className="font-arabic text-lg">
                            {currentQuestion.correctLetter.letter}
                          </span>{" "}
                          ({currentQuestion.correctLetter.name})
                        </p>
                      )}
                    </div>
                  )}

                  {/* Navigation */}
                  {showResult && (
                    <div className="flex justify-center">
                      <Button
                        className="bg-gold text-background hover:bg-gold-dark"
                        onClick={nextQuestion}
                      >
                        {currentQuestionIndex < questions.length - 1 ? (
                          <>
                            {t("common.next")}
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </>
                        ) : (
                          <>
                            {t("learning.viewResults")}
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ) : (
              /* Results Card */
              <Card className="border-border/50">
                <CardContent className="py-12 text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gold/10">
                    <Headphones className="h-12 w-12 text-gold" />
                  </div>
                  <h2 className="mt-6 text-2xl font-bold text-foreground">
                    {t("learning.practiceComplete")}
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    {t("learning.youScored")} {score} {t("learning.outOf")} {questions.length}
                  </p>

                  {/* Score Badge */}
                  <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold/10 px-6 py-3">
                    <span className="text-3xl font-bold text-gold">
                      {Math.round((score / questions.length) * 100)}%
                    </span>
                    <span className="text-muted-foreground">{t("learning.accuracy")}</span>
                  </div>

                  {/* XP Earned */}
                  <p className="mt-4 text-sm text-gold">
                    +{score * 10} XP {t("gamification.earned")}
                  </p>

                  {/* Actions */}
                  <div className="mt-8 flex justify-center gap-4">
                    <Button variant="outline" onClick={resetPractice}>
                      <RefreshCw className="mr-2 h-4 w-4" />
                      {t("learning.tryAgain")}
                    </Button>
                    <Button className="bg-gold text-background hover:bg-gold-dark" asChild>
                      <Link href="/practice">
                        {t("common.back")} {t("navigation.practice")}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
