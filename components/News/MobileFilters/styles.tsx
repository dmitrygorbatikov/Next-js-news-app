import { styled } from '@/stitches.config';

export const Container = styled('div', {
  display: 'none',
  '@media (max-width: 770px)': {
    display: 'block',
  },
});
