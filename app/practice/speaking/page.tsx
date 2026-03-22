"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Mic,
  MicOff,
  Volume2,
  Play,
  ChevronLeft,
  ChevronRight,
  RefreshCw,
  CheckCircle2,
  AlertCircle,
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
 * Speaking Practice Page - Pronunciation practice with audio feedback
 * Users record their pronunciation and compare with reference audio
 */
export default function SpeakingPracticePage() {
  const [mounted, setMounted] = useState(false);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [hasRecording, setHasRecording] = useState(false);
  const [isPlayingRecording, setIsPlayingRecording] = useState(false);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const { addXP } = useGamificationStore();
  const { speak, isPlaying: isPlayingReference, loadVoices } = useAudioStore();
  const t = useTranslations();

  const currentLetter = ARABIC_ALPHABET[currentLetterIndex];

  useEffect(() => {
    setMounted(true);
    // Initialize speech synthesis voices
    loadVoices();
  }, [loadVoices]);

  const playReference = () => {
    // Use Web Speech API to pronounce the Arabic letter
    speak(currentLetter.letter, 'ar-SA');
  };

  const startRecording = () => {
    setIsRecording(true);
    setHasRecording(false);
    setShowFeedback(false);
    // Simulate recording (would use MediaRecorder API in production)
  };

  const stopRecording = () => {
    setIsRecording(false);
    setHasRecording(true);
    // Simulate analysis delay
    setTimeout(() => {
      setShowFeedback(true);
      // Random score between 70-100 for demo
      const randomScore = Math.floor(Math.random() * 31) + 70;
      setScore(randomScore);
      if (randomScore >= 80) {
        addXP(15, "Great pronunciation!");
      } else {
        addXP(5, "Pronunciation practice");
      }
    }, 1500);
  };

  const playRecording = () => {
    setIsPlayingRecording(true);
    setTimeout(() => setIsPlayingRecording(false), 1000);
  };

  const nextLetter = () => {
    if (currentLetterIndex < ARABIC_ALPHABET.length - 1) {
      setCurrentLetterIndex((prev) => prev + 1);
      setHasRecording(false);
      setShowFeedback(false);
    }
  };

  const prevLetter = () => {
    if (currentLetterIndex > 0) {
      setCurrentLetterIndex((prev) => prev - 1);
      setHasRecording(false);
      setShowFeedback(false);
    }
  };

  const resetRecording = () => {
    setHasRecording(false);
    setShowFeedback(false);
  };

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
          <div className="mx-auto max-w-3xl space-y-8">
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
                  {t("learning.practiceYourPronunciation")}
                </p>
              </div>
              <Badge variant="secondary" className="text-lg">
                {currentLetterIndex + 1} / {ARABIC_ALPHABET.length}
              </Badge>
            </div>

            {/* Progress */}
            <Progress
              value={(currentLetterIndex / ARABIC_ALPHABET.length) * 100}
              className="h-2"
            />

            {/* Main Content */}
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Letter Display */}
              <Card className="border-border/50">
                <CardHeader className="text-center">
                  <CardTitle>{t("learning.pronounceThisLetter")}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-6">
                  <div className="flex h-48 w-48 items-center justify-center rounded-2xl bg-gold/10">
                    <span className="font-arabic text-9xl text-gold">
                      {currentLetter.letter}
                    </span>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-semibold">{currentLetter.name}</p>
                    <p className="text-muted-foreground">
                      {t("learning.pronunciation")}: {currentLetter.transliteration}
                    </p>
                  </div>

                  {/* Play Reference */}
                  <Button
                    variant="outline"
                    size="lg"
                    className="gap-2"
                    onClick={playReference}
                  >
                    {isPlayingReference ? (
                      <>
                        <Volume2 className="h-5 w-5 animate-pulse text-gold" />
                        {t("learning.playing")}...
                      </>
                    ) : (
                      <>
                        <Play className="h-5 w-5" />
                        {t("learning.listenToReference")}
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>

              {/* Recording Controls */}
              <Card className="border-border/50">
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center gap-2">
                    <Mic className="h-5 w-5 text-gold" />
                    {t("learning.yourPronunciation")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-6">
                  {/* Recording Button */}
                  <div className="relative">
                    <button
                      onClick={isRecording ? stopRecording : startRecording}
                      className={`flex h-32 w-32 items-center justify-center rounded-full transition-all ${
                        isRecording
                          ? "bg-red-500 text-white animate-pulse"
                          : "bg-gold/20 text-gold hover:bg-gold/30"
                      }`}
                    >
                      {isRecording ? (
                        <MicOff className="h-16 w-16" />
                      ) : (
                        <Mic className="h-16 w-16" />
                      )}
                    </button>
                    {isRecording && (
                      <div className="absolute -inset-2 rounded-full border-4 border-red-500 animate-ping opacity-50" />
                    )}
                  </div>

                  <p className="text-center text-muted-foreground">
                    {isRecording
                      ? t("learning.recording") + "... " + t("learning.tapToStop")
                      : hasRecording
                      ? t("learning.recordingComplete")
                      : t("learning.tapToRecord")}
                  </p>

                  {/* Playback Controls */}
                  {hasRecording && (
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" onClick={playRecording}>
                        {isPlayingRecording ? (
                          <>
                            <Volume2 className="mr-2 h-4 w-4 animate-pulse" />
                            {t("learning.playing")}...
                          </>
                        ) : (
                          <>
                            <Play className="mr-2 h-4 w-4" />
                            {t("learning.playRecording")}
                          </>
                        )}
                      </Button>
                      <Button variant="ghost" size="sm" onClick={resetRecording}>
                        <RefreshCw className="mr-2 h-4 w-4" />
                        {t("learning.recordAgain")}
                      </Button>
                    </div>
                  )}

                  {/* Feedback */}
                  {showFeedback && (
                    <div
                      className={`w-full rounded-lg p-4 text-center ${
                        score >= 80
                          ? "bg-green-500/10"
                          : score >= 60
                          ? "bg-yellow-500/10"
                          : "bg-red-500/10"
                      }`}
                    >
                      <div className="flex items-center justify-center gap-2">
                        {score >= 80 ? (
                          <CheckCircle2 className="h-6 w-6 text-green-500" />
                        ) : (
                          <AlertCircle className="h-6 w-6 text-yellow-500" />
                        )}
                        <span className="text-lg font-semibold">
                          {t("learning.pronunciationScore")}: {score}%
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {score >= 80
                          ? t("gamification.excellentProgress")
                          : score >= 60
                          ? t("learning.goodTryAgain")
                          : t("learning.keepPracticing")}
                      </p>
                      <p className="mt-1 text-xs text-gold">
                        +{score >= 80 ? 15 : 5} XP
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Navigation */}
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={prevLetter}
                disabled={currentLetterIndex === 0}
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                {t("common.previous")}
              </Button>
              <Button
                className="bg-gold text-background hover:bg-gold-dark"
                onClick={nextLetter}
                disabled={currentLetterIndex === ARABIC_ALPHABET.length - 1}
              >
                {t("common.next")}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Tips Card */}
            <Card className="border-border/50 bg-gold/5">
              <CardContent className="py-4">
                <h3 className="font-semibold text-foreground">
                  💡 {t("learning.pronunciationTips")}
                </h3>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>• {t("learning.tip1")}</li>
                  <li>• {t("learning.tip2")}</li>
                  <li>• {t("learning.tip3")}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
