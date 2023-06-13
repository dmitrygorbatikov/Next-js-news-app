import { styled, keyframes } from '@/stitches.config';
import { Filters } from '@/components/News/Filters/Filters';
import Image from 'next/image';
import {
  Container,
  ModalWindow,
  ImageContainer,
} from '@/components/Dialog/styles';

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
