import React from "react";
import MyHome from "./MyHome/MyHome";
import MyInfos from "./MyInfos/MyInfos";
import MyPassword from "./MyPassword";
import { IUser } from "../../lib/user";
import "./common-infoPerso.scss";
import "./common-infoPersoEdit.scss";
import DeleteAccount from "./DeleteAccount/DeleteAccount";

interface MyPersonalInfosProps {
  user: IUser | null;
  refetch: () => void;
}

const MyPersonalInfos: React.FC<MyPersonalInfosProps> = ({ user, refetch }) => {
  return (
    <div className="c-CommonInfoPerso">
      {user !== null && (
        <div>
          <MyInfos user={user} refetch={refetch} />
          <MyPassword title="Mot de passe" />
          <MyHome user={user} refetch={refetch} />
          <DeleteAccount />
        </div>
      )}
    </div>
  );
};

export default MyPersonalInfos;
