/**
 * Zod schemas for AI response validation
 * Ensures type safety for AI-generated content
 */

import { z } from "zod";

/**
 * Exercise schema for AI-generated exercises
 */
export const AIExerciseSchema = z.object({
  id: z.string(),
  type: z.enum([
    "MULTIPLE_CHOICE",
    "WRITING",
    "LISTENING",
    "ORAL",
    "MATCHING",
    "FILL_BLANK",
    "TRANSLATION",
  ]),
  difficulty: z.enum(["easy", "medium", "hard"]),
  question: z.string(),
  questionAr: z.string().optional(),
  options: z.array(z.string()).optional(),
  correctAnswer: z.union([z.number(), z.string()]),
  explanation: z.string(),
  explanationAr: z.string().optional(),
  hint: z.string().optional(),
  audioText: z.string().optional(),
  matchPairs: z
    .array(
      z.object({
        id: z.string(),
        left: z.string(),
        right: z.string(),
      })
    )
    .optional(),
  xpReward: z.number().default(10),
});

export type AIExercise = z.infer<typeof AIExerciseSchema>;

/**
 * Exercise generation response schema
 */
export const ExerciseGenerationResponseSchema = z.object({
  exercises: z.array(AIExerciseSchema),
});

export type ExerciseGenerationResponse = z.infer<typeof ExerciseGenerationResponseSchema>;

/**
 * Answer verification response schema
 */
export const VerificationResponseSchema = z.object({
  correct: z.boolean(),
  score: z.number().min(0).max(100),
  feedback: z.string(),
  suggestions: z.array(z.string()).optional(),
  relatedConcepts: z.array(z.string()).optional(),
  correctAnswer: z.string().optional(),
});

export type VerificationResponse = z.infer<typeof VerificationResponseSchema>;

/**
 * Explanation response schema
 */
export const ExplanationResponseSchema = z.object({
  title: z.string(),
  titleAr: z.string().optional(),
  overview: z.string(),
  rules: z.array(
    z.object({
      rule: z.string(),
      ruleAr: z.string().optional(),
    })
  ),
  examples: z.array(
    z.object({
      arabic: z.string(),
      transliteration: z.string(),
      translation: z.string(),
      notes: z.string().optional(),
    })
  ),
  commonMistakes: z.array(z.string()).optional(),
  relatedConcepts: z.array(z.string()).optional(),
  tips: z.array(z.string()).optional(),
});

export type ExplanationResponse = z.infer<typeof ExplanationResponseSchema>;

/**
 * Daily challenge response schema
 */
export const DailyChallengeResponseSchema = z.object({
  theme: z.string(),
  themeAr: z.string().optional(),
  description: z.string(),
  xpBonus: z.number(),
  timeLimit: z.number(),
  exercises: z.array(AIExerciseSchema),
  completionMessage: z.string(),
  streakBonus: z.string().optional(),
});

export type DailyChallengeResponse = z.infer<typeof DailyChallengeResponseSchema>;

/**
 * Parse and validate AI response
 */
export function parseAIResponse<T>(
  response: string,
  schema: z.ZodSchema<T>
): { success: true; data: T } | { success: false; error: z.ZodError } {
  try {
    // Try to extract JSON from the response
    let jsonString = response;
    
    // Handle markdown code blocks
    const jsonMatch = response.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (jsonMatch) {
      jsonString = jsonMatch[1];
    }
    
    // Parse JSON
    const parsed = JSON.parse(jsonString.trim());
    
    // Validate with schema
    const result = schema.safeParse(parsed);
    
    if (result.success) {
      return { success: true, data: result.data };
    } else {
      return { success: false, error: result.error };
    }
  } catch (error) {
    // Create a ZodError for parsing failures
    const zodError = new z.ZodError([
      {
        code: z.ZodIssueCode.custom,
        message: `Failed to parse AI response: ${error instanceof Error ? error.message : "Unknown error"}`,
        path: [],
      },
    ]);
    return { success: false, error: zodError };
  }
}
