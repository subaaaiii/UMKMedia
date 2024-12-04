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

const materiSchema = z.object({
  materi: z.string().optional(),
  link: z.string()
    .optional()
    .refine(value => !value || isValidUrl(value), {
      message: 'Format URL Tidak Valid'
    }),
  deskripsi: z.string().max(1000, "deskripsi terlalu panjang, maksimal 1000 karakter").optional()
});

export const kelasBisnisSchema = z.object({
  nama: z.string().min(1, "Nama kelas harus diisi!"),
  harga: z.string().min(1, "Harga harus diisi!"),
  tingkatKesulitan: z.string().min(1, "Pilih tingkat kesulitan!"),
  kelasKategori: z.string().min(1, "Pilih kategori kelas!"),
  namaPemateri: z.string().min(1, "Nama pemateri harus diisi!"),
  jabatan: z.string().min(1, "Jabatan pemateri harus diisi!"),
  perusahaan: z.string().min(1, "Perusahaan pemateri harus diisi!"),
  deskripsiPemateri: z.string().max(1000, "deskripsi terlalu panjang, maksimal 1000 karakter").optional(),
  deskripsi: z.string().optional(),
  tugas: z.string().optional(),
  materis: z.array(materiSchema).optional(),
  linkBanner: z
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
  linkFotoPemateri: z
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
