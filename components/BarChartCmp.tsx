"use client";

import React, { useEffect, useState } from "react";
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
import { useUser } from "@clerk/nextjs";

const BarChartCmp = () => {
  const [data, setData] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    const fetchMonthlyData = async () => {
      if (!user?.id) return;

      try {
        const res = await fetch(`/api/transactions/month?userId=${user.id}`);
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("Failed to fetch monthly data:", error);
      }
    };

    fetchMonthlyData();
  }, [user]);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" interval={2} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="income"
          fill="#B3CDAD"
          name="Income"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          dataKey="expense"
          fill="#FF5F5E"
          name="Expense"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartCmp;
