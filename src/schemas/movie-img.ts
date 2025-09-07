import { z } from "zod";

// Image size schema
export const ImageSizesSchema = z.object({
  backdrop: z.object({
    original: z.string(),
    w1280: z.string(),
    w780: z.string(),
    w300: z.string(),
  }),
  poster: z.object({
    original: z.string(),
    w780: z.string(),
    w342: z.string(),
    w185: z.string(),
  }),
});

// Single image schema
export const ImageSchema = z.object({
  width: z.number(),
  height: z.number(),
  aspect_ratio: z.number(),
  type: z.enum(["backdrop", "poster"]).optional(), // có thể có thêm loại khác, bạn muốn mình để string cũng được
  file_path: z.string(),
});

// Response schema
export const GetImageResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.object({
    tmdb_id: z.number(),
    tmdb_type: z.string(), // có thể refine thành z.enum(["movie", "tv"]) nếu API cố định
    ophim_id: z.string(),
    slug: z.string(),
    imdb_id: z.string().optional(),
    image_sizes: ImageSizesSchema,
    images: z.array(ImageSchema),
  }),
});
