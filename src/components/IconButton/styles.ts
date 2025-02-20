import styled from "styled-components";
import { FlexCenterStyle } from "../../styles/commonStyles";

export const Button = styled.button`
  ${FlexCenterStyle};
  background-color: ${({ theme }) => theme.colors.primary.dark};
  border: none;
  border-radius: 50%;
  height: 2rem;
  width: 2rem;

  svg {
    height: 0.75rem;
    width: 0.75rem;
  }

  @media screen and (min-width: 1024px) {
    height: 2.5rem;
    width: 2.5rem;

    svg {
      height: 1rem;
      width: 1rem;
    }
  }
`;
