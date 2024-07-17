import React from "react";

import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineGlobal,
  AiOutlineHome,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineFacebook,
} from "react-icons/ai";

import {
  ContactContainer,
  ContactInfoWrapper,
  ContactRowWrapper,
  ContactTitleWrapper,
  SocialMediaLink,
  SocialMediaRowWrapper,
  SocialMediaWrapper,
  Text,
  ValueLink,
} from "./ContactStyled";
import { COLORS, FONT_SIZE, FONT_WEIGHT, PADDING } from "constants/variables";

const Contact = () => {
  const contactInfo = [
    {
      icon: <AiOutlinePhone fontSize={20} />,
      title: "Phone",
      value: "tel:0745338611",
      displayedValue: "0745 338 611",
    },
    {
      icon: <AiOutlineMail fontSize={24} />,
      title: "Email",
      value: "mailto:robert.zaharencu@gmail.com",
      target: "_blank",
      displayedValue: "robert.zaharencu@gmail.com",
    },
    {
      icon: <AiOutlineGlobal fontSize={24} />,
      title: "Website",
      value: "https://github.com/rk22z",
      target: "_blank",
      displayedValue: "https://github.com/rk22z",
    },
    {
      icon: <AiOutlineHome fontSize={24} />,
      title: "Address",
      value: "https://maps.app.goo.gl/8HBV2N5W2BEFUn5y7",
      target: "_blank",
      displayedValue: "Bucharest, Romania",
    },
  ];

  const socialMediaInfo = [
    {
      icon: <AiOutlineLinkedin fontSize={24} />,
      title: "LinkedIn",
      value: "https://www.linkedin.com/in/robert-gabriel-zaharencu-930a77172/",
      target: "_blank",
    },
    {
      icon: <AiOutlineInstagram fontSize={24} />,
      title: "Instagram",
      value: "https://www.instagram.com/robertzaharencu/",
      target: "_blank",
    },
    {
      icon: <AiOutlineFacebook fontSize={24} />,
      title: "Facebook",
      value: "https://www.facebook.com/profile.php?id=100007872167896",
      target: "_blank",
    },
  ];

  return (
    <ContactContainer>
      <ContactTitleWrapper>
        <Text
          color={COLORS.black}
          fontSize={FONT_SIZE.max24}
          fontWeight={FONT_WEIGHT.medium}
          letterSpacing={PADDING.max8}
        >
          CONTACT
        </Text>
      </ContactTitleWrapper>
      <ContactInfoWrapper>
        {contactInfo.map((contact) => (
          <ContactRowWrapper key={contact.title}>
            {contact.icon}
            <Text
              color={COLORS.black}
              fontSize={FONT_SIZE.max20}
              fontWeight={FONT_WEIGHT.bold}
            >
              {contact.title}
            </Text>
            <ValueLink
              color={COLORS.darkGray}
              fontSize={FONT_SIZE.max20}
              fontWeight={FONT_WEIGHT.regular}
              href={contact.value}
              target={contact.target ? contact.target : undefined}
            >
              {contact.displayedValue}
            </ValueLink>
          </ContactRowWrapper>
        ))}
        <SocialMediaWrapper>
          {socialMediaInfo.map((socialMedia) => (
            <SocialMediaRowWrapper key={socialMedia.title}>
              {socialMedia.icon}
              <SocialMediaLink
                color={COLORS.darkGray}
                fontSize={FONT_SIZE.max20}
                fontWeight={FONT_WEIGHT.regular}
                href={socialMedia.value}
                target={socialMedia.target ? socialMedia.target : undefined}
              >
                {socialMedia.title}
              </SocialMediaLink>
            </SocialMediaRowWrapper>
          ))}
        </SocialMediaWrapper>
      </ContactInfoWrapper>
    </ContactContainer>
  );
};

export default Contact;
