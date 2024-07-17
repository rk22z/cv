import React from "react";

import {
  HeaderContainer,
  HeaderLogoText,
  HeaderLogoWrapper,
  HeaderMenuItemWrapper,
  HeaderMenuWrapper,
} from "./HeaderStyled";

import CustomButton from "components/CustomButton/CustomButton";

import { ButtonType } from "components/CustomButton/CustomButtonModel";

const Header = () => {
  const menuItem = [
    {
      id: 1,
      name: "about",
    },
    {
      id: 2,
      name: "resume",
    },
    {
      id: 3,
      name: "contact",
    },
  ];

  const handleClickScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <HeaderContainer>
      <HeaderLogoWrapper>
        <HeaderLogoText>Curriculum Vitae</HeaderLogoText>
      </HeaderLogoWrapper>
      <HeaderMenuWrapper>
        {menuItem?.map((item) => (
          <HeaderMenuItemWrapper key={item.id}>
            <CustomButton
              text={item.name}
              type={ButtonType.HEADER}
              onClick={() => handleClickScroll(`${item.name}-section`)}
            />
          </HeaderMenuItemWrapper>
        ))}
      </HeaderMenuWrapper>
    </HeaderContainer>
  );
};

export default Header;
