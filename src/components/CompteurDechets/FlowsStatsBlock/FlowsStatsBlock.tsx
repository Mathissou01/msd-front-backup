import { Maybe, TrashFlow } from "../../../graphql/codegen/generated-types";
import Flow from "../Eligibility/HomePage/Flows/Flow/Flow";

import "./flows-stats-block.scss";

interface FlowsStatsBlockProps {
  flows: Maybe<Maybe<TrashFlow>[]> | undefined;
  type: "percent" | "kg";
}

const FlowsStatsBlock: React.FC<FlowsStatsBlockProps> = ({ flows, type }) => {
  return (
    <div className="c-FlowsStatsBlock">
      {flows &&
        flows.map((flow: Maybe<TrashFlow>, i: number) => (
          <div key={i} className="c-FlowsStatsBlock__Flows">
            <Flow flow={flow} />
            {type === "percent" && (
              <p className="c-FlowsStatsBlock__FlowTitle">
                {flow?.percentage?.toFixed(0)}%
              </p>
            )}
            {type === "kg" && (
              <p className="c-FlowsStatsBlock__FlowTitle">
                {flow?.weight?.toFixed(0)}kg
              </p>
            )}
          </div>
        ))}
    </div>
  );
};

export default FlowsStatsBlock;
