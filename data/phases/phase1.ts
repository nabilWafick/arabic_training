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
    titleFr: "Lettres 1-4 : Alif, Bā', Tā', Thā'",
    description:
      "Learn the first four letters of the Arabic alphabet with their sounds and shapes",
    descriptionAr:
      "تعلم الحروف الأربعة الأولى من الأبجدية العربية مع أصواتها وأشكالها",
    descriptionFr:
      "Apprenez les quatre premières lettres de l'alphabet arabe avec leurs sons et formes",
    objectives: [
      "Recognize letters Alif (ا), Bā' (ب), Tā' (ت), and Thā' (ث)",
      "Understand that ب, ت, ث share the same base shape with different dots",
      "Pronounce each letter correctly",
      "Write each letter in isolated form",
    ],
    objectivesAr: [
      "اعترف بالحروف الألف (ا)، الباء (ب)، التاء (ت)، والثاء (ث)",
      "افهم أن ب و ت و ث تشترك في نفس الشكل الأساسي مع نقاط مختلفة",
      "نطق كل حرف بشكل صحيح",
      "اكتب كل حرف في صيغته المنعزلة",
    ],
    objectivesFr: [
      "Reconnaître les lettres Alif (ا), Bā' (ب), Tā' (ت) et Thā' (ث)",
      "Comprendre que ب, ت, ث partagent la même forme de base avec des points différents",
      "Prononcer chaque lettre correctement",
      "Écrire chaque lettre sous sa forme isolée",
    ],
    estimatedTime: 45,
    difficulty: "easy",
    xpReward: 50,
    content: {
      theory: [
        {
          title: "Welcome to Arabic Script",
          titleAr: "أهلا وسهلا بك في الكتابة العربية",
          titleFr: "Bienvenue dans l'écriture arabe",
          content:
            "Arabic is written from right to left (←) using 28 letters. Unlike English, most Arabic letters connect to each other within words, and letters change shape depending on their position. Today we start with the first four letters!",
          contentAr:
            "تُكتب اللغة العربية من اليمين إلى اليسار (←) باستخدام 28 حرفًا. بخلاف اللغة الإنجليزية، تتصل معظم الحروف العربية ببعضها البعض داخل الكلمات، وتتغير الحروف شكلاً اعتمادًا على موضعها. اليوم نبدأ بالحروف الأربعة الأولى!",
          contentFr:
            "L'arabe s'écrit de droite à gauche (←) en utilisant 28 lettres. Contrairement à l'anglais, la plupart des lettres arabes se connectent entre elles dans les mots, et les lettres changent de forme selon leur position. Aujourd'hui nous commençons avec les quatre premières lettres !",
        },
        {
          title: "Alif (ا) - The First Letter",
          titleAr: "الألف (ا) - الحرف الأول",
          titleFr: "Alif (ا) - La première lettre",
          content:
            "Alif is a vertical stroke, like an English 'l' without the curve. It represents a long 'aa' sound (like 'father') or a glottal stop (the pause in 'uh-oh'). Alif NEVER connects to the next letter - it's independent!",
          contentAr:
            "الألف هو خط عمودي، مثل حرف 'l' الإنجليزي بدون انحناء. يمثل صوت 'aa' طويل (مثل كلمة 'father') أو نقرة حنجرية (الوقفة في 'uh-oh'). الألف لا يتصل أبدًا بالحرف التالي - فهو مستقل!",
          contentFr:
            "Alif est un trait vertical, comme un 'l' anglais sans la courbe. Il représente un son 'aa' long (comme dans 'pâte') ou un coup de glotte (la pause dans 'oh-oh'). Alif ne se connecte JAMAIS à la lettre suivante - il est indépendant !",
        },
        {
          title: "The 'B-T-Th' Family: ب ت ث",
          titleAr: "عائلة 'B-T-Th': ب ت ث",
          titleFr: "La famille 'B-T-Th' : ب ت ث",
          content:
            "These three letters share the SAME base shape - like a boat or dish. The only difference is the dots:\n• Bā' (ب) = ONE dot BELOW = 'b' sound\n• Tā' (ت) = TWO dots ABOVE = 't' sound  \n• Thā' (ث) = THREE dots ABOVE = 'th' sound (like 'think')\n\nMemory trick: 'B' for Below (ب), 'T' for Two on Top (ت)",
          contentAr:
            "هذه الثلاثة أحرف تشترك في نفس الشكل الأساسي - مثل قارب أو طبق. الفرق الوحيد هو النقاط:\n• الباء (ب) = نقطة واحدة تحت = صوت 'b'\n• التاء (ت) = نقطتان فوق = صوت 't'\n• الثاء (ث) = ثلاث نقاط فوق = صوت 'th' (مثل 'think')\n\nحيلة التذكر: 'B' للأسفل (ب)، 'T' لاثنتين في الأعلى (ت)",
          contentFr:
            "Ces trois lettres partagent la MÊME forme de base - comme un bateau ou un plat. La seule différence est les points :\n• Bā' (ب) = UN point EN DESSOUS = son 'b'\n• Tā' (ت) = DEUX points AU-DESSUS = son 't'\n• Thā' (ث) = TROIS points AU-DESSUS = son 'th' (comme dans l'anglais 'think')\n\nAstuce mnémotechnique : 'B' pour Bas (ب), 'T' pour Trois (ث)",
        },
        {
          title: "Pronunciation Guide",
          titleAr: "دليل النطق",
          titleFr: "Guide de prononciation",
          content:
            "• Alif (ا): Long 'aa' as in 'car' - or silent with hamza\n• Bā' (ب): Same as English 'b' in 'book'\n• Tā' (ت): Same as English 't' in 'top'\n• Thā' (ث): 'th' as in 'think' (NOT as in 'the')",
          contentAr:
            "• الألف (ا): 'aa' طويل كما في كلمة 'car' - أو صامت مع الهمزة\n• الباء (ب): نفس 'b' الإنجليزي في 'book'\n• التاء (ت): نفس 't' الإنجليزي في 'top'\n• الثاء (ث): 'th' كما في 'think' (وليس كما في 'the')",
          contentFr:
            "• Alif (ا) : 'aa' long comme dans 'pâte' - ou silencieux avec hamza\n• Bā' (ب) : Comme le 'b' français dans 'bon'\n• Tā' (ت) : Comme le 't' français dans 'table'\n• Thā' (ث) : 'th' comme dans l'anglais 'think' (PAS comme dans 'the')",
        },
      ],
      vocabulary: [
        {
          arabic: "ا",
          transliteration: "alif",
          meaning: "Alif (long 'a' or glottal stop)",
          meaningAr: "الألف (صوت 'a' طويل أو نقرة حنجرية)",
          meaningFr: "Alif (son 'a' long ou coup de glotte)",
        },
        {
          arabic: "ب",
          transliteration: "bā'",
          meaning: "Bā' (b sound)",
          meaningAr: "الباء (صوت 'b')",
          meaningFr: "Bā' (son 'b')",
        },
        {
          arabic: "ت",
          transliteration: "tā'",
          meaning: "Tā' (t sound)",
          meaningAr: "التاء (صوت 't')",
          meaningFr: "Tā' (son 't')",
        },
        {
          arabic: "ث",
          transliteration: "thā'",
          meaning: "Thā' (th as in 'think')",
          meaningAr: "الثاء (صوت 'th')",
          meaningFr: "Thā' ('th' comme dans l'anglais 'think')",
        },
        {
          arabic: "أَب",
          transliteration: "ab",
          meaning: "father",
          meaningAr: "أب",
          meaningFr: "père",
        },
        {
          arabic: "بَاب",
          transliteration: "bāb",
          meaning: "door",
          meaningAr: "باب",
          meaningFr: "porte",
        },
        {
          arabic: "بَيْت",
          transliteration: "bayt",
          meaning: "house",
          meaningAr: "بيت",
          meaningFr: "maison",
        },
      ],
    },
    exerciseCount: 15,
    prerequisites: [],
  },
  {
    id: "1-2",
    phaseId: 1,
    order: 2,
    title: "Letters 5-7: Jīm, Ḥā', Khā'",
    titleAr: "الحروف ٥-٧: الجيم، الحاء، الخاء",
    titleFr: "Lettres 5-7 : Jīm, Ḥā', Khā'",
    description: "Learn the second group of letters that share a common shape",
    descriptionAr: "تعلم المجموعة الثانية من الحروف التي تشترك في شكل مشترك",
    descriptionFr:
      "Apprenez le deuxième groupe de lettres partageant une forme commune",
    objectives: [
      "Recognize letters Jīm (ج), Ḥā' (ح), and Khā' (خ)",
      "Distinguish between these similar-looking letters",
      "Pronounce the throat sounds Ḥā' and Khā'",
      "Write each letter in isolated form",
    ],
    objectivesAr: [
      "اعترف بالحروف الجيم (ج)، الحاء (ح)، والخاء (خ)",
      "ميز بين هذه الحروف المتشابهة",
      "نطق أصوات الحلق الحاء والخاء",
      "اكتب كل حرف في صيغته المنعزلة",
    ],
    objectivesFr: [
      "Reconnaître les lettres Jīm (ج), Ḥā' (ح) et Khā' (خ)",
      "Distinguer ces lettres qui se ressemblent",
      "Prononcer les sons de gorge Ḥā' et Khā'",
      "Écrire chaque lettre sous sa forme isolée",
    ],
    estimatedTime: 45,
    difficulty: "easy",
    xpReward: 50,
    content: {
      theory: [
        {
          title: "The 'J-Ḥ-Kh' Family: ج ح خ",
          titleAr: "عائلة 'J-Ḥ-Kh': ج ح خ",
          titleFr: "La famille 'J-Ḥ-Kh' : ج ح خ",
          content:
            "Just like ب-ت-ث, these three letters share the same base shape - like a 'hook' or 'teacup'. The dots tell them apart:\n• Jīm (ج) = ONE dot BELOW = 'j' sound\n• Ḥā' (ح) = NO dots = deep throat 'h'\n• Khā' (خ) = ONE dot ABOVE = 'kh' sound (like 'Bach')",
          contentAr:
            "مثل ب-ت-ث، هذه الأحرف الثلاثة تشترك في نفس الشكل الأساسي - مثل 'خطاف' أو 'كوب شاي'. النقاط هي التي تميزها:\n• الجيم (ج) = نقطة واحدة تحت = صوت 'j'\n• الحاء (ح) = بدون نقاط = 'h' عميق من الحلق\n• الخاء (خ) = نقطة واحدة فوق = صوت 'kh' (مثل 'Bach')",
          contentFr:
            "Comme ب-ت-ث, ces trois lettres partagent la même forme de base - comme un 'crochet' ou une 'tasse'. Les points les distinguent :\n• Jīm (ج) = UN point EN DESSOUS = son 'j'\n• Ḥā' (ح) = PAS de points = 'h' profond de la gorge\n• Khā' (خ) = UN point AU-DESSUS = son 'kh' (comme dans 'Bach')",
        },
        {
          title: "Special Throat Sounds",
          titleAr: "أصوات الحلق الخاصة",
          titleFr: "Sons de gorge spéciaux",
          content:
            "Ḥā' (ح) is a 'breathy h' from deep in the throat - imagine breathing on your glasses to clean them, but more forceful.\n\nKhā' (خ) sounds like the 'ch' in Scottish 'loch' or German 'Bach' - a scraping sound in the back of the throat. If you can gargle, you can make this sound!",
          contentAr:
            "الحاء (ح) هي 'h' مزفزفة من عمق الحلق - تخيل أنك تنفخ على نظارتك لتنظيفها، لكن بقوة أكبر.\n\nالخاء (خ) تبدو مثل 'ch' في الاسكتلندية 'loch' أو الألمانية 'Bach' - صوت خشن في مؤخرة الحلق. إذا كنت تستطيع الغرغرة، فيمكنك إصدار هذا الصوت!",
          contentFr:
            "Ḥā' (ح) est un 'h soufflé' du fond de la gorge - imaginez souffler sur vos lunettes pour les nettoyer, mais plus fort.\n\nKhā' (خ) ressemble au 'ch' de l'écossais 'loch' ou de l'allemand 'Bach' - un son raclé au fond de la gorge. Si vous pouvez vous gargariser, vous pouvez faire ce son !",
        },
        {
          title: "Memory Tips",
          titleAr: "نصائح التذكر",
          titleFr: "Astuces mnémotechniques",
          content:
            "• Jīm (ج): J for 'Just one dot below'\n• Ḥā' (ح): 'Plain' with no dots (ح looks like an empty cup)\n• Khā' (خ): 'Kiss' on top = dot above (like a cherry on top)",
          contentAr:
            "• الجيم (ج): J لـ 'Just one dot below' (فقط نقطة واحدة تحت)\n• الحاء (ح): 'عادي' بدون نقاط (ح يشبه كوب فارغ)\n• الخاء (خ): 'قبلة' في الأعلى = نقطة فوق (مثل الكرز فوق الكعكة)",
          contentFr:
            "• Jīm (ج) : J pour 'Juste un point en dessous'\n• Ḥā' (ح) : 'Plaine' sans points (ح ressemble à une tasse vide)\n• Khā' (خ) : 'Kx' au sommet = point au-dessus (comme une cerise sur un gâteau)",
        },
      ],
      vocabulary: [
        {
          arabic: "ج",
          transliteration: "jīm",
          meaning: "Jīm (j sound)",
          meaningAr: "الجيم (صوت 'j')",
          meaningFr: "Jīm (son 'j')",
        },
        {
          arabic: "ح",
          transliteration: "ḥā'",
          meaning: "Ḥā' (deep h sound)",
          meaningAr: "الحاء (صوت 'h' عميق)",
          meaningFr: "Ḥā' (son 'h' profond)",
        },
        {
          arabic: "خ",
          transliteration: "khā'",
          meaning: "Khā' (kh as in 'Bach')",
          meaningAr: "الخاء (صوت 'kh')",
          meaningFr: "Khā' ('kh' comme dans 'Bach')",
        },
        {
          arabic: "جَمَل",
          transliteration: "jamal",
          meaning: "camel",
          meaningAr: "جمل",
          meaningFr: "chameau",
        },
        {
          arabic: "حُب",
          transliteration: "ḥubb",
          meaning: "love",
          meaningAr: "حب",
          meaningFr: "amour",
        },
        {
          arabic: "خُبْز",
          transliteration: "khubz",
          meaning: "bread",
          meaningAr: "خبز",
          meaningFr: "pain",
        },
      ],
    },
    exerciseCount: 15,
    prerequisites: ["1-1"],
  },
  {
    id: "1-3",
    phaseId: 1,
    order: 3,
    title: "Letters 8-11: Dāl, Dhāl, Rā', Zāy",
    titleAr: "الحروف ٨-١١: الدال، الذال، الراء، الزاي",
    titleFr: "Lettres 8-11 : Dāl, Dhāl, Rā', Zāy",
    description:
      "Learn the non-connecting letters - letters that don't connect forward",
    descriptionAr: "تعلم الحروف غير المتصلة - الحروف التي لا تتصل للأمام",
    descriptionFr:
      "Apprenez les lettres non connectées - lettres qui ne se lient pas vers l'avant",
    objectives: [
      "Recognize Dāl (د), Dhāl (ذ), Rā' (ر), and Zāy (ز)",
      "Understand why these letters never connect to the following letter",
      "Pronounce the 'th' sound in Dhāl (like 'the')",
      "Write these non-connecting letters",
    ],
    objectivesAr: [
      "اعترف بالدال (د)، الذال (ذ)، الراء (ر)، والزاي (ز)",
      "افهم لماذا هذه الحروف لا تتصل أبدًا بالحرف التالي",
      "نطق صوت 'th' في الذال (مثل 'the')",
      "اكتب هذه الحروف غير المتصلة",
    ],
    objectivesFr: [
      "Reconnaître les lettres Dāl (د), Dhāl (ذ), Rā' (ر) et Zāy (ز)",
      "Comprendre pourquoi ces lettres ne se connectent jamais à la lettre suivante",
      "Prononcer le son 'th' dans Dhāl (comme dans l'anglais 'the')",
      "Écrire ces lettres non connectées",
    ],
    estimatedTime: 50,
    difficulty: "easy",
    xpReward: 55,
    content: {
      theory: [
        {
          title: "Non-Connecting Letters",
          titleAr: "الحروف غير المتصلة",
          titleFr: "Lettres non connectées",
          content:
            "These four letters are special - they NEVER connect to the letter after them (though they can connect to what comes before). When you write them, you must lift your pen.\n\nThink of them as 'independent' letters that like their space!",
          contentAr:
            "هذه الأربعة أحرف خاصة - لا تتصل أبدًا بالحرف الذي يليها (على الرغم من أنها يمكن أن تتصل بما يسبقها). عندما تكتبها، يجب أن ترفع قلمك.\n\nفكر فيها كحروف 'مستقلة' تحب مساحتها!",
          contentFr:
            "Ces quatre lettres sont spéciales - elles ne se connectent JAMAIS à la lettre qui suit (mais elles peuvent se connecter à ce qui précède). Quand vous les écrivez, vous devez lever votre stylo.\n\nConsidérez-les comme des lettres 'indépendantes' qui aiment leur espace !",
        },
        {
          title: "The 'D-Dh' Pair: د ذ",
          titleAr: "زوج 'D-Dh': د ذ",
          titleFr: "La paire 'D-Dh' : د ذ",
          content:
            "• Dāl (د) = No dot = 'd' sound (like 'door')\n• Dhāl (ذ) = ONE dot above = 'dh/th' sound (like 'the', 'that', 'mother')\n\nNote: Dhāl (ذ) sounds different from Thā' (ث). Dhāl = 'the', Thā' = 'think'",
          contentAr:
            "• الدال (د) = بدون نقطة = صوت 'd' (مثل 'door')\n• الذال (ذ) = نقطة واحدة فوق = صوت 'dh/th' (مثل 'the'، 'that'، 'mother')\n\nملاحظة: الذال (ذ) تبدو مختلفة عن الثاء (ث). الذال = 'the'، الثاء = 'think'",
          contentFr:
            "• Dāl (د) = Pas de point = son 'd' (comme 'dormir')\n• Dhāl (ذ) = UN point au-dessus = son 'dh/th' (comme l'anglais 'the', 'that', 'mother')\n\nNote : Dhāl (ذ) se prononce différemment de Thā' (ث). Dhāl = 'the', Thā' = 'think'",
        },
        {
          title: "The 'R-Z' Pair: ر ز",
          titleAr: "زوج 'R-Z': ر ز",
          titleFr: "La paire 'R-Z' : ر ز",
          content:
            "• Rā' (ر) = No dot = rolled 'r' sound (Spanish-style)\n• Zāy (ز) = ONE dot above = 'z' sound\n\nThe Arabic 'r' is rolled/trilled like in Spanish or Italian. Practice saying 'butter' with a rolled r!",
          contentAr:
            "• الراء (ر) = بدون نقطة = صوت 'r' مكرر (أسلوب إسباني)\n• الزاي (ز) = نقطة واحدة فوق = صوت 'z'\n\nالحرف 'r' العربي مكرر/مرتعش مثل الإسباني أو الإيطالي. تدرب على قول 'butter' بـ r مكرر!",
          contentFr:
            "• Rā' (ر) = Pas de point = son 'r' roulé (style espagnol)\n• Zāy (ز) = UN point au-dessus = son 'z'\n\nLe 'r' arabe est roulé/trillé comme en espagnol ou en italien. Entraînez-vous à dire 'beurre' avec un r roulé !",
        },
      ],
      vocabulary: [
        {
          arabic: "د",
          transliteration: "dāl",
          meaning: "Dāl (d sound)",
          meaningAr: "الدال (صوت 'd')",
          meaningFr: "Dāl (son 'd')",
        },
        {
          arabic: "ذ",
          transliteration: "dhāl",
          meaning: "Dhāl (dh as in 'the')",
          meaningAr: "الذال (صوت 'dh' مثل 'the')",
          meaningFr: "Dhāl ('dh' comme dans l'anglais 'the')",
        },
        {
          arabic: "ر",
          transliteration: "rā'",
          meaning: "Rā' (rolled r)",
          meaningAr: "الراء (صوت 'r' مكرر)",
          meaningFr: "Rā' ('r' roulé)",
        },
        {
          arabic: "ز",
          transliteration: "zāy",
          meaning: "Zāy (z sound)",
          meaningAr: "الزاي (صوت 'z')",
          meaningFr: "Zāy (son 'z')",
        },
        {
          arabic: "دَار",
          transliteration: "dār",
          meaning: "house/home",
          meaningAr: "منزل/بيت",
          meaningFr: "maison/foyer",
        },
        {
          arabic: "ذَهَب",
          transliteration: "dhahab",
          meaning: "gold",
          meaningAr: "ذهب",
          meaningFr: "or",
        },
        {
          arabic: "رَجُل",
          transliteration: "rajul",
          meaning: "man",
          meaningAr: "رجل",
          meaningFr: "homme",
        },
        {
          arabic: "زَهْرَة",
          transliteration: "zahra",
          meaning: "flower",
          meaningAr: "زهرة",
          meaningFr: "fleur",
        },
      ],
    },
    exerciseCount: 16,
    prerequisites: ["1-2"],
  },
  {
    id: "1-4",
    phaseId: 1,
    order: 4,
    title: "Letters 12-14: Sīn, Shīn, Ṣād",
    titleAr: "الحروف ١٢-١٤: السين، الشين، الصاد",
    titleFr: "Lettres 12-14 : Sīn, Shīn, Ṣād",
    description:
      "Learn the 'S' letters with their distinctive three-tooth shape",
    descriptionAr: "تعلم حروف 'S' بشكلها المميز ذو الأسنان الثلاثة",
    descriptionFr:
      "Apprenez les lettres 'S' avec leur forme distinctive à trois dents",
    objectives: [
      "Recognize Sīn (س), Shīn (ش), and Ṣād (ص)",
      "Write the three-tooth pattern of Sīn/Shīn",
      "Understand emphatic consonants (Ṣād)",
      "Pronounce the heavy 'ṣ' sound",
    ],
    objectivesAr: [
      "اعترف بالسين (س)، الشين (ش)، والصاد (ص)",
      "اكتب نمط الأسنان الثلاثة للسين والشين",
      "افهم الحروف الممدودة (الصاد)",
      "نطق الصوت الثقيل 'ṣ'",
    ],
    objectivesFr: [
      "Reconnaître Sīn (س), Shīn (ش) et Ṣād (ص)",
      "Écrire le motif à trois dents de Sīn/Shīn",
      "Comprendre les consonnes emphatiques (Ṣād)",
      "Prononcer le son 'ṣ' lourd",
    ],
    estimatedTime: 50,
    difficulty: "easy",
    xpReward: 55,
    content: {
      theory: [
        {
          title: "The Three-Tooth Letters: س ش",
          titleAr: "حروف الأسنان الثلاثة: س ش",
          titleFr: "Les trois lettres dentales : س ش",
          content:
            "Sīn (س) and Shīn (ش) have a distinctive shape with three 'teeth' like a comb:\n• Sīn (س) = NO dots = 's' sound (like 'sun')\n• Shīn (ش) = THREE dots above = 'sh' sound (like 'ship')\n\nTip: Shīn has 3 teeth AND 3 dots!",
          contentAr:
            "السين (س) والشين (ش) لهما شكل مميز بثلاث 'أسنان' مثل مشط:\n• السين (س) = بدون نقاط = صوت 's' (مثل 'sun')\n• الشين (ش) = ثلاث نقاط فوق = صوت 'sh' (مثل 'ship')\n\nنصيحة: الشين بها 3 أسنان و 3 نقاط!",
          contentFr:
            "Sīn (س) et Shīn (ش) ont une forme distinctive avec trois « dents » comme un peigne :\n• Sīn (س) = SANS points = son 's' (comme dans 'soleil')\n• Shīn (ش) = TROIS points au-dessus = son 'ch' (comme dans 'chameau')\n\nAstuce : Shīn a 3 dents ET 3 points !",
        },
        {
          title: "Introducing Emphatic Letters: Ṣād (ص)",
          titleAr: "تقديم الحروف الممدودة: الصاد (ص)",
          titleFr: "Présentation des lettres emphatiques : Ṣād (ص)",
          content:
            "Ṣād (ص) is your first 'emphatic' letter. Arabic has sounds that don't exist in English - emphatic letters are pronounced with the tongue pressed against the roof of the mouth, creating a 'heavier' sound.\n\nṢād is a 'heavy s' - imagine saying 's' while your tongue is pressed flat. Your mouth feels more full.",
          contentAr:
            "الصاد (ص) هو أول حرف 'ممدود' لك. اللغة العربية تحتوي على أصوات غير موجودة في الإنجليزية - الحروف الممدودة تُنطق بضغط اللسان على سقف الفم، مما يخلق صوتًا 'أثقل'.\n\nالصاد هي 's' ثقيلة - تخيل نطق 's' بينما لسانك مضغوط بشكل مسطح. يشعر فمك بأنه أكثر امتلاءً.",
          contentFr:
            "Ṣād (ص) est votre première lettre « emphatique ». L'arabe a des sons qui n'existent pas en français - les lettres emphatiques se prononcent en appuyant la langue contre le toit de la bouche, créant un son « plus lourd ».\n\nṢād est un 's' lourd - imaginez dire 's' tandis que votre langue est appuyée à plat. Votre bouche se sent plus pleine.",
        },
        {
          title: "Why Emphatics Matter",
          titleAr: "لماذا الحروف الممدودة مهمة",
          titleFr: "Pourquoi les lettres emphatiques sont importantes",
          content:
            "Emphatic letters change the meaning of words! For example:\n• سَيْف (sayf) = sword (regular s)\n• صَيْف (ṣayf) = summer (emphatic s)\n\nArabics sometimes call this language 'لُغَة الضّاد' (the language of Ḍād) because emphatic sounds are so distinctive!",
          contentAr:
            "الحروف الممدودة تغير معنى الكلمات! على سبيل المثال:\n• سَيْف (sayf) = سيف (s عادي)\n• صَيْف (ṣayf) = صيف (s ممدود)\n\nيُطلق العرب على هذه اللغة أحيانًا 'لُغَة الضّاد' (لغة الضاد) لأن الأصوات الممدودة مميزة جدًا!",
          contentFr:
            "Les lettres emphatiques changent le sens des mots ! Par exemple :\n• سَيْف (sayf) = épée (s régulier)\n• صَيْف (ṣayf) = été (s emphatique)\n\nLes Arabes appellent parfois cette langue « لُغَة الضّاد » (la langue de Ḍād) car les sons emphatiques sont si distinctifs !",
        },
      ],
      vocabulary: [
        {
          arabic: "س",
          transliteration: "sīn",
          meaning: "Sīn (s sound)",
          meaningAr: "السين (صوت 's')",
        },
        {
          arabic: "ش",
          transliteration: "shīn",
          meaning: "Shīn (sh sound)",
          meaningAr: "الشين (صوت 'sh')",
        },
        {
          arabic: "ص",
          transliteration: "ṣād",
          meaning: "Ṣād (emphatic s)",
          meaningAr: "الصاد (صوت 's' ممدود)",
        },
        {
          arabic: "سَمَاء",
          transliteration: "samā'",
          meaning: "sky",
          meaningAr: "سماء",
        },
        {
          arabic: "شَمْس",
          transliteration: "shams",
          meaning: "sun",
          meaningAr: "شمس",
        },
        {
          arabic: "صَبَاح",
          transliteration: "ṣabāḥ",
          meaning: "morning",
          meaningAr: "صباح",
        },
      ],
    },
    exerciseCount: 16,
    prerequisites: ["1-3"],
  },
  {
    id: "1-5",
    phaseId: 1,
    order: 5,
    title: "Letters 15-17: Ḍād, Ṭā', Ẓā'",
    titleAr: "الحروف ١٥-١٧: الضاد، الطاء، الظاء",
    titleFr: "Lettres 15-17 : Ḍād, Ṭā', Ẓā'",
    description:
      "Master the remaining emphatic letters - the signature sounds of Arabic",
    descriptionAr: "احتقن الحروف الممدودة المتبقية - الأصوات المميزة للعربية",
    descriptionFr:
      "Maîtrisez les lettres emphatiques restantes - les sons caractéristiques de l'arabe",
    objectives: [
      "Recognize Ḍād (ض), Ṭā' (ط), and Ẓā' (ظ)",
      "Pronounce all emphatic consonants confidently",
      "Distinguish between regular and emphatic pairs",
      "Understand why Arabic is called 'the language of Ḍād'",
    ],
    objectivesAr: [
      "اعترف بالضاد (ض)، الطاء (ط)، والظاء (ظ)",
      "نطق جميع الحروف الممدودة بثقة",
      "ميز بين الأزواج العادية والممدودة",
      "افهم لماذا تسمى اللغة العربية 'لغة الضاد'",
    ],
    objectivesFr: [
      "Reconnaître Ḍād (ض), Ṭā' (ط) et Ẓā' (ظ)",
      "Prononcer tous les consonnes emphatiques avec confiance",
      "Distinguer les paires régulières et emphatiques",
      "Comprendre pourquoi l'arabe s'appelle 'la langue de Ḍād'",
    ],
    estimatedTime: 55,
    difficulty: "easy",
    xpReward: 60,
    content: {
      theory: [
        {
          title: "The Complete Emphatic Set",
          titleAr: "المجموعة الممدودة الكاملة",
          titleFr: "L'ensemble emphatique complet",
          content:
            "You're learning the sounds that make Arabic unique! These three letters complete the emphatic consonant family:\n• Ḍād (ض) = emphatic 'd' (NO English equivalent!)\n• Ṭā' (ط) = emphatic 't' (heavy 't')\n• Ẓā' (ظ) = emphatic 'dh/z' (heavy 'th' like 'the')",
          contentAr:
            "أنت تتعلم الأصوات التي تجعل العربية فريدة! هذه الأحرف الثلاثة تكمل عائلة الحروف الممدودة:\n• الضاد (ض) = 'd' ممدود (بلا مكافئ إنجليزي!)\n• الطاء (ط) = 't' ممدود ('t' ثقيلة)\n• الظاء (ظ) = 'dh/z' ممدود ('th' ثقيلة مثل 'the')",
          contentFr:
            "Vous apprenez les sons qui rendent l'arabe unique ! Ces trois lettres complètent la famille des consonnes emphatiques :\n• Ḍād (ض) = 'd' emphatique (AUCUN équivalent français !)\n• Ṭā' (ط) = 't' emphatique (t lourd)\n• Ẓā' (ظ) = 'dh/z' emphatique (th lourd comme 'the' en anglais)",
        },
        {
          title: "Ḍād - The Arabic Letter",
          titleAr: "الضاد - حرف عربي",
          titleFr: "Ḍād - La lettre arabe",
          content:
            "Ḍād (ض) is so unique that Arabic is called 'لُغَة الضّاد' (lughat aḍ-ḍād - the language of Ḍād). This sound exists ONLY in Arabic!\n\nTo pronounce it: Say 'd' but press your tongue against your upper teeth while pushing air from your throat. It sounds 'thick' and 'heavy'.",
          contentAr:
            "الضاد (ض) فريدة جدًا لدرجة أن اللغة العربية تُسمى 'لُغَة الضّاد' (لغة الضاد). هذا الصوت موجود فقط في العربية!\n\nللنطق به: قل 'd' لكن اضغط لسانك على أسنانك العلوية بينما تدفع الهواء من حلقك. يبدو 'سميك' و 'ثقيل'.",
          contentFr:
            "Ḍād (ض) est tellement unique que l'arabe s'appelle « لُغَة الضّاد » (lughat aḍ-ḍād - la langue de Ḍād). Ce son n'existe QUE en arabe !\n\nPour le prononcer : Dites 'd' mais appuyez votre langue contre vos dents supérieures en poussant l'air de votre gorge. Ça sonne « épais » et « lourd ».",
        },
        {
          title: "Emphatic Pairs Comparison",
          titleAr: "مقارنة الأزواج الممدودة",
          titleFr: "Comparaison des paires emphatiques",
          content:
            "Regular → Emphatic:\n• ت (t) → ط (ṭ): thin t → thick t\n• د (d) → ض (ḍ): thin d → thick d\n• ذ (dh) → ظ (ẓ): thin th → thick th\n• س (s) → ص (ṣ): thin s → thick s\n\nEmphatics make surrounding vowels sound 'darker' too!",
          contentAr:
            "عادي → ممدود:\n• ت (t) → ط (ṭ): t رقيقة → t سميكة\n• د (d) → ض (ḍ): d رقيقة → d سميكة\n• ذ (dh) → ظ (ẓ): th رقيقة → th سميكة\n• س (s) → ص (ṣ): s رقيقة → s سميكة\n\nالحروف الممدودة تجعل الحروف الصوتية المحيطة تبدو 'أغمق' أيضًا!",
          contentFr:
            "Régulier → Emphatique :\n• ت (t) → ط (ṭ) : t fin → t épais\n• د (d) → ض (ḍ) : d fin → d épais\n• ذ (dh) → ظ (ẓ) : th fin → th épais\n• س (s) → ص (ṣ) : s fin → s épais\n\nLes emphatiques rendent aussi les voyelles environnantes « plus sombres » !",
        },
      ],
      vocabulary: [
        {
          arabic: "ض",
          transliteration: "ḍād",
          meaning: "Ḍād (emphatic d)",
          meaningAr: "الضاد (صوت 'd' ممدود)",
        },
        {
          arabic: "ط",
          transliteration: "ṭā'",
          meaning: "Ṭā' (emphatic t)",
          meaningAr: "الطاء (صوت 't' ممدود)",
        },
        {
          arabic: "ظ",
          transliteration: "ẓā'",
          meaning: "Ẓā' (emphatic dh/z)",
          meaningAr: "الظاء (صوت 'dh' ممدود)",
        },
        {
          arabic: "ضَوْء",
          transliteration: "ḍaw'",
          meaning: "light",
          meaningAr: "ضوء",
        },
        {
          arabic: "طَعَام",
          transliteration: "ṭa'ām",
          meaning: "food",
          meaningAr: "طعام",
        },
        {
          arabic: "ظُهْر",
          transliteration: "ẓuhr",
          meaning: "noon",
          meaningAr: "ظهر",
        },
      ],
    },
    exerciseCount: 16,
    prerequisites: ["1-4"],
  },
  {
    id: "1-6",
    phaseId: 1,
    order: 6,
    title: "Letters 18-20: 'Ayn, Ghayn, Fā'",
    titleAr: "الحروف ١٨-٢٠: العين، الغين، الفاء",
    titleFr: "Lettres 18-20 : 'Ayn, Ghayn, Fā'",
    description: "Learn the distinctive throat sounds and the letter Fā'",
    descriptionAr: "تعلم أصوات الحلق المميزة وحرف الفاء",
    descriptionFr: "Apprenez les sons gutturaux distinctifs et la lettre Fā'",
    objectives: [
      "Recognize 'Ayn (ع), Ghayn (غ), and Fā' (ف)",
      "Master the pharyngeal sound 'Ayn",
      "Pronounce Ghayn (like French 'r')",
      "Write the distinctive eye-shaped letters",
    ],
    objectivesAr: [
      "اعترف بالعين (ع)، الغين (غ)، والفاء (ف)",
      "احتقن صوت الحلق العين",
      "نطق الغين (مثل الفرنسية 'r')",
      "اكتب الحروف المميزة على شكل عين",
    ],
    objectivesFr: [
      "Reconnaître 'Ayn (ع), Ghayn (غ) et Fā' (ف)",
      "Maîtriser le son pharyngé 'Ayn",
      "Prononcer Ghayn (comme le 'r' français)",
      "Écrire les lettres distinctives en forme d'œil",
    ],
    estimatedTime: 55,
    difficulty: "medium",
    xpReward: 65,
    content: {
      theory: [
        {
          title: "'Ayn - The Most Difficult Sound",
          titleAr: "العين - الصوت الأصعب",
          titleFr: "'Ayn - Le son le plus difficile",
          content:
            "'Ayn (ع) is often the hardest letter for non-native speakers. It's a 'pharyngeal' consonant - produced by constricting your throat.\n\nHow to pronounce: Imagine you're choking (gently!), or gagging. The sound comes from squeezing the back of your throat. It's like saying 'ah' while your throat is tight.",
          contentAr:
            "العين (ع) غالبًا ما تكون أصعب حرف للمتحدثين غير الأصليين. إنها حرف 'حلقي' - ينتج عن تضييق حلقك.\n\nكيفية النطق به: تخيل أنك تختنق (برفق!)، أو تتقيأ. الصوت يأتي من الضغط على مؤخرة حلقك. إنه مثل قول 'ah' بينما حلقك مشدود.",
          contentFr:
            "'Ayn (ع) est souvent la lettre la plus difficile pour les non-locuteurs natifs. C'est une consonne « pharyngale » - produite en contractant votre gorge.\n\nComment le prononcer : Imaginez que vous vous étouffez (doucement !), ou que vous avez un haut-le-cœur. Le son vient de l'étranglement de l'arrière de votre gorge. C'est comme dire 'ah' tandis que votre gorge est serrée.",
        },
        {
          title: "Ghayn - The Gargling Sound",
          titleAr: "الغين - صوت الغرغرة",
          titleFr: "Ghayn - Le son de gargarisme",
          content:
            "Ghayn (غ) is easier! It sounds like:\n• The French 'r' in 'Paris'\n• Gargling water in your throat\n• The 'ch' in 'Bach' but voiced\n\nGhayn and 'Ayn share the same shape - Ghayn just has a dot above.",
          contentAr:
            "الغين (غ) أسهل! تبدو مثل:\n• الفرنسية 'r' في 'Paris'\n• غرغرة الماء في حلقك\n• 'ch' في 'Bach' لكن بصوت مجهور\n\nالغين والعين تشتركان في نفس الشكل - الغين فقط لديها نقطة فوق.",
          contentFr:
            "Ghayn (غ) est plus facile ! Ça sonne comme :\n• Le français 'r' dans 'Paris'\n• Gargariser de l'eau dans votre gorge\n• Le 'ch' dans 'Bach' mais voisé\n\nGhayn et 'Ayn partagent la même forme - Ghayn a juste un point au-dessus.",
        },
        {
          title: "Fā' - A Familiar Friend",
          titleAr: "الفاء - صديق مألوف",
          titleFr: "Fā' - Un ami familier",
          content:
            "Fā' (ف) is easy - it's just like English 'f'! It has a distinctive loop shape with one dot above.\n\nFun fact: Fā' looks like a lowercase 'q' with a dot - an easy visual reminder!",
          contentAr:
            "الفاء (ف) سهلة - إنها تمامًا مثل الإنجليزية 'f'! لديها شكل حلقة مميز بنقطة فوق.\n\nحقيقة مرحة: الفاء تشبه حرف 'q' صغير بنقطة - تذكير بصري سهل!",
          contentFr:
            "Fā' (ف) est facile - c'est exactement comme le 'f' français ! Elle a une forme de boucle distinctive avec un point au-dessus.\n\nFait amusant : Fā' ressemble à un 'q' minuscule avec un point - un rappel visuel facile !",
        },
      ],
      vocabulary: [
        {
          arabic: "ع",
          transliteration: "'ayn",
          meaning: "'Ayn (throat constriction)",
          meaningAr: "العين (تضييق الحلق)",
        },
        {
          arabic: "غ",
          transliteration: "ghayn",
          meaning: "Ghayn (French r / gargle)",
          meaningAr: "الغين (صوت الفرنسية r أو الغرغرة)",
        },
        {
          arabic: "ف",
          transliteration: "fā'",
          meaning: "Fā' (f sound)",
          meaningAr: "الفاء (صوت f)",
        },
        {
          arabic: "عَيْن",
          transliteration: "'ayn",
          meaning: "eye",
          meaningAr: "عين",
        },
        {
          arabic: "غَابَة",
          transliteration: "ghāba",
          meaning: "forest",
          meaningAr: "غابة",
        },
        {
          arabic: "فَم",
          transliteration: "fam",
          meaning: "mouth",
          meaningAr: "فم",
        },
      ],
    },
    exerciseCount: 17,
    prerequisites: ["1-5"],
  },
  {
    id: "1-7",
    phaseId: 1,
    order: 7,
    title: "Letters 21-24: Qāf, Kāf, Lām, Mīm",
    titleAr: "الحروف ٢١-٢٤: القاف، الكاف، اللام، الميم",
    titleFr: "Lettres 21-24 : Qāf, Kāf, Lām, Mīm",
    description: "Learn common consonants including the distinctive Qāf",
    descriptionAr: "تعلم الحروف الساكنة الشائعة بما في ذلك القاف المميز",
    descriptionFr:
      "Apprenez les consonnes courantes, y compris le distinctif Qāf",
    objectives: [
      "Recognize Qāf (ق), Kāf (ك), Lām (ل), and Mīm (م)",
      "Distinguish between Qāf and Kāf sounds",
      "Write the tall vertical stroke of Lām",
      "Connect these letters in simple words",
    ],
    objectivesAr: [
      "اعترف بالقاف (ق)، الكاف (ك)، اللام (ل)، والميم (م)",
      "ميز بين أصوات القاف والكاف",
      "اكتب الخط العمودي الطويل للام",
      "وصل هذه الحروف في كلمات بسيطة",
    ],
    objectivesFr: [
      "Reconnaître Qāf (ق), Kāf (ك), Lām (ل) et Mīm (م)",
      "Distinguer les sons Qāf et Kāf",
      "Écrire le trait vertical grand de Lām",
      "Connecter ces lettres dans des mots simples",
    ],
    estimatedTime: 50,
    difficulty: "easy",
    xpReward: 55,
    content: {
      theory: [
        {
          title: "Qāf vs. Kāf",
          titleAr: "القاف مقابل الكاف",
          titleFr: "Qāf vs Kāf",
          content:
            "• Qāf (ق) = Deep 'k' from the back of the throat (like saying 'k' while gargling)\n• Kāf (ك) = Regular 'k' like English\n\nQāf is a 'uvular' sound - the sound originates further back than regular 'k'. Many Arabic dialects pronounce Qāf as 'g' or even as a glottal stop!",
          contentAr:
            "• القاف (ق) = 'k' عميق من مؤخرة الحلق (مثل قول 'k' بينما تغرغر)\n• الكاف (ك) = 'k' عادي مثل الإنجليزية\n\nالقاف صوت 'لهوي' - الصوت ينشأ أعمق من 'k' العادي. تنطق العديد من اللهجات العربية القاف كـ 'g' أو حتى كنقرة حنجرية!",
          contentFr:
            "• Qāf (ق) = 'k' profond depuis l'arrière de la gorge (comme dire 'k' en gargarisant)\n• Kāf (ك) = 'k' régulier comme en anglais\n\nQāf est un son « uvulaire » - le son provient plus à l'arrière que le 'k' régulier. De nombreux dialectes arabes prononcent Qāf comme 'g' ou même comme un coup de glotte !",
        },
        {
          title: "Lām - The Tall One",
          titleAr: "اللام - الحرف الطويل",
          titleFr: "Lām - La lettre longue",
          content:
            "Lām (ل) is one of the tallest letters in Arabic. It looks like Alif (ا) but with a small hook at the bottom.\n\nImportant: Lām appears in 'الـ' (al-), the Arabic word for 'the'. You'll see it constantly!",
          contentAr:
            "اللام (ل) هو أحد أطول الحروف في العربية. يبدو مثل الألف (ا) لكن مع خطاف صغير في الأسفل.\n\nمهم: تظهر اللام في 'الـ' (al-)، كلمة العربية ل 'the'. ستراها باستمرار!",
          contentFr:
            "Lām (ل) est une lettre longue et droite, comme un trait vertical. Elle se prononce 'l' et se connecte aux lettres avant et après.\n\nAstuce : Lām n'a jamais de point - gardez-le propre et simple !",
        },
        {
          title: "Mīm - Round and Friendly",
          titleAr: "الميم - مستدير وودود",
          titleFr: "Mīm - Rond et amical",
          content:
            "Mīm (م) is a round letter that looks like a small circle with a tail. It's one of the most common letters in Arabic.\n\nEasy to remember: Mīm looks like a little 'm' or a round marble!",
          contentAr:
            "الميم (م) حرف مستدير يبدو مثل دائرة صغيرة بذيل. إنه أحد أكثر الحروف شيوعًا في العربية.\n\nسهل التذكر: الميم تبدو مثل 'm' صغيرة أو رخام مستدير!",
          contentFr:
            "Mīm (م) a une forme ronde ressemblant à une vague ou à un bol. Elle se prononce 'm' et crée un son nasal amical.\n\nÉcriture : Lorsqu'elle se connecte à d'autres lettres, Mīm se referme complètement.",
        },
      ],
      vocabulary: [
        {
          arabic: "ق",
          transliteration: "qāf",
          meaning: "Qāf (deep k)",
          meaningAr: "القاف (صوت 'k' عميق)",
        },
        {
          arabic: "ك",
          transliteration: "kāf",
          meaning: "Kāf (k sound)",
          meaningAr: "الكاف (صوت 'k')",
        },
        {
          arabic: "ل",
          transliteration: "lām",
          meaning: "Lām (l sound)",
          meaningAr: "اللام (صوت 'l')",
        },
        {
          arabic: "م",
          transliteration: "mīm",
          meaning: "Mīm (m sound)",
          meaningAr: "الميم (صوت 'm')",
        },
        {
          arabic: "قَمَر",
          transliteration: "qamar",
          meaning: "moon",
          meaningAr: "قمر",
        },
        {
          arabic: "كِتَاب",
          transliteration: "kitāb",
          meaning: "book",
          meaningAr: "كتاب",
        },
        {
          arabic: "لَيْل",
          transliteration: "layl",
          meaning: "night",
          meaningAr: "ليل",
        },
        {
          arabic: "مَاء",
          transliteration: "mā'",
          meaning: "water",
          meaningAr: "ماء",
        },
      ],
    },
    exerciseCount: 18,
    prerequisites: ["1-6"],
  },
  {
    id: "1-8",
    phaseId: 1,
    order: 8,
    title: "Letters 25-28: Nūn, Hā', Wāw, Yā'",
    titleAr: "الحروف ٢٥-٢٨: النون، الهاء، الواو، الياء",
    titleFr: "Lettres 25-28 : Nūn, Hā', Wāw, Yā'",
    description: "Complete the alphabet! Learn the final four letters",
    descriptionAr: "أكمل الأبجدية! تعلم الأحرف الأربعة الأخيرة",
    descriptionFr:
      "Complétez l'alphabet ! Apprenez les quatre dernières lettres",
    objectives: [
      "Recognize Nūn (ن), Hā' (ه), Wāw (و), and Yā' (ي)",
      "Understand Wāw and Yā' as both consonants and vowels",
      "Write all 28 letters from memory",
      "Celebrate completing the alphabet!",
    ],
    objectivesAr: [
      "اعترف بالنون (ن)، الهاء (ه)، الواو (و)، والياء (ي)",
      "افهم الواو والياء كحروف ساكنة وحروف صوتية",
      "اكتب جميع الأحرف الـ 28 من الذاكرة",
      "احتفل بإكمال الأبجدية!",
    ],
    objectivesFr: [
      "Reconnaître Nūn (ن), Hā' (ه), Wāw (و) et Yā' (ي)",
      "Comprendre Wāw et Yā' comme consonnes et voyelles",
      "Écrire les 28 lettres de mémoire",
      "Célébrez l'achèvement de l'alphabet !",
    ],
    estimatedTime: 55,
    difficulty: "easy",
    xpReward: 70,
    content: {
      theory: [
        {
          title: "Nūn - The Dot Bowl",
          titleAr: "النون - وعاء النقطة",
          titleFr: "Nūn - Le récipient du point",
          content:
            "Nūn (ن) looks like a small bowl with a dot above. It makes the 'n' sound.\n\nNūn is a 'sun letter' (حروف شمسية) - when 'ال' comes before it, the 'l' changes to 'n'. We'll learn more about this later!",
          contentAr:
            "النون (ن) تبدو مثل وعاء صغير بنقطة فوقه. ينتج عنها صوت 'n'.\n\nالنون حرف 'شمسي' (حروف شمسية) - عندما يأتي 'ال' قبله، يتغير 'l' إلى 'n'. سنتعلم المزيد عن هذا لاحقًا!",
          contentFr:
            "Nūn (ن) ressemble à Mīm (م) mais avec un seul point. Elle se prononce 'n' et crée un son nasal clair.\n\nAstuce : Si Mīm = récipient vide, alors Nūn = récipient avec UN point !",
        },
        {
          title: "Hā' - The Breathy H",
          titleAr: "الهاء - الـ H المزفزفة",
          titleFr: "Hā' - Le H aspiré",
          content:
            "Hā' (ه) is different from Ḥā' (ح). It's a light, breathy 'h' - like English 'h' in 'hello'.\n\nHā' has many forms depending on position - in the middle of a word it looks like a small 'o' or '∞' shape!",
          contentAr:
            "الهاء (ه) مختلفة عن الحاء (ح). إنها 'h' خفيفة ومزفزفة - مثل الإنجليزية 'h' في 'hello'.\n\nللهاء أشكال كثيرة تبعًا للموضع - في منتصف الكلمة تبدو مثل 'o' صغيرة أو شكل '∞'!",
          contentFr:
            "Hā' (ه) est comme le H anglais avec une légère aspiration. C'est un son respiratoire plutôt qu'une vraie consonne.\n\nAstuce : Hā' n'a qu'une seule forme en position isolée - une boucle simple !",
        },
        {
          title: "The Semi-Vowels: Wāw and Yā'",
          titleAr: "شبه الحروف الصوتية: الواو والياء",
          titleFr: "Semi-voyelles : Wāw et Yā'",
          content:
            "These two letters are special - they can be consonants OR vowels!\n\n• Wāw (و): As consonant = 'w' (like 'water'). As vowel = long 'ū' (like 'boot')\n• Yā' (ي): As consonant = 'y' (like 'yes'). As vowel = long 'ī' (like 'see')\n\nNon-connecting: Wāw never connects forward (like د ر ز).",
          contentAr:
            "هذان الحرفان خاصان - يمكن أن يكونا حروف ساكنة أو صوتية!\n\n• الواو (و): كحرف ساكن = 'w' (مثل 'water'). كحرف صوتي = 'ū' طويل (مثل 'boot')\n• الياء (ي): كحرف ساكن = 'y' (مثل 'yes'). كحرف صوتي = 'ī' طويل (مثل 'see')\n\nغير متصل: الواو لا تتصل أبدًا للأمام (مثل د ر ز).",
          contentFr:
            "Wāw (و) et Yā' (ي) ne sont pas de vraies voyelles, mais pas de vraies consonnes non plus - ce sont des « semi-voyelles ».\n\n• Wāw (و) = 'w' ou 'oo' long (comme dans 'too')\n• Yā' (ي) = 'y' ou 'ee' long (comme dans 'see')\n\nIls sont très flexibles - ils changent selon le contexte !",
        },
        {
          title: "🎉 Congratulations!",
          titleAr: "🎉 مبروك!",
          titleFr: "🎉 Félicitations !",
          content:
            "You've learned all 28 letters of the Arabic alphabet! This is a HUGE achievement. The alphabet is the foundation of everything - and you've mastered it!",
          contentAr:
            "لقد تعلمت جميع الـ 28 حرفًا من الأبجدية العربية! هذا إنجاز ضخم. الأبجدية هي أساس كل شيء - وقد أتقنتها!",
          contentFr:
            "Vous avez maintenant complété les 28 lettres de l'alphabet arabe ! C'est un exploit impressionnant - vous pouvez maintenant lire le texte arabe (bien que certains accents et marquages puissent être nouveaux).\n\nVous êtes prêt pour la Phase 2 : les marques vocales et les compétences de lecture !",
        },
      ],
      vocabulary: [
        {
          arabic: "ن",
          transliteration: "nūn",
          meaning: "Nūn (n sound)",
          meaningAr: "النون (صوت 'n')",
        },
        {
          arabic: "ه",
          transliteration: "hā'",
          meaning: "Hā' (light h)",
          meaningAr: "الهاء (صوت 'h' خفيف)",
        },
        {
          arabic: "و",
          transliteration: "wāw",
          meaning: "Wāw (w/ū sound)",
          meaningAr: "الواو (صوت 'w' أو 'ū')",
        },
        {
          arabic: "ي",
          transliteration: "yā'",
          meaning: "Yā' (y/ī sound)",
          meaningAr: "الياء (صوت 'y' أو 'ī')",
        },
        {
          arabic: "نُور",
          transliteration: "nūr",
          meaning: "light",
          meaningAr: "نور",
        },
        {
          arabic: "هُوَ",
          transliteration: "huwa",
          meaning: "he",
          meaningAr: "هو",
        },
        {
          arabic: "وَرْد",
          transliteration: "ward",
          meaning: "rose",
          meaningAr: "وردة",
        },
        {
          arabic: "يَد",
          transliteration: "yad",
          meaning: "hand",
          meaningAr: "يد",
        },
      ],
    },
    exerciseCount: 20,
    prerequisites: ["1-7"],
  },

  // SECTION 2: LETTER FORMS (Lessons 9-14)
  {
    id: "1-9",
    phaseId: 1,
    order: 9,
    title: "Letter Forms: Introduction",
    titleAr: "أشكال الحروف: مقدمة",
    titleFr: "Formes des lettres : Introduction",
    description: "Learn how Arabic letters change shape based on position",
    descriptionAr: "تعلم كيف تتغير أشكال الحروف العربية بناءً على موضعها",
    descriptionFr:
      "Apprenez comment les lettres arabes changent de forme selon leur position",
    objectives: [
      "Understand the four forms of Arabic letters",
      "Identify isolated, initial, medial, and final forms",
      "Recognize connecting vs. non-connecting letters",
      "Practice reading letters in different positions",
    ],
    objectivesAr: [
      "افهم الأشكال الأربعة للحروف العربية",
      "حدد الأشكال المنعزلة والأولية والوسطية والنهائية",
      "اعترف بالحروف المتصلة مقابل غير المتصلة",
      "تدرب على قراءة الحروف في مواضع مختلفة",
    ],
    objectivesFr: [
      "Comprendre les quatre formes des lettres arabes",
      "Identifier les formes isolées, initiales, médiales et finales",
      "Reconnaître les lettres qui se connectent vs. non connectantes",
      "Pratiquer la lecture des lettres dans différentes positions",
    ],
    estimatedTime: 45,
    difficulty: "easy",
    xpReward: 55,
    content: {
      theory: [
        {
          title: "The Four Forms",
          content:
            "Arabic letters have up to FOUR different shapes depending on where they appear in a word:\n\n1. Isolated (مُفْرَد): Standing alone\n2. Initial (أَوَّلِي): Start of a word\n3. Medial (وَسَطِي): Middle of a word\n4. Final (نِهَائِي): End of a word",
        },
        {
          title: "Why Letters Change",
          content:
            "Arabic is a cursive script - letters flow together like handwriting. The different forms allow smooth connections between letters.\n\nThink of it like cursive English: the 'r' in 'car' looks different from 'r' at the start of 'run'!",
        },
        {
          title: "Non-Connecting Letters",
          content:
            "Remember these 6 letters NEVER connect to the next letter:\nا (alif), د (dāl), ذ (dhāl), ر (rā'), ز (zāy), و (wāw)\n\nThey only have two forms: isolated and final (which look the same!).",
        },
      ],
      vocabulary: ARABIC_ALPHABET.slice(0, 7).map((l) => ({
        arabic: `${l.isolated} ← → ${l.initial}${l.medial}${l.final}`,
        transliteration: l.transliteration,
        meaning: `${l.name} in all forms`,
      })),
    },
    exerciseCount: 15,
    prerequisites: ["1-8"],
  },
  {
    id: "1-10",
    phaseId: 1,
    order: 10,
    title: "Letter Forms: ب ت ث ن ي Group",
    titleAr: "أشكال الحروف: مجموعة ب ت ث ن ي",
    titleFr: "Formes des lettres : Groupe ب ت ث ن ي",
    description: "Master the forms of letters with similar base shapes",
    descriptionAr: "احتقن أشكال الحروف ذات الأشكال الأساسية المتشابهة",
    descriptionFr:
      "Maîtrisez les formes des lettres ayant des formes de base similaires",
    objectives: [
      "Write ب ت ث ن ي in all four forms",
      "Recognize these letters in any position",
      "Practice connecting these letters",
      "Read simple words using these letters",
    ],
    objectivesAr: [
      "اكتب ب ت ث ن ي في جميع الأشكال الأربعة",
      "اعترف بهذه الحروف في أي موضع",
      "تدرب على وصل هذه الحروف",
      "اقرأ كلمات بسيطة باستخدام هذه الحروف",
    ],
    objectivesFr: [
      "Écrire ب ت ث ن ي dans les quatre formes",
      "Reconnaître ces lettres dans n'importe quelle position",
      "Pratiquer la connexion de ces lettres",
      "Lire des mots simples utilisant ces lettres",
    ],
    estimatedTime: 50,
    difficulty: "easy",
    xpReward: 55,
    content: {
      theory: [
        {
          title: "The 'Baseline Scoop' Family",
          content:
            "These five letters share a similar base shape in their initial and medial forms - a small 'scoop' or 'cup' on the baseline:\n\nInitial: بـ تـ ثـ نـ يـ\nMedial: ـبـ ـتـ ـثـ ـنـ ـيـ\n\nThe dots tell them apart!",
        },
        {
          title: "Form Comparison",
          content:
            "Isolated → Initial → Medial → Final:\n• ب → بـ → ـبـ → ـب\n• ت → تـ → ـتـ → ـت\n• ث → ثـ → ـثـ → ـث\n• ن → نـ → ـنـ → ـن\n• ي → يـ → ـيـ → ـي",
        },
        {
          title: "Practice Words",
          content:
            "بَيْت (bayt) = house - see how ب is initial, ي is medial, ت is final\nبِنْت (bint) = girl - ب initial, ن medial, ت final\nثَبَت (thabata) = he proved - ث initial, ب medial, ت final",
        },
      ],
      vocabulary: [
        { arabic: "بَيْت", transliteration: "bayt", meaning: "house" },
        { arabic: "بِنْت", transliteration: "bint", meaning: "girl" },
        { arabic: "نَبِي", transliteration: "nabī", meaning: "prophet" },
        { arabic: "يَوْم", transliteration: "yawm", meaning: "day" },
        {
          arabic: "ثَابِت",
          transliteration: "thābit",
          meaning: "constant/firm",
        },
      ],
    },
    exerciseCount: 16,
    prerequisites: ["1-9"],
  },
  {
    id: "1-11",
    phaseId: 1,
    order: 11,
    title: "Letter Forms: ج ح خ Group",
    titleAr: "أشكال الحروف: مجموعة ج ح خ",
    titleFr: "Formes des lettres : Groupe ج ح خ",
    description: "Master the hook-shaped letters in all positions",
    descriptionAr: "احتقن الحروف على شكل خطاف في جميع المواضع",
    descriptionFr:
      "Maîtrisez les lettres en forme de crochet dans toutes les positions",
    objectives: [
      "Write ج ح خ in all four forms",
      "Understand how the 'hook' shape changes",
      "Practice reading and writing words",
      "Build speed in recognizing these letters",
    ],
    objectivesAr: [
      "اكتب ج ح خ في أشكالها الأربعة",
      "افهم كيف يتغير شكل 'الخطاف'",
      "تدرب على قراءة وكتابة الكلمات",
      "ابني سرعة في التعرف على هذه الحروف",
    ],
    objectivesFr: [
      "Écrire ج ح خ sous leurs quatre formes",
      "Comprendre comment la forme en 'crochet' change",
      "Pratiquer la lecture et l'écriture de mots",
      "Développer la rapidité de reconnaissance de ces lettres",
    ],
    estimatedTime: 45,
    difficulty: "easy",
    xpReward: 50,
    content: {
      theory: [
        {
          title: "The Hook Letters",
          titleAr: "حروف الخطاف",
          titleFr: "Les lettres en crochet",
          content:
            "ج ح خ have a distinctive 'hook' or 'teacup' shape. In initial and medial forms, the hook becomes smaller:\n\nIsolated: ج ح خ (full hook visible)\nInitial: جـ حـ خـ (hook becomes a small curve)\nMedial: ـجـ ـحـ ـخـ (hook is minimized)\nFinal: ـج ـح ـخ (full hook returns)",
          contentAr:
            "ج ح خ لها شكل مميز من 'الخطاف' أو 'فنجان الشاي'. في الأشكال الأولية والوسطية، يصبح الخطاف أصغر:\n\nالمنفصل: ج ح خ (الخطاف كامل مرئي)\nالأول: جـ حـ خـ (الخطاف يصبح منحنى صغير)\nالوسط: ـجـ ـحـ ـخـ (الخطاف مصغر)\nالنهائي: ـج ـح ـخ (الخطاف كامل يعود)",
          contentFr:
            "ج ح خ ont une forme distinctive de 'crochet' ou 'tasse à thé'. Dans les formes initiales et médianes, le crochet devient plus petit :\n\nIsolée : ج ح خ (crochet complet visible)\nInitiale : جـ حـ خـ (le crochet devient une petite courbe)\nMédiane : ـجـ ـحـ ـخـ (le crochet est minimisé)\nFinale : ـج ـح ـخ (le crochet complet revient)",
        },
        {
          title: "Writing Tips",
          titleAr: "نصائح الكتابة",
          titleFr: "Conseils d'écriture",
          content:
            "When writing these letters:\n1. Start from the right\n2. In initial/medial forms, make a small curve\n3. In isolated/final forms, complete the full hook\n4. Add dots last: ج (below), خ (above), ح (none)",
          contentAr:
            "عند كتابة هذه الحروف:\n١. ابدأ من اليمين\n٢. في الأشكال الأولية/الوسطية، اصنع منحنى صغير\n٣. في الأشكال المنفصلة/النهائية، أكمل الخطاف بالكامل\n٤. أضف النقاط أخيراً: ج (أسفل)، خ (أعلى)، ح (لا توجد)",
          contentFr:
            "Lors de l'écriture de ces lettres :\n1. Commencez par la droite\n2. Dans les formes initiales/médianes, faites une petite courbe\n3. Dans les formes isolées/finales, complétez le crochet entier\n4. Ajoutez les points en dernier : ج (en dessous), خ (au-dessus), ح (aucun)",
        },
      ],
      vocabulary: [
        {
          arabic: "جَدِيد",
          transliteration: "jadīd",
          meaning: "new",
          meaningFr: "nouveau",
        },
        {
          arabic: "حَجَر",
          transliteration: "ḥajar",
          meaning: "stone",
          meaningFr: "pierre",
        },
        {
          arabic: "خَرَجَ",
          transliteration: "kharaja",
          meaning: "he went out",
          meaningFr: "il est sorti",
        },
        {
          arabic: "نَحْن",
          transliteration: "naḥnu",
          meaning: "we",
          meaningFr: "nous",
        },
      ],
    },
    exerciseCount: 15,
    prerequisites: ["1-10"],
  },
  {
    id: "1-12",
    phaseId: 1,
    order: 12,
    title: "Letter Forms: س ش ص ض Group",
    titleAr: "أشكال الحروف: مجموعة س ش ص ض",
    titleFr: "Formes des lettres : Groupe س ش ص ض",
    description: "Master the 'tooth' letters and their emphatic variants",
    descriptionAr: "احتقن حروف 'الأسنان' ومتغيراتها الممدودة",
    descriptionFr:
      "Maîtrisez les lettres 'à dents' et leurs variantes emphatiques",
    objectives: [
      "Write س ش ص ض in all four forms",
      "Understand how teeth simplify in connected forms",
      "Distinguish between س/ش and ص/ض shapes",
      "Practice word reading with these letters",
    ],
    objectivesAr: [
      "اكتب س ش ص ض في أشكالها الأربعة",
      "افهم كيف تتبسط الأسنان في الأشكال المتصلة",
      "ميز بين أشكال س/ش و ص/ض",
      "تدرب على قراءة الكلمات باستخدام هذه الحروف",
    ],
    objectivesFr: [
      "Écrire س ش ص ض sous leurs quatre formes",
      "Comprendre comment les dents se simplifient dans les formes connectées",
      "Distinguer les formes س/ش et ص/ض",
      "Pratiquer la lecture de mots avec ces lettres",
    ],
    estimatedTime: 50,
    difficulty: "medium",
    xpReward: 60,
    content: {
      theory: [
        {
          title: "The Tooth Letters",
          titleAr: "حروف الأسنان",
          titleFr: "Les lettres à dents",
          content:
            "س and ش have three 'teeth' in isolated form, but these often simplify when connected:\n\nIsolated: س ش (3 clear teeth)\nInitial: سـ شـ (teeth may be simplified to a flat line)\nMedial: ـسـ ـشـ (often just a wavy line)\nFinal: ـس ـش (teeth visible again)",
          contentAr:
            "س و ش لهما ثلاث 'أسنان' في الشكل المنفصل، لكنها غالباً ما تتبسط عند الربط:\n\nالمنفصل: س ش (٣ أسنان واضحة)\nالأول: سـ شـ (قد تتبسط الأسنان إلى خط مسطح)\nالوسط: ـسـ ـشـ (غالباً مجرد خط متموج)\nالنهائي: ـس ـش (الأسنان مرئية مرة أخرى)",
          contentFr:
            "س et ش ont trois 'dents' sous forme isolée, mais celles-ci se simplifient souvent lorsqu'elles sont connectées :\n\nIsolée : س ش (3 dents visibles)\nInitiale : سـ شـ (les dents peuvent être simplifiées en une ligne plate)\nMédiane : ـسـ ـشـ (souvent juste une ligne ondulée)\nFinale : ـس ـش (les dents sont à nouveau visibles)",
        },
        {
          title: "Emphatic Versions",
          titleAr: "الإصدارات الممدودة",
          titleFr: "Versions emphatiques",
          content:
            "ص and ض are the emphatic versions. They have a distinctive oval/loop shape:\n\nIsolated: ص ض (closed loop + tail)\nThe loop stays consistent in all forms, making them easier to recognize!",
          contentAr:
            "ص و ض هما النسختان الممدودتان. لهما شكل بيضاوي/حلقي مميز:\n\nالمنفصل: ص ض (حلقة مغلقة + ذيل)\nتبقى الحلقة متسقة في جميع الأشكال، مما يسهل التعرف عليها!",
          contentFr:
            "ص et ض sont les versions emphatiques. Elles ont une forme ovale/bouclée distinctive :\n\nIsolée : ص ض (boucle fermée + queue)\nLa boucle reste constante dans toutes les formes, ce qui les rend plus faciles à reconnaître !",
        },
      ],
      vocabulary: [
        {
          arabic: "سَمَك",
          transliteration: "samak",
          meaning: "fish",
          meaningFr: "poisson",
        },
        {
          arabic: "شَجَرَة",
          transliteration: "shajara",
          meaning: "tree",
          meaningFr: "arbre",
        },
        {
          arabic: "صَدِيق",
          transliteration: "ṣadīq",
          meaning: "friend",
          meaningFr: "ami",
        },
        {
          arabic: "أَرْض",
          transliteration: "arḍ",
          meaning: "earth/land",
          meaningFr: "terre/sol",
        },
      ],
    },
    exerciseCount: 16,
    prerequisites: ["1-11"],
  },
  {
    id: "1-13",
    phaseId: 1,
    order: 13,
    title: "Letter Forms: ع غ ف ق Group",
    titleAr: "أشكال الحروف: مجموعة ع غ ف ق",
    titleFr: "Formes des lettres : Groupe ع غ ف ق",
    description: "Master the eye-shaped and loop letters",
    descriptionAr: "احتقن الحروف على شكل عين والحروف الحلقية",
    descriptionFr:
      "Maîtrisez les lettres en forme d'œil et les lettres bouclées",
    objectives: [
      "Write ع غ ف ق in all four forms",
      "Recognize the 'eye' shape of ع غ",
      "Understand the different loops of ف ق",
      "Practice reading complex words",
    ],
    objectivesAr: [
      "اكتب ع غ ف ق في أشكالها الأربعة",
      "اعترف بشكل 'العين' من ع غ",
      "افهم الحلقات المختلفة من ف ق",
      "تدرب على قراءة الكلمات المعقدة",
    ],
    objectivesFr: [
      "Écrire ع غ ف ق sous leurs quatre formes",
      "Reconnaître la forme en 'œil' de ع غ",
      "Comprendre les différentes boucles de ف ق",
      "Pratiquer la lecture de mots complexes",
    ],
    estimatedTime: 50,
    difficulty: "medium",
    xpReward: 60,
    content: {
      theory: [
        {
          title: "The Eye Letters: ع غ",
          titleAr: "حروف العين: ع غ",
          titleFr: "Les lettres en œil : ع غ",
          content:
            "ع and غ are called 'eye' letters because they look like an eye in their isolated form:\n\nIsolated: ع غ (full eye shape)\nInitial: عـ غـ (small opening curve)\nMedial: ـعـ ـغـ (similar to initial)\nFinal: ـع ـغ (full eye returns)",
          contentAr:
            "تُسمى ع و غ حروف 'العين' لأنها تبدو مثل العين في شكلها المنفصل:\n\nالمنفصل: ع غ (شكل العين الكامل)\nالأول: عـ غـ (منحنى فتح صغير)\nالوسط: ـعـ ـغـ (مشابه للأول)\nالنهائي: ـع ـغ (العين الكاملة تعود)",
          contentFr:
            "ع et غ sont appelées lettres 'œil' parce qu'elles ressemblent à un œil sous leur forme isolée :\n\nIsolée : ع غ (forme d'œil complète)\nInitiale : عـ غـ (petite courbe d'ouverture)\nMédiane : ـعـ ـغـ (similaire à l'initiale)\nFinale : ـع ـغ (l'œil complet revient)",
        },
        {
          title: "The Loop Letters: ف ق",
          titleAr: "حروف الحلقة: ف ق",
          titleFr: "Les lettres bouclées : ف ق",
          content:
            "ف and ق both have loops, but different styles:\n• ف: Small loop with dot above, sits on baseline\n• ق: Two dots above, dips BELOW baseline in isolated/final forms\n\nTip: ق looks like it's diving underwater!",
          contentAr:
            "كل من ف و ق لديهما حلقات، لكن بأنماط مختلفة:\n• ف: حلقة صغيرة مع نقطة أعلاه، تجلس على خط الأساس\n• ق: نقطتان أعلاه، تنخفض أسفل خط الأساس في الأشكال المنفصلة/النهائية\n\nنصيحة: ق تبدو وكأنها تغوص تحت الماء!",
          contentFr:
            "ف et ق ont toutes deux des boucles, mais de styles différents :\n• ف : Petite boucle avec un point au-dessus, posée sur la ligne de base\n• ق : Deux points au-dessus, plonge EN DESSOUS de la ligne de base dans les formes isolées/finales\n\nAstuce : ق ressemble à quelqu'un qui plonge sous l'eau !",
        },
      ],
      vocabulary: [
        {
          arabic: "عَرَبِي",
          transliteration: "'arabī",
          meaning: "Arabic/Arab",
          meaningFr: "arabe",
        },
        {
          arabic: "غَنِي",
          transliteration: "ghanī",
          meaning: "rich",
          meaningFr: "riche",
        },
        {
          arabic: "فَرَح",
          transliteration: "faraḥ",
          meaning: "joy",
          meaningFr: "joie",
        },
        {
          arabic: "قَلْب",
          transliteration: "qalb",
          meaning: "heart",
          meaningFr: "cœur",
        },
      ],
    },
    exerciseCount: 16,
    prerequisites: ["1-12"],
  },
  {
    id: "1-14",
    phaseId: 1,
    order: 14,
    title: "Letter Forms: ك ل م ه Group",
    titleAr: "أشكال الحروف: مجموعة ك ل م ه",
    titleFr: "Formes des lettres : Groupe ك ل م ه",
    description: "Master the remaining connecting letters",
    descriptionAr: "احتقن الحروف المتصلة المتبقية",
    descriptionFr: "Maîtrisez les lettres connectées restantes",
    objectives: [
      "Write ك ل م ه in all four forms",
      "Understand Hā's many forms",
      "Practice Lām-Alif combination",
      "Read words with all letter forms",
    ],
    objectivesAr: [
      "اكتب ك ل م ه في أشكالها الأربعة",
      "افهم أشكال الهاء العديدة",
      "تدرب على مجموعة Lām-Alif",
      "اقرأ الكلمات بجميع أشكال الحروف",
    ],
    objectivesFr: [
      "Écrire ك ل م ه sous leurs quatre formes",
      "Comprendre les nombreuses formes de Hā'",
      "Pratiquer la combinaison Lām-Alif",
      "Lire des mots avec toutes les formes de lettres",
    ],
    estimatedTime: 55,
    difficulty: "medium",
    xpReward: 60,
    content: {
      theory: [
        {
          title: "Kāf and Lām",
          titleAr: "الكاف واللام",
          titleFr: "Kāf et Lām",
          content:
            "ك (Kāf) has a distinctive zig-zag top in isolated form that simplifies when connected.\n\nل (Lām) is the tall letter - it's essentially a vertical stroke. When followed by Alif, it creates a special ligature: لا (lām-alif).",
          contentAr:
            "ك (الكاف) لها قمة متعرجة مميزة في الشكل المنفصل تتبسط عند الربط.\n\nل (اللام) هي الحرف الطويل - إنها في الأساس خط عمودي. عند متابعتها بألف، تنشئ ربطة خاصة: لا (لام-ألف).",
          contentFr:
            "ك (Kāf) a un sommet en zigzag distinctif sous forme isolée qui se simplifie lorsqu'elle est connectée.\n\nل (Lām) est la lettre haute - c'est essentiellement un trait vertical. Lorsqu'elle est suivie d'Alif, elle crée une ligature spéciale : لا (lām-alif).",
        },
        {
          title: "Mīm - The Round Letter",
          titleAr: "الميم - الحرف المستدير",
          titleFr: "Mīm - La lettre ronde",
          content:
            "م (Mīm) has a nice round shape:\nIsolated: م (circle with tail)\nInitial: مـ (open circle curve)\nMedial: ـمـ (small bump on line)\nFinal: ـم (circle returns)",
          contentAr:
            "م (الميم) لها شكل مستدير لطيف:\nالمنفصل: م (دائرة مع ذيل)\nالأول: مـ (منحنى دائرة مفتوحة)\nالوسط: ـمـ (نتوء صغير على الخط)\nالنهائي: ـم (الدائرة تعود)",
          contentFr:
            "م (Mīm) a une belle forme ronde :\nIsolée : م (cercle avec queue)\nInitiale : مـ (courbe de cercle ouvert)\nMédiane : ـمـ (petite bosse sur la ligne)\nFinale : ـم (le cercle revient)",
        },
        {
          title: "Hā' - The Chameleon",
          titleAr: "الهاء - الحرف المتقلب",
          titleFr: "Hā' - Le caméléon",
          content:
            "ه (Hā') is unique - it has VERY different forms:\nIsolated: ه (like a small 'h')\nInitial: هـ (like a small hat)\nMedial: ـهـ (like '∞' or two loops)\nFinal: ـه (like isolated)\n\nDon't worry - you'll recognize it with practice!",
          contentAr:
            "ه (الهاء) فريدة - لديها أشكال مختلفة جداً:\nالمنفصل: ه (مثل 'h' صغير)\nالأول: هـ (مثل قبعة صغيرة)\nالوسط: ـهـ (مثل '∞' أو حلقتين)\nالنهائي: ـه (مثل المنفصل)\n\nلا تقلق - ستتعرف عليها مع الممارسة!",
          contentFr:
            "ه (Hā') est unique - elle a des formes TRÈS différentes :\nIsolée : ه (comme un petit 'h')\nInitiale : هـ (comme un petit chapeau)\nMédiane : ـهـ (comme '∞' ou deux boucles)\nFinale : ـه (comme isolée)\n\nNe vous inquiétez pas - vous la reconnaîtrez avec la pratique !",
        },
      ],
      vocabulary: [
        {
          arabic: "كَبِير",
          transliteration: "kabīr",
          meaning: "big",
          meaningFr: "grand",
        },
        {
          arabic: "لَا",
          transliteration: "lā",
          meaning: "no",
          meaningFr: "non",
        },
        {
          arabic: "مَلِك",
          transliteration: "malik",
          meaning: "king",
          meaningFr: "roi",
        },
        {
          arabic: "هَذَا",
          transliteration: "hādhā",
          meaning: "this",
          meaningFr: "ceci",
        },
      ],
    },
    exerciseCount: 18,
    prerequisites: ["1-13"],
  },

  // SECTION 3: VOWEL MARKS (Lessons 15-18)
  {
    id: "1-15",
    phaseId: 1,
    order: 15,
    title: "Short Vowels: Fatḥa, Kasra, Ḍamma",
    titleAr: "الحركات القصيرة: الفتحة والكسرة والضمة",
    titleFr: "Voyelles courtes : Fatḥa, Kasra, Ḍamma",
    description: "Learn the three short vowel marks (harakat)",
    descriptionAr: "تعلم علامات الحروف الصوتية القصيرة الثلاثة (حرakat)",
    descriptionFr: "Apprenez les trois signes de voyelles courtes (harakat)",
    objectives: [
      "Recognize Fatḥa (َ), Kasra (ِ), and Ḍamma (ُ)",
      "Pronounce each vowel sound correctly",
      "Read letters with vowel marks",
      "Understand vowel placement above/below letters",
    ],
    objectivesAr: [
      "اعترف بـ Fatḥa (َ)، Kasra (ِ)، و Ḍamma (ُ)",
      "نطق كل صوت حرف صوتي بشكل صحيح",
      "اقرأ الحروف بعلامات الحروف الصوتية",
      "افهم موضع الحروف الصوتية فوق/تحت الحروف",
    ],
    objectivesFr: [
      "Reconnaître Fatḥa (َ), Kasra (ِ) et Ḍamma (ُ)",
      "Prononcer chaque son de voyelle correctement",
      "Lire les lettres avec les signes de voyelles",
      "Comprendre le placement des voyelles au-dessus/en dessous des lettres",
    ],
    estimatedTime: 50,
    difficulty: "easy",
    xpReward: 55,
    content: {
      theory: [
        {
          title: "What Are Harakat?",
          titleAr: "ما هي الحركات؟",
          titleFr: "Que sont les Harakat ?",
          content:
            "Harakat (حَرَكَات) are small marks placed above or below letters to indicate vowel sounds. Written Arabic for learners and religious texts includes these marks; everyday Arabic often omits them.\n\nThink of them as training wheels - they help you read correctly!",
          contentAr:
            "الحركات (حَرَكَات) هي علامات صغيرة توضع فوق أو تحت الحروف للإشارة إلى أصوات الحروف الصوتية. اللغة العربية المكتوبة للمتعلمين والنصوص الدينية تتضمن هذه العلامات؛ غالباً ما يحذفها العرب العاديون.\n\nفكر فيها كعجلات التدريب - فهي تساعدك على القراءة بشكل صحيح!",
          contentFr:
            "Les Harakat (حَرَكَات) sont de petits signes placés au-dessus ou en dessous des lettres pour indiquer les sons des voyelles. L'arabe écrit pour les apprenants et les textes religieux inclut ces signes ; l'arabe quotidien les omet souvent.\n\nConsidérez-les comme des roues d'entraînement - ils vous aident à lire correctement !",
        },
        {
          title: "The Three Short Vowels",
          titleAr: "الحروف الصوتية القصيرة الثلاثة",
          titleFr: "Les trois voyelles courtes",
          content:
            "• Fatḥa (فَتْحَة) = ـَ = 'a' sound (like 'cat')\n  Written ABOVE the letter\n\n• Kasra (كَسْرَة) = ـِ = 'i' sound (like 'sit')\n  Written BELOW the letter\n\n• Ḍamma (ضَمَّة) = ـُ = 'u' sound (like 'put')\n  Written ABOVE the letter (looks like small و)",
          contentAr:
            "• الفتحة (فَتْحَة) = ـَ = صوت 'a' (مثل 'cat')\n  مكتوب فوق الحرف\n\n• الكسرة (كَسْرَة) = ـِ = صوت 'i' (مثل 'sit')\n  مكتوب تحت الحرف\n\n• الضمة (ضَمَّة) = ـُ = صوت 'u' (مثل 'put')\n  مكتوب فوق الحرف (يشبه و صغير)",
          contentFr:
            "• Fatḥa (فَتْحَة) = ـَ = son 'a' (comme dans 'patte')\n  Écrit AU-DESSUS de la lettre\n\n• Kasra (كَسْرَة) = ـِ = son 'i' (comme dans 'lit')\n  Écrit EN DESSOUS de la lettre\n\n• Ḍamma (ضَمَّة) = ـُ = son 'ou' (comme dans 'tout')\n  Écrit AU-DESSUS de la lettre (ressemble à un petit و)",
        },
        {
          title: "Examples",
          titleAr: "أمثلة",
          titleFr: "Exemples",
          content:
            "بَ (ba) بِ (bi) بُ (bu)\nتَ (ta) تِ (ti) تُ (tu)\nكَ (ka) كِ (ki) كُ (ku)\n\nThe consonant stays the same - only the vowel changes!",
          contentAr:
            "بَ (ba) بِ (bi) بُ (bu)\nتَ (ta) تِ (ti) تُ (tu)\nكَ (ka) كِ (ki) كُ (ku)\n\nيبقى الحرف الساكن كما هو - فقط الحرف الصوتي يتغير!",
          contentFr:
            "بَ (ba) بِ (bi) بُ (bou)\nتَ (ta) تِ (ti) تُ (tou)\nكَ (ka) كِ (ki) كُ (kou)\n\nLa consonne reste la même - seule la voyelle change !",
        },
      ],
      vocabulary: ARABIC_HARAKAT.slice(0, 3).map((h) => ({
        arabic: h.mark,
        transliteration: h.name.toLowerCase(),
        meaning: `${h.name} - ${h.description}`,
      })),
    },
    exerciseCount: 18,
    prerequisites: ["1-14"],
  },
  {
    id: "1-16",
    phaseId: 1,
    order: 16,
    title: "Sukūn and Shadda",
    titleAr: "السكون والشدة",
    titleFr: "Sukūn et Shadda",
    description: "Learn marks for no vowel (sukūn) and doubling (shadda)",
    descriptionAr: "تعلم علامات عدم وجود حرف صوتي (sukūn) والتضعيف (shadda)",
    descriptionFr:
      "Apprenez les signes d'absence de voyelle (sukūn) et de redoublement (shadda)",
    objectives: [
      "Recognize Sukūn (ْ) and Shadda (ّ)",
      "Understand consonant clusters with sukūn",
      "Pronounce doubled consonants correctly",
      "Read words with all diacritical marks",
    ],
    objectivesAr: [
      "اعترف بـ Sukūn (ْ) و Shadda (ّ)",
      "افهم مجموعات الحروف الساكنة مع sukūn",
      "نطق الحروف الساكنة المضعفة بشكل صحيح",
      "اقرأ الكلمات بجميع علامات الترقيم",
    ],
    objectivesFr: [
      "Reconnaître Sukūn (ْ) et Shadda (ّ)",
      "Comprendre les groupes de consonnes avec sukūn",
      "Prononcer correctement les consonnes doublées",
      "Lire des mots avec tous les signes diacritiques",
    ],
    estimatedTime: 50,
    difficulty: "medium",
    xpReward: 60,
    content: {
      theory: [
        {
          title: "Sukūn - No Vowel",
          titleFr: "Sukūn - Absence de voyelle",
          content:
            "Sukūn (سُكُون) = ـْ = NO vowel sound\n\nIt looks like a small circle above the letter. When you see sukūn, pronounce ONLY the consonant, then move immediately to the next letter.\n\nExample: كَتْب (katb) - the 't' has no vowel, goes directly to 'b'",
          contentFr:
            "Sukūn (سُكُون) = ـْ = AUCUN son de voyelle\n\nIl ressemble à un petit cercle au-dessus de la lettre. Quand vous voyez sukūn, prononcez SEULEMENT la consonne, puis passez immédiatement à la lettre suivante.\n\nExemple : كَتْب (katb) - le 't' n'a pas de voyelle, passe directement au 'b'",
        },
        {
          title: "Shadda - Double Consonant",
          titleFr: "Shadda - Consonne doublée",
          content:
            "Shadda (شَدَّة) = ـّ = DOUBLE the consonant\n\nIt looks like a small 'w' above the letter. When you see shadda, hold the consonant longer - like saying it twice.\n\nExample: كَتَّبَ (kattaba) - the 't' is doubled/held longer",
          contentFr:
            "Shadda (شَدَّة) = ـّ = DOUBLER la consonne\n\nIl ressemble à un petit 'w' au-dessus de la lettre. Quand vous voyez shadda, maintenez la consonne plus longtemps - comme si vous la disiez deux fois.\n\nExemple : كَتَّبَ (kattaba) - le 't' est doublé/maintenu plus longtemps",
        },
        {
          title: "Shadda + Vowel",
          titleFr: "Shadda + Voyelle",
          content:
            "Shadda often appears WITH a short vowel:\n• ـَّ = doubled consonant + 'a'\n• ـِّ = doubled consonant + 'i'\n• ـُّ = doubled consonant + 'u'\n\nExample: مُدَرِّس (mudarris) = teacher - the 'r' is doubled with kasra",
          contentFr:
            "La Shadda apparaît souvent AVEC une voyelle courte :\n• ـَّ = consonne doublée + 'a'\n• ـِّ = consonne doublée + 'i'\n• ـُّ = consonne doublée + 'ou'\n\nExemple : مُدَرِّس (mudarris) = professeur - le 'r' est doublé avec kasra",
        },
      ],
      vocabulary: [
        {
          arabic: "سُكُون",
          transliteration: "sukūn",
          meaning: "sukūn (no vowel mark)",
          meaningFr: "sukūn (signe d'absence de voyelle)",
        },
        {
          arabic: "شَدَّة",
          transliteration: "shadda",
          meaning: "shadda (doubling mark)",
          meaningFr: "shadda (signe de redoublement)",
        },
        {
          arabic: "كُرْسِي",
          transliteration: "kursī",
          meaning: "chair",
          meaningFr: "chaise",
        },
        {
          arabic: "حُبّ",
          transliteration: "ḥubb",
          meaning: "love",
          meaningFr: "amour",
        },
      ],
    },
    exerciseCount: 16,
    prerequisites: ["1-15"],
  },
  {
    id: "1-17",
    phaseId: 1,
    order: 17,
    title: "Tanwīn (Nunation)",
    titleAr: "التنوين",
    titleFr: "Tanwīn (Nounation)",
    description: "Learn the 'n' sound endings for indefinite nouns",
    descriptionAr: "تعلم صوت 'n' النهائي للأسماء غير المحددة",
    descriptionFr: "Apprenez les terminaisons en 'n' pour les noms indéfinis",
    objectives: [
      "Recognize the three tanwīn marks",
      "Understand tanwīn indicates indefiniteness",
      "Pronounce tanwīn correctly",
      "Distinguish tanwīn from regular nūn",
    ],
    objectivesAr: [
      "اعترف بالثلاث علامات tanwīn",
      "افهم أن tanwīn يشير إلى عدم التحديد",
      "نطق tanwīn بشكل صحيح",
      "ميز tanwīn عن nūn العادي",
    ],
    objectivesFr: [
      "Reconnaître les trois signes de tanwīn",
      "Comprendre que le tanwīn indique l'indéfinition",
      "Prononcer le tanwīn correctement",
      "Distinguer le tanwīn du nūn régulier",
    ],
    estimatedTime: 45,
    difficulty: "medium",
    xpReward: 55,
    content: {
      theory: [
        {
          title: "What is Tanwīn?",
          titleFr: "Qu'est-ce que le Tanwīn ?",
          content:
            "Tanwīn (تَنْوِين) adds an 'n' sound to the end of words. It indicates that a noun is indefinite (like 'a book' vs 'the book').\n\nTanwīn literally means 'adding nūn' - you're essentially adding a hidden ن to the word!",
          contentFr:
            "Le Tanwīn (تَنْوِين) ajoute un son 'n' à la fin des mots. Il indique qu'un nom est indéfini (comme 'un livre' vs 'le livre').\n\nTanwīn signifie littéralement 'ajouter nūn' - vous ajoutez essentiellement un ن caché au mot !",
        },
        {
          title: "The Three Tanwīn",
          titleFr: "Les trois Tanwīn",
          content:
            "• Fatḥatān (فَتْحَتَان) = ـً = 'an' sound\n• Kasratān (كَسْرَتَان) = ـٍ = 'in' sound\n• Ḍammatān (ضَمَّتَان) = ـٌ = 'un' sound\n\nNotice they look like doubled versions of the short vowels!",
          contentFr:
            "• Fatḥatān (فَتْحَتَان) = ـً = son 'an'\n• Kasratān (كَسْرَتَان) = ـٍ = son 'in'\n• Ḍammatān (ضَمَّتَان) = ـٌ = son 'oun'\n\nRemarquez qu'ils ressemblent à des versions doublées des voyelles courtes !",
        },
        {
          title: "Examples",
          titleFr: "Exemples",
          content:
            "كِتَابٌ (kitābun) = a book\nكِتَابًا (kitāban) = a book (accusative)\nكِتَابٍ (kitābin) = a book (genitive)\n\nCompare: الكِتَاب (al-kitāb) = THE book (no tanwīn!)",
          contentFr:
            "كِتَابٌ (kitābun) = un livre\nكِتَابًا (kitāban) = un livre (accusatif)\nكِتَابٍ (kitābin) = un livre (génitif)\n\nComparez : الكِتَاب (al-kitāb) = LE livre (pas de tanwīn !)",
        },
      ],
      vocabulary: ARABIC_HARAKAT.slice(5, 8).map((h) => ({
        arabic: h.mark,
        transliteration: h.name.toLowerCase(),
        meaning: h.description,
      })),
    },
    exerciseCount: 15,
    prerequisites: ["1-16"],
  },
  {
    id: "1-18",
    phaseId: 1,
    order: 18,
    title: "Long Vowels: Alif, Wāw, Yā'",
    titleAr: "حروف المد: الألف والواو والياء",
    titleFr: "Voyelles longues : Alif, Wāw, Yā'",
    description: "Master the long vowel sounds using vowel letters",
    descriptionAr:
      "احتقن أصوات الحروف الصوتية الطويلة باستخدام حروف الحروف الصوتية",
    descriptionFr:
      "Maîtrisez les sons des voyelles longues à l'aide des lettres voyelles",
    objectives: [
      "Understand how ا و ي represent long vowels",
      "Distinguish short vs. long vowel sounds",
      "Read words with long vowels correctly",
      "Practice vowel length in pronunciation",
    ],
    objectivesAr: [
      "افهم كيف تمثل ا و ي الحروف الصوتية الطويلة",
      "ميز بين أصوات الحروف الصوتية القصيرة والطويلة",
      "اقرأ الكلمات بالحروف الصوتية الطويلة بشكل صحيح",
      "تدرب على طول الحروف الصوتية في النطق",
    ],
    objectivesFr: [
      "Comprendre comment ا و ي représentent les voyelles longues",
      "Distinguer les sons des voyelles courtes et longues",
      "Lire correctement les mots avec des voyelles longues",
      "Pratiquer la longueur des voyelles dans la prononciation",
    ],
    estimatedTime: 50,
    difficulty: "medium",
    xpReward: 60,
    content: {
      theory: [
        {
          title: "Long Vowels in Arabic",
          titleFr: "Les voyelles longues en arabe",
          content:
            "Arabic has THREE long vowels, each twice as long as their short counterpart:\n\n• ا (alif) = long 'ā' (like 'father') - preceded by fatḥa\n• و (wāw) = long 'ū' (like 'moon') - preceded by ḍamma\n• ي (yā') = long 'ī' (like 'machine') - preceded by kasra",
          contentFr:
            "L'arabe a TROIS voyelles longues, chacune deux fois plus longue que sa contrepartie courte :\n\n• ا (alif) = 'ā' long (comme dans 'pâte') - précédé de fatḥa\n• و (wāw) = 'ū' long (comme dans 'où') - précédé de ḍamma\n• ي (yā') = 'ī' long (comme dans 'ami') - précédé de kasra",
        },
        {
          title: "Short vs. Long Comparison",
          titleFr: "Comparaison courte vs longue",
          content:
            "Short → Long:\n• ـَ (a) → ـَا (ā): كَتَبَ (kataba) vs كَاتِب (kātib)\n• ـُ (u) → ـُو (ū): كُتُب (kutub) vs نُور (nūr)\n• ـِ (i) → ـِي (ī): مِن (min) vs دِين (dīn)\n\nLong vowels are held about twice as long!",
          contentFr:
            "Courte → Longue :\n• ـَ (a) → ـَا (ā) : كَتَبَ (kataba) vs كَاتِب (kātib)\n• ـُ (ou) → ـُو (ū) : كُتُب (kutub) vs نُور (nūr)\n• ـِ (i) → ـِي (ī) : مِن (min) vs دِين (dīn)\n\nLes voyelles longues sont tenues environ deux fois plus longtemps !",
        },
        {
          title: "Why Vowel Length Matters",
          titleFr: "Pourquoi la longueur des voyelles est importante",
          content:
            "Vowel length can change meaning:\n• قَلْب (qalb) = heart (short 'a')\n• كَالِب (qālib) = mold/form (long 'ā')\n• صَنَعَ (ṣana'a) = he made (short 'a')\n• صَانِع (ṣāni') = maker (long 'ā')",
          contentFr:
            "La longueur des voyelles peut changer le sens :\n• قَلْب (qalb) = cœur ('a' court)\n• كَالِب (qālib) = moule/forme ('ā' long)\n• صَنَعَ (ṣana'a) = il a fait ('a' court)\n• صَانِع (ṣāni') = fabricant ('ā' long)",
        },
      ],
      vocabulary: [
        {
          arabic: "كِتَاب",
          transliteration: "kitāb",
          meaning: "book (long ā)",
          meaningFr: "livre (ā long)",
        },
        {
          arabic: "نُور",
          transliteration: "nūr",
          meaning: "light (long ū)",
          meaningFr: "lumière (ū long)",
        },
        {
          arabic: "كَبِير",
          transliteration: "kabīr",
          meaning: "big (long ī)",
          meaningFr: "grand (ī long)",
        },
        {
          arabic: "سَمَاء",
          transliteration: "samā'",
          meaning: "sky (long ā)",
          meaningFr: "ciel (ā long)",
        },
      ],
    },
    exerciseCount: 17,
    prerequisites: ["1-17"],
  },

  // SECTION 4: READING PRACTICE (Lessons 19-22)
  {
    id: "1-19",
    phaseId: 1,
    order: 19,
    title: "Reading: Two-Letter Words",
    titleAr: "القراءة: كلمات من حرفين",
    titleFr: "Lecture : Mots de deux lettres",
    description: "Practice reading simple two-letter Arabic words",
    descriptionAr: "تدرب على قراءة كلمات عربية بسيطة من حرفين",
    descriptionFr:
      "Entraînez-vous à lire des mots arabes simples de deux lettres",
    objectives: [
      "Read two-letter words fluently",
      "Apply letter forms knowledge",
      "Use vowel marks for correct pronunciation",
      "Build reading confidence",
    ],
    objectivesAr: [
      "اقرأ كلمات من حرفين بسهولة",
      "طبق معرفة أشكال الحروف",
      "استخدم علامات الحروف الصوتية للنطق الصحيح",
      "ابني ثقة القراءة",
    ],
    objectivesFr: [
      "Lire couramment les mots de deux lettres",
      "Appliquer la connaissance des formes de lettres",
      "Utiliser les signes de voyelles pour une prononciation correcte",
      "Développer la confiance en lecture",
    ],
    estimatedTime: 40,
    difficulty: "easy",
    xpReward: 50,
    content: {
      theory: [
        {
          title: "Starting Simple",
          titleFr: "Commencer simplement",
          content:
            "Let's practice reading the simplest Arabic words - those with just two letters. Focus on:\n1. Identifying each letter\n2. Reading the vowel marks\n3. Pronouncing smoothly",
          contentFr:
            "Pratiquons la lecture des mots arabes les plus simples - ceux avec seulement deux lettres. Concentrez-vous sur :\n1. Identifier chaque lettre\n2. Lire les signes de voyelles\n3. Prononcer en douceur",
        },
        {
          title: "Two-Letter Word Patterns",
          titleFr: "Schémas des mots de deux lettres",
          content:
            "Common patterns:\n• CVC: مِنْ (min) = from\n• CV: لَا (lā) = no\n• CVC: قَدْ (qad) = already\n\n(C = consonant, V = vowel)",
          contentFr:
            "Schémas courants :\n• CVC : مِنْ (min) = de\n• CV : لَا (lā) = non\n• CVC : قَدْ (qad) = déjà\n\n(C = consonne, V = voyelle)",
        },
      ],
      vocabulary: [
        {
          arabic: "مِنْ",
          transliteration: "min",
          meaning: "from",
          meaningFr: "de",
        },
        {
          arabic: "إِلَى",
          transliteration: "ilā",
          meaning: "to",
          meaningFr: "vers/à",
        },
        {
          arabic: "أَبْ",
          transliteration: "ab",
          meaning: "father",
          meaningFr: "père",
        },
        {
          arabic: "أُمّ",
          transliteration: "umm",
          meaning: "mother",
          meaningFr: "mère",
        },
        {
          arabic: "فِي",
          transliteration: "fī",
          meaning: "in",
          meaningFr: "dans",
        },
        {
          arabic: "عَنْ",
          transliteration: "'an",
          meaning: "about",
          meaningFr: "à propos de",
        },
        {
          arabic: "لَا",
          transliteration: "lā",
          meaning: "no",
          meaningFr: "non",
        },
        {
          arabic: "أَوْ",
          transliteration: "aw",
          meaning: "or",
          meaningFr: "ou",
        },
      ],
    },
    exerciseCount: 14,
    prerequisites: ["1-18"],
  },
  {
    id: "1-20",
    phaseId: 1,
    order: 20,
    title: "Reading: Three-Letter Words",
    titleAr: "القراءة: كلمات من ثلاثة حروف",
    titleFr: "Lecture : Mots de trois lettres",
    description: "Practice reading three-letter root words",
    descriptionAr: "تدرب على قراءة كلمات جذرية من ثلاثة أحرف",
    descriptionFr: "Entraînez-vous à lire des mots racines de trois lettres",
    objectives: [
      "Read three-letter words fluently",
      "Understand the concept of Arabic roots",
      "Recognize common word patterns",
      "Improve reading speed",
    ],
    objectivesAr: [
      "اقرأ كلمات من ثلاثة أحرف بسهولة",
      "افهم مفهوم الجذور العربية",
      "اعترف بأنماط الكلمات الشائعة",
      "حسّن سرعة القراءة",
    ],
    objectivesFr: [
      "Lire couramment les mots de trois lettres",
      "Comprendre le concept des racines arabes",
      "Reconnaître les schémas de mots courants",
      "Améliorer la vitesse de lecture",
    ],
    estimatedTime: 50,
    difficulty: "easy",
    xpReward: 55,
    content: {
      theory: [
        {
          title: "The Power of Three",
          titleFr: "La puissance du trois",
          content:
            "Most Arabic words are built on THREE-LETTER ROOTS. This is the foundation of Arabic vocabulary!\n\nExample: The root ك-ت-ب (k-t-b) relates to writing:\n• كَتَبَ (kataba) = he wrote\n• كِتَاب (kitāb) = book\n• كَاتِب (kātib) = writer\n• مَكْتَبَة (maktaba) = library",
          contentFr:
            "La plupart des mots arabes sont construits sur des RACINES DE TROIS LETTRES. C'est la base du vocabulaire arabe !\n\nExemple : La racine ك-ت-ب (k-t-b) est liée à l'écriture :\n• كَتَبَ (kataba) = il a écrit\n• كِتَاب (kitāb) = livre\n• كَاتِب (kātib) = écrivain\n• مَكْتَبَة (maktaba) = bibliothèque",
        },
        {
          title: "Reading Strategy",
          titleFr: "Stratégie de lecture",
          content:
            "For three-letter words:\n1. Identify all three letters\n2. Check for vowel marks\n3. Sound out letter by letter\n4. Then blend smoothly",
          contentFr:
            "Pour les mots de trois lettres :\n1. Identifiez les trois lettres\n2. Vérifiez les signes de voyelles\n3. Prononcez lettre par lettre\n4. Puis enchaînez en douceur",
        },
      ],
      vocabulary: [
        {
          arabic: "كَتَبَ",
          transliteration: "kataba",
          meaning: "he wrote",
          meaningFr: "il a écrit",
        },
        {
          arabic: "قَرَأَ",
          transliteration: "qara'a",
          meaning: "he read",
          meaningFr: "il a lu",
        },
        {
          arabic: "ذَهَبَ",
          transliteration: "dhahaba",
          meaning: "he went",
          meaningFr: "il est allé",
        },
        {
          arabic: "وَلَد",
          transliteration: "walad",
          meaning: "boy",
          meaningFr: "garçon",
        },
        {
          arabic: "بَيْت",
          transliteration: "bayt",
          meaning: "house",
          meaningFr: "maison",
        },
        {
          arabic: "شَمْس",
          transliteration: "shams",
          meaning: "sun",
          meaningFr: "soleil",
        },
      ],
    },
    exerciseCount: 16,
    prerequisites: ["1-19"],
  },
  {
    id: "1-21",
    phaseId: 1,
    order: 21,
    title: "Reading: Common Words",
    titleAr: "القراءة: كلمات شائعة",
    titleFr: "Lecture : Mots courants",
    description: "Learn to read the most frequent Arabic words",
    descriptionAr: "تعلم قراءة أكثر الكلمات العربية شيوعًا",
    descriptionFr: "Apprenez à lire les mots arabes les plus fréquents",
    objectives: [
      "Read the 20 most common Arabic words",
      "Recognize high-frequency vocabulary",
      "Practice reading without vowel marks",
      "Build practical reading skills",
    ],
    objectivesAr: [
      "اقرأ أكثر 20 كلمة عربية شيوعًا",
      "اعترف بالمفردات عالية التكرار",
      "تدرب على القراءة بدون علامات الحروف الصوتية",
      "ابني مهارات القراءة العملية",
    ],
    objectivesFr: [
      "Lire les 20 mots arabes les plus courants",
      "Reconnaître le vocabulaire à haute fréquence",
      "S'entraîner à lire sans marques de voyelles",
      "Développer des compétences pratiques en lecture",
    ],
    estimatedTime: 50,
    difficulty: "medium",
    xpReward: 60,
    content: {
      theory: [
        {
          title: "High-Frequency Words",
          titleFr: "Mots à haute fréquence",
          content:
            "Learning the most common words helps you read faster. These 20 words appear in almost every Arabic text!",
          contentFr:
            "Apprendre les mots les plus courants vous aide à lire plus vite. Ces 20 mots apparaissent dans presque tous les textes arabes !",
        },
        {
          title: "Reading Without Vowels",
          titleFr: "Lire sans voyelles",
          content:
            "Native Arabic is usually written WITHOUT vowel marks. Don't panic! Context and word patterns will guide you. Start with familiar words to build confidence.",
          contentFr:
            "L'arabe natif est généralement écrit SANS marques de voyelles. Pas de panique ! Le contexte et les motifs des mots vous guideront. Commencez par des mots familiers pour prendre confiance.",
        },
      ],
      vocabulary: [
        {
          arabic: "هُوَ",
          transliteration: "huwa",
          meaning: "he",
          meaningFr: "il",
        },
        {
          arabic: "هِيَ",
          transliteration: "hiya",
          meaning: "she",
          meaningFr: "elle",
        },
        {
          arabic: "هُمْ",
          transliteration: "hum",
          meaning: "they (m)",
          meaningFr: "ils",
        },
        {
          arabic: "أَنَا",
          transliteration: "anā",
          meaning: "I",
          meaningFr: "je",
        },
        {
          arabic: "أَنْتَ",
          transliteration: "anta",
          meaning: "you (m)",
          meaningFr: "tu/vous (m)",
        },
        {
          arabic: "مَاذَا",
          transliteration: "mādhā",
          meaning: "what",
          meaningFr: "quoi",
        },
        {
          arabic: "لِمَاذَا",
          transliteration: "limādhā",
          meaning: "why",
          meaningFr: "pourquoi",
        },
        {
          arabic: "كَيْفَ",
          transliteration: "kayfa",
          meaning: "how",
          meaningFr: "comment",
        },
        {
          arabic: "أَيْنَ",
          transliteration: "ayna",
          meaning: "where",
          meaningFr: "où",
        },
        {
          arabic: "مَتَى",
          transliteration: "matā",
          meaning: "when",
          meaningFr: "quand",
        },
      ],
    },
    exerciseCount: 18,
    prerequisites: ["1-20"],
  },
  {
    id: "1-22",
    phaseId: 1,
    order: 22,
    title: "Reading: Simple Sentences",
    titleAr: "القراءة: جمل بسيطة",
    titleFr: "Lecture : Phrases simples",
    description: "Practice reading short Arabic sentences",
    descriptionAr: "ممارسة قراءة جمل عربية قصيرة",
    descriptionFr: "Entraînez-vous à lire des phrases courtes en arabe",
    objectives: [
      "Read simple Arabic sentences",
      "Understand basic sentence structure",
      "Recognize word boundaries",
      "Build comprehension skills",
    ],
    objectivesAr: [
      "قراءة جمل عربية بسيطة",
      "فهم البنية الأساسية للجملة",
      "التعرف على حدود الكلمات",
      "تطوير مهارات الفهم القرائي",
    ],
    objectivesFr: [
      "Lire des phrases arabes simples",
      "Comprendre la structure de base des phrases",
      "Reconnaître les limites des mots",
      "Développer des compétences de compréhension",
    ],
    estimatedTime: 55,
    difficulty: "medium",
    xpReward: 65,
    content: {
      theory: [
        {
          title: "Arabic Sentence Structure",
          titleAr: "بنية الجملة العربية",
          titleFr: "Structure des phrases arabes",
          content:
            "Arabic sentences can start with either:\n1. A verb (VSO): ذَهَبَ الوَلَدُ (went the-boy = The boy went)\n2. A noun (SVO): الوَلَدُ ذَهَبَ (the-boy went = The boy went)\n\nBoth are correct! Verb-first is more common in formal Arabic.",
          contentAr:
            "يمكن للجملة العربية أن تبدأ بأي من الآتي:\n1. فعل (نمط ف ف م): ذَهَبَ الوَلَدُ (ذهب الولد)\n2. اسم (نمط م ف): الوَلَدُ ذَهَبَ (الولد ذهب)\n\nكلا النمطين صحيح! البدء بالفعل أكثر شيوعًا في العربية الفصحى.",
          contentFr:
            "Les phrases arabes peuvent commencer par :\n1. Un verbe (VSO) : ذَهَبَ الوَلَدُ (est allé le-garçon = Le garçon est allé)\n2. Un nom (SVO) : الوَلَدُ ذَهَبَ (le-garçon est allé = Le garçon est allé)\n\nLes deux sont corrects ! Verbe en premier est plus courant en arabe formel.",
        },
        {
          title: "Reading Tips for Sentences",
          titleAr: "نصائح القراءة للجمل",
          titleFr: "Conseils de lecture pour les phrases",
          content:
            "1. Don't panic - go word by word\n2. Look for الـ (al-) to find nouns\n3. Verbs often come first\n4. Use context for meaning",
          contentAr:
            "1. لا تقلق - اقرأ كلمة تلو الأخرى\n2. ابحث عن الـ (أل) للعثور على الأسماء\n3. غالباً ما يأتي الفعل أولاً\n4. استخدم السياق لفهم المعنى",
          contentFr:
            "1. Pas de panique - allez mot par mot\n2. Cherchez الـ (al-) pour trouver les noms\n3. Les verbes viennent souvent en premier\n4. Utilisez le contexte pour le sens",
        },
      ],
      vocabulary: [
        {
          arabic: "الوَلَدُ ذَهَبَ",
          transliteration: "al-waladu dhahaba",
          meaning: "The boy went",
          meaningAr: "ذهب الولد",
          meaningFr: "Le garçon est allé",
        },
        {
          arabic: "البِنْتُ كَتَبَتْ",
          transliteration: "al-bintu katabat",
          meaning: "The girl wrote",
          meaningAr: "كتبت البنت",
          meaningFr: "La fille a écrit",
        },
        {
          arabic: "هَذَا كِتَابٌ",
          transliteration: "hādhā kitābun",
          meaning: "This is a book",
          meaningAr: "هذا كتاب",
          meaningFr: "C'est un livre",
        },
        {
          arabic: "أَنَا طَالِبٌ",
          transliteration: "anā ṭālibun",
          meaning: "I am a student",
          meaningAr: "أنا طالب",
          meaningFr: "Je suis étudiant",
        },
      ],
    },
    exerciseCount: 16,
    prerequisites: ["1-21"],
  },

  // SECTION 5: WRITING PRACTICE (Lessons 23-26)
  {
    id: "1-23",
    phaseId: 1,
    order: 23,
    title: "Writing: Basic Strokes",
    titleAr: "الكتابة: الخطوط الأساسية",
    titleFr: "Écriture : Traits de base",
    description: "Master the fundamental strokes used in Arabic calligraphy",
    descriptionAr: "اتقن الخطوط الأساسية المستخدمة في الخط العربي",
    descriptionFr:
      "Maîtrisez les traits fondamentaux utilisés en calligraphie arabe",
    objectives: [
      "Learn the basic strokes of Arabic writing",
      "Practice right-to-left writing direction",
      "Understand baseline and letter proportions",
      "Develop proper pen control",
    ],
    objectivesAr: [
      "تعلم الخطوط الأساسية للكتابة العربية",
      "ممارسة اتجاه الكتابة من اليمين إلى اليسار",
      "فهم خط الأساس ونسب الحروف",
      "تطوير السيطرة الصحيحة على الأداة",
    ],
    objectivesFr: [
      "Apprendre les traits de base de l'écriture arabe",
      "Pratiquer l'écriture de droite à gauche",
      "Comprendre la ligne de base et les proportions des lettres",
      "Développer un bon contrôle du stylo",
    ],
    estimatedTime: 45,
    difficulty: "easy",
    xpReward: 50,
    content: {
      theory: [
        {
          title: "The Four Basic Strokes",
          titleAr: "الخطوط الأساسية الأربعة",
          titleFr: "Les quatre traits de base",
          content:
            "Arabic letters are made from combining these basic strokes:\n1. Vertical line (↓): Used in ا ل ك\n2. Horizontal line (←): Used in connections\n3. Curves (↺): Used in ب ج س\n4. Dots (•): Added last to distinguish letters",
          contentAr:
            "تُكون الحروف العربية من خلال دمج هذه الخطوط الأساسية:\n1. الخط العمودي (↓): يُستخدم في ا ل ك\n2. الخط الأفقي (←): يُستخدم في الوصلات\n3. المنحنيات (↺): تُستخدم في ب ج س\n4. النقاط (•): تُضاف آخراً لتمييز الحروف",
          contentFr:
            "Les lettres arabes sont formées en combinant ces traits de base :\n1. Ligne verticale (↓) : Utilisée dans ا ل ك\n2. Ligne horizontale (←) : Utilisée pour les connexions\n3. Courbes (↺) : Utilisées dans ب ج س\n4. Points (•) : Ajoutés en dernier pour distinguer les lettres",
        },
        {
          title: "Right-to-Left Writing",
          titleAr: "الكتابة من اليمين إلى اليسار",
          titleFr: "Écriture de droite à gauche",
          content:
            "Arabic is written RIGHT to LEFT. For right-handed writers, this means pushing the pen (vs pulling in English). Keep your paper angled for comfort!",
          contentAr:
            "تُكتب العربية من اليمين إلى اليسار. بالنسبة للكاتبين بيدهم اليمنى، هذا يعني دفع القلم (بخلاف السحب في الإنجليزية). حافظ على زاوية الورقة لراحتك!",
          contentFr:
            "L'arabe s'écrit de DROITE à GAUCHE. Pour les droitiers, cela signifie pousser le stylo (au lieu de tirer comme en français). Inclinez votre papier pour plus de confort !",
        },
        {
          title: "Letter Proportions",
          titleAr: "نسب الحروف",
          titleFr: "Proportions des lettres",
          content:
            "Traditional Arabic calligraphy uses dots to measure proportions:\n• Alif height = 7 dots\n• Letter body = 1-2 dots\n• Descenders (ي ن) = 3-5 dots below baseline",
          contentAr:
            "تستخدم الخطوط العربية التقليدية النقاط لقياس النسب:\n• ارتفاع الألف = 7 نقاط\n• جسم الحرف = 1-2 نقطة\n• الأحرف الهابطة (ي ن) = 3-5 نقاط تحت خط الأساس",
          contentFr:
            "La calligraphie arabe traditionnelle utilise des points pour mesurer les proportions :\n• Hauteur de l'Alif = 7 points\n• Corps de la lettre = 1-2 points\n• Jambages (ي ن) = 3-5 points sous la ligne de base",
        },
      ],
      vocabulary: [
        {
          arabic: "ا",
          transliteration: "alif",
          meaning: "Practice vertical stroke",
          meaningAr: "تدرب على الخط العمودي",
          meaningFr: "Pratiquer le trait vertical",
        },
        {
          arabic: "ب",
          transliteration: "bā'",
          meaning: "Practice curve + dot",
          meaningAr: "تدرب على المنحنى والنقطة",
          meaningFr: "Pratiquer la courbe + point",
        },
        {
          arabic: "س",
          transliteration: "sīn",
          meaning: "Practice teeth stroke",
          meaningAr: "تدرب على خط الأسنان",
          meaningFr: "Pratiquer le trait en dents",
        },
      ],
    },
    exerciseCount: 12,
    prerequisites: ["1-22"],
  },
  {
    id: "1-24",
    phaseId: 1,
    order: 24,
    title: "Writing: Letters That Don't Connect",
    titleAr: "الكتابة: الحروف التي لا تتصل",
    titleFr: "Écriture : Lettres qui ne se connectent pas",
    description: "Practice writing non-connecting letters",
    descriptionAr: "ممارسة كتابة الحروف غير المتصلة",
    descriptionFr: "Entraînez-vous à écrire les lettres non connectées",
    objectives: [
      "Write ا د ذ ر ز و correctly",
      "Understand why these letters don't connect",
      "Practice letter spacing",
      "Build muscle memory",
    ],
    objectivesAr: [
      "كتابة الحروف التي لا تتصل بالحروف الأخرى",
      "اتقان تشكيل الحروف المنفصلة",
      "فهم الأشكال المختلفة للحروف",
      "تحسين الدقة في الكتابة",
    ],
    objectivesFr: [
      "Écrire ا د ذ ر ز و correctement",
      "Comprendre pourquoi ces lettres ne se connectent pas",
      "Pratiquer l'espacement des lettres",
      "Développer la mémoire musculaire",
    ],
    estimatedTime: 45,
    difficulty: "easy",
    xpReward: 50,
    content: {
      theory: [
        {
          title: "The Non-Connectors",
          titleAr: "الحروف غير المتصلة",
          titleFr: "Les lettres non connectées",
          content:
            "These 6 letters NEVER connect to the following letter:\nا (alif) - vertical line\nد (dāl) - curved stroke\nذ (dhāl) - dāl + dot\nر (rā') - small curve\nز (zāy) - rā' + dot\nو (wāw) - round loop",
          contentAr:
            "هذه الـ 6 أحرف لا تتصل أبدًا بالحرف التالي:\nا (alif) - خط عمودي\nد (dāl) - خط منحن\nذ (dhāl) - dāl + نقطة\nر (rā') - منحنى صغير\nز (zāy) - rā' + نقطة\nو (wāw) - حلقة مستديرة",
          contentFr:
            "Ces 6 lettres ne se connectent JAMAIS à la lettre suivante :\nا (alif) - ligne verticale\nد (dāl) - trait courbé\nذ (dhāl) - dāl + point\nر (rā') - petite courbe\nز (zāy) - rā' + point\nو (wāw) - boucle ronde",
        },
        {
          title: "Writing Tips",
          titleAr: "نصائح الكتابة",
          titleFr: "Conseils d'écriture",
          content:
            "When writing these letters:\n• Complete the letter fully\n• Lift your pen\n• Leave a small gap\n• Start the next letter fresh",
          contentAr:
            "عند كتابة هذه الحروف:\n• أكمل الحرف بالكامل\n• ارفع قلمك\n• اترك مسافة صغيرة\n• ابدأ الحرف التالي من جديد",
          contentFr:
            "Lors de l'écriture de ces lettres :\n• Terminez complètement la lettre\n• Levez votre stylo\n• Laissez un petit espace\n• Commencez la lettre suivante de nouveau",
        },
      ],
      vocabulary: [
        {
          arabic: "دَار",
          transliteration: "dār",
          meaning: "house (practice دار)",
          meaningAr: "منزل (تدرب على دار)",
          meaningFr: "maison (pratiquer دار)",
        },
        {
          arabic: "وَرَق",
          transliteration: "waraq",
          meaning: "paper (practice ورق)",
          meaningAr: "ورق (تدرب على ورق)",
          meaningFr: "papier (pratiquer ورق)",
        },
        {
          arabic: "زَيْت",
          transliteration: "zayt",
          meaning: "oil (practice زيت)",
          meaningAr: "زيت (تدرب على زيت)",
          meaningFr: "huile (pratiquer زيت)",
        },
      ],
    },
    exerciseCount: 14,
    prerequisites: ["1-23"],
  },
  {
    id: "1-25",
    phaseId: 1,
    order: 25,
    title: "Writing: Connecting Letters",
    titleAr: "الكتابة: وصل الحروف",
    titleFr: "Écriture : Connexion des lettres",
    description: "Learn to connect letters smoothly",
    descriptionAr: "تعلم ربط الحروف بسلاسة",
    descriptionFr: "Apprenez à connecter les lettres de manière fluide",
    objectives: [
      "Write connected letter combinations",
      "Maintain smooth flow between letters",
      "Practice common letter pairs",
      "Develop writing fluency",
    ],
    objectivesAr: [
      "ربط الحروف بشكل صحيح",
      "فهم أشكال الحروف المتصلة",
      "ممارسة الكتابة الجارية",
      "تطوير المهارات الحركية الدقيقة",
    ],
    objectivesFr: [
      "Écrire des combinaisons de lettres connectées",
      "Maintenir un flux fluide entre les lettres",
      "Pratiquer les paires de lettres courantes",
      "Développer la fluidité d'écriture",
    ],
    estimatedTime: 50,
    difficulty: "medium",
    xpReward: 60,
    content: {
      theory: [
        {
          title: "Connection Points",
          titleAr: "نقاط الاتصال",
          titleFr: "Points de connexion",
          content:
            "Most letters connect at the BASELINE. The connection is a thin horizontal stroke that flows naturally from one letter to the next.\n\nExample: بـيـت (bayt) - see how ب connects to ي connects to ت",
          contentAr:
            "تتصل معظم الحروف عند خط الأساس. الاتصال هو خط أفقي رقيق يتدفق بشكل طبيعي من حرف إلى آخر.\n\nمثال: بـيـت (bayt) - انظر كيف يتصل ب بـ ي وتتصل ي بـ ت",
          contentFr:
            "La plupart des lettres se connectent à la LIGNE DE BASE. La connexion est un trait horizontal fin qui coule naturellement d'une lettre à l'autre.\n\nExemple : بـيـت (bayt) - voyez comment ب se connecte à ي qui se connecte à ت",
        },
        {
          title: "Common Combinations",
          titleAr: "التركيبات الشائعة",
          titleFr: "Combinaisons courantes",
          content:
            "Practice these frequent pairs:\n• لا (lām-alif): Special ligature\n• مـح (mīm-ḥā'): Round to hook\n• كـت (kāf-tā'): Zig-zag to curve\n• فـي (fā'-yā'): Loop to dots",
          contentAr:
            "تدرب على هذه الأزواج الشائعة:\n• لا (lām-alif): ربط خاص\n• مـح (mīm-ḥā'): مستدير إلى خطاف\n• كـت (kāf-tā'): متعرج إلى منحنى\n• فـي (fā'-yā'): حلقة إلى نقاط",
          contentFr:
            "Pratiquez ces paires fréquentes :\n• لا (lām-alif) : Ligature spéciale\n• مـح (mīm-ḥā') : Rond vers crochet\n• كـت (kāf-tā') : Zig-zag vers courbe\n• فـي (fā'-yā') : Boucle vers points",
        },
      ],
      vocabulary: [
        {
          arabic: "مَكْتَبَة",
          transliteration: "maktaba",
          meaning: "library",
          meaningAr: "مكتبة",
          meaningFr: "bibliothèque",
        },
        {
          arabic: "مَدْرَسَة",
          transliteration: "madrasa",
          meaning: "school",
          meaningAr: "مدرسة",
          meaningFr: "école",
        },
        {
          arabic: "جَامِعَة",
          transliteration: "jāmi'a",
          meaning: "university",
          meaningAr: "جامعة",
          meaningFr: "université",
        },
      ],
    },
    exerciseCount: 16,
    prerequisites: ["1-24"],
  },
  {
    id: "1-26",
    phaseId: 1,
    order: 26,
    title: "Writing: Complete Words",
    titleAr: "الكتابة: كلمات كاملة",
    titleFr: "Écriture : Mots complets",
    description: "Practice writing complete Arabic words",
    descriptionAr: "ممارسة كتابة كلمات عربية كاملة",
    descriptionFr: "Entraînez-vous à écrire des mots arabes complets",
    objectives: [
      "Write multi-letter words fluently",
      "Add vowel marks correctly",
      "Maintain consistent letter size",
      "Develop neat handwriting",
    ],
    objectivesAr: [
      "كتابة كلمات عربية كاملة",
      "تطبيق قواعد ربط الحروف",
      "تحسين سرعة الكتابة والدقة",
      "بناء الثقة في الكتابة اليدوية",
    ],
    objectivesFr: [
      "Écrire des mots à plusieurs lettres avec fluidité",
      "Ajouter les marques de voyelles correctement",
      "Maintenir une taille de lettre cohérente",
      "Développer une écriture soignée",
    ],
    estimatedTime: 55,
    difficulty: "medium",
    xpReward: 65,
    content: {
      theory: [
        {
          title: "Word Writing Strategy",
          titleAr: "استراتيجية كتابة الكلمات",
          titleFr: "Stratégie d'écriture des mots",
          content:
            "When writing Arabic words:\n1. Plan the word mentally first\n2. Write all LETTERS from right to left\n3. Add DOTS after completing each letter group\n4. Add VOWEL MARKS (harakat) last",
          contentAr:
            "عند كتابة كلمات عربية:\n1. خطط الكلمة عقليًا أولاً\n2. اكتب جميع الحروف من اليمين إلى اليسار\n3. أضف النقاط بعد إكمال كل مجموعة حروف\n4. أضف علامات الحروف الصوتية (harakat) آخراً",
          contentFr:
            "Lors de l'écriture de mots arabes :\n1. Planifiez d'abord le mot mentalement\n2. Écrivez toutes les LETTRES de droite à gauche\n3. Ajoutez les POINTS après avoir terminé chaque groupe de lettres\n4. Ajoutez les MARQUES DE VOYELLES (harakat) en dernier",
        },
        {
          title: "Common Mistakes to Avoid",
          titleAr: "الأخطاء الشائعة التي يجب تجنبها",
          titleFr: "Erreurs courantes à éviter",
          content:
            "• Mixing letter forms (using final form in the middle)\n• Forgetting to lift pen after non-connectors\n• Inconsistent letter sizes\n• Misplacing dots",
          contentAr:
            "• خلط أشكال الحروف (استخدام الشكل النهائي في الوسط)\n• نسيان رفع القلم بعد الحروف غير المتصلة\n• أحجام حروف غير متسقة\n• وضع النقاط بشكل خاطئ",
          contentFr:
            "• Mélanger les formes de lettres (utiliser la forme finale au milieu)\n• Oublier de lever le stylo après les lettres non connectées\n• Tailles de lettres incohérentes\n• Points mal placés",
        },
      ],
      vocabulary: [
        {
          arabic: "سَلَام",
          transliteration: "salām",
          meaning: "peace",
          meaningAr: "سلام",
          meaningFr: "paix",
        },
        {
          arabic: "شُكْرًا",
          transliteration: "shukran",
          meaning: "thank you",
          meaningAr: "شكراً",
          meaningFr: "merci",
        },
        {
          arabic: "مَرْحَبًا",
          transliteration: "marḥaban",
          meaning: "hello",
          meaningAr: "مرحباً",
          meaningFr: "bonjour",
        },
      ],
    },
    exerciseCount: 18,
    prerequisites: ["1-25"],
  },

  // SECTION 6: NUMBERS AND BASIC WORDS (Lessons 27-28)
  {
    id: "1-27",
    phaseId: 1,
    order: 27,
    title: "Arabic Numbers 0-10",
    titleAr: "الأرقام العربية ٠-١٠",
    titleFr: "Chiffres arabes 0-10",
    description: "Learn Arabic-Indic numerals and number words",
    descriptionAr: "تعلم الأرقام الهندية العربية والكلمات الرقمية",
    descriptionFr:
      "Apprenez les chiffres arabo-indiens et les mots pour les nombres",
    objectives: [
      "Recognize Arabic numerals ٠-١٠",
      "Write and pronounce number words",
      "Count from 0 to 10 in Arabic",
      "Use numbers in basic contexts",
    ],
    objectivesAr: [
      "التعرف على الأرقام الهندية من 0 إلى 10",
      "نطق كلمات الأرقام بالعربية",
      "كتابة الأرقام الهندية بشكل صحيح",
      "استخدام الأرقام في السياقات العملية",
    ],
    objectivesFr: [
      "Reconnaître les chiffres arabes ٠-١٠",
      "Écrire et prononcer les mots des nombres",
      "Compter de 0 à 10 en arabe",
      "Utiliser les nombres dans des contextes de base",
    ],
    estimatedTime: 45,
    difficulty: "easy",
    xpReward: 55,
    content: {
      theory: [
        {
          title: "Arabic-Indic Numerals",
          titleAr: "الأرقام الهندية العربية",
          titleFr: "Chiffres arabo-indiens",
          content:
            "Arabic uses its own numeral system (though Western numerals are also common):\n٠ ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩ ١٠\n0  1  2  3  4  5  6  7  8  9  10\n\nFun fact: Our 'Arabic numerals' (1, 2, 3...) actually came FROM Arabic!",
          contentAr:
            "تستخدم العربية نظام الأرقام الخاص بها (على الرغم من أن الأرقام الغربية شائعة أيضًا):\n٠ ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩ ١٠\n0  1  2  3  4  5  6  7  8  9  10\n\nحقيقة مرحة: 'الأرقام العربية' (1، 2، 3...) في الواقع جاءت من العربية!",
          contentFr:
            "L'arabe utilise son propre système de chiffres (bien que les chiffres occidentaux soient aussi courants) :\n٠ ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩ ١٠\n0  1  2  3  4  5  6  7  8  9  10\n\nFait amusant : Nos 'chiffres arabes' (1, 2, 3...) viennent en fait DE l'arabe !",
        },
        {
          title: "Number Words",
          titleAr: "كلمات الأرقام",
          titleFr: "Mots des nombres",
          content:
            "0 = صِفْر (ṣifr) - origin of 'zero'!\n1 = وَاحِد (wāḥid)\n2 = اِثْنَان (ithnān)\n3 = ثَلَاثَة (thalātha)\n4 = أَرْبَعَة (arba'a)\n5 = خَمْسَة (khamsa)",
          contentAr:
            "0 = صِفْر (ṣifr) - أصل كلمة 'zero'!\n1 = وَاحِد (wāḥid)\n2 = اِثْنَان (ithnān)\n3 = ثَلَاثَة (thalātha)\n4 = أَرْبَعَة (arba'a)\n5 = خَمْسَة (khamsa)",
          contentFr:
            "0 = صِفْر (ṣifr) - origine de 'zéro' !\n1 = وَاحِد (wāḥid)\n2 = اِثْنَان (ithnān)\n3 = ثَلَاثَة (thalātha)\n4 = أَرْبَعَة (arba'a)\n5 = خَمْسَة (khamsa)",
        },
      ],
      vocabulary: ARABIC_NUMBERS.map((n) => ({
        arabic: `${n.arabic} - ${n.word}`,
        transliteration: n.transliteration,
        meaning: `${n.number}`,
      })),
    },
    exerciseCount: 15,
    prerequisites: ["1-26"],
  },
  {
    id: "1-28",
    phaseId: 1,
    order: 28,
    title: "Days of the Week",
    titleAr: "أيام الأسبوع",
    titleFr: "Les jours de la semaine",
    description: "Learn the names of the days in Arabic",
    descriptionAr: "تعلم أسماء أيام الأسبوع بالعربية",
    descriptionFr: "Apprenez les noms des jours en arabe",
    objectives: [
      "Name all seven days in Arabic",
      "Understand day name origins",
      "Use days in simple sentences",
      "Practice pronunciation",
    ],
    objectivesAr: [
      "التعرف على أسماء الأيام السبعة",
      "نطق أسماء الأيام بشكل صحيح",
      "استخدام أسماء الأيام في الجمل",
      "حفظ الترتيب الصحيح للأيام",
    ],
    objectivesFr: [
      "Nommer les sept jours en arabe",
      "Comprendre l'origine des noms des jours",
      "Utiliser les jours dans des phrases simples",
      "Pratiquer la prononciation",
    ],
    estimatedTime: 45,
    difficulty: "easy",
    xpReward: 55,
    content: {
      theory: [
        {
          title: "The Arabic Week",
          titleAr: "الأسبوع العربي",
          titleFr: "La semaine arabe",
          content:
            "The Arabic week starts on SUNDAY (not Monday):\n\n1. الأَحَد (al-aḥad) - Sunday (The One)\n2. الاِثْنَيْن (al-ithnayn) - Monday (The Two)\n3. الثُّلَاثَاء (ath-thulāthā') - Tuesday (The Three)\n4. الأَرْبِعَاء (al-arbi'ā') - Wednesday (The Four)\n5. الخَمِيس (al-khamīs) - Thursday (The Five)\n6. الجُمْعَة (al-jum'a) - Friday (Gathering - prayer day)\n7. السَّبْت (as-sabt) - Saturday (Sabbath)",
          contentAr:
            "يبدأ الأسبوع العربي يوم الأحد (وليس الاثنين):\n\n١. الأَحَد (al-aḥad) - الأحد (الواحد)\n٢. الاِثْنَيْن (al-ithnayn) - الاثنين (الاثنان)\n٣. الثُّلَاثَاء (ath-thulāthā') - الثلاثاء (الثلاثة)\n٤. الأَرْبِعَاء (al-arbi'ā') - الأربعاء (الأربعة)\n٥. الخَمِيس (al-khamīs) - الخميس (الخمسة)\n٦. الجُمْعَة (al-jum'a) - الجمعة (التجمع - يوم الصلاة)\n٧. السَّبْت (as-sabt) - السبت (السبت)",
          contentFr:
            "La semaine arabe commence le DIMANCHE (pas le lundi) :\n\n1. الأَحَد (al-aḥad) - Dimanche (Le Un)\n2. الاِثْنَيْن (al-ithnayn) - Lundi (Le Deux)\n3. الثُّلَاثَاء (ath-thulāthā') - Mardi (Le Trois)\n4. الأَرْبِعَاء (al-arbi'ā') - Mercredi (Le Quatre)\n5. الخَمِيس (al-khamīs) - Jeudi (Le Cinq)\n6. الجُمْعَة (al-jum'a) - Vendredi (Rassemblement - jour de prière)\n7. السَّبْت (as-sabt) - Samedi (Sabbat)",
        },
      ],
      vocabulary: [
        {
          arabic: "الأَحَد",
          transliteration: "al-aḥad",
          meaning: "Sunday",
          meaningAr: "الأحد",
          meaningFr: "Dimanche",
        },
        {
          arabic: "الاِثْنَيْن",
          transliteration: "al-ithnayn",
          meaning: "Monday",
          meaningAr: "الاثنين",
          meaningFr: "Lundi",
        },
        {
          arabic: "الثُّلَاثَاء",
          transliteration: "ath-thulāthā'",
          meaning: "Tuesday",
          meaningAr: "الثلاثاء",
          meaningFr: "Mardi",
        },
        {
          arabic: "الأَرْبِعَاء",
          transliteration: "al-arbi'ā'",
          meaning: "Wednesday",
          meaningAr: "الأربعاء",
          meaningFr: "Mercredi",
        },
        {
          arabic: "الخَمِيس",
          transliteration: "al-khamīs",
          meaning: "Thursday",
          meaningAr: "الخميس",
          meaningFr: "Jeudi",
        },
        {
          arabic: "الجُمْعَة",
          transliteration: "al-jum'a",
          meaning: "Friday",
          meaningAr: "الجمعة",
          meaningFr: "Vendredi",
        },
        {
          arabic: "السَّبْت",
          transliteration: "as-sabt",
          meaning: "Saturday",
          meaningAr: "السبت",
          meaningFr: "Samedi",
        },
      ],
    },
    exerciseCount: 14,
    prerequisites: ["1-27"],
  },

  // SECTION 7: SIMPLE PHRASES (Lessons 29-30)
  {
    id: "1-29",
    phaseId: 1,
    order: 29,
    title: "Basic Greetings",
    titleAr: "التحيات الأساسية",
    titleFr: "Salutations de base",
    description: "Learn essential Arabic greetings and responses",
    descriptionAr: "تعلم التحيات العربية الأساسية والردود عليها",
    descriptionFr:
      "Apprenez les salutations arabes essentielles et leurs réponses",
    objectives: [
      "Greet people appropriately in Arabic",
      "Respond to common greetings",
      "Understand greeting etiquette",
      "Practice conversational pronunciation",
    ],
    objectivesAr: [
      "حيّ الناس بشكل صحيح بالعربية",
      "رد على التحيات الشائعة",
      "افهم آداب التحية",
      "تدرب على نطق المحادثة",
    ],
    objectivesFr: [
      "Saluer les gens correctement en arabe",
      "Répondre aux salutations courantes",
      "Comprendre l'étiquette des salutations",
      "Pratiquer la prononciation conversationnelle",
    ],
    estimatedTime: 50,
    difficulty: "easy",
    xpReward: 60,
    content: {
      theory: [
        {
          title: "The Universal Greeting",
          titleAr: "التحية العالمية",
          titleFr: "La salutation universelle",
          content:
            "السَّلَامُ عَلَيْكُمْ (as-salāmu 'alaykum) = Peace be upon you\n\nResponse: وَعَلَيْكُمُ السَّلَام (wa 'alaykum as-salām) = And upon you peace\n\nThis is the most important Arabic greeting - used by Muslims worldwide!",
          contentAr:
            "السَّلَامُ عَلَيْكُمْ (as-salāmu 'alaykum) = السلام عليكم\n\nالرد: وَعَلَيْكُمُ السَّلَام (wa 'alaykum as-salām) = وعليكم السلام\n\nهذه هي أهم تحية عربية - يستخدمها المسلمون في جميع أنحاء العالم!",
          contentFr:
            "السَّلَامُ عَلَيْكُمْ (as-salāmu 'alaykum) = Que la paix soit sur vous\n\nRéponse : وَعَلَيْكُمُ السَّلَام (wa 'alaykum as-salām) = Et sur vous la paix\n\nC'est la salutation arabe la plus importante - utilisée par les musulmans du monde entier !",
        },
        {
          title: "Common Greetings",
          titleAr: "التحيات الشائعة",
          titleFr: "Salutations courantes",
          content:
            "مَرْحَبًا (marḥaban) = Hello/Welcome\nأَهْلًا وَسَهْلًا (ahlan wa-sahlan) = Welcome\nصَبَاحُ الخَيْر (ṣabāḥ al-khayr) = Good morning\nمَسَاءُ الخَيْر (masā' al-khayr) = Good evening",
          contentAr:
            "مَرْحَبًا (marḥaban) = مرحباً\nأَهْلًا وَسَهْلًا (ahlan wa-sahlan) = أهلاً وسهلاً\nصَبَاحُ الخَيْر (ṣabāḥ al-khayr) = صباح الخير\nمَسَاءُ الخَيْر (masā' al-khayr) = مساء الخير",
          contentFr:
            "مَرْحَبًا (marḥaban) = Bonjour/Bienvenue\nأَهْلًا وَسَهْلًا (ahlan wa-sahlan) = Bienvenue\nصَبَاحُ الخَيْر (ṣabāḥ al-khayr) = Bonjour (matin)\nمَسَاءُ الخَيْر (masā' al-khayr) = Bonsoir",
        },
      ],
      vocabulary: [
        {
          arabic: "السَّلَامُ عَلَيْكُمْ",
          transliteration: "as-salāmu 'alaykum",
          meaning: "Peace be upon you",
          meaningAr: "السلام عليكم",
          meaningFr: "Que la paix soit sur vous",
        },
        {
          arabic: "مَرْحَبًا",
          transliteration: "marḥaban",
          meaning: "Hello",
          meaningAr: "مرحباً",
          meaningFr: "Bonjour",
        },
        {
          arabic: "صَبَاحُ الخَيْر",
          transliteration: "ṣabāḥ al-khayr",
          meaning: "Good morning",
          meaningAr: "صباح الخير",
          meaningFr: "Bonjour (matin)",
        },
        {
          arabic: "مَسَاءُ الخَيْر",
          transliteration: "masā' al-khayr",
          meaning: "Good evening",
          meaningAr: "مساء الخير",
          meaningFr: "Bonsoir",
        },
        {
          arabic: "كَيْفَ حَالُكَ؟",
          transliteration: "kayfa ḥāluka?",
          meaning: "How are you? (m)",
          meaningAr: "كيف حالك؟",
          meaningFr: "Comment vas-tu ? (m)",
        },
      ],
    },
    exerciseCount: 16,
    prerequisites: ["1-28"],
  },
  {
    id: "1-30",
    phaseId: 1,
    order: 30,
    title: "Phase 1 Review & Assessment",
    titleAr: "مراجعة وتقييم المرحلة الأولى",
    titleFr: "Révision et évaluation de la Phase 1",
    description: "Comprehensive review of all Phase 1 content",
    descriptionAr: "مراجعة شاملة لجميع محتويات المرحلة الأولى",
    descriptionFr: "Révision complète de tout le contenu de la Phase 1",
    objectives: [
      "Review all 28 letters of the Arabic alphabet",
      "Demonstrate reading fluency",
      "Apply vowel marks correctly",
      "Celebrate your achievements!",
    ],
    objectivesAr: [
      "مراجعة الأبجدية العربية الكاملة",
      "التدريب على الحروف والعلامات",
      "تعزيز مهارات القراءة والكتابة",
      "تقييم المعرفة المكتسبة في المرحلة الأولى",
    ],
    objectivesFr: [
      "Réviser les 28 lettres de l'alphabet arabe",
      "Démontrer une lecture fluide",
      "Appliquer les marques de voyelles correctement",
      "Célébrer vos accomplissements !",
    ],
    estimatedTime: 60,
    difficulty: "medium",
    xpReward: 100,
    content: {
      theory: [
        {
          title: "🎉 Congratulations!",
          titleAr: "🎉 مبروك!",
          titleFr: "🎉 Félicitations !",
          content:
            "You've completed Phase 1: Foundations! You can now:\n✓ Read the Arabic alphabet\n✓ Write Arabic letters in all forms\n✓ Use vowel marks (harakat)\n✓ Read simple words and phrases\n✓ Count and greet in Arabic",
          contentAr:
            "لقد أكملت المرحلة الأولى: الأساسيات! يمكنك الآن:\n✓ قراءة الأبجدية العربية\n✓ كتابة الحروف العربية بجميع أشكالها\n✓ استخدام علامات الحروف الصوتية (harakat)\n✓ قراءة كلمات وعبارات بسيطة\n✓ العد والتحية بالعربية",
          contentFr:
            "Vous avez terminé la Phase 1 : Fondations ! Vous pouvez maintenant :\n✓ Lire l'alphabet arabe\n✓ Écrire les lettres arabes sous toutes leurs formes\n✓ Utiliser les marques de voyelles (harakat)\n✓ Lire des mots et phrases simples\n✓ Compter et saluer en arabe",
        },
        {
          title: "Skills Assessment",
          titleAr: "تقييم المهارات",
          titleFr: "Évaluation des compétences",
          content:
            "This final lesson will test all your Phase 1 skills:\n• Letter recognition\n• Form identification\n• Vowel mark application\n• Reading comprehension\n• Writing accuracy",
          contentAr:
            "ستختبر هذه الدرس النهائي جميع مهاراتك في المرحلة الأولى:\n• التعرف على الحروف\n• تحديد الأشكال\n• تطبيق علامات الحروف الصوتية\n• فهم المقروء\n• دقة الكتابة",
          contentFr:
            "Cette leçon finale testera toutes vos compétences de Phase 1 :\n• Reconnaissance des lettres\n• Identification des formes\n• Application des marques de voyelles\n• Compréhension en lecture\n• Précision de l'écriture",
        },
        {
          title: "Ready for Phase 2!",
          titleAr: "جاهز للمرحلة الثانية!",
          titleFr: "Prêt pour la Phase 2 !",
          content:
            "In Phase 2: Building Blocks, you'll learn:\n• Basic vocabulary (100+ words)\n• Noun-adjective agreement\n• Pronouns and possessives\n• Simple sentences\n• More practical conversations",
          contentAr:
            "في المرحلة الثانية: كتل البناء، ستتعلم:\n• المفردات الأساسية (100+ كلمة)\n• اتفاق الاسم والصفة\n• الضمائر والملكيات\n• جمل بسيطة\n• محادثات عملية أكثر",
          contentFr:
            "Dans la Phase 2 : Blocs de construction, vous apprendrez :\n• Vocabulaire de base (100+ mots)\n• Accord nom-adjectif\n• Pronoms et possessifs\n• Phrases simples\n• Plus de conversations pratiques",
        },
      ],
      vocabulary: ARABIC_ALPHABET.map((l) => ({
        arabic: l.letter,
        transliteration: l.transliteration,
        meaning: l.name,
      })),
    },
    exerciseCount: 25,
    prerequisites: ["1-29"],
  },
];
