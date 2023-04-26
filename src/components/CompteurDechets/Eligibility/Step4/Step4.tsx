import React from "react";
import { useState } from "react";
import {
  IQuestion,
  IQuestionOption,
} from "../../../../pages/mon-compteur-dechets/eligibilite/questionDatas";
import CommonButton from "../../../Common/CommonButton/CommonButton";
import CommonModal from "../../../Common/CommonModal/CommonModal";
import CommonBlockHeading from "../../../Common/CommonBlockHeading/CommonBlockHeading";
import EligibilityRecycling from "public/images/formes_gray.svg";
import BacIcon from "public/images/pictos/search.svg";
import Illu_1 from "public/images/illu_1.svg";
import "./step4.scss";

interface Step4Props {
  question: IQuestion;
  handleOptionClick: (next: string | number) => void;
}

const Step4: React.FC<Step4Props> = ({ question, handleOptionClick }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && (
        <CommonModal
          handleClose={() => setShowModal(false)}
          content="Le numéro de votre bac se trouve toujours sous le code barres situé sur l’étiquette collée sur un des côtés de votre bac de déchets."
          bottomText="Votre numéro de bac est illisible ou introuvable ?"
          headerContent={<Illu_1 />}
        />
      )}
      <div>
        <div className="o-Steps c-StepIdentiteBacs">
          <EligibilityRecycling className="o-Steps__Image" />
          <div className="o-Steps__Container">
            <CommonBlockHeading
              titleContent={question.title}
              subTitle={question.text}
            />

            <div className="o-Steps__CardContainer c-StepIdentiteBacs__CardContainer">
              <>
                <div className="c-StepIdentiteBacs__CardItem c-StepIdentiteBacs__CardItem_gray">
                  <div className="c-StepIdentiteBacs__CardItem_icon">
                    <BacIcon />
                  </div>
                  <div className="c-StepIdentiteBacs__CardItem_content">
                    <p className="c-StepIdentiteBacs__CardItem_label">
                      Votre bac à ordures ménagères
                    </p>
                    <p className="c-StepIdentiteBacs__CardItem_idPuce">
                      978054327652
                    </p>
                  </div>
                </div>
                <div className="c-StepIdentiteBacs__CardItem c-StepIdentiteBacs__CardItem_yellow">
                  <div className="c-StepIdentiteBacs__CardItem_icon">
                    <BacIcon />
                  </div>
                  <div className="c-StepIdentiteBacs__CardItem_content">
                    <p className="c-StepIdentiteBacs__CardItem_label">
                      Votre bac à emballages
                    </p>
                    <p className="c-StepIdentiteBacs__CardItem_idPuce">
                      978054327652
                    </p>
                  </div>
                </div>
              </>
              <div className="c-StepIdentiteBacs__CardButtons">
                {question.options?.map(
                  (option: IQuestionOption, index: number) => (
                    <>
                      <CommonButton
                        key={index}
                        type="button"
                        style={option.buttonStyle}
                        label={option.text}
                        onClick={() => handleOptionClick(option.next)}
                      />
                    </>
                  ),
                )}
                <button
                  type="button"
                  className="o-Steps__CardButtons_openmodal"
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
