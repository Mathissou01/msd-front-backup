import {
  Enum_Componentblockscheckbox_Fieldstatuscheckbox,
  RequestAddableBlocksDynamicZone,
} from "../../../graphql/codegen/generated-types";
import { removeNulls } from "../../../lib/utilities";
import RequestCheckboxBlock from "../../Blocks/RequestBlocks/RequestCheckboxBlock/RequestCheckboxBlock";
import RequestDatePickerBlock from "../../Blocks/RequestBlocks/RequestDatePickerBlock/RequestDatePickerBlock";
import "./request-blocks.scss";

interface IRequestBlocksProps {
  blocks: Array<RequestAddableBlocksDynamicZone>;
}

export default function RequestBlocks({ blocks }: IRequestBlocksProps) {
  return (
    <div className="c-RequestBlocks">
      {blocks
        .map((block, index) => {
          if (block) {
            const id = `request-block-${index}`;
            switch (block.__typename) {
              /*case "ComponentBlocksAttachments":
                          return <></>;*/
              case "ComponentBlocksCheckbox":
                return (
                  <RequestCheckboxBlock
                    id={id}
                    label={block.labelCheckbox}
                    isRequired={
                      block.fieldStatusCheckbox ===
                      Enum_Componentblockscheckbox_Fieldstatuscheckbox.Obligatoire
                    }
                    key={index}
                  />
                );
              /*case "ComponentBlocksCommentary":
                          return <></>;
                        case "ComponentBlocksCumbersome":
                          return <></>;*/
              case "ComponentBlocksDateChoice":
                return (
                  <RequestDatePickerBlock
                    key={index}
                    dateBlockData={block}
                    name={`dateChoice.${block.id}.date`}
                  />
                );
              /*case "ComponentBlocksQcm":
                          return <></>;
                        case "ComponentBlocksQuestions":
                          return <></>;*/
            }
          }
        })
        .filter(removeNulls) ?? []}
    </div>
  );
}
