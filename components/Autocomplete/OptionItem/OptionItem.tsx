'use client';
import { IAutocompleteOpt } from '@/types';
import { FC, useState } from 'react';
import Image from 'next/image';
import { createQuery } from '@/utils';
import { useRouter } from 'next/router';
import {
  RemoveBtn,
  Option,
  Container,
} from '@/components/Autocomplete/OptionItem/styles';

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
