<script setup>
const route = useRoute()
const { t } = useI18n()
const head = useLocaleHead()
const title = computed(() => t(route.meta.title ?? 'TBD', t('layouts.title'))
);
</script>

<template>
  <footer class="footer">
    <p>© {{ t('footer') }}</p>
  </footer>
</template>
<style scoped>
.footer {
  text-align: center;
  padding: 15px 20px;
  background-color: #f0f0f0;
  color: #333;
  font-size: 14px;
}
</style>
