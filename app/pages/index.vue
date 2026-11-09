<template>
  <section>
    <h1>{{ t('welcome') }}</h1>
    <p>{{ t('description') }}</p>
  </section>
    <v-row align="center">
      <v-col cols="12" md="auto">
      <NuxtImg 
      src="/images/new_my_foto.png" 
      loading="lazy" 
      placeholder="blur" 
      width="220"
      alt="Vadim Podolian"
    />
   </v-col>

    <v-col cols="12" md>
      <h4>{{ t('name') }}</h4>
    </v-col>
  </v-row>


   <v-card variant="outlined" rounded="lg" class="ma-4">
    <v-table hover class="nice-table bg-transparent">
      <thead>
        <tr>
          <th id="for-ccc" colspan="3" class="text-center header">git repositories:</th>
        </tr>
        <tr>
          <th class="text-left">{{ t('headers.project') }}</th>
          <th class="text-left">{{ t('headers.description') }}</th>
          <th class="text-right">{{ t('headers.git') }}</th>
        </tr>
      </thead>

      <tbody>
        <AccordionPanel
          v-for="(items, name) in sectionsData"
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

<script setup>
const { t } = useI18n()
//////////////////
//
// Храним имя активной секции ('symfony', 'laravel' или null)
const activeSection = ref('')

const toggle = (section) => {
  activeSection.value = activeSection.value === section ? null : section
}

const phpData = {
  'my-blog': { name: 'My Blog', git: 'https://github.com/user/my-blog', description: 'Личный блог' },
  'shop-api': { name: 'Shop API', git: 'https://github.com/user/shop-api', description: 'API магазина' },
}

let symfonyData = {     // об’єкт
 // 'OpenApi': { name: 'OpenApi', git: 'https://github.com/vadimlvov71/symfony-OpenApi', description: 'Symfony OpenApi' },
  'symfony6_crud_phpunit': { name: 'symfony6_crud_phpunit', git: 'https://github.com/vadimlvov71/symfony6_crud_phpunit', description: 'Symfony 6 CRUD with PHPUnit' },
  'two_symfony7': { name: 'two_symfony7', git: 'https://github.com/vadimlvov71/two_symfony7_commands_api_dockerized', description: 'Two Symfony7 Commands API Dockerized' },
  'symfony6.3_openapi_jwt_phpunit': { name: 'symfony6.3_openapi_jwt_phpunit', git: 'https://github.com/vadimlvov71/symfony6.3_openapi_jwt_phpunit', description: 'Symfony 6.3 OpenApi JWT PHPUnit' }
};
let laravelData = {     // об’єкт
  'file_handled_in_batches': { name: 'File Handled in Batches', git: 'https://github.com/vadimlvov71/file_handled_in_batches_with_laravel', description: 'File Handled in Batches with Laravel' },
};

let nuxtData = {     // об’єкт
  'this_site': { name: 'This Site', git: 'https://github.com/vadimlvov71/nuxt_vue', description: 'Nuxt My Personal Website' },
};

let dddData = {     // об’єкт
  'ddd_laravel': { name: 'ddd_laravel', git: 'https://github.com/vadimlvov71/ddd_laravel', description: 'DDD with Laravel' },
};

const sectionsData = {
  php: phpData,
  symfony: symfonyData,
  laravel: laravelData,
  nuxt: nuxtData,
  ddd: dddData,
}
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
</style>
