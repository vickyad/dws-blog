import dayjs from "dayjs";
import {
  Container,
  BannerImg,
  ContentContainer,
  Details,
  Decoration,
  Title,
  Description,
  CategoryContainer,
  Category,
} from "./styles";

interface IArticleCard {
  id: string;
  title: string;
  content: string;
  author: { name: string };
  categories: { name: string }[];
  createdAt: string;
  thumbnail_url: string;
}

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
        <Title>{title}</Title>
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
