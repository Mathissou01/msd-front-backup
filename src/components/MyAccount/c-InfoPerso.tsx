import React from "react";
import MyHome from "./MyHome";
import MyInfos from "./MyInfos";
import MyPassword from "./MyPassword";
import "./common-infoPerso.scss";
import "./common-infoPersoEdit.scss";

const ComponentA = () => {
  return (
    <div className="c-CommonInfoPerso">
      <MyHome
        title="Mon foyer"
        typeLogement="Maison"
        typeUsager="Pariculier"
        adresse="15 rue de la gare, 82000 Montauban"
        nbrPersonnes="4 personnes"
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

export default ComponentA;
