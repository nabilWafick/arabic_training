/**
 * Performance Monitor Hook
 * Tracks performance metrics for analytics
 */

import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  interactionTime: number;
}

export function usePerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    interactionTime: 0
  });

  useEffect(() => {
    // Measure page load time
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigationEntry) {
        setMetrics(prev => ({
          ...prev,
          loadTime: navigationEntry.loadEventEnd - navigationEntry.loadEventStart,
          renderTime: navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart
        }));
      }
    }
  }, []);

  const trackInteraction = (action: string) => {
    const startTime = performance.now();
    
    return () => {
      const endTime = performance.now();
      const duration = endTime - startTime;
      
      setMetrics(prev => ({
        ...prev,
        interactionTime: duration
      }));
      
      // Log to analytics if needed
      console.log(`${action} took ${duration.toFixed(2)}ms`);
    };
  };

  return { metrics, trackInteraction };
}