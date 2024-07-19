import styled from "styled-components";

export const CustomTextStyled = styled.span<{
  color?: string;
  fontSize?: string;
  fontWeight?: string | number;
  letterSpacing?: string;
}>`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  line-height: 1;
`;
