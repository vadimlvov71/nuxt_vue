<template>
  <div class="layout">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

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
