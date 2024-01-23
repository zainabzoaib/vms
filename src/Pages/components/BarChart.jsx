import React, { useState, useEffect } from "react";
import {
  BarChart as MuiBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";

const BarChart = (props) => {
  const {title, data, xaxis, yaxis, tooltip} = props;

  if (!data || data.length === 0) {
    return <p>No data available.</p>;
  }
  return (
    <ResponsiveContainer className="md:w-60 w-full" height={400}>
      <MuiBarChart
        data={data}
        margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
      >
        <XAxis dataKey={xaxis} />
        <YAxis dataKey={yaxis} />
        <Bar
          key={xaxis}
          dataKey={yaxis}
          name={tooltip}
          fill={"#c22f4a"}
        />
      </MuiBarChart>
    </ResponsiveContainer>
  );
};

export default BarChart;
