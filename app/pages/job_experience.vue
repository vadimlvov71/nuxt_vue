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
  <h1>{{ t('jobs.title') }}</h1>
  <div>
    <p v-if="status === 'pending'">{{ t('status.loading') }}…</p>
    <p v-else-if="error">{{ t('status.error') }}: {{ error.message }}</p>
    <ul v-else>
      <li v-for="j in jobs" :key="j.id">
        <h3>{{ j.name }}</h3>
        <p>{{ j.description }}</p>
        <div class="header-color">{{ j.from }} - {{ j.to }}</div>
      </li>
    </ul>
    <button @click="refresh()">{{ t('button.refresh') }}</button>
  </div>
</template>