import React from 'react';
import EmptyList from './EmptyList';
import PropertiesList from './PropertiesList';
import { PropertyCardProps } from '@/utils/types';
import { fetchProperties } from '@/utils/actions';

async function PropertiesContainer({
  category,
  search,
}: {
  category?: string;
  search?: string;
}) {
  const properties: PropertyCardProps[] = await fetchProperties({
    category,
    search,
  });
  if (properties.length === 0) {
    return (
      <EmptyList
        heading='No results.'
        message='Try changing or removing some of your filters.'
        btnText='Clear Filters'
      />
    );
  }

  return <PropertiesList key={1} properties={properties} />;
}

export default PropertiesContainer;
