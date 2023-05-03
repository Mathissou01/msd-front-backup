import React from "react";
import CommonButton from "../Common/CommonButton/CommonButton";

interface ICommonInfoPersoProps {
  title: string;
  // mdp?: string;
}

export default function CommonInfoPerso({ title }: ICommonInfoPersoProps) {
  return (
    <div className="c-CommonInfoPerso__Container">
      <p className="c-CommonInfoPerso__Title">{title}</p>
      <div className="c-CommonInfoPerso__Content">
        <div className="c-CommonInfoPerso__ContentItem">
          <p className="c-CommonInfoPerso__ContentItem_subTtitle">
            Mot de passe
          </p>
          <p className="c-CommonInfoPerso__ContentItem_value c-CommonInfoPerso__Pwd">
            {"*".repeat(10)}
          </p>
        </div>
      </div>
      <div className="c-CommonInfoPerso__Button">
        <CommonButton
          type="button"
          style="primary"
          label="modifier"
          onClick={() => window.open("https://www.keycloak.org/", "_blank")}
        />
      </div>
    </div>
  );
}
