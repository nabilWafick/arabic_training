"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  RefreshCw,
  CheckCircle2,
  XCircle,
  Volume2,
  Shuffle,
  Filter,
  Star,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navbar, Sidebar, Footer } from "@/components/layout";
import { useGamificationStore } from "@/stores/useGamificationStore";
import { useAudioStore } from "@/stores/useAudioStore";
import { useTranslations } from "next-intl";

// Sample vocabulary data
const VOCABULARY = [
  // Greetings
  { id: 1, arabic: "مَرْحَبَا", english: "Hello", transliteration: "marḥabā", category: "greetings", difficulty: "easy" },
  { id: 2, arabic: "السَّلَامُ عَلَيْكُم", english: "Peace be upon you", transliteration: "as-salāmu ʿalaykum", category: "greetings", difficulty: "easy" },
  { id: 3, arabic: "صَبَاحُ الْخَيْر", english: "Good morning", transliteration: "ṣabāḥu l-khayr", category: "greetings", difficulty: "easy" },
  { id: 4, arabic: "مَسَاءُ الْخَيْر", english: "Good evening", transliteration: "masāʾu l-khayr", category: "greetings", difficulty: "easy" },
  { id: 5, arabic: "شُكْرًا", english: "Thank you", transliteration: "shukran", category: "greetings", difficulty: "easy" },
  { id: 6, arabic: "عَفْوًا", english: "You're welcome / Excuse me", transliteration: "ʿafwan", category: "greetings", difficulty: "easy" },
  { id: 7, arabic: "مَعَ السَّلَامَة", english: "Goodbye", transliteration: "maʿa s-salāma", category: "greetings", difficulty: "easy" },
  // Numbers
  { id: 8, arabic: "وَاحِد", english: "One", transliteration: "wāḥid", category: "numbers", difficulty: "easy" },
  { id: 9, arabic: "اِثْنَان", english: "Two", transliteration: "ithnān", category: "numbers", difficulty: "easy" },
  { id: 10, arabic: "ثَلَاثَة", english: "Three", transliteration: "thalātha", category: "numbers", difficulty: "easy" },
  { id: 11, arabic: "أَرْبَعَة", english: "Four", transliteration: "arbaʿa", category: "numbers", difficulty: "easy" },
  { id: 12, arabic: "خَمْسَة", english: "Five", transliteration: "khamsa", category: "numbers", difficulty: "easy" },
  // Family
  { id: 13, arabic: "أَب", english: "Father", transliteration: "ab", category: "family", difficulty: "easy" },
  { id: 14, arabic: "أُمّ", english: "Mother", transliteration: "umm", category: "family", difficulty: "easy" },
  { id: 15, arabic: "أَخ", english: "Brother", transliteration: "akh", category: "family", difficulty: "easy" },
  { id: 16, arabic: "أُخْت", english: "Sister", transliteration: "ukht", category: "family", difficulty: "easy" },
  { id: 17, arabic: "عَائِلَة", english: "Family", transliteration: "ʿāʾila", category: "family", difficulty: "easy" },
  // Food
  { id: 18, arabic: "مَاء", english: "Water", transliteration: "māʾ", category: "food", difficulty: "easy" },
  { id: 19, arabic: "خُبْز", english: "Bread", transliteration: "khubz", category: "food", difficulty: "easy" },
  { id: 20, arabic: "طَعَام", english: "Food", transliteration: "ṭaʿām", category: "food", difficulty: "easy" },
];

const CATEGORIES = ["all", "greetings", "numbers", "family", "food"];

/**
 * Vocabulary Practice Page - Flashcard-based vocabulary learning
 * Includes spaced repetition, categories, and progress tracking
 */
export default function VocabularyPracticePage() {
  const [mounted, setMounted] = useState(false);
  const [mode, setMode] = useState<"flashcard" | "quiz">("flashcard");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [category, setCategory] = useState("all");
  const [knownWords, setKnownWords] = useState<Set<number>>(new Set());
  const [learningWords, setLearningWords] = useState<Set<number>>(new Set());
  const [showAllWords, setShowAllWords] = useState(false);
  const { addXP } = useGamificationStore();
  const { speak, loadVoices, isPlaying } = useAudioStore();
  const t = useTranslations();

  // Filter vocabulary by category
  const filteredVocab = useMemo(() => {
    if (category === "all") return VOCABULARY;
    return VOCABULARY.filter((word) => word.category === category);
  }, [category]);

  const currentWord = filteredVocab[currentIndex];

  // Number of words to show initially
  const WORDS_TO_SHOW = 12;
  const displayedWords = showAllWords ? filteredVocab : filteredVocab.slice(0, WORDS_TO_SHOW);
  const hasMoreWords = filteredVocab.length > WORDS_TO_SHOW;

  useEffect(() => {
    setMounted(true);
    // Load voices on mount
    loadVoices();
  }, [loadVoices]);

  // Play pronunciation for a word
  const playPronunciation = (text: string) => {
    speak(text, "ar-SA");
  };

  const nextCard = () => {
    if (currentIndex < filteredVocab.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setIsFlipped(false);
    } else {
      // Loop back to start
      setCurrentIndex(0);
      setIsFlipped(false);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setIsFlipped(false);
    }
  };

  const markAsKnown = () => {
    setKnownWords((prev) => new Set([...prev, currentWord.id]));
    setLearningWords((prev) => {
      const newSet = new Set(prev);
      newSet.delete(currentWord.id);
      return newSet;
    });
    addXP(5);
    nextCard();
  };

  const markAsLearning = () => {
    setLearningWords((prev) => new Set([...prev, currentWord.id]));
    setKnownWords((prev) => {
      const newSet = new Set(prev);
      newSet.delete(currentWord.id);
      return newSet;
    });
    nextCard();
  };

  const shuffleCards = () => {
    const shuffledIndex = Math.floor(Math.random() * filteredVocab.length);
    setCurrentIndex(shuffledIndex);
    setIsFlipped(false);
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
                    {t("arabic.vocabulary")} {t("navigation.practice")}
                  </h1>
                </div>
                <p className="mt-1 text-muted-foreground">
                  {t("learning.buildYourVocabulary")}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">
                  {knownWords.size} {t("learning.known")}
                </Badge>
                <Badge variant="outline">
                  {learningWords.size} {t("learning.learning")}
                </Badge>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <Button
                  key={cat}
                  variant={category === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setCategory(cat);
                    setCurrentIndex(0);
                    setIsFlipped(false);
                  }}
                  className={category === cat ? "bg-gold text-background hover:bg-gold-dark" : ""}
                >
                  {cat === "all" ? t("common.all") : t(`vocabulary.${cat}`)}
                </Button>
              ))}
            </div>

            {/* Progress */}
            <div className="flex items-center gap-4">
              <Progress
                value={((currentIndex + 1) / filteredVocab.length) * 100}
                className="h-2 flex-1"
              />
              <span className="text-sm text-muted-foreground">
                {currentIndex + 1} / {filteredVocab.length}
              </span>
            </div>

            {/* Mode Tabs */}
            <Tabs value={mode} onValueChange={(v) => setMode(v as "flashcard" | "quiz")}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="flashcard">{t("learning.flashcards")}</TabsTrigger>
                <TabsTrigger value="quiz">{t("learning.quiz")}</TabsTrigger>
              </TabsList>

              <TabsContent value="flashcard" className="mt-6">
                {/* Flashcard */}
                <div className="perspective-1000">
                  <div
                    onClick={() => setIsFlipped(!isFlipped)}
                    className={`relative h-80 cursor-pointer transition-transform duration-500 transform-style-3d ${
                      isFlipped ? "rotate-y-180" : ""
                    }`}
                  >
                    {/* Front */}
                    <Card
                      className={`absolute inset-0 border-border/50 backface-hidden ${
                        isFlipped ? "invisible" : ""
                      }`}
                    >
                      <CardContent className="flex h-full flex-col items-center justify-center gap-4">
                        <span className="font-arabic text-7xl text-gold">
                          {currentWord.arabic}
                        </span>
                        <p className="text-sm text-muted-foreground">
                          {t("learning.tapToReveal")}
                        </p>
                      </CardContent>
                    </Card>

                    {/* Back */}
                    <Card
                      className={`absolute inset-0 border-border/50 rotate-y-180 backface-hidden ${
                        !isFlipped ? "invisible" : ""
                      }`}
                    >
                      <CardContent className="flex h-full flex-col items-center justify-center gap-4">
                        <span className="font-arabic text-5xl text-gold">
                          {currentWord.arabic}
                        </span>
                        <p className="text-2xl font-semibold text-foreground">
                          {currentWord.english}
                        </p>
                        <p className="text-muted-foreground">
                          {currentWord.transliteration}
                        </p>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="mt-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            playPronunciation(currentWord.arabic);
                          }}
                          disabled={isPlaying}
                        >
                          <Volume2 className={`mr-2 h-4 w-4 ${isPlaying ? "animate-pulse text-gold" : ""}`} />
                          {t("learning.playPronunciation")}
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-6 flex justify-center gap-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="gap-2 border-red-500/50 text-red-500 hover:bg-red-500/10"
                    onClick={markAsLearning}
                  >
                    <XCircle className="h-5 w-5" />
                    {t("learning.stillLearning")}
                  </Button>
                  <Button
                    size="lg"
                    className="gap-2 bg-green-500 text-white hover:bg-green-600"
                    onClick={markAsKnown}
                  >
                    <CheckCircle2 className="h-5 w-5" />
                    {t("learning.iKnowThis")}
                  </Button>
                </div>

                {/* Navigation */}
                <div className="mt-6 flex justify-between">
                  <Button variant="ghost" onClick={prevCard} disabled={currentIndex === 0}>
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    {t("common.previous")}
                  </Button>
                  <Button variant="ghost" onClick={shuffleCards}>
                    <Shuffle className="mr-2 h-4 w-4" />
                    {t("common.shuffle")}
                  </Button>
                  <Button variant="ghost" onClick={nextCard}>
                    {t("common.next")}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="quiz" className="mt-6">
                <Card className="border-border/50">
                  <CardContent className="py-12 text-center">
                    <BookOpen className="mx-auto h-16 w-16 text-gold/50" />
                    <h3 className="mt-4 text-xl font-semibold">
                      {t("learning.quizMode")}
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      {t("learning.quizComingSoon")}
                    </p>
                    <Button
                      className="mt-6 bg-gold text-background hover:bg-gold-dark"
                      onClick={() => setMode("flashcard")}
                    >
                      {t("learning.useFlashcards")}
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Word List Preview */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{t("learning.wordList")}</span>
                  <Badge variant="secondary">
                    {filteredVocab.length} {t("common.words")}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                  {displayedWords.map((word, index) => {
                    // Find actual index in filtered vocab for proper card selection
                    const actualIndex = showAllWords ? index : index;
                    return (
                      <button
                        key={word.id}
                        onClick={() => {
                          setCurrentIndex(actualIndex);
                          setIsFlipped(false);
                        }}
                        className={`group relative rounded-lg border p-2 text-center transition-all ${
                          actualIndex === currentIndex
                            ? "border-gold bg-gold/10"
                            : knownWords.has(word.id)
                            ? "border-green-500/50 bg-green-500/10"
                            : learningWords.has(word.id)
                            ? "border-yellow-500/50 bg-yellow-500/10"
                            : "border-border/50 hover:border-gold/50"
                        }`}
                      >
                        <span className="font-arabic text-lg">{word.arabic}</span>
                        <p className="text-xs text-muted-foreground truncate">
                          {word.english}
                        </p>
                        {/* Quick play button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            playPronunciation(word.arabic);
                          }}
                          className="absolute right-1 top-1 opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded-full hover:bg-gold/20"
                          title={t("learning.playPronunciation")}
                        >
                          <Volume2 className="h-3 w-3 text-gold" />
                        </button>
                      </button>
                    );
                  })}
                </div>
                {hasMoreWords && (
                  <button
                    onClick={() => setShowAllWords(!showAllWords)}
                    className="mt-4 w-full flex items-center justify-center gap-2 text-sm text-gold hover:text-gold-dark transition-colors py-2 rounded-lg hover:bg-gold/5"
                  >
                    {showAllWords ? (
                      <>
                        <ChevronUp className="h-4 w-4" />
                        {t("common.showLess")}
                      </>
                    ) : (
                      <>
                        <ChevronDown className="h-4 w-4" />
                        {t("common.showMore")} (+{filteredVocab.length - WORDS_TO_SHOW} {t("common.more")})
                      </>
                    )}
                  </button>
                )}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
