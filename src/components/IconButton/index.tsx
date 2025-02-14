import Icon, { IconVariantType } from "../Icons";

interface IIconButton {
  icon: IconVariantType;
}

const IconButton = ({ icon }: IIconButton) => {
  return (
    <button>
      <Icon variant={icon} />
    </button>
  );
};
export default IconButton;
