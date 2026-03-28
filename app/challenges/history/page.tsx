/**
 * Challenge History Page
 * Shows all completed challenges with detailed stats
 */

'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Calendar, 
  Target, 
  Clock, 
  Zap, 
  Filter,
  SortAsc,
  SortDesc
} from 'lucide-react';
import { useChallengeStore } from '@/stores/useChallengeStore';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

type SortField = 'date' | 'accuracy' | 'xp';
type SortOrder = 'asc' | 'desc';

export default function ChallengeHistoryPage() {
  const t = useTranslations('challenges');
  const { getChallengeHistory } = useChallengeStore();
  
  const [sortField, setSortField] = useState<SortField>('date');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [filterPhase, setFilterPhase] = useState<string>('all');

  const allHistory = getChallengeHistory();

  // Filter and sort
  const filteredHistory = useMemo(() => {
    let result = [...allHistory];
    
    // Filter by phase
    if (filterPhase !== 'all') {
      result = result.filter(c => c.phaseId === parseInt(filterPhase));
    }
    
    // Sort
    result.sort((a, b) => {
      let comparison = 0;
      switch (sortField) {
        case 'date':
          comparison = new Date(a.date).getTime() - new Date(b.date).getTime();
          break;
        case 'accuracy':
          comparison = a.accuracy - b.accuracy;
          break;
        case 'xp':
          comparison = a.xpEarned - b.xpEarned;
          break;
      }
      return sortOrder === 'asc' ? comparison : -comparison;
    });
    
    return result;
  }, [allHistory, sortField, sortOrder, filterPhase]);

  // Calculate summary stats
  const totalXP = allHistory.reduce((sum, c) => sum + c.xpEarned, 0);
  const avgAccuracy = allHistory.length > 0
    ? Math.round(allHistory.reduce((sum, c) => sum + c.accuracy, 0) / allHistory.length)
    : 0;
  const totalTime = allHistory.reduce((sum, c) => sum + c.timeSpent, 0);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/challenges">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold">{t('challengeHistory')}</h1>
            <p className="text-muted-foreground">
              {allHistory.length} {t('challengesCompleted')}
            </p>
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-3 gap-4 mb-8"
        >
          <div className="p-4 rounded-xl bg-card border text-center">
            <Zap className="h-6 w-6 mx-auto mb-2 text-gold" />
            <p className="text-2xl font-bold">{totalXP.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground">{t('totalXP')}</p>
          </div>
          <div className="p-4 rounded-xl bg-card border text-center">
            <Target className="h-6 w-6 mx-auto mb-2 text-green-500" />
            <p className="text-2xl font-bold">{avgAccuracy}%</p>
            <p className="text-sm text-muted-foreground">{t('avgAccuracy')}</p>
          </div>
          <div className="p-4 rounded-xl bg-card border text-center">
            <Clock className="h-6 w-6 mx-auto mb-2 text-blue-500" />
            <p className="text-2xl font-bold">{formatTime(totalTime)}</p>
            <p className="text-sm text-muted-foreground">{t('totalTime')}</p>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap items-center gap-4 mb-6"
        >
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <Select value={filterPhase} onValueChange={setFilterPhase}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('allPhases')}</SelectItem>
                <SelectItem value="1">{t('phase')} 1</SelectItem>
                <SelectItem value="2">{t('phase')} 2</SelectItem>
                <SelectItem value="3">{t('phase')} 3</SelectItem>
                <SelectItem value="4">{t('phase')} 4</SelectItem>
                <SelectItem value="5">{t('phase')} 5</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center gap-2">
            <Select value={sortField} onValueChange={(v) => setSortField(v as SortField)}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">{t('date')}</SelectItem>
                <SelectItem value="accuracy">{t('accuracy')}</SelectItem>
                <SelectItem value="xp">XP</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSortOrder(o => o === 'asc' ? 'desc' : 'asc')}
            >
              {sortOrder === 'asc' ? (
                <SortAsc className="h-4 w-4" />
              ) : (
                <SortDesc className="h-4 w-4" />
              )}
            </Button>
          </div>
        </motion.div>

        {/* History List */}
        <div className="space-y-3">
          {filteredHistory.length > 0 ? (
            filteredHistory.map((challenge, index) => (
              <motion.div
                key={`${challenge.date}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index }}
                className="p-4 rounded-xl bg-card border hover:border-primary/20 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      'w-12 h-12 rounded-full flex items-center justify-center',
                      challenge.accuracy >= 90 
                        ? 'bg-green-500/20 text-green-500'
                        : challenge.accuracy >= 70
                        ? 'bg-yellow-500/20 text-yellow-500'
                        : 'bg-red-500/20 text-red-500'
                    )}>
                      <Target className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium">
                          {new Date(challenge.date).toLocaleDateString(undefined, {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </p>
                        <Badge variant="outline">
                          {t('phase')} {challenge.phaseId}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                        <span>{challenge.exercisesCompleted}/{challenge.exercisesTotal} {t('exercises')}</span>
                        <span>{formatTime(challenge.timeSpent)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={cn(
                      'text-2xl font-bold',
                      challenge.accuracy >= 90 
                        ? 'text-green-500'
                        : challenge.accuracy >= 70
                        ? 'text-yellow-500'
                        : 'text-red-500'
                    )}>
                      {challenge.accuracy}%
                    </p>
                    <p className="text-sm text-gold font-medium">
                      +{challenge.xpEarned} XP
                    </p>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <Calendar className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium">{t('noHistory')}</p>
              <p className="text-sm">{t('startFirstChallenge')}</p>
              <Link href="/challenges">
                <Button className="mt-4">
                  {t('goToChallenges')}
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
