/**
 * Mistral AI client configuration
 * Uses the AI SDK with Mistral provider
 */

import { createMistral } from "@ai-sdk/mistral";

// Create Mistral client instance
export const mistral = createMistral({
  apiKey: process.env.MISTRAL_API_KEY,
});

/**
 * Mistral models configuration
 * - mistral-large: High quality for exercise generation and detailed explanations
 * - mistral-small: Fast and efficient for answer verification and feedback
 */
export const MISTRAL_MODELS = {
  /** Large model for complex generation tasks */
  large: mistral("mistral-large-latest"),
  /** Small model for quick verification tasks */
  small: mistral("mistral-small-latest"),
  /** Medium model for balanced tasks */
  medium: mistral("mistral-medium-latest"),
} as const;

/**
 * Default model selection based on task type
 */
export function getModelForTask(task: "generate" | "verify" | "explain" | "translate") {
  switch (task) {
    case "generate":
    case "explain":
      return MISTRAL_MODELS.large;
    case "verify":
    case "translate":
      return MISTRAL_MODELS.small;
    default:
      return MISTRAL_MODELS.small;
  }
}

/**
 * AI configuration constants
 */
export const AI_CONFIG = {
  /** Maximum tokens for generation */
  maxTokens: 2048,
  /** Temperature for generation (0-1, lower = more focused) */
  temperature: 0.7,
  /** Temperature for verification (more deterministic) */
  verifyTemperature: 0.3,
  /** Number of exercises to generate at once */
  batchSize: 5,
} as const;
