import { styled } from '@/stitches.config';

export const FooterContainer = styled('footer', {
  backgroundColor: '#f2f2f2',
  padding: '16px',
  textAlign: 'center',
  zIndex: 90000,
});
export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  width: '100%',
  height: '100vh',
});

export const ChildrenContainer = styled('main', {
  marginTop: 82,
});

export const NavContainer = styled('nav', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  background: '#007FFF',
  height: '50px',
  position: 'fixed',
  width: '98.3%',
  zIndex: 99999,
  '@media (max-width: 1100px)': {
    width: '97.1%',
  },
  '@media (max-width: 880px)': {
    width: '96.1%',
  },
  '@media (max-width: 500px)': {
    width: '95.1%',
  },
});

export const NavLogo = styled('div', {
  fontWeight: 'bold',
  fontSize: '1.5rem',
  color: 'white',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
});

export const NavMenu = styled('ul', {
  display: 'flex',
  listStyle: 'none',
  gap: '1rem',
});

export const NavMenuItem = styled('li', {
  color: '#fff',
  fontWeight: 'bold',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
});
export const LogoText = styled('div', {
  marginLeft: 10,
  textDecoration: 'none',
});
