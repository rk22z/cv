import styled from "styled-components";
import { COLORS, FONT_SIZE, PADDING, SIZE } from "constants/variables";

export const HomeContainer = styled.div`
  display: flex;
`;

export const HomeLeftContainer = styled.div`
  width: 50%;
`;

export const HomeRightContainer = styled.div`
  width: 50%;
  background-color: ${COLORS.lightGreen};
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 0;
  top: 0;
  height: 100dvh;
`;

export const HomeRightImageWrapper = styled.div`
  width: 40%;
  width: ${SIZE.max500};
`;

export const HomeRightImage = styled.img`
  width: 100%;
  border-radius: 50%;
  aspect-ratio: 1/1;
  object-fit: cover;
  box-shadow: 0 5px 10px 5px rgb(0, 0, 0, 0.2);
`;

export const HomeSection = styled.div`
  min-height: 100dvh;
  /* height: calc(100dvh - ${SIZE.max100}); */
`;

export const UpToTopButton = styled.button`
  position: fixed;
  bottom: ${SIZE.max24};
  right: calc(50% + ${SIZE.max24});
  width: ${SIZE.max64};
  aspect-ratio: 1/1;
  border-radius: 4px;
  background-color: ${COLORS.lightGreen};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  box-shadow: 0 5px 5px 1px rgb(0, 0, 0, 0.2);
  font-size: ${FONT_SIZE.max32};
  color: ${COLORS.black};
`;

export const OpenPdfButtonWrapper = styled.div`
  width: ${SIZE.max200};
  height: ${SIZE.max40};
  position: fixed;
  top: ${PADDING.max32};
  right: ${PADDING.max32};
`;
