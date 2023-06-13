import CustomButton from '@/components/Button/Button';
import React, { FC } from 'react';
import { Container } from '@/components/News/MobileFilters/styles';

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
