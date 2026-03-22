/**
 * AI Chat API Route
 * Conversational AI tutor for Arabic language learning
 * Uses Mistral AI for intelligent responses
 */

import { NextRequest, NextResponse } from "next/server";
import { generateText } from "ai";
import { z } from "zod";
import { MISTRAL_MODELS, AI_CONFIG } from "@/lib/ai";

/**
 * Request body schema
 */
const RequestSchema = z.object({
  message: z.string().min(1, "Message is required"),
  lessonContext: z.string().optional(),
  lessonTitle: z.string().optional(),
  phaseLevel: z.number().min(1).max(5).optional().default(1),
  conversationHistory: z.array(
    z.object({
      role: z.enum(["user", "assistant", "system"]),
      content: z.string(),
    })
  ).optional().default([]),
  language: z.enum(["en", "fr", "ar"]).optional().default("en"),
});

/**
 * System prompt for Arabic tutor
 */
const ARABIC_TUTOR_SYSTEM_PROMPT = `You are an expert Arabic language tutor with extensive experience teaching Modern Standard Arabic (MSA) and Classical Arabic to learners of all levels.

YOUR ROLE:
- Provide clear, detailed explanations of Arabic concepts
- Use examples with full diacritical marks (harakat: فَتْحَة، ضَمَّة، كَسْرَة، سُكُون، شَدَّة)
- Include transliteration for pronunciation guidance
- Adapt your teaching style to the learner's level
- Be encouraging, patient, and supportive
- Generate practice exercises when requested
- Correct mistakes gently with helpful explanations

RESPONSE GUIDELINES:
1. For explanations: Break down concepts into digestible parts
2. For examples: Always include Arabic text, transliteration, and translation
3. For exercises: Create varied question types (multiple choice, fill-blank, matching)
4. For corrections: Explain why the answer is wrong and how to fix it

FORMATTING:
- Use markdown for structure (# headers, ## subheaders, bullet points)
- Put Arabic text on its own line for clarity
- Include pronunciation in parentheses when helpful
- Use numbered steps for processes/rules

IMPORTANT:
- ALL Arabic text must have complete diacritical marks
- Be culturally sensitive and appropriate
- If asked something outside your expertise, acknowledge it
- Keep responses focused and not overly long
- Make learning fun and engaging!`;

/**
 * Generate contextual system message based on lesson
 */
function getContextualPrompt(lessonTitle?: string, lessonContext?: string, phaseLevel?: number): string {
  const levelDescriptions: Record<number, string> = {
    1: "beginner (learning alphabet, basic sounds)",
    2: "elementary (basic vocabulary, simple sentences)",
    3: "intermediate (grammar patterns, conversations)",
    4: "advanced (complex grammar, reading)",
    5: "expert (literature, formal Arabic, fluency)",
  };

  let contextPrompt = ARABIC_TUTOR_SYSTEM_PROMPT;

  if (lessonTitle || phaseLevel) {
    contextPrompt += `\n\nCURRENT CONTEXT:`;
    if (lessonTitle) {
      contextPrompt += `\n- Current Lesson: "${lessonTitle}"`;
    }
    if (phaseLevel) {
      contextPrompt += `\n- Student Level: Phase ${phaseLevel} - ${levelDescriptions[phaseLevel] || "intermediate"}`;
    }
    if (lessonContext) {
      contextPrompt += `\n- Lesson Content Summary: ${lessonContext.slice(0, 500)}...`;
    }
    contextPrompt += `\n\nFocus your responses on this lesson's content when relevant.`;
  }

  return contextPrompt;
}

/**
 * POST /api/ai/chat
 * Conversational AI tutor endpoint
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate request
    const validationResult = RequestSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { error: "Invalid request", details: validationResult.error.issues },
        { status: 400 }
      );
    }

    const { message, lessonContext, lessonTitle, phaseLevel, conversationHistory, language } = validationResult.data;

    // Build conversation messages
    const systemPrompt = getContextualPrompt(lessonTitle, lessonContext, phaseLevel);
    
    // Format conversation history
    const historyMessages = conversationHistory.map((msg) => ({
      role: msg.role as "user" | "assistant",
      content: msg.content,
    }));

    // Build the full prompt with history context
    let fullPrompt = message;
    if (historyMessages.length > 0) {
      fullPrompt = `Previous conversation context:
${historyMessages.map((m) => `${m.role}: ${m.content}`).join("\n")}

Current question: ${message}`;
    }

    // Add language instruction
    const languageInstruction = {
      en: "Respond in English, but include Arabic examples with diacritics.",
      fr: "Réponds en français, mais inclus des exemples en arabe avec les diacritiques.",
      ar: "أجب باللغة العربية مع التشكيل الكامل.",
    }[language];

    fullPrompt += `\n\n${languageInstruction}`;

    // Call Mistral AI
    const { text } = await generateText({
      model: MISTRAL_MODELS.large,
      system: systemPrompt,
      prompt: fullPrompt,
      temperature: 0.7,
    });

    // Extract Arabic content if present (for audio/display)
    const arabicMatch = text.match(/[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]+[\s\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]*/g);
    const arabicContent = arabicMatch ? arabicMatch.join(" ").trim() : undefined;

    // Extract transliteration if present
    const translitMatch = text.match(/\(([a-zA-Z\s'-]+)\)/);
    const transliteration = translitMatch ? translitMatch[1] : undefined;

    // Determine response type
    let responseType: "explanation" | "quiz" | "practice" | "feedback" | "general" = "general";
    if (message.toLowerCase().includes("quiz") || message.toLowerCase().includes("test")) {
      responseType = "quiz";
    } else if (message.toLowerCase().includes("exercise") || message.toLowerCase().includes("practice")) {
      responseType = "practice";
    } else if (message.toLowerCase().includes("explain") || message.toLowerCase().includes("what is")) {
      responseType = "explanation";
    }

    return NextResponse.json({
      success: true,
      response: text,
      arabicContent,
      transliteration,
      type: responseType,
      metadata: {
        model: "mistral-large-latest",
        phaseLevel,
        lessonTitle,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("AI chat error:", error);

    // Check for API key error
    if (error instanceof Error && error.message.includes("API key")) {
      return NextResponse.json(
        { error: "AI service not configured. Please add MISTRAL_API_KEY to environment." },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { error: "Failed to generate response. Please try again." },
      { status: 500 }
    );
  }
}
