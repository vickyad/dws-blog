import { ReactNode } from "react";
import { ButtonStyle } from "./styles";

interface IButton {
  children: ReactNode;
  variant?: "primary" | "secondary";
  style?: React.CSSProperties;
  handleClick: () => void;
}

const Button = ({
  children,
  variant = "primary",
  style,
  handleClick,
}: IButton) => {
  return (
    <ButtonStyle onClick={handleClick} style={style} $variant={variant}>
      {children}
    </ButtonStyle>
  );
};
export default Button;
