import { styled } from '@/stitches.config';

export const Button = styled('button', {
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

export const Label = styled('p', {
  margin: 0,
  paddingLeft: 10,
  paddingRight: 10,
});
