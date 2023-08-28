import classNames from "classnames";
import React, { ChangeEvent, forwardRef } from "react";
import "./checkbox.scss";

interface CommonCheckboxProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  disabled?: boolean;
}

const Checkbox: React.ForwardRefRenderFunction<
  HTMLInputElement,
  CommonCheckboxProps
> = ({ onChange, checked, disabled = false }, ref) => {
  const checkboxClass = classNames("c-CommonCheckbox", {
    "c-CommonCheckbox_checked": checked,
  });

  return (
    <input
      type="checkbox"
      className={checkboxClass}
      defaultChecked={checked}
      onChange={onChange}
      disabled={disabled}
      ref={ref}
    />
  );
};

export default forwardRef(Checkbox);
