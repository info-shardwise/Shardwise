const http = require('http')

const routes = [
  '/',
  '/about/',
  '/services/',
  '/services/ios-app-development/',
  '/services/aeo/',
  '/blogs/',
  '/blogs/modern-seo-in-2026/',
  '/contact/',
  '/privacy-policy/',
  '/terms/',
  '/sitemap.xml',
  '/robots.txt',
]

async function checkRoute(path) {
  return new Promise((resolve) => {
    http.get(`http://localhost:3000${path}`, (res) => {
      resolve({ path, statusCode: res.statusCode })
    }).on('error', (err) => {
      resolve({ path, statusCode: 'ERR', error: err.message })
    })
  })
}

async function run() {
  console.log('=== SMOKE TEST STARTING ===')
  let failed = 0
  for (const r of routes) {
    const result = await checkRoute(r)
    console.log(`${result.statusCode === 200 ? '✅' : '❌'} ${result.path} -> ${result.statusCode}`)
    if (result.statusCode !== 200) failed++
  }
  console.log(`=== SMOKE TEST FINISHED: ${routes.length - failed}/${routes.length} PASSED ===`)
  process.exit(failed > 0 ? 1 : 0)
}

run()
