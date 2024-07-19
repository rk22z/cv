import styled from "styled-components";
import { COLORS, PADDING, SIZE } from "constants/variables";
import { autoShowAnimation } from "helpers/animations";

export const AboutContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  row-gap: ${PADDING.max32};
  width: fit-content;
  /* margin: 0 auto; */

  animation: ${autoShowAnimation} both;
  animation-timeline: view(70% 5%);
`;

export const AboutTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: ${PADDING.max16};
  padding-inline: ${PADDING.max8} 0;
  /* width: fit-content; */
  /* background-color: red; */

  position: relative;

  &::before {
    content: "";
    position: absolute;
    right: 100%;
    width: 100%;
    height: 2px;
    background-color: ${COLORS.black};
  }
  &::after {
    content: "";
    position: absolute;
    left: 100%;
    width: 100%;
    height: 2px;
    background-color: ${COLORS.black};
  }
`;

export const AboutTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${PADDING.max16};
  max-width: 50%;
`;
