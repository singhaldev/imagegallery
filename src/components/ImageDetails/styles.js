import styled from '@emotion/styled';
import { Box, Flex } from '@chakra-ui/react';

export const ImgDetails = styled(Flex)`
  border: 0.51875px solid #e5e5e5;
  border-radius: 0px 0px 4.15px 4.15px;
  padding: 13px 10px;
  align-items: center;
  margin-top: -5px;
  margin-bottom: 20px;
`;

export const ImgDp = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  @media screen and (max-width: 850px) {
    width: 22px;
    height: 22px;
  }
`;

export const UserDetails = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  margin-left: 10px;
  @media screen and (max-width: 850px) {
    margin-left: 5px;
  }
`;

export const ImgName = styled(Box)`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  color: #4f4f4f;
  white-space: nowrap;
  @media screen and (max-width: 850px) {
    font-size: 9px;
    line-height: 8px;
  }
  @media screen and (max-width: 425px) {
    font-size: 7px;
    line-height: 8px;
  }
`;

export const ImgUserName = styled(Box)`
  font-family: Poppins;
  font-style: italic;
  font-weight: 600;
  font-size: 10px;
  line-height: 15px;
  color: #a7a7a7;
  margin-top: 0.5em;
  @media screen and (max-width: 850px) {
    font-size: 8px;
    line-height: 8px;
  }
  @media screen and (max-width: 425px) {
    font-size: 6px;
    line-height: 6px;
  }
`;

export const ImgLikes = styled.img`
  width: 17px;
  height: 17px;
  cursor: pointer;
  @media screen and (max-width: 850px) {
    width: 10px;
    height: 10px;
  }
`;

export const ImgLikesCount = styled.span`
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;
  margin-left: 2px;

  @media screen and (max-width: 850px) {
    font-weight: bold;
    font-size: 8px;
    line-height: 9px;
    margin-left: 2px;
  }
`;
