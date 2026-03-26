"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  HelpCircle,
  ChevronDown,
  Search,
  MessageCircle,
  BookOpen,
  Trophy,
  Settings,
  CreditCard,
  Globe,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Navbar, Sidebar, Footer } from "@/components/layout";
import { cn } from "@/lib/utils";

/**
 * FAQ item structure
 */
interface FAQItem {
  id: string;
  question: string;
  questionAr: string;
  answer: string;
  category: string;
}

/**
 * FAQ category structure
 */
interface FAQCategory {
  id: string;
  name: string;
  nameAr: string;
  icon: React.ElementType;
  color: string;
}

/**
 * FAQ page - Frequently asked questions
 */
export default function FAQPage() {
  const t = useTranslations();
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // FAQ Categories
  const categories: FAQCategory[] = [
    { id: "general", name: "General", nameAr: "عام", icon: HelpCircle, color: "text-blue-500" },
    { id: "learning", name: "Learning", nameAr: "التعلم", icon: BookOpen, color: "text-green-500" },
    { id: "account", name: "Account", nameAr: "الحساب", icon: Settings, color: "text-purple-500" },
    { id: "gamification", name: "XP & Progress", nameAr: "التقدم", icon: Trophy, color: "text-gold" },
    { id: "pricing", name: "Pricing", nameAr: "الأسعار", icon: CreditCard, color: "text-pink-500" },
    { id: "technical", name: "Technical", nameAr: "تقني", icon: Globe, color: "text-teal" },
  ];

  // FAQ items
  const faqItems: FAQItem[] = [
    {
      id: "1",
      question: "Is ArabicMaster Pro free to use?",
      questionAr: "هل ArabicMaster Pro مجاني؟",
      answer: "Yes! ArabicMaster Pro is completely free to use. We believe quality Arabic education should be accessible to everyone. All features, lessons, and practice modes are available at no cost. We're supported by our community and optional donations.",
      category: "pricing",
    },
    {
      id: "2",
      question: "How long does it take to complete all phases?",
      questionAr: "كم يستغرق إكمال جميع المراحل؟",
      answer: "The time varies based on your dedication and prior knowledge. On average, each phase takes 25-60 hours to complete. Learning 15-30 minutes daily, you can complete all 5 phases in approximately 12-18 months. However, everyone learns at their own pace!",
      category: "learning",
    },
    {
      id: "3",
      question: "Do I need to create an account?",
      questionAr: "هل أحتاج إلى إنشاء حساب؟",
      answer: "You can start learning immediately without an account - your progress is saved locally in your browser. However, creating an account allows you to sync progress across devices, participate in leaderboards, and never lose your achievements.",
      category: "account",
    },
    {
      id: "4",
      question: "What dialect of Arabic do you teach?",
      questionAr: "ما هي اللهجة العربية التي تُدرّسونها؟",
      answer: "We teach Modern Standard Arabic (MSA / فصحى), which is understood across all Arabic-speaking countries. MSA is used in formal settings, media, literature, and education. It's the best foundation for learning any Arabic dialect later.",
      category: "learning",
    },
    {
      id: "5",
      question: "How does the XP system work?",
      questionAr: "كيف يعمل نظام نقاط الخبرة؟",
      answer: "You earn XP (experience points) for completing lessons, exercises, and daily challenges. XP helps you level up and unlock achievements. Maintaining a daily streak gives you bonus XP multipliers. The more consistent you are, the faster you progress!",
      category: "gamification",
    },
    {
      id: "6",
      question: "Can I learn offline?",
      questionAr: "هل يمكنني التعلم بدون إنترنت؟",
      answer: "Currently, ArabicMaster Pro requires an internet connection for full functionality, including AI-powered exercises and audio features. We're working on an offline mode that will allow you to download lessons for offline practice.",
      category: "technical",
    },
    {
      id: "7",
      question: "What if I miss a day of practice?",
      questionAr: "ماذا لو فاتني يوم من التدريب؟",
      answer: "Missing a day will reset your daily streak, but don't worry - your overall progress is never lost! You can use Streak Freezes to protect your streak on days you can't practice. Focus on consistency over perfection.",
      category: "gamification",
    },
    {
      id: "8",
      question: "How do I reset my progress?",
      questionAr: "كيف أعيد ضبط تقدمي؟",
      answer: "You can reset your progress from Settings > Account > Reset Progress. This will clear all completed lessons and achievements. Your account and preferences will remain intact. Note: This action cannot be undone!",
      category: "account",
    },
    {
      id: "9",
      question: "Are there any prerequisites to start learning?",
      questionAr: "هل هناك متطلبات مسبقة للبدء؟",
      answer: "No prerequisites at all! ArabicMaster Pro is designed for complete beginners. Phase 1 starts from the very basics - you'll learn the Arabic alphabet, vowels, and fundamental sounds. Anyone can start their Arabic journey here.",
      category: "general",
    },
    {
      id: "10",
      question: "How accurate is the AI pronunciation feedback?",
      questionAr: "ما مدى دقة ملاحظات الذكاء الاصطناعي على النطق؟",
      answer: "Our AI uses advanced speech recognition trained on native Arabic speakers. While it's highly accurate for most learners, it works best in quiet environments. For the most accurate feedback, use headphones with a microphone in a quiet space.",
      category: "technical",
    },
    {
      id: "11",
      question: "Can I skip lessons I already know?",
      questionAr: "هل يمكنني تخطي الدروس التي أعرفها؟",
      answer: "Yes! Each lesson has a 'Skip Test' option. If you pass the assessment, you can skip ahead and still earn partial XP. However, we recommend reviewing fundamentals even if you have prior knowledge - it reinforces good habits.",
      category: "learning",
    },
    {
      id: "12",
      question: "What languages is the app available in?",
      questionAr: "بأي لغات يتوفر التطبيق؟",
      answer: "ArabicMaster Pro is available in English, French, and Arabic. You can switch languages anytime from the language selector in the navigation bar. All lessons and UI elements are fully translated.",
      category: "general",
    },
  ];

  // Filter FAQs based on search and category
  const filteredFAQs = faqItems.filter((faq) => {
    const matchesSearch = searchQuery
      ? faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    const matchesCategory = selectedCategory
      ? faq.category === selectedCategory
      : true;
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gold border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 overflow-auto">
          {/* Hero Section */}
          <div className="relative overflow-hidden bg-gradient-to-br from-teal/20 via-background to-gold/10 px-6 py-16">
            {/* Decorative pattern */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.02]">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            <div className="relative mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center justify-center rounded-full bg-teal/20 p-4">
                <HelpCircle className="h-10 w-10 text-teal" />
              </div>

              <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
                {t("faq.title") || "Frequently Asked Questions"}
              </h1>
              <p className="mt-2 font-arabic text-2xl text-teal">الأسئلة الشائعة</p>
              <p className="mt-4 text-lg text-muted-foreground">
                {t("faq.subtitle") || "Find quick answers to common questions"}
              </p>

              {/* Search Bar */}
              <div className="relative mx-auto mt-8 max-w-xl">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder={t("faq.searchPlaceholder") || "Search questions..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-14 rounded-xl border-2 border-border/50 bg-card pl-12 pr-4 text-lg shadow-lg focus:border-teal"
                />
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="mx-auto max-w-6xl px-6 py-8">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Badge
                variant={!selectedCategory ? "default" : "outline"}
                className={cn(
                  "cursor-pointer px-4 py-2 text-sm transition-all",
                  !selectedCategory && "bg-gold text-background"
                )}
                onClick={() => setSelectedCategory(null)}
              >
                <Sparkles className="mr-2 h-4 w-4" />
                {t("common.all") || "All"}
              </Badge>
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <Badge
                    key={cat.id}
                    variant={selectedCategory === cat.id ? "default" : "outline"}
                    className={cn(
                      "cursor-pointer px-4 py-2 text-sm transition-all",
                      selectedCategory === cat.id && "bg-gold text-background"
                    )}
                    onClick={() => setSelectedCategory(cat.id)}
                  >
                    <Icon className={cn("mr-2 h-4 w-4", selectedCategory !== cat.id && cat.color)} />
                    {cat.name}
                  </Badge>
                );
              })}
            </div>
          </div>

          {/* FAQ List */}
          <div className="mx-auto max-w-4xl px-6 pb-12">
            <div className="space-y-4">
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((faq) => (
                  <Card
                    key={faq.id}
                    className={cn(
                      "overflow-hidden border-border/50 transition-all",
                      expandedId === faq.id && "border-gold/50 shadow-lg"
                    )}
                  >
                    <button
                      className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-muted/50"
                      onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                    >
                      <div className="flex-1 pr-4">
                        <h3 className="font-semibold text-foreground">
                          {faq.question}
                        </h3>
                        <p className="mt-1 font-arabic text-sm text-gold/80">
                          {faq.questionAr}
                        </p>
                      </div>
                      <div
                        className={cn(
                          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted transition-all",
                          expandedId === faq.id && "bg-gold text-background"
                        )}
                      >
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 transition-transform",
                            expandedId === faq.id && "rotate-180"
                          )}
                        />
                      </div>
                    </button>

                    <div
                      className={cn(
                        "grid transition-all",
                        expandedId === faq.id ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      )}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-border/50 bg-muted/30 p-6">
                          <p className="leading-relaxed text-muted-foreground">
                            {faq.answer}
                          </p>
                          <Badge
                            variant="secondary"
                            className="mt-4 text-xs"
                          >
                            {categories.find((c) => c.id === faq.category)?.name}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))
              ) : (
                <div className="py-12 text-center">
                  <HelpCircle className="mx-auto h-12 w-12 text-muted-foreground/50" />
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {t("faq.noResults") || "No questions found"}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {t("faq.tryDifferent") || "Try a different search term or category"}
                  </p>
                </div>
              )}
            </div>

            {/* Still have questions CTA */}
            <Card className="mt-12 overflow-hidden border-teal/30 bg-gradient-to-r from-teal/10 via-background to-gold/10">
              <CardContent className="flex flex-col items-center gap-6 p-8 md:flex-row">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-teal/20">
                  <MessageCircle className="h-10 w-10 text-teal" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold text-foreground">
                    {t("faq.stillHaveQuestions") || "Still have questions?"}
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    {t("faq.cantFind") || "Can't find what you're looking for? We're here to help!"}
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" className="gap-2" asChild>
                    <Link href="/help">
                      <BookOpen className="h-4 w-4" />
                      {t("faq.helpCenter") || "Help Center"}
                    </Link>
                  </Button>
                  <Button className="gap-2 bg-teal text-background hover:bg-teal/90" asChild>
                    <Link href="/contact">
                      <MessageCircle className="h-4 w-4" />
                      {t("faq.contactUs") || "Contact Us"}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
