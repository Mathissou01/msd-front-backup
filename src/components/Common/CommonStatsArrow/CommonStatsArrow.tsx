import React from "react";
import classNames from "classnames";
import DecliningProduction from "public/images/pictos/arrowData.svg";
import "./common-stats-arrow.scss";

interface CommonStatsArrowProps {
  percent: number;
}

const CommonRenderArrow: React.FC<CommonStatsArrowProps> = ({ percent }) => {
  const ArrowClass = classNames("c-CommonStatsArrow", {
    "c-CommonStatsArrow_red": percent >= 5,
    "c-CommonStatsArrow_green": percent <= -5,
  });
  return (
    <div className={ArrowClass}>
      <DecliningProduction />
    </div>
  );
};

export default CommonRenderArrow;
