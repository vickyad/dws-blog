import styled from "styled-components";
import dentsuLogo from "../../assets/dentsu_logo.png";
import IconButton from "../IconButton";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutrals.extraLight};
  padding: 1rem;
`;

const Header = () => {
  return (
    <HeaderStyled>
      <img src={dentsuLogo} alt="Dentsu logo" height={40} />
      <IconButton icon="search" />
    </HeaderStyled>
  );
};
export default Header;
