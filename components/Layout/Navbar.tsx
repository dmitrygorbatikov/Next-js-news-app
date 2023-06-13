import { styled } from '@/stitches.config';
import Image from 'next/image';
import Link from 'next/link';

const NavContainer = styled('nav', {
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

const NavLogo = styled('div', {
  fontWeight: 'bold',
  fontSize: '1.5rem',
  color: 'white',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
});

const NavMenu = styled('ul', {
  display: 'flex',
  listStyle: 'none',
  gap: '1rem',
});

const NavMenuItem = styled('li', {
  color: '#fff',
  fontWeight: 'bold',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
});
const LogoText = styled('div', {
  marginLeft: 10,
  textDecoration: 'none',
});

const Navbar = () => {
  return (
    <NavContainer>
      <Link style={{ textDecoration: 'none' }} href={'/'}>
        <NavLogo>
          <Image
            src={'/assets/images/news-logo.svg'}
            alt={'news-logo'}
            width={40}
            height={40}
          />
          <LogoText>News application</LogoText>
        </NavLogo>
      </Link>

      <NavMenu>
        <Link style={{ textDecoration: 'none' }} href={'/'}>
          <NavMenuItem>Home</NavMenuItem>
        </Link>
        <Link style={{ textDecoration: 'none' }} href={'/news'}>
          <NavMenuItem>News</NavMenuItem>
        </Link>
      </NavMenu>
    </NavContainer>
  );
};

export default Navbar;
