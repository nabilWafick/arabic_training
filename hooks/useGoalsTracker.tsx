'use client';

import { useEffect } from 'react';
import { useGoalsStore } from '@/stores/useGoalsStore';
import { useGamificationStore } from '@/stores/useGamificationStore';
import { toast } from 'sonner';
import { Target, Check } from 'lucide-react';

/**
 * Goals Progress Tracker Hook
 * Automatically syncs goals with user actions
 */
export function useGoalsTracker() {
  const { updateProgress, recentlyCompletedGoal, clearRecentlyCompletedGoal } = useGoalsStore();
  const { stats } = useGamificationStore();

  // Sync XP goals
  useEffect(() => {
    const prevXP = parseInt(localStorage.getItem('prevXPForGoals') || '0');
    if (stats.xp > prevXP) {
      const gained = stats.xp - prevXP;
      updateProgress('xp', gained);
      localStorage.setItem('prevXPForGoals', stats.xp.toString());
    }
  }, [stats.xp, updateProgress]);

  // Sync words learned goals
  useEffect(() => {
    const prevWords = parseInt(localStorage.getItem('prevWordsForGoals') || '0');
    if (stats.wordsLearned > prevWords) {
      const gained = stats.wordsLearned - prevWords;
      updateProgress('words', gained);
      localStorage.setItem('prevWordsForGoals', stats.wordsLearned.toString());
    }
  }, [stats.wordsLearned, updateProgress]);

  // Sync lessons completed goals
  useEffect(() => {
    const prevLessons = parseInt(localStorage.getItem('prevLessonsForGoals') || '0');
    if (stats.lessonsCompleted > prevLessons) {
      const gained = stats.lessonsCompleted - prevLessons;
      updateProgress('lessons', gained);
      localStorage.setItem('prevLessonsForGoals', stats.lessonsCompleted.toString());
    }
  }, [stats.lessonsCompleted, updateProgress]);

  // Sync time spent goals (in minutes)
  useEffect(() => {
    const prevTime = parseInt(localStorage.getItem('prevTimeForGoals') || '0');
    const currentMinutes = Math.floor(stats.totalTimeSpent / 60);
    if (currentMinutes > prevTime) {
      const gained = currentMinutes - prevTime;
      updateProgress('time', gained);
      localStorage.setItem('prevTimeForGoals', currentMinutes.toString());
    }
  }, [stats.totalTimeSpent, updateProgress]);

  // Sync streak goals
  useEffect(() => {
    updateProgress('streak', 0); // Just check current streak value
  }, [stats.streak, updateProgress]);

  // Show toast when goal is completed
  useEffect(() => {
    if (recentlyCompletedGoal) {
      toast(
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 text-white">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-500" />
              Goal Completed!
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">{recentlyCompletedGoal.title}</div>
          </div>
        </div>,
        {
          duration: 5000,
          position: 'top-right',
        }
      );
      
      // Clear after showing
      setTimeout(() => {
        clearRecentlyCompletedGoal();
      }, 1000);
    }
  }, [recentlyCompletedGoal, clearRecentlyCompletedGoal]);
}
