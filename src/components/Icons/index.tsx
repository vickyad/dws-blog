import SearchIcon from "./Search";

export type IconVariantType = "search";

interface IIcon {
  variant: IconVariantType;
}

const Icon = ({ variant }: IIcon) => {
  const getIcon = () => {
    switch (variant) {
      case "search":
        return <SearchIcon />;
      default:
        return <></>;
    }
  };

  return <>{getIcon()}</>;
};
export default Icon;
