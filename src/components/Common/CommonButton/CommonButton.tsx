import classNames from "classnames";
import React from "react";
import "./common-button.scss";

interface ICommonButtonProps {
  label?: string;
  type?: "button" | "submit" | "reset" | undefined;
  picto?: "search" | "cross" | "target" | "defaultPicto" | "download";
  pictoPosition?: "left" | "right";
  isDisabled?: boolean;
  onClick?: () => void;
  formLabelId?: string;
  buttonRef?: React.RefObject<HTMLButtonElement>;
  style?:
    | "primary"
    | "primaryContrast"
    | "secondary"
    | "tertiary"
    | "lightGray"
    | null;
  fontStyle?: "fontSmall" | "fontLarge";
  paddingStyle?: "paddingSmall" | "paddingLarge";
  isFullWidth?: boolean;
  isRound?: boolean;
}

export default function CommonButton({
  label,
  picto,
  pictoPosition = "left",
  type = "button",
  isDisabled = false,
  onClick,
  formLabelId,
  buttonRef,
  style = "secondary",
  fontStyle = "fontSmall",
  paddingStyle,
  isFullWidth = false,
  isRound = false,
}: ICommonButtonProps) {
  const buttonClassNames = classNames("c-CommonButton", {
    [`c-CommonButton_${style}`]: style,
    [`c-CommonButton_${fontStyle}`]: fontStyle,
    [`c-CommonButton_${paddingStyle}`]: paddingStyle,
    "c-CommonButton_fullWidth": isFullWidth,
    "c-CommonButton_isRounded": isRound,
    "c-CommonButton_disabled": isDisabled,
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
      {picto && pictoPosition === "left" && <div className={pictoClassNames} />}
      {label}
      {picto && pictoPosition === "right" && (
        <div className={pictoClassNames} />
      )}
    </button>
  );
}
