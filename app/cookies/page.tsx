"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  Cookie,
  Settings,
  BarChart3,
  Target,
  Zap,
  Info,
  ChevronRight,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar, Sidebar, Footer } from "@/components/layout";
import { cn } from "@/lib/utils";

interface CookieCategory {
  id: string;
  icon: React.ElementType;
  titleKey: string;
  descKey: string;
  itemsKey: string;
  required?: boolean;
}

/**
 * Cookie Policy page with full i18n support
 */
export default function CookiesPage() {
  const t = useTranslations();
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>("essential");
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    functional: false,
    analytics: false,
    marketing: false,
  });

  const cookieCategories: CookieCategory[] = [
    {
      id: "essential",
      icon: Zap,
      titleKey: "cookies.sections.essential.title",
      descKey: "cookies.sections.essential.description",
      itemsKey: "cookies.sections.essential.items",
      required: true,
    },
    {
      id: "functional",
      icon: Settings,
      titleKey: "cookies.sections.functional.title",
      descKey: "cookies.sections.functional.description",
      itemsKey: "cookies.sections.functional.items",
    },
    {
      id: "analytics",
      icon: BarChart3,
      titleKey: "cookies.sections.analytics.title",
      descKey: "cookies.sections.analytics.description",
      itemsKey: "cookies.sections.analytics.items",
    },
    {
      id: "marketing",
      icon: Target,
      titleKey: "cookies.sections.marketing.title",
      descKey: "cookies.sections.marketing.description",
      itemsKey: "cookies.sections.marketing.items",
    },
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

  const getItems = (key: string): string[] => {
    try {
      const raw = t.raw(key);
      return Array.isArray(raw) ? raw : [];
    } catch {
      return [];
    }
  };

  const handlePreferenceChange = (category: string) => {
    if (category !== "essential") {
      setCookiePreferences({
        ...cookiePreferences,
        [category]: !cookiePreferences[category as keyof typeof cookiePreferences],
      });
    }
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookiePreferences", JSON.stringify(cookiePreferences));
    // Show toast notification
    alert(t("cookies.preferences.saveDescription"));
  };

  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1">
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-gold/10 via-cream to-navy/5 px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
              <div className="flex items-center gap-3 mb-4">
                <Cookie className="h-8 w-8 text-gold" />
                <Badge variant="outline" className="border-gold/30 bg-gold/5 text-gold">
                  {t("cookies.title")}
                </Badge>
              </div>
              <h1 className="text-4xl font-bold text-navy mb-4">
                {t("cookies.title")}
              </h1>
              <p className="text-lg text-navy/70 max-w-2xl">
                {t("cookies.subtitle")}
              </p>
              <p className="text-sm text-navy/50 mt-4">
                {t("cookies.lastUpdated")}: {t("cookies.lastUpdatedDate")}
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
              {/* Introduction */}
              <Card className="mb-12 border-gold/20 bg-white/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-gold/10 p-3">
                      <Info className="h-6 w-6 text-gold" />
                    </div>
                    <div className="flex-1">
                      <CardTitle>{t("cookies.title")}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-navy/80">
                    {t("cookies.intro")}
                  </p>
                </CardContent>
              </Card>

              <div className="grid gap-12 lg:grid-cols-4">
                {/* Sidebar Navigation */}
                <div className="lg:col-span-1">
                  <div className="sticky top-4">
                    <h3 className="font-semibold text-navy mb-4">
                      {t("cookies.quickNav")}
                    </h3>
                    <nav className="space-y-2">
                      {cookieCategories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => setActiveSection(category.id)}
                          className={cn(
                            "block w-full text-left px-3 py-2 rounded-lg transition-colors duration-200",
                            activeSection === category.id
                              ? "bg-gold/20 text-gold font-medium"
                              : "text-navy/60 hover:text-gold hover:bg-gold/10"
                          )}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm">
                              {t(category.titleKey)}
                            </span>
                            {activeSection === category.id && (
                              <ChevronRight className="h-4 w-4" />
                            )}
                          </div>
                        </button>
                      ))}
                    </nav>
                  </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-3">
                  <div className="space-y-8">
                    {cookieCategories.map((category, index) => {
                      const Icon = category.icon;
                      const items = getItems(category.itemsKey);

                      return (
                        <div
                          key={category.id}
                          className={cn(
                            "scroll-mt-20 transition-opacity duration-300",
                            activeSection === category.id ? "opacity-100" : "opacity-75"
                          )}
                          id={category.id}
                        >
                          <Card className="border-gold/20 bg-white/50 backdrop-blur-sm hover:border-gold/40 transition-colors">
                            <CardHeader>
                              <div className="flex items-start justify-between gap-4">
                                <div className="flex items-start gap-4 flex-1">
                                  <div className="rounded-lg bg-gold/10 p-3">
                                    <Icon className="h-6 w-6 text-gold" />
                                  </div>
                                  <div className="flex-1">
                                    <CardTitle className="text-2xl text-navy">
                                      {t(category.titleKey)}
                                    </CardTitle>
                                    <p className="text-sm text-navy/60 mt-2">
                                      {t(category.descKey)}
                                    </p>
                                  </div>
                                </div>
                                {category.required ? (
                                  <Badge className="bg-gold/20 text-gold border-0">
                                    {t("cookies.preferences.required")}
                                  </Badge>
                                ) : (
                                  <input
                                    type="checkbox"
                                    checked={
                                      cookiePreferences[
                                        category.id as keyof typeof cookiePreferences
                                      ]
                                    }
                                    onChange={() =>
                                      handlePreferenceChange(category.id)
                                    }
                                    className="h-5 w-5 cursor-pointer accent-gold"
                                  />
                                )}
                              </div>
                            </CardHeader>
                            <CardContent>
                              <ul className="space-y-3">
                                {items.map((item, idx) => (
                                  <li
                                    key={idx}
                                    className="flex gap-3 text-navy/80"
                                    style={{
                                      animation: `slideIn 0.5s ease-out ${idx * 0.1}s both`,
                                    }}
                                  >
                                    <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold/60" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>
                        </div>
                      );
                    })}
                  </div>

                  {/* Delete Cookies Section */}
                  <Card className="mt-12 border-gold/30 bg-gradient-to-br from-gold/5 to-transparent">
                    <CardHeader>
                      <CardTitle>{t("cookies.delete.title")}</CardTitle>
                      <p className="text-sm text-navy/60 mt-2">
                        {t("cookies.delete.description")}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 text-navy/80">
                        <p>
                          <strong>Chrome:</strong> {t("cookies.delete.chrome")}
                        </p>
                        <p>
                          <strong>Firefox:</strong> {t("cookies.delete.firefox")}
                        </p>
                        <p>
                          <strong>Safari:</strong> {t("cookies.delete.safari")}
                        </p>
                        <p>
                          <strong>Edge:</strong> {t("cookies.delete.edge")}
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Preferences Section */}
                  <Card className="mt-12 border-gold/30 bg-gradient-to-br from-gold/5 to-transparent">
                    <CardHeader>
                      <CardTitle>{t("cookies.preferences.title")}</CardTitle>
                      <p className="text-sm text-navy/60 mt-2">
                        {t("cookies.preferences.saveDescription")}
                      </p>
                    </CardHeader>
                    <CardContent className="flex gap-3">
                      <Button
                        onClick={handleSavePreferences}
                        className="bg-gold hover:bg-rust-600 text-white"
                      >
                        {t("cookies.preferences.saveBtn")}
                      </Button>
                      <Button
                        onClick={() =>
                          setCookiePreferences({
                            essential: true,
                            functional: false,
                            analytics: false,
                            marketing: false,
                          })
                        }
                        variant="outline"
                        className="border-gold/30"
                      >
                        {t("cookies.preferences.rejectAll")}
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Related Links */}
                  <div className="mt-12 pt-8 border-t border-gold/20">
                    <h3 className="font-semibold text-navy mb-4">
                      {t("common.relatedLinks")}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <Link href="/privacy">
                        <Button
                          variant="outline"
                          className="border-gold/30 hover:bg-gold/10"
                        >
                          {t("cookies.links.privacy")}
                        </Button>
                      </Link>
                      <Link href="/terms">
                        <Button
                          variant="outline"
                          className="border-gold/30 hover:bg-gold/10"
                        >
                          {t("cookies.links.terms")}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
