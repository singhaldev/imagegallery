/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Box, Text, Flex, Image } from '@chakra-ui/react';
import { saveAs } from 'file-saver';
import {
  ModalDp,
  ModalImgDetails,
  ModalDpName,
  ModalUsername,
  SocialMediaLinks,
  ModalLikeIcon,
  ModalLikeText,
  DownloadBtn,
} from './styles';

const ModalDetails = ({ clickedImage }) => {
  const [imgSrc, setImgSrc] = useState(clickedImage.urls.regular);

  useEffect(() => {
    setTimeout(() => {
      setImgSrc(clickedImage.urls.full);
    }, 2000);
  }, []);

  const downloadImage = (url) => {
    saveAs(url, 'image.jpg');
  };

  return (
    <Box>
      <Box position="relative">
        <Image
          src={imgSrc}
          alt={clickedImage.alt_description}
          borderRadius="15px 15px 0 0"
        />
        <DownloadBtn
          position="absolute"
          bottom="20px"
          right="20px"
          display={{ base: 'none', sm: 'block' }}
          onClick={() => downloadImage(clickedImage.links.download)}
        >
          Download image
        </DownloadBtn>
      </Box>

      <Flex mt={5} mx={5} alignItems="center">
        <ModalDp src={clickedImage.user.profile_image.large} />
        <ModalImgDetails>
          <ModalDpName>
            {clickedImage.user.first_name} {clickedImage.user.last_name}
          </ModalDpName>
          <ModalUsername>@jacobclicks</ModalUsername>
        </ModalImgDetails>
        <Flex flex={1} display={{ base: 'none', sm: 'flex' }}>
          {clickedImage.user.social.instagram_username && (
            <Flex ml={3}>
              <Image src="images/instagram.svg" alt="instagram" mr={1} />
              <SocialMediaLinks>
                /{clickedImage.user.social.instagram_username}
              </SocialMediaLinks>
            </Flex>
          )}
          {clickedImage.user.social.twitter_username && (
            <Flex ml={3}>
              <Image src="images/twitter.svg" alt="twitter" mr={1} />
              <SocialMediaLinks>
                /{clickedImage.user.social.twitter_username}
              </SocialMediaLinks>
            </Flex>
          )}
        </Flex>

        <Flex
          alignItems="center"
          mx={3}
          className="modal-like-box"
          display={{ base: 'none', sm: 'flex' }}
        >
          <ModalLikeIcon src="images/like.svg" alt="like" mr={1} />
          <ModalLikeText>{clickedImage.likes}</ModalLikeText>
        </Flex>
        <Flex
          flex={1}
          justifyContent="flex-end"
          display={{ base: 'flex', sm: 'none' }}
        >
          <DownloadBtn
            onClick={() => downloadImage(clickedImage.links.download)}
          >
            Download image
          </DownloadBtn>
        </Flex>
      </Flex>

      <Flex alignItems="center" mx={5} display={{ base: 'flex', sm: 'none' }}>
        <Flex flex={1} my={4}>
          {clickedImage.user.social.instagram_username && (
            <Flex>
              <Image src="images/instagram.svg" alt="instagram" />
              <SocialMediaLinks>
                /{clickedImage.user.social.instagram_username}
              </SocialMediaLinks>
            </Flex>
          )}
          {clickedImage.user.social.twitter_username && (
            <Flex ml={3}>
              <Image src="images/twitter.svg" alt="twitter" mr={1} />
              <SocialMediaLinks>
                /{clickedImage.user.social.twitter_username}
              </SocialMediaLinks>
            </Flex>
          )}
        </Flex>
        <Flex alignItems="center" mx={3}>
          <ModalLikeIcon src="images/like.svg" alt="like" mr={1} />
          <ModalLikeText>{clickedImage.likes}</ModalLikeText>
        </Flex>
      </Flex>
      <Text mx={6} my={2}>
        {clickedImage.description}
      </Text>
    </Box>
  );
};

export default ModalDetails;
