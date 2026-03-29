"use client";

import { useState, useEffect } from "react";
import {
  Target,
  Trophy,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Plus,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Navbar, Sidebar, Footer } from "@/components/layout";
import { GoalCard, GoalFormDialog, GoalSuggestions } from "@/components/goals";
import { useGoalsStore } from "@/stores/useGoalsStore";
import { useGamificationStore } from "@/stores/useGamificationStore";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

export default function GoalsPage() {
  const [mounted, setMounted] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const t = useTranslations();
  
  const { 
    getActiveGoals, 
    getCompletedGoals, 
    recentlyCompletedGoal,
    clearRecentlyCompletedGoal,
  } = useGoalsStore();
  const { stats, addXP } = useGamificationStore();
  
  const activeGoals = getActiveGoals();
  const completedGoals = getCompletedGoals();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle goal completion celebration
  useEffect(() => {
    if (recentlyCompletedGoal && mounted) {
      setShowCelebration(true);
      // Award bonus XP for completing a goal
      addXP(25, `Goal completed: ${recentlyCompletedGoal.title}`);
    }
  }, [recentlyCompletedGoal, mounted, addXP]);

  const handleCloseCelebration = () => {
    setShowCelebration(false);
    clearRecentlyCompletedGoal();
  };

  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 overflow-auto p-6 lg:p-8">
          <div className="mx-auto max-w-5xl space-y-8">
            {/* Header */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="font-heading text-3xl font-bold text-foreground">
                  {t("goals.title")}
                </h1>
                <p className="text-muted-foreground">
                  {t("goals.description")}
                </p>
              </div>
              <GoalFormDialog />
            </div>

            {/* Stats Overview */}
            <div className="grid gap-4 sm:grid-cols-3">
              <Card className="border-border/50">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10">
                    <Target className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">
                      {activeGoals.length}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t("goals.activeGoals")}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10">
                    <Trophy className="h-6 w-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">
                      {completedGoals.length}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t("goals.completedGoals")}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10">
                    <TrendingUp className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">
                      {completedGoals.length > 0 
                        ? Math.round((completedGoals.length / (activeGoals.length + completedGoals.length)) * 100)
                        : 0}%
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t("goals.completionRate")}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Goals List */}
              <div className="lg:col-span-2">
                <Tabs defaultValue="active" className="w-full">
                  <TabsList className="mb-4">
                    <TabsTrigger value="active" className="gap-2">
                      <Target className="h-4 w-4" />
                      {t("goals.activeGoals")}
                      {activeGoals.length > 0 && (
                        <Badge variant="secondary" className="ml-1">
                          {activeGoals.length}
                        </Badge>
                      )}
                    </TabsTrigger>
                    <TabsTrigger value="completed" className="gap-2">
                      <CheckCircle2 className="h-4 w-4" />
                      {t("goals.completedGoals")}
                      {completedGoals.length > 0 && (
                        <Badge variant="secondary" className="ml-1">
                          {completedGoals.length}
                        </Badge>
                      )}
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="active" className="space-y-4">
                    {activeGoals.length === 0 ? (
                      <Card className="border-dashed">
                        <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                          <Target className="mb-4 h-12 w-12 text-muted-foreground/50" />
                          <h3 className="text-lg font-medium text-foreground">
                            {t("goals.noActiveGoals")}
                          </h3>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {t("goals.createFirstGoal")}
                          </p>
                          <GoalFormDialog
                            trigger={
                              <Button className="mt-4 bg-emerald-500 hover:bg-emerald-600">
                                <Plus className="mr-2 h-4 w-4" />
                                {t("goals.createGoal")}
                              </Button>
                            }
                          />
                        </CardContent>
                      </Card>
                    ) : (
                      activeGoals.map((goal) => (
                        <GoalCard key={goal.id} goal={goal} />
                      ))
                    )}
                  </TabsContent>

                  <TabsContent value="completed" className="space-y-4">
                    {completedGoals.length === 0 ? (
                      <Card className="border-dashed">
                        <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                          <Trophy className="mb-4 h-12 w-12 text-muted-foreground/50" />
                          <h3 className="text-lg font-medium text-foreground">
                            {t("goals.noCompletedGoals")}
                          </h3>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {t("goals.completeGoalsToSee")}
                          </p>
                        </CardContent>
                      </Card>
                    ) : (
                      completedGoals
                        .sort((a, b) => 
                          new Date(b.completedAt || 0).getTime() - 
                          new Date(a.completedAt || 0).getTime()
                        )
                        .map((goal) => (
                          <GoalCard key={goal.id} goal={goal} />
                        ))
                    )}
                  </TabsContent>
                </Tabs>
              </div>

              {/* Sidebar - Suggestions */}
              <div className="space-y-6">
                <GoalSuggestions />

                {/* Tips Card */}
                <Card className="border-border/50">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Sparkles className="h-5 w-5 text-emerald-500" />
                      {t("goals.tips")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        {t("goals.tip1")}
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        {t("goals.tip2")}
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        {t("goals.tip3")}
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />

      {/* Goal Completion Celebration Dialog */}
      <Dialog open={showCelebration} onOpenChange={handleCloseCelebration}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-center gap-2 text-center text-2xl">
              <span className="text-4xl">🎉</span>
              {t("goals.goalCompleted")}
            </DialogTitle>
            <DialogDescription className="text-center">
              {recentlyCompletedGoal && (
                <div className="mt-4 space-y-4">
                  <p className="text-lg font-medium text-foreground">
                    {recentlyCompletedGoal.title}
                  </p>
                  <div className="flex justify-center">
                    <Badge className="bg-emerald-500 text-white">
                      +25 XP {t("goals.bonusReward")}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">
                    {t("goals.congratulations")}
                  </p>
                </div>
              )}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 flex justify-center">
            <Button
              onClick={handleCloseCelebration}
              className="bg-emerald-500 hover:bg-emerald-600"
            >
              {t("common.continue")}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
