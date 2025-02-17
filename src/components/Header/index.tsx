import styled from "styled-components";
import { useState } from "react";
import Search from "../Search";
import Icon from "../Icons";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutrals.extraLight};
  padding: 1.25rem 1rem;

  @media screen and (min-width: 1024px) {
    padding: 1rem 3.5rem;
  }
`;

const Header = () => {
  const [search, setSearch] = useState("");

  return (
    <HeaderStyled>
      <Icon variant="logo" />
      <Search value={search} handleChange={setSearch} />
    </HeaderStyled>
  );
};
export default Header;
