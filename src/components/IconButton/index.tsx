import Icon, { IconVariantType } from "../Icons";
import { Button } from "./styles";

interface IIconButton {
  icon: IconVariantType;
}

const IconButton = ({ icon }: IIconButton) => {
  return (
    <Button>
      <Icon variant={icon} />
    </Button>
  );
};
export default IconButton;
