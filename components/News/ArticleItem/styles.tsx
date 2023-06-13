import { styled } from '@/stitches.config';

export const CardContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: '450px',
  padding: '1rem',
  borderRadius: '4px',
  backgroundColor: '#fff',
  height: 450,
  transition: 'transform 0.2s',
  position: 'relative',
  '&:active': {
    transform: 'scale(0.95)',
  },
  '@media (max-width: 770px)': {
    height: 'auto',
    paddingBottom: 10,
    maxWidth: '100%',
  },
});

export const CardActionArea = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  cursor: 'pointer',
});

export const CardTitle = styled('h3', {
  fontSize: '1.2rem',
  fontWeight: 'bold',
  marginBottom: '0.5rem',
  '@media (max-width: 770px)': {
    paddingBottom: 10,
    maxWidth: '100%',
    fontSize: '1rem',
  },
});

export const CardContent = styled('p', {
  fontSize: '1rem',
  marginBottom: '1rem',
  textOverflow: 'ellipsis',
  '@media (max-width: 770px)': {
    fontSize: '0.8rem',
  },
});

export const CardLink = styled('a', {
  fontSize: '0.9rem',
  color: 'blue',
  textDecoration: 'underline',
});

export const CardImage = styled('img', {
  backgroundSize: '100%',
  maxHeight: '100%',
  maxWidth: '100%',
  objectFit: 'contain',
});

export const ImageContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 250,
});

export const RemoveButton = styled('div', {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 30,
  height: 30,
  background: '#ff4d4d',
  top: 10,
  right: 10,
  borderRadius: 5,
  cursor: 'pointer',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
});
