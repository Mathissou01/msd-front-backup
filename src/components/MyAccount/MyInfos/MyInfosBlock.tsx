import React, { Dispatch, SetStateAction } from "react";
import { User } from "../../../lib/user";
import CommonButton from "../../Common/CommonButton/CommonButton";

interface MyInfosBlockProps {
  user: User;
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
}

const MyInfosBlock: React.FC<MyInfosBlockProps> = ({
  user,
  isEdit,
  setIsEdit,
}) => {
  return (
    <>
      <div className="c-CommonInfoPerso__Content">
        <div className="c-CommonInfoPerso__ContentItem">
          <p className="c-CommonInfoPerso__ContentItem_subTtitle">
            ID Utilisateur
          </p>
          <p className="c-CommonInfoPerso__ContentItem_value">{user?.id}</p>
        </div>
        <div className="c-CommonInfoPerso__ContentItem">
          <p className="c-CommonInfoPerso__ContentItem_subTtitle">
            Adresse complète *
          </p>
          <p className="c-CommonInfoPerso__ContentItem_value">
            {user?.addressLabel}
          </p>
        </div>
        <div className="c-CommonInfoPerso__ContentItem">
          <p className="c-CommonInfoPerso__ContentItem_subTtitle">
            Nom complet
          </p>
          <p className="c-CommonInfoPerso__ContentItem_value">
            {user?.firstname} {user?.lastname}
          </p>
        </div>
        <div className="c-CommonInfoPerso__ContentItem">
          <p className="c-CommonInfoPerso__ContentItem_subTtitle">Email</p>
          <p className="c-CommonInfoPerso__ContentItem_value">{user?.email}</p>
        </div>
        <div className="c-CommonInfoPerso__ContentItem">
          <p className="c-CommonInfoPerso__ContentItem_subTtitle">
            N° de téléphone
          </p>
          <p className="c-CommonInfoPerso__ContentItem_value">{user?.phone}</p>
        </div>
      </div>

      <div className="c-CommonInfoPerso__Button">
        <CommonButton
          type="button"
          style="secondary"
          label="Modifier"
          onClick={() => setIsEdit(!isEdit)}
        />
      </div>
    </>
  );
};

export default MyInfosBlock;
