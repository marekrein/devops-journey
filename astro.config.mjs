// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://reinhold.co',
  integrations: [
    starlight({
      title: 'Platform Runbooks',
      description: 'Tested, step-by-step runbooks for AWS, Terraform and Kubernetes — written while learning, with real results and failures.',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/marekrein/devops-journey' },
        { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/marek-reinhold/' },
      ],
      editLink: { baseUrl: 'https://github.com/marekrein/devops-journey/edit/master/' },
      lastUpdated: true,
      customCss: ['./src/styles/custom.css'],
      components: { PageTitle: './src/components/PageTitle.astro' },
      sidebar: [
        { label: 'Start here', items: ['start-here', 'how-to-use'] },
        { label: 'Build your own site', items: [{ autogenerate: { directory: 'runbooks/site' } }] },
        { label: 'AWS runbooks', items: [{ autogenerate: { directory: 'runbooks/aws' } }] },
        { label: 'Homelab runbooks', items: [{ autogenerate: { directory: 'runbooks/homelab' } }] },
        { label: 'Journey log', collapsed: true, items: [{ autogenerate: { directory: 'journey' } }] },
        { label: 'Decisions', collapsed: true, items: [{ autogenerate: { directory: 'decisions' } }] },
        { label: 'About', link: '/about/' },
      ],
    }),
  ],
});
