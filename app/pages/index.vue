<script setup lang="ts">
const { t } = useI18n()

const { data: sections } = await useFetch<ProjectSections>('/api/projects', { default: () => ({}) })

// подпись под фото появляется плавно после загрузки страницы в браузере
const show = ref(false)
onMounted(() => {
  show.value = true
})
</script>

<template>
  <section class="mb-8">
    <h1 class="text-h4 text-primary mb-2">{{ t('home.welcome') }}</h1>
    <p class="text-body-1">{{ t('home.description') }}</p>
  </section>

  <v-row align="center" class="mb-8">
    <v-col cols="12" sm="auto" class="text-center">
      <NuxtImg
        src="/images/new_my_foto.png"
        loading="lazy"
        placeholder="blur"
        width="220"
        class="photo"
        :alt="t('home.photo_alt')"
      />
      <Transition name="fade-slow" appear>
        <div v-if="show" class="text-caption text-success mt-1">{{ t('home.lazy_load') }}</div>
      </Transition>
    </v-col>

    <v-col cols="12" sm>
      <h2 class="text-h5 mb-3">{{ t('home.name') }}</h2>
      <div class="d-flex flex-wrap ga-2">
        <v-chip prepend-icon="mdi-language-php" color="primary" variant="tonal">{{ t('home.skills.php') }}</v-chip>
        <v-chip prepend-icon="mdi-database" color="primary" variant="tonal">{{ t('home.skills.mysql') }}</v-chip>
        <v-chip prepend-icon="mdi-vuejs" color="primary" variant="tonal">{{ t('home.skills.js') }}</v-chip>
      </div>
    </v-col>
  </v-row>

  <h2 class="text-h6 mb-3">{{ t('home.repositories') }}</h2>
  <!-- готовый аккордеон Vuetify: клавиатура, aria-expanded и анимация из коробки -->
  <v-expansion-panels variant="accordion">
    <v-expansion-panel v-for="(items, name) in sections" :key="name">
      <v-expansion-panel-title>
        <span class="font-weight-bold text-uppercase">{{ name }}</span>
        <span class="text-medium-emphasis text-caption ml-2">({{ items.length }})</span>
      </v-expansion-panel-title>

      <v-expansion-panel-text>
        <v-list density="comfortable" bg-color="transparent">
          <v-list-item
            v-for="project in items"
            :key="project.git"
            :title="project.name"
            :subtitle="project.description"
            prepend-icon="mdi-folder-outline"
          >
            <template #append>
              <v-btn
                :href="project.git"
                target="_blank"
                rel="noopener noreferrer"
                variant="tonal"
                color="primary"
                size="small"
                prepend-icon="mdi-github"
              >
                {{ t('button.open') }}
              </v-btn>
            </template>
          </v-list-item>
        </v-list>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<style scoped>
.photo {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
}

.fade-slow-enter-active {
  transition: opacity 2s ease;
}

.fade-slow-enter-from {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .fade-slow-enter-active {
    transition: none;
  }
}
</style>
