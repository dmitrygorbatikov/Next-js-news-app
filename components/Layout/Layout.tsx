import React, { ReactNode } from 'react';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import { Container, ChildrenContainer } from '@/components/Layout/styles';

interface LayoutProps {
  children: ReactNode;
}

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
