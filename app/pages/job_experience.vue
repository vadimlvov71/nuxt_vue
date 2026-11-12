<script setup lang="ts">
const { t } = useI18n()
const { data: jobs, status, error, refresh } = await useFetch('/api/jobs')
useSeoMeta({
  title:  t('job_experience') ,
  description: t('job_experience_description') ,
  ogTitle: t('job_experience') ,
})

</script>

<template>
  <h3>{{ t('job_experience') }}:</h3>
  <div>
    <p v-if="status === 'pending'">{{ t('data_is_loaded') }}...</p>
    <p v-else-if="error">{{ t('error') }}: {{ error.message }}</p>
    <ul v-else>
      <li v-for="j in jobs" :key="j.id">
        <h3>{{ j.name }}</h3>
        <p>{{ j.description }}</p>
        <div class="header-color">{{ j.from }} - {{ j.to }}</div>
      </li>
    </ul>
    <button @click="refresh()">Обновить</button>
  </div>
</template>