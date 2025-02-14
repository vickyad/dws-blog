import dentsuLogo from "../../assets/dentsu_logo.png";
import IconButton from "../IconButton";

const Header = () => {
  return (
    <header>
      <img src={dentsuLogo} alt="Dentsu logo" />
      <IconButton icon="search" />
    </header>
  );
};
export default Header;
