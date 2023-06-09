import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useSearchAddressQuery } from "../../../../graphql/codegen/generated-types";
import useDebounce from "../../../../hooks/useDebounce";
import { IQuestion } from "../../../../pages/mon-compteur-dechets/eligibilite/questionDatas";
import CommonBlockHeading from "../../../Common/CommonBlockHeading/CommonBlockHeading";
import CommonButton from "../../../Common/CommonButton/CommonButton";
import AddressBlock from "../AddressBlock/AddressBlock";
import AutocompleteAddress from "../AutocompleteAddress/AutocompleteAddress";
import { AddressOption } from "../../../../lib/address-option";
import { User } from "../../../../lib/user";
import { IError } from "../../../../pages/mon-compteur-dechets/eligibilite/index.page";
import EligibilityAdress from "public/images/adresse-postale.svg";
import "./step3.scss";

interface Step3Props {
  question: IQuestion;
  handleOptionClick: (next: string | number) => void;
  selectedAddress: Partial<User> | null | undefined;
  setSelectedAddress: Dispatch<
    SetStateAction<Partial<User> | null | undefined>
  >;
  handleError: (updates: Partial<IError>) => void;
}

const Step3: React.FC<Step3Props> = ({
  question,
  handleOptionClick,
  selectedAddress,
  setSelectedAddress,
  handleError,
}) => {
  const addressString = `${selectedAddress?.streetNumber || ""} ${
    selectedAddress?.streetName || ""
  } ${selectedAddress?.postalCode || ""} ${selectedAddress?.city || ""}`;
  const [value, setValue] = useState(addressString || "");
  const debouncedValue = useDebounce<string>(value, 500);
  const [filteredOptions, setFilteredOptions] = useState<AddressOption[]>([]);
  const [isVisibled, setIsVisibled] = useState(true);

  const { data: searchAddressData } = useSearchAddressQuery({
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

  function handleClick(option: Partial<AddressOption>) {
    setSelectedAddress({
      streetNumber: option.houseNumber || null,
      streetName: option.street || null,
      city: option.city || null,
      postalCode: option.postcode || null,
      idAddress: option.id || null,
    });
    setValue(option.label || "");
    setIsVisibled(false);
  }
  return (
    <div className="o-Steps c-StepAddress">
      <EligibilityAdress className="o-Steps__Image" />
      <div className="o-Steps__Container">
        <CommonBlockHeading
          titleContent={question.title}
          subTitle={question.text}
        />
        <EligibilityAdress className="o-Steps__Image" />
        <div className="o-Steps__CardContainer">
          <p className="o-Steps__SubText">{question.subText}</p>
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
            />
          )}
          <div className="o-Steps__ButtonContainer">
            <CommonButton
              type="button"
              style="primary"
              isDisabled={!selectedAddress}
              label={question.options[0].text}
              onClick={() => handleOptionClick(question.options[0].next)}
            />
            <button
              className="o-Steps__CardButtons_openmodal"
              onClick={() =>
                handleError({
                  isActive: true,
                  title:
                    "Malheureusement, nous ne trouvons pas votre adresse dans notre base de données",
                  isAddressVisible: true,
                  isReasonVisible: false,
                  isContactVisible: true,
                })
              }
            >
              {`Mon adresse n'est pas reconnue`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
