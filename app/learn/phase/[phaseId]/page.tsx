"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BookOpen,
  Clock,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Lock,
  Play,
  Star,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Navbar, Sidebar, Footer } from "@/components/layout";
import { useProgressStore } from "@/stores/useProgressStore";
import { CURRICULUM, getPhase } from "@/data/curriculum";

interface PhasePageProps {
  params: Promise<{ phaseId: string }>;
}

/**
 * Phase page - Shows all lessons in a specific phase
 */
export default function PhasePage({ params }: PhasePageProps) {
  const { phaseId } = use(params);
  const [mounted, setMounted] = useState(false);
  const { getPhaseProgress, getLessonProgress } = useProgressStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  const phaseIdNum = parseInt(phaseId);
  const phase = getPhase(phaseIdNum);

  if (!phase) {
    notFound();
  }

  const prevPhase = phaseIdNum > 1 ? getPhase(phaseIdNum - 1) : null;
  const nextPhase = phaseIdNum < 5 ? getPhase(phaseIdNum + 1) : null;

  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gold border-t-transparent" />
      </div>
    );
  }

  const phaseProgress = getPhaseProgress(phase.id);
  const completedLessons = phase.lessons.filter(
    (l) => getLessonProgress(phase.id, l.id)?.completed
  ).length;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 overflow-auto p-6 lg:p-8">
          <div className="mx-auto max-w-5xl space-y-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/learn" className="hover:text-foreground">
                Learn
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">Phase {phase.id}</span>
            </nav>

            {/* Phase Header */}
            <div
              className="rounded-2xl p-8"
              style={{
                background: `linear-gradient(135deg, ${phase.color}10, ${phase.color}05)`,
              }}
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl text-4xl"
                    style={{ backgroundColor: `${phase.color}20` }}
                  >
                    {phase.icon}
                  </div>
                  <div>
                    <Badge
                      className="mb-2"
                      style={{
                        backgroundColor: phase.color,
                        color: "white",
                      }}
                    >
                      Phase {phase.id}
                    </Badge>
                    <h1 className="font-heading text-3xl font-bold text-foreground">
                      {phase.title}
                    </h1>
                    <p className="font-arabic text-2xl text-gold">
                      {phase.titleAr}
                    </p>
                    <p className="mt-2 max-w-xl text-muted-foreground">
                      {phase.description}
                    </p>
                  </div>
                </div>

                {/* Progress */}
                <div className="rounded-xl bg-background/80 p-4 backdrop-blur">
                  <div className="text-center">
                    <div
                      className="mx-auto flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold text-white"
                      style={{ backgroundColor: phase.color }}
                    >
                      {phaseProgress}%
                    </div>
                    <p className="mt-2 font-semibold text-foreground">
                      {completedLessons} / {phase.totalLessons} Lessons
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Estimated: {phase.duration}
                    </p>
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-6">
                <Progress
                  value={phaseProgress}
                  className="h-3"
                  style={
                    {
                      "--progress-background": phase.color,
                    } as React.CSSProperties
                  }
                />
              </div>

              {/* Phase navigation */}
              <div className="mt-6 flex justify-between">
                {prevPhase ? (
                  <Button variant="ghost" asChild>
                    <Link href={`/learn/phase/${prevPhase.id}`}>
                      <ChevronLeft className="mr-2 h-4 w-4" />
                      Phase {prevPhase.id}: {prevPhase.title}
                    </Link>
                  </Button>
                ) : (
                  <div />
                )}
                {nextPhase && (
                  <Button variant="ghost" asChild>
                    <Link href={`/learn/phase/${nextPhase.id}`}>
                      Phase {nextPhase.id}: {nextPhase.title}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>

            {/* Objectives */}
            {phase.objectives && phase.objectives.length > 0 && (
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-gold" />
                    Learning Objectives
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {phase.objectives.map((objective, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                        {objective}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Lessons List */}
            <div className="space-y-4">
              <h2 className="font-heading text-xl font-semibold text-foreground">
                Lessons ({phase.totalLessons})
              </h2>

              <div className="space-y-3">
                {phase.lessons.map((lesson, index) => {
                  const lessonProgress = getLessonProgress(phase.id, lesson.id);
                  const isCompleted = lessonProgress?.completed;
                  const previousLesson = phase.lessons[index - 1];
                  const isPreviousCompleted =
                    index === 0 ||
                    getLessonProgress(phase.id, previousLesson?.id)?.completed;
                  const isLocked = !isPreviousCompleted && index > 0;

                  return (
                    <Link
                      key={lesson.id}
                      href={
                        isLocked
                          ? "#"
                          : `/learn/phase/${phase.id}/lesson/${lesson.id}`
                      }
                      className={isLocked ? "pointer-events-none" : ""}
                    >
                      <Card
                        className={`overflow-hidden border-border/50 transition-all ${
                          isCompleted
                            ? "border-green-500/30 bg-green-500/5"
                            : isLocked
                            ? "bg-muted/30 opacity-60"
                            : "hover:border-gold/50 hover:bg-gold/5"
                        }`}
                      >
                        <CardContent className="flex items-center gap-4 p-4">
                          {/* Lesson number */}
                          <div
                            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-bold ${
                              isCompleted
                                ? "bg-green-500 text-white"
                                : isLocked
                                ? "bg-muted text-muted-foreground"
                                : "bg-gold/20 text-gold"
                            }`}
                          >
                            {isCompleted ? (
                              <CheckCircle2 className="h-6 w-6" />
                            ) : isLocked ? (
                              <Lock className="h-5 w-5" />
                            ) : (
                              `${phase.id}.${lesson.id}`
                            )}
                          </div>

                          {/* Lesson info */}
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold text-foreground">
                                {lesson.title}
                              </h3>
                              <Badge variant="outline" className="text-xs">
                                {lesson.difficulty}
                              </Badge>
                            </div>
                            <p className="font-arabic text-sm text-gold">
                              {lesson.titleAr}
                            </p>
                            <div className="mt-1 flex items-center gap-4 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {lesson.duration}
                              </span>
                              <span className="flex items-center gap-1">
                                <BookOpen className="h-3 w-3" />
                                {lesson.exercises?.length || 0} exercises
                              </span>
                            </div>

                            {/* Progress bar if in progress */}
                            {lessonProgress &&
                              !isCompleted &&
                              lessonProgress.progress > 0 && (
                                <div className="mt-2 w-48">
                                  <Progress
                                    value={lessonProgress.progress}
                                    className="h-1.5"
                                  />
                                </div>
                              )}
                          </div>

                          {/* Action/Status */}
                          <div className="flex items-center gap-2">
                            {isCompleted && lessonProgress?.score && (
                              <div className="flex items-center gap-1 text-green-500">
                                <Star className="h-4 w-4 fill-current" />
                                <span className="font-semibold">
                                  {lessonProgress.score}%
                                </span>
                              </div>
                            )}
                            {!isLocked && !isCompleted && (
                              <Button
                                size="sm"
                                className="gap-1 bg-gold text-background hover:bg-gold-dark"
                              >
                                <Play className="h-4 w-4" />
                                {lessonProgress?.progress ? "Continue" : "Start"}
                              </Button>
                            )}
                            <ChevronRight
                              className={`h-5 w-5 ${
                                isLocked
                                  ? "text-muted-foreground"
                                  : "text-gold"
                              }`}
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
