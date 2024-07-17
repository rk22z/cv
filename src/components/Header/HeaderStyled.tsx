import { COLORS, PADDING, SIZE } from "constants/variables";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 50%;
  height: ${SIZE.max100};
  background-color: ${COLORS.white};
  padding-inline: ${PADDING.max64};
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1); */
`;

export const HeaderLogoWrapper = styled.div``;

export const HeaderLogoText = styled.div``;

export const HeaderMenuWrapper = styled.div`
  display: flex;
  gap: ${PADDING.max12};
  align-items: center;
`;

export const HeaderMenuItemWrapper = styled.li`
  list-style: none;
  height: ${SIZE.max40};
  width: ${SIZE.max76};
`;
