import { useEffect, useState } from "react";
import ArticleCard from "../../components/ArticleCard";
import Subheader from "./Subheader";
import LateralFilter from "./LateralFilter";
import { ArticleContainer, Container, InnerContainer } from "./styles";
import api from "../../api/axios";
import Header from "../../components/Header";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [search, setSearch] = useState("");
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

  const handleApplyFilters = () => {
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
  };

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 768px)").matches);

    const fetchData = async () => {
      try {
        const [articlesRes, categoriesRes, authorsRes] = await Promise.all([
          api.get("/posts"),
          api.get("/categories"),
          api.get("/authors"),
        ]);

        setArticlesList(articlesRes.data);
        setFilteredArticleList(articlesRes.data);
        setCategoryList(categoriesRes.data);
        setAuthorList(authorsRes.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let filteredList = [...articlesList];

    if (search.length) {
      filteredList = filteredList.filter((article) =>
        article.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredArticleList(filteredList);
  }, [sortBy, search]);

  const ArticleList = () => {
    return (
      <ArticleContainer>
        {filteredArticleList.map((article: any) => (
          <ArticleCard {...article} />
        ))}
      </ArticleContainer>
    );
  };

  return (
    <>
      <Header search={search} handleChange={setSearch} />
      <Container>
        <Subheader
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
            <LateralFilter
              categoryList={categoryList}
              categoriesSelected={categoriesSelected}
              handleSelectCategory={handleSelectCategory}
              authorList={authorList}
              authorsSelected={authorsSelected}
              handleSelectAuthor={handleSelectAuthor}
              handleApplyFilters={handleApplyFilters}
            />
          )}
          <ArticleList />
        </InnerContainer>
      </Container>
    </>
  );
}

export default App;
