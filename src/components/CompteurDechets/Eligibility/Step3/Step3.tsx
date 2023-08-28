import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useSearchAddressQuery } from "../../../../graphql/codegen/generated-types";
import { AddressOption } from "../../../../lib/address-option";
import useDebounce from "../../../../hooks/useDebounce";
import CommonBlockHeading from "../../../Common/CommonBlockHeading/CommonBlockHeading";
import CommonButton from "../../../Common/CommonButton/CommonButton";
import AddressBlock from "../AddressBlock/AddressBlock";
import AutocompleteAddress from "../AutocompleteAddress/AutocompleteAddress";
import { IError } from "../../../../pages/mon-compteur-dechets/eligibilite/index.page";
import EligibilityAdress from "public/images/adresse-postale.svg";
import "./step3.scss";
import { useCurrentUser } from "../../../../hooks/useCurrentUser";
import { IAddress } from "../../../../lib/user";

interface Step3Props {
  handleOptionClick: (next: string | number) => void;
  selectedAddress: IAddress | null | undefined;
  setSelectedAddress: Dispatch<SetStateAction<IAddress | null | undefined>>;
  handleError: (updates: Partial<IError>) => void;
}

const Step3: React.FC<Step3Props> = ({
  handleOptionClick,
  selectedAddress,
  setSelectedAddress,
  handleError,
}) => {
  const { currentUser } = useCurrentUser();
  const [value, setValue] = useState(
    selectedAddress?.label || currentUser?.address?.label || "",
  );
  const debouncedValue = useDebounce<string>(value, 500);
  const [filteredOptions, setFilteredOptions] = useState<AddressOption[]>([]);
  const [isVisibled, setIsVisibled] = useState(false);

  const labels = {
    unknownAddressValue: "Mon adresse n'est pas reconnue",
    unknownAddressError:
      "Malheureusement, nous ne trouvons pas votre adresse dans notre base de données",
  };
  const { data: searchAddressData, loading } = useSearchAddressQuery({
    variables: { address: debouncedValue, limit: 5 },
  });

  useEffect(() => {
    if (searchAddressData) {
      setFilteredOptions(
        (searchAddressData?.searchAddress || []) as AddressOption[],
      );
    }
  }, [searchAddressData]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  function handleClick(option: IAddress) {
    setSelectedAddress(option);
    setValue(option.label || "");
    setIsVisibled(false);
  }
  return (
    <div className="o-Steps c-StepAddress">
      <EligibilityAdress className="o-Steps__Image" />
      <div className="o-Steps__Container">
        <CommonBlockHeading titleContent="Suivez mois par mois l'évolution de votre production" />
        <EligibilityAdress className="o-Steps__Image" />
        <div className="o-Steps__CardContainer">
          <p className="o-Steps__SubText">Quelle est votre adresse ?</p>
          {selectedAddress !== null && selectedAddress !== undefined ? (
            <AddressBlock
              selectedAddress={selectedAddress}
              setSelectedAddress={setSelectedAddress}
              handleError={handleError}
            />
          ) : (
            <AutocompleteAddress
              value={value}
              handleChange={handleChange}
              debouncedValue={debouncedValue}
              isVisibled={isVisibled}
              setIsVisibled={setIsVisibled}
              handleClick={handleClick}
              filteredOptions={filteredOptions}
              inputName="address"
              inputLabel="Adresse complète"
              inputPlaceholder="ex: 10 rue des fleurs 82000 Montauban"
              handleError={handleError}
              loading={loading}
            />
          )}
          <div className="o-Steps__ButtonContainer">
            <CommonButton
              type="button"
              style="primary"
              isDisabled={!selectedAddress}
              label="Valider"
              onClick={() => handleOptionClick(4)}
            />
            <CommonButton
              type="button"
              style="tertiary"
              label={labels.unknownAddressValue}
              onClick={() =>
                handleError({
                  isActive: true,
                  title: labels.unknownAddressError,
                  isAddressVisible: true,
                  isReasonVisible: false,
                  isContactVisible: true,
                })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
