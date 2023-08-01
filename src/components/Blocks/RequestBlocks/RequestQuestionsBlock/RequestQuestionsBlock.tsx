import React from "react";
import CommonBlockHeading from "../../../Common/CommonBlockHeading/CommonBlockHeading";
import {
  ComponentBlocksQuestions,
  Enum_Componentblocksquestions_Textstatus,
} from "../../../../graphql/codegen/generated-types";
import FormInput from "../../../Form/FormInput/FormInput";
import "./request-questions-block.scss";

interface RequestQuestionsBlockProps {
  questionsBlockData: ComponentBlocksQuestions;
  name: string;
}

export default function RequestQuestionsBlock({
  questionsBlockData,
  name,
}: RequestQuestionsBlockProps) {
  return (
    <div className="c-RequestQuestionsBlock">
      <CommonBlockHeading
        isAlignLeft
        titleContent={`${questionsBlockData.questionTextLabel}${
          questionsBlockData.textStatus ===
          Enum_Componentblocksquestions_Textstatus.Obligatoire
            ? " *"
            : ""
        }`}
      />
      <FormInput
        type="text"
        tagType={questionsBlockData.height ? "textarea" : "input"}
        name={name}
        label={questionsBlockData.questionTextLabel}
        isRequired={
          questionsBlockData.textStatus ===
          Enum_Componentblocksquestions_Textstatus.Obligatoire
        }
        placeholder={questionsBlockData.questionTextPlaceholder}
        maxLengthValidation={250}
      />
    </div>
  );
}
