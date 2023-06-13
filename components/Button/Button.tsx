import { FC } from 'react';
import Image from 'next/image';
import { Button, Label } from '@/components/Button/styles';

interface ICustomButtonProps {
  label: string;
  icon?: string;
  position?: 'left' | 'right';
  iconWidth?: number;
  iconHeight?: number;
  onClick?: () => void;
}

interface IconButtonProps {
  iconWidth?: number;
  iconHeight?: number;
  icon: string;
}
const IconButton = ({ iconWidth, iconHeight, icon }: IconButtonProps) => (
  <Image
    width={iconWidth ? iconWidth : 16}
    height={iconHeight ? iconHeight : 16}
    src={icon}
    alt={'customButtonAlt'}
  />
);

const CustomButton: FC<ICustomButtonProps> = ({
  label,
  icon,
  position,
  iconWidth,
  iconHeight,
  onClick,
}) => {
  const Icon = () => (
    <IconButton
      icon={icon ?? ''}
      iconHeight={iconHeight}
      iconWidth={iconWidth}
    />
  );
  return (
    <Button onClick={onClick && onClick}>
      {position && position === 'right' && icon && <Icon />}
      {!position && icon && <Icon />}
      {label.length > 0 && <Label>{label}</Label>}
      {position && position === 'left' && icon && <Icon />}
    </Button>
  );
};

export default CustomButton;
