// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';

export default defineConfig({
  site: 'https://reinhold.co',
  // Old addresses from before the blog layout (2026-10-27) keep working.
  redirects: {
    '/start-here/': '/runbooks/',
    '/how-to-use/': '/runbooks/how-to-use/',
    '/decisions/': '/runbooks/decisions/',
    '/journey/': '/blog/',
    '/journey/2026-10-a0-aws-organization/': '/blog/2026-10-22-no-human-uses-aws-root/',
  },
  integrations: [
    starlight({
      title: 'Marek Reinhold',
      description: 'Senior Java backend engineer and tech lead writing about running software in production — blog and tested runbooks for AWS, Terraform and Kubernetes.',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/marekrein' },
        { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/marek-reinhold/' },
      ],
      editLink: { baseUrl: 'https://github.com/marekrein/devops-journey/edit/master/' },
      lastUpdated: true,
      // Preview image for LinkedIn, Slack and other link previews (1200×627)
      head: [
        { tag: 'meta', attrs: { property: 'og:image', content: 'https://reinhold.co/og.png' } },
        { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
        { tag: 'meta', attrs: { property: 'og:image:height', content: '627' } },
        { tag: 'meta', attrs: { property: 'og:image:alt', content: 'Marek Reinhold — blog and runbooks on AWS, Terraform, Kubernetes' } },
        { tag: 'meta', attrs: { name: 'twitter:image', content: 'https://reinhold.co/og.png' } },
      ],
      customCss: ['./src/styles/custom.css'],
      components: { PageTitle: './src/components/PageTitle.astro', SiteTitle: './src/components/SiteTitle.astro' },
      plugins: [
        starlightBlog({
          title: 'Blog',
          prefix: 'blog',
          navigation: 'none',
          recentPostCount: 10,
          authors: {
            marek: { name: 'Marek Reinhold', url: 'https://reinhold.co/about/' },
          },
        }),
      ],
      sidebar: [
        { label: 'Runbooks', items: ['runbooks', 'runbooks/how-to-use', 'runbooks/decisions'] },
        { label: 'AWS', items: [{ autogenerate: { directory: 'runbooks/aws' } }] },
        { label: 'Homelab', items: [{ autogenerate: { directory: 'runbooks/homelab' } }] },
        { label: 'About', link: '/about/' },
      ],
    }),
  ],
});
