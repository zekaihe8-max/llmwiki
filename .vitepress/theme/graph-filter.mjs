/** Hide index/log pages and their edges, unless explicitly shown or focused. */
export function filterMetadataNodes(nodes, edges, { showMetaNodes = false, focusId = null } = {}) {
  const visibleNodes = nodes.filter((node) => showMetaNodes || !node.is_meta || node.id === focusId)
  const visibleIds = new Set(visibleNodes.map((node) => node.id))
  return {
    nodes: visibleNodes,
    edges: edges.filter((edge) => visibleIds.has(edge.source) && visibleIds.has(edge.target)),
  }
}
