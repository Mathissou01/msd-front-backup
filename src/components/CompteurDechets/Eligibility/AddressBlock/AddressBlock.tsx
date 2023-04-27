import React, { Dispatch, SetStateAction } from "react";
import PencilWrite from "public/images/pictos/pencilwrite.svg";
import "./address-block.scss";

interface AddressBlockProps {
  selectedAddress: string;
  setSelectedAddress: Dispatch<SetStateAction<string>>;
  handleError: (
    updates: Partial<{ [key: string]: string | boolean | number }>,
  ) => void;
}

const AddressBlock: React.FC<AddressBlockProps> = ({
  selectedAddress,
  setSelectedAddress,
  handleError,
}) => {
  return (
    <div className="c-StepAddress__AddressBlockContainer">
      <div className="c-StepAddress__Address">
        <p className="c-StepAddress__LabelConfirm">Adresse complète</p>
        <p className="c-StepAddress__SelectedAddress">{selectedAddress}</p>
      </div>
      <button type="button" className="c-StepAddress__PencilIcon">
        <PencilWrite
          onClick={() => {
            setSelectedAddress("");
            handleError({ isActive: false });
          }}
        />
      </button>
    </div>
  );
};

export default AddressBlock;
