import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import classNames from "classnames";
import CommonButton from "../../../../Common/CommonButton/CommonButton";
import "./request-block-buttons.scss";

interface IRequestBlockButtons {
  isMandatoryBlock: boolean;
  setCurrentStep: (steps: number) => void;
  currentStep: number;
  nameBlockValue: string;
  noBlockSteps: number;
  blockIndex: number;
}

export default function RequestBlockButtons({
  isMandatoryBlock,
  setCurrentStep,
  currentStep,
  nameBlockValue,
  noBlockSteps,
  blockIndex,
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
    if (watchValue && currentStep - noBlockSteps === blockIndex + 1) {
      setCurrentStep(currentStep + 1);
      setHiddenNextStepButton(true);
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
