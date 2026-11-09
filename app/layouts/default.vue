<template>
  <div class="layout">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
const { t } = useI18n()

const title = computed(() => t('seo.title'))
const description = computed(() => t('seo.description'))

useHead({
  title,
  meta: [
    {
      name: 'description',
      content: description
    }
  ]
})

useLocaleHead()
</script>