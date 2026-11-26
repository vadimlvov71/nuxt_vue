<template>
  <!-- v-app — корень Vuetify: фон страницы и цвета всех компонентов берутся из темы -->
  <v-app :theme="theme">
    <Header />
    <v-main>
      <v-container class="page py-8">
        <slot />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { theme } = useSiteTheme()

// lang/dir у <html>, ссылки hreflang на другие языки и og:locale.
// Результат нужно передать в useHead: сам по себе useLocaleHead ничего не выводит.
const i18nHead = useLocaleHead()

useHead(() => ({
  htmlAttrs: i18nHead.value.htmlAttrs,
  link: i18nHead.value.link,
  meta: i18nHead.value.meta,
}))

// значения по умолчанию; страница может переопределить своими useSeoMeta
useSeoMeta({
  title: () => t('seo.title'),
  description: () => t('seo.description'),
  ogTitle: () => t('seo.title'),
  ogDescription: () => t('seo.description'),
})
</script>

<style scoped>
.page {
  max-width: 960px;
}
</style>
