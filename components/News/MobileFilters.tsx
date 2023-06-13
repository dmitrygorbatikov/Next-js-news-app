import CustomButton from '@/components/Button/Button';
import React, { FC } from 'react';
import { styled } from '@/stitches.config';

const Container = styled('div', {
  display: 'none',
  '@media (max-width: 770px)': {
    display: 'block',
  },
});

interface IMobileFiltersProps {
  onClick: () => void;
}

const MobileFilters: FC<IMobileFiltersProps> = ({ onClick }) => {
  return (
    <Container>
      <CustomButton
        onClick={onClick}
        label={''}
        icon={'/assets/images/filter-news.svg'}
      />
    </Container>
  );
};

export default MobileFilters;
