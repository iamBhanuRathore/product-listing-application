"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const Chart: React.FC<{ data: any[] }> = ({ data }) => {
  if (!data.length) return;
  return (
    <div className="flex justify-between my-10">
      <ColorBarChart data={data} title="Product Distribution By Color" />
      <CapacityPieChart data={data} title="Product Distribution By Capacity" />
    </div>
  );
};

export default Chart;

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];

const CapacityPieChart: React.FC<{ data: any[]; title: string }> = ({
  data,
  title,
}) => {
  // Preprocess data to count occurrences of each capacity
  const processedData = data.reduce((acc, product) => {
    const capacity =
      product.data?.capacity?.toLowerCase() ||
      product.data?.["Capacity"]?.toLowerCase() ||
      "Unknown";
    const existingEntry = acc.find((entry: any) => entry.capacity === capacity);
    if (existingEntry) {
      existingEntry.count += 1;
    } else {
      acc.push({ capacity, count: 1 });
    }
    return acc;
  }, [] as { capacity: string; count: number }[]);
  return (
    <div className="flex flex-col text-center">
      <p className="text-xl font-bold">{title}</p>
      <PieChart width={600} height={300}>
        <Pie
          data={processedData}
          dataKey="count"
          nameKey="capacity"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label>
          {processedData.map((_: any, index: number) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};
const ColorBarChart: React.FC<{ data: any[]; title: string }> = ({
  data,
  title,
}) => {
  // Preprocess data to count occurrences of each color
  const processedData = data.reduce((acc, product) => {
    const color =
      product.data?.color?.toLowerCase() ||
      product.data?.["Color"]?.toLowerCase() ||
      "Unknown";
    const existingEntry = acc.find((entry: any) => entry.color === color);
    if (existingEntry) {
      existingEntry.count += 1;
    } else {
      acc.push({ color, count: 1 });
    }
    return acc;
  }, [] as { color: string; count: number }[]);

  return (
    <div className="flex flex-col text-center">
      <p className="text-xl font-bold pb-2">{title}</p>
      <BarChart width={600} height={300} data={processedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="color" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="red" />
      </BarChart>
    </div>
  );
};
