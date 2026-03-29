/**
 * Practice Timer Hook
 * Tracks time spent in practice sessions
 */

'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

interface TimerState {
  elapsed: number; // seconds
  isRunning: boolean;
  sessionStart: number | null;
}

interface UsePracticeTimerOptions {
  autoStart?: boolean;
  onMinutePassed?: (minutes: number) => void;
}

export function usePracticeTimer(options: UsePracticeTimerOptions = {}) {
  const { autoStart = false, onMinutePassed } = options;
  
  const [state, setState] = useState<TimerState>({
    elapsed: 0,
    isRunning: false,
    sessionStart: null,
  });
  
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const lastMinuteRef = useRef(0);
  
  const start = useCallback(() => {
    setState(prev => ({
      ...prev,
      isRunning: true,
      sessionStart: prev.sessionStart || Date.now(),
    }));
  }, []);
  
  const pause = useCallback(() => {
    setState(prev => ({
      ...prev,
      isRunning: false,
    }));
  }, []);
  
  const reset = useCallback(() => {
    setState({
      elapsed: 0,
      isRunning: false,
      sessionStart: null,
    });
    lastMinuteRef.current = 0;
  }, []);
  
  const toggle = useCallback(() => {
    setState(prev => ({
      ...prev,
      isRunning: !prev.isRunning,
      sessionStart: !prev.isRunning ? (prev.sessionStart || Date.now()) : prev.sessionStart,
    }));
  }, []);
  
  // Timer interval
  useEffect(() => {
    if (state.isRunning) {
      intervalRef.current = setInterval(() => {
        setState(prev => {
          const newElapsed = prev.elapsed + 1;
          
          // Check for minute callbacks
          const currentMinute = Math.floor(newElapsed / 60);
          if (currentMinute > lastMinuteRef.current && onMinutePassed) {
            lastMinuteRef.current = currentMinute;
            onMinutePassed(currentMinute);
          }
          
          return {
            ...prev,
            elapsed: newElapsed,
          };
        });
      }, 1000);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [state.isRunning, onMinutePassed]);
  
  // Auto-start
  useEffect(() => {
    if (autoStart) {
      start();
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoStart, start]);
  
  // Format time
  const formatTime = useCallback((seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }, []);
  
  return {
    elapsed: state.elapsed,
    elapsedFormatted: formatTime(state.elapsed),
    isRunning: state.isRunning,
    start,
    pause,
    reset,
    toggle,
  };
}

// Practice time stats storage
const STORAGE_KEY = 'arabic-master-practice-time';

interface PracticeTimeStats {
  totalSeconds: number;
  todaySeconds: number;
  lastDate: string;
  sessions: number;
}

export function getPracticeTimeStats(): PracticeTimeStats {
  if (typeof window === 'undefined') {
    return { totalSeconds: 0, todaySeconds: 0, lastDate: '', sessions: 0 };
  }
  
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    return { totalSeconds: 0, todaySeconds: 0, lastDate: '', sessions: 0 };
  }
  
  const stats = JSON.parse(stored) as PracticeTimeStats;
  const today = new Date().toDateString();
  
  // Reset today's count if it's a new day
  if (stats.lastDate !== today) {
    stats.todaySeconds = 0;
    stats.lastDate = today;
  }
  
  return stats;
}

export function addPracticeTime(seconds: number): void {
  if (typeof window === 'undefined') return;
  
  const stats = getPracticeTimeStats();
  const today = new Date().toDateString();
  
  stats.totalSeconds += seconds;
  stats.todaySeconds += seconds;
  stats.sessions += 1;
  stats.lastDate = today;
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
}
