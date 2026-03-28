/**
 * AI prompts for exercise generation
 * Optimized for Mistral models with enhanced pedagogical structure
 * Version 2.0: Improved clarity, structure, and Mistral-specific optimization
 */

import type { Difficulty, ExerciseType } from "@/types";

/**
 * Enhanced system prompt for Arabic language teaching context
 * Optimized for Mistral's instruction-following capabilities
 */
export const ARABIC_TEACHER_SYSTEM_PROMPT = `You are an expert Arabic language teacher with deep knowledge of:
- Modern Standard Arabic (MSA / الفصحى) grammar and usage
- Classical Arabic literature and linguistic forms
- Quranic Arabic features and context
- Effective pedagogy for teaching Arabic to non-native learners
- Arabic phonetics, pronunciation, and diacritical systems

Your role is to generate high-quality, pedagogically sound, culturally appropriate Arabic learning content.

CORE DIRECTIVES (FOLLOW THESE PRECISELY):
1. DIACRITICAL MARKS: ALWAYS include complete tashkeel (harakat) on ALL Arabic text
   - Every word must have: فَتْحَة, ضَمَّة, كَسْرَة, سُكُون, or شَدَّة marks
   - No exceptions - diacritics are mandatory for learner comprehension
2. TRANSLITERATION: Provide academic transliteration without diacritics (e.g., "al-ʿarabiyya")
3. LEVEL ADAPTATION: Tailor vocabulary and grammar complexity to learner level (Phase 1=Beginner, Phase 5=Advanced)
4. CULTURAL APPROPRIATENESS: Use respectful, age-appropriate, culturally contextualized examples
5. GRAMMATICAL CORRECTNESS: All Arabic text must be grammatically perfect and pedagogically accurate
6. CLEAR EXPLANATIONS: Provide reasoning for all corrections and feedback

RESPONSE FORMAT REQUIREMENTS:
- Output ONLY valid JSON (no markdown, no explanations outside JSON)
- Start directly with { and end with }
- Use proper JSON escaping for all strings
- No backticks, no code blocks, no extra text before/after`;

/**
 * Generate exercise prompt based on parameters
 * Enhanced version 2.0 with clearer structure for Mistral
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
    ar: "Provide questions and explanations in Arabic with complete diacritics",
  };

  // Enhanced exercise type instructions with clearer formatting for Mistral
  const exerciseTypeInstructions: Record<ExerciseType, string> = {
    MULTIPLE_CHOICE: `Generate exactly ${count} multiple-choice questions.
Requirements:
- Each question has exactly 4 options (labeled A, B, C, D)
- Mark the correct answer as index 0-3
- Create plausible distractors that test common mistakes
- Each question should test ONE specific skill or concept
- Options should be roughly similar in length`,

    WRITING: `Generate exactly ${count} writing prompts requiring short Arabic responses.
Requirements:
- Expected answer should be 1-10 Arabic words with full diacritics
- Include 2-3 acceptable variations if the concept allows
- Make evaluation straightforward and objective
- Provide clear, verifiable correct answers
- Vary the prompts to test different aspects of "${topic}"`,

    LISTENING: `Generate exactly ${count} listening comprehension exercises.
Requirements:
- Each includes an "audioText" field (Arabic text to be read aloud)
- Audio text should be 15-30 words, appropriate to Phase ${phaseLevel}
- Create 1-2 comprehension questions per audio
- For beginners: include vocabulary list
- Mark any challenging sounds or words
- Questions should test comprehension, not memory`,

    ORAL: `Generate exactly ${count} pronunciation/speaking exercises.
Requirements:
- Include the Arabic text to pronounce with full diacritics
- Provide transliteration showing pronunciation
- Specify 1-2 phonetic focus areas per exercise
- List 2-3 common pronunciation errors to avoid
- For advanced learners: include context and meaning
- Focus on sounds difficult for English speakers`,

    MATCHING: `Generate exactly ${count} matching exercise sets.
Requirements:
- Each set contains 5-8 pairs (NOT more, NOT less)
- Left column: Arabic terms/phrases with complete diacritics
- Right column: English/French translations or definitions
- Ensure matches are unambiguous and non-overlapping
- Include at least 1 distractor option
- Make pairs pedagogically useful`,

    FILL_BLANK: `Generate exactly ${count} fill-in-the-blank exercises.
Requirements:
- Each sentence must be grammatically and pedagogically important
- Mark blank position with _____ (five underscores)
- Provide the exact correct word with full diacritics
- Include 2-3 acceptable variations if applicable
- Make incorrect options plausibly similar to correct answer
- Focus on vocabulary and grammar reinforcement`,

    TRANSLATION: `Generate exactly ${count} translation exercises.
Requirements:
- For Phase 1-2 (beginner): Arabic → ${language === "ar" ? "English" : language === "fr" ? "French" : "English"}
- For Phase 3-5 (advanced): ${language === "ar" ? "English" : language === "fr" ? "French" : "English"} → Arabic
- Include context clues in the source sentence
- Provide idiomatic, natural translations
- Mark any cultural or contextual notes
- Make translations pedagogically appropriate`,
  };

  const difficultyGuide: Record<Difficulty, { description: string; vocab: string; grammar: string }> = {
    easy: {
      description: "BEGINNER - Complete novices, minimal prior knowledge",
      vocab: "Use only the 500 most common Arabic words. Keep all sentences to 3-5 words maximum.",
      grammar: "Present tense only, simple sentences, basic masculine/feminine agreement, no complex structures",
    },
    medium: {
      description: "INTERMEDIATE - 6-12 months of study",
      vocab: "Use intermediate vocabulary from standard textbooks. Sentences 5-10 words.",
      grammar: "Include past tense, compound sentences, modal verbs, simple subjunctive forms, regular verb patterns",
    },
    hard: {
      description: "ADVANCED - 2+ years of study",
      vocab: "Include specialized, literary, and technical vocabulary. Complex expressions and idioms.",
      grammar: "Complex grammar: subjunctive mood, conditional forms, passive voice, literary constructions, idiomatic expressions",
    },
  };

  const diffInfo = difficultyGuide[difficulty];

  return `TASK: Generate Arabic language exercises

═══════════════════════════════════════════════════════════════
EXERCISE TYPE: ${type}
EXERCISE COUNT: Generate exactly ${count} exercises
DIFFICULTY LEVEL: ${difficulty.toUpperCase()} - ${diffInfo.description}
═══════════════════════════════════════════════════════════════

CURRICULUM CONTEXT:
- Topic: "${topic}"
- Lesson Context: "${lessonContext}"
- Phase Level: ${phaseLevel} (1=Foundation, 2=Beginner, 3=Intermediate, 4=Advanced, 5=Expert)
- Language: ${language === "ar" ? "Arabic (العربية)" : language === "fr" ? "French (Français)" : "English"}

EXERCISE TYPE REQUIREMENTS:
${exerciseTypeInstructions[type]}

VOCABULARY GUIDANCE (${difficulty}):
${diffInfo.vocab}

GRAMMAR GUIDANCE (${difficulty}):
${diffInfo.grammar}

QUALITY CHECKLIST (Verify before output):
☑ All Arabic text has complete diacritical marks (tashkeel)
☑ Content is appropriate for Phase ${phaseLevel}
☑ Exercises test different aspects of "${topic}"
☑ Difficulty matches "${difficulty}" level consistently
☑ Correct answers are unambiguous and defensible
☑ Distractors are plausible and educational
☑ All content is culturally appropriate and respectful
☑ Exactly ${count} exercises generated (not more, not less)

JSON OUTPUT STRUCTURE (VALID JSON ONLY):
{
  "exercises": [
    {
      "id": "exercise-${type.toLowerCase()}-1",
      "type": "${type}",
      "difficulty": "${difficulty}",
      "question": "Question text (${language === "ar" ? "Arabic" : language === "fr" ? "French" : "English"})",
      "questionAr": "السؤال باللغة العربية مع التشكيل الكامل لكل كلمة",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctAnswer": 0,
      "explanation": "Why this answer is correct and why the others are wrong",
      "explanationAr": "شرح مفصّل باللغة العربية لماذا هذا الجواب صحيح",
      "hint": "A helpful hint for struggling learners",
      "audioText": "النّص العربي مع التشكيل الكامل الذي سيتم قراءته بصوت عالي",
      "matchPairs": [{"id": "pair1", "left": "عربي", "right": "English"}],
      "xpReward": ${difficulty === "easy" ? 10 : difficulty === "medium" ? 20 : 30}
    }
  ]
}

MISTRAL-SPECIFIC INSTRUCTIONS:
- Return ONLY valid JSON - no markdown, no explanations outside JSON structure
- Start response with { immediately
- Every Arabic word MUST have diacritical marks (no exceptions)
- All correctAnswers must be defensible and tested
- Explanations must help learners understand the concept
- Generate EXACTLY ${count} exercises (count your exercises before responding)`;
}

/**
 * Generate answer verification prompt
 * Enhanced version with clearer evaluation criteria
 */
export function generateVerifyPrompt(params: {
  question: string;
  expectedAnswer: string;
  studentAnswer: string;
  exerciseType: ExerciseType;
  language: "en" | "fr" | "ar";
}): string {
  const { question, expectedAnswer, studentAnswer, exerciseType, language } = params;

  const evaluationCriteria: Record<ExerciseType, string> = {
    MULTIPLE_CHOICE:
      "Check if selected answer index matches correct index. Straightforward comparison.",
    WRITING:
      "Check spelling, diacritical marks (harakat), grammar, and word order. Allow minor diacritical errors if meaning is correct. Accept grammatically equivalent alternatives.",
    LISTENING:
      "Evaluate comprehension of main meaning. Accept answers conveying correct understanding even with spelling variation. Mark wrong only if comprehension is incorrect.",
    ORAL: "This is for reference - suggest pronunciation focus areas and flag common errors.",
    MATCHING: "Check each pair matching. Award partial credit for partially correct matches. Provide corrected mappings.",
    FILL_BLANK:
      "Check exact word match or acceptable variation. Consider synonyms and grammatical variations. Allow minor diacritical differences if meaning is identical.",
    TRANSLATION:
      "Check if meaning is conveyed accurately. Allow multiple valid translations. Focus on comprehension over word-for-word accuracy. Common professional translations are acceptable.",
  };

  return `TASK: Evaluate an Arabic language exercise answer

═══════════════════════════════════════════════════════════════
EXERCISE TYPE: ${exerciseType}
FEEDBACK LANGUAGE: ${language === "ar" ? "Arabic (العربية)" : language === "fr" ? "French (Français)" : "English"}
═══════════════════════════════════════════════════════════════

QUESTION: ${question}
EXPECTED ANSWER: "${expectedAnswer}"
STUDENT'S ANSWER: "${studentAnswer}"

EVALUATION CRITERIA FOR THIS EXERCISE TYPE (${exerciseType}):
${evaluationCriteria[exerciseType]}

GENERAL FEEDBACK GUIDELINES:
1. Be accurate but encouraging
2. Explain the grammatical or lexical reason for any errors
3. Suggest ONE specific area for improvement
4. If partially correct, award partial credit
5. Frame feedback constructively

SCORING GUIDE:
- 100: Perfect or excellent alternative answer
- 75-99: Minor errors that don't affect meaning
- 50-74: Partially correct, understanding shown but errors present
- 1-49: Significant errors but some correct elements
- 0: Completely incorrect or blank

JSON OUTPUT (Valid JSON only):
{
  "correct": true or false,
  "score": 0-100,
  "feedback": "Detailed, constructive feedback addressing the student's answer",
  "suggestions": ["Specific suggestion 1", "Suggestion 2"],
  "relatedConcepts": ["Grammar concept to review", "Vocabulary theme"],
  "correctAnswer": "The correct answer (if student was wrong)",
  "partialCredit": true or false
}

MISTRAL-SPECIFIC INSTRUCTIONS:
- Return ONLY valid JSON
- Be fair: minor diacritic errors in less important positions may still receive partial credit
- Focus on whether the core meaning and grammar are correct
- Provide actionable feedback`;
}

/**
 * Generate explanation prompt for a concept
 * Enhanced version with structured output
 */
export function generateExplanationPrompt(params: {
  concept: string;
  context: string;
  level: Difficulty;
  language: "en" | "fr" | "ar";
}): string {
  const { concept, context, level, language } = params;

  return `TASK: Explain an Arabic language concept

═══════════════════════════════════════════════════════════════
CONCEPT: ${concept}
CONTEXT: ${context}
LEARNER LEVEL: ${level}
EXPLANATION LANGUAGE: ${language === "ar" ? "Arabic (العربية)" : language === "fr" ? "French (Français)" : "English"}
═══════════════════════════════════════════════════════════════

EXPLANATION STRUCTURE:
1. Overview (1-2 sentences: What is this concept?)
2. Why It Matters (How is it used in real Arabic?)
3. The Rule/Pattern (Clear statement of the grammatical rule)
4. Examples (Exactly 5 varied sentences in Arabic)
5. Common Mistakes (2-3 typical errors learners make)
6. Related Concepts (2-3 concepts that build on this)
7. Practice Tips (1-2 specific tips for mastery)

EXAMPLE SECTION FORMAT (for each of 5 examples):
- Arabic: Full sentence with complete diacritical marks (tashkeel)
- Transliteration: Academic transliteration without diacritics
- Translation: English translation
- Note: Why this example is important/illustrative

JSON OUTPUT (Valid JSON only):
{
  "title": "Concept Title in English",
  "titleAr": "عنوان المفهوم بالعربية مع التشكيل الكامل",
  "overview": "Simple, clear explanation of what this concept is",
  "rule": "Clear statement of the grammatical rule or pattern",
  "ruleAr": "القاعدة أو النمط بالعربية مع التشكيل الكامل",
  "examples": [
    {
      "arabic": "جملة عربية كاملة مع التشكيل الكامل على كل كلمة",
      "transliteration": "academic transliteration without diacritics",
      "translation": "English translation of the sentence",
      "note": "Why this example illustrates the concept"
    }
  ],
  "commonMistakes": [
    "Mistake 1 that learners often make",
    "Mistake 2 that learners often make",
    "Mistake 3 that learners often make"
  ],
  "relatedConcepts": [
    "Related concept 1",
    "Related concept 2"
  ],
  "tips": [
    "Specific, actionable practice tip 1",
    "Specific, actionable practice tip 2"
  ]
}

QUALITY CHECKLIST:
☑ All Arabic text has complete diacritical marks (tashkeel)
☑ Explanations are clear and appropriate for learner level
☑ Exactly 5 examples provided (not more, not less)
☑ Examples are varied and illustrative
☑ Common mistakes are genuinely common
☑ Tips are actionable and specific`;
}

/**
 * Generate daily challenge prompt
 * Enhanced version for engagement and learning
 */
export function generateDailyChallengePrompt(params: {
  userLevel: number;
  completedLessons: string[];
  language: "en" | "fr" | "ar";
}): string {
  const { userLevel, completedLessons, language } = params;

  return `TASK: Generate a personalized daily Arabic learning challenge

═══════════════════════════════════════════════════════════════
USER PROFICIENCY LEVEL: ${userLevel} (1=Beginner, 5=Advanced)
LEARNER'S COMPLETED LESSONS: ${completedLessons.join(", ")}
CHALLENGE LANGUAGE: ${language === "ar" ? "Arabic (العربية)" : language === "fr" ? "French (Français)" : "English"}
═══════════════════════════════════════════════════════════════

CHALLENGE REQUIREMENTS:
- Duration: Completable in 5-10 minutes
- Exercise Count: Exactly 5 exercises (mix of types)
- Difficulty: Balanced (60% review previous, 40% slight challenge)
- Engagement: Include a fun theme or story angle
- Motivation: Make completion feel rewarding

REQUIRED EXERCISE MIX:
- 1 Multiple Choice (test previous knowledge)
- 1 Writing (productive skill practice)
- 1 Listening (receptive skill practice)
- 1 Vocabulary review (matching or flashcard style)
- 1 Light extension (introduce new element)

JSON OUTPUT (Valid JSON only):
{
  "theme": "Fun, engaging daily challenge title",
  "themeAr": "عنوان التحدي اليومي بالعربية مع التشكيل الكامل",
  "description": "Engaging description of what the challenge is about (2-3 sentences)",
  "xpReward": 50,
  "timeLimit": 600,
  "exercises": [
    {
      "id": "daily-challenge-1",
      "type": "MULTIPLE_CHOICE",
      "difficulty": "medium",
      "question": "Challenge question",
      "questionAr": "السؤال بالعربية مع التشكيل",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctAnswer": 0,
      "explanation": "Why this is correct",
      "xpReward": 10
    }
  ],
  "completionMessage": "Congratulatory message for completing all exercises",
  "streakBonus": "Extra reward for maintaining a daily completion streak"
}

QUALITY CHECKLIST:
☑ All Arabic text has complete diacritical marks (tashkeel)
☑ Challenge is completable in 5-10 minutes
☑ Exercises build on previous lessons
☑ Mix of exercise types keeps it engaging
☑ Difficulty is appropriate for user level
☑ Theme is fun and motivating
☑ Exactly 5 exercises included`;
}
