import ArrowIcon from "./Arrow";
import DentsuLogoIcon from "./DentsuLogo";
import SearchIcon from "./Search";

export type IconVariantType = "search" | "arrow" | "logo";

interface IIcon {
  variant: IconVariantType;
}

const Icon = ({ variant }: IIcon) => {
  const getIcon = () => {
    switch (variant) {
      case "arrow":
        return <ArrowIcon />;
      case "logo":
        return <DentsuLogoIcon />;
      case "search":
        return <SearchIcon />;
      default:
        return <></>;
    }
  };

  return <>{getIcon()}</>;
};
export default Icon;
