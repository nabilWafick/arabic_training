/**
 * Phase 2: Building Blocks (30 Lessons)
 * Master basic vocabulary, grammar fundamentals, and simple conversations
 * 
 * Lesson Structure:
 * 1-5: Essential Vocabulary (family, body, colors, food, animals)
 * 6-10: Pronouns and Possessives
 * 11-15: Basic Grammar (gender, articles, adjectives)
 * 16-20: Verb Introduction (present tense)
 * 21-25: Question Words and Simple Sentences
 * 26-30: Practical Conversations and Review
 */

import type { Lesson } from "@/types";

export const PHASE_2_LESSONS: Lesson[] = [
  // SECTION 1: ESSENTIAL VOCABULARY (Lessons 1-6)
  {
    id: "2-1",
    phaseId: 2,
    order: 1,
    title: "Family Members",
    titleAr: "أفراد العائلة",
    titleFr: "Les membres de la famille",
    description: "Learn vocabulary for family relationships",
    descriptionAr: "تعلم مفردات علاقات الأسرة",
    descriptionFr: "Apprenez le vocabulaire des relations familiales",
    objectives: [
      "Name immediate family members in Arabic",
      "Understand masculine/feminine forms",
      "Use possessive pronouns with family words",
      "Introduce your family in Arabic"
    ],
    objectivesAr: [
      "تسمية أفراد الأسرة المباشرين باللغة العربية",
      "فهم الصيغ المذكرة والمؤنثة",
      "استخدام ضمائر الملكية مع كلمات الأسرة",
      "تقديم عائلتك باللغة العربية"
    ],
    objectivesFr: [
      "Nommer les membres immédiats de la famille en arabe",
      "Comprendre les formes masculine et féminine",
      "Utiliser les pronoms possessifs avec les mots de famille",
      "Présenter votre famille en arabe"
    ],
    estimatedTime: 50,
    difficulty: "easy",
    xpReward: 55,
    content: {
      theory: [
        {
          title: "The Arabic Family",
          titleAr: "الأسرة العربية",
          titleFr: "La famille arabe",
          content: "Family (عَائِلَة - 'ā'ila) is central to Arabic culture. Arabic has specific terms for every family relationship - sometimes more specific than English!\n\nKey terms:\nأَب (ab) = father\nأُمّ (umm) = mother\nاِبْن (ibn) = son\nبِنْت (bint) = daughter",
          contentAr: "الأسرة (عَائِلَة - 'ā'ila) محورية في الثقافة العربية. للعربية مصطلحات محددة لكل علاقة أسرية - أحيانًا أكثر تحديدًا من الإنجليزية!\n\nالمصطلحات الرئيسية:\nأَب (ab) = الأب\nأُمّ (umm) = الأم\nاِبْن (ibn) = الابن\nبِنْت (bint) = الابنة",
          contentFr: "La famille (عَائِلَة - 'ā'ila) est au centre de la culture arabe. L'arabe a des termes spécifiques pour chaque relation familiale - parfois plus spécifiques qu'en anglais !\n\nTermes clés :\nأَب (ab) = père\nأُمّ (umm) = mère\nاِبْن (ibn) = fils\nبِنْت (bint) = fille"
        },
        {
          title: "Extended Family",
          titleAr: "الأسرة الممتدة",
          titleFr: "La famille étendue",
          content: "جَدّ (jadd) = grandfather\nجَدَّة (jadda) = grandmother\nعَمّ ('amm) = paternal uncle\nخَال (khāl) = maternal uncle\nعَمَّة ('amma) = paternal aunt\nخَالَة (khāla) = maternal aunt\n\nNote: Arabic distinguishes between father's and mother's sides!",
          contentAr: "جَدّ (jadd) = الجد\nجَدَّة (jadda) = الجدة\nعَمّ ('amm) = العم الأبوي\nخَال (khāl) = العم الأموي\nعَمَّة ('amma) = العمة الأبوية\nخَالَة (khāla) = العمة الأموية\n\nملاحظة: العربية تمييز بين الجانب الأبوي والجانب الأموي!",
          contentFr: "جَدّ (jadd) = grand-père\nجَدَّة (jadda) = grand-mère\nعَمّ ('amm) = oncle paternel\nخَال (khāl) = oncle maternel\nعَمَّة ('amma) = tante paternelle\nخَالَة (khāla) = tante maternelle\n\nRemarque : L'arabe distingue les côtés paternel et maternel !"
        },
        {
          title: "Siblings",
          titleAr: "الإخوة والأخوات",
          titleFr: "Les frères et sœurs",
          content: "أَخ (akh) = brother\nأُخْت (ukht) = sister\nإِخْوَة (ikhwa) = brothers/siblings\nأَخَوَات (akhawāt) = sisters\n\nIn Arabic, إِخْوَة can mean 'brothers' or 'siblings' (brothers and sisters together).",
          contentAr: "أَخ (akh) = الأخ\nأُخْت (ukht) = الأخت\nإِخْوَة (ikhwa) = الإخوة (الذكور أو الإخوة والأخوات معًا)\nأَخَوَات (akhawāt) = الأخوات\n\nفي العربية، إِخْوَة يمكن أن يعني 'الإخوة' أو 'الإخوة والأخوات' (معًا).",
          contentFr: "أَخ (akh) = frère\nأُخْت (ukht) = sœur\nإِخْوَة (ikhwa) = frères/frères et sœurs\nأَخَوَات (akhawāt) = sœurs\n\nEn arabe, إِخْوَة peut signifier 'frères' ou 'frères et sœurs' (ensemble)."
        }
      ],
      vocabulary: [
        { arabic: "عَائِلَة", transliteration: "'ā'ila", meaning: "family", meaningAr: "الأسرة", meaningFr: "famille" },
        { arabic: "أَب", transliteration: "ab", meaning: "father", meaningAr: "الأب", meaningFr: "père" },
        { arabic: "أُمّ", transliteration: "umm", meaning: "mother", meaningAr: "الأم", meaningFr: "mère" },
        { arabic: "اِبْن", transliteration: "ibn", meaning: "son", meaningAr: "الابن", meaningFr: "fils" },
        { arabic: "بِنْت", transliteration: "bint", meaning: "daughter", meaningAr: "الابنة", meaningFr: "fille" },
        { arabic: "أَخ", transliteration: "akh", meaning: "brother", meaningAr: "الأخ", meaningFr: "frère" },
        { arabic: "أُخْت", transliteration: "ukht", meaning: "sister", meaningAr: "الأخت", meaningFr: "sœur" },
        { arabic: "جَدّ", transliteration: "jadd", meaning: "grandfather", meaningAr: "الجد", meaningFr: "grand-père" },
        { arabic: "جَدَّة", transliteration: "jadda", meaning: "grandmother", meaningAr: "الجدة", meaningFr: "grand-mère" },
        { arabic: "زَوْج", transliteration: "zawj", meaning: "husband", meaningAr: "الزوج", meaningFr: "mari" },
        { arabic: "زَوْجَة", transliteration: "zawja", meaning: "wife", meaningAr: "الزوجة", meaningFr: "épouse" }
      ]
    },
    exerciseCount: 16,
    prerequisites: []
  },
  {
    id: "2-2",
    phaseId: 2,
    order: 2,
    title: "Body Parts",
    titleAr: "أعضاء الجسم",
    titleFr: "Les parties du corps",
    description: "Learn vocabulary for parts of the body",
    descriptionAr: "تعلم مفردات أعضاء الجسم",
    descriptionFr: "Apprenez le vocabulaire des parties du corps",
    objectives: [
      "Name major body parts in Arabic",
      "Understand dual form for paired body parts",
      "Use definite articles with body parts",
      "Describe physical appearance basics"
    ],
    objectivesAr: [
      "تسمية أجزاء الجسم الرئيسية باللغة العربية",
      "فهم الصيغة الثنائية لأعضاء الجسم المتزوجة",
      "استخدام أدوات التعريف مع أعضاء الجسم",
      "وصف المظهر البدني الأساسي"
    ],
    objectivesFr: [
      "Nommer les principales parties du corps en arabe",
      "Comprendre la forme duelle pour les parties du corps appariées",
      "Utiliser les articles définis avec les parties du corps",
      "Décrire l'apparence physique de base"
    ],
    estimatedTime: 50,
    difficulty: "easy",
    xpReward: 55,
    content: {
      theory: [
        {
          title: "The Head and Face",
          titleAr: "الرأس والوجه",
          titleFr: "La tête et le visage",
          content: "رَأْس (ra's) = head\nوَجْه (wajh) = face\nعَيْن ('ayn) = eye (also the letter!)\nأَنْف (anf) = nose\nفَم (fam) = mouth\nأُذُن (udhun) = ear\nشَعْر (sha'r) = hair",
          contentAr: "رَأْس (ra's) = الرأس\nوَجْه (wajh) = الوجه\nعَيْن ('ayn) = العين (وأيضًا الحرف!)\nأَنْف (anf) = الأنف\nفَم (fam) = الفم\nأُذُن (udhun) = الأذن\nشَعْر (sha'r) = الشعر",
          contentFr: "رَأْس (ra's) = tête\nوَجْه (wajh) = visage\nعَيْن ('ayn) = œil (aussi la lettre !)\nأَنْف (anf) = nez\nفَم (fam) = bouche\nأُذُن (udhun) = oreille\nشَعْر (sha'r) = cheveux"
        },
        {
          title: "The Dual Form",
          titleAr: "الصيغة الثنائية",
          titleFr: "La forme duelle",
          content: "Arabic has a special form for TWO of something!\n\nعَيْن ('ayn) = one eye\nعَيْنَان ('aynān) = two eyes\nأُذُن (udhun) = one ear\nأُذُنَان (udhunān) = two ears\n\nFor body parts that come in pairs, the dual is common!",
          contentAr: "للعربية صيغة خاصة لاثنين من شيء!\n\nعَيْن ('ayn) = عين واحدة\nعَيْنَان ('aynān) = عينان\nأُذُن (udhun) = أذن واحدة\nأُذُنَان (udhunān) = أذنان\n\nللأعضاء التي تأتي في أزواج، الصيغة الثنائية شائعة!",
          contentFr: "L'arabe a une forme spéciale pour DEUX choses !\n\nعَيْن ('ayn) = un œil\nعَيْنَان ('aynān) = deux yeux\nأُذُن (udhun) = une oreille\nأُذُنَان (udhunān) = deux oreilles\n\nPour les parties du corps qui viennent par paires, la forme duelle est courante !"
        },
        {
          title: "The Body",
          titleAr: "الجسد",
          titleFr: "Le corps",
          content: "جِسْم (jism) = body\nيَد (yad) = hand\nرِجْل (rijl) = leg/foot\nقَلْب (qalb) = heart\nبَطْن (baṭn) = stomach\nظَهْر (ẓahr) = back",
          contentAr: "جِسْم (jism) = الجسم\nيَد (yad) = اليد\nرِجْل (rijl) = الرجل/القدم\nقَلْب (qalb) = القلب\nبَطْن (baṭn) = البطن\nظَهْر (ẓahr) = الظهر",
          contentFr: "جِسْم (jism) = corps\nيَد (yad) = main\nرِجْل (rijl) = jambe/pied\nقَلْب (qalb) = cœur\nبَطْن (baṭn) = estomac\nظَهْر (ẓahr) = dos"
        }
      ],
      vocabulary: [
        { arabic: "رَأْس", transliteration: "ra's", meaning: "head", meaningAr: "الرأس", meaningFr: "tête" },
        { arabic: "وَجْه", transliteration: "wajh", meaning: "face", meaningAr: "الوجه", meaningFr: "visage" },
        { arabic: "عَيْن", transliteration: "'ayn", meaning: "eye", meaningAr: "العين", meaningFr: "œil" },
        { arabic: "أُذُن", transliteration: "udhun", meaning: "ear", meaningAr: "الأذن", meaningFr: "oreille" },
        { arabic: "فَم", transliteration: "fam", meaning: "mouth", meaningAr: "الفم", meaningFr: "bouche" },
        { arabic: "يَد", transliteration: "yad", meaning: "hand", meaningAr: "اليد", meaningFr: "main" },
        { arabic: "رِجْل", transliteration: "rijl", meaning: "leg/foot", meaningAr: "الرجل/القدم", meaningFr: "jambe/pied" },
        { arabic: "قَلْب", transliteration: "qalb", meaning: "heart", meaningAr: "القلب", meaningFr: "cœur" },
        { arabic: "جِسْم", transliteration: "jism", meaning: "body", meaningAr: "الجسم", meaningFr: "corps" }
      ]
    },
    exerciseCount: 15,
    prerequisites: ["2-1"]
  },
  {
    id: "2-3",
    phaseId: 2,
    order: 3,
    title: "Colors",
    titleAr: "الألوان",
    titleFr: "Les couleurs",
    description: "Learn the names of colors in Arabic",
    descriptionAr: "تعلم أسماء الألوان باللغة العربية",
    descriptionFr: "Apprenez les noms des couleurs en arabe",
    objectives: [
      "Name the basic colors in Arabic",
      "Understand masculine/feminine color forms",
      "Describe objects using colors",
      "Use colors in simple sentences"
    ],
    objectivesAr: [
      "تسمية الألوان الأساسية باللغة العربية",
      "فهم صيغ الألوان المذكرة والمؤنثة",
      "وصف الأشياء باستخدام الألوان",
      "استخدام الألوان في جمل بسيطة"
    ],
    objectivesFr: [
      "Nommer les couleurs de base en arabe",
      "Comprendre les formes masculine et féminine des couleurs",
      "Décrire les objets à l'aide des couleurs",
      "Utiliser les couleurs dans des phrases simples"
    ],
    estimatedTime: 45,
    difficulty: "easy",
    xpReward: 50,
    content: {
      theory: [
        {
          title: "Basic Colors",
          titleAr: "الألوان الأساسية",
          titleFr: "Les couleurs de base",
          content: "Colors in Arabic change based on the noun's gender!\n\nMasculine → Feminine:\nأَحْمَر (aḥmar) → حَمْرَاء (ḥamrā') = red\nأَزْرَق (azraq) → زَرْقَاء (zarqā') = blue\nأَخْضَر (akhḍar) → خَضْرَاء (khaḍrā') = green\nأَصْفَر (aṣfar) → صَفْرَاء (ṣafrā') = yellow\nأَبْيَض (abyaḍ) → بَيْضَاء (bayḍā') = white\nأَسْوَد (aswad) → سَوْدَاء (sawdā') = black",
          contentAr: "الألوان في العربية تتغير بناءً على جنس الاسم!\n\nمذكر → مؤنث:\nأَحْمَر (aḥmar) → حَمْرَاء (ḥamrā') = أحمر\nأَزْرَق (azraq) → زَرْقَاء (zarqā') = أزرق\nأَخْضَر (akhḍar) → خَضْرَاء (khaḍrā') = أخضر\nأَصْفَر (aṣfar) → صَفْرَاء (ṣafrā') = أصفر\nأَبْيَض (abyaḍ) → بَيْضَاء (bayḍā') = أبيض\nأَسْوَد (aswad) → سَوْدَاء (sawdā') = أسود",
          contentFr: "Les couleurs en arabe changent selon le genre du nom !\n\nMasculin → Féminin :\nأَحْمَر (aḥmar) → حَمْرَاء (ḥamrā') = rouge\nأَزْرَق (azraq) → زَرْقَاء (zarqā') = bleu\nأَخْضَر (akhḍar) → خَضْرَاء (khaḍrā') = vert\nأَصْفَر (aṣfar) → صَفْرَاء (ṣafrā') = jaune\nأَبْيَض (abyaḍ) → بَيْضَاء (bayḍā') = blanc\nأَسْوَد (aswad) → سَوْدَاء (sawdā') = noir"
        },
        {
          title: "Color Patterns",
          titleFr: "Les motifs de couleurs",
          content: "Most colors follow the pattern أَفْعَل (af'al) for masculine and فَعْلَاء (fa'lā') for feminine. This is a special adjective pattern!\n\nSome colors don't change:\nبُنِّي (bunnī) = brown\nبُرْتُقَالِي (burtuqālī) = orange\nوَرْدِي (wardī) = pink\nبَنَفْسَجِي (banafsajī) = purple",
          contentFr: "La plupart des couleurs suivent le modèle أَفْعَل (af'al) pour le masculin et فَعْلَاء (fa'lā') pour le féminin. C'est un modèle d'adjectif spécial !\n\nCertaines couleurs ne changent pas :\nبُنِّي (bunnī) = marron\nبُرْتُقَالِي (burtuqālī) = orange\nوَرْدِي (wardī) = rose\nبَنَفْسَجِي (banafsajī) = violet"
        }
      ],
      vocabulary: [
        { arabic: "أَحْمَر / حَمْرَاء", transliteration: "aḥmar / ḥamrā'", meaning: "red", meaningFr: "rouge" },
        { arabic: "أَزْرَق / زَرْقَاء", transliteration: "azraq / zarqā'", meaning: "blue", meaningFr: "bleu" },
        { arabic: "أَخْضَر / خَضْرَاء", transliteration: "akhḍar / khaḍrā'", meaning: "green", meaningFr: "vert" },
        { arabic: "أَصْفَر / صَفْرَاء", transliteration: "aṣfar / ṣafrā'", meaning: "yellow", meaningFr: "jaune" },
        { arabic: "أَبْيَض / بَيْضَاء", transliteration: "abyaḍ / bayḍā'", meaning: "white", meaningFr: "blanc" },
        { arabic: "أَسْوَد / سَوْدَاء", transliteration: "aswad / sawdā'", meaning: "black", meaningFr: "noir" },
        { arabic: "بُنِّي", transliteration: "bunnī", meaning: "brown", meaningFr: "marron" },
        { arabic: "وَرْدِي", transliteration: "wardī", meaning: "pink", meaningFr: "rose" }
      ]
    },
    exerciseCount: 14,
    prerequisites: ["2-2"]
  },
  {
    id: "2-4",
    phaseId: 2,
    order: 4,
    title: "Food and Drinks",
    titleAr: "الطعام والشراب",
    titleFr: "La nourriture et les boissons",
    description: "Learn vocabulary for common foods and beverages",
    descriptionFr: "Apprenez le vocabulaire des aliments et des boissons courants",
    objectives: [
      "Name common foods in Arabic",
      "Order food at a restaurant",
      "Express likes and dislikes for food",
      "Understand food-related verbs"
    ],
    objectivesFr: [
      "Nommer les aliments courants en arabe",
      "Commander de la nourriture dans un restaurant",
      "Exprimer vos préférences et dégoûts pour la nourriture",
      "Comprendre les verbes liés à la nourriture"
    ],
    estimatedTime: 55,
    difficulty: "easy",
    xpReward: 60,
    content: {
      theory: [
        {
          title: "Basic Food Words",
          titleFr: "Les mots alimentaires de base",
          content: "طَعَام (ṭa'ām) = food\nخُبْز (khubz) = bread\nمَاء (mā') = water\nأَرُزّ (aruzz) = rice\nلَحْم (laḥm) = meat\nدَجَاج (dajāj) = chicken\nسَمَك (samak) = fish\nخُضَار (khuḍār) = vegetables\nفَاكِهَة (fākiha) = fruit",
          contentFr: "طَعَام (ṭa'ām) = nourriture\nخُبْز (khubz) = pain\nمَاء (mā') = eau\nأَرُزّ (aruzz) = riz\nلَحْم (laḥm) = viande\nدَجَاج (dajāj) = poulet\nسَمَك (samak) = poisson\nخُضَار (khuḍār) = légumes\nفَاكِهَة (fākiha) = fruit"
        },
        {
          title: "Drinks",
          titleFr: "Les boissons",
          content: "شَرَاب (sharāb) = drink/beverage\nقَهْوَة (qahwa) = coffee\nشَاي (shāy) = tea\nحَلِيب (ḥalīb) = milk\nعَصِير ('aṣīr) = juice\n\nNote: قَهْوَة (qahwa) is the origin of 'coffee' in many languages!",
          contentFr: "شَرَاب (sharāb) = boisson\nقَهْوَة (qahwa) = café\nشَاي (shāy) = thé\nحَلِيب (ḥalīb) = lait\nعَصِير ('aṣīr) = jus\n\nRemarque : قَهْوَة (qahwa) est l'origine du mot « café » dans de nombreuses langues !"
        },
        {
          title: "At the Restaurant",
          titleFr: "Au restaurant",
          content: "أُرِيدُ (urīdu) = I want\nمِنْ فَضْلِكَ (min faḍlika) = please (m)\nالحِسَاب (al-ḥisāb) = the bill\nلَذِيذ (ladhīdh) = delicious",
          contentFr: "أُرِيدُ (urīdu) = Je veux\nمِنْ فَضْلِكَ (min faḍlika) = s'il vous plaît (m)\nالحِسَاب (al-ḥisāb) = l'addition\nلَذِيذ (ladhīdh) = délicieux"
        }
      ],
      vocabulary: [
        { arabic: "طَعَام", transliteration: "ṭa'ām", meaning: "food", meaningFr: "nourriture" },
        { arabic: "خُبْز", transliteration: "khubz", meaning: "bread", meaningFr: "pain" },
        { arabic: "مَاء", transliteration: "mā'", meaning: "water", meaningFr: "eau" },
        { arabic: "قَهْوَة", transliteration: "qahwa", meaning: "coffee", meaningFr: "café" },
        { arabic: "شَاي", transliteration: "shāy", meaning: "tea", meaningFr: "thé" },
        { arabic: "لَحْم", transliteration: "laḥm", meaning: "meat", meaningFr: "viande" },
        { arabic: "خُضَار", transliteration: "khuḍār", meaning: "vegetables", meaningFr: "légumes" },
        { arabic: "فَاكِهَة", transliteration: "fākiha", meaning: "fruit", meaningFr: "fruit" },
        { arabic: "لَذِيذ", transliteration: "ladhīdh", meaning: "delicious", meaningFr: "délicieux" }
      ]
    },
    exerciseCount: 18,
    prerequisites: ["2-3"]
  },
  {
    id: "2-5",
    phaseId: 2,
    order: 5,
    title: "Animals",
    titleAr: "الحيوانات",
    titleFr: "Les animaux",
    description: "Learn the names of common animals",
    descriptionFr: "Apprenez les noms des animaux courants",
    objectives: [
      "Name domestic and wild animals",
      "Use animal vocabulary in sentences",
      "Understand collective nouns",
      "Practice pronunciation of animal names"
    ],
    objectivesFr: [
      "Nommer les animaux domestiques et sauvages",
      "Utiliser le vocabulaire des animaux dans des phrases",
      "Comprendre les noms collectifs",
      "Pratiquer la prononciation des noms d'animaux"
    ],
    estimatedTime: 45,
    difficulty: "easy",
    xpReward: 50,
    content: {
      theory: [
        {
          title: "Domestic Animals",
          titleFr: "Les animaux domestiques",
          content: "قِطّ (qiṭṭ) = cat\nكَلْب (kalb) = dog\nحِصَان (ḥiṣān) = horse\nبَقَرَة (baqara) = cow\nخَرُوف (kharūf) = sheep\nدَجَاجَة (dajāja) = chicken\nعَنْزَة ('anza) = goat",
          contentFr: "قِطّ (qiṭṭ) = chat\nكَلْب (kalb) = chien\nحِصَان (ḥiṣān) = cheval\nبَقَرَة (baqara) = vache\nخَرُوف (kharūf) = mouton\nدَجَاجَة (dajāja) = poule\nعَنْزَة ('anza) = chèvre"
        },
        {
          title: "Wild Animals",
          titleFr: "Les animaux sauvages",
          content: "أَسَد (asad) = lion\nفِيل (fīl) = elephant\nقِرْد (qird) = monkey\nدُبّ (dubb) = bear\nثَعْلَب (tha'lab) = fox\nذِئْب (dhi'b) = wolf\nنَمِر (namir) = tiger",
          contentFr: "أَسَد (asad) = lion\nفِيل (fīl) = éléphant\nقِرْد (qird) = singe\nدُبّ (dubb) = ours\nثَعْلَب (tha'lab) = renard\nذِئْب (dhi'b) = loup\nنَمِر (namir) = tigre"
        },
        {
          title: "The Camel 🐪",
          titleFr: "Le chameau 🐪",
          content: "The camel (جَمَل - jamal) is the symbol of Arabia! Arabic has dozens of words for different types of camels. The basic word جَمَل refers to a male camel, while نَاقَة (nāqa) is a female camel.",
          contentFr: "Le chameau (جَمَل - jamal) est le symbole de l'Arabie ! L'arabe a des dizaines de mots pour différents types de chameaux. Le mot جَمَل fait référence à un chameau mâle, tandis que نَاقَة (nāqa) est un chameau femelle."
        }
      ],
      vocabulary: [
        { arabic: "حَيَوَان", transliteration: "ḥayawān", meaning: "animal", meaningFr: "animal" },
        { arabic: "قِطّ", transliteration: "qiṭṭ", meaning: "cat", meaningFr: "chat" },
        { arabic: "كَلْب", transliteration: "kalb", meaning: "dog", meaningFr: "chien" },
        { arabic: "أَسَد", transliteration: "asad", meaning: "lion", meaningFr: "lion" },
        { arabic: "جَمَل", transliteration: "jamal", meaning: "camel", meaningFr: "chameau" },
        { arabic: "طَائِر", transliteration: "ṭā'ir", meaning: "bird", meaningFr: "oiseau" },
        { arabic: "سَمَكَة", transliteration: "samaka", meaning: "fish", meaningFr: "poisson" },
        { arabic: "حِصَان", transliteration: "ḥiṣān", meaning: "horse", meaningFr: "cheval" }
      ]
    },
    exerciseCount: 15,
    prerequisites: ["2-4"]
  },
  {
    id: "2-6",
    phaseId: 2,
    order: 6,
    title: "Home and Furniture",
    titleAr: "البيت والأثاث",
    titleFr: "La maison et les meubles",
    description: "Learn vocabulary for rooms and household items",
    descriptionFr: "Apprenez le vocabulaire des pièces et des objets de la maison",
    objectives: [
      "Name rooms in a house",
      "Identify common furniture items",
      "Describe your home in Arabic",
      "Use location prepositions"
    ],
    objectivesFr: [
      "Nommer les pièces d'une maison",
      "Identifier les meubles courants",
      "Décrire votre maison en arabe",
      "Utiliser les prépositions de lieu"
    ],
    estimatedTime: 50,
    difficulty: "easy",
    xpReward: 55,
    content: {
      theory: [
        {
          title: "Rooms of the House",
          content: "بَيْت (bayt) = house\nمَنْزِل (manzil) = residence/home\nغُرْفَة (ghurfa) = room\nغُرْفَة النَّوْم (ghurfat an-nawm) = bedroom\nغُرْفَة الجُلُوس (ghurfat al-julūs) = living room\nمَطْبَخ (maṭbakh) = kitchen\nحَمَّام (ḥammām) = bathroom"
        },
        {
          title: "Furniture",
          content: "أَثَاث (athāth) = furniture\nسَرِير (sarīr) = bed\nكُرْسِي (kursī) = chair\nطَاوِلَة (ṭāwila) = table\nخِزَانَة (khizāna) = closet/cabinet\nمِرْآة (mir'āh) = mirror"
        },
        {
          title: "Location Words",
          content: "فِي (fī) = in\nعَلَى ('alā) = on\nتَحْت (taḥt) = under\nفَوْق (fawq) = above\nبِجَانِب (bi-jānib) = next to\nأَمَام (amām) = in front of\nوَرَاء (warā') = behind"
        }
      ],
      vocabulary: [
        { arabic: "بَيْت", transliteration: "bayt", meaning: "house", meaningFr: "maison" },
        { arabic: "غُرْفَة", transliteration: "ghurfa", meaning: "room", meaningFr: "pièce" },
        { arabic: "مَطْبَخ", transliteration: "maṭbakh", meaning: "kitchen", meaningFr: "cuisine" },
        { arabic: "حَمَّام", transliteration: "ḥammām", meaning: "bathroom", meaningFr: "salle de bain" },
        { arabic: "سَرِير", transliteration: "sarīr", meaning: "bed", meaningFr: "lit" },
        { arabic: "كُرْسِي", transliteration: "kursī", meaning: "chair", meaningFr: "chaise" },
        { arabic: "طَاوِلَة", transliteration: "ṭāwila", meaning: "table", meaningFr: "table" },
        { arabic: "بَاب", transliteration: "bāb", meaning: "door", meaningFr: "porte" },
        { arabic: "نَافِذَة", transliteration: "nāfidha", meaning: "window", meaningFr: "fenêtre" }
      ]
    },
    exerciseCount: 16,
    prerequisites: ["2-5"]
  },

  // SECTION 2: PRONOUNS AND POSSESSIVES (Lessons 7-10)
  {
    id: "2-7",
    phaseId: 2,
    order: 7,
    title: "Personal Pronouns",
    titleAr: "الضمائر الشخصية",
    titleFr: "Les pronoms personnels",
    description: "Learn all Arabic personal pronouns",
    descriptionFr: "Apprenez tous les pronoms personnels arabes",
    objectives: [
      "Memorize all 12 personal pronouns",
      "Distinguish gender and number",
      "Use pronouns in sentences",
      "Understand the dual form"
    ],
    objectivesFr: [
      "Mémoriser les 12 pronoms personnels",
      "Distinguer le genre et le nombre",
      "Utiliser les pronoms dans les phrases",
      "Comprendre la forme duelle"
    ],
    estimatedTime: 55,
    difficulty: "medium",
    xpReward: 65,
    content: {
      theory: [
        {
          title: "Arabic Pronoun System",
          content: "Arabic has MORE pronouns than English because it distinguishes:\n• Gender (masculine/feminine)\n• Number (singular/dual/plural)\n• Person (1st/2nd/3rd)\n\nThat gives us 12 pronouns (vs. 7 in English)!"
        },
        {
          title: "Singular Pronouns",
          content: "1st person:\nأَنَا (anā) = I\n\n2nd person:\nأَنْتَ (anta) = you (masculine)\nأَنْتِ (anti) = you (feminine)\n\n3rd person:\nهُوَ (huwa) = he\nهِيَ (hiya) = she"
        },
        {
          title: "Plural Pronouns",
          content: "1st person:\nنَحْنُ (naḥnu) = we\n\n2nd person:\nأَنْتُمْ (antum) = you all (m or mixed)\nأَنْتُنَّ (antunna) = you all (f only)\n\n3rd person:\nهُمْ (hum) = they (m or mixed)\nهُنَّ (hunna) = they (f only)"
        },
        {
          title: "Dual Pronouns",
          content: "Arabic also has dual forms for exactly 2 people:\nأَنْتُمَا (antumā) = you two\nهُمَا (humā) = they two\n\nThe dual is used less in modern spoken Arabic, but important for formal/written Arabic!"
        }
      ],
      vocabulary: [
        { arabic: "أَنَا", transliteration: "anā", meaning: "I", meaningFr: "je" },
        { arabic: "أَنْتَ", transliteration: "anta", meaning: "you (m.s.)", meaningFr: "tu (m.s.)" },
        { arabic: "أَنْتِ", transliteration: "anti", meaning: "you (f.s.)", meaningFr: "tu (f.s.)" },
        { arabic: "هُوَ", transliteration: "huwa", meaning: "he", meaningFr: "il" },
        { arabic: "هِيَ", transliteration: "hiya", meaning: "she", meaningFr: "elle" },
        { arabic: "نَحْنُ", transliteration: "naḥnu", meaning: "we", meaningFr: "nous" },
        { arabic: "أَنْتُمْ", transliteration: "antum", meaning: "you (pl.)", meaningFr: "vous (pl.)" },
        { arabic: "هُمْ", transliteration: "hum", meaning: "they (m)", meaningFr: "ils (m)" },
        { arabic: "هُنَّ", transliteration: "hunna", meaning: "they (f)", meaningFr: "elles (f)" }
      ]
    },
    exerciseCount: 18,
    prerequisites: ["2-6"]
  },
  {
    id: "2-8",
    phaseId: 2,
    order: 8,
    title: "Possessive Pronouns",
    titleAr: "ضمائر الملكية",
    titleFr: "Les pronoms possessifs",
    description: "Learn to express possession in Arabic",
    descriptionFr: "Apprenez à exprimer la possession en arabe",
    objectives: [
      "Attach possessive suffixes to nouns",
      "Express 'my', 'your', 'his', 'her', etc.",
      "Understand suffix pronunciation changes",
      "Form possessive phrases"
    ],
    objectivesFr: [
      "Attacher les suffixes possessifs aux noms",
      "Exprimer 'mon', 'ton', 'son', 'son' (féminin), etc.",
      "Comprendre les changements de prononciation des suffixes",
      "Former des phrases possessives"
    ],
    estimatedTime: 55,
    difficulty: "medium",
    xpReward: 65,
    content: {
      theory: [
        {
          title: "Possessive Suffixes",
          content: "Arabic expresses possession by ATTACHING a suffix to the noun:\n\nكِتَاب (kitāb) = book\nكِتَابِي (kitābī) = my book\nكِتَابُكَ (kitābuka) = your book (m)\nكِتَابُهُ (kitābuhu) = his book\nكِتَابُهَا (kitābuhā) = her book"
        },
        {
          title: "All Possessive Suffixes",
          content: "Singular:\nـي (-ī) = my\nـكَ (-ka) = your (m)\nـكِ (-ki) = your (f)\nـهُ (-hu) = his\nـهَا (-hā) = her\n\nPlural:\nـنَا (-nā) = our\nـكُمْ (-kum) = your (pl)\nـهُمْ (-hum) = their"
        },
        {
          title: "Examples with Family",
          content: "أَبِي (abī) = my father\nأُمُّكَ (ummuka) = your mother (m)\nأُخْتُهُ (ukhtuhu) = his sister\nبَيْتُنَا (baytunā) = our house\nأَبُوهُمْ (abūhum) = their father"
        }
      ],
      vocabulary: [
        { arabic: "كِتَابِي", transliteration: "kitābī", meaning: "my book", meaningFr: "mon livre" },
        { arabic: "بَيْتُكَ", transliteration: "baytuka", meaning: "your house (m)", meaningFr: "ta maison (m)" },
        { arabic: "سَيَّارَتُهَا", transliteration: "sayyāratuhā", meaning: "her car", meaningFr: "sa voiture" },
        { arabic: "عَائِلَتُنَا", transliteration: "'ā'ilatunā", meaning: "our family", meaningFr: "notre famille" },
        { arabic: "صَدِيقُهُمْ", transliteration: "ṣadīquhum", meaning: "their friend", meaningFr: "leur ami" }
      ]
    },
    exerciseCount: 17,
    prerequisites: ["2-7"]
  },
  {
    id: "2-9",
    phaseId: 2,
    order: 9,
    title: "Demonstrative Pronouns",
    titleAr: "أسماء الإشارة",
    titleFr: "Les pronoms démonstratifs",
    description: "Learn 'this', 'that', 'these', 'those' in Arabic",
    descriptionFr: "Apprenez « ceci », « cela », « ceux-ci », « ceux-là » en arabe",
    objectives: [
      "Use هَذَا and هَذِهِ correctly",
      "Distinguish near and far demonstratives",
      "Form sentences with demonstratives",
      "Match demonstratives with noun gender"
    ],
    objectivesFr: [
      "Utiliser هَذَا et هَذِهِ correctement",
      "Distinguer les démonstratifs proches et éloignés",
      "Former des phrases avec les démonstratifs",
      "Accorder les démonstratifs avec le genre du nom"
    ],
    estimatedTime: 50,
    difficulty: "medium",
    xpReward: 60,
    content: {
      theory: [
        {
          title: "Near Demonstratives (This/These)",
          content: "هَذَا (hādhā) = this (masculine)\nهَذِهِ (hādhihi) = this (feminine)\nهَذَانِ (hādhāni) = these two (m)\nهَاتَانِ (hātāni) = these two (f)\nهَؤُلَاءِ (hā'ulā'i) = these (plural)"
        },
        {
          title: "Far Demonstratives (That/Those)",
          content: "ذَلِكَ (dhālika) = that (masculine)\nتِلْكَ (tilka) = that (feminine)\nذَانِكَ (dhānika) = those two (m)\nتَانِكَ (tānika) = those two (f)\nأُولَئِكَ (ulā'ika) = those (plural)"
        },
        {
          title: "Using Demonstratives",
          content: "هَذَا كِتَابٌ (hādhā kitābun) = This is a book\nهَذِهِ سَيَّارَةٌ (hādhihi sayyāratun) = This is a car\nذَلِكَ الرَّجُلُ (dhālika ar-rajulu) = That man\nتِلْكَ المَرْأَةُ (tilka al-mar'atu) = That woman"
        }
      ],
      vocabulary: [
        { arabic: "هَذَا", transliteration: "hādhā", meaning: "this (m)", meaningFr: "ceci (m)" },
        { arabic: "هَذِهِ", transliteration: "hādhihi", meaning: "this (f)", meaningFr: "ceci (f)" },
        { arabic: "ذَلِكَ", transliteration: "dhālika", meaning: "that (m)", meaningFr: "cela (m)" },
        { arabic: "تِلْكَ", transliteration: "tilka", meaning: "that (f)", meaningFr: "cela (f)" },
        { arabic: "هَؤُلَاءِ", transliteration: "hā'ulā'i", meaning: "these", meaningFr: "ceux-ci" },
        { arabic: "أُولَئِكَ", transliteration: "ulā'ika", meaning: "those", meaningFr: "ceux-là" }
      ]
    },
    exerciseCount: 16,
    prerequisites: ["2-8"]
  },
  {
    id: "2-10",
    phaseId: 2,
    order: 10,
    title: "Interrogative Pronouns",
    titleAr: "أدوات الاستفهام",
    titleFr: "Les pronoms interrogatifs",
    description: "Learn question words in Arabic",
    descriptionFr: "Apprenez les mots interrogatifs en arabe",
    objectives: [
      "Ask 'who', 'what', 'where', 'when', 'why', 'how'",
      "Form questions correctly",
      "Understand word order in questions",
      "Practice question-answer exchanges"
    ],
    objectivesFr: [
      "Poser les questions 'qui', 'quoi', 'où', 'quand', 'pourquoi', 'comment'",
      "Former les questions correctement",
      "Comprendre l'ordre des mots dans les questions",
      "Pratiquer les échanges question-réponse"
    ],
    estimatedTime: 55,
    difficulty: "medium",
    xpReward: 65,
    content: {
      theory: [
        {
          title: "Basic Question Words",
          content: "مَنْ (man) = who?\nمَا (mā) / مَاذَا (mādhā) = what?\nأَيْنَ (ayna) = where?\nمَتَى (matā) = when?\nلِمَاذَا (limādhā) = why?\nكَيْفَ (kayfa) = how?\nكَمْ (kam) = how many/much?"
        },
        {
          title: "Forming Questions",
          content: "Questions often start with the question word:\nمَنْ هَذَا؟ (man hādhā?) = Who is this?\nمَا اسْمُكَ؟ (mā ismuka?) = What is your name?\nأَيْنَ أَنْتَ؟ (ayna anta?) = Where are you?\nمَتَى السَّفَر؟ (matā as-safar?) = When is the trip?"
        },
        {
          title: "Yes/No Questions",
          content: "For yes/no questions, use هَلْ (hal) or أَ (a) at the beginning:\nهَلْ أَنْتَ طَالِبٌ؟ (hal anta ṭālibun?) = Are you a student?\nأَتُحِبُّ القَهْوَة؟ (atuḥibbu al-qahwa?) = Do you like coffee?"
        }
      ],
      vocabulary: [
        { arabic: "مَنْ", transliteration: "man", meaning: "who?", meaningFr: "qui ?" },
        { arabic: "مَا / مَاذَا", transliteration: "mā / mādhā", meaning: "what?", meaningFr: "quoi ?" },
        { arabic: "أَيْنَ", transliteration: "ayna", meaning: "where?", meaningFr: "où ?" },
        { arabic: "مَتَى", transliteration: "matā", meaning: "when?", meaningFr: "quand ?" },
        { arabic: "لِمَاذَا", transliteration: "limādhā", meaning: "why?", meaningFr: "pourquoi ?" },
        { arabic: "كَيْفَ", transliteration: "kayfa", meaning: "how?", meaningFr: "comment ?" },
        { arabic: "هَلْ", transliteration: "hal", meaning: "is? / do? (yes/no marker)", meaningFr: "est ? / tu fais ? (marqueur oui/non)" }
      ]
    },
    exerciseCount: 18,
    prerequisites: ["2-9"]
  },

  // SECTION 3: BASIC GRAMMAR (Lessons 11-15)
  {
    id: "2-11",
    phaseId: 2,
    order: 11,
    title: "Gender in Arabic",
    titleAr: "المذكر والمؤنث",
    titleFr: "Le genre en arabe",
    description: "Understand masculine and feminine forms",
    descriptionFr: "Comprenez les formes masculines et féminines",
    objectives: [
      "Identify masculine and feminine nouns",
      "Recognize the feminine marker ة",
      "Convert masculine to feminine",
      "Apply gender agreement rules"
    ],
    objectivesFr: [
      "Identifier les noms masculins et féminins",
      "Reconnaître le marqueur féminin ة",
      "Convertir le masculin en féminin",
      "Appliquer les règles d'accord des genres"
    ],
    estimatedTime: 50,
    difficulty: "medium",
    xpReward: 60,
    content: {
      theory: [
        {
          title: "Gender Basics",
          content: "Arabic nouns are either masculine (مُذَكَّر) or feminine (مُؤَنَّث). Unlike English, ALL nouns have gender, including objects!\n\nMasculine: كِتَاب (book), قَلَم (pen), بَاب (door)\nFeminine: سَيَّارَة (car), مَدْرَسَة (school), مَدِينَة (city)"
        },
        {
          title: "The Feminine Marker ة",
          content: "Most feminine nouns end in ة (tā' marbūṭa - 'tied t'):\nمُعَلِّم (mu'allim) = teacher (m) → مُعَلِّمَة (mu'allima) = teacher (f)\nطَالِب (ṭālib) = student (m) → طَالِبَة (ṭāliba) = student (f)\n\nNote: ة is pronounced 'a' at the end of a phrase, but 't' when connected to the next word."
        },
        {
          title: "Naturally Feminine Nouns",
          content: "Some nouns are feminine without ة:\nأُمّ (umm) = mother\nبِنْت (bint) = girl/daughter\nأُخْت (ukht) = sister\nشَمْس (shams) = sun\nأَرْض (arḍ) = earth\n\nMany body parts that come in pairs are also feminine!"
        }
      ],
      vocabulary: [
        { arabic: "مُذَكَّر", transliteration: "mudhakkar", meaning: "masculine", meaningFr: "masculin" },
        { arabic: "مُؤَنَّث", transliteration: "mu'annath", meaning: "feminine", meaningFr: "féminin" },
        { arabic: "طَالِب / طَالِبَة", transliteration: "ṭālib / ṭāliba", meaning: "student (m/f)", meaningFr: "étudiant (m/f)" },
        { arabic: "مُعَلِّم / مُعَلِّمَة", transliteration: "mu'allim / mu'allima", meaning: "teacher (m/f)", meaningFr: "professeur (m/f)" },
        { arabic: "صَدِيق / صَدِيقَة", transliteration: "ṣadīq / ṣadīqa", meaning: "friend (m/f)", meaningFr: "ami (m/f)" }
      ]
    },
    exerciseCount: 16,
    prerequisites: ["2-10"]
  },
  {
    id: "2-12",
    phaseId: 2,
    order: 12,
    title: "The Definite Article الـ",
    titleAr: "أداة التعريف: الـ",
    titleFr: "L'article défini الـ",
    description: "Master 'the' in Arabic and its pronunciation rules",
    descriptionFr: "Maîtrisez l'article « le/la » en arabe et ses règles de prononciation",
    objectives: [
      "Use الـ (al-) to make nouns definite",
      "Understand sun and moon letters",
      "Apply assimilation rules correctly",
      "Distinguish definite from indefinite nouns"
    ],
    objectivesFr: [
      "Utiliser الـ (al-) pour rendre les noms définis",
      "Comprendre les lettres du soleil et de la lune",
      "Appliquer les règles d'assimilation correctement",
      "Distinguer les noms définis des noms indéfinis"
    ],
    estimatedTime: 55,
    difficulty: "medium",
    xpReward: 65,
    content: {
      theory: [
        {
          title: "The Definite Article",
          content: "الـ (al-) means 'the' and attaches to the beginning of nouns:\nكِتَاب (kitāb) = a book\nالكِتَاب (al-kitāb) = THE book\n\nRemember: Indefinite nouns have tanwīn (كِتَابٌ); definite nouns have الـ (الكِتَاب)."
        },
        {
          title: "Sun Letters (حُرُوف شَمْسِيَّة)",
          content: "With 'sun letters', the ل in الـ is SILENT and the following letter is doubled:\n\nت ث د ذ ر ز س ش ص ض ط ظ ل ن\n\nExample: الشَّمْس (ash-shams) not (al-shams)\nالسَّلَام (as-salām) not (al-salām)"
        },
        {
          title: "Moon Letters (حُرُوف قَمَرِيَّة)",
          content: "With 'moon letters', الـ is pronounced fully:\n\nا ب ج ح خ ع غ ف ق ك م ه و ي\n\nExample: القَمَر (al-qamar)\nالكِتَاب (al-kitāb)\nالبَيْت (al-bayt)"
        }
      ],
      vocabulary: [
        { arabic: "الكِتَاب", transliteration: "al-kitāb", meaning: "the book", meaningFr: "le livre" },
        { arabic: "الشَّمْس", transliteration: "ash-shams", meaning: "the sun", meaningFr: "le soleil" },
        { arabic: "القَمَر", transliteration: "al-qamar", meaning: "the moon", meaningFr: "la lune" },
        { arabic: "النُّور", transliteration: "an-nūr", meaning: "the light", meaningFr: "la lumière" },
        { arabic: "البَيْت", transliteration: "al-bayt", meaning: "the house", meaningFr: "la maison" }
      ]
    },
    exerciseCount: 17,
    prerequisites: ["2-11"]
  },
  {
    id: "2-13",
    phaseId: 2,
    order: 13,
    title: "Adjectives and Agreement",
    titleAr: "الصفات والمطابقة",
    titleFr: "Les adjectifs et l'accord",
    description: "Learn adjectives and how they agree with nouns",
    descriptionFr: "Apprenez les adjectifs et comment ils s'accordent avec les noms",
    objectives: [
      "Use common Arabic adjectives",
      "Apply gender agreement",
      "Apply definiteness agreement",
      "Form noun-adjective phrases"
    ],
    objectivesFr: [
      "Utiliser les adjectifs arabes courants",
      "Appliquer l'accord de genre",
      "Appliquer l'accord de définitude",
      "Former des groupes nominaux et adjectivaux"
    ],
    estimatedTime: 55,
    difficulty: "medium",
    xpReward: 65,
    content: {
      theory: [
        {
          title: "Basic Adjectives",
          content: "كَبِير (kabīr) = big\nصَغِير (ṣaghīr) = small\nجَمِيل (jamīl) = beautiful\nجَدِيد (jadīd) = new\nقَدِيم (qadīm) = old\nسَرِيع (sarī') = fast\nبَطِيء (baṭī') = slow"
        },
        {
          title: "Gender Agreement",
          content: "Adjectives MUST match the gender of the noun:\n\nكِتَابٌ كَبِيرٌ (kitābun kabīrun) = a big book (m)\nسَيَّارَةٌ كَبِيرَةٌ (sayyāratun kabīratun) = a big car (f)\n\nAdd ة to make adjectives feminine!"
        },
        {
          title: "Definiteness Agreement",
          content: "Adjectives must also match definiteness:\n\nIndefinite: كِتَابٌ كَبِيرٌ = a big book\nDefinite: الكِتَابُ الكَبِيرُ = THE big book\n\nBoth noun AND adjective get الـ!"
        }
      ],
      vocabulary: [
        { arabic: "كَبِير / كَبِيرَة", transliteration: "kabīr / kabīra", meaning: "big", meaningFr: "grand" },
        { arabic: "صَغِير / صَغِيرَة", transliteration: "ṣaghīr / ṣaghīra", meaning: "small", meaningFr: "petit" },
        { arabic: "جَمِيل / جَمِيلَة", transliteration: "jamīl / jamīla", meaning: "beautiful", meaningFr: "beau" },
        { arabic: "جَدِيد / جَدِيدَة", transliteration: "jadīd / jadīda", meaning: "new", meaningFr: "nouveau" },
        { arabic: "طَوِيل / طَوِيلَة", transliteration: "ṭawīl / ṭawīla", meaning: "tall/long", meaningFr: "grand/long" },
        { arabic: "قَصِير / قَصِيرَة", transliteration: "qaṣīr / qaṣīra", meaning: "short", meaningFr: "court" }
      ]
    },
    exerciseCount: 18,
    prerequisites: ["2-12"]
  },
  {
    id: "2-14",
    phaseId: 2,
    order: 14,
    title: "Plural Forms",
    titleAr: "صيغ الجمع",
    titleFr: "Les formes du pluriel",
    description: "Learn how to form plurals in Arabic",
    descriptionFr: "Apprenez à former les pluriels en arabe",
    objectives: [
      "Understand sound and broken plurals",
      "Form masculine and feminine sound plurals",
      "Recognize common broken plural patterns",
      "Use plurals correctly in sentences"
    ],
    objectivesFr: [
      "Comprendre les pluriels sains et cassés",
      "Former les pluriels sains masculins et féminins",
      "Reconnaître les modèles de pluriels cassés courants",
      "Utiliser correctement les pluriels dans les phrases"
    ],
    estimatedTime: 60,
    difficulty: "medium",
    xpReward: 70,
    content: {
      theory: [
        {
          title: "Sound Plurals",
          content: "Sound plurals add endings to the singular:\n\nMasculine sound plural: Add ـون (-ūn) or ـين (-īn)\nمُعَلِّم (teacher) → مُعَلِّمُون (teachers)\n\nFeminine sound plural: Change ة to ات (-āt)\nمُعَلِّمَة → مُعَلِّمَات"
        },
        {
          title: "Broken Plurals",
          content: "Broken plurals change the internal vowels (like English 'man/men'):\nكِتَاب (book) → كُتُب (books)\nرَجُل (man) → رِجَال (men)\nبَيْت (house) → بُيُوت (houses)\n\nThese must be memorized for each word!"
        },
        {
          title: "Common Broken Plural Patterns",
          content: "فُعُول: بُيُوت، قُلُوب، عُيُون\nفِعَال: رِجَال، جِبَال\nأَفْعَال: أَقْلَام، أَوْلَاد\nفُعَلَاء: عُلَمَاء، أُمَرَاء"
        }
      ],
      vocabulary: [
        { arabic: "كِتَاب → كُتُب", transliteration: "kitāb → kutub", meaning: "book → books", meaningFr: "livre → livres" },
        { arabic: "رَجُل → رِجَال", transliteration: "rajul → rijāl", meaning: "man → men", meaningFr: "homme → hommes" },
        { arabic: "بَيْت → بُيُوت", transliteration: "bayt → buyūt", meaning: "house → houses", meaningFr: "maison → maisons" },
        { arabic: "وَلَد → أَوْلَاد", transliteration: "walad → awlād", meaning: "boy → boys", meaningFr: "garçon → garçons" },
        { arabic: "طَالِب → طُلَّاب", transliteration: "ṭālib → ṭullāb", meaning: "student → students", meaningFr: "étudiant → étudiants" }
      ]
    },
    exerciseCount: 18,
    prerequisites: ["2-13"]
  },
  {
    id: "2-15",
    phaseId: 2,
    order: 15,
    title: "Numbers 11-100",
    titleAr: "الأعداد ١١-١٠٠",
    titleFr: "Les nombres de 11 à 100",
    description: "Learn numbers from 11 to 100",
    descriptionFr: "Apprenez les nombres de 11 à 100",
    objectives: [
      "Count from 11 to 100 in Arabic",
      "Understand number-noun agreement",
      "Read prices and quantities",
      "Use numbers in practical contexts"
    ],
    objectivesFr: [
      "Compter de 11 à 100 en arabe",
      "Comprendre l'accord numéro-nom",
      "Lire les prix et les quantités",
      "Utiliser les nombres dans des contextes pratiques"
    ],
    estimatedTime: 55,
    difficulty: "medium",
    xpReward: 65,
    content: {
      theory: [
        {
          title: "Numbers 11-19",
          content: "These are compound numbers:\n11 = أَحَدَ عَشَرَ (aḥada 'ashara)\n12 = اِثْنَا عَشَرَ (ithnā 'ashara)\n13 = ثَلَاثَةَ عَشَرَ (thalāthata 'ashara)\n14 = أَرْبَعَةَ عَشَرَ (arba'ata 'ashara)\n15 = خَمْسَةَ عَشَرَ (khamsata 'ashara)"
        },
        {
          title: "Tens (20-90)",
          content: "20 = عِشْرُون ('ishrūn)\n30 = ثَلَاثُون (thalāthūn)\n40 = أَرْبَعُون (arba'ūn)\n50 = خَمْسُون (khamsūn)\n60 = سِتُّون (sittūn)\n70 = سَبْعُون (sab'ūn)\n80 = ثَمَانُون (thamānūn)\n90 = تِسْعُون (tis'ūn)"
        },
        {
          title: "Compound Numbers",
          content: "21-99 are formed with وَ (and):\n21 = وَاحِدٌ وَعِشْرُون (one and twenty)\n35 = خَمْسَةٌ وَثَلَاثُون (five and thirty)\n99 = تِسْعَةٌ وَتِسْعُون (nine and ninety)"
        }
      ],
      vocabulary: [
        { arabic: "عِشْرُون", transliteration: "'ishrūn", meaning: "twenty", meaningFr: "vingt" },
        { arabic: "ثَلَاثُون", transliteration: "thalāthūn", meaning: "thirty", meaningFr: "trente" },
        { arabic: "خَمْسُون", transliteration: "khamsūn", meaning: "fifty", meaningFr: "cinquante" },
        { arabic: "مِئَة / مِائَة", transliteration: "mi'a", meaning: "one hundred", meaningFr: "cent" },
        { arabic: "رَقْم", transliteration: "raqm", meaning: "number", meaningFr: "nombre" }
      ]
    },
    exerciseCount: 16,
    prerequisites: ["2-14"]
  },

  // SECTION 4: VERB INTRODUCTION (Lessons 16-20)
  {
    id: "2-16",
    phaseId: 2,
    order: 16,
    title: "Introduction to Arabic Verbs",
    titleAr: "مقدمة في الأفعال",
    titleFr: "Introduction aux verbes arabes",
    description: "Understand the Arabic verb system basics",
    descriptionFr: "Comprenez les bases du système verbal arabe",
    objectives: [
      "Understand the three-letter root system",
      "Recognize verb patterns",
      "Identify verb forms in sentences",
      "Learn the concept of past, present, and future"
    ],
    objectivesFr: [
      "Comprendre le système de racines à trois lettres",
      "Reconnaître les modèles de verbes",
      "Identifier les formes de verbes dans les phrases",
      "Apprendre le concept du passé, du présent et du futur"
    ],
    estimatedTime: 55,
    difficulty: "medium",
    xpReward: 65,
    content: {
      theory: [
        {
          title: "The Three-Letter Root",
          content: "Most Arabic verbs come from a THREE-LETTER ROOT. By adding prefixes, suffixes, and changing vowels, you create different words:\n\nRoot: ك-ت-ب (k-t-b) = concept of writing\n• كَتَبَ (kataba) = he wrote\n• يَكْتُبُ (yaktub) = he writes\n• كِتَاب (kitāb) = book\n• كَاتِب (kātib) = writer\n• مَكْتَب (maktab) = office/desk"
        },
        {
          title: "Verb Tenses",
          content: "Arabic has TWO main verb forms:\n\n1. الفِعْل المَاضِي (al-fi'l al-māḍī) = Past tense\nكَتَبَ = he wrote\n\n2. الفِعْل المُضَارِع (al-fi'l al-muḍāri') = Present/Future\nيَكْتُبُ = he writes / he will write"
        },
        {
          title: "Person, Gender, Number",
          content: "Arabic verbs change based on:\n• WHO is doing the action (I, you, he, she, etc.)\n• GENDER (masculine/feminine)\n• NUMBER (singular, dual, plural)\n\nThis means MANY verb forms! But don't worry - patterns are regular."
        }
      ],
      vocabulary: [
        { arabic: "فِعْل", transliteration: "fi'l", meaning: "verb", meaningFr: "verbe" },
        { arabic: "كَتَبَ", transliteration: "kataba", meaning: "he wrote", meaningFr: "il a écrit" },
        { arabic: "قَرَأَ", transliteration: "qara'a", meaning: "he read", meaningFr: "il a lu" },
        { arabic: "ذَهَبَ", transliteration: "dhahaba", meaning: "he went", meaningFr: "il est allé" },
        { arabic: "فَعَلَ", transliteration: "fa'ala", meaning: "he did", meaningFr: "il a fait" }
      ]
    },
    exerciseCount: 15,
    prerequisites: ["2-15"]
  },
  {
    id: "2-17",
    phaseId: 2,
    order: 17,
    title: "Past Tense: Form I",
    titleAr: "الفعل الماضي: الفعل الثلاثي",
    titleFr: "Le passé : Forme I",
    description: "Learn to conjugate past tense verbs",
    descriptionFr: "Apprenez à conjuguer les verbes au passé",
    objectives: [
      "Conjugate past tense for all pronouns",
      "Memorize common past tense verbs",
      "Form simple past tense sentences",
      "Understand suffixes for each person"
    ],
    objectivesFr: [
      "Conjuguer les verbes au passé pour tous les pronoms",
      "Mémoriser les verbes au passé courants",
      "Former des phrases au passé simple",
      "Comprendre les suffixes pour chaque personne"
    ],
    estimatedTime: 60,
    difficulty: "medium",
    xpReward: 70,
    content: {
      theory: [
        {
          title: "Past Tense Conjugation",
          content: "The past tense adds SUFFIXES to show who did the action:\n\nكَتَبَ (kataba) = he wrote\nكَتَبَتْ (katabat) = she wrote\nكَتَبْتُ (katabtu) = I wrote\nكَتَبْتَ (katabta) = you wrote (m)\nكَتَبْتِ (katabti) = you wrote (f)\nكَتَبْنَا (katabnā) = we wrote\nكَتَبُوا (katabū) = they wrote (m)"
        },
        {
          title: "Common Past Tense Verbs",
          content: "ذَهَبَ (dhahaba) = he went\nأَكَلَ (akala) = he ate\nشَرِبَ (shariba) = he drank\nجَلَسَ (jalasa) = he sat\nفَتَحَ (fataḥa) = he opened\nأَغْلَقَ (aghlaqa) = he closed\nعَمِلَ ('amila) = he worked"
        }
      ],
      vocabulary: [
        { arabic: "كَتَبْتُ", transliteration: "katabtu", meaning: "I wrote", meaningFr: "j'ai écrit" },
        { arabic: "ذَهَبَ", transliteration: "dhahaba", meaning: "he went", meaningFr: "il est allé" },
        { arabic: "أَكَلَتْ", transliteration: "akalat", meaning: "she ate", meaningFr: "elle a mangé" },
        { arabic: "شَرِبْنَا", transliteration: "sharibnā", meaning: "we drank", meaningFr: "nous avons bu" },
        { arabic: "دَرَسُوا", transliteration: "darasū", meaning: "they studied", meaningFr: "ils ont étudié" }
      ]
    },
    exerciseCount: 18,
    prerequisites: ["2-16"]
  },
  {
    id: "2-18",
    phaseId: 2,
    order: 18,
    title: "Present Tense: Form I",
    titleAr: "الفعل المضارع: الفعل الثلاثي",
    titleFr: "Le présent : Forme I",
    description: "Learn present tense conjugation",
    descriptionFr: "Apprenez la conjugaison au présent",
    objectives: [
      "Conjugate present tense for all pronouns",
      "Understand prefix + suffix patterns",
      "Use present tense in sentences",
      "Express ongoing actions"
    ],
    objectivesFr: [
      "Conjuguer les verbes au présent pour tous les pronoms",
      "Comprendre les modèles de préfixe + suffixe",
      "Utiliser le présent dans les phrases",
      "Exprimer les actions en cours"
    ],
    estimatedTime: 60,
    difficulty: "medium",
    xpReward: 70,
    content: {
      theory: [
        {
          title: "Present Tense Formation",
          content: "Present tense uses PREFIXES (and sometimes suffixes):\n\nيَكْتُبُ (yaktub) = he writes (prefix يـ)\nتَكْتُبُ (taktub) = she writes (prefix تـ)\nأَكْتُبُ (aktub) = I write (prefix أَ)\nتَكْتُبُ (taktub) = you write-m (prefix تـ)\nتَكْتُبِينَ (taktubīn) = you write-f (prefix تـ + suffix ين)\nنَكْتُبُ (naktub) = we write (prefix نـ)"
        },
        {
          title: "Present Tense Pattern",
          content: "The pattern is:\nأَ + root = I\nتَ + root = you (m) / she\nيَ + root = he\nنَ + root = we\n\nAdd ـُونَ for 'they' masculine\nAdd ـْنَ for 'they' feminine"
        }
      ],
      vocabulary: [
        { arabic: "أَكْتُبُ", transliteration: "aktubu", meaning: "I write", meaningFr: "j'écris" },
        { arabic: "تَذْهَبُ", transliteration: "tadhhabu", meaning: "you go / she goes", meaningFr: "tu vas / elle va" },
        { arabic: "يَأْكُلُ", transliteration: "ya'kulu", meaning: "he eats", meaningFr: "il mange" },
        { arabic: "نَشْرَبُ", transliteration: "nashrabu", meaning: "we drink", meaningFr: "nous buvons" },
        { arabic: "يَعْمَلُونَ", transliteration: "ya'malūna", meaning: "they work", meaningFr: "ils travaillent" }
      ]
    },
    exerciseCount: 18,
    prerequisites: ["2-17"]
  },
  {
    id: "2-19",
    phaseId: 2,
    order: 19,
    title: "Common Verbs in Action",
    titleAr: "أفعال شائعة",
    titleFr: "Les verbes courants en action",
    description: "Practice the most frequently used Arabic verbs",
    descriptionFr: "Pratiquez les verbes arabes les plus fréquemment utilisés",
    objectives: [
      "Master 20 most common Arabic verbs",
      "Use verbs in both tenses",
      "Build practical sentences",
      "Develop verb vocabulary"
    ],
    objectivesFr: [
      "Maîtriser les 20 verbes arabes les plus courants",
      "Utiliser les verbes aux deux temps",
      "Construire des phrases pratiques",
      "Développer le vocabulaire des verbes"
    ],
    estimatedTime: 55,
    difficulty: "medium",
    xpReward: 65,
    content: {
      theory: [
        {
          title: "Movement Verbs",
          content: "ذَهَبَ / يَذْهَبُ (dhahaba/yadhhabu) = to go\nجَاءَ / يَجِيءُ (jā'a/yajī'u) = to come\nخَرَجَ / يَخْرُجُ (kharaja/yakhruju) = to exit\nدَخَلَ / يَدْخُلُ (dakhala/yadkhulu) = to enter\nرَجَعَ / يَرْجِعُ (raja'a/yarji'u) = to return"
        },
        {
          title: "Daily Action Verbs",
          content: "أَكَلَ / يَأْكُلُ (akala/ya'kulu) = to eat\nشَرِبَ / يَشْرَبُ (shariba/yashrabu) = to drink\nنَامَ / يَنَامُ (nāma/yanāmu) = to sleep\nقَامَ / يَقُومُ (qāma/yaqūmu) = to stand/get up\nجَلَسَ / يَجْلِسُ (jalasa/yajlisu) = to sit"
        },
        {
          title: "Communication Verbs",
          content: "قَالَ / يَقُولُ (qāla/yaqūlu) = to say\nسَأَلَ / يَسْأَلُ (sa'ala/yas'alu) = to ask\nأَجَابَ / يُجِيبُ (ajāba/yujību) = to answer\nتَكَلَّمَ / يَتَكَلَّمُ (takallama/yatakallamu) = to speak\nفَهِمَ / يَفْهَمُ (fahima/yafhamu) = to understand"
        }
      ],
      vocabulary: [
        { arabic: "ذَهَبَ / يَذْهَبُ", transliteration: "dhahaba / yadhhabu", meaning: "to go", meaningFr: "aller" },
        { arabic: "جَاءَ / يَجِيءُ", transliteration: "jā'a / yajī'u", meaning: "to come", meaningFr: "venir" },
        { arabic: "أَكَلَ / يَأْكُلُ", transliteration: "akala / ya'kulu", meaning: "to eat", meaningFr: "manger" },
        { arabic: "قَالَ / يَقُولُ", transliteration: "qāla / yaqūlu", meaning: "to say", meaningFr: "dire" },
        { arabic: "فَهِمَ / يَفْهَمُ", transliteration: "fahima / yafhamu", meaning: "to understand", meaningFr: "comprendre" }
      ]
    },
    exerciseCount: 20,
    prerequisites: ["2-18"]
  },
  {
    id: "2-20",
    phaseId: 2,
    order: 20,
    title: "Negation with Verbs",
    titleAr: "نفي الأفعال",
    titleFr: "La négation des verbes",
    description: "Learn to negate verbs in Arabic",
    descriptionFr: "Apprenez à nier les verbes en arabe",
    objectives: [
      "Negate past tense with مَا",
      "Negate present tense with لَا",
      "Use لَمْ for emphatic past negation",
      "Form negative sentences correctly"
    ],
    objectivesFr: [
      "Nier le passé avec مَا",
      "Nier le présent avec لَا",
      "Utiliser لَمْ pour la négation emphase du passé",
      "Former correctement les phrases négatives"
    ],
    estimatedTime: 50,
    difficulty: "medium",
    xpReward: 60,
    content: {
      theory: [
        {
          title: "Negating the Past: مَا",
          content: "Place مَا (mā) before the past tense verb:\n\nذَهَبَ (dhahaba) = he went\nمَا ذَهَبَ (mā dhahaba) = he did not go\n\nكَتَبْتُ = I wrote\nمَا كَتَبْتُ = I did not write"
        },
        {
          title: "Negating the Present: لَا",
          content: "Place لَا (lā) before the present tense verb:\n\nيَذْهَبُ (yadhhabu) = he goes\nلَا يَذْهَبُ (lā yadhhabu) = he does not go\n\nأَفْهَمُ = I understand\nلَا أَفْهَمُ = I do not understand"
        },
        {
          title: "Emphatic Past Negation: لَمْ",
          content: "لَمْ + present tense form (with sukūn) = emphatic 'did not':\n\nلَمْ يَذْهَبْ (lam yadhab) = he did NOT go\nلَمْ أَفْهَمْ (lam afham) = I did NOT understand\n\nThis is more emphatic than مَا and very common in formal Arabic."
        }
      ],
      vocabulary: [
        { arabic: "مَا", transliteration: "mā", meaning: "not (past)", meaningFr: "pas (passé)" },
        { arabic: "لَا", transliteration: "lā", meaning: "not (present)", meaningFr: "pas (présent)" },
        { arabic: "لَمْ", transliteration: "lam", meaning: "did not (emphatic)", meaningFr: "n'a pas (emphatique)" },
        { arabic: "لَنْ", transliteration: "lan", meaning: "will not", meaningFr: "ne sera pas" },
        { arabic: "لَيْسَ", transliteration: "laysa", meaning: "is not", meaningFr: "n'est pas" }
      ]
    },
    exerciseCount: 16,
    prerequisites: ["2-19"]
  },

  // SECTION 5: SIMPLE SENTENCES (Lessons 21-25)
  {
    id: "2-21",
    phaseId: 2,
    order: 21,
    title: "Nominal Sentences",
    titleAr: "الجملة الاسمية",
    titleFr: "Les phrases nominales",
    description: "Build sentences starting with nouns",
    descriptionFr: "Construisez des phrases commençant par des noms",
    objectives: [
      "Understand nominal sentence structure",
      "Form 'X is Y' sentences",
      "Use pronouns as copulas",
      "Describe people and things"
    ],
    objectivesFr: [
      "Comprendre la structure de la phrase nominale",
      "Former des phrases 'X est Y'",
      "Utiliser les pronoms comme copules",
      "Décrire les personnes et les choses"
    ],
    estimatedTime: 50,
    difficulty: "medium",
    xpReward: 60,
    content: {
      theory: [
        {
          title: "What is a Nominal Sentence?",
          content: "A nominal sentence (جُمْلَة اِسْمِيَّة) starts with a NOUN and describes a state of being. Arabic does not use 'is' in the present tense!\n\nالبَيْتُ كَبِيرٌ (al-baytu kabīrun) = The house (is) big\nالطَّالِبُ ذَكِيٌّ (aṭ-ṭālibu dhakiyyun) = The student (is) smart"
        },
        {
          title: "Subject and Predicate",
          content: "Every nominal sentence has:\n• مُبْتَدَأ (mubtada') = Subject (what we're talking about)\n• خَبَر (khabar) = Predicate (what we're saying about it)\n\nالوَلَدُ (subject) طَوِيلٌ (predicate) = The boy is tall"
        },
        {
          title: "Using Pronouns",
          content: "For emphasis or clarity, you can add a pronoun:\n\nالبَيْتُ هُوَ كَبِيرٌ = The house, it is big\nهِيَ مُعَلِّمَةٌ = She is a teacher\nأَنَا طَالِبٌ = I am a student"
        }
      ],
      vocabulary: [
        { arabic: "الطَّالِبُ ذَكِيٌّ", transliteration: "aṭ-ṭālibu dhakiyyun", meaning: "The student is smart", meaningFr: "L'étudiant est intelligent" },
        { arabic: "السَّمَاءُ زَرْقَاءُ", transliteration: "as-samā'u zarqā'u", meaning: "The sky is blue", meaningFr: "Le ciel est bleu" },
        { arabic: "أَنَا سَعِيدٌ", transliteration: "anā sa'īdun", meaning: "I am happy", meaningFr: "Je suis heureux" },
        { arabic: "هِيَ طَبِيبَةٌ", transliteration: "hiya ṭabībatun", meaning: "She is a doctor", meaningFr: "Elle est un docteur" }
      ]
    },
    exerciseCount: 16,
    prerequisites: ["2-20"]
  },
  {
    id: "2-22",
    phaseId: 2,
    order: 22,
    title: "Verbal Sentences",
    titleAr: "الجملة الفعلية",
    titleFr: "Les phrases verbales",
    description: "Build sentences starting with verbs",
    descriptionFr: "Construisez des phrases commençant par des verbes",
    objectives: [
      "Understand verbal sentence structure",
      "Use VSO word order",
      "Add objects to sentences",
      "Compare verbal and nominal sentences"
    ],
    objectivesFr: [
      "Comprendre la structure de la phrase verbale",
      "Utiliser l'ordre VSO",
      "Ajouter des objets aux phrases",
      "Comparer les phrases verbales et nominales"
    ],
    estimatedTime: 55,
    difficulty: "medium",
    xpReward: 65,
    content: {
      theory: [
        {
          title: "What is a Verbal Sentence?",
          content: "A verbal sentence (جُمْلَة فِعْلِيَّة) starts with a VERB. The typical order is:\nVerb - Subject - Object (VSO)\n\nكَتَبَ الطَّالِبُ الدَّرْسَ\n(kataba aṭ-ṭālibu ad-darsa)\n= Wrote the-student the-lesson\n= The student wrote the lesson"
        },
        {
          title: "VSO vs SVO",
          content: "Arabic prefers VSO in formal writing:\nذَهَبَ الوَلَدُ = went the-boy = The boy went\n\nBut SVO is also correct:\nالوَلَدُ ذَهَبَ = the-boy went = The boy went\n\nSVO is more common in spoken Arabic."
        },
        {
          title: "Adding Objects",
          content: "Direct objects come after the subject:\n\nقَرَأَ الطَّالِبُ الكِتَابَ\nV: قَرَأَ (read)\nS: الطَّالِبُ (the student)\nO: الكِتَابَ (the book)\n= The student read the book"
        }
      ],
      vocabulary: [
        { arabic: "كَتَبَ الطَّالِبُ", transliteration: "kataba aṭ-ṭālibu", meaning: "The student wrote", meaningFr: "L'étudiant a écrit" },
        { arabic: "أَكَلَ الوَلَدُ التُّفَّاحَةَ", transliteration: "akala al-waladu at-tuffāḥata", meaning: "The boy ate the apple", meaningFr: "Le garçon a mangé la pomme" },
        { arabic: "شَرِبَتِ البِنْتُ الحَلِيبَ", transliteration: "sharibat al-bintu al-ḥalība", meaning: "The girl drank the milk", meaningFr: "La fille a bu le lait" }
      ]
    },
    exerciseCount: 17,
    prerequisites: ["2-21"]
  },
  {
    id: "2-23",
    phaseId: 2,
    order: 23,
    title: "Asking Questions",
    titleAr: "طرح الأسئلة",
    titleFr: "Poser des questions",
    description: "Form different types of questions",
    descriptionFr: "Formez différents types de questions",
    objectives: [
      "Ask yes/no questions with هَلْ",
      "Use question words in sentences",
      "Answer questions appropriately",
      "Practice question intonation"
    ],
    objectivesFr: [
      "Poser les questions oui/non avec هَلْ",
      "Utiliser les mots interrogatifs dans les phrases",
      "Répondre aux questions de manière appropriée",
      "Pratiquer l'intonation des questions"
    ],
    estimatedTime: 50,
    difficulty: "medium",
    xpReward: 60,
    content: {
      theory: [
        {
          title: "Yes/No Questions",
          content: "Add هَلْ (hal) or أَ (a) to the beginning:\n\nStatement: أَنْتَ طَالِبٌ = You are a student\nQuestion: هَلْ أَنْتَ طَالِبٌ؟ = Are you a student?\n\nStatement: تُحِبُّ القَهْوَةَ = You like coffee\nQuestion: أَتُحِبُّ القَهْوَةَ؟ = Do you like coffee?"
        },
        {
          title: "Information Questions",
          content: "Use question words at the beginning:\n\nمَنْ هَذَا؟ = Who is this?\nمَا هَذَا؟ = What is this?\nأَيْنَ المَدْرَسَةُ؟ = Where is the school?\nمَتَى السَّفَرُ؟ = When is the trip?\nلِمَاذَا تَدْرُسُ؟ = Why do you study?"
        },
        {
          title: "Common Answers",
          content: "نَعَمْ (na'am) = Yes\nلَا (lā) = No\nلَا أَعْرِفُ (lā a'rifu) = I don't know\nرُبَّمَا (rubbamā) = Maybe\nبِالتَّأْكِيد (bit-ta'kīd) = Certainly"
        }
      ],
      vocabulary: [
        { arabic: "هَلْ تَتَكَلَّمُ العَرَبِيَّةَ؟", transliteration: "hal tatakallamu al-'arabiyyata?", meaning: "Do you speak Arabic?", meaningFr: "Parlez-vous l'arabe ?" },
        { arabic: "أَيْنَ تَسْكُنُ؟", transliteration: "ayna taskunu?", meaning: "Where do you live?", meaningFr: "Où habitez-vous ?" },
        { arabic: "كَمْ عُمْرُكَ؟", transliteration: "kam 'umruka?", meaning: "How old are you?", meaningFr: "Quel âge avez-vous ?" },
        { arabic: "نَعَمْ", transliteration: "na'am", meaning: "Yes", meaningFr: "Oui" },
        { arabic: "لَا", transliteration: "lā", meaning: "No", meaningFr: "Non" }
      ]
    },
    exerciseCount: 18,
    prerequisites: ["2-22"]
  },
  {
    id: "2-24",
    phaseId: 2,
    order: 24,
    title: "Prepositions and Location",
    titleAr: "حروف الجر والمكان",
    titleFr: "Les prépositions et la localisation",
    description: "Learn prepositions and express location",
    descriptionFr: "Apprenez les prépositions et exprimez la localisation",
    objectives: [
      "Use common Arabic prepositions",
      "Describe locations and directions",
      "Form prepositional phrases",
      "Combine prepositions with pronouns"
    ],
    objectivesFr: [
      "Utiliser les prépositions arabes courantes",
      "Décrire les lieux et les directions",
      "Former les groupes prépositionnels",
      "Combiner les prépositions avec les pronoms"
    ],
    estimatedTime: 55,
    difficulty: "medium",
    xpReward: 65,
    content: {
      theory: [
        {
          title: "Common Prepositions",
          content: "فِي (fī) = in\nعَلَى ('alā) = on\nمِنْ (min) = from\nإِلَى (ilā) = to\nمَعَ (ma'a) = with\nبِـ (bi-) = with/by\nلِـ (li-) = for/to"
        },
        {
          title: "Location Words",
          content: "أَمَامَ (amāma) = in front of\nوَرَاءَ (warā'a) = behind\nفَوْقَ (fawqa) = above\nتَحْتَ (taḥta) = under\nبَيْنَ (bayna) = between\nبِجَانِبِ (bi-jānibi) = next to\nقَرِيبٌ مِنْ (qarībun min) = near"
        },
        {
          title: "Prepositions + Pronouns",
          content: "Pronouns attach to prepositions:\nمَعِي (ma'ī) = with me\nمَعَكَ (ma'aka) = with you (m)\nمَعَهُ (ma'ahu) = with him\nمِنْهَا (minhā) = from her\nإِلَيْهِمْ (ilayhim) = to them"
        }
      ],
      vocabulary: [
        { arabic: "فِي البَيْت", transliteration: "fī al-bayt", meaning: "in the house", meaningFr: "dans la maison" },
        { arabic: "عَلَى الطَّاوِلَة", transliteration: "'alā aṭ-ṭāwila", meaning: "on the table", meaningFr: "sur la table" },
        { arabic: "مِنَ المَدْرَسَة", transliteration: "min al-madrasa", meaning: "from the school", meaningFr: "de l'école" },
        { arabic: "إِلَى السُّوق", transliteration: "ilā as-sūq", meaning: "to the market", meaningFr: "au marché" },
        { arabic: "مَعِي", transliteration: "ma'ī", meaning: "with me", meaningFr: "avec moi" }
      ]
    },
    exerciseCount: 17,
    prerequisites: ["2-23"]
  },
  {
    id: "2-25",
    phaseId: 2,
    order: 25,
    title: "Expressing Time",
    titleAr: "التعبير عن الوقت",
    titleFr: "Exprimer le temps",
    description: "Talk about time, schedules, and routines",
    descriptionFr: "Parlez du temps, des horaires et des routines",
    objectives: [
      "Tell time in Arabic",
      "Discuss daily routines",
      "Use time expressions",
      "Talk about schedules"
    ],
    objectivesFr: [
      "Dire l'heure en arabe",
      "Discuter des routines quotidiennes",
      "Utiliser les expressions de temps",
      "Parler des horaires"
    ],
    estimatedTime: 55,
    difficulty: "medium",
    xpReward: 65,
    content: {
      theory: [
        {
          title: "Telling Time",
          content: "السَّاعَةُ كَمْ؟ (as-sā'atu kam?) = What time is it?\n\nالسَّاعَةُ الثَّانِيَة = It's 2 o'clock\nالسَّاعَةُ الثَّالِثَة وَالنِّصْف = It's 3:30\nالسَّاعَةُ الرَّابِعَة وَالرُّبْع = It's 4:15\nالسَّاعَةُ الخَامِسَة إِلَّا رُبْعًا = It's 4:45 (5 minus quarter)"
        },
        {
          title: "Time Vocabulary",
          content: "سَاعَة (sā'a) = hour/watch\nدَقِيقَة (daqīqa) = minute\nثَانِيَة (thāniya) = second\nنِصْف (niṣf) = half\nرُبْع (rub') = quarter\nصَبَاح (ṣabāḥ) = morning\nمَسَاء (masā') = evening"
        },
        {
          title: "Time Expressions",
          content: "الآنَ (al-āna) = now\nغَدًا (ghadan) = tomorrow\nأَمْس (ams) = yesterday\nاليَوْم (al-yawm) = today\nكُلّ يَوْم (kull yawm) = every day\nأَحْيَانًا (aḥyānan) = sometimes"
        }
      ],
      vocabulary: [
        { arabic: "السَّاعَة", transliteration: "as-sā'a", meaning: "the hour/o'clock", meaningFr: "l'heure" },
        { arabic: "صَبَاحًا", transliteration: "ṣabāḥan", meaning: "in the morning", meaningFr: "le matin" },
        { arabic: "مَسَاءً", transliteration: "masā'an", meaning: "in the evening", meaningFr: "le soir" },
        { arabic: "غَدًا", transliteration: "ghadan", meaning: "tomorrow", meaningFr: "demain" },
        { arabic: "أَمْس", transliteration: "ams", meaning: "yesterday", meaningFr: "hier" }
      ]
    },
    exerciseCount: 16,
    prerequisites: ["2-24"]
  },

  // SECTION 6: CONVERSATIONS AND REVIEW (Lessons 26-30)
  {
    id: "2-26",
    phaseId: 2,
    order: 26,
    title: "Introducing Yourself",
    titleAr: "تقديم النفس",
    titleFr: "Se présenter",
    description: "Learn to introduce yourself in Arabic",
    descriptionFr: "Apprenez à vous présenter en arabe",
    objectives: [
      "Give your name and nationality",
      "State your profession",
      "Talk about where you live",
      "Ask others about themselves"
    ],
    objectivesFr: [
      "Donner votre nom et votre nationalité",
      "Indiquer votre profession",
      "Parler de votre lieu de résidence",
      "Demander aux autres de se présenter"
    ],
    estimatedTime: 50,
    difficulty: "easy",
    xpReward: 55,
    content: {
      theory: [
        {
          title: "Basic Introduction",
          content: "اِسْمِي ... (ismī ...) = My name is ...\nأَنَا مِنْ ... (anā min ...) = I am from ...\nأَنَا ... (anā ...) = I am (profession/nationality)\n\nExample:\nمَرْحَبًا! اِسْمِي أَحْمَد. أَنَا مِنْ مِصْر. أَنَا طَالِبٌ.\n= Hello! My name is Ahmed. I am from Egypt. I am a student."
        },
        {
          title: "Asking About Others",
          content: "مَا اسْمُكَ؟ (mā ismuka?) = What is your name? (m)\nمَا اسْمُكِ؟ (mā ismuki?) = What is your name? (f)\nمِنْ أَيْنَ أَنْتَ؟ (min ayna anta?) = Where are you from? (m)\nمَا عَمَلُكَ؟ (mā 'amaluka?) = What is your work? (m)"
        },
        {
          title: "Nationalities",
          content: "مِصْرِي (miṣrī) = Egyptian (m)\nسُورِي (sūrī) = Syrian\nمَغْرِبِي (maghribī) = Moroccan\nأَمْرِيكِي (amrīkī) = American\nبْرِيطَانِي (brīṭānī) = British\nفَرَنْسِي (faransī) = French"
        }
      ],
      vocabulary: [
        { arabic: "اِسْمِي", transliteration: "ismī", meaning: "my name is", meaningFr: "je m'appelle" },
        { arabic: "أَنَا مِنْ", transliteration: "anā min", meaning: "I am from", meaningFr: "je suis de" },
        { arabic: "أَسْكُنُ فِي", transliteration: "askunu fī", meaning: "I live in", meaningFr: "j'habite" },
        { arabic: "أَعْمَلُ", transliteration: "a'malu", meaning: "I work", meaningFr: "je travaille" },
        { arabic: "تَشَرَّفْنَا", transliteration: "tasharrafnā", meaning: "pleased to meet you", meaningFr: "enchanté de vous rencontrer" }
      ]
    },
    exerciseCount: 16,
    prerequisites: ["2-25"]
  },
  {
    id: "2-27",
    phaseId: 2,
    order: 27,
    title: "At the Restaurant",
    titleAr: "في المطعم",
    titleFr: "Au restaurant",
    description: "Learn restaurant vocabulary and conversations",
    descriptionFr: "Apprenez le vocabulaire et les conversations au restaurant",
    objectives: [
      "Order food and drinks",
      "Ask about the menu",
      "Request the bill",
      "Express food preferences"
    ],
    objectivesFr: [
      "Commander de la nourriture et des boissons",
      "Demander à propos du menu",
      "Demander l'addition",
      "Exprimer vos préférences alimentaires"
    ],
    estimatedTime: 50,
    difficulty: "easy",
    xpReward: 55,
    content: {
      theory: [
        {
          title: "Restaurant Basics",
          content: "مَطْعَم (maṭ'am) = restaurant\nقَائِمَة الطَّعَام (qā'imat aṭ-ṭa'ām) = menu\nنَادِل (nādil) = waiter\nطَاوِلَة (ṭāwila) = table\nالحِسَاب (al-ḥisāb) = the bill"
        },
        {
          title: "Ordering",
          content: "أُرِيدُ ... (urīdu ...) = I want ...\nهَلْ عِنْدَكُمْ ...؟ (hal 'indakum ...?) = Do you have ...?\nمَا هُوَ طَبَقُ اليَوْم؟ (mā huwa ṭabaq al-yawm?) = What is the dish of the day?\nهَذَا لَذِيذٌ! (hādhā ladhīdhun!) = This is delicious!"
        },
        {
          title: "Special Requests",
          content: "مِنْ فَضْلِكَ (min faḍlika) = please (m)\nبِدُونِ ... (bidūni ...) = without ...\nمَعَ ... (ma'a ...) = with ...\nالحِسَابَ، مِنْ فَضْلِكَ (al-ḥisāba, min faḍlika) = The bill, please"
        }
      ],
      vocabulary: [
        { arabic: "أُرِيدُ", transliteration: "urīdu", meaning: "I want", meaningFr: "je veux" },
        { arabic: "قَائِمَة الطَّعَام", transliteration: "qā'imat aṭ-ṭa'ām", meaning: "menu", meaningFr: "menu" },
        { arabic: "الحِسَاب", transliteration: "al-ḥisāb", meaning: "the bill", meaningFr: "l'addition" },
        { arabic: "لَذِيذ", transliteration: "ladhīdh", meaning: "delicious" },
        { arabic: "شُكْرًا", transliteration: "shukran", meaning: "thank you", meaningFr: "merci" }
      ]
    },
    exerciseCount: 15,
    prerequisites: ["2-26"]
  },
  {
    id: "2-28",
    phaseId: 2,
    order: 28,
    title: "Shopping",
    titleAr: "التسوق",
    titleFr: "Les achats",
    description: "Learn shopping vocabulary and conversations",
    descriptionFr: "Apprenez le vocabulaire et les conversations pour faire des achats",
    objectives: [
      "Ask about prices",
      "Negotiate and bargain",
      "Describe what you want",
      "Complete a purchase"
    ],
    objectivesFr: [
      "Demander les prix",
      "Négocier et marchander",
      "Décrire ce que vous voulez",
      "Effectuer un achat"
    ],
    estimatedTime: 50,
    difficulty: "easy",
    xpReward: 55,
    content: {
      theory: [
        {
          title: "Shopping Vocabulary",
          content: "سُوق (sūq) = market\nمَحَلّ (maḥall) = store\nسِعْر (si'r) = price\nنُقُود (nuqūd) = money\nرَخِيص (rakhīṣ) = cheap\nغَالٍ (ghālin) = expensive"
        },
        {
          title: "Asking Prices",
          content: "بِكَمْ هَذَا؟ (bikam hādhā?) = How much is this?\nكَمِ السِّعْرُ؟ (kam as-si'ru?) = What is the price?\nهَذَا غَالٍ جِدًّا! (hādhā ghālin jiddan!) = This is too expensive!\nهَلْ يُمْكِنُ تَخْفِيض؟ (hal yumkinu takhfīḍ?) = Is a discount possible?"
        },
        {
          title: "Making a Purchase",
          content: "سَآخُذُ هَذَا (sa-ākhudu hādhā) = I will take this\nأُرِيدُ وَاحِدًا (urīdu wāḥidan) = I want one\nهَلْ تَقْبَلُونَ البِطَاقَة؟ (hal taqbalūna al-biṭāqa?) = Do you accept cards?\nشُكْرًا، مَعَ السَّلَامَة! (shukran, ma'a as-salāma!) = Thank you, goodbye!"
        }
      ],
      vocabulary: [
        { arabic: "بِكَمْ؟", transliteration: "bikam?", meaning: "How much?", meaningFr: "Combien ?" },
        { arabic: "سِعْر", transliteration: "si'r", meaning: "price", meaningFr: "prix" },
        { arabic: "غَالٍ", transliteration: "ghālin", meaning: "expensive", meaningFr: "cher" },
        { arabic: "رَخِيص", transliteration: "rakhīṣ", meaning: "cheap", meaningFr: "bon marché" },
        { arabic: "سَآخُذُ", transliteration: "sa-ākhudu", meaning: "I will take", meaningFr: "je vais prendre" }
      ]
    },
    exerciseCount: 15,
    prerequisites: ["2-27"]
  },
  {
    id: "2-29",
    phaseId: 2,
    order: 29,
    title: "Daily Routines",
    titleAr: "الروتين اليومي",
    titleFr: "Les routines quotidiennes",
    description: "Describe your daily activities",
    descriptionFr: "Décrivez vos activités quotidiennes",
    objectives: [
      "Talk about daily schedule",
      "Use time expressions naturally",
      "Describe habits and routines",
      "Ask about others' routines"
    ],
    objectivesFr: [
      "Parler de votre emploi du temps quotidien",
      "Utiliser naturellement les expressions de temps",
      "Décrire les habitudes et les routines",
      "Demander aux autres à propos de leurs routines"
    ],
    estimatedTime: 50,
    difficulty: "easy",
    xpReward: 55,
    content: {
      theory: [
        {
          title: "Morning Routine",
          content: "أَسْتَيْقِظُ (astayqiẓu) = I wake up\nأَغْتَسِلُ (aghtasilu) = I wash/shower\nأَتَنَاوَلُ الفُطُور (atanāwalu al-fuṭūr) = I have breakfast\nأَذْهَبُ إِلَى العَمَل (adhhabu ilā al-'amal) = I go to work"
        },
        {
          title: "Daily Activities",
          content: "أَعْمَلُ (a'malu) = I work\nأَدْرُسُ (adrusu) = I study\nأَتَغَدَّى (ataghadda) = I have lunch\nأَرْجِعُ (arji'u) = I return home\nأَتَعَشَّى (ata'ashsha) = I have dinner\nأَنَامُ (anāmu) = I sleep"
        }
      ],
      vocabulary: [
        { arabic: "أَسْتَيْقِظُ", transliteration: "astayqiẓu", meaning: "I wake up", meaningFr: "je me réveille" },
        { arabic: "أَذْهَبُ", transliteration: "adhhabu", meaning: "I go", meaningFr: "je vais" },
        { arabic: "أَعْمَلُ", transliteration: "a'malu", meaning: "I work", meaningFr: "je travaille" },
        { arabic: "أَرْجِعُ", transliteration: "arji'u", meaning: "I return", meaningFr: "je reviens" },
        { arabic: "أَنَامُ", transliteration: "anāmu", meaning: "I sleep", meaningFr: "je dors" }
      ]
    },
    exerciseCount: 16,
    prerequisites: ["2-28"]
  },
  {
    id: "2-30",
    phaseId: 2,
    order: 30,
    title: "Phase 2 Review & Assessment",
    titleAr: "مراجعة وتقييم المرحلة الثانية",
    titleFr: "Révision et évaluation de la Phase 2",
    description: "Comprehensive review of Phase 2",
    descriptionFr: "Révision complète de la Phase 2",
    objectives: [
      "Review all vocabulary learned",
      "Demonstrate grammar mastery",
      "Complete practical conversations",
      "Prepare for Phase 3"
    ],
    objectivesFr: [
      "Révisez tout le vocabulaire appris",
      "Démontrez la maîtrise de la grammaire",
      "Complétez les conversations pratiques",
      "Préparez-vous pour la Phase 3"
    ],
    estimatedTime: 60,
    difficulty: "medium",
    xpReward: 100,
    content: {
      theory: [
        {
          title: "🎉 Phase 2 Complete!",
          content: "Amazing progress! You've learned:\n✓ 200+ vocabulary words\n✓ Personal and possessive pronouns\n✓ Gender and plural forms\n✓ Past and present tense verbs\n✓ Sentence construction\n✓ Practical conversations"
        },
        {
          title: "Skills Achieved",
          content: "You can now:\n• Introduce yourself\n• Describe your family and home\n• Order at restaurants and shop\n• Tell time and discuss routines\n• Form questions and answers\n• Use basic Arabic grammar correctly"
        },
        {
          title: "Ready for Phase 3!",
          content: "In Phase 3: Expansion, you'll learn:\n• Advanced verb forms\n• Complex sentence structures\n• Conditional and subjunctive moods\n• Extended vocabulary by topic\n• Paragraph reading and writing"
        }
      ],
      vocabulary: [
        { arabic: "تَهَانِينَا!", transliteration: "tahāninā!", meaning: "Congratulations!", meaningFr: "Félicitations !" },
        { arabic: "أَحْسَنْتَ!", transliteration: "aḥsanta!", meaning: "Well done!", meaningFr: "Bien joué !" },
        { arabic: "مُمْتَاز", transliteration: "mumtāz", meaning: "Excellent", meaningFr: "Excellent" },
        { arabic: "اِسْتَمِرّ", transliteration: "istamirr", meaning: "Keep going", meaningFr: "Continuez" }
      ]
    },
    exerciseCount: 25,
    prerequisites: ["2-29"]
  }
];
