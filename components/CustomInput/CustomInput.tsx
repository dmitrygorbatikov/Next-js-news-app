import { FC, useState } from 'react';
import {
  SearchInput,
  SearchInputContainer,
} from '@/components/CustomInput/styles';

interface ICustomInputProps {
  onKeyPress?: (e: any) => void;
  value: string;
  onChange: (value: string) => void;
  label: string;
}

const CustomInput: FC<ICustomInputProps> = ({
  onKeyPress,
  value,
  onChange,
  label,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e: any) => {
    e.preventDefault();
    setIsFocused(true);
  };

  const handleBlur = (e: any) => {
    e.preventDefault();
    setIsFocused(false);
  };

  return (
    <SearchInputContainer active={isFocused || !!value}>
      <SearchInput
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyPress={(e) => onKeyPress && onKeyPress(e)}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <span>{label}</span>
    </SearchInputContainer>
  );
};

export default CustomInput;
