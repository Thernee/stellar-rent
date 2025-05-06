'use client';
import * as Form from '@radix-ui/react-form';
import type React from 'react';
import { createListing } from '~/services/propertyService';
import useListingForm from './hooks';
import { helpTextClass, inputClass, labelClass, sectionClass } from './styles';
import type { ListingFormValues } from './types';

// Placeholders
const LocationPicker = () => (
  <div className="text-gray-400">[Location Picker Placeholder]</div>
);
const AddressFields = () => (
  <div className="text-gray-400">[Address Fields Placeholder]</div>
);
const AmenitiesSelector = () => (
  <div className="text-gray-400">[Amenities Selector Placeholder]</div>
);
const PhotoUploader = () => (
  <div className="text-gray-400">[Photo Uploader Placeholder]</div>
);

const ListingSection: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => (
  <section className={sectionClass}>
    <h2 className="text-lg font-semibold mb-4">{title}</h2>
    {children}
  </section>
);

const ListingForm: React.FC = () => {
  const { register, handleSubmit, formState } = useListingForm();

  const onSubmit = async (data: ListingFormValues) => {
    await createListing(data);
  };

  return (
    <Form.Root onSubmit={handleSubmit(onSubmit)}>
      <Form.Field name="title">
        <Form.Label className={labelClass}>Title</Form.Label>
        <Form.Control asChild>
          <input id="title" className={inputClass} {...register('title')} />
        </Form.Control>
        {formState.errors.title && (
          <Form.Message className={helpTextClass}>
            {formState.errors.title.message}
          </Form.Message>
        )}
      </Form.Field>

      <Form.Field name="description">
        <Form.Label className={labelClass}>Description</Form.Label>
        <Form.Control asChild>
          <textarea
            id="description"
            className={inputClass}
            {...register('description')}
          />
        </Form.Control>
        {formState.errors.description && (
          <Form.Message className={helpTextClass}>
            {formState.errors.description.message}
          </Form.Message>
        )}
      </Form.Field>

      <Form.Field name="price">
        <Form.Label className={labelClass}>Price per Night</Form.Label>
        <Form.Control asChild>
          <input
            id="price"
            type="number"
            className={inputClass}
            {...register('price', { valueAsNumber: true })}
          />
        </Form.Control>
        {formState.errors.price && (
          <Form.Message className={helpTextClass}>
            {formState.errors.price.message}
          </Form.Message>
        )}
      </Form.Field>

      <ListingSection title="Location">
        <LocationPicker />
        <AddressFields />
      </ListingSection>

      <ListingSection title="Amenities">
        <AmenitiesSelector />
      </ListingSection>

      <ListingSection title="Photos">
        <PhotoUploader />
      </ListingSection>

      <Form.Submit asChild>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-primary text-white font-semibold rounded hover:bg-primary-dark transition"
          disabled={formState.isSubmitting}
        >
          {formState.isSubmitting ? 'Submitting...' : 'List Property'}
        </button>
      </Form.Submit>
    </Form.Root>
  );
};

export default ListingForm;
