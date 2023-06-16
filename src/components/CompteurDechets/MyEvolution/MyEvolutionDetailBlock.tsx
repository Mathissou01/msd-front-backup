import React from "react";
import "./my-evolution-detail-block.scss";
import Flow from "../Eligibility/HomePage/Flows/Flow/Flow";
import CommonStatsArrow from "../../Common/CommonStatsArrow/CommonStatsArrow";
import ProductionTextBlock from "./ProductionTextBlock/ProductionTextBlock";

interface MyEvolutionDetailBlockProps {
  date: string;
}
const MyEvolutionDetailBlock: React.FC<MyEvolutionDetailBlockProps> = ({
  date,
}) => {
  const data = {
    total: 145,
    percent: 3,
    date: "01/06/2023",
    flow: [
      {
        name: "householdWaste",
        total: 100,
      },
      {
        name: "packaging",
        total: 45,
      },
    ],
  };

  return (
    <div className="c-MyEvolutionDetailBlock">
      <h4 className="c-MyEvolutionDetailBlock__Date">{date}</h4>
      <div className="c-MyEvolutionDetailBlock__Content">
        <p>TOTAL</p>
        <div className="c-MyEvolutionDetailBlock__TotalCountContainer">
          <p>{data.total} kg</p>
          <CommonStatsArrow percent={data.percent} />
        </div>
      </div>
      <ProductionTextBlock percent={data.percent} />
      <div className="c-MyEvolutionDetailBlock__FlowContainer">
        {data.flow.map((flow, i) => (
          <div key={i} className="c-MyEvolutionDetailBlock__Flows">
            <Flow flow={flow} />
            <p className="c-MyEvolutionDetailBlock__FlowTitle">
              {flow.total}kg
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyEvolutionDetailBlock;
