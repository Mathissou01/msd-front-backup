import React, { useState } from "react";
import MyHome from "./MyHome";
import MyInfos from "./MyInfos";
import MyPassword from "./MyPassword";
import useGetUser from "../../hooks/useGetUser";
import CommonSpinner from "../Common/CommonSpinner/CommonSpinner";
import "./common-infoPerso.scss";
import "./common-infoPersoEdit.scss";

const MyPersonalInfos = () => {
  const [nbrPersonnesCount, setNbrPersonnesCount] = useState(0);
  // const [typeLogement, setTypeLogement] = useState("Maison");
  // const [adresse, setAdresse] = useState("");
  const typeLogement = "";
  const adresse = "";

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
              <MyHome
                title="Mon foyer"
                adresse={adresse}
                nbrPersonnesCount={nbrPersonnesCount}
                setNbrPersonnesCount={setNbrPersonnesCount}
                typeLogement={typeLogement}
              />

              <MyInfos user={user} refetch={refetch} loading={loading} />

              <MyPassword title="Mot de passe" />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MyPersonalInfos;
