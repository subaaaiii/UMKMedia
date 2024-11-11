import { z } from "zod";

export const signInSchema = z.object({
  EMAIL: z.string().email("Email tidak valid!"),
  PASSWORD: z.string().min(6, "Password setidaknya harus 6 karakter!"),
});
