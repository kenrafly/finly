"use client";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const generateMonthData = () => {
  const data = [];

  for (let day = 1; day <= 31; day++) {
    data.push({
      name: `${day}`, // Or day.toString().padStart(2, '0') for "01", "02", etc.
      uv: Math.floor(Math.random() * 5000),
      pv: Math.floor(Math.random() * 5000),
    });
  }

  return data;
};

const data = generateMonthData();

const BarChartCmp = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" interval={2} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="uv"
          fill="#B3CDAD"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          dataKey="pv"
          fill="#FF5F5E"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartCmp;
