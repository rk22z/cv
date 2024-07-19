import { COLORS, PADDING } from "constants/variables";
import { autoShowAnimation } from "helpers/animations";
import styled from "styled-components";

export const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: ${PADDING.max16};
  padding-inline: ${PADDING.max8} 0;
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

export const SkillsContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  row-gap: ${PADDING.max32};
  width: fit-content;
  animation: ${autoShowAnimation} both;
  animation-timeline: view(70% 5%);
  max-width: 50%;
`;

export const SkillsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: ${PADDING.max16};
`;

export const SkillWrapper = styled.li`
  list-style: none;

  &::before {
    content: "•";
    margin-inline-end: ${PADDING.max8};
  }
`;

export const ExperienceContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  row-gap: ${PADDING.max32};
  width: fit-content;
  animation: ${autoShowAnimation} both;
  animation-timeline: view(70% 5%);

  background-color: blue;
`;
