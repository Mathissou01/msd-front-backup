import {
  ComponentBlocksDateChoice,
  Enum_Componentblocksdatechoice_Fieldstatus,
} from "../../../../graphql/codegen/generated-types";
import CommonBlockHeading from "../../../Common/CommonBlockHeading/CommonBlockHeading";
import FormDatePicker from "../../../Form/FormDatePicker/FormDatePicker";
import "./request-date-picker-block.scss";

interface IRequestDatePickerProps {
  dateBlockData: ComponentBlocksDateChoice;
  name: string;
}

export default function RequestDatePickerBlock({
  dateBlockData,
  name,
}: IRequestDatePickerProps) {
  return (
    <div className="c-RequestBlock">
      <CommonBlockHeading
        isAlignLeft
        titleContent={`${dateBlockData.fieldLabelDateChoice} ${
          dateBlockData.fieldStatus ===
          Enum_Componentblocksdatechoice_Fieldstatus.Obligatoire
            ? "*"
            : ""
        }`}
      />
      <FormDatePicker
        name={name}
        minDate={new Date()}
        isRequired={
          dateBlockData.fieldStatus ===
          Enum_Componentblocksdatechoice_Fieldstatus.Obligatoire
        }
        label=""
      />
    </div>
  );
}
