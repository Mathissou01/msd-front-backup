import React from "react";
import CommonBlockHeading from "../../../Common/CommonBlockHeading/CommonBlockHeading";
import EligibilityRecycling from "public/images/particulier-professionnel.svg";
import { useFormContext } from "react-hook-form";

interface Step1Props {
  handleOptionClick: (nextQuestion: string | number) => void;
}

const Step1: React.FC<Step1Props> = ({ handleOptionClick }) => {
  const { setValue } = useFormContext();

  const handleButtonClick = (userType: string) => {
    setValue("userType", userType);
    if (userType === "particular") {
      handleOptionClick(2);
    } else {
      handleOptionClick("/non-eligibilite");
    }
  };

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
              handleButtonClick("particular");
            }}
          >
            <p className="o-Steps__CardSubtitle">Un particulier</p>
          </button>
          <button
            className="o-Steps__Card"
            onClick={() => {
              handleButtonClick("professional");
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
