import fs from 'node:fs'
import assert from 'node:assert/strict'
const sections = JSON.parse(fs.readFileSync('components/home/homepage-seo.json', 'utf8'))
const html = fs.readFileSync('out/index.html', 'utf8')
const text = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&#x27;|&#39;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, ' ')
assert.equal(sections.length, 12)
assert.equal((html.match(/<h1\b/g) || []).length, 1)
for (const block of sections.flat()) {
  const expected = block.text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*/g, '').replace(/^- /gm, '').replace(/\s+/g, ' ')
  if (block.type === 'list') {
    for (const line of block.text.split('\n')) {
      const item = line.replace(/^- /, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*/g, '').replace(/\s+/g, ' ')
      assert.ok(text.includes(item), `Missing list copy: ${item}`)
    }
  } else assert.ok(text.includes(expected), `Missing copy: ${expected}`)
}
assert.ok(!text.includes('Editorial instruction:'))
assert.ok(!text.includes('99.4%'))
assert.ok(html.includes('<title>Web &amp; App Development for UK &amp; US Businesses | Shardwise</title>'))
console.log('Verified all 12 document sections against exported HTML, one H1, exact title and removal of editorial notes/counters.')
