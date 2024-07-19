import React from "react";

import {
  AboutContainer,
  AboutTextWrapper,
  AboutTitleWrapper,
} from "./AboutStyled";

import CustomText from "components/CustomText/CustomText";

import { COLORS, FONT_SIZE, FONT_WEIGHT, PADDING } from "constants/variables";

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
          text="A highly motivated front-end developer, constantly searching to learn more and evolve. Skilled in HTML, CSS, JavaScript and other modern libraries and frameworks. Currently using my knowledge of React to create responsive and user-friendly websites and web applications.
"
        />
      </AboutTextWrapper>
    </AboutContainer>
  );
};

export default About;
