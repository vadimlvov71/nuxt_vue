<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: () => t('technologies.title'),
  description: () => t('technologies.description'),
  ogTitle: () => t('technologies.title'),
  ogDescription: () => t('technologies.description'),
})

// Названия технологий одинаковы на всех языках, переводятся только заголовки групп.
// Ключ группы = ключ перевода technologies.groups.<key>.
const groups: { key: string; icon: string; items: string[] }[] = [
  { key: 'backend', icon: 'mdi-language-php', items: ['PHP 8.x', 'Laravel 10–12', 'Symfony 6–7', 'Slim', 'REST API', 'OpenAPI', 'JWT', 'DDD'] },
  { key: 'databases', icon: 'mdi-database', items: ['MySQL 5.7–8', 'Redis', 'Elasticsearch', 'AWS S3'] },
  { key: 'queues', icon: 'mdi-swap-horizontal', items: ['RabbitMQ', 'Laravel Queues', 'Laravel Horizon', 'WebSocket (Laravel Reverb)'] },
  { key: 'frontend', icon: 'mdi-vuejs', items: ['Vue 2 / 3', 'Nuxt 4', 'React', 'Vuetify', 'Tailwind CSS', 'TypeScript'] },
  { key: 'devops', icon: 'mdi-docker', items: ['Docker', 'Docker Compose', 'Nginx', 'AWS', 'GitHub Actions', 'Git'] },
  { key: 'quality', icon: 'mdi-check-decagram', items: ['PHPUnit', 'PHPStan / Larastan', 'Laravel Pint (PSR-12)'] },
]
</script>

<template>
  <section>
    <h1>{{ t('technologies.title') }}</h1>
    <p>{{ t('technologies.intro') }}</p>

    <v-row class="mt-2">
      <v-col v-for="group in groups" :key="group.key" cols="12" sm="6">
        <v-card variant="outlined" rounded="lg" class="h-100">
          <v-card-title class="d-flex align-center">
            <v-icon :icon="group.icon" class="mr-2" color="primary" />
            <h2 class="text-subtitle-1 font-weight-bold">{{ t(`technologies.groups.${group.key}`) }}</h2>
          </v-card-title>
          <v-card-text>
            <v-chip v-for="item in group.items" :key="item" class="ma-1" size="small" variant="tonal" color="primary">
              {{ item }}
            </v-chip>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

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
