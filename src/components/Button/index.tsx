import { ReactNode } from "react";
import styled from "styled-components";
import { BodyLargeStyle, CaptionStyle } from "../../styles/typography";

interface IButton {
  children: ReactNode;
  style?: React.CSSProperties;
  handleClick: () => void;
}

const ButtonStyle = styled.button`
  ${CaptionStyle};
  border: 1px solid ${({ theme }) => theme.colors.secondary.medium};
  color: ${({ theme }) => theme.colors.secondary.medium};
  fill: ${({ theme }) => theme.colors.secondary.medium};
  font-weight: 700;
  display: flex;
  gap: 0.25rem;
  border-radius: 2rem;
  width: fit-content;
  padding: 0.5rem 0.75rem;
  background-color: transparent;
  height: fit-content;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary.extraLight};
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

const Button = ({ children, style, handleClick }: IButton) => {
  return (
    <ButtonStyle onClick={handleClick} style={style}>
      {children}
    </ButtonStyle>
  );
};
export default Button;
