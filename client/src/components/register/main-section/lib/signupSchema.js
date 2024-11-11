import { z } from "zod";

export const signUpSchema = z
  .object({
    NAMA_LENGKAP: z.string("Nama lengkap tidak valid!"),
    USERNAME: z
      .string("Username tidak valid!")
      .refine((value) => !/\s/.test(value), {
        message: "Username tidak boleh mengandung spasi!",
      }),
    HANDPHONE: z.string("Nomer handphone tidak valid!"),
    EMAIL: z.string().email("Email tidak valid!"),
    PASSWORD: z.string().min(6, "Password setidaknya harus  karakter!"),
    CONFIRM_PASSWORD: z.string(),
  })
  .refine((data) => data.PASSWORD === data.CONFIRM_PASSWORD, {
    message: "Confirm password harus sama dengan password!",
    path: ["CONFIRM_PASSWORD"],
  });
