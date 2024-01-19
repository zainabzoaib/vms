import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Legend, Tooltip, Label } from "recharts";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { styled } from '@mui/material/styles';
import { useDrawingArea } from '@mui/x-charts/hooks';

const PieChartWithText = () => {
  //const colors = ['purple', 'blue', 'orange'];
  const [visitorCount, setVisitorCount] = useState(0);
  const [monthlyData, setMonthlyData] = useState([]);
  const [yearlyData, setYearlyData]= useState([]);
  const [totalVisitors, setTotalVisitors] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/todays-visitor-records")
      .then((response) => {
        setVisitorCount(response.data.count);
      })
      .catch((error) => {
        console.error("Error fetching today's visitor count:", error);
      });
  }, []);
  const COLORS = [
    "#FF6384",
    "#ee61828c",
    "#FFCE56",
    "#4CAF50",
    "#9C27B0",
    // Add more colors as needed
  ];
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/monthly-visitors")
      .then((response) => {
        const data = response.data;
        console.log(data);
        let chartData = [];
        chartData.push(data);
        chartData.push({ label: "", count: 100-data.count });
        setMonthlyData(chartData);
        setYearlyData(chartData);

        // Calculate total visitors
        const total = data.count;
        setTotalVisitors(total);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!monthlyData || monthlyData.length === 0) {
    return <p>Loading...</p>;
  }
  // const StyledText = styled('text')(({ theme }) => ({
  //   fill: theme.palette.text.primary,
  //   textAnchor: 'middle',
  //   dominantBaseline: 'central',
  //   fontSize: 20,
  // }));
  // function PieCenterLabel({ children }) {
  //   const { width, height, left, top } = useDrawingArea();
  //   return (
  //     <StyledText x={left + width / 2} y={top + height / 2}>
  //       {children}
  //     </StyledText>
  //   );
  // }
  // Provide a default value (an empty array) to avoid "Cannot read properties of undefined" error
  return (
    <section className="mx-auto pt-4 flex justify-start gap-3 p-3">
      <div
        className="flex shadow-lg bg-white rounded-md p-4"
        style={{ textAlign: "left" }}
      >
        <div>
          {/* Left side: Number of visitors */}
          <div className="text-8xl font-bold pr-10">{visitorCount}</div>
        </div>
        <div className="pt-5">
          {/* Text Description */}
          <Typography className="pt-5" variant="p" gutterBottom>
            Total number of visitors today
          </Typography>
        </div>
      </div>
      <div
        className="flex shadow-lg bg-white rounded-md p-4"
        style={{ textAlign: "left" }}
      >
        <div>
          {/* Pie Chart */}
          <PieChart width={130} height={100} >
          {/* <PieCenterLabel>Center label</PieCenterLabel> */}
            <Pie
              data={monthlyData}
              dataKey="count"
              //nameKey="label" // Assuming you have a label property in your data
              cx="50%"
              cy="50%"
              innerRadius={30}
              outerRadius={50}
              fill="#8884d8"
            >
              {monthlyData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            {/* <Legend verticalAlign="bottom" /> */}
        {/* <Tooltip /> */}
          </PieChart>
        </div>
        <div className="pt-5">
          {/* Text Description */}
          <Typography variant="p" gutterBottom>
           Monthly Visitors Count : {totalVisitors}
          </Typography>
        </div>
      </div>
      <div
        className="flex shadow-lg bg-white rounded-md p-4"
        style={{ textAlign: "left" }}
      >
        <div>
          {/* Pie Chart */}
          <PieChart width={130} height={100} >
          {/* <PieCenterLabel>Center label</PieCenterLabel> */}
            <Pie
              data={yearlyData}
              dataKey="count"
              //nameKey="label" // Assuming you have a label property in your data
              cx="50%"
              cy="50%"
              innerRadius={30}
              outerRadius={50}
              fill=""
            >
              {yearlyData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            {/* <Legend verticalAlign="bottom" /> */}
        {/* <Tooltip /> */}
          </PieChart>
        </div>
        <div className="pt-5">
          {/* Text Description */}
          <Typography variant="p" gutterBottom>
           Yearly Visitors Count : {totalVisitors}
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default PieChartWithText;
