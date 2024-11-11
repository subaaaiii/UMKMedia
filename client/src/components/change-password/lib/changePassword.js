import { z } from "zod";

export const changePasswordSchema = z
  .object({
    OLD_PASSWORD: z.string().min(6, "Password setidaknya harus 6 karakter!"),
    PASSWORD: z.string().min(6, "Password setidaknya harus 6 karakter!"),
    CONFIRM_PASSWORD: z.string(),
  })
  .refine((data) => data.PASSWORD === data.CONFIRM_PASSWORD, {
    message: "Confirm password harus sama dengan password!",
    path: ["CONFIRM_PASSWORD"],
  });
