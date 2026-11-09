<script setup lang="ts">
defineProps<{
  active: string | null
  name: string
  items: Record<string, { git: string; name: string; description: string }>
}>()

const emit = defineEmits<{
  (e: 'toggle', name: string): void
}>()

const { t } = useI18n()
</script>

<template>
  <!-- строка-заголовок секции -->
  <tr class="section-row" @click="emit('toggle', name)">
    <td colspan="3" class="font-weight-bold text-uppercase">
      <v-icon
        icon="mdi-chevron-right"
        size="small"
        class="mr-2 chevron"
        :class="{ 'chevron-open': active === name }"
      />
      {{ name }}
      <span class="text-medium-emphasis text-caption ml-2">
        ({{ Object.keys(items).length }})
      </span>
    </td>
  </tr>

  <!-- строки проектов -->
  <TransitionGroup name="row-fade">
    <template v-if="active === name">
      <tr v-for="(project, key) in items" :key="`${name}-${key}`">
        <td class="font-weight-medium pl-10">
          <v-icon icon="mdi-folder-outline" size="small" class="mr-2" color="primary" />
          {{ project.name }}
        </td>
        <td class="text-medium-emphasis">{{ project.description }}</td>
        <td class="text-right">
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
        </td>
      </tr>
    </template>
  </TransitionGroup>
</template>

<style>
.section-row {
  cursor: pointer;
  background: rgba(var(--v-theme-on-surface), 0.04);
}

.chevron { transition: transform 0.3s; }
.chevron-open { transform: rotate(90deg); }

.row-fade-enter-active,
.row-fade-leave-active {
  transition: opacity 0.4s ease;
}
.row-fade-enter-from,
.row-fade-leave-to {
  opacity: 0;
}

.nice-table td{
  color: #000066!important;
  border-bottom: 1px solid rgb(200, 227, 244);
  
}
</style>