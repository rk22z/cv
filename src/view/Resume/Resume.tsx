import React from "react";

import {
  ExperienceContainer,
  ExperienceElementTextWrapper,
  ExperienceElementWrapper,
  ExperienceWrapper,
  KeyAchievementsContainer,
  KeyAchievementsElementWrapper,
  KeyAchievementsWrapper,
  ResumeContainer,
  SkillsContainer,
  SkillsWrapper,
  SkillWrapper,
  TechStackBox,
  TechStackContainer,
  TechStackElementDescriptionWrapper,
  TechStackElementIconWrapper,
  TechStackElementWrapper,
  TechStackWrapper,
  TitleWrapper,
} from "./ResumeStyled";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "constants/variables";
import {
  experience,
  keyAchievements,
  skills,
  techStack,
} from "constants/mocks";

import CustomText from "components/CustomText/CustomText";

const Resume = () => {
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
      <TechStackContainer>
        <TitleWrapper>
          <CustomText
            color={COLORS.black}
            fontSize={FONT_SIZE.max24}
            fontWeight={FONT_WEIGHT.medium}
            text="TECH STACK"
          />
        </TitleWrapper>
        <TechStackWrapper>
          <TechStackBox>
            {techStack.map((tech) => {
              return (
                <TechStackElementWrapper key={tech.id}>
                  <TechStackElementIconWrapper>
                    {tech.icon}
                  </TechStackElementIconWrapper>
                  <TechStackElementDescriptionWrapper>
                    <CustomText
                      color={COLORS.black}
                      fontSize={FONT_SIZE.max16}
                      fontWeight={FONT_WEIGHT.regular}
                      text={tech.description}
                    />
                  </TechStackElementDescriptionWrapper>
                </TechStackElementWrapper>
              );
            })}
          </TechStackBox>
        </TechStackWrapper>
      </TechStackContainer>
      <ExperienceContainer>
        <TitleWrapper>
          <CustomText
            color={COLORS.black}
            fontSize={FONT_SIZE.max24}
            fontWeight={FONT_WEIGHT.medium}
            text="EXPERIENCE"
          />
        </TitleWrapper>
        <ExperienceWrapper>
          {experience.map((exp) => {
            return (
              <ExperienceElementWrapper key={exp.id}>
                <ExperienceElementTextWrapper>
                  <CustomText
                    color={COLORS.black}
                    fontSize={FONT_SIZE.max20}
                    fontWeight={FONT_WEIGHT.medium}
                    text={exp.period}
                  />
                </ExperienceElementTextWrapper>
                <ExperienceElementTextWrapper>
                  <CustomText
                    color={COLORS.black}
                    fontSize={FONT_SIZE.max20}
                    fontWeight={FONT_WEIGHT.medium}
                    text={exp.title}
                  />
                </ExperienceElementTextWrapper>
                <ExperienceElementTextWrapper>
                  <CustomText
                    color={COLORS.black}
                    fontSize={FONT_SIZE.max16}
                    fontWeight={FONT_WEIGHT.regular}
                    text={exp.company}
                  />
                </ExperienceElementTextWrapper>
              </ExperienceElementWrapper>
            );
          })}
        </ExperienceWrapper>
      </ExperienceContainer>
      <KeyAchievementsContainer>
        <TitleWrapper>
          <CustomText
            color={COLORS.black}
            fontSize={FONT_SIZE.max24}
            fontWeight={FONT_WEIGHT.medium}
            text="KEY ACHIEVEMENTS"
          />
        </TitleWrapper>
        <KeyAchievementsWrapper>
          {keyAchievements.map((achievement) => {
            return (
              <KeyAchievementsElementWrapper key={achievement.id}>
                <CustomText
                  color={COLORS.darkGray}
                  fontSize={FONT_SIZE.max20}
                  fontWeight={FONT_WEIGHT.regular}
                  text={achievement.description}
                />
              </KeyAchievementsElementWrapper>
            );
          })}
        </KeyAchievementsWrapper>
      </KeyAchievementsContainer>
    </ResumeContainer>
  );
};

export default Resume;
