import styled from "styled-components";
import { BodySmallStyle, CaptionStyle, H3Style } from "../../styles/typography";
import { FlexColumnStyle, FlexRowStyle } from "../../styles/commonStyles";

export const ContentContainer = styled.div`
  ${FlexColumnStyle};
  border-radius: 0 0 1rem 1rem;
  background-color: ${({ theme }) => theme.colors.neutrals.lightest};
  padding: 1rem;
  gap: 1rem;
`;

export const BannerImg = styled.img`
  border-radius: 1rem 1rem 0 0;
  height: 9.375rem;
  width: 100%;
  object-fit: cover;

  @media screen and (min-width: 1024px) {
    height: 12.25rem;
  }
`;

export const Description = styled.p`
  ${BodySmallStyle};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-top: -0.5rem;
`;

export const Decoration = styled.span`
  display: block;
  background-color: ${({ theme }) => theme.colors.secondary.medium};
  height: 5px;
  width: 5px;
  border-radius: 50%;
`;

export const Details = styled.div`
  ${BodySmallStyle};
  ${FlexRowStyle};
  gap: 0.5rem;
  align-items: center;
  color: ${({ theme }) => theme.colors.neutrals.extraDark};
`;

export const Category = styled.p`
  background-color: ${({ theme }) => theme.colors.neutrals.extraLight};
  border-radius: 1.5rem;
  width: fit-content;
  padding: 0.5rem 0.75rem;
  color: ${({ theme }) => theme.colors.neutrals.extraDark};
`;

export const CategoryContainer = styled.div`
  ${CaptionStyle};
  ${FlexRowStyle};
  gap: 0.75rem;
  margin-top: auto;
`;

export const Container = styled.a`
  text-decoration: none;
  color: #000000;
  cursor: pointer;
  box-shadow: 0px 4px 16px 0px #5b7bc14a;
  border-radius: 1rem;
  height: 23.063rem;

  @media screen and (min-width: 1024px) {
    height: 26.563rem;
  }
`;

export const Title = styled.h2`
  ${H3Style};
  color: ${({ theme }) => theme.colors.primary.dark};
`;
