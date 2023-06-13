import { styled } from '@/stitches.config';

export const Container = styled('li', {
  padding: '10px',
  cursor: 'pointer',
  '&:hover': {
    background: '#f0f0f0',
  },
});

export const RemoveBtn = styled('div', {
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
export const Option = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});
