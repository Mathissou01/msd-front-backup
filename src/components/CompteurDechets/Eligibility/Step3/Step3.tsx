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
import PencilWrite from "public/images/pictos/pencilwrite.svg";
import { Feature } from "./Address.interface";
import "./step3.scss";
import CommonAutocomplete from "../../../Common/CommonAutocomplete/CommonAutocomplete";

interface Step3Props {
  question: IQuestion;
  handleOptionClick: (next: string | number) => void;
  selectedAddress: string;
  setSelectedAddress: Dispatch<SetStateAction<string>>;
}

const Step3: React.FC<Step3Props> = ({
  question,
  handleOptionClick,
  selectedAddress,
  setSelectedAddress,
}) => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce<string>(value, 500);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [isVisibled, setIsVisibled] = useState(true);

  const API_URL = process.env.NEXT_PUBLIC_API_ADDRESSES_GOUV_URL;

  // TODO: Remove this function and type when the API is ready
  const searchAddress = async (address: string, limit = 5) => {
    try {
      const response = await fetch(
        `${API_URL}/search/?q=${address}&limit=${limit}&autocomplete=1`,
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (debouncedValue && value.length >= 3) {
      searchAddress(value).then((data) => {
        if (data && data.features) {
          const addresses = data.features.map(
            (feature: Feature) => feature.properties.label,
          );
          setFilteredOptions(addresses);
        } else setFilteredOptions([]);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

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
          {" "}
          <p className="o-Steps__SubText">{question.subText}</p>
          {selectedAddress ? (
            <div className="c-StepAddress__AddressBlockContainer">
              <div className="c-StepAddress__Address">
                <p className="c-StepAddress__LabelConfirm">Adresse complète</p>
                <p className="c-StepAddress__SelectedAddress">
                  {selectedAddress}
                </p>
              </div>
              <button type="button" className="c-StepAddress__PencilIcon">
                <PencilWrite onClick={() => setSelectedAddress("")} />
              </button>
            </div>
          ) : (
            <CommonAutocomplete
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
            />
          )}
          <div className="c-StepAddress__ButtonContainer">
            <CommonButton
              type="button"
              style="primary"
              isDisabled={!selectedAddress}
              label={question.options[0].text}
              onClick={() => handleOptionClick(question.options[0].next)}
            />
            <button className="o-Steps__CardButtons_openmodal">
              {`Mon adresse n'est pas reconnue`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
