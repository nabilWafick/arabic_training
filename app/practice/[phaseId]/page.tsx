'use client';

/**
 * Phase Practice Overview Page
 * Shows all practice types available for a specific phase
 * with progress tracking and gamification elements
 */

import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { 
  PenTool, 
  Headphones, 
  Mic2, 
  BookOpen,
  ChevronLeft,
  Star,
  Trophy,
  Flame,
  Target,
  Lock,
  CheckCircle2,
  Play,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { useProgressStore } from '@/stores/useProgressStore';
import { useGamificationStore } from '@/stores/useGamificationStore';

// Phase configuration
const PHASES = [
  {
    id: 1,
    name: 'Foundations',
    nameAr: 'الأساسيات',
    nameFr: 'Les Fondations',
    icon: 'أ',
    color: '#c9a85c',
    gradient: 'from-[#c9a85c] to-[#a08a4a]',
  },
  {
    id: 2,
    name: 'Building Blocks',
    nameAr: 'البناء',
    nameFr: 'Les Blocs',
    icon: 'ب',
    color: '#4a9c6d',
    gradient: 'from-[#4a9c6d] to-[#3a7c5d]',
  },
  {
    id: 3,
    name: 'Grammar Foundations',
    nameAr: 'أساسيات القواعد',
    nameFr: 'Bases Grammaticales',
    icon: 'ج',
    color: '#5a7fb8',
    gradient: 'from-[#5a7fb8] to-[#4a6fa8]',
  },
  {
    id: 4,
    name: 'Intermediate Skills',
    nameAr: 'المهارات المتوسطة',
    nameFr: 'Compétences Intermédiaires',
    icon: 'د',
    color: '#9b59b6',
    gradient: 'from-[#9b59b6] to-[#8b49a6]',
  },
  {
    id: 5,
    name: 'Advanced Fluency',
    nameAr: 'الطلاقة المتقدمة',
    nameFr: 'Maîtrise Avancée',
    icon: 'ه',
    color: '#e74c3c',
    gradient: 'from-[#e74c3c] to-[#c73c2c]',
  },
];

// Practice types configuration
const PRACTICE_TYPES = [
  {
    id: 'writing',
    icon: PenTool,
    color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
    borderColor: 'border-amber-500/30',
    exercises: { 1: 15, 2: 20, 3: 25, 4: 30, 5: 35 },
  },
  {
    id: 'listening',
    icon: Headphones,
    color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
    borderColor: 'border-blue-500/30',
    exercises: { 1: 8, 2: 12, 3: 15, 4: 20, 5: 25 },
  },
  {
    id: 'speaking',
    icon: Mic2,
    color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
    borderColor: 'border-purple-500/30',
    exercises: { 1: 8, 2: 12, 3: 15, 4: 18, 5: 22 },
  },
  {
    id: 'vocabulary',
    icon: BookOpen,
    color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    borderColor: 'border-emerald-500/30',
    exercises: { 1: 10, 2: 20, 3: 25, 4: 30, 5: 35 },
  },
];

export default function PhasePracticePage() {
  const params = useParams();
  const phaseId = parseInt(params.phaseId as string);
  const t = useTranslations();
  
  const { currentPhaseId, phases } = useProgressStore();
  const { stats } = useGamificationStore();
  
  // Validate phase ID
  if (isNaN(phaseId) || phaseId < 1 || phaseId > 5) {
    notFound();
  }
  
  const phase = PHASES[phaseId - 1];
  const phaseProgress = phases[phaseId] || { overallProgress: 0, completedLessons: 0 };
  const isLocked = phaseId > currentPhaseId && phaseProgress.overallProgress < 70;
  const isCurrentPhase = phaseId === currentPhaseId;
  
  // Calculate practice progress (mock data for now)
  const practiceProgress = {
    writing: Math.min(100, Math.floor(phaseProgress.overallProgress * 1.2)),
    listening: Math.min(100, Math.floor(phaseProgress.overallProgress * 0.9)),
    speaking: Math.min(100, Math.floor(phaseProgress.overallProgress * 0.7)),
    vocabulary: Math.min(100, Math.floor(phaseProgress.overallProgress * 1.1)),
  };
  
  const totalProgress = Math.floor(
    (practiceProgress.writing + 
     practiceProgress.listening + 
     practiceProgress.speaking + 
     practiceProgress.vocabulary) / 4
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div 
        className="relative overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, ${phase.color}15, ${phase.color}05)` 
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl"
            style={{ backgroundColor: phase.color }}
          />
        </div>
        
        <div className="container mx-auto px-4 py-8 relative z-10">
          {/* Back button */}
          <Link href="/practice">
            <Button variant="ghost" size="sm" className="mb-4 -ml-2">
              <ChevronLeft className="w-4 h-4 mr-1" />
              {t('common.back')}
            </Button>
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            {/* Phase info */}
            <div className="flex items-center gap-4">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', bounce: 0.5 }}
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl font-bold shadow-lg"
                style={{ 
                  background: `linear-gradient(135deg, ${phase.color}, ${phase.color}cc)`,
                  color: 'white'
                }}
              >
                {phase.icon}
              </motion.div>
              
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium text-muted-foreground">
                    {t('curriculum.phase')} {phaseId}
                  </span>
                  {isCurrentPhase && (
                    <Badge 
                      variant="secondary"
                      className="text-xs"
                      style={{ backgroundColor: `${phase.color}20`, color: phase.color }}
                    >
                      {t('practice.current')}
                    </Badge>
                  )}
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                  {phase.name}
                </h1>
                <p className="text-muted-foreground text-sm mt-1">
                  {phase.nameAr}
                </p>
              </div>
            </div>
            
            {/* Stats */}
            <div className="flex gap-4">
              <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl px-4 py-3 shadow-sm">
                <div className="flex items-center gap-2 text-amber-500">
                  <Star className="w-5 h-5" />
                  <span className="font-bold">{stats.xp}</span>
                </div>
                <span className="text-xs text-muted-foreground">XP</span>
              </div>
              
              <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl px-4 py-3 shadow-sm">
                <div className="flex items-center gap-2 text-orange-500">
                  <Flame className="w-5 h-5" />
                  <span className="font-bold">{stats.streak}</span>
                </div>
                <span className="text-xs text-muted-foreground">{t('practice.stats.streak')}</span>
              </div>
              
              <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl px-4 py-3 shadow-sm">
                <div className="flex items-center gap-2 text-primary">
                  <Target className="w-5 h-5" />
                  <span className="font-bold">{totalProgress}%</span>
                </div>
                <span className="text-xs text-muted-foreground">{t('practice.progress')}</span>
              </div>
            </div>
          </div>
          
          {/* Overall progress bar */}
          <div className="mt-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">{t('curriculum.progress')}</span>
              <span className="font-medium">{totalProgress}%</span>
            </div>
            <Progress 
              value={totalProgress} 
              className="h-2"
              style={{ 
                '--progress-color': phase.color 
              } as React.CSSProperties}
            />
          </div>
        </div>
      </div>
      
      {/* Practice Types Grid */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold mb-6">{t('practice.modes.vocabulary')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRACTICE_TYPES.map((type, index) => {
            const Icon = type.icon;
            const progress = practiceProgress[type.id as keyof typeof practiceProgress];
            const exerciseCount = type.exercises[phaseId as keyof typeof type.exercises];
            const isComplete = progress === 100;
            
            return (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={isLocked ? '#' : `/practice/${phaseId}/${type.id}`}>
                  <Card 
                    className={cn(
                      'relative overflow-hidden transition-all duration-300 hover:shadow-lg group',
                      type.borderColor,
                      isLocked && 'opacity-50 cursor-not-allowed',
                      !isLocked && 'hover:scale-[1.02] cursor-pointer'
                    )}
                  >
                    {/* Completion badge */}
                    {isComplete && (
                      <div className="absolute top-3 right-3">
                        <CheckCircle2 className="w-6 h-6 text-green-500" />
                      </div>
                    )}
                    
                    {/* Lock overlay */}
                    {isLocked && (
                      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-10 flex items-center justify-center">
                        <div className="text-center">
                          <Lock className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">
                            {t('curriculum.locked')}
                          </p>
                        </div>
                      </div>
                    )}
                    
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className={cn('p-3 rounded-xl', type.color)}>
                          <Icon className="w-6 h-6" />
                        </div>
                        
                        <Badge variant="secondary" className="text-xs">
                          {exerciseCount} {t('practice.exercises')}
                        </Badge>
                      </div>
                      
                      <h3 className="text-lg font-semibold mb-1">
                        {t(`practice.modes.${type.id}`)}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {t(`practice.modes.${type.id}Desc`)}
                      </p>
                      
                      {/* Progress */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">{t('practice.progress')}</span>
                          <span className="font-medium">{progress}%</span>
                        </div>
                        <Progress value={progress} className="h-2" />
                      </div>
                      
                      {/* Action button */}
                      <Button 
                        className="w-full mt-4 group-hover:bg-primary"
                        variant={progress > 0 ? 'default' : 'outline'}
                        disabled={isLocked}
                      >
                        {isLocked ? (
                          <>
                            <Lock className="w-4 h-4 mr-2" />
                            {t('curriculum.locked')}
                          </>
                        ) : progress > 0 ? (
                          <>
                            <Play className="w-4 h-4 mr-2" />
                            {t('common.continue')}
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-4 h-4 mr-2" />
                            {t('common.start')}
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
        
        {/* Daily Challenge Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <Card className="bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 border-primary/20">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-primary to-purple-500 text-white">
                    <Trophy className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{t('practice.dailyChallenge')}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t('practice.dailyChallengeDesc')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">+100</div>
                    <div className="text-xs text-muted-foreground">XP</div>
                  </div>
                  
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90"
                  >
                    {t('practice.startChallenge')}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
