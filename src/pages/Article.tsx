import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import ArticleCard from "../components/ArticleCard";
import styled from "styled-components";
import Button from "../components/Button";
import Icon from "../components/Icons";

const DetailsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const AuthorImg = styled.img`
  height: 3rem;
  width: 3rem;
  border-radius: 50%¨;
  object-fit: cover;
`;

const BannerImg = styled.img`
  border-radius: 1rem;
  height: 12.25rem;
  width: 100%;
  object-fit: cover;
`;

const HorizontalLine = styled.hr`
  border-top-color: ${({ theme }) => theme.colors.neutrals.lightest};
  margin: 1rem 0;
`;

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Container = styled.div`
  padding: 1rem;
`;

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<any>(null);
  const [lastArticles, setLastArticles] = useState<any>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://tech-test-backend.dwsbrazil.io/posts/${id}`)
      .then((response) => setArticle(response.data));
  }, [id]);

  useEffect(() => {
    axios
      .get("https://tech-test-backend.dwsbrazil.io/posts/")
      .then((response) =>
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
        <ArticleContainer>
          <Button handleClick={() => navigate(-1)}>
            <Icon variant="arrow" /> Back
          </Button>
          <h1>{article.title}</h1>
          <DetailsContainer>
            <AuthorImg src={article.author.profilePicture} />
            <div>
              <p>Written by: {article.author.name}</p>
              <p>{dayjs(article.createdAt).format("MMM DD, YYYY")}</p>
            </div>
          </DetailsContainer>
          <BannerImg src={article.thumbnail_url} />
          <p>{article.content}</p>
          <HorizontalLine />
          <h2>Last Articles</h2>
          {lastArticles.map((article: any) => (
            <ArticleCard {...article} />
          ))}
        </ArticleContainer>
      ) : null}
    </Container>
  );
};
export default Article;
