import Search from "../Search";
import Icon from "../Icons";
import { HeaderStyled } from "./styles";
import { useNavigate } from "react-router";
import { TransparentButtonStyle } from "../../styles/commonStyles";

interface IHeader {
  search: string;
  handleChange: (newString: string) => void;
}

const Header = ({ search, handleChange }: IHeader) => {
  const navigate = useNavigate();

  return (
    <HeaderStyled>
      <TransparentButtonStyle onClick={() => navigate("/")}>
        <Icon variant="logo" />
      </TransparentButtonStyle>
      <Search value={search} handleChange={handleChange} />
    </HeaderStyled>
  );
};
export default Header;
