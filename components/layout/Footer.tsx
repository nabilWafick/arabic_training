"use client";

import Link from "next/link";
import { Heart, Github, Twitter, ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";

/**
 * Social links configuration
 */
const socialLinks = [
  { href: "https://github.com", label: "GitHub", icon: Github },
  { href: "https://twitter.com", label: "Twitter", icon: Twitter },
];

/**
 * Footer component with navigation links, social links, and copyright
 * Displays in a responsive grid layout
 */
export function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();
  
  // Footer links configuration with translation keys
  // Use existing pages where available, create new pages for support/legal
  const footerLinks = {
    learn: [
      { href: "/learn/phase/1", labelKey: "foundations" },
      { href: "/learn/phase/2", labelKey: "beginner" },
      { href: "/learn/phase/3", labelKey: "intermediate" },
      { href: "/learn/phase/4", labelKey: "advanced" },
      { href: "/learn/phase/5", labelKey: "expert" },
    ],
    resources: [
      { href: "/practice", labelKey: "practice" },
      { href: "/practice/vocabulary", labelKey: "vocabulary" },
      { href: "/learn/phase/1", labelKey: "grammarReference" },
      { href: "/practice", labelKey: "alphabetGuide" },
    ],
    support: [
      { href: "/help", labelKey: "helpCenter" },
      { href: "/faq", labelKey: "faq" },
      { href: "/contact", labelKey: "contactUs" },
      { href: "/feedback", labelKey: "feedback" },
    ],
    legal: [
      { href: "/privacy", labelKey: "privacyPolicy" },
      { href: "/terms", labelKey: "termsOfService" },
      { href: "/cookies", labelKey: "cookiePolicy" },
    ],
  };
  
  return (
    <footer className="border-t border-border bg-card">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-gold to-gold-dark">
                <span className="font-arabic text-xl text-background">ع</span>
              </div>
              <div>
                <span className="font-heading text-lg font-bold text-foreground">
                  Arabic<span className="text-gold">Master</span>
                </span>
                <span className="block text-xs text-muted-foreground">Pro</span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              {t("description")}
            </p>
            
            {/* Social links */}
            <div className="mt-4 flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-gold"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Learn links */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
              {t("learn")}
            </h3>
            <ul className="space-y-2">
              {footerLinks.learn.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-gold"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources links */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
              {t("resources")}
            </h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-gold"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support links */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
              {t("support")}
            </h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-gold"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row">
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            © {currentYear} {t("copyright")}
            <Heart className="h-4 w-4 fill-current text-rust" />
            {t("forArabicLearners")}
          </p>
          
          {/* Legal links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-muted-foreground transition-colors hover:text-gold"
              >
                {t(link.labelKey)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
