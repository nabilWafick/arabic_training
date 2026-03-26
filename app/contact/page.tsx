"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  Mail,
  MessageCircle,
  Send,
  MapPin,
  Clock,
  Phone,
  Globe,
  CheckCircle,
  HelpCircle,
  BookOpen,
  Bug,
  Lightbulb,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Navbar, Sidebar, Footer } from "@/components/layout";
import { cn } from "@/lib/utils";

/**
 * Contact reason options
 */
interface ContactReason {
  id: string;
  icon: React.ElementType;
  label: string;
  labelAr: string;
  description: string;
}

/**
 * Contact page - Get in touch with support
 */
export default function ContactPage() {
  const t = useTranslations();
  const [mounted, setMounted] = useState(false);
  const [selectedReason, setSelectedReason] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Contact reasons
  const contactReasons: ContactReason[] = [
    {
      id: "help",
      icon: HelpCircle,
      label: "General Help",
      labelAr: "مساعدة عامة",
      description: "Questions about using the platform",
    },
    {
      id: "bug",
      icon: Bug,
      label: "Report a Bug",
      labelAr: "الإبلاغ عن خطأ",
      description: "Something isn't working correctly",
    },
    {
      id: "feedback",
      icon: Lightbulb,
      label: "Feature Request",
      labelAr: "اقتراح ميزة",
      description: "Suggest new features or improvements",
    },
    {
      id: "partnership",
      icon: Heart,
      label: "Partnership",
      labelAr: "شراكة",
      description: "Business and collaboration inquiries",
    },
  ];

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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
          <div className="relative overflow-hidden bg-gradient-to-br from-rust/20 via-background to-gold/10 px-6 py-16">
            {/* Decorative elements */}
            <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-rust/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-gold/10 blur-3xl" />

            <div className="relative mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center justify-center rounded-full bg-rust/20 p-4">
                <MessageCircle className="h-10 w-10 text-rust" />
              </div>

              <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
                {t("contact.title") || "Contact Us"}
              </h1>
              <p className="mt-2 font-arabic text-2xl text-rust">تواصل معنا</p>
              <p className="mt-4 text-lg text-muted-foreground">
                {t("contact.subtitle") || "We'd love to hear from you. Send us a message and we'll respond as soon as possible."}
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-6 py-12">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Contact Info Cards */}
              <div className="space-y-6 lg:col-span-1">
                {/* Email Card */}
                <Card className="border-border/50 transition-all hover:border-gold/50">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="rounded-xl bg-gold/20 p-3">
                      <Mail className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="font-arabic text-sm text-gold/80">البريد الإلكتروني</p>
                      <a
                        href="mailto:support@arabicmaster.com"
                        className="mt-2 block text-sm text-muted-foreground transition-colors hover:text-gold"
                      >
                        support@arabicmaster.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Response Time Card */}
                <Card className="border-border/50 transition-all hover:border-gold/50">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="rounded-xl bg-teal/20 p-3">
                      <Clock className="h-6 w-6 text-teal" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Response Time</h3>
                      <p className="font-arabic text-sm text-teal/80">وقت الاستجابة</p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Usually within 24 hours
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Languages Card */}
                <Card className="border-border/50 transition-all hover:border-gold/50">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="rounded-xl bg-purple-500/20 p-3">
                      <Globe className="h-6 w-6 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Languages</h3>
                      <p className="font-arabic text-sm text-purple-500/80">اللغات</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">English</Badge>
                        <Badge variant="secondary" className="text-xs">Français</Badge>
                        <Badge variant="secondary" className="text-xs">العربية</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Links */}
                <Card className="border-border/50 bg-muted/30">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">
                      {t("contact.quickLinks") || "Quick Links"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-3"
                      asChild
                    >
                      <Link href="/help">
                        <BookOpen className="h-4 w-4 text-gold" />
                        {t("contact.helpCenter") || "Help Center"}
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-3"
                      asChild
                    >
                      <Link href="/faq">
                        <HelpCircle className="h-4 w-4 text-teal" />
                        {t("contact.faq") || "FAQ"}
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-3"
                      asChild
                    >
                      <Link href="/feedback">
                        <Lightbulb className="h-4 w-4 text-purple-500" />
                        {t("contact.feedback") || "Give Feedback"}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                {isSubmitted ? (
                  <Card className="border-green-500/50 bg-green-500/5">
                    <CardContent className="flex flex-col items-center py-16 text-center">
                      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20">
                        <CheckCircle className="h-10 w-10 text-green-500" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground">
                        {t("contact.thankYou") || "Thank you!"}
                      </h2>
                      <p className="font-arabic mt-2 text-xl text-green-500">شكراً لك</p>
                      <p className="mt-4 text-muted-foreground">
                        {t("contact.responseMessage") || "We've received your message and will get back to you soon."}
                      </p>
                      <Button
                        className="mt-8 gap-2 bg-gold text-background hover:bg-gold-dark"
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({ name: "", email: "", subject: "", message: "" });
                          setSelectedReason(null);
                        }}
                      >
                        <Send className="h-4 w-4" />
                        {t("contact.sendAnother") || "Send Another Message"}
                      </Button>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="border-border/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Send className="h-5 w-5 text-gold" />
                        {t("contact.sendMessage") || "Send us a Message"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Contact Reason Selection */}
                        <div>
                          <Label className="text-sm font-medium">
                            {t("contact.whatBringsYou") || "What brings you here?"}
                          </Label>
                          <div className="mt-3 grid grid-cols-2 gap-3">
                            {contactReasons.map((reason) => {
                              const Icon = reason.icon;
                              return (
                                <div
                                  key={reason.id}
                                  className={cn(
                                    "cursor-pointer rounded-lg border p-4 transition-all",
                                    selectedReason === reason.id
                                      ? "border-gold bg-gold/10"
                                      : "border-border/50 hover:border-gold/50"
                                  )}
                                  onClick={() => setSelectedReason(reason.id)}
                                >
                                  <div className="flex items-center gap-3">
                                    <div
                                      className={cn(
                                        "rounded-lg p-2",
                                        selectedReason === reason.id
                                          ? "bg-gold/20"
                                          : "bg-muted"
                                      )}
                                    >
                                      <Icon
                                        className={cn(
                                          "h-5 w-5",
                                          selectedReason === reason.id
                                            ? "text-gold"
                                            : "text-muted-foreground"
                                        )}
                                      />
                                    </div>
                                    <div>
                                      <p className="font-medium text-foreground">
                                        {reason.label}
                                      </p>
                                      <p className="font-arabic text-xs text-gold/80">
                                        {reason.labelAr}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Name & Email */}
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="name">
                              {t("contact.name") || "Name"}
                            </Label>
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder={t("contact.namePlaceholder") || "Your name"}
                              required
                              className="border-border/50 focus:border-gold"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">
                              {t("contact.email") || "Email"}
                            </Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder={t("contact.emailPlaceholder") || "your@email.com"}
                              required
                              className="border-border/50 focus:border-gold"
                            />
                          </div>
                        </div>

                        {/* Subject */}
                        <div className="space-y-2">
                          <Label htmlFor="subject">
                            {t("contact.subject") || "Subject"}
                          </Label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder={t("contact.subjectPlaceholder") || "What's this about?"}
                            required
                            className="border-border/50 focus:border-gold"
                          />
                        </div>

                        {/* Message */}
                        <div className="space-y-2">
                          <Label htmlFor="message">
                            {t("contact.message") || "Message"}
                          </Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder={t("contact.messagePlaceholder") || "Tell us more..."}
                            required
                            rows={6}
                            className="resize-none border-border/50 focus:border-gold"
                          />
                        </div>

                        {/* Submit Button */}
                        <Button
                          type="submit"
                          className="w-full gap-2 bg-gradient-to-r from-rust to-gold text-background"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                              {t("contact.sending") || "Sending..."}
                            </>
                          ) : (
                            <>
                              <Send className="h-4 w-4" />
                              {t("contact.send") || "Send Message"}
                            </>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
