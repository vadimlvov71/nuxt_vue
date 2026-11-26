// Открытые репозитории для таблицы на главной, по разделам.
const projects: ProjectSections = {
  php: [
    { name: 'generator_recursion', description: 'Recursion with generators', git: 'https://github.com/vadimlvov71/generator_recursion' },
    { name: 'currency_commission API', description: 'Patterns: Strategy and Factory', git: 'https://github.com/vadimlvov71/currency_commission' },
  ],
  symfony: [
    { name: 'symfony6_crud_phpunit', description: 'Symfony 6 CRUD with PHPUnit', git: 'https://github.com/vadimlvov71/symfony6_crud_phpunit' },
    { name: 'two_symfony7', description: 'Two Symfony 7 commands, API, Dockerized', git: 'https://github.com/vadimlvov71/two_symfony7_commands_api_dockerized' },
    { name: 'symfony6.3_openapi_jwt_phpunit', description: 'Symfony 6.3, OpenAPI, JWT, PHPUnit', git: 'https://github.com/vadimlvov71/symfony6.3_openapi_jwt_phpunit' },
  ],
  laravel: [
    { name: 'File Handled in Batches', description: 'File handled in batches with Laravel, Horizon, Redis, queues', git: 'https://github.com/vadimlvov71/file_handled_in_batches_with_laravel' },
    { name: 'Drivers Trips Laravel 10', description: 'Laravel 10 driver trips with feature tests', git: 'https://github.com/vadimlvov71/drivers_trips_laravel10' },
  ],
  nuxt: [
    { name: 'This site', description: 'My personal website on Nuxt 4', git: 'https://github.com/vadimlvov71/nuxt_vue' },
  ],
  ddd: [
    { name: 'ddd_laravel', description: 'DDD with Laravel', git: 'https://github.com/vadimlvov71/ddd_laravel' },
  ],
}

export default defineEventHandler((): ProjectSections => projects)
