"use client";

import { useState, useEffect, useMemo } from "react";
import { Flame, Calendar, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useGamificationStore } from "@/stores/useGamificationStore";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

/**
 * Props for StreakTracker component
 */
interface StreakTrackerProps {
  /** Show weekly calendar */
  showCalendar?: boolean;
  /** Compact mode */
  compact?: boolean;
  /** Show milestone badges */
  showMilestones?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Streak milestones for rewards
 */
const STREAK_MILESTONES = [
  { days: 3, label: "3 Day Streak", bonus: "1.2x XP" },
  { days: 7, label: "Week Warrior", bonus: "1.5x XP" },
  { days: 14, label: "Two Week Hero", bonus: "1.75x XP" },
  { days: 30, label: "Monthly Master", bonus: "2x XP" },
  { days: 60, label: "Two Month Champion", bonus: "2.25x XP" },
  { days: 100, label: "Century Club", bonus: "2.5x XP" },
  { days: 365, label: "Year Legend", bonus: "3x XP" },
];

/**
 * Track and display user's daily learning streak
 * Includes calendar view and milestone rewards
 */
export function StreakTracker({
  showCalendar = true,
  compact = false,
  showMilestones = true,
  className,
}: StreakTrackerProps) {
  const { stats, streakActive } = useGamificationStore();
  const t = useTranslations();
  
  // Extract stats with safe defaults
  const streak = stats?.streak ?? 0;
  const longestStreak = stats?.longestStreak ?? 0;
  const lastActivityDate = stats?.lastActiveDate ?? null;
  
  // Calculate streak multiplier based on streak length
  const streakMultiplier = useMemo(() => {
    if (streak >= 365) return 3.0;
    if (streak >= 100) return 2.5;
    if (streak >= 60) return 2.25;
    if (streak >= 30) return 2.0;
    if (streak >= 14) return 1.75;
    if (streak >= 7) return 1.5;
    if (streak >= 3) return 1.2;
    return 1.0;
  }, [streak]);
  
  const [weekDays, setWeekDays] = useState<{ date: Date; isActive: boolean }[]>([]);
  
  
  // Generate week calendar
  useEffect(() => {
    const today = new Date();
    const days = [];
    
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      
      // Check if this day is within the streak
      const isActive = lastActivityDate && 
        streak > 0 && 
        i <= streak - 1 &&
        date <= new Date(lastActivityDate);
      
      days.push({ date, isActive: !!isActive });
    }
    
    setWeekDays(days);
  }, [streak, lastActivityDate]);
  
  // Get next milestone
  const nextMilestone = STREAK_MILESTONES.find((m) => m.days > streak);
  const currentMilestone = [...STREAK_MILESTONES].reverse().find((m) => m.days <= streak);
  
  // Format day name
  const getDayName = (date: Date) => {
    return date.toLocaleDateString("en-US", { weekday: "short" }).charAt(0);
  };
  
  if (compact) {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex items-center gap-1.5">
              <Flame
                className={cn(
                  "h-5 w-5 transition-all",
                  streak > 0 ? "text-orange-500 streak-flame" : "text-muted-foreground"
                )}
              />
              <span
                className={cn(
                  "font-bold",
                  streak > 0 ? "text-orange-500" : "text-muted-foreground"
                )}
              >
                {streak}
              </span>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p className="font-medium">{streak} {t('common.days')} {t('gamification.streak')}</p>
            {nextMilestone && (
              <p className="text-xs text-muted-foreground">
                {nextMilestone.days - streak} {t('common.days')} {t('dashboard.daysAway')} {nextMilestone.label}
              </p>
            )}
          </TooltipContent>
        </Tooltip>
      </div>
    );
  }
  
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between text-lg">
          <div className="flex items-center gap-2">
            <Flame
              className={cn(
                "h-6 w-6 transition-all",
                streak > 0 ? "text-orange-500 streak-flame" : "text-muted-foreground"
              )}
            />
            <span>{t('dashboard.dailyStreak')}</span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "text-3xl font-bold",
                streak > 0 ? "text-orange-500" : "text-muted-foreground"
              )}
            >
              {streak}
            </span>
            <span className="text-sm text-muted-foreground">{t('common.days')}</span>
          </div>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Streak status */}
        <div className="flex items-center justify-between">
          <div>
            {streakActive ? (
              <Badge className="bg-green-500/10 text-green-600 dark:text-green-400">
                {t('gamification.active')}
              </Badge>
            ) : streak > 0 ? (
              <Badge variant="destructive">{t('gamification.atRisk')}</Badge>
            ) : (
              <Badge variant="secondary">{t('dashboard.startToday')}</Badge>
            )}
          </div>
          
          {currentMilestone && (
            <Badge variant="outline" className="border-orange-500/50 text-orange-500">
              <Sparkles className="mr-1 h-3 w-3" />
              {currentMilestone.bonus}
            </Badge>
          )}
        </div>
        
        {/* Week calendar */}
        {showCalendar && (
          <div className="flex justify-between gap-1">
            {weekDays.map((day, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-xs text-muted-foreground">
                      {getDayName(day.date)}
                    </span>
                    <div
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all",
                        day.isActive
                          ? "border-orange-500 bg-orange-500/20 text-orange-500"
                          : index === 6
                          ? "border-dashed border-muted-foreground/50"
                          : "border-muted bg-muted/50"
                      )}
                    >
                      {day.isActive ? (
                        <Flame className="h-5 w-5" />
                      ) : (
                        <span className="text-sm text-muted-foreground">
                          {day.date.getDate()}
                        </span>
                      )}
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    {day.date.toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {day.isActive ? t('gamification.practiced') : t('gamification.noActivity')}
                  </p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        )}
        
        {/* Next milestone */}
        {showMilestones && nextMilestone && (
          <div className="rounded-lg bg-muted/50 p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">{nextMilestone.label}</p>
                <p className="text-xs text-muted-foreground">
                  {nextMilestone.days - streak} days away
                </p>
              </div>
              <Badge variant="secondary">{nextMilestone.bonus}</Badge>
            </div>
            
            {/* Progress to next milestone */}
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full bg-orange-500 progress-fill"
                style={{
                  width: `${
                    ((streak - (currentMilestone?.days || 0)) /
                      (nextMilestone.days - (currentMilestone?.days || 0))) *
                    100
                  }%`,
                }}
              />
            </div>
          </div>
        )}
        
        {/* Stats */}
        <div className="flex items-center justify-between border-t border-border pt-3">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{t('dashboard.longestStreak')}</span>
          </div>
          <span className="font-semibold">{longestStreak} {t('common.days')}</span>
        </div>
      </CardContent>
    </Card>
  );
}
