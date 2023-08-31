import React from "react";
import "./bins-error.scss";

interface BinsErrorProps {
  bins: { name: string; value: string }[];
}

const BinsError: React.FC<BinsErrorProps> = ({ bins }) => {
  return (
    <div className="c-BinsError">
      <p className="c-BinsError__Title">Numéros associés à cette adresse</p>
      <div className="c-BinsError__BinsContainer">
        {bins.map((bin: { name: string; value: string }, i: number) => (
          <div key={i} className="c-BinsError__BinsContent">
            <p className="c-BinsError__Name">{bin.name}</p>
            <strong className="c-BinsError__Value">{bin.value}</strong>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BinsError;
