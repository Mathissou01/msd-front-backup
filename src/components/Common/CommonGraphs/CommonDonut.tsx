import React, { SetStateAction, useEffect, useState, MouseEvent } from "react";
import { PieChart, Pie, Cell, Sector, ResponsiveContainer } from "recharts";
import "./common-donut.scss";

// const data = [
//   {
//     date: "Décembre 2023",
//     poidTotal: 118,
//     flows: [
//       {
//         name: "householdWaste",
//         poid: 90,
//         percent: 88,
//       },
//       {
//         name: "packaging",
//         poid: 20,
//         percent: 22,
//       },
//     ],
//   },
//   {
//     date: "Janvier 2023",
//     poidTotal: 118,
//     flows: [
//       {
//         name: "householdWaste",
//         poid: 100,
//         percent: 65,
//       },
//       {
//         name: "packaging",
//         poid: 18,
//         percent: 45,
//       },
//     ],
//   },
// ];
interface Flow {
  name: string;
  total: number;
  percent: number;
  poid: number;
}

interface Flows {
  total: number;
  percent: number;
  date: string;
  flow: Flow[];
}

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
  flows: Flows;
}
const renderActiveShape = (props: RenderActiveShapeProps) => {
  const {
    cx,
    cy,
    //  midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    //  percent,
    //  value,
  } = props;

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
  flows: Flows;
}) => {
  const [activeDonut, setActiveDonut] = useState("");
  useEffect(() => {
    setActiveDonut(selectedChip);
  }, [selectedChip]);

  const selectedData = flows.flow;
  //   const selectedData = data[0];
  const combinedFlows = selectedData.map((flow) => ({
    name: flow.name,
    percent: flow.percent,
  }));
  const reversedFlows = [...combinedFlows].reverse(); // Inverse l'ordre des données car le plugin les affiche à l'envers

  const firstFlow =
    selectedData.find((flow) => flow.name === activeDonut) || selectedData[0];

  const COLORS =
    activeDonut === "packaging"
      ? ["#F5C500", "#ecedee"]
      : activeDonut === "householdWaste"
      ? ["#f4f3e5", "#808080"]
      : ["#808080", "#F5C500"];
  //   const COLORS =
  //     activeDonut === "packaging"
  //       ? ["#808080", "#f4f3e5"]
  //       : activeDonut === "householdWaste"
  //       ? ["#ecedee", "#F5C500"]
  //       : ["#808080", "#F5C500"];

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
          x={firstFlow.poid < 100 || flows.total < 100 ? cx - 15 : cx - 50}
          y={cy - 15}
          textAnchor={x > cx ? "start" : "end"}
          dominantBaseline="central"
          className="c-MyWaste__DonutChartPoid"
        >
          {activeDonut === "all" ? flows.total : firstFlow.poid}
        </text>

        <text
          x={cx - 8}
          y={cy + 5}
          textAnchor={x > cx ? "start" : "end"}
          dominantBaseline="central"
          className="c-MyWaste__DonutChartPoidUnity"
        >
          kg
        </text>
        <text
          x={cx - 10}
          y={cy + 25}
          fill="#767C97"
          textAnchor={x > cx ? "start" : "end"}
          dominantBaseline="central"
          className="c-MyWaste__DonutChartPercent"
        >
          {`${firstFlow.percent.toFixed(0)}%`}
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
            {combinedFlows.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CommonDonut;
