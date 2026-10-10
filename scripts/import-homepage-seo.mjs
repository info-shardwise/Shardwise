import fs from 'node:fs'
const source = fs.readFileSync('../all .md files/seo-uk-us/03-homepage-seo-content.md', 'utf8')
const sections = source.split(/^## \d+\. .+$/m).slice(1).map((part) => part.trim().split(/\n\s*\n/).filter((block) => !block.startsWith('Editorial instruction:') && !block.startsWith('Footer ')).map((text) => {
  if (text.startsWith('Eyebrow: ')) return { type: 'eyebrow', text: text.slice(9) }
  if (text.startsWith('Media caption: ')) return { type: 'caption', text: text.slice(15) }
  if (text.startsWith('# ')) return { type: 'h1', text: text.slice(2) }
  if (text.startsWith('## ')) return { type: 'h2', text: text.slice(3) }
  if (text.startsWith('### ')) return { type: 'h3', text: text.slice(4) }
  if (text.startsWith('- ')) return { type: 'list', text }
  if (text.startsWith('Primary button: ') || text.startsWith('Secondary button: ')) return { type: 'button', text: text.replace(/^(Primary|Secondary) button: /, '') }
  return { type: 'paragraph', text }
}))
fs.writeFileSync('components/home/homepage-seo.json', JSON.stringify(sections, null, 2) + '\n')
