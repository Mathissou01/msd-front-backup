import React, { Dispatch, SetStateAction } from "react";
import CommonBlockHeading from "../../../Common/CommonBlockHeading/CommonBlockHeading";
import AddressBlock from "../AddressBlock/AddressBlock";
import { IError } from "../../../../pages/mon-compteur-dechets/eligibilite/index.page";
import ErrorReason from "../ErrorReason/ErrorReason";
import ErrorContactBlock from "../ErrorContactBlock/ErrorContactBlock";
import { IAddress } from "../../../../lib/user";
import EligibilityRecycling from "public/images/non-eligible.svg";
import BinsError from "../BinsError/BinsError";

interface ErrorPageProps {
  selectedAddress: IAddress | null | undefined;
  setSelectedAddress: Dispatch<SetStateAction<IAddress | null | undefined>>;
  error: IError;
  handleError: (updates: Partial<IError>) => void;
  setCurrentQuestion: Dispatch<SetStateAction<number>>;
}

const StepError: React.FC<ErrorPageProps> = ({
  selectedAddress,
  setSelectedAddress,
  error,
  handleError,
  setCurrentQuestion,
}) => {
  return (
    <div className="o-Steps">
      <EligibilityRecycling className="o-Steps__Image" />
      <div className="o-Steps__Container">
        <div className="o-Steps__Title">
          <CommonBlockHeading titleContent={error.title} />
        </div>
        <EligibilityRecycling className="o-Steps__Image" />
        <div className="o-Steps__CardContainer">
          {error.bins && <BinsError bins={error.bins} />}
          {error.isAddressVisible && selectedAddress && (
            <AddressBlock
              selectedAddress={selectedAddress}
              setSelectedAddress={setSelectedAddress}
              handleError={handleError}
              setCurrentQuestion={setCurrentQuestion}
            />
          )}
          {error.isReasonVisible && (
            <ErrorReason isNoBinsLinked={error.isNoBinsLinked} />
          )}
          {error.isContactVisible && (
            <div>
              {error.isReasonVisible ? (
                <p>
                  Dans le cas d’une suspicion d’usurpation ou pour tout support,
                  vous pouvez contacter la collectivité par les canaux suivants
                  :
                </p>
              ) : (
                <p className="o-Steps__SubText">
                  Veuillez contacter la collectivité pour résoudre ce problème
                </p>
              )}

              <ErrorContactBlock />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepError;
