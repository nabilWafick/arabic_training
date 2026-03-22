/**
 * Phase 5: Mastery (30 Lessons)
 * Achieve native-like fluency in reading, writing, and understanding
 */

import type { Lesson } from "@/types";

export const PHASE_5_LESSONS: Lesson[] = [
  // SECTION 1: CLASSICAL ARABIC (Lessons 1-6)
  {
    id: "5-1", phaseId: 5, order: 1,
    title: "Classical Arabic Style",
    titleAr: "أسلوب العربية الكلاسيكية",
    description: "Master the distinctive features of classical Arabic",
    objectives: ["Recognize classical style markers", "Read pre-modern texts", "Understand archaic forms", "Appreciate linguistic beauty"],
    estimatedTime: 55, difficulty: "hard", xpReward: 85,
    content: {
      theory: [
        { title: "Classical Features", content: "Full case endings (i'rab) consistently used\nClassical vocabulary (rare in modern Arabic)\nComplex sentence structures\nRhetorical devices (بديع)" },
        { title: "Archaic Forms", content: "إِذْ for past time (when)\nلَمَّا meaning 'when' (not 'not yet')\nقَدْ for emphasis\nOath formulas: وَاللهِ، تَاللهِ" },
        { title: "Reading Classical Texts", content: "Start with voweled texts\nUse classical dictionaries: لِسَان العَرَب\nStudy تَفْسِير for Quran\nPractice إِعْرَاب (parsing)" }
      ],
      vocabulary: [
        { arabic: "فُصْحَى", transliteration: "fuṣḥā", meaning: "classical Arabic" },
        { arabic: "عَامِّيَّة", transliteration: "'āmmiyya", meaning: "colloquial Arabic" },
        { arabic: "نَحْو", transliteration: "naḥw", meaning: "grammar" },
        { arabic: "صَرْف", transliteration: "ṣarf", meaning: "morphology" },
        { arabic: "بَلَاغَة", transliteration: "balāgha", meaning: "rhetoric" }
      ]
    },
    exerciseCount: 18, prerequisites: []
  },
  {
    id: "5-2", phaseId: 5, order: 2,
    title: "Quranic Arabic Features",
    titleAr: "خصائص لغة القرآن",
    description: "Study the unique linguistic features of Quranic Arabic",
    objectives: ["Recognize Quranic style", "Understand unique vocabulary", "Appreciate rhetorical beauty", "Read with understanding"],
    estimatedTime: 55, difficulty: "hard", xpReward: 85,
    content: {
      theory: [
        { title: "Unique Vocabulary", content: "Some words have specific Quranic meanings:\nكَافِر - disbeliever (vs. farmer)\nصَلَاة - ritual prayer (vs. supplication)\nسَبِيل - way/path (often religious)" },
        { title: "Stylistic Features", content: "Ring composition (مُعَاقَبَة)\nParallelism (مُقَابَلَة)\nRepetition for emphasis\nRhythmic prose (سَجْع)" },
        { title: "Grammar Variations", content: "Some grammatical forms unique to Quran\nInfluence on all later Arabic\nFoundation of فُصْحَى standards" }
      ],
      vocabulary: [
        { arabic: "تِلَاوَة", transliteration: "tilāwa", meaning: "recitation" },
        { arabic: "تَرْتِيل", transliteration: "tartīl", meaning: "measured recitation" },
        { arabic: "آيَة", transliteration: "āya", meaning: "verse/sign" },
        { arabic: "سُورَة", transliteration: "sūra", meaning: "chapter" },
        { arabic: "جُزْء", transliteration: "juz'", meaning: "part (1/30 of Quran)" }
      ]
    },
    exerciseCount: 18, prerequisites: ["5-1"]
  },
  {
    id: "5-3", phaseId: 5, order: 3,
    title: "Hadith Literature",
    titleAr: "الأحاديث النبوية",
    description: "Introduction to Prophetic traditions",
    objectives: ["Understand hadith structure", "Learn key terminology", "Read basic hadiths", "Appreciate historical significance"],
    estimatedTime: 55, difficulty: "hard", xpReward: 85,
    content: {
      theory: [
        { title: "Hadith Structure", content: "سَنَد (chain of narration) + مَتْن (text)\nExample: قَالَ رَسُولُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ:\n'The Prophet said...'" },
        { title: "Major Collections", content: "صَحِيح البُخَارِيّ - most authentic\nصَحِيح مُسْلِم\nسُنَن أَبِي دَاوُد\nجَامِع التِّرْمِذِيّ" },
        { title: "Key Vocabulary", content: "حَدِيث - narration\nرَاوٍ - narrator\nصَحِيح - authentic\nضَعِيف - weak\nمَوْضُوع - fabricated" }
      ],
      vocabulary: [
        { arabic: "حَدِيث", transliteration: "ḥadīth", meaning: "narration" },
        { arabic: "سُنَّة", transliteration: "sunna", meaning: "prophetic tradition" },
        { arabic: "إِسْنَاد", transliteration: "isnād", meaning: "chain of narration" },
        { arabic: "مَتْن", transliteration: "matn", meaning: "text body" },
        { arabic: "رِوَايَة", transliteration: "riwāya", meaning: "narration/version" }
      ]
    },
    exerciseCount: 18, prerequisites: ["5-2"]
  },
  {
    id: "5-4", phaseId: 5, order: 4,
    title: "Classical Commentary (Tafsir)",
    titleAr: "التفسير الكلاسيكي",
    description: "Introduction to classical Quranic commentary",
    objectives: ["Understand tafsir methodology", "Read basic tafsir", "Learn commentary vocabulary", "Appreciate interpretive traditions"],
    estimatedTime: 55, difficulty: "hard", xpReward: 85,
    content: {
      theory: [
        { title: "Types of Tafsir", content: "تَفْسِير بِالمَأْثُور - tradition-based\nتَفْسِير بِالرَّأْيِ - reason-based\nتَفْسِير لُغَوِيّ - linguistic" },
        { title: "Major Works", content: "تَفْسِير الطَّبَرِيّ - comprehensive early tafsir\nتَفْسِير الزَّمَخْشَرِيّ - linguistic excellence\nتَفْسِير اِبْن كَثِير - popular hadith-based" },
        { title: "Reading Tafsir", content: "Vocabulary: سَبَب النُّزُول (occasion of revelation)\nقِرَاءَات (variant readings)\nنَسْخ (abrogation)" }
      ],
      vocabulary: [
        { arabic: "تَفْسِير", transliteration: "tafsīr", meaning: "interpretation" },
        { arabic: "تَأْوِيل", transliteration: "ta'wīl", meaning: "interpretation/allegorical" },
        { arabic: "شَرْح", transliteration: "sharḥ", meaning: "explanation" },
        { arabic: "مَعْنَى", transliteration: "ma'nā", meaning: "meaning" },
        { arabic: "دَلَالَة", transliteration: "dalāla", meaning: "indication/signification" }
      ]
    },
    exerciseCount: 18, prerequisites: ["5-3"]
  },
  {
    id: "5-5", phaseId: 5, order: 5,
    title: "Pre-Islamic Poetry (Jahiliyya)",
    titleAr: "الشعر الجاهلي",
    description: "Study the golden age of Arabic poetry",
    objectives: ["Understand pre-Islamic poetry", "Learn poetic vocabulary", "Analyze classic qasidas", "Appreciate desert imagery"],
    estimatedTime: 55, difficulty: "hard", xpReward: 85,
    content: {
      theory: [
        { title: "المُعَلَّقَات (Suspended Odes)", content: "Seven (or ten) greatest pre-Islamic poems\nThemes: love, battle, desert journey\nPoets: اِمْرُؤ القَيْس، عَنْتَرَة، زُهَيْر" },
        { title: "Qasida Structure", content: "نَسِيب - love prelude (atlal theme)\nرِحْلَة - desert journey\nمَدْح/فَخْر - praise/boast" },
        { title: "Poetic Imagery", content: "Desert (صَحْرَاء)\nCamels (إِبِل)\nRuins (أَطْلَال)\nBeloved's departure (رَحِيل)" }
      ],
      vocabulary: [
        { arabic: "جَاهِلِيَّة", transliteration: "jāhiliyya", meaning: "pre-Islamic era" },
        { arabic: "مُعَلَّقَة", transliteration: "mu'allaqa", meaning: "suspended ode" },
        { arabic: "قَصِيدَة", transliteration: "qaṣīda", meaning: "ode" },
        { arabic: "أَطْلَال", transliteration: "aṭlāl", meaning: "ruins (of camp)" },
        { arabic: "فَخْر", transliteration: "fakhr", meaning: "boasting poetry" }
      ]
    },
    exerciseCount: 18, prerequisites: ["5-4"]
  },
  {
    id: "5-6", phaseId: 5, order: 6,
    title: "Classical Prose Masters",
    titleAr: "أساتذة النثر الكلاسيكي",
    description: "Study the greatest classical prose writers",
    objectives: ["Read classical prose", "Understand adab literature", "Appreciate stylistic mastery", "Analyze rhetorical techniques"],
    estimatedTime: 55, difficulty: "hard", xpReward: 85,
    content: {
      theory: [
        { title: "الجَاحِظ (d. 869)", content: "Master of Arabic prose\nWorks: كِتَاب الحَيَوَان، البَيَان وَالتَّبْيِين\nStyle: witty, digressive, encyclopedic" },
        { title: "اِبْن المُقَفَّع (d. 756)", content: "Translator and stylist\nكَلِيلَة وَدِمْنَة - animal fables\nConcise, elegant style" },
        { title: "أَدَب Literature", content: "Genre combining entertainment and education\nCollections of anecdotes, poetry, wisdom\nModel for refined prose" }
      ],
      vocabulary: [
        { arabic: "أَدَب", transliteration: "adab", meaning: "literature/etiquette" },
        { arabic: "أَدِيب", transliteration: "adīb", meaning: "litterateur" },
        { arabic: "مَقَالَة", transliteration: "maqāla", meaning: "essay/article" },
        { arabic: "حِكَايَة", transliteration: "ḥikāya", meaning: "story/tale" },
        { arabic: "أُسْلُوب", transliteration: "uslūb", meaning: "style" }
      ]
    },
    exerciseCount: 18, prerequisites: ["5-5"]
  },
  // SECTION 2: ARABIC POETRY (Lessons 7-12)
  {
    id: "5-7", phaseId: 5, order: 7,
    title: "Poetic Meters (البحور)",
    titleAr: "البحور الشعرية",
    description: "Master the system of Arabic poetic meters",
    objectives: ["Understand meter system", "Scan basic meters", "Recognize common patterns", "Apply to poetry analysis"],
    estimatedTime: 55, difficulty: "hard", xpReward: 85,
    content: {
      theory: [
        { title: "The 16 Meters", content: "الطَّوِيل، المَدِيد، البَسِيط، الوَافِر\nالكَامِل، الهَزَج، الرَّجَز، الرَّمَل\nالسَّرِيع، المُنْسَرِح، الخَفِيف، المُضَارِع\nالمُقْتَضَب، المُجْتَثّ، المُتَقَارِب، المُتَدَارَك" },
        { title: "Metric Feet (تَفَاعِيل)", content: "فَعُولُن - - U -\nفَاعِلُن - U -\nمُسْتَفْعِلُن - - U -\nمَفَاعِيلُن U - - -" },
        { title: "Scanning Process", content: "1. Remove short vowels for consonant-only text\n2. Mark syllables: short (U) or long (-)\n3. Match to metric feet\n4. Identify the بَحْر" }
      ],
      vocabulary: [
        { arabic: "بَحْر", transliteration: "baḥr", meaning: "meter (sea)" },
        { arabic: "تَفْعِيلَة", transliteration: "taf'īla", meaning: "metric foot" },
        { arabic: "تَقْطِيع", transliteration: "taqṭī'", meaning: "scansion" },
        { arabic: "سَاكِن", transliteration: "sākin", meaning: "quiescent (no vowel)" },
        { arabic: "مُتَحَرِّك", transliteration: "mutaḥarrik", meaning: "voweled" }
      ]
    },
    exerciseCount: 18, prerequisites: ["5-6"]
  },
  {
    id: "5-8", phaseId: 5, order: 8,
    title: "Rhyme Patterns (القافية)",
    titleAr: "القافية والروي",
    description: "Master Arabic rhyme and its rules",
    objectives: ["Understand rhyme terminology", "Identify rhyme letters", "Recognize rhyme types", "Analyze poem structure"],
    estimatedTime: 55, difficulty: "hard", xpReward: 85,
    content: {
      theory: [
        { title: "Rhyme Letter (رَوِيّ)", content: "The final consonant that defines the rhyme\nMust be consistent throughout the poem\nThe poem is named by this letter: قَصِيدَة لَامِيَّة" },
        { title: "Types of Rhyme", content: "مُقَيَّدَة - ending in sukun\nمُطْلَقَة - ending in vowel\nمُرْدَفَة - with long vowel before rawiyy" },
        { title: "Rhyme Defects (عُيُوب)", content: "إِقْوَاء - changing vowel before rawiyy\nإِكْفَاء - changing rawiyy\nسِنَاد - inconsistent structure" }
      ],
      vocabulary: [
        { arabic: "قَافِيَة", transliteration: "qāfiya", meaning: "rhyme" },
        { arabic: "رَوِيّ", transliteration: "rawiyy", meaning: "rhyme letter" },
        { arabic: "رِدْف", transliteration: "ridf", meaning: "pre-rawiyy vowel" },
        { arabic: "وَصْل", transliteration: "waṣl", meaning: "post-rawiyy element" },
        { arabic: "قَصِيدَة", transliteration: "qaṣīda", meaning: "ode" }
      ]
    },
    exerciseCount: 18, prerequisites: ["5-7"]
  },
  {
    id: "5-9", phaseId: 5, order: 9,
    title: "Abbasid Poetry",
    titleAr: "الشعر العباسي",
    description: "Study the golden age of Islamic poetry",
    objectives: ["Know major Abbasid poets", "Understand new themes", "Recognize stylistic developments", "Analyze classic poems"],
    estimatedTime: 55, difficulty: "hard", xpReward: 85,
    content: {
      theory: [
        { title: "Major Poets", content: "أَبُو نُوَاس - wine poetry, wit\nأَبُو تَمَّام - innovative metaphor\nالبُحْتُرِي - classical elegance\nالمُتَنَبِّي - greatest Arabic poet" },
        { title: "New Themes", content: "خَمْرِيَّات - wine poetry\nزُهْدِيَّات - ascetic poetry\nفَلْسَفِيَّات - philosophical poems\nUrban life themes" },
        { title: "المُتَنَبِّي (d. 965)", content: "Considered greatest Arabic poet\nFamous for مَدْح (panegyric)\nComplex imagery, profound wisdom\nInfluenced all later poetry" }
      ],
      vocabulary: [
        { arabic: "مَدْح", transliteration: "madḥ", meaning: "praise poetry" },
        { arabic: "هِجَاء", transliteration: "hijā'", meaning: "satire" },
        { arabic: "رِثَاء", transliteration: "rithā'", meaning: "elegy" },
        { arabic: "غَزَل", transliteration: "ghazal", meaning: "love poetry" },
        { arabic: "زُهْد", transliteration: "zuhd", meaning: "ascetic poetry" }
      ]
    },
    exerciseCount: 18, prerequisites: ["5-8"]
  },
  {
    id: "5-10", phaseId: 5, order: 10,
    title: "Andalusian Poetry",
    titleAr: "الشعر الأندلسي",
    description: "Explore the poetry of Islamic Spain",
    objectives: ["Understand Andalusian context", "Know unique forms", "Study major poets", "Appreciate مُوَشَّح form"],
    estimatedTime: 55, difficulty: "hard", xpReward: 85,
    content: {
      theory: [
        { title: "Andalusian Context", content: "Islamic Spain (711-1492)\nCultural flowering\nMixing of Arabic, Romance, Hebrew\nUnique literary traditions" },
        { title: "المُوَشَّح", content: "Strophic poetry form\nMultiple rhyme schemes\nOften ends in vernacular خَرْجَة\nInfluenced European troubadours" },
        { title: "Major Poets", content: "اِبْن زَيْدُون - love poetry\nاِبْن حَزْم - طَوْق الحَمَامَة (love treatise)\nاِبْن خَفَاجَة - nature poetry" }
      ],
      vocabulary: [
        { arabic: "أَنْدَلُس", transliteration: "andalus", meaning: "Islamic Spain" },
        { arabic: "مُوَشَّح", transliteration: "muwashshaḥ", meaning: "strophic poem" },
        { arabic: "زَجَل", transliteration: "zajal", meaning: "vernacular poetry" },
        { arabic: "خَرْجَة", transliteration: "kharja", meaning: "final vernacular verse" },
        { arabic: "طَبِيعَة", transliteration: "ṭabī'a", meaning: "nature" }
      ]
    },
    exerciseCount: 18, prerequisites: ["5-9"]
  },
  {
    id: "5-11", phaseId: 5, order: 11,
    title: "Modern Arabic Poetry",
    titleAr: "الشعر العربي الحديث",
    description: "Study the transformation of Arabic poetry",
    objectives: ["Understand modernist movements", "Know major modern poets", "Recognize free verse", "Analyze contemporary themes"],
    estimatedTime: 55, difficulty: "hard", xpReward: 85,
    content: {
      theory: [
        { title: "النهضة Revival", content: "أَحْمَد شَوْقِي - 'Prince of Poets'\nحَافِظ إِبْرَاهِيم - 'Poet of the Nile'\nNeo-classical movement" },
        { title: "Free Verse (شِعْر حُرّ)", content: "1940s revolution\nنَازِك المَلَائِكَة - pioneer\nبَدْر شَاكِر السَّيَّاب - major voice\nBroken classical meters" },
        { title: "Contemporary Poets", content: "مَحْمُود دَرْوِيش - Palestinian icon\nنِزَار قَبَّانِي - love and politics\nأَدُونِيس - avant-garde" }
      ],
      vocabulary: [
        { arabic: "شِعْر حُرّ", transliteration: "shi'r ḥurr", meaning: "free verse" },
        { arabic: "قَصِيدَة نَثْر", transliteration: "qaṣīdat nathr", meaning: "prose poem" },
        { arabic: "حَدَاثَة", transliteration: "ḥadātha", meaning: "modernity" },
        { arabic: "تَجْدِيد", transliteration: "tajdīd", meaning: "renewal" },
        { arabic: "تَجْرِبَة", transliteration: "tajriba", meaning: "experience" }
      ]
    },
    exerciseCount: 18, prerequisites: ["5-10"]
  },
  {
    id: "5-12", phaseId: 5, order: 12,
    title: "Poetry Analysis Workshop",
    titleAr: "ورشة تحليل الشعر",
    description: "Apply all poetry skills in analysis",
    objectives: ["Analyze complete poems", "Identify rhetorical devices", "Discuss themes", "Write critical responses"],
    estimatedTime: 60, difficulty: "hard", xpReward: 90,
    content: {
      theory: [
        { title: "Analysis Framework", content: "1. Context: poet, period, occasion\n2. Form: meter, rhyme, structure\n3. Language: vocabulary, grammar, style\n4. Imagery: metaphor, simile, symbols\n5. Theme: central idea, message" },
        { title: "Rhetorical Devices", content: "تَشْبِيه - simile\nاِسْتِعَارَة - metaphor\nكِنَايَة - metonymy\nتَوْرِيَة - double entendre\nطِبَاق - antithesis" },
        { title: "Critical Writing", content: "Opening: context and thesis\nBody: systematic analysis\nEvidence: quotations with analysis\nConclusion: significance" }
      ],
      vocabulary: [
        { arabic: "تَحْلِيل أَدَبِيّ", transliteration: "taḥlīl adabī", meaning: "literary analysis" },
        { arabic: "صُورَة فَنِّيَّة", transliteration: "ṣūra fanniyya", meaning: "artistic image" },
        { arabic: "رَمْزِيَّة", transliteration: "ramziyya", meaning: "symbolism" },
        { arabic: "دَلَالَة", transliteration: "dalāla", meaning: "signification" },
        { arabic: "جَمَالِيَّة", transliteration: "jamāliyya", meaning: "aesthetics" }
      ]
    },
    exerciseCount: 20, prerequisites: ["5-11"]
  },
  // SECTION 3: DIALECTS (Lessons 13-18)
  {
    id: "5-13", phaseId: 5, order: 13,
    title: "MSA vs Dialects Overview",
    titleAr: "الفصحى واللهجات",
    description: "Understand Arabic diglossia and dialect variation",
    objectives: ["Understand diglossia", "Recognize dialect features", "Navigate language registers", "Appreciate unity in diversity"],
    estimatedTime: 50, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "Diglossia", content: "High (فُصْحَى): formal, written, media\nLow (عَامِّيَّة): daily speech, informal\nArab speakers navigate both constantly" },
        { title: "Dialect Groups", content: "المَشْرِق - Levantine (شَامِي)\nالمَصْرِي - Egyptian\nالمَغَارِبِي - North African\nالخَلِيجِي - Gulf" },
        { title: "Common Features", content: "Loss of case endings\nSimplified verb system\nBorrowed vocabulary\nPhonological changes" }
      ],
      vocabulary: [
        { arabic: "لَهْجَة", transliteration: "lahja", meaning: "dialect" },
        { arabic: "عَامِّيَّة", transliteration: "'āmmiyya", meaning: "colloquial" },
        { arabic: "فُصْحَى", transliteration: "fuṣḥā", meaning: "classical/standard" },
        { arabic: "دَارِجَة", transliteration: "dārija", meaning: "vernacular (Maghreb)" },
        { arabic: "مَحْكِيَّة", transliteration: "maḥkiyya", meaning: "spoken (Levant)" }
      ]
    },
    exerciseCount: 16, prerequisites: ["5-12"]
  },
  {
    id: "5-14", phaseId: 5, order: 14,
    title: "Egyptian Arabic Basics",
    titleAr: "أساسيات اللهجة المصرية",
    description: "Introduction to the most widely understood dialect",
    objectives: ["Understand Egyptian features", "Learn key vocabulary", "Recognize in media", "Basic comprehension"],
    estimatedTime: 50, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "Key Features", content: "ج → g: جَمِيل → gamiil\nث → s/t: ثَلَاثَة → talaata\nذ → d/z: ذَلِك → da/zay da\nق → ' (glottal): قَلْب → 'alb" },
        { title: "Common Phrases", content: "إِزَّيَّك؟ - How are you?\nكُوَيِّس - Good/fine\nعَايِز/عَايْزَة - I want (m/f)\nمِش عَارِف - I don't know" },
        { title: "Verb Differences", content: "بـ prefix for present: بَيِكْتِب (he writes)\nهَـ prefix for future: هَيْرُوح (he will go)" }
      ],
      vocabulary: [
        { arabic: "إِزَّيَّك", transliteration: "izzayyak", meaning: "how are you? (m)" },
        { arabic: "كُوَيِّس", transliteration: "kuwayyis", meaning: "good/fine" },
        { arabic: "عَايِز", transliteration: "'āyiz", meaning: "want (m)" },
        { arabic: "دِلْوَقْتِي", transliteration: "dilwa'ti", meaning: "now" },
        { arabic: "كِدَه", transliteration: "kida", meaning: "like this" }
      ]
    },
    exerciseCount: 16, prerequisites: ["5-13"]
  },
  {
    id: "5-15", phaseId: 5, order: 15,
    title: "Levantine Arabic Basics",
    titleAr: "أساسيات اللهجة الشامية",
    description: "Introduction to Syrian/Lebanese/Palestinian Arabic",
    objectives: ["Understand Levantine features", "Learn key vocabulary", "Recognize regional variations", "Basic comprehension"],
    estimatedTime: 50, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "Key Features", content: "ق → ' (glottal): قَالَ → 'aal\nkeeping ج as j in many areas\nLoss of emphatic distinction in some areas\nDistinct vowel system" },
        { title: "Common Phrases", content: "كِيفَك؟ - How are you?\nمْنِيح - Good/fine\nبَدِّي - I want\nشُو؟ - What?" },
        { title: "Verb Differences", content: "بـ prefix for present: بِيكْتُب\nرَح for future: رَح يِرُوح\nPresent continuous: عَم + verb" }
      ],
      vocabulary: [
        { arabic: "كِيفَك", transliteration: "kīfak", meaning: "how are you? (m)" },
        { arabic: "مْنِيح", transliteration: "mnīḥ", meaning: "good/fine" },
        { arabic: "بَدِّي", transliteration: "biddi", meaning: "I want" },
        { arabic: "هَلَّق", transliteration: "halla'", meaning: "now" },
        { arabic: "هَيْك", transliteration: "heik", meaning: "like this" }
      ]
    },
    exerciseCount: 16, prerequisites: ["5-14"]
  },
  {
    id: "5-16", phaseId: 5, order: 16,
    title: "Gulf Arabic Basics",
    titleAr: "أساسيات اللهجة الخليجية",
    description: "Introduction to Gulf states Arabic",
    objectives: ["Understand Gulf features", "Learn key vocabulary", "Recognize regional variations", "Basic comprehension"],
    estimatedTime: 50, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "Key Features", content: "Preserves some classical features\nك → ch in some areas: كَيْفَك → chēfik\nج → y in some: رَجُل → rayyal\nDistinct interrogatives" },
        { title: "Common Phrases", content: "شْلُونَك؟ - How are you?\nزَيْن/زَيْنَة - Good/fine\nأَبِي - I want\nوَيْن؟ - Where?" },
        { title: "Verb Differences", content: "يـ/تـ prefix standard\nبـ for continuous in some areas\nDistinct pronoun forms" }
      ],
      vocabulary: [
        { arabic: "شْلُونَك", transliteration: "shlōnak", meaning: "how are you? (m)" },
        { arabic: "زَيْن", transliteration: "zēn", meaning: "good/fine" },
        { arabic: "أَبِي/أَبْغَى", transliteration: "abi/abgha", meaning: "I want" },
        { arabic: "حِين", transliteration: "ḥīn", meaning: "now" },
        { arabic: "جِذِي", transliteration: "chidhi", meaning: "like this" }
      ]
    },
    exerciseCount: 16, prerequisites: ["5-15"]
  },
  {
    id: "5-17", phaseId: 5, order: 17,
    title: "Maghrebi Arabic Overview",
    titleAr: "نظرة عامة على اللهجات المغاربية",
    description: "Introduction to North African Arabic",
    objectives: ["Understand Maghrebi distinctiveness", "Learn basic features", "Recognize major variations", "Appreciate linguistic diversity"],
    estimatedTime: 50, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "Key Features", content: "Heavy Berber influence\nFrench/Spanish loanwords\nDistinct vowel reduction\nOften unintelligible to Mashriqi speakers" },
        { title: "Moroccan (دَارِجَة)", content: "Most distinctive\nلَا بَأْس (labas) - fine\nوَاخَا - okay\nشْنُو؟ - what?\nفِين؟ - where?" },
        { title: "Regional Variation", content: "مَغْرِب (Morocco) - most distinct\nجَزَائِر (Algeria) - intermediate\nتُونِس (Tunisia) - closer to Eastern\nلِيبْيَا (Libya) - Eastern features" }
      ],
      vocabulary: [
        { arabic: "لَا بَأْس", transliteration: "labās", meaning: "fine (Maghreb)" },
        { arabic: "وَاخَا", transliteration: "wākha", meaning: "okay (Morocco)" },
        { arabic: "بَزَّاف", transliteration: "bezzāf", meaning: "a lot (Maghreb)" },
        { arabic: "دَابَا", transliteration: "dāba", meaning: "now (Morocco)" },
        { arabic: "كِيفَاش", transliteration: "kīfāsh", meaning: "how (Maghreb)" }
      ]
    },
    exerciseCount: 16, prerequisites: ["5-16"]
  },
  {
    id: "5-18", phaseId: 5, order: 18,
    title: "Dialect Comprehension Strategies",
    titleAr: "استراتيجيات فهم اللهجات",
    description: "Develop skills for understanding all dialects",
    objectives: ["Apply MSA knowledge to dialects", "Identify cognates", "Use context", "Develop listening strategies"],
    estimatedTime: 55, difficulty: "hard", xpReward: 80,
    content: {
      theory: [
        { title: "Sound Correspondences", content: "Learn regular changes:\nق → ' (glottal) in many dialects\nث → t or s\nذ → d or z\nOnce learned, recognition improves" },
        { title: "Vocabulary Mapping", content: "Most core vocabulary is cognate\nشُفْت = رَأَيْتُ (I saw)\nحَكَى = تَكَلَّمَ (spoke)\nLearn high-frequency equivalents" },
        { title: "Listening Strategies", content: "Start with Egyptian (most media)\nUse subtitled content\nFocus on high-frequency patterns\nDon't aim for perfection - aim for comprehension" }
      ],
      vocabulary: [
        { arabic: "فَهْم", transliteration: "fahm", meaning: "understanding" },
        { arabic: "اِسْتِمَاع", transliteration: "istimā'", meaning: "listening" },
        { arabic: "تَعَرُّف", transliteration: "ta'arruf", meaning: "recognition" },
        { arabic: "سِيَاق", transliteration: "siyāq", meaning: "context" },
        { arabic: "تَخْمِين", transliteration: "takhmīn", meaning: "guessing" }
      ]
    },
    exerciseCount: 17, prerequisites: ["5-17"]
  },
  // SECTION 4: TRANSLATION (Lessons 19-24)
  {
    id: "5-19", phaseId: 5, order: 19,
    title: "Translation Theory",
    titleAr: "نظرية الترجمة",
    description: "Understand principles of Arabic-English translation",
    objectives: ["Understand translation approaches", "Learn key terminology", "Analyze translation challenges", "Develop critical perspective"],
    estimatedTime: 55, difficulty: "hard", xpReward: 80,
    content: {
      theory: [
        { title: "Translation Approaches", content: "تَرْجَمَة حَرْفِيَّة - literal translation\nتَرْجَمَة حُرَّة - free translation\nتَرْجَمَة تَفْسِيرِيَّة - interpretive translation\nBalance between fidelity and naturalness" },
        { title: "Challenges", content: "Cultural concepts (كَرَم، شَرَف)\nIdioms and proverbs\nReligious terminology\nRegister differences" },
        { title: "Quality Standards", content: "Accuracy (دِقَّة)\nClarity (وُضُوح)\nNaturalness (طَبِيعِيَّة)\nAppropriate register" }
      ],
      vocabulary: [
        { arabic: "تَرْجَمَة", transliteration: "tarjama", meaning: "translation" },
        { arabic: "مُتَرْجِم", transliteration: "mutarjim", meaning: "translator" },
        { arabic: "نَصّ أَصْلِيّ", transliteration: "naṣṣ aṣlī", meaning: "source text" },
        { arabic: "نَصّ مُتَرْجَم", transliteration: "naṣṣ mutarjam", meaning: "target text" },
        { arabic: "أَمَانَة", transliteration: "amāna", meaning: "fidelity" }
      ]
    },
    exerciseCount: 17, prerequisites: ["5-18"]
  },
  {
    id: "5-20", phaseId: 5, order: 20,
    title: "Arabic to English Translation",
    titleAr: "الترجمة من العربية إلى الإنجليزية",
    description: "Practice translating Arabic texts to English",
    objectives: ["Translate various text types", "Handle cultural references", "Maintain register", "Produce natural English"],
    estimatedTime: 55, difficulty: "hard", xpReward: 80,
    content: {
      theory: [
        { title: "Process", content: "1. Read entire text first\n2. Identify main ideas\n3. Note cultural/religious references\n4. Draft translation\n5. Revise for naturalness" },
        { title: "Common Challenges", content: "إِنْ شَاءَ اللهُ - God willing (cultural nuance)\nصَلَّى اللهُ عَلَيْهِ وَسَلَّمَ - blessings formula\nإِضَافَة chains - restructure in English" },
        { title: "Text Types", content: "News: formal, objective tone\nLiterature: preserve style and imagery\nReligious: balance accuracy and readability\nLegal: precise terminology" }
      ],
      vocabulary: [
        { arabic: "صِيَاغَة", transliteration: "ṣiyāgha", meaning: "formulation" },
        { arabic: "مُرَاجَعَة", transliteration: "murāja'a", meaning: "revision" },
        { arabic: "تَنْقِيح", transliteration: "tanqīḥ", meaning: "editing" },
        { arabic: "سَلَاسَة", transliteration: "salāsa", meaning: "smoothness" },
        { arabic: "طَلَاقَة", transliteration: "ṭalāqa", meaning: "fluency" }
      ]
    },
    exerciseCount: 18, prerequisites: ["5-19"]
  },
  {
    id: "5-21", phaseId: 5, order: 21,
    title: "English to Arabic Translation",
    titleAr: "الترجمة من الإنجليزية إلى العربية",
    description: "Practice translating English texts to Arabic",
    objectives: ["Produce natural Arabic", "Use appropriate register", "Handle technical terms", "Maintain text coherence"],
    estimatedTime: 55, difficulty: "hard", xpReward: 80,
    content: {
      theory: [
        { title: "Key Considerations", content: "Right-to-left formatting\nArabic sentence structure (VSO option)\nGender agreement throughout\nCase endings in formal texts" },
        { title: "Arabization Strategies", content: "تَعْرِيب - adapting foreign words\nتَرْجَمَة - translating meaning\nNeologisms for new concepts\nUsing classical roots" },
        { title: "Technical Translation", content: "Consistent terminology\nReference existing translations\nBalance precision and clarity\nConsider audience" }
      ],
      vocabulary: [
        { arabic: "تَعْرِيب", transliteration: "ta'rīb", meaning: "Arabization" },
        { arabic: "مُصْطَلَح", transliteration: "muṣṭalaḥ", meaning: "term" },
        { arabic: "نَقْل", transliteration: "naql", meaning: "transfer/conveyance" },
        { arabic: "تَكْيِيف", transliteration: "takyīf", meaning: "adaptation" },
        { arabic: "تَوْطِين", transliteration: "tawṭīn", meaning: "domestication" }
      ]
    },
    exerciseCount: 18, prerequisites: ["5-20"]
  },
  {
    id: "5-22", phaseId: 5, order: 22,
    title: "Cultural Mediation",
    titleAr: "الوساطة الثقافية",
    description: "Navigate cultural differences in translation",
    objectives: ["Identify cultural references", "Choose appropriate strategies", "Explain when needed", "Maintain sensitivity"],
    estimatedTime: 55, difficulty: "hard", xpReward: 80,
    content: {
      theory: [
        { title: "Cultural Concepts", content: "Untranslatable concepts:\nعَيْب - shame/impropriety\nحَرَام/حَلَال - forbidden/permitted\nكَرَم - generosity (deeper meaning)\nTranslator must decide: explain or adapt?" },
        { title: "Strategies", content: "Loan word + explanation\nFunctional equivalent\nExpansion/paraphrase\nFootnote/endnote" },
        { title: "Sensitivity", content: "Religious content: respect and accuracy\nPolitical content: neutrality\nGender issues: awareness\nHistorical context: fairness" }
      ],
      vocabulary: [
        { arabic: "ثَقَافِيّ", transliteration: "thaqāfī", meaning: "cultural" },
        { arabic: "وَسَاطَة", transliteration: "wasāṭa", meaning: "mediation" },
        { arabic: "حَسَاسِيَّة", transliteration: "ḥasāsiyya", meaning: "sensitivity" },
        { arabic: "سِيَاق", transliteration: "siyāq", meaning: "context" },
        { arabic: "مَفْهُوم", transliteration: "mafhūm", meaning: "concept" }
      ]
    },
    exerciseCount: 17, prerequisites: ["5-21"]
  },
  {
    id: "5-23", phaseId: 5, order: 23,
    title: "Literary Translation",
    titleAr: "ترجمة النصوص الأدبية",
    description: "Translate literary texts with style",
    objectives: ["Preserve literary style", "Handle figurative language", "Maintain rhythm when possible", "Balance fidelity and beauty"],
    estimatedTime: 55, difficulty: "hard", xpReward: 85,
    content: {
      theory: [
        { title: "Poetry Translation", content: "Options:\n1. Prose translation (meaning)\n2. Verse translation (form + meaning)\n3. Creative adaptation\nNo perfect solution - choices depend on purpose" },
        { title: "Prose Translation", content: "Preserve:\n- Narrative voice\n- Dialogue style\n- Imagery and metaphor\n- Cultural authenticity" },
        { title: "Challenges", content: "سَجْع (rhymed prose) - near impossible\nPoetic meter - usually lost\nWordplay - requires creativity\nCultural allusions - may need notes" }
      ],
      vocabulary: [
        { arabic: "أَدَبِيّ", transliteration: "adabī", meaning: "literary" },
        { arabic: "أُسْلُوبِيّ", transliteration: "uslūbī", meaning: "stylistic" },
        { arabic: "مَجَازِيّ", transliteration: "majāzī", meaning: "figurative" },
        { arabic: "إِيقَاعِيّ", transliteration: "īqā'ī", meaning: "rhythmic" },
        { arabic: "جَمَالِيّ", transliteration: "jamālī", meaning: "aesthetic" }
      ]
    },
    exerciseCount: 18, prerequisites: ["5-22"]
  },
  {
    id: "5-24", phaseId: 5, order: 24,
    title: "Professional Translation",
    titleAr: "الترجمة المهنية",
    description: "Develop professional translation skills",
    objectives: ["Use CAT tools", "Manage terminology", "Meet deadlines", "Handle various domains"],
    estimatedTime: 55, difficulty: "hard", xpReward: 85,
    content: {
      theory: [
        { title: "Professional Tools", content: "CAT (Computer-Assisted Translation)\nTranslation memory systems\nTerminology databases\nQuality assurance tools" },
        { title: "Workflow", content: "1. Analyze source\n2. Research terminology\n3. Translate segments\n4. Review and edit\n5. Quality check\n6. Deliver" },
        { title: "Specializations", content: "Legal (قَانُونِيَّة)\nMedical (طِبِّيَّة)\nTechnical (تَقْنِيَّة)\nFinancial (مَالِيَّة)\nLiterary (أَدَبِيَّة)" }
      ],
      vocabulary: [
        { arabic: "مِهْنِيّ", transliteration: "mihnī", meaning: "professional" },
        { arabic: "تَخَصُّص", transliteration: "takhaṣṣuṣ", meaning: "specialization" },
        { arabic: "مُرَاقَبَة جَوْدَة", transliteration: "murāqabat jawda", meaning: "quality control" },
        { arabic: "ذَاكِرَة تَرْجَمَة", transliteration: "dhākirat tarjama", meaning: "translation memory" },
        { arabic: "قَاعِدَة بَيَانَات", transliteration: "qā'idat bayānāt", meaning: "database" }
      ]
    },
    exerciseCount: 17, prerequisites: ["5-23"]
  },
  // SECTION 5: MASTERY & CERTIFICATION (Lessons 25-30)
  {
    id: "5-25", phaseId: 5, order: 25,
    title: "Creative Writing in Arabic",
    titleAr: "الكتابة الإبداعية بالعربية",
    description: "Develop creative writing skills in Arabic",
    objectives: ["Write original texts", "Use literary devices", "Develop personal style", "Express ideas eloquently"],
    estimatedTime: 55, difficulty: "hard", xpReward: 85,
    content: {
      theory: [
        { title: "Short Story Writing", content: "Elements:\n- Compelling opening\n- Character development\n- Conflict and resolution\n- Arabic dialogue conventions" },
        { title: "Essay Writing", content: "مَقَالَة genres:\n- Personal (شَخْصِيَّة)\n- Argumentative (جَدَلِيَّة)\n- Descriptive (وَصْفِيَّة)\nDevelop thesis and support" },
        { title: "Poetry Attempts", content: "Start with free verse (شِعْر حُرّ)\nExperiment with imagery\nCapture Arabic music\nBuild gradually to forms" }
      ],
      vocabulary: [
        { arabic: "إِبْدَاع", transliteration: "ibdā'", meaning: "creativity" },
        { arabic: "خَيَال", transliteration: "khayāl", meaning: "imagination" },
        { arabic: "تَعْبِير", transliteration: "ta'bīr", meaning: "expression" },
        { arabic: "إِلْهَام", transliteration: "ilhām", meaning: "inspiration" },
        { arabic: "صَقْل", transliteration: "ṣaql", meaning: "polishing" }
      ]
    },
    exerciseCount: 18, prerequisites: ["5-24"]
  },
  {
    id: "5-26", phaseId: 5, order: 26,
    title: "Critical Analysis Skills",
    titleAr: "مهارات التحليل النقدي",
    description: "Develop advanced critical analysis skills",
    objectives: ["Analyze texts critically", "Formulate arguments", "Support with evidence", "Write critical essays"],
    estimatedTime: 55, difficulty: "hard", xpReward: 85,
    content: {
      theory: [
        { title: "Critical Reading", content: "Question:\n- Author's purpose\n- Intended audience\n- Underlying assumptions\n- Effectiveness of argument" },
        { title: "Literary Criticism", content: "Approaches:\n- Historical (تَارِيخِيّ)\n- Formalist (شَكْلِيّ)\n- Feminist (نِسْوِيّ)\n- Postcolonial (مَا بَعْد اِسْتِعْمَارِيّ)" },
        { title: "Writing Criticism", content: "Clear thesis\nTextual evidence (اِسْتِشْهَاد)\nLogical argument\nEngagement with other critics" }
      ],
      vocabulary: [
        { arabic: "نَقْد", transliteration: "naqd", meaning: "criticism" },
        { arabic: "نَاقِد", transliteration: "nāqid", meaning: "critic" },
        { arabic: "تَقْيِيم", transliteration: "taqyīm", meaning: "evaluation" },
        { arabic: "مَنْهَج", transliteration: "manhaj", meaning: "approach/method" },
        { arabic: "حُجَّة", transliteration: "ḥujja", meaning: "argument" }
      ]
    },
    exerciseCount: 18, prerequisites: ["5-25"]
  },
  {
    id: "5-27", phaseId: 5, order: 27,
    title: "Public Speaking in Arabic",
    titleAr: "الخطابة بالعربية",
    description: "Develop public speaking skills in Arabic",
    objectives: ["Structure speeches", "Use rhetorical techniques", "Engage audiences", "Speak with confidence"],
    estimatedTime: 55, difficulty: "hard", xpReward: 85,
    content: {
      theory: [
        { title: "Speech Structure", content: "مُقَدِّمَة - Opening (hook, context)\nصُلْب الخِطَاب - Body (main points)\nخَاتِمَة - Conclusion (summary, call to action)" },
        { title: "Rhetorical Techniques", content: "التَّكْرَار - repetition for emphasis\nالأَسْئِلَة البَلَاغِيَّة - rhetorical questions\nالتَّشْبِيه وَالاِسْتِعَارَة - figurative language\nالتَّدَرُّج - building to climax" },
        { title: "Delivery", content: "Voice modulation (تَنْوِيع الصَّوْت)\nEye contact (التَّوَاصُل البَصَرِيّ)\nGestures (الإِشَارَات)\nPacing (الإِيقَاع)" }
      ],
      vocabulary: [
        { arabic: "خِطَاب", transliteration: "khiṭāb", meaning: "speech/address" },
        { arabic: "خَطِيب", transliteration: "khaṭīb", meaning: "orator" },
        { arabic: "خَطَابَة", transliteration: "khaṭāba", meaning: "oratory" },
        { arabic: "إِقْنَاع", transliteration: "iqnā'", meaning: "persuasion" },
        { arabic: "جُمْهُور", transliteration: "jumhūr", meaning: "audience" }
      ]
    },
    exerciseCount: 17, prerequisites: ["5-26"]
  },
  {
    id: "5-28", phaseId: 5, order: 28,
    title: "Research in Arabic",
    titleAr: "البحث باللغة العربية",
    description: "Conduct academic research using Arabic sources",
    objectives: ["Search Arabic databases", "Evaluate Arabic sources", "Cite correctly", "Synthesize information"],
    estimatedTime: 55, difficulty: "hard", xpReward: 85,
    content: {
      theory: [
        { title: "Arabic Resources", content: "Databases: الشاملة، المكتبة الرقمية\nJournals: المجلات العلمية المحكمة\nClassical sources: كتب التراث\nOnline: المواقع الأكاديمية" },
        { title: "Source Evaluation", content: "المَصْدَر - primary vs secondary\nالمُؤَلِّف - author credentials\nالنَّاشِر - publisher reputation\nالتَّارِيخ - currency" },
        { title: "Citation Styles", content: "Arabic citation conventions\nMixing Arabic and English sources\nTransliteration standards\nFormatting bibliographies" }
      ],
      vocabulary: [
        { arabic: "بَحْث عِلْمِيّ", transliteration: "baḥth 'ilmī", meaning: "scientific research" },
        { arabic: "مَرْجِع", transliteration: "marji'", meaning: "reference" },
        { arabic: "مَصْدَر أَوَّلِيّ", transliteration: "maṣdar awwalī", meaning: "primary source" },
        { arabic: "اِقْتِبَاس", transliteration: "iqtibās", meaning: "quotation" },
        { arabic: "بِبْلِيُوغْرَافْيَا", transliteration: "bibliyūghrāfyā", meaning: "bibliography" }
      ]
    },
    exerciseCount: 17, prerequisites: ["5-27"]
  },
  {
    id: "5-29", phaseId: 5, order: 29,
    title: "Arabic Language Proficiency Standards",
    titleAr: "معايير الكفاءة في اللغة العربية",
    description: "Understand and achieve proficiency standards",
    objectives: ["Know proficiency frameworks", "Self-assess accurately", "Prepare for tests", "Document achievements"],
    estimatedTime: 55, difficulty: "hard", xpReward: 90,
    content: {
      theory: [
        { title: "Proficiency Frameworks", content: "ACTFL (American Council)\nCEFR (European Framework)\nILR (Interagency Language Roundtable)\nArabic-specific assessments" },
        { title: "Skills Assessment", content: "Reading (قِرَاءَة)\nWriting (كِتَابَة)\nListening (اِسْتِمَاع)\nSpeaking (تَحَدُّث)\nCultural competence" },
        { title: "Advanced Level (C1-C2)", content: "Read complex texts fluently\nWrite for academic/professional purposes\nUnderstand native speech including dialects\nSustain sophisticated discussions\nNavigate cultural nuances" }
      ],
      vocabulary: [
        { arabic: "كَفَاءَة", transliteration: "kafā'a", meaning: "proficiency" },
        { arabic: "مُسْتَوَى", transliteration: "mustawā", meaning: "level" },
        { arabic: "مِعْيَار", transliteration: "mi'yār", meaning: "standard" },
        { arabic: "تَقْيِيم", transliteration: "taqyīm", meaning: "assessment" },
        { arabic: "شَهَادَة", transliteration: "shahāda", meaning: "certificate" }
      ]
    },
    exerciseCount: 18, prerequisites: ["5-28"]
  },
  {
    id: "5-30", phaseId: 5, order: 30,
    title: "Final Mastery Assessment",
    titleAr: "التقييم النهائي للإتقان",
    description: "Comprehensive assessment of Arabic mastery",
    objectives: ["Demonstrate all skills", "Complete capstone project", "Receive mastery certification", "Plan continued learning"],
    estimatedTime: 90, difficulty: "hard", xpReward: 150,
    content: {
      theory: [
        { title: "Capstone Requirements", content: "Choose ONE:\n1. Translate a literary text (2000+ words)\n2. Write original creative piece (1500+ words)\n3. Deliver academic presentation (20+ minutes)\n4. Complete research paper (3000+ words)" },
        { title: "Assessment Areas", content: "Grammar accuracy (90%+)\nVocabulary range (advanced)\nCultural competence (demonstrated)\nCommunicative effectiveness (professional level)" },
        { title: "Continued Learning", content: "Join Arab communities\nConsume Arabic media daily\nRead Arabic literature regularly\nUse Arabic professionally\nConsider advanced certifications" }
      ],
      vocabulary: [
        { arabic: "إِتْقَان", transliteration: "itqān", meaning: "mastery" },
        { arabic: "تَتْوِيج", transliteration: "tatwīj", meaning: "culmination" },
        { arabic: "إِنْجَاز", transliteration: "injāz", meaning: "achievement" },
        { arabic: "تَمَيُّز", transliteration: "tamayyuz", meaning: "excellence" },
        { arabic: "مُسْتَقْبَل", transliteration: "mustaqbal", meaning: "future" }
      ]
    },
    exerciseCount: 25, prerequisites: ["5-29"]
  }
];
