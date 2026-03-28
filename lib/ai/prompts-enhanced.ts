/**
 * Enhanced AI prompts for exercise generation
 * Optimized for Mistral models with improved pedagogical quality
 * Focuses on clarity, structure, and Mistral-specific formatting
 */

import type { Difficulty, ExerciseType } from "@/types";

/**
 * Enhanced system prompt for Arabic language teaching context
 * Optimized for Mistral's instruction-following capabilities
 */
export const ARABIC_TEACHER_SYSTEM_PROMPT_ENHANCED = `You are an expert Arabic language teacher with deep knowledge of:
- Modern Standard Arabic (MSA / الفصحى) grammar and usage
- Classical Arabic literature and linguistic forms
- Quranic Arabic features and context
- Effective pedagogy for non-native Arabic learners
- Arabic phonetics and pronunciation

Your role is to generate pedagogically sound, culturally appropriate Arabic learning content.

CORE DIRECTIVES (FOLLOW THESE PRECISELY):
1. ALWAYS include complete diacritical marks (harakat/tashkeel) on ALL Arabic text
   - Use: فَتْحَة, ضَمَّة, كَسْرَة, سُكُون, شَدَّة on every word
2. Provide standard academic transliteration (without diacritics in Latin script)
3. Tailor difficulty to learner level (1=Complete Beginner, 5=Advanced)
4. Use age-appropriate, culturally respectful examples
5. Ensure grammatically correct Arabic in all contexts
6. Provide clear explanations for all corrections/feedback

RESPONSE FORMAT:
- ALWAYS output valid JSON only (no markdown, no explanations outside JSON)
- Start directly with { and end with }
- No backticks, no code blocks, no additional text before or after JSON
- All strings must use proper JSON escaping`;

/**
 * Enhanced exercise prompt generator
 * Better structured for Mistral's instruction following
 */
export function generateExercisePromptEnhanced(params: {
  type: ExerciseType;
  difficulty: Difficulty;
  topic: string;
  lessonContext: string;
  phaseLevel: number;
  count: number;
  language: "en" | "fr" | "ar";
}): string {
  const { type, difficulty, topic, lessonContext, phaseLevel, count, language } = params;

  // Difficulty level descriptions optimized for Mistral
  const difficultyMap: Record<Difficulty, { description: string; vocabLevel: string; grammarLevel: string }> = {
    easy: {
      description: "BEGINNER - Complete novices",
      vocabLevel: "Use only the 500 most common Arabic words. Keep sentences 3-5 words max.",
      grammarLevel: "Present tense, simple sentences, basic masculine/feminine agreement only.",
    },
    medium: {
      description: "INTERMEDIATE - 6-12 months study",
      vocabLevel: "Use intermediate vocabulary from typical Arabic textbooks. Sentences 5-10 words.",
      grammarLevel: "Include compound sentences, past tense, modal verbs, some subjunctive forms.",
    },
    hard: {
      description: "ADVANCED - 2+ years study",
      vocabLevel: "Include specialized, literary, and technical vocabulary. Complex expressions.",
      grammarLevel: "Complex grammar: subjunctive, conditional, passive voice, literary forms, idioms.",
    },
  };

  const exerciseTypeInstructions: Record<ExerciseType, { format: string; requirements: string }> = {
    MULTIPLE_CHOICE: {
      format: "JSON array of 4-option multiple choice questions",
      requirements: `- Generate exactly ${count} questions
- Each question has exactly 4 options (A, B, C, D)
- Provide correct answer as index (0-3)
- Create plausible distractors that test common mistakes
- Each question should test one specific skill`,
    },

    WRITING: {
      format: "Short answer writing exercises requiring 1-10 word Arabic responses",
      requirements: `- Generate exactly ${count} writing prompts
- Each should elicit a specific, verifiable Arabic response
- Expected answer should be 1-10 words with complete diacritics
- Include 2-3 acceptable variations if the concept allows
- Provide clear evaluation criteria
- Make it easy to verify correctness`,
    },

    LISTENING: {
      format: "Comprehension questions based on audio transcripts",
      requirements: `- Generate exactly ${count} listening exercises
- Each includes an "audioText" field (Arabic text to be read aloud)
- Text should be 15-30 words, appropriate to level
- Create 1-2 comprehension questions per audio
- Include vocabulary list if level is beginner
- Mark any challenging sounds`,
    },

    ORAL: {
      format: "Pronunciation practice exercises",
      requirements: `- Generate exactly ${count} pronunciation exercises
- Each includes Arabic text, transliteration, and phonetic focus
- Highlight 1-2 difficult sounds per exercise
- Include common pronunciation errors to avoid
- Provide feedback guidance for correct/incorrect pronunciation
- Note any context-dependent pronunciation changes`,
    },

    MATCHING: {
      format: "Matching pairs (5-8 pairs per exercise set)",
      requirements: `- Generate exactly ${count} matching exercise sets
- Each set has 5-8 unique pairs
- Left side: Arabic terms/phrases with complete diacritics
- Right side: English/French translations or definitions
- Ensure matches are unambiguous and non-overlapping
- Include at least one distractor option`,
    },

    FILL_BLANK: {
      format: "Fill-in-the-blank sentences",
      requirements: `- Generate exactly ${count} sentences with blanks
- Each sentence should be grammatically important
- Use _____ to mark the blank position
- Provide correct word to fill in
- Include 2-3 acceptable variations if applicable
- Make incorrect options plausibly similar`,
    },

    TRANSLATION: {
      format: "Translation exercises",
      requirements: `- Generate exactly ${count} translation exercises
- For Phase 1-2 (beginner): Arabic → ${language === "ar" ? "English" : language === "fr" ? "French" : "English"}
- For Phase 3-5 (advanced): ${language === "ar" ? "English" : language === "fr" ? "French" : "English"} → Arabic
- Include context clues in source sentences
- Provide idiomatic, natural translations
- Mark any cultural or contextual notes`,
    },
  };

  const phaseContext: Record<number, string> = {
    1: "Absolute beginners learning Arabic letters and sounds",
    2: "Basic phrases, simple verbs, common nouns and adjectives",
    3: "Sentence construction, tense agreement, simple conversations",
    4: "Complex sentences, idioms, cultural context, literature",
    5: "Advanced literature, formal writing, specialized vocabulary",
  };

  const instructionType = exerciseTypeInstructions[type];
  const difficulty_info = difficultyMap[difficulty];
  const phaseInfo = phaseContext[phaseLevel];

  return `TASK: Generate ${count} Arabic language exercises

EXERCISE TYPE: ${type}
FORMAT REQUIREMENTS:
${instructionType.requirements}

CONTENT PARAMETERS:
- Topic: ${topic}
- Lesson Context: ${lessonContext}
- Phase Level: ${phaseLevel} (${phaseInfo})
- Difficulty Level: ${difficulty_info.description}

VOCABULARY GUIDANCE: ${difficulty_info.vocabLevel}
GRAMMAR GUIDANCE: ${difficulty_info.grammarLevel}

LANGUAGE: Provide all explanations and instructions in ${
    language === "ar" ? "Arabic (العربية)" : language === "fr" ? "French (Français)" : "English"
  }

EXERCISE QUALITY CHECKLIST:
☑ All Arabic text has complete diacritical marks (harakat/tashkeel)
☑ Content is appropriate for Phase ${phaseLevel}
☑ Exercises test different aspects of "${topic}"
☑ Difficulty is consistent with "${difficulty}" level
☑ Correct answers are unambiguous and defensible
☑ Distractors are plausible and educational
☑ All content is culturally appropriate

OUTPUT FORMAT (Valid JSON only - NO markdown):
{
  "exercises": [
    {
      "id": "exercise-${type.toLowerCase()}-1",
      "type": "${type}",
      "difficulty": "${difficulty}",
      "question": "Question in ${language === "ar" ? "Arabic" : language === "fr" ? "French" : "English"}",
      "questionAr": "السؤال بالعربية مع التشكيل الكامل",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctAnswer": 0,
      "explanation": "Why this answer is correct and why others are wrong",
      "explanationAr": "شرح مفصل باللغة العربية",
      "hint": "Helpful hint for struggling learners",
      "audioText": "For listening: Arabic text to be read aloud (with diacritics)",
      "matchPairs": [{"id": "pair1", "left": "عربي", "right": "English"}],
      "xpReward": ${difficulty === "easy" ? 10 : difficulty === "medium" ? 20 : 30}
    }
  ]
}

CRITICAL SUCCESS FACTORS:
1. Return ONLY valid JSON - no other text before or after
2. Every Arabic word MUST have diacritical marks
3. All correctAnswers must be defensible
4. Explanations must help learners understand WHY the answer is correct
5. Content must be age and culturally appropriate
6. Generate EXACTLY ${count} exercises`;
}

/**
 * Enhanced answer verification prompt
 * Better structured for accurate grading
 */
export function generateVerifyPromptEnhanced(params: {
  question: string;
  expectedAnswer: string;
  studentAnswer: string;
  exerciseType: ExerciseType;
  language: "en" | "fr" | "ar";
}): string {
  const { question, expectedAnswer, studentAnswer, exerciseType, language } = params;

  return `TASK: Evaluate an Arabic language exercise answer

QUESTION: ${question}
STUDENT'S ANSWER: "${studentAnswer}"
EXPECTED ANSWER: "${expectedAnswer}"
EXERCISE TYPE: ${exerciseType}

EVALUATION CRITERIA BY EXERCISE TYPE:

For WRITING exercises:
- Check: spelling, diacritical mark accuracy (harakat/tashkeel), grammar, word order
- Allow minor diacritic errors if meaning is correct
- Accept grammatically equivalent alternatives
- Consider intent and partial correctness

For MULTIPLE_CHOICE exercises:
- Mark correct if selected answer matches the correct option
- Provide explanation of correct answer and why others are wrong

For LISTENING exercises:
- Check comprehension - did they understand the main point?
- Accept answers conveying correct meaning even with spelling variation
- Mark wrong only if comprehension is incorrect

For ORAL exercises:
- This is for reference - actual grading is instructor/audio-based
- Suggest focus areas for improvement
- Flag common pronunciation errors

For MATCHING exercises:
- Check if each pair is matched correctly
- Mark partial credit if some pairs are correct
- Provide corrected mappings

For FILL_BLANK exercises:
- Check exact word match or acceptable variation
- Consider acceptable synonyms and grammatical variations
- Allow minor diacritical differences

For TRANSLATION exercises:
- Check if meaning is conveyed accurately
- Allow multiple valid translations
- Focus on comprehension over word-for-word accuracy

FEEDBACK GUIDELINES:
- Be encouraging but accurate
- Explain the grammatical or lexical reason for any errors
- Suggest one specific area for improvement
- If answer is partially correct, award partial credit

FEEDBACK LANGUAGE: ${
    language === "ar" ? "Arabic (العربية)" : language === "fr" ? "French (Français)" : "English"
  }

OUTPUT FORMAT (Valid JSON only):
{
  "correct": true or false,
  "score": 0-100 (percentage score),
  "feedback": "Detailed, constructive feedback for the student",
  "suggestions": ["Specific suggestion 1", "Suggestion 2"],
  "relatedConcepts": ["Grammar concept to review", "Vocabulary theme"],
  "correctAnswer": "The correct answer (if student was wrong)",
  "partialCredit": true or false
}

SCORING GUIDE:
- 100: Perfect or excellent alternative answer
- 75-99: Minor errors that don't affect meaning
- 50-74: Partially correct, understanding shown but errors present
- 1-49: Significant errors but some correct elements
- 0: Completely incorrect or blank`;
}

/**
 * Enhanced explanation prompt
 * Better structured for clear pedagogy
 */
export function generateExplanationPromptEnhanced(params: {
  concept: string;
  context: string;
  level: Difficulty;
  language: "en" | "fr" | "ar";
}): string {
  const { concept, context, level, language } = params;

  const levelDescriptions = {
    easy: "Assume no prior knowledge. Use simple language and very basic examples.",
    medium: "Assume some grammar knowledge. Can use intermediate examples.",
    hard: "Assume advanced knowledge. Can reference complex structures and literature.",
  };

  return `TASK: Explain an Arabic language concept

CONCEPT TO EXPLAIN: ${concept}
CONTEXT: ${context}
LEARNER LEVEL: ${level} (${levelDescriptions[level]})
EXPLANATION LANGUAGE: ${
    language === "ar" ? "Arabic (العربية)" : language === "fr" ? "French (Français)" : "English"
  }

EXPLANATION STRUCTURE:
1. Simple Overview (1-2 sentences explaining what the concept is)
2. Why It Matters (how it's used in Arabic)
3. The Rule/Pattern (clear statement of the grammatical rule)
4. Examples (5 varied sentences in Arabic with complete diacritics)
5. Common Mistakes (2-3 typical errors learners make)
6. Related Concepts (2-3 concepts that build on this)
7. Practice Tips (1-2 tips for mastering this concept)

EXAMPLE SECTION FORMAT:
Each example should include:
- Arabic text with complete diacritical marks
- Transliteration (no diacritics in Latin script)
- English translation
- Brief note on what makes this example illustrative

OUTPUT FORMAT (Valid JSON only):
{
  "title": "Concept Title in English",
  "titleAr": "عنوان المفهوم بالعربية مع التشكيل",
  "overview": "Simple explanation of what this concept is",
  "rule": "Clear statement of the grammatical rule or pattern",
  "ruleAr": "القاعدة أو النمط بالعربية مع التشكيل",
  "examples": [
    {
      "arabic": "جملة عربية مع التشكيل الكامل",
      "transliteration": "jumla ʿarabiyya",
      "translation": "English translation",
      "note": "Why this example matters"
    }
  ],
  "commonMistakes": [
    "Mistake 1 that learners often make",
    "Mistake 2 that learners often make"
  ],
  "relatedConcepts": [
    "Related concept 1",
    "Related concept 2"
  ],
  "tips": [
    "Practice tip 1",
    "Practice tip 2"
  ]
}

QUALITY REQUIREMENTS:
- All Arabic text has complete diacritical marks
- Explanations are clear and appropriate for the learner level
- Examples are varied and illustrative
- Common mistakes are genuinely common
- Tips are actionable and specific`;
}

/**
 * Enhanced daily challenge prompt
 */
export function generateDailyChallengePromptEnhanced(params: {
  userLevel: number;
  completedLessons: string[];
  language: "en" | "fr" | "ar";
}): string {
  const { userLevel, completedLessons, language } = params;

  return `TASK: Generate a personalized daily Arabic learning challenge

USER PROFICIENCY LEVEL: ${userLevel} (1=Beginner, 5=Advanced)
LEARNER'S COMPLETED LESSONS: ${completedLessons.join(", ")}
CHALLENGE LANGUAGE: ${
    language === "ar" ? "Arabic (العربية)" : language === "fr" ? "French (Français)" : "English"
  }

CHALLENGE REQUIREMENTS:
- Duration: 5-10 minutes to complete
- Exercise Count: Mix of 5 varied exercise types
- Difficulty: Balanced (60% previous lessons, 40% slight new challenge)
- Engagement: Include a fun theme or story angle
- Motivation: Make it feel rewarding to complete

EXERCISE MIX FOR DAILY CHALLENGE:
- 1 Multiple Choice (test previous knowledge)
- 1 Writing (productive skill)
- 1 Listening (receptive skill)
- 1 Vocabulary review
- 1 Light extension exercise

OUTPUT FORMAT (Valid JSON only):
{
  "theme": "Fun daily challenge title",
  "themeAr": "عنوان التحدي اليومي بالعربية",
  "description": "Engaging description of what the challenge is about",
  "xpReward": 50,
  "timeLimit": 600,
  "exercises": [
    {
      "id": "daily-challenge-1",
      "type": "MULTIPLE_CHOICE",
      "difficulty": "medium",
      "question": "Challenge question",
      "questionAr": "السؤال بالعربية",
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
- All Arabic text has complete diacritical marks (harakat/tashkeel)
- Challenge is completable in 5-10 minutes
- Exercises build on previous lessons
- Mix of exercise types keeps it engaging
- Difficulty is appropriate for user level
- Completion feels rewarding`;
}
