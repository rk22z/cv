import {
  PresentationContainer,
  ContactInfoWrapper,
  ContactRowWrapper,
  FunctionWrapper,
  NameWrapper,
  PresentationWrapper,
  ValueLink,
} from "./PresentationStyled";

import { COLORS, FONT_SIZE, FONT_WEIGHT } from "constants/variables";
import { presentationInfo } from "constants/mocks";

import CustomText from "components/CustomText/CustomText";

const Presentation = () => {
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
        {presentationInfo?.map((contact) => (
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
