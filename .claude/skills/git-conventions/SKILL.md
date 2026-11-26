---
name: git-conventions
description: Правила Git персонального сайта на Nuxt 4: имена веток, сообщения коммитов (Conventional Commits), pull request, удаление веток. Использовать перед началом любой новой задачи (предложить ветку), перед каждым коммитом (предложить сообщение), при подготовке PR и при вопросах о ветках, конфликтах и истории.
---

# Правила Git

Репозиторий: `vadimlvov71/nuxt_vue`, основная ветка `main`.

## Главное: предлагать, а не делать без спроса

- Коммит, push, создание PR, удаление веток — **только по просьбе пользователя**. Push с этой машины обычно не проходит (нет учётных данных GitHub в оболочке): пушит пользователь.
- **Предлагать готовые имена и сообщения нужно всегда**, не дожидаясь вопроса:
  - получив новую задачу на `main` или на ветке другой задачи — предложить ветку и команду её создания;
  - закончив изменения — предложить сообщение коммита (или разбивку на несколько, с файлами для `git add`) и заголовок с описанием PR.
- Формат в конце ответа:
  ```
  Ветка:  fix/locale-aware-nav-links
  Коммит: fix(i18n): use localized paths in header navigation
  ```

## Ветки

`<тип>/<kebab-case-описание>`, от свежего `origin/main`:

| Тип | Когда | Пример |
|---|---|---|
| `feature/` | новая страница или функция | `feature/contacts-page` |
| `fix/` | исправление ошибки | `fix/uk-html-lang` |
| `refactor/` | без изменения поведения | `refactor/projects-data-to-api` |
| `style/` | только вид (CSS, Vuetify-тема) | `style/dark-theme-colors` |
| `docs/` | README, `docs/`, `.claude/skills` | `docs/readme-quick-start` |
| `ci/` | `.github/`, линтер, проверки | `ci/build-and-lint` |
| `chore/` | зависимости, конфиги | `chore/update-nuxt` |

Создание ветки — **без связи с `main`**, иначе `git push` уйдёт в `main`:

```bash
git fetch origin
git checkout -b <ветка> origin/main
git branch --unset-upstream
# первый push: git push -u origin <ветка>
```

Если задача не совпадает с названием текущей ветки — сказать об этом и предложить новую ветку.

## Сообщения коммитов

```
<type>(<scope>): <imperative summary, English, ≤ 72 chars, no period>

<body: why, if not obvious>
```

- type: `feat`, `fix`, `refactor`, `perf`, `style`, `docs`, `test`, `ci`, `chore`.
- scope (по затронутой части): `i18n` (переводы, переключение языка), `home`, `jobs` (страница и `server/api/jobs.ts`), `technologies`, `layout` (Header, Footer, layouts), `seo` (head, meta, hreflang), `ui` (общие компоненты, тема), `api` (`server/`), `deps`, `readme`, `skills`. Много частей — без scope.
- Перевод на все языки — в том же коммите, что и код, который его использует.
- Нельзя: `fix`, `update`, `wip`, `README fix`, две задачи через «and».

Подбор типа по файлам: только `*.md`/`docs/`/`.claude/` → `docs`; только `*.css`/`<style>` → `style`; только `package*.json` → `chore(deps)`; только `i18n/locales/*` без кода → `fix(i18n)` или `feat(i18n)`.

## Перед push и PR

1. `npm run build` проходит без ошибок (предупреждения — посмотреть, новые не добавлять).
2. Если менялись тексты: ключи есть во всех языках (`i18n/locales/en/*` и `uk/*`).
3. `git fetch origin && git merge origin/main` — конфликт разрешается локально, а не на GitHub.
4. Заголовок PR — в формате коммита; описание: что сделано, как проверить (какие страницы открыть, на каком языке).

## После слияния PR

```bash
git checkout main && git pull
git branch -d <ветка>      # -d: не даст удалить несмёрженное
```

`main` не переписывать (`push --force`, `rebase` опубликованных коммитов). В своей ветке до слияния — можно (`git commit --fixup` + `git rebase -i --autosquash origin/main`).
