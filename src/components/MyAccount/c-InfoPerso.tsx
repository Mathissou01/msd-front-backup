import React, { useState } from "react";
import MyHome from "./MyHome";
import MyInfos from "./MyInfos";
import MyPassword from "./MyPassword";
import "./common-infoPerso.scss";
import "./common-infoPersoEdit.scss";

const InfoPerso = () => {
  const [nbrPersonnesCount, setNbrPersonnesCount] = useState(0);
  // const [typeLogement, setTypeLogement] = useState("Maison");
  // const [adresse, setAdresse] = useState("");
  const typeLogement = "";
  const adresse = "";
  return (
    <div className="c-CommonInfoPerso">
      <MyHome
        title="Mon foyer"
        adresse={adresse}
        nbrPersonnesCount={nbrPersonnesCount}
        setNbrPersonnesCount={setNbrPersonnesCount}
        typeLogement={typeLogement}
      />

      <MyInfos
        idUser="MSD123456"
        title="Mes informations"
        nomComplet="Jim Halpert"
        email="jimhalpert@gmail.com"
        tel="06 00 00 00 00"
      />

      <MyPassword title="Mot de passe" />
    </div>
  );
};

export default InfoPerso;
