import Icon from "../../../components/Icons";
import Select from "../../../components/Select";
import {
  HeaderContainer,
  SelectContainer,
  SortByButton,
  SortByContainer,
  Title,
} from "./styles";

interface IHeader {
  isMobile: boolean;
  categoryList: any[];
  categoriesSelected: any[];
  handleSelectCategory: (newOption: { id: string; name: string }) => void;
  authorList: any[];
  authorsSelected: any[];
  handleSelectAuthor: (newOption: { id: string; name: string }) => void;
  sortBy: number;
  handleSortBy: (newOption: number) => void;
}

const Header = ({
  isMobile,
  categoryList,
  categoriesSelected,
  handleSelectCategory,
  authorList,
  authorsSelected,
  handleSelectAuthor,
  sortBy,
  handleSortBy,
}: IHeader) => {
  const DesktopHeader = () => {
    return (
      <>
        <Title>DWS blog</Title>
        <SortByContainer>
          <span style={{ fontWeight: 700 }}>Sort by:</span>{" "}
          <SortByButton onClick={() => handleSortBy(sortBy === 1 ? -1 : 1)}>
            {sortBy > 0 ? "Newest first" : "Oldest First"}
            <Icon variant="sortby" />
          </SortByButton>
        </SortByContainer>
      </>
    );
  };

  const MobileHeader = () => {
    return (
      <>
        <SelectContainer>
          <Select
            label="Category"
            options={categoryList}
            optionsSelected={categoriesSelected}
            handleSelectOption={handleSelectCategory}
          />
          <Select
            label="Author"
            options={authorList}
            optionsSelected={authorsSelected}
            handleSelectOption={handleSelectAuthor}
          />
        </SelectContainer>
        <SortByButton onClick={() => handleSortBy(sortBy === 1 ? -1 : 1)}>
          {sortBy > 0 ? "Newest first" : "Oldest First"}{" "}
          <Icon variant="sortby" />
        </SortByButton>
      </>
    );
  };

  return (
    <HeaderContainer>
      {isMobile ? <MobileHeader /> : <DesktopHeader />}
    </HeaderContainer>
  );
};
export default Header;
