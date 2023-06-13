import { styled } from '@/stitches.config';
import { useState, useEffect, useRef } from 'react';
import { IAutocompleteOpt } from '@/types';
import OptionItem from '@/components/Autocomplete/OptionItem/OptionItem';

interface AutocompleteProps {
  options: IAutocompleteOpt[];
  onSelect: (value: string | null) => void;
  label?: string;
  initValue: string | null;
}

const AutocompleteContainer = styled('div', {
  display: 'inline-flex',
  flexDirection: 'column',
  position: 'relative',
  height: 37,
  marginBottom: 10,
  '& > span': {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 999999,
    background: '#fff',
    fontSize: 14,
    paddingLeft: 5,
    paddingRight: 5,
    color: '#666666',
    fontFamily: 'Arial',
    transition:
      '0.15s ease-in-out top, 0.15s ease-in-out left,  0.15s ease-in-out font-size',
    pointerEvents: 'none',
  },
  variants: {
    active: {
      true: {
        '& > span': {
          top: -6,
          left: 12,
          fontSize: 12,
          color: '#1976d2',
        },
      },
      false: {
        '& > span': {
          top: 10,
          left: 15,
          fontSize: 14,
          color: '#666666',
        },
      },
    },
  },
});

const Input = styled('input', {
  padding: '10px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  width: '100%',
  cursor: 'default',
  position: 'relative',
  '&:focus': {
    marginLeft: 1.2,
    marginTop: 0.8,
    outline: '1.5px solid #1976d2',
    border: 'none',
    '&:hover': {
      border: 'none',
    },
  },

  '&:hover': {
    border: '1px solid #212121',
  },
});

const OptionsList = styled('ul', {
  position: 'absolute',
  top: '100%',
  left: 0,
  listStyle: 'none',
  padding: 0,
  margin: 0,
  background: '#fff',
  width: '100%',
  borderRadius: '4px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  maxHeight: '200px',
  overflowY: 'auto',
});

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
