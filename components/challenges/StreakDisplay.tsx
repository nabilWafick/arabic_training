/**
 * Streak Display Component
 * Shows current streak with flame animation and milestone progress
 */

'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Flame, Trophy, Target, Zap } from 'lucide-react';
import { useChallengeStore } from '@/stores/useChallengeStore';
import { STREAK_MILESTONES } from '@/data/challenges/challenge-templates';
import { cn } from '@/lib/utils';

interface StreakDisplayProps {
  variant?: 'default' | 'compact' | 'large';
  showMilestones?: boolean;
  className?: string;
}

export function StreakDisplay({ 
  variant = 'default',
  showMilestones = true,
  className 
}: StreakDisplayProps) {
  const t = useTranslations('challenges');
  const { currentStreak, bestStreak } = useChallengeStore();
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Trigger animation on streak change
  useEffect(() => {
    if (currentStreak > 0) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [currentStreak]);

  // Get next milestone
  const nextMilestone = STREAK_MILESTONES.find(m => m.days > currentStreak);
  const progress = nextMilestone 
    ? (currentStreak / nextMilestone.days) * 100 
    : 100;

  if (variant === 'compact') {
    return (
      <div className={cn('flex items-center gap-2', className)}>
        <motion.div
          animate={isAnimating ? { scale: [1, 1.2, 1] } : {}}
          className="flex items-center gap-1"
        >
          <Flame 
            className={cn(
              'h-5 w-5',
              currentStreak > 0 ? 'text-orange-500' : 'text-gray-400'
            )} 
          />
          <span className="font-semibold text-foreground">
            {currentStreak}
          </span>
        </motion.div>
      </div>
    );
  }

  if (variant === 'large') {
    return (
      <div className={cn('relative p-8 rounded-2xl bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-yellow-500/10 border border-orange-500/20', className)}>
        {/* Background glow effect */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10">
          {/* Streak count */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div
              animate={isAnimating ? { 
                scale: [1, 1.3, 1],
                rotate: [0, -10, 10, 0]
              } : {}}
              transition={{ duration: 0.5 }}
            >
              <Flame className="h-16 w-16 text-orange-500 drop-shadow-lg" />
            </motion.div>
            <div className="text-center">
              <motion.span 
                className="text-6xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent"
                animate={isAnimating ? { scale: [1, 1.1, 1] } : {}}
              >
                {currentStreak}
              </motion.span>
              <p className="text-lg text-muted-foreground">
                {t('dayStreak', { count: currentStreak })}
              </p>
            </div>
          </div>

          {/* Best streak */}
          <div className="flex items-center justify-center gap-2 mb-6 text-sm text-muted-foreground">
            <Trophy className="h-4 w-4 text-yellow-500" />
            <span>{t('bestStreak')}: {bestStreak} {t('days')}</span>
          </div>

          {/* Next milestone progress */}
          {nextMilestone && showMilestones && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{t('nextMilestone')}</span>
                <span className="flex items-center gap-1">
                  <span className="text-lg">{nextMilestone.icon}</span>
                  <span className="font-medium">{nextMilestone.days} {t('days')}</span>
                </span>
              </div>
              <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${nextMilestone.color}, #f59e0b)`,
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                />
              </div>
              <p className="text-xs text-center text-muted-foreground">
                {nextMilestone.days - currentStreak} {t('daysToGo')}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className={cn('p-4 rounded-xl bg-card border', className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.div
            animate={isAnimating ? { scale: [1, 1.2, 1] } : {}}
            className={cn(
              'p-2 rounded-lg',
              currentStreak > 0 
                ? 'bg-orange-500/10 text-orange-500' 
                : 'bg-muted text-muted-foreground'
            )}
          >
            <Flame className="h-6 w-6" />
          </motion.div>
          <div>
            <p className="text-2xl font-bold">{currentStreak}</p>
            <p className="text-sm text-muted-foreground">
              {t('dayStreak', { count: currentStreak })}
            </p>
          </div>
        </div>
        
        {nextMilestone && (
          <div className="text-right">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Target className="h-4 w-4" />
              <span>{nextMilestone.days}</span>
            </div>
            <div className="w-20 h-2 bg-muted rounded-full mt-1 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Milestone Badge Component
 */
interface MilestoneBadgeProps {
  milestone: typeof STREAK_MILESTONES[0];
  unlocked: boolean;
  current?: boolean;
}

export function MilestoneBadge({ milestone, unlocked, current }: MilestoneBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn(
        'relative flex flex-col items-center gap-1 p-3 rounded-lg transition-all',
        unlocked 
          ? 'bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30'
          : 'bg-muted/50 opacity-50',
        current && 'ring-2 ring-amber-500 ring-offset-2 ring-offset-background'
      )}
    >
      <span className="text-2xl">{milestone.icon}</span>
      <span className="text-xs font-medium">{milestone.days}d</span>
      {unlocked && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-1 -right-1 bg-green-500 rounded-full p-0.5"
        >
          <Zap className="h-3 w-3 text-white" />
        </motion.div>
      )}
    </motion.div>
  );
}
