#!/usr/bin/env node
/**
 * Rotaly - Copy .env.example to .env.local for local development.
 * Run: node scripts/setup-env.js
 * Then fill in NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local.
 */

const fs = require('fs')
const path = require('path')

const root = path.resolve(__dirname, '..')
const examplePath = path.join(root, '.env.example')
const localPath = path.join(root, '.env.local')

if (!fs.existsSync(examplePath)) {
  console.error('.env.example not found. Create it with NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.')
  process.exit(1)
}

if (fs.existsSync(localPath)) {
  console.log('.env.local already exists. Skipping copy.')
  process.exit(0)
}

const content = fs.readFileSync(examplePath, 'utf8')
fs.writeFileSync(localPath, content, 'utf8')
console.log('Created .env.local from .env.example.')
console.log('Next: Edit .env.local and set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.')
console.log('Optional: Set NEXT_PUBLIC_APP_LOCALE (tr | en).')
