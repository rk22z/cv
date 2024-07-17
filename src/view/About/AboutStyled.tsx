import { PADDING, SIZE } from "constants/variables";
import styled from "styled-components";

export const AboutContainer = styled.div`
  width: 100%;
  height: calc(100vh - ${SIZE.max100});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${PADDING.max64};
`;
export const Text = styled.span<{
  color: string;
  fontSize: string;
  fontWeight: string | number;
}>`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
`;

export const PresentationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  /* width: 100%;
  height: 100%; */
`;

export const NameWrapper = styled.div``;

export const FunctionWrapper = styled.div``;

export const ContactInfoWrapper = styled.div``;
