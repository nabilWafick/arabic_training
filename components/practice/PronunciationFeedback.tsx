/**
 * Pronunciation Feedback Component
 * Displays detailed pronunciation analysis with visual indicators
 */

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { 
  Check, 
  AlertCircle, 
  TrendingUp, 
  Mic, 
  Target,
  Zap,
  Clock
} from 'lucide-react';
import type { PronunciationScore, PronunciationFeedback } from '@/lib/pronunciation/scoring';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface PronunciationFeedbackDisplayProps {
  score: PronunciationScore | null;
  isListening: boolean;
  transcript: string;
  expected: string;
  className?: string;
}

export function PronunciationFeedbackDisplay({
  score,
  isListening,
  transcript,
  expected,
  className,
}: PronunciationFeedbackDisplayProps) {
  const t = useTranslations('practice');
  const locale = useLocale();

  const getFeedbackMessage = (feedback: PronunciationFeedback) => {
    switch (locale) {
      case 'ar':
        return feedback.messageAr;
      case 'fr':
        return feedback.messageFr;
      default:
        return feedback.message;
    }
  };

  const getScoreColor = (value: number) => {
    if (value >= 90) return 'text-green-500';
    if (value >= 70) return 'text-yellow-500';
    if (value >= 50) return 'text-orange-500';
    return 'text-red-500';
  };

  const getScoreBg = (value: number) => {
    if (value >= 90) return 'bg-green-500';
    if (value >= 70) return 'bg-yellow-500';
    if (value >= 50) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <div className={cn('space-y-4', className)}>
      {/* Listening indicator */}
      <AnimatePresence>
        {isListening && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex items-center justify-center gap-3 p-4 rounded-xl bg-primary/10 border border-primary/20"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Mic className="h-6 w-6 text-primary" />
            </motion.div>
            <span className="text-primary font-medium">{t('listening') || 'Listening...'}</span>
            <div className="flex gap-1">
              {[0, 1, 2].map(i => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-primary"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Live transcript */}
      {transcript && !score && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-xl bg-muted/50 border"
        >
          <p className="text-sm text-muted-foreground mb-2">{t('youSaid') || 'You said:'}</p>
          <p className="text-2xl font-arabic text-foreground" dir="rtl">{transcript}</p>
        </motion.div>
      )}

      {/* Score display */}
      <AnimatePresence>
        {score && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            {/* Overall score */}
            <div className="relative p-6 rounded-2xl bg-card border overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className={cn(
                  'absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-20',
                  getScoreBg(score.overall)
                )} />
              </div>
              
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{t('overallScore') || 'Overall Score'}</p>
                  <p className={cn('text-5xl font-bold', getScoreColor(score.overall))}>
                    {score.overall}%
                  </p>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.2 }}
                  className={cn(
                    'w-20 h-20 rounded-full flex items-center justify-center',
                    score.overall >= 70 ? 'bg-green-500/20' : score.overall >= 50 ? 'bg-yellow-500/20' : 'bg-red-500/20'
                  )}
                >
                  {score.overall >= 70 ? (
                    <Check className="h-10 w-10 text-green-500" />
                  ) : score.overall >= 50 ? (
                    <TrendingUp className="h-10 w-10 text-yellow-500" />
                  ) : (
                    <AlertCircle className="h-10 w-10 text-red-500" />
                  )}
                </motion.div>
              </div>
            </div>

            {/* Detailed scores */}
            <div className="grid grid-cols-3 gap-3">
              <ScoreCard icon={<Target className="h-5 w-5" />} label={t('accuracy') || 'Accuracy'} value={score.accuracy} delay={0.1} />
              <ScoreCard icon={<Zap className="h-5 w-5" />} label={t('clarity') || 'Clarity'} value={score.clarity} delay={0.2} />
              <ScoreCard icon={<Clock className="h-5 w-5" />} label={t('timing') || 'Timing'} value={score.timing} delay={0.3} />
            </div>

            {/* Comparison */}
            <div className="p-4 rounded-xl bg-muted/30 border space-y-3">
              <div>
                <p className="text-xs text-muted-foreground mb-1">{t('expected') || 'Expected:'}</p>
                <p className="text-xl font-arabic text-foreground" dir="rtl">{expected}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">{t('youSaid') || 'You said:'}</p>
                <p className="text-xl font-arabic text-foreground" dir="rtl">{transcript}</p>
              </div>
            </div>

            {/* Feedback */}
            <div className="space-y-2">
              {score.feedback.map((fb, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className={cn(
                    'flex items-start gap-3 p-3 rounded-lg',
                    fb.type === 'positive' && 'bg-green-500/10 text-green-600 dark:text-green-400',
                    fb.type === 'improvement' && 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400',
                    fb.type === 'error' && 'bg-red-500/10 text-red-600 dark:text-red-400'
                  )}
                >
                  {fb.type === 'positive' && <Check className="h-5 w-5 mt-0.5 shrink-0" />}
                  {fb.type === 'improvement' && <TrendingUp className="h-5 w-5 mt-0.5 shrink-0" />}
                  {fb.type === 'error' && <AlertCircle className="h-5 w-5 mt-0.5 shrink-0" />}
                  <div>
                    <p className="text-sm font-medium">{getFeedbackMessage(fb)}</p>
                    {fb.segment && (
                      <p className="text-lg font-arabic mt-1" dir="rtl">{fb.segment}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface ScoreCardProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  delay?: number;
}

function ScoreCard({ icon, label, value, delay = 0 }: ScoreCardProps) {
  const getColor = (v: number) => {
    if (v >= 90) return 'text-green-500';
    if (v >= 70) return 'text-yellow-500';
    if (v >= 50) return 'text-orange-500';
    return 'text-red-500';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="p-3 rounded-xl bg-card border text-center"
    >
      <div className="flex items-center justify-center gap-2 mb-2 text-muted-foreground">
        {icon}
        <span className="text-xs">{label}</span>
      </div>
      <p className={cn('text-2xl font-bold', getColor(value))}>{value}%</p>
      <div className="mt-2">
        <Progress value={value} className="h-1.5" />
      </div>
    </motion.div>
  );
}
