const fs = require('fs');

function analyzePhase(filePath, phaseName) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove export statement and convert to object
    content = content.replace(/export const \w+ = /, '');
    content = content.replace(/;$/, '');
    
    // Attempt to parse by loading the file differently
    const moduleContent = content + '\nmodule.exports = phase;';
    
    // Create a temporary module
    const tmpFile = `/tmp/phase_${phaseName}.js`;
    fs.writeFileSync(tmpFile, moduleContent.replace('const phase = ', 'const phase = '));
    
    const phase = require(tmpFile);
    fs.unlinkSync(tmpFile);
    
    console.log(`\n📊 ${phaseName}:`);
    
    const gaps = [];
    
    // Check theory items
    if (phase.theory && Array.isArray(phase.theory)) {
      phase.theory.forEach((item, idx) => {
        const hasArTitle = item.titleAr && item.titleAr.trim() !== '';
        const hasArContent = item.contentAr && item.contentAr.trim() !== '';
        const hasFrTitle = item.titleFr && item.titleFr.trim() !== '';
        const hasFrContent = item.contentFr && item.contentFr.trim() !== '';
        
        if ((hasArTitle || hasArContent) && (!hasFrTitle || !hasFrContent)) {
          const missing = [];
          const exists = [];
          if (!hasFrTitle) missing.push('titleFr');
          if (!hasFrContent) missing.push('contentFr');
          if (hasArTitle) exists.push('titleAr');
          if (hasArContent) exists.push('contentAr');
          
          gaps.push({
            type: 'theory',
            name: item.titleAr || item.titleFr || 'Unknown',
            missing: missing.join(', '),
            exists: exists.join(', ')
          });
        } else if ((hasFrTitle || hasFrContent) && (!hasArTitle || !hasArContent)) {
          const missing = [];
          const exists = [];
          if (!hasArTitle) missing.push('titleAr');
          if (!hasArContent) missing.push('contentAr');
          if (hasFrTitle) exists.push('titleFr');
          if (hasFrContent) exists.push('contentFr');
          
          gaps.push({
            type: 'theory',
            name: item.titleFr || item.titleAr || 'Unknown',
            missing: missing.join(', '),
            exists: exists.join(', ')
          });
        }
      });
    }
    
    // Check lessons
    if (phase.lessons && Array.isArray(phase.lessons)) {
      phase.lessons.forEach((lesson) => {
        const hasArTitle = lesson.titleAr && lesson.titleAr.trim() !== '';
        const hasArContent = lesson.contentAr && lesson.contentAr.trim() !== '';
        const hasFrTitle = lesson.titleFr && lesson.titleFr.trim() !== '';
        const hasFrContent = lesson.contentFr && lesson.contentFr.trim() !== '';
        
        if ((hasArTitle || hasArContent) && (!hasFrTitle || !hasFrContent)) {
          const missing = [];
          const exists = [];
          if (!hasFrTitle) missing.push('titleFr');
          if (!hasFrContent) missing.push('contentFr');
          if (hasArTitle) exists.push('titleAr');
          if (hasArContent) exists.push('contentAr');
          
          gaps.push({
            type: 'lesson',
            name: lesson.titleAr || lesson.titleFr || 'Unknown',
            missing: missing.join(', '),
            exists: exists.join(', ')
          });
        } else if ((hasFrTitle || hasFrContent) && (!hasArTitle || !hasArContent)) {
          const missing = [];
          const exists = [];
          if (!hasArTitle) missing.push('titleAr');
          if (!hasArContent) missing.push('contentAr');
          if (hasFrTitle) exists.push('titleFr');
          if (hasFrContent) exists.push('contentFr');
          
          gaps.push({
            type: 'lesson',
            name: lesson.titleFr || lesson.titleAr || 'Unknown',
            missing: missing.join(', '),
            exists: exists.join(', ')
          });
        }
        
        // Check lesson sections
        if (lesson.sections && Array.isArray(lesson.sections)) {
          lesson.sections.forEach((section) => {
            const hasArTitle = section.titleAr && section.titleAr.trim() !== '';
            const hasArContent = section.contentAr && section.contentAr.trim() !== '';
            const hasFrTitle = section.titleFr && section.titleFr.trim() !== '';
            const hasFrContent = section.contentFr && section.contentFr.trim() !== '';
            
            if ((hasArTitle || hasArContent) && (!hasFrTitle || !hasFrContent)) {
              const missing = [];
              const exists = [];
              if (!hasFrTitle) missing.push('titleFr');
              if (!hasFrContent) missing.push('contentFr');
              if (hasArTitle) exists.push('titleAr');
              if (hasArContent) exists.push('contentAr');
              
              gaps.push({
                type: 'section',
                name: section.titleAr || section.titleFr || 'Unknown',
                missing: missing.join(', '),
                exists: exists.join(', ')
              });
            } else if ((hasFrTitle || hasFrContent) && (!hasArTitle || !hasArContent)) {
              const missing = [];
              const exists = [];
              if (!hasArTitle) missing.push('titleAr');
              if (!hasArContent) missing.push('contentAr');
              if (hasFrTitle) exists.push('titleFr');
              if (hasFrContent) exists.push('contentFr');
              
              gaps.push({
                type: 'section',
                name: section.titleFr || section.titleAr || 'Unknown',
                missing: missing.join(', '),
                exists: exists.join(', ')
              });
            }
          });
        }
      });
    }
    
    console.log(`  Total gaps: ${gaps.length}`);
    gaps.forEach((gap, idx) => {
      console.log(`  Gap ${idx + 1}: [${gap.type.toUpperCase()}] ${gap.name.substring(0, 60)}`);
      console.log(`    Missing: ${gap.missing}`);
      console.log(`    Exists: ${gap.exists}`);
    });
    
  } catch (e) {
    console.log(`❌ Error parsing ${phaseName}: ${e.message}`);
  }
}

const phases = [
  ['./data/phases/phase1.ts', 'Phase 1'],
  ['./data/phases/phase2.ts', 'Phase 2'],
  ['./data/phases/phase3.ts', 'Phase 3'],
  ['./data/phases/phase4.ts', 'Phase 4'],
  ['./data/phases/phase5.ts', 'Phase 5']
];

phases.forEach(([file, name]) => analyzePhase(file, name));
