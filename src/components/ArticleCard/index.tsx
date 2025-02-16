import dayjs from "dayjs";
import styled from "styled-components";

interface IArticleCard {
  id: string;
  title: string;
  content: string;
  author: { name: string };
  categories: { name: string }[];
  createdAt: string;
  thumbnail_url: string;
}

const ContentContainer = styled.div`
  border-radius: 0 0 1rem 1rem;
  background-color: ${({ theme }) => theme.colors.neutrals.lightest};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BannerImg = styled.img`
  border-radius: 1rem 1rem 0 0;
  height: 12.25rem;
  width: 100%;
  object-fit: cover;
`;

const Description = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-top: -0.5rem;
`;

const Decoration = styled.span`
  display: block;
  background-color: ${({ theme }) => theme.colors.secondary.medium};
  height: 5px;
  width: 5px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const Category = styled.p`
  background-color: ${({ theme }) => theme.colors.neutrals.extraLight};
  border-radius: 1.5rem;
  width: fit-content;
  padding: 0.5rem 0.75rem;
`;

const CategoryContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

const Container = styled.a`
  text-decoration: none;
  color: #000000;
  cursor: pointer;
`;

const ArticleCard = ({
  id,
  title,
  content,
  author,
  categories,
  createdAt,
  thumbnail_url,
}: IArticleCard) => {
  return (
    <Container href={`/${id}`}>
      <BannerImg src={thumbnail_url} />
      <ContentContainer>
        <Details>
          <p>{dayjs(createdAt).format("MMM DD, YYYY")}</p>
          <Decoration />
          <p>{author.name}</p>
        </Details>
        <h2>{title}</h2>
        <Description>{content}</Description>
        <CategoryContainer>
          {categories.map((category) => (
            <Category>{category.name}</Category>
          ))}
        </CategoryContainer>
      </ContentContainer>
    </Container>
  );
};
export default ArticleCard;
