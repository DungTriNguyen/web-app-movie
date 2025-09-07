import { z } from "zod";
import { HomeApiResponseSchema } from "@/schemas/home-response";

export type HomeApiResponse = z.infer<typeof HomeApiResponseSchema>;
