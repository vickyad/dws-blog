import Button from "../../../components/Button";
import Icon from "../../../components/Icons";
import { Container, Option, OptionsContainer, Subtitle, Title } from "./styles";

interface ILateralFilter {
  categoryList: any[];
  categoriesSelected: any[];
  authorList: any[];
  authorsSelected: any[];
  handleSelectCategory: (newOption: { id: string; name: string }) => void;
  handleSelectAuthor: (newOption: { id: string; name: string }) => void;
  handleApplyFilters: () => void;
}

const LateralFilter = ({
  categoryList,
  categoriesSelected,
  authorList,
  authorsSelected,
  handleSelectCategory,
  handleSelectAuthor,
  handleApplyFilters,
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
      <Button
        handleClick={handleApplyFilters}
        variant="primary"
        style={{ width: "100%" }}
      >
        Apply filters
      </Button>
    </Container>
  );
};
export default LateralFilter;
