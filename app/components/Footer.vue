<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <v-footer class="justify-center text-body-2 text-medium-emphasis py-4" border="t">
    {{ t('footer', { year: new Date().getFullYear() }) }}
  </v-footer>
</template>
