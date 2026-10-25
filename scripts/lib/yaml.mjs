/** Frontmatter parsing via js-yaml — same family VitePress uses. Invalid YAML must fail. */
import yaml from 'js-yaml'

export class YamlFrontmatterError extends Error {
  constructor(message, cause) {
    super(message)
    this.name = 'YamlFrontmatterError'
    if (cause) this.cause = cause
  }
}

/**
 * Parse Markdown frontmatter.
 * @returns {{ data: object, body: string } | null} null when no --- fence
 * @throws {YamlFrontmatterError} when the fence exists but YAML is illegal
 */
export function parseFrontmatter(markdown) {
  const text = String(markdown).replace(/^\uFEFF/, '')
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)([\s\S]*)$/)
  if (!match) return null
  return { data: parseYamlMapping(match[1]), body: match[2] }
}

/** Parse a YAML document that must be a mapping (object). */
export function parseSimpleYaml(src) {
  return parseYamlMapping(src)
}

function parseYamlMapping(src) {
  let data
  try {
    data = yaml.load(String(src), { schema: yaml.CORE_SCHEMA })
  } catch (error) {
    const detail = String(error?.message || error).split('\n')[0]
    throw new YamlFrontmatterError(`invalid YAML frontmatter: ${detail}`, error)
  }
  if (data == null) return {}
  if (typeof data !== 'object' || Array.isArray(data)) {
    throw new YamlFrontmatterError('frontmatter must be a YAML mapping')
  }
  return data
}

/** Serialize a plain object to a YAML string (for tests / helpers). */
export function dumpYaml(data) {
  return yaml.dump(data, { lineWidth: 120, noRefs: true })
}
