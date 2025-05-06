import type { ListingFormValues } from '~/components/properties/ListingForm/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

function getAuthToken() {
  return localStorage.getItem('token') || '';
}
export const createListing = async (
  data: ListingFormValues
): Promise<unknown> => {
  const token = getAuthToken();
  if (!token) throw new Error('No authentication token found');
  const response = await fetch(`${API_URL}/properties`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }

  return response.json();
};
