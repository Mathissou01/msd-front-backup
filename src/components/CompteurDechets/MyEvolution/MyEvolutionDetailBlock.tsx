import React from "react";
import CommonStatsArrow from "../../Common/CommonStatsArrow/CommonStatsArrow";
import ProductionTextBlock from "./ProductionTextBlock/ProductionTextBlock";
import FlowsStatsBlock from "../FlowsStatsBlock/FlowsStatsBlock";
import "./my-evolution-detail-block.scss";
import { Maybe, TrashFlow } from "../../../graphql/codegen/generated-types";

interface MyEvolutionDetailBlockProps {
  date: string;
  wasteUserHistory: {
    totalWeight: number;
    flows: Maybe<Maybe<TrashFlow>[]> | undefined;
  };
  productionCompare: number;
  activeIndex: number;
}

const MyEvolutionDetailBlock: React.FC<MyEvolutionDetailBlockProps> = ({
  date,
  wasteUserHistory,
  productionCompare,
  activeIndex,
}) => {
  return (
    <div className="c-MyEvolutionDetailBlock">
      <h4 className="c-MyEvolutionDetailBlock__Date">{date}</h4>
      <div className="c-MyEvolutionDetailBlock__Content">
        <p>TOTAL</p>
        <div className="c-MyEvolutionDetailBlock__TotalCountContainer">
          <p>{Math.round(wasteUserHistory?.totalWeight)} kg</p>
          {activeIndex !== 0 && (
            <CommonStatsArrow percent={productionCompare} />
          )}
        </div>
      </div>
      <ProductionTextBlock
        percent={activeIndex === 0 ? null : productionCompare}
      />
      <FlowsStatsBlock flows={wasteUserHistory?.flows} type="kg" />
    </div>
  );
};

export default MyEvolutionDetailBlock;
