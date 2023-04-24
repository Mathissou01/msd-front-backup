import React, { Dispatch, SetStateAction } from "react";
import "./common-autocomplete.scss";

interface CommonAutocompleteProps {
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
}

const CommonAutocomplete: React.FC<CommonAutocompleteProps> = ({
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
}) => {
  return (
    <div className="c-CommonAutocomplete">
      <div className="c-CommonAutocomplete__Container">
        <label htmlFor={inputName} className="c-CommonAutocomplete__Label">
          {inputLabel}
        </label>
        <input
          type="text"
          className="c-CommonAutocomplete__Input"
          value={value}
          name={inputName}
          onChange={handleChange}
          onFocus={() => setIsVisibled(true)}
          placeholder={inputPlaceholder}
        />
        {debouncedValue && isVisibled && (
          <div className="c-CommonAutocomplete__Selector">
            {filteredOptions.length ? (
              filteredOptions.map((option: string) => (
                <button
                  className="c-CommonAutocomplete__Option"
                  key={option}
                  onClick={() => handleClick(option)}
                >
                  {option}
                </button>
              ))
            ) : (
              <div className="c-CommonAutocomplete__Option">Aucun résultat</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CommonAutocomplete;
