import { z } from "zod";

export const contactServiceIds = [
  "hotelCleaning",
  "buildingCleaning",
  "officeCleaning",
  "medicalCleaning",
  "windowCleaning",
  "constructionCleaning",
  "other",
] as const;

export const contactFormSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.email().trim().max(254),
  phone: z.string().trim().max(40).optional(),
  service: z.enum(contactServiceIds),
  message: z.string().trim().min(10).max(3000),
  privacy: z.literal("accepted"),
  website: z.string().max(0).optional(),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
