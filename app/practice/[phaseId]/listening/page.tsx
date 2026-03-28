'use client';

/**
 * Phase Listening Practice Page
 * Audio-based exercises with comprehension questions,
 * dictation, and sound recognition based on phase level
 */

import { useState, useEffect, useRef } from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  Headphones,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Star,
  RefreshCw,
  Lightbulb,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useGamificationStore } from '@/stores/useGamificationStore';
import { useAudioStore } from '@/stores/useAudioStore';

// Phase configuration
const PHASES = [
  { id: 1, name: 'Foundations', color: '#c9a85c', icon: 'أ' },
  { id: 2, name: 'Building Blocks', color: '#4a9c6d', icon: 'ب' },
  { id: 3, name: 'Grammar Foundations', color: '#5a7fb8', icon: 'ج' },
  { id: 4, name: 'Intermediate Skills', color: '#9b59b6', icon: 'د' },
  { id: 5, name: 'Advanced Fluency', color: '#e74c3c', icon: 'ه' },
];

// Listening exercise types
type ExerciseType = 'letter-sound' | 'word-recognition' | 'dictation' | 'comprehension';

interface ListeningExercise {
  id: string;
  type: ExerciseType;
  audioText: string;
  prompt: string;
  promptAr: string;
  answer: string;
  options?: string[];
  hint?: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

// Generate exercises by phase
function getExercisesForPhase(phaseId: number): ListeningExercise[] {
  switch (phaseId) {
    case 1:
      // Phase 1: Letter sounds and basic recognition
      return [
        { id: 'ls-1', type: 'letter-sound', audioText: 'أ', prompt: 'What letter did you hear?', promptAr: 'ما الحرف الذي سمعته؟', answer: 'أ', options: ['أ', 'ب', 'ت', 'ث'], difficulty: 'easy' },
        { id: 'ls-2', type: 'letter-sound', audioText: 'ع', prompt: 'What letter did you hear?', promptAr: 'ما الحرف الذي سمعته؟', answer: 'ع', options: ['ع', 'غ', 'ح', 'خ'], hint: 'This is the Ayn sound', difficulty: 'medium' },
        { id: 'ls-3', type: 'letter-sound', audioText: 'ق', prompt: 'What letter did you hear?', promptAr: 'ما الحرف الذي سمعته؟', answer: 'ق', options: ['ق', 'ك', 'غ', 'خ'], hint: 'Deep throat sound', difficulty: 'medium' },
        { id: 'wr-1', type: 'word-recognition', audioText: 'وَاحِد', prompt: 'What number did you hear?', promptAr: 'ما الرقم الذي سمعته؟', answer: 'وَاحِد', options: ['وَاحِد', 'اِثْنَان', 'ثَلَاثَة', 'أَرْبَعَة'], difficulty: 'easy' },
        { id: 'wr-2', type: 'word-recognition', audioText: 'أَحْمَر', prompt: 'What color did you hear?', promptAr: 'ما اللون الذي سمعته؟', answer: 'أَحْمَر', options: ['أَحْمَر', 'أَزْرَق', 'أَخْضَر', 'أَصْفَر'], difficulty: 'easy' },
        { id: 'd-1', type: 'dictation', audioText: 'با', prompt: 'Write what you hear', promptAr: 'اكتب ما تسمعه', answer: 'با', difficulty: 'easy' },
        { id: 'd-2', type: 'dictation', audioText: 'تا', prompt: 'Write what you hear', promptAr: 'اكتب ما تسمعه', answer: 'تا', difficulty: 'easy' },
        { id: 'd-3', type: 'dictation', audioText: 'كتاب', prompt: 'Write what you hear', promptAr: 'اكتب ما تسمعه', answer: 'كتاب', difficulty: 'medium' },
      ];
      
    case 2:
      // Phase 2: Word and phrase recognition
      return [
        { id: 'wr-1', type: 'word-recognition', audioText: 'أَب', prompt: 'What family member?', promptAr: 'ما فرد العائلة؟', answer: 'أَب', options: ['أَب', 'أُمّ', 'أَخ', 'أُخْت'], difficulty: 'easy' },
        { id: 'wr-2', type: 'word-recognition', audioText: 'مَدْرَسَة', prompt: 'What place?', promptAr: 'ما المكان؟', answer: 'مَدْرَسَة', options: ['مَدْرَسَة', 'بَيْت', 'سُوق', 'مَطْعَم'], difficulty: 'easy' },
        { id: 'wr-3', type: 'word-recognition', audioText: 'سَيَّارَة', prompt: 'What vehicle?', promptAr: 'ما المركبة؟', answer: 'سَيَّارَة', options: ['سَيَّارَة', 'طَائِرَة', 'قِطَار', 'حَافِلَة'], difficulty: 'medium' },
        { id: 'd-1', type: 'dictation', audioText: 'السَّلَامُ عَلَيْكُم', prompt: 'Write the greeting', promptAr: 'اكتب التحية', answer: 'السَّلَامُ عَلَيْكُم', difficulty: 'medium' },
        { id: 'd-2', type: 'dictation', audioText: 'شُكْراً جَزِيلاً', prompt: 'Write the phrase', promptAr: 'اكتب العبارة', answer: 'شُكْراً جَزِيلاً', difficulty: 'medium' },
        { id: 'c-1', type: 'comprehension', audioText: 'أَنَا مِنْ مِصْر', prompt: 'Where is the speaker from?', promptAr: 'من أين المتحدث؟', answer: 'مِصْر', options: ['مِصْر', 'لُبْنَان', 'المَغْرِب', 'الأُرْدُن'], difficulty: 'easy' },
        { id: 'c-2', type: 'comprehension', audioText: 'أُحِبُّ القِرَاءَة', prompt: 'What does the speaker like?', promptAr: 'ماذا يحب المتحدث؟', answer: 'القِرَاءَة', options: ['القِرَاءَة', 'الكِتَابَة', 'السِّبَاحَة', 'الرَّسْم'], difficulty: 'medium' },
      ];
      
    case 3:
      // Phase 3: Sentence comprehension
      return [
        { id: 'c-1', type: 'comprehension', audioText: 'ذَهَبَ الوَلَدُ إِلَى المَدْرَسَة', prompt: 'Where did the boy go?', promptAr: 'إلى أين ذهب الولد؟', answer: 'المَدْرَسَة', options: ['المَدْرَسَة', 'البَيْت', 'السُّوق', 'المُسْتَشْفَى'], difficulty: 'easy' },
        { id: 'c-2', type: 'comprehension', audioText: 'الجَوُّ بَارِدٌ اليَوْم', prompt: 'How is the weather?', promptAr: 'كيف الطقس؟', answer: 'بَارِد', options: ['بَارِد', 'حَار', 'مُشْمِس', 'مَاطِر'], difficulty: 'easy' },
        { id: 'c-3', type: 'comprehension', audioText: 'أَكَلَتْ البِنْتُ تُفَّاحَةً', prompt: 'What did the girl eat?', promptAr: 'ماذا أكلت البنت؟', answer: 'تُفَّاحَة', options: ['تُفَّاحَة', 'مَوْز', 'بُرْتُقَال', 'عِنَب'], difficulty: 'medium' },
        { id: 'd-1', type: 'dictation', audioText: 'هَذَا كِتَابٌ جَدِيد', prompt: 'Write the sentence', promptAr: 'اكتب الجملة', answer: 'هَذَا كِتَابٌ جَدِيد', difficulty: 'medium' },
        { id: 'd-2', type: 'dictation', audioText: 'البَيْتُ كَبِيرٌ وَجَمِيل', prompt: 'Write the sentence', promptAr: 'اكتب الجملة', answer: 'البَيْتُ كَبِيرٌ وَجَمِيل', difficulty: 'hard' },
        { id: 'c-4', type: 'comprehension', audioText: 'يَقْرَأُ أَحْمَدُ كِتَاباً فِي المَكْتَبَة', prompt: 'Where is Ahmad?', promptAr: 'أين أحمد؟', answer: 'المَكْتَبَة', options: ['المَكْتَبَة', 'المَدْرَسَة', 'البَيْت', 'الحَدِيقَة'], difficulty: 'medium' },
      ];
      
    case 4:
      // Phase 4: Dialogue and story comprehension
      return [
        { id: 'c-1', type: 'comprehension', audioText: 'مَرْحَباً، كَيْفَ حَالُكَ؟ أَنَا بِخَيْر، شُكْراً', prompt: 'How is the person?', promptAr: 'كيف حال الشخص؟', answer: 'بِخَيْر', options: ['بِخَيْر', 'مَرِيض', 'تَعْبَان', 'حَزِين'], difficulty: 'easy' },
        { id: 'c-2', type: 'comprehension', audioText: 'أُرِيدُ أَنْ أَذْهَبَ إِلَى المَطَار لِأَنَّ طَائِرَتِي فِي السَّاعَة الخَامِسَة', prompt: 'When is the flight?', promptAr: 'متى الرحلة؟', answer: 'الخَامِسَة', options: ['الخَامِسَة', 'الرَّابِعَة', 'السَّادِسَة', 'الثَّالِثَة'], difficulty: 'medium' },
        { id: 'c-3', type: 'comprehension', audioText: 'ذَهَبْتُ إِلَى السُّوق وَاشْتَرَيْتُ خُضَارًا وَفَوَاكِه', prompt: 'What did they buy?', promptAr: 'ماذا اشتروا؟', answer: 'خُضَار وَفَوَاكِه', options: ['خُضَار وَفَوَاكِه', 'مَلَابِس', 'كُتُب', 'أَثَاث'], difficulty: 'medium' },
        { id: 'd-1', type: 'dictation', audioText: 'أَعْتَقِدُ أَنَّ الطَّقْسَ سَيَكُونُ جَمِيلاً غَداً', prompt: 'Write the sentence', promptAr: 'اكتب الجملة', answer: 'أَعْتَقِدُ أَنَّ الطَّقْسَ سَيَكُونُ جَمِيلاً غَداً', difficulty: 'hard' },
        { id: 'c-4', type: 'comprehension', audioText: 'كَانَتْ فَاطِمَة تُحِبُّ الرَّسْمَ مُنْذُ صِغَرِهَا، وَالآنَ هِيَ فَنَّانَة مَشْهُورَة', prompt: 'What is Fatima now?', promptAr: 'ماذا تعمل فاطمة الآن؟', answer: 'فَنَّانَة', options: ['فَنَّانَة', 'مُعَلِّمَة', 'طَبِيبَة', 'مُهَنْدِسَة'], difficulty: 'hard' },
      ];
      
    case 5:
      // Phase 5: News and advanced content
      return [
        { id: 'c-1', type: 'comprehension', audioText: 'أَعْلَنَتْ الحُكُومَة عَنْ خُطَّة جَدِيدَة لِتَطْوِير التَّعْلِيم', prompt: 'What was announced?', promptAr: 'ماذا أُعلن؟', answer: 'خُطَّة تَعْلِيمِيَّة', options: ['خُطَّة تَعْلِيمِيَّة', 'خُطَّة اِقْتِصَادِيَّة', 'خُطَّة صِحِّيَّة', 'خُطَّة بِيئِيَّة'], difficulty: 'hard' },
        { id: 'c-2', type: 'comprehension', audioText: 'إِنَّ الثَّقَافَة العَرَبِيَّة غَنِيَّة بِالتُّرَاث وَالفُنُون', prompt: 'What is the topic?', promptAr: 'ما الموضوع؟', answer: 'الثَّقَافَة', options: ['الثَّقَافَة', 'الاِقْتِصَاد', 'السِّيَاسَة', 'الرِّيَاضَة'], difficulty: 'medium' },
        { id: 'd-1', type: 'dictation', audioText: 'العِلْمُ نُورٌ وَالجَهْلُ ظَلَام', prompt: 'Write the proverb', promptAr: 'اكتب المثل', answer: 'العِلْمُ نُورٌ وَالجَهْلُ ظَلَام', difficulty: 'hard' },
        { id: 'd-2', type: 'dictation', audioText: 'مَنْ جَدَّ وَجَد', prompt: 'Write the proverb', promptAr: 'اكتب المثل', answer: 'مَنْ جَدَّ وَجَد', difficulty: 'medium' },
        { id: 'c-3', type: 'comprehension', audioText: 'يَجِبُ عَلَيْنَا المُحَافَظَة عَلَى البِيئَة لِمُسْتَقْبَل أَفْضَل', prompt: 'What should we protect?', promptAr: 'ماذا يجب أن نحافظ عليه؟', answer: 'البِيئَة', options: ['البِيئَة', 'المَال', 'الوَقْت', 'الطَّاقَة'], difficulty: 'medium' },
      ];
      
    default:
      return [];
  }
}

export default function PhaseListeningPage() {
  const params = useParams();
  const phaseId = parseInt(params.phaseId as string);
  const t = useTranslations();
  
  const { addXP, incrementStat } = useGamificationStore();
  const { speak, isPlaying, stop } = useAudioStore();
  
  // Validate phase ID
  if (isNaN(phaseId) || phaseId < 1 || phaseId > 5) {
    notFound();
  }
  
  const phase = PHASES[phaseId - 1];
  const exercises = getExercisesForPhase(phaseId);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [playCount, setPlayCount] = useState(0);
  
  const currentExercise = exercises[currentIndex];
  const progress = ((currentIndex) / exercises.length) * 100;
  
  // Reset state on exercise change
  useEffect(() => {
    setUserInput('');
    setSelectedAnswer(null);
    setIsCorrect(null);
    setShowHint(false);
    setPlayCount(0);
  }, [currentIndex]);
  
  const handlePlay = () => {
    if (isPlaying) {
      stop();
    } else {
      speak(currentExercise.audioText);
      setPlayCount(c => c + 1);
    }
  };
  
  const handleSelectAnswer = (answer: string) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answer);
    const correct = answer === currentExercise.answer;
    setIsCorrect(correct);
    
    if (correct) {
      const xp = currentExercise.difficulty === 'easy' ? 10 : currentExercise.difficulty === 'medium' ? 15 : 20;
      setScore(s => s + xp);
      setStreak(s => s + 1);
      addXP(xp);
      incrementStat('exercisesCompleted');
    } else {
      setStreak(0);
    }
  };
  
  const handleCheckDictation = () => {
    const normalizedInput = userInput.trim().replace(/\s+/g, ' ');
    const normalizedAnswer = currentExercise.answer.trim().replace(/\s+/g, ' ');
    
    // Remove diacritics for comparison (optional leniency)
    const stripDiacritics = (str: string) => str.replace(/[\u064B-\u065F]/g, '');
    const correct = stripDiacritics(normalizedInput) === stripDiacritics(normalizedAnswer);
    
    setIsCorrect(correct);
    
    if (correct) {
      const xp = currentExercise.difficulty === 'easy' ? 10 : currentExercise.difficulty === 'medium' ? 15 : 20;
      setScore(s => s + xp);
      setStreak(s => s + 1);
      addXP(xp);
      incrementStat('exercisesCompleted');
    } else {
      setStreak(0);
    }
  };
  
  const handleNext = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(i => i + 1);
    } else {
      setCompleted(true);
    }
  };
  
  const handleReset = () => {
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setCompleted(false);
    setUserInput('');
    setSelectedAnswer(null);
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
            <div className="h-2" style={{ backgroundColor: phase.color }} />
            <CardContent className="p-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', bounce: 0.5, delay: 0.2 }}
                className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${phase.color}20` }}
              >
                <Headphones className="w-12 h-12" style={{ color: phase.color }} />
              </motion.div>
              
              <h2 className="text-2xl font-bold mb-2">
                {t('common.congratulations')}! 🎧
              </h2>
              <p className="text-muted-foreground mb-6">
                {t('practice.modes.listeningDesc')}
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
                <Badge variant="secondary" className="gap-1 bg-orange-500/10 text-orange-600">
                  🔥 {streak}
                </Badge>
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
                <div className="h-1" style={{ backgroundColor: phase.color }} />
                
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-4">
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
                    <Badge variant="secondary">
                      {currentExercise.type === 'letter-sound' && t('practice.modes.alphabet')}
                      {currentExercise.type === 'word-recognition' && t('practice.modes.vocabulary')}
                      {currentExercise.type === 'dictation' && t('practice.modes.writing')}
                      {currentExercise.type === 'comprehension' && t('practice.modes.listening')}
                    </Badge>
                  </div>
                  
                  {/* Play button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handlePlay}
                    className="mx-auto w-24 h-24 rounded-full flex items-center justify-center shadow-lg mb-4"
                    style={{ 
                      background: `linear-gradient(135deg, ${phase.color}, ${phase.color}cc)`,
                    }}
                  >
                    {isPlaying ? (
                      <Pause className="w-10 h-10 text-white" />
                    ) : (
                      <Play className="w-10 h-10 text-white ml-1" />
                    )}
                  </motion.button>
                  
                  <p className="text-sm text-muted-foreground">
                    {t('practice.playPronunciation')} ({playCount}x)
                  </p>
                  
                  <CardTitle className="text-xl mt-4">
                    {currentExercise.prompt}
                  </CardTitle>
                  <p className="text-lg text-muted-foreground font-arabic" dir="rtl">
                    {currentExercise.promptAr}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Hint */}
                  {currentExercise.hint && (
                    <div className="flex justify-center">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowHint(!showHint)}
                        className="text-muted-foreground"
                      >
                        <Lightbulb className={cn('w-4 h-4 mr-1', showHint && 'text-amber-500')} />
                        {showHint ? currentExercise.hint : t('common.showHint')}
                      </Button>
                    </div>
                  )}
                  
                  {/* Multiple choice options */}
                  {currentExercise.options && (
                    <div className="grid grid-cols-2 gap-3">
                      {currentExercise.options.map((option, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <Button
                            variant="outline"
                            className={cn(
                              'w-full h-16 text-2xl font-arabic',
                              selectedAnswer === option && isCorrect && 'bg-green-50 border-green-500 text-green-700',
                              selectedAnswer === option && !isCorrect && 'bg-red-50 border-red-500 text-red-700',
                              selectedAnswer && option === currentExercise.answer && 'bg-green-50 border-green-500'
                            )}
                            onClick={() => handleSelectAnswer(option)}
                            disabled={selectedAnswer !== null}
                            dir="rtl"
                          >
                            {option}
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  )}
                  
                  {/* Dictation input */}
                  {currentExercise.type === 'dictation' && (
                    <div className="space-y-3">
                      <Input
                        className="text-2xl h-16 font-arabic text-right"
                        dir="rtl"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="اكتب هنا..."
                        disabled={isCorrect !== null}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && isCorrect === null) {
                            handleCheckDictation();
                          }
                        }}
                      />
                      
                      {isCorrect === null && (
                        <Button 
                          className="w-full" 
                          onClick={handleCheckDictation}
                          disabled={!userInput.trim()}
                          style={{ backgroundColor: phase.color }}
                        >
                          <CheckCircle2 className="w-4 h-4 mr-2" />
                          {t('common.check')}
                        </Button>
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
                              <div className="text-sm text-red-600 dark:text-red-500">
                                {t('common.correctAnswer')}: <span className="font-arabic" dir="rtl">{currentExercise.answer}</span>
                              </div>
                            </div>
                          </>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {/* Next button */}
                  {isCorrect !== null && (
                    <Button 
                      className="w-full" 
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
                </CardContent>
              </Card>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
