'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Users, MessageCircle, Trophy, Heart, Plus } from 'lucide-react';

/**
 * Community Page - Social connection aesthetic  
 * Design: Friendly, warm, collaborative
 * Colors: Vibrant, energetic, welcoming
 */
export default function CommunityPage() {
  const t = useTranslations('community');

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-fuchsia-50 to-pink-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Users className="w-16 h-16 mx-auto mb-6 text-violet-600 dark:text-violet-400" />
          <h1 className="text-6xl font-black text-slate-900 dark:text-white mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t('subtitle', { default: 'Connect with learners worldwide' })}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <button className="mb-8 px-8 py-4 bg-gradient-to-r from-violet-500 to-fuchsia-600 text-white rounded-xl font-bold text-lg shadow-xl hover:scale-105 transition-transform flex items-center gap-2 mx-auto">
            <Plus className="w-5 h-5" />
            {t('createGroup')}
          </button>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center text-white text-xl font-black">
                    {String.fromCharCode(65 + i)}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Arabic Beginners</h3>
                    <div className="text-sm text-slate-500 dark:text-slate-400">124 members</div>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                  Join fellow learners starting their Arabic journey
                </p>
                <button className="w-full py-2 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-lg font-bold hover:bg-violet-200 dark:hover:bg-violet-900/50 transition-colors">
                  Join Group
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
