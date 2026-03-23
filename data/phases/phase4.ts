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
    descriptionAr: "إتقان نظام الحالات الإعرابية في اللغة العربية",
    descriptionFr: "Maîtrisez le système des désinences casuelles arabes",
    objectives: ["Understand nominative, accusative, genitive", "Recognize case markers", "Apply case rules", "Read classical texts"],
    objectivesAr: ["فهم الحالات الإعرابية الثلاث (المرفوع والمنصوب والمجرور)", "التعرف على علامات الإعراب المختلفة", "تطبيق قواعد الإعراب في التحليل النحوي", "قراءة وفهم النصوص الكلاسيكية"],
    objectivesFr: ["Comprendre le nominatif, l'accusatif et le génitif", "Reconnaître les marqueurs de cas", "Appliquer les règles des cas", "Lire les textes classiques"],
    estimatedTime: 55, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "The Three Cases", titleAr: "الحالات الإعرابية الثلاث", titleFr: "Les trois cas", content: "مَرْفُوع (Nominative - subject): ـُ / ـٌ\nمَنْصُوب (Accusative - object): ـَ / ـً\nمَجْرُور (Genitive - after preposition): ـِ / ـٍ", contentAr: "المرفوع (الفاعل والمبتدأ): ـُ / ـٌ\nالمنصوب (المفعول والخبر): ـَ / ـً\nالمجرور (المجرور بالحرف والمجرور بالإضافة): ـِ / ـٍ", contentFr: "مَرْفُوع (Nominatif - sujet) : ـُ / ـٌ\nمَنْصُوب (Accusatif - complément) : ـَ / ـً\nمَجْرُور (Génitif - après préposition) : ـِ / ـٍ" },
        { title: "When to Use Each", titleAr: "متى نستخدم كل حالة", titleFr: "Quand utiliser chacun", content: "Nominative: Subject, predicate of nominal sentence\nAccusative: Object, adverbs, after إِنَّ sisters\nGenitive: After prepositions, in إضافة constructions", contentAr: "المرفوع: الفاعل والمبتدأ والخبر في الجملة الاسمية\nالمنصوب: المفعول به والحال والمفعول فيه والمفعول معه\nالمجرور: ما بعد الحروف الجارة والمضاف إليه", contentFr: "Nominatif : Sujet, prédicat de phrase nominale\nAccusatif : Complément, adverbes, après les sœurs de إِنَّ\nGénitif : Après prépositions, dans les constructions d'إضافة" },
        { title: "Diptotes (الممنوع من الصرف)", titleAr: "الممنوع من الصرف", titleFr: "Les diptotes (الممنوع من الصرف)", content: "Some nouns don't take full case endings:\n• Names: أَحْمَدُ، فَاطِمَةُ\n• Colors: أَحْمَرُ، أَصْفَرُ\n• Patterns: أَفْعَلُ، مَفَاعِلُ", contentAr: "أسماء لا تتغير علاماتها الإعرابية في حالة النصب والجر:\n• الأعلام: أَحْمَدُ، فَاطِمَةُ\n• الألوان: أَحْمَرُ، أَصْفَرُ\n• الصيغ المعينة: أَفْعَلُ، مَفَاعِلُ", contentFr: "Certains noms ne prennent pas de désinences de cas complets :\n• Noms propres : أَحْمَدُ، فَاطِمَةُ\n• Couleurs : أَحْمَرُ، أَصْفَرُ\n• Schèmes : أَفْعَلُ، مَفَاعِلُ" }
      ],
      vocabulary: [
        { arabic: "مَرْفُوع", transliteration: "marfū'", meaning: "nominative case", meaningAr: "الحالة المرفوعة", meaningFr: "cas nominatif" },
        { arabic: "مَنْصُوب", transliteration: "manṣūb", meaning: "accusative case", meaningAr: "الحالة المنصوبة", meaningFr: "cas accusatif" },
        { arabic: "مَجْرُور", transliteration: "majrūr", meaning: "genitive case", meaningAr: "الحالة المجرورة", meaningFr: "cas génitif" },
        { arabic: "فَاعِل", transliteration: "fā'il", meaning: "subject/doer", meaningAr: "من قام بالفعل", meaningFr: "sujet/agent" },
        { arabic: "مَفْعُول", transliteration: "maf'ūl", meaning: "object", meaningAr: "المقصود الذي وقع عليه الفعل", meaningFr: "complément" }
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
    descriptionAr: "إتقان قواعد التنوين وتطبيقها على الكلمات",
    descriptionFr: "Maîtrisez les règles de la nunation en arabe",
    objectives: ["Apply nunation correctly", "Distinguish tanween types", "Use with adjectives", "Handle diptotes"],
    objectivesAr: ["تطبيق التنوين على الكلمات بشكل صحيح", "التمييز بين أنواع التنوين الثلاثة", "استخدام التنوين مع الصفات والأسماء", "التعامل مع الممنوع من الصرف"],
    objectivesFr: ["Appliquer correctement la nunation", "Distinguer les types de tanween", "Utiliser avec les adjectifs", "Gérer les diptotes"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "What is Tanween?", titleAr: "ما هو التنوين؟", titleFr: "Qu'est-ce que le tanween ?", content: "Nunation adds an 'n' sound to indefinite nouns:\nـٌ (un) - nominative: كِتَابٌ\nـً (an) - accusative: كِتَابًا\nـٍ (in) - genitive: كِتَابٍ", contentAr: "إضافة صوت النون إلى نهاية الكلمة المنونة:\nـٌ (نون الضم) - الحالة المرفوعة: كِتَابٌ\nـً (نون الفتح) - الحالة المنصوبة: كِتَابًا\nـٍ (نون الكسر) - الحالة المجرورة: كِتَابٍ" },
        { title: "When NOT to Use", titleAr: "متى لا نستخدم التنوين", titleFr: "Quand ne pas l'utiliser", content: "No tanween on:\n• Definite nouns (with الـ)\n• Diptotes (proper names, patterns)\n• Nouns in إضافة", contentAr: "لا يجوز تنوين:\n• الأسماء المعرفة بـ (ال)\n• الممنوع من الصرف من الأعلام والصيغ\n• الاسم المضاف إلى غيره" },
        { title: "Accusative Alif", titleAr: "ألف التنوين", titleFr: "Alif accusatif", content: "Most accusative tanween adds alif: ـًا\nExcept words ending in:\n• تاء مربوطة: مدرسةً\n• Alif: عصًا", contentAr: "معظم التنوين المنصوب يضاف إليه ألف: ـًا\nإلا الكلمات المنتهية بـ:\n• تاء التأنيث الساكنة: مدرسةً\n• الألف اللينة: عصًا" }
      ],
      vocabulary: [
        { arabic: "تَنْوِين", transliteration: "tanwīn", meaning: "nunation", meaningAr: "إضافة النون لنهاية الكلمة", meaningFr: "nunation" },
        { arabic: "نَكِرَة", transliteration: "nakira", meaning: "indefinite", meaningAr: "اسم غير معرّف", meaningFr: "indéfini" },
        { arabic: "مَعْرِفَة", transliteration: "ma'rifa", meaning: "definite", meaningAr: "اسم معرّف", meaningFr: "défini" },
        { arabic: "مُنَوَّن", transliteration: "munawwan", meaning: "nunated", meaningAr: "مضاف إليه نون التنوين", meaningFr: "nunaté" },
        { arabic: "غَيْر مُنَوَّن", transliteration: "ghayr munawwan", meaning: "non-nunated", meaningAr: "لم يضاف إليه نون التنوين", meaningFr: "non nunaté" }
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
    descriptionAr: "إتقان الإضافة والتراكيب الإضافية المعقدة",
    descriptionFr: "Maîtrisez en profondeur les constructions génitivales",
    objectives: ["Form complex إضافة chains", "Distinguish types of إضافة", "Apply definiteness rules", "Use in formal writing"],
    objectivesAr: ["تكوين سلاسل إضافية معقدة", "التمييز بين أنواع الإضافة", "تطبيق قواعد التعريف والتنكير", "استخدام الإضافة في الكتابة الفصحى"],
    objectivesFr: ["Former des chaînes d'إضافة complexes", "Distinguer les types d'إضافة", "Appliquer les règles de définitude", "Utiliser dans l'écriture formelle"],
    estimatedTime: 55, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "Idafa Structure", titleAr: "بنية الإضافة", titleFr: "Structure de l'idafa", content: "مُضَاف + مُضَاف إِلَيْه\n• First noun loses tanween and الـ\n• Second noun takes genitive case\n• Whole phrase takes definiteness of second", contentAr: "مُضَاف + مُضَاف إِلَيْه\n• الاسم الأول يفقد التنوين و(ال)\n• الاسم الثاني يكون مجروراً بالإضافة\n• التركيب يأخذ تعريف الاسم الثاني" },
        { title: "Chains", titleAr: "السلاسل الإضافية", titleFr: "Chaînes", content: "Multiple إضافة:\nبَابُ بَيْتِ صَدِيقِي\nThe door of my friend's house\n(4 nouns in chain)", contentAr: "إضافات متعددة:\nبَابُ بَيْتِ صَدِيقِي\nباب بيت صديقي\n(أربعة أسماء في سلسلة واحدة)" },
        { title: "Semantic Types", titleAr: "أنواع الإضافة الدلالية", titleFr: "Types sémantiques", content: "Possession: كِتَابُ الطَّالِبِ\nDescription: رَجُلُ عِلْمٍ (a man of knowledge)\nApposition: مَدِينَةُ القَاهِرَةِ", contentAr: "ملكية: كِتَابُ الطَّالِبِ (كتاب الطالب)\nوصف: رَجُلُ عِلْمٍ (رجل العلم)\nبدل: مَدِينَةُ القَاهِرَةِ (مدينة القاهرة)" }
      ],
      vocabulary: [
        { arabic: "مُضَاف", transliteration: "muḍāf", meaning: "annexed (first term)", meaningAr: "الاسم المضاف (الأول)", meaningFr: "annexé (premier terme)" },
        { arabic: "مُضَاف إِلَيْه", transliteration: "muḍāf ilayh", meaning: "annexed to (second term)", meaningAr: "الاسم المضاف إليه (الثاني)", meaningFr: "annexé à (second terme)" },
        { arabic: "إِضَافَة لَفْظِيَّة", transliteration: "iḍāfa lafẓiyya", meaning: "verbal idafa", meaningAr: "إضافة لا تقتضي تعريف الأول", meaningFr: "idafa verbale" },
        { arabic: "إِضَافَة مَعْنَوِيَّة", transliteration: "iḍāfa ma'nawiyya", meaning: "semantic idafa", meaningAr: "إضافة تقتضي تعريف الأول بتعريف الثاني", meaningFr: "idafa sémantique" },
        { arabic: "سِلْسِلَة", transliteration: "silsila", meaning: "chain", meaningAr: "تسلسل من الكلمات", meaningFr: "chaîne" }
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
    descriptionAr: "إتقان قواعد اتفاق الأعداد مع المعدود",
    descriptionFr: "Maîtrisez les règles complexes d'accord entre nombres et noms",
    objectives: ["Apply reverse gender rule (3-10)", "Use correct cases", "Handle 11-99", "Count with hundreds/thousands"],
    objectivesAr: ["تطبيق قاعدة تذكير وتأنيث الأعداد (3-10)", "استخدام الحالات الإعرابية الصحيحة", "التعامل مع الأعداد 11-99", "العد مع المئات والآلاف"],
    objectivesFr: ["Appliquer la règle d'inversion de genre (3-10)", "Utiliser les cas corrects", "Gérer 11-99", "Compter avec centaines/milliers"],
    estimatedTime: 55, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "Numbers 3-10", titleAr: "الأعداد من 3 إلى 10", titleFr: "Nombres 3-10", content: "REVERSE gender agreement:\nثَلَاثَةُ رِجَالٍ - 3 men (feminine number + masculine plural genitive)\nثَلَاثُ نِسَاءٍ - 3 women (masculine number + feminine plural genitive)", contentAr: "اتفاق تذكير وتأنيث معاكس:\nثَلَاثَةُ رِجَالٍ - ثلاثة رجال (عدد مؤنث + معدود جمع مذكر مجرور)\nثَلَاثُ نِسَاءٍ - ثلاث نساء (عدد مذكر + معدود جمع مؤنث مجرور)" },
        { title: "Numbers 11-99", titleAr: "الأعداد من 11 إلى 99", titleFr: "Nombres 11-99", content: "11-12: Special forms agree with counted\n13-19: Compound, reverse gender like 3-10\n20-99: Counted is singular accusative", contentAr: "11-12: صيغ خاصة تتفق مع المعدود\n13-19: أعداد مركبة مع قاعدة التذكير والتأنيث المعاكسة\n20-99: المعدود مفرد منصوب" },
        { title: "100s and 1000s", titleAr: "المئات والآلاف", titleFr: "Centaines et milliers", content: "مِائَة/مِئَة - 100 (counted in genitive singular)\nأَلْف - 1000 (counted in genitive singular)", contentAr: "مِائَة/مِئَة - مئة (المعدود مفرد مجرور)\nأَلْف - ألف (المعدود مفرد مجرور)" }
      ],
      vocabulary: [
        { arabic: "عَدَد", transliteration: "'adad", meaning: "number", meaningAr: "رقم أو مقدار", meaningFr: "nombre" },
        { arabic: "مَعْدُود", transliteration: "ma'dūd", meaning: "counted noun", meaningAr: "الاسم المعدود", meaningFr: "nom compté" },
        { arabic: "مُفْرَد", transliteration: "mufrad", meaning: "singular", meaningAr: "واحد منفرد", meaningFr: "singulier" },
        { arabic: "جَمْع", transliteration: "jam'", meaning: "plural", meaningAr: "جمع الأسماء", meaningFr: "pluriel" },
        { arabic: "تَمْيِيز", transliteration: "tamyīz", meaning: "specification", meaningAr: "الاسم الذي يوضح المقصود", meaningFr: "spécification" }
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
    descriptionAr: "تعلم الإعراب الخاص للأسماء الخمسة",
    descriptionFr: "Apprenez la déclinaison spéciale des cinq noms",
    objectives: ["Identify the five nouns", "Apply special case endings", "Use correctly in إضافة", "Recognize in classical texts"],
    objectivesAr: ["تحديد الأسماء الخمسة", "تطبيق الحالات الإعرابية الخاصة", "استخدامها بشكل صحيح في الإضافة", "التعرف عليها في النصوص الكلاسيكية"],
    objectivesFr: ["Identifier les cinq noms", "Appliquer les désinences de cas spéciales", "Utiliser correctement dans l'إضافة", "Les reconnaître dans les textes classiques"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "The Five Nouns", titleAr: "الأسماء الخمسة", titleFr: "Les cinq noms", content: "أَبٌ (father), أَخٌ (brother), حَمٌ (father-in-law), فَمٌ (mouth), ذُو (possessor of)\nWhen in إضافة, they show long vowels:\nأَبُو (nominative), أَبَا (accusative), أَبِي (genitive)", contentAr: "أَبٌ (الأب), أَخٌ (الأخ), حَمٌ (حماه), فَمٌ (الفم), ذُو (صاحب)\nعند إضافتها تظهر حروف علة طويلة:\nأَبُو (المرفوع), أَبَا (المنصوب), أَبِي (المجرور)" },
        { title: "Example Sentences", titleAr: "جمل تطبيقية", titleFr: "Phrases d'exemple", content: "جَاءَ أَبُوهُ - His father came (nominative)\nرَأَيْتُ أَبَاهُ - I saw his father (accusative)\nسَلَّمْتُ عَلَى أَبِيهِ - I greeted his father (genitive)", contentAr: "جَاءَ أَبُوهُ - جاء والده (مرفوع)\nرَأَيْتُ أَبَاهُ - رأيت والده (منصوب)\nسَلَّمْتُ عَلَى أَبِيهِ - سلمت على والده (مجرور)" },
        { title: "ذُو Usage", titleAr: "استخدام ذو", titleFr: "Utilisation de ذُو", content: "ذُو مَالٍ - possessor of wealth\nذُو عِلْمٍ - possessor of knowledge\nFeminine: ذَاتُ (nominative)", contentAr: "ذُو مَالٍ - صاحب مال\nذُو عِلْمٍ - صاحب علم\nالمؤنث: ذَاتُ (في المرفوع)" }
      ],
      vocabulary: [
        { arabic: "أَبُو", transliteration: "abū", meaning: "father of (nom.)", meaningAr: "الأب في حالة الإضافة", meaningFr: "père de (nom.)" },
        { arabic: "أَخُو", transliteration: "akhū", meaning: "brother of (nom.)", meaningAr: "الأخ في حالة الإضافة", meaningFr: "frère de (nom.)" },
        { arabic: "ذُو", transliteration: "dhū", meaning: "possessor of (nom.)", meaningAr: "صاحب في حالة الإضافة", meaningFr: "possesseur de (nom.)" },
        { arabic: "فُو", transliteration: "fū", meaning: "mouth of (nom.)", meaningAr: "الفم في حالة الإضافة", meaningFr: "bouche de (nom.)" },
        { arabic: "حَمُو", transliteration: "ḥamū", meaning: "father-in-law of (nom.)", meaningAr: "الحماة في حالة الإضافة", meaningFr: "beau-père de (nom.)" }
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
    descriptionAr: "إتقان جميع أنواع الأفعال المعتلة",
    descriptionFr: "Maîtrisez tous les types de verbes faibles",
    objectives: ["Conjugate assimilated verbs", "Handle hollow verbs", "Form defective verbs", "Use doubly weak verbs"],
    objectivesAr: ["تصريف الأفعال المثال", "التعامل مع الأفعال الأجوف", "تشكيل الأفعال الناقصة", "استخدام الأفعال الملفوفة"],
    objectivesFr: ["Conjuguer les verbes assimilés", "Gérer les verbes creux", "Former les verbes défectifs", "Utiliser les verbes doublement faibles"],
    estimatedTime: 55, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "Assimilated (مثال)", titleAr: "الفعل المثال", titleFr: "Assimilé (مثال)", content: "First radical is و or ي:\nوَصَلَ → يَصِلُ (the و drops in present)\nوَعَدَ → يَعِدُ", contentAr: "الراء الأولى و أو ي:\nوَصَلَ → يَصِلُ (الواو تسقط في المضارع)\nوَعَدَ → يَعِدُ" },
        { title: "Hollow (أَجْوَف)", titleAr: "الفعل الأجوف", titleFr: "Creux (أَجْوَف)", content: "Middle radical is و or ي:\nقَالَ (قول) → يَقُولُ\nبَاعَ (بيع) → يَبِيعُ", contentAr: "الراء الوسطى و أو ي:\nقَالَ (من قول) → يَقُولُ\nبَاعَ (من بيع) → يَبِيعُ" },
        { title: "Defective (نَاقِص)", titleAr: "الفعل الناقص", titleFr: "Défectif (نَاقِص)", content: "Final radical is و or ي:\nمَشَى → يَمْشِي\nدَعَا → يَدْعُو", contentAr: "الراء الأخيرة و أو ي:\nمَشَى → يَمْشِي\nدَعَا → يَدْعُو" }
      ],
      vocabulary: [
        { arabic: "مِثَال", transliteration: "mithāl", meaning: "assimilated verb", meaningAr: "فعل تكون فاؤه معتلة", meaningFr: "verbe assimilé" },
        { arabic: "أَجْوَف", transliteration: "ajwaf", meaning: "hollow verb", meaningAr: "فعل تكون عينه معتلة", meaningFr: "verbe creux" },
        { arabic: "نَاقِص", transliteration: "nāqiṣ", meaning: "defective verb", meaningAr: "فعل تكون لامه معتلة", meaningFr: "verbe défectif" },
        { arabic: "لَفِيف", transliteration: "lafīf", meaning: "doubly weak verb", meaningAr: "فعل معتل في موضعين", meaningFr: "verbe doublement faible" },
        { arabic: "صَحِيح", transliteration: "ṣaḥīḥ", meaning: "sound verb", meaningAr: "فعل سالم من الاعتلال", meaningFr: "verbe sain" }
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
    descriptionAr: "إتقان صيغة اسم الفاعل وتطبيقاتها",
    descriptionFr: "Maîtrisez le schème du participe actif",
    objectives: ["Form from Form I", "Form from derived forms", "Use as noun and adjective", "Understand temporal aspects"],
    objectivesAr: ["تكوين اسم الفاعل من الفعل الثلاثي", "تكوينه من الأفعال المزيدة", "استخدامه اسماً وصفة", "فهم الدلالات الزمنية"],
    objectivesFr: ["Former à partir de la forme I", "Former à partir des formes dérivées", "Utiliser comme nom et adjectif", "Comprendre les aspects temporels"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Form I Pattern", titleAr: "صيغة الفعل الثلاثي", titleFr: "Schème de la forme I", content: "فَاعِل pattern:\nكَتَبَ → كَاتِب (writer/writing)\nعَمِلَ → عَامِل (worker/working)\nدَرَسَ → دَارِس (student/studying)", contentAr: "صيغة فَاعِل:\nكَتَبَ → كَاتِب (الكاتب: من يكتب)\nعَمِلَ → عَامِل (العامل: من يعمل)\nدَرَسَ → دَارِس (الدارس: من يدرس)" },
        { title: "Derived Forms Pattern", titleAr: "صيغة الأفعال المزيدة", titleFr: "Schème des formes dérivées", content: "Replace يـ prefix with مُـ:\nيُعَلِّمُ → مُعَلِّم (teacher)\nيُسَافِرُ → مُسَافِر (traveler)\nيَسْتَخْدِمُ → مُسْتَخْدِم (user)", contentAr: "استبدال بادئة يـ بـ مُـ:\nيُعَلِّمُ → مُعَلِّم (المعلم)\nيُسَافِرُ → مُسَافِر (المسافر)\nيَسْتَخْدِمُ → مُسْتَخْدِم (المستخدم)" },
        { title: "Functions", titleAr: "الوظائف", titleFr: "Fonctions", content: "• As noun: الكَاتِب (the writer)\n• As adjective: رَجُلٌ عَامِلٌ (a working man)\n• Present action: أَنَا ذَاهِبٌ (I am going)", contentAr: "• كاسم: الكَاتِب (الكاتب)\n• كصفة: رَجُلٌ عَامِلٌ (رجل عامل)\n• للدلالة على الحدث الحالي: أَنَا ذَاهِبٌ (أنا ذاهب)" }
      ],
      vocabulary: [
        { arabic: "كَاتِب", transliteration: "kātib", meaning: "writer/writing", meaningAr: "من يكتب", meaningFr: "écrivain/écrivant" },
        { arabic: "قَارِئ", transliteration: "qāri'", meaning: "reader/reading", meaningAr: "من يقرأ", meaningFr: "lecteur/lisant" },
        { arabic: "سَامِع", transliteration: "sāmi'", meaning: "listener/listening", meaningAr: "من يسمع", meaningFr: "auditeur/écoutant" },
        { arabic: "مُدَرِّس", transliteration: "mudarris", meaning: "teacher", meaningAr: "من يدرس الطلاب", meaningFr: "enseignant" },
        { arabic: "مُسْتَمِع", transliteration: "mustami'", meaning: "listener (form VIII)", meaningAr: "من يستمع (من الفعل المزيد)", meaningFr: "auditeur (forme VIII)" }
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
    descriptionAr: "إتقان صيغة اسم المفعول وتطبيقاتها",
    descriptionFr: "Maîtrisez le schème du participe passif",
    objectives: ["Form from Form I", "Form from derived forms", "Distinguish from active", "Use in descriptions"],
    objectivesAr: ["تكوين اسم المفعول من الفعل الثلاثي", "تكوينه من الأفعال المزيدة", "التمييز بينه وبين اسم الفاعل", "استخدامه في الأوصاف"],
    objectivesFr: ["Former à partir de la forme I", "Former à partir des formes dérivées", "Distinguer de l'actif", "Utiliser dans les descriptions"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Form I Pattern", titleAr: "صيغة الفعل الثلاثي", titleFr: "Schème de la forme I", content: "مَفْعُول pattern:\nكَتَبَ → مَكْتُوب (written)\nعَمِلَ → مَعْمُول (done/made)\nفَتَحَ → مَفْتُوح (opened)", contentAr: "صيغة مَفْعُول:\nكَتَبَ → مَكْتُوب (الكتابة وقعت عليه)\nعَمِلَ → مَعْمُول (العمل وقع عليه)\nفَتَحَ → مَفْتُوح (الفتح وقع عليه)" },
        { title: "Derived Forms Pattern", titleAr: "صيغة الأفعال المزيدة", titleFr: "Schème des formes dérivées", content: "Like active but with fatha before last consonant:\nمُعَلَّم (taught) vs مُعَلِّم (teacher)\nمُسْتَخْدَم (used) vs مُسْتَخْدِم (user)", contentAr: "مثل اسم الفاعل لكن بفتح ما قبل الآخر:\nمُعَلَّم (المعلّم: ما علّمه أحد) vs مُعَلِّم (المعلم: من يعلم)\nمُسْتَخْدَم (المستخدم: ما استخدم) vs مُسْتَخْدِم (المستخدم: من يستخدم)" },
        { title: "Common Usage", titleAr: "الاستخدام الشائع", titleFr: "Utilisation courante", content: "مَكْتُوبٌ عَلَيْهِ - It is written on it (fated)\nمَمْنُوع - forbidden\nمَسْمُوح - permitted", contentAr: "مَكْتُوبٌ عَلَيْهِ - مقدر عليه\nمَمْنُوع - محظور\nمَسْمُوح - مأذون به" }
      ],
      vocabulary: [
        { arabic: "مَكْتُوب", transliteration: "maktūb", meaning: "written", meaningAr: "ما قد كتب", meaningFr: "écrit" },
        { arabic: "مَفْهُوم", transliteration: "mafhūm", meaning: "understood", meaningAr: "ما قد فهم", meaningFr: "compris" },
        { arabic: "مَعْرُوف", transliteration: "ma'rūf", meaning: "known", meaningAr: "ما قد عرف", meaningFr: "connu" },
        { arabic: "مَجْهُول", transliteration: "majhūl", meaning: "unknown", meaningAr: "ما لم يعرف", meaningFr: "inconnu" },
        { arabic: "مَشْغُول", transliteration: "mashghūl", meaning: "busy/occupied", meaningAr: "ما قد شغل بشيء", meaningFr: "occupé/affairé" }
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
    descriptionAr: "إتقان صيغ المصدر من جميع الأفعال",
    descriptionFr: "Maîtrisez les schèmes des noms verbaux",
    objectives: ["Recognize Form I patterns", "Form from derived forms", "Use in إضافة", "Replace verbs with مصدر"],
    objectivesAr: ["التعرف على صيغ الفعل الثلاثي", "تكوينها من الأفعال المزيدة", "استخدامها في الإضافة", "استبدال الأفعال بالمصدر"],
    objectivesFr: ["Reconnaître les schèmes de la forme I", "Former à partir des formes dérivées", "Utiliser dans l'إضافة", "Remplacer les verbes par مصدر"],
    estimatedTime: 55, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "Form I Patterns", titleAr: "صيغ الفعل الثلاثي", titleFr: "Schèmes de la forme I", content: "Many patterns exist:\nفَعْل: ضَرْب، فَتْح\nفِعَال: قِتَال، جِهَاد\nفُعُول: دُخُول، خُرُوج\nفَعَال: ذَهَاب، سَفَر", contentAr: "صيغ متعددة:\nفَعْل: ضَرْب (الضرب)، فَتْح (الفتح)\nفِعَال: قِتَال (القتال)، جِهَاد (الجهاد)\nفُعُول: دُخُول (الدخول)، خُرُوج (الخروج)\nفَعَال: ذَهَاب (الذهاب)، سَفَر (السفر)" },
        { title: "Derived Form Patterns", titleAr: "صيغ الأفعال المزيدة", titleFr: "Schèmes des formes dérivées", content: "II: تَفْعِيل - تَعْلِيم\nIII: مُفَاعَلَة - مُسَاعَدَة\nIV: إِفْعَال - إِرْسَال\nV: تَفَعُّل - تَعَلُّم\nVI: تَفَاعُل - تَعَاوُن\nVII: اِنْفِعَال - اِنْكِسَار\nVIII: اِفْتِعَال - اِجْتِمَاع\nX: اِسْتِفْعَال - اِسْتِخْدَام", contentAr: "II: تَفْعِيل - تَعْلِيم (التعليم)\nIII: مُفَاعَلَة - مُسَاعَدَة (المساعدة)\nIV: إِفْعَال - إِرْسَال (الإرسال)\nV: تَفَعُّل - تَعَلُّم (التعلم)\nVI: تَفَاعُل - تَعَاوُن (التعاون)\nVII: اِنْفِعَال - اِنْكِسَار (الانكسار)\nVIII: اِفْتِعَال - اِجْتِمَاع (الاجتماع)\nX: اِسْتِفْعَال - اِسْتِخْدَام (الاستخدام)" },
        { title: "Usage", titleAr: "الاستخدام", titleFr: "Utilisation", content: "قِرَاءَةُ الكُتُبِ مُفِيدَةٌ\nReading books is beneficial\n(مصدر as subject of nominal sentence)", contentAr: "قِرَاءَةُ الكُتُبِ مُفِيدَةٌ\nقراءة الكتب مفيدة\n(المصدر كمبتدأ في الجملة الاسمية)" }
      ],
      vocabulary: [
        { arabic: "قِرَاءَة", transliteration: "qirā'a", meaning: "reading", meaningAr: "الفعل: قَرَأَ", meaningFr: "lecture" },
        { arabic: "كِتَابَة", transliteration: "kitāba", meaning: "writing", meaningAr: "الفعل: كَتَبَ", meaningFr: "écriture" },
        { arabic: "تَعْلِيم", transliteration: "ta'līm", meaning: "teaching", meaningAr: "الفعل: عَلَّمَ", meaningFr: "enseignement" },
        { arabic: "اِسْتِخْدَام", transliteration: "istikhdām", meaning: "use/usage", meaningAr: "الفعل: اسْتَخْدَمَ", meaningFr: "utilisation" },
        { arabic: "تَعَاوُن", transliteration: "ta'āwun", meaning: "cooperation", meaningAr: "الفعل: تَعَاوَنَ", meaningFr: "coopération" }
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
    descriptionAr: "تعلم صيغ أسماء المكان والزمان",
    descriptionFr: "Apprenez les schèmes des noms de lieu et de temps",
    objectives: ["Form مَفْعَل and مَفْعِل patterns", "Distinguish place from time", "Use in descriptions", "Recognize in texts"],
    objectivesAr: ["تكوين صيغة مَفْعَل ومَفْعِل", "التمييز بين اسم المكان واسم الزمان", "استخدامهما في الأوصاف", "التعرف عليهما في النصوص"],
    objectivesFr: ["Former les schèmes مَفْعَل et مَفْعِل", "Distinguer le lieu du temps", "Utiliser dans les descriptions", "Les reconnaître dans les textes"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Pattern", titleAr: "الصيغة", titleFr: "Schème", content: "مَفْعَل or مَفْعِل (depends on verb form):\nلَعِبَ → مَلْعَب (playground)\nجَلَسَ → مَجْلِس (sitting place/council)\nدَخَلَ → مَدْخَل (entrance)", contentAr: "مَفْعَل أو مَفْعِل:\nلَعِبَ → مَلْعَب (مكان اللعب)\nجَلَسَ → مَجْلِس (مكان الجلوس/مجلس)\nدَخَلَ → مَدْخَل (مكان الدخول)" },
        { title: "Time Usage", titleAr: "استخدام اسم الزمان", titleFr: "Utilisation pour le temps", content: "Same pattern for time:\nوُلِدَ → مَوْلِد (birthday/birthplace)\nغَرَبَ → مَغْرِب (sunset/west)\nطَلَعَ → مَطْلَع (sunrise)", contentAr: "نفس الصيغة للزمان:\nوُلِدَ → مَوْلِد (زمن/مكان الولادة)\nغَرَبَ → مَغْرِب (وقت الغروب)\nطَلَعَ → مَطْلَع (وقت الطلوع)" },
        { title: "Common Examples", titleAr: "أمثلة شائعة", titleFr: "Exemples courants", content: "مَكْتَب - office\nمَدْرَسَة - school\nمَطْبَخ - kitchen\nمَسْجِد - mosque", contentAr: "مَكْتَب - مكتب العمل\nمَدْرَسَة - مكان الدراسة\nمَطْبَخ - مكان الطهي\nمَسْجِد - مكان السجود" }
      ],
      vocabulary: [
        { arabic: "مَلْعَب", transliteration: "mal'ab", meaning: "playground/stadium", meaningAr: "مكان اللعب", meaningFr: "terrain de jeu/stade" },
        { arabic: "مَكْتَبَة", transliteration: "maktaba", meaning: "library", meaningAr: "مكان الكتب", meaningFr: "bibliothèque" },
        { arabic: "مَطَار", transliteration: "maṭār", meaning: "airport", meaningAr: "مكان الطيران", meaningFr: "aéroport" },
        { arabic: "مَوْقِف", transliteration: "mawqif", meaning: "parking/position", meaningAr: "مكان الوقوف", meaningFr: "parking/position" },
        { arabic: "مَخْرَج", transliteration: "makhraj", meaning: "exit", meaningAr: "مكان الخروج", meaningFr: "sortie" }
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
    descriptionAr: "تعلم صيغ أسماء الآلة والمستحدثة",
    descriptionFr: "Apprenez les schèmes des noms d'instrument",
    objectives: ["Form مِفْعَل, مِفْعَال, مِفْعَلَة patterns", "Use instrument nouns", "Expand vocabulary", "Recognize in modern Arabic"],
    objectivesAr: ["تكوين صيغ مِفْعَل، مِفْعَال، مِفْعَلَة", "استخدام أسماء الآلة", "توسيع المفردات", "التعرف عليها في العربية الحديثة"],
    objectivesFr: ["Former les schèmes مِفْعَل, مِفْعَال, مِفْعَلَة", "Utiliser les noms d'instrument", "Élargir le vocabulaire", "Les reconnaître en arabe moderne"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Classical Patterns", titleAr: "الصيغ الكلاسيكية", titleFr: "Schèmes classiques", content: "مِفْعَل: مِفْتَاح (key), مِصْبَاح (lamp)\nمِفْعَال: مِنْشَار (saw), مِفْتَاح (key)\nمِفْعَلَة: مِكْنَسَة (broom), مِطْرَقَة (hammer)", contentAr: "مِفْعَل: مِفْتَاح (المفتاح)، مِصْبَاح (المصباح)\nمِفْعَال: مِنْشَار (المنشار)، مِعْشَار (الأداة)\nمِفْعَلَة: مِكْنَسَة (المكنسة)، مِطْرَقَة (المطرقة)" },
        { title: "Modern Coinages", titleAr: "الصيغ المستحدثة", titleFr: "Néologismes modernes", content: "Arabic creates new instrument nouns:\nحَسَبَ → حَاسُوب (computer)\nبَرَدَ → ثَلَّاجَة (refrigerator)\nغَسَلَ → غَسَّالَة (washing machine)", contentAr: "اللغة العربية تخلق صيغاً جديدة:\nحَسَبَ → حَاسُوب (الحاسوب)\nبَرَدَ → ثَلَّاجَة (الثلاجة)\nغَسَلَ → غَسَّالَة (غسالة الملابس)" },
        { title: "فَعَّالَة Pattern", titleAr: "صيغة فَعَّالَة", titleFr: "Schème فَعَّالَة", content: "Modern machines often use فَعَّالَة:\nثَلَّاجَة - refrigerator\nغَسَّالَة - washing machine\nسَيَّارَة - car (thing that moves)", contentAr: "الآلات الحديثة غالباً تستخدم صيغة فَعَّالَة:\nثَلَّاجَة - الثلاجة\nغَسَّالَة - غسالة الملابس\nسَيَّارَة - السيارة (ما يتحرك)" }
      ],
      vocabulary: [
        { arabic: "مِفْتَاح", transliteration: "miftāḥ", meaning: "key", meaningAr: "الأداة التي تفتح الأقفال", meaningFr: "clé" },
        { arabic: "مِقَصّ", transliteration: "miqaṣṣ", meaning: "scissors", meaningAr: "أداة القص", meaningFr: "ciseaux" },
        { arabic: "مِكْوَاة", transliteration: "mikwā", meaning: "iron (clothes)", meaningAr: "أداة الكي", meaningFr: "fer (à repasser)" },
        { arabic: "حَاسُوب", transliteration: "ḥāsūb", meaning: "computer", meaningAr: "الجهاز الآلي الحاسب", meaningFr: "ordinateur" },
        { arabic: "هَاتِف", transliteration: "hātif", meaning: "telephone", meaningAr: "جهاز الاتصال", meaningFr: "téléphone" }
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
    descriptionAr: "تعلم صيغ التصغير والمبالغة",
    descriptionFr: "Apprenez les schèmes du diminutif et de l'intensif",
    objectives: ["Form diminutives", "Use intensive adjective patterns", "Express nuance", "Recognize in literature"],
    objectivesAr: ["تكوين صيغة التصغير", "استخدام صيغ المبالغة والصفة المشبهة", "التعبير عن الدلالات المختلفة", "التعرف عليها في الأدب"],
    objectivesFr: ["Former des diminutifs", "Utiliser les schèmes d'adjectifs intensifs", "Exprimer des nuances", "Les reconnaître dans la littérature"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Diminutive (تصغير)", titleAr: "صيغة التصغير", titleFr: "Diminutif (تصغير)", content: "Pattern: فُعَيْل\nكِتَاب → كُتَيِّب (booklet)\nكَلْب → كُلَيْب (puppy)\nبَيْت → بُيَيْت (small house)", contentAr: "صيغة فُعَيْل:\nكِتَاب → كُتَيِّب (الكتيب)\nكَلْب → كُلَيْب (الجراء)\nبَيْت → بُيَيْت (بيت صغير)" },
        { title: "Intensive Adjectives", titleAr: "صيغ المبالغة", titleFr: "Adjectifs intensifs", content: "Patterns for extreme qualities:\nفَعَّال: كَذَّاب (big liar)\nفَعِيل: عَلِيم (very knowledgeable)\nفَعُول: صَبُور (very patient)\nمِفْعَال: مِهْذَار (very talkative)", contentAr: "صيغ للدلالة على المبالغة:\nفَعَّال: كَذَّاب (كذاب كثير)\nفَعِيل: عَلِيم (عالم جداً)\nفَعُول: صَبُور (صابر جداً)\nمِفْعَال: مِهْذَار (ثرثار جداً)" },
        { title: "Usage", titleAr: "الاستخدام", titleFr: "Utilisation", content: "Express affection: يَا بُنَيّ (O my little son)\nExpress extremity: هُوَ أَكُول - He eats a lot", contentAr: "التعبير عن الحنان: يَا بُنَيّ (يا بني الصغير)\nالتعبير عن الشدة: هُوَ أَكُول - إنه يأكل كثيراً" }
      ],
      vocabulary: [
        { arabic: "بُنَيّ", transliteration: "bunayy", meaning: "little son", meaningAr: "الابن الصغير (بنوة)", meaningFr: "petit fils" },
        { arabic: "عَلَّامَة", transliteration: "'allāma", meaning: "great scholar", meaningAr: "عالم كبير جداً", meaningFr: "grand savant" },
        { arabic: "فَهَّامَة", transliteration: "fahhāma", meaning: "very understanding", meaningAr: "فاهم جداً (مبالغة)", meaningFr: "très compréhensif" },
        { arabic: "صَبُور", transliteration: "ṣabūr", meaning: "very patient", meaningAr: "صابر جداً", meaningFr: "très patient" },
        { arabic: "شَكُور", transliteration: "shakūr", meaning: "very thankful", meaningAr: "شاكر جداً", meaningFr: "très reconnaissant" }
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
    descriptionAr: "مدخل شامل للشعر العربي الكلاسيكي",
    descriptionFr: "Introduction à la poésie arabe classique",
    objectives: ["Understand poetic structure", "Learn basic meters", "Analyze rhyme schemes", "Appreciate classical poetry"],
    objectivesAr: ["فهم البناء الشعري والبيت والقصيدة", "تعلم البحور الشعرية الأساسية", "تحليل القافية والروي", "تقدير الشعر العربي الكلاسيكي"],
    objectivesFr: ["Comprendre la structure poétique", "Apprendre les mètres de base", "Analyser les schèmes de rime", "Apprécier la poésie classique"],
    estimatedTime: 55, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "Verse Structure", titleAr: "بناء البيت الشعري", titleFr: "Structure du vers", content: "بَيْت (verse) = صَدْر (first hemistich) + عَجُز (second hemistich)\nقَصِيدَة (poem) = multiple verses with same rhyme", contentAr: "البيت = صَدْر (الشطر الأول) + عَجُز (الشطر الثاني)\nالقصيدة = مجموعة أبيات لها قافية واحدة" },
        { title: "Rhyme (القافية)", titleAr: "القافية والروي", titleFr: "Rime (القافية)", content: "Classical poems maintain the same end rhyme throughout:\nكُلُّ بَيْتٍ يَنْتَهِي بِنَفْسِ الحَرْفِ\nRhyme letter (رَوِيّ) defines the poem", contentAr: "تحافظ القصائد الكلاسيكية على قافية واحدة:\nكل بيت ينتهي بنفس الحرف\nحرف الروي هو الحرف الأخير المتكرر" },
        { title: "Famous Poets", titleAr: "الشعراء المشهورون", titleFr: "Poètes célèbres", content: "Pre-Islamic: اِمْرُؤ القَيْس\nAbbasid: أَبُو نُوَاس، المُتَنَبِّي\nModern: أَحْمَد شَوْقِي، نِزَار قَبَّانِي", contentAr: "الجاهلي: امرؤ القيس\nالعباسي: أبو نواس والمتنبي\nالحديث: أحمد شوقي ونزار قباني" }
      ],
      vocabulary: [
        { arabic: "شِعْر", transliteration: "shi'r", meaning: "poetry", meaningAr: "الكلام الموزون المقفى", meaningFr: "poésie" },
        { arabic: "شَاعِر", transliteration: "shā'ir", meaning: "poet", meaningAr: "من ينظم الشعر", meaningFr: "poète" },
        { arabic: "قَصِيدَة", transliteration: "qaṣīda", meaning: "ode/poem", meaningAr: "قطعة من الشعر", meaningFr: "ode/poème" },
        { arabic: "بَيْت", transliteration: "bayt", meaning: "verse", meaningAr: "سطر من الشعر يتضمن الشطرين", meaningFr: "vers" },
        { arabic: "قَافِيَة", transliteration: "qāfiya", meaning: "rhyme", meaningAr: "تكرار صوت في نهاية الأبيات", meaningFr: "rime" }
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
    descriptionAr: "تعلم أساسيات علم العروض والتفاعيل",
    descriptionFr: "Apprenez les bases de la prosodie arabe",
    objectives: ["Understand the concept of بحر", "Learn common meters", "Scan simple verses", "Appreciate rhythmic patterns"],
    objectivesAr: ["فهم مفهوم البحر في الشعر", "تعلم البحور الشعرية الشائعة", "تفعيل ومجزوءة الأبيات", "تقدير الأنماط الإيقاعية"],
    objectivesFr: ["Comprendre le concept de بحر", "Apprendre les mètres courants", "Scander des vers simples", "Apprécier les schèmes rythmiques"],
    estimatedTime: 55, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "What is 'Arūḍ?", titleAr: "ما هو علم العروض؟", titleFr: "Qu'est-ce que 'Arūḍ ?", content: "The science of Arabic meters, founded by الخَلِيل بن أَحْمَد\n16 classical meters (بُحُور)\nBased on syllable patterns: فَعُولُن، فَاعِلُن، مُسْتَفْعِلُن", contentAr: "علم بناء الشعر من حيث الوزن\nأسسه الخليل بن أحمد\n16 بحراً كلاسيكياً\nيعتمد على التفاعيل الأساسية" },
        { title: "Common Meters", titleAr: "البحور الشائعة", titleFr: "Mètres courants", content: "الطَّوِيل - most common pre-Islamic\nالكَامِل - perfect/complete\nالوَافِر - abundant\nالخَفِيف - light\nالرَّجَز - simple/accessible", contentAr: "الطويل - الأكثر استخداماً في الشعر الجاهلي\nالكامل - مكتمل التفاعيل\nالوافر - وافر من التفاعيل\nالخفيف - خفيف النطق\nالرجز - بسيط وسهل" },
        { title: "Scanning Basics", titleAr: "أساسيات التفعيل", titleFr: "Bases du scansion", content: "Count syllables: تَنْ (short) + تَانْ (long)\nMap to metric feet\nIdentify the بَحْر", contentAr: "عد المقاطع: قصيرة + طويلة\nطبق على التفاعيل\nحدد البحر الذي يتبعه البيت" }
      ],
      vocabulary: [
        { arabic: "عَرُوض", transliteration: "'arūḍ", meaning: "prosody", meaningAr: "علم بناء الشعر الموزون", meaningFr: "prosodie" },
        { arabic: "بَحْر", transliteration: "baḥr", meaning: "meter (lit. sea)", meaningAr: "نوع من أنواع الشعر الموزون", meaningFr: "mètre (lit. mer)" },
        { arabic: "تَفْعِيلَة", transliteration: "taf'īla", meaning: "metric foot", meaningAr: "الوحدة الأساسية في القياس", meaningFr: "pied métrique" },
        { arabic: "وَزْن", transliteration: "wazn", meaning: "weight/meter", meaningAr: "الميزان الشعري", meaningFr: "poids/mètre" },
        { arabic: "إِيقَاع", transliteration: "īqā'", meaning: "rhythm", meaningAr: "توالي الحركات والسكنات", meaningFr: "rythme" }
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
    descriptionAr: "استكشاف أساليب النثر العربي الكلاسيكي",
    descriptionFr: "Explorez les styles de prose arabe classique",
    objectives: ["Distinguish prose genres", "Analyze rhetorical devices", "Understand classical style", "Read historical texts"],
    objectivesAr: ["التمييز بين أنواع النثر", "تحليل الأساليب البلاغية", "فهم الأسلوب الكلاسيكي", "قراءة النصوص التاريخية"],
    objectivesFr: ["Distinguer les genres de prose", "Analyser les figures rhétoriques", "Comprendre le style classique", "Lire les textes historiques"],
    estimatedTime: 55, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "Prose Genres", titleAr: "أنواع النثر", titleFr: "Genres de prose", content: "خُطْبَة - sermon/speech\nرِسَالَة - epistle\nمَقَامَة - literary assembly\nسِيرَة - biography\nتَارِيخ - history", contentAr: "خُطْبَة - الكلام الموجه للجماهير\nرِسَالَة - الكتاب الموجه للفرد\nمَقَامَة - فن أدبي قصصي\nسِيرَة - السيرة الذاتية أو الحياة\nتَارِيخ - سجل الأحداث الماضية" },
        { title: "Rhetorical Devices", titleAr: "الأساليب البلاغية", titleFr: "Figures rhétoriques", content: "سَجْع - rhymed prose\nطِبَاق - antithesis\nجِنَاس - paronomasia\nاِسْتِعَارَة - metaphor", contentAr: "سَجْع - تشابه الأصوات في نهاية الفقرات\nطِبَاق - الجمع بين الضدين\nجِنَاس - تكرار الحروف بطرق مختلفة\nاِسْتِعَارَة - استخدام اللفظ بمعنى غير حقيقي" },
        { title: "Famous Prose Writers", titleAr: "كتاب النثر المشهورون", titleFr: "Prosateurs célèbres", content: "الجَاحِظ - master of أَدَب\nاِبْن المُقَفَّع - translator, stylist\nالهَمَذَانِي - inventor of مَقَامَة", contentAr: "الجاحظ - عالم البيان والأدب\nابن المقفع - المترجم والأديب\nالهمذاني - مبتكر فن المقامة" }
      ],
      vocabulary: [
        { arabic: "نَثْر", transliteration: "nathr", meaning: "prose", meaningAr: "الكلام غير الموزون", meaningFr: "prose" },
        { arabic: "سَجْع", transliteration: "saj'", meaning: "rhymed prose", meaningAr: "النثر المسجوع", meaningFr: "prose rimée" },
        { arabic: "بَلَاغَة", transliteration: "balāgha", meaning: "rhetoric", meaningAr: "علم إيصال المعنى بأحسن طريقة", meaningFr: "rhétorique" },
        { arabic: "فَصَاحَة", transliteration: "faṣāḥa", meaning: "eloquence", meaningAr: "جودة الأسلوب والنطق", meaningFr: "éloquence" },
        { arabic: "أُسْلُوب", transliteration: "uslūb", meaning: "style", meaningAr: "طريقة الكتابة أو النطق", meaningFr: "style" }
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
    descriptionAr: "استكشاف الحركات الأدبية العربية الحديثة",
    descriptionFr: "Explorez les mouvements littéraires arabes modernes",
    objectives: ["Understand النهضة literary renaissance", "Know major modern authors", "Read contemporary texts", "Analyze modern themes"],
    objectivesAr: ["فهم النهضة الأدبية والثقافية", "معرفة الأدباء العرب البارزين", "قراءة النصوص الحديثة المعاصرة", "تحليل الموضوعات الحديثة"],
    objectivesFr: ["Comprendre la النهضة littéraire", "Connaître les auteurs modernes majeurs", "Lire les textes contemporains", "Analyser les thèmes modernes"],
    estimatedTime: 55, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "النهضة (Renaissance)", titleAr: "عصر النهضة والحداثة", titleFr: "النهضة (Renaissance)", content: "19th century revival:\n• Contact with West\n• Printing press impact\n• New genres: novel, short story, drama", contentAr: "احياء الأدب في القرن التاسع عشر:\n• التواصل مع الحضارة الغربية\n• تأثير الطباعة والنشر\n• ظهور فنون أدبية جديدة" },
        { title: "Major Authors", titleAr: "الأدباء والكتاب المشهورون", titleFr: "Auteurs majeurs", content: "نَجِيب مَحْفُوظ - Nobel laureate, Cairo Trilogy\nتَوْفِيق الحَكِيم - drama\nجُبْرَان خَلِيل جُبْرَان - poetic prose\nمَحْمُود دَرْوِيش - poetry of exile", contentAr: "نجيب محفوظ - صاحب جائزة نوبل والثلاثية\nتوفيق الحكيم - رائد المسرح الفكري\nجبران خليل جبران - أديب الثورة الروحية\nمحمود درويش - شاعر الأرض والتراب" },
        { title: "Modern Themes", titleAr: "الموضوعات الحديثة", titleFr: "Thèmes modernes", content: "Identity and post-colonialism\nUrbanization and social change\nWomen's rights\nPalestinian cause", contentAr: "الهوية والاستقلال الثقافي\nالتحضر والتغيير الاجتماعي\nحقوق المرأة والتحرر\nالقضية الفلسطينية" }
      ],
      vocabulary: [
        { arabic: "أَدَب", transliteration: "adab", meaning: "literature", meaningAr: "الإنتاج الفكري والفني", meaningFr: "littérature" },
        { arabic: "رِوَايَة", transliteration: "riwāya", meaning: "novel", meaningAr: "قصة طويلة", meaningFr: "roman" },
        { arabic: "قِصَّة قَصِيرَة", transliteration: "qiṣṣa qaṣīra", meaning: "short story", meaningAr: "قصة قليلة الحجم", meaningFr: "nouvelle" },
        { arabic: "مَسْرَح", transliteration: "masraḥ", meaning: "theater", meaningAr: "فن الدراما والتمثيل", meaningFr: "théâtre" },
        { arabic: "نَهْضَة", transliteration: "nahḍa", meaning: "renaissance", meaningAr: "إحياء الحضارة والفكر", meaningFr: "renaissance" }
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
    descriptionAr: "مدخل لأساليب النصوص القرآنية والكلاسيكية",
    descriptionFr: "Introduction aux styles des textes coraniques et classiques",
    objectives: ["Recognize Quranic style", "Understand classical grammar", "Read with tajweed awareness", "Appreciate linguistic beauty"],
    objectivesAr: ["التعرف على أسلوب القرآن الكريم", "فهم النحو الكلاسيكي المتقدم", "القراءة مع الوعي بقواعد التجويد", "تقدير الجمال اللغوي"],
    objectivesFr: ["Reconnaître le style coranique", "Comprendre la grammaire classique", "Lire avec conscience du tajweed", "Apprécier la beauté linguistique"],
    estimatedTime: 55, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "Quranic Arabic", titleAr: "اللغة القرآنية", titleFr: "L'arabe coranique", content: "Classical but accessible style\nUnique grammatical constructions\nRhythmic prose (not poetry)\nFoundation of فُصْحَى", contentAr: "أسلوب كلاسيكي ولكنه واضح سهل\nتراكيب نحوية فريدة\nنثر موزون وليس شعراً\nأساس اللغة الفصحى الحديثة" },
        { title: "Special Features", titleAr: "الخصائص المميزة", titleFr: "Caractéristiques spéciales", content: "Rare vocabulary: words with specific Quranic meanings\nOath formulas: وَالفَجْرِ، وَالشَّمْسِ\nStory patterns: قَصَص القُرْآن", contentAr: "ألفاظ نادرة وذات دلالات قرآنية خاصة\nأسلوب الأيمان والحلف\nقصص قرآنية متكررة بأسلوب موحد" },
        { title: "Approaching Classical Texts", titleAr: "قراءة النصوص الكلاسيكية", titleFr: "Approcher les textes classiques", content: "• Use تَفْسِير (commentary)\n• Learn إِعْرَاب (parsing)\n• Study بَلَاغَة (rhetoric)", contentAr: "• استخدام التفسير وشرح المعاني\n• تعلم الإعراب والتحليل النحوي\n• دراسة البلاغة والأساليب" }
      ],
      vocabulary: [
        { arabic: "قُرْآن", transliteration: "qur'ān", meaning: "Quran", meaningAr: "كلام الله المنزل على محمد", meaningFr: "Coran" },
        { arabic: "آيَة", transliteration: "āya", meaning: "verse/sign", meaningAr: "علامة أو دليل، أو جزء من السورة", meaningFr: "verset/signe" },
        { arabic: "سُورَة", transliteration: "sūra", meaning: "chapter", meaningAr: "كل قسم من أقسام القرآن", meaningFr: "chapitre" },
        { arabic: "تَفْسِير", transliteration: "tafsīr", meaning: "interpretation", meaningAr: "شرح معاني القرآن الكريم", meaningFr: "interprétation" },
        { arabic: "تَجْوِيد", transliteration: "tajwīd", meaning: "recitation rules", meaningAr: "قواعد نطق القرآن الصحيح", meaningFr: "règles de récitation" }
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
    descriptionAr: "تطوير مهارات تحليل النصوص العربية الأدبية",
    descriptionFr: "Développez vos compétences d'analyse des textes arabes",
    objectives: ["Analyze structure and theme", "Identify literary devices", "Write critical responses", "Compare texts"],
    objectivesAr: ["تحليل البناء والموضوع", "التعرف على الأساليب البلاغية", "كتابة التقييمات النقدية", "مقارنة النصوص المختلفة"],
    objectivesFr: ["Analyser la structure et le thème", "Identifier les figures littéraires", "Écrire des réponses critiques", "Comparer des textes"],
    estimatedTime: 55, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "Analysis Framework", titleAr: "إطار التحليل", titleFr: "Cadre d'analyse", content: "المَوْضُوع - Theme\nالأُسْلُوب - Style\nاللُّغَة - Language\nالصُّوَر - Imagery\nالبِنَاء - Structure", contentAr: "الموضوع - الفكرة الرئيسية\nالأسلوب - طريقة الكاتب\nاللغة - اختيار الألفاظ\nالصور البيانية - التشبيهات والاستعارات\nالبناء - تنظيم النص" },
        { title: "Literary Devices", titleAr: "الأساليب البلاغية", titleFr: "Figures littéraires", content: "تَشْبِيه - simile\nاِسْتِعَارَة - metaphor\nكِنَايَة - metonymy\nمَجَاز - figurative language", contentAr: "تشبيه - مقارنة واضحة\nاستعارة - استخدام مجازي\nكناية - التعبير بطريقة غير مباشرة\nمجاز - استخدام غير حقيقي" },
        { title: "Critical Vocabulary", titleAr: "المفردات النقدية", titleFr: "Vocabulaire critique", content: "يُعَبِّرُ عَن - expresses\nيُصَوِّرُ - depicts\nيَرْمُزُ إِلَى - symbolizes\nيُوحِي بِـ - suggests", contentAr: "يعبر عن - يفصح\nيصور - يرسم صورة\nيرمز إلى - يشير برمز\nيوحي بـ - يلمح إلى" }
      ],
      vocabulary: [
        { arabic: "تَحْلِيل", transliteration: "taḥlīl", meaning: "analysis", meaningAr: "تفكيك وتحطيم للأجزاء", meaningFr: "analyse" },
        { arabic: "نَقْد أَدَبِيّ", transliteration: "naqd adabī", meaning: "literary criticism", meaningAr: "تقييم الأعمال الأدبية", meaningFr: "critique littéraire" },
        { arabic: "تَفْسِير", transliteration: "tafsīr", meaning: "interpretation", meaningAr: "شرح المعاني", meaningFr: "interprétation" },
        { arabic: "مَعْنَى", transliteration: "ma'nā", meaning: "meaning", meaningAr: "الدلالة والمقصد", meaningFr: "sens" },
        { arabic: "رَمْز", transliteration: "ramz", meaning: "symbol", meaningAr: "علامة أو إشارة", meaningFr: "symbole" }
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
    descriptionAr: "إتقان لغة الأخبار والنصوص الصحفية",
    descriptionFr: "Maîtrisez le langage et les conventions de l'arabe journalistique",
    objectives: ["Understand news structure", "Learn journalistic vocabulary", "Read Arabic newspapers", "Watch Arabic news"],
    objectivesAr: ["فهم بناء الخبر الصحفي", "تعلم المفردات الصحفية", "قراءة الصحف العربية", "مشاهدة نشرات الأخبار"],
    objectivesFr: ["Comprendre la structure des nouvelles", "Apprendre le vocabulaire journalistique", "Lire les journaux arabes", "Regarder les actualités arabes"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "News Structure", titleAr: "بناء الخبر الصحفي", titleFr: "Structure des nouvelles", content: "مَنْ؟ مَاذَا؟ مَتَى؟ أَيْنَ؟ لِمَاذَا؟ كَيْفَ؟\nWho? What? When? Where? Why? How?\nLead (مُقَدِّمَة) answers key questions", contentAr: "من؟ ماذا؟ متى؟ أين؟ لماذا؟ كيف؟\nالمقدمة الخبرية تجيب على أهم الأسئلة\nثم التفاصيل والمعلومات الإضافية" },
        { title: "News Vocabulary", titleAr: "المفردات الصحفية", titleFr: "Vocabulaire journalistique", content: "أَعْلَنَ - announced\nصَرَّحَ - declared\nأَفَادَ - reported\nكَشَفَ - revealed\nنَفَى - denied", contentAr: "أعلن - أصدر بياناً\nصرح - أدلى بتصريح\nأفاد - نقل خبراً\nكشف - أظهر\nنفى - أنكر" },
        { title: "News Sources", titleAr: "مصادر الأخبار", titleFr: "Sources d'information", content: "Major channels: الجَزِيرَة، العَرَبِيَّة، BBC عَرَبِي\nNewspapers: الأَهْرَام، الشَّرْق الأَوْسَط", contentAr: "القنوات الرئيسية: الجزيرة والعربية وBBC عربي\nالصحف: الأهرام والشرق الأوسط والحياة" }
      ],
      vocabulary: [
        { arabic: "مُرَاسِل", transliteration: "murāsil", meaning: "correspondent", meaningAr: "صحفي يرسل الأخبار من الميدان", meaningFr: "correspondant" },
        { arabic: "تَقْرِير", transliteration: "taqrīr", meaning: "report", meaningAr: "خبر مفصل", meaningFr: "rapport" },
        { arabic: "عَاجِل", transliteration: "'ājil", meaning: "breaking/urgent", meaningAr: "خبر طارئ مستعجل", meaningFr: "urgent" },
        { arabic: "مَصَادِر", transliteration: "maṣādir", meaning: "sources", meaningAr: "منابع المعلومات", meaningFr: "sources" },
        { arabic: "نَاطِق رَسْمِيّ", transliteration: "nāṭiq rasmī", meaning: "official spokesperson", meaningAr: "متحدث باسم الجهة الرسمية", meaningFr: "porte-parole officiel" }
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
    descriptionAr: "تعلم المفردات والخطاب السياسي",
    descriptionFr: "Apprenez le vocabulaire et le discours politiques",
    objectives: ["Understand political systems", "Learn diplomatic language", "Discuss current events", "Analyze political speech"],
    objectivesAr: ["فهم الأنظمة السياسية", "تعلم اللغة الدبلوماسية", "مناقشة الأحداث الجارية", "تحليل الخطاب السياسي"],
    objectivesFr: ["Comprendre les systèmes politiques", "Apprendre le langage diplomatique", "Discuter des événements actuels", "Analyser les discours politiques"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Government Terms", titleAr: "المصطلحات الحكومية", titleFr: "Termes gouvernementaux", content: "حُكُومَة - government\nبَرْلَمَان - parliament\nرَئِيس - president\nوَزِير - minister\nاِنْتِخَابَات - elections", contentAr: "حكومة - السلطة التنفيذية\nبرلمان - مجلس التشريع\nرئيس - قائد الدولة\nوزير - مسؤول حكومي\nانتخابات - عملية اختيار الممثلين" },
        { title: "Diplomatic Language", titleAr: "اللغة الدبلوماسية", titleFr: "Langage diplomatique", content: "عَلَاقَات دِبْلُومَاسِيَّة - diplomatic relations\nمُفَاوَضَات - negotiations\nاِتِّفَاقِيَّة - agreement\nمُعَاهَدَة - treaty", contentAr: "علاقات دبلوماسية - العلاقات الرسمية\nمفاوضات - نقاشات تجاه اتفاق\nاتفاقية - عقد ملزم\nمعاهدة - عقد دولي" },
        { title: "International Organizations", titleAr: "المنظمات الدولية", titleFr: "Organisations internationales", content: "الأُمَم المُتَّحِدَة - United Nations\nجَامِعَة الدُّوَل العَرَبِيَّة - Arab League\nمَجْلِس الأَمْن - Security Council", contentAr: "الأمم المتحدة - منظمة عالمية\nجامعة الدول العربية - اتحاد عربي\nمجلس الأمن - مجلس الأمن الدولي" }
      ],
      vocabulary: [
        { arabic: "سِيَاسَة", transliteration: "siyāsa", meaning: "politics/policy", meaningAr: "إدارة الدولة والحكم", meaningFr: "politique/politique" },
        { arabic: "دِيمُقْرَاطِيَّة", transliteration: "dīmuqrāṭiyya", meaning: "democracy", meaningAr: "حكم الشعب", meaningFr: "démocratie" },
        { arabic: "سِيَادَة", transliteration: "siyāda", meaning: "sovereignty", meaningAr: "السلطة العليا للدولة", meaningFr: "souveraineté" },
        { arabic: "مُوَاطِن", transliteration: "muwāṭin", meaning: "citizen", meaningAr: "شخص من سكان الدولة", meaningFr: "citoyen" },
        { arabic: "حُقُوق الإِنْسَان", transliteration: "ḥuqūq al-insān", meaning: "human rights", meaningAr: "الحقوق الأساسية للفرد", meaningFr: "droits de l'homme" }
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
    descriptionAr: "تعلم المفردات الاقتصادية والتجارية",
    descriptionFr: "Apprenez le vocabulaire économique et commercial",
    objectives: ["Understand economic terms", "Read financial news", "Discuss business topics", "Use commercial vocabulary"],
    objectivesAr: ["فهم المصطلحات الاقتصادية", "قراءة الأخبار المالية", "مناقشة المواضيع التجارية", "استخدام المفردات التجارية"],
    objectivesFr: ["Comprendre les termes économiques", "Lire les actualités financières", "Discuter de sujets commerciaux", "Utiliser le vocabulaire commercial"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Economic Terms", titleAr: "المصطلحات الاقتصادية", titleFr: "Termes économiques", content: "اِقْتِصَاد - economy\nنَاتِج مَحَلِّيّ - GDP\nتَضَخُّم - inflation\nبَطَالَة - unemployment\nاِسْتِثْمَار - investment", contentAr: "اقتصاد - نظام الإنتاج والاستهلاك\nالناتج المحلي - الإنتاج الوطني الإجمالي\nتضخم - ارتفاع الأسعار\nبطالة - عدم وجود عمل\nاستثمار - وضع المال في مشروع" },
        { title: "Business Vocabulary", titleAr: "المفردات التجارية", titleFr: "Vocabulaire commercial", content: "شَرِكَة - company\nسُوق - market\nتِجَارَة - trade\nصَادِرَات - exports\nوَارِدَات - imports", contentAr: "شركة - مؤسسة تجارية\nسوق - مكان التبادل\nتجارة - تبادل السلع\nصادرات - بضائع للخارج\nواردات - بضائع من الخارج" },
        { title: "Financial Terms", titleAr: "المصطلحات المالية", titleFr: "Termes financiers", content: "بَنْك - bank\nقَرْض - loan\nفَائِدَة - interest\nأَسْهُم - stocks\nعُمْلَة - currency", contentAr: "بنك - مؤسسة مالية\nقرض - مال مستعار\nفائدة - نسبة إضافية\nأسهم - حصص من الشركة\nعملة - نقد الدولة" }
      ],
      vocabulary: [
        { arabic: "اِقْتِصَادِيّ", transliteration: "iqtiṣādī", meaning: "economic", meaningAr: "متعلق بالاقتصاد", meaningFr: "économique" },
        { arabic: "رَأْس مَال", transliteration: "ra's māl", meaning: "capital", meaningAr: "الأموال والموارد", meaningFr: "capital" },
        { arabic: "رِبْح", transliteration: "ribḥ", meaning: "profit", meaningAr: "الكسب من التجارة", meaningFr: "bénéfice" },
        { arabic: "خَسَارَة", transliteration: "khasāra", meaning: "loss", meaningAr: "النقص في الأموال", meaningFr: "perte" },
        { arabic: "مِيزَانِيَّة", transliteration: "mīzāniyya", meaning: "budget", meaningAr: "التخطيط المالي", meaningFr: "budget" }
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
    descriptionAr: "مقدمة إلى المصطلحات القانونية العربية",
    descriptionFr: "Introduction à la terminologie juridique arabe",
    objectives: ["Understand legal concepts", "Read contracts", "Learn court vocabulary", "Use formal legal language"],
    objectivesAr: ["فهم المفاهيم القانونية", "قراءة العقود والوثائق", "تعلم مفردات المحاكم", "استخدام اللغة القانونية الفصحى"],
    objectivesFr: ["Comprendre les concepts juridiques", "Lire les contrats", "Apprendre le vocabulaire judiciaire", "Utiliser le langage juridique formel"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Legal System", titleAr: "النظام القانوني", titleFr: "Système juridique", content: "قَانُون - law\nدُسْتُور - constitution\nمَحْكَمَة - court\nقَاضٍ - judge\nمُحَامٍ - lawyer", contentAr: "قانون - مجموعة القواعد\nدستور - القانون الأساسي\nمحكمة - مكان القضاء\nقاض - الحاكم بين الناس\nمحام - الدفاع عن الحقوق" },
        { title: "Legal Procedures", titleAr: "الإجراءات القانونية", titleFr: "Procédures juridiques", content: "دَعْوَى - lawsuit\nحُكْم - verdict\nاِسْتِئْنَاف - appeal\nشَهَادَة - testimony\nدَلِيل - evidence", contentAr: "دعوى - قضية أمام المحكمة\nحكم - قرار القاضي\nاستئناف - تطعن في الحكم\nشهادة - إدلاء الشاهد\nدليل - إثبات الحق" },
        { title: "Contract Language", titleAr: "لغة العقود", titleFr: "Langage du contrat", content: "عَقْد - contract\nطَرَف - party\nشُرُوط - terms\nاِلْتِزَام - obligation\nفَسْخ - annulment", contentAr: "عقد - اتفاق ملزم\nطرف - أحد المتعاقدين\nشروط - الالتزامات\nالتزام - الواجب\nفسخ - إنهاء العقد" }
      ],
      vocabulary: [
        { arabic: "قَانُونِيّ", transliteration: "qānūnī", meaning: "legal", meaningAr: "متعلق بالقانون", meaningFr: "juridique" },
        { arabic: "حَقّ", transliteration: "ḥaqq", meaning: "right", meaningAr: "الاستحقاق", meaningFr: "droit" },
        { arabic: "وَاجِب", transliteration: "wājib", meaning: "duty", meaningAr: "المسؤولية", meaningFr: "devoir" },
        { arabic: "جَرِيمَة", transliteration: "jarīma", meaning: "crime", meaningAr: "الفعل المحظور", meaningFr: "crime" },
        { arabic: "عُقُوبَة", transliteration: "'uqūba", meaning: "punishment", meaningAr: "العقاب على الجريمة", meaningFr: "punition" }
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
    descriptionAr: "إتقان الكتابة الأكاديمية والقراءة",
    descriptionFr: "Maîtrisez la lecture et l'écriture académiques",
    objectives: ["Write academic essays", "Use citation and reference", "Structure arguments", "Read scholarly articles"],
    objectivesAr: ["كتابة المقالات الأكاديمية", "استخدام الاقتباسات والمراجع", "تنظيم الحجج والبراهين", "قراءة الدراسات العلمية"],
    objectivesFr: ["Écrire des essais académiques", "Utiliser les citations et références", "Structurer les arguments", "Lire les articles savants"],
    estimatedTime: 55, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "Academic Structure", titleAr: "البنية الأكاديمية", titleFr: "Structure académique", content: "مُقَدِّمَة - Introduction\nمَنْهَجِيَّة - Methodology\nنَتَائِج - Results\nمُنَاقَشَة - Discussion\nخَاتِمَة - Conclusion", contentAr: "مقدمة - عرض المشكلة والأهداف\nمنهجية - الطريقة المستخدمة\nنتائج - ما توصل إليه البحث\nمناقشة - تفسير النتائج\nخاتمة - الملخص والتوصيات" },
        { title: "Citation Language", titleAr: "لغة الاستشهاد", titleFr: "Langage de citation", content: "وَفْقًا لِـ / حَسَبَ - according to\nكَمَا ذَكَرَ - as X mentioned\nيَرَى X أَنَّ - X believes that\nيُشِيرُ إِلَى - refers to", contentAr: "وفقاً لـ/حسب - بناءً على\nكما ذكر - كما قال\nيرى أن - يعتقد\nيشير إلى - ينوه عن" },
        { title: "Academic Vocabulary", titleAr: "المفردات الأكاديمية", titleFr: "Vocabulaire académique", content: "بَحْث - research\nدِرَاسَة - study\nنَظَرِيَّة - theory\nفَرَضِيَّة - hypothesis", contentAr: "بحث - التقصي والاستقصاء\nدراسة - البحث الموضوعي\nنظرية - شرح منطقي\nفرضية - توقع يتطلب اختباراً" }
      ],
      vocabulary: [
        { arabic: "أَكَادِيمِيّ", transliteration: "akādīmī", meaning: "academic", meaningAr: "متعلق بالدراسة الأكاديمية", meaningFr: "académique" },
        { arabic: "مَرْجِع", transliteration: "marji'", meaning: "reference", meaningAr: "مصدر المعلومات", meaningFr: "référence" },
        { arabic: "مَصْدَر", transliteration: "maṣdar", meaning: "source", meaningAr: "منبع المعلومات", meaningFr: "source" },
        { arabic: "اِقْتِبَاس", transliteration: "iqtibās", meaning: "quotation", meaningAr: "نقل بنص النص الأصلي", meaningFr: "citation" },
        { arabic: "حَاشِيَة", transliteration: "ḥāshiya", meaning: "footnote", meaningAr: "ملاحظة في أسفل الصفحة", meaningFr: "note de bas de page" }
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
    descriptionAr: "تعلم فن التقديم والعرض بطريقة احترافية",
    descriptionFr: "Apprenez à présenter professionnellement en arabe",
    objectives: ["Structure presentations", "Use transition phrases", "Handle Q&A", "Present data and arguments"],
    objectivesAr: ["تنظيم العروض التقديمية", "استخدام جمل الانتقال", "الإجابة على الأسئلة", "عرض البيانات والحجج"],
    objectivesFr: ["Structurer des présentations", "Utiliser des phrases de transition", "Gérer les questions-réponses", "Présenter des données et arguments"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Opening", titleAr: "الافتتاحية", titleFr: "Ouverture", content: "بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ - opening formula\nأَوَدُّ أَنْ أُقَدِّمَ - I would like to present\nمَوْضُوعُ حَدِيثِي اليَوْمَ - Today's topic is", contentAr: "بسم الله الرحمن الرحيم - البسملة\nأود أن أقدم - يسعدني أن أقدم\nموضوع حديثي اليوم - الموضوع الذي سأتحدث عنه" },
        { title: "Transitions", titleAr: "جمل الانتقال", titleFr: "Transitions", content: "أَوَّلًا / ثَانِيًا / أَخِيرًا\nبِالإِضَافَةِ إِلَى ذَلِكَ - in addition\nمِنْ نَاحِيَةٍ أُخْرَى - on the other hand\nفِي الخِتَام - in conclusion", contentAr: "أولاً/ثانياً/ثالثاً\nبالإضافة إلى ذلك - أيضاً\nمن ناحية أخرى - بالمقابل\nفي الختام - وأخيراً" },
        { title: "Closing", titleAr: "الخاتمة", titleFr: "Clôture", content: "شُكْرًا لِحُسْنِ اسْتِمَاعِكُم - Thank you for listening\nأَنَا مُسْتَعِدٌّ لِلأَسْئِلَة - I'm ready for questions", contentAr: "شكراً لحسن استماعكم - شكراً على اهتمامكم\nأنا مستعد للأسئلة - الآن الأسئلة والحوار" }
      ],
      vocabulary: [
        { arabic: "عَرْض تَقْدِيمِيّ", transliteration: "'arḍ taqdīmī", meaning: "presentation", meaningAr: "عرض فني وشامل", meaningFr: "présentation" },
        { arabic: "شَرِيحَة", transliteration: "sharīḥa", meaning: "slide", meaningAr: "صورة على الشاشة", meaningFr: "diapositive" },
        { arabic: "رَسْم بَيَانِيّ", transliteration: "rasm bayānī", meaning: "chart/graph", meaningAr: "رسم توضيحي", meaningFr: "graphique" },
        { arabic: "جُمْهُور", transliteration: "jumhūr", meaning: "audience", meaningAr: "المستمعون والحاضرون", meaningFr: "audience" },
        { arabic: "مُلَخَّص", transliteration: "mulakhkhaṣ", meaning: "summary", meaningAr: "ملخص الأفكار الرئيسية", meaningFr: "résumé" }
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
    descriptionAr: "فهم القيم الثقافية العربية والمجتمع",
    descriptionFr: "Comprenez les valeurs culturelles et la société arabes",
    objectives: ["Understand cultural values", "Navigate social situations", "Appreciate diversity", "Avoid cultural misunderstandings"],
    objectivesAr: ["فهم القيم الثقافية والمبادئ الأساسية", "التنقل في المواقف الاجتماعية بحكمة", "تقدير التنوع الثقافي العربي", "تجنب سوء الفهم الثقافي"],
    objectivesFr: ["Comprendre les valeurs culturelles", "Naviguer les situations sociales", "Apprécier la diversité", "Éviter les malentendus culturels"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Core Values", titleAr: "القيم الأساسية", titleFr: "Valeurs fondamentales", content: "كَرَم - generosity\nشَرَف - honor\nضِيَافَة - hospitality\nصِلَة الرَّحِم - family ties\nاِحْتِرَام - respect", contentAr: "كَرَم - الجود والسخاء في العطاء\nشَرَف - العزة والكرامة\nضِيَافَة - الاستقبال الكريم والضيافة\nصِلَة الرَّحِم - صلة القرابة والعائلة\nاِحْتِرَام - تقدير واحترام الآخرين", contentFr: "كَرَم - générosité\nشَرَف - honneur\nضِيَافَة - hospitalité\nصِلَة الرَّحِم - liens familiaux\nاِحْتِرَام - respect" },
        { title: "Social Etiquette", titleAr: "آداب اجتماعية", titleFr: "Étiquette sociale", content: "Greetings are elaborate and important\nGuest treatment is paramount\nElderly are highly respected\nFamily is central to identity", contentAr: "السلامات والتحيات معقدة ومهمة جداً\nمعاملة الضيف لها أهمية قصوى\nاحترام الكبار والعجائز عميق جداً\nالعائلة مركز الهوية والانتماء", contentFr: "Les salutations sont élaborées et importantes\nL'accueil des invités est primordial\nLes aînés sont très respectés\nLa famille est centrale à l'identité" },
        { title: "Regional Diversity", titleAr: "التنوع الإقليمي", titleFr: "Diversité régionale", content: "المَشْرِق - Levant\nالمَغْرِب - North Africa\nالخَلِيج - Gulf\nEach has distinct customs while sharing core values", contentAr: "المَشْرِق - بلاد الشام والعراق\nالمَغْرِب - شمال أفريقيا\nالخَلِيج - دول الخليج العربية\nلكل منطقة عاداتها المميزة مع مشاركة القيم الأساسية", contentFr: "المَشْرِق - Levant\nالمَغْرِب - Afrique du Nord\nالخَلِيج - Golfe\nChacun a des coutumes distinctes tout en partageant les valeurs fondamentales" }
      ],
      vocabulary: [
        { arabic: "ثَقَافَة", transliteration: "thaqāfa", meaning: "culture", meaningAr: "مجموع الفنون والعادات والمعتقدات", meaningFr: "culture" },
        { arabic: "تَقَالِيد", transliteration: "taqālīd", meaning: "traditions", meaningAr: "عادات وسلوكيات موروثة", meaningFr: "traditions" },
        { arabic: "عَادَات", transliteration: "'ādāt", meaning: "customs", meaningAr: "سلوكيات معروفة ومتكررة", meaningFr: "coutumes" },
        { arabic: "قِيَم", transliteration: "qiyam", meaning: "values", meaningAr: "المبادئ والمعايير الأخلاقية", meaningFr: "valeurs" },
        { arabic: "هُوِيَّة", transliteration: "huwiyya", meaning: "identity", meaningAr: "الخصائص التي تعرف الشخص أو المجتمع", meaningFr: "identité" }
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
    descriptionAr: "تعلم الأمثال والتعبيرات الاصطلاحية العربية",
    descriptionFr: "Apprenez les proverbes et expressions idiomatiques arabes",
    objectives: ["Understand common proverbs", "Use idioms correctly", "Appreciate wisdom literature", "Sound more natural"],
    objectivesAr: ["فهم الأمثال الشهيرة والمشهورة", "استخدام التعبيرات الاصطلاحية بشكل صحيح", "تقدير أدب الحكمة والأمثال", "الكلام بطريقة طبيعية أكثر"],
    objectivesFr: ["Comprendre les proverbes courants", "Utiliser correctement les idiomes", "Apprécier la littérature de sagesse", "Sonner plus naturel"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Common Proverbs", titleAr: "الأمثال الشهيرة", titleFr: "Proverbes courants", content: "العِلْمُ فِي الصِّغَرِ كَالنَّقْشِ فِي الحَجَرِ\nLearning in youth is like carving in stone\n\nمَنْ جَدَّ وَجَدَ\nWhoever strives, finds", contentAr: "العِلْمُ فِي الصِّغَرِ كَالنَّقْشِ فِي الحَجَرِ\nالعلم المكتسب في الصغر ثابت كالنقش على الحجر\n\nمَنْ جَدَّ وَجَدَ\nمن اجتهد وسعى، حصل على مبتغاه", contentFr: "العِلْمُ فِي الصِّغَرِ كَالنَّقْشِ فِي الحَجَرِ\nL'apprentissage dans la jeunesse est comme graver dans la pierre\n\nمَنْ جَدَّ وَجَدَ\nQuiconque s'efforce, trouve" },
        { title: "Idioms", titleAr: "التعبيرات الاصطلاحية", titleFr: "Idiomes", content: "عَلَى رَأْسِي - at your service (lit. on my head)\nفِي عَيْنِي - very dear (lit. in my eye)\nاِبْنُ البَلَد - local person, patriot", contentAr: "عَلَى رَأْسِي - تحت أمرك ورضاك (حرفياً: على رأسي)\nفِي عَيْنِي - عزيز جداً وغالي (حرفياً: في عيني)\nاِبْنُ البَلَد - شخص من السكان المحليين، وطني غيور", contentFr: "عَلَى رَأْسِي - à votre service (lit. sur ma tête)\nفِي عَيْنِي - très cher (lit. dans mon œil)\nاِبْنُ البَلَد - habitant local, patriote" },
        { title: "Expressions", titleAr: "التعابير الشائعة", titleFr: "Expressions", content: "إِنْ شَاءَ اللهُ - God willing\nمَا شَاءَ اللهُ - what God has willed (admiration)\nالحَمْدُ لِلَّهِ - praise be to God", contentAr: "إِنْ شَاءَ اللهُ - إذا أراد الله، بإذن الله\nمَا شَاءَ اللهُ - ما قدره وأراده الله (للإعجاب والتقدير)\nالحَمْدُ لِلَّهِ - الشكر والحمد لله على كل حال", contentFr: "إِنْ شَاءَ اللهُ - si Dieu le veut\nمَا شَاءَ اللهُ - ce que Dieu a voulu (admiration)\nالحَمْدُ لِلَّهِ - louanges à Dieu" }
      ],
      vocabulary: [
        { arabic: "مَثَل", transliteration: "mathal", meaning: "proverb", meaningAr: "قول موجز يحتوي على حكمة", meaningFr: "proverbe" },
        { arabic: "حِكْمَة", transliteration: "ḥikma", meaning: "wisdom", meaningAr: "الفهم العميق والتصرف الحكيم", meaningFr: "sagesse" },
        { arabic: "تَعْبِير", transliteration: "ta'bīr", meaning: "expression", meaningAr: "طريقة قول الشيء باللفظ", meaningFr: "expression" },
        { arabic: "مَجَازِيّ", transliteration: "majāzī", meaning: "figurative", meaningAr: "غير حقيقي أو مباشر، استعاري", meaningFr: "figuré" },
        { arabic: "حَرْفِيّ", transliteration: "ḥarfī", meaning: "literal", meaningAr: "طبقاً للنص والمعنى المباشر", meaningFr: "littéral" }
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
    descriptionAr: "تعلم المفردات الثقافية الإسلامية الأساسية",
    descriptionFr: "Apprenez le vocabulaire culturel islamique essentiel",
    objectives: ["Understand religious vocabulary", "Navigate cultural contexts", "Show cultural awareness", "Avoid misunderstandings"],
    objectivesAr: ["فهم المفردات والمصطلحات الدينية", "التنقل في السياقات الثقافية الإسلامية", "إظهار الوعي والاحترام الثقافي", "تجنب سوء الفهم الديني والثقافي"],
    objectivesFr: ["Comprendre le vocabulaire religieux", "Naviguer les contextes culturels", "Montrer une conscience culturelle", "Éviter les malentendus"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Daily Expressions", titleAr: "التعابير اليومية", titleFr: "Expressions quotidiennes", content: "بِسْمِ اللهِ - in God's name (starting)\nالحَمْدُ لِلَّهِ - praise God (gratitude)\nسُبْحَانَ اللهِ - glory to God (amazement)\nأَسْتَغْفِرُ اللهَ - I seek God's forgiveness", contentAr: "بِسْمِ اللهِ - باسم الله (عند البدء بشيء)\nالحَمْدُ لِلَّهِ - شكراً لله (للتعبير عن الامتنان)\nسُبْحَانَ اللهِ - تنزيه الله (للتعبير عن التعجب والدهشة)\nأَسْتَغْفِرُ اللهَ - أطلب مغفرة الله (للندم والتوبة)", contentFr: "بِسْمِ اللهِ - au nom de Dieu (commencer)\nالحَمْدُ لِلَّهِ - louer Dieu (gratitude)\nسُبْحَانَ اللهِ - gloire à Dieu (étonnement)\nأَسْتَغْفِرُ اللهَ - je demande pardon à Dieu" },
        { title: "Religious Practices", titleAr: "الممارسات الدينية", titleFr: "Pratiques religieuses", content: "صَلَاة - prayer\nصَوْم/صِيَام - fasting\nزَكَاة - charity\nحَجّ - pilgrimage", contentAr: "صَلَاة - الدعاء والاتصال بالله\nصَوْم/صِيَام - الامتناع عن الطعام والشراب\nزَكَاة - الصدقة والمساعدة للفقراء\nحَجّ - الحج إلى مكة المكرمة", contentFr: "صَلَاة - prière\nصَوْم/صِيَام - jeûne\nزَكَاة - aumône\nحَجّ - pèlerinage" },
        { title: "Important Terms", titleAr: "مصطلحات مهمة", titleFr: "Termes importants", content: "حَلَال - permitted\nحَرَام - forbidden\nسُنَّة - prophetic tradition\nفِقْه - jurisprudence", contentAr: "حَلَال - مما يجوز ويسمح به شرعاً\nحَرَام - محظور وممنوع شرعاً\nسُنَّة - تعاليم الرسول محمد وتراثه\nفِقْه - فهم واستنتاج أحكام الشرع الإسلامي" }
      ],
      vocabulary: [
        { arabic: "مَسْجِد/جَامِع", transliteration: "masjid/jāmi'", meaning: "mosque", meaningAr: "مكان العبادة والصلاة في الإسلام", meaningFr: "mosquée" },
        { arabic: "إِمَام", transliteration: "imām", meaning: "prayer leader", meaningAr: "من يؤم الصلاة ويقودها", meaningFr: "imam" },
        { arabic: "خُطْبَة", transliteration: "khuṭba", meaning: "sermon", meaningAr: "كلام يلقى للموعظة والتعليم", meaningFr: "sermon" },
        { arabic: "دُعَاء", transliteration: "du'ā'", meaning: "supplication", meaningAr: "طلب من الله والتضرع إليه", meaningFr: "supplication" },
        { arabic: "ذِكْر", transliteration: "dhikr", meaning: "remembrance", meaningAr: "تذكر الله والدعاء والتسبيح", meaningFr: "remémoration" }
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
    descriptionAr: "تعلم الفترات الرئيسية من التاريخ العربي",
    descriptionFr: "Apprenez les périodes clés de l'histoire arabe",
    objectives: ["Understand historical periods", "Recognize historical figures", "Connect history to language", "Appreciate heritage"],
    objectivesAr: ["فهم الفترات التاريخية الرئيسية", "التعرف على الشخصيات التاريخية المهمة", "ربط التاريخ باللغة والثقافة", "تقدير التراث والحضارة"],
    objectivesFr: ["Comprendre les périodes historiques", "Reconnaître les figures historiques", "Connecter l'histoire à la langue", "Apprécier le patrimoine"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Major Periods", titleAr: "الفترات التاريخية الكبرى", titleFr: "Périodes majeures", content: "الجَاهِلِيَّة - Pre-Islamic era\nصَدْر الإِسْلَام - Early Islamic period\nالعَصْر الأُمَوِيّ - Umayyad era\nالعَصْر العَبَّاسِيّ - Abbasid era (Golden Age)\nالعَصْر الحَدِيث - Modern era", contentAr: "الجَاهِلِيَّة - فترة ما قبل الإسلام\nصَدْر الإِسْلَام - الفترة الأولى من الحضارة الإسلامية\nالعَصْر الأُمَوِيّ - فترة الدولة الأموية\nالعَصْر العَبَّاسِيّ - فترة الدولة العباسية (العصر الذهبي)\nالعَصْر الحَدِيث - الفترة المعاصرة الحديثة", contentFr: "الجَاهِلِيَّة - Ère pré-islamique\nصَدْر الإِسْلَام - Période islamique précoce\nالعَصْر الأُمَوِيّ - Ère omeyyade\nالعَصْر العَبَّاسِيّ - Ère abbassade (Âge d'or)\nالعَصْر الحَدِيث - Ère moderne" },
        { title: "Golden Age", titleAr: "العصر الذهبي", titleFr: "Âge d'or", content: "بَغْدَاد - center of learning\nبَيْت الحِكْمَة - House of Wisdom\nTranslation movement\nAdvances in science, medicine, philosophy", contentAr: "بَغْدَاد - مركز العلم والحضارة\nبَيْت الحِكْمَة - مركز الترجمة والدراسات\nحركة الترجمة - نقل العلوم من اليونانية والفارسية\nإسهامات في الرياضيات والفلك والطب والفلسفة", contentFr: "بَغْدَاد - centre d'apprentissage\nبَيْت الحِكْمَة - Maison de la Sagesse\nMouvement de traduction\nProgrès en science, médecine, philosophie" },
        { title: "Modern History", titleAr: "التاريخ الحديث والمعاصر", titleFr: "Histoire moderne", content: "الاِسْتِعْمَار - colonialism\nالاِسْتِقْلَال - independence\nالقَضِيَّة الفِلَسْطِينِيَّة - Palestinian cause\nالرَّبِيع العَرَبِيّ - Arab Spring", contentAr: "الاِسْتِعْمَار - الاحتلال الأجنبي للأراضي العربية\nالاِسْتِقْلَال - استقلال الدول العربية وتحررها\nالقَضِيَّة الفِلَسْطِينِيَّة - النضال الفلسطيني من أجل الحرية\nالرَّبِيع العَرَبِيّ - الثورات والانتفاضات العربية", contentFr: "الاِسْتِعْمَار - colonialisme\nالاِسْتِقْلَال - indépendance\nالقَضِيَّة الفِلَسْطِينِيَّة - Cause palestinienne\nالرَّبِيع العَرَبِيّ - Printemps arabe" }
      ],
      vocabulary: [
        { arabic: "تَارِيخ", transliteration: "tārīkh", meaning: "history", meaningAr: "سجل الأحداث والوقائع الماضية", meaningFr: "histoire" },
        { arabic: "حَضَارَة", transliteration: "ḥaḍāra", meaning: "civilization", meaningAr: "درجة عالية من التطور الثقافي والاجتماعي", meaningFr: "civilisation" },
        { arabic: "تُرَاث", transliteration: "turāth", meaning: "heritage", meaningAr: "ما يرثه الأجيال من علم وثقافة وتقاليد", meaningFr: "patrimoine" },
        { arabic: "عَصْر", transliteration: "'aṣr", meaning: "era/age", meaningAr: "فترة زمنية محددة من التاريخ", meaningFr: "ère/époque" },
        { arabic: "خِلَافَة", transliteration: "khilāfa", meaning: "caliphate", meaningAr: "النظام الحكومي الإسلامي بزعامة الخليفة", meaningFr: "califat" }
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
    descriptionAr: "استكشاف التقاليد الفنية والموسيقية العربية",
    descriptionFr: "Explorez les traditions artistiques arabes",
    objectives: ["Appreciate Arabic music", "Understand art forms", "Learn artistic vocabulary", "Discuss arts in Arabic"],
    objectivesAr: ["تقدير الموسيقى العربية وأنواعها", "فهم أشكال الفن والتعبير الفني", "تعلم المفردات الفنية والموسيقية", "مناقشة الفنون باللغة العربية"],
    objectivesFr: ["Apprécier la musique arabe", "Comprendre les formes artistiques", "Apprendre le vocabulaire artistique", "Discuter les arts en arabe"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Music", titleAr: "الموسيقى العربية", titleFr: "Musique", content: "مَقَام - modal system\nطَرَب - musical ecstasy\nعُود - oud (lute)\nنَاي - flute\nدُفّ - drum", contentAr: "مَقَام - النظام الموسيقي العربي\nطَرَب - الطرب والاستمتاع الموسيقي العميق\nعُود - آلة موسيقية وترية\nنَاي - آلة موسيقية هوائية\nدُفّ - آلة إيقاعية", contentFr: "مَقَام - système modal\nطَرَب - extase musicale\nعُود - oud (luth)\nنَاي - flûte\nدُفّ - tambour" },
        { title: "Visual Arts", titleAr: "الفنون البصرية", titleFr: "Arts visuels", content: "خَطّ - calligraphy\nزَخْرَفَة - ornamentation\nأَرَابِيسْك - arabesque\nفَنّ إِسْلَامِيّ - Islamic art", contentAr: "خَطّ - فن كتابة الحروف بجمال وإتقان\nزَخْرَفَة - الزخارف والنقوش الفنية\nأَرَابِيسْك - النقوش والزخارف الهندسية\nفَنّ إِسْلَامِيّ - الفن المتطور في الحضارة الإسلامية", contentFr: "خَطّ - calligraphie\nزَخْرَفَة - ornementation\nأَرَابِيسْك - arabesque\nفَنّ إِسْلَامِيّ - art islamique" },
        { title: "Famous Artists", titleAr: "الفنانون الشهيرون", titleFr: "Artistes célèbres", content: "أُمّ كُلْثُوم - legendary singer\nفَيْرُوز - Lebanese singer\nعَبْد الحَلِيم - romantic singer\nمَحْمُود دَرْوِيش - poet", contentAr: "أُمّ كُلْثُوم - الموسيقار والمغنية الأسطورية\nفَيْرُوز - المغنية اللبنانية الشهيرة\nعَبْد الحَلِيم - المغني الرومانسي الكبير\nمَحْمُود دَرْوِيش - الشاعر الفلسطيني الكبير", contentFr: "أُمّ كُلْثُوم - chanteuse légendaire\nفَيْرُوز - chanteuse libanaise\nعَبْد الحَلِيم - chanteur romantique\nمَحْمُود دَرْوِيش - poète" }
      ],
      vocabulary: [
        { arabic: "فَنّ", transliteration: "fann", meaning: "art", meaningAr: "الإبداع والتعبير الجمالي", meaningFr: "art" },
        { arabic: "مُوسِيقَى", transliteration: "mūsīqā", meaning: "music", meaningAr: "النغمات والألحان المترابطة", meaningFr: "musique" },
        { arabic: "غِنَاء", transliteration: "ghinā'", meaning: "singing", meaningAr: "إطلاق الصوت بنغمات موسيقية", meaningFr: "chant" },
        { arabic: "أُغْنِيَة", transliteration: "ughniya", meaning: "song", meaningAr: "قطعة موسيقية غنائية", meaningFr: "chanson" },
        { arabic: "فَنَّان", transliteration: "fannān", meaning: "artist", meaningAr: "الشخص الماهر في الفن", meaningFr: "artiste" }
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
    descriptionAr: "مراجعة شاملة لجميع محتويات المرحلة الرابعة",
    descriptionFr: "Révision complète de tout le contenu de la phase 4",
    objectives: ["Review advanced grammar", "Demonstrate literary knowledge", "Show professional language skills", "Exhibit cultural understanding"],
    objectivesAr: ["مراجعة القواعس النحوية المتقدمة", "إظهار المعرفة الأدبية الشاملة", "إظهار مهارات اللغة الاحترافية", "إظهار الفهم الثقافي العميق"],
    objectivesFr: ["Revoir la grammaire avancée", "Démontrer les connaissances littéraires", "Montrer les compétences en langage professionnel", "Exhiber la compréhension culturelle"],
    estimatedTime: 60, difficulty: "hard", xpReward: 120,
    content: {
      theory: [
        { title: "Grammar Mastery", titleAr: "إتقان القواعس النحوية", titleFr: "Maîtrise de la grammaire", content: "Full case system (I'rab)\nAll derived forms\nNumber agreement\nWeak verbs", contentAr: "نظام الحالات الإعرابية الكامل (الإعراب)\nجميع الأفعال المزيدة والمشتقات\nاتفاق الأعداد مع المعدود\nالأفعال الضعيفة والمعتلة" },
        { title: "Literature Skills", titleAr: "مهارات الأدب والتحليل", titleFr: "Compétences littéraires", content: "Poetry basics\nProse styles\nClassical and modern texts\nLiterary analysis", contentAr: "أساسيات الشعر والعروض\nأساليب النثر والبلاغة\nالنصوص الكلاسيكية والحديثة\nتحليل النصوص الأدبية" },
        { title: "Professional Skills", titleAr: "المهارات الاحترافية", titleFr: "Compétences professionnelles", content: "News and political Arabic\nBusiness and legal language\nAcademic writing\nPresentations", contentAr: "لغة الأخبار والسياسة\nلغة الأعمال والقانون\nالكتابة الأكاديمية والعلمية\nمهارات العرض والتقديم" }
      ],
      vocabulary: [
        { arabic: "طَلَاقَة", transliteration: "ṭalāqa", meaning: "fluency", meaningAr: "الكلام السلس والمتسارع بسهولة", meaningFr: "fluidité" },
        { arabic: "إِتْقَان", transliteration: "itqān", meaning: "mastery", meaningAr: "الإحكام والتمكن الكامل من المهارة", meaningFr: "maîtrise" },
        { arabic: "كَفَاءَة", transliteration: "kafā'a", meaning: "competence", meaningAr: "الكفاية والقدرة على القيام بعمل", meaningFr: "compétence" },
        { arabic: "مَهَارَة", transliteration: "mahāra", meaning: "skill", meaningAr: "الدراية والمقدرة على فعل شيء بكفاءة", meaningFr: "compétence" },
        { arabic: "شَهَادَة", transliteration: "shahāda", meaning: "certificate", meaningAr: "وثيقة تثبت الإنجاز أو التخرج", meaningFr: "certificat" }
      ]
    },
    exerciseCount: 22, prerequisites: ["4-29"]
  }
];
