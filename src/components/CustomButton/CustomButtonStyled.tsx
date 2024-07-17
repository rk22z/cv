import styled, { css } from "styled-components";
import { ButtonType } from "./CustomButtonModel";
import { COLORS, FONT_SIZE, PADDING } from "constants/variables";

export const CustomButtonContainer = styled.button<{ type: ButtonType }>`
  width: 100%;
  height: 100%;

  cursor: pointer;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ type }) =>
    type === ButtonType.DOWNLOAD &&
    css`
      background-color: ${COLORS.black};
    `}
  ${({ type }) =>
    type === ButtonType.HEADER &&
    css`
      background-color: transparent;
    `}
`;

export const CustomButtonTextWrapper = styled.div``;

export const CustomButtonText = styled.span<{
  color: string;
  type: ButtonType;
}>`
  ${({ type }) =>
    type === ButtonType.DOWNLOAD &&
    css`
      color: ${COLORS.white};
      font-size: ${FONT_SIZE.max12};
      letter-spacing: 2px;
    `}
`;
