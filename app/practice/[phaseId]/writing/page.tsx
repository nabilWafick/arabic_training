'use client';

/**
 * Phase Writing Practice Page
 * Interactive writing exercises with letter tracing, 
 * word formation, and sentence construction based on phase
 * Now with AI-powered exercise generation!
 */

import { useState, useEffect } from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  PenTool,
  RefreshCw,
  Volume2,
  CheckCircle2,
  XCircle,
  Lightbulb,
  ArrowRight,
  Star,
  Trophy,
  Sparkles,
  Eye,
  EyeOff,
  Brain,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { useProgressStore } from '@/stores/useProgressStore';
import { useGamificationStore } from '@/stores/useGamificationStore';
import { useAudioStore } from '@/stores/useAudioStore';
import { ARABIC_ALPHABET } from '@/data/curriculum';
import { AIPracticeExercise } from '@/components/practice/AIPracticeExercise';

// Phase configuration
const PHASES = [
  { id: 1, name: 'Foundations', color: '#c9a85c', icon: 'أ' },
  { id: 2, name: 'Building Blocks', color: '#4a9c6d', icon: 'ب' },
  { id: 3, name: 'Grammar Foundations', color: '#5a7fb8', icon: 'ج' },
  { id: 4, name: 'Intermediate Skills', color: '#9b59b6', icon: 'د' },
  { id: 5, name: 'Advanced Fluency', color: '#e74c3c', icon: 'ه' },
];

// Exercise types by phase
type ExerciseType = 'letter-trace' | 'letter-forms' | 'word-write' | 'sentence-build' | 'paragraph';

interface Exercise {
  id: string;
  type: ExerciseType;
  prompt: string;
  promptAr: string;
  target: string;
  targetTranslit: string;
  hint?: string;
  options?: string[];
  difficulty: 'easy' | 'medium' | 'hard';
}

// Generate exercises based on phase
function getExercisesForPhase(phaseId: number): Exercise[] {
  switch (phaseId) {
    case 1:
      // Phase 1: Letter tracing and recognition
      return ARABIC_ALPHABET.slice(0, 10).flatMap((letter, idx) => [
        {
          id: `letter-trace-${idx}`,
          type: 'letter-trace' as ExerciseType,
          prompt: `Trace the letter "${letter.name}"`,
          promptAr: `ارسم الحرف "${letter.letter}"`,
          target: letter.letter,
          targetTranslit: letter.transliteration,
          hint: `This is the ${idx + 1}${['st', 'nd', 'rd'][idx] || 'th'} letter of the Arabic alphabet`,
          difficulty: 'easy',
        },
        {
          id: `letter-forms-${idx}`,
          type: 'letter-forms' as ExerciseType,
          prompt: `Write all forms of "${letter.name}"`,
          promptAr: `اكتب جميع أشكال "${letter.letter}"`,
          target: `${letter.isolated} ${letter.initial} ${letter.medial} ${letter.final}`,
          targetTranslit: letter.transliteration,
          hint: 'Isolated, Initial, Medial, Final',
          difficulty: 'medium',
        },
      ]);
      
    case 2:
      // Phase 2: Word writing
      const words2 = [
        { ar: 'بَيْت', tr: 'bayt', en: 'house' },
        { ar: 'كِتَاب', tr: 'kitaab', en: 'book' },
        { ar: 'قَلَم', tr: 'qalam', en: 'pen' },
        { ar: 'مَدْرَسَة', tr: 'madrasa', en: 'school' },
        { ar: 'طَالِب', tr: 'taalib', en: 'student' },
        { ar: 'مُعَلِّم', tr: 'mu3allim', en: 'teacher' },
        { ar: 'صَدِيق', tr: 'sadiiq', en: 'friend' },
        { ar: 'عَائِلَة', tr: '3aa2ila', en: 'family' },
      ];
      return words2.map((word, idx) => ({
        id: `word-write-${idx}`,
        type: 'word-write' as ExerciseType,
        prompt: `Write "${word.en}" in Arabic`,
        promptAr: `اكتب "${word.en}" بالعربية`,
        target: word.ar,
        targetTranslit: word.tr,
        hint: `Transliteration: ${word.tr}`,
        difficulty: idx < 4 ? 'easy' : 'medium',
      }));
      
    case 3:
      // Phase 3: Sentence building
      const sentences3 = [
        { ar: 'أَنَا طَالِب', tr: 'ana taalib', en: 'I am a student' },
        { ar: 'هَذَا كِتَابٌ', tr: 'haathaa kitaabun', en: 'This is a book' },
        { ar: 'البَيْتُ كَبِير', tr: 'al-baytu kabiir', en: 'The house is big' },
        { ar: 'المُعَلِّمُ فِي المَدْرَسَة', tr: 'al-mu3allimu fil-madrasa', en: 'The teacher is in the school' },
        { ar: 'أَقْرَأُ كِتَاباً', tr: 'aqra2u kitaaban', en: 'I am reading a book' },
      ];
      return sentences3.map((sent, idx) => ({
        id: `sentence-build-${idx}`,
        type: 'sentence-build' as ExerciseType,
        prompt: `Write: "${sent.en}"`,
        promptAr: `اكتب: "${sent.en}"`,
        target: sent.ar,
        targetTranslit: sent.tr,
        hint: `Structure: Subject + Predicate`,
        difficulty: idx < 2 ? 'easy' : idx < 4 ? 'medium' : 'hard',
      }));
      
    case 4:
      // Phase 4: Complex sentences
      const sentences4 = [
        { ar: 'ذَهَبْتُ إِلَى السُّوقِ وَاشْتَرَيْتُ خُبْزاً', tr: 'dhahabtu ilaa as-suuqi wa-ishtaraytu khubzan', en: 'I went to the market and bought bread' },
        { ar: 'الجَوُّ جَمِيلٌ اليَوْم', tr: 'al-jawwu jamiilun al-yawm', en: 'The weather is beautiful today' },
        { ar: 'أُحِبُّ أَنْ أَقْرَأَ الكُتُب', tr: 'uhibbu an aqra2a al-kutub', en: 'I love to read books' },
      ];
      return sentences4.map((sent, idx) => ({
        id: `sentence-complex-${idx}`,
        type: 'sentence-build' as ExerciseType,
        prompt: `Write: "${sent.en}"`,
        promptAr: `اكتب: "${sent.en}"`,
        target: sent.ar,
        targetTranslit: sent.tr,
        hint: `Use proper verb conjugation`,
        difficulty: 'hard',
      }));
      
    case 5:
      // Phase 5: Paragraph writing
      return [
        {
          id: 'paragraph-1',
          type: 'paragraph' as ExerciseType,
          prompt: 'Write a short paragraph about yourself (3-4 sentences)',
          promptAr: 'اكتب فقرة قصيرة عن نفسك (٣-٤ جمل)',
          target: '',
          targetTranslit: '',
          hint: 'Include: name, occupation, hobby, where you live',
          difficulty: 'hard',
        },
        {
          id: 'paragraph-2',
          type: 'paragraph' as ExerciseType,
          prompt: 'Describe your daily routine in Arabic',
          promptAr: 'صِف روتينك اليومي بالعربية',
          target: '',
          targetTranslit: '',
          hint: 'Use time expressions and verb conjugations',
          difficulty: 'hard',
        },
      ];
      
    default:
      return [];
  }
}

export default function PhaseWritingPage() {
  const params = useParams();
  const phaseId = parseInt(params.phaseId as string);
  const t = useTranslations();
  
  const { currentPhaseId, updatePracticeProgress, getPracticeProgress } = useProgressStore();
  const { addXP, incrementStat } = useGamificationStore();
  const { speak } = useAudioStore();
  
  // Validate phase ID
  if (isNaN(phaseId) || phaseId < 1 || phaseId > 5) {
    notFound();
  }
  
  const phase = PHASES[phaseId - 1];
  const exercises = getExercisesForPhase(phaseId);
  
  // Get current practice progress for display
  const practiceStats = getPracticeProgress(phaseId, 'writing');
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  
  const currentExercise = exercises[currentIndex];
  const progress = ((currentIndex) / exercises.length) * 100;
  
  // Reset state when exercise changes
  useEffect(() => {
    setUserInput('');
    setShowHint(false);
    setShowAnswer(false);
    setIsCorrect(null);
  }, [currentIndex]);
  
  const handleCheck = () => {
    if (!currentExercise) return;
    
    // Normalize both strings for comparison
    const normalizedInput = userInput.trim().replace(/\s+/g, ' ');
    const normalizedTarget = currentExercise.target.trim().replace(/\s+/g, ' ');
    
    // For paragraph exercises, we can't check exactly - just mark as complete
    if (currentExercise.type === 'paragraph') {
      if (normalizedInput.length >= 20) {
        setIsCorrect(true);
        setScore(s => s + 15);
        setStreak(s => s + 1);
        setCorrectCount(c => c + 1);
        addXP(15);
        incrementStat('exercisesCompleted');
      } else {
        setIsCorrect(false);
        setStreak(0);
      }
      return;
    }
    
    const correct = normalizedInput === normalizedTarget;
    setIsCorrect(correct);
    
    if (correct) {
      const xpGain = currentExercise.difficulty === 'easy' ? 10 : 
                     currentExercise.difficulty === 'medium' ? 15 : 20;
      setScore(s => s + xpGain);
      setStreak(s => s + 1);
      setCorrectCount(c => c + 1);
      addXP(xpGain);
      incrementStat('exercisesCompleted');
    } else {
      setStreak(0);
    }
  };
  
  const handleNext = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(i => i + 1);
    } else {
      // Save practice progress when completing the session
      const finalScore = Math.round((correctCount / exercises.length) * 100);
      updatePracticeProgress(phaseId, 'writing', exercises.length, finalScore);
      setCompleted(true);
    }
  };
  
  const handlePlayAudio = () => {
    if (currentExercise?.target) {
      speak(currentExercise.target);
    }
  };
  
  const handleReset = () => {
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setCorrectCount(0);
    setCompleted(false);
    setUserInput('');
    setShowHint(false);
    setShowAnswer(false);
    setIsCorrect(null);
  };
  
  // Completion screen
  if (completed) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-cream-50 to-white dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md w-full"
        >
          <Card className="text-center overflow-hidden">
            <div 
              className="h-2"
              style={{ backgroundColor: phase.color }}
            />
            <CardContent className="p-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', bounce: 0.5, delay: 0.2 }}
                className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${phase.color}20` }}
              >
                <Trophy className="w-12 h-12" style={{ color: phase.color }} />
              </motion.div>
              
              <h2 className="text-2xl font-bold mb-2">
                {t('common.congratulations')}! 🎉
              </h2>
              <p className="text-muted-foreground mb-6">
                {t('practice.completed')}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-muted/50 rounded-xl p-4">
                  <Star className="w-8 h-8 mx-auto mb-2 text-amber-500" />
                  <div className="text-2xl font-bold">{score}</div>
                  <div className="text-xs text-muted-foreground">XP {t('common.earned')}</div>
                </div>
                <div className="bg-muted/50 rounded-xl p-4">
                  <CheckCircle2 className="w-8 h-8 mx-auto mb-2 text-green-500" />
                  <div className="text-2xl font-bold">{exercises.length}</div>
                  <div className="text-xs text-muted-foreground">{t('practice.exercises')}</div>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button variant="outline" onClick={handleReset} className="flex-1">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  {t('common.retry')}
                </Button>
                <Link href={`/practice/${phaseId}`} className="flex-1">
                  <Button className="w-full" style={{ backgroundColor: phase.color }}>
                    {t('common.continue')}
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href={`/practice/${phaseId}`}>
              <Button variant="ghost" size="sm">
                <ChevronLeft className="w-4 h-4 mr-1" />
                {t('common.back')}
              </Button>
            </Link>
            
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="gap-1">
                <Star className="w-3 h-3" />
                {score} XP
              </Badge>
              
              {streak > 0 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                >
                  <Badge variant="secondary" className="gap-1 bg-orange-500/10 text-orange-600">
                    🔥 {streak}
                  </Badge>
                </motion.div>
              )}
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="mt-2">
            <Progress value={progress} className="h-2" />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>{currentIndex + 1} / {exercises.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Exercise content */}
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            {currentExercise && (
              <Card className="overflow-hidden">
                <div 
                  className="h-1"
                  style={{ backgroundColor: phase.color }}
                />
                
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge 
                      variant="outline"
                      className={cn(
                        currentExercise.difficulty === 'easy' && 'border-green-500 text-green-600',
                        currentExercise.difficulty === 'medium' && 'border-amber-500 text-amber-600',
                        currentExercise.difficulty === 'hard' && 'border-red-500 text-red-600'
                      )}
                    >
                      {t(`practice.difficulty.${currentExercise.difficulty}`)}
                    </Badge>
                    
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => setShowHint(!showHint)}
                      >
                        <Lightbulb className={cn('w-4 h-4', showHint && 'text-amber-500')} />
                      </Button>
                      
                      {currentExercise.target && (
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={handlePlayAudio}
                        >
                          <Volume2 className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl mt-2">
                    {currentExercise.prompt}
                  </CardTitle>
                  <p className="text-lg text-muted-foreground font-arabic" dir="rtl">
                    {currentExercise.promptAr}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Hint */}
                  <AnimatePresence>
                    {showHint && currentExercise.hint && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3"
                      >
                        <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400">
                          <Lightbulb className="w-4 h-4" />
                          <span className="text-sm">{currentExercise.hint}</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {/* Input area */}
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">
                      {t('practice.modes.writing')}:
                    </label>
                    {currentExercise.type === 'paragraph' ? (
                      <textarea
                        className="w-full h-32 p-4 text-2xl font-arabic text-right border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        dir="rtl"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="اكتب هنا..."
                        disabled={isCorrect !== null}
                      />
                    ) : (
                      <Input
                        className="text-2xl h-16 font-arabic text-right"
                        dir="rtl"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="اكتب هنا..."
                        disabled={isCorrect !== null}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && isCorrect === null) {
                            handleCheck();
                          }
                        }}
                      />
                    )}
                  </div>
                  
                  {/* Show answer toggle */}
                  {currentExercise.target && (
                    <div className="flex items-center justify-between">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowAnswer(!showAnswer)}
                        className="text-muted-foreground"
                      >
                        {showAnswer ? <EyeOff className="w-4 h-4 mr-1" /> : <Eye className="w-4 h-4 mr-1" />}
                        {showAnswer ? t('common.hide') : t('common.showAnswer')}
                      </Button>
                      
                      {showAnswer && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-lg font-arabic"
                          dir="rtl"
                        >
                          {currentExercise.target}
                        </motion.div>
                      )}
                    </div>
                  )}
                  
                  {/* Feedback */}
                  <AnimatePresence>
                    {isCorrect !== null && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={cn(
                          'rounded-lg p-4 flex items-center gap-3',
                          isCorrect ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20'
                        )}
                      >
                        {isCorrect ? (
                          <>
                            <CheckCircle2 className="w-6 h-6 text-green-500" />
                            <div>
                              <div className="font-medium text-green-700 dark:text-green-400">
                                {t('common.correct')}! 🎉
                              </div>
                              <div className="text-sm text-green-600 dark:text-green-500">
                                +{currentExercise.difficulty === 'easy' ? 10 : 
                                   currentExercise.difficulty === 'medium' ? 15 : 20} XP
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <XCircle className="w-6 h-6 text-red-500" />
                            <div>
                              <div className="font-medium text-red-700 dark:text-red-400">
                                {t('common.tryAgain')}
                              </div>
                              {currentExercise.target && (
                                <div className="text-sm text-red-600 dark:text-red-500">
                                  {t('common.correctAnswer')}: <span className="font-arabic" dir="rtl">{currentExercise.target}</span>
                                </div>
                              )}
                            </div>
                          </>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {/* Action buttons */}
                  <div className="flex gap-3 pt-4">
                    {isCorrect === null ? (
                      <Button 
                        className="flex-1" 
                        onClick={handleCheck}
                        disabled={!userInput.trim()}
                        style={{ backgroundColor: phase.color }}
                      >
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        {t('common.check')}
                      </Button>
                    ) : (
                      <Button 
                        className="flex-1" 
                        onClick={handleNext}
                        style={{ backgroundColor: phase.color }}
                      >
                        {currentIndex < exercises.length - 1 ? (
                          <>
                            {t('common.next')}
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-4 h-4 mr-2" />
                            {t('common.finish')}
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
