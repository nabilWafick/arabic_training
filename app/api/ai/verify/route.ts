/**
 * AI Answer Verification API Route
 * Verifies student answers using Mistral AI
 */

import { NextRequest, NextResponse } from "next/server";
import { generateText } from "ai";
import { z } from "zod";
import {
  MISTRAL_MODELS,
  AI_CONFIG,
  ARABIC_TEACHER_SYSTEM_PROMPT,
  generateVerifyPrompt,
  VerificationResponseSchema,
  parseAIResponse,
} from "@/lib/ai";

/**
 * Request body schema
 */
const RequestSchema = z.object({
  exerciseId: z.string(),
  expectedAnswer: z.union([z.string(), z.number()]),
  studentAnswer: z.string(),
  exerciseType: z.enum([
    "MULTIPLE_CHOICE",
    "WRITING",
    "LISTENING",
    "ORAL",
    "MATCHING",
    "FILL_BLANK",
    "TRANSLATION",
  ]),
  question: z.string().optional(),
  language: z.enum(["en", "fr", "ar"]).default("en"),
});

/**
 * POST /api/ai/verify
 * Verify a student's answer using Mistral AI
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
    
    // For simple multiple choice, do quick comparison
    if (params.exerciseType === "MULTIPLE_CHOICE") {
      const correct =
        String(params.studentAnswer) === String(params.expectedAnswer);
      return NextResponse.json({
        correct,
        score: correct ? 100 : 0,
        feedback: correct
          ? "Correct! Well done."
          : `Incorrect. The correct answer was option ${
              typeof params.expectedAnswer === "number"
                ? String.fromCharCode(65 + params.expectedAnswer)
                : params.expectedAnswer
            }.`,
        suggestions: correct ? [] : ["Review the lesson material"],
        relatedConcepts: [],
      });
    }
    
    // For writing/translation exercises, use AI verification
    const prompt = generateVerifyPrompt({
      question: params.question || "Translate or write the answer",
      expectedAnswer: String(params.expectedAnswer),
      studentAnswer: params.studentAnswer,
      exerciseType: params.exerciseType,
      language: params.language,
    });
    
    // Call Mistral AI (using small model for faster verification)
    const { text } = await generateText({
      model: MISTRAL_MODELS.small,
      system: ARABIC_TEACHER_SYSTEM_PROMPT,
      prompt,
      maxTokens: 1024,
      temperature: AI_CONFIG.verifyTemperature,
    });
    
    // Parse and validate the response
    const parseResult = parseAIResponse(text, VerificationResponseSchema);
    
    if (!parseResult.success) {
      console.error("AI verification parsing failed:", parseResult.error);
      
      // Fallback to simple string comparison
      const correct =
        params.studentAnswer.trim().toLowerCase() ===
        String(params.expectedAnswer).trim().toLowerCase();
      
      return NextResponse.json({
        correct,
        score: correct ? 100 : 0,
        feedback: correct
          ? "Your answer is correct!"
          : "Your answer doesn't match. Please try again.",
        suggestions: [],
        relatedConcepts: [],
      });
    }
    
    return NextResponse.json(parseResult.data);
  } catch (error) {
    console.error("Answer verification error:", error);
    
    // Fallback response
    return NextResponse.json({
      correct: false,
      score: 0,
      feedback: "Unable to verify your answer at this time. Please try again.",
      suggestions: [],
      relatedConcepts: [],
    });
  }
}
