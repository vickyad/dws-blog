import ArticleCard from "../../../components/ArticleCard";
import { Container, Subtitle } from "./styles";

interface ILastArticles {
  lastArticles: any[];
}

const LastArticles = ({ lastArticles }: ILastArticles) => {
  return (
    <>
      <Subtitle>Last Articles</Subtitle>
      <Container>
        {lastArticles.map((article: any) => (
          <ArticleCard {...article} />
        ))}
      </Container>
    </>
  );
};
export default LastArticles;
