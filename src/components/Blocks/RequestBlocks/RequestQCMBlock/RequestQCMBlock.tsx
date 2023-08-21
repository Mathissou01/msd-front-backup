import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
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
  const { watch, setValue } = useFormContext();
  const watchValue = watch(`temp.${name}`);

  useEffect(() => {
    if (watchValue)
      setValue(name, {
        name: blockDataQCM.fieldLabelQCM,
        content: watchValue.join(","),
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchValue]);

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
          name={`temp.${name}`}
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
          name={`temp.${name}`}
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
