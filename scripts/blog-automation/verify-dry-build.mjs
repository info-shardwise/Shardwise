import fs from 'node:fs/promises'
import assert from 'node:assert/strict'

const review = JSON.parse(await fs.readFile('artifacts/blog-dry-run/review.json', 'utf8'))
const meta = review.metadata
const html = await fs.readFile(`out/blogs/${meta.slug}/index.html`, 'utf8')
const schemas = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(match => JSON.parse(match[1]))
const article = schemas.flatMap(schema => schema['@graph'] || [schema]).find(schema => ['Article', 'BlogPosting'].includes(schema['@type']))
assert.ok(article, 'Article schema missing')
assert.equal(article.image, meta.image, 'Remote image must remain absolute')
assert.equal(article.datePublished, meta.date)
assert.ok(html.includes(`https://shardwise.pages.dev/blogs/${meta.slug}/`))
assert.ok(html.includes('Photo by') && html.includes(meta.imageCredit.photographerUrl.replaceAll('&', '&amp;')))
assert.ok(html.includes(meta.image.replaceAll('&', '&amp;')), 'Article hero image missing')
assert.ok((await fs.readFile('out/sitemap.xml', 'utf8')).includes(`/blogs/${meta.slug}`))
assert.ok((await fs.readFile('out/blogs/index.html', 'utf8')).includes(meta.slug))
console.log('PASS: draft builds with canonical, schema, remote image, credit, sitemap and listing')
