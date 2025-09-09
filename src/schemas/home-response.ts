// src/lib/schemas/homeResponse.ts
import { z } from "zod";

import { ParamsSchema, SeoOnPageSchema } from "@/schemas/common";
import { MovieDetailItemSchema } from "@/schemas/common";

/**
 * Schema đầy đủ cho object data (trong field "data")OF
 */
export const HomeDataSchema = z.object({
  seoOnPage: SeoOnPageSchema.optional(),
  items: z.array(MovieDetailItemSchema).optional().default([]),
  params: ParamsSchema.optional(),
  APP_DOMAIN_CDN_IMAGE: z.string().url().optional().nullable(),
  APP_DOMAIN_FRONTEND: z.string().url().optional().nullable(),
});

/**
 * Schema gốc cho response API
 */
export const HomeApiResponseSchema = z.object({
  status: z.string(),
  message: z.string().optional(),
  data: HomeDataSchema.optional(),
});
