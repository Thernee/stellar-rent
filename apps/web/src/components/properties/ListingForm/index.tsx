'use client';
import type React from 'react';
import useListingForm from './hooks';
import { helpTextClass, inputClass, labelClass, sectionClass } from './styles';

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

  const onSubmit = (data: unknown) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto p-4 space-y-6"
    >
      {/* Progress bar */}
      <div className="h-2 bg-gray-200 rounded mb-6">
        <div
          className="h-full bg-primary rounded transition-all"
          style={{ width: '25%' }}
        />
      </div>

      <ListingSection title="Basic Information">
        <label className={labelClass} htmlFor="title">
          Property Title
        </label>
        <input id="title" {...register('title')} className={inputClass} />
        <div className={helpTextClass}>
          Enter a descriptive title for your property.
        </div>
        {formState.errors.title && (
          <div className="text-red-500 text-xs">
            {formState.errors.title.message}
          </div>
        )}

        <label className={labelClass} htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          {...register('description')}
          className={inputClass}
          rows={4}
        />
        <div className={helpTextClass}>Describe your property in detail.</div>
        {formState.errors.description && (
          <div className="text-red-500 text-xs">
            {formState.errors.description.message}
          </div>
        )}

        <label className={labelClass} htmlFor="price">
          Price per Night
        </label>
        <input
          id="price"
          type="number"
          {...register('price', { valueAsNumber: true })}
          className={inputClass}
        />
        <div className={helpTextClass}>Set a nightly price (USD).</div>
        {formState.errors.price && (
          <div className="text-red-500 text-xs">
            {formState.errors.price.message}
          </div>
        )}
      </ListingSection>

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

      <button
        type="submit"
        className="w-full py-2 px-4 bg-primary text-white font-semibold rounded hover:bg-primary-dark transition"
        disabled={formState.isSubmitting}
      >
        {formState.isSubmitting ? 'Submitting...' : 'List Property'}
      </button>
    </form>
  );
};

export default ListingForm;
