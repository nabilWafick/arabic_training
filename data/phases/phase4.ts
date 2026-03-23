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
    objectivesFr: ["Comprendre le nominatif, l'accusatif et le génitif", "Reconnaître les marqueurs de cas", "Appliquer les règles des cas", "Lire les textes classiques"],
    estimatedTime: 55, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "The Three Cases", titleFr: "Les trois cas", content: "مَرْفُوع (Nominative - subject): ـُ / ـٌ\nمَنْصُوب (Accusative - object): ـَ / ـً\nمَجْرُور (Genitive - after preposition): ـِ / ـٍ", contentFr: "مَرْفُوع (Nominatif - sujet) : ـُ / ـٌ\nمَنْصُوب (Accusatif - complément) : ـَ / ـً\nمَجْرُور (Génitif - après préposition) : ـِ / ـٍ" },
        { title: "When to Use Each", titleFr: "Quand utiliser chacun", content: "Nominative: Subject, predicate of nominal sentence\nAccusative: Object, adverbs, after إِنَّ sisters\nGenitive: After prepositions, in إضافة constructions", contentFr: "Nominatif : Sujet, prédicat de phrase nominale\nAccusatif : Complément, adverbes, après les sœurs de إِنَّ\nGénitif : Après prépositions, dans les constructions d'إضافة" },
        { title: "Diptotes (الممنوع من الصرف)", titleFr: "Les diptotes (الممنوع من الصرف)", content: "Some nouns don't take full case endings:\n• Names: أَحْمَدُ، فَاطِمَةُ\n• Colors: أَحْمَرُ، أَصْفَرُ\n• Patterns: أَفْعَلُ، مَفَاعِلُ", contentFr: "Certains noms ne prennent pas de désinences de cas complets :\n• Noms propres : أَحْمَدُ، فَاطِمَةُ\n• Couleurs : أَحْمَرُ، أَصْفَرُ\n• Schèmes : أَفْعَلُ، مَفَاعِلُ" }
      ],
      vocabulary: [
        { arabic: "مَرْفُوع", transliteration: "marfū'", meaning: "nominative case", meaningFr: "cas nominatif" },
        { arabic: "مَنْصُوب", transliteration: "manṣūb", meaning: "accusative case", meaningFr: "cas accusatif" },
        { arabic: "مَجْرُور", transliteration: "majrūr", meaning: "genitive case", meaningFr: "cas génitif" },
        { arabic: "فَاعِل", transliteration: "fā'il", meaning: "subject/doer", meaningFr: "sujet/agent" },
        { arabic: "مَفْعُول", transliteration: "maf'ūl", meaning: "object", meaningFr: "complément" }
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
    objectivesFr: ["Appliquer correctement la nunation", "Distinguer les types de tanween", "Utiliser avec les adjectifs", "Gérer les diptotes"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "What is Tanween?", titleFr: "Qu'est-ce que le tanween ?", content: "Nunation adds an 'n' sound to indefinite nouns:\nـٌ (un) - nominative: كِتَابٌ\nـً (an) - accusative: كِتَابًا\nـٍ (in) - genitive: كِتَابٍ", contentFr: "La nunation ajoute un son 'n' aux noms indéfinis :\nـٌ (un) - nominatif : كِتَابٌ\nـً (an) - accusatif : كِتَابًا\nـٍ (in) - génitif : كِتَابٍ" },
        { title: "When NOT to Use", titleFr: "Quand ne pas l'utiliser", content: "No tanween on:\n• Definite nouns (with الـ)\n• Diptotes (proper names, patterns)\n• Nouns in إضافة", contentFr: "Pas de tanween sur :\n• Les noms définis (avec الـ)\n• Les diptotes (noms propres, schèmes)\n• Les noms en إضافة" },
        { title: "Accusative Alif", titleFr: "Alif accusatif", content: "Most accusative tanween adds alif: ـًا\nExcept words ending in:\n• تاء مربوطة: مدرسةً\n• Alif: عصًا", contentFr: "La plupart des nunations accusatives ajoutent alif : ـًا\nSauf les mots se terminant par :\n• تاء مربوطة : مدرسةً\n• Alif : عصًا" }
      ],
      vocabulary: [
        { arabic: "تَنْوِين", transliteration: "tanwīn", meaning: "nunation", meaningFr: "nunation" },
        { arabic: "نَكِرَة", transliteration: "nakira", meaning: "indefinite", meaningFr: "indéfini" },
        { arabic: "مَعْرِفَة", transliteration: "ma'rifa", meaning: "definite", meaningFr: "défini" },
        { arabic: "مُنَوَّن", transliteration: "munawwan", meaning: "nunated", meaningFr: "nunaté" },
        { arabic: "غَيْر مُنَوَّن", transliteration: "ghayr munawwan", meaning: "non-nunated", meaningFr: "non nunaté" }
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
    objectivesFr: ["Former des chaînes d'إضافة complexes", "Distinguer les types d'إضافة", "Appliquer les règles de définitude", "Utiliser dans l'écriture formelle"],
    estimatedTime: 55, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "Idafa Structure", titleFr: "Structure de l'idafa", content: "مُضَاف + مُضَاف إِلَيْه\n• First noun loses tanween and الـ\n• Second noun takes genitive case\n• Whole phrase takes definiteness of second", contentFr: "مُضَاف + مُضَاف إِلَيْه\n• Le premier nom perd la nunation et الـ\n• Le deuxième nom prend le cas génitif\n• La phrase entière prend la définitude du second" },
        { title: "Chains", titleFr: "Chaînes", content: "Multiple إضافة:\nبَابُ بَيْتِ صَدِيقِي\nThe door of my friend's house\n(4 nouns in chain)", contentFr: "Multiples إضافة :\nبَابُ بَيْتِ صَدِيقِي\nLa porte de la maison de mon ami\n(4 noms en chaîne)" },
        { title: "Semantic Types", titleFr: "Types sémantiques", content: "Possession: كِتَابُ الطَّالِبِ\nDescription: رَجُلُ عِلْمٍ (a man of knowledge)\nApposition: مَدِينَةُ القَاهِرَةِ", contentFr: "Possession : كِتَابُ الطَّالِبِ\nDescription : رَجُلُ عِلْمٍ (un homme de savoir)\nApposition : مَدِينَةُ القَاهِرَةِ" }
      ],
      vocabulary: [
        { arabic: "مُضَاف", transliteration: "muḍāf", meaning: "annexed (first term)", meaningFr: "annexé (premier terme)" },
        { arabic: "مُضَاف إِلَيْه", transliteration: "muḍāf ilayh", meaning: "annexed to (second term)", meaningFr: "annexé à (second terme)" },
        { arabic: "إِضَافَة لَفْظِيَّة", transliteration: "iḍāfa lafẓiyya", meaning: "verbal idafa", meaningFr: "idafa verbale" },
        { arabic: "إِضَافَة مَعْنَوِيَّة", transliteration: "iḍāfa ma'nawiyya", meaning: "semantic idafa", meaningFr: "idafa sémantique" },
        { arabic: "سِلْسِلَة", transliteration: "silsila", meaning: "chain", meaningFr: "chaîne" }
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
    objectivesFr: ["Appliquer la règle d'inversion de genre (3-10)", "Utiliser les cas corrects", "Gérer 11-99", "Compter avec centaines/milliers"],
    estimatedTime: 55, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "Numbers 3-10", titleFr: "Nombres 3-10", content: "REVERSE gender agreement:\nثَلَاثَةُ رِجَالٍ - 3 men (feminine number + masculine plural genitive)\nثَلَاثُ نِسَاءٍ - 3 women (masculine number + feminine plural genitive)", contentFr: "INVERSION du genre :\nثَلَاثَةُ رِجَالٍ - 3 hommes (nombre féminin + génitif pluriel masculin)\nثَلَاثُ نِسَاءٍ - 3 femmes (nombre masculin + génitif pluriel féminin)" },
        { title: "Numbers 11-99", titleFr: "Nombres 11-99", content: "11-12: Special forms agree with counted\n13-19: Compound, reverse gender like 3-10\n20-99: Counted is singular accusative", contentFr: "11-12 : Formes spéciales qui s'accordent avec le compté\n13-19 : Composé, inversion de genre comme 3-10\n20-99 : Le compté est au singulier accusatif" },
        { title: "100s and 1000s", titleFr: "Centaines et milliers", content: "مِائَة/مِئَة - 100 (counted in genitive singular)\nأَلْف - 1000 (counted in genitive singular)", contentFr: "مِائَة/مِئَة - 100 (compté au génitif singulier)\nأَلْف - 1000 (compté au génitif singulier)" }
      ],
      vocabulary: [
        { arabic: "عَدَد", transliteration: "'adad", meaning: "number", meaningFr: "nombre" },
        { arabic: "مَعْدُود", transliteration: "ma'dūd", meaning: "counted noun", meaningFr: "nom compté" },
        { arabic: "مُفْرَد", transliteration: "mufrad", meaning: "singular", meaningFr: "singulier" },
        { arabic: "جَمْع", transliteration: "jam'", meaning: "plural", meaningFr: "pluriel" },
        { arabic: "تَمْيِيز", transliteration: "tamyīz", meaning: "specification", meaningFr: "spécification" }
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
    objectivesFr: ["Identifier les cinq noms", "Appliquer les désinences de cas spéciales", "Utiliser correctement dans l'إضافة", "Les reconnaître dans les textes classiques"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "The Five Nouns", titleFr: "Les cinq noms", content: "أَبٌ (father), أَخٌ (brother), حَمٌ (father-in-law), فَمٌ (mouth), ذُو (possessor of)\nWhen in إضافة, they show long vowels:\nأَبُو (nominative), أَبَا (accusative), أَبِي (genitive)", contentFr: "أَبٌ (père), أَخٌ (frère), حَمٌ (beau-père), فَمٌ (bouche), ذُو (possesseur)\nQuand en إضافة, ils montrent des voyelles longues :\nأَبُو (nominatif), أَبَا (accusatif), أَبِي (génitif)" },
        { title: "Example Sentences", titleFr: "Phrases d'exemple", content: "جَاءَ أَبُوهُ - His father came (nominative)\nرَأَيْتُ أَبَاهُ - I saw his father (accusative)\nسَلَّمْتُ عَلَى أَبِيهِ - I greeted his father (genitive)", contentFr: "جَاءَ أَبُوهُ - Son père est venu (nominatif)\nرَأَيْتُ أَبَاهُ - J'ai vu son père (accusatif)\nسَلَّمْتُ عَلَى أَبِيهِ - J'ai salué son père (génitif)" },
        { title: "ذُو Usage", titleFr: "Utilisation de ذُو", content: "ذُو مَالٍ - possessor of wealth\nذُو عِلْمٍ - possessor of knowledge\nFeminine: ذَاتُ (nominative)", contentFr: "ذُو مَالٍ - possesseur de richesse\nذُو عِلْمٍ - possesseur de savoir\nFéminin : ذَاتُ (nominatif)" }
      ],
      vocabulary: [
        { arabic: "أَبُو", transliteration: "abū", meaning: "father of (nom.)", meaningFr: "père de (nom.)" },
        { arabic: "أَخُو", transliteration: "akhū", meaning: "brother of (nom.)", meaningFr: "frère de (nom.)" },
        { arabic: "ذُو", transliteration: "dhū", meaning: "possessor of (nom.)", meaningFr: "possesseur de (nom.)" },
        { arabic: "فُو", transliteration: "fū", meaning: "mouth of (nom.)", meaningFr: "bouche de (nom.)" },
        { arabic: "حَمُو", transliteration: "ḥamū", meaning: "father-in-law of (nom.)", meaningFr: "beau-père de (nom.)" }
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
    objectivesFr: ["Conjuguer les verbes assimilés", "Gérer les verbes creux", "Former les verbes défectifs", "Utiliser les verbes doublement faibles"],
    estimatedTime: 55, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "Assimilated (مثال)", titleFr: "Assimilé (مثال)", content: "First radical is و or ي:\nوَصَلَ → يَصِلُ (the و drops in present)\nوَعَدَ → يَعِدُ", contentFr: "La première radicale est و ou ي :\nوَصَلَ → يَصِلُ (le و tombe au présent)\nوَعَدَ → يَعِدُ" },
        { title: "Hollow (أَجْوَف)", titleFr: "Creux (أَجْوَف)", content: "Middle radical is و or ي:\nقَالَ (قول) → يَقُولُ\nبَاعَ (بيع) → يَبِيعُ", contentFr: "La radicale médiane est و ou ي :\nقَالَ (قول) → يَقُولُ\nبَاعَ (بيع) → يَبِيعُ" },
        { title: "Defective (نَاقِص)", titleFr: "Défectif (نَاقِص)", content: "Final radical is و or ي:\nمَشَى → يَمْشِي\nدَعَا → يَدْعُو", contentFr: "La radicale finale est و ou ي :\nمَشَى → يَمْشِي\nدَعَا → يَدْعُو" }
      ],
      vocabulary: [
        { arabic: "مِثَال", transliteration: "mithāl", meaning: "assimilated verb", meaningFr: "verbe assimilé" },
        { arabic: "أَجْوَف", transliteration: "ajwaf", meaning: "hollow verb", meaningFr: "verbe creux" },
        { arabic: "نَاقِص", transliteration: "nāqiṣ", meaning: "defective verb", meaningFr: "verbe défectif" },
        { arabic: "لَفِيف", transliteration: "lafīf", meaning: "doubly weak verb", meaningFr: "verbe doublement faible" },
        { arabic: "صَحِيح", transliteration: "ṣaḥīḥ", meaning: "sound verb", meaningFr: "verbe sain" }
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
    objectivesFr: ["Former à partir de la forme I", "Former à partir des formes dérivées", "Utiliser comme nom et adjectif", "Comprendre les aspects temporels"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Form I Pattern", titleFr: "Schème de la forme I", content: "فَاعِل pattern:\nكَتَبَ → كَاتِب (writer/writing)\nعَمِلَ → عَامِل (worker/working)\nدَرَسَ → دَارِس (student/studying)", contentFr: "Schème فَاعِل :\nكَتَبَ → كَاتِب (écrivain/écrivant)\nعَمِلَ → عَامِل (ouvrier/travaillant)\nدَرَسَ → دَارِس (étudiant/étudiant)" },
        { title: "Derived Forms Pattern", titleFr: "Schème des formes dérivées", content: "Replace يـ prefix with مُـ:\nيُعَلِّمُ → مُعَلِّم (teacher)\nيُسَافِرُ → مُسَافِر (traveler)\nيَسْتَخْدِمُ → مُسْتَخْدِم (user)", contentFr: "Remplacer le préfixe يـ par مُـ :\nيُعَلِّمُ → مُعَلِّم (enseignant)\nيُسَافِرُ → مُسَافِر (voyageur)\nيَسْتَخْدِمُ → مُسْتَخْدِم (utilisateur)" },
        { title: "Functions", titleFr: "Fonctions", content: "• As noun: الكَاتِب (the writer)\n• As adjective: رَجُلٌ عَامِلٌ (a working man)\n• Present action: أَنَا ذَاهِبٌ (I am going)", contentFr: "• Comme nom : الكَاتِب (l'écrivain)\n• Comme adjectif : رَجُلٌ عَامِلٌ (un homme qui travaille)\n• Action présente : أَنَا ذَاهِبٌ (Je vais)" }
      ],
      vocabulary: [
        { arabic: "كَاتِب", transliteration: "kātib", meaning: "writer/writing", meaningFr: "écrivain/écrivant" },
        { arabic: "قَارِئ", transliteration: "qāri'", meaning: "reader/reading", meaningFr: "lecteur/lisant" },
        { arabic: "سَامِع", transliteration: "sāmi'", meaning: "listener/listening", meaningFr: "auditeur/écoutant" },
        { arabic: "مُدَرِّس", transliteration: "mudarris", meaning: "teacher", meaningFr: "enseignant" },
        { arabic: "مُسْتَمِع", transliteration: "mustami'", meaning: "listener (form VIII)", meaningFr: "auditeur (forme VIII)" }
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
    objectivesFr: ["Former à partir de la forme I", "Former à partir des formes dérivées", "Distinguer de l'actif", "Utiliser dans les descriptions"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Form I Pattern", titleFr: "Schème de la forme I", content: "مَفْعُول pattern:\nكَتَبَ → مَكْتُوب (written)\nعَمِلَ → مَعْمُول (done/made)\nفَتَحَ → مَفْتُوح (opened)", contentFr: "Schème مَفْعُول :\nكَتَبَ → مَكْتُوب (écrit)\nعَمِلَ → مَعْمُول (fait/fabriqué)\nفَتَحَ → مَفْتُوح (ouvert)" },
        { title: "Derived Forms Pattern", titleFr: "Schème des formes dérivées", content: "Like active but with fatha before last consonant:\nمُعَلَّم (taught) vs مُعَلِّم (teacher)\nمُسْتَخْدَم (used) vs مُسْتَخْدِم (user)", contentFr: "Comme l'actif mais avec fatha avant la dernière consonne :\nمُعَلَّم (enseigné) vs مُعَلِّم (enseignant)\nمُسْتَخْدَم (utilisé) vs مُسْتَخْدِم (utilisateur)" },
        { title: "Common Usage", titleFr: "Utilisation courante", content: "مَكْتُوبٌ عَلَيْهِ - It is written on it (fated)\nمَمْنُوع - forbidden\nمَسْمُوح - permitted", contentFr: "مَكْتُوبٌ عَلَيْهِ - C'est écrit dessus (destiné)\nمَمْنُوع - interdit\nمَسْمُوح - permis" }
      ],
      vocabulary: [
        { arabic: "مَكْتُوب", transliteration: "maktūb", meaning: "written", meaningFr: "écrit" },
        { arabic: "مَفْهُوم", transliteration: "mafhūm", meaning: "understood", meaningFr: "compris" },
        { arabic: "مَعْرُوف", transliteration: "ma'rūf", meaning: "known", meaningFr: "connu" },
        { arabic: "مَجْهُول", transliteration: "majhūl", meaning: "unknown", meaningFr: "inconnu" },
        { arabic: "مَشْغُول", transliteration: "mashghūl", meaning: "busy/occupied", meaningFr: "occupé/affairé" }
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
    objectivesFr: ["Reconnaître les schèmes de la forme I", "Former à partir des formes dérivées", "Utiliser dans l'إضافة", "Remplacer les verbes par مصدر"],
    estimatedTime: 55, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "Form I Patterns", titleFr: "Schèmes de la forme I", content: "Many patterns exist:\nفَعْل: ضَرْب، فَتْح\nفِعَال: قِتَال، جِهَاد\nفُعُول: دُخُول، خُرُوج\nفَعَال: ذَهَاب، سَفَر", contentFr: "Beaucoup de schèmes existent :\nفَعْل : ضَرْب، فَتْح\nفِعَال : قِتَال، جِهَاد\nفُعُول : دُخُول، خُرُوج\nفَعَال : ذَهَاب، سَفَر" },
        { title: "Derived Form Patterns", titleFr: "Schèmes des formes dérivées", content: "II: تَفْعِيل - تَعْلِيم\nIII: مُفَاعَلَة - مُسَاعَدَة\nIV: إِفْعَال - إِرْسَال\nV: تَفَعُّل - تَعَلُّم\nVI: تَفَاعُل - تَعَاوُن\nVII: اِنْفِعَال - اِنْكِسَار\nVIII: اِفْتِعَال - اِجْتِمَاع\nX: اِسْتِفْعَال - اِسْتِخْدَام", contentFr: "II : تَفْعِيل - تَعْلِيم\nIII : مُفَاعَلَة - مُسَاعَدَة\nIV : إِفْعَال - إِرْسَال\nV : تَفَعُّل - تَعَلُّم\nVI : تَفَاعُل - تَعَاوُن\nVII : اِنْفِعَال - اِنْكِسَار\nVIII : اِفْتِعَال - اِجْتِمَاع\nX : اِسْتِفْعَال - اِسْتِخْدَام" },
        { title: "Usage", titleFr: "Utilisation", content: "قِرَاءَةُ الكُتُبِ مُفِيدَةٌ\nReading books is beneficial\n(مصدر as subject of nominal sentence)", contentFr: "قِرَاءَةُ الكُتُبِ مُفِيدَةٌ\nLire des livres est bénéfique\n(مصدر comme sujet de phrase nominale)" }
      ],
      vocabulary: [
        { arabic: "قِرَاءَة", transliteration: "qirā'a", meaning: "reading", meaningFr: "lecture" },
        { arabic: "كِتَابَة", transliteration: "kitāba", meaning: "writing", meaningFr: "écriture" },
        { arabic: "تَعْلِيم", transliteration: "ta'līm", meaning: "teaching", meaningFr: "enseignement" },
        { arabic: "اِسْتِخْدَام", transliteration: "istikhdām", meaning: "use/usage", meaningFr: "utilisation" },
        { arabic: "تَعَاوُن", transliteration: "ta'āwun", meaning: "cooperation", meaningFr: "coopération" }
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
    objectivesFr: ["Former les schèmes مَفْعَل et مَفْعِل", "Distinguer le lieu du temps", "Utiliser dans les descriptions", "Les reconnaître dans les textes"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Pattern", titleFr: "Schème", content: "مَفْعَل or مَفْعِل (depends on verb form):\nلَعِبَ → مَلْعَب (playground)\nجَلَسَ → مَجْلِس (sitting place/council)\nدَخَلَ → مَدْخَل (entrance)", contentFr: "مَفْعَل ou مَفْعِل (selon la forme du verbe) :\nلَعِبَ → مَلْعَب (terrain de jeu)\nجَلَسَ → مَجْلِس (lieu d'assise/conseil)\nدَخَلَ → مَدْخَل (entrée)" },
        { title: "Time Usage", titleFr: "Utilisation pour le temps", content: "Same pattern for time:\nوُلِدَ → مَوْلِد (birthday/birthplace)\nغَرَبَ → مَغْرِب (sunset/west)\nطَلَعَ → مَطْلَع (sunrise)", contentFr: "Même schème pour le temps :\nوُلِدَ → مَوْلِد (naissance/lieu de naissance)\nغَرَبَ → مَغْرِب (coucher de soleil/ouest)\nطَلَعَ → مَطْلَع (lever de soleil)" },
        { title: "Common Examples", titleFr: "Exemples courants", content: "مَكْتَب - office\nمَدْرَسَة - school\nمَطْبَخ - kitchen\nمَسْجِد - mosque", contentFr: "مَكْتَب - bureau\nمَدْرَسَة - école\nمَطْبَخ - cuisine\nمَسْجِد - mosquée" }
      ],
      vocabulary: [
        { arabic: "مَلْعَب", transliteration: "mal'ab", meaning: "playground/stadium", meaningFr: "terrain de jeu/stade" },
        { arabic: "مَكْتَبَة", transliteration: "maktaba", meaning: "library", meaningFr: "bibliothèque" },
        { arabic: "مَطَار", transliteration: "maṭār", meaning: "airport", meaningFr: "aéroport" },
        { arabic: "مَوْقِف", transliteration: "mawqif", meaning: "parking/position", meaningFr: "parking/position" },
        { arabic: "مَخْرَج", transliteration: "makhraj", meaning: "exit", meaningFr: "sortie" }
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
    objectivesFr: ["Former les schèmes مِفْعَل, مِفْعَال, مِفْعَلَة", "Utiliser les noms d'instrument", "Élargir le vocabulaire", "Les reconnaître en arabe moderne"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Classical Patterns", titleFr: "Schèmes classiques", content: "مِفْعَل: مِفْتَاح (key), مِصْبَاح (lamp)\nمِفْعَال: مِنْشَار (saw), مِفْتَاح (key)\nمِفْعَلَة: مِكْنَسَة (broom), مِطْرَقَة (hammer)", contentFr: "مِفْعَل : مِفْتَاح (clé), مِصْبَاح (lampe)\nمِفْعَال : مِنْشَار (scie), مِفْتَاح (clé)\nمِفْعَلَة : مِكْنَسَة (balai), مِطْرَقَة (marteau)" },
        { title: "Modern Coinages", titleFr: "Néologismes modernes", content: "Arabic creates new instrument nouns:\nحَسَبَ → حَاسُوب (computer)\nبَرَدَ → ثَلَّاجَة (refrigerator)\nغَسَلَ → غَسَّالَة (washing machine)", contentFr: "L'arabe crée de nouveaux noms d'instrument :\nحَسَبَ → حَاسُوب (ordinateur)\nبَرَدَ → ثَلَّاجَة (réfrigérateur)\nغَسَلَ → غَسَّالَة (machine à laver)" },
        { title: "فَعَّالَة Pattern", titleFr: "Schème فَعَّالَة", content: "Modern machines often use فَعَّالَة:\nثَلَّاجَة - refrigerator\nغَسَّالَة - washing machine\nسَيَّارَة - car (thing that moves)", contentFr: "Les machines modernes utilisent souvent فَعَّالَة :\nثَلَّاجَة - réfrigérateur\nغَسَّالَة - machine à laver\nسَيَّارَة - voiture (ce qui se déplace)" }
      ],
      vocabulary: [
        { arabic: "مِفْتَاح", transliteration: "miftāḥ", meaning: "key", meaningFr: "clé" },
        { arabic: "مِقَصّ", transliteration: "miqaṣṣ", meaning: "scissors", meaningFr: "ciseaux" },
        { arabic: "مِكْوَاة", transliteration: "mikwā", meaning: "iron (clothes)", meaningFr: "fer (à repasser)" },
        { arabic: "حَاسُوب", transliteration: "ḥāsūb", meaning: "computer", meaningFr: "ordinateur" },
        { arabic: "هَاتِف", transliteration: "hātif", meaning: "telephone", meaningFr: "téléphone" }
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
    objectivesFr: ["Former des diminutifs", "Utiliser les schèmes d'adjectifs intensifs", "Exprimer des nuances", "Les reconnaître dans la littérature"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Diminutive (تصغير)", titleFr: "Diminutif (تصغير)", content: "Pattern: فُعَيْل\nكِتَاب → كُتَيِّب (booklet)\nكَلْب → كُلَيْب (puppy)\nبَيْت → بُيَيْت (small house)", contentFr: "Schème : فُعَيْل\nكِتَاب → كُتَيِّب (petit livre)\nكَلْب → كُلَيْب (petit chien)\nبَيْت → بُيَيْت (petite maison)" },
        { title: "Intensive Adjectives", titleFr: "Adjectifs intensifs", content: "Patterns for extreme qualities:\nفَعَّال: كَذَّاب (big liar)\nفَعِيل: عَلِيم (very knowledgeable)\nفَعُول: صَبُور (very patient)\nمِفْعَال: مِهْذَار (very talkative)", contentFr: "Schèmes pour les qualités extrêmes :\nفَعَّال : كَذَّاب (grand menteur)\nفَعِيل : عَلِيم (très savant)\nفَعُول : صَبُور (très patient)\nمِفْعَال : مِهْذَار (très bavard)" },
        { title: "Usage", titleFr: "Utilisation", content: "Express affection: يَا بُنَيّ (O my little son)\nExpress extremity: هُوَ أَكُول - He eats a lot", contentFr: "Exprimer l'affection : يَا بُنَيّ (Ô mon petit fils)\nExprimer l'extrémité : هُوَ أَكُول - Il mange beaucoup" }
      ],
      vocabulary: [
        { arabic: "بُنَيّ", transliteration: "bunayy", meaning: "little son", meaningFr: "petit fils" },
        { arabic: "عَلَّامَة", transliteration: "'allāma", meaning: "great scholar", meaningFr: "grand savant" },
        { arabic: "فَهَّامَة", transliteration: "fahhāma", meaning: "very understanding", meaningFr: "très compréhensif" },
        { arabic: "صَبُور", transliteration: "ṣabūr", meaning: "very patient", meaningFr: "très patient" },
        { arabic: "شَكُور", transliteration: "shakūr", meaning: "very thankful", meaningFr: "très reconnaissant" }
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
    objectivesFr: ["Comprendre la structure poétique", "Apprendre les mètres de base", "Analyser les schèmes de rime", "Apprécier la poésie classique"],
    estimatedTime: 55, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "Verse Structure", titleFr: "Structure du vers", content: "بَيْت (verse) = صَدْر (first hemistich) + عَجُز (second hemistich)\nقَصِيدَة (poem) = multiple verses with same rhyme", contentFr: "بَيْت (vers) = صَدْر (première moitié) + عَجُز (deuxième moitié)\nقَصِيدَة (poème) = plusieurs vers avec la même rime" },
        { title: "Rhyme (القافية)", titleFr: "Rime (القافية)", content: "Classical poems maintain the same end rhyme throughout:\nكُلُّ بَيْتٍ يَنْتَهِي بِنَفْسِ الحَرْفِ\nRhyme letter (رَوِيّ) defines the poem", contentFr: "Les poèmes classiques maintiennent la même rime finale :\nكُلُّ بَيْتٍ يَنْتَهِي بِنَفْسِ الحَرْفِ\nLa lettre de rime (رَوِيّ) définit le poème" },
        { title: "Famous Poets", titleFr: "Poètes célèbres", content: "Pre-Islamic: اِمْرُؤ القَيْس\nAbbasid: أَبُو نُوَاس، المُتَنَبِّي\nModern: أَحْمَد شَوْقِي، نِزَار قَبَّانِي", contentFr: "Pré-islamique : اِمْرُؤ القَيْس\nAbbassade : أَبُو نُوَاس، المُتَنَبِّي\nModerne : أَحْمَد شَوْقِي، نِزَار قَبَّانِي" }
      ],
      vocabulary: [
        { arabic: "شِعْر", transliteration: "shi'r", meaning: "poetry", meaningFr: "poésie" },
        { arabic: "شَاعِر", transliteration: "shā'ir", meaning: "poet", meaningFr: "poète" },
        { arabic: "قَصِيدَة", transliteration: "qaṣīda", meaning: "ode/poem", meaningFr: "ode/poème" },
        { arabic: "بَيْت", transliteration: "bayt", meaning: "verse", meaningFr: "vers" },
        { arabic: "قَافِيَة", transliteration: "qāfiya", meaning: "rhyme", meaningFr: "rime" }
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
    objectivesFr: ["Comprendre le concept de بحر", "Apprendre les mètres courants", "Scander des vers simples", "Apprécier les schèmes rythmiques"],
    estimatedTime: 55, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "What is 'Arūḍ?", titleFr: "Qu'est-ce que 'Arūḍ ?", content: "The science of Arabic meters, founded by الخَلِيل بن أَحْمَد\n16 classical meters (بُحُور)\nBased on syllable patterns: فَعُولُن، فَاعِلُن، مُسْتَفْعِلُن", contentFr: "La science des mètres arabes, fondée par الخَلِيل بن أَحْمَد\n16 mètres classiques (بُحُور)\nBasés sur les schèmes de syllabes : فَعُولُن، فَاعِلُن، مُسْتَفْعِلُن" },
        { title: "Common Meters", titleFr: "Mètres courants", content: "الطَّوِيل - most common pre-Islamic\nالكَامِل - perfect/complete\nالوَافِر - abundant\nالخَفِيف - light\nالرَّجَز - simple/accessible", contentFr: "الطَّوِيل - le plus courant pré-islamique\nالكَامِل - parfait/complet\nالوَافِر - abondant\nالخَفِيف - léger\nالرَّجَز - simple/accessible" },
        { title: "Scanning Basics", titleFr: "Bases du scansion", content: "Count syllables: تَنْ (short) + تَانْ (long)\nMap to metric feet\nIdentify the بَحْر", contentFr: "Compter les syllabes : تَنْ (court) + تَانْ (long)\nMapper sur les pieds métriques\nIdentifier le بَحْر" }
      ],
      vocabulary: [
        { arabic: "عَرُوض", transliteration: "'arūḍ", meaning: "prosody", meaningFr: "prosodie" },
        { arabic: "بَحْر", transliteration: "baḥr", meaning: "meter (lit. sea)", meaningFr: "mètre (lit. mer)" },
        { arabic: "تَفْعِيلَة", transliteration: "taf'īla", meaning: "metric foot", meaningFr: "pied métrique" },
        { arabic: "وَزْن", transliteration: "wazn", meaning: "weight/meter", meaningFr: "poids/mètre" },
        { arabic: "إِيقَاع", transliteration: "īqā'", meaning: "rhythm", meaningFr: "rythme" }
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
    objectivesFr: ["Distinguer les genres de prose", "Analyser les figures rhétoriques", "Comprendre le style classique", "Lire les textes historiques"],
    estimatedTime: 55, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "Prose Genres", titleFr: "Genres de prose", content: "خُطْبَة - sermon/speech\nرِسَالَة - epistle\nمَقَامَة - literary assembly\nسِيرَة - biography\nتَارِيخ - history", contentFr: "خُطْبَة - sermon/discours\nرِسَالَة - épître\nمَقَامَة - assemblée littéraire\nسِيرَة - biographie\nتَارِيخ - histoire" },
        { title: "Rhetorical Devices", titleFr: "Figures rhétoriques", content: "سَجْع - rhymed prose\nطِبَاق - antithesis\nجِنَاس - paronomasia\nاِسْتِعَارَة - metaphor", contentFr: "سَجْع - prose rimée\nطِبَاق - antithèse\nجِنَاس - paronomase\nاِسْتِعَارَة - métaphore" },
        { title: "Famous Prose Writers", titleFr: "Prosateurs célèbres", content: "الجَاحِظ - master of أَدَب\nاِبْن المُقَفَّع - translator, stylist\nالهَمَذَانِي - inventor of مَقَامَة", contentFr: "الجَاحِظ - maître de أَدَب\nاِبْن المُقَفَّع - traducteur, styliste\nالهَمَذَانِي - inventeur de مَقَامَة" }
      ],
      vocabulary: [
        { arabic: "نَثْر", transliteration: "nathr", meaning: "prose", meaningFr: "prose" },
        { arabic: "سَجْع", transliteration: "saj'", meaning: "rhymed prose", meaningFr: "prose rimée" },
        { arabic: "بَلَاغَة", transliteration: "balāgha", meaning: "rhetoric", meaningFr: "rhétorique" },
        { arabic: "فَصَاحَة", transliteration: "faṣāḥa", meaning: "eloquence", meaningFr: "éloquence" },
        { arabic: "أُسْلُوب", transliteration: "uslūb", meaning: "style", meaningFr: "style" }
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
    objectivesFr: ["Comprendre la النهضة littéraire", "Connaître les auteurs modernes majeurs", "Lire les textes contemporains", "Analyser les thèmes modernes"],
    estimatedTime: 55, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "النهضة (Renaissance)", titleFr: "النهضة (Renaissance)", content: "19th century revival:\n• Contact with West\n• Printing press impact\n• New genres: novel, short story, drama", contentFr: "Renouveau du XIXe siècle :\n• Contact avec l'Occident\n• Impact de l'imprimerie\n• Nouveaux genres : roman, nouvelle, drame" },
        { title: "Major Authors", titleFr: "Auteurs majeurs", content: "نَجِيب مَحْفُوظ - Nobel laureate, Cairo Trilogy\nتَوْفِيق الحَكِيم - drama\nجُبْرَان خَلِيل جُبْرَان - poetic prose\nمَحْمُود دَرْوِيش - poetry of exile", contentFr: "نَجِيب مَحْفُوظ - Prix Nobel, Trilogie du Caire\nتَوْفِيق الحَكِيم - drame\nجُبْرَان خَلِيل جُبْرَان - prose poétique\nمَحْمُود دَرْوِيش - poésie de l'exil" },
        { title: "Modern Themes", titleFr: "Thèmes modernes", content: "Identity and post-colonialism\nUrbanization and social change\nWomen's rights\nPalestinian cause", contentFr: "Identité et post-colonialisme\nUrbanisation et changement social\nDroits des femmes\nCause palestinienne" }
      ],
      vocabulary: [
        { arabic: "أَدَب", transliteration: "adab", meaning: "literature", meaningFr: "littérature" },
        { arabic: "رِوَايَة", transliteration: "riwāya", meaning: "novel", meaningFr: "roman" },
        { arabic: "قِصَّة قَصِيرَة", transliteration: "qiṣṣa qaṣīra", meaning: "short story", meaningFr: "nouvelle" },
        { arabic: "مَسْرَح", transliteration: "masraḥ", meaning: "theater", meaningFr: "théâtre" },
        { arabic: "نَهْضَة", transliteration: "nahḍa", meaning: "renaissance", meaningFr: "renaissance" }
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
    objectivesFr: ["Reconnaître le style coranique", "Comprendre la grammaire classique", "Lire avec conscience du tajweed", "Apprécier la beauté linguistique"],
    estimatedTime: 55, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "Quranic Arabic", titleFr: "L'arabe coranique", content: "Classical but accessible style\nUnique grammatical constructions\nRhythmic prose (not poetry)\nFoundation of فُصْحَى", contentFr: "Style classique mais accessible\nConstructions grammaticales uniques\nProse rythmique (pas de poésie)\nFondation du فُصْحَى" },
        { title: "Special Features", titleFr: "Caractéristiques spéciales", content: "Rare vocabulary: words with specific Quranic meanings\nOath formulas: وَالفَجْرِ، وَالشَّمْسِ\nStory patterns: قَصَص القُرْآن", contentFr: "Vocabulaire rare : mots avec des significations spécifiques coraniques\nFormules de serment : وَالفَجْرِ، وَالشَّمْسِ\nSchèmes narratifs : قَصَص القُرْآن" },
        { title: "Approaching Classical Texts", titleFr: "Approcher les textes classiques", content: "• Use تَفْسِير (commentary)\n• Learn إِعْرَاب (parsing)\n• Study بَلَاغَة (rhetoric)", contentFr: "• Utiliser تَفْسِير (commentaire)\n• Apprendre إِعْرَاب (analyse grammaticale)\n• Étudier بَلَاغَة (rhétorique)" }
      ],
      vocabulary: [
        { arabic: "قُرْآن", transliteration: "qur'ān", meaning: "Quran", meaningFr: "Coran" },
        { arabic: "آيَة", transliteration: "āya", meaning: "verse/sign", meaningFr: "verset/signe" },
        { arabic: "سُورَة", transliteration: "sūra", meaning: "chapter", meaningFr: "chapitre" },
        { arabic: "تَفْسِير", transliteration: "tafsīr", meaning: "interpretation", meaningFr: "interprétation" },
        { arabic: "تَجْوِيد", transliteration: "tajwīd", meaning: "recitation rules", meaningFr: "règles de récitation" }
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
    objectivesFr: ["Analyser la structure et le thème", "Identifier les figures littéraires", "Écrire des réponses critiques", "Comparer des textes"],
    estimatedTime: 55, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "Analysis Framework", titleFr: "Cadre d'analyse", content: "المَوْضُوع - Theme\nالأُسْلُوب - Style\nاللُّغَة - Language\nالصُّوَر - Imagery\nالبِنَاء - Structure", contentFr: "المَوْضُوع - Thème\nالأُسْلُوب - Style\nاللُّغَة - Langue\nالصُّوَر - Images\nالبِنَاء - Structure" },
        { title: "Literary Devices", titleFr: "Figures littéraires", content: "تَشْبِيه - simile\nاِسْتِعَارَة - metaphor\nكِنَايَة - metonymy\nمَجَاز - figurative language", contentFr: "تَشْبِيه - comparaison\nاِسْتِعَارَة - métaphore\nكِنَايَة - métonymie\nمَجَاز - langage figuré" },
        { title: "Critical Vocabulary", titleFr: "Vocabulaire critique", content: "يُعَبِّرُ عَن - expresses\nيُصَوِّرُ - depicts\nيَرْمُزُ إِلَى - symbolizes\nيُوحِي بِـ - suggests", contentFr: "يُعَبِّرُ عَن - exprime\nيُصَوِّرُ - dépeint\nيَرْمُزُ إِلَى - symbolise\nيُوحِي بِـ - suggère" }
      ],
      vocabulary: [
        { arabic: "تَحْلِيل", transliteration: "taḥlīl", meaning: "analysis", meaningFr: "analyse" },
        { arabic: "نَقْد أَدَبِيّ", transliteration: "naqd adabī", meaning: "literary criticism", meaningFr: "critique littéraire" },
        { arabic: "تَفْسِير", transliteration: "tafsīr", meaning: "interpretation", meaningFr: "interprétation" },
        { arabic: "مَعْنَى", transliteration: "ma'nā", meaning: "meaning", meaningFr: "sens" },
        { arabic: "رَمْز", transliteration: "ramz", meaning: "symbol", meaningFr: "symbole" }
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
    objectivesFr: ["Comprendre la structure des nouvelles", "Apprendre le vocabulaire journalistique", "Lire les journaux arabes", "Regarder les actualités arabes"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "News Structure", titleFr: "Structure des nouvelles", content: "مَنْ؟ مَاذَا؟ مَتَى؟ أَيْنَ؟ لِمَاذَا؟ كَيْفَ؟\nWho? What? When? Where? Why? How?\nLead (مُقَدِّمَة) answers key questions", contentFr: "مَنْ؟ مَاذَا؟ مَتَى؟ أَيْنَ؟ لِمَاذَا؟ كَيْفَ؟\nQui ? Quoi ? Quand ? Où ? Pourquoi ? Comment ?\nLe chapeau (مُقَدِّمَة) répond aux questions clés" },
        { title: "News Vocabulary", titleFr: "Vocabulaire journalistique", content: "أَعْلَنَ - announced\nصَرَّحَ - declared\nأَفَادَ - reported\nكَشَفَ - revealed\nنَفَى - denied", contentFr: "أَعْلَنَ - annoncé\nصَرَّحَ - déclaré\nأَفَادَ - rapporté\nكَشَفَ - révélé\nنَفَى - nié" },
        { title: "News Sources", titleFr: "Sources d'information", content: "Major channels: الجَزِيرَة، العَرَبِيَّة، BBC عَرَبِي\nNewspapers: الأَهْرَام، الشَّرْق الأَوْسَط", contentFr: "Chaînes majeures : الجَزِيرَة، العَرَبِيَّة، BBC عَرَبِي\nJournaux : الأَهْرَام، الشَّرْق الأَوْسَط" }
      ],
      vocabulary: [
        { arabic: "مُرَاسِل", transliteration: "murāsil", meaning: "correspondent", meaningFr: "correspondant" },
        { arabic: "تَقْرِير", transliteration: "taqrīr", meaning: "report", meaningFr: "rapport" },
        { arabic: "عَاجِل", transliteration: "'ājil", meaning: "breaking/urgent", meaningFr: "urgent" },
        { arabic: "مَصَادِر", transliteration: "maṣādir", meaning: "sources", meaningFr: "sources" },
        { arabic: "نَاطِق رَسْمِيّ", transliteration: "nāṭiq rasmī", meaning: "official spokesperson", meaningFr: "porte-parole officiel" }
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
    objectivesFr: ["Comprendre les systèmes politiques", "Apprendre le langage diplomatique", "Discuter des événements actuels", "Analyser les discours politiques"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Government Terms", titleFr: "Termes gouvernementaux", content: "حُكُومَة - government\nبَرْلَمَان - parliament\nرَئِيس - president\nوَزِير - minister\nاِنْتِخَابَات - elections", contentFr: "حُكُومَة - gouvernement\nبَرْلَمَان - parlement\nرَئِيس - président\nوَزِير - ministre\nاِنْتِخَابَات - élections" },
        { title: "Diplomatic Language", titleFr: "Langage diplomatique", content: "عَلَاقَات دِبْلُومَاسِيَّة - diplomatic relations\nمُفَاوَضَات - negotiations\nاِتِّفَاقِيَّة - agreement\nمُعَاهَدَة - treaty", contentFr: "عَلَاقَات دِبْلُومَاسِيَّة - relations diplomatiques\nمُفَاوَضَات - négociations\nاِتِّفَاقِيَّة - accord\nمُعَاهَدَة - traité" },
        { title: "International Organizations", titleFr: "Organisations internationales", content: "الأُمَم المُتَّحِدَة - United Nations\nجَامِعَة الدُّوَل العَرَبِيَّة - Arab League\nمَجْلِس الأَمْن - Security Council", contentFr: "الأُمَم المُتَّحِدَة - Nations unies\nجَامِعَة الدُّوَل العَرَبِيَّة - Ligue arabe\nمَجْلِس الأَمْن - Conseil de sécurité" }
      ],
      vocabulary: [
        { arabic: "سِيَاسَة", transliteration: "siyāsa", meaning: "politics/policy", meaningFr: "politique/politique" },
        { arabic: "دِيمُقْرَاطِيَّة", transliteration: "dīmuqrāṭiyya", meaning: "democracy", meaningFr: "démocratie" },
        { arabic: "سِيَادَة", transliteration: "siyāda", meaning: "sovereignty", meaningFr: "souveraineté" },
        { arabic: "مُوَاطِن", transliteration: "muwāṭin", meaning: "citizen", meaningFr: "citoyen" },
        { arabic: "حُقُوق الإِنْسَان", transliteration: "ḥuqūq al-insān", meaning: "human rights", meaningFr: "droits de l'homme" }
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
    objectivesFr: ["Comprendre les termes économiques", "Lire les actualités financières", "Discuter de sujets commerciaux", "Utiliser le vocabulaire commercial"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Economic Terms", titleFr: "Termes économiques", content: "اِقْتِصَاد - economy\nنَاتِج مَحَلِّيّ - GDP\nتَضَخُّم - inflation\nبَطَالَة - unemployment\nاِسْتِثْمَار - investment", contentFr: "اِقْتِصَاد - économie\nنَاتِج مَحَلِّيّ - PIB\nتَضَخُّم - inflation\nبَطَالَة - chômage\nاِسْتِثْمَار - investissement" },
        { title: "Business Vocabulary", titleFr: "Vocabulaire commercial", content: "شَرِكَة - company\nسُوق - market\nتِجَارَة - trade\nصَادِرَات - exports\nوَارِدَات - imports", contentFr: "شَرِكَة - entreprise\nسُوق - marché\nتِجَارَة - commerce\nصَادِرَات - exportations\nوَارِدَات - importations" },
        { title: "Financial Terms", titleFr: "Termes financiers", content: "بَنْك - bank\nقَرْض - loan\nفَائِدَة - interest\nأَسْهُم - stocks\nعُمْلَة - currency", contentFr: "بَنْك - banque\nقَرْض - prêt\nفَائِدَة - intérêt\nأَسْهُم - actions\nعُمْلَة - devise" }
      ],
      vocabulary: [
        { arabic: "اِقْتِصَادِيّ", transliteration: "iqtiṣādī", meaning: "economic", meaningFr: "économique" },
        { arabic: "رَأْس مَال", transliteration: "ra's māl", meaning: "capital", meaningFr: "capital" },
        { arabic: "رِبْح", transliteration: "ribḥ", meaning: "profit", meaningFr: "bénéfice" },
        { arabic: "خَسَارَة", transliteration: "khasāra", meaning: "loss", meaningFr: "perte" },
        { arabic: "مِيزَانِيَّة", transliteration: "mīzāniyya", meaning: "budget", meaningFr: "budget" }
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
    objectivesFr: ["Comprendre les concepts juridiques", "Lire les contrats", "Apprendre le vocabulaire judiciaire", "Utiliser le langage juridique formel"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Legal System", titleFr: "Système juridique", content: "قَانُون - law\nدُسْتُور - constitution\nمَحْكَمَة - court\nقَاضٍ - judge\nمُحَامٍ - lawyer", contentFr: "قَانُون - loi\nدُسْتُور - constitution\nمَحْكَمَة - tribunal\nقَاضٍ - juge\nمُحَامٍ - avocat" },
        { title: "Legal Procedures", titleFr: "Procédures juridiques", content: "دَعْوَى - lawsuit\nحُكْم - verdict\nاِسْتِئْنَاف - appeal\nشَهَادَة - testimony\nدَلِيل - evidence", contentFr: "دَعْوَى - procès\nحُكْم - verdict\nاِسْتِئْنَاف - appel\nشَهَادَة - témoignage\nدَلِيل - preuve" },
        { title: "Contract Language", titleFr: "Langage du contrat", content: "عَقْد - contract\nطَرَف - party\nشُرُوط - terms\nاِلْتِزَام - obligation\nفَسْخ - annulment", contentFr: "عَقْد - contrat\nطَرَف - partie\nشُرُوط - conditions\nاِلْتِزَام - obligation\nفَسْخ - résiliation" }
      ],
      vocabulary: [
        { arabic: "قَانُونِيّ", transliteration: "qānūnī", meaning: "legal", meaningFr: "juridique" },
        { arabic: "حَقّ", transliteration: "ḥaqq", meaning: "right", meaningFr: "droit" },
        { arabic: "وَاجِب", transliteration: "wājib", meaning: "duty", meaningFr: "devoir" },
        { arabic: "جَرِيمَة", transliteration: "jarīma", meaning: "crime", meaningFr: "crime" },
        { arabic: "عُقُوبَة", transliteration: "'uqūba", meaning: "punishment", meaningFr: "punition" }
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
    objectivesFr: ["Écrire des essais académiques", "Utiliser les citations et références", "Structurer les arguments", "Lire les articles savants"],
    estimatedTime: 55, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "Academic Structure", titleFr: "Structure académique", content: "مُقَدِّمَة - Introduction\nمَنْهَجِيَّة - Methodology\nنَتَائِج - Results\nمُنَاقَشَة - Discussion\nخَاتِمَة - Conclusion", contentFr: "مُقَدِّمَة - Introduction\nمَنْهَجِيَّة - Méthodologie\nنَتَائِج - Résultats\nمُنَاقَشَة - Discussion\nخَاتِمَة - Conclusion" },
        { title: "Citation Language", titleFr: "Langage de citation", content: "وَفْقًا لِـ / حَسَبَ - according to\nكَمَا ذَكَرَ - as X mentioned\nيَرَى X أَنَّ - X believes that\nيُشِيرُ إِلَى - refers to", contentFr: "وَفْقًا لِـ / حَسَبَ - selon\nكَمَا ذَكَرَ - comme X l'a mentionné\nيَرَى X أَنَّ - X croit que\nيُشِيرُ إِلَى - se réfère à" },
        { title: "Academic Vocabulary", titleFr: "Vocabulaire académique", content: "بَحْث - research\nدِرَاسَة - study\nنَظَرِيَّة - theory\nفَرَضِيَّة - hypothesis", contentFr: "بَحْث - recherche\nدِرَاسَة - étude\nنَظَرِيَّة - théorie\nفَرَضِيَّة - hypothèse" }
      ],
      vocabulary: [
        { arabic: "أَكَادِيمِيّ", transliteration: "akādīmī", meaning: "academic", meaningFr: "académique" },
        { arabic: "مَرْجِع", transliteration: "marji'", meaning: "reference", meaningFr: "référence" },
        { arabic: "مَصْدَر", transliteration: "maṣdar", meaning: "source", meaningFr: "source" },
        { arabic: "اِقْتِبَاس", transliteration: "iqtibās", meaning: "quotation", meaningFr: "citation" },
        { arabic: "حَاشِيَة", transliteration: "ḥāshiya", meaning: "footnote", meaningFr: "note de bas de page" }
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
    objectivesFr: ["Structurer des présentations", "Utiliser des phrases de transition", "Gérer les questions-réponses", "Présenter des données et arguments"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Opening", titleFr: "Ouverture", content: "بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ - opening formula\nأَوَدُّ أَنْ أُقَدِّمَ - I would like to present\nمَوْضُوعُ حَدِيثِي اليَوْمَ - Today's topic is", contentFr: "بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ - formule d'ouverture\nأَوَدُّ أَنْ أُقَدِّمَ - J'aimerais présenter\nمَوْضُوعُ حَدِيثِي اليَوْمَ - Le sujet d'aujourd'hui est" },
        { title: "Transitions", titleFr: "Transitions", content: "أَوَّلًا / ثَانِيًا / أَخِيرًا\nبِالإِضَافَةِ إِلَى ذَلِكَ - in addition\nمِنْ نَاحِيَةٍ أُخْرَى - on the other hand\nفِي الخِتَام - in conclusion", contentFr: "أَوَّلًا / ثَانِيًا / أَخِيرًا\nبِالإِضَافَةِ إِلَى ذَلِكَ - de plus\nمِنْ نَاحِيَةٍ أُخْرَى - d'un autre côté\nفِي الخِتَام - en conclusion" },
        { title: "Closing", titleFr: "Clôture", content: "شُكْرًا لِحُسْنِ اسْتِمَاعِكُم - Thank you for listening\nأَنَا مُسْتَعِدٌّ لِلأَسْئِلَة - I'm ready for questions", contentFr: "شُكْرًا لِحُسْنِ اسْتِمَاعِكُم - Merci de votre attention\nأَنَا مُسْتَعِدٌّ لِلأَسْئِلَة - Je suis prêt pour les questions" }
      ],
      vocabulary: [
        { arabic: "عَرْض تَقْدِيمِيّ", transliteration: "'arḍ taqdīmī", meaning: "presentation", meaningFr: "présentation" },
        { arabic: "شَرِيحَة", transliteration: "sharīḥa", meaning: "slide", meaningFr: "diapositive" },
        { arabic: "رَسْم بَيَانِيّ", transliteration: "rasm bayānī", meaning: "chart/graph", meaningFr: "graphique" },
        { arabic: "جُمْهُور", transliteration: "jumhūr", meaning: "audience", meaningFr: "audience" },
        { arabic: "مُلَخَّص", transliteration: "mulakhkhaṣ", meaning: "summary", meaningFr: "résumé" }
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
    objectivesFr: ["Comprendre les valeurs culturelles", "Naviguer les situations sociales", "Apprécier la diversité", "Éviter les malentendus culturels"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Core Values", titleFr: "Valeurs fondamentales", content: "كَرَم - generosity\nشَرَف - honor\nضِيَافَة - hospitality\nصِلَة الرَّحِم - family ties\nاِحْتِرَام - respect", contentFr: "كَرَم - générosité\nشَرَف - honneur\nضِيَافَة - hospitalité\nصِلَة الرَّحِم - liens familiaux\nاِحْتِرَام - respect" },
        { title: "Social Etiquette", titleFr: "Étiquette sociale", content: "Greetings are elaborate and important\nGuest treatment is paramount\nElderly are highly respected\nFamily is central to identity", contentFr: "Les salutations sont élaborées et importantes\nL'accueil des invités est primordial\nLes aînés sont très respectés\nLa famille est centrale à l'identité" },
        { title: "Regional Diversity", titleFr: "Diversité régionale", content: "المَشْرِق - Levant\nالمَغْرِب - North Africa\nالخَلِيج - Gulf\nEach has distinct customs while sharing core values", contentFr: "المَشْرِق - Levant\nالمَغْرِب - Afrique du Nord\nالخَلِيج - Golfe\nChacun a des coutumes distinctes tout en partageant les valeurs fondamentales" }
      ],
      vocabulary: [
        { arabic: "ثَقَافَة", transliteration: "thaqāfa", meaning: "culture", meaningFr: "culture" },
        { arabic: "تَقَالِيد", transliteration: "taqālīd", meaning: "traditions", meaningFr: "traditions" },
        { arabic: "عَادَات", transliteration: "'ādāt", meaning: "customs", meaningFr: "coutumes" },
        { arabic: "قِيَم", transliteration: "qiyam", meaning: "values", meaningFr: "valeurs" },
        { arabic: "هُوِيَّة", transliteration: "huwiyya", meaning: "identity", meaningFr: "identité" }
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
    objectivesFr: ["Comprendre les proverbes courants", "Utiliser correctement les idiomes", "Apprécier la littérature de sagesse", "Sonner plus naturel"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Common Proverbs", titleFr: "Proverbes courants", content: "العِلْمُ فِي الصِّغَرِ كَالنَّقْشِ فِي الحَجَرِ\nLearning in youth is like carving in stone\n\nمَنْ جَدَّ وَجَدَ\nWhoever strives, finds", contentFr: "العِلْمُ فِي الصِّغَرِ كَالنَّقْشِ فِي الحَجَرِ\nL'apprentissage dans la jeunesse est comme graver dans la pierre\n\nمَنْ جَدَّ وَجَدَ\nQuiconque s'efforce, trouve" },
        { title: "Idioms", titleFr: "Idiomes", content: "عَلَى رَأْسِي - at your service (lit. on my head)\nفِي عَيْنِي - very dear (lit. in my eye)\nاِبْنُ البَلَد - local person, patriot", contentFr: "عَلَى رَأْسِي - à votre service (lit. sur ma tête)\nفِي عَيْنِي - très cher (lit. dans mon œil)\nاِبْنُ البَلَد - habitant local, patriote" },
        { title: "Expressions", titleFr: "Expressions", content: "إِنْ شَاءَ اللهُ - God willing\nمَا شَاءَ اللهُ - what God has willed (admiration)\nالحَمْدُ لِلَّهِ - praise be to God", contentFr: "إِنْ شَاءَ اللهُ - si Dieu le veut\nمَا شَاءَ اللهُ - ce que Dieu a voulu (admiration)\nالحَمْدُ لِلَّهِ - louanges à Dieu" }
      ],
      vocabulary: [
        { arabic: "مَثَل", transliteration: "mathal", meaning: "proverb", meaningFr: "proverbe" },
        { arabic: "حِكْمَة", transliteration: "ḥikma", meaning: "wisdom", meaningFr: "sagesse" },
        { arabic: "تَعْبِير", transliteration: "ta'bīr", meaning: "expression", meaningFr: "expression" },
        { arabic: "مَجَازِيّ", transliteration: "majāzī", meaning: "figurative", meaningFr: "figuré" },
        { arabic: "حَرْفِيّ", transliteration: "ḥarfī", meaning: "literal", meaningFr: "littéral" }
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
    objectivesFr: ["Comprendre le vocabulaire religieux", "Naviguer les contextes culturels", "Montrer une conscience culturelle", "Éviter les malentendus"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Daily Expressions", titleFr: "Expressions quotidiennes", content: "بِسْمِ اللهِ - in God's name (starting)\nالحَمْدُ لِلَّهِ - praise God (gratitude)\nسُبْحَانَ اللهِ - glory to God (amazement)\nأَسْتَغْفِرُ اللهَ - I seek God's forgiveness", contentFr: "بِسْمِ اللهِ - au nom de Dieu (commencer)\nالحَمْدُ لِلَّهِ - louer Dieu (gratitude)\nسُبْحَانَ اللهِ - gloire à Dieu (étonnement)\nأَسْتَغْفِرُ اللهَ - je demande pardon à Dieu" },
        { title: "Religious Practices", titleFr: "Pratiques religieuses", content: "صَلَاة - prayer\nصَوْم/صِيَام - fasting\nزَكَاة - charity\nحَجّ - pilgrimage", contentFr: "صَلَاة - prière\nصَوْم/صِيَام - jeûne\nزَكَاة - aumône\nحَجّ - pèlerinage" },
        { title: "Important Terms", titleFr: "Termes importants", content: "حَلَال - permitted\nحَرَام - forbidden\nسُنَّة - prophetic tradition\nفِقْه - jurisprudence", contentFr: "حَلَال - permis\nحَرَام - interdit\nسُنَّة - tradition prophétique\nفِقْه - jurisprudence" }
      ],
      vocabulary: [
        { arabic: "مَسْجِد/جَامِع", transliteration: "masjid/jāmi'", meaning: "mosque", meaningFr: "mosquée" },
        { arabic: "إِمَام", transliteration: "imām", meaning: "prayer leader", meaningFr: "imam" },
        { arabic: "خُطْبَة", transliteration: "khuṭba", meaning: "sermon", meaningFr: "sermon" },
        { arabic: "دُعَاء", transliteration: "du'ā'", meaning: "supplication", meaningFr: "supplication" },
        { arabic: "ذِكْر", transliteration: "dhikr", meaning: "remembrance", meaningFr: "remémoration" }
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
    objectivesFr: ["Comprendre les périodes historiques", "Reconnaître les figures historiques", "Connecter l'histoire à la langue", "Apprécier le patrimoine"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Major Periods", titleFr: "Périodes majeures", content: "الجَاهِلِيَّة - Pre-Islamic era\nصَدْر الإِسْلَام - Early Islamic period\nالعَصْر الأُمَوِيّ - Umayyad era\nالعَصْر العَبَّاسِيّ - Abbasid era (Golden Age)\nالعَصْر الحَدِيث - Modern era", contentFr: "الجَاهِلِيَّة - Ère pré-islamique\nصَدْر الإِسْلَام - Période islamique précoce\nالعَصْر الأُمَوِيّ - Ère omeyyade\nالعَصْر العَبَّاسِيّ - Ère abbassade (Âge d'or)\nالعَصْر الحَدِيث - Ère moderne" },
        { title: "Golden Age", titleFr: "Âge d'or", content: "بَغْدَاد - center of learning\nبَيْت الحِكْمَة - House of Wisdom\nTranslation movement\nAdvances in science, medicine, philosophy", contentFr: "بَغْدَاد - centre d'apprentissage\nبَيْت الحِكْمَة - Maison de la Sagesse\nMouvement de traduction\nProgrès en science, médecine, philosophie" },
        { title: "Modern History", titleFr: "Histoire moderne", content: "الاِسْتِعْمَار - colonialism\nالاِسْتِقْلَال - independence\nالقَضِيَّة الفِلَسْطِينِيَّة - Palestinian cause\nالرَّبِيع العَرَبِيّ - Arab Spring", contentFr: "الاِسْتِعْمَار - colonialisme\nالاِسْتِقْلَال - indépendance\nالقَضِيَّة الفِلَسْطِينِيَّة - Cause palestinienne\nالرَّبِيع العَرَبِيّ - Printemps arabe" }
      ],
      vocabulary: [
        { arabic: "تَارِيخ", transliteration: "tārīkh", meaning: "history", meaningFr: "histoire" },
        { arabic: "حَضَارَة", transliteration: "ḥaḍāra", meaning: "civilization", meaningFr: "civilisation" },
        { arabic: "تُرَاث", transliteration: "turāth", meaning: "heritage", meaningFr: "patrimoine" },
        { arabic: "عَصْر", transliteration: "'aṣr", meaning: "era/age", meaningFr: "ère/époque" },
        { arabic: "خِلَافَة", transliteration: "khilāfa", meaning: "caliphate", meaningFr: "califat" }
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
    objectivesFr: ["Apprécier la musique arabe", "Comprendre les formes artistiques", "Apprendre le vocabulaire artistique", "Discuter les arts en arabe"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Music", titleFr: "Musique", content: "مَقَام - modal system\nطَرَب - musical ecstasy\nعُود - oud (lute)\nنَاي - flute\nدُفّ - drum", contentFr: "مَقَام - système modal\nطَرَب - extase musicale\nعُود - oud (luth)\nنَاي - flûte\nدُفّ - tambour" },
        { title: "Visual Arts", titleFr: "Arts visuels", content: "خَطّ - calligraphy\nزَخْرَفَة - ornamentation\nأَرَابِيسْك - arabesque\nفَنّ إِسْلَامِيّ - Islamic art", contentFr: "خَطّ - calligraphie\nزَخْرَفَة - ornementation\nأَرَابِيسْك - arabesque\nفَنّ إِسْلَامِيّ - art islamique" },
        { title: "Famous Artists", titleFr: "Artistes célèbres", content: "أُمّ كُلْثُوم - legendary singer\nفَيْرُوز - Lebanese singer\nعَبْد الحَلِيم - romantic singer\nمَحْمُود دَرْوِيش - poet", contentFr: "أُمّ كُلْثُوم - chanteuse légendaire\nفَيْرُوز - chanteuse libanaise\nعَبْد الحَلِيم - chanteur romantique\nمَحْمُود دَرْوِيش - poète" }
      ],
      vocabulary: [
        { arabic: "فَنّ", transliteration: "fann", meaning: "art", meaningFr: "art" },
        { arabic: "مُوسِيقَى", transliteration: "mūsīqā", meaning: "music", meaningFr: "musique" },
        { arabic: "غِنَاء", transliteration: "ghinā'", meaning: "singing", meaningFr: "chant" },
        { arabic: "أُغْنِيَة", transliteration: "ughniya", meaning: "song", meaningFr: "chanson" },
        { arabic: "فَنَّان", transliteration: "fannān", meaning: "artist", meaningFr: "artiste" }
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
    objectivesFr: ["Revoir la grammaire avancée", "Démontrer les connaissances littéraires", "Montrer les compétences en langage professionnel", "Exhiber la compréhension culturelle"],
    estimatedTime: 60, difficulty: "hard", xpReward: 120,
    content: {
      theory: [
        { title: "Grammar Mastery", titleFr: "Maîtrise de la grammaire", content: "Full case system (I'rab)\nAll derived forms\nNumber agreement\nWeak verbs", contentFr: "Système de cas complet (I'rab)\nToutes les formes dérivées\nAccord en nombre\nVerbes faibles" },
        { title: "Literature Skills", titleFr: "Compétences littéraires", content: "Poetry basics\nProse styles\nClassical and modern texts\nLiterary analysis", contentFr: "Bases de la poésie\nStyles de prose\nTextes classiques et modernes\nAnalyse littéraire" },
        { title: "Professional Skills", titleFr: "Compétences professionnelles", content: "News and political Arabic\nBusiness and legal language\nAcademic writing\nPresentations", contentFr: "Arabe journalistique et politique\nLangage commercial et juridique\nÉcriture académique\nPrésentations" }
      ],
      vocabulary: [
        { arabic: "طَلَاقَة", transliteration: "ṭalāqa", meaning: "fluency", meaningFr: "fluidité" },
        { arabic: "إِتْقَان", transliteration: "itqān", meaning: "mastery", meaningFr: "maîtrise" },
        { arabic: "كَفَاءَة", transliteration: "kafā'a", meaning: "competence", meaningFr: "compétence" },
        { arabic: "مَهَارَة", transliteration: "mahāra", meaning: "skill", meaningFr: "compétence" },
        { arabic: "شَهَادَة", transliteration: "shahāda", meaning: "certificate", meaningFr: "certificat" }
      ]
    },
    exerciseCount: 22, prerequisites: ["4-29"]
  }
];
