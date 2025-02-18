import ArrowIcon from "./Arrow";
import ChevronIcon from "./Chevron";
import DentsuLogoIcon from "./DentsuLogo";
import FilterIcon from "./Filters";
import SearchIcon from "./Search";
import SortByIcon from "./SortBy";

export type IconVariantType =
  | "arrow"
  | "chevron"
  | "filter"
  | "logo"
  | "search"
  | "sortby";

interface IIcon {
  variant: IconVariantType;
}

const Icon = ({ variant }: IIcon) => {
  const getIcon = () => {
    switch (variant) {
      case "arrow":
        return <ArrowIcon />;
      case "chevron":
        return <ChevronIcon />;
      case "filter":
        return <FilterIcon />;
      case "logo":
        return <DentsuLogoIcon />;
      case "search":
        return <SearchIcon />;
      case "sortby":
        return <SortByIcon />;
      default:
        return <></>;
    }
  };

  return <>{getIcon()}</>;
};
export default Icon;
