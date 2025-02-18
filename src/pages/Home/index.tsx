import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import ArticleCard from "../../components/ArticleCard";
import Icon from "../../components/Icons";
import Header from "./Header";

const Container = styled.div`
  padding: 1rem;

  @media screen and (min-width: 1024px) {
    padding: 2rem 3.5rem;
  }
`;

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
`;

const FilterContainer = styled.div`
  box-shadow: 0px 4px 29.6px 0px #5b7bc13d;
  background-color: ${({ theme }) => theme.colors.neutrals.lightest};
  border-radius: 1rem;
  padding: 1rem;
  height: fit-content;
`;

const InnerContainer = styled.div`
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 1.5rem;
  }
`;

const Option = styled.p`
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutrals.extraLight};
  padding: 0.75rem 0.5rem;
`;

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [articlesList, setArticlesList] = useState<any>([]);
  const [filteredArticleList, setFilteredArticleList] = useState<any>([]);
  const [authorList, setAuthorList] = useState<any>([]);
  const [authorsSelected, setAuthorsSelected] = useState<any>([]);
  const [categoryList, setCategoryList] = useState<any>([]);
  const [categoriesSelected, setCategoriesSelected] = useState<any>([]);
  const [sortBy, setSortBy] = useState(1);

  const handleSelectAuthor = (option: { id: string; name: string }) => {
    if (authorsSelected.includes(option)) {
      setAuthorsSelected(
        authorsSelected.filter((category: any) => category.id !== option.id)
      );
    } else {
      let newAuthors = [...authorsSelected];
      newAuthors.push(option);

      setAuthorsSelected(newAuthors);
    }
  };

  const handleSelectCategory = (option: { id: string; name: string }) => {
    if (categoriesSelected.includes(option)) {
      setCategoriesSelected(
        categoriesSelected.filter((category: any) => category.id !== option.id)
      );
    } else {
      let newCategories = [...categoriesSelected];
      newCategories.push(option);

      setCategoriesSelected(newCategories);
    }
  };

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 768px)").matches);

    axios
      .get("https://tech-test-backend.dwsbrazil.io/posts/")
      .then((response) => {
        setArticlesList(response.data);
        setFilteredArticleList(response.data);
      });

    axios
      .get("https://tech-test-backend.dwsbrazil.io/categories/")
      .then((response) => setCategoryList(response.data));

    axios
      .get("https://tech-test-backend.dwsbrazil.io/authors/")
      .then((response) => setAuthorList(response.data));
  }, []);

  useEffect(() => {
    if (!categoriesSelected.length && !authorsSelected.length && sortBy === 1)
      setFilteredArticleList(articlesList);

    let filteredList = [...articlesList];

    if (categoriesSelected.length)
      filteredList = filteredList.filter((article: any) =>
        article.categories.some((category: any) =>
          categoriesSelected
            .map((category: any) => category.id)
            .includes(category.id)
        )
      );

    if (authorsSelected.length)
      filteredList = filteredList.filter((article: any) =>
        authorsSelected
          .map((author: any) => author.id)
          .includes(article.authorId)
      );

    setFilteredArticleList(filteredList);
  }, [categoriesSelected, authorsSelected, sortBy]);

  return (
    <Container>
      <Header
        isMobile={isMobile}
        categoryList={categoryList}
        categoriesSelected={categoriesSelected}
        handleSelectCategory={handleSelectCategory}
        authorList={authorList}
        authorsSelected={authorsSelected}
        handleSelectAuthor={handleSelectAuthor}
        sortBy={sortBy}
        handleSortBy={setSortBy}
      />
      <InnerContainer>
        {isMobile ? null : (
          <FilterContainer>
            <h3>
              <Icon variant="filter" /> Filters
            </h3>
            <h4>Category</h4>
            {categoryList.map((category: any) => (
              <Option>{category.name}</Option>
            ))}
            <h4>Author</h4>
            {authorList.map((author: any) => (
              <Option>{author.name}</Option>
            ))}
          </FilterContainer>
        )}
        <ArticleContainer>
          {filteredArticleList.map((article: any) => (
            <ArticleCard {...article} />
          ))}
        </ArticleContainer>
      </InnerContainer>
    </Container>
  );
}

export default App;
