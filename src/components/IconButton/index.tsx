import styled from "styled-components";
import Icon, { IconVariantType } from "../Icons";

interface IIconButton {
  icon: IconVariantType;
}

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary.dark};
  border: none;
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: 0.75rem;
    width: 0.75rem;
  }

  @media screen and (min-width: 1024px) {
    height: 2.5rem;
    width: 2.5rem;

    svg {
      height: 1rem;
      width: 1rem;
    }
  }
`;

const IconButton = ({ icon }: IIconButton) => {
  return (
    <Button>
      <Icon variant={icon} />
    </Button>
  );
};
export default IconButton;
