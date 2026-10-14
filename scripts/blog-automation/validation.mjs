import assert from 'node:assert/strict'
import { compile } from '@mdx-js/mdx'
import remarkGfm from 'remark-gfm'

export function safeError(error, env = {}) {
  if (error instanceof SyntaxError) return 'Invalid publication JSON'
  let message = String(error?.message || 'Publication failed')
  for (const [name, value] of Object.entries(env)) {
    if (value && /TOKEN|SECRET|KEY|CREDENTIAL|ACCOUNT_JSON/.test(name))
      message = message.split(value).join('[redacted]')
  }
  return message.replace(
    /-----BEGIN PRIVATE KEY-----[\s\S]*?-----END PRIVATE KEY-----/g,
    '[redacted private key]',
  )
}

export async function validateApprovedArticle(data, content, checkLink) {
  assert.ok(
    typeof data.title === 'string' && data.title.length >= 15 && data.title.length <= 110,
    'Invalid article title',
  )
  assert.ok(
    typeof data.description === 'string' &&
      data.description.length >= 80 &&
      data.description.length <= 190,
    'Invalid description',
  )
  assert.ok(
    data.author?.name && data.imageAlt && data.imageCredit?.photographer,
    'Missing author or image attribution',
  )
  const image = new URL(data.image)
  assert.ok(
    image.protocol === 'https:' && image.hostname === 'images.unsplash.com',
    'Invalid image host',
  )
  for (const url of [data.imageCredit.photographerUrl, data.imageCredit.sourceUrl]) {
    const parsed = new URL(url)
    assert.ok(
      parsed.protocol === 'https:' && parsed.hostname === 'unsplash.com',
      'Invalid attribution host',
    )
  }
  const links = []
  await compile(content, {
    remarkPlugins: [
      remarkGfm,
      () => (tree) => {
        function visit(node) {
          if (node.type === 'table') {
            const columns = node.children[0]?.children.length
            assert.ok(
              columns >= 2 && node.children.length >= 2,
              'Table needs headers and data rows',
            )
            assert.ok(
              node.children.every((row) => row.children.length === columns),
              'Table rows must match header columns',
            )
          }
          if (node.type.startsWith('mdx') || node.type === 'html')
            throw new Error('Executable MDX or HTML is not allowed in automated drafts')
          if (node.type === 'heading' && node.depth === 1)
            throw new Error('Body must not contain an H1')
          if (node.type === 'link') links.push(node.url)
          if (['linkReference', 'definition', 'image', 'imageReference'].includes(node.type))
            throw new Error('Use direct links and the approved hero only')
          for (const child of node.children || []) visit(child)
        }
        visit(tree)
      },
    ],
  })
  for (const link of [...new Set(links)]) {
    assert.ok(link.startsWith('/') || link.startsWith('https://'), 'Unsafe link protocol')
    assert.ok(!link.startsWith('//'), 'Protocol-relative link is not allowed')
    const url = new URL(link, 'https://shardwise.pages.dev')
    const allowed = [
      'shardwise.pages.dev',
      'woocommerce.com',
      'developer.wordpress.org',
      'wordpress.org',
      'developers.google.com',
      'nextjs.org',
      'developer.apple.com',
      'developer.android.com',
      'shopify.dev',
    ]
    assert.ok(allowed.includes(url.hostname), 'Unapproved reference host')
    if (checkLink) assert.equal(await checkLink(url.href), 200, 'Article link unavailable')
  }
  if (checkLink) assert.equal(await checkLink(image.href), 200, 'Article image unavailable')
}
