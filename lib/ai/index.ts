/**
 * AI library barrel export
 */
export { mistral, MISTRAL_MODELS, getModelForTask, AI_CONFIG } from "./mistral";
export {
  ARABIC_TEACHER_SYSTEM_PROMPT,
  generateExercisePrompt,
  generateVerifyPrompt,
  generateExplanationPrompt,
  generateDailyChallengePrompt,
} from "./prompts";
export {
  AIExerciseSchema,
  ExerciseGenerationResponseSchema,
  VerificationResponseSchema,
  ExplanationResponseSchema,
  DailyChallengeResponseSchema,
  parseAIResponse,
} from "./schemas";
export type {
  AIExercise,
  ExerciseGenerationResponse,
  VerificationResponse,
  ExplanationResponse,
  DailyChallengeResponse,
} from "./schemas";
