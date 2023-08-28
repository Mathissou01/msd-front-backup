import React, { useEffect, useState } from "react";
import { IUser } from "../../../lib/user";
import MyHomeNotCompleteBlock from "./MyHomeNotCompleteBlock";
import MyHomeEditBlock from "./MyHomeEditBlock";
import MyHomeBlock from "./MyHomeBlock";

interface MyHomeProps {
  user: IUser;
  refetch: () => void;
}

const MyHome: React.FC<MyHomeProps> = ({ user, refetch }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const isMyHomeInfosCompleted = () => {
    if (
      typeof user.dwellingType !== "undefined" &&
      typeof user.householdSize !== "undefined"
    ) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  };

  useEffect(() => {
    isMyHomeInfosCompleted();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <>
      {isCompleted ? (
        <>
          {isEdit ? (
            <MyHomeEditBlock
              user={user}
              refetch={refetch}
              isEdit={isEdit}
              setIsEdit={setIsEdit}
              isMyHomeInfosCompleted={isMyHomeInfosCompleted}
            />
          ) : (
            <MyHomeBlock user={user} isEdit={isEdit} setIsEdit={setIsEdit} />
          )}
        </>
      ) : (
        <MyHomeNotCompleteBlock
          isEdit={isEdit}
          setIsCompleted={setIsCompleted}
          setIsEdit={setIsEdit}
        />
      )}
    </>
  );
};

export default MyHome;
