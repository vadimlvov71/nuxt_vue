<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <footer class="footer">
    <p>{{ t('footer', { year: new Date().getFullYear() }) }}</p>
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
