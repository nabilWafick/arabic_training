/**
 * Database Seed Script for ArabicMaster Pro
 * 
 * This script populates the database with:
 * - Users (admin + test users)
 * - UserStats for each user
 * - Lessons across 5 phases
 * - Exercises (100+) with Arabic content
 * - Progress entries (50+)
 * - User achievements (30+)
 * 
 * Run with: pnpm db:seed
 */

import { PrismaClient, Role, ExerciseType, Difficulty } from "./generated/prisma/client/client";
import { PrismaPg } from "@prisma/adapter-pg";
import * as argon2 from "argon2";
import "dotenv/config";

// Create Prisma client for seeding
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL || "postgresql://arabicmaster:arabicmaster_secret@localhost:5437/arabicmaster?schema=public",
});
const prisma = new PrismaClient({ adapter });

// ============================================
// HELPER FUNCTIONS
// ============================================

async function hashPassword(password: string): Promise<string> {
  return argon2.hash(password, {
    type: argon2.argon2id,
    memoryCost: 65536,
    timeCost: 3,
    parallelism: 4,
  });
}

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomDate(start: Date, end: Date): Date {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// ============================================
// SEED DATA
// ============================================

const USERS_DATA = [
  { email: "admin@arabicmaster.com", name: "Admin User", role: Role.ADMIN, password: "Admin123!" },
  { email: "fatima.zahra@email.com", name: "Fatima Zahra", role: Role.USER, password: "Test123!" },
  { email: "ahmed.benali@email.com", name: "Ahmed Ben Ali", role: Role.USER, password: "Test123!" },
  { email: "marie.dupont@email.com", name: "Marie Dupont", role: Role.USER, password: "Test123!" },
  { email: "khalid.hassan@email.com", name: "Khalid Hassan", role: Role.USER, password: "Test123!" },
  { email: "sofia.rodriguez@email.com", name: "Sofia Rodriguez", role: Role.USER, password: "Test123!" },
  { email: "omar.farouq@email.com", name: "Omar Farouq", role: Role.USER, password: "Test123!" },
  { email: "claire.martin@email.com", name: "Claire Martin", role: Role.USER, password: "Test123!" },
  { email: "yusuf.ibrahim@email.com", name: "Yusuf Ibrahim", role: Role.USER, password: "Test123!" },
  { email: "emma.wilson@email.com", name: "Emma Wilson", role: Role.USER, password: "Test123!" },
  { email: "nour.aldin@email.com", name: "Nour Al-Din", role: Role.USER, password: "Test123!" },
  { email: "lucas.bernard@email.com", name: "Lucas Bernard", role: Role.USER, password: "Test123!" },
];

const LESSONS_DATA = [
  // Phase 1: Arabic Alphabet & Basics
  { phaseId: 1, order: 1, slug: "arabic-alphabet-intro", titleEn: "Introduction to Arabic Alphabet", titleFr: "Introduction à l'alphabet arabe", titleAr: "مقدمة الحروف العربية", descEn: "Learn the 28 letters of the Arabic alphabet", descFr: "Apprenez les 28 lettres de l'alphabet arabe", descAr: "تعلم الحروف الهجائية الثمانية والعشرين", duration: 30 },
  { phaseId: 1, order: 2, slug: "arabic-vowels", titleEn: "Arabic Vowels (Harakat)", titleFr: "Les voyelles arabes (Harakat)", titleAr: "الحركات العربية", descEn: "Master the short and long vowels", descFr: "Maîtrisez les voyelles courtes et longues", descAr: "أتقن الحركات القصيرة والطويلة", duration: 25 },
  { phaseId: 1, order: 3, slug: "arabic-numbers", titleEn: "Arabic Numbers 0-10", titleFr: "Les nombres arabes 0-10", titleAr: "الأرقام العربية", descEn: "Learn to count from 0 to 10 in Arabic", descFr: "Apprenez à compter de 0 à 10 en arabe", descAr: "تعلم العد من صفر إلى عشرة", duration: 20 },
  { phaseId: 1, order: 4, slug: "basic-greetings", titleEn: "Basic Greetings", titleFr: "Salutations de base", titleAr: "التحيات الأساسية", descEn: "Essential greetings and polite expressions", descFr: "Salutations essentielles et expressions polies", descAr: "التحيات والعبارات المهذبة الأساسية", duration: 25 },
  { phaseId: 1, order: 5, slug: "common-words", titleEn: "50 Common Arabic Words", titleFr: "50 mots arabes courants", titleAr: "خمسون كلمة عربية شائعة", descEn: "Build your first vocabulary", descFr: "Construisez votre premier vocabulaire", descAr: "ابنِ مفرداتك الأولى", duration: 35 },

  // Phase 2: Basic Grammar & Vocabulary
  { phaseId: 2, order: 1, slug: "definite-article", titleEn: "The Definite Article (Al)", titleFr: "L'article défini (Al)", titleAr: "أداة التعريف (الـ)", descEn: "Understanding 'Al' and sun/moon letters", descFr: "Comprendre 'Al' et les lettres solaires/lunaires", descAr: "فهم الألف واللام والحروف الشمسية والقمرية", duration: 30 },
  { phaseId: 2, order: 2, slug: "noun-gender", titleEn: "Noun Gender in Arabic", titleFr: "Le genre des noms en arabe", titleAr: "جنس الأسماء في العربية", descEn: "Masculine and feminine nouns", descFr: "Les noms masculins et féminins", descAr: "الأسماء المذكرة والمؤنثة", duration: 30 },
  { phaseId: 2, order: 3, slug: "basic-pronouns", titleEn: "Personal Pronouns", titleFr: "Les pronoms personnels", titleAr: "الضمائر الشخصية", descEn: "I, you, he, she, we, they in Arabic", descFr: "Je, tu, il, elle, nous, ils en arabe", descAr: "أنا، أنت، هو، هي، نحن، هم", duration: 25 },
  { phaseId: 2, order: 4, slug: "simple-sentences", titleEn: "Simple Sentences", titleFr: "Phrases simples", titleAr: "الجمل البسيطة", descEn: "Construct your first Arabic sentences", descFr: "Construisez vos premières phrases arabes", descAr: "أنشئ جملك العربية الأولى", duration: 35 },
  { phaseId: 2, order: 5, slug: "family-vocabulary", titleEn: "Family Vocabulary", titleFr: "Vocabulaire de la famille", titleAr: "مفردات العائلة", descEn: "Learn family member names", descFr: "Apprenez les noms des membres de la famille", descAr: "تعلم أسماء أفراد العائلة", duration: 25 },

  // Phase 3: Intermediate Grammar & Reading
  { phaseId: 3, order: 1, slug: "verb-conjugation-past", titleEn: "Past Tense Conjugation", titleFr: "Conjugaison au passé", titleAr: "تصريف الفعل الماضي", descEn: "Conjugate verbs in past tense", descFr: "Conjuguez les verbes au passé", descAr: "صرّف الأفعال في الماضي", duration: 40 },
  { phaseId: 3, order: 2, slug: "verb-conjugation-present", titleEn: "Present Tense Conjugation", titleFr: "Conjugaison au présent", titleAr: "تصريف الفعل المضارع", descEn: "Conjugate verbs in present tense", descFr: "Conjuguez les verbes au présent", descAr: "صرّف الأفعال في المضارع", duration: 40 },
  { phaseId: 3, order: 3, slug: "prepositions", titleEn: "Common Prepositions", titleFr: "Prépositions courantes", titleAr: "حروف الجر الشائعة", descEn: "In, on, with, from, to in Arabic", descFr: "Dans, sur, avec, de, à en arabe", descAr: "في، على، مع، من، إلى", duration: 30 },
  { phaseId: 3, order: 4, slug: "reading-practice-1", titleEn: "Reading Practice: Short Stories", titleFr: "Pratique de lecture: Histoires courtes", titleAr: "تدريب القراءة: قصص قصيرة", descEn: "Read and understand simple stories", descFr: "Lisez et comprenez des histoires simples", descAr: "اقرأ وافهم قصصاً بسيطة", duration: 45 },
  { phaseId: 3, order: 5, slug: "daily-routines", titleEn: "Daily Routines Vocabulary", titleFr: "Vocabulaire des routines quotidiennes", titleAr: "مفردات الروتين اليومي", descEn: "Describe your daily activities", descFr: "Décrivez vos activités quotidiennes", descAr: "صف أنشطتك اليومية", duration: 30 },

  // Phase 4: Advanced Grammar & Literature
  { phaseId: 4, order: 1, slug: "case-endings", titleEn: "Case Endings (I'rab)", titleFr: "Les désinences casuelles (I'rab)", titleAr: "الإعراب", descEn: "Understanding grammatical case markers", descFr: "Comprendre les marqueurs de cas grammaticaux", descAr: "فهم علامات الإعراب", duration: 50 },
  { phaseId: 4, order: 2, slug: "verb-forms", titleEn: "Arabic Verb Forms (Awzan)", titleFr: "Les formes verbales arabes (Awzan)", titleAr: "أوزان الأفعال العربية", descEn: "Master the 10 verb patterns", descFr: "Maîtrisez les 10 schèmes verbaux", descAr: "أتقن الأوزان العشرة للأفعال", duration: 60 },
  { phaseId: 4, order: 3, slug: "complex-sentences", titleEn: "Complex Sentence Structures", titleFr: "Structures de phrases complexes", titleAr: "تراكيب الجمل المركبة", descEn: "Build sophisticated sentences", descFr: "Construisez des phrases sophistiquées", descAr: "ابنِ جملاً متطورة", duration: 45 },
  { phaseId: 4, order: 4, slug: "classical-texts", titleEn: "Introduction to Classical Texts", titleFr: "Introduction aux textes classiques", titleAr: "مقدمة في النصوص الكلاسيكية", descEn: "Read excerpts from classical Arabic literature", descFr: "Lisez des extraits de la littérature arabe classique", descAr: "اقرأ مقتطفات من الأدب العربي الكلاسيكي", duration: 50 },
  { phaseId: 4, order: 5, slug: "essay-writing", titleEn: "Essay Writing Basics", titleFr: "Bases de la rédaction d'essais", titleAr: "أساسيات كتابة المقال", descEn: "Write structured paragraphs and essays", descFr: "Rédigez des paragraphes et essais structurés", descAr: "اكتب فقرات ومقالات منظمة", duration: 55 },

  // Phase 5: Mastery
  { phaseId: 5, order: 1, slug: "arabic-poetry-intro", titleEn: "Introduction to Arabic Poetry", titleFr: "Introduction à la poésie arabe", titleAr: "مقدمة في الشعر العربي", descEn: "Explore classical Arabic poetry meters", descFr: "Explorez les mètres de la poésie arabe classique", descAr: "استكشف بحور الشعر العربي", duration: 60 },
  { phaseId: 5, order: 2, slug: "calligraphy-basics", titleEn: "Arabic Calligraphy Basics", titleFr: "Bases de la calligraphie arabe", titleAr: "أساسيات الخط العربي", descEn: "Introduction to Naskh script", descFr: "Introduction à l'écriture Naskh", descAr: "مقدمة في خط النسخ", duration: 45 },
  { phaseId: 5, order: 3, slug: "rhetoric-balagha", titleEn: "Arabic Rhetoric (Balagha)", titleFr: "Rhétorique arabe (Balagha)", titleAr: "البلاغة العربية", descEn: "Figures of speech and eloquence", descFr: "Figures de style et éloquence", descAr: "الصور البلاغية والفصاحة", duration: 55 },
  { phaseId: 5, order: 4, slug: "quran-recitation", titleEn: "Quranic Recitation Rules (Tajweed)", titleFr: "Règles de récitation coranique (Tajweed)", titleAr: "أحكام التجويد", descEn: "Learn proper pronunciation rules", descFr: "Apprenez les règles de prononciation correctes", descAr: "تعلم قواعد النطق الصحيح", duration: 60 },
  { phaseId: 5, order: 5, slug: "modern-arabic-literature", titleEn: "Modern Arabic Literature", titleFr: "Littérature arabe moderne", titleAr: "الأدب العربي الحديث", descEn: "Contemporary authors and works", descFr: "Auteurs et œuvres contemporains", descAr: "مؤلفون وأعمال معاصرة", duration: 50 },
];

// Exercise templates by type and lesson
const EXERCISES_DATA = [
  // Phase 1, Lesson 1: Arabic Alphabet Introduction
  { lessonSlug: "arabic-alphabet-intro", order: 1, type: ExerciseType.MULTIPLE_CHOICE, difficulty: Difficulty.EASY, questionEn: "What is the first letter of the Arabic alphabet?", questionFr: "Quelle est la première lettre de l'alphabet arabe?", questionAr: "ما هي أول حرف في الأبجدية العربية؟", options: ["أ", "ب", "ت", "ث"], correctAnswer: "أ", explanationEn: "Alif (أ) is the first letter of the Arabic alphabet.", explanationFr: "Alif (أ) est la première lettre de l'alphabet arabe." },
  { lessonSlug: "arabic-alphabet-intro", order: 2, type: ExerciseType.WRITING, difficulty: Difficulty.EASY, questionEn: "Write the letter 'Ba' (ب)", questionFr: "Écrivez la lettre 'Ba' (ب)", questionAr: "اكتب حرف الباء", correctAnswer: "ب", explanationEn: "Ba (ب) is the second letter of the Arabic alphabet.", explanationFr: "Ba (ب) est la deuxième lettre de l'alphabet arabe." },
  { lessonSlug: "arabic-alphabet-intro", order: 3, type: ExerciseType.MATCHING, difficulty: Difficulty.EASY, questionEn: "Match the Arabic letters with their names", questionFr: "Associez les lettres arabes à leurs noms", options: [{ left: "ج", right: "Jeem" }, { left: "د", right: "Dal" }, { left: "ر", right: "Ra" }, { left: "ز", right: "Zay" }], correctAnswer: "ج-Jeem,د-Dal,ر-Ra,ز-Zay" },
  { lessonSlug: "arabic-alphabet-intro", order: 4, type: ExerciseType.LISTENING, difficulty: Difficulty.EASY, questionEn: "Listen and identify the letter", questionFr: "Écoutez et identifiez la lettre", audioText: "سين", options: ["س", "ش", "ص", "ض"], correctAnswer: "س", explanationEn: "The letter 'Seen' (س) makes an 's' sound.", explanationFr: "La lettre 'Seen' (س) fait le son 's'." },
  { lessonSlug: "arabic-alphabet-intro", order: 5, type: ExerciseType.MULTIPLE_CHOICE, difficulty: Difficulty.MEDIUM, questionEn: "How many letters are in the Arabic alphabet?", questionFr: "Combien de lettres y a-t-il dans l'alphabet arabe?", options: ["26", "28", "30", "32"], correctAnswer: "28", explanationEn: "The Arabic alphabet has 28 letters.", explanationFr: "L'alphabet arabe compte 28 lettres." },

  // Phase 1, Lesson 2: Arabic Vowels
  { lessonSlug: "arabic-vowels", order: 1, type: ExerciseType.MULTIPLE_CHOICE, difficulty: Difficulty.EASY, questionEn: "What is the name of the short 'a' vowel mark (◌َ)?", questionFr: "Quel est le nom de la voyelle courte 'a' (◌َ)?", options: ["Fatha", "Kasra", "Damma", "Sukun"], correctAnswer: "Fatha", explanationEn: "Fatha (فَتْحَة) is the short 'a' sound placed above the letter.", explanationFr: "Fatha (فَتْحَة) est le son court 'a' placé au-dessus de la lettre." },
  { lessonSlug: "arabic-vowels", order: 2, type: ExerciseType.MULTIPLE_CHOICE, difficulty: Difficulty.EASY, questionEn: "What vowel mark makes the 'u' sound?", questionFr: "Quelle marque de voyelle fait le son 'u'?", options: ["Fatha", "Kasra", "Damma", "Tanween"], correctAnswer: "Damma", explanationEn: "Damma (ضَمَّة) makes the short 'u' sound.", explanationFr: "Damma (ضَمَّة) fait le son court 'u'." },
  { lessonSlug: "arabic-vowels", order: 3, type: ExerciseType.WRITING, difficulty: Difficulty.MEDIUM, questionEn: "Write 'ba' with fatha: بَ", questionFr: "Écrivez 'ba' avec fatha: بَ", correctAnswer: "بَ", explanationEn: "Fatha on Ba gives 'ba' sound.", explanationFr: "Fatha sur Ba donne le son 'ba'." },
  { lessonSlug: "arabic-vowels", order: 4, type: ExerciseType.LISTENING, difficulty: Difficulty.MEDIUM, questionEn: "Listen: Which vowel do you hear?", questionFr: "Écoutez: Quelle voyelle entendez-vous?", audioText: "بُ", options: ["Fatha (a)", "Kasra (i)", "Damma (u)", "Sukun (no vowel)"], correctAnswer: "Damma (u)", explanationEn: "Bu - Damma makes the 'u' sound.", explanationFr: "Bu - Damma fait le son 'u'." },
  { lessonSlug: "arabic-vowels", order: 5, type: ExerciseType.FILL_BLANK, difficulty: Difficulty.MEDIUM, questionEn: "Complete: The vowel under the letter is called _____", questionFr: "Complétez: La voyelle sous la lettre s'appelle _____", correctAnswer: "Kasra", explanationEn: "Kasra is placed under the letter.", explanationFr: "Kasra est placée sous la lettre." },

  // Phase 1, Lesson 3: Arabic Numbers
  { lessonSlug: "arabic-numbers", order: 1, type: ExerciseType.MULTIPLE_CHOICE, difficulty: Difficulty.EASY, questionEn: "What is '٣' in English?", questionFr: "Que signifie '٣' en français?", options: ["1", "2", "3", "4"], correctAnswer: "3", explanationEn: "٣ is the Arabic numeral for 3 (ثلاثة - thalatha).", explanationFr: "٣ est le chiffre arabe pour 3 (ثلاثة - thalatha)." },
  { lessonSlug: "arabic-numbers", order: 2, type: ExerciseType.WRITING, difficulty: Difficulty.EASY, questionEn: "Write 'five' in Arabic numerals", questionFr: "Écrivez 'cinq' en chiffres arabes", correctAnswer: "٥", explanationEn: "٥ (khamsah) is five in Arabic numerals.", explanationFr: "٥ (khamsah) est cinq en chiffres arabes." },
  { lessonSlug: "arabic-numbers", order: 3, type: ExerciseType.MATCHING, difficulty: Difficulty.EASY, questionEn: "Match numbers with Arabic numerals", questionFr: "Associez les nombres aux chiffres arabes", options: [{ left: "7", right: "٧" }, { left: "9", right: "٩" }, { left: "4", right: "٤" }, { left: "6", right: "٦" }], correctAnswer: "7-٧,9-٩,4-٤,6-٦" },
  { lessonSlug: "arabic-numbers", order: 4, type: ExerciseType.LISTENING, difficulty: Difficulty.EASY, questionEn: "Listen and select the number", questionFr: "Écoutez et sélectionnez le nombre", audioText: "سَبْعَة", options: ["٦", "٧", "٨", "٩"], correctAnswer: "٧", explanationEn: "Sab'a (سَبْعَة) means seven.", explanationFr: "Sab'a (سَبْعَة) signifie sept." },
  { lessonSlug: "arabic-numbers", order: 5, type: ExerciseType.FILL_BLANK, difficulty: Difficulty.MEDIUM, questionEn: "٨ + ٢ = _____", questionFr: "٨ + ٢ = _____", correctAnswer: "١٠", explanationEn: "8 + 2 = 10 (عشرة)", explanationFr: "8 + 2 = 10 (عشرة)" },

  // Phase 1, Lesson 4: Basic Greetings
  { lessonSlug: "basic-greetings", order: 1, type: ExerciseType.MULTIPLE_CHOICE, difficulty: Difficulty.EASY, questionEn: "What does 'السَّلامُ عَلَيْكُم' mean?", questionFr: "Que signifie 'السَّلامُ عَلَيْكُم'?", options: ["Goodbye", "Peace be upon you", "Good morning", "Thank you"], correctAnswer: "Peace be upon you", explanationEn: "As-salamu alaykum is the traditional Islamic greeting.", explanationFr: "As-salamu alaykum est la salutation islamique traditionnelle." },
  { lessonSlug: "basic-greetings", order: 2, type: ExerciseType.WRITING, difficulty: Difficulty.EASY, questionEn: "Write 'Thank you' in Arabic", questionFr: "Écrivez 'Merci' en arabe", correctAnswer: "شُكْراً", explanationEn: "Shukran (شُكْراً) means thank you.", explanationFr: "Shukran (شُكْراً) signifie merci." },
  { lessonSlug: "basic-greetings", order: 3, type: ExerciseType.TRANSLATION, difficulty: Difficulty.EASY, questionEn: "Translate: صَباحُ الخَيْر", questionFr: "Traduisez: صَباحُ الخَيْر", correctAnswer: "Good morning", explanationEn: "Sabah al-khayr means good morning.", explanationFr: "Sabah al-khayr signifie bonjour (matin)." },
  { lessonSlug: "basic-greetings", order: 4, type: ExerciseType.LISTENING, difficulty: Difficulty.EASY, questionEn: "Listen and select the correct response", questionFr: "Écoutez et sélectionnez la bonne réponse", audioText: "كَيْفَ حالُك؟", options: ["بِخَيْر، شُكْراً", "مَعَ السَّلامَة", "صَباحُ النُّور", "عَفْواً"], correctAnswer: "بِخَيْر، شُكْراً", explanationEn: "'How are you?' - 'Fine, thank you'", explanationFr: "'Comment allez-vous?' - 'Bien, merci'" },
  { lessonSlug: "basic-greetings", order: 5, type: ExerciseType.MULTIPLE_CHOICE, difficulty: Difficulty.MEDIUM, questionEn: "What is the response to 'السَّلامُ عَلَيْكُم'?", questionFr: "Quelle est la réponse à 'السَّلامُ عَلَيْكُم'?", options: ["شُكْراً", "وَعَلَيْكُمُ السَّلام", "مَرْحَباً", "أَهْلاً"], correctAnswer: "وَعَلَيْكُمُ السَّلام", explanationEn: "Wa alaykum as-salam - And upon you be peace.", explanationFr: "Wa alaykum as-salam - Et que la paix soit sur vous." },

  // Phase 1, Lesson 5: Common Words
  { lessonSlug: "common-words", order: 1, type: ExerciseType.MULTIPLE_CHOICE, difficulty: Difficulty.EASY, questionEn: "What does 'كِتاب' mean?", questionFr: "Que signifie 'كِتاب'?", options: ["Pen", "Book", "Table", "Chair"], correctAnswer: "Book", explanationEn: "Kitab (كِتاب) means book.", explanationFr: "Kitab (كِتاب) signifie livre." },
  { lessonSlug: "common-words", order: 2, type: ExerciseType.WRITING, difficulty: Difficulty.EASY, questionEn: "Write 'water' in Arabic", questionFr: "Écrivez 'eau' en arabe", correctAnswer: "ماء", explanationEn: "Ma' (ماء) means water.", explanationFr: "Ma' (ماء) signifie eau." },
  { lessonSlug: "common-words", order: 3, type: ExerciseType.MATCHING, difficulty: Difficulty.MEDIUM, questionEn: "Match Arabic words with their meanings", questionFr: "Associez les mots arabes à leurs significations", options: [{ left: "بَيْت", right: "House" }, { left: "سَيّارة", right: "Car" }, { left: "طَعام", right: "Food" }, { left: "قَلَم", right: "Pen" }], correctAnswer: "بَيْت-House,سَيّارة-Car,طَعام-Food,قَلَم-Pen" },
  { lessonSlug: "common-words", order: 4, type: ExerciseType.LISTENING, difficulty: Difficulty.MEDIUM, questionEn: "Listen and identify the word", questionFr: "Écoutez et identifiez le mot", audioText: "مَدْرَسَة", options: ["School", "Hospital", "Market", "Mosque"], correctAnswer: "School", explanationEn: "Madrasa (مَدْرَسَة) means school.", explanationFr: "Madrasa (مَدْرَسَة) signifie école." },
  { lessonSlug: "common-words", order: 5, type: ExerciseType.FILL_BLANK, difficulty: Difficulty.MEDIUM, questionEn: "Complete: أُريدُ _____ (I want water)", questionFr: "Complétez: أُريدُ _____ (Je veux de l'eau)", correctAnswer: "ماء", explanationEn: "Uridu ma' - I want water.", explanationFr: "Uridu ma' - Je veux de l'eau." },

  // Phase 2, Lesson 1: Definite Article
  { lessonSlug: "definite-article", order: 1, type: ExerciseType.MULTIPLE_CHOICE, difficulty: Difficulty.EASY, questionEn: "What is the definite article in Arabic?", questionFr: "Quel est l'article défini en arabe?", options: ["الـ", "أَ", "وَ", "بِ"], correctAnswer: "الـ", explanationEn: "Al (الـ) is the definite article in Arabic.", explanationFr: "Al (الـ) est l'article défini en arabe." },
  { lessonSlug: "definite-article", order: 2, type: ExerciseType.MULTIPLE_CHOICE, difficulty: Difficulty.MEDIUM, questionEn: "Is 'ش' a sun letter or moon letter?", questionFr: "'ش' est-elle une lettre solaire ou lunaire?", options: ["Sun letter", "Moon letter"], correctAnswer: "Sun letter", explanationEn: "Sheen (ش) is a sun letter - the 'l' assimilates.", explanationFr: "Sheen (ش) est une lettre solaire - le 'l' s'assimile." },
  { lessonSlug: "definite-article", order: 3, type: ExerciseType.WRITING, difficulty: Difficulty.MEDIUM, questionEn: "Add 'Al' to make 'the book': كِتاب → _____", questionFr: "Ajoutez 'Al' pour faire 'le livre': كِتاب → _____", correctAnswer: "الكِتاب", explanationEn: "Al-kitab (الكِتاب) - the book.", explanationFr: "Al-kitab (الكِتاب) - le livre." },
  { lessonSlug: "definite-article", order: 4, type: ExerciseType.FILL_BLANK, difficulty: Difficulty.MEDIUM, questionEn: "_____ شَّمْس (the sun) - 'l' assimilates with ش", questionFr: "_____ شَّمْس (le soleil) - 'l' s'assimile avec ش", correctAnswer: "الـ", explanationEn: "Ash-shams - sun letter assimilation.", explanationFr: "Ash-shams - assimilation de lettre solaire." },
  { lessonSlug: "definite-article", order: 5, type: ExerciseType.MATCHING, difficulty: Difficulty.HARD, questionEn: "Classify letters as sun or moon", questionFr: "Classifiez les lettres comme solaires ou lunaires", options: [{ left: "ت", right: "Sun" }, { left: "ب", right: "Moon" }, { left: "ن", right: "Sun" }, { left: "ك", right: "Moon" }], correctAnswer: "ت-Sun,ب-Moon,ن-Sun,ك-Moon" },

  // Phase 2, Lesson 2: Noun Gender
  { lessonSlug: "noun-gender", order: 1, type: ExerciseType.MULTIPLE_CHOICE, difficulty: Difficulty.EASY, questionEn: "What ending typically marks feminine nouns?", questionFr: "Quelle terminaison marque généralement les noms féminins?", options: ["ة (ta marbuta)", "ون", "ان", "ي"], correctAnswer: "ة (ta marbuta)", explanationEn: "Ta marbuta (ة) usually indicates feminine gender.", explanationFr: "Ta marbuta (ة) indique généralement le genre féminin." },
  { lessonSlug: "noun-gender", order: 2, type: ExerciseType.MULTIPLE_CHOICE, difficulty: Difficulty.EASY, questionEn: "Is 'وَلَد' (boy) masculine or feminine?", questionFr: "'وَلَد' (garçon) est-il masculin ou féminin?", options: ["Masculine", "Feminine"], correctAnswer: "Masculine", explanationEn: "Walad (وَلَد) is masculine.", explanationFr: "Walad (وَلَد) est masculin." },
  { lessonSlug: "noun-gender", order: 3, type: ExerciseType.MATCHING, difficulty: Difficulty.MEDIUM, questionEn: "Match nouns to their gender", questionFr: "Associez les noms à leur genre", options: [{ left: "بِنْت (girl)", right: "Feminine" }, { left: "رَجُل (man)", right: "Masculine" }, { left: "مَدْرَسَة (school)", right: "Feminine" }, { left: "قَمَر (moon)", right: "Masculine" }], correctAnswer: "بِنْت (girl)-Feminine,رَجُل (man)-Masculine,مَدْرَسَة (school)-Feminine,قَمَر (moon)-Masculine" },
  { lessonSlug: "noun-gender", order: 4, type: ExerciseType.WRITING, difficulty: Difficulty.MEDIUM, questionEn: "Write the feminine form of طالِب (student)", questionFr: "Écrivez la forme féminine de طالِب (étudiant)", correctAnswer: "طالِبَة", explanationEn: "Add ta marbuta: talib → taliba.", explanationFr: "Ajoutez ta marbuta: talib → taliba." },
  { lessonSlug: "noun-gender", order: 5, type: ExerciseType.FILL_BLANK, difficulty: Difficulty.HARD, questionEn: "مُعَلِّم (male teacher) → _____ (female teacher)", questionFr: "مُعَلِّم (professeur) → _____ (professeure)", correctAnswer: "مُعَلِّمَة", explanationEn: "Mu'allim → Mu'allima.", explanationFr: "Mu'allim → Mu'allima." },

  // Phase 2, Lesson 3: Personal Pronouns
  { lessonSlug: "basic-pronouns", order: 1, type: ExerciseType.MULTIPLE_CHOICE, difficulty: Difficulty.EASY, questionEn: "What does 'أَنا' mean?", questionFr: "Que signifie 'أَنا'?", options: ["You", "I", "He", "She"], correctAnswer: "I", explanationEn: "Ana (أَنا) means I.", explanationFr: "Ana (أَنا) signifie Je." },
  { lessonSlug: "basic-pronouns", order: 2, type: ExerciseType.MATCHING, difficulty: Difficulty.EASY, questionEn: "Match pronouns with meanings", questionFr: "Associez les pronoms à leurs significations", options: [{ left: "هُوَ", right: "He" }, { left: "هِيَ", right: "She" }, { left: "نَحْنُ", right: "We" }, { left: "هُم", right: "They (m)" }], correctAnswer: "هُوَ-He,هِيَ-She,نَحْنُ-We,هُم-They (m)" },
  { lessonSlug: "basic-pronouns", order: 3, type: ExerciseType.WRITING, difficulty: Difficulty.MEDIUM, questionEn: "Write 'you (singular masculine)' in Arabic", questionFr: "Écrivez 'tu (masculin singulier)' en arabe", correctAnswer: "أَنْتَ", explanationEn: "Anta (أَنْتَ) - you (masc. sing.).", explanationFr: "Anta (أَنْتَ) - tu (masc. sing.)." },
  { lessonSlug: "basic-pronouns", order: 4, type: ExerciseType.MULTIPLE_CHOICE, difficulty: Difficulty.MEDIUM, questionEn: "What is 'you (feminine singular)'?", questionFr: "Quel est 'tu (féminin singulier)'?", options: ["أَنْتَ", "أَنْتِ", "أَنْتُما", "أَنْتُم"], correctAnswer: "أَنْتِ", explanationEn: "Anti (أَنْتِ) - you (fem. sing.).", explanationFr: "Anti (أَنْتِ) - tu (fém. sing.)." },
  { lessonSlug: "basic-pronouns", order: 5, type: ExerciseType.LISTENING, difficulty: Difficulty.MEDIUM, questionEn: "Listen and identify the pronoun", questionFr: "Écoutez et identifiez le pronom", audioText: "نَحْنُ طُلّاب", options: ["I", "You", "We", "They"], correctAnswer: "We", explanationEn: "Nahnu tullab - We are students.", explanationFr: "Nahnu tullab - Nous sommes étudiants." },

  // Phase 2, Lesson 4: Simple Sentences
  { lessonSlug: "simple-sentences", order: 1, type: ExerciseType.TRANSLATION, difficulty: Difficulty.EASY, questionEn: "Translate: أَنا طالِب", questionFr: "Traduisez: أَنا طالِب", correctAnswer: "I am a student", explanationEn: "Ana talib - I am a student.", explanationFr: "Ana talib - Je suis étudiant." },
  { lessonSlug: "simple-sentences", order: 2, type: ExerciseType.WRITING, difficulty: Difficulty.MEDIUM, questionEn: "Write 'This is a book' in Arabic", questionFr: "Écrivez 'Ceci est un livre' en arabe", correctAnswer: "هٰذا كِتاب", explanationEn: "Hadha kitab - This is a book.", explanationFr: "Hadha kitab - Ceci est un livre." },
  { lessonSlug: "simple-sentences", order: 3, type: ExerciseType.FILL_BLANK, difficulty: Difficulty.MEDIUM, questionEn: "هِيَ _____ جَميلَة (She is a beautiful girl)", questionFr: "هِيَ _____ جَميلَة (Elle est une belle fille)", correctAnswer: "بِنْت", explanationEn: "Hiya bint jamila - She is a beautiful girl.", explanationFr: "Hiya bint jamila - Elle est une belle fille." },
  { lessonSlug: "simple-sentences", order: 4, type: ExerciseType.MULTIPLE_CHOICE, difficulty: Difficulty.MEDIUM, questionEn: "What does 'البَيْتُ كَبير' mean?", questionFr: "Que signifie 'البَيْتُ كَبير'?", options: ["The house is small", "The house is big", "The house is new", "The house is old"], correctAnswer: "The house is big", explanationEn: "Al-baytu kabir - The house is big.", explanationFr: "Al-baytu kabir - La maison est grande." },
  { lessonSlug: "simple-sentences", order: 5, type: ExerciseType.ORAL, difficulty: Difficulty.HARD, questionEn: "Say: 'My name is...' in Arabic", questionFr: "Dites: 'Je m'appelle...' en arabe", correctAnswer: "اِسْمي...", explanationEn: "Ismi... - My name is...", explanationFr: "Ismi... - Je m'appelle..." },

  // Phase 2, Lesson 5: Family Vocabulary
  { lessonSlug: "family-vocabulary", order: 1, type: ExerciseType.MULTIPLE_CHOICE, difficulty: Difficulty.EASY, questionEn: "What does 'أُمّ' mean?", questionFr: "Que signifie 'أُمّ'?", options: ["Father", "Mother", "Brother", "Sister"], correctAnswer: "Mother", explanationEn: "Umm (أُمّ) means mother.", explanationFr: "Umm (أُمّ) signifie mère." },
  { lessonSlug: "family-vocabulary", order: 2, type: ExerciseType.MATCHING, difficulty: Difficulty.EASY, questionEn: "Match family members", questionFr: "Associez les membres de la famille", options: [{ left: "أَب", right: "Father" }, { left: "أُخْت", right: "Sister" }, { left: "أَخ", right: "Brother" }, { left: "جَدّ", right: "Grandfather" }], correctAnswer: "أَب-Father,أُخْت-Sister,أَخ-Brother,جَدّ-Grandfather" },
  { lessonSlug: "family-vocabulary", order: 3, type: ExerciseType.WRITING, difficulty: Difficulty.MEDIUM, questionEn: "Write 'grandmother' in Arabic", questionFr: "Écrivez 'grand-mère' en arabe", correctAnswer: "جَدَّة", explanationEn: "Jadda (جَدَّة) means grandmother.", explanationFr: "Jadda (جَدَّة) signifie grand-mère." },
  { lessonSlug: "family-vocabulary", order: 4, type: ExerciseType.TRANSLATION, difficulty: Difficulty.MEDIUM, questionEn: "Translate: عِنْدي أَخَوان وَأُخْت", questionFr: "Traduisez: عِنْدي أَخَوان وَأُخْت", correctAnswer: "I have two brothers and a sister", explanationEn: "Indi akhawan wa ukht.", explanationFr: "J'ai deux frères et une sœur." },
  { lessonSlug: "family-vocabulary", order: 5, type: ExerciseType.LISTENING, difficulty: Difficulty.MEDIUM, questionEn: "Listen: Which family member is mentioned?", questionFr: "Écoutez: Quel membre de la famille est mentionné?", audioText: "اِبْني في المَدْرَسَة", options: ["My father", "My son", "My brother", "My uncle"], correctAnswer: "My son", explanationEn: "Ibni - my son.", explanationFr: "Ibni - mon fils." },

  // Phase 3, Lesson 1: Past Tense Conjugation
  { lessonSlug: "verb-conjugation-past", order: 1, type: ExerciseType.MULTIPLE_CHOICE, difficulty: Difficulty.MEDIUM, questionEn: "What is 'he wrote' in Arabic?", questionFr: "Comment dit-on 'il a écrit' en arabe?", options: ["كَتَبَ", "يَكْتُب", "اُكْتُب", "كاتِب"], correctAnswer: "كَتَبَ", explanationEn: "Kataba (كَتَبَ) - he wrote.", explanationFr: "Kataba (كَتَبَ) - il a écrit." },
  { lessonSlug: "verb-conjugation-past", order: 2, type: ExerciseType.WRITING, difficulty: Difficulty.MEDIUM, questionEn: "Conjugate 'write' for 'I wrote'", questionFr: "Conjuguez 'écrire' pour 'j'ai écrit'", correctAnswer: "كَتَبْتُ", explanationEn: "Katabtu (كَتَبْتُ) - I wrote.", explanationFr: "Katabtu (كَتَبْتُ) - j'ai écrit." },
  { lessonSlug: "verb-conjugation-past", order: 3, type: ExerciseType.MATCHING, difficulty: Difficulty.HARD, questionEn: "Match past tense conjugations", questionFr: "Associez les conjugaisons au passé", options: [{ left: "ذَهَبَ", right: "He went" }, { left: "ذَهَبَتْ", right: "She went" }, { left: "ذَهَبْنا", right: "We went" }, { left: "ذَهَبْتَ", right: "You (m) went" }], correctAnswer: "ذَهَبَ-He went,ذَهَبَتْ-She went,ذَهَبْنا-We went,ذَهَبْتَ-You (m) went" },
  { lessonSlug: "verb-conjugation-past", order: 4, type: ExerciseType.FILL_BLANK, difficulty: Difficulty.HARD, questionEn: "هُم _____ إلى المَدْرَسَة (They went to school)", questionFr: "هُم _____ إلى المَدْرَسَة (Ils sont allés à l'école)", correctAnswer: "ذَهَبوا", explanationEn: "Dhahabu - they went.", explanationFr: "Dhahabu - ils sont allés." },
  { lessonSlug: "verb-conjugation-past", order: 5, type: ExerciseType.TRANSLATION, difficulty: Difficulty.HARD, questionEn: "Translate: قَرَأْتُ الكِتاب", questionFr: "Traduisez: قَرَأْتُ الكِتاب", correctAnswer: "I read the book", explanationEn: "Qara'tu al-kitab - I read the book.", explanationFr: "Qara'tu al-kitab - J'ai lu le livre." },

  // Phase 3, Lesson 2: Present Tense Conjugation
  { lessonSlug: "verb-conjugation-present", order: 1, type: ExerciseType.MULTIPLE_CHOICE, difficulty: Difficulty.MEDIUM, questionEn: "What is 'he writes' in Arabic?", questionFr: "Comment dit-on 'il écrit' en arabe?", options: ["كَتَبَ", "يَكْتُب", "اُكْتُب", "كاتِب"], correctAnswer: "يَكْتُب", explanationEn: "Yaktub (يَكْتُب) - he writes/is writing.", explanationFr: "Yaktub (يَكْتُب) - il écrit." },
  { lessonSlug: "verb-conjugation-present", order: 2, type: ExerciseType.WRITING, difficulty: Difficulty.MEDIUM, questionEn: "Conjugate 'read' for 'I read (present)'", questionFr: "Conjuguez 'lire' pour 'je lis'", correctAnswer: "أَقْرَأ", explanationEn: "Aqra' (أَقْرَأ) - I read/am reading.", explanationFr: "Aqra' (أَقْرَأ) - je lis." },
  { lessonSlug: "verb-conjugation-present", order: 3, type: ExerciseType.MATCHING, difficulty: Difficulty.HARD, questionEn: "Match present tense conjugations", questionFr: "Associez les conjugaisons au présent", options: [{ left: "تَكْتُب", right: "You (m) write" }, { left: "تَكْتُبين", right: "You (f) write" }, { left: "نَكْتُب", right: "We write" }, { left: "يَكْتُبون", right: "They (m) write" }], correctAnswer: "تَكْتُب-You (m) write,تَكْتُبين-You (f) write,نَكْتُب-We write,يَكْتُبون-They (m) write" },
  { lessonSlug: "verb-conjugation-present", order: 4, type: ExerciseType.FILL_BLANK, difficulty: Difficulty.HARD, questionEn: "نَحْنُ _____ العَرَبِيَّة (We study Arabic)", questionFr: "نَحْنُ _____ العَرَبِيَّة (Nous étudions l'arabe)", correctAnswer: "نَدْرُس", explanationEn: "Nadrus - we study.", explanationFr: "Nadrus - nous étudions." },
  { lessonSlug: "verb-conjugation-present", order: 5, type: ExerciseType.TRANSLATION, difficulty: Difficulty.HARD, questionEn: "Translate: تَذْهَب إلى العَمَل كُلَّ يَوْم", questionFr: "Traduisez: تَذْهَب إلى العَمَل كُلَّ يَوْم", correctAnswer: "She goes to work every day", explanationEn: "Tadhhab ila al-'amal kulla yawm.", explanationFr: "Elle va au travail tous les jours." },

  // Phase 3, Lesson 3: Prepositions
  { lessonSlug: "prepositions", order: 1, type: ExerciseType.MULTIPLE_CHOICE, difficulty: Difficulty.EASY, questionEn: "What does 'في' mean?", questionFr: "Que signifie 'في'?", options: ["On", "In/At", "From", "To"], correctAnswer: "In/At", explanationEn: "Fi (في) means in/at.", explanationFr: "Fi (في) signifie dans/à." },
  { lessonSlug: "prepositions", order: 2, type: ExerciseType.MATCHING, difficulty: Difficulty.MEDIUM, questionEn: "Match prepositions with meanings", questionFr: "Associez les prépositions à leurs significations", options: [{ left: "عَلى", right: "On" }, { left: "مِن", right: "From" }, { left: "إلى", right: "To" }, { left: "مَعَ", right: "With" }], correctAnswer: "عَلى-On,مِن-From,إلى-To,مَعَ-With" },
  { lessonSlug: "prepositions", order: 3, type: ExerciseType.FILL_BLANK, difficulty: Difficulty.MEDIUM, questionEn: "الكِتاب _____ الطاوِلَة (The book is on the table)", questionFr: "الكِتاب _____ الطاوِلَة (Le livre est sur la table)", correctAnswer: "عَلى", explanationEn: "Al-kitab 'ala at-tawila.", explanationFr: "Le livre est sur la table." },
  { lessonSlug: "prepositions", order: 4, type: ExerciseType.TRANSLATION, difficulty: Difficulty.MEDIUM, questionEn: "Translate: أَنا مِن مِصْر", questionFr: "Traduisez: أَنا مِن مِصْر", correctAnswer: "I am from Egypt", explanationEn: "Ana min Misr - I am from Egypt.", explanationFr: "Je suis d'Égypte." },
  { lessonSlug: "prepositions", order: 5, type: ExerciseType.WRITING, difficulty: Difficulty.HARD, questionEn: "Write 'I go to the mosque with my father'", questionFr: "Écrivez 'Je vais à la mosquée avec mon père'", correctAnswer: "أَذْهَب إلى المَسْجِد مَعَ أَبي", explanationEn: "Adhhab ila al-masjid ma'a abi.", explanationFr: "Je vais à la mosquée avec mon père." },

  // Phase 3, Lesson 4: Reading Practice
  { lessonSlug: "reading-practice-1", order: 1, type: ExerciseType.MULTIPLE_CHOICE, difficulty: Difficulty.MEDIUM, questionEn: "Read: ذَهَبَ الوَلَدُ إلى المَدْرَسَة - Where did the boy go?", questionFr: "Lisez: ذَهَبَ الوَلَدُ إلى المَدْرَسَة - Où est allé le garçon?", options: ["To the market", "To school", "To the mosque", "Home"], correctAnswer: "To school", explanationEn: "The boy went to school.", explanationFr: "Le garçon est allé à l'école." },
  { lessonSlug: "reading-practice-1", order: 2, type: ExerciseType.FILL_BLANK, difficulty: Difficulty.HARD, questionEn: "في الصَّباح، أَسْتَيْقِظُ _____ (In the morning, I wake up early)", questionFr: "في الصَّباح، أَسْتَيْقِظُ _____ (Le matin, je me réveille tôt)", correctAnswer: "باكِراً", explanationEn: "Bakiran - early.", explanationFr: "Bakiran - tôt." },
  { lessonSlug: "reading-practice-1", order: 3, type: ExerciseType.TRANSLATION, difficulty: Difficulty.HARD, questionEn: "Translate: كانَتِ البِنْتُ تَقْرَأُ كِتاباً في الحَديقَة", questionFr: "Traduisez: كانَتِ البِنْتُ تَقْرَأُ كِتاباً في الحَديقَة", correctAnswer: "The girl was reading a book in the garden", explanationEn: "Kanat al-bintu taqra'u kitaban fi al-hadiqa.", explanationFr: "La fille lisait un livre dans le jardin." },
  { lessonSlug: "reading-practice-1", order: 4, type: ExerciseType.MULTIPLE_CHOICE, difficulty: Difficulty.HARD, questionEn: "أَكَلَ أَحْمَد الطَّعام ثُمَّ شَرِبَ الماء - What did Ahmad do?", questionFr: "أَكَلَ أَحْمَد الطَّعام ثُمَّ شَرِبَ الماء - Qu'a fait Ahmad?", options: ["Ate then slept", "Ate then drank water", "Drank then ate", "Ate and read"], correctAnswer: "Ate then drank water", explanationEn: "Ahmad ate the food then drank water.", explanationFr: "Ahmad a mangé puis a bu de l'eau." },
  { lessonSlug: "reading-practice-1", order: 5, type: ExerciseType.WRITING, difficulty: Difficulty.HARD, questionEn: "Write a sentence about going to school", questionFr: "Écrivez une phrase sur aller à l'école", correctAnswer: "أَذْهَبُ إلى المَدْرَسَة كُلَّ يَوْم", explanationEn: "I go to school every day.", explanationFr: "Je vais à l'école tous les jours." },

  // Phase 3, Lesson 5: Daily Routines
  { lessonSlug: "daily-routines", order: 1, type: ExerciseType.MULTIPLE_CHOICE, difficulty: Difficulty.EASY, questionEn: "What does 'أَسْتَيْقِظ' mean?", questionFr: "Que signifie 'أَسْتَيْقِظ'?", options: ["I sleep", "I wake up", "I eat", "I go"], correctAnswer: "I wake up", explanationEn: "Astayqiz - I wake up.", explanationFr: "Astayqiz - Je me réveille." },
  { lessonSlug: "daily-routines", order: 2, type: ExerciseType.MATCHING, difficulty: Difficulty.MEDIUM, questionEn: "Match daily activities", questionFr: "Associez les activités quotidiennes", options: [{ left: "أَنام", right: "I sleep" }, { left: "أَتَناوَل الفُطور", right: "I eat breakfast" }, { left: "أَذْهَب إلى العَمَل", right: "I go to work" }, { left: "أَعود إلى البَيْت", right: "I return home" }], correctAnswer: "أَنام-I sleep,أَتَناوَل الفُطور-I eat breakfast,أَذْهَب إلى العَمَل-I go to work,أَعود إلى البَيْت-I return home" },
  { lessonSlug: "daily-routines", order: 3, type: ExerciseType.FILL_BLANK, difficulty: Difficulty.MEDIUM, questionEn: "أَنام في _____ (I sleep at night)", questionFr: "أَنام في _____ (Je dors la nuit)", correctAnswer: "اللَّيْل", explanationEn: "Al-layl - the night.", explanationFr: "Al-layl - la nuit." },
  { lessonSlug: "daily-routines", order: 4, type: ExerciseType.TRANSLATION, difficulty: Difficulty.HARD, questionEn: "Translate: أَسْتَيْقِظُ في السّاعَة السّادِسَة صَباحاً", questionFr: "Traduisez: أَسْتَيْقِظُ في السّاعَة السّادِسَة صَباحاً", correctAnswer: "I wake up at 6 o'clock in the morning", explanationEn: "I wake up at 6 AM.", explanationFr: "Je me réveille à 6 heures du matin." },
  { lessonSlug: "daily-routines", order: 5, type: ExerciseType.WRITING, difficulty: Difficulty.HARD, questionEn: "Write your morning routine in Arabic (2 activities)", questionFr: "Écrivez votre routine matinale en arabe (2 activités)", correctAnswer: "أَسْتَيْقِظ ثُمَّ أَتَناوَل الفُطور", explanationEn: "I wake up then eat breakfast.", explanationFr: "Je me réveille puis je prends le petit-déjeuner." },

  // Phase 4, Lesson 1: Case Endings
  { lessonSlug: "case-endings", order: 1, type: ExerciseType.MULTIPLE_CHOICE, difficulty: Difficulty.HARD, questionEn: "What case marker indicates the subject (nominative)?", questionFr: "Quelle marque de cas indique le sujet (nominatif)?", options: ["Damma (ـُ)", "Fatha (ـَ)", "Kasra (ـِ)", "Sukun (ـْ)"], correctAnswer: "Damma (ـُ)", explanationEn: "Damma indicates nominative (marfu').", explanationFr: "Damma indique le nominatif (marfu')." },
  { lessonSlug: "case-endings", order: 2, type: ExerciseType.MULTIPLE_CHOICE, difficulty: Difficulty.HARD, questionEn: "In 'قَرَأَ الطّالِبُ الكِتابَ', why does الكِتاب have fatha?", questionFr: "Dans 'قَرَأَ الطّالِبُ الكِتابَ', pourquoi الكِتاب a-t-il fatha?", options: ["It's the subject", "It's the object", "It's a preposition", "It's an adjective"], correctAnswer: "It's the object", explanationEn: "Object (maf'ul bihi) takes accusative (fatha).", explanationFr: "L'objet (maf'ul bihi) prend l'accusatif (fatha)." },
  { lessonSlug: "case-endings", order: 3, type: ExerciseType.FILL_BLANK, difficulty: Difficulty.HARD, questionEn: "ذَهَبَ إلى المَدْرَسَة_____ (Add correct ending)", questionFr: "ذَهَبَ إلى المَدْرَسَة_____ (Ajoutez la terminaison correcte)", correctAnswer: "ِ", explanationEn: "After preposition, noun takes kasra (genitive).", explanationFr: "Après une préposition, le nom prend kasra (génitif)." },
  { lessonSlug: "case-endings", order: 4, type: ExerciseType.MATCHING, difficulty: Difficulty.HARD, questionEn: "Match case names with their markers", questionFr: "Associez les noms de cas à leurs marques", options: [{ left: "Nominative (مَرْفوع)", right: "Damma" }, { left: "Accusative (مَنْصوب)", right: "Fatha" }, { left: "Genitive (مَجْرور)", right: "Kasra" }], correctAnswer: "Nominative (مَرْفوع)-Damma,Accusative (مَنْصوب)-Fatha,Genitive (مَجْرور)-Kasra" },
  { lessonSlug: "case-endings", order: 5, type: ExerciseType.WRITING, difficulty: Difficulty.HARD, questionEn: "Add all case markers: كَتَبَ المُعَلِّم (subject) الدَّرْس (object)", questionFr: "Ajoutez toutes les marques de cas: كَتَبَ المُعَلِّم (sujet) الدَّرْس (objet)", correctAnswer: "كَتَبَ المُعَلِّمُ الدَّرْسَ", explanationEn: "Subject: damma, Object: fatha.", explanationFr: "Sujet: damma, Objet: fatha." },

  // Phase 4, Lesson 2: Verb Forms
  { lessonSlug: "verb-forms", order: 1, type: ExerciseType.MULTIPLE_CHOICE, difficulty: Difficulty.HARD, questionEn: "Form II (فَعَّل) typically adds what meaning?", questionFr: "La forme II (فَعَّل) ajoute généralement quelle signification?", options: ["Reflexive", "Causative/Intensive", "Reciprocal", "Passive"], correctAnswer: "Causative/Intensive", explanationEn: "Form II often intensifies or causativizes.", explanationFr: "La forme II intensifie ou rend causatif." },
  { lessonSlug: "verb-forms", order: 2, type: ExerciseType.MATCHING, difficulty: Difficulty.HARD, questionEn: "Match verb forms with patterns", questionFr: "Associez les formes verbales aux schèmes", options: [{ left: "Form I", right: "فَعَلَ" }, { left: "Form II", right: "فَعَّلَ" }, { left: "Form III", right: "فاعَلَ" }, { left: "Form V", right: "تَفَعَّلَ" }], correctAnswer: "Form I-فَعَلَ,Form II-فَعَّلَ,Form III-فاعَلَ,Form V-تَفَعَّلَ" },
  { lessonSlug: "verb-forms", order: 3, type: ExerciseType.FILL_BLANK, difficulty: Difficulty.HARD, questionEn: "عَلِمَ (to know) → عَلَّمَ (to _____)", questionFr: "عَلِمَ (savoir) → عَلَّمَ (_____)", correctAnswer: "teach", explanationEn: "Form II 'allama = to teach (causative).", explanationFr: "Forme II 'allama = enseigner (causatif)." },
  { lessonSlug: "verb-forms", order: 4, type: ExerciseType.WRITING, difficulty: Difficulty.HARD, questionEn: "Write Form V of كَتَبَ (to write)", questionFr: "Écrivez la forme V de كَتَبَ (écrire)", correctAnswer: "تَكَتَّبَ", explanationEn: "Form V adds تَ and doubles middle letter.", explanationFr: "La forme V ajoute تَ et double la lettre du milieu." },
  { lessonSlug: "verb-forms", order: 5, type: ExerciseType.TRANSLATION, difficulty: Difficulty.HARD, questionEn: "Translate: تَعَلَّمْتُ العَرَبِيَّة في الجامِعَة", questionFr: "Traduisez: تَعَلَّمْتُ العَرَبِيَّة في الجامِعَة", correctAnswer: "I learned Arabic at university", explanationEn: "Ta'allamtu - I learned (Form V reflexive of 'allama).", explanationFr: "Ta'allamtu - J'ai appris (forme V réflexive de 'allama)." },

  // Phase 4, Lesson 3: Complex Sentences
  { lessonSlug: "complex-sentences", order: 1, type: ExerciseType.MULTIPLE_CHOICE, difficulty: Difficulty.HARD, questionEn: "Which word means 'that' (conjunction)?", questionFr: "Quel mot signifie 'que' (conjonction)?", options: ["أَنَّ", "هٰذا", "الَّذي", "كَيْف"], correctAnswer: "أَنَّ", explanationEn: "Anna (أَنَّ) = that (conjunction).", explanationFr: "Anna (أَنَّ) = que (conjonction)." },
  { lessonSlug: "complex-sentences", order: 2, type: ExerciseType.FILL_BLANK, difficulty: Difficulty.HARD, questionEn: "أَعْرِف _____ هُوَ طالِب (I know that he is a student)", questionFr: "أَعْرِف _____ هُوَ طالِب (Je sais qu'il est étudiant)", correctAnswer: "أَنَّه", explanationEn: "Anna + hu = annahu (that he).", explanationFr: "Anna + hu = annahu (qu'il)." },
  { lessonSlug: "complex-sentences", order: 3, type: ExerciseType.TRANSLATION, difficulty: Difficulty.HARD, questionEn: "Translate: الطّالِب الَّذي قَرَأَ الكِتاب نَجَح", questionFr: "Traduisez: الطّالِب الَّذي قَرَأَ الكِتاب نَجَح", correctAnswer: "The student who read the book succeeded", explanationEn: "Relative clause with الَّذي.", explanationFr: "Proposition relative avec الَّذي." },
  { lessonSlug: "complex-sentences", order: 4, type: ExerciseType.WRITING, difficulty: Difficulty.HARD, questionEn: "Write: 'When I arrived, he was sleeping'", questionFr: "Écrivez: 'Quand je suis arrivé, il dormait'", correctAnswer: "عِنْدَما وَصَلْتُ، كانَ نائِماً", explanationEn: "'Indama wasaltu, kana na'iman.", explanationFr: "Quand je suis arrivé, il dormait." },
  { lessonSlug: "complex-sentences", order: 5, type: ExerciseType.MULTIPLE_CHOICE, difficulty: Difficulty.HARD, questionEn: "What does 'إذا' indicate?", questionFr: "Qu'indique 'إذا'?", options: ["Because", "Although", "If/When", "But"], correctAnswer: "If/When", explanationEn: "Idha = if/when (conditional).", explanationFr: "Idha = si/quand (conditionnel)." },

  // Phase 4, Lesson 4: Classical Texts
  { lessonSlug: "classical-texts", order: 1, type: ExerciseType.MULTIPLE_CHOICE, difficulty: Difficulty.HARD, questionEn: "What is 'prose' called in Arabic?", questionFr: "Comment appelle-t-on la 'prose' en arabe?", options: ["شِعْر", "نَثْر", "قِصَّة", "رِواية"], correctAnswer: "نَثْر", explanationEn: "Nathr (نَثْر) = prose.", explanationFr: "Nathr (نَثْر) = prose." },
  { lessonSlug: "classical-texts", order: 2, type: ExerciseType.TRANSLATION, difficulty: Difficulty.HARD, questionEn: "Translate this proverb: العِلْمُ نور", questionFr: "Traduisez ce proverbe: العِلْمُ نور", correctAnswer: "Knowledge is light", explanationEn: "Al-'ilmu nur - Knowledge is light.", explanationFr: "La connaissance est lumière." },
  { lessonSlug: "classical-texts", order: 3, type: ExerciseType.FILL_BLANK, difficulty: Difficulty.HARD, questionEn: "مَن جَدَّ _____ (He who strives, finds)", questionFr: "مَن جَدَّ _____ (Qui persévère, trouve)", correctAnswer: "وَجَد", explanationEn: "Man jadda wajad - Who strives, finds.", explanationFr: "Man jadda wajad - Qui persévère trouve." },
  { lessonSlug: "classical-texts", order: 4, type: ExerciseType.MULTIPLE_CHOICE, difficulty: Difficulty.HARD, questionEn: "What does 'أَدَب' mean in classical Arabic?", questionFr: "Que signifie 'أَدَب' en arabe classique?", options: ["Science", "Literature/Manners", "Religion", "History"], correctAnswer: "Literature/Manners", explanationEn: "Adab = literature and refined manners.", explanationFr: "Adab = littérature et bonnes manières." },
  { lessonSlug: "classical-texts", order: 5, type: ExerciseType.WRITING, difficulty: Difficulty.HARD, questionEn: "Write a famous Arabic saying", questionFr: "Écrivez un proverbe arabe célèbre", correctAnswer: "الصَّبْرُ مِفْتاحُ الفَرَج", explanationEn: "Patience is the key to relief.", explanationFr: "La patience est la clé du soulagement." },

  // Phase 4, Lesson 5: Essay Writing
  { lessonSlug: "essay-writing", order: 1, type: ExerciseType.MULTIPLE_CHOICE, difficulty: Difficulty.HARD, questionEn: "What is 'introduction' in Arabic?", questionFr: "Comment dit-on 'introduction' en arabe?", options: ["خاتِمَة", "مُقَدِّمَة", "فِقْرَة", "عُنْوان"], correctAnswer: "مُقَدِّمَة", explanationEn: "Muqaddima = introduction.", explanationFr: "Muqaddima = introduction." },
  { lessonSlug: "essay-writing", order: 2, type: ExerciseType.MATCHING, difficulty: Difficulty.HARD, questionEn: "Match essay parts", questionFr: "Associez les parties d'un essai", options: [{ left: "مُقَدِّمَة", right: "Introduction" }, { left: "جِسْم المَقال", right: "Body" }, { left: "خاتِمَة", right: "Conclusion" }, { left: "فِقْرَة", right: "Paragraph" }], correctAnswer: "مُقَدِّمَة-Introduction,جِسْم المَقال-Body,خاتِمَة-Conclusion,فِقْرَة-Paragraph" },
  { lessonSlug: "essay-writing", order: 3, type: ExerciseType.WRITING, difficulty: Difficulty.HARD, questionEn: "Write an opening sentence about learning Arabic", questionFr: "Écrivez une phrase d'ouverture sur l'apprentissage de l'arabe", correctAnswer: "تَعَلُّم اللُّغَة العَرَبِيَّة مُهِمٌّ جِدّاً", explanationEn: "Learning Arabic is very important.", explanationFr: "Apprendre l'arabe est très important." },
  { lessonSlug: "essay-writing", order: 4, type: ExerciseType.FILL_BLANK, difficulty: Difficulty.HARD, questionEn: "في _____، أودُّ أَن أَقول... (In conclusion, I would like to say...)", questionFr: "في _____، أودُّ أَن أَقول... (En conclusion, je voudrais dire...)", correctAnswer: "الخِتام", explanationEn: "Fi al-khitam = in conclusion.", explanationFr: "Fi al-khitam = en conclusion." },
  { lessonSlug: "essay-writing", order: 5, type: ExerciseType.TRANSLATION, difficulty: Difficulty.HARD, questionEn: "Translate: أَوَّلاً وَأَخيراً، اللُّغَة العَرَبِيَّة جَميلَة", questionFr: "Traduisez: أَوَّلاً وَأَخيراً، اللُّغَة العَرَبِيَّة جَميلَة", correctAnswer: "First and last, the Arabic language is beautiful", explanationEn: "Awwalan wa akhiran...", explanationFr: "D'abord et enfin, la langue arabe est belle." },

  // Phase 5, Lesson 1: Arabic Poetry
  { lessonSlug: "arabic-poetry-intro", order: 1, type: ExerciseType.MULTIPLE_CHOICE, difficulty: Difficulty.HARD, questionEn: "What is 'poetry' called in Arabic?", questionFr: "Comment appelle-t-on la 'poésie' en arabe?", options: ["نَثْر", "شِعْر", "رِواية", "مَقالَة"], correctAnswer: "شِعْر", explanationEn: "Shi'r (شِعْر) = poetry.", explanationFr: "Shi'r (شِعْر) = poésie." },
  { lessonSlug: "arabic-poetry-intro", order: 2, type: ExerciseType.MULTIPLE_CHOICE, difficulty: Difficulty.HARD, questionEn: "What are Arabic poetic meters called?", questionFr: "Comment appelle-t-on les mètres poétiques arabes?", options: ["قافِية", "بُحور", "أَبْيات", "قَصيدَة"], correctAnswer: "بُحور", explanationEn: "Buhur = poetic meters.", explanationFr: "Buhur = mètres poétiques." },
  { lessonSlug: "arabic-poetry-intro", order: 3, type: ExerciseType.FILL_BLANK, difficulty: Difficulty.HARD, questionEn: "A line of Arabic poetry is called a _____", questionFr: "Un vers de poésie arabe s'appelle un _____", correctAnswer: "بَيْت", explanationEn: "Bayt = line/verse of poetry.", explanationFr: "Bayt = vers de poésie." },
  { lessonSlug: "arabic-poetry-intro", order: 4, type: ExerciseType.MATCHING, difficulty: Difficulty.HARD, questionEn: "Match poetry terms", questionFr: "Associez les termes poétiques", options: [{ left: "قَصيدَة", right: "Poem/Ode" }, { left: "قافِية", right: "Rhyme" }, { left: "شاعِر", right: "Poet" }, { left: "بَيْت", right: "Verse/Line" }], correctAnswer: "قَصيدَة-Poem/Ode,قافِية-Rhyme,شاعِر-Poet,بَيْت-Verse/Line" },
  { lessonSlug: "arabic-poetry-intro", order: 5, type: ExerciseType.TRANSLATION, difficulty: Difficulty.HARD, questionEn: "Translate: وَلَكِنَّ الفَتى العَرَبِيَّ فيها * غَريبُ الوَجْهِ واليَدِ واللِّسان", questionFr: "Traduisez: وَلَكِنَّ الفَتى العَرَبِيَّ فيها * غَريبُ الوَجْهِ واليَدِ واللِّسان", correctAnswer: "But the Arab youth in it is strange of face, hand, and tongue", explanationEn: "Famous verse by Mutanabbi about feeling foreign.", explanationFr: "Vers célèbre de Mutanabbi sur le sentiment d'être étranger." },

  // Phase 5, Lesson 2: Calligraphy
  { lessonSlug: "calligraphy-basics", order: 1, type: ExerciseType.MULTIPLE_CHOICE, difficulty: Difficulty.MEDIUM, questionEn: "What is 'calligraphy' in Arabic?", questionFr: "Comment dit-on 'calligraphie' en arabe?", options: ["رَسْم", "خَطّ", "كِتابَة", "فَنّ"], correctAnswer: "خَطّ", explanationEn: "Khatt (خَطّ) = calligraphy.", explanationFr: "Khatt (خَطّ) = calligraphie." },
  { lessonSlug: "calligraphy-basics", order: 2, type: ExerciseType.MATCHING, difficulty: Difficulty.HARD, questionEn: "Match calligraphy styles", questionFr: "Associez les styles de calligraphie", options: [{ left: "نَسْخ", right: "Naskh (copying)" }, { left: "ثُلُث", right: "Thuluth (one-third)" }, { left: "ديواني", right: "Diwani (chancellery)" }, { left: "كوفي", right: "Kufic (from Kufa)" }], correctAnswer: "نَسْخ-Naskh (copying),ثُلُث-Thuluth (one-third),ديواني-Diwani (chancellery),كوفي-Kufic (from Kufa)" },
  { lessonSlug: "calligraphy-basics", order: 3, type: ExerciseType.MULTIPLE_CHOICE, difficulty: Difficulty.MEDIUM, questionEn: "Which script is most commonly used in printed books?", questionFr: "Quel script est le plus couramment utilisé dans les livres imprimés?", options: ["Kufic", "Naskh", "Diwani", "Thuluth"], correctAnswer: "Naskh", explanationEn: "Naskh is the standard for printing.", explanationFr: "Naskh est le standard pour l'impression." },
  { lessonSlug: "calligraphy-basics", order: 4, type: ExerciseType.FILL_BLANK, difficulty: Difficulty.HARD, questionEn: "The traditional pen for calligraphy is called _____", questionFr: "Le stylo traditionnel pour la calligraphie s'appelle _____", correctAnswer: "قَلَم القَصَب", explanationEn: "Qalam al-qasab = reed pen.", explanationFr: "Qalam al-qasab = calame." },
  { lessonSlug: "calligraphy-basics", order: 5, type: ExerciseType.WRITING, difficulty: Difficulty.MEDIUM, questionEn: "Write 'بِسْمِ اللّٰه' (In the name of God)", questionFr: "Écrivez 'بِسْمِ اللّٰه' (Au nom de Dieu)", correctAnswer: "بِسْمِ اللّٰه", explanationEn: "Bismillah - the opening phrase.", explanationFr: "Bismillah - la phrase d'ouverture." },

  // Phase 5, Lesson 3: Rhetoric (Balagha)
  { lessonSlug: "rhetoric-balagha", order: 1, type: ExerciseType.MULTIPLE_CHOICE, difficulty: Difficulty.HARD, questionEn: "What does 'بَلاغَة' mean?", questionFr: "Que signifie 'بَلاغَة'?", options: ["Grammar", "Rhetoric/Eloquence", "Poetry", "Writing"], correctAnswer: "Rhetoric/Eloquence", explanationEn: "Balagha = rhetoric, eloquence.", explanationFr: "Balagha = rhétorique, éloquence." },
  { lessonSlug: "rhetoric-balagha", order: 2, type: ExerciseType.MULTIPLE_CHOICE, difficulty: Difficulty.HARD, questionEn: "What is 'تَشْبيه' (simile)?", questionFr: "Qu'est-ce qu'un 'تَشْبيه' (simile)?", options: ["Comparison using 'like'", "Metaphor", "Metonymy", "Hyperbole"], correctAnswer: "Comparison using 'like'", explanationEn: "Tashbih = simile (comparison with كَ or مِثْل).", explanationFr: "Tashbih = comparaison (avec كَ ou مِثْل)." },
  { lessonSlug: "rhetoric-balagha", order: 3, type: ExerciseType.MATCHING, difficulty: Difficulty.HARD, questionEn: "Match rhetorical devices", questionFr: "Associez les figures de style", options: [{ left: "اِسْتِعارَة", right: "Metaphor" }, { left: "كِنايَة", right: "Metonymy" }, { left: "طِباق", right: "Antithesis" }, { left: "جِناس", right: "Pun/Paronomasia" }], correctAnswer: "اِسْتِعارَة-Metaphor,كِنايَة-Metonymy,طِباق-Antithesis,جِناس-Pun/Paronomasia" },
  { lessonSlug: "rhetoric-balagha", order: 4, type: ExerciseType.FILL_BLANK, difficulty: Difficulty.HARD, questionEn: "القَمَر كَالمِرْآة - This is an example of _____", questionFr: "القَمَر كَالمِرْآة - C'est un exemple de _____", correctAnswer: "تَشْبيه", explanationEn: "The moon is like a mirror - simile.", explanationFr: "La lune est comme un miroir - comparaison." },
  { lessonSlug: "rhetoric-balagha", order: 5, type: ExerciseType.TRANSLATION, difficulty: Difficulty.HARD, questionEn: "Identify the device: رَأَيْتُ بَحْراً يَمْشي (I saw a sea walking)", questionFr: "Identifiez la figure: رَأَيْتُ بَحْراً يَمْشي (J'ai vu une mer marcher)", correctAnswer: "Metaphor (استعارة)", explanationEn: "Sea = generous person (isti'ara/metaphor).", explanationFr: "Mer = personne généreuse (isti'ara/métaphore)." },

  // Phase 5, Lesson 4: Tajweed
  { lessonSlug: "quran-recitation", order: 1, type: ExerciseType.MULTIPLE_CHOICE, difficulty: Difficulty.HARD, questionEn: "What does 'تَجْويد' mean?", questionFr: "Que signifie 'تَجْويد'?", options: ["Reading", "Beautification/Proper pronunciation", "Writing", "Understanding"], correctAnswer: "Beautification/Proper pronunciation", explanationEn: "Tajweed = beautifying recitation.", explanationFr: "Tajweed = embellir la récitation." },
  { lessonSlug: "quran-recitation", order: 2, type: ExerciseType.MATCHING, difficulty: Difficulty.HARD, questionEn: "Match Tajweed rules", questionFr: "Associez les règles de Tajweed", options: [{ left: "إِدْغام", right: "Merging" }, { left: "إِخْفاء", right: "Hiding" }, { left: "قَلْقَلَة", right: "Bouncing" }, { left: "مَدّ", right: "Elongation" }], correctAnswer: "إِدْغام-Merging,إِخْفاء-Hiding,قَلْقَلَة-Bouncing,مَدّ-Elongation" },
  { lessonSlug: "quran-recitation", order: 3, type: ExerciseType.MULTIPLE_CHOICE, difficulty: Difficulty.HARD, questionEn: "Which letters have Qalqala (bouncing)?", questionFr: "Quelles lettres ont Qalqala (rebond)?", options: ["ق ط ب ج د", "ا و ي", "ن م", "ه ء"], correctAnswer: "ق ط ب ج د", explanationEn: "Qalqala letters: ق ط ب ج د (QTBJD).", explanationFr: "Lettres Qalqala: ق ط ب ج د (QTBJD)." },
  { lessonSlug: "quran-recitation", order: 4, type: ExerciseType.FILL_BLANK, difficulty: Difficulty.HARD, questionEn: "When noon sakin meets ب, the rule is _____ (conversion)", questionFr: "Quand noon sakin rencontre ب, la règle est _____ (conversion)", correctAnswer: "إِقْلاب", explanationEn: "Iqlab = converting noon to meem.", explanationFr: "Iqlab = conversion du noun en mim." },
  { lessonSlug: "quran-recitation", order: 5, type: ExerciseType.LISTENING, difficulty: Difficulty.HARD, questionEn: "Listen and identify the Tajweed rule", questionFr: "Écoutez et identifiez la règle de Tajweed", audioText: "مِن بَعْد", options: ["Idgham", "Iqlab", "Ikhfa", "Izhar"], correctAnswer: "Iqlab", explanationEn: "Noon before Ba becomes Meem.", explanationFr: "Noun avant Ba devient Mim." },

  // Phase 5, Lesson 5: Modern Arabic Literature
  { lessonSlug: "modern-arabic-literature", order: 1, type: ExerciseType.MULTIPLE_CHOICE, difficulty: Difficulty.HARD, questionEn: "Who won the Nobel Prize for Arabic literature in 1988?", questionFr: "Qui a remporté le prix Nobel de littérature arabe en 1988?", options: ["Taha Hussein", "Naguib Mahfouz", "Gibran Khalil", "Mahmoud Darwish"], correctAnswer: "Naguib Mahfouz", explanationEn: "Naguib Mahfouz won for his Cairo Trilogy.", explanationFr: "Naguib Mahfouz a gagné pour sa Trilogie du Caire." },
  { lessonSlug: "modern-arabic-literature", order: 2, type: ExerciseType.MATCHING, difficulty: Difficulty.HARD, questionEn: "Match authors with works", questionFr: "Associez les auteurs aux œuvres", options: [{ left: "نجيب محفوظ", right: "الثلاثية" }, { left: "طه حسين", right: "الأيام" }, { left: "جبران خليل", right: "النبي" }, { left: "محمود درويش", right: "أوراق الزيتون" }], correctAnswer: "نجيب محفوظ-الثلاثية,طه حسين-الأيام,جبران خليل-النبي,محمود درويش-أوراق الزيتون" },
  { lessonSlug: "modern-arabic-literature", order: 3, type: ExerciseType.FILL_BLANK, difficulty: Difficulty.HARD, questionEn: "طه حسين is known as the '_____ of Arabic literature'", questionFr: "طه حسين est connu comme le '_____ de la littérature arabe'", correctAnswer: "عَميد", explanationEn: "Amid = dean/doyen.", explanationFr: "Amid = doyen." },
  { lessonSlug: "modern-arabic-literature", order: 4, type: ExerciseType.TRANSLATION, difficulty: Difficulty.HARD, questionEn: "Translate: الأدَب المُعاصِر يَعْكِس هُموم المُجْتَمَع", questionFr: "Traduisez: الأدَب المُعاصِر يَعْكِس هُموم المُجْتَمَع", correctAnswer: "Contemporary literature reflects society's concerns", explanationEn: "Modern literature reflects social issues.", explanationFr: "La littérature contemporaine reflète les préoccupations de la société." },
  { lessonSlug: "modern-arabic-literature", order: 5, type: ExerciseType.WRITING, difficulty: Difficulty.HARD, questionEn: "Write a sentence about your favorite Arabic author", questionFr: "Écrivez une phrase sur votre auteur arabe préféré", correctAnswer: "أُحِبُّ قِراءَة كُتُب نَجيب مَحْفوظ", explanationEn: "I love reading Naguib Mahfouz's books.", explanationFr: "J'aime lire les livres de Naguib Mahfouz." },
];

const ACHIEVEMENT_IDS = [
  "first-lesson",
  "streak-3",
  "streak-7",
  "streak-14",
  "streak-30",
  "streak-100",
  "phase-1-complete",
  "phase-2-complete",
  "phase-3-complete",
  "phase-4-complete",
  "phase-5-complete",
  "first-perfect-score",
  "10-perfect-scores",
  "25-perfect-scores",
  "50-perfect-scores",
  "alphabet-master",
  "vocabulary-100",
  "vocabulary-500",
  "vocabulary-1000",
  "grammar-guru",
  "listening-expert",
  "writing-warrior",
  "time-spent-1hr",
  "time-spent-10hr",
  "time-spent-50hr",
  "early-bird",
  "night-owl",
  "weekend-warrior",
  "speed-learner",
  "persistence-award",
];

// ============================================
// MAIN SEED FUNCTION
// ============================================

async function main() {
  console.log("🌱 Starting database seed...\n");

  // ============================================
  // 1. SEED USERS
  // ============================================
  console.log("👤 Seeding users...");
  const users: Array<{ id: string; email: string; name: string | null }> = [];
  
  for (const userData of USERS_DATA) {
    const hashedPassword = await hashPassword(userData.password);
    const user = await prisma.user.upsert({
      where: { email: userData.email },
      update: {
        name: userData.name,
        password: hashedPassword,
        role: userData.role,
      },
      create: {
        email: userData.email,
        name: userData.name,
        password: hashedPassword,
        role: userData.role,
        emailVerified: new Date(),
      },
    });
    users.push(user);
    console.log(`  ✓ ${user.email} (${userData.role})`);
  }
  console.log(`  Total: ${users.length} users\n`);

  // ============================================
  // 2. SEED USER STATS
  // ============================================
  console.log("📊 Seeding user stats...");
  const now = new Date();
  
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const progressLevel = i / users.length; // 0 to 1
    
    const xp = Math.floor(progressLevel * 50000);
    const level = Math.max(1, Math.floor(progressLevel * 20));
    const streak = Math.floor(Math.random() * 100);
    const longestStreak = Math.max(streak, randomInt(streak, 150));
    const lastActiveDate = randomDate(new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000), now);
    const totalTimeSpent = Math.floor(progressLevel * 200 * 3600); // Up to 200 hours
    const lessonsCompleted = Math.floor(progressLevel * 25);
    const exercisesCompleted = lessonsCompleted * randomInt(3, 6);
    const perfectScores = Math.floor(exercisesCompleted * 0.3);
    const wordsLearned = Math.floor(progressLevel * 1000);

    await prisma.userStats.upsert({
      where: { userId: user.id },
      update: {
        xp,
        level,
        streak,
        longestStreak,
        lastActiveDate,
        totalTimeSpent,
        lessonsCompleted,
        exercisesCompleted,
        perfectScores,
        wordsLearned,
      },
      create: {
        userId: user.id,
        xp,
        level,
        streak,
        longestStreak,
        lastActiveDate,
        totalTimeSpent,
        lessonsCompleted,
        exercisesCompleted,
        perfectScores,
        wordsLearned,
      },
    });
    console.log(`  ✓ Stats for ${user.email}: Level ${level}, ${xp} XP`);
  }
  console.log(`  Total: ${users.length} user stats\n`);

  // ============================================
  // 3. SEED LESSONS
  // ============================================
  console.log("📚 Seeding lessons...");
  const lessonMap = new Map<string, { id: string; slug: string }>();
  
  for (const lessonData of LESSONS_DATA) {
    const lesson = await prisma.lesson.upsert({
      where: { slug: lessonData.slug },
      update: {
        phaseId: lessonData.phaseId,
        order: lessonData.order,
        titleEn: lessonData.titleEn,
        titleFr: lessonData.titleFr,
        titleAr: lessonData.titleAr,
        descEn: lessonData.descEn,
        descFr: lessonData.descFr,
        descAr: lessonData.descAr,
        duration: lessonData.duration,
        isPublished: true,
      },
      create: {
        phaseId: lessonData.phaseId,
        order: lessonData.order,
        slug: lessonData.slug,
        titleEn: lessonData.titleEn,
        titleFr: lessonData.titleFr,
        titleAr: lessonData.titleAr,
        descEn: lessonData.descEn,
        descFr: lessonData.descFr,
        descAr: lessonData.descAr,
        duration: lessonData.duration,
        isPublished: true,
      },
    });
    lessonMap.set(lesson.slug, { id: lesson.id, slug: lesson.slug });
    console.log(`  ✓ Phase ${lessonData.phaseId}: ${lessonData.titleEn}`);
  }
  console.log(`  Total: ${lessonMap.size} lessons\n`);

  // ============================================
  // 4. SEED EXERCISES
  // ============================================
  console.log("✏️ Seeding exercises...");
  let exerciseCount = 0;
  
  // First, delete existing exercises to avoid duplicates (since we can't use upsert without unique constraint on lessonId+order)
  await prisma.exercise.deleteMany({});
  
  for (const exerciseData of EXERCISES_DATA) {
    const lesson = lessonMap.get(exerciseData.lessonSlug);
    if (!lesson) {
      console.log(`  ⚠️ Lesson not found: ${exerciseData.lessonSlug}`);
      continue;
    }

    await prisma.exercise.create({
      data: {
        lessonId: lesson.id,
        order: exerciseData.order,
        type: exerciseData.type,
        difficulty: exerciseData.difficulty,
        questionEn: exerciseData.questionEn,
        questionFr: exerciseData.questionFr,
        questionAr: exerciseData.questionAr || null,
        options: exerciseData.options ? JSON.stringify(exerciseData.options) : undefined,
        correctAnswer: exerciseData.correctAnswer,
        explanationEn: exerciseData.explanationEn || null,
        explanationFr: exerciseData.explanationFr || null,
        audioText: exerciseData.audioText || null,
      },
    });
    exerciseCount++;
  }
  console.log(`  Total: ${exerciseCount} exercises\n`);

  // ============================================
  // 5. SEED PROGRESS ENTRIES
  // ============================================
  console.log("📈 Seeding progress entries...");
  
  // Delete existing progress to avoid conflicts
  await prisma.progress.deleteMany({});
  
  const lessonArray = Array.from(lessonMap.values());
  let progressCount = 0;

  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const progressLevel = i / users.length;
    const lessonsToComplete = Math.floor(progressLevel * lessonArray.length);
    
    for (let j = 0; j < lessonsToComplete && j < lessonArray.length; j++) {
      const lesson = lessonArray[j];
      const phaseId = LESSONS_DATA[j].phaseId;
      const completed = j < lessonsToComplete - 1 || Math.random() > 0.3;
      const score = completed ? randomInt(60, 100) : randomInt(20, 80);
      const timeSpent = randomInt(300, 2400); // 5-40 minutes
      const attempts = randomInt(1, 5);
      const lastAttemptAt = randomDate(
        new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000),
        now
      );

      await prisma.progress.create({
        data: {
          userId: user.id,
          phaseId,
          lessonId: lesson.id,
          exerciseId: null, // Lesson-level progress
          completed,
          score,
          timeSpent,
          attempts,
          lastAttemptAt,
        },
      });
      progressCount++;
    }
  }
  console.log(`  Total: ${progressCount} progress entries\n`);

  // ============================================
  // 6. SEED USER ACHIEVEMENTS
  // ============================================
  console.log("🏆 Seeding user achievements...");
  
  // Delete existing achievements to avoid conflicts
  await prisma.userAchievement.deleteMany({});
  
  let achievementCount = 0;
  
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const progressLevel = i / users.length;
    const numAchievements = Math.floor(progressLevel * ACHIEVEMENT_IDS.length);
    
    // Always give first user some achievements
    const achievementsToGrant = i === 0 ? 5 : numAchievements;
    
    for (let j = 0; j < achievementsToGrant && j < ACHIEVEMENT_IDS.length; j++) {
      const achievementId = ACHIEVEMENT_IDS[j];
      const unlockedAt = randomDate(
        new Date(now.getTime() - 60 * 24 * 60 * 60 * 1000),
        now
      );

      await prisma.userAchievement.create({
        data: {
          userId: user.id,
          achievementId,
          unlockedAt,
          notified: Math.random() > 0.2,
        },
      });
      achievementCount++;
    }
  }
  console.log(`  Total: ${achievementCount} achievements\n`);

  // ============================================
  // SUMMARY
  // ============================================
  console.log("✅ Seed completed successfully!\n");
  console.log("Summary:");
  console.log(`  - ${users.length} users`);
  console.log(`  - ${users.length} user stats`);
  console.log(`  - ${lessonMap.size} lessons`);
  console.log(`  - ${exerciseCount} exercises`);
  console.log(`  - ${progressCount} progress entries`);
  console.log(`  - ${achievementCount} achievements`);
  console.log("\n🎉 Database is ready!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌ Seed failed:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
