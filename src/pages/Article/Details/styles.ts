import styled from "styled-components";
import { BodyLargeStyle, CaptionStyle } from "../../../styles/typography";

export const DetailsContainer = styled.div`
  ${CaptionStyle};
  display: flex;
  gap: 0.5rem;
  align-items: center;

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
