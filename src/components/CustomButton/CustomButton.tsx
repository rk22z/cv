import React from "react";

import {
  CustomButtonContainer,
  CustomButtonTextWrapper,
  CustomButtonText,
} from "./CustomButtonStyled";
import { ButtonType, IProps } from "./CustomButtonModel";

const CustomButton = (props: IProps) => {
  const {
    text = "",
    onClick = () => {},
    type = ButtonType.PRIMARY,
    color = "black",
  } = props;

  return (
    <CustomButtonContainer onClick={onClick} type={type}>
      <CustomButtonTextWrapper>
        <CustomButtonText color={color} type={type}>
          {text}
        </CustomButtonText>
      </CustomButtonTextWrapper>
    </CustomButtonContainer>
  );
};

export default CustomButton;
