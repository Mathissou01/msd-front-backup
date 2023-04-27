import React, { Dispatch, SetStateAction } from "react";
import "./autocomplete-address.scss";
import { IError } from "../../../../pages/mon-compteur-dechets/eligibilite/index.page";

interface AutocompleteAddressProps {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  debouncedValue: string;
  isVisibled: boolean;
  setIsVisibled: Dispatch<SetStateAction<boolean>>;
  handleClick: (option: string) => void;
  filteredOptions: string[];
  inputName: string;
  inputLabel?: string;
  inputPlaceholder?: string;
  handleError: (updates: Partial<IError>) => void;
}

const AutocompleteAddress: React.FC<AutocompleteAddressProps> = ({
  value,
  handleChange,
  debouncedValue,
  isVisibled,
  setIsVisibled,
  handleClick,
  filteredOptions,
  inputName,
  inputLabel = "",
  inputPlaceholder = "",
  handleError,
}) => {
  return (
    <div className="c-AutocompleteAddress">
      <div className="c-AutocompleteAddress__Container">
        <label htmlFor={inputName} className="c-AutocompleteAddress__Label">
          {inputLabel} *
        </label>
        <input
          type="text"
          className="c-AutocompleteAddress__Input"
          value={value}
          name={inputName}
          onChange={handleChange}
          onFocus={() => setIsVisibled(true)}
          placeholder={inputPlaceholder}
        />
        {debouncedValue && isVisibled && (
          <div className="c-AutocompleteAddress__Selector">
            {filteredOptions.length ? (
              filteredOptions.map((option: string) => (
                <button
                  className="c-AutocompleteAddress__Option"
                  key={option}
                  onClick={() => handleClick(option)}
                >
                  {option}
                </button>
              ))
            ) : (
              <div
                className="c-AutocompleteAddress__Option"
                onClick={() =>
                  handleError({
                    isActive: true,
                    title:
                      "Malheureusement, nous ne trouvons pas votre adresse dans notre base de données",
                    isAddressVisible: false,
                    isReasonVisible: false,
                    isContactVisible: true,
                  })
                }
              >
                <p>
                  <strong>{"Mon adresse n'est pas dans la liste"}</strong>
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AutocompleteAddress;
