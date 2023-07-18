import _ from "lodash";
import React, { ChangeEvent, forwardRef, useState } from "react";
import classNames from "classnames";
import { Controller, useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import CommonFormErrorText from "../CommonFormErrorText/CommonFormErrorText";
import "./common-checkbox.scss";

interface CommonCheckboxProps {
  id?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  defaultChecked?: boolean;
  disabled?: boolean;
  isRequired?: boolean;
  label?: string;
}

const CommonCheckbox: React.ForwardRefRenderFunction<
  HTMLInputElement,
  CommonCheckboxProps
> = (
  {
    id = `auto-${Math.random() + 1}`,
    onChange,
    defaultChecked = false,
    disabled,
    isRequired,
    label,
  },
  ref,
) => {
  /* Static Data */
  const labels = {
    errorMessage: "La case à cocher est obligatoire",
  };

  /* Methods */
  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = !isChecked;
    setValue(id, newValue, {
      shouldDirty: true,
      shouldValidate: true,
    });
    setIsChecked(newValue);
    if (onChange) {
      onChange(event);
    }
  }

  /* Local Data */
  const [isChecked, setIsChecked] = useState<boolean>(defaultChecked);
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

  const checkboxClass = classNames("c-CommonCheckbox__Input", {
    "c-CommonCheckbox__Input_checked": isChecked,
    "c-CommonCheckbox__Input_invalid": !!_.get(errors, id),
  });

  return (
    <>
      <Controller
        control={control}
        name={id}
        rules={{
          required: {
            value: isRequired ?? false,
            message: labels.errorMessage,
          },
        }}
        render={() => {
          return (
            <div className="c-CommonCheckbox">
              <input
                id={id}
                key={id}
                type="checkbox"
                className={checkboxClass}
                defaultChecked={defaultChecked}
                onChange={handleOnChange}
                disabled={disabled}
                ref={ref}
              />
              {label && (
                <label htmlFor={id} className="c-CommonCheckbox__Label">
                  {label}
                  {isRequired && "*"}
                </label>
              )}
            </div>
          );
        }}
      />
      <ErrorMessage
        errors={errors}
        name={id}
        render={({ message }: { message: string }) => (
          <CommonFormErrorText message={message} errorId={`${id}_error`} />
        )}
      />
    </>
  );
};

export default forwardRef(CommonCheckbox);
