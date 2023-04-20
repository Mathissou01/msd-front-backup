import React from "react";
import { useState } from "react";
import "./step4.scss";
import {
  IQuestion,
  IQuestionOption,
} from "../../../../pages/mon-compteur-dechets/eligibilite/questionDatas";
import CommonButton from "../../../Common/CommonButton/CommonButton";
import CommonBlockHeading from "../../../Common/CommonBlockHeading/CommonBlockHeading";
import EligibilityRecycling from "public/images/formes_gray.svg";
import Illu_1 from "public/images/illu_1.svg";
import BacIcon from "public/images/pictos/search.svg";

interface Step4Props {
  question: IQuestion;
  handleOptionClick: (nextQuestion: number, redirectTo: string) => void;
}

type ModalProps = {
  handleClose: () => void;
  content: string;
  bottomText: string;
};
const Step4Modal = ({ handleClose, content, bottomText }: ModalProps) => {
  return (
    <>
      <div className="c-Modal">
        <CommonButton
          label="X"
          // picto="close"
          style={null}
          type={"button"}
          isDisabled={false}
          onClick={handleClose}
        />
        <div className="c-Modal__Header">
          <Illu_1 />
        </div>
        <div className="c-Modal__Body">{content}</div>
        <div className="c-Modal__Bottom">{bottomText}</div>
      </div>

      <div className="c-Modal__Backdrop"></div>
    </>
  );
};
const Step4: React.FC<Step4Props> = ({ question, handleOptionClick }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && (
        <Step4Modal
          handleClose={() => setShowModal(false)}
          content="Le numéro de votre bac se trouve toujours sous le code barres situé sur l’étiquette collée sur un des côtés de votre bac de déchets."
          bottomText="Votre numéro de bac est illisible ou introuvable ?"
        />
      )}
      <div>
        <div className="c-Step4">
          <EligibilityRecycling className="c-Step4__Image" />
          <div className="c-Step4__Container">
            {/* <div className="c-Step4__TitleContainer"> */}
            <CommonBlockHeading
              titleContent={question.title}
              subTitle={question.text}
            />
            {/* </div> */}

            <div className="c-Step4__CardContainer">
              <>
                <div className="c-Step4__CardItem c-Step4__CardItem_gray">
                  <div className="c-Step4__CardItem_icon">
                    <BacIcon />
                  </div>
                  <div className="c-Step4__CardItem_content">
                    <p className="c-Step4__CardItem_label">sdqgqsdfgqs</p>
                    <p className="c-Step4__CardItem_idPuce">546555556</p>
                  </div>
                </div>
                <div className="c-Step4__CardItem c-Step4__CardItem_yellow">
                  <div className="c-Step4__CardItem_icon">
                    <BacIcon />
                  </div>
                  <div className="c-Step4__CardItem_content">
                    <p className="c-Step4__CardItem_label">sdqgqsdfgqs</p>
                    <p className="c-Step4__CardItem_idPuce">546555556</p>
                  </div>
                </div>
              </>
              <div className="c-Step4__CardButtons">
                {question.options?.map(
                  (option: IQuestionOption, index: number) => (
                    <>
                      <CommonButton
                        key={index}
                        type="button"
                        style={option.buttonStyle}
                        label={option.text}
                        onClick={() =>
                          handleOptionClick(
                            option.nextQuestion || 0,
                            option.redirectTo || "",
                          )
                        }
                      />
                    </>
                  ),
                )}
                <button
                  type="button"
                  className="c-Step4__CardButtons_openmodal"
                  onClick={() => setShowModal(true)}
                >
                  Où trouver mon numéro de bac ?
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step4;
