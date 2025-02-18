import Icon from "../../../components/Icons";
import { Container, Option, OptionsContainer, Subtitle, Title } from "./styles";

interface ILateralFilter {
  categoryList: any[];
  categoriesSelected: any[];
  handleSelectCategory: (newOption: { id: string; name: string }) => void;
  authorList: any[];
  authorsSelected: any[];
  handleSelectAuthor: (newOption: { id: string; name: string }) => void;
}

const LateralFilter = ({
  categoryList,
  categoriesSelected,
  handleSelectCategory,
  authorList,
  authorsSelected,
  handleSelectAuthor,
}: ILateralFilter) => {
  return (
    <Container>
      <Title>
        <Icon variant="filter" /> Filters
      </Title>
      <div>
        <Subtitle>Category</Subtitle>
        <OptionsContainer>
          {categoryList.map((category: any) => (
            <Option
              $selected={categoriesSelected.includes(category)}
              onClick={() => handleSelectCategory(category)}
            >
              {category.name}
            </Option>
          ))}
        </OptionsContainer>
      </div>
      <div>
        <Subtitle>Author</Subtitle>
        <OptionsContainer>
          {authorList.map((author: any) => (
            <Option
              $selected={authorsSelected.includes(author)}
              onClick={() => handleSelectAuthor(author)}
            >
              {author.name}
            </Option>
          ))}
        </OptionsContainer>
      </div>
    </Container>
  );
};
export default LateralFilter;
