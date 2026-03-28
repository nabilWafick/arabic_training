'use client';

/**
 * Phase Speaking Practice Page
 * Enhanced with real speech recognition, pronunciation scoring,
 * and detailed feedback using Web Speech API
 */

import { useState, useEffect, useCallback } from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  Mic2,
  Volume2,
  CheckCircle2,
  ArrowRight,
  Star,
  RefreshCw,
  Lightbulb,
  Sparkles,
  AlertCircle,
  AlertTriangle,
  Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { useGamificationStore } from '@/stores/useGamificationStore';
import { useProgressStore } from '@/stores/useProgressStore';
import { useAudioStore } from '@/stores/useAudioStore';
import { useSpeechRecognition, isSpeechRecognitionSupported } from '@/hooks/useSpeechRecognition';
import { calculatePronunciationScore, type PronunciationScore } from '@/lib/pronunciation/scoring';
import { PronunciationFeedbackDisplay } from '@/components/practice/PronunciationFeedback';

// Phase configuration
const PHASES = [
  { id: 1, name: 'Foundations', color: '#c9a85c', icon: 'أ' },
  { id: 2, name: 'Building Blocks', color: '#4a9c6d', icon: 'ب' },
  { id: 3, name: 'Grammar Foundations', color: '#5a7fb8', icon: 'ج' },
  { id: 4, name: 'Intermediate Skills', color: '#9b59b6', icon: 'د' },
  { id: 5, name: 'Advanced Fluency', color: '#e74c3c', icon: 'ه' },
];

// Speaking exercise types
type ExerciseType = 'letter-pronunciation' | 'word-pronunciation' | 'sentence-reading' | 'free-speech';

interface SpeakingExercise {
  id: string;
  type: ExerciseType;
  prompt: string;
  promptAr: string;
  targetText: string;
  transliteration: string;
  hint?: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

// Generate exercises by phase (keeping existing exercise data)
function getExercisesForPhase(phaseId: number): SpeakingExercise[] {
  switch (phaseId) {
    case 1:
      return [
        { id: 'lp-1', type: 'letter-pronunciation', prompt: 'Say the letter', promptAr: 'انطق الحرف', targetText: 'أ', transliteration: 'Alif', hint: 'Open throat sound', difficulty: 'easy' },
        { id: 'lp-2', type: 'letter-pronunciation', prompt: 'Say the letter', promptAr: 'انطق الحرف', targetText: 'ب', transliteration: 'Baa', hint: 'Like English "B"', difficulty: 'easy' },
        { id: 'lp-3', type: 'letter-pronunciation', prompt: 'Say the letter', promptAr: 'انطق الحرف', targetText: 'ع', transliteration: 'Ayn', hint: 'Deep throat sound - unique to Arabic', difficulty: 'hard' },
        { id: 'lp-4', type: 'letter-pronunciation', prompt: 'Say the letter', promptAr: 'انطق الحرف', targetText: 'خ', transliteration: 'Khaa', hint: 'Like clearing throat', difficulty: 'medium' },
        { id: 'lp-5', type: 'letter-pronunciation', prompt: 'Say the letter', promptAr: 'انطق الحرف', targetText: 'ق', transliteration: 'Qaaf', hint: 'Deep K sound from throat', difficulty: 'hard' },
        { id: 'wp-1', type: 'word-pronunciation', prompt: 'Say the word', promptAr: 'انطق الكلمة', targetText: 'بَاب', transliteration: 'baab', hint: 'Door', difficulty: 'easy' },
        { id: 'wp-2', type: 'word-pronunciation', prompt: 'Say the word', promptAr: 'انطق الكلمة', targetText: 'كِتَاب', transliteration: 'kitaab', hint: 'Book', difficulty: 'easy' },
        { id: 'wp-3', type: 'word-pronunciation', prompt: 'Say the numbers', promptAr: 'انطق الأرقام', targetText: 'وَاحِد، اِثْنَان، ثَلَاثَة', transliteration: 'waahid, ithnaan, thalaatha', hint: '1, 2, 3', difficulty: 'medium' },
      ];
    case 2:
      return [
        { id: 'wp-1', type: 'word-pronunciation', prompt: 'Say the greeting', promptAr: 'قل التحية', targetText: 'السَّلَامُ عَلَيْكُم', transliteration: 'as-salaamu alaykum', hint: 'Peace be upon you', difficulty: 'easy' },
        { id: 'wp-2', type: 'word-pronunciation', prompt: 'Say the response', promptAr: 'قل الرد', targetText: 'وَعَلَيْكُمُ السَّلَام', transliteration: 'wa alaykum as-salaam', hint: 'And upon you peace', difficulty: 'easy' },
        { id: 'wp-3', type: 'word-pronunciation', prompt: 'Introduce yourself', promptAr: 'عرّف عن نفسك', targetText: 'أَنَا اِسْمِي...', transliteration: 'ana ismii...', hint: 'My name is...', difficulty: 'medium' },
        { id: 'wp-4', type: 'word-pronunciation', prompt: 'Say thank you', promptAr: 'قل شكراً', targetText: 'شُكْراً جَزِيلاً', transliteration: 'shukran jaziilan', hint: 'Thank you very much', difficulty: 'easy' },
        { id: 'wp-5', type: 'word-pronunciation', prompt: 'Say the family members', promptAr: 'قل أفراد العائلة', targetText: 'أَب، أُمّ، أَخ، أُخْت', transliteration: 'ab, umm, akh, ukht', hint: 'Father, mother, brother, sister', difficulty: 'medium' },
        { id: 'sr-1', type: 'sentence-reading', prompt: 'Read the sentence', promptAr: 'اقرأ الجملة', targetText: 'أَنَا مِنْ مِصْر', transliteration: 'ana min misr', hint: 'I am from Egypt', difficulty: 'medium' },
        { id: 'sr-2', type: 'sentence-reading', prompt: 'Read the sentence', promptAr: 'اقرأ الجملة', targetText: 'كَيْفَ حَالُكَ؟', transliteration: 'kayfa haaluk?', hint: 'How are you?', difficulty: 'easy' },
      ];
    case 3:
      return [
        { id: 'sr-1', type: 'sentence-reading', prompt: 'Read the sentence', promptAr: 'اقرأ الجملة', targetText: 'ذَهَبْتُ إِلَى المَدْرَسَة', transliteration: 'dhahabtu ilaa al-madrasa', hint: 'I went to school', difficulty: 'medium' },
        { id: 'sr-2', type: 'sentence-reading', prompt: 'Ask the question', promptAr: 'اسأل السؤال', targetText: 'مَاذَا تُرِيد؟', transliteration: 'maadha turiid?', hint: 'What do you want?', difficulty: 'medium' },
        { id: 'sr-3', type: 'sentence-reading', prompt: 'Ask the question', promptAr: 'اسأل السؤال', targetText: 'أَيْنَ المَكْتَبَة؟', transliteration: 'ayna al-maktaba?', hint: 'Where is the library?', difficulty: 'medium' },
        { id: 'sr-4', type: 'sentence-reading', prompt: 'Read the sentence', promptAr: 'اقرأ الجملة', targetText: 'الطَّقْسُ جَمِيلٌ اليَوْم', transliteration: 'at-taqsu jamiilun al-yawm', hint: 'The weather is beautiful today', difficulty: 'hard' },
        { id: 'sr-5', type: 'sentence-reading', prompt: 'Express an opinion', promptAr: 'عبّر عن رأيك', targetText: 'أَعْتَقِدُ أَنَّ...', transliteration: 'a3taqidu anna...', hint: 'I think that...', difficulty: 'hard' },
        { id: 'sr-6', type: 'sentence-reading', prompt: 'Conjugate the verb', promptAr: 'صرّف الفعل', targetText: 'أَكْتُبُ، تَكْتُبُ، يَكْتُبُ', transliteration: 'aktubu, taktubu, yaktubu', hint: 'I write, you write, he writes', difficulty: 'hard' },
      ];
    case 4:
      return [
        { id: 'sr-1', type: 'sentence-reading', prompt: 'Express your feeling', promptAr: 'عبّر عن شعورك', targetText: 'أَنَا سَعِيدٌ جِدّاً', transliteration: 'ana sa3iidun jiddan', hint: 'I am very happy', difficulty: 'easy' },
        { id: 'sr-2', type: 'sentence-reading', prompt: 'Make a request', promptAr: 'قدّم طلباً', targetText: 'هَلْ يُمْكِنُكَ مُسَاعَدَتِي؟', transliteration: 'hal yumkinuka musaa3adatii?', hint: 'Can you help me?', difficulty: 'medium' },
        { id: 'sr-3', type: 'sentence-reading', prompt: 'Give directions', promptAr: 'أعطِ الاتجاهات', targetText: 'اِذْهَبْ يَمِيناً ثُمَّ يَسَاراً', transliteration: 'idhhab yamianan thumma yasaaran', hint: 'Go right then left', difficulty: 'hard' },
        { id: 'fs-1', type: 'free-speech', prompt: 'Describe your day', promptAr: 'صف يومك', targetText: 'اِسْتَيْقَظْتُ فِي الصَّبَاح...', transliteration: 'istayqadhtu fii as-sabaah...', hint: 'I woke up in the morning...', difficulty: 'hard' },
        { id: 'fs-2', type: 'free-speech', prompt: 'Order at a restaurant', promptAr: 'اطلب في المطعم', targetText: 'أُرِيدُ... مِنْ فَضْلِك', transliteration: 'uriidu... min fadlik', hint: 'I want... please', difficulty: 'medium' },
      ];
    case 5:
      return [
        { id: 'sr-1', type: 'sentence-reading', prompt: 'Give a formal introduction', promptAr: 'قدّم مقدمة رسمية', targetText: 'السَّادَة الحُضُور، أَوَدُّ أَنْ أُقَدِّمَ...', transliteration: 'as-saadatu al-huduur, awaddu an uqaddima...', hint: 'Ladies and gentlemen, I would like to present...', difficulty: 'hard' },
        { id: 'sr-2', type: 'sentence-reading', prompt: 'Say the proverb', promptAr: 'قل المثل', targetText: 'العِلْمُ نُورٌ وَالجَهْلُ ظَلَام', transliteration: 'al-3ilmu nuurun wa-al-jahlu dhalam', hint: 'Knowledge is light and ignorance is darkness', difficulty: 'medium' },
        { id: 'sr-3', type: 'sentence-reading', prompt: 'Express agreement', promptAr: 'عبّر عن الموافقة', targetText: 'أَتَّفِقُ مَعَكَ تَمَاماً', transliteration: 'attafiqu ma3aka tamaaman', hint: 'I completely agree with you', difficulty: 'medium' },
        { id: 'fs-1', type: 'free-speech', prompt: 'Debate a topic', promptAr: 'ناقش موضوعاً', targetText: 'فِي رَأْيِي، أَعْتَقِدُ أَنَّ...', transliteration: 'fii ra2yii, a3taqidu anna...', hint: 'In my opinion, I believe that...', difficulty: 'hard' },
        { id: 'fs-2', type: 'free-speech', prompt: 'Tell a short story', promptAr: 'احكِ قصة قصيرة', targetText: 'كَانَ يَا مَا كَان...', transliteration: 'kaana yaa maa kaan...', hint: 'Once upon a time...', difficulty: 'hard' },
      ];
    default:
      return [];
  }
}

export default function PhaseSpeakingPage() {
  const params = useParams();
  const phaseId = parseInt(params.phaseId as string);
  const t = useTranslations();
  
  const { updatePracticeProgress } = useProgressStore();
  const { addXP, incrementStat } = useGamificationStore();
  const { speak, isPlaying, stop } = useAudioStore();
  
  // Validate phase ID
  if (isNaN(phaseId) || phaseId < 1 || phaseId > 5) {
    notFound();
  }
  
  const phase = PHASES[phaseId - 1];
  const exercises = getExercisesForPhase(phaseId);
  
  // State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pronunciationScore, setPronunciationScore] = useState<PronunciationScore | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [hasAttempted, setHasAttempted] = useState(false);
  
  const currentExercise = exercises[currentIndex];
  const progress = ((currentIndex) / exercises.length) * 100;
  
  // Check browser support
  const [speechSupported, setSpeechSupported] = useState(false);
  useEffect(() => {
    setSpeechSupported(isSpeechRecognitionSupported());
  }, []);
  
  // Speech recognition hook
  const handleSpeechResult = useCallback((result: { transcript: string; confidence: number }) => {
    // Calculate pronunciation score
    const scoreResult = calculatePronunciationScore(
      currentExercise.targetText,
      result.transcript,
      result.confidence,
      phaseId as 1 | 2 | 3 | 4 | 5
    );
    
    setPronunciationScore(scoreResult);
    setHasAttempted(true);
    
    // Award XP based on score
    const isGood = scoreResult.overall >= 70;
    if (isGood) {
      const baseXP = currentExercise.difficulty === 'easy' ? 10 : currentExercise.difficulty === 'medium' ? 15 : 20;
      const bonusXP = Math.floor((scoreResult.overall - 70) / 10) * 5;
      const totalXP = baseXP + bonusXP;
      
      setScore(s => s + totalXP);
      setStreak(s => s + 1);
      setCorrectCount(c => c + 1);
      addXP(totalXP);
      incrementStat('exercisesCompleted');
    } else {
      setStreak(0);
    }
  }, [currentExercise, phaseId, addXP, incrementStat]);
  
  const {
    isListening,
    transcript,
    interimTranscript,
    confidence,
    error,
    isSupported,
    startListening,
    stopListening,
    resetTranscript,
  } = useSpeechRecognition({
    language: 'ar-SA',
    continuous: false,
    interimResults: true,
    onResult: handleSpeechResult,
  });
  
  // Reset state on exercise change
  useEffect(() => {
    setPronunciationScore(null);
    setShowHint(false);
    setHasAttempted(false);
    resetTranscript();
  }, [currentIndex, resetTranscript]);
  
  const handlePlayTarget = () => {
    if (isPlaying) {
      stop();
    } else {
      speak(currentExercise.targetText);
    }
  };
  
  const handleStartListening = () => {
    setPronunciationScore(null);
    resetTranscript();
    startListening();
  };
  
  const handleNext = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(i => i + 1);
    } else {
      const finalScore = Math.round((correctCount / exercises.length) * 100);
      updatePracticeProgress(phaseId, 'speaking', exercises.length, finalScore);
      setCompleted(true);
    }
  };
  
  const handleRetry = () => {
    setPronunciationScore(null);
    setHasAttempted(false);
    resetTranscript();
  };
  
  const handleReset = () => {
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setCorrectCount(0);
    setCompleted(false);
    setPronunciationScore(null);
    setHasAttempted(false);
    resetTranscript();
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
                <Mic2 className="w-12 h-12" style={{ color: phase.color }} />
              </motion.div>
              
              <h2 className="text-2xl font-bold mb-2">
                {t('common.congratulations')}! 🎤
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
                  <div className="text-2xl font-bold">{correctCount}/{exercises.length}</div>
                  <div className="text-xs text-muted-foreground">{t('practice.stats.accuracy')}</div>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button variant="outline" onClick={handleReset} className="flex-1">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  {t('practice.tryAgain')}
                </Button>
                <Link href={`/practice/${phaseId}`} className="flex-1">
                  <Button className="w-full" style={{ backgroundColor: phase.color }}>
                    {t('common.done')}
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }
  
  // Speech not supported warning
  if (!speechSupported) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-cream-50 to-white dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4">
        <Card className="max-w-md text-center">
          <CardContent className="p-8">
            <AlertTriangle className="w-16 h-16 mx-auto mb-4 text-amber-500" />
            <h2 className="text-xl font-bold mb-2">{t('practice.speechNotSupported')}</h2>
            <p className="text-muted-foreground mb-6">{t('practice.tryChrome')}</p>
            <Link href={`/practice/${phaseId}`}>
              <Button>
                <ChevronLeft className="w-4 h-4 mr-2" />
                {t('common.back')}
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-2xl mx-auto p-4 pb-24">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Link href={`/practice/${phaseId}`}>
            <Button variant="ghost" size="sm">
              <ChevronLeft className="w-4 h-4 mr-1" />
              {t('common.back')}
            </Button>
          </Link>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              {currentIndex + 1}/{exercises.length}
            </span>
            <Badge 
              className="text-white"
              style={{ backgroundColor: phase.color }}
            >
              {phase.name}
            </Badge>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="mb-6">
          <Progress value={progress} className="h-2" />
        </div>
        
        {/* Score display */}
        <div className="flex justify-between items-center mb-6 px-2">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-amber-500" />
            <span className="font-bold">{score} XP</span>
          </div>
          {streak > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex items-center gap-1 px-3 py-1 rounded-full"
              style={{ backgroundColor: `${phase.color}20` }}
            >
              <Sparkles className="w-4 h-4" style={{ color: phase.color }} />
              <span className="text-sm font-medium" style={{ color: phase.color }}>
                {streak} {t('practice.stats.streak')}
              </span>
            </motion.div>
          )}
        </div>
        
        {/* Exercise Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentExercise.id}
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
                  </div>
                  
                  <CardTitle className="text-xl">
                    {currentExercise.prompt}
                  </CardTitle>
                  <p className="text-lg text-muted-foreground font-arabic" dir="rtl">
                    {currentExercise.promptAr}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Target text */}
                  <div className="bg-muted/50 rounded-xl p-6 text-center">
                    <p className="text-4xl font-arabic mb-3" dir="rtl">
                      {currentExercise.targetText}
                    </p>
                    <p className="text-lg text-muted-foreground italic">
                      {currentExercise.transliteration}
                    </p>
                    
                    {/* Listen button */}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handlePlayTarget}
                      className="mt-4"
                    >
                      <Volume2 className="w-4 h-4 mr-2" />
                      {t('practice.playPronunciation')}
                    </Button>
                  </div>
                  
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
                  
                  {/* Recording tip */}
                  {!hasAttempted && !isListening && (
                    <p className="text-center text-sm text-muted-foreground">
                      {t('practice.recordingTip')}
                    </p>
                  )}
                  
                  {/* Recording controls */}
                  {!hasAttempted && !pronunciationScore && (
                    <div className="flex flex-col items-center gap-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={isListening ? stopListening : handleStartListening}
                        className={cn(
                          'w-24 h-24 rounded-full flex items-center justify-center shadow-lg transition-colors',
                          isListening && 'bg-red-500 animate-pulse'
                        )}
                        style={!isListening ? { 
                          background: `linear-gradient(135deg, ${phase.color}, ${phase.color}cc)` 
                        } : undefined}
                      >
                        <Mic2 className="w-10 h-10 text-white" />
                      </motion.button>
                      
                      <p className="text-sm text-muted-foreground">
                        {isListening 
                          ? t('practice.speakNow')
                          : t('practice.speakClearly')
                        }
                      </p>
                    </div>
                  )}
                  
                  {/* Pronunciation feedback display */}
                  <PronunciationFeedbackDisplay
                    score={pronunciationScore}
                    isListening={isListening}
                    transcript={transcript || interimTranscript}
                    expected={currentExercise.targetText}
                  />
                  
                  {/* Error message */}
                  {error && (
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 flex items-center gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
                      <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                    </div>
                  )}
                  
                  {/* Action buttons */}
                  {hasAttempted && pronunciationScore && (
                    <div className="flex gap-3">
                      {pronunciationScore.overall < 70 && (
                        <Button variant="outline" onClick={handleRetry} className="flex-1">
                          <RefreshCw className="w-4 h-4 mr-2" />
                          {t('practice.tryAgain')}
                        </Button>
                      )}
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
                            {t('common.done')}
                          </>
                        )}
                      </Button>
                    </div>
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
