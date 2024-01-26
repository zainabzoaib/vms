import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Legend, Tooltip, Label,ResponsiveContainer } from "recharts";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { styled } from "@mui/material/styles";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { Container, Paper } from '@mui/material';

const PieChartWithText = (props) => {
  const { title, total, data, datakey, color } = props;
  const COLORS = ["#8639b1", "#8d38aa82", "orange"];

  return (
    <section className="pt-4 flex justify-start p-3 ">
      <div
        className="flex shadow-lg bg-white rounded-md p-4 border-1 border-red w-full"
        style={{ textAlign: "left" }}
      >
        <div style={{ width: '100%', height: '150px'}}>
      <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey={datakey}
              innerRadius={45}
              outerRadius="100%"
              startAngle={810}
              // endAngle={0}
              fill={color}
              sx={{
                cx:"50%",
                cy:"50%",
              }
              }
            >
              <Cell key={`cell-0`} fill={COLORS[0]} />
              <Cell key={`cell-1`} fill={COLORS[1]} />
            </Pie>
            {/* <Legend verticalAlign="bottom" /> */}
            {/* <Tooltip /> */}
          </PieChart>
          </ResponsiveContainer>
          </div>
        
        <div className="pt-5 items-center flex">
          <Typography variant="p" gutterBottom>
            {title} : {total}
          </Typography>
        </div>
        </div>
    </section>
  );
};

export default PieChartWithText;
