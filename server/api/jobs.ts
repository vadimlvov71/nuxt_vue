// Места работы, от последнего к первому.
const jobs: Job[] = [
  { id: 1, name: 'Pet Project', description: 'Laravel 12, Vue 2 / Vue 3, Nuxt 4', from: 'May 2026', to: 'Present' },
  { id: 2, name: 'Armed Forces of Ukraine', description: 'I was declared unfit for service and dismissed from the army', from: 'December 2025', to: 'March 2026' },
  { id: 3, name: 'Nicely Group', description: 'Laravel 12, queues, RabbitMQ, S3, Docker, microservices', from: 'April 2025', to: 'November 2025' },
  { id: 4, name: 'BlueBox Worldwide', description: 'Legacy PHP, Google Charts, Mapbox', from: 'June 2024', to: 'April 2025' },
  { id: 5, name: 'OSF Digital', description: 'Slim Framework, AWS, Okta', from: 'March 2023', to: 'September 2023' },
  { id: 6, name: 'VEO', description: 'Symfony', from: 'December 2021', to: 'October 2022' },
]

export default defineEventHandler((): Job[] => jobs)
