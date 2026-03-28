"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  Shield,
  Lock,
  Eye,
  Database,
  UserCheck,
  Globe,
  FileText,
  ChevronRight,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar, Sidebar, Footer } from "@/components/layout";
import { cn } from "@/lib/utils";

interface PolicySection {
  id: string;
  icon: React.ElementType;
  titleKey: string;
  itemsKey: string;
}

/**
 * Privacy Policy page with full i18n support
 */
export default function PrivacyPage() {
  const t = useTranslations();
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>("collect");

  const policySections: PolicySection[] = [
    {
      id: "collect",
      icon: Database,
      titleKey: "privacy.sections.collect.title",
      itemsKey: "privacy.sections.collect.items",
    },
    {
      id: "use",
      icon: Eye,
      titleKey: "privacy.sections.use.title",
      itemsKey: "privacy.sections.use.items",
    },
    {
      id: "protect",
      icon: Lock,
      titleKey: "privacy.sections.protect.title",
      itemsKey: "privacy.sections.protect.items",
    },
    {
      id: "rights",
      icon: UserCheck,
      titleKey: "privacy.sections.rights.title",
      itemsKey: "privacy.sections.rights.items",
    },
    {
      id: "transfers",
      icon: Globe,
      titleKey: "privacy.sections.transfers.title",
      itemsKey: "privacy.sections.transfers.items",
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

  // Helper function to get array items from translations
  const getItems = (key: string): string[] => {
    try {
      const raw = t.raw(key);
      return Array.isArray(raw) ? raw : [];
    } catch {
      return [];
    }
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
                <Shield className="h-8 w-8 text-gold" />
                <Badge variant="outline" className="border-gold/30 bg-gold/5 text-gold">
                  {t("privacy.title")}
                </Badge>
              </div>
              <h1 className="text-4xl font-bold text-navy mb-4">
                {t("privacy.title")}
              </h1>
              <p className="text-lg text-navy/70 max-w-2xl">
                {t("privacy.subtitle")}
              </p>
              <p className="text-sm text-navy/50 mt-4">
                {t("privacy.lastUpdated")}: {t("privacy.lastUpdatedDate")}
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-12 lg:grid-cols-4">
                {/* Sidebar Navigation */}
                <div className="lg:col-span-1">
                  <div className="sticky top-4">
                    <h3 className="font-semibold text-navy mb-4">
                      {t("privacy.quickNav")}
                    </h3>
                    <nav className="space-y-2">
                      {policySections.map((section) => (
                        <button
                          key={section.id}
                          onClick={() => setActiveSection(section.id)}
                          className={cn(
                            "block w-full text-left px-3 py-2 rounded-lg transition-colors duration-200",
                            activeSection === section.id
                              ? "bg-gold/20 text-gold font-medium"
                              : "text-navy/60 hover:text-gold hover:bg-gold/10"
                          )}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm">
                              {t(section.titleKey)}
                            </span>
                            {activeSection === section.id && (
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
                    {policySections.map((section, index) => {
                      const Icon = section.icon;
                      const items = getItems(section.itemsKey);

                      return (
                        <div
                          key={section.id}
                          className={cn(
                            "scroll-mt-20 transition-opacity duration-300",
                            activeSection === section.id ? "opacity-100" : "opacity-75"
                          )}
                          id={section.id}
                        >
                          <Card className="border-gold/20 bg-white/50 backdrop-blur-sm hover:border-gold/40 transition-colors">
                            <CardHeader>
                              <div className="flex items-start gap-4">
                                <div className="rounded-lg bg-gold/10 p-3">
                                  <Icon className="h-6 w-6 text-gold" />
                                </div>
                                <div className="flex-1">
                                  <CardTitle className="text-2xl text-navy">
                                    {t(section.titleKey)}
                                  </CardTitle>
                                </div>
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

                  {/* Contact Section */}
                  <Card className="mt-12 border-gold/30 bg-gradient-to-br from-gold/5 to-transparent">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="rounded-lg bg-gold/20 p-3">
                          <Mail className="h-6 w-6 text-gold" />
                        </div>
                        <div>
                          <CardTitle>{t("privacy.contact.title")}</CardTitle>
                          <p className="text-sm text-navy/60 mt-1">
                            {t("privacy.contact.description")}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Link href="/contact">
                        <Button className="bg-gold hover:bg-gold/90 text-navy">
                          {t("privacy.contact.button")}
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>

                  {/* Related Links */}
                  <div className="mt-12 pt-8 border-t border-gold/20">
                    <h3 className="font-semibold text-navy mb-4">
                      {t("common.relatedLinks")}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <Link href="/terms">
                        <Button
                          variant="outline"
                          className="border-gold/30 hover:bg-gold/10"
                        >
                          {t("privacy.links.terms")}
                        </Button>
                      </Link>
                      <Link href="/cookies">
                        <Button
                          variant="outline"
                          className="border-gold/30 hover:bg-gold/10"
                        >
                          {t("privacy.links.cookies")}
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
