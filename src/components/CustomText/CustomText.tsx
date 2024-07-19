import React from "react";

import { CustomTextStyled } from "./CustomTextStyled";

import { IProps } from "./CustomTextModel";
import { COLORS, FONT_SIZE, FONT_WEIGHT, PADDING } from "constants/variables";

const CustomText = (props: IProps) => {
  const {
    text = "",
    color = `${COLORS.black}`,
    fontSize = `${FONT_SIZE.max16}`,
    fontWeight = `${FONT_WEIGHT.regular}`,
    letterSpacing = "0px",
  } = props;

  return (
    <CustomTextStyled
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      letterSpacing={letterSpacing}
    >
      {text}
    </CustomTextStyled>
  );
};

export default CustomText;
