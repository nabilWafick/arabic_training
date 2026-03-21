"use client";

import { useState } from "react";
import { Trophy, Lock, Check, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";
import { useGamificationStore } from "@/stores/useGamificationStore";
import { cn } from "@/lib/utils";
import type { Achievement } from "@/types";

/**
 * Props for AchievementBadge component
 */
interface AchievementBadgeProps {
  /** Achievement data */
  achievement: Achievement;
  /** Current progress (for progressive achievements) */
  progress?: number;
  /** Total required (for progressive achievements) */
  total?: number;
  /** Show details on click */
  showDetails?: boolean;
  /** Size variant */
  size?: "sm" | "md" | "lg";
  /** Additional CSS classes */
  className?: string;
}

/**
 * Display an achievement badge with unlock status
 * Includes animation for newly unlocked achievements
 */
export function AchievementBadge({
  achievement,
  progress,
  total,
  showDetails = true,
  size = "md",
  className,
}: AchievementBadgeProps) {
  const [showDialog, setShowDialog] = useState(false);
  const { achievements: userAchievements } = useGamificationStore();
  
  const isUnlocked = userAchievements.some((a) => a.id === achievement.id);
  const userAchievement = userAchievements.find((a) => a.id === achievement.id);
  const progressPercent = total && progress ? (progress / total) * 100 : 0;
  
  const sizeClasses = {
    sm: "h-12 w-12",
    md: "h-16 w-16",
    lg: "h-20 w-20",
  };
  
  const iconSizeClasses = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-10 w-10",
  };
  
  const badgeContent = (
    <div
      className={cn(
        "relative flex flex-col items-center gap-2",
        showDetails && "cursor-pointer",
        className
      )}
      onClick={() => showDetails && setShowDialog(true)}
    >
      {/* Badge icon */}
      <div
        className={cn(
          "relative flex items-center justify-center rounded-full border-2 transition-all",
          sizeClasses[size],
          isUnlocked
            ? "border-gold bg-gradient-to-br from-gold/20 to-gold/5"
            : "border-muted bg-muted/50 grayscale",
          isUnlocked && "hover:scale-105 hover:shadow-lg hover:shadow-gold/20"
        )}
      >
        {/* Icon or emoji */}
        <span
          className={cn(
            "text-2xl",
            size === "sm" && "text-xl",
            size === "lg" && "text-3xl",
            !isUnlocked && "opacity-40"
          )}
        >
          {achievement.icon}
        </span>
        
        {/* Lock overlay */}
        {!isUnlocked && (
          <div className="absolute inset-0 flex items-center justify-center rounded-full bg-background/60">
            <Lock className="h-4 w-4 text-muted-foreground" />
          </div>
        )}
        
        {/* Unlocked indicator */}
        {isUnlocked && (
          <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
            <Check className="h-3 w-3 text-white" />
          </div>
        )}
      </div>
      
      {/* Achievement name */}
      <div className="text-center">
        <p
          className={cn(
            "text-sm font-medium",
            !isUnlocked && "text-muted-foreground"
          )}
        >
          {achievement.name}
        </p>
        
        {/* Progress bar (for progressive achievements) */}
        {total && progress !== undefined && !isUnlocked && (
          <div className="mt-1 w-16">
            <Progress value={progressPercent} className="h-1" />
            <p className="mt-0.5 text-xs text-muted-foreground">
              {progress}/{total}
            </p>
          </div>
        )}
      </div>
    </div>
  );
  
  if (!showDetails) {
    return badgeContent;
  }
  
  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DialogTrigger asChild>{badgeContent}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <span className="text-4xl">{achievement.icon}</span>
            <div>
              <span>{achievement.name}</span>
              {isUnlocked && (
                <Badge className="ml-2 bg-green-500">Unlocked</Badge>
              )}
            </div>
          </DialogTitle>
          <DialogDescription className="pt-2">
            {achievement.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 pt-4">
          {/* XP reward */}
          <div className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-gold" />
              <span className="font-medium">XP Reward</span>
            </div>
            <span className="text-lg font-bold text-gold">
              +{achievement.xpReward} XP
            </span>
          </div>
          
          {/* Unlock date */}
          {isUnlocked && userAchievement?.unlockedAt && (
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Unlocked on</span>
              <span>
                {new Date(userAchievement.unlockedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          )}
          
          {/* Progress (if not unlocked) */}
          {!isUnlocked && total && progress !== undefined && (
            <div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span>
                  {progress} / {total}
                </span>
              </div>
              <Progress value={progressPercent} className="mt-2 h-2" />
            </div>
          )}
          
          {/* Rarity */}
          {achievement.rarity && (
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Rarity</span>
              <Badge
                variant="outline"
                className={cn(
                  achievement.rarity === "common" && "border-gray-400 text-gray-600",
                  achievement.rarity === "rare" && "border-blue-400 text-blue-600",
                  achievement.rarity === "epic" && "border-purple-400 text-purple-600",
                  achievement.rarity === "legendary" && "border-orange-400 text-orange-600"
                )}
              >
                {achievement.rarity.charAt(0).toUpperCase() + achievement.rarity.slice(1)}
              </Badge>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

/**
 * Props for AchievementsGrid component
 */
interface AchievementsGridProps {
  /** Achievements to display */
  achievements: Achievement[];
  /** Columns count */
  columns?: 3 | 4 | 5 | 6;
  /** Show locked achievements */
  showLocked?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Grid display of multiple achievements
 */
export function AchievementsGrid({
  achievements,
  columns = 4,
  showLocked = true,
  className,
}: AchievementsGridProps) {
  const { achievements: userAchievements } = useGamificationStore();
  
  const filteredAchievements = showLocked
    ? achievements
    : achievements.filter((a) =>
        userAchievements.some((ua) => ua.id === a.id)
      );
  
  const gridCols = {
    3: "grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-4",
    5: "grid-cols-2 sm:grid-cols-5",
    6: "grid-cols-3 sm:grid-cols-6",
  };
  
  return (
    <div className={cn("grid gap-4", gridCols[columns], className)}>
      {filteredAchievements.map((achievement) => (
        <AchievementBadge key={achievement.id} achievement={achievement} />
      ))}
    </div>
  );
}
