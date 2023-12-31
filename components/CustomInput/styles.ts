import { styled } from '@/stitches.config';

export const SearchInput = styled('input', {
  padding: '10px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  width: '100%',
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

export const SearchInputContainer = styled('div', {
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
