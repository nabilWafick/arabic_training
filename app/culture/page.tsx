'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Sparkles, Book, Coffee, Heart, Globe } from 'lucide-react';

/**
 * Culture Page - Rich cultural exploration aesthetic
 * Design: Warm, inviting, story-driven
 * Colors: Warm earth tones, gold accents
 */
export default function CulturePage() {
  const t = useTranslations('culture');

  const culturalTopics = [
    { id: 1, phase: 1, title: { en: 'Arabic Greetings', ar: 'التحيات العربية' }, icon: '👋', color: 'from-emerald-500 to-teal-600' },
    { id: 2, phase: 1, title: { en: 'Tea Culture', ar: 'ثقافة الشاي' }, icon: '🍵', color: 'from-amber-500 to-orange-600' },
    { id: 3, phase: 2, title: { en: 'Family Traditions', ar: 'تقاليد العائلة' }, icon: '👨‍👩‍👧‍👦', color: 'from-rose-500 to-pink-600' },
    { id: 4, phase: 2, title: { en: 'Arabic Cuisine', ar: 'المطبخ العربي' }, icon: '🍽️', color: 'from-red-500 to-orange-600' },
    { id: 5, phase: 3, title: { en: 'Calligraphy Art', ar: 'فن الخط' }, icon: '✍️', color: 'from-indigo-500 to-purple-600' },
    { id: 6, phase: 4, title: { en: 'Arabic Poetry', ar: 'الشعر العربي' }, icon: '📜', color: 'from-violet-500 to-purple-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Sparkles className="w-16 h-16 mx-auto mb-6 text-amber-600 dark:text-amber-400" />
          <h1 className="text-6xl font-black text-slate-900 dark:text-white mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t('subtitle', { default: 'Explore the rich tapestry of Arab culture and traditions' })}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {culturalTopics.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700 cursor-pointer group"
            >
              <div className={`h-48 bg-gradient-to-br ${topic.color} p-8 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity" style={{
                  backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }} />
                <div className="text-7xl relative z-10 group-hover:scale-110 transition-transform">
                  {topic.icon}
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-sm text-emerald-600 dark:text-emerald-400 font-bold mb-2">
                  Phase {topic.phase}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {topic.title.en}
                </h3>
                <div className="text-xl text-amber-600 dark:text-amber-400 mb-4 font-arabic">
                  {topic.title.ar}
                </div>
                <button className="w-full py-3 bg-slate-100 dark:bg-slate-700 hover:bg-emerald-500 hover:text-white rounded-lg font-bold transition-colors">
                  {t('explore', { default: 'Explore' })}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
