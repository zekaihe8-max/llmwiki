/** Frontmatter subset used by Source and Topic pages. Not a general YAML parser. */
export function parseFrontmatter(markdown) {
  const text = String(markdown).replace(/^\uFEFF/, '')
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)([\s\S]*)$/)
  if (!match) return null
  return { data: parseSimpleYaml(match[1]), body: match[2] }
}

export function parseSimpleYaml(src) {
  const rows = []
  for (const rawLine of String(src).split(/\r?\n/)) {
    const line = rawLine.replace(/\t/g, '  ')
    const text = line.trim()
    if (!text || text.startsWith('#')) continue
    rows.push({ indent: line.match(/^ */)?.[0].length ?? 0, text })
  }

  const root = {}
  const stack = [{ indent: -1, container: root, kind: 'map' }]
  let index = 0

  const current = () => stack[stack.length - 1]

  while (index < rows.length) {
    const row = rows[index]
    while (stack.length > 1 && row.indent < current().indent) stack.pop()
    const parent = current()

    if (row.text.startsWith('- ')) {
      if (parent.kind !== 'list') {
        throw new Error(`YAML list item is not inside a list: ${row.text}`)
      }
      const rest = row.text.slice(2).trim()
      const kv = splitKey(rest)
      if (!kv) {
        parent.container.push(parseScalar(rest))
        index++
        continue
      }
      const item = {}
      parent.container.push(item)
      if (kv.value === '') {
        const next = rows[index + 1]
        const child = next && next.indent > row.indent ? containerFor(next) : null
        item[kv.key] = child
        index++
        if (child) stack.push({ indent: next.indent, container: child, kind: Array.isArray(child) ? 'list' : 'map' })
        continue
      }
      item[kv.key] = parseScalar(kv.value)
      const next = rows[index + 1]
      index++
      if (next && next.indent > row.indent && !next.text.startsWith('- ')) {
        stack.push({ indent: next.indent, container: item, kind: 'map' })
      }
      continue
    }

    if (parent.kind !== 'map') {
      throw new Error(`YAML mapping entry is not inside a map: ${row.text}`)
    }
    const kv = splitKey(row.text)
    if (!kv) throw new Error(`Could not parse YAML line: ${row.text}`)
    if (kv.value === '') {
      const next = rows[index + 1]
      const child = next && next.indent > row.indent ? containerFor(next) : null
      parent.container[kv.key] = child
      index++
      if (child) stack.push({ indent: next.indent, container: child, kind: Array.isArray(child) ? 'list' : 'map' })
      continue
    }
    parent.container[kv.key] = parseScalar(kv.value)
    index++
  }

  return root
}

function containerFor(next) {
  return next.text.startsWith('- ') ? [] : {}
}

function splitKey(text) {
  const idx = text.indexOf(':')
  if (idx <= 0) return null
  const key = text.slice(0, idx).trim()
  if (!key || /\s/.test(key)) return null
  return { key, value: text.slice(idx + 1).trim() }
}

function parseScalar(value) {
  if (value === 'null' || value === '~' || value === '') return null
  if (value === 'true') return true
  if (value === 'false') return false
  if (
    (value.startsWith('"') && value.endsWith('"') && value.length >= 2)
    || (value.startsWith("'") && value.endsWith("'") && value.length >= 2)
  ) {
    return value.slice(1, -1)
  }
  if (value.startsWith('[') && value.endsWith(']')) {
    const inner = value.slice(1, -1).trim()
    if (!inner) return []
    return inner.split(',').map((part) => parseScalar(part.trim()))
  }
  return value
}
