import { COLORS, PADDING, SIZE } from "constants/variables";
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
    width: 50%;
    height: 2px;
    background-color: ${COLORS.black};
  }
  &::after {
    content: "";
    position: absolute;
    left: 100%;
    width: 50%;
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

export const TechStackContainer = styled.div`
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

export const TechStackWrapper = styled.div``;

export const TechStackBox = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${PADDING.max24};
  border: 2px solid ${COLORS.darkGray}35;
  border-radius: 8px;
  padding: ${PADDING.max24};
`;

export const TechStackElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TechStackElementIconWrapper = styled.div`
  height: 100%;
`;

export const TechStackElementDescriptionWrapper = styled.div`
  height: 100%;
  text-align: center;
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
`;

export const ExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${PADDING.max48};
`;

export const ExperienceElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${PADDING.max12};

  &::after {
    content: "";
    margin-top: ${PADDING.max24};
    width: 100%;
    height: 1px;
    background-color: ${COLORS.darkGray}35;
  }

  &:last-child {
    &::after {
      display: none;
    }
  }
`;

export const ExperienceElementTextWrapper = styled.div``;

export const KeyAchievementsContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  row-gap: ${PADDING.max32};
  width: fit-content;
  animation: ${autoShowAnimation} both;
  animation-timeline: view(70% 5%);
`;

export const KeyAchievementsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${PADDING.max16};
  max-width: 50%;
`;

export const KeyAchievementsElementWrapper = styled.li`
  list-style: none;

  &::before {
    content: "•";
    margin-inline-end: ${PADDING.max8};
  }
`;
