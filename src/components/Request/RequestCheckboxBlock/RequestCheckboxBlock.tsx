import React, { useEffect, useRef } from "react";
import { useFormContext } from "react-hook-form";
import CommonCheckbox from "../../Common/CommonCheckbox/CommonCheckbox";
import "./request-checkbox-block.scss";

interface RequestCheckboxBlockProps {
  id: string;
  isRequired?: boolean;
  label: string;
}

export default function RequestCheckboxBlock({
  id,
  isRequired,
  label,
}: RequestCheckboxBlockProps) {
  const { register } = useFormContext();
  const isInitialized = useRef<boolean>(false);

  useEffect(() => {
    if (!isInitialized.current) {
      register(id, { value: undefined, required: isRequired });
      isInitialized.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="c-RequestCheckboxBlock">
      <CommonCheckbox id={id} isRequired={isRequired} label={label} />
    </div>
  );
}
