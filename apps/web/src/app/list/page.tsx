'use client';
import React from 'react';
import ListingForm from '~/components/properties/ListingForm';
import { useAuthGuard } from '~/hooks/auth/use-auth-guard';
const page = () => {
  const { isLoading } = useAuthGuard();
  if (isLoading) return <div>please wait.... you'll be prompted to login</div>;
  return (
    <div className="max-w-xl mx-auto my-10 px-4">
      <ListingForm />
    </div>
  );
};

export default page;
