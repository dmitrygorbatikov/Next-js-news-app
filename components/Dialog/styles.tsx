import { keyframes, styled } from '@/stitches.config';

const slideIn = keyframes({
  from: { top: '200%' },
  to: { top: '0%' },
});

export const ModalWindow = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  height: '100%',
  zIndex: '99999',
  position: 'fixed',
  background: '#fff',
  top: '200%',
  transition: '1s ease-in-out top',
  left: '50%',
  transform: 'translateX(-50%)',

  '@media (max-width: 1206px)': {
    width: '100%',
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  '@media (max-width: 800px)': {},
  '@media (max-width: 600px)': {
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  '@media (max-width: 360px)': {},
  animation: `${slideIn} 0.1s`,
});

export const Container = styled('div', {
  backgroundColor: '#fff',
  width: '100%',
});

export const ImageContainer = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  '& > img': {
    padding: 10,
    transition: '0.2s ease-in-out background',
    '&:hover': {
      cursor: 'pointer',
      background: '#c2c2c2',
    },
  },
});
