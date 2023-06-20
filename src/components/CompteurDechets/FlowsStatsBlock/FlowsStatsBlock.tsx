import Flow from "../Eligibility/HomePage/Flows/Flow/Flow";

import "./flows-stats-block.scss";
interface Flow {
  name: string;
  total?: number;
  percent?: number;
}

interface FlowsStatsBlockProps {
  flows: Flow[];
  type: "percent" | "kg";
}

const FlowsStatsBlock: React.FC<FlowsStatsBlockProps> = ({ flows, type }) => {
  return (
    <div className="c-FlowsStatsBlock">
      {flows.map((flow: Flow, i: number) => (
        <div key={i} className="c-FlowsStatsBlock__Flows">
          <Flow flow={flow} />
          {type === "percent" && (
            <p className="c-FlowsStatsBlock__FlowTitle">{flow.percent}%</p>
          )}
          {type === "kg" && (
            <p className="c-FlowsStatsBlock__FlowTitle">{flow.total}kg</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FlowsStatsBlock;
