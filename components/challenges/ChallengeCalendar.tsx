/**
 * Challenge Calendar Component
 * Shows monthly view of completed challenges
 */

'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ChevronLeft, ChevronRight, Check, Flame } from 'lucide-react';
import { useChallengeStore } from '@/stores/useChallengeStore';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ChallengeCalendarProps {
  className?: string;
}

export function ChallengeCalendar({ className }: ChallengeCalendarProps) {
  const t = useTranslations('challenges');
  const { getCalendarData, currentStreak } = useChallengeStore();
  
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Get calendar data for current month
  const calendarData = useMemo(
    () => getCalendarData(currentMonth, currentYear),
    [currentMonth, currentYear, getCalendarData]
  );

  // Generate calendar days
  const calendarDays = useMemo(() => {
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startDayOfWeek = firstDay.getDay();
    
    const days: Array<{
      date: number | null;
      dateString: string | null;
      isToday: boolean;
      isCompleted: boolean;
      accuracy?: number;
    }> = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startDayOfWeek; i++) {
      days.push({ date: null, dateString: null, isToday: false, isCompleted: false });
    }

    // Add days of the month
    const today = new Date();
    for (let day = 1; day <= daysInMonth; day++) {
      const dateString = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const isToday = 
        today.getDate() === day && 
        today.getMonth() === currentMonth && 
        today.getFullYear() === currentYear;
      const completion = calendarData[dateString];
      
      days.push({
        date: day,
        dateString,
        isToday,
        isCompleted: !!completion,
        accuracy: completion?.accuracy,
      });
    }

    return days;
  }, [currentMonth, currentYear, calendarData]);

  // Navigate months
  const goToPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Month names
  const monthNames = [
    t('months.january'),
    t('months.february'),
    t('months.march'),
    t('months.april'),
    t('months.may'),
    t('months.june'),
    t('months.july'),
    t('months.august'),
    t('months.september'),
    t('months.october'),
    t('months.november'),
    t('months.december'),
  ];

  // Day names
  const dayNames = [
    t('days.sun'),
    t('days.mon'),
    t('days.tue'),
    t('days.wed'),
    t('days.thu'),
    t('days.fri'),
    t('days.sat'),
  ];

  // Count completed days this month
  const completedThisMonth = Object.keys(calendarData).length;

  return (
    <div className={cn('p-6 rounded-xl bg-card border', className)}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={goToPrevMonth}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <div className="text-center">
          <h3 className="text-lg font-semibold">
            {monthNames[currentMonth]} {currentYear}
          </h3>
          <p className="text-sm text-muted-foreground">
            {completedThisMonth} {t('challengesCompleted')}
          </p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={goToNextMonth}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Day names header */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map((day, i) => (
          <div
            key={i}
            className="text-center text-xs font-medium text-muted-foreground py-2"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((day, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.01 }}
            className={cn(
              'aspect-square flex items-center justify-center rounded-lg text-sm relative',
              day.date === null && 'invisible',
              day.isToday && 'ring-2 ring-primary ring-offset-2 ring-offset-background',
              day.isCompleted 
                ? 'bg-green-500/20 text-green-600 font-medium' 
                : 'hover:bg-muted/50'
            )}
          >
            {day.date}
            {day.isCompleted && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1"
              >
                <div className="bg-green-500 rounded-full p-0.5">
                  <Check className="h-2.5 w-2.5 text-white" />
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Streak indicator */}
      {currentStreak > 0 && (
        <div className="mt-4 pt-4 border-t flex items-center justify-center gap-2 text-sm">
          <Flame className="h-4 w-4 text-orange-500" />
          <span className="text-muted-foreground">
            {t('currentStreak')}: <span className="font-semibold text-foreground">{currentStreak}</span> {t('days')}
          </span>
        </div>
      )}
    </div>
  );
}
