import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import _ from "lodash";
import classNames from "classnames";
import {
  ComponentBlocksCommentary,
  Enum_Componentblockscommentary_Commentarystatus,
} from "../../../../graphql/codegen/generated-types";
import CommonErrorText from "../../../Common/CommonErrorText/CommonErrorText";
import CommonBlockHeading from "../../../Common/CommonBlockHeading/CommonBlockHeading";
import "./request-commentary-block.scss";

interface RequestCommentaryBlockProps {
  commentaryBlockData: ComponentBlocksCommentary;
  name: string;
}

export default function RequestCommentaryBlock({
  commentaryBlockData,
  name,
}: RequestCommentaryBlockProps) {
  /* Static Data */
  const staticLabels = {
    errorMessage: "La longeur du texte ne peux pas dépasser 300 caractères",
    requiredMessage: "Ce champs est obligatoire",
    message:
      "Il est vivement recommandé d'éviter toute communication de toute donnée à caractère personnel via ces zones de texte ou en tout état de cause de limiter cette communication à ce qui est strictement nécessaire au traitement de votre demande.",
  };

  /* Local data */
  const isRequired =
    commentaryBlockData.commentaryStatus ===
    Enum_Componentblockscommentary_Commentarystatus.Obligatoire;

  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="c-RequestCommentaryBlock">
      <CommonBlockHeading
        isAlignLeft
        titleContent={`${commentaryBlockData.commentaryLabel}${
          isRequired ? "*" : ""
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
            <>
              <div className="c-CommentaryBlock">
                <textarea
                  className={classNames("c-CommentaryBlock__Input", {
                    "c-CommentaryBlock__Input_invalid": !!_.get(errors, name),
                  })}
                  placeholder={commentaryBlockData.commentaryPlaceholder ?? ""}
                  onChange={(event) => {
                    onChange({
                      name: commentaryBlockData.commentaryLabel,
                      content: event.target.value,
                    });
                  }}
                />
              </div>
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
            </>
          );
        }}
      />
      <span className="c-RequestCommentaryBlock__Message">
        {staticLabels.message}
      </span>
    </div>
  );
}
