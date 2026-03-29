"use client";

import { useTranslations } from "next-intl";
import { Trophy, ChevronUp, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { type LeagueTier, LEAGUES } from "@/stores/useLeaderboardStore";

interface LeagueCardProps {
  league: LeagueTier;
  xp: number;
  rank: number;
  progress: {
    current: number;
    required: number;
    percentage: number;
  };
  className?: string;
}

const LEAGUE_STYLES: Record<LeagueTier, { bg: string; border: string; text: string; glow: string }> = {
  bronze: {
    bg: "bg-gradient-to-br from-amber-900/20 to-orange-800/10",
    border: "border-amber-700/50",
    text: "text-amber-600",
    glow: "shadow-amber-500/20",
  },
  silver: {
    bg: "bg-gradient-to-br from-gray-400/20 to-slate-300/10",
    border: "border-gray-400/50",
    text: "text-gray-400",
    glow: "shadow-gray-400/20",
  },
  gold: {
    bg: "bg-gradient-to-br from-yellow-500/20 to-amber-400/10",
    border: "border-yellow-500/50",
    text: "text-yellow-500",
    glow: "shadow-yellow-500/30",
  },
  platinum: {
    bg: "bg-gradient-to-br from-purple-500/20 to-blue-500/10",
    border: "border-purple-400/50",
    text: "text-purple-400",
    glow: "shadow-purple-500/30",
  },
  diamond: {
    bg: "bg-gradient-to-br from-cyan-400/20 to-blue-300/10",
    border: "border-cyan-400/50",
    text: "text-cyan-400",
    glow: "shadow-cyan-400/40",
  },
};

export function LeagueCard({ league, xp, rank, progress, className }: LeagueCardProps) {
  const t = useTranslations("leaderboard");
  const leagueData = LEAGUES[league];
  const styles = LEAGUE_STYLES[league];
  
  const nextLeagueTier = Object.keys(LEAGUES).find(
    (key) => LEAGUES[key as LeagueTier].minXP > xp
  ) as LeagueTier | undefined;
  
  const nextLeague = nextLeagueTier ? LEAGUES[nextLeagueTier] : null;
  const isMaxLeague = league === "diamond";

  return (
    <Card
      className={cn(
        "relative overflow-hidden border-2 transition-all duration-300",
        styles.bg,
        styles.border,
        `hover:shadow-lg ${styles.glow}`,
        className
      )}
    >
      {/* Animated sparkle effect for Diamond league */}
      {isMaxLeague && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -right-4 h-24 w-24 animate-pulse rounded-full bg-cyan-400/10 blur-2xl" />
          <div className="absolute -bottom-4 -left-4 h-24 w-24 animate-pulse rounded-full bg-blue-400/10 blur-2xl delay-500" />
        </div>
      )}

      <CardHeader className="relative pb-2">
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <span className="text-3xl">{leagueData.icon}</span>
            <div>
              <span className={cn("text-lg font-bold", styles.text)}>
                {t(`leagues.${league}`)}
              </span>
              <p className="text-xs text-muted-foreground font-normal">
                {t("league")}
              </p>
            </div>
          </span>
          <Badge
            variant="secondary"
            className={cn(
              "text-lg px-3 py-1",
              styles.text,
              "bg-background/50 backdrop-blur-sm"
            )}
          >
            #{rank}
          </Badge>
        </CardTitle>
      </CardHeader>

      <CardContent className="relative space-y-4">
        {/* XP Display */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-foreground">
              {xp.toLocaleString()}
            </p>
            <p className="text-sm text-muted-foreground">{t("totalXP")}</p>
          </div>
          {!isMaxLeague && nextLeague && (
            <div className="text-right">
              <p className={cn("text-lg font-semibold flex items-center gap-1", styles.text)}>
                <ChevronUp className="h-4 w-4" />
                {(nextLeague.minXP - xp).toLocaleString()}
              </p>
              <p className="text-xs text-muted-foreground">{t("toNextLeague")}</p>
            </div>
          )}
          {isMaxLeague && (
            <div className="flex items-center gap-1 text-cyan-400">
              <Sparkles className="h-5 w-5 animate-pulse" />
              <span className="text-sm font-medium">{t("maxLeague")}</span>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        {!isMaxLeague && (
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{leagueData.name}</span>
              <span>{nextLeague?.name}</span>
            </div>
            <div className="relative">
              <Progress
                value={progress.percentage}
                className="h-3 bg-background/50"
              />
              <div
                className={cn(
                  "absolute top-0 left-0 h-3 rounded-full transition-all duration-500",
                  league === "bronze" && "bg-gradient-to-r from-amber-700 to-amber-500",
                  league === "silver" && "bg-gradient-to-r from-gray-500 to-gray-300",
                  league === "gold" && "bg-gradient-to-r from-yellow-600 to-yellow-400",
                  league === "platinum" && "bg-gradient-to-r from-purple-600 to-purple-400"
                )}
                style={{ width: `${progress.percentage}%` }}
              />
            </div>
            <p className="text-center text-xs text-muted-foreground">
              {progress.current.toLocaleString()} / {progress.required.toLocaleString()} XP
            </p>
          </div>
        )}

        {/* League Benefits Preview */}
        <div className="rounded-lg bg-background/30 p-3 backdrop-blur-sm">
          <p className="text-xs font-medium text-muted-foreground mb-2">
            {t("leagueBenefits")}
          </p>
          <div className="flex flex-wrap gap-1">
            {league !== "bronze" && (
              <Badge variant="outline" className="text-xs">
                +{league === "silver" ? "10" : league === "gold" ? "20" : league === "platinum" ? "30" : "50"}% XP {t("bonus")}
              </Badge>
            )}
            {(league === "gold" || league === "platinum" || league === "diamond") && (
              <Badge variant="outline" className="text-xs">
                {t("exclusiveBadge")}
              </Badge>
            )}
            {(league === "platinum" || league === "diamond") && (
              <Badge variant="outline" className="text-xs">
                {t("prioritySupport")}
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
