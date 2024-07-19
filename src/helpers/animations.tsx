import { keyframes } from "styled-components";

export const autoShowAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px) scale(0.3);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;
