import {
  ComponentBlocksQcm,
  Enum_Componentblocksqcm_Fieldstatusqcm,
} from "../../../../graphql/codegen/generated-types";
import CommonBlockHeading from "../../../Common/CommonBlockHeading/CommonBlockHeading";
import FormMultiCheckbox from "../../../Form/FormMultiCheckbox/FormMultiCheckbox";
import FormSelect from "../../../Form/FormSelect/FormSelect";
import "./request-qcm-block.scss";

interface IRequestQCMBlock {
  name: string;
  blockDataQCM: ComponentBlocksQcm;
}

export default function RequestQCMBlock({
  blockDataQCM,
  name,
}: IRequestQCMBlock) {
  return (
    <div className="c-RequestQCMBlock">
      <CommonBlockHeading
        titleContent={`${blockDataQCM.fieldLabelQCM} ${
          blockDataQCM.fieldStatusQCM ===
          Enum_Componentblocksqcm_Fieldstatusqcm.Obligatoire
            ? "*"
            : ""
        }`}
        isAlignLeft
      />
      {blockDataQCM.multipleChoice ? (
        <FormMultiCheckbox
          name={name}
          options={blockDataQCM.responses.split(";").map((answer) => {
            return {
              label: answer,
              value: answer.trim(),
            };
          })}
          isRequired={
            blockDataQCM.fieldStatusQCM ===
            Enum_Componentblocksqcm_Fieldstatusqcm.Obligatoire
          }
        />
      ) : (
        <FormSelect
          name={name}
          options={blockDataQCM.responses.split(";").map((answer) => {
            return {
              option: answer.trim(),
            };
          })}
          isRequired={
            blockDataQCM.fieldStatusQCM ===
            Enum_Componentblocksqcm_Fieldstatusqcm.Obligatoire
          }
        />
      )}
    </div>
  );
}
