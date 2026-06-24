<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:blog-agent-rules -->
# MANDATORY BLOG POST RULES

Whenever creating or rewriting a blog post for YogaRetreatAdvisor, you MUST STRICTLY FOLLOW these rules:
1. **Template Enforcement:** Every single blog post MUST be built using the `<BlogPost />` wrapper component (`import BlogPost from '@/components/BlogPost'`). Do not use raw HTML layouts or manually import the Navbar/Footer. Use `references/blog-post-template.js` as the starting point.
2. **Immediate Audience Answer:** The very first element in the content body MUST be the `<p className={s.introBrief}>` tag. Inside this tag, you MUST directly and concisely answer the primary search intent/keyword to optimize for the featured snippet. No fluff, just the answer.
<!-- END:blog-agent-rules -->
