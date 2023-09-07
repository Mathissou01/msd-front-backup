import React from "react";
import CommonButton from "../../Common/CommonButton/CommonButton";
import { IUser } from "../../../lib/user";
interface MyHomeNotCompleteBlockProps {
  user: IUser;
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}
const MyHomeBlock: React.FC<MyHomeNotCompleteBlockProps> = ({
  user,
  isEdit,
  setIsEdit,
}) => {
  return (
    <div className="c-CommonInfoPerso__Container">
      <p className="c-CommonInfoPerso__Title">Mon foyer</p>
      <div className="c-CommonInfoPerso__Content">
        <div className="c-CommonInfoPerso__ContentItem">
          <p className="c-CommonInfoPerso__ContentItem_subTtitle">
            Type de logement
          </p>
          <p className="c-CommonInfoPerso__ContentItem_value">
            {user.dwellingType === "house" && "Maison"}
            {user.dwellingType === "apartment" && "Appartement"}
          </p>
        </div>
        <div className="c-CommonInfoPerso__ContentItem">
          <p className="c-CommonInfoPerso__ContentItem_subTtitle">
            Nombre de personnes dans le foyer
          </p>
          <p className="c-CommonInfoPerso__ContentItem_value">
            {user?.householdSize}
          </p>
        </div>
      </div>
      <div className="c-CommonInfoPerso__Button">
        <CommonButton
          type="button"
          style="secondary"
          label="Modifier"
          onClick={() => {
            setIsEdit(!isEdit);
          }}
        />
      </div>
    </div>
  );
};

export default MyHomeBlock;
