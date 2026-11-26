// Общие типы сервера (server/api) и страниц: в Nuxt 4 папка shared/ видна обоим,
// типы отсюда импортируются автоматически.

export interface Job {
  id: number
  name: string
  description: string
  /** Начало и конец в формате «Month YYYY»; to = 'Present' для текущего места. */
  from: string
  to: string
}

export interface Project {
  name: string
  description: string
  git: string
}

/** Проекты, сгруппированные по разделам (php, symfony, laravel...). */
export type ProjectSections = Record<string, Project[]>
