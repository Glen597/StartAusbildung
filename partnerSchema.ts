import { z } from "zod";

export const partnerSchema = z.object({
  id: z.string(),
  company: z.string(),
  city: z.string(),
  sector: z.string(),
  employee: z.string(),
  webpage: z.string(),
  contact: z.string(),
  mail: z.string(),
  description: z.string()
});

export const partnerArraySchema = z.array(partnerSchema);

export type Partner= z.infer<typeof partnerSchema>;