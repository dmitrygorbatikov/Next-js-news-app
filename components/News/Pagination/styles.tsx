import { styled } from '@/stitches.config';

export const PaginationContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '1rem 0',
  position: 'fixed',
  zIndex: 99999,
  backgroundColor: '#E7EBF0',
  width: 'calc(100% - 250px)',
  top: 66,
  paddingTop: 10,
  paddingBottom: 10,
  '@media (max-width: 770px)': {
    width: '100%',
  },
});

export const PageButton = styled('button', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '32px',
  height: '32px',
  margin: '0 0.5rem',
  border: 'none',
  borderRadius: '50%',
  backgroundColor: '#eee',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#ddd',
  },
});

export const CurrentPage = styled('span', {
  fontSize: '1rem',
  fontWeight: 'bold',
  margin: '0 0.5rem',
});

export const PageCount = styled('span', {
  fontSize: '1rem',
  margin: '0 0.5rem',
  '@media (max-width: 430px)': {
    fontSize: '0.8rem',
  },
});

export const TotalResults = styled('span', {
  fontSize: '1rem',
  margin: '0 0.5rem',
  '@media (max-width: 430px)': {
    fontSize: '0.8rem',
  },
});

export const PageInput = styled('input', {
  padding: '10px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  width: 40,
  '&:focus': {
    outline: 'none',
  },
  '@media (max-width: 770px)': {
    display: 'none',
  },
});
