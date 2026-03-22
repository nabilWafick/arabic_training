/**
 * Shared constants for curriculum data
 * Arabic alphabet, harakat, and numbers
 */

/**
 * Arabic alphabet data with all letters, forms, and pronunciation
 */
export const ARABIC_ALPHABET = [
  { letter: "ا", name: "Alif", transliteration: "ā / a", isolated: "ا", initial: "ا", medial: "ـا", final: "ـا", type: "long vowel" },
  { letter: "ب", name: "Bā'", transliteration: "b", isolated: "ب", initial: "بـ", medial: "ـبـ", final: "ـب", type: "sun letter" },
  { letter: "ت", name: "Tā'", transliteration: "t", isolated: "ت", initial: "تـ", medial: "ـتـ", final: "ـت", type: "sun letter" },
  { letter: "ث", name: "Thā'", transliteration: "th", isolated: "ث", initial: "ثـ", medial: "ـثـ", final: "ـث", type: "sun letter" },
  { letter: "ج", name: "Jīm", transliteration: "j", isolated: "ج", initial: "جـ", medial: "ـجـ", final: "ـج", type: "moon letter" },
  { letter: "ح", name: "Ḥā'", transliteration: "ḥ", isolated: "ح", initial: "حـ", medial: "ـحـ", final: "ـح", type: "moon letter" },
  { letter: "خ", name: "Khā'", transliteration: "kh", isolated: "خ", initial: "خـ", medial: "ـخـ", final: "ـخ", type: "moon letter" },
  { letter: "د", name: "Dāl", transliteration: "d", isolated: "د", initial: "د", medial: "ـد", final: "ـد", type: "sun letter" },
  { letter: "ذ", name: "Dhāl", transliteration: "dh", isolated: "ذ", initial: "ذ", medial: "ـذ", final: "ـذ", type: "sun letter" },
  { letter: "ر", name: "Rā'", transliteration: "r", isolated: "ر", initial: "ر", medial: "ـر", final: "ـر", type: "sun letter" },
  { letter: "ز", name: "Zāy", transliteration: "z", isolated: "ز", initial: "ز", medial: "ـز", final: "ـز", type: "sun letter" },
  { letter: "س", name: "Sīn", transliteration: "s", isolated: "س", initial: "سـ", medial: "ـسـ", final: "ـس", type: "sun letter" },
  { letter: "ش", name: "Shīn", transliteration: "sh", isolated: "ش", initial: "شـ", medial: "ـشـ", final: "ـش", type: "sun letter" },
  { letter: "ص", name: "Ṣād", transliteration: "ṣ", isolated: "ص", initial: "صـ", medial: "ـصـ", final: "ـص", type: "sun letter" },
  { letter: "ض", name: "Ḍād", transliteration: "ḍ", isolated: "ض", initial: "ضـ", medial: "ـضـ", final: "ـض", type: "sun letter" },
  { letter: "ط", name: "Ṭā'", transliteration: "ṭ", isolated: "ط", initial: "طـ", medial: "ـطـ", final: "ـط", type: "sun letter" },
  { letter: "ظ", name: "Ẓā'", transliteration: "ẓ", isolated: "ظ", initial: "ظـ", medial: "ـظـ", final: "ـظ", type: "sun letter" },
  { letter: "ع", name: "'Ayn", transliteration: "'", isolated: "ع", initial: "عـ", medial: "ـعـ", final: "ـع", type: "moon letter" },
  { letter: "غ", name: "Ghayn", transliteration: "gh", isolated: "غ", initial: "غـ", medial: "ـغـ", final: "ـغ", type: "moon letter" },
  { letter: "ف", name: "Fā'", transliteration: "f", isolated: "ف", initial: "فـ", medial: "ـفـ", final: "ـف", type: "moon letter" },
  { letter: "ق", name: "Qāf", transliteration: "q", isolated: "ق", initial: "قـ", medial: "ـقـ", final: "ـق", type: "moon letter" },
  { letter: "ك", name: "Kāf", transliteration: "k", isolated: "ك", initial: "كـ", medial: "ـكـ", final: "ـك", type: "moon letter" },
  { letter: "ل", name: "Lām", transliteration: "l", isolated: "ل", initial: "لـ", medial: "ـلـ", final: "ـل", type: "sun letter" },
  { letter: "م", name: "Mīm", transliteration: "m", isolated: "م", initial: "مـ", medial: "ـمـ", final: "ـم", type: "moon letter" },
  { letter: "ن", name: "Nūn", transliteration: "n", isolated: "ن", initial: "نـ", medial: "ـنـ", final: "ـن", type: "sun letter" },
  { letter: "ه", name: "Hā'", transliteration: "h", isolated: "ه", initial: "هـ", medial: "ـهـ", final: "ـه", type: "moon letter" },
  { letter: "و", name: "Wāw", transliteration: "w / ū", isolated: "و", initial: "و", medial: "ـو", final: "ـو", type: "moon letter" },
  { letter: "ي", name: "Yā'", transliteration: "y / ī", isolated: "ي", initial: "يـ", medial: "ـيـ", final: "ـي", type: "moon letter" },
] as const;

/**
 * Arabic diacritical marks (Harakat)
 */
export const ARABIC_HARAKAT = [
  { mark: "َ", name: "Fatḥa", nameAr: "فَتْحَة", sound: "a", description: "Short 'a' vowel, placed above the letter" },
  { mark: "ِ", name: "Kasra", nameAr: "كَسْرَة", sound: "i", description: "Short 'i' vowel, placed below the letter" },
  { mark: "ُ", name: "Ḍamma", nameAr: "ضَمَّة", sound: "u", description: "Short 'u' vowel, placed above the letter" },
  { mark: "ْ", name: "Sukūn", nameAr: "سُكُون", sound: "", description: "Indicates no vowel (consonant only)" },
  { mark: "ّ", name: "Shadda", nameAr: "شَدَّة", sound: "double", description: "Doubles the consonant (gemination)" },
  { mark: "ً", name: "Fatḥatān", nameAr: "فَتْحَتَان", sound: "an", description: "Nunation with fatḥa, used for indefinite accusative" },
  { mark: "ٍ", name: "Kasratān", nameAr: "كَسْرَتَان", sound: "in", description: "Nunation with kasra, used for indefinite genitive" },
  { mark: "ٌ", name: "Ḍammatān", nameAr: "ضَمَّتَان", sound: "un", description: "Nunation with ḍamma, used for indefinite nominative" },
] as const;

/**
 * Arabic numbers 0-10 with pronunciation
 */
export const ARABIC_NUMBERS = [
  { number: 0, arabic: "٠", word: "صِفْر", transliteration: "ṣifr" },
  { number: 1, arabic: "١", word: "وَاحِد", transliteration: "wāḥid" },
  { number: 2, arabic: "٢", word: "اِثْنَان", transliteration: "ithnān" },
  { number: 3, arabic: "٣", word: "ثَلَاثَة", transliteration: "thalātha" },
  { number: 4, arabic: "٤", word: "أَرْبَعَة", transliteration: "arba'a" },
  { number: 5, arabic: "٥", word: "خَمْسَة", transliteration: "khamsa" },
  { number: 6, arabic: "٦", word: "سِتَّة", transliteration: "sitta" },
  { number: 7, arabic: "٧", word: "سَبْعَة", transliteration: "sab'a" },
  { number: 8, arabic: "٨", word: "ثَمَانِيَة", transliteration: "thamāniya" },
  { number: 9, arabic: "٩", word: "تِسْعَة", transliteration: "tis'a" },
  { number: 10, arabic: "١٠", word: "عَشَرَة", transliteration: "'ashara" },
] as const;
