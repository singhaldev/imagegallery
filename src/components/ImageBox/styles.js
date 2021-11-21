import styled from '@emotion/styled';
import { Box } from '@chakra-ui/react';

export const MainContainer = styled(Box)`
  padding: 2.5em 7em;
  position: relative;
  column-count: 3;
  @media screen and (max-width: 900px) {
    padding: 1em 4em;
  }

  @media screen and (max-width: 768px) {
    padding: 1em 3em;
  }

  @media screen and (max-width: 650px) {
    padding: 1em 2em;
    column-count: 2;
  }

  @media screen and (max-width: 425px) {
    padding: 1em 2em;
    column-count: 2;
  }

  @media screen and (max-width: 375px) {
    padding: 1em;
    column-count: 1;
  }
`;

export const ImgCard = styled(Box)`
  /* background: ${(props) => props.bgc}; */
  width: 100%;
  display: inline-block;
  overflow: hidden;
  cursor: pointer;
`;

export const StyledImg = styled.img`
  width: 100%;
  transition: 0.25s ease-in-out;
  border-radius: 4.15px 4.15px 0px 0px;
`;
