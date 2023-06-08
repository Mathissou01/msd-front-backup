import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { IError } from "../../../../pages/mon-compteur-dechets/eligibilite/index.page";
import "./autocomplete-address.scss";
import { AddressOption } from "../../../../lib/address-option";

interface AutocompleteAddressProps {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  debouncedValue: string;
  isVisibled: boolean;
  setIsVisibled: Dispatch<SetStateAction<boolean>>;
  handleClick: (option: AddressOption) => void;
  filteredOptions: AddressOption[];
  inputName: string;
  inputLabel?: string;
  inputPlaceholder?: string;
  handleError?: (updates: Partial<IError>) => void;
  isEdit?: boolean;
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
  isEdit = false,
}) => {
  const selectorRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    setIsVisibled(false);
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectorRef.current &&
        !selectorRef.current.contains(event.target as Node)
      ) {
        setIsVisibled(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsVisibled]);

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
          <div className="c-AutocompleteAddress__Selector" ref={selectorRef}>
            {filteredOptions.length ? (
              filteredOptions.map((option: AddressOption, i: number) => (
                <button
                  className="c-AutocompleteAddress__Option"
                  key={i}
                  onClick={() => handleClick(option)}
                >
                  {option?.houseNumber} {option?.street} {option?.postcode}{" "}
                  {option?.city}
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
                <p>
                  <strong>{"Mon adresse n'est pas dans la liste"}</strong>
                </p>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AutocompleteAddress;
