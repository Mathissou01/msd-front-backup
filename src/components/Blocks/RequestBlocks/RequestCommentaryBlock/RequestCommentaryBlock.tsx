import React, { useEffect, useRef } from "react";
import { useFormContext } from "react-hook-form";
import CommonBlockHeading from "../../../Common/CommonBlockHeading/CommonBlockHeading";
import FormInput from "../../../Form/FormInput/FormInput";
import "./request-commentary-block.scss";

interface RequestCommentaryBlockProps {
  id: string;
  isRequired?: boolean;
  label: string;
  placeholder: string;
}

export default function RequestCommentaryBlock({
  id,
  isRequired,
  label,
  placeholder,
}: RequestCommentaryBlockProps) {
  /* Static Data */
  const messageLabel =
    "Il est vivement recommandé d'éviter toute communication de toute donnée à caractère personnel via ces zones de texte ou en tout état de cause de limiter cette communication à ce qui est strictement nécessaire au traitement de votre demande.";

  /* Local Data */
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
    <div className="c-RequestCommentaryBlock">
      <CommonBlockHeading
        isAlignLeft
        titleContent={`${label}${isRequired ? " *" : ""}`}
      />
      <FormInput
        type="text"
        tagType="textarea"
        name={id}
        label={label}
        isRequired={isRequired}
        placeholder={placeholder}
        maxLengthValidation={300}
      />
      <span className="c-RequestCommentaryBlock__Message">{messageLabel}</span>
    </div>
  );
}
