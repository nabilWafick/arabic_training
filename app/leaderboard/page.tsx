'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, TrendingUp, TrendingDown, Crown, Award, Star, Flame } from 'lucide-react';
import { useLeaderboardStore, LEAGUES } from '@/stores/useLeaderboardStore';
import { useGamificationStore } from '@/stores/useGamificationStore';

/**
 * Leaderboard Page - Competitive gaming aesthetic
 * Design: Bold neon accents, dark mode optimized, esports-inspired
 * Typography: Heavy weights for competitive feel
 * Animation: Rank movements, glowing effects
 */
export default function LeaderboardPage() {
  const t = useTranslations('leaderboard');
  const [activeTab, setActiveTab] = useState<'global' | 'weekly' | 'friends'>('weekly');
  const { globalLeaderboard, weeklyLeaderboard, friendsLeaderboard, userRank, weekStartDate } = useLeaderboardStore();
  const { stats } = useGamificationStore();
  const { xp } = stats;

  const leaderboard = activeTab === 'global' ? globalLeaderboard : activeTab === 'weekly' ? weeklyLeaderboard : friendsLeaderboard;
  const currentUserLeague = Object.values(LEAGUES).find(
    (league) => xp >= league.minXP && xp <= league.maxXP
  );
  const nextLeague = Object.values(LEAGUES).find((league) => league.minXP > xp);
  const progressToNext = nextLeague
    ? ((xp - (currentUserLeague?.minXP || 0)) / (nextLeague.minXP - (currentUserLeague?.minXP || 0))) * 100
    : 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(16, 185, 129) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header with league badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl font-black tracking-tight mb-4 bg-gradient-to-r from-emerald-400 via-amber-400 to-emerald-400 bg-clip-text text-transparent">
            {t('title')}
          </h1>
          <p className="text-slate-400 text-lg">{t('subtitle', { default: 'Compete with learners worldwide' })}</p>
        </motion.div>

        {/* User League Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-3xl mx-auto mb-8 relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 p-8"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-3xl" />
          
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl font-black shadow-2xl"
                style={{
                  backgroundColor: currentUserLeague?.color || '#CD7F32',
                  boxShadow: `0 0 40px ${currentUserLeague?.color}40`
                }}
              >
                {currentUserLeague?.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Crown className="w-5 h-5 text-amber-400" />
                  <span className="text-2xl font-black tracking-tight">
                    {currentUserLeague?.name || 'Bronze'} {t('league')}
                  </span>
                </div>
                <div className="text-slate-400">
                  {t('yourRank')}: <span className="text-emerald-400 font-bold">#{userRank}</span>
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-3xl font-black text-emerald-400">{xp.toLocaleString()} XP</div>
              {nextLeague && (
                <div className="text-sm text-slate-400 mt-1">
                  {(nextLeague.minXP - xp).toLocaleString()} {t('toNextLeague')}
                </div>
              )}
            </div>
          </div>

          {nextLeague && (
            <div className="mt-6">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-slate-400">Progress to {nextLeague.name}</span>
                <span className="text-emerald-400 font-bold">{Math.round(progressToNext)}%</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progressToNext}%` }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-emerald-500 to-amber-500"
                  style={{ boxShadow: '0 0 20px rgb(16, 185, 129)' }}
                />
              </div>
            </div>
          )}
        </motion.div>

        {/* Tabs */}
        <div className="max-w-5xl mx-auto mb-8">
          <div className="flex gap-2 bg-slate-800/30 p-2 rounded-xl border border-slate-700/50 backdrop-blur-sm">
            {(['global', 'weekly', 'friends'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 px-6 rounded-lg font-bold tracking-wide transition-all ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/50'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                {t(tab)}
              </button>
            ))}
          </div>
        </div>

        {/* Leaderboard Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-5xl mx-auto bg-slate-800/30 rounded-2xl border border-slate-700/50 backdrop-blur-sm overflow-hidden"
        >
          {/* Top 3 Podium */}
          <div className="grid grid-cols-3 gap-4 p-8 bg-gradient-to-b from-slate-800/50 to-transparent border-b border-slate-700/50">
            {[1, 0, 2].map((index, displayIndex) => {
              const user = leaderboard[index];
              if (!user) return null;
              const podiumHeight = index === 0 ? 'h-32' : index === 1 ? 'h-24' : 'h-20';
              const medalColor = index === 0 ? 'text-amber-400' : index === 1 ? 'text-slate-300' : 'text-orange-400';
              
              return (
                <motion.div
                  key={user.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * displayIndex }}
                  className="text-center"
                >
                  <div className={`${podiumHeight} bg-gradient-to-t from-slate-700/50 to-slate-800/50 rounded-t-xl flex items-end justify-center pb-4 mb-4 border border-slate-600/50`}>
                    <Award className={`w-12 h-12 ${medalColor}`} />
                  </div>
                  <div className="text-4xl mb-2">{user.avatar}</div>
                  <div className="font-bold text-white mb-1">{user.name}</div>
                  <div className="text-emerald-400 font-black text-lg">{user.xp.toLocaleString()} XP</div>
                  <div
                    className="text-xs font-bold mt-2 px-3 py-1 rounded-full inline-block"
                    style={{
                      backgroundColor: `${LEAGUES[user.league].color}20`,
                      color: LEAGUES[user.league].color
                    }}
                  >
                    {LEAGUES[user.league].name}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Ranks 4+ */}
          <div className="divide-y divide-slate-700/30">
            {leaderboard.slice(3).map((user, index) => (
              <motion.div
                key={user.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index }}
                className={`flex items-center gap-6 p-6 hover:bg-slate-700/30 transition-colors ${
                  user.id === 'current-user' ? 'bg-emerald-500/10 border-l-4 border-emerald-500' : ''
                }`}
              >
                <div className="w-12 text-center">
                  <span className="text-2xl font-black text-slate-500">#{index + 4}</span>
                </div>
                
                <div className="text-3xl">{user.avatar}</div>
                
                <div className="flex-1">
                  <div className="font-bold text-white mb-1">{user.name}</div>
                  <div
                    className="text-xs font-bold px-2 py-1 rounded-md inline-block"
                    style={{
                      backgroundColor: `${LEAGUES[user.league].color}20`,
                      color: LEAGUES[user.league].color
                    }}
                  >
                    {LEAGUES[user.league].name}
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-xl font-black text-emerald-400">{user.xp.toLocaleString()}</div>
                  <div className="text-xs text-slate-400">XP</div>
                </div>
                
                {user.previousRank ? user.rank - user.previousRank : 0 !== 0 && (
                  <div className={`flex items-center gap-1 ${user.previousRank ? user.rank - user.previousRank : 0 > 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                    {user.previousRank ? user.rank - user.previousRank : 0 > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                    <span className="text-sm font-bold">{Math.abs(user.previousRank ? user.rank - user.previousRank : 0)}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Weekly Reset Timer */}
        {activeTab === 'weekly' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-5xl mx-auto mt-8 text-center"
          >
            <div className="inline-flex items-center gap-2 bg-slate-800/50 px-6 py-3 rounded-full border border-slate-700/50 backdrop-blur-sm">
              <Flame className="w-4 h-4 text-amber-400" />
              <span className="text-slate-300">
                {t('weeklyReset')}: <span className="font-bold text-white">Monday 00:00</span>
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
