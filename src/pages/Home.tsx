import { useEffect, useState } from "react";
import axios from "axios";
import ArticleCard from "../components/ArticleCard";
import styled from "styled-components";
import { H2Style } from "../styles/typography";

const Container = styled.div`
  padding: 1rem;

  @media screen and (min-width: 1024px) {
    padding: 2rem 3.5rem;
  }
`;

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
`;

const Title = styled.h1`
  ${H2Style};
  color: ${({ theme }) => theme.colors.primary.dark};
`;

const TitleContainer = styled.div`
  margin-bottom: 2rem;
`;

function App() {
  const [articlesList, setArticlesList] = useState<any>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 768px)").matches);

    axios
      .get("https://tech-test-backend.dwsbrazil.io/posts/")
      .then((response) => setArticlesList(response.data));
  }, []);

  return (
    <Container>
      {isMobile ? null : (
        <TitleContainer>
          <Title>DWS blog</Title>
        </TitleContainer>
      )}
      <ArticleContainer>
        {articlesList.map((article: any) => (
          <ArticleCard {...article} />
        ))}
      </ArticleContainer>
    </Container>
  );
}

export default App;
