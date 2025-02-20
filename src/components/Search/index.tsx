import { useEffect, useState } from "react";
import IconButton from "../IconButton";
import { InputStyle, SearchContainer } from "./styles";

interface ISearch {
  value: string;
  handleChange: (newString: string) => void;
}

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
