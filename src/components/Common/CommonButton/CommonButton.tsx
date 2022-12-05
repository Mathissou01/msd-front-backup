import React from "react";
import "./common-button.scss";

interface ICommonButtonProps {
  label?: string;
  type?: "button" | "submit" | "reset" | undefined;
  picto?: "search";
  isDisabled?: boolean;
  onClick?: () => void;
  formLabelId?: string;
  buttonRef?: React.RefObject<HTMLButtonElement>;
  style?: "primary" | "primaryContrast" | "secondary" | "tertiary" | null;
  fontStyle?: "fontSmall" | "fontLarge";
  paddingStyle?: "paddingDefault" | "paddingSmall" | "paddingLarge";
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
  paddingStyle = "paddingDefault",
  isFullWidth = false,
}: ICommonButtonProps) {
  return (
    <button
      className={`c-CommonButton ${style ? "c-CommonButton_" + style : ""} ${
        paddingStyle !== "paddingDefault"
          ? "c-CommonButton_" + paddingStyle
          : ""
      } ${fontStyle ? "c-CommonButton_" + fontStyle : ""} ${
        isFullWidth ? "c-CommonButton_fullWidth" : ""
      }`}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      id={formLabelId}
      ref={buttonRef}
    >
      {picto && (
        <div
          className={`c-CommonButton__Picto c-CommonButton__Picto_${picto}`}
        />
      )}
      {label}
    </button>
  );
}
