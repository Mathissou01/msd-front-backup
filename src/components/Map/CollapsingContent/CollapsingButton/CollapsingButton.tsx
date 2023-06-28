import classNames from "classnames";
import React from "react";
import "./collapsing-button.scss";

interface ICollapsingButtonProps {
  label: string;
  type?: "button" | "submit" | "reset" | undefined;
  picto?: "flag" | "event" | "map" | "direction";
  isDisabled?: boolean;
  onClick?: () => void;
  formLabelId?: string;
  buttonRef?: React.RefObject<HTMLButtonElement>;
  style?: "secondary";
  fontStyle?: "fontSmall";
  paddingStyle?: "paddingSmall";
  isFullWidth?: boolean;
  isRounded?: boolean;
}

export default function CollapsingButton({
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
  isRounded = false,
}: ICollapsingButtonProps) {
  const buttonClassNames = classNames("c-CollapsingButton", {
    [`c-CollapsingButton_${style}`]: style,
    [`c-CollapsingButton_${fontStyle}`]: fontStyle,
    [`c-CollapsingButton_${paddingStyle}`]: paddingStyle,
    "c-CollapsingButton_fullWidth": isFullWidth,
    "c-CollapsingButton_isRounded": isRounded,
  });
  const pictoClassNames = classNames("c-CollapsingButton__Picto", {
    [`c-CollapsingButton__Picto_${picto}`]: picto,
  });

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      id={formLabelId}
      ref={buttonRef}
    >
      <div className={buttonClassNames}>
        {picto && <div className={pictoClassNames} />}
      </div>
      <label className="c-CollapsingButton__ButtonLabelName">{label}</label>
    </button>
  );
}
