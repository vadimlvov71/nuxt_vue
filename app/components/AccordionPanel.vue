<script setup lang="ts">
defineProps<{
  active: string | null
  name: string
  items: Record<string, string>   // название проекта -> ссылка на git
}>()
</script>

<template>
  <Transition name="accordion-slow">
  <div v-show="active === name" class="accordion-content">
    <v-table density="compact" hover class="bg-transparent">
      <thead>
        <tr>
          <th class="text-left">Git</th>
          <th class="text-left">Название</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(url, project) in items" :key="project">
          <td>
            <a
              :href="url.git"
              target="_blank"
              rel="noopener noreferrer"
              class="text-primary text-decoration-none"
            >
              {{ url.name }}
            </a>
          </td>
          <td>{{ url.description }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</Transition>
</template>

<style>
.accordion-content { overflow: hidden; }

.accordion-slow-enter-active,
.accordion-slow-leave-active {
  transition: max-height 0.5s ease, opacity 0.5s ease;
  max-height: 500px;
}

.accordion-slow-enter-from,
.accordion-slow-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>