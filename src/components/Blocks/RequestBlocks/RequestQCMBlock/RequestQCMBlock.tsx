import {
  ComponentBlocksQcm,
  Enum_Componentblocksqcm_Fieldstatusqcm,
} from "../../../../graphql/codegen/generated-types";
import CommonBlockHeading from "../../../Common/CommonBlockHeading/CommonBlockHeading";
import FormMultiCheckbox from "../../../Form/FormMultiCheckbox/FormMultiCheckbox";
import FormSelect from "../../../Form/FormSelect/FormSelect";
import "./request-qcm-block.scss";

interface IRequestQCMBlock {
  blockDataQCM: ComponentBlocksQcm;
}

export default function RequestQCMBlock({ blockDataQCM }: IRequestQCMBlock) {
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
          name="questionsMC"
          options={blockDataQCM.responses.split(";").map((answer) => {
            return {
              label: answer,
              value: answer,
            };
          })}
          isRequired={
            blockDataQCM.fieldStatusQCM ===
            Enum_Componentblocksqcm_Fieldstatusqcm.Obligatoire
          }
        />
      ) : (
        <FormSelect
          name="questionMC"
          options={blockDataQCM.responses.split(";").map((answer) => {
            return {
              option: answer,
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
