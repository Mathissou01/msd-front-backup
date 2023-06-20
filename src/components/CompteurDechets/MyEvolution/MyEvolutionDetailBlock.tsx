import React from "react";
import CommonStatsArrow from "../../Common/CommonStatsArrow/CommonStatsArrow";
import ProductionTextBlock from "./ProductionTextBlock/ProductionTextBlock";
import FlowsStatsBlock from "../FlowsStatsBlock/FlowsStatsBlock";
import "./my-evolution-detail-block.scss";

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
      <FlowsStatsBlock flows={data.flow} type="kg" />
    </div>
  );
};

export default MyEvolutionDetailBlock;
