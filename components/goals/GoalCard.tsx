"use client";

import { useState } from "react";
import {
  Target,
  BookOpen,
  Clock,
  Flame,
  Zap,
  Calendar,
  Trash2,
  CheckCircle2,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useGoalsStore, type Goal, type GoalType } from "@/stores/useGoalsStore";
import { useTranslations } from "next-intl";

interface GoalCardProps {
  goal: Goal;
  className?: string;
}

const GOAL_ICONS: Record<GoalType, React.ElementType> = {
  xp: Zap,
  words: BookOpen,
  lessons: Target,
  time: Clock,
  streak: Flame,
};

const GOAL_COLORS: Record<GoalType, string> = {
  xp: "text-amber-500",
  words: "text-blue-500",
  lessons: "text-emerald-500",
  time: "text-purple-500",
  streak: "text-orange-500",
};

const GOAL_BG_COLORS: Record<GoalType, string> = {
  xp: "bg-amber-500/10",
  words: "bg-blue-500/10",
  lessons: "bg-emerald-500/10",
  time: "bg-purple-500/10",
  streak: "bg-orange-500/10",
};

function formatDeadline(deadline: string | null, t: ReturnType<typeof useTranslations>): string {
  if (!deadline) return "";
  
  const deadlineDate = new Date(deadline);
  const now = new Date();
  const diffTime = deadlineDate.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays < 0) return t("goals.overdue");
  if (diffDays === 0) return t("goals.dueToday");
  if (diffDays === 1) return t("goals.dueTomorrow");
  return `${diffDays} ${t("common.days")}`;
}

function formatTimeValue(minutes: number): string {
  if (minutes < 60) return `${minutes}m`;
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}m` : `${hours}h`;
}

export function GoalCard({ goal, className }: GoalCardProps) {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const { deleteGoal } = useGoalsStore();
  const t = useTranslations();
  
  const Icon = GOAL_ICONS[goal.type];
  const iconColor = GOAL_COLORS[goal.type];
  const bgColor = GOAL_BG_COLORS[goal.type];
  
  const progressPercent = Math.min(
    Math.round((goal.current / goal.target) * 100),
    100
  );
  
  const isOverdue = goal.deadline 
    ? new Date(goal.deadline) < new Date() && !goal.completed
    : false;

  const displayValue = goal.type === 'time' 
    ? formatTimeValue(goal.current)
    : goal.current.toLocaleString();
    
  const displayTarget = goal.type === 'time'
    ? formatTimeValue(goal.target)
    : goal.target.toLocaleString();

  return (
    <Card
      className={cn(
        "relative overflow-hidden border-border/50 transition-all hover:shadow-md",
        goal.completed && "bg-emerald-500/5 border-emerald-500/30",
        isOverdue && "border-red-500/30 bg-red-500/5",
        className
      )}
    >
      {/* Progress indicator bar at top */}
      <div className="absolute left-0 top-0 h-1 w-full bg-muted">
        <div
          className={cn(
            "h-full transition-all duration-500",
            goal.completed ? "bg-emerald-500" : "bg-emerald-500"
          )}
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <CardContent className="p-5 pt-6">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div
            className={cn(
              "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl",
              bgColor
            )}
          >
            <Icon className={cn("h-6 w-6", iconColor)} />
          </div>

          {/* Content */}
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0 flex-1">
                <h3 className="truncate font-semibold text-foreground">
                  {goal.title}
                </h3>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {t(`goals.goalTypes.${goal.type}`)}
                </p>
              </div>
              
              {/* Status Badge */}
              {goal.completed ? (
                <Badge className="shrink-0 bg-emerald-500 text-white">
                  <CheckCircle2 className="mr-1 h-3 w-3" />
                  {t("goals.completed")}
                </Badge>
              ) : isOverdue ? (
                <Badge variant="destructive" className="shrink-0">
                  {t("goals.overdue")}
                </Badge>
              ) : null}
            </div>

            {/* Progress */}
            <div className="mt-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  {t("goals.progress")}
                </span>
                <span className="font-medium">
                  {displayValue} / {displayTarget}
                </span>
              </div>
              <Progress
                value={progressPercent}
                className={cn(
                  "mt-2 h-2",
                  goal.completed && "[&>div]:bg-emerald-500"
                )}
              />
            </div>

            {/* Footer */}
            <div className="mt-3 flex items-center justify-between">
              {/* Deadline */}
              {goal.deadline && !goal.completed && (
                <div className={cn(
                  "flex items-center gap-1 text-xs",
                  isOverdue ? "text-red-500" : "text-muted-foreground"
                )}>
                  <Calendar className="h-3 w-3" />
                  <span>{formatDeadline(goal.deadline, t)}</span>
                </div>
              )}
              
              {goal.completed && goal.completedAt && (
                <div className="text-xs text-muted-foreground">
                  {t("goals.completedOn")} {new Date(goal.completedAt).toLocaleDateString()}
                </div>
              )}

              {!goal.deadline && !goal.completed && (
                <div className="text-xs text-muted-foreground">
                  {t("goals.noDeadline")}
                </div>
              )}

              {/* Delete button */}
              <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-muted-foreground hover:text-red-500"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{t("goals.deleteGoal")}</DialogTitle>
                    <DialogDescription>
                      {t("goals.deleteConfirm")}
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button
                      variant="outline"
                      onClick={() => setShowDeleteDialog(false)}
                    >
                      {t("common.cancel")}
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={() => {
                        deleteGoal(goal.id);
                        setShowDeleteDialog(false);
                      }}
                    >
                      {t("common.delete")}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
