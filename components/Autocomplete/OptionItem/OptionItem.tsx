'use client';
import { styled } from '@/stitches.config';
import { IAutocompleteOpt } from '@/types';
import { FC, useState } from 'react';
import Image from 'next/image';
import { createQuery } from '@/utils';
import { useRouter } from 'next/router';

const Container = styled('li', {
  padding: '10px',
  cursor: 'pointer',
  '&:hover': {
    background: '#f0f0f0',
  },
});

const RemoveBtn = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 30,
  height: 30,
  background: '#ff4d4d',
  borderRadius: 5,
  cursor: 'pointer',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
});
const Option = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

interface IOptionItemProps {
  item: IAutocompleteOpt;
  onSelect: (value: string | null) => void;
  setIsOpen: (value: boolean) => void;
  setSelectedOption: (value: string) => void;
}

const OptionItem: FC<IOptionItemProps> = ({
  item,
  setSelectedOption,
  onSelect,
  setIsOpen,
}) => {
  const { query, push } = useRouter();
  const [showDelete, setShowDelete] = useState(false);

  const handleOptionClick = (option: string | null) => {
    setIsOpen(false);
    setSelectedOption(option ?? '');
    onSelect(option);
  };

  const handleRemoveClick = async (
    event: React.MouseEvent<HTMLDivElement>,
    category: string | null,
  ) => {
    event.stopPropagation();
    const params: any = {
      ...query,
      removedCategories: query.removedCategories
        ? [query.removedCategories, category].join(',')
        : category,
    };

    if (query.category && category && query.category === category) {
      delete params.category;
      onSelect(null);
      setSelectedOption('');
    }

    setIsOpen(false);

    await push(`/news${createQuery(params)}`);
  };
  return (
    <Container
      onClick={() => handleOptionClick(item.value)}
      onMouseMove={() => {
        if (!!item.value) {
          setShowDelete(true);
        }
      }}
      onMouseOut={() => setShowDelete(false)}
    >
      <Option>
        <span>{item.title}</span>
        {showDelete && (
          <RemoveBtn onClick={(e) => handleRemoveClick(e, item.value)}>
            <Image
              width={16}
              height={16}
              src={'/assets/images/trash-fill.svg'}
              alt={`remove-button-${item.value}`}
            />
          </RemoveBtn>
        )}
      </Option>
    </Container>
  );
};

export default OptionItem;
