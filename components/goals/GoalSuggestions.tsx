"use client";

import {
  Target,
  BookOpen,
  Clock,
  Flame,
  Zap,
  Sparkles,
  Plus,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useGoalsStore, type GoalType, type SuggestedGoal } from "@/stores/useGoalsStore";
import { useGamificationStore } from "@/stores/useGamificationStore";
import { useTranslations } from "next-intl";

interface GoalSuggestionsProps {
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
  xp: "bg-amber-500/10 hover:bg-amber-500/20",
  words: "bg-blue-500/10 hover:bg-blue-500/20",
  lessons: "bg-emerald-500/10 hover:bg-emerald-500/20",
  time: "bg-purple-500/10 hover:bg-purple-500/20",
  streak: "bg-orange-500/10 hover:bg-orange-500/20",
};

function formatTargetDisplay(type: GoalType, target: number, t: ReturnType<typeof useTranslations>): string {
  switch (type) {
    case "time":
      if (target >= 60) {
        const hours = target / 60;
        return `${hours}h`;
      }
      return `${target}m`;
    case "xp":
      return `${target} XP`;
    case "words":
      return `${target} ${t("common.words")}`;
    case "lessons":
      return `${target} ${t("common.lessons")}`;
    case "streak":
      return `${target} ${t("common.days")}`;
    default:
      return `${target}`;
  }
}

export function GoalSuggestions({ className }: GoalSuggestionsProps) {
  const { getSuggestedGoals, addGoal } = useGoalsStore();
  const { stats } = useGamificationStore();
  const t = useTranslations();
  
  const suggestions = getSuggestedGoals(stats.level);

  const handleAddSuggestion = (suggestion: SuggestedGoal) => {
    addGoal({
      type: suggestion.type,
      title: t(`goals.goalTypes.${suggestion.type}`),
      target: suggestion.target,
      deadline: null,
    });
  };

  if (suggestions.length === 0) {
    return null;
  }

  return (
    <Card className={cn("border-border/50", className)}>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Sparkles className="h-5 w-5 text-amber-500" />
          {t("goals.suggested")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {suggestions.map((suggestion, index) => {
            const Icon = GOAL_ICONS[suggestion.type];
            const iconColor = GOAL_COLORS[suggestion.type];
            const bgColor = GOAL_BG_COLORS[suggestion.type];

            return (
              <div
                key={`${suggestion.type}-${suggestion.target}-${index}`}
                className={cn(
                  "flex items-center justify-between rounded-lg p-3 transition-colors",
                  bgColor
                )}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background/80">
                    <Icon className={cn("h-5 w-5", iconColor)} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      {t(`goals.goalTypes.${suggestion.type}`)}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t("goals.target")}: {formatTargetDisplay(suggestion.type, suggestion.target, t)}
                    </p>
                  </div>
                </div>
                
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => handleAddSuggestion(suggestion)}
                  className="shrink-0"
                >
                  <Plus className="mr-1 h-4 w-4" />
                  {t("goals.add")}
                </Button>
              </div>
            );
          })}
        </div>

        {/* Level indicator */}
        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <Badge variant="outline" className="text-xs">
            {t("goals.level")} {stats.level}
          </Badge>
          <span>{t("goals.suggestionsBasedOnLevel")}</span>
        </div>
      </CardContent>
    </Card>
  );
}
