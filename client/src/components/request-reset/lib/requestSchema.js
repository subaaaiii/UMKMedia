import { z } from "zod";

export const requestSchema = z.object({
  EMAIL: z.string().email("Email tidak valid!"),
});
