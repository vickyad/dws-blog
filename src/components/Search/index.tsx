import { useEffect, useState } from "react";
import IconButton from "../IconButton";
import styled from "styled-components";

interface ISearch {
  value: string;
  handleChange: (newString: string) => void;
}

const SearchContainer = styled.div`
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  border-radius: 2rem;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  box-shadow: 0px 3px 18.1px 0px #5b7bc14a;
  width: 33.5rem;
`;

const InputStyle = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  color: ${({ theme }) => theme.colors.neutrals.extraDark};
  background-color: transparent;
`;

const Search = ({ value, handleChange }: ISearch) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 768px)").matches);
  }, []);

  return (
    <>
      {isMobile ? (
        <IconButton icon="search" />
      ) : (
        <SearchContainer>
          <InputStyle
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            placeholder="Search"
          />
          <IconButton icon="search" />
        </SearchContainer>
      )}
    </>
  );
};
export default Search;
