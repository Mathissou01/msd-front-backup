import { useFormContext } from "react-hook-form";
import classNames from "classnames";
import {
  Enum_Componentblockscheckbox_Fieldstatuscheckbox,
  Enum_Componentblockscommentary_Commentarystatus,
  Enum_Componentblocksdatechoice_Fieldstatus,
  Enum_Componentblocksqcm_Fieldstatusqcm,
  Enum_Componentblocksquestions_Textstatus,
  RequestAddableBlocksDynamicZone,
} from "../../../../graphql/codegen/generated-types";
import RequestAttachmentsBlock from "../../../Blocks/RequestBlocks/RequestAttachmentsBlock/RequestAttachmentsBlock";
import RequestCheckboxBlock from "../../../Blocks/RequestBlocks/RequestCheckboxBlock/RequestCheckboxBlock";
import RequestCommentaryBlock from "../../../Blocks/RequestBlocks/RequestCommentaryBlock/RequestCommentaryBlock";
import RequestDatePickerBlock from "../../../Blocks/RequestBlocks/RequestDatePickerBlock/RequestDatePickerBlock";
import RequestQCMBlock from "../../../Blocks/RequestBlocks/RequestQCMBlock/RequestQCMBlock";
import RequestQuestionsBlock from "../../../Blocks/RequestBlocks/RequestQuestionsBlock/RequestQuestionsBlock";
import RequestBlockButtons from "./RequestBlockButtons/RequestBlockButtons";
import "./request-dynamic-blocks.scss";
import { useCallback, useEffect } from "react";

interface IRequestDynamicBlockProps {
  block: RequestAddableBlocksDynamicZone;
  blockIndex: number;
  currentStep: number;
  setCurrentStep: (currentStep: number) => void;
  noBlockSteps: number;
}

export default function RequestDynamicBlocks({
  block,
  blockIndex,
  currentStep,
  setCurrentStep,
  noBlockSteps,
}: IRequestDynamicBlockProps) {
  function getBlockComponent(block: RequestAddableBlocksDynamicZone) {
    switch (block.__typename) {
      case "ComponentBlocksAttachments": {
        return (
          <RequestAttachmentsBlock
            attachmentsBlockData={block}
            name={`attachments.${blockIndex}`}
          />
        );
      }
      case "ComponentBlocksCheckbox": {
        return (
          <RequestCheckboxBlock
            checkboxBlockData={block}
            name={`checkboxes.${blockIndex}`}
          />
        );
      }
      case "ComponentBlocksCommentary": {
        return (
          <RequestCommentaryBlock
            commentaryBlockData={block}
            name={`commentaries.${blockIndex}`}
          />
        );
      }
      case "ComponentBlocksCumbersome": {
        return <></>;
      }
      case "ComponentBlocksDateChoice": {
        return (
          <RequestDatePickerBlock
            dateBlockData={block}
            name={`dateChoice.${blockIndex}`}
          />
        );
      }
      case "ComponentBlocksQcm": {
        return (
          <RequestQCMBlock
            blockDataQCM={block}
            name={`questionsQCM.${blockIndex}`}
          />
        );
      }
      case "ComponentBlocksQuestions": {
        return (
          <RequestQuestionsBlock
            questionsBlockData={block}
            name={`questions.${blockIndex}`}
          />
        );
      }
    }
  }

  function isBlockRequired(block: RequestAddableBlocksDynamicZone): boolean {
    switch (block.__typename) {
      case "ComponentBlocksAttachments": {
        return block.isMandatory;
      }
      case "ComponentBlocksCheckbox": {
        return (
          block.fieldStatusCheckbox ===
          Enum_Componentblockscheckbox_Fieldstatuscheckbox.Obligatoire
        );
      }
      case "ComponentBlocksCommentary": {
        return (
          block.commentaryStatus ===
          Enum_Componentblockscommentary_Commentarystatus.Obligatoire
        );
      }
      case "ComponentBlocksDateChoice": {
        return (
          block.fieldStatus ===
          Enum_Componentblocksdatechoice_Fieldstatus.Obligatoire
        );
      }
      case "ComponentBlocksQcm": {
        return (
          block.fieldStatusQCM ===
          Enum_Componentblocksqcm_Fieldstatusqcm.Obligatoire
        );
      }
      case "ComponentBlocksQuestions": {
        return (
          block.textStatus ===
          Enum_Componentblocksquestions_Textstatus.Obligatoire
        );
      }
      default:
        return false;
    }
  }

  const getBlockName = useCallback(
    (block: RequestAddableBlocksDynamicZone) => {
      switch (block.__typename) {
        case "ComponentBlocksAttachments": {
          return `attachments.${blockIndex}`;
        }
        case "ComponentBlocksCheckbox": {
          return `checkboxes.${blockIndex}`;
        }
        case "ComponentBlocksCommentary": {
          return `commentaries.${blockIndex}`;
        }
        case "ComponentBlocksDateChoice": {
          return `dateChoice.${blockIndex}`;
        }
        case "ComponentBlocksQcm": {
          return `questionsQCM.${blockIndex}`;
        }
        case "ComponentBlocksQuestions": {
          return `questions.${blockIndex}`;
        }
        default:
          return "";
      }
    },
    [blockIndex],
  );

  const { watch, resetField } = useFormContext();

  const watchLat = watch("lat");
  const watchLong = watch("long");

  useEffect(() => {
    if (currentStep > noBlockSteps) resetField(getBlockName(block));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchLat, watchLong]);

  return (
    <div
      className={classNames("c-RequestDynamicBlocks", {
        "c-RequestDynamicBlocks_hidden":
          currentStep - noBlockSteps < blockIndex + 1,
      })}
      key={blockIndex}
    >
      {getBlockComponent(block)}
      <RequestBlockButtons
        isMandatoryBlock={isBlockRequired(block)}
        setCurrentStep={setCurrentStep}
        currentStep={currentStep}
        nameBlockValue={getBlockName(block)}
      />
    </div>
  );
}
