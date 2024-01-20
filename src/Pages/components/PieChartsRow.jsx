import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Legend, Tooltip, Label } from "recharts";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { styled } from "@mui/material/styles";
import { useDrawingArea } from "@mui/x-charts/hooks";

const PieChartWithText = (props) => {
  const { title, total, data, datakey, color } = props;
  const COLORS = ["purple", "blue", "orange"];
  
  return (
    <section className="mx-auto pt-4 flex justify-start gap-3 p-3">
      <div
        className="flex shadow-lg bg-white rounded-md p-4"
        style={{ textAlign: "left" }}
      >
        <div>
          <PieChart width={130} height={100}>
            <Pie
              colors={['red', 'blue', 'green']} 
              data={data}
              dataKey={datakey}
              cx="50%"
              cy="50%"
              innerRadius={30}
              outerRadius={50}
              fill={color}
            >
            <Cell key={`cell-0`} fill={COLORS[0]} />
            <Cell key={`cell-1`} fill={COLORS[1]} />
            </Pie>
            {/* <Legend verticalAlign="bottom" /> */}
            {/* <Tooltip /> */}
          </PieChart>
        </div>
        <div className="pt-5">
          <Typography variant="p" gutterBottom>
            {title} : {total}
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default PieChartWithText;
