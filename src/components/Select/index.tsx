import { useState } from "react";
import Button from "../Button";
import Icon from "../Icons";
import { OptionsContainer, TransparentButton } from "./styles";

interface ISelect {
  label: string;
  options: { id: string; name: string }[];
  optionsSelected: { id: string; name: string }[];
  handleSelectOption: (newOption: { id: string; name: string }) => void;
}
const Select = ({
  label,
  options,
  optionsSelected,
  handleSelectOption,
}: ISelect) => {
  const [openOptions, setOpenOptions] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <Button
        handleClick={() => setOpenOptions(!openOptions)}
        style={{ width: "max-content" }}
      >
        {optionsSelected.length > 0
          ? `${optionsSelected[0].name} ${
              optionsSelected.length >= 2
                ? `+${optionsSelected.length - 1}`
                : ""
            }`
          : label}
        <Icon variant="chevron" />
      </Button>
      {openOptions ? (
        <OptionsContainer>
          {options.map((option) => (
            <li>
              <TransparentButton
                onClick={() => handleSelectOption(option)}
                $selected={optionsSelected.includes(option)}
              >
                {option.name}
              </TransparentButton>
            </li>
          ))}
        </OptionsContainer>
      ) : null}
    </div>
  );
};
export default Select;
