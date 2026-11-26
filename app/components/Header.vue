<script setup lang="ts">
// Ссылки через NuxtLinkLocale: при strategy 'prefix' все страницы живут под /en/... и /uk/...,
// обычный NuxtLink на '/technologies' вёл бы на 404.
const { t, locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const links = [
  { to: '/', label: 'nav.home' },
  { to: '/job_experience', label: 'nav.job_experience' },
  { to: '/technologies', label: 'nav.technologies' },
]
</script>

<template>
  <header class="header">
    <nav>
      <NuxtLinkLocale v-for="link in links" :key="link.to" :to="link.to" active-class="active" exact-active-class="active">
        {{ t(link.label) }}
      </NuxtLinkLocale>
    </nav>

    <!-- переключатель — обычные ссылки на ту же страницу на другом языке: работают без JS и видны поисковикам -->
    <nav class="lang-switch" :aria-label="t('nav.language')">
      <NuxtLink
        v-for="loc in locales"
        :key="loc.code"
        :to="switchLocalePath(loc.code)"
        :hreflang="loc.code"
        :lang="loc.code"
        :title="loc.name"
        :aria-current="locale === loc.code ? 'true' : undefined"
        :class="{ current: locale === loc.code }"
      >
        {{ loc.code }}
      </NuxtLink>
    </nav>
  </header>
</template>

<style scoped>
.header {
  background-color: #007acc;
  padding: 15px 20px;
  color: white;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
}

nav a {
  color: white;
  margin-right: 15px;
  text-decoration: none;
  font-weight: 600;
}

nav a:hover,
nav a.active {
  text-decoration: underline;
}

.lang-switch a {
  margin: 0 0 0 10px;
  border: 1px solid white;
  padding: 5px 10px;
  text-transform: uppercase;
}

.lang-switch a.current {
  opacity: 0.6;
  pointer-events: none;
}
</style>
