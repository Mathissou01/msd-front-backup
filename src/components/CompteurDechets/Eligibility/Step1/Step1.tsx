import React from "react";
import CommonBlockHeading from "../../../Common/CommonBlockHeading/CommonBlockHeading";
import EligibilityRecycling from "public/images/particulier-professionnel.svg";

interface Step1Props {
  handleOptionClick: (nextQuestion: string | number) => void;
}

const Step1: React.FC<Step1Props> = ({ handleOptionClick }) => {
  return (
    <div className="o-Steps">
      <EligibilityRecycling className="o-Steps__Image" />
      <div className="o-Steps__Container">
        {/* <div className="o-Steps__TitleContainer"> */}
        <CommonBlockHeading
          titleContent="Visualisez la production de déchets pour votre foyer"
          subTitle="Pour commencer, nous avons besoin de vous connaître"
        />
        <EligibilityRecycling className="o-Steps__Image" />
        <div className="o-Steps__CardContainer">
          <p className="o-Steps__SubText">Vous êtes ?</p>

          <button
            className="o-Steps__Card"
            onClick={() => {
              handleOptionClick(2);
            }}
          >
            <p className="o-Steps__CardSubtitle">Un particulier</p>
          </button>
          <button
            className="o-Steps__Card"
            onClick={() => {
              handleOptionClick("/non-eligibilite");
            }}
          >
            <p className="o-Steps__CardSubtitle">Un professionnel</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step1;
