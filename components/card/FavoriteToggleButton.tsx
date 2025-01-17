'use client';

import { usePathname } from 'next/navigation';
import FormContainer from '../form/FormContainer';
// import { toggleFavoriteAction } from '@/utils/actions';
// import { CardSubmitButton } from '../form/Buttons';
import { FaHeart } from 'react-icons/fa';
import { Button } from '../ui/button';

type FavoriteToggleFormProps = {
  propertyId: string;
  favoriteId: string | null;
};

function FavoriteToggleButton({
  propertyId,
  favoriteId,
}: FavoriteToggleFormProps) {
  return (
    <Button size='icon' variant='outline' className='p-2 cursor-pointer'>
      <FaHeart />
    </Button>
  );
}

export default FavoriteToggleButton;
