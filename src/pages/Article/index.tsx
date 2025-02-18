import { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../../api/axios";
import Header from "./Header";
import {
  BannerImg,
  Container,
  Content,
  ContentContainer,
  HorizontalLine,
} from "./styles";
import Details from "./Details";
import LastArticles from "./LastArticles";

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<any>(null);
  const [lastArticles, setLastArticles] = useState<any>([]);

  useEffect(() => {
    api.get(`/posts/${id}`).then((response) => setArticle(response.data));
  }, [id]);

  useEffect(() => {
    api.get("/posts").then((response) =>
      setLastArticles(
        response.data
          .sort((a: any, b: any) => a.createdAt > b.createdAt)
          .filter((a: any) => a.id !== article.id)
          .slice(0, 3)
      )
    );
  }, [article]);

  return (
    <Container>
      {article ? (
        <>
          <Header title={article.title} />
          <span />
          <ContentContainer>
            <Details author={article.author} createdAt={article.createdAt} />
            <BannerImg src={article.thumbnail_url} />
            <Content>{article.content}</Content>
            <HorizontalLine />
            <LastArticles lastArticles={lastArticles} />
          </ContentContainer>
        </>
      ) : null}
    </Container>
  );
};
export default Article;
