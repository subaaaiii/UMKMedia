import { z } from "zod";
const MAX_FILE_SIZE = 2000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const editSchema = z.object({
  NAMA_DEPAN: z.string().min(1, "Nama depan tidak valid!"),
  NAMA_BELAKANG: z.string().min(1, "Nama belakang tidak valid!"),
  USERNAME: z.string("Username tidak valid!"),
  EMAIL: z.string().email("Email tidak valid!"),
  IMAGE: z.any(),
  BIODATA: z.string("Biodata tidak valid!"),
  IMAGE: z
    .any()
    .nullable()
    .refine(
      (file) => !file || !file.size || file.size <= MAX_FILE_SIZE,
      `Max image size is 2MB.`
    )
    .refine(
      (file) => !file || ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png and formats are supported."
    ),
});
