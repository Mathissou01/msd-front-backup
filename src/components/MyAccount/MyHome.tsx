import React from "react";

import CommonButton from "../Common/CommonButton/CommonButton";

interface ICommonInfoPersoProps {
  title: string;
  typeLogement?: string;
  typeUsager?: string;
  adresse?: string;
  nbrPersonnes?: string;
}

export default function CommonInfoPerso({
  title,
  typeLogement,
  typeUsager,
  adresse,
  nbrPersonnes,
}: ICommonInfoPersoProps) {
  return (
    <div className="c-CommonInfoPerso__Container">
      <p className="c-CommonInfoPerso__Title">{title}</p>
      <div className="c-CommonInfoPerso__Content">
        <div className="c-CommonInfoPerso__ContentItem">
          <p className="c-CommonInfoPerso__ContentItem_subTtitle">
            Type de logement
          </p>
          <p className="c-CommonInfoPerso__ContentItem_value">{typeLogement}</p>
        </div>
        <div className="c-CommonInfoPerso__ContentItem">
          <p className="c-CommonInfoPerso__ContentItem_subTtitle">
            Type de logement
          </p>
          <p className="c-CommonInfoPerso__ContentItem_value">{typeUsager}</p>
        </div>
        <div className="c-CommonInfoPerso__ContentItem">
          <p className="c-CommonInfoPerso__ContentItem_subTtitle">
            Type de logement
          </p>
          <p className="c-CommonInfoPerso__ContentItem_value">{adresse}</p>
        </div>
        <div className="c-CommonInfoPerso__ContentItem">
          <p className="c-CommonInfoPerso__ContentItem_subTtitle">
            Type de logement
          </p>
          <p className="c-CommonInfoPerso__ContentItem_value">{nbrPersonnes}</p>
        </div>
      </div>
      <div className="c-CommonInfoPerso__Button">
        <CommonButton
          type="button"
          style="primary"
          label="modifier"
          onClick={() => console.log("first")}
        />
      </div>
    </div>
  );
}
