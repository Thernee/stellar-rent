import toast from 'react-hot-toast';
import type { ListingFormValues } from '~/components/properties/ListingForm/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

function getAuthToken() {
  if (typeof window === 'undefined') {
    return '';
  }
  return localStorage.getItem('token') || '';
}

export const createListing = async (
  data: ListingFormValues
): Promise<unknown> => {
  const token = getAuthToken();
  if (!token) {
    toast.error('Authentication token not found.');
    return;
  }

  try {
    const response = await fetch(`${API_URL}/properties`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorResponse = await response.json().catch(() => ({
        message: 'An unknown error occurred.',
      }));
      toast.error(errorResponse.message || 'Failed to create listing.');
      return;
    }

    const result = await response.json();
    toast.success('Listing created successfully!');
    return result;
  } catch (err) {
    if (err instanceof Error) {
      toast.error(`Request failed: ${err.message}`);
      throw new Error(`Request failed: ${err.message}`);
    }
    toast.error('An unexpected error occurred.');
    throw new Error('An unexpected error occurred.');
  }
};
