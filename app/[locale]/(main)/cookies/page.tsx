"use client";

import { useTranslations } from "next-intl";
import { Cookie } from "lucide-react";

export default function CookiesPage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Cookie size={32} />
            <h1 className="text-4xl font-bold">{t("cookies")}</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Cookie Policy
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              What are Cookies?
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Cookies are small data files stored on your device that help websites remember your preferences and activity. We use cookies to enhance your experience on ArabicMaster Pro.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Types of Cookies We Use
            </h3>
            <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2">
              <li>
                <strong>Essential Cookies:</strong> Required for basic functionality
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand user behavior
              </li>
              <li>
                <strong>Preference Cookies:</strong> Remember your settings and preferences
              </li>
              <li>
                <strong>Marketing Cookies:</strong> Used for personalized advertising
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Managing Cookies
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              You can control cookies through your browser settings. Most browsers allow you to refuse cookies or alert you when cookies are being sent. Note that some features of ArabicMaster Pro may not function properly if cookies are disabled.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Third-Party Cookies
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Some cookies may be set by third-party services we use for analytics, advertising, and functionality. These are governed by their respective privacy policies.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Questions?
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              If you have questions about our cookie policy, please contact us at: privacy@arabicmaster.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
