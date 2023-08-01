import React from "react";
import CommonBlockHeading from "../../../Common/CommonBlockHeading/CommonBlockHeading";
import FormInput from "../../../Form/FormInput/FormInput";
import {
  ComponentBlocksCommentary,
  Enum_Componentblockscommentary_Commentarystatus,
} from "../../../../graphql/codegen/generated-types";
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
    title: "Laisser un commentaire",
    message:
      "Il est vivement recommandé d'éviter toute communication de toute donnée à caractère personnel via ces zones de texte ou en tout état de cause de limiter cette communication à ce qui est strictement nécessaire au traitement de votre demande.",
  };

  const isRequired =
    commentaryBlockData.commentaryStatus ===
    Enum_Componentblockscommentary_Commentarystatus.Obligatoire;

  return (
    <div className="c-RequestCommentaryBlock">
      <CommonBlockHeading
        isAlignLeft
        titleContent={`${commentaryBlockData.commentaryLabel}${
          isRequired ? "*" : ""
        }`}
      />
      <FormInput
        type="text"
        tagType="textarea"
        name={name}
        label={staticLabels.title}
        isRequired={isRequired}
        placeholder={commentaryBlockData.commentaryPlaceholder ?? ""}
        maxLengthValidation={300}
      />
      <span className="c-RequestCommentaryBlock__Message">
        {staticLabels.message}
      </span>
    </div>
  );
}
