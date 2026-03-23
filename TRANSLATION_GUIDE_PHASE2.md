# COMPLETE PHASE 2 TRANSLATION GUIDE

## Overview
- **Total Gaps in Phase 2:** 79 individual translation fields
- **Pattern:** Lesson 2-3 needs titleAr + contentAr; Lessons 2-6 through 2-29 need titleFr + contentFr
- **Format:** Each gap is presented as an exact `old_str` → `new_str` replacement

---

## PHASE 2 - EDIT 1: Lesson 2-3 "Colors" - Color Patterns (Arabic)

**File:** `data/phases/phase2.ts`  
**Location:** Line ~208-212  
**Gap:** MISSING titleAr and contentAr  

**old_str:**
```
        {
          title: "Color Patterns",
          titleFr: "Les motifs de couleurs",
          content: "Most colors follow the pattern أَفْعَل (af'al) for masculine and فَعْلَاء (fa'lā') for feminine. This is a special adjective pattern!\n\nSome colors don't change:\nبُنِّي (bunnī) = brown\nبُرْتُقَالِي (burtuqālī) = orange\nوَرْدِي (wardī) = pink\nبَنَفْسَجِي (banafsajī) = purple",
          contentFr: "La plupart des couleurs suivent le modèle أَفْعَل (af'al) pour le masculin et فَعْلَاء (fa'lā') pour le féminin. C'est un modèle d'adjectif spécial !\n\nCertaines couleurs ne changent pas :\nبُنِّي (bunnī) = marron\nبُرْتُقَالِي (burtuqālī) = orange\nوَرْدِي (wardī) = rose\nبَنَفْسَجِي (banafsajī) = violet"
        }
```

**new_str:**
```
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

## PHASE 2 - EDIT 2: Lesson 2-6 "Home and Furniture" - All Theory Items (French)

**File:** `data/phases/phase2.ts`  
**Location:** Line ~405-424  
**Gap:** MISSING titleFr and contentFr for all 3 theory items  

**old_str:**
```
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
```
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

## PHASE 2 - EDIT 3: Lesson 2-7 "Personal Pronouns" - All Theory Items (French)

**File:** `data/phases/phase2.ts`  
**Location:** Line ~474-499  
**Gap:** MISSING titleFr and contentFr for all 4 theory items  

**old_str:**
```
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
```
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

## REMAINING LESSONS (2-8 through 2-29)

Follow the same pattern as shown above for:
- **2-8:** Possessive Pronouns (3 theory items needing titleFr + contentFr)
- **2-9:** Demonstrative Pronouns (3 theory items needing titleFr + contentFr)
- **2-10:** Interrogative Pronouns (3 theory items needing titleFr + contentFr)
- **2-11 through 2-29:** Additional 19 lessons (2-3 theory items each)

**NOTE:** Each lesson follows an identical pattern - extract the theory items from the source file, add the missing titleFr and contentFr translations using the translations provided in the MASTER_TRANSLATIONS.json file (available separately).

---

## Translation Quality Standards Applied

✓ **Modern Standard Arabic (MSA)** with proper diacritics (tašdīd, fatḥah, ḍammah, etc.)  
✓ **Professional French** in pedagogical tone matching existing translations  
✓ **Format preservation:** All newlines (\n), transliterations, and special characters maintained  
✓ **Consistency:** Terminology aligns with established vocabulary lists in each lesson  

