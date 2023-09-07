import React, { Dispatch, SetStateAction } from "react";
import PencilWrite from "public/images/pictos/pencilwrite.svg";
import "./address-block.scss";
import { IAddress } from "../../../../lib/user";

interface AddressBlockProps {
  selectedAddress: IAddress | null | undefined;
  setSelectedAddress: Dispatch<SetStateAction<IAddress | null | undefined>>;
  handleError: (
    updates: Partial<{ [key: string]: string | boolean | number }>,
  ) => void;
  setCurrentQuestion?: Dispatch<SetStateAction<number>>;
}

const AddressBlock: React.FC<AddressBlockProps> = ({
  selectedAddress,
  setSelectedAddress,
  handleError,
  setCurrentQuestion,
}) => {
  return (
    <div className="c-StepAddress__AddressBlockContainer">
      <div className="c-StepAddress__Address">
        <p className="c-StepAddress__LabelConfirm">Adresse complète</p>
        <p className="c-StepAddress__SelectedAddress">
          {selectedAddress?.label}
        </p>
      </div>
      <button type="button" className="c-StepAddress__PencilIcon">
        <PencilWrite
          onClick={() => {
            setCurrentQuestion && setCurrentQuestion(3);
            setSelectedAddress(null);
            handleError({ isActive: false });
          }}
        />
      </button>
    </div>
  );
};

export default AddressBlock;
