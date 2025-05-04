import { z } from 'zod';

export const listingSchema = z.object({
  title: z
    .string()
    .min(10, 'Title must be at least 10 characters')
    .max(100, 'Title cannot exceed 100 characters'),
  description: z
    .string()
    .min(50, 'Description must be at least 50 characters')
    .max(1000, 'Description cannot exceed 1000 characters'),
  price: z
    .number()
    .min(1, 'Price must be greater than 0')
    .max(10000, 'Price cannot exceed 10000'),
});
