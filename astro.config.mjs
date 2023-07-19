import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Ultra Planner',
      sidebar: [
        {
          label: 'Start Here',
          autogenerate: { directory: 'start-here' },
        },
        {
          label: 'Participants',
          link: '/participants',
        },
        {
          label: 'Accommodation and Travel',
          link: 'accommodation-and-travel',
        },
        {
          label: 'Packing and shopping list',
          link: 'packing-and-shopping-list',
        },
        {
          label: 'Company List',
          link: 'company-list',
        },
        {
          label: 'Sections',
          link: 'sections',
        },
        {
          label: 'Scenarios',
          autogenerate: { directory: 'scenarios' },
        },
      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
