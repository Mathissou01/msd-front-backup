import React, { ReactNode } from "react";
import CommonButton from "../../Common/CommonButton/CommonButton";
import "./common-modal.scss";

type ModalProps = {
  handleClose: () => void;
  content: string;
  bottomText: string;
  headerContent: ReactNode;
};
const CommonModal = ({
  handleClose,
  content,
  bottomText,
  headerContent,
}: ModalProps) => {
  return (
    <>
      <div className="c-CommonModal">
        <CommonButton
          label="X"
          // picto="close"
          style={null}
          type={"button"}
          isDisabled={false}
          onClick={handleClose}
        />
        <div className="c-CommonModal__Header">{headerContent}</div>
        <div className="c-CommonModal__Body">{content}</div>
        <div className="c-CommonModal__Bottom">{bottomText}</div>
      </div>

      <div onClick={handleClose} className="c-CommonModal__Backdrop"></div>
    </>
  );
};
export default CommonModal;
