"use client";

import { useState, useEffect, use, useCallback } from "react";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import {
  BookOpen,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  ArrowLeft,
  Play,
  Volume2,
  Info,
  Lightbulb,
  Target,
  Trophy,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Navbar, Footer } from "@/components/layout";
import { LetterDisplay, VowelMarks, PronunciationPlayer } from "@/components/arabic";
import { MultipleChoice, WritingExercise, MatchingExercise, ListeningExercise } from "@/components/exercises";
import { AILearningAssistant } from "@/components/ai";
import { useProgressStore } from "@/stores/useProgressStore";
import { useGamificationStore } from "@/stores/useGamificationStore";
import { useAudioStore } from "@/stores/useAudioStore";
import { CURRICULUM, getPhase, getLesson, ARABIC_ALPHABET, ARABIC_HARAKAT, ARABIC_NUMBERS } from "@/data/curriculum";
import type { Exercise, ExerciseType, ExerciseResult } from "@/types";

interface LessonPageProps {
  params: Promise<{ phaseId: string; lessonId: string }>;
}

/**
 * Lesson page - Full lesson with theory and exercises
 */
export default function LessonPage({ params }: LessonPageProps) {
  const { phaseId, lessonId } = use(params);
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<"theory" | "practice">("theory");
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [exerciseResults, setExerciseResults] = useState<ExerciseResult[]>([]);
  const [showCompletion, setShowCompletion] = useState(false);

  const { getLessonProgress, updateProgress, completeLesson } = useProgressStore();
  const { addXP, updateStreak } = useGamificationStore();
  const { speak } = useAudioStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Construct lesson ID in the format "phaseId-lessonId" (e.g., "1-1")
  const lessonIdFull = `${phaseId}-${lessonId}`;
  const phaseIdNum = parseInt(phaseId);
  const lessonIdNum = parseInt(lessonId);
  const phase = getPhase(phaseIdNum);
  const lesson = phase ? getLesson(lessonIdFull) : null;

  if (!phase || !lesson) {
    notFound();
  }

  // Find prev/next lessons
  const lessonIndex = phase.lessons.findIndex((l) => l.id === lessonIdFull);
  const prevLesson = lessonIndex > 0 ? phase.lessons[lessonIndex - 1] : null;
  const nextLesson =
    lessonIndex < phase.lessons.length - 1
      ? phase.lessons[lessonIndex + 1]
      : null;
  const nextPhase = !nextLesson && phaseIdNum < 5 ? getPhase(phaseIdNum + 1) : null;

  // Generate exercises based on lesson content - empty for now, exercises will be generated dynamically
  const exercises: Exercise[] = [];

  // Handle exercise completion - receives full ExerciseResult for tracking
  const handleExerciseComplete = useCallback(
    (result: ExerciseResult) => {
      const newResults = [...exerciseResults, result];
      setExerciseResults(newResults);

      // XP is already earned in the exercise component, just update streak
      if (result.correct) {
        updateStreak();
      }

      // Check for next exercise or completion
      if (currentExerciseIndex < exercises.length - 1) {
        setTimeout(() => {
          setCurrentExerciseIndex((prev) => prev + 1);
        }, 1500);
      } else {
        // Lesson complete - calculate total score and save progress
        const correctCount = newResults.filter((r) => r.correct).length;
        const totalScore = newResults.length > 0 
          ? Math.round((correctCount / newResults.length) * 100)
          : 100;
        const totalTimeSpent = newResults.reduce((sum, r) => sum + r.timeSpent, 0);
        
        completeLesson(lessonIdFull, totalScore, totalTimeSpent);
        setShowCompletion(true);
      }
    },
    [
      exerciseResults,
      currentExerciseIndex,
      exercises.length,
      completeLesson,
      updateStreak,
      lessonIdFull,
    ]
  );

  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gold border-t-transparent" />
      </div>
    );
  }

  const lessonProgress = getLessonProgress(phaseIdNum, lessonIdFull);
  const currentExercise = exercises[currentExerciseIndex];

  // Render theory content based on lesson type
  const renderTheoryContent = () => {
    // Phase 1 Lesson 1: Arabic Alphabet
    if (phaseIdNum === 1 && lessonIdNum === 1) {
      return (
        <div className="space-y-8">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-gold" />
                Introduction to the Arabic Alphabet
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                The Arabic alphabet consists of <strong>28 letters</strong>, all
                of which are consonants. Arabic is written from{" "}
                <strong>right to left</strong>, and most letters connect to each
                other within words.
              </p>
              <div className="my-4 rounded-lg bg-gold/10 p-4">
                <p className="font-semibold text-gold">Key Points:</p>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>28 letters, all consonants</li>
                  <li>Written and read from right to left</li>
                  <li>Most letters have 4 forms: isolated, initial, medial, final</li>
                  <li>Vowels are indicated by diacritical marks (harakat)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Alphabet Grid */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>The 28 Arabic Letters</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-7">
                {ARABIC_ALPHABET.map((letter) => (
                  <LetterDisplay
                    key={letter.letter}
                    letter={letter.letter}
                    name={letter.name}
                    transliteration={letter.transliteration}
                    isolated={letter.isolated}
                    initial={letter.initial}
                    medial={letter.medial}
                    final={letter.final}
                    type={letter.type}
                    showForms
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Letter Forms Explanation */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-gold" />
                Understanding Letter Forms
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                Each Arabic letter can take up to <strong>4 different forms</strong>{" "}
                depending on its position in a word:
              </p>
              <div className="my-4 overflow-x-auto">
                <table className="w-full text-center">
                  <thead>
                    <tr className="border-b">
                      <th className="p-2">Form</th>
                      <th className="p-2">Position</th>
                      <th className="p-2">Example (ب)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2">Isolated</td>
                      <td className="p-2">Alone</td>
                      <td className="p-2 font-arabic text-2xl">ب</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">Initial</td>
                      <td className="p-2">Start of word</td>
                      <td className="p-2 font-arabic text-2xl">بـ</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">Medial</td>
                      <td className="p-2">Middle of word</td>
                      <td className="p-2 font-arabic text-2xl">ـبـ</td>
                    </tr>
                    <tr>
                      <td className="p-2">Final</td>
                      <td className="p-2">End of word</td>
                      <td className="p-2 font-arabic text-2xl">ـب</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }

    // Phase 1 Lesson 2: Vowel Marks
    if (phaseIdNum === 1 && lessonIdNum === 2) {
      return (
        <div className="space-y-8">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-gold" />
                Arabic Vowel Marks (Harakat)
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                Arabic uses <strong>diacritical marks</strong> called{" "}
                <strong className="font-arabic">حَرَكَات</strong> (harakat) to
                indicate short vowels and other pronunciation features. These
                marks appear above or below consonants.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>The Vowel Marks</CardTitle>
            </CardHeader>
            <CardContent>
              <VowelMarks
                harakat={[...ARABIC_HARAKAT]}
                baseLetter="ب"
                interactive
              />
            </CardContent>
          </Card>
        </div>
      );
    }

    // Phase 1 Lesson 4: Numbers
    if (phaseIdNum === 1 && lessonIdNum === 4) {
      return (
        <div className="space-y-8">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-gold" />
                Arabic Numbers (٠-١٠)
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                Arabic numerals, also called{" "}
                <strong className="font-arabic">الأرقام العربية</strong>, have
                both Eastern (used in most Arab countries) and Western forms
                (used globally). Here we learn the Eastern Arabic numerals.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Numbers 0-10</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6">
                {ARABIC_NUMBERS.map((num) => (
                  <div
                    key={num.number}
                    className="flex flex-col items-center rounded-lg border border-border/50 p-4 text-center transition-colors hover:border-gold/50 hover:bg-gold/5"
                  >
                    <span className="font-arabic text-4xl text-gold">
                      {num.arabic}
                    </span>
                    <span className="mt-2 text-2xl text-foreground">
                      {num.number}
                    </span>
                    <span className="mt-1 text-sm text-muted-foreground">
                      {num.transliteration}
                    </span>
                    <span className="font-arabic text-sm text-gold/70">
                      {num.word}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-2"
                      onClick={() => speak(num.word)}
                    >
                      <Volume2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }

    // Default theory content
    return (
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-gold" />
            {lesson.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-lg">{lesson.description}</p>
          {lesson.content && (
            <div
              dangerouslySetInnerHTML={{ __html: lesson.content }}
            />
          )}
          {lesson.objectives && (
            <div className="my-6">
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <Target className="h-5 w-5 text-gold" />
                Learning Objectives
              </h3>
              <ul className="mt-2">
                {lesson.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-green-500" />
                    {obj}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    );
  };

  // Render exercise component based on type
  const renderExercise = (exercise: Exercise) => {
    switch (exercise.type) {
      case "MULTIPLE_CHOICE":
        return (
          <MultipleChoice
            exercise={exercise}
            onComplete={handleExerciseComplete}
          />
        );
      case "WRITING":
        return (
          <WritingExercise
            exercise={exercise}
            onComplete={handleExerciseComplete}
          />
        );
      case "MATCHING":
        return (
          <MatchingExercise
            exercise={exercise}
            onComplete={handleExerciseComplete}
          />
        );
      case "LISTENING":
        return (
          <ListeningExercise
            exercise={exercise}
            onComplete={handleExerciseComplete}
          />
        );
      default:
        return (
          <div className="text-center text-muted-foreground">
            Exercise type not supported yet.
          </div>
        );
    }
  };

  // Completion screen
  if (showCompletion) {
    const totalCorrect = exerciseResults.filter((r) => r.correct).length;
    const totalScore = exerciseResults.length > 0 
      ? Math.round((totalCorrect / exerciseResults.length) * 100)
      : 100;
    const xpEarned =
      totalCorrect *
      (lesson.difficulty === "easy"
        ? 10
        : lesson.difficulty === "medium"
        ? 20
        : 30);

    return (
      <div className="flex min-h-screen flex-col bg-background">
        <Navbar />
        <main className="flex flex-1 items-center justify-center p-6">
          <Card className="max-w-md border-border/50 text-center">
            <CardContent className="p-8">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gold/20">
                <Trophy className="h-10 w-10 text-gold" />
              </div>
              <h1 className="mt-6 font-heading text-2xl font-bold text-foreground">
                Lesson Complete!
              </h1>
              <p className="mt-2 font-arabic text-xl text-gold">
                أحسنت! - Excellent!
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-muted p-4">
                  <p className="text-3xl font-bold text-foreground">
                    {totalScore}%
                  </p>
                  <p className="text-sm text-muted-foreground">Score</p>
                </div>
                <div className="rounded-lg bg-gold/10 p-4">
                  <p className="text-3xl font-bold text-gold">+{xpEarned}</p>
                  <p className="text-sm text-muted-foreground">XP Earned</p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                {nextLesson ? (
                  <Button
                    className="gap-2 bg-gold text-background hover:bg-gold-dark"
                    asChild
                  >
                    <Link
                      href={`/learn/phase/${phaseIdNum}/lesson/${nextLesson.id}`}
                    >
                      Next Lesson
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                ) : nextPhase ? (
                  <Button
                    className="gap-2 bg-gold text-background hover:bg-gold-dark"
                    asChild
                  >
                    <Link href={`/learn/phase/${nextPhase.id}`}>
                      Continue to Phase {nextPhase.id}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                ) : (
                  <Button
                    className="gap-2 bg-gold text-background hover:bg-gold-dark"
                    asChild
                  >
                    <Link href="/dashboard">Back to Dashboard</Link>
                  </Button>
                )}
                <Button variant="outline" asChild>
                  <Link href={`/learn/phase/${phaseIdNum}`}>
                    View Phase Overview
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-1 overflow-auto">
        {/* Lesson Header */}
        <div
          className="border-b border-border/50 px-6 py-4"
          style={{
            background: `linear-gradient(135deg, ${phase.color}08, ${phase.color}03)`,
          }}
        >
          <div className="mx-auto max-w-5xl">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/learn" className="hover:text-foreground">
                Learn
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link
                href={`/learn/phase/${phaseIdNum}`}
                className="hover:text-foreground"
              >
                Phase {phaseIdNum}
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">
                Lesson {phaseIdNum}.{lessonIdNum}
              </span>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div>
                <Badge
                  className="mb-2"
                  style={{
                    backgroundColor: `${phase.color}20`,
                    color: phase.color,
                  }}
                >
                  Phase {phaseIdNum}: {phase.title}
                </Badge>
                <h1 className="font-heading text-2xl font-bold text-foreground">
                  {lesson.title}
                </h1>
                <p className="font-arabic text-lg text-gold">{lesson.titleAr}</p>
              </div>

              <Button variant="ghost" size="sm" asChild>
                <Link href={`/learn/phase/${phaseIdNum}`}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Phase
                </Link>
              </Button>
            </div>

            {/* Progress */}
            {activeTab === "practice" && exercises.length > 0 && (
              <div className="mt-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    Exercise {currentExerciseIndex + 1} of {exercises.length}
                  </span>
                  <span className="text-muted-foreground">
                    {exerciseResults.filter((r) => r.correct).length} correct
                  </span>
                </div>
                <Progress
                  value={((currentExerciseIndex + 1) / exercises.length) * 100}
                  className="mt-2 h-2"
                />
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-5xl p-6">
          <Tabs
            value={activeTab}
            onValueChange={(v) => setActiveTab(v as "theory" | "practice")}
            className="space-y-6"
          >
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="theory" className="gap-2">
                <BookOpen className="h-4 w-4" />
                Theory
              </TabsTrigger>
              <TabsTrigger value="practice" className="gap-2">
                <Play className="h-4 w-4" />
                Practice ({exercises.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="theory" className="space-y-6">
              {renderTheoryContent()}

              {/* Start Practice CTA */}
              {exercises.length > 0 && (
                <Card className="border-gold/30 bg-gold/5">
                  <CardContent className="flex items-center justify-between p-6">
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Ready to practice?
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Test your knowledge with {exercises.length} exercises.
                      </p>
                    </div>
                    <Button
                      className="gap-2 bg-gold text-background hover:bg-gold-dark"
                      onClick={() => setActiveTab("practice")}
                    >
                      <Play className="h-4 w-4" />
                      Start Practice
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="practice" className="space-y-6">
              {exercises.length > 0 ? (
                currentExercise && renderExercise(currentExercise)
              ) : (
                <Card className="border-border/50">
                  <CardContent className="p-8 text-center">
                    <BookOpen className="mx-auto h-12 w-12 text-muted-foreground/50" />
                    <h3 className="mt-4 font-semibold text-foreground">
                      No exercises yet
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Practice exercises for this lesson are coming soon.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-4"
                      onClick={() => setActiveTab("theory")}
                    >
                      Review Theory
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>

          {/* Navigation */}
          <Separator className="my-8" />
          <div className="flex justify-between">
            {prevLesson ? (
              <Button variant="ghost" asChild>
                <Link
                  href={`/learn/phase/${phaseIdNum}/lesson/${prevLesson.id}`}
                >
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  {prevLesson.title}
                </Link>
              </Button>
            ) : (
              <div />
            )}
            {nextLesson && (
              <Button variant="ghost" asChild>
                <Link
                  href={`/learn/phase/${phaseIdNum}/lesson/${nextLesson.id}`}
                >
                  {nextLesson.title}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </main>

      {/* AI Learning Assistant - Floating helper */}
      <AILearningAssistant
        lessonId={lessonIdFull}
        lessonTitle={lesson.title}
        lessonTitleAr={lesson.titleAr}
        lessonContent={lesson.content.theory.map(t => `${t.title}: ${t.content}`).join('\n')}
        phaseLevel={phaseIdNum}
      />

      <Footer />
    </div>
  );
}
