/** Asia/Shanghai calendar day (YYYY-MM-DD) for an ISO timestamp or date string. */
export function shanghaiDay(value, now = new Date()) {
  if (value == null || value === '') return null
  const text = String(value).trim()
  if (/^\d{4}-\d{2}-\d{2}$/.test(text)) return text
  const date = new Date(text)
  if (Number.isNaN(date.getTime())) return null
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Shanghai',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date)
}

/** Today's calendar day in Asia/Shanghai. */
export function todayShanghai(now = new Date()) {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Shanghai',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now)
}

/** True when date or generated_at falls on the given Shanghai day. */
export function nodeOnShanghaiDay(node, day) {
  if (!day) return false
  const fromDate = shanghaiDay(node?.date)
  const fromGenerated = shanghaiDay(node?.generated_at)
  return fromDate === day || fromGenerated === day
}

/** Hide index/log pages and their edges, unless explicitly shown or focused. */
export function filterMetadataNodes(nodes, edges, { showMetaNodes = false, focusId = null } = {}) {
  const visibleNodes = nodes.filter((node) => showMetaNodes || !node.is_meta || node.id === focusId)
  const visibleIds = new Set(visibleNodes.map((node) => node.id))
  return {
    nodes: visibleNodes,
    edges: edges.filter((edge) => visibleIds.has(edge.source) && visibleIds.has(edge.target)),
  }
}

/** Filter by OKF page_type: Source | Topic | All (null/'all'). */
export function filterByPageType(nodes, edges, pageType = 'all') {
  const want = pageType == null || pageType === 'all' ? null : String(pageType)
  if (!want) {
    return { nodes, edges }
  }
  const visibleNodes = nodes.filter((node) => node.page_type === want)
  const visibleIds = new Set(visibleNodes.map((node) => node.id))
  return {
    nodes: visibleNodes,
    edges: edges.filter((edge) => visibleIds.has(edge.source) && visibleIds.has(edge.target)),
  }
}

/**
 * One-hop neighborhood around focusId (undirected over the given edges).
 * Includes the focus node itself.
 */
export function focusNeighborhood(nodes, edges, focusId) {
  if (!focusId) return { nodes, edges }
  const neighborIds = new Set([focusId])
  for (const edge of edges) {
    if (edge.source === focusId) neighborIds.add(edge.target)
    if (edge.target === focusId) neighborIds.add(edge.source)
  }
  return {
    nodes: nodes.filter((node) => neighborIds.has(node.id)),
    edges: edges.filter((edge) => edge.source === focusId || edge.target === focusId),
  }
}

/**
 * Pages that link_to or cite this node (incoming edges).
 * @returns {{ id: string, type: string }[]}
 */
export function backlinksFor(nodeId, edges) {
  return edges
    .filter((edge) => edge.target === nodeId && (edge.type === 'links_to' || edge.type === 'cites'))
    .map((edge) => ({ id: edge.source, type: edge.type }))
    .sort((a, b) => a.id.localeCompare(b.id) || a.type.localeCompare(b.type))
}

/**
 * 「今日新增/更新及相关主题」: nodes whose date or generated_at is today
 * (Asia/Shanghai), plus one-hop Topic neighbors (and optionally linked Sources).
 * Returns null when no today-seeds exist (caller should show the full graph).
 */
export function filterTodayView(nodes, edges, {
  now = new Date(),
  includeLinkedSources = true,
} = {}) {
  const day = todayShanghai(now)
  const seeds = nodes.filter((node) => nodeOnShanghaiDay(node, day))
  if (seeds.length === 0) return null

  const ids = new Set(seeds.map((node) => node.id))
  const byId = new Map(nodes.map((node) => [node.id, node]))

  for (const seed of seeds) {
    for (const edge of edges) {
      let other = null
      if (edge.source === seed.id) other = edge.target
      else if (edge.target === seed.id) other = edge.source
      else continue
      const neighbor = byId.get(other)
      if (!neighbor) continue
      if (neighbor.page_type === 'Topic') ids.add(neighbor.id)
      else if (includeLinkedSources && neighbor.page_type === 'Source') ids.add(neighbor.id)
    }
  }

  return {
    nodes: nodes.filter((node) => ids.has(node.id)),
    edges: edges.filter((edge) => ids.has(edge.source) && ids.has(edge.target)),
    day,
    seedIds: [...ids].filter((id) => nodeOnShanghaiDay(byId.get(id), day)),
  }
}

/**
 * Compose the viewer filters. Default today-view when seeds exist and no focus.
 */
export function applyGraphFilters(nodes, edges, {
  showMetaNodes = false,
  focusId = null,
  pageType = 'all',
  todayView = true,
  showSources = false,
  now = new Date(),
  includeLinkedSources = true,
} = {}) {
  let relevantNodes = nodes
  let relevantEdges = edges
  let viewMode = 'full'

  if (focusId) {
    const focused = focusNeighborhood(relevantNodes, relevantEdges, focusId)
    relevantNodes = focused.nodes
    relevantEdges = focused.edges
    viewMode = 'focus'
  } else if (todayView) {
    const today = filterTodayView(relevantNodes, relevantEdges, { now, includeLinkedSources })
    if (today) {
      relevantNodes = today.nodes
      relevantEdges = today.edges
      viewMode = 'today'
    }
  }

  if (!focusId) {
    relevantEdges = relevantEdges.filter((edge) => edge.type === 'links_to' || (showSources && edge.type === 'cites'))
    relevantNodes = relevantNodes.filter((node) => node.source_kind === 'wiki' || showSources)
  }

  const typed = filterByPageType(relevantNodes, relevantEdges, pageType)
  const visible = filterMetadataNodes(typed.nodes, typed.edges, { showMetaNodes, focusId })
  return { ...visible, viewMode }
}
