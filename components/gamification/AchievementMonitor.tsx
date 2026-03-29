'use client';

import { useEffect } from 'react';
import { toast } from 'sonner';
import { Trophy, Star, Flame, Award, Zap } from 'lucide-react';
import { useGamificationStore } from '@/stores/useGamificationStore';
import { celebrate } from '@/lib/confetti';

/**
 * Achievement Notification System
 * Monitors gamification events and shows toasts with confetti
 */
export function AchievementMonitor() {
  const { stats, achievements } = useGamificationStore();

  useEffect(() => {
    // Listen for achievement unlocks
    const checkNewAchievements = () => {
      achievements.forEach((achievement) => {
        if (achievement.unlockedAt) {
          const unlockTime = new Date(achievement.unlockedAt).getTime();
          const now = Date.now();
          
          // Show toast if unlocked within last 2 seconds
          if (now - unlockTime < 2000) {
            showAchievementToast(achievement);
            
            // Trigger confetti for rare/epic achievements
            if (achievement.rarity === 'rare' || achievement.rarity === 'epic' || achievement.rarity === 'legendary') {
              celebrate('achievement');
            }
          }
        }
      });
    };

    checkNewAchievements();
  }, [achievements]);

  useEffect(() => {
    // Check for level up (compare with previous value)
    const prevLevel = parseInt(localStorage.getItem('prevLevel') || '1');
    
    if (stats.level > prevLevel) {
      showLevelUpToast(stats.level);
      celebrate('levelUp');
      localStorage.setItem('prevLevel', stats.level.toString());
    } else if (prevLevel === 1 && stats.level === 1) {
      // Initialize
      localStorage.setItem('prevLevel', '1');
    }
  }, [stats.level]);

  useEffect(() => {
    // Check for streak milestones
    const milestones = [3, 7, 14, 30, 60, 90, 180, 365];
    const prevStreak = parseInt(localStorage.getItem('prevStreak') || '0');
    
    if (stats.streak > prevStreak) {
      if (milestones.includes(stats.streak)) {
        showStreakMilestoneToast(stats.streak);
        celebrate('streak');
      }
      localStorage.setItem('prevStreak', stats.streak.toString());
    }
  }, [stats.streak]);

  return null; // This component doesn't render anything
}

/**
 * Show achievement unlock toast
 */
function showAchievementToast(achievement: any) {
  const rarityColors = {
    common: 'bg-slate-500',
    uncommon: 'bg-emerald-500',
    rare: 'bg-blue-500',
    epic: 'bg-purple-500',
    legendary: 'bg-amber-500',
  };

  const rarityIcons = {
    common: Star,
    uncommon: Trophy,
    rare: Award,
    epic: Zap,
    legendary: Flame,
  };

  const Icon = rarityIcons[achievement.rarity as keyof typeof rarityIcons] || Trophy;
  const colorClass = rarityColors[achievement.rarity as keyof typeof rarityColors] || 'bg-slate-500';

  toast(
    <div className="flex items-center gap-3">
      <div className={`p-2 rounded-full ${colorClass} text-white`}>
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <div className="font-bold text-slate-900 dark:text-white">Achievement Unlocked!</div>
        <div className="text-sm text-slate-600 dark:text-slate-400">{achievement.title}</div>
      </div>
    </div>,
    {
      duration: 5000,
      position: 'top-right',
    }
  );
}

/**
 * Show level up toast
 */
function showLevelUpToast(level: number) {
  toast(
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-full bg-gradient-to-br from-emerald-500 to-amber-500 text-white">
        <Trophy className="w-5 h-5" />
      </div>
      <div>
        <div className="font-bold text-slate-900 dark:text-white">Level Up!</div>
        <div className="text-sm text-slate-600 dark:text-slate-400">You reached level {level}</div>
      </div>
    </div>,
    {
      duration: 5000,
      position: 'top-right',
    }
  );
}

/**
 * Show streak milestone toast
 */
function showStreakMilestoneToast(streak: number) {
  toast(
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white">
        <Flame className="w-5 h-5" />
      </div>
      <div>
        <div className="font-bold text-slate-900 dark:text-white">Streak Milestone!</div>
        <div className="text-sm text-slate-600 dark:text-slate-400">{streak} days in a row! 🔥</div>
      </div>
    </div>,
    {
      duration: 5000,
      position: 'top-right',
    }
  );
}
