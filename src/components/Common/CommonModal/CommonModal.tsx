import React, { ReactNode } from "react";
import "./common-modal.scss";

type ModalProps = {
  handleClose?: () => void;
  headerTitle?: string;
  headerSubTitle?: string;
  headerIllu?: ReactNode;
  content?: string;
  bottomText?: string;
  modalButton?: ReactNode;
};
const CommonModal = ({
  handleClose,
  headerIllu,
  content,
  bottomText,
}: ModalProps) => {
  return (
    <>
      <div className="c-CommonModal">
        <button
          className="c-CommonModal__Closebtn"
          type="button"
          onClick={handleClose}
        ></button>
        <div className="c-CommonModal__Container">
          {headerIllu && (
            <div className="c-CommonModal__Illustration">{headerIllu}</div>
          )}
          {content && <div className="c-CommonModal__Body">{content}</div>}
          {bottomText && (
            <div className="c-CommonModal__Bottom">{bottomText}</div>
          )}
        </div>
      </div>

      <div onClick={handleClose} className="c-CommonModal__Backdrop"></div>
    </>
  );
};
export default CommonModal;
