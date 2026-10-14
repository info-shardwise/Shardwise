import assert from 'node:assert/strict'

export function verifyRenderedTables(markdown, html) {
  const delimiters = markdown.match(/^\|(?:\s*:?-+:?\s*\|){2,}\s*$/gm) || []
  if (!delimiters.length) return
  const tables = [...html.matchAll(/<table(?:\s[^>]*)?>([\s\S]*?)<\/table>/g)]
  assert.equal(tables.length, delimiters.length, 'Markdown tables did not render as HTML tables')
  for (const [, table] of tables) {
    assert.ok(
      table.includes('<thead>') && table.includes('<tbody>'),
      'Table header or body missing',
    )
    const rows = [...table.matchAll(/<tr(?:\s[^>]*)?>([\s\S]*?)<\/tr>/g)]
    const columns = (rows[0]?.[1].match(/<th(?:\s|>)/g) || []).length
    assert.ok(columns >= 2 && rows.length >= 2, 'Rendered table is empty')
    assert.ok(
      rows.slice(1).every((row) => (row[1].match(/<td(?:\s|>)/g) || []).length === columns),
      'Rendered table column counts differ',
    )
  }
}
