import React, { Dispatch, SetStateAction, useRef } from "react";
import { useRouter } from "next/router";
import CommonSpinner from "../../../Common/CommonSpinner/CommonSpinner";
import { IError } from "../../../../pages/mon-compteur-dechets/eligibilite/index.page";
import { IAddress } from "../../../../lib/user";
import "./autocomplete-address.scss";

interface AutocompleteAddressProps {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  debouncedValue: string;
  isVisibled: boolean;
  setIsVisibled: Dispatch<SetStateAction<boolean>>;
  handleClick: (option: IAddress) => void;
  filteredOptions: IAddress[];
  inputName: string;
  inputLabel?: string;
  inputPlaceholder?: string;
  handleError?: (updates: Partial<IError>) => void;
  isEdit?: boolean;
  loading: boolean;
}

const AutocompleteAddress: React.FC<AutocompleteAddressProps> = ({
  value,
  handleChange,
  debouncedValue,
  isVisibled = false,
  setIsVisibled,
  handleClick,
  filteredOptions,
  inputName,
  inputLabel = "",
  inputPlaceholder = "",
  handleError,
  isEdit = false,
  loading,
}) => {
  const selectorRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  return (
    <div className="c-AutocompleteAddress">
      <div className="c-AutocompleteAddress__Container">
        <label htmlFor={inputName} className="c-AutocompleteAddress__Label">
          {inputLabel}
        </label>
        <input
          type="text"
          className="c-AutocompleteAddress__Input"
          autoComplete="off"
          value={value}
          name={inputName}
          onChange={handleChange}
          onFocus={() => setIsVisibled(true)}
          placeholder={inputPlaceholder}
        />
        {debouncedValue && debouncedValue.length > 3 && isVisibled && (
          <div className="c-AutocompleteAddress__Selector" ref={selectorRef}>
            {!loading ? (
              <>
                {filteredOptions.length ? (
                  filteredOptions.map((option: IAddress, i: number) => (
                    <button
                      className="c-AutocompleteAddress__Option"
                      key={i}
                      onClick={() => handleClick(option)}
                    >
                      {option.label}
                    </button>
                  ))
                ) : (
                  <button
                    className="c-AutocompleteAddress__Option"
                    onClick={() => {
                      isEdit
                        ? router.push("/mon-compteur-dechets/erreur-adresse")
                        : handleError &&
                          handleError({
                            isActive: true,
                            title:
                              "Malheureusement, nous ne trouvons pas votre adresse dans notre base de données",
                            isAddressVisible: false,
                            isReasonVisible: false,
                            isContactVisible: true,
                          });
                    }}
                  >
                    {debouncedValue && debouncedValue.length > 3 && (
                      <p>
                        <strong>{"Mon adresse n'est pas dans la liste"}</strong>
                      </p>
                    )}
                  </button>
                )}
              </>
            ) : (
              <CommonSpinner />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AutocompleteAddress;
