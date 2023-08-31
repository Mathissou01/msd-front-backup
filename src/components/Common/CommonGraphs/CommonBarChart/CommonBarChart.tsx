import React, { Dispatch, SetStateAction } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Brush,
} from "recharts";
import "./common-barChart.scss";

interface TransformedData {
  name: string;
  packaging: number;
  householdWaste: number;
  total: number;
  date: Date;
}
interface IBarComponentProps {
  wasteUserHistory: TransformedData[];
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
}

const BarComponent = ({
  wasteUserHistory,
  activeIndex,
  setActiveIndex,
  setCurrentDate,
}: IBarComponentProps) => {
  const handleClick = (data: TransformedData, index: number) => {
    setActiveIndex(index);
    setCurrentDate(new Date(wasteUserHistory[index].date));
  };

  const maxVerticalValue = Math.max(
    ...wasteUserHistory.map(
      (item: TransformedData) => item?.packaging + item?.householdWaste,
    ),
  );
  const modifiedMaxValue = Math.ceil((maxVerticalValue * 1.1) / 25) * 25;

  return (
    <div className="c-CommonBarChart">
      <p className="c-CommonBarChart__Title">
        Évolution de la production de votre foyer par mois
      </p>
      <ResponsiveContainer>
        <BarChart
          data={wasteUserHistory}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* Vertical lines in the BarChart */}
          <CartesianGrid
            strokeDasharray="0 0"
            vertical={false}
            stroke="#E9ECEF"
          />
          {/* The horizontal values of the BarChart */}
          <XAxis
            dataKey="name"
            tick={{ fill: "#767C97", fontSize: 12 }}
            axisLine={{ stroke: "#E9ECEF", strokeWidth: 1 }}
          />
          {/* The vertical values of the BarChart */}
          <YAxis
            tick={{ fill: "#767C97", fontSize: 12 }}
            domain={[0, modifiedMaxValue]}
            tickCount={Math.ceil(modifiedMaxValue / 25) + 1}
            tickFormatter={(value) => `${value > 0 ? value + " kg" : value}`}
            tickMargin={15}
          />
          <Bar
            barSize={16}
            dataKey="packaging"
            name="Emballages"
            stackId="a"
            fill="#F5C500"
            onClick={handleClick}
          >
            {wasteUserHistory.map((entry: TransformedData, index: number) => (
              <Cell
                cursor="pointer"
                fill={index === activeIndex ? "#F5C500" : "#fdedb4"}
                key={`cell-${index}`}
              />
            ))}
          </Bar>
          <Bar
            barSize={16}
            dataKey="householdWaste"
            name="Ordures ménagères"
            stackId="a"
            width={15}
            fill="#808080"
            onClick={handleClick}
          >
            {wasteUserHistory.map((entry: TransformedData, index: number) => (
              <Cell
                cursor="pointer"
                fill={index === activeIndex ? "#808080" : "#d9d9d9"}
                key={`cell-${index}`}
              />
            ))}
          </Bar>
          <Legend
            iconType="circle"
            iconSize={12}
            wrapperStyle={{ bottom: "-15px", height: "50px", fontSize: "14px" }}
          />
          {/* Set number of bars to display */}
          <Brush
            stroke="#808080"
            leaveTimeOut={1000}
            data={wasteUserHistory}
            updateId="brush"
            travellerWidth={10}
            gap={2}
            dataKey="name"
            startIndex={0}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarComponent;
