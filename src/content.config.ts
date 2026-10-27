import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { blogSchema } from 'starlight-blog/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: (context) =>
        blogSchema(context).extend({
          // Learner-runbook facts, shown under the title by PageTitle.astro
          runbook: z.object({
            track: z.enum(['AWS', 'Homelab', 'Site']),
            level: z.enum(['Beginner', 'Intermediate', 'Advanced']),
            time: z.string(),
            cost: z.string(),
            verified: z.string(),
            prerequisites: z.array(z.string()).default([]),
          }).optional(),
        }),
    }),
  }),
};
