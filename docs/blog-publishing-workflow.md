# Shardwise blog publishing workflow

Prepared: 11 October 2026. This guide describes the current repository implementation.

Project folder: `D:\viren\project X\codebase`  
Repository: `https://github.com/info-shardwise/Shardwise.git`  
Production website: `https://shardwise.pages.dev/`

## 1. The complete journey

Keyword and competitor research → article outline → MDX file → editorial and SEO review → incoming service links → local preview → production build → commit and push to `main` → Cloudflare Pages build/deployment → live verification → Search Console monitoring.

Creating an MDX file alone does not change the live website. This is a static-export site: the content must be built and deployed. GitHub stores the source; Cloudflare serves the deployed output.

## 2. Choose the topic before writing

1. Choose a question relevant to one of Shardwise's actual services and the intended audience.
2. Research the primary keyword and related questions. Record the tool, date, country and any available volume/difficulty figures.
3. Review competing search results: intent, depth, freshness, established publishers and what your article can usefully add.
4. Select one primary topic, then supporting terms that naturally belong in the answer.
5. Save a research brief in `docs/`, including source links and the limitations of the evidence.

If keyword metrics are unavailable, label the choice provisional. Smaller competitors do not prove easy rankings, and publication does not guarantee traffic. Internal links are links within Shardwise; external backlinks come from other websites and cannot be created simply by linking your own pages.

Example research brief: [Website maintenance keyword research](blog-keyword-research-website-maintenance.md).

## 3. Create the MDX file

All blog files belong in:

```text
codebase/content/blog/
```

For example:

```text
content/blog/your-article-slug.mdx
```

Use lowercase words separated by hyphens. **The filename without `.mdx` must match the front matter `slug`.** The listing reads the slug from front matter, but the article loader opens a file named after the requested slug. A mismatch can produce a listed article that returns 404.

Its public URL will be:

```text
https://shardwise.pages.dev/blogs/your-article-slug/
```

### Copyable starter file

```mdx
---
title: 'Your Article Title'
description: 'A concise, accurate summary that explains what the reader will learn.'
slug: 'your-article-slug'
image: '/images/blog/covers/your-article-slug.webp'
imageAlt: 'Describe the image accurately'
date: '2026-10-11'
author:
  name: 'Shardwise Engineering'
  role: 'Website Development and Maintenance Team'
tags: ['Website Maintenance', 'Small Business']
featured: false
published: false
---

Start with a direct answer to the reader's main question. Explain who the
guide is for and what they can do after reading it.

## First main section

Explain the first step with practical details and examples.

### A supporting step

- Give a concrete action.
- Explain how to check the result.
- Mention relevant limitations.

<Callout type="tip">Keep a record of the result so the next person can repeat the check.</Callout>

## When professional help is useful

Explain the circumstances where our
[website maintenance service](/services/website-maintenance/) is relevant.

## Frequently asked questions

### A question your audience actually asks?

Answer it directly without repeating the whole article.

## Your next step

[Discuss your project with Shardwise](/contact/).
```

Replace every example with topic-specific content. Set the real publication date and change `published` to `true` only when ready for publication.

### What each front matter field does

Front matter is the YAML block between the first two `---` lines. It is data for the site, not visible article body text.

| Field         | Purpose and current behavior                                                                                                                                                                                                              |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`       | Visible article H1 and blog card title. The article page produces the browser/SEO title as `Your Article Title \| Shardwise`. Do not add the suffix yourself.                                                                             |
| `description` | Meta description, visible article introduction summary, card summary and social description. Write an accurate summary, not a list of keywords.                                                                                           |
| `slug`        | URL identifier. Must be unique and match the filename. Avoid changing it after publication without planning redirects.                                                                                                                    |
| `date`        | Publication date, visible date and structured-data publication date. Use a valid quoted `YYYY-MM-DD` value. Articles are sorted newest first. Future dates do not schedule publication automatically.                                     |
| `author.name` | Visible author and structured-data author. Names beginning with `Shardwise` are represented as an Organization; other names as a Person. Attribute content accurately.                                                                    |
| `author.role` | Visible role beneath the author name.                                                                                                                                                                                                     |
| `tags`        | Array of topic labels shown in the article and used by the blog hub. Keep them relevant and consistent.                                                                                                                                   |
| `featured`    | Makes the post eligible for the featured presentation in the blog hub. It does not guarantee ranking or pin every eligible post permanently.                                                                                              |
| `published`   | Explicitly `false` excludes the article from the generated listing and static article routes. Omission defaults to published, so always write the field. This is editorial draft control, not access protection for confidential content. |

Reading time is calculated automatically from the body at about 200 words per minute. Do not add a manual `readingTime` field. `author.avatar` exists in the data type but the current article header uses a generic icon, so adding it does not change the visible avatar.

Use `image` for the local cover path and `imageAlt` for its descriptive alternative text. The featured card and listing use this image; the article metadata also uses it for Open Graph, Twitter and BlogPosting. Choose a different relevant cover for each article. Put the file in `public/images/blog/covers/`, use its `/images/blog/covers/...` URL and check it exists before building.

There are currently no separate front matter fields for `metaTitle`, `metaDescription`, `canonical`, `ogImage` or scheduled publication. Adding unsupported fields does not implement those features.

### What belongs in each body section

- **Opening answer:** explain the topic promptly, including who the guidance applies to.
- **Main H2 sections:** organize the complete answer into useful stages or decisions.
- **H3 subsections:** expand one part of its parent H2. Keep the hierarchy logical.
- **Examples, lists and evidence:** give actionable detail, cite primary sources for factual claims and distinguish recommendations from requirements.
- **Service links:** connect the explanation to relevant services without forcing unrelated links.
- **FAQs:** answer genuine follow-up questions. Visible FAQs are not automatically FAQ structured data and do not guarantee rich results.
- **Closing action:** offer a relevant service or contact link after delivering the answer.

The page template supplies the H1. Start body headings at `##`. Existing body `#` headings are remapped to H2 by the MDX components, but new articles should use the correct hierarchy directly.

### Supported formatting

Normal paragraphs, `**bold**`, numbered/bulleted lists, links, blockquotes and fenced code blocks work. Keep blank lines between blocks.

```mdx
[Relevant service](/services/technical-onpage-seo/)

[Primary source](https://developers.google.com/search/docs/appearance/page-experience)

> A short editorial note.

<Callout type="info">Context for the reader.</Callout>
<Callout type="tip">A practical suggestion.</Callout>
<Callout type="warning">A specific limitation.</Callout>
```

Internal links use Next.js navigation. External links open in a new tab with `noopener noreferrer` through the shared MDX component.

**Tables:** the current MDX renderer does not configure GitHub-flavored Markdown tables. Use JSX/HTML table markup instead of pipe tables:

```mdx
<table>
  <thead>
    <tr>
      <th scope="col">Task</th>
      <th scope="col">Evidence</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Test the form</td>
      <td>Confirmation and inbox receipt</td>
    </tr>
  </tbody>
</table>
```

The existing article stylesheet supports table borders and horizontal overflow. Check the result on a narrow screen.

**Images:** put an authorized image in `public/images/blog/`, then reference it as `![Descriptive alternative text](/images/blog/example.webp)`. Compress the image and preview it on mobile. Set the front matter `image` separately for the thumbnail and social preview; body images are not selected automatically.

MDX also parses JSX. Close tags, use `className` instead of `class`, and put literal code containing braces or angle brackets inside code fences/backticks. Only use components registered in the MDX renderer; an arbitrary custom component name will fail unless implemented first.

## 4. Understand what the code does automatically

| File                                       | Responsibility                                                                                                                                     |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `lib/mdx.ts`                               | Reads `content/blog/*.mdx`, parses front matter, filters published posts, sorts dates and calculates reading time. Loads the article file by slug. |
| `app/blogs/page.tsx`                       | Displays the blog hub using the published posts.                                                                                                   |
| `app/blogs/[slug]/page.tsx`                | Generates static article routes, SEO metadata, article layout, author/date display and related articles.                                           |
| `components/blog/MDXComponents.tsx`        | Renders links, heading mapping and callouts.                                                                                                       |
| `components/blog/ArticleLayout.module.css` | Styles article text, tables, callouts, header and related cards.                                                                                   |
| `components/seo/JsonLd.tsx`                | Produces BlogPosting and breadcrumb JSON-LD.                                                                                                       |
| `app/sitemap.ts`                           | Adds published posts to the XML sitemap at build time.                                                                                             |
| `next.config.ts`                           | Enables static export into `out/` and trailing-slash page routes.                                                                                  |

For an ordinary new article you do not need to create a new page component, register the slug manually or hand-edit the sitemap.

The article template automatically supplies the title, description, self-referencing canonical, article Open Graph metadata, Twitter summary metadata, BlogPosting and breadcrumbs. Related articles currently come from the other published posts, rather than a topic similarity calculation.

## 5. Add incoming and outgoing internal links

The article should link to relevant existing services. Add contextual links **from** suitable service pages **to** the article too, so it is discoverable beyond the blog hub.

Example for a TSX service component:

```tsx
<p>
  Planning ongoing care? Read our{' '}
  <Link href="/blogs/your-article-slug/">website maintenance guide</Link> before choosing your
  coverage.
</p>
```

Use the service's existing layout and link styles. Import `Link` from `next/link` if it is not already imported. Do not add the same keyword link indiscriminately to every page.

The maintenance article uses incoming links in:

- `components/services/ServicesContent.tsx`
- `components/services/WebsiteMaintenanceContent.tsx`
- `components/services/WordPressContent.tsx`

Other services may use different components. Inspect `app/services/[slug]/page.tsx` to identify which component actually renders the target service before editing it.

## 6. Preview and build locally

Open PowerShell in the repository:

```powershell
Set-Location -LiteralPath 'D:\viren\project X\codebase'
git status --short
```

Install dependencies with `npm ci` if they are missing or the lockfile changed. Preview:

```powershell
npm run dev
```

Open `http://localhost:3000/blogs/your-article-slug/`, then check the blog listing, links and mobile layout. Stop the server with Ctrl+C when finished. Local preview is not a production deployment.

Before the final production build, set the production URL explicitly:

```powershell
$env:NEXT_PUBLIC_SITE_URL = 'https://shardwise.pages.dev'
npm run build
```

**Why this matters:** a local `.env.local` can contain `http://localhost:3000`. Without the production override, a manually uploaded build can publish localhost canonicals, social URLs and sitemap URLs. Setting this variable in PowerShell applies to commands in that shell; it does not modify Cloudflare settings.

The build must finish successfully. Its route summary should include the new slug. Inspect:

```text
out/blogs/your-article-slug/index.html
out/sitemap.xml
```

Check the rendered HTML for the correct title, description, exactly one H1, live-domain canonical, BlogPosting/breadcrumb data and readable tables. Check the incoming links on their built service pages. If you change content after building, rebuild before uploading `out/`.

For code changes to the renderer or service components, run the relevant ESLint/type checks too. GitHub also runs lint, TypeScript, contact endpoint tests and the static build. A document-only edit does not require a whole-site build.

## 7. Commit and push the source

When the article is ready, set `published: true`, preview again and perform the final build. Stage only the article and files intentionally changed for it:

```powershell
git diff --check
git add -- content/blog/your-article-slug.mdx
# Add each research document or edited service component explicitly as needed.
git diff --cached --stat
git diff --cached
git commit -m "Publish article about your topic"
git push origin main
```

The repository's commit hook formats/lints supported staged files. MDX is not covered by the current lint-staged patterns; the production build checks that it compiles. Never stage credentials, OAuth JSON, local environment files, Gmail tokens or unrelated edits. Do not use `git add .` without reviewing the full working tree.

## 8. How it reaches Cloudflare Pages

### Normal route: Git integration

Cloudflare Pages is connected to `info-shardwise/Shardwise`, with `main` as the production branch. Pushing to `main` triggers Cloudflare's own deployment:

1. Cloudflare fetches the committed source.
2. It installs dependencies and runs `npm run build`.
3. Next.js generates static output in `out/`.
4. Cloudflare uploads that output and the Pages Functions.
5. A successful production deployment updates `https://shardwise.pages.dev/`.

Project settings should use the repository root as the root directory, `npm run build` as the build command, `out` as output directory and production `NEXT_PUBLIC_SITE_URL=https://shardwise.pages.dev`.

The GitHub Actions file `.github/workflows/deploy.yml` validates and builds the source. **It does not upload to Cloudflare.** Cloudflare Git integration runs independently, so a green GitHub workflow alone is not proof that the new production deployment succeeded or that Cloudflare waited for those checks.

Check Cloudflare → Workers & Pages → `shardwise` → Deployments. Confirm the new deployment is Production, succeeded and corresponds to the intended commit.

### Alternative: deploy a verified local build with Wrangler

Use this when a direct deployment is needed. Commit/push the source as well so the next Git deployment preserves the change.

```powershell
$env:NEXT_PUBLIC_SITE_URL = 'https://shardwise.pages.dev'
npm run build
# Continue only after a successful build and output checks.
npx --yes wrangler pages deploy out --project-name shardwise --branch main
```

Wrangler must be logged into the correct Cloudflare account. If it is not, run `npx --yes wrangler login` and complete the account authorization. OAuth login can support this route; manually creating an API token is not inherently required.

A deployment-specific `*.shardwise.pages.dev` URL is useful for checking the deployed output. Also verify the public production hostname; upload success alone is not the complete publishing check. Avoid deploying unrelated uncommitted work. Never publish `.env.local` or credential files as site assets.

## 9. Verify the live publication

Check the production article in a browser, including a narrow viewport:

- Correct content, heading hierarchy, author/date and readable tables.
- Service links and contact CTA work.
- Blog listing and incoming service links include the article.
- Page source contains the live-domain canonical, title, description and structured data.
- `https://shardwise.pages.dev/sitemap.xml` contains the article.

Basic HTTP and canonical checks in PowerShell:

```powershell
$articleUrl = 'https://shardwise.pages.dev/blogs/your-article-slug/'
$articleResponse = Invoke-WebRequest -Uri $articleUrl -UseBasicParsing
$articleResponse.StatusCode
$articleResponse.Content.Contains('rel="canonical" href="' + $articleUrl + '"')
```

Expected: HTTP `200` and canonical check `True`. HTTP 200 proves availability, not Google indexing or rankings. Confirm the actual content rather than relying on status alone.

## 10. After publication

Use Google Search Console URL Inspection for the live URL. Request indexing if appropriate and check sitemap discovery. Monitor impressions, queries, clicks and position once sufficient data exists. Compare results with the original research brief and update content when evidence or product details change.

Submitting a URL does not guarantee indexing. Metadata, links and structured data help describe and discover the article; they do not guarantee rankings, rich results or AI citations.

## 11. Common problems and recovery

| Problem                        | What to inspect                                                                                                                                  |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Article absent from listing    | Correct `content/blog/` folder, `.mdx` extension, explicit `published: true`, completed rebuild and correct deployed commit.                     |
| Listed article returns 404     | Filename/slug mismatch, missing static route or failed deployment.                                                                               |
| Changes visible locally only   | Source was not pushed, Cloudflare failed, wrong project/branch was deployed or old output was uploaded. Check deployment logs and commit.        |
| Canonical points to localhost  | Rebuild with the production `NEXT_PUBLIC_SITE_URL` and deploy the corrected output.                                                              |
| Table appears as pipe text     | Replace pipe-table syntax with JSX/HTML table markup.                                                                                            |
| Build fails on MDX             | Check YAML quoting, valid date, closed JSX tags, unknown components and unescaped code syntax.                                                   |
| Wrong or repeated title suffix | Front matter should contain only the article title; the template adds `\| Shardwise`.                                                            |
| Old content remains            | Check the production deployment first, then test a fresh browser session. Do not assume cache is the cause before verifying the deployed commit. |

To undo a published article change, revert the relevant commit and push the revert so Git and production stay aligned. A Cloudflare deployment rollback can restore a previous deployment immediately, but the source must also be corrected or the next push can restore the unwanted change. Removing an indexed article or changing its slug needs a deliberate redirect/removal plan.

## Final publishing checklist

- [ ] Keyword intent and competitor review recorded; unknown metrics labelled.
- [ ] Filename matches slug; front matter is complete and publication flag is intentional.
- [ ] Accurate original content, primary sources and logical headings.
- [ ] Relevant outgoing and incoming internal links.
- [ ] Desktop/mobile preview checked.
- [ ] Production URL set; final static build passed.
- [ ] Rendered metadata, canonical, schema, links and sitemap checked.
- [ ] Only intended source files committed and pushed.
- [ ] Cloudflare production deployment succeeded for the intended version.
- [ ] Live article and linking pages verified.
- [ ] Search Console follow-up planned.
