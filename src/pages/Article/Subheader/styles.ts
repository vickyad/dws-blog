import styled from "styled-components";
import { H1Style, H2Style } from "../../../styles/typography";
import { FlexColumnStyle } from "../../../styles/commonStyles";

export const Container = styled.div`
  ${FlexColumnStyle};
  gap: 1.5rem;
`;

export const Title = styled.h1`
  ${H2Style};
  color: ${({ theme }) => theme.colors.primary.dark};

  @media screen and (min-width: 1024px) {
    ${H1Style};
    max-width: 55rem;
    margin: 0 auto;
  }
`;
