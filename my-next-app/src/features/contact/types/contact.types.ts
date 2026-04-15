import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Vui lòng nhập họ và tên"),
  phone: z.string().regex(/^[0-9]{10,11}$/, "Số điện thoại không hợp lệ (10-11 chữ số)"),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
