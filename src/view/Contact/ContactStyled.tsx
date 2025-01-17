import styled from "styled-components";
import { PADDING, SIZE } from "constants/variables";

export const ContactContainer = styled.div`
  /* width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  width: 100%;
  height: calc(100vh - ${SIZE.max100});
  display: flex;
  flex-direction: column;
  justify-content: center;

  row-gap: ${PADDING.max32};
  width: fit-content;
  margin: 0 auto;
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

export const ContactTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: ${PADDING.max16};

  /* width: 100%;
  height: 100%; */
`;

export const ContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${PADDING.max16};
`;

export const ContactRowWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: ${PADDING.max8};
`;

export const ValueLink = styled.a<{
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
  text-decoration: none;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
`;

export const SocialMediaRowWrapper = styled.div`
  display: flex;
  align-items: center;
  align-items: flex-end;
  column-gap: ${PADDING.max8};
  /* background-color: blueviolet; */
`;

export const SocialMediaLink = styled.a<{
  color?: string;
  fontSize?: string;
  fontWeight?: string | number;
  letterSpacing?: string;
}>`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
`;
