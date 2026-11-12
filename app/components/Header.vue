<template>
  <header class="header">
    <nav>
      <NuxtLink to="/">{{ t('nav.home') }}</NuxtLink>
      <NuxtLink to="/job_experience">{{ t('nav.job_experience') }}</NuxtLink>
      <NuxtLink to="/technologies">{{ t('nav.technologies') }}</NuxtLink>
    </nav>
    <div class="lang-switch">
      <button v-for="loc in locales" :key="loc.code" @click="setLocale (loc.code)" :disabled="locale === loc.code">
        {{ loc.code }}
      </button>
    </div>
  </header>
</template>

<script setup>

import { useI18n } from 'vue-i18n'
//import { useI18n } from '#i18n'
import { useRouter } from 'vue-router'

//const switchLocalePath = useSwitchLocalePath()
const { t, setLocale, locale, locales } = useI18n()

function changeLocale(lang) {
  console.log('lang ' + lang);
  console.log('locale.value ' + locale.value);
  if (locale.value === lang) return
  // Изменяем язык i18n
  locale.value = lang
  // Переходим по тому же маршруту, но с другим префиксом
  const newPath = switchLocalePath(lang);
  console.log('newPath ' + newPath);
  if (newPath) {
    locale.value = lang
    window.location.href = newPath  // переход по новому URL
     console.log('window.location.href ' + newPath);
  }
}
</script>

<style scoped>
.header {
  background-color: #007acc;
  padding: 15px 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav a {
  color: white;
  margin-right: 15px;
  text-decoration: none;
  font-weight: 600;
}

nav a:hover {
  text-decoration: underline;
}

.lang-switch button {
  margin-left: 10px;
  background: transparent;
  border: 1px solid white;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
}

.lang-switch button:disabled {
  opacity: 0.6;
  cursor: default;
}
</style>
