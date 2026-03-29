'use client';

/**
 * Advanced Analytics Dashboard
 * Comprehensive learning analytics with charts and insights
 */

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import {
  BarChart3,
  TrendingUp,
  Clock,
  Target,
  Brain,
  Flame,
  Trophy,
  Calendar,
  AlertTriangle,
  Zap,
  ChevronRight,
  RefreshCw,
  Download,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Navbar, Sidebar, Footer } from '@/components/layout';
import { useAnalyticsStore } from '@/stores/useAnalyticsStore';
import { useGamificationStore } from '@/stores/useGamificationStore';
import {
  AccuracyTrendChart,
  TimeDistributionChart,
  SkillRadarChart,
  WeeklyActivityChart,
} from '@/components/analytics';

function formatTime(seconds: number): string {
  if (seconds < 60) return `${seconds}s`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m`;
  const hours = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
}

function formatDate(dateStr: string | null): string {
  if (!dateStr || dateStr === 'Mastered') return dateStr || '—';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export default function AnalyticsPage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const t = useTranslations('analytics');
  const tCommon = useTranslations('common');
  
  const {
    getStudyTime,
    getAccuracyTrend,
    getTimeDistribution,
    getSkillBalance,
    getWeakAreas,
    getPredictedMasteryDates,
    getWeeklyActivity,
    getStreakHistory,
    getLearningVelocity,
    skillAccuracy,
  } = useAnalyticsStore();
  
  const { stats, xpHistory } = useGamificationStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Memoize expensive calculations
  const studyTimeToday = useMemo(() => mounted ? getStudyTime('today') : 0, [mounted, getStudyTime]);
  const studyTimeWeek = useMemo(() => mounted ? getStudyTime('week') : 0, [mounted, getStudyTime]);
  const studyTimeMonth = useMemo(() => mounted ? getStudyTime('month') : 0, [mounted, getStudyTime]);
  const studyTimeAll = useMemo(() => mounted ? getStudyTime('all') : 0, [mounted, getStudyTime]);
  
  const accuracyTrend = useMemo(() => mounted ? getAccuracyTrend(14) : [], [mounted, getAccuracyTrend]);
  const timeDistribution = useMemo(() => mounted ? getTimeDistribution() : [], [mounted, getTimeDistribution]);
  const skillBalance = useMemo(() => mounted ? getSkillBalance() : [], [mounted, getSkillBalance]);
  const weakAreas = useMemo(() => mounted ? getWeakAreas() : [], [mounted, getWeakAreas]);
  const masteryPredictions = useMemo(() => mounted ? getPredictedMasteryDates() : [], [mounted, getPredictedMasteryDates]);
  const weeklyActivity = useMemo(() => mounted ? getWeeklyActivity() : [], [mounted, getWeeklyActivity]);
  const streakHistory = useMemo(() => mounted ? getStreakHistory() : [], [mounted, getStreakHistory]);
  const learningVelocity = useMemo(() => mounted ? getLearningVelocity() : 0, [mounted, getLearningVelocity]);

  // Calculate overall accuracy
  const overallAccuracy = useMemo(() => {
    if (!mounted) return 0;
    let totalCorrect = 0;
    let totalQuestions = 0;
    Object.values(skillAccuracy).forEach(skill => {
      totalCorrect += skill.correct;
      totalQuestions += skill.total;
    });
    return totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
  }, [mounted, skillAccuracy]);

  // Active days this month
  const activeDaysThisMonth = useMemo(() => {
    return streakHistory.filter(d => d.active).length;
  }, [streakHistory]);

  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 overflow-y-auto px-4 py-6 lg:px-8">
          <div className="mx-auto max-w-7xl space-y-6">
            {/* Header */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-foreground">
                  {t('title')}
                </h1>
                <p className="mt-1 text-muted-foreground">
                  {t('subtitle')}
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-2">
                  <RefreshCw className="h-4 w-4" />
                  {t('refresh')}
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="h-4 w-4" />
                  {t('export')}
                </Button>
              </div>
            </div>

            {/* Quick Stats Cards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {/* Total Study Time */}
              <Card className="border-border/50 bg-card shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {t('totalStudyTime')}
                  </CardTitle>
                  <Clock className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">
                    {formatTime(studyTimeAll)}
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{t('today')}: {formatTime(studyTimeToday)}</span>
                    <span>•</span>
                    <span>{t('week')}: {formatTime(studyTimeWeek)}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Accuracy Rate */}
              <Card className="border-border/50 bg-card shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {t('overallAccuracy')}
                  </CardTitle>
                  <Target className="h-4 w-4 text-chart-2" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">
                    {overallAccuracy}%
                  </div>
                  <Progress value={overallAccuracy} className="mt-2 h-2" />
                </CardContent>
              </Card>

              {/* Learning Velocity */}
              <Card className="border-border/50 bg-card shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {t('learningVelocity')}
                  </CardTitle>
                  <TrendingUp className="h-4 w-4 text-chart-3" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">
                    {learningVelocity}
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {t('exercisesPerWeek')}
                  </p>
                </CardContent>
              </Card>

              {/* Current Streak */}
              <Card className="border-border/50 bg-card shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {t('currentStreak')}
                  </CardTitle>
                  <Flame className="h-4 w-4 text-orange-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">
                    {stats?.streak || 0} {tCommon('days')}
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {t('activeDays')}: {activeDaysThisMonth}/30
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Tabs for Different Views */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
              <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-none lg:inline-flex">
                <TabsTrigger value="overview" className="gap-2">
                  <BarChart3 className="h-4 w-4" />
                  <span className="hidden sm:inline">{t('overview')}</span>
                </TabsTrigger>
                <TabsTrigger value="skills" className="gap-2">
                  <Brain className="h-4 w-4" />
                  <span className="hidden sm:inline">{t('skills')}</span>
                </TabsTrigger>
                <TabsTrigger value="progress" className="gap-2">
                  <TrendingUp className="h-4 w-4" />
                  <span className="hidden sm:inline">{t('progress')}</span>
                </TabsTrigger>
                <TabsTrigger value="predictions" className="gap-2">
                  <Calendar className="h-4 w-4" />
                  <span className="hidden sm:inline">{t('predictions')}</span>
                </TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-4">
                <div className="grid gap-4 lg:grid-cols-2">
                  {/* Accuracy Trend Chart */}
                  <Card className="border-border/50 bg-card shadow-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-primary" />
                        {t('accuracyTrend')}
                      </CardTitle>
                      <CardDescription>{t('last14Days')}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <AccuracyTrendChart data={accuracyTrend} />
                    </CardContent>
                  </Card>

                  {/* Weekly Activity Chart */}
                  <Card className="border-border/50 bg-card shadow-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-chart-2" />
                        {t('weeklyActivity')}
                      </CardTitle>
                      <CardDescription>{t('thisWeek')}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <WeeklyActivityChart data={weeklyActivity} />
                    </CardContent>
                  </Card>
                </div>

                {/* Streak Calendar */}
                <Card className="border-border/50 bg-card shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Flame className="h-5 w-5 text-orange-500" />
                      {t('streakCalendar')}
                    </CardTitle>
                    <CardDescription>{t('last30Days')}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1">
                      {streakHistory.map((day, index) => (
                        <div
                          key={index}
                          className={`h-4 w-4 rounded-sm transition-colors ${
                            day.active
                              ? 'bg-primary hover:bg-primary/80'
                              : 'bg-muted hover:bg-muted/80'
                          }`}
                          title={`${day.date}: ${day.active ? 'Active' : 'Inactive'}`}
                        />
                      ))}
                    </div>
                    <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-sm bg-muted" />
                        <span>{t('inactive')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-sm bg-primary" />
                        <span>{t('active')}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Skills Tab */}
              <TabsContent value="skills" className="space-y-4">
                <div className="grid gap-4 lg:grid-cols-2">
                  {/* Skill Radar Chart */}
                  <Card className="border-border/50 bg-card shadow-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Brain className="h-5 w-5 text-chart-3" />
                        {t('skillBalance')}
                      </CardTitle>
                      <CardDescription>{t('accuracyBySkill')}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <SkillRadarChart data={skillBalance} />
                    </CardContent>
                  </Card>

                  {/* Skill Breakdown */}
                  <Card className="border-border/50 bg-card shadow-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="h-5 w-5 text-primary" />
                        {t('skillBreakdown')}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {skillBalance.map((skill) => (
                        <div key={skill.skill} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium capitalize">
                              {skill.skill}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              {skill.value}%
                            </span>
                          </div>
                          <Progress
                            value={skill.value}
                            className={`h-2 ${
                              skill.value >= 80
                                ? '[&>div]:bg-green-500'
                                : skill.value >= 60
                                ? '[&>div]:bg-yellow-500'
                                : '[&>div]:bg-red-500'
                            }`}
                          />
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>

                {/* Weak Areas */}
                {weakAreas.length > 0 && (
                  <Card className="border-orange-200 bg-orange-50/50 dark:border-orange-900 dark:bg-orange-950/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-400">
                        <AlertTriangle className="h-5 w-5" />
                        {t('areasToImprove')}
                      </CardTitle>
                      <CardDescription>{t('weakAreasDesc')}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {weakAreas.map((area, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between rounded-lg border border-orange-200 bg-white p-3 dark:border-orange-800 dark:bg-orange-950/30"
                          >
                            <div className="flex-1">
                              <p className="font-medium text-foreground">{area.area}</p>
                              <p className="text-sm text-muted-foreground">
                                {area.recommendation}
                              </p>
                            </div>
                            <Badge variant="secondary" className="ml-4">
                              {area.accuracy}%
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              {/* Progress Tab */}
              <TabsContent value="progress" className="space-y-4">
                <div className="grid gap-4 lg:grid-cols-2">
                  {/* Time Distribution Chart */}
                  <Card className="border-border/50 bg-card shadow-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-chart-1" />
                        {t('timeByPhase')}
                      </CardTitle>
                      <CardDescription>{t('minutesPerPhase')}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {timeDistribution.length > 0 ? (
                        <TimeDistributionChart data={timeDistribution} />
                      ) : (
                        <div className="flex h-[300px] items-center justify-center text-muted-foreground">
                          {t('noData')}
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* XP History */}
                  <Card className="border-border/50 bg-card shadow-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Zap className="h-5 w-5 text-yellow-500" />
                        {t('recentXP')}
                      </CardTitle>
                      <CardDescription>{t('last10XPGains')}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 max-h-[300px] overflow-y-auto">
                        {(xpHistory || []).slice(-10).reverse().map((xp, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between rounded-lg border border-border/50 bg-muted/30 p-2"
                          >
                            <div className="flex items-center gap-2">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                                <Zap className="h-4 w-4 text-primary" />
                              </div>
                              <span className="text-sm">{xp.reason}</span>
                            </div>
                            <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                              +{xp.amount} XP
                            </Badge>
                          </div>
                        ))}
                        {(!xpHistory || xpHistory.length === 0) && (
                          <div className="flex h-[200px] items-center justify-center text-muted-foreground">
                            {t('noXPHistory')}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Study Time Breakdown */}
                <Card className="border-border/50 bg-card shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      {t('studyTimeBreakdown')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      <div className="rounded-lg border border-border/50 bg-muted/30 p-4 text-center">
                        <p className="text-2xl font-bold text-foreground">
                          {formatTime(studyTimeToday)}
                        </p>
                        <p className="text-sm text-muted-foreground">{t('today')}</p>
                      </div>
                      <div className="rounded-lg border border-border/50 bg-muted/30 p-4 text-center">
                        <p className="text-2xl font-bold text-foreground">
                          {formatTime(studyTimeWeek)}
                        </p>
                        <p className="text-sm text-muted-foreground">{t('thisWeek')}</p>
                      </div>
                      <div className="rounded-lg border border-border/50 bg-muted/30 p-4 text-center">
                        <p className="text-2xl font-bold text-foreground">
                          {formatTime(studyTimeMonth)}
                        </p>
                        <p className="text-sm text-muted-foreground">{t('thisMonth')}</p>
                      </div>
                      <div className="rounded-lg border border-border/50 bg-muted/30 p-4 text-center">
                        <p className="text-2xl font-bold text-foreground">
                          {formatTime(studyTimeAll)}
                        </p>
                        <p className="text-sm text-muted-foreground">{t('allTime')}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Predictions Tab */}
              <TabsContent value="predictions" className="space-y-4">
                <Card className="border-border/50 bg-card shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-primary" />
                      {t('predictedMastery')}
                    </CardTitle>
                    <CardDescription>{t('masteryPredictionDesc')}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {masteryPredictions.map((prediction) => (
                        <div
                          key={prediction.phase}
                          className="flex items-center justify-between rounded-lg border border-border/50 p-4"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                              {prediction.phase}
                            </div>
                            <div>
                              <p className="font-medium text-foreground">{prediction.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {t('phase')} {prediction.phase}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            {prediction.predictedDate === 'Mastered' ? (
                              <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                                ✓ {t('mastered')}
                              </Badge>
                            ) : prediction.predictedDate ? (
                              <div>
                                <p className="font-medium text-foreground">
                                  {formatDate(prediction.predictedDate)}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  {t('estimatedDate')}
                                </p>
                              </div>
                            ) : (
                              <Badge variant="secondary">{t('startLearning')}</Badge>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Tips to Speed Up */}
                <Card className="border-green-200 bg-green-50/50 dark:border-green-900 dark:bg-green-950/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
                      <Zap className="h-5 w-5" />
                      {t('speedUpLearning')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-green-700 dark:text-green-400">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0" />
                        {t('tip1')}
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0" />
                        {t('tip2')}
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0" />
                        {t('tip3')}
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
