<script setup>
// Knowledge graph viewer adapted from lucasastorian/llmwiki (Apache-2.0)
// web/src/components/kb/GraphViewer.tsx — force layout, hover fade, colors, labels.
// Click-through follows useGraphNavigation: open the page for the node.
// Static build: data is /graph-data.json, produced by scripts/build-graph.mjs.

import { computed, markRaw, onBeforeUnmount, onMounted, ref, shallowRef, watch } from 'vue'
import { useData, useRouter } from 'vitepress'

const NODE_RADIUS = 3.5
const SOURCE_RADIUS = 2.5

const LIGHT = {
  node: 'rgba(140, 140, 150, 0.7)',
  concept: 'rgba(120, 120, 140, 0.85)',
  entity: 'rgba(155, 140, 130, 0.85)',
  source: 'rgba(140, 140, 150, 0.4)',
  hover: 'rgba(60, 60, 70, 1)',
  edge: 'rgba(140, 140, 150, 0.18)',
  edgeHover: 'rgba(100, 100, 110, 0.5)',
  edgeFaded: 'rgba(200, 200, 200, 0.04)',
  label: 'rgba(60, 60, 70, 0.8)',
  labelHover: '#000',
}

// Same hues, lifted so they stay visible on the VitePress dark background.
const DARK = {
  node: 'rgba(186, 186, 196, 0.78)',
  concept: 'rgba(176, 176, 198, 0.9)',
  entity: 'rgba(204, 184, 168, 0.9)',
  source: 'rgba(186, 186, 196, 0.45)',
  hover: 'rgba(248, 248, 250, 1)',
  edge: 'rgba(186, 186, 196, 0.28)',
  edgeHover: 'rgba(220, 220, 228, 0.7)',
  edgeFaded: 'rgba(255, 255, 255, 0.06)',
  label: 'rgba(230, 230, 236, 0.88)',
  labelHover: '#fff',
}

const HUB_TITLES = new Set(['overview', 'log'])
const nodeCache = new Map()

const router = useRouter()
const { isDark } = useData()

const shellRef = ref(null)
const canvasHost = ref(null)
const graphData = shallowRef(null)
const loading = ref(true)
const error = ref(false)
const showSources = ref(false)
const hoverNode = shallowRef(null)
const mousePos = ref({ x: 0, y: 0 })
const dimensions = ref({ width: 0, height: 0 })

// VitePress routes have no query object. ?focus= is read from the browser URL.
const focusNodeId = ref(null)

function readFocus() {
  if (typeof window === 'undefined') return null
  const value = new URLSearchParams(window.location.search).get('focus')
  return value || null
}

function syncFocus() {
  focusNodeId.value = readFocus()
}

const view = shallowRef(markRaw({ nodes: [], links: [], key: 'empty' }))

function endpointId(value) {
  if (value && typeof value === 'object') return value.id
  return value
}

function buildView(data, sourcesOn, focusId) {
  if (!data) return markRaw({ nodes: [], links: [], key: 'empty' })

  let relevantNodes = data.nodes
  let relevantEdges = data.edges

  if (focusId) {
    const neighborIds = new Set([focusId])
    for (const edge of data.edges) {
      if (edge.source === focusId) neighborIds.add(edge.target)
      if (edge.target === focusId) neighborIds.add(edge.source)
    }
    relevantNodes = data.nodes.filter((node) => neighborIds.has(node.id))
    relevantEdges = data.edges.filter((edge) => edge.source === focusId || edge.target === focusId)
  } else {
    relevantEdges = relevantEdges.filter((edge) => edge.type === 'links_to' || (sourcesOn && edge.type === 'cites'))
    relevantNodes = relevantNodes.filter((node) => {
      if (node.source_kind !== 'wiki' && !sourcesOn) return false
      return !HUB_TITLES.has(String(node.title || '').toLowerCase())
    })
  }

  const nodeIds = new Set(relevantNodes.map((node) => node.id))
  const nodes = relevantNodes.map((node) => {
    const cached = nodeCache.get(node.id)
    if (cached) {
      Object.assign(cached, node)
      return cached
    }
    const fresh = markRaw({ ...node })
    nodeCache.set(node.id, fresh)
    return fresh
  })

  const links = relevantEdges
    .filter((edge) => nodeIds.has(edge.source) && nodeIds.has(edge.target))
    .map((edge) => ({ source: edge.source, target: edge.target, type: edge.type }))

  const key = `${focusId || ''}|${sourcesOn ? 1 : 0}|${nodes.map((node) => node.id).join(',')}|${links.length}`
  return markRaw({ nodes, links, key })
}

watch([graphData, showSources, focusNodeId], () => {
  const data = graphData.value
  if (data && !focusNodeId.value) {
    const hasWikiLinks = data.edges.some((edge) => edge.type === 'links_to')
    if (!hasWikiLinks && data.edges.length > 0 && !showSources.value) showSources.value = true
  }
  view.value = buildView(graphData.value, showSources.value, focusNodeId.value)
}, { immediate: true })

const banner = computed(() => {
  if (loading.value) return { text: 'Loading graph…', mode: 'center' }
  if (error.value || !graphData.value) return { text: 'Failed to load graph data', mode: 'center' }
  if (!graphData.value.nodes.length) return { text: 'No documents to visualize yet', mode: 'center' }
  if (focusNodeId.value && !view.value.nodes.length) return { text: 'No page matches this focus.', mode: 'center' }
  if (!view.value.links.length) return { text: 'No cross-references in this view yet.', mode: 'bottom' }
  return null
})

const tooltipStyle = computed(() => {
  const width = dimensions.value.width || 0
  const maxLeft = Math.max(8, width - 280)
  return {
    left: `${Math.min(mousePos.value.x + 14, maxLeft)}px`,
    top: `${Math.max(8, mousePos.value.y - 10)}px`,
  }
})

function categoryOf(node) {
  if (node.source_kind !== 'wiki') return 'Source'
  const p = String(node.path || '').toLowerCase()
  if (p.includes('concepts/')) return 'Concept'
  if (p.includes('entities/')) return 'Entity'
  return 'Page'
}

function palette() {
  return isDark.value ? DARK : LIGHT
}

const hoverState = { node: null, neighbors: null }

function paintNode(node, ctx, globalScale) {
  if (node.x == null || node.y == null) return
  const colors = palette()
  const hovering = hoverState.node
  const isHover = hovering?.id === node.id
  const neighbors = hoverState.neighbors
  const isFaded = hovering && neighbors && !neighbors.has(node.id)
  const isSource = node.source_kind !== 'wiki'
  const radius = isSource ? SOURCE_RADIUS : NODE_RADIUS
  const p = String(node.path || '').toLowerCase()
  const color = isHover
    ? colors.hover
    : isSource
      ? colors.source
      : p.includes('concepts/')
        ? colors.concept
        : p.includes('entities/')
          ? colors.entity
          : colors.node

  ctx.globalAlpha = isFaded ? 0.12 : 1
  ctx.beginPath()
  ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI)
  ctx.fillStyle = color
  ctx.fill()

  if (globalScale > 1.2 || isHover) {
    const fontSize = Math.max(10 / globalScale, 2)
    ctx.font = `${fontSize}px -apple-system, BlinkMacSystemFont, sans-serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'top'
    ctx.fillStyle = isHover ? colors.labelHover : colors.label
    ctx.fillText(node.title || node.id, node.x, node.y + radius + 2)
  }
  ctx.globalAlpha = 1
}

function paintPointer(node, color, ctx) {
  if (node.x == null || node.y == null) return
  ctx.beginPath()
  ctx.arc(node.x, node.y, 5, 0, 2 * Math.PI)
  ctx.fillStyle = color
  ctx.fill()
}

function linkColor(link) {
  const colors = palette()
  const hovering = hoverState.node
  if (!hovering) return colors.edge
  const srcId = endpointId(link.source)
  const tgtId = endpointId(link.target)
  if (srcId === hovering.id || tgtId === hovering.id) return colors.edgeHover
  return colors.edgeFaded
}

let graph = null
let d3 = null
let resizeObserver = null
let disposed = false
let fittedKey = ''
let pendingFitKey = ''
let currentLinks = []

function rememberNeighbors(node) {
  hoverState.node = node
  if (!node || currentLinks.length === 0) {
    hoverState.neighbors = null
    return
  }
  const neighbors = new Set([node.id])
  for (const link of currentLinks) {
    const srcId = endpointId(link.source)
    const tgtId = endpointId(link.target)
    if (srcId === node.id) neighbors.add(tgtId)
    if (tgtId === node.id) neighbors.add(srcId)
  }
  hoverState.neighbors = neighbors
}

function applyForces() {
  if (!graph || !d3) return
  graph.d3Force('charge')?.strength(-850)
  graph.d3Force('link')?.distance(130).strength(0.07)
  graph.d3Force(
    'collide',
    d3.forceCollide((node) => (node.source_kind !== 'wiki' ? SOURCE_RADIUS : NODE_RADIUS) + 2.5).iterations(2),
  )
  graph.d3Force('x', d3.forceX(0).strength(0.03))
  graph.d3Force('y', d3.forceY(0).strength(0.03))
}

function applyGraphData() {
  if (!graph || !graphData.value) return
  const next = view.value
  currentLinks = next.links
  graph.graphData({ nodes: next.nodes, links: next.links })
  applyForces()
  pendingFitKey = next.nodes.length ? next.key : ''
  graph.d3ReheatSimulation()
}

async function ensureGraph() {
  if (graph || disposed || !canvasHost.value) return
  const [{ default: ForceGraph }, d3Force] = await Promise.all([
    import('force-graph'),
    import('d3-force'),
  ])
  if (disposed || graph || !canvasHost.value) return
  d3 = d3Force
  graph = ForceGraph()(canvasHost.value)
    .width(dimensions.value.width)
    .height(dimensions.value.height)
    .backgroundColor('rgba(0,0,0,0)')
    .nodeId('id')
    .nodeLabel(() => '')
    .nodeCanvasObject(paintNode)
    .nodePointerAreaPaint(paintPointer)
    .linkColor(linkColor)
    .linkWidth(0.5)
    .linkDirectionalArrowLength(0)
    .linkDirectionalArrowRelPos(1)
    .autoPauseRedraw(false)
    .cooldownTicks(220)
    .d3AlphaDecay(0.01)
    .d3VelocityDecay(0.4)
    .onNodeHover((node) => {
      rememberNeighbors(node || null)
      hoverNode.value = node || null
    })
    .onNodeClick((node) => {
      if (!node?.id) return
      const id = String(node.id)
      router.go(id === 'index' ? '/' : `/${id}`)
    })
    .onEngineStop(() => {
      if (!graph || !pendingFitKey || fittedKey === pendingFitKey) return
      fittedKey = pendingFitKey
      graph.zoomToFit(400, 72)
    })
  applyGraphData()
}

function onMouseMove(event) {
  const rect = shellRef.value?.getBoundingClientRect()
  if (!rect) return
  mousePos.value = { x: event.clientX - rect.left, y: event.clientY - rect.top }
}

onMounted(() => {
  syncFocus()
  window.addEventListener('popstate', syncFocus)

  const shell = shellRef.value
  if (shell) {
    resizeObserver = new ResizeObserver((entries) => {
      const rect = entries[0]?.contentRect
      if (!rect) return
      const width = Math.floor(rect.width)
      const height = Math.floor(rect.height)
      if (width > 0 && height > 0) dimensions.value = { width, height }
    })
    resizeObserver.observe(shell)
  }

  fetch('/graph-data.json')
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      return res.json()
    })
    .then((data) => {
      if (disposed) return
      graphData.value = markRaw(data)
    })
    .catch(() => {
      if (!disposed) error.value = true
    })
    .finally(() => {
      if (!disposed) loading.value = false
    })
})

watch([view, dimensions, graphData], async () => {
  if (!graphData.value || dimensions.value.width === 0 || !canvasHost.value) return
  await ensureGraph()
  if (!graph) return
  graph.width(dimensions.value.width).height(dimensions.value.height)
  if (graph.__viewKey === view.value.key) return
  graph.__viewKey = view.value.key
  applyGraphData()
}, { flush: 'post' })

onBeforeUnmount(() => {
  disposed = true
  if (typeof window !== 'undefined') window.removeEventListener('popstate', syncFocus)
  resizeObserver?.disconnect()
  graph?._destructor?.()
  graph = null
})
</script>

<template>
  <div ref="shellRef" class="graph-shell" @mousemove="onMouseMove">
    <div ref="canvasHost" class="graph-canvas" />

    <div class="graph-controls">
      <button
        type="button"
        :class="{ on: showSources }"
        :aria-pressed="showSources"
        :title="showSources ? 'Hide sources' : 'Show sources'"
        @click="showSources = !showSources"
      >
        Show sources
      </button>
      <span class="graph-controls-sep" aria-hidden="true">|</span>
      <span class="graph-controls-note">Graph rebuilt on each deploy.</span>
    </div>

    <p v-if="banner" class="graph-banner" :class="banner.mode">{{ banner.text }}</p>

    <div v-if="hoverNode" class="graph-tooltip" :style="tooltipStyle">
      <p class="graph-tooltip-title">{{ hoverNode.title }}</p>
      <p v-if="hoverNode.description" class="graph-tooltip-desc">{{ hoverNode.description }}</p>
      <p class="graph-tooltip-kind">{{ categoryOf(hoverNode) }}</p>
      <div v-if="hoverNode.tags && hoverNode.tags.length" class="graph-tooltip-tags">
        <span v-for="tag in hoverNode.tags.slice(0, 4)" :key="tag">{{ tag }}</span>
      </div>
    </div>
  </div>
</template>
