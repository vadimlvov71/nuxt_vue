<script setup lang="ts">
const { t } = useI18n()
const { data: jobs, status, error, refresh } = await useFetch<Job[]>('/api/jobs')

// функции, а не строки: иначе после переключения языка заголовок остался бы прежним
useSeoMeta({
  title: () => t('jobs.title'),
  description: () => t('jobs.description'),
  ogTitle: () => t('jobs.title'),
  ogDescription: () => t('jobs.description'),
})
</script>

<template>
  <div class="d-flex align-center justify-space-between flex-wrap ga-2 mb-6">
    <h1 class="text-h4 text-primary">{{ t('jobs.title') }}</h1>
    <v-btn
      prepend-icon="mdi-refresh"
      variant="tonal"
      color="primary"
      :loading="status === 'pending'"
      @click="refresh()"
    >
      {{ t('button.refresh') }}
    </v-btn>
  </div>

  <v-progress-linear v-if="status === 'pending' && !jobs" indeterminate color="primary" :aria-label="t('status.loading')" />

  <v-alert v-else-if="error" type="error" variant="tonal">
    {{ t('status.error') }}: {{ error.message }}
  </v-alert>

  <v-timeline v-else side="end" align="start" density="compact" truncate-line="both">
    <v-timeline-item v-for="job in jobs" :key="job.id" dot-color="primary" size="small">
      <div class="text-caption text-medium-emphasis">{{ job.from }} — {{ job.to }}</div>
      <h2 class="text-h6">{{ job.name }}</h2>
      <p class="text-body-2">{{ job.description }}</p>
    </v-timeline-item>
  </v-timeline>
</template>
