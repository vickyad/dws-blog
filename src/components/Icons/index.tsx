import ArrowIcon from "./Arrow";
import SearchIcon from "./Search";

export type IconVariantType = "search" | "arrow";

interface IIcon {
  variant: IconVariantType;
}

const Icon = ({ variant }: IIcon) => {
  const getIcon = () => {
    switch (variant) {
      case "search":
        return <SearchIcon />;
      case "arrow":
        return <ArrowIcon />;
      default:
        return <></>;
    }
  };

  return <>{getIcon()}</>;
};
export default Icon;
