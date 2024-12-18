import { z } from "zod";

function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}


export const tugasSchema = z.object({
    linkTugas: z.string()
    .optional()
    .refine(value => !value || isValidUrl(value), {
      message: 'Format URL Tidak Valid'
    }),
});
