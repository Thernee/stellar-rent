'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';
import { listingSchema } from './validation';
type ListingFormValues = z.infer<typeof listingSchema>;

export default function useListingForm() {
  const { register, handleSubmit, reset, formState } =
    useForm<ListingFormValues>({
      resolver: zodResolver(listingSchema),
      defaultValues: {
        title: '',
        price: 0,
        description: '',
      },
      mode: 'onChange',
    });

  return {
    register,
    handleSubmit,
    formState,
    reset,
  };
}
