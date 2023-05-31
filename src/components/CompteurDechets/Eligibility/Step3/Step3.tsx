import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { IQuestion } from "../../../../pages/mon-compteur-dechets/eligibilite/questionDatas";
import CommonBlockHeading from "../../../Common/CommonBlockHeading/CommonBlockHeading";
import CommonButton from "../../../Common/CommonButton/CommonButton";
import EligibilityAdress from "public/images/eligibility-recycle.svg";
import useDebounce from "../../../../hooks/useDebounce";
import "./step3.scss";
import AddressBlock from "../AddressBlock/AddressBlock";
import { IError } from "../../../../pages/mon-compteur-dechets/eligibilite/index.page";
import AutocompleteAddress from "../AutocompleteAddress/AutocompleteAddress";
import { useSearchAddressQuery } from "../../../../graphql/codegen/generated-types";

interface Step3Props {
  question: IQuestion;
  handleOptionClick: (next: string | number) => void;
  selectedAddress: string;
  setSelectedAddress: Dispatch<SetStateAction<string>>;
  handleError: (updates: Partial<IError>) => void;
}

const Step3: React.FC<Step3Props> = ({
  question,
  handleOptionClick,
  selectedAddress,
  setSelectedAddress,
  handleError,
}) => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce<string>(value, 500);
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const [isVisibled, setIsVisibled] = useState(true);

  const { data: searchAddressData } = useSearchAddressQuery({
    variables: { address: debouncedValue, limit: 5 },
  });

  useEffect(() => {
    if (!searchAddressData) {
      return;
    }
    if (searchAddressData && searchAddressData.searchAddress) {
      const addresses = searchAddressData.searchAddress
        .map((address) => address?.label)
        .filter((label) => label !== null && label !== undefined) as string[];

      setFilteredOptions(addresses);
    } else {
      setFilteredOptions([]);
    }
  }, [searchAddressData]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  function handleClick(option: string) {
    setSelectedAddress(option);
    setValue(option);
    setIsVisibled(false);
  }

  return (
    <div className="o-Steps c-StepAddress">
      <EligibilityAdress className="o-Steps__Image" />
      <div className="o-Steps__Container">
        <EligibilityAdress className="o-Steps__Image" />
        <CommonBlockHeading
          titleContent={question.title}
          subTitle={question.text}
        />
        <div className="o-Steps__CardContainer">
          <p className="o-Steps__SubText">{question.subText}</p>
          {selectedAddress ? (
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
