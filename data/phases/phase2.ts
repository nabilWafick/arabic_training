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
          titleAr: "نماذج الألوان",
          titleFr: "Les motifs de couleurs",
          content: "Most colors follow the pattern أَفْعَل (af'al) for masculine and فَعْلَاء (fa'lā') for feminine. This is a special adjective pattern!\n\nSome colors don't change:\nبُنِّي (bunnī) = brown\nبُرْتُقَالِي (burtuqālī) = orange\nوَرْدِي (wardī) = pink\nبَنَفْسَجِي (banafsajī) = purple",
          contentAr: "معظم الألوان تتبع نمط أَفْعَل (af'al) للمذكر و فَعْلَاء (fa'lā') للمؤنث. هذا نمط صفة خاص!\n\nبعض الألوان لا تتغير:\nبُنِّي (bunnī) = بني\nبُرْتُقَالِي (burtuqālī) = برتقالي\nوَرْدِي (wardī) = وردي\nبَنَفْسَجِي (banafsajī) = بنفسجي",
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
    descriptionAr: "تعلم مفردات الأطعمة والمشروبات الشائعة",
    descriptionFr: "Apprenez le vocabulaire des aliments et des boissons courants",
    objectives: [
      "Name common foods in Arabic",
      "Order food at a restaurant",
      "Express likes and dislikes for food",
      "Understand food-related verbs"
    ],
    objectivesAr: [
      "تسمية الأطعمة والمشروبات الشائعة",
      "فهم الأسماء المذكرة والمؤنثة",
      "استخدام الأطعمة والمشروبات في الجمل",
      "وصف التفضيلات الغذائية"
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
          titleAr: "الكلمات الأساسية للطعام",
          titleFr: "Les mots alimentaires de base",
          content: "طَعَام (ṭa'ām) = food\nخُبْز (khubz) = bread\nمَاء (mā') = water\nأَرُزّ (aruzz) = rice\nلَحْم (laḥm) = meat\nدَجَاج (dajāj) = chicken\nسَمَك (samak) = fish\nخُضَار (khuḍār) = vegetables\nفَاكِهَة (fākiha) = fruit",
          contentAr: "طَعَام (ṭa'ām) = الطعام\nخُبْز (khubz) = الخبز\nمَاء (mā') = الماء\nأَرُزّ (aruzz) = الأرز\nلَحْم (laḥm) = اللحم\nدَجَاج (dajāj) = الدجاج\nسَمَك (samak) = السمك\nخُضَار (khuḍār) = الخضار\nفَاكِهَة (fākiha) = الفاكهة",
          contentFr: "طَعَام (ṭa'ām) = nourriture\nخُبْز (khubz) = pain\nمَاء (mā') = eau\nأَرُزّ (aruzz) = riz\nلَحْم (laḥm) = viande\nدَجَاج (dajāj) = poulet\nسَمَك (samak) = poisson\nخُضَار (khuḍār) = légumes\nفَاكِهَة (fākiha) = fruit"
        },
        {
          title: "Drinks",
          titleAr: "المشروبات",
          titleFr: "Les boissons",
          content: "شَرَاب (sharāb) = drink/beverage\nقَهْوَة (qahwa) = coffee\nشَاي (shāy) = tea\nحَلِيب (ḥalīb) = milk\nعَصِير ('aṣīr) = juice\n\nNote: قَهْوَة (qahwa) is the origin of 'coffee' in many languages!",
          contentAr: "شَرَاب (sharāb) = المشروب\nقَهْوَة (qahwa) = القهوة\nشَاي (shāy) = الشاي\nحَلِيب (ḥalīb) = الحليب\nعَصِير ('aṣīr) = العصير\n\nملاحظة: قَهْوَة (qahwa) هي أصل كلمة 'coffee' في العديد من اللغات!",
          contentFr: "شَرَاب (sharāb) = boisson\nقَهْوَة (qahwa) = café\nشَاي (shāy) = thé\nحَلِيب (ḥalīb) = lait\nعَصِير ('aṣīr) = jus\n\nRemarque : قَهْوَة (qahwa) est l'origine du mot « café » dans de nombreuses langues !"
        },
        {
          title: "At the Restaurant",
          titleAr: "في المطعم",
          titleFr: "Au restaurant",
          content: "أُرِيدُ (urīdu) = I want\nمِنْ فَضْلِكَ (min faḍlika) = please (m)\nالحِسَاب (al-ḥisāb) = the bill\nلَذِيذ (ladhīdh) = delicious",
          contentAr: "أُرِيدُ (urīdu) = أريد\nمِنْ فَضْلِكَ (min faḍlika) = من فضلك\nالحِسَاب (al-ḥisāb) = الحساب\nلَذِيذ (ladhīdh) = لذيذ",
          contentFr: "أُرِيدُ (urīdu) = Je veux\nمِنْ فَضْلِكَ (min faḍlika) = s'il vous plaît (m)\nالحِسَاب (al-ḥisāb) = l'addition\nلَذِيذ (ladhīdh) = délicieux"
        }
      ],
      vocabulary: [
        { arabic: "طَعَام", transliteration: "ṭa'ām", meaning: "food", meaningAr: "الطعام", meaningFr: "nourriture" },
        { arabic: "خُبْز", transliteration: "khubz", meaning: "bread", meaningAr: "الخبز", meaningFr: "pain" },
        { arabic: "مَاء", transliteration: "mā'", meaning: "water", meaningAr: "الماء", meaningFr: "eau" },
        { arabic: "قَهْوَة", transliteration: "qahwa", meaning: "coffee", meaningAr: "القهوة", meaningFr: "café" },
        { arabic: "شَاي", transliteration: "shāy", meaning: "tea", meaningAr: "الشاي", meaningFr: "thé" },
        { arabic: "لَحْم", transliteration: "laḥm", meaning: "meat", meaningAr: "اللحم", meaningFr: "viande" },
        { arabic: "خُضَار", transliteration: "khuḍār", meaning: "vegetables", meaningAr: "الخضار", meaningFr: "légumes" },
        { arabic: "فَاكِهَة", transliteration: "fākiha", meaning: "fruit", meaningAr: "الفاكهة", meaningFr: "fruit" },
        { arabic: "لَذِيذ", transliteration: "ladhīdh", meaning: "delicious", meaningAr: "لذيذ", meaningFr: "délicieux" }
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
    descriptionAr: "تعلم أسماء الحيوانات الشائعة",
    descriptionFr: "Apprenez les noms des animaux courants",
    objectives: [
      "Name domestic and wild animals",
      "Use animal vocabulary in sentences",
      "Understand collective nouns",
      "Practice pronunciation of animal names"
    ],
    objectivesAr: [
      "تسمية الحيوانات الشائعة",
      "فهم الجنس والعدد للحيوانات",
      "استخدام أسماء الحيوانات في السياقات",
      "وصف الحيوانات وخصائصها"
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
          titleAr: "الحيوانات الأليفة",
          titleFr: "Les animaux domestiques",
          content: "قِطّ (qiṭṭ) = cat\nكَلْب (kalb) = dog\nحِصَان (ḥiṣān) = horse\nبَقَرَة (baqara) = cow\nخَرُوف (kharūf) = sheep\nدَجَاجَة (dajāja) = chicken\nعَنْزَة ('anza) = goat",
          contentAr: "قِطّ (qiṭṭ) = القطة\nكَلْب (kalb) = الكلب\nحِصَان (ḥiṣān) = الحصان\nبَقَرَة (baqara) = البقرة\nخَرُوف (kharūf) = الخروف\nدَجَاجَة (dajāja) = الدجاجة\nعَنْزَة ('anza) = العنزة",
          contentFr: "قِطّ (qiṭṭ) = chat\nكَلْب (kalb) = chien\nحِصَان (ḥiṣān) = cheval\nبَقَرَة (baqara) = vache\nخَرُوف (kharūf) = mouton\nدَجَاجَة (dajāja) = poule\nعَنْزَة ('anza) = chèvre"
        },
        {
          title: "Wild Animals",
          titleAr: "الحيوانات البرية",
          titleFr: "Les animaux sauvages",
          content: "أَسَد (asad) = lion\nفِيل (fīl) = elephant\nقِرْد (qird) = monkey\nدُبّ (dubb) = bear\nثَعْلَب (tha'lab) = fox\nذِئْب (dhi'b) = wolf\nنَمِر (namir) = tiger",
          contentAr: "أَسَد (asad) = الأسد\nفِيل (fīl) = الفيل\nقِرْد (qird) = القرد\nدُبّ (dubb) = الدب\nثَعْلَب (tha'lab) = الثعلب\nذِئْب (dhi'b) = الذئب\nنَمِر (namir) = النمر",
          contentFr: "أَسَد (asad) = lion\nفِيل (fīl) = éléphant\nقِرْد (qird) = singe\nدُبّ (dubb) = ours\nثَعْلَب (tha'lab) = renard\nذِئْب (dhi'b) = loup\nنَمِر (namir) = tigre"
        },
        {
          title: "The Camel 🐪",
          titleAr: "الجمل 🐪",
          titleFr: "Le chameau 🐪",
          content: "The camel (جَمَل - jamal) is the symbol of Arabia! Arabic has dozens of words for different types of camels. The basic word جَمَل refers to a male camel, while نَاقَة (nāqa) is a female camel.",
          contentAr: "الجمل (جَمَل - jamal) هو رمز الجزيرة العربية! للعربية عشرات الكلمات لأنواع مختلفة من الجمال. الكلمة الأساسية جَمَل تشير إلى جمل ذكر، بينما نَاقَة (nāqa) هي جمل أنثى.",
          contentFr: "Le chameau (جَمَل - jamal) est le symbole de l'Arabie ! L'arabe a des dizaines de mots pour différents types de chameaux. Le mot جَمَل fait référence à un chameau mâle, tandis que نَاقَة (nāqa) est un chameau femelle."
        }
      ],
      vocabulary: [
        { arabic: "حَيَوَان", transliteration: "ḥayawān", meaning: "animal", meaningAr: "الحيوان", meaningFr: "animal" },
        { arabic: "قِطّ", transliteration: "qiṭṭ", meaning: "cat", meaningAr: "القطة", meaningFr: "chat" },
        { arabic: "كَلْب", transliteration: "kalb", meaning: "dog", meaningAr: "الكلب", meaningFr: "chien" },
        { arabic: "أَسَد", transliteration: "asad", meaning: "lion", meaningAr: "الأسد", meaningFr: "lion" },
        { arabic: "جَمَل", transliteration: "jamal", meaning: "camel", meaningAr: "الجمل", meaningFr: "chameau" },
        { arabic: "طَائِر", transliteration: "ṭā'ir", meaning: "bird", meaningAr: "الطائر", meaningFr: "oiseau" },
        { arabic: "سَمَكَة", transliteration: "samaka", meaning: "fish", meaningAr: "السمكة", meaningFr: "poisson" },
        { arabic: "حِصَان", transliteration: "ḥiṣān", meaning: "horse", meaningAr: "الحصان", meaningFr: "cheval" }
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
    descriptionAr: "تعلم مفردات الغرف والأثاث المنزلي",
    descriptionFr: "Apprenez le vocabulaire des pièces et des objets de la maison",
    objectives: [
      "Name rooms in a house",
      "Identify common furniture items",
      "Describe your home in Arabic",
      "Use location prepositions"
    ],
    objectivesAr: [
      "تسمية غرف المنزل",
      "تسمية قطع الأثاث الشائعة",
      "وصف المنزل والغرف",
      "استخدام الكلمات المنزلية في حوارات"
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
          titleAr: "غرف المنزل",
          titleFr: "Les pièces de la maison",
          content: "بَيْت (bayt) = house\nمَنْزِل (manzil) = residence/home\nغُرْفَة (ghurfa) = room\nغُرْفَة النَّوْم (ghurfat an-nawm) = bedroom\nغُرْفَة الجُلُوس (ghurfat al-julūs) = living room\nمَطْبَخ (maṭbakh) = kitchen\nحَمَّام (ḥammām) = bathroom",
          contentAr: "بَيْت (bayt) = البيت\nمَنْزِل (manzil) = المنزل\nغُرْفَة (ghurfa) = الغرفة\nغُرْفَة النَّوْم (ghurfat an-nawm) = غرفة النوم\nغُرْفَة الجُلُوس (ghurfat al-julūs) = غرفة الجلوس\nمَطْبَخ (maṭbakh) = المطبخ\nحَمَّام (ḥammām) = الحمام",
          contentFr: "بَيْت (bayt) = maison\nمَنْزِل (manzil) = résidence/maison\nغُرْفَة (ghurfa) = pièce\nغُرْفَة النَّوْم (ghurfat an-nawm) = chambre à coucher\nغُرْفَة الجُلُوس (ghurfat al-julūs) = salon\nمَطْبَخ (maṭbakh) = cuisine\nحَمَّام (ḥammām) = salle de bain"
        },
        {
          title: "Furniture",
          titleAr: "الأثاث",
          titleFr: "Les meubles",
          content: "أَثَاث (athāth) = furniture\nسَرِير (sarīr) = bed\nكُرْسِي (kursī) = chair\nطَاوِلَة (ṭāwila) = table\nخِزَانَة (khizāna) = closet/cabinet\nمِرْآة (mir'āh) = mirror",
          contentAr: "أَثَاث (athāth) = الأثاث\nسَرِير (sarīr) = السرير\nكُرْسِي (kursī) = الكرسي\nطَاوِلَة (ṭāwila) = الطاولة\nخِزَانَة (khizāna) = الخزانة\nمِرْآة (mir'āh) = المرآة",
          contentFr: "أَثَاث (athāth) = meubles\nسَرِير (sarīr) = lit\nكُرْسِي (kursī) = chaise\nطَاوِلَة (ṭāwila) = table\nخِزَانَة (khizāna) = placard/armoire\nمِرْآة (mir'āh) = miroir"
        },
        {
          title: "Location Words",
          titleAr: "كلمات المكان",
          titleFr: "Les mots de lieu",
          content: "فِي (fī) = in\nعَلَى ('alā) = on\nتَحْت (taḥt) = under\nفَوْق (fawq) = above\nبِجَانِب (bi-jānib) = next to\nأَمَام (amām) = in front of\nوَرَاء (warā') = behind",
          contentAr: "فِي (fī) = في\nعَلَى ('alā) = على\nتَحْت (taḥt) = تحت\nفَوْق (fawq) = فوق\nبِجَانِب (bi-jānib) = بجانب\nأَمَام (amām) = أمام\nوَرَاء (warā') = وراء",
          contentFr: "فِي (fī) = dans\nعَلَى ('alā) = sur\nتَحْت (taḥt) = sous\nفَوْق (fawq) = au-dessus\nبِجَانِب (bi-jānib) = à côté de\nأَمَام (amām) = devant\nوَرَاء (warā') = derrière"
        }
      ],
      vocabulary: [
        { arabic: "بَيْت", transliteration: "bayt", meaning: "house", meaningAr: "البيت", meaningFr: "maison" },
        { arabic: "غُرْفَة", transliteration: "ghurfa", meaning: "room", meaningAr: "الغرفة", meaningFr: "pièce" },
        { arabic: "مَطْبَخ", transliteration: "maṭbakh", meaning: "kitchen", meaningAr: "المطبخ", meaningFr: "cuisine" },
        { arabic: "حَمَّام", transliteration: "ḥammām", meaning: "bathroom", meaningAr: "الحمام", meaningFr: "salle de bain" },
        { arabic: "سَرِير", transliteration: "sarīr", meaning: "bed", meaningAr: "السرير", meaningFr: "lit" },
        { arabic: "كُرْسِي", transliteration: "kursī", meaning: "chair", meaningAr: "الكرسي", meaningFr: "chaise" },
        { arabic: "طَاوِلَة", transliteration: "ṭāwila", meaning: "table", meaningAr: "الطاولة", meaningFr: "table" },
        { arabic: "بَاب", transliteration: "bāb", meaning: "door", meaningAr: "الباب", meaningFr: "porte" },
        { arabic: "نَافِذَة", transliteration: "nāfidha", meaning: "window", meaningAr: "النافذة", meaningFr: "fenêtre" }
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
    descriptionAr: "تعلم جميع ضمائر الشخص في العربية",
    descriptionFr: "Apprenez tous les pronoms personnels arabes",
    objectives: [
      "Memorize all 12 personal pronouns",
      "Distinguish gender and number",
      "Use pronouns in sentences",
      "Understand the dual form"
    ],
    objectivesAr: [
      "التعرف على جميع الضمائر الشخصية",
      "استخدام الضمائر في الجمل بشكل صحيح",
      "فهم الفروقات بين الضمائر",
      "ممارسة الضمائر في السياقات"
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
          titleAr: "نظام الضمائر العربية",
          titleFr: "Le système des pronoms arabes",
          content: "Arabic has MORE pronouns than English because it distinguishes:\n• Gender (masculine/feminine)\n• Number (singular/dual/plural)\n• Person (1st/2nd/3rd)\n\nThat gives us 12 pronouns (vs. 7 in English)!",
          contentAr: "للعربية ضمائر أكثر من الإنجليزية لأنها تميز:\n• الجنس (مذكر/مؤنث)\n• العدد (مفرد/مثنى/جمع)\n• الشخص (الأول/الثاني/الثالث)\n\nهذا يعطينا 12 ضمير (مقابل 7 في الإنجليزية)!",
          contentFr: "L'arabe a PLUS de pronoms que l'anglais car il distingue :\n• Le genre (masculin/féminin)\n• Le nombre (singulier/duel/pluriel)\n• La personne (1ère/2e/3e)\n\nCela nous donne 12 pronoms (contre 7 en anglais) !"
        },
        {
          title: "Singular Pronouns",
          titleAr: "الضمائر المفردة",
          titleFr: "Les pronoms singuliers",
          content: "1st person:\nأَنَا (anā) = I\n\n2nd person:\nأَنْتَ (anta) = you (masculine)\nأَنْتِ (anti) = you (feminine)\n\n3rd person:\nهُوَ (huwa) = he\nهِيَ (hiya) = she",
          contentAr: "الشخص الأول:\nأَنَا (anā) = أنا\n\nالشخص الثاني:\nأَنْتَ (anta) = أنت (مذكر)\nأَنْتِ (anti) = أنتِ (مؤنث)\n\nالشخص الثالث:\nهُوَ (huwa) = هو\nهِيَ (hiya) = هي",
          contentFr: "1ère personne :\nأَنَا (anā) = je\n\n2e personne :\nأَنْتَ (anta) = tu (masculin)\nأَنْتِ (anti) = tu (féminin)\n\n3e personne :\nهُوَ (huwa) = il\nهِيَ (hiya) = elle"
        },
        {
          title: "Plural Pronouns",
          titleAr: "الضمائر الجمعية",
          titleFr: "Les pronoms pluriels",
          content: "1st person:\nنَحْنُ (naḥnu) = we\n\n2nd person:\nأَنْتُمْ (antum) = you all (m or mixed)\nأَنْتُنَّ (antunna) = you all (f only)\n\n3rd person:\nهُمْ (hum) = they (m or mixed)\nهُنَّ (hunna) = they (f only)",
          contentAr: "الشخص الأول:\nنَحْنُ (naḥnu) = نحن\n\nالشخص الثاني:\nأَنْتُمْ (antum) = أنتم (مذكر أو مختلط)\nأَنْتُنَّ (antunna) = أنتن (مؤنث فقط)\n\nالشخص الثالث:\nهُمْ (hum) = هم (مذكر أو مختلط)\nهُنَّ (hunna) = هن (مؤنث فقط)",
          contentFr: "1ère personne :\nنَحْنُ (naḥnu) = nous\n\n2e personne :\nأَنْتُمْ (antum) = vous (m ou mixte)\nأَنْتُنَّ (antunna) = vous (f seulement)\n\n3e personne :\nهُمْ (hum) = ils (m ou mixte)\nهُنَّ (hunna) = elles (f seulement)"
        },
        {
          title: "Dual Pronouns",
          titleAr: "الضمائر الثنائية",
          titleFr: "Les pronoms duels",
          content: "Arabic also has dual forms for exactly 2 people:\nأَنْتُمَا (antumā) = you two\nهُمَا (humā) = they two\n\nThe dual is used less in modern spoken Arabic, but important for formal/written Arabic!",
          contentAr: "للعربية أيضًا صيغ ثنائية لشخصين بالضبط:\nأَنْتُمَا (antumā) = أنتما\nهُمَا (humā) = هما\n\nالصيغة الثنائية تُستخدم أقل في العربية الحديثة المنطوقة، لكنها مهمة للعربية الرسمية/المكتوبة!",
          contentFr: "L'arabe a aussi des formes duelles pour exactement 2 personnes :\nأَنْتُمَا (antumā) = vous deux\nهُمَا (humā) = ils/elles deux\n\nLe duel est moins utilisé en arabe parlé moderne, mais important pour l'arabe formel/écrit !"
        }
      ],
      vocabulary: [
        { arabic: "أَنَا", transliteration: "anā", meaning: "I", meaningAr: "أنا", meaningFr: "je" },
        { arabic: "أَنْتَ", transliteration: "anta", meaning: "you (m.s.)", meaningAr: "أنت", meaningFr: "tu (m.s.)" },
        { arabic: "أَنْتِ", transliteration: "anti", meaning: "you (f.s.)", meaningAr: "أنتِ", meaningFr: "tu (f.s.)" },
        { arabic: "هُوَ", transliteration: "huwa", meaning: "he", meaningAr: "هو", meaningFr: "il" },
        { arabic: "هِيَ", transliteration: "hiya", meaning: "she", meaningAr: "هي", meaningFr: "elle" },
        { arabic: "نَحْنُ", transliteration: "naḥnu", meaning: "we", meaningAr: "نحن", meaningFr: "nous" },
        { arabic: "أَنْتُمْ", transliteration: "antum", meaning: "you (pl.)", meaningAr: "أنتم", meaningFr: "vous (pl.)" },
        { arabic: "هُمْ", transliteration: "hum", meaning: "they (m)", meaningAr: "هم", meaningFr: "ils (m)" },
        { arabic: "هُنَّ", transliteration: "hunna", meaning: "they (f)", meaningAr: "هن", meaningFr: "elles (f)" }
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
    descriptionAr: "تعلم التعبير عن الملكية في العربية",
    descriptionFr: "Apprenez à exprimer la possession en arabe",
    objectives: [
      "Attach possessive suffixes to nouns",
      "Express 'my', 'your', 'his', 'her', etc.",
      "Understand suffix pronunciation changes",
      "Form possessive phrases"
    ],
    objectivesAr: [
      "فهم ضمائر الملكية",
      "ربط الضمائر بالأسماء بشكل صحيح",
      "التعبير عن الملكية بطرق مختلفة",
      "ممارسة الملكية في الجمل"
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
          titleAr: "لواحق الملكية",
          titleFr: "Les suffixes possessifs",
          content: "Arabic expresses possession by ATTACHING a suffix to the noun:\n\nكِتَاب (kitāb) = book\nكِتَابِي (kitābī) = my book\nكِتَابُكَ (kitābuka) = your book (m)\nكِتَابُهُ (kitābuhu) = his book\nكِتَابُهَا (kitābuhā) = her book",
          contentAr: "تعبر العربية عن الملكية بإضافة لاحقة إلى الاسم:\n\nكِتَاب (kitāb) = كتاب\nكِتَابِي (kitābī) = كتابي\nكِتَابُكَ (kitābuka) = كتابك (مذكر)\nكِتَابُهُ (kitābuhu) = كتابه\nكِتَابُهَا (kitābuhā) = كتابها",
          contentFr: "L'arabe exprime la possession en ATTACHEANT un suffixe au nom :\n\nكِتَاب (kitāb) = livre\nكِتَابِي (kitābī) = mon livre\nكِتَابُكَ (kitābuka) = ton livre (m)\nكِتَابُهُ (kitābuhu) = son livre\nكِتَابُهَا (kitābuhā) = son livre (f)"
        },
        {
          title: "All Possessive Suffixes",
          titleAr: "جميع لواحق الملكية",
          titleFr: "Tous les suffixes possessifs",
          content: "Singular:\nـي (-ī) = my\nـكَ (-ka) = your (m)\nـكِ (-ki) = your (f)\nـهُ (-hu) = his\nـهَا (-hā) = her\n\nPlural:\nـنَا (-nā) = our\nـكُمْ (-kum) = your (pl)\nـهُمْ (-hum) = their",
          contentAr: "المفرد:\nـي (-ī) = ياء الملكية\nـكَ (-ka) = كاف الملكية (مذكر)\nـكِ (-ki) = كاف الملكية (مؤنث)\nـهُ (-hu) = هاء الملكية (مذكر)\nـهَا (-hā) = هاء الملكية (مؤنث)\n\nالجمع:\nـنَا (-nā) = نون الملكية\nـكُمْ (-kum) = كاف الملكية الجمع\nـهُمْ (-hum) = هاء الملكية الجمع",
          contentFr: "Singulier :\nـي (-ī) = mon/ma/mes\nـكَ (-ka) = ton/ta/tes (m)\nـكِ (-ki) = ton/ta/tes (f)\nـهُ (-hu) = son/sa/ses\nـهَا (-hā) = son/sa/ses (f)\n\nPluriel :\nـنَا (-nā) = notre/nos\nـكُمْ (-kum) = votre/vos (pl)\nـهُمْ (-hum) = leur/leurs"
        },
        {
          title: "Examples with Family",
          titleAr: "أمثلة مع العائلة",
          titleFr: "Exemples avec la famille",
          content: "أَبِي (abī) = my father\nأُمُّكَ (ummuka) = your mother (m)\nأُخْتُهُ (ukhtuhu) = his sister\nبَيْتُنَا (baytunā) = our house\nأَبُوهُمْ (abūhum) = their father",
          contentAr: "أَبِي (abī) = أبي\nأُمُّكَ (ummuka) = أمك (مذكر)\nأُخْتُهُ (ukhtuhu) = أخته\nبَيْتُنَا (baytunā) = بيتنا\nأَبُوهُمْ (abūhum) = أبوهم",
          contentFr: "أَبِي (abī) = mon père\nأُمُّكَ (ummuka) = ta mère (m)\nأُخْتُهُ (ukhtuhu) = sa sœur\nبَيْتُنَا (baytunā) = notre maison\nأَبُوهُمْ (abūhum) = leur père"
        }
      ],
      vocabulary: [
        { arabic: "كِتَابِي", transliteration: "kitābī", meaning: "my book", meaningAr: "كتابي", meaningFr: "mon livre" },
        { arabic: "بَيْتُكَ", transliteration: "baytuka", meaning: "your house (m)", meaningAr: "بيتك", meaningFr: "ta maison (m)" },
        { arabic: "سَيَّارَتُهَا", transliteration: "sayyāratuhā", meaning: "her car", meaningAr: "سيارتها", meaningFr: "sa voiture" },
        { arabic: "عَائِلَتُنَا", transliteration: "'ā'ilatunā", meaning: "our family", meaningAr: "عائلتنا", meaningFr: "notre famille" },
        { arabic: "صَدِيقُهُمْ", transliteration: "ṣadīquhum", meaning: "their friend", meaningAr: "صديقهم", meaningFr: "leur ami" }
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
    descriptionAr: "تعلم هذا وذاك وهؤلاء وتلك في العربية",
    descriptionFr: "Apprenez « ceci », « cela », « ceux-ci », « ceux-là » en arabe",
    objectives: [
      "Use هَذَا and هَذِهِ correctly",
      "Distinguish near and far demonstratives",
      "Form sentences with demonstratives",
      "Match demonstratives with noun gender"
    ],
    objectivesAr: [
      "التعرف على الضمائر الإشارية",
      "استخدام الضمائر الإشارية بشكل صحيح",
      "فهم الفروقات بين القريب والبعيد",
      "ممارسة الضمائر الإشارية"
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
          titleAr: "الضمائر الإشارية القريبة",
          titleFr: "Démonstratifs proches (Ceci/Ceux-ci)",
          content: "هَذَا (hādhā) = this (masculine)\nهَذِهِ (hādhihi) = this (feminine)\nهَذَانِ (hādhāni) = these two (m)\nهَاتَانِ (hātāni) = these two (f)\nهَؤُلَاءِ (hā'ulā'i) = these (plural)",
          contentAr: "هَذَا (hādhā) = هذا (مذكر)\nهَذِهِ (hādhihi) = هذه (مؤنث)\nهَذَانِ (hādhāni) = هذان (مثنى مذكر)\nهَاتَانِ (hātāni) = هاتان (مثنى مؤنث)\nهَؤُلَاءِ (hā'ulā'i) = هؤلاء (جمع)",
          contentFr: "هَذَا (hādhā) = ceci (m)\nهَذِهِ (hādhihi) = ceci (f)\nهَذَانِ (hādhāni) = ces deux (m)\nهَاتَانِ (hātāni) = ces deux (f)\nهَؤُلَاءِ (hā'ulā'i) = ceux-ci (pluriel)"
        },
        {
          title: "Far Demonstratives (That/Those)",
          titleAr: "الضمائر الإشارية البعيدة",
          titleFr: "Démonstratifs éloignés (Cela/Ceux-là)",
          content: "ذَلِكَ (dhālika) = that (masculine)\nتِلْكَ (tilka) = that (feminine)\nذَانِكَ (dhānika) = those two (m)\nتَانِكَ (tānika) = those two (f)\nأُولَئِكَ (ulā'ika) = those (plural)",
          contentAr: "ذَلِكَ (dhālika) = ذلك (مذكر)\nتِلْكَ (tilka) = تلك (مؤنث)\nذَانِكَ (dhānika) = ذانك (مثنى مذكر)\nتَانِكَ (tānika) = تانك (مثنى مؤنث)\nأُولَئِكَ (ulā'ika) = أولئك (جمع)",
          contentFr: "ذَلِكَ (dhālika) = cela (m)\nتِلْكَ (tilka) = cela (f)\nذَانِكَ (dhānika) = ces deux-là (m)\nتَانِكَ (tānika) = ces deux-là (f)\nأُولَئِكَ (ulā'ika) = ceux-là (pluriel)"
        },
        {
          title: "Using Demonstratives",
          titleAr: "استخدام الضمائر الإشارية",
          titleFr: "Utiliser les démonstratifs",
          content: "هَذَا كِتَابٌ (hādhā kitābun) = This is a book\nهَذِهِ سَيَّارَةٌ (hādhihi sayyāratun) = This is a car\nذَلِكَ الرَّجُلُ (dhālika ar-rajulu) = That man\nتِلْكَ المَرْأَةُ (tilka al-mar'atu) = That woman",
          contentAr: "هَذَا كِتَابٌ (hādhā kitābun) = هذا كتاب\nهَذِهِ سَيَّارَةٌ (hādhihi sayyāratun) = هذه سيارة\nذَلِكَ الرَّجُلُ (dhālika ar-rajulu) = ذلك الرجل\nتِلْكَ المَرْأَةُ (tilka al-mar'atu) = تلك المرأة",
          contentFr: "هَذَا كِتَابٌ (hādhā kitābun) = Ceci est un livre\nهَذِهِ سَيَّارَةٌ (hādhihi sayyāratun) = Ceci est une voiture\nذَلِكَ الرَّجُلُ (dhālika ar-rajulu) = Cet homme\nتِلْكَ المَرْأَةُ (tilka al-mar'atu) = Cette femme"
        }
      ],
      vocabulary: [
        { arabic: "هَذَا", transliteration: "hādhā", meaning: "this (m)", meaningAr: "هذا", meaningFr: "ceci (m)" },
        { arabic: "هَذِهِ", transliteration: "hādhihi", meaning: "this (f)", meaningAr: "هذه", meaningFr: "ceci (f)" },
        { arabic: "ذَلِكَ", transliteration: "dhālika", meaning: "that (m)", meaningAr: "ذلك", meaningFr: "cela (m)" },
        { arabic: "تِلْكَ", transliteration: "tilka", meaning: "that (f)", meaningAr: "تلك", meaningFr: "cela (f)" },
        { arabic: "هَؤُلَاءِ", transliteration: "hā'ulā'i", meaning: "these", meaningAr: "هؤلاء", meaningFr: "ceux-ci" },
        { arabic: "أُولَئِكَ", transliteration: "ulā'ika", meaning: "those", meaningAr: "أولئك", meaningFr: "ceux-là" }
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
    descriptionAr: "تعلم أدوات الاستفهام في العربية",
    descriptionFr: "Apprenez les mots interrogatifs en arabe",
    objectives: [
      "Ask 'who', 'what', 'where', 'when', 'why', 'how'",
      "Form questions correctly",
      "Understand word order in questions",
      "Practice question-answer exchanges"
    ],
    objectivesAr: [
      "التعرف على أدوات الاستفهام المختلفة",
      "صياغة الأسئلة بأدوات مختلفة",
      "فهم متى يتم استخدام كل أداة",
      "ممارسة الأسئلة في الحوارات"
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
          titleAr: "أدوات الاستفهام الأساسية",
          titleFr: "Mots interrogatifs de base",
          content: "مَنْ (man) = who?\nمَا (mā) / مَاذَا (mādhā) = what?\nأَيْنَ (ayna) = where?\nمَتَى (matā) = when?\nلِمَاذَا (limādhā) = why?\nكَيْفَ (kayfa) = how?\nكَمْ (kam) = how many/much?",
          contentAr: "مَنْ (man) = من (من يكون؟)\nمَا (mā) / مَاذَا (mādhā) = ما (ماذا يعني؟)\nأَيْنَ (ayna) = أين (في أي مكان؟)\nمَتَى (matā) = متى (في أي وقت؟)\nلِمَاذَا (limādhā) = لماذا (ما السبب؟)\nكَيْفَ (kayfa) = كيف (بأي طريقة؟)\nكَمْ (kam) = كم (كم العدد؟)",
          contentFr: "مَنْ (man) = qui ?\nمَا (mā) / مَاذَا (mādhā) = quoi ?\nأَيْنَ (ayna) = où ?\nمَتَى (matā) = quand ?\nلِمَاذَا (limādhā) = pourquoi ?\nكَيْفَ (kayfa) = comment ?\nكَمْ (kam) = combien ?"
        },
        {
          title: "Forming Questions",
          titleAr: "صياغة الأسئلة",
          titleFr: "Former les questions",
          content: "Questions often start with the question word:\nمَنْ هَذَا؟ (man hādhā?) = Who is this?\nمَا اسْمُكَ؟ (mā ismuka?) = What is your name?\nأَيْنَ أَنْتَ؟ (ayna anta?) = Where are you?\nمَتَى السَّفَر؟ (matā as-safar?) = When is the trip?",
          contentAr: "تبدأ الأسئلة غالبًا بأداة الاستفهام:\nمَنْ هَذَا؟ (man hādhā?) = من هذا؟\nمَا اسْمُكَ؟ (mā ismuka?) = ما اسمك؟\nأَيْنَ أَنْتَ؟ (ayna anta?) = أين أنت؟\nمَتَى السَّفَر؟ (matā as-safar?) = متى السفر؟",
          contentFr: "Les questions commencent souvent par le mot interrogatif :\nمَنْ هَذَا؟ (man hādhā?) = Qui est-ce ?\nمَا اسْمُكَ؟ (mā ismuka?) = Quel est ton nom ?\nأَيْنَ أَنْتَ؟ (ayna anta?) = Où es-tu ?\nمَتَى السَّفَر؟ (matā as-safar?) = Quand est le voyage ?"
        },
        {
          title: "Yes/No Questions",
          titleAr: "الأسئلة نعم/لا",
          titleFr: "Questions oui/non",
          content: "For yes/no questions, use هَلْ (hal) or أَ (a) at the beginning:\nهَلْ أَنْتَ طَالِبٌ؟ (hal anta ṭālibun?) = Are you a student?\nأَتُحِبُّ القَهْوَة؟ (atuḥibbu al-qahwa?) = Do you like coffee?",
          contentAr: "لأسئلة نعم/لا، استخدم هَلْ (hal) أو أَ (a) في البداية:\nهَلْ أَنْتَ طَالِبٌ؟ (hal anta ṭālibun?) = هل أنت طالب؟\nأَتُحِبُّ القَهْوَة؟ (atuḥibbu al-qahwa?) = أتحب القهوة؟",
          contentFr: "Pour les questions oui/non, utilisez هَلْ (hal) ou أَ (a) au début :\nهَلْ أَنْتَ طَالِبٌ؟ (hal anta ṭālibun?) = Es-tu étudiant ?\nأَتُحِبُّ القَهْوَة؟ (atuḥibbu al-qahwa?) = Aimes-tu le café ?"
        }
      ],
      vocabulary: [
        { arabic: "مَنْ", transliteration: "man", meaning: "who?", meaningAr: "من؟", meaningFr: "qui ?" },
        { arabic: "مَا / مَاذَا", transliteration: "mā / mādhā", meaning: "what?", meaningAr: "ما؟", meaningFr: "quoi ?" },
        { arabic: "أَيْنَ", transliteration: "ayna", meaning: "where?", meaningAr: "أين؟", meaningFr: "où ?" },
        { arabic: "مَتَى", transliteration: "matā", meaning: "when?", meaningAr: "متى؟", meaningFr: "quand ?" },
        { arabic: "لِمَاذَا", transliteration: "limādhā", meaning: "why?", meaningAr: "لماذا؟", meaningFr: "pourquoi ?" },
        { arabic: "كَيْفَ", transliteration: "kayfa", meaning: "how?", meaningAr: "كيف؟", meaningFr: "comment ?" },
        { arabic: "هَلْ", transliteration: "hal", meaning: "is? / do? (yes/no marker)", meaningAr: "هل؟", meaningFr: "est ? / tu fais ? (marqueur oui/non)" }
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
    descriptionAr: "فهم الصيغ المذكرة والمؤنثة في العربية",
    descriptionFr: "Comprenez les formes masculines et féminines",
    objectives: [
      "Identify masculine and feminine nouns",
      "Recognize the feminine marker ة",
      "Convert masculine to feminine",
      "Apply gender agreement rules"
    ],
    objectivesAr: [
      "التعرف على الجنس النحوي",
      "تحويل الكلمات بين المذكر والمؤنث",
      "فهم انعكاس الجنس على الكلمات الأخرى",
      "ممارسة تحديد وتطبيق الجنس"
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
          titleAr: "أساسيات الجنس",
          titleFr: "Les bases du genre",
          content: "Arabic nouns are either masculine (مُذَكَّر) or feminine (مُؤَنَّث). Unlike English, ALL nouns have gender, including objects!\n\nMasculine: كِتَاب (book), قَلَم (pen), بَاب (door)\nFeminine: سَيَّارَة (car), مَدْرَسَة (school), مَدِينَة (city)",
          contentAr: "أسماء العربية إما مذكرة أو مؤنثة. بخلاف الإنجليزية، جميع الأسماء لها جنس!\n\nمذكر: كِتَاب (كتاب)، قَلَم (قلم)، بَاب (باب)\nمؤنث: سَيَّارَة (سيارة)، مَدْرَسَة (مدرسة)، مَدِينَة (مدينة)",
          contentFr: "Les noms arabes sont soit masculins (مُذَكَّر) soit féminins (مُؤَنَّث). Contrairement à l'anglais, TOUS les noms ont un genre, y compris les objets !\n\nMasculin : كِتَاب (livre), قَلَم (stylo), بَاب (porte)\nFéminin : سَيَّارَة (voiture), مَدْرَسَة (école), مَدِينَة (ville)"
        },
        {
          title: "The Feminine Marker ة",
          titleAr: "علامة التأنيث: ة",
          titleFr: "Le marqueur féminin ة",
          content: "Most feminine nouns end in ة (tā' marbūṭa - 'tied t'):\nمُعَلِّم (mu'allim) = teacher (m) → مُعَلِّمَة (mu'allima) = teacher (f)\nطَالِب (ṭālib) = student (m) → طَالِبَة (ṭāliba) = student (f)\n\nNote: ة is pronounced 'a' at the end of a phrase, but 't' when connected to the next word.",
          contentAr: "معظم الأسماء المؤنثة تنتهي بـ ة (تاء مربوطة):\nمُعَلِّم (معلم) ← مُعَلِّمَة (معلمة)\nطَالِب (طالب) ← طَالِبَة (طالبة)\n\nملاحظة: ة تُنطق 'ا' في نهاية الجملة، لكن 'ت' عندما تتصل بكلمة أخرى.",
          contentFr: "La plupart des noms féminins se terminent par ة (tā' marbūṭa) :\nمُعَلِّم (professeur m) → مُعَلِّمَة (professeur f)\nطَالِب (étudiant m) → طَالِبَة (étudiante f)\n\nRemarque : ة se prononce 'a' à la fin d'une phrase, mais 't' quand elle est liée au mot suivant."
        },
        {
          title: "Naturally Feminine Nouns",
          titleAr: "الأسماء المؤنثة الطبيعية",
          titleFr: "Noms naturellement féminins",
          content: "Some nouns are feminine without ة:\nأُمّ (umm) = mother\nبِنْت (bint) = girl/daughter\nأُخْت (ukht) = sister\nشَمْس (shams) = sun\nأَرْض (arḍ) = earth\n\nMany body parts that come in pairs are also feminine!",
          contentAr: "بعض الأسماء مؤنثة بدون ة:\nأُمّ (أم) = الأم\nبِنْت (بنت) = البنت\nأُخْت (أخت) = الأخت\nشَمْس (شمس) = الشمس\nأَرْض (أرض) = الأرض\n\nأعضاء الجسم التي تأتي في أزواج تكون مؤنثة أيضًا!",
          contentFr: "Certains noms sont féminins sans ة :\nأُمّ (mère)\nبِنْت (fille/jeune fille)\nأُخْت (sœur)\nشَمْس (soleil)\nأَرْض (terre)\n\nDe nombreuses parties du corps qui viennent en paires sont aussi féminines !"
        }
      ],
      vocabulary: [
        { arabic: "مُذَكَّر", transliteration: "mudhakkar", meaning: "masculine", meaningAr: "مذكر", meaningFr: "masculin" },
        { arabic: "مُؤَنَّث", transliteration: "mu'annath", meaning: "feminine", meaningAr: "مؤنث", meaningFr: "féminin" },
        { arabic: "طَالِب / طَالِبَة", transliteration: "ṭālib / ṭāliba", meaning: "student (m/f)", meaningAr: "طالب/طالبة", meaningFr: "étudiant (m/f)" },
        { arabic: "مُعَلِّم / مُعَلِّمَة", transliteration: "mu'allim / mu'allima", meaning: "teacher (m/f)", meaningAr: "معلم/معلمة", meaningFr: "professeur (m/f)" },
        { arabic: "صَدِيق / صَدِيقَة", transliteration: "ṣadīq / ṣadīqa", meaning: "friend (m/f)", meaningAr: "صديق/صديقة", meaningFr: "ami (m/f)" }
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
    descriptionAr: "اتقن كلمة 'ال' في العربية وقواعد النطق",
    descriptionFr: "Maîtrisez l'article « le/la » en arabe et ses règles de prononciation",
    objectives: [
      "Use الـ (al-) to make nouns definite",
      "Understand sun and moon letters",
      "Apply assimilation rules correctly",
      "Distinguish definite from indefinite nouns"
    ],
    objectivesAr: [
      "فهم استخدام أداة التعريف",
      "نطق أداة التعريف بشكل صحيح",
      "فهم الحروف الشمسية والقمرية",
      "تطبيق قواعد أداة التعريف"
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
          titleAr: "أداة التعريف الأساسية",
          titleFr: "L'article défini",
          content: "الـ (al-) means 'the' and attaches to the beginning of nouns:\nكِتَاب (kitāb) = a book\nالكِتَاب (al-kitāb) = THE book\n\nRemember: Indefinite nouns have tanwīn (كِتَابٌ); definite nouns have الـ (الكِتَاب).",
          contentAr: "الـ (al-) تعني 'ال' وتضاف إلى بداية الاسم:\nكِتَاب (kitāb) = كتاب\nالكِتَاب (al-kitāb) = الكتاب\n\nتذكر: الأسماء النكرة لها تنوين (كِتَابٌ)؛ والأسماء المعرفة لها الـ (الكِتَاب)",
          contentFr: "الـ (al-) signifie « le/la » et s'attache au début des noms :\nكِتَاب (kitāb) = un livre\nالكِتَاب (al-kitāb) = LE livre\n\nRappel : Les noms indéfinis ont la tanwīn (كِتَابٌ) ; les noms définis ont الـ (الكِتَاب)."
        },
        {
          title: "Sun Letters (حُرُوف شَمْسِيَّة)",
          titleAr: "الحروف الشمسية",
          titleFr: "Lettres solaires",
          content: "With 'sun letters', the ل in الـ is SILENT and the following letter is doubled:\n\nت ث د ذ ر ز س ش ص ض ط ظ ل ن\n\nExample: الشَّمْس (ash-shams) not (al-shams)\nالسَّلَام (as-salām) not (al-salām)",
          contentAr: "مع الحروف الشمسية، اللام في الـ صامت والحرف التالي يُشدد:\n\nت ث د ذ ر ز س ش ص ض ط ظ ل ن\n\nمثال: الشَّمْس (ash-shams) وليس (al-shams)\nالسَّلَام (as-salām) وليس (al-salām)",
          contentFr: "Avec les « lettres solaires », le ل dans الـ est SILENCIEUX et la lettre suivante est doublée :\n\nت ث د ذ ر ز س ش ص ض ط ظ ل ن\n\nExemple : الشَّمْس (ash-shams) pas (al-shams)\nالسَّلَام (as-salām) pas (al-salām)"
        },
        {
          title: "Moon Letters (حُرُوف قَمَرِيَّة)",
          titleAr: "الحروف القمرية",
          titleFr: "Lettres lunaires",
          content: "With 'moon letters', الـ is pronounced fully:\n\nا ب ج ح خ ع غ ف ق ك م ه و ي\n\nExample: القَمَر (al-qamar)\nالكِتَاب (al-kitāb)\nالبَيْت (al-bayt)",
          contentAr: "مع الحروف القمرية، الـ تُنطق كاملة:\n\nا ب ج ح خ ع غ ف ق ك م ه و ي\n\nمثال: القَمَر (al-qamar)\nالكِتَاب (al-kitāb)\nالبَيْت (al-bayt)",
          contentFr: "Avec les « lettres lunaires », الـ est prononcé complètement :\n\nا ب ج ح خ ع غ ف ق ك م ه و ي\n\nExemple : القَمَر (al-qamar)\nالكِتَاب (al-kitāb)\nالبَيْت (al-bayt)"
        }
      ],
      vocabulary: [
        { arabic: "الكِتَاب", transliteration: "al-kitāb", meaning: "the book", meaningAr: "الكتاب", meaningFr: "le livre" },
        { arabic: "الشَّمْس", transliteration: "ash-shams", meaning: "the sun", meaningAr: "الشمس", meaningFr: "le soleil" },
        { arabic: "القَمَر", transliteration: "al-qamar", meaning: "the moon", meaningAr: "القمر", meaningFr: "la lune" },
        { arabic: "النُّور", transliteration: "an-nūr", meaning: "the light", meaningAr: "النور", meaningFr: "la lumière" },
        { arabic: "البَيْت", transliteration: "al-bayt", meaning: "the house", meaningAr: "البيت", meaningFr: "la maison" }
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
    descriptionAr: "تعلم الصفات وكيفية اتفاقها مع الأسماء",
    descriptionFr: "Apprenez les adjectifs et comment ils s'accordent avec les noms",
    objectives: [
      "Use common Arabic adjectives",
      "Apply gender agreement",
      "Apply definiteness agreement",
      "Form noun-adjective phrases"
    ],
    objectivesAr: [
      "فهم الصفات في العربية",
      "تطبيق قواعس الاتفاق",
      "استخدام الصفات في الجمل",
      "وصف الأشياء باستخدام الصفات"
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
          titleAr: "الصفات الأساسية",
          titleFr: "Adjectifs de base",
          content: "كَبِير (kabīr) = big\nصَغِير (ṣaghīr) = small\nجَمِيل (jamīl) = beautiful\nجَدِيد (jadīd) = new\nقَدِيم (qadīm) = old\nسَرِيع (sarī') = fast\nبَطِيء (baṭī') = slow",
          contentAr: "كَبِير (kabīr) = كبير\nصَغِير (ṣaghīr) = صغير\nجَمِيل (jamīl) = جميل\nجَدِيد (jadīd) = جديد\nقَدِيم (qadīm) = قديم\nسَرِيع (sarī') = سريع\nبَطِيء (baṭī') = بطيء",
          contentFr: "كَبِير (kabīr) = grand\nصَغِير (ṣaghīr) = petit\nجَمِيل (jamīl) = beau\nجَدِيد (jadīd) = nouveau\nقَدِيم (qadīm) = ancien\nسَرِيع (sarī') = rapide\nبَطِيء (baṭī') = lent"
        },
        {
          title: "Gender Agreement",
          titleAr: "اتفاق الجنس",
          titleFr: "Accord de genre",
          content: "Adjectives MUST match the gender of the noun:\n\nكِتَابٌ كَبِيرٌ (kitābun kabīrun) = a big book (m)\nسَيَّارَةٌ كَبِيرَةٌ (sayyāratun kabīratun) = a big car (f)\n\nAdd ة to make adjectives feminine!",
          contentAr: "يجب أن تتطابق الصفات مع جنس الاسم:\n\nكِتَابٌ كَبِيرٌ (kitābun kabīrun) = كتاب كبير (مذكر)\nسَيَّارَةٌ كَبِيرَةٌ (sayyāratun kabīratun) = سيارة كبيرة (مؤنث)\n\nأضف ة لجعل الصفات مؤنثة!",
          contentFr: "Les adjectifs DOIVENT correspondre au genre du nom :\n\nكِتَابٌ كَبِيرٌ (kitābun kabīrun) = un grand livre (m)\nسَيَّارَةٌ كَبِيرَةٌ (sayyāratun kabīratun) = une grande voiture (f)\n\nAjoutez ة pour rendre les adjectifs féminins !"
        },
        {
          title: "Definiteness Agreement",
          titleAr: "اتفاق التعريف",
          titleFr: "Accord de définitude",
          content: "Adjectives must also match definiteness:\n\nIndefinite: كِتَابٌ كَبِيرٌ = a big book\nDefinite: الكِتَابُ الكَبِيرُ = THE big book\n\nBoth noun AND adjective get الـ!",
          contentAr: "يجب أن تتطابق الصفات أيضًا مع التعريف:\n\nنكرة: كِتَابٌ كَبِيرٌ = كتاب كبير\nمعرفة: الكِتَابُ الكَبِيرُ = الكتاب الكبير\n\nكل من الاسم والصفة يأخذ الـ!",
          contentFr: "Les adjectifs doivent aussi correspondre à la définitude :\n\nIndéfini : كِتَابٌ كَبِيرٌ = un grand livre\nDéfini : الكِتَابُ الكَبِيرُ = LE grand livre\n\nA LA FOIS le nom ET l'adjectif prennent الـ !"
        }
      ],
      vocabulary: [
        { arabic: "كَبِير / كَبِيرَة", transliteration: "kabīr / kabīra", meaning: "big", meaningAr: "كبير", meaningFr: "grand" },
        { arabic: "صَغِير / صَغِيرَة", transliteration: "ṣaghīr / ṣaghīra", meaning: "small", meaningAr: "صغير", meaningFr: "petit" },
        { arabic: "جَمِيل / جَمِيلَة", transliteration: "jamīl / jamīla", meaning: "beautiful", meaningAr: "جميل", meaningFr: "beau" },
        { arabic: "جَدِيد / جَدِيدَة", transliteration: "jadīd / jadīda", meaning: "new", meaningAr: "جديد", meaningFr: "nouveau" },
        { arabic: "طَوِيل / طَوِيلَة", transliteration: "ṭawīl / ṭawīla", meaning: "tall/long", meaningAr: "طويل", meaningFr: "grand/long" },
        { arabic: "قَصِير / قَصِيرَة", transliteration: "qaṣīr / qaṣīra", meaning: "short", meaningAr: "قصير", meaningFr: "court" }
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
    descriptionAr: "تعلم كيفية تكوين الجمع في العربية",
    descriptionFr: "Apprenez à former les pluriels en arabe",
    objectives: [
      "Understand sound and broken plurals",
      "Form masculine and feminine sound plurals",
      "Recognize common broken plural patterns",
      "Use plurals correctly in sentences"
    ],
    objectivesAr: [
      "فهم أنواع الجموع المختلفة",
      "تحويل الأسماء من المفرد إلى الجمع",
      "استخدام الجموع في السياقات",
      "التمييز بين أنواع الجموع"
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
          titleAr: "الجموع السالمة",
          titleFr: "Les pluriels réguliers",
          content: "Sound plurals add endings to the singular:\n\nMasculine sound plural: Add ـون (-ūn) or ـين (-īn)\nمُعَلِّم (teacher) → مُعَلِّمُون (teachers)\n\nFeminine sound plural: Change ة to ات (-āt)\nمُعَلِّمَة → مُعَلِّمَات",
          contentAr: "الجموع السالمة تضيف نهايات للمفرد:\n\nالجمع المذكر السالم: أضف ـون (-ūn) أو ـين (-īn)\nمُعَلِّم (معلم) → مُعَلِّمُون (معلمون)\n\nالجمع المؤنث السالم: غير ة إلى ات (-āt)\nمُعَلِّمَة → مُعَلِّمَات",
          contentFr: "Les pluriels réguliers ajoutent des terminaisons au singulier :\n\nPluriel régulier masculin : Ajoutez ـون (-ūn) ou ـين (-īn)\nمُعَلِّم (professeur) → مُعَلِّمُون (professeurs)\n\nPluriel régulier féminin : Changez ة en ات (-āt)\nمُعَلِّمَة → مُعَلِّمَات"
        },
        {
          title: "Broken Plurals",
          titleAr: "الجموع المكسرة",
          titleFr: "Les pluriels irréguliers",
          content: "Broken plurals change the internal vowels (like English 'man/men'):\nكِتَاب (book) → كُتُب (books)\nرَجُل (man) → رِجَال (men)\nبَيْت (house) → بُيُوت (houses)\n\nThese must be memorized for each word!",
          contentAr: "الجموع المكسرة تغير حروف العلة الداخلية:\nكِتَاب (كتاب) → كُتُب (كتب)\nرَجُل (رجل) → رِجَال (رجال)\nبَيْت (بيت) → بُيُوت (بيوت)\n\nيجب حفظ كل كلمة على حدة!",
          contentFr: "Les pluriels irréguliers changent les voyelles internes (comme l'anglais 'man/men') :\nكِتَاب (livre) → كُتُب (livres)\nرَجُل (homme) → رِجَال (hommes)\nبَيْت (maison) → بُيُوت (maisons)\n\nCeux-ci doivent être mémorisés pour chaque mot !"
        },
        {
          title: "Common Broken Plural Patterns",
          titleAr: "أنماط الجموع المكسرة الشائعة",
          titleFr: "Modèles de pluriels irréguliers courants",
          content: "فُعُول: بُيُوت، قُلُوب، عُيُون\nفِعَال: رِجَال، جِبَال\nأَفْعَال: أَقْلَام، أَوْلَاد\nفُعَلَاء: عُلَمَاء، أُمَرَاء",
          contentAr: "فُعُول: بُيُوت (بيوت)، قُلُوب (قلوب)، عُيُون (عيون)\nفِعَال: رِجَال (رجال)، جِبَال (جبال)\nأَفْعَال: أَقْلَام (أقلام)، أَوْلَاد (أولاد)\nفُعَلَاء: عُلَمَاء (علماء)، أُمَرَاء (أمراء)",
          contentFr: "فُعُول : بُيُوت, قُلُوب, عُيُون\nفِعَال : رِجَال, جِبَال\nأَفْعَال : أَقْلَام, أَوْلَاد\nفُعَلَاء : عُلَمَاء, أُمَرَاء"
        }
      ],
      vocabulary: [
        { arabic: "كِتَاب → كُتُب", transliteration: "kitāb → kutub", meaning: "book → books", meaningAr: "كتاب→كتب", meaningFr: "livre → livres" },
        { arabic: "رَجُل → رِجَال", transliteration: "rajul → rijāl", meaning: "man → men", meaningAr: "رجل→رجال", meaningFr: "homme → hommes" },
        { arabic: "بَيْت → بُيُوت", transliteration: "bayt → buyūt", meaning: "house → houses", meaningAr: "بيت→بيوت", meaningFr: "maison → maisons" },
        { arabic: "وَلَد → أَوْلَاد", transliteration: "walad → awlād", meaning: "boy → boys", meaningAr: "ولد→أولاد", meaningFr: "garçon → garçons" },
        { arabic: "طَالِب → طُلَّاب", transliteration: "ṭālib → ṭullāb", meaning: "student → students", meaningAr: "طالب→طلاب", meaningFr: "étudiant → étudiants" }
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
    descriptionAr: "تعلم الأرقام من 11 إلى 100",
    descriptionFr: "Apprenez les nombres de 11 à 100",
    objectives: [
      "Count from 11 to 100 in Arabic",
      "Understand number-noun agreement",
      "Read prices and quantities",
      "Use numbers in practical contexts"
    ],
    objectivesAr: [
      "نطق الأرقام من 11 إلى 100",
      "كتابة الأرقام والكلمات الرقمية",
      "استخدام الأرقام في السياقات",
      "فهم قواعد اتفاق الأرقام"
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
          titleAr: "الأرقام ١١-١٩",
          titleFr: "Les nombres 11-19",
          content: "These are compound numbers:\n11 = أَحَدَ عَشَرَ (aḥada 'ashara)\n12 = اِثْنَا عَشَرَ (ithnā 'ashara)\n13 = ثَلَاثَةَ عَشَرَ (thalāthata 'ashara)\n14 = أَرْبَعَةَ عَشَرَ (arba'ata 'ashara)\n15 = خَمْسَةَ عَشَرَ (khamsata 'ashara)",
          contentAr: "هذه أرقام مركبة:\n11 = أَحَدَ عَشَرَ\n12 = اِثْنَا عَشَرَ\n13 = ثَلَاثَةَ عَشَرَ\n14 = أَرْبَعَةَ عَشَرَ\n15 = خَمْسَةَ عَشَرَ",
          contentFr: "Ce sont des nombres composés :\n11 = أَحَدَ عَشَرَ (aḥada 'ashara)\n12 = اِثْنَا عَشَرَ (ithnā 'ashara)\n13 = ثَلَاثَةَ عَشَرَ (thalāthata 'ashara)\n14 = أَرْبَعَةَ عَشَرَ (arba'ata 'ashara)\n15 = خَمْسَةَ عَشَرَ (khamsata 'ashara)"
        },
        {
          title: "Tens (20-90)",
          titleAr: "العشرات (٢٠-٩٠)",
          titleFr: "Les dizaines (20-90)",
          content: "20 = عِشْرُون ('ishrūn)\n30 = ثَلَاثُون (thalāthūn)\n40 = أَرْبَعُون (arba'ūn)\n50 = خَمْسُون (khamsūn)\n60 = سِتُّون (sittūn)\n70 = سَبْعُون (sab'ūn)\n80 = ثَمَانُون (thamānūn)\n90 = تِسْعُون (tis'ūn)",
          contentAr: "20 = عِشْرُون\n30 = ثَلَاثُون\n40 = أَرْبَعُون\n50 = خَمْسُون\n60 = سِتُّون\n70 = سَبْعُون\n80 = ثَمَانُون\n90 = تِسْعُون",
          contentFr: "20 = عِشْرُون (vingt)\n30 = ثَلَاثُون (trente)\n40 = أَرْبَعُون (quarante)\n50 = خَمْسُون (cinquante)\n60 = سِتُّون (soixante)\n70 = سَبْعُون (soixante-dix)\n80 = ثَمَانُون (quatre-vingts)\n90 = تِسْعُون (quatre-vingt-dix)"
        },
        {
          title: "Compound Numbers",
          titleAr: "الأرقام المركبة",
          titleFr: "Les nombres composés",
          content: "21-99 are formed with وَ (and):\n21 = وَاحِدٌ وَعِشْرُون (one and twenty)\n35 = خَمْسَةٌ وَثَلَاثُون (five and thirty)\n99 = تِسْعَةٌ وَتِسْعُون (nine and ninety)",
          contentAr: "21-99 تُكوَّن بـ وَ (و):\n21 = وَاحِدٌ وَعِشْرُون\n35 = خَمْسَةٌ وَثَلَاثُون\n99 = تِسْعَةٌ وَتِسْعُون",
          contentFr: "Les nombres 21-99 se forment avec وَ (et) :\n21 = وَاحِدٌ وَعِشْرُون (un et vingt)\n35 = خَمْسَةٌ وَثَلَاثُون (cinq et trente)\n99 = تِسْعَةٌ وَتِسْعُون (neuf et quatre-vingt-dix)"
        }
      ],
      vocabulary: [
        { arabic: "عِشْرُون", transliteration: "'ishrūn", meaning: "twenty", meaningAr: "عشرون", meaningFr: "vingt" },
        { arabic: "ثَلَاثُون", transliteration: "thalāthūn", meaning: "thirty", meaningAr: "ثلاثون", meaningFr: "trente" },
        { arabic: "خَمْسُون", transliteration: "khamsūn", meaning: "fifty", meaningAr: "خمسون", meaningFr: "cinquante" },
        { arabic: "مِئَة / مِائَة", transliteration: "mi'a", meaning: "one hundred", meaningAr: "مائة", meaningFr: "cent" },
        { arabic: "رَقْم", transliteration: "raqm", meaning: "number", meaningAr: "رقم", meaningFr: "nombre" }
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
    descriptionAr: "فهم أساسيات نظام الفعل العربي",
    descriptionFr: "Comprenez les bases du système verbal arabe",
    objectives: [
      "Understand the three-letter root system",
      "Recognize verb patterns",
      "Identify verb forms in sentences",
      "Learn the concept of past, present, and future"
    ],
    objectivesAr: [
      "فهم بنية الفعل الثلاثي",
      "التعرف على الأفعال المختلفة",
      "فهم أشكال الفعل",
      "مقدمة عن تصريف الفعل"
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
          titleAr: "الجذر الثلاثي",
          titleFr: "La racine à trois lettres",
          content: "Most Arabic verbs come from a THREE-LETTER ROOT. By adding prefixes, suffixes, and changing vowels, you create different words:\n\nRoot: ك-ت-ب (k-t-b) = concept of writing\n• كَتَبَ (kataba) = he wrote\n• يَكْتُبُ (yaktub) = he writes\n• كِتَاب (kitāb) = book\n• كَاتِب (kātib) = writer\n• مَكْتَب (maktab) = office/desk",
          contentAr: "معظم الأفعال العربية تأتي من جذر ثلاثي الأحرف. بإضافة البادئات واللواحق وتغيير حروف العلة:\n\nالجذر: ك-ت-ب = مفهوم الكتابة\n• كَتَبَ (kataba) = هو كتب\n• يَكْتُبُ (yaktub) = هو يكتب\n• كِتَاب (kitāb) = كتاب\n• كَاتِب (kātib) = كاتب\n• مَكْتَب (maktab) = مكتب",
          contentFr: "La plupart des verbes arabes proviennent d'une RACINE À TROIS LETTRES. En ajoutant des préfixes, des suffixes et en changeant les voyelles, vous créez différents mots :\n\nRacine : ك-ت-ب (k-t-b) = concept d'écrire\n• كَتَبَ (kataba) = il a écrit\n• يَكْتُبُ (yaktub) = il écrit\n• كِتَاب (kitāb) = livre\n• كَاتِب (kātib) = écrivain\n• مَكْتَب (maktab) = bureau/pupitre"
        },
        {
          title: "Verb Tenses",
          titleAr: "أزمنة الفعل",
          titleFr: "Les temps des verbes",
          content: "Arabic has TWO main verb forms:\n\n1. الفِعْل المَاضِي (al-fi'l al-māḍī) = Past tense\nكَتَبَ = he wrote\n\n2. الفِعْل المُضَارِع (al-fi'l al-muḍāri') = Present/Future\nيَكْتُبُ = he writes / he will write",
          contentAr: "للعربية شكلان رئيسيان:\n\n1. الفِعْل المَاضِي = الماضي\nكَتَبَ = هو كتب\n\n2. الفِعْل المُضَارِع = المضارع/المستقبل\nيَكْتُبُ = هو يكتب / سيكتب",
          contentFr: "L'arabe a DEUX formes principales de verbes :\n\n1. الفِعْل المَاضِي (al-fi'l al-māḍī) = Passé\nكَتَبَ = il a écrit\n\n2. الفِعْل المُضَارِع (al-fi'l al-muḍāri') = Présent/Futur\nيَكْتُبُ = il écrit / il écrira"
        },
        {
          title: "Person, Gender, Number",
          titleAr: "الشخص والجنس والعدد",
          titleFr: "Personne, genre et nombre",
          content: "Arabic verbs change based on:\n• WHO is doing the action (I, you, he, she, etc.)\n• GENDER (masculine/feminine)\n• NUMBER (singular, dual, plural)\n\nThis means MANY verb forms! But don't worry - patterns are regular.",
          contentAr: "تتغير الأفعال بناءً على:\n• من يقوم بالفعل (أنا، أنت، هو، هي، إلخ)\n• الجنس (مذكر/مؤنث)\n• العدد (مفرد، مثنى، جمع)\n\nهذا يعني أشكالًا فعلية متعددة، لكن الأنماط منتظمة!",
          contentFr: "Les verbes arabes changent selon :\n• QUI fait l'action (je, tu, il, elle, etc.)\n• LE GENRE (masculin/féminin)\n• LE NOMBRE (singulier, duel, pluriel)\n\nCela signifie BEAUCOUP de formes verbales ! Mais ne vous inquiétez pas - les modèles sont réguliers."
        }
      ],
      vocabulary: [
        { arabic: "فِعْل", transliteration: "fi'l", meaning: "verb", meaningAr: "الفعل", meaningFr: "verbe" },
        { arabic: "كَتَبَ", transliteration: "kataba", meaning: "he wrote", meaningAr: "كتب", meaningFr: "il a écrit" },
        { arabic: "قَرَأَ", transliteration: "qara'a", meaning: "he read", meaningAr: "قرأ", meaningFr: "il a lu" },
        { arabic: "ذَهَبَ", transliteration: "dhahaba", meaning: "he went", meaningAr: "ذهب", meaningFr: "il est allé" },
        { arabic: "فَعَلَ", transliteration: "fa'ala", meaning: "he did", meaningAr: "فعل", meaningFr: "il a fait" }
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
    descriptionAr: "تعلم تصريف أفعال الماضي",
    descriptionFr: "Apprenez à conjuguer les verbes au passé",
    objectives: [
      "Conjugate past tense for all pronouns",
      "Memorize common past tense verbs",
      "Form simple past tense sentences",
      "Understand suffixes for each person"
    ],
    objectivesAr: [
      "فهم صيغة الماضي للفعل الثلاثي",
      "تصريف الأفعال مع جميع الضمائر",
      "استخدام الماضي في الجمل",
      "ممارسة الماضي في السياقات"
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
          titleAr: "تصريف الفعل الماضي",
          titleFr: "Conjugaison au passé",
          content: "The past tense adds SUFFIXES to show who did the action:\n\nكَتَبَ (kataba) = he wrote\nكَتَبَتْ (katabat) = she wrote\nكَتَبْتُ (katabtu) = I wrote\nكَتَبْتَ (katabta) = you wrote (m)\nكَتَبْتِ (katabti) = you wrote (f)\nكَتَبْنَا (katabnā) = we wrote\nكَتَبُوا (katabū) = they wrote (m)",
          contentAr: "الفعل الماضي يضيف لواحق لإظهار من قام بالفعل:\n\nكَتَبَ (kataba) = هو كتب\nكَتَبَتْ (katabat) = هي كتبت\nكَتَبْتُ (katabtu) = أنا كتبت\nكَتَبْتَ (katabta) = أنت كتبت (م)\nكَتَبْتِ (katabti) = أنتِ كتبتِ (ن)\nكَتَبْنَا (katabnā) = نحن كتبنا\nكَتَبُوا (katabū) = هم كتبوا (م)",
          contentFr: "Le passé ajoute des SUFFIXES pour montrer qui a fait l'action :\n\nكَتَبَ (kataba) = il a écrit\nكَتَبَتْ (katabat) = elle a écrit\nكَتَبْتُ (katabtu) = j'ai écrit\nكَتَبْتَ (katabta) = tu as écrit (m)\nكَتَبْتِ (katabti) = tu as écrit (f)\nكَتَبْنَا (katabnā) = nous avons écrit\nكَتَبُوا (katabū) = ils ont écrit (m)"
        },
        {
          title: "Common Past Tense Verbs",
          titleAr: "الأفعال الشائعة في الماضي",
          titleFr: "Verbes au passé courants",
          content: "ذَهَبَ (dhahaba) = he went\nأَكَلَ (akala) = he ate\nشَرِبَ (shariba) = he drank\nجَلَسَ (jalasa) = he sat\nفَتَحَ (fataḥa) = he opened\nأَغْلَقَ (aghlaqa) = he closed\nعَمِلَ ('amila) = he worked",
          contentAr: "ذَهَبَ (dhahaba) = ذهب\nأَكَلَ (akala) = أكل\nشَرِبَ (shariba) = شرب\nجَلَسَ (jalasa) = جلس\nفَتَحَ (fataḥa) = فتح\nأَغْلَقَ (aghlaqa) = أغلق\nعَمِلَ ('amila) = عمل",
          contentFr: "ذَهَبَ (dhahaba) = aller (il est allé)\nأَكَلَ (akala) = manger (il a mangé)\nشَرِبَ (shariba) = boire (il a bu)\nجَلَسَ (jalasa) = s'asseoir (il s'est assis)\nفَتَحَ (fataḥa) = ouvrir (il a ouvert)\nأَغْلَقَ (aghlaqa) = fermer (il a fermé)\nعَمِلَ ('amila) = travailler (il a travaillé)"
        }
      ],
      vocabulary: [
        { arabic: "كَتَبْتُ", transliteration: "katabtu", meaning: "I wrote", meaningAr: "كتبت", meaningFr: "j'ai écrit" },
        { arabic: "ذَهَبَ", transliteration: "dhahaba", meaning: "he went", meaningAr: "ذهب", meaningFr: "il est allé" },
        { arabic: "أَكَلَتْ", transliteration: "akalat", meaning: "she ate", meaningAr: "أكلت", meaningFr: "elle a mangé" },
        { arabic: "شَرِبْنَا", transliteration: "sharibnā", meaning: "we drank", meaningAr: "شربنا", meaningFr: "nous avons bu" },
        { arabic: "دَرَسُوا", transliteration: "darasū", meaning: "they studied", meaningAr: "درسوا", meaningFr: "ils ont étudié" }
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
    descriptionAr: "تعلم تصريف أفعال المضارع",
    descriptionFr: "Apprenez la conjugaison au présent",
    objectives: [
      "Conjugate present tense for all pronouns",
      "Understand prefix + suffix patterns",
      "Use present tense in sentences",
      "Express ongoing actions"
    ],
    objectivesAr: [
      "فهم صيغة المضارع",
      "تصريف الأفعال مع جميع الضمائر",
      "استخدام المضارع في الجمل",
      "التمييز بين الماضي والمضارع"
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
          titleAr: "تكوين المضارع",
          titleFr: "Formation du présent",
          content: "Present tense uses PREFIXES (and sometimes suffixes):\n\nيَكْتُبُ (yaktub) = he writes (prefix يـ)\nتَكْتُبُ (taktub) = she writes (prefix تـ)\nأَكْتُبُ (aktub) = I write (prefix أَ)\nتَكْتُبُ (taktub) = you write-m (prefix تـ)\nتَكْتُبِينَ (taktubīn) = you write-f (prefix تـ + suffix ين)\nنَكْتُبُ (naktub) = we write (prefix نـ)",
          contentAr: "المضارع يستخدم البادئات (وأحيانًا اللواحق):\n\nيَكْتُبُ (yaktub) = هو يكتب\nتَكْتُبُ (taktub) = هي تكتب\nأَكْتُبُ (aktub) = أنا أكتب\nتَكْتُبُ (taktub) = أنت تكتب (م)\nتَكْتُبِينَ (taktubīn) = أنتِ تكتبين (ن)\nنَكْتُبُ (naktub) = نحن نكتب",
          contentFr: "Le présent utilise des PRÉFIXES (et parfois des suffixes) :\n\nيَكْتُبُ (yaktub) = il écrit (préfixe يـ)\nتَكْتُبُ (taktub) = elle écrit (préfixe تـ)\nأَكْتُبُ (aktub) = j'écris (préfixe أَ)\nتَكْتُبُ (taktub) = tu écris (m) (préfixe تـ)\nتَكْتُبِينَ (taktubīn) = tu écris (f) (préfixe تـ + suffixe ين)\nنَكْتُبُ (naktub) = nous écrivons (préfixe نـ)"
        },
        {
          title: "Present Tense Pattern",
          titleAr: "نمط المضارع",
          titleFr: "Modèle du présent",
          content: "The pattern is:\nأَ + root = I\nتَ + root = you (m) / she\nيَ + root = he\nنَ + root = we\n\nAdd ـُونَ for 'they' masculine\nAdd ـْنَ for 'they' feminine",
          contentAr: "النمط هو:\nأَ + الجذر = أنا\nتَ + الجذر = أنت (م)/هي\nيَ + الجذر = هو\nنَ + الجذر = نحن\n\nأضف ـُونَ لـ 'هم' (مذكر)\nأضف ـْنَ لـ 'هن' (مؤنث)",
          contentFr: "Le modèle est :\nأَ + racine = je\nتَ + racine = tu (m) / elle\nيَ + racine = il\nنَ + racine = nous\n\nAjoutez ـُونَ pour 'ils' (masculin)\nAjoutez ـْنَ pour 'elles' (féminin)"
        }
      ],
      vocabulary: [
        { arabic: "أَكْتُبُ", transliteration: "aktubu", meaning: "I write", meaningAr: "أكتب", meaningFr: "j'écris" },
        { arabic: "تَذْهَبُ", transliteration: "tadhhabu", meaning: "you go / she goes", meaningAr: "تذهب", meaningFr: "tu vas / elle va" },
        { arabic: "يَأْكُلُ", transliteration: "ya'kulu", meaning: "he eats", meaningAr: "يأكل", meaningFr: "il mange" },
        { arabic: "نَشْرَبُ", transliteration: "nashrabu", meaning: "we drink", meaningAr: "نشرب", meaningFr: "nous buvons" },
        { arabic: "يَعْمَلُونَ", transliteration: "ya'malūna", meaning: "they work", meaningAr: "يعملون", meaningFr: "ils travaillent" }
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
    descriptionAr: "ممارسة الأفعال الأكثر استخداماً في العربية",
    descriptionFr: "Pratiquez les verbes arabes les plus fréquemment utilisés",
    objectives: [
      "Master 20 most common Arabic verbs",
      "Use verbs in both tenses",
      "Build practical sentences",
      "Develop verb vocabulary"
    ],
    objectivesAr: [
      "فهم الأفعال الشائعة جداً",
      "تصريف الأفعال الشائعة",
      "استخدام الأفعال في السياقات الحقيقية",
      "بناء جمل باستخدام الأفعال الشائعة"
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
          titleAr: "أفعال الحركة",
          titleFr: "Verbes de mouvement",
          content: "ذَهَبَ / يَذْهَبُ (dhahaba/yadhhabu) = to go\nجَاءَ / يَجِيءُ (jā'a/yajī'u) = to come\nخَرَجَ / يَخْرُجُ (kharaja/yakhruju) = to exit\nدَخَلَ / يَدْخُلُ (dakhala/yadkhulu) = to enter\nرَجَعَ / يَرْجِعُ (raja'a/yarji'u) = to return",
          contentAr: "ذَهَبَ / يَذْهَبُ = ذهب/يذهب\nجَاءَ / يَجِيءُ = جاء/يجيء\nخَرَجَ / يَخْرُجُ = خرج/يخرج\nدَخَلَ / يَدْخُلُ = دخل/يدخل\nرَجَعَ / يَرْجِعُ = رجع/يرجع",
          contentFr: "ذَهَبَ / يَذْهَبُ (dhahaba/yadhhabu) = aller\nجَاءَ / يَجِيءُ (jā'a/yajī'u) = venir\nخَرَجَ / يَخْرُجُ (kharaja/yakhruju) = sortir\nدَخَلَ / يَدْخُلُ (dakhala/yadkhulu) = entrer\nرَجَعَ / يَرْجِعُ (raja'a/yarji'u) = retourner"
        },
        {
          title: "Daily Action Verbs",
          titleAr: "أفعال الحياة اليومية",
          titleFr: "Verbes d'action quotidiens",
          content: "أَكَلَ / يَأْكُلُ (akala/ya'kulu) = to eat\nشَرِبَ / يَشْرَبُ (shariba/yashrabu) = to drink\nنَامَ / يَنَامُ (nāma/yanāmu) = to sleep\nقَامَ / يَقُومُ (qāma/yaqūmu) = to stand/get up\nجَلَسَ / يَجْلِسُ (jalasa/yajlisu) = to sit",
          contentAr: "أَكَلَ / يَأْكُلُ = أكل/يأكل\nشَرِبَ / يَشْرَبُ = شرب/يشرب\nنَامَ / يَنَامُ = نام/ينام\nقَامَ / يَقُومُ = قام/يقوم\nجَلَسَ / يَجْلِسُ = جلس/يجلس",
          contentFr: "أَكَلَ / يَأْكُلُ (akala/ya'kulu) = manger\nشَرِبَ / يَشْرَبُ (shariba/yashrabu) = boire\nنَامَ / يَنَامُ (nāma/yanāmu) = dormir\nقَامَ / يَقُومُ (qāma/yaqūmu) = se lever/se tenir debout\nجَلَسَ / يَجْلِسُ (jalasa/yajlisu) = s'asseoir"
        },
        {
          title: "Communication Verbs",
          titleAr: "أفعال التواصل",
          titleFr: "Verbes de communication",
          content: "قَالَ / يَقُولُ (qāla/yaqūlu) = to say\nسَأَلَ / يَسْأَلُ (sa'ala/yas'alu) = to ask\nأَجَابَ / يُجِيبُ (ajāba/yujību) = to answer\nتَكَلَّمَ / يَتَكَلَّمُ (takallama/yatakallamu) = to speak\nفَهِمَ / يَفْهَمُ (fahima/yafhamu) = to understand",
          contentAr: "قَالَ / يَقُولُ = قال/يقول\nسَأَلَ / يَسْأَلُ = سأل/يسأل\nأَجَابَ / يُجِيبُ = أجاب/يجيب\nتَكَلَّمَ / يَتَكَلَّمُ = تكلم/يتكلم\nفَهِمَ / يَفْهَمُ = فهم/يفهم",
          contentFr: "قَالَ / يَقُولُ (qāla/yaqūlu) = dire\nسَأَلَ / يَسْأَلُ (sa'ala/yas'alu) = demander\nأَجَابَ / يُجِيبُ (ajāba/yujību) = répondre\nتَكَلَّمَ / يَتَكَلَّمُ (takallama/yatakallamu) = parler\nفَهِمَ / يَفْهَمُ (fahima/yafhamu) = comprendre"
        }
      ],
      vocabulary: [
        { arabic: "ذَهَبَ / يَذْهَبُ", transliteration: "dhahaba / yadhhabu", meaning: "to go", meaningAr: "ذهب/يذهب", meaningFr: "aller" },
        { arabic: "جَاءَ / يَجِيءُ", transliteration: "jā'a / yajī'u", meaning: "to come", meaningAr: "جاء/يجيء", meaningFr: "venir" },
        { arabic: "أَكَلَ / يَأْكُلُ", transliteration: "akala / ya'kulu", meaning: "to eat", meaningAr: "أكل/يأكل", meaningFr: "manger" },
        { arabic: "قَالَ / يَقُولُ", transliteration: "qāla / yaqūlu", meaning: "to say", meaningAr: "قال/يقول", meaningFr: "dire" },
        { arabic: "فَهِمَ / يَفْهَمُ", transliteration: "fahima / yafhamu", meaning: "to understand", meaningAr: "فهم/يفهم", meaningFr: "comprendre" }
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
    descriptionAr: "تعلم نفي الأفعال في العربية",
    descriptionFr: "Apprenez à nier les verbes en arabe",
    objectives: [
      "Negate past tense with مَا",
      "Negate present tense with لَا",
      "Use لَمْ for emphatic past negation",
      "Form negative sentences correctly"
    ],
    objectivesAr: [
      "فهم طرق نفي الأفعال",
      "استخدام الجزيئات السالبة بشكل صحيح",
      "تكوين الجمل السالبة",
      "ممارسة النفي في السياقات"
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
          titleAr: "نفي الماضي: مَا",
          titleFr: "Nier le passé : مَا",
          content: "Place مَا (mā) before the past tense verb:\n\nذَهَبَ (dhahaba) = he went\nمَا ذَهَبَ (mā dhahaba) = he did not go\n\nكَتَبْتُ = I wrote\nمَا كَتَبْتُ = I did not write",
          contentAr: "ضع مَا (mā) قبل فعل الماضي:\n\nذَهَبَ (dhahaba) = ذهب\nمَا ذَهَبَ (mā dhahaba) = ما ذهب\n\nكَتَبْتُ = كتبت\nمَا كَتَبْتُ = ما كتبت",
          contentFr: "Placez مَا (mā) avant le verbe au passé :\n\nذَهَبَ (dhahaba) = il est allé\nمَا ذَهَبَ (mā dhahaba) = il n'est pas allé\n\nكَتَبْتُ = j'ai écrit\nمَا كَتَبْتُ = je n'ai pas écrit"
        },
        {
          title: "Negating the Present: لَا",
          titleAr: "نفي المضارع: لَا",
          titleFr: "Nier le présent : لَا",
          content: "Place لَا (lā) before the present tense verb:\n\nيَذْهَبُ (yadhhabu) = he goes\nلَا يَذْهَبُ (lā yadhhabu) = he does not go\n\nأَفْهَمُ = I understand\nلَا أَفْهَمُ = I do not understand",
          contentAr: "ضع لَا (lā) قبل فعل المضارع:\n\nيَذْهَبُ (yadhhabu) = يذهب\nلَا يَذْهَبُ (lā yadhhabu) = لا يذهب\n\nأَفْهَمُ = أفهم\nلَا أَفْهَمُ = لا أفهم",
          contentFr: "Placez لَا (lā) avant le verbe au présent :\n\nيَذْهَبُ (yadhhabu) = il va\nلَا يَذْهَبُ (lā yadhhabu) = il ne va pas\n\nأَفْهَمُ = je comprends\nلَا أَفْهَمُ = je ne comprends pas"
        },
        {
          title: "Emphatic Past Negation: لَمْ",
          titleAr: "النفي القوي في الماضي: لَمْ",
          titleFr: "Négation emphase du passé : لَمْ",
          content: "لَمْ + present tense form (with sukūn) = emphatic 'did not':\n\nلَمْ يَذْهَبْ (lam yadhab) = he did NOT go\nلَمْ أَفْهَمْ (lam afham) = I did NOT understand\n\nThis is more emphatic than مَا and very common in formal Arabic.",
          contentAr: "لَمْ + صيغة المضارع (مع السكون) = النفي القوي:\n\nلَمْ يَذْهَبْ (lam yadhab) = لم يذهب (تأكيد)\nلَمْ أَفْهَمْ (lam afham) = لم أفهم (تأكيد)\n\nهذا أقوى من مَا وشائع جداً في العربية الفصحى.",
          contentFr: "لَمْ + forme du présent (avec sukūn) = 'n'a pas' (emphatique) :\n\nلَمْ يَذْهَبْ (lam yadhab) = il N'EST PAS allé\nلَمْ أَفْهَمْ (lam afham) = je N'AI PAS compris\n\nC'est plus emphatique que مَا et très courant en arabe formel."
        }
      ],
      vocabulary: [
        { arabic: "مَا", transliteration: "mā", meaning: "not (past)", meaningAr: "ما (نفي الماضي)", meaningFr: "pas (passé)" },
        { arabic: "لَا", transliteration: "lā", meaning: "not (present)", meaningAr: "لا (نفي المضارع)", meaningFr: "pas (présent)" },
        { arabic: "لَمْ", transliteration: "lam", meaning: "did not (emphatic)", meaningAr: "لم (نفي مؤكد)", meaningFr: "n'a pas (emphatique)" },
        { arabic: "لَنْ", transliteration: "lan", meaning: "will not", meaningAr: "لن (نفي المستقبل)", meaningFr: "ne sera pas" },
        { arabic: "لَيْسَ", transliteration: "laysa", meaning: "is not", meaningAr: "ليس", meaningFr: "n'est pas" }
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
    descriptionAr: "بناء جمل تبدأ بالأسماء",
    descriptionFr: "Construisez des phrases commençant par des noms",
    objectives: [
      "Understand nominal sentence structure",
      "Form 'X is Y' sentences",
      "Use pronouns as copulas",
      "Describe people and things"
    ],
    objectivesAr: [
      "فهم بنية الجملة الاسمية",
      "تحديد المبتدأ والخبر",
      "بناء جمل اسمية صحيحة",
      "ممارسة الجمل الاسمية"
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
          titleAr: "ما هي الجملة الاسمية؟",
          titleFr: "Qu'est-ce qu'une phrase nominale ?",
          content: "A nominal sentence (جُمْلَة اِسْمِيَّة) starts with a NOUN and describes a state of being. Arabic does not use 'is' in the present tense!\n\nالبَيْتُ كَبِيرٌ (al-baytu kabīrun) = The house (is) big\nالطَّالِبُ ذَكِيٌّ (aṭ-ṭālibu dhakiyyun) = The student (is) smart",
          contentAr: "الجملة الاسمية تبدأ باسم وتصف حالة الكون. العربية لا تستخدم 'يكون' في المضارع!\n\nالبَيْتُ كَبِيرٌ = البيت كبير\nالطَّالِبُ ذَكِيٌّ = الطالب ذكي",
          contentFr: "Une phrase nominale (جُمْلَة اِسْمِيَّة) commence par un NOM et décrit un état d'être. L'arabe n'utilise pas 'être' au présent !\n\nالبَيْتُ كَبِيرٌ (al-baytu kabīrun) = La maison (est) grande\nالطَّالِبُ ذَكِيٌّ (aṭ-ṭālibu dhakiyyun) = L'étudiant (est) intelligent"
        },
        {
          title: "Subject and Predicate",
          titleAr: "المبتدأ والخبر",
          titleFr: "Sujet et prédicat",
          content: "Every nominal sentence has:\n• مُبْتَدَأ (mubtada') = Subject (what we're talking about)\n• خَبَر (khabar) = Predicate (what we're saying about it)\n\nالوَلَدُ (subject) طَوِيلٌ (predicate) = The boy is tall",
          contentAr: "كل جملة اسمية لديها:\n• مُبْتَدَأ (mubtada') = المبتدأ (ما نتحدث عنه)\n• خَبَر (khabar) = الخبر (ما نقوله عنه)\n\nالوَلَدُ (مبتدأ) طَوِيلٌ (خبر) = الولد طويل",
          contentFr: "Chaque phrase nominale a :\n• مُبْتَدَأ (mubtada') = Sujet (ce dont nous parlons)\n• خَبَر (khabar) = Prédicat (ce que nous en disons)\n\nالوَلَدُ (sujet) طَوِيلٌ (prédicat) = Le garçon est grand"
        },
        {
          title: "Using Pronouns",
          titleAr: "استخدام الضمائر",
          titleFr: "Utiliser les pronoms",
          content: "For emphasis or clarity, you can add a pronoun:\n\nالبَيْتُ هُوَ كَبِيرٌ = The house, it is big\nهِيَ مُعَلِّمَةٌ = She is a teacher\nأَنَا طَالِبٌ = I am a student",
          contentAr: "للتأكيد أو الوضوح، يمكنك إضافة ضمير:\n\nالبَيْتُ هُوَ كَبِيرٌ = البيت، إنه كبير\nهِيَ مُعَلِّمَةٌ = هي معلمة\nأَنَا طَالِبٌ = أنا طالب",
          contentFr: "Pour l'emphase ou la clarté, vous pouvez ajouter un pronom :\n\nالبَيْتُ هُوَ كَبِيرٌ = La maison, elle est grande\nهِيَ مُعَلِّمَةٌ = Elle est une professeur\nأَنَا طَالِبٌ = Je suis un étudiant"
        }
      ],
      vocabulary: [
        { arabic: "الطَّالِبُ ذَكِيٌّ", transliteration: "aṭ-ṭālibu dhakiyyun", meaning: "The student is smart", meaningAr: "الطالب ذكي", meaningFr: "L'étudiant est intelligent" },
        { arabic: "السَّمَاءُ زَرْقَاءُ", transliteration: "as-samā'u zarqā'u", meaning: "The sky is blue", meaningAr: "السماء زرقاء", meaningFr: "Le ciel est bleu" },
        { arabic: "أَنَا سَعِيدٌ", transliteration: "anā sa'īdun", meaning: "I am happy", meaningAr: "أنا سعيد", meaningFr: "Je suis heureux" },
        { arabic: "هِيَ طَبِيبَةٌ", transliteration: "hiya ṭabībatun", meaning: "She is a doctor", meaningAr: "هي طبيبة", meaningFr: "Elle est un docteur" }
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
    descriptionAr: "بناء جمل تبدأ بالأفعال",
    descriptionFr: "Construisez des phrases commençant par des verbes",
    objectives: [
      "Understand verbal sentence structure",
      "Use VSO word order",
      "Add objects to sentences",
      "Compare verbal and nominal sentences"
    ],
    objectivesAr: [
      "فهم بنية الجملة الفعلية",
      "تحديد الفعل والفاعل والمفعول",
      "بناء جمل فعلية صحيحة",
      "ممارسة الجمل الفعلية"
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
          titleAr: "ما هي الجملة الفعلية؟",
          titleFr: "Qu'est-ce qu'une phrase verbale ?",
          content: "A verbal sentence (جُمْلَة فِعْلِيَّة) starts with a VERB. The typical order is:\nVerb - Subject - Object (VSO)\n\nكَتَبَ الطَّالِبُ الدَّرْسَ\n(kataba aṭ-ṭālibu ad-darsa)\n= Wrote the-student the-lesson\n= The student wrote the lesson",
          contentAr: "الجملة الفعلية تبدأ بالفعل. الترتيب النموذجي هو:\nفعل - فاعل - مفعول\n\nكَتَبَ الطَّالِبُ الدَّرْسَ\n= كتب الطالب الدرس\n= الطالب كتب الدرس",
          contentFr: "Une phrase verbale (جُمْلَة فِعْلِيَّة) commence par un VERBE. L'ordre typique est :\nVerbe - Sujet - Objet (VSO)\n\nكَتَبَ الطَّالِبُ الدَّرْسَ\n(kataba aṭ-ṭālibu ad-darsa)\n= A écrit l'étudiant la leçon\n= L'étudiant a écrit la leçon"
        },
        {
          title: "VSO vs SVO",
          titleAr: "ترتيب الكلمات: فعل-فاعل-مفعول أم اسم-فعل-مفعول؟",
          titleFr: "VSO vs SVO",
          content: "Arabic prefers VSO in formal writing:\nذَهَبَ الوَلَدُ = went the-boy = The boy went\n\nBut SVO is also correct:\nالوَلَدُ ذَهَبَ = the-boy went = The boy went\n\nSVO is more common in spoken Arabic.",
          contentAr: "العربية تفضل ترتيب الفعل-الفاعل-المفعول في الكتابة الرسمية:\nذَهَبَ الوَلَدُ = ذهب الولد\n\nلكن الترتيب الآخر أيضًا صحيح:\nالوَلَدُ ذَهَبَ = الولد ذهب\n\nالترتيب الثاني أكثر شيوعًا في العربية المنطوقة.",
          contentFr: "L'arabe préfère VSO dans l'écriture formelle :\nذَهَبَ الوَلَدُ = est allé le garçon = Le garçon est allé\n\nMais SVO est aussi correct :\nالوَلَدُ ذَهَبَ = le garçon est allé = Le garçon est allé\n\nL'ordre SVO est plus courant en arabe parlé."
        },
        {
          title: "Adding Objects",
          titleAr: "إضافة المفاعيل",
          titleFr: "Ajouter des objets",
          content: "Direct objects come after the subject:\n\nقَرَأَ الطَّالِبُ الكِتَابَ\nV: قَرَأَ (read)\nS: الطَّالِبُ (the student)\nO: الكِتَابَ (the book)\n= The student read the book",
          contentAr: "المفاعيل المباشرة تأتي بعد الفاعل:\n\nقَرَأَ الطَّالِبُ الكِتَابَ\nف: قَرَأَ (قرأ)\nفا: الطَّالِبُ (الطالب)\nمف: الكِتَابَ (الكتاب)\n= الطالب قرأ الكتاب",
          contentFr: "Les objets directs viennent après le sujet :\n\nقَرَأَ الطَّالِبُ الكِتَابَ\nV: قَرَأَ (a lu)\nS: الطَّالِبُ (l'étudiant)\nO: الكِتَابَ (le livre)\n= L'étudiant a lu le livre"
        }
      ],
      vocabulary: [
        { arabic: "كَتَبَ الطَّالِبُ", transliteration: "kataba aṭ-ṭālibu", meaning: "The student wrote", meaningAr: "كتب الطالب", meaningFr: "L'étudiant a écrit" },
        { arabic: "أَكَلَ الوَلَدُ التُّفَّاحَةَ", transliteration: "akala al-waladu at-tuffāḥata", meaning: "The boy ate the apple", meaningAr: "أكل الولد التفاحة", meaningFr: "Le garçon a mangé la pomme" },
        { arabic: "شَرِبَتِ البِنْتُ الحَلِيبَ", transliteration: "sharibat al-bintu al-ḥalība", meaning: "The girl drank the milk", meaningAr: "شربت البنت الحليب", meaningFr: "La fille a bu le lait" }
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
    descriptionAr: "صياغة أنواع مختلفة من الأسئلة",
    descriptionFr: "Formez différents types de questions",
    objectives: [
      "Ask yes/no questions with هَلْ",
      "Use question words in sentences",
      "Answer questions appropriately",
      "Practice question intonation"
    ],
    objectivesAr: [
      "فهم أنواع الأسئلة المختلفة",
      "استخدام أدوات الاستفهام",
      "صياغة الأسئلة بشكل صحيح",
      "ممارسة الأسئلة في الحوارات"
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
          titleAr: "الأسئلة نعم/لا",
          titleFr: "Questions oui/non",
          content: "Add هَلْ (hal) or أَ (a) to the beginning:\n\nStatement: أَنْتَ طَالِبٌ = You are a student\nQuestion: هَلْ أَنْتَ طَالِبٌ؟ = Are you a student?\n\nStatement: تُحِبُّ القَهْوَةَ = You like coffee\nQuestion: أَتُحِبُّ القَهْوَةَ؟ = Do you like coffee?",
          contentAr: "أضف هَلْ (hal) أو أَ (a) في البداية:\n\nجملة: أَنْتَ طَالِبٌ = أنت طالب\nسؤال: هَلْ أَنْتَ طَالِبٌ؟ = هل أنت طالب؟\n\nجملة: تُحِبُّ القَهْوَةَ = تحب القهوة\nسؤال: أَتُحِبُّ القَهْوَةَ؟ = أتحب القهوة؟",
          contentFr: "Ajoutez هَلْ (hal) ou أَ (a) au début :\n\nDéclaration : أَنْتَ طَالِبٌ = Tu es un étudiant\nQuestion : هَلْ أَنْتَ طَالِبٌ؟ = Es-tu un étudiant ?\n\nDéclaration : تُحِبُّ القَهْوَةَ = Tu aimes le café\nQuestion : أَتُحِبُّ القَهْوَةَ؟ = Aimes-tu le café ?"
        },
        {
          title: "Information Questions",
          titleAr: "الأسئلة المعلوماتية",
          titleFr: "Questions d'information",
          content: "Use question words at the beginning:\n\nمَنْ هَذَا؟ = Who is this?\nمَا هَذَا؟ = What is this?\nأَيْنَ المَدْرَسَةُ؟ = Where is the school?\nمَتَى السَّفَرُ؟ = When is the trip?\nلِمَاذَا تَدْرُسُ؟ = Why do you study?",
          contentAr: "استخدم أدوات الاستفهام في البداية:\n\nمَنْ هَذَا؟ = من هذا؟\nمَا هَذَا؟ = ما هذا؟\nأَيْنَ المَدْرَسَةُ؟ = أين المدرسة؟\nمَتَى السَّفَرُ؟ = متى السفر؟\nلِمَاذَا تَدْرُسُ؟ = لماذا تدرس؟",
          contentFr: "Utilisez des mots interrogatifs au début :\n\nمَنْ هَذَا؟ = Qui est-ce ?\nمَا هَذَا؟ = Qu'est-ce que c'est ?\nأَيْنَ المَدْرَسَةُ؟ = Où est l'école ?\nمَتَى السَّفَرُ؟ = Quand est le voyage ?\nلِمَاذَا تَدْرُسُ؟ = Pourquoi étudies-tu ?"
        },
        {
          title: "Common Answers",
          titleAr: "الإجابات الشائعة",
          titleFr: "Réponses courantes",
          content: "نَعَمْ (na'am) = Yes\nلَا (lā) = No\nلَا أَعْرِفُ (lā a'rifu) = I don't know\nرُبَّمَا (rubbamā) = Maybe\nبِالتَّأْكِيد (bit-ta'kīd) = Certainly",
          contentAr: "نَعَمْ (na'am) = نعم\nلَا (lā) = لا\nلَا أَعْرِفُ (lā a'rifu) = لا أعرف\nرُبَّمَا (rubbamā) = ربما\nبِالتَّأْكِيد (bit-ta'kīd) = بالتأكيد",
          contentFr: "نَعَمْ (na'am) = Oui\nلَا (lā) = Non\nلَا أَعْرِفُ (lā a'rifu) = Je ne sais pas\nرُبَّمَا (rubbamā) = Peut-être\nبِالتَّأْكِيد (bit-ta'kīd) = Certainement"
        }
      ],
      vocabulary: [
        { arabic: "هَلْ تَتَكَلَّمُ العَرَبِيَّةَ؟", transliteration: "hal tatakallamu al-'arabiyyata?", meaning: "Do you speak Arabic?", meaningAr: "هل تتكلم العربية؟", meaningFr: "Parlez-vous l'arabe ?" },
        { arabic: "أَيْنَ تَسْكُنُ؟", transliteration: "ayna taskunu?", meaning: "Where do you live?", meaningAr: "أين تسكن؟", meaningFr: "Où habitez-vous ?" },
        { arabic: "كَمْ عُمْرُكَ؟", transliteration: "kam 'umruka?", meaning: "How old are you?", meaningAr: "كم عمرك؟", meaningFr: "Quel âge avez-vous ?" },
        { arabic: "نَعَمْ", transliteration: "na'am", meaning: "Yes", meaningAr: "نعم", meaningFr: "Oui" },
        { arabic: "لَا", transliteration: "lā", meaning: "No", meaningAr: "لا", meaningFr: "Non" }
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
    descriptionAr: "تعلم حروف الجر والتعبير عن الموقع",
    descriptionFr: "Apprenez les prépositions et exprimez la localisation",
    objectives: [
      "Use common Arabic prepositions",
      "Describe locations and directions",
      "Form prepositional phrases",
      "Combine prepositions with pronouns"
    ],
    objectivesAr: [
      "التعرف على حروف الجر الشائعة",
      "فهم وظائف حروف الجر",
      "التعبير عن الموقع والمكان",
      "استخدام حروف الجر في الجمل"
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
          titleAr: "حروف الجر الشائعة",
          titleFr: "Prépositions courantes",
          content: "فِي (fī) = in\nعَلَى ('alā) = on\nمِنْ (min) = from\nإِلَى (ilā) = to\nمَعَ (ma'a) = with\nبِـ (bi-) = with/by\nلِـ (li-) = for/to",
          contentAr: "فِي (fī) = في\nعَلَى ('alā) = على\nمِنْ (min) = من\nإِلَى (ilā) = إلى\nمَعَ (ma'a) = معّ\nبِـ (bi-) = بـ\nلِـ (li-) = لـ",
          contentFr: "فِي (fī) = dans\nعَلَى ('alā) = sur\nمِنْ (min) = de\nإِلَى (ilā) = à/vers\nمَعَ (ma'a) = avec\nبِـ (bi-) = avec/par\nلِـ (li-) = pour/à"
        },
        {
          title: "Location Words",
          titleAr: "كلمات الموقع",
          titleFr: "Mots de lieu",
          content: "أَمَامَ (amāma) = in front of\nوَرَاءَ (warā'a) = behind\nفَوْقَ (fawqa) = above\nتَحْتَ (taḥta) = under\nبَيْنَ (bayna) = between\nبِجَانِبِ (bi-jānibi) = next to\nقَرِيبٌ مِنْ (qarībun min) = near",
          contentAr: "أَمَامَ (amāma) = أمام\nوَرَاءَ (warā'a) = وراء\nفَوْقَ (fawqa) = فوق\nتَحْتَ (taḥta) = تحت\nبَيْنَ (bayna) = بين\nبِجَانِبِ (bi-jānibi) = بجانب\nقَرِيبٌ مِنْ (qarībun min) = قريب من",
          contentFr: "أَمَامَ (amāma) = devant\nوَرَاءَ (warā'a) = derrière\nفَوْقَ (fawqa) = au-dessus\nتَحْتَ (taḥta) = sous\nبَيْنَ (bayna) = entre\nبِجَانِبِ (bi-jānibi) = à côté de\nقَرِيبٌ مِنْ (qarībun min) = près de"
        },
        {
          title: "Prepositions + Pronouns",
          titleAr: "حروف الجر + الضمائر",
          titleFr: "Prépositions + pronoms",
          content: "Pronouns attach to prepositions:\nمَعِي (ma'ī) = with me\nمَعَكَ (ma'aka) = with you (m)\nمَعَهُ (ma'ahu) = with him\nمِنْهَا (minhā) = from her\nإِلَيْهِمْ (ilayhim) = to them",
          contentAr: "الضمائر تتصل بحروف الجر:\nمَعِي (ma'ī) = معي\nمَعَكَ (ma'aka) = معك (م)\nمَعَهُ (ma'ahu) = معه\nمِنْهَا (minhā) = منها\nإِلَيْهِمْ (ilayhim) = إليهم",
          contentFr: "Les pronoms s'attachent aux prépositions :\nمَعِي (ma'ī) = avec moi\nمَعَكَ (ma'aka) = avec toi (m)\nمَعَهُ (ma'ahu) = avec lui\nمِنْهَا (minhā) = d'elle\nإِلَيْهِمْ (ilayhim) = vers eux"
        }
      ],
      vocabulary: [
        { arabic: "فِي البَيْت", transliteration: "fī al-bayt", meaning: "in the house", meaningAr: "في البيت", meaningFr: "dans la maison" },
        { arabic: "عَلَى الطَّاوِلَة", transliteration: "'alā aṭ-ṭāwila", meaning: "on the table", meaningAr: "على الطاولة", meaningFr: "sur la table" },
        { arabic: "مِنَ المَدْرَسَة", transliteration: "min al-madrasa", meaning: "from the school", meaningAr: "من المدرسة", meaningFr: "de l'école" },
        { arabic: "إِلَى السُّوق", transliteration: "ilā as-sūq", meaning: "to the market", meaningAr: "إلى السوق", meaningFr: "au marché" },
        { arabic: "مَعِي", transliteration: "ma'ī", meaning: "with me", meaningAr: "معي", meaningFr: "avec moi" }
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
    descriptionAr: "التحدث عن الوقت والجداول والروتين",
    descriptionFr: "Parlez du temps, des horaires et des routines",
    objectives: [
      "Tell time in Arabic",
      "Discuss daily routines",
      "Use time expressions",
      "Talk about schedules"
    ],
    objectivesAr: [
      "فهم أسماء الوقت والزمن",
      "التعبير عن الأوقات والساعات",
      "وصف الروتين اليومي",
      "استخدام الزمن في السياقات"
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
          titleAr: "قول الوقت",
          titleFr: "Dire l'heure",
          content: "السَّاعَةُ كَمْ؟ (as-sā'atu kam?) = What time is it?\n\nالسَّاعَةُ الثَّانِيَة = It's 2 o'clock\nالسَّاعَةُ الثَّالِثَة وَالنِّصْف = It's 3:30\nالسَّاعَةُ الرَّابِعَة وَالرُّبْع = It's 4:15\nالسَّاعَةُ الخَامِسَة إِلَّا رُبْعًا = It's 4:45 (5 minus quarter)",
          contentAr: "السَّاعَةُ كَمْ؟ = الساعة كم؟\n\nالسَّاعَةُ الثَّانِيَة = الساعة الثانية\nالسَّاعَةُ الثَّالِثَة وَالنِّصْف = الساعة الثالثة والنصف\nالسَّاعَةُ الرَّابِعَة وَالرُّبْع = الساعة الرابعة والربع\nالسَّاعَةُ الخَامِسَة إِلَّا رُبْعًا = الساعة الخامسة إلا ربعاً",
          contentFr: "السَّاعَةُ كَمْ؟ (as-sā'atu kam?) = Quelle heure est-il ?\n\nالسَّاعَةُ الثَّانِيَة = Il est 2 heures\nالسَّاعَةُ الثَّالِثَة وَالنِّصْف = Il est 3 heures et demie\nالسَّاعَةُ الرَّابِعَة وَالرُّبْع = Il est 4 heures et quart\nالسَّاعَةُ الخَامِسَة إِلَّا رُبْعًا = Il est 5 heures moins le quart"
        },
        {
          title: "Time Vocabulary",
          titleAr: "مفردات الزمن",
          titleFr: "Vocabulaire du temps",
          content: "سَاعَة (sā'a) = hour/watch\nدَقِيقَة (daqīqa) = minute\nثَانِيَة (thāniya) = second\nنِصْف (niṣf) = half\nرُبْع (rub') = quarter\nصَبَاح (ṣabāḥ) = morning\nمَسَاء (masā') = evening",
          contentAr: "سَاعَة (sā'a) = ساعة\nدَقِيقَة (daqīqa) = دقيقة\nثَانِيَة (thāniya) = ثانية\nنِصْف (niṣf) = نصف\nرُبْع (rub') = ربع\nصَبَاح (ṣabāḥ) = صباح\nمَسَاء (masā') = مساء",
          contentFr: "سَاعَة (sā'a) = heure/montre\nدَقِيقَة (daqīqa) = minute\nثَانِيَة (thāniya) = seconde\nنِصْف (niṣf) = demi\nرُبْع (rub') = quart\nصَبَاح (ṣabāḥ) = matin\nمَسَاء (masā') = soir"
        },
        {
          title: "Time Expressions",
          titleAr: "تعبيرات الوقت",
          titleFr: "Expressions de temps",
          content: "الآنَ (al-āna) = now\nغَدًا (ghadan) = tomorrow\nأَمْس (ams) = yesterday\nاليَوْم (al-yawm) = today\nكُلّ يَوْم (kull yawm) = every day\nأَحْيَانًا (aḥyānan) = sometimes",
          contentAr: "الآنَ (al-āna) = الآن\nغَدًا (ghadan) = غداً\nأَمْس (ams) = أمس\nاليَوْم (al-yawm) = اليوم\nكُلّ يَوْم (kull yawm) = كل يوم\nأَحْيَانًا (aḥyānan) = أحياناً",
          contentFr: "الآنَ (al-āna) = maintenant\nغَدًا (ghadan) = demain\nأَمْس (ams) = hier\nاليَوْم (al-yawm) = aujourd'hui\nكُلّ يَوْم (kull yawm) = tous les jours\nأَحْيَانًا (aḥyānan) = parfois"
        }
      ],
      vocabulary: [
        { arabic: "السَّاعَة", transliteration: "as-sā'a", meaning: "the hour/o'clock", meaningAr: "الساعة", meaningFr: "l'heure" },
        { arabic: "صَبَاحًا", transliteration: "ṣabāḥan", meaning: "in the morning", meaningAr: "صباحاً", meaningFr: "le matin" },
        { arabic: "مَسَاءً", transliteration: "masā'an", meaning: "in the evening", meaningAr: "مساءً", meaningFr: "le soir" },
        { arabic: "غَدًا", transliteration: "ghadan", meaning: "tomorrow", meaningAr: "غداً", meaningFr: "demain" },
        { arabic: "أَمْس", transliteration: "ams", meaning: "yesterday", meaningAr: "أمس", meaningFr: "hier" }
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
    descriptionAr: "تعلم تقديم نفسك باللغة العربية",
    descriptionFr: "Apprenez à vous présenter en arabe",
    objectives: [
      "Give your name and nationality",
      "State your profession",
      "Talk about where you live",
      "Ask others about themselves"
    ],
    objectivesAr: [
      "تقديم النفس بشكل صحيح",
      "وصف نفسك وخلفيتك",
      "طرح الأسئلة الشخصية",
      "الرد على أسئلة التقديم"
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
          titleAr: "التقديم الأساسي",
          titleFr: "Introduction de base",
          content: "اِسْمِي ... (ismī ...) = My name is ...\nأَنَا مِنْ ... (anā min ...) = I am from ...\nأَنَا ... (anā ...) = I am (profession/nationality)\n\nExample:\nمَرْحَبًا! اِسْمِي أَحْمَد. أَنَا مِنْ مِصْر. أَنَا طَالِبٌ.\n= Hello! My name is Ahmed. I am from Egypt. I am a student.",
          contentAr: "اِسْمِي ... (ismī ...) = اسمي\nأَنَا مِنْ ... (anā min ...) = أنا من\nأَنَا ... (anā ...) = أنا (مهنة/جنسية)\n\nمثال:\nمَرْحَبًا! اِسْمِي أَحْمَد. أَنَا مِنْ مِصْر. أَنَا طَالِبٌ.\n= مرحباً! اسمي أحمد. أنا من مصر. أنا طالب.",
          contentFr: "اِسْمِي ... (ismī ...) = Je m'appelle ...\nأَنَا مِنْ ... (anā min ...) = Je suis de ...\nأَنَا ... (anā ...) = Je suis (profession/nationalité)\n\nExemple :\nمَرْحَبًا! اِسْمِي أَحْمَد. أَنَا مِنْ مِصْر. أَنَا طَالِبٌ.\n= Bonjour! Je m'appelle Ahmed. Je suis d'Égypte. Je suis un étudiant."
        },
        {
          title: "Asking About Others",
          titleAr: "السؤال عن الآخرين",
          titleFr: "Demander aux autres",
          content: "مَا اسْمُكَ؟ (mā ismuka?) = What is your name? (m)\nمَا اسْمُكِ؟ (mā ismuki?) = What is your name? (f)\nمِنْ أَيْنَ أَنْتَ؟ (min ayna anta?) = Where are you from? (m)\nمَا عَمَلُكَ؟ (mā 'amaluka?) = What is your work? (m)",
          contentAr: "مَا اسْمُكَ؟ (mā ismuka?) = ما اسمك؟ (م)\nمَا اسْمُكِ؟ (mā ismuki?) = ما اسمك؟ (ن)\nمِنْ أَيْنَ أَنْتَ؟ (min ayna anta?) = من أين أنت؟ (م)\nمَا عَمَلُكَ؟ (mā 'amaluka?) = ما عملك؟ (م)",
          contentFr: "مَا اسْمُكَ؟ (mā ismuka?) = Quel est ton nom ? (m)\nمَا اسْمُكِ؟ (mā ismuki?) = Quel est ton nom ? (f)\nمِنْ أَيْنَ أَنْتَ؟ (min ayna anta?) = D'où viens-tu ? (m)\nمَا عَمَلُكَ؟ (mā 'amaluka?) = Quel est ton travail ? (m)"
        },
        {
          title: "Nationalities",
          titleAr: "الجنسيات",
          titleFr: "Les nationalités",
          content: "مِصْرِي (miṣrī) = Egyptian (m)\nسُورِي (sūrī) = Syrian\nمَغْرِبِي (maghribī) = Moroccan\nأَمْرِيكِي (amrīkī) = American\nبْرِيطَانِي (brīṭānī) = British\nفَرَنْسِي (faransī) = French",
          contentAr: "مِصْرِي (miṣrī) = مصري\nسُورِي (sūrī) = سوري\nمَغْرِبِي (maghribī) = مغربي\nأَمْرِيكِي (amrīkī) = أمريكي\nبْرِيطَانِي (brīṭānī) = بريطاني\nفَرَنْسِي (faransī) = فرنسي",
          contentFr: "مِصْرِي (miṣrī) = Égyptien (m)\nسُورِي (sūrī) = Syrien\nمَغْرِبِي (maghribī) = Marocain\nأَمْرِيكِي (amrīkī) = Américain\nبْرِيطَانِي (brīṭānī) = Britannique\nفَرَنْسِي (faransī) = Français"
        }
      ],
      vocabulary: [
        { arabic: "اِسْمِي", transliteration: "ismī", meaning: "my name is", meaningAr: "اسمي", meaningFr: "je m'appelle" },
        { arabic: "أَنَا مِنْ", transliteration: "anā min", meaning: "I am from", meaningAr: "أنا من", meaningFr: "je suis de" },
        { arabic: "أَسْكُنُ فِي", transliteration: "askunu fī", meaning: "I live in", meaningAr: "أسكن في", meaningFr: "j'habite" },
        { arabic: "أَعْمَلُ", transliteration: "a'malu", meaning: "I work", meaningAr: "أعمل", meaningFr: "je travaille" },
        { arabic: "تَشَرَّفْنَا", transliteration: "tasharrafnā", meaning: "pleased to meet you", meaningAr: "تشرفنا", meaningFr: "enchanté de vous rencontrer" }
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
    descriptionAr: "تعلم مفردات المطعم والحوارات",
    descriptionFr: "Apprenez le vocabulaire et les conversations au restaurant",
    objectives: [
      "Order food and drinks",
      "Ask about the menu",
      "Request the bill",
      "Express food preferences"
    ],
    objectivesAr: [
      "فهم مفردات المطعم",
      "قراءة القائمة وطلب الطعام",
      "التحدث مع الخادم بشكل صحيح",
      "التعبير عن التفضيلات الغذائية"
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
          titleAr: "أساسيات المطعم",
          titleFr: "Bases du restaurant",
          content: "مَطْعَم (maṭ'am) = restaurant\nقَائِمَة الطَّعَام (qā'imat aṭ-ṭa'ām) = menu\nنَادِل (nādil) = waiter\nطَاوِلَة (ṭāwila) = table\nالحِسَاب (al-ḥisāb) = the bill",
          contentAr: "مَطْعَم (maṭ'am) = المطعم\nقَائِمَة الطَّعَام (qā'imat aṭ-ṭa'ām) = قائمة الطعام\nنَادِل (nādil) = الناد ل\nطَاوِلَة (ṭāwila) = الطاولة\nالحِسَاب (al-ḥisāb) = الحساب",
          contentFr: "مَطْعَم (maṭ'am) = restaurant\nقَائِمَة الطَّعَام (qā'imat aṭ-ṭa'ām) = menu\nنَادِل (nādil) = serveur\nطَاوِلَة (ṭāwila) = table\nالحِسَاب (al-ḥisāb) = l'addition"
        },
        {
          title: "Ordering",
          titleAr: "الطلب",
          titleFr: "Commande",
          content: "أُرِيدُ ... (urīdu ...) = I want ...\nهَلْ عِنْدَكُمْ ...؟ (hal 'indakum ...?) = Do you have ...?\nمَا هُوَ طَبَقُ اليَوْم؟ (mā huwa ṭabaq al-yawm?) = What is the dish of the day?\nهَذَا لَذِيذٌ! (hādhā ladhīdhun!) = This is delicious!",
          contentAr: "أُرِيدُ ... (urīdu ...) = أريد\nهَلْ عِنْدَكُمْ ...؟ (hal 'indakum ...?) = هل عندكم\nمَا هُوَ طَبَقُ اليَوْم؟ (mā huwa ṭabaq al-yawm?) = ما هو طبق اليوم؟\nهَذَا لَذِيذٌ! (hādhā ladhīdhun!) = هذا لذيذ!",
          contentFr: "أُرِيدُ ... (urīdu ...) = Je veux ...\nهَلْ عِنْدَكُمْ ...؟ (hal 'indakum ...?) = Avez-vous ...?\nمَا هُوَ طَبَقُ اليَوْم؟ (mā huwa ṭabaq al-yawm?) = Quel est le plat du jour ?\nهَذَا لَذِيذٌ! (hādhā ladhīdhun!) = C'est délicieux !"
        },
        {
          title: "Special Requests",
          titleAr: "طلبات خاصة",
          titleFr: "Demandes spéciales",
          content: "مِنْ فَضْلِكَ (min faḍlika) = please (m)\nبِدُونِ ... (bidūni ...) = without ...\nمَعَ ... (ma'a ...) = with ...\nالحِسَابَ، مِنْ فَضْلِكَ (al-ḥisāba, min faḍlika) = The bill, please",
          contentAr: "مِنْ فَضْلِكَ (min faḍlika) = من فضلك\nبِدُونِ ... (bidūni ...) = بدون\nمَعَ ... (ma'a ...) = معَ\nالحِسَابَ، مِنْ فَضْلِكَ (al-ḥisāba, min faḍlika) = الحساب، من فضلك",
          contentFr: "مِنْ فَضْلِكَ (min faḍlika) = s'il vous plaît (m)\nبِدُونِ ... (bidūni ...) = sans ...\nمَعَ ... (ma'a ...) = avec ...\nالحِسَابَ، مِنْ فَضْلِكَ (al-ḥisāba, min faḍlika) = L'addition, s'il vous plaît"
        }
      ],
      vocabulary: [
        { arabic: "أُرِيدُ", transliteration: "urīdu", meaning: "I want", meaningAr: "أريد", meaningFr: "je veux" },
        { arabic: "قَائِمَة الطَّعَام", transliteration: "qā'imat aṭ-ṭa'ām", meaning: "menu", meaningAr: "قائمة الطعام", meaningFr: "menu" },
        { arabic: "الحِسَاب", transliteration: "al-ḥisāb", meaning: "the bill", meaningAr: "الحساب", meaningFr: "l'addition" },
        { arabic: "لَذِيذ", transliteration: "ladhīdh", meaning: "delicious", meaningAr: "لذيذ", meaningFr: "délicieux" },
        { arabic: "شُكْرًا", transliteration: "shukran", meaning: "thank you", meaningAr: "شكراً", meaningFr: "merci" }
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
    descriptionAr: "تعلم مفردات التسوق والحوارات",
    descriptionFr: "Apprenez le vocabulaire et les conversations pour faire des achats",
    objectives: [
      "Ask about prices",
      "Negotiate and bargain",
      "Describe what you want",
      "Complete a purchase"
    ],
    objectivesAr: [
      "فهم مفردات التسوق",
      "السؤال عن الأسعار والمنتجات",
      "فهم الإجابات والتعاملات",
      "بناء حوار تسوق كامل"
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
          titleAr: "مفردات التسوق",
          titleFr: "Vocabulaire d'achat",
          content: "سُوق (sūq) = market\nمَحَلّ (maḥall) = store\nسِعْر (si'r) = price\nنُقُود (nuqūd) = money\nرَخِيص (rakhīṣ) = cheap\nغَالٍ (ghālin) = expensive",
          contentAr: "سُوق (sūq) = السوق\nمَحَلّ (maḥall) = المحل\nسِعْر (si'r) = السعر\nنُقُود (nuqūd) = النقود\nرَخِيص (rakhīṣ) = رخيص\nغَالٍ (ghālin) = غالٍ",
          contentFr: "سُوق (sūq) = marché\nمَحَلّ (maḥall) = magasin\nسِعْر (si'r) = prix\nنُقُود (nuqūd) = argent\nرَخِيص (rakhīṣ) = bon marché\nغَالٍ (ghālin) = cher"
        },
        {
          title: "Asking Prices",
          titleAr: "السؤال عن الأسعار",
          titleFr: "Demander les prix",
          content: "بِكَمْ هَذَا؟ (bikam hādhā?) = How much is this?\nكَمِ السِّعْرُ؟ (kam as-si'ru?) = What is the price?\nهَذَا غَالٍ جِدًّا! (hādhā ghālin jiddan!) = This is too expensive!\nهَلْ يُمْكِنُ تَخْفِيض؟ (hal yumkinu takhfīḍ?) = Is a discount possible?",
          contentAr: "بِكَمْ هَذَا؟ (bikam hādhā?) = بكم هذا؟\nكَمِ السِّعْرُ؟ (kam as-si'ru?) = كم السعر؟\nهَذَا غَالٍ جِدًّا! (hādhā ghālin jiddan!) = هذا غالٍ جداً!\nهَلْ يُمْكِنُ تَخْفِيض؟ (hal yumkinu takhfīḍ?) = هل يمكن تخفيض؟",
          contentFr: "بِكَمْ هَذَا؟ (bikam hādhā?) = Combien coûte ceci ?\nكَمِ السِّعْرُ؟ (kam as-si'ru?) = Quel est le prix ?\nهَذَا غَالٍ جِدًّا! (hādhā ghālin jiddan!) = C'est trop cher !\nهَلْ يُمْكِنُ تَخْفِيض؟ (hal yumkinu takhfīḍ?) = Une remise est-elle possible ?"
        },
        {
          title: "Making a Purchase",
          titleAr: "إجراء عملية شراء",
          titleFr: "Effectuer un achat",
          content: "سَآخُذُ هَذَا (sa-ākhudu hādhā) = I will take this\nأُرِيدُ وَاحِدًا (urīdu wāḥidan) = I want one\nهَلْ تَقْبَلُونَ البِطَاقَة؟ (hal taqbalūna al-biṭāqa?) = Do you accept cards?\nشُكْرًا، مَعَ السَّلَامَة! (shukran, ma'a as-salāma!) = Thank you, goodbye!",
          contentAr: "سَآخُذُ هَذَا (sa-ākhudu hādhā) = سآخذ هذا\nأُرِيدُ وَاحِدًا (urīdu wāḥidan) = أريد واحداً\nهَلْ تَقْبَلُونَ البِطَاقَة؟ (hal taqbalūna al-biṭāqa?) = هل تقبلون البطاقة؟\nشُكْرًا، مَعَ السَّلَامَة! (shukran, ma'a as-salāma!) = شكراً، معَ السلامة!",
          contentFr: "سَآخُذُ هَذَا (sa-ākhudu hādhā) = Je vais prendre ceci\nأُرِيدُ وَاحِدًا (urīdu wāḥidan) = Je veux un\nهَلْ تَقْبَلُونَ البِطَاقَة؟ (hal taqbalūna al-biṭāqa?) = Acceptez-vous les cartes ?\nشُكْرًا، مَعَ السَّلَامَة! (shukran, ma'a as-salāma!) = Merci, au revoir !"
        }
      ],
      vocabulary: [
        { arabic: "بِكَمْ؟", transliteration: "bikam?", meaning: "How much?", meaningAr: "بكم؟", meaningFr: "Combien ?" },
        { arabic: "سِعْر", transliteration: "si'r", meaning: "price", meaningAr: "السعر", meaningFr: "prix" },
        { arabic: "غَالٍ", transliteration: "ghālin", meaning: "expensive", meaningAr: "غالٍ", meaningFr: "cher" },
        { arabic: "رَخِيص", transliteration: "rakhīṣ", meaning: "cheap", meaningAr: "رخيص", meaningFr: "bon marché" },
        { arabic: "سَآخُذُ", transliteration: "sa-ākhudu", meaning: "I will take", meaningAr: "سآخذ", meaningFr: "je vais prendre" }
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
    descriptionAr: "وصف أنشطتك اليومية",
    descriptionFr: "Décrivez vos activités quotidiennes",
    objectives: [
      "Talk about daily schedule",
      "Use time expressions naturally",
      "Describe habits and routines",
      "Ask about others' routines"
    ],
    objectivesAr: [
      "فهم الأفعال المتعلقة بالروتين",
      "وصف روتينك اليومي",
      "استخدام الأوقات مع الأنشطة",
      "بناء جمل عن الحياة اليومية"
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
          titleAr: "روتين الصباح",
          titleFr: "Routine du matin",
          content: "أَسْتَيْقِظُ (astayqiẓu) = I wake up\nأَغْتَسِلُ (aghtasilu) = I wash/shower\nأَتَنَاوَلُ الفُطُور (atanāwalu al-fuṭūr) = I have breakfast\nأَذْهَبُ إِلَى العَمَل (adhhabu ilā al-'amal) = I go to work",
          contentAr: "أَسْتَيْقِظُ (astayqiẓu) = أستيقظ\nأَغْتَسِلُ (aghtasilu) = أغتسل\nأَتَنَاوَلُ الفُطُور (atanāwalu al-fuṭūr) = أتناول الفطور\nأَذْهَبُ إِلَى العَمَل (adhhabu ilā al-'amal) = أذهب إلى العمل",
          contentFr: "أَسْتَيْقِظُ (astayqiẓu) = Je me réveille\nأَغْتَسِلُ (aghtasilu) = Je me lave/je prends une douche\nأَتَنَاوَلُ الفُطُور (atanāwalu al-fuṭūr) = Je déjeune\nأَذْهَبُ إِلَى العَمَل (adhhabu ilā al-'amal) = Je vais au travail"
        },
        {
          title: "Daily Activities",
          titleAr: "الأنشطة اليومية",
          titleFr: "Activités quotidiennes",
          content: "أَعْمَلُ (a'malu) = I work\nأَدْرُسُ (adrusu) = I study\nأَتَغَدَّى (ataghadda) = I have lunch\nأَرْجِعُ (arji'u) = I return home\nأَتَعَشَّى (ata'ashsha) = I have dinner\nأَنَامُ (anāmu) = I sleep",
          contentAr: "أَعْمَلُ (a'malu) = أعمل\nأَدْرُسُ (adrusu) = أدرس\nأَتَغَدَّى (ataghadda) = أتغدى\nأَرْجِعُ (arji'u) = أرجع\nأَتَعَشَّى (ata'ashsha) = أتعشى\nأَنَامُ (anāmu) = أنام",
          contentFr: "أَعْمَلُ (a'malu) = Je travaille\nأَدْرُسُ (adrusu) = J'étudie\nأَتَغَدَّى (ataghadda) = Je déjeune (déjeuner de midi)\nأَرْجِعُ (arji'u) = Je reviens\nأَتَعَشَّى (ata'ashsha) = Je dîne\nأَنَامُ (anāmu) = Je dors"
        }
      ],
      vocabulary: [
        { arabic: "أَسْتَيْقِظُ", transliteration: "astayqiẓu", meaning: "I wake up", meaningAr: "أستيقظ", meaningFr: "je me réveille" },
        { arabic: "أَذْهَبُ", transliteration: "adhhabu", meaning: "I go", meaningAr: "أذهب", meaningFr: "je vais" },
        { arabic: "أَعْمَلُ", transliteration: "a'malu", meaning: "I work", meaningAr: "أعمل", meaningFr: "je travaille" },
        { arabic: "أَرْجِعُ", transliteration: "arji'u", meaning: "I return", meaningAr: "أرجع", meaningFr: "je reviens" },
        { arabic: "أَنَامُ", transliteration: "anāmu", meaning: "I sleep", meaningAr: "أنام", meaningFr: "je dors" }
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
    descriptionAr: "مراجعة شاملة للمرحلة الثانية",
    descriptionFr: "Révision complète de la Phase 2",
    objectives: [
      "Review all vocabulary learned",
      "Demonstrate grammar mastery",
      "Complete practical conversations",
      "Prepare for Phase 3"
    ],
    objectivesAr: [
      "مراجعة المفردات من المرحلة الثانية",
      "ممارسة القواعد النحوية",
      "تطبيق المهارات المكتسبة",
      "تقييم التقدم في المرحلة الثانية"
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
          titleAr: "🎉 المرحلة الثانية اكتملت!",
          titleFr: "🎉 Phase 2 Complétée !",
          content: "Amazing progress! You've learned:\n✓ 200+ vocabulary words\n✓ Personal and possessive pronouns\n✓ Gender and plural forms\n✓ Past and present tense verbs\n✓ Sentence construction\n✓ Practical conversations",
          contentAr: "تقدم مذهل! لقد تعلمت:\n✓ أكثر من 200 كلمة\n✓ الضمائر الشخصية والملكية\n✓ صيغ المذكر والمؤنث والجمع\n✓ الأفعال في الماضي والمضارع\n✓ بناء الجمل\n✓ حوارات عملية",
          contentFr: "Progrès remarquable ! Vous avez appris :\n✓ Plus de 200 mots de vocabulaire\n✓ Les pronoms personnels et possessifs\n✓ Les formes masculine, féminine et plurielle\n✓ Les verbes au passé et présent\n✓ La construction de phrases\n✓ Les conversations pratiques"
        },
        {
          title: "Skills Achieved",
          titleAr: "المهارات التي تحققت",
          titleFr: "Compétences Acquises",
          content: "You can now:\n• Introduce yourself\n• Describe your family and home\n• Order at restaurants and shop\n• Tell time and discuss routines\n• Form questions and answers\n• Use basic Arabic grammar correctly",
          contentAr: "يمكنك الآن:\n• تقديم نفسك\n• وصف عائلتك ومنزلك\n• الطلب في المطاعم والتسوق\n• قول الوقت ومناقشة الروتين\n• طرح الأسئلة والإجابة عليها\n• استخدام قواعد العربية بشكل صحيح",
          contentFr: "Vous pouvez maintenant :\n• Vous présenter\n• Décrire votre famille et votre maison\n• Commander dans les restaurants et faire du shopping\n• Dire l'heure et discuter des routines\n• Poser des questions et répondre\n• Utiliser correctement la grammaire arabe de base"
        },
        {
          title: "Ready for Phase 3!",
          titleAr: "جاهز للمرحلة الثالثة!",
          titleFr: "Prêt pour la Phase 3 !",
          content: "In Phase 3: Expansion, you'll learn:\n• Advanced verb forms\n• Complex sentence structures\n• Conditional and subjunctive moods\n• Extended vocabulary by topic\n• Paragraph reading and writing",
          contentAr: "في المرحلة الثالثة: التوسع، ستتعلم:\n• أشكال فعلية متقدمة\n• بنى جملة معقدة\n• أفعال شرطية وما شابهها\n• مفردات موسعة حسب الموضوع\n• قراءة الفقرات والكتابة",
          contentFr: "En Phase 3 : Expansion, vous apprendrez :\n• Les formes verbales avancées\n• Les structures de phrase complexes\n• Les modes conditionnel et subjonctif\n• Le vocabulaire étendu par sujet\n• La lecture et l'écriture de paragraphes"
        }
      ],
      vocabulary: [
        { arabic: "تَهَانِينَا!", transliteration: "tahāninā!", meaning: "Congratulations!", meaningAr: "تهانينا!", meaningFr: "Félicitations !" },
        { arabic: "أَحْسَنْتَ!", transliteration: "aḥsanta!", meaning: "Well done!", meaningAr: "أحسنت!", meaningFr: "Bien joué !" },
        { arabic: "مُمْتَاز", transliteration: "mumtāz", meaning: "Excellent", meaningAr: "ممتاز", meaningFr: "Excellent" },
        { arabic: "اِسْتَمِرّ", transliteration: "istamirr", meaning: "Keep going", meaningAr: "استمر", meaningFr: "Continuez" }
      ]
    },
    exerciseCount: 25,
    prerequisites: ["2-29"]
  }
];
