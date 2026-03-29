'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Download, Shield, Check, Clock, Trophy, Star } from 'lucide-react';
import { useCertificationStore } from '@/stores/useCertificationStore';
import { useGamificationStore } from '@/stores/useGamificationStore';

/**
 * Certification Page - Academic elegance aesthetic
 * Design: Refined, professional, scholarly
 * Typography: Serif for certificates, clean sans for UI
 * Color: Gold accents, deep navy, crisp whites
 */
export default function CertificationPage() {
  const t = useTranslations('certification');
  const { certificates } = useCertificationStore();
  const { stats } = useGamificationStore();
  const { level, xp } = stats;
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const CEFR_LEVELS = [
    { level: 'A1', phase: 1, name: 'Beginner', color: '#10b981', required: 5000 },
    { level: 'A2', phase: 2, name: 'Elementary', color: '#14b8a6', required: 15000 },
    { level: 'B1', phase: 3, name: 'Intermediate', color: '#06b6d4', required: 35000 },
    { level: 'B2', phase: 4, name: 'Upper Int.', color: '#3b82f6', required: 65000 },
    { level: 'C1', phase: 5, name: 'Advanced', color: '#8b5cf6', required: 100000 },
    { level: 'C2', phase: 5, name: 'Mastery', color: '#d97706', required: 150000 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 mb-6 shadow-2xl shadow-amber-500/30">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t('subtitle', { default: 'Validate your Arabic proficiency with internationally recognized certifications' })}
          </p>
        </motion.div>

        {/* CEFR Progress Timeline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <Trophy className="w-6 h-6 text-amber-500" />
              {t('cefrProgress', { default: 'Your CEFR Journey' })}
            </h2>
            
            <div className="relative">
              {/* Progress Line */}
              <div className="absolute top-8 left-0 right-0 h-2 bg-slate-200 dark:bg-slate-700 rounded-full" />
              <div
                className="absolute top-8 left-0 h-2 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full transition-all duration-1000"
                style={{ width: `${Math.min((xp / 150000) * 100, 100)}%` }}
              />
              
              {/* Level Markers */}
              <div className="relative flex justify-between">
                {CEFR_LEVELS.map((cefrLevel, index) => {
                  const isUnlocked = xp >= cefrLevel.required;
                  const isCurrent = xp >= cefrLevel.required && (index === CEFR_LEVELS.length - 1 || xp < CEFR_LEVELS[index + 1].required);
                  
                  return (
                    <motion.div
                      key={cefrLevel.level}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex flex-col items-center"
                    >
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-black shadow-lg transition-all ${
                          isUnlocked
                            ? 'bg-gradient-to-br text-white scale-110'
                            : 'bg-slate-200 dark:bg-slate-700 text-slate-400'
                        } ${isCurrent ? 'ring-4 ring-amber-400 ring-offset-4 dark:ring-offset-slate-900' : ''}`}
                        style={isUnlocked ? {
                          backgroundImage: `linear-gradient(135deg, ${cefrLevel.color}, ${cefrLevel.color}dd)`,
                          boxShadow: `0 10px 30px ${cefrLevel.color}40`
                        } : {}}
                      >
                        {isUnlocked ? <Check className="w-8 h-8" /> : cefrLevel.level}
                      </div>
                      <div className="mt-4 text-center">
                        <div className="font-bold text-slate-900 dark:text-white">{cefrLevel.level}</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">{cefrLevel.name}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                          {cefrLevel.required.toLocaleString()} XP
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Earned Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
            <Award className="w-8 h-8 text-amber-500" />
            {t('certificates')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.length > 0 ? (
              certificates.map((cert) => (
                <motion.div
                  key={cert.id}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden border-2 border-slate-200 dark:border-slate-700 cursor-pointer"
                  onClick={() => setSelectedCert(cert.id)}
                >
                  {/* Certificate Preview */}
                  <div className="relative h-48 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 p-6">
                    <div className="absolute inset-0 opacity-5" style={{
                      backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 11px)'
                    }} />
                    <div className="relative h-full flex flex-col items-center justify-center text-center">
                      <Award className="w-12 h-12 text-amber-600 dark:text-amber-400 mb-3" />
                      <div className="text-2xl font-black text-slate-900 dark:text-white mb-1">
                        {cert.cefrLevel}
                      </div>
                      <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
                        Phase {cert.phase}
                      </div>
                    </div>
                  </div>
                  
                  {/* Certificate Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-lg font-bold text-slate-900 dark:text-white">
                        {t('phaseExam', { phase: cert.phase })}
                      </div>
                      <div className="text-sm text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                        <Check className="w-4 h-4" />
                        {t('passed')}
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        <span>{t('score')}: <span className="font-bold text-slate-900 dark:text-white">{cert.score}%</span></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{new Date(cert.earnedAt).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4" />
                        <span className="text-xs font-mono">{cert.verificationCode}</span>
                      </div>
                    </div>
                    
                    <button className="w-full mt-4 py-2 px-4 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-bold transition-colors flex items-center justify-center gap-2">
                      <Download className="w-4 h-4" />
                      {t('downloadPdf')}
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-16 text-slate-500 dark:text-slate-400">
                <Award className="w-16 h-16 mx-auto mb-4 opacity-30" />
                <p className="text-lg">{t('noCertificates', { default: 'No certificates earned yet' })}</p>
                <p className="text-sm mt-2">{t('takeExamToEarn', { default: 'Complete phase exams to earn certificates' })}</p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Available Assessments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            {t('availableExams', { default: 'Available Assessments' })}
          </h2>
          
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((phase) => {
              const isLocked = level < phase;
              const completed = certificates.some(c => c.phase === phase);
              
              return (
                <motion.div
                  key={phase}
                  whileHover={!isLocked ? { scale: 1.01 } : {}}
                  className={`bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border-2 ${
                    isLocked
                      ? 'border-slate-200 dark:border-slate-700 opacity-60'
                      : completed
                      ? 'border-emerald-500'
                      : 'border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-black ${
                        isLocked
                          ? 'bg-slate-200 dark:bg-slate-700 text-slate-400'
                          : completed
                          ? 'bg-emerald-500 text-white'
                          : 'bg-gradient-to-br from-amber-400 to-amber-600 text-white'
                      }`}>
                        {completed ? <Check className="w-8 h-8" /> : phase}
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                          {t('phaseExam', { phase })}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                          <span>50 {t('questions', { default: 'questions' })}</span>
                          <span>•</span>
                          <span>60 {t('minutes')}</span>
                          <span>•</span>
                          <span>{t('passingScore')}: 70%</span>
                        </div>
                      </div>
                    </div>
                    
                    {!isLocked && (
                      <button
                        disabled={completed}
                        className={`px-8 py-3 rounded-lg font-bold transition-all ${
                          completed
                            ? 'bg-slate-200 dark:bg-slate-700 text-slate-500 cursor-not-allowed'
                            : 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg shadow-emerald-500/30'
                        }`}
                      >
                        {completed ? t('completed') : t('takeExam')}
                      </button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
