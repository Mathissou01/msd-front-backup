import React from "react";
import CommonBlockHeading from "../../../Common/CommonBlockHeading/CommonBlockHeading";
import EligibilityRecycling from "public/images/maison-immeuble.svg";

interface Step2Props {
  handleOptionClick: (next: string | number) => void;
}

const Step2: React.FC<Step2Props> = ({ handleOptionClick }) => {
  return (
    <div className="o-Steps">
      <EligibilityRecycling className="o-Steps__Image" />
      <div className="o-Steps__Container">
        <CommonBlockHeading
          titleContent="Visualisez la production de déchets pour votre foyer"
          subTitle="Pour commencer, nous avons besoin de vous connaître"
        />
        <EligibilityRecycling className="o-Steps__Image" />
        <div className="o-Steps__CardContainer">
          <p className="o-Steps__SubText">Votre type de logement :</p>

          <button
            className="o-Steps__Card"
            onClick={() => handleOptionClick(3)}
          >
            <p className="o-Steps__CardSubtitle">Une maison</p>
          </button>
          <button
            className="o-Steps__Card"
            onClick={() => handleOptionClick("/non-eligibilite")}
          >
            <p className="o-Steps__CardSubtitle">Un appartement</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2;
