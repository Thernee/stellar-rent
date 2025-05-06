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
  if (!token) throw new Error('Authentication token not found.');

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
      throw new Error(errorResponse.message || 'Failed to create listing.');
    }
    return await response.json();
  } catch (err) {
    if (err instanceof Error) {
      console.error('Network or server error:', err.message);
      throw new Error(`Request failed: ${err.message}`);
    }
    throw new Error('An unexpected error occurred.');
  }
};
