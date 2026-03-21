/**
 * Complete Arabic curriculum data structure
 * Based on learn_arabic_v1.html and arabicmaster_enhanced_pro.html
 */

import { Phase, Lesson } from "@/types";

/**
 * Arabic alphabet data with all letters, forms, and pronunciation
 */
export const ARABIC_ALPHABET = [
  { letter: "ا", name: "Alif", transliteration: "ā / a", isolated: "ا", initial: "ا", medial: "ـا", final: "ـا", type: "long vowel" },
  { letter: "ب", name: "Bā'", transliteration: "b", isolated: "ب", initial: "بـ", medial: "ـبـ", final: "ـب", type: "sun letter" },
  { letter: "ت", name: "Tā'", transliteration: "t", isolated: "ت", initial: "تـ", medial: "ـتـ", final: "ـت", type: "sun letter" },
  { letter: "ث", name: "Thā'", transliteration: "th", isolated: "ث", initial: "ثـ", medial: "ـثـ", final: "ـث", type: "sun letter" },
  { letter: "ج", name: "Jīm", transliteration: "j", isolated: "ج", initial: "جـ", medial: "ـجـ", final: "ـج", type: "moon letter" },
  { letter: "ح", name: "Ḥā'", transliteration: "ḥ", isolated: "ح", initial: "حـ", medial: "ـحـ", final: "ـح", type: "moon letter" },
  { letter: "خ", name: "Khā'", transliteration: "kh", isolated: "خ", initial: "خـ", medial: "ـخـ", final: "ـخ", type: "moon letter" },
  { letter: "د", name: "Dāl", transliteration: "d", isolated: "د", initial: "د", medial: "ـد", final: "ـد", type: "sun letter" },
  { letter: "ذ", name: "Dhāl", transliteration: "dh", isolated: "ذ", initial: "ذ", medial: "ـذ", final: "ـذ", type: "sun letter" },
  { letter: "ر", name: "Rā'", transliteration: "r", isolated: "ر", initial: "ر", medial: "ـر", final: "ـر", type: "sun letter" },
  { letter: "ز", name: "Zāy", transliteration: "z", isolated: "ز", initial: "ز", medial: "ـز", final: "ـز", type: "sun letter" },
  { letter: "س", name: "Sīn", transliteration: "s", isolated: "س", initial: "سـ", medial: "ـسـ", final: "ـس", type: "sun letter" },
  { letter: "ش", name: "Shīn", transliteration: "sh", isolated: "ش", initial: "شـ", medial: "ـشـ", final: "ـش", type: "sun letter" },
  { letter: "ص", name: "Ṣād", transliteration: "ṣ", isolated: "ص", initial: "صـ", medial: "ـصـ", final: "ـص", type: "sun letter" },
  { letter: "ض", name: "Ḍād", transliteration: "ḍ", isolated: "ض", initial: "ضـ", medial: "ـضـ", final: "ـض", type: "sun letter" },
  { letter: "ط", name: "Ṭā'", transliteration: "ṭ", isolated: "ط", initial: "طـ", medial: "ـطـ", final: "ـط", type: "sun letter" },
  { letter: "ظ", name: "Ẓā'", transliteration: "ẓ", isolated: "ظ", initial: "ظـ", medial: "ـظـ", final: "ـظ", type: "sun letter" },
  { letter: "ع", name: "'Ayn", transliteration: "'", isolated: "ع", initial: "عـ", medial: "ـعـ", final: "ـع", type: "moon letter" },
  { letter: "غ", name: "Ghayn", transliteration: "gh", isolated: "غ", initial: "غـ", medial: "ـغـ", final: "ـغ", type: "moon letter" },
  { letter: "ف", name: "Fā'", transliteration: "f", isolated: "ف", initial: "فـ", medial: "ـفـ", final: "ـف", type: "moon letter" },
  { letter: "ق", name: "Qāf", transliteration: "q", isolated: "ق", initial: "قـ", medial: "ـقـ", final: "ـق", type: "moon letter" },
  { letter: "ك", name: "Kāf", transliteration: "k", isolated: "ك", initial: "كـ", medial: "ـكـ", final: "ـك", type: "moon letter" },
  { letter: "ل", name: "Lām", transliteration: "l", isolated: "ل", initial: "لـ", medial: "ـلـ", final: "ـل", type: "sun letter" },
  { letter: "م", name: "Mīm", transliteration: "m", isolated: "م", initial: "مـ", medial: "ـمـ", final: "ـم", type: "moon letter" },
  { letter: "ن", name: "Nūn", transliteration: "n", isolated: "ن", initial: "نـ", medial: "ـنـ", final: "ـن", type: "sun letter" },
  { letter: "ه", name: "Hā'", transliteration: "h", isolated: "ه", initial: "هـ", medial: "ـهـ", final: "ـه", type: "moon letter" },
  { letter: "و", name: "Wāw", transliteration: "w / ū", isolated: "و", initial: "و", medial: "ـو", final: "ـو", type: "moon letter" },
  { letter: "ي", name: "Yā'", transliteration: "y / ī", isolated: "ي", initial: "يـ", medial: "ـيـ", final: "ـي", type: "moon letter" },
] as const;

/**
 * Arabic diacritical marks (Harakat)
 */
export const ARABIC_HARAKAT = [
  { mark: "َ", name: "Fatḥa", nameAr: "فَتْحَة", sound: "a", description: "Short 'a' vowel, placed above the letter" },
  { mark: "ِ", name: "Kasra", nameAr: "كَسْرَة", sound: "i", description: "Short 'i' vowel, placed below the letter" },
  { mark: "ُ", name: "Ḍamma", nameAr: "ضَمَّة", sound: "u", description: "Short 'u' vowel, placed above the letter" },
  { mark: "ْ", name: "Sukūn", nameAr: "سُكُون", sound: "", description: "Indicates no vowel (consonant only)" },
  { mark: "ّ", name: "Shadda", nameAr: "شَدَّة", sound: "double", description: "Doubles the consonant (gemination)" },
  { mark: "ً", name: "Fatḥatān", nameAr: "فَتْحَتَان", sound: "an", description: "Nunation with fatḥa, used for indefinite accusative" },
  { mark: "ٍ", name: "Kasratān", nameAr: "كَسْرَتَان", sound: "in", description: "Nunation with kasra, used for indefinite genitive" },
  { mark: "ٌ", name: "Ḍammatān", nameAr: "ضَمَّتَان", sound: "un", description: "Nunation with ḍamma, used for indefinite nominative" },
] as const;

/**
 * Arabic numbers 0-10 with pronunciation
 */
export const ARABIC_NUMBERS = [
  { number: 0, arabic: "٠", word: "صِفْر", transliteration: "ṣifr" },
  { number: 1, arabic: "١", word: "وَاحِد", transliteration: "wāḥid" },
  { number: 2, arabic: "٢", word: "اِثْنَان", transliteration: "ithnān" },
  { number: 3, arabic: "٣", word: "ثَلَاثَة", transliteration: "thalātha" },
  { number: 4, arabic: "٤", word: "أَرْبَعَة", transliteration: "arba'a" },
  { number: 5, arabic: "٥", word: "خَمْسَة", transliteration: "khamsa" },
  { number: 6, arabic: "٦", word: "سِتَّة", transliteration: "sitta" },
  { number: 7, arabic: "٧", word: "سَبْعَة", transliteration: "sab'a" },
  { number: 8, arabic: "٨", word: "ثَمَانِيَة", transliteration: "thamāniya" },
  { number: 9, arabic: "٩", word: "تِسْعَة", transliteration: "tis'a" },
  { number: 10, arabic: "١٠", word: "عَشَرَة", transliteration: "'ashara" },
] as const;

/**
 * Complete curriculum structure with all 5 phases
 */
export const CURRICULUM: Phase[] = [
  {
    id: 1,
    title: "Foundations",
    titleAr: "المرحلة الأولى: الأساسيات",
    description: "Master the Arabic alphabet, vowel marks, and basic reading skills",
    descriptionAr: "إتقان الحروف العربية وعلامات التشكيل ومهارات القراءة الأساسية",
    duration: "4-6 weeks",
    color: "#c9a85c",
    icon: "✨",
    totalLessons: 4,
    lessons: [
      {
        id: "1-1",
        phaseId: 1,
        order: 1,
        title: "The 28 Arabic Letters",
        titleAr: "الحروف العربية الثمانية والعشرون",
        description: "Learn all 28 letters of the Arabic alphabet with their sounds and forms",
        objectives: [
          "Recognize all 28 Arabic letters",
          "Know the name of each letter",
          "Understand letter classification (sun/moon)",
          "Practice basic pronunciation",
        ],
        estimatedTime: 120,
        difficulty: "easy",
        xpReward: 100,
        content: {
          theory: [
            {
              title: "Introduction to Arabic Script",
              content: "Arabic is written from right to left and consists of 28 letters. Unlike English, Arabic letters change form depending on their position in a word (initial, medial, final, or isolated). Most letters connect to the following letter, creating the flowing cursive style characteristic of Arabic calligraphy.",
            },
            {
              title: "Letter Categories",
              content: "Arabic letters are divided into two categories based on how they interact with the definite article 'al' (الـ): Sun Letters (الحروف الشمسية) cause the 'l' in 'al' to assimilate, while Moon Letters (الحروف القمرية) preserve the 'l' sound.",
            },
            {
              title: "Letter Forms",
              content: "Each Arabic letter has up to four forms: Isolated (when standing alone), Initial (at the beginning of a word), Medial (in the middle), and Final (at the end). Six letters (ا, د, ذ, ر, ز, و) never connect to the following letter.",
            },
          ],
          vocabulary: ARABIC_ALPHABET.slice(0, 14).map((l) => ({
            arabic: l.letter,
            transliteration: l.transliteration,
            meaning: l.name,
          })),
        },
        exerciseCount: 28,
        prerequisites: [],
      },
      {
        id: "1-2",
        phaseId: 1,
        order: 2,
        title: "Vowel Marks & Diacritics (Harakat)",
        titleAr: "الحركات وعلامات التشكيل",
        description: "Master the essential diacritical marks that indicate vowel sounds",
        objectives: [
          "Identify all harakat (vowel marks)",
          "Pronounce short vowels correctly",
          "Understand tanwin (nunation)",
          "Read letters with diacritics",
        ],
        estimatedTime: 90,
        difficulty: "easy",
        xpReward: 100,
        content: {
          theory: [
            {
              title: "What are Harakat?",
              content: "Harakat (حَرَكَات) are diacritical marks placed above or below Arabic letters to indicate short vowels. In classical and Quranic texts, these marks are always written. In modern Arabic, they are often omitted, and readers must infer the correct vowels from context.",
            },
            {
              title: "The Three Short Vowels",
              content: "Fatḥa (فَتْحَة) - a small diagonal line above the letter, producing an 'a' sound. Kasra (كَسْرَة) - a small diagonal line below the letter, producing an 'i' sound. Ḍamma (ضَمَّة) - a small و-shaped mark above the letter, producing a 'u' sound.",
            },
            {
              title: "Sukūn and Shadda",
              content: "Sukūn (سُكُون) - a small circle above the letter indicating no vowel follows (consonant only). Shadda (شَدَّة) - a small ع-shaped mark that doubles the consonant, indicating gemination.",
            },
            {
              title: "Tanwin (Nunation)",
              content: "Tanwin adds an 'n' sound to the end of indefinite nouns. There are three forms: Fatḥatān (-an), Kasratān (-in), and Ḍammatān (-un). Fatḥatān is usually written with an alif seat (ـًا).",
            },
          ],
          vocabulary: ARABIC_HARAKAT.map((h) => ({
            arabic: h.nameAr,
            transliteration: h.name.toLowerCase(),
            meaning: h.description,
          })),
        },
        exerciseCount: 24,
        prerequisites: ["1-1"],
      },
      {
        id: "1-3",
        phaseId: 1,
        order: 3,
        title: "Letter Connections & Word Formation",
        titleAr: "وصل الحروف وتكوين الكلمات",
        description: "Learn how letters connect to form words in Arabic script",
        objectives: [
          "Connect letters smoothly",
          "Read simple Arabic words",
          "Identify letter positions",
          "Practice writing connected letters",
        ],
        estimatedTime: 120,
        difficulty: "medium",
        xpReward: 150,
        content: {
          theory: [
            {
              title: "Connection Rules",
              content: "Most Arabic letters connect to both the preceding and following letters. However, six letters (ا, د, ذ, ر, ز, و) never connect to the following letter - they always end a connection. When these letters appear in the middle of a word, a new connection begins after them.",
            },
            {
              title: "Reading Practice",
              content: "Start by reading simple three-letter words. Arabic words are built on roots, typically three consonants that carry the core meaning. Vowels and additional letters modify this basic meaning.",
            },
            {
              title: "Common Patterns",
              content: "Recognizing common word patterns helps reading speed. The pattern فَعَلَ (fa'ala) represents basic verbs, while فَاعِل (fā'il) represents the doer of an action. These patterns recur throughout Arabic vocabulary.",
            },
          ],
          vocabulary: [
            { arabic: "كَتَبَ", transliteration: "kataba", meaning: "he wrote" },
            { arabic: "بَاب", transliteration: "bāb", meaning: "door" },
            { arabic: "كِتَاب", transliteration: "kitāb", meaning: "book" },
            { arabic: "قَلَم", transliteration: "qalam", meaning: "pen" },
            { arabic: "بَيْت", transliteration: "bayt", meaning: "house" },
            { arabic: "مَاء", transliteration: "māʼ", meaning: "water" },
          ],
        },
        exerciseCount: 30,
        prerequisites: ["1-1", "1-2"],
      },
      {
        id: "1-4",
        phaseId: 1,
        order: 4,
        title: "Numbers 0-100",
        titleAr: "الأرقام من صفر إلى مائة",
        description: "Learn Arabic numerals and how to count in Arabic",
        objectives: [
          "Read Arabic-Indic numerals",
          "Count from 0 to 100",
          "Use numbers in context",
          "Understand number agreement",
        ],
        estimatedTime: 60,
        difficulty: "easy",
        xpReward: 75,
        content: {
          theory: [
            {
              title: "Arabic-Indic Numerals",
              content: "Arabic uses two numeral systems: Western Arabic numerals (0-9, used globally) and Eastern Arabic-Indic numerals (٠-٩, used in Arab countries). Despite reading text right-to-left, numbers are read left-to-right.",
            },
            {
              title: "Numbers 1-10",
              content: "The numbers 1-10 form the foundation for counting. Numbers 3-10 have a unique grammatical feature: they take the opposite gender of the noun they count (feminine number with masculine noun, and vice versa).",
            },
            {
              title: "Tens and Hundreds",
              content: "Tens (20, 30, etc.) end in -ūn/-īn. Compound numbers like 21 are expressed as 'one and twenty' (وَاحِد وَعِشْرُون). 100 is مِئَة (mi'a) and is usually written مائة.",
            },
          ],
          vocabulary: ARABIC_NUMBERS.map((n) => ({
            arabic: n.word,
            transliteration: n.transliteration,
            meaning: n.number.toString(),
          })),
        },
        exerciseCount: 20,
        prerequisites: ["1-1"],
      },
    ],
  },
  {
    id: 2,
    title: "Beginner",
    titleAr: "المرحلة الثانية: المبتدئ",
    description: "Build essential vocabulary and understand basic grammar structures",
    descriptionAr: "بناء المفردات الأساسية وفهم الهياكل النحوية الأساسية",
    duration: "2-3 months",
    color: "#4a6741",
    icon: "🌱",
    totalLessons: 8,
    lessons: [
      {
        id: "2-1",
        phaseId: 2,
        order: 1,
        title: "Greetings & Polite Expressions",
        titleAr: "التحيات والعبارات المهذبة",
        description: "Learn essential Arabic greetings and everyday polite expressions",
        objectives: [
          "Greet people formally and informally",
          "Introduce yourself",
          "Use common courtesy phrases",
          "Respond appropriately to greetings",
        ],
        estimatedTime: 45,
        difficulty: "easy",
        xpReward: 75,
        content: {
          theory: [
            {
              title: "Islamic Greetings",
              content: "The most common Arabic greeting is 'As-salāmu ʿalaykum' (السَّلَامُ عَلَيْكُم) meaning 'Peace be upon you.' The response is 'Wa ʿalaykum as-salām' (وَعَلَيْكُم السَّلَام) 'And upon you peace.'",
            },
            {
              title: "Time-based Greetings",
              content: "صَبَاح الخَيْر (ṣabāḥ al-khayr) - Good morning. مَسَاء الخَيْر (masāʼ al-khayr) - Good evening. تُصْبِح عَلَى خَيْر (tuṣbiḥ ʿalā khayr) - Good night.",
            },
          ],
          vocabulary: [
            { arabic: "السَّلَامُ عَلَيْكُم", transliteration: "as-salāmu ʿalaykum", meaning: "Peace be upon you" },
            { arabic: "مَرْحَبًا", transliteration: "marḥaban", meaning: "Hello/Welcome" },
            { arabic: "أَهْلًا وَسَهْلًا", transliteration: "ahlan wa sahlan", meaning: "Welcome" },
            { arabic: "شُكْرًا", transliteration: "shukran", meaning: "Thank you" },
            { arabic: "عَفْوًا", transliteration: "ʿafwan", meaning: "You're welcome / Excuse me" },
            { arabic: "مِنْ فَضْلِك", transliteration: "min faḍlik", meaning: "Please (to male)" },
            { arabic: "مَعَ السَّلَامَة", transliteration: "maʿa as-salāma", meaning: "Goodbye" },
            { arabic: "إِلَى اللِّقَاء", transliteration: "ilā al-liqāʼ", meaning: "See you later" },
          ],
        },
        exerciseCount: 15,
        prerequisites: ["1-3"],
      },
      {
        id: "2-2",
        phaseId: 2,
        order: 2,
        title: "Family & Relationships",
        titleAr: "العائلة والعلاقات",
        description: "Learn vocabulary for family members and relationships",
        objectives: [
          "Name family members",
          "Describe relationships",
          "Ask about someone's family",
          "Use possessive constructions",
        ],
        estimatedTime: 60,
        difficulty: "easy",
        xpReward: 100,
        content: {
          theory: [
            {
              title: "Family Terms",
              content: "Arabic has specific terms for family relationships. Unlike English, there are different words for paternal and maternal relatives. For example, عَمّ (ʿamm) is paternal uncle while خَال (khāl) is maternal uncle.",
            },
          ],
          vocabulary: [
            { arabic: "أَب / وَالِد", transliteration: "ab / wālid", meaning: "father" },
            { arabic: "أُمّ / وَالِدَة", transliteration: "umm / wālida", meaning: "mother" },
            { arabic: "أَخ", transliteration: "akh", meaning: "brother" },
            { arabic: "أُخْت", transliteration: "ukht", meaning: "sister" },
            { arabic: "جَدّ", transliteration: "jadd", meaning: "grandfather" },
            { arabic: "جَدَّة", transliteration: "jadda", meaning: "grandmother" },
            { arabic: "اِبْن", transliteration: "ibn", meaning: "son" },
            { arabic: "بِنْت", transliteration: "bint", meaning: "daughter" },
            { arabic: "عَائِلَة", transliteration: "ʿāʼila", meaning: "family" },
            { arabic: "زَوْج", transliteration: "zawj", meaning: "husband" },
            { arabic: "زَوْجَة", transliteration: "zawja", meaning: "wife" },
          ],
        },
        exerciseCount: 20,
        prerequisites: ["2-1"],
      },
      {
        id: "2-3",
        phaseId: 2,
        order: 3,
        title: "Colors, Body Parts & House",
        titleAr: "الألوان وأعضاء الجسم والبيت",
        description: "Expand vocabulary with colors, body parts, and house items",
        objectives: [
          "Name common colors",
          "Identify body parts",
          "Describe house and rooms",
          "Use adjectives with nouns",
        ],
        estimatedTime: 90,
        difficulty: "easy",
        xpReward: 125,
        content: {
          theory: [
            {
              title: "Arabic Colors",
              content: "Color words in Arabic follow special patterns. Most colors follow the pattern أَفْعَل (afʿal) for masculine and فَعْلَاء (faʿlāʼ) for feminine. For example: أَحْمَر/حَمْرَاء (red).",
            },
          ],
          vocabulary: [
            { arabic: "أَبْيَض", transliteration: "abyaḍ", meaning: "white" },
            { arabic: "أَسْوَد", transliteration: "aswad", meaning: "black" },
            { arabic: "أَحْمَر", transliteration: "aḥmar", meaning: "red" },
            { arabic: "أَزْرَق", transliteration: "azraq", meaning: "blue" },
            { arabic: "أَخْضَر", transliteration: "akhḍar", meaning: "green" },
            { arabic: "رَأْس", transliteration: "raʼs", meaning: "head" },
            { arabic: "عَيْن", transliteration: "ʿayn", meaning: "eye" },
            { arabic: "يَد", transliteration: "yad", meaning: "hand" },
            { arabic: "غُرْفَة", transliteration: "ghurfa", meaning: "room" },
            { arabic: "مَطْبَخ", transliteration: "maṭbakh", meaning: "kitchen" },
          ],
        },
        exerciseCount: 30,
        prerequisites: ["2-1"],
      },
      {
        id: "2-4",
        phaseId: 2,
        order: 4,
        title: "Food, Days & Months",
        titleAr: "الطعام والأيام والأشهر",
        description: "Learn vocabulary for food, days of the week, and months",
        objectives: [
          "Name common foods",
          "Know days of the week",
          "Learn month names",
          "Order food in Arabic",
        ],
        estimatedTime: 60,
        difficulty: "easy",
        xpReward: 100,
        content: {
          theory: [
            {
              title: "Days of the Week",
              content: "Arabic week starts with Sunday (الأَحَد). Most day names are based on numbers: الاِثْنَيْن (Monday, 'the second'), الثُّلَاثَاء (Tuesday, 'the third'), etc.",
            },
          ],
          vocabulary: [
            { arabic: "خُبْز", transliteration: "khubz", meaning: "bread" },
            { arabic: "مَاء", transliteration: "māʼ", meaning: "water" },
            { arabic: "لَحْم", transliteration: "laḥm", meaning: "meat" },
            { arabic: "الأَحَد", transliteration: "al-aḥad", meaning: "Sunday" },
            { arabic: "الاِثْنَيْن", transliteration: "al-ithnayn", meaning: "Monday" },
            { arabic: "يَنَايِر", transliteration: "yanāyir", meaning: "January" },
          ],
        },
        exerciseCount: 25,
        prerequisites: ["2-1"],
      },
      {
        id: "2-5",
        phaseId: 2,
        order: 5,
        title: "Personal Pronouns & Possessives",
        titleAr: "الضمائر الشخصية والملكية",
        description: "Master Arabic pronouns and possessive constructions",
        objectives: [
          "Use all personal pronouns",
          "Form possessive phrases",
          "Attach possessive suffixes",
          "Distinguish formal/informal address",
        ],
        estimatedTime: 90,
        difficulty: "medium",
        xpReward: 150,
        content: {
          theory: [
            {
              title: "Personal Pronouns",
              content: "Arabic has separate pronouns for masculine and feminine in 2nd and 3rd person. The dual form (for two people) exists alongside singular and plural.",
            },
            {
              title: "Possessive Suffixes",
              content: "Possession is shown by attaching suffixes to nouns: كِتَابِي (my book), كِتَابُكَ (your book - m.), كِتَابُهَا (her book).",
            },
          ],
          vocabulary: [
            { arabic: "أَنَا", transliteration: "anā", meaning: "I" },
            { arabic: "أَنْتَ", transliteration: "anta", meaning: "you (m.)" },
            { arabic: "أَنْتِ", transliteration: "anti", meaning: "you (f.)" },
            { arabic: "هُوَ", transliteration: "huwa", meaning: "he" },
            { arabic: "هِيَ", transliteration: "hiya", meaning: "she" },
            { arabic: "نَحْنُ", transliteration: "naḥnu", meaning: "we" },
            { arabic: "هُمْ", transliteration: "hum", meaning: "they (m.)" },
          ],
        },
        exerciseCount: 25,
        prerequisites: ["2-2"],
      },
      {
        id: "2-6",
        phaseId: 2,
        order: 6,
        title: "Nominal Sentences (المبتدأ والخبر)",
        titleAr: "الجملة الاسمية: المبتدأ والخبر",
        description: "Understand the structure of Arabic nominal sentences",
        objectives: [
          "Identify subject (mubtadaʼ)",
          "Identify predicate (khabar)",
          "Form simple nominal sentences",
          "Use demonstratives",
        ],
        estimatedTime: 120,
        difficulty: "medium",
        xpReward: 200,
        content: {
          theory: [
            {
              title: "Nominal Sentences",
              content: "Arabic has two main sentence types. The nominal sentence (الجُمْلَة الاِسْمِيَّة) begins with a noun or pronoun. It consists of mubtadaʼ (subject) and khabar (predicate). No verb 'to be' is needed in present tense.",
            },
            {
              title: "Examples",
              content: "البَيْتُ كَبِيرٌ (al-baytu kabīrun) - The house is big. الوَلَدُ ذَكِيٌّ (al-waladu dhakiyyun) - The boy is smart. The subject takes nominative case (ḍamma) and the predicate matches in case.",
            },
          ],
          vocabulary: [
            { arabic: "هٰذَا", transliteration: "hādhā", meaning: "this (m.)" },
            { arabic: "هٰذِهِ", transliteration: "hādhihi", meaning: "this (f.)" },
            { arabic: "ذٰلِكَ", transliteration: "dhālika", meaning: "that (m.)" },
            { arabic: "كَبِير", transliteration: "kabīr", meaning: "big" },
            { arabic: "صَغِير", transliteration: "ṣaghīr", meaning: "small" },
            { arabic: "جَمِيل", transliteration: "jamīl", meaning: "beautiful" },
          ],
        },
        exerciseCount: 30,
        prerequisites: ["2-5"],
      },
      {
        id: "2-7",
        phaseId: 2,
        order: 7,
        title: "Gender & Number Agreement",
        titleAr: "المطابقة في الجنس والعدد",
        description: "Master agreement rules between nouns and adjectives",
        objectives: [
          "Identify masculine/feminine nouns",
          "Form feminine adjectives",
          "Apply plural rules",
          "Match adjectives correctly",
        ],
        estimatedTime: 90,
        difficulty: "medium",
        xpReward: 175,
        content: {
          theory: [
            {
              title: "Gender in Arabic",
              content: "Most feminine nouns end in tāʼ marbūṭa (ة). Adjectives must match nouns in gender: وَلَدٌ طَوِيلٌ (a tall boy) vs بِنْتٌ طَوِيلَةٌ (a tall girl).",
            },
            {
              title: "Plural Forms",
              content: "Arabic has three number categories: singular, dual, and plural. Sound plurals add suffixes (-ūn/-īn for m., -āt for f.). Broken plurals change the internal structure of the word.",
            },
          ],
          vocabulary: [
            { arabic: "مُعَلِّم", transliteration: "muʿallim", meaning: "teacher (m.)" },
            { arabic: "مُعَلِّمَة", transliteration: "muʿallima", meaning: "teacher (f.)" },
            { arabic: "مُعَلِّمُون", transliteration: "muʿallimūn", meaning: "teachers (m.)" },
            { arabic: "طَالِب", transliteration: "ṭālib", meaning: "student (m.)" },
            { arabic: "طَالِبَة", transliteration: "ṭāliba", meaning: "student (f.)" },
          ],
        },
        exerciseCount: 35,
        prerequisites: ["2-6"],
      },
      {
        id: "2-8",
        phaseId: 2,
        order: 8,
        title: "Verbal Sentences Introduction",
        titleAr: "مقدمة في الجملة الفعلية",
        description: "Learn the basics of Arabic verb sentences and conjugation",
        objectives: [
          "Understand verb sentence structure",
          "Conjugate basic verbs",
          "Use past tense verbs",
          "Form simple verb sentences",
        ],
        estimatedTime: 150,
        difficulty: "medium",
        xpReward: 250,
        content: {
          theory: [
            {
              title: "Verbal Sentences",
              content: "The verbal sentence (الجُمْلَة الفِعْلِيَّة) begins with a verb. Standard word order is Verb-Subject-Object (VSO). The verb conjugates to match the subject in person, gender, and number.",
            },
            {
              title: "Past Tense (الماضي)",
              content: "The past tense is formed from the base form (3rd person masculine singular). Suffixes indicate person, gender, and number: كَتَبَ (he wrote), كَتَبَتْ (she wrote), كَتَبْتُ (I wrote).",
            },
          ],
          vocabulary: [
            { arabic: "كَتَبَ", transliteration: "kataba", meaning: "he wrote" },
            { arabic: "قَرَأَ", transliteration: "qaraʼa", meaning: "he read" },
            { arabic: "ذَهَبَ", transliteration: "dhahaba", meaning: "he went" },
            { arabic: "أَكَلَ", transliteration: "akala", meaning: "he ate" },
            { arabic: "شَرِبَ", transliteration: "shariba", meaning: "he drank" },
            { arabic: "فَعَلَ", transliteration: "faʿala", meaning: "he did" },
          ],
        },
        exerciseCount: 40,
        prerequisites: ["2-6", "2-7"],
      },
    ],
  },
  {
    id: 3,
    title: "Intermediate",
    titleAr: "المرحلة الثالثة: المتوسط",
    description: "Deepen grammar knowledge and expand to complex structures",
    descriptionAr: "تعميق المعرفة النحوية والتوسع في الهياكل المعقدة",
    duration: "4-6 months",
    color: "#2c6e6a",
    icon: "📚",
    totalLessons: 7,
    lessons: [
      {
        id: "3-1",
        phaseId: 3,
        order: 1,
        title: "Declension (الإعراب)",
        titleAr: "الإعراب",
        description: "Master the Arabic case system and grammatical endings",
        objectives: [
          "Understand the three cases",
          "Identify case markers",
          "Apply case rules to nouns",
          "Recognize case in context",
        ],
        estimatedTime: 180,
        difficulty: "medium",
        xpReward: 300,
        content: {
          theory: [
            {
              title: "The Case System",
              content: "Arabic nouns have three grammatical cases: Nominative (مَرْفُوع) - marked by ḍamma, for subjects. Accusative (مَنْصُوب) - marked by fatḥa, for objects. Genitive (مَجْرُور) - marked by kasra, after prepositions.",
            },
          ],
          vocabulary: [],
        },
        exerciseCount: 45,
        prerequisites: ["2-8"],
      },
      {
        id: "3-2",
        phaseId: 3,
        order: 2,
        title: "Weak Verbs (الأفعال المعتلة)",
        titleAr: "الأفعال المعتلة",
        description: "Learn verbs with weak letters (و، ي، ا) and their conjugations",
        objectives: [
          "Identify weak verb types",
          "Conjugate hollow verbs",
          "Conjugate defective verbs",
          "Handle assimilated verbs",
        ],
        estimatedTime: 150,
        difficulty: "hard",
        xpReward: 350,
        content: {
          theory: [
            {
              title: "Weak Letters",
              content: "Verbs containing و, ي, or ا in their root are called weak verbs. They undergo sound changes during conjugation. Types: Assimilated (first radical), Hollow (second radical), Defective (third radical).",
            },
          ],
          vocabulary: [
            { arabic: "قَالَ", transliteration: "qāla", meaning: "he said" },
            { arabic: "نَامَ", transliteration: "nāma", meaning: "he slept" },
            { arabic: "مَشَى", transliteration: "mashā", meaning: "he walked" },
          ],
        },
        exerciseCount: 40,
        prerequisites: ["3-1"],
      },
      {
        id: "3-3",
        phaseId: 3,
        order: 3,
        title: "Derived Verb Forms (II-X)",
        titleAr: "الأفعال المزيدة",
        description: "Master the ten Arabic verb forms and their meanings",
        objectives: [
          "Recognize all verb forms",
          "Understand form meanings",
          "Derive verbs from roots",
          "Use forms appropriately",
        ],
        estimatedTime: 200,
        difficulty: "hard",
        xpReward: 400,
        content: {
          theory: [
            {
              title: "The Form System",
              content: "Arabic has 10 verb forms (I-X). Each form adds specific meaning: Form II (فَعَّلَ) - intensive/causative, Form III (فَاعَلَ) - reciprocal, Form V (تَفَعَّلَ) - reflexive of II, etc.",
            },
          ],
          vocabulary: [],
        },
        exerciseCount: 50,
        prerequisites: ["3-2"],
      },
      {
        id: "3-4",
        phaseId: 3,
        order: 4,
        title: "Passive Voice (المبني للمجهول)",
        titleAr: "المبني للمجهول",
        description: "Learn to form and use the passive voice in Arabic",
        objectives: [
          "Form passive verbs",
          "Convert active to passive",
          "Identify passive in text",
          "Use passive appropriately",
        ],
        estimatedTime: 90,
        difficulty: "medium",
        xpReward: 200,
        content: {
          theory: [
            {
              title: "Passive Formation",
              content: "The passive is formed by changing vowel patterns. Past: كُتِبَ (it was written) from كَتَبَ. Present: يُكْتَبُ (it is being written) from يَكْتُبُ.",
            },
          ],
          vocabulary: [],
        },
        exerciseCount: 30,
        prerequisites: ["3-1"],
      },
      {
        id: "3-5",
        phaseId: 3,
        order: 5,
        title: "Verbal Nouns (المصادر)",
        titleAr: "المصادر",
        description: "Learn verbal noun patterns for all verb forms",
        objectives: [
          "Form verbal nouns",
          "Use verbal nouns correctly",
          "Recognize common patterns",
          "Expand vocabulary via patterns",
        ],
        estimatedTime: 120,
        difficulty: "medium",
        xpReward: 250,
        content: {
          theory: [
            {
              title: "Verbal Nouns",
              content: "Each verb form has associated verbal noun (maṣdar) patterns. Form I has many patterns, while Forms II-X have predictable patterns. مَصْدَر expresses the action as a noun.",
            },
          ],
          vocabulary: [
            { arabic: "كِتَابَة", transliteration: "kitāba", meaning: "writing" },
            { arabic: "قِرَاءَة", transliteration: "qirāʼa", meaning: "reading" },
          ],
        },
        exerciseCount: 35,
        prerequisites: ["3-3"],
      },
      {
        id: "3-6",
        phaseId: 3,
        order: 6,
        title: "Construct State (الإضافة)",
        titleAr: "الإضافة",
        description: "Master the iḍāfa construction for possession and description",
        objectives: [
          "Form iḍāfa phrases",
          "Chain multiple nouns",
          "Use adjectives with iḍāfa",
          "Distinguish iḍāfa types",
        ],
        estimatedTime: 90,
        difficulty: "medium",
        xpReward: 200,
        content: {
          theory: [
            {
              title: "Iḍāfa Construction",
              content: "Iḍāfa links two nouns: the first (muḍāf) is indefinite and loses tanwin, the second (muḍāf ilayhi) is in genitive case. Example: كِتَابُ الطَّالِبِ (the student's book).",
            },
          ],
          vocabulary: [],
        },
        exerciseCount: 30,
        prerequisites: ["3-1"],
      },
      {
        id: "3-7",
        phaseId: 3,
        order: 7,
        title: "Negation Particles",
        titleAr: "أدوات النفي",
        description: "Learn all Arabic negation particles and their usage",
        objectives: [
          "Use لا, ما, لَنْ, لَمْ, لَيْسَ",
          "Negate different tenses",
          "Negate nominal sentences",
          "Understand لا النافية للجنس",
        ],
        estimatedTime: 90,
        difficulty: "medium",
        xpReward: 200,
        content: {
          theory: [
            {
              title: "Negation Particles",
              content: "Different particles negate different tenses: لَمْ + jussive (past), لا + present (general), لَنْ + subjunctive (future), مَا (various), لَيْسَ (nominal sentences).",
            },
          ],
          vocabulary: [],
        },
        exerciseCount: 30,
        prerequisites: ["3-4"],
      },
    ],
  },
  {
    id: 4,
    title: "Advanced",
    titleAr: "المرحلة الرابعة: المتقدم",
    description: "Master complex grammar, rhetoric, and media language",
    descriptionAr: "إتقان النحو المتقدم والبلاغة ولغة الإعلام",
    duration: "6-12 months",
    color: "#8b6914",
    icon: "🎯",
    totalLessons: 5,
    lessons: [
      {
        id: "4-1",
        phaseId: 4,
        order: 1,
        title: "Arabic Rhetoric (البلاغة)",
        titleAr: "البلاغة العربية",
        description: "Explore Arabic rhetorical devices and eloquence",
        objectives: [
          "Understand balāgha basics",
          "Identify metaphors (استعارة)",
          "Recognize similes (تشبيه)",
          "Analyze rhetorical questions",
        ],
        estimatedTime: 180,
        difficulty: "hard",
        xpReward: 400,
        content: {
          theory: [],
          vocabulary: [],
        },
        exerciseCount: 30,
        prerequisites: ["3-7"],
      },
      {
        id: "4-2",
        phaseId: 4,
        order: 2,
        title: "Media Language",
        titleAr: "لغة الإعلام",
        description: "Learn vocabulary and structures used in Arabic media",
        objectives: [
          "Understand news Arabic",
          "Learn political vocabulary",
          "Read newspaper articles",
          "Listen to news broadcasts",
        ],
        estimatedTime: 150,
        difficulty: "hard",
        xpReward: 350,
        content: {
          theory: [],
          vocabulary: [],
        },
        exerciseCount: 35,
        prerequisites: ["3-7"],
      },
      {
        id: "4-3",
        phaseId: 4,
        order: 3,
        title: "Complex Subordinate Clauses",
        titleAr: "الجمل الشرطية والموصولة",
        description: "Master conditional sentences and relative clauses",
        objectives: [
          "Form conditional sentences",
          "Use إِذَا، لَوْ، إِنْ",
          "Build relative clauses",
          "Combine complex structures",
        ],
        estimatedTime: 150,
        difficulty: "hard",
        xpReward: 350,
        content: {
          theory: [],
          vocabulary: [],
        },
        exerciseCount: 40,
        prerequisites: ["3-7"],
      },
      {
        id: "4-4",
        phaseId: 4,
        order: 4,
        title: "Quranic Text Analysis",
        titleAr: "تحليل النص القرآني",
        description: "Learn to read and analyze Quranic Arabic",
        objectives: [
          "Read Quranic text",
          "Understand classical features",
          "Analyze grammatical structures",
          "Appreciate rhetorical beauty",
        ],
        estimatedTime: 200,
        difficulty: "hard",
        xpReward: 500,
        content: {
          theory: [],
          vocabulary: [],
        },
        exerciseCount: 25,
        prerequisites: ["4-1"],
      },
      {
        id: "4-5",
        phaseId: 4,
        order: 5,
        title: "Classical Poetry Introduction",
        titleAr: "مدخل إلى الشعر العربي",
        description: "Explore classical Arabic poetry and meter",
        objectives: [
          "Understand Arabic meter",
          "Read classical poems",
          "Identify poetic devices",
          "Appreciate Arabic poetry",
        ],
        estimatedTime: 150,
        difficulty: "hard",
        xpReward: 400,
        content: {
          theory: [],
          vocabulary: [],
        },
        exerciseCount: 20,
        prerequisites: ["4-1"],
      },
    ],
  },
  {
    id: 5,
    title: "Expert",
    titleAr: "المرحلة الخامسة: الخبير",
    description: "Achieve mastery in classical literature, academic writing, and translation",
    descriptionAr: "تحقيق الإتقان في الأدب الكلاسيكي والكتابة الأكاديمية والترجمة",
    duration: "12-24 months",
    color: "#8b3a2a",
    icon: "👑",
    totalLessons: 4,
    lessons: [
      {
        id: "5-1",
        phaseId: 5,
        order: 1,
        title: "Classical Literature",
        titleAr: "الأدب الكلاسيكي",
        description: "Study masterpieces of classical Arabic literature",
        objectives: [
          "Read classical texts",
          "Understand historical context",
          "Analyze literary style",
          "Compare literary periods",
        ],
        estimatedTime: 300,
        difficulty: "hard",
        xpReward: 600,
        content: {
          theory: [],
          vocabulary: [],
        },
        exerciseCount: 30,
        prerequisites: ["4-4", "4-5"],
      },
      {
        id: "5-2",
        phaseId: 5,
        order: 2,
        title: "Academic Writing",
        titleAr: "الكتابة الأكاديمية",
        description: "Master formal academic writing in Arabic",
        objectives: [
          "Write research papers",
          "Use academic vocabulary",
          "Structure arguments",
          "Cite sources properly",
        ],
        estimatedTime: 200,
        difficulty: "hard",
        xpReward: 500,
        content: {
          theory: [],
          vocabulary: [],
        },
        exerciseCount: 25,
        prerequisites: ["4-2"],
      },
      {
        id: "5-3",
        phaseId: 5,
        order: 3,
        title: "Translation Skills",
        titleAr: "مهارات الترجمة",
        description: "Develop professional Arabic-English translation skills",
        objectives: [
          "Translate accurately",
          "Handle cultural nuances",
          "Use translation tools",
          "Maintain register",
        ],
        estimatedTime: 250,
        difficulty: "hard",
        xpReward: 550,
        content: {
          theory: [],
          vocabulary: [],
        },
        exerciseCount: 40,
        prerequisites: ["5-1"],
      },
      {
        id: "5-4",
        phaseId: 5,
        order: 4,
        title: "Dialectal Awareness",
        titleAr: "الوعي باللهجات",
        description: "Understand major Arabic dialects and their features",
        objectives: [
          "Identify major dialects",
          "Understand dialect features",
          "Compare MSA and dialects",
          "Communicate effectively",
        ],
        estimatedTime: 180,
        difficulty: "medium",
        xpReward: 400,
        content: {
          theory: [],
          vocabulary: [],
        },
        exerciseCount: 30,
        prerequisites: ["4-2"],
      },
    ],
  },
];

/**
 * Get a phase by ID
 */
export function getPhase(phaseId: number): Phase | undefined {
  return CURRICULUM.find((p) => p.id === phaseId);
}

/**
 * Get a lesson by ID
 */
export function getLesson(lessonId: string): Lesson | undefined {
  for (const phase of CURRICULUM) {
    const lesson = phase.lessons.find((l) => l.id === lessonId);
    if (lesson) return lesson;
  }
  return undefined;
}

/**
 * Get all lessons for a phase
 */
export function getPhaseLessons(phaseId: number): Lesson[] {
  const phase = getPhase(phaseId);
  return phase?.lessons || [];
}

/**
 * Get total lessons count
 */
export function getTotalLessons(): number {
  return CURRICULUM.reduce((sum, phase) => sum + phase.lessons.length, 0);
}

/**
 * Get total exercises count
 */
export function getTotalExercises(): number {
  return CURRICULUM.reduce(
    (sum, phase) =>
      sum + phase.lessons.reduce((s, l) => s + l.exerciseCount, 0),
    0
  );
}
