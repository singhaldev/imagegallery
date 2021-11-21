import styled from '@emotion/styled';
import { Box, Flex, Text, Image, Button } from '@chakra-ui/react';

export const ModalDp = styled(Image)`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  @media screen and (max-width: 500px) {
    width: 42px;
    height: 42px;
  }
`;

export const ModalImgDetails = styled(Box)`
  margin-left: 0.5em;
  margin-right: 0.5em;
  @media screen and (max-width: 500px) {
    margin-left: 0.25em;
    margin-right: 0.5em;
  }
`;

export const ModalDpName = styled(Text)`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #4f4f4f;
  @media screen and (max-width: 500px) {
    font-size: 11px;
    line-height: 14px;
  }
`;

export const ModalUsername = styled(Text)`
  font-family: Poppins;
  font-style: italic;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #a7a7a7;
  @media screen and (max-width: 500px) {
    font-size: 9px;
    line-height: 15px;
  }
`;

export const SocialMediaLinks = styled(Text)`
  font-family: Poppins;
  font-style: italic;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #a7a7a7;
  @media screen and (max-width: 990px) {
    font-size: 10px;
    line-height: 18px;
  }
`;

export const ModalLikeIcon = styled(Image)`
  width: 22px;
  height: 22px;
  cursor: pointer;
`;

export const ModalLikeText = styled(Text)`
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  color: #858484;
`;

export const ModalDetailsMob = styled(Flex)`
  display: none;
`;

export const DownloadBtn = styled(Button)`
  width: 150px;
  height: 40px;
  background: #3cb46e;
  border-radius: 3.32331px;
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: -0.02em;
  color: #ffffff;
`;
