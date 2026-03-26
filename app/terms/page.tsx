"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  FileText,
  Scale,
  UserX,
  AlertTriangle,
  Copyright,
  Gavel,
  ChevronRight,
  BookOpen,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar, Sidebar, Footer } from "@/components/layout";
import { cn } from "@/lib/utils";

/**
 * Terms of service section structure
 */
interface TermsSection {
  id: string;
  icon: React.ElementType;
  title: string;
  titleAr: string;
  content: string[];
}

/**
 * Terms of Service page
 */
export default function TermsPage() {
  const t = useTranslations();
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Terms sections
  const termsSections: TermsSection[] = [
    {
      id: "acceptance",
      icon: CheckCircle2,
      title: "Acceptance of Terms",
      titleAr: "قبول الشروط",
      content: [
        "By accessing or using ArabicMaster Pro, you agree to be bound by these Terms of Service.",
        "If you do not agree to these terms, please do not use our platform.",
        "We may update these terms from time to time. Continued use constitutes acceptance of changes.",
        "Users must be at least 13 years old to create an account.",
      ],
    },
    {
      id: "account",
      icon: BookOpen,
      title: "Account Responsibilities",
      titleAr: "مسؤوليات الحساب",
      content: [
        "You are responsible for maintaining the confidentiality of your account credentials.",
        "You must provide accurate and complete information when creating an account.",
        "You are responsible for all activities that occur under your account.",
        "Notify us immediately if you suspect unauthorized access to your account.",
        "One account per person - sharing accounts is not permitted.",
      ],
    },
    {
      id: "usage",
      icon: Scale,
      title: "Acceptable Use",
      titleAr: "الاستخدام المقبول",
      content: [
        "Use the platform only for lawful purposes and personal learning.",
        "Do not attempt to circumvent security measures or access restricted areas.",
        "Do not use automated tools to scrape or collect content without permission.",
        "Respect other users and maintain a positive learning environment.",
        "Do not share, resell, or redistribute course content without authorization.",
      ],
    },
    {
      id: "prohibited",
      icon: UserX,
      title: "Prohibited Activities",
      titleAr: "الأنشطة المحظورة",
      content: [
        "Harassment, bullying, or discrimination against other users.",
        "Posting malicious content, spam, or inappropriate material.",
        "Attempting to hack, disrupt, or compromise platform security.",
        "Creating multiple accounts to abuse free features or promotions.",
        "Using the platform for commercial purposes without authorization.",
        "Impersonating other users or platform staff.",
      ],
    },
    {
      id: "intellectual",
      icon: Copyright,
      title: "Intellectual Property",
      titleAr: "الملكية الفكرية",
      content: [
        "All content on ArabicMaster Pro is protected by copyright and intellectual property laws.",
        "You are granted a limited, non-exclusive license to access content for personal learning.",
        "You may not copy, modify, distribute, or create derivative works without permission.",
        "User-generated content remains your property, but you grant us a license to use it on the platform.",
        "Report any copyright infringement to our legal team promptly.",
      ],
    },
    {
      id: "termination",
      icon: AlertTriangle,
      title: "Termination",
      titleAr: "الإنهاء",
      content: [
        "We may suspend or terminate your account for violation of these terms.",
        "You may delete your account at any time through your account settings.",
        "Upon termination, your access to the platform and content will be revoked.",
        "Some data may be retained as required by law or for legitimate business purposes.",
        "Termination does not affect any rights or obligations that arose before termination.",
      ],
    },
    {
      id: "liability",
      icon: Gavel,
      title: "Limitation of Liability",
      titleAr: "حدود المسؤولية",
      content: [
        "ArabicMaster Pro is provided 'as is' without warranties of any kind.",
        "We are not liable for any indirect, incidental, or consequential damages.",
        "Our total liability is limited to the amount you paid for the service.",
        "We do not guarantee uninterrupted or error-free service.",
        "You use the platform at your own risk and discretion.",
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
          <div className="relative overflow-hidden bg-gradient-to-br from-teal/10 via-background to-gold/10 px-6 py-16">
            <div className="relative mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex items-center justify-center rounded-full bg-teal/20 p-4">
                <Scale className="h-10 w-10 text-teal" />
              </div>

              <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
                {t("terms.title") || "Terms of Service"}
              </h1>
              <p className="mt-2 font-arabic text-2xl text-teal">شروط الخدمة</p>
              <p className="mt-4 text-lg text-muted-foreground">
                {t("terms.subtitle") || "Please read these terms carefully before using ArabicMaster Pro."}
              </p>
              <Badge variant="secondary" className="mt-4">
                <FileText className="mr-2 h-3 w-3" />
                {t("terms.lastUpdated") || "Last updated"}: {lastUpdated}
              </Badge>
            </div>
          </div>

          {/* Terms Content */}
          <div className="mx-auto max-w-4xl px-6 py-12">
            {/* Quick Navigation */}
            <Card className="mb-8 border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">
                  {t("terms.quickNav") || "Quick Navigation"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {termsSections.map((section) => {
                    const Icon = section.icon;
                    return (
                      <Button
                        key={section.id}
                        variant="outline"
                        size="sm"
                        className={cn(
                          "gap-2 transition-all",
                          activeSection === section.id && "border-teal bg-teal/10 text-teal"
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

            {/* Terms Sections */}
            <div className="space-y-8">
              {termsSections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <Card
                    key={section.id}
                    id={section.id}
                    className="border-border/50 transition-all hover:border-teal/30"
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal/10">
                          <Icon className="h-5 w-5 text-teal" />
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
                            <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-teal" />
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
            <Card className="mt-12 border-teal/30 bg-gradient-to-r from-teal/10 via-background to-gold/10">
              <CardContent className="flex flex-col items-center gap-6 p-8 md:flex-row">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal/20">
                  <Mail className="h-8 w-8 text-teal" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold text-foreground">
                    {t("terms.questions") || "Questions about these terms?"}
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    {t("terms.contactDescription") || "Our legal team is happy to help clarify any concerns."}
                  </p>
                </div>
                <Button className="gap-2 bg-teal text-white hover:bg-teal/80" asChild>
                  <Link href="/contact">
                    <Mail className="h-4 w-4" />
                    {t("terms.contactUs") || "Contact Us"}
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Related Links */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button variant="ghost" className="gap-2" asChild>
                <Link href="/privacy">
                  <FileText className="h-4 w-4" />
                  {t("terms.privacy") || "Privacy Policy"}
                </Link>
              </Button>
              <Button variant="ghost" className="gap-2" asChild>
                <Link href="/cookies">
                  <FileText className="h-4 w-4" />
                  {t("terms.cookies") || "Cookie Policy"}
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
