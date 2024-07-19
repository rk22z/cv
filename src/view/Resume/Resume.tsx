import React from "react";

import {
  ExperienceContainer,
  ResumeContainer,
  SkillsContainer,
  SkillsWrapper,
  SkillWrapper,
  TitleWrapper,
} from "./ResumeStyled";
import CustomText from "components/CustomText/CustomText";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "constants/variables";

const Resume = () => {
  const skills = [
    {
      id: 1,
      description:
        "More than 3 years of experience in web development using HTML, CSS, JavaScript, React, and other modern libraries and frameworks.",
    },
    {
      id: 2,
      description:
        "Skilled in creating responsive websites and platforms with clean, reusable code, from static pages to fully animated, data-driven applications",
    },
    {
      id: 3,
      description:
        "Experienced in code review, mentoring junior developers, and delivering applications widely used by users across the country.",
    },
  ];
  return (
    <ResumeContainer>
      <SkillsContainer>
        <TitleWrapper>
          <CustomText
            color={COLORS.black}
            fontSize={FONT_SIZE.max24}
            fontWeight={FONT_WEIGHT.medium}
            text="SKILLS & EXPERTISE"
          />
        </TitleWrapper>
        <SkillsWrapper>
          {skills.map((skill) => (
            <SkillWrapper key={skill.id}>
              <CustomText
                color={COLORS.darkGray}
                fontSize={FONT_SIZE.max20}
                fontWeight={FONT_WEIGHT.regular}
                text={skill.description}
              />
            </SkillWrapper>
          ))}
        </SkillsWrapper>
      </SkillsContainer>
      <ExperienceContainer>
        <TitleWrapper>
          <CustomText
            color={COLORS.black}
            fontSize={FONT_SIZE.max24}
            fontWeight={FONT_WEIGHT.medium}
            text="EXPERIENCE"
          />
        </TitleWrapper>
      </ExperienceContainer>
    </ResumeContainer>
  );
};

export default Resume;
