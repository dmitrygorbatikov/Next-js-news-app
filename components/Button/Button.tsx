import { styled } from '@/stitches.config';
import { FC } from 'react';
import Image from 'next/image';

const Button = styled('button', {
  padding: 10,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 10,
  fontSize: 16,
  border: 'none',
  background: '#7b7fd4',
  color: '#fff',
  '&:hover': {
    background: '#3b40ad',
    cursor: 'pointer',
  },
});

const Label = styled('p', {
  margin: 0,
  paddingLeft: 10,
  paddingRight: 10,
});

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
