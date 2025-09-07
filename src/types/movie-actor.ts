import {
  GetPeopleResponseSchema,
  PersonSchema,
  ProfileSizesSchema,
} from "@/schemas/movie-actor";
import { z } from "zod";
// Types
export type GetPeopleResponse = z.infer<typeof GetPeopleResponseSchema>;
export type Person = z.infer<typeof PersonSchema>;
export type ProfileSizes = z.infer<typeof ProfileSizesSchema>;
