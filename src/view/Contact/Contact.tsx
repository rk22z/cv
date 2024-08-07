import React from "react";

import {
  ContactContainer,
  ContactInfoWrapper,
  ContactRowWrapper,
  ContactTitleWrapper,
  SocialMediaLink,
  SocialMediaRowWrapper,
  SocialMediaWrapper,
  ValueLink,
} from "./ContactStyled";

import { COLORS, FONT_SIZE, FONT_WEIGHT, PADDING } from "constants/variables";
import { presentationInfo, socialMediaInfo } from "constants/mocks";

import CustomText from "components/CustomText/CustomText";

const Contact = () => {
  return (
    <ContactContainer>
      <ContactTitleWrapper>
        <CustomText
          color={COLORS.black}
          fontSize={FONT_SIZE.max24}
          fontWeight={FONT_WEIGHT.medium}
          letterSpacing={PADDING.max8}
          text="CONTACT"
        />
      </ContactTitleWrapper>
      <ContactInfoWrapper>
        {presentationInfo.map((contact) => (
          <ContactRowWrapper key={contact.title}>
            {contact.icon}
            <CustomText
              color={COLORS.black}
              fontSize={FONT_SIZE.max20}
              fontWeight={FONT_WEIGHT.bold}
              text={contact.title}
            />

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
