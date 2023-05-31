import React from "react";
import Image from "next/image";
import { useState } from "react";
import {
  IQuestion,
  IQuestionOption,
} from "../../../../pages/mon-compteur-dechets/eligibilite/questionDatas";
import CommonButton from "../../../Common/CommonButton/CommonButton";
import CommonModal from "../../../Common/CommonModal/CommonModal";
import CommonBlockHeading from "../../../Common/CommonBlockHeading/CommonBlockHeading";
import { IError } from "../../../../pages/mon-compteur-dechets/eligibilite/index.page";
import EligibilityRecycling from "public/images/formes_gray.svg";
import BacIcon from "public/images/pictos/search.svg";
import IlluEmplacementPuce from "public/images/emplacement_puce.jpg";
import "./step4.scss";

interface Step4Props {
  question: IQuestion;
  handleOptionClick: (next: string | number) => void;
  handleError: (updates: Partial<IError>) => void;
}

const Step4: React.FC<Step4Props> = ({
  question,
  handleOptionClick,
  handleError,
}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && (
        <CommonModal
          handleClose={() => setShowModal(false)}
          content="Le numéro de votre bac se trouve toujours sous le code barres situé sur l’étiquette collée sur un des côtés de votre bac de déchets."
          bottomText="Votre numéro de bac est illisible ou introuvable ?"
          headerIllu={
            <Image
              src={IlluEmplacementPuce}
              alt="Illustration Emplacement Puce"
            />
          }
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
                <CommonButton
                  type="button"
                  style="secondary"
                  label="Il y a une erreur"
                  onClick={() =>
                    handleError({
                      isActive: true,
                      isAddressVisible: false,
                      isReasonVisible: false,
                      isContactVisible: true,
                      title:
                        "Les numéros rattachés à votre adresse ne correspondent pas à ceux inscrits sur vos bacs ?",
                    })
                  }
                />
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
