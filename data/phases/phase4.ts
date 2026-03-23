/**
 * Phase 4: Fluency (30 Lessons)
 * Achieve reading fluency with advanced texts and cultural understanding
 */

import type { Lesson } from "@/types";

export const PHASE_4_LESSONS: Lesson[] = [
  // SECTION 1: ADVANCED GRAMMAR (Lessons 1-6)
  {
    id: "4-1", phaseId: 4, order: 1,
    title: "I'rab - Grammatical Case System",
    titleAr: "الإعراب - نظام الحالات النحوية",
    titleFr: "I'rab - Système des cas grammaticaux",
    description: "Master the Arabic case ending system",
    descriptionFr: "Maîtrisez le système des désinences casuelles arabes",
    objectives: ["Understand nominative, accusative, genitive", "Recognize case markers", "Apply case rules", "Read classical texts"],
    estimatedTime: 55, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "The Three Cases", content: "مَرْفُوع (Nominative - subject): ـُ / ـٌ\nمَنْصُوب (Accusative - object): ـَ / ـً\nمَجْرُور (Genitive - after preposition): ـِ / ـٍ" },
        { title: "When to Use Each", content: "Nominative: Subject, predicate of nominal sentence\nAccusative: Object, adverbs, after إِنَّ sisters\nGenitive: After prepositions, in إضافة constructions" },
        { title: "Diptotes (الممنوع من الصرف)", content: "Some nouns don't take full case endings:\n• Names: أَحْمَدُ، فَاطِمَةُ\n• Colors: أَحْمَرُ، أَصْفَرُ\n• Patterns: أَفْعَلُ، مَفَاعِلُ" }
      ],
      vocabulary: [
        { arabic: "مَرْفُوع", transliteration: "marfū'", meaning: "nominative case" },
        { arabic: "مَنْصُوب", transliteration: "manṣūb", meaning: "accusative case" },
        { arabic: "مَجْرُور", transliteration: "majrūr", meaning: "genitive case" },
        { arabic: "فَاعِل", transliteration: "fā'il", meaning: "subject/doer" },
        { arabic: "مَفْعُول", transliteration: "maf'ūl", meaning: "object" }
      ]
    },
    exerciseCount: 17, prerequisites: []
  },
  {
    id: "4-2", phaseId: 4, order: 2,
    title: "Nunation (التنوين) Rules",
    titleAr: "أحكام التنوين",
    titleFr: "Règles de la nunation (التنوين)",
    description: "Master the rules of nunation in Arabic",
    descriptionFr: "Maîtrisez les règles de la nunation en arabe",
    objectives: ["Apply nunation correctly", "Distinguish tanween types", "Use with adjectives", "Handle diptotes"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "What is Tanween?", content: "Nunation adds an 'n' sound to indefinite nouns:\nـٌ (un) - nominative: كِتَابٌ\nـً (an) - accusative: كِتَابًا\nـٍ (in) - genitive: كِتَابٍ" },
        { title: "When NOT to Use", content: "No tanween on:\n• Definite nouns (with الـ)\n• Diptotes (proper names, patterns)\n• Nouns in إضافة" },
        { title: "Accusative Alif", content: "Most accusative tanween adds alif: ـًا\nExcept words ending in:\n• تاء مربوطة: مدرسةً\n• Alif: عصًا" }
      ],
      vocabulary: [
        { arabic: "تَنْوِين", transliteration: "tanwīn", meaning: "nunation" },
        { arabic: "نَكِرَة", transliteration: "nakira", meaning: "indefinite" },
        { arabic: "مَعْرِفَة", transliteration: "ma'rifa", meaning: "definite" },
        { arabic: "مُنَوَّن", transliteration: "munawwan", meaning: "nunated" },
        { arabic: "غَيْر مُنَوَّن", transliteration: "ghayr munawwan", meaning: "non-nunated" }
      ]
    },
    exerciseCount: 16, prerequisites: ["4-1"]
  },
  {
    id: "4-3", phaseId: 4, order: 3,
    title: "The Construct State (الإضافة)",
    titleAr: "الإضافة المعنوية واللفظية",
    titleFr: "L'état construit (الإضافة)",
    description: "Master genitive constructions in depth",
    descriptionFr: "Maîtrisez en profondeur les constructions génitivales",
    objectives: ["Form complex إضافة chains", "Distinguish types of إضافة", "Apply definiteness rules", "Use in formal writing"],
    estimatedTime: 55, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "Idafa Structure", content: "مُضَاف + مُضَاف إِلَيْه\n• First noun loses tanween and الـ\n• Second noun takes genitive case\n• Whole phrase takes definiteness of second" },
        { title: "Chains", content: "Multiple إضافة:\nبَابُ بَيْتِ صَدِيقِي\nThe door of my friend's house\n(4 nouns in chain)" },
        { title: "Semantic Types", content: "Possession: كِتَابُ الطَّالِبِ\nDescription: رَجُلُ عِلْمٍ (a man of knowledge)\nApposition: مَدِينَةُ القَاهِرَةِ" }
      ],
      vocabulary: [
        { arabic: "مُضَاف", transliteration: "muḍāf", meaning: "annexed (first term)" },
        { arabic: "مُضَاف إِلَيْه", transliteration: "muḍāf ilayh", meaning: "annexed to (second term)" },
        { arabic: "إِضَافَة لَفْظِيَّة", transliteration: "iḍāfa lafẓiyya", meaning: "verbal idafa" },
        { arabic: "إِضَافَة مَعْنَوِيَّة", transliteration: "iḍāfa ma'nawiyya", meaning: "semantic idafa" },
        { arabic: "سِلْسِلَة", transliteration: "silsila", meaning: "chain" }
      ]
    },
    exerciseCount: 17, prerequisites: ["4-2"]
  },
  {
    id: "4-4", phaseId: 4, order: 4,
    title: "Numbers Agreement",
    titleAr: "العدد والمعدود",
    titleFr: "Accord des nombres",
    description: "Master complex number-noun agreement rules",
    descriptionFr: "Maîtrisez les règles complexes d'accord entre nombres et noms",
    objectives: ["Apply reverse gender rule (3-10)", "Use correct cases", "Handle 11-99", "Count with hundreds/thousands"],
    estimatedTime: 55, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "Numbers 3-10", content: "REVERSE gender agreement:\nثَلَاثَةُ رِجَالٍ - 3 men (feminine number + masculine plural genitive)\nثَلَاثُ نِسَاءٍ - 3 women (masculine number + feminine plural genitive)" },
        { title: "Numbers 11-99", content: "11-12: Special forms agree with counted\n13-19: Compound, reverse gender like 3-10\n20-99: Counted is singular accusative" },
        { title: "100s and 1000s", content: "مِائَة/مِئَة - 100 (counted in genitive singular)\nأَلْف - 1000 (counted in genitive singular)" }
      ],
      vocabulary: [
        { arabic: "عَدَد", transliteration: "'adad", meaning: "number" },
        { arabic: "مَعْدُود", transliteration: "ma'dūd", meaning: "counted noun" },
        { arabic: "مُفْرَد", transliteration: "mufrad", meaning: "singular" },
        { arabic: "جَمْع", transliteration: "jam'", meaning: "plural" },
        { arabic: "تَمْيِيز", transliteration: "tamyīz", meaning: "specification" }
      ]
    },
    exerciseCount: 17, prerequisites: ["4-3"]
  },
  {
    id: "4-5", phaseId: 4, order: 5,
    title: "Five Nouns (الأسماء الخمسة)",
    titleAr: "الأسماء الخمسة",
    titleFr: "Les cinq noms (الأسماء الخمسة)",
    description: "Learn the special declension of five nouns",
    descriptionFr: "Apprenez la déclinaison spéciale des cinq noms",
    objectives: ["Identify the five nouns", "Apply special case endings", "Use correctly in إضافة", "Recognize in classical texts"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "The Five Nouns", content: "أَبٌ (father), أَخٌ (brother), حَمٌ (father-in-law), فَمٌ (mouth), ذُو (possessor of)\nWhen in إضافة, they show long vowels:\nأَبُو (nominative), أَبَا (accusative), أَبِي (genitive)" },
        { title: "Example Sentences", content: "جَاءَ أَبُوهُ - His father came (nominative)\nرَأَيْتُ أَبَاهُ - I saw his father (accusative)\nسَلَّمْتُ عَلَى أَبِيهِ - I greeted his father (genitive)" },
        { title: "ذُو Usage", content: "ذُو مَالٍ - possessor of wealth\nذُو عِلْمٍ - possessor of knowledge\nFeminine: ذَاتُ (nominative)" }
      ],
      vocabulary: [
        { arabic: "أَبُو", transliteration: "abū", meaning: "father of (nom.)" },
        { arabic: "أَخُو", transliteration: "akhū", meaning: "brother of (nom.)" },
        { arabic: "ذُو", transliteration: "dhū", meaning: "possessor of (nom.)" },
        { arabic: "فُو", transliteration: "fū", meaning: "mouth of (nom.)" },
        { arabic: "حَمُو", transliteration: "ḥamū", meaning: "father-in-law of (nom.)" }
      ]
    },
    exerciseCount: 16, prerequisites: ["4-4"]
  },
  {
    id: "4-6", phaseId: 4, order: 6,
    title: "Weak Verbs in Depth",
    titleAr: "الأفعال المعتلة بالتفصيل",
    titleFr: "Les verbes faibles en profondeur",
    description: "Master all types of weak verbs",
    descriptionFr: "Maîtrisez tous les types de verbes faibles",
    objectives: ["Conjugate assimilated verbs", "Handle hollow verbs", "Form defective verbs", "Use doubly weak verbs"],
    estimatedTime: 55, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "Assimilated (مثال)", content: "First radical is و or ي:\nوَصَلَ → يَصِلُ (the و drops in present)\nوَعَدَ → يَعِدُ" },
        { title: "Hollow (أَجْوَف)", content: "Middle radical is و or ي:\nقَالَ (قول) → يَقُولُ\nبَاعَ (بيع) → يَبِيعُ" },
        { title: "Defective (نَاقِص)", content: "Final radical is و or ي:\nمَشَى → يَمْشِي\nدَعَا → يَدْعُو" }
      ],
      vocabulary: [
        { arabic: "مِثَال", transliteration: "mithāl", meaning: "assimilated verb" },
        { arabic: "أَجْوَف", transliteration: "ajwaf", meaning: "hollow verb" },
        { arabic: "نَاقِص", transliteration: "nāqiṣ", meaning: "defective verb" },
        { arabic: "لَفِيف", transliteration: "lafīf", meaning: "doubly weak verb" },
        { arabic: "صَحِيح", transliteration: "ṣaḥīḥ", meaning: "sound verb" }
      ]
    },
    exerciseCount: 18, prerequisites: ["4-5"]
  },
  // SECTION 2: DERIVED FORMS (Lessons 7-12)
  {
    id: "4-7", phaseId: 4, order: 7,
    title: "Active Participle (اسم الفاعل)",
    titleAr: "اسم الفاعل",
    titleFr: "Le participe actif (اسم الفاعل)",
    description: "Master the active participle pattern",
    descriptionFr: "Maîtrisez le schème du participe actif",
    objectives: ["Form from Form I", "Form from derived forms", "Use as noun and adjective", "Understand temporal aspects"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Form I Pattern", content: "فَاعِل pattern:\nكَتَبَ → كَاتِب (writer/writing)\nعَمِلَ → عَامِل (worker/working)\nدَرَسَ → دَارِس (student/studying)" },
        { title: "Derived Forms Pattern", content: "Replace يـ prefix with مُـ:\nيُعَلِّمُ → مُعَلِّم (teacher)\nيُسَافِرُ → مُسَافِر (traveler)\nيَسْتَخْدِمُ → مُسْتَخْدِم (user)" },
        { title: "Functions", content: "• As noun: الكَاتِب (the writer)\n• As adjective: رَجُلٌ عَامِلٌ (a working man)\n• Present action: أَنَا ذَاهِبٌ (I am going)" }
      ],
      vocabulary: [
        { arabic: "كَاتِب", transliteration: "kātib", meaning: "writer/writing" },
        { arabic: "قَارِئ", transliteration: "qāri'", meaning: "reader/reading" },
        { arabic: "سَامِع", transliteration: "sāmi'", meaning: "listener/listening" },
        { arabic: "مُدَرِّس", transliteration: "mudarris", meaning: "teacher" },
        { arabic: "مُسْتَمِع", transliteration: "mustami'", meaning: "listener (form VIII)" }
      ]
    },
    exerciseCount: 17, prerequisites: ["4-6"]
  },
  {
    id: "4-8", phaseId: 4, order: 8,
    title: "Passive Participle (اسم المفعول)",
    titleAr: "اسم المفعول",
    titleFr: "Le participe passif (اسم المفعول)",
    description: "Master the passive participle pattern",
    descriptionFr: "Maîtrisez le schème du participe passif",
    objectives: ["Form from Form I", "Form from derived forms", "Distinguish from active", "Use in descriptions"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Form I Pattern", content: "مَفْعُول pattern:\nكَتَبَ → مَكْتُوب (written)\nعَمِلَ → مَعْمُول (done/made)\nفَتَحَ → مَفْتُوح (opened)" },
        { title: "Derived Forms Pattern", content: "Like active but with fatha before last consonant:\nمُعَلَّم (taught) vs مُعَلِّم (teacher)\nمُسْتَخْدَم (used) vs مُسْتَخْدِم (user)" },
        { title: "Common Usage", content: "مَكْتُوبٌ عَلَيْهِ - It is written on it (fated)\nمَمْنُوع - forbidden\nمَسْمُوح - permitted" }
      ],
      vocabulary: [
        { arabic: "مَكْتُوب", transliteration: "maktūb", meaning: "written" },
        { arabic: "مَفْهُوم", transliteration: "mafhūm", meaning: "understood" },
        { arabic: "مَعْرُوف", transliteration: "ma'rūf", meaning: "known" },
        { arabic: "مَجْهُول", transliteration: "majhūl", meaning: "unknown" },
        { arabic: "مَشْغُول", transliteration: "mashghūl", meaning: "busy/occupied" }
      ]
    },
    exerciseCount: 17, prerequisites: ["4-7"]
  },
  {
    id: "4-9", phaseId: 4, order: 9,
    title: "Verbal Noun (المصدر)",
    titleAr: "المصدر",
    titleFr: "Le nom verbal (المصدر)",
    description: "Master verbal noun patterns",
    descriptionFr: "Maîtrisez les schèmes des noms verbaux",
    objectives: ["Recognize Form I patterns", "Form from derived forms", "Use in إضافة", "Replace verbs with مصدر"],
    estimatedTime: 55, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "Form I Patterns", content: "Many patterns exist:\nفَعْل: ضَرْب، فَتْح\nفِعَال: قِتَال، جِهَاد\nفُعُول: دُخُول، خُرُوج\nفَعَال: ذَهَاب، سَفَر" },
        { title: "Derived Form Patterns", content: "II: تَفْعِيل - تَعْلِيم\nIII: مُفَاعَلَة - مُسَاعَدَة\nIV: إِفْعَال - إِرْسَال\nV: تَفَعُّل - تَعَلُّم\nVI: تَفَاعُل - تَعَاوُن\nVII: اِنْفِعَال - اِنْكِسَار\nVIII: اِفْتِعَال - اِجْتِمَاع\nX: اِسْتِفْعَال - اِسْتِخْدَام" },
        { title: "Usage", content: "قِرَاءَةُ الكُتُبِ مُفِيدَةٌ\nReading books is beneficial\n(مصدر as subject of nominal sentence)" }
      ],
      vocabulary: [
        { arabic: "قِرَاءَة", transliteration: "qirā'a", meaning: "reading" },
        { arabic: "كِتَابَة", transliteration: "kitāba", meaning: "writing" },
        { arabic: "تَعْلِيم", transliteration: "ta'līm", meaning: "teaching" },
        { arabic: "اِسْتِخْدَام", transliteration: "istikhdām", meaning: "use/usage" },
        { arabic: "تَعَاوُن", transliteration: "ta'āwun", meaning: "cooperation" }
      ]
    },
    exerciseCount: 18, prerequisites: ["4-8"]
  },
  {
    id: "4-10", phaseId: 4, order: 10,
    title: "Nouns of Place & Time",
    titleAr: "اسم المكان واسم الزمان",
    titleFr: "Noms de lieu et de temps",
    description: "Learn patterns for place and time nouns",
    descriptionFr: "Apprenez les schèmes des noms de lieu et de temps",
    objectives: ["Form مَفْعَل and مَفْعِل patterns", "Distinguish place from time", "Use in descriptions", "Recognize in texts"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Pattern", content: "مَفْعَل or مَفْعِل (depends on verb form):\nلَعِبَ → مَلْعَب (playground)\nجَلَسَ → مَجْلِس (sitting place/council)\nدَخَلَ → مَدْخَل (entrance)" },
        { title: "Time Usage", content: "Same pattern for time:\nوُلِدَ → مَوْلِد (birthday/birthplace)\nغَرَبَ → مَغْرِب (sunset/west)\nطَلَعَ → مَطْلَع (sunrise)" },
        { title: "Common Examples", content: "مَكْتَب - office\nمَدْرَسَة - school\nمَطْبَخ - kitchen\nمَسْجِد - mosque" }
      ],
      vocabulary: [
        { arabic: "مَلْعَب", transliteration: "mal'ab", meaning: "playground/stadium" },
        { arabic: "مَكْتَبَة", transliteration: "maktaba", meaning: "library" },
        { arabic: "مَطَار", transliteration: "maṭār", meaning: "airport" },
        { arabic: "مَوْقِف", transliteration: "mawqif", meaning: "parking/position" },
        { arabic: "مَخْرَج", transliteration: "makhraj", meaning: "exit" }
      ]
    },
    exerciseCount: 16, prerequisites: ["4-9"]
  },
  {
    id: "4-11", phaseId: 4, order: 11,
    title: "Noun of Instrument",
    titleAr: "اسم الآلة",
    titleFr: "Le nom d'instrument",
    description: "Learn patterns for instrument nouns",
    descriptionFr: "Apprenez les schèmes des noms d'instrument",
    objectives: ["Form مِفْعَل, مِفْعَال, مِفْعَلَة patterns", "Use instrument nouns", "Expand vocabulary", "Recognize in modern Arabic"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Classical Patterns", content: "مِفْعَل: مِفْتَاح (key), مِصْبَاح (lamp)\nمِفْعَال: مِنْشَار (saw), مِفْتَاح (key)\nمِفْعَلَة: مِكْنَسَة (broom), مِطْرَقَة (hammer)" },
        { title: "Modern Coinages", content: "Arabic creates new instrument nouns:\nحَسَبَ → حَاسُوب (computer)\nبَرَدَ → ثَلَّاجَة (refrigerator)\nغَسَلَ → غَسَّالَة (washing machine)" },
        { title: "فَعَّالَة Pattern", content: "Modern machines often use فَعَّالَة:\nثَلَّاجَة - refrigerator\nغَسَّالَة - washing machine\nسَيَّارَة - car (thing that moves)" }
      ],
      vocabulary: [
        { arabic: "مِفْتَاح", transliteration: "miftāḥ", meaning: "key" },
        { arabic: "مِقَصّ", transliteration: "miqaṣṣ", meaning: "scissors" },
        { arabic: "مِكْوَاة", transliteration: "mikwā", meaning: "iron (clothes)" },
        { arabic: "حَاسُوب", transliteration: "ḥāsūb", meaning: "computer" },
        { arabic: "هَاتِف", transliteration: "hātif", meaning: "telephone" }
      ]
    },
    exerciseCount: 16, prerequisites: ["4-10"]
  },
  {
    id: "4-12", phaseId: 4, order: 12,
    title: "Diminutive & Intensive",
    titleAr: "التصغير وصيغ المبالغة",
    titleFr: "Le diminutif et l'intensif",
    description: "Learn diminutive and intensive noun patterns",
    descriptionFr: "Apprenez les schèmes du diminutif et de l'intensif",
    objectives: ["Form diminutives", "Use intensive adjective patterns", "Express nuance", "Recognize in literature"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Diminutive (تصغير)", content: "Pattern: فُعَيْل\nكِتَاب → كُتَيِّب (booklet)\nكَلْب → كُلَيْب (puppy)\nبَيْت → بُيَيْت (small house)" },
        { title: "Intensive Adjectives", content: "Patterns for extreme qualities:\nفَعَّال: كَذَّاب (big liar)\nفَعِيل: عَلِيم (very knowledgeable)\nفَعُول: صَبُور (very patient)\nمِفْعَال: مِهْذَار (very talkative)" },
        { title: "Usage", content: "Express affection: يَا بُنَيّ (O my little son)\nExpress extremity: هُوَ أَكُول - He eats a lot" }
      ],
      vocabulary: [
        { arabic: "بُنَيّ", transliteration: "bunayy", meaning: "little son" },
        { arabic: "عَلَّامَة", transliteration: "'allāma", meaning: "great scholar" },
        { arabic: "فَهَّامَة", transliteration: "fahhāma", meaning: "very understanding" },
        { arabic: "صَبُور", transliteration: "ṣabūr", meaning: "very patient" },
        { arabic: "شَكُور", transliteration: "shakūr", meaning: "very thankful" }
      ]
    },
    exerciseCount: 16, prerequisites: ["4-11"]
  },
  // SECTION 3: LITERATURE (Lessons 13-18)
  {
    id: "4-13", phaseId: 4, order: 13,
    title: "Introduction to Arabic Poetry",
    titleAr: "مدخل إلى الشعر العربي",
    titleFr: "Introduction à la poésie arabe",
    description: "Introduction to classical Arabic poetry",
    descriptionFr: "Introduction à la poésie arabe classique",
    objectives: ["Understand poetic structure", "Learn basic meters", "Analyze rhyme schemes", "Appreciate classical poetry"],
    estimatedTime: 55, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "Verse Structure", content: "بَيْت (verse) = صَدْر (first hemistich) + عَجُز (second hemistich)\nقَصِيدَة (poem) = multiple verses with same rhyme" },
        { title: "Rhyme (القافية)", content: "Classical poems maintain the same end rhyme throughout:\nكُلُّ بَيْتٍ يَنْتَهِي بِنَفْسِ الحَرْفِ\nRhyme letter (رَوِيّ) defines the poem" },
        { title: "Famous Poets", content: "Pre-Islamic: اِمْرُؤ القَيْس\nAbbasid: أَبُو نُوَاس، المُتَنَبِّي\nModern: أَحْمَد شَوْقِي، نِزَار قَبَّانِي" }
      ],
      vocabulary: [
        { arabic: "شِعْر", transliteration: "shi'r", meaning: "poetry" },
        { arabic: "شَاعِر", transliteration: "shā'ir", meaning: "poet" },
        { arabic: "قَصِيدَة", transliteration: "qaṣīda", meaning: "ode/poem" },
        { arabic: "بَيْت", transliteration: "bayt", meaning: "verse" },
        { arabic: "قَافِيَة", transliteration: "qāfiya", meaning: "rhyme" }
      ]
    },
    exerciseCount: 16, prerequisites: ["4-12"]
  },
  {
    id: "4-14", phaseId: 4, order: 14,
    title: "Arabic Meters (العروض)",
    titleAr: "علم العروض",
    titleFr: "Les mètres arabes (العروض)",
    description: "Learn the basics of Arabic prosody",
    descriptionFr: "Apprenez les bases de la prosodie arabe",
    objectives: ["Understand the concept of بحر", "Learn common meters", "Scan simple verses", "Appreciate rhythmic patterns"],
    estimatedTime: 55, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "What is 'Arūḍ?", content: "The science of Arabic meters, founded by الخَلِيل بن أَحْمَد\n16 classical meters (بُحُور)\nBased on syllable patterns: فَعُولُن، فَاعِلُن، مُسْتَفْعِلُن" },
        { title: "Common Meters", content: "الطَّوِيل - most common pre-Islamic\nالكَامِل - perfect/complete\nالوَافِر - abundant\nالخَفِيف - light\nالرَّجَز - simple/accessible" },
        { title: "Scanning Basics", content: "Count syllables: تَنْ (short) + تَانْ (long)\nMap to metric feet\nIdentify the بَحْر" }
      ],
      vocabulary: [
        { arabic: "عَرُوض", transliteration: "'arūḍ", meaning: "prosody" },
        { arabic: "بَحْر", transliteration: "baḥr", meaning: "meter (lit. sea)" },
        { arabic: "تَفْعِيلَة", transliteration: "taf'īla", meaning: "metric foot" },
        { arabic: "وَزْن", transliteration: "wazn", meaning: "weight/meter" },
        { arabic: "إِيقَاع", transliteration: "īqā'", meaning: "rhythm" }
      ]
    },
    exerciseCount: 16, prerequisites: ["4-13"]
  },
  {
    id: "4-15", phaseId: 4, order: 15,
    title: "Classical Prose Styles",
    titleAr: "أساليب النثر الكلاسيكي",
    titleFr: "Styles de prose classique",
    description: "Explore classical Arabic prose styles",
    descriptionFr: "Explorez les styles de prose arabe classique",
    objectives: ["Distinguish prose genres", "Analyze rhetorical devices", "Understand classical style", "Read historical texts"],
    estimatedTime: 55, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "Prose Genres", content: "خُطْبَة - sermon/speech\nرِسَالَة - epistle\nمَقَامَة - literary assembly\nسِيرَة - biography\nتَارِيخ - history" },
        { title: "Rhetorical Devices", content: "سَجْع - rhymed prose\nطِبَاق - antithesis\nجِنَاس - paronomasia\nاِسْتِعَارَة - metaphor" },
        { title: "Famous Prose Writers", content: "الجَاحِظ - master of أَدَب\nاِبْن المُقَفَّع - translator, stylist\nالهَمَذَانِي - inventor of مَقَامَة" }
      ],
      vocabulary: [
        { arabic: "نَثْر", transliteration: "nathr", meaning: "prose" },
        { arabic: "سَجْع", transliteration: "saj'", meaning: "rhymed prose" },
        { arabic: "بَلَاغَة", transliteration: "balāgha", meaning: "rhetoric" },
        { arabic: "فَصَاحَة", transliteration: "faṣāḥa", meaning: "eloquence" },
        { arabic: "أُسْلُوب", transliteration: "uslūb", meaning: "style" }
      ]
    },
    exerciseCount: 16, prerequisites: ["4-14"]
  },
  {
    id: "4-16", phaseId: 4, order: 16,
    title: "Modern Arabic Literature",
    titleAr: "الأدب العربي الحديث",
    titleFr: "Littérature arabe moderne",
    description: "Explore modern Arabic literary movements",
    descriptionFr: "Explorez les mouvements littéraires arabes modernes",
    objectives: ["Understand النهضة literary renaissance", "Know major modern authors", "Read contemporary texts", "Analyze modern themes"],
    estimatedTime: 55, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "النهضة (Renaissance)", content: "19th century revival:\n• Contact with West\n• Printing press impact\n• New genres: novel, short story, drama" },
        { title: "Major Authors", content: "نَجِيب مَحْفُوظ - Nobel laureate, Cairo Trilogy\nتَوْفِيق الحَكِيم - drama\nجُبْرَان خَلِيل جُبْرَان - poetic prose\nمَحْمُود دَرْوِيش - poetry of exile" },
        { title: "Modern Themes", content: "Identity and post-colonialism\nUrbanization and social change\nWomen's rights\nPalestinian cause" }
      ],
      vocabulary: [
        { arabic: "أَدَب", transliteration: "adab", meaning: "literature" },
        { arabic: "رِوَايَة", transliteration: "riwāya", meaning: "novel" },
        { arabic: "قِصَّة قَصِيرَة", transliteration: "qiṣṣa qaṣīra", meaning: "short story" },
        { arabic: "مَسْرَح", transliteration: "masraḥ", meaning: "theater" },
        { arabic: "نَهْضَة", transliteration: "nahḍa", meaning: "renaissance" }
      ]
    },
    exerciseCount: 16, prerequisites: ["4-15"]
  },
  {
    id: "4-17", phaseId: 4, order: 17,
    title: "Religious & Classical Texts",
    titleAr: "النصوص الدينية والكلاسيكية",
    titleFr: "Textes religieux et classiques",
    description: "Introduction to Quranic and classical text styles",
    descriptionFr: "Introduction aux styles des textes coraniques et classiques",
    objectives: ["Recognize Quranic style", "Understand classical grammar", "Read with tajweed awareness", "Appreciate linguistic beauty"],
    estimatedTime: 55, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "Quranic Arabic", content: "Classical but accessible style\nUnique grammatical constructions\nRhythmic prose (not poetry)\nFoundation of فُصْحَى" },
        { title: "Special Features", content: "Rare vocabulary: words with specific Quranic meanings\nOath formulas: وَالفَجْرِ، وَالشَّمْسِ\nStory patterns: قَصَص القُرْآن" },
        { title: "Approaching Classical Texts", content: "• Use تَفْسِير (commentary)\n• Learn إِعْرَاب (parsing)\n• Study بَلَاغَة (rhetoric)" }
      ],
      vocabulary: [
        { arabic: "قُرْآن", transliteration: "qur'ān", meaning: "Quran" },
        { arabic: "آيَة", transliteration: "āya", meaning: "verse/sign" },
        { arabic: "سُورَة", transliteration: "sūra", meaning: "chapter" },
        { arabic: "تَفْسِير", transliteration: "tafsīr", meaning: "interpretation" },
        { arabic: "تَجْوِيد", transliteration: "tajwīd", meaning: "recitation rules" }
      ]
    },
    exerciseCount: 16, prerequisites: ["4-16"]
  },
  {
    id: "4-18", phaseId: 4, order: 18,
    title: "Literary Analysis Skills",
    titleAr: "مهارات التحليل الأدبي",
    titleFr: "Compétences en analyse littéraire",
    description: "Develop skills for analyzing Arabic texts",
    descriptionFr: "Développez vos compétences d'analyse des textes arabes",
    objectives: ["Analyze structure and theme", "Identify literary devices", "Write critical responses", "Compare texts"],
    estimatedTime: 55, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "Analysis Framework", content: "المَوْضُوع - Theme\nالأُسْلُوب - Style\nاللُّغَة - Language\nالصُّوَر - Imagery\nالبِنَاء - Structure" },
        { title: "Literary Devices", content: "تَشْبِيه - simile\nاِسْتِعَارَة - metaphor\nكِنَايَة - metonymy\nمَجَاز - figurative language" },
        { title: "Critical Vocabulary", content: "يُعَبِّرُ عَن - expresses\nيُصَوِّرُ - depicts\nيَرْمُزُ إِلَى - symbolizes\nيُوحِي بِـ - suggests" }
      ],
      vocabulary: [
        { arabic: "تَحْلِيل", transliteration: "taḥlīl", meaning: "analysis" },
        { arabic: "نَقْد أَدَبِيّ", transliteration: "naqd adabī", meaning: "literary criticism" },
        { arabic: "تَفْسِير", transliteration: "tafsīr", meaning: "interpretation" },
        { arabic: "مَعْنَى", transliteration: "ma'nā", meaning: "meaning" },
        { arabic: "رَمْز", transliteration: "ramz", meaning: "symbol" }
      ]
    },
    exerciseCount: 17, prerequisites: ["4-17"]
  },
  // SECTION 4: MEDIA & PROFESSIONAL (Lessons 19-24)
  {
    id: "4-19", phaseId: 4, order: 19,
    title: "News Arabic",
    titleAr: "لغة الأخبار",
    titleFr: "L'arabe des médias",
    description: "Master Arabic news language and conventions",
    descriptionFr: "Maîtrisez le langage et les conventions de l'arabe journalistique",
    objectives: ["Understand news structure", "Learn journalistic vocabulary", "Read Arabic newspapers", "Watch Arabic news"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "News Structure", content: "مَنْ؟ مَاذَا؟ مَتَى؟ أَيْنَ؟ لِمَاذَا؟ كَيْفَ؟\nWho? What? When? Where? Why? How?\nLead (مُقَدِّمَة) answers key questions" },
        { title: "News Vocabulary", content: "أَعْلَنَ - announced\nصَرَّحَ - declared\nأَفَادَ - reported\nكَشَفَ - revealed\nنَفَى - denied" },
        { title: "News Sources", content: "Major channels: الجَزِيرَة، العَرَبِيَّة، BBC عَرَبِي\nNewspapers: الأَهْرَام، الشَّرْق الأَوْسَط" }
      ],
      vocabulary: [
        { arabic: "مُرَاسِل", transliteration: "murāsil", meaning: "correspondent" },
        { arabic: "تَقْرِير", transliteration: "taqrīr", meaning: "report" },
        { arabic: "عَاجِل", transliteration: "'ājil", meaning: "breaking/urgent" },
        { arabic: "مَصَادِر", transliteration: "maṣādir", meaning: "sources" },
        { arabic: "نَاطِق رَسْمِيّ", transliteration: "nāṭiq rasmī", meaning: "official spokesperson" }
      ]
    },
    exerciseCount: 16, prerequisites: ["4-18"]
  },
  {
    id: "4-20", phaseId: 4, order: 20,
    title: "Political Arabic",
    titleAr: "اللغة السياسية",
    titleFr: "L'arabe politique",
    description: "Learn political vocabulary and discourse",
    descriptionFr: "Apprenez le vocabulaire et le discours politiques",
    objectives: ["Understand political systems", "Learn diplomatic language", "Discuss current events", "Analyze political speech"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Government Terms", content: "حُكُومَة - government\nبَرْلَمَان - parliament\nرَئِيس - president\nوَزِير - minister\nاِنْتِخَابَات - elections" },
        { title: "Diplomatic Language", content: "عَلَاقَات دِبْلُومَاسِيَّة - diplomatic relations\nمُفَاوَضَات - negotiations\nاِتِّفَاقِيَّة - agreement\nمُعَاهَدَة - treaty" },
        { title: "International Organizations", content: "الأُمَم المُتَّحِدَة - United Nations\nجَامِعَة الدُّوَل العَرَبِيَّة - Arab League\nمَجْلِس الأَمْن - Security Council" }
      ],
      vocabulary: [
        { arabic: "سِيَاسَة", transliteration: "siyāsa", meaning: "politics/policy" },
        { arabic: "دِيمُقْرَاطِيَّة", transliteration: "dīmuqrāṭiyya", meaning: "democracy" },
        { arabic: "سِيَادَة", transliteration: "siyāda", meaning: "sovereignty" },
        { arabic: "مُوَاطِن", transliteration: "muwāṭin", meaning: "citizen" },
        { arabic: "حُقُوق الإِنْسَان", transliteration: "ḥuqūq al-insān", meaning: "human rights" }
      ]
    },
    exerciseCount: 16, prerequisites: ["4-19"]
  },
  {
    id: "4-21", phaseId: 4, order: 21,
    title: "Economic Arabic",
    titleAr: "اللغة الاقتصادية",
    titleFr: "L'arabe économique",
    description: "Learn economic and business vocabulary",
    descriptionFr: "Apprenez le vocabulaire économique et commercial",
    objectives: ["Understand economic terms", "Read financial news", "Discuss business topics", "Use commercial vocabulary"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Economic Terms", content: "اِقْتِصَاد - economy\nنَاتِج مَحَلِّيّ - GDP\nتَضَخُّم - inflation\nبَطَالَة - unemployment\nاِسْتِثْمَار - investment" },
        { title: "Business Vocabulary", content: "شَرِكَة - company\nسُوق - market\nتِجَارَة - trade\nصَادِرَات - exports\nوَارِدَات - imports" },
        { title: "Financial Terms", content: "بَنْك - bank\nقَرْض - loan\nفَائِدَة - interest\nأَسْهُم - stocks\nعُمْلَة - currency" }
      ],
      vocabulary: [
        { arabic: "اِقْتِصَادِيّ", transliteration: "iqtiṣādī", meaning: "economic" },
        { arabic: "رَأْس مَال", transliteration: "ra's māl", meaning: "capital" },
        { arabic: "رِبْح", transliteration: "ribḥ", meaning: "profit" },
        { arabic: "خَسَارَة", transliteration: "khasāra", meaning: "loss" },
        { arabic: "مِيزَانِيَّة", transliteration: "mīzāniyya", meaning: "budget" }
      ]
    },
    exerciseCount: 16, prerequisites: ["4-20"]
  },
  {
    id: "4-22", phaseId: 4, order: 22,
    title: "Legal Arabic",
    titleAr: "اللغة القانونية",
    titleFr: "L'arabe juridique",
    description: "Introduction to Arabic legal terminology",
    descriptionFr: "Introduction à la terminologie juridique arabe",
    objectives: ["Understand legal concepts", "Read contracts", "Learn court vocabulary", "Use formal legal language"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Legal System", content: "قَانُون - law\nدُسْتُور - constitution\nمَحْكَمَة - court\nقَاضٍ - judge\nمُحَامٍ - lawyer" },
        { title: "Legal Procedures", content: "دَعْوَى - lawsuit\nحُكْم - verdict\nاِسْتِئْنَاف - appeal\nشَهَادَة - testimony\nدَلِيل - evidence" },
        { title: "Contract Language", content: "عَقْد - contract\nطَرَف - party\nشُرُوط - terms\nاِلْتِزَام - obligation\nفَسْخ - annulment" }
      ],
      vocabulary: [
        { arabic: "قَانُونِيّ", transliteration: "qānūnī", meaning: "legal" },
        { arabic: "حَقّ", transliteration: "ḥaqq", meaning: "right" },
        { arabic: "وَاجِب", transliteration: "wājib", meaning: "duty" },
        { arabic: "جَرِيمَة", transliteration: "jarīma", meaning: "crime" },
        { arabic: "عُقُوبَة", transliteration: "'uqūba", meaning: "punishment" }
      ]
    },
    exerciseCount: 16, prerequisites: ["4-21"]
  },
  {
    id: "4-23", phaseId: 4, order: 23,
    title: "Academic Arabic",
    titleAr: "اللغة الأكاديمية",
    titleFr: "L'arabe académique",
    description: "Master academic writing and reading",
    descriptionFr: "Maîtrisez la lecture et l'écriture académiques",
    objectives: ["Write academic essays", "Use citation and reference", "Structure arguments", "Read scholarly articles"],
    estimatedTime: 55, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "Academic Structure", content: "مُقَدِّمَة - Introduction\nمَنْهَجِيَّة - Methodology\nنَتَائِج - Results\nمُنَاقَشَة - Discussion\nخَاتِمَة - Conclusion" },
        { title: "Citation Language", content: "وَفْقًا لِـ / حَسَبَ - according to\nكَمَا ذَكَرَ - as X mentioned\nيَرَى X أَنَّ - X believes that\nيُشِيرُ إِلَى - refers to" },
        { title: "Academic Vocabulary", content: "بَحْث - research\nدِرَاسَة - study\nنَظَرِيَّة - theory\nفَرَضِيَّة - hypothesis" }
      ],
      vocabulary: [
        { arabic: "أَكَادِيمِيّ", transliteration: "akādīmī", meaning: "academic" },
        { arabic: "مَرْجِع", transliteration: "marji'", meaning: "reference" },
        { arabic: "مَصْدَر", transliteration: "maṣdar", meaning: "source" },
        { arabic: "اِقْتِبَاس", transliteration: "iqtibās", meaning: "quotation" },
        { arabic: "حَاشِيَة", transliteration: "ḥāshiya", meaning: "footnote" }
      ]
    },
    exerciseCount: 17, prerequisites: ["4-22"]
  },
  {
    id: "4-24", phaseId: 4, order: 24,
    title: "Presentation Skills in Arabic",
    titleAr: "مهارات العرض والتقديم",
    titleFr: "Compétences de présentation en arabe",
    description: "Learn to present in Arabic professionally",
    descriptionFr: "Apprenez à présenter professionnellement en arabe",
    objectives: ["Structure presentations", "Use transition phrases", "Handle Q&A", "Present data and arguments"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Opening", content: "بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ - opening formula\nأَوَدُّ أَنْ أُقَدِّمَ - I would like to present\nمَوْضُوعُ حَدِيثِي اليَوْمَ - Today's topic is" },
        { title: "Transitions", content: "أَوَّلًا / ثَانِيًا / أَخِيرًا\nبِالإِضَافَةِ إِلَى ذَلِكَ - in addition\nمِنْ نَاحِيَةٍ أُخْرَى - on the other hand\nفِي الخِتَام - in conclusion" },
        { title: "Closing", content: "شُكْرًا لِحُسْنِ اسْتِمَاعِكُم - Thank you for listening\nأَنَا مُسْتَعِدٌّ لِلأَسْئِلَة - I'm ready for questions" }
      ],
      vocabulary: [
        { arabic: "عَرْض تَقْدِيمِيّ", transliteration: "'arḍ taqdīmī", meaning: "presentation" },
        { arabic: "شَرِيحَة", transliteration: "sharīḥa", meaning: "slide" },
        { arabic: "رَسْم بَيَانِيّ", transliteration: "rasm bayānī", meaning: "chart/graph" },
        { arabic: "جُمْهُور", transliteration: "jumhūr", meaning: "audience" },
        { arabic: "مُلَخَّص", transliteration: "mulakhkhaṣ", meaning: "summary" }
      ]
    },
    exerciseCount: 16, prerequisites: ["4-23"]
  },
  // SECTION 5: CULTURAL UNDERSTANDING (Lessons 25-30)
  {
    id: "4-25", phaseId: 4, order: 25,
    title: "Arab Culture & Society",
    titleAr: "الثقافة والمجتمع العربي",
    titleFr: "Culture et société arabes",
    description: "Understand Arab cultural values and society",
    descriptionFr: "Comprenez les valeurs culturelles et la société arabes",
    objectives: ["Understand cultural values", "Navigate social situations", "Appreciate diversity", "Avoid cultural misunderstandings"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Core Values", content: "كَرَم - generosity\nشَرَف - honor\nضِيَافَة - hospitality\nصِلَة الرَّحِم - family ties\nاِحْتِرَام - respect" },
        { title: "Social Etiquette", content: "Greetings are elaborate and important\nGuest treatment is paramount\nElderly are highly respected\nFamily is central to identity" },
        { title: "Regional Diversity", content: "المَشْرِق - Levant\nالمَغْرِب - North Africa\nالخَلِيج - Gulf\nEach has distinct customs while sharing core values" }
      ],
      vocabulary: [
        { arabic: "ثَقَافَة", transliteration: "thaqāfa", meaning: "culture" },
        { arabic: "تَقَالِيد", transliteration: "taqālīd", meaning: "traditions" },
        { arabic: "عَادَات", transliteration: "'ādāt", meaning: "customs" },
        { arabic: "قِيَم", transliteration: "qiyam", meaning: "values" },
        { arabic: "هُوِيَّة", transliteration: "huwiyya", meaning: "identity" }
      ]
    },
    exerciseCount: 15, prerequisites: ["4-24"]
  },
  {
    id: "4-26", phaseId: 4, order: 26,
    title: "Proverbs & Idioms",
    titleAr: "الأمثال والتعبيرات",
    titleFr: "Proverbes et expressions idiomatiques",
    description: "Learn Arabic proverbs and idiomatic expressions",
    descriptionFr: "Apprenez les proverbes et expressions idiomatiques arabes",
    objectives: ["Understand common proverbs", "Use idioms correctly", "Appreciate wisdom literature", "Sound more natural"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Common Proverbs", content: "العِلْمُ فِي الصِّغَرِ كَالنَّقْشِ فِي الحَجَرِ\nLearning in youth is like carving in stone\n\nمَنْ جَدَّ وَجَدَ\nWhoever strives, finds" },
        { title: "Idioms", content: "عَلَى رَأْسِي - at your service (lit. on my head)\nفِي عَيْنِي - very dear (lit. in my eye)\nاِبْنُ البَلَد - local person, patriot" },
        { title: "Expressions", content: "إِنْ شَاءَ اللهُ - God willing\nمَا شَاءَ اللهُ - what God has willed (admiration)\nالحَمْدُ لِلَّهِ - praise be to God" }
      ],
      vocabulary: [
        { arabic: "مَثَل", transliteration: "mathal", meaning: "proverb" },
        { arabic: "حِكْمَة", transliteration: "ḥikma", meaning: "wisdom" },
        { arabic: "تَعْبِير", transliteration: "ta'bīr", meaning: "expression" },
        { arabic: "مَجَازِيّ", transliteration: "majāzī", meaning: "figurative" },
        { arabic: "حَرْفِيّ", transliteration: "ḥarfī", meaning: "literal" }
      ]
    },
    exerciseCount: 15, prerequisites: ["4-25"]
  },
  {
    id: "4-27", phaseId: 4, order: 27,
    title: "Islamic Cultural Terms",
    titleAr: "المصطلحات الثقافية الإسلامية",
    titleFr: "Termes culturels islamiques",
    description: "Learn essential Islamic cultural vocabulary",
    descriptionFr: "Apprenez le vocabulaire culturel islamique essentiel",
    objectives: ["Understand religious vocabulary", "Navigate cultural contexts", "Show cultural awareness", "Avoid misunderstandings"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Daily Expressions", content: "بِسْمِ اللهِ - in God's name (starting)\nالحَمْدُ لِلَّهِ - praise God (gratitude)\nسُبْحَانَ اللهِ - glory to God (amazement)\nأَسْتَغْفِرُ اللهَ - I seek God's forgiveness" },
        { title: "Religious Practices", content: "صَلَاة - prayer\nصَوْم/صِيَام - fasting\nزَكَاة - charity\nحَجّ - pilgrimage" },
        { title: "Important Terms", content: "حَلَال - permitted\nحَرَام - forbidden\nسُنَّة - prophetic tradition\nفِقْه - jurisprudence" }
      ],
      vocabulary: [
        { arabic: "مَسْجِد/جَامِع", transliteration: "masjid/jāmi'", meaning: "mosque" },
        { arabic: "إِمَام", transliteration: "imām", meaning: "prayer leader" },
        { arabic: "خُطْبَة", transliteration: "khuṭba", meaning: "sermon" },
        { arabic: "دُعَاء", transliteration: "du'ā'", meaning: "supplication" },
        { arabic: "ذِكْر", transliteration: "dhikr", meaning: "remembrance" }
      ]
    },
    exerciseCount: 15, prerequisites: ["4-26"]
  },
  {
    id: "4-28", phaseId: 4, order: 28,
    title: "Arab History Overview",
    titleAr: "نظرة عامة على التاريخ العربي",
    titleFr: "Aperçu de l'histoire arabe",
    description: "Learn key periods of Arab history",
    descriptionFr: "Apprenez les périodes clés de l'histoire arabe",
    objectives: ["Understand historical periods", "Recognize historical figures", "Connect history to language", "Appreciate heritage"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Major Periods", content: "الجَاهِلِيَّة - Pre-Islamic era\nصَدْر الإِسْلَام - Early Islamic period\nالعَصْر الأُمَوِيّ - Umayyad era\nالعَصْر العَبَّاسِيّ - Abbasid era (Golden Age)\nالعَصْر الحَدِيث - Modern era" },
        { title: "Golden Age", content: "بَغْدَاد - center of learning\nبَيْت الحِكْمَة - House of Wisdom\nTranslation movement\nAdvances in science, medicine, philosophy" },
        { title: "Modern History", content: "الاِسْتِعْمَار - colonialism\nالاِسْتِقْلَال - independence\nالقَضِيَّة الفِلَسْطِينِيَّة - Palestinian cause\nالرَّبِيع العَرَبِيّ - Arab Spring" }
      ],
      vocabulary: [
        { arabic: "تَارِيخ", transliteration: "tārīkh", meaning: "history" },
        { arabic: "حَضَارَة", transliteration: "ḥaḍāra", meaning: "civilization" },
        { arabic: "تُرَاث", transliteration: "turāth", meaning: "heritage" },
        { arabic: "عَصْر", transliteration: "'aṣr", meaning: "era/age" },
        { arabic: "خِلَافَة", transliteration: "khilāfa", meaning: "caliphate" }
      ]
    },
    exerciseCount: 15, prerequisites: ["4-27"]
  },
  {
    id: "4-29", phaseId: 4, order: 29,
    title: "Arabic Arts & Music",
    titleAr: "الفنون والموسيقى العربية",
    titleFr: "Arts et musique arabes",
    description: "Explore Arabic artistic traditions",
    descriptionFr: "Explorez les traditions artistiques arabes",
    objectives: ["Appreciate Arabic music", "Understand art forms", "Learn artistic vocabulary", "Discuss arts in Arabic"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Music", content: "مَقَام - modal system\nطَرَب - musical ecstasy\nعُود - oud (lute)\nنَاي - flute\nدُفّ - drum" },
        { title: "Visual Arts", content: "خَطّ - calligraphy\nزَخْرَفَة - ornamentation\nأَرَابِيسْك - arabesque\nفَنّ إِسْلَامِيّ - Islamic art" },
        { title: "Famous Artists", content: "أُمّ كُلْثُوم - legendary singer\nفَيْرُوز - Lebanese singer\nعَبْد الحَلِيم - romantic singer\nمَحْمُود دَرْوِيش - poet" }
      ],
      vocabulary: [
        { arabic: "فَنّ", transliteration: "fann", meaning: "art" },
        { arabic: "مُوسِيقَى", transliteration: "mūsīqā", meaning: "music" },
        { arabic: "غِنَاء", transliteration: "ghinā'", meaning: "singing" },
        { arabic: "أُغْنِيَة", transliteration: "ughniya", meaning: "song" },
        { arabic: "فَنَّان", transliteration: "fannān", meaning: "artist" }
      ]
    },
    exerciseCount: 15, prerequisites: ["4-28"]
  },
  {
    id: "4-30", phaseId: 4, order: 30,
    title: "Phase 4 Review & Assessment",
    titleAr: "مراجعة وتقييم المرحلة الرابعة",
    titleFr: "Révision et évaluation de la phase 4",
    description: "Comprehensive review of all Phase 4 material",
    descriptionFr: "Révision complète de tout le contenu de la phase 4",
    objectives: ["Review advanced grammar", "Demonstrate literary knowledge", "Show professional language skills", "Exhibit cultural understanding"],
    estimatedTime: 60, difficulty: "hard", xpReward: 120,
    content: {
      theory: [
        { title: "Grammar Mastery", content: "Full case system (I'rab)\nAll derived forms\nNumber agreement\nWeak verbs" },
        { title: "Literature Skills", content: "Poetry basics\nProse styles\nClassical and modern texts\nLiterary analysis" },
        { title: "Professional Skills", content: "News and political Arabic\nBusiness and legal language\nAcademic writing\nPresentations" }
      ],
      vocabulary: [
        { arabic: "طَلَاقَة", transliteration: "ṭalāqa", meaning: "fluency" },
        { arabic: "إِتْقَان", transliteration: "itqān", meaning: "mastery" },
        { arabic: "كَفَاءَة", transliteration: "kafā'a", meaning: "competence" },
        { arabic: "مَهَارَة", transliteration: "mahāra", meaning: "skill" },
        { arabic: "شَهَادَة", transliteration: "shahāda", meaning: "certificate" }
      ]
    },
    exerciseCount: 22, prerequisites: ["4-29"]
  }
];
