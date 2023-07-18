import React from "react";
import "./my-waste-stats-block.scss";
import FlowsStatsBlock from "../FlowsStatsBlock/FlowsStatsBlock";

interface Flow {
  name: string;
  total: number;
  percent: number;
  code: string;
}

interface Flows {
  total: number;
  percent: number;
  date: string;
  flow: Flow[];
}

interface MyWasteStatsBlockProps {
  flows: Flows;
}

const MyWasteStatsBlock: React.FC<MyWasteStatsBlockProps> = ({ flows }) => {
  return (
    <div className="c-MyWasteStatsBlock">
      <div className="c-MyWasteStatsBlock__TotalCountContainer">
        <p className="c-MyWasteStatsBlock__Total">TOTAL</p>
        <p className="c-MyWasteStatsBlock__TotalValue">{flows.total} kg</p>
      </div>
      <FlowsStatsBlock flows={flows.flow} type="percent" />
    </div>
  );
};

export default MyWasteStatsBlock;
