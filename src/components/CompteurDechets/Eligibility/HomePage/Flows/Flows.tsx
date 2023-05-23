import React from "react";
import Bac from "public/images/pictos/bac_2_roues.svg";
import "./flows.scss";

const Flows = () => {
  return (
    <div className="c-Flows">
      <div className="c-Flows__Item">
        <div className="c-Flows__BacSvg_gray">
          <Bac data-testid="bac1" />
        </div>
        <div className="c-Flows__ItemData">
          <p className="c-Flows__Name">Ordures ménagères</p>
          <p className="c-Flows__ID">1X00CFB567</p>
        </div>
      </div>
      <div className="c-Flows__Item">
        <div className="c-Flows__BacSvg_yellow">
          <Bac data-testid="bac2" />
        </div>
        <div className="c-Flows__ItemData">
          <p className="c-Flows__Name">Emballages</p>
          <p className="c-Flows__ID">1X00CFB568</p>
        </div>
      </div>
    </div>
  );
};

export default Flows;
