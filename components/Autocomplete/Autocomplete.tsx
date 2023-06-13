import { useState, useEffect, useRef } from 'react';
import { IAutocompleteOpt } from '@/types';
import OptionItem from '@/components/Autocomplete/OptionItem/OptionItem';
import {
  OptionsList,
  Input,
  AutocompleteContainer,
} from '@/components/Autocomplete/styles';

interface AutocompleteProps {
  options: IAutocompleteOpt[];
  onSelect: (value: string | null) => void;
  label?: string;
  initValue: string | null;
}

const Autocomplete: React.FC<AutocompleteProps> = ({
  options,
  onSelect,
  label,
  initValue,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(initValue ?? '');

  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e: any) => {
    e.preventDefault();
    setIsFocused(true);
  };

  const handleBlur = (e: any) => {
    e.preventDefault();
    setIsFocused(false);
  };

  const handleInputClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (isOpen && listRef.current) {
      const inputWidth = containerRef.current?.getBoundingClientRect().width;
      listRef.current.style.width = `${inputWidth}px`;
    }
  }, [isOpen]);

  useEffect(() => {
    if (initValue) {
      setSelectedOption(initValue);
    }
  }, [initValue]);

  return (
    <AutocompleteContainer
      ref={containerRef}
      active={isFocused || !!selectedOption}
    >
      <Input
        onFocus={handleFocus}
        onBlur={handleBlur}
        type="text"
        value={selectedOption}
        onClick={handleInputClick}
        readOnly
      />
      <span>{label}</span>

      {isOpen && (
        <OptionsList ref={listRef}>
          {options.map((option) => (
            <div key={option.title}>
              <OptionItem
                item={option}
                setSelectedOption={setSelectedOption}
                onSelect={onSelect}
                setIsOpen={setIsOpen}
              />
            </div>
          ))}
        </OptionsList>
      )}
    </AutocompleteContainer>
  );
};

export default Autocomplete;
