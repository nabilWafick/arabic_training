"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  BookOpen,
  Clock,
  Target,
  ChevronRight,
  CheckCircle2,
  Lock,
  Play,
  Star,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Navbar, Sidebar, Footer } from "@/components/layout";
import { useProgressStore } from "@/stores/useProgressStore";
import { CURRICULUM } from "@/data/curriculum";

/**
 * Learn page - Overview of all learning phases and lessons
 */
export default function LearnPage() {
  const [mounted, setMounted] = useState(false);
  const { getPhaseProgress, getLessonProgress } = useProgressStore();
  const t = useTranslations();

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
          <div className="mx-auto max-w-7xl space-y-8">
            {/* Header */}
            <div>
              <h1 className="font-heading text-3xl font-bold text-foreground">
                {t("learn.title")}
              </h1>
              <p className="text-muted-foreground">
                {t("learn.description")}
              </p>
            </div>

            {/* Overall Progress */}
            <Card className="border-border/50 bg-gradient-to-r from-gold/5 to-gold/10">
              <CardContent className="p-6">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-foreground">
                      {t("learn.overallProgress")}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {t("learn.keepGoing")}
                    </p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-gold">
                        {CURRICULUM.reduce(
                          (acc, phase) =>
                            acc +
                            phase.lessons.filter(
                              (l) =>
                                getLessonProgress(phase.id, l.id)?.completed
                            ).length,
                          0
                        )}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {t("learn.lessonsDone")}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-foreground">
                        {CURRICULUM.reduce(
                          (acc, phase) => acc + phase.totalLessons,
                          0
                        )}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {t("learn.totalLessons")}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phases */}
            <div className="space-y-8">
              {CURRICULUM.map((phase, phaseIndex) => {
                const phaseProgressData = getPhaseProgress(phase.id);
                const phaseProgress = phaseProgressData?.overallProgress ?? 0;
                const prevPhaseProgress = phaseIndex > 0 
                  ? (getPhaseProgress(CURRICULUM[phaseIndex - 1].id)?.overallProgress ?? 0)
                  : 100;
                const isLocked = phaseIndex > 0 && prevPhaseProgress < 80;

                return (
                  <Card
                    key={phase.id}
                    className={`border-border/50 overflow-hidden ${
                      isLocked ? "opacity-60" : ""
                    }`}
                  >
                    {/* Phase header bar */}
                    <div
                      className="h-2"
                      style={{ backgroundColor: phase.color }}
                    />

                    <CardHeader className="pb-4">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex items-start gap-4">
                          <div
                            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-3xl"
                            style={{ backgroundColor: `${phase.color}20` }}
                          >
                            {phase.icon}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <CardTitle className="text-xl">
                                Phase {phase.id}: {phase.title}
                              </CardTitle>
                              {isLocked && (
                                <Lock className="h-5 w-5 text-muted-foreground" />
                              )}
                            </div>
                            <p className="font-arabic text-lg text-gold">
                              {phase.titleAr}
                            </p>
                            <p className="mt-1 text-sm text-muted-foreground">
                              {phase.description}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">
                              {t("learn.progress")}
                            </p>
                            <p className="text-2xl font-bold text-foreground">
                              {phaseProgress}%
                            </p>
                          </div>
                          <div className="w-24">
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
                        </div>
                      </div>

                      {/* Phase meta */}
                      <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <BookOpen className="h-4 w-4" />
                          {phase.totalLessons} {t("common.lessons")}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {phase.duration}
                        </span>
                      </div>
                    </CardHeader>

                    <CardContent>
                      {/* Lessons grid */}
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {phase.lessons.map((lesson, lessonIndex) => {
                          const lessonProgress = getLessonProgress(
                            phase.id,
                            lesson.id
                          );
                          const isCompleted = lessonProgress?.completed;
                          const previousLesson = phase.lessons[lessonIndex - 1];
                          const isPreviousCompleted =
                            lessonIndex === 0 ||
                            getLessonProgress(phase.id, previousLesson?.id)
                              ?.completed;
                          const isLessonLocked = isLocked || !isPreviousCompleted;

                          return (
                            <Link
                              key={lesson.id}
                              href={
                                isLessonLocked
                                  ? "#"
                                  : `/learn/phase/${phase.id}/lesson/${lesson.id}`
                              }
                              className={`group ${
                                isLessonLocked
                                  ? "pointer-events-none"
                                  : ""
                              }`}
                            >
                              <div
                                className={`relative rounded-lg border p-4 transition-all ${
                                  isCompleted
                                    ? "border-green-500/30 bg-green-500/5"
                                    : isLessonLocked
                                    ? "border-border/30 bg-muted/30"
                                    : "border-border/50 hover:border-gold/50 hover:bg-gold/5"
                                }`}
                              >
                                {/* Lesson number */}
                                <div
                                  className={`absolute -top-3 left-4 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                                    isCompleted
                                      ? "bg-green-500 text-white"
                                      : isLessonLocked
                                      ? "bg-muted text-muted-foreground"
                                      : "bg-gold text-background"
                                  }`}
                                >
                                  {isCompleted ? (
                                    <CheckCircle2 className="h-4 w-4" />
                                  ) : isLessonLocked ? (
                                    <Lock className="h-3 w-3" />
                                  ) : (
                                    `${phase.id}.${lesson.id}`
                                  )}
                                </div>

                                {/* Lesson content */}
                                <div className="mt-2">
                                  <h3
                                    className={`font-semibold ${
                                      isLessonLocked
                                        ? "text-muted-foreground"
                                        : "text-foreground group-hover:text-gold"
                                    }`}
                                  >
                                    {lesson.title}
                                  </h3>
                                  <p className="font-arabic text-sm text-gold/80">
                                    {lesson.titleAr}
                                  </p>
                                  <p className="mt-2 line-clamp-2 text-xs text-muted-foreground">
                                    {lesson.description}
                                  </p>

                                  {/* Lesson meta */}
                                  <div className="mt-3 flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                      <Clock className="h-3 w-3" />
                                      {lesson.estimatedTime} min
                                    </div>
                                    {!isLessonLocked && !isCompleted && (
                                      <Badge
                                        variant="secondary"
                                        className="h-6 gap-1 text-xs"
                                      >
                                        <Play className="h-3 w-3" />
                                        {t("learn.start")}
                                      </Badge>
                                    )}
                                    {isCompleted && (
                                      <div className="flex items-center gap-1 text-xs text-green-500">
                                        <Star className="h-3 w-3 fill-current" />
                                        {lessonProgress.score || 100}%
                                      </div>
                                    )}
                                  </div>

                                  {/* Progress bar if in progress */}
                                  {lessonProgress &&
                                    !isCompleted &&
                                    lessonProgress.progress > 0 && (
                                      <div className="mt-2">
                                        <Progress
                                          value={lessonProgress.progress}
                                          className="h-1"
                                        />
                                      </div>
                                    )}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
