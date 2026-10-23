import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        // Learner-runbook metadata, shown under the title by PageTitle.astro
        runbook: z.object({
          track: z.enum(['AWS', 'Homelab', 'Site']),
          level: z.enum(['Beginner', 'Intermediate', 'Advanced']),
          time: z.string(),            // e.g. "3–4 h"
          cost: z.string(),            // e.g. "$0 (Free Tier)" or "≈ $2, delete same day"
          verified: z.string(),        // date the author last ran it end to end: "2026-10-22"
          prerequisites: z.array(z.string()).default([]),
        }).optional(),
      }),
    }),
  }),
};
