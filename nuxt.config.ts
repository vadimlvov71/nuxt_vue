// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n', '@nuxt/image', 'vuetify-nuxt-module'],

  // Заголовок, description, lang и hreflang задаёт layouts/default.vue (с учётом языка).
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  devServer: {
    host: '0.0.0.0',
    port: 3000,
  },

  ignore: ['**/*.test.*', 'docs/**'],

  vite: {
    server: { watch: { ignored: ['**/node_modules/**', '**/.git/**'] } },
  },

  typescript: { typeCheck: false },

  i18n: {
    // для canonical и hreflang; на проде задаётся переменной NUXT_PUBLIC_I18N_BASE_URL
    baseUrl: 'http://localhost:3000',
    // файлы в i18n/locales/<code>/; новый файл перевода — добавить в files у каждого языка
    langDir: 'locales',
    locales: [
      {
        code: 'en',
        name: 'English',
        // BCP 47: из него i18n ставит <html lang> и ссылки hreflang
        language: 'en-US',
        files: ['en/common.json', 'en/home.json', 'en/job_experience.json', 'en/technologies.json'],
      },
      {
        code: 'uk',
        name: 'Українська',
        language: 'uk-UA',
        files: ['uk/common.json', 'uk/home.json', 'uk/job_experience.json', 'uk/technologies.json'],
      },
    ],
    defaultLocale: 'en',
    // все страницы с префиксом языка: /en/..., /uk/...
    strategy: 'prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },

  // Единственный источник цветов сайта: в компонентах цвета берутся из темы
  // (color="primary", rgb(var(--v-theme-...))), а не задаются вручную.
  // Какая тема включена, решает cookie (composables/useSiteTheme.ts).
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'light',
        themes: {
          light: {
            dark: false,
            colors: {
              primary: '#007acc',
              secondary: '#0f4c75',
              background: '#f5f7fa',
              surface: '#ffffff',
              success: '#16a34a',
            },
          },
          dark: {
            dark: true,
            colors: {
              primary: '#4fb3ff',
              secondary: '#9ccfff',
              background: '#0f172a',
              surface: '#1e293b',
              success: '#22c55e',
            },
          },
        },
      },
    },
  },
})
