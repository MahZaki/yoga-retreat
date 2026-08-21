const fs = require('fs');
const path = require('path');

const files = [
  'how-to-book-yoga-retreat',
  'yoga-retreats-greece',
  'all-inclusive-yoga-retreat',
  'yoga-retreats-hawaii',
  'yoga-retreat-california',
  'silent-yoga-retreat',
  'yoga-retreats-near-me',
  'luxury-yoga-retreats',
  'wellness-retreats',
  'affordable-yoga-retreats',
  'best-womens-yoga-retreats',
  'yoga-retreats-india',
  'yoga-retreats',
  'yoga-retreats-costa-rica',
  'yoga-retreats-colorado',
  'yoga-retreat-for-beginners',
  'womens-yoga-retreat',
  'yoga-retreat-cost'
];

for (const folder of files) {
  const filePath = path.join(__dirname, 'app/blog', folder, 'page.js');
  if (!fs.existsSync(filePath)) continue;

  let code = fs.readFileSync(filePath, 'utf-8');
  if (code.includes('import BlogPost')) {
    console.log(`Skipping ${folder}, already has BlogPost`);
    continue;
  }

  // Extract necessary parts
  let category = "Destinations";
  let date = "June 2026";
  let readTime = "10 min read";
  
  const catMatch = code.match(/className=\{s\.(heroCat|category)\}>\s*(.*?)\s*</);
  if (catMatch) category = catMatch[2];

  const dateMatch = code.match(/<span>(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},\s+\d{4}<\/span>/) || code.match(/<span className=\{s\.date\}>(.*?)<\/span>/);
  if (dateMatch) date = dateMatch[1].replace('Updated ', '');

  const rtMatch = code.match(/<span>(\d+\s+min\s+read)<\/span>/) || code.match(/<span className=\{s\.readTime\}>(.*?)<\/span>/);
  if (rtMatch) readTime = rtMatch[1];
  
  let contentStartMatch = code.match(/className=\{s\.(body|content|mainContent)\}>/);
  if (!contentStartMatch) {
    console.log(`Could not find content start in ${folder}`);
    continue;
  }
  let contentStartIndex = contentStartMatch.index + contentStartMatch[0].length;
  
  const endMarkers = [
    '{/* Tags */}',
    '{/* Author',
    'className={s.tags}',
    'className={s.authorBox}',
    '{/* Sidebar',
    '<aside'
  ];
  
  let possibleEnds = endMarkers
    .map(marker => code.indexOf(marker))
    .filter(index => index > contentStartIndex);
    
  if (possibleEnds.length === 0) {
    console.log(`Could not find content end in ${folder}`);
    continue;
  }
  
  let contentEndIndex = Math.min(...possibleEnds);
  
  let content = code.substring(contentStartIndex, contentEndIndex).trim();
  
  // Cleanup stray closing divs from previous parsing
  let openDivs = (content.match(/<div/g) || []).length;
  let closeDivs = (content.match(/<\/div>/g) || []).length;
  if (closeDivs > openDivs) {
    // try to strip trailing </div>
    content = content.replace(/(<\/div>\s*)+$/, '').trim();
  }
  
  let articleSchema = 'schema';
  if (code.includes('const articleSchema')) articleSchema = 'articleSchema';
  if (code.includes('const jsonLd')) articleSchema = 'jsonLd';
  if (!code.match(new RegExp(`const ${articleSchema}`))) articleSchema = 'null';

  let faqSchema = 'faqSchema';
  if (code.includes('const faqLd')) faqSchema = 'faqLd';
  if (!code.match(new RegExp(`const ${faqSchema}`))) faqSchema = 'null';

  const compMatch = code.match(/export default function\s+([A-Za-z0-9_]+)\s*\(\)/);
  if (!compMatch) {
    console.log(`Could not find component name in ${folder}`);
    continue;
  }
  const componentName = compMatch[1];

  let aboveExport = code.substring(0, compMatch.index);
  
  let newAbove = aboveExport
    .replace(/import Navbar from '.*?'\n/g, '')
    .replace(/import Footer from '.*?'\n/g, '')
    .replace(/import Newsletter from '.*?'\n/g, '')
    .replace(/import s from '.*?'\n/g, '');
    
  if (!newAbove.includes('import BlogPost')) {
    newAbove = newAbove.trim() + `\n\nimport BlogPost from '@/components/BlogPost'\nimport s from '@/app/blog/yoga-retreats/page.module.css'\n\n`;
  }
  
  const newComponent = `export default function ${componentName}() {
  return (
    <BlogPost
      title={metadata.title}
      category="${category}"
      date="${date}"
      readTime="${readTime}"
      heroImage={metadata.openGraph?.images?.[0]?.url || ''}
      heroAlt={metadata.openGraph?.images?.[0]?.alt || ''}
      canonicalUrl={metadata.alternates?.canonical || ''}
      tocItems={[]}
      tags={[]}
      relatedPosts={[]}
      faqSchema={${faqSchema !== 'null' ? faqSchema : 'null'}}
      articleSchema={${articleSchema !== 'null' ? articleSchema : 'null'}}
    >
      ${content}
    </BlogPost>
  )
}
`;

  const newCode = newAbove.trim() + '\n\n' + newComponent;
  fs.writeFileSync(filePath, newCode);
  console.log(`Migrated ${folder}`);
}
