import {
  GetImageResponseSchema,
  ImageSizesSchema,
  ImageSchema,
} from "@/schemas/movie-img";
import { z } from "zod";

// Types
export type GetImageResponse = z.infer<typeof GetImageResponseSchema>;
export type ImageSizes = z.infer<typeof ImageSizesSchema>;
export type Image = z.infer<typeof ImageSchema>;
