'use client';

import { NextIntlClientProvider } from 'next-intl';
import { useUserStore } from '@/stores/useUserStore';
import { useEffect, useState } from 'react';

export function IntlProvider({ children }: { children: React.ReactNode }) {
  const { settings } = useUserStore();
  const [messages, setMessages] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadMessages() {
      try {
        const locale = settings.locale || 'fr';
        const msgs = await import(`@/messages/${locale}.json`);
        setMessages(msgs.default);
        setIsLoading(false);
        
        // Update HTML dir and lang attributes
        document.documentElement.setAttribute('lang', locale);
        document.documentElement.setAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr');
      } catch (error) {
        console.error('Failed to load messages:', error);
        // Fallback to French
        const msgs = await import(`@/messages/fr.json`);
        setMessages(msgs.default);
        setIsLoading(false);
        document.documentElement.setAttribute('lang', 'fr');
        document.documentElement.setAttribute('dir', 'ltr');
      }
    }
    
    loadMessages();
  }, [settings.locale]);

  if (isLoading || !messages) {
    return <>{children}</>;
  }

  return (
    <NextIntlClientProvider locale={settings.locale || 'fr'} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
