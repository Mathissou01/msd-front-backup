import React, { useState, ReactNode } from "react";
import CloseIcon from "public/images/pictos/close.svg";
import CommonBlockHeading from "../CommonBlockHeading/CommonBlockHeading";
import classNames from "classnames";
import "./common-overlay.scss";
import CommonButton from "../CommonButton/CommonButton";

interface CommonOverlayProps {
  button: ReactNode;
  content: () => JSX.Element;
  title?: string;
  modalSize?: "default" | "small" | "fullWidth" | "large";
  isBottomButton?: boolean;
  bottomButtonLabel?: string;
  onButtonClick?: () => void;
}

const CommonOverlay: React.FC<CommonOverlayProps> = ({
  button,
  content,
  title,
  modalSize = "default",
  isBottomButton = true,
  bottomButtonLabel,
  onButtonClick,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const modalClass = classNames("c-Overlay__Modal", {
    "c-Overlay__Modal_fullWidth": modalSize === "fullWidth",
    "c-Overlay__Modal_small": modalSize === "small",
    "c-Overlay__Modal_large": modalSize === "large",
    "c-Overlay__Modal_default": modalSize === "default",
  });

  return (
    <>
      <div onClick={() => setIsVisible(true)}>{button}</div>
      {isVisible && (
        <div className="c-Overlay">
          <div className="c-Overlay__Container">
            <div className={modalClass}>
              <div className="c-Overlay__Header">
                {title && <CommonBlockHeading titleContent={title} />}
                <button className="c-Overlay__Close">
                  <CloseIcon
                    className="c-Overlay__CloseIcon"
                    onClick={() => setIsVisible(false)}
                  />
                </button>
              </div>
              <div className="c-Overlay__Content">{content()}</div>
              {isBottomButton && (
                <CommonButton
                  label={bottomButtonLabel}
                  type="button"
                  style="primary"
                  onClick={() => {
                    if (onButtonClick) onButtonClick();
                    setIsVisible(false);
                  }}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CommonOverlay;
