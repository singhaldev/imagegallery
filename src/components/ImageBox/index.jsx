import React, { useState } from 'react';
import ImageDetails from '../ImageDetails';
import ImageModal from '../ImageModal';
import { useDisclosure } from '@chakra-ui/react';
import ModalDetails from '../ModalDetails';
import { MainContainer, ImgCard, StyledImg } from './styles';

const ImageBox = ({ unsplashPhotos }) => {
  const [clickedImage, setClickedImage] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  // console.log('clickedImage', clickedImage);
  return (
    <>
      <ImageModal onClose={onClose} isOpen={isOpen}>
        {clickedImage && <ModalDetails clickedImage={clickedImage} />}
      </ImageModal>
      <MainContainer>
        {Array.isArray(unsplashPhotos) &&
          unsplashPhotos?.map((photo) => (
            <ImgCard
              key={photo.id}
              onClick={() => {
                onOpen();
                setClickedImage(photo);
              }}
            >
              <StyledImg src={photo.urls.regular} alt="img" />
              <ImageDetails photo={photo} />
            </ImgCard>
          ))}
      </MainContainer>
    </>
  );
};

export default ImageBox;
