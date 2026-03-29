'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Brain, Target, TrendingUp, Zap, Activity } from 'lucide-react';

/**
 * Adaptive Learning Page - AI-powered personalization aesthetic
 * Design: Tech-forward, data-driven, intelligent
 * Colors: Electric blue, purple gradients
 */
export default function AdaptivePage() {
  const t = useTranslations('adaptive');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 mb-6 shadow-2xl shadow-purple-500/30">
            <Brain className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
            {t('title')}
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            {t('subtitle', { default: 'AI-powered personalized learning tailored to your needs' })}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
          >
            <Target className="w-12 h-12 text-purple-400 mb-4" />
            <h2 className="text-2xl font-bold mb-4">{t('weakAreas')}</h2>
            <div className="space-y-3">
              {['Writing', 'Pronunciation', 'Grammar'].map((skill, i) => (
                <div key={skill} className="flex items-center justify-between">
                  <span>{skill}</span>
                  <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-red-500 to-orange-500" style={{ width: `${60 + i * 10}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
          >
            <Zap className="w-12 h-12 text-amber-400 mb-4" />
            <h2 className="text-2xl font-bold mb-4">{t('recommendations')}</h2>
            <div className="space-y-4">
              <div className="p-4 bg-purple-500/20 rounded-lg border border-purple-500/30">
                <div className="font-bold mb-1">Focus: Writing Practice</div>
                <div className="text-sm text-slate-300">15 minutes daily recommended</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
