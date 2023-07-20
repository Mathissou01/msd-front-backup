import React, { useEffect, useRef } from "react";
import { useFormContext } from "react-hook-form";
import CommonBlockHeading from "../../../Common/CommonBlockHeading/CommonBlockHeading";
import FormInput from "../../../Form/FormInput/FormInput";
import "./request-questions-block.scss";

interface RequestQuestionsBlockProps {
  id: string;
  isRequired?: boolean;
  label: string;
  placeholder?: string;
  isMultiLine: boolean;
}

export default function RequestQuestionsBlock({
  id,
  isRequired,
  label,
  placeholder,
  isMultiLine,
}: RequestQuestionsBlockProps) {
  const { register } = useFormContext();
  const isInitialized = useRef<boolean>(false);

  useEffect(() => {
    if (!isInitialized.current) {
      register(id, { value: undefined, required: isRequired });
      isInitialized.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="c-RequestQuestionsBlock">
      <CommonBlockHeading
        isAlignLeft
        titleContent={`${label}${isRequired ? " *" : ""}`}
      />
      <FormInput
        type="text"
        tagType={isMultiLine ? "textarea" : "input"}
        name={id}
        label={label}
        isRequired={isRequired}
        placeholder={placeholder}
        maxLengthValidation={250}
      />
    </div>
  );
}
