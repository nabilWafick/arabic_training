/**
 * Performance Monitor Hook
 * Tracks Core Web Vitals and custom performance metrics
 */

'use client';

import { useEffect, useCallback, useRef } from 'react';

// Core Web Vitals types
interface PerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta?: number;
  id?: string;
  navigationType?: string;
}

interface WebVitals {
  CLS?: PerformanceMetric;
  FCP?: PerformanceMetric;
  FID?: PerformanceMetric;
  INP?: PerformanceMetric;
  LCP?: PerformanceMetric;
  TTFB?: PerformanceMetric;
}

interface PerformanceMonitorOptions {
  enabled?: boolean;
  reportToConsole?: boolean;
  reportToAnalytics?: boolean;
  slowOperationThreshold?: number;
  onMetric?: (metric: PerformanceMetric) => void;
}

interface PerformanceMonitor {
  webVitals: WebVitals;
  measureOperation: <T>(label: string, operation: () => T) => T;
  measureAsyncOperation: <T>(label: string, operation: () => Promise<T>) => Promise<T>;
  trackCustomMetric: (name: string, value: number) => void;
  getMetrics: () => WebVitals;
}

// Thresholds for Core Web Vitals (based on Google's recommendations)
const THRESHOLDS = {
  CLS: { good: 0.1, poor: 0.25 },
  FCP: { good: 1800, poor: 3000 },
  FID: { good: 100, poor: 300 },
  INP: { good: 200, poor: 500 },
  LCP: { good: 2500, poor: 4000 },
  TTFB: { good: 800, poor: 1800 },
};

function getRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
  const threshold = THRESHOLDS[name as keyof typeof THRESHOLDS];
  if (!threshold) return 'good';
  
  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
}

/**
 * Custom hook for monitoring performance metrics
 * Tracks Core Web Vitals and allows custom operation timing
 */
export function usePerformanceMonitor(options: PerformanceMonitorOptions = {}): PerformanceMonitor {
  const {
    enabled = process.env.NODE_ENV !== 'production',
    reportToConsole = process.env.NODE_ENV !== 'production',
    slowOperationThreshold = 100,
    onMetric,
  } = options;

  const webVitalsRef = useRef<WebVitals>({});
  const customMetricsRef = useRef<Map<string, number>>(new Map());

  // Report metric
  const reportMetric = useCallback((metric: PerformanceMetric) => {
    if (!enabled) return;

    webVitalsRef.current[metric.name as keyof WebVitals] = metric;

    if (reportToConsole) {
      const emoji = metric.rating === 'good' ? '✅' : metric.rating === 'needs-improvement' ? '⚠️' : '❌';
      console.log(
        `[WebVital] ${emoji} ${metric.name}: ${metric.value.toFixed(2)}ms (${metric.rating})`
      );
    }

    onMetric?.(metric);
  }, [enabled, reportToConsole, onMetric]);

  // Initialize web vitals tracking
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    // Track FCP (First Contentful Paint)
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries.find((e) => e.name === 'first-contentful-paint');
      if (fcpEntry) {
        reportMetric({
          name: 'FCP',
          value: fcpEntry.startTime,
          rating: getRating('FCP', fcpEntry.startTime),
        });
      }
    });

    // Track LCP (Largest Contentful Paint)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) {
        reportMetric({
          name: 'LCP',
          value: lastEntry.startTime,
          rating: getRating('LCP', lastEntry.startTime),
        });
      }
    });

    // Track CLS (Cumulative Layout Shift)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const layoutShiftEntry = entry as PerformanceEntry & { hadRecentInput?: boolean; value?: number };
        if (!layoutShiftEntry.hadRecentInput && layoutShiftEntry.value) {
          clsValue += layoutShiftEntry.value;
          reportMetric({
            name: 'CLS',
            value: clsValue,
            rating: getRating('CLS', clsValue),
          });
        }
      }
    });

    // Track FID (First Input Delay) / INP (Interaction to Next Paint)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const firstEntry = entries[0];
      if (firstEntry) {
        const eventEntry = firstEntry as PerformanceEventTiming;
        const inputDelay = eventEntry.processingStart - eventEntry.startTime;
        reportMetric({
          name: 'FID',
          value: inputDelay,
          rating: getRating('FID', inputDelay),
        });
      }
    });

    // Try to observe each metric
    try {
      fcpObserver.observe({ type: 'paint', buffered: true });
    } catch {}

    try {
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
    } catch {}

    try {
      clsObserver.observe({ type: 'layout-shift', buffered: true });
    } catch {}

    try {
      fidObserver.observe({ type: 'first-input', buffered: true });
    } catch {}

    // Track TTFB
    if (typeof performance !== 'undefined') {
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
      if (navigationEntry) {
        const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
        reportMetric({
          name: 'TTFB',
          value: ttfb,
          rating: getRating('TTFB', ttfb),
        });
      }
    }

    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      clsObserver.disconnect();
      fidObserver.disconnect();
    };
  }, [enabled, reportMetric]);

  // Measure synchronous operation
  const measureOperation = useCallback(<T,>(label: string, operation: () => T): T => {
    if (!enabled) return operation();

    const start = performance.now();
    const result = operation();
    const duration = performance.now() - start;

    if (reportToConsole && duration > slowOperationThreshold) {
      console.warn(`[SlowOp] ⚠️ ${label}: ${duration.toFixed(2)}ms (threshold: ${slowOperationThreshold}ms)`);
    } else if (reportToConsole) {
      console.log(`[Measure] ${label}: ${duration.toFixed(2)}ms`);
    }

    return result;
  }, [enabled, reportToConsole, slowOperationThreshold]);

  // Measure async operation
  const measureAsyncOperation = useCallback(async <T,>(label: string, operation: () => Promise<T>): Promise<T> => {
    if (!enabled) return operation();

    const start = performance.now();
    const result = await operation();
    const duration = performance.now() - start;

    if (reportToConsole && duration > slowOperationThreshold) {
      console.warn(`[SlowAsyncOp] ⚠️ ${label}: ${duration.toFixed(2)}ms`);
    } else if (reportToConsole) {
      console.log(`[MeasureAsync] ${label}: ${duration.toFixed(2)}ms`);
    }

    return result;
  }, [enabled, reportToConsole, slowOperationThreshold]);

  // Track custom metric
  const trackCustomMetric = useCallback((name: string, value: number) => {
    if (!enabled) return;
    
    customMetricsRef.current.set(name, value);
    
    if (reportToConsole) {
      console.log(`[CustomMetric] ${name}: ${value}`);
    }
  }, [enabled, reportToConsole]);

  // Get all metrics
  const getMetrics = useCallback(() => {
    return { ...webVitalsRef.current };
  }, []);

  return {
    webVitals: webVitalsRef.current,
    measureOperation,
    measureAsyncOperation,
    trackCustomMetric,
    getMetrics,
  };
}

/**
 * Standalone function to report web vitals (for use in _app or layout)
 */
export function reportWebVitals(metric: PerformanceMetric): void {
  const rating = getRating(metric.name, metric.value);
  
  // Log to console in development
  if (process.env.NODE_ENV !== 'production') {
    const emoji = rating === 'good' ? '✅' : rating === 'needs-improvement' ? '⚠️' : '❌';
    console.log(`[WebVital] ${emoji} ${metric.name}: ${metric.value.toFixed(2)} (${rating})`);
  }

  // Send to analytics in production
  // Example: sendToAnalytics({ name: metric.name, value: metric.value, rating });
}

export type { PerformanceMetric, WebVitals, PerformanceMonitorOptions, PerformanceMonitor };
