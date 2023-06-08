import React from "react";
import MyHome from "./MyHome/MyHome";
import MyInfos from "./MyInfos/MyInfos";
import MyPassword from "./MyPassword";
import useGetUser from "../../hooks/user/useGetUser";
import CommonSpinner from "../Common/CommonSpinner/CommonSpinner";
import "./common-infoPerso.scss";
import "./common-infoPersoEdit.scss";

const MyPersonalInfos = () => {
  const { user, refetch, loading } = useGetUser(
    process.env.NEXT_PUBLIC_USER_ID || "",
  );

  return (
    <div className="c-CommonInfoPerso">
      {user && (
        <>
          {loading ? (
            <CommonSpinner />
          ) : (
            <div>
              <MyInfos user={user} refetch={refetch} />
              <MyPassword title="Mot de passe" />
              <MyHome user={user} refetch={refetch} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MyPersonalInfos;
