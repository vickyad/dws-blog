import styled from "styled-components";
import { BodyLargeStyle, CaptionStyle } from "../../styles/typography";
import { FlexRowStyle } from "../../styles/commonStyles";

export const ButtonStyle = styled.button<{
  $variant: "primary" | "secondary";
}>`
  ${CaptionStyle};
  ${FlexRowStyle};
  border: ${({ theme, $variant }) =>
    $variant === "primary"
      ? "none"
      : `1px solid ${theme.colors.secondary.medium}`};
  color: ${({ theme, $variant }) =>
    $variant === "primary" ? "#ffffff" : theme.colors.secondary.medium};
  fill: ${({ theme, $variant }) =>
    $variant === "primary" ? "#ffffff" : theme.colors.secondary.medium};
  background-color: ${({ theme, $variant }) =>
    $variant === "primary" ? theme.colors.secondary.medium : "transparent"};
  justify-content: ${({ $variant }) =>
    $variant === "primary" ? "center" : "left"};
  font-weight: 700;
  gap: 0.25rem;
  border-radius: 2rem;
  width: fit-content;
  padding: ${({ $variant }) =>
    $variant === "primary" ? "0.75rem" : "0.5rem 0.75rem"};
  height: fit-content;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme, $variant }) =>
      $variant === "primary"
        ? theme.colors.secondary.dark
        : theme.colors.secondary.extraLight};
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media screen and (min-width: 1024px) {
    ${BodyLargeStyle};
    gap: 0.75rem;
    padding: 0.75rem 1rem;

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;
