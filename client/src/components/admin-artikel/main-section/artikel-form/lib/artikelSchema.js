import { z } from "zod";

const MAX_FILE_SIZE = 2000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}

export const artikelSchema = z.object({
  judul: z.string().min(1, "Tolong isi judul artikel!"),
  penerbit: z.string().min(1, "Tolong isi nama penerbit!"),
  kategori: z.string().min(1, "Tolong pilih kategori artikel!"),
  tanggal: z.string().min(1, "Tolong isi tanggal terbit!"),
  link: z
    .string()
    .optional()
    .refine((value) => isValidUrl(value), {
      message: "Tolong isikan link yang valid!",
    }),
  deskripsi: z.string().min(1, "Tolong isi deskripsi artikel!"),
  banner: z
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
