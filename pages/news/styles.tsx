import { styled } from '@/stitches.config';

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  width: '100%',
  marginTop: 65,
});

export const Item = styled('div', {
  width: '500px',
  margin: '0.5rem',
  '@media (max-width: 510px)': {
    width: '100%',
  },
});

export const Wrapper = styled('div', {
  display: 'flex',
  width: '100%',
  position: 'relative',
});

export const ArticlesWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: 250,
  position: 'relative',
  '@media (max-width: 770px)': {
    marginLeft: 0,
  },
});

export const FiltersContainer = styled('div', {
  display: 'block',
  '@media (max-width: 770px)': {
    display: 'none',
  },
});

export const NoDataFound = styled('div', {
  background: '#fff',
  minWidth: '82vw',
  padding: 20,
  color: '#ff4d4d',
  marginLeft: 20,
});
