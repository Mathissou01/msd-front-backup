/* eslint-disable no-shadow */
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "./common-pie.scss";
const RADIAN = Math.PI / 180;
type Data = {
  name: string;
  value: number;
  color: string;
};

const data: Data[] = [
  { name: "Min", value: 0, color: "#000000" },
  { name: "A", value: 26, color: "#4BC068" },
  { name: "B", value: 43, color: "#F5C500" },
  { name: "C", value: 77, color: "#FF8363" },
  { name: "D", value: 84, color: "#EB4A65" },
];
const cx = 155;
const cy = 160;
const iR = 40;
const oR = 110;
// const value = 50;

//Code aiguille
const needle = (
  value: number,
  data: Data[],
  cx: number,
  cy: number,
  iR: number,
  oR: number,
  color: string,
) => {
  // total = La valeur max du Pie c'est la somme des valeurs des couleurs, càd des value dans Data et ce n'est pas ce qu'on veut
  // pour avoir un total qu'on définit nous même, on enlève le fereach et on initialise le total qu'on veut :
  const total = 230;
  // data.forEach((v) => {
  //   total += v.value;
  // });
  // const ang = 90 + 3;
  const ang = 180.0 * (1 - value / total);
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
    // <g transform={`rotate(-90, ${cx}, ${cy})`}>
    <g>
      {/* <path fill={color} d={`M${xba} ${yba} L${xbb} ${ybb} L${xp} ${yp} Z`} /> */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.9 103.7"> */}
      <path
        fill="#030f40"
        fillRule="evenodd"
        d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
        // transform="scale(-1, 1)"
      />

      {/* </svg> */}
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

const CommonPie = () => {
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
            label={({
              cx,
              cy,
              midAngle,
              innerRadius,
              outerRadius,
              // percent,
              index,
            }) => {
              const radius = innerRadius + (outerRadius - innerRadius) * 1.1;
              const x = cx + Math.cos(midAngle * RADIAN) * radius;
              const y = cy + Math.sin(-midAngle * RADIAN) * radius;

              return (
                <text
                  x={x}
                  y={y}
                  fill="#8884d8"
                  textAnchor={x > cx ? "start" : "end"}
                  fontSize={12}
                >
                  {data[index].value !== 0
                    ? data[index].value + "kg"
                    : data[index].value}
                </text>
              );
            }}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          {needle(34.5, data, cx, cy, iR, oR, "#030F40")}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CommonPie;
