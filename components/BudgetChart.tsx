"use client";

import React from "react";
import { PieChart, Pie, Legend, Cell, Tooltip } from "recharts";

const data01 = [
  { name: "Expense", value: 400 },
  { name: "Remaining", value: 300 },
];

const COLORS = ["#4CAF50", "#FF9800"]; // Green, Orange

export default function PieChartCmp() {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data01}
        dataKey="value"
        cx={200}
        cy={200}
        outerRadius={80}
        label
      >
        {data01.map((_, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend verticalAlign="bottom" height={36} />
    </PieChart>
  );
}
