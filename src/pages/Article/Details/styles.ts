import styled from "styled-components";
import { BodyLargeStyle, CaptionStyle } from "../../../styles/typography";
import { FlexRowStyle } from "../../../styles/commonStyles";

export const DetailsContainer = styled.div`
  ${CaptionStyle};
  ${FlexRowStyle};
  gap: 0.5rem;

  @media screen and (min-width: 1024px) {
    ${BodyLargeStyle};
  }
`;

export const AuthorImg = styled.img`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%¨;
  object-fit: cover;

  @media screen and (min-width: 1024px) {
    height: 4rem;
    width: 4rem;
  }
`;
