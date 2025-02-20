import styled from "styled-components";

export const SearchContainer = styled.div`
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  border-radius: 2rem;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  box-shadow: 0px 3px 18.1px 0px #5b7bc14a;
  width: 33.5rem;

  &:has(input:focus),
  &:has(input:active) {
    border: 1px solid ${({ theme }) => theme.colors.accent.medium};
    box-shadow: none;
  }
`;

export const InputStyle = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  color: ${({ theme }) => theme.colors.neutrals.extraDark};
  background-color: transparent;

  &:active,
  &:focus {
    border: none;
    outline: none;
  }
`;
