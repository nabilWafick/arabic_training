/**
 * AI Learning Assistant Component
 * Interactive AI-powered tutor for Arabic language learning
 * Uses Mistral AI for personalized explanations, practice, and feedback
 */

"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Send,
  Sparkles,
  BookOpen,
  MessageSquare,
  Brain,
  Lightbulb,
  HelpCircle,
  Volume2,
  Copy,
  Check,
  ChevronDown,
  Loader2,
  GraduationCap,
  Target,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useAudioStore } from "@/stores/useAudioStore";

/**
 * Message type for conversation
 */
interface Message {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  arabicContent?: string;
  transliteration?: string;
  timestamp: Date;
  isLoading?: boolean;
  type?: "explanation" | "quiz" | "practice" | "feedback" | "general";
}

/**
 * Quick action type for AI features
 */
interface QuickAction {
  id: string;
  label: string;
  labelAr: string;
  icon: React.ReactNode;
  prompt: string;
  color: string;
}

interface AILearningAssistantProps {
  lessonId: string;
  lessonTitle: string;
  lessonTitleAr: string;
  lessonContent: string;
  phaseLevel: number;
  className?: string;
  onExerciseGenerated?: (exercises: unknown[]) => void;
}

/**
 * AI Learning Assistant - Interactive tutor component
 */
export function AILearningAssistant({
  lessonId,
  lessonTitle,
  lessonTitleAr,
  lessonContent,
  phaseLevel,
  className,
  onExerciseGenerated,
}: AILearningAssistantProps) {
  const { speak, isPlaying } = useAudioStore();
  
  // State
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"chat" | "practice" | "explain">("chat");
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  
  // Refs
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Quick actions for different AI features
  const quickActions: QuickAction[] = [
    {
      id: "explain",
      label: "Explain This Lesson",
      labelAr: "اشرح هذا الدرس",
      icon: <BookOpen className="h-4 w-4" />,
      prompt: `Please provide a detailed, clear explanation of this Arabic lesson: "${lessonTitle}". Include:
1. Main concepts with examples
2. Arabic text with full diacritics (harakat)
3. Pronunciation guide (transliteration)
4. Common mistakes to avoid
5. Tips for memorization

Make it engaging and easy to understand for a Phase ${phaseLevel} learner.`,
      color: "bg-blue-500/10 text-blue-600 hover:bg-blue-500/20",
    },
    {
      id: "quiz",
      label: "Quiz Me",
      labelAr: "اختبرني",
      icon: <Brain className="h-4 w-4" />,
      prompt: `Generate a quick quiz (3-5 questions) to test my understanding of "${lessonTitle}". Mix different question types:
- Multiple choice
- Fill in the blank
- Translation
Make it appropriate for Phase ${phaseLevel} difficulty.`,
      color: "bg-purple-500/10 text-purple-600 hover:bg-purple-500/20",
    },
    {
      id: "practice",
      label: "Practice Exercises",
      labelAr: "تمارين تطبيقية",
      icon: <Target className="h-4 w-4" />,
      prompt: `Create interactive practice exercises for "${lessonTitle}". Include:
1. Writing practice with Arabic letters/words
2. Pronunciation exercises
3. Vocabulary matching
4. Sentence building
Provide immediate feedback for each exercise.`,
      color: "bg-green-500/10 text-green-600 hover:bg-green-500/20",
    },
    {
      id: "examples",
      label: "More Examples",
      labelAr: "أمثلة إضافية",
      icon: <Lightbulb className="h-4 w-4" />,
      prompt: `Give me more examples related to "${lessonTitle}". Include:
1. 5-7 example sentences in Arabic (with diacritics)
2. Transliteration for each
3. English translation
4. Usage context
Make them progressively more complex.`,
      color: "bg-amber-500/10 text-amber-600 hover:bg-amber-500/20",
    },
    {
      id: "grammar",
      label: "Grammar Deep Dive",
      labelAr: "تعمق في القواعد",
      icon: <GraduationCap className="h-4 w-4" />,
      prompt: `Explain the grammar rules related to "${lessonTitle}" in depth:
1. The grammatical patterns involved
2. How to apply them correctly
3. Exceptions to remember
4. Practice sentences
5. Common errors Arabic learners make`,
      color: "bg-indigo-500/10 text-indigo-600 hover:bg-indigo-500/20",
    },
    {
      id: "tips",
      label: "Learning Tips",
      labelAr: "نصائح للتعلم",
      icon: <Zap className="h-4 w-4" />,
      prompt: `Share your best tips for mastering "${lessonTitle}":
1. Memory techniques (mnemonics)
2. Practice strategies
3. How to use this in real conversation
4. Resources for further learning
5. Daily practice routine suggestion`,
      color: "bg-pink-500/10 text-pink-600 hover:bg-pink-500/20",
    },
  ];

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Welcome message on first open
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: `welcome-${Date.now()}`,
        role: "assistant",
        content: `👋 Marhaba! Welcome to your AI Arabic tutor!

I'm here to help you master **${lessonTitle}** (${lessonTitleAr}).

You can:
• Ask me any question about this lesson
• Request more examples or explanations
• Practice with interactive exercises
• Get instant feedback on your answers

What would you like to explore? 🎯`,
        timestamp: new Date(),
        type: "general",
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length, lessonTitle, lessonTitleAr]);

  /**
   * Send message to AI
   */
  const sendMessage = useCallback(async (content: string, isQuickAction = false) => {
    if (!content.trim() || isLoading) return;

    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: content.trim(),
      timestamp: new Date(),
    };

    // Add loading message
    const loadingMessage: Message = {
      id: `loading-${Date.now()}`,
      role: "assistant",
      content: "",
      timestamp: new Date(),
      isLoading: true,
    };

    setMessages((prev) => [...prev, userMessage, loadingMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      // Call AI API
      const response = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: content,
          lessonContext: lessonContent,
          lessonTitle,
          phaseLevel,
          conversationHistory: messages.slice(-10).map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) throw new Error("AI request failed");

      const data = await response.json();

      // Replace loading message with response
      setMessages((prev) => {
        const newMessages = prev.filter((m) => !m.isLoading);
        return [
          ...newMessages,
          {
            id: `assistant-${Date.now()}`,
            role: "assistant",
            content: data.response,
            arabicContent: data.arabicContent,
            transliteration: data.transliteration,
            timestamp: new Date(),
            type: data.type || "general",
          },
        ];
      });

      // If exercises were generated, notify parent
      if (data.exercises && onExerciseGenerated) {
        onExerciseGenerated(data.exercises);
      }
    } catch (error) {
      console.error("AI chat error:", error);
      
      // Replace loading with error message
      setMessages((prev) => {
        const newMessages = prev.filter((m) => !m.isLoading);
        return [
          ...newMessages,
          {
            id: `error-${Date.now()}`,
            role: "assistant",
            content: "I apologize, but I encountered an error. Please try again or refresh the page.",
            timestamp: new Date(),
            type: "general",
          },
        ];
      });
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, lessonContent, lessonTitle, messages, onExerciseGenerated, phaseLevel]);

  /**
   * Copy text to clipboard
   */
  const copyToClipboard = useCallback(async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  }, []);

  /**
   * Speak Arabic text
   */
  const speakArabic = useCallback((text: string) => {
    speak(text, "ar-SA");
  }, [speak]);

  /**
   * Handle keyboard shortcuts
   */
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputValue);
    }
  }, [inputValue, sendMessage]);

  /**
   * Render message content with formatting
   */
  const renderMessageContent = (message: Message) => {
    // Parse markdown-like formatting
    const formatContent = (content: string) => {
      return content
        .split("\n")
        .map((line, i) => {
          // Headers
          if (line.startsWith("# ")) {
            return (
              <h3 key={i} className="text-lg font-bold mt-4 mb-2 text-gold">
                {line.slice(2)}
              </h3>
            );
          }
          if (line.startsWith("## ")) {
            return (
              <h4 key={i} className="text-base font-semibold mt-3 mb-1 text-gold/80">
                {line.slice(3)}
              </h4>
            );
          }
          // Lists
          if (line.match(/^[•\-\*]\s/)) {
            return (
              <li key={i} className="ml-4 my-1">
                {line.slice(2)}
              </li>
            );
          }
          if (line.match(/^\d+\.\s/)) {
            return (
              <li key={i} className="ml-4 my-1 list-decimal">
                {line.replace(/^\d+\.\s/, "")}
              </li>
            );
          }
          // Arabic text (RTL)
          if (line.match(/[\u0600-\u06FF]/)) {
            return (
              <p
                key={i}
                className="my-2 text-xl font-arabic text-right bg-gold/5 p-2 rounded-lg"
                dir="rtl"
              >
                {line}
              </p>
            );
          }
          // Regular paragraph
          if (line.trim()) {
            return (
              <p key={i} className="my-1">
                {line.replace(/\*\*(.+?)\*\*/g, (_, text) => `<strong>${text}</strong>`)}
              </p>
            );
          }
          return <br key={i} />;
        });
    };

    return (
      <div className="space-y-1">
        {formatContent(message.content)}
        
        {/* Arabic content with audio */}
        {message.arabicContent && (
          <div className="mt-3 p-3 bg-midnight/30 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-cream/60">Arabic</span>
              <div className="flex gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 px-2"
                  onClick={() => speakArabic(message.arabicContent!)}
                  disabled={isPlaying}
                >
                  <Volume2 className="h-3 w-3" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 px-2"
                  onClick={() => copyToClipboard(message.arabicContent!, message.id)}
                >
                  {copiedId === message.id ? (
                    <Check className="h-3 w-3 text-green-500" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                </Button>
              </div>
            </div>
            <p className="text-2xl font-arabic text-right text-gold" dir="rtl">
              {message.arabicContent}
            </p>
            {message.transliteration && (
              <p className="text-sm text-cream/60 mt-1 italic">
                {message.transliteration}
              </p>
            )}
          </div>
        )}
      </div>
    );
  };

  // Don't render on server - component uses lessonId for key tracking
  const _ = lessonId;

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                  "h-14 w-14 rounded-full shadow-xl",
                  "bg-gradient-to-br from-gold to-gold/80",
                  "hover:from-gold/90 hover:to-gold/70",
                  "transition-all duration-300",
                  isOpen && "ring-2 ring-gold/50"
                )}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                    >
                      <ChevronDown className="h-6 w-6 text-midnight" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="open"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                    >
                      <Sparkles className="h-6 w-6 text-midnight" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left" className="bg-midnight border-gold/20">
              <p>{isOpen ? "Close AI Tutor" : "Open AI Tutor"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </motion.div>

      {/* Main Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={cn(
              "fixed bottom-24 right-6 z-40",
              "w-[420px] max-h-[600px]",
              "bg-gradient-to-b from-midnight to-midnight/95",
              "border border-gold/20 rounded-2xl shadow-2xl",
              "overflow-hidden",
              className
            )}
          >
            {/* Header */}
            <div className="px-4 py-3 bg-gold/10 border-b border-gold/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-gold to-gold/80 flex items-center justify-center">
                    <Bot className="h-5 w-5 text-midnight" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-cream">AI Arabic Tutor</h3>
                    <p className="text-xs text-cream/60">Powered by Mistral AI</p>
                  </div>
                </div>
                <Badge variant="outline" className="border-gold/30 text-gold text-xs">
                  Phase {phaseLevel}
                </Badge>
              </div>
            </div>

            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as typeof activeTab)}>
              <TabsList className="w-full grid grid-cols-3 bg-midnight/50 rounded-none border-b border-gold/10 h-10">
                <TabsTrigger
                  value="chat"
                  className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold rounded-none"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Chat
                </TabsTrigger>
                <TabsTrigger
                  value="practice"
                  className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold rounded-none"
                >
                  <Target className="h-4 w-4 mr-2" />
                  Practice
                </TabsTrigger>
                <TabsTrigger
                  value="explain"
                  className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold rounded-none"
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Explain
                </TabsTrigger>
              </TabsList>

              {/* Chat Tab */}
              <TabsContent value="chat" className="mt-0">
                {/* Messages Area */}
                <ScrollArea className="h-[350px] p-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={cn(
                          "flex",
                          message.role === "user" ? "justify-end" : "justify-start"
                        )}
                      >
                        <div
                          className={cn(
                            "max-w-[85%] rounded-2xl px-4 py-3",
                            message.role === "user"
                              ? "bg-gold text-midnight"
                              : "bg-cream/10 text-cream"
                          )}
                        >
                          {message.isLoading ? (
                            <div className="flex items-center gap-2">
                              <Loader2 className="h-4 w-4 animate-spin" />
                              <span className="text-sm">Thinking...</span>
                            </div>
                          ) : (
                            <div className="text-sm leading-relaxed">
                              {renderMessageContent(message)}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>

                {/* Input Area */}
                <div className="p-3 border-t border-gold/10">
                  <div className="flex gap-2">
                    <Textarea
                      ref={inputRef}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Ask anything about this lesson..."
                      className="min-h-[44px] max-h-24 resize-none bg-cream/5 border-gold/20 text-cream placeholder:text-cream/40"
                    />
                    <Button
                      onClick={() => sendMessage(inputValue)}
                      disabled={!inputValue.trim() || isLoading}
                      className="bg-gold hover:bg-gold/90 text-midnight h-11 px-4"
                    >
                      {isLoading ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Send className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </TabsContent>

              {/* Practice Tab */}
              <TabsContent value="practice" className="mt-0">
                <ScrollArea className="h-[420px] p-4">
                  <div className="space-y-4">
                    <div className="text-center mb-6">
                      <div className="h-16 w-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                        <Brain className="h-8 w-8 text-purple-400" />
                      </div>
                      <h4 className="font-semibold text-cream">AI Practice Mode</h4>
                      <p className="text-sm text-cream/60 mt-1">
                        Get personalized exercises based on your progress
                      </p>
                    </div>

                    {/* Quick Actions Grid */}
                    <div className="grid grid-cols-2 gap-2">
                      {quickActions.slice(0, 4).map((action) => (
                        <Button
                          key={action.id}
                          variant="outline"
                          className={cn(
                            "h-auto py-3 flex flex-col items-start text-left",
                            "border-gold/20 hover:border-gold/40",
                            action.color
                          )}
                          onClick={() => {
                            setActiveTab("chat");
                            sendMessage(action.prompt, true);
                          }}
                          disabled={isLoading}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            {action.icon}
                            <span className="font-medium">{action.label}</span>
                          </div>
                          <span className="text-xs opacity-70 font-arabic" dir="rtl">
                            {action.labelAr}
                          </span>
                        </Button>
                      ))}
                    </div>

                    {/* Generate exercises button */}
                    <Card className="bg-gradient-to-br from-gold/10 to-gold/5 border-gold/20">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="h-10 w-10 rounded-lg bg-gold/20 flex items-center justify-center">
                            <Sparkles className="h-5 w-5 text-gold" />
                          </div>
                          <div>
                            <h4 className="font-medium text-cream">Generate Exercises</h4>
                            <p className="text-xs text-cream/60">
                              AI creates custom exercises just for you
                            </p>
                          </div>
                        </div>
                        <Button
                          className="w-full bg-gold hover:bg-gold/90 text-midnight"
                          onClick={() => {
                            sendMessage(
                              `Generate 5 varied exercises for "${lessonTitle}" appropriate for Phase ${phaseLevel}. Include multiple choice, fill-in-blank, matching, and translation exercises. Make them progressively harder.`,
                              true
                            );
                            setActiveTab("chat");
                          }}
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>
                              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                              Generating...
                            </>
                          ) : (
                            <>
                              <Sparkles className="h-4 w-4 mr-2" />
                              Create Exercises
                            </>
                          )}
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </ScrollArea>
              </TabsContent>

              {/* Explain Tab */}
              <TabsContent value="explain" className="mt-0">
                <ScrollArea className="h-[420px] p-4">
                  <div className="space-y-4">
                    {/* Current Lesson Info */}
                    <Card className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border-blue-500/20">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="h-10 w-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                            <BookOpen className="h-5 w-5 text-blue-400" />
                          </div>
                          <div>
                            <h4 className="font-medium text-cream">{lessonTitle}</h4>
                            <p className="text-lg font-arabic text-gold mt-1" dir="rtl">
                              {lessonTitleAr}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Explanation Quick Actions */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-cream/70 flex items-center gap-2">
                        <Lightbulb className="h-4 w-4 text-gold" />
                        Get AI Explanations
                      </h4>
                      {quickActions.map((action) => (
                        <Button
                          key={action.id}
                          variant="ghost"
                          className={cn(
                            "w-full justify-start text-left h-auto py-3",
                            "hover:bg-cream/5 border border-transparent hover:border-gold/20",
                            "transition-all"
                          )}
                          onClick={() => {
                            setActiveTab("chat");
                            sendMessage(action.prompt, true);
                          }}
                          disabled={isLoading}
                        >
                          <div className={cn(
                            "h-8 w-8 rounded-lg flex items-center justify-center mr-3",
                            action.color
                          )}>
                            {action.icon}
                          </div>
                          <div>
                            <div className="font-medium text-cream">{action.label}</div>
                            <div className="text-xs text-cream/50 font-arabic" dir="rtl">
                              {action.labelAr}
                            </div>
                          </div>
                        </Button>
                      ))}
                    </div>

                    {/* Ask Custom Question */}
                    <Card className="bg-cream/5 border-gold/10">
                      <CardContent className="p-4">
                        <h4 className="text-sm font-medium text-cream mb-2 flex items-center gap-2">
                          <HelpCircle className="h-4 w-4 text-gold" />
                          Have a specific question?
                        </h4>
                        <p className="text-xs text-cream/60 mb-3">
                          Type your question in the chat tab and I&apos;ll explain it in detail.
                        </p>
                        <Button
                          variant="outline"
                          className="w-full border-gold/20 hover:border-gold/40"
                          onClick={() => {
                            setActiveTab("chat");
                            inputRef.current?.focus();
                          }}
                        >
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Ask a Question
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </ScrollArea>
              </TabsContent>
            </Tabs>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default AILearningAssistant;
