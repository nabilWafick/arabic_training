/**
 * SRS Review Page
 * Spaced repetition vocabulary review with SM-2 algorithm
 */

'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import {
  ChevronLeft,
  RotateCcw,
  Check,
  X,
  Sparkles,
  Brain,
  Clock,
  Target,
  TrendingUp,
  Calendar,
  ArrowRight,
  Volume2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { useSRSStore } from '@/stores/useSRSStore';
import { useAudioStore } from '@/stores/useAudioStore';
import { useGamificationStore } from '@/stores/useGamificationStore';
import type { QualityRating, SRSItem } from '@/lib/srs/algorithm';
import { getTimeUntilReview } from '@/lib/srs/algorithm';

type ReviewState = 'idle' | 'reviewing' | 'showing-answer' | 'complete';

export default function ReviewPage() {
  const t = useTranslations('review');
  const tCommon = useTranslations('common');
  
  const {
    initializeItems,
    getDueCount,
    getStats,
    startReviewSession,
    endReviewSession,
    getNextReviewItem,
    reviewItem,
  } = useSRSStore();
  
  const { speak, isPlaying, stop } = useAudioStore();
  const { addXP, incrementStat } = useGamificationStore();
  
  const [reviewState, setReviewState] = useState<ReviewState>('idle');
  const [currentItem, setCurrentItem] = useState<SRSItem | null>(null);
  const [sessionResults, setSessionResults] = useState<{
    reviewed: number;
    correct: number;
    incorrect: number;
    duration: number;
  } | null>(null);
  const [totalInSession, setTotalInSession] = useState(0);
  const [reviewedInSession, setReviewedInSession] = useState(0);
  
  const stats = getStats();
  const dueCount = getDueCount();
  
  // Initialize SRS items on mount
  useEffect(() => {
    initializeItems();
  }, [initializeItems]);
  
  const handleStartReview = useCallback(() => {
    startReviewSession();
    setTotalInSession(dueCount);
    setReviewedInSession(0);
    const item = getNextReviewItem();
    if (item) {
      setCurrentItem(item);
      setReviewState('reviewing');
    }
  }, [startReviewSession, dueCount, getNextReviewItem]);
  
  const handleShowAnswer = () => {
    setReviewState('showing-answer');
  };
  
  const handleRate = (quality: QualityRating) => {
    if (!currentItem) return;
    
    reviewItem(currentItem.id, quality);
    setReviewedInSession(r => r + 1);
    
    // Award XP
    if (quality >= 3) {
      const xp = quality === 5 ? 15 : quality === 4 ? 10 : 5;
      addXP(xp);
    }
    incrementStat('exercisesCompleted');
    
    // Get next item or complete
    const nextItem = getNextReviewItem();
    if (nextItem) {
      setCurrentItem(nextItem);
      setReviewState('reviewing');
    } else {
      const results = endReviewSession();
      setSessionResults(results);
      setReviewState('complete');
    }
  };
  
  const handlePlayAudio = () => {
    if (!currentItem) return;
    if (isPlaying) {
      stop();
    } else {
      speak(currentItem.wordAr);
    }
  };
  
  const handleRestartSession = () => {
    setReviewState('idle');
    setCurrentItem(null);
    setSessionResults(null);
  };
  
  // Idle state - show stats and start button
  if (reviewState === 'idle') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-cream-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-2xl mx-auto p-4 pb-24">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm">
                <ChevronLeft className="w-4 h-4 mr-1" />
                {tCommon('back')}
              </Button>
            </Link>
            <h1 className="text-xl font-bold">{t('title')}</h1>
            <div className="w-20" />
          </div>
          
          {/* Stats overview */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <Card>
              <CardContent className="p-4 text-center">
                <Calendar className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="text-3xl font-bold text-primary">{stats.dueToday}</div>
                <div className="text-sm text-muted-foreground">{t('dueToday')}</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Target className="w-8 h-8 mx-auto mb-2 text-green-500" />
                <div className="text-3xl font-bold text-green-500">{stats.retentionRate}%</div>
                <div className="text-sm text-muted-foreground">{t('retention')}</div>
              </CardContent>
            </Card>
          </div>
          
          {/* Detailed stats */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5" />
                {t('stats')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">{t('mastered')}</span>
                <Badge variant="outline" className="text-green-600">
                  {stats.mastered} {t('words')}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">{t('learning')}</span>
                <Badge variant="outline" className="text-amber-600">
                  {stats.learning} {t('words')}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">{t('new')}</span>
                <Badge variant="outline" className="text-blue-600">
                  {stats.newItems} {t('words')}
                </Badge>
              </div>
              <div className="pt-2 border-t">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{t('total')}</span>
                  <span className="font-bold">{stats.total}</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Start review button */}
          {dueCount > 0 ? (
            <Button
              onClick={handleStartReview}
              className="w-full h-14 text-lg"
              size="lg"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              {t('startReview')} ({dueCount})
            </Button>
          ) : (
            <Card className="bg-muted/50">
              <CardContent className="p-8 text-center">
                <Check className="w-16 h-16 mx-auto mb-4 text-green-500" />
                <h3 className="text-lg font-semibold mb-2">{t('allDone')}</h3>
                <p className="text-muted-foreground">{t('comeBackLater')}</p>
                <p className="text-sm text-muted-foreground mt-2">
                  {t('nextReview')}: {stats.dueTomorrow} {t('tomorrow')}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    );
  }
  
  // Review in progress
  if ((reviewState === 'reviewing' || reviewState === 'showing-answer') && currentItem) {
    const progress = totalInSession > 0 ? (reviewedInSession / totalInSession) * 100 : 0;
    
    return (
      <div className="min-h-screen bg-gradient-to-b from-cream-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-2xl mx-auto p-4 pb-24">
          {/* Header with progress */}
          <div className="flex items-center justify-between mb-4">
            <Button variant="ghost" size="sm" onClick={handleRestartSession}>
              <X className="w-4 h-4 mr-1" />
              {t('endSession')}
            </Button>
            <span className="text-sm text-muted-foreground">
              {reviewedInSession + 1} / {totalInSession}
            </span>
          </div>
          
          <Progress value={progress} className="h-2 mb-8" />
          
          {/* Flashcard */}
          <motion.div
            key={currentItem.id + reviewState}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="perspective-1000"
          >
            <Card className="overflow-hidden min-h-[400px] flex flex-col">
              <CardContent className="flex-1 flex flex-col items-center justify-center p-8">
                {/* Arabic word */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-center mb-8"
                >
                  <p className="text-6xl font-arabic mb-4" dir="rtl">
                    {currentItem.wordAr}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handlePlayAudio}
                    className="text-muted-foreground"
                  >
                    <Volume2 className="w-4 h-4 mr-2" />
                    {currentItem.word}
                  </Button>
                </motion.div>
                
                {/* Answer area */}
                <AnimatePresence mode="wait">
                  {reviewState === 'showing-answer' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="text-center"
                    >
                      <div className="h-px w-32 bg-border mx-auto mb-6" />
                      <p className="text-2xl font-medium">
                        {currentItem.translation}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
              
              {/* Actions */}
              <div className="p-6 bg-muted/30 border-t">
                {reviewState === 'reviewing' ? (
                  <Button
                    onClick={handleShowAnswer}
                    className="w-full h-12"
                    variant="outline"
                  >
                    {tCommon('showAnswer')}
                  </Button>
                ) : (
                  <div className="space-y-3">
                    <p className="text-center text-sm text-muted-foreground mb-3">
                      {t('howWell')}
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      <Button
                        variant="outline"
                        onClick={() => handleRate(1)}
                        className="flex-col h-16 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                      >
                        <X className="w-5 h-5 mb-1" />
                        <span className="text-xs">{t('forgot')}</span>
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => handleRate(3)}
                        className="flex-col h-16 text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-900/20"
                      >
                        <span className="text-lg mb-1">🤔</span>
                        <span className="text-xs">{t('hard')}</span>
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => handleRate(5)}
                        className="flex-col h-16 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20"
                      >
                        <Check className="w-5 h-5 mb-1" />
                        <span className="text-xs">{t('easy')}</span>
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }
  
  // Completion screen
  if (reviewState === 'complete' && sessionResults) {
    const accuracy = sessionResults.reviewed > 0
      ? Math.round((sessionResults.correct / sessionResults.reviewed) * 100)
      : 0;
    const minutes = Math.round(sessionResults.duration / 60000);
    
    return (
      <div className="min-h-screen bg-gradient-to-b from-cream-50 to-white dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md w-full"
        >
          <Card className="text-center overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-green-400 to-emerald-500" />
            <CardContent className="p-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', bounce: 0.5, delay: 0.2 }}
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center"
              >
                <Check className="w-10 h-10 text-green-500" />
              </motion.div>
              
              <h2 className="text-2xl font-bold mb-2">{t('sessionComplete')}</h2>
              <p className="text-muted-foreground mb-6">{t('greatJob')}</p>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-muted/50 rounded-xl p-4">
                  <Target className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="text-xl font-bold">{sessionResults.reviewed}</div>
                  <div className="text-xs text-muted-foreground">{t('reviewed')}</div>
                </div>
                <div className="bg-muted/50 rounded-xl p-4">
                  <TrendingUp className="w-6 h-6 mx-auto mb-2 text-green-500" />
                  <div className="text-xl font-bold">{accuracy}%</div>
                  <div className="text-xs text-muted-foreground">{t('accuracy')}</div>
                </div>
                <div className="bg-muted/50 rounded-xl p-4">
                  <Clock className="w-6 h-6 mx-auto mb-2 text-amber-500" />
                  <div className="text-xl font-bold">{minutes || '<1'}</div>
                  <div className="text-xs text-muted-foreground">{t('minutes')}</div>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Link href="/dashboard" className="flex-1">
                  <Button variant="outline" className="w-full">
                    {tCommon('done')}
                  </Button>
                </Link>
                {getDueCount() > 0 && (
                  <Button onClick={handleRestartSession} className="flex-1">
                    {t('reviewMore')}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }
  
  return null;
}
