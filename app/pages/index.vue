<template>
  <section>
    <h1>{{ t('welcome') }}</h1>
    <p>{{ t('description') }}</p>
    <NuxtImg 
    src="/images/new_my_foto.png" 
    loading="lazy" 
    placeholder="blur" 
    width="300"
    alt="Vadim Podolian"
  />
  <h4>{{ t('name') }}</h4>
  </section>
  <div class="max-w-md mx-auto p-4 bg-slate-900 rounded-xl border border-slate-800 text-white">
    
   
    
      
    <!-- Секция PHP -->
    <div>
      <div v-for="(items, name) in sectionsData" :key="name">
        <button class="text-white" @click="toggle(String(name))">{{ name }}</button>

        <AccordionPanel :name="String(name)" :active="activeSection" :items="items" />
      </div>
    </div>
  </div>
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
  'my-blog': { name: 'My Blog', git: 'https://github.com/user/my-blog', description: 'Личный блог' },
};
let laravelData = {     // об’єкт
  'my-blog': { name: 'My Blog', git: 'https://github.com/user/my-blog', description: 'Личный блог' },
};

let nuxtData = {     // об’єкт
  'my-blog': { name: 'My Blog', git: 'https://github.com/user/my-blog', description: 'Личный блог' },
};

const sectionsData = {
  php: phpData,
  symfony: symfonyData,
  laravel: laravelData,
  nuxt: nuxtData,
}
</script>

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
