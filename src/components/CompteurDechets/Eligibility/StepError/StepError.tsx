import React, { Dispatch, SetStateAction } from "react";
import CommonBlockHeading from "../../../Common/CommonBlockHeading/CommonBlockHeading";
import EligibilityRecycling from "public/images/formes_gray.svg";
import AddressBlock from "../AddressBlock/AddressBlock";
import { IError } from "../../../../pages/mon-compteur-dechets/eligibilite/index.page";
import ErrorReason from "../ErrorReason/ErrorReason";
import ErrorContactBlock from "../ErrorContactBlock/ErrorContactBlock";
interface ErrorPageProps {
  selectedAddress: string;
  setSelectedAddress: Dispatch<SetStateAction<string>>;
  error: IError;
  handleError: (updates: Partial<IError>) => void;
}

const StepError: React.FC<ErrorPageProps> = ({
  selectedAddress,
  setSelectedAddress,
  error,
  handleError,
}) => {
  return (
    <div className="o-Steps">
      <EligibilityRecycling className="o-Steps__Image" />
      <div className="o-Steps__Container">
        <EligibilityRecycling className="o-Steps__Image" />
        <div className="o-Steps__Title">
          <CommonBlockHeading titleContent={error.title} />
        </div>
        {error.isAddressVisible && selectedAddress && (
          <AddressBlock
            selectedAddress={selectedAddress}
            setSelectedAddress={setSelectedAddress}
            handleError={handleError}
          />
        )}
        {error.isReasonVisible && <ErrorReason />}
        {error.isContactVisible && (
          <div>
            {error.isReasonVisible ? (
              <p>
                Dans le cas d’une suspicion d’usurpation ou pour tout support,
                vous pouvez contacter la collectivité par les canaux suivants :
              </p>
            ) : (
              <p>
                Veuillez contacter la collectivité pour résoudre ce problème
              </p>
            )}

            <ErrorContactBlock />
          </div>
        )}
      </div>
    </div>
  );
};

export default StepError;
