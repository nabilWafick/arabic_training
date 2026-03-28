/**
 * Daily Challenges Hub Page
 * Main page for daily challenges, streak tracking, and challenge history
 */

'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { 
  Trophy, 
  Flame, 
  Calendar, 
  ChevronRight,
  History,
  Target,
  Award
} from 'lucide-react';
import { useChallengeStore } from '@/stores/useChallengeStore';
import { useProgressStore } from '@/stores/useProgressStore';
import { 
  StreakDisplay, 
  ChallengeCalendar,
  DailyChallengeCard,
  MilestoneBadge
} from '@/components/challenges';
import { STREAK_MILESTONES } from '@/data/challenges/challenge-templates';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function ChallengesPage() {
  const t = useTranslations('challenges');
  const { 
    checkAndUpdateStreak, 
    getChallengeHistory, 
    currentStreak,
    bestStreak,
    milestonesUnlocked 
  } = useChallengeStore();
  const { currentPhaseId } = useProgressStore();

  // Check streak on mount
  useEffect(() => {
    checkAndUpdateStreak();
  }, [checkAndUpdateStreak]);

  // Get recent history
  const recentHistory = getChallengeHistory(5);

  // Calculate stats
  const totalChallenges = getChallengeHistory().length;
  const averageAccuracy = recentHistory.length > 0
    ? Math.round(recentHistory.reduce((sum, c) => sum + c.accuracy, 0) / recentHistory.length)
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">
            {t('title')}
          </h1>
          <p className="text-muted-foreground">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Today's Challenge Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <DailyChallengeCard />
            </motion.div>

            {/* Streak Display - Large */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <StreakDisplay variant="large" />
            </motion.div>

            {/* Milestones */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-xl bg-card border"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <Award className="h-5 w-5 text-gold" />
                  {t('milestones')}
                </h2>
                <span className="text-sm text-muted-foreground">
                  {milestonesUnlocked.length}/{STREAK_MILESTONES.length} {t('unlocked')}
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {STREAK_MILESTONES.map(milestone => (
                  <MilestoneBadge
                    key={milestone.days}
                    milestone={milestone}
                    unlocked={milestonesUnlocked.includes(milestone.days)}
                    current={currentStreak === milestone.days}
                  />
                ))}
              </div>
            </motion.div>

            {/* Recent History */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-xl bg-card border"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <History className="h-5 w-5 text-muted-foreground" />
                  {t('recentHistory')}
                </h2>
                <Link href="/challenges/history">
                  <Button variant="ghost" size="sm">
                    {t('viewAll')}
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </div>

              {recentHistory.length > 0 ? (
                <div className="space-y-3">
                  {recentHistory.map((challenge, index) => (
                    <motion.div
                      key={challenge.date}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                          <Target className="h-5 w-5 text-green-500" />
                        </div>
                        <div>
                          <p className="font-medium">{t('phase')} {challenge.phaseId}</p>
                          <p className="text-sm text-muted-foreground">
                            {new Date(challenge.date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-green-600">
                          {challenge.accuracy}%
                        </p>
                        <p className="text-sm text-muted-foreground">
                          +{challenge.xpEarned} XP
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <Calendar className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p>{t('noHistory')}</p>
                  <p className="text-sm">{t('startFirstChallenge')}</p>
                </div>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-xl bg-card border"
            >
              <h2 className="text-lg font-semibold mb-4">{t('yourStats')}</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Flame className="h-5 w-5 text-orange-500" />
                    <span className="text-muted-foreground">{t('currentStreak')}</span>
                  </div>
                  <span className="font-bold text-lg">{currentStreak}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-yellow-500" />
                    <span className="text-muted-foreground">{t('bestStreak')}</span>
                  </div>
                  <span className="font-bold text-lg">{bestStreak}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-blue-500" />
                    <span className="text-muted-foreground">{t('totalChallenges')}</span>
                  </div>
                  <span className="font-bold text-lg">{totalChallenges}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-green-500" />
                    <span className="text-muted-foreground">{t('avgAccuracy')}</span>
                  </div>
                  <span className="font-bold text-lg">{averageAccuracy}%</span>
                </div>
              </div>
            </motion.div>

            {/* Calendar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <ChallengeCalendar />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
