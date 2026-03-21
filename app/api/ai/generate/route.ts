/**
 * AI Exercise Generation API Route
 * Generates Arabic learning exercises using Mistral AI
 */

import { NextRequest, NextResponse } from "next/server";
import { generateText } from "ai";
import { z } from "zod";
import {
  MISTRAL_MODELS,
  AI_CONFIG,
  ARABIC_TEACHER_SYSTEM_PROMPT,
  generateExercisePrompt,
  ExerciseGenerationResponseSchema,
  parseAIResponse,
} from "@/lib/ai";

/**
 * Request body schema
 */
const RequestSchema = z.object({
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
  topic: z.string().min(1),
  lessonContext: z.string().min(1),
  phaseLevel: z.number().min(1).max(5),
  count: z.number().min(1).max(10).default(5),
  language: z.enum(["en", "fr", "ar"]).default("en"),
});

/**
 * POST /api/ai/generate
 * Generate exercises using Mistral AI
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate request body
    const validationResult = RequestSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { error: "Invalid request", details: validationResult.error.issues },
        { status: 400 }
      );
    }
    
    const params = validationResult.data;
    
    // Generate the prompt
    const prompt = generateExercisePrompt({
      type: params.type,
      difficulty: params.difficulty,
      topic: params.topic,
      lessonContext: params.lessonContext,
      phaseLevel: params.phaseLevel,
      count: params.count,
      language: params.language,
    });
    
    // Call Mistral AI
    const { text } = await generateText({
      model: MISTRAL_MODELS.large,
      system: ARABIC_TEACHER_SYSTEM_PROMPT,
      prompt,
      maxTokens: AI_CONFIG.maxTokens,
      temperature: AI_CONFIG.temperature,
    });
    
    // Parse and validate the response
    const parseResult = parseAIResponse(text, ExerciseGenerationResponseSchema);
    
    if (!parseResult.success) {
      console.error("AI response parsing failed:", parseResult.error);
      return NextResponse.json(
        {
          error: "Failed to parse AI response",
          details: parseResult.error.issues,
        },
        { status: 500 }
      );
    }
    
    // Return the generated exercises
    return NextResponse.json({
      success: true,
      exercises: parseResult.data.exercises,
      metadata: {
        type: params.type,
        difficulty: params.difficulty,
        topic: params.topic,
        count: parseResult.data.exercises.length,
        generatedAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("Exercise generation error:", error);
    
    // Check if it's an API key error
    if (error instanceof Error && error.message.includes("API key")) {
      return NextResponse.json(
        { error: "AI service not configured" },
        { status: 503 }
      );
    }
    
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
