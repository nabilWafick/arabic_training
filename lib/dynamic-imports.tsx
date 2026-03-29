/**
 * Dynamic Imports with Loading States
 * Centralized lazy loading for heavy components
 */

'use client';

import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

// Loading fallback components
function ChartLoadingFallback() {
  return (
    <div className="w-full h-[300px] flex items-center justify-center">
      <div className="space-y-3 w-full">
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-[250px] w-full rounded-lg" />
      </div>
    </div>
  );
}

function PDFLoadingFallback() {
  return (
    <div className="w-full h-32 flex items-center justify-center bg-muted/50 rounded-lg">
      <div className="text-center space-y-2">
        <Skeleton className="h-8 w-8 mx-auto rounded" />
        <Skeleton className="h-4 w-24 mx-auto" />
        <p className="text-sm text-muted-foreground">Preparing PDF...</p>
      </div>
    </div>
  );
}

function ComponentLoadingFallback() {
  return (
    <div className="w-full space-y-4">
      <Skeleton className="h-8 w-48" />
      <Skeleton className="h-32 w-full rounded-lg" />
    </div>
  );
}

function EditorLoadingFallback() {
  return (
    <div className="w-full min-h-[200px] border rounded-lg p-4 bg-muted/30">
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
      </div>
    </div>
  );
}

// ===========================================
// Recharts Components (lazy loaded)
// ===========================================

/**
 * Dynamically imported LineChart from recharts
 * Use this instead of direct import from 'recharts'
 */
export const LazyLineChart = dynamic(
  () => import('recharts').then((mod) => ({ default: mod.LineChart })),
  {
    loading: () => <ChartLoadingFallback />,
    ssr: false,
  }
);

export const LazyBarChart = dynamic(
  () => import('recharts').then((mod) => ({ default: mod.BarChart })),
  {
    loading: () => <ChartLoadingFallback />,
    ssr: false,
  }
);

export const LazyAreaChart = dynamic(
  () => import('recharts').then((mod) => ({ default: mod.AreaChart })),
  {
    loading: () => <ChartLoadingFallback />,
    ssr: false,
  }
);

export const LazyPieChart = dynamic(
  () => import('recharts').then((mod) => ({ default: mod.PieChart })),
  {
    loading: () => <ChartLoadingFallback />,
    ssr: false,
  }
);

export const LazyRadarChart = dynamic(
  () => import('recharts').then((mod) => ({ default: mod.RadarChart })),
  {
    loading: () => <ChartLoadingFallback />,
    ssr: false,
  }
);

// ===========================================
// Recharts Sub-components
// Export these as a module for easier consumption
// ===========================================

export const LazyRechartsModule = {
  // Re-export for when you need multiple components
  getComponents: () => import('recharts'),
};

// ===========================================
// Heavy UI Components
// ===========================================

/**
 * Canvas confetti (celebration effects)
 */
export const LazyConfetti = dynamic(
  () => import('canvas-confetti').then((mod) => ({ default: mod.default })),
  {
    ssr: false,
    loading: () => null, // No visual fallback needed for confetti
  }
);

// ===========================================
// Wrapper for complete charts module
// Use when you need access to all recharts components
// ===========================================

interface RechartsComponents {
  LineChart: typeof import('recharts').LineChart;
  BarChart: typeof import('recharts').BarChart;
  AreaChart: typeof import('recharts').AreaChart;
  PieChart: typeof import('recharts').PieChart;
  RadarChart: typeof import('recharts').RadarChart;
  XAxis: typeof import('recharts').XAxis;
  YAxis: typeof import('recharts').YAxis;
  CartesianGrid: typeof import('recharts').CartesianGrid;
  Tooltip: typeof import('recharts').Tooltip;
  Legend: typeof import('recharts').Legend;
  Line: typeof import('recharts').Line;
  Bar: typeof import('recharts').Bar;
  Area: typeof import('recharts').Area;
  Pie: typeof import('recharts').Pie;
  Cell: typeof import('recharts').Cell;
  ResponsiveContainer: typeof import('recharts').ResponsiveContainer;
}

let cachedRecharts: RechartsComponents | null = null;

/**
 * Load all recharts components at once
 * Use this when you need multiple components in one view
 */
export async function loadRecharts(): Promise<RechartsComponents> {
  if (cachedRecharts) return cachedRecharts;
  
  const recharts = await import('recharts');
  cachedRecharts = {
    LineChart: recharts.LineChart,
    BarChart: recharts.BarChart,
    AreaChart: recharts.AreaChart,
    PieChart: recharts.PieChart,
    RadarChart: recharts.RadarChart,
    XAxis: recharts.XAxis,
    YAxis: recharts.YAxis,
    CartesianGrid: recharts.CartesianGrid,
    Tooltip: recharts.Tooltip,
    Legend: recharts.Legend,
    Line: recharts.Line,
    Bar: recharts.Bar,
    Area: recharts.Area,
    Pie: recharts.Pie,
    Cell: recharts.Cell,
    ResponsiveContainer: recharts.ResponsiveContainer,
  };
  
  return cachedRecharts;
}

// ===========================================
// Utility for preloading components
// ===========================================

/**
 * Preload components during idle time
 * Call this on route hover or when you anticipate needing a component
 */
export function preloadCharts(): void {
  if (typeof window === 'undefined') return;
  
  // Use requestIdleCallback to load during idle time
  const idleCallback = window.requestIdleCallback || ((cb: () => void) => setTimeout(cb, 1));
  
  idleCallback(() => {
    import('recharts');
  });
}

/**
 * Preload heavy components based on route
 */
export function preloadForRoute(route: string): void {
  if (typeof window === 'undefined') return;

  const idleCallback = window.requestIdleCallback || ((cb: () => void) => setTimeout(cb, 1));
  
  idleCallback(() => {
    switch (route) {
      case '/progress':
      case '/dashboard':
      case '/analytics':
        import('recharts');
        break;
      default:
        break;
    }
  });
}

// Export loading fallbacks for custom use
export { 
  ChartLoadingFallback, 
  PDFLoadingFallback, 
  ComponentLoadingFallback,
  EditorLoadingFallback 
};
