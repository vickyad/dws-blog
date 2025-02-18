import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;

  @media screen and (min-width: 1024px) {
    padding: 2rem 3.5rem;
  }
`;

export const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
`;

export const InnerContainer = styled.div`
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 1.5rem;
  }
`;
