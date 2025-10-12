import { z } from "zod";

export const offreSchema = z.object({
  id: z.string(),
  title: z.string(),
  company: z.string(),
  city: z.string(),
  sector: z.string(),
  salary: z.number().positive(),
  durationYears: z.number().min(1),
  startDate: z.string(),
  status: z.enum(["Actif", "Inactif"]).default("Actif"),
  description: z.string()
});

export const offresArraySchema = z.array(offreSchema);

export type Offre = z.infer<typeof offreSchema>;
