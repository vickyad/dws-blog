import styled from "styled-components";
import {
  BodyLargeStyle,
  BodySmallStyle,
  H2Style,
} from "../../../styles/typography";
import {
  FlexRowCenterSpaceBetweenStyle,
  FlexRowStyle,
} from "../../../styles/commonStyles";

export const Title = styled.h1`
  ${H2Style};
  color: ${({ theme }) => theme.colors.primary.dark};
`;

export const HeaderContainer = styled.div`
  ${FlexRowCenterSpaceBetweenStyle};
  gap: 0.5rem;
  margin-bottom: 1rem;

  @media screen and (min-width: 1024px) {
    align-items: flex-end;
    margin-bottom: 2rem;
  }
`;

export const SortByContainer = styled.div`
  ${FlexRowStyle};
  gap: 0.25rem;
  color: ${({ theme }) => theme.colors.neutrals.extraDark};
`;

export const SortByButton = styled.button`
  ${BodySmallStyle};
  ${FlexRowStyle};
  color: ${({ theme }) => theme.colors.neutrals.extraDark};
  gap: 0.5rem;
  background-color: transparent;
  border: none;
  border-radius: 2rem;
  padding: 0.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent.medium};
    color: ${({ theme }) => theme.colors.neutrals.lightest};
    font-weight: 600;
  }

  &:hover path {
    fill: ${({ theme }) => theme.colors.neutrals.lightest};
  }

  @media screen and (min-width: 1024px) {
    ${BodyLargeStyle};
  }
`;

export const SelectContainer = styled.div`
  ${FlexRowStyle};
  gap: 0.5rem;
`;
