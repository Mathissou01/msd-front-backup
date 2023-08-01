import { isArray, isObject, isEmpty, isDate, isBoolean } from "lodash";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { isString } from "../../../../../lib/utilities";
import CommonButton from "../../../../Common/CommonButton/CommonButton";
import "./request-block-buttons.scss";
import classNames from "classnames";

interface IRequestBlockButtons {
  isMandatoryBlock: boolean;
  setCurrentStep: (steps: number) => void;
  currentStep: number;
  nameBlockValue: string;
}

export default function RequestBlockButtons({
  isMandatoryBlock,
  setCurrentStep,
  currentStep,
  nameBlockValue,
}: IRequestBlockButtons) {
  /* Static data */
  const labels = {
    nextStep: "Passez l'étape suivante",
  };

  function handleButtonNextStepClick() {
    setCurrentStep(currentStep + 1);
    setHiddenNextStepButton(true);
  }

  /* Local Data */
  const [hiddenNextStepButton, setHiddenNextStepButton] = useState<boolean>();
  const { watch } = useFormContext();
  const watchValue = watch(nameBlockValue);

  const divClassNames = classNames("c-RequestBlockButtons", {
    "c-RequestBlockButtons_hidden": hiddenNextStepButton,
  });

  useEffect(() => {
    if (
      watchValue &&
      ((isString(watchValue) && watchValue !== "") ||
        (isArray(watchValue) && watchValue.length > 0) ||
        (isObject(watchValue) && !isEmpty(watchValue)) ||
        isDate(watchValue) ||
        (isBoolean(watchValue) && watchValue))
    ) {
      setCurrentStep(currentStep + 1);
      setHiddenNextStepButton(true);
    } else {
      setHiddenNextStepButton(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchValue]);

  return (
    <>
      {!isMandatoryBlock && (
        <div className={divClassNames}>
          <CommonButton
            label={labels.nextStep}
            style="secondary"
            onClick={handleButtonNextStepClick}
          />
        </div>
      )}
    </>
  );
}
