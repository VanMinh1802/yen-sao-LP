import { z } from "zod";

export const productDetailSchema = z.object({
  icon: z.string(),
  title: z.string(),
  description: z.string(),
});

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  category: z.enum(['raw', 'gift', 'refined']),
  badge: z.string().nullable(),
  imageSrc: z.string(),
  imageAlt: z.string(),
  price: z.string(),
  details: z.array(productDetailSchema),
});

export type ProductDetail = z.infer<typeof productDetailSchema>;
export type Product = z.infer<typeof productSchema>;
