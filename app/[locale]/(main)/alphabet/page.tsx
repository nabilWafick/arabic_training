"use client";

import { useTranslations } from "next-intl";
import { Volume2 } from "lucide-react";

interface ArabicLetter {
  letter: string;
  name: string;
  nameEn: string;
  nameFr: string;
  pronunciation: string;
  isolate: string;
  initial: string;
  medial: string;
  final: string;
}

const arabicAlphabet: ArabicLetter[] = [
  {
    letter: "ا",
    name: "ألف",
    nameEn: "Alif",
    nameFr: "Alif",
    pronunciation: "ah",
    isolate: "ا",
    initial: "ا",
    medial: "ا",
    final: "ا",
  },
  {
    letter: "ب",
    name: "باء",
    nameEn: "Ba",
    nameFr: "Ba",
    pronunciation: "b",
    isolate: "ب",
    initial: "بـ",
    medial: "ـبـ",
    final: "ـب",
  },
  {
    letter: "ت",
    name: "تاء",
    nameEn: "Ta",
    nameFr: "Ta",
    pronunciation: "t",
    isolate: "ت",
    initial: "تـ",
    medial: "ـتـ",
    final: "ـت",
  },
  {
    letter: "ث",
    name: "ثاء",
    nameEn: "Tha",
    nameFr: "Tha",
    pronunciation: "th",
    isolate: "ث",
    initial: "ثـ",
    medial: "ـثـ",
    final: "ـث",
  },
  {
    letter: "ج",
    name: "جيم",
    nameEn: "Jeem",
    nameFr: "Jeem",
    pronunciation: "j",
    isolate: "ج",
    initial: "جـ",
    medial: "ـجـ",
    final: "ـج",
  },
];

export default function AlphabetPage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{t("alphabet")}</h1>
          <p className="text-green-100 text-lg">
            Learn the Arabic alphabet with proper forms and pronunciation
          </p>
        </div>
      </div>

      {/* Letters Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {arabicAlphabet.map((letter, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              {/* Main Letter */}
              <div className="text-6xl font-bold text-center text-green-600 mb-4">
                {letter.letter}
              </div>

              {/* Letter Name */}
              <div className="mb-4 text-center">
                <p className="text-lg font-bold text-slate-900 dark:text-white">
                  {letter.name}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {letter.nameEn} • {letter.nameFr}
                </p>
              </div>

              {/* Pronunciation */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  <Volume2 size={18} />
                  {letter.pronunciation}
                </button>
              </div>

              {/* Letter Forms */}
              <div className="grid grid-cols-2 gap-3 text-center text-sm">
                <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded">
                  <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2">
                    Isolated
                  </p>
                  <p className="text-3xl font-bold">{letter.isolate}</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded">
                  <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2">
                    Initial
                  </p>
                  <p className="text-3xl font-bold text-right">{letter.initial}</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded">
                  <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2">
                    Medial
                  </p>
                  <p className="text-3xl font-bold text-right">{letter.medial}</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded">
                  <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2">
                    Final
                  </p>
                  <p className="text-3xl font-bold text-right">{letter.final}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
