import styled from "styled-components";
import Icon, { IconVariantType } from "../Icons";

interface IIconButton {
  icon: IconVariantType;
}

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary.dark};
  border: none;
  border-radius: 50%;
  padding: 0.5rem;
  height: 2.5rem;
  width: 2.5rem;
`;

const IconButton = ({ icon }: IIconButton) => {
  return (
    <Button>
      <Icon variant={icon} />
    </Button>
  );
};
export default IconButton;
