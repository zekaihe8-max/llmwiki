<script setup>
// Knowledge graph viewer adapted from lucasastorian/llmwiki (Apache-2.0)
// web/src/components/kb/GraphViewer.tsx — force layout, hover fade, colors, labels.
// Click-through follows useGraphNavigation: open the page for the node.
// Static build: data is /graph-data.json, produced by scripts/build-graph.mjs.

import { computed, markRaw, onBeforeUnmount, onMounted, ref, shallowRef, watch } from 'vue'
import { useData, useRouter } from 'vitepress'
import {
  applyGraphFilters,
  backlinksFor,
  todayShanghai,
} from './graph-filter.mjs'

const NODE_RADIUS = 3.5
const SOURCE_RADIUS = 2.5

const LIGHT = {
  node: 'rgba(140, 140, 150, 0.7)',
  concept: 'rgba(120, 120, 140, 0.85)',
  entity: 'rgba(155, 140, 130, 0.85)',
  source: 'rgba(140, 140, 150, 0.4)',
  topic: 'rgba(110, 130, 150, 0.85)',
  hover: 'rgba(60, 60, 70, 1)',
  edge: 'rgba(140, 140, 150, 0.18)',
  edgeHover: 'rgba(100, 100, 110, 0.5)',
  edgeFaded: 'rgba(200, 200, 200, 0.04)',
  cite: 'rgba(140, 120, 100, 0.35)',
  citeHover: 'rgba(120, 100, 80, 0.65)',
  label: 'rgba(60, 60, 70, 0.8)',
  labelHover: '#000',
}

// Same hues, lifted so they stay visible on the VitePress dark background.
const DARK = {
  node: 'rgba(186, 186, 196, 0.78)',
  concept: 'rgba(176, 176, 198, 0.9)',
  entity: 'rgba(204, 184, 168, 0.9)',
  source: 'rgba(186, 186, 196, 0.45)',
  topic: 'rgba(168, 196, 220, 0.9)',
  hover: 'rgba(248, 248, 250, 1)',
  edge: 'rgba(186, 186, 196, 0.28)',
  edgeHover: 'rgba(220, 220, 228, 0.7)',
  edgeFaded: 'rgba(255, 255, 255, 0.06)',
  cite: 'rgba(210, 190, 160, 0.4)',
  citeHover: 'rgba(230, 210, 180, 0.75)',
  label: 'rgba(230, 230, 236, 0.88)',
  labelHover: '#fff',
}

const nodeCache = new Map()

const router = useRouter()
const { isDark } = useData()

const shellRef = ref(null)
const canvasHost = ref(null)
const graphData = shallowRef(null)
const loading = ref(true)
const error = ref(false)
const showSources = ref(false)
const showMetaNodes = ref(false)
const pageTypeFilter = ref('all')
const todayView = ref(true)
const selectedNode = shallowRef(null)
const hoverNode = shallowRef(null)
const mousePos = ref({ x: 0, y: 0 })
const dimensions = ref({ width: 0, height: 0 })
const viewMode = ref('full')

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

function setFocus(id) {
  if (typeof window === 'undefined') return
  const url = new URL(window.location.href)
  if (id) url.searchParams.set('focus', id)
  else url.searchParams.delete('focus')
  window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`)
  focusNodeId.value = id || null
}

const view = shallowRef(markRaw({ nodes: [], links: [], key: 'empty' }))

function endpointId(value) {
  if (value && typeof value === 'object') return value.id
  return value
}

function buildView(data, sourcesOn, focusId, metaOn, pageType, useToday) {
  if (!data) return markRaw({ nodes: [], links: [], key: 'empty', viewMode: 'full' })

  const filtered = applyGraphFilters(data.nodes, data.edges, {
    showMetaNodes: metaOn,
    focusId,
    pageType,
    todayView: useToday && !focusId,
    showSources: sourcesOn,
  })
  viewMode.value = filtered.viewMode

  const relevantNodes = filtered.nodes
  const relevantEdges = filtered.edges
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

  const key = [
    focusId || '',
    sourcesOn ? 1 : 0,
    metaOn ? 1 : 0,
    pageType,
    useToday ? 1 : 0,
    filtered.viewMode,
    nodes.map((node) => node.id).join(','),
    links.length,
  ].join('|')
  return markRaw({ nodes, links, key, viewMode: filtered.viewMode })
}

watch([graphData, showSources, focusNodeId, showMetaNodes, pageTypeFilter, todayView], () => {
  const data = graphData.value
  if (data && !focusNodeId.value) {
    const hasWikiLinks = data.edges.some((edge) => edge.type === 'links_to')
    if (!hasWikiLinks && data.edges.length > 0 && !showSources.value) showSources.value = true
  }
  view.value = buildView(
    graphData.value,
    showSources.value,
    focusNodeId.value,
    showMetaNodes.value,
    pageTypeFilter.value,
    todayView.value,
  )
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
  const height = dimensions.value.height || 0
  const maxLeft = Math.max(8, width - 300)
  const left = Math.min(Math.max(8, mousePos.value.x - 160), maxLeft)
  const top = Math.min(Math.max(8, mousePos.value.y - 120), Math.max(8, height - 160))
  return { left: `${left}px`, top: `${top}px` }
})

const sourcesAvailable = computed(() => {
  const data = graphData.value
  if (!data) return false
  return data.nodes.some((node) => node.source_kind !== 'wiki') || data.edges.some((edge) => edge.type === 'cites')
})

const metaNodesAvailable = computed(() => graphData.value?.nodes.some((node) => node.is_meta) ?? false)

const todayAvailable = computed(() => {
  const data = graphData.value
  if (!data) return false
  const day = todayShanghai()
  return data.nodes.some((node) => {
    const d = node.date
    const g = node.generated_at
    if (d && String(d).slice(0, 10) === day) return true
    if (!g) return false
    try {
      return new Intl.DateTimeFormat('en-CA', {
        timeZone: 'Asia/Shanghai',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }).format(new Date(g)) === day
    } catch {
      return false
    }
  })
})

const panelNode = computed(() => selectedNode.value || hoverNode.value)

const panelBacklinks = computed(() => {
  const node = panelNode.value
  const data = graphData.value
  if (!node || !data) return []
  return backlinksFor(node.id, data.edges)
})

function categoryOf(node) {
  if (node.page_type === 'Source' || node.page_type === 'Topic') return node.page_type
  if (node.source_kind !== 'wiki') return 'Source'
  const p = String(node.path || '').toLowerCase()
  if (p.includes('concepts/')) return 'Concept'
  if (p.includes('entities/')) return 'Entity'
  return 'Page'
}

function formatDay(value) {
  if (!value) return null
  const text = String(value).trim()
  if (/^\d{4}-\d{2}-\d{2}$/.test(text)) return text
  try {
    return new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Asia/Shanghai',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(new Date(text))
  } catch {
    return text.slice(0, 10)
  }
}

function titleFor(id) {
  const data = graphData.value
  const node = data?.nodes.find((entry) => entry.id === id)
  return node?.title || id
}

function palette() {
  return isDark.value ? DARK : LIGHT
}

const hoverState = { node: null, neighbors: null }

function paintNode(node, ctx, globalScale) {
  if (node.x == null || node.y == null) return
  const colors = palette()
  const hovering = hoverState.node
  const isHover = hovering?.id === node.id || selectedNode.value?.id === node.id
  const neighbors = hoverState.neighbors
  const isFaded = hovering && neighbors && !neighbors.has(node.id)
  const isSourceAsset = node.source_kind !== 'wiki'
  const radius = isSourceAsset ? SOURCE_RADIUS : NODE_RADIUS
  const p = String(node.path || '').toLowerCase()
  let color = colors.node
  if (isHover) color = colors.hover
  else if (isSourceAsset) color = colors.source
  else if (node.page_type === 'Source') color = colors.source
  else if (node.page_type === 'Topic') color = colors.topic
  else if (p.includes('concepts/')) color = colors.concept
  else if (p.includes('entities/')) color = colors.entity

  ctx.globalAlpha = isFaded ? 0.12 : 1
  ctx.beginPath()
  ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI)
  ctx.fillStyle = color
  ctx.fill()

  // Always draw titles. zoomToFit on the full graph lands near scale 1, so a
  // >1.2 gate left the default view as unlabeled dots.
  {
    const fontSize = Math.max(11 / Math.max(globalScale, 0.75), 3.5)
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
  const isCite = link.type === 'cites'
  if (!hovering) return isCite ? colors.cite : colors.edge
  const srcId = endpointId(link.source)
  const tgtId = endpointId(link.target)
  if (srcId === hovering.id || tgtId === hovering.id) {
    return isCite ? colors.citeHover : colors.edgeHover
  }
  return colors.edgeFaded
}

function linkLineDash(link) {
  return link.type === 'cites' ? [4, 3] : []
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
    .linkLineDash(linkLineDash)
    .linkWidth((link) => (link.type === 'cites' ? 0.7 : 0.5))
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
      selectedNode.value = node
      const id = String(node.id)
      router.go(id === 'index' ? '/' : `/${id}`)
    })
    .onBackgroundClick(() => {
      selectedNode.value = null
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

function focusSelectedNeighborhood() {
  const node = selectedNode.value || hoverNode.value
  if (!node?.id) return
  setFocus(node.id)
}

function clearFocus() {
  setFocus(null)
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
      // Default to today view when seeds exist; otherwise full graph (minus meta).
      const day = todayShanghai()
      const hasToday = data.nodes.some((node) => {
        if (node.date && String(node.date).slice(0, 10) === day) return true
        if (!node.generated_at) return false
        try {
          return new Intl.DateTimeFormat('en-CA', {
            timeZone: 'Asia/Shanghai',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          }).format(new Date(node.generated_at)) === day
        } catch {
          return false
        }
      })
      todayView.value = hasToday
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
      <template v-if="metaNodesAvailable">
        <button
          type="button"
          :class="{ on: showMetaNodes }"
          :aria-pressed="showMetaNodes"
          :title="showMetaNodes ? '隐藏目录与日志' : '显示目录与日志'"
          @click="showMetaNodes = !showMetaNodes"
        >
          {{ showMetaNodes ? '隐藏目录与日志' : '显示目录与日志' }}
        </button>
        <span class="graph-controls-sep" aria-hidden="true">|</span>
      </template>
      <button
        type="button"
        :class="{ on: pageTypeFilter === 'Source' }"
        :aria-pressed="pageTypeFilter === 'Source'"
        title="仅 Source"
        @click="pageTypeFilter = pageTypeFilter === 'Source' ? 'all' : 'Source'"
      >
        Source
      </button>
      <button
        type="button"
        :class="{ on: pageTypeFilter === 'Topic' }"
        :aria-pressed="pageTypeFilter === 'Topic'"
        title="仅 Topic"
        @click="pageTypeFilter = pageTypeFilter === 'Topic' ? 'all' : 'Topic'"
      >
        Topic
      </button>
      <span class="graph-controls-sep" aria-hidden="true">|</span>
      <button
        type="button"
        :class="{ on: todayView }"
        :aria-pressed="todayView"
        :disabled="!todayAvailable && !todayView"
        :title="todayView ? '显示全图' : '今日新增/更新及相关主题'"
        @click="todayView = !todayView"
      >
        {{ todayView ? '今日视图' : '全图' }}
      </button>
      <template v-if="sourcesAvailable">
        <span class="graph-controls-sep" aria-hidden="true">|</span>
        <button
          type="button"
          :class="{ on: showSources }"
          :aria-pressed="showSources"
          :title="showSources ? 'Hide sources' : 'Show sources'"
          @click="showSources = !showSources"
        >
          {{ showSources ? 'Hide sources' : 'Show sources' }}
        </button>
      </template>
      <span class="graph-controls-sep" aria-hidden="true">|</span>
      <button
        type="button"
        :disabled="!(selectedNode || hoverNode)"
        title="聚焦当前节点邻域"
        @click="focusSelectedNeighborhood"
      >
        聚焦邻域
      </button>
      <button
        v-if="focusNodeId"
        type="button"
        title="清除聚焦"
        @click="clearFocus"
      >
        清除聚焦
      </button>
      <span class="graph-controls-sep" aria-hidden="true">|</span>
      <span class="graph-controls-note">Graph rebuilt on each deploy.</span>
    </div>

    <p v-if="banner" class="graph-banner" :class="banner.mode">{{ banner.text }}</p>

    <div v-if="panelNode" class="graph-tooltip" :style="tooltipStyle">
      <p class="graph-tooltip-title">{{ panelNode.title }}</p>
      <p v-if="panelNode.description" class="graph-tooltip-desc">{{ panelNode.description }}</p>
      <p class="graph-tooltip-kind">{{ categoryOf(panelNode) }}</p>
      <p v-if="panelNode.date" class="graph-tooltip-meta">发布 {{ formatDay(panelNode.date) }}</p>
      <p v-if="panelNode.generated_at" class="graph-tooltip-meta">更新 {{ formatDay(panelNode.generated_at) }}</p>
      <p v-if="panelNode.resource" class="graph-tooltip-link">
        <a :href="panelNode.resource" target="_blank" rel="noopener noreferrer" @click.stop>原文</a>
      </p>
      <div v-if="panelNode.tags && panelNode.tags.length" class="graph-tooltip-tags">
        <span v-for="tag in panelNode.tags.slice(0, 4)" :key="tag">{{ tag }}</span>
      </div>
      <div v-if="panelBacklinks.length" class="graph-tooltip-backlinks">
        <p class="graph-tooltip-meta">反向链接</p>
        <ul>
          <li v-for="link in panelBacklinks.slice(0, 6)" :key="`${link.id}|${link.type}`">
            {{ titleFor(link.id) }}
            <span class="graph-tooltip-edge">{{ link.type === 'cites' ? 'cites' : 'links' }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
