import React from "react";

import {
  ContentContainer,
  FooterContainer,
  HeaderContainer,
  LayoutContainer,
} from "./LayoutStyled";

import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <ContentContainer>{children}</ContentContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </LayoutContainer>
  );
};

export default Layout;
