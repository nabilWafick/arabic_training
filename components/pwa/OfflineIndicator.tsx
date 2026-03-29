/**
 * Offline Indicator Component
 * Shows a subtle banner when user is offline
 */

'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { WifiOff, RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';

export function OfflineIndicator() {
  const t = useTranslations('pwa');
  const [isOnline, setIsOnline] = useState(true);
  const [showReconnected, setShowReconnected] = useState(false);

  useEffect(() => {
    // Set initial state
    setIsOnline(navigator.onLine);

    const handleOnline = () => {
      setIsOnline(true);
      setShowReconnected(true);
      // Hide reconnected message after 3 seconds
      setTimeout(() => setShowReconnected(false), 3000);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowReconnected(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Show nothing if online and no reconnection message
  if (isOnline && !showReconnected) {
    return null;
  }

  return (
    <div
      className={cn(
        'fixed top-0 left-0 right-0 z-[60]',
        'flex items-center justify-center gap-2 py-2 px-4',
        'text-sm font-medium',
        'animate-in slide-in-from-top duration-300',
        isOnline
          ? 'bg-emerald-500 text-white'
          : 'bg-amber-500 text-amber-950'
      )}
    >
      {isOnline ? (
        <>
          <RefreshCw className="w-4 h-4" />
          <span>{t('synced')}</span>
        </>
      ) : (
        <>
          <WifiOff className="w-4 h-4" />
          <span>{t('offline')}</span>
          <span className="text-amber-900/70 hidden sm:inline">
            — {t('offlineMode')}
          </span>
        </>
      )}
    </div>
  );
}
