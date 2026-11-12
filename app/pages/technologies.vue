<template>
  <section>
    <h1>{{ t('about.title') }}</h1>
    <p>{{ t('about.content') }}</p>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
h1 {
  color: #007acc;
  margin-bottom: 10px;
}
p {
  font-size: 18px;
  line-height: 1.6;
}
</style>
