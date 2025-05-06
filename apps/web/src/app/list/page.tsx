'use client';
import React from 'react';
import ListingForm from '~/components/properties/ListingForm';
import { useAuthGuard } from '~/hooks/useAuthGuard';
const page = () => {
  const { isLoading } = useAuthGuard();
  if (isLoading) return <div>please wait.... you'll be prompted to login</div>;
  return <ListingForm />;
};

export default page;
