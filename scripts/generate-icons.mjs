/*
 * Generates the Apple-style app-icon tiles used by the toolkit dock:
 * a squircle filled with the brand colour, with the brand glyph on top.
 *
 * Output lands in src/assets/icons/ and is committed, so this only needs to be
 * re-run when a tool is added or rebranded:
 *
 *   npm i -D simple-icons && node scripts/generate-icons.mjs && npm un simple-icons
 *
 * Run from the repo root — paths below are relative to it.
 */
import * as si from 'simple-icons'
import { writeFileSync, mkdirSync, readFileSync } from 'node:fs'

const SIZE = 120
const OUT = 'src/assets/icons'

// --- squircle (superellipse) ------------------------------------------------

function squirclePath(size, n = 5, steps = 240) {
  const r = size / 2
  const pts = []
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * 2 * Math.PI
    const c = Math.cos(t)
    const s = Math.sin(t)
    const x = Math.sign(c) * Math.abs(c) ** (2 / n) * r + r
    const y = Math.sign(s) * Math.abs(s) ** (2 / n) * r + r
    pts.push(`${x.toFixed(2)},${y.toFixed(2)}`)
  }
  return `M${pts.join('L')}Z`
}

// --- contrast ---------------------------------------------------------------

const channel = (v) => {
  const c = v / 255
  return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
}

function luminance(hex) {
  const n = parseInt(hex, 16)
  const r = channel((n >> 16) & 255)
  const g = channel((n >> 8) & 255)
  const b = channel(n & 255)
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

const contrast = (a, b) => {
  const [hi, lo] = a > b ? [a, b] : [b, a]
  return (hi + 0.05) / (lo + 0.05)
}

const DARK_GLYPH = '#111111'

/*
 * Very dark brands (Next.js, Prisma) would disappear against the black
 * canvas, so the tile is inverted: white ground, brand-coloured glyph.
 */
function palette(hex) {
  const lum = luminance(hex)
  if (lum < 0.02) return { bg: '#ffffff', fg: DARK_GLYPH }
  if (lum < 0.09) return { bg: '#ffffff', fg: `#${hex}` }

  // Saturated mid-tone grounds keep a white glyph, the way most app icons do;
  // only genuinely light grounds flip to a dark glyph.
  return { bg: `#${hex}`, fg: lum > 0.5 ? DARK_GLYPH : '#ffffff' }
}

// --- icon builders ----------------------------------------------------------

const squircle = squirclePath(SIZE)

function build({ bg, fg, glyphPath, scale = 0.56 }) {
  const g = SIZE * scale
  const k = g / 24 // simple-icons paths use a 24x24 viewBox
  const offset = (SIZE - g) / 2

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${SIZE} ${SIZE}" width="${SIZE}" height="${SIZE}">
  <path d="${squircle}" fill="${bg}"/>
  <g transform="translate(${offset.toFixed(2)} ${offset.toFixed(2)}) scale(${k.toFixed(4)})">
    <path d="${glyphPath}" fill="${fg}"/>
  </g>
</svg>
`
}

const tools = [
  ['typescript', 'siTypescript'],
  ['javascript', 'siJavascript'],
  ['python', 'siPython'],
  ['swift', 'siSwift'],
  ['react', 'siReact'],
  ['nextjs', 'siNextdotjs'],
  ['tailwind', 'siTailwindcss'],
  ['nodejs', 'siNodedotjs'],
  ['fastapi', 'siFastapi'],
  ['postgresql', 'siPostgresql'],
  ['prisma', 'siPrisma'],
  ['supabase', 'siSupabase'],
  ['docker', 'siDocker'],
  ['langchain', 'siLangchain'],
]

mkdirSync(OUT, { recursive: true })

for (const [name, key] of tools) {
  const icon = si[key]
  if (!icon) throw new Error(`missing simple-icon: ${key}`)
  const { bg, fg } = palette(icon.hex)
  writeFileSync(`${OUT}/${name}.svg`, build({ bg, fg, glyphPath: icon.path }))
  console.log(`${name.padEnd(12)} bg ${bg}  glyph ${fg}`)
}

/*
 * AWS was removed from simple-icons, so its multi-colour mark is embedded
 * from the existing local asset on a white squircle.
 */
const awsSrc = readFileSync('src/assets/aws.svg', 'utf8')
const awsInner = awsSrc.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '').trim()
const awsScale = (SIZE * 0.62) / 256
const awsW = 256 * awsScale
const awsH = 153 * awsScale

writeFileSync(
  `${OUT}/aws.svg`,
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${SIZE} ${SIZE}" width="${SIZE}" height="${SIZE}">
  <path d="${squircle}" fill="#ffffff"/>
  <g transform="translate(${((SIZE - awsW) / 2).toFixed(2)} ${((SIZE - awsH) / 2).toFixed(2)}) scale(${awsScale.toFixed(4)})">
    ${awsInner}
  </g>
</svg>
`
)
console.log('aws          bg #ffffff  (embedded brand mark)')
