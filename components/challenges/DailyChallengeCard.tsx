/**
 * Daily Challenge Card Component
 * Shows today's challenge with progress and start button
 */

'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { 
  Calendar, 
  Target, 
  Clock, 
  Zap, 
  Check, 
  Play, 
  Pencil, 
  Volume2, 
  Mic, 
  BookOpen,
  Star
} from 'lucide-react';
import { useChallengeStore } from '@/stores/useChallengeStore';
import { useProgressStore } from '@/stores/useProgressStore';
import { generateDailyChallenge } from '@/data/challenges';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface DailyChallengeCardProps {
  className?: string;
  onStart?: () => void;
}

const PRACTICE_ICONS = {
  writing: Pencil,
  listening: Volume2,
  speaking: Mic,
  vocabulary: BookOpen,
};

export function DailyChallengeCard({ className, onStart }: DailyChallengeCardProps) {
  const t = useTranslations('challenges');
  const router = useRouter();
  
  const { currentPhaseId } = useProgressStore();
  const { 
    todayChallengeStarted, 
    todayChallengeCompleted,
    todayChallengeProgress,
    startTodayChallenge,
    currentStreak,
  } = useChallengeStore();

  // Generate today's challenge
  const challenge = useMemo(
    () => generateDailyChallenge(currentPhaseId as 1 | 2 | 3 | 4 | 5),
    [currentPhaseId]
  );

  // Calculate exercise breakdown
  const exerciseBreakdown = useMemo(() => {
    const breakdown: Record<string, number> = {};
    for (const ex of challenge.exercises) {
      breakdown[ex.type] = (breakdown[ex.type] || 0) + 1;
    }
    return breakdown;
  }, [challenge.exercises]);

  // Progress percentage
  const progressPercent = todayChallengeStarted
    ? (todayChallengeProgress.exercisesCompleted / challenge.exercises.length) * 100
    : 0;

  // Handle start challenge
  const handleStart = () => {
    startTodayChallenge();
    if (onStart) {
      onStart();
    } else {
      router.push(`/challenges/play`);
    }
  };

  // Completed state
  if (todayChallengeCompleted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={cn(
          'relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 p-6',
          className
        )}
      >
        {/* Celebration background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-green-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-4"
          >
            <Check className="h-8 w-8 text-green-500" />
          </motion.div>
          <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-2">
            {t('challengeCompleted')}
          </h3>
          <p className="text-muted-foreground mb-4">
            {t('comeBackTomorrow')}
          </p>
          <div className="flex items-center justify-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" />
            <span className="font-semibold">
              +{challenge.totalPoints * challenge.bonusMultiplier} XP
            </span>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        'relative overflow-hidden rounded-2xl bg-gradient-to-br from-gold/10 via-card to-gold-dark/5 border border-gold/20 p-6',
        className
      )}
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold-dark/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Calendar className="h-5 w-5 text-gold" />
              <span className="text-sm font-medium text-muted-foreground">
                {t('todaysChallenge')}
              </span>
            </div>
            <h3 className="text-xl font-bold">{t('dailyChallenge')}</h3>
          </div>
          <Badge variant="outline" className="bg-gold/10 border-gold/30 text-gold">
            2x XP
          </Badge>
        </div>

        {/* Exercise breakdown */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {Object.entries(exerciseBreakdown).map(([type, count]) => {
            const Icon = PRACTICE_ICONS[type as keyof typeof PRACTICE_ICONS];
            return (
              <div
                key={type}
                className="flex flex-col items-center gap-1 p-2 rounded-lg bg-background/50"
              >
                <Icon className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">{count}</span>
              </div>
            );
          })}
        </div>

        {/* Progress (if started) */}
        {todayChallengeStarted && (
          <div className="mb-4">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-muted-foreground">{t('progress')}</span>
              <span className="font-medium">
                {todayChallengeProgress.exercisesCompleted}/{challenge.exercises.length}
              </span>
            </div>
            <Progress value={progressPercent} className="h-2" />
          </div>
        )}

        {/* Stats */}
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Target className="h-4 w-4" />
            <span>{challenge.exercises.length} {t('exercises')}</span>
          </div>
          <div className="flex items-center gap-1">
            <Zap className="h-4 w-4 text-gold" />
            <span>{challenge.totalPoints * challenge.bonusMultiplier} XP</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>~15 min</span>
          </div>
        </div>

        {/* Start button */}
        <Button
          onClick={handleStart}
          className="w-full bg-gradient-to-r from-gold to-gold-dark hover:from-gold-dark hover:to-gold text-white"
          size="lg"
        >
          {todayChallengeStarted ? (
            <>
              <Play className="h-5 w-5 mr-2" />
              {t('continueChallenge')}
            </>
          ) : (
            <>
              <Play className="h-5 w-5 mr-2" />
              {t('startChallenge')}
            </>
          )}
        </Button>

        {/* Streak bonus hint */}
        {currentStreak > 0 && (
          <p className="text-xs text-center text-muted-foreground mt-3">
            🔥 {t('keepStreak', { days: currentStreak + 1 })}
          </p>
        )}
      </div>
    </motion.div>
  );
}
