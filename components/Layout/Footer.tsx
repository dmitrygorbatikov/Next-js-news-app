import { styled } from '@/stitches.config';

const FooterContainer = styled('footer', {
  backgroundColor: '#f2f2f2',
  padding: '16px',
  textAlign: 'center',
  zIndex: 90000,
});

export default function Footer() {
  return (
    <FooterContainer>
      <span>&copy;</span> Created by Dmitry Gorbatikov
      <p>Test news application</p>
    </FooterContainer>
  );
}
