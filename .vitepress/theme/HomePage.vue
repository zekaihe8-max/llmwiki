<script setup>
import { onMounted, ref } from 'vue'

const data = ref(null)
const error = ref(null)

onMounted(async () => {
  try {
    const res = await fetch('/home-data.json')
    if (!res.ok) throw new Error(`home-data.json HTTP ${res.status}`)
    data.value = await res.json()
  } catch (err) {
    error.value = err?.message || String(err)
  }
})

function kindLabel(kind) {
  return kind === 'article' ? '文章' : '主题'
}

function formatWikiTime(iso) {
  if (!iso) return ''
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return String(iso).slice(0, 16)
  return new Intl.DateTimeFormat('zh-CN', {
    timeZone: 'Asia/Shanghai',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(d)
}
</script>

<template>
  <div class="home-page">
    <header class="home-hero">
      <p class="home-brand">Hezekai Wiki</p>
      <h1 class="home-subtitle">持续更新的 AI 与 Agent 知识库</h1>
      <p class="home-blurb">
        从每日简报与公开资料中整理来源、比较观点，让零散信息逐步形成相互关联的知识。
      </p>
      <div class="home-ctas">
        <a class="home-cta home-cta-primary" href="/topics/">浏览主题</a>
        <a class="home-cta" href="/log">查看最新更新</a>
        <a class="home-cta" href="/graph">探索图谱</a>
      </div>
    </header>

    <p v-if="error" class="home-error">首页数据加载失败：{{ error }}</p>

    <template v-if="data">
      <section class="home-section">
        <h2>最近更新</h2>
        <p class="home-section-note">按 Wiki 更新时间（<code>generated.at</code>），不是原文发表日。</p>
        <ul class="home-list">
          <li v-for="item in data.recent" :key="item.href">
            <a :href="item.href">{{ item.title }}</a>
            <span class="home-meta">
              <span class="home-kind">{{ kindLabel(item.kind) }}</span>
              <time v-if="item.wikiUpdatedAt" :datetime="item.wikiUpdatedAt">
                Wiki {{ formatWikiTime(item.wikiUpdatedAt) }}
              </time>
              <span v-if="item.publishedAt" class="home-published">原文 {{ item.publishedAt }}</span>
            </span>
            <p v-if="item.description" class="home-desc">{{ item.description }}</p>
          </li>
        </ul>
      </section>

      <section class="home-section">
        <h2>主题导读</h2>
        <p class="home-section-note">稳定阅读入口（策展列表；缺页时按关联来源数补齐）。</p>
        <ul class="home-list">
          <li v-for="item in data.topicGuide" :key="item.href">
            <a :href="item.href">{{ item.title }}</a>
            <span v-if="item.titleEn" class="home-en">{{ item.titleEn }}</span>
            <p v-if="item.description" class="home-desc">{{ item.description }}</p>
          </li>
        </ul>
        <p class="home-more"><a href="/topics/">全部主题 →</a></p>
      </section>

      <section class="home-section">
        <h2>每日简报</h2>
        <template v-if="data.digest">
          <p>
            <a :href="data.digest.href">{{ data.digest.title }}</a>
            <span v-if="data.digest.date" class="home-meta"> · {{ data.digest.date }}</span>
          </p>
          <p v-if="data.digest.description" class="home-desc">{{ data.digest.description }}</p>
        </template>
        <p v-else class="home-desc">暂无简报。</p>
        <p class="home-more"><a :href="data.digestArchiveHref">简报归档 →</a></p>
      </section>

      <section class="home-section">
        <h2>关于本站</h2>
        <p class="home-desc">
          方法、来源边界与维护说明见
          <a :href="data.aboutHref">关于与维护</a>。
          当前收录 {{ data.counts.topics }} 个主题、{{ data.counts.articles }} 篇文章、{{ data.counts.digests }} 份简报。
        </p>
      </section>
    </template>
  </div>
</template>

<style scoped>
.home-page {
  max-width: 42rem;
  margin: 0 auto;
  padding: 0.5rem 0 2.5rem;
  color: var(--vp-c-text-1);
}

.home-hero {
  padding: 1.75rem 0 2rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.home-brand {
  margin: 0 0 0.75rem;
  font-family: "Iowan Old Style", "Palatino Linotype", Palatino, "Songti SC", serif;
  font-size: 2.15rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  line-height: 1.15;
}

.home-subtitle {
  margin: 0 0 0.85rem;
  font-size: 1.15rem;
  font-weight: 500;
  line-height: 1.45;
  color: var(--vp-c-text-1);
}

.home-blurb {
  margin: 0 0 1.35rem;
  font-size: 0.98rem;
  line-height: 1.65;
  color: var(--vp-c-text-2);
}

.home-ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
}

.home-cta {
  display: inline-block;
  padding: 0.45rem 0.95rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  font-size: 0.92rem;
  text-decoration: none;
  color: var(--vp-c-text-1);
  transition: border-color 0.15s ease, background-color 0.15s ease;
}

.home-cta:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.home-cta-primary {
  background: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  color: #fff;
}

.home-cta-primary:hover {
  background: var(--vp-c-brand-2);
  border-color: var(--vp-c-brand-2);
  color: #fff;
}

.home-section {
  padding: 1.75rem 0 0.25rem;
}

.home-section h2 {
  margin: 0 0 0.35rem;
  font-size: 1.05rem;
  font-weight: 600;
  border: none;
  padding: 0;
}

.home-section-note,
.home-desc {
  margin: 0.25rem 0 0.75rem;
  font-size: 0.88rem;
  line-height: 1.55;
  color: var(--vp-c-text-2);
}

.home-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.home-list li {
  padding: 0.7rem 0;
  border-top: 1px solid var(--vp-c-divider-light, var(--vp-c-divider));
}

.home-list a {
  font-weight: 500;
  text-decoration: none;
}

.home-list a:hover {
  text-decoration: underline;
}

.home-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem 0.75rem;
  margin-top: 0.2rem;
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
}

.home-kind {
  text-transform: none;
  letter-spacing: 0.02em;
}

.home-en {
  display: block;
  margin-top: 0.15rem;
  font-size: 0.82rem;
  color: var(--vp-c-text-3);
  font-style: italic;
}

.home-more {
  margin: 0.5rem 0 0;
  font-size: 0.88rem;
}

.home-error {
  color: var(--vp-c-danger-1, #b33);
  font-size: 0.9rem;
}

@media (max-width: 640px) {
  .home-brand {
    font-size: 1.75rem;
  }

  .home-ctas {
    flex-direction: column;
  }

  .home-cta {
    text-align: center;
  }
}
</style>
