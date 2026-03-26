"use client";

import { useTranslations } from "next-intl";
import { FileText } from "lucide-react";

export default function TermsPage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <FileText size={32} />
            <h1 className="text-4xl font-bold">{t("terms")}</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Terms of Service
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              1. Use License
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Permission is granted to temporarily download one copy of the materials (information or software) on ArabicMaster Pro for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              2. Disclaimer
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              The materials on ArabicMaster Pro are provided on an 'as is' basis. ArabicMaster makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              3. Limitations
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              In no event shall ArabicMaster or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ArabicMaster.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              4. Accuracy of Materials
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              The materials appearing on ArabicMaster could include technical, typographical, or photographic errors. ArabicMaster does not warrant that any of the materials on our website are accurate, complete, or current.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              5. Links
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              ArabicMaster has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by ArabicMaster of the site.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
