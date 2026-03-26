"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar, Sidebar, Footer } from "@/components/layout";

export default function PrivacyPage() {
  const t = useTranslations();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 overflow-auto p-6 lg:p-8">
          <div className="mx-auto max-w-4xl space-y-8">
            <div>
              <h1 className="font-heading text-3xl font-bold text-foreground">
                {t("privacy.title")}
              </h1>
              <p className="text-sm text-muted-foreground mt-2">
                {t("privacy.description")}: January 1, 2024
              </p>
            </div>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>{t("privacy.introduction")}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground leading-relaxed">
                This Privacy Policy explains how ArabicMaster Pro collects, uses,
                and protects your information.
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>{t("privacy.dataCollection")}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground leading-relaxed">
                We collect information you provide directly to us, such as name,
                email, and learning preferences.
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>{t("privacy.dataUsage")}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>• To provide and improve the Service</p>
                <p>• To personalize your learning experience</p>
                <p>• To analyze usage patterns</p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>{t("privacy.dataProtection")}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground leading-relaxed">
                We use encryption and secure measures to protect your personal
                information from unauthorized access.
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-gold/5 to-gold/10">
              <CardContent className="p-6">
                <p className="text-sm">
                  <span className="font-semibold">{t("privacy.effective")}:</span>{" "}
                  January 1, 2024
                </p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
