'use client';

/**
 * Phase Vocabulary Practice Page
 * Flashcards, matching games, and vocabulary drills
 * Content varies based on the learning phase
 */

import { useState, useEffect } from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  ChevronLeft,
  BookOpen,
  RefreshCw,
  Volume2,
  CheckCircle2,
  XCircle,
  Shuffle,
  ArrowRight,
  Star,
  RotateCcw,
  Sparkles,
  Eye,
  Grid3X3,
  Layers,
  Loader2,
  Cpu,
  Database
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { useProgressStore } from '@/stores/useProgressStore';
import { useGamificationStore } from '@/stores/useGamificationStore';
import { useAudioStore } from '@/stores/useAudioStore';
import { useAIExercises, type VocabExercise } from '@/hooks/useAIExercises';
import type { PhaseId, DifficultyLevel } from '@/data/practice/types';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

// Phase configuration
const PHASES = [
  { id: 1, name: 'Foundations', color: '#c9a85c', icon: 'أ' },
  { id: 2, name: 'Building Blocks', color: '#4a9c6d', icon: 'ب' },
  { id: 3, name: 'Grammar Foundations', color: '#5a7fb8', icon: 'ج' },
  { id: 4, name: 'Intermediate Skills', color: '#9b59b6', icon: 'د' },
  { id: 5, name: 'Advanced Fluency', color: '#e74c3c', icon: 'ه' },
];

// Vocabulary item structure (compatible with VocabExercise from hook)
interface VocabItem {
  id: string;
  arabic: string;
  transliteration: string;
  english: string;
  french: string;
  category: string;
  difficulty: DifficultyLevel;
  hint?: string;
  explanation?: string;
}

// Get vocabulary by phase
function getVocabularyForPhase(phaseId: number): VocabItem[] {
  const vocabularies: Record<number, VocabItem[]> = {
    1: [
      // Colors and numbers
      { id: 'v1-1', arabic: 'أَحْمَر', transliteration: 'ahmar', english: 'red', french: 'rouge', category: 'colors', difficulty: 'easy' },
      { id: 'v1-2', arabic: 'أَزْرَق', transliteration: 'azraq', english: 'blue', french: 'bleu', category: 'colors', difficulty: 'easy' },
      { id: 'v1-3', arabic: 'أَخْضَر', transliteration: 'akhdar', english: 'green', french: 'vert', category: 'colors', difficulty: 'easy' },
      { id: 'v1-4', arabic: 'أَصْفَر', transliteration: 'asfar', english: 'yellow', french: 'jaune', category: 'colors', difficulty: 'easy' },
      { id: 'v1-5', arabic: 'أَبْيَض', transliteration: 'abyad', english: 'white', french: 'blanc', category: 'colors', difficulty: 'easy' },
      { id: 'v1-6', arabic: 'أَسْوَد', transliteration: 'aswad', english: 'black', french: 'noir', category: 'colors', difficulty: 'easy' },
      { id: 'v1-7', arabic: 'وَاحِد', transliteration: 'waahid', english: 'one', french: 'un', category: 'numbers', difficulty: 'easy' },
      { id: 'v1-8', arabic: 'اِثْنَان', transliteration: 'ithnaan', english: 'two', french: 'deux', category: 'numbers', difficulty: 'easy' },
      { id: 'v1-9', arabic: 'ثَلَاثَة', transliteration: 'thalaatha', english: 'three', french: 'trois', category: 'numbers', difficulty: 'easy' },
      { id: 'v1-10', arabic: 'أَرْبَعَة', transliteration: 'arba3a', english: 'four', french: 'quatre', category: 'numbers', difficulty: 'easy' },
    ],
    2: [
      // Family and everyday objects
      { id: 'v2-1', arabic: 'أَب', transliteration: 'ab', english: 'father', french: 'père', category: 'family', difficulty: 'easy' },
      { id: 'v2-2', arabic: 'أُمّ', transliteration: 'umm', english: 'mother', french: 'mère', category: 'family', difficulty: 'easy' },
      { id: 'v2-3', arabic: 'أَخ', transliteration: 'akh', english: 'brother', french: 'frère', category: 'family', difficulty: 'easy' },
      { id: 'v2-4', arabic: 'أُخْت', transliteration: 'ukht', english: 'sister', french: 'sœur', category: 'family', difficulty: 'easy' },
      { id: 'v2-5', arabic: 'بَيْت', transliteration: 'bayt', english: 'house', french: 'maison', category: 'places', difficulty: 'easy' },
      { id: 'v2-6', arabic: 'كِتَاب', transliteration: 'kitaab', english: 'book', french: 'livre', category: 'objects', difficulty: 'easy' },
      { id: 'v2-7', arabic: 'قَلَم', transliteration: 'qalam', english: 'pen', french: 'stylo', category: 'objects', difficulty: 'easy' },
      { id: 'v2-8', arabic: 'مَاء', transliteration: 'maa2', english: 'water', french: 'eau', category: 'food', difficulty: 'easy' },
      { id: 'v2-9', arabic: 'خُبْز', transliteration: 'khubz', english: 'bread', french: 'pain', category: 'food', difficulty: 'easy' },
      { id: 'v2-10', arabic: 'سَيَّارَة', transliteration: 'sayyaara', english: 'car', french: 'voiture', category: 'transport', difficulty: 'medium' },
      { id: 'v2-11', arabic: 'مَدْرَسَة', transliteration: 'madrasa', english: 'school', french: 'école', category: 'places', difficulty: 'medium' },
      { id: 'v2-12', arabic: 'مُعَلِّم', transliteration: 'mu3allim', english: 'teacher', french: 'professeur', category: 'people', difficulty: 'medium' },
    ],
    3: [
      // Verbs and adjectives
      { id: 'v3-1', arabic: 'كَتَبَ', transliteration: 'kataba', english: 'wrote', french: 'a écrit', category: 'verbs', difficulty: 'medium' },
      { id: 'v3-2', arabic: 'قَرَأَ', transliteration: 'qara2a', english: 'read', french: 'a lu', category: 'verbs', difficulty: 'medium' },
      { id: 'v3-3', arabic: 'ذَهَبَ', transliteration: 'dhahaba', english: 'went', french: 'est allé', category: 'verbs', difficulty: 'medium' },
      { id: 'v3-4', arabic: 'أَكَلَ', transliteration: 'akala', english: 'ate', french: 'a mangé', category: 'verbs', difficulty: 'medium' },
      { id: 'v3-5', arabic: 'شَرِبَ', transliteration: 'shariba', english: 'drank', french: 'a bu', category: 'verbs', difficulty: 'medium' },
      { id: 'v3-6', arabic: 'كَبِير', transliteration: 'kabiir', english: 'big', french: 'grand', category: 'adjectives', difficulty: 'easy' },
      { id: 'v3-7', arabic: 'صَغِير', transliteration: 'saghiir', english: 'small', french: 'petit', category: 'adjectives', difficulty: 'easy' },
      { id: 'v3-8', arabic: 'جَمِيل', transliteration: 'jamiil', english: 'beautiful', french: 'beau', category: 'adjectives', difficulty: 'easy' },
      { id: 'v3-9', arabic: 'سَرِيع', transliteration: 'sarii3', english: 'fast', french: 'rapide', category: 'adjectives', difficulty: 'medium' },
      { id: 'v3-10', arabic: 'بَطِيء', transliteration: 'batii2', english: 'slow', french: 'lent', category: 'adjectives', difficulty: 'medium' },
    ],
    4: [
      // Emotions and complex vocabulary
      { id: 'v4-1', arabic: 'سَعِيد', transliteration: 'sa3iid', english: 'happy', french: 'heureux', category: 'emotions', difficulty: 'easy' },
      { id: 'v4-2', arabic: 'حَزِين', transliteration: 'haziiin', english: 'sad', french: 'triste', category: 'emotions', difficulty: 'easy' },
      { id: 'v4-3', arabic: 'غَاضِب', transliteration: 'ghaadib', english: 'angry', french: 'en colère', category: 'emotions', difficulty: 'medium' },
      { id: 'v4-4', arabic: 'خَائِف', transliteration: 'khaa2if', english: 'afraid', french: 'effrayé', category: 'emotions', difficulty: 'medium' },
      { id: 'v4-5', arabic: 'مُتَحَمِّس', transliteration: 'mutahammis', english: 'excited', french: 'enthousiaste', category: 'emotions', difficulty: 'hard' },
      { id: 'v4-6', arabic: 'مُسْتَشْفَى', transliteration: 'mustashfaa', english: 'hospital', french: 'hôpital', category: 'places', difficulty: 'hard' },
      { id: 'v4-7', arabic: 'مَطَار', transliteration: 'mataar', english: 'airport', french: 'aéroport', category: 'places', difficulty: 'medium' },
      { id: 'v4-8', arabic: 'مَطْعَم', transliteration: 'mat3am', english: 'restaurant', french: 'restaurant', category: 'places', difficulty: 'medium' },
      { id: 'v4-9', arabic: 'يَسْتَطِيع', transliteration: 'yastaTii3', english: 'can/able', french: 'peut', category: 'verbs', difficulty: 'hard' },
      { id: 'v4-10', arabic: 'يُرِيد', transliteration: 'yuriid', english: 'wants', french: 'veut', category: 'verbs', difficulty: 'medium' },
    ],
    5: [
      // Advanced and formal vocabulary
      { id: 'v5-1', arabic: 'مُؤْتَمَر', transliteration: 'mu2tamar', english: 'conference', french: 'conférence', category: 'professional', difficulty: 'hard' },
      { id: 'v5-2', arabic: 'اِجْتِمَاع', transliteration: 'ijtimaa3', english: 'meeting', french: 'réunion', category: 'professional', difficulty: 'hard' },
      { id: 'v5-3', arabic: 'مَشْرُوع', transliteration: 'mashruu3', english: 'project', french: 'projet', category: 'professional', difficulty: 'medium' },
      { id: 'v5-4', arabic: 'تَقْرِير', transliteration: 'taqriir', english: 'report', french: 'rapport', category: 'professional', difficulty: 'hard' },
      { id: 'v5-5', arabic: 'إِنْ شَاءَ الله', transliteration: 'in shaa2 Allah', english: 'God willing', french: 'si Dieu le veut', category: 'expressions', difficulty: 'medium' },
      { id: 'v5-6', arabic: 'مَاشَاءَ الله', transliteration: 'maa shaa2 Allah', english: 'wonderful (praise)', french: 'merveilleux', category: 'expressions', difficulty: 'medium' },
      { id: 'v5-7', arabic: 'الحَمْدُ لِلَّه', transliteration: 'alhamdulillah', english: 'praise be to God', french: 'louange à Dieu', category: 'expressions', difficulty: 'easy' },
      { id: 'v5-8', arabic: 'ثَقَافَة', transliteration: 'thaqaafa', english: 'culture', french: 'culture', category: 'academic', difficulty: 'hard' },
      { id: 'v5-9', arabic: 'تَارِيخ', transliteration: 'taariikh', english: 'history', french: 'histoire', category: 'academic', difficulty: 'medium' },
      { id: 'v5-10', arabic: 'عِلْم', transliteration: '3ilm', english: 'science/knowledge', french: 'science', category: 'academic', difficulty: 'medium' },
    ],
  };
  
  return vocabularies[phaseId] || [];
}

type PracticeMode = 'flashcard' | 'matching' | 'quiz';

export default function PhaseVocabularyPage() {
  const params = useParams();
  const phaseId = parseInt(params.phaseId as string);
  const t = useTranslations();
  
  const { addXP, incrementStat } = useGamificationStore();
  const { speak } = useAudioStore();
  
  // Validate phase ID
  if (isNaN(phaseId) || phaseId < 1 || phaseId > 5) {
    notFound();
  }
  
  const phase = PHASES[phaseId - 1];
  const staticVocabulary = getVocabularyForPhase(phaseId);
  
  // AI Exercises Hook - dynamically generate exercises with fallback
  const {
    exercises: aiVocabulary,
    isLoading: isAILoading,
    error: aiError,
    isAIGenerated,
    useAI,
    toggleAI,
    regenerate,
  } = useAIExercises(phaseId as PhaseId, 'vocabulary', staticVocabulary as VocabExercise[], {
    count: 10,
    autoGenerate: false, // User must enable AI mode
  });
  
  // Use AI vocabulary when enabled, static otherwise
  const vocabulary = useAI ? (aiVocabulary as VocabItem[]) : staticVocabulary;
  
  const [mode, setMode] = useState<PracticeMode>('flashcard');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [shuffledVocab, setShuffledVocab] = useState<VocabItem[]>([]);
  
  // Quiz state
  const [quizOptions, setQuizOptions] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  
  // Matching game state
  const [matchCards, setMatchCards] = useState<Array<{ id: string; text: string; type: 'arabic' | 'english'; matched: boolean; selected: boolean }>>([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  
  // Initialize shuffled vocabulary
  useEffect(() => {
    setShuffledVocab([...vocabulary].sort(() => Math.random() - 0.5));
  }, [vocabulary]);
  
  // Generate quiz options
  useEffect(() => {
    if (mode === 'quiz' && shuffledVocab.length > 0) {
      const current = shuffledVocab[currentIndex];
      const wrongOptions = shuffledVocab
        .filter(v => v.id !== current.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(v => v.english);
      const options = [...wrongOptions, current.english].sort(() => Math.random() - 0.5);
      setQuizOptions(options);
    }
  }, [currentIndex, mode, shuffledVocab]);
  
  // Initialize matching game
  useEffect(() => {
    if (mode === 'matching') {
      const pairs = shuffledVocab.slice(0, 6);
      const cards = [
        ...pairs.map(v => ({ id: `ar-${v.id}`, text: v.arabic, type: 'arabic' as const, matched: false, selected: false })),
        ...pairs.map(v => ({ id: `en-${v.id}`, text: v.english, type: 'english' as const, matched: false, selected: false })),
      ].sort(() => Math.random() - 0.5);
      setMatchCards(cards);
      setMatchedPairs(0);
    }
  }, [mode, shuffledVocab]);
  
  const currentVocab = shuffledVocab[currentIndex];
  const progress = ((currentIndex) / shuffledVocab.length) * 100;
  
  const handleFlip = () => setFlipped(!flipped);
  
  const handlePlayAudio = () => {
    if (currentVocab?.arabic) {
      speak(currentVocab.arabic);
    }
  };
  
  const handleNext = () => {
    if (currentIndex < shuffledVocab.length - 1) {
      setCurrentIndex(i => i + 1);
      setFlipped(false);
      setSelectedAnswer(null);
      setIsCorrect(null);
    } else {
      setCompleted(true);
    }
  };
  
  const handleQuizAnswer = (answer: string) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answer);
    const correct = answer === currentVocab.english;
    setIsCorrect(correct);
    
    if (correct) {
      const xp = currentVocab.difficulty === 'easy' ? 10 : currentVocab.difficulty === 'medium' ? 15 : 20;
      setScore(s => s + xp);
      setStreak(s => s + 1);
      addXP(xp);
      incrementStat('exercisesCompleted');
    } else {
      setStreak(0);
    }
  };
  
  const handleMatchCard = (cardId: string) => {
    const cardIndex = matchCards.findIndex(c => c.id === cardId);
    if (cardIndex === -1 || matchCards[cardIndex].matched) return;
    
    const selectedCards = matchCards.filter(c => c.selected && !c.matched);
    
    if (selectedCards.length === 0) {
      // First selection
      setMatchCards(cards => cards.map(c => c.id === cardId ? { ...c, selected: true } : c));
    } else if (selectedCards.length === 1) {
      const firstCard = selectedCards[0];
      const secondCard = matchCards[cardIndex];
      
      // Check if they form a pair
      const firstVocabId = firstCard.id.replace(/^(ar|en)-/, '');
      const secondVocabId = secondCard.id.replace(/^(ar|en)-/, '');
      
      if (firstVocabId === secondVocabId && firstCard.type !== secondCard.type) {
        // Match!
        setMatchCards(cards => cards.map(c => 
          c.id === firstCard.id || c.id === secondCard.id 
            ? { ...c, matched: true, selected: false } 
            : c
        ));
        setMatchedPairs(p => p + 1);
        setScore(s => s + 15);
        addXP(15);
        incrementStat('exercisesCompleted');
      } else {
        // No match - reset after delay
        setMatchCards(cards => cards.map(c => c.id === cardId ? { ...c, selected: true } : c));
        setTimeout(() => {
          setMatchCards(cards => cards.map(c => ({ ...c, selected: false })));
        }, 1000);
      }
    }
  };
  
  const handleShuffle = () => {
    if (useAI) {
      // Regenerate AI exercises
      regenerate();
    } else {
      // Shuffle static vocabulary
      setShuffledVocab([...vocabulary].sort(() => Math.random() - 0.5));
    }
    setCurrentIndex(0);
    setFlipped(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
  };
  
  const handleReset = () => {
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setCompleted(false);
    setFlipped(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
    handleShuffle();
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
                <BookOpen className="w-12 h-12" style={{ color: phase.color }} />
              </motion.div>
              
              <h2 className="text-2xl font-bold mb-2">
                {t('common.congratulations')}! 🎉
              </h2>
              <p className="text-muted-foreground mb-6">
                {t('practice.modes.vocabularyDesc')}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-muted/50 rounded-xl p-4">
                  <Star className="w-8 h-8 mx-auto mb-2 text-amber-500" />
                  <div className="text-2xl font-bold">{score}</div>
                  <div className="text-xs text-muted-foreground">XP {t('common.earned')}</div>
                </div>
                <div className="bg-muted/50 rounded-xl p-4">
                  <CheckCircle2 className="w-8 h-8 mx-auto mb-2 text-green-500" />
                  <div className="text-2xl font-bold">{shuffledVocab.length}</div>
                  <div className="text-xs text-muted-foreground">{t('practice.modes.vocabulary')}</div>
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
            
            <div className="flex items-center gap-2">
              {/* AI Toggle */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center gap-2 px-2 py-1 rounded-lg bg-muted/50">
                      <Database className={cn(
                        "w-4 h-4 transition-colors",
                        !useAI ? "text-primary" : "text-muted-foreground"
                      )} />
                      <Switch
                        id="ai-mode"
                        checked={useAI}
                        onCheckedChange={toggleAI}
                        disabled={isAILoading}
                        className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-purple-500 data-[state=checked]:to-pink-500"
                      />
                      {isAILoading ? (
                        <Loader2 className="w-4 h-4 animate-spin text-purple-500" />
                      ) : (
                        <Cpu className={cn(
                          "w-4 h-4 transition-colors",
                          useAI ? "text-purple-500" : "text-muted-foreground"
                        )} />
                      )}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p className="text-sm">
                      {useAI 
                        ? isAIGenerated 
                          ? '✨ AI-generated exercises' 
                          : 'Loading AI exercises...'
                        : 'Switch to AI-generated exercises'
                      }
                    </p>
                    {aiError && (
                      <p className="text-xs text-red-400 mt-1">{aiError}</p>
                    )}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              {/* Mode selector */}
              <div className="flex bg-muted rounded-lg p-1">
                <Button
                  variant={mode === 'flashcard' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setMode('flashcard')}
                  className="h-7 px-2"
                >
                  <Layers className="w-4 h-4" />
                </Button>
                <Button
                  variant={mode === 'quiz' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setMode('quiz')}
                  className="h-7 px-2"
                >
                  <Eye className="w-4 h-4" />
                </Button>
                <Button
                  variant={mode === 'matching' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setMode('matching')}
                  className="h-7 px-2"
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
              </div>
              
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
          {mode !== 'matching' && (
            <div className="mt-2">
              <Progress value={progress} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>{currentIndex + 1} / {shuffledVocab.length}</span>
                <span>{Math.round(progress)}%</span>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {mode === 'flashcard' && currentVocab && (
          <div className="flex flex-col items-center">
            {/* AI Status Badge */}
            {isAIGenerated && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4"
              >
                <Badge variant="secondary" className="gap-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 border-purple-200">
                  <Sparkles className="w-3 h-3" />
                  AI Generated
                </Badge>
              </motion.div>
            )}
            
            {/* Flashcard */}
            <motion.div
              className="w-full max-w-sm aspect-[3/4] cursor-pointer perspective-1000"
              onClick={handleFlip}
            >
              <motion.div
                className="relative w-full h-full"
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front */}
                <Card 
                  className="absolute inset-0 flex flex-col items-center justify-center backface-hidden"
                  style={{ backgroundColor: `${phase.color}10` }}
                >
                  <CardContent className="text-center p-8">
                    <p className="text-6xl font-arabic mb-4" dir="rtl">
                      {currentVocab.arabic}
                    </p>
                    <p className="text-lg text-muted-foreground">
                      {currentVocab.transliteration}
                    </p>
                    <Badge className="mt-4" variant="outline">
                      {currentVocab.category}
                    </Badge>
                    
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="mt-4"
                      onClick={(e) => { e.stopPropagation(); handlePlayAudio(); }}
                    >
                      <Volume2 className="w-6 h-6" />
                    </Button>
                    
                    <p className="text-sm text-muted-foreground mt-4">
                      {t('common.clickToFlip')}
                    </p>
                  </CardContent>
                </Card>
                
                {/* Back */}
                <Card 
                  className="absolute inset-0 flex flex-col items-center justify-center backface-hidden"
                  style={{ 
                    backgroundColor: `${phase.color}10`,
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <CardContent className="text-center p-8">
                    <p className="text-4xl font-bold mb-2">
                      {currentVocab.english}
                    </p>
                    <p className="text-2xl text-muted-foreground mb-4">
                      {currentVocab.french}
                    </p>
                    <p className="text-lg text-muted-foreground">
                      {currentVocab.transliteration}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
            
            {/* Controls */}
            <div className="flex gap-3 mt-8">
              <Button variant="outline" onClick={handleShuffle} disabled={isAILoading}>
                {isAILoading ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : useAI ? (
                  <Sparkles className="w-4 h-4 mr-2" />
                ) : (
                  <Shuffle className="w-4 h-4 mr-2" />
                )}
                {useAI ? (isAILoading ? 'Generating...' : 'New AI Words') : t('practice.shuffle')}
              </Button>
              <Button onClick={handleNext} style={{ backgroundColor: phase.color }}>
                {t('common.next')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}
        
        {mode === 'quiz' && currentVocab && (
          <Card className="overflow-hidden">
            <div className="h-1" style={{ backgroundColor: phase.color }} />
            <CardHeader className="text-center">
              <p className="text-sm text-muted-foreground mb-2">
                {t('practice.modes.vocabulary')}
              </p>
              <p className="text-5xl font-arabic" dir="rtl">
                {currentVocab.arabic}
              </p>
              <p className="text-lg text-muted-foreground mt-2">
                {currentVocab.transliteration}
              </p>
              <Button 
                variant="ghost" 
                size="icon" 
                className="mx-auto mt-2"
                onClick={handlePlayAudio}
              >
                <Volume2 className="w-5 h-5" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-3">
              {quizOptions.map((option, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Button
                    variant="outline"
                    className={cn(
                      'w-full justify-start text-left h-auto py-4 px-6',
                      selectedAnswer === option && isCorrect && 'bg-green-50 border-green-500 text-green-700',
                      selectedAnswer === option && !isCorrect && 'bg-red-50 border-red-500 text-red-700',
                      selectedAnswer && option === currentVocab.english && 'bg-green-50 border-green-500'
                    )}
                    onClick={() => handleQuizAnswer(option)}
                    disabled={selectedAnswer !== null}
                  >
                    <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center mr-3 text-sm font-medium">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    {option}
                    {selectedAnswer === option && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 ml-auto text-green-500" />
                    )}
                    {selectedAnswer === option && !isCorrect && (
                      <XCircle className="w-5 h-5 ml-auto text-red-500" />
                    )}
                  </Button>
                </motion.div>
              ))}
              
              {selectedAnswer && (
                <Button 
                  className="w-full mt-4" 
                  onClick={handleNext}
                  style={{ backgroundColor: phase.color }}
                >
                  {currentIndex < shuffledVocab.length - 1 ? t('common.next') : t('common.finish')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </CardContent>
          </Card>
        )}
        
        {mode === 'matching' && (
          <div>
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold">{t('practice.modes.vocabulary')}</h2>
              <p className="text-muted-foreground">{t('practice.matchPairs')}</p>
              <Badge className="mt-2" style={{ backgroundColor: phase.color }}>
                {matchedPairs} / {Math.min(6, shuffledVocab.length)} {t('common.matched')}
              </Badge>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              {matchCards.map((card, idx) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Button
                    variant="outline"
                    className={cn(
                      'w-full h-20 text-lg',
                      card.type === 'arabic' && 'font-arabic',
                      card.selected && 'ring-2 ring-primary',
                      card.matched && 'bg-green-50 border-green-500 opacity-60'
                    )}
                    onClick={() => handleMatchCard(card.id)}
                    disabled={card.matched}
                    dir={card.type === 'arabic' ? 'rtl' : 'ltr'}
                  >
                    {card.text}
                  </Button>
                </motion.div>
              ))}
            </div>
            
            {matchedPairs === Math.min(6, shuffledVocab.length) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 text-center"
              >
                <p className="text-xl font-semibold text-green-600 mb-4">
                  🎉 {t('common.congratulations')}!
                </p>
                <div className="flex gap-3 justify-center">
                  <Button variant="outline" onClick={handleReset}>
                    <RotateCcw className="w-4 h-4 mr-2" />
                    {t('common.playAgain')}
                  </Button>
                  <Link href={`/practice/${phaseId}`}>
                    <Button style={{ backgroundColor: phase.color }}>
                      {t('common.continue')}
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
