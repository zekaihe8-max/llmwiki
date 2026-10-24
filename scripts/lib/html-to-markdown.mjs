const NAMED_ENTITIES = {
  amp: '&',
  apos: "'",
  gt: '>',
  lt: '<',
  nbsp: ' ',
  quot: '"',
}

export function decodeEntities(value) {
  return String(value).replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (entity, body) => {
    if (body[0] === '#') {
      const code = body[1] === 'x' || body[1] === 'X'
        ? Number.parseInt(body.slice(2), 16)
        : Number.parseInt(body.slice(1), 10)
      if (!Number.isFinite(code)) return entity
      try {
        return String.fromCodePoint(code)
      } catch {
        return entity
      }
    }
    return Object.hasOwn(NAMED_ENTITIES, body.toLowerCase()) ? NAMED_ENTITIES[body.toLowerCase()] : entity
  })
}

/**
 * Article-shaped HTML to markdown. Script, style, nav, footer, and aside
 * are dropped. The digest is never an input to this function.
 */
export function htmlToMarkdown(html) {
  let src = String(html ?? '').replace(/^\uFEFF/, '')
  const title = cleanTitle(matchTitle(src))
  src = src.replace(/<!--[\s\S]*?-->/g, '')
  src = src.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
  src = src.replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '')
  src = src.replace(/<noscript\b[^>]*>[\s\S]*?<\/noscript>/gi, '')
  src = src.replace(/<svg\b[^>]*>[\s\S]*?<\/svg>/gi, '')
  const region = inner(src, 'article') || inner(src, 'main') || inner(src, 'body') || src
  const stripped = region
    .replace(/<nav\b[^>]*>[\s\S]*?<\/nav>/gi, '')
    .replace(/<footer\b[^>]*>[\s\S]*?<\/footer>/gi, '')
    .replace(/<aside\b[^>]*>[\s\S]*?<\/aside>/gi, '')
    .replace(/<form\b[^>]*>[\s\S]*?<\/form>/gi, '')
  return { title, markdown: render(stripped).trim() }
}

function matchTitle(html) {
  const og = html.match(/<meta\b[^>]*property\s*=\s*["']og:title["'][^>]*content\s*=\s*["']([^"']+)["']/i)
    || html.match(/<meta\b[^>]*content\s*=\s*["']([^"']+)["'][^>]*property\s*=\s*["']og:title["']/i)
  if (og) return og[1]
  const title = html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)
  return title ? title[1] : ''
}

function cleanTitle(value) {
  const text = decodeEntities(String(value).replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim()
  return text || null
}

function inner(html, tag) {
  const match = html.match(new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i'))
  return match ? match[1] : null
}

function render(html) {
  const blocks = []
  let src = html.replace(/<pre\b[^>]*>[\s\S]*?<\/pre>/gi, (block) => {
    const code = block
      .replace(/<\/?pre\b[^>]*>/gi, '')
      .replace(/<\/?code\b[^>]*>/gi, '')
    const text = decodeEntities(code).replace(/^\n/, '').replace(/\n$/, '')
    const token = `\u0000B${blocks.length}\u0000`
    blocks.push(`\`\`\`\n${text}\n\`\`\``)
    return token
  })
  src = src.replace(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi, (_, attrs, innerHtml) => {
    const href = attrs.match(/href\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i)
    const url = decodeEntities(href ? (href[1] ?? href[2] ?? href[3] ?? '') : '')
    const label = decodeEntities(innerHtml.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim() || url
    if (!url) return label
    return `[${label}](${url})`
  })
  src = src.replace(/<h([1-6])\b[^>]*>/gi, (_, level) => `\n\n${'#'.repeat(Number(level))} `)
  src = src.replace(/<\/h[1-6]>/gi, '\n\n')
  src = src.replace(/<li\b[^>]*>/gi, '\n- ')
  src = src.replace(/<\/li>/gi, '')
  src = src.replace(/<br\s*\/?>/gi, '\n')
  src = src.replace(/<\/p>/gi, '\n\n')
  src = src.replace(/<p\b[^>]*>/gi, '\n\n')
  src = src.replace(/<blockquote\b[^>]*>/gi, '\n\n> ')
  src = src.replace(/<\/blockquote>/gi, '\n\n')
  src = src.replace(/<\/(ul|ol|div|section|table|tr|td)>/gi, '\n')
  src = src.replace(/<[^>]+>/g, '')
  src = decodeEntities(src)
  src = src.replace(/\u0000B(\d+)\u0000/g, (_, id) => `\n\n${blocks[Number(id)]}\n\n`)
  src = src.replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n')
  return src
}
