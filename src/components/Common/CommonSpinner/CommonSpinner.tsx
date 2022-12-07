import classNames from "classnames";
import React from "react";
import "./common-spinner.scss";

interface ICommonSpinnerProps {
  isCover?: boolean;
}

export default function CommonSpinner({
  isCover = false,
}: ICommonSpinnerProps) {
  const dynamicClassNames = classNames("c-CommonSpinner__Wrapper", {
    "c-CommonSpinner__Wrapper_cover": isCover,
  });

  return (
    <div className={dynamicClassNames}>
      <div className="c-CommonSpinner" data-testid="common-spinner">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}
