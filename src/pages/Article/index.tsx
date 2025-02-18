import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import ArticleCard from "../../components/ArticleCard";
import styled from "styled-components";
import Button from "../../components/Button";
import Icon from "../../components/Icons";
import {
  BodyLargeStyle,
  BodySmallStyle,
  CaptionStyle,
  H1Style,
  H2Style,
} from "../../styles/typography";

const DetailsContainer = styled.div`
  ${CaptionStyle};
  display: flex;
  gap: 0.5rem;
  align-items: center;

  @media screen and (min-width: 1024px) {
    ${BodyLargeStyle};
  }
`;

const AuthorImg = styled.img`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%¨;
  object-fit: cover;

  @media screen and (min-width: 1024px) {
    height: 4rem;
    width: 4rem;
  }
`;

const BannerImg = styled.img`
  border-radius: 1rem;
  height: 9.375rem;
  width: 100%;
  object-fit: cover;
  margin: 0.5rem 0;

  @media screen and (min-width: 1024px) {
    height: 23.938rem;
    margin: 0;
  }
`;

const HorizontalLine = styled.hr`
  border-top-color: ${({ theme }) => theme.colors.neutrals.lightest};
  margin: 1rem 0 0.75rem;

  @media screen and (min-width: 1024px) {
    margin: 1.5rem 0;
  }
`;

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: 1024px) {
    width: 80%;
    margin: 0 auto;
    max-width: 62.5rem;
    gap: 1.5rem;
  }
`;

const Container = styled.div`
  padding: 1rem;

  @media screen and (min-width: 1024px) {
    padding: 3.5rem;
  }
`;

const Title = styled.h1`
  ${H2Style};
  color: ${({ theme }) => theme.colors.primary.dark};

  @media screen and (min-width: 1024px) {
    ${H1Style};
  }
`;

const Content = styled.p`
  ${BodySmallStyle};
`;

const Subtitle = styled.h2`
  ${H2Style};
  margin-bottom: 0.75rem;

  @media screen and (min-width: 1024px) {
    margin: 0;
  }
`;

const LastArticlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    gap: 1.5rem;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    gap: 10.125rem;
    margin: 0 -16.875rem;
  }
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
          <Header>
            <Button handleClick={() => navigate(-1)}>
              <Icon variant="arrow" /> Back
            </Button>
            <Title>{article.title}</Title>
          </Header>
          <DetailsContainer>
            <AuthorImg src={article.author.profilePicture} />
            <div>
              <p>
                Written by:{" "}
                <span style={{ fontWeight: 600 }}>{article.author.name}</span>
              </p>
              <p>{dayjs(article.createdAt).format("MMM DD, YYYY")}</p>
            </div>
          </DetailsContainer>
          <BannerImg src={article.thumbnail_url} />
          <Content>{article.content}</Content>
          <HorizontalLine />
          <Subtitle>Last Articles</Subtitle>
          <LastArticlesContainer>
            {lastArticles.map((article: any) => (
              <ArticleCard {...article} />
            ))}
          </LastArticlesContainer>
        </ArticleContainer>
      ) : null}
    </Container>
  );
};
export default Article;
