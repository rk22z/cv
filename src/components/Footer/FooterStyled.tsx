import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const Text = styled.span<{
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
