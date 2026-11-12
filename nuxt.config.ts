// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Site',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  server: {
    host: '0.0.0.0',
    port: 3000
  },
  ignore: ['**/*.test.*', 'docs/**'],
    vite: {
      server: { watch: { ignored: ['**/node_modules/**', '**/.git/**'] } }
    },
  //layout: 'default' , // например, 'custom' если есть app/layouts/custom.vue
  typescript: { typeCheck: false },
  modules: ['@nuxtjs/i18n', '@nuxt/image', 'vuetify-nuxt-module'],
  i18n: {
    baseUrl: 'http://localhost:3000/',
   /* locales: [
      { code: "en", file: "en.json" },
      { code: 'ru', file: 'ru.json' },
      { code: 'uk', file: 'uk.json' },
    ],*/
    locales: [
        {
            code: 'en',
            name: 'English',
            files: [
                'en/common.json',
                'en/home.json',
                'en/job_experience.json',
               // 'en/contacts.json',
               // 'en/services.json',
               // 'en/seo.json'
            ]
        },
        {
            code: 'uk',
            name: 'Українська',
            files: [
                'uk/common.json',
                'uk/home.json', 
                'uk/job_experience.json',
               // 'uk/contacts.json',
               // 'uk/services.json',
               // 'uk/seo.json'
            ]
        }
    ],
    lazy: true,
    langDir: 'locales/', // без слэша в конце
    defaultLocale: 'en',
    strategy: 'prefix', // Adds /uk/ to URLs, but keeps root /en/ clean
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
    /*vueI18n: { 
      legacy: false, fallbackLocale: 'en'
    },*/
  },
  vuetify: {
      moduleOptions: {
        // можно оставить пустым
      },
      vuetifyOptions: {
        theme: {
          defaultTheme: 'dark',
        },
      },
  },
  // Если используете i18n — настройте здесь

  //css: ['../assets/styles/global.css'],
  //Здесь ~ — алиас, который в твоей структуре Nuxt 4 указывает на директорию app/.
  css: ['~/assets/styles/global.css'],
  components: true,
  
  build: {
    // параметры сборки, если нужны
  }
})