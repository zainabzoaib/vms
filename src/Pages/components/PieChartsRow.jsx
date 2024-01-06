import React, { useState, useEffect } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const PieChartWithText = () => {
//const colors = ['purple', 'blue', 'orange'];
const [visitorCount, setVisitorCount] = useState(0);

useEffect(() => {
  axios.get('http://localhost:5000/api/todays-visitor-records')
    .then((response) => {
      setVisitorCount(response.data.count);
    })
    .catch((error) => {
      console.error('Error fetching today\'s visitor count:', error);
    });
}, []);

  return (
    <section className="mx-auto pt-4 flex justify-start gap-3 p-3">
    <div className="flex shadow-lg bg-white rounded-md p-4" style={{ textAlign: 'left' }}>
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
    <div className="flex shadow-lg bg-white rounded-md p-4" style={{ textAlign: 'left' }}>
    <div> 
    {/* Pie Chart */}
    <PieChart
    colors={['purple', 'blue', 'orange']}
    series={[
    {
      data: [{ id: 0, value: 10, color: 'purple' },
      { id: 1, value: 15, color: 'blue' },
      { id: 2, value: 20, color: 'orange' },],
      innerRadius: 20,
      outerRadius: 50,
      paddingAngle: 5,
      cornerRadius: 5,
      startAngle: -90,
      endAngle: 180,
      cx: 55,
      cy: 45,
    }]}
    width={130}
    height={100}/>
    </div>
    <div className="pt-5">
      {/* Text Description */}
      <Typography variant="p" gutterBottom>
        Total number of visitors this month
      </Typography>
      </div>
  </div>
    <div className="flex shadow-lg bg-white rounded-md p-4" style={{ textAlign: 'left' }}>
    <div> 
    {/* Pie Chart */}
    <PieChart
    colors={['purple', 'blue', 'orange']}
    series={[
    {
      data: [{ id: 0, value: 10, color: 'purple' },
      { id: 1, value: 15, color: 'blue' },
      { id: 2, value: 20, color: 'orange' },],
      innerRadius: 20,
      outerRadius: 50,
      paddingAngle: 5,
      cornerRadius: 5,
      startAngle: -90,
      endAngle: 180,
      cx: 55,
      cy: 45,
    }]}
    width={130}
    height={100}/>
    </div>
    <div className="pt-5">
      {/* Text Description */}
      <Typography variant="p" gutterBottom>
      Total number of visitors till date
      </Typography>
      </div>
    </div>
    </section>
  );
};

export default PieChartWithText;
