import { z } from "zod";

export const ProjectSchema = z.object({
  slug: z.string(),
  title: z.string(),
  summary: z.string(),
  description: z.string(),
  tech: z.array(z.string()),
  tags: z.array(z.string()).default([]),
  youtubeId: z.string().optional(),
  repo: z.string().url().optional(),
  live: z.string().url().optional(),
  image: z.string().optional(),
  date: z.string()
});

export type ProjectDTO = z.infer<typeof ProjectSchema>;
