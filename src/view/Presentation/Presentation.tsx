import React from "react";

import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineGlobal,
  AiOutlineHome,
} from "react-icons/ai";

import {
  PresentationContainer,
  ContactInfoWrapper,
  ContactRowWrapper,
  FunctionWrapper,
  NameWrapper,
  PresentationWrapper,
  ValueLink,
} from "./PresentationStyled";

import CustomText from "components/CustomText/CustomText";

import { COLORS, FONT_SIZE, FONT_WEIGHT } from "constants/variables";

const Presentation = () => {
  const presentationInfo = [
    {
      icon: <AiOutlinePhone fontSize={20} />,
      title: "Phone",
      value: "tel:0745338611",
      displayedValue: "0745 338 611",
    },
    {
      icon: <AiOutlineMail fontSize={20} />,
      title: "Email",
      value: "mailto:robert.zaharencu@gmail.com",
      target: "_blank",
      displayedValue: "robert.zaharencu@gmail.com",
    },
    {
      icon: <AiOutlineGlobal fontSize={20} />,
      title: "Website",
      value: "https://github.com/rk22z",
      target: "_blank",
      displayedValue: "https://github.com/rk22z",
    },
    {
      icon: <AiOutlineHome fontSize={20} />,
      title: "Address",
      value: "https://maps.app.goo.gl/8HBV2N5W2BEFUn5y7",
      target: "_blank",
      displayedValue: "Bucharest, Romania",
    },
  ];
  return (
    <PresentationContainer>
      <PresentationWrapper>
        <NameWrapper>
          <CustomText
            color={COLORS.black}
            fontSize={FONT_SIZE.max64}
            fontWeight={FONT_WEIGHT.medium}
            text="Robert Zaharencu"
          />
        </NameWrapper>
        <FunctionWrapper>
          <CustomText
            color={COLORS.black}
            fontSize={FONT_SIZE.max48}
            fontWeight={FONT_WEIGHT.regular}
            text="Frontend Developer"
          />
        </FunctionWrapper>
      </PresentationWrapper>
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
      </ContactInfoWrapper>
    </PresentationContainer>
  );
};

export default Presentation;
