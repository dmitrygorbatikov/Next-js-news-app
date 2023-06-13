import React, { ReactNode } from 'react';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import { styled } from '@/stitches.config';

interface LayoutProps {
  children: ReactNode;
}

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  width: '100%',
  height: '100vh',
});

const ChildrenContainer = styled('main', {
  marginTop: 82,
});

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <div>
        <Navbar />
        <ChildrenContainer>{children}</ChildrenContainer>
      </div>
      <Footer />
    </Container>
  );
};

export default Layout;
