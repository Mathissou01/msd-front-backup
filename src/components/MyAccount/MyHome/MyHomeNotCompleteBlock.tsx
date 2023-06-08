import React, { Dispatch, SetStateAction } from "react";
import CommonButton from "../../Common/CommonButton/CommonButton";
interface MyHomeNotCompleteBlockProps {
  isEdit: boolean;
  setIsCompleted: Dispatch<SetStateAction<boolean>>;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
}
const MyHomeNotCompleteBlock: React.FC<MyHomeNotCompleteBlockProps> = ({
  isEdit,
  setIsCompleted,
  setIsEdit,
}) => {
  return (
    <div className="c-CommonInfoPerso__MyHomeNotCompleteContainer">
      <div className="c-CommonInfoPerso__MyHomeNotCompleteContent">
        <h1 className="c-CommonInfoPerso__MyHomeNotCompleteTitle">Mon foyer</h1>
        <p>
          Compléter les informations sur mon foyers pour profiter de conseils
          personnalisés
        </p>
        <div className="c-CommonInfoPersoEdit__MyHomeNotCompleteButton">
          <CommonButton
            style="secondary"
            label="Completer les informations"
            onClick={() => {
              setIsCompleted(true);
              setIsEdit(!isEdit);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MyHomeNotCompleteBlock;
