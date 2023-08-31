import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import {
  ComponentBlocksQuestions,
  Enum_Componentblocksquestions_Textstatus,
} from "../../../../graphql/codegen/generated-types";
import CommonBlockHeading from "../../../Common/CommonBlockHeading/CommonBlockHeading";
import CommonErrorText from "../../../Common/CommonErrorText/CommonErrorText";
import "./request-questions-block.scss";

interface RequestQuestionsBlockProps {
  questionsBlockData: ComponentBlocksQuestions;
  name: string;
}

export default function RequestQuestionsBlock({
  questionsBlockData,
  name,
}: RequestQuestionsBlockProps) {
  /* Static data */
  const staticLabels = {
    errorMessage: "Le texte ne peux pas dépasser 250 caractères",
    requiredMessage: "Ce champs est obligatoire",
  };

  /* Local data */
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const isRequired =
    questionsBlockData.textStatus ===
    Enum_Componentblocksquestions_Textstatus.Obligatoire;

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
      <Controller
        control={control}
        name={name}
        rules={{
          maxLength: {
            value: 300,
            message: staticLabels.errorMessage,
          },
          required: {
            value: isRequired,
            message: staticLabels.requiredMessage,
          },
        }}
        render={({ field: { onChange } }) => {
          return (
            <div className="c-QuestionsBlock">
              {questionsBlockData.height ? (
                <textarea
                  className="c-QuestionsBlock__TextArea"
                  placeholder={questionsBlockData.questionTextPlaceholder ?? ""}
                  onChange={(event) => {
                    onChange({
                      name: questionsBlockData.questionTextLabel,
                      content: event.target.value,
                    });
                  }}
                />
              ) : (
                <input
                  className="c-QuestionsBlock__Input"
                  placeholder={questionsBlockData.questionTextPlaceholder ?? ""}
                  onChange={(event) => {
                    onChange({
                      name: questionsBlockData.questionTextLabel,
                      content: event.target.value,
                    });
                  }}
                />
              )}
              <ErrorMessage
                errors={errors}
                name={name}
                render={({ message }: { message: string }) => (
                  <CommonErrorText
                    message={message}
                    errorId={`${name}_error`}
                  />
                )}
              />
            </div>
          );
        }}
      />
    </div>
  );
}
