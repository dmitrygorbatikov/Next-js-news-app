import { styled, keyframes } from '@/stitches.config';
import { Filters } from '@/components/News/Filters';
import Image from 'next/image';

const slideIn = keyframes({
  from: { top: '200%' },
  to: { top: '0%' },
});

const ModalWindow = styled('div', {
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

const Container = styled('div', {
  backgroundColor: '#fff',
  width: '100%',
});

const ImageContainer = styled('div', {
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

const DialogComponent = ({
  open,
  setOpen,
  removedCategories,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
  removedCategories: string[] | undefined;
}) => {
  const handleClose = () => setOpen(false);

  return (
    <ModalWindow style={{ top: open ? '0%' : '200%' }}>
      <Container>
        <Filters
          isMobile={true}
          setOpen={setOpen}
          removedCategories={removedCategories}
        />
      </Container>

      <ImageContainer>
        <Image
          onClick={handleClose}
          width={16}
          height={16}
          src={'/assets/images/close.svg'}
          alt={'close'}
        />
      </ImageContainer>
    </ModalWindow>
  );
};

export default DialogComponent;
