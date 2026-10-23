import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(100, "Name must be under 100 characters."),
  email: z
    .string()
    .trim()
    .email("Enter a valid email address.")
    .max(254, "Email address is too long."),
  phone: z
    .string()
    .trim()
    .max(32, "Phone number is too long.")
    .regex(/^$|^\+?[0-9\s().-]{6,31}$/, "Enter a valid phone number.")
    .optional(),
  subject: z
    .string()
    .trim()
    .min(2, "Please enter a subject.")
    .max(160, "Subject must be under 160 characters."),
  message: z
    .string()
    .trim()
    .min(10, "Please share a little more detail.")
    .max(3000, "Message must be under 3,000 characters."),
});

export type ContactInput = z.infer<typeof contactSchema>;
