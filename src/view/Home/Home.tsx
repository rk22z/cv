import React from "react";

// import ProfileImage from "assets/images/profileImage.png";
import ProfileImage from "assets/images/CV_picture.jpeg";
import { AiOutlineArrowUp } from "react-icons/ai";

import {
  HomeContainer,
  HomeLeftContainer,
  HomeRightContainer,
  HomeRightImage,
  HomeRightImageWrapper,
  HomeSection,
  OpenPdfButtonWrapper,
  UpToTopButton,
} from "./HomeStyled";

import About from "view/About/About";
import Resume from "view/Resume/Resume";
import Contact from "view/Contact/Contact";
import CustomButton from "components/CustomButton/CustomButton";
import { ButtonType } from "components/CustomButton/CustomButtonModel";
import { COLORS } from "constants/variables";

const Home = () => {
  return (
    <HomeContainer>
      <HomeLeftContainer>
        <HomeSection id="about-section">
          <About />
        </HomeSection>
        <HomeSection id="resume-section">
          <Resume />
        </HomeSection>
        <HomeSection id="contact-section">
          <Contact />
        </HomeSection>
      </HomeLeftContainer>
      <HomeRightContainer>
        <HomeRightImageWrapper>
          <HomeRightImage src={ProfileImage} alt="Profile Picture" />
        </HomeRightImageWrapper>
      </HomeRightContainer>
      <UpToTopButton
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <AiOutlineArrowUp />
      </UpToTopButton>
      <OpenPdfButtonWrapper>
        <CustomButton
          type={ButtonType.DOWNLOAD}
          text="Open PDF"
          onClick={() => window.open("/Robert_Zaharencu_CV.pdf", "_blank")}
          color={COLORS.white}
        />
      </OpenPdfButtonWrapper>
    </HomeContainer>
  );
};

export default Home;
