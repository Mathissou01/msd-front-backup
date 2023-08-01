import React, { useEffect, useRef } from "react";
import { useFormContext } from "react-hook-form";
import {
  ComponentBlocksCheckbox,
  Enum_Componentblockscheckbox_Fieldstatuscheckbox,
} from "../../../../graphql/codegen/generated-types";
import CommonCheckbox from "../../../Common/CommonCheckbox/CommonCheckbox";

interface RequestCheckboxBlockProps {
  checkboxBlockData: ComponentBlocksCheckbox;
  name: string;
}

export default function RequestCheckboxBlock({
  checkboxBlockData,
  name,
}: RequestCheckboxBlockProps) {
  const { register } = useFormContext();
  const isInitialized = useRef<boolean>(false);

  useEffect(() => {
    if (!isInitialized.current) {
      register(name, {
        value: undefined,
        required:
          checkboxBlockData.fieldStatusCheckbox ===
          Enum_Componentblockscheckbox_Fieldstatuscheckbox.Obligatoire,
      });
      isInitialized.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="c-RequestCheckboxBlock">
      <CommonCheckbox
        id={name}
        isRequired={
          checkboxBlockData.fieldStatusCheckbox ===
          Enum_Componentblockscheckbox_Fieldstatuscheckbox.Obligatoire
        }
        label={checkboxBlockData.labelCheckbox}
      />
    </div>
  );
}
