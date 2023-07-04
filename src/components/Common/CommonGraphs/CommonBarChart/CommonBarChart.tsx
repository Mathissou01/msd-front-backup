import React, { useState } from "react";
import "./common-barChart.scss";
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

interface Data {
  name: string;
  packaging: number;
  householdWaste: number;
}

const BarComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // TODO: Replace data by API when ready
  const data: Data[] = [
    {
      name: "Jan",
      packaging: 49,
      householdWaste: 56,
    },
    {
      name: "Fev",
      packaging: 70,
      householdWaste: 5,
    },
    {
      name: "Mars",
      packaging: 15,
      householdWaste: 52,
    },
    {
      name: "Avr",
      packaging: 20,
      householdWaste: 90,
    },
    {
      name: "Mai",
      packaging: 15,
      householdWaste: 52,
    },
    {
      name: "Juin",
      packaging: 100,
      householdWaste: 32,
    },
    {
      name: "Juil",
      packaging: 15,
      householdWaste: 52,
    },
    {
      name: "Aout",
      packaging: 15,
      householdWaste: 52,
    },
    {
      name: "Sept",
      packaging: 20,
      householdWaste: 100,
    },
    {
      name: "Oct",
      packaging: 15,
      householdWaste: 52,
    },
    {
      name: "Nov",
      packaging: 20,
      householdWaste: 100,
    },
    {
      name: "Dec",
      packaging: 15,
      householdWaste: 52,
    },
    //   {
    //     name: "Jan",
    //     packaging: 50,
    //     householdWaste: 150,
    //   },
    //   {
    //     name: "Fev",
    //     packaging: 20,
    //     householdWaste: 200,
    //   },
    //   {
    //     name: "Mars",
    //     packaging: 15,
    //     householdWaste: 52,
    //   },
    //   {
    //     name: "Avr",
    //     packaging: 20,
    //     householdWaste: 200,
    //   },
    //   {
    //     name: "Mai",
    //     packaging: 15,
    //     householdWaste: 52,
    //   },
    //   {
    //     name: "Juin",
    //     packaging: 20,
    //     householdWaste: 200,
    //   },
    //   {
    //     name: "Juil",
    //     packaging: 15,
    //     householdWaste: 52,
    //   },
    //   {
    //     name: "Aout",
    //     packaging: 15,
    //     householdWaste: 52,
    //   },
    //   {
    //     name: "Sept",
    //     packaging: 20,
    //     householdWaste: 200,
    //   },
    //   {
    //     name: "Oct",
    //     packaging: 15,
    //     householdWaste: 52,
    //   },
    //   {
    //     name: "Nov",
    //     packaging: 20,
    //     householdWaste: 200,
    //   },
    //   {
    //     name: "Dec",
    //     packaging: 15,
    //     householdWaste: 52,
    //   },
  ];

  const handleClick = (data: Data, index: number) => {
    // TODO: add { onDataUpdate } to props
    setActiveIndex(index);
    // onDataUpdate(data);
  };

  const maxVerticalValue = Math.max(
    ...data.map((item) => item.packaging + item.householdWaste),
  );
  const modifiedMaxValue = Math.ceil((maxVerticalValue * 1.1) / 25) * 25;

  return (
    <div className="c-CommonBarChart">
      <p className="c-CommonBarChart__Title">
        Évolution de la production de votre foyer par mois
      </p>
      <ResponsiveContainer>
        <BarChart
          data={data}
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
            name="Emballage"
            stackId="a"
            fill="#F5C500"
            onClick={handleClick}
          >
            {data.map((entry, index) => (
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
            name="Ordure ménagères"
            stackId="a"
            width={15}
            fill="#808080"
            onClick={handleClick}
          >
            {data.map((entry, index) => (
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
            data={data}
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
