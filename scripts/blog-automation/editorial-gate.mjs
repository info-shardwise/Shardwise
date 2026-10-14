import assert from 'node:assert/strict'
export function enforceEditorialGate(editorial) {
  const dimensions = ['usefulness', 'specificity', 'clarity', 'sourceSupport', 'searchIntent']
  const scores = dimensions.map((name) => editorial[name])
  assert.ok(
    scores.every((score) => Number.isFinite(score) && score >= 0 && score <= 10),
    'Invalid editorial scores',
  )
  assert.ok(
    Array.isArray(editorial.blockingIssues) && editorial.blockingIssues.length === 0,
    'Editorial blocking issues require revision',
  )
  const average = scores.reduce((sum, score) => sum + score, 0) / scores.length
  assert.ok(
    average >= 8 && scores.every((score) => score >= 7.5),
    'Editorial quality gate rejected draft',
  )
  return average
}
