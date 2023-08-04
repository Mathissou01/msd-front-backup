import _ from "lodash";
import React, { useRef, useState } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { Controller, useFormContext } from "react-hook-form";
import { removeNulls } from "../../../lib/utilities";
import CommonFormErrorText from "../../Common/CommonFormErrorText/CommonFormErrorText";
import { IFormLabelProps } from "../FormLabel/FormLabel";
import CommonInput from "../../Common/CommonInput/CommonInput";
import "./form-auto-complete-input.scss";

interface IFormAutoCompleteInputProps<T> {
  name: string;
  searchFunction: (searchValue: string) => Promise<Array<T>>;
  displayTransformFunction: (result: T) => string;
  selectTransformFunction: (result: T) => string | undefined;
  isLoading: boolean;
  isLoadingCustomMessage?: string;
  isRequired?: boolean;
  minLength?: number;
  minLengthErrorMessage?: string;
  noResultsCustomMessage?: string;
  isDisabled?: boolean;
  defaultValue?: string;
  placeholder?: string;
  labelProps?: IFormLabelProps;
  onClickResult?: (result: string) => void;
}

export default function FormAutoCompleteInput<T>({
  name,
  searchFunction,
  displayTransformFunction,
  selectTransformFunction,
  isLoading,
  isLoadingCustomMessage,
  isRequired = false,
  minLength = 3,
  minLengthErrorMessage,
  noResultsCustomMessage,
  isDisabled = false,
  defaultValue,
  placeholder,
  onClickResult,
}: IFormAutoCompleteInputProps<T>) {
  /* Static Data */
  const isLoadingMessage = isLoadingCustomMessage ?? "Recherche d'adresse";
  const noResultsMessage =
    noResultsCustomMessage ?? "Aucune adresse correspondante à cette recherche";
  const errorMessages = {
    required: "Ce champ est obligatoire",
    minLength:
      minLengthErrorMessage ??
      `Veuillez rechercher une adresse existante en saisissant au moins ${minLength} caractères, puis sélectionnez un résultat`,
  };

  /* Methods */
  function resetResults() {
    hasResultSelected.current = false;
    if (results !== null) {
      setResults(null);
    }
  }

  function handleInput(value: string) {
    const trimmedValue = value.trim();
    if (trimmedValue && trimmedValue.length >= minLength) {
      searchFunction(trimmedValue).then((results) => {
        if (results && results.length > 0) {
          setResults(results.filter(removeNulls));
        } else {
          setResults([]);
        }
      });
    } else {
      setResults(null);
    }
  }

  function handleClickResult(result: T) {
    hasResultSelected.current = true;
    const transformedResult = selectTransformFunction(result);
    setValue(name, transformedResult, {
      shouldDirty: true,
      shouldValidate: true,
    });
    if (onClickResult && transformedResult) {
      onClickResult(transformedResult);
    }
  }

  function displayResults(results: Array<T>) {
    if (results.length > 0) {
      return (
        <ul className="c-FormAutoCompleteInput__Results">
          {results.map((result, index) => {
            return (
              <li key={index} onClick={() => handleClickResult(result)}>
                {displayTransformFunction(result)}
              </li>
            );
          })}
        </ul>
      );
    } else {
      return (
        <div className="c-FormAutoCompleteInput__Results c-FormAutoCompleteInput__Results_noResults">
          <span>{noResultsMessage}</span>
        </div>
      );
    }
  }

  /* Local Data */
  const [results, setResults] = useState<Array<T> | null>(null);
  const hasResultSelected = useRef<boolean>(!!defaultValue);
  const {
    control,
    setValue,
    watch,
    formState: { isSubmitting, errors },
  } = useFormContext();

  return (
    <div className="c-FormAutoCompleteInput">
      <Controller
        control={control}
        name={name}
        rules={{
          required: { value: isRequired, message: errorMessages.required },
          minLength: { value: minLength, message: errorMessages.minLength },
          validate: () =>
            hasResultSelected.current ||
            (watch("lat") !== undefined && watch("long") !== undefined),
        }}
        defaultValue={defaultValue}
        render={({ field: { onChange, value, ref } }) => {
          return (
            <div className="c-FormAutoCompleteInput__Container">
              <CommonInput
                id={name}
                type="text"
                value={value}
                refCallBack={ref}
                placeholder={placeholder}
                isInvalid={!!_.get(errors, name)}
                isDisabled={isDisabled || isSubmitting}
                dataTestid="form-auto-complete-input"
                onChange={(value: string) => {
                  resetResults();
                  onChange(value);
                }}
                onChangeDelayed={handleInput}
                changeDelay={350}
              />
              {!hasResultSelected.current && (
                <>
                  {isLoading && !results && (
                    <div className="c-FormAutoCompleteInput__Results c-FormAutoCompleteInput__Results_loading">
                      <span>{isLoadingMessage}</span>
                    </div>
                  )}
                  {results && displayResults(results)}
                </>
              )}
            </div>
          );
        }}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }: { message: string }) => (
          <CommonFormErrorText message={message} errorId={`${name}_error`} />
        )}
      />
    </div>
  );
}
