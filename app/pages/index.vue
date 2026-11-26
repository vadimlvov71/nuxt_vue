<template>
  <section>
    <h1>{{ t('home.welcome') }}</h1>
    <p>{{ t('home.description') }}</p>
  </section>
    <v-row align="center">
      <v-col cols="12" md="auto">
      <NuxtImg 
      src="/images/new_my_foto.png" 
      loading="lazy" 
      placeholder="blur" 
      width="220"
      :alt="t('home.photo_alt')"
    />
   </v-col>

    <v-col cols="12" md>
      <h4>{{ t('home.name') }}</h4>
      <p>{{ t('home.skills.php') }}</p>
      <p>{{ t('home.skills.mysql') }}</p>
      <p>{{ t('home.skills.js') }}</p>
    </v-col>
  </v-row>

  <Transition name="fade-slow" appear>
    <div v-if="show" class="badge">{{ t('home.lazy_load') }} </div>
  </Transition>
   <v-card variant="outlined" rounded="lg" class="ma-4">
    <v-table hover class="nice-table bg-transparent">
      <thead>
        <tr>
          <th id="for-ccc" colspan="3" class="text-center header">{{ t('home.repositories') }}</th>
        </tr>
        <tr>
          <th class="text-left">{{ t('home.table.project') }}</th>
          <th class="text-left">{{ t('home.table.description') }}</th>
          <th class="text-right">{{ t('home.table.git') }}</th>
        </tr>
      </thead>

      <tbody>
        <AccordionPanel
          v-for="(items, name) in sections"
          :key="name"
          :name="String(name)"
          :active="activeSection"
          :items="items"
          @toggle="toggle"
        />
      </tbody>
    </v-table>
  </v-card>
</template>

<script setup lang="ts">
const { t } = useI18n()

const { data: sections } = await useFetch<ProjectSections>('/api/projects', { default: () => ({}) })

// открыта одна секция таблицы (php, symfony...) или ни одной
const activeSection = ref<string | null>(null)
const toggle = (section: string) => {
  activeSection.value = activeSection.value === section ? null : section
}

// подпись под фото появляется плавно после загрузки страницы в браузере
const show = ref(false)
onMounted(() => {
  show.value = true
})
</script>

<style scoped>
.nice-table thead th {
  text-transform: uppercase;
  font-size: 0.75rem !important;
  letter-spacing: 0.06em;
  font-weight: 600 !important;
  background: rgba(var(--v-theme-primary), 0.08) !important;
}

h1 {
  color: #007acc;
  margin-bottom: 10px;
}
p {
  font-size: 18px;
  line-height: 1.6;
}
#for-ccc  {
  background: #fff !important;
  font-weight: bold;
  text-transform: uppercase;
}
.badge {
  width: 434px;
  padding: 0px 0;
  background-color: #22c55e;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  font-weight: 600;
}

/* Анимация появления: 2 секунды */
.fade-slow-enter-active {
  transition: opacity 2s ease;
}
.fade-slow-enter-from {
  opacity: 0;
}
.fade-slow-enter-to {
  opacity: 1;
}
</style>
