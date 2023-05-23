import React, { useState, ReactNode } from "react";
import CloseIcon from "public/images/pictos/close.svg";
import CommonBlockHeading from "../CommonBlockHeading/CommonBlockHeading";
import classNames from "classnames";
import "./common-overlay.scss";

interface CommonOverlayProps {
  button: ReactNode;
  content: () => JSX.Element;
  title?: string;
  fullWidth?: boolean;
}

const CommonOverlay: React.FC<CommonOverlayProps> = ({
  button,
  content,
  title,
  fullWidth = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const modalClass = classNames("c-Overlay__Modal", {
    "c-Overlay__Modal_fullWidth": fullWidth,
  });

  return (
    <div>
      <div onClick={() => setIsVisible(true)}>{button}</div>
      {isVisible && (
        <div className="c-Overlay">
          <div className="c-Overlay__Content">
            <div className={modalClass}>
              <div className="c-Overlay__Header">
                {title && <CommonBlockHeading titleContent={title} />}
                <div>
                  <CloseIcon
                    className="c-Overlay__CloseIcon"
                    onClick={() => setIsVisible(false)}
                  />
                </div>
              </div>
              {content()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommonOverlay;
