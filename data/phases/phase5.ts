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
    titleFr: "Style de l'arabe classique",
    description: "Master the distinctive features of classical Arabic",
    descriptionAr: "أتقن السمات المميزة للعربية الكلاسيكية والقديمة",
    descriptionFr: "Maîtrisez les caractéristiques distinctives de l'arabe classique",
    objectives: ["Recognize classical style markers", "Read pre-modern texts", "Understand archaic forms", "Appreciate linguistic beauty"],
    objectivesAr: ["التعرف على علامات الأسلوب الكلاسيكي", "قراءة النصوص ما قبل الحديثة", "فهم الأشكال الأرخائية", "تقدير الجمال اللغوي"],
    objectivesFr: ["Reconnaître les marqueurs du style classique", "Lire les textes prémodernes", "Comprendre les formes archaïques", "Apprécier la beauté linguistique"],
    estimatedTime: 55, difficulty: "hard", xpReward: 85,
    content: {
      theory: [
        { title: "Classical Features", titleAr: "السمات الكلاسيكية", titleFr: "Caractéristiques classiques", content: "Full case endings (i'rab) consistently used\nClassical vocabulary (rare in modern Arabic)\nComplex sentence structures\nRhetorical devices (بديع)", contentAr: "استخدام الحروف الإعرابية الكاملة (الإعراب) باستمرار\nالمفردات الكلاسيكية (نادرة في العربية الحديثة)\nالهياكل الجملية المعقدة\nالأجهزة البلاغية (البديع)", contentFr: "Terminaisons casuelles complètes (i'rab) utilisées systématiquement\nVocabulaire classique (rare en arabe moderne)\nStructures de phrases complexes\nProcédés rhétoriques (بديع)" },
        { title: "Archaic Forms", titleAr: "الأشكال الأرخائية", titleFr: "Formes archaïques", content: "إِذْ for past time (when)\nلَمَّا meaning 'when' (not 'not yet')\nقَدْ for emphasis\nOath formulas: وَاللهِ، تَاللهِ", contentAr: "إِذْ للدلالة على الزمن الماضي (متى)\nلَمَّا بمعنى 'متى' (وليس 'لم بعد')\nقَدْ للتأكيد\nصيغ الحلف: وَاللهِ، تَاللهِ", contentFr: "إِذْ pour le temps passé (quand)\nلَمَّا signifiant « quand » (pas « pas encore »)\nقَدْ pour l'emphase\nFormules de serment: وَاللهِ، تَاللهِ" },
        { title: "Reading Classical Texts", titleAr: "قراءة النصوص الكلاسيكية", titleFr: "Lecture de textes classiques", content: "Start with voweled texts\nUse classical dictionaries: لِسَان العَرَب\nStudy تَفْسِير for Quran\nPractice إِعْرَاب (parsing)", contentAr: "ابدأ بالنصوص المشكولة بالحروف\nاستخدم القواميس الكلاسيكية: لسان العرب\nادرس التفسير للقرآن الكريم\nمارس الإعراب (التحليل النحوي)", contentFr: "Commencez par des textes vocalisés\nUtilisez des dictionnaires classiques: لِسَان العَرَب\nÉtudiez le تَفْسِير pour le Coran\nPratiquez إِعْرَاب (analyse grammaticale)" }
      ],
      vocabulary: [
        { arabic: "فُصْحَى", transliteration: "fuṣḥā", meaning: "classical Arabic", meaningAr: "العربية الفصحى القديمة", meaningFr: "arabe classique" },
        { arabic: "عَامِّيَّة", transliteration: "'āmmiyya", meaning: "colloquial Arabic", meaningAr: "اللغة العامية أو المحكية", meaningFr: "arabe parlé" },
        { arabic: "نَحْو", transliteration: "naḥw", meaning: "grammar", meaningAr: "علم القواعد النحوية", meaningFr: "grammaire" },
        { arabic: "صَرْف", transliteration: "ṣarf", meaning: "morphology", meaningAr: "علم الصرف والتحويل", meaningFr: "morphologie" },
        { arabic: "بَلَاغَة", transliteration: "balāgha", meaning: "rhetoric", meaningAr: "فن البلاغة والفصاحة", meaningFr: "rhétorique" }
      ]
    },
    exerciseCount: 18, prerequisites: []
  },
  {
    id: "5-2", phaseId: 5, order: 2,
    title: "Quranic Arabic Features",
    titleAr: "خصائص لغة القرآن",
    titleFr: "Caractéristiques de l'arabe coranique",
    description: "Study the unique linguistic features of Quranic Arabic",
    descriptionAr: "ادرس السمات اللغوية الفريدة للعربية القرآنية",
    descriptionFr: "Étudiez les caractéristiques linguistiques uniques de l'arabe coranique",
    objectives: ["Recognize Quranic style", "Understand unique vocabulary", "Appreciate rhetorical beauty", "Read with understanding"],
    objectivesAr: ["التعرف على الأسلوب القرآني", "فهم المفردات الفريدة", "تقدير الجمال البلاغي", "القراءة بفهم وتدبر"],
    objectivesFr: ["Reconnaître le style coranique", "Comprendre le vocabulaire unique", "Apprécier la beauté rhétorique", "Lire avec compréhension"],
    estimatedTime: 55, difficulty: "hard", xpReward: 85,
    content: {
      theory: [
        { title: "Unique Vocabulary", titleAr: "المفردات الفريدة", titleFr: "Vocabulaire unique", content: "Some words have specific Quranic meanings:\nكَافِر - disbeliever (vs. farmer)\nصَلَاة - ritual prayer (vs. supplication)\nسَبِيل - way/path (often religious)", contentAr: "بعض الكلمات لها معانٍ قرآنية محددة:\nكَافِر - الكافر بالله (مقابل المزارع)\nصَلَاة - الصلاة المفروضة (مقابل الدعاء)\nسَبِيل - الطريق والدين (غالباً بمعنى ديني)", contentFr: "Certains mots ont des significations spécifiques au Coran:\nكَافِر - incroyant (vs. agriculteur)\nصَلَاة - prière rituelle (vs. supplication)\nسَبِيل - voie/chemin (souvent religieux)" },
        { title: "Stylistic Features", titleAr: "السمات الأسلوبية", titleFr: "Caractéristiques stylistiques", content: "Ring composition (مُعَاقَبَة)\nParallelism (مُقَابَلَة)\nRepetition for emphasis\nRhythmic prose (سَجْع)", contentAr: "التراكيب الحلقية (المعاقبة)\nالمقابلة والتقابل\nالتكرار للتأكيد والإيضاح\nالنثر الموزون (السجع)", contentFr: "Composition circulaire (مُعَاقَبَة)\nParallélisme (مُقَابَلَة)\nRépétition pour l'emphase\nProse rythmique (سَجْع)" },
        { title: "Grammar Variations", titleAr: "الاختلافات النحوية", titleFr: "Variations grammaticales", content: "Some grammatical forms unique to Quran\nInfluence on all later Arabic\nFoundation of فُصْحَى standards", contentAr: "أشكال نحوية فريدة في القرآن الكريم\nتأثيرها على العربية اللاحقة\nأساس معايير اللغة الفصحى", contentFr: "Certaines formes grammaticales uniques au Coran\nInfluence sur tout l'arabe ultérieur\nFondation des normes فُصْحَى" }
      ],
      vocabulary: [
        { arabic: "تِلَاوَة", transliteration: "tilāwa", meaning: "recitation", meaningAr: "تلاوة القرآن الكريم والقراءة", meaningFr: "récitation" },
        { arabic: "تَرْتِيل", transliteration: "tartīl", meaning: "measured recitation", meaningAr: "التلاوة الرتيلة والمتأنية", meaningFr: "récitation mesurée" },
        { arabic: "آيَة", transliteration: "āya", meaning: "verse/sign", meaningAr: "الآية القرآنية أو العلامة", meaningFr: "verset/signe" },
        { arabic: "سُورَة", transliteration: "sūra", meaning: "chapter", meaningAr: "السورة من سور القرآن", meaningFr: "sourate" },
        { arabic: "جُزْء", transliteration: "juz'", meaning: "part (1/30 of Quran)", meaningAr: "الجزء من أجزاء القرآن (واحد من ثلاثين)", meaningFr: "partie (1/30 du Coran)" }
      ]
    },
    exerciseCount: 18, prerequisites: ["5-1"]
  },
  {
    id: "5-3", phaseId: 5, order: 3,
    title: "Hadith Literature",
    titleAr: "الأحاديث النبوية",
    titleFr: "La littérature du Hadith",
    description: "Introduction to Prophetic traditions",
    descriptionAr: "مقدمة إلى التقاليد النبوية الشريفة",
    descriptionFr: "Introduction aux traditions prophétiques",
    objectives: ["Understand hadith structure", "Learn key terminology", "Read basic hadiths", "Appreciate historical significance"],
    objectivesAr: ["فهم بناء الحديث النبوي", "تعلم المصطلحات الأساسية", "قراءة الأحاديث الأساسية", "تقدير الأهمية التاريخية"],
    objectivesFr: ["Comprendre la structure du hadith", "Apprendre la terminologie clé", "Lire les hadiths de base", "Apprécier la signification historique"],
    estimatedTime: 55, difficulty: "hard", xpReward: 85,
    content: {
      theory: [
        { title: "Hadith Structure", titleAr: "بناء الحديث النبوي", titleFr: "Structure du hadith", content: "سَنَد (chain of narration) + مَتْن (text)\nExample: قَالَ رَسُولُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ:\n'The Prophet said...'", contentAr: "الإسناد (سلسلة الرواة) + المتن (النص)\nمثال: قَالَ رَسُولُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ:\nقال النبي صلى الله عليه وسلم", contentFr: "سَنَد (chaîne de narration) + مَتْن (texte)\nExemple: قَالَ رَسُولُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ:\n« Le Prophète a dit... »" },
        { title: "Major Collections", titleAr: "المجموعات الكبرى", titleFr: "Collections majeures", content: "صَحِيح البُخَارِيّ - most authentic\nصَحِيح مُسْلِم\nسُنَن أَبِي دَاوُد\nجَامِع التِّرْمِذِيّ", contentAr: "صحيح البخاري - الأكثر مصداقية\nصحيح مسلم\nسنن أبي داود\nجامع الترمذي", contentFr: "صَحِيح البُخَارِيّ - le plus authentique\nصَحِيح مُسْلِم\nسُنَن أَبِي دَاوُد\nجَامِع التِّرْمِذِيّ" },
        { title: "Key Vocabulary", titleAr: "المصطلحات الأساسية", titleFr: "Vocabulaire clé", content: "حَدِيث - narration\nرَاوٍ - narrator\nصَحِيح - authentic\nضَعِيف - weak\nمَوْضُوع - fabricated", contentAr: "حَدِيث - الرواية والحديث الشريف\nرَاوٍ - الشخص الذي يروي الحديث\nصَحِيح - الحديث الصحيح الثابت\nضَعِيف - الحديث الضعيف\nمَوْضُوع - الحديث الموضوع المختلق", contentFr: "حَدِيث - narration\nرَاوٍ - narrateur\nصَحِيح - authentique\nضَعِيف - faible\nمَوْضُوع - fabriqué" }
      ],
      vocabulary: [
        { arabic: "حَدِيث", transliteration: "ḥadīth", meaning: "narration", meaningAr: "الرواية والحديث الشريف", meaningFr: "narration" },
        { arabic: "سُنَّة", transliteration: "sunna", meaning: "prophetic tradition", meaningAr: "السنة النبوية والتقاليد النبوية", meaningFr: "tradition prophétique" },
        { arabic: "إِسْنَاد", transliteration: "isnād", meaning: "chain of narration", meaningAr: "السند أو سلسلة الرواة", meaningFr: "chaîne de narration" },
        { arabic: "مَتْن", transliteration: "matn", meaning: "text body", meaningAr: "المتن أو نص الحديث", meaningFr: "corps du texte" },
        { arabic: "رِوَايَة", transliteration: "riwāya", meaning: "narration/version", meaningAr: "الرواية أو الطريقة المختلفة", meaningFr: "narration/version" }
      ]
    },
    exerciseCount: 18, prerequisites: ["5-2"]
  },
  {
    id: "5-4", phaseId: 5, order: 4,
    title: "Classical Commentary (Tafsir)",
    titleAr: "التفسير الكلاسيكي",
    titleFr: "Le commentaire classique (Tafsir)",
    description: "Introduction to classical Quranic commentary",
    descriptionAr: "مقدمة إلى التفسير الكلاسيكي للقرآن الكريم",
    descriptionFr: "Introduction au commentaire coranique classique",
    objectives: ["Understand tafsir methodology", "Read basic tafsir", "Learn commentary vocabulary", "Appreciate interpretive traditions"],
    objectivesAr: ["فهم منهجية التفسير", "قراءة التفسير الأساسي", "تعلم مفردات التعليقات", "تقدير التقاليد التفسيرية"],
    objectivesFr: ["Comprendre la méthodologie du tafsir", "Lire le tafsir de base", "Apprendre le vocabulaire du commentaire", "Apprécier les traditions interprétatives"],
    estimatedTime: 55, difficulty: "hard", xpReward: 85,
    content: {
      theory: [
        { title: "Types of Tafsir", titleAr: "أنواع التفسير", titleFr: "Types de Tafsir", content: "تَفْسِير بِالمَأْثُور - tradition-based\nتَفْسِير بِالرَّأْيِ - reason-based\nتَفْسِير لُغَوِيّ - linguistic", contentAr: "التفسير بالمأثور - القائم على النقل والرواية\nالتفسير بالرأي - القائم على العقل والاجتهاد\nالتفسير اللغوي - بناءً على اللغة والبلاغة", contentFr: "تَفْسِير بِالمَأْثُور - basé sur la tradition\nتَفْسِير بِالرَّأْيِ - basé sur la raison\nتَفْسِير لُغَوِيّ - linguistique" },
        { title: "Major Works", titleAr: "الأعمال الكبرى", titleFr: "Œuvres majeures", content: "تَفْسِير الطَّبَرِيّ - comprehensive early tafsir\nتَفْسِير الزَّمَخْشَرِيّ - linguistic excellence\nتَفْسِير اِبْن كَثِير - popular hadith-based", contentAr: "تفسير الطبري - التفسير الشامل المبكر\nتفسير الزمخشري - الذي يتميز بالبراعة اللغوية\nتفسير ابن كثير - الشهير القائم على الحديث", contentFr: "تَفْسِير الطَّبَرِيّ - tafsir précoce complet\nتَفْسِير الزَّمَخْشَرِيّ - excellence linguistique\nتَفْسِير اِبْن كَثِير - populaire, basé sur le hadith" },
        { title: "Reading Tafsir", titleAr: "قراءة التفسير", titleFr: "Lire le Tafsir", content: "Vocabulary: سَبَب النُّزُول (occasion of revelation)\nقِرَاءَات (variant readings)\nنَسْخ (abrogation)", contentAr: "المصطلحات: سبب النزول (سبب نزول الآية)\nالقراءات (الطرق المختلفة للقراءة)\nالنسخ (إلغاء الحكم السابق)", contentFr: "Vocabulaire: سَبَب النُّزُول (occasion de la révélation)\nقِرَاءَات (lectures variantes)\nنَسْخ (abrogation)" }
      ],
      vocabulary: [
        { arabic: "تَفْسِير", transliteration: "tafsīr", meaning: "interpretation", meaningAr: "شرح وتوضيح معاني القرآن", meaningFr: "interprétation" },
        { arabic: "تَأْوِيل", transliteration: "ta'wīl", meaning: "interpretation/allegorical", meaningAr: "التفسير والمعنى العميق أو المجازي", meaningFr: "interprétation/allégorique" },
        { arabic: "شَرْح", transliteration: "sharḥ", meaning: "explanation", meaningAr: "التوضيح والإيضاح التفصيلي", meaningFr: "explication" },
        { arabic: "مَعْنَى", transliteration: "ma'nā", meaning: "meaning", meaningAr: "المعنى والمقصود والدلالة", meaningFr: "sens" },
        { arabic: "دَلَالَة", transliteration: "dalāla", meaning: "indication/signification", meaningAr: "الدلالة والمعنى والإشارة", meaningFr: "indication/signification" }
      ]
    },
    exerciseCount: 18, prerequisites: ["5-3"]
  },
  {
    id: "5-5", phaseId: 5, order: 5,
    title: "Pre-Islamic Poetry (Jahiliyya)",
    titleAr: "الشعر الجاهلي",
    titleFr: "La poésie préislamique (Jahiliyya)",
    description: "Study the golden age of Arabic poetry",
    descriptionAr: "ادرس العصر الذهبي للشعر العربي",
    descriptionFr: "Étudiez l'âge d'or de la poésie arabe",
    objectives: ["Understand pre-Islamic poetry", "Learn poetic vocabulary", "Analyze classic qasidas", "Appreciate desert imagery"],
    objectivesAr: ["فهم الشعر الجاهلي", "تعلم المفردات الشعرية", "تحليل القصائد الكلاسيكية", "تقدير الصور الصحراوية"],
    objectivesFr: ["Comprendre la poésie préislamique", "Apprendre le vocabulaire poétique", "Analyser les qasidas classiques", "Apprécier l'imagerie du désert"],
    estimatedTime: 55, difficulty: "hard", xpReward: 85,
    content: {
      theory: [
        { title: "المُعَلَّقَات (Suspended Odes)", titleAr: "المعلقات أو الذهبيات", titleFr: "المُعَلَّقَات (Odes suspendues)", content: "Seven (or ten) greatest pre-Islamic poems\nThemes: love, battle, desert journey\nPoets: اِمْرُؤ القَيْس، عَنْتَرَة، زُهَيْر", contentAr: "سبع أو عشر أعظم قصائد ما قبل الإسلام\nالمواضيع: الحب والقتال ورحلات الصحراء\nالشعراء: امرؤ القيس وعنترة وزهير", contentFr: "Sept (ou dix) plus grands poèmes préislamiques\nThèmes: amour, bataille, voyage dans le désert\nPoètes: اِمْرُؤ القَيْس، عَنْتَرَة، زُهَيْر" },
        { title: "Qasida Structure", titleAr: "بناء القصيدة", titleFr: "Structure de la Qasida", content: "نَسِيب - love prelude (atlal theme)\nرِحْلَة - desert journey\nمَدْح/فَخْر - praise/boast", contentAr: "النسيب - مقدمة غزلية (موضوع الأطلال)\nالرحلة - سفر الصحراء\nالمدح أو الفخر - الثناء والتفاخر", contentFr: "نَسِيب - prélude amoureux (thème atlal)\nرِحْلَة - voyage dans le désert\nمَدْح/فَخْر - louange/vantardise" },
        { title: "Poetic Imagery", titleAr: "الصور الشعرية", titleFr: "Imagerie poétique", content: "Desert (صَحْرَاء)\nCamels (إِبِل)\nRuins (أَطْلَال)\nBeloved's departure (رَحِيل)", contentAr: "الصحراء وأراضيها الشاسعة\nالإبل والخيل\nالأطلال والآثار القديمة\nرحيل المحبوب والفراق", contentFr: "Désert (صَحْرَاء)\nChameaux (إِبِل)\nRuines (أَطْلَال)\nDépart du bien-aimé (رَحِيل)" }
      ],
      vocabulary: [
        { arabic: "جَاهِلِيَّة", transliteration: "jāhiliyya", meaning: "pre-Islamic era", meaningAr: "الفترة السابقة للإسلام", meaningFr: "ère préislamique" },
        { arabic: "مُعَلَّقَة", transliteration: "mu'allaqa", meaning: "suspended ode", meaningAr: "القصيدة المعلقة أو الذهبية", meaningFr: "ode suspendue" },
        { arabic: "قَصِيدَة", transliteration: "qaṣīda", meaning: "ode", meaningAr: "القصيدة الطويلة", meaningFr: "ode" },
        { arabic: "أَطْلَال", transliteration: "aṭlāl", meaning: "ruins (of camp)", meaningAr: "آثار المخيم أو الديار القديمة", meaningFr: "ruines (du campement)" },
        { arabic: "فَخْر", transliteration: "fakhr", meaning: "boasting poetry", meaningAr: "الشعر التفاخري أو التباهي", meaningFr: "poésie de vantardise" }
      ]
    },
    exerciseCount: 18, prerequisites: ["5-4"]
  },
  {
    id: "5-6", phaseId: 5, order: 6,
    title: "Classical Prose Masters",
    titleAr: "أساتذة النثر الكلاسيكي",
    titleFr: "Les maîtres de la prose classique",
    description: "Study the greatest classical prose writers",
    descriptionAr: "دراسة أعظم كتاب النثر الكلاسيكي",
    descriptionFr: "Étudiez les plus grands prosateurs classiques",
    objectives: ["Read classical prose", "Understand adab literature", "Appreciate stylistic mastery", "Analyze rhetorical techniques"],
    objectivesAr: ["فهم أعمال كبار الكتاب", "قراءة النثر الكلاسيكي", "تحليل الأسلوب الكلاسيكي", "دراسة الأدب الكلاسيكي"],
    objectivesFr: ["Lire la prose classique", "Comprendre la littérature adab", "Apprécier la maîtrise stylistique", "Analyser les techniques rhétoriques"],
    estimatedTime: 55, difficulty: "hard", xpReward: 85,
    content: {
      theory: [
        { title: "الجَاحِظ (d. 869)", titleAr: "الجاحظ (توفي 869)", titleFr: "الجَاحِظ (m. 869)", content: "Master of Arabic prose\nWorks: كِتَاب الحَيَوَان، البَيَان وَالتَّبْيِين\nStyle: witty, digressive, encyclopedic", contentAr: "إمام الكتاب العرب وسيد النثر العربي\nأعماله: كتاب الحيوان والبيان والتبيين\nأسلوبه: فكاهي وسارد ومتنوع وموسوعي", contentFr: "Maître de la prose arabe\nŒuvres: كِتَاب الحَيَوَان، البَيَان وَالتَّبْيِين\nStyle: spirituel, digressif, encyclopédique" },
        { title: "اِبْن المُقَفَّع (d. 756)", titleAr: "ابن المقفع (توفي 756)", titleFr: "اِبْن المُقَفَّع (m. 756)", content: "Translator and stylist\nكَلِيلَة وَدِمْنَة - animal fables\nConcise, elegant style", contentAr: "مترجم وكاتب أنيق\nكليلة ودمنة - قصص حيوانية أخلاقية\nأسلوب مختصر وأنيق وسلس", contentFr: "Traducteur et styliste\nكَلِيلَة وَدِمْنَة - fables d'animaux\nStyle concis et élégant" },
        { title: "أَدَب Literature", titleAr: "أدب الأدب والآداب", titleFr: "Littérature أَدَب", content: "Genre combining entertainment and education\nCollections of anecdotes, poetry, wisdom\nModel for refined prose", contentAr: "نوع أدبي يجمع بين الترفيه والتعليم\nمجموعات من النوادر والقصص والشعر والحكم\nنموذج للنثر الرفيع والمتقن", contentFr: "Genre combinant divertissement et éducation\nCollections d'anecdotes, poésie, sagesse\nModèle de prose raffinée" }
      ],
      vocabulary: [
        { arabic: "أَدَب", transliteration: "adab", meaning: "literature/etiquette", meaningAr: "فن الكلام والآداب والسلوك الحسن", meaningFr: "littérature/étiquette" },
        { arabic: "أَدِيب", transliteration: "adīb", meaning: "litterateur", meaningAr: "الكاتب والشاعر والعالم الأديب", meaningFr: "homme de lettres" },
        { arabic: "مَقَالَة", transliteration: "maqāla", meaning: "essay/article", meaningAr: "الكتابة القصيرة أو المقالة النثرية", meaningFr: "essai/article" },
        { arabic: "حِكَايَة", transliteration: "ḥikāya", meaning: "story/tale", meaningAr: "القصة أو السرد القصير", meaningFr: "histoire/conte" },
        { arabic: "أُسْلُوب", transliteration: "uslūb", meaning: "style", meaningAr: "الطريقة والأسلوب في الكتابة والتعبير", meaningFr: "style" }
      ]
    },
    exerciseCount: 18, prerequisites: ["5-5"]
  },
  // SECTION 2: ARABIC POETRY (Lessons 7-12)
  {
    id: "5-7", phaseId: 5, order: 7,
    title: "Poetic Meters (البحور)",
    titleAr: "البحور الشعرية",
    titleFr: "Les mètres poétiques (البحور)",
    description: "Master the system of Arabic poetic meters",
    descriptionAr: "أتقن نظام البحور الشعرية العربية",
    descriptionFr: "Maîtrisez le système des mètres poétiques arabes",
    objectives: ["Understand meter system", "Scan basic meters", "Recognize common patterns", "Apply to poetry analysis"],
    objectivesAr: ["فهم نظام البحور", "تقطيع البحور الأساسية", "التعرف على الأنماط الشائعة", "تطبيقها على تحليل الشعر"],
    objectivesFr: ["Comprendre le système métrique", "Scander les mètres de base", "Reconnaître les modèles courants", "Appliquer à l'analyse poétique"],
    estimatedTime: 55, difficulty: "hard", xpReward: 85,
    content: {
      theory: [
        { title: "The 16 Meters", titleAr: "البحور الستة عشر", titleFr: "Les 16 mètres", content: "الطَّوِيل، المَدِيد، البَسِيط، الوَافِر\nالكَامِل، الهَزَج، الرَّجَز، الرَّمَل\nالسَّرِيع، المُنْسَرِح، الخَفِيف، المُضَارِع\nالمُقْتَضَب، المُجْتَثّ، المُتَقَارِب، المُتَدَارَك", contentAr: "الطويل والمديد والبسيط والوافر\nالكامل والهزج والرجز والرمل\nالسريع والمنسرح والخفيف والمضارع\nالمقتضب والمجتث والمتقارب والمتدارك", contentFr: "الطَّوِيل، المَدِيد، البَسِيط، الوَافِر\nالكَامِل، الهَزَج، الرَّجَز، الرَّمَل\nالسَّرِيع، المُنْسَرِح، الخَفِيف، المُضَارِع\nالمُقْتَضَب، المُجْتَثّ، المُتَقَارِب، المُتَدَارَك" },
        { title: "Metric Feet (تَفَاعِيل)", titleAr: "الأقدام الشعرية", titleFr: "Pieds métriques (تَفَاعِيل)", content: "فَعُولُن - - U -\nفَاعِلُن - U -\nمُسْتَفْعِلُن - - U -\nمَفَاعِيلُن U - - -", contentAr: "فَعُولُن والأقدام الخمسة الأخرى\nفَاعِلُن والمتغيرات\nمُسْتَفْعِلُن ومشتقاتها\nمَفَاعِيلُن والقدم السداسية", contentFr: "فَعُولُن - - U -\nفَاعِلُن - U -\nمُسْتَفْعِلُن - - U -\nمَفَاعِيلُن U - - -" },
        { title: "Scanning Process", titleAr: "عملية التقطيع", titleFr: "Processus de scansion", content: "1. Remove short vowels for consonant-only text\n2. Mark syllables: short (U) or long (-)\n3. Match to metric feet\n4. Identify the بَحْر", contentAr: "إزالة الحركات القصيرة للحصول على النص\nتحديد المقاطع: قصيرة أم طويلة\nمطابقة الأقدام الشعرية\nتحديد البحر", contentFr: "1. Supprimer les voyelles courtes pour le texte sans voyelles\n2. Marquer les syllabes: courte (U) ou longue (-)\n3. Faire correspondre aux pieds métriques\n4. Identifier le بَحْر" }
      ],
      vocabulary: [
        { arabic: "بَحْر", transliteration: "baḥr", meaning: "meter (sea)", meaningAr: "البحر الشعري والإيقاع", meaningFr: "mètre (mer)" },
        { arabic: "تَفْعِيلَة", transliteration: "taf'īla", meaning: "metric foot", meaningAr: "القدم الشعري والوحدة الأساسية", meaningFr: "pied métrique" },
        { arabic: "تَقْطِيع", transliteration: "taqṭī'", meaning: "scansion", meaningAr: "تقطيع القصيدة وتحليل البحر", meaningFr: "scansion" },
        { arabic: "سَاكِن", transliteration: "sākin", meaning: "quiescent (no vowel)", meaningAr: "الساكن أو الحرف بدون حركة", meaningFr: "quiescent (sans voyelle)" },
        { arabic: "مُتَحَرِّك", transliteration: "mutaḥarrik", meaning: "voweled", meaningAr: "الحرف المتحرك الممدود", meaningFr: "voyellé" }
      ]
    },
    exerciseCount: 18, prerequisites: ["5-6"]
  },
  {
    id: "5-8", phaseId: 5, order: 8,
    title: "Rhyme Patterns (القافية)",
    titleAr: "القافية والروي",
    titleFr: "Les schémas de rimes (القافية)",
    description: "Master Arabic rhyme and its rules",
    descriptionAr: "أتقن نظام القافية والروي في الشعر العربي",
    descriptionFr: "Maîtrisez la rime arabe et ses règles",
    objectives: ["Understand rhyme terminology", "Identify rhyme letters", "Recognize rhyme types", "Analyze poem structure"],
    objectivesAr: ["فهم مصطلحات القافية", "تحديد حروف الروي", "التعرف على أنواع القافية", "تحليل بنية القصيدة"],
    objectivesFr: ["Comprendre la terminologie de la rime", "Identifier les lettres de rime", "Reconnaître les types de rime", "Analyser la structure du poème"],
    estimatedTime: 55, difficulty: "hard", xpReward: 85,
    content: {
      theory: [
        { title: "Rhyme Letter (رَوِيّ)", titleAr: "حرف الروي", titleFr: "Lettre de rime (رَوِيّ)", content: "The final consonant that defines the rhyme\nMust be consistent throughout the poem\nThe poem is named by this letter: قَصِيدَة لَامِيَّة", contentAr: "الحرف النهائي الذي يحدد القافية\nيجب أن يكون متسقاً في جميع أنحاء القصيدة\nيُسمى الشعر على اسم هذا الحرف", contentFr: "La consonne finale qui définit la rime\nDoit être cohérente tout au long du poème\nLe poème est nommé par cette lettre: قَصِيدَة لَامِيَّة" },
        { title: "Types of Rhyme", titleAr: "أنواع القافية", titleFr: "Types de rime", content: "مُقَيَّدَة - ending in sukun\nمُطْلَقَة - ending in vowel\nمُرْدَفَة - with long vowel before rawiyy", contentAr: "مُقَيَّدَة - تنتهي بسكون\nمُطْلَقَة - تنتهي بحركة\nمُرْدَفَة - بها حرف مد قبل الروي", contentFr: "مُقَيَّدَة - se terminant par sukun\nمُطْلَقَة - se terminant par une voyelle\nمُرْدَفَة - avec une longue voyelle avant rawiyy" },
        { title: "Rhyme Defects (عُيُوب)", titleAr: "عيوب القافية", titleFr: "Défauts de rime (عُيُوب)", content: "إِقْوَاء - changing vowel before rawiyy\nإِكْفَاء - changing rawiyy\nسِنَاد - inconsistent structure", contentAr: "إِقْوَاء - تغيير حركة الروي\nإِكْفَاء - تغيير الروي نفسه\nسِنَاد - عدم التسق في البناء", contentFr: "إِقْوَاء - changement de voyelle avant rawiyy\nإِكْفَاء - changement de rawiyy\nسِنَاد - structure incohérente" }
      ],
      vocabulary: [
        { arabic: "قَافِيَة", transliteration: "qāfiya", meaning: "rhyme", meaningAr: "القافية أو الروي في الشعر", meaningFr: "rime" },
        { arabic: "رَوِيّ", transliteration: "rawiyy", meaning: "rhyme letter", meaningAr: "حرف الروي الذي يحدد القافية", meaningFr: "lettre de rime" },
        { arabic: "رِدْف", transliteration: "ridf", meaning: "pre-rawiyy vowel", meaningAr: "الحرف الممدود قبل الروي", meaningFr: "voyelle pré-rawiyy" },
        { arabic: "وَصْل", transliteration: "waṣl", meaning: "post-rawiyy element", meaningAr: "العنصر الذي يأتي بعد الروي", meaningFr: "élément post-rawiyy" },
        { arabic: "قَصِيدَة", transliteration: "qaṣīda", meaning: "ode", meaningAr: "القصيدة الشعرية الطويلة", meaningFr: "ode" }
      ]
    },
    exerciseCount: 18, prerequisites: ["5-7"]
  },
  {
    id: "5-9", phaseId: 5, order: 9,
    title: "Abbasid Poetry",
    titleAr: "الشعر العباسي",
    titleFr: "La poésie abbasside",
    description: "Study the golden age of Islamic poetry",
    descriptionAr: "ادرس العصر الذهبي للشعر الإسلامي والعباسي",
    descriptionFr: "Étudiez l'âge d'or de la poésie islamique",
    objectives: ["Know major Abbasid poets", "Understand new themes", "Recognize stylistic developments", "Analyze classic poems"],
    objectivesAr: ["التعرف على الشعراء العباسيين الكبار", "فهم الموضوعات الجديدة", "التعرف على التطورات الأسلوبية", "تحليل القصائد الكلاسيكية"],
    objectivesFr: ["Connaître les grands poètes abbassides", "Comprendre les nouveaux thèmes", "Reconnaître les développements stylistiques", "Analyser les poèmes classiques"],
    estimatedTime: 55, difficulty: "hard", xpReward: 85,
    content: {
      theory: [
        { title: "Major Poets", titleAr: "الشعراء الكبار", titleFr: "Grands poètes", content: "أَبُو نُوَاس - wine poetry, wit\nأَبُو تَمَّام - innovative metaphor\nالبُحْتُرِي - classical elegance\nالمُتَنَبِّي - greatest Arabic poet", contentAr: "أَبُو نُوَاس - الشاعر الماهر في شعر الخمر والفكاهة\nأَبُو تَمَّام - مجدد الاستعارة والصورة\nالبُحْتُرِي - الكاتب الأنيق الكلاسيكي\nالمُتَنَبِّي - أعظم شاعر عربي", contentFr: "أَبُو نُوَاس - poésie bachique, esprit\nأَبُو تَمَّام - métaphore innovante\nالبُحْتُرِي - élégance classique\nالمُتَنَبِّي - plus grand poète arabe" },
        { title: "New Themes", titleAr: "موضوعات جديدة", titleFr: "Nouveaux thèmes", content: "خَمْرِيَّات - wine poetry\nزُهْدِيَّات - ascetic poetry\nفَلْسَفِيَّات - philosophical poems\nUrban life themes", contentAr: "خَمْرِيَّات - شعر الخمر والنبيذ\nزُهْدِيَّات - الشعر الزهدي والأخلاقي\nفَلْسَفِيَّات - الأشعار الفلسفية\nمواضيع الحياة الحضرية", contentFr: "خَمْرِيَّات - poésie bachique\nزُهْدِيَّات - poésie ascétique\nفَلْسَفِيَّات - poèmes philosophiques\nThèmes de la vie urbaine" },
        { title: "المُتَنَبِّي (d. 965)", titleAr: "المتنبي (توفي 965)", titleFr: "المُتَنَبِّي (m. 965)", content: "Considered greatest Arabic poet\nFamous for مَدْح (panegyric)\nComplex imagery, profound wisdom\nInfluenced all later poetry", contentAr: "يُعتبر أعظم شاعر عربي\nمشهور بفن المدح والإطراء\nيتميز بالصور المعقدة والحكمة العميقة\nأثر على كل الشعراء اللاحقين", contentFr: "Considéré comme le plus grand poète arabe\nFameux pour مَدْح (panégyrique)\nImagerie complexe, sagesse profonde\nA influencé toute la poésie ultérieure" }
      ],
      vocabulary: [
        { arabic: "مَدْح", transliteration: "madḥ", meaning: "praise poetry", meaningAr: "الشعر المتعلق بمدح وإطراء", meaningFr: "poésie de louange" },
        { arabic: "هِجَاء", transliteration: "hijā'", meaning: "satire", meaningAr: "الشعر الهجائي والسب", meaningFr: "satire" },
        { arabic: "رِثَاء", transliteration: "rithā'", meaning: "elegy", meaningAr: "شعر الندب والرثاء", meaningFr: "élégie" },
        { arabic: "غَزَل", transliteration: "ghazal", meaning: "love poetry", meaningAr: "الشعر العاطفي والغزلي", meaningFr: "poésie amoureuse" },
        { arabic: "زُهْد", transliteration: "zuhd", meaning: "ascetic poetry", meaningAr: "شعر الزهد والتقوى", meaningFr: "poésie ascétique" }
      ]
    },
    exerciseCount: 18, prerequisites: ["5-8"]
  },
  {
    id: "5-10", phaseId: 5, order: 10,
    title: "Andalusian Poetry",
    titleAr: "الشعر الأندلسي",
    titleFr: "La poésie andalouse",
    description: "Explore the poetry of Islamic Spain",
    descriptionAr: "استكشف شعر الأندلس الإسلامية وتراثها الأدبي",
    descriptionFr: "Explorez la poésie de l'Espagne islamique",
    objectives: ["Understand Andalusian context", "Know unique forms", "Study major poets", "Appreciate مُوَشَّح form"],
    objectivesAr: ["فهم السياق الأندلسي والتاريخي", "التعرف على الأشكال الفريدة", "دراسة الشعراء الأندلسيين الكبار", "تقدير فن الموشح"],
    objectivesFr: ["Comprendre le contexte andalou", "Connaître les formes uniques", "Étudier les grands poètes", "Apprécier la forme مُوَشَّح"],
    estimatedTime: 55, difficulty: "hard", xpReward: 85,
    content: {
      theory: [
        { title: "Andalusian Context", titleAr: "السياق الأندلسي", titleFr: "Contexte andalou", content: "Islamic Spain (711-1492)\nCultural flowering\nMixing of Arabic, Romance, Hebrew\nUnique literary traditions", contentAr: "الأندلس الإسلامية (711-1492)\nازدهار ثقافي كبير\nاختلاط العربية والرومانسية والعبرية\nتقاليد أدبية فريدة", contentFr: "Espagne islamique (711-1492)\nEpanouissement culturel\nMélange d'arabe, roman, hébreu\nTraditions littéraires uniques" },
        { title: "المُوَشَّح", titleAr: "شكل الموشح", titleFr: "المُوَشَّح", content: "Strophic poetry form\nMultiple rhyme schemes\nOften ends in vernacular خَرْجَة\nInfluenced European troubadours", contentAr: "نوع من الشعر المقسم لأقسام\nأنماط قافية متعددة\nغالباً ما ينتهي بخرجة عامية\nأثر على الشعراء الأوروبيين", contentFr: "Forme de poésie strophique\nSchémas de rime multiples\nSe termine souvent en خَرْجَة vernaculaire\nA influencé les troubadours européens" },
        { title: "Major Poets", titleAr: "الشعراء الأندلسيين", titleFr: "Grands poètes", content: "اِبْن زَيْدُون - love poetry\nاِبْن حَزْم - طَوْق الحَمَامَة (love treatise)\nاِبْن خَفَاجَة - nature poetry", contentAr: "اِبْن زَيْدُون - شاعر الحب الكبير\nاِبْن حَزْم - مؤلف طوق الحمامة\nاِبْن خَفَاجة - شاعر الطبيعة", contentFr: "اِبْن زَيْدُون - poésie amoureuse\nاِبْن حَزْم - طَوْق الحَمَامَة (traité d'amour)\nاِبْن خَفَاجَة - poésie de nature" }
      ],
      vocabulary: [
        { arabic: "أَنْدَلُس", transliteration: "andalus", meaning: "Islamic Spain", meaningAr: "شبه الجزيرة الأيبيرية الإسلامية", meaningFr: "Espagne islamique" },
        { arabic: "مُوَشَّح", transliteration: "muwashshaḥ", meaning: "strophic poem", meaningAr: "القصيدة المقسمة الموشحة", meaningFr: "poème strophique" },
        { arabic: "زَجَل", transliteration: "zajal", meaning: "vernacular poetry", meaningAr: "الشعر باللهجة العامية", meaningFr: "poésie vernaculaire" },
        { arabic: "خَرْجَة", transliteration: "kharja", meaning: "final vernacular verse", meaningAr: "الآية الأخيرة بالعامية", meaningFr: "vers vernaculaire final" },
        { arabic: "طَبِيعَة", transliteration: "ṭabī'a", meaning: "nature", meaningAr: "الطبيعة والجمال الطبيعي", meaningFr: "nature" }
      ]
    },
    exerciseCount: 18, prerequisites: ["5-9"]
  },
  {
    id: "5-11", phaseId: 5, order: 11,
    title: "Modern Arabic Poetry",
    titleAr: "الشعر العربي الحديث",
    titleFr: "La poésie arabe moderne",
    description: "Study the transformation of Arabic poetry",
    descriptionAr: "ادرس تحول الشعر العربي من الكلاسيكية إلى الحداثة",
    descriptionFr: "Étudiez la transformation de la poésie arabe",
    objectives: ["Understand modernist movements", "Know major modern poets", "Recognize free verse", "Analyze contemporary themes"],
    objectivesAr: ["فهم الحركات الحداثية والتجديدية", "التعرف على الشعراء العرب المحدثين", "التمييز بين الشعر الحر والشعر العمودي", "تحليل الموضوعات المعاصرة"],
    objectivesFr: ["Comprendre les mouvements modernistes", "Connaître les grands poètes modernes", "Reconnaître le vers libre", "Analyser les thèmes contemporains"],
    estimatedTime: 55, difficulty: "hard", xpReward: 85,
    content: {
      theory: [
        { title: "النهضة Revival", titleAr: "عصر النهضة والإحياء", titleFr: "Renouveau النهضة", content: "أَحْمَد شَوْقِي - 'Prince of Poets'\nحَافِظ إِبْرَاهِيم - 'Poet of the Nile'\nNeo-classical movement", contentAr: "أَحْمَد شَوْقِي - أمير الشعراء\nحَافِظ إِبْرَاهِيم - شاعر النيل\nحركة إحياء النموذج الكلاسيكي", contentFr: "أَحْمَد شَوْقِي - « Prince des poètes »\nحَافِظ إِبْرَاهِيم - « Poète du Nil »\nMouvement néoclassique" },
        { title: "Free Verse (شِعْر حُرّ)", titleAr: "الشعر الحر والتحرر", titleFr: "Vers libre (شِعْر حُرّ)", content: "1940s revolution\nنَازِك المَلَائِكَة - pioneer\nبَدْر شَاكِر السَّيَّاب - major voice\nBroken classical meters", contentAr: "ثورة الأربعينيات الشعرية\nنَازِك المَلَائِكَة - الرائدة الأولى\nبَدْر شَاكِر السَّيَّاب - الصوت الرئيسي\nكسر البحور والأوزان الكلاسيكية", contentFr: "Révolution des années 1940\nنَازِك المَلَائِكَة - pionnière\nبَدْر شَاكِر السَّيَّاب - voix majeure\nMètres classiques brisés" },
        { title: "Contemporary Poets", titleAr: "الشعراء المعاصرون", titleFr: "Poètes contemporains", content: "مَحْمُود دَرْوِيش - Palestinian icon\nنِزَار قَبَّانِي - love and politics\nأَدُونِيس - avant-garde", contentAr: "مَحْمُود دَرْوِيش - رمز فلسطيني\nنِزَار قَبَّانِي - شاعر الحب والسياسة\nأَدُونِيس - الشاعر الطليعي", contentFr: "مَحْمُود دَرْوِيش - icône palestinienne\nنِزَار قَبَّانِي - amour et politique\nأَدُونِيس - avant-garde" }
      ],
      vocabulary: [
        { arabic: "شِعْر حُرّ", transliteration: "shi'r ḥurr", meaning: "free verse", meaningAr: "الشعر غير الموزون والحديث", meaningFr: "vers libre" },
        { arabic: "قَصِيدَة نَثْر", transliteration: "qaṣīdat nathr", meaning: "prose poem", meaningAr: "قصيدة بصيغة نثرية", meaningFr: "poème en prose" },
        { arabic: "حَدَاثَة", transliteration: "ḥadātha", meaning: "modernity", meaningAr: "الحداثة والمعاصرة", meaningFr: "modernité" },
        { arabic: "تَجْدِيد", transliteration: "tajdīd", meaning: "renewal", meaningAr: "التجديد والإحياء", meaningFr: "renouvellement" },
        { arabic: "تَجْرِبَة", transliteration: "tajriba", meaning: "experience", meaningAr: "التجربة الشعرية والشخصية", meaningFr: "expérience" }
      ]
    },
    exerciseCount: 18, prerequisites: ["5-10"]
  },
  {
    id: "5-12", phaseId: 5, order: 12,
    title: "Poetry Analysis Workshop",
    titleAr: "ورشة تحليل الشعر",
    titleFr: "Atelier d'analyse poétique",
    description: "Apply all poetry skills in analysis",
    descriptionAr: "طبق جميع مهارات الشعر في التحليل الشامل",
    descriptionFr: "Appliquez toutes vos compétences poétiques à l'analyse",
    objectives: ["Analyze complete poems", "Identify rhetorical devices", "Discuss themes", "Write critical responses"],
    objectivesAr: ["تحليل القصائد الكاملة", "تحديد الأجهزة البلاغية", "مناقشة المواضيع والأفكار", "كتابة الردود النقدية"],
    objectivesFr: ["Analyser des poèmes complets", "Identifier les procédés rhétoriques", "Discuter les thèmes", "Rédiger des réponses critiques"],
    estimatedTime: 60, difficulty: "hard", xpReward: 90,
    content: {
      theory: [
        { title: "Analysis Framework", titleAr: "إطار التحليل", titleFr: "Cadre d'analyse", content: "1. Context: poet, period, occasion\n2. Form: meter, rhyme, structure\n3. Language: vocabulary, grammar, style\n4. Imagery: metaphor, simile, symbols\n5. Theme: central idea, message", contentAr: "السياق: الشاعر والعصر والمناسبة\nالشكل: البحر والقافية والتركيب\nاللغة: المفردات والقواعد والأسلوب\nالصورة: التشبيه والاستعارة والرموز\nالموضوع: الفكرة المركزية والرسالة", contentFr: "1. Contexte: poète, période, occasion\n2. Forme: mètre, rime, structure\n3. Langue: vocabulaire, grammaire, style\n4. Imagerie: métaphore, comparaison, symboles\n5. Thème: idée centrale, message" },
        { title: "Rhetorical Devices", titleAr: "الأجهزة البلاغية", titleFr: "Procédés rhétoriques", content: "تَشْبِيه - simile\nاِسْتِعَارَة - metaphor\nكِنَايَة - metonymy\nتَوْرِيَة - double entendre\nطِبَاق - antithesis", contentAr: "تَشْبِيه - المقارنة\nاِسْتِعَارَة - المجاز\nكِنَايَة - التلميح\nتَوْرِيَة - المعنى المزدوج\nطِبَاق - التقابل", contentFr: "تَشْبِيه - comparaison\nاِسْتِعَارَة - métaphore\nكِنَايَة - métonymie\nتَوْرِيَة - double entente\nطِبَاق - antithèse" },
        { title: "Critical Writing", titleAr: "الكتابة النقدية", titleFr: "Écriture critique", content: "Opening: context and thesis\nBody: systematic analysis\nEvidence: quotations with analysis\nConclusion: significance", contentAr: "المقدمة: السياق والرسالة الأساسية\nالجسم: التحليل المنظم\nالأدلة: الاقتباسات والتحليل\nالخاتمة: الأهمية والنتائج", contentFr: "Ouverture: contexte et thèse\nCorps: analyse systématique\nPreuves: citations avec analyse\nConclusion: importance" }
      ],
      vocabulary: [
        { arabic: "تَحْلِيل أَدَبِيّ", transliteration: "taḥlīl adabī", meaning: "literary analysis", meaningAr: "تحليل النصوص الأدبية", meaningFr: "analyse littéraire" },
        { arabic: "صُورَة فَنِّيَّة", transliteration: "ṣūra fanniyya", meaning: "artistic image", meaningAr: "الصورة الفنية والتعبيرية", meaningFr: "image artistique" },
        { arabic: "رَمْزِيَّة", transliteration: "ramziyya", meaning: "symbolism", meaningAr: "الرموز والدلالات الرمزية", meaningFr: "symbolisme" },
        { arabic: "دَلَالَة", transliteration: "dalāla", meaning: "signification", meaningAr: "الدلالة والمعنى", meaningFr: "signification" },
        { arabic: "جَمَالِيَّة", transliteration: "jamāliyya", meaning: "aesthetics", meaningAr: "الجمال والقيم الجمالية", meaningFr: "esthétique" }
      ]
    },
    exerciseCount: 20, prerequisites: ["5-11"]
  },
  // SECTION 3: DIALECTS (Lessons 13-18)
  {
    id: "5-13", phaseId: 5, order: 13,
    title: "MSA vs Dialects Overview",
    titleAr: "الفصحى واللهجات",
    titleFr: "Arabe standard vs dialectes",
    description: "Understand Arabic diglossia and dialect variation",
    descriptionAr: "افهم الازدواجية اللغوية والتنوع اللهجي في العربية",
    descriptionFr: "Comprenez la diglossie arabe et la variation dialectale",
    objectives: ["Understand diglossia", "Recognize dialect features", "Navigate language registers", "Appreciate unity in diversity"],
    objectivesAr: ["فهم الازدواجية اللغوية", "التعرف على خصائص اللهجات", "التنقل بين مستويات اللغة", "تقدير الوحدة في التنوع"],
    objectivesFr: ["Comprendre la diglossie", "Reconnaître les caractéristiques dialectales", "Naviguer dans les registres linguistiques", "Apprécier l'unité dans la diversité"],
    estimatedTime: 50, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "Diglossia", titleAr: "الازدواجية اللغوية", titleFr: "Diglossie", content: "High (فُصْحَى): formal, written, media\nLow (عَامِّيَّة): daily speech, informal\nArab speakers navigate both constantly", contentAr: "العربية الفصحى: رسمية وكتابية وإعلامية\nاللهجات العامية: محكية يومية وشبه رسمية\nالمتحدثون العرب يتنقلون باستمرار بين المستويين", contentFr: "Haute (فُصْحَى): formelle, écrite, médias\nBasse (عَامِّيَّة): parlé quotidien, informel\nLes locuteurs arabes naviguent les deux constamment" },
        { title: "Dialect Groups", titleAr: "مجموعات اللهجات", titleFr: "Groupes dialectaux", content: "المَشْرِق - Levantine (شَامِي)\nالمَصْرِي - Egyptian\nالمَغَارِبِي - North African\nالخَلِيجِي - Gulf", contentAr: "المَشْرِق - اللهجة الشامية\nالمَصْرِي - اللهجة المصرية\nالمَغَارِبِي - لهجات شمال أفريقيا\nالخَلِيجِي - لهجات الخليج", contentFr: "المَشْرِق - Levantin (شَامِي)\nالمَصْرِي - Égyptien\nالمَغَارِبِي - Nord-africain\nالخَلِيجِي - Golfe" },
        { title: "Common Features", titleAr: "الخصائص المشتركة", titleFr: "Caractéristiques communes", content: "Loss of case endings\nSimplified verb system\nBorrowed vocabulary\nPhonological changes", contentAr: "فقدان حروف الإعراب الكاملة\nنظام فعلي مبسط\nمفردات مستعارة من لغات أخرى\nتغيرات صوتية مختلفة", contentFr: "Perte des terminaisons casuelles\nSystème verbal simplifié\nVocabulaire emprunté\nChangements phonologiques" }
      ],
      vocabulary: [
        { arabic: "لَهْجَة", transliteration: "lahja", meaning: "dialect", meaningAr: "اللهجة واللغة المحلية", meaningFr: "dialecte" },
        { arabic: "عَامِّيَّة", transliteration: "'āmmiyya", meaning: "colloquial", meaningAr: "اللغة المحكية العامية", meaningFr: "parlé" },
        { arabic: "فُصْحَى", transliteration: "fuṣḥā", meaning: "classical/standard", meaningAr: "العربية الفصحى الكلاسيكية", meaningFr: "classique/standard" },
        { arabic: "دَارِجَة", transliteration: "dārija", meaning: "vernacular (Maghreb)", meaningAr: "اللهجة الدارجة المغربية", meaningFr: "vernaculaire (Maghreb)" },
        { arabic: "مَحْكِيَّة", transliteration: "maḥkiyya", meaning: "spoken (Levant)", meaningAr: "اللهجة المحكية الشامية", meaningFr: "parlé (Levant)" }
      ]
    },
    exerciseCount: 16, prerequisites: ["5-12"]
  },
  {
    id: "5-14", phaseId: 5, order: 14,
    title: "Egyptian Arabic Basics",
    titleAr: "أساسيات اللهجة المصرية",
    titleFr: "Les bases de l'arabe égyptien",
    description: "Introduction to the most widely understood dialect",
    descriptionAr: "مقدمة إلى اللهجة المصرية الأكثر فهماً على المستوى العربي",
    descriptionFr: "Introduction au dialecte le plus largement compris",
    objectives: ["Understand Egyptian features", "Learn key vocabulary", "Recognize in media", "Basic comprehension"],
    objectivesAr: ["فهم خصائص اللهجة المصرية", "تعلم المفردات الأساسية", "التعرف عليها في الإعلام", "الفهم الأساسي للمحادثة"],
    objectivesFr: ["Comprendre les caractéristiques égyptiennes", "Apprendre le vocabulaire clé", "Reconnaître dans les médias", "Compréhension de base"],
    estimatedTime: 50, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "Key Features", titleFr: "Caractéristiques clés", content: "ج → g: جَمِيل → gamiil\nث → s/t: ثَلَاثَة → talaata\nذ → d/z: ذَلِك → da/zay da\nق → ' (glottal): قَلْب → 'alb", contentFr: "ج → g: جَمِيل → gamiil\nث → s/t: ثَلَاثَة → talaata\nذ → d/z: ذَلِك → da/zay da\nق → ' (glottale): قَلْب → 'alb" },
        { title: "Common Phrases", titleFr: "Expressions courantes", content: "إِزَّيَّك؟ - How are you?\nكُوَيِّس - Good/fine\nعَايِز/عَايْزَة - I want (m/f)\nمِش عَارِف - I don't know", contentFr: "إِزَّيَّك؟ - Comment allez-vous?\nكُوَيِّس - Bien/bien\nعَايِز/عَايْزَة - Je veux (m/f)\nمِش عَارِف - Je ne sais pas" },
        { title: "Verb Differences", titleFr: "Différences verbales", content: "بـ prefix for present: بَيِكْتِب (he writes)\nهَـ prefix for future: هَيْرُوح (he will go)", contentFr: "Préfixe بـ pour le présent: بَيِكْتِب (il écrit)\nPréfixe هَـ pour le futur: هَيْرُوح (il ira)" }
      ],
      vocabulary: [
        { arabic: "إِزَّيَّك", transliteration: "izzayyak", meaning: "how are you? (m)", meaningAr: "كيف حالك بالمصرية", meaningFr: "comment allez-vous? (m)" },
        { arabic: "كُوَيِّس", transliteration: "kuwayyis", meaning: "good/fine", meaningAr: "تمام وبخير بالمصرية", meaningFr: "bien/bien" },
        { arabic: "عَايِز", transliteration: "'āyiz", meaning: "want (m)", meaningAr: "أريد بالمصرية (الذكر)", meaningFr: "vouloir (m)" },
        { arabic: "دِلْوَقْتِي", transliteration: "dilwa'ti", meaning: "now", meaningAr: "الآن بالمصرية", meaningFr: "maintenant" },
        { arabic: "كِدَه", transliteration: "kida", meaning: "like this", meaningAr: "مثل هذا بالمصرية", meaningFr: "comme ça" }
      ]
    },
    exerciseCount: 16, prerequisites: ["5-13"]
  },
  {
    id: "5-15", phaseId: 5, order: 15,
    title: "Levantine Arabic Basics",
    titleAr: "أساسيات اللهجة الشامية",
    titleFr: "Les bases de l'arabe levantin",
    description: "Introduction to Syrian/Lebanese/Palestinian Arabic",
    descriptionAr: "مقدمة إلى اللهجة الشامية السورية واللبنانية والفلسطينية",
    descriptionFr: "Introduction à l'arabe syrien, libanais et palestinien",
    objectives: ["Understand Levantine features", "Learn key vocabulary", "Recognize regional variations", "Basic comprehension"],
    objectivesAr: ["فهم خصائص اللهجة الشامية", "تعلم المفردات الأساسية", "التعرف على الاختلافات الإقليمية", "الفهم الأساسي للمحادثة"],
    objectivesFr: ["Comprendre les caractéristiques levantines", "Apprendre le vocabulaire clé", "Reconnaître les variations régionales", "Compréhension de base"],
    estimatedTime: 50, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "Key Features", titleFr: "Caractéristiques clés", content: "ق → ' (glottal): قَالَ → 'aal\nkeeping ج as j in many areas\nLoss of emphatic distinction in some areas\nDistinct vowel system", contentFr: "ق → ' (glottale): قَالَ → 'aal\nconservation de ج comme j dans de nombreux domaines\nPerte de distinction emphatique dans certains domaines\nSystème de voyelles distinct" },
        { title: "Common Phrases", titleFr: "Expressions courantes", content: "كِيفَك؟ - How are you?\nمْنِيح - Good/fine\nبَدِّي - I want\nشُو؟ - What?", contentFr: "كِيفَك؟ - Comment allez-vous?\nمْنِيح - Bien/bien\nبَدِّي - Je veux\nشُو؟ - Quoi?" },
        { title: "Verb Differences", titleFr: "Différences verbales", content: "بـ prefix for present: بِيكْتُب\nرَح for future: رَح يِرُوح\nPresent continuous: عَم + verb", contentFr: "Préfixe بـ pour le présent: بِيكْتُب\nرَح pour le futur: رَح يِرُوح\nContinue présent: عَم + verbe" }
      ],
      vocabulary: [
        { arabic: "كِيفَك", transliteration: "kīfak", meaning: "how are you? (m)", meaningAr: "كيف حالك بالشامية", meaningFr: "comment allez-vous? (m)" },
        { arabic: "مْنِيح", transliteration: "mnīḥ", meaning: "good/fine", meaningAr: "تمام وبخير بالشامية", meaningFr: "bien/bien" },
        { arabic: "بَدِّي", transliteration: "biddi", meaning: "I want", meaningAr: "أريد بالشامية", meaningFr: "je veux" },
        { arabic: "هَلَّق", transliteration: "halla'", meaning: "now", meaningAr: "الآن بالشامية", meaningFr: "maintenant" },
        { arabic: "هَيْك", transliteration: "heik", meaning: "like this", meaningAr: "مثل هذا بالشامية", meaningFr: "comme ça" }
      ]
    },
    exerciseCount: 16, prerequisites: ["5-14"]
  },
  {
    id: "5-16", phaseId: 5, order: 16,
    title: "Gulf Arabic Basics",
    titleAr: "أساسيات اللهجة الخليجية",
    titleFr: "Les bases de l'arabe du Golfe",
    description: "Introduction to Gulf states Arabic",
    descriptionAr: "مقدمة إلى لهجات دول الخليج العربي",
    descriptionFr: "Introduction à l'arabe des pays du Golfe",
    objectives: ["Understand Gulf features", "Learn key vocabulary", "Recognize regional variations", "Basic comprehension"],
    objectivesAr: ["فهم خصائص اللهجة الخليجية", "تعلم المفردات الأساسية", "التعرف على الاختلافات الإقليمية", "الفهم الأساسي للمحادثة"],
    objectivesFr: ["Comprendre les caractéristiques du Golfe", "Apprendre le vocabulaire clé", "Reconnaître les variations régionales", "Compréhension de base"],
    estimatedTime: 50, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "Key Features", titleFr: "Caractéristiques clés", content: "Preserves some classical features\nك → ch in some areas: كَيْفَك → chēfik\nج → y in some: رَجُل → rayyal\nDistinct interrogatives", contentFr: "Conserve certaines caractéristiques classiques\nك → ch dans certains domaines: كَيْفَك → chēfik\nج → y dans certains: رَجُل → rayyal\nInterrogatives distinctes" },
        { title: "Common Phrases", titleFr: "Expressions courantes", content: "شْلُونَك؟ - How are you?\nزَيْن/زَيْنَة - Good/fine\nأَبِي - I want\nوَيْن؟ - Where?", contentFr: "شْلُونَك؟ - Comment allez-vous?\nزَيْن/زَيْنَة - Bien/bien\nأَبِي - Je veux\nوَيْن؟ - Où?" },
        { title: "Verb Differences", titleFr: "Différences verbales", content: "يـ/تـ prefix standard\nبـ for continuous in some areas\nDistinct pronoun forms", contentFr: "Préfixe يـ/تـ standard\nبـ pour le continu dans certains domaines\nFormes de pronoms distinctes" }
      ],
      vocabulary: [
        { arabic: "شْلُونَك", transliteration: "shlōnak", meaning: "how are you? (m)", meaningAr: "كيف حالك بالخليجية", meaningFr: "comment allez-vous? (m)" },
        { arabic: "زَيْن", transliteration: "zēn", meaning: "good/fine", meaningAr: "تمام بالخليجية", meaningFr: "bien/bien" },
        { arabic: "أَبِي/أَبْغَى", transliteration: "abi/abgha", meaning: "I want", meaningAr: "أريد بالخليجية", meaningFr: "je veux" },
        { arabic: "حِين", transliteration: "ḥīn", meaning: "now", meaningAr: "الآن بالخليجية", meaningFr: "maintenant" },
        { arabic: "جِذِي", transliteration: "chidhi", meaning: "like this", meaningAr: "مثل هذا بالخليجية", meaningFr: "comme ça" }
      ]
    },
    exerciseCount: 16, prerequisites: ["5-15"]
  },
  {
    id: "5-17", phaseId: 5, order: 17,
    title: "Maghrebi Arabic Overview",
    titleAr: "نظرة عامة على اللهجات المغاربية",
    titleFr: "Aperçu de l'arabe maghrébin",
    description: "Introduction to North African Arabic",
    descriptionAr: "مقدمة شاملة عن اللهجات العربية في شمال أفريقيا",
    descriptionFr: "Introduction à l'arabe nord-africain",
    objectives: ["Understand Maghrebi distinctiveness", "Learn basic features", "Recognize major variations", "Appreciate linguistic diversity"],
    objectivesAr: ["فهم تميز اللهجات المغاربية", "تعلم الخصائص الأساسية", "التعرف على الاختلافات الرئيسية", "تقدير التنوع اللغوي"],
    objectivesFr: ["Comprendre la particularité du Maghreb", "Apprendre les caractéristiques de base", "Reconnaître les variations majeures", "Apprécier la diversité linguistique"],
    estimatedTime: 50, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "Key Features", titleFr: "Caractéristiques clés", content: "Heavy Berber influence\nFrench/Spanish loanwords\nDistinct vowel reduction\nOften unintelligible to Mashriqi speakers", contentFr: "Influence berbère importante\nEmprunt au français/espagnol\nRéduction de voyelles distincte\nSouvent incompréhensible pour les locuteurs du Mashreq" },
        { title: "Moroccan (دَارِجَة)", titleFr: "Marocain (دَارِجَة)", content: "Most distinctive\nلَا بَأْس (labas) - fine\nوَاخَا - okay\nشْنُو؟ - what?\nفِين؟ - where?", contentFr: "Le plus distinctif\nلَا بَأْس (labas) - bien\nوَاخَا - d'accord\nشْنُو؟ - quoi?\nفِين؟ - où?" },
        { title: "Regional Variation", titleFr: "Variation régionale", content: "مَغْرِب (Morocco) - most distinct\nجَزَائِر (Algeria) - intermediate\nتُونِس (Tunisia) - closer to Eastern\nلِيبْيَا (Libya) - Eastern features", contentFr: "مَغْرِب (Maroc) - le plus distinct\nجَزَائِر (Algérie) - intermédiaire\nتُونِس (Tunisie) - plus proche de l'Est\nلِيبْيَا (Libye) - caractéristiques orientales" }
      ],
      vocabulary: [
        { arabic: "لَا بَأْس", transliteration: "labās", meaning: "fine (Maghreb)", meaningAr: "حسناً بالمغربية", meaningFr: "bien (Maghreb)" },
        { arabic: "وَاخَا", transliteration: "wākha", meaning: "okay (Morocco)", meaningAr: "تمام بالمغربية", meaningFr: "d'accord (Maroc)" },
        { arabic: "بَزَّاف", transliteration: "bezzāf", meaning: "a lot (Maghreb)", meaningAr: "كثيراً جداً بالمغربية", meaningFr: "beaucoup (Maghreb)" },
        { arabic: "دَابَا", transliteration: "dāba", meaning: "now (Morocco)", meaningAr: "الآن بالمغربية", meaningFr: "maintenant (Maroc)" },
        { arabic: "كِيفَاش", transliteration: "kīfāsh", meaning: "how (Maghreb)", meaningAr: "كيف بالمغربية", meaningFr: "comment (Maghreb)" }
      ]
    },
    exerciseCount: 16, prerequisites: ["5-16"]
  },
  {
    id: "5-18", phaseId: 5, order: 18,
    title: "Dialect Comprehension Strategies",
    titleAr: "استراتيجيات فهم اللهجات",
    titleFr: "Stratégies de compréhension des dialectes",
    description: "Develop skills for understanding all dialects",
    descriptionAr: "طور مهارات فهم وتحليل جميع اللهجات العربية",
    descriptionFr: "Développez des compétences pour comprendre tous les dialectes",
    objectives: ["Apply MSA knowledge to dialects", "Identify cognates", "Use context", "Develop listening strategies"],
    objectivesAr: ["تطبيق معرفة الفصحى على فهم اللهجات", "تحديد الكلمات المتشابهة", "استخدام السياق والإشارات", "تطوير استراتيجيات الاستماع"],
    objectivesFr: ["Appliquer les connaissances MSA aux dialectes", "Identifier les cognats", "Utiliser le contexte", "Développer des stratégies d'écoute"],
    estimatedTime: 55, difficulty: "hard", xpReward: 80,
    content: {
      theory: [
        { title: "Sound Correspondences", titleFr: "Correspondances sonores", content: "Learn regular changes:\nق → ' (glottal) in many dialects\nث → t or s\nذ → d or z\nOnce learned, recognition improves", contentFr: "Apprenez les changements réguliers:\nق → ' (glottale) dans de nombreux dialectes\nث → t ou s\nذ → d ou z\nUne fois appris, la reconnaissance s'améliore" },
        { title: "Vocabulary Mapping", titleFr: "Cartographie du vocabulaire", content: "Most core vocabulary is cognate\nشُفْت = رَأَيْتُ (I saw)\nحَكَى = تَكَلَّمَ (spoke)\nLearn high-frequency equivalents", contentFr: "La plupart du vocabulaire fondamental est cognate\nشُفْت = رَأَيْتُ (J'ai vu)\nحَكَى = تَكَلَّمَ (parlé)\nApprenez les équivalents haute fréquence" },
        { title: "Listening Strategies", titleFr: "Stratégies d'écoute", content: "Start with Egyptian (most media)\nUse subtitled content\nFocus on high-frequency patterns\nDon't aim for perfection - aim for comprehension", contentFr: "Commencez par l'égyptien (plus de médias)\nUtilisez du contenu sous-titré\nConcentrez-vous sur les modèles haute fréquence\nN'aspirez pas à la perfection - aspirez à la compréhension" }
      ],
      vocabulary: [
        { arabic: "فَهْم", transliteration: "fahm", meaning: "understanding", meaningAr: "الفهم والإدراك", meaningFr: "compréhension" },
        { arabic: "اِسْتِمَاع", transliteration: "istimā'", meaning: "listening", meaningAr: "الاستماع والإصغاء", meaningFr: "écoute" },
        { arabic: "تَعَرُّف", transliteration: "ta'arruf", meaning: "recognition", meaningAr: "التعرف والمعرفة", meaningFr: "reconnaissance" },
        { arabic: "سِيَاق", transliteration: "siyāq", meaning: "context", meaningAr: "السياق والبيئة", meaningFr: "contexte" },
        { arabic: "تَخْمِين", transliteration: "takhmīn", meaning: "guessing", meaningAr: "التخمين والحدس", meaningFr: "deviner" }
      ]
    },
    exerciseCount: 17, prerequisites: ["5-17"]
  },
  // SECTION 4: TRANSLATION (Lessons 19-24)
  {
    id: "5-19", phaseId: 5, order: 19,
    title: "Translation Theory",
    titleAr: "نظرية الترجمة",
    titleFr: "Théorie de la traduction",
    description: "Understand principles of Arabic-English translation",
    descriptionAr: "افهم مبادئ الترجمة بين العربية والإنجليزية",
    descriptionFr: "Comprenez les principes de la traduction arabe-anglais",
    objectives: ["Understand translation approaches", "Learn key terminology", "Analyze translation challenges", "Develop critical perspective"],
    objectivesAr: ["فهم نهج وطرق الترجمة المختلفة", "تعلم المصطلحات الترجمية الأساسية", "تحليل تحديات الترجمة", "تطوير منظور ناقد"],
    objectivesFr: ["Comprendre les approches de traduction", "Apprendre la terminologie clé", "Analyser les défis de traduction", "Développer une perspective critique"],
    estimatedTime: 55, difficulty: "hard", xpReward: 80,
    content: {
      theory: [
        { title: "Translation Approaches", titleAr: "نهج الترجمة", titleFr: "Approches de traduction", content: "تَرْجَمَة حَرْفِيَّة - literal translation\nتَرْجَمَة حُرَّة - free translation\nتَرْجَمَة تَفْسِيرِيَّة - interpretive translation\nBalance between fidelity and naturalness", contentAr: "تَرْجَمَة حَرْفِيَّة - الترجمة الحرفية المباشرة\nتَرْجَمَة حُرَّة - ترجمة حرة من القيود\nتَرْجَمَة تَفْسِيرِيَّة - ترجمة تفسيرية\nالتوازن بين الأمانة والطبيعية", contentFr: "تَرْجَمَة حَرْفِيَّة - traduction littérale\nتَرْجَمَة حُرَّة - traduction libre\nتَرْجَمَة تَفْسِيرِيَّة - traduction interprétative\nÉquilibre entre fidélité et naturel" },
        { title: "Challenges", titleAr: "التحديات", titleFr: "Défis", content: "Cultural concepts (كَرَم، شَرَف)\nIdioms and proverbs\nReligious terminology\nRegister differences", contentAr: "المفاهيم الثقافية: كَرَم و شَرَف\nالأمثال والتعابير\nالمصطلحات الدينية\nالفروقات في مستويات اللغة", contentFr: "Concepts culturels (كَرَم، شَرَف)\nIdiomes et proverbes\nTerminologie religieuse\nDifférences de registre" },
        { title: "Quality Standards", titleAr: "معايير الجودة", titleFr: "Normes de qualité", content: "Accuracy (دِقَّة)\nClarity (وُضُوح)\nNaturalness (طَبِيعِيَّة)\nAppropriate register", contentAr: "دِقَّة - الدقة والصحة\nوُضُوح - الوضوح والفهم\nطَبِيعِيَّة - الطبيعية والسلاسة\nالسجل المناسب", contentFr: "Précision (دِقَّة)\nClareté (وُضُوح)\nNaturel (طَبِيعِيَّة)\nRegistre approprié" }
      ],
      vocabulary: [
        { arabic: "تَرْجَمَة", transliteration: "tarjama", meaning: "translation", meaningAr: "الترجمة من لغة لأخرى", meaningFr: "traduction" },
        { arabic: "مُتَرْجِم", transliteration: "mutarjim", meaning: "translator", meaningAr: "المترجم والمتخصص", meaningFr: "traducteur" },
        { arabic: "نَصّ أَصْلِيّ", transliteration: "naṣṣ aṣlī", meaning: "source text", meaningAr: "النص الأصلي المراد ترجمته", meaningFr: "texte source" },
        { arabic: "نَصّ مُتَرْجَم", transliteration: "naṣṣ mutarjam", meaning: "target text", meaningAr: "النص المترجم المستهدف", meaningFr: "texte cible" },
        { arabic: "أَمَانَة", transliteration: "amāna", meaning: "fidelity", meaningAr: "الأمانة والدقة الترجمية", meaningFr: "fidélité" }
      ]
    },
    exerciseCount: 17, prerequisites: ["5-18"]
  },
  {
    id: "5-20", phaseId: 5, order: 20,
    title: "Arabic to English Translation",
    titleAr: "الترجمة من العربية إلى الإنجليزية",
    titleFr: "Traduction de l'arabe vers l'anglais",
    description: "Practice translating Arabic texts to English",
    descriptionAr: "مارس ترجمة النصوص العربية إلى اللغة الإنجليزية",
    descriptionFr: "Pratiquez la traduction de textes arabes vers l'anglais",
    objectives: ["Translate various text types", "Handle cultural references", "Maintain register", "Produce natural English"],
    objectivesAr: ["ترجمة أنواع نصوص مختلفة", "التعامل مع المراجع الثقافية", "الحفاظ على مستوى السجل اللغوي", "إنتاج إنجليزية طبيعية"],
    objectivesFr: ["Traduire différents types de textes", "Gérer les références culturelles", "Maintenir le registre", "Produire un anglais naturel"],
    estimatedTime: 55, difficulty: "hard", xpReward: 80,
    content: {
      theory: [
        { title: "Process", titleFr: "Processus", content: "1. Read entire text first\n2. Identify main ideas\n3. Note cultural/religious references\n4. Draft translation\n5. Revise for naturalness", contentFr: "1. Lire d'abord le texte entier\n2. Identifier les idées principales\n3. Noter les références culturelles/religieuses\n4. Rédiger la traduction\n5. Réviser pour la naturalité" },
        { title: "Common Challenges", titleFr: "Défis courants", content: "إِنْ شَاءَ اللهُ - God willing (cultural nuance)\nصَلَّى اللهُ عَلَيْهِ وَسَلَّمَ - blessings formula\nإِضَافَة chains - restructure in English", contentFr: "إِنْ شَاءَ اللهُ - Si Dieu le veut (nuance culturelle)\nصَلَّى اللهُ عَلَيْهِ وَسَلَّمَ - formule de bénédiction\nChaînes d'إِضَافَة - restructurer en anglais" },
        { title: "Text Types", titleFr: "Types de textes", content: "News: formal, objective tone\nLiterature: preserve style and imagery\nReligious: balance accuracy and readability\nLegal: precise terminology", contentFr: "Nouvelles: ton formel, objectif\nLittérature: préserver le style et l'imagerie\nReligieuse: équilibre entre précision et lisibilité\nLégale: terminologie précise" }
      ],
      vocabulary: [
        { arabic: "صِيَاغَة", transliteration: "ṣiyāgha", meaning: "formulation", meaningFr: "formulation" },
        { arabic: "مُرَاجَعَة", transliteration: "murāja'a", meaning: "revision", meaningFr: "révision" },
        { arabic: "تَنْقِيح", transliteration: "tanqīḥ", meaning: "editing", meaningFr: "édition" },
        { arabic: "سَلَاسَة", transliteration: "salāsa", meaning: "smoothness", meaningFr: "fluidité" },
        { arabic: "طَلَاقَة", transliteration: "ṭalāqa", meaning: "fluency", meaningFr: "fluidité" }
      ]
    },
    exerciseCount: 18, prerequisites: ["5-19"]
  },
  {
    id: "5-21", phaseId: 5, order: 21,
    title: "English to Arabic Translation",
    titleAr: "الترجمة من الإنجليزية إلى العربية",
    titleFr: "Traduction de l'anglais vers l'arabe",
    description: "Practice translating English texts to Arabic",
    descriptionAr: "مارس ترجمة النصوص الإنجليزية إلى اللغة العربية",
    descriptionFr: "Pratiquez la traduction de textes anglais vers l'arabe",
    objectives: ["Produce natural Arabic", "Use appropriate register", "Handle technical terms", "Maintain text coherence"],
    objectivesAr: ["إنتاج عربية طبيعية وسليمة", "استخدام السجل اللغوي المناسب", "التعامل مع المصطلحات التقنية", "الحفاظ على تماسك النص"],
    objectivesFr: ["Produire un arabe naturel", "Utiliser le registre approprié", "Gérer les termes techniques", "Maintenir la cohérence du texte"],
    estimatedTime: 55, difficulty: "hard", xpReward: 80,
    content: {
      theory: [
        { title: "Key Considerations", titleFr: "Considérations clés", content: "Right-to-left formatting\nArabic sentence structure (VSO option)\nGender agreement throughout\nCase endings in formal texts", contentFr: "Formatage de droite à gauche\nStructure de phrase arabe (option VSO)\nAccord du genre partout\nTerminaisons casuelles dans les textes formels" },
        { title: "Arabization Strategies", titleFr: "Stratégies d'arabisation", content: "تَعْرِيب - adapting foreign words\nتَرْجَمَة - translating meaning\nNeologisms for new concepts\nUsing classical roots", contentFr: "تَعْرِيب - adaptation des mots étrangers\nتَرْجَمَة - traduction du sens\nNéologismes pour les nouveaux concepts\nUtilisation de racines classiques" },
        { title: "Technical Translation", titleFr: "Traduction technique", content: "Consistent terminology\nReference existing translations\nBalance precision and clarity\nConsider audience", contentFr: "Terminologie cohérente\nRéférencer les traductions existantes\nÉquilibrer précision et clarté\nConsidérer le public" }
      ],
      vocabulary: [
        { arabic: "تَعْرِيب", transliteration: "ta'rīb", meaning: "Arabization", meaningFr: "arabisation" },
        { arabic: "مُصْطَلَح", transliteration: "muṣṭalaḥ", meaning: "term", meaningFr: "terme" },
        { arabic: "نَقْل", transliteration: "naql", meaning: "transfer/conveyance", meaningFr: "transfert/transport" },
        { arabic: "تَكْيِيف", transliteration: "takyīf", meaning: "adaptation", meaningFr: "adaptation" },
        { arabic: "تَوْطِين", transliteration: "tawṭīn", meaning: "domestication", meaningFr: "domestication" }
      ]
    },
    exerciseCount: 18, prerequisites: ["5-20"]
  },
  {
    id: "5-22", phaseId: 5, order: 22,
    title: "Cultural Mediation",
    titleAr: "الوساطة الثقافية",
    titleFr: "La médiation culturelle",
    description: "Navigate cultural differences in translation",
    descriptionAr: "تنقل بين الفروقات الثقافية في الترجمة بحساسية واحترافية",
    descriptionFr: "Naviguez les différences culturelles dans la traduction",
    objectives: ["Identify cultural references", "Choose appropriate strategies", "Explain when needed", "Maintain sensitivity"],
    objectivesAr: ["تحديد المراجع والمفاهيم الثقافية", "اختيار الاستراتيجيات المناسبة", "التوضيح عند الحاجة", "الحفاظ على الحساسية الثقافية"],
    objectivesFr: ["Identifier les références culturelles", "Choisir les stratégies appropriées", "Expliquer si nécessaire", "Maintenir la sensibilité"],
    estimatedTime: 55, difficulty: "hard", xpReward: 80,
    content: {
      theory: [
        { title: "Cultural Concepts", titleFr: "Concepts culturels", content: "Untranslatable concepts:\nعَيْب - shame/impropriety\nحَرَام/حَلَال - forbidden/permitted\nكَرَم - generosity (deeper meaning)\nTranslator must decide: explain or adapt?", contentFr: "Concepts intraduisibles:\nعَيْب - honte/inconvenance\nحَرَام/حَلَال - interdit/permis\nكَرَم - générosité (sens plus profond)\nLe traducteur doit décider: expliquer ou adapter?" },
        { title: "Strategies", titleFr: "Stratégies", content: "Loan word + explanation\nFunctional equivalent\nExpansion/paraphrase\nFootnote/endnote", contentFr: "Emprunt + explication\nÉquivalent fonctionnel\nExpansion/paraphrase\nNote de bas de page/note de fin" },
        { title: "Sensitivity", titleFr: "Sensibilité", content: "Religious content: respect and accuracy\nPolitical content: neutrality\nGender issues: awareness\nHistorical context: fairness", contentFr: "Contenu religieux: respect et précision\nContenu politique: neutralité\nQuestions de genre: sensibilité\nContexte historique: équité" }
      ],
      vocabulary: [
        { arabic: "ثَقَافِيّ", transliteration: "thaqāfī", meaning: "cultural", meaningFr: "culturel" },
        { arabic: "وَسَاطَة", transliteration: "wasāṭa", meaning: "mediation", meaningFr: "médiation" },
        { arabic: "حَسَاسِيَّة", transliteration: "ḥasāsiyya", meaning: "sensitivity", meaningFr: "sensibilité" },
        { arabic: "سِيَاق", transliteration: "siyāq", meaning: "context", meaningFr: "contexte" },
        { arabic: "مَفْهُوم", transliteration: "mafhūm", meaning: "concept", meaningFr: "concept" }
      ]
    },
    exerciseCount: 17, prerequisites: ["5-21"]
  },
  {
    id: "5-23", phaseId: 5, order: 23,
    title: "Literary Translation",
    titleAr: "ترجمة النصوص الأدبية",
    titleFr: "La traduction littéraire",
    description: "Translate literary texts with style",
    descriptionAr: "اترجم النصوص الأدبية مع الحفاظ على الأسلوب والجمالية",
    descriptionFr: "Traduisez des textes littéraires avec style",
    objectives: ["Preserve literary style", "Handle figurative language", "Maintain rhythm when possible", "Balance fidelity and beauty"],
    objectivesAr: ["الحفاظ على الأسلوب الأدبي", "التعامل مع اللغة المجازية والصور البلاغية", "الحفاظ على الإيقاع عند الإمكان", "الموازنة بين الأمانة والجمالية"],
    objectivesFr: ["Préserver le style littéraire", "Gérer le langage figuré", "Maintenir le rythme si possible", "Équilibrer fidélité et beauté"],
    estimatedTime: 55, difficulty: "hard", xpReward: 85,
    content: {
      theory: [
        { title: "Poetry Translation", titleFr: "Traduction poétique", content: "Options:\n1. Prose translation (meaning)\n2. Verse translation (form + meaning)\n3. Creative adaptation\nNo perfect solution - choices depend on purpose", contentFr: "Options:\n1. Traduction en prose (sens)\n2. Traduction en vers (forme + sens)\n3. Adaptation créative\nAucune solution parfaite - les choix dépendent du but" },
        { title: "Prose Translation", titleFr: "Traduction en prose", content: "Preserve:\n- Narrative voice\n- Dialogue style\n- Imagery and metaphor\n- Cultural authenticity", contentFr: "Préserver:\n- Voix narrative\n- Style du dialogue\n- Imagerie et métaphore\n- Authenticité culturelle" },
        { title: "Challenges", titleFr: "Défis", content: "سَجْع (rhymed prose) - near impossible\nPoetic meter - usually lost\nWordplay - requires creativity\nCultural allusions - may need notes", contentFr: "سَجْع (prose rimée) - presque impossible\nMètre poétique - généralement perdu\nJeu de mots - nécessite créativité\nAllusions culturelles - peuvent nécessiter des notes" }
      ],
      vocabulary: [
        { arabic: "أَدَبِيّ", transliteration: "adabī", meaning: "literary", meaningFr: "littéraire" },
        { arabic: "أُسْلُوبِيّ", transliteration: "uslūbī", meaning: "stylistic", meaningFr: "stylistique" },
        { arabic: "مَجَازِيّ", transliteration: "majāzī", meaning: "figurative", meaningFr: "figuré" },
        { arabic: "إِيقَاعِيّ", transliteration: "īqā'ī", meaning: "rhythmic", meaningFr: "rythmique" },
        { arabic: "جَمَالِيّ", transliteration: "jamālī", meaning: "aesthetic", meaningFr: "esthétique" }
      ]
    },
    exerciseCount: 18, prerequisites: ["5-22"]
  },
  {
    id: "5-24", phaseId: 5, order: 24,
    title: "Professional Translation",
    titleAr: "الترجمة المهنية",
    titleFr: "La traduction professionnelle",
    description: "Develop professional translation skills",
    descriptionAr: "طور مهارات الترجمة المهنية والاحترافية",
    descriptionFr: "Développez des compétences en traduction professionnelle",
    objectives: ["Use CAT tools", "Manage terminology", "Meet deadlines", "Handle various domains"],
    objectivesAr: ["استخدام أدوات الترجمة المدعومة بالحاسوب", "إدارة المصطلحات والمعاجم", "الالتزام بالمواعيد النهائية", "التعامل مع مجالات متنوعة"],
    objectivesFr: ["Utiliser les outils TAO", "Gérer la terminologie", "Respecter les délais", "Gérer différents domaines"],
    estimatedTime: 55, difficulty: "hard", xpReward: 85,
    content: {
      theory: [
        { title: "Professional Tools", titleFr: "Outils professionnels", content: "CAT (Computer-Assisted Translation)\nTranslation memory systems\nTerminology databases\nQuality assurance tools", contentFr: "TAO (Traduction assistée par ordinateur)\nSystèmes de mémoire de traduction\nBases de données terminologiques\nOutils d'assurance qualité" },
        { title: "Workflow", titleFr: "Flux de travail", content: "1. Analyze source\n2. Research terminology\n3. Translate segments\n4. Review and edit\n5. Quality check\n6. Deliver", contentFr: "1. Analyser la source\n2. Rechercher la terminologie\n3. Traduire les segments\n4. Examiner et éditer\n5. Contrôle qualité\n6. Livrer" },
        { title: "Specializations", titleFr: "Spécialisations", content: "Legal (قَانُونِيَّة)\nMedical (طِبِّيَّة)\nTechnical (تَقْنِيَّة)\nFinancial (مَالِيَّة)\nLiterary (أَدَبِيَّة)", contentFr: "Juridique (قَانُونِيَّة)\nMédical (طِبِّيَّة)\nTechnique (تَقْنِيَّة)\nFinancière (مَالِيَّة)\nLittéraire (أَدَبِيَّة)" }
      ],
      vocabulary: [
        { arabic: "مِهْنِيّ", transliteration: "mihnī", meaning: "professional", meaningFr: "professionnel" },
        { arabic: "تَخَصُّص", transliteration: "takhaṣṣuṣ", meaning: "specialization", meaningFr: "spécialisation" },
        { arabic: "مُرَاقَبَة جَوْدَة", transliteration: "murāqabat jawda", meaning: "quality control", meaningFr: "contrôle qualité" },
        { arabic: "ذَاكِرَة تَرْجَمَة", transliteration: "dhākirat tarjama", meaning: "translation memory", meaningFr: "mémoire de traduction" },
        { arabic: "قَاعِدَة بَيَانَات", transliteration: "qā'idat bayānāt", meaning: "database", meaningFr: "base de données" }
      ]
    },
    exerciseCount: 17, prerequisites: ["5-23"]
  },
  // SECTION 5: MASTERY & CERTIFICATION (Lessons 25-30)
  {
    id: "5-25", phaseId: 5, order: 25,
    title: "Creative Writing in Arabic",
    titleAr: "الكتابة الإبداعية بالعربية",
    titleFr: "L'écriture créative en arabe",
    description: "Develop creative writing skills in Arabic",
    descriptionAr: "طور مهارات الكتابة الإبداعية والفنية باللغة العربية",
    descriptionFr: "Développez des compétences en écriture créative en arabe",
    objectives: ["Write original texts", "Use literary devices", "Develop personal style", "Express ideas eloquently"],
    objectivesAr: ["كتابة نصوص أصلية وإبداعية", "استخدام الأجهزة والتقنيات الأدبية", "تطوير أسلوب شخصي وفريد", "التعبير عن الأفكار بفصاحة وجمالية"],
    objectivesFr: ["Écrire des textes originaux", "Utiliser des procédés littéraires", "Développer un style personnel", "Exprimer les idées éloquemment"],
    estimatedTime: 55, difficulty: "hard", xpReward: 85,
    content: {
      theory: [
        { title: "Short Story Writing", titleFr: "Écriture de courtes histoires", content: "Elements:\n- Compelling opening\n- Character development\n- Conflict and resolution\n- Arabic dialogue conventions", contentFr: "Éléments:\n- Ouverture captivante\n- Développement des personnages\n- Conflit et résolution\n- Conventions du dialogue arabe" },
        { title: "Essay Writing", titleFr: "Écriture d'essais", content: "مَقَالَة genres:\n- Personal (شَخْصِيَّة)\n- Argumentative (جَدَلِيَّة)\n- Descriptive (وَصْفِيَّة)\nDevelop thesis and support", contentFr: "Genres de مَقَالَة:\n- Personnel (شَخْصِيَّة)\n- Argumentatif (جَدَلِيَّة)\n- Descriptif (وَصْفِيَّة)\nDévelopper la thèse et le soutien" },
        { title: "Poetry Attempts", titleFr: "Tentatives poétiques", content: "Start with free verse (شِعْر حُرّ)\nExperiment with imagery\nCapture Arabic music\nBuild gradually to forms", contentFr: "Commencez par le vers libre (شِعْر حُرّ)\nExpérimentez avec l'imagerie\nCapturez la musique arabe\nConstituez progressivement les formes" }
      ],
      vocabulary: [
        { arabic: "إِبْدَاع", transliteration: "ibdā'", meaning: "creativity", meaningFr: "créativité" },
        { arabic: "خَيَال", transliteration: "khayāl", meaning: "imagination", meaningFr: "imagination" },
        { arabic: "تَعْبِير", transliteration: "ta'bīr", meaning: "expression", meaningFr: "expression" },
        { arabic: "إِلْهَام", transliteration: "ilhām", meaning: "inspiration", meaningFr: "inspiration" },
        { arabic: "صَقْل", transliteration: "ṣaql", meaning: "polishing", meaningFr: "polissage" }
      ]
    },
    exerciseCount: 18, prerequisites: ["5-24"]
  },
  {
    id: "5-26", phaseId: 5, order: 26,
    title: "Critical Analysis Skills",
    titleAr: "مهارات التحليل النقدي",
    titleFr: "Compétences en analyse critique",
    description: "Develop advanced critical analysis skills",
    descriptionAr: "طور مهارات التحليل والنقد الأدبي المتقدم",
    descriptionFr: "Développez des compétences avancées en analyse critique",
    objectives: ["Analyze texts critically", "Formulate arguments", "Support with evidence", "Write critical essays"],
    objectivesAr: ["تحليل النصوص بطريقة نقدية وتحليلية", "صياغة حجج وأدلة قوية", "دعم الآراء بالأدلة والاستشهادات", "كتابة مقالات نقدية احترافية"],
    objectivesFr: ["Analyser les textes de manière critique", "Formuler des arguments", "Soutenir par des preuves", "Rédiger des essais critiques"],
    estimatedTime: 55, difficulty: "hard", xpReward: 85,
    content: {
      theory: [
        { title: "Critical Reading", titleFr: "Lecture critique", content: "Question:\n- Author's purpose\n- Intended audience\n- Underlying assumptions\n- Effectiveness of argument", contentFr: "Question:\n- But de l'auteur\n- Public visé\n- Hypothèses sous-jacentes\n- Efficacité de l'argument" },
        { title: "Literary Criticism", titleFr: "Critique littéraire", content: "Approaches:\n- Historical (تَارِيخِيّ)\n- Formalist (شَكْلِيّ)\n- Feminist (نِسْوِيّ)\n- Postcolonial (مَا بَعْد اِسْتِعْمَارِيّ)", contentFr: "Approches:\n- Historique (تَارِيخِيّ)\n- Formaliste (شَكْلِيّ)\n- Féministe (نِسْوِيّ)\n- Postcoloniale (مَا بَعْد اِسْتِعْمَارِيّ)" },
        { title: "Writing Criticism", titleFr: "Écriture critique", content: "Clear thesis\nTextual evidence (اِسْتِشْهَاد)\nLogical argument\nEngagement with other critics", contentFr: "Thèse claire\nPreuves textuelles (اِسْتِشْهَاد)\nArgument logique\nEngagement avec d'autres critiques" }
      ],
      vocabulary: [
        { arabic: "نَقْد", transliteration: "naqd", meaning: "criticism", meaningFr: "critique" },
        { arabic: "نَاقِد", transliteration: "nāqid", meaning: "critic", meaningFr: "critique" },
        { arabic: "تَقْيِيم", transliteration: "taqyīm", meaning: "evaluation", meaningFr: "évaluation" },
        { arabic: "مَنْهَج", transliteration: "manhaj", meaning: "approach/method", meaningFr: "approche/méthode" },
        { arabic: "حُجَّة", transliteration: "ḥujja", meaning: "argument", meaningFr: "argument" }
      ]
    },
    exerciseCount: 18, prerequisites: ["5-25"]
  },
  {
    id: "5-27", phaseId: 5, order: 27,
    title: "Public Speaking in Arabic",
    titleAr: "الخطابة بالعربية",
    titleFr: "L'art oratoire en arabe",
    description: "Develop public speaking skills in Arabic",
    descriptionAr: "طور مهارات الخطابة والتحدث أمام الجمهور باللغة العربية",
    descriptionFr: "Développez des compétences en prise de parole en public en arabe",
    objectives: ["Structure speeches", "Use rhetorical techniques", "Engage audiences", "Speak with confidence"],
    objectivesAr: ["بناء وتنظيم الخطابات والحديث العام", "استخدام التقنيات البلاغية والإقناعية", "جذب انتباه الجمهور والتفاعل معهم", "التحدث بثقة واحترافية"],
    objectivesFr: ["Structurer les discours", "Utiliser des techniques rhétoriques", "Engager les audiences", "Parler avec confiance"],
    estimatedTime: 55, difficulty: "hard", xpReward: 85,
    content: {
      theory: [
        { title: "Speech Structure", titleFr: "Structure du discours", content: "مُقَدِّمَة - Opening (hook, context)\nصُلْب الخِطَاب - Body (main points)\nخَاتِمَة - Conclusion (summary, call to action)", contentFr: "مُقَدِّمَة - Ouverture (accroche, contexte)\nصُلْب الخِطَاب - Corps (points principaux)\nخَاتِمَة - Conclusion (résumé, appel à l'action)" },
        { title: "Rhetorical Techniques", titleFr: "Techniques rhétoriques", content: "التَّكْرَار - repetition for emphasis\nالأَسْئِلَة البَلَاغِيَّة - rhetorical questions\nالتَّشْبِيه وَالاِسْتِعَارَة - figurative language\nالتَّدَرُّج - building to climax", contentFr: "التَّكْرَار - répétition pour l'emphase\nالأَسْئِلَة البَلَاغِيَّة - questions rhétoriques\nالتَّشْبِيه وَالاِسْتِعَارَة - langage figuré\nالتَّدَرُّج - montée vers le sommet" },
        { title: "Delivery", titleFr: "Livraison", content: "Voice modulation (تَنْوِيع الصَّوْت)\nEye contact (التَّوَاصُل البَصَرِيّ)\nGestures (الإِشَارَات)\nPacing (الإِيقَاع)", contentFr: "Modulation de la voix (تَنْوِيع الصَّوْت)\nContact oculaire (التَّوَاصُل البَصَرِيّ)\nGestes (الإِشَارَات)\nRythme (الإِيقَاع)" }
      ],
      vocabulary: [
        { arabic: "خِطَاب", transliteration: "khiṭāb", meaning: "speech/address", meaningFr: "discours/adresse" },
        { arabic: "خَطِيب", transliteration: "khaṭīb", meaning: "orator", meaningFr: "orateur" },
        { arabic: "خَطَابَة", transliteration: "khaṭāba", meaning: "oratory", meaningFr: "art oratoire" },
        { arabic: "إِقْنَاع", transliteration: "iqnā'", meaning: "persuasion", meaningFr: "persuasion" },
        { arabic: "جُمْهُور", transliteration: "jumhūr", meaning: "audience", meaningFr: "public" }
      ]
    },
    exerciseCount: 17, prerequisites: ["5-26"]
  },
  {
    id: "5-28", phaseId: 5, order: 28,
    title: "Research in Arabic",
    titleAr: "البحث باللغة العربية",
    titleFr: "La recherche en arabe",
    description: "Conduct academic research using Arabic sources",
    descriptionAr: "أجرِ أبحاثاً أكاديمية واستخدم المصادر العربية الأصلية",
    descriptionFr: "Menez des recherches académiques à partir de sources arabes",
    objectives: ["Search Arabic databases", "Evaluate Arabic sources", "Cite correctly", "Synthesize information"],
    objectivesAr: ["البحث في قواعد البيانات العربية المتخصصة", "تقييم وتقويم المصادر العربية", "التوثيق والاستشهاد بشكل صحيح", "تجميع وتركيب المعلومات"],
    objectivesFr: ["Rechercher dans les bases de données arabes", "Évaluer les sources arabes", "Citer correctement", "Synthétiser l'information"],
    estimatedTime: 55, difficulty: "hard", xpReward: 85,
    content: {
      theory: [
        { title: "Arabic Resources", titleFr: "Ressources arabes", content: "Databases: الشاملة، المكتبة الرقمية\nJournals: المجلات العلمية المحكمة\nClassical sources: كتب التراث\nOnline: المواقع الأكاديمية", contentFr: "Bases de données: الشاملة، المكتبة الرقمية\nJournaux: المجلات العلمية المحكمة\nSources classiques: كتب التراث\nEn ligne: المواقع الأكاديمية" },
        { title: "Source Evaluation", titleFr: "Évaluation des sources", content: "المَصْدَر - primary vs secondary\nالمُؤَلِّف - author credentials\nالنَّاشِر - publisher reputation\nالتَّارِيخ - currency", contentFr: "المَصْدَر - primaire vs secondaire\nالمُؤَلِّف - accréditations d'auteur\nالنَّاشِر - réputation de l'éditeur\nالتَّارِيخ - actualité" },
        { title: "Citation Styles", titleFr: "Styles de citation", content: "Arabic citation conventions\nMixing Arabic and English sources\nTransliteration standards\nFormatting bibliographies", contentFr: "Conventions de citation arabes\nMélange de sources arabes et anglaises\nNormes de translittération\nFormatage des bibliographies" }
      ],
      vocabulary: [
        { arabic: "بَحْث عِلْمِيّ", transliteration: "baḥth 'ilmī", meaning: "scientific research", meaningFr: "recherche scientifique" },
        { arabic: "مَرْجِع", transliteration: "marji'", meaning: "reference", meaningFr: "référence" },
        { arabic: "مَصْدَر أَوَّلِيّ", transliteration: "maṣdar awwalī", meaning: "primary source", meaningFr: "source primaire" },
        { arabic: "اِقْتِبَاس", transliteration: "iqtibās", meaning: "quotation", meaningFr: "citation" },
        { arabic: "بِبْلِيُوغْرَافْيَا", transliteration: "bibliyūghrāfyā", meaning: "bibliography", meaningFr: "bibliographie" }
      ]
    },
    exerciseCount: 17, prerequisites: ["5-27"]
  },
  {
    id: "5-29", phaseId: 5, order: 29,
    title: "Arabic Language Proficiency Standards",
    titleAr: "معايير الكفاءة في اللغة العربية",
    titleFr: "Normes de compétence en langue arabe",
    description: "Understand and achieve proficiency standards",
    descriptionAr: "افهم وحقق معايير الكفاءة اللغوية العالمية",
    descriptionFr: "Comprenez et atteignez les normes de compétence",
    objectives: ["Know proficiency frameworks", "Self-assess accurately", "Prepare for tests", "Document achievements"],
    objectivesAr: ["معرفة أطر ومعايير الكفاءة الدولية", "التقييم الذاتي الدقيق للمستوى", "التحضير للاختبارات والفحوصات", "توثيق الإنجازات والشهادات"],
    objectivesFr: ["Connaître les cadres de compétence", "S'auto-évaluer avec précision", "Se préparer aux tests", "Documenter les réalisations"],
    estimatedTime: 55, difficulty: "hard", xpReward: 90,
    content: {
      theory: [
        { title: "Proficiency Frameworks", titleFr: "Cadres de compétence", content: "ACTFL (American Council)\nCEFR (European Framework)\nILR (Interagency Language Roundtable)\nArabic-specific assessments", contentFr: "ACTFL (American Council)\nCECR (Cadre européen)\nILR (Interagency Language Roundtable)\nÉvaluations spécifiques à l'arabe" },
        { title: "Skills Assessment", titleFr: "Évaluation des compétences", content: "Reading (قِرَاءَة)\nWriting (كِتَابَة)\nListening (اِسْتِمَاع)\nSpeaking (تَحَدُّث)\nCultural competence", contentFr: "Lecture (قِرَاءَة)\nÉcriture (كِتَابَة)\nÉcoute (اِسْتِمَاع)\nParole (تَحَدُّث)\nCompétence culturelle" },
        { title: "Advanced Level (C1-C2)", titleFr: "Niveau avancé (C1-C2)", content: "Read complex texts fluently\nWrite for academic/professional purposes\nUnderstand native speech including dialects\nSustain sophisticated discussions\nNavigate cultural nuances", contentFr: "Lire des textes complexes couramment\nÉcrire à des fins académiques/professionnelles\nComprendre la parole native, y compris les dialectes\nMaintenir des discussions sophistiquées\nNaviguer les nuances culturelles" }
      ],
      vocabulary: [
        { arabic: "كَفَاءَة", transliteration: "kafā'a", meaning: "proficiency", meaningFr: "compétence" },
        { arabic: "مُسْتَوَى", transliteration: "mustawā", meaning: "level", meaningFr: "niveau" },
        { arabic: "مِعْيَار", transliteration: "mi'yār", meaning: "standard", meaningFr: "norme" },
        { arabic: "تَقْيِيم", transliteration: "taqyīm", meaning: "assessment", meaningFr: "évaluation" },
        { arabic: "شَهَادَة", transliteration: "shahāda", meaning: "certificate", meaningFr: "certificat" }
      ]
    },
    exerciseCount: 18, prerequisites: ["5-28"]
  },
  {
    id: "5-30", phaseId: 5, order: 30,
    title: "Final Mastery Assessment",
    titleAr: "التقييم النهائي للإتقان",
    titleFr: "Évaluation finale de maîtrise",
    description: "Comprehensive assessment of Arabic mastery",
    descriptionAr: "تقييم شامل ودقيق لإتقان اللغة العربية",
    descriptionFr: "Évaluation complète de la maîtrise de l'arabe",
    objectives: ["Demonstrate all skills", "Complete capstone project", "Receive mastery certification", "Plan continued learning"],
    objectivesAr: ["إثبات وتطبيق جميع المهارات المكتسبة", "إنجاز مشروع التتويج الشامل", "الحصول على شهادة الإتقان", "التخطيط لمتابعة التعلم"],
    objectivesFr: ["Démontrer toutes les compétences", "Compléter le projet final", "Recevoir la certification de maîtrise", "Planifier l'apprentissage continu"],
    estimatedTime: 90, difficulty: "hard", xpReward: 150,
    content: {
      theory: [
        { title: "Capstone Requirements", titleFr: "Exigences du projet final", content: "Choose ONE:\n1. Translate a literary text (2000+ words)\n2. Write original creative piece (1500+ words)\n3. Deliver academic presentation (20+ minutes)\n4. Complete research paper (3000+ words)", contentFr: "Choisissez UN:\n1. Traduire un texte littéraire (2000+ mots)\n2. Écrire une pièce créative originale (1500+ mots)\n3. Présenter une présentation académique (20+ minutes)\n4. Compléter un article de recherche (3000+ mots)" },
        { title: "Assessment Areas", titleFr: "Domaines d'évaluation", content: "Grammar accuracy (90%+)\nVocabulary range (advanced)\nCultural competence (demonstrated)\nCommunicative effectiveness (professional level)", contentFr: "Précision grammaticale (90%+)\nÉtendue du vocabulaire (avancée)\nCompétence culturelle (démontrée)\nEfficacité communicative (niveau professionnel)" },
        { title: "Continued Learning", titleFr: "Apprentissage continu", content: "Join Arab communities\nConsume Arabic media daily\nRead Arabic literature regularly\nUse Arabic professionally\nConsider advanced certifications", contentFr: "Rejoignez les communautés arabes\nConsommez les médias arabes quotidiennement\nLisez la littérature arabe régulièrement\nUtilisez l'arabe professionnellement\nConsidérez les certifications avancées" }
      ],
      vocabulary: [
        { arabic: "إِتْقَان", transliteration: "itqān", meaning: "mastery", meaningFr: "maîtrise" },
        { arabic: "تَتْوِيج", transliteration: "tatwīj", meaning: "culmination", meaningFr: "couronnement" },
        { arabic: "إِنْجَاز", transliteration: "injāz", meaning: "achievement", meaningFr: "réussite" },
        { arabic: "تَمَيُّز", transliteration: "tamayyuz", meaning: "excellence", meaningFr: "excellence" },
        { arabic: "مُسْتَقْبَل", transliteration: "mustaqbal", meaning: "future", meaningFr: "avenir" }
      ]
    },
    exerciseCount: 25, prerequisites: ["5-29"]
  }
];
