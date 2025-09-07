import { SearchMoviesResponseSchema } from "@/schemas/movie-search";
import { z } from "zod";

export type SearchMoviesResponse = z.infer<typeof SearchMoviesResponseSchema>;
