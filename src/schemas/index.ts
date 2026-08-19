import { z } from "zod";

export const createContactSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50),
  lastName: z.string().min(1, "Last name is required").max(50),
  email: z.string().email("Invalid email address"),
  phone: z.string().max(20).optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
  serviceId: z.string().cuid().optional(),
});

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const searchQuerySchema = z.object({
  q: z.string().min(1, "Search query is required").max(100),
  type: z.enum(["all", "services", "posts", "locations"]).optional().default("all"),
  page: z.coerce.number().int().positive().optional().default(1),
  limit: z.coerce.number().int().positive().max(50).optional().default(10),
});

export type CreateContactInput = z.infer<typeof createContactSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type SearchQueryInput = z.infer<typeof searchQuerySchema>;
