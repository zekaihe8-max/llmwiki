<script setup>
import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'
import { computed } from 'vue'

const route = useRoute()

function pageId(path) {
  let id = String(path || '/').replace(/\.html$/, '')
  if (id.length > 1 && id.endsWith('/')) id = id.slice(0, -1)
  id = id.replace(/^\//, '')
  return id === '' ? 'index' : id
}

const page = computed(() => pageId(route.path))
const showGraphLink = computed(() => page.value !== 'graph')
const graphHref = computed(() => `/graph?focus=${encodeURIComponent(page.value)}`)
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-after>
      <p v-if="showGraphLink" class="open-in-graph">
        <a :href="graphHref">Open in graph</a>
      </p>
    </template>
  </DefaultTheme.Layout>
</template>
