/**
 * Phase 3: Expansion (30 Lessons)
 * Master complex grammar, verb forms, and extended vocabulary
 */

import type { Lesson } from "@/types";

export const PHASE_3_LESSONS: Lesson[] = [
  // SECTION 1: ADVANCED VERB FORMS (Lessons 1-6)
  {
    id: "3-1", phaseId: 3, order: 1,
    title: "Verb Form II (فَعَّلَ)",
    titleAr: "الفعل المزيد - فَعَّلَ",
    titleFr: "Forme verbale II (فَعَّلَ)",
    description: "Learn Form II verbs with doubled middle radical for intensification",
    descriptionAr: "تعلم أفعال الصيغة الثانية بتضعيف الحرف الأوسط للتكثيف والسببية",
    descriptionFr: "Apprenez les verbes de forme II avec redoublement de la consonne médiane pour l'intensification",
    objectives: ["Understand Form II pattern", "Recognize doubled consonant", "Form causative verbs", "Practice common Form II verbs"],
    objectivesAr: ["فهم نمط الصيغة الثانية", "التعرف على الحرف المضعف", "تكوين الأفعال السببية", "ممارسة الأفعال الشائعة في الصيغة الثانية"],
    objectivesFr: ["Comprendre le modèle de la forme II", "Reconnaître la consonne redoublée", "Former des verbes causatifs", "Pratiquer les verbes courants de la forme II"],
    estimatedTime: 50, difficulty: "medium", xpReward: 65,
    content: {
      theory: [
        { title: "Introduction to Verb Forms", titleAr: "مقدمة إلى أوزان الأفعال", titleFr: "Introduction aux formes verbales", content: "Arabic has 10 verb forms (أوزان). Each form adds specific meaning. Form II (فَعَّلَ) doubles the middle letter with shadda, often making verbs causative or intensive.", contentAr: "للغة العربية عشرة أوزان للأفعال. كل وزن يضيف معنى محدد. الوزن الثاني (فَعَّلَ) يضعف الحرف الأوسط بتشديد، مما يجعل الأفعال غالبا سببية أو مكثفة.", contentFr: "L'arabe a 10 formes verbales (أوزان). Chaque forme ajoute une signification spécifique. La forme II (فَعَّلَ) redouble la lettre médiane avec shadda, rendant souvent les verbes causatifs ou intensifs." },
        { title: "Form II Pattern", titleAr: "نمط الصيغة الثانية", titleFr: "Modèle de la forme II", content: "Base: فَعَلَ (fa'ala) → Form II: فَعَّلَ (fa''ala)\nExamples:\n• عَلِمَ (knew) → عَلَّمَ (taught)\n• كَسَرَ (broke) → كَسَّرَ (shattered)\n• فَهِمَ (understood) → فَهَّمَ (made understand)", contentAr: "الأساس: فَعَلَ → الصيغة الثانية: فَعَّلَ\nأمثلة:\n• عَلِمَ (عرف) → عَلَّمَ (علم)\n• كَسَرَ (كسر) → كَسَّرَ (حطم)\n• فَهِمَ (فهم) → فَهَّمَ (أفهم)", contentFr: "Base: فَعَلَ (fa'ala) → Forme II: فَعَّلَ (fa''ala)\nExemples:\n• عَلِمَ (knew) → عَلَّمَ (taught)\n• كَسَرَ (broke) → كَسَّرَ (shattered)\n• فَهِمَ (understood) → فَهَّمَ (made understand)" },
        { title: "Common Uses", titleAr: "الاستخدامات الشائعة", titleFr: "Utilisations courantes", content: "1. Causative: making someone do something\n2. Intensive: doing something intensely\n3. Declarative: considering something as X", contentAr: "١. السببية: جعل شخصا يفعل شيئا\n٢. المكثفة: فعل شيء بشدة\n٣. الخبرية: اعتبار شيء كـ", contentFr: "1. Causatif: faire que quelqu'un fasse quelque chose\n2. Intensif: faire quelque chose intensément\n3. Déclaratif: considérer quelque chose comme X" }
      ],
      vocabulary: [
        { arabic: "عَلَّمَ", transliteration: "'allama", meaning: "to teach", meaningAr: "علم، درس", meaningFr: "enseigner" },
        { arabic: "دَرَّسَ", transliteration: "darrasa", meaning: "to teach/instruct", meaningAr: "درس، علم", meaningFr: "enseigner/instruire" },
        { arabic: "كَلَّمَ", transliteration: "kallama", meaning: "to speak to", meaningAr: "كلم، تحدث مع", meaningFr: "parler à" },
        { arabic: "صَوَّرَ", transliteration: "ṣawwara", meaning: "to photograph", meaningAr: "صور، التقط صورة", meaningFr: "photographier" },
        { arabic: "قَدَّمَ", transliteration: "qaddama", meaning: "to present/offer", meaningAr: "قدم، عرض", meaningFr: "présenter/offrir" }
      ]
    },
    exerciseCount: 16, prerequisites: []
  },
  {
    id: "3-2", phaseId: 3, order: 2,
    title: "Verb Form III (فَاعَلَ)",
    titleAr: "الفعل المزيد - فَاعَلَ",
    titleFr: "Forme verbale III (فَاعَلَ)",
    description: "Learn Form III verbs with alif after first radical for reciprocal actions",
    descriptionAr: "تعلم أفعال الصيغة الثالثة بألف بعد الحرف الأول للأفعال المتبادلة",
    descriptionFr: "Apprenez les verbes de forme III avec alif après la première radicale pour les actions réciproques",
    objectives: ["Understand Form III pattern", "Recognize reciprocal meaning", "Form interaction verbs", "Use in conversations"],
    objectivesAr: ["فهم نمط الصيغة الثالثة", "التعرف على المعنى المتبادل", "تكوين أفعال التفاعل", "استخدامها في المحادثات"],
    objectivesFr: ["Comprendre le modèle de la forme III", "Reconnaître le sens réciproque", "Former des verbes d'interaction", "Utiliser dans les conversations"],
    estimatedTime: 50, difficulty: "medium", xpReward: 65,
    content: {
      theory: [
        { title: "Form III Pattern", titleAr: "نمط الصيغة الثالثة", titleFr: "Modèle de la forme III", content: "Form III adds alif (ا) after the first radical: فَعَلَ → فَاعَلَ\nThis form typically indicates mutual or reciprocal action - doing something WITH someone.", contentAr: "الصيغة الثالثة تضيف ألف بعد الحرف الأول: فَعَلَ → فَاعَلَ\nهذا الوزن يشير عادة إلى عمل متبادل أو متقابل - فعل شيء مع شخص ما.", contentFr: "La forme III ajoute alif (ا) après la première radicale: فَعَلَ → فَاعَلَ\nCette forme indique généralement une action mutuelle ou réciproque - faire quelque chose AVEC quelqu'un." },
        { title: "Examples", titleAr: "أمثلة", titleFr: "Exemples", content: "• كَتَبَ (wrote) → كَاتَبَ (corresponded with)\n• قَتَلَ (killed) → قَاتَلَ (fought with)\n• سَافَرَ (traveled) → سَافَرَ (traveled with)", contentAr: "• كَتَبَ (كتب) → كَاتَبَ (راسل)\n• قَتَلَ (قتل) → قَاتَلَ (حارب)\n• سَافَرَ (سافر) → سَافَرَ (سافر مع)", contentFr: "• كَتَبَ (wrote) → كَاتَبَ (corresponded with)\n• قَتَلَ (killed) → قَاتَلَ (fought with)\n• سَافَرَ (traveled) → سَافَرَ (traveled with)" },
        { title: "Reciprocal Meaning", titleAr: "المعنى المتبادل", titleFr: "Sens réciproque", content: "Form III often means doing an action together:\n• شَارَكَ - to participate/share with\n• حَاوَرَ - to converse with\n• جَاوَرَ - to be neighbor to", contentAr: "الصيغة الثالثة غالبا تعني فعل عمل معا:\n• شَارَكَ - شارك/اشترك مع\n• حَاوَرَ - حاور/تحدث مع\n• جَاوَرَ - كان جارا لـ", contentFr: "La forme III signifie souvent faire une action ensemble:\n• شَارَكَ - to participate/share with\n• حَاوَرَ - to converse with\n• جَاوَرَ - to be neighbor to" }
      ],
      vocabulary: [
        { arabic: "سَاعَدَ", transliteration: "sā'ada", meaning: "to help", meaningAr: "ساعد، أعان", meaningFr: "aider" },
        { arabic: "شَاهَدَ", transliteration: "shāhada", meaning: "to watch/witness", meaningAr: "شاهد، شهد", meaningFr: "regarder/témoigner" },
        { arabic: "حَاوَلَ", transliteration: "ḥāwala", meaning: "to try/attempt", meaningAr: "حاول، حاولة", meaningFr: "essayer/tenter" },
        { arabic: "سَافَرَ", transliteration: "sāfara", meaning: "to travel", meaningAr: "سافر، رحل", meaningFr: "voyager" },
        { arabic: "قَابَلَ", transliteration: "qābala", meaning: "to meet", meaningAr: "قابل، التقى بـ", meaningFr: "rencontrer" }
      ]
    },
    exerciseCount: 16, prerequisites: ["3-1"]
  },
  {
    id: "3-3", phaseId: 3, order: 3,
    title: "Verb Form IV (أَفْعَلَ)",
    titleAr: "الفعل المزيد - أَفْعَلَ",
    titleFr: "Forme verbale IV (أَفْعَلَ)",
    description: "Learn Form IV verbs with hamza prefix for causative meaning",
    descriptionAr: "تعلم أفعال الصيغة الرابعة بهمزة البداية للمعنى السببي",
    descriptionFr: "Apprenez les verbes de forme IV avec préfixe hamza pour le sens causatif",
    objectives: ["Understand Form IV pattern", "Recognize hamza prefix", "Form causative verbs", "Distinguish from Form II"],
    objectivesAr: ["فهم نمط الصيغة الرابعة", "التعرف على بادئة الهمزة", "تكوين الأفعال السببية", "التمييز عن الصيغة الثانية"],
    objectivesFr: ["Comprendre le modèle de la forme IV", "Reconnaître le préfixe hamza", "Former des verbes causatifs", "Distinguer de la forme II"],
    estimatedTime: 50, difficulty: "medium", xpReward: 65,
    content: {
      theory: [
        { title: "Form IV Pattern", titleAr: "نمط الصيغة الرابعة", titleFr: "Modèle de la forme IV", content: "Form IV adds hamza (أ) prefix and sukun on first radical: فَعَلَ → أَفْعَلَ\nLike Form II, it often has causative meaning but is more common with certain roots.", contentAr: "الصيغة الرابعة تضيف بادئة الهمزة وسكون على الحرف الأول: فَعَلَ → أَفْعَلَ\nمثل الصيغة الثانية، لها غالبا معنى سببي لكنها أكثر شيوعا مع بعض الجذور.", contentFr: "La forme IV ajoute le préfixe hamza (أ) et sukun sur la première radicale: فَعَلَ → أَفْعَلَ\nComme la forme II, elle a souvent un sens causatif mais est plus courante avec certaines racines." },
        { title: "Examples", titleAr: "أمثلة", titleFr: "Exemples", content: "• خَرَجَ (went out) → أَخْرَجَ (took out)\n• دَخَلَ (entered) → أَدْخَلَ (inserted)\n• سَلَمَ (was safe) → أَسْلَمَ (submitted/became Muslim)", contentAr: "• خَرَجَ (خرج) → أَخْرَجَ (أخرج)\n• دَخَلَ (دخل) → أَدْخَلَ (أدخل)\n• سَلَمَ (سلم) → أَسْلَمَ (أسلم/استسلم)", contentFr: "• خَرَجَ (went out) → أَخْرَجَ (took out)\n• دَخَلَ (entered) → أَدْخَلَ (inserted)\n• سَلَمَ (was safe) → أَسْلَمَ (submitted/became Muslim)" },
        { title: "Form IV vs Form II", titleAr: "الصيغة الرابعة مقابل الصيغة الثانية", titleFr: "Forme IV vs Forme II", content: "Both can be causative:\n• Form II: more intensive, physical actions\n• Form IV: more abstract, state changes", contentAr: "كلاهما يمكن أن يكون سببيا:\n• الصيغة الثانية: أكثر مكثفة، أفعال جسدية\n• الصيغة الرابعة: أكثر تجريدا، تغييرات الحالة", contentFr: "Les deux peuvent être causatifs:\n• Forme II: plus intensive, actions physiques\n• Forme IV: plus abstrait, changements d'état" }
      ],
      vocabulary: [
        { arabic: "أَرْسَلَ", transliteration: "arsala", meaning: "to send", meaningAr: "أرسل، بعث", meaningFr: "envoyer" },
        { arabic: "أَكْمَلَ", transliteration: "akmala", meaning: "to complete", meaningAr: "أكمل، أتمم", meaningFr: "compléter" },
        { arabic: "أَحَبَّ", transliteration: "aḥabba", meaning: "to love", meaningAr: "أحب، أحب جدا", meaningFr: "aimer" },
        { arabic: "أَصْبَحَ", transliteration: "aṣbaḥa", meaning: "to become", meaningAr: "أصبح، بات", meaningFr: "devenir" },
        { arabic: "أَعْطَى", transliteration: "a'ṭā", meaning: "to give", meaningAr: "أعطى، وهب", meaningFr: "donner" }
      ]
    },
    exerciseCount: 16, prerequisites: ["3-2"]
  },
  {
    id: "3-4", phaseId: 3, order: 4,
    title: "Verb Form V (تَفَعَّلَ)",
    titleAr: "الفعل المزيد - تَفَعَّلَ",
    titleFr: "Forme verbale V (تَفَعَّلَ)",
    description: "Learn Form V verbs - reflexive of Form II",
    descriptionAr: "تعلم أفعال الصيغة الخامسة - المنعكسة من الصيغة الثانية",
    descriptionFr: "Apprenez les verbes de forme V - réfléchi de la forme II",
    objectives: ["Understand Form V pattern", "Recognize ta- prefix with shadda", "Form reflexive verbs", "Connect to Form II"],
    objectivesAr: ["فهم نمط الصيغة الخامسة", "التعرف على بادئة ت- مع التشديد", "تكوين الأفعال المنعكسة", "الربط بالصيغة الثانية"],
    objectivesFr: ["Comprendre le modèle de la forme V", "Reconnaître le préfixe ta- avec shadda", "Former des verbes réfléchis", "Connecter à la forme II"],
    estimatedTime: 50, difficulty: "medium", xpReward: 65,
    content: {
      theory: [
        { title: "Form V Pattern", titleAr: "نمط الصيغة الخامسة", titleFr: "Modèle de la forme V", content: "Form V = ta- prefix + Form II: تَفَعَّلَ\nIt's the reflexive of Form II - the action happens to oneself.", contentAr: "الصيغة الخامسة = بادئة ت- + الصيغة الثانية: تَفَعَّلَ\nهي المنعكسة من الصيغة الثانية - يحدث الفعل للذات.", contentFr: "Forme V = ta- prefix + Forme II: تَفَعَّلَ\nC'est le réfléchi de la forme II - l'action se fait à soi-même." },
        { title: "Examples", titleAr: "أمثلة", titleFr: "Exemples", content: "• عَلَّمَ (taught) → تَعَلَّمَ (learned = taught oneself)\n• كَلَّمَ (spoke to) → تَكَلَّمَ (spoke)\n• حَرَّكَ (moved sth) → تَحَرَّكَ (moved oneself)", contentAr: "• عَلَّمَ (علم) → تَعَلَّمَ (تعلم)\n• كَلَّمَ (كلم) → تَكَلَّمَ (تكلم)\n• حَرَّكَ (حرك) → تَحَرَّكَ (تحرك)", contentFr: "• عَلَّمَ (taught) → تَعَلَّمَ (learned = taught oneself)\n• كَلَّمَ (spoke to) → تَكَلَّمَ (spoke)\n• حَرَّكَ (moved sth) → تَحَرَّكَ (moved oneself)" },
        { title: "Common Uses", titleAr: "الاستخدامات الشائعة", titleFr: "Utilisations courantes", content: "1. Reflexive: action on oneself\n2. Gradual process\n3. Pretending/acting as", contentAr: "١. المنعكسة: الفعل على الذات\n٢. عملية تدريجية\n٣. التظاهر/التصرف كـ", contentFr: "1. Réfléchi: action sur soi-même\n2. Processus graduel\n3. Prétendre/agir comme" }
      ],
      vocabulary: [
        { arabic: "تَعَلَّمَ", transliteration: "ta'allama", meaning: "to learn", meaningAr: "تعلم، تلقى العلم", meaningFr: "apprendre" },
        { arabic: "تَكَلَّمَ", transliteration: "takallama", meaning: "to speak", meaningAr: "تكلم، تحدث", meaningFr: "parler" },
        { arabic: "تَذَكَّرَ", transliteration: "tadhakkara", meaning: "to remember", meaningAr: "تذكر، استرجع الذاكرة", meaningFr: "se souvenir" },
        { arabic: "تَصَوَّرَ", transliteration: "taṣawwara", meaning: "to imagine", meaningAr: "تصور، تخيل", meaningFr: "imaginer" },
        { arabic: "تَغَيَّرَ", transliteration: "taghayyara", meaning: "to change", meaningAr: "تغير، تبدل", meaningFr: "changer" }
      ]
    },
    exerciseCount: 16, prerequisites: ["3-3"]
  },
  {
    id: "3-5", phaseId: 3, order: 5,
    title: "Verb Form VI (تَفَاعَلَ)",
    titleAr: "الفعل المزيد - تَفَاعَلَ",
    titleFr: "Forme verbale VI (تَفَاعَلَ)",
    description: "Learn Form VI verbs - mutual/reciprocal reflexive",
    descriptionAr: "تعلم أفعال الصيغة السادسة - المنعكسة المتبادلة والمتقابلة",
    descriptionFr: "Apprenez les verbes de forme VI - réfléchi mutuel et réciproque",
    objectives: ["Understand Form VI pattern", "Recognize mutual actions", "Form reciprocal verbs", "Connect to Form III"],
    objectivesAr: ["فهم نمط الصيغة السادسة", "التعرف على الأفعال المتبادلة", "تكوين الأفعال المتقابلة", "الربط بالصيغة الثالثة"],
    objectivesFr: ["Comprendre le modèle de la forme VI", "Reconnaître les actions mutuelles", "Former des verbes réciproques", "Connecter à la forme III"],
    estimatedTime: 50, difficulty: "medium", xpReward: 65,
    content: {
      theory: [
        { title: "Form VI Pattern", titleAr: "نمط الصيغة السادسة", titleFr: "Modèle de la forme VI", content: "Form VI = ta- prefix + Form III: تَفَاعَلَ\nIt expresses mutual action between multiple parties.", contentAr: "الصيغة السادسة = بادئة ت- + الصيغة الثالثة: تَفَاعَلَ\nتعبر عن الفعل المتبادل بين عدة أطراف.", contentFr: "Forme VI = ta- prefix + Forme III: تَفَاعَلَ\nElle exprime une action mutuelle entre plusieurs parties." },
        { title: "Examples", titleAr: "أمثلة", titleFr: "Exemples", content: "• قَاتَلَ (fought with) → تَقَاتَلَ (fought each other)\n• بَادَلَ (exchanged with) → تَبَادَلَ (exchanged mutually)\n• سَاعَدَ (helped) → تَسَاعَدَ (helped each other)", contentAr: "• قَاتَلَ (حارب مع) → تَقَاتَلَ (تقاتلوا)\n• بَادَلَ (بادل) → تَبَادَلَ (تبادلوا)\n• سَاعَدَ (ساعد) → تَسَاعَدَ (تساعدوا)", contentFr: "• قَاتَلَ (fought with) → تَقَاتَلَ (fought each other)\n• بَادَلَ (exchanged with) → تَبَادَلَ (exchanged mutually)\n• سَاعَدَ (helped) → تَسَاعَدَ (helped each other)" },
        { title: "Pretending Meaning", titleAr: "معنى التظاهر", titleFr: "Sens de prétendre", content: "Form VI can also mean pretending:\n• تَمَارَضَ - pretended to be sick\n• تَجَاهَلَ - pretended not to know\n• تَنَاسَى - pretended to forget", contentAr: "الصيغة السادسة يمكن أن تعني أيضا التظاهر:\n• تَمَارَضَ - تظاهر بالمرض\n• تَجَاهَلَ - تجاهل/تظاهر بعدم المعرفة\n• تَنَاسَى - تناسى/تظاهر بالنسيان", contentFr: "La forme VI peut aussi signifier prétendre:\n• تَمَارَضَ - pretended to be sick\n• تَجَاهَلَ - pretended not to know\n• تَنَاسَى - pretended to forget" }
      ],
      vocabulary: [
        { arabic: "تَعَاوَنَ", transliteration: "ta'āwana", meaning: "to cooperate", meaningAr: "تعاون، تعاضد", meaningFr: "coopérer" },
        { arabic: "تَبَادَلَ", transliteration: "tabādala", meaning: "to exchange", meaningAr: "تبادل، تناول بالتبادل", meaningFr: "échanger" },
        { arabic: "تَفَاهَمَ", transliteration: "tafāhama", meaning: "to understand each other", meaningAr: "تفاهم، تبادل الفهم", meaningFr: "se comprendre" },
        { arabic: "تَوَاصَلَ", transliteration: "tawāṣala", meaning: "to communicate", meaningAr: "توصل، تواصل", meaningFr: "communiquer" },
        { arabic: "تَسَاءَلَ", transliteration: "tasā'ala", meaning: "to wonder", meaningAr: "تساءل، تبادل الأسئلة", meaningFr: "se demander" }
      ]
    },
    exerciseCount: 16, prerequisites: ["3-4"]
  },
  {
    id: "3-6", phaseId: 3, order: 6,
    title: "Verb Forms VII-X Overview",
    titleAr: "نظرة عامة على الأوزان السابع إلى العاشر",
    titleFr: "Vue d'ensemble des formes verbales VII-X",
    description: "Overview of Forms VII, VIII, IX, and X with key examples",
    descriptionAr: "نظرة عامة على الصيغ السابعة والثامنة والتاسعة والعاشرة مع أمثلة رئيسية",
    descriptionFr: "Vue d'ensemble des formes VII, VIII, IX et X avec des exemples clés",
    objectives: ["Understand Forms VII-X patterns", "Recognize passive/reflexive meanings", "Learn common verbs from each form", "Master form recognition"],
    objectivesAr: ["فهم أنماط الصيغ السابعة إلى العاشرة", "التعرف على المعاني المبنية للمجهول والمنعكسة", "تعلم الأفعال الشائعة من كل صيغة", "إتقان التعرف على الصيغ"],
    objectivesFr: ["Comprendre les modèles des formes VII-X", "Reconnaître les sens passifs/réfléchis", "Apprendre les verbes courants de chaque forme", "Maîtriser la reconnaissance des formes"],
    estimatedTime: 55, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Form VII (اِنْفَعَلَ)", titleAr: "الصيغة السابعة (اِنْفَعَلَ)", titleFr: "Forme VII (اِنْفَعَلَ)", content: "Passive/reflexive of Form I:\n• كَسَرَ (broke) → اِنْكَسَرَ (was broken)\n• فَتَحَ (opened) → اِنْفَتَحَ (was opened)", contentAr: "المبنية للمجهول/المنعكسة من الصيغة الأولى:\n• كَسَرَ (كسر) → اِنْكَسَرَ (انكسر)\n• فَتَحَ (فتح) → اِنْفَتَحَ (انفتح)", contentFr: "Passif/réfléchi de la forme I:\n• كَسَرَ (broke) → اِنْكَسَرَ (was broken)\n• فَتَحَ (opened) → اِنْفَتَحَ (was opened)" },
        { title: "Form VIII (اِفْتَعَلَ)", titleAr: "الصيغة الثامنة (اِفْتَعَلَ)", titleFr: "Forme VIII (اِفْتَعَلَ)", content: "Reflexive with middle infixed ت:\n• جَمَعَ (gathered) → اِجْتَمَعَ (gathered together)\n• خَلَفَ (differed) → اِخْتَلَفَ (disagreed)", contentAr: "المنعكسة مع ت مدرجة في الوسط:\n• جَمَعَ (جمع) → اِجْتَمَعَ (اجتمع)\n• خَلَفَ (اختلف) → اِخْتَلَفَ (اختلفوا)", contentFr: "Réfléchi avec ت infixée au milieu:\n• جَمَعَ (gathered) → اِجْتَمَعَ (gathered together)\n• خَلَفَ (differed) → اِخْتَلَفَ (disagreed)" },
        { title: "Form IX (اِفْعَلَّ)", titleAr: "الصيغة التاسعة (اِفْعَلَّ)", titleFr: "Forme IX (اِفْعَلَّ)", content: "Colors and defects:\n• أَحْمَر (red) → اِحْمَرَّ (became red)\n• أَصْفَر (yellow) → اِصْفَرَّ (turned yellow)", contentAr: "الألوان والعيوب:\n• أَحْمَر (أحمر) → اِحْمَرَّ (احمر)\n• أَصْفَر (أصفر) → اِصْفَرَّ (اصفر)", contentFr: "Couleurs et défauts:\n• أَحْمَر (red) → اِحْمَرَّ (became red)\n• أَصْفَر (yellow) → اِصْفَرَّ (turned yellow)" },
        { title: "Form X (اِسْتَفْعَلَ)", titleAr: "الصيغة العاشرة (اِسْتَفْعَلَ)", titleFr: "Forme X (اِسْتَفْعَلَ)", content: "Seeking/considering:\n• غَفَرَ (forgave) → اِسْتَغْفَرَ (sought forgiveness)\n• عَمَلَ (worked) → اِسْتَعْمَلَ (used)", contentAr: "الطلب والاعتبار:\n• غَفَرَ (غفر) → اِسْتَغْفَرَ (استغفر)\n• عَمَلَ (عمل) → اِسْتَعْمَلَ (استعمل)", contentFr: "Chercher/considérer:\n• غَفَرَ (forgave) → اِسْتَغْفَرَ (sought forgiveness)\n• عَمَلَ (worked) → اِسْتَعْمَلَ (used)" }
      ],
      vocabulary: [
        { arabic: "اِنْتَظَرَ", transliteration: "intaẓara", meaning: "to wait (VIII)", meaningAr: "انتظر، استنتظر", meaningFr: "attendre (VIII)" },
        { arabic: "اِسْتَخْدَمَ", transliteration: "istakhdama", meaning: "to use (X)", meaningAr: "استخدم، استعمل", meaningFr: "utiliser (X)" },
        { arabic: "اِحْتَاجَ", transliteration: "iḥtāja", meaning: "to need (VIII)", meaningAr: "احتاج، افتقر إلى", meaningFr: "avoir besoin (VIII)" },
        { arabic: "اِسْتَمَعَ", transliteration: "istama'a", meaning: "to listen (X)", meaningAr: "استمع، أصغى", meaningFr: "écouter (X)" },
        { arabic: "اِعْتَقَدَ", transliteration: "i'taqada", meaning: "to believe (VIII)", meaningAr: "اعتقد، ظن", meaningFr: "croire (VIII)" }
      ]
    },
    exerciseCount: 18, prerequisites: ["3-5"]
  },
  // SECTION 2: VERB MOODS (Lessons 7-12)
  {
    id: "3-7", phaseId: 3, order: 7,
    title: "The Subjunctive Mood (المُضارع المنصوب)",
    titleAr: "المُضارع المنصوب",
    titleFr: "Le mode subjonctif (المُضارع المنصوب)",
    description: "Learn the subjunctive mood and particles that trigger it",
    descriptionAr: "تعلم المضارع المنصوب والحروف التي تدخل عليه",
    descriptionFr: "Apprenez le mode subjonctif et les particules qui le déclenchent",
    objectives: ["Understand subjunctive concept", "Recognize nasb particles", "Apply fatha ending", "Form complex sentences"],
    objectivesAr: ["فهم مفهوم المضارع المنصوب", "التعرف على حروف النصب", "تطبيق علامة الفتحة", "تكوين جمل معقدة"],
    objectivesFr: ["Comprendre le concept du subjonctif", "Reconnaître les particules nasb", "Appliquer la terminaison fatha", "Former des phrases complexes"],
    estimatedTime: 50, difficulty: "medium", xpReward: 65,
    content: {
      theory: [
        { title: "What is Subjunctive?", titleAr: "ما هو المضارع المنصوب؟", titleFr: "Qu'est-ce que le subjonctif?", content: "The subjunctive (منصوب) is used after certain particles to express wishes, purposes, or uncertainty. The verb ending changes from damma (ُ) to fatha (َ).", contentAr: "المنصوب يستخدم بعد حروف معينة للتعبير عن الرغبات أو الأغراض أو عدم التأكد. تتغير نهاية الفعل من الضمة إلى الفتحة.", contentFr: "Le subjonctif (منصوب) est utilisé après certaines particules pour exprimer des souhaits, des buts ou l'incertitude. La terminaison du verbe change de damma (ُ) à fatha (َ)." },
        { title: "Subjunctive Particles", titleAr: "حروف النصب", titleFr: "Particules du subjonctif", content: "أَنْ (that/to) - most common\nلَنْ (will not) - negative future\nكَيْ / لِكَيْ (in order to)\nحَتَّى (until/so that)\nلِ (to/in order to)", contentAr: "أَنْ (أن) - الأكثر شيوعا\nلَنْ (لن) - المستقبل السالب\nكَيْ / لِكَيْ (لكي)\nحَتَّى (حتى)\nلِ (لـ)", contentFr: "أَنْ (that/to) - le plus courant\nلَنْ (will not) - futur négatif\nكَيْ / لِكَيْ (in order to)\nحَتَّى (until/so that)\nلِ (to/in order to)" },
        { title: "Examples", titleAr: "أمثلة", titleFr: "Exemples", content: "أُرِيدُ أَنْ أَذْهَبَ - I want to go\nلَنْ أَنْسَى - I will not forget\nدَرَسْتُ لِأَنْجَحَ - I studied to succeed", contentAr: "أُرِيدُ أَنْ أَذْهَبَ - أريد أن أذهب\nلَنْ أَنْسَى - لن أنسى\nدَرَسْتُ لِأَنْجَحَ - درست لأنجح", contentFr: "أُرِيدُ أَنْ أَذْهَبَ - I want to go\nلَنْ أَنْسَى - I will not forget\nدَرَسْتُ لِأَنْجَحَ - I studied to succeed" }
      ],
      vocabulary: [
        { arabic: "أَنْ", transliteration: "an", meaning: "that/to (subjunctive)", meaningAr: "أن (حرف نصب)", meaningFr: "que/pour (subjonctif)" },
        { arabic: "لَنْ", transliteration: "lan", meaning: "will not", meaningAr: "لن (حرف نصب)", meaningFr: "ne... pas" },
        { arabic: "كَيْ", transliteration: "kay", meaning: "in order to", meaningAr: "كي (لكي)", meaningFr: "afin de" },
        { arabic: "حَتَّى", transliteration: "ḥattā", meaning: "until/so that", meaningAr: "حتى (حرف نصب)", meaningFr: "jusqu'à/de sorte que" },
        { arabic: "لِ", transliteration: "li", meaning: "to/for", meaningAr: "لـ (حرف نصب)", meaningFr: "pour/à" }
      ]
    },
    exerciseCount: 16, prerequisites: ["3-6"]
  },
  {
    id: "3-8", phaseId: 3, order: 8,
    title: "The Jussive Mood (المُضارع المجزوم)",
    titleAr: "المُضارع المجزوم",
    titleFr: "Le mode jussif (المُضارع المجزوم)",
    description: "Learn the jussive mood for commands and negation",
    descriptionAr: "تعلم المضارع المجزوم المستخدم في الأوامر والنفي",
    descriptionFr: "Apprenez le mode jussif pour les ordres et la négation",
    objectives: ["Understand jussive concept", "Recognize jazm particles", "Apply sukun ending", "Use لَمْ for negation"],
    objectivesAr: ["فهم مفهوم الجزم", "التعرف على حروف الجزم", "تطبيق السكون في النهاية", "استخدام لم للنفي"],
    objectivesFr: ["Comprendre le concept du jussif", "Reconnaître les particules jazm", "Appliquer la terminaison sukun", "Utiliser لَمْ pour la négation"],
    estimatedTime: 50, difficulty: "medium", xpReward: 65,
    content: {
      theory: [
        { title: "What is Jussive?", titleAr: "ما هو المضارع المجزوم؟", titleFr: "Qu'est-ce que le jussif?", content: "The jussive (مجزوم) is used after certain particles, especially for negation and commands. The final vowel becomes sukun (ْ).", contentAr: "المضارع المجزوم يُستخدم بعد حروف معينة، وخاصة للنفي والأوامر. تصبح الحركة الأخيرة سكوناً (ْ).", contentFr: "Le jussif (مجزوم) est utilisé après certaines particules, surtout pour la négation et les ordres. La voyelle finale devient sukun (ْ)." },
        { title: "Jussive Particles", titleAr: "حروف الجزم", titleFr: "Particules du jussif", content: "لَمْ (did not) - past negation\nلَمَّا (not yet)\nلِ/لا (let/don't - commands)\nإِنْ (if - conditional)", contentAr: "لَمْ (لم) - النفي في الماضي\nلَمَّا (لم يزل) - لم يأتِ بعد\nلِ/لا (لا) - الأمر والنهي\nإِنْ (إن) - الشرط", contentFr: "لَمْ (did not) - négation du passé\nلَمَّا (not yet)\nلِ/لا (let/don't - ordres)\nإِنْ (if - conditionnel)" },
        { title: "Examples", titleAr: "أمثلة", titleFr: "Exemples", content: "لَمْ أَفْهَمْ - I did not understand\nلَمَّا يَصِلْ - He hasn't arrived yet\nلِنَذْهَبْ - Let's go\nلا تَنْسَ - Don't forget", contentAr: "لَمْ أَفْهَمْ - لم أفهم\nلَمَّا يَصِلْ - لم يصل بعد\nلِنَذْهَبْ - لنذهب\nلا تَنْسَ - لا تنسَ", contentFr: "لَمْ أَفْهَمْ - I did not understand\nلَمَّا يَصِلْ - He hasn't arrived yet\nلِنَذْهَبْ - Let's go\nلا تَنْسَ - Don't forget" }
      ],
      vocabulary: [
        { arabic: "لَمْ", transliteration: "lam", meaning: "did not (past negation)", meaningAr: "لم، حرف نفي الماضي", meaningFr: "ne... pas (négation du passé)" },
        { arabic: "لَمَّا", transliteration: "lammā", meaning: "not yet", meaningAr: "لم يزل، ما زال، لم يأتِ بعد", meaningFr: "pas encore" },
        { arabic: "لِنَذْهَبْ", transliteration: "linadhhab", meaning: "let's go", meaningAr: "دعنا نذهب", meaningFr: "allons" },
        { arabic: "لا تَقْلَقْ", transliteration: "lā taqlaq", meaning: "don't worry", meaningAr: "لا تقلق", meaningFr: "ne t'inquiète pas" },
        { arabic: "إِنْ", transliteration: "in", meaning: "if (conditional)", meaningAr: "إن، حرف شرط", meaningFr: "si (conditionnel)" }
      ]
    },
    exerciseCount: 16, prerequisites: ["3-7"]
  },
  {
    id: "3-9", phaseId: 3, order: 9,
    title: "The Imperative (الأمر)",
    titleAr: "فعل الأمر",
    titleFr: "L'impératif (الأمر)",
    description: "Master command forms for all persons",
    descriptionAr: "احترف صيغ الأمر لجميع الأشخاص",
    descriptionFr: "Maîtrisez les formes de l'impératif pour toutes les personnes",
    objectives: ["Form imperatives from present tense", "Apply hamzat al-wasl rules", "Use negative commands", "Practice polite requests"],
    objectivesAr: ["تكوين الأمر من المضارع", "تطبيق قواعد همزة الوصل", "استخدام الأوامر السالبة", "ممارسة الطلبات المهذبة"],
    objectivesFr: ["Former l'impératif à partir du temps présent", "Appliquer les règles hamzat al-wasl", "Utiliser les ordres négatifs", "Pratiquer les demandes polies"],
    estimatedTime: 50, difficulty: "medium", xpReward: 65,
    content: {
      theory: [
        { title: "Forming the Imperative", titleAr: "تكوين فعل الأمر", titleFr: "Former l'impératif", content: "Remove the present tense prefix (ت/ي/ن/أ), add hamzat al-wasl if needed:\nتَكْتُبُ → اُكْتُبْ (write!)\nتَجْلِسُ → اِجْلِسْ (sit!)\nتَفْتَحُ → اِفْتَحْ (open!)", contentAr: "احذف بادئة المضارع (ت/ي/ن/أ)، أضف همزة الوصل إذا لزم الأمر:\nتَكْتُبُ → اُكْتُبْ (اكتب)\nتَجْلِسُ → اِجْلِسْ (اجلس)\nتَفْتَحُ → اِفْتَحْ (افتح)", contentFr: "Supprimez le préfixe du temps présent (ت/ي/ن/أ), ajoutez hamzat al-wasl si nécessaire:\nتَكْتُبُ → اُكْتُبْ (write!)\nتَجْلِسُ → اِجْلِسْ (sit!)\nتَفْتَحُ → اِفْتَحْ (open!)" },
        { title: "Hamzat al-Wasl Rules", titleAr: "قواعد همزة الوصل", titleFr: "Règles hamzat al-wasl", content: "If first letter after removing prefix has:\n• Damma (ُ): use اُ\n• Kasra (ِ) or Fatha (َ): use اِ", contentAr: "إذا كان الحرف الأول بعد حذف البادئة:\n• به ضمة (ُ): استخدم اُ\n• به كسرة (ِ) أو فتحة (َ): استخدم اِ", contentFr: "Si la première lettre après suppression du préfixe a:\n• Damma (ُ): use اُ\n• Kasra (ِ) or Fatha (َ): use اِ" },
        { title: "Negative Commands", titleAr: "الأوامر السالبة", titleFr: "Ordres négatifs", content: "Use لا + Jussive:\nلا تَكْتُبْ - Don't write\nلا تَذْهَبْ - Don't go", contentAr: "استخدم لا + المضارع المجزوم:\nلا تَكْتُبْ - لا تكتب\nلا تَذْهَبْ - لا تذهب", contentFr: "Utilisez لا + Jussive:\nلا تَكْتُبْ - Don't write\nلا تَذْهَبْ - Don't go" }
      ],
      vocabulary: [
        { arabic: "اُكْتُبْ", transliteration: "uktub", meaning: "write!", meaningAr: "اكتب", meaningFr: "écris!" },
        { arabic: "اِقْرَأْ", transliteration: "iqra'", meaning: "read!", meaningAr: "اقرأ", meaningFr: "lis!" },
        { arabic: "اِسْمَعْ", transliteration: "isma'", meaning: "listen!", meaningAr: "استمع، اسمع", meaningFr: "écoute!" },
        { arabic: "تَعَالَ", transliteration: "ta'āla", meaning: "come!", meaningAr: "تعال", meaningFr: "viens!" },
        { arabic: "اُنْظُرْ", transliteration: "unẓur", meaning: "look!", meaningAr: "انظر", meaningFr: "regarde!" }
      ]
    },
    exerciseCount: 16, prerequisites: ["3-8"]
  },
  {
    id: "3-10", phaseId: 3, order: 10,
    title: "Conditional Sentences (الجمل الشرطية)",
    titleAr: "الجمل الشرطية",
    titleFr: "Les phrases conditionnelles (الجمل الشرطية)",
    description: "Learn to form if-then conditional sentences",
    descriptionAr: "تعلم تكوين جمل الشرط من النوع إن-إذا",
    descriptionFr: "Apprenez à former des phrases conditionnelles si-alors",
    objectives: ["Understand condition and response", "Use إِنْ and إِذَا", "Apply correct verb moods", "Form real and unreal conditions"],
    objectivesAr: ["فهم البنية الشرطية", "استخدام إن وإذا", "تطبيق أوقات الفعل الصحيحة", "تكوين شروط حقيقية وغير حقيقية"],
    objectivesFr: ["Comprendre la condition et la réponse", "Utiliser إِنْ et إِذَا", "Appliquer les modes corrects", "Former des conditions réelles et irréelles"],
    estimatedTime: 55, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Conditional Structure", titleAr: "بنية الجملة الشرطية", titleFr: "Structure conditionnelle", content: "Arabic conditionals have:\n1. Conditional particle (أداة الشرط)\n2. Condition clause (فعل الشرط)\n3. Response clause (جواب الشرط)", contentAr: "الجملة الشرطية لديها:\n1. أداة الشرط\n2. فعل الشرط\n3. جواب الشرط", contentFr: "Les conditionnelles arabes ont:\n1. Particule conditionnelle (أداة الشرط)\n2. Clause de condition (فعل الشرط)\n3. Clause de réponse (جواب الشرط)" },
        { title: "إِنْ vs إِذَا", titleAr: "إن مقابل إذا", titleFr: "إِنْ vs إِذَا", content: "إِنْ - uncertain condition (uses jussive)\nإِذَا - likely condition (uses indicative)\n\nإِنْ تَدْرُسْ تَنْجَحْ - If you study, you'll succeed\nإِذَا دَرَسْتَ نَجَحْتَ - When you study, you succeed", contentAr: "إِنْ - شرط غير مؤكد (يستخدم الجزم)\nإِذَا - شرط محتمل (يستخدم المضارع العادي)\n\nإِنْ تَدْرُسْ تَنْجَحْ - إن تدرس تنجح\nإِذَا دَرَسْتَ نَجَحْتَ - إذا درست نجحت", contentFr: "إِنْ - condition incertaine (utilise le jussif)\nإِذَا - condition probable (utilise l'indicatif)\n\nإِنْ تَدْرُسْ تَنْجَحْ - If you study, you'll succeed\nإِذَا دَرَسْتَ نَجَحْتَ - When you study, you succeed" },
        { title: "Other Conditionals", titleAr: "شروط أخرى", titleFr: "Autres conditionnelles", content: "لَوْ - hypothetical (if only)\nلَوْلا - if not for\nمَنْ - whoever\nمَا - whatever", contentAr: "لَوْ - افتراضي (لو فقط)\nلَوْلا - لولا\nمَنْ - من، أيا كان من\nمَا - ما، أيا كان ما", contentFr: "لَوْ - hypothetical (if only)\nلَوْلا - if not for\nمَنْ - whoever\nمَا - whatever" }
      ],
      vocabulary: [
        { arabic: "إِنْ شَاءَ اللهُ", transliteration: "in shā' Allāh", meaning: "God willing", meaningAr: "إن شاء الله", meaningFr: "si Dieu le veut" },
        { arabic: "لَوْ سَمَحْتَ", transliteration: "law samaḥta", meaning: "please (if you permit)", meaningAr: "لو سمحت", meaningFr: "s'il vous plaît" },
        { arabic: "إِذَا أَرَدْتَ", transliteration: "idhā aradta", meaning: "if you want", meaningAr: "إذا أردت", meaningFr: "si tu veux" },
        { arabic: "مَهْمَا حَدَثَ", transliteration: "mahmā ḥadatha", meaning: "whatever happens", meaningAr: "مهما حدث، أيا كان ما يحدث", meaningFr: "quoi qu'il advienne" },
        { arabic: "حَيْثُمَا", transliteration: "ḥaythumā", meaning: "wherever", meaningAr: "حيثما، أينما", meaningFr: "n'importe où" }
      ]
    },
    exerciseCount: 17, prerequisites: ["3-9"]
  },
  {
    id: "3-11", phaseId: 3, order: 11,
    title: "Passive Voice (المبني للمجهول)",
    titleAr: "المبني للمجهول",
    titleFr: "La voix passive (المبني للمجهول)",
    description: "Learn to form and use passive voice in Arabic",
    descriptionAr: "تعلم تكوين واستخدام الصيغة المبنية للمجهول",
    descriptionFr: "Apprenez à former et utiliser la voix passive en arabe",
    objectives: ["Change active to passive", "Apply vowel patterns", "Use passive in different tenses", "Identify passive in texts"],
    objectivesAr: ["تحويل المعلوم إلى مجهول", "تطبيق أنماط الحركات", "استخدام المجهول في أوقات مختلفة", "تحديد المجهول في النصوص"],
    objectivesFr: ["Changer l'actif en passif", "Appliquer les modèles de voyelles", "Utiliser le passif dans différents temps", "Identifier le passif dans les textes"],
    estimatedTime: 50, difficulty: "medium", xpReward: 65,
    content: {
      theory: [
        { title: "Passive Vowel Pattern", titleAr: "نمط حركات المجهول", titleFr: "Modèle des voyelles passives", content: "Past: فَعَلَ → فُعِلَ (1st vowel = damma, 2nd = kasra)\nكَتَبَ → كُتِبَ (was written)\nPresent: يَفْعَلُ → يُفْعَلُ (1st prefix = damma, root = fatha)\nيَكْتُبُ → يُكْتَبُ (is being written)", contentAr: "الماضي: فَعَلَ → فُعِلَ (الحركة الأولى ضمة، الثانية كسرة)\nكَتَبَ → كُتِبَ (تم كتابته)\nالمضارع: يَفْعَلُ → يُفْعَلُ (البادئة ضمة، الجذر فتحة)\nيَكْتُبُ → يُكْتَبُ (يتم كتابته)", contentFr: "Passé: فَعَلَ → فُعِلَ (1ère voyelle = damma, 2ème = kasra)\nكَتَبَ → كُتِبَ (was written)\nPrésent: يَفْعَلُ → يُفْعَلُ (1er préfixe = damma, racine = fatha)\nيَكْتُبُ → يُكْتَبُ (is being written)" },
        { title: "Examples", titleAr: "أمثلة", titleFr: "Exemples", content: "قَرَأَ الطَّالِبُ الكِتَابَ → قُرِئَ الكِتَابُ\nThe student read the book → The book was read\n\nيَبْنِي العُمَّالُ البَيْتَ → يُبْنَى البَيْتُ\nThe workers build the house → The house is being built", contentAr: "قَرَأَ الطَّالِبُ الكِتَابَ → قُرِئَ الكِتَابُ\nقرأ الطالب الكتاب → تم قراءة الكتاب\n\nيَبْنِي العُمَّالُ البَيْتَ → يُبْنَى البَيْتُ\nيبني العمال البيت → يتم بناء البيت", contentFr: "قَرَأَ الطَّالِبُ الكِتَابَ → قُرِئَ الكِتَابُ\nThe student read the book → The book was read\n\nيَبْنِي العُمَّالُ البَيْتَ → يُبْنَى البَيْتُ\nThe workers build the house → The house is being built" },
        { title: "Passive Participle", titleAr: "اسم المفعول", titleFr: "Participe passif", content: "مَفْعُول pattern:\nمَكْتُوب - written\nمَعْرُوف - known\nمَفْهُوم - understood", contentAr: "صيغة مَفْعُول:\nمَكْتُوب - مكتوب\nمَعْرُوف - معروف\nمَفْهُوم - مفهوم", contentFr: "Modèle مَفْعُول:\nمَكْتُوب - written\nمَعْرُوف - known\nمَفْهُوم - understood" }
      ],
      vocabulary: [
        { arabic: "كُتِبَ", transliteration: "kutiba", meaning: "was written", meaningAr: "تم كتابته", meaningFr: "a été écrit" },
        { arabic: "قُرِئَ", transliteration: "quri'a", meaning: "was read", meaningAr: "تم قراءته", meaningFr: "a été lu" },
        { arabic: "فُهِمَ", transliteration: "fuhima", meaning: "was understood", meaningAr: "تم فهمه", meaningFr: "a été compris" },
        { arabic: "عُرِفَ", transliteration: "'urifa", meaning: "was known", meaningAr: "كان معروفا", meaningFr: "était connu" },
        { arabic: "أُكِلَ", transliteration: "ukila", meaning: "was eaten", meaningAr: "تم أكله", meaningFr: "a été mangé" }
      ]
    },
    exerciseCount: 16, prerequisites: ["3-10"]
  },
  {
    id: "3-12", phaseId: 3, order: 12,
    title: "Verb Moods Review & Practice",
    titleAr: "مراجعة الأفعال وتطبيقات",
    titleFr: "Révision et pratique des modes verbaux",
    description: "Comprehensive review of all verb moods with practice",
    descriptionAr: "مراجعة شاملة لجميع صيغ الأفعال مع ممارسة",
    descriptionFr: "Révision complète de tous les modes verbaux avec exercices pratiques",
    objectives: ["Distinguish all verb moods", "Apply correct particles", "Form complex sentences", "Translate between moods"],
    objectivesAr: ["مراجعة جميع صيغ الأفعال", "التمييز بين الصيغ المختلفة", "تطبيق الصيغ الصحيحة", "ممارسة متقدمة للصيغ"],
    objectivesFr: ["Distinguer tous les modes verbaux", "Appliquer les bonnes particules", "Former des phrases complexes", "Traduire entre les modes"],
    estimatedTime: 55, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Mood Summary", titleAr: "ملخص الصيغ", titleFr: "Résumé des modes", content: "مَرْفُوع (Indicative): Regular statement - يَكْتُبُ\nمَنْصُوب (Subjunctive): After أَنْ, لَنْ, etc. - يَكْتُبَ\nمَجْزُوم (Jussive): After لَمْ, لِ, etc. - يَكْتُبْ\nأَمْر (Imperative): Commands - اُكْتُبْ", contentAr: "مَرْفُوع (الخبرية): جملة عادية - يَكْتُبُ\nمَنْصُوب (النصب): بعد أَنْ، لَنْ، إلخ - يَكْتُبَ\nمَجْزُوم (الجزم): بعد لَمْ، لِ، إلخ - يَكْتُبْ\nأَمْر (الأمر): الأوامر - اُكْتُبْ", contentFr: "مَرْفُوع (Indicatif): Déclaration régulière - يَكْتُبُ\nمَنْصُوب (Subjonctif): Après أَنْ, لَنْ, etc. - يَكْتُبَ\nمَجْزُوم (Jussif): Après لَمْ, لِ, etc. - يَكْتُبْ\nأَمْر (Impératif): Ordres - اُكْتُبْ" },
        { title: "Quick Recognition", titleAr: "التعرف السريع", titleFr: "Reconnaissance rapide", content: "Look at the final vowel:\nُ (damma) = Indicative\nَ (fatha) = Subjunctive\nْ (sukun) = Jussive", contentAr: "انظر إلى الحركة الأخيرة:\nُ (ضمة) = الخبرية\nَ (فتحة) = النصب\nْ (سكون) = الجزم", contentFr: "Regardez la voyelle finale:\nُ (damma) = Indicatif\nَ (fatha) = Subjonctif\nْ (sukun) = Jussif" },
        { title: "Common Errors", titleAr: "الأخطاء الشائعة", titleFr: "Erreurs courantes", content: "❌ أُرِيدُ أَنْ أَذْهَبُ (indicative after أَنْ)\n✓ أُرِيدُ أَنْ أَذْهَبَ (subjunctive)\n\n❌ لَمْ أَفْهَمُ (indicative after لَمْ)\n✓ لَمْ أَفْهَمْ (jussive)", contentAr: "❌ أُرِيدُ أَنْ أَذْهَبُ (الخبرية بعد أَنْ)\n✓ أُرِيدُ أَنْ أَذْهَبَ (النصب)\n\n❌ لَمْ أَفْهَمُ (الخبرية بعد لَمْ)\n✓ لَمْ أَفْهَمْ (الجزم)", contentFr: "❌ أُرِيدُ أَنْ أَذْهَبُ (indicative after أَنْ)\n✓ أُرِيدُ أَنْ أَذْهَبَ (subjunctive)\n\n❌ لَمْ أَفْهَمُ (indicative after لَمْ)\n✓ لَمْ أَفْهَمْ (jussive)" }
      ],
      vocabulary: [
        { arabic: "يَجِبُ أَنْ", transliteration: "yajibu an", meaning: "must", meaningAr: "يجب أن", meaningFr: "doit" },
        { arabic: "يُمْكِنُ أَنْ", transliteration: "yumkinu an", meaning: "it's possible that", meaningAr: "يمكن أن", meaningFr: "c'est possible que" },
        { arabic: "مِنَ الضَّرُورِيِّ أَنْ", transliteration: "min aḍ-ḍarūrī an", meaning: "it's necessary that", meaningAr: "من الضروري أن", meaningFr: "c'est nécessaire que" },
        { arabic: "أَتَمَنَّى أَنْ", transliteration: "atamannā an", meaning: "I wish that", meaningAr: "أتمنى أن", meaningFr: "j'espère que" },
        { arabic: "يَجِبُ عَلَيْكَ أَنْ", transliteration: "yajibu 'alayka an", meaning: "you must", meaningAr: "يجب عليك أن", meaningFr: "tu dois" }
      ]
    },
    exerciseCount: 18, prerequisites: ["3-11"]
  },
  // SECTION 3: COMPLEX SENTENCES (Lessons 13-18)
  {
    id: "3-13", phaseId: 3, order: 13,
    title: "Relative Clauses (الجمل الموصولة)",
    titleAr: "الجمل الموصولة",
    titleFr: "Les propositions relatives (الجمل الموصولة)",
    description: "Learn to form relative clauses with الَّذِي and its variants",
    descriptionAr: "تعلم تكوين الجمل الموصولة مع الذي ومتغيراته",
    descriptionFr: "Apprenez à former des propositions relatives avec الَّذِي et ses variantes",
    objectives: ["Use relative pronouns", "Match gender and number", "Form defining clauses", "Build complex descriptions"],
    objectivesAr: ["فهم بنية الجملة الموصولة", "استخدام أسماء الإشارة الموصول", "بناء جمل موصولة صحيحة", "ممارسة الجمل الموصولة"],
    objectivesFr: ["Utiliser les pronoms relatifs", "Correspondre au genre et au nombre", "Former des clauses définitoires", "Construire des descriptions complexes"],
    estimatedTime: 50, difficulty: "medium", xpReward: 65,
    content: {
      theory: [
        { title: "Relative Pronouns", titleAr: "الأسماء الموصولة", titleFr: "Pronoms relatifs", content: "الَّذِي - who/which (masc. sing.)\nالَّتِي - who/which (fem. sing.)\nالَّذِينَ - who/which (masc. pl.)\nاللَّاتِي/اللَّوَاتِي - who/which (fem. pl.)\nاللَّذَانِ/اللَّتَانِ - (dual forms)", contentAr: "الَّذِي - الذي (مذكر مفرد)\nالَّتِي - التي (مؤنث مفرد)\nالَّذِينَ - اللذين (مذكر جمع)\nاللَّاتِي/اللَّوَاتِي - اللتان/اللاتي (مؤنث جمع)\nاللَّذَانِ/اللَّتَانِ - (صيغ المثنى)", contentFr: "الَّذِي - qui/lequel (masc. sing.)\nالَّتِي - qui/laquelle (fem. sing.)\nالَّذِينَ - qui/lesquels (masc. pl.)\naللَّاتِي/اللَّوَاتِي - qui/lesquelles (fem. pl.)\nاللَّذَانِ/اللَّتَانِ - (formes duelles)" },
        { title: "Structure", titleAr: "البنية", titleFr: "Structure", content: "Antecedent + Relative Pronoun + Clause\nالرَّجُلُ الَّذِي يَعْمَلُ هُنَا\nThe man who works here\n\nالكِتَابُ الَّذِي قَرَأْتُهُ\nThe book which I read", contentAr: "المتبوع + الاسم الموصول + الجملة\nالرَّجُلُ الَّذِي يَعْمَلُ هُنَا\nالرجل الذي يعمل هنا\n\nالكِتَابُ الَّذِي قَرَأْتُهُ\nالكتاب الذي قرأته", contentFr: "Antécédent + Pronom relatif + Clause\nالرَّجُلُ الَّذِي يَعْمَلُ هُنَا\nThe man who works here\n\nالكِتَابُ الَّذِي قَرَأْتُهُ\nThe book which I read" },
        { title: "Resumptive Pronoun", titleAr: "الضمير العائد", titleFr: "Pronom résomptif", content: "Arabic often needs a pronoun in the clause referring back:\nالمَرْأَةُ الَّتِي رَأَيْتُهَا (the woman whom I saw her)", contentAr: "اللغة العربية غالبا تحتاج ضمير في الجملة يعود على المتبوع:\nالمَرْأَةُ الَّتِي رَأَيْتُهَا (المرأة التي رأيتها)", contentFr: "L'arabe a souvent besoin d'un pronom dans la clause qui se réfère au précédent:\nالمَرْأَةُ الَّتِي رَأَيْتُهَا (la femme que j'ai vue)" }
      ],
      vocabulary: [
        { arabic: "الَّذِي", transliteration: "alladhī", meaning: "who/which (m.)", meaningAr: "الذي (مذكر)", meaningFr: "qui (m.)" },
        { arabic: "الَّتِي", transliteration: "allatī", meaning: "who/which (f.)", meaningAr: "التي (مؤنث)", meaningFr: "qui (f.)" },
        { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: "who/which (m.pl.)", meaningAr: "اللذين/الذين (جمع مذكر)", meaningFr: "qui (m.pl.)" },
        { arabic: "مَا", transliteration: "mā", meaning: "what/that which", meaningAr: "ما، أيا كان ما", meaningFr: "ce qui" },
        { arabic: "مَنْ", transliteration: "man", meaning: "who/whoever", meaningAr: "من، أيا كان من", meaningFr: "qui/quiconque" }
      ]
    },
    exerciseCount: 16, prerequisites: ["3-12"]
  },
  {
    id: "3-14", phaseId: 3, order: 14,
    title: "Subordinate Clauses",
    titleAr: "الجمل التابعة",
    titleFr: "Les propositions subordonnées",
    description: "Learn various types of subordinate clauses",
    descriptionAr: "تعلم أنواع مختلفة من الجمل الجزئية",
    descriptionFr: "Apprenez les différents types de propositions subordonnées",
    objectives: ["Form temporal clauses", "Use causal connectors", "Build purpose clauses", "Connect ideas smoothly"],
    objectivesAr: ["فهم الجمل الجزئية المختلفة", "التعرف على أدوات الربط", "بناء جمل مركبة صحيحة", "ممارسة الجمل الجزئية"],
    objectivesFr: ["Former des clauses temporelles", "Utiliser les connecteurs causals", "Construire des clauses de but", "Connecter les idées en douceur"],
    estimatedTime: 50, difficulty: "medium", xpReward: 65,
    content: {
      theory: [
        { title: "Temporal Clauses", titleAr: "جمل الزمان", titleFr: "Clauses temporelles", content: "عِنْدَمَا - when\nبَعْدَ أَنْ - after\nقَبْلَ أَنْ - before\nبَيْنَمَا - while\nمُنْذُ أَنْ - since", contentAr: "عِنْدَمَا - عندما\nبَعْدَ أَنْ - بعد أن\nقَبْلَ أَنْ - قبل أن\nبَيْنَمَا - بينما\nمُنْذُ أَنْ - منذ أن", contentFr: "عِنْدَمَا - quand\nبَعْدَ أَنْ - après\nقَبْلَ أَنْ - avant\nبَيْنَمَا - tandis que\nمُنْذُ أَنْ - depuis" },
        { title: "Causal Clauses", titleAr: "جمل السبب", titleFr: "Clauses causales", content: "لِأَنَّ - because\nبِسَبَبِ - because of\nإِذْ - since/as\nحَيْثُ - since/as", contentAr: "لِأَنَّ - لأن\nبِسَبَبِ - بسبب\nإِذْ - إذ\nحَيْثُ - حيث", contentFr: "لِأَنَّ - parce que\nبِسَبَبِ - à cause de\nإِذْ - puisque/comme\nحَيْثُ - puisque/comme" },
        { title: "Purpose Clauses", titleAr: "جمل الغرض", titleFr: "Clauses de but", content: "لِكَيْ / لِ - in order to\nحَتَّى - so that\nمِنْ أَجْلِ أَنْ - for the purpose of", contentAr: "لِكَيْ / لِ - لكي\nحَتَّى - حتى\nمِنْ أَجْلِ أَنْ - من أجل أن", contentFr: "لِكَيْ / لِ - pour/afin de\nحَتَّى - de sorte que\nمِنْ أَجْلِ أَنْ - pour le but de" }
      ],
      vocabulary: [
        { arabic: "عِنْدَمَا", transliteration: "'indamā", meaning: "when", meaningAr: "عندما", meaningFr: "quand" },
        { arabic: "لِأَنَّ", transliteration: "li'anna", meaning: "because", meaningAr: "لأن", meaningFr: "parce que" },
        { arabic: "بَيْنَمَا", transliteration: "baynamā", meaning: "while", meaningAr: "بينما، والحال أن", meaningFr: "tandis que" },
        { arabic: "بَعْدَ أَنْ", transliteration: "ba'da an", meaning: "after", meaningAr: "بعد أن", meaningFr: "après" },
        { arabic: "قَبْلَ أَنْ", transliteration: "qabla an", meaning: "before", meaningAr: "قبل أن", meaningFr: "avant" }
      ]
    },
    exerciseCount: 16, prerequisites: ["3-13"]
  },
  {
    id: "3-15", phaseId: 3, order: 15,
    title: "Nominal Sentences & Predication",
    titleAr: "الجملة الاسمية والإسناد",
    titleFr: "Les phrases nominales et la prédication",
    description: "Master nominal sentence structure and predication rules",
    descriptionAr: "اتقن بنية الجملة الاسمية وقواعد الإسناد",
    descriptionFr: "Maîtrisez la structure des phrases nominales et les règles de prédication",
    objectives: ["Understand المبتدأ والخبر", "Apply agreement rules", "Use different predicate types", "Form complex descriptions"],
    objectivesAr: ["فهم بنية الجملة الاسمية المتقدمة", "تحديد المبتدأ والخبر والمنعوت", "بناء جمل اسمية معقدة", "ممارسة الجمل الاسمية المتقدمة"],
    objectivesFr: ["Comprendre le sujet et le prédicat", "Appliquer les règles d'accord", "Utiliser différents types de prédicats", "Former des descriptions complexes"],
    estimatedTime: 50, difficulty: "medium", xpReward: 65,
    content: {
      theory: [
        { title: "Nominal Sentence Structure", titleAr: "بنية الجملة الاسمية", titleFr: "Structure de la phrase nominale", content: "المُبْتَدَأ (Subject) + الخَبَر (Predicate)\nالبَيْتُ كَبِيرٌ - The house is big\nالطُّلَّابُ مُجْتَهِدُونَ - The students are hardworking", contentAr: "المُبْتَدَأ (المتبوع) + الخَبَر (الخبر)\nالبَيْتُ كَبِيرٌ - البيت كبير\nالطُّلَّابُ مُجْتَهِدُونَ - الطلاب مجتهدون", contentFr: "المُبْتَدَأ (Sujet) + الخَبَر (Prédicat)\nالبَيْتُ كَبِيرٌ - The house is big\nالطُّلَّابُ مُجْتَهِدُونَ - The students are hardworking" },
        { title: "Types of Predicate", titleAr: "أنواع الخبر", titleFr: "Types de prédicats", content: "1. Single word: الجَوُّ جَمِيلٌ (The weather is beautiful)\n2. Phrase: الكِتَابُ عَلَى الطَّاوِلَةِ (The book is on the table)\n3. Clause: المُعَلِّمُ يَشْرَحُ (The teacher explains)", contentAr: "١. كلمة واحدة: الجَوُّ جَمِيلٌ (الجو جميل)\n٢. جملة جار ومجرور: الكِتَابُ عَلَى الطَّاوِلَةِ (الكتاب على الطاولة)\n٣. جملة فعلية: المُعَلِّمُ يَشْرَحُ (المعلم يشرح)", contentFr: "1. Mot unique: الجَوُّ جَمِيلٌ (The weather is beautiful)\n2. Phrase: الكِتَابُ عَلَى الطَّاوِلَةِ (The book is on the table)\n3. Clause: المُعَلِّمُ يَشْرَحُ (The teacher explains)" },
        { title: "Indefinite Subject", titleAr: "المبتدأ النكرة", titleFr: "Sujet indéfini", content: "When subject is indefinite, predicate comes first:\nفِي البَيْتِ رَجُلٌ - There is a man in the house\nعِنْدِي سُؤَالٌ - I have a question", contentAr: "عندما يكون المبتدأ نكرة، يأتي الخبر أولا:\nفِي البَيْتِ رَجُلٌ - في البيت رجل\nعِنْدِي سُؤَالٌ - عندي سؤال", contentFr: "Quand le sujet est indéfini, le prédicat vient d'abord:\nفِي البَيْتِ رَجُلٌ - There is a man in the house\nعِنْدِي سُؤَالٌ - I have a question" }
      ],
      vocabulary: [
        { arabic: "الجَوُّ", transliteration: "al-jaww", meaning: "the weather", meaningAr: "الجو", meaningFr: "le temps" },
        { arabic: "جَمِيلٌ", transliteration: "jamīl", meaning: "beautiful", meaningAr: "جميل، بديع", meaningFr: "beau" },
        { arabic: "مُمْتَازٌ", transliteration: "mumtāz", meaning: "excellent", meaningAr: "ممتاز، متفوق", meaningFr: "excellent" },
        { arabic: "ضَرُورِيٌّ", transliteration: "ḍarūrī", meaning: "necessary", meaningAr: "ضروري، لازم", meaningFr: "nécessaire" },
        { arabic: "مُهِمٌّ", transliteration: "muhimm", meaning: "important", meaningAr: "مهم، جوهري", meaningFr: "important" }
      ]
    },
    exerciseCount: 16, prerequisites: ["3-14"]
  },
  {
    id: "3-16", phaseId: 3, order: 16,
    title: "إِنَّ and Its Sisters",
    titleAr: "إِنَّ وأخواتها",
    titleFr: "إِنَّ et ses sœurs",
    description: "Learn particles that modify nominal sentences",
    descriptionAr: "تعلم الجزيئات التي تعدل الجمل الاسمية",
    descriptionFr: "Apprenez les particules qui modifient les phrases nominales",
    objectives: ["Understand إِنَّ particles", "Apply accusative to subject", "Use for emphasis", "Form nuanced statements"],
    objectivesAr: ["فهم إن وأخواتها", "تصريف الأسماء بعد إن وأخواتها", "بناء جمل مع إن وأخواتها", "ممارسة إن وأخواتها"],
    objectivesFr: ["Comprendre les particules إِنَّ", "Appliquer l'accusatif au sujet", "Utiliser pour l'emphase", "Former des déclarations nuancées"],
    estimatedTime: 50, difficulty: "medium", xpReward: 65,
    content: {
      theory: [
        { title: "إِنَّ and Sisters", titleAr: "إِن وأخواتها", titleFr: "إِنَّ et ses sœurs", content: "These particles take nominative predicate but accusative subject:\nإِنَّ - indeed/verily\nأَنَّ - that (conjunction)\nكَأَنَّ - as if\nلَكِنَّ - but/however\nلَيْتَ - would that (wish)\nلَعَلَّ - perhaps", contentAr: "هذه الجزيئات تأخذ خبراً مرفوعاً واسماً منصوباً:\nإِنَّ - إن\nأَنَّ - أن\nكَأَنَّ - كأن\nلَكِنَّ - لكن\nلَيْتَ - ليت\nلَعَلَّ - لعل", contentFr: "Ces particules prennent un prédicat nominatif mais un sujet accusatif:\nإِنَّ - vraiment/certes\nأَنَّ - que (conjonction)\nكَأَنَّ - comme si\nلَكِنَّ - mais/cependant\nلَيْتَ - pourvu que (souhait)\nلَعَلَّ - peut-être" },
        { title: "Examples", titleAr: "أمثلة", titleFr: "Exemples", content: "إِنَّ العِلْمَ نُورٌ - Indeed knowledge is light\nعَلِمْتُ أَنَّ الامْتِحَانَ سَهْلٌ - I knew that the exam was easy\nكَأَنَّ الدُّنْيَا حُلْمٌ - As if life is a dream", contentAr: "إِنَّ العِلْمَ نُورٌ - إن العلم نور\nعَلِمْتُ أَنَّ الامْتِحَانَ سَهْلٌ - علمت أن الامتحان سهل\nكَأَنَّ الدُّنْيَا حُلْمٌ - كأن الدنيا حلم", contentFr: "إِنَّ العِلْمَ نُورٌ - Indeed knowledge is light\nعَلِمْتُ أَنَّ الامْتِحَانَ سَهْلٌ - I knew that the exam was easy\nكَأَنَّ الدُّنْيَا حُلْمٌ - As if life is a dream" },
        { title: "Suffix Forms", titleAr: "الصيغ المركبة مع الضمائر", titleFr: "Formes avec suffixe", content: "With pronouns: إِنِّي, إِنَّكَ, إِنَّهُ\nإِنَّنِي أُحِبُّكَ - Indeed I love you\nإِنَّهُ جَيِّدٌ - Indeed it is good", contentAr: "مع الضمائر: إِنِّي, إِنَّكَ, إِنَّهُ\nإِنَّنِي أُحِبُّكَ - إنني أحبك\nإِنَّهُ جَيِّدٌ - إنه جيد", contentFr: "Avec les pronoms: إِنِّي, إِنَّكَ, إِنَّهُ\nإِنَّنِي أُحِبُّكَ - Indeed I love you\nإِنَّهُ جَيِّدٌ - Indeed it is good" }
      ],
      vocabulary: [
        { arabic: "إِنَّ", transliteration: "inna", meaning: "indeed/verily", meaningAr: "إن", meaningFr: "vraiment/certes" },
        { arabic: "أَنَّ", transliteration: "anna", meaning: "that", meaningAr: "أن", meaningFr: "que" },
        { arabic: "لَكِنَّ", transliteration: "lākinna", meaning: "but/however", meaningAr: "لكن", meaningFr: "mais/cependant" },
        { arabic: "لَعَلَّ", transliteration: "la'alla", meaning: "perhaps", meaningAr: "لعل", meaningFr: "peut-être" },
        { arabic: "كَأَنَّ", transliteration: "ka'anna", meaning: "as if", meaningAr: "كأن", meaningFr: "comme si" }
      ]
    },
    exerciseCount: 16, prerequisites: ["3-15"]
  },
  {
    id: "3-17", phaseId: 3, order: 17,
    title: "Exceptions (الاستثناء)",
    titleAr: "أسلوب الاستثناء",
    titleFr: "Les exceptions (الاستثناء)",
    description: "Learn to express exceptions using إِلَّا and other particles",
    descriptionAr: "تعلم التعبير عن الاستثناءات باستخدام إلا وجزيئات أخرى",
    descriptionFr: "Apprenez à exprimer les exceptions avec إِلَّا et d'autres particules",
    objectives: ["Use إِلَّا correctly", "Apply case rules for exceptions", "Use other exception words", "Form complete exception statements"],
    objectivesAr: ["فهم الاستثناء في العربية", "التعرف على أدوات الاستثناء", "بناء جمل استثنائية صحيحة", "ممارسة الاستثناءات"],
    objectivesFr: ["Utiliser إِلَّا correctement", "Appliquer les règles de cas pour les exceptions", "Utiliser d'autres mots d'exception", "Former des déclarations d'exception complètes"],
    estimatedTime: 50, difficulty: "medium", xpReward: 65,
    content: {
      theory: [
        { title: "Exception with إِلَّا", titleAr: "الاستثناء بـ إلا", titleFr: "Exception avec إِلَّا", content: "جَاءَ الطُّلَّابُ إِلَّا أَحْمَدَ\nThe students came except Ahmad\n\nAfter إِلَّا: accusative case", contentAr: "جَاءَ الطُّلَّابُ إِلَّا أَحْمَدَ\nجاء الطلاب إلا أحمد\n\nبعد إِلَّا: حالة نصب", contentFr: "جَاءَ الطُّلَّابُ إِلَّا أَحْمَدَ\nThe students came except Ahmad\n\nAprès إِلَّا: cas accusatif" },
        { title: "Other Exception Words", titleAr: "كلمات الاستثناء الأخرى", titleFr: "Autres mots d'exception", content: "غَيْر - other than\nسِوَى - except\nعَدَا - except\nخَلا - except\nحَاشَا - except (God forbid)", contentAr: "غَيْر - غير\nسِوَى - سوى، إلا\nعَدَا - عدا\nخَلا - خلا\nحَاشَا - حاشا", contentFr: "غَيْر - autre que\nسِوَى - sauf\nعَدَا - sauf\nخَلا - sauf\nحَاشَا - sauf (à Dieu ne plaise)" },
        { title: "Complete vs Incomplete", titleAr: "الاستثناء الموجب والمنفي", titleFr: "Complet vs incomplet", content: "Complete (positive): All came except X\nIncomplete (negative): None came except X\n\nIn incomplete, the exception follows the case of the main element:\nمَا جَاءَ إِلَّا أَحْمَدُ (nominative)", contentAr: "الموجب (الإيجاب): جاء الجميع إلا أحمد\nالمنفي (السالب): لم يأتِ أحد إلا أحمد\n\nفي المنفي، يتبع الاستثناء حالة العنصر الرئيسي:\nمَا جَاءَ إِلَّا أَحْمَدُ (مرفوع)", contentFr: "Complet (positif): Tous sont venus sauf X\nIncomplet (négatif): Aucun n'est venu sauf X\n\nDans l'incomplet, l'exception suit le cas de l'élément principal:\nمَا جَاءَ إِلَّا أَحْمَدُ (nominatif)" }
      ],
      vocabulary: [
        { arabic: "إِلَّا", transliteration: "illā", meaning: "except", meaningAr: "إلا", meaningFr: "sauf" },
        { arabic: "غَيْرَ", transliteration: "ghayra", meaning: "other than", meaningAr: "غير", meaningFr: "autre que" },
        { arabic: "سِوَى", transliteration: "siwā", meaning: "except/besides", meaningAr: "سوى، إلا", meaningFr: "sauf/à part" },
        { arabic: "بِاسْتِثْنَاءِ", transliteration: "bi-istithnā'i", meaning: "with the exception of", meaningAr: "باستثناء", meaningFr: "à l'exception de" },
        { arabic: "مَا عَدَا", transliteration: "mā 'adā", meaning: "except for", meaningAr: "ما عدا", meaningFr: "sauf" }
      ]
    },
    exerciseCount: 16, prerequisites: ["3-16"]
  },
  {
    id: "3-18", phaseId: 3, order: 18,
    title: "Emphasis & Assertion",
    titleAr: "أسلوب التوكيد",
    titleFr: "L'emphase et l'affirmation",
    description: "Learn emphatic constructions in Arabic",
    descriptionAr: "تعلم الإنشاءات التأكيدية في العربية",
    descriptionFr: "Apprenez les constructions emphatiques en arabe",
    objectives: ["Use لَ for emphasis", "Apply قَدْ correctly", "Use repetition for emphasis", "Form strong assertions"],
    objectivesAr: ["فهم طرق التأكيد المختلفة", "استخدام التأكيد في الجمل", "بناء جمل تأكيدية", "ممارسة التأكيد والإيكيد"],
    objectivesFr: ["Utiliser لَ pour l'emphase", "Appliquer قَدْ correctement", "Utiliser la répétition pour l'emphase", "Former des assertions fortes"],
    estimatedTime: 50, difficulty: "medium", xpReward: 65,
    content: {
      theory: [
        { title: "Emphatic Particles", titleAr: "الحروف التأكيدية", titleFr: "Particules emphatiques", content: "لَ - indeed (with verbs)\nإِنَّ - indeed (with nouns)\nلَقَدْ - certainly/indeed\nقَدْ - already/may", contentAr: "لَ - واللام التأكيدية\nإِنَّ - إن\nلَقَدْ - لقد\nقَدْ - قد", contentFr: "لَ - vraiment (avec les verbes)\nإِنَّ - vraiment (avec les noms)\nلَقَدْ - certainement/vraiment\nقَدْ - déjà/peut-être" },
        { title: "قَدْ Usage", titleAr: "استخدام قد", titleFr: "Utilisation de قَدْ", content: "With past verb: certainty/completion\nقَدْ فَعَلْتُ - I have indeed done\n\nWith present verb: possibility\nقَدْ يَأْتِي - He may come", contentAr: "مع الفعل الماضي: التأكيد/الاكتمال\nقَدْ فَعَلْتُ - قد فعلت\n\nمع الفعل المضارع: الاحتمالية\nقَدْ يَأْتِي - قد يأتي", contentFr: "Avec le verbe passé: certitude/accomplissement\nقَدْ فَعَلْتُ - I have indeed done\n\nAvec le verbe présent: possibilité\nقَدْ يَأْتِي - He may come" },
        { title: "Repetition Emphasis", titleAr: "التأكيد بالتكرار", titleFr: "Emphase par répétition", content: "Repeating words for emphasis:\nجَاءَ جَاءَ - He really came\nنَفْس - same/very: الكِتَابُ نَفْسُهُ - the book itself\nعَيْن - same: رَأَيْتُهُ بِعَيْنِي - I saw him with my own eyes", contentAr: "تكرار الكلمات للتأكيد:\nجَاءَ جَاءَ - جاء فعلا\nنَفْس - النفس: الكِتَابُ نَفْسُهُ - الكتاب ذاته\nعَيْن - العين: رَأَيْتُهُ بِعَيْنِي - رأيته بعيني", contentFr: "Répéter des mots pour l'emphase:\nجَاءَ جَاءَ - He really came\nنَفْس - même/très: الكِتَابُ نَفْسُهُ - the book itself\nعَيْن - même: رَأَيْتُهُ بِعَيْنِي - I saw him with my own eyes" }
      ],
      vocabulary: [
        { arabic: "لَقَدْ", transliteration: "laqad", meaning: "certainly/indeed", meaningAr: "لقد، والقاف للتأكيد", meaningFr: "certainement/vraiment" },
        { arabic: "قَدْ", transliteration: "qad", meaning: "already/may", meaningAr: "قد", meaningFr: "déjà/peut-être" },
        { arabic: "بِالفِعْلِ", transliteration: "bil-fi'l", meaning: "actually/indeed", meaningAr: "بالفعل، فعلا", meaningFr: "en fait/vraiment" },
        { arabic: "حَقًّا", transliteration: "ḥaqqan", meaning: "truly/really", meaningAr: "حقا، صدقا", meaningFr: "vraiment/réellement" },
        { arabic: "فِعْلًا", transliteration: "fi'lan", meaning: "really/actually", meaningAr: "فعلا، حقا", meaningFr: "vraiment/en réalité" }
      ]
    },
    exerciseCount: 16, prerequisites: ["3-17"]
  },
  // SECTION 4: VOCABULARY EXPANSION (Lessons 19-24)
  {
    id: "3-19", phaseId: 3, order: 19,
    title: "Work & Professions",
    titleAr: "العمل والمهن",
    titleFr: "Le travail et les professions",
    description: "Learn vocabulary for workplace and professions",
    descriptionAr: "تعلم مفردات مكان العمل والمهن",
    descriptionFr: "Apprenez le vocabulaire du lieu de travail et des professions",
    objectives: ["Name common professions", "Describe work activities", "Discuss career topics", "Use professional vocabulary"],
    objectivesAr: ["فهم مفردات العمل والمهن", "وصف المهن والوظائف", "التحدث عن مكان العمل", "استخدام مفردات العمل في السياقات"],
    objectivesFr: ["Nommer les professions courantes", "Décrire les activités de travail", "Discuter des sujets de carrière", "Utiliser le vocabulaire professionnel"],
    estimatedTime: 45, difficulty: "medium", xpReward: 60,
    content: {
      theory: [
        { title: "Professions Pattern", titleAr: "نمط المهن", titleFr: "Modèle des professions", content: "Many professions use فَعَّال pattern:\nنَجَّار - carpenter\nحَدَّاد - blacksmith\nخَبَّاز - baker\n\nOr مُفَعِّل:\nمُهَنْدِس - engineer\nمُمَرِّض - nurse\nمُدَرِّس - teacher", contentAr: "العديد من المهن تستخدم نمط فَعَّال:\nنَجَّار - نجار\nحَدَّاد - حداد\nخَبَّاز - خباز\n\nأو مُفَعِّل:\nمُهَنْدِس - مهندس\nمُمَرِّض - ممرض\nمُدَرِّس - مدرس", contentFr: "De nombreuses professions utilisent le modèle فَعَّال:\nنَجَّار - charpentier\nحَدَّاد - forgeron\nخَبَّاز - boulanger\n\nOu مُفَعِّل:\nمُهَنْدِس - ingénieur\nمُمَرِّض - infirmier\nمُدَرِّس - professeur" },
        { title: "Workplace Terms", titleAr: "مفردات مكان العمل", titleFr: "Termes du lieu de travail", content: "مَكْتَب - office\nشَرِكَة - company\nمَصْنَع - factory\nمَتْجَر - store\nمُسْتَشْفَى - hospital", contentAr: "مَكْتَب - مكتب\nشَرِكَة - شركة\nمَصْنَع - مصنع\nمَتْجَر - متجر\nمُسْتَشْفَى - مستشفى", contentFr: "مَكْتَب - bureau\nشَرِكَة - entreprise\nمَصْنَع - usine\nمَتْجَر - magasin\nمُسْتَشْفَى - hôpital" }
      ],
      vocabulary: [
        { arabic: "طَبِيب", transliteration: "ṭabīb", meaning: "doctor", meaningAr: "طبيب", meaningFr: "médecin" },
        { arabic: "مُحَامٍ", transliteration: "muḥāmin", meaning: "lawyer", meaningAr: "محامي", meaningFr: "avocat" },
        { arabic: "صَحَفِيّ", transliteration: "ṣaḥafī", meaning: "journalist", meaningAr: "صحفي", meaningFr: "journaliste" },
        { arabic: "مُوَظَّف", transliteration: "muwaẓẓaf", meaning: "employee", meaningAr: "موظف", meaningFr: "employé" },
        { arabic: "مُدِير", transliteration: "mudīr", meaning: "manager", meaningAr: "مدير", meaningFr: "gestionnaire" },
        { arabic: "رَاتِب", transliteration: "rātib", meaning: "salary", meaningAr: "راتب، أجرة", meaningFr: "salaire" }
      ]
    },
    exerciseCount: 15, prerequisites: ["3-18"]
  },
  {
    id: "3-20", phaseId: 3, order: 20,
    title: "Education & Learning",
    titleAr: "التعليم والتعلم",
    titleFr: "L'éducation et l'apprentissage",
    description: "Vocabulary for academic and educational contexts",
    descriptionAr: "مفردات للسياقات الأكاديمية والتعليمية",
    descriptionFr: "Vocabulaire pour les contextes académiques et éducatifs",
    objectives: ["Describe educational systems", "Discuss studies and exams", "Talk about school life", "Use academic vocabulary"],
    objectivesAr: ["فهم مفردات التعليم", "وصف الأنشطة الأكاديمية", "التحدث عن التعليم والمدارس", "استخدام مفردات التعليم"],
    objectivesFr: ["Décrire les systèmes éducatifs", "Discuter les études et les examens", "Parler de la vie scolaire", "Utiliser le vocabulaire académique"],
    estimatedTime: 45, difficulty: "medium", xpReward: 60,
    content: {
      theory: [
        { title: "Educational Levels", titleAr: "مستويات التعليم", titleFr: "Niveaux éducatifs", content: "رَوْضَة - kindergarten\nاِبْتِدَائِيَّة - primary school\nثَانَوِيَّة - secondary school\nجَامِعَة - university\nمَعْهَد - institute", contentAr: "رَوْضَة - روضة الأطفال\nاِبْتِدَائِيَّة - المدرسة الابتدائية\nثَانَوِيَّة - المدرسة الثانوية\nجَامِعَة - الجامعة\nمَعْهَد - المعهد", contentFr: "رَوْضَة - maternelle\nاِبْتِدَائِيَّة - école primaire\nثَانَوِيَّة - école secondaire\nجَامِعَة - université\nمَعْهَد - institut" },
        { title: "Academic Terms", titleAr: "المصطلحات الأكاديمية", titleFr: "Termes académiques", content: "اِمْتِحَان - exam\nدَرَجَة - grade/degree\nشَهَادَة - certificate\nفَصْل - semester/class\nمَادَّة - subject", contentAr: "اِمْتِحَان - امتحان\nدَرَجَة - درجة/شهادة\nشَهَادَة - شهادة\nفَصْل - فصل دراسي\nمَادَّة - مادة دراسية", contentFr: "اِمْتِحَان - examen\nدَرَجَة - note/diplôme\nشَهَادَة - certificat\nفَصْل - semestre/classe\nمَادَّة - sujet/matière" }
      ],
      vocabulary: [
        { arabic: "طَالِب", transliteration: "ṭālib", meaning: "student", meaningAr: "طالب", meaningFr: "étudiant" },
        { arabic: "أُسْتَاذ", transliteration: "ustādh", meaning: "professor", meaningAr: "أستاذ", meaningFr: "professeur" },
        { arabic: "مُحَاضَرَة", transliteration: "muḥāḍara", meaning: "lecture", meaningAr: "محاضرة", meaningFr: "conférence" },
        { arabic: "بَحْث", transliteration: "baḥth", meaning: "research", meaningAr: "بحث", meaningFr: "recherche" },
        { arabic: "تَخَرَّجَ", transliteration: "takharraja", meaning: "to graduate", meaningAr: "تخرج", meaningFr: "obtenir son diplôme" },
        { arabic: "دَرَسَ", transliteration: "darasa", meaning: "to study", meaningAr: "درس", meaningFr: "étudier" }
      ]
    },
    exerciseCount: 15, prerequisites: ["3-19"]
  },
  {
    id: "3-21", phaseId: 3, order: 21,
    title: "Travel & Tourism",
    titleAr: "السفر والسياحة",
    titleFr: "Les voyages et le tourisme",
    description: "Essential vocabulary for traveling",
    descriptionAr: "مفردات أساسية للسفر والسياحة",
    descriptionFr: "Vocabulaire essentiel pour les voyages",
    objectives: ["Book travel arrangements", "Navigate airports", "Describe destinations", "Handle travel situations"],
    objectivesAr: ["فهم مفردات السفر", "التحدث عن وسائل النقل", "وصف الوجهات السياحية", "بناء حوارات سفر"],
    objectivesFr: ["Réserver les arrangements de voyage", "Naviguer dans les aéroports", "Décrire les destinations", "Gérer les situations de voyage"],
    estimatedTime: 45, difficulty: "medium", xpReward: 60,
    content: {
      theory: [
        { title: "Travel Vocabulary", titleAr: "مفردات السفر", titleFr: "Vocabulaire de voyage", content: "سَفَر - travel\nرِحْلَة - trip\nحَجْز - reservation\nتَذْكَرَة - ticket\nجَوَاز سَفَر - passport", contentAr: "سَفَر - سفر\nرِحْلَة - رحلة\nحَجْز - حجز\nتَذْكَرَة - تذكرة\nجَوَاز سَفَر - جواز سفر", contentFr: "سَفَر - voyage\nرِحْلَة - voyage\nحَجْز - réservation\nتَذْكَرَة - billet\nجَوَاز سَفَر - passeport" },
        { title: "At the Airport", titleAr: "في المطار", titleFr: "À l'aéroport", content: "مَطَار - airport\nطَائِرَة - airplane\nإِقْلَاع - takeoff\nهُبُوط - landing\nتَأْشِيرَة - visa", contentAr: "مَطَار - مطار\nطَائِرَة - طائرة\nإِقْلَاع - إقلاع\nهُبُوط - هبوط\nتَأْشِيرَة - تأشيرة", contentFr: "مَطَار - aéroport\nطَائِرَة - avion\nإِقْلَاع - décollage\nهُبُوط - atterrissage\nتَأْشِيرَة - visa" }
      ],
      vocabulary: [
        { arabic: "فُنْدُق", transliteration: "funduq", meaning: "hotel", meaningAr: "فندق", meaningFr: "hôtel" },
        { arabic: "غُرْفَة", transliteration: "ghurfa", meaning: "room", meaningAr: "غرفة", meaningFr: "chambre" },
        { arabic: "حَقِيبَة", transliteration: "ḥaqība", meaning: "bag/suitcase", meaningAr: "حقيبة", meaningFr: "sac/valise" },
        { arabic: "سَائِح", transliteration: "sā'iḥ", meaning: "tourist", meaningAr: "سائح", meaningFr: "touriste" },
        { arabic: "مَعْلَم", transliteration: "ma'lam", meaning: "landmark", meaningAr: "معلم سياحي", meaningFr: "monument" },
        { arabic: "خَرِيطَة", transliteration: "kharīṭa", meaning: "map", meaningAr: "خريطة", meaningFr: "carte" }
      ]
    },
    exerciseCount: 15, prerequisites: ["3-20"]
  },
  {
    id: "3-22", phaseId: 3, order: 22,
    title: "Health & Medicine",
    titleAr: "الصحة والطب",
    titleFr: "La santé et la médecine",
    description: "Medical vocabulary and health expressions",
    descriptionAr: "مفردات الطب والتعبيرات الصحية",
    descriptionFr: "Vocabulaire médical et expressions liées à la santé",
    objectives: ["Describe symptoms", "Understand medical terms", "Visit a doctor", "Discuss health topics"],
    objectivesAr: ["فهم مفردات الصحة", "وصف الأعراض والأمراض", "التحدث عن الطب والعلاج", "استخدام المفردات الطبية"],
    objectivesFr: ["Décrire les symptômes", "Comprendre les termes médicaux", "Visiter un médecin", "Discuter les sujets de santé"],
    estimatedTime: 45, difficulty: "medium", xpReward: 60,
    content: {
      theory: [
        { title: "Body Parts Review", titleAr: "Body Parts Review", titleFr: "Révision des parties du corps", content: "رَأْس - head\nصَدْر - chest\nمَعِدَة - stomach\nظَهْر - back\nقَلْب - heart", contentFr: "رَأْس - tête\nصَدْر - poitrine\nمَعِدَة - estomac\nظَهْر - dos\nقَلْب - cœur" },
        { title: "Symptoms & Conditions", titleAr: "Symptoms & Conditions", titleFr: "Symptômes et conditions", content: "أَلَم - pain\nحُمَّى - fever\nصُدَاع - headache\nزُكَام - cold\nسُعَال - cough", contentFr: "أَلَم - douleur\nحُمَّى - fièvre\nصُدَاع - mal de tête\nزُكَام - rhume\nسُعَال - toux" }
      ],
      vocabulary: [
        { arabic: "مَرِيض", transliteration: "marīḍ", meaning: "patient/sick", meaningAr: "مريض، عليل", meaningFr: "patient/malade" },
        { arabic: "دَوَاء", transliteration: "dawā'", meaning: "medicine", meaningAr: "دواء", meaningFr: "médicament" },
        { arabic: "صَيْدَلِيَّة", transliteration: "ṣaydaliyya", meaning: "pharmacy", meaningAr: "صيدلية", meaningFr: "pharmacie" },
        { arabic: "عِلَاج", transliteration: "'ilāj", meaning: "treatment", meaningAr: "علاج", meaningFr: "traitement" },
        { arabic: "عَمَلِيَّة", transliteration: "'amaliyya", meaning: "surgery", meaningAr: "عملية جراحية", meaningFr: "chirurgie" },
        { arabic: "مَوْعِد", transliteration: "maw'id", meaning: "appointment", meaningAr: "موعد", meaningFr: "rendez-vous" }
      ]
    },
    exerciseCount: 15, prerequisites: ["3-21"]
  },
  {
    id: "3-23", phaseId: 3, order: 23,
    title: "Technology & Internet",
    titleAr: "التكنولوجيا والإنترنت",
    titleFr: "La technologie et Internet",
    description: "Modern technology vocabulary",
    descriptionAr: "مفردات التكنولوجيا الحديثة",
    descriptionFr: "Vocabulaire de la technologie moderne",
    objectives: ["Discuss technology topics", "Use internet terminology", "Describe devices", "Navigate digital world"],
    objectivesAr: ["فهم مفردات التكنولوجيا", "وصف الأجهزة والتطبيقات", "التحدث عن الإنترنت", "استخدام مفردات التكنولوجيا"],
    objectivesFr: ["Discuter des sujets technologiques", "Utiliser la terminologie d'Internet", "Décrire les appareils", "Naviguer dans le monde numérique"],
    estimatedTime: 45, difficulty: "medium", xpReward: 60,
    content: {
      theory: [
        { title: "Devices", titleAr: "الأجهزة", titleFr: "Appareils", content: "حَاسُوب - computer\nهَاتِف ذَكِيّ - smartphone\nلَوْحَة - tablet\nشَاشَة - screen\nلَوْحَة مَفَاتِيح - keyboard", contentAr: "حَاسُوب - حاسوب\nهَاتِف ذَكِيّ - هاتف ذكي\nلَوْحَة - لوحة\nشَاشَة - شاشة\nلَوْحَة مَفَاتِيح - لوحة مفاتيح", contentFr: "حَاسُوب - ordinateur\nهَاتِف ذَكِيّ - téléphone intelligent\nلَوْحَة - tablette\nشَاشَة - écran\nلَوْحَة مَفَاتِيح - clavier" },
        { title: "Internet Terms", titleAr: "مصطلحات الإنترنت", titleFr: "Termes d'Internet", content: "إِنْتَرْنِت - internet\nمَوْقِع - website\nبَرِيد إِلِكْتْرُونِيّ - email\nتَطْبِيق - application\nتَحْمِيل - download", contentAr: "إِنْتَرْنِت - إنترنت\nمَوْقِع - موقع\nبَرِيد إِلِكْتْرُونِيّ - بريد إلكتروني\nتَطْبِيق - تطبيق\nتَحْمِيل - تحميل", contentFr: "إِنْتَرْنِت - internet\nمَوْقِع - site Web\nبَرِيد إِلِكْتْرُونِيّ - e-mail\nتَطْبِيق - application\nتَحْمِيل - téléchargement" }
      ],
      vocabulary: [
        { arabic: "بَرْنَامَج", transliteration: "barnāmaj", meaning: "program/software", meaningAr: "برنامج/برمجية", meaningFr: "programme/logiciel" },
        { arabic: "شَبَكَة", transliteration: "shabaka", meaning: "network", meaningAr: "شبكة", meaningFr: "réseau" },
        { arabic: "كَلِمَة سِرّ", transliteration: "kalimat sirr", meaning: "password", meaningAr: "كلمة سر", meaningFr: "mot de passe" },
        { arabic: "حِسَاب", transliteration: "ḥisāb", meaning: "account", meaningAr: "حساب", meaningFr: "compte" },
        { arabic: "رِسَالَة", transliteration: "risāla", meaning: "message", meaningAr: "رسالة", meaningFr: "message" },
        { arabic: "مُشَارَكَة", transliteration: "mushāraka", meaning: "sharing", meaningAr: "مشاركة", meaningFr: "partage" }
      ]
    },
    exerciseCount: 15, prerequisites: ["3-22"]
  },
  {
    id: "3-24", phaseId: 3, order: 24,
    title: "Environment & Nature",
    titleAr: "البيئة والطبيعة",
    titleFr: "L'environnement et la nature",
    description: "Environmental and nature vocabulary",
    descriptionAr: "مفردات البيئة والطبيعة",
    descriptionFr: "Vocabulaire de l'environnement et de la nature",
    objectives: ["Describe natural features", "Discuss environmental issues", "Talk about weather", "Use nature vocabulary"],
    objectivesAr: ["فهم مفردات البيئة", "وصف الطبيعة والمناظر", "التحدث عن البيئة", "استخدام مفردات الطبيعة"],
    objectivesFr: ["Décrire les caractéristiques naturelles", "Discuter les questions environnementales", "Parler de la météo", "Utiliser le vocabulaire de la nature"],
    estimatedTime: 45, difficulty: "medium", xpReward: 60,
    content: {
      theory: [
        { title: "Natural Features", titleAr: "المعالم الطبيعية", titleFr: "Caractéristiques naturelles", content: "جَبَل - mountain\nنَهْر - river\nبَحْر - sea\nصَحْرَاء - desert\nغَابَة - forest", contentAr: "جَبَل - جبل\nنَهْر - نهر\nبَحْر - بحر\nصَحْرَاء - صحراء\nغَابَة - غابة", contentFr: "جَبَل - montagne\nنَهْر - rivière\nبَحْر - mer\nصَحْرَاء - désert\nغَابَة - forêt" },
        { title: "Environmental Issues", titleAr: "قضايا بيئية", titleFr: "Questions environnementales", content: "تَلَوُّث - pollution\nإِعَادَة تَدْوِير - recycling\nاِحْتِبَاس حَرَارِيّ - global warming\nطَاقَة مُتَجَدِّدَة - renewable energy", contentAr: "تَلَوُّث - تلوث\nإِعَادَة تَدْوِير - إعادة تدوير\nاِحْتِبَاس حَرَارِيّ - احتباس حراري\nطَاقَة مُتَجَدِّدَة - طاقة متجددة", contentFr: "تَلَوُّث - pollution\nإِعَادَة تَدْوِير - recyclage\nاِحْتِبَاس حَرَارِيّ - réchauffement climatique\nطَاقَة مُتَجَدِّدَة - énergie renouvelable" }
      ],
      vocabulary: [
        { arabic: "طَبِيعَة", transliteration: "ṭabī'a", meaning: "nature", meaningAr: "طبيعة", meaningFr: "nature" },
        { arabic: "بِيئَة", transliteration: "bī'a", meaning: "environment", meaningAr: "بيئة", meaningFr: "environnement" },
        { arabic: "مُنَاخ", transliteration: "munākh", meaning: "climate", meaningAr: "مناخ", meaningFr: "climat" },
        { arabic: "حَيَوَان", transliteration: "ḥayawān", meaning: "animal", meaningAr: "حيوان", meaningFr: "animal" },
        { arabic: "نَبَات", transliteration: "nabāt", meaning: "plant", meaningAr: "نبات", meaningFr: "plante" },
        { arabic: "شَجَرَة", transliteration: "shajara", meaning: "tree", meaningAr: "شجرة", meaningFr: "arbre" }
      ]
    },
    exerciseCount: 15, prerequisites: ["3-23"]
  },
  // SECTION 5: READING & WRITING SKILLS (Lessons 25-30)
  {
    id: "3-25", phaseId: 3, order: 25,
    title: "Reading News Articles",
    titleAr: "قراءة المقالات الإخبارية",
    titleFr: "Lire des articles de presse",
    description: "Learn to read and understand Arabic news",
    descriptionAr: "تعلم قراءة وفهم الأخبار العربية",
    descriptionFr: "Apprenez à lire et comprendre les actualités en arabe",
    objectives: ["Understand news structure", "Recognize journalistic vocabulary", "Extract main ideas", "Summarize articles"],
    objectivesAr: ["فهم لغة الأخبار", "قراءة المقالات الإخبارية", "فهم الأخبار المعقدة", "تحليل الأخبار"],
    objectivesFr: ["Comprendre la structure des nouvelles", "Reconnaître le vocabulaire journalistique", "Extraire les idées principales", "Résumer les articles"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "News Structure", titleAr: "بنية الأخبار", titleFr: "Structure des nouvelles", content: "عُنْوَان - headline\nمُقَدِّمَة - introduction\nتَفَاصِيل - details\nخَاتِمَة - conclusion", contentFr: "عُنْوَان - titre\nمُقَدِّمَة - introduction\nتَفَاصِيل - détails\nخَاتِمَة - conclusion" },
        { title: "Common News Vocabulary", titleAr: "المفردات الإخبارية الشائعة", titleFr: "Vocabulaire courant des nouvelles", content: "أَعْلَنَ - announced\nصَرَّحَ - declared\nأَكَّدَ - confirmed\nنَفَى - denied\nوَفْقًا لِـ - according to", contentFr: "أَعْلَنَ - annoncé\nصَرَّحَ - déclaré\nأَكَّدَ - confirmé\nنَفَى - nié\nوَفْقًا لِـ - selon" }
      ],
      vocabulary: [
        { arabic: "خَبَر", transliteration: "khabar", meaning: "news", meaningAr: "news", meaningFr: "nouvelle" },
        { arabic: "مَصْدَر", transliteration: "maṣdar", meaning: "source", meaningAr: "source", meaningFr: "source" },
        { arabic: "تَقْرِير", transliteration: "taqrīr", meaning: "report", meaningAr: "report", meaningFr: "rapport" },
        { arabic: "مُؤْتَمَر صَحَفِيّ", transliteration: "mu'tamar ṣaḥafī", meaning: "press conference", meaningAr: "press conference", meaningFr: "conférence de presse" },
        { arabic: "بَيَان", transliteration: "bayān", meaning: "statement", meaningAr: "statement", meaningFr: "déclaration" },
        { arabic: "حَدَث", transliteration: "ḥadath", meaning: "event", meaningAr: "event", meaningFr: "événement" }
      ]
    },
    exerciseCount: 17, prerequisites: ["3-24"]
  },
  {
    id: "3-26", phaseId: 3, order: 26,
    title: "Reading Short Stories",
    titleAr: "قراءة القصص القصيرة",
    titleFr: "Lire des nouvelles",
    description: "Develop skills for reading Arabic fiction",
    descriptionAr: "تطوير مهارات قراءة الأدب العربي",
    descriptionFr: "Développez vos compétences en lecture de fiction arabe",
    objectives: ["Understand narrative structure", "Identify literary devices", "Analyze characters", "Appreciate style"],
    objectivesAr: ["فهم القصص القصيرة", "قراءة النصوص الأدبية", "تحليل الأساليب الأدبية", "نقد القصص القصيرة"],
    objectivesFr: ["Comprendre la structure narrative", "Identifier les devices littéraires", "Analyser les caractères", "Apprécier le style"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Story Elements", titleAr: "عناصر القصة", titleFr: "Éléments de l'histoire", content: "شَخْصِيَّة - character\nحَبْكَة - plot\nمَكَان - setting\nذُرْوَة - climax\nنِهَايَة - ending", contentFr: "شَخْصِيَّة - personnage\nحَبْكَة - intrigue\nمَكَان - cadre\nذُرْوَة - climax\nنِهَايَة - fin" },
        { title: "Narrative Vocabulary", titleAr: "المفردات السردية", titleFr: "Vocabulaire narratif", content: "رَاوٍ - narrator\nبَطَل - hero/protagonist\nحِوَار - dialogue\nوَصْف - description", contentFr: "رَاوٍ - narrateur\nبَطَل - héros/protagoniste\nحِوَار - dialogue\nوَصْف - description" }
      ],
      vocabulary: [
        { arabic: "قِصَّة", transliteration: "qiṣṣa", meaning: "story", meaningAr: "قصة", meaningFr: "histoire" },
        { arabic: "رِوَايَة", transliteration: "riwāya", meaning: "novel", meaningAr: "رواية", meaningFr: "roman" },
        { arabic: "كَاتِب", transliteration: "kātib", meaning: "writer", meaningAr: "كاتب", meaningFr: "écrivain" },
        { arabic: "فَصْل", transliteration: "faṣl", meaning: "chapter", meaningAr: "فصل", meaningFr: "chapitre" },
        { arabic: "مَشْهَد", transliteration: "mashhad", meaning: "scene", meaningAr: "مشهد", meaningFr: "scène" },
        { arabic: "حَدَثَ", transliteration: "ḥadatha", meaning: "happened", meaningAr: "حدث", meaningFr: "s'est passé" }
      ]
    },
    exerciseCount: 17, prerequisites: ["3-25"]
  },
  {
    id: "3-27", phaseId: 3, order: 27,
    title: "Writing Paragraphs",
    titleAr: "كتابة الفقرات",
    titleFr: "Rédiger des paragraphes",
    description: "Learn to write coherent paragraphs in Arabic",
    descriptionAr: "تعلم كتابة فقرات متماسكة باللغة العربية",
    descriptionFr: "Apprenez à rédiger des paragraphes cohérents en arabe",
    objectives: ["Structure paragraphs properly", "Use topic sentences", "Develop supporting ideas", "Write conclusions"],
    objectivesAr: ["فهم بنية الفقرة", "كتابة فقرات واضحة", "استخدام الرابط والجسور", "ممارسة الكتابة الفقرية"],
    objectivesFr: ["Structurer les paragraphes correctement", "Utiliser les phrases sujet", "Développer les idées de soutien", "Rédiger les conclusions"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Paragraph Structure", titleAr: "بنية الفقرة", titleFr: "Structure du paragraphe", content: "جُمْلَة رَئِيسِيَّة - Topic sentence\nجُمَل دَاعِمَة - Supporting sentences\nخَاتِمَة - Concluding sentence", contentFr: "جُمْلَة رَئِيسِيَّة - Phrase sujet\nجُمَل دَاعِمَة - Phrases de soutien\nخَاتِمَة - Phrase de conclusion" },
        { title: "Transition Words", titleAr: "كلمات الربط", titleFr: "Mots de transition", content: "أَوَّلًا - firstly\nثَانِيًا - secondly\nبِالإِضَافَةِ إِلَى - in addition to\nعِلَاوَةً عَلَى - moreover\nفِي الخِتَام - in conclusion", contentFr: "أَوَّلًا - premièrement\nثَانِيًا - deuxièmement\nبِالإِضَافَةِ إِلَى - en plus\nعِلَاوَةً عَلَى - de plus\nفِي الخِتَام - en conclusion" }
      ],
      vocabulary: [
        { arabic: "فِقْرَة", transliteration: "fiqra", meaning: "paragraph", meaningAr: "فقرة", meaningFr: "paragraphe" },
        { arabic: "فِكْرَة", transliteration: "fikra", meaning: "idea", meaningAr: "فكرة", meaningFr: "idée" },
        { arabic: "حُجَّة", transliteration: "ḥujja", meaning: "argument", meaningAr: "حجة", meaningFr: "argument" },
        { arabic: "مِثَال", transliteration: "mithāl", meaning: "example", meaningAr: "مثال", meaningFr: "exemple" },
        { arabic: "دَلِيل", transliteration: "dalīl", meaning: "evidence", meaningAr: "دليل", meaningFr: "preuve" },
        { arabic: "اِسْتِنْتَاج", transliteration: "istintāj", meaning: "conclusion", meaningAr: "استنتاج", meaningFr: "conclusion" }
      ]
    },
    exerciseCount: 17, prerequisites: ["3-26"]
  },
  {
    id: "3-28", phaseId: 3, order: 28,
    title: "Writing Formal Letters",
    titleAr: "كتابة الرسائل الرسمية",
    titleFr: "Rédiger des lettres formelles",
    description: "Master formal letter writing in Arabic",
    descriptionAr: "اتقن كتابة الرسائل الرسمية باللغة العربية",
    descriptionFr: "Maîtrisez la rédaction de lettres formelles en arabe",
    objectives: ["Use formal greetings", "Structure letters properly", "Use appropriate register", "Write professional emails"],
    objectivesAr: ["فهم بنية الرسالة الرسمية", "استخدام الصيغ الرسمية", "كتابة الرسائل الاحترافية", "ممارسة كتابة الرسائل"],
    objectivesFr: ["Utiliser les salutations formelles", "Structurer les lettres correctement", "Utiliser un registre approprié", "Rédiger des emails professionnels"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Letter Structure", titleAr: "بنية الرسالة", titleFr: "Structure de la lettre", content: "التَّحِيَّة - Greeting\nالمُقَدِّمَة - Introduction\nالمَوْضُوع - Body\nالخَاتِمَة - Closing\nالتَّوْقِيع - Signature", contentFr: "التَّحِيَّة - Salutation\nالمُقَدِّمَة - Introduction\nالمَوْضُوع - Corps\nالخَاتِمَة - Fermeture\nالتَّوْقِيع - Signature" },
        { title: "Formal Expressions", titleAr: "الصيغ الرسمية", titleFr: "Expressions formelles", content: "سَعَادَة / حَضْرَة - Dear (formal)\nتَحِيَّة طَيِّبَة - Kind regards\nمَعَ فَائِقِ الاِحْتِرَام - With utmost respect\nأَرْجُو مِنْ سِيَادَتِكُم - I request from you", contentFr: "سَعَادَة / حَضْرَة - Cher (formel)\nتَحِيَّة طَيِّبَة - Cordialement\nمَعَ فَائِقِ الاِحْتِرَام - Avec mon plus profond respect\nأَرْجُو مِنْ سِيَادَتِكُم - Je vous demande" }
      ],
      vocabulary: [
        { arabic: "رِسَالَة رَسْمِيَّة", transliteration: "risāla rasmiyya", meaning: "formal letter", meaningAr: "رسالة رسمية", meaningFr: "lettre formelle" },
        { arabic: "مُرْفَق", transliteration: "murfaq", meaning: "attachment", meaningAr: "مرفق", meaningFr: "pièce jointe" },
        { arabic: "نَسْخَة", transliteration: "nuskha", meaning: "copy", meaningAr: "نسخة", meaningFr: "copie" },
        { arabic: "طَلَب", transliteration: "ṭalab", meaning: "request", meaningAr: "طلب", meaningFr: "demande" },
        { arabic: "شَكْوَى", transliteration: "shakwā", meaning: "complaint", meaningAr: "شكوى", meaningFr: "plainte" },
        { arabic: "رَدّ", transliteration: "radd", meaning: "reply", meaningAr: "رد", meaningFr: "réponse" }
      ]
    },
    exerciseCount: 17, prerequisites: ["3-27"]
  },
  {
    id: "3-29", phaseId: 3, order: 29,
    title: "Writing Essays",
    titleAr: "كتابة المقالات",
    titleFr: "Rédiger des essais",
    description: "Learn to write structured essays",
    descriptionAr: "تعلم كتابة مقالات منظمة باللغة العربية",
    descriptionFr: "Apprenez à rédiger des essais structurés",
    objectives: ["Plan essay structure", "Develop arguments", "Use evidence", "Write introductions and conclusions"],
    objectivesAr: ["فهم بنية المقالة", "تنظيم الأفكار بشكل منطقي", "كتابة مقالات واضحة", "ممارسة كتابة المقالات"],
    objectivesFr: ["Planifier la structure des essais", "Développer des arguments", "Utiliser des preuves", "Rédiger des introductions et conclusions"],
    estimatedTime: 55, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "Essay Structure", titleAr: "بنية المقالة", titleFr: "Structure des essais", content: "مُقَدِّمَة - Introduction (thesis statement)\nجِسْم المَقَال - Body (arguments + evidence)\nخَاتِمَة - Conclusion (summary + final thought)", contentFr: "مُقَدِّمَة - Introduction (énoncé de thèse)\nجِسْم المَقَال - Corps (arguments + preuves)\nخَاتِمَة - Conclusion (résumé + pensée finale)" },
        { title: "Argumentative Language", titleAr: "لغة الحجج", titleFr: "Langage argumentatif", content: "مِنْ نَاحِيَةٍ - on one hand\nمِنْ نَاحِيَةٍ أُخْرَى - on the other hand\nوَمَعَ ذَلِكَ - nevertheless\nبِالتَّالِي - therefore", contentFr: "مِنْ نَاحِيَةٍ - d'un côté\nمِنْ نَاحِيَةٍ أُخْرَى - de l'autre côté\nوَمَعَ ذَلِكَ - néanmoins\nبِالتَّالِي - par conséquent" }
      ],
      vocabulary: [
        { arabic: "مَقَال", transliteration: "maqāl", meaning: "essay/article", meaningAr: "مقال", meaningFr: "essai/article" },
        { arabic: "أُطْرُوحَة", transliteration: "uṭrūḥa", meaning: "thesis", meaningAr: "أطروحة", meaningFr: "thèse" },
        { arabic: "رَأْي", transliteration: "ra'y", meaning: "opinion", meaningAr: "رأي", meaningFr: "opinion" },
        { arabic: "تَحْلِيل", transliteration: "taḥlīl", meaning: "analysis", meaningAr: "تحليل", meaningFr: "analyse" },
        { arabic: "نَقْد", transliteration: "naqd", meaning: "criticism", meaningAr: "نقد", meaningFr: "critique" },
        { arabic: "خُلَاصَة", transliteration: "khulāṣa", meaning: "summary", meaningAr: "خلاصة", meaningFr: "résumé" }
      ]
    },
    exerciseCount: 18, prerequisites: ["3-28"]
  },
  {
    id: "3-30", phaseId: 3, order: 30,
    title: "Phase 3 Review & Assessment",
    titleAr: "مراجعة وتقييم المرحلة الثالثة",
    titleFr: "Révision et évaluation de la phase 3",
    description: "Comprehensive review of all Phase 3 material",
    descriptionAr: "مراجعة شاملة لجميع محتويات المرحلة الثالثة",
    descriptionFr: "Révision complète de tout le contenu de la phase 3",
    objectives: ["Review all verb forms", "Practice complex sentences", "Apply vocabulary in context", "Demonstrate reading and writing skills"],
    objectivesAr: ["مراجعة القواعد النحوية المتقدمة", "ممارسة الصيغ المختلفة", "تطبيق مهارات الكتابة", "تقييم التقدم في المرحلة الثالثة"],
    objectivesFr: ["Réviser toutes les formes verbales", "Pratiquer les phrases complexes", "Appliquer le vocabulaire en contexte", "Démontrer les compétences en lecture et écriture"],
    estimatedTime: 60, difficulty: "hard", xpReward: 100,
    content: {
      theory: [
        { title: "Verb Forms Summary", titleAr: "Verb Forms Summary", titleFr: "Résumé des formes verbales", content: "Forms II-X: causative, reciprocal, reflexive meanings\nMoods: Indicative, Subjunctive, Jussive, Imperative\nPassive voice patterns", contentFr: "Formes II-X: sens causatifs, réciproques, réfléchis\nModes: Indicatif, Subjonctif, Jussif, Impératif\nModèles de voix passive" },
        { title: "Grammar Review", titleAr: "Grammar Review", titleFr: "Révision de la grammaire", content: "Relative clauses with الَّذِي\nConditionals with إِنْ and إِذَا\nإِنَّ and its sisters\nException constructions", contentFr: "Clauses relatives avec الَّذِي\nConditionnelles avec إِنْ et إِذَا\nإِنَّ et ses sœurs\nConstructions d'exception" },
        { title: "Skills Checklist", titleAr: "Skills Checklist", titleFr: "Checklist des compétences", content: "✓ Advanced verb conjugation\n✓ Complex sentence formation\n✓ Expanded vocabulary (work, education, travel, health, tech, environment)\n✓ Reading news and stories\n✓ Writing paragraphs, letters, essays", contentFr: "✓ Conjugaison verbale avancée\n✓ Formation de phrases complexes\n✓ Vocabulaire étendu (travail, éducation, voyage, santé, technologie, environnement)\n✓ Lecture de nouvelles et d'histoires\n✓ Rédaction de paragraphes, lettres, essais" }
      ],
      vocabulary: [
        { arabic: "مُرَاجَعَة", transliteration: "murāja'a", meaning: "review", meaningAr: "مراجعة", meaningFr: "révision" },
        { arabic: "تَقْيِيم", transliteration: "taqyīm", meaning: "assessment", meaningAr: "تقييم", meaningFr: "évaluation" },
        { arabic: "إِنْجَاز", transliteration: "injāz", meaning: "achievement", meaningAr: "إنجاز", meaningFr: "réussite" },
        { arabic: "تَقَدُّم", transliteration: "taqaddum", meaning: "progress", meaningAr: "تقدم", meaningFr: "progrès" },
        { arabic: "مُسْتَوَى", transliteration: "mustawā", meaning: "level", meaningAr: "مستوى", meaningFr: "niveau" },
        { arabic: "اِسْتِعْدَاد", transliteration: "isti'dād", meaning: "readiness", meaningAr: "استعداد", meaningFr: "préparation" }
      ]
    },
    exerciseCount: 20, prerequisites: ["3-29"]
  }
];
