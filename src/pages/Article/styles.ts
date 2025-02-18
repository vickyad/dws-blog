import styled from "styled-components";
import { BodySmallStyle } from "../../styles/typography";
import { FlexColumnStyle } from "../../styles/commonStyles";

export const Container = styled.div`
  ${FlexColumnStyle};
  padding: 1rem;
  gap: 1rem;

  @media screen and (min-width: 1024px) {
    padding: 3.5rem 17.66rem 3.5rem 3.5rem;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1.5rem 7.375rem;
  }
`;

export const BannerImg = styled.img`
  border-radius: 1rem;
  height: 9.375rem;
  width: 100%;
  object-fit: cover;
  margin: 0.5rem 0;

  @media screen and (min-width: 1024px) {
    height: 23.938rem;
    margin: 0;
  }
`;

export const ContentContainer = styled.div`
  @media screen and (min-width: 1024px) {
    ${FlexColumnStyle};
    gap: 1rem;
    max-width: 55rem;
    margin: 0 auto;
  }
`;

export const Content = styled.p`
  ${BodySmallStyle};
`;

export const HorizontalLine = styled.hr`
  border-top-color: ${({ theme }) => theme.colors.neutrals.lightest};
  margin: 1rem 0 0.75rem;

  @media screen and (min-width: 1024px) {
    margin: 1.5rem 0;
  }
`;
