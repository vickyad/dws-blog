import { ReactNode } from "react";
import styled from "styled-components";
import { BodyLargeStyle } from "../../styles/typography";

interface IButton {
  children: ReactNode;
  handleClick: () => void;
}

const ButtonStyle = styled.button`
  ${BodyLargeStyle};
  border: 1px solid ${({ theme }) => theme.colors.secondary.medium};
  color: ${({ theme }) => theme.colors.secondary.medium};
  fill: ${({ theme }) => theme.colors.secondary.medium};
  font-weight: 600;
  display: flex;
  gap: 0.25rem;
  border-radius: 2rem;
  width: fit-content;
  padding: 0.75rem;
  background-color: transparent;
`;

const Button = ({ children, handleClick }: IButton) => {
  return <ButtonStyle onClick={handleClick}>{children}</ButtonStyle>;
};
export default Button;
