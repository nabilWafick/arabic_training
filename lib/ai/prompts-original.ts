/**
 * AI prompts for exercise generation
 * Optimized for Mistral models to produce high-quality Arabic learning content
 */

import type { Difficulty, ExerciseType } from "@/types";

/**
 * System prompt for Arabic language teaching context
 */
export const ARABIC_TEACHER_SYSTEM_PROMPT = `You are an expert Arabic language teacher with deep knowledge of:
- Modern Standard Arabic (MSA / الفصحى)
- Classical Arabic grammar and morphology
- Quranic Arabic and its special features
- Pedagogical methods for teaching Arabic to non-native speakers

Your role is to generate high-quality, educational content for Arabic learners.

IMPORTANT GUIDELINES:
1. Always include proper diacritical marks (harakat/tashkeel) on Arabic text: فَتْحَة، ضَمَّة، كَسْرَة، سُكُون، شَدَّة
2. Provide transliteration using the standard academic system
3. Adapt content to the learner's level (beginner/intermediate/advanced)
4. Use culturally appropriate examples
5. Explain grammatical concepts clearly with examples
6. Be encouraging and supportive in feedback

Response must be valid JSON only, no markdown formatting.`;

/**
 * Generate exercise prompt based on parameters
 */
export function generateExercisePrompt(params: {
  type: ExerciseType;
  difficulty: Difficulty;
  topic: string;
  lessonContext: string;
  phaseLevel: number;
  count: number;
  language: "en" | "fr" | "ar";
}): string {
  const { type, difficulty, topic, lessonContext, phaseLevel, count, language } = params;
  
  const languageInstructions = {
    en: "Provide questions and explanations in English",
    fr: "Provide questions and explanations in French (Français)",
    ar: "Provide questions and explanations in Arabic",
  };
  
  const exerciseTypeInstructions: Record<ExerciseType, string> = {
    MULTIPLE_CHOICE: `Generate multiple-choice questions with 4 options (A, B, C, D).
Mark the correct answer index (0-3).
Include distractors that test common mistakes.`,
    
    WRITING: `Generate writing prompts that require short Arabic text responses.
The expected answer should be 1-10 words in Arabic with full diacritics.
Include acceptable variations if applicable.`,
    
    LISTENING: `Generate questions based on audio content.
Provide the Arabic text that will be read aloud (audioText field).
Create comprehension questions about what was heard.`,
    
    ORAL: `Generate pronunciation exercises.
Include the Arabic text to be spoken and its transliteration.
Specify phonetic focus areas and common pronunciation errors to avoid.`,
    
    MATCHING: `Generate matching pairs (5-8 pairs).
Left side should have Arabic terms/phrases.
Right side should have translations/meanings.
Ensure unique, unambiguous matches.`,
    
    FILL_BLANK: `Generate fill-in-the-blank sentences in Arabic.
Mark the blank position with _____.
Provide the correct word to fill in.`,
    
    TRANSLATION: `Generate translation exercises.
For beginners: Arabic → English/French
For advanced: English/French → Arabic
Include context clues in the sentence.`,
  };
  
  const difficultyGuide: Record<Difficulty, string> = {
    easy: "Use basic vocabulary, short sentences, common words. Suitable for beginners.",
    medium: "Use intermediate vocabulary, compound sentences, less common words.",
    hard: "Use advanced vocabulary, complex grammar, idiomatic expressions.",
  };
  
  return `Generate ${count} ${difficulty.toUpperCase()} level ${type} exercises for Arabic learners.

TOPIC: ${topic}
LESSON CONTEXT: ${lessonContext}
PHASE LEVEL: ${phaseLevel} (1=Foundation, 2=Beginner, 3=Intermediate, 4=Advanced, 5=Expert)
DIFFICULTY: ${difficulty} - ${difficultyGuide[difficulty]}
${languageInstructions[language]}

EXERCISE TYPE REQUIREMENTS:
${exerciseTypeInstructions[type]}

OUTPUT FORMAT (JSON array):
{
  "exercises": [
    {
      "id": "unique-id-string",
      "type": "${type}",
      "difficulty": "${difficulty}",
      "question": "Question in ${language === "ar" ? "Arabic" : language === "fr" ? "French" : "English"}",
      "questionAr": "السؤال بالعربية مع التشكيل الكامل",
      "options": ["Option A", "Option B", "Option C", "Option D"] (for multiple choice),
      "correctAnswer": 0 (index for MCQ) or "الجواب" (string for writing),
      "explanation": "Detailed explanation of the correct answer",
      "explanationAr": "شرح مفصل باللغة العربية",
      "hint": "Optional hint to help the learner",
      "audioText": "Arabic text for TTS (for listening exercises)",
      "matchPairs": [{"id": "1", "left": "عربي", "right": "English"}] (for matching),
      "xpReward": ${difficulty === "easy" ? 10 : difficulty === "medium" ? 20 : 30}
    }
  ]
}

CRITICAL: 
- All Arabic text MUST have complete diacritical marks (harakat)
- Ensure grammatically correct Arabic
- Make exercises pedagogically appropriate for Phase ${phaseLevel}
- Vary the questions to cover different aspects of ${topic}`;
}

/**
 * Generate answer verification prompt
 */
export function generateVerifyPrompt(params: {
  question: string;
  expectedAnswer: string;
  studentAnswer: string;
  exerciseType: ExerciseType;
  language: "en" | "fr" | "ar";
}): string {
  const { question, expectedAnswer, studentAnswer, exerciseType, language } = params;
  
  const languageInstructions = {
    en: "Provide feedback in English",
    fr: "Provide feedback in French (Français)",
    ar: "Provide feedback in Arabic",
  };
  
  return `Evaluate a student's Arabic language exercise answer.

QUESTION: ${question}
EXPECTED ANSWER: ${expectedAnswer}
STUDENT'S ANSWER: ${studentAnswer}
EXERCISE TYPE: ${exerciseType}
${languageInstructions[language]}

EVALUATION CRITERIA:
1. For writing exercises: Check spelling, grammar, diacritics accuracy
2. Allow minor variations that don't change meaning
3. Consider partial credit for partially correct answers
4. Be encouraging but accurate

OUTPUT FORMAT (JSON only):
{
  "correct": true/false,
  "score": 0-100 (percentage of correctness),
  "feedback": "Detailed, constructive feedback for the student",
  "suggestions": ["Suggestion 1", "Suggestion 2"],
  "relatedConcepts": ["Concept to review 1", "Concept to review 2"],
  "correctAnswer": "The correct answer if student was wrong"
}

Be fair in evaluation. Minor diacritic errors in less important positions may still receive partial credit.
Focus on whether the core meaning and grammar are correct.`;
}

/**
 * Generate explanation prompt for a concept
 */
export function generateExplanationPrompt(params: {
  concept: string;
  context: string;
  level: Difficulty;
  language: "en" | "fr" | "ar";
}): string {
  const { concept, context, level, language } = params;
  
  return `Provide a clear, detailed explanation of an Arabic language concept.

CONCEPT: ${concept}
CONTEXT: ${context}
LEARNER LEVEL: ${level}
LANGUAGE: ${language}

Create an explanation that:
1. Starts with a simple overview
2. Provides the grammatical rule or pattern
3. Gives 3-5 example sentences in Arabic with full diacritics
4. Includes transliteration and translation for each example
5. Notes common mistakes to avoid
6. Suggests related concepts to explore

OUTPUT FORMAT (JSON only):
{
  "title": "Concept title",
  "titleAr": "العنوان بالعربية",
  "overview": "Brief introduction to the concept",
  "rules": [
    {
      "rule": "Grammar rule description",
      "ruleAr": "القاعدة بالعربية"
    }
  ],
  "examples": [
    {
      "arabic": "الجملة العربية مع التشكيل",
      "transliteration": "al-jumla al-ʿarabiyya",
      "translation": "The Arabic sentence",
      "notes": "Any special notes about this example"
    }
  ],
  "commonMistakes": ["Mistake 1 to avoid", "Mistake 2 to avoid"],
  "relatedConcepts": ["Related concept 1", "Related concept 2"],
  "tips": ["Helpful tip 1", "Helpful tip 2"]
}`;
}

/**
 * Generate daily challenge prompt
 */
export function generateDailyChallengePrompt(params: {
  userLevel: number;
  completedLessons: string[];
  language: "en" | "fr" | "ar";
}): string {
  const { userLevel, completedLessons, language } = params;
  
  return `Generate a personalized daily Arabic challenge for a learner.

USER LEVEL: ${userLevel}
COMPLETED LESSONS: ${completedLessons.join(", ")}
LANGUAGE: ${language}

Create an engaging daily challenge that:
1. Reviews previously learned material
2. Introduces a small new element
3. Is completable in 5-10 minutes
4. Includes 5 varied exercises (mix of types)
5. Has a fun, motivating theme

OUTPUT FORMAT (JSON only):
{
  "theme": "Challenge theme/title",
  "themeAr": "موضوع التحدي",
  "description": "Brief engaging description",
  "xpBonus": 50,
  "timeLimit": 600,
  "exercises": [
    // Array of 5 exercises in standard exercise format
  ],
  "completionMessage": "Congratulatory message for completion",
  "streakBonus": "Additional reward for maintaining streak"
}`;
}
