import React from "react";

import {
  AboutContainer,
  AboutTextWrapper,
  AboutTitleWrapper,
} from "./AboutStyled";

import { COLORS, FONT_SIZE, FONT_WEIGHT, PADDING } from "constants/variables";
import { aboutText } from "constants/mocks";

import CustomText from "components/CustomText/CustomText";

const About = () => {
  return (
    <AboutContainer>
      <AboutTitleWrapper>
        <CustomText
          color={COLORS.black}
          fontSize={FONT_SIZE.max24}
          fontWeight={FONT_WEIGHT.medium}
          letterSpacing={PADDING.max8}
          text="ABOUT"
        />
      </AboutTitleWrapper>

      <AboutTextWrapper>
        <CustomText
          color={COLORS.darkGray}
          fontSize={FONT_SIZE.max20}
          fontWeight={FONT_WEIGHT.regular}
          letterSpacing="3px"
          text={aboutText}
        />
      </AboutTextWrapper>
    </AboutContainer>
  );
};

export default About;
