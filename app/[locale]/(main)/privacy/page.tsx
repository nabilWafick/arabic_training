"use client";

import { useTranslations } from "next-intl";
import { Shield } from "lucide-react";

export default function PrivacyPage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Shield size={32} />
            <h1 className="text-4xl font-bold">{t("privacy")}</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Privacy Policy
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              1. Information We Collect
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              We collect information you provide directly (account details, learning progress) and automatically (usage data, device information).
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              2. How We Use Your Information
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              We use your information to provide and improve our services, personalize your experience, and communicate with you about updates.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              3. Data Security
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              We implement industry-standard security measures to protect your personal information from unauthorized access and misuse.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              4. Your Rights
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              You have the right to access, update, or delete your personal information at any time. Contact our support team for assistance.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              5. Contact Us
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              For privacy concerns, please contact us at: privacy@arabicmaster.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
