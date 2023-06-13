import Image from 'next/image';
import Link from 'next/link';
import {
  NavContainer,
  NavLogo,
  LogoText,
  NavMenu,
  NavMenuItem,
} from '@/components/Layout/styles';

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
