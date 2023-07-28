import React from "react";
import "./my-waste-stats-block.scss";
import FlowsStatsBlock from "../FlowsStatsBlock/FlowsStatsBlock";
import { UserWasteData } from "../../../graphql/codegen/generated-types";

interface MyWasteStatsBlockProps {
  flows: UserWasteData;
}

const MyWasteStatsBlock: React.FC<MyWasteStatsBlockProps> = ({ flows }) => {
  return (
    <div className="c-MyWasteStatsBlock">
      <div className="c-MyWasteStatsBlock__TotalCountContainer">
        <p className="c-MyWasteStatsBlock__Total">TOTAL</p>
        <p className="c-MyWasteStatsBlock__TotalValue">
          {flows?.totalWeight} kg
        </p>
      </div>
      {flows && <FlowsStatsBlock flows={flows.flows} type="percent" />}
    </div>
  );
};

export default MyWasteStatsBlock;
