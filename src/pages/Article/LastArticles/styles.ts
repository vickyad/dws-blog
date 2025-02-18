import styled from "styled-components";
import { H2Style } from "../../../styles/typography";

export const Subtitle = styled.h2`
  ${H2Style};
  margin-bottom: 0.75rem;

  @media screen and (min-width: 1024px) {
    margin: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    gap: 1.5rem;
  }
`;
