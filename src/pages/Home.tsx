import { useEffect, useState } from "react";
import axios from "axios";
import ArticleCard from "../components/ArticleCard";
import styled from "styled-components";

function App() {
  const [articlesList, setArticlesList] = useState<any>([]);

  useEffect(() => {
    axios
      .get("https://tech-test-backend.dwsbrazil.io/posts/")
      .then((response) => setArticlesList(response.data));
  }, []);

  const Container = styled.div`
    padding: 1rem;
  `;

  const ArticleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media screen and (min-width: 1024px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  `;

  return (
    <Container>
      <ArticleContainer>
        {articlesList.map((article: any) => (
          <ArticleCard {...article} />
        ))}
      </ArticleContainer>
    </Container>
  );
}

export default App;
