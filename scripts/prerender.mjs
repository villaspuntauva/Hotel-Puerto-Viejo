// Run by .github/workflows/prerender.yml after `vite build`.
//
// This site is a client-side React SPA: `vite build` alone produces a
// dist/index.html whose <body> is just <div id="root"></div>, with all real
// content (rooms, prices, amenities, schedule, location) injected by React
// after JavaScript runs. Crawlers that don't execute JavaScript (GPTBot,
// ClaudeBot, PerplexityBot, CCBot and others) see nothing but that empty
// shell, and Google has to queue the page for a second, slower rendering pass.
//
// This script boots the built site with Vite's own preview server, opens it in
// a headless browser, lets the app fully render, and saves the resulting HTML
// back into dist/. Real visitors still load the same JS bundle and get the
// exact same interactive page — this only changes what a crawler sees on the
// first request.
//
// The site is a single page in two languages: `/` is English and `/es` is
// Spanish (see LANGUAGE_PATHS in src/i18n.js). If pages are ever added, list
// them in ROUTES — and in vercel.json's rewrites, or the new URL will 404
// until its first snapshot is committed.

import { preview } from 'vite'
import { chromium } from 'playwright'
import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const DIST = path.join(ROOT, 'dist')

const ROUTES = ['/', '/es']

function outputFile(urlPath) {
  const clean = urlPath === '/' ? '' : urlPath
  return path.join(DIST, clean, 'index.html')
}

// Scrolls the full page height in steps so native loading="lazy" images get a
// chance to load before we capture the DOM, then returns to the top before the
// snapshot is taken.
async function triggerLazyContent(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      const step = Math.max(200, Math.floor(window.innerHeight * 0.8))
      let total = 0
      const timer = setInterval(() => {
        window.scrollBy(0, step)
        total += step
        if (total >= document.body.scrollHeight) {
          clearInterval(timer)
          resolve()
        }
      }, 100)
    })
  })
  await page.waitForTimeout(300)
  await page.evaluate(() => window.scrollTo(0, 0))
}

async function main() {
  const server = await preview({
    root: ROOT,
    preview: { port: 4173 },
    logLevel: 'warn',
  })
  const base = server.resolvedUrls.local[0].replace(/\/$/, '')
  console.log(`Preview server running at ${base}`)

  const browser = await chromium.launch()
  const page = await browser.newPage()

  console.log(`Prerendering ${ROUTES.length} route(s)...\n`)
  const failures = []

  for (const urlPath of ROUTES) {
    try {
      // The surf forecast widget keeps a connection open, so wait for the
      // page's own content rather than for the network to go fully idle.
      await page.goto(`${base}${urlPath}`, { waitUntil: 'load', timeout: 30000 })
      await page.waitForSelector('#rooms .room-card', { state: 'attached', timeout: 10000 })

      await triggerLazyContent(page)
      await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {})

      const title = await page.title()
      const description = await page
        .$eval('meta[name="description"]', (el) => el.getAttribute('content'))
        .catch(() => null)
      const rootHTML = await page.$eval('#root', (el) => el.innerHTML).catch(() => '')

      if (!title || !description || rootHTML.length < 200) {
        throw new Error(
          `page looks empty or incomplete (title="${title}", description="${description}", rendered content length=${rootHTML.length})`,
        )
      }

      const html = await page.content()
      const file = outputFile(urlPath)
      await mkdir(path.dirname(file), { recursive: true })
      await writeFile(file, html)

      console.log(`  [ok]   ${urlPath}`)
      console.log(`         title: ${title}`)
      console.log(`         desc:  ${description.slice(0, 90)}${description.length > 90 ? '…' : ''}`)
    } catch (err) {
      failures.push({ urlPath, error: err.message })
      console.error(`  [FAIL] ${urlPath}: ${err.message}`)
    }
  }

  await browser.close()
  await server.close()

  if (failures.length > 0) {
    console.error(`\nPrerendering failed for ${failures.length}/${ROUTES.length} route(s):`)
    for (const f of failures) console.error(`  - ${f.urlPath}: ${f.error}`)
    process.exit(1)
  }

  console.log(`\nPrerendered ${ROUTES.length}/${ROUTES.length} route(s) successfully.`)
}

main().catch((err) => {
  console.error('Prerendering failed:', err)
  process.exit(1)
})
