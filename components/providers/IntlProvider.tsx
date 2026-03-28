'use client';

import { NextIntlClientProvider } from 'next-intl';
import { useUserStore } from '@/stores/useUserStore';
import { useEffect, useState } from 'react';

// Import default messages
import enMessages from '@/messages/en.json';
import frMessages from '@/messages/fr.json';
import arMessages from '@/messages/ar.json';

const messages: Record<string, any> = {
  en: enMessages,
  fr: frMessages,
  ar: arMessages,
};

export function IntlProvider({ children }: { children: React.ReactNode }) {
  const { settings } = useUserStore();
  const [locale, setLocale] = useState<'en' | 'fr' | 'ar'>('fr');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const currentLocale = (settings.locale || 'fr') as 'en' | 'fr' | 'ar';
    setLocale(currentLocale);
    
    // Update HTML dir and lang attributes
    document.documentElement.setAttribute('lang', currentLocale);
    document.documentElement.setAttribute('dir', currentLocale === 'ar' ? 'rtl' : 'ltr');
    
    setMounted(true);
  }, [settings.locale]);

  // Use static messages for the current locale
  const currentMessages = messages[locale] || messages.fr;

  return (
    <NextIntlClientProvider locale={locale} messages={currentMessages} timeZone="UTC">
      {children}
    </NextIntlClientProvider>
  );
}
