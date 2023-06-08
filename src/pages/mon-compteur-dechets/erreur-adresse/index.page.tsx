import React from "react";
import EligibilityRecycling from "public/images/formes_gray.svg";
import CommonBlockHeading from "../../../components/Common/CommonBlockHeading/CommonBlockHeading";
import ErrorContactBlock from "../../../components/CompteurDechets/Eligibility/ErrorContactBlock/ErrorContactBlock";

const ErrorAddress = () => {
  return (
    <div className="o-Steps">
      <EligibilityRecycling className="o-Steps__Image" />
      <div className="o-Steps__Container">
        <EligibilityRecycling className="o-Steps__Image" />
        <div className="o-Steps__Title">
          <CommonBlockHeading titleContent="Malheureusement, nous ne trouvons pas votre adresse dans notre base de données" />
        </div>
        <ErrorContactBlock />
      </div>
    </div>
  );
};

export default ErrorAddress;
