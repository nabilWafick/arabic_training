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

/**
 * Privacy policy section structure
 */
interface PolicySection {
  id: string;
  icon: React.ElementType;
  title: string;
  titleAr: string;
  content: string[];
}

/**
 * Privacy Policy page
 */
export default function PrivacyPage() {
  const t = useTranslations();
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Policy sections
  const policySections: PolicySection[] = [
    {
      id: "collection",
      icon: Database,
      title: "Information We Collect",
      titleAr: "المعلومات التي نجمعها",
      content: [
        "Account Information: When you create an account, we collect your email address, username, and password (encrypted).",
        "Learning Data: We track your progress, completed lessons, exercise results, and learning patterns to personalize your experience.",
        "Usage Data: We collect information about how you interact with our platform, including pages visited, time spent, and features used.",
        "Device Information: Basic device and browser information to ensure compatibility and security.",
      ],
    },
    {
      id: "usage",
      icon: Eye,
      title: "How We Use Your Information",
      titleAr: "كيف نستخدم معلوماتك",
      content: [
        "Personalization: Adapt lessons and exercises to your learning level and style.",
        "Progress Tracking: Save and sync your learning progress across devices.",
        "Improvement: Analyze usage patterns to improve our platform and content.",
        "Communication: Send important updates about your account and new features (with your consent).",
        "Support: Respond to your questions and provide customer support.",
      ],
    },
    {
      id: "protection",
      icon: Lock,
      title: "How We Protect Your Data",
      titleAr: "كيف نحمي بياناتك",
      content: [
        "Encryption: All data is encrypted in transit (TLS) and at rest (AES-256).",
        "Secure Infrastructure: We use industry-standard cloud security practices.",
        "Access Control: Strict internal access controls limit who can view your data.",
        "Regular Audits: We conduct regular security audits and penetration testing.",
        "No Sale of Data: We never sell your personal information to third parties.",
      ],
    },
    {
      id: "rights",
      icon: UserCheck,
      title: "Your Rights",
      titleAr: "حقوقك",
      content: [
        "Access: Request a copy of all personal data we hold about you.",
        "Correction: Update or correct any inaccurate information.",
        "Deletion: Request deletion of your account and associated data.",
        "Portability: Export your learning data in a standard format.",
        "Opt-out: Unsubscribe from marketing communications at any time.",
      ],
    },
    {
      id: "international",
      icon: Globe,
      title: "International Data Transfers",
      titleAr: "نقل البيانات الدولية",
      content: [
        "Our servers are located in secure data centers in Europe and North America.",
        "We comply with GDPR, CCPA, and other applicable data protection regulations.",
        "Data may be transferred internationally with appropriate safeguards in place.",
        "We use Standard Contractual Clauses for transfers outside the EU/EEA.",
      ],
    },
  ];

  // Last updated date
  const lastUpdated = "March 2024";

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
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-500/10 via-background to-teal/10 px-6 py-16">
            <div className="relative mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex items-center justify-center rounded-full bg-blue-500/20 p-4">
                <Shield className="h-10 w-10 text-blue-500" />
              </div>

              <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
                {t("privacy.title") || "Privacy Policy"}
              </h1>
              <p className="mt-2 font-arabic text-2xl text-blue-500">سياسة الخصوصية</p>
              <p className="mt-4 text-lg text-muted-foreground">
                {t("privacy.subtitle") || "Your privacy matters to us. Learn how we collect, use, and protect your data."}
              </p>
              <Badge variant="secondary" className="mt-4">
                <FileText className="mr-2 h-3 w-3" />
                {t("privacy.lastUpdated") || "Last updated"}: {lastUpdated}
              </Badge>
            </div>
          </div>

          {/* Policy Content */}
          <div className="mx-auto max-w-4xl px-6 py-12">
            {/* Quick Navigation */}
            <Card className="mb-8 border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">
                  {t("privacy.quickNav") || "Quick Navigation"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {policySections.map((section) => {
                    const Icon = section.icon;
                    return (
                      <Button
                        key={section.id}
                        variant="outline"
                        size="sm"
                        className={cn(
                          "gap-2 transition-all",
                          activeSection === section.id && "border-gold bg-gold/10 text-gold"
                        )}
                        onClick={() => {
                          setActiveSection(section.id);
                          document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        <Icon className="h-4 w-4" />
                        {section.title}
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Policy Sections */}
            <div className="space-y-8">
              {policySections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <Card
                    key={section.id}
                    id={section.id}
                    className="border-border/50 transition-all hover:border-gold/30"
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                          <Icon className="h-5 w-5 text-blue-500" />
                        </div>
                        <div>
                          <span className="text-muted-foreground">{index + 1}.</span>{" "}
                          {section.title}
                          <p className="font-arabic mt-1 text-sm font-normal text-gold/80">
                            {section.titleAr}
                          </p>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {section.content.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-gold" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Contact Section */}
            <Card className="mt-12 border-blue-500/30 bg-gradient-to-r from-blue-500/10 via-background to-teal/10">
              <CardContent className="flex flex-col items-center gap-6 p-8 md:flex-row">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20">
                  <Mail className="h-8 w-8 text-blue-500" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold text-foreground">
                    {t("privacy.questions") || "Questions about privacy?"}
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    {t("privacy.contactDescription") || "Contact our privacy team for any concerns or data requests."}
                  </p>
                </div>
                <Button className="gap-2 bg-blue-500 text-white hover:bg-blue-600" asChild>
                  <Link href="/contact">
                    <Mail className="h-4 w-4" />
                    {t("privacy.contactUs") || "Contact Us"}
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Related Links */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button variant="ghost" className="gap-2" asChild>
                <Link href="/terms">
                  <FileText className="h-4 w-4" />
                  {t("privacy.terms") || "Terms of Service"}
                </Link>
              </Button>
              <Button variant="ghost" className="gap-2" asChild>
                <Link href="/cookies">
                  <Database className="h-4 w-4" />
                  {t("privacy.cookies") || "Cookie Policy"}
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
