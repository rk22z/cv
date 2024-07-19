import styled from "styled-components";
import { PADDING, SIZE } from "constants/variables";

export const PresentationContainer = styled.div`
  width: 100%;
  height: calc(100vh - ${SIZE.max100});
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  row-gap: ${PADDING.max100};
  width: fit-content;
  margin: 0 auto;
`;

export const PresentationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: ${PADDING.max16};

  /* width: 100%;
    height: 100%; */
`;

export const NameWrapper = styled.div``;

export const FunctionWrapper = styled.div``;

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
