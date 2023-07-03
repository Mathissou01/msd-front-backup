import React from "react";
import CommonBlockHeading from "../../../Common/CommonBlockHeading/CommonBlockHeading";
import EligibilityRecycling from "public/images/verification-compte.svg";
import CommonButton from "../../../Common/CommonButton/CommonButton";
import { useRouter } from "next/router";

interface Step0Props {
  handleOptionClick: (next: string | number) => void;
}
const Step0: React.FC<Step0Props> = ({ handleOptionClick }) => {
  const router = useRouter();
  return (
    <div className="o-Steps">
      <EligibilityRecycling className="o-Steps__Image" />
      <div className="o-Steps__Container">
        <CommonBlockHeading titleContent="Possédez-vous un compte MonServiceDéchets ?" />
        <EligibilityRecycling className="o-Steps__Image" />

        <div className="o-Steps__CardContainer">
          <div className="o-Steps__CardButtons">
            <CommonButton
              type="button"
              style="primary"
              label="Je me connecte"
              onClick={() => router.push("/connexion")}
            />
            <CommonButton
              type="button"
              style="secondary"
              label="Je n'ai pas de compte"
              onClick={() => handleOptionClick(1)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step0;
