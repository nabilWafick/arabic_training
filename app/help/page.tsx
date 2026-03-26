"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  BookOpen,
  Headphones,
  PenTool,
  Sparkles,
  Search,
  ChevronRight,
  HelpCircle,
  MessageCircle,
  Lightbulb,
  Rocket,
  Trophy,
  Settings,
  Play,
  Volume2,
  GraduationCap,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Navbar, Sidebar, Footer } from "@/components/layout";
import { cn } from "@/lib/utils";

/**
 * Help article data structure
 */
interface HelpArticle {
  id: string;
  icon: React.ElementType;
  title: string;
  titleAr: string;
  description: string;
  category: string;
  articles: Array<{
    title: string;
    href: string;
  }>;
}

/**
 * Help Center page - User support and documentation hub
 */
export default function HelpPage() {
  const t = useTranslations();
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Help categories with articles
  const helpCategories: HelpArticle[] = [
    {
      id: "getting-started",
      icon: Rocket,
      title: t("help.categories.gettingStarted") || "Getting Started",
      titleAr: "البداية",
      description: t("help.categories.gettingStartedDesc") || "Learn the basics of ArabicMaster Pro",
      category: "basics",
      articles: [
        { title: "How to create an account", href: "#" },
        { title: "Setting up your profile", href: "#" },
        { title: "Choosing your learning path", href: "#" },
        { title: "Understanding the 5 phases", href: "#" },
      ],
    },
    {
      id: "learning",
      icon: GraduationCap,
      title: t("help.categories.learning") || "Learning Arabic",
      titleAr: "تعلم العربية",
      description: t("help.categories.learningDesc") || "Tips and guides for effective learning",
      category: "learning",
      articles: [
        { title: "How to read Arabic letters", href: "#" },
        { title: "Understanding Arabic vowels", href: "#" },
        { title: "Practicing pronunciation", href: "#" },
        { title: "Building vocabulary", href: "#" },
      ],
    },
    {
      id: "practice",
      icon: PenTool,
      title: t("help.categories.practice") || "Practice Modes",
      titleAr: "أوضاع التدريب",
      description: t("help.categories.practiceDesc") || "Master each practice type",
      category: "practice",
      articles: [
        { title: "Alphabet practice guide", href: "#" },
        { title: "Listening exercises", href: "#" },
        { title: "Writing practice", href: "#" },
        { title: "Daily challenges", href: "#" },
      ],
    },
    {
      id: "gamification",
      icon: Trophy,
      title: t("help.categories.gamification") || "XP & Achievements",
      titleAr: "النقاط والإنجازات",
      description: t("help.categories.gamificationDesc") || "Understand the reward system",
      category: "features",
      articles: [
        { title: "How XP works", href: "#" },
        { title: "Level progression", href: "#" },
        { title: "Unlocking achievements", href: "#" },
        { title: "Daily streaks", href: "#" },
      ],
    },
    {
      id: "audio",
      icon: Volume2,
      title: t("help.categories.audio") || "Audio & Pronunciation",
      titleAr: "الصوت والنطق",
      description: t("help.categories.audioDesc") || "Audio features and settings",
      category: "features",
      articles: [
        { title: "Enabling text-to-speech", href: "#" },
        { title: "Audio playback settings", href: "#" },
        { title: "Recording your voice", href: "#" },
        { title: "Comparing pronunciations", href: "#" },
      ],
    },
    {
      id: "account",
      icon: Settings,
      title: t("help.categories.account") || "Account & Settings",
      titleAr: "الحساب والإعدادات",
      description: t("help.categories.accountDesc") || "Manage your account",
      category: "account",
      articles: [
        { title: "Changing your password", href: "#" },
        { title: "Language preferences", href: "#" },
        { title: "Notification settings", href: "#" },
        { title: "Deleting your account", href: "#" },
      ],
    },
  ];

  // Filter categories based on search
  const filteredCategories = helpCategories.filter((category) =>
    searchQuery
      ? category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        category.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        category.articles.some((a) =>
          a.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : true
  );

  // Popular questions
  const popularQuestions = [
    "How do I start learning Arabic?",
    "What's the difference between phases?",
    "How do I earn more XP?",
    "Can I learn offline?",
    "How do I reset my progress?",
  ];

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
          {/* Hero Section with Search */}
          <div className="relative overflow-hidden bg-gradient-to-br from-gold/20 via-background to-teal/10 px-6 py-16">
            {/* Decorative Arabic calligraphy background */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03]">
              <span className="font-arabic text-[20rem] font-bold">مساعدة</span>
            </div>

            <div className="relative mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center justify-center rounded-full bg-gold/20 p-4">
                <HelpCircle className="h-10 w-10 text-gold" />
              </div>

              <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
                {t("help.title") || "Help Center"}
              </h1>
              <p className="mt-2 font-arabic text-2xl text-gold">مركز المساعدة</p>
              <p className="mt-4 text-lg text-muted-foreground">
                {t("help.subtitle") || "Find answers, guides, and tips to master Arabic"}
              </p>

              {/* Search Bar */}
              <div className="relative mx-auto mt-8 max-w-xl">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder={t("help.searchPlaceholder") || "Search for help articles..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-14 rounded-xl border-2 border-border/50 bg-card pl-12 pr-4 text-lg shadow-lg focus:border-gold"
                />
              </div>

              {/* Popular searches */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                <span className="text-sm text-muted-foreground">
                  {t("help.popular") || "Popular:"}
                </span>
                {popularQuestions.slice(0, 3).map((q, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="cursor-pointer transition-colors hover:bg-gold/20"
                    onClick={() => setSearchQuery(q)}
                  >
                    {q}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Help Categories */}
          <div className="mx-auto max-w-6xl px-6 py-12">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="font-heading text-2xl font-bold text-foreground">
                {t("help.browseTopics") || "Browse Topics"}
              </h2>
              <div className="flex gap-2">
                {["all", "basics", "learning", "features", "account"].map((cat) => (
                  <Badge
                    key={cat}
                    variant={selectedCategory === cat || (!selectedCategory && cat === "all") ? "default" : "outline"}
                    className={cn(
                      "cursor-pointer transition-all",
                      (selectedCategory === cat || (!selectedCategory && cat === "all")) && "bg-gold text-background"
                    )}
                    onClick={() => setSelectedCategory(cat === "all" ? null : cat)}
                  >
                    {cat === "all" ? t("common.all") || "All" : cat}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredCategories
                .filter((c) => !selectedCategory || c.category === selectedCategory)
                .map((category) => {
                  const Icon = category.icon;
                  return (
                    <Card
                      key={category.id}
                      className="group overflow-hidden border-border/50 transition-all hover:border-gold/50 hover:shadow-lg"
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-start gap-4">
                          <div className="rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 p-3 transition-transform group-hover:scale-110">
                            <Icon className="h-6 w-6 text-gold" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-lg transition-colors group-hover:text-gold">
                              {category.title}
                            </CardTitle>
                            <p className="font-arabic text-sm text-gold/80">
                              {category.titleAr}
                            </p>
                          </div>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {category.description}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {category.articles.map((article, idx) => (
                            <li key={idx}>
                              <Link
                                href={article.href}
                                className="group/link flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-all hover:bg-gold/10 hover:text-foreground"
                              >
                                <ChevronRight className="h-4 w-4 opacity-0 transition-all group-hover/link:opacity-100 group-hover/link:translate-x-1" />
                                {article.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <Button
                          variant="ghost"
                          className="mt-4 w-full gap-2 text-gold hover:bg-gold/10 hover:text-gold"
                        >
                          {t("help.viewAll") || "View all articles"}
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
            </div>

            {/* Contact Support CTA */}
            <Card className="mt-12 overflow-hidden border-gold/30 bg-gradient-to-r from-gold/10 via-background to-teal/10">
              <CardContent className="flex flex-col items-center gap-6 p-8 md:flex-row">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gold/20">
                  <MessageCircle className="h-10 w-10 text-gold" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold text-foreground">
                    {t("help.stillNeedHelp") || "Still need help?"}
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    {t("help.contactDescription") || "Our support team is here to assist you with any questions."}
                  </p>
                </div>
                <Button className="gap-2 bg-gold text-background hover:bg-gold-dark" asChild>
                  <Link href="/contact">
                    <MessageCircle className="h-4 w-4" />
                    {t("help.contactSupport") || "Contact Support"}
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Quick Tips */}
            <div className="mt-12">
              <h2 className="mb-6 flex items-center gap-2 font-heading text-2xl font-bold text-foreground">
                <Lightbulb className="h-6 w-6 text-gold" />
                {t("help.quickTips") || "Quick Tips"}
              </h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {[
                  { icon: Play, tip: "Start with Phase 1 to build a strong foundation" },
                  { icon: Zap, tip: "Practice daily to maintain your streak bonus" },
                  { icon: Volume2, tip: "Enable audio for better pronunciation learning" },
                  { icon: Trophy, tip: "Complete achievements to earn bonus XP" },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-3 rounded-lg border border-border/50 bg-card p-4 transition-colors hover:border-gold/30"
                    >
                      <div className="rounded-lg bg-gold/10 p-2">
                        <Icon className="h-5 w-5 text-gold" />
                      </div>
                      <p className="text-sm text-muted-foreground">{item.tip}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
