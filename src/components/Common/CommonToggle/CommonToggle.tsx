import React from "react";
import Switch from "react-switch";

interface CommonToggleProps {
  onChange: (checked: boolean) => void;
  checked?: boolean;
  disabled?: boolean;
}
const CommonToggle: React.FC<CommonToggleProps> = ({
  onChange,
  checked = false,
  disabled = false,
}) => {
  return (
    <Switch
      onChange={onChange}
      checked={checked}
      checkedIcon={false}
      uncheckedIcon={false}
      disabled={disabled}
      onColor="#3cc13b"
      offColor="#030F40"
      height={20}
      width={40}
    />
  );
};

export default CommonToggle;
