export type SiteTheme = 'light' | 'dark'

/**
 * Тема сайта, сохранённая в cookie на год.
 * Cookie, а не localStorage: сервер читает её при SSR и сразу отдаёт страницу
 * в нужной теме, без вспышки светлой темы при загрузке.
 */
export function useSiteTheme() {
  const theme = useCookie<SiteTheme>('theme', {
    default: () => 'light',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
  })

  const isDark = computed(() => theme.value === 'dark')
  const toggle = () => {
    theme.value = isDark.value ? 'light' : 'dark'
  }

  return { theme, isDark, toggle }
}
