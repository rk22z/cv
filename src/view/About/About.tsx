import React from "react";

import {
  AboutContainer,
  ContactInfoWrapper,
  FunctionWrapper,
  NameWrapper,
  PresentationWrapper,
  Text,
} from "./AboutStyled";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "constants/variables";

const About = () => {
  return (
    <AboutContainer>
      <PresentationWrapper>
        <NameWrapper>
          <Text
            color={COLORS.black}
            fontSize={FONT_SIZE.max64}
            fontWeight={FONT_WEIGHT.medium}
          >
            Robert Zaharencu
          </Text>
        </NameWrapper>
        <FunctionWrapper>
          <Text
            color={COLORS.black}
            fontSize={FONT_SIZE.max48}
            fontWeight={FONT_WEIGHT.regular}
          >
            Frontend Developer
          </Text>
        </FunctionWrapper>
      </PresentationWrapper>
      <ContactInfoWrapper>
        <Text
          color={COLORS.black}
          fontSize={FONT_SIZE.max24}
          fontWeight={FONT_WEIGHT.bold}
        >
          phone
        </Text>
      </ContactInfoWrapper>
    </AboutContainer>
  );
};

export default About;
