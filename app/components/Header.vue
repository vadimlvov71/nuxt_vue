<script setup lang="ts">
// Ссылки через localePath: при strategy 'prefix' все страницы живут под /en/... и /uk/...,
// ссылка на '/technologies' без префикса вела бы на 404.
const { t, locale, locales } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const { isDark, toggle } = useSiteTheme()

const links = [
  { to: '/', label: 'nav.home', icon: 'mdi-home-outline' },
  { to: '/job_experience', label: 'nav.job_experience', icon: 'mdi-briefcase-outline' },
  { to: '/technologies', label: 'nav.technologies', icon: 'mdi-code-tags' },
]
</script>

<template>
  <!-- v-sheet, а не v-app-bar: у app-bar фиксированная высота, а на узком экране меню переносится -->
  <v-sheet tag="header" color="primary" class="header px-4 py-2">
    <nav class="d-flex flex-wrap ga-1">
      <v-btn
        v-for="link in links"
        :key="link.to"
        :to="localePath(link.to)"
        :prepend-icon="link.icon"
        variant="text"
        exact
      >
        {{ t(link.label) }}
      </v-btn>
    </nav>

    <div class="d-flex align-center ga-1">
      <!-- переключатель — ссылки на ту же страницу на другом языке: работают без JS и видны поисковикам -->
      <nav :aria-label="t('nav.language')" class="d-flex ga-1">
        <v-btn
          v-for="loc in locales"
          :key="loc.code"
          :to="switchLocalePath(loc.code)"
          :hreflang="loc.code"
          :lang="loc.code"
          :title="loc.name"
          :aria-current="locale === loc.code ? 'true' : undefined"
          :variant="locale === loc.code ? 'flat' : 'outlined'"
          :color="locale === loc.code ? 'white' : undefined"
          size="small"
          class="text-uppercase"
        >
          {{ loc.code }}
        </v-btn>
      </nav>

      <v-btn
        :icon="isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'"
        :aria-label="t(isDark ? 'nav.theme_light' : 'nav.theme_dark')"
        :title="t(isDark ? 'nav.theme_light' : 'nav.theme_dark')"
        variant="text"
        size="small"
        @click="toggle"
      />
    </div>
  </v-sheet>
</template>

<style scoped>
.header {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
}
</style>
