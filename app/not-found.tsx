'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, BookOpen, BarChart3 } from 'lucide-react';

// Static translations for root-level 404 page
const translations = {
  en: {
    heading: '404',
    title: 'Page Not Found',
    description: 'Sorry, the page you are looking for is not available. We could not find the requested content.',
    buttons: {
      home: 'Go to Homepage',
      learn: 'Start Learning',
      dashboard: 'Dashboard'
    },
    contact: 'Or contact us if you think this is a mistake'
  },
  fr: {
    heading: '404',
    title: 'Page non trouvée',
    description: 'Désolé, la page que vous recherchez n\'est pas disponible. Nous n\'avons pas pu trouver le contenu demandé.',
    buttons: {
      home: 'Aller à la page d\'accueil',
      learn: 'Commencer à apprendre',
      dashboard: 'Tableau de bord'
    },
    contact: 'Ou contactez-nous si vous pensez que c\'est une erreur'
  },
  ar: {
    heading: '404',
    title: 'الصفحة غير موجودة',
    description: 'عذراً، الصفحة التي تبحث عنها غير متوفرة. لم نتمكن من العثور على المحتوى المطلوب.',
    buttons: {
      home: 'العودة للصفحة الرئيسية',
      learn: 'ابدأ التعلم',
      dashboard: 'لوحة التحكم'
    },
    contact: 'أو اتصل بنا إذا كنت تعتقد أن هذا خطأ'
  }
};

export default function NotFound() {
  const [locale, setLocale] = useState<'en' | 'fr' | 'ar'>('en');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Detect locale from browser language
    const browserLang = navigator.language.split('-')[0];
    if (['en', 'fr', 'ar'].includes(browserLang)) {
      setLocale(browserLang as 'en' | 'fr' | 'ar');
    }
  }, []);

  const t = translations[locale];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8f3ea] via-white to-[#f8f3ea] p-4">
      {/* Animated background orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#c9a85c] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse duration-7000"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#0d1b2a] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse duration-9000"></div>

      <div className="relative z-10 w-full max-w-md mx-auto">
        <Card className="border-[#c9a85c]/20 bg-white/80 backdrop-blur-sm shadow-lg">
          <CardContent className="pt-12 pb-8 px-6 text-center">
            {/* 404 Text with animation */}
            <div className="mb-4">
              <div className="text-8xl font-bold bg-gradient-to-r from-[#c9a85c] to-[#0d1b2a] bg-clip-text text-transparent animate-bounce">
                {t.heading}
              </div>
            </div>

            {/* Title and subtitle */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-[#0d1b2a] mb-3">
                {t.title}
              </h1>
            </div>

            {/* Description */}
            <p className="text-gray-500 mb-8 leading-relaxed">
              {t.description}
            </p>

            {/* Action buttons */}
            <div className="space-y-3">
              <Link href="/" className="block">
                <Button 
                  className="w-full bg-[#c9a85c] hover:bg-[#b8925c] text-white font-semibold py-6 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
                  size="lg"
                >
                  <Home className="w-5 h-5 mr-2" />
                  {t.buttons.home}
                </Button>
              </Link>

              <Link href="/learn" className="block">
                <Button 
                  variant="outline"
                  className="w-full border-[#c9a85c] text-[#c9a85c] hover:bg-[#c9a85c]/10 font-semibold py-6 rounded-lg transition-all duration-300"
                  size="lg"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  {t.buttons.learn}
                </Button>
              </Link>

              <Link href="/dashboard" className="block">
                <Button 
                  variant="ghost"
                  className="w-full text-[#0d1b2a] hover:bg-[#0d1b2a]/5 font-semibold py-6 rounded-lg transition-all duration-300"
                  size="lg"
                >
                  <BarChart3 className="w-5 h-5 mr-2" />
                  {t.buttons.dashboard}
                </Button>
              </Link>
            </div>

            {/* Decorative element */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-400">
                {t.contact}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Subtle pattern decoration */}
        <div className="mt-6 flex justify-center gap-2 opacity-50">
          <div className="w-2 h-2 rounded-full bg-[#c9a85c]"></div>
          <div className="w-2 h-2 rounded-full bg-[#0d1b2a]"></div>
          <div className="w-2 h-2 rounded-full bg-[#c9a85c]"></div>
        </div>
      </div>
    </div>
  );
}
