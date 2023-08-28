import React, { SetStateAction, useEffect, useState, MouseEvent } from "react";
import { PieChart, Pie, Cell, Sector, ResponsiveContainer } from "recharts";
import "./common-donut.scss";
import {
  Maybe,
  TrashFlow,
  UserWasteData,
} from "../../../graphql/codegen/generated-types";

interface RenderActiveShapeProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
  fill: string;
  percent: number;
  value: number;
  selectedChip: string;
  flows: UserWasteData;
}
const renderActiveShape = (props: RenderActiveShapeProps) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } =
    props;

  const fillColor =
    fill &&
    `rgba(${parseInt(fill.slice(1, 3), 16)}, ${parseInt(
      fill.slice(3, 5),
      16,
    )}, ${parseInt(fill.slice(5, 7), 16)}, 0.5)`;

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fillColor}
      />
    </g>
  );
};

const CommonDonut = ({
  selectedChip,
  flows,
}: {
  selectedChip: string;
  flows: UserWasteData;
}) => {
  const [activeFlow, setActiveFlow] = useState<Maybe<TrashFlow> | undefined>();
  const selectedData = flows.flows;
  const combinedFlows = selectedData?.map((flow) => ({
    name: flow?.name,
    percent: flow?.percentage,
  }));
  const reversedFlows = combinedFlows && [...combinedFlows].reverse(); // Inverse l'ordre des données car le plugin les affiche à l'envers

  const findFlow = (code: string) => {
    return selectedData?.find((flow) => flow?.trashFlow === code);
  };
  const COLORS =
    selectedChip === "CS"
      ? ["#F5C500", "#ecedee"]
      : selectedChip === "OMR"
      ? ["#f4f3e5", "#808080"]
      : ["#808080", "#F5C500"];

  useEffect(() => {
    if (selectedChip === "all") return;
    if (selectedChip) {
      const flow = findFlow(selectedChip);
      setActiveFlow(flow);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedChip]);

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
  }: //  percent,
  //  index,
  {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
    index: number;
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    //  const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <>
        <text
          x={
            selectedChip === "all" && flows.totalWeight
              ? flows?.totalWeight >= 100
                ? cx + 20
                : flows?.totalWeight < 10
                ? cx + 5
                : cx + 10
              : activeFlow?.weight && activeFlow?.weight >= 100
              ? cx + 20
              : activeFlow?.weight && activeFlow?.weight < 10
              ? cx + 5
              : cx + 10
          }
          y={cy - 15}
          textAnchor={x > cx ? "start" : "end"}
          dominantBaseline="central"
          className="c-MyWaste__DonutChartPoid"
        >
          {selectedChip === "all"
            ? Math.round(flows?.totalWeight || 0)
            : Math.round(activeFlow?.weight || 0)}
        </text>

        <text
          x={cx + 5}
          y={cy + 5}
          textAnchor={x > cx ? "start" : "end"}
          dominantBaseline="central"
          className="c-MyWaste__DonutChartPoidUnity"
        >
          kg
        </text>
        <text
          x={cx + 15}
          y={cy + 25}
          fill="#767C97"
          textAnchor={x > cx ? "start" : "end"}
          dominantBaseline="central"
          className="c-MyWaste__DonutChartPercent"
        >
          {`${
            selectedChip === "all" ? 100 : activeFlow?.percentage?.toFixed(0)
          }%`}
        </text>
      </>
    );
  };

  const [activeIndex, setActiveIndex] = useState(-1);
  const onPieEnter = (
    _: MouseEvent<SVGPathElement, MouseEvent>,
    index: SetStateAction<number>,
  ) => {
    setActiveIndex(index);
  };
  const onPieLeave = () => {
    setActiveIndex(-1);
  };

  return (
    <div style={{ width: "190px", height: "200px", margin: "auto" }}>
      <ResponsiveContainer>
        <PieChart width={300} height={300}>
          <Pie
            isAnimationActive={false}
            startAngle={90}
            endAngle={-360}
            data={reversedFlows}
            cx={90}
            cy={100}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={90}
            innerRadius={50}
            dataKey="percent"
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            onMouseEnter={onPieEnter}
            onMouseLeave={onPieLeave}
            stroke="none"
          >
            {combinedFlows?.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CommonDonut;
