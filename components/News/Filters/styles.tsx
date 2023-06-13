import { styled } from '@/stitches.config';

export const Wrapper = styled('div', {
  minWidth: 250,
  maxWidth: 250,
  height: '100%',
  background: '#fff',
  position: 'fixed',
  zIndex: 89999,
});

export const Container = styled('div', {
  margin: '1rem',
});

export const Title = styled('p', {
  fontWeight: 'bold',
});

export const RefreshContainer = styled('div', {
  marginTop: 10,
});

export const FiltersHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});
