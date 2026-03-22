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
    description: "Learn Form II verbs with doubled middle radical for intensification",
    objectives: ["Understand Form II pattern", "Recognize doubled consonant", "Form causative verbs", "Practice common Form II verbs"],
    estimatedTime: 50, difficulty: "medium", xpReward: 65,
    content: {
      theory: [
        { title: "Introduction to Verb Forms", content: "Arabic has 10 verb forms (أوزان). Each form adds specific meaning. Form II (فَعَّلَ) doubles the middle letter with shadda, often making verbs causative or intensive." },
        { title: "Form II Pattern", content: "Base: فَعَلَ (fa'ala) → Form II: فَعَّلَ (fa''ala)\nExamples:\n• عَلِمَ (knew) → عَلَّمَ (taught)\n• كَسَرَ (broke) → كَسَّرَ (shattered)\n• فَهِمَ (understood) → فَهَّمَ (made understand)" },
        { title: "Common Uses", content: "1. Causative: making someone do something\n2. Intensive: doing something intensely\n3. Declarative: considering something as X" }
      ],
      vocabulary: [
        { arabic: "عَلَّمَ", transliteration: "'allama", meaning: "to teach" },
        { arabic: "دَرَّسَ", transliteration: "darrasa", meaning: "to teach/instruct" },
        { arabic: "كَلَّمَ", transliteration: "kallama", meaning: "to speak to" },
        { arabic: "صَوَّرَ", transliteration: "ṣawwara", meaning: "to photograph" },
        { arabic: "قَدَّمَ", transliteration: "qaddama", meaning: "to present/offer" }
      ]
    },
    exerciseCount: 16, prerequisites: []
  },
  {
    id: "3-2", phaseId: 3, order: 2,
    title: "Verb Form III (فَاعَلَ)",
    titleAr: "الفعل المزيد - فَاعَلَ",
    description: "Learn Form III verbs with alif after first radical for reciprocal actions",
    objectives: ["Understand Form III pattern", "Recognize reciprocal meaning", "Form interaction verbs", "Use in conversations"],
    estimatedTime: 50, difficulty: "medium", xpReward: 65,
    content: {
      theory: [
        { title: "Form III Pattern", content: "Form III adds alif (ا) after the first radical: فَعَلَ → فَاعَلَ\nThis form typically indicates mutual or reciprocal action - doing something WITH someone." },
        { title: "Examples", content: "• كَتَبَ (wrote) → كَاتَبَ (corresponded with)\n• قَتَلَ (killed) → قَاتَلَ (fought with)\n• سَافَرَ (traveled) → سَافَرَ (traveled with)" },
        { title: "Reciprocal Meaning", content: "Form III often means doing an action together:\n• شَارَكَ - to participate/share with\n• حَاوَرَ - to converse with\n• جَاوَرَ - to be neighbor to" }
      ],
      vocabulary: [
        { arabic: "سَاعَدَ", transliteration: "sā'ada", meaning: "to help" },
        { arabic: "شَاهَدَ", transliteration: "shāhada", meaning: "to watch/witness" },
        { arabic: "حَاوَلَ", transliteration: "ḥāwala", meaning: "to try/attempt" },
        { arabic: "سَافَرَ", transliteration: "sāfara", meaning: "to travel" },
        { arabic: "قَابَلَ", transliteration: "qābala", meaning: "to meet" }
      ]
    },
    exerciseCount: 16, prerequisites: ["3-1"]
  },
  {
    id: "3-3", phaseId: 3, order: 3,
    title: "Verb Form IV (أَفْعَلَ)",
    titleAr: "الفعل المزيد - أَفْعَلَ",
    description: "Learn Form IV verbs with hamza prefix for causative meaning",
    objectives: ["Understand Form IV pattern", "Recognize hamza prefix", "Form causative verbs", "Distinguish from Form II"],
    estimatedTime: 50, difficulty: "medium", xpReward: 65,
    content: {
      theory: [
        { title: "Form IV Pattern", content: "Form IV adds hamza (أ) prefix and sukun on first radical: فَعَلَ → أَفْعَلَ\nLike Form II, it often has causative meaning but is more common with certain roots." },
        { title: "Examples", content: "• خَرَجَ (went out) → أَخْرَجَ (took out)\n• دَخَلَ (entered) → أَدْخَلَ (inserted)\n• سَلَمَ (was safe) → أَسْلَمَ (submitted/became Muslim)" },
        { title: "Form IV vs Form II", content: "Both can be causative:\n• Form II: more intensive, physical actions\n• Form IV: more abstract, state changes" }
      ],
      vocabulary: [
        { arabic: "أَرْسَلَ", transliteration: "arsala", meaning: "to send" },
        { arabic: "أَكْمَلَ", transliteration: "akmala", meaning: "to complete" },
        { arabic: "أَحَبَّ", transliteration: "aḥabba", meaning: "to love" },
        { arabic: "أَصْبَحَ", transliteration: "aṣbaḥa", meaning: "to become" },
        { arabic: "أَعْطَى", transliteration: "a'ṭā", meaning: "to give" }
      ]
    },
    exerciseCount: 16, prerequisites: ["3-2"]
  },
  {
    id: "3-4", phaseId: 3, order: 4,
    title: "Verb Form V (تَفَعَّلَ)",
    titleAr: "الفعل المزيد - تَفَعَّلَ",
    description: "Learn Form V verbs - reflexive of Form II",
    objectives: ["Understand Form V pattern", "Recognize ta- prefix with shadda", "Form reflexive verbs", "Connect to Form II"],
    estimatedTime: 50, difficulty: "medium", xpReward: 65,
    content: {
      theory: [
        { title: "Form V Pattern", content: "Form V = ta- prefix + Form II: تَفَعَّلَ\nIt's the reflexive of Form II - the action happens to oneself." },
        { title: "Examples", content: "• عَلَّمَ (taught) → تَعَلَّمَ (learned = taught oneself)\n• كَلَّمَ (spoke to) → تَكَلَّمَ (spoke)\n• حَرَّكَ (moved sth) → تَحَرَّكَ (moved oneself)" },
        { title: "Common Uses", content: "1. Reflexive: action on oneself\n2. Gradual process\n3. Pretending/acting as" }
      ],
      vocabulary: [
        { arabic: "تَعَلَّمَ", transliteration: "ta'allama", meaning: "to learn" },
        { arabic: "تَكَلَّمَ", transliteration: "takallama", meaning: "to speak" },
        { arabic: "تَذَكَّرَ", transliteration: "tadhakkara", meaning: "to remember" },
        { arabic: "تَصَوَّرَ", transliteration: "taṣawwara", meaning: "to imagine" },
        { arabic: "تَغَيَّرَ", transliteration: "taghayyara", meaning: "to change" }
      ]
    },
    exerciseCount: 16, prerequisites: ["3-3"]
  },
  {
    id: "3-5", phaseId: 3, order: 5,
    title: "Verb Form VI (تَفَاعَلَ)",
    titleAr: "الفعل المزيد - تَفَاعَلَ",
    description: "Learn Form VI verbs - mutual/reciprocal reflexive",
    objectives: ["Understand Form VI pattern", "Recognize mutual actions", "Form reciprocal verbs", "Connect to Form III"],
    estimatedTime: 50, difficulty: "medium", xpReward: 65,
    content: {
      theory: [
        { title: "Form VI Pattern", content: "Form VI = ta- prefix + Form III: تَفَاعَلَ\nIt expresses mutual action between multiple parties." },
        { title: "Examples", content: "• قَاتَلَ (fought with) → تَقَاتَلَ (fought each other)\n• بَادَلَ (exchanged with) → تَبَادَلَ (exchanged mutually)\n• سَاعَدَ (helped) → تَسَاعَدَ (helped each other)" },
        { title: "Pretending Meaning", content: "Form VI can also mean pretending:\n• تَمَارَضَ - pretended to be sick\n• تَجَاهَلَ - pretended not to know\n• تَنَاسَى - pretended to forget" }
      ],
      vocabulary: [
        { arabic: "تَعَاوَنَ", transliteration: "ta'āwana", meaning: "to cooperate" },
        { arabic: "تَبَادَلَ", transliteration: "tabādala", meaning: "to exchange" },
        { arabic: "تَفَاهَمَ", transliteration: "tafāhama", meaning: "to understand each other" },
        { arabic: "تَوَاصَلَ", transliteration: "tawāṣala", meaning: "to communicate" },
        { arabic: "تَسَاءَلَ", transliteration: "tasā'ala", meaning: "to wonder" }
      ]
    },
    exerciseCount: 16, prerequisites: ["3-4"]
  },
  {
    id: "3-6", phaseId: 3, order: 6,
    title: "Verb Forms VII-X Overview",
    titleAr: "نظرة عامة على الأوزان السابع إلى العاشر",
    description: "Overview of Forms VII, VIII, IX, and X with key examples",
    objectives: ["Understand Forms VII-X patterns", "Recognize passive/reflexive meanings", "Learn common verbs from each form", "Master form recognition"],
    estimatedTime: 55, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Form VII (اِنْفَعَلَ)", content: "Passive/reflexive of Form I:\n• كَسَرَ (broke) → اِنْكَسَرَ (was broken)\n• فَتَحَ (opened) → اِنْفَتَحَ (was opened)" },
        { title: "Form VIII (اِفْتَعَلَ)", content: "Reflexive with middle infixed ت:\n• جَمَعَ (gathered) → اِجْتَمَعَ (gathered together)\n• خَلَفَ (differed) → اِخْتَلَفَ (disagreed)" },
        { title: "Form IX (اِفْعَلَّ)", content: "Colors and defects:\n• أَحْمَر (red) → اِحْمَرَّ (became red)\n• أَصْفَر (yellow) → اِصْفَرَّ (turned yellow)" },
        { title: "Form X (اِسْتَفْعَلَ)", content: "Seeking/considering:\n• غَفَرَ (forgave) → اِسْتَغْفَرَ (sought forgiveness)\n• عَمَلَ (worked) → اِسْتَعْمَلَ (used)" }
      ],
      vocabulary: [
        { arabic: "اِنْتَظَرَ", transliteration: "intaẓara", meaning: "to wait (VIII)" },
        { arabic: "اِسْتَخْدَمَ", transliteration: "istakhdama", meaning: "to use (X)" },
        { arabic: "اِحْتَاجَ", transliteration: "iḥtāja", meaning: "to need (VIII)" },
        { arabic: "اِسْتَمَعَ", transliteration: "istama'a", meaning: "to listen (X)" },
        { arabic: "اِعْتَقَدَ", transliteration: "i'taqada", meaning: "to believe (VIII)" }
      ]
    },
    exerciseCount: 18, prerequisites: ["3-5"]
  },
  // SECTION 2: VERB MOODS (Lessons 7-12)
  {
    id: "3-7", phaseId: 3, order: 7,
    title: "The Subjunctive Mood (المُضارع المنصوب)",
    titleAr: "المُضارع المنصوب",
    description: "Learn the subjunctive mood and particles that trigger it",
    objectives: ["Understand subjunctive concept", "Recognize nasb particles", "Apply fatha ending", "Form complex sentences"],
    estimatedTime: 50, difficulty: "medium", xpReward: 65,
    content: {
      theory: [
        { title: "What is Subjunctive?", content: "The subjunctive (منصوب) is used after certain particles to express wishes, purposes, or uncertainty. The verb ending changes from damma (ُ) to fatha (َ)." },
        { title: "Subjunctive Particles", content: "أَنْ (that/to) - most common\nلَنْ (will not) - negative future\nكَيْ / لِكَيْ (in order to)\nحَتَّى (until/so that)\nلِ (to/in order to)" },
        { title: "Examples", content: "أُرِيدُ أَنْ أَذْهَبَ - I want to go\nلَنْ أَنْسَى - I will not forget\nدَرَسْتُ لِأَنْجَحَ - I studied to succeed" }
      ],
      vocabulary: [
        { arabic: "أَنْ", transliteration: "an", meaning: "that/to (subjunctive)" },
        { arabic: "لَنْ", transliteration: "lan", meaning: "will not" },
        { arabic: "كَيْ", transliteration: "kay", meaning: "in order to" },
        { arabic: "حَتَّى", transliteration: "ḥattā", meaning: "until/so that" },
        { arabic: "لِ", transliteration: "li", meaning: "to/for" }
      ]
    },
    exerciseCount: 16, prerequisites: ["3-6"]
  },
  {
    id: "3-8", phaseId: 3, order: 8,
    title: "The Jussive Mood (المُضارع المجزوم)",
    titleAr: "المُضارع المجزوم",
    description: "Learn the jussive mood for commands and negation",
    objectives: ["Understand jussive concept", "Recognize jazm particles", "Apply sukun ending", "Use لَمْ for negation"],
    estimatedTime: 50, difficulty: "medium", xpReward: 65,
    content: {
      theory: [
        { title: "What is Jussive?", content: "The jussive (مجزوم) is used after certain particles, especially for negation and commands. The final vowel becomes sukun (ْ)." },
        { title: "Jussive Particles", content: "لَمْ (did not) - past negation\nلَمَّا (not yet)\nلِ/لا (let/don't - commands)\nإِنْ (if - conditional)" },
        { title: "Examples", content: "لَمْ أَفْهَمْ - I did not understand\nلَمَّا يَصِلْ - He hasn't arrived yet\nلِنَذْهَبْ - Let's go\nلا تَنْسَ - Don't forget" }
      ],
      vocabulary: [
        { arabic: "لَمْ", transliteration: "lam", meaning: "did not (past negation)" },
        { arabic: "لَمَّا", transliteration: "lammā", meaning: "not yet" },
        { arabic: "لِنَذْهَبْ", transliteration: "linadhhab", meaning: "let's go" },
        { arabic: "لا تَقْلَقْ", transliteration: "lā taqlaq", meaning: "don't worry" },
        { arabic: "إِنْ", transliteration: "in", meaning: "if (conditional)" }
      ]
    },
    exerciseCount: 16, prerequisites: ["3-7"]
  },
  {
    id: "3-9", phaseId: 3, order: 9,
    title: "The Imperative (الأمر)",
    titleAr: "فعل الأمر",
    description: "Master command forms for all persons",
    objectives: ["Form imperatives from present tense", "Apply hamzat al-wasl rules", "Use negative commands", "Practice polite requests"],
    estimatedTime: 50, difficulty: "medium", xpReward: 65,
    content: {
      theory: [
        { title: "Forming the Imperative", content: "Remove the present tense prefix (ت/ي/ن/أ), add hamzat al-wasl if needed:\nتَكْتُبُ → اُكْتُبْ (write!)\nتَجْلِسُ → اِجْلِسْ (sit!)\nتَفْتَحُ → اِفْتَحْ (open!)" },
        { title: "Hamzat al-Wasl Rules", content: "If first letter after removing prefix has:\n• Damma (ُ): use اُ\n• Kasra (ِ) or Fatha (َ): use اِ" },
        { title: "Negative Commands", content: "Use لا + Jussive:\nلا تَكْتُبْ - Don't write\nلا تَذْهَبْ - Don't go" }
      ],
      vocabulary: [
        { arabic: "اُكْتُبْ", transliteration: "uktub", meaning: "write!" },
        { arabic: "اِقْرَأْ", transliteration: "iqra'", meaning: "read!" },
        { arabic: "اِسْمَعْ", transliteration: "isma'", meaning: "listen!" },
        { arabic: "تَعَالَ", transliteration: "ta'āla", meaning: "come!" },
        { arabic: "اُنْظُرْ", transliteration: "unẓur", meaning: "look!" }
      ]
    },
    exerciseCount: 16, prerequisites: ["3-8"]
  },
  {
    id: "3-10", phaseId: 3, order: 10,
    title: "Conditional Sentences (الجمل الشرطية)",
    titleAr: "الجمل الشرطية",
    description: "Learn to form if-then conditional sentences",
    objectives: ["Understand condition and response", "Use إِنْ and إِذَا", "Apply correct verb moods", "Form real and unreal conditions"],
    estimatedTime: 55, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Conditional Structure", content: "Arabic conditionals have:\n1. Conditional particle (أداة الشرط)\n2. Condition clause (فعل الشرط)\n3. Response clause (جواب الشرط)" },
        { title: "إِنْ vs إِذَا", content: "إِنْ - uncertain condition (uses jussive)\nإِذَا - likely condition (uses indicative)\n\nإِنْ تَدْرُسْ تَنْجَحْ - If you study, you'll succeed\nإِذَا دَرَسْتَ نَجَحْتَ - When you study, you succeed" },
        { title: "Other Conditionals", content: "لَوْ - hypothetical (if only)\nلَوْلا - if not for\nمَنْ - whoever\nمَا - whatever" }
      ],
      vocabulary: [
        { arabic: "إِنْ شَاءَ اللهُ", transliteration: "in shā' Allāh", meaning: "God willing" },
        { arabic: "لَوْ سَمَحْتَ", transliteration: "law samaḥta", meaning: "please (if you permit)" },
        { arabic: "إِذَا أَرَدْتَ", transliteration: "idhā aradta", meaning: "if you want" },
        { arabic: "مَهْمَا حَدَثَ", transliteration: "mahmā ḥadatha", meaning: "whatever happens" },
        { arabic: "حَيْثُمَا", transliteration: "ḥaythumā", meaning: "wherever" }
      ]
    },
    exerciseCount: 17, prerequisites: ["3-9"]
  },
  {
    id: "3-11", phaseId: 3, order: 11,
    title: "Passive Voice (المبني للمجهول)",
    titleAr: "المبني للمجهول",
    description: "Learn to form and use passive voice in Arabic",
    objectives: ["Change active to passive", "Apply vowel patterns", "Use passive in different tenses", "Identify passive in texts"],
    estimatedTime: 50, difficulty: "medium", xpReward: 65,
    content: {
      theory: [
        { title: "Passive Vowel Pattern", content: "Past: فَعَلَ → فُعِلَ (1st vowel = damma, 2nd = kasra)\nكَتَبَ → كُتِبَ (was written)\nPresent: يَفْعَلُ → يُفْعَلُ (1st prefix = damma, root = fatha)\nيَكْتُبُ → يُكْتَبُ (is being written)" },
        { title: "Examples", content: "قَرَأَ الطَّالِبُ الكِتَابَ → قُرِئَ الكِتَابُ\nThe student read the book → The book was read\n\nيَبْنِي العُمَّالُ البَيْتَ → يُبْنَى البَيْتُ\nThe workers build the house → The house is being built" },
        { title: "Passive Participle", content: "مَفْعُول pattern:\nمَكْتُوب - written\nمَعْرُوف - known\nمَفْهُوم - understood" }
      ],
      vocabulary: [
        { arabic: "كُتِبَ", transliteration: "kutiba", meaning: "was written" },
        { arabic: "قُرِئَ", transliteration: "quri'a", meaning: "was read" },
        { arabic: "فُهِمَ", transliteration: "fuhima", meaning: "was understood" },
        { arabic: "عُرِفَ", transliteration: "'urifa", meaning: "was known" },
        { arabic: "أُكِلَ", transliteration: "ukila", meaning: "was eaten" }
      ]
    },
    exerciseCount: 16, prerequisites: ["3-10"]
  },
  {
    id: "3-12", phaseId: 3, order: 12,
    title: "Verb Moods Review & Practice",
    titleAr: "مراجعة الأفعال وتطبيقات",
    description: "Comprehensive review of all verb moods with practice",
    objectives: ["Distinguish all verb moods", "Apply correct particles", "Form complex sentences", "Translate between moods"],
    estimatedTime: 55, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Mood Summary", content: "مَرْفُوع (Indicative): Regular statement - يَكْتُبُ\nمَنْصُوب (Subjunctive): After أَنْ, لَنْ, etc. - يَكْتُبَ\nمَجْزُوم (Jussive): After لَمْ, لِ, etc. - يَكْتُبْ\nأَمْر (Imperative): Commands - اُكْتُبْ" },
        { title: "Quick Recognition", content: "Look at the final vowel:\nُ (damma) = Indicative\nَ (fatha) = Subjunctive\nْ (sukun) = Jussive" },
        { title: "Common Errors", content: "❌ أُرِيدُ أَنْ أَذْهَبُ (indicative after أَنْ)\n✓ أُرِيدُ أَنْ أَذْهَبَ (subjunctive)\n\n❌ لَمْ أَفْهَمُ (indicative after لَمْ)\n✓ لَمْ أَفْهَمْ (jussive)" }
      ],
      vocabulary: [
        { arabic: "يَجِبُ أَنْ", transliteration: "yajibu an", meaning: "must" },
        { arabic: "يُمْكِنُ أَنْ", transliteration: "yumkinu an", meaning: "it's possible that" },
        { arabic: "مِنَ الضَّرُورِيِّ أَنْ", transliteration: "min aḍ-ḍarūrī an", meaning: "it's necessary that" },
        { arabic: "أَتَمَنَّى أَنْ", transliteration: "atamannā an", meaning: "I wish that" },
        { arabic: "يَجِبُ عَلَيْكَ أَنْ", transliteration: "yajibu 'alayka an", meaning: "you must" }
      ]
    },
    exerciseCount: 18, prerequisites: ["3-11"]
  },
  // SECTION 3: COMPLEX SENTENCES (Lessons 13-18)
  {
    id: "3-13", phaseId: 3, order: 13,
    title: "Relative Clauses (الجمل الموصولة)",
    titleAr: "الجمل الموصولة",
    description: "Learn to form relative clauses with الَّذِي and its variants",
    objectives: ["Use relative pronouns", "Match gender and number", "Form defining clauses", "Build complex descriptions"],
    estimatedTime: 50, difficulty: "medium", xpReward: 65,
    content: {
      theory: [
        { title: "Relative Pronouns", content: "الَّذِي - who/which (masc. sing.)\nالَّتِي - who/which (fem. sing.)\nالَّذِينَ - who/which (masc. pl.)\nاللَّاتِي/اللَّوَاتِي - who/which (fem. pl.)\nاللَّذَانِ/اللَّتَانِ - (dual forms)" },
        { title: "Structure", content: "Antecedent + Relative Pronoun + Clause\nالرَّجُلُ الَّذِي يَعْمَلُ هُنَا\nThe man who works here\n\nالكِتَابُ الَّذِي قَرَأْتُهُ\nThe book which I read" },
        { title: "Resumptive Pronoun", content: "Arabic often needs a pronoun in the clause referring back:\nالمَرْأَةُ الَّتِي رَأَيْتُهَا (the woman whom I saw her)" }
      ],
      vocabulary: [
        { arabic: "الَّذِي", transliteration: "alladhī", meaning: "who/which (m.)" },
        { arabic: "الَّتِي", transliteration: "allatī", meaning: "who/which (f.)" },
        { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: "who/which (m.pl.)" },
        { arabic: "مَا", transliteration: "mā", meaning: "what/that which" },
        { arabic: "مَنْ", transliteration: "man", meaning: "who/whoever" }
      ]
    },
    exerciseCount: 16, prerequisites: ["3-12"]
  },
  {
    id: "3-14", phaseId: 3, order: 14,
    title: "Subordinate Clauses",
    titleAr: "الجمل التابعة",
    description: "Learn various types of subordinate clauses",
    objectives: ["Form temporal clauses", "Use causal connectors", "Build purpose clauses", "Connect ideas smoothly"],
    estimatedTime: 50, difficulty: "medium", xpReward: 65,
    content: {
      theory: [
        { title: "Temporal Clauses", content: "عِنْدَمَا - when\nبَعْدَ أَنْ - after\nقَبْلَ أَنْ - before\nبَيْنَمَا - while\nمُنْذُ أَنْ - since" },
        { title: "Causal Clauses", content: "لِأَنَّ - because\nبِسَبَبِ - because of\nإِذْ - since/as\nحَيْثُ - since/as" },
        { title: "Purpose Clauses", content: "لِكَيْ / لِ - in order to\nحَتَّى - so that\nمِنْ أَجْلِ أَنْ - for the purpose of" }
      ],
      vocabulary: [
        { arabic: "عِنْدَمَا", transliteration: "'indamā", meaning: "when" },
        { arabic: "لِأَنَّ", transliteration: "li'anna", meaning: "because" },
        { arabic: "بَيْنَمَا", transliteration: "baynamā", meaning: "while" },
        { arabic: "بَعْدَ أَنْ", transliteration: "ba'da an", meaning: "after" },
        { arabic: "قَبْلَ أَنْ", transliteration: "qabla an", meaning: "before" }
      ]
    },
    exerciseCount: 16, prerequisites: ["3-13"]
  },
  {
    id: "3-15", phaseId: 3, order: 15,
    title: "Nominal Sentences & Predication",
    titleAr: "الجملة الاسمية والإسناد",
    description: "Master nominal sentence structure and predication rules",
    objectives: ["Understand المبتدأ والخبر", "Apply agreement rules", "Use different predicate types", "Form complex descriptions"],
    estimatedTime: 50, difficulty: "medium", xpReward: 65,
    content: {
      theory: [
        { title: "Nominal Sentence Structure", content: "المُبْتَدَأ (Subject) + الخَبَر (Predicate)\nالبَيْتُ كَبِيرٌ - The house is big\nالطُّلَّابُ مُجْتَهِدُونَ - The students are hardworking" },
        { title: "Types of Predicate", content: "1. Single word: الجَوُّ جَمِيلٌ (The weather is beautiful)\n2. Phrase: الكِتَابُ عَلَى الطَّاوِلَةِ (The book is on the table)\n3. Clause: المُعَلِّمُ يَشْرَحُ (The teacher explains)" },
        { title: "Indefinite Subject", content: "When subject is indefinite, predicate comes first:\nفِي البَيْتِ رَجُلٌ - There is a man in the house\nعِنْدِي سُؤَالٌ - I have a question" }
      ],
      vocabulary: [
        { arabic: "الجَوُّ", transliteration: "al-jaww", meaning: "the weather" },
        { arabic: "جَمِيلٌ", transliteration: "jamīl", meaning: "beautiful" },
        { arabic: "مُمْتَازٌ", transliteration: "mumtāz", meaning: "excellent" },
        { arabic: "ضَرُورِيٌّ", transliteration: "ḍarūrī", meaning: "necessary" },
        { arabic: "مُهِمٌّ", transliteration: "muhimm", meaning: "important" }
      ]
    },
    exerciseCount: 16, prerequisites: ["3-14"]
  },
  {
    id: "3-16", phaseId: 3, order: 16,
    title: "إِنَّ and Its Sisters",
    titleAr: "إِنَّ وأخواتها",
    description: "Learn particles that modify nominal sentences",
    objectives: ["Understand إِنَّ particles", "Apply accusative to subject", "Use for emphasis", "Form nuanced statements"],
    estimatedTime: 50, difficulty: "medium", xpReward: 65,
    content: {
      theory: [
        { title: "إِنَّ and Sisters", content: "These particles take nominative predicate but accusative subject:\nإِنَّ - indeed/verily\nأَنَّ - that (conjunction)\nكَأَنَّ - as if\nلَكِنَّ - but/however\nلَيْتَ - would that (wish)\nلَعَلَّ - perhaps" },
        { title: "Examples", content: "إِنَّ العِلْمَ نُورٌ - Indeed knowledge is light\nعَلِمْتُ أَنَّ الامْتِحَانَ سَهْلٌ - I knew that the exam was easy\nكَأَنَّ الدُّنْيَا حُلْمٌ - As if life is a dream" },
        { title: "Suffix Forms", content: "With pronouns: إِنِّي, إِنَّكَ, إِنَّهُ\nإِنَّنِي أُحِبُّكَ - Indeed I love you\nإِنَّهُ جَيِّدٌ - Indeed it is good" }
      ],
      vocabulary: [
        { arabic: "إِنَّ", transliteration: "inna", meaning: "indeed/verily" },
        { arabic: "أَنَّ", transliteration: "anna", meaning: "that" },
        { arabic: "لَكِنَّ", transliteration: "lākinna", meaning: "but/however" },
        { arabic: "لَعَلَّ", transliteration: "la'alla", meaning: "perhaps" },
        { arabic: "كَأَنَّ", transliteration: "ka'anna", meaning: "as if" }
      ]
    },
    exerciseCount: 16, prerequisites: ["3-15"]
  },
  {
    id: "3-17", phaseId: 3, order: 17,
    title: "Exceptions (الاستثناء)",
    titleAr: "أسلوب الاستثناء",
    description: "Learn to express exceptions using إِلَّا and other particles",
    objectives: ["Use إِلَّا correctly", "Apply case rules for exceptions", "Use other exception words", "Form complete exception statements"],
    estimatedTime: 50, difficulty: "medium", xpReward: 65,
    content: {
      theory: [
        { title: "Exception with إِلَّا", content: "جَاءَ الطُّلَّابُ إِلَّا أَحْمَدَ\nThe students came except Ahmad\n\nAfter إِلَّا: accusative case" },
        { title: "Other Exception Words", content: "غَيْر - other than\nسِوَى - except\nعَدَا - except\nخَلا - except\nحَاشَا - except (God forbid)" },
        { title: "Complete vs Incomplete", content: "Complete (positive): All came except X\nIncomplete (negative): None came except X\n\nIn incomplete, the exception follows the case of the main element:\nمَا جَاءَ إِلَّا أَحْمَدُ (nominative)" }
      ],
      vocabulary: [
        { arabic: "إِلَّا", transliteration: "illā", meaning: "except" },
        { arabic: "غَيْرَ", transliteration: "ghayra", meaning: "other than" },
        { arabic: "سِوَى", transliteration: "siwā", meaning: "except/besides" },
        { arabic: "بِاسْتِثْنَاءِ", transliteration: "bi-istithnā'i", meaning: "with the exception of" },
        { arabic: "مَا عَدَا", transliteration: "mā 'adā", meaning: "except for" }
      ]
    },
    exerciseCount: 16, prerequisites: ["3-16"]
  },
  {
    id: "3-18", phaseId: 3, order: 18,
    title: "Emphasis & Assertion",
    titleAr: "أسلوب التوكيد",
    description: "Learn emphatic constructions in Arabic",
    objectives: ["Use لَ for emphasis", "Apply قَدْ correctly", "Use repetition for emphasis", "Form strong assertions"],
    estimatedTime: 50, difficulty: "medium", xpReward: 65,
    content: {
      theory: [
        { title: "Emphatic Particles", content: "لَ - indeed (with verbs)\nإِنَّ - indeed (with nouns)\nلَقَدْ - certainly/indeed\nقَدْ - already/may" },
        { title: "قَدْ Usage", content: "With past verb: certainty/completion\nقَدْ فَعَلْتُ - I have indeed done\n\nWith present verb: possibility\nقَدْ يَأْتِي - He may come" },
        { title: "Repetition Emphasis", content: "Repeating words for emphasis:\nجَاءَ جَاءَ - He really came\nنَفْس - same/very: الكِتَابُ نَفْسُهُ - the book itself\nعَيْن - same: رَأَيْتُهُ بِعَيْنِي - I saw him with my own eyes" }
      ],
      vocabulary: [
        { arabic: "لَقَدْ", transliteration: "laqad", meaning: "certainly/indeed" },
        { arabic: "قَدْ", transliteration: "qad", meaning: "already/may" },
        { arabic: "بِالفِعْلِ", transliteration: "bil-fi'l", meaning: "actually/indeed" },
        { arabic: "حَقًّا", transliteration: "ḥaqqan", meaning: "truly/really" },
        { arabic: "فِعْلًا", transliteration: "fi'lan", meaning: "really/actually" }
      ]
    },
    exerciseCount: 16, prerequisites: ["3-17"]
  },
  // SECTION 4: VOCABULARY EXPANSION (Lessons 19-24)
  {
    id: "3-19", phaseId: 3, order: 19,
    title: "Work & Professions",
    titleAr: "العمل والمهن",
    description: "Learn vocabulary for workplace and professions",
    objectives: ["Name common professions", "Describe work activities", "Discuss career topics", "Use professional vocabulary"],
    estimatedTime: 45, difficulty: "medium", xpReward: 60,
    content: {
      theory: [
        { title: "Professions Pattern", content: "Many professions use فَعَّال pattern:\nنَجَّار - carpenter\nحَدَّاد - blacksmith\nخَبَّاز - baker\n\nOr مُفَعِّل:\nمُهَنْدِس - engineer\nمُمَرِّض - nurse\nمُدَرِّس - teacher" },
        { title: "Workplace Terms", content: "مَكْتَب - office\nشَرِكَة - company\nمَصْنَع - factory\nمَتْجَر - store\nمُسْتَشْفَى - hospital" }
      ],
      vocabulary: [
        { arabic: "طَبِيب", transliteration: "ṭabīb", meaning: "doctor" },
        { arabic: "مُحَامٍ", transliteration: "muḥāmin", meaning: "lawyer" },
        { arabic: "صَحَفِيّ", transliteration: "ṣaḥafī", meaning: "journalist" },
        { arabic: "مُوَظَّف", transliteration: "muwaẓẓaf", meaning: "employee" },
        { arabic: "مُدِير", transliteration: "mudīr", meaning: "manager" },
        { arabic: "رَاتِب", transliteration: "rātib", meaning: "salary" }
      ]
    },
    exerciseCount: 15, prerequisites: ["3-18"]
  },
  {
    id: "3-20", phaseId: 3, order: 20,
    title: "Education & Learning",
    titleAr: "التعليم والتعلم",
    description: "Vocabulary for academic and educational contexts",
    objectives: ["Describe educational systems", "Discuss studies and exams", "Talk about school life", "Use academic vocabulary"],
    estimatedTime: 45, difficulty: "medium", xpReward: 60,
    content: {
      theory: [
        { title: "Educational Levels", content: "رَوْضَة - kindergarten\nاِبْتِدَائِيَّة - primary school\nثَانَوِيَّة - secondary school\nجَامِعَة - university\nمَعْهَد - institute" },
        { title: "Academic Terms", content: "اِمْتِحَان - exam\nدَرَجَة - grade/degree\nشَهَادَة - certificate\nفَصْل - semester/class\nمَادَّة - subject" }
      ],
      vocabulary: [
        { arabic: "طَالِب", transliteration: "ṭālib", meaning: "student" },
        { arabic: "أُسْتَاذ", transliteration: "ustādh", meaning: "professor" },
        { arabic: "مُحَاضَرَة", transliteration: "muḥāḍara", meaning: "lecture" },
        { arabic: "بَحْث", transliteration: "baḥth", meaning: "research" },
        { arabic: "تَخَرَّجَ", transliteration: "takharraja", meaning: "to graduate" },
        { arabic: "دَرَسَ", transliteration: "darasa", meaning: "to study" }
      ]
    },
    exerciseCount: 15, prerequisites: ["3-19"]
  },
  {
    id: "3-21", phaseId: 3, order: 21,
    title: "Travel & Tourism",
    titleAr: "السفر والسياحة",
    description: "Essential vocabulary for traveling",
    objectives: ["Book travel arrangements", "Navigate airports", "Describe destinations", "Handle travel situations"],
    estimatedTime: 45, difficulty: "medium", xpReward: 60,
    content: {
      theory: [
        { title: "Travel Vocabulary", content: "سَفَر - travel\nرِحْلَة - trip\nحَجْز - reservation\nتَذْكَرَة - ticket\nجَوَاز سَفَر - passport" },
        { title: "At the Airport", content: "مَطَار - airport\nطَائِرَة - airplane\nإِقْلَاع - takeoff\nهُبُوط - landing\nتَأْشِيرَة - visa" }
      ],
      vocabulary: [
        { arabic: "فُنْدُق", transliteration: "funduq", meaning: "hotel" },
        { arabic: "غُرْفَة", transliteration: "ghurfa", meaning: "room" },
        { arabic: "حَقِيبَة", transliteration: "ḥaqība", meaning: "bag/suitcase" },
        { arabic: "سَائِح", transliteration: "sā'iḥ", meaning: "tourist" },
        { arabic: "مَعْلَم", transliteration: "ma'lam", meaning: "landmark" },
        { arabic: "خَرِيطَة", transliteration: "kharīṭa", meaning: "map" }
      ]
    },
    exerciseCount: 15, prerequisites: ["3-20"]
  },
  {
    id: "3-22", phaseId: 3, order: 22,
    title: "Health & Medicine",
    titleAr: "الصحة والطب",
    description: "Medical vocabulary and health expressions",
    objectives: ["Describe symptoms", "Understand medical terms", "Visit a doctor", "Discuss health topics"],
    estimatedTime: 45, difficulty: "medium", xpReward: 60,
    content: {
      theory: [
        { title: "Body Parts Review", content: "رَأْس - head\nصَدْر - chest\nمَعِدَة - stomach\nظَهْر - back\nقَلْب - heart" },
        { title: "Symptoms & Conditions", content: "أَلَم - pain\nحُمَّى - fever\nصُدَاع - headache\nزُكَام - cold\nسُعَال - cough" }
      ],
      vocabulary: [
        { arabic: "مَرِيض", transliteration: "marīḍ", meaning: "patient/sick" },
        { arabic: "دَوَاء", transliteration: "dawā'", meaning: "medicine" },
        { arabic: "صَيْدَلِيَّة", transliteration: "ṣaydaliyya", meaning: "pharmacy" },
        { arabic: "عِلَاج", transliteration: "'ilāj", meaning: "treatment" },
        { arabic: "عَمَلِيَّة", transliteration: "'amaliyya", meaning: "surgery" },
        { arabic: "مَوْعِد", transliteration: "maw'id", meaning: "appointment" }
      ]
    },
    exerciseCount: 15, prerequisites: ["3-21"]
  },
  {
    id: "3-23", phaseId: 3, order: 23,
    title: "Technology & Internet",
    titleAr: "التكنولوجيا والإنترنت",
    description: "Modern technology vocabulary",
    objectives: ["Discuss technology topics", "Use internet terminology", "Describe devices", "Navigate digital world"],
    estimatedTime: 45, difficulty: "medium", xpReward: 60,
    content: {
      theory: [
        { title: "Devices", content: "حَاسُوب - computer\nهَاتِف ذَكِيّ - smartphone\nلَوْحَة - tablet\nشَاشَة - screen\nلَوْحَة مَفَاتِيح - keyboard" },
        { title: "Internet Terms", content: "إِنْتَرْنِت - internet\nمَوْقِع - website\nبَرِيد إِلِكْتْرُونِيّ - email\nتَطْبِيق - application\nتَحْمِيل - download" }
      ],
      vocabulary: [
        { arabic: "بَرْنَامَج", transliteration: "barnāmaj", meaning: "program/software" },
        { arabic: "شَبَكَة", transliteration: "shabaka", meaning: "network" },
        { arabic: "كَلِمَة سِرّ", transliteration: "kalimat sirr", meaning: "password" },
        { arabic: "حِسَاب", transliteration: "ḥisāb", meaning: "account" },
        { arabic: "رِسَالَة", transliteration: "risāla", meaning: "message" },
        { arabic: "مُشَارَكَة", transliteration: "mushāraka", meaning: "sharing" }
      ]
    },
    exerciseCount: 15, prerequisites: ["3-22"]
  },
  {
    id: "3-24", phaseId: 3, order: 24,
    title: "Environment & Nature",
    titleAr: "البيئة والطبيعة",
    description: "Environmental and nature vocabulary",
    objectives: ["Describe natural features", "Discuss environmental issues", "Talk about weather", "Use nature vocabulary"],
    estimatedTime: 45, difficulty: "medium", xpReward: 60,
    content: {
      theory: [
        { title: "Natural Features", content: "جَبَل - mountain\nنَهْر - river\nبَحْر - sea\nصَحْرَاء - desert\nغَابَة - forest" },
        { title: "Environmental Issues", content: "تَلَوُّث - pollution\nإِعَادَة تَدْوِير - recycling\nاِحْتِبَاس حَرَارِيّ - global warming\nطَاقَة مُتَجَدِّدَة - renewable energy" }
      ],
      vocabulary: [
        { arabic: "طَبِيعَة", transliteration: "ṭabī'a", meaning: "nature" },
        { arabic: "بِيئَة", transliteration: "bī'a", meaning: "environment" },
        { arabic: "مُنَاخ", transliteration: "munākh", meaning: "climate" },
        { arabic: "حَيَوَان", transliteration: "ḥayawān", meaning: "animal" },
        { arabic: "نَبَات", transliteration: "nabāt", meaning: "plant" },
        { arabic: "شَجَرَة", transliteration: "shajara", meaning: "tree" }
      ]
    },
    exerciseCount: 15, prerequisites: ["3-23"]
  },
  // SECTION 5: READING & WRITING SKILLS (Lessons 25-30)
  {
    id: "3-25", phaseId: 3, order: 25,
    title: "Reading News Articles",
    titleAr: "قراءة المقالات الإخبارية",
    description: "Learn to read and understand Arabic news",
    objectives: ["Understand news structure", "Recognize journalistic vocabulary", "Extract main ideas", "Summarize articles"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "News Structure", content: "عُنْوَان - headline\nمُقَدِّمَة - introduction\nتَفَاصِيل - details\nخَاتِمَة - conclusion" },
        { title: "Common News Vocabulary", content: "أَعْلَنَ - announced\nصَرَّحَ - declared\nأَكَّدَ - confirmed\nنَفَى - denied\nوَفْقًا لِـ - according to" }
      ],
      vocabulary: [
        { arabic: "خَبَر", transliteration: "khabar", meaning: "news" },
        { arabic: "مَصْدَر", transliteration: "maṣdar", meaning: "source" },
        { arabic: "تَقْرِير", transliteration: "taqrīr", meaning: "report" },
        { arabic: "مُؤْتَمَر صَحَفِيّ", transliteration: "mu'tamar ṣaḥafī", meaning: "press conference" },
        { arabic: "بَيَان", transliteration: "bayān", meaning: "statement" },
        { arabic: "حَدَث", transliteration: "ḥadath", meaning: "event" }
      ]
    },
    exerciseCount: 17, prerequisites: ["3-24"]
  },
  {
    id: "3-26", phaseId: 3, order: 26,
    title: "Reading Short Stories",
    titleAr: "قراءة القصص القصيرة",
    description: "Develop skills for reading Arabic fiction",
    objectives: ["Understand narrative structure", "Identify literary devices", "Analyze characters", "Appreciate style"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Story Elements", content: "شَخْصِيَّة - character\nحَبْكَة - plot\nمَكَان - setting\nذُرْوَة - climax\nنِهَايَة - ending" },
        { title: "Narrative Vocabulary", content: "رَاوٍ - narrator\nبَطَل - hero/protagonist\nحِوَار - dialogue\nوَصْف - description" }
      ],
      vocabulary: [
        { arabic: "قِصَّة", transliteration: "qiṣṣa", meaning: "story" },
        { arabic: "رِوَايَة", transliteration: "riwāya", meaning: "novel" },
        { arabic: "كَاتِب", transliteration: "kātib", meaning: "writer" },
        { arabic: "فَصْل", transliteration: "faṣl", meaning: "chapter" },
        { arabic: "مَشْهَد", transliteration: "mashhad", meaning: "scene" },
        { arabic: "حَدَثَ", transliteration: "ḥadatha", meaning: "happened" }
      ]
    },
    exerciseCount: 17, prerequisites: ["3-25"]
  },
  {
    id: "3-27", phaseId: 3, order: 27,
    title: "Writing Paragraphs",
    titleAr: "كتابة الفقرات",
    description: "Learn to write coherent paragraphs in Arabic",
    objectives: ["Structure paragraphs properly", "Use topic sentences", "Develop supporting ideas", "Write conclusions"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Paragraph Structure", content: "جُمْلَة رَئِيسِيَّة - Topic sentence\nجُمَل دَاعِمَة - Supporting sentences\nخَاتِمَة - Concluding sentence" },
        { title: "Transition Words", content: "أَوَّلًا - firstly\nثَانِيًا - secondly\nبِالإِضَافَةِ إِلَى - in addition to\nعِلَاوَةً عَلَى - moreover\nفِي الخِتَام - in conclusion" }
      ],
      vocabulary: [
        { arabic: "فِقْرَة", transliteration: "fiqra", meaning: "paragraph" },
        { arabic: "فِكْرَة", transliteration: "fikra", meaning: "idea" },
        { arabic: "حُجَّة", transliteration: "ḥujja", meaning: "argument" },
        { arabic: "مِثَال", transliteration: "mithāl", meaning: "example" },
        { arabic: "دَلِيل", transliteration: "dalīl", meaning: "evidence" },
        { arabic: "اِسْتِنْتَاج", transliteration: "istintāj", meaning: "conclusion" }
      ]
    },
    exerciseCount: 17, prerequisites: ["3-26"]
  },
  {
    id: "3-28", phaseId: 3, order: 28,
    title: "Writing Formal Letters",
    titleAr: "كتابة الرسائل الرسمية",
    description: "Master formal letter writing in Arabic",
    objectives: ["Use formal greetings", "Structure letters properly", "Use appropriate register", "Write professional emails"],
    estimatedTime: 50, difficulty: "hard", xpReward: 70,
    content: {
      theory: [
        { title: "Letter Structure", content: "التَّحِيَّة - Greeting\nالمُقَدِّمَة - Introduction\nالمَوْضُوع - Body\nالخَاتِمَة - Closing\nالتَّوْقِيع - Signature" },
        { title: "Formal Expressions", content: "سَعَادَة / حَضْرَة - Dear (formal)\nتَحِيَّة طَيِّبَة - Kind regards\nمَعَ فَائِقِ الاِحْتِرَام - With utmost respect\nأَرْجُو مِنْ سِيَادَتِكُم - I request from you" }
      ],
      vocabulary: [
        { arabic: "رِسَالَة رَسْمِيَّة", transliteration: "risāla rasmiyya", meaning: "formal letter" },
        { arabic: "مُرْفَق", transliteration: "murfaq", meaning: "attachment" },
        { arabic: "نَسْخَة", transliteration: "nuskha", meaning: "copy" },
        { arabic: "طَلَب", transliteration: "ṭalab", meaning: "request" },
        { arabic: "شَكْوَى", transliteration: "shakwā", meaning: "complaint" },
        { arabic: "رَدّ", transliteration: "radd", meaning: "reply" }
      ]
    },
    exerciseCount: 17, prerequisites: ["3-27"]
  },
  {
    id: "3-29", phaseId: 3, order: 29,
    title: "Writing Essays",
    titleAr: "كتابة المقالات",
    description: "Learn to write structured essays",
    objectives: ["Plan essay structure", "Develop arguments", "Use evidence", "Write introductions and conclusions"],
    estimatedTime: 55, difficulty: "hard", xpReward: 75,
    content: {
      theory: [
        { title: "Essay Structure", content: "مُقَدِّمَة - Introduction (thesis statement)\nجِسْم المَقَال - Body (arguments + evidence)\nخَاتِمَة - Conclusion (summary + final thought)" },
        { title: "Argumentative Language", content: "مِنْ نَاحِيَةٍ - on one hand\nمِنْ نَاحِيَةٍ أُخْرَى - on the other hand\nوَمَعَ ذَلِكَ - nevertheless\nبِالتَّالِي - therefore" }
      ],
      vocabulary: [
        { arabic: "مَقَال", transliteration: "maqāl", meaning: "essay/article" },
        { arabic: "أُطْرُوحَة", transliteration: "uṭrūḥa", meaning: "thesis" },
        { arabic: "رَأْي", transliteration: "ra'y", meaning: "opinion" },
        { arabic: "تَحْلِيل", transliteration: "taḥlīl", meaning: "analysis" },
        { arabic: "نَقْد", transliteration: "naqd", meaning: "criticism" },
        { arabic: "خُلَاصَة", transliteration: "khulāṣa", meaning: "summary" }
      ]
    },
    exerciseCount: 18, prerequisites: ["3-28"]
  },
  {
    id: "3-30", phaseId: 3, order: 30,
    title: "Phase 3 Review & Assessment",
    titleAr: "مراجعة وتقييم المرحلة الثالثة",
    description: "Comprehensive review of all Phase 3 material",
    objectives: ["Review all verb forms", "Practice complex sentences", "Apply vocabulary in context", "Demonstrate reading and writing skills"],
    estimatedTime: 60, difficulty: "hard", xpReward: 100,
    content: {
      theory: [
        { title: "Verb Forms Summary", content: "Forms II-X: causative, reciprocal, reflexive meanings\nMoods: Indicative, Subjunctive, Jussive, Imperative\nPassive voice patterns" },
        { title: "Grammar Review", content: "Relative clauses with الَّذِي\nConditionals with إِنْ and إِذَا\nإِنَّ and its sisters\nException constructions" },
        { title: "Skills Checklist", content: "✓ Advanced verb conjugation\n✓ Complex sentence formation\n✓ Expanded vocabulary (work, education, travel, health, tech, environment)\n✓ Reading news and stories\n✓ Writing paragraphs, letters, essays" }
      ],
      vocabulary: [
        { arabic: "مُرَاجَعَة", transliteration: "murāja'a", meaning: "review" },
        { arabic: "تَقْيِيم", transliteration: "taqyīm", meaning: "assessment" },
        { arabic: "إِنْجَاز", transliteration: "injāz", meaning: "achievement" },
        { arabic: "تَقَدُّم", transliteration: "taqaddum", meaning: "progress" },
        { arabic: "مُسْتَوَى", transliteration: "mustawā", meaning: "level" },
        { arabic: "اِسْتِعْدَاد", transliteration: "isti'dād", meaning: "readiness" }
      ]
    },
    exerciseCount: 20, prerequisites: ["3-29"]
  }
];
