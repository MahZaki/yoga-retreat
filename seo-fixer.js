const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, 'app', 'blog');
const dirs = fs.readdirSync(blogDir).filter(d => fs.statSync(path.join(blogDir, d)).isDirectory());

let updatedCount = 0;

for (const dir of dirs) {
  const filePath = path.join(blogDir, dir, 'page.js');
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // 1. Canonical URL
  if (!content.includes('alternates: { canonical:')) {
    content = content.replace(
      /(export const metadata = \{[\s\S]*?)(openGraph: \{)/,
      `$1alternates: { canonical: 'https://yogaretreatadvisor.com/blog/${dir}' },\n  $2`
    );
    changed = true;
  }

  // 2. Breadcrumb Schema
  if (!content.includes('BreadcrumbList')) {
    const breadcrumbSchema = `
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://yogaretreatadvisor.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://yogaretreatadvisor.com/blog' },
    { '@type': 'ListItem', position: 3, name: '${dir.replace(/-/g, ' ')}', item: 'https://yogaretreatadvisor.com/blog/${dir}' }
  ]
};
`;
    // Insert before export default function
    content = content.replace(/(export default (?:async )?function)/, breadcrumbSchema + '\n$1');
    
    // Inject the script tag
    content = content.replace(
      /(<script type="application\/ld\+json" dangerouslySetInnerHTML=\{\{ __html: JSON\.stringify\(articleSchema\) \}\} \/>)/,
      `$1\n      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />`
    );
    changed = true;
  }

  // 3. Last Updated Date
  if (!content.includes('Last updated:')) {
    content = content.replace(
      /(<div className=\{s\.meta\}>\s*<span>.*?<\/span><span>·<\/span>\s*<span>(.*?)<\/span>)(<span>·<\/span>)/,
      `$1<span>·</span><span>Last updated: $2</span>$3`
    );
    changed = true;
  }

  // 4. Breadcrumbs UI (above h1)
  if (!content.includes('class="breadcrumb"') && !content.includes('className={s.breadcrumb}')) {
    // We'll just add a simple breadcrumb div above the tag
    content = content.replace(
      /(<span className=\{s\.tag\}>.*?<\/span>)/,
      `<div className={s.breadcrumbs} style={{ fontSize: '0.85rem', marginBottom: '1rem', color: 'rgba(255,255,255,0.8)' }}>\n                <Link href="/" style={{textDecoration:'underline'}}>Home</Link> &gt; <Link href="/blog" style={{textDecoration:'underline'}}>Blog</Link> &gt; <span>Article</span>\n              </div>\n              $1`
    );
    changed = true;
  }

  // 5. Back to top button
  if (!content.includes('Back to top')) {
    // Add id="top" to the article tag
    if (!content.includes('id="top"')) {
      content = content.replace(/<article className=\{s\.article\}>/, '<article id="top" className={s.article}>');
    }
    
    // Add back to top link before </article>
    content = content.replace(
      /(<Newsletter \/>\s*)<\/article>/,
      `$1<div className="container" style={{ textAlign: 'center', padding: '2rem 0' }}>\n          <a href="#top" style={{ fontWeight: 'bold', textDecoration: 'underline' }}>↑ Back to top</a>\n        </div>\n      </article>`
    );
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    updatedCount++;
    console.log(`Updated ${dir}`);
  }
}

console.log(`Successfully updated ${updatedCount} files.`);
