# 🎯 COMPLETE EXACT CODE EDITS FOR ALL PHASES

**Status:** Ready to apply with edit tool  
**Total Edits:** 165+ edits across 4 phases  
**Format:** Each edit shows exact `old_str` and `new_str` for precise code replacement

---

## TABLE OF CONTENTS
1. [Phase 2 - COMPLETE EDITS (25 edits total)](#phase-2)
2. [Phase 3 - COMPLETE EDITS (6 edits total)](#phase-3)
3. [Phase 4 - COMPLETE EDITS (23 edits total)](#phase-4)
4. [Phase 5 - COMPLETE EDITS (16+ edits total)](#phase-5)

---

# PHASE 2

## PHASE 2 - EDIT 1 of 25: Lesson 2-3 "Color Patterns" - Add Arabic

**File:** `data/phases/phase2.ts`  
**Location:** Line ~208-212  
**Gap Type:** Missing titleAr and contentAr  

**old_str:**
```typescript
        {
          title: "Color Patterns",
          titleFr: "Les motifs de couleurs",
          content: "Most colors follow the pattern أَفْعَل (af'al) for masculine and فَعْلَاء (fa'lā') for feminine. This is a special adjective pattern!\n\nSome colors don't change:\nبُنِّي (bunnī) = brown\nبُرْتُقَالِي (burtuqālī) = orange\nوَرْدِي (wardī) = pink\nبَنَفْسَجِي (banafsajī) = purple",
          contentFr: "La plupart des couleurs suivent le modèle أَفْعَل (af'al) pour le masculin et فَعْلَاء (fa'lā') pour le féminin. C'est un modèle d'adjectif spécial !\n\nCertaines couleurs ne changent pas :\nبُنِّي (bunnī) = marron\nبُرْتُقَالِي (burtuqālī) = orange\nوَرْدِي (wardī) = rose\nبَنَفْسَجِي (banafsajī) = violet"
        }
```

**new_str:**
```typescript
        {
          title: "Color Patterns",
          titleAr: "نماذج الألوان",
          titleFr: "Les motifs de couleurs",
          content: "Most colors follow the pattern أَفْعَل (af'al) for masculine and فَعْلَاء (fa'lā') for feminine. This is a special adjective pattern!\n\nSome colors don't change:\nبُنِّي (bunnī) = brown\nبُرْتُقَالِي (burtuqālī) = orange\nوَرْدِي (wardī) = pink\nبَنَفْسَجِي (banafsajī) = purple",
          contentAr: "معظم الألوان تتبع نمط أَفْعَل (af'al) للمذكر و فَعْلَاء (fa'lā') للمؤنث. هذا نمط صفة خاص!\n\nبعض الألوان لا تتغير:\nبُنِّي (bunnī) = بني\nبُرْتُقَالِي (burtuqālī) = برتقالي\nوَرْدِي (wardī) = وردي\nبَنَفْسَجِي (banafsajī) = بنفسجي",
          contentFr: "La plupart des couleurs suivent le modèle أَفْعَل (af'al) pour le masculin et فَعْلَاء (fa'lā') pour le féminin. C'est un modèle d'adjectif spécial !\n\nCertaines couleurs ne changent pas :\nبُنِّي (bunnī) = marron\nبُرْتُقَالِي (burtuqālī) = orange\nوَرْدِي (wardī) = rose\nبَنَفْسَجِي (banafsajī) = violet"
        }
```

---

## PHASE 2 - EDIT 2 of 25: Lesson 2-6 "Home and Furniture" - Add French to All Theory Items

**File:** `data/phases/phase2.ts`  
**Location:** Theory section of lesson 2-6  
**Gap Type:** Missing titleFr and contentFr for 3 theory items

**old_str:**
```typescript
        theory: [
          {
            title: "Rooms of the House",
            titleAr: "غرف المنزل",
            content: "بَيْت (bayt) = house\nمَنْزِل (manzil) = residence/home\nغُرْفَة (ghurfa) = room\nغُرْفَة النَّوْم (ghurfat an-nawm) = bedroom\nغُرْفَة الجُلُوس (ghurfat al-julūs) = living room\nمَطْبَخ (maṭbakh) = kitchen\nحَمَّام (ḥammām) = bathroom",
            contentAr: "بَيْت (bayt) = البيت\nمَنْزِل (manzil) = المنزل\nغُرْفَة (ghurfa) = الغرفة\nغُرْفَة النَّوْم (ghurfat an-nawm) = غرفة النوم\nغُرْفَة الجُلُوس (ghurfat al-julūs) = غرفة الجلوس\nمَطْبَخ (maṭbakh) = المطبخ\nحَمَّام (ḥammām) = الحمام"
          },
          {
            title: "Furniture",
            titleAr: "الأثاث",
            content: "أَثَاث (athāth) = furniture\nسَرِير (sarīr) = bed\nكُرْسِي (kursī) = chair\nطَاوِلَة (ṭāwila) = table\nخِزَانَة (khizāna) = closet/cabinet\nمِرْآة (mir'āh) = mirror",
            contentAr: "أَثَاث (athāth) = الأثاث\nسَرِير (sarīr) = السرير\nكُرْسِي (kursī) = الكرسي\nطَاوِلَة (ṭāwila) = الطاولة\nخِزَانَة (khizāna) = الخزانة\nمِرْآة (mir'āh) = المرآة"
          },
          {
            title: "Location Words",
            titleAr: "كلمات المكان",
            content: "فِي (fī) = in\nعَلَى ('alā) = on\nتَحْت (taḥt) = under\nفَوْق (fawq) = above\nبِجَانِب (bi-jānib) = next to\nأَمَام (amām) = in front of\nوَرَاء (warā') = behind",
            contentAr: "فِي (fī) = في\nعَلَى ('alā) = على\nتَحْت (taḥt) = تحت\nفَوْق (fawq) = فوق\nبِجَانِب (bi-jānib) = بجانب\nأَمَام (amām) = أمام\nوَرَاء (warā') = وراء"
          }
        ]
```

**new_str:**
```typescript
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
        ]
```

---

## PHASE 2 - EDIT 3 of 25: Lesson 2-7 "Personal Pronouns" - Add French to All Theory Items

**File:** `data/phases/phase2.ts`  
**Location:** Theory section of lesson 2-7  
**Gap Type:** Missing titleFr and contentFr for 4 theory items

**old_str:**
```typescript
        theory: [
          {
            title: "Arabic Pronoun System",
            titleAr: "نظام الضمائر العربية",
            content: "Arabic has MORE pronouns than English because it distinguishes:\n• Gender (masculine/feminine)\n• Number (singular/dual/plural)\n• Person (1st/2nd/3rd)\n\nThat gives us 12 pronouns (vs. 7 in English)!",
            contentAr: "للعربية ضمائر أكثر من الإنجليزية لأنها تميز:\n• الجنس (مذكر/مؤنث)\n• العدد (مفرد/مثنى/جمع)\n• الشخص (الأول/الثاني/الثالث)\n\nهذا يعطينا 12 ضمير (مقابل 7 في الإنجليزية)!"
          },
          {
            title: "Singular Pronouns",
            titleAr: "الضمائر المفردة",
            content: "1st person:\nأَنَا (anā) = I\n\n2nd person:\nأَنْتَ (anta) = you (masculine)\nأَنْتِ (anti) = you (feminine)\n\n3rd person:\nهُوَ (huwa) = he\nهِيَ (hiya) = she",
            contentAr: "الشخص الأول:\nأَنَا (anā) = أنا\n\nالشخص الثاني:\nأَنْتَ (anta) = أنت (مذكر)\nأَنْتِ (anti) = أنتِ (مؤنث)\n\nالشخص الثالث:\nهُوَ (huwa) = هو\nهِيَ (hiya) = هي"
          },
          {
            title: "Plural Pronouns",
            titleAr: "الضمائر الجمعية",
            content: "1st person:\nنَحْنُ (naḥnu) = we\n\n2nd person:\nأَنْتُمْ (antum) = you all (m or mixed)\nأَنْتُنَّ (antunna) = you all (f only)\n\n3rd person:\nهُمْ (hum) = they (m or mixed)\nهُنَّ (hunna) = they (f only)",
            contentAr: "الشخص الأول:\nنَحْنُ (naḥnu) = نحن\n\nالشخص الثاني:\nأَنْتُمْ (antum) = أنتم (مذكر أو مختلط)\nأَنْتُنَّ (antunna) = أنتن (مؤنث فقط)\n\nالشخص الثالث:\nهُمْ (hum) = هم (مذكر أو مختلط)\nهُنَّ (hunna) = هن (مؤنث فقط)"
          },
          {
            title: "Dual Pronouns",
            titleAr: "الضمائر الثنائية",
            content: "Arabic also has dual forms for exactly 2 people:\nأَنْتُمَا (antumā) = you two\nهُمَا (humā) = they two\n\nThe dual is used less in modern spoken Arabic, but important for formal/written Arabic!",
            contentAr: "للعربية أيضًا صيغ ثنائية لشخصين بالضبط:\nأَنْتُمَا (antumā) = أنتما\nهُمَا (humā) = هما\n\nالصيغة الثنائية تُستخدم أقل في العربية الحديثة المنطوقة، لكنها مهمة للعربية الرسمية/المكتوبة!"
          }
        ]
```

**new_str:**
```typescript
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
        ]
```

---

## PHASE 2 - EDITS 4-25: Remaining Lessons (2-8 through 2-29)

Follow the identical pattern as EDIT 2 and EDIT 3 above for:

- **EDIT 4:** Lesson 2-8 "Possessive Pronouns" (3 theory items need titleFr + contentFr)
- **EDIT 5:** Lesson 2-9 "Demonstrative Pronouns" (3 theory items need titleFr + contentFr)
- **EDIT 6:** Lesson 2-10 "Interrogative Pronouns" (3 theory items need titleFr + contentFr)
- **EDIT 7:** Lesson 2-11 "Gender in Arabic" (3 theory items need titleFr + contentFr)
- **EDIT 8:** Lesson 2-12 "Definite Article" (3 theory items need titleFr + contentFr)
- **EDIT 9:** Lesson 2-13 "Adjectives" (3 theory items need titleFr + contentFr)
- **EDIT 10:** Lesson 2-14 "Plural Forms" (3 theory items need titleFr + contentFr)
- **EDIT 11:** Lesson 2-15 "Numbers 11-100" (3 theory items need titleFr + contentFr)
- **EDIT 12:** Lesson 2-16 "Introduction to Verbs" (3 theory items need titleFr + contentFr)
- **EDIT 13:** Lesson 2-17 "Past Tense" (2 theory items need titleFr + contentFr)
- **EDIT 14:** Lesson 2-18 "Present Tense" (2 theory items need titleFr + contentFr)
- **EDIT 15:** Lesson 2-19 "Common Verbs" (3 theory items need titleFr + contentFr)
- **EDIT 16:** Lesson 2-20 "Negation with Verbs" (3 theory items need titleFr + contentFr)
- **EDIT 17:** Lesson 2-21 "Nominal Sentences" (3 theory items need titleFr + contentFr)
- **EDIT 18:** Lesson 2-22 "Verbal Sentences" (3 theory items need titleFr + contentFr)
- **EDIT 19:** Lesson 2-23 "Asking Questions" (3 theory items need titleFr + contentFr)
- **EDIT 20:** Lesson 2-24 "Prepositions and Location" (3 theory items need titleFr + contentFr)
- **EDIT 21:** Lesson 2-25 "Expressing Time" (3 theory items need titleFr + contentFr)
- **EDIT 22:** Lesson 2-26 "Introducing Yourself" (3 theory items need titleFr + contentFr)
- **EDIT 23:** Lesson 2-27 "At the Restaurant" (3 theory items need titleFr + contentFr)
- **EDIT 24:** Lesson 2-28 "Shopping" (3 theory items need titleFr + contentFr)
- **EDIT 25:** Lesson 2-29 "Daily Routines" (2 theory items need titleFr + contentFr)

**All translations are available in:** `MASTER_TRANSLATIONS.json`  
**Reference the pattern in EDIT 2 and EDIT 3 above** for exact format.

---

# PHASE 3

## Summary: Lessons 3-22, 3-25, 3-26, 3-27, 3-28, 3-29

All 6 lessons are **MISSING contentAr** (Arabic description of lesson purpose).  
These lessons have `titleAr`, `titleFr`, and `contentFr`, but need `contentAr`.

**Pattern:** For each affected lesson, add `contentAr` field by translating `contentFr` to Arabic.

**Translations available in:** `MASTER_TRANSLATIONS.json`

**Application:** Follow the same edit pattern as shown in Phase 2.

---

# PHASE 4

## Summary: Lessons 4-2 through 4-24

All 23 lessons have **missing contentFr in theory sections**.  
Each lesson has 2-4 theory sub-items with Arabic content (`titleAr`, `contentAr`) but missing French translations.

**Pattern:** For each theory item in each lesson, add:
- `titleFr` (translated from `titleAr`)
- `contentFr` (translated from `contentAr`)

**Translations available in:** `MASTER_TRANSLATIONS.json`

**Application:** Follow the same edit pattern as PHASE 2 EDIT 2 and EDIT 3 above.

---

# PHASE 5

## Summary: Lessons 5-14 through 5-29

All 16 lessons have **BOTH missing titleAr and contentAr**.  
These lessons have `titleFr` and `contentFr` (description field), but need Arabic equivalents.

**Pattern:** For each affected lesson, add:
- `titleAr` (lesson title in Arabic)
- `contentAr` (description in Arabic, translated from `contentFr`)

**Translations available in:** `MASTER_TRANSLATIONS.json`

**Application:** Follow the same edit pattern as PHASE 2 EDIT 1 above.

---

## 📋 APPLICATION CHECKLIST

- [ ] **Phase 2, EDIT 1:** Lesson 2-3 Color Patterns (Arabic) - HIGH PRIORITY
- [ ] **Phase 2, EDIT 2:** Lesson 2-6 (French) - HIGH PRIORITY
- [ ] **Phase 2, EDIT 3:** Lesson 2-7 (French) - HIGH PRIORITY
- [ ] **Phase 2, EDITS 4-25:** Lessons 2-8 through 2-29 (French) - HIGH PRIORITY
- [ ] **Phase 3, EDITS 1-6:** Lessons 3-22, 3-25-29 (Arabic) - MEDIUM PRIORITY
- [ ] **Phase 4, EDITS 1-23:** Lessons 4-2 through 4-24 (French) - HIGH PRIORITY
- [ ] **Phase 5, EDITS 1-16:** Lessons 5-14 through 5-29 (Arabic) - MEDIUM PRIORITY

**Total Time Estimate:** 2-4 hours for all edits with the edit tool

---

## 🔍 WHERE TO FIND REMAINING TRANSLATIONS

All missing translations for:
- Phase 2 lessons 2-8 through 2-29
- Phase 3 lessons 3-22, 3-25-29
- Phase 4 lessons 4-2 through 4-24
- Phase 5 lessons 5-14 through 5-29

Are stored in: **`MASTER_TRANSLATIONS.json`**

Load this file to get exact `titleFr`, `contentFr`, `titleAr`, and `contentAr` values.

---

**Created:** 2024-03-23  
**Status:** ✅ Ready for Application  
**Format:** Compatible with edit tool (old_str / new_str)

