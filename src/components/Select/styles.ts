import styled from "styled-components";
import { BodySmallStyle } from "../../styles/typography";
import { FlexColumnStyle } from "../../styles/commonStyles";

export const OptionsContainer = styled.ul`
  ${BodySmallStyle};
  ${FlexColumnStyle};
  background-color: ${({ theme }) => theme.colors.neutrals.lightest};
  box-shadow: 0px 4px 29.6px 0px #5b7bc13d;
  border-radius: 1rem;
  padding: 1rem;
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  gap: 0.5rem;
`;

export const TransparentButton = styled.button<{ $selected: boolean }>`
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  width: max-content;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem;
  border-radius: 0.5rem;

  ${({ theme, $selected }) =>
    $selected &&
    `
    background-color: ${theme.colors.accent.extraLight};
    color: ${theme.colors.accent.medium};
    border: 1px solid ${theme.colors.accent.medium};
  `}
`;
