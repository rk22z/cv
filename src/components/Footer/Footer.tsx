import React from "react";

import { FooterContainer, Text } from "./FooterStyled";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "constants/variables";

const Footer = () => {
  return (
    <FooterContainer>
      <Text
        color={COLORS.lightGreen}
        fontSize={FONT_SIZE.max16}
        fontWeight={FONT_WEIGHT.light}
      >
        © 2024 by Robert Zaharencu. All rights reserved.
      </Text>
    </FooterContainer>
  );
};

export default Footer;
