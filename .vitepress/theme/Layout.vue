<script setup>
import DefaultTheme from 'vitepress/theme'
import { useRoute, useData } from 'vitepress'
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import HomePage from './HomePage.vue'
import {
  READING_MODES,
  applyReadingMode,
  loadReadingMode,
  saveReadingMode,
} from './readingMode.js'

const route = useRoute()
const { page } = useData()

function pageId(path) {
  let id = String(path || '/').replace(/\.html$/, '')
  if (id.length > 1 && id.endsWith('/')) id = id.slice(0, -1)
  id = id.replace(/^\//, '')
  return id === '' ? 'index' : id
}

const current = computed(() => pageId(route.path))
const isHome = computed(() => current.value === 'index')
const showGraphLink = computed(() => current.value !== 'graph' && !isHome.value)
const graphHref = computed(() => `/graph?focus=${encodeURIComponent(current.value)}`)

const readingMode = ref('both')
const showReadingToggle = computed(() => {
  if (isHome.value || current.value === 'graph') return false
  const rel = page.value?.relativePath || ''
  return /^(sources\/articles|topics)\//.test(rel)
})

function setMode(mode) {
  if (!READING_MODES.includes(mode)) return
  readingMode.value = mode
  saveReadingMode(mode)
  applyToDoc()
}

function applyToDoc() {
  const root = document.querySelector('.vp-doc')
  if (!root) return
  applyReadingMode(root, readingMode.value)
}

onMounted(() => {
  readingMode.value = loadReadingMode()
  nextTick(applyToDoc)
})

watch(
  () => route.path,
  () => {
    nextTick(() => {
      applyToDoc()
    })
  },
)
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-before>
      <HomePage v-if="isHome" />
      <div v-if="showReadingToggle" class="reading-toggle" role="group" aria-label="阅读语言">
        <button
          type="button"
          :class="{ 'is-active': readingMode === 'zh' }"
          @click="setMode('zh')"
        >
          中文
        </button>
        <button
          type="button"
          :class="{ 'is-active': readingMode === 'en' }"
          @click="setMode('en')"
        >
          English
        </button>
        <button
          type="button"
          :class="{ 'is-active': readingMode === 'both' }"
          @click="setMode('both')"
        >
          对照
        </button>
      </div>
    </template>
    <template #doc-after>
      <p v-if="showGraphLink" class="open-in-graph">
        <a :href="graphHref">Open in graph</a>
      </p>
    </template>
  </DefaultTheme.Layout>
</template>
