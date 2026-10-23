import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import Layout from './Layout.vue'
import GraphViewer from './GraphViewer.vue'
import './graph.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('GraphViewer', GraphViewer)
  },
} satisfies Theme
