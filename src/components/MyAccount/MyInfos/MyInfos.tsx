import React, { useState } from "react";
import { User } from "../../../lib/user";
import MyInfosBlock from "./MyInfosBlock";
import MyInfosEditBlock from "./MyInfosEditBlock";

interface MyInfosProps {
  user: User;
  refetch: () => void;
}

const MyInfos: React.FC<MyInfosProps> = ({ user, refetch }) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="c-CommonInfoPerso__Container">
      <p className="c-CommonInfoPerso__Title">Mes informations</p>
      {isEdit ? (
        <MyInfosEditBlock
          user={user}
          refetch={refetch}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
        />
      ) : (
        <MyInfosBlock user={user} isEdit={isEdit} setIsEdit={setIsEdit} />
      )}
    </div>
  );
};

export default MyInfos;
