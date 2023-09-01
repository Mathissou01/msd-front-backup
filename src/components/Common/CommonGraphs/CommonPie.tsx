/* eslint-disable no-shadow */
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { UserWasteData } from "../../../graphql/codegen/generated-types";
import "./common-pie.scss";

interface IBarometerInsightProps {
  pieData?: UserWasteData;
  average: number;
}
const RADIAN = Math.PI / 180;
type Data = {
  name: string;
  value: number;
  color: string;
};

interface BarometerParams {
  low: number;
  medium: number;
  high: number;
  veryHigh: number;
}

export default function BarometerInsight({
  pieData,
  average,
}: IBarometerInsightProps) {
  const needleValue = pieData?.totalWeight || 0;

  const barometerParams: BarometerParams = {
    low: pieData?.barometerParams?.low ?? 0,
    medium: pieData?.barometerParams?.medium ?? 0,
    high: pieData?.barometerParams?.high ?? 0,
    veryHigh: pieData?.barometerParams?.veryHigh ?? 0,
  };

  const maxLow =
    barometerParams && Math.round(barometerParams.low / 100) * average;
  const maxMedium =
    barometerParams && Math.round((barometerParams.medium / 100) * average);
  const maxHigh =
    barometerParams && Math.round((barometerParams.high / 100) * average);
  const maxVeryHigh =
    barometerParams && Math.round((barometerParams.veryHigh / 100) * average);

  const rootStyles = getComputedStyle(document.documentElement);
  const white = rootStyles.getPropertyValue("--white");
  const graphLow = rootStyles.getPropertyValue("--graph-low");
  const graphMedium = rootStyles.getPropertyValue("--graph-medium");
  const graphHot = rootStyles.getPropertyValue("--graph-hot");
  const graphVeryHot = rootStyles.getPropertyValue("--graph-veryhot");

  const data: Data[] = [
    { name: "0", value: 0, color: white },
    { name: "low", value: maxLow, color: graphLow },
    { name: "medium", value: maxMedium - maxLow, color: graphMedium },
    { name: "high", value: maxHigh - maxMedium, color: graphHot },
    { name: "veryHigh", value: maxVeryHigh - maxHigh, color: graphVeryHot },
  ];

  const dataValues: { [key: string]: number } = {
    0: 0,
    low: maxLow,
    medium: maxMedium,
    high: maxHigh,
    veryHigh: maxVeryHigh,
  };

  const cx = 155;
  const cy = 160;
  const iR = 40;
  const oR = 110;

  const needle = (
    value: number,
    data: Data[],
    cx: number,
    cy: number,
    iR: number,
    oR: number,
    color: string,
  ) => {
    const total = data.reduce((acc, cur) => acc + cur.value, 0);
    const ang =
      180.0 * (1 - value / total) < 0 ? 0 : 180.0 * (1 - value / total);
    const length = (iR + 2 * oR) / 3;
    const sin = Math.sin(-RADIAN * ang);
    const cos = Math.cos(-RADIAN * ang);
    const r = 5;
    const x0 = cx + 5;
    const y0 = cy + 5;
    const xba = x0 + r * sin;
    const yba = y0 - r * cos;
    const xbb = x0 - r * sin;
    const ybb = y0 + r * cos;
    const xp = x0 + length * cos;
    const yp = y0 + length * sin;

    return (
      <g>
        <path
          fill="#030f40"
          fillRule="evenodd"
          d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
        />
        <circle
          cx={x0}
          cy={y0}
          r={4}
          fill="#FFF"
          stroke={color}
          strokeWidth="2.5"
        />
      </g>
    );
  };

  return (
    <div style={{ width: "327px", height: "200px" }}>
      <ResponsiveContainer>
        <PieChart className="PieChart" width={200} height={200}>
          <Pie
            width={150}
            height={200}
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx={cx}
            cy={cy}
            innerRadius={iR}
            outerRadius={oR}
            stroke="none"
            label={({ cx, cy, midAngle, innerRadius, outerRadius, index }) => {
              const RADIAN = Math.PI / 180;
              const radius = 25 + innerRadius + (outerRadius - innerRadius);
              const x = cx + radius * Math.cos(-midAngle * RADIAN);
              const y = cy + radius * Math.sin(-midAngle * RADIAN);

              return (
                <text
                  x={x}
                  y={y}
                  fill="#6c757d"
                  textAnchor={x > cx ? "start" : "end"}
                  fontSize={12}
                >
                  {dataValues[data[index].name] !== 0
                    ? dataValues[data[index].name] + "kg"
                    : dataValues[data[index].name]}
                </text>
              );
            }}
            labelLine={true}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          {needle(needleValue, data, cx, cy, iR, oR, "#030F40")}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
