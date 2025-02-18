import styled from "styled-components";
import { FlexColumnStyle, FlexRowStyle } from "../../../styles/commonStyles";
import { BodyLargeStyle } from "../../../styles/typography";

export const Container = styled.div`
  ${FlexColumnStyle};
  gap: 1rem;
  box-shadow: 0px 4px 29.6px 0px #5b7bc13d;
  background-color: ${({ theme }) => theme.colors.neutrals.lightest};
  border-radius: 1rem;
  padding: 1rem;
  height: fit-content;
`;

export const Title = styled.h2`
  ${FlexRowStyle};
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.primary.dark};
  font-weight: 600;
  font-size: 1.5rem;
`;

export const Subtitle = styled.h3`
  ${BodyLargeStyle};
  margin-bottom: 0.25rem;
`;

export const OptionsContainer = styled.div`
  ${FlexColumnStyle};
  gap: 0.25rem;
`;

export const Option = styled.button<{ $selected: boolean }>`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutrals.extraLight};
  padding: 0.75rem 0.5rem;
  text-align: left;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent.extraLight};
    border-bottom: 1px solid ${({ theme }) => theme.colors.accent.medium};
  }

  ${({ theme, $selected }) =>
    $selected &&
    `
    border-radius: 0.5rem;
    background-color: ${theme.colors.accent.extraLight};
    color: ${theme.colors.accent.medium};
    border: 1px solid ${theme.colors.accent.medium};
  `}
`;
