import classNames from "classnames";
import React from "react";
import "./common-button.scss";

interface ICommonButtonProps {
  label?: string;
  type?: "button" | "submit" | "reset" | undefined;
  picto?: "search" | "defaultPicto";
  isDisabled?: boolean;
  onClick?: () => void;
  formLabelId?: string;
  buttonRef?: React.RefObject<HTMLButtonElement>;
  style?: "primary" | "primaryContrast" | "secondary" | "tertiary" | null;
  fontStyle?: "fontSmall" | "fontLarge";
  paddingStyle?: "paddingSmall" | "paddingLarge";
  isFullWidth?: boolean;
}

export default function CommonButton({
  label,
  picto,
  type = "button",
  isDisabled = false,
  onClick,
  formLabelId,
  buttonRef,
  style = "secondary",
  fontStyle = "fontSmall",
  paddingStyle,
  isFullWidth = false,
}: ICommonButtonProps) {
  const buttonClassNames = classNames("c-CommonButton", {
    [`c-CommonButton_${style}`]: style,
    [`c-CommonButton_${fontStyle}`]: fontStyle,
    [`c-CommonButton_${paddingStyle}`]: paddingStyle,
    "c-CommonButton_fullWidth": isFullWidth,
  });
  const pictoClassNames = classNames("c-CommonButton__Picto", {
    [`c-CommonButton__Picto_${picto}`]: picto,
  });

  return (
    <button
      className={buttonClassNames}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      id={formLabelId}
      ref={buttonRef}
    >
      {picto && <div className={pictoClassNames} />}
      {label}
    </button>
  );
}
