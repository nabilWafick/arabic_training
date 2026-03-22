/**
 * Phase 1: Foundations (30 Lessons)
 * Master the Arabic alphabet, vowel marks, and basic reading skills
 * 
 * Lesson Structure:
 * 1-4: Alphabet Introduction (letters 1-28)
 * 5-8: Letter Forms (initial, medial, final)
 * 9-12: Vowel Marks (harakat)
 * 13-16: Reading Practice (letter combinations)
 * 17-20: Writing Practice (basic strokes)
 * 21-24: Numbers and Basic Words
 * 25-28: Simple Phrases
 * 29-30: Phase Review and Assessment
 */

import type { Lesson } from "@/types";
import { ARABIC_ALPHABET, ARABIC_HARAKAT, ARABIC_NUMBERS } from "./constants";

export const PHASE_1_LESSONS: Lesson[] = [
  // SECTION 1: ALPHABET INTRODUCTION (Lessons 1-7)
  {
    id: "1-1",
    phaseId: 1,
    order: 1,
    title: "Letters 1-4: Alif, Bā', Tā', Thā'",
    titleAr: "الحروف ١-٤: الألف، الباء، التاء، الثاء",
    description: "Learn the first four letters of the Arabic alphabet with their sounds and shapes",
    objectives: [
      "Recognize letters Alif (ا), Bā' (ب), Tā' (ت), and Thā' (ث)",
      "Understand that ب, ت, ث share the same base shape with different dots",
      "Pronounce each letter correctly",
      "Write each letter in isolated form"
    ],
    estimatedTime: 45,
    difficulty: "easy",
    xpReward: 50,
    content: {
      theory: [
        {
          title: "Welcome to Arabic Script",
          content: "Arabic is written from right to left (←) using 28 letters. Unlike English, most Arabic letters connect to each other within words, and letters change shape depending on their position. Today we start with the first four letters!"
        },
        {
          title: "Alif (ا) - The First Letter",
          content: "Alif is a vertical stroke, like an English 'l' without the curve. It represents a long 'aa' sound (like 'father') or a glottal stop (the pause in 'uh-oh'). Alif NEVER connects to the next letter - it's independent!"
        },
        {
          title: "The 'B-T-Th' Family: ب ت ث",
          content: "These three letters share the SAME base shape - like a boat or dish. The only difference is the dots:\n• Bā' (ب) = ONE dot BELOW = 'b' sound\n• Tā' (ت) = TWO dots ABOVE = 't' sound  \n• Thā' (ث) = THREE dots ABOVE = 'th' sound (like 'think')\n\nMemory trick: 'B' for Below (ب), 'T' for Two on Top (ت)"
        },
        {
          title: "Pronunciation Guide",
          content: "• Alif (ا): Long 'aa' as in 'car' - or silent with hamza\n• Bā' (ب): Same as English 'b' in 'book'\n• Tā' (ت): Same as English 't' in 'top'\n• Thā' (ث): 'th' as in 'think' (NOT as in 'the')"
        }
      ],
      vocabulary: [
        { arabic: "ا", transliteration: "alif", meaning: "Alif (long 'a' or glottal stop)" },
        { arabic: "ب", transliteration: "bā'", meaning: "Bā' (b sound)" },
        { arabic: "ت", transliteration: "tā'", meaning: "Tā' (t sound)" },
        { arabic: "ث", transliteration: "thā'", meaning: "Thā' (th as in 'think')" },
        { arabic: "أَب", transliteration: "ab", meaning: "father" },
        { arabic: "بَاب", transliteration: "bāb", meaning: "door" },
        { arabic: "بَيْت", transliteration: "bayt", meaning: "house" }
      ]
    },
    exerciseCount: 15,
    prerequisites: []
  },
  {
    id: "1-2",
    phaseId: 1,
    order: 2,
    title: "Letters 5-7: Jīm, Ḥā', Khā'",
    titleAr: "الحروف ٥-٧: الجيم، الحاء، الخاء",
    description: "Learn the second group of letters that share a common shape",
    objectives: [
      "Recognize letters Jīm (ج), Ḥā' (ح), and Khā' (خ)",
      "Distinguish between these similar-looking letters",
      "Pronounce the throat sounds Ḥā' and Khā'",
      "Write each letter in isolated form"
    ],
    estimatedTime: 45,
    difficulty: "easy",
    xpReward: 50,
    content: {
      theory: [
        {
          title: "The 'J-Ḥ-Kh' Family: ج ح خ",
          content: "Just like ب-ت-ث, these three letters share the same base shape - like a 'hook' or 'teacup'. The dots tell them apart:\n• Jīm (ج) = ONE dot BELOW = 'j' sound\n• Ḥā' (ح) = NO dots = deep throat 'h'\n• Khā' (خ) = ONE dot ABOVE = 'kh' sound (like 'Bach')"
        },
        {
          title: "Special Throat Sounds",
          content: "Ḥā' (ح) is a 'breathy h' from deep in the throat - imagine breathing on your glasses to clean them, but more forceful.\n\nKhā' (خ) sounds like the 'ch' in Scottish 'loch' or German 'Bach' - a scraping sound in the back of the throat. If you can gargle, you can make this sound!"
        },
        {
          title: "Memory Tips",
          content: "• Jīm (ج): J for 'Just one dot below'\n• Ḥā' (ح): 'Plain' with no dots (ح looks like an empty cup)\n• Khā' (خ): 'Kiss' on top = dot above (like a cherry on top)"
        }
      ],
      vocabulary: [
        { arabic: "ج", transliteration: "jīm", meaning: "Jīm (j sound)" },
        { arabic: "ح", transliteration: "ḥā'", meaning: "Ḥā' (deep h sound)" },
        { arabic: "خ", transliteration: "khā'", meaning: "Khā' (kh as in 'Bach')" },
        { arabic: "جَمَل", transliteration: "jamal", meaning: "camel" },
        { arabic: "حُب", transliteration: "ḥubb", meaning: "love" },
        { arabic: "خُبْز", transliteration: "khubz", meaning: "bread" }
      ]
    },
    exerciseCount: 15,
    prerequisites: ["1-1"]
  },
  {
    id: "1-3",
    phaseId: 1,
    order: 3,
    title: "Letters 8-11: Dāl, Dhāl, Rā', Zāy",
    titleAr: "الحروف ٨-١١: الدال، الذال، الراء، الزاي",
    description: "Learn the non-connecting letters - letters that don't connect forward",
    objectives: [
      "Recognize Dāl (د), Dhāl (ذ), Rā' (ر), and Zāy (ز)",
      "Understand why these letters never connect to the following letter",
      "Pronounce the 'th' sound in Dhāl (like 'the')",
      "Write these non-connecting letters"
    ],
    estimatedTime: 50,
    difficulty: "easy",
    xpReward: 55,
    content: {
      theory: [
        {
          title: "Non-Connecting Letters",
          content: "These four letters are special - they NEVER connect to the letter after them (though they can connect to what comes before). When you write them, you must lift your pen.\n\nThink of them as 'independent' letters that like their space!"
        },
        {
          title: "The 'D-Dh' Pair: د ذ",
          content: "• Dāl (د) = No dot = 'd' sound (like 'door')\n• Dhāl (ذ) = ONE dot above = 'dh/th' sound (like 'the', 'that', 'mother')\n\nNote: Dhāl (ذ) sounds different from Thā' (ث). Dhāl = 'the', Thā' = 'think'"
        },
        {
          title: "The 'R-Z' Pair: ر ز",
          content: "• Rā' (ر) = No dot = rolled 'r' sound (Spanish-style)\n• Zāy (ز) = ONE dot above = 'z' sound\n\nThe Arabic 'r' is rolled/trilled like in Spanish or Italian. Practice saying 'butter' with a rolled r!"
        }
      ],
      vocabulary: [
        { arabic: "د", transliteration: "dāl", meaning: "Dāl (d sound)" },
        { arabic: "ذ", transliteration: "dhāl", meaning: "Dhāl (dh as in 'the')" },
        { arabic: "ر", transliteration: "rā'", meaning: "Rā' (rolled r)" },
        { arabic: "ز", transliteration: "zāy", meaning: "Zāy (z sound)" },
        { arabic: "دَار", transliteration: "dār", meaning: "house/home" },
        { arabic: "ذَهَب", transliteration: "dhahab", meaning: "gold" },
        { arabic: "رَجُل", transliteration: "rajul", meaning: "man" },
        { arabic: "زَهْرَة", transliteration: "zahra", meaning: "flower" }
      ]
    },
    exerciseCount: 16,
    prerequisites: ["1-2"]
  },
  {
    id: "1-4",
    phaseId: 1,
    order: 4,
    title: "Letters 12-14: Sīn, Shīn, Ṣād",
    titleAr: "الحروف ١٢-١٤: السين، الشين، الصاد",
    description: "Learn the 'S' letters with their distinctive three-tooth shape",
    objectives: [
      "Recognize Sīn (س), Shīn (ش), and Ṣād (ص)",
      "Write the three-tooth pattern of Sīn/Shīn",
      "Understand emphatic consonants (Ṣād)",
      "Pronounce the heavy 'ṣ' sound"
    ],
    estimatedTime: 50,
    difficulty: "easy",
    xpReward: 55,
    content: {
      theory: [
        {
          title: "The Three-Tooth Letters: س ش",
          content: "Sīn (س) and Shīn (ش) have a distinctive shape with three 'teeth' like a comb:\n• Sīn (س) = NO dots = 's' sound (like 'sun')\n• Shīn (ش) = THREE dots above = 'sh' sound (like 'ship')\n\nTip: Shīn has 3 teeth AND 3 dots!"
        },
        {
          title: "Introducing Emphatic Letters: Ṣād (ص)",
          content: "Ṣād (ص) is your first 'emphatic' letter. Arabic has sounds that don't exist in English - emphatic letters are pronounced with the tongue pressed against the roof of the mouth, creating a 'heavier' sound.\n\nṢād is a 'heavy s' - imagine saying 's' while your tongue is pressed flat. Your mouth feels more full."
        },
        {
          title: "Why Emphatics Matter",
          content: "Emphatic letters change the meaning of words! For example:\n• سَيْف (sayf) = sword (regular s)\n• صَيْف (ṣayf) = summer (emphatic s)\n\nArabics sometimes call this language 'لُغَة الضّاد' (the language of Ḍād) because emphatic sounds are so distinctive!"
        }
      ],
      vocabulary: [
        { arabic: "س", transliteration: "sīn", meaning: "Sīn (s sound)" },
        { arabic: "ش", transliteration: "shīn", meaning: "Shīn (sh sound)" },
        { arabic: "ص", transliteration: "ṣād", meaning: "Ṣād (emphatic s)" },
        { arabic: "سَمَاء", transliteration: "samā'", meaning: "sky" },
        { arabic: "شَمْس", transliteration: "shams", meaning: "sun" },
        { arabic: "صَبَاح", transliteration: "ṣabāḥ", meaning: "morning" }
      ]
    },
    exerciseCount: 16,
    prerequisites: ["1-3"]
  },
  {
    id: "1-5",
    phaseId: 1,
    order: 5,
    title: "Letters 15-17: Ḍād, Ṭā', Ẓā'",
    titleAr: "الحروف ١٥-١٧: الضاد، الطاء، الظاء",
    description: "Master the remaining emphatic letters - the signature sounds of Arabic",
    objectives: [
      "Recognize Ḍād (ض), Ṭā' (ط), and Ẓā' (ظ)",
      "Pronounce all emphatic consonants confidently",
      "Distinguish between regular and emphatic pairs",
      "Understand why Arabic is called 'the language of Ḍād'"
    ],
    estimatedTime: 55,
    difficulty: "easy",
    xpReward: 60,
    content: {
      theory: [
        {
          title: "The Complete Emphatic Set",
          content: "You're learning the sounds that make Arabic unique! These three letters complete the emphatic consonant family:\n• Ḍād (ض) = emphatic 'd' (NO English equivalent!)\n• Ṭā' (ط) = emphatic 't' (heavy 't')\n• Ẓā' (ظ) = emphatic 'dh/z' (heavy 'th' like 'the')"
        },
        {
          title: "Ḍād - The Arabic Letter",
          content: "Ḍād (ض) is so unique that Arabic is called 'لُغَة الضّاد' (lughat aḍ-ḍād - the language of Ḍād). This sound exists ONLY in Arabic!\n\nTo pronounce it: Say 'd' but press your tongue against your upper teeth while pushing air from your throat. It sounds 'thick' and 'heavy'."
        },
        {
          title: "Emphatic Pairs Comparison",
          content: "Regular → Emphatic:\n• ت (t) → ط (ṭ): thin t → thick t\n• د (d) → ض (ḍ): thin d → thick d\n• ذ (dh) → ظ (ẓ): thin th → thick th\n• س (s) → ص (ṣ): thin s → thick s\n\nEmphatics make surrounding vowels sound 'darker' too!"
        }
      ],
      vocabulary: [
        { arabic: "ض", transliteration: "ḍād", meaning: "Ḍād (emphatic d)" },
        { arabic: "ط", transliteration: "ṭā'", meaning: "Ṭā' (emphatic t)" },
        { arabic: "ظ", transliteration: "ẓā'", meaning: "Ẓā' (emphatic dh/z)" },
        { arabic: "ضَوْء", transliteration: "ḍaw'", meaning: "light" },
        { arabic: "طَعَام", transliteration: "ṭa'ām", meaning: "food" },
        { arabic: "ظُهْر", transliteration: "ẓuhr", meaning: "noon" }
      ]
    },
    exerciseCount: 16,
    prerequisites: ["1-4"]
  },
  {
    id: "1-6",
    phaseId: 1,
    order: 6,
    title: "Letters 18-20: 'Ayn, Ghayn, Fā'",
    titleAr: "الحروف ١٨-٢٠: العين، الغين، الفاء",
    description: "Learn the distinctive throat sounds and the letter Fā'",
    objectives: [
      "Recognize 'Ayn (ع), Ghayn (غ), and Fā' (ف)",
      "Master the pharyngeal sound 'Ayn",
      "Pronounce Ghayn (like French 'r')",
      "Write the distinctive eye-shaped letters"
    ],
    estimatedTime: 55,
    difficulty: "medium",
    xpReward: 65,
    content: {
      theory: [
        {
          title: "'Ayn - The Most Difficult Sound",
          content: "'Ayn (ع) is often the hardest letter for non-native speakers. It's a 'pharyngeal' consonant - produced by constricting your throat.\n\nHow to pronounce: Imagine you're choking (gently!), or gagging. The sound comes from squeezing the back of your throat. It's like saying 'ah' while your throat is tight."
        },
        {
          title: "Ghayn - The Gargling Sound",
          content: "Ghayn (غ) is easier! It sounds like:\n• The French 'r' in 'Paris'\n• Gargling water in your throat\n• The 'ch' in 'Bach' but voiced\n\nGhayn and 'Ayn share the same shape - Ghayn just has a dot above."
        },
        {
          title: "Fā' - A Familiar Friend",
          content: "Fā' (ف) is easy - it's just like English 'f'! It has a distinctive loop shape with one dot above.\n\nFun fact: Fā' looks like a lowercase 'q' with a dot - an easy visual reminder!"
        }
      ],
      vocabulary: [
        { arabic: "ع", transliteration: "'ayn", meaning: "'Ayn (throat constriction)" },
        { arabic: "غ", transliteration: "ghayn", meaning: "Ghayn (French r / gargle)" },
        { arabic: "ف", transliteration: "fā'", meaning: "Fā' (f sound)" },
        { arabic: "عَيْن", transliteration: "'ayn", meaning: "eye" },
        { arabic: "غَابَة", transliteration: "ghāba", meaning: "forest" },
        { arabic: "فَم", transliteration: "fam", meaning: "mouth" }
      ]
    },
    exerciseCount: 17,
    prerequisites: ["1-5"]
  },
  {
    id: "1-7",
    phaseId: 1,
    order: 7,
    title: "Letters 21-24: Qāf, Kāf, Lām, Mīm",
    titleAr: "الحروف ٢١-٢٤: القاف، الكاف، اللام، الميم",
    description: "Learn common consonants including the distinctive Qāf",
    objectives: [
      "Recognize Qāf (ق), Kāf (ك), Lām (ل), and Mīm (م)",
      "Distinguish between Qāf and Kāf sounds",
      "Write the tall vertical stroke of Lām",
      "Connect these letters in simple words"
    ],
    estimatedTime: 50,
    difficulty: "easy",
    xpReward: 55,
    content: {
      theory: [
        {
          title: "Qāf vs. Kāf",
          content: "• Qāf (ق) = Deep 'k' from the back of the throat (like saying 'k' while gargling)\n• Kāf (ك) = Regular 'k' like English\n\nQāf is a 'uvular' sound - the sound originates further back than regular 'k'. Many Arabic dialects pronounce Qāf as 'g' or even as a glottal stop!"
        },
        {
          title: "Lām - The Tall One",
          content: "Lām (ل) is one of the tallest letters in Arabic. It looks like Alif (ا) but with a small hook at the bottom.\n\nImportant: Lām appears in 'الـ' (al-), the Arabic word for 'the'. You'll see it constantly!"
        },
        {
          title: "Mīm - Round and Friendly",
          content: "Mīm (م) is a round letter that looks like a small circle with a tail. It's one of the most common letters in Arabic.\n\nEasy to remember: Mīm looks like a little 'm' or a round marble!"
        }
      ],
      vocabulary: [
        { arabic: "ق", transliteration: "qāf", meaning: "Qāf (deep k)" },
        { arabic: "ك", transliteration: "kāf", meaning: "Kāf (k sound)" },
        { arabic: "ل", transliteration: "lām", meaning: "Lām (l sound)" },
        { arabic: "م", transliteration: "mīm", meaning: "Mīm (m sound)" },
        { arabic: "قَمَر", transliteration: "qamar", meaning: "moon" },
        { arabic: "كِتَاب", transliteration: "kitāb", meaning: "book" },
        { arabic: "لَيْل", transliteration: "layl", meaning: "night" },
        { arabic: "مَاء", transliteration: "mā'", meaning: "water" }
      ]
    },
    exerciseCount: 18,
    prerequisites: ["1-6"]
  },
  {
    id: "1-8",
    phaseId: 1,
    order: 8,
    title: "Letters 25-28: Nūn, Hā', Wāw, Yā'",
    titleAr: "الحروف ٢٥-٢٨: النون، الهاء، الواو، الياء",
    description: "Complete the alphabet! Learn the final four letters",
    objectives: [
      "Recognize Nūn (ن), Hā' (ه), Wāw (و), and Yā' (ي)",
      "Understand Wāw and Yā' as both consonants and vowels",
      "Write all 28 letters from memory",
      "Celebrate completing the alphabet!"
    ],
    estimatedTime: 55,
    difficulty: "easy",
    xpReward: 70,
    content: {
      theory: [
        {
          title: "Nūn - The Dot Bowl",
          content: "Nūn (ن) looks like a small bowl with a dot above. It makes the 'n' sound.\n\nNūn is a 'sun letter' (حروف شمسية) - when 'ال' comes before it, the 'l' changes to 'n'. We'll learn more about this later!"
        },
        {
          title: "Hā' - The Breathy H",
          content: "Hā' (ه) is different from Ḥā' (ح). It's a light, breathy 'h' - like English 'h' in 'hello'.\n\nHā' has many forms depending on position - in the middle of a word it looks like a small 'o' or '∞' shape!"
        },
        {
          title: "The Semi-Vowels: Wāw and Yā'",
          content: "These two letters are special - they can be consonants OR vowels!\n\n• Wāw (و): As consonant = 'w' (like 'water'). As vowel = long 'ū' (like 'boot')\n• Yā' (ي): As consonant = 'y' (like 'yes'). As vowel = long 'ī' (like 'see')\n\nNon-connecting: Wāw never connects forward (like د ر ز)."
        },
        {
          title: "🎉 Congratulations!",
          content: "You've learned all 28 letters of the Arabic alphabet! This is a HUGE achievement. The alphabet is the foundation of everything - and you've mastered it!"
        }
      ],
      vocabulary: [
        { arabic: "ن", transliteration: "nūn", meaning: "Nūn (n sound)" },
        { arabic: "ه", transliteration: "hā'", meaning: "Hā' (light h)" },
        { arabic: "و", transliteration: "wāw", meaning: "Wāw (w/ū sound)" },
        { arabic: "ي", transliteration: "yā'", meaning: "Yā' (y/ī sound)" },
        { arabic: "نُور", transliteration: "nūr", meaning: "light" },
        { arabic: "هُوَ", transliteration: "huwa", meaning: "he" },
        { arabic: "وَرْد", transliteration: "ward", meaning: "rose" },
        { arabic: "يَد", transliteration: "yad", meaning: "hand" }
      ]
    },
    exerciseCount: 20,
    prerequisites: ["1-7"]
  },

  // SECTION 2: LETTER FORMS (Lessons 9-14)
  {
    id: "1-9",
    phaseId: 1,
    order: 9,
    title: "Letter Forms: Introduction",
    titleAr: "أشكال الحروف: مقدمة",
    description: "Learn how Arabic letters change shape based on position",
    objectives: [
      "Understand the four forms of Arabic letters",
      "Identify isolated, initial, medial, and final forms",
      "Recognize connecting vs. non-connecting letters",
      "Practice reading letters in different positions"
    ],
    estimatedTime: 45,
    difficulty: "easy",
    xpReward: 55,
    content: {
      theory: [
        {
          title: "The Four Forms",
          content: "Arabic letters have up to FOUR different shapes depending on where they appear in a word:\n\n1. Isolated (مُفْرَد): Standing alone\n2. Initial (أَوَّلِي): Start of a word\n3. Medial (وَسَطِي): Middle of a word\n4. Final (نِهَائِي): End of a word"
        },
        {
          title: "Why Letters Change",
          content: "Arabic is a cursive script - letters flow together like handwriting. The different forms allow smooth connections between letters.\n\nThink of it like cursive English: the 'r' in 'car' looks different from 'r' at the start of 'run'!"
        },
        {
          title: "Non-Connecting Letters",
          content: "Remember these 6 letters NEVER connect to the next letter:\nا (alif), د (dāl), ذ (dhāl), ر (rā'), ز (zāy), و (wāw)\n\nThey only have two forms: isolated and final (which look the same!)."
        }
      ],
      vocabulary: ARABIC_ALPHABET.slice(0, 7).map(l => ({
        arabic: `${l.isolated} ← → ${l.initial}${l.medial}${l.final}`,
        transliteration: l.transliteration,
        meaning: `${l.name} in all forms`
      }))
    },
    exerciseCount: 15,
    prerequisites: ["1-8"]
  },
  {
    id: "1-10",
    phaseId: 1,
    order: 10,
    title: "Letter Forms: ب ت ث ن ي Group",
    titleAr: "أشكال الحروف: مجموعة ب ت ث ن ي",
    description: "Master the forms of letters with similar base shapes",
    objectives: [
      "Write ب ت ث ن ي in all four forms",
      "Recognize these letters in any position",
      "Practice connecting these letters",
      "Read simple words using these letters"
    ],
    estimatedTime: 50,
    difficulty: "easy",
    xpReward: 55,
    content: {
      theory: [
        {
          title: "The 'Baseline Scoop' Family",
          content: "These five letters share a similar base shape in their initial and medial forms - a small 'scoop' or 'cup' on the baseline:\n\nInitial: بـ تـ ثـ نـ يـ\nMedial: ـبـ ـتـ ـثـ ـنـ ـيـ\n\nThe dots tell them apart!"
        },
        {
          title: "Form Comparison",
          content: "Isolated → Initial → Medial → Final:\n• ب → بـ → ـبـ → ـب\n• ت → تـ → ـتـ → ـت\n• ث → ثـ → ـثـ → ـث\n• ن → نـ → ـنـ → ـن\n• ي → يـ → ـيـ → ـي"
        },
        {
          title: "Practice Words",
          content: "بَيْت (bayt) = house - see how ب is initial, ي is medial, ت is final\nبِنْت (bint) = girl - ب initial, ن medial, ت final\nثَبَت (thabata) = he proved - ث initial, ب medial, ت final"
        }
      ],
      vocabulary: [
        { arabic: "بَيْت", transliteration: "bayt", meaning: "house" },
        { arabic: "بِنْت", transliteration: "bint", meaning: "girl" },
        { arabic: "نَبِي", transliteration: "nabī", meaning: "prophet" },
        { arabic: "يَوْم", transliteration: "yawm", meaning: "day" },
        { arabic: "ثَابِت", transliteration: "thābit", meaning: "constant/firm" }
      ]
    },
    exerciseCount: 16,
    prerequisites: ["1-9"]
  },
  {
    id: "1-11",
    phaseId: 1,
    order: 11,
    title: "Letter Forms: ج ح خ Group",
    titleAr: "أشكال الحروف: مجموعة ج ح خ",
    description: "Master the hook-shaped letters in all positions",
    objectives: [
      "Write ج ح خ in all four forms",
      "Understand how the 'hook' shape changes",
      "Practice reading and writing words",
      "Build speed in recognizing these letters"
    ],
    estimatedTime: 45,
    difficulty: "easy",
    xpReward: 50,
    content: {
      theory: [
        {
          title: "The Hook Letters",
          content: "ج ح خ have a distinctive 'hook' or 'teacup' shape. In initial and medial forms, the hook becomes smaller:\n\nIsolated: ج ح خ (full hook visible)\nInitial: جـ حـ خـ (hook becomes a small curve)\nMedial: ـجـ ـحـ ـخـ (hook is minimized)\nFinal: ـج ـح ـخ (full hook returns)"
        },
        {
          title: "Writing Tips",
          content: "When writing these letters:\n1. Start from the right\n2. In initial/medial forms, make a small curve\n3. In isolated/final forms, complete the full hook\n4. Add dots last: ج (below), خ (above), ح (none)"
        }
      ],
      vocabulary: [
        { arabic: "جَدِيد", transliteration: "jadīd", meaning: "new" },
        { arabic: "حَجَر", transliteration: "ḥajar", meaning: "stone" },
        { arabic: "خَرَجَ", transliteration: "kharaja", meaning: "he went out" },
        { arabic: "نَحْن", transliteration: "naḥnu", meaning: "we" }
      ]
    },
    exerciseCount: 15,
    prerequisites: ["1-10"]
  },
  {
    id: "1-12",
    phaseId: 1,
    order: 12,
    title: "Letter Forms: س ش ص ض Group",
    titleAr: "أشكال الحروف: مجموعة س ش ص ض",
    description: "Master the 'tooth' letters and their emphatic variants",
    objectives: [
      "Write س ش ص ض in all four forms",
      "Understand how teeth simplify in connected forms",
      "Distinguish between س/ش and ص/ض shapes",
      "Practice word reading with these letters"
    ],
    estimatedTime: 50,
    difficulty: "medium",
    xpReward: 60,
    content: {
      theory: [
        {
          title: "The Tooth Letters",
          content: "س and ش have three 'teeth' in isolated form, but these often simplify when connected:\n\nIsolated: س ش (3 clear teeth)\nInitial: سـ شـ (teeth may be simplified to a flat line)\nMedial: ـسـ ـشـ (often just a wavy line)\nFinal: ـس ـش (teeth visible again)"
        },
        {
          title: "Emphatic Versions",
          content: "ص and ض are the emphatic versions. They have a distinctive oval/loop shape:\n\nIsolated: ص ض (closed loop + tail)\nThe loop stays consistent in all forms, making them easier to recognize!"
        }
      ],
      vocabulary: [
        { arabic: "سَمَك", transliteration: "samak", meaning: "fish" },
        { arabic: "شَجَرَة", transliteration: "shajara", meaning: "tree" },
        { arabic: "صَدِيق", transliteration: "ṣadīq", meaning: "friend" },
        { arabic: "أَرْض", transliteration: "arḍ", meaning: "earth/land" }
      ]
    },
    exerciseCount: 16,
    prerequisites: ["1-11"]
  },
  {
    id: "1-13",
    phaseId: 1,
    order: 13,
    title: "Letter Forms: ع غ ف ق Group",
    titleAr: "أشكال الحروف: مجموعة ع غ ف ق",
    description: "Master the eye-shaped and loop letters",
    objectives: [
      "Write ع غ ف ق in all four forms",
      "Recognize the 'eye' shape of ع غ",
      "Understand the different loops of ف ق",
      "Practice reading complex words"
    ],
    estimatedTime: 50,
    difficulty: "medium",
    xpReward: 60,
    content: {
      theory: [
        {
          title: "The Eye Letters: ع غ",
          content: "ع and غ are called 'eye' letters because they look like an eye in their isolated form:\n\nIsolated: ع غ (full eye shape)\nInitial: عـ غـ (small opening curve)\nMedial: ـعـ ـغـ (similar to initial)\nFinal: ـع ـغ (full eye returns)"
        },
        {
          title: "The Loop Letters: ف ق",
          content: "ف and ق both have loops, but different styles:\n• ف: Small loop with dot above, sits on baseline\n• ق: Two dots above, dips BELOW baseline in isolated/final forms\n\nTip: ق looks like it's diving underwater!"
        }
      ],
      vocabulary: [
        { arabic: "عَرَبِي", transliteration: "'arabī", meaning: "Arabic/Arab" },
        { arabic: "غَنِي", transliteration: "ghanī", meaning: "rich" },
        { arabic: "فَرَح", transliteration: "faraḥ", meaning: "joy" },
        { arabic: "قَلْب", transliteration: "qalb", meaning: "heart" }
      ]
    },
    exerciseCount: 16,
    prerequisites: ["1-12"]
  },
  {
    id: "1-14",
    phaseId: 1,
    order: 14,
    title: "Letter Forms: ك ل م ه Group",
    titleAr: "أشكال الحروف: مجموعة ك ل م ه",
    description: "Master the remaining connecting letters",
    objectives: [
      "Write ك ل م ه in all four forms",
      "Understand Hā's many forms",
      "Practice Lām-Alif combination",
      "Read words with all letter forms"
    ],
    estimatedTime: 55,
    difficulty: "medium",
    xpReward: 60,
    content: {
      theory: [
        {
          title: "Kāf and Lām",
          content: "ك (Kāf) has a distinctive zig-zag top in isolated form that simplifies when connected.\n\nل (Lām) is the tall letter - it's essentially a vertical stroke. When followed by Alif, it creates a special ligature: لا (lām-alif)."
        },
        {
          title: "Mīm - The Round Letter",
          content: "م (Mīm) has a nice round shape:\nIsolated: م (circle with tail)\nInitial: مـ (open circle curve)\nMedial: ـمـ (small bump on line)\nFinal: ـم (circle returns)"
        },
        {
          title: "Hā' - The Chameleon",
          content: "ه (Hā') is unique - it has VERY different forms:\nIsolated: ه (like a small 'h')\nInitial: هـ (like a small hat)\nMedial: ـهـ (like '∞' or two loops)\nFinal: ـه (like isolated)\n\nDon't worry - you'll recognize it with practice!"
        }
      ],
      vocabulary: [
        { arabic: "كَبِير", transliteration: "kabīr", meaning: "big" },
        { arabic: "لَا", transliteration: "lā", meaning: "no" },
        { arabic: "مَلِك", transliteration: "malik", meaning: "king" },
        { arabic: "هَذَا", transliteration: "hādhā", meaning: "this" }
      ]
    },
    exerciseCount: 18,
    prerequisites: ["1-13"]
  },

  // SECTION 3: VOWEL MARKS (Lessons 15-18)
  {
    id: "1-15",
    phaseId: 1,
    order: 15,
    title: "Short Vowels: Fatḥa, Kasra, Ḍamma",
    titleAr: "الحركات القصيرة: الفتحة والكسرة والضمة",
    description: "Learn the three short vowel marks (harakat)",
    objectives: [
      "Recognize Fatḥa (َ), Kasra (ِ), and Ḍamma (ُ)",
      "Pronounce each vowel sound correctly",
      "Read letters with vowel marks",
      "Understand vowel placement above/below letters"
    ],
    estimatedTime: 50,
    difficulty: "easy",
    xpReward: 55,
    content: {
      theory: [
        {
          title: "What Are Harakat?",
          content: "Harakat (حَرَكَات) are small marks placed above or below letters to indicate vowel sounds. Written Arabic for learners and religious texts includes these marks; everyday Arabic often omits them.\n\nThink of them as training wheels - they help you read correctly!"
        },
        {
          title: "The Three Short Vowels",
          content: "• Fatḥa (فَتْحَة) = ـَ = 'a' sound (like 'cat')\n  Written ABOVE the letter\n\n• Kasra (كَسْرَة) = ـِ = 'i' sound (like 'sit')\n  Written BELOW the letter\n\n• Ḍamma (ضَمَّة) = ـُ = 'u' sound (like 'put')\n  Written ABOVE the letter (looks like small و)"
        },
        {
          title: "Examples",
          content: "بَ (ba) بِ (bi) بُ (bu)\nتَ (ta) تِ (ti) تُ (tu)\nكَ (ka) كِ (ki) كُ (ku)\n\nThe consonant stays the same - only the vowel changes!"
        }
      ],
      vocabulary: ARABIC_HARAKAT.slice(0, 3).map(h => ({
        arabic: h.mark,
        transliteration: h.name.toLowerCase(),
        meaning: `${h.name} - ${h.description}`
      }))
    },
    exerciseCount: 18,
    prerequisites: ["1-14"]
  },
  {
    id: "1-16",
    phaseId: 1,
    order: 16,
    title: "Sukūn and Shadda",
    titleAr: "السكون والشدة",
    description: "Learn marks for no vowel (sukūn) and doubling (shadda)",
    objectives: [
      "Recognize Sukūn (ْ) and Shadda (ّ)",
      "Understand consonant clusters with sukūn",
      "Pronounce doubled consonants correctly",
      "Read words with all diacritical marks"
    ],
    estimatedTime: 50,
    difficulty: "medium",
    xpReward: 60,
    content: {
      theory: [
        {
          title: "Sukūn - No Vowel",
          content: "Sukūn (سُكُون) = ـْ = NO vowel sound\n\nIt looks like a small circle above the letter. When you see sukūn, pronounce ONLY the consonant, then move immediately to the next letter.\n\nExample: كَتْب (katb) - the 't' has no vowel, goes directly to 'b'"
        },
        {
          title: "Shadda - Double Consonant",
          content: "Shadda (شَدَّة) = ـّ = DOUBLE the consonant\n\nIt looks like a small 'w' above the letter. When you see shadda, hold the consonant longer - like saying it twice.\n\nExample: كَتَّبَ (kattaba) - the 't' is doubled/held longer"
        },
        {
          title: "Shadda + Vowel",
          content: "Shadda often appears WITH a short vowel:\n• ـَّ = doubled consonant + 'a'\n• ـِّ = doubled consonant + 'i'\n• ـُّ = doubled consonant + 'u'\n\nExample: مُدَرِّس (mudarris) = teacher - the 'r' is doubled with kasra"
        }
      ],
      vocabulary: [
        { arabic: "سُكُون", transliteration: "sukūn", meaning: "sukūn (no vowel mark)" },
        { arabic: "شَدَّة", transliteration: "shadda", meaning: "shadda (doubling mark)" },
        { arabic: "كُرْسِي", transliteration: "kursī", meaning: "chair" },
        { arabic: "حُبّ", transliteration: "ḥubb", meaning: "love" }
      ]
    },
    exerciseCount: 16,
    prerequisites: ["1-15"]
  },
  {
    id: "1-17",
    phaseId: 1,
    order: 17,
    title: "Tanwīn (Nunation)",
    titleAr: "التنوين",
    description: "Learn the 'n' sound endings for indefinite nouns",
    objectives: [
      "Recognize the three tanwīn marks",
      "Understand tanwīn indicates indefiniteness",
      "Pronounce tanwīn correctly",
      "Distinguish tanwīn from regular nūn"
    ],
    estimatedTime: 45,
    difficulty: "medium",
    xpReward: 55,
    content: {
      theory: [
        {
          title: "What is Tanwīn?",
          content: "Tanwīn (تَنْوِين) adds an 'n' sound to the end of words. It indicates that a noun is indefinite (like 'a book' vs 'the book').\n\nTanwīn literally means 'adding nūn' - you're essentially adding a hidden ن to the word!"
        },
        {
          title: "The Three Tanwīn",
          content: "• Fatḥatān (فَتْحَتَان) = ـً = 'an' sound\n• Kasratān (كَسْرَتَان) = ـٍ = 'in' sound\n• Ḍammatān (ضَمَّتَان) = ـٌ = 'un' sound\n\nNotice they look like doubled versions of the short vowels!"
        },
        {
          title: "Examples",
          content: "كِتَابٌ (kitābun) = a book\nكِتَابًا (kitāban) = a book (accusative)\nكِتَابٍ (kitābin) = a book (genitive)\n\nCompare: الكِتَاب (al-kitāb) = THE book (no tanwīn!)"
        }
      ],
      vocabulary: ARABIC_HARAKAT.slice(5, 8).map(h => ({
        arabic: h.mark,
        transliteration: h.name.toLowerCase(),
        meaning: h.description
      }))
    },
    exerciseCount: 15,
    prerequisites: ["1-16"]
  },
  {
    id: "1-18",
    phaseId: 1,
    order: 18,
    title: "Long Vowels: Alif, Wāw, Yā'",
    titleAr: "حروف المد: الألف والواو والياء",
    description: "Master the long vowel sounds using vowel letters",
    objectives: [
      "Understand how ا و ي represent long vowels",
      "Distinguish short vs. long vowel sounds",
      "Read words with long vowels correctly",
      "Practice vowel length in pronunciation"
    ],
    estimatedTime: 50,
    difficulty: "medium",
    xpReward: 60,
    content: {
      theory: [
        {
          title: "Long Vowels in Arabic",
          content: "Arabic has THREE long vowels, each twice as long as their short counterpart:\n\n• ا (alif) = long 'ā' (like 'father') - preceded by fatḥa\n• و (wāw) = long 'ū' (like 'moon') - preceded by ḍamma\n• ي (yā') = long 'ī' (like 'machine') - preceded by kasra"
        },
        {
          title: "Short vs. Long Comparison",
          content: "Short → Long:\n• ـَ (a) → ـَا (ā): كَتَبَ (kataba) vs كَاتِب (kātib)\n• ـُ (u) → ـُو (ū): كُتُب (kutub) vs نُور (nūr)\n• ـِ (i) → ـِي (ī): مِن (min) vs دِين (dīn)\n\nLong vowels are held about twice as long!"
        },
        {
          title: "Why Vowel Length Matters",
          content: "Vowel length can change meaning:\n• قَلْب (qalb) = heart (short 'a')\n• كَالِب (qālib) = mold/form (long 'ā')\n• صَنَعَ (ṣana'a) = he made (short 'a')\n• صَانِع (ṣāni') = maker (long 'ā')"
        }
      ],
      vocabulary: [
        { arabic: "كِتَاب", transliteration: "kitāb", meaning: "book (long ā)" },
        { arabic: "نُور", transliteration: "nūr", meaning: "light (long ū)" },
        { arabic: "كَبِير", transliteration: "kabīr", meaning: "big (long ī)" },
        { arabic: "سَمَاء", transliteration: "samā'", meaning: "sky (long ā)" }
      ]
    },
    exerciseCount: 17,
    prerequisites: ["1-17"]
  },

  // SECTION 4: READING PRACTICE (Lessons 19-22)
  {
    id: "1-19",
    phaseId: 1,
    order: 19,
    title: "Reading: Two-Letter Words",
    titleAr: "القراءة: كلمات من حرفين",
    description: "Practice reading simple two-letter Arabic words",
    objectives: [
      "Read two-letter words fluently",
      "Apply letter forms knowledge",
      "Use vowel marks for correct pronunciation",
      "Build reading confidence"
    ],
    estimatedTime: 40,
    difficulty: "easy",
    xpReward: 50,
    content: {
      theory: [
        {
          title: "Starting Simple",
          content: "Let's practice reading the simplest Arabic words - those with just two letters. Focus on:\n1. Identifying each letter\n2. Reading the vowel marks\n3. Pronouncing smoothly"
        },
        {
          title: "Two-Letter Word Patterns",
          content: "Common patterns:\n• CVC: مِنْ (min) = from\n• CV: لَا (lā) = no\n• CVC: قَدْ (qad) = already\n\n(C = consonant, V = vowel)"
        }
      ],
      vocabulary: [
        { arabic: "مِنْ", transliteration: "min", meaning: "from" },
        { arabic: "إِلَى", transliteration: "ilā", meaning: "to" },
        { arabic: "أَبْ", transliteration: "ab", meaning: "father" },
        { arabic: "أُمّ", transliteration: "umm", meaning: "mother" },
        { arabic: "فِي", transliteration: "fī", meaning: "in" },
        { arabic: "عَنْ", transliteration: "'an", meaning: "about" },
        { arabic: "لَا", transliteration: "lā", meaning: "no" },
        { arabic: "أَوْ", transliteration: "aw", meaning: "or" }
      ]
    },
    exerciseCount: 14,
    prerequisites: ["1-18"]
  },
  {
    id: "1-20",
    phaseId: 1,
    order: 20,
    title: "Reading: Three-Letter Words",
    titleAr: "القراءة: كلمات من ثلاثة حروف",
    description: "Practice reading three-letter root words",
    objectives: [
      "Read three-letter words fluently",
      "Understand the concept of Arabic roots",
      "Recognize common word patterns",
      "Improve reading speed"
    ],
    estimatedTime: 50,
    difficulty: "easy",
    xpReward: 55,
    content: {
      theory: [
        {
          title: "The Power of Three",
          content: "Most Arabic words are built on THREE-LETTER ROOTS. This is the foundation of Arabic vocabulary!\n\nExample: The root ك-ت-ب (k-t-b) relates to writing:\n• كَتَبَ (kataba) = he wrote\n• كِتَاب (kitāb) = book\n• كَاتِب (kātib) = writer\n• مَكْتَبَة (maktaba) = library"
        },
        {
          title: "Reading Strategy",
          content: "For three-letter words:\n1. Identify all three letters\n2. Check for vowel marks\n3. Sound out letter by letter\n4. Then blend smoothly"
        }
      ],
      vocabulary: [
        { arabic: "كَتَبَ", transliteration: "kataba", meaning: "he wrote" },
        { arabic: "قَرَأَ", transliteration: "qara'a", meaning: "he read" },
        { arabic: "ذَهَبَ", transliteration: "dhahaba", meaning: "he went" },
        { arabic: "وَلَد", transliteration: "walad", meaning: "boy" },
        { arabic: "بَيْت", transliteration: "bayt", meaning: "house" },
        { arabic: "شَمْس", transliteration: "shams", meaning: "sun" }
      ]
    },
    exerciseCount: 16,
    prerequisites: ["1-19"]
  },
  {
    id: "1-21",
    phaseId: 1,
    order: 21,
    title: "Reading: Common Words",
    titleAr: "القراءة: كلمات شائعة",
    description: "Learn to read the most frequent Arabic words",
    objectives: [
      "Read the 20 most common Arabic words",
      "Recognize high-frequency vocabulary",
      "Practice reading without vowel marks",
      "Build practical reading skills"
    ],
    estimatedTime: 50,
    difficulty: "medium",
    xpReward: 60,
    content: {
      theory: [
        {
          title: "High-Frequency Words",
          content: "Learning the most common words helps you read faster. These 20 words appear in almost every Arabic text!"
        },
        {
          title: "Reading Without Vowels",
          content: "Native Arabic is usually written WITHOUT vowel marks. Don't panic! Context and word patterns will guide you. Start with familiar words to build confidence."
        }
      ],
      vocabulary: [
        { arabic: "هُوَ", transliteration: "huwa", meaning: "he" },
        { arabic: "هِيَ", transliteration: "hiya", meaning: "she" },
        { arabic: "هُمْ", transliteration: "hum", meaning: "they (m)" },
        { arabic: "أَنَا", transliteration: "anā", meaning: "I" },
        { arabic: "أَنْتَ", transliteration: "anta", meaning: "you (m)" },
        { arabic: "مَاذَا", transliteration: "mādhā", meaning: "what" },
        { arabic: "لِمَاذَا", transliteration: "limādhā", meaning: "why" },
        { arabic: "كَيْفَ", transliteration: "kayfa", meaning: "how" },
        { arabic: "أَيْنَ", transliteration: "ayna", meaning: "where" },
        { arabic: "مَتَى", transliteration: "matā", meaning: "when" }
      ]
    },
    exerciseCount: 18,
    prerequisites: ["1-20"]
  },
  {
    id: "1-22",
    phaseId: 1,
    order: 22,
    title: "Reading: Simple Sentences",
    titleAr: "القراءة: جمل بسيطة",
    description: "Practice reading short Arabic sentences",
    objectives: [
      "Read simple Arabic sentences",
      "Understand basic sentence structure",
      "Recognize word boundaries",
      "Build comprehension skills"
    ],
    estimatedTime: 55,
    difficulty: "medium",
    xpReward: 65,
    content: {
      theory: [
        {
          title: "Arabic Sentence Structure",
          content: "Arabic sentences can start with either:\n1. A verb (VSO): ذَهَبَ الوَلَدُ (went the-boy = The boy went)\n2. A noun (SVO): الوَلَدُ ذَهَبَ (the-boy went = The boy went)\n\nBoth are correct! Verb-first is more common in formal Arabic."
        },
        {
          title: "Reading Tips for Sentences",
          content: "1. Don't panic - go word by word\n2. Look for الـ (al-) to find nouns\n3. Verbs often come first\n4. Use context for meaning"
        }
      ],
      vocabulary: [
        { arabic: "الوَلَدُ ذَهَبَ", transliteration: "al-waladu dhahaba", meaning: "The boy went" },
        { arabic: "البِنْتُ كَتَبَتْ", transliteration: "al-bintu katabat", meaning: "The girl wrote" },
        { arabic: "هَذَا كِتَابٌ", transliteration: "hādhā kitābun", meaning: "This is a book" },
        { arabic: "أَنَا طَالِبٌ", transliteration: "anā ṭālibun", meaning: "I am a student" }
      ]
    },
    exerciseCount: 16,
    prerequisites: ["1-21"]
  },

  // SECTION 5: WRITING PRACTICE (Lessons 23-26)
  {
    id: "1-23",
    phaseId: 1,
    order: 23,
    title: "Writing: Basic Strokes",
    titleAr: "الكتابة: الخطوط الأساسية",
    description: "Master the fundamental strokes used in Arabic calligraphy",
    objectives: [
      "Learn the basic strokes of Arabic writing",
      "Practice right-to-left writing direction",
      "Understand baseline and letter proportions",
      "Develop proper pen control"
    ],
    estimatedTime: 45,
    difficulty: "easy",
    xpReward: 50,
    content: {
      theory: [
        {
          title: "The Four Basic Strokes",
          content: "Arabic letters are made from combining these basic strokes:\n1. Vertical line (↓): Used in ا ل ك\n2. Horizontal line (←): Used in connections\n3. Curves (↺): Used in ب ج س\n4. Dots (•): Added last to distinguish letters"
        },
        {
          title: "Right-to-Left Writing",
          content: "Arabic is written RIGHT to LEFT. For right-handed writers, this means pushing the pen (vs pulling in English). Keep your paper angled for comfort!"
        },
        {
          title: "Letter Proportions",
          content: "Traditional Arabic calligraphy uses dots to measure proportions:\n• Alif height = 7 dots\n• Letter body = 1-2 dots\n• Descenders (ي ن) = 3-5 dots below baseline"
        }
      ],
      vocabulary: [
        { arabic: "ا", transliteration: "alif", meaning: "Practice vertical stroke" },
        { arabic: "ب", transliteration: "bā'", meaning: "Practice curve + dot" },
        { arabic: "س", transliteration: "sīn", meaning: "Practice teeth stroke" }
      ]
    },
    exerciseCount: 12,
    prerequisites: ["1-22"]
  },
  {
    id: "1-24",
    phaseId: 1,
    order: 24,
    title: "Writing: Letters That Don't Connect",
    titleAr: "الكتابة: الحروف التي لا تتصل",
    description: "Practice writing non-connecting letters",
    objectives: [
      "Write ا د ذ ر ز و correctly",
      "Understand why these letters don't connect",
      "Practice letter spacing",
      "Build muscle memory"
    ],
    estimatedTime: 45,
    difficulty: "easy",
    xpReward: 50,
    content: {
      theory: [
        {
          title: "The Non-Connectors",
          content: "These 6 letters NEVER connect to the following letter:\nا (alif) - vertical line\nد (dāl) - curved stroke\nذ (dhāl) - dāl + dot\nر (rā') - small curve\nز (zāy) - rā' + dot\nو (wāw) - round loop"
        },
        {
          title: "Writing Tips",
          content: "When writing these letters:\n• Complete the letter fully\n• Lift your pen\n• Leave a small gap\n• Start the next letter fresh"
        }
      ],
      vocabulary: [
        { arabic: "دَار", transliteration: "dār", meaning: "house (practice دار)" },
        { arabic: "وَرَق", transliteration: "waraq", meaning: "paper (practice ورق)" },
        { arabic: "زَيْت", transliteration: "zayt", meaning: "oil (practice زيت)" }
      ]
    },
    exerciseCount: 14,
    prerequisites: ["1-23"]
  },
  {
    id: "1-25",
    phaseId: 1,
    order: 25,
    title: "Writing: Connecting Letters",
    titleAr: "الكتابة: وصل الحروف",
    description: "Learn to connect letters smoothly",
    objectives: [
      "Write connected letter combinations",
      "Maintain smooth flow between letters",
      "Practice common letter pairs",
      "Develop writing fluency"
    ],
    estimatedTime: 50,
    difficulty: "medium",
    xpReward: 60,
    content: {
      theory: [
        {
          title: "Connection Points",
          content: "Most letters connect at the BASELINE. The connection is a thin horizontal stroke that flows naturally from one letter to the next.\n\nExample: بـيـت (bayt) - see how ب connects to ي connects to ت"
        },
        {
          title: "Common Combinations",
          content: "Practice these frequent pairs:\n• لا (lām-alif): Special ligature\n• مـح (mīm-ḥā'): Round to hook\n• كـت (kāf-tā'): Zig-zag to curve\n• فـي (fā'-yā'): Loop to dots"
        }
      ],
      vocabulary: [
        { arabic: "مَكْتَبَة", transliteration: "maktaba", meaning: "library" },
        { arabic: "مَدْرَسَة", transliteration: "madrasa", meaning: "school" },
        { arabic: "جَامِعَة", transliteration: "jāmi'a", meaning: "university" }
      ]
    },
    exerciseCount: 16,
    prerequisites: ["1-24"]
  },
  {
    id: "1-26",
    phaseId: 1,
    order: 26,
    title: "Writing: Complete Words",
    titleAr: "الكتابة: كلمات كاملة",
    description: "Practice writing complete Arabic words",
    objectives: [
      "Write multi-letter words fluently",
      "Add vowel marks correctly",
      "Maintain consistent letter size",
      "Develop neat handwriting"
    ],
    estimatedTime: 55,
    difficulty: "medium",
    xpReward: 65,
    content: {
      theory: [
        {
          title: "Word Writing Strategy",
          content: "When writing Arabic words:\n1. Plan the word mentally first\n2. Write all LETTERS from right to left\n3. Add DOTS after completing each letter group\n4. Add VOWEL MARKS (harakat) last"
        },
        {
          title: "Common Mistakes to Avoid",
          content: "• Mixing letter forms (using final form in the middle)\n• Forgetting to lift pen after non-connectors\n• Inconsistent letter sizes\n• Misplacing dots"
        }
      ],
      vocabulary: [
        { arabic: "سَلَام", transliteration: "salām", meaning: "peace" },
        { arabic: "شُكْرًا", transliteration: "shukran", meaning: "thank you" },
        { arabic: "مَرْحَبًا", transliteration: "marḥaban", meaning: "hello" }
      ]
    },
    exerciseCount: 18,
    prerequisites: ["1-25"]
  },

  // SECTION 6: NUMBERS AND BASIC WORDS (Lessons 27-28)
  {
    id: "1-27",
    phaseId: 1,
    order: 27,
    title: "Arabic Numbers 0-10",
    titleAr: "الأرقام العربية ٠-١٠",
    description: "Learn Arabic-Indic numerals and number words",
    objectives: [
      "Recognize Arabic numerals ٠-١٠",
      "Write and pronounce number words",
      "Count from 0 to 10 in Arabic",
      "Use numbers in basic contexts"
    ],
    estimatedTime: 45,
    difficulty: "easy",
    xpReward: 55,
    content: {
      theory: [
        {
          title: "Arabic-Indic Numerals",
          content: "Arabic uses its own numeral system (though Western numerals are also common):\n٠ ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩ ١٠\n0  1  2  3  4  5  6  7  8  9  10\n\nFun fact: Our 'Arabic numerals' (1, 2, 3...) actually came FROM Arabic!"
        },
        {
          title: "Number Words",
          content: "0 = صِفْر (ṣifr) - origin of 'zero'!\n1 = وَاحِد (wāḥid)\n2 = اِثْنَان (ithnān)\n3 = ثَلَاثَة (thalātha)\n4 = أَرْبَعَة (arba'a)\n5 = خَمْسَة (khamsa)"
        }
      ],
      vocabulary: ARABIC_NUMBERS.map(n => ({
        arabic: `${n.arabic} - ${n.word}`,
        transliteration: n.transliteration,
        meaning: `${n.number}`
      }))
    },
    exerciseCount: 15,
    prerequisites: ["1-26"]
  },
  {
    id: "1-28",
    phaseId: 1,
    order: 28,
    title: "Days of the Week",
    titleAr: "أيام الأسبوع",
    description: "Learn the names of the days in Arabic",
    objectives: [
      "Name all seven days in Arabic",
      "Understand day name origins",
      "Use days in simple sentences",
      "Practice pronunciation"
    ],
    estimatedTime: 45,
    difficulty: "easy",
    xpReward: 55,
    content: {
      theory: [
        {
          title: "The Arabic Week",
          content: "The Arabic week starts on SUNDAY (not Monday):\n\n1. الأَحَد (al-aḥad) - Sunday (The One)\n2. الاِثْنَيْن (al-ithnayn) - Monday (The Two)\n3. الثُّلَاثَاء (ath-thulāthā') - Tuesday (The Three)\n4. الأَرْبِعَاء (al-arbi'ā') - Wednesday (The Four)\n5. الخَمِيس (al-khamīs) - Thursday (The Five)\n6. الجُمْعَة (al-jum'a) - Friday (Gathering - prayer day)\n7. السَّبْت (as-sabt) - Saturday (Sabbath)"
        }
      ],
      vocabulary: [
        { arabic: "الأَحَد", transliteration: "al-aḥad", meaning: "Sunday" },
        { arabic: "الاِثْنَيْن", transliteration: "al-ithnayn", meaning: "Monday" },
        { arabic: "الثُّلَاثَاء", transliteration: "ath-thulāthā'", meaning: "Tuesday" },
        { arabic: "الأَرْبِعَاء", transliteration: "al-arbi'ā'", meaning: "Wednesday" },
        { arabic: "الخَمِيس", transliteration: "al-khamīs", meaning: "Thursday" },
        { arabic: "الجُمْعَة", transliteration: "al-jum'a", meaning: "Friday" },
        { arabic: "السَّبْت", transliteration: "as-sabt", meaning: "Saturday" }
      ]
    },
    exerciseCount: 14,
    prerequisites: ["1-27"]
  },

  // SECTION 7: SIMPLE PHRASES (Lessons 29-30)
  {
    id: "1-29",
    phaseId: 1,
    order: 29,
    title: "Basic Greetings",
    titleAr: "التحيات الأساسية",
    description: "Learn essential Arabic greetings and responses",
    objectives: [
      "Greet people appropriately in Arabic",
      "Respond to common greetings",
      "Understand greeting etiquette",
      "Practice conversational pronunciation"
    ],
    estimatedTime: 50,
    difficulty: "easy",
    xpReward: 60,
    content: {
      theory: [
        {
          title: "The Universal Greeting",
          content: "السَّلَامُ عَلَيْكُمْ (as-salāmu 'alaykum) = Peace be upon you\n\nResponse: وَعَلَيْكُمُ السَّلَام (wa 'alaykum as-salām) = And upon you peace\n\nThis is the most important Arabic greeting - used by Muslims worldwide!"
        },
        {
          title: "Common Greetings",
          content: "مَرْحَبًا (marḥaban) = Hello/Welcome\nأَهْلًا وَسَهْلًا (ahlan wa-sahlan) = Welcome\nصَبَاحُ الخَيْر (ṣabāḥ al-khayr) = Good morning\nمَسَاءُ الخَيْر (masā' al-khayr) = Good evening"
        }
      ],
      vocabulary: [
        { arabic: "السَّلَامُ عَلَيْكُمْ", transliteration: "as-salāmu 'alaykum", meaning: "Peace be upon you" },
        { arabic: "مَرْحَبًا", transliteration: "marḥaban", meaning: "Hello" },
        { arabic: "صَبَاحُ الخَيْر", transliteration: "ṣabāḥ al-khayr", meaning: "Good morning" },
        { arabic: "مَسَاءُ الخَيْر", transliteration: "masā' al-khayr", meaning: "Good evening" },
        { arabic: "كَيْفَ حَالُكَ؟", transliteration: "kayfa ḥāluka?", meaning: "How are you? (m)" }
      ]
    },
    exerciseCount: 16,
    prerequisites: ["1-28"]
  },
  {
    id: "1-30",
    phaseId: 1,
    order: 30,
    title: "Phase 1 Review & Assessment",
    titleAr: "مراجعة وتقييم المرحلة الأولى",
    description: "Comprehensive review of all Phase 1 content",
    objectives: [
      "Review all 28 letters of the Arabic alphabet",
      "Demonstrate reading fluency",
      "Apply vowel marks correctly",
      "Celebrate your achievements!"
    ],
    estimatedTime: 60,
    difficulty: "medium",
    xpReward: 100,
    content: {
      theory: [
        {
          title: "🎉 Congratulations!",
          content: "You've completed Phase 1: Foundations! You can now:\n✓ Read the Arabic alphabet\n✓ Write Arabic letters in all forms\n✓ Use vowel marks (harakat)\n✓ Read simple words and phrases\n✓ Count and greet in Arabic"
        },
        {
          title: "Skills Assessment",
          content: "This final lesson will test all your Phase 1 skills:\n• Letter recognition\n• Form identification\n• Vowel mark application\n• Reading comprehension\n• Writing accuracy"
        },
        {
          title: "Ready for Phase 2!",
          content: "In Phase 2: Building Blocks, you'll learn:\n• Basic vocabulary (100+ words)\n• Noun-adjective agreement\n• Pronouns and possessives\n• Simple sentences\n• More practical conversations"
        }
      ],
      vocabulary: ARABIC_ALPHABET.map(l => ({
        arabic: l.letter,
        transliteration: l.transliteration,
        meaning: l.name
      }))
    },
    exerciseCount: 25,
    prerequisites: ["1-29"]
  }
];
