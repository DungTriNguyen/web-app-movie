import { z } from "zod";
import {
  SeoOnPageSchema,
  BreadCrumbSchema,
  ParamsSchema,
  MovieDetailItemSchema,
  CategoryItemSchema,
} from "@/schemas/common";

/**
 * Root API response
 */
export const CategoryApiResponseSchema = z.object({
  status: z.string(),
  data: z.array(CategoryItemSchema),
});

/**
 * Data object
 */
export const listMovieCategory = z.object({
  seoOnPage: SeoOnPageSchema.optional(),
  titlePage: z.string().optional(),
  breadCrumb: z.array(BreadCrumbSchema).optional().default([]).optional(),
  items: z.array(MovieDetailItemSchema).optional().default([]).optional(),
  params: ParamsSchema.optional(),
});

/**
 * Root API response
 */
export const listMovieCategoryResponseSchema = z.object({
  status: z.string(),
  message: z.string().optional(),
  data: listMovieCategory.optional(),
});
