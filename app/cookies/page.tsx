"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  Cookie,
  Settings,
  BarChart3,
  Target,
  Shield,
  Trash2,
  ChevronRight,
  Info,
  FileText,
  ToggleLeft,
  ToggleRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Navbar, Sidebar, Footer } from "@/components/layout";
import { cn } from "@/lib/utils";

/**
 * Cookie category structure
 */
interface CookieCategory {
  id: string;
  icon: React.ElementType;
  title: string;
  titleAr: string;
  description: string;
  cookies: string[];
  required: boolean;
}

/**
 * Cookie Policy page with interactive cookie settings
 */
export default function CookiesPage() {
  const t = useTranslations();
  const [mounted, setMounted] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    functional: true,
    analytics: false,
    marketing: false,
  });

  // Cookie categories
  const cookieCategories: CookieCategory[] = [
    {
      id: "essential",
      icon: Shield,
      title: "Essential Cookies",
      titleAr: "ملفات تعريف الارتباط الأساسية",
      description: "Required for the platform to function. These cannot be disabled.",
      cookies: [
        "Session cookies - Keep you logged in during your visit",
        "Security tokens - Protect against CSRF attacks",
        "Load balancing - Ensure optimal performance",
        "Cookie consent - Remember your cookie preferences",
      ],
      required: true,
    },
    {
      id: "functional",
      icon: Settings,
      title: "Functional Cookies",
      titleAr: "ملفات تعريف الارتباط الوظيفية",
      description: "Enable personalized features and remember your preferences.",
      cookies: [
        "Language preference - Remember your selected language",
        "Theme preference - Light/dark mode settings",
        "Audio settings - Volume and playback preferences",
        "UI customization - Dashboard layout preferences",
      ],
      required: false,
    },
    {
      id: "analytics",
      icon: BarChart3,
      title: "Analytics Cookies",
      titleAr: "ملفات تعريف الارتباط التحليلية",
      description: "Help us understand how you use our platform to improve it.",
      cookies: [
        "Google Analytics - Track page views and user journeys",
        "Learning analytics - Understand which lessons are most effective",
        "Performance metrics - Monitor platform speed and reliability",
        "Error tracking - Identify and fix bugs faster",
      ],
      required: false,
    },
    {
      id: "marketing",
      icon: Target,
      title: "Marketing Cookies",
      titleAr: "ملفات تعريف الارتباط التسويقية",
      description: "Used to show you relevant content and measure ad effectiveness.",
      cookies: [
        "Advertising IDs - Show relevant learning promotions",
        "Social media pixels - Share progress on social platforms",
        "Attribution tracking - Understand how you found us",
        "Remarketing tags - Remind you about ArabicMaster Pro",
      ],
      required: false,
    },
  ];

  // Last updated date
  const lastUpdated = "March 2024";

  // Toggle cookie preference
  const toggleCookiePreference = (category: string) => {
    if (category === "essential") return; // Essential cookies cannot be disabled
    setCookiePreferences((prev) => ({
      ...prev,
      [category]: !prev[category as keyof typeof prev],
    }));
  };

  // Save preferences (mock)
  const savePreferences = () => {
    console.log("Saving cookie preferences:", cookiePreferences);
    // In a real app, save to localStorage and update consent
  };

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
          <div className="relative overflow-hidden bg-gradient-to-br from-rust/10 via-background to-gold/10 px-6 py-16">
            <div className="relative mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex items-center justify-center rounded-full bg-rust/20 p-4">
                <Cookie className="h-10 w-10 text-rust" />
              </div>

              <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
                {t("cookies.title") || "Cookie Policy"}
              </h1>
              <p className="mt-2 font-arabic text-2xl text-rust">سياسة ملفات تعريف الارتباط</p>
              <p className="mt-4 text-lg text-muted-foreground">
                {t("cookies.subtitle") || "Learn how we use cookies and manage your preferences."}
              </p>
              <Badge variant="secondary" className="mt-4">
                <FileText className="mr-2 h-3 w-3" />
                {t("cookies.lastUpdated") || "Last updated"}: {lastUpdated}
              </Badge>
            </div>
          </div>

          {/* Cookie Settings */}
          <div className="mx-auto max-w-4xl px-6 py-12">
            {/* What are cookies */}
            <Card className="mb-8 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-gold" />
                  {t("cookies.whatAreCookies") || "What are cookies?"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Cookies are small text files stored on your device when you visit websites.
                  They help websites remember your preferences, keep you logged in, and understand
                  how you use the site. We use cookies to provide you with the best possible
                  learning experience on ArabicMaster Pro.
                </p>
              </CardContent>
            </Card>

            {/* Cookie Categories */}
            <h2 className="mb-6 text-2xl font-bold text-foreground">
              {t("cookies.managePreferences") || "Manage Your Preferences"}
            </h2>

            <div className="space-y-6">
              {cookieCategories.map((category) => {
                const Icon = category.icon;
                const isEnabled =
                  cookiePreferences[category.id as keyof typeof cookiePreferences];

                return (
                  <Card
                    key={category.id}
                    className={cn(
                      "border-border/50 transition-all",
                      isEnabled && "border-rust/30 bg-rust/5"
                    )}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-3">
                          <div
                            className={cn(
                              "flex h-10 w-10 items-center justify-center rounded-lg",
                              isEnabled ? "bg-rust/20" : "bg-muted"
                            )}
                          >
                            <Icon
                              className={cn(
                                "h-5 w-5",
                                isEnabled ? "text-rust" : "text-muted-foreground"
                              )}
                            />
                          </div>
                          <div>
                            {category.title}
                            <p className="font-arabic mt-1 text-sm font-normal text-gold/80">
                              {category.titleAr}
                            </p>
                          </div>
                        </CardTitle>

                        <div className="flex items-center gap-2">
                          {category.required && (
                            <Badge variant="outline" className="text-xs">
                              {t("cookies.required") || "Required"}
                            </Badge>
                          )}
                          <Switch
                            checked={isEnabled}
                            onCheckedChange={() => toggleCookiePreference(category.id)}
                            disabled={category.required}
                            className={cn(
                              category.required && "cursor-not-allowed opacity-50"
                            )}
                          />
                        </div>
                      </div>
                      <CardDescription className="mt-2">
                        {category.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {category.cookies.map((cookie, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <ChevronRight
                              className={cn(
                                "mt-1 h-4 w-4 shrink-0",
                                isEnabled ? "text-rust" : "text-muted-foreground"
                              )}
                            />
                            <span className="text-sm text-muted-foreground">{cookie}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Save Preferences */}
            <Card className="mt-8 border-rust/30 bg-gradient-to-r from-rust/10 via-background to-gold/10">
              <CardContent className="flex flex-col items-center gap-6 p-8 md:flex-row">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rust/20">
                  <Settings className="h-8 w-8 text-rust" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold text-foreground">
                    {t("cookies.saveTitle") || "Save your preferences"}
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    {t("cookies.saveDescription") || "Your preferences will be saved and applied immediately."}
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" className="gap-2" onClick={() => {
                    setCookiePreferences({
                      essential: true,
                      functional: false,
                      analytics: false,
                      marketing: false,
                    });
                  }}>
                    <Trash2 className="h-4 w-4" />
                    {t("cookies.rejectAll") || "Reject All"}
                  </Button>
                  <Button className="gap-2 bg-rust text-white hover:bg-rust/80" onClick={savePreferences}>
                    <ToggleRight className="h-4 w-4" />
                    {t("cookies.savePreferences") || "Save Preferences"}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* How to Delete Cookies */}
            <Card className="mt-8 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trash2 className="h-5 w-5 text-rust" />
                  {t("cookies.howToDelete") || "How to Delete Cookies"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  You can delete cookies from your browser at any time. Here's how:
                </p>
                <div className="grid gap-3 md:grid-cols-2">
                  {[
                    { browser: "Chrome", shortcut: "Ctrl+Shift+Delete" },
                    { browser: "Firefox", shortcut: "Ctrl+Shift+Delete" },
                    { browser: "Safari", shortcut: "⌘+,  → Privacy" },
                    { browser: "Edge", shortcut: "Ctrl+Shift+Delete" },
                  ].map((item) => (
                    <div
                      key={item.browser}
                      className="flex items-center justify-between rounded-lg border border-border p-3"
                    >
                      <span className="font-medium">{item.browser}</span>
                      <Badge variant="secondary" className="font-mono text-xs">
                        {item.shortcut}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Related Links */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button variant="ghost" className="gap-2" asChild>
                <Link href="/privacy">
                  <FileText className="h-4 w-4" />
                  {t("cookies.privacy") || "Privacy Policy"}
                </Link>
              </Button>
              <Button variant="ghost" className="gap-2" asChild>
                <Link href="/terms">
                  <FileText className="h-4 w-4" />
                  {t("cookies.terms") || "Terms of Service"}
                </Link>
              </Button>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
