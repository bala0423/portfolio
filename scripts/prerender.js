// Injects server-rendered app HTML into dist/index.html after `vite build`.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const indexPath = path.join(root, 'dist', 'index.html')
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js')
const placeholder = '<!--app-html-->'

const { render } = await import(pathToFileURL(ssrEntry).href)
const template = fs.readFileSync(indexPath, 'utf-8')

if (!template.includes(placeholder)) {
  throw new Error(`Placeholder ${placeholder} not found in dist/index.html`)
}

const html = template.replace(placeholder, render())
fs.writeFileSync(indexPath, html)
fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })

console.log(`Pre-rendered ${path.relative(root, indexPath)} (${html.length} bytes)`)
