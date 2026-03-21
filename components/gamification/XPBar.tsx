"use client";

import { useState, useEffect } from "react";
import { Star, TrendingUp, Zap } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useGamificationStore } from "@/stores/useGamificationStore";
import { cn } from "@/lib/utils";

/**
 * Props for XPBar component
 */
interface XPBarProps {
  /** Show level badge */
  showLevel?: boolean;
  /** Show XP numbers */
  showNumbers?: boolean;
  /** Compact mode */
  compact?: boolean;
  /** Animate XP gains */
  animate?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Display user's XP progress toward next level
 * Includes animated XP gains and level indicators
 */
export function XPBar({
  showLevel = true,
  showNumbers = true,
  compact = false,
  animate = true,
  className,
}: XPBarProps) {
  const { xp, level, xpForNextLevel, xpForCurrentLevel } = useGamificationStore();
  const [displayXP, setDisplayXP] = useState(xp);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Current progress within level
  const currentLevelProgress = xp - xpForCurrentLevel;
  const levelXPRequired = xpForNextLevel - xpForCurrentLevel;
  const progressPercent = levelXPRequired > 0 
    ? Math.min((currentLevelProgress / levelXPRequired) * 100, 100) 
    : 0;
  
  // Animate XP changes
  useEffect(() => {
    if (!animate) {
      setDisplayXP(xp);
      return;
    }
    
    if (xp !== displayXP) {
      setIsAnimating(true);
      const diff = xp - displayXP;
      const steps = 20;
      const stepValue = diff / steps;
      let current = displayXP;
      let step = 0;
      
      const interval = setInterval(() => {
        step++;
        current += stepValue;
        setDisplayXP(Math.round(current));
        
        if (step >= steps) {
          setDisplayXP(xp);
          setIsAnimating(false);
          clearInterval(interval);
        }
      }, 30);
      
      return () => clearInterval(interval);
    }
  }, [xp, displayXP, animate]);
  
  if (compact) {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex items-center gap-1.5">
              <Badge variant="secondary" className="bg-gold/10 text-gold">
                <Star className="mr-1 h-3 w-3" />
                Lv.{level}
              </Badge>
              <div className="h-2 w-16 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full bg-gold progress-fill"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p className="font-medium">Level {level}</p>
            <p className="text-xs text-muted-foreground">
              {currentLevelProgress.toLocaleString()} / {levelXPRequired.toLocaleString()} XP
            </p>
          </TooltipContent>
        </Tooltip>
      </div>
    );
  }
  
  return (
    <div className={cn("w-full space-y-2", className)}>
      {/* Header with level and XP */}
      <div className="flex items-center justify-between">
        {showLevel && (
          <div className="flex items-center gap-2">
            <div
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-dark text-background font-bold",
                isAnimating && "xp-gain"
              )}
            >
              {level}
            </div>
            <div>
              <p className="text-sm font-medium">Level {level}</p>
              <p className="text-xs text-muted-foreground">
                {xpForNextLevel - xp > 0
                  ? `${(xpForNextLevel - xp).toLocaleString()} XP to next level`
                  : "Max level reached!"}
              </p>
            </div>
          </div>
        )}
        
        {showNumbers && (
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-gold" />
            <span
              className={cn(
                "text-lg font-bold text-gold",
                isAnimating && "xp-gain"
              )}
            >
              {displayXP.toLocaleString()}
            </span>
            <span className="text-sm text-muted-foreground">XP</span>
          </div>
        )}
      </div>
      
      {/* Progress bar */}
      <div className="relative">
        <Progress
          value={progressPercent}
          className="h-3 bg-muted"
        />
        
        {/* Level markers */}
        <div className="absolute -top-1 right-0 flex items-center gap-1">
          <TrendingUp className="h-3 w-3 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">
            Lv.{level + 1}
          </span>
        </div>
      </div>
      
      {/* XP breakdown */}
      {showNumbers && (
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>{currentLevelProgress.toLocaleString()} XP</span>
          <span>{levelXPRequired.toLocaleString()} XP</span>
        </div>
      )}
    </div>
  );
}
