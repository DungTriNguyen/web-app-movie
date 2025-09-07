import { z } from "zod";

// Profile sizes schema
export const ProfileSizesSchema = z.object({
  h632: z.string(),
  original: z.string(),
  w185: z.string(),
  w45: z.string(),
});

// Single person (actor) schema
export const PersonSchema = z.object({
  tmdb_people_id: z.number(),
  adult: z.boolean(),
  gender: z.number(), // 0: unknown, 1: female, 2: male, 3+: non-binary
  gender_name: z.string(), // e.g. "Nam", "Nữ"
  name: z.string(),
  original_name: z.string(),
  character: z.string().nullable().optional(), // vai diễn (có thể null)
  known_for_department: z.string(), // Acting, Directing, Writing, ...
  profile_path: z.string().nullable().optional(), // có thể không có avatar
});

// Response schema
export const GetPeopleResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.object({
    tmdb_id: z.number(),
    tmdb_type: z.string(), // có thể refine thành z.enum(["movie", "tv"]) nếu chắc chắn
    ophim_id: z.string(),
    slug: z.string(),
    imdb_id: z.string().optional(),
    profile_sizes: ProfileSizesSchema,
    peoples: z.array(PersonSchema),
  }),
});
