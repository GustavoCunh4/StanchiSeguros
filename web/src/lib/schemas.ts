import { z } from "zod";

export const leadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Informe seu nome completo"),
  email: z
    .string()
    .trim()
    .email("Informe um e-mail válido"),
  phone: z
    .string()
    .trim()
    .regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, "Informe um número com DDD"),
  product: z.string().nonempty("Escolha um plano"),
  message: z
    .string()
    .trim()
    .max(600, "Mensagem muito longa")
    .optional()
    .default(""),
  consent: z.literal(true, {
    errorMap: () => ({
      message: "É necessário aceitar o tratamento dos dados",
    }),
  }),
});

export type LeadFormData = z.infer<typeof leadSchema>;
