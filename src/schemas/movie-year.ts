import { z } from "zod";
import { BreadCrumbSchema, PaginationSchema } from "@/schemas/common";
import { MovieDetailItemSchema } from "@/schemas/movie";
/**
 * Year item
 */
export const YearItemSchema = z.object({
  _id: z.string(),
  slug: z.string(),
  name: z.string(),
});

/**
 * Root API response
 */
export const YearApiResponseSchema = z.object({
  status: z.string(),
  data: z.array(YearItemSchema),
});

// --- Base List Response ---
export const ListMovieYearResponseSchema = z.object({
  status: z.string(),
  message: z.string(),
  data: z.object({
    seoOnPage: z.object({
      titleHead: z.string(),
      descriptionHead: z.string(),
    }),
    titlePage: z.string(),
    breadCrumb: z.array(BreadCrumbSchema),
    items: z.array(MovieDetailItemSchema),
    params: z.object({
      pagination: PaginationSchema,
    }),
  }),
});

export const RequestYearSchema = z.object({
  year: z.number(),
  page: z.number().optional().default(1).optional(),
  limit: z.number().optional().default(24).optional(),
  sort_field: z.string().optional(),
  sort_type: z.enum(["asc", "desc"]).optional(),
  category: z.string().optional(),
  country: z.string().optional(),
});
